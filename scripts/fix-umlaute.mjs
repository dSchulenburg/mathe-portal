#!/usr/bin/env node
/**
 * fix-umlaute.mjs — repariert Umlaut-Transliterationen (oe/ue/ae) in den
 * DEUTSCHEN Aufgaben- und Lerninhalts-Daten des Mathe-Portals.
 *
 * WO ERSETZT WIRD -- die wichtigste Regel dieses Werkzeugs:
 * ausschliesslich INNERHALB von Zeichenkettenliteralen, und dort nur in
 * solchen, die ein LEERZEICHEN enthalten.
 *
 * Begruendung ist gemessen, nicht geschaetzt (08.09.2026, 82 deutsche
 * Dateien): von den Literalen mit ae/oe/ue haben 633 ein Leerzeichen -- das
 * ist die Prosa. Die 169 ohne Leerzeichen sind ausnahmslos Slugs, Tags, IDs
 * oder Asset-Pfade: 'fuehrt-zu', '10-koerper', 'aehn-basis-001',
 * '.../sec07-koerper.mp3'. Kein einziges davon ist sichtbarer Text, und jedes
 * davon zerbricht, wenn man es "repariert".
 *
 * Bis zum 08.09.2026 arbeitete das Skript ZEILENWEISE. Sein eigener CAVEAT
 * warnte davor ("JS-Identifier in Code-Lines, z.B. exercises: aehnlichkeitEx,
 * werden ggf. trotzdem getroffen") -- und genau das trat im Trockenlauf ein:
 *
 *   -import { exercises as aehnlichkeitEx } from './exercises/10-aehnlichkeit';
 *   +import { exercises as aehnlichkeitEx } from './exercises/10-ähnlichkeit';
 *   -    exercises: aehnlichkeitEx,
 *   +    exercises: ähnlichkeitEx,
 *
 * Importpfad zerschossen, Bezeichner umbenannt, Alias nicht -- ReferenceError
 * beim Start. Dieselbe Familie wie die "zwei kaputten Laeufe", die der alte
 * Kommentar erwaehnte. Die Leerzeichen-Regel schliesst sie aus.
 *
 * DREI DURCHGAENGE je Literal, in dieser Reihenfolge:
 *
 *   1. TIPPFEHLER  Drei benannte Einzelfaelle. Muessen ZUERST laufen, sonst
 *                  macht Durchgang 3 aus 'Streckentoenderung' erst
 *                  'Streckentönderung' und die Korrektur greift ins Leere.
 *   2. WORTANFANG  Die \b-verankerten Staemme aus fix-umlaute-stems.mjs.
 *                  Inhaltlich unveraendert seit 5824c18 (02.05.2026).
 *   3. MEDIAL      Die Staemme aus fix-umlaute-medial.mjs, an jeder Stelle im
 *                  Wort. Nachtrag zu dem, was 5824c18 selbst offen liess:
 *                  "Verbleibende Reste sind Compound-Woerter (z. B.
 *                  Abhaengigkeit, Annaeherung) in Story-Texten — werden
 *                  separat ergaenzt." Gemessen: bei 134 von 292 betroffenen
 *                  Woertern steht die Transliteration erst ab Zeichen 5,
 *                  ein \b-Stamm kann die nicht erreichen.
 *
 * Durchgang 3 schuetzt jedes Wort einzeln ueber TRANSLIT_UNVERDAECHTIG:
 * 'blaue', 'aktuell', 'Frequenz', 'kongruent', 'congruence', 'Bluetooth'
 * bleiben unangetastet.
 *
 * Uebersetzungen bleiben tabu (siehe isDeFile). Nur locales/de.js und die
 * deutschen Batch-/Datendateien werden angefasst.
 *
 * Idempotent: ein zweiter Lauf aendert nichts mehr.
 *
 * Aufruf:
 *   node scripts/fix-umlaute.mjs --dry    # zeigt nur, was passieren wuerde
 *   node scripts/fix-umlaute.mjs          # schreibt
 *
 * Was danach noch offen ist, zeigt scripts/umlaut-bericht.mjs.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { replacers, walk, isDeFile } from './fix-umlaute-stems.mjs';
import { MEDIAL, TRANSLIT_UNVERDAECHTIG } from './fix-umlaute-medial.mjs';

// Laengste Staemme zuerst, damit 'verstoess' vor 'stoess' greift und
// 'natuerlich' vor 'ueb'.
const MEDIAL_SORTIERT = [...MEDIAL].sort((a, b) => b[0].length - a[0].length);

/**
 * Drei Tippfehler im Bestand, die KEINE Transliterationen sind und deshalb von
 * keinem Stamm erreicht werden koennen. Am 08.09.2026 uebrig geblieben und
 * einzeln im Quelltext nachgesehen:
 *
 *   'erhaeelt'            doppeltes e  -> erhält   (11-extremwertaufgaben)
 *   'Höhenannaehrung'     fehlendes e  -> Höhenannäherung (11-integralrechnung)
 *   'Streckentoenderung'  o statt a    -> Streckenänderung (lessons-10-batch3;
 *                                        der Nachbarsatz schreibt korrekt
 *                                        'Zeitaenderung')
 *
 * Bewusst benannte Einzelfaelle und keine Staemme: ein Stamm wuerde
 * suggerieren, dahinter stecke eine Regel.
 */
const TIPPFEHLER = [
  ['erhaeelt', 'erhält'],
  ['Höhenannaehrung', 'Höhenannäherung'],
  ['Streckentoenderung', 'Streckenänderung'],
  ['eingezaeumt', 'eingezäunt'],      // 'einzäunen', nicht 'einzäumen' (10-exp-wachstum)
  ['gegenlaeudig', 'gegenläufig'],    // d statt f (12-hypothesentests)
];

/** Ein einzelnes Wort medial reparieren -- oder unveraendert zurueckgeben. */
function medialWort(wort) {
  if (!/ae|oe|ue/i.test(wort)) return wort;
  if (!TRANSLIT_UNVERDAECHTIG(wort)) return wort;
  // VERSALIEN (UEBER 2 %) behandeln wir eigens: sie haben eine Binnenmajuskel
  // und wuerden sonst vom naechsten Test aussortiert.
  const versalien = wort.length > 1 && wort === wort.toUpperCase() && wort !== wort.toLowerCase();
  // Binnenmajuskel (GarageBand, CamelCase-Bezeichner): Finger weg, die
  // Gross-/Kleinbehandlung unten wuerde sie zerstoeren.
  if (!versalien && /.[A-ZÄÖÜ]/.test(wort)) return wort;

  const klein = wort.toLowerCase();
  let s = klein;
  for (const [ascii, utf8] of MEDIAL_SORTIERT) s = s.split(ascii).join(utf8);
  if (s === klein) return wort;

  if (versalien) return s.toUpperCase();
  return wort[0] !== wort[0].toLowerCase() ? s[0].toUpperCase() + s.slice(1) : s;
}

const zaehler = { tippfehler: 0, stamm: 0, medial: 0 };

/** Die drei Durchgaenge auf den INHALT eines Literals. */
function repariereText(text) {
  let s = text;

  for (const [falsch, richtig] of TIPPFEHLER) {
    const teile = s.split(falsch);
    if (teile.length > 1) { zaehler.tippfehler += teile.length - 1; s = teile.join(richtig); }
  }

  for (const [re, ersatz] of replacers) {
    re.lastIndex = 0;
    s = s.replace(re, (...args) => {
      zaehler.stamm += 1;
      return ersatz.replace(/\$(\d+)/g, (_, n) => args[Number(n)]);
    });
  }

  s = s.replace(/[A-Za-zÄÖÜäöüß]+/g, (wort) => {
    const fertig = medialWort(wort);
    if (fertig !== wort) zaehler.medial += 1;
    return fertig;
  });

  return s;
}


/**
 * Schluessel, hinter denen sichtbarer Text steht -- im Gegensatz zu
 * id/tags/slug/key. Erlaubt die Ausnahme unten fuer einwortige Titel.
 */
const PROSA_KEY = /(?:^|[\s,{])(?:title|text|intro|summary|desc|description|why|prompt|question|label|hint|content|answer|solution|contextKey|step\d*|feedback|explanation|caption|placeholder|unit)\s*:\s*$/;

/** Sieht dieses Literal nach Schluesselpfad, Slug oder Datei aus? */
const BEZEICHNERFORM = /[./\_-]/;

/**
 * Ist der Inhalt dieses Literals sichtbarer Text?
 *
 * Grundregel: Prosa hat Leerzeichen, Bezeichner nicht. Gemessen ueber die
 * 82 deutschen Dateien -- 157 der einwortigen Literale mit ae/oe/ue sind
 * Slugs, Tags, IDs oder Asset-Pfade ('fuehrt-zu', '10-koerper',
 * 'aehn-basis-001'), kein einziges davon sichtbarer Text.
 *
 * AUSNAHME: einwortige Werte hinter einem Prosa-Schluessel. Davon gibt es
 * genau sechs, und drei sind echte Titel, die SuS lesen --
 * title: 'Randwertpruefung', 'Bevoelkerungswachstum', 'Fotovergroesserung'.
 * Die beiden i18n-Schluesselpfade darunter ('examples.luecke.context')
 * bleiben trotzdem tabu: BEZEICHNERFORM haelt alles mit Punkt, Bindestrich,
 * Unterstrich oder Schraegstrich heraus.
 */
function istProsa(text, davor) {
  if (/\s/.test(text)) return true;
  return PROSA_KEY.test(davor) && !BEZEICHNERFORM.test(text);
}

const LITERAL = /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g;

function repariereDatei(inhalt) {
  return inhalt.split('\n').map((zeile) => {
    // Import-/Export-Zeilen bleiben ganz aussen vor. Die frueher hier
    // zusaetzlich gesperrten id/tags/slug/key-Zeilen NICHT mehr: das war zu
    // grob und kostete 16 echte Treffer, weil in diesen Dateien Prosa und
    // id-Feld auf derselben Zeile stehen ("Die Flaeche zwischen dem Graphen
    // von f und der x-Achse"). Den Slug-Schutz leistet jetzt praeziser die
    // Leerzeichen-Regel eine Ebene tiefer.
    if (/^\s*(?:import|export)\b/.test(zeile)) return zeile;
    return zeile.replace(LITERAL, (ganz, q, text, versatz) => {
      if (!istProsa(text, zeile.slice(0, versatz))) return ganz;
      return q + repariereText(text) + q;
    });
  }).join('\n');
}

const trocken = process.argv.includes('--dry');
let dateien = 0;
let geaendert = 0;
const bericht = [];

for (const datei of walk('src')) {
  if (!isDeFile(datei)) continue;
  dateien += 1;

  const vorher = { ...zaehler };
  const original = readFileSync(datei, 'utf-8');
  const neu = repariereDatei(original);
  if (original === neu) continue;

  geaendert += 1;
  bericht.push({
    datei,
    tippfehler: zaehler.tippfehler - vorher.tippfehler,
    stamm: zaehler.stamm - vorher.stamm,
    medial: zaehler.medial - vorher.medial,
  });
  if (!trocken) writeFileSync(datei, neu, 'utf-8');
}

if (trocken) console.log('\nTROCKENLAUF — es wurde nichts geschrieben.\n');
console.log(`Dateien geprueft:  ${dateien}`);
console.log(`Dateien geaendert: ${geaendert}`);
console.log(`Ersetzungen:       ${zaehler.tippfehler} Tippfehler + ${zaehler.stamm} Wortanfang + ${zaehler.medial} medial`);
console.log('\nJe Datei (Tippfehler / Wortanfang / medial):');
bericht.sort((x, y) => (y.stamm + y.medial + y.tippfehler) - (x.stamm + x.medial + x.tippfehler));
for (const b of bericht) {
  console.log(`  ${String(b.tippfehler).padStart(2)} / ${String(b.stamm).padStart(4)} / ${String(b.medial).padStart(4)}  ${b.datei}`);
}
