export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'binom-basis-001', topicId: '11-binomialverteilung', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welches der folgenden Experimente ist ein Bernoulli-Experiment?',
      options: [
        { id: 'a', text: 'Eine Münze werfen: Ergebnis ist Kopf oder Zahl (zwei gleichmögliche Ausgänge)', correct: true },
        { id: 'b', text: 'Einen Würfel werfen: Ergebnis ist eine Zahl von 1 bis 6', correct: false },
        { id: 'c', text: 'Aus einer Urne eine Kugel ziehen: Farbe ist rot, blau oder grün', correct: false },
        { id: 'd', text: 'Die Außentemperatur messen: Ergebnis ist eine beliebige Zahl', correct: false },
      ],
    },
    hintKeys: ['Ein Bernoulli-Experiment hat genau zwei mögliche Ausgänge: „Treffer" (Erfolg) und „kein Treffer" (Misserfolg).'],
    solutionKey: 'Ein Bernoulli-Experiment hat genau zwei Ausgänge. Münzwurf: Kopf oder Zahl → Bernoulli. Würfel (6 Seiten), drei Farben oder kontinuierliche Messwerte sind keine Bernoulli-Experimente.',
    tags: ['bernoulli', 'definition', 'erkennen'],
  },

  {
    id: 'binom-basis-002', topicId: '11-binomialverteilung', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Berechne den Binomialkoeffizienten $\\binom{6}{2}$.',
      correctValue: 15,
      tolerance: 0,
    },
    hintKeys: [
      '$\\binom{n}{k} = \\frac{n!}{k! \\cdot (n-k)!}$.',
      '$\\binom{6}{2} = \\frac{6!}{2! \\cdot 4!} = \\frac{6 \\cdot 5}{2 \\cdot 1}$.',
    ],
    solutionKey: '$\\binom{6}{2} = \\frac{6!}{2! \\cdot 4!} = \\frac{6 \\cdot 5}{2 \\cdot 1} = \\frac{30}{2} = 15$.',
    tags: ['binomialkoeffizient', 'berechnung', 'formel'],
  },

  {
    id: 'binom-basis-003', topicId: '11-binomialverteilung', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    contextKey: 'AirPods Qualitätskontrolle',
    data: {
      questionText: 'In einer Produktion sind 20 % der AirPods-Gehäuse fehlerhaft ($p = 0{,}2$). Es werden $n = 10$ Gehäuse geprüft. Berechne den Erwartungswert $E(X) = n \\cdot p$.',
      correctValue: 2,
      tolerance: 0,
    },
    hintKeys: ['Formel: $E(X) = n \\cdot p$. Setze $n = 10$ und $p = 0{,}2$ ein.'],
    solutionKey: '$E(X) = n \\cdot p = 10 \\cdot 0{,}2 = 2$. Im Schnitt sind 2 von 10 Gehäusen fehlerhaft.',
    tags: ['erwartungswert', 'formel', 'sachkontext', 'airpods'],
  },

  {
    id: 'binom-basis-004', topicId: '11-binomialverteilung', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Eine Binomialverteilung $B(n, p)$ liegt vor, wenn … (wähle alle zutreffenden Bedingungen)',
      options: [
        { id: 'a', text: 'Das Experiment wird $n$-mal unabhängig wiederholt und jeder Versuch hat genau zwei Ausgänge mit konstanter Erfolgswahrscheinlichkeit $p$', correct: true },
        { id: 'b', text: 'Die Wahrscheinlichkeit ändert sich von Versuch zu Versuch', correct: false },
        { id: 'c', text: 'Die Versuche beeinflussen sich gegenseitig', correct: false },
        { id: 'd', text: 'Es gibt beliebig viele mögliche Ausgänge pro Versuch', correct: false },
      ],
    },
    hintKeys: ['Die vier Bedingungen: (1) feste Anzahl $n$, (2) zwei Ausgänge, (3) konstantes $p$, (4) Unabhängigkeit.'],
    solutionKey: 'Binomialverteilung: $n$ unabhängige Wiederholungen, konstantes $p$, zwei Ausgänge pro Versuch. Alle anderen Optionen verletzen mindestens eine Bedingung.',
    tags: ['binomialverteilung', 'bedingungen', 'definition'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ──────────────────────────────────────

  {
    id: 'binom-standard-001', topicId: '11-binomialverteilung', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 9,
    contextKey: 'Multiple-Choice-Prüfung',
    data: {
      questionText: 'Eine Prüfung hat 8 Multiple-Choice-Fragen, jede mit 4 Antwortmöglichkeiten (genau eine richtig). Ein Schüler rät bei jeder Frage zufällig. Berechne schrittweise $P(X = 3)$.',
      steps: [
        {
          instruction: 'Bestimme $n$ und $p$: Wie viele Fragen hat die Prüfung und wie groß ist die Wahrscheinlichkeit, eine Frage richtig zu raten?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$n = 8$, $p = 0{,}25$', correct: true },
            { id: 'b', text: '$n = 4$, $p = 0{,}5$', correct: false },
            { id: 'c', text: '$n = 8$, $p = 0{,}5$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$n = 8$ Fragen, $p = \\frac{1}{4} = 0{,}25$',
        },
        {
          instruction: 'Berechne $\\binom{8}{3}$.',
          type: 'numeric-input', expected: 56, tolerance: 0,
          showAnswer: '$\\binom{8}{3} = \\frac{8!}{3! \\cdot 5!} = \\frac{8 \\cdot 7 \\cdot 6}{6} = 56$',
        },
        {
          instruction: 'Berechne $P(X = 3) = \\binom{8}{3} \\cdot 0{,}25^3 \\cdot 0{,}75^5$. Nutze $0{,}25^3 = 0{,}015625$ und $0{,}75^5 \\approx 0{,}2373$. Runde auf 4 Dezimalstellen.',
          type: 'numeric-input', expected: 0.2076, tolerance: 0.002,
          showAnswer: '$P(X=3) = 56 \\cdot 0{,}015625 \\cdot 0{,}2373 \\approx 0{,}2076$',
        },
      ],
    },
    hintKeys: [
      'Formel: $P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$.',
      '$\\binom{8}{3} = \\frac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1} = 56$.',
    ],
    solutionKey: '$P(X = 3) = \\binom{8}{3} \\cdot 0{,}25^3 \\cdot 0{,}75^5 = 56 \\cdot 0{,}015625 \\cdot 0{,}2373 \\approx 0{,}2076$.',
    tags: ['step-solver', 'P-X-gleich-k', 'multiple-choice-raten', 'sachkontext'],
  },

  {
    id: 'binom-standard-002', topicId: '11-binomialverteilung', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 7,
    contextKey: 'AirPods Qualitätskontrolle',
    data: {
      questionText: 'AirPods-Produktion: Fehlerquote $p = 0{,}1$. Es werden $n = 5$ Geräte geprüft. Berechne $P(X = 0)$ — also die Wahrscheinlichkeit, dass keines der 5 Geräte fehlerhaft ist. (auf 4 Dezimalstellen)',
      correctValue: 0.5905,
      tolerance: 0.001,
    },
    hintKeys: [
      '$P(X = 0) = \\binom{5}{0} \\cdot 0{,}1^0 \\cdot 0{,}9^5$.',
      '$\\binom{5}{0} = 1$, $0{,}1^0 = 1$. Es bleibt: $0{,}9^5$.',
      '$0{,}9^5 = 0{,}9 \\cdot 0{,}9 \\cdot 0{,}9 \\cdot 0{,}9 \\cdot 0{,}9 \\approx 0{,}5905$.',
    ],
    solutionKey: '$P(X = 0) = 0{,}9^5 \\approx 0{,}5905$. Knapp 59 % Chance, dass keine der 5 AirPods fehlerhaft ist.',
    tags: ['P-X-gleich-k', 'airpods', 'sachkontext', 'qualitätskontrolle'],
  },

  {
    id: 'binom-standard-003', topicId: '11-binomialverteilung', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Entscheide für jeden Sachkontext, ob die Binomialverteilung anwendbar ist oder nicht.',
      pairs: [
        { id: 'a', left: '10 Münzwürfe, Treffer = Kopf', right: 'Binomial passt' },
        { id: 'b', left: 'Kugeln ohne Zurücklegen aus kleiner Urne ziehen', right: 'Binomial passt nicht' },
        { id: 'c', left: '20 AirPods prüfen, jede unabhängig mit p = 0,05 fehlerhaft', right: 'Binomial passt' },
        { id: 'd', left: 'Anzahl der Regentage im nächsten Monat (p ändert sich täglich)', right: 'Binomial passt nicht' },
      ],
    },
    hintKeys: [
      'Binomial: feste $n$, zwei Ausgänge, konstantes $p$, Unabhängigkeit.',
      'Ohne Zurücklegen → $p$ ändert sich → nicht Binomial (sondern hypergeometrisch).',
    ],
    solutionKey: 'Münzwürfe & AirPods = Binomial. Ohne Zurücklegen = hypergeometrisch. Regen mit wechselndem $p$ = Binomial nicht anwendbar.',
    tags: ['drag-match', 'binomial-erkennen', 'sachkontext'],
  },

  {
    id: 'binom-standard-004', topicId: '11-binomialverteilung', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    contextKey: 'Basketball-Freiwürfe',
    data: {
      questionText: 'Ein Basketballspieler trifft jeden Freiwurf mit $p = 0{,}7$. Er wirft $n = 5$ Mal. Berechne den Erwartungswert $E(X)$ und die Standardabweichung $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ (auf 2 Dezimalstellen).',
      correctValue: 1.02,
      tolerance: 0.02,
      unit: 'Treffer (σ)',
    },
    hintKeys: [
      '$E(X) = n \\cdot p = 5 \\cdot 0{,}7 = 3{,}5$.',
      '$\\sigma = \\sqrt{5 \\cdot 0{,}7 \\cdot 0{,}3} = \\sqrt{1{,}05} \\approx 1{,}02$.',
    ],
    solutionKey: '$E(X) = 5 \\cdot 0{,}7 = 3{,}5$ Treffer. $\\sigma = \\sqrt{5 \\cdot 0{,}7 \\cdot 0{,}3} = \\sqrt{1{,}05} \\approx 1{,}02$.',
    tags: ['erwartungswert', 'standardabweichung', 'basketball', 'sachkontext'],
  },

  {
    id: 'binom-standard-005', topicId: '11-binomialverteilung', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: '$X \\sim B(10; 0{,}3)$. Welche Aussage über $P(X \\leq 2)$ ist richtig?',
      options: [
        { id: 'a', text: '$P(X \\leq 2) = P(X=0) + P(X=1) + P(X=2)$', correct: true },
        { id: 'b', text: '$P(X \\leq 2) = P(X=2)$', correct: false },
        { id: 'c', text: '$P(X \\leq 2) = 1 - P(X=2)$', correct: false },
        { id: 'd', text: '$P(X \\leq 2) = P(X=0) \\cdot P(X=1) \\cdot P(X=2)$', correct: false },
      ],
    },
    hintKeys: ['Die kumulative Wahrscheinlichkeit $P(X \\leq k)$ ist die Summe aller Einzelwahrscheinlichkeiten von 0 bis $k$.'],
    solutionKey: '$P(X \\leq 2) = P(X=0) + P(X=1) + P(X=2)$. Kumulative Verteilungsfunktion = Summe aller Einzelwahrscheinlichkeiten bis zum genannten Wert.',
    tags: ['kumulativ', 'verteilungsfunktion', 'definition'],
  },

  // ─── ERWEITERT (AFB III) – 5 Aufgaben ─────────────────────────────────────

  {
    id: 'binom-erweitert-001', topicId: '11-binomialverteilung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 12,
    contextKey: 'Basketball-Freiwürfe',
    data: {
      questionText: 'Ein Basketballspieler trifft mit $p = 0{,}8$. Er wirft $n = 10$ Mal. Berechne $P(X \\geq 8)$ — die Wahrscheinlichkeit, mindestens 8 von 10 Würfen zu treffen.',
      steps: [
        {
          instruction: 'Berechne $P(X = 8) = \\binom{10}{8} \\cdot 0{,}8^8 \\cdot 0{,}2^2$. Erst: $\\binom{10}{8}$ = ?',
          type: 'numeric-input', expected: 45, tolerance: 0,
          showAnswer: '$\\binom{10}{8} = \\binom{10}{2} = 45$',
        },
        {
          instruction: '$0{,}8^8 \\approx 0{,}1678$ und $0{,}2^2 = 0{,}04$. Berechne $P(X = 8)$ auf 4 Dezimalstellen.',
          type: 'numeric-input', expected: 0.3020, tolerance: 0.003,
          showAnswer: '$P(X=8) = 45 \\cdot 0{,}1678 \\cdot 0{,}04 \\approx 0{,}3020$',
        },
        {
          instruction: 'Gegeben: $P(X=9) \\approx 0{,}2684$ und $P(X=10) \\approx 0{,}1074$. Berechne $P(X \\geq 8)$ auf 4 Dezimalstellen.',
          type: 'numeric-input', expected: 0.6778, tolerance: 0.005,
          showAnswer: '$P(X \\geq 8) = 0{,}3020 + 0{,}2684 + 0{,}1074 = 0{,}6778$',
        },
      ],
    },
    hintKeys: [
      '$\\binom{10}{8} = \\binom{10}{2} = \\frac{10 \\cdot 9}{2} = 45$ (Symmetrie des Binomialkoeffizienten).',
      '$P(X \\geq 8) = P(X=8) + P(X=9) + P(X=10)$.',
    ],
    solutionKey: '$P(X \\geq 8) = P(X=8) + P(X=9) + P(X=10) \\approx 0{,}3020 + 0{,}2684 + 0{,}1074 = 0{,}6778$. Mit $\\approx 68\\%$ trifft er mindestens 8 von 10.',
    tags: ['step-solver', 'basketball', 'mindestens', 'kumulativ'],
  },

  {
    id: 'binom-erweitert-002', topicId: '11-binomialverteilung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 12,
    contextKey: 'A/B-Testing',
    data: {
      questionText: 'A/B-Test: Von $n = 20$ Nutzern klicken normalerweise 30 % auf einen Button ($p = 0{,}3$). Mit neuem Design klickten 10 von 20. Berechne $P(X \\geq 10)$ um zu prüfen, ob das auffällig ist.',
      steps: [
        {
          instruction: 'Berechne $E(X)$ und $\\sigma$ für $B(20; 0{,}3)$. Was ist $E(X)$?',
          type: 'numeric-input', expected: 6, tolerance: 0,
          showAnswer: '$E(X) = 20 \\cdot 0{,}3 = 6$',
        },
        {
          instruction: 'Berechne $\\sigma = \\sqrt{20 \\cdot 0{,}3 \\cdot 0{,}7}$ auf 2 Dezimalstellen.',
          type: 'numeric-input', expected: 2.05, tolerance: 0.05,
          showAnswer: '$\\sigma = \\sqrt{4{,}2} \\approx 2{,}05$',
        },
        {
          instruction: 'Das Ergebnis (10 Klicks) liegt $(10 - 6) / 2{,}05 \\approx 1{,}95$ Standardabweichungen über dem Erwartungswert. Ist das auffällig (ja/nein)? Wähle die korrekte Aussage.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Ja, denn 10 liegt fast 2 Standardabweichungen über $E(X) = 6$ — statistisch auffällig.', correct: true },
            { id: 'b', text: 'Nein, denn 10 Klicks ist ein normales Ergebnis für diesen Test.', correct: false },
            { id: 'c', text: 'Man kann nichts sagen, weil $n$ zu klein ist.', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Ja — fast 2 Standardabweichungen vom Erwartungswert sind statistisch auffällig.',
        },
      ],
    },
    hintKeys: [
      '$E(X) = n \\cdot p$, $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$.',
      'Faustregel: mehr als 2σ vom Erwartungswert = statistisch auffällig.',
    ],
    solutionKey: '$E(X) = 6$, $\\sigma \\approx 2{,}05$. 10 Klicks liegen $\\approx 1{,}95\\sigma$ über dem Erwartungswert — das neue Design scheint zu wirken.',
    tags: ['step-solver', 'ab-testing', 'standardabweichung', 'sachkontext'],
  },

  {
    id: 'binom-erweitert-003', topicId: '11-binomialverteilung', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 15, timeEstimate: 8,
    data: {
      questionText: 'Sigma-Regel: $X \\sim B(100; 0{,}4)$. Berechne das Intervall $[E(X) - 2\\sigma;\\; E(X) + 2\\sigma]$ und gib die untere Grenze an.',
      correctValue: 30.2,
      tolerance: 0.2,
    },
    hintKeys: [
      '$E(X) = 100 \\cdot 0{,}4 = 40$.',
      '$\\sigma = \\sqrt{100 \\cdot 0{,}4 \\cdot 0{,}6} = \\sqrt{24} \\approx 4{,}90$.',
      '$E(X) - 2\\sigma = 40 - 2 \\cdot 4{,}90 = 40 - 9{,}8 = 30{,}2$.',
    ],
    solutionKey: '$E(X) = 40$, $\\sigma = \\sqrt{24} \\approx 4{,}90$. Intervall: $[40 - 9{,}8;\\; 40 + 9{,}8] = [30{,}2;\\; 49{,}8]$.',
    tags: ['sigma-regel', 'intervall', 'standardabweichung'],
  },

  {
    id: 'binom-erweitert-004', topicId: '11-binomialverteilung', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 8,
    contextKey: 'Regenwahrscheinlichkeit',
    data: {
      questionText: 'Im Urlaubsort regnet es an jedem Tag unabhängig mit $p = 0{,}2$. Der Urlaub dauert $n = 7$ Tage. Welche Aussage über $P(X = 0)$ (kein Regentag) ist richtig?',
      options: [
        { id: 'a', text: '$P(X = 0) = 0{,}8^7 \\approx 0{,}2097$', correct: true },
        { id: 'b', text: '$P(X = 0) = 1 - 0{,}2 \\cdot 7 = 0{,}6$', correct: false },
        { id: 'c', text: '$P(X = 0) = (1 - 0{,}2)^0 = 1$', correct: false },
        { id: 'd', text: '$P(X = 0) = 0{,}2^7 \\approx 0{,}0000128$', correct: false },
      ],
    },
    hintKeys: [
      '$P(X = 0) = \\binom{7}{0} \\cdot 0{,}2^0 \\cdot 0{,}8^7 = 1 \\cdot 1 \\cdot 0{,}8^7$.',
      '$0{,}8^7 \\approx 0{,}2097$.',
    ],
    solutionKey: '$P(X = 0) = 0{,}8^7 \\approx 0{,}2097$. Nur ca. 21 % Chance auf einen regenfreien Urlaub.',
    tags: ['regen', 'sachkontext', 'P-X-gleich-0', 'urlaub'],
  },

  {
    id: 'binom-erweitert-005', topicId: '11-binomialverteilung', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 7,
    data: {
      questionText: 'Finde den Fehler. Aufgabe: $X \\sim B(5; 0{,}4)$, berechne $P(X = 2)$.',
      steps: [
        { content: '$\\binom{5}{2} = \\frac{5!}{2! \\cdot 3!} = 10$', hasError: false },
        { content: '$P(X = 2) = 10 \\cdot 0{,}4^2 \\cdot 0{,}6^2$', hasError: true, errorExplanation: 'Fehler: Der Exponent beim Misserfolgsterm muss $n - k = 5 - 2 = 3$ sein, nicht 2. Richtig: $0{,}6^3$.' },
        { content: '$P(X = 2) = 10 \\cdot 0{,}16 \\cdot 0{,}36 = 0{,}576$', hasError: true, errorExplanation: 'Folge des Fehlers. Richtig: $P(X=2) = 10 \\cdot 0{,}16 \\cdot 0{,}216 = 0{,}3456$.' },
      ],
    },
    hintKeys: ['$P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$. Der Exponent des Misserfolgsterms ist $n - k$, nicht $k$.'],
    solutionKey: '$P(X = 2) = \\binom{5}{2} \\cdot 0{,}4^2 \\cdot 0{,}6^3 = 10 \\cdot 0{,}16 \\cdot 0{,}216 = 0{,}3456$.',
    tags: ['fehleranalyse', 'formel', 'exponent'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 2 Aufgaben ───────────────────────

  {
    id: 'binom-ea-001', topicId: '11-binomialverteilung', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 15,
    contextKey: 'AirPods Qualitätskontrolle',
    data: {
      questionText: 'Qualitätskontrolle: Ein Lieferant behauptet, maximal 5 % seiner AirPods sind fehlerhaft ($p \\leq 0{,}05$). Du prüfst $n = 20$ Geräte und findest $k = 3$ fehlerhafte. Entscheide nach einer Entscheidungsregel: Ablehnen, falls $P(X \\geq 3) < 0{,}1$.',
      steps: [
        {
          instruction: 'Berechne $P(X = 0) = 0{,}95^{20}$ auf 4 Dezimalstellen. ($0{,}95^{20} \\approx 0{,}3585$)',
          type: 'numeric-input', expected: 0.3585, tolerance: 0.002,
          showAnswer: '$P(X=0) = 0{,}95^{20} \\approx 0{,}3585$',
        },
        {
          instruction: 'Berechne $P(X = 1) = \\binom{20}{1} \\cdot 0{,}05^1 \\cdot 0{,}95^{19}$. $0{,}95^{19} \\approx 0{,}3774$. Runde auf 4 Dezimalstellen.',
          type: 'numeric-input', expected: 0.3774, tolerance: 0.003,
          showAnswer: '$P(X=1) = 20 \\cdot 0{,}05 \\cdot 0{,}3774 \\approx 0{,}3774$',
        },
        {
          instruction: 'Gegeben: $P(X = 2) \\approx 0{,}1887$. Berechne $P(X \\leq 2) = P(X=0) + P(X=1) + P(X=2)$ und leite $P(X \\geq 3) = 1 - P(X \\leq 2)$ ab. Entscheide: Lieferant ablehnen?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$P(X \\geq 3) \\approx 0{,}075 < 0{,}1$ → Lieferant ablehnen', correct: true },
            { id: 'b', text: '$P(X \\geq 3) \\approx 0{,}075 < 0{,}1$ → Lieferant akzeptieren', correct: false },
            { id: 'c', text: '$P(X \\geq 3) \\approx 0{,}925 > 0{,}1$ → Lieferant ablehnen', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$P(X \\leq 2) \\approx 0{,}925 \\Rightarrow P(X \\geq 3) \\approx 0{,}075 < 0{,}1$ → Lieferant ablehnen',
        },
      ],
    },
    hintKeys: [
      '$P(X \\leq 2) = P(X=0) + P(X=1) + P(X=2)$.',
      '$P(X \\geq 3) = 1 - P(X \\leq 2)$.',
      'Entscheidungsregel: ablehnen, falls $P(X \\geq 3) < 0{,}1$.',
    ],
    solutionKey: '$P(X \\geq 3) = 1 - P(X \\leq 2) \\approx 1 - 0{,}925 = 0{,}075 < 0{,}1$ → Lieferant ablehnen. Unter der Annahme $p = 0{,}05$ ist 3+ Defekte zu unwahrscheinlich.',
    tags: ['step-solver', 'entscheidungsregel', 'qualitätskontrolle', 'airpods', 'ea'],
  },

  {
    id: 'binom-ea-002', topicId: '11-binomialverteilung', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 15,
    contextKey: 'Regenwahrscheinlichkeit',
    data: {
      questionText: 'Im Urlaubsort regnet es an jedem Tag unabhängig mit $p = 0{,}3$. Der Urlaub dauert 14 Tage. Analysiere, ob die Sigma-Regel sinnvolle Grenzen für einen „typischen" Urlaub liefert.',
      steps: [
        {
          instruction: 'Berechne $E(X) = n \\cdot p$ für $n = 14$, $p = 0{,}3$.',
          type: 'numeric-input', expected: 4.2, tolerance: 0.01,
          showAnswer: '$E(X) = 14 \\cdot 0{,}3 = 4{,}2$ Regentage',
        },
        {
          instruction: 'Berechne $\\sigma = \\sqrt{14 \\cdot 0{,}3 \\cdot 0{,}7}$ auf 2 Dezimalstellen.',
          type: 'numeric-input', expected: 1.71, tolerance: 0.02,
          showAnswer: '$\\sigma = \\sqrt{2{,}94} \\approx 1{,}71$',
        },
        {
          instruction: 'Das 2-Sigma-Intervall lautet $[E(X) - 2\\sigma;\\; E(X) + 2\\sigma] = [4{,}2 - 3{,}42;\\; 4{,}2 + 3{,}42]$. Welches ganzzahlige Intervall ist das sinnvollste?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$[1;\\; 8]$ Regentage gelten als „typisch"', correct: true },
            { id: 'b', text: '$[0;\\; 14]$ Regentage gelten als „typisch"', correct: false },
            { id: 'c', text: '$[3;\\; 5]$ Regentage gelten als „typisch"', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$[4{,}2 - 3{,}42;\\; 4{,}2 + 3{,}42] = [0{,}78;\\; 7{,}62]$, auf ganze Zahlen: $[1;\\; 7]$ oder $[1;\\; 8]$',
        },
      ],
    },
    hintKeys: [
      '$E(X) = n \\cdot p$, $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$.',
      '2-Sigma-Intervall: $[E(X) - 2\\sigma;\\; E(X) + 2\\sigma]$. Auf ganze Zahlen runden.',
    ],
    solutionKey: '$E(X) = 4{,}2$, $\\sigma \\approx 1{,}71$. 2-Sigma-Intervall: $[0{,}78;\\; 7{,}62]$ → ganzzahlig $[1;\\; 7]$ bzw. $[1;\\; 8]$. Ein Urlaub mit 1–8 Regentagen ist „typisch".',
    tags: ['step-solver', 'sigma-regel', 'regen', 'sachkontext', 'ea'],
  },
];
