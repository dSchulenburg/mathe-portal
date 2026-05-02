#!/usr/bin/env node
/**
 * fix-umlaute.mjs — Repariert Umlaut-Transliterationen (oe/ue/ae/ss) in
 * deutschen Aufgaben- und Lerninhalts-Daten des Mathe-Portals.
 *
 * Strategie: strenge Whitelist deutscher Wortstämme. Suffix wird per
 * Capture-Group erhalten, damit Inflexionen mit einem Eintrag erfasst
 * werden ("geoeffnet" + "geoeffnete" + "geoeffneter" → ein Stamm).
 *
 * Längste Stämme zuerst (Sort), damit "ueberpruef" vor "ueber" greift.
 * Idempotent: mehrmaliger Lauf macht nichts kaputt.
 *
 * Aufruf: node scripts/fix-umlaute.mjs
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Stamm-Mappings — Phase 1 strenge Whitelist.
// Reihenfolge egal, wird nach Länge desc. sortiert.
const stems = [
  // — sehr spezifische, lange Stämme (zuerst greifen)
  ['ueberpruef', 'überprüf'],
  ['beruecksicht', 'berücksicht'],
  ['einfuehrung', 'einführung'],
  ['ausfuehrlich', 'ausführlich'],
  ['ausfuehrung', 'ausführung'],
  ['durchfuehr', 'durchführ'],
  ['gluecksrad', 'glücksrad'],
  ['natuerlich', 'natürlich'],
  ['gewoehnlich', 'gewöhnlich'],
  ['unmoeglich', 'unmöglich'],
  ['tatsaechlich', 'tatsächlich'],
  ['ungefaehr', 'ungefähr'],
  ['regelmaess', 'regelmäß'],
  ['gleichmaess', 'gleichmäß'],
  ['benoetig', 'benötig'],
  ['veraender', 'veränder'],
  ['verkuerz', 'verkürz'],
  ['unueblich', 'unüblich'],
  ['gluecklich', 'glücklich'],
  ['bruechig', 'brüchig'],
  ['ausgewaehlt', 'ausgewählt'],
  ['grundgleich', null], // ok wie es ist
  ['gleichgewicht', null], // ok

  // — mittlere Stämme
  ['geoeffn', 'geöffn'],
  ['oeffn', 'öffn'],
  ['naehern', 'nähern'],
  ['naechst', 'nächst'],
  ['aehnlich', 'ähnlich'],
  ['erklaer', 'erklär'],
  ['gemaess', 'gemäß'],
  ['gehoer', 'gehör'],
  ['hoechst', 'höchst'],
  ['troest', 'tröst'],
  ['schoen', 'schön'],
  ['wuerde', 'würde'],
  ['wuerf', 'würf'], // würfel, würfeln
  ['fruehen', 'frühen'],
  ['frueher', 'früher'],
  ['truebe', 'trübe'],
  ['waehl', 'wähl'], // wählen, gewählt, Auswahl etc — careful, "waehlbar" auch
  ['waehrend', 'während'],

  // — kurze, häufige Stämme
  ['zaehl', 'zähl'],
  ['naeh', 'näh'],   // näher, nähe, nähern
  ['spaet', 'spät'],
  ['aender', 'änder'],
  ['noetig', 'nötig'],
  ['hoeh', 'höh'],
  ['hoer', 'hör'],
  ['loes', 'lös'],
  ['koenn', 'könn'],
  ['moegl', 'mögl'],
  ['pruef', 'prüf'],
  ['muess', 'müss'],
  ['duerf', 'dürf'],
  ['drueck', 'drück'],
  ['glueck', 'glück'],
  ['gruen', 'grün'],
  ['fuehr', 'führ'],   // führen, führung
  ['fuehl', 'fühl'],   // fühlen, gefühl
  ['fuell', 'füll'],   // füllen, fülle
  ['groess', 'größ'],  // größer, größe, größte
  ['schliess', 'schließ'],
  ['beschliess', 'beschließ'],

  // — Standalone words (kurz, mit \b...\b)
  ['fuer', 'für'],
  ['ueber', 'über'],
  ['gross', 'groß'],
  ['spass', 'spaß'],
  ['fuenf', 'fünf'],
  // 'weiss' ausgelassen — kann legitim englisch sein
  // 'masse' ausgelassen — Masse vs. Maße ist mehrdeutig

  // Phase 2: weitere häufige Stämme aus dem Story-/Lesson-Korpus
  ['sprueh', 'sprüh'],
  ['loesch', 'lösch'],
  ['gegenstueck', 'gegenstück'],
  ['waechs', 'wächs'],
  ['zerfaell', 'zerfäll'],
  ['praezis', 'präzis'],
  ['ergaenz', 'ergänz'],
  ['aeusser', 'äußer'],
  ['rueckwaert', 'rückwärt'],
  ['beruehmt', 'berühmt'],
  ['laeuf', 'läuf'],
  ['erlaeut', 'erläut'],
  ['schluessel', 'schlüssel'],
  ['daemm', 'dämm'],
  ['kuerz', 'kürz'],
  ['fluessig', 'flüssig'],
  ['gegensaetz', 'gegensätz'],
  ['plaetz', 'plätz'],
  ['saetz', 'sätz'],         // Sätze, sätzen
  ['gequae', 'gequä'],       // gequält, gequälte
  ['quaelen', 'quälen'],
  ['quaelt', 'quält'],
  ['hoehl', 'höhl'],         // Höhle, höhlen
  ['vergroesser', 'vergrößer'],

  // Phase 3: Compounds mit Präfixen (über die \b sonst nicht greift)
  ['geloesch', 'gelösch'],
  ['dafuer', 'dafür'],
  ['hierfuer', 'hierfür'],
  ['wofuer', 'wofür'],
  ['darueber', 'darüber'],
  ['hierueber', 'hierüber'],
  ['worueber', 'worüber'],
  ['nuetz', 'nütz'],         // nützlich, nützen
  ['haelft', 'hälft'],
  ['uebrig', 'übrig'],

  // Phase 4: Compounds aus Story-Texten
  ['abhaengig', 'abhängig'],
  ['unabhaengig', 'unabhängig'],
  ['abschaetz', 'abschätz'],
  ['abstaen', 'abständ'],
  ['abstuerz', 'abstürz'],
  ['abwaert', 'abwärt'],
  ['annaeher', 'annäher'],
  ['anfaeng', 'anfäng'],
  ['ausgewaehl', 'ausgewähl'],
  ['gewaehl', 'gewähl'],
  ['gewaehrt', 'gewährt'],
  ['einsetz', null],         // ok
  ['umfaeng', 'umfäng'],
  ['veraender', 'veränder'],
  ['vergaeng', 'vergäng'],
  ['ablaeuf', 'abläuf'],

  // ok-Wörter (no-op skip-list für Klarheit)
  ['vorhand', null],
  ['unvermeid', null],
  ['wahrgenomm', null],
  ['darunter', null],
];

const allStems = stems
  .filter(([_, repl]) => repl !== null)
  .sort((a, b) => b[0].length - a[0].length);

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

// Baut zwei Replacer pro Stamm: lowercase + capitalized
function makeReplacers(stems) {
  return stems.flatMap(([asciiStem, utf8Stem]) => [
    [new RegExp(`\\b${asciiStem}(\\w*)`, 'g'), `${utf8Stem}$1`],
    [new RegExp(`\\b${capitalize(asciiStem)}(\\w*)`, 'g'), `${capitalize(utf8Stem)}$1`],
  ]);
}

// Generelles Pattern: deutsche -ität-Endung
// "itaet" am Wortende ist im Deutschen praktisch immer "-ität"
// (Realität, Komplexität, Universität, Opazität, ...)
const ityPatterns = [
  [/\b(\w{2,})itaet\b/g, '$1ität'],
  [/\b(\w{2,})itaeten\b/g, '$1itäten'],
  [/\b(\w{2,})itaets(\w*)/g, '$1itäts$2'],
];

const replacers = [...makeReplacers(allStems), ...ityPatterns];

// Slug/ID-Felder dürfen NICHT angefasst werden — IDs sind URL-safe ASCII.
// Auch Import-/Export-Statements sind tabu (Pfade enthalten Slugs).
// CAVEAT: JS-Identifier in Code-Lines (z.B. "exercises: aehnlichkeitEx")
// werden ggf. trotzdem getroffen, wenn ein Stamm mitten im Identifier
// matcht. Workaround: solche Lines manuell zurücksetzen oder strikten
// String-only-Modus (ASCII '...' Quotes) ergänzen.
// Lerneffekt aus zwei kaputten Läufen: '10-aehnlichkeit' wurde zu
// '10-ähnlichkeit' ersetzt, was Imports und Routing zerschossen hat.
const SLUG_OR_IMPORT_LINE =
  /(?:^|[\s,])(?:id|topicId|tags?|slug|key)\s*:|^\s*(?:import|export)\b|from\s*['"]/;

function fixContent(content) {
  let count = 0;
  const lines = content.split('\n');
  const fixedLines = lines.map((line) => {
    // Skip Lines mit Slug/ID-Feldern komplett — Inhalte dürfen ASCII bleiben
    if (SLUG_OR_IMPORT_LINE.test(line)) return line;

    let fixed = line;
    for (const [re, repl] of replacers) {
      fixed = fixed.replace(re, (...args) => {
        count++;
        return repl.replace(/\$(\d+)/g, (_, n) => args[parseInt(n, 10)]);
      });
    }
    return fixed;
  });
  return { result: fixedLines.join('\n'), count };
}

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '__tests__' || entry.name.startsWith('.')) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(path);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      yield path;
    }
  }
}

function isDeFile(path) {
  // Skip translation-files (lessons-XX-batchY-CC.js mit 2-Letter-Code)
  if (/lessons-\d+-batch\d+-(?:cs|da|en|es|fr|it|nl|no|pl|pt|ru|uk)\.js$/i.test(path)) return false;
  // Include alle data/ + i18n DE-Files (lessons-XX-batchY.js ohne CC)
  return path.includes('data') || /lessons-\d+-batch\d+\.js$/i.test(path);
}

let totalFiles = 0;
let changedFiles = 0;
let totalReplacements = 0;
const summary = [];

for (const file of walk('src')) {
  if (!isDeFile(file)) continue;
  totalFiles++;

  const original = readFileSync(file, 'utf-8');
  const { result: fixed, count } = fixContent(original);

  if (original !== fixed) {
    changedFiles++;
    writeFileSync(file, fixed, 'utf-8');
    summary.push({ file, count });
    totalReplacements += count;
  }
}

console.log(`\nDateien gescannt:    ${totalFiles}`);
console.log(`Dateien geändert:    ${changedFiles}`);
console.log(`Replacements gesamt: ${totalReplacements}`);
console.log(`\nGeänderte Dateien (sortiert nach Anzahl):`);
summary.sort((a, b) => b.count - a.count);
summary.forEach((s) => console.log(`  ${s.count.toString().padStart(4)}  ${s.file}`));
