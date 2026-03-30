export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia hat Lumis Sprungkurve hinbekommen — aber jetzt steckt sie fest. In Level 3 von "Hafenlichter" muss Lumi auf einer sich bewegenden Plattform landen. "Ich brauche den exakten Zeitpunkt, wann die Sprungkurve die Plattform trifft", sagt Mia zu Tim. Das bedeutet: Sie muss eine quadratische Gleichung loesen. Nicht nur die Funktion zeichnen, sondern ganz konkret nach $x$ aufloesen.',
      challenge: 'Mia muss berechnen, wann Lumis Sprungkurve die bewegliche Plattform schneidet — das fuehrt auf eine quadratische Gleichung.',
      outro: 'Mia hat drei Methoden in ihrem Werkzeugkasten: pq-Formel, quadratische Ergaenzung und Faktorisieren. Je nach Gleichung waehlt sie die passende Methode — und Lumi landet jetzt punktgenau auf jeder Plattform. "Das ist wie ein Schweizer Taschenmesser", grinst sie.',
    },
    objectives: {
      solve: 'Quadratische Gleichungen sicher loesen und Loesungsmenge angeben',
      pq_formula: 'Die pq-Formel anwenden — inklusive Sonderfaelle (keine oder eine Loesung)',
      completing_square: 'Quadratische Ergaenzung als Loesungsweg verstehen und durchfuehren',
      factoring: 'Quadratische Gleichungen durch Faktorisieren loesen',
    },
    explanation: {
      intro: 'Eine quadratische Gleichung hat die allgemeine Form mit dem hoechsten Exponenten 2. Im Gegensatz zu linearen Gleichungen ($x$ hoch 1) kann sie null, eine oder zwei Loesungen haben. Die allgemeine Form lautet:',
      normal_form: 'Fuer die pq-Formel brauchen wir die Normalform — das heisst, der Koeffizient vor $x^2$ muss genau 1 sein. Ist das nicht der Fall, teilen wir die gesamte Gleichung durch $a$:',
      mia_tip: 'Ich merke mir: Erst alles auf eine Seite bringen, damit rechts Null steht. Dann durch den Koeffizienten vor $x^2$ teilen. Erst DANN darf ich die pq-Formel benutzen!',
      pq_formula: 'Die pq-Formel ist das Universalwerkzeug fuer quadratische Gleichungen in Normalform. Du liest $p$ und $q$ direkt ab und setzt ein:',
      completing_square: 'Die quadratische Ergaenzung funktioniert so: Du formst die linke Seite in ein perfektes Quadrat um. Dazu addierst du $(\\frac{p}{2})^2$ auf beiden Seiten. Das Ergebnis ist ein Ausdruck der Form $(x + \\frac{p}{2})^2$, den du leicht nach $x$ aufloesen kannst.',
      factoring: 'Wenn du die Nullstellen $x_1$ und $x_2$ kennst (oder erraten kannst), laesst sich die Gleichung als Produkt zweier Klammern schreiben. Das Produkt ist Null, wenn mindestens ein Faktor Null ist:',
    },
    concepts: {
      pq_formula: {
        title: 'pq-Formel',
        desc: 'Das Standardwerkzeug fuer quadratische Gleichungen in Normalform. Funktioniert immer — du brauchst nur $p$ (Koeffizient vor $x$) und $q$ (konstantes Glied).',
      },
      completing_square: {
        title: 'Quadratische Ergaenzung',
        desc: 'Du vervollstaendigst die linke Seite zu einem perfekten Quadrat. Besonders nuetzlich, wenn du den Scheitelpunkt einer Parabel bestimmen willst.',
      },
      discriminant: {
        title: 'Diskriminante',
        desc: 'Der Ausdruck unter der Wurzel in der pq-Formel: $D > 0$ ergibt zwei Loesungen, $D = 0$ ergibt genau eine, $D < 0$ bedeutet keine reelle Loesung.',
      },
      factoring: {
        title: 'Faktorisieren',
        desc: 'Zerlegung in zwei Linearfaktoren. Funktioniert besonders elegant, wenn die Nullstellen ganzzahlig sind — dann kannst du sie oft erraten.',
      },
    },
    examples: {
      pq_application: {
        title: 'Gleichung mit der pq-Formel loesen',
        context: 'Mia berechnet, wann Lumis Sprungkurve die Plattform bei $y = 0$ trifft.',
        step1: 'Die Gleichung ist bereits in Normalform (Koeffizient vor $x^2$ ist 1):',
        step2: 'Wir lesen $p$ und $q$ ab — Vorsicht mit den Vorzeichen:',
        step3: 'Werte in die pq-Formel einsetzen und Schritt fuer Schritt ausrechnen:',
        step4: 'Zwei Loesungen — Lumi trifft die Plattform an zwei Stellen:',
        mia_comment: 'Zwei Loesungen ergeben Sinn: Lumi springt bei $x = 1$ hoch und landet bei $x = 3$ wieder. Der Abschnitt dazwischen ist der Flug!',
      },
      completing_square: {
        title: 'Loesen durch quadratische Ergaenzung',
        context: 'Tim will die Gleichung ohne pq-Formel loesen — als Alternative.',
        step1: 'Wir starten mit der Gleichung in Normalform:',
        step2: 'Erst das konstante Glied auf die rechte Seite bringen:',
        step3: 'Jetzt die quadratische Ergaenzung: $(\\frac{6}{2})^2 = 9$ auf beiden Seiten addieren:',
        step4: 'Die linke Seite ist jetzt ein perfektes Quadrat — Wurzel ziehen ergibt zwei Faelle:',
        step5: 'Beide Loesungen berechnen:',
        mia_comment: 'Gleiche Gleichung, gleiche Loesungen, anderer Weg. Ich nutze die quadratische Ergaenzung, wenn ich den Scheitelpunkt der Parabel auch brauche — zwei Fliegen mit einer Klappe!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds & Wurfparabeln',
        desc: 'Jeder Wurf in Angry Birds folgt einer Parabel. Die Gleichung $h(t) = 0$ verraet dir, wann das Objekt den Boden trifft. Physiker nutzen dieselbe Formel fuer echte Wurfbewegungen.',
      },
      breakeven: {
        title: 'Gewinnzone finden',
        desc: 'Ein Unternehmen will wissen: Ab welcher Stueckzahl machen wir Gewinn? Der Gewinn $G(x) = 0$ liefert die Break-Even-Punkte — meistens eine quadratische Gleichung.',
      },
      rocket: {
        title: 'Raketenstarts',
        desc: 'Die Hoehe einer Rakete nach dem Start folgt einer quadratischen Funktion (solange der Treibstoff reicht). Wann erreicht sie 1000 m? Quadratische Gleichung!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'pq-Formel ohne Null auf der rechten Seite',
        correct: 'Erst alles auf eine Seite bringen',
        why: 'Die pq-Formel setzt voraus, dass die rechte Seite Null ist. Bei $x^2 + 3x = 5$ musst du erst $-5$ auf beide Seiten addieren, damit $x^2 + 3x - 5 = 0$ entsteht. Sonst ist $q$ falsch!',
        mia_warning: 'Ich hab diesen Fehler mal im Code gehabt — die Plattform-Kollision war komplett daneben, weil das $q$ das falsche Vorzeichen hatte. Immer erst Null rechts!',
      },
      sign_pq: {
        wrong: 'Vorzeichenfehler bei $p$ in der pq-Formel',
        correct: 'Das Minus vor $\\frac{p}{2}$ beachten',
        why: 'In der pq-Formel steht $-\\frac{p}{2}$. Bei $x^2 - 6x + 8 = 0$ ist $p = -6$, also $-\\frac{-6}{2} = +3$. Vergisst du das Minus, bekommst du $-3$ statt $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia arbeitet am Leuchtturm-Level von Hafenlichter. Der Leuchtturm strahlt einen Lichtkegel ueber den Hafen, und Lumi muss sich im Schatten verstecken. "Ich muss berechnen, wie weit der Lichtkegel bei einem bestimmten Winkel reicht", sagt Mia. Tim zeigt auf ein rechtwinkliges Dreieck, das der Lichtkegel mit dem Boden bildet. "Das ist Trigonometrie — Sinus, Kosinus und Tangens."',
      challenge: 'Mia braucht die Reichweite des Lichtkegels bei verschiedenen Winkeln, um den Schattenbereich zu programmieren.',
      outro: 'Der Leuchtturm dreht sich langsam, und der Lichtkegel wandert ueber den Hafen. Dank Sinus und Kosinus berechnet Mias Code in Echtzeit, welche Bereiche beleuchtet sind. Lumi schleicht von Schatten zu Schatten — das Level ist richtig spannend geworden!',
    },
    objectives: {
      sin_cos_tan: 'Sinus, Kosinus und Tangens im rechtwinkligen Dreieck sicher anwenden',
      unit_circle: 'Den Einheitskreis verstehen und Werte ablesen koennen',
      angle_calculations: 'Winkel und Seitenlaengen mit trigonometrischen Funktionen berechnen',
      real_problems: 'Praxisaufgaben mit Trigonometrie loesen (Hoehen, Entfernungen, Winkel)',
    },
    explanation: {
      intro: 'Trigonometrie verbindet Winkel mit Seitenlaengen. In jedem rechtwinkligen Dreieck gelten drei grundlegende Verhaeltnisse — benannt nach dem Winkel $\\alpha$, den du betrachtest:',
      mia_tip: 'Mein Merksatz: "GAGA HaHa GAGA" — Gegenkathete durch Hypotenuse (sin), Ankathete durch Hypotenuse (cos), Gegenkathete durch Ankathete (tan). Klingt albern, vergisst man aber nie!',
      unit_circle: 'Der Einheitskreis hat den Radius 1 und seinen Mittelpunkt im Ursprung. Fuer jeden Winkel $\\alpha$ liefert er direkt die Werte: Die $x$-Koordinate ist $\\cos(\\alpha)$, die $y$-Koordinate ist $\\sin(\\alpha)$. Damit gilt immer:',
      special_angles: 'Bestimmte Winkel solltest du auswendig kennen: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Tipp: Beim Einheitskreis kannst du diese Werte geometrisch ablesen.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'Das Verhaeltnis von Gegenkathete zu Hypotenuse. Im Einheitskreis entspricht $\\sin(\\alpha)$ der $y$-Koordinate des Punktes auf dem Kreis.',
      },
      cosine: {
        title: 'Kosinus',
        desc: 'Das Verhaeltnis von Ankathete zu Hypotenuse. Im Einheitskreis entspricht $\\cos(\\alpha)$ der $x$-Koordinate. Kosinus und Sinus sind um $90°$ verschoben.',
      },
      tangent: {
        title: 'Tangens',
        desc: 'Das Verhaeltnis von Gegenkathete zu Ankathete — oder aequivalent $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideal fuer Steigungen und Neigungswinkel.',
      },
      unit_circle: {
        title: 'Einheitskreis',
        desc: 'Ein Kreis mit Radius 1. Jeder Punkt auf dem Kreis hat die Koordinaten $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Damit lassen sich sin und cos fuer alle Winkel definieren — nicht nur fuer spitze.',
      },
    },
    examples: {
      height_tan: {
        title: 'Hoehe mit dem Tangens berechnen',
        context: 'Mia misst den Winkel zum Leuchtturm-Dach: $35°$. Die Entfernung zum Turm betraegt $50\\,\\text{m}$.',
        step1: 'Skizze: Die Entfernung ist die Ankathete, die gesuchte Hoehe ist die Gegenkathete. Also Tangens:',
        step2: 'Nach der Hoehe $h$ umstellen — beide Seiten mit $50\\,\\text{m}$ multiplizieren:',
        step3: 'Taschenrechner (DEG-Modus!): $\\tan(35°) \\approx 0{,}7002$ einsetzen und ausrechnen:',
        mia_comment: 'Im Spiel laeuft das in Echtzeit: Winkel des Lichtkegels aendert sich, und mein Code berechnet sofort die neue Reichweite. Tangens ist dafuer perfekt!',
      },
      unit_circle: {
        title: 'Werte am Einheitskreis ablesen',
        context: 'Tim will Mia zeigen, wie der Einheitskreis funktioniert — am Beispiel $60°$.',
        step1: 'Winkel umrechnen (optional): $60°$ entspricht $\\frac{\\pi}{3}$ im Bogenmass:',
        step2: 'Sinus-Wert ablesen — die $y$-Koordinate des Punktes auf dem Einheitskreis:',
        step3: 'Kosinus-Wert ablesen — die $x$-Koordinate:',
        step4: 'Der Punkt auf dem Einheitskreis hat also die Koordinaten:',
        mia_comment: 'Im Einheitskreis sehe ich sin und cos als Laengen. Das macht es viel anschaulicher als nur Zahlen in einer Tabelle!',
      },
    },
    realworld: {
      compass: {
        title: 'Navigation & GPS',
        desc: 'Dein Smartphone berechnet Richtungen mit Trigonometrie. Die Funktion atan2 wandelt $x$- und $y$-Koordinaten in einen Winkel um — so weiss Google Maps, in welche Richtung du gehen musst.',
      },
      building_height: {
        title: 'Gebaeudehoehen messen',
        desc: 'Architekten und Vermesser messen Gebaeudehoehen, ohne aufs Dach zu klettern. Mit einem Winkelmesser und dem Tangens reichen Abstand und Winkel voellig aus.',
      },
      music: {
        title: 'Toene & Schallwellen',
        desc: 'Jeder Ton ist eine Sinuswelle. Der Kammerton A hat 440 Schwingungen pro Sekunde — beschrieben durch $f(t) = \\sin(880\\pi t)$. Musik ist angewandte Trigonometrie!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Sinus und Kosinus verwechselt',
        correct: 'Sinus = Gegenkathete/Hypotenuse',
        why: 'Sinus gehoert zur Gegenkathete (die Seite gegenueber dem Winkel), Kosinus zur Ankathete (die Seite neben dem Winkel). Verwechselst du sie, bekommst du den falschen Wert.',
        mia_warning: 'Passiert mir immer noch manchmal! Ich male mir das Dreieck hin und beschrifte die Seiten relativ zum Winkel. Dann sehe ich sofort, was Gegen- und was Ankathete ist.',
      },
      deg_rad: {
        wrong: 'Falscher Winkelmodus am Taschenrechner',
        correct: 'Immer DEG-Modus pruefen bei Gradangaben',
        why: 'Im RAD-Modus interpretiert der Taschenrechner $90$ als $90$ Radiant (ca. $5156°$), nicht als $90°$. $\\sin(90°) = 1$, aber $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Ergebnis: komplett falsch.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter soll einen Multiplayer-Modus bekommen. Mia testet die Server mit 10 Spielern — alles laeuft smooth. Aber Tim warnt: "Was passiert bei 100? Bei 1000? Wenn das Spiel viral geht, verdoppelt sich die Spielerzahl vielleicht alle paar Tage." Mia rechnet nach und erschrickt: Exponentielles Wachstum ist viel schneller, als man denkt.',
      challenge: 'Die Serverlast wuechst nicht linear mit den Spielern, sondern exponentiell. Mia muss vorhersagen, wann die Server ueberlastet sind.',
      outro: 'Mia hat ein Modell gebaut, das die Spielerzahl-Entwicklung vorhersagt. Dank der Exponentialfunktion weiss sie jetzt: Wenn die Verdopplungszeit bei 3 Tagen liegt, braucht sie nach 2 Wochen 32-mal so viel Serverkapazitaet. "Lieber frueh skalieren als spaet abstuerzen", beschliesst sie.',
    },
    objectives: {
      exponential_functions: 'Exponentialfunktionen erkennen und von linearen Funktionen unterscheiden',
      growth_factor: 'Den Wachstumsfaktor aus Prozentangaben bestimmen und interpretieren',
      half_life: 'Halbwertszeit und Verdopplungszeit berechnen und anwenden',
      model_real_world: 'Reale Wachstums- und Zerfallsprozesse mit Exponentialfunktionen modellieren',
    },
    explanation: {
      intro: 'Bei linearem Wachstum kommt in jedem Schritt der gleiche Betrag dazu. Bei exponentiellem Wachstum wird in jedem Schritt mit dem gleichen Faktor multipliziert. Das klingt aehnlich — fuehrt aber zu voellig unterschiedlichen Ergebnissen:',
      growth_factor: 'Der Wachstumsfaktor $b$ verraet dir alles: Waechst etwas um $p\\%$ pro Zeiteinheit, ist der Faktor groesser als 1. Nimmt etwas um $p\\%$ ab (Zerfall), ist er kleiner als 1:',
      mia_tip: 'Lineare Funktionen addieren, Exponentialfunktionen multiplizieren. Bei 10% Wachstum pro Tag ist der Faktor $b = 1{,}10$ — nach 7 Tagen also $1{,}10^7 \\approx 1{,}95$, fast eine Verdopplung! Das hat mich bei der Serverplanung ueberrascht.',
      half_life: 'Die Halbwertszeit $t_H$ ist die Zeit, nach der noch die Haelfte uebrig ist. Sie ist konstant — egal, mit wie viel du startest. Das ist das Besondere am exponentiellen Zerfall:',
      doubling_time: 'Das Gegenstueck beim Wachstum: Die Verdopplungszeit $t_V$ sagt dir, nach welcher Zeit sich der Wert verdoppelt hat. Auch sie bleibt immer gleich:',
    },
    concepts: {
      exponential_function: {
        title: 'Exponentialfunktion',
        desc: 'Die allgemeine Form: $a$ ist der Startwert, $b$ der Wachstumsfaktor, $t$ die Zeit. Entscheidend: Die Variable steht im Exponenten — das macht den Unterschied zu Potenzfunktionen.',
      },
      growth_factor: {
        title: 'Wachstumsfaktor',
        desc: 'Bei $p\\%$ Zunahme: $b = 1 + \\frac{p}{100}$. Beispiel: 5% Wachstum ergibt $b = 1{,}05$. Bei 12% Abnahme: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Halbwertszeit',
        desc: 'Die Zeit, bis sich ein Wert halbiert hat. Typisch fuer radioaktiven Zerfall, Medikamente im Koerper oder Akku-Entladung. Die Halbwertszeit ist vom Startwert unabhaengig.',
      },
      euler_base: {
        title: 'Natuerliche Exponentialfunktion',
        desc: 'Die Basis $e \\approx 2{,}718$ ist besonders: Die Funktion $e^x$ ist ihre eigene Ableitung. Mit $k > 0$ waechst sie, mit $k < 0$ zerfaellt sie. Standard in Naturwissenschaften.',
      },
    },
    examples: {
      bacteria: {
        title: 'Bakterienwachstum',
        context: 'Eine Bakterienkultur startet mit 500 Bakterien und verdoppelt sich jede Stunde.',
        step1: 'Startwert und Wachstumsfaktor identifizieren — Verdopplung bedeutet Faktor 2:',
        step2: 'Die Exponentialfunktion aufstellen — $t$ zaehlt die Stunden:',
        step3: 'Fuer $t = 5$ (nach 5 Stunden) einsetzen: $2^5 = 32$:',
        step4: 'Nach 5 Stunden gibt es 16.000 Bakterien:',
        mia_comment: 'Von 500 auf 16.000 in nur 5 Stunden! Das zeigt, warum exponentielles Wachstum so ueberraschend ist. Bei Servern laeuft das aehnlich — Spielerzahlen koennen schneller wachsen, als man Server nachbestellen kann.',
      },
      radioactive: {
        title: 'Radioaktiver Zerfall',
        context: 'Ein Medikament hat eine Halbwertszeit von 8 Tagen. Startmenge: 200 g.',
        step1: 'Halbwertszeit und Startwert notieren:',
        step2: 'Die Zerfallsformel mit $t_H = 8$ aufstellen:',
        step3: 'Nach 24 Tagen einsetzen — das sind genau 3 Halbwertszeiten ($\\frac{24}{8} = 3$):',
        step4: 'Nach 24 Tagen sind nur noch 25 g uebrig — ein Achtel des Startwerts:',
        mia_comment: 'Nach jeder Halbwertszeit halbiert sich die Menge: $200 \\to 100 \\to 50 \\to 25$. Das ist immer so, egal ob du mit 200 g oder 2 Tonnen startest.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Virale TikTok-Videos',
        desc: 'Ein virales Video bekommt anfangs 100 Views. Wenn jeder Zuschauer es 1,8 Leuten zeigt, explodieren die Zahlen: Nach 10 Runden sind es schon ueber 35.000 Views. Algorithmen verstaerken diesen Effekt noch.',
      },
      battery: {
        title: 'Akku-Entladung',
        desc: 'Dein Handy-Akku verliert pro Stunde etwa 5% seiner Ladung. Nach 14 Stunden ist noch etwa die Haelfte uebrig — das ist kein linearer Abfall, sondern exponentieller Zerfall.',
      },
      pandemic: {
        title: 'Pandemie-Ausbreitung',
        desc: 'COVID-19 hat gezeigt, was "exponentielles Wachstum" bedeutet: Ohne Massnahmen verdoppelten sich die Fallzahlen alle 3 Tage. Nach einem Monat waere das Faktor $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Lineares statt exponentielles Modell',
        correct: 'Prozentuale Aenderung = Exponentialfunktion',
        why: '"5% Wachstum pro Jahr" ist NICHT $+5$ pro Jahr, sondern $\\cdot 1{,}05$ pro Jahr. Bei linearem Modell waechst der Betrag konstant, beim exponentiellen waechst er immer schneller.',
        mia_warning: 'Ich hatte zuerst $\\text{Spieler}(t) = 100 + 50t$ gerechnet. Die echten Zahlen lagen nach einer Woche 3x so hoch! Exponentielles Wachstum unterschaetzt man fast immer.',
      },
      wrong_growth_factor: {
        wrong: 'Prozentzahl direkt als Faktor eingesetzt',
        correct: 'Faktor = $1 + \\frac{p}{100}$',
        why: 'Bei 3% Wachstum ist der Faktor $1{,}03$, nicht $3$! Mit $b = 3$ wuerde sich der Wert verdreifachen statt um 3% wachsen. Immer $1 + \\frac{p}{100}$ rechnen.',
      },
    },
  },
};
