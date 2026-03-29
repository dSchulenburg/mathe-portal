export const exercises = [
  // ─── BASIS (AFB I) ──────────────────────────────────────────────────────────

  {
    id: 'exp-basis-001',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText:
        'Eine Population verdoppelt sich jede Stunde. Der Wachstumsfaktor betraegt:',
      correctValue: 2,
      tolerance: 0.01,
    },
    hintKeys: [
      'Der Wachstumsfaktor b gibt an, mit welchem Faktor sich der Bestand pro Zeiteinheit multipliziert.',
      'Verdopplung bedeutet: neuer Wert = 2 · alter Wert.',
    ],
    solutionKey:
      'Verdopplung bedeutet, jede Stunde wird der Bestand mit 2 multipliziert. Der Wachstumsfaktor ist b = 2.',
    tags: ['wachstumsfaktor', 'definition'],
  },

  {
    id: 'exp-basis-002',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Berechne den Funktionswert von f(t) = 100 · 2^t fuer t = 3.',
      correctValue: 800,
      tolerance: 0.1,
    },
    hintKeys: [
      'Setze t = 3 ein: f(3) = 100 · 2³',
      '2³ = 2 · 2 · 2 = 8',
    ],
    solutionKey:
      'f(3) = 100 · 2³ = 100 · 8 = 800.',
    tags: ['funktionswert', 'berechnung'],
  },

  {
    id: 'exp-basis-003',
    topicId: '10-exp-wachstum',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Welche der folgenden Tabellen zeigt ein EXPONENTIELLES Wachstum?',
      options: [
        {
          id: 'a',
          text: 'x: 0, 1, 2, 3 | y: 5, 10, 20, 40 (jedes Mal verdoppelt)',
          correct: true,
        },
        {
          id: 'b',
          text: 'x: 0, 1, 2, 3 | y: 5, 10, 15, 20 (jedes Mal +5)',
          correct: false,
        },
        {
          id: 'c',
          text: 'x: 0, 1, 2, 3 | y: 0, 1, 4, 9 (Quadratzahlen)',
          correct: false,
        },
        {
          id: 'd',
          text: 'x: 0, 1, 2, 3 | y: 8, 6, 4, 2 (jedes Mal -2)',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Beim exponentiellen Wachstum wird der Wert jedes Mal mit dem gleichen Faktor multipliziert.',
      'Beim linearen Wachstum wird jedes Mal der gleiche Betrag addiert.',
    ],
    solutionKey:
      'Tabelle a: 5 → 10 → 20 → 40 (Faktor 2). Das ist exponentiell. Tabelle b ist linear (+5). Tabelle c ist polynomial. Tabelle d ist linear (-2).',
    tags: ['lineares-vs-exponentielles-wachstum', 'unterscheidung'],
  },

  {
    id: 'exp-basis-004',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Eine Bakterienkolonie startet mit 200 Bakterien und verdoppelt sich taeglichlich. Nach wie vielen Tagen (Verdopplungszeit) betraegt die Anzahl 1600? Gib die Anzahl der Tage an.',
      correctValue: 3,
      tolerance: 0,
    },
    hintKeys: [
      'Verdopplungszeit: 200 · 2^t = 1600 → 2^t = 8',
      '2^1 = 2, 2^2 = 4, 2^3 = 8',
    ],
    solutionKey:
      '200 · 2^t = 1600 → 2^t = 8 → 2^3 = 8 → t = 3 Tage.',
    tags: ['verdopplungszeit', 'berechnung'],
  },

  {
    id: 'exp-basis-005',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText:
        'Die Funktion f(t) = 500 · 1,5^t beschreibt ein Wachstum. Lies den Startwert (t = 0) ab.',
      correctValue: 500,
      tolerance: 0.01,
    },
    hintKeys: [
      'Setze t = 0 ein. Es gilt: b^0 = 1 fuer jede Basis b.',
    ],
    solutionKey:
      'f(0) = 500 · 1,5^0 = 500 · 1 = 500. Der Startwert ist 500.',
    tags: ['startwert', 'ablesen'],
  },

  // ─── STANDARD (AFB II) ──────────────────────────────────────────────────────

  {
    id: 'exp-std-001',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Loese die Gleichung 3^x = 81 nach x. Nutze Logarithmen.',
      correctValue: 4,
      tolerance: 0.01,
    },
    hintKeys: [
      'Wende auf beiden Seiten den Logarithmus an: x · ln(3) = ln(81)',
      'ln(81) = ln(3^4) = 4 · ln(3)',
    ],
    solutionKey:
      '3^x = 81 = 3^4 → x · ln(3) = 4 · ln(3) → x = 4.',
    tags: ['exponentialgleichung', 'logarithmus'],
  },

  {
    id: 'exp-std-002',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    data: {
      questionText:
        'Eine radioaktive Substanz hat eine Halbwertszeit von 10 Jahren. Wie viel Prozent der Ausgangsmenge sind nach 30 Jahren noch vorhanden? (Gib die ganze Zahl in Prozent an.)',
      correctValue: 12.5,
      tolerance: 0.1,
    },
    hintKeys: [
      'Nach jeder Halbwertszeit halbiert sich die Menge.',
      '30 Jahre = 3 × 10 Jahre → 3 Halbwertszeiten → (1/2)³ der Menge.',
    ],
    solutionKey:
      'Nach 3 Halbwertszeiten: (0,5)³ = 0,125 = 12,5 % der Ausgangsmenge.',
    tags: ['halbwertszeit', 'zerfall', 'prozent'],
  },

  {
    id: 'exp-std-003',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kreativitaet'],
    points: 10,
    timeEstimate: 6,
    data: {
      questionText:
        'Ein Wachstumsprozess startet bei f(0) = 50 und hat nach 2 Zeiteinheiten den Wert f(2) = 200. Bestimme den Wachstumsfaktor b der Funktion f(t) = 50 · b^t.',
      correctValue: 2,
      tolerance: 0.01,
    },
    hintKeys: [
      'Setze die bekannten Werte ein: 50 · b^2 = 200 → b^2 = 4',
      'b muss positiv sein.',
    ],
    solutionKey:
      '50 · b^2 = 200 → b^2 = 4 → b = 2. (b = -2 entfaellt, da b > 0.)',
    tags: ['wachstumsprozess', 'modellieren', 'wachstumsfaktor'],
  },

  {
    id: 'exp-std-004',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Ein Kapital waechst jedes Jahr um 8 %. Mit welchem Wachstumsfaktor b wird gerechnet? (Gib b als Dezimalzahl an.)',
      correctValue: 1.08,
      tolerance: 0.001,
    },
    hintKeys: [
      'Prozentuale Zunahme p % bedeutet: b = 1 + p/100.',
      '8 % Zunahme → b = 1 + 0,08.',
    ],
    solutionKey:
      'Wachstumsfaktor: b = 1 + 8/100 = 1,08.',
    tags: ['prozentuale-zunahme', 'wachstumsfaktor'],
  },

  {
    id: 'exp-std-005',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Loese die Gleichung log₂(x) = 5 nach x. (Gib den exakten ganzzahligen Wert an.)',
      correctValue: 32,
      tolerance: 0,
    },
    hintKeys: [
      'log₂(x) = 5 bedeutet: 2^5 = x',
      '2^5 = 2 · 2 · 2 · 2 · 2',
    ],
    solutionKey:
      'log₂(x) = 5 ⟺ x = 2^5 = 32.',
    tags: ['logarithmus', 'gleichung'],
  },

  // ─── ERWEITERT (AFB III) ────────────────────────────────────────────────────

  {
    id: 'exp-erw-001',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativitaet', 'kommunikation'],
    points: 15,
    timeEstimate: 8,
    contextKey:
      'Um 9:00 Uhr werden in einer Petrischale 500 Bakterien gezaehlt. Um 11:00 Uhr sind es bereits 4500. Die Anzahl waechst exponentiell: N(t) = 500 · b^t (t in Stunden ab 9:00 Uhr).',
    data: {
      questionText:
        'Bestimme den Wachstumsfaktor b und berechne damit, wie viele Bakterien um 13:00 Uhr (t = 4) erwartet werden.',
      correctValue: 40500,
      tolerance: 10,
    },
    hintKeys: [
      'Bestimme b aus: 500 · b^2 = 4500 → b^2 = 9 → b = 3.',
      'Dann N(4) = 500 · 3^4 = 500 · 81.',
    ],
    solutionKey:
      'b^2 = 4500/500 = 9 → b = 3. N(4) = 500 · 3^4 = 500 · 81 = 40 500 Bakterien.',
    tags: ['sachkontext', 'bakterienwachstum', 'modellierung', 'abiturrelevant'],
  },

  {
    id: 'exp-erw-002',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativitaet', 'kritisches-denken'],
    points: 15,
    timeEstimate: 8,
    contextKey:
      'Carbon-14 hat eine Halbwertszeit von 5730 Jahren. Von einem Holzfund wurden noch 60 % des urspruenglichen C-14-Gehalts gemessen.',
    data: {
      questionText:
        'Wie alt ist das Holzstueck in Jahren? Runde auf ganze Jahre. (Nutze: t = T₁/₂ · log(0,6) / log(0,5))',
      correctValue: 4223,
      tolerance: 5,
    },
    hintKeys: [
      'Zerfallsgleichung: N(t) = N₀ · (0,5)^(t/5730) = 0,6 · N₀',
      '(0,5)^(t/5730) = 0,6 → (t/5730) · ln(0,5) = ln(0,6) → t = 5730 · ln(0,6)/ln(0,5)',
    ],
    solutionKey:
      't = 5730 · ln(0,6)/ln(0,5) = 5730 · (-0,5108)/(-0,6931) ≈ 5730 · 0,7369 ≈ 4223 Jahre.',
    tags: ['sachkontext', 'radioaktiver-zerfall', 'halbwertszeit', 'abiturrelevant'],
  },

  {
    id: 'exp-erw-003',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 9,
    contextKey:
      'Bank A bietet 5 % Zinsen pro Jahr (Zinseszins). Bank B bietet 4,8 % pro Halbjahr. Startkapital: 1000 Euro.',
    data: {
      questionText:
        'Welchen Betrag (in Euro, gerundet auf Cent) hat man bei Bank B nach 2 Jahren? (Zinsen werden 2-mal jaehrlich gutgeschrieben.)',
      correctValue: 1206.27,
      tolerance: 0.02,
    },
    hintKeys: [
      'Bank B: 4,8 % pro Halbjahr bedeutet b = 1 + 0,048 = 1,048 pro Halbjahr.',
      'In 2 Jahren gibt es 4 Halbjahre: K = 1000 · 1,048^4.',
    ],
    solutionKey:
      'Bank B: K = 1000 · 1,048^4 = 1000 · 1,20627... ≈ 1206,27 Euro. (Bank A: 1000 · 1,05^2 = 1102,50 Euro — Bank B ist deutlich besser.)',
    tags: ['sachkontext', 'zinseszins', 'vergleich', 'abiturrelevant'],
  },

  {
    id: 'exp-erw-004',
    topicId: '10-exp-wachstum',
    type: 'error-analysis',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 6,
    data: {
      questionText:
        'Ein Schueler loest folgende Aufgabe: "Eine Bakterienkolonie startet mit 200 Bakterien und waechst um 50 % pro Stunde. Wie viele Bakterien gibt es nach 3 Stunden?" Finde den Fehler im Rechenweg:',
      steps: [
        { content: 'Wachstum 50 % pro Stunde → Wachstumsfaktor b', hasError: false },
        {
          content: 'b = 0,5 (weil 50 % → 0,5)',
          hasError: true,
          errorExplanation:
            'Falsch: 50 % Zunahme bedeutet b = 1 + 0,5 = 1,5, nicht 0,5. b = 0,5 waere ein Rueckgang auf 50 %.',
        },
        { content: 'N(t) = 200 · 0,5^t', hasError: false },
        { content: 'N(3) = 200 · 0,5^3 = 200 · 0,125 = 25', hasError: false },
      ],
    },
    hintKeys: [
      'Pruefe, ob der Wachstumsfaktor b korrekt aus dem Prozentwert abgeleitet wurde.',
      'Eine Zunahme von p % ergibt b = 1 + p/100. Eine Abnahme ergibt b = 1 - p/100.',
    ],
    solutionKey:
      'Fehler in Schritt 2: b = 0,5 ist falsch. Bei 50 % Zunahme ist b = 1,5. Richtig: N(3) = 200 · 1,5^3 = 200 · 3,375 = 675 Bakterien.',
    tags: ['fehleranalyse', 'wachstumsfaktor', 'kritisches-denken'],
  },

  {
    id: 'exp-erw-005',
    topicId: '10-exp-wachstum',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativitaet'],
    points: 15,
    timeEstimate: 10,
    contextKey:
      'Die Weltbevoelkerung betrug im Jahr 2000 ca. 6,1 Milliarden Menschen. Das jaehrliche Wachstum betraegt ca. 1,1 %. Modell: B(t) = 6,1 · 1,011^t (t = Jahre ab 2000, B in Mrd.)',
    data: {
      questionText:
        'In welchem Jahr ueberschreitet die Weltbevoelkerung nach diesem Modell die 8-Milliarden-Marke? (Gib die Jahreszahl an. Runde t auf ganze Jahre auf.)',
      correctValue: 2025,
      tolerance: 1,
    },
    hintKeys: [
      '6,1 · 1,011^t = 8 → 1,011^t = 8/6,1 → t · ln(1,011) = ln(8/6,1)',
      't = ln(8/6,1) / ln(1,011) ≈ 24,8 → aufrunden auf 25 → Jahreszahl: 2000 + 25 = 2025.',
    ],
    solutionKey:
      't = ln(8/6,1) / ln(1,011) ≈ 24,8 → aufrunden → t = 25 → Jahr 2025. Probe: B(25) = 6,1 · 1,011^25 ≈ 8,02 Mrd. > 8 Mrd. ✓',
    tags: ['sachkontext', 'bevoelkerungswachstum', 'modellierung', 'kritisches-denken', 'abiturrelevant'],
  },

  // ─── PREMIUM UPGRADE ────────────────────────────
  {
    id: 'exp-standard-006', topicId: '10-exp-wachstum', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 10, timeEstimate: 3,
    data: {
      questionText: 'Ordne jeden Sachkontext der richtigen Wachstumsart zu.',
      pairs: [
        { id: 'a', left: 'Bakterien verdoppeln sich alle 20 min', right: 'Exponentielles Wachstum' },
        { id: 'b', left: 'Radioaktiver Zerfall', right: 'Exponentielle Abnahme' },
        { id: 'c', left: 'Taschengeld: 5 € pro Woche', right: 'Lineares Wachstum' },
        { id: 'd', left: 'Bevölkerung nähert sich Grenze', right: 'Begrenztes Wachstum' },
      ],
    },
    hintKeys: ['Exponentiell: konstanter Faktor. Linear: konstante Differenz. Begrenzt: nähert sich einem Grenzwert.'],
    solutionKey: 'Bakterien = exponentiell, Zerfall = exp. Abnahme, Taschengeld = linear, Bevölkerung = begrenzt.',
    tags: ['drag-match', 'wachstumsarten'],
  },
  {
    id: 'exp-standard-007', topicId: '10-exp-wachstum', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 6,
    contextKey: 'TikTok-Views',
    data: {
      questionText: 'Ein Video hat am ersten Tag 500 Views. Danach verdoppeln sich die Views täglich. Wie viele Views nach 7 Tagen?',
      steps: [
        { instruction: 'Aufgabe: $f(t) = 500 \\cdot 2^t$. Berechne $f(7) = 500 \\cdot 2^7$. Was ist $2^7$?', type: 'numeric-input', expected: 128, tolerance: 0.1, showAnswer: '$2^7 = 128$' },
        { instruction: '$f(7) = 500 \\cdot 128$ = ?', type: 'numeric-input', expected: 64000, tolerance: 1, showAnswer: '64.000 Views nach 7 Tagen' },
      ],
    },
    hintKeys: ['$2^7 = 2 \\cdot 2 \\cdot ... \\cdot 2$ (7-mal). Schrittweise: $2^3 = 8$, $2^4 = 16$, ...'],
    solutionKey: '$f(7) = 500 \\cdot 2^7 = 500 \\cdot 128 = 64.000$ Views.',
    tags: ['step-solver', 'sachkontext', 'verdopplung'],
  },
  {
    id: 'exp-erweitert-006', topicId: '10-exp-wachstum', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 5,
    data: {
      questionText: 'Finde den Fehler. Halbwertszeit: Ein Medikament hat HWZ = 4h. Startdosis 400 mg. Menge nach 12h?',
      steps: [
        { content: 'f(t) = 400 · 0,5^(t/4)', hasError: false },
        { content: 'f(12) = 400 · 0,5^(12/4) = 400 · 0,5^3', hasError: false },
        { content: '= 400 · 1,5 = 600 mg', hasError: true, errorExplanation: 'Fehler: $0{,}5^3 = 0{,}125$, nicht 1,5! Richtig: 400 · 0,125 = 50 mg.' },
      ],
    },
    hintKeys: ['$0{,}5^3 = 0{,}5 \\cdot 0{,}5 \\cdot 0{,}5 = 0{,}125$.'],
    solutionKey: 'f(12) = 400 · 0,5³ = 400 · 0,125 = 50 mg. Nach 3 Halbwertszeiten ist nur 1/8 übrig.',
    tags: ['fehleranalyse', 'halbwertszeit'],
  },
  {
    id: 'exp-basis-006', topicId: '10-exp-wachstum', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    contextKey: 'Pizza abkühlen',
    data: {
      questionText: 'Eine Pizza kühlt ab: Temperatur $T(t) = 20 + 80 \\cdot 0{,}9^t$ (t in Minuten). Wie warm ist sie nach 10 Minuten? (auf ganze °C)',
      correctValue: 48, tolerance: 1,
    },
    hintKeys: ['$0{,}9^{10} \\approx 0{,}349$. $T(10) = 20 + 80 \\cdot 0{,}349$.'],
    solutionKey: '$T(10) = 20 + 80 \\cdot 0{,}9^{10} = 20 + 80 \\cdot 0{,}349 \\approx 20 + 27{,}9 \\approx 48$ °C.',
    tags: ['sachkontext', 'abkuehlung', 'begrenztes-wachstum'],
  },
  {
    id: 'exp-ea-003', topicId: '10-exp-wachstum', type: 'multiple-choice', diffLevel: 'ea',
    competencies: ['kritisches-denken'], points: 20, timeEstimate: 5,
    data: {
      questionText: 'Warum ist exponentielles Wachstum in der Realität nie dauerhaft möglich?',
      options: [
        { id: 'a', text: 'Weil die Mathematik ab gewissen Zahlen nicht mehr funktioniert.', correct: false },
        { id: 'b', text: 'Weil reale Systeme begrenzte Ressourcen haben (Platz, Nahrung, Energie), die das Wachstum irgendwann bremsen.', correct: true },
        { id: 'c', text: 'Weil exponentielles Wachstum nur in der Theorie existiert.', correct: false },
      ],
    },
    hintKeys: ['Denke an Bakterien: Irgendwann ist die Petrischale voll.'],
    solutionKey: 'Reale Ressourcen sind endlich → logistisches Wachstum mit Sättigungsgrenze. Exponentiell gilt nur am Anfang.',
    tags: ['modellkritik', 'logistisch', 'ea'],
  },
];
