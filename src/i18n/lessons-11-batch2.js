export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Amirs Musik-Empfehlungsalgorithmus hat ein Problem: Die Beliebtheit neuer Songs steigt anfangs explosionsartig — aber wie schnell genau? Und wann flacht der Hype ab? "Ich brauche eine Funktion, die extrem schnelles Wachstum beschreibt und trotzdem berechenbar bleibt", sagt Amir zu Yara. Die Antwort: die Exponentialfunktion mit der Eulerschen Zahl $e$ — und ihr Gegenstück, der natürliche Logarithmus.',
      challenge: 'Amir muss die Wachstumskurve von Song-Streams modellieren und vorhersagen, wann ein Track seinen Peak erreicht — dafür braucht er Exponentialgleichungen und Logarithmen.',
      outro: 'Mit $e$-Funktion und $\\ln$ kann Amir jetzt berechnen, wann ein Song seinen Höhepunkt erreicht und wie schnell das Interesse danach abfaellt. "Das Coole ist: Der natürliche Logarithmus macht jede Exponentialgleichung lösbar", erklärt er Finn. DataPulse sagt jetzt Song-Trends mit erstaunlicher Präzision voraus.',
    },
    objectives: {
      e_function: 'Die $e$-Funktion als natürliche Wachstumsfunktion verstehen und anwenden',
      natural_log: 'Den natürlichen Logarithmus als Umkehrfunktion von $e^x$ beherrschen',
      log_rules: 'Logarithmengesetze sicher anwenden (Produkt-, Quotienten- und Potenzregel)',
      solve_exp_equations: 'Exponentialgleichungen durch Logarithmieren lösen',
    },
    explanation: {
      intro: 'Die Eulersche Zahl $e \\approx 2{,}718$ ist die wichtigste Konstante für Wachstumsprozesse. Warum ausgerechnet $e$? Weil die Funktion $f(x) = e^x$ eine einzigartige Eigenschaft hat: Ihre Ableitung ist sie selbst — $f\'(x) = e^x$. Das bedeutet: Die Wachstumsrate ist immer proportional zum aktuellen Wert. Perfekt für natürliches Wachstum!',
      natural_log: 'Der natürliche Logarithmus $\\ln(x)$ ist die Umkehrfunktion von $e^x$. Wenn du wissen willst, welchen Exponenten du brauchst, um einen bestimmten Wert zu erreichen — dann ist $\\ln$ dein Werkzeug. Die beiden Funktionen heben sich gegenseitig auf:',
      amir_tip: 'In meinem ML-Code taucht $\\ln$ überall auf — in der Loss-Funktion, bei der Normalisierung, in der Softmax-Formel. Der Grund: $\\ln$ verwandelt Multiplikation in Addition und macht riesige Zahlen handhabbar. Deshalb rechnen wir oft mit "Log-Likelihood" statt mit Wahrscheinlichkeiten direkt!',
      log_rules: 'Die drei Logarithmengesetze sind extrem nützlich — sie verwandeln komplexe Ausdruecke in einfachere. Die Grundidee: Logarithmen machen aus Multiplikation Addition, aus Division Subtraktion und aus Potenzen Multiplikation:',
      solving: 'Um eine Exponentialgleichung nach $x$ aufzuloesen, wendest du auf beiden Seiten den $\\ln$ an. Der Logarithmus "holt den Exponenten runter" — das ist der Schlüsselschritt:',
    },
    concepts: {
      e_function: {
        title: '$e$-Funktion',
        desc: 'Die allgemeine Form $f(x) = a \\cdot e^{kx}$: $a$ ist der Startwert, $k$ bestimmt die Wachstumsgeschwindigkeit. Bei $k > 0$ wächst die Funktion, bei $k < 0$ faellt sie (exponentieller Zerfall). Die $e$-Funktion ist ihre eigene Ableitung — deshalb modelliert sie natürliches Wachstum perfekt.',
      },
      natural_log: {
        title: 'Natürlicher Logarithmus',
        desc: 'Die Umkehrfunktion von $e^x$: $\\ln(x)$ beantwortet die Frage "Welche Potenz von $e$ ergibt $x$?". Definiert nur für $x > 0$. Wichtig: $\\ln(1) = 0$ und $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Logarithmengesetze',
        desc: 'Drei Regeln, die alles vereinfachen: Produktregel ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), Quotientenregel ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) und Potenzregel ($\\ln(a^r) = r \\cdot \\ln(a)$). Die Potenzregel ist der Schlüssel zum Lösen von Exponentialgleichungen.',
      },
    },
    examples: {
      solve_exp: {
        title: 'Exponentialgleichung lösen',
        context: 'Amir will berechnen, nach wie vielen Tagen ein Song 5-mal so viele Streams hat wie am Anfang. Das Wachstumsmodell lautet: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Gleichung aufstellen — wann erreichen die Streams den Wert 15?',
        step2: 'Durch 3 teilen, um $e^{2x}$ zu isolieren:',
        step3: 'Auf beiden Seiten den $\\ln$ anwenden — der Exponent "kommt runter":',
        step4: 'Nach $x$ aufloesen — durch den Koeffizienten 2 teilen:',
        amir_comment: 'Das ist das Muster, das ich staendig brauche: Isolieren, Logarithmieren, Aufloesen. Funktioniert bei jeder Exponentialgleichung!',
      },
      half_life: {
        title: 'Halbwertszeit berechnen',
        context: 'Nach dem Peak verliert ein viraler Song taeglich Hörer. Amir modelliert den Rueckgang mit $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Das Modell: 1000 aktive Hörer zum Zeitpunkt $t = 0$, exponentieller Rueckgang:',
        step2: 'Halbwertszeit bedeutet: Wann sind noch 500 Hörer übrig?',
        step3: 'Isolieren und logarithmieren — $\\ln$ auf beide Seiten:',
        step4: 'Nach $t$ aufloesen — nach ca. 6{,}93 Tagen hat sich die Hörerzahl halbiert:',
        amir_comment: 'Die Halbwertszeit ist konstant! Egal ob 1000, 500 oder 250 Hörer — es dauert immer ca. 6{,}93 Tage bis zur nächsten Halbierung. Das ist die Magie des exponentiellen Zerfalls.',
      },
    },
    realworld: {
      user_retention: {
        title: 'User Retention bei Apps',
        desc: 'Wie viele Nutzer bleiben nach einer Woche aktiv? Bei den meisten Apps faellt die Retention exponentiell: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse nutzt dieses Modell, um vorherzusagen, wie viele User nach 30 Tagen noch dabei sind — und wann gezielt Push-Benachrichtigungen kommen sollten.',
      },
      compound_interest: {
        title: 'Stetige Verzinsung',
        desc: 'Banken rechnen mit jaehrlicher Verzinsung, aber in der Theorie gibt es auch stetige Verzinsung: $K(t) = K_0 \\cdot e^{rt}$. Je oefter du Zinsen berechnest (taeglich, stuendlich, sekuendlich...), desto näher kommst du an $e^{rt}$ heran. Das ist der Grenzwert!',
      },
      decibel: {
        title: 'Dezibel-Skala',
        desc: 'Lautstaerke wird logarithmisch gemessen: $L = 10 \\cdot \\log_{10}(I/I_0)$. Verdoppelt sich die Schallintensität, steigt der Pegel nur um ca. $3\\,\\text{dB}$. Deshalb klingen 10 Gitarren nicht 10-mal so laut wie eine — unser Gehör arbeitet logarithmisch!',
      },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — Summe aufgespalten',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — nur Produkte lassen sich aufspalten',
        why: 'Die Produktregel gilt NUR für Multiplikation, nicht für Addition! Es gibt keine einfache Formel für $\\ln(a + b)$. Das ist einer der haeufigsten Fehler überhaupt.',
        amir_warning: 'Dieser Bug hat mich mal zwei Stunden Debugging gekostet. Meine Likelihood-Berechnung war komplett falsch, weil ich $\\ln(p_1 + p_2)$ statt $\\ln(p_1 \\cdot p_2)$ benutzt habe. Logarithmen spalten Produkte auf — nicht Summen!',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$ — den Logarithmus falsch aufgeloest',
        correct: '$\\ln(e^x) = x$ — der Logarithmus hebt die Exponentialfunktion auf',
        why: '$\\ln$ und $e^x$ sind Umkehrfunktionen — sie heben sich gegenseitig auf. Das Ergebnis ist einfach der Exponent $x$, ohne Faktor $e$ davor.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse hat ein neues Feature gelauncht, und Amir will wissen: Wie wahrscheinlich ist es, dass von 100 Testnutzern mindestens 15 auf den neuen Button klicken? Jeder User klickt oder klickt nicht — ein klassisches Ja/Nein-Experiment, das sich $n$-mal wiederholt. "Das ist kein Zufall mehr, das ist Binomialverteilung", sagt Prof. Nguyen im Seminar.',
      challenge: 'Amir braucht die Wahrscheinlichkeit für eine bestimmte Anzahl Klicks bei $n$ unabhängigen Versuchen — die Binomialverteilung liefert die exakte Antwort.',
      outro: 'Amir hat jetzt ein statistisches Framework für A/B-Tests. Er kann berechnen, ob ein Ergebnis signifikant ist oder nur zufaellig zustandekam. "Die Binomialverteilung ist das Fundament für fast jeden statistischen Test in der Praxis", erklärt er Yara. DataPulse trifft Entscheidungen jetzt datenbasiert statt aus dem Bauch heraus.',
    },
    objectives: {
      bernoulli: 'Bernoulli-Experimente erkennen und die Erfolgswahrscheinlichkeit $p$ bestimmen',
      binomial_formula: 'Die Binomialformel anwenden, um $P(X = k)$ zu berechnen',
      expected_value: 'Erwartungswert $E(X) = n \\cdot p$ berechnen und interpretieren',
      standard_deviation: 'Standardabweichung $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ bestimmen und als Streuungsmass nutzen',
    },
    explanation: {
      intro: 'Stell dir vor, du wiederholst ein Experiment $n$-mal, und jedes Mal gibt es nur zwei Ausgaenge: Erfolg (Wahrscheinlichkeit $p$) oder Misserfolg (Wahrscheinlichkeit $1-p$). Die Binomialverteilung verraet dir, wie wahrscheinlich genau $k$ Erfolge bei $n$ Versuchen sind:',
      bernoulli: 'Die Basis ist das Bernoulli-Experiment — ein einzelner Versuch mit genau zwei Ausgaengen. Drei Bedingungen müssen gelten: (1) nur zwei Ergebnisse, (2) die Wahrscheinlichkeit $p$ bleibt bei jedem Versuch gleich, (3) die Versuche sind voneinander unabhängig. Der Binomialkoeffizient zählt die möglichen Anordnungen:',
      amir_tip: 'Der Binomialkoeffizient $\\binom{n}{k}$ zählt, auf wie viele Arten du $k$ Erfolge auf $n$ Versuche verteilen kannst. In meinem Code ist das die Funktion scipy.special.comb(n, k). Für große $n$ berechne ich lieber die kumulative Verteilung — Einzelwahrscheinlichkeiten aufzusummieren waere viel zu langsam!',
      expected_value: 'Der Erwartungswert $E(X) = n \\cdot p$ sagt dir, wie viele Erfolge du "im Durchschnitt" erwartest. Bei 100 Versuchen mit $p = 0{,}15$ erwartest du $E(X) = 15$ Erfolge. Aber das heisst nicht, dass es jedes Mal genau 15 sind! Wie stark die Ergebnisse schwanken, misst die Standardabweichung:',
      standard_deviation: 'Die Standardabweichung $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ zeigt die typische Streuung um den Erwartungswert. Faustregeln: Etwa 68% der Ergebnisse liegen in $E(X) \\pm \\sigma$, etwa 95% in $E(X) \\pm 2\\sigma$. Je größer $n$, desto schmaler wird die Verteilung relativ zum Erwartungswert.',
    },
    concepts: {
      bernoulli: {
        title: 'Bernoulli-Experiment',
        desc: 'Ein Zufallsexperiment mit genau zwei Ausgaengen: Erfolg (Wahrscheinlichkeit $p$) oder Misserfolg ($1-p$). Beispiele: Muenzwurf, Klick/Kein-Klick, Tor/Kein-Tor. Die Binomialverteilung entsteht durch $n$-fache unabhängige Wiederholung.',
      },
      binomial_formula: {
        title: 'Binomialformel',
        desc: 'Die Formel $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ besteht aus drei Teilen: $\\binom{n}{k}$ zählt die Anordnungen, $p^k$ ist die Wahrscheinlichkeit für $k$ Erfolge, $(1-p)^{n-k}$ für $n-k$ Misserfolge.',
      },
      expected_value: {
        title: 'Erwartungswert & Standardabweichung',
        desc: 'Der Erwartungswert $E(X) = n \\cdot p$ ist der Mittelwert bei vielen Wiederholungen. Die Standardabweichung $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ misst die typische Abweichung davon. Zusammen beschreiben sie Lage und Streuung der Verteilung.',
      },
    },
    examples: {
      coin_flips: {
        title: 'Muenzwurf: genau 7 von 10 Mal Kopf',
        context: 'Amir testet seinen Zufallsgenerator: Bei 10 fairen Muenzwuerfen — wie wahrscheinlich ist genau 7-mal Kopf?',
        step1: 'Parameter bestimmen: $n = 10$ Würfe, $p = 0{,}5$ (faire Muenze), gesucht: $k = 7$ Mal Kopf.',
        step2: 'Binomialkoeffizient berechnen — auf wie viele Arten können 7 Kopf auf 10 Würfe verteilt sein?',
        step3: 'In die Binomialformel einsetzen: Anordnungen $\\times$ Erfolge $\\times$ Misserfolge:',
        step4: 'Ausrechnen — die Wahrscheinlichkeit betraegt ca. 11{,}7%, also eher unwahrscheinlich:',
        amir_comment: 'Nur 11{,}7% — das zeigt: Auch bei einer fairen Muenze ist 7 von 10 Mal Kopf nicht besonders überraschend, aber auch nicht der Normalfall. Mein Zufallsgenerator scheint okay zu sein!',
      },
      quality_control: {
        title: 'Qualitätskontrolle in der Produktion',
        context: 'Eine Fabrik hat eine Fehlerquote von 2%. Amir berechnet: Wie wahrscheinlich ist es, dass in einer Stichprobe von 20 Stueck kein einziges defekt ist?',
        step1: 'Parameter: $n = 20$ Stueck, Fehlerquote $p = 0{,}02$, gesucht: $k = 0$ defekte Teile.',
        step2: 'Einsetzen: $\\binom{20}{0} = 1$, und $0{,}02^0 = 1$ — es bleiben nur die Misserfolge:',
        step3: 'Vereinfachen — übrig bleibt $0{,}98^{20}$:',
        step4: 'Ergebnis: Mit ca. 66{,}8% Wahrscheinlichkeit ist kein Teil defekt — gar nicht so sicher!',
        amir_comment: 'Nur zwei Drittel Chance auf null Fehler bei 2% Fehlerquote! Das zeigt: Auch kleine Wahrscheinlichkeiten summieren sich bei vielen Versuchen. Bei $n = 100$ waere $P(X = 0) \\approx 13{,}3\\%$ — da findet man fast sicher einen Fehler.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B-Testing bei DataPulse',
        desc: 'Amir testet zwei Versionen der App: Version A hat eine Klickrate von 12%, Version B von 15%. Mit der Binomialverteilung berechnet er, ob der Unterschied statistisch signifikant ist — oder ob er auch durch Zufall haette entstehen können. Das ist die Grundlage jedes A/B-Tests.',
      },
      medicine: {
        title: 'Medizinische Studien',
        desc: 'Bei Medikamententests zählt man: Wie viele Patienten werden gesund? Ist die Heilungsrate signifikant besser als beim Placebo? Die Binomialverteilung liefert die Antwort — und schuetzt vor voreiligen Schluessen bei zu kleinen Stichproben.',
      },
      surveys: {
        title: 'Meinungsumfragen & Fehlertoleranz',
        desc: 'Wenn bei einer Umfrage 52% für "Ja" stimmen — ist das wirklich eine Mehrheit? Die Standardabweichung $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ zeigt, wie breit das Konfidenzintervall ist. Bei $n = 100$ waere $\\sigma \\approx 5\\%$ — das Ergebnis könnte also auch 47% oder 57% sein.',
      },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Binomialkoeffizient vergessen: $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Vollstaendige Formel mit $\\binom{n}{k}$',
        why: 'Ohne $\\binom{n}{k}$ zählt die Formel nur EINE bestimmte Reihenfolge — z.B. erst $k$ Erfolge, dann $n-k$ Misserfolge. Aber die Erfolge können an verschiedenen Stellen auftreten! Der Binomialkoeffizient zählt alle möglichen Anordnungen.',
        amir_warning: 'Stell dir vor, du würfest 3-mal und willst genau 2 Sechsen. Es gibt 3 Möglichkeiten: 6-6-X, 6-X-6, X-6-6. Der Binomialkoeffizient $\\binom{3}{2} = 3$ zählt genau das. Ohne ihn bekommst du nur ein Drittel der richtigen Wahrscheinlichkeit!',
      },
      variance_vs_sigma: {
        wrong: 'Varianz und Standardabweichung verwechselt',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — die Wurzel nicht vergessen!',
        why: 'Die Varianz ist $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, die Standardabweichung ist $\\sigma = \\sqrt{\\text{Var}(X)}$. Ohne Wurzel hat das Ergebnis die falsche Einheit und ist viel zu groß. $\\sigma$ hat dieselbe Einheit wie $X$ — die Varianz hat sie quadriert.',
      },
    },
  },

  '11-bedingte-wk': {
    story: {
      intro: 'DataPulse empfiehlt Songs basierend auf dem bisherigen Hörverhalten. Aber Amir merkt: Nicht jede Korrelation ist gleich stark. Wer Rock hört, mag vielleicht auch Metal — aber gilt das auch umgekehrt? "Die Wahrscheinlichkeit, dass jemand Rock mag WENN er Metal hört, ist nicht dasselbe wie umgekehrt", erklärt Prof. Nguyen. Willkommen bei der bedingten Wahrscheinlichkeit.',
      challenge: 'Amir muss die Empfehlungslogik verbessern: Wie wahrscheinlich ist es, dass ein User Genre $A$ mag, GEGEBEN dass er Genre $B$ hört? Und wie kehrt man diese Richtung um?',
      outro: 'Mit dem Satz von Bayes kann Amir jetzt die Empfehlungsrichtung umdrehen: Aus "Wer Metal hört, hört zu 60% auch Rock" wird "Wer Rock hört, hört zu 35% auch Metal". "Bayes ist wie Reverse Engineering für Wahrscheinlichkeiten", grinst er. DataPulse liefert jetzt deutlich präzisere Empfehlungen.',
    },
    objectives: {
      conditional_prob: 'Bedingte Wahrscheinlichkeiten berechnen und interpretieren',
      bayes_theorem: 'Den Satz von Bayes anwenden, um die Richtung einer bedingten Wahrscheinlichkeit umzukehren',
      independence: 'Stochastische Unabhängigkeit prüfen und von Abhängigkeit unterscheiden',
      tree_diagrams: 'Baumdiagramme und Vierfeldertafeln als Hilfsmittel einsetzen',
    },
    explanation: {
      intro: 'Die bedingte Wahrscheinlichkeit $P(A \\mid B)$ beantwortet die Frage: "Wie wahrscheinlich ist $A$, wenn wir bereits wissen, dass $B$ eingetreten ist?" Das Wissen über $B$ verändert die Wahrscheinlichkeit — der Stichprobenraum schrumpft auf die Faelle, in denen $B$ gilt:',
      multiplication_rule: 'Die Multiplikationsregel folgt direkt aus der Definition: Wenn du die Wahrscheinlichkeit von "$A$ und $B$ gleichzeitig" berechnen willst, multiplizierst du $P(B)$ mit der bedingten Wahrscheinlichkeit $P(A \\mid B)$:',
      amir_tip: 'In meinem Empfehlungscode nutze ich bedingte Wahrscheinlichkeiten staendig: $P(\\text{like}_Y \\mid \\text{like}_X)$ — die Wahrscheinlichkeit, dass ein User Song $Y$ mag, gegeben dass er Song $X$ gelikt hat. Das ist das Herzstueck jedes Collaborative Filters!',
      bayes: 'Der Satz von Bayes ist die Magie: Er dreht die Richtung um. Wenn du $P(B \\mid A)$ kennst, aber $P(A \\mid B)$ brauchst, liefert Bayes die Lösung. Die Formel sieht kompliziert aus, aber der Kern ist einfach: Du gewichtest mit der Basiswahrscheinlichkeit (Prior):',
      total_probability: 'Für den Nenner im Satz von Bayes brauchst du oft die totale Wahrscheinlichkeit. Sie zerlegt $P(B)$ in alle möglichen Wege, auf denen $B$ eintreten kann — über $A$ oder über $\\bar{A}$ (nicht-$A$):',
      independence: 'Zwei Ereignisse sind stochastisch unabhängig, wenn das Wissen über das eine die Wahrscheinlichkeit des anderen nicht verändert. Formal: $P(A \\mid B) = P(A)$ — das Eintreten von $B$ hat keinen Einfluss auf $A$. Aequivalent dazu gilt:',
    },
    concepts: {
      conditional_prob: {
        title: 'Bedingte Wahrscheinlichkeit',
        desc: '$P(A \\mid B)$ ist die Wahrscheinlichkeit von $A$ unter der Bedingung $B$. Man "zoomt" in den Teil des Wahrscheinlichkeitsraums, in dem $B$ gilt, und fragt dann nach $A$. Wichtig: $P(A \\mid B) \\neq P(B \\mid A)$ — die Richtung zählt!',
      },
      bayes: {
        title: 'Satz von Bayes',
        desc: 'Die Formel zum Umdrehen der Richtung: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ ist der Prior (Vorwissen), $P(A \\mid B)$ der Posterior (aktualisierte Einschaetzung nach Beobachtung von $B$). Bayessche Statistik ist die Grundlage von Spam-Filtern und Diagnosesystemen.',
      },
      independence: {
        title: 'Stochastische Unabhängigkeit',
        desc: '$A$ und $B$ sind unabhängig, wenn $P(A \\cap B) = P(A) \\cdot P(B)$. Das bedeutet: Das Eintreten von $B$ ändert nichts an der Wahrscheinlichkeit von $A$. Vorsicht: Unabhängigkeit ist NICHT dasselbe wie "keine Schnittmenge" (disjunkt)!',
      },
    },
    examples: {
      medical_test: {
        title: 'Medizinischer Test — Base Rate Fallacy',
        context: 'Ein Krankheitstest ist zu 99% korrekt. Die Krankheit betrifft 1% der Bevoelkerung. Wenn der Test positiv ist — wie wahrscheinlich ist man wirklich krank?',
        step1: 'Gegeben: $P(K) = 0{,}01$ (Krankheit), $P(+ \\mid K) = 0{,}99$ (Sensitivität), $P(+ \\mid \\bar{K}) = 0{,}05$ (falsch-positiv Rate).',
        step2: 'Totale Wahrscheinlichkeit für ein positives Ergebnis berechnen — beide Wege (krank + gesund):',
        step3: 'Satz von Bayes anwenden — $P(K \\mid +)$ ist gesucht:',
        step4: 'Ergebnis: Nur 16{,}7% Wahrscheinlichkeit, wirklich krank zu sein — trotz 99% Testgenauigkeit!',
        amir_comment: 'Das ist die Base Rate Fallacy! Der Test ist super genau, aber weil die Krankheit so selten ist ($P(K) = 1\\%$), sind die meisten positiven Tests falsch-positiv. In der ML-Welt heisst das: Precision und Recall sind nicht dasselbe!',
      },
      spam_filter: {
        title: 'Spam-Filter mit Bayes',
        context: 'Amirs E-Mail-Filter soll lernen: Wenn eine Mail das Wort "Gewinn" enthaelt — ist sie Spam?',
        step1: 'Gegebene Daten: 30% aller Mails sind Spam, 80% der Spam-Mails enthalten "Gewinn", aber auch 10% der normalen Mails:',
        step2: 'Totale Wahrscheinlichkeit, dass eine Mail "Gewinn" enthaelt:',
        step3: 'Bayes: Wie wahrscheinlich ist Spam, wenn "Gewinn" vorkommt?',
        step4: 'Ergebnis: 77{,}4% — eine Mail mit "Gewinn" ist mit hoher Wahrscheinlichkeit Spam:',
        amir_comment: 'Genau so funktioniert ein Naive-Bayes-Classifier! Je mehr Woerter du hinzufuegst, desto präziser wird der Filter. DataPulse nutzt das gleiche Prinzip: Statt Woertern analysieren wir Hörmuster, statt Spam/Nicht-Spam klassifizieren wir Genre-Vorlieben.',
      },
    },
    realworld: {
      recommendation: {
        title: 'Musik-Empfehlungen bei DataPulse',
        desc: 'Collaborative Filtering basiert auf bedingten Wahrscheinlichkeiten: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "Wer Song X mag, mag mit welcher Wahrscheinlichkeit auch Song Y?" Spotify, Netflix und DataPulse berechnen Millionen solcher bedingter Wahrscheinlichkeiten in Echtzeit.',
      },
      weather: {
        title: 'Wettervorhersage',
        desc: 'Meteorologen aktualisieren ihre Vorhersage staendig mit Bayes: $P(\\text{Regen} \\mid \\text{Wolken, Druck, Wind})$. Jede neue Messung verfeinert die Prognose. Deshalb ändert sich die Regenwahrscheinlichkeit im Laufe des Tages — das ist Bayes in Aktion!',
      },
      fraud_detection: {
        title: 'Betrugserkennung',
        desc: 'Amirs Payment-System erkennt verdaechtige Transaktionen mit Bayes: Wenn ein Alarm ausloest — wie wahrscheinlich ist echter Betrug? Genau wie beim Medizintest: Die Base Rate entscheidet! Bei einer Betrugsquote von 0{,}1% sind die meisten Alarme Fehlalarme.',
      },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$ — die Richtung verwechselt',
        correct: 'Die Richtung umdrehen geht nur mit Bayes!',
        why: '$P(A \\mid B)$ und $P(B \\mid A)$ sind voellig verschiedene Werte. Beispiel: $P(\\text{nass} \\mid \\text{Regen}) = 0{,}99$, aber $P(\\text{Regen} \\mid \\text{nass}) \\ll 0{,}99$ — man kann auch von einer Sprinkleranlage nass werden. Den Satz von Bayes brauchst du, um die Richtung umzukehren.',
        amir_warning: 'Diesen Fehler sehe ich in Code-Reviews staendig! Jemand berechnet $P(\\text{click} \\mid \\text{bought})$ und benutzt es als $P(\\text{bought} \\mid \\text{click})$. Das kann den Empfehlungsalgorithmus komplett ruinieren. Bayes ist Pflicht!',
      },
      ignore_base_rate: {
        wrong: 'Die Basisrate ignoriert (Base Rate Fallacy)',
        correct: 'Immer $P(A)$ — die Prior-Wahrscheinlichkeit — berücksichtigen',
        why: 'Ein 99%-genauer Test klingt beeindruckend, aber wenn die Krankheit nur 1% betrifft, ist $P(K \\mid +) \\approx 16{,}7\\%$. Die niedrige Basisrate $P(K) = 0{,}01$ dominiert das Ergebnis. Ohne den Prior erhaeltst du eine voellig verzerrte Einschaetzung.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn baut das Backend für DataPulses neues Feature: Ähnliche Songs finden. Aber wie misst man "Ähnlichkeit" zwischen Songs, wenn jeder Song durch Dutzende von Eigenschaften beschrieben wird — Tempo, Energie, Stimmung, Instrumentierung? "Stell dir jeden Song als Punkt im Raum vor", sagt Amir. "Je näher zwei Punkte liegen, desto ähnlicher sind die Songs." Willkommen in der Welt der Vektoren.',
      challenge: 'Amir muss Song-Features als Vektoren darstellen und deren Ähnlichkeit berechnen — mit dem Skalarprodukt und dem Winkel zwischen Vektoren.',
      outro: 'DataPulses Empfehlungsengine nutzt jetzt Cosine Similarity: Je kleiner der Winkel zwischen zwei Song-Vektoren, desto ähnlicher die Songs. "In der ML-Welt sind Vektoren überall — Word Embeddings, Feature Spaces, neuronale Netze. Alles ist lineare Algebra", sagt Amir begeistert zu Yara.',
    },
    objectives: {
      vectors_2d_3d: 'Vektoren im $\\mathbb{R}^2$ und $\\mathbb{R}^3$ als Spalten notieren und geometrisch interpretieren',
      vector_operations: 'Vektoraddition und Skalarmultiplikation beherrschen',
      scalar_product: 'Das Skalarprodukt berechnen und geometrisch deuten',
      angle_between_vectors: 'Den Winkel zwischen zwei Vektoren mit der Cosinus-Formel bestimmen',
    },
    explanation: {
      intro: 'Ein Vektor beschreibt eine Verschiebung im Raum — oder allgemeiner: eine geordnete Liste von Zahlen. Im $\\mathbb{R}^3$ hat ein Vektor drei Komponenten, die du als Spalte schreibst. In der Datenanalyse können Vektoren auch 50 oder 500 Dimensionen haben — das Prinzip bleibt gleich:',
      addition: 'Vektoren addierst du komponentenweise — jede Zeile für sich. Geometrisch legst du den zweiten Vektor ans Ende des ersten (Spitze-an-Fuss-Methode). Das Ergebnis ist der direkte Weg vom Start zum Ziel:',
      amir_tip: 'In meinem Python-Code sind Vektoren einfach numpy-Arrays. Die Addition $\\vec{a} + \\vec{b}$ wird automatisch elementweise ausgefuehrt — np.array([3,4]) + np.array([-1,2]) ergibt np.array([2,6]). Genau das Gleiche wie in der Mathe!',
      scalar_product: 'Das Skalarprodukt (auch: inneres Produkt) zweier Vektoren ergibt eine einzelne Zahl — keinen Vektor! Du multiplizierst die Komponenten paarweise und addierst alles auf. Das Ergebnis verraet dir, wie stark die Vektoren "in die gleiche Richtung zeigen":',
      length: 'Die Laenge (der Betrag) eines Vektors berechnet sich über den Satz des Pythagoras — erweitert auf drei Dimensionen. Im 2D-Fall ist es der bekannte $\\sqrt{x^2 + y^2}$, im 3D kommt $z^2$ dazu:',
      angle: 'Die wichtigste Anwendung des Skalarprodukts: Der Winkel zwischen zwei Vektoren. Die Formel verbindet das algebraische Skalarprodukt mit der geometrischen Interpretation. Dieser Winkel ist in der ML-Welt als "Cosine Similarity" das Standardmass für Ähnlichkeit:',
    },
    concepts: {
      vector: {
        title: 'Vektor',
        desc: 'Eine geordnete Liste von Zahlen als Spalte geschrieben. Im $\\mathbb{R}^2$ hat ein Vektor 2 Komponenten, im $\\mathbb{R}^3$ drei. Geometrisch ist er ein Pfeil mit Richtung und Laenge. In der Datenanalyse repraesentiert ein Vektor ein Objekt mit seinen Eigenschaften — z.B. einen Song mit Tempo, Energie und Stimmung.',
      },
      scalar_product: {
        title: 'Skalarprodukt',
        desc: 'Zwei Vektoren rein, eine Zahl raus: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometrisch gilt: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Wenn das Skalarprodukt Null ist, stehen die Vektoren senkrecht aufeinander (orthogonal).',
      },
      vector_length: {
        title: 'Betrag eines Vektors',
        desc: 'Die Laenge $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — verallgemeinerter Pythagoras. Ein Vektor mit Betrag 1 heisst Einheitsvektor. In der ML-Welt normalisiert man Vektoren oft auf Laenge 1, um nur die Richtung zu vergleichen.',
      },
    },
    examples: {
      force_addition: {
        title: 'Kraefte als Vektoren addieren',
        context: 'Zwei Kraefte wirken auf ein Objekt — Amir berechnet die resultierende Gesamtkraft.',
        step1: 'Die beiden Kraefte als 2D-Vektoren gegeben:',
        step2: 'Komponentenweise addieren — jede Zeile einzeln:',
        step3: 'Betrag der Gesamtkraft berechnen (Pythagoras):',
        step4: 'Ausrechnen — die Gesamtkraft betraegt ca. $6{,}32\\,\\text{N}$:',
        amir_comment: 'Das gleiche Prinzip nutzen wir bei DataPulse: Statt Kraeften addieren wir Feature-Vektoren. Wenn ein User zwei Genres mag, ist der kombinierte Geschmacks-Vektor die Summe — damit finden wir Songs, die zu beiden Genres passen!',
      },
      angle_vectors: {
        title: 'Winkel zwischen Song-Vektoren',
        context: 'Amir vergleicht zwei Songs: Song A hat den Feature-Vektor $(1, 2, 3)$ und Song B $(4, -1, 2)$. Wie ähnlich sind sie?',
        step1: 'Die Feature-Vektoren der beiden Songs:',
        step2: 'Skalarprodukt berechnen — Komponenten paarweise multiplizieren und aufaddieren:',
        step3: 'Betraege beider Vektoren berechnen:',
        step4: 'Cosinus-Formel anwenden — der Winkel betraegt ca. $62{,}2°$:',
        amir_comment: 'Ein Winkel von $62{,}2°$ bedeutet: Die Songs sind teilweise ähnlich, aber nicht extrem. Bei $0°$ waeren sie identisch (gleiche Proportionen), bei $90°$ komplett verschieden. In meinem Code steht: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))',
      },
    },
    realworld: {
      embeddings: {
        title: 'Word Embeddings & Song Embeddings',
        desc: 'In der ML-Welt werden Woerter, Songs und Bilder als hochdimensionale Vektoren dargestellt (Embeddings). Die Cosine Similarity $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ misst ihre Ähnlichkeit. Ein beruhmtes Beispiel: "Koenig" $-$ "Mann" $+$ "Frau" $\\approx$ "Koenigin" — Vektorarithmetik mit Wortbedeutungen!',
      },
      navigation: {
        title: 'Navigation & Robotik',
        desc: 'Navigationssysteme und Roboter nutzen Vektoren für Position und Bewegung. Der Positionsvektor sagt "Wo bin ich?", der Geschwindigkeitsvektor "Wohin und wie schnell?". Vektoraddition berechnet die neue Position nach einer Bewegung.',
      },
      game_physics: {
        title: 'Game Physics & Simulationen',
        desc: 'In Spielen wie Fortnite oder Minecraft wird die Physik mit Vektoren berechnet: $\\vec{v}_{\\text{neu}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Geschwindigkeit, Beschleunigung und Gravitation — alles Vektoren! Ohne Vektorrechnung würde kein Ball richtig fliegen.',
      },
    },
    mistakes: {
      scalar_vs_cross: {
        wrong: 'Skalarprodukt ergibt einen Vektor',
        correct: 'Das Skalarprodukt ergibt eine ZAHL ($\\in \\mathbb{R}$)',
        why: 'Beim Skalarprodukt multiplizierst du komponentenweise und ADDIERST — das Ergebnis ist eine einzelne Zahl, kein Vektor. Verwechsle es nicht mit dem Kreuzprodukt (das ergibt tatsächlich einen Vektor, kommt aber erst später).',
        amir_warning: 'In numpy: np.dot(a, b) gibt eine Zahl zurueck, np.cross(a, b) gibt einen Vektor zurueck. Wenn dein Similarity-Score ploetzlich ein Array statt einer Zahl ist, hast du das falsche Produkt benutzt!',
      },
      length_sum: {
        wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — Komponenten einfach addiert',
        correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — Pythagoras anwenden!',
        why: 'Die Laenge eines Vektors ist der euklidische Abstand vom Ursprung — und der folgt dem Satz des Pythagoras. Einfaches Addieren der Komponenten waere die Manhattan-Distanz (auch nützlich, aber etwas anderes!).',
      },
    },
  },
};
