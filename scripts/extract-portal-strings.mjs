#!/usr/bin/env node
/**
 * extract-portal-strings.mjs — Erzeugt die deutsche Quelle src/i18n/portal-batch1.js
 * aus den Daten, in denen die Texte tatsaechlich gepflegt werden.
 *
 * Warum ein eigener Batch statt Keys in den lessons-Batches: locales/<lang>.js
 * spreadet die lessons-Batches FLACH (...batch1, ...batch2). Ein weiterer Batch
 * mit demselben Topic-Key wuerde das ganze Lektionsobjekt ersetzen, nicht
 * ergaenzen. portal-batch1 liegt deshalb auf oberster Ebene und fuehrt eigene
 * Namespaces, die mit keinem bestehenden Key kollidieren:
 *
 *   topics.<topicId>.title        Themen-Titel (Quelle: data/topics.js titleKey)
 *   topicView.*                   UI-Texte der Themenansicht (Zurueck, Leerzustand …)
 *   topicGrid.*                   UI-Texte der Themenuebersicht (Klassen-Tabs, Zaehler …)
 *   stations.<StationId>          Stationstitel (Quelle: STATION_REGISTRY in TopicView.jsx)
 *   domains.<domainId>            Sachgebiete (Spiegel von DOMAINS in data/types.js)
 *   diffLevels.<level>            Namen der Niveau-Tabs
 *   relations.<relation>          Etiketten der Bruecken ('baut auf' …)
 *
 * NICHT 'levels' oder 'exercises': die stehen schon inline in locales/de.js und
 * wuerden den Spread von portalBatch1 still ueberschreiben.
 *   bridges.<topicId>.<n>         Sprechblase der n-ten Bruecke (data/lessons/*.js)
 *
 * Die Komponenten fallen auf den deutschen Klartext aus den Daten zurueck, wenn
 * ein Key fehlt. Der Test portal-batch-sync.test.js haelt diese Datei mit den
 * Daten synchron — wer eine Bruecke in data/lessons aendert, laesst dieses
 * Skript erneut laufen und zieht die Uebersetzungen nach.
 *
 * Aufruf:  node scripts/extract-portal-strings.mjs [--check]
 *   --check  schreibt nichts, Exit 1 wenn die Datei veraltet ist
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'src', 'i18n', 'portal-batch1.js');

// Statische UI-Texte. Die Relationen muessen die Schluessel aus
// LessonConnections.jsx (RELATION_COLORS) abdecken.
const TOPIC_VIEW = {
  back: '← Zurück',
  backAria: 'Zurück zur Themenübersicht',
  notFound: 'Thema nicht gefunden:',
  noExercises: 'Keine Aufgaben für dieses Level.',
  solved: '✓ Gelöst',
  unknownType: 'Unbekannter Aufgabentyp: {type}',
};
const TOPIC_GRID = {
  subtitle: 'Gymnasium Klasse 10–12 · Hamburger Bildungsplan',
  totalExercises: '{n}+ Aufgaben',
  myProgress: 'Mein Fortschritt',
  grade: 'Klasse {n}',
  soon: 'bald',
  read: 'gelesen',
  mastered: 'gemeistert',
  comingSoon: 'Bald verfügbar',
  exercises: '{n} Aufgaben',
  solvedPct: '{pct}% gelöst',
  noTopics: 'Keine Themen für diese Klassenstufe verfügbar.',
  myLearningProgress: 'Mein Lernfortschritt',
  classicPortal: '← Zum klassischen Portal',
};
// Muss DOMAINS in src/data/types.js spiegeln — portal-batch-sync.test.js prueft das.
const DOMAIN_LABELS = {
  analysis: 'Analysis',
  geometrie: 'Geometrie',
  stochastik: 'Stochastik',
  algebra: 'Lineare Algebra',
};
const DIFF_LEVEL_NAMES = {
  basis: 'Basis',
  standard: 'Standard',
  erweitert: 'Erweitert',
  ea: 'eA',
};

// Stationstitel bleiben im STATION_REGISTRY gepflegt (eine Quelle). Die
// Eintraege sind einzeilig und haben feste Form — der Regex liest sie wie
// die Themen aus topics.js.
const topicViewSrc = readFileSync(join(ROOT, 'src', 'components', 'views', 'TopicView.jsx'), 'utf8');
const stations = Object.fromEntries(
  [...topicViewSrc.matchAll(/^\s+(\w+): \{ Component: \w+, title: '([^']+)' \},$/gm)]
    .map((m) => [m[1], m[2]]),
);
if (Object.keys(stations).length === 0) {
  console.error('Keine Stationen im STATION_REGISTRY gefunden — Regex an TopicView.jsx anpassen.');
  process.exit(1);
}
// Ueberschrift des Bruecken-Abschnitts. Stand frueher unter lesson.connections
// nur in locales/de.js — alle anderen Sprachen fielen still auf Deutsch zurueck.
const CONNECTIONS_SECTION = {
  title: 'Brücken zu anderen Themen',
  subtitle: 'Wo dieselbe Idee wieder auftaucht',
};
const RELATIONS = {
  'baut-auf': 'baut auf',
  'fuehrt-zu': 'führt zu',
  verwandt: 'verwandt mit',
  anwendung: 'angewandt in',
};

// topics.js importiert ohne Dateiendung (Vite-Stil) und laesst sich deshalb
// nicht direkt in Node laden. Id und titleKey stehen dort aber als einfache
// String-Literale in fester Reihenfolge — die liest der Regex zuverlaessig.
// Der Sync-Test prueft das Ergebnis gegen das echte TOPICS-Array.
const topicsSrc = readFileSync(join(ROOT, 'src', 'data', 'topics.js'), 'utf8');
const TOPIC_ENTRIES = [...topicsSrc.matchAll(/\bid: '([^']+)',[\s\S]*?\btitleKey: '([^']+)',/g)]
  .map((m) => ({ id: m[1], titleKey: m[2] }));

const topics = {};
const bridges = {};
for (const topic of TOPIC_ENTRIES) {
  topics[topic.id] = { title: topic.titleKey };
  const lessonFile = join(ROOT, 'src', 'data', 'lessons', `${topic.id}.js`);
  const lesson = existsSync(lessonFile)
    ? (await import(pathToFileURL(lessonFile).href)).lesson
    : null;
  const conns = lesson?.connections || [];
  const entries = {};
  conns.forEach((conn, n) => {
    if (conn.bubble?.text) entries[n] = conn.bubble.text;
  });
  if (Object.keys(entries).length) bridges[topic.id] = entries;
}

const data = {
  topics,
  topicView: TOPIC_VIEW,
  topicGrid: TOPIC_GRID,
  stations,
  domains: DOMAIN_LABELS,
  diffLevels: DIFF_LEVEL_NAMES,
  relations: RELATIONS,
  connectionsSection: CONNECTIONS_SECTION,
  bridges,
};

const source =
  '// ERZEUGT von scripts/extract-portal-strings.mjs — nicht von Hand bearbeiten.\n' +
  '// Quelle: src/data/topics.js und src/data/lessons/*.js\n' +
  `export const portalBatch1 = ${JSON.stringify(data, null, 2)};\n`;

if (process.argv.includes('--check')) {
  // Zeilenenden normalisieren: Git checkt auf Windows (autocrlf) mit CRLF aus,
  // das Skript schreibt LF. Ohne das meldet --check dort immer "veraltet".
  const current = existsSync(OUT) ? readFileSync(OUT, 'utf8').replace(/\r\n/g, '\n') : '';
  if (current !== source) {
    console.error('portal-batch1.js ist veraltet — node scripts/extract-portal-strings.mjs ausfuehren.');
    process.exit(1);
  }
  console.log('portal-batch1.js ist aktuell.');
} else {
  writeFileSync(OUT, source, 'utf8');
  const nBridges = Object.values(bridges).reduce((s, b) => s + Object.keys(b).length, 0);
  console.log(`geschrieben: ${Object.keys(topics).length} Themen, ${nBridges} Bruecken -> ${OUT}`);
}
