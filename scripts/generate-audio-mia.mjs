#!/usr/bin/env node
/**
 * Erzeugt Mias ElevenLabs-Narration (Klasse 10, „Hafenlichter“) für jeden Eintrag in
 * scripts/mia-narration.js → public/assets/mia/audio/<key>.mp3.
 *
 * Stimme + Regler kommen aus public/assets/mia/.voice-config (Laura, speed 1.2 …), damit
 * neu erzeugte Clips exakt wie die vorhandenen klingen. Modell: eleven_multilingual_v2.
 *
 * Warum dieses Skript existiert: Die 14 Clips wurden am 29.03.2026 von Hand per curl erzeugt,
 * ohne Skript. sec00 und sec01 bekamen dabei falsch kodierten Text und sprachen an jeder
 * Umlautstelle Kauderwelsch (Whisper-Abgleich 02.09.2026). Deshalb prüft `guardText()` vor
 * jedem API-Aufruf, dass keine HTML-Entities, Prozent-Escapes oder Tags mehr im Text stehen.
 *
 * Env: ELEVENLABS_API_KEY (Fallback: docker/.env eine Ebene über mathe-portal).
 *
 * Usage:
 *   node scripts/generate-audio-mia.mjs --dry-run                    # nur Plan + Kosten
 *   node scripts/generate-audio-mia.mjs                              # fehlende erzeugen
 *   node scripts/generate-audio-mia.mjs --only sec00-willkommen,sec01-quad-funktionen --force
 *   node scripts/generate-audio-mia.mjs --voice <voiceId>            # Stimme testweise tauschen
 */
import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const AUDIO_DIR = path.join(ROOT, 'public', 'assets', 'mia', 'audio');
const VOICE_CONFIG = path.join(ROOT, 'public', 'assets', 'mia', '.voice-config');

const ENTITIES = {
  auml: 'ä', ouml: 'ö', uuml: 'ü', Auml: 'Ä', Ouml: 'Ö', Uuml: 'Ü', szlig: 'ß', Eacute: 'É', eacute: 'é',
  amp: '&', quot: '"', apos: "'", nbsp: ' ', mdash: '—', ndash: '–', hellip: '…', laquo: '«', raquo: '»',
};

/** Entities auflösen, Tags entfernen, dann hart abbrechen, falls noch Escapes übrig sind. */
function guardText(id, text) {
  let out = text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&([a-zA-Z]+);/g, (m, name) => ENTITIES[name] ?? m)
    .replace(/<[^>]+>/g, '');
  const rest = out.match(/&[a-zA-Z#]\w*;|%[0-9A-Fa-f]{2}|[<>]/g);
  if (rest) throw new Error(`${id}: Text enthält noch Escapes/Tags: ${[...new Set(rest)].join(' ')}`);
  if (!/[äöüÄÖÜß]/.test(out)) console.warn(`  ${id}: Warnung — kein einziger Umlaut im Text, Quelle prüfen`);
  return out;
}

async function loadVoiceConfig() {
  const cfg = Object.fromEntries(
    (await readFile(VOICE_CONFIG, 'utf8')).split(/\r?\n/).filter((l) => l.includes('=')).map((l) => l.split('=').map((s) => s.trim())),
  );
  return {
    voiceId: cfg.VOICE_ID, voiceName: cfg.VOICE_NAME, model: cfg.MODEL || 'eleven_multilingual_v2',
    settings: {
      stability: +cfg.STABILITY, similarity_boost: +cfg.SIMILARITY_BOOST, style: +cfg.STYLE,
      use_speaker_boost: cfg.USE_SPEAKER_BOOST !== 'false', speed: +cfg.SPEED || 1,
    },
  };
}

function parseArgs() {
  const a = { force: false, only: null, dryRun: false, voice: null };
  for (let i = 2; i < process.argv.length; i++) {
    const x = process.argv[i];
    if (x === '--force') a.force = true;
    else if (x === '--dry-run') a.dryRun = true;
    else if (x === '--only') a.only = process.argv[++i].split(',').map((s) => s.trim()).filter(Boolean);
    else if (x === '--voice') a.voice = process.argv[++i];
  }
  return a;
}

async function loadApiKey() {
  if (process.env.ELEVENLABS_API_KEY) return process.env.ELEVENLABS_API_KEY;
  const envPath = path.join(ROOT, '..', '.env');
  if (existsSync(envPath)) {
    const m = (await readFile(envPath, 'utf8')).match(/^ELEVENLABS_API_KEY=(\S+)/m);
    if (m) return m[1];
  }
  throw new Error('ELEVENLABS_API_KEY weder in der Umgebung noch in docker/.env');
}

async function generate(apiKey, text, voiceId, model, settings) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: { 'xi-api-key': apiKey, 'Content-Type': 'application/json; charset=utf-8', Accept: 'audio/mpeg' },
    body: JSON.stringify({ text, model_id: model, voice_settings: settings }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${await res.text()}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  const args = parseArgs();
  const { MIA_NARRATION } = await import(pathToFileURL(path.join(ROOT, 'scripts', 'mia-narration.js')).href);
  const voice = await loadVoiceConfig();
  const voiceId = args.voice || voice.voiceId;
  if (!args.dryRun) await mkdir(AUDIO_DIR, { recursive: true });

  const ids = args.only || Object.keys(MIA_NARRATION);
  const unknown = ids.filter((id) => !MIA_NARRATION[id]);
  if (unknown.length) throw new Error(`Unbekannte Keys: ${unknown.join(', ')}`);

  console.log(`Stimme: ${voice.voiceName} (${voiceId}) · Modell: ${voice.model} · ${JSON.stringify(voice.settings)}\n`);
  let totalChars = 0, generated = 0, apiKey = null;
  for (const id of ids) {
    const dest = path.join(AUDIO_DIR, `${id}.mp3`);
    if (!args.force && existsSync(dest)) { console.log(`  ${id}.mp3 — existiert, übersprungen`); continue; }
    const text = guardText(id, MIA_NARRATION[id]);
    totalChars += text.length;
    if (args.dryRun) { console.log(`  ${id}.mp3 — würde ${text.length} Zeichen erzeugen`); continue; }
    if (!apiKey) apiKey = await loadApiKey();
    process.stdout.write(`  ${id}.mp3 (${text.length} Zeichen)... `);
    try {
      const mp3 = await generate(apiKey, text, voiceId, voice.model, voice.settings);
      await writeFile(dest, mp3);
      console.log(`✓ ${(mp3.length / 1024).toFixed(0)} kB`);
      generated++;
    } catch (e) { console.log(`✗ ${e.message}`); process.exitCode = 1; }
  }
  console.log(`\nFertig. ${generated} Dateien. ${totalChars} Zeichen (~$${(totalChars / 1000 * 0.3).toFixed(2)}).`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
