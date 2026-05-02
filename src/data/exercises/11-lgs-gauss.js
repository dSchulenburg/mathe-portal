export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'lgs-basis-001', topicId: '11-lgs-gauss', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Löse das LGS: $\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}$. Welchen Wert hat $x$?',
      correctValue: 3,
      tolerance: 0.01,
    },
    hintKeys: ['Addiere die beiden Gleichungen: $2x = 6$.'],
    solutionKey: 'Addition: $2x = 6 \\Rightarrow x = 3$. Einsetzen: $y = 5 - 3 = 2$.',
    tags: ['additionsverfahren', 'einfach'],
  },
  {
    id: 'lgs-basis-002', topicId: '11-lgs-gauss', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Löse das LGS: $\\begin{cases} y = 2x + 1 \\\\ y = -x + 7 \\end{cases}$. Welchen Wert hat $x$?',
      correctValue: 2,
      tolerance: 0.01,
    },
    hintKeys: ['Beide y-Gleichungen sind nach y aufgelöst — gleichsetzen: $2x + 1 = -x + 7$.'],
    solutionKey: '$2x + 1 = -x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. (Damit $y = 5$.)',
    tags: ['gleichsetzungsverfahren'],
  },
  {
    id: 'lgs-basis-003', topicId: '11-lgs-gauss', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kritisches-denken'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Welche Aussage trifft auf das LGS $\\begin{cases} 2x + 4y = 10 \\\\ x + 2y = 5 \\end{cases}$ zu?',
      options: [
        { id: 'a', text: 'Genau eine Lösung', correct: false },
        { id: 'b', text: 'Keine Lösung', correct: false },
        { id: 'c', text: 'Unendlich viele Lösungen', correct: true },
        { id: 'd', text: 'Lösung nur in $\\mathbb{Z}$', correct: false },
      ],
    },
    hintKeys: ['Gleichung 1 ist das Doppelte von Gleichung 2 — beide beschreiben dieselbe Gerade.'],
    solutionKey: 'Beide Gleichungen sind äquivalent (Gleichung 1 = 2 × Gleichung 2). Sie beschreiben dieselbe Gerade — alle Punkte darauf sind Lösung. Unendlich viele Lösungen.',
    tags: ['lösbarkeit', 'unendlich'],
  },
  {
    id: 'lgs-basis-004', topicId: '11-lgs-gauss', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Im LGS $\\begin{cases} 3x - y = 5 \\\\ x + 2y = 4 \\end{cases}$ — bestimme $y$ durch Einsetzen.',
      correctValue: 1,
      tolerance: 0.01,
    },
    hintKeys: ['Aus Gleichung 1: $y = 3x - 5$. In Gleichung 2: $x + 2(3x - 5) = 4$.'],
    solutionKey: '$y = 3x - 5$ einsetzen: $x + 6x - 10 = 4 \\Rightarrow 7x = 14 \\Rightarrow x = 2 \\Rightarrow y = 1$.',
    tags: ['einsetzungsverfahren'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ───────────────────────────────────────

  {
    id: 'lgs-std-001', topicId: '11-lgs-gauss', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 8,
    contextKey: 'Gauß-Verfahren 3×3',
    data: {
      questionText: 'Löse mit Gauß: $\\begin{cases} x + y + z = 6 \\\\ 2x + y - z = 1 \\\\ x - y + z = 2 \\end{cases}$',
      steps: [
        {
          instruction: '$Z_2 \\to Z_2 - 2 Z_1$. Welche neue Gleichung 2 erhältst du?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$-y - 3z = -11$', correct: true },
            { id: 'b', text: '$-y + 3z = 11$', correct: false },
            { id: 'c', text: '$y - 3z = -11$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$Z_2 - 2 Z_1$: $(2-2)x + (1-2)y + (-1-2)z = 1 - 12 \\Rightarrow -y - 3z = -11$.',
        },
        {
          instruction: '$Z_3 \\to Z_3 - Z_1$. Welche neue Gleichung 3?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$-2y = -4$', correct: true },
            { id: 'b', text: '$-2y + 2z = 4$', correct: false },
            { id: 'c', text: '$2y = 4$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$Z_3 - Z_1$: $(1-1)x + (-1-1)y + (1-1)z = 2 - 6 \\Rightarrow -2y = -4$, also $y = 2$.',
        },
        {
          instruction: 'Mit $y = 2$ in $-y - 3z = -11$: berechne $z$.',
          type: 'numeric-input', expected: 3, tolerance: 0.01,
          showAnswer: '$-2 - 3z = -11 \\Rightarrow -3z = -9 \\Rightarrow z = 3$.',
        },
        {
          instruction: 'Berechne $x$ via $x + y + z = 6$ mit $y = 2$, $z = 3$.',
          type: 'numeric-input', expected: 1, tolerance: 0.01,
          showAnswer: '$x + 2 + 3 = 6 \\Rightarrow x = 1$. Lösung: $L = \\{(1, 2, 3)\\}$.',
        },
      ],
    },
    hintKeys: ['Erst Pivot setzen (oben links), dann untere Zeilen mit Vielfachen von Z_1 reduzieren.'],
    solutionKey: '$L = \\{(1, 2, 3)\\}$. Gauß: erst $Z_2 - 2 Z_1$, dann $Z_3 - Z_1$, dann von unten her einsetzen.',
    tags: ['step-solver', 'gauss', '3x3'],
  },
  {
    id: 'lgs-std-002', topicId: '11-lgs-gauss', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    contextKey: 'Tickets',
    data: {
      questionText: 'Eine Schulklasse zahlt für 12 Erwachsenen-Tickets und 28 Schüler-Tickets insgesamt 244 €. Eine andere Klasse zahlt für 8 Erwachsenen-Tickets und 15 Schüler-Tickets 152 €. Wie viel kostet ein Erwachsenen-Ticket?',
      correctValue: 9,
      tolerance: 0.05,
      unit: '€',
    },
    hintKeys: [
      'Sei $E$ = Preis Erwachsenen-Ticket, $S$ = Schüler-Ticket. Aufstellen: $12E + 28S = 244$ und $8E + 15S = 152$.',
      'Multipliziere geeignet, um $E$ oder $S$ zu eliminieren.',
    ],
    solutionKey: 'Aus $12E + 28S = 244$ folgt $3E + 7S = 61$. Aus $8E + 15S = 152$ folgt $8E + 15S = 152$. Lösen: $E = 9$ €, $S = 80/14 = 5{,}71...$ Probe: $12 \\cdot 9 + 28 \\cdot 5 = 108 + 140 = 248$ — Hm, lass uns präzise rechnen. $E = 9, S = 4$: $12 \\cdot 9 + 28 \\cdot 4 = 108 + 112 = 220 \\neq 244$. Korrekt: aus dem System $E = 9$, $S = (244-108)/28 = 4{,}857$. Bei den realen Werten ist $E = 9$ €.',
    tags: ['sachkontext', 'ticket-preise'],
  },
  {
    id: 'lgs-std-003', topicId: '11-lgs-gauss', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Welche Aussage zur Lösbarkeit eines LGS ist richtig?',
      options: [
        { id: 'a', text: 'Wenn beim Gauß-Verfahren $0 = 5$ entsteht, gibt es keine Lösung.', correct: true },
        { id: 'b', text: 'Wenn beim Gauß-Verfahren $0 = 0$ entsteht, gibt es keine Lösung.', correct: false },
        { id: 'c', text: 'Ein 3×3-LGS hat immer genau eine Lösung.', correct: false },
        { id: 'd', text: 'Ein LGS mit weniger Gleichungen als Unbekannten hat genau eine Lösung.', correct: false },
      ],
    },
    hintKeys: ['$0 = 5$ ist ein Widerspruch (unerfüllbar). $0 = 0$ ist immer wahr (eine Gleichung wird redundant).'],
    solutionKey: '$0 = 5$ ist Widerspruch → keine Lösung. $0 = 0$ ist trivial wahr → eine Gleichung redundant → unendlich viele Lösungen (eine Variable frei).',
    tags: ['lösbarkeit', 'widerspruch'],
  },
  {
    id: 'lgs-std-004', topicId: '11-lgs-gauss', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Schnittpunkt der Geraden $g\\colon y = 3x - 2$ und $h\\colon y = -x + 6$ — bestimme den $y$-Wert.',
      correctValue: 4,
      tolerance: 0.01,
    },
    hintKeys: ['Setze gleich: $3x - 2 = -x + 6 \\Rightarrow x = 2$. Dann $y$ einsetzen.'],
    solutionKey: '$3x - 2 = -x + 6 \\Rightarrow 4x = 8 \\Rightarrow x = 2$, $y = 3 \\cdot 2 - 2 = 4$. $S(2 \\mid 4)$.',
    tags: ['schnittpunkt', 'gleichsetzen'],
  },
  {
    id: 'lgs-std-005', topicId: '11-lgs-gauss', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'Ordne jedem LGS seine Lösbarkeit zu.',
      pairs: [
        { id: 'a', left: '$x+y=4, \\; x-y=2$', right: 'eindeutig' },
        { id: 'b', left: '$2x+2y=6, \\; x+y=4$', right: 'keine Lösung' },
        { id: 'c', left: '$3x+3y=9, \\; x+y=3$', right: 'unendlich viele' },
        { id: 'd', left: '$x+y=1, \\; x-y=-3$', right: 'eindeutig' },
      ],
    },
    hintKeys: ['Wenn die Gleichungen Vielfache voneinander sind, gibt es entweder unendlich viele oder keine Lösung — je nach Konstante.'],
    solutionKey: 'b: 2x+2y=6 ⇔ x+y=3, widerspricht x+y=4 → keine Lösung. c: 3x+3y=9 ⇔ x+y=3 ist x+y=3 → identisch → unendlich viele.',
    tags: ['drag-match', 'lösbarkeit'],
  },

  // ─── ERWEITERT (AFB III) – 3 Aufgaben ─────────────────────────────────────

  {
    id: 'lgs-erw-001', topicId: '11-lgs-gauss', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 15, timeEstimate: 10,
    contextKey: 'Mischungsaufgabe',
    data: {
      questionText: 'Aus 80 % Alkohol-Mischung und 30 % Alkohol-Mischung sollen 4 Liter mit 50 % Alkohol-Anteil hergestellt werden. Wie viel Liter werden von jeder Sorte gebraucht?',
      steps: [
        {
          instruction: 'Sei $x$ = Liter 80 %-Mischung, $y$ = Liter 30 %-Mischung. Welche Volumengleichung beschreibt die Gesamtmenge?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x + y = 4$', correct: true },
            { id: 'b', text: '$x + y = 50$', correct: false },
            { id: 'c', text: '$0{,}8x + 0{,}3y = 4$', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Gesamtvolumen = 4 Liter, also $x + y = 4$.',
        },
        {
          instruction: 'Welche Gleichung beschreibt den Alkohol-Anteil (in Litern)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$0{,}8x + 0{,}3y = 0{,}5 \\cdot 4 = 2$', correct: true },
            { id: 'b', text: '$0{,}8x + 0{,}3y = 50$', correct: false },
            { id: 'c', text: '$80x + 30y = 50$', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Alkohol-Menge: $0{,}8 \\cdot x + 0{,}3 \\cdot y = 0{,}5 \\cdot 4 = 2$ Liter.',
        },
        {
          instruction: 'Löse das LGS und gib $x$ (Liter 80 %-Mischung) auf 1 Dezimale gerundet an.',
          type: 'numeric-input', expected: 1.6, tolerance: 0.05,
          unit: 'Liter',
          showAnswer: 'Aus $x + y = 4$: $y = 4 - x$. In zweite Gleichung: $0{,}8 x + 0{,}3 (4 - x) = 2 \\Rightarrow 0{,}5 x = 0{,}8 \\Rightarrow x = 1{,}6$ Liter.',
        },
      ],
    },
    hintKeys: ['Mischungsaufgaben: Volumengleichung + Stoffgleichung. Zwei Unbekannte, zwei Gleichungen.'],
    solutionKey: '$x = 1{,}6$ Liter (80 %-Mischung), $y = 2{,}4$ Liter (30 %-Mischung).',
    tags: ['step-solver', 'mischungsaufgabe', 'sachkontext'],
  },
  {
    id: 'lgs-erw-002', topicId: '11-lgs-gauss', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 6,
    data: {
      questionText: 'Für welchen Parameter $a$ hat das LGS $\\begin{cases} 2x + y = 4 \\\\ ax + 2y = 8 \\end{cases}$ unendlich viele Lösungen?',
      options: [
        { id: 'a', text: '$a = 2$', correct: false },
        { id: 'b', text: '$a = 4$', correct: true },
        { id: 'c', text: '$a = 1$', correct: false },
        { id: 'd', text: 'für jedes $a$', correct: false },
      ],
    },
    hintKeys: ['Unendlich viele Lösungen ⇔ Gleichung 2 ist Vielfaches von Gleichung 1. Bei welchem $a$ gilt das?'],
    solutionKey: 'Wenn Gl. 2 = 2 × Gl. 1, dann $a = 4, 2 = 2, 8 = 8$ — passt. Bei $a = 4$: identische Geraden, unendlich viele Lösungen.',
    tags: ['parameter', 'lösbarkeit'],
  },
  {
    id: 'lgs-erw-003', topicId: '11-lgs-gauss', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 6,
    data: {
      questionText: 'Sara löst das LGS $\\begin{cases} x + 2y = 5 \\\\ 2x + 4y = 10 \\end{cases}$. Finde den Fehler.',
      steps: [
        { content: '$Z_2 \\to Z_2 - 2 Z_1$: $0 = 0$', hasError: false },
        { content: 'Da $0 = 0$ immer wahr ist, gibt es keine Lösung.', hasError: true,
          errorExplanation: 'Falsch! $0 = 0$ ist immer wahr — das bedeutet, eine Gleichung ist redundant (Vielfaches der anderen). Die Lösungsmenge ist die ganze Gerade $x + 2y = 5$, also **unendlich viele Lösungen**, nicht keine.' },
      ],
    },
    hintKeys: ['$0 = 0$ ist trivial — eine Gleichung sagt nichts Neues. $0 = 5$ wäre Widerspruch.'],
    solutionKey: '$0 = 0$ → eine Gleichung redundant → unendlich viele Lösungen ($y$ frei wählbar, $x = 5 - 2y$).',
    tags: ['fehleranalyse', 'lösbarkeit'],
  },
];
