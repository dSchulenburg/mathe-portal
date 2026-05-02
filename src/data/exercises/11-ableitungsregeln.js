export const exercises = [
  // ─────────────────────────────────────────────
  // BASIS (AFB I) — 5 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'abl-basis-001',
    topicId: '11-ableitungsregeln',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Leite die Funktion $f(x) = x^3$ ab. Welchen Wert hat $f\'(2)$?',
      correctValue: 12,
      tolerance: 0.01,
    },
    hintKeys: [
      'Potenzregel: $(x^n)\' = n \\cdot x^{n-1}$.',
      '$f\'(x) = 3x^2$. Setze $x = 2$ ein.',
    ],
    solutionKey:
      'Mit der Potenzregel: $f\'(x) = 3x^2$. ' +
      '$f\'(2) = 3 \\cdot 4 = 12$.',
    tags: ['potenzregel', 'basis-ableitung'],
  },

  {
    id: 'abl-basis-002',
    topicId: '11-ableitungsregeln',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Welche Ableitung ergibt die Faktorregel für $f(x) = 5x^4$?',
      options: [
        { id: 'a', text: "$f'(x) = 20x^3$", correct: true },
        { id: 'b', text: "$f'(x) = 5x^3$", correct: false },
        { id: 'c', text: "$f'(x) = 4x^4$", correct: false },
        { id: 'd', text: "$f'(x) = 20x^4$", correct: false },
      ],
    },
    hintKeys: [
      'Faktorregel: $(c \\cdot x^n)\' = c \\cdot n \\cdot x^{n-1}$.',
      'Konstante $5$ bleibt stehen, Exponent $4$ kommt als Faktor nach vorn.',
    ],
    solutionKey:
      'Faktorregel + Potenzregel: $f\'(x) = 5 \\cdot 4x^3 = 20x^3$.',
    tags: ['faktorregel', 'potenzregel'],
  },

  {
    id: 'abl-basis-003',
    topicId: '11-ableitungsregeln',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Bestimme die Ableitung von $f(x) = 3x^2 + 2x - 7$ mithilfe der Summenregel.',
      options: [
        { id: 'a', text: "$f'(x) = 6x + 2$", correct: true },
        { id: 'b', text: "$f'(x) = 6x^2 + 2x$", correct: false },
        { id: 'c', text: "$f'(x) = 6x + 2 - 7$", correct: false },
        { id: 'd', text: "$f'(x) = 3x + 2$", correct: false },
      ],
    },
    hintKeys: [
      'Summenregel: Jedes Glied wird separat abgeleitet.',
      'Konstanten (hier $-7$) haben die Ableitung $0$.',
    ],
    solutionKey:
      'Gliedweise ableiten: $(3x^2)\' = 6x$, $(2x)\' = 2$, $(-7)\' = 0$. ' +
      'Also $f\'(x) = 6x + 2$.',
    tags: ['summenregel', 'faktorregel', 'potenzregel'],
  },

  {
    id: 'abl-basis-004',
    topicId: '11-ableitungsregeln',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Leite $f(x) = x^5$ ab und berechne $f\'(1)$.',
      correctValue: 5,
      tolerance: 0.01,
    },
    hintKeys: [
      'Potenzregel: $(x^n)\' = n \\cdot x^{n-1}$.',
      '$f\'(x) = 5x^4$. Setze $x = 1$ ein.',
    ],
    solutionKey:
      '$f\'(x) = 5x^4$. $f\'(1) = 5 \\cdot 1 = 5$.',
    tags: ['potenzregel', 'basis-ableitung'],
  },

  {
    id: 'abl-basis-005',
    topicId: '11-ableitungsregeln',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Welche Ableitung hat die Funktion $f(x) = -2x^3 + 4x$?',
      options: [
        { id: 'a', text: "$f'(x) = -6x^2 + 4$", correct: true },
        { id: 'b', text: "$f'(x) = -6x^2 + 4x$", correct: false },
        { id: 'c', text: "$f'(x) = -2x^2 + 4$", correct: false },
        { id: 'd', text: "$f'(x) = -6x^3 + 4$", correct: false },
      ],
    },
    hintKeys: [
      'Leite jeden Summanden einzeln ab.',
      '$(-2x^3)\' = -6x^2$ und $(4x)\' = 4$.',
    ],
    solutionKey:
      'Summenregel: $(-2x^3)\' = -6x^2$, $(4x)\' = 4$. ' +
      'Also $f\'(x) = -6x^2 + 4$.',
    tags: ['summenregel', 'faktorregel', 'potenzregel'],
  },

  // ─────────────────────────────────────────────
  // STANDARD (AFB II) — 6 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'abl-std-001',
    topicId: '11-ableitungsregeln',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    data: {
      questionText:
        'Leite $f(x) = x^2 \\cdot \\sin(x)$ mit der Produktregel ab. ' +
        'Welchen Wert hat $f\'(0)$?',
      correctValue: 0,
      tolerance: 0.01,
    },
    hintKeys: [
      'Produktregel: $(u \\cdot v)\' = u\'v + uv\'$.',
      'Setze $u = x^2$, $v = \\sin(x)$. Dann $u\' = 2x$, $v\' = \\cos(x)$.',
    ],
    solutionKey:
      '$f\'(x) = 2x \\cdot \\sin(x) + x^2 \\cdot \\cos(x)$. ' +
      '$f\'(0) = 0 \\cdot \\sin(0) + 0 \\cdot \\cos(0) = 0$.',
    tags: ['produktregel', 'sinus', 'trigonometrie'],
  },

  {
    id: 'abl-std-002',
    topicId: '11-ableitungsregeln',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    contextKey: 'Skateboard-Halfpipe',
    data: {
      questionText:
        'Die Kurve einer Halfpipe wird beschrieben durch $h(x) = (2x + 1)^3$ (Höhe in m). ' +
        'Berechne die Steigung $h\'(x)$ an der Stelle $x = 0$ mithilfe der Kettenregel.',
      correctValue: 6,
      tolerance: 0.01,
    },
    hintKeys: [
      'Kettenregel: $[f(g(x))]\' = f\'(g(x)) \\cdot g\'(x)$.',
      'Äußere Funktion: $u^3$, innere Funktion: $u = 2x + 1$.',
    ],
    solutionKey:
      '$h\'(x) = 3(2x + 1)^2 \\cdot 2 = 6(2x + 1)^2$. ' +
      '$h\'(0) = 6 \\cdot 1^2 = 6$. Die Steigung an der Stelle $x = 0$ beträgt $6$.',
    tags: ['kettenregel', 'sachkontext', 'skateboard'],
  },

  {
    id: 'abl-std-003',
    topicId: '11-ableitungsregeln',
    type: 'step-solver',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 12,
    timeEstimate: 8,
    contextKey: 'Spotify-Streams',
    data: {
      questionText:
        'Spotify-Streams eines Songs verlaufen nach $S(t) = (t^2 + 3) \\cdot e^t$ (in Mio., $t$ in Wochen). ' +
        'Bestimme $S\'(t)$ schrittweise mit der Produktregel.',
      steps: [
        {
          instruction: 'Welche zwei Faktoren werden bei der Produktregel als $u$ und $v$ gewählt?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$u = t^2 + 3$ und $v = e^t$' },
            { id: 'b', text: '$u = t^2$ und $v = 3 \\cdot e^t$' },
            { id: 'c', text: '$u = e^t$ und $v = t^2$' },
          ],
          correctId: 'a',
          showAnswer: '$u = t^2 + 3$, $v = e^t$ — beides sind Faktoren im Produkt.',
        },
        {
          instruction: 'Berechne $u\'$ (Ableitung von $t^2 + 3$).',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$2t$' },
            { id: 'b', text: '$2t + 3$' },
            { id: 'c', text: '$2t - 3$' },
          ],
          correctId: 'a',
          showAnswer: "$(t^2 + 3)' = 2t$ (Konstante $3$ fällt weg)",
        },
        {
          instruction: "Wie lautet die vollständige Produktregel $S'(t) = u'v + uv'$?",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: "$S'(t) = 2t \\cdot e^t + (t^2 + 3) \\cdot e^t$" },
            { id: 'b', text: "$S'(t) = 2t \\cdot e^t$" },
            { id: 'c', text: "$S'(t) = (t^2 + 3) \\cdot e^t$" },
          ],
          correctId: 'a',
          showAnswer: "$S'(t) = 2t \\cdot e^t + (t^2 + 3) \\cdot e^t = (t^2 + 2t + 3) \\cdot e^t$",
        },
      ],
    },
    hintKeys: [
      'Produktregel: $(u \\cdot v)\' = u\'v + uv\'$.',
      "$(e^t)' = e^t$ — die e-Funktion leitet sich selbst ab.",
    ],
    solutionKey:
      "$S'(t) = 2t \\cdot e^t + (t^2 + 3) \\cdot e^t = (t^2 + 2t + 3) \\cdot e^t$.",
    tags: ['step-solver', 'produktregel', 'sachkontext', 'spotify', 'e-funktion'],
  },

  {
    id: 'abl-std-004',
    topicId: '11-ableitungsregeln',
    type: 'step-solver',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 12,
    timeEstimate: 8,
    contextKey: 'Mietpreisentwicklung',
    data: {
      questionText:
        'Der Mietpreis (€/m²) in einem Stadtteil entwickelt sich nach $M(t) = \\sqrt{3t + 1}$ ($t$ in Jahren). ' +
        'Berechne $M\'(t)$ schrittweise mit der Kettenregel.',
      steps: [
        {
          instruction: 'Schreibe $\\sqrt{3t+1}$ als Potenz um.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$(3t+1)^{1/2}$' },
            { id: 'b', text: '$(3t+1)^2$' },
            { id: 'c', text: '$(3t)^{1/2} + 1$' },
          ],
          correctId: 'a',
          showAnswer: '$\\sqrt{3t+1} = (3t+1)^{1/2}$ — Wurzel ist Potenz mit Exponent $\\frac{1}{2}$.',
        },
        {
          instruction: "Äußere Funktion $f(u) = u^{1/2}$: Was ist $f'(u)$?",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\frac{1}{2} u^{-1/2}$' },
            { id: 'b', text: '$\\frac{1}{2} u^{1/2}$' },
            { id: 'c', text: '$2u^{1/2}$' },
          ],
          correctId: 'a',
          showAnswer: "$f'(u) = \\frac{1}{2} u^{-1/2} = \\frac{1}{2\\sqrt{u}}$",
        },
        {
          instruction: "Innere Ableitung von $g(t) = 3t + 1$: $g'(t) = ?$",
          type: 'numeric-input',
          expected: 3,
          tolerance: 0.01,
          showAnswer: "$g'(t) = 3$",
        },
        {
          instruction: "Setze alles in die Kettenregel ein. $M'(t) = ?$ (Tipp: vereinfacht mit $\\sqrt{\\cdot}$)",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: "$M'(t) = \\frac{3}{2\\sqrt{3t+1}}$" },
            { id: 'b', text: "$M'(t) = \\frac{1}{2\\sqrt{3t+1}}$" },
            { id: 'c', text: "$M'(t) = \\frac{3}{\\sqrt{3t+1}}$" },
          ],
          correctId: 'a',
          showAnswer: "$M'(t) = \\frac{1}{2\\sqrt{3t+1}} \\cdot 3 = \\frac{3}{2\\sqrt{3t+1}}$",
        },
      ],
    },
    hintKeys: [
      'Kettenregel: $[f(g(t))]\' = f\'(g(t)) \\cdot g\'(t)$.',
      'Äußere Funktion: $\\sqrt{u}$, innere Funktion: $u = 3t + 1$.',
    ],
    solutionKey:
      "$M'(t) = \\frac{3}{2\\sqrt{3t+1}}$. Die Kettenregel multipliziert die äußere Ableitung mit der inneren Ableitung $3$.",
    tags: ['step-solver', 'kettenregel', 'sachkontext', 'mietpreise', 'wurzelfunktion'],
  },

  {
    id: 'abl-std-005',
    topicId: '11-ableitungsregeln',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    data: {
      questionText:
        'Leite $f(x) = (x^3 - 2x)^4$ mit der Kettenregel ab und berechne $f\'(1)$.',
      correctValue: -4,
      tolerance: 0.01,
    },
    hintKeys: [
      'Äußere Funktion: $u^4$, innere Funktion: $u = x^3 - 2x$.',
      "$f'(x) = 4(x^3 - 2x)^3 \\cdot (3x^2 - 2)$. Setze $x = 1$: $(1 - 2) = -1$.",
    ],
    solutionKey:
      "$f'(x) = 4(x^3 - 2x)^3 \\cdot (3x^2 - 2)$. " +
      "$f'(1) = 4 \\cdot (-1)^3 \\cdot (3 - 2) = 4 \\cdot (-1) \\cdot 1 = -4$.",
    tags: ['kettenregel', 'zusammengesetzte-funktion'],
  },

  {
    id: 'abl-std-006',
    topicId: '11-ableitungsregeln',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Welche Ableitung ergibt sich für $f(x) = x \\cdot e^{2x}$ mit der Produktregel?',
      options: [
        { id: 'a', text: "$f'(x) = e^{2x} + 2x \\cdot e^{2x}$", correct: true },
        { id: 'b', text: "$f'(x) = 2x \\cdot e^{2x}$", correct: false },
        { id: 'c', text: "$f'(x) = e^{2x} + x \\cdot e^{2x}$", correct: false },
        { id: 'd', text: "$f'(x) = 2 \\cdot e^{2x}$", correct: false },
      ],
    },
    hintKeys: [
      "Produktregel: $(u \\cdot v)' = u'v + uv'$ mit $u = x$ und $v = e^{2x}$.",
      "$(e^{2x})' = 2e^{2x}$ (Kettenregel, innere Ableitung $= 2$).",
    ],
    solutionKey:
      "$u = x \\Rightarrow u' = 1$; $v = e^{2x} \\Rightarrow v' = 2e^{2x}$. " +
      "$f'(x) = 1 \\cdot e^{2x} + x \\cdot 2e^{2x} = e^{2x}(1 + 2x)$.",
    tags: ['produktregel', 'kettenregel', 'e-funktion'],
  },

  // ─────────────────────────────────────────────
  // ERWEITERT (AFB III) — 5 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'abl-erw-001',
    topicId: '11-ableitungsregeln',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 7,
    data: {
      questionText:
        'Leite $f(x) = \\sin(x^2)$ ab (Kettenregel). Welchen Wert hat $f\'(0)$?',
      correctValue: 0,
      tolerance: 0.01,
    },
    hintKeys: [
      "Kettenregel: äußere Funktion $\\sin(u)$, innere Funktion $u = x^2$.",
      "$f'(x) = \\cos(x^2) \\cdot 2x$. Setze $x = 0$.",
    ],
    solutionKey:
      "$f'(x) = \\cos(x^2) \\cdot 2x$. $f'(0) = \\cos(0) \\cdot 0 = 1 \\cdot 0 = 0$.",
    tags: ['kettenregel', 'sinus', 'trigonometrie'],
  },

  {
    id: 'abl-erw-002',
    topicId: '11-ableitungsregeln',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 8,
    contextKey: 'Akku-Entladekurve',
    data: {
      questionText:
        'Der Ladestand eines Akkus folgt $A(t) = 100 \\cdot e^{-0{,}1t}$ (in %, $t$ in Minuten). ' +
        'Wie schnell entlädt sich der Akku zum Zeitpunkt $t = 10$? (Berechne $A\'(10)$, auf 2 Dezimalstellen gerundet.)',
      correctValue: -3.68,
      tolerance: 0.05,
      unit: '%/min',
    },
    hintKeys: [
      "Kettenregel: $(100 \\cdot e^{-0{,}1t})' = 100 \\cdot e^{-0{,}1t} \\cdot (-0{,}1)$.",
      "$A'(10) = -10 \\cdot e^{-1} \\approx -10 \\cdot 0{,}368 = -3{,}68$.",
    ],
    solutionKey:
      "$A'(t) = -10 \\cdot e^{-0{,}1t}$. " +
      "$A'(10) = -10 \\cdot e^{-1} \\approx -3{,}68$ %/min. " +
      "Der Akku entlädt sich zum Zeitpunkt $t = 10$ mit ca. $3{,}68$ %/min.",
    tags: ['kettenregel', 'sachkontext', 'akku', 'e-funktion'],
  },

  {
    id: 'abl-erw-003',
    topicId: '11-ableitungsregeln',
    type: 'drag-match',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 6,
    data: {
      questionText:
        'Ordne jeder Funktion ihre korrekte Ableitung zu. Nutze dein Wissen über alle Ableitungsregeln.',
      pairs: [
        { id: 'a', left: '$f(x) = \\sin(3x)$',          right: "$f'(x) = 3\\cos(3x)$" },
        { id: 'b', left: '$f(x) = x \\cdot \\cos(x)$',  right: "$f'(x) = \\cos(x) - x\\sin(x)$" },
        { id: 'c', left: '$f(x) = e^{5x}$',              right: "$f'(x) = 5e^{5x}$" },
        { id: 'd', left: '$f(x) = (x^2 + 1)^3$',        right: "$f'(x) = 6x(x^2+1)^2$" },
      ],
    },
    hintKeys: [
      'Kettenregel für $\\sin(3x)$ und $e^{5x}$: innere Ableitung nicht vergessen.',
      'Produktregel für $x \\cdot \\cos(x)$.',
    ],
    solutionKey:
      "$[\\sin(3x)]' = 3\\cos(3x)$; " +
      "$[x\\cos(x)]' = \\cos(x) - x\\sin(x)$; " +
      "$[e^{5x}]' = 5e^{5x}$; " +
      "$[(x^2+1)^3]' = 3(x^2+1)^2 \\cdot 2x = 6x(x^2+1)^2$.",
    tags: ['drag-match', 'kettenregel', 'produktregel', 'sinus', 'e-funktion'],
  },

  {
    id: 'abl-erw-004',
    topicId: '11-ableitungsregeln',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 9,
    contextKey: 'Spotify-Hörerzahlen',
    data: {
      questionText:
        'Die monatlichen Hörerzahlen (in Mio.) folgen $f(t) = t^2 \\cdot e^{-0{,}5t}$ ($t$ in Monaten nach Release). ' +
        'Berechne $f\'(2)$ (Produktregel + Kettenregel, auf 4 Dezimalstellen).',
      correctValue: 0,
      tolerance: 0.01,
    },
    hintKeys: [
      "Produktregel: $u = t^2$, $v = e^{-0{,}5t}$.",
      "$f'(t) = 2t \\cdot e^{-0{,}5t} + t^2 \\cdot (-0{,}5) \\cdot e^{-0{,}5t}$.",
      "Bei $t = 2$: $f'(2) = 4e^{-1} - 2e^{-1} = 2e^{-1} \\cdot (1 - 1) = ?$",
    ],
    solutionKey:
      "$f'(t) = 2t \\cdot e^{-0{,}5t} - 0{,}5t^2 \\cdot e^{-0{,}5t} = e^{-0{,}5t}(2t - 0{,}5t^2)$. " +
      "$f'(2) = e^{-1}(4 - 2) = 2e^{-1} \\approx 0{,}7358$. " +
      "Hinweis: Das Maximum der Hörerzahlen liegt bei $t = 4$ (wenn $f'(t) = 0$).",
    tags: ['produktregel', 'kettenregel', 'sachkontext', 'spotify', 'e-funktion'],
  },

  {
    id: 'abl-erw-005',
    topicId: '11-ableitungsregeln',
    type: 'error-analysis',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 8,
    data: {
      questionText:
        'Schüler Jonas leitet $f(x) = (x^2 + 1)^3$ ab. Finde den Fehler in seiner Rechnung:',
      steps: [
        {
          content: 'Äußere Funktion: $u^3$, innere Funktion: $u = x^2 + 1$',
          hasError: false,
        },
        {
          content: "Äußere Ableitung: $3u^2 = 3(x^2+1)^2$",
          hasError: false,
        },
        {
          content: "Innere Ableitung: $g'(x) = 2$",
          hasError: true,
          errorExplanation:
            "Fehler: Die innere Ableitung von $x^2 + 1$ ist $2x$, nicht $2$. " +
            "Die Ableitung von $x^2$ ergibt $2x$ (Potenzregel), nicht $2$.",
        },
        {
          content: "$f'(x) = 3(x^2+1)^2 \\cdot 2 = 6(x^2+1)^2$",
          hasError: true,
          errorExplanation:
            "Durch den Fehler in Schritt 3 fehlt das $x$. " +
            "Korrekt: $f'(x) = 3(x^2+1)^2 \\cdot 2x = 6x(x^2+1)^2$.",
        },
      ],
    },
    hintKeys: [
      'Die Ableitung von $x^2 + 1$ enthält noch ein $x$.',
      "Kettenregel: innere Ableitung von $x^2 + 1$ ist $2x$.",
    ],
    solutionKey:
      "Korrekte Rechnung: $f'(x) = 3(x^2+1)^2 \\cdot 2x = 6x(x^2+1)^2$. " +
      "Jonas hat die innere Ableitung $2x$ fälschlicherweise als $2$ angegeben.",
    tags: ['fehleranalyse', 'kettenregel', 'innere-ableitung'],
  },

  // ─────────────────────────────────────────────
  // eA (Erhöhtes Anforderungsniveau) — 2 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'abl-ea-001',
    topicId: '11-ableitungsregeln',
    type: 'step-solver',
    diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kreativität', 'kommunikation'],
    points: 20,
    timeEstimate: 12,
    data: {
      questionText:
        'Begründe mithilfe des Grenzwertverfahrens, warum $(x^n)\' = nx^{n-1}$ gilt. ' +
        'Arbeite den Beweis für $n = 2$ schrittweise durch.',
      steps: [
        {
          instruction:
            'Formuliere den Differenzenquotienten für $f(x) = x^2$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\frac{(x+h)^2 - x^2}{h}$' },
            { id: 'b', text: '$\\frac{x^2 + h^2 - x^2}{h}$' },
            { id: 'c', text: '$\\frac{(x+h)^2}{h}$' },
          ],
          correctId: 'a',
          showAnswer: '$\\frac{(x+h)^2 - x^2}{h}$ — das ist die Definition des Differenzenquotienten.',
        },
        {
          instruction: 'Entwickle $(x+h)^2 = x^2 + 2xh + h^2$ und kürze. Was bleibt übrig (vor dem Grenzübergang)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$2x + h$' },
            { id: 'b', text: '$2x$' },
            { id: 'c', text: '$2xh + h^2$' },
          ],
          correctId: 'a',
          showAnswer: '$\\frac{2xh + h^2}{h} = 2x + h$ — nach dem Kürzen durch $h$.',
        },
        {
          instruction: 'Bilde den Grenzwert für $h \\to 0$. Was ergibt $(x^2)\' = ?$',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$2x$' },
            { id: 'b', text: '$2x + 1$' },
            { id: 'c', text: '$x$' },
          ],
          correctId: 'a',
          showAnswer: '$\\lim_{h \\to 0}(2x + h) = 2x$ — damit ist $(x^2)\' = 2x = 2 \\cdot x^{2-1}$. ✓',
        },
        {
          instruction:
            'Allgemein: Für $f(x) = x^n$ gilt nach dem Binomischen Lehrsatz $\\frac{(x+h)^n - x^n}{h} \\to nx^{n-1}$. ' +
            'Welcher Term aus der binomischen Entwicklung überlebt den Grenzübergang $h \\to 0$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Nur der Term mit $h^1$, also $n \\cdot x^{n-1} \\cdot h$ → ergibt $nx^{n-1}$' },
            { id: 'b', text: 'Alle Terme außer $x^n$' },
            { id: 'c', text: 'Nur $h^n$' },
          ],
          correctId: 'a',
          showAnswer:
            'Aus $(x+h)^n = x^n + nx^{n-1}h + \\binom{n}{2}x^{n-2}h^2 + \\ldots$ kürzt man $x^n$ und $h$. ' +
            'Für $h \\to 0$ bleibt nur $nx^{n-1}$ übrig. ∎',
        },
      ],
    },
    hintKeys: [
      'Nutze den Binomischen Lehrsatz: $(x+h)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} h^k$.',
      'Terme mit $h^2, h^3, \\ldots$ verschwinden für $h \\to 0$.',
    ],
    solutionKey:
      'Der Differenzenquotient für $x^n$ liefert nach dem Kürzen durch $h$ den Term $nx^{n-1}$ plus Terme mit $h$. ' +
      'Im Grenzwert $h \\to 0$ bleibt genau $nx^{n-1}$ übrig — das ist die Potenzregel.',
    tags: ['step-solver', 'beweis', 'potenzregel', 'grenzwert', 'binomischer-lehrsatz', 'ea'],
  },

  {
    id: 'abl-ea-002',
    topicId: '11-ableitungsregeln',
    type: 'step-solver',
    diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kreativität'],
    points: 20,
    timeEstimate: 14,
    contextKey: 'Mehrfache Verkettung',
    data: {
      questionText:
        'Leite $f(x) = \\sin((x^2 + 1)^3)$ ab — eine dreifache Verkettung. ' +
        'Wende die Kettenregel zweimal an.',
      steps: [
        {
          instruction: 'Identifiziere die drei Schichten der Verkettung (von außen nach innen).',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\sin(\\cdot)$ → $(\\cdot)^3$ → $x^2 + 1$' },
            { id: 'b', text: '$(\\cdot)^3$ → $\\sin(\\cdot)$ → $x^2 + 1$' },
            { id: 'c', text: '$x^2 + 1$ → $(\\cdot)^3$ → $\\sin(\\cdot)$' },
          ],
          correctId: 'a',
          showAnswer:
            'Außen: $\\sin$, Mitte: Potenz $3$, Innen: $x^2 + 1$. ' +
            'Kettenregel von außen nach innen anwenden.',
        },
        {
          instruction:
            'Erste Kettenregel (äußerste Schicht ableiten): $[\\sin(u)]\' \\cdot u\'$ mit $u = (x^2+1)^3$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: "$\\cos((x^2+1)^3) \\cdot [(x^2+1)^3]'$" },
            { id: 'b', text: "$\\cos(x^2+1) \\cdot 3(x^2+1)^2$" },
            { id: 'c', text: "$-\\sin((x^2+1)^3) \\cdot 3$" },
          ],
          correctId: 'a',
          showAnswer:
            "Äußere Ableitung: $\\cos((x^2+1)^3)$. Noch muss $[(x^2+1)^3]'$ berechnet werden (zweite Kettenregel).",
        },
        {
          instruction: "Zweite Kettenregel: $[(x^2+1)^3]' = ?$ (wieder Kette: Potenz + Polynom)",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: "$3(x^2+1)^2 \\cdot 2x$" },
            { id: 'b', text: "$3(x^2+1)^2$" },
            { id: 'c', text: "$6x(x^2+1)^3$" },
          ],
          correctId: 'a',
          showAnswer: "$[(x^2+1)^3]' = 3(x^2+1)^2 \\cdot 2x = 6x(x^2+1)^2$",
        },
        {
          instruction: "Alles zusammensetzen: Wie lautet $f'(x)$ vollständig?",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: "$f'(x) = \\cos((x^2+1)^3) \\cdot 6x(x^2+1)^2$" },
            { id: 'b', text: "$f'(x) = \\cos((x^2+1)^3) \\cdot 3(x^2+1)^2$" },
            { id: 'c', text: "$f'(x) = \\sin((x^2+1)^3) \\cdot 6x(x^2+1)^2$" },
          ],
          correctId: 'a',
          showAnswer:
            "$f'(x) = \\cos((x^2+1)^3) \\cdot 6x(x^2+1)^2$. " +
            "Alle drei Schichten wurden korrekt abgeleitet und multipliziert.",
        },
      ],
    },
    hintKeys: [
      'Kettenregel bei mehrfacher Verkettung: von außen nach innen ableiten, alle Ableitungen multiplizieren.',
      'Schreibe die Schichten auf: $f = \\sin \\circ g \\circ h$ mit $g(u) = u^3$ und $h(x) = x^2 + 1$.',
    ],
    solutionKey:
      "$f'(x) = \\cos((x^2+1)^3) \\cdot 3(x^2+1)^2 \\cdot 2x = 6x(x^2+1)^2 \\cdot \\cos((x^2+1)^3)$. " +
      "Die Kettenregel wird zweimal angewandt: einmal für $\\sin(u^3)$ und einmal für $(x^2+1)^3$.",
    tags: ['step-solver', 'kettenregel', 'mehrfache-verkettung', 'sinus', 'ea'],
  },
];
