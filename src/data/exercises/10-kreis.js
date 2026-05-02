export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'kr-basis-001', topicId: '10-kreis', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 2,
    data: {
      questionText: 'Berechne den Umfang eines Kreises mit Radius $r = 7$ cm. Gib den Wert als Vielfaches von $\\pi$ an (also den Faktor vor $\\pi$).',
      correctValue: 14,
      tolerance: 0.001,
    },
    hintKeys: ['$U = 2\\pi r$. Setze $r = 7$ ein.'],
    solutionKey: '$U = 2\\pi \\cdot 7 = 14\\pi \\approx 43{,}98$ cm.',
    tags: ['umfang'],
  },
  {
    id: 'kr-basis-002', topicId: '10-kreis', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Berechne die Fläche eines Kreises mit Radius $r = 4$ cm. Runde auf zwei Dezimalstellen.',
      correctValue: 50.27,
      tolerance: 0.05,
      unit: 'cm²',
    },
    hintKeys: ['$A = \\pi r^2$. Setze $r = 4$ ein.'],
    solutionKey: '$A = \\pi \\cdot 16 \\approx 50{,}27$ cm².',
    tags: ['flaeche'],
  },
  {
    id: 'kr-basis-003', topicId: '10-kreis', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Wie groß ist $90°$ im Bogenmaß?',
      options: [
        { id: 'a', text: '$\\pi$', correct: false },
        { id: 'b', text: '$\\dfrac{\\pi}{2}$', correct: true },
        { id: 'c', text: '$2\\pi$', correct: false },
        { id: 'd', text: '$\\dfrac{\\pi}{4}$', correct: false },
      ],
    },
    hintKeys: ['$360° = 2\\pi$. Also $90° = \\dfrac{1}{4} \\cdot 2\\pi = \\dfrac{\\pi}{2}$.'],
    solutionKey: '$90°$ entspricht einem Viertelkreis. Vom Vollkreis $2\\pi$ ist das $\\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}$.',
    tags: ['bogenmass', 'umrechnung'],
  },
  {
    id: 'kr-basis-004', topicId: '10-kreis', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Ein Kreissektor mit Radius $r = 6$ cm und Mittelpunktswinkel $\\alpha = 90°$ — wie groß ist die Sektorfläche? Gib den Wert als Vielfaches von $\\pi$ an.',
      correctValue: 9,
      tolerance: 0.01,
    },
    hintKeys: ['$A_{\\text{Sektor}} = \\frac{\\alpha}{360°} \\cdot \\pi r^2 = \\frac{90}{360} \\cdot \\pi \\cdot 36$.'],
    solutionKey: '$A_{\\text{Sektor}} = \\frac{1}{4} \\cdot 36\\pi = 9\\pi$ cm².',
    tags: ['sektor'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ───────────────────────────────────────

  {
    id: 'kr-std-001', topicId: '10-kreis', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 6,
    contextKey: 'Kuchen-Stück',
    data: {
      questionText: 'Eine runde Pizza mit Durchmesser 32 cm wird in 8 gleiche Stücke geschnitten. Berechne die Fläche eines Stücks und die Bogenlänge der Kruste.',
      steps: [
        {
          instruction: 'Wie groß ist der Radius?',
          type: 'numeric-input', expected: 16, tolerance: 0.01,
          unit: 'cm',
          showAnswer: '$r = d/2 = 16$ cm.',
        },
        {
          instruction: 'Mittelpunktswinkel pro Stück (in Grad)?',
          type: 'numeric-input', expected: 45, tolerance: 0.5,
          showAnswer: '$\\alpha = 360°/8 = 45°$',
        },
        {
          instruction: 'Sektorfläche $A = \\frac{45}{360} \\cdot \\pi \\cdot 16^2$. Auf 1 Dezimale gerundet (in cm²)?',
          type: 'numeric-input', expected: 100.5, tolerance: 0.5,
          unit: 'cm²',
          showAnswer: '$A = \\frac{1}{8} \\cdot 256\\pi = 32\\pi \\approx 100{,}5$ cm².',
        },
        {
          instruction: 'Bogenlänge der Kruste eines Stücks $b = \\frac{45}{360} \\cdot 2\\pi \\cdot 16$. Auf 1 Dezimale gerundet (in cm)?',
          type: 'numeric-input', expected: 12.6, tolerance: 0.2,
          unit: 'cm',
          showAnswer: '$b = \\frac{1}{8} \\cdot 32\\pi = 4\\pi \\approx 12{,}57$ cm.',
        },
      ],
    },
    hintKeys: ['Pizza-Stück = Kreissektor mit $\\alpha = 360°/8 = 45°$.'],
    solutionKey: '$r = 16$ cm, $\\alpha = 45°$, $A \\approx 100{,}5$ cm², Krustenlänge $\\approx 12{,}6$ cm.',
    tags: ['step-solver', 'pizza', 'sektor', 'sachkontext'],
  },
  {
    id: 'kr-std-002', topicId: '10-kreis', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Wandle $135°$ ins Bogenmaß um. Gib den Wert als Vielfaches von $\\pi$ an (also den Bruch).',
      correctValue: 0.75,
      tolerance: 0.01,
    },
    hintKeys: ['$\\alpha_{\\text{rad}} = \\dfrac{\\pi}{180°} \\cdot 135°$.'],
    solutionKey: '$\\alpha_{\\text{rad}} = \\dfrac{135}{180}\\pi = \\dfrac{3}{4}\\pi = 0{,}75\\pi$.',
    tags: ['umrechnung', 'grad-zu-rad'],
  },
  {
    id: 'kr-std-003', topicId: '10-kreis', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 5,
    contextKey: 'Uhrzeiger',
    data: {
      questionText: 'Der Minutenzeiger einer Uhr ist 8 cm lang. Welche Strecke (Bogenlänge) zeichnet seine Spitze in 15 Minuten? Auf 2 Dezimalen gerundet.',
      correctValue: 12.57,
      tolerance: 0.05,
      unit: 'cm',
    },
    hintKeys: [
      '15 Min = 1/4 Umdrehung = $90°$ = $\\pi/2$ rad.',
      'Bogenlänge: $b = \\alpha_{\\text{rad}} \\cdot r = \\dfrac{\\pi}{2} \\cdot 8 = 4\\pi$.',
    ],
    solutionKey: '$b = \\frac{\\pi}{2} \\cdot 8 = 4\\pi \\approx 12{,}57$ cm.',
    tags: ['bogenlaenge', 'uhr', 'sachkontext'],
  },
  {
    id: 'kr-std-004', topicId: '10-kreis', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Welche Aussage über die Beziehung zwischen Umfang $U$ und Fläche $A$ eines Kreises ist richtig?',
      options: [
        { id: 'a', text: 'Wenn der Radius verdoppelt wird, verdoppeln sich Umfang und Fläche.', correct: false },
        { id: 'b', text: 'Wenn der Radius verdoppelt wird, verdoppelt sich der Umfang, die Fläche vervierfacht sich.', correct: true },
        { id: 'c', text: 'Wenn der Radius verdoppelt wird, vervierfacht sich der Umfang, die Fläche verdoppelt sich.', correct: false },
        { id: 'd', text: 'Beide bleiben gleich.', correct: false },
      ],
    },
    hintKeys: ['$U = 2\\pi r$ (linear in $r$), $A = \\pi r^2$ (quadratisch in $r$).'],
    solutionKey: 'Verdopplung von $r$: $U$ verdoppelt sich (linear), $A$ vervierfacht sich (quadratisch). Das ist der Skalierungs-Charakter k vs. k².',
    tags: ['skalierung', 'verstaendnis'],
  },
  {
    id: 'kr-std-005', topicId: '10-kreis', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Ein Kreis hat den Umfang $U = 18\\pi$ cm. Berechne die Fläche (als Vielfaches von $\\pi$, also den Faktor).',
      correctValue: 81,
      tolerance: 0.01,
    },
    hintKeys: ['Aus $U = 2\\pi r = 18\\pi$ folgt $r = 9$. Dann $A = \\pi r^2$.'],
    solutionKey: '$r = 9$ cm. $A = \\pi \\cdot 81 = 81\\pi$ cm².',
    tags: ['umkehrung'],
  },

  // ─── ERWEITERT (AFB III) – 3 Aufgaben ─────────────────────────────────────

  {
    id: 'kr-erw-001', topicId: '10-kreis', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 8,
    contextKey: 'Riesenrad',
    data: {
      questionText: 'Ein Riesenrad hat einen Durchmesser von 40 m und braucht für eine Umdrehung 8 Minuten. Wie weit ist die Fahrt nach 3 Minuten?',
      steps: [
        {
          instruction: 'Welcher Anteil einer Umdrehung sind 3 Minuten?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\dfrac{3}{8}$', correct: true },
            { id: 'b', text: '$\\dfrac{8}{3}$', correct: false },
            { id: 'c', text: '$\\dfrac{1}{3}$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\dfrac{3 \\text{ min}}{8 \\text{ min}} = \\dfrac{3}{8}$',
        },
        {
          instruction: 'Vollumfang des Riesenrades (in m, auf 1 Dezimale)?',
          type: 'numeric-input', expected: 125.7, tolerance: 0.5,
          unit: 'm',
          showAnswer: '$U = 2\\pi \\cdot 20 = 40\\pi \\approx 125{,}7$ m.',
        },
        {
          instruction: 'Zurückgelegte Strecke nach 3 min: $\\dfrac{3}{8} \\cdot U$ (in m, auf 1 Dezimale)?',
          type: 'numeric-input', expected: 47.1, tolerance: 0.5,
          unit: 'm',
          showAnswer: '$\\dfrac{3}{8} \\cdot 40\\pi = 15\\pi \\approx 47{,}1$ m.',
        },
      ],
    },
    hintKeys: ['Strecke = Anteil der Umdrehung × Umfang.'],
    solutionKey: 'Anteil $\\dfrac{3}{8}$, Umfang $40\\pi$ m, Strecke $15\\pi \\approx 47{,}1$ m.',
    tags: ['step-solver', 'riesenrad', 'bogenlaenge', 'sachkontext'],
  },
  {
    id: 'kr-erw-002', topicId: '10-kreis', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 5,
    data: {
      questionText: 'Lina rechnet die Bogenlänge bei $r = 10$ cm und $\\alpha = 60°$. Finde den Fehler.',
      steps: [
        { content: '$b = \\alpha \\cdot r$', hasError: false },
        { content: '$b = 60 \\cdot 10 = 600$ cm', hasError: true,
          errorExplanation: 'Lina hat $\\alpha$ in Grad eingesetzt. Die Formel $b = \\alpha \\cdot r$ gilt nur, wenn $\\alpha$ im Bogenmaß steht. Richtig: $\\alpha = 60° = \\dfrac{\\pi}{3}$ rad, also $b = \\dfrac{\\pi}{3} \\cdot 10 \\approx 10{,}47$ cm.' },
      ],
    },
    hintKeys: ['Wenn $\\alpha$ in Grad ist: $b = \\dfrac{\\alpha°}{360°} \\cdot 2\\pi r$. Für die Kurzform $b = \\alpha r$ muss $\\alpha$ im Bogenmaß sein.'],
    solutionKey: 'Schritt 2 ist falsch. Mit $\\alpha = 60° = \\pi/3$ rad: $b = \\dfrac{\\pi}{3} \\cdot 10 \\approx 10{,}47$ cm.',
    tags: ['fehleranalyse', 'bogenmass'],
  },
  {
    id: 'kr-erw-003', topicId: '10-kreis', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kreativität', 'kritisches-denken'], points: 15, timeEstimate: 7,
    contextKey: 'Sektorfläche aus Bogen',
    data: {
      questionText: 'Ein Kreissektor hat Radius $r = 8$ cm und Bogenlänge $b = 6$ cm. Berechne die Sektorfläche (auf 2 Dezimalen).',
      correctValue: 24,
      tolerance: 0.05,
      unit: 'cm²',
    },
    hintKeys: [
      '$\\alpha_{\\text{rad}} = b/r = 6/8 = 0{,}75$ rad.',
      '$A_{\\text{Sektor}} = \\dfrac{1}{2} r^2 \\alpha_{\\text{rad}} = \\dfrac{1}{2} \\cdot 64 \\cdot 0{,}75$.',
    ],
    solutionKey: '$\\alpha = 0{,}75$ rad. $A = \\dfrac{1}{2} \\cdot 64 \\cdot 0{,}75 = 24$ cm². Praktische Formel: $A = \\dfrac{1}{2} r b$ — die Sektorfläche ist halb so groß wie das Rechteck $r \\times b$.',
    tags: ['sektorfläche', 'aus-bogenlaenge'],
  },
];
