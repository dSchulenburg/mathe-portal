export const exercises = [
  // ─── BASIS (AFB I) ──────────────────────────────────────────────────────────

  {
    id: 'pot-basis-001',
    topicId: '10-potenzgesetze',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText: 'Berechne: 2⁵ = ?',
      correctValue: 32,
      tolerance: 0.01,
    },
    hintKeys: ['2⁵ bedeutet: 2 · 2 · 2 · 2 · 2. Multipliziere schrittweise.'],
    solutionKey: '2⁵ = 2 · 2 · 2 · 2 · 2 = 4 · 4 · 2 = 32.',
    tags: ['potenz-berechnen', 'basis-potenz'],
  },

  {
    id: 'pot-basis-002',
    topicId: '10-potenzgesetze',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText: 'Schreibe die Zehnerpotenz 10⁻³ als Dezimalzahl. Gib den Wert ein (z. B. 0.001).',
      correctValue: 0.001,
      tolerance: 0.0001,
    },
    hintKeys: ['10⁻³ = 1 / 10³ = 1 / 1000. Schiebe das Komma 3 Stellen nach links.'],
    solutionKey: '10⁻³ = 1 / 10³ = 1 / 1000 = 0,001.',
    tags: ['zehnerpotenz', 'negativer-exponent', 'dezimalzahl'],
  },

  {
    id: 'pot-basis-003',
    topicId: '10-potenzgesetze',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText: 'Welches Ergebnis liefert a² · a³ nach dem Potenzgesetz?',
      options: [
        { id: 'a', text: 'a⁶', correct: false },
        { id: 'b', text: 'a⁵', correct: true },
        { id: 'c', text: 'a^(2·3) = a⁶', correct: false },
        { id: 'd', text: '2a⁵', correct: false },
      ],
    },
    hintKeys: ['Potenzen mit gleicher Basis werden multipliziert, indem man die Exponenten addiert: aᵐ · aⁿ = a^(m+n).'],
    solutionKey: 'a² · a³ = a^(2+3) = a⁵. Die Exponenten werden addiert, nicht multipliziert.',
    tags: ['potenzgesetz-produkt', 'gleiche-basis'],
  },

  {
    id: 'pot-basis-004',
    topicId: '10-potenzgesetze',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText: 'Wie schreibt man √x als Potenz?',
      options: [
        { id: 'a', text: 'x²', correct: false },
        { id: 'b', text: 'x^(1/3)', correct: false },
        { id: 'c', text: 'x^(1/2)', correct: true },
        { id: 'd', text: 'x^(−1)', correct: false },
      ],
    },
    hintKeys: ['√x = x^(1/2), denn (x^(1/2))² = x^(1/2 · 2) = x¹ = x.'],
    solutionKey: '√x = x^(1/2), weil (x^(1/2))² = x gilt. Allgemein: ⁿ√x = x^(1/n).',
    tags: ['wurzel-als-potenz', 'rationaler-exponent'],
  },

  // ─── STANDARD (AFB II) ──────────────────────────────────────────────────────

  {
    id: 'pot-standard-001',
    topicId: '10-potenzgesetze',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 10,
    timeEstimate: 4,
    data: {
      questionText: 'Vereinfache den Term x³ · x⁴ / x² so weit wie möglich.',
      options: [
        { id: 'a', text: 'x⁵', correct: true },
        { id: 'b', text: 'x⁹', correct: false },
        { id: 'c', text: 'x^(12/2)', correct: false },
        { id: 'd', text: 'x²', correct: false },
      ],
    },
    hintKeys: [
      'Zuerst Zähler vereinfachen: x³ · x⁴ = x^(3+4) = x⁷.',
      'Dann dividieren: x⁷ / x² = x^(7−2) = x⁵.',
    ],
    solutionKey: 'x³ · x⁴ / x² = x^(3+4) / x² = x⁷ / x² = x^(7−2) = x⁵.',
    tags: ['terme-vereinfachen', 'potenzgesetz-produkt', 'potenzgesetz-quotient'],
  },

  {
    id: 'pot-standard-002',
    topicId: '10-potenzgesetze',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 3,
    data: {
      questionText: 'Berechne 2⁻³ als Bruch (gib den Wert als Dezimalzahl ein, z. B. 0.125).',
      correctValue: 0.125,
      tolerance: 0.001,
    },
    hintKeys: ['aⁿ⁻ = 1/aⁿ. Also: 2⁻³ = 1/2³ = 1/8.'],
    solutionKey: '2⁻³ = 1/2³ = 1/8 = 0,125.',
    tags: ['negativer-exponent', 'kehrwert'],
  },

  {
    id: 'pot-standard-003',
    topicId: '10-potenzgesetze',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 10,
    timeEstimate: 4,
    data: {
      questionText: 'Kürze den Bruch: (6x⁵) / (3x²). Der vereinfachte Koeffizient ist eine ganze Zahl — trage ihn ein.',
      correctValue: 2,
      tolerance: 0.01,
    },
    hintKeys: [
      'Kürze zunächst die Zahlen: 6/3 = 2.',
      'Kürze dann die Potenzen: x⁵ / x² = x^(5−2) = x³.',
    ],
    solutionKey: '(6x⁵) / (3x²) = (6/3) · x^(5−2) = 2x³. Der Koeffizient ist 2.',
    tags: ['bruch-kürzen', 'potenzgesetz-quotient'],
  },

  {
    id: 'pot-standard-004',
    topicId: '10-potenzgesetze',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kreativität'],
    points: 10,
    timeEstimate: 4,
    data: {
      questionText: 'Löse die Gleichung 5^x = 125. Welchen Wert hat x?',
      correctValue: 3,
      tolerance: 0.01,
    },
    hintKeys: [
      '125 als Potenz von 5 schreiben: 125 = 5³.',
      'Wenn 5^x = 5³, dann folgt x = 3.',
    ],
    solutionKey: '5^x = 125 = 5³ → x = 3.',
    tags: ['gleichung-mit-potenzen', 'exponent-bestimmen'],
  },

  // ─── ERWEITERT (AFB III) ────────────────────────────────────────────────────

  {
    id: 'pot-erweitert-001',
    topicId: '10-potenzgesetze',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 6,
    contextKey: 'Naturwissenschaft: Lichtgeschwindigkeit',
    data: {
      questionText:
        'Licht legt in einer Sekunde etwa 3 · 10⁸ m zurück. Ein Lichtjahr ist die Strecke, die Licht in einem Jahr (≈ 3,15 · 10⁷ s) zurücklegt. Berechne ein Lichtjahr in Metern und schreibe das Ergebnis in wissenschaftlicher Notation. ' +
        'Gib den Exponenten der Zehnerpotenz ein (z. B. für 9,45 · 10^15 wäre der Exponent 15).',
      correctValue: 15,
      tolerance: 0.01,
    },
    hintKeys: [
      '1 Lichtjahr = 3 · 10⁸ m/s · 3,15 · 10⁷ s.',
      'Multipliziere die Koeffizienten: 3 · 3,15 = 9,45. Addiere die Exponenten: 10⁸ · 10⁷ = 10^(8+7) = 10^15.',
    ],
    solutionKey:
      '1 Lichtjahr = 3 · 10⁸ · 3,15 · 10⁷ = (3 · 3,15) · 10^(8+7) = 9,45 · 10^15 m. Der Exponent ist 15.',
    tags: ['wissenschaftliche-notation', 'sachkontext', 'zehnerpotenz'],
  },

  {
    id: 'pot-erweitert-002',
    topicId: '10-potenzgesetze',
    type: 'error-analysis',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 6,
    data: {
      questionText: 'Finde den Fehler im folgenden Vereinfachungsweg für (a³)² · a⁴:',
      steps: [
        { content: '(a³)² · a⁴', hasError: false },
        { content: '= a^(3+2) · a⁴', hasError: true, errorExplanation: 'Fehler: Bei (aᵐ)ⁿ werden die Exponenten multipliziert, nicht addiert. Richtig: (a³)² = a^(3·2) = a⁶.' },
        { content: '= a⁵ · a⁴', hasError: true, errorExplanation: 'Folge des Fehlers: Wäre der erste Schritt korrekt, ergäbe sich a⁶ · a⁴.' },
        { content: '= a^(5+4) = a⁹', hasError: true, errorExplanation: 'Das Ergebnis ist falsch. Richtig: a⁶ · a⁴ = a^(6+4) = a^10.' },
      ],
    },
    hintKeys: ['Unterscheide: aᵐ · aⁿ = a^(m+n) (Exponenten addieren), aber (aᵐ)ⁿ = a^(m·n) (Exponenten multiplizieren).'],
    solutionKey: 'Fehler in Schritt 1: (a³)² = a^(3·2) = a⁶ (nicht a^(3+2)). Richtig: a⁶ · a⁴ = a^(6+4) = a^10.',
    tags: ['fehleranalyse', 'potenz-der-potenz', '4k-kritisches-denken'],
  },

  {
    id: 'pot-erweitert-003',
    topicId: '10-potenzgesetze',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kreativität', 'kritisches-denken'],
    points: 15,
    timeEstimate: 5,
    data: {
      questionText: 'Vereinfache den Term x^(3/2) · x^(1/2) / x^(1/3). Welches Ergebnis ist korrekt?',
      options: [
        { id: 'a', text: 'x^(5/3)', correct: true },
        { id: 'b', text: 'x^(7/6)', correct: false },
        { id: 'c', text: 'x^(11/6)', correct: false },
        { id: 'd', text: 'x^(3/2)', correct: false },
      ],
    },
    hintKeys: [
      'Addiere zuerst die Exponenten im Zähler: 3/2 + 1/2 = 4/2 = 2.',
      'Subtrahiere dann den Exponenten im Nenner: 2 − 1/3 = 6/3 − 1/3 = 5/3.',
    ],
    solutionKey:
      'x^(3/2) · x^(1/2) / x^(1/3) = x^(3/2 + 1/2 − 1/3) = x^(2 − 1/3) = x^(6/3 − 1/3) = x^(5/3).',
    tags: ['rationaler-exponent', 'terme-vereinfachen', 'bruchexponent'],
  },

  {
    id: 'pot-erweitert-004',
    topicId: '10-potenzgesetze',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken'],
    points: 15,
    timeEstimate: 5,
    data: {
      questionText: 'Welcher der folgenden Ausdrücke ist der größte (für x = 2)?',
      options: [
        { id: 'a', text: '(2²)³ = 64', correct: false },
        { id: 'b', text: '2^(3²) = 512', correct: true },
        { id: 'c', text: '2³ · 3² = 72', correct: false },
        { id: 'd', text: '(2 · 3)² = 36', correct: false },
      ],
    },
    hintKeys: [
      '(2²)³ = 2^(2·3) = 2⁶ = 64.',
      '2^(3²) = 2⁹ = 512. Achtung: Der Exponent 3² wird zuerst ausgewertet.',
    ],
    solutionKey:
      '(2²)³ = 2⁶ = 64; 2^(3²) = 2⁹ = 512; 2³ · 3² = 8 · 9 = 72; (2·3)² = 6² = 36. Der größte Wert ist 2^(3²) = 512.',
    tags: ['größenvergleich', 'reihenfolge-der-auswertung', 'potenz-der-potenz'],
  },

  // ─── BASIS (neue Aufgaben) ───────────────────────────────────────────────────

  {
    id: 'pot-basis-005',
    topicId: '10-potenzgesetze',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText: 'Berechne: $3^4 = ?$',
      correctValue: 81,
      tolerance: 0.01,
    },
    hintKeys: [
      '$3^4$ bedeutet: $3 \\cdot 3 \\cdot 3 \\cdot 3$. Multipliziere schrittweise: $3 \\cdot 3 = 9$, dann $9 \\cdot 3 = 27$, dann $27 \\cdot 3 = 81$.',
    ],
    solutionKey: '$3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 9 \\cdot 9 = 81.$',
    tags: ['potenz-berechnen', 'basis-potenz'],
  },

  {
    id: 'pot-basis-006',
    topicId: '10-potenzgesetze',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText: 'Was ergibt $x^0$ für $x \\neq 0$?',
      options: [
        { id: 'a', text: '0', correct: false },
        { id: 'b', text: 'x', correct: false },
        { id: 'c', text: '1', correct: true },
        { id: 'd', text: 'Undefiniert', correct: false },
      ],
    },
    hintKeys: [
      'Nutze das Quotientengesetz: $\\frac{a^n}{a^n} = a^{n-n} = a^0$. Aber $\\frac{a^n}{a^n} = 1$ — also muss $a^0 = 1$ gelten.',
    ],
    solutionKey: '$x^0 = 1$ für jedes $x \\neq 0$. Begründung: $\\frac{x^n}{x^n} = x^{n-n} = x^0$, und $\\frac{x^n}{x^n} = 1$.',
    tags: ['nullter-exponent', 'potenzgesetz-quotient'],
  },

  // ─── STANDARD (neue Aufgaben) ────────────────────────────────────────────────

  {
    id: 'pot-standard-005',
    topicId: '10-potenzgesetze',
    type: 'step-solver',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText: 'Vereinfache Schritt für Schritt: $(2x^3)^2 \\cdot x^4$',
      steps: [
        {
          instruction: 'Welches Gesetz wendest du im ersten Schritt auf $(2x^3)^2$ an?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$(ab)^n = a^n \\cdot b^n$ — Potenz eines Produkts', correct: true },
            { id: 'b', text: '$a^m \\cdot a^n = a^{m+n}$ — Produktregel', correct: false },
            { id: 'c', text: '$(a^m)^n = a^{m \\cdot n}$ — Potenz einer Potenz', correct: false },
          ],
          correctId: 'a',
          showAnswer: false,
        },
        {
          instruction: 'Nach dem Ausmultiplizieren ergibt $(2x^3)^2 = 4x^6$. Jetzt: Welchen Exponenten hat das Ergebnis $4x^6 \\cdot x^4$?',
          type: 'numeric-input',
          expected: 10,
          tolerance: 0.01,
        },
      ],
    },
    hintKeys: [
      'Schritt 1: $(2x^3)^2 = 2^2 \\cdot (x^3)^2 = 4 \\cdot x^{3 \\cdot 2} = 4x^6$.',
      'Schritt 2: $4x^6 \\cdot x^4 = 4 \\cdot x^{6+4} = 4x^{10}$. Der Exponent ist 10.',
    ],
    solutionKey: '$(2x^3)^2 \\cdot x^4 = 4x^6 \\cdot x^4 = 4x^{10}$.',
    tags: ['potenz-des-produkts', 'terme-vereinfachen', 'step-solver'],
  },

  {
    id: 'pot-standard-006',
    topicId: '10-potenzgesetze',
    type: 'drag-match',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 4,
    data: {
      questionText: 'Ordne jeden Term seiner vereinfachten Form zu.',
      pairs: [
        { id: 'p1', left: '$a^3 \\cdot a^4$', right: '$a^7$' },
        { id: 'p2', left: '$(a^2)^3$', right: '$a^6$' },
        { id: 'p3', left: '$\\frac{a^5}{a^2}$', right: '$a^3$' },
        { id: 'p4', left: '$a^0$', right: '$1$' },
      ],
    },
    hintKeys: [
      'Produktregel: $a^m \\cdot a^n = a^{m+n}$.',
      'Potenz einer Potenz: $(a^m)^n = a^{m \\cdot n}$.',
      'Quotientenregel: $\\frac{a^m}{a^n} = a^{m-n}$.',
      'Nullter Exponent: $a^0 = 1$.',
    ],
    solutionKey: '$a^3 \\cdot a^4 = a^7$; $(a^2)^3 = a^6$; $\\frac{a^5}{a^2} = a^3$; $a^0 = 1$.',
    tags: ['potenzgesetze-zuordnung', 'drag-match', 'alle-grundgesetze'],
  },

  {
    id: 'pot-standard-007',
    topicId: '10-potenzgesetze',
    type: 'error-analysis',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText: 'Finde den Fehler im folgenden Lösungsweg für $\\frac{x^5 \\cdot x^3}{x^2}$:',
      steps: [
        { content: '$\\frac{x^5 \\cdot x^3}{x^2}$', hasError: false },
        {
          content: '$= \\frac{x^{5 \\cdot 3}}{x^2} = \\frac{x^{15}}{x^2}$',
          hasError: true,
          errorExplanation: 'Fehler: Bei der Multiplikation $x^5 \\cdot x^3$ werden die Exponenten addiert (nicht multipliziert). Richtig: $x^5 \\cdot x^3 = x^{5+3} = x^8$.',
        },
        {
          content: '$= x^{15-2} = x^{13}$',
          hasError: true,
          errorExplanation: 'Folge des Fehlers: Da $x^{15}$ falsch war, ist auch $x^{13}$ falsch. Richtig: $x^8 / x^2 = x^{8-2} = x^6$.',
        },
      ],
    },
    hintKeys: [
      'Unterscheide sorgfältig: $a^m \\cdot a^n = a^{m+n}$ (Exponenten addieren!), aber $(a^m)^n = a^{m \\cdot n}$ (Exponenten multiplizieren).',
    ],
    solutionKey: 'Fehler in Schritt 1: $x^5 \\cdot x^3 = x^{5+3} = x^8$ (nicht $x^{15}$). Richtig: $\\frac{x^8}{x^2} = x^{8-2} = x^6$.',
    tags: ['fehleranalyse', 'potenzgesetz-produkt', '4k-kritisches-denken'],
  },

  // ─── ERWEITERT (neue Aufgaben) ───────────────────────────────────────────────

  {
    id: 'pot-erweitert-005',
    topicId: '10-potenzgesetze',
    type: 'step-solver',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativität', 'kommunikation'],
    points: 15,
    timeEstimate: 7,
    data: {
      questionText: 'Ein Smartphone hat $128 \\text{ GB}$ Speicher. Ein Foto belegt durchschnittlich $4 \\text{ MB}$. Berechne die maximale Anzahl Fotos in Zehnerpotenzen.',
      contextKey: 'Technik: Smartphone-Speicher',
      steps: [
        {
          instruction: 'Schreibe 128 GB in MB mithilfe von Zehnerpotenzen. $128 \\text{ GB} = 128 \\cdot 10^3 \\text{ MB}$. Wie lautet der Exponent der Zehnerpotenz für $128 \\cdot 10^3$?',
          type: 'numeric-input',
          expected: 3,
          tolerance: 0.01,
        },
        {
          instruction: 'Jetzt die Division: $\\frac{128 \\cdot 10^3 \\text{ MB}}{4 \\text{ MB}}$. Was ergibt $128 \\div 4$?',
          type: 'numeric-input',
          expected: 32,
          tolerance: 0.01,
        },
        {
          instruction: 'Das Ergebnis ist $32 \\cdot 10^3 = 3{,}2 \\cdot 10^4$ Fotos. Welchen Wert hat der Exponent der Zehnerpotenz in der normierten wissenschaftlichen Notation?',
          type: 'numeric-input',
          expected: 4,
          tolerance: 0.01,
        },
      ],
    },
    hintKeys: [
      '$1 \\text{ GB} = 1000 \\text{ MB} = 10^3 \\text{ MB}$, also $128 \\text{ GB} = 128 \\cdot 10^3 \\text{ MB}$.',
      'Division: $\\frac{128 \\cdot 10^3}{4} = 32 \\cdot 10^3$.',
      'Normierte Form: $32 \\cdot 10^3 = 3{,}2 \\cdot 10^4$.',
    ],
    solutionKey: '$\\frac{128 \\cdot 10^3 \\text{ MB}}{4 \\text{ MB}} = 32 \\cdot 10^3 = 3{,}2 \\cdot 10^4$ Fotos.',
    tags: ['wissenschaftliche-notation', 'sachkontext', 'step-solver', 'zehnerpotenz'],
  },

  {
    id: 'pot-erweitert-006',
    topicId: '10-potenzgesetze',
    type: 'drag-match',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 5,
    data: {
      questionText: 'Ordne jede Zahl ihrer wissenschaftlichen Notation zu.',
      pairs: [
        { id: 'p1', left: '$0{,}00042$', right: '$4{,}2 \\cdot 10^{-4}$' },
        { id: 'p2', left: '$3\\,700\\,000$', right: '$3{,}7 \\cdot 10^{6}$' },
        { id: 'p3', left: '$0{,}0000001$', right: '$1 \\cdot 10^{-7}$' },
        { id: 'p4', left: '$56\\,000$', right: '$5{,}6 \\cdot 10^{4}$' },
      ],
    },
    hintKeys: [
      'Verschiebe das Komma so, dass eine Zahl zwischen 1 und 10 entsteht. Die Anzahl der Stellen, die du verschiebst, ist der Exponent.',
      'Komma nach rechts verschieben (kleine Zahlen) → negativer Exponent. Komma nach links verschieben (große Zahlen) → positiver Exponent.',
    ],
    solutionKey: '$0{,}00042 = 4{,}2 \\cdot 10^{-4}$; $3\\,700\\,000 = 3{,}7 \\cdot 10^6$; $0{,}0000001 = 1 \\cdot 10^{-7}$; $56\\,000 = 5{,}6 \\cdot 10^4$.',
    tags: ['wissenschaftliche-notation', 'drag-match', 'zehnerpotenz'],
  },

  // ─── ERWEITERTES ANFORDERUNGSNIVEAU (eA) ────────────────────────────────────

  {
    id: 'pot-ea-001',
    topicId: '10-potenzgesetze',
    type: 'step-solver',
    diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kreativität', 'kommunikation'],
    points: 20,
    timeEstimate: 10,
    data: {
      questionText: 'Informatik-Kontext: In der IT gilt $2^{10} \\approx 10^3$ (1 Kibibyte ≈ 1 Kilobyte). Untersuche diese Näherung.',
      contextKey: 'Informatik: Binäre Speichergrößen',
      steps: [
        {
          instruction: 'Berechne $2^{10}$ exakt.',
          type: 'numeric-input',
          expected: 1024,
          tolerance: 0.01,
        },
        {
          instruction: 'Der relative Fehler der Näherung $2^{10} \\approx 10^3 = 1000$ berechnet sich als $\\frac{1024 - 1000}{1000} \\cdot 100\\%$. Wie groß ist er in Prozent (auf eine Nachkommastelle)?',
          type: 'numeric-input',
          expected: 2.4,
          tolerance: 0.05,
        },
        {
          instruction: 'Nutze $2^{10} \\approx 10^3$ zweimal: Was ergibt $2^{20}$ näherungsweise als Zehnerpotenz? Gib den Exponenten ein.',
          type: 'numeric-input',
          expected: 6,
          tolerance: 0.01,
        },
      ],
    },
    hintKeys: [
      '$2^{10} = 2^5 \\cdot 2^5 = 32 \\cdot 32 = 1024$.',
      'Relativer Fehler: $\\frac{1024 - 1000}{1000} = \\frac{24}{1000} = 0{,}024 = 2{,}4\\%$.',
      '$2^{20} = (2^{10})^2 \\approx (10^3)^2 = 10^6$.',
    ],
    solutionKey: '$2^{10} = 1024$; relativer Fehler $= 2{,}4\\%$; $2^{20} = (2^{10})^2 \\approx (10^3)^2 = 10^6$.',
    tags: ['informatik', 'näherung', 'step-solver', 'zehnerpotenz', '4k-kreativität'],
  },

  {
    id: 'pot-ea-002',
    topicId: '10-potenzgesetze',
    type: 'multiple-choice',
    diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 20,
    timeEstimate: 7,
    data: {
      questionText: 'Warum muss $a^{-n} = \\frac{1}{a^n}$ gelten? Welche Begründung ist mathematisch korrekt?',
      options: [
        {
          id: 'a',
          text: 'Weil negative Exponenten per Definition so festgelegt wurden, ohne weiteren Grund.',
          correct: false,
        },
        {
          id: 'b',
          text: 'Damit die Produktregel $a^m \\cdot a^n = a^{m+n}$ auch für negative Exponenten gilt: $a^n \\cdot a^{-n} = a^{n+(-n)} = a^0 = 1$, also muss $a^{-n} = \\frac{1}{a^n}$ sein.',
          correct: true,
        },
        {
          id: 'c',
          text: 'Weil $a^{-n} = (-1) \\cdot a^n$, also das Vorzeichen übertragen wird.',
          correct: false,
        },
        {
          id: 'd',
          text: 'Weil der Betrag des Exponenten kleiner wird und die Zahl deshalb kleiner werden muss.',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Denke daran: Die Gesetze der Potenzen sollen widerspruchsfrei sein. Was muss $a^{-n}$ sein, damit $a^n \\cdot a^{-n} = a^0 = 1$ gilt?',
    ],
    solutionKey: 'Antwort B: Aus der Produktregel folgt $a^n \\cdot a^{-n} = a^0 = 1$, also $a^{-n} = \\frac{1}{a^n}$. Die Definition ist durch Konsistenz erzwungen.',
    tags: ['negativer-exponent', 'beweis', '4k-kritisches-denken', 'eA'],
  },

  {
    id: 'pot-ea-003',
    topicId: '10-potenzgesetze',
    type: 'numeric-input',
    diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kreativität'],
    points: 20,
    timeEstimate: 6,
    data: {
      questionText: 'Berechne $8^{\\frac{2}{3}}$ mithilfe rationaler Exponenten. Tipp: $8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2$. Gib das Ergebnis ein.',
      correctValue: 4,
      tolerance: 0.01,
    },
    hintKeys: [
      '$a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m = \\sqrt[n]{a^m}$.',
      '$\\sqrt[3]{8} = 2$, weil $2^3 = 8$. Also: $8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$.',
    ],
    solutionKey: '$8^{\\frac{2}{3}} = (8^{\\frac{1}{3}})^2 = (\\sqrt[3]{8})^2 = 2^2 = 4$.',
    tags: ['rationaler-exponent', 'kubikwurzel', 'bruchexponent', 'eA'],
  },
];
