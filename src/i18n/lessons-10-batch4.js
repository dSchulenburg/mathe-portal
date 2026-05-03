export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'Mia braut für Hafenlichter Level 4 zusammen: Lumi muss auf eine Plattform springen, die langsam und gleichmäßig nach rechts driftet. "Die Bewegung ist linear", erklärt Tim. "Pro Sekunde 60 Pixel — fertig." Mia tippt es ein und merkt sofort: Das ist eine ganz normale Geradengleichung. Startposition plus Geschwindigkeit mal Zeit. Genau das, was sie aus Klasse 9 mitgenommen hat — nur jetzt formaler: $f(x) = m \\cdot x + b$.',
      challenge: 'Mia muss Lumis Sprungkurve so abstimmen, dass sie genau auf der driftenden Plattform landet. Steigung der Plattform-Bewegung und Schnittpunkt mit Lumis Bahn — alles linear.',
      outro: 'Eine lineare Funktion hat zwei Stellschrauben: $m$ legt fest, wie steil sie verläuft, $b$ verschiebt sie nach oben oder unten. Mia versteht jetzt, warum sie das immer wieder braucht: Plattformen, Energieverbrauch, Health-Bars — überall wo etwas "pro Schritt" konstant zu- oder abnimmt, ist die Geradengleichung das richtige Werkzeug.',
    },
    objectives: {
      recognize: 'Lineare Funktionen am Term und am Graphen erkennen',
      slope_intercept: 'Steigung $m$ und y-Achsenabschnitt $b$ aus der Normalform $f(x) = mx + b$ ablesen',
      point_slope: 'Gerade aus Punkt und Steigung mit der Punkt-Steigungs-Form aufstellen',
      two_points: 'Geradengleichung aus zwei Punkten bestimmen — Steigung berechnen, dann $b$',
    },
    explanation: {
      intro: 'Eine lineare Funktion beschreibt einen gleichmäßigen Zusammenhang: Wenn sich $x$ um eine Einheit ändert, ändert sich $y$ immer um denselben Betrag. Im Graph entsteht dadurch eine Gerade. Die allgemeine Form ist:',
      slope: 'Die Steigung $m$ misst genau diesen "Betrag pro Schritt". Du bekommst sie aus zwei beliebigen Punkten der Geraden — Höhenunterschied geteilt durch Breitenunterschied:',
      mia_tip: 'Ich denke an Lumis Plattform: Die driftet pro Sekunde um genau 60 Pixel. Das sind meine $m = 60$ Pixel/Sekunde. Wenn Lumi bei $b = 200$ startet, ist die Position nach $t$ Sekunden einfach $f(t) = 60t + 200$. Lineare Funktion in freier Wildbahn!',
      intercept: 'Der y-Achsenabschnitt $b$ ist der Wert, an dem die Gerade die senkrechte Achse schneidet. Du liest ihn direkt am Graphen ab — oder du setzt $x = 0$ in den Term ein:',
      point_slope: 'Wenn du einen Punkt $P(x_0 \\mid y_0)$ und die Steigung $m$ kennst, schreibst du die Geradengleichung am schnellsten in der Punkt-Steigungs-Form. Daraus löst du nach $y$ auf und erhältst die Normalform:',
    },
    concepts: {
      normal_form: {
        title: 'Normalform $f(x) = mx + b$',
        desc: 'Die Standard-Schreibweise. $m$ ist die Steigung, $b$ der y-Achsenabschnitt. Beide Parameter kannst du direkt aus dem Term ablesen — und beide haben eine klare geometrische Bedeutung.',
      },
      slope: {
        title: 'Steigung $m$',
        desc: 'Veränderung von $y$ pro Einheit von $x$. Aus zwei Punkten: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Positiv = aufsteigend, negativ = fallend, $m = 0$ = waagerechte Gerade.',
      },
      point_slope: {
        title: 'Punkt-Steigungs-Form',
        desc: 'Wenn ein Punkt $(x_0 \\mid y_0)$ und die Steigung $m$ bekannt sind: $y - y_0 = m(x - x_0)$. Praktisch, weil du $b$ nicht extra berechnen musst — du löst einfach nach $y$ auf.',
      },
      parallel_perpendicular: {
        title: 'Parallel & senkrecht',
        desc: 'Zwei Geraden sind parallel, wenn sie dieselbe Steigung haben ($m_g = m_h$). Sie stehen senkrecht aufeinander, wenn das Produkt der Steigungen $-1$ ergibt ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Geradengleichung aus zwei Punkten',
        context: 'Mia hat zwei Beobachtungspunkte von Lumis Plattform-Bahn: $P_1(2 \\mid 1)$ und $P_2(5 \\mid 7)$. Welche Geradengleichung beschreibt die Bewegung?',
        step1: 'Die zwei gegebenen Punkte aufschreiben:',
        step2: 'Steigung berechnen — Differenz der y-Werte durch Differenz der x-Werte:',
        step3: 'Punkt-Steigungs-Form mit $P_1(2 \\mid 1)$ und $m = 2$ aufstellen, dann nach $y$ auflösen:',
        step4: 'Fertige Geradengleichung in Normalform:',
        mia_comment: 'Schöner Workflow: zwei Punkte → Steigung → einsetzen → ausmultiplizieren. Wenn ich später noch einen dritten Punkt habe, kann ich damit prüfen, ob meine Gleichung stimmt.',
      },
      intersection: {
        title: 'Schnittpunkt zweier Geraden',
        context: 'Die Plattform fährt entlang $g\\colon y = 2x - 3$, Lumis Sprungbahn entlang $h\\colon y = -x + 6$. Wo treffen sich die beiden?',
        step1: 'Beide Geradengleichungen notieren — dieselbe Variable $x$, dieselbe Variable $y$:',
        step2: 'Im Schnittpunkt sind beide $y$-Werte gleich. Also: rechte Seiten gleichsetzen:',
        step3: 'Nach $x$ auflösen — beide $x$-Terme auf eine Seite, Konstanten auf die andere:',
        step4: '$x$-Wert in eine der beiden Gleichungen einsetzen, um den $y$-Wert zu bekommen. Schnittpunkt $S$:',
        mia_comment: 'Im Spiel ist genau dieser Schnittpunkt der Treffer-Frame. Wenn ich den Zeitpunkt $x = 3$ kenne, weiß ich, in welchem Frame ich die Kollision auslösen muss.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Handytarif mit Grundgebühr',
        desc: 'Klassisches Beispiel: 9,99 € Grundgebühr im Monat plus 10 Cent pro Minute. Die Kosten in Abhängigkeit der Gesprächszeit sind eine perfekte Gerade — $b$ ist die Grundgebühr, $m$ der Minutenpreis.',
      },
      taxi: {
        title: 'Taxi-Kosten',
        desc: '4 € Grundgebühr beim Einsteigen, dann 2,50 € pro Kilometer. Die Gesamtkosten wachsen linear mit der gefahrenen Strecke. Ablesbar an jeder Quittung.',
      },
      constant_speed: {
        title: 'Bewegung mit konstanter Geschwindigkeit',
        desc: 'Ein Skater fährt mit gleichmäßigen $v$ los, startet bei $s_0$. Die zurückgelegte Strecke nach $t$ Sekunden: $s(t) = v \\cdot t + s_0$. Reine Geradengleichung — nur die Variablen heißen anders.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Steigung kopfüber: $\\Delta x / \\Delta y$ statt $\\Delta y / \\Delta x$',
        correct: 'Erst die Höhe (y), dann die Breite (x): $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'Steigung beschreibt "wie viel Höhe pro Schritt" — also $y$-Veränderung im Zähler, $x$-Veränderung im Nenner. Drehst du den Bruch um, bekommst du den Kehrwert: aus $m = 2$ wird fälschlich $0{,}5$.',
        mia_warning: 'Mein Trick: Ich denke an eine Treppe. Höhe der Stufe geteilt durch Breite der Stufe. Höhe ist immer oben im Bruch — wie auf der Treppe.',
      },
      intercept_zero: {
        wrong: 'Den y-Achsenabschnitt mit der Nullstelle verwechseln',
        correct: 'Nullstelle: setze $f(x) = 0$ und löse nach $x$ auf',
        why: 'Der y-Achsenabschnitt $b$ ist der $y$-Wert bei $x = 0$ — also ein $y$-Wert. Die Nullstelle ist der $x$-Wert, an dem $f(x) = 0$ ist. Bei $f(x) = 2x + 5$ ist $b = 5$, aber die Nullstelle liegt bei $x = -2{,}5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'Mia entwirft einen rotierenden Boss-Gegner für Hafenlichter. Der Boss ist ein wirbelndes Mühlrad mit drei Armen — und Lumi muss durch die Lücken springen. "Die Hitbox muss kreisförmig sein", sagt Tim. "Sonst sieht es schräg aus, wenn Lumi den Arm streift, der gar nicht in der Nähe ist." Mia braucht den Umfang, die Fläche und den Winkel jedes Arms — Kreisgeometrie pur.',
      challenge: 'Mia muss runde Hitboxen programmieren. Außerdem die Bogenlänge, die jeder Arm pro Sekunde überstreicht — sonst stimmt die Drehgeschwindigkeit nicht.',
      outro: 'Mit $U = 2\\pi r$ und $A = \\pi r^2$ hat Mia die Standard-Werkzeuge. Und mit dem Bogenmaß rechnet sie Drehwinkel direkt in zurückgelegte Strecken um — viel schneller als der Umweg über $360°$. "Bogenmaß ist die Programmiersprache der Drehbewegungen", merkt sie sich.',
    },
    objectives: {
      umfang_flaeche: 'Umfang und Fläche eines Kreises mit Radius oder Durchmesser berechnen',
      bogenmass: 'Winkel zwischen Grad- und Bogenmaß sicher umrechnen',
      sektor: 'Fläche und Bogenlänge eines Kreissektors mit gegebenem Mittelpunktswinkel berechnen',
      bogenlaenge: 'Bogenlängen am Vollkreis und am Sektor mit beiden Winkelmaßen ermitteln',
    },
    explanation: {
      intro: 'Der Kreis ist die Menge aller Punkte mit gleichem Abstand $r$ vom Mittelpunkt. Aus diesem einen Maß $r$ folgen Umfang und Fläche — beide mit der berühmten Konstante $\\pi \\approx 3{,}14159$:',
      bogenmass: 'Statt Winkel in Grad zu messen, kann man auch die zugehörige Bogenlänge am Einheitskreis verwenden — das nennt man Bogenmaß (Radiant). Ein Vollkreis hat den Umfang $2\\pi r$, also entspricht $360°$ genau $2\\pi$. Für jeden Winkel $\\alpha$ im Bogenmaß gilt:',
      mia_tip: 'Bogenmaß war für mich erst komisch. Aber im Code ist es viel praktischer: Wenn ich Math.cos(angle) in JavaScript schreibe, erwartet die Funktion Radiant — nicht Grad. Wer das vergisst, dreht plötzlich Sprites in die falsche Richtung.',
      umrechnung: 'Die Umrechnung läuft über die Verhältnis-Regel "$360° = 2\\pi\\,\\text{rad}$". Das ergibt einen festen Faktor, mit dem du Grad und Radiant ineinander verwandelst:',
      sektor: 'Ein Sektor ist ein "Tortenstück" des Kreises. Sein Anteil an Fläche und Umfang entspricht genau dem Anteil seines Mittelpunktswinkels am Vollwinkel. Mit Winkel $\\alpha$ (in Grad oder Radiant) gilt:',
    },
    concepts: {
      umfang: {
        title: 'Umfang $U$',
        desc: 'Die Länge der Kreislinie. Hängt linear vom Radius ab — doppelter Radius bedeutet doppelter Umfang. Mit dem Durchmesser $d = 2r$ schreibt man oft auch kurz $U = \\pi d$.',
      },
      flaeche: {
        title: 'Fläche $A$',
        desc: 'Die eingeschlossene Fläche. Hängt quadratisch vom Radius ab — doppelter Radius bedeutet vierfache Fläche. Wichtig für alle "wie viel Material" und "wie viel Inhalt"-Aufgaben.',
      },
      bogenmass: {
        title: 'Bogenmaß (Radiant)',
        desc: 'Winkelmaß, das den Winkel als Bogenlänge am Einheitskreis misst. Vollkreis = $2\\pi$, Halbkreis = $\\pi$, rechter Winkel = $\\frac{\\pi}{2}$. Standard in Analysis und Programmierung.',
      },
      sektor: {
        title: 'Kreissektor',
        desc: 'Ein Tortenstück: zwei Radien plus der dazwischen liegende Bogen. Fläche und Bogenlänge sind anteilige Größen — Mittelpunktswinkel als Bruchteil von $360°$ bzw. $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Umfang und Fläche aus dem Radius',
        context: 'Mias rotierender Boss-Gegner hat einen Radius von $5\\,\\text{cm}$ am Bildschirm. Wie groß sind Umfang und Fläche?',
        step1: 'Gegeben ist der Radius:',
        step2: 'Umfang einsetzen: $U = 2\\pi r$ mit $r = 5$. Erst exakt mit $\\pi$, dann gerundet:',
        step3: 'Fläche einsetzen: $A = \\pi r^2$. Achtung: erst $r$ quadrieren, dann mit $\\pi$ multiplizieren:',
        mia_comment: 'Bei $r = 5$ sind Umfang ($\\approx 31$) und Fläche ($\\approx 79$) ganz unterschiedliche Zahlen. Wenn ich den Radius verdopple, wird der Umfang doppelt so groß — die Fläche aber viermal. Das ist die Quadrat-Wirkung.',
      },
      sektor: {
        title: 'Sektorfläche und Bogenlänge',
        context: 'Ein Arm des Boss-Gegners überstreicht einen Sektor mit Radius $12\\,\\text{cm}$ und Mittelpunktswinkel $60°$. Welche Fläche und welche Bogenlänge ergibt das?',
        step1: 'Gegeben sind Radius und Winkel im Gradmaß:',
        step2: 'Sektor-Anteil an der Vollfläche bestimmen — $\\frac{60°}{360°} = \\frac{1}{6}$:',
        step3: 'Sektorfläche ausrechnen — exakt mit $\\pi$, dann gerundet:',
        step4: 'Bogenlänge: derselbe Anteil $\\frac{1}{6}$ vom Umfang $2\\pi r$:',
        mia_comment: 'Der Trick ist immer derselbe: Anteil = $\\frac{\\alpha°}{360°}$. Den multipliziere ich mit der Vollkreis-Größe (Fläche oder Umfang). Funktioniert für $30°$ genauso wie für $137{,}5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'Pizza in 8 Stücke',
        desc: 'Eine Pizza mit Radius $r$ wird in 8 gleiche Stücke geschnitten. Jedes Stück ist ein Sektor mit $\\frac{360°}{8} = 45°$ und der Fläche $\\frac{\\pi r^2}{8}$. Konkrete Anwendung in jeder Küche.',
      },
      uhr: {
        title: 'Uhrzeiger als Sektoren',
        desc: 'In einer Stunde überstreicht der Stundenzeiger $30°$ ($\\frac{360°}{12}$), in einer Minute der Minutenzeiger $6°$ ($\\frac{360°}{60}$). Reine Sektor-Mathematik — auch hilfreich für Winkel-Aufgaben mit Uhren.',
      },
      riesenrad: {
        title: 'Riesenrad-Bogenlänge',
        desc: 'Eine Gondel am Hamburger Riesenrad mit Radius $r$ legt in der Zeit $t$ einer Gesamtumdrehung $T$ die Bogenlänge $b = 2\\pi r \\cdot \\frac{t}{T}$ zurück. Damit lässt sich auch die Geschwindigkeit der Gondel ausrechnen.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'Gradmaß in Bogenmaß-Formeln einsetzen',
        correct: 'Vor $b = \\alpha \\cdot r$ erst Grad in Radiant umwandeln',
        why: 'Die Formel $b = \\alpha \\cdot r$ funktioniert nur, wenn $\\alpha$ im Bogenmaß steht. Bei $\\alpha = 60°$ ist $b = 60 \\cdot r$ massiv falsch — richtig wäre $\\alpha = \\frac{\\pi}{3} \\approx 1{,}047$, also $b \\approx 1{,}047 \\cdot r$.',
        mia_warning: 'Genau das hat mich beim Sprite-Drehen geärgert: 60 statt 1,047 eingesetzt — der Boss hat sich 57-mal so schnell gedreht und ist sofort vom Bildschirm verschwunden!',
      },
      area_vs_circumference: {
        wrong: 'Fläche mit Umfangsformel berechnen ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$ — quadratisch in $r$',
        why: 'Umfang und Fläche sind verschiedene Größen mit verschiedenen Einheiten ($\\text{cm}$ vs. $\\text{cm}^2$). $2\\pi r$ ist linear, $\\pi r^2$ quadratisch. Verwechselt man sie, sind alle Folge-Rechnungen kaputt — und die Einheit verrät es sofort.',
      },
    },
  },
};
