export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'Mia sitzt in ihrem kleinen Büro am Hamburger Hafen und starrt auf den Bildschirm. Lumi, ihre Spielfigur in "Hafenlichter", soll elegant über Kisten und Container springen — aber die Sprungkurve sieht einfach falsch aus. "Die Physik stimmt nicht", murmelt sie. Um eine realistische Sprungbahn zu programmieren, braucht Mia quadratische Funktionen.',
      challenge: 'Lumi soll über Kisten springen — aber die Sprungkurve sieht unnatürlich aus.',
      outro: 'Mit der Scheitelpunktform hat Mia die perfekte Sprungkurve programmiert! Lumi fliegt jetzt in einem eleganten Bogen über die Hamburger Container. "Endlich sieht das realistisch aus", sagt Tim und gibt ihr ein High-Five.',
    },
    objectives: {
      recognize: 'Quadratische Funktionen erkennen und ihre Eigenschaften beschreiben',
      vertex_form: 'Zwischen Normalform und Scheitelpunktform sicher umrechnen',
      pq_formula: 'Nullstellen mit der pq-Formel berechnen',
      graph_properties: 'Öffnungsrichtung, Scheitelpunkt und Symmetrieachse aus der Gleichung ablesen',
    },
    explanation: {
      intro: 'Stell dir vor, du wirfst einen Basketball. Der Ball fliegt in einem Bogen nach oben, erreicht den höchsten Punkt und fällt wieder. Diese Flugbahn hat eine ganz bestimmte Form — eine Parabel. Mathematisch beschreiben wir sie mit einer quadratischen Funktion:',
      opening: 'Die Zahl $a$ bestimmt, ob die Parabel nach oben ($a > 0$) oder nach unten ($a < 0$) geöffnet ist — und wie "schmal" oder "breit" sie ist. Je größer $|a|$, desto schmaler die Parabel.',
      mia_tip: 'In meinem Spiel ist $a$ negativ, weil die Sprungkurve ja nach oben geht und dann wieder runter kommt — wie ein umgedrehtes U!',
      vertex_form: 'Die Scheitelpunktform verrät dir direkt den höchsten (oder tiefsten) Punkt der Parabel. Der Scheitelpunkt $S$ hat die Koordinaten $(d \\mid e)$:',
      conversion: 'Um von der Normalform in die Scheitelpunktform zu kommen, nutzt du die quadratische Ergänzung. Du fügst geschickt eine Zahl hinzu und ziehst sie wieder ab, sodass ein perfektes Quadrat entsteht.',
    },
    concepts: {
      normal_form: {
        title: 'Normalform',
        desc: 'Die Standarddarstellung. Du erkennst direkt: $a$ = Öffnung, $c$ = y-Achsenabschnitt (wo die Parabel die y-Achse schneidet).',
      },
      vertex_form: {
        title: 'Scheitelpunktform',
        desc: 'Verrät dir sofort den Scheitelpunkt $S(d \\mid e)$. Am besten für: Höchst-/Tiefpunkt ablesen, Verschiebung erkennen.',
      },
      pq_formula: {
        title: 'pq-Formel',
        desc: 'Dein Werkzeug für Nullstellen. Voraussetzung: Die Gleichung muss in der Form $x^2 + px + q = 0$ stehen (Koeffizient vor $x^2$ muss 1 sein!).',
      },
      discriminant: {
        title: 'Diskriminante',
        desc: 'Der Ausdruck unter der Wurzel entscheidet: $D > 0$ = zwei Nullstellen, $D = 0$ = eine Nullstelle, $D < 0$ = keine reelle Nullstelle.',
      },
    },
    examples: {
      vertex: {
        title: 'Scheitelpunktform bestimmen',
        context: 'Mia will den höchsten Punkt von Lumis Sprung berechnen.',
        step1: 'Gegeben ist die Funktion in Normalform:',
        step2: 'Quadratische Ergänzung: Wir ergänzen $(\\frac{6}{2})^2 = 9$ und ziehen es wieder ab:',
        step3: 'Zusammenfassen — der Ausdruck in der Klammer ist ein perfektes Quadrat:',
        step4: 'Scheitelpunkt ablesen: $d = 3$, $e = -4$, also:',
        mia_comment: 'Der Scheitelpunkt bei $(3 \\mid -4)$ ist der tiefste Punkt, weil $a = 1 > 0$. Für eine Sprungkurve brauche ich $a < 0$, dann wird es der höchste Punkt!',
      },
      pq: {
        title: 'Nullstellen mit der pq-Formel',
        context: 'Wo trifft Lumi wieder auf dem Boden auf?',
        step1: 'Gegeben: Die Gleichung ist bereits in der richtigen Form ($x^2$-Koeffizient = 1):',
        step2: 'Werte für $p$ und $q$ ablesen:',
        step3: 'In die pq-Formel einsetzen und ausrechnen:',
        step4: 'Lumi landet also bei $x = 2$ oder $x = -4$:',
        mia_comment: 'Zwei Nullstellen — die Parabel schneidet die x-Achse zweimal. Im Spiel heißt das: Lumi hebt bei $x = -4$ ab und landet bei $x = 2$!',
      },
    },
    realworld: {
      basketball: {
        title: 'Basketball-Wurf',
        desc: 'Jeder Korbwurf beschreibt eine Parabel. Die Höhe $h$ hängt von der Zeit $t$ ab. Trainer nutzen das, um den optimalen Abwurfwinkel zu berechnen.',
      },
      bridge: {
        title: 'Brückenbögen',
        desc: 'Viele Brücken haben die Form einer Parabel — sie ist die stabilste Bogenform, weil sie das Gewicht gleichmäßig verteilt. Die Golden Gate Bridge? Eine Parabel.',
      },
      pricing: {
        title: 'Preisoptimierung',
        desc: 'Ein Geschäft will wissen: Welcher Preis bringt den meisten Gewinn? Wenn der Preis steigt, kaufen weniger Leute — der Gewinn ist eine Parabel mit einem Maximum.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Vorzeichenfehler',
        correct: 'Vorzeichen beachten',
        why: 'In $f(x) = (x - d)^2 + e$ steht ein Minus vor $d$. Das bedeutet: $f(x) = (x - 3)^2$ hat den Scheitelpunkt bei $d = +3$, nicht bei $-3$!',
        mia_warning: 'Dieser Vorzeichenfehler hat mich 3 Stunden Debugging gekostet. Lumis Sprungkurve war nach links statt nach rechts verschoben!',
      },
      pq_wrong: {
        wrong: 'pq-Formel ohne Division',
        correct: 'Erst durch $a$ teilen',
        why: 'Die pq-Formel funktioniert nur, wenn der Koeffizient vor $x^2$ gleich 1 ist. Bei $2x^2 + 4x - 6 = 0$ musst du zuerst durch 2 teilen: $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'Mia hat ein Problem mit der Kollisionserkennung: Wann berührt Lumi ein Hindernis? Tim schlägt vor, die Entfernung zwischen zwei Punkten zu berechnen. "Dafür brauchst du Pythagoras", sagt er. Mia erinnert sich an den Satz aus der Schule — und plötzlich macht er total Sinn.',
      challenge: 'Die Kollisionserkennung braucht Entfernungsberechnung zwischen Objekten.',
      outro: 'Lumis Kollisionserkennung funktioniert jetzt pixelgenau! Mia hat den Satz des Pythagoras genutzt, um die Distanz zwischen Spielfigur und Hindernissen in Echtzeit zu berechnen.',
    },
    objectives: {
      theorem: 'Den Satz des Pythagoras sicher anwenden',
      calculate_sides: 'Fehlende Seiten im rechtwinkligen Dreieck berechnen',
      recognize: 'Erkennen, wann ein rechtwinkliges Dreieck vorliegt',
      apply: 'Den Satz auf Alltagsprobleme übertragen',
    },
    explanation: {
      intro: 'In jedem rechtwinkligen Dreieck gilt eine einfache, aber mächtige Regel: Die Summe der Kathetenquadrate ergibt das Hypotenusenquadrat.',
      sides: 'Dabei ist $c$ immer die längste Seite — die Hypotenuse. Sie liegt dem rechten Winkel gegenüber. Die beiden kürzeren Seiten $a$ und $b$ heißen Katheten.',
      mia_tip: 'In meinem Spiel berechne ich die Entfernung zwischen Lumi und einem Objekt als Hypotenuse. Der horizontale Abstand ist $a$, der vertikale $b$ — und $c$ ist die tatsächliche Distanz!',
      solving: 'Du kannst die Formel nach jeder Seite umstellen. Wenn du die Hypotenuse suchst:',
    },
    concepts: {
      theorem: {
        title: 'Satz des Pythagoras',
        desc: 'Gilt nur in rechtwinkligen Dreiecken. $c$ ist die Hypotenuse (gegenüber dem rechten Winkel), $a$ und $b$ sind die Katheten.',
      },
      hypotenuse: {
        title: 'Hypotenuse berechnen',
        desc: 'Wenn du beide Katheten kennst, zieh die Wurzel aus der Summe der Quadrate.',
      },
      cathetus: {
        title: 'Kathete berechnen',
        desc: 'Wenn du die Hypotenuse und eine Kathete kennst, zieh die Wurzel aus der Differenz.',
      },
    },
    examples: {
      screen: {
        title: 'Bildschirmdiagonale berechnen',
        context: 'Mia will wissen, wie groß der Bildschirm ihres neuen Monitors wirklich ist.',
        step1: 'Der Monitor ist 16 Zoll breit und 9 Zoll hoch:',
        step2: 'Pythagoras anwenden — Breite und Höhe sind die Katheten:',
        step3: 'Wurzel ziehen für die Diagonale:',
        mia_comment: '18,36 Zoll Diagonale — das ist der Wert, den Hersteller als "Bildschirmgröße" angeben. Jetzt weiß ich, warum!',
      },
      ladder: {
        title: 'Leiter an der Wand',
        context: 'Wie hoch reicht eine 5-Meter-Leiter, die 1,5 m von der Wand entfernt steht?',
        step1: 'Die Leiter ist die Hypotenuse, der Abstand zur Wand ist eine Kathete:',
        step2: 'Nach der gesuchten Kathete (Höhe) umstellen:',
        step3: 'Die Leiter reicht fast 4,77 m hoch:',
        mia_comment: 'Im Spiel nutze ich genau diese Berechnung, um zu prüfen, ob Lumi eine Leiter erreichen kann!',
      },
    },
    realworld: {
      screen: {
        title: 'Bildschirmdiagonale',
        desc: 'Die "Größe" eines Bildschirms ist immer die Diagonale — berechnet mit Pythagoras aus Breite und Höhe.',
      },
      football: {
        title: 'Fußballfeld-Diagonale',
        desc: 'Ein Fußballfeld ist 105 m × 68 m. Wie weit ist es von Ecke zu Ecke? Pythagoras verrät es dir.',
      },
      wifi: {
        title: 'WLAN-Reichweite',
        desc: 'Dein Router steht im Erdgeschoss, du bist im 1. OG. Die tatsächliche Entfernung zum Router ist die Hypotenuse aus horizontalem und vertikalem Abstand.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Hypotenuse als Kathete',
        correct: 'c ist immer die längste Seite',
        why: 'Die Hypotenuse $c$ liegt IMMER gegenüber dem rechten Winkel. Sie ist die längste Seite. Verwechselst du sie mit einer Kathete, stimmt die ganze Rechnung nicht.',
      },
      root: {
        wrong: 'Wurzel aus Summe',
        correct: 'Erst addieren, dann Wurzel',
        why: '$\\sqrt{a^2 + b^2}$ ist NICHT dasselbe wie $a + b$! Beispiel: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, aber $3 + 4 = 7$.',
        mia_warning: 'Diesen Fehler hat Tim in meinem Code gefunden — die Kollisionserkennung war 40% zu ungenau!',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'Mia will ein Loot-System für Hafenlichter bauen. Spieler sollen seltene Items finden können — aber nicht zu oft, sonst wird es langweilig, und nicht zu selten, sonst ist es frustrierend. "Das ist reine Wahrscheinlichkeitsrechnung", sagt Jule. Mia setzt sich hin und rechnet.',
      challenge: 'Das Loot-Drop-System soll fair und spannend sein.',
      outro: 'Mias Loot-System funktioniert! Sie hat die Drop-Wahrscheinlichkeiten so austariert, dass Spieler im Schnitt alle 20 Kisten ein Rare-Item finden. "Die Mathe dahinter ist eigentlich simpel", grinst sie — "aber das Balancing hat trotzdem gedauert."',
    },
    objectives: {
      basic: 'Wahrscheinlichkeiten als Bruch, Dezimalzahl und Prozentwert angeben',
      tree: 'Mehrstufige Zufallsexperimente mit Baumdiagrammen lösen',
      expected_value: 'Den Erwartungswert berechnen und interpretieren',
      complement: 'Mit der Gegenwahrscheinlichkeit arbeiten ("mindestens einmal...")',
    },
    explanation: {
      intro: 'Wie wahrscheinlich ist es, eine 6 zu würfeln? Wie hoch ist die Chance auf ein seltenes Item im Spiel? Um solche Fragen zu beantworten, brauchst du die Wahrscheinlichkeitsrechnung. Die Grundidee ist simpel:',
      range: 'Wahrscheinlichkeiten liegen immer zwischen 0 (unmöglich) und 1 (sicher). Du kannst sie als Bruch ($\\frac{1}{6}$), Dezimalzahl ($0{,}167$) oder Prozent ($16{,}7\\%$) schreiben.',
      mia_tip: 'In Hafenlichter ist $P(\\text{Rare Item}) = 0{,}05$. Das heißt: Bei jedem Drop hat der Spieler eine 5%-Chance. Klingt wenig — aber über viele Drops summiert sich das!',
      tree: 'Bei mehrstufigen Experimenten (z.B. zweimal würfeln) nutzt du ein Baumdiagramm. Entlang eines Pfades multiplizierst du die Wahrscheinlichkeiten:',
      complement: 'Oft ist es einfacher, "das Gegenteil" zu berechnen. Die Wahrscheinlichkeit, dass etwas NICHT passiert, ist:',
    },
    concepts: {
      laplace: {
        title: 'Laplace-Experiment',
        desc: 'Wenn alle Ergebnisse gleich wahrscheinlich sind (wie beim fairen Würfel), teilst du einfach: günstige Ergebnisse durch alle möglichen.',
      },
      complement: {
        title: 'Gegenwahrscheinlichkeit',
        desc: 'Die Wahrscheinlichkeit, dass A NICHT eintritt. Super nützlich für "mindestens einmal"-Aufgaben!',
      },
      expected: {
        title: 'Erwartungswert',
        desc: 'Der "durchschnittliche" Wert bei vielen Wiederholungen. Beim Würfel: $E(X) = 3{,}5$ — du kannst zwar nie 3,5 würfeln, aber im Schnitt ergibt sich dieser Wert.',
      },
    },
    examples: {
      dice: {
        title: 'Gerade Zahl würfeln',
        context: 'Wie wahrscheinlich ist eine gerade Zahl beim Würfeln?',
        step1: 'Der Würfel hat 6 Seiten — das ist unser $\\Omega$:',
        step2: 'Günstige Ergebnisse (gerade Zahlen): 2, 4, 6 — das sind 3:',
        step3: 'Wahrscheinlichkeit berechnen:',
        mia_comment: '50% — das ist intuitiv klar. Aber bei komplexeren Fragen hilft die Formel, wenn die Intuition versagt!',
      },
      loot: {
        title: 'Mindestens ein Rare-Item',
        context: 'Mia will wissen: Wie wahrscheinlich ist es, in 10 Loot-Drops mindestens ein Rare-Item zu bekommen?',
        step1: 'Die Wahrscheinlichkeit für ein Rare-Item pro Drop beträgt 5%:',
        step2: 'Gegenwahrscheinlichkeit nutzen: Erst berechnen, dass KEIN Rare in 10 Drops kommt:',
        step3: 'Das ist ca. 60% — in 60% der Fälle bekommt man KEIN Rare:',
        step4: 'Die Gegenwahrscheinlichkeit ist die gesuchte Antwort:',
        mia_comment: '40% Chance auf mindestens ein Rare in 10 Drops — das fühlt sich fair an! Wenn die Spieler frustriert sind, erhöhe ich einfach die Drop-Rate.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Gaming-Lootboxen',
        desc: 'Spiele wie Fortnite oder Genshin Impact nutzen Wahrscheinlichkeiten für ihre Drop-Systeme. In der EU müssen die Drop-Raten veröffentlicht werden — mit Mathe kannst du prüfen, ob sich ein Kauf lohnt.',
      },
      shuffle: {
        title: 'Spotify-Shuffle',
        desc: 'Spotify Shuffle ist nicht wirklich zufällig — weil sich "echter" Zufall merkwürdig anfühlt (manchmal kommt derselbe Song 3x hintereinander). Spotify nutzt Algorithmen, die sich zufälliger "anfühlen".',
      },
      lottery: {
        title: 'Lotto-Gewinnchancen',
        desc: '6 Richtige im Lotto — klingt machbar? Die tatsächliche Wahrscheinlichkeit ist verschwindend gering:',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Pfade addieren statt multiplizieren',
        correct: 'Entlang eines Pfades multiplizieren',
        why: 'Beim Baumdiagramm multiplizierst du entlang eines Pfades (UND-Verknüpfung). Addieren darfst du nur, wenn du verschiedene Pfade zusammenfasst (ODER-Verknüpfung).',
        mia_warning: 'Diesen Fehler hatte ich beim Loot-System. Die Drop-Raten waren viel zu hoch, weil ich addiert statt multipliziert habe — jeder Spieler hatte sofort alles!',
      },
      percent: {
        wrong: 'Prozente über 100%',
        correct: 'Maximum ist 100%',
        why: 'Eine Wahrscheinlichkeit kann nie größer als 1 (= 100%) sein. Wenn dein Ergebnis $P > 1$ ist, hast du einen Rechenfehler.',
      },
    },
  },
};
