export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia scrollt durch die Animationsliste von Hafenlichter und runzelt die Stirn. Lumis Atem-Animation sieht aus wie ein Roboter — abgehackt und unnatuerlich. Auch die Wellen im Hafen wirken steif, und der Tag-Nacht-Zyklus springt statt zu fliessen. "Alles, was sich wiederholt, braucht eine Schwingung", sagt Tim. "Sinus und Cosinus — die sind dafür gemacht." Mia öffnet ihren Taschenrechner und taucht ein in die Welt der periodischen Funktionen.',
      challenge: 'Atem-Animation, Wellengang und Tag-Nacht-Zyklus sollen natürlich schwingen statt ruckeln.',
      outro: 'Lumis Atem hebt und senkt sich jetzt sanft, die Hafenwellen rollen gleichmäßig ans Ufer, und das Licht wechselt fliessend von Morgenrot zu Mitternachtsblau. "Sinusfunktionen sind überall in der Natur", sagt Jule. Mia nickt: "Und jetzt sind sie auch in Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Periodische Funktionen erkennen und von nicht-periodischen unterscheiden',
      amplitude_period: 'Amplitude und Periode aus Graphen und Gleichungen ablesen',
      frequency: 'Die Frequenz berechnen und ihre Bedeutung erklären',
      modeling: 'Reale Vorgaenge mit Sinusfunktionen modellieren',
    },
    explanation: {
      intro: 'Manche Vorgaenge wiederholen sich immer wieder: dein Herzschlag, die Gezeiten, die Jahreszeiten. In der Mathematik beschreiben wir solche Schwingungen mit periodischen Funktionen. Die wichtigste davon ist die Sinusfunktion:',
      parameters: 'Die allgemeine Sinusfunktion hat vier Parameter, die du wie Regler an einem Mischpult verstehen kannst: $A$ steuert die Höhe der Schwingung (Amplitude), $b$ beeinflusst, wie schnell sich die Schwingung wiederholt (Periode), $c$ verschiebt die Kurve nach links oder rechts, und $d$ verschiebt sie nach oben oder unten.',
      mia_tip: 'Für Lumis Atem-Animation nutze ich $A = 3$ Pixel und $T = 4$ Sekunden. Das heisst: Alle 4 Sekunden atmet Lumi einmal ein und aus, und die Brust bewegt sich 3 Pixel hoch und runter. Ganz natürlich!',
      graph_reading: 'Um eine periodische Funktion vom Graphen abzulesen, suchst du nach dem Muster, das sich wiederholt. Der Abstand zwischen zwei identischen Stellen heisst Periode $T$. Mathematisch bedeutet Periodizität:',
      applications: 'Periodische Funktionen sind das mathematische Werkzeug für alles, was schwingt: Schallwellen, Wechselstrom, Pendel, Lichtwellen und sogar die Umlaufbahnen von Planeten. Immer wenn sich ein Vorgang regelmäßig wiederholt, steckt eine Sinusfunktion (oder ihre Verwandten) dahinter.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitude',
        desc: 'Die Amplitude $A$ ist der maximale Ausschlag vom Mittelwert. Sie misst, wie "stark" die Schwingung ist. Am Graphen liest du sie als halbe Differenz zwischen höchstem und tiefstem Punkt ab.',
      },
      period: {
        title: 'Periode',
        desc: 'Die Periode $T$ ist die Laenge eines vollstaendigen Schwingungszyklus. Nach der Zeit $T$ wiederholt sich alles exakt. Je größer $b$, desto kürzer die Periode.',
      },
      frequency: {
        title: 'Frequenz',
        desc: 'Die Frequenz $f$ gibt an, wie viele Schwingungen pro Zeiteinheit stattfinden. Sie ist der Kehrwert der Periode. Einheit: Hertz (Hz) = Schwingungen pro Sekunde.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Sinusfunktion vom Graphen ablesen',
        context: 'Mia hat einen Welleneffekt im Spiel und will die passende Gleichung finden.',
        step1: 'Höchsten und tiefsten Punkt ablesen: $y_{\\max} = 3$ und $y_{\\min} = -3$. Die Amplitude ist die halbe Differenz — die Welle schwingt 3 Einheiten nach oben und unten.',
        step2: 'Periode ablesen: Ein vollstaendiger Zyklus dauert $4\\pi$ Einheiten. Daraus berechnen wir $b$ mit der Formel $b = \\frac{2\\pi}{T}$ — das ergibt $0{,}5$.',
        step3: 'Gleichung zusammensetzen: Da die Mittellinie bei $y = 0$ liegt ($d = 0$) und kein Phasenverschiebung ($c = 0$) erkennbar ist, lautet die Funktion einfach:',
        mia_comment: 'Amplitude 3, Periode $4\\pi$ — damit schaukeln die Hafenwellen schön langsam. Für schnellere Wellen erhoehe ich einfach $b$!',
      },
      ferris_wheel: {
        title: 'Riesenrad modellieren',
        context: 'Ein Riesenrad mit 60 m Durchmesser dreht sich alle 10 Minuten einmal. Die unterste Gondel ist 5 m über dem Boden.',
        step1: 'Amplitude bestimmen: Der Radius ist die halbe Höhe, also $A = 30\\,\\text{m}$. Die Mittellinie liegt bei $d = 5 + 30 = 35\\,\\text{m}$ (Boden + Radius).',
        step2: 'Periode ist eine volle Umdrehung: $T = 10\\,\\text{min}$. Daraus folgt $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Startpunkt beachten: Unten starten heisst, wir verschieben den Sinus um $-\\frac{\\pi}{2}$ (der Sinus startet normalerweise in der Mitte, nicht unten).',
        step4: 'Probe: Nach 2,5 Minuten (Viertelumdrehung) sollte die Gondel auf Mittelhoehe sein. Einsetzen: $\\sin(0) = 0$, also $h = 35\\,\\text{m}$. Stimmt!',
        mia_comment: 'Genau so funktioniert auch der Tag-Nacht-Zyklus in Hafenlichter: Sinus mit $T = 24$ (ein Spieltag) und Verschiebung, damit es um Mitternacht am dunkelsten ist.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Dein Herzschlag',
        desc: 'Dein Herz schlaegt etwa 72-mal pro Minute — das sind 1,2 Schlaege pro Sekunde. Die elektrischen Signale deines Herzens (EKG) zeigen eine periodische Kurve. Aerzte lesen Amplitude und Frequenz ab, um Herzprobleme zu erkennen.',
      },
      tides: {
        title: 'Ebbe und Flut',
        desc: 'Am Hamburger Hafen schwankt der Wasserstand alle 12,4 Stunden zwischen Hoch- und Niedrigwasser. Das ist eine fast perfekte Sinusfunktion — verursacht durch die Anziehungskraft des Mondes.',
      },
      temperature: {
        title: 'Jahrestemperatur',
        desc: 'Die Durchschnittstemperatur über ein Jahr folgt grob einer Sinuskurve: warm im Sommer, kalt im Winter, mit einer Periode von 365 Tagen. Klimaforscher nutzen dieses Modell als Basis für Vorhersagen.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Periode und Frequenz verwechselt',
        correct: 'Frequenz ist der Kehrwert der Periode',
        why: 'Wenn die Periode $T = 2\\,\\text{s}$ betraegt, schwingt es alle 2 Sekunden einmal. Die Frequenz ist dann $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — nicht $2\\,\\text{Hz}$! Frequenz = "Wie oft pro Sekunde?", Periode = "Wie lange dauert ein Zyklus?"',
        mia_warning: 'Dieser Fehler hat dazu gefuehrt, dass Lumis Atem doppelt so schnell war — sie sah aus wie nach einem Sprint!',
      },
      b_value: {
        wrong: '$b$ mit der Periode gleichgesetzt',
        correct: '$b$ und $T$ über die Formel umrechnen',
        why: '$b$ ist NICHT die Periode, sondern haengt über $T = \\frac{2\\pi}{b}$ mit ihr zusammen. Wenn die Periode $4\\pi$ ist, dann ist $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — nicht $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter läuft — aber es ruckelt. Mia öffnet den Performance-Monitor und sieht: In manchen Szenen bricht die Framerate auf 15 FPS ein. "Wo genau wird es langsam?", fragt Tim. "Ich brauche nicht den Durchschnitt über die ganze Szene, sondern die exakte Stelle, an der die Performance einbricht." Jule laechelt: "Das ist genau die Frage, die zur Erfindung der Differentialrechnung gefuehrt hat — die momentane Änderungsrate."',
      challenge: 'Die exakte Stelle finden, an der die Framerate einbricht — nicht nur den Durchschnitt.',
      outro: 'Mia hat die kritische Stelle gefunden: Genau bei Frame 847 explodiert die Renderzeit, weil dort 200 Partikel gleichzeitig gespawnt werden. "Ohne die momentane Änderungsrate haette ich ewig gesucht", sagt sie. Tim nickt: "Newton haette das auch so gemacht — nur ohne Performance-Monitor."',
    },
    objectives: {
      average_rate: 'Die durchschnittliche Änderungsrate (Sekantensteigung) berechnen und interpretieren',
      instantaneous_rate: 'Die momentane Änderungsrate als Grenzwert verstehen',
      limit_concept: 'Den Übergang von der Sekante zur Tangente nachvollziehen',
      derivative_notation: 'Die verschiedenen Schreibweisen der Ableitung kennen und anwenden',
    },
    explanation: {
      intro: 'Stell dir vor, du faehrst mit dem Fahrrad zur Schule. Dein Tacho zeigt 20 km/h — das ist deine momentane Geschwindigkeit. Aber wie berechnet man die? Wenn du sagst "Ich bin 10 km in 30 Minuten gefahren", ist das ein Durchschnitt. Die momentane Geschwindigkeit an einem bestimmten Punkt ist etwas Anderes — und genau darum geht es in der Differentialrechnung.',
      secant_to_tangent: 'Die Idee ist genial einfach: Berechne die Durchschnittssteigung zwischen zwei Punkten, und dann ruecke die Punkte immer näher zusammen. Im Grenzfall — wenn der Abstand gegen Null geht — erhaeltst du die Steigung in einem einzigen Punkt. Das ist die Ableitung:',
      mia_tip: 'Die durchschnittliche Framerate über 10 Sekunden sagt mir nichts. Ich brauche die momentane Rate bei Frame 847! Genau wie beim Tacho: Der zeigt nicht den Durchschnitt der ganzen Fahrt, sondern wie schnell du JETZT bist.',
      derivative_meaning: 'Die Ableitung $f\'(x_0)$ hat eine klare Bedeutung: Sie gibt die Steigung der Tangente an den Graphen im Punkt $x_0$ an. Ist $f\'(x_0) > 0$, steigt die Funktion dort. Ist $f\'(x_0) < 0$, faellt sie. Ist $f\'(x_0) = 0$, hat die Funktion dort (möglicherweise) einen Hoch- oder Tiefpunkt. Es gibt verschiedene Schreibweisen:',
      geometric_interpretation: 'Geometrisch passiert Folgendes: Die Sekante durch zwei Punkte auf dem Graphen dreht sich, wenn die Punkte zusammenruecken. Im Grenzfall wird die Sekante zur Tangente — einer Geraden, die den Graphen in genau einem Punkt "beruehrt". Die Steigung dieser Tangente ist die Ableitung.',
    },
    concepts: {
      difference_quotient: {
        title: 'Differenzenquotient',
        desc: 'Die durchschnittliche Änderungsrate zwischen zwei Punkten. Er berechnet die Steigung der Sekante — einer Geraden, die den Graphen in zwei Punkten schneidet.',
      },
      differential_quotient: {
        title: 'Differentialquotient (Ableitung)',
        desc: 'Die momentane Änderungsrate an einer Stelle. Entsteht, wenn $h$ im Differenzenquotienten gegen Null geht. Gibt die Tangentensteigung an.',
      },
      derivative_notation: {
        title: 'Schreibweisen der Ableitung',
        desc: 'Es gibt drei gaengige Schreibweisen: $f\'(x)$ (Lagrange, am haeufigsten in der Schule), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, betont den Bruch-Charakter) und $\\dot{y}$ (Newton, vor allem in der Physik für Zeitableitungen).',
      },
    },
    examples: {
      average_speed: {
        title: 'Durchschnittliche Geschwindigkeit',
        context: 'Ein Ball rollt eine Rampe hinunter. Die Strecke haengt quadratisch von der Zeit ab.',
        step1: 'Gegeben ist die Weg-Zeit-Funktion. Nach 2 Sekunden ist der Ball 2 m weit, nach 4 Sekunden 8 m.',
        step2: 'Durchschnittliche Geschwindigkeit zwischen $t = 2$ und $t = 4$: Wir teilen die Streckentoenderung durch die Zeitaenderung. Das ergibt $3\\,\\text{m/s}$ im Durchschnitt.',
        step3: 'Jetzt verkleinern wir das Intervall: Zwischen $t = 2$ und $t = 2{,}1$ ergibt sich $2{,}05\\,\\text{m/s}$. Je kürzer das Intervall, desto näher kommen wir an die momentane Geschwindigkeit bei $t = 2$.',
        mia_comment: 'Genau so funktioniert mein Performance-Monitor: Er misst die Framerate in immer kürzeren Intervallen, bis ich die exakte Stelle finde, wo es hakt.',
      },
      instantaneous_rate: {
        title: 'Momentane Änderungsrate berechnen',
        context: 'Bestimme die Ableitung von $f(x) = x^2$ an der Stelle $x_0 = 3$.',
        step1: 'Wir setzen $f(x) = x^2$ und $x_0 = 3$ in den Differenzenquotienten ein. Gesucht: Was passiert, wenn $h$ gegen 0 geht?',
        step2: 'Zähler ausrechnen: $(3+h)^2 = 9 + 6h + h^2$. Minus $f(3) = 9$ ergibt $6h + h^2$ im Zähler.',
        step3: 'Durch $h$ kürzen (das dürfen wir, weil $h \\neq 0$ im Grenzprozess): Es bleibt $6 + h$.',
        step4: 'Grenzwert bilden: Für $h \\to 0$ wird $6 + h$ zu $6$. Die Steigung der Tangente bei $x = 3$ ist also exakt $6$.',
        mia_comment: 'Die Tangente bei $x = 3$ hat die Steigung 6. Wenn ich das für jeden Punkt mache, bekomme ich die Ableitungsfunktion $f\'(x) = 2x$. Bei $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Passt!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Blitzer & Geschwindigkeit',
        desc: 'Ein Blitzer misst nicht deine Momentangeschwindigkeit, sondern deine Durchschnittsgeschwindigkeit über eine kurze Strecke (Section Control: über mehrere Kilometer). Je kürzer die Messstrecke, desto näher am Momentanwert.',
      },
      stock_trends: {
        title: 'Aktienkurse & Trends',
        desc: 'Wenn eine Aktie "steigt", meinen Analysten die positive Ableitung des Kurses. Die Steigung der Tangente an den Kursverlauf zeigt den Trend: positiv = Aufwaertstrend, negativ = Abwärtstrend, null = Wendepunkt.',
      },
      speedometer: {
        title: 'Tacho im Auto',
        desc: 'Dein Tacho zeigt die momentane Geschwindigkeit — mathematisch die Ableitung der Weg-Funktion nach der Zeit. GPS-Geraete berechnen sie als Grenzwert aus sehr kurzen Zeitintervallen.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Durchschnitt = Momentanwert',
        correct: 'Durchschnitt und Momentanwert unterscheiden',
        why: 'Die durchschnittliche Änderungsrate über ein Intervall $[1;\\,5]$ ist NICHT gleich der momentanen Änderungsrate bei $x = 3$ (der Mitte). Das gilt nur bei linearen Funktionen! Bei gekruemmten Graphen weichen beide Werte ab.',
        mia_warning: 'Ich habe zuerst die durchschnittliche Framerate berechnet und gedacht, alles sei ok. Aber lokal gab es massive Einbrueche! Der Durchschnitt hat das Problem verborgen.',
      },
      secant_tangent: {
        wrong: 'Sekantensteigung = Tangentensteigung',
        correct: 'Die Tangente ist der Grenzfall der Sekante',
        why: 'Die Sekante schneidet den Graphen in zwei Punkten, die Tangente beruehrt ihn in einem. Erst wenn die zwei Punkte zusammenruecken ($h \\to 0$), wird die Sekante zur Tangente. Ohne Grenzwert ist es nur eine Näherung.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter braucht ein Balancing-System: Wie schnell soll Lumi leveln? Wie stark werden die Gegner? Wie viel kostet ein Upgrade? "Wenn alles linear wächst, wird das Spiel langweilig", sagt Jule. Tim ergänzt: "Und wenn alles exponentiell wächst, wird es unfair." Mia merkt: Sie muss verschiedene Wachstumstypen kennen und gezielt einsetzen.',
      challenge: 'Die richtigen Wachstumskurven für Game-Balancing finden — linear, quadratisch, exponentiell oder logarithmisch.',
      outro: 'Mias Balancing-System ist fertig: Laufgeschwindigkeit wächst linear, Fallschaden quadratisch, XP-Bedarf exponentiell und die Lernkurve logarithmisch. "Jede Kurve hat ihren Platz", sagt sie zufrieden. Das Spiel fühlt sich jetzt fair und spannend an — von Level 1 bis zum Endboss.',
    },
    objectives: {
      identify_types: 'Die vier großen Funktionsklassen (linear, quadratisch, exponentiell, logarithmisch) an Gleichungen und Graphen erkennen',
      compare_growth: 'Das Wachstumsverhalten der Funktionsklassen vergleichen und ordnen',
      match_context: 'Zur Sachsituation die passende Funktionsklasse wählen und begruenden',
      graph_recognition: 'Graphen den richtigen Funktionstypen zuordnen',
    },
    explanation: {
      intro: 'In der Mathematik gibt es verschiedene "Familien" von Funktionen — jede mit eigenem Charakter. Manche wachsen gleichmäßig, andere immer schneller, wieder andere immer langsamer. Die vier wichtigsten Klassen für die 10. Klasse sind:',
      mia_tip: 'Im Game-Design nutze ich jede Funktionsklasse für etwas anderes: Lineares Wachstum für vorhersehbare Dinge (Laufgeschwindigkeit), quadratisches für Dinge, die sich "aufschaukeln" (Fallschaden), exponentielles für Herausforderungen (XP-Bedarf) und logarithmisches für Lerneffekte (Skill-Fortschritt).',
      growth_comparison: 'Entscheidend ist: Wie schnell wächst jede Funktionsklasse für große $x$-Werte? Die Reihenfolge ist immer dieselbe — egal welche konkreten Zahlen du einsetzt:',
      choosing_functions: 'Die richtige Funktion für ein Problem zu wählen, ist eine Schlüsselkompetenz. Frag dich: Ist die Änderung konstant (linear)? Beschleunigt sie sich gleichmäßig (quadratisch)? Verdoppelt sich der Wert in gleichen Abständden (exponentiell)? Wird der Zuwachs immer kleiner (logarithmisch)?',
    },
    concepts: {
      linear: {
        title: 'Lineare Funktionen',
        desc: 'Konstante Änderungsrate: Pro Schritt kommt immer gleich viel dazu. Der Graph ist eine Gerade. Steigung $m$ und y-Achsenabschnitt $b$ lassen sich direkt ablesen.',
      },
      quadratic: {
        title: 'Quadratische Funktionen',
        desc: 'Die Änderungsrate selbst ändert sich linear — es kommt immer schneller mehr dazu (oder weniger). Der Graph ist eine Parabel mit Scheitelpunkt.',
      },
      exponential: {
        title: 'Exponentielle Funktionen',
        desc: 'Wachstum um einen festen Prozentsatz: Je mehr da ist, desto mehr kommt dazu. Verdopplung in gleichen Zeitabstaenden. Wächst langfristig schneller als jede Potenzfunktion.',
      },
      logarithmic: {
        title: 'Logarithmische Funktionen',
        desc: 'Die Umkehrfunktion der Exponentialfunktion. Wächst anfangs schnell, dann immer langsamer. Modelliert Saettigungseffekte und Lernkurven.',
      },
    },
    examples: {
      identify_type: {
        title: 'Funktionstyp an Wertetabellen erkennen',
        context: 'Drei Datensaetze liegen vor. Welcher Typ passt jeweils?',
        step1: 'Teste auf linear: Bilde die Differenzen aufeinanderfolgender $y$-Werte. Sind sie konstant, ist die Funktion linear.',
        step2: 'Teste auf exponentiell: Bilde die Quotienten aufeinanderfolgender $y$-Werte. Sind sie konstant, ist die Funktion exponentiell.',
        step3: 'Teste auf quadratisch: Bilde die zweiten Differenzen (Differenzen der Differenzen). Sind diese konstant, ist die Funktion quadratisch.',
        mia_comment: 'Genau so teste ich mein Balancing: Ich lasse 100 Runden simulieren und prüfe, ob die Werte dem gewuenschten Wachstumstyp folgen. Wenn die zweiten Differenzen abdriften, stimmt etwas nicht.',
      },
      game_mechanics: {
        title: 'Spielmechaniken modellieren',
        context: 'Vier verschiedene Spielmechaniken in Hafenlichter brauchen unterschiedliche Funktionen.',
        step1: 'Laufgeschwindigkeit: Steigt pro Level um denselben Betrag ($+5$ pro Level). Das ist eine konstante Änderung — also linear. Fair und vorhersehbar.',
        step2: 'Fallschaden: Aus 2 m Höhe leichter Schaden, aus 10 m viel mehr. Die Schadenszunahme beschleunigt sich — quadratisch. Macht physikalisch Sinn (Energie = $\\frac{1}{2}mv^2$).',
        step3: 'XP-Bedarf pro Level: Level 2 braucht 150 XP, Level 3 braucht 225 XP, Level 4 braucht 337 XP. Der Bedarf wächst immer um 50% — exponentiell. So bleiben höhere Level eine echte Herausforderung.',
        step4: 'Lernkurve (Skill): Am Anfang lernt man schnell, später immer langsamer. Nach $t$ Stunden Spielzeit beherrscht man $20 \\cdot \\log_2(t+1)$ Prozent der Mechaniken — logarithmisch.',
        mia_comment: 'Das ist der Kern von Game-Design: Die richtige Kurve für die richtige Mechanik. Lineares XP waere langweilig, exponentieller Fallschaden waere unfair. Jeder Funktionstyp hat seinen Sweet Spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Virale App-Downloads',
        desc: 'Wenn jeder Nutzer zwei Freunde einlaedt und die wieder zwei, verdoppeln sich die Downloads. Am Anfang kaum sichtbar, dann explosionsartig — typisch exponentiell. TikTok, Instagram und WhatsApp sind so gewachsen.',
      },
      salary: {
        title: 'Taschengeld & Gehalt',
        desc: 'Dein Taschengeld steigt (hoffentlich) jedes Jahr um den gleichen Betrag — lineares Wachstum. Später im Beruf steigt dein Gehalt oft ähnlich: Ein fester Betrag pro Jahr Berufserfahrung.',
      },
      learning_curve: {
        title: 'Lernfortschritt',
        desc: 'Neues Instrument, neuer Sport, neue Sprache: Am Anfang machst du riesige Fortschritte, dann wird es immer schwerer, besser zu werden. Das ist eine logarithmische Saettigungskurve — und ganz normal!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Exponentiell" und "quadratisch" sind dasselbe',
        correct: 'Exponentiell wächst VIEL schneller als quadratisch',
        why: 'Bei kleinen Zahlen sehen $x^2$ und $2^x$ ähnlich aus: $4^2 = 16$ und $2^4 = 16$. Aber bei $x = 10$: $10^2 = 100$ gegenueber $2^{10} = 1024$. Exponentielles Wachstum überholt jede Potenzfunktion!',
        mia_warning: 'Ich hatte den XP-Bedarf zuerst quadratisch statt exponentiell gemacht. Ergebnis: Ab Level 20 war das Spiel viel zu leicht, weil die Spieler schneller XP sammelten als der Bedarf wuchs.',
      },
      all_curves_linear: {
        wrong: 'Jedes Wachstum ist linear',
        correct: 'Erst den Wachstumstyp prüfen',
        why: 'Nur weil sich etwas "verdoppelt", heisst das nicht, dass es linear ist! "Alle 3 Tage doppelt so viele Follower" ist exponentiell, nicht linear. Linear waere: "Jeden Tag 100 neue Follower". Der Unterschied: konstante Zunahme (linear) vs. konstanter Faktor (exponentiell).',
      },
    },
  },
};
