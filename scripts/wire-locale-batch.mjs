#!/usr/bin/env node
/**
 * wire-locale-batch.mjs — Haengt einen Uebersetzungs-Batch in locales/<lang>.js ein.
 *
 * Zwei Stellen, beide noetig (die Task-Notiz zum Mathe-Portal haelt genau das fest:
 * "in locales/<lang>.js BEIDES tun — importieren UND in den Spread aufnehmen;
 * nur importieren reicht nicht"):
 *
 *   1. import { <export> } from '../lessons-<klasse>-batch<n>-<lang>';
 *   2. ...<export>,   im lessons-Spread
 *
 * Eingefuegt wird jeweils DIREKT NACH einem Anker-Batch, damit die Reihenfolge
 * der deutschen Fassung erhalten bleibt — die Spread-Reihenfolge entscheidet bei
 * gleichen Topic-Keys, wer gewinnt.
 *
 * CRLF: Die Locale-Dateien haben Windows-Zeilenenden. Wir lesen sie roh, leiten
 * das Zeilenende aus der Datei selbst ab und schreiben es zurueck — sonst
 * erzeugt ein Einzeiler-Patch einen Diff ueber die ganze Datei.
 *
 * Idempotent: Ist der Batch schon verdrahtet, passiert nichts.
 *
 * Aufruf:
 *   node scripts/wire-locale-batch.mjs --batch=lessons-10-batch4 --export=batch4 \
 *        --after=batch3 [--langs=cs,da,...] [--dry-run]
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const LOCALES_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'i18n', 'locales');
const ALL_LANGS = ['cs', 'da', 'en', 'es', 'fr', 'it', 'nl', 'no', 'pl', 'pt', 'ru', 'uk'];

const args = Object.fromEntries(
  process.argv.slice(2)
    .filter((a) => a.startsWith('--'))
    .map((a) => {
      const [k, v] = a.slice(2).split('=');
      return [k, v ?? true];
    }),
);

for (const req of ['batch', 'export', 'after']) {
  if (!args[req]) {
    console.error(`Fehlt: --${req}=…\n\nBeispiel:\n  node scripts/wire-locale-batch.mjs --batch=lessons-10-batch4 --export=batch4 --after=batch3`);
    process.exit(2);
  }
}

const langs = args.langs ? String(args.langs).split(',') : ALL_LANGS;
const dryRun = Boolean(args['dry-run']);

let changed = 0;
let skipped = 0;
let failed = 0;

for (const lang of langs) {
  const file = join(LOCALES_DIR, `${lang}.js`);
  if (!existsSync(file)) {
    console.log(`  ${lang.padEnd(3)} FEHLT      locales/${lang}.js existiert nicht`);
    failed++;
    continue;
  }

  const raw = readFileSync(file, 'utf8');
  const eol = raw.includes('\r\n') ? '\r\n' : '\n';

  const importRe = new RegExp(`import\\s*\\{\\s*${args.export}\\s*\\}`);
  const spreadRe = new RegExp(`\\.\\.\\.${args.export}\\b`);
  if (importRe.test(raw) && spreadRe.test(raw)) {
    console.log(`  ${lang.padEnd(3)} schon da   ${args.export}`);
    skipped++;
    continue;
  }

  const lines = raw.split(eol);

  // Anker 1: die Import-Zeile des --after-Batches
  const importAnchor = lines.findIndex((l) => new RegExp(`^import\\s*\\{\\s*${args.after}\\s*\\}`).test(l));
  // Anker 2: die Spread-Zeile des --after-Batches
  const spreadAnchor = lines.findIndex((l) => new RegExp(`^\\s*\\.\\.\\.${args.after},\\s*$`).test(l));

  if (importAnchor === -1 || spreadAnchor === -1) {
    console.log(`  ${lang.padEnd(3)} FEHLER     Anker '${args.after}' nicht gefunden (import=${importAnchor}, spread=${spreadAnchor})`);
    failed++;
    continue;
  }

  // Einruecken wie die Anker-Spread-Zeile, damit der Diff sauber bleibt
  const indent = lines[spreadAnchor].match(/^\s*/)[0];

  // Von hinten nach vorne einfuegen, damit der fruehere Index gueltig bleibt
  lines.splice(spreadAnchor + 1, 0, `${indent}...${args.export},`);
  lines.splice(importAnchor + 1, 0, `import { ${args.export} } from '../${args.batch}-${lang}';`);

  if (dryRun) {
    console.log(`  ${lang.padEnd(3)} WUERDE     import nach Zeile ${importAnchor + 1}, spread nach Zeile ${spreadAnchor + 1}`);
  } else {
    writeFileSync(file, lines.join(eol), 'utf8');
    console.log(`  ${lang.padEnd(3)} verdrahtet ${args.export}`);
  }
  changed++;
}

console.log(`\n  ${dryRun ? 'Trockenlauf: ' : ''}${changed} geaendert, ${skipped} schon vorhanden, ${failed} fehlgeschlagen.\n`);
process.exit(failed ? 1 : 0);
