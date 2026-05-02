export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'rat-basis-001', topicId: '11-rationale-funktionen', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Was ist die Definitionsmenge von $f(x) = \\dfrac{1}{x - 4}$?',
      options: [
        { id: 'a', text: '$\\mathbb{R}$', correct: false },
        { id: 'b', text: '$\\mathbb{R} \\setminus \\{4\\}$', correct: true },
        { id: 'c', text: '$\\mathbb{R} \\setminus \\{0\\}$', correct: false },
        { id: 'd', text: '$\\mathbb{R} \\setminus \\{-4\\}$', correct: false },
      ],
    },
    hintKeys: ['Der Nenner darf nicht 0 sein. Wann ist $x - 4 = 0$?'],
    solutionKey: '$x - 4 = 0 \\Rightarrow x = 4$. Bei $x = 4$ ist die Funktion nicht definiert: $D = \\mathbb{R} \\setminus \\{4\\}$.',
    tags: ['definitionsmenge', 'polstelle'],
  },
  {
    id: 'rat-basis-002', topicId: '11-rationale-funktionen', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 2,
    data: {
      questionText: 'Wo liegt die Polstelle von $f(x) = \\dfrac{2}{x + 5}$? (Gib den $x$-Wert an.)',
      correctValue: -5,
      tolerance: 0.001,
    },
    hintKeys: ['Polstelle: Nenner = 0, Zähler ≠ 0. Löse $x + 5 = 0$.'],
    solutionKey: '$x + 5 = 0 \\Rightarrow x = -5$. Polstelle bei $x = -5$.',
    tags: ['polstelle'],
  },
  {
    id: 'rat-basis-003', topicId: '11-rationale-funktionen', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welche waagrechte Asymptote hat $f(x) = \\dfrac{3}{x^2 + 1}$?',
      options: [
        { id: 'a', text: '$y = 0$', correct: true },
        { id: 'b', text: '$y = 3$', correct: false },
        { id: 'c', text: '$y = 1$', correct: false },
        { id: 'd', text: 'keine waagrechte Asymptote', correct: false },
      ],
    },
    hintKeys: ['$\\deg(\\text{Zähler}) = 0 < \\deg(\\text{Nenner}) = 2$. Der Bruch geht für $|x| \\to \\infty$ gegen 0.'],
    solutionKey: 'Da der Nenner viel schneller wächst als der Zähler, geht $f(x) \\to 0$ für $x \\to \\pm\\infty$. Asymptote: $y = 0$.',
    tags: ['asymptote', 'grad-vergleich'],
  },
  {
    id: 'rat-basis-004', topicId: '11-rationale-funktionen', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Berechne $f(2)$ für $f(x) = \\dfrac{x + 6}{x - 1}$.',
      correctValue: 8,
      tolerance: 0.001,
    },
    hintKeys: ['$f(2) = \\dfrac{2 + 6}{2 - 1}$.'],
    solutionKey: '$f(2) = \\dfrac{8}{1} = 8$.',
    tags: ['funktionswert'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ───────────────────────────────────────

  {
    id: 'rat-std-001', topicId: '11-rationale-funktionen', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 7,
    contextKey: 'Polstellen + Nullstellen',
    data: {
      questionText: 'Untersuche $f(x) = \\dfrac{x^2 - 9}{x - 3}$ auf Pol- und Nullstellen.',
      steps: [
        {
          instruction: 'Faktorisiere den Zähler. $x^2 - 9 = ?$',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$(x-3)(x+3)$', correct: true },
            { id: 'b', text: '$(x-3)^2$', correct: false },
            { id: 'c', text: '$(x+3)^2$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$x^2 - 9 = (x-3)(x+3)$ (3. binomische Formel).',
        },
        {
          instruction: 'Kürze den gemeinsamen Faktor. $f(x) = \\dfrac{(x-3)(x+3)}{x-3} = ?$ (für $x \\neq 3$)',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x + 3$', correct: true },
            { id: 'b', text: '$x - 3$', correct: false },
            { id: 'c', text: '$\\dfrac{1}{x+3}$', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Nach Kürzen: $f(x) = x + 3$ — eine Gerade mit hebbarer Lücke bei $x = 3$.',
        },
        {
          instruction: 'Bei $x = 3$ ist eine hebbare Lücke. Welchen Wert hätte $f$ dort, wenn man die Funktion stetig fortsetzt?',
          type: 'numeric-input', expected: 6, tolerance: 0.01,
          showAnswer: '$f(3) = 3 + 3 = 6$ (über die gekürzte Form).',
        },
      ],
    },
    hintKeys: ['Wenn Zähler und Nenner einen gemeinsamen Faktor haben, ist die Stelle hebbar.'],
    solutionKey: 'Hebbare Lücke bei $x = 3$ mit Wert $6$. Nullstelle bei $x = -3$. Keine Polstelle.',
    tags: ['step-solver', 'hebbare-luecke', 'binomische-formel'],
  },
  {
    id: 'rat-std-002', topicId: '11-rationale-funktionen', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Welche waagrechte Asymptote hat $f(x) = \\dfrac{2x^2 + 5}{4x^2 - 1}$?',
      options: [
        { id: 'a', text: '$y = 0$', correct: false },
        { id: 'b', text: '$y = 0{,}5$', correct: true },
        { id: 'c', text: '$y = 2$', correct: false },
        { id: 'd', text: '$y = -5$', correct: false },
      ],
    },
    hintKeys: ['Bei gleichem Grad ist die Asymptote der Quotient der Leitkoeffizienten: $\\dfrac{2}{4}$.'],
    solutionKey: 'Beide Polynome haben Grad 2. Quotient der Leitkoeffizienten: $\\dfrac{2}{4} = 0{,}5$. Asymptote: $y = 0{,}5$.',
    tags: ['asymptote', 'leitkoeffizient'],
  },
  {
    id: 'rat-std-003', topicId: '11-rationale-funktionen', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    contextKey: 'Stückkosten',
    data: {
      questionText: 'Stückkosten: $k(x) = \\dfrac{5000 + 8x}{x}$ (€ pro Stück, $x$ = Stückzahl). Wohin konvergieren die Stückkosten für sehr große $x$?',
      correctValue: 8,
      tolerance: 0.001,
      unit: '€',
    },
    hintKeys: [
      '$k(x) = \\dfrac{5000}{x} + 8$ — wie verhält sich der erste Term für $x \\to \\infty$?',
      'Der Term $5000/x$ wird beliebig klein. Was bleibt?',
    ],
    solutionKey: '$k(x) = \\dfrac{5000}{x} + 8$. Für $x \\to \\infty$: $\\dfrac{5000}{x} \\to 0$, also $k(x) \\to 8$ €. Die Stückkosten nähern sich den variablen Kosten an.',
    tags: ['sachkontext', 'stueckkosten', 'asymptote'],
  },
  {
    id: 'rat-std-004', topicId: '11-rationale-funktionen', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Wo liegt die Nullstelle von $f(x) = \\dfrac{2x - 8}{x + 3}$? (Gib den $x$-Wert an.)',
      correctValue: 4,
      tolerance: 0.001,
    },
    hintKeys: ['Nullstelle: Zähler = 0 (bei gleichzeitig Nenner ≠ 0). Löse $2x - 8 = 0$.'],
    solutionKey: '$2x - 8 = 0 \\Rightarrow x = 4$. Bei $x = 4$ ist Nenner $= 7 \\neq 0$, also echte Nullstelle.',
    tags: ['nullstelle'],
  },
  {
    id: 'rat-std-005', topicId: '11-rationale-funktionen', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'Ordne jeder Funktion ihre Eigenschaft an der Stelle $x = 1$ zu.',
      pairs: [
        { id: 'a', left: '$f(x) = \\dfrac{1}{x-1}$', right: 'Polstelle' },
        { id: 'b', left: '$f(x) = \\dfrac{x-1}{x^2-1}$', right: 'hebbare Lücke' },
        { id: 'c', left: '$f(x) = \\dfrac{x-1}{x+1}$', right: 'Nullstelle' },
        { id: 'd', left: '$f(x) = \\dfrac{x+1}{x-2}$', right: 'normaler Wert' },
      ],
    },
    hintKeys: ['Pol = Nenner 0 / Zähler ≠ 0. Hebbar = beide 0. Nullstelle = Zähler 0 / Nenner ≠ 0.'],
    solutionKey: 'a) Pol bei $x=1$ (Nenner 0). b) Beide 0 → hebbar. c) Zähler 0 → Nullstelle. d) Beide ≠ 0 → normaler Wert.',
    tags: ['drag-match', 'klassifizierung'],
  },

  // ─── ERWEITERT (AFB III) – 4 Aufgaben ─────────────────────────────────────

  {
    id: 'rat-erw-001', topicId: '11-rationale-funktionen', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 10,
    contextKey: 'Vollständige Untersuchung',
    data: {
      questionText: 'Untersuche $f(x) = \\dfrac{x^2 - 4}{x^2 - 1}$ vollständig.',
      steps: [
        {
          instruction: 'Bestimme die Definitionsmenge. Bei welchen $x$-Werten ist $f$ nicht definiert?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x = \\pm 1$', correct: true },
            { id: 'b', text: '$x = \\pm 2$', correct: false },
            { id: 'c', text: '$x = 0$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$x^2 - 1 = 0 \\Rightarrow x = \\pm 1$. $D = \\mathbb{R} \\setminus \\{-1, 1\\}$.',
        },
        {
          instruction: 'Welche Nullstellen hat $f$? (Wert mit Betrag)',
          type: 'numeric-input', expected: 2, tolerance: 0.01,
          showAnswer: '$x^2 - 4 = 0 \\Rightarrow x = \\pm 2$ (beide nicht in der Definitionslücke). Nullstellen: $x_1 = -2, x_2 = 2$.',
        },
        {
          instruction: 'Berechne die waagrechte Asymptote für $x \\to \\pm\\infty$.',
          type: 'numeric-input', expected: 1, tolerance: 0.01,
          showAnswer: 'Beide Polynome haben Grad 2, Leitkoeffizienten $\\dfrac{1}{1} = 1$. Asymptote: $y = 1$.',
        },
      ],
    },
    hintKeys: ['Definitionsmenge = wo Nenner ≠ 0. Nullstellen = wo Zähler 0. Asymptote = Verhalten im Unendlichen.'],
    solutionKey: '$D = \\mathbb{R} \\setminus \\{-1, 1\\}$, Nullstellen $\\pm 2$, Asymptote $y = 1$, Polstellen $\\pm 1$.',
    tags: ['step-solver', 'vollstaendig', 'kurvendiskussion'],
  },
  {
    id: 'rat-erw-002', topicId: '11-rationale-funktionen', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 6,
    data: {
      questionText: 'Tom untersucht $f(x) = \\dfrac{x^2 - x}{x}$ auf Polstellen. Finde den Fehler.',
      steps: [
        { content: 'Schritt 1: Nenner $= x = 0 \\Rightarrow$ kritische Stelle bei $x = 0$', hasError: false },
        { content: 'Schritt 2: Zähler bei $x = 0$: $0^2 - 0 = 0$', hasError: false },
        { content: 'Schritt 3: Da Nenner = 0 ist, liegt eine Polstelle vor', hasError: true,
          errorExplanation: 'Falsch! Wenn Zähler UND Nenner = 0 sind, ist es eine **hebbare Lücke**, keine Polstelle. Hier: $f(x) = \\dfrac{x(x-1)}{x} = x - 1$ für $x \\neq 0$. Bei $x = 0$ wäre $f(0) = -1$ — Loch im Graphen, kein Pol.' },
      ],
    },
    hintKeys: ['Hebbare Lücke vs. Polstelle: Beide haben Nenner 0, aber bei der hebbaren Lücke ist auch der Zähler 0.'],
    solutionKey: 'Schritt 3 ist falsch. Bei $x = 0$ ist sowohl Zähler als auch Nenner 0 → hebbare Lücke, nicht Polstelle.',
    tags: ['fehleranalyse', 'pol-vs-luecke'],
  },
  {
    id: 'rat-erw-003', topicId: '11-rationale-funktionen', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 7,
    contextKey: 'Schräge Asymptote',
    data: {
      questionText: 'Die Funktion $f(x) = \\dfrac{x^2 + 2x}{x - 1}$ hat eine schräge Asymptote $y = mx + n$. Bestimme $m$ durch Polynomdivision.',
      correctValue: 1,
      tolerance: 0.001,
    },
    hintKeys: [
      'Polynomdivision: $(x^2 + 2x) : (x - 1) = x + ?$. Welcher Faktor steht vor dem ersten Quotientenglied?',
      'Bei Zählergrad = Nennergrad + 1 ist die Asymptote eine Gerade. Der Leitterm ist $\\dfrac{x^2}{x} = x$.',
    ],
    solutionKey: 'Polynomdivision: $(x^2 + 2x) : (x-1) = x + 3 + \\dfrac{3}{x-1}$. Schräge Asymptote: $y = x + 3$, also $m = 1$.',
    tags: ['polynomdivision', 'schraege-asymptote'],
  },
  {
    id: 'rat-erw-004', topicId: '11-rationale-funktionen', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativität'], points: 12, timeEstimate: 6,
    contextKey: 'Konzentration einer Lösung',
    data: {
      questionText: 'In ein Gefäß mit 100 ml einer 50%-igen Salzlösung wird reines Wasser ($V$ ml) hinzugefügt. Die neue Konzentration ist $c(V) = \\dfrac{50}{100 + V}$ in %. Welche Konzentration nähert sich an, wenn unbegrenzt Wasser hinzugefügt wird?',
      options: [
        { id: 'a', text: '0 % — die Lösung wird unendlich verdünnt', correct: true },
        { id: 'b', text: '50 % — Konzentration bleibt konstant', correct: false },
        { id: 'c', text: '100 % — durch Wasserzugabe wird sie reiner', correct: false },
        { id: 'd', text: 'kein Grenzwert', correct: false },
      ],
    },
    hintKeys: ['Was passiert mit $\\dfrac{50}{100 + V}$, wenn $V$ sehr groß wird?'],
    solutionKey: 'Für $V \\to \\infty$ wird der Nenner unendlich, also $c(V) \\to 0$. Mathematisch: $y = 0$ ist die Asymptote.',
    tags: ['sachkontext', 'verdünnung', 'grenzwert'],
  },
];
