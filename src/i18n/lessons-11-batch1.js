export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Amirs ML-Modell für DataPulse liefert brauchbare Songempfehlungen — aber das Training dauert ewig. "Gradient Descent ist im Prinzip nichts anderes als Ableitungen", erklärt ihm seine Mathe-Professorin. "Wenn du verstehst, wie Ableitungsregeln funktionieren, verstehst du auch, warum dein Modell lernt." Amir beschließt, die Regeln systematisch durchzuarbeiten.',
      challenge: 'Amir will verstehen, wie sein ML-Modell intern die Verlustfunktion ableitet — dafür braucht er Potenz-, Summen-, Produkt- und Kettenregel.',
      outro: 'Amir hat jetzt ein solides Fundament: Potenzregel für einfache Terme, Summen- und Faktorregel für zusammengesetzte Ausdruecke, Produktregel für Multiplikationen und die Kettenregel für verschachtelte Funktionen. "Jetzt verstehe ich endlich, was PyTorch im Hintergrund mit Autograd macht", sagt er zufrieden.',
    },
    objectives: {
      power_rule: 'Die Potenzregel sicher anwenden: $f(x) = x^n$ ableiten',
      constant_sum_rule: 'Konstanten- und Summenregel beherrschen: Terme einzeln ableiten und Faktoren beibehalten',
      product_quotient_rule: 'Produkt- und Quotientenregel korrekt anwenden',
      chain_rule: 'Die Kettenregel bei verschachtelten Funktionen sicher einsetzen',
    },
    explanation: {
      intro: 'Die Potenzregel ist die wichtigste Basisregel: Du ziehst den Exponenten als Faktor vor und reduzierst den Exponenten um 1. Damit leitest du jede Potenzfunktion im Handumdrehen ab:',
      constant_factor: 'Konstante Faktoren bleiben beim Ableiten erhalten, und bei Summen darfst du gliedweise ableiten. Das macht zusammengesetzte Terme übersichtlich:',
      amir_tip: 'In meinem ML-Code stecken überall Summen und Faktoren — die Verlustfunktion ist eine riesige Summe über alle Datenpunkte. Dass ich jeden Term einzeln ableiten darf, macht Backpropagation überhaupt erst möglich!',
      product_rule: 'Wenn zwei Funktionen multipliziert werden, darfst du NICHT einfach beide einzeln ableiten. Stattdessen gilt die Produktregel — "erster mal Ableitung des zweiten plus zweiter mal Ableitung des ersten":',
      quotient_rule: 'Für Brueche von Funktionen gibt es die Quotientenregel. Merkhilfe: "NAZ minus ZAN durch N Quadrat" (N = Nenner, Z = Zähler, A = Ableitung):',
      chain_rule: 'Bei verschachtelten Funktionen — also einer Funktion in einer Funktion — brauchst du die Kettenregel. Du leitest "von aussen nach innen" ab und multiplizierst mit der inneren Ableitung:',
    },
    concepts: {
      power_rule: {
        title: 'Potenzregel',
        desc: 'Die Grundregel: Exponent wird zum Faktor, Exponent sinkt um 1. Gilt auch für negative und gebrochene Exponenten, z.B. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Summen- und Faktorregel',
        desc: 'Summen werden gliedweise abgeleitet, konstante Faktoren bleiben erhalten. Damit zerlegst du jeden Polynomterm in einfache Einzelteile.',
      },
      product_rule: {
        title: 'Produktregel',
        desc: 'Für das Produkt zweier Funktionen: Erste ableiten mal Zweite plus Erste mal Zweite ableiten. Unverzichtbar, sobald zwei variable Ausdruecke multipliziert werden.',
      },
      chain_rule: {
        title: 'Kettenregel',
        desc: 'Äußere Funktion ableiten, innere stehen lassen, dann mit der Ableitung der inneren multiplizieren. Das Herzstuck von Backpropagation in neuronalen Netzen.',
      },
    },
    examples: {
      power_sum: {
        title: 'Polynom mit Potenz- und Summenregel ableiten',
        context: 'Amir vereinfacht einen Term aus seiner Kostenfunktion.',
        step1: 'Gegeben ist das Polynom — wir leiten jeden Term einzeln ab:',
        step2: 'Potenzregel auf jeden Term anwenden: Exponent als Faktor, Exponent minus 1. Konstante $-7$ faellt weg:',
        step3: 'Zusammenfassen ergibt die Ableitungsfunktion:',
        amir_comment: 'Genau so sieht der Gradient meiner polynomialen Features aus. Jeder Term liefert seinen Beitrag zur Steigung — und PyTorch macht das automatisch für Tausende Parameter gleichzeitig.',
      },
      chain_rule: {
        title: 'Verschachtelte Funktion mit Kettenregel',
        context: 'Amir leitet eine Aktivierungsfunktion ab, die eine Komposition enthaelt.',
        step1: 'Gegeben ist eine verschachtelte Potenzfunktion:',
        step2: 'Zerlegung in äußere Funktion $f(u) = u^3$ und innere Funktion $g(x) = 2x^2 + 1$:',
        step3: 'Äußere ableiten (Potenzregel auf $u^3$), innere stehen lassen, mal innere Ableitung ($4x$):',
        step4: 'Aufgeraeumt — Faktor $4x$ nach vorne gezogen:',
        amir_comment: 'Die Kettenregel ist literally Backpropagation! Jede Schicht im Neural Network ist eine verschachtelte Funktion, und die Kettenregel verkettet die Gradienten von Schicht zu Schicht.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent im Machine Learning',
        desc: 'Jedes ML-Modell minimiert eine Verlustfunktion durch Ableiten. Der Gradient zeigt die Richtung des steilsten Anstiegs — wir gehen in die Gegenrichtung, um das Minimum zu finden.',
      },
      marginal_cost: {
        title: 'Grenzkosten in der Wirtschaft',
        desc: 'Die Ableitung der Kostenfunktion $K(x)$ gibt die Grenzkosten: Was kostet eine weitere produzierte Einheit? Unternehmen nutzen das taeglich für Preiskalkulation.',
      },
      acceleration: {
        title: 'Beschleunigung in der Physik',
        desc: 'Geschwindigkeit ist die Ableitung des Weges, Beschleunigung die Ableitung der Geschwindigkeit. Dein Handy-Sensor misst genau das: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'Ableitung einer Konstanten ist die Konstante selbst',
        correct: 'Ableitung einer Konstanten ist immer Null',
        why: 'Eine Konstante hat keine Steigung — sie ändert sich nicht. Denk an $f(x) = 5$: Das ist eine waagerechte Linie, also ist die Steigung überall 0. Das gilt für jede Zahl ohne $x$.',
        amir_warning: 'Der Bias-Term in meinem Modell ist eine Konstante — seine Ableitung nach $x$ ist 0. Wenn du das vergisst, bekommt dein Gradient einen falschen Offset und das Training divergiert.',
      },
      chain_rule_forgotten: {
        wrong: 'Innere Ableitung bei verschachtelten Funktionen vergessen',
        correct: 'Immer mit der inneren Ableitung multiplizieren',
        why: 'Bei $[(3x+1)^4]\'$ reicht es nicht, nur den Exponenten runterzuziehen. Du MUSST mit der Ableitung des inneren Terms $(3x+1)\' = 3$ multiplizieren. Ohne innere Ableitung fehlt der Faktor 3.',
        amir_warning: 'Stell dir vor, in einem Neural Network vergisst du bei einer Schicht die innere Ableitung — der Gradient waere komplett falsch und das Modell lernt Unsinn. Die Kettenregel ist nicht optional!',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Amirs Empfehlungsalgorithmus spuckt Ergebnisse aus — aber sind sie wirklich optimal? "Du musst die Verlustfunktion komplett analysieren", sagt sein Professor. "Wo sind die Minima? Wo die Wendepunkte?" Amir merkt: Eine vollstaendige Kurvendiskussion zeigt ihm, ob sein Modell wirklich das globale Minimum gefunden hat oder in einem lokalen Minimum feststeckt.',
      challenge: 'Amir analysiert die Verlustlandschaft seines Modells: Nullstellen, Extrema, Wendepunkte und Monotonie einer Funktion vollstaendig bestimmen.',
      outro: 'Amir kann jetzt jede ganzrationale Funktion komplett charakterisieren: Nullstellen finden, Hoch- und Tiefpunkte bestimmen, Wendepunkte berechnen und das Monotonieverhalten ablesen. "Wenn ich die Verlustlandschaft so zeichne, sehe ich sofort, ob mein Optimizer im richtigen Tal gelandet ist", sagt er.',
    },
    objectives: {
      zeros_extrema: 'Nullstellen und Extrempunkte einer Funktion systematisch bestimmen',
      inflection_points: 'Wendepunkte berechnen und deren Bedeutung für den Kurvenverlauf verstehen',
      monotonicity_symmetry: 'Monotonieverhalten und Symmetrie einer Funktion analysieren',
    },
    explanation: {
      intro: 'Eine Kurvendiskussion ist die vollstaendige Analyse einer Funktion. Wir beginnen mit den Nullstellen — den Stellen, an denen der Graph die $x$-Achse schneidet:',
      extrema: 'Extrempunkte (Hoch- und Tiefpunkte) findest du dort, wo die erste Ableitung Null wird. Aber Vorsicht: Nicht jede Nullstelle von $f\'$ ist automatisch ein Extremum! Du brauchst die zweite Ableitung zur Bestaetigung:',
      amir_tip: 'Die Loss-Landschaft meines Modells hat viele lokale Minima. Mit der Kurvendiskussion kann ich prüfen, ob ein kritischer Punkt wirklich ein Minimum ist — oder nur ein Sattelpunkt, an dem der Optimizer haengenbleibt.',
      inflection: 'Wendepunkte markieren den Übergang zwischen Links- und Rechtskruemmung. Hier ändert sich das Kruemmungsverhalten — die zweite Ableitung wechselt das Vorzeichen:',
      monotonicity: 'Das Monotonieverhalten verraet dir, wo die Funktion steigt und wo sie faellt. Du liest es direkt aus dem Vorzeichen der ersten Ableitung ab:',
    },
    concepts: {
      extrema: {
        title: 'Extrempunkte (Hoch-/Tiefpunkte)',
        desc: 'Notwendige Bedingung: $f\'(x_0) = 0$. Hinreichend: $f\'\'(x_0) < 0$ ergibt Hochpunkt, $f\'\'(x_0) > 0$ ergibt Tiefpunkt. Beide Bedingungen zusammen machen es sicher.',
      },
      inflection: {
        title: 'Wendepunkte',
        desc: 'Wo die Kruemmung wechselt: $f\'\'(x_0) = 0$ UND $f\'\'\'(x_0) \\neq 0$. Bei Normalverteilungen markieren Wendepunkte die Standardabweichung.',
      },
      symmetry: {
        title: 'Symmetrie',
        desc: 'Achsensymmetrie zur $y$-Achse bei $f(-x) = f(x)$ (nur gerade Exponenten). Punktsymmetrie zum Ursprung bei $f(-x) = -f(x)$ (nur ungerade Exponenten). Spart Rechenarbeit!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Vollstaendige Kurvendiskussion',
        context: 'Amir untersucht eine kubische Funktion — ähnlich wie Verlustfunktionen mit mehreren Extrema.',
        step1: 'Gegeben ist die Funktion — wir analysieren sie komplett:',
        step2: 'Erste Ableitung bilden und Nullstellen bestimmen (notwendige Bedingung für Extrema):',
        step3: 'Zweite Ableitung an den kritischen Stellen auswerten (hinreichende Bedingung): Negativer Wert = Hochpunkt, positiver Wert = Tiefpunkt:',
        step4: 'Wendepunkt über $f\'\' = 0$ bestimmen und mit dritter Ableitung bestaetigen:',
        amir_comment: 'Genau so analysiere ich die Loss-Landschaft: Erst kritische Punkte finden, dann prüfen ob Minimum oder Sattelpunkt. Bei hochdimensionalen Funktionen macht mein Optimizer das numerisch — aber das Prinzip ist identisch.',
      },
      graph_properties: {
        title: 'Symmetrie und Extrema nutzen',
        context: 'Eine symmetrische Funktion — die Hälfte der Arbeit entfaellt durch Symmetrie.',
        step1: 'Gegeben ist eine Funktion 4. Grades — wir prüfen zuerst Symmetrie:',
        step2: 'Einsetzen von $-x$: Alle Exponenten gerade, also $f(-x) = f(x)$ — achsensymmetrisch! Extrema kommen symmetrisch vor:',
        step3: 'Erste Ableitung Null setzen — durch Symmetrie genuegt es, die positiven Lösungen zu finden:',
        step4: 'Funktionswerte berechnen — dank Symmetrie gilt $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symmetrie in Daten ist Gold wert: Wenn ich weiss, dass meine Verlustfunktion symmetrisch ist, muss ich nur die Hälfte des Parameterraums durchsuchen. Das halbiert die Trainingszeit!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Datenverteilungen analysieren',
        desc: 'Die Normalverteilung hat Wendepunkte bei $\\mu \\pm \\sigma$. Kurvendiskussion verraet dir, wo sich die meisten Datenpunkte konzentrieren und wo die Streuung beginnt.',
      },
      profit_analysis: {
        title: 'Gewinnmaximierung',
        desc: 'Die Gewinnfunktion $G(x)$ hat ein Maximum — die optimale Produktionsmenge. Kurvendiskussion zeigt exakt, bei welcher Stueckzahl der Gewinn maximal ist.',
      },
      population_growth: {
        title: 'Bevoelkerungswachstum',
        desc: 'Der Wendepunkt einer Wachstumskurve markiert den Moment, ab dem das Wachstum abnimmt. Epidemiologen nutzen genau diese Analyse für Infektionskurven.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Jede Nullstelle von $f\'$ ist automatisch ein Extrempunkt',
        correct: 'Nullstelle von $f\'$ PLUS Vorzeichenwechsel oder $f\'\' \\neq 0$ prüfen',
        why: 'Bei $f(x) = x^3$ ist $f\'(0) = 0$, aber kein Extremum — sondern ein Sattelpunkt! Du MUSST die hinreichende Bedingung ($f\'\' \\neq 0$ oder Vorzeichenwechsel von $f\'$) prüfen.',
        amir_warning: 'In höheren Dimensionen heissen solche Stellen "Saddle Points" — der Optimizer bleibt dort haengen und denkt, er hat ein Minimum gefunden. Immer die zweite Ableitung checken!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ reicht für einen Wendepunkt',
        correct: '$f\'\'(x_0) = 0$ UND $f\'\'\'(x_0) \\neq 0$ zusammen bestaetigen den Wendepunkt',
        why: 'Bei $f(x) = x^4$ ist $f\'\'(0) = 0$, aber kein Wendepunkt — die Kruemmung wechselt nicht! Die dritte Ableitung muss ungleich Null sein, um den Kruemmungswechsel zu garantieren.',
        amir_warning: 'Gleiche Falle wie bei Extrema: Die notwendige Bedingung allein reicht nie. Immer die hinreichende Bedingung prüfen — sonst vertraust du einem falschen Ergebnis.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse soll auf dem Handy laufen — aber Amirs Modell braucht zu viel Speicher. "Du musst die Netzwerkarchitektur optimieren", sagt seine Teamkollegin Sara. "Maximale Genauigkeit bei minimalem Speicherverbrauch." Amir erkennt: Das ist eine klassische Extremwertaufgabe — eine Größe optimieren, während eine andere Größe eingeschraenkt ist.',
      challenge: 'Amir will die beste Modellarchitektur finden: maximale Vorhersagequalität unter der Nebenbedingung begrenzter Rechenressourcen.',
      outro: 'Amir hat das Prinzip verstanden: Zielfunktion aufstellen, Nebenbedingung einsetzen, auf eine Variable reduzieren, ableiten, Null setzen, prüfen. "Ob Dosendimensionen oder Modellparameter — das Schema ist immer dasselbe", stellt er fest. Sein Modell passt jetzt auf 50 MB.',
    },
    objectives: {
      setup_equations: 'Aus einem Sachzusammenhang Zielfunktion und Nebenbedingung aufstellen',
      optimize_constraints: 'Durch Einsetzen der Nebenbedingung eine Funktion einer Variablen erzeugen und optimieren',
      verify_extremum: 'Mit der zweiten Ableitung prüfen, ob ein Maximum oder Minimum vorliegt, und Randwerte berücksichtigen',
    },
    explanation: {
      intro: 'Bei Extremwertaufgaben geht es immer um dasselbe: Eine Größe soll möglichst groß oder klein werden (Zielfunktion), während eine Einschraenkung gilt (Nebenbedingung):',
      strategy: 'Die Strategie ist immer gleich: (1) Zielfunktion aufstellen — was soll optimiert werden? (2) Nebenbedingung finden — welche Einschraenkung gilt? (3) Nebenbedingung nach einer Variablen aufloesen und in die Zielfunktion einsetzen. (4) Ableiten, Null setzen, prüfen.',
      amir_tip: 'Hyperparameter-Tuning ist genau so eine Extremwertaufgabe: Ich will den Validierungsfehler minimieren (Zielfunktion), aber mein GPU-Speicher ist begrenzt (Nebenbedingung). Das Schema aus dem Mathe-Unterricht funktioniert 1:1!',
      substitution: 'Nach dem Einsetzen der Nebenbedingung haengt die Zielfunktion nur noch von einer Variablen ab. Jetzt wird ganz normal abgeleitet und die kritische Stelle geprueft:',
      domain_check: 'Vergiss nicht den Definitionsbereich! Bei realen Problemen gibt es oft Grenzen (z.B. $r > 0$ bei einem Radius). Vergleiche den Funktionswert an der kritischen Stelle mit den Randwerten — manchmal liegt das Optimum am Rand.',
    },
    concepts: {
      target_function: {
        title: 'Zielfunktion',
        desc: 'Die Größe, die optimiert werden soll — maximaler Gewinn, minimale Oberflaeche, beste Genauigkeit. Haengt anfangs oft von zwei Variablen ab.',
      },
      constraint: {
        title: 'Nebenbedingung',
        desc: 'Die Einschraenkung, die gilt — festes Volumen, begrenztes Budget, begrenzte Parameter. Erlaubt es, eine Variable zu eliminieren und die Zielfunktion auf eine Variable zu reduzieren.',
      },
      boundary_check: {
        title: 'Randwertpruefung',
        desc: 'Das Optimum kann auch am Rand des Definitionsbereichs liegen. Immer $f(x_{opt})$ mit den Funktionswerten an den Raendern $f(a)$ und $f(b)$ vergleichen.',
      },
    },
    examples: {
      can_volume: {
        title: 'Dose mit minimalem Materialverbrauch',
        context: 'Eine zylindrische Dose soll 330 ml fassen — bei möglichst wenig Blech.',
        step1: 'Nebenbedingung: Das Volumen ist fest. Nach $h$ aufloesen, um eine Variable zu eliminieren:',
        step2: 'Zielfunktion (Oberflaeche) aufstellen und $h$ einsetzen — jetzt haengt alles nur noch von $r$ ab:',
        step3: 'Ableiten, Null setzen und nach $r$ aufloesen — das ist der optimale Radius:',
        step4: 'Zweite Ableitung prüfen: Positiv bedeutet Minimum — wir haben tatsächlich die sparsamste Dose gefunden:',
        amir_comment: 'Das ist exakt wie Modellkompression: Feste Genauigkeit (Nebenbedingung), minimale Parameteranzahl (Zielfunktion). Ich ersetze $r$ durch "Layerbreite" und $h$ durch "Tiefe" — gleiches Prinzip!',
      },
      profit_max: {
        title: 'Maximaler Gewinn',
        context: 'Ein Startup will den optimalen Preis für sein Abo-Modell finden.',
        step1: 'Gewinnfunktion aufstellen: Erloes minus Kosten — hier schon in einer Variablen:',
        step2: 'Ableitung Null setzen — die optimale Stueckzahl:',
        step3: 'Zweite Ableitung ist negativ — also ein Maximum. Der Gewinn wird hier tatsächlich maximal:',
        step4: 'Maximalen Gewinn berechnen durch Einsetzen:',
        amir_comment: 'Preisoptimierung ist ein Klassiker in Data Science. Bei DataPulse könnten wir die optimale Abo-Stufe genauso berechnen — Gewinn maximieren unter der Bedingung, dass Nutzer nicht abspringen.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Hyperparameter-Optimierung',
        desc: 'Die Lernrate $\\alpha$ im Gradient Descent muss optimal gewählt werden: Zu groß = Divergenz, zu klein = ewig langsam. Das optimale $\\alpha$ minimiert den Validierungsfehler.',
      },
      packaging: {
        title: 'Verpackungsdesign',
        desc: 'Minimaler Materialverbrauch bei festem Volumen — genau das lösen Ingenieure taeglich. Jede Getraenkedose, jeder Karton ist das Ergebnis einer Extremwertaufgabe.',
      },
      solar_panel: {
        title: 'Solarpanel-Ausrichtung',
        desc: 'Der Neigungswinkel eines Solarpanels bestimmt die Energieausbeute. Den optimalen Winkel zu finden ist eine Extremwertaufgabe mit dem Sonnenstand als Nebenbedingung.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Zielfunktion mit zwei Variablen direkt ableiten',
        correct: 'Erst Nebenbedingung einsetzen, dann ableiten',
        why: 'Mit zwei Variablen kannst du nicht einfach nach $x$ ableiten — $y$ ändert sich mit! Du MUSST die Nebenbedingung nutzen, um $y$ durch $x$ auszudruecken. Erst dann haengt alles von einer Variablen ab.',
        amir_warning: 'Das ist wie ein ML-Modell mit zu vielen freien Parametern: Ohne Constraints kein sinnvolles Optimum. Die Nebenbedingung reduziert die Freiheitsgrade — genau wie Regularisierung.',
      },
      no_boundary: {
        wrong: 'Kritische Stelle als globales Optimum annehmen',
        correct: 'Kritische Stelle mit Randwerten vergleichen',
        why: 'Auf einem beschraenkten Intervall $[a, b]$ kann das Optimum am Rand liegen! $f\'(x_0) = 0$ liefert nur lokale Kandidaten. Du musst $f(x_0)$, $f(a)$ und $f(b)$ vergleichen.',
        amir_warning: 'In der Praxis hat jeder Parameter einen erlaubten Bereich. Meine Lernrate darf nicht negativ sein, die Batchgroesse nicht über den GPU-Speicher hinaus. Randwerte prüfen ist Pflicht!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse läuft — aber Amir braucht eine neue Metrik: Wie viele Songs hören Nutzer insgesamt pro Woche? Er hat die Hörrate $r(t)$ als Funktion der Zeit, aber er braucht die Gesamtanzahl. "Rate mal Zeit ergibt Menge — aber die Rate ändert sich staendig", gruebelst Amir. Sein Kumpel Kai grinst: "Klingt nach einem Integral."',
      challenge: 'Amir will aus der zeitabhaengigen Hörrate $r(t)$ die Gesamtzahl gehörter Songs berechnen — das führt ihn zur Integralrechnung.',
      outro: 'Amir kann jetzt Stammfunktionen bilden, bestimmte Integrale berechnen und Flaechen zwischen Kurven bestimmen. "Integration ist die Umkehrung der Ableitung — und in der Praxis summiere ich damit kontinuierliche Daten auf", fasst er zusammen. Seine Weekly-Listening-Metrik steht.',
    },
    objectives: {
      antiderivative: 'Stammfunktionen mit der Potenzregel rückwärts bilden und die Integrationskonstante $C$ verstehen',
      definite_integral: 'Bestimmte Integrale mit dem Hauptsatz berechnen: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Den Hauptsatz der Differential- und Integralrechnung verstehen und bei Flaechenberechnungen anwenden',
    },
    explanation: {
      intro: 'Integration ist die Umkehrung der Ableitung: Wenn $F\'(x) = f(x)$, dann ist $F(x)$ eine Stammfunktion von $f(x)$. Die allgemeine Stammfunktion enthaelt immer die Konstante $C$:',
      power_rule_integral: 'Die Potenzregel rückwärts: Exponent um 1 erhoehen und durch den neuen Exponenten teilen. Das funktioniert für alle $n \\neq -1$:',
      amir_tip: 'Integration ist wie Aggregation in Datenbanken: Ableitung gibt die momentane Änderungsrate, Integration summiert alles auf. Wenn ich die Downloads pro Stunde kenne, gibt mir das Integral die Gesamtdownloads über einen Zeitraum.',
      definite_integral: 'Das bestimmte Integral berechnet den "Gesamteffekt" zwischen zwei Grenzen. Der Hauptsatz macht es einfach: Stammfunktion an der oberen Grenze minus Stammfunktion an der unteren Grenze:',
      area_interpretation: 'Geometrisch ist das bestimmte Integral die Flaeche zwischen Kurve und $x$-Achse. Achtung: Flaechen unterhalb der $x$-Achse zählen negativ! Für die echte Flaeche brauchst du den Betrag:',
    },
    concepts: {
      antiderivative: {
        title: 'Stammfunktion',
        desc: 'Eine Funktion $F(x)$ mit $F\'(x) = f(x)$. Die Konstante $+C$ ist wichtig, weil verschiedene Stammfunktionen sich nur um eine Konstante unterscheiden.',
      },
      definite_integral: {
        title: 'Bestimmtes Integral',
        desc: 'Berechnet die vorzeichenbehaftete Flaeche zwischen $f(x)$ und der $x$-Achse von $a$ bis $b$. Obere Grenze einsetzen minus untere Grenze einsetzen.',
      },
      fundamental_theorem: {
        title: 'Hauptsatz der Analysis',
        desc: 'Verbindet Ableitung und Integral: Ableiten und Integrieren sind Umkehroperationen. Das bestimmte Integral laesst sich über die Stammfunktion berechnen.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Flaeche zwischen Parabel und $x$-Achse',
        context: 'Amir visualisiert die Verteilung von Hörzeit als Flaeche unter einer Kurve.',
        step1: 'Funktion und Nullstellen bestimmen — das sind unsere Integrationsgrenzen:',
        step2: 'Stammfunktion bilden mit der Potenzregel rückwärts:',
        step3: 'Bestimmtes Integral berechnen: Obere Grenze einsetzen minus untere Grenze einsetzen:',
        step4: 'Das Integral ist negativ, weil die Parabel unterhalb der $x$-Achse liegt. Für die Flaeche den Betrag nehmen:',
        amir_comment: 'Negative Integrale machen in der Datenanalyse total Sinn: Wenn $f(x)$ die Abweichung vom Durchschnitt ist, zeigt ein negatives Integral, dass die Werte insgesamt unter dem Schnitt lagen.',
      },
      distance_from_velocity: {
        title: 'Strecke aus Geschwindigkeit berechnen',
        context: 'Wie weit faehrt ein autonom fahrendes Auto in 4 Sekunden?',
        step1: 'Gegeben ist die Geschwindigkeitsfunktion:',
        step2: 'Die Gesamtstrecke ist das Integral der Geschwindigkeit über die Zeit:',
        step3: 'Stammfunktion bilden — jeden Term einzeln integrieren:',
        step4: 'Grenzen einsetzen und Differenz berechnen:',
        amir_comment: 'Sensordaten kommen als Rate rein — Geschwindigkeit, Datendurchsatz, Requests pro Sekunde. Das Integral macht daraus die Gesamtmenge. Mein Dashboard zeigt genau das: $\\int_0^T r(t)\\,dt$ = Gesamtstreams.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Datenaggregation über Zeit',
        desc: 'Wenn die Datenrate $r(t)$ bekannt ist, liefert das Integral die Gesamtmenge über einen Zeitraum. So berechnen Streaming-Dienste monatliche Hörminuten aus sekuendlichen Daten.',
      },
      energy_consumption: {
        title: 'Energieverbrauch',
        desc: 'Leistung $P(t)$ in Watt mal Zeit ergibt Energie in Joule — aber nur bei konstanter Leistung. Bei schwankender Leistung brauchst du das Integral: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Wahrscheinlichkeiten',
        desc: 'Die Wahrscheinlichkeit, dass eine Zufallsvariable zwischen $a$ und $b$ liegt, ist die Flaeche unter der Dichtefunktion — also ein bestimmtes Integral. Die Grundlage aller Statistik.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Integrationskonstante $C$ bei unbestimmten Integralen vergessen',
        correct: 'Immer $+ C$ anhaengen beim unbestimmten Integral',
        why: 'Wenn $F\'(x) = 2x$, dann ist sowohl $x^2$ als auch $x^2 + 7$ eine Stammfunktion. Das $+C$ repraesentiert alle möglichen Stammfunktionen. Beim bestimmten Integral kürzt sich $C$ raus — dort darfst du es weglassen.',
        amir_warning: 'In der Praxis ist $C$ die Anfangsbedingung: Wie viele Songs hatte der Nutzer schon gehört, bevor wir angefangen haben zu messen? Ohne $C$ fehlt der Startwert, und deine Berechnung startet bei Null statt beim echten Wert.',
      },
      negative_area: {
        wrong: 'Integral direkt als Flaeche interpretieren, auch wenn negativ',
        correct: 'Für echte Flaechen den Betrag der Integralwerte nehmen',
        why: 'Das Integral $\\int_a^b f(x)\\,dx$ kann negativ sein, wenn $f(x) < 0$. Das ist korrekt als vorzeichenbehaftete Flaeche. Wenn du die geometrische Flaeche brauchst, musst du $|f(x)|$ integrieren oder die Teilflaechen einzeln berechnen.',
        amir_warning: 'Stell dir vor, du berechnest die Gesamthoerzeit und bekommst ein negatives Ergebnis — das waere offensichtlich falsch. Bei Flaechenproblemen immer prüfen, ob die Funktion das Vorzeichen wechselt, und Teilintervalle separat berechnen!',
      },
    },
  },
};
