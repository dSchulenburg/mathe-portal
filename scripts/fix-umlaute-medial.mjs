#!/usr/bin/env node
/**
 * Medial greifende Umlaut-Staemme -- die Compound-Luecke von 5824c18.
 *
 * Die Staemme in fix-umlaute-stems.mjs sind mit \b am WORTANFANG verankert.
 * Deshalb konnte der Lauf vom 02.05.2026 'Flaechenverhaeltnis' nicht
 * vollstaendig reparieren: \bflaech greift, \bverhaeltnis nicht, weil davor
 * kein Wortanfang steht. Die Commit-Message hielt das als "Verbleibende Reste
 * sind Compound-Woerter (z. B. Abhaengigkeit, Annaeherung)" fest und schob es
 * auf -- es ist nie nachgeholt worden.
 *
 * GEMESSEN 08.09.2026 ueber die 82 deutschen Dateien: 292 verschiedene Woerter
 * mit ae/oe/ue in Textwerten, 657 Vorkommen. Davon steht bei 134 die
 * Transliteration erst ab Zeichen 5 -- fuer die reicht kein \b-Stamm.
 *
 * Diese Liste greift deshalb OHNE \b, an jeder Stelle im Wort. Das ist
 * schaerfer und braucht einen Schutz, sonst zerstoert es korrektes Deutsch.
 * Den liefert TRANSLIT_UNVERDAECHTIG: ein Wort wird nur angefasst, wenn seine
 * Buchstabenfolge ueberhaupt nach Transliteration aussieht.
 *
 * WAS DIE FALLE IST: 'ue' steckt auch dort, wo gar kein ü gemeint ist.
 *   aue -> Diphthong au+e:  blaue, Frauen, bauen, Mauer, genauer, Zuschauer
 *   eue -> eu+e:            neue, Feuer, Steuer, treue
 *   que -> qu+e:            Frequenz, Sequenz, konsequent
 *   zue -> zu+e:            zuerst, zueinander
 *   oe  in Fremdwoertern:   Koeffizient, Poet, Aerodynamik, Niveau
 * Wer ohne diesen Schutz ersetzt, macht aus 'blaue' ein 'blü'-Fragment.
 */

/** Buchstabenfolgen, in denen ae/oe/ue KEIN transliterierter Umlaut ist. */
const FALLEN = [
  /aue/, /eue/, /que/, /zue/, /oue/, /uue/,
  // KEIN /aeu/: das war am 08.09.2026 ein Fehlgriff. 'aeu' ist die
  // Transliteration von 'äu' (Haeuser -> Häuser, haeufig -> häufig,
  // Gebaeude -> Gebäude) und damit gerade KEINE Ausnahme. Die Falle hat
  // 8 echte Treffer blockiert, bevor sie auffiel.
  // -uell: aktuell, visuell, individuell, manuell, eventuell, konzeptuell.
  // Ohne diesen Eintrag wird aus 'aktuell' ein 'aktüll'. Am 08.09.2026 beim
  // Deckungstest an 'Grenzwert visuell' (locales/de.js) aufgefallen.
  // Negative Lookbehind auf 'f': 'aktuell/visuell/individuell' schuetzen, aber
  // NICHT das deutsche -fuell- (befuellen, erfuellt, eingefuellte, Fuellung).
  // Ohne das blieben am 08.09.2026 vier echte Treffer liegen.
  /(?<!f)uell/,
  // kongruent/Kongruenz: 'gr-ue-nt', nicht 'grün'. Steht im Aehnlichkeits-
  // modul mehrfach in Antwortoptionen.
  /[ck]ongruen/,   // kongruent (dt.) UND congruence (engl. Tag im Aehnlichkeitsmodul)
  // Bluetooth = blue + tooth. Steht in lessons-12-batch1 in einem Sachkontext.
  /bluetooth/,
  /koeffizient/, /poet/, /aero/, /duett/, /silhouett/,
  /routine/, /souver/, /niveau/, /duen/, /aeon/, /oeuv/,
];

/**
 * Darf an diesem Wort medial ersetzt werden? Nur wenn keine der Fallen
 * zutrifft. Bewusst wortweise und nicht zeilenweise: in
 * "Die blaue Flaeche" soll 'Flaeche' repariert und 'blaue' verschont werden.
 */
export function TRANSLIT_UNVERDAECHTIG(wort) {
  const k = wort.toLowerCase();
  return !FALLEN.some((re) => re.test(k));
}

/**
 * Staemme, die an jeder Position im Wort greifen duerfen. Kriterium fuer die
 * Aufnahme: der Stamm ist im Deutschen eindeutig ein Umlaut-Wortglied und
 * kommt als zweites Compound-Glied vor. Alphabetisch, damit Ergaenzungen
 * auffindbar bleiben; die Reihenfolge der Anwendung macht laengenabhaengig
 * sortiert der Aufrufer.
 */
export const MEDIAL = [
  ['aehnlich', 'ähnlich'],
  ['aender', 'änder'],
  ['aeusser', 'äußer'],
  ['bestaetig', 'bestätig'],
  ['bevoelker', 'bevölker'],
  ['braeuch', 'bräuch'],
  ['bruech', 'brüch'],
  ['bruecke', 'brücke'],
  ['druecke', 'drücke'],
  ['erklaer', 'erklär'],
  ['faehig', 'fähig'],
  ['faell', 'fäll'],
  ['faelsch', 'fälsch'],
  ['flaech', 'fläch'],
  ['fluess', 'flüss'],
  ['fuehr', 'führ'],
  ['fuell', 'füll'],
  ['gaeng', 'gäng'],
  ['gebaeude', 'gebäude'],
  ['groess', 'größ'],
  ['gueltig', 'gültig'],
  ['haelt', 'hält'],
  ['haeng', 'häng'],
  ['haett', 'hätt'],
  ['hoeh', 'höh'],
  ['kaelt', 'kält'],
  ['koerper', 'körper'],
  ['kraeft', 'kräft'],
  ['kuehl', 'kühl'],
  ['kuerz', 'kürz'],
  ['laeng', 'läng'],
  ['laeuf', 'läuf'],
  ['loes', 'lös'],
  ['luecke', 'lücke'],
  ['maess', 'mäß'],
  ['moegl', 'mögl'],
  ['muenz', 'münz'],
  ['naeher', 'näher'],
  ['noetig', 'nötig'],
  ['praesent', 'präsent'],
  ['praezis', 'präzis'],
  ['pruef', 'prüf'],
  ['raend', 'ränd'],
  ['raeum', 'räum'],
  ['rueck', 'rück'],
  ['ruecken', 'rücken'],
  ['saeul', 'säul'],
  ['schaetz', 'schätz'],
  ['schraenk', 'schränk'],
  ['schuel', 'schül'],
  ['schuetz', 'schütz'],
  ['schwaech', 'schwäch'],
  ['sorgfaelt', 'sorgfält'],
  ['staend', 'ständ'],
  ['staerk', 'stärk'],
  ['stueck', 'stück'],
  ['taeglich', 'täglich'],
  ['traeg', 'träg'],
  ['ueber', 'über'],
  ['verraet', 'verrät'],
  ['voell', 'völl'],
  ['waend', 'wänd'],
  ['waer', 'wär'],
  ['waerme', 'wärme'],
  ['zaehl', 'zähl'],
  ['aerzt', 'ärzt'],
  ['beruehr', 'berühr'],
  ['buehne', 'bühne'],
  ['faehr', 'fähr'],
  ['foermig', 'förmig'],
  ['geraet', 'gerät'],
  ['geschaeft', 'geschäft'],
  ['gehoer', 'gehör'],
  ['genueg', 'genüg'],
  ['gruebel', 'grübel'],
  ['gruend', 'gründ'],
  ['hoer', 'hör'],
  ['jaehrl', 'jährl'],
  ['kaempf', 'kämpf'],
  ['koenig', 'könig'],
  ['kruemm', 'krümm'],
  ['laechel', 'lächel'],
  ['laedt', 'lädt'],
  ['laess', 'läss'],
  ['legendaer', 'legendär'],
  ['natuerlich', 'natürlich'],
  ['saettig', 'sättig'],
  ['saetz', 'sätz'],
  ['schlaeg', 'schläg'],
  ['sekuend', 'sekünd'],
  ['toen', 'tön'],
  ['traenk', 'tränk'],
  ['urspruengl', 'ursprüngl'],
  ['woert', 'wört'],
  ['wuechs', 'wüchs'],
  ['wuensch', 'wünsch'],
  ['bloeck', 'blöck'],
  ['boed', 'böd'],
  ['daempf', 'dämpf'],
  ['duese', 'düse'],
  ['empfaeng', 'empfäng'],
  ['fluecht', 'flücht'],
  ['fluegel', 'flügel'],
  ['frueh', 'früh'],
  ['fueg', 'füg'],
  ['gefuehl', 'gefühl'],
  ['haend', 'händ'],
  ['huegel', 'hügel'],
  ['kraen', 'krän'],
  ['oefter', 'öfter'],
  ['ploetzlich', 'plötzlich'],
  ['roehr', 'röhr'],
  ['schluess', 'schlüss'],
  ['schraeg', 'schräg'],
  ['stuend', 'stünd'],
  ['stuetz', 'stütz'],
  ['ueb', 'üb'],
  ['verdaecht', 'verdächt'],
  ['veroeffentlich', 'veröffentlich'],
  ['zerstoer', 'zerstör'],
  ['fuehl', 'fühl'],
  ['fuell', 'füll'],
  ['haeuf', 'häuf'],
  ['haeus', 'häus'],
  ['gruen', 'grün'],
  ['muend', 'münd'],
  ['verstoess', 'verstöß'],
  ['wuerf', 'würf'],
  ['zufaell', 'zufäll'],
  ['zurueck', 'zurück'],
];
