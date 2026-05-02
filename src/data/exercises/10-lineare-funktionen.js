export const exercises = [
  // ─── BASIS (AFB I) – 5 Aufgaben ───────────────────────────────────────────

  {
    id: 'lin-basis-001', topicId: '10-lineare-funktionen', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 2,
    data: {
      questionText: 'Gegeben ist $f(x) = 3x - 2$. Wie groß ist die Steigung?',
      options: [
        { id: 'a', text: '$m = -2$', correct: false },
        { id: 'b', text: '$m = 3$', correct: true },
        { id: 'c', text: '$m = 1$', correct: false },
        { id: 'd', text: '$m = -3$', correct: false },
      ],
    },
    hintKeys: ['In der Form $f(x) = m \\cdot x + b$ ist $m$ der Faktor vor $x$.'],
    solutionKey: 'In $f(x) = 3x - 2$ ist $m = 3$ die Steigung und $b = -2$ der y-Achsenabschnitt.',
    tags: ['steigung', 'normalform'],
  },
  {
    id: 'lin-basis-002', topicId: '10-lineare-funktionen', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 2,
    data: {
      questionText: 'Gegeben ist $f(x) = -2x + 4$. Berechne $f(3)$.',
      correctValue: -2,
      tolerance: 0.001,
    },
    hintKeys: ['Setze $x = 3$ in die Funktion ein: $f(3) = -2 \\cdot 3 + 4$.'],
    solutionKey: '$f(3) = -2 \\cdot 3 + 4 = -6 + 4 = -2$.',
    tags: ['funktionswert', 'einsetzen'],
  },
  {
    id: 'lin-basis-003', topicId: '10-lineare-funktionen', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Eine Gerade verläuft durch $P_1(0 \\mid 5)$ und $P_2(2 \\mid 9)$. Berechne die Steigung $m$.',
      correctValue: 2,
      tolerance: 0.001,
    },
    hintKeys: ['Steigungsformel: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Setze die Punkte ein.'],
    solutionKey: '$m = \\frac{9 - 5}{2 - 0} = \\frac{4}{2} = 2$.',
    tags: ['steigung', 'zwei-punkte'],
  },
  {
    id: 'lin-basis-004', topicId: '10-lineare-funktionen', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welche Funktion hat den y-Achsenabschnitt $b = -3$ und die Steigung $m = 4$?',
      options: [
        { id: 'a', text: '$f(x) = -3x + 4$', correct: false },
        { id: 'b', text: '$f(x) = 4x - 3$', correct: true },
        { id: 'c', text: '$f(x) = 4x + 3$', correct: false },
        { id: 'd', text: '$f(x) = 3x - 4$', correct: false },
      ],
    },
    hintKeys: ['Normalform: $f(x) = m \\cdot x + b$. Setze die gegebenen Werte ein.'],
    solutionKey: 'Mit $m = 4$ und $b = -3$: $f(x) = 4 \\cdot x + (-3) = 4x - 3$.',
    tags: ['normalform', 'parameter'],
  },
  {
    id: 'lin-basis-005', topicId: '10-lineare-funktionen', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Bei welchem $x$-Wert hat die Gerade $f(x) = 2x - 6$ ihre Nullstelle?',
      correctValue: 3,
      tolerance: 0.001,
    },
    hintKeys: ['Nullstelle: $f(x) = 0$. Löse $2x - 6 = 0$.'],
    solutionKey: '$2x - 6 = 0 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.',
    tags: ['nullstelle', 'gleichung'],
  },

  // ─── STANDARD (AFB II) – 6 Aufgaben ───────────────────────────────────────

  {
    id: 'lin-std-001', topicId: '10-lineare-funktionen', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 6,
    contextKey: 'Gerade aus zwei Punkten',
    data: {
      questionText: 'Bestimme die Geradengleichung durch $A(-1 \\mid -2)$ und $B(3 \\mid 6)$.',
      steps: [
        {
          instruction: 'Berechne die Steigung $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
          type: 'numeric-input', expected: 2, tolerance: 0.01,
          showAnswer: '$m = \\frac{6 - (-2)}{3 - (-1)} = \\frac{8}{4} = 2$',
        },
        {
          instruction: 'Setze in $y = mx + b$ einen Punkt ein, z.B. $B(3 \\mid 6)$: $6 = 2 \\cdot 3 + b$. Welcher Wert hat $b$?',
          type: 'numeric-input', expected: 0, tolerance: 0.01,
          showAnswer: '$6 = 6 + b \\Rightarrow b = 0$',
        },
        {
          instruction: 'Wie lautet die Geradengleichung?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$y = 2x$', correct: true },
            { id: 'b', text: '$y = 2x - 1$', correct: false },
            { id: 'c', text: '$y = -2x$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$y = 2x$ — die Gerade geht durch den Ursprung.',
        },
      ],
    },
    hintKeys: ['Steigung aus zwei Punkten: $m = \\frac{\\Delta y}{\\Delta x}$. Dann einen Punkt in $y = mx + b$ einsetzen, um $b$ zu bestimmen.'],
    solutionKey: '$m = 2$, $b = 0$, also $f(x) = 2x$.',
    tags: ['step-solver', 'zwei-punkte', 'geradengleichung'],
  },
  {
    id: 'lin-std-002', topicId: '10-lineare-funktionen', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 5,
    contextKey: 'Schnittpunkt zweier Geraden',
    data: {
      questionText: 'Berechne den $x$-Wert des Schnittpunkts der Geraden $g\\colon y = 3x - 4$ und $h\\colon y = -x + 8$.',
      correctValue: 3,
      tolerance: 0.01,
    },
    hintKeys: ['Im Schnittpunkt sind beide $y$-Werte gleich: $3x - 4 = -x + 8$.'],
    solutionKey: '$3x - 4 = -x + 8 \\Rightarrow 4x = 12 \\Rightarrow x = 3$. (Es ist $y = 5$, also $S(3 \\mid 5)$.)',
    tags: ['schnittpunkt', 'gleichungen'],
  },
  {
    id: 'lin-std-003', topicId: '10-lineare-funktionen', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Welche Gerade ist parallel zu $g\\colon y = -\\tfrac{2}{3}x + 5$?',
      options: [
        { id: 'a', text: '$y = \\tfrac{3}{2}x + 1$', correct: false },
        { id: 'b', text: '$y = -\\tfrac{2}{3}x - 4$', correct: true },
        { id: 'c', text: '$y = \\tfrac{2}{3}x + 5$', correct: false },
        { id: 'd', text: '$y = -\\tfrac{3}{2}x$', correct: false },
      ],
    },
    hintKeys: ['Parallele Geraden haben dieselbe Steigung $m$.'],
    solutionKey: '$g$ hat $m = -\\tfrac{2}{3}$. Nur Option b hat dieselbe Steigung.',
    tags: ['parallel', 'steigung'],
  },
  {
    id: 'lin-std-004', topicId: '10-lineare-funktionen', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 5,
    contextKey: 'Handytarif',
    data: {
      questionText: 'Ein Handytarif kostet 9,99 € Grundgebühr plus 0,10 € pro Minute. Wie viele Minuten kannst du in einem Monat telefonieren, wenn dein Budget 19,99 € beträgt? Gib die Anzahl der Minuten an.',
      correctValue: 100,
      tolerance: 0.5,
      unit: 'Minuten',
    },
    hintKeys: ['Setze $K(t) = 9{,}99 + 0{,}10 \\cdot t = 19{,}99$ und löse nach $t$.'],
    solutionKey: '$0{,}10 \\cdot t = 19{,}99 - 9{,}99 = 10{,}00 \\Rightarrow t = 100$ Minuten.',
    tags: ['sachkontext', 'handytarif', 'gleichung'],
  },
  {
    id: 'lin-std-005', topicId: '10-lineare-funktionen', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Welche Gerade verläuft durch $P(1 \\mid 4)$ mit Steigung $m = -2$?',
      options: [
        { id: 'a', text: '$y = -2x + 6$', correct: true },
        { id: 'b', text: '$y = -2x + 4$', correct: false },
        { id: 'c', text: '$y = -2x - 2$', correct: false },
        { id: 'd', text: '$y = 2x + 2$', correct: false },
      ],
    },
    hintKeys: ['Punkt-Steigungs-Form: $y - y_0 = m(x - x_0)$. Setze $P(1 \\mid 4)$ und $m = -2$ ein.'],
    solutionKey: '$y - 4 = -2(x - 1) \\Rightarrow y = -2x + 2 + 4 = -2x + 6$.',
    tags: ['punkt-steigungs-form'],
  },
  {
    id: 'lin-std-006', topicId: '10-lineare-funktionen', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Ordne jeder Geraden ihre Steigung zu.',
      pairs: [
        { id: 'a', left: '$y = 5x + 2$', right: '$m = 5$' },
        { id: 'b', left: '$2y = 6x - 4$', right: '$m = 3$' },
        { id: 'c', left: '$y = 7$', right: '$m = 0$' },
        { id: 'd', left: '$y = -\\tfrac{1}{2}x$', right: '$m = -\\tfrac{1}{2}$' },
      ],
    },
    hintKeys: ['Forme zuerst auf $y = mx + b$ um (durch 2 teilen bei $2y = \\ldots$).'],
    solutionKey: 'Konstante Funktionen haben Steigung 0. Bei $2y = 6x - 4$ teile durch 2: $y = 3x - 2$.',
    tags: ['drag-match', 'steigung-erkennen'],
  },

  // ─── ERWEITERT (AFB III) – 4 Aufgaben ─────────────────────────────────────

  {
    id: 'lin-erw-001', topicId: '10-lineare-funktionen', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 8,
    contextKey: 'Tarif-Vergleich',
    data: {
      questionText: 'Tarif A: 5 € Grundgebühr + 0,15 €/Minute. Tarif B: 12 € Grundgebühr + 0,05 €/Minute. Ab wie vielen Minuten lohnt sich Tarif B?',
      steps: [
        {
          instruction: 'Stelle die Kostenfunktionen auf. Welche Gleichung beschreibt Tarif B?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$K_B(t) = 12 + 0{,}05 t$', correct: true },
            { id: 'b', text: '$K_B(t) = 0{,}05 t - 12$', correct: false },
            { id: 'c', text: '$K_B(t) = 12 t + 0{,}05$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$K_B(t) = 12 + 0{,}05 \\cdot t$',
        },
        {
          instruction: 'Tarif B lohnt sich, wenn $K_B < K_A$. Setze beide gleich: $5 + 0{,}15 t = 12 + 0{,}05 t$. Welcher Wert von $t$ ist die Grenze?',
          type: 'numeric-input', expected: 70, tolerance: 0.5,
          unit: 'Minuten',
          showAnswer: '$0{,}10 t = 7 \\Rightarrow t = 70$ Minuten.',
        },
        {
          instruction: 'Ab welcher Minute lohnt sich Tarif B (also wann ist B günstiger)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'ab mehr als 70 Minuten', correct: true },
            { id: 'b', text: 'ab weniger als 70 Minuten', correct: false },
            { id: 'c', text: 'B ist nie günstiger', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'B hat höhere Grundgebühr, aber niedrigere pro-Minute-Kosten — lohnt sich bei mehr Telefonaten, also $t > 70$.',
        },
      ],
    },
    hintKeys: [
      'Beide Tarife als $K(t) = b + m \\cdot t$ ansetzen.',
      'Schnittpunkt der Geraden bestimmt die Wechsel-Schwelle.',
    ],
    solutionKey: 'Schnittpunkt bei $t = 70$ Minuten. Ab mehr als 70 Min/Monat ist Tarif B günstiger.',
    tags: ['step-solver', 'sachkontext', 'tarif-vergleich'],
  },
  {
    id: 'lin-erw-002', topicId: '10-lineare-funktionen', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 15, timeEstimate: 7,
    data: {
      questionText: 'Eine Gerade $g$ hat die Steigung $m = \\tfrac{3}{4}$. Eine zweite Gerade $h$ steht senkrecht auf $g$. Welche Steigung hat $h$? (Gib als Dezimalzahl an.)',
      correctValue: -1.333,
      tolerance: 0.005,
    },
    hintKeys: ['Senkrechte Geraden: $m_g \\cdot m_h = -1$, also $m_h = -\\tfrac{1}{m_g}$.'],
    solutionKey: '$m_h = -\\tfrac{1}{3/4} = -\\tfrac{4}{3} \\approx -1{,}333$.',
    tags: ['senkrecht', 'steigung'],
  },
  {
    id: 'lin-erw-003', topicId: '10-lineare-funktionen', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 6,
    data: {
      questionText: 'Mia bestimmt die Geradengleichung durch $A(2 \\mid 3)$ und $B(5 \\mid 9)$. Finde den Fehler.',
      steps: [
        { content: '$m = \\frac{5 - 2}{9 - 3} = \\frac{3}{6} = 0{,}5$', hasError: true,
          errorExplanation: 'Mia hat $\\Delta x$ und $\\Delta y$ vertauscht. Richtig: $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 3}{5 - 2} = \\frac{6}{3} = 2$.' },
        { content: 'Mit $A$: $3 = 0{,}5 \\cdot 2 + b \\Rightarrow b = 2$', hasError: true,
          errorExplanation: 'Folge des falschen $m$. Mit dem korrekten $m = 2$: $3 = 2 \\cdot 2 + b \\Rightarrow b = -1$.' },
        { content: '$y = 0{,}5x + 2$', hasError: true,
          errorExplanation: 'Richtige Lösung: $y = 2x - 1$.' },
      ],
    },
    hintKeys: ['Steigung: $m = \\frac{\\Delta y}{\\Delta x}$ — y-Differenz oben, x-Differenz unten!'],
    solutionKey: 'Schritt 1: Mia hat $\\Delta x$ und $\\Delta y$ vertauscht. Richtig: $m = 2$, $b = -1$, $f(x) = 2x - 1$.',
    tags: ['fehleranalyse', 'steigungsformel'],
  },
  {
    id: 'lin-erw-004', topicId: '10-lineare-funktionen', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kreativität', 'kritisches-denken'], points: 15, timeEstimate: 8,
    contextKey: 'Skateboard-Halfpipe',
    data: {
      questionText: 'Eine schiefe Ebene fällt 3 m auf 4 m horizontaler Strecke. Beschreibe die Höhe $h$ als lineare Funktion der horizontalen Position $x$ (in m), wenn der höchste Punkt bei $h = 3$ liegt: $h(x) = m \\cdot x + b$. Was ist $m$?',
      correctValue: -0.75,
      tolerance: 0.01,
    },
    hintKeys: ['Bei $x = 0$ ist $h = 3$, bei $x = 4$ ist $h = 0$. Berechne $m$.'],
    solutionKey: '$m = \\frac{0 - 3}{4 - 0} = -\\tfrac{3}{4} = -0{,}75$. Damit: $h(x) = -0{,}75 \\cdot x + 3$.',
    tags: ['sachkontext', 'schiefe-ebene', 'steigung-physik'],
  },
];
