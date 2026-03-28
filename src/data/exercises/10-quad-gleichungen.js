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
      questionText: 'Loese die Gleichung x² = 49. Gib die positive Loesung an.',
      correctValue: 7,
      tolerance: 0.01,
    },
    hintKeys: ['Ziehe auf beiden Seiten die Wurzel: x = ±√49.'],
    solutionKey: 'x² = 49 → x = ±√49 = ±7. Die positive Loesung ist x = 7.',
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
      questionText: 'Loese mit der p-q-Formel: x² - 5x + 6 = 0. Gib die groessere Loesung an.',
      correctValue: 3,
      tolerance: 0.01,
    },
    hintKeys: [
      'p-q-Formel: x₁,₂ = -p/2 ± √((p/2)² - q). Hier: p = -5, q = 6.',
      'x = 5/2 ± √(25/4 - 6) = 5/2 ± √(1/4) = 5/2 ± 1/2',
    ],
    solutionKey: 'x² - 5x + 6 = 0: p = -5, q = 6. x = 5/2 ± √(25/4 - 6) = 5/2 ± 1/2. x₁ = 3, x₂ = 2.',
    tags: ['pq-formel', 'ganzzahlige-loesungen'],
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
      questionText: 'Loese die Gleichung (x - 4)(x + 2) = 0. Gib die groessere Loesung an.',
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
      questionText: 'Wie viele reelle Loesungen hat die Gleichung x² + 4x + 5 = 0?',
      options: [
        { id: 'a', text: 'Keine Loesung (D < 0)', correct: true },
        { id: 'b', text: 'Genau eine Loesung (D = 0)', correct: false },
        { id: 'c', text: 'Zwei verschiedene Loesungen (D > 0)', correct: false },
        { id: 'd', text: 'Unendlich viele Loesungen', correct: false },
      ],
    },
    hintKeys: ['Berechne die Diskriminante D = (p/2)² - q mit p = 4, q = 5.'],
    solutionKey: 'D = (4/2)² - 5 = 4 - 5 = -1 < 0. Da D < 0, hat die Gleichung keine reellen Loesungen.',
    tags: ['diskriminante', 'loesungsanzahl'],
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
      questionText: 'Loese die Gleichung x(x - 5) = 0. Gib die positive Loesung an.',
      correctValue: 5,
      tolerance: 0.01,
    },
    hintKeys: ['Nullproduktsatz: x = 0 oder x - 5 = 0.'],
    solutionKey: 'x(x - 5) = 0 → x = 0 oder x - 5 = 0 → x₁ = 0, x₂ = 5. Die positive Loesung ist x = 5.',
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
      questionText: 'Loese x² - 4x + 1 = 0 mit der p-q-Formel. Gib die groessere Loesung auf zwei Dezimalstellen gerundet an.',
      correctValue: 3.73,
      tolerance: 0.01,
    },
    hintKeys: [
      'p = -4, q = 1. x = 2 ± √(4 - 1) = 2 ± √3.',
      '√3 ≈ 1.732',
    ],
    solutionKey: 'x² - 4x + 1 = 0: p = -4, q = 1. x = 2 ± √3. x₁ = 2 + √3 ≈ 3.73, x₂ = 2 - √3 ≈ 0.27.',
    tags: ['pq-formel', 'nicht-ganzzahlige-loesungen'],
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
      questionText: 'Loese die biquadratische Gleichung x⁴ - 5x² + 4 = 0 durch Substitution z = x². Gib die groesste positive Loesung fuer x an.',
      correctValue: 2,
      tolerance: 0.01,
    },
    hintKeys: [
      'Substituiere z = x². Es entsteht: z² - 5z + 4 = 0.',
      'Loese fuer z, dann nimm die Wurzel fuer x.',
    ],
    solutionKey: 'z = x²: z² - 5z + 4 = 0 → (z-1)(z-4) = 0 → z₁ = 1, z₂ = 4. Ruecksubstitution: x² = 1 → x = ±1; x² = 4 → x = ±2. Groesste positive Loesung: x = 2.',
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
      questionText: 'Bringe die Gleichung 2x² - 8x = -6 auf Normalform und loese sie. Gib die kleinere Loesung an.',
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
      questionText: 'Die Gleichung x² + px + 9 = 0 hat genau eine reelle Loesung. Welcher Wert von p ist moeglich?',
      options: [
        { id: 'a', text: 'p = 6', correct: true },
        { id: 'b', text: 'p = 3', correct: false },
        { id: 'c', text: 'p = -6', correct: true },
        { id: 'd', text: 'p = 0', correct: false },
      ],
    },
    hintKeys: [
      'Genau eine Loesung bedeutet D = 0.',
      'D = (p/2)² - 9 = 0 → (p/2)² = 9 → p/2 = ±3 → p = ±6.',
    ],
    solutionKey: 'D = (p/2)² - 9 = 0 → (p/2)² = 9 → p/2 = ±3 → p = 6 oder p = -6. Beide Werte ergeben eine Doppelloesung.',
    tags: ['parameter', 'diskriminante', 'loesungsanzahl'],
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
      questionText: 'Loese die Wurzelgleichung √(x + 3) = x - 1. Gib die gueltigen Loesung(en) an — wie viele gibt es?',
      correctValue: 1,
      tolerance: 0,
    },
    hintKeys: [
      'Quadriere beide Seiten: x + 3 = (x - 1)² = x² - 2x + 1.',
      'Probe nicht vergessen! Beide Loesungen muessen gueltig sein (√ ≥ 0, x - 1 ≥ 0).',
    ],
    solutionKey: 'x + 3 = x² - 2x + 1 → x² - 3x - 2 = 0 → Warte: x² - 3x - 2 = 0 hat x = (3 ± √17)/2. Probe: x₁ ≈ 3.56 (gueltig), x₂ ≈ -0.56 gibt x - 1 < 0 (ungueltig). Genau 1 gueltige Loesung.',
    tags: ['wurzelgleichung', 'probe', 'quadratische-gleichung'],
  },

  // ─── ERWEITERT (AFB III) ───────────────────────────────────────────────────

  {
    id: 'qgl-erweitert-001',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativitaet', 'kommunikation'],
    points: 15,
    timeEstimate: 8,
    contextKey: 'Ein rechteckiges Grundstueck hat einen Umfang von 40 m. Die Flaeche des Grundstuecks betraegt 96 m².',
    data: {
      questionText: 'Stelle eine quadratische Gleichung fuer die Laenge x (in Metern) einer Seite auf und loese sie. Gib die groessere Seitenlaenge an.',
      correctValue: 12,
      tolerance: 0.1,
    },
    hintKeys: [
      'Umfang: 2(x + y) = 40 → y = 20 - x. Flaeche: x · y = 96.',
      'Einsetzen: x(20 - x) = 96 → x² - 20x + 96 = 0.',
    ],
    solutionKey: 'y = 20 - x; x(20 - x) = 96 → x² - 20x + 96 = 0 → p = -20, q = 96. x = 10 ± √(100 - 96) = 10 ± 2. x₁ = 12, x₂ = 8. Die groessere Seite ist 12 m.',
    tags: ['sachkontext', 'flaeche', 'gleichung-aufstellen'],
  },

  {
    id: 'qgl-erweitert-002',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativitaet', 'kritisches-denken'],
    points: 15,
    timeEstimate: 8,
    data: {
      questionText: 'Berechne die x-Koordinaten der Schnittpunkte der Parabeln f(x) = x² - 2x und g(x) = -x² + 4. Gib die groessere x-Koordinate an.',
      correctValue: 2,
      tolerance: 0.01,
    },
    hintKeys: [
      'Setze f(x) = g(x): x² - 2x = -x² + 4.',
      'Forme um: 2x² - 2x - 4 = 0 → x² - x - 2 = 0.',
    ],
    solutionKey: 'x² - 2x = -x² + 4 → 2x² - 2x - 4 = 0 → x² - x - 2 = 0 → (x - 2)(x + 1) = 0 → x₁ = 2, x₂ = -1. Groessere x-Koordinate: x = 2.',
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
      questionText: 'Finde den Fehler im folgenden Loesungsweg fuer x² + 6x + 5 = 0:',
      steps: [
        { content: 'x² + 6x + 5 = 0', hasError: false },
        { content: 'p = 6, q = 5', hasError: false },
        { content: 'x = -6/2 ± √((6/2)² - 5)', hasError: false },
        { content: 'x = -3 ± √(36 - 5)', hasError: true, errorExplanation: 'Fehler: (6/2)² = 3² = 9, nicht 36. Richtig: x = -3 ± √(9 - 5) = -3 ± 2.' },
        { content: 'x₁ = -3 + √31 ≈ 2.57, x₂ = -3 - √31 ≈ -8.57', hasError: true, errorExplanation: 'Folge des Rechenfehlers. Richtig: x₁ = -3 + 2 = -1, x₂ = -3 - 2 = -5.' },
      ],
    },
    hintKeys: ['Pruefe Schritt 3 sorgfaeltig: Wie berechnet sich (p/2)²?'],
    solutionKey: 'Der Fehler liegt in Schritt 3: (6/2)² = 3² = 9, nicht 36. Richtig: x = -3 ± √(9 - 5) = -3 ± 2 → x₁ = -1, x₂ = -5.',
    tags: ['fehleranalyse', 'pq-formel', '4k-kritisches-denken'],
  },

  {
    id: 'qgl-erweitert-004',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativitaet', 'kritisches-denken'],
    points: 15,
    timeEstimate: 8,
    data: {
      questionText: 'Loese die Bruchgleichung (x + 2)/x + x/(x - 1) = 3 (x ≠ 0, x ≠ 1). Gib die groessere Loesung auf zwei Dezimalstellen gerundet an.',
      correctValue: 3.41,
      tolerance: 0.02,
    },
    hintKeys: [
      'Multipliziere beide Seiten mit x(x - 1), um die Nenner zu beseitigen.',
      'Es entsteht: (x + 2)(x - 1) + x² = 3x(x - 1).',
    ],
    solutionKey: 'Multiplizieren mit x(x-1): (x+2)(x-1) + x² = 3x(x-1). x²+x-2 + x² = 3x²-3x → 2x²+x-2 = 3x²-3x → x²-4x+2 = 0. p=-4, q=2: x = 2 ± √2. x₁ = 2+√2 ≈ 3.41, x₂ = 2-√2 ≈ 0.59. Probe: beide gueltig. Groessere Loesung: x ≈ 3.41.',
    tags: ['bruchgleichung', 'gleichung-aufstellen', 'probe'],
  },

  {
    id: 'qgl-erweitert-005',
    topicId: '10-quad-gleichungen',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativitaet', 'kommunikation'],
    points: 15,
    timeEstimate: 9,
    contextKey: 'Ein Zug legt eine Strecke von 240 km zurueck. Ein zweiter Zug ist 20 km/h schneller und benoetigt fuer dieselbe Strecke 1 Stunde weniger.',
    data: {
      questionText: 'Stelle eine quadratische Gleichung fuer die Geschwindigkeit v (in km/h) des langsameren Zuges auf und loese sie. Gib v an.',
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
];
