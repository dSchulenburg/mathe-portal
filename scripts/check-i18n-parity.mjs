#!/usr/bin/env node
/**
 * check-i18n-parity.mjs — Prueft die Uebersetzungsdateien des Mathe-Portals
 * gegen die deutsche Fassung.
 *
 * Vier Pruefungen, jede einzeln abschaltbar (--skip=keys,latex,diacritics,wiring):
 *
 *   1. KEY-PARITY   Jede Uebersetzung muss exakt dieselben Schluessel haben
 *                   wie die deutsche Quelle — keine fehlenden, keine zusaetzlichen.
 *                   Ein fehlender Schluessel faellt zur Laufzeit als undefined
 *                   durch und landet als leerer Text im Unterricht.
 *
 *   2. LATEX        Mathematik uebersetzt man nicht. Die Folge der $...$-Spans
 *                   muss in jeder Sprache identisch zur deutschen sein.
 *                   Faengt Uebersetzer (Mensch wie Maschine), die in Formeln
 *                   greifen: \cdot -> \punkt, $f(x)$ -> $f(ks)$, Komma-Dreher.
 *
 *   3. DIAKRITIKA   Latein-schreibende Sprachen muessen ihre eigenen
 *                   Sonderzeichen enthalten. Franzoesisch ohne Akzente ist
 *                   kein Franzoesisch. Schwellenwert bewusst niedrig
 *                   (MIN_DIACRITICS) — er soll den ASCII-Fold fangen,
 *                   nicht Stilfragen bewerten.
 *
 *   4. WIRING       locales/<lang>.js muss jeden Batch importieren UND
 *                   spreaden. Nur importieren reicht nicht — der haeufigste
 *                   Fehler beim Nachziehen einer Sprache.
 *
 * Aufruf:  node scripts/check-i18n-parity.mjs [--json] [--only=fr,pl] [--skip=diacritics]
 * Exit 0 = alles sauber, Exit 1 = mindestens ein Befund.
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const I18N_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'i18n');
const LOCALES_DIR = join(I18N_DIR, 'locales');

const LANGS = ['cs', 'da', 'en', 'es', 'fr', 'it', 'nl', 'no', 'pl', 'pt', 'ru', 'uk'];

// Zeichen, die in einer gesunden Datei dieser Sprache vorkommen MUESSEN.
// en steht bewusst auf null: Englisch hat keine eigenen Diakritika.
const DIACRITICS = {
  cs: '[áčďéěíňóřšťúůýž]',
  da: '[æøå]',
  en: null,
  es: '[áéíóúñ¿¡]',
  fr: '[àâçéèêëîïôùûü]',
  it: '[àèéìòù]',
  nl: '[éëïöü]',
  no: '[æøå]',
  pl: '[ąćęłńóśźż]',
  pt: '[ãáàâçéêíóôõú]',
  ru: '[а-яё]',
  uk: '[а-щьюяіїєґ]',
};

// Unterhalb dieser Trefferzahl gilt eine Datei als ASCII-gefaltet.
//
// Der Schwellenwert MUSS pro Sprache kalibriert sein, sonst misst er nicht
// "ist die Datei gefaltet", sondern "wie diakritikareich ist diese Sprache".
// Gemessen am 05.09.2026 an je einer nachweislich korrekten Datei (~15 KB):
//
//   fr 265–350   pt 289–447   es 191–218   it 61–79   nl 14–34
//
// Niederlaendisch ist der Ausreisser: Diakritika kommen dort fast nur im
// Trema weniger Woerter vor (coefficient -> coëfficiënt, geërgerd, één).
// Ein zaehlbasierter Detektor ist fuer nl deshalb schwach — der Wert 8
// faengt noch die komplett gefaltete Datei (0 Treffer), aber nicht mehr.
//
// cs/pl/da/no haben (Stand 05.09.) keine nachweislich korrekte Referenz im
// Korpus; die Werte sind aus der Schriftdichte der Sprache geschaetzt und
// bewusst niedrig gehalten. Wer eine korrekte Datei nachliefert, misst nach
// und zieht den Wert hoch.
//
// ru/uk pruefen das gesamte kyrillische Alphabet — dort sind Tausende
// Treffer normal, weshalb der Wert deutlich hoeher liegen darf.
const MIN_DIACRITICS = {
  cs: 40, da: 25, en: 0, es: 50, fr: 50, it: 25,
  nl: 8, no: 25, pl: 40, pt: 50, ru: 200, uk: 200,
};
const MIN_DIACRITICS_DEFAULT = 20;

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const onlyArg = args.find((a) => a.startsWith('--only='));
const skipArg = args.find((a) => a.startsWith('--skip='));
const only = onlyArg ? onlyArg.split('=')[1].split(',') : null;
const skip = skipArg ? skipArg.split('=')[1].split(',') : [];

const langs = only ? LANGS.filter((l) => only.includes(l)) : LANGS;

/** Alle deutschen Quelldateien: lessons-<klasse>-batch<n>.js ohne Sprachsuffix. */
function germanSources() {
  return readdirSync(I18N_DIR)
    .filter((f) => /^lessons-\d+-batch\d+\.js$/.test(f))
    .sort();
}

/** Laedt die eine Export-Konstante aus einer batch-Datei. */
async function loadBatch(file) {
  const mod = await import(pathToFileURL(join(I18N_DIR, file)).href);
  const keys = Object.keys(mod).filter((k) => k !== 'default');
  if (keys.length !== 1) {
    throw new Error(`${file}: erwarte genau einen Export, gefunden: ${keys.join(', ') || '(keinen)'}`);
  }
  return { exportName: keys[0], data: mod[keys[0]] };
}

/** Flacht ein verschachteltes Objekt zu Pfad-Strings ab: a.b.c */
function flatten(obj, prefix = '', out = new Map()) {
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) flatten(v, path, out);
    else out.set(path, v);
  }
  return out;
}

/** Alle $...$-Spans eines Strings in Reihenfolge. */
function mathSpans(s) {
  return typeof s === 'string' ? (s.match(/\$[^$]*\$/g) || []) : [];
}

/**
 * Reduziert die Mathematik eines Strings auf ihr vergleichbares Skelett.
 *
 * Drei bewusste Unschaerfen, damit der Prueflauf echten Inhaltsverlust
 * meldet statt legitimer Uebersetzungs- und Satzunterschiede:
 *
 *   \text{...}  Der Inhalt ist Prosa und GEHOERT uebersetzt
 *               ($\text{Bild}$ -> $\text{Obraz}$). Nur die Huelle zaehlt.
 *
 *   {,} == .    Dezimaltrenner ist Typografie, kein Inhalt. Entscheidung
 *               Dirk 05.09.2026: normalisieren, nicht pruefen. Dasselbe gilt
 *               fuer den TAUSENDERtrenner: "1:18.000" ist im Deutschen
 *               richtig und im Ukrainischen/Russischen falsch — dort liest
 *               sich der Punkt als Dezimalzeichen. "1:18000" ist die
 *               korrekte Lokalisierung, kein Uebersetzungsfehler.
 *
 *   Leerraum    Ob ein Satz "$k > 1$" oder "$k$ ist $> 1$" schreibt, ist
 *               Satzbau. Ohne Leerraum sind beide "k>1" und damit gleich.
 *
 * Was danach noch abweicht, ist eine Formel, die fehlt, dazugekommen ist
 * oder inhaltlich veraendert wurde.
 */
/** Ein einzelner $...$-Span auf sein vergleichbares Skelett. */
function normalizeSpan(span) {
  return span
    .replace(/\$/g, '')
    .replace(/\\text\{[^{}]*\}/g, '\\text{}')
    .replace(/\{,\}/g, '.')
    .replace(/(\d)[.   ](\d{3})(?!\d)/g, '$1$2')
    .replace(/\s+/g, '');
}

/**
 * Wie normalizeMath, aber die Spans werden VOR dem Vergleich sortiert.
 * Damit faellt die Reihenfolge aus der Bewertung heraus — noetig, weil
 * Sprachen die Formel im Satz an anderer Stelle unterbringen.
 */
function normalizeMathSorted(s) {
  return mathSpans(s).map(normalizeSpan).sort().join('§');
}

function normalizeMath(s) {
  return mathSpans(s)
    .join('')
    .replace(/\$/g, '')
    .replace(/\\text\{[^{}]*\}/g, '\\text{}')
    .replace(/\{,\}/g, '.')
    // Tausendertrenner tilgen: 18.000 -> 18000, 1 234 567 -> 1234567.
    // Nur zwischen Ziffern und nur in echten Dreiergruppen, damit
    // "0.5" (Dezimalstelle) unangetastet bleibt.
    .replace(/(\d)[.   ](\d{3})(?!\d)/g, '$1$2')
    .replace(/\s+/g, '');
}

const findings = [];
function report(lang, file, kind, detail) {
  findings.push({ lang, file, kind, detail });
}

const sources = germanSources();
if (sources.length === 0) {
  console.error(`Keine deutschen Quelldateien in ${I18N_DIR} gefunden.`);
  process.exit(1);
}

for (const src of sources) {
  const base = src.replace(/\.js$/, '');
  let de;
  try {
    de = await loadBatch(src);
  } catch (e) {
    report('de', src, 'LADEFEHLER', e.message);
    continue;
  }
  const deFlat = flatten(de.data);

  for (const lang of langs) {
    const file = `${base}-${lang}.js`;
    if (!existsSync(join(I18N_DIR, file))) {
      report(lang, file, 'FEHLT', `keine Uebersetzung fuer ${src}`);
      continue;
    }

    let tr;
    try {
      tr = await loadBatch(file);
    } catch (e) {
      report(lang, file, 'LADEFEHLER', e.message);
      continue;
    }

    // 0. Export-Name muss zur deutschen Fassung passen — sonst greift der
    //    Import in locales/<lang>.js ins Leere und der Spread bleibt leer.
    if (tr.exportName !== de.exportName) {
      report(lang, file, 'EXPORTNAME',
        `exportiert '${tr.exportName}', erwartet '${de.exportName}'`);
    }

    const trFlat = flatten(tr.data);

    // 1. Key-Parity
    if (!skip.includes('keys')) {
      const missing = [...deFlat.keys()].filter((k) => !trFlat.has(k));
      const extra = [...trFlat.keys()].filter((k) => !deFlat.has(k));
      if (missing.length) {
        report(lang, file, 'KEY_FEHLT',
          `${missing.length}: ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? ' …' : ''}`);
      }
      if (extra.length) {
        report(lang, file, 'KEY_ZUVIEL',
          `${extra.length}: ${extra.slice(0, 5).join(', ')}${extra.length > 5 ? ' …' : ''}`);
      }
    }

    // 2. LaTeX-Integritaet — nur fuer Keys, die es beidseitig gibt
    if (!skip.includes('latex')) {
      for (const [k, deVal] of deFlat) {
        if (!trFlat.has(k)) continue;
        // Zwei Vergleiche, weil jeder fuer sich eine legitime Variante
        // faelschlich meldet — ein Befund entsteht nur, wenn BEIDE abweichen:
        //
        //   verkettet  toleriert anderen Span-SCHNITT ("$k > 1$" gegen
        //              "$k$ ist $> 1$"), ist aber empfindlich fuer Reihenfolge.
        //   sortiert   toleriert andere WORTSTELLUNG (Englisch stellt den
        //              Formel-Span oft vor die Variablen), ist aber
        //              empfindlich fuer den Schnitt.
        //
        // Was beide Pruefungen nicht passiert, ist eine Formel, die fehlt,
        // dazugekommen ist oder inhaltlich veraendert wurde.
        const a = normalizeMath(deVal);
        const b = normalizeMath(trFlat.get(k));
        const aSorted = normalizeMathSorted(deVal);
        const bSorted = normalizeMathSorted(trFlat.get(k));
        if (a !== b && aSorted !== bSorted) {
          // Fuer die Ausgabe die Roh-Spans zeigen — das Skelett ist zum
          // Vergleichen da, zum Lesen taugt es nicht.
          report(lang, file, 'LATEX',
            `${k}\n        de:  ${mathSpans(deVal).join(' ') || '(keine)'}` +
            `\n        ${lang}:  ${mathSpans(trFlat.get(k)).join(' ') || '(keine)'}`);
        }
      }
    }

    // 3. Diakritika
    if (!skip.includes('diacritics') && DIACRITICS[lang]) {
      const raw = readFileSync(join(I18N_DIR, file), 'utf8');
      const hits = (raw.match(new RegExp(DIACRITICS[lang], 'gi')) || []).length;
      const min = MIN_DIACRITICS[lang] ?? MIN_DIACRITICS_DEFAULT;
      if (hits < min) {
        report(lang, file, 'DIAKRITIKA',
          `nur ${hits} sprachtypische Sonderzeichen (Schwelle ${min}) — sieht nach ASCII-Fold aus`);
      }
    }
  }
}

// 4. Verdrahtung: importiert und spreadet locales/<lang>.js alle Batches?
//    Die Task-Notiz haelt genau diese Falle fest: nur importieren reicht nicht.
if (!skip.includes('wiring')) {
  const expectedExports = [];
  for (const src of sources) {
    try {
      expectedExports.push((await loadBatch(src)).exportName);
    } catch {
      /* Ladefehler ist oben schon gemeldet */
    }
  }
  for (const lang of langs) {
    const lf = join(LOCALES_DIR, `${lang}.js`);
    if (!existsSync(lf)) {
      report(lang, `locales/${lang}.js`, 'FEHLT', 'Locale-Datei fehlt');
      continue;
    }
    const raw = readFileSync(lf, 'utf8');
    for (const name of expectedExports) {
      const imported = new RegExp(`import\\s*\\{\\s*${name}\\s*\\}`).test(raw);
      const spread = new RegExp(`\\.\\.\\.${name}\\b`).test(raw);
      if (!imported && !spread) {
        report(lang, `locales/${lang}.js`, 'NICHT_VERDRAHTET', `${name}: weder importiert noch gespreadet`);
      } else if (!imported) {
        report(lang, `locales/${lang}.js`, 'NICHT_VERDRAHTET', `${name}: gespreadet, aber nicht importiert`);
      } else if (!spread) {
        report(lang, `locales/${lang}.js`, 'NICHT_VERDRAHTET',
          `${name}: importiert, aber NICHT im Spread — der Import allein tut nichts`);
      }
    }
  }
}

if (asJson) {
  console.log(JSON.stringify(findings, null, 2));
} else {
  const byLang = new Map();
  for (const f of findings) {
    if (!byLang.has(f.lang)) byLang.set(f.lang, []);
    byLang.get(f.lang).push(f);
  }
  if (findings.length === 0) {
    console.log(`\n  Alles sauber — ${sources.length} Batches x ${langs.length} Sprachen geprueft.\n`);
  } else {
    console.log(`\n  ${findings.length} Befund(e):\n`);
    for (const [lang, list] of [...byLang].sort()) {
      console.log(`  [${lang}]`);
      for (const f of list) console.log(`    ${f.kind.padEnd(16)} ${f.file}\n        ${f.detail}`);
      console.log('');
    }
  }
  const counts = {};
  for (const f of findings) counts[f.kind] = (counts[f.kind] || 0) + 1;
  if (findings.length) {
    console.log('  Summe nach Art:', Object.entries(counts).map(([k, v]) => `${k}=${v}`).join('  '), '\n');
  }
}

process.exit(findings.length ? 1 : 0);
