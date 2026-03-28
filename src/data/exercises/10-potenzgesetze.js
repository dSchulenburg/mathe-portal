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
    tags: ['bruch-kuerzen', 'potenzgesetz-quotient'],
  },

  {
    id: 'pot-standard-004',
    topicId: '10-potenzgesetze',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kreativitaet'],
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
    competencies: ['kreativitaet', 'kritisches-denken'],
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
    tags: ['groessenvergleich', 'reihenfolge-der-auswertung', 'potenz-der-potenz'],
  },
];
