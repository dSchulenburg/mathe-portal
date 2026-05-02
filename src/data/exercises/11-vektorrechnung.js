export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'vek-basis-001', topicId: '11-vektorrechnung', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Was beschreibt ein Vektor $\\vec{v} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$?',
      options: [
        { id: 'a', text: 'Einen festen Punkt im Koordinatensystem.', correct: false },
        { id: 'b', text: 'Eine Verschiebung um 3 Einheiten in x-Richtung und −2 Einheiten in y-Richtung.', correct: true },
        { id: 'c', text: 'Eine Länge von $3 + (-2) = 1$.', correct: false },
        { id: 'd', text: 'Den Abstand vom Ursprung zum Punkt (3; 2).', correct: false },
      ],
    },
    hintKeys: ['Ein Vektor beschreibt eine Verschiebung (Richtung + Länge), keinen festen Punkt. Die Komponenten geben an, wie weit in jede Richtung verschoben wird.'],
    solutionKey: 'Ein Vektor ist ein Pfeil, der eine Verschiebung beschreibt. $\\vec{v} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ bedeutet: 3 Einheiten nach rechts, 2 Einheiten nach unten.',
    tags: ['vektor', 'definition', 'pfeil', 'grundbegriffe'],
  },

  {
    id: 'vek-basis-002', topicId: '11-vektorrechnung', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Berechne den Betrag (Länge) des Vektors $\\vec{v} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$. Gib eine ganze Zahl an.',
      correctValue: 5,
      tolerance: 0.001,
    },
    hintKeys: ['Formel: $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$. Das ist der Satz des Pythagoras!'],
    solutionKey: '$|\\vec{v}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. Das klassische 3-4-5-Dreieck.',
    tags: ['betrag', 'laenge', 'pythagoras', 'r2'],
  },

  {
    id: 'vek-basis-003', topicId: '11-vektorrechnung', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Gegeben: $\\vec{a} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix}$. Wie lautet $\\vec{a} + \\vec{b}$?',
      options: [
        { id: 'a', text: '$\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$', correct: false },
        { id: 'b', text: '$\\begin{pmatrix} 1 \\\\ 8 \\end{pmatrix}$', correct: true },
        { id: 'c', text: '$\\begin{pmatrix} -2 \\\\ 15 \\end{pmatrix}$', correct: false },
        { id: 'd', text: '$\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$', correct: false },
      ],
    },
    hintKeys: ['Vektoren addiert man komponentenweise: $x$-Komponenten addieren, dann $y$-Komponenten addieren.'],
    solutionKey: '$\\vec{a} + \\vec{b} = \\begin{pmatrix} 2 + (-1) \\\\ 5 + 3 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 8 \\end{pmatrix}$.',
    tags: ['vektoraddition', 'komponentenweise', 'r2'],
  },

  {
    id: 'vek-basis-004', topicId: '11-vektorrechnung', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Was ergibt $3 \\cdot \\vec{v}$ mit $\\vec{v} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$?',
      options: [
        { id: 'a', text: '$\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$', correct: false },
        { id: 'b', text: '$\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}$', correct: false },
        { id: 'c', text: '$\\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix}$', correct: true },
        { id: 'd', text: '$\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$', correct: false },
      ],
    },
    hintKeys: ['Bei der Skalarmultiplikation wird jede Komponente mit dem Skalar multipliziert: $\\lambda \\cdot \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} \\lambda x \\\\ \\lambda y \\end{pmatrix}$.'],
    solutionKey: '$3 \\cdot \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 3 \\cdot 2 \\\\ 3 \\cdot (-1) \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix}$.',
    tags: ['skalarmultiplikation', 'komponentenweise', 'r2'],
  },

  // ─── STANDARD (AFB II) – 6 Aufgaben ───────────────────────────────────────

  {
    id: 'vek-standard-001', topicId: '11-vektorrechnung', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 8,
    contextKey: 'GPS-Navigation R³',
    data: {
      questionText: 'Zwei Punkte im Raum: $A = (1; 2; 3)$ und $B = (4; 6; 3)$. Berechne den Verbindungsvektor $\\overrightarrow{AB}$ und seinen Betrag.',
      steps: [
        {
          instruction: 'Verbindungsvektor: $\\overrightarrow{AB} = B - A$. Berechne die $x$-Komponente: $4 - 1 = ?$',
          type: 'numeric-input', expected: 3, tolerance: 0.001,
          showAnswer: '$x$-Komponente: $4 - 1 = 3$',
        },
        {
          instruction: 'Berechne die $y$-Komponente: $6 - 2 = ?$',
          type: 'numeric-input', expected: 4, tolerance: 0.001,
          showAnswer: '$y$-Komponente: $6 - 2 = 4$',
        },
        {
          instruction: 'Berechne die $z$-Komponente: $3 - 3 = ?$',
          type: 'numeric-input', expected: 0, tolerance: 0.001,
          showAnswer: '$z$-Komponente: $3 - 3 = 0$. Also $\\overrightarrow{AB} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}$',
        },
        {
          instruction: 'Betrag: $|\\overrightarrow{AB}| = \\sqrt{3^2 + 4^2 + 0^2} = ?$',
          type: 'numeric-input', expected: 5, tolerance: 0.001,
          showAnswer: '$|\\overrightarrow{AB}| = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5$',
        },
      ],
    },
    hintKeys: [
      '$\\overrightarrow{AB} = \\begin{pmatrix} B_x - A_x \\\\ B_y - A_y \\\\ B_z - A_z \\end{pmatrix}$',
      '$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$ (Pythagoras im Raum).',
    ],
    solutionKey: '$\\overrightarrow{AB} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}$, $|\\overrightarrow{AB}| = 5$.',
    tags: ['verbindungsvektor', 'betrag', 'r3', 'step-solver'],
  },

  {
    id: 'vek-standard-002', topicId: '11-vektorrechnung', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 9,
    contextKey: '3D-Druck — Vektoren im R³',
    data: {
      questionText: '$\\vec{a} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 4 \\end{pmatrix}$, $\\vec{b} = \\begin{pmatrix} -3 \\\\ 5 \\\\ 1 \\end{pmatrix}$. Berechne $\\vec{a} + \\vec{b}$ und $\\vec{a} - \\vec{b}$ komponentenweise.',
      steps: [
        {
          instruction: '$x$-Komponente von $\\vec{a} + \\vec{b}$: $2 + (-3) = ?$',
          type: 'numeric-input', expected: -1, tolerance: 0.001,
          showAnswer: '$2 + (-3) = -1$',
        },
        {
          instruction: '$y$-Komponente von $\\vec{a} + \\vec{b}$: $-1 + 5 = ?$',
          type: 'numeric-input', expected: 4, tolerance: 0.001,
          showAnswer: '$-1 + 5 = 4$',
        },
        {
          instruction: '$z$-Komponente von $\\vec{a} + \\vec{b}$: $4 + 1 = ?$. (Damit ist $\\vec{a} + \\vec{b}$ vollständig.)',
          type: 'numeric-input', expected: 5, tolerance: 0.001,
          showAnswer: '$4 + 1 = 5$. $\\vec{a} + \\vec{b} = \\begin{pmatrix} -1 \\\\ 4 \\\\ 5 \\end{pmatrix}$',
        },
        {
          instruction: '$x$-Komponente von $\\vec{a} - \\vec{b}$: $2 - (-3) = ?$',
          type: 'numeric-input', expected: 5, tolerance: 0.001,
          showAnswer: '$2 - (-3) = 5$. $\\vec{a} - \\vec{b} = \\begin{pmatrix} 5 \\\\ -6 \\\\ 3 \\end{pmatrix}$',
        },
      ],
    },
    hintKeys: [
      'Komponentenweise addieren/subtrahieren: jede Zeile separat.',
      'Vorsicht bei doppelten Vorzeichen: $a - (-b) = a + b$.',
    ],
    solutionKey: '$\\vec{a} + \\vec{b} = \\begin{pmatrix} -1 \\\\ 4 \\\\ 5 \\end{pmatrix}$, $\\vec{a} - \\vec{b} = \\begin{pmatrix} 5 \\\\ -6 \\\\ 3 \\end{pmatrix}$.',
    tags: ['vektoraddition', 'vektorsubtraktion', 'r3', 'step-solver'],
  },

  {
    id: 'vek-standard-003', topicId: '11-vektorrechnung', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 7,
    contextKey: 'Geradengleichung',
    data: {
      questionText: 'Eine Gerade verläuft durch $P = (1; 2; 0)$ mit Richtungsvektor $\\vec{v} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$. Welche Parameterdarstellung ist korrekt?',
      options: [
        { id: 'a', text: '$g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}$', correct: false },
        { id: 'b', text: '$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$', correct: true },
        { id: 'c', text: '$g: \\vec{x} = t \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}$', correct: false },
        { id: 'd', text: '$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$', correct: false },
      ],
    },
    hintKeys: ['Parameterform einer Geraden: $\\vec{x} = \\vec{p} + t \\cdot \\vec{v}$. Stützvektor $\\vec{p}$ (ein Punkt auf der Geraden) + Parameter $t$ mal Richtungsvektor.'],
    solutionKey: '$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$. Stützvektor = Ortsvektor von P, Richtungsvektor = $\\vec{v}$.',
    tags: ['geradengleichung', 'parameterform', 'r3'],
  },

  {
    id: 'vek-standard-004', topicId: '11-vektorrechnung', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'Ordne jede Vektor-Operation dem richtigen Ergebnis zu. Gegeben: $\\vec{a} = \\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$, $\\vec{b} = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$.',
      pairs: [
        { id: 'a', left: '$\\vec{a} + \\vec{b}$', right: '$\\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}$' },
        { id: 'b', left: '$\\vec{a} - \\vec{b}$', right: '$\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$' },
        { id: 'c', left: '$2 \\cdot \\vec{a}$', right: '$\\begin{pmatrix} 8 \\\\ 4 \\end{pmatrix}$' },
        { id: 'd', left: '$|\\vec{b}|$', right: '$\\sqrt{10}$' },
      ],
    },
    hintKeys: ['Komponentenweise rechnen. $|\\vec{b}| = \\sqrt{1^2 + 3^2}$.'],
    solutionKey: '$\\vec{a}+\\vec{b} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}$; $\\vec{a}-\\vec{b} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$; $2\\vec{a} = \\begin{pmatrix} 8 \\\\ 4 \\end{pmatrix}$; $|\\vec{b}| = \\sqrt{10}$.',
    tags: ['drag-match', 'vektoroperationen', 'betrag', 'r2'],
  },

  {
    id: 'vek-standard-005', topicId: '11-vektorrechnung', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 7,
    contextKey: 'Minecraft-Koordinaten',
    data: {
      questionText: 'In Minecraft stehen zwei Spieler: Spieler A bei $(10; 64; -5)$ und Spieler B bei $(13; 68; -1)$. Wie groß ist der Abstand $|\\overrightarrow{AB}|$? Runde auf eine Dezimalstelle.',
      correctValue: 6.4,
      tolerance: 0.1,
    },
    hintKeys: [
      '$\\overrightarrow{AB} = \\begin{pmatrix} 13-10 \\\\ 68-64 \\\\ -1-(-5) \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 4 \\end{pmatrix}$.',
      '$|\\overrightarrow{AB}| = \\sqrt{3^2 + 4^2 + 4^2} = \\sqrt{9 + 16 + 16} = \\sqrt{41}$.',
    ],
    solutionKey: '$\\overrightarrow{AB} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 4 \\end{pmatrix}$. $|\\overrightarrow{AB}| = \\sqrt{9 + 16 + 16} = \\sqrt{41} \\approx 6{,}4$.',
    tags: ['abstand', 'betrag', 'minecraft', 'gaming', 'r3', 'sachkontext'],
  },

  {
    id: 'vek-standard-006', topicId: '11-vektorrechnung', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'Berechne den Betrag des Vektors $\\vec{w} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}$. Gib eine ganze Zahl an.',
      correctValue: 3,
      tolerance: 0.001,
    },
    hintKeys: ['$|\\vec{w}| = \\sqrt{1^2 + 2^2 + 2^2}$. Beachte: $1 + 4 + 4 = 9$.'],
    solutionKey: '$|\\vec{w}| = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$.',
    tags: ['betrag', 'r3', 'berechnung'],
  },

  // ─── ERWEITERT (AFB III) – 4 Aufgaben ─────────────────────────────────────

  {
    id: 'vek-erweitert-001', topicId: '11-vektorrechnung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 15, timeEstimate: 12,
    contextKey: 'Drohnenflug',
    data: {
      questionText: 'Eine Drohne fliegt drei Abschnitte: $\\vec{v_1} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 2 \\end{pmatrix}$, $\\vec{v_2} = \\begin{pmatrix} 1 \\\\ 4 \\\\ 0 \\end{pmatrix}$, $\\vec{v_3} = \\begin{pmatrix} -2 \\\\ 1 \\\\ 1 \\end{pmatrix}$ (in km). Bestimme den Gesamtvektor und die zurückgelegte Gesamtdistanz.',
      steps: [
        {
          instruction: '$x$-Komponente des Gesamtvektors $\\vec{g} = \\vec{v_1} + \\vec{v_2} + \\vec{v_3}$: $3 + 1 + (-2) = ?$',
          type: 'numeric-input', expected: 2, tolerance: 0.001,
          showAnswer: '$x$: $3 + 1 - 2 = 2$',
        },
        {
          instruction: '$y$-Komponente: $0 + 4 + 1 = ?$',
          type: 'numeric-input', expected: 5, tolerance: 0.001,
          showAnswer: '$y$: $0 + 4 + 1 = 5$',
        },
        {
          instruction: '$z$-Komponente: $2 + 0 + 1 = ?$',
          type: 'numeric-input', expected: 3, tolerance: 0.001,
          showAnswer: '$z$: $2 + 0 + 1 = 3$. Gesamtvektor: $\\vec{g} = \\begin{pmatrix} 2 \\\\ 5 \\\\ 3 \\end{pmatrix}$',
        },
        {
          instruction: 'Gesamtdistanz (Betrag von $\\vec{g}$): $|\\vec{g}| = \\sqrt{2^2 + 5^2 + 3^2} = \\sqrt{?}$',
          type: 'numeric-input', expected: 38, tolerance: 0.001,
          showAnswer: '$2^2 + 5^2 + 3^2 = 4 + 25 + 9 = 38$',
        },
        {
          instruction: '$|\\vec{g}| = \\sqrt{38} \\approx ?$ km (auf 2 Dezimalstellen)',
          type: 'numeric-input', expected: 6.16, tolerance: 0.02,
          showAnswer: '$\\sqrt{38} \\approx 6{,}16$ km — das ist die Luftlinien-Distanz zwischen Start und Ziel.',
        },
      ],
    },
    hintKeys: [
      'Gesamtvektor = Summe aller Teilstrecken-Vektoren.',
      'Der Betrag des Gesamtvektors gibt die Luftlinien-Distanz an, nicht die zurückgelegte Wegstrecke.',
    ],
    solutionKey: '$\\vec{g} = \\begin{pmatrix} 2 \\\\ 5 \\\\ 3 \\end{pmatrix}$, $|\\vec{g}| = \\sqrt{38} \\approx 6{,}16$ km.',
    tags: ['drohnenflug', 'vektorkette', 'betrag', 'step-solver', 'sachkontext', 'r3'],
  },

  {
    id: 'vek-erweitert-002', topicId: '11-vektorrechnung', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 9,
    contextKey: 'Minecraft-Distanz 3D',
    data: {
      questionText: 'In Minecraft baut Spielerin Mia ein Portal bei $P = (−5; 70; 12)$ und ein Dorf liegt bei $Q = (7; 70; 3)$. Wie weit ist der direkte Weg? Runde auf 2 Dezimalstellen.',
      correctValue: 15.0,
      tolerance: 0.05,
    },
    hintKeys: [
      '$\\overrightarrow{PQ} = Q - P = \\begin{pmatrix} 12 \\\\ 0 \\\\ -9 \\end{pmatrix}$.',
      '$|\\overrightarrow{PQ}| = \\sqrt{12^2 + 0^2 + (-9)^2} = \\sqrt{144 + 0 + 81} = \\sqrt{225}$.',
    ],
    solutionKey: '$\\overrightarrow{PQ} = \\begin{pmatrix} 12 \\\\ 0 \\\\ -9 \\end{pmatrix}$. $|\\overrightarrow{PQ}| = \\sqrt{144 + 81} = \\sqrt{225} = 15{,}00$.',
    tags: ['abstand', 'minecraft', 'gaming', 'r3', 'sachkontext'],
  },

  {
    id: 'vek-erweitert-003', topicId: '11-vektorrechnung', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 10,
    data: {
      questionText: 'Sind die Vektoren $\\vec{a} = \\begin{pmatrix} 2 \\\\ -4 \\\\ 6 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} -1 \\\\ 2 \\\\ -3 \\end{pmatrix}$ kollinear? Begründe.',
      options: [
        { id: 'a', text: 'Nein, da ihre Beträge verschieden sind.', correct: false },
        { id: 'b', text: 'Ja, denn $\\vec{a} = -2 \\cdot \\vec{b}$ — sie sind Vielfache voneinander.', correct: true },
        { id: 'c', text: 'Nein, da $\\vec{a} + \\vec{b} \\neq \\vec{0}$.', correct: false },
        { id: 'd', text: 'Ja, weil beide negative Komponenten haben.', correct: false },
      ],
    },
    hintKeys: [
      'Kollinear = parallel (gleiche oder entgegengesetzte Richtung). Prüfe, ob $\\vec{a} = \\lambda \\cdot \\vec{b}$ für ein $\\lambda \\in \\mathbb{R}$.',
      'Aus der $x$-Komponente: $2 = \\lambda \\cdot (-1) \\Rightarrow \\lambda = -2$. Prüfe, ob dieser $\\lambda$-Wert für alle Komponenten passt.',
    ],
    solutionKey: '$\\lambda = -2$: $(-2) \\cdot (-1) = 2$ ✓; $(-2) \\cdot 2 = -4$ ✓; $(-2) \\cdot (-3) = 6$ ✓. Da $\\vec{a} = -2 \\cdot \\vec{b}$, sind die Vektoren kollinear (antiparallel).',
    tags: ['kollinearität', 'parallelität', 'vielfaches', 'r3'],
  },

  {
    id: 'vek-erweitert-004', topicId: '11-vektorrechnung', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 8,
    data: {
      questionText: 'Schüler Tom berechnet den Betrag von $\\vec{v} = \\begin{pmatrix} -3 \\\\ 4 \\\\ 0 \\end{pmatrix}$. Finde den Fehler.',
      steps: [
        { content: 'Schritt 1: $|\\vec{v}| = \\sqrt{v_x + v_y + v_z}$', hasError: true, errorExplanation: 'Falsche Formel! Man muss die Komponenten quadrieren, nicht addieren. Richtig: $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$.' },
        { content: 'Schritt 2: $|\\vec{v}| = \\sqrt{-3 + 4 + 0} = \\sqrt{1} = 1$', hasError: true, errorExplanation: 'Durch die falsche Formel ergibt sich 1 statt 5. Richtig: $\\sqrt{(-3)^2 + 4^2 + 0^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.' },
      ],
    },
    hintKeys: ['Der Betrag nutzt den räumlichen Pythagoras: Summe der quadrierten Komponenten, dann Wurzel. Negative Vorzeichen verschwinden beim Quadrieren: $(-3)^2 = 9$.'],
    solutionKey: 'Fehler in Schritt 1: Toms Formel fehlt die Quadrierung. Richtig: $|\\vec{v}| = \\sqrt{(-3)^2 + 4^2 + 0^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
    tags: ['fehleranalyse', 'betrag', 'formel', 'r3'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 2 Aufgaben ────────────────────────

  {
    id: 'vek-ea-001', topicId: '11-vektorrechnung', type: 'multiple-choice', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 14,
    data: {
      questionText: 'Gegeben: Gerade $g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix}$ und Gerade $h: \\vec{x} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 3 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 4 \\\\ 2 \\\\ 2 \\end{pmatrix}$.\n\nWelche Lagebeziehung haben $g$ und $h$?',
      options: [
        { id: 'a', text: 'windschief (keine gemeinsamen Punkte, nicht parallel)', correct: false },
        { id: 'b', text: 'identisch (dieselbe Gerade)', correct: true },
        { id: 'c', text: 'parallel (keine gemeinsamen Punkte)', correct: false },
        { id: 'd', text: 'schneidend (genau ein gemeinsamer Punkt)', correct: false },
      ],
    },
    hintKeys: [
      'Schritt 1: Richtungsvektoren vergleichen. $\\begin{pmatrix} 4 \\\\ 2 \\\\ 2 \\end{pmatrix} = 2 \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix}$ → parallel oder identisch.',
      'Schritt 2: Prüfe, ob der Stützpunkt von $h$ auf $g$ liegt. Setze $(3;1;3)$ in $g$ ein und löse nach $s$.',
    ],
    solutionKey: 'Richtungsvektoren: $\\vec{v_h} = 2 \\cdot \\vec{v_g}$ → Geraden sind parallel oder identisch. Stützpunkt von $h$ auf $g$: $1 + 2s = 3 \\Rightarrow s = 1$. Probe: $s=1$ ergibt $(3;1;3)$ ✓. Da der Punkt auf $g$ liegt, sind $g$ und $h$ identisch.',
    tags: ['lagebeziehung', 'identisch', 'parallel', 'geraden', 'r3', 'ea'],
  },

  {
    id: 'vek-ea-002', topicId: '11-vektorrechnung', type: 'step-solver', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 15,
    contextKey: 'Skalarprodukt und Orthogonalität',
    data: {
      questionText: 'Gegeben: $\\vec{a} = \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 1 \\\\ 1 \\\\ k \\end{pmatrix}$. Für welchen Wert $k$ stehen $\\vec{a}$ und $\\vec{b}$ senkrecht aufeinander?',
      steps: [
        {
          instruction: 'Bedingung: $\\vec{a} \\cdot \\vec{b} = 0$. Berechne $3 \\cdot 1 = ?$',
          type: 'numeric-input', expected: 3, tolerance: 0.001,
          showAnswer: '$3 \\cdot 1 = 3$',
        },
        {
          instruction: 'Berechne $(-1) \\cdot 1 = ?$',
          type: 'numeric-input', expected: -1, tolerance: 0.001,
          showAnswer: '$(-1) \\cdot 1 = -1$',
        },
        {
          instruction: 'Das Skalarprodukt: $3 + (-1) + 2k = 0$. Also $2 + 2k = 0$. Löse nach $k$: $k = ?$',
          type: 'numeric-input', expected: -1, tolerance: 0.001,
          showAnswer: '$2 + 2k = 0 \\Rightarrow 2k = -2 \\Rightarrow k = -1$. Für $k = -1$ sind $\\vec{a}$ und $\\vec{b}$ orthogonal.',
        },
      ],
    },
    hintKeys: [
      'Skalarprodukt: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$.',
      'Orthogonalität: $\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$.',
    ],
    solutionKey: '$\\vec{a} \\cdot \\vec{b} = 3 \\cdot 1 + (-1) \\cdot 1 + 2 \\cdot k = 2 + 2k = 0 \\Rightarrow k = -1$.',
    tags: ['skalarprodukt', 'orthogonalität', 'parameter', 'step-solver', 'ea', 'r3'],
  },

  // ─── KREUZPRODUKT (3 Aufgaben) ─────────────────────────────────────────────

  {
    id: 'vek-cross-001', topicId: '11-vektorrechnung', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Berechne $\\vec{a} \\times \\vec{b}$ für $\\vec{a} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$, $\\vec{b} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$. Welchen Wert hat die dritte Komponente?',
      correctValue: 1,
      tolerance: 0.001,
    },
    hintKeys: ['Dritte Komponente: $a_1 b_2 - a_2 b_1 = 1 \\cdot 1 - 0 \\cdot 0 = 1$.'],
    solutionKey: '$\\vec{a} \\times \\vec{b} = (0, 0, 1) = \\vec{e}_3$. Die Standard-Basisvektoren bilden ein Rechtshandsystem: $\\vec{e}_1 \\times \\vec{e}_2 = \\vec{e}_3$.',
    tags: ['kreuzprodukt', 'standardbasis'],
  },
  {
    id: 'vek-cross-002', topicId: '11-vektorrechnung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 7,
    contextKey: 'Normalenvektor zu zwei Vektoren',
    data: {
      questionText: 'Bestimme einen Vektor, der senkrecht auf $\\vec{a} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 3 \\end{pmatrix}$ steht.',
      steps: [
        {
          instruction: 'Erste Komponente: $a_2 b_3 - a_3 b_2 = 2 \\cdot 3 - 0 \\cdot 1 = ?$',
          type: 'numeric-input', expected: 6, tolerance: 0.01,
          showAnswer: '$2 \\cdot 3 - 0 \\cdot 1 = 6$',
        },
        {
          instruction: 'Zweite Komponente: $a_3 b_1 - a_1 b_3 = 0 \\cdot 0 - 1 \\cdot 3 = ?$',
          type: 'numeric-input', expected: -3, tolerance: 0.01,
          showAnswer: '$0 \\cdot 0 - 1 \\cdot 3 = -3$',
        },
        {
          instruction: 'Dritte Komponente: $a_1 b_2 - a_2 b_1 = 1 \\cdot 1 - 2 \\cdot 0 = ?$',
          type: 'numeric-input', expected: 1, tolerance: 0.01,
          showAnswer: '$1 \\cdot 1 - 2 \\cdot 0 = 1$. $\\vec{a} \\times \\vec{b} = (6, -3, 1)$.',
        },
      ],
    },
    hintKeys: ['Kreuzprodukt: zyklische Indexverschiebung. (i,j,k) → $a_j b_k - a_k b_j$.'],
    solutionKey: '$\\vec{a} \\times \\vec{b} = (6, -3, 1)$. Probe: $\\vec{a} \\cdot (6, -3, 1) = 6 - 6 + 0 = 0 \\;\\checkmark$',
    tags: ['step-solver', 'kreuzprodukt', 'normalenvektor'],
  },
  {
    id: 'vek-cross-003', topicId: '11-vektorrechnung', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Welche Aussage zum Kreuzprodukt ist FALSCH?',
      options: [
        { id: 'a', text: '$\\vec{a} \\times \\vec{b}$ steht senkrecht auf $\\vec{a}$ und $\\vec{b}$.', correct: false },
        { id: 'b', text: '$|\\vec{a} \\times \\vec{b}|$ ist der Flächeninhalt des Parallelogramms.', correct: false },
        { id: 'c', text: '$\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{a}$.', correct: true },
        { id: 'd', text: '$\\vec{a} \\times \\vec{a} = \\vec{0}$.', correct: false },
      ],
    },
    hintKeys: ['Das Kreuzprodukt ist antikommutativ: Reihenfolge umkehren wechselt das Vorzeichen.'],
    solutionKey: 'Option c ist falsch. Richtig: $\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$ (antikommutativ).',
    tags: ['kreuzprodukt', 'eigenschaften', 'antikommutativ'],
  },
];
