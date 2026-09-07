export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'Mia baut für "Hafenlichter" ein Parkhaus-Minispiel: Lumi stellt den Lieferwagen ab und muss beim Abholen zahlen. Mia programmiert den Tarif — 2,00 € bis zu einer Stunde, danach 3,50 €. Beim Testen fällt Tim etwas auf: "Wenn du eine Sekunde zu spät kommst, kostet es plötzlich 1,50 € mehr. Ist das ein Bug?" Mia schaut sich den Graphen an. Er ist nicht kaputt — er springt. Und genau dieses Springen hat einen Namen.',
      challenge: 'Wann hat eine Funktion einen echten Sprung, wann nur ein einzelnes fehlendes Loch, und wann läuft sie ins Unendliche? Mia muss die drei Fälle sicher auseinanderhalten, um zu entscheiden, welche Tarife sie überhaupt so bauen darf.',
      outro: 'Mia kann jetzt an jeder verdächtigen Stelle prüfen, ob eine Funktion stetig ist: Grenzwert von links, Grenzwert von rechts, Funktionswert — stimmen alle drei überein, ist alles gut. Und sie weiß, welche Lücken sie reparieren kann und welche nicht. Der Parkhaus-Tarif bleibt übrigens unstetig. Das ist kein Bug, das ist eine Geschäftsentscheidung.',
    },
    objectives: {
      anschaulich: 'Stetigkeit anschaulich erkennen — und wissen, warum "ohne abzusetzen zeichnen" als Definition nicht ausreicht',
      definition: 'Stetigkeit an einer Stelle über den Grenzwert prüfen: $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Hebbare Lücke, Sprungstelle und Polstelle sicher unterscheiden',
      zwischenwertsatz: 'Mit dem Zwischenwertsatz die Existenz einer Nullstelle nachweisen',
    },
    explanation: {
      intro: 'Anschaulich heißt stetig: Du kannst den Graphen zeichnen, ohne den Stift abzusetzen. Das ist ein guter erster Gedanke — aber es ist keine Definition, mit der man rechnen kann. Was ist mit einer Funktion, der genau ein einziger Punkt fehlt? Den Stift setzt du praktisch nicht ab, und trotzdem ist die Funktion dort nicht stetig. Für eine tragfähige Definition brauchst du den Grenzwert aus der Differentialrechnung.',
      definition: 'Eine Funktion $f$ heißt stetig an der Stelle $x_0$, wenn sich der Funktionswert und der Grenzwert an dieser Stelle nicht widersprechen:',
      drei_bedingungen: 'In dieser einen Zeile stecken drei Forderungen. Alle drei müssen erfüllt sein — bei jedem Gegenbeispiel scheitert genau eine davon:',
      mia_tip: 'Ich prüfe das immer in dieser Reihenfolge: Erstens, ist die Stelle überhaupt im Definitionsbereich? Wenn nicht, kann sie schon mal nicht stetig sein. Zweitens, laufe ich von links und von rechts auf denselben Wert zu? Drittens, ist dieser Wert der, den die Funktion dort wirklich annimmt? Drei Häkchen, fertig.',
      einseitig: 'Bei abschnittsweise definierten Funktionen musst du an der Nahtstelle von beiden Seiten getrennt hinschauen. Der linksseitige und der rechtsseitige Grenzwert dürfen nicht auseinandergehen, und beide müssen den Funktionswert treffen:',
      arten: 'Es gibt genau drei Arten, wie Stetigkeit kaputtgehen kann — und sie sind unterschiedlich schlimm. Bei der hebbaren Lücke fehlt nur ein Punkt; du kannst ihn nachtragen und alles ist repariert. Bei der Sprungstelle existieren beide einseitigen Grenzwerte, sind aber verschieden — hier hilft kein Nachtragen. Bei der Polstelle laufen die Grenzwerte ins Unendliche, es gibt gar keinen Wert zum Nachtragen:',
      zwischenwertsatz: 'Stetigkeit ist nicht nur eine Eigenschaft, die man prüft — sie ist ein Werkzeug. Der Zwischenwertsatz sagt: Eine stetige Funktion, die unter null anfängt und über null aufhört, muss die Null unterwegs treffen. Sie kann nicht darüberspringen, denn springen darf sie ja gerade nicht:',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Stetigkeit an einer Stelle',
        desc: 'Der Grenzwert an der Stelle stimmt mit dem Funktionswert überein. Drei Bedingungen in einer Gleichung: der Funktionswert existiert, der Grenzwert existiert, und sie sind gleich. Fällt eine weg, ist die Funktion dort unstetig.',
      },
      einseitig: {
        title: 'Einseitige Grenzwerte',
        desc: 'An Nahtstellen abschnittsweise definierter Funktionen prüfst du links und rechts getrennt. Gehen die beiden Werte auseinander, liegt ein Sprung vor — und die Sprunghöhe ist genau ihre Differenz.',
      },
      arten: {
        title: 'Die drei Unstetigkeitsarten',
        desc: 'Hebbare Lücke: Grenzwert existiert, Funktionswert fehlt — reparierbar. Sprungstelle: beide einseitigen Grenzwerte existieren, sind aber verschieden — nicht reparierbar. Polstelle: die Grenzwerte laufen ins Unendliche — erst recht nicht reparierbar.',
      },
      zwischenwertsatz: {
        title: 'Zwischenwertsatz',
        desc: 'Ist $f$ auf $[a;b]$ stetig und wechselt an den Rändern das Vorzeichen, dann liegt dazwischen mindestens eine Nullstelle. Der Satz garantiert Existenz — nicht Eindeutigkeit und nicht, wo genau sie liegt.',
      },
    },
    examples: {
      luecke: {
        title: 'Eine hebbare Lücke schließen',
        context: 'Mia stolpert über einen Term, der bei $x = 1$ auf $\\frac{0}{0}$ läuft.',
        step1: 'Der Nenner wird bei $x = 1$ null — die Stelle fehlt im Definitionsbereich:',
        step2: 'Zähler faktorisieren und kürzen. Das ist erlaubt, solange $x \\neq 1$ ist:',
        step3: 'Der gekürzte Term ist bei $x = 1$ problemlos auswertbar — das ist der Grenzwert:',
        step4: 'Jetzt trägst du den fehlenden Punkt nach. Die ergänzte Funktion heißt stetige Fortsetzung:',
        mia_comment: 'Das $\\frac{0}{0}$ hat mich anfangs erschreckt — ich dachte, da ist etwas kaputt. Ist es aber nicht. Es heißt nur: kürze erst, frag später. Kaputt wäre $\\frac{1}{0}$, da steht eine echte Null im Nenner allein.',
      },
      sprung: {
        title: 'Eine Sprungstelle vermessen',
        context: 'Der Parkhaus-Tarif aus Mias Minispiel — und die Frage, wie teuer eine Sekunde sein kann.',
        step1: 'Der Tarif ist abschnittsweise definiert, die Nahtstelle liegt bei einer Stunde:',
        step2: 'Von links und von rechts an die Nahtstelle heranlaufen und die Werte vergleichen:',
        step3: 'Die beiden Grenzwerte existieren, sind aber verschieden — das ist die Definition einer Sprungstelle:',
        step4: 'Die Sprunghöhe ist ihre Differenz. Sie ist hier keine Panne, sondern der Tarif:',
        kai_comment: 'Genau solche Sprünge sind der Grund, warum Handytarife und Portostufen Leute ärgern. Mathematisch ist daran nichts falsch — aber wer eine Sekunde zu spät ist, zahlt eben die volle nächste Stufe. Stetige Tarife rechnen sekundengenau ab. Das ist eine Entscheidung, keine Formel.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Stufentarife',
        desc: 'Parkhaus, Porto, Handyvertrag: Überall dort, wo in angefangenen Einheiten abgerechnet wird, ist die Preisfunktion unstetig. Jede Stufe ist eine Sprungstelle — und jede davon ist eine bewusste Entscheidung des Anbieters.',
      },
      temperatur: {
        title: 'Physikalische Größen',
        desc: 'Temperatur, Position, Geschwindigkeit: Diese Größen können nicht springen, weil ein Sprung unendlich viel Energie in null Zeit bedeuten würde. Deshalb sind physikalische Modelle fast immer stetige Funktionen.',
      },
      nullstelle: {
        title: 'Nullstellen numerisch finden',
        desc: 'Jeder Taschenrechner nutzt den Zwischenwertsatz: Er sucht ein Intervall mit Vorzeichenwechsel und halbiert es immer weiter. Ohne Stetigkeit wäre dieses Verfahren wertlos — die Nullstelle könnte einfach übersprungen werden.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'Wenn $f(x_0)$ existiert, ist $f$ dort auch stetig',
        correct: 'Der Funktionswert muss zusätzlich mit dem Grenzwert übereinstimmen',
        why: 'Eine Sprungfunktion ist an ihrer Sprungstelle definiert — sie hat dort einen völlig normalen Funktionswert. Trotzdem ist sie unstetig, weil der Grenzwert von der einen Seite etwas anderes liefert. Definiertsein ist nur die erste von drei Bedingungen, nicht schon die Antwort.',
        mia_warning: 'Das ist mir beim Parkhaus passiert. Bei genau einer Stunde ist der Preis definiert, nämlich 2,00 €. Ich dachte, damit sei alles glatt. Der Graph springt trotzdem — nur eben eine Sekunde später.',
      },
      pol_ist_hebbar: {
        wrong: 'Jede Definitionslücke lässt sich durch einen passenden Wert schließen',
        correct: 'Nur wenn der beidseitige Grenzwert existiert und endlich ist',
        why: 'Bei $\\frac{1}{x}$ läuft die Funktion links gegen $-\\infty$ und rechts gegen $+\\infty$. Es gibt keine Zahl, die man einsetzen könnte — egal welche du wählst, der Graph springt daneben ins Unendliche. Die Faustregel für Brüche: kürzt sich der kritische Faktor weg, ist die Lücke hebbar; bleibt er im Nenner stehen, ist es eine Polstelle.',
        mia_warning: 'Ich prüfe das jetzt immer mit zwei Zahlen: $0{,}001$ und $-0{,}001$ einsetzen. Kommen zwei ähnliche Werte heraus, ist die Lücke hebbar. Kommen $1000$ und $-1000$ heraus, ist es ein Pol — und da ist nichts zu machen.',
      },
    },
  },
};
