export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai steht vor dem finalen Balancing-Problem von "Hafenlichter 3D": Die Loot-Drops müssen sich fair anfuehlen, aber trotzdem spannend sein. Wenn jeder Boss genau gleich viel Gold droppt, ist es langweilig — zu viel Varianz und die Spieler beschweren sich über Unfairness. "Ich brauche eine Verteilung, die natürlich aussieht — viele Werte nah am Durchschnitt, wenige Extremwerte", sagt Kai zu seiner Kollegin Priya. Die Antwort aus der Stochastik-Vorlesung: die Normalverteilung mit ihrer perfekten Glockenkurve.',
      challenge: 'Kai muss das Loot- und Performance-System von "Hafenlichter 3D" so kalibrieren, dass Belohnungen fair verteilt sind und Frame-Zeiten unter der kritischen Schwelle bleiben — die Normalverteilung und ihre Sigma-Regeln liefern das Werkzeug dafür.',
      outro: 'Mit der Normalverteilung hat Kai ein elegantes Balancing-System gebaut: Loot-Drops folgen einer Glockenkurve um den Sollwert, und die Sigma-Regeln garantieren, dass Ausreisser extrem selten sind. "Das Schöne ist: Ich kann jetzt exakt berechnen, wie viel Prozent der Spieler einen bestimmten Drop-Wert erleben", erklärt er dem Team. Und mit der $z$-Transformation vergleicht er voellig unterschiedliche Metriken — Frame-Zeiten, Schadensverteilung, Spielerdauer — auf einer einheitlichen Skala. Die Glockenkurve steckt überall.',
    },
    objectives: {
      bell_curve: 'Die Normalverteilung $N(\\mu, \\sigma^2)$ als stetige Verteilung mit Glockenkurve verstehen und ihre Parameter interpretieren',
      sigma_rules: 'Die Sigma-Regeln ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) für schnelle Wahrscheinlichkeitsabschaetzungen anwenden',
      z_transformation: 'Die $z$-Transformation durchführen und Wahrscheinlichkeiten mit der Standardnormalverteilung $\\Phi(z)$ berechnen',
      central_limit_theorem: 'Den Zentralen Grenzwertsatz kennen und erklären, warum die Normalverteilung überall auftaucht',
    },
    explanation: {
      intro: 'Die Normalverteilung ist die wichtigste stetige Verteilung der Statistik — und sie begegnet dir überall: bei Koerpergroessen, Messwerten, Frame-Zeiten, Prüfungsergebnissen. Ihre Dichte hat die ikonische Glockenform, symmetrisch um den Erwartungswert $\\mu$. Die Standardabweichung $\\sigma$ bestimmt, wie breit oder schmal die Glocke ist: kleines $\\sigma$ = schmale, hohe Glocke (wenig Streuung), großes $\\sigma$ = breite, flache Glocke (viel Streuung). Die Dichtefunktion lautet:',
      sigma_rules: 'Die Sigma-Regeln sind dein Schnellwerkzeug: Sie sagen dir sofort, wie viel Prozent aller Werte in einem bestimmten Bereich um $\\mu$ liegen — ohne Tabelle, ohne Taschenrechner. Innerhalb von $\\pm 1\\sigma$ liegen ca. $68{,}3\\%$, innerhalb von $\\pm 2\\sigma$ ca. $95{,}4\\%$ und innerhalb von $\\pm 3\\sigma$ fast alles — $99{,}7\\%$. Das bedeutet: Werte jenseits von $3\\sigma$ sind extrem selten!',
      kai_tip: 'In der Game-Entwicklung nutze ich die Sigma-Regeln beim Balancing taeglich. Wenn ich will, dass 95% der Loot-Drops zwischen 30 und 70 Gold liegen, setze ich $\\mu = 50$ und $2\\sigma = 20$, also $\\sigma = 10$. Fertig! Die Regeln geben mir sofort die Verteilung, ohne dass ich irgendetwas integrieren muss.',
      z_transformation: 'Aber was, wenn du eine exakte Wahrscheinlichkeit brauchst — nicht nur die Sigma-Regeln? Dann kommt die $z$-Transformation ins Spiel: Du rechnest deinen Wert $x$ in einen standardisierten $z$-Wert um und schaust in der Tabelle der Standardnormalverteilung $\\Phi(z)$ nach. Der $z$-Wert sagt dir, wie viele Standardabweichungen $x$ vom Erwartungswert entfernt ist:',
      central_limit: 'Warum ist die Normalverteilung so allgegenwaertig? Der Zentrale Grenzwertsatz gibt die Antwort: Wenn du genuegend viele unabhängige Zufallsgroessen addierst, nähert sich ihre Summe — egal wie die Einzelverteilungen aussehen — einer Normalverteilung an. Deshalb sind Mittelwerte fast immer normalverteilt, selbst wenn die Einzeldaten es nicht sind:',
    },
    concepts: {
      normal_distribution: {
        title: 'Normalverteilung $N(\\mu, \\sigma^2)$',
        desc: 'Die stetige Verteilung mit glockenfoermiger Dichte. $\\mu$ ist der Erwartungswert (Mittelpunkt der Glocke), $\\sigma^2$ die Varianz (Breite der Glocke). Die Flaeche unter der Kurve ist immer 1. Symmetrisch um $\\mu$: Median = Modus = Erwartungswert.',
      },
      sigma_rules: {
        title: 'Sigma-Regeln',
        desc: 'Die drei goldenen Regeln: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Für schnelle Abschätzungen unverzichtbar.',
      },
      z_transformation: {
        title: '$z$-Transformation',
        desc: 'Verwandelt jede Normalverteilung in die Standardnormalverteilung $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Danach liest du $P(X \\leq x) = \\Phi(z)$ aus der Tabelle ab. So werden beliebige Normalverteilungen vergleichbar.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Loot-Drop Wahrscheinlichkeit',
        context: 'In "Hafenlichter 3D" droppen Bosse Gold, normalverteilt mit $\\mu = 50$ und $\\sigma = 8$. Kai will wissen: Wie wahrscheinlich ist ein legendaerer Drop von mindestens 70 Gold?',
        step1: 'Modell aufstellen — Gold-Drops folgen einer Normalverteilung:',
        step2: 'Die $z$-Transformation anwenden — wie viele Standardabweichungen ist 70 von 50 entfernt?',
        step3: 'In der Tabelle nachschlagen — $\\Phi(2{,}5)$ ablesen:',
        step4: 'Gegenwahrscheinlichkeit berechnen — nur $0{,}6\\%$ bekommen 70+ Gold:',
        kai_comment: 'Perfekt! Ein legendaerer Drop bei weniger als 1% der Spieler — das fühlt sich besonders an, ohne unfair zu sein. Die Normalverteilung gibt mir die totale Kontrolle über die Seltenheit.',
      },
      frame_times: {
        title: 'Frame-Time Analyse',
        context: 'Bei 60 FPS muss jedes Frame in $16{,}7\\,\\text{ms}$ gerendert werden. Kais Profiler zeigt: Die Frame-Zeiten sind normalverteilt mit $\\mu = 16{,}7\\,\\text{ms}$ und $\\sigma = 2{,}1\\,\\text{ms}$. Wie oft laggt das Spiel (Frame-Zeit $> 20\\,\\text{ms}$)?',
        step1: 'Modell aufstellen — Frame-Zeiten als Normalverteilung:',
        step2: 'Die $z$-Transformation für die Lag-Schwelle $x = 20$:',
        step3: 'Tabellenwert ablesen:',
        step4: 'Gegenwahrscheinlichkeit berechnen — ca. jedes 17. Frame laggt:',
        kai_comment: 'Fast 6% Lags — das ist zu viel für ein flüssiges 3D-Spiel. Ich muss den Renderer optimieren, bis $\\sigma$ kleiner wird. Ziel: $\\sigma \\leq 1{,}5$, dann sind weniger als 1,5% der Frames betroffen.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Qualitätskontrolle in der Industrie',
        desc: 'Fabriken nutzen die $3\\sigma$-Regel: Wenn ein Bauteil mehr als $3\\sigma$ vom Sollmass abweicht, wird es aussortiert. Six-Sigma-Management geht noch weiter — $6\\sigma$ bedeutet maximal 3,4 Fehler pro Million Teile. Die Normalverteilung ist das Fundament der industriellen Qualitätssicherung.',
      },
      iq_scores: {
        title: 'IQ-Tests und Standardisierung',
        desc: 'IQ-Werte sind per Definition normalverteilt mit $\\mu = 100$ und $\\sigma = 15$. Das bedeutet: Ca. $68\\%$ der Bevoelkerung haben einen IQ zwischen 85 und 115, ca. $95\\%$ zwischen 70 und 130. Ein IQ von 145 ($z = 3$) ist so selten wie ein 70-Gold-Loot-Drop!',
      },
      stock_returns: {
        title: 'Aktienrenditen und Risiko',
        desc: 'Taegliche Aktienrenditen werden oft als normalverteilt modelliert — $\\sigma$ ist dann das Risiko. Portfoliomanager nutzen die $z$-Transformation, um zu berechnen, wie wahrscheinlich ein Crash ist. Allerdings: In der Realität kommen extreme Ausreisser haeufiger vor als die Normalverteilung vorhersagt ("Fat Tails").',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'Die Normalverteilung mit $N(\\mu, \\sigma)$ notiert — Standardabweichung statt Varianz',
        correct: 'Korrekt ist $N(\\mu, \\sigma^2)$ — der zweite Parameter ist immer die Varianz',
        why: 'In der Notation $N(\\mu, \\sigma^2)$ steht der zweite Parameter für die Varianz $\\sigma^2$, nicht für die Standardabweichung $\\sigma$. Verwechslungen führen zu komplett falschen Wahrscheinlichkeiten — z.B. ist $N(0, 4)$ eine Verteilung mit $\\sigma = 2$, nicht $\\sigma = 4$!',
        kai_warning: 'Dieser Fehler hat mir mal das komplette Loot-Balancing zerstoert. Ich hatte $\\sigma = 8$ gemeint, aber $N(50, 8)$ geschrieben — das bedeutet $\\sigma = \\sqrt{8} \\approx 2{,}83$. Die Drops waren viel zu gleichfoermig! Immer dran denken: $N(\\mu, \\sigma^2)$!',
      },
      z_sign: {
        wrong: 'Die $z$-Formel falsch herum: $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'Richtig ist $z = \\frac{x - \\mu}{\\sigma}$ — Wert minus Erwartungswert, nicht umgekehrt',
        why: 'Wenn du Zähler und Nenner vertauschst, bekommst du das falsche Vorzeichen. Ein Wert über dem Durchschnitt muss ein positives $z$ ergeben, ein Wert darunter ein negatives. Bei $x = 70$, $\\mu = 50$ ist $z = +2{,}5$ (über dem Schnitt), nicht $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai ist beim Herzstuck von "Hafenlichter 3D" angekommen: der 3D-Engine. Jedes Objekt im Spiel — jedes Schiff, jede Welle, jede Laterne am Hafen — muss gedreht, skaliert und verschoben werden können. "In 2D waren Transformationen einfach Formeln", erinnert er sich an Mias Anfänge. "Aber in 3D brauchst du ein System, das beliebig viele Transformationen verkettet — und das sind Matrizen." Kai öffnet den Shader-Code und sieht Matrizen überall: Model-Matrix, View-Matrix, Projection-Matrix.',
      challenge: 'Kai muss die 3D-Transformationen für seine Game-Engine verstehen und implementieren — Rotation, Skalierung und Übergangsprozesse, alles gesteuert durch Matrizenmultiplikation.',
      outro: 'Matrizen sind für Kai zum taeglichen Werkzeug geworden: Jede 3D-Transformation ist eine Matrix, jede Animation eine Folge von Matrizenmultiplikationen, jedes Übergangsverhalten eine stochastische Matrix. "Das Geniale ist: Egal wie komplex die Transformation — am Ende ist es immer $\\vec{x}\' = M \\cdot \\vec{x}$", sagt er. Die MVP-Matrix ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) verwandelt jetzt tausende Hafenlichter-Vertices pro Frame in Pixel auf dem Bildschirm.',
    },
    objectives: {
      matrix_operations: 'Matrizen addieren, multiplizieren und die Rechenregeln sicher anwenden — insbesondere die Nicht-Kommutativität',
      transformation_matrices: 'Transformationsmatrizen für Drehung, Skalierung und Spiegelung aufstellen und auf Vektoren anwenden',
      stochastic_matrices: 'Stochastische Matrizen und Fixvektoren für Übergangsprozesse berechnen',
      inverse_matrix: 'Die inverse Matrix bestimmen und ihre Bedeutung als "Ruecktransformation" verstehen',
    },
    explanation: {
      intro: 'Matrizen sind rechteckige Zahlentabellen — aber ihre wahre Kraft liegt darin, dass sie Abbildungen darstellen. Eine $2 \\times 2$-Matrix transformiert 2D-Vektoren, eine $3 \\times 3$-Matrix transformiert 3D-Vektoren. Multiplikation heisst: Zeile mal Spalte, dann aufsummieren. Für $C = A \\cdot B$ gilt:',
      transformation: 'In der 3D-Grafik ist jede geometrische Transformation eine Matrix: Rotation, Skalierung, Spiegelung. Die Rotationsmatrix um die $z$-Achse dreht einen Punkt $(x, y, z)$ um den Winkel $\\theta$ — und die $z$-Koordinate bleibt unveraendert:',
      kai_tip: 'In meiner Engine verkettte ich Transformationen durch Matrizenmultiplikation: Erst skalieren, dann rotieren, dann verschieben. Die Reihenfolge ist dabei entscheidend — Matrizen sind nicht kommutativ! Erst drehen, dann verschieben ergibt etwas voellig anderes als erst verschieben, dann drehen. Deshalb lese ich Matrizenketten immer von rechts nach links.',
      stochastic: 'Stochastische Matrizen beschreiben Übergangsprozesse: Wie wahrscheinlich ist es, von einem Zustand in einen anderen zu wechseln? Jede Spalte summiert sich zu 1 (bei Spaltenvektoren). Wenn du den Zustandsvektor $\\vec{v}_n$ mit der Übergangsmatrix $T$ multiplizierst, bekommst du den nächsten Zustand $\\vec{v}_{n+1}$:',
      inverse: 'Die inverse Matrix $A^{-1}$ ist die "Rueckgaengig-Taste": $A \\cdot A^{-1} = I$ (Einheitsmatrix). Wenn $A$ eine Rotation um $30°$ ist, dann ist $A^{-1}$ die Rotation um $-30°$. Nicht jede Matrix hat eine Inverse — nur wenn $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Matrizenmultiplikation',
        desc: 'Zeile mal Spalte: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. Die Spaltenanzahl von $A$ muss gleich der Zeilenanzahl von $B$ sein. Wichtig: $A \\cdot B \\neq B \\cdot A$ im Allgemeinen! Reihenfolge matters.',
      },
      transformation_matrix: {
        title: 'Transformationsmatrix',
        desc: 'Jede lineare Abbildung (Drehung, Skalierung, Spiegelung) laesst sich als Matrix darstellen. Die Rotationsmatrix $R(\\theta)$ dreht Vektoren um den Winkel $\\theta$. Mehrere Transformationen werden durch Matrizenmultiplikation verkettet — von rechts nach links gelesen.',
      },
      stochastic_matrix: {
        title: 'Stochastische Matrix & Fixvektor',
        desc: 'Eine stochastische Matrix hat in jeder Spalte die Summe 1 — sie beschreibt Übergangswahrscheinlichkeiten. Der Fixvektor $\\vec{v}_{\\text{fix}}$ mit $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ ist der langfristige Gleichgewichtszustand, egal vom Startzustand.',
      },
    },
    examples: {
      '3d_rotation': {
        title: '3D-Rotation eines Hafenlichts',
        context: 'Kai will eine Laterne im Hafen um $90°$ um die $z$-Achse drehen. Die Laterne sitzt am Punkt $(3, 0, 5)$. Wie berechnet er die neue Position?',
        step1: 'Rotationsmatrix für $90°$ um die $z$-Achse aufstellen ($\\cos 90° = 0$, $\\sin 90° = 1$):',
        step2: 'Den Ortsvektor der Laterne als Spaltenvektor schreiben:',
        step3: 'Matrix mal Vektor — Zeile für Zeile ausmultiplizieren:',
        step4: 'Ergebnis: Die Laterne sitzt jetzt bei $(0, 3, 5)$ — um $90°$ in der $xy$-Ebene gedreht, $z$ unveraendert:',
        kai_comment: 'Genau so funktioniert jeder Frame in meiner Engine: Tausende Vertices werden mit der Model-Matrix multipliziert, dann mit der View-Matrix (Kamera-Position), dann mit der Projection-Matrix (Perspektive). Drei Matrizenmultiplikationen pro Vertex — und die GPU macht das in Millisekunden!',
      },
      player_states: {
        title: 'Spieler-Verhalten als Markov-Kette',
        context: 'In "Hafenlichter 3D" wechseln Spieler zwischen Erkunden (E) und Kaempfen (K). Kai hat beobachtet: Wer erkundet, bleibt zu $70\\%$ beim Erkunden und wechselt zu $30\\%$ zum Kampf. Wer kaempft, bleibt zu $80\\%$ im Kampf und erkundet zu $20\\%$ wieder. Aktuell erkunden $60\\%$ der Spieler.',
        step1: 'Übergangsmatrix $T$ und Startvektor $\\vec{v}_0$ aufstellen:',
        step2: 'Einen Schritt berechnen — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:',
        step3: 'Fixvektor bestimmen — Gleichungssystem $T \\cdot \\vec{v} = \\vec{v}$ mit $x + y = 1$ lösen:',
        step4: 'Langfristig erkunden $40\\%$ und kaempfen $60\\%$ — unabhängig vom Start:',
        kai_comment: 'Das ist Gold für mein Game-Design! Der Fixvektor zeigt mir, dass die Spieler langfristig mehr kaempfen als erkunden — egal wie sie starten. Wenn ich will, dass es ausgeglichener ist, muss ich die Übergangswahrscheinlichkeiten ändern. Matrizen machen Spielerverhalten berechenbar!',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Computergrafik & 3D-Engines',
        desc: 'Jede 3D-Engine (Unity, Unreal, Godot) basiert auf Matrizenmultiplikation. Die MVP-Pipeline — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — transformiert jeden 3D-Punkt auf den 2D-Bildschirm. Moderne GPUs sind im Kern massive Matrizenmultiplikations-Maschinen.',
      },
      google_pagerank: {
        title: 'Google PageRank',
        desc: 'Googles urspruenglicher Suchalgorithmus modelliert das Web als riesige stochastische Matrix: Jede Webseite ist ein Zustand, jeder Link eine Übergangswahrscheinlichkeit. Der Fixvektor $\\vec{r} = T \\cdot \\vec{r}$ ergibt das Ranking — die Seiten mit den höchsten Werten im Fixvektor stehen ganz oben.',
      },
      robotics: {
        title: 'Robotik & Maschinensteuerung',
        desc: 'Roboterarme bestehen aus Gelenken, die jeweils eine Rotation ausfuehren. Die Gesamtposition der Hand ergibt sich als Produkt aller Rotationsmatrizen entlang des Arms. Das nennt man Vorwaertskinematik — und die inverse Matrix löst das Rückwärtsproblem: "Welche Gelenkwinkel brauche ich für diese Handposition?"',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Matrizenmultiplikation wie Zahlenmultiplikation behandelt: $A \\cdot B = B \\cdot A$',
        correct: 'Matrizen sind NICHT kommutativ: $A \\cdot B \\neq B \\cdot A$ im Allgemeinen',
        why: 'Erst drehen, dann verschieben ergibt ein anderes Ergebnis als erst verschieben, dann drehen. In der 3D-Grafik führt vertauschte Reihenfolge zu voellig falschen Positionen. Deshalb: Transformationsketten immer von rechts nach links lesen!',
        kai_warning: 'Ich habe mal einen ganzen Tag nach einem Bug gesucht, weil ich Rotation und Translation vertauscht hatte. Meine Schiffe haben sich um den Weltmittelpunkt gedreht statt um ihre eigene Achse! Seitdem lese ich Matrizenketten immer von rechts nach links: $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$ — erst rotieren, dann verschieben.',
      },
      stochastic_rows_cols: {
        wrong: 'Zeilensumme = 1 angenommen bei stochastischen Matrizen mit Spaltenvektoren',
        correct: 'Bei Spaltenvektoren muss die Spaltensumme 1 sein: $\\sum_i t_{ij} = 1$',
        why: 'Die Konvention haengt davon ab, ob du Zeilen- oder Spaltenvektoren verwendest. In der Schule und an deutschen Unis ist der Spaltenvektor Standard — dann müssen die Spalten der Übergangsmatrix die Summe 1 haben. Jede Spalte beschreibt: "Von Zustand $j$ aus — wie verteilen sich die Übergaenge?"',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'Es ist Release-Nacht am Hamburger Hafen. Die Lichter der Landungsbruecken spiegeln sich im Wasser, und auf der großen Leinwand vor dem Fischmarkt leuchtet der Titel: "Hafenlichter 3D". Kai steht auf der Buehne, das Mikro in der Hand, und kann es kaum fassen — drei Jahre Entwicklung, und jetzt ist das Spiel endlich fertig. Im Publikum entdeckt er zwei bekannte Gesichter: Mia, die damals mit ihrem 2D-Pixelart-Spiel alles ins Rollen gebracht hat, und Amir, dessen DataPulse-Algorithmen die KI der NPCs steuern. "Wisst ihr noch", sagt Kai ins Mikro, "als Mia mit linearen Funktionen angefangen hat, um Spielfiguren auf einer Geraden zu bewegen? Dann hat Amir mit Ableitungen und Binomialverteilung die Daten-Pipeline gebaut. Und jetzt stehen wir hier — mit Matrizen, Integralen und Normalverteilung haben wir eine komplette 3D-Welt erschaffen." Die Menge jubelt. Aber bevor die Party richtig losgeht, hat Kai noch eine letzte Challenge: das Mathe-Abitur.',
      challenge: 'Die größte Prüfung steht bevor — das Abitur vereint Analysis, Analytische Geometrie und Stochastik in einer Klausur. Kai braucht eine Strategie, die alle Themen verbindet, Punkte maximiert und typische Fehler vermeidet.',
      outro: 'Die Release-Party am Hafen läuft, die Musik spielt, und Kai, Mia und Amir stossen an. "Drei Jahre Mathe", sagt Mia, "von der Geraden bis zur Normalverteilung." "Von Daten bis zu neuronalen Netzen", ergänzt Amir. "Von 2D-Pixeln bis zur 3D-Engine", schließt Kai. Sie schauen auf die Elbe, wo die Hafenlichter tanzen — jedes einzelne ein Vertex, transformiert durch eine Matrix, beleuchtet durch eine Exponentialfunktion, balanciert durch eine Normalverteilung. Mathematik war nie nur Rechnen. Es war die Sprache, mit der sie ihre Ideen Wirklichkeit werden liessen. Das Spiel ist released. Die Prüfung kommt. Und egal wie sie ausgeht — die Reise war es wert. Jede Funktion, jede Ableitung, jedes Integral hat sie hierhergebracht. An den Hafen. Ans Ziel. Und an den Anfang von allem, was noch kommt.',
    },
    objectives: {
      exam_strategy: 'Eine klare Prüfungsstrategie entwickeln: Aufgaben sichten, Punkte-Zeit-Verhaeltnis berechnen, leichte Aufgaben zuerst',
      cross_topic_connections: 'Verbindungen zwischen Analysis, Analytischer Geometrie und Stochastik erkennen und nutzen',
      time_management: 'Das Zeitbudget pro Aufgabe realistisch planen und einhalten',
      error_prevention: 'Typische Fehler erkennen, Plausibilitätschecks durchführen und Ergebnisse im Sachkontext interpretieren',
    },
    explanation: {
      intro: 'Das Abitur ist kein Sprint, sondern ein strategisches Spiel — wie ein Endgame-Boss mit mehreren Phasen. Du hast ca. 4 bis 5 Stunden für drei große Themenbloecke. Der Schlüssel ist nicht, alles zu wissen, sondern klug zu priorisieren und sauber zu arbeiten. Kai hat das bei seinem Spiel gelernt: "Du kannst nicht jeden Bug gleichzeitig fixen. Du fixst die, die am meisten Impact haben — und genau so gehst du die Prüfung an."',
      kai_rallying: 'Leute, wir haben drei Jahre lang Mathe gemacht — nicht weil wir mussten, sondern weil es der Schlüssel zu unseren Projekten war. Mia hat mit Funktionen angefangen, Amir hat mit Stochastik seine KI trainiert, und ich habe mit Matrizen eine 3D-Welt gebaut. Das Abi ist nur noch der Abspann nach dem Endkampf. Wir sind ready!',
      structure: 'Die Klausur besteht typischerweise aus drei Pflichtteilen — Analysis (oft der größte Block), Analytische Geometrie und Stochastik. Die Punkte verteilen sich ungefähr so:',
      time_strategy: 'Plane deine Zeit proportional zu den Punkten. Wenn eine Aufgabe 10 von 100 Punkten bringt, investiere ca. $10\\%$ deiner Zeit. Und die goldene Regel: Beginne mit den Aufgaben, bei denen du dir sicher bist. Jeder sichere Punkt zählt gleich viel wie ein schwer erkaempfter!',
      mia_wisdom: 'Erinnert euch an die Basics! Funktionsanalyse ist immer das gleiche Schema: Definitionsbereich, Nullstellen, Extremstellen, Wendepunkte, Verhalten für $x \\to \\pm\\infty$. Wenn ihr das Muster kennt, ist jede Funktion nur eine Variation davon. Das habe ich bei meinen Spielfiguren gelernt — jede Bewegung ist im Kern eine Funktion.',
      checking: 'Nach jeder Teilaufgabe: Plausibilitätscheck! Stimmen die Einheiten? Haben die Vorzeichen Sinn? Liegt das Ergebnis in einem realistischen Bereich? Eine Wahrscheinlichkeit größer als 1 oder ein negatives Flaechenmass sind sofortige Warnsignale — dann lieber nochmal nachrechnen als weitermachen.',
      amir_data: 'Ich checke meine Ergebnisse immer gegen Grenzfaelle: Was passiert für $x = 0$? Für sehr große $x$? Konvergiert meine Lösung oder divergiert sie? Diese Denkweise aus dem Debugging gilt genauso für die Klausur. Und bei Stochastik: Immer prüfen, ob $\\sum P = 1$ gilt!',
      confidence: 'Das Wichtigste zum Schluss: Du weisst mehr, als du denkst. Drei Jahre Uebung stecken in deinen Haenden. Wenn du in der Prüfung kurz nicht weiterweisst — atme durch, lies die Aufgabe nochmal, und fang mit dem an, was du sicher kannst. Jeder Punkt zählt. Und denk daran: Mathe ist kein Talent, sondern eine Sprache, die du gelernt hast. Sprich sie.',
    },
    concepts: {
      read_then_plan: {
        title: 'Lesen → Planen → Rechnen → Prüfen',
        desc: 'Das 4-Schritte-Schema für jede Aufgabe: (1) Aufgabe komplett lesen, Informationen markieren. (2) Lösungsstrategie planen — welche Methoden brauchst du? (3) Sauber und übersichtlich rechnen. (4) Ergebnis prüfen: Einheiten, Vorzeichen, Plausibilität, Sachkontext.',
      },
      point_maximizing: {
        title: 'Punkte-Effizienz',
        desc: 'Nicht jede Aufgabe ist gleich schwer pro Punkt. Beginne mit den Aufgaben, bei denen du die meisten Punkte in der kürzesten Zeit holst. Die letzten Teilaufgaben sind oft am schwersten — lieber erstmal alle "leichten" Punkte in allen Aufgaben sammeln, dann zu den schweren zurueckkehren.',
      },
      plausibility_check: {
        title: 'Plausibilitäts-Check',
        desc: 'Vier schnelle Checks, die Fluechtigkeitsfehler verhindern: (1) Einheiten: Passt die Einheit zum Kontext? (2) Vorzeichen: Ist negativ hier sinnvoll? (3) Grenzwerte: Was passiert für $x \\to 0$ oder $x \\to \\infty$? (4) Skizze: Passt das Ergebnis zur grafischen Vorstellung?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Typische Analysisaufgabe: Kurvendiskussion + Integral',
        context: 'Kai modelliert den Energieverbrauch seiner 3D-Engine mit $f(x) = (2x - 1) \\cdot e^{-x}$. Bestimme Extremstellen und berechne die Flaeche zwischen Graph und $x$-Achse auf $[0;\\, 3]$.',
        step1: 'Funktion aufstellen — hier bereits gegeben:',
        step2: 'Ableitung mit Produktregel: $u = 2x - 1$, $v = e^{-x}$, also $f\'(x) = u\' \\cdot v + u \\cdot v\'$:',
        step3: 'Extremstelle finden — $f\'(x) = 0$ setzen ($e^{-x} > 0$ immer, also Klammer = 0):',
        step4: 'Flaechenberechnung — partielle Integration oder Stammfunktion bestimmen:',
        mia_comment: 'Das ist genau das Muster, das ich meine: Ableitung mit Produktregel, Nullstelle finden, Integral berechnen. Die Funktion ändert sich, aber die Strategie bleibt immer gleich. Ueben, bis es automatisch läuft!',
      },
      mixed_stochastik: {
        title: 'Typische Stochastikaufgabe: Hypothesentest',
        context: 'Amirs A/B-Test zeigt: Von 50 Nutzern klicken normalerweise $8\\%$ auf den neuen Button. Nach einem Redesign will er testen, ob die Klickrate gestiegen ist ($\\alpha = 5\\%$).',
        step1: 'Modell aufstellen — Binomialverteilung mit den Parametern:',
        step2: 'Hypothesen formulieren — einseitiger Test nach oben:',
        step3: 'Kritischen Bereich suchen — $k = 8$ testen ($P$ noch zu groß):',
        step4: 'Ablehnungsbereich bestimmen — ab $k = 9$ wird $H_0$ abgelehnt:',
        amir_comment: 'Hypothesentests sind im Kern Entscheidungslogik: Du berechnest, wie unwahrscheinlich dein Ergebnis unter $H_0$ ist. Wenn es unwahrscheinlicher als $\\alpha$ ist, verwirfst du $H_0$. Genau so treffe ich datenbasierte Entscheidungen bei DataPulse — nur mit größeren Stichproben!',
      },
    },
    realworld: {
      release_day: {
        title: 'Release Day: Wenn alles zusammenkommt',
        desc: 'Ein Spiel zu veroeffentlichen ist wie eine Prüfung: Monate der Vorbereitung muenden in einen entscheidenden Moment. Kais "Hafenlichter 3D" vereint 2D-Grundlagen (Mia), Datenanalyse (Amir) und 3D-Mathematik (Kai) — genau wie das Abitur Analysis, Geometrie und Stochastik vereint. Vorbereitung ist alles.',
      },
      project_management: {
        title: 'Projektmanagement & Priorisierung',
        desc: 'In der Softwareentwicklung priorisierst du Features nach Impact und Aufwand — genau wie Prüfungsaufgaben nach Punkten und Schwierigkeit. Die Formel $\\text{Effizienz} = \\frac{\\text{Punkte}}{\\text{Zeit}}$ gilt im Beruf genauso: Konzentriere dich auf das, was den größten Unterschied macht.',
      },
      lifelong_learning: {
        title: 'Lebenslanges Lernen',
        desc: 'Das Abitur ist nicht das Ende, sondern der Anfang. Mia studiert Game-Design, Amir Data Science, Kai Medieninformatik — und überall brauchen sie Mathematik. Die Faehigkeit, sich in neue Themen einzuarbeiten, ist wertvoller als jede einzelne Formel. Mathe hat euch das Denken beigebracht.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Ergebnis ohne Einheit und ohne Sachbezug hinschreiben: "$A = 12{,}5$"',
        correct: 'Immer Einheit und Interpretation: "$A = 12{,}5\\,\\text{FE}$, das entspricht $12{,}5\\,\\text{m}^2$"',
        why: 'Im Abitur gibt es Punkte für die Interpretation im Sachkontext! Ein nacktes Ergebnis ohne Einheit oder Bezug zur Aufgabenstellung kostet dich leichte Punkte. Schreibe immer einen Antwortsatz: "Die Flaeche betraegt $12{,}5\\,\\text{m}^2$, was der begruenten Flaeche des Parks entspricht."',
        kai_warning: 'In der Spieleentwicklung haben Zahlen ohne Kontext keinen Wert. 12,5 — was? Pixel? Sekunden? Schadenpunkte? Genauso in der Klausur: Schreib die Einheit hin und formuliere einen Antwortsatz. Das sind geschenkte Punkte!',
      },
      skip_plausibility: {
        wrong: 'Ein offensichtlich falsches Ergebnis nicht hinterfragen: $P(X = 5) = 1{,}3$',
        correct: 'Sofort stutzig werden: Eine Wahrscheinlichkeit kann nie größer als 1 sein!',
        why: 'Plausibilitätschecks kosten 10 Sekunden, können aber ganze Aufgaben retten. Wahrscheinlichkeiten liegen immer zwischen 0 und 1, Flaecheninhalte sind nie negativ, $e^x > 0$ für alle $x$. Wenn dein Ergebnis gegen diese Grundregeln verstoesst, steckt ein Rechenfehler dahinter.',
        mia_warning: 'Ich habe in meiner letzten Klausur genau so einen Fehler gefunden: Mein Integral war negativ, obwohl die Funktion im ganzen Intervall positiv war. Schneller Check, Vorzeichenfehler entdeckt, korrigiert — 4 Punkte gerettet. Immer prüfen!',
      },
    },
  },
};
