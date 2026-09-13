#!/usr/bin/env node
/**
 * wire-portal-batch.mjs — Haengt portal-batch1 in locales/<lang>.js ein.
 *
 * Anders als wire-locale-batch.mjs (lessons-Spread) gehoert portal-batch1 auf
 * die OBERSTE Ebene des Locale-Objekts, weil es eigene Namespaces mitbringt
 * (topics, topicView, relations, bridges). Zwei Stellen:
 *
 *   1. import { portalBatch1 } from '../portal-batch1-<lang>';   (de: ohne Suffix)
 *      direkt nach dem letzten lessons-Import
 *   2. ...portalBatch1,   als erste Zeile in `export default {`
 *
 * CRLF-erhaltend und idempotent, wie wire-locale-batch.mjs.
 *
 * Aufruf:  node scripts/wire-portal-batch.mjs [--langs=de,en,...] [--dry-run]
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const LOCALES_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'i18n', 'locales');
const ALL_LANGS = ['de', 'cs', 'da', 'en', 'es', 'fr', 'it', 'nl', 'no', 'pl', 'pt', 'ru', 'uk'];
const EXPORT = 'portalBatch1';

const args = process.argv.slice(2);
const langsArg = args.find((a) => a.startsWith('--langs='));
const langs = langsArg ? langsArg.split('=')[1].split(',') : ALL_LANGS;
const dryRun = args.includes('--dry-run');

let failed = 0;
for (const lang of langs) {
  const file = join(LOCALES_DIR, `${lang}.js`);
  if (!existsSync(file)) {
    console.log(`  ${lang.padEnd(3)} FEHLT      locales/${lang}.js`);
    failed++;
    continue;
  }
  const raw = readFileSync(file, 'utf8');
  const eol = raw.includes('\r\n') ? '\r\n' : '\n';
  const hasImport = new RegExp(`import\\s*\\{\\s*${EXPORT}\\s*\\}`).test(raw);
  const hasSpread = new RegExp(`\\.\\.\\.${EXPORT}\\b`).test(raw);
  if (hasImport && hasSpread) {
    console.log(`  ${lang.padEnd(3)} schon da`);
    continue;
  }

  const lines = raw.split(eol);
  const lastImport = lines.reduce((acc, l, i) => (/^import\s/.test(l) ? i : acc), -1);
  const exportLine = lines.findIndex((l) => /^export default \{\s*$/.test(l));
  if (lastImport === -1 || exportLine === -1) {
    console.log(`  ${lang.padEnd(3)} FEHLER     Anker nicht gefunden (import=${lastImport}, export=${exportLine})`);
    failed++;
    continue;
  }

  const suffix = lang === 'de' ? '' : `-${lang}`;
  if (!hasSpread) lines.splice(exportLine + 1, 0, `  ...${EXPORT},`);
  if (!hasImport) lines.splice(lastImport + 1, 0, `import { ${EXPORT} } from '../portal-batch1${suffix}';`);

  if (dryRun) {
    console.log(`  ${lang.padEnd(3)} WUERDE     import nach Zeile ${lastImport + 1}, spread nach Zeile ${exportLine + 1}`);
  } else {
    writeFileSync(file, lines.join(eol), 'utf8');
    console.log(`  ${lang.padEnd(3)} verdrahtet`);
  }
}
process.exit(failed ? 1 : 0);
