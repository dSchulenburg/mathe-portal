export const exercises = [
  // ─── BASIS (AFB I) ─────────────────────────────────────────────────────────

  {
    id: 'qgl-basis-001',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText: 'Löse die Gleichung x² = 49. Gib die positive Lösung an.',
      correctValue: 7,
      tolerance: 0.01,
    },
    hintKeys: ['Ziehe auf beiden Seiten die Wurzel: x = ±√49.'],
    solutionKey: 'x² = 49 → x = ±√49 = ±7. Die positive Lösung ist x = 7.',
    tags: ['einfache-quadratische-gleichung', 'wurzel'],
  },

  {
    id: 'qgl-basis-002',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText: 'Löse mit der p-q-Formel: x² - 5x + 6 = 0. Gib die größere Lösung an.',
      correctValue: 3,
      tolerance: 0.01,
    },
    hintKeys: [
      'p-q-Formel: x₁,₂ = -p/2 ± √((p/2)² - q). Hier: p = -5, q = 6.',
      'x = 5/2 ± √(25/4 - 6) = 5/2 ± √(1/4) = 5/2 ± 1/2',
    ],
    solutionKey: 'x² - 5x + 6 = 0: p = -5, q = 6. x = 5/2 ± √(25/4 - 6) = 5/2 ± 1/2. x₁ = 3, x₂ = 2.',
    tags: ['pq-formel', 'ganzzahlige-lösungen'],
  },

  {
    id: 'qgl-basis-003',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText: 'Löse die Gleichung (x - 4)(x + 2) = 0. Gib die größere Lösung an.',
      correctValue: 4,
      tolerance: 0.01,
    },
    hintKeys: ['Nullproduktsatz: Ein Produkt ist null, wenn mindestens ein Faktor null ist.'],
    solutionKey: '(x - 4)(x + 2) = 0 → x - 4 = 0 oder x + 2 = 0 → x₁ = 4, x₂ = -2.',
    tags: ['nullproduktsatz', 'faktorisiert'],
  },

  {
    id: 'qgl-basis-004',
    topicId: '10-quad-gleichungen',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText: 'Wie viele reelle Lösungen hat die Gleichung x² + 4x + 5 = 0?',
      options: [
        { id: 'a', text: 'Keine Lösung (D < 0)', correct: true },
        { id: 'b', text: 'Genau eine Lösung (D = 0)', correct: false },
        { id: 'c', text: 'Zwei verschiedene Lösungen (D > 0)', correct: false },
        { id: 'd', text: 'Unendlich viele Lösungen', correct: false },
      ],
    },
    hintKeys: ['Berechne die Diskriminante D = (p/2)² - q mit p = 4, q = 5.'],
    solutionKey: 'D = (4/2)² - 5 = 4 - 5 = -1 < 0. Da D < 0, hat die Gleichung keine reellen Lösungen.',
    tags: ['diskriminante', 'lösungsanzahl'],
  },

  {
    id: 'qgl-basis-005',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText: 'Löse die Gleichung x(x - 5) = 0. Gib die positive Lösung an.',
      correctValue: 5,
      tolerance: 0.01,
    },
    hintKeys: ['Nullproduktsatz: x = 0 oder x - 5 = 0.'],
    solutionKey: 'x(x - 5) = 0 → x = 0 oder x - 5 = 0 → x₁ = 0, x₂ = 5. Die positive Lösung ist x = 5.',
    tags: ['ausklammern', 'nullproduktsatz'],
  },

  // ─── STANDARD (AFB II) ─────────────────────────────────────────────────────

  {
    id: 'qgl-standard-001',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText: 'Löse x² - 4x + 1 = 0 mit der p-q-Formel. Gib die größere Lösung auf zwei Dezimalstellen gerundet an.',
      correctValue: 3.73,
      tolerance: 0.01,
    },
    hintKeys: [
      'p = -4, q = 1. x = 2 ± √(4 - 1) = 2 ± √3.',
      '√3 ≈ 1.732',
    ],
    solutionKey: 'x² - 4x + 1 = 0: p = -4, q = 1. x = 2 ± √3. x₁ = 2 + √3 ≈ 3.73, x₂ = 2 - √3 ≈ 0.27.',
    tags: ['pq-formel', 'nicht-ganzzahlige-lösungen'],
  },

  {
    id: 'qgl-standard-002',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    data: {
      questionText: 'Löse die biquadratische Gleichung x⁴ - 5x² + 4 = 0 durch Substitution z = x². Gib die größte positive Lösung für x an.',
      correctValue: 2,
      tolerance: 0.01,
    },
    hintKeys: [
      'Substituiere z = x². Es entsteht: z² - 5z + 4 = 0.',
      'Löse für z, dann nimm die Wurzel für x.',
    ],
    solutionKey: 'z = x²: z² - 5z + 4 = 0 → (z-1)(z-4) = 0 → z₁ = 1, z₂ = 4. Ruecksubstitution: x² = 1 → x = ±1; x² = 4 → x = ±2. Größte positive Lösung: x = 2.',
    tags: ['biquadratisch', 'substitution'],
  },

  {
    id: 'qgl-standard-003',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText: 'Bringe die Gleichung 2x² - 8x = -6 auf Normalform und löse sie. Gib die kleinere Lösung an.',
      correctValue: 1,
      tolerance: 0.01,
    },
    hintKeys: [
      'Dividiere durch 2 und bringe alles auf eine Seite: x² - 4x + 3 = 0.',
      'Wende dann die p-q-Formel an.',
    ],
    solutionKey: '2x² - 8x + 6 = 0 → x² - 4x + 3 = 0 → p = -4, q = 3. x = 2 ± √(4 - 3) = 2 ± 1. x₁ = 3, x₂ = 1.',
    tags: ['normalform', 'umformen', 'pq-formel'],
  },

  {
    id: 'qgl-standard-004',
    topicId: '10-quad-gleichungen',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 10,
    timeEstimate: 4,
    data: {
      questionText: 'Die Gleichung x² + px + 9 = 0 hat genau eine reelle Lösung. Welcher Wert von p ist möglich?',
      options: [
        { id: 'a', text: 'p = 6', correct: true },
        { id: 'b', text: 'p = 3', correct: false },
        { id: 'c', text: 'p = -6', correct: true },
        { id: 'd', text: 'p = 0', correct: false },
      ],
    },
    hintKeys: [
      'Genau eine Lösung bedeutet D = 0.',
      'D = (p/2)² - 9 = 0 → (p/2)² = 9 → p/2 = ±3 → p = ±6.',
    ],
    solutionKey: 'D = (p/2)² - 9 = 0 → (p/2)² = 9 → p/2 = ±3 → p = 6 oder p = -6. Beide Werte ergeben eine Doppelloesung.',
    tags: ['parameter', 'diskriminante', 'lösungsanzahl'],
  },

  {
    id: 'qgl-standard-005',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    data: {
      questionText: 'Löse die Wurzelgleichung √(x + 3) = x - 1. Gib die gueltigen Lösung(en) an — wie viele gibt es?',
      correctValue: 1,
      tolerance: 0,
    },
    hintKeys: [
      'Quadriere beide Seiten: x + 3 = (x - 1)² = x² - 2x + 1.',
      'Probe nicht vergessen! Beide Lösungen müssen gueltig sein (√ ≥ 0, x - 1 ≥ 0).',
    ],
    solutionKey: 'x + 3 = x² - 2x + 1 → x² - 3x - 2 = 0 → Warte: x² - 3x - 2 = 0 hat x = (3 ± √17)/2. Probe: x₁ ≈ 3.56 (gueltig), x₂ ≈ -0.56 gibt x - 1 < 0 (ungueltig). Genau 1 gueltige Lösung.',
    tags: ['wurzelgleichung', 'probe', 'quadratische-gleichung'],
  },

  // ─── ERWEITERT (AFB III) ───────────────────────────────────────────────────

  {
    id: 'qgl-erweitert-001',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativität', 'kommunikation'],
    points: 15,
    timeEstimate: 8,
    contextKey: 'Ein rechteckiges Grundstueck hat einen Umfang von 40 m. Die Flaeche des Grundstuecks betraegt 96 m².',
    data: {
      questionText: 'Stelle eine quadratische Gleichung für die Laenge x (in Metern) einer Seite auf und löse sie. Gib die größere Seitenlaenge an.',
      correctValue: 12,
      tolerance: 0.1,
    },
    hintKeys: [
      'Umfang: 2(x + y) = 40 → y = 20 - x. Flaeche: x · y = 96.',
      'Einsetzen: x(20 - x) = 96 → x² - 20x + 96 = 0.',
    ],
    solutionKey: 'y = 20 - x; x(20 - x) = 96 → x² - 20x + 96 = 0 → p = -20, q = 96. x = 10 ± √(100 - 96) = 10 ± 2. x₁ = 12, x₂ = 8. Die größere Seite ist 12 m.',
    tags: ['sachkontext', 'flaeche', 'gleichung-aufstellen'],
  },

  {
    id: 'qgl-erweitert-002',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativität', 'kritisches-denken'],
    points: 15,
    timeEstimate: 8,
    data: {
      questionText: 'Berechne die x-Koordinaten der Schnittpunkte der Parabeln f(x) = x² - 2x und g(x) = -x² + 4. Gib die größere x-Koordinate an.',
      correctValue: 2,
      tolerance: 0.01,
    },
    hintKeys: [
      'Setze f(x) = g(x): x² - 2x = -x² + 4.',
      'Forme um: 2x² - 2x - 4 = 0 → x² - x - 2 = 0.',
    ],
    solutionKey: 'x² - 2x = -x² + 4 → 2x² - 2x - 4 = 0 → x² - x - 2 = 0 → (x - 2)(x + 1) = 0 → x₁ = 2, x₂ = -1. Größere x-Koordinate: x = 2.',
    tags: ['schnittpunkte', 'parabeln', 'gleichung-aufstellen'],
  },

  {
    id: 'qgl-erweitert-003',
    topicId: '10-quad-gleichungen',
    type: 'error-analysis',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 6,
    data: {
      questionText: 'Finde den Fehler im folgenden Lösungsweg für x² + 6x + 5 = 0:',
      steps: [
        { content: 'x² + 6x + 5 = 0', hasError: false },
        { content: 'p = 6, q = 5', hasError: false },
        { content: 'x = -6/2 ± √((6/2)² - 5)', hasError: false },
        { content: 'x = -3 ± √(36 - 5)', hasError: true, errorExplanation: 'Fehler: (6/2)² = 3² = 9, nicht 36. Richtig: x = -3 ± √(9 - 5) = -3 ± 2.' },
        { content: 'x₁ = -3 + √31 ≈ 2.57, x₂ = -3 - √31 ≈ -8.57', hasError: true, errorExplanation: 'Folge des Rechenfehlers. Richtig: x₁ = -3 + 2 = -1, x₂ = -3 - 2 = -5.' },
      ],
    },
    hintKeys: ['Prüfe Schritt 3 sorgfaeltig: Wie berechnet sich (p/2)²?'],
    solutionKey: 'Der Fehler liegt in Schritt 3: (6/2)² = 3² = 9, nicht 36. Richtig: x = -3 ± √(9 - 5) = -3 ± 2 → x₁ = -1, x₂ = -5.',
    tags: ['fehleranalyse', 'pq-formel', '4k-kritisches-denken'],
  },

  {
    id: 'qgl-erweitert-004',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativität', 'kritisches-denken'],
    points: 15,
    timeEstimate: 8,
    data: {
      questionText: 'Löse die Bruchgleichung (x + 2)/x + x/(x - 1) = 3 (x ≠ 0, x ≠ 1). Gib die größere Lösung auf zwei Dezimalstellen gerundet an.',
      correctValue: 3.41,
      tolerance: 0.02,
    },
    hintKeys: [
      'Multipliziere beide Seiten mit x(x - 1), um die Nenner zu beseitigen.',
      'Es entsteht: (x + 2)(x - 1) + x² = 3x(x - 1).',
    ],
    solutionKey: 'Multiplizieren mit x(x-1): (x+2)(x-1) + x² = 3x(x-1). x²+x-2 + x² = 3x²-3x → 2x²+x-2 = 3x²-3x → x²-4x+2 = 0. p=-4, q=2: x = 2 ± √2. x₁ = 2+√2 ≈ 3.41, x₂ = 2-√2 ≈ 0.59. Probe: beide gueltig. Größere Lösung: x ≈ 3.41.',
    tags: ['bruchgleichung', 'gleichung-aufstellen', 'probe'],
  },

  {
    id: 'qgl-erweitert-005',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativität', 'kommunikation'],
    points: 15,
    timeEstimate: 9,
    contextKey: 'Ein Zug legt eine Strecke von 240 km zurueck. Ein zweiter Zug ist 20 km/h schneller und benötigt für dieselbe Strecke 1 Stunde weniger.',
    data: {
      questionText: 'Stelle eine quadratische Gleichung für die Geschwindigkeit v (in km/h) des langsameren Zuges auf und löse sie. Gib v an.',
      correctValue: 60,
      tolerance: 0.5,
    },
    hintKeys: [
      'Zeit = Strecke / Geschwindigkeit. Zug 1: t₁ = 240/v; Zug 2: t₂ = 240/(v+20).',
      't₁ - t₂ = 1 → 240/v - 240/(v+20) = 1. Multipliziere mit v(v+20).',
    ],
    solutionKey: '240/v - 240/(v+20) = 1. Multiplizieren mit v(v+20): 240(v+20) - 240v = v(v+20) → 4800 = v² + 20v → v² + 20v - 4800 = 0. p = 20, q = -4800. v = -10 ± √(100 + 4800) = -10 ± 70. v₁ = 60 (gueltig), v₂ = -80 (unsinning). v = 60 km/h.',
    tags: ['sachkontext', 'geschwindigkeit-zeit', 'gleichung-aufstellen'],
  },

  // ─── PREMIUM UPGRADE: 9 neue Übungen ────────────────────────────

  {
    id: 'qgl-basis-006', topicId: '10-quad-gleichungen', type: 'step-solver', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 8, timeEstimate: 5,
    data: {
      questionText: 'Löse $x^2 - 5x + 6 = 0$ mit der pq-Formel.',
      steps: [
        { instruction: 'Identifiziere p und q. p = ?', type: 'numeric-input',
          expected: -5, tolerance: 0.01, showAnswer: 'p = -5 (Koeffizient vor x)' },
        { instruction: 'q = ?', type: 'numeric-input',
          expected: 6, tolerance: 0.01, showAnswer: 'q = 6 (Absolutglied)' },
        { instruction: 'Berechne die Diskriminante $D = (p/2)^2 - q = (-5/2)^2 - 6$ = ?', type: 'numeric-input',
          expected: 0.25, tolerance: 0.01, showAnswer: 'D = 6,25 - 6 = 0,25' },
        { instruction: '$x_1 = -p/2 + \\sqrt{D} = 2{,}5 + 0{,}5$ = ?', type: 'numeric-input',
          expected: 3, tolerance: 0.01, showAnswer: '$x_1 = 3$' },
      ],
    },
    hintKeys: ['pq-Formel: $x_{1,2} = -\\frac{p}{2} \\pm \\sqrt{(\\frac{p}{2})^2 - q}$'],
    solutionKey: '$x_{1,2} = 2{,}5 \\pm 0{,}5$. Also $x_1 = 3$, $x_2 = 2$.',
    tags: ['step-solver', 'pq-formel'],
  },
  {
    id: 'qgl-basis-007', topicId: '10-quad-gleichungen', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 2,
    data: {
      questionText: 'Wie viele Lösungen hat die Gleichung $x^2 + 4 = 0$?',
      options: [
        { id: 'a', text: 'Zwei Lösungen', correct: false },
        { id: 'b', text: 'Eine Lösung', correct: false },
        { id: 'c', text: 'Keine reelle Lösung', correct: true },
      ],
    },
    hintKeys: ['$x^2 = -4$. Kann ein Quadrat negativ sein?'],
    solutionKey: '$x^2 = -4$ hat keine reelle Lösung, da $x^2 \\geq 0$ für alle reellen $x$. D = 0 - 4 = -4 < 0.',
    tags: ['keine-lösung', 'diskriminante'],
  },
  {
    id: 'qgl-standard-006', topicId: '10-quad-gleichungen', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Ordne jeder Gleichung die Anzahl der Lösungen zu.',
      pairs: [
        { id: 'a', left: '$x^2 - 4x + 4 = 0$', right: '1 Lösung (D = 0)' },
        { id: 'b', left: '$x^2 - 5x + 6 = 0$', right: '2 Lösungen (D > 0)' },
        { id: 'c', left: '$x^2 + 1 = 0$', right: 'Keine Lösung (D < 0)' },
        { id: 'd', left: '$x^2 - 9 = 0$', right: '2 Lösungen (D > 0)' },
      ],
    },
    hintKeys: ['Berechne jeweils D = (p/2)² - q.'],
    solutionKey: '$x^2-4x+4$: D=0 (1 Lösung x=2). $x^2-5x+6$: D=0,25>0 (2 Lösungen). $x^2+1$: D=-1<0 (keine). $x^2-9$: D=9>0 (2 Lösungen).',
    tags: ['drag-match', 'diskriminante', 'lösungsanzahl'],
  },
  {
    id: 'qgl-standard-007', topicId: '10-quad-gleichungen', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 5,
    contextKey: 'Wurfparabel',
    data: {
      questionText: 'Ein Ball wird mit $h(t) = -5t^2 + 20t$ geworfen. Wann trifft er den Boden?',
      steps: [
        { instruction: 'Setze $h(t) = 0$: $-5t^2 + 20t = 0$. Klammere $t$ aus: $t \\cdot (?) = 0$. Was steht in der Klammer?', type: 'multiple-choice',
          options: [{ id: 'a', text: '$-5t + 20$' }, { id: 'b', text: '$-5t^2 + 20$' }, { id: 'c', text: '$5t - 20$' }],
          correctId: 'a', showAnswer: '$t \\cdot (-5t + 20) = 0$' },
        { instruction: '$t_1 = 0$ (Start). Löse $-5t + 20 = 0$: $t_2$ = ?', type: 'numeric-input',
          expected: 4, tolerance: 0.01, showAnswer: '$t_2 = 20/5 = 4$ Sekunden' },
      ],
    },
    hintKeys: ['Ausklammern: $-5t^2 + 20t = t(-5t + 20)$.', 'Nullprodukt: Wenn a·b = 0, dann a = 0 oder b = 0.'],
    solutionKey: '$t(-5t+20) = 0$. $t_1 = 0$ (Abwurf), $t_2 = 4$ s (Aufprall).',
    tags: ['step-solver', 'sachkontext', 'ausklammern', 'wurfparabel'],
  },
  {
    id: 'qgl-standard-008', topicId: '10-quad-gleichungen', type: 'error-analysis', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Finde den Fehler in der pq-Formel-Anwendung auf $x^2 + 6x + 5 = 0$.',
      steps: [
        { content: 'p = 6, q = 5', hasError: false },
        { content: 'x = -p/2 ± √((p/2)² - q) = -6/2 ± √(36 - 5)', hasError: true, errorExplanation: 'Fehler: (p/2)² = (6/2)² = 3² = 9, nicht 36. Es muss (p/2)² stehen, nicht p².' },
        { content: '= -3 ± √31', hasError: true, errorExplanation: 'Folgefehler. Richtig: x = -3 ± √(9-5) = -3 ± 2, also x₁ = -1, x₂ = -5.' },
      ],
    },
    hintKeys: ['Achte auf $(p/2)^2$ — erst halbieren, dann quadrieren!'],
    solutionKey: 'x = -3 ± √(9-5) = -3 ± 2. $x_1 = -1$, $x_2 = -5$.',
    tags: ['fehleranalyse', 'pq-formel'],
  },
  {
    id: 'qgl-erweitert-006', topicId: '10-quad-gleichungen', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kommunikation'], points: 15, timeEstimate: 5,
    contextKey: 'Brückenberechnung',
    data: {
      questionText: 'Eine Brücke hat die Form $y = -0{,}02x^2 + 1{,}2x$. Bei welchem positiven $x$ ist $y = 0$? (= Spannweite)',
      correctValue: 60, tolerance: 0.1,
    },
    hintKeys: ['$-0,02x^2 + 1,2x = 0$. Klammere x aus: $x(-0,02x + 1,2) = 0$.'],
    solutionKey: '$x(-0,02x + 1,2) = 0$. $x_1 = 0$, $x_2 = 1,2/0,02 = 60$. Die Brücke spannt 60 m.',
    tags: ['sachkontext', 'bruecke', 'ausklammern'],
  },
  {
    id: 'qgl-erweitert-007', topicId: '10-quad-gleichungen', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 7,
    contextKey: 'Gewinnzone eines Unternehmens',
    data: {
      questionText: 'Gewinnfunktion $G(x) = -2x^2 + 120x - 1000$. Ab welcher Stückzahl macht das Unternehmen Gewinn?',
      steps: [
        { instruction: 'Setze $G(x) = 0$: $-2x^2 + 120x - 1000 = 0$. Teile durch -2: $x^2 - 60x + 500 = 0$. p = ?', type: 'numeric-input',
          expected: -60, tolerance: 0.01, showAnswer: 'p = -60' },
        { instruction: 'D = $(p/2)^2 - q = 30^2 - 500$ = ?', type: 'numeric-input',
          expected: 400, tolerance: 0.1, showAnswer: 'D = 900 - 500 = 400' },
        { instruction: '$x_1 = 30 - \\sqrt{400} = 30 - 20$ = ?', type: 'numeric-input',
          expected: 10, tolerance: 0.1, showAnswer: '$x_1 \\approx 10$ (untere Grenze)' },
      ],
    },
    hintKeys: ['Gewinnzone = zwischen den Nullstellen (da G(x) > 0).', 'Erst durch -2 teilen, um Normalform zu erhalten.'],
    solutionKey: 'Break-even bei $x_1 \\approx 10$ und $x_2 = 50$. Gewinnzone: 10 < x < 50 Stück.',
    tags: ['step-solver', 'sachkontext', 'gewinnzone'],
  },
  {
    id: 'qgl-ea-001', topicId: '10-quad-gleichungen', type: 'multiple-choice', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 5,
    data: {
      questionText: 'Satz von Vieta: Wenn $x_1 \\cdot x_2 = 6$ und $x_1 + x_2 = 5$, wie lautet die quadratische Gleichung?',
      options: [
        { id: 'a', text: '$x^2 - 5x + 6 = 0$', correct: true },
        { id: 'b', text: '$x^2 + 5x + 6 = 0$', correct: false },
        { id: 'c', text: '$x^2 - 6x + 5 = 0$', correct: false },
      ],
    },
    hintKeys: ['Vieta: $x_1 + x_2 = -p$ und $x_1 \\cdot x_2 = q$.'],
    solutionKey: '$x_1 + x_2 = 5 \\Rightarrow p = -5$. $x_1 \\cdot x_2 = 6 \\Rightarrow q = 6$. Also $x^2 - 5x + 6 = 0$.',
    tags: ['vieta', 'ea'],
  },
  {
    id: 'qgl-ea-002', topicId: '10-quad-gleichungen', type: 'step-solver', diffLevel: 'ea',
    competencies: ['kreativität', 'kritisches-denken'], points: 20, timeEstimate: 7,
    data: {
      questionText: 'Löse $x^2 + 6x + 5 = 0$ durch quadratische Ergänzung (ohne pq-Formel).',
      steps: [
        { instruction: 'Ergänze: $x^2 + 6x + \\_ = (x + \\_)^2$. Welche Zahl muss ergänzt werden?', type: 'numeric-input',
          expected: 9, tolerance: 0.01, showAnswer: '$(p/2)^2 = 3^2 = 9$. Also $x^2 + 6x + 9 = (x+3)^2$.' },
        { instruction: '$x^2 + 6x + 5 = 0$ → $(x+3)^2 - 9 + 5 = 0$ → $(x+3)^2 = $ ?', type: 'numeric-input',
          expected: 4, tolerance: 0.01, showAnswer: '$(x+3)^2 = 4$' },
        { instruction: '$x + 3 = \\pm 2$. Die negative Lösung $x_2$ = ?', type: 'numeric-input',
          expected: -5, tolerance: 0.01, showAnswer: '$x + 3 = -2 \\Rightarrow x = -5$' },
      ],
    },
    hintKeys: ['Quadratische Ergänzung: Halbiere den Koeffizienten von x und quadriere.', '$(x+a)^2 = x^2 + 2ax + a^2$. Also $a = p/2$.'],
    solutionKey: '$(x+3)^2 = 4$. $x+3 = \\pm 2$. $x_1 = -1$, $x_2 = -5$.',
    tags: ['step-solver', 'quadratische-ergänzung', 'ea'],
  },
];
