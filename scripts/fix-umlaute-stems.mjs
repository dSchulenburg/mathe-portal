#!/usr/bin/env node
/**
 * Gemeinsamer Kern der Umlaut-Werkzeuge: Whitelist, Ersetzer, Dateiauswahl.
 *
 * Bewusst herausgeloest (08.09.2026), damit fix-umlaute.mjs (repariert) und
 * umlaut-bericht.mjs (zeigt, was offen ist) dieselbe Whitelist benutzen. Zwei
 * Kopien wuerden auseinanderlaufen, und der Bericht meldete dann Arbeit, die
 * es nicht mehr gibt -- oder verschwiege welche.
 */
import { readdirSync } from 'node:fs';
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

// HISTORIE: Bis zum 08.09.2026 arbeitete das Werkzeug ZEILENWEISE und schuetzte
// sich mit dieser Regex vor Slug-/Import-Zeilen. Das reichte nicht -- der eigene
// CAVEAT des Skripts ("JS-Identifier in Code-Lines, z.B. exercises: aehnlichkeitEx,
// werden ggf. trotzdem getroffen") ist am 08.09. im Trockenlauf tatsaechlich
// eingetreten: 'exercises: aehnlichkeitEx' wurde zu 'ähnlichkeitEx', waehrend der
// Import-Alias unveraendert blieb -- ein ReferenceError beim Start.
//
// Seitdem arbeitet fix-umlaute.mjs nur noch INNERHALB von Zeichenketten, und auch
// dort nur in solchen mit Leerzeichen. Begruendung aus der Messung: alle 169
// Literale ohne Leerzeichen sind Slugs, Tags, IDs oder Asset-Pfade
// ('fuehrt-zu', '10-koerper', 'aehn-basis-001', .../sec07-koerper.mp3) -- kein
// einziges ist sichtbarer Text. Prosa hat Leerzeichen, Bezeichner nicht.
//
// Die Regex bleibt als zweiter Guertel erhalten.
const SLUG_OR_IMPORT_LINE =
  /(?:^|[\s,])(?:id|topicId|tags?|slug|key)\s*:|^\s*(?:import|export)\b|from\s*['"]/;

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
  const p = path.split('\\').join('/');
  // Uebersetzungen sind tabu -- sie blieben schon beim Lauf 5824c18 (02.05.2026)
  // unberuehrt und muessen es bleiben. Zwei Schreibweisen im Bestand:
  // lessons-XX-batchY-CC.js und locales/CC.js.
  if (/lessons-\d+-batch\d+-[a-z]{2}\.js$/i.test(p)) return false;
  if (/\/locales\/(?!de\.js$)[a-z]{2}\.js$/i.test(p)) return false;
  // Deutsch: data/, die DE-Batchdateien -- und locales/de.js, das bis zum
  // 08.09.2026 durch BEIDE Einschlussregeln fiel und deshalb nie repariert
  // wurde, obwohl es deutsche Oberflaechentexte enthaelt.
  return p.includes('data')
    || /lessons-\d+-batch\d+\.js$/i.test(p)
    || /\/locales\/de\.js$/i.test(p);
}


export {
  stems, allStems, replacers, replacers as ersetzer,
  walk, isDeFile, isDeFile as istDeutscheDatei, SLUG_OR_IMPORT_LINE,
};
