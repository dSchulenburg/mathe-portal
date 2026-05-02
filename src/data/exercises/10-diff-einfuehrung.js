export const exercises = [
  // ─────────────────────────────────────────────
  // BASIS (AFB I) — 5 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'diff-basis-001',
    topicId: '10-diff-einfuehrung',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Berechne die mittlere Änderungsrate von f(x) = x² auf dem Intervall [1; 3]. ' +
        'Das Ergebnis ist Δy/Δx.',
      correctValue: 4,
      tolerance: 0.01,
    },
    hintKeys: [
      'Die mittlere Änderungsrate ist Δy/Δx = (f(3) − f(1)) / (3 − 1).',
      'f(1) = 1² = 1 und f(3) = 3² = 9.',
    ],
    solutionKey:
      'Δy/Δx = (f(3) − f(1)) / (3 − 1) = (9 − 1) / 2 = 8 / 2 = 4. ' +
      'Die mittlere Änderungsrate betraegt 4.',
    tags: ['mittlere-änderungsrate', 'differenzenquotient'],
  },

  {
    id: 'diff-basis-002',
    topicId: '10-diff-einfuehrung',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Ein Funktionsgraph ist gegeben. Die Sekante durch die Punkte P(1|1) und Q(3|9) ' +
        'hat die Steigung …',
      options: [
        { id: 'a', text: '4', correct: true },
        { id: 'b', text: '8', correct: false },
        { id: 'c', text: '2', correct: false },
        { id: 'd', text: '10', correct: false },
      ],
    },
    hintKeys: [
      'Die Steigung der Sekante berechnet sich als Δy/Δx = (y₂ − y₁) / (x₂ − x₁).',
    ],
    solutionKey:
      'm = (9 − 1) / (3 − 1) = 8 / 2 = 4. Die Sekante hat die Steigung 4.',
    tags: ['sekante', 'steigung', 'mittlere-änderungsrate'],
  },

  {
    id: 'diff-basis-003',
    topicId: '10-diff-einfuehrung',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText:
        'Was beschreibt die momentane Änderungsrate einer Funktion an der Stelle x₀?',
      options: [
        { id: 'a', text: 'Die Steigung der Tangente an den Graphen im Punkt x₀', correct: true },
        { id: 'b', text: 'Der Durchschnitt der Funktionswerte auf einem Intervall', correct: false },
        { id: 'c', text: 'Die Steigung der Sekante durch zwei verschiedene Punkte', correct: false },
        { id: 'd', text: 'Der Abstand zwischen zwei Punkten auf dem Graphen', correct: false },
      ],
    },
    hintKeys: [
      'Die momentane Änderungsrate gibt die Steilheit des Graphen genau an einer Stelle an.',
      'Denke an die Tangente als Grenzfall der Sekante.',
    ],
    solutionKey:
      'Die momentane Änderungsrate entspricht der Steigung der Tangente an den Graphen ' +
      'im Punkt x₀. Sie ist der Grenzwert des Differenzenquotienten für h → 0.',
    tags: ['momentane-änderungsrate', 'tangente', 'grundbegriffe'],
  },

  {
    id: 'diff-basis-004',
    topicId: '10-diff-einfuehrung',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Berechne den Differenzenquotienten von f(x) = 2x + 1 für ' +
        'x₀ = 3 und h = 1: [f(x₀ + h) − f(x₀)] / h.',
      correctValue: 2,
      tolerance: 0.01,
    },
    hintKeys: [
      'f(x) = 2x + 1. Berechne f(4) und f(3) getrennt.',
      '[f(4) − f(3)] / 1 = ?',
    ],
    solutionKey:
      'f(3) = 2·3 + 1 = 7. f(4) = 2·4 + 1 = 9. ' +
      'Differenzenquotient = (9 − 7) / 1 = 2. ' +
      '(Bei linearen Funktionen entspricht er der konstanten Steigung.)',
    tags: ['differenzenquotient', 'lineare-funktion'],
  },

  {
    id: 'diff-basis-005',
    topicId: '10-diff-einfuehrung',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Bestimme die Steigung der Tangente an f(x) = x² an der Stelle x = 2 ' +
        'mithilfe des Grenzwertes des Differenzenquotienten (Ergebnis: f′(2)).',
      correctValue: 4,
      tolerance: 0.01,
    },
    hintKeys: [
      'Berechne [f(2 + h) − f(2)] / h = [(2+h)² − 4] / h und vereinfache.',
      'Kürze h heraus und bilde dann den Grenzwert für h → 0.',
    ],
    solutionKey:
      '[(2+h)² − 4] / h = [4 + 4h + h² − 4] / h = (4h + h²) / h = 4 + h. ' +
      'Für h → 0 ergibt sich f′(2) = 4. Die Tangentensteigung betraegt 4.',
    tags: ['tangente', 'grenzwert', 'parabel'],
  },

  // ─────────────────────────────────────────────
  // STANDARD (AFB II) — 5 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'diff-std-001',
    topicId: '10-diff-einfuehrung',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    data: {
      questionText:
        'Berechne den Grenzwert des Differenzenquotienten für f(x) = x² ' +
        'an einer beliebigen Stelle x (d. h. bestimme f′(x)). ' +
        'An der Stelle x = 3 ergibt die Ableitung den Wert …',
      correctValue: 6,
      tolerance: 0.01,
    },
    hintKeys: [
      '[f(x + h) − f(x)] / h = [(x+h)² − x²] / h. Multipliziere (x+h)² aus.',
      'Nach dem Kürzen von h bleibt 2x + h. Grenzwert für h → 0?',
    ],
    solutionKey:
      '[(x+h)² − x²] / h = (x² + 2xh + h² − x²) / h = (2xh + h²) / h = 2x + h. ' +
      'Für h → 0: f′(x) = 2x. An der Stelle x = 3: f′(3) = 6.',
    tags: ['grenzwert', 'differenzenquotient', 'ableitung', 'parabel'],
  },

  {
    id: 'diff-std-002',
    topicId: '10-diff-einfuehrung',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Bestimme die Ableitung f′(x) von f(x) = 3x² mithilfe des Grenzwertverfahrens. ' +
        'Welchen Wert hat f′(2)?',
      correctValue: 12,
      tolerance: 0.01,
    },
    hintKeys: [
      '[f(x + h) − f(x)] / h = [3(x+h)² − 3x²] / h. Klammer die 3 aus.',
      'f′(x) = 6x. Setze x = 2 ein.',
    ],
    solutionKey:
      '[3(x+h)² − 3x²] / h = 3 · [(x+h)² − x²] / h = 3 · (2x + h). ' +
      'Grenzwert für h → 0: f′(x) = 6x. f′(2) = 6 · 2 = 12.',
    tags: ['ableitung', 'potenzregel', 'grenzwert'],
  },

  {
    id: 'diff-std-003',
    topicId: '10-diff-einfuehrung',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 7,
    data: {
      questionText:
        'Berechne die Steigung der Tangente an f(x) = x³ an der Stelle x = 1. ' +
        '(Tipp: Berechne den Grenzwert des Differenzenquotienten für h → 0.)',
      correctValue: 3,
      tolerance: 0.01,
    },
    hintKeys: [
      '[(1+h)³ − 1] / h. Entwickle (1+h)³ = 1 + 3h + 3h² + h³.',
      'Kürze h und bilde den Grenzwert für h → 0.',
    ],
    solutionKey:
      '[(1+h)³ − 1³] / h = (1 + 3h + 3h² + h³ − 1) / h = (3h + 3h² + h³) / h ' +
      '= 3 + 3h + h². Für h → 0: f′(1) = 3.',
    tags: ['tangente', 'kubische-funktion', 'grenzwert'],
  },

  {
    id: 'diff-std-004',
    topicId: '10-diff-einfuehrung',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 10,
    timeEstimate: 4,
    data: {
      questionText:
        'Welche der folgenden Aussagen zum Unterschied zwischen mittlerer und ' +
        'momentaner Änderungsrate ist KORREKT?',
      options: [
        {
          id: 'a',
          text:
            'Die mittlere Änderungsrate bezieht sich auf ein Intervall [x₀; x₁], ' +
            'die momentane auf einen einzelnen Punkt x₀.',
          correct: true,
        },
        {
          id: 'b',
          text: 'Beide Änderungsraten liefern stets denselben Wert.',
          correct: false,
        },
        {
          id: 'c',
          text:
            'Die momentane Änderungsrate laesst sich direkt aus der Funktionsgleichung ' +
            'ohne Grenzwertbetrachtung ablesen.',
          correct: false,
        },
        {
          id: 'd',
          text:
            'Die mittlere Änderungsrate ist immer größer als die momentane Änderungsrate.',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Die mittlere Änderungsrate = Steigung der Sekante (über ein Intervall).',
      'Die momentane Änderungsrate = Grenzwert des Differenzenquotienten für h → 0.',
    ],
    solutionKey:
      'Die mittlere Änderungsrate beschreibt den Durchschnitt über ein Intervall ' +
      '(Sekantensteigung). Die momentane Änderungsrate ist der Grenzwert für h → 0 ' +
      'und gibt die Steigung an einem einzigen Punkt an (Tangentensteigung).',
    tags: ['mittlere-änderungsrate', 'momentane-änderungsrate', 'vergleich'],
  },

  {
    id: 'diff-std-005',
    topicId: '10-diff-einfuehrung',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 7,
    data: {
      questionText:
        'Stelle die Tangentengleichung an f(x) = x² im Punkt P(3|9) auf. ' +
        'Welchen y-Achsenabschnitt hat die Tangente? (t(x) = mx + b; gesucht: b)',
      correctValue: -9,
      tolerance: 0.01,
    },
    hintKeys: [
      'Berechne zuerst die Tangentensteigung: f′(x) = 2x → f′(3) = 6.',
      'Nutze die Punkt-Steigungs-Form: t(x) = f′(x₀) · (x − x₀) + f(x₀).',
    ],
    solutionKey:
      'f′(3) = 6. Tangentengleichung: t(x) = 6(x − 3) + 9 = 6x − 18 + 9 = 6x − 9. ' +
      'Der y-Achsenabschnitt ist b = −9.',
    tags: ['tangentengleichung', 'punkt-steigungs-form', 'parabel'],
  },

  // ─────────────────────────────────────────────
  // ERWEITERT (AFB III) — 5 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'diff-erw-001',
    topicId: '10-diff-einfuehrung',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 8,
    contextKey: 'Sachkontext: Autofahrt',
    data: {
      questionText:
        'Ein Auto legt in t Sekunden den Weg s(t) = 2t² Meter zurueck. ' +
        'Berechne die Momentangeschwindigkeit (in m/s) zur Zeit t = 3 s, ' +
        'indem du s′(3) bestimmst.',
      correctValue: 12,
      tolerance: 0.01,
      unit: 'm/s',
    },
    hintKeys: [
      'Die Geschwindigkeit ist die Ableitung des Weges nach der Zeit: v(t) = s′(t).',
      'Berechne den Grenzwert von [s(3+h) − s(3)] / h für h → 0.',
    ],
    solutionKey:
      '[s(3+h) − s(3)] / h = [2(3+h)² − 2·9] / h = [2(9 + 6h + h²) − 18] / h ' +
      '= (12h + 2h²) / h = 12 + 2h. Grenzwert für h → 0: v(3) = s′(3) = 12 m/s.',
    tags: ['sachkontext', 'geschwindigkeit', 'ableitung', 'physik'],
  },

  {
    id: 'diff-erw-002',
    topicId: '10-diff-einfuehrung',
    type: 'error-analysis',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 8,
    data: {
      questionText:
        'Schuelerin Anna berechnet den Differenzenquotienten für f(x) = x² ' +
        'an der Stelle x₀ = 2 mit Schrittweite h = 1. Analysiere ihre Rechnung:',
      steps: [
        {
          content: 'f(x₀ + h) = f(2 + 1) = f(3) = 3² = 9',
          hasError: false,
        },
        {
          content: 'f(x₀) = f(2) = 2² = 4',
          hasError: false,
        },
        {
          content:
            'Differenzenquotient = [f(x₀ + h) + f(x₀)] / h = (9 + 4) / 1 = 13',
          hasError: true,
          errorExplanation:
            'Im Zähler muss f(x₀ + h) MINUS f(x₀) stehen, nicht Plus. ' +
            'Korrekt: [f(3) − f(2)] / 1 = (9 − 4) / 1 = 5.',
        },
        {
          content: 'Mittlere Änderungsrate ≈ 13',
          hasError: true,
          errorExplanation:
            'Durch den Vorzeichenfehler in Schritt 3 ist das Ergebnis falsch. ' +
            'Die korrekte mittlere Änderungsrate betraegt 5.',
        },
      ],
    },
    hintKeys: [
      'Prüffe das Vorzeichen im Zähler des Differenzenquotienten genau.',
      'Differenzenquotient = [f(x₀ + h) − f(x₀)] / h (Minus, nicht Plus!)',
    ],
    solutionKey:
      'In Schritt 3 steht faelschlicherweise ein Pluszeichen. ' +
      'Korrekt ist [f(3) − f(2)] / 1 = 5. Die mittlere Änderungsrate betraegt 5.',
    tags: ['fehleranalyse', 'differenzenquotient', 'vorzeichenfehler'],
  },

  {
    id: 'diff-erw-003',
    topicId: '10-diff-einfuehrung',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 6,
    contextKey: 'Sachkontext: Bergwanderung',
    data: {
      questionText:
        'Ein Wanderweg hat das Höhenprofilprofil h(x) = −x² + 4x (in Metern, ' +
        'x in Kilometern ab dem Start). An welcher Stelle x hat der Weg die Steigung 0 ' +
        '(d. h. der höchste Punkt der Tour)?',
      options: [
        { id: 'a', text: 'x = 2 km', correct: true },
        { id: 'b', text: 'x = 4 km', correct: false },
        { id: 'c', text: 'x = 0 km', correct: false },
        { id: 'd', text: 'x = 1 km', correct: false },
      ],
    },
    hintKeys: [
      'Bilde h′(x) und setze h′(x) = 0.',
      'h′(x) = −2x + 4. Löse die Gleichung nach x auf.',
    ],
    solutionKey:
      'h′(x) = −2x + 4. Steigung = 0: −2x + 4 = 0 → x = 2. ' +
      'An der Stelle x = 2 km ist der Höhenweg maximal (Steigung = 0).',
    tags: ['sachkontext', 'nullstelle-ableitung', 'extremum', 'bergwanderung'],
  },

  {
    id: 'diff-erw-004',
    topicId: '10-diff-einfuehrung',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 7,
    data: {
      questionText:
        'f(x) = x² ist gegeben. Welcher der folgenden Graphen könnte die ' +
        'Ableitungsfunktion f′(x) darstellen?',
      options: [
        {
          id: 'a',
          text: 'Eine Gerade durch den Ursprung mit positiver Steigung (z. B. g(x) = 2x)',
          correct: true,
        },
        {
          id: 'b',
          text: 'Eine nach oben geöffnete Parabel',
          correct: false,
        },
        {
          id: 'c',
          text: 'Eine waagerechte Gerade (konstante Funktion)',
          correct: false,
        },
        {
          id: 'd',
          text: 'Ein U-foermiger Graph mit Scheitel bei (0|−1)',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Die Ableitung von f(x) = x² ist f′(x) = 2x. Was für eine Funktion ist das?',
      'f′(x) = 2x ist eine lineare Funktion durch den Ursprung.',
    ],
    solutionKey:
      'f′(x) = 2x ist eine lineare Funktion (Gerade durch den Ursprung mit Steigung 2). ' +
      'Die Ableitung einer quadratischen Funktion ist immer eine lineare Funktion.',
    tags: ['graphische-interpretation', 'ableitung', 'lineare-funktion'],
  },

  {
    id: 'diff-erw-005',
    topicId: '10-diff-einfuehrung',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 9,
    contextKey: 'Sachkontext: Beschleunigung',
    data: {
      questionText:
        'Ein Fahrzeug hat zum Zeitpunkt t die Geschwindigkeit v(t) = 3t² m/s. ' +
        'Die Beschleunigung a(t) ist die Ableitung der Geschwindigkeit. ' +
        'Berechne die Beschleunigung (in m/s²) zum Zeitpunkt t = 2 s.',
      correctValue: 12,
      tolerance: 0.01,
      unit: 'm/s²',
    },
    hintKeys: [
      'a(t) = v′(t). Bestimme v′(t) mithilfe des Grenzwertverfahrens oder der Potenzregel.',
      'v(t) = 3t² → v′(t) = 6t. Setze t = 2 ein.',
    ],
    solutionKey:
      '[v(t+h) − v(t)] / h = [3(t+h)² − 3t²] / h = 3(2t + h). ' +
      'Grenzwert für h → 0: v′(t) = 6t. ' +
      'a(2) = v′(2) = 6 · 2 = 12 m/s².',
    tags: ['sachkontext', 'beschleunigung', 'zweite-ableitung', 'physik'],
  },

  // ─── PREMIUM UPGRADE ────────────────────────────
  {
    id: 'diff-standard-006', topicId: '10-diff-einfuehrung', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 10, timeEstimate: 3,
    data: {
      questionText: 'Ordne jeder Funktion ihre Ableitung zu.',
      pairs: [
        { id: 'a', left: '$f(x) = x^3$', right: "$f'(x) = 3x^2$" },
        { id: 'b', left: '$f(x) = x^2$', right: "$f'(x) = 2x$" },
        { id: 'c', left: '$f(x) = 5x$', right: "$f'(x) = 5$" },
        { id: 'd', left: '$f(x) = 7$', right: "$f'(x) = 0$" },
      ],
    },
    hintKeys: ['Potenzregel: $(x^n)\\prime = n \\cdot x^{n-1}$. Konstante → Ableitung = 0.'],
    solutionKey: '$(x^3)\\prime = 3x^2$, $(x^2)\\prime = 2x$, $(5x)\\prime = 5$, $(7)\\prime = 0$.',
    tags: ['drag-match', 'potenzregel', 'ableitungen'],
  },
  {
    id: 'diff-standard-007', topicId: '10-diff-einfuehrung', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 5,
    contextKey: 'Autofahrt',
    data: {
      questionText: 'Die Strecke eines Autos ist $s(t) = 2t^2 + 10t$ (s in m, t in s). Wie schnell fährt es nach 3 Sekunden?',
      steps: [
        { instruction: 'Geschwindigkeit = Ableitung der Strecke. $s\\prime(t) = $ ?', type: 'multiple-choice',
          options: [{ id: 'a', text: '$4t + 10$' }, { id: 'b', text: '$2t + 10$' }, { id: 'c', text: '$4t^2 + 10$' }],
          correctId: 'a', showAnswer: "$s'(t) = 4t + 10$ (Potenzregel)" },
        { instruction: '$v(3) = s\\prime(3) = 4 \\cdot 3 + 10$ = ?', type: 'numeric-input',
          expected: 22, tolerance: 0.01, showAnswer: '$v(3) = 22$ m/s ≈ 79 km/h' },
      ],
    },
    hintKeys: ['$(2t^2)\\prime = 4t$, $(10t)\\prime = 10$.'],
    solutionKey: "$s'(t) = 4t + 10$. $v(3) = 22$ m/s.",
    tags: ['step-solver', 'sachkontext', 'geschwindigkeit'],
  },
  {
    id: 'diff-erweitert-006', topicId: '10-diff-einfuehrung', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 5,
    data: {
      questionText: 'Finde den Fehler bei der Ableitung von $f(x) = 3x^4 - 2x^2 + x$.',
      steps: [
        { content: "f'(x) = 3 · 4x³ - 2 · 2x + 1", hasError: false },
        { content: "= 12x³ - 4x + 1", hasError: false },
        { content: "f''(x) = 12 · 3x² - 4", hasError: false },
        { content: "= 36x² - 4 + 1 = 36x² - 3", hasError: true, errorExplanation: "Fehler: Die +1 aus f'(x) ist eine Konstante, deren Ableitung 0 ist (nicht +1). Richtig: f''(x) = 36x² - 4." },
      ],
    },
    hintKeys: ['Die Ableitung einer Konstanten ist immer 0.'],
    solutionKey: "$f''(x) = 36x^2 - 4$. Die Konstante +1 in $f'(x)$ fällt weg.",
    tags: ['fehleranalyse', 'zweite-ableitung'],
  },
  {
    id: 'diff-basis-006', topicId: '10-diff-einfuehrung', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    contextKey: 'Ballwurf',
    data: {
      questionText: 'Ein Ball wird hochgeworfen: $h(t) = -5t^2 + 20t$ (h in m). Nach wie vielen Sekunden ist er am höchsten? (= wo $h\\prime(t) = 0$)',
      correctValue: 2, tolerance: 0.01,
    },
    hintKeys: ["$h'(t) = -10t + 20$. Setze $h'(t) = 0$ und löse nach t."],
    solutionKey: "$h'(t) = -10t + 20 = 0 \\Rightarrow t = 2$ s. Maximale Höhe: $h(2) = -20 + 40 = 20$ m.",
    tags: ['sachkontext', 'maximum', 'ballwurf'],
  },
  {
    id: 'diff-ea-004', topicId: '10-diff-einfuehrung', type: 'step-solver', diffLevel: 'ea',
    competencies: ['kreativität', 'kritisches-denken'], points: 20, timeEstimate: 7,
    contextKey: 'Wasserstand-Änderungsrate',
    data: {
      questionText: 'Der Wasserstand eines Sees folgt $W(t) = 0{,}1t^3 - 1{,}5t^2 + 6t + 10$ (m über NN, t in Monaten). Wann steigt der Pegel am schnellsten?',
      steps: [
        { instruction: "$W'(t) = 0{,}3t^2 - 3t + 6$. Das Maximum der Änderungsrate ist wo $W''(t) = 0$. Berechne $W''(t)$.", type: 'multiple-choice',
          options: [{ id: 'a', text: '$0{,}6t - 3$' }, { id: 'b', text: '$0{,}3t - 3$' }, { id: 'c', text: '$0{,}6t^2 - 3$' }],
          correctId: 'a', showAnswer: "$W''(t) = 0{,}6t - 3$" },
        { instruction: '$0{,}6t - 3 = 0$. t = ?', type: 'numeric-input', expected: 5, tolerance: 0.01, showAnswer: '$t = 5$ Monate' },
      ],
    },
    hintKeys: ['Die Änderungsrate steigt am schnellsten beim Wendepunkt der Funktion.', "Wendepunkt: $W''(t) = 0$."],
    solutionKey: "$W''(t) = 0{,}6t - 3 = 0 \\Rightarrow t = 5$. Der Pegel steigt im 5. Monat am schnellsten.",
    tags: ['step-solver', 'sachkontext', 'wendepunkt', 'ea'],
  },
];
