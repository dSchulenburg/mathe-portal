export const exercises = [
  // ─── BASIS (AFB I) – 3 Aufgaben ───────────────────────────────────────────

  {
    id: 'mat-basis-001', topicId: '12-matrizen', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Berechne $A + B$ für $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ und $B = \\begin{pmatrix} 5 & 0 \\\\ -1 & 2 \\end{pmatrix}$.',
      options: [
        { id: 'a', text: '$\\begin{pmatrix} 6 & 2 \\\\ 2 & 6 \\end{pmatrix}$', correct: true },
        { id: 'b', text: '$\\begin{pmatrix} 6 & 0 \\\\ -3 & 8 \\end{pmatrix}$', correct: false },
        { id: 'c', text: '$\\begin{pmatrix} 5 & 0 \\\\ 3 & 8 \\end{pmatrix}$', correct: false },
        { id: 'd', text: '$\\begin{pmatrix} 6 & 2 \\\\ 4 & 6 \\end{pmatrix}$', correct: false },
      ],
    },
    hintKeys: ['Matrizen addiert man komponentenweise: Jeder Eintrag $(i, j)$ der Summe ist $a_{ij} + b_{ij}$.'],
    solutionKey: '$A + B = \\begin{pmatrix} 1+5 & 2+0 \\\\ 3+(-1) & 4+2 \\end{pmatrix} = \\begin{pmatrix} 6 & 2 \\\\ 2 & 6 \\end{pmatrix}$.',
    tags: ['matrixaddition', 'komponentenweise', 'basis', '2x2'],
  },

  {
    id: 'mat-basis-002', topicId: '12-matrizen', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Berechne den Eintrag $(1,2)$ — also Zeile 1, Spalte 2 — der Skalarmultiplikation $3 \\cdot A$ für $A = \\begin{pmatrix} 2 & 4 \\\\ 1 & -3 \\end{pmatrix}$.',
      correctValue: 12,
      tolerance: 0,
    },
    hintKeys: ['Bei der Skalarmultiplikation wird jeder Eintrag der Matrix mit dem Skalar multipliziert. $3 \\cdot 4 = ?$'],
    solutionKey: '$3 \\cdot A = \\begin{pmatrix} 6 & 12 \\\\ 3 & -9 \\end{pmatrix}$. Der Eintrag $(1, 2)$ ist $3 \\cdot 4 = 12$.',
    tags: ['skalarmultiplikation', 'matrix', 'eintrag', 'basis'],
  },

  {
    id: 'mat-basis-003', topicId: '12-matrizen', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 6, timeEstimate: 5,
    data: {
      questionText: 'Berechne das Produkt $A \\cdot B$ für $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ und $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$.',
      options: [
        { id: 'a', text: '$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$', correct: true },
        { id: 'b', text: '$\\begin{pmatrix} 2 & 0 \\\\ 3 & 12 \\end{pmatrix}$', correct: false },
        { id: 'c', text: '$\\begin{pmatrix} 5 & 6 \\\\ 10 & 12 \\end{pmatrix}$', correct: false },
        { id: 'd', text: '$\\begin{pmatrix} 2 & 6 \\\\ 6 & 12 \\end{pmatrix}$', correct: false },
      ],
    },
    hintKeys: [
      'Matrixmultiplikation: Eintrag $(i,j)$ = Skalarprodukt der $i$-ten Zeile von $A$ mit der $j$-ten Spalte von $B$.',
      '$(1,1)$: $1 \\cdot 2 + 2 \\cdot 1 = 4$. $(1,2)$: $1 \\cdot 0 + 2 \\cdot 3 = 6$.',
    ],
    solutionKey: '$A \\cdot B = \\begin{pmatrix} 1 \\cdot 2 + 2 \\cdot 1 & 1 \\cdot 0 + 2 \\cdot 3 \\\\ 3 \\cdot 2 + 4 \\cdot 1 & 3 \\cdot 0 + 4 \\cdot 3 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$.',
    tags: ['matrixmultiplikation', '2x2', 'berechnung', 'skalarprodukt'],
  },

  // ─── STANDARD (AFB II) – 4 Aufgaben ──────────────────────────────────────

  {
    id: 'mat-standard-001', topicId: '12-matrizen', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 10,
    contextKey: 'Pendlerverhalten Stadt-Umland',
    data: {
      questionText: 'Pendler-Modell: Jeden Monat wechseln 20 % der Stadtbewohner ins Umland, 30 % der Umlandbewohner in die Stadt. Stelle die Übergangsmatrix $T$ auf.',
      steps: [
        {
          instruction: 'Identifiziere die Übergangswahrscheinlichkeiten: Wie viel Prozent der Stadtbewohner bleiben in der Stadt?',
          type: 'numeric-input', expected: 80, tolerance: 0,
          unit: '%',
          showAnswer: '20 % wechseln ins Umland → 80 % bleiben in der Stadt.',
        },
        {
          instruction: 'Wie lautet die Spalte für „Stadt" in der Übergangsmatrix? (Von Stadt nach Stadt, Von Umland nach Stadt)',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\begin{pmatrix} 0{,}8 \\\\ 0{,}3 \\end{pmatrix}$', correct: true },
            { id: 'b', text: '$\\begin{pmatrix} 0{,}2 \\\\ 0{,}7 \\end{pmatrix}$', correct: false },
            { id: 'c', text: '$\\begin{pmatrix} 0{,}8 \\\\ 0{,}2 \\end{pmatrix}$', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Spalte Stadt: 80 % bleiben, 20 % wechseln → aber 30 % des Umlandes kommen in die Stadt. Spalte: $\\begin{pmatrix} 0{,}8 \\\\ 0{,}2 \\end{pmatrix}$. ACHTUNG: Spaltensumme = 1.',
        },
        {
          instruction: 'Wähle die vollständige Übergangsmatrix $T$ (Spalten = Herkunft, Zeilen = Ziel).',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$T = \\begin{pmatrix} 0{,}8 & 0{,}3 \\\\ 0{,}2 & 0{,}7 \\end{pmatrix}$', correct: true },
            { id: 'b', text: '$T = \\begin{pmatrix} 0{,}8 & 0{,}2 \\\\ 0{,}3 & 0{,}7 \\end{pmatrix}$', correct: false },
            { id: 'c', text: '$T = \\begin{pmatrix} 0{,}2 & 0{,}3 \\\\ 0{,}8 & 0{,}7 \\end{pmatrix}$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$T = \\begin{pmatrix} 0{,}8 & 0{,}3 \\\\ 0{,}2 & 0{,}7 \\end{pmatrix}$. Spaltensummen sind je 1 ✓',
        },
      ],
    },
    hintKeys: [
      'In einer stochastischen Matrix gilt: Alle Einträge sind $\\geq 0$ und jede Spaltensumme ist 1.',
      'Spalte = Herkunftszustand. Eintrag $(i,j)$: Wahrscheinlichkeit, von Zustand $j$ in Zustand $i$ zu wechseln.',
    ],
    solutionKey: '$T = \\begin{pmatrix} 0{,}8 & 0{,}3 \\\\ 0{,}2 & 0{,}7 \\end{pmatrix}$. Spaltensummen je 1. Zeile 1 = Ziel Stadt, Zeile 2 = Ziel Umland.',
    tags: ['step-solver', 'uebergangsmatrix', 'markov', 'pendler', 'stochastisch'],
  },

  {
    id: 'mat-standard-002', topicId: '12-matrizen', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 8,
    contextKey: 'Wetter-Modell',
    data: {
      questionText: 'Wetter-Markov-Modell: $T = \\begin{pmatrix} 0{,}7 & 0{,}4 \\\\ 0{,}3 & 0{,}6 \\end{pmatrix}$. Heute ist es sonnig (Zustandsvektor: $\\vec{v}_0 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$). Berechne den Anteil sonniger Tage morgen — d.h. die erste Komponente von $T \\cdot \\vec{v}_0$.',
      correctValue: 0.7,
      tolerance: 0.001,
    },
    hintKeys: [
      '$T \\cdot \\vec{v}_0 = \\begin{pmatrix} 0{,}7 & 0{,}4 \\\\ 0{,}3 & 0{,}6 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$.',
      'Matrix-Vektor-Produkt: Erste Komponente = Skalarprodukt der ersten Zeile mit $\\vec{v}_0$.',
    ],
    solutionKey: '$T \\cdot \\vec{v}_0 = \\begin{pmatrix} 0{,}7 \\cdot 1 + 0{,}4 \\cdot 0 \\\\ 0{,}3 \\cdot 1 + 0{,}6 \\cdot 0 \\end{pmatrix} = \\begin{pmatrix} 0{,}7 \\\\ 0{,}3 \\end{pmatrix}$. Morgen: 70 % sonnig, 30 % bewölkt.',
    tags: ['matrix-vektor', 'wetter', 'markov', 'zustandsvektor'],
  },

  {
    id: 'mat-standard-003', topicId: '12-matrizen', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Ordne jede Matrix-Operation dem richtigen Ergebnis zu. Alle Matrizen haben Format $2 \\times 2$, $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$.',
      pairs: [
        { id: 'a', left: '$2 \\cdot A$', right: '$\\begin{pmatrix} 4 & 2 \\\\ 0 & 6 \\end{pmatrix}$' },
        { id: 'b', left: '$A + A$', right: '$\\begin{pmatrix} 4 & 2 \\\\ 0 & 6 \\end{pmatrix}$' },
        { id: 'c', left: '$A \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$', right: '$\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$' },
        { id: 'd', left: '$A - A$', right: '$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$' },
      ],
    },
    hintKeys: [
      '$2A = A + A$ (beide Ergebnisse sind gleich).',
      'Multiplikation mit der Einheitsmatrix $I$ ändert nichts: $A \\cdot I = A$.',
    ],
    solutionKey: '$2A = A + A = \\begin{pmatrix} 4 & 2 \\\\ 0 & 6 \\end{pmatrix}$. $A \\cdot I = A$. $A - A = 0$ (Nullmatrix).',
    tags: ['drag-match', 'matrix-operationen', 'einheitsmatrix', 'nullmatrix'],
  },

  {
    id: 'mat-standard-004', topicId: '12-matrizen', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 6,
    contextKey: 'Spotify vs Apple Music',
    data: {
      questionText: 'Spotify hat 60 % Marktanteil, Apple Music 40 %. Übergangsmatrix: $T = \\begin{pmatrix} 0{,}9 & 0{,}2 \\\\ 0{,}1 & 0{,}8 \\end{pmatrix}$. Der neue Zustandsvektor ist $\\vec{v}_1 = T \\cdot \\vec{v}_0$ mit $\\vec{v}_0 = \\begin{pmatrix} 0{,}6 \\\\ 0{,}4 \\end{pmatrix}$. Welcher Marktanteil ergibt sich für Spotify nach einem Monat?',
      options: [
        { id: 'a', text: '$0{,}9 \\cdot 0{,}6 + 0{,}2 \\cdot 0{,}4 = 0{,}54 + 0{,}08 = 0{,}62 = 62\\%$', correct: true },
        { id: 'b', text: '$0{,}9 \\cdot 0{,}6 = 0{,}54 = 54\\%$', correct: false },
        { id: 'c', text: '$0{,}6 + 0{,}1 = 0{,}7 = 70\\%$', correct: false },
        { id: 'd', text: '$0{,}9 + 0{,}2 = 1{,}1$ (ungültig)', correct: false },
      ],
    },
    hintKeys: [
      'Erste Komponente von $T \\cdot \\vec{v}_0$: Skalarprodukt der ersten Zeile von $T$ mit $\\vec{v}_0$.',
      '$0{,}9 \\cdot 0{,}6 + 0{,}2 \\cdot 0{,}4 = ?$',
    ],
    solutionKey: '$\\vec{v}_1 = T \\cdot \\vec{v}_0 = \\begin{pmatrix} 0{,}9 \\cdot 0{,}6 + 0{,}2 \\cdot 0{,}4 \\\\ 0{,}1 \\cdot 0{,}6 + 0{,}8 \\cdot 0{,}4 \\end{pmatrix} = \\begin{pmatrix} 0{,}62 \\\\ 0{,}38 \\end{pmatrix}$. Spotify wächst auf 62 %, Apple Music fällt auf 38 %.',
    tags: ['spotify', 'marktanteile', 'markov', 'zustandsvektor', 'sachkontext'],
  },

  // ─── ERWEITERT (AFB III) – 5 Aufgaben ─────────────────────────────────────

  {
    id: 'mat-erweitert-001', topicId: '12-matrizen', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 14,
    contextKey: 'Spotify vs Apple Music',
    data: {
      questionText: 'Spotify vs. Apple Music: $T = \\begin{pmatrix} 0{,}9 & 0{,}2 \\\\ 0{,}1 & 0{,}8 \\end{pmatrix}$. Berechne den Fixvektor $\\vec{w}$ mit $T \\cdot \\vec{w} = \\vec{w}$ und $w_1 + w_2 = 1$.',
      steps: [
        {
          instruction: '$T \\cdot \\vec{w} = \\vec{w}$ bedeutet $(T - I) \\cdot \\vec{w} = \\vec{0}$. Berechne $T - I = \\begin{pmatrix} 0{,}9-1 & 0{,}2 \\\\ 0{,}1 & 0{,}8-1 \\end{pmatrix}$. Wie lautet Eintrag $(1,1)$?',
          type: 'numeric-input', expected: -0.1, tolerance: 0.001,
          showAnswer: '$T - I: (1,1) = 0{,}9 - 1 = -0{,}1$',
        },
        {
          instruction: 'Das LGS lautet: $-0{,}1 w_1 + 0{,}2 w_2 = 0$. Aus Gleichung 1: $w_1 = 2 w_2$. Mit $w_1 + w_2 = 1$: Berechne $w_2$.',
          type: 'numeric-input', expected: 1/3, tolerance: 0.005,
          showAnswer: '$2w_2 + w_2 = 1 \\Rightarrow w_2 = \\frac{1}{3} \\approx 0{,}333$',
        },
        {
          instruction: 'Berechne $w_1$ und interpretiere: Was bedeutet der Fixvektor für die langfristigen Marktanteile?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$w_1 = \\frac{2}{3} \\approx 66{,}7\\%$: Langfristig hat Spotify 66,7 % und Apple Music 33,3 % Marktanteil.', correct: true },
            { id: 'b', text: '$w_1 = 0{,}9$: Spotify behält immer 90 % Marktanteil.', correct: false },
            { id: 'c', text: '$w_1 = 0{,}5$: Marktanteile werden gleich.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$w_1 = 1 - \\frac{1}{3} = \\frac{2}{3}$. Fixvektor: $\\vec{w} = \\begin{pmatrix} 2/3 \\\\ 1/3 \\end{pmatrix}$.',
        },
      ],
    },
    hintKeys: [
      'Fixvektor: $T \\cdot \\vec{w} = \\vec{w} \\Leftrightarrow (T - I) \\cdot \\vec{w} = \\vec{0}$.',
      'Nebenbedingung: $w_1 + w_2 = 1$ (Wahrscheinlichkeitsvektor).',
    ],
    solutionKey: '$\\vec{w} = \\begin{pmatrix} 2/3 \\\\ 1/3 \\end{pmatrix}$. Langfristig: Spotify 66,7 %, Apple Music 33,3 % — unabhängig vom Startzustand.',
    tags: ['step-solver', 'fixvektor', 'gleichgewichtszustand', 'spotify', 'markov'],
  },

  {
    id: 'mat-erweitert-002', topicId: '12-matrizen', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 14,
    contextKey: 'Pendlerverhalten Stadt-Umland',
    data: {
      questionText: 'Gauss-Verfahren: Löse das LGS aus dem Pendlermodell. Gegeben: $(T - I) \\cdot \\vec{w} = \\vec{0}$ mit $T - I = \\begin{pmatrix} -0{,}2 & 0{,}3 \\\\ 0{,}2 & -0{,}3 \\end{pmatrix}$ und $w_1 + w_2 = 1$.',
      steps: [
        {
          instruction: 'Schreibe das erweiterte LGS: Zeile 1 lautet $-0{,}2 w_1 + 0{,}3 w_2 = 0$. Formen um: Was ist $w_1$ in Abhängigkeit von $w_2$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$w_1 = 1{,}5 \\cdot w_2$', correct: true },
            { id: 'b', text: '$w_1 = 0{,}2 \\cdot w_2$', correct: false },
            { id: 'c', text: '$w_1 = 0{,}3 \\cdot w_2$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$-0{,}2 w_1 = -0{,}3 w_2 \\Rightarrow w_1 = \\frac{0{,}3}{0{,}2} w_2 = 1{,}5 w_2$',
        },
        {
          instruction: 'Einsetzen in $w_1 + w_2 = 1$: Berechne $w_2$.',
          type: 'numeric-input', expected: 0.4, tolerance: 0.005,
          showAnswer: '$1{,}5 w_2 + w_2 = 1 \\Rightarrow 2{,}5 w_2 = 1 \\Rightarrow w_2 = 0{,}4$',
        },
        {
          instruction: 'Berechne $w_1$. Welcher Anteil wohnt langfristig in der Stadt?',
          type: 'numeric-input', expected: 0.6, tolerance: 0.005,
          showAnswer: '$w_1 = 1{,}5 \\cdot 0{,}4 = 0{,}6$. Stadt: 60 %, Umland: 40 %.',
        },
      ],
    },
    hintKeys: [
      'Gauss: Gleichung nach einer Variablen auflösen, dann einsetzen.',
      'Die zweite Gleichung $(T - I)$ ist immer linear abhängig von der ersten bei stochastischen Matrizen.',
    ],
    solutionKey: '$\\vec{w} = \\begin{pmatrix} 0{,}6 \\\\ 0{,}4 \\end{pmatrix}$. Langfristig: 60 % Stadt, 40 % Umland.',
    tags: ['step-solver', 'gauss', 'lgs', 'fixvektor', 'pendler'],
  },

  {
    id: 'mat-erweitert-003', topicId: '12-matrizen', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 10,
    contextKey: 'Wetter-Modell',
    data: {
      questionText: 'Wetter-Modell: $T = \\begin{pmatrix} 0{,}7 & 0{,}4 \\\\ 0{,}3 & 0{,}6 \\end{pmatrix}$, Startvektor $\\vec{v}_0 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ (heute sonnig). Berechne die erste Komponente von $\\vec{v}_2 = T^2 \\cdot \\vec{v}_0$ — den Anteil sonniger Tage übermorgen. (Hinweis: $\\vec{v}_1 = \\begin{pmatrix} 0{,}7 \\\\ 0{,}3 \\end{pmatrix}$)',
      correctValue: 0.61,
      tolerance: 0.005,
    },
    hintKeys: [
      '$\\vec{v}_2 = T \\cdot \\vec{v}_1 = T \\cdot \\begin{pmatrix} 0{,}7 \\\\ 0{,}3 \\end{pmatrix}$.',
      'Erste Komponente: $0{,}7 \\cdot 0{,}7 + 0{,}4 \\cdot 0{,}3 = ?$',
    ],
    solutionKey: '$\\vec{v}_2 = T \\cdot \\vec{v}_1 = \\begin{pmatrix} 0{,}7 \\cdot 0{,}7 + 0{,}4 \\cdot 0{,}3 \\\\ \\ldots \\end{pmatrix} = \\begin{pmatrix} 0{,}49 + 0{,}12 \\\\ \\ldots \\end{pmatrix} = \\begin{pmatrix} 0{,}61 \\\\ 0{,}39 \\end{pmatrix}$. Übermorgen: 61 % sonnig.',
    tags: ['matrizenpotenzen', 'wetter', 'markov', 'iteration'],
  },

  {
    id: 'mat-erweitert-004', topicId: '12-matrizen', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 7,
    data: {
      questionText: 'Finde den Fehler. Aufgabe: $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 & 1 \\\\ 2 & 0 \\end{pmatrix}$. Berechne $A \\cdot B$.',
      steps: [
        { content: '$(1,1)$: $1 \\cdot 0 + 2 \\cdot 2 = 4$', hasError: false },
        { content: '$(1,2)$: $1 \\cdot 1 + 2 \\cdot 0 = 1$', hasError: false },
        { content: '$(2,1)$: $3 \\cdot 0 + 4 \\cdot 2 = 8$', hasError: false },
        { content: '$(2,2)$: $3 \\cdot 1 + 4 \\cdot 1 = 7$', hasError: true, errorExplanation: 'Fehler in $(2,2)$: Das Skalarprodukt der zweiten Zeile von $A = (3, 4)$ mit der zweiten Spalte von $B = (1, 0)^T$ ergibt $3 \\cdot 1 + 4 \\cdot 0 = 3$, nicht 7.' },
      ],
    },
    hintKeys: [
      'Eintrag $(i,j)$ = Skalarprodukt der $i$-ten Zeile von $A$ mit der $j$-ten Spalte von $B$.',
      'Zweite Spalte von $B = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$.',
    ],
    solutionKey: '$A \\cdot B = \\begin{pmatrix} 4 & 1 \\\\ 8 & 3 \\end{pmatrix}$. Fehler bei $(2,2)$: $3 \\cdot 1 + 4 \\cdot 0 = 3$ (nicht 7).',
    tags: ['fehleranalyse', 'matrixmultiplikation', 'skalarprodukt'],
  },

  {
    id: 'mat-erweitert-005', topicId: '12-matrizen', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 8,
    contextKey: 'Spotify vs Apple Music',
    data: {
      questionText: 'Die Übergangsmatrix $T = \\begin{pmatrix} 0{,}9 & 0{,}2 \\\\ 0{,}1 & 0{,}8 \\end{pmatrix}$ hat den Fixvektor $\\vec{w} = \\begin{pmatrix} 2/3 \\\\ 1/3 \\end{pmatrix}$. Startvektor: $\\vec{v}_0 = \\begin{pmatrix} 0{,}5 \\\\ 0{,}5 \\end{pmatrix}$. Was gilt für $T^n \\cdot \\vec{v}_0$ wenn $n \\to \\infty$?',
      options: [
        { id: 'a', text: '$T^n \\cdot \\vec{v}_0 \\to \\vec{w} = \\begin{pmatrix} 2/3 \\\\ 1/3 \\end{pmatrix}$, unabhängig vom Startvektor.', correct: true },
        { id: 'b', text: 'Der Vektor bleibt immer bei $\\begin{pmatrix} 0{,}5 \\\\ 0{,}5 \\end{pmatrix}$.', correct: false },
        { id: 'c', text: 'Der Vektor strebt gegen $\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$.', correct: false },
        { id: 'd', text: 'Der Vektor divergiert (wird unbeschränkt groß).', correct: false },
      ],
    },
    hintKeys: [
      'Bei regulären Markov-Ketten konvergiert jede Iteration gegen den Fixvektor — unabhängig vom Startzustand.',
      'Der Fixvektor ist der eindeutige Gleichgewichtszustand der stochastischen Matrix.',
    ],
    solutionKey: 'Bei regulären stochastischen Matrizen gilt: $T^n \\cdot \\vec{v}_0 \\to \\vec{w}$ für $n \\to \\infty$, für jeden Startvektor. Das ist das Grenzverhalten von Markov-Ketten.',
    tags: ['grenzverhalten', 'fixvektor', 'konvergenz', 'markov', 'spotify'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 3 Aufgaben ───────────────────────

  {
    id: 'mat-ea-001', topicId: '12-matrizen', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'], points: 20, timeEstimate: 18,
    contextKey: 'PageRank',
    data: {
      questionText: 'Vereinfachter PageRank: 3 Webseiten $A$, $B$, $C$. Verlinkungsmatrix: $L = \\begin{pmatrix} 0 & 1/2 & 1 \\\\ 1/2 & 0 & 0 \\\\ 1/2 & 1/2 & 0 \\end{pmatrix}$. Startvektor: $\\vec{r}_0 = \\begin{pmatrix} 1/3 \\\\ 1/3 \\\\ 1/3 \\end{pmatrix}$. Berechne $\\vec{r}_1 = L \\cdot \\vec{r}_0$.',
      steps: [
        {
          instruction: 'Berechne die erste Komponente: $r_1^{(1)} = 0 \\cdot \\frac{1}{3} + \\frac{1}{2} \\cdot \\frac{1}{3} + 1 \\cdot \\frac{1}{3}$. Runde auf 3 Dezimalstellen.',
          type: 'numeric-input', expected: 0.5, tolerance: 0.002,
          showAnswer: '$0 + \\frac{1}{6} + \\frac{1}{3} = \\frac{0 + 1 + 2}{6} = \\frac{3}{6} = 0{,}5$',
        },
        {
          instruction: 'Berechne die zweite Komponente: $r_1^{(2)} = \\frac{1}{2} \\cdot \\frac{1}{3} + 0 + 0$.',
          type: 'numeric-input', expected: 1/6, tolerance: 0.003,
          showAnswer: '$\\frac{1}{2} \\cdot \\frac{1}{3} = \\frac{1}{6} \\approx 0{,}167$',
        },
        {
          instruction: 'Berechne die dritte Komponente und bestimme damit: Welche Seite hat nach einer Iteration den höchsten PageRank?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Seite A mit $r_1^{(1)} = 0{,}5$ hat den höchsten Rang.', correct: true },
            { id: 'b', text: 'Seite C mit $r_1^{(3)} \\approx 0{,}333$ hat den höchsten Rang.', correct: false },
            { id: 'c', text: 'Alle Seiten sind gleichrangig.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$r_1^{(3)} = \\frac{1}{2} \\cdot \\frac{1}{3} + \\frac{1}{2} \\cdot \\frac{1}{3} = \\frac{1}{3}$. Seite A: 0,5 > C: 0,333 > B: 0,167.',
        },
      ],
    },
    hintKeys: [
      'PageRank = Matrizenpotenzen auf einen Startvektor anwenden.',
      'Spaltensummen von $L$ sind 1 (stochastische Matrix).',
    ],
    solutionKey: '$\\vec{r}_1 = L \\cdot \\vec{r}_0 = \\begin{pmatrix} 1/2 \\\\ 1/6 \\\\ 1/3 \\end{pmatrix}$. Seite A hat höchsten Rang (beste Verlinkung). Iteration konvergiert gegen stationäre Verteilung.',
    tags: ['step-solver', 'pagerank', 'matrizenpotenzen', 'ea', 'verlinkung'],
  },

  {
    id: 'mat-ea-002', topicId: '12-matrizen', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'], points: 20, timeEstimate: 16,
    contextKey: 'Populationsdynamik',
    data: {
      questionText: 'Leslie-Matrix: Eine Froschpopulation hat zwei Altersklassen (Kaulquappe, Frosch). Leslie-Matrix: $L = \\begin{pmatrix} 0 & 2 \\\\ 0{,}5 & 0{,}8 \\end{pmatrix}$. Startpopulation: $\\vec{p}_0 = \\begin{pmatrix} 100 \\\\ 50 \\end{pmatrix}$ (100 Kaulquappen, 50 Frösche). Berechne $\\vec{p}_1 = L \\cdot \\vec{p}_0$.',
      steps: [
        {
          instruction: 'Berechne die Anzahl der Kaulquappen in der nächsten Generation: $0 \\cdot 100 + 2 \\cdot 50 = ?$',
          type: 'numeric-input', expected: 100, tolerance: 0,
          showAnswer: '$0 \\cdot 100 + 2 \\cdot 50 = 0 + 100 = 100$ Kaulquappen (Nachwuchs der Frösche).',
        },
        {
          instruction: 'Berechne die Anzahl der adulten Frösche: $0{,}5 \\cdot 100 + 0{,}8 \\cdot 50 = ?$',
          type: 'numeric-input', expected: 90, tolerance: 0,
          showAnswer: '$0{,}5 \\cdot 100 + 0{,}8 \\cdot 50 = 50 + 40 = 90$ Frösche.',
        },
        {
          instruction: 'Was bedeutet das Wachstum von 150 auf 190 Individuen insgesamt? Wähle die korrekte Interpretation.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Die Population wächst: $\\frac{190}{150} \\approx 1{,}27$, also ca. 27 % Wachstum pro Generation.', correct: true },
            { id: 'b', text: 'Die Population bleibt konstant, da die Leslie-Matrix stochastisch ist.', correct: false },
            { id: 'c', text: 'Die Population stirbt langfristig aus, weil die Überlebensrate 0,8 < 1 ist.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\vec{p}_1 = \\begin{pmatrix} 100 \\\\ 90 \\end{pmatrix}$, Gesamtpopulation: 190 > 150. Wachstumsfaktor $\\approx 1{,}27$.',
        },
      ],
    },
    hintKeys: [
      'Leslie-Matrix: Zeile 1 = Fruchtbarkeit (Nachwuchs), Zeile 2 = Überleben und Wandern.',
      'Der Wachstumsfaktor $\\lambda$ ist der dominante Eigenwert der Leslie-Matrix.',
    ],
    solutionKey: '$\\vec{p}_1 = L \\cdot \\vec{p}_0 = \\begin{pmatrix} 100 \\\\ 90 \\end{pmatrix}$. Gesamtpopulation wächst von 150 auf 190 ($\\approx 27\\%$). Langfristig konvergiert das Verhältnis gegen den Eigenvektor.',
    tags: ['step-solver', 'leslie-matrix', 'populationsdynamik', 'ea', 'wachstum'],
  },

  {
    id: 'mat-ea-003', topicId: '12-matrizen', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'], points: 20, timeEstimate: 18,
    contextKey: 'Pendlerverhalten Stadt-Umland',
    data: {
      questionText: 'Grenzverhalten: Pendler-Übergangsmatrix $T = \\begin{pmatrix} 0{,}8 & 0{,}3 \\\\ 0{,}2 & 0{,}7 \\end{pmatrix}$. Zeige, dass $T$ unabhängig vom Startvektor gegen den Fixvektor $\\vec{w} = \\begin{pmatrix} 0{,}6 \\\\ 0{,}4 \\end{pmatrix}$ konvergiert.',
      steps: [
        {
          instruction: 'Überprüfe: Ist $\\vec{w}$ tatsächlich ein Fixvektor? Berechne die erste Komponente von $T \\cdot \\vec{w} = \\begin{pmatrix} 0{,}8 & 0{,}3 \\\\ 0{,}2 & 0{,}7 \\end{pmatrix} \\cdot \\begin{pmatrix} 0{,}6 \\\\ 0{,}4 \\end{pmatrix}$.',
          type: 'numeric-input', expected: 0.6, tolerance: 0.001,
          showAnswer: '$0{,}8 \\cdot 0{,}6 + 0{,}3 \\cdot 0{,}4 = 0{,}48 + 0{,}12 = 0{,}6$ ✓',
        },
        {
          instruction: 'Starte mit $\\vec{v}_0 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ (alle in Stadt). Berechne $\\vec{v}_3$ durch dreifache Anwendung von $T$. ($\\vec{v}_1 = \\begin{pmatrix} 0{,}8 \\\\ 0{,}2 \\end{pmatrix}$, $\\vec{v}_2 = \\begin{pmatrix} 0{,}7 \\\\ 0{,}3 \\end{pmatrix}$). Erste Komponente von $\\vec{v}_3$?',
          type: 'numeric-input', expected: 0.65, tolerance: 0.005,
          showAnswer: '$\\vec{v}_3 = T \\cdot \\vec{v}_2$: $0{,}8 \\cdot 0{,}7 + 0{,}3 \\cdot 0{,}3 = 0{,}56 + 0{,}09 = 0{,}65$',
        },
        {
          instruction: 'Die Folge der ersten Komponenten ist: $1{,}0 \\to 0{,}8 \\to 0{,}7 \\to 0{,}65 \\to \\ldots \\to 0{,}6$. Was beschreibt dieses Verhalten?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Monoton fallende Konvergenz gegen den Fixvektor-Wert $w_1 = 0{,}6$.', correct: true },
            { id: 'b', text: 'Oszillierende Folge ohne Grenzwert.', correct: false },
            { id: 'c', text: 'Die Folge strebt gegen 0.', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Die Folge konvergiert monoton gegen $w_1 = 0{,}6$ — das ist das Grenzverhalten regulärer Markov-Ketten.',
        },
      ],
    },
    hintKeys: [
      'Fixvektor-Probe: $T \\cdot \\vec{w} = \\vec{w}$ nachrechnen.',
      'Reguläre Markov-Kette: Alle Einträge von $T^n$ konvergieren für $n \\to \\infty$.',
    ],
    solutionKey: '$T \\cdot \\vec{w} = \\vec{w}$ ✓. Iteration von $\\vec{v}_0 = (1, 0)^T$: $0{,}8 \\to 0{,}7 \\to 0{,}65 \\to \\ldots \\to 0{,}6$. Konvergenz gegen Fixvektor — unabhängig vom Start.',
    tags: ['step-solver', 'grenzverhalten', 'konvergenz', 'fixvektor', 'pendler', 'ea'],
  },
];
