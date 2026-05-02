export const exercises = [

  // ===== BASIS (AFB I) — 5 Aufgaben =====

  {
    id: 'koerp-basis-001', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    contextKey: 'Ein Kegel hat den Grundkreisradius r = 5 cm und die Höhe h = 12 cm.',
    data: {
      questionText: 'Berechne das Volumen des Kegels (in cm³). Runde auf eine Dezimalstelle. Nutze π ≈ 3,14159.',
      correctValue: 314.2,
      tolerance: 0.5,
      unit: 'cm³',
    },
    hintKeys: [
      'Formel: V = ⅓ · π · r² · h',
      'Setze r = 5 und h = 12 ein: V = ⅓ · 3,14159 · 25 · 12',
    ],
    solutionKey: 'V = ⅓ · π · r² · h = ⅓ · 3,14159 · 5² · 12 = ⅓ · 3,14159 · 25 · 12 ≈ 314,2 cm³.',
    tags: ['kegel', 'volumen', 'formel'],
  },

  {
    id: 'koerp-basis-002', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    contextKey: 'Eine Kugel hat den Radius r = 6 cm.',
    data: {
      questionText: 'Berechne die Oberfläche der Kugel (in cm²). Runde auf eine Dezimalstelle. Nutze π ≈ 3,14159.',
      correctValue: 452.4,
      tolerance: 0.5,
      unit: 'cm²',
    },
    hintKeys: [
      'Formel: O = 4 · π · r²',
      'Setze r = 6 ein: O = 4 · 3,14159 · 36',
    ],
    solutionKey: 'O = 4 · π · r² = 4 · 3,14159 · 6² = 4 · 3,14159 · 36 ≈ 452,4 cm².',
    tags: ['kugel', 'oberfläche', 'formel'],
  },

  {
    id: 'koerp-basis-003', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    contextKey: 'Eine quadratische Pyramide hat die Grundkantenlänge a = 6 cm und die Höhe h = 8 cm.',
    data: {
      questionText: 'Berechne das Volumen der Pyramide (in cm³). Runde auf eine Dezimalstelle.',
      correctValue: 96.0,
      tolerance: 0.5,
      unit: 'cm³',
    },
    hintKeys: [
      'Formel: V = ⅓ · Grundfläche · h',
      'Grundfläche = a² = 6² = 36 cm². Also: V = ⅓ · 36 · 8',
    ],
    solutionKey: 'V = ⅓ · a² · h = ⅓ · 36 · 8 = 96 cm³.',
    tags: ['pyramide', 'volumen', 'quadratisch'],
  },

  {
    id: 'koerp-basis-004', topicId: '10-koerper', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welche Formel berechnet das Volumen eines Kegels mit Radius r und Höhe h?',
      options: [
        { id: 'a', text: 'V = ⅓ · π · r² · h', correct: true },
        { id: 'b', text: 'V = π · r² · h', correct: false },
        { id: 'c', text: 'V = ⁴⁄₃ · π · r³', correct: false },
        { id: 'd', text: 'V = ⅓ · a² · h', correct: false },
      ],
    },
    hintKeys: [
      'Das Volumen eines Kegels ist ein Drittel des umschließenden Zylinders.',
      'V(Zylinder) = π · r² · h — der Kegel hat davon ein Drittel.',
    ],
    solutionKey: 'Korrekt ist (a): V = ⅓ · π · r² · h. (b) ist der Zylinder, (c) ist die Kugel, (d) ist die quadratische Pyramide.',
    tags: ['kegel', 'formeln', 'zuordnung'],
  },

  {
    id: 'koerp-basis-005', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    contextKey: 'Eine Kugel hat den Radius r = 3 cm.',
    data: {
      questionText: 'Berechne das Volumen der Kugel (in cm³). Runde auf eine Dezimalstelle. Nutze π ≈ 3,14159.',
      correctValue: 113.1,
      tolerance: 0.5,
      unit: 'cm³',
    },
    hintKeys: [
      'Formel: V = ⁴⁄₃ · π · r³',
      'Setze r = 3 ein: V = ⁴⁄₃ · 3,14159 · 27',
    ],
    solutionKey: 'V = ⁴⁄₃ · π · r³ = ⁴⁄₃ · 3,14159 · 3³ = ⁴⁄₃ · 3,14159 · 27 ≈ 113,1 cm³.',
    tags: ['kugel', 'volumen', 'formel'],
  },

  // ===== STANDARD (AFB II) — 5 Aufgaben =====

  {
    id: 'koerp-standard-001', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 8, timeEstimate: 5,
    contextKey: 'Ein Kegel hat den Grundkreisradius r = 4 cm und die Höhe h = 3 cm.',
    data: {
      questionText: 'Berechne die Mantelfläche des Kegels (in cm²). Runde auf eine Dezimalstelle. Nutze π ≈ 3,14159. Hinweis: Berechne zuerst die Seitenlinie s.',
      correctValue: 62.8,
      tolerance: 0.5,
      unit: 'cm²',
    },
    hintKeys: [
      'Seitenlinie: s = √(r² + h²) = √(16 + 9) = √25 = 5 cm',
      'Mantelfläche: M = π · r · s',
    ],
    solutionKey: 's = √(r² + h²) = √(4² + 3²) = √(16 + 9) = √25 = 5 cm. M = π · r · s = 3,14159 · 4 · 5 ≈ 62,8 cm².',
    tags: ['kegel', 'mantelfläche', 'seitenlinie'],
  },

  {
    id: 'koerp-standard-002', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kreativität'], points: 8, timeEstimate: 6,
    contextKey: 'Ein zusammengesetzter Körper besteht aus einem Zylinder (r = 5 cm, h = 10 cm) und einer aufgesetzten Halbkugel (r = 5 cm).',
    data: {
      questionText: 'Berechne das Gesamtvolumen des Körpers (in cm³). Runde auf eine Dezimalstelle. Nutze π ≈ 3,14159.',
      correctValue: 1047.2,
      tolerance: 1.0,
      unit: 'cm³',
    },
    hintKeys: [
      'V(Zylinder) = π · r² · h. V(Halbkugel) = ½ · ⁴⁄₃ · π · r³ = ⅔ · π · r³',
      'Addiere beide Volumina.',
    ],
    solutionKey: 'V(Zylinder) = π · 5² · 10 = 3,14159 · 250 ≈ 785,4 cm³. V(Halbkugel) = ⅔ · π · 5³ = ⅔ · 3,14159 · 125 ≈ 261,8 cm³. Gesamt ≈ 785,4 + 261,8 = 1047,2 cm³.',
    tags: ['zusammengesetzt', 'zylinder', 'halbkugel', 'volumen'],
  },

  {
    id: 'koerp-standard-003', topicId: '10-koerper', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 8, timeEstimate: 5,
    contextKey: 'Kegel A hat r = 6 cm, h = 8 cm. Kugel B hat r = 4 cm.',
    data: {
      questionText: 'Welcher Körper hat das größere Volumen? Nutze π ≈ 3,14159.',
      options: [
        { id: 'a', text: 'Kegel A (V ≈ 301,6 cm³) ist größer als Kugel B (V ≈ 268,1 cm³)', correct: true },
        { id: 'b', text: 'Kugel B (V ≈ 268,1 cm³) ist größer als Kegel A (V ≈ 301,6 cm³)', correct: false },
        { id: 'c', text: 'Beide Körper haben dasselbe Volumen.', correct: false },
        { id: 'd', text: 'Kegel A (V ≈ 150,8 cm³) ist kleiner als Kugel B (V ≈ 268,1 cm³)', correct: false },
      ],
    },
    hintKeys: [
      'V(Kegel) = ⅓ · π · r² · h = ⅓ · π · 36 · 8',
      'V(Kugel) = ⁴⁄₃ · π · r³ = ⁴⁄₃ · π · 64',
    ],
    solutionKey: 'V(Kegel A) = ⅓ · 3,14159 · 36 · 8 ≈ 301,6 cm³. V(Kugel B) = ⁴⁄₃ · 3,14159 · 64 ≈ 268,1 cm³. Kegel A hat das größere Volumen → Antwort (a).',
    tags: ['vergleich', 'kegel', 'kugel', 'volumen'],
  },

  {
    id: 'koerp-standard-004', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 8, timeEstimate: 6,
    contextKey: 'Eine quadratische Pyramide hat die Grundkantenlänge a = 8 cm und die Höhe h = 6 cm.',
    data: {
      questionText: 'Berechne die gesamte Oberfläche der Pyramide (in cm²). Runde auf eine Dezimalstelle. Hinweis: O = Grundfläche + 4 Dreiecke.',
      correctValue: 179.4,
      tolerance: 1.0,
      unit: 'cm²',
    },
    hintKeys: [
      'Grundfläche: G = a² = 64 cm²',
      'Apothema (Höhe eines Seitendreiecks): m = √(h² + (a/2)²) = √(36 + 16) = √52 ≈ 7,21 cm. Seitenfläche je Dreieck = ½ · a · m. Vier Dreiecke.',
    ],
    solutionKey: 'G = 8² = 64 cm². Apothema m = √(h² + (a/2)²) = √(6² + 4²) = √52 ≈ 7,211 cm. Mantelfläche = 4 · ½ · a · m = 2 · 8 · 7,211 = 16 · 7,211 ≈ 115,4 cm². O = G + Mantelfläche = 64 + 115,4 ≈ 179,4 cm².',
    tags: ['pyramide', 'oberfläche', 'apothema'],
  },

  {
    id: 'koerp-standard-005', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 8, timeEstimate: 5,
    contextKey: 'Ein Kegel hat das Volumen V = 150,8 cm³ und den Grundkreisradius r = 6 cm.',
    data: {
      questionText: 'Berechne die Höhe h des Kegels (in cm). Runde auf eine Dezimalstelle. Nutze π ≈ 3,14159.',
      correctValue: 4.0,
      tolerance: 0.2,
      unit: 'cm',
    },
    hintKeys: [
      'Forme die Formel V = ⅓ · π · r² · h nach h um.',
      'h = 3V / (π · r²)',
    ],
    solutionKey: 'V = ⅓ · π · r² · h → h = 3V / (π · r²) = 3 · 150,8 / (3,14159 · 36) = 452,4 / 113,1 ≈ 4,0 cm.',
    tags: ['kegel', 'höhe', 'rückrechnen', 'algebra'],
  },

  // ===== ERWEITERT (AFB III) — 5 Aufgaben =====

  {
    id: 'koerp-erweitert-001', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kreativität', 'kritisches-denken'], points: 12, timeEstimate: 8,
    contextKey: 'Eine Eistüte besteht aus einem Kegel (r = 3 cm, h = 12 cm) und einer aufgesetzten Halbkugel (r = 3 cm), die das Eis darstellt.',
    data: {
      questionText: 'Berechne das gesamte Volumen von Kegel und Halbkugel (in cm³). Runde auf eine Dezimalstelle. Nutze π ≈ 3,14159.',
      correctValue: 170.0,
      tolerance: 1.0,
      unit: 'cm³',
    },
    hintKeys: [
      'V(Kegel) = ⅓ · π · r² · h und V(Halbkugel) = ⅔ · π · r³',
      'V(Kegel) = ⅓ · π · 9 · 12. V(Halbkugel) = ⅔ · π · 27.',
    ],
    solutionKey: 'V(Kegel) = ⅓ · 3,14159 · 9 · 12 = ⅓ · 339,3 ≈ 113,1 cm³. V(Halbkugel) = ⅔ · 3,14159 · 27 = ⅔ · 84,82 ≈ 56,5 cm³. V(gesamt) ≈ 113,1 + 56,5 = 169,6 ≈ 170,0 cm³.',
    tags: ['kegel', 'halbkugel', 'sachkontext', 'zusammengesetzt'],
  },

  {
    id: 'koerp-erweitert-002', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kreativität', 'kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 8,
    contextKey: 'Ein Kirchturm besteht aus einem quadratischen Quader (Grundkante a = 4 m, Höhe h₁ = 15 m) und einer aufgesetzten quadratischen Pyramide (Grundkante a = 4 m, Höhe h₂ = 6 m).',
    data: {
      questionText: 'Berechne das gesamte Volumen des Kirchturms (in m³). Runde auf eine Dezimalstelle.',
      correctValue: 272.0,
      tolerance: 1.0,
      unit: 'm³',
    },
    hintKeys: [
      'V(Quader) = a² · h₁ und V(Pyramide) = ⅓ · a² · h₂',
      'V(Quader) = 16 · 15 = 240 m³. V(Pyramide) = ⅓ · 16 · 6.',
    ],
    solutionKey: 'V(Quader) = 4² · 15 = 16 · 15 = 240 m³. V(Pyramide) = ⅓ · 4² · 6 = ⅓ · 96 = 32 m³. V(gesamt) = 240 + 32 = 272 m³.',
    tags: ['pyramide', 'quader', 'sachkontext', 'kirchturm', 'zusammengesetzt'],
  },

  {
    id: 'koerp-erweitert-003', topicId: '10-koerper', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 7,
    contextKey: 'Schüler Felix berechnet das Volumen einer Kugel mit r = 5 cm.',
    data: {
      questionText: 'Analysiere die Lösung von Felix. Finde den Fehler und erkläre, wie man korrekt vorgeht.',
      steps: [
        { content: 'Felix schreibt: „Formel Kugel-Volumen: V = 4 · π · r²"', hasError: true, errorExplanation: 'Falsche Formel! Felix verwendet die Formel für die Kugeloberfläche (O = 4πr²), nicht für das Volumen. Die korrekte Volumenformel lautet V = ⁴⁄₃ · π · r³.' },
        { content: 'Felix setzt ein: V = 4 · 3,14159 · 25 = 314,16 cm²', hasError: true, errorExplanation: 'Zwei Fehler: (1) Falsche Formel (s.o.). (2) Die Einheit cm² (Fläche) ist falsch — Volumen wird in cm³ gemessen.' },
        { content: 'Felix schreibt: „Das Volumen der Kugel beträgt 314,16 cm²."', hasError: true, errorExplanation: 'Falsche Einheit (cm² statt cm³) und falsches Ergebnis. Korrektes Volumen: V = ⁴⁄₃ · π · 5³ ≈ 523,6 cm³.' },
      ],
    },
    hintKeys: [
      'Vergleiche die Formel, die Felix nutzt, mit der korrekten Volumenformel V = ⁴⁄₃ · π · r³.',
      'Achte auch auf die verwendete Einheit.',
    ],
    solutionKey: 'Felix verwechselt Volumen- und Oberflächenformel der Kugel und verwendet auch die falsche Einheit. Korrekt: V = ⁴⁄₃ · π · r³ = ⁴⁄₃ · 3,14159 · 125 ≈ 523,6 cm³.',
    tags: ['kugel', 'fehleranalyse', 'volumen', 'formeln'],
  },

  {
    id: 'koerp-erweitert-004', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativität'], points: 12, timeEstimate: 8,
    contextKey: 'Eine Kugel ist einem Zylinder einbeschrieben: Der Radius der Kugel ist gleich dem Radius des Zylinders (r), und der Durchmesser der Kugel ist gleich der Höhe des Zylinders (h = 2r).',
    data: {
      questionText: 'Berechne das Verhältnis V(Kugel) / V(Zylinder). Gib den Wert als Dezimalzahl an (z. B. 0,67). Runde auf zwei Dezimalstellen.',
      correctValue: 0.67,
      tolerance: 0.01,
      unit: '',
    },
    hintKeys: [
      'V(Kugel) = ⁴⁄₃ · π · r³ und V(Zylinder) = π · r² · h = π · r² · 2r = 2π · r³',
      'Teile V(Kugel) durch V(Zylinder) — das r³ kürzt sich.',
    ],
    solutionKey: 'V(Kugel) = ⁴⁄₃ · π · r³. V(Zylinder) = π · r² · 2r = 2πr³. Verhältnis = (⁴⁄₃ · πr³) / (2πr³) = (4/3) / 2 = 4/6 = 2/3 ≈ 0,67. Die Kugel füllt also genau ⅔ des einbeschriebenen Zylinders.',
    tags: ['kugel', 'zylinder', 'verhältnis', 'einbeschrieben'],
  },

  {
    id: 'koerp-erweitert-005', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativität', 'kommunikation'], points: 12, timeEstimate: 10,
    contextKey: 'Ein umgekehrter Kegel (Spitze unten) dient als Wasserbehälter. Der Öffnungsradius oben beträgt R = 6 m, die Tiefe H = 9 m. Der Behälter ist zur Hälfte mit Wasser gefüllt (gemessen an der Höhe: Wasserstand h = 4,5 m).',
    data: {
      questionText: 'Berechne das Volumen des Wassers im Behälter (in m³). Runde auf eine Dezimalstelle. Nutze π ≈ 3,14159. Hinweis: Der Radius des Wasserkegels ist proportional zur Wassertiefe.',
      correctValue: 42.4,
      tolerance: 1.0,
      unit: 'm³',
    },
    hintKeys: [
      'Der Wasserstand h = 4,5 m ist die Hälfte der Gesamttiefe H = 9 m.',
      'Der Radius des Wasserkegels: r(h) = R · (h/H) = 6 · (4,5/9) = 3 m.',
      'V(Wasser) = ⅓ · π · r² · h mit r = 3 m, h = 4,5 m.',
    ],
    solutionKey: 'Ähnlichkeit: r/R = h/H → r = R · h/H = 6 · (4,5/9) = 3 m. V(Wasser) = ⅓ · π · r² · h = ⅓ · 3,14159 · 3² · 4,5 = ⅓ · 127,2 ≈ 42,4 m³. Wichtige Erkenntnis: Das Volumen des halben Wasserstands ist NICHT die Hälfte des Gesamtvolumens! V(gesamt) = ⅓ · π · 6² · 9 ≈ 339,3 m³. V(Wasser) ≈ 42,4 m³ ≈ ⅛ des Gesamtvolumens, da das Volumen mit der dritten Potenz skaliert.',
    tags: ['kegel', 'wasserstand', 'sachkontext', 'proportionalität'],
  },

  // ─── PREMIUM UPGRADE: 9 neue Übungen ────────────────────────────

  {
    id: 'koerp-basis-006', topicId: '10-koerper', type: 'drag-match', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Ordne jedem Körper die richtige Volumenformel zu.',
      pairs: [
        { id: 'a', left: 'Kugel', right: '$V = \\frac{4}{3} \\pi r^3$' },
        { id: 'b', left: 'Kegel', right: '$V = \\frac{1}{3} \\pi r^2 h$' },
        { id: 'c', left: 'Zylinder', right: '$V = \\pi r^2 h$' },
        { id: 'd', left: 'Pyramide', right: '$V = \\frac{1}{3} G \\cdot h$' },
      ],
    },
    hintKeys: ['Kegel und Pyramide haben den Faktor 1/3, Zylinder nicht.'],
    solutionKey: 'Kugel: 4/3πr³, Kegel: 1/3πr²h, Zylinder: πr²h, Pyramide: 1/3·G·h.',
    tags: ['drag-match', 'volumenformeln'],
  },
  {
    id: 'koerp-basis-007', topicId: '10-koerper', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 2,
    data: {
      questionText: 'Wie viele Flächen hat eine quadratische Pyramide?',
      options: [
        { id: 'a', text: '4 (nur die Dreiecke)', correct: false },
        { id: 'b', text: '5 (1 Quadrat + 4 Dreiecke)', correct: true },
        { id: 'c', text: '6 (wie ein Würfel)', correct: false },
      ],
    },
    hintKeys: ['Die Grundfläche zählt auch als Fläche!'],
    solutionKey: '5 Flächen: 1 quadratische Grundfläche + 4 dreieckige Seitenflächen.',
    tags: ['pyramide', 'flaechen'],
  },
  {
    id: 'koerp-standard-006', topicId: '10-koerper', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 5,
    contextKey: 'Eistüte',
    data: {
      questionText: 'Eine Eistüte hat die Form eines Kegels mit r = 3 cm und h = 12 cm. Berechne das Volumen.',
      steps: [
        { instruction: 'Welche Formel brauchst du?', type: 'multiple-choice',
          options: [{ id: 'a', text: '$V = \\frac{1}{3} \\pi r^2 h$' }, { id: 'b', text: '$V = \\pi r^2 h$' }, { id: 'c', text: '$V = \\frac{4}{3} \\pi r^3$' }],
          correctId: 'a', showAnswer: 'Kegel: $V = \\frac{1}{3} \\pi r^2 h$' },
        { instruction: 'Setze ein: $V = \\frac{1}{3} \\cdot \\pi \\cdot 3^2 \\cdot 12$. Berechne $r^2 \\cdot h$ = ?', type: 'numeric-input',
          expected: 108, tolerance: 0.1, showAnswer: '$3^2 \\cdot 12 = 9 \\cdot 12 = 108$' },
        { instruction: '$V = \\frac{1}{3} \\cdot \\pi \\cdot 108 \\approx$ ? (auf 1 Dezimale)', type: 'numeric-input',
          expected: 113.1, tolerance: 0.2, showAnswer: '$V = 36\\pi \\approx 113{,}1$ cm³' },
      ],
    },
    hintKeys: ['Eistüte = Kegel. Vergiss den Faktor 1/3 nicht!'],
    solutionKey: '$V = \\frac{1}{3} \\pi \\cdot 9 \\cdot 12 = 36\\pi \\approx 113{,}1$ cm³.',
    tags: ['step-solver', 'kegel', 'sachkontext'],
  },
  {
    id: 'koerp-standard-007', topicId: '10-koerper', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 12, timeEstimate: 6,
    contextKey: 'Fußball',
    data: {
      questionText: 'Ein Fußball hat einen Umfang von 69 cm. Berechne Radius und Volumen.',
      steps: [
        { instruction: '$U = 2\\pi r$. Berechne $r = \\frac{U}{2\\pi} = \\frac{69}{2\\pi}$ ≈ ? (auf 2 Dezimalen)', type: 'numeric-input',
          expected: 10.98, tolerance: 0.05, showAnswer: '$r \\approx 10{,}98$ cm' },
        { instruction: '$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi \\cdot 10{,}98^3$ ≈ ? (auf ganze cm³)', type: 'numeric-input',
          expected: 5542, tolerance: 50, showAnswer: '$V \\approx 5542$ cm³ ≈ 5,5 Liter' },
      ],
    },
    hintKeys: ['Umfang → Radius: $r = U/(2\\pi)$.', 'Dann Kugelvolumen: $V = 4/3 \\cdot \\pi \\cdot r^3$.'],
    solutionKey: '$r \\approx 10{,}98$ cm. $V = \\frac{4}{3}\\pi \\cdot 10{,}98^3 \\approx 5542$ cm³.',
    tags: ['step-solver', 'kugel', 'sachkontext', 'fussball'],
  },
  {
    id: 'koerp-standard-008', topicId: '10-koerper', type: 'error-analysis', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Finde den Fehler bei der Volumenberechnung eines Kegels (r = 5, h = 9).',
      steps: [
        { content: 'V = π · r² · h', hasError: true, errorExplanation: 'Fehler: Beim Kegel fehlt der Faktor 1/3. Richtig: V = 1/3 · π · r² · h.' },
        { content: '= π · 25 · 9 = 225π ≈ 706,9', hasError: true, errorExplanation: 'Folgefehler. Richtig: V = 1/3 · 225π = 75π ≈ 235,6.' },
      ],
    },
    hintKeys: ['Ein Kegel hat nur 1/3 des Volumens eines Zylinders mit gleicher Grundfläche und Höhe.'],
    solutionKey: 'V(Kegel) = 1/3 · π · 5² · 9 = 75π ≈ 235,6. (Nicht 225π!)',
    tags: ['fehleranalyse', 'kegel', 'faktor-vergessen'],
  },
  {
    id: 'koerp-erweitert-006', topicId: '10-koerper', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 15, timeEstimate: 6,
    contextKey: 'Wasserturm',
    data: {
      questionText: 'Ein Wasserturm besteht aus einem Zylinder (h = 8 m, r = 3 m) mit einer Halbkugel oben drauf. Berechne das Gesamtvolumen (auf 1 Dezimale, in m³).',
      correctValue: 282.7, tolerance: 1,
    },
    hintKeys: ['V(Zylinder) = πr²h. V(Halbkugel) = 2/3 · πr³.', 'V(gesamt) = πr²h + 2/3πr³ = π·9·8 + 2/3·π·27'],
    solutionKey: 'V = π·9·8 + 2/3·π·27 = 72π + 18π = 90π ≈ 282,7 m³.',
    tags: ['zusammengesetzter-koerper', 'zylinder', 'halbkugel'],
  },
  {
    id: 'koerp-erweitert-007', topicId: '10-koerper', type: 'drag-match', diffLevel: 'erweitert',
    competencies: ['kommunikation'], points: 12, timeEstimate: 4,
    data: {
      questionText: 'Ordne jeden Alltagsgegenstand dem passenden geometrischen Körper zu.',
      pairs: [
        { id: 'a', left: 'Konservendose', right: 'Zylinder' },
        { id: 'b', left: 'Kirchendach', right: 'Pyramide' },
        { id: 'c', left: 'Globus', right: 'Kugel' },
        { id: 'd', left: 'Trichter', right: 'Kegel' },
      ],
    },
    hintKeys: ['Überlege: Welche Form hat die Grundfläche, und wie sieht die Seitenansicht aus?'],
    solutionKey: 'Dose = Zylinder, Kirchendach = Pyramide, Globus = Kugel, Trichter = Kegel.',
    tags: ['drag-match', 'alltagsgegenstaende'],
  },
  {
    id: 'koerp-ea-001', topicId: '10-koerper', type: 'step-solver', diffLevel: 'ea',
    competencies: ['kreativität', 'kritisches-denken'], points: 20, timeEstimate: 8,
    contextKey: 'Zeltdach — Pyramide',
    data: {
      questionText: 'Ein pyramidenförmiges Zeltdach hat eine Grundfläche von 6 m × 6 m und eine Höhe von 4 m. Berechne Volumen und Mantelfläche.',
      steps: [
        { instruction: 'V = 1/3 · G · h = 1/3 · 36 · 4 = ?', type: 'numeric-input',
          expected: 48, tolerance: 0.1, showAnswer: 'V = 1/3 · 36 · 4 = 48 m³' },
        { instruction: 'Seitenhöhe $h_s$: rechtwinkliges Dreieck mit Kathete 3 m (halbe Grundseite) und Höhe 4 m. $h_s = \\sqrt{3^2 + 4^2}$ = ?', type: 'numeric-input',
          expected: 5, tolerance: 0.01, showAnswer: '$h_s = \\sqrt{9 + 16} = 5$ m' },
        { instruction: 'Mantelfläche = 4 · (1/2 · Grundseite · $h_s$) = 4 · (1/2 · 6 · 5) = ?', type: 'numeric-input',
          expected: 60, tolerance: 0.1, showAnswer: 'M = 4 · 15 = 60 m²' },
      ],
    },
    hintKeys: ['Für die Seitenhöhe brauchst du Pythagoras!', 'Jede Seitenfläche ist ein Dreieck mit A = 1/2 · a · hₛ.'],
    solutionKey: 'V = 48 m³. Seitenhöhe = 5 m (Pythagoras). Mantelfläche = 60 m².',
    tags: ['step-solver', 'pyramide', 'pythagoras', 'ea'],
  },
  {
    id: 'koerp-ea-002', topicId: '10-koerper', type: 'multiple-choice', diffLevel: 'ea',
    competencies: ['kritisches-denken'], points: 20, timeEstimate: 4,
    data: {
      questionText: 'Verdoppelt man den Radius einer Kugel, wie ändert sich das Volumen?',
      options: [
        { id: 'a', text: 'Es verdoppelt sich (×2).', correct: false },
        { id: 'b', text: 'Es vervierfacht sich (×4).', correct: false },
        { id: 'c', text: 'Es verachtfacht sich (×8).', correct: true },
        { id: 'd', text: 'Es versechzehnfacht sich (×16).', correct: false },
      ],
    },
    hintKeys: ['$V = \\frac{4}{3}\\pi r^3$. Ersetze r durch 2r und vereinfache.'],
    solutionKey: '$V(2r) = \\frac{4}{3}\\pi (2r)^3 = \\frac{4}{3}\\pi \\cdot 8r^3 = 8 \\cdot V(r)$. Das Volumen wächst mit der dritten Potenz!',
    tags: ['skalierung', 'dritte-potenz', 'ea'],
  },
];
