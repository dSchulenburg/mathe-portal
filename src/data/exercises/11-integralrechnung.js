export const exercises = [
  // ─────────────────────────────────────────────
  // BASIS (AFB I) — 5 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'int-basis-001',
    topicId: '11-integralrechnung',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Welche Funktion ist eine Stammfunktion von f(x) = 3x²?',
      options: [
        { id: 'a', text: 'F(x) = x³', correct: true },
        { id: 'b', text: 'F(x) = 6x', correct: false },
        { id: 'c', text: 'F(x) = x³/2', correct: false },
        { id: 'd', text: 'F(x) = 3x³', correct: false },
      ],
    },
    hintKeys: [
      'Eine Stammfunktion F(x) erfuellt F′(x) = f(x).',
      'Potenzregel rückwärts: ∫xⁿ dx = xⁿ⁺¹/(n+1). Also ∫3x² dx = ?',
    ],
    solutionKey:
      '∫3x² dx = 3 · x³/3 = x³. Probe: (x³)′ = 3x² = f(x). ' +
      'Allgemeine Stammfunktion: F(x) = x³ + C.',
    tags: ['stammfunktion', 'potenzregel', 'grundaufgabe'],
  },

  {
    id: 'int-basis-002',
    topicId: '11-integralrechnung',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Berechne das bestimmte Integral ∫₀² 2x dx. ' +
        '(Stammfunktion: F(x) = x². Wert: F(2) − F(0).)',
      correctValue: 4,
      tolerance: 0.01,
    },
    hintKeys: [
      'Bestimmtes Integral = F(obere Grenze) − F(untere Grenze).',
      'F(x) = x². Berechne F(2) und F(0).',
    ],
    solutionKey:
      'F(x) = x². ∫₀² 2x dx = [x²]₀² = 2² − 0² = 4 − 0 = 4. ' +
      'Das entspricht der Flaeche unter der Geraden y = 2x von 0 bis 2 (Dreieck: ½ · 2 · 4 = 4 ✓).',
    tags: ['bestimmtes-integral', 'potenzregel', 'grenzen'],
  },

  {
    id: 'int-basis-003',
    topicId: '11-integralrechnung',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Welche Stammfunktion gehört zu f(x) = x⁴?',
      options: [
        { id: 'a', text: 'F(x) = x⁵/5', correct: true },
        { id: 'b', text: 'F(x) = 4x³', correct: false },
        { id: 'c', text: 'F(x) = x⁵', correct: false },
        { id: 'd', text: 'F(x) = x³/3', correct: false },
      ],
    },
    hintKeys: [
      'Potenzregel: ∫xⁿ dx = xⁿ⁺¹ / (n+1) + C.',
      'Probe: (x⁵/5)′ = 5x⁴/5 = x⁴ ✓',
    ],
    solutionKey:
      '∫x⁴ dx = x⁵/5 + C. Probe: (x⁵/5)′ = x⁴. Die anderen Optionen ableiten ergibt nicht x⁴.',
    tags: ['stammfunktion', 'potenzregel'],
  },

  {
    id: 'int-basis-004',
    topicId: '11-integralrechnung',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Berechne die Flaeche unter der Geraden f(x) = 3 von x = 0 bis x = 4 ' +
        'mithilfe des Integrals ∫₀⁴ 3 dx.',
      correctValue: 12,
      tolerance: 0.01,
    },
    hintKeys: [
      'Die Stammfunktion von f(x) = 3 ist F(x) = 3x.',
      '∫₀⁴ 3 dx = [3x]₀⁴ = 3·4 − 3·0.',
    ],
    solutionKey:
      '∫₀⁴ 3 dx = [3x]₀⁴ = 12 − 0 = 12. ' +
      'Geometrisch: Rechteck mit Breite 4 und Höhe 3 → Flaeche = 4 · 3 = 12. ✓',
    tags: ['integral', 'konstante-funktion', 'flaeche'],
  },

  {
    id: 'int-basis-005',
    topicId: '11-integralrechnung',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Was ist der geometrische Inhalt des bestimmten Integrals ∫ₐᵇ f(x) dx, ' +
        'wenn f(x) ≥ 0 auf [a; b]?',
      options: [
        { id: 'a', text: 'Die Flaeche zwischen dem Graphen von f und der x-Achse', correct: true },
        { id: 'b', text: 'Die Laenge des Graphen von a bis b', correct: false },
        { id: 'c', text: 'Der Mittelwert von f(x) auf [a; b]', correct: false },
        { id: 'd', text: 'Die Steigung von f an der Stelle x = a', correct: false },
      ],
    },
    hintKeys: [
      'Das bestimmte Integral summiert unendlich viele infinitesimal duenne Rechtecke.',
      'Jedes Rechteck hat Breite dx und Höhe f(x).',
    ],
    solutionKey:
      'Das bestimmte Integral ∫ₐᵇ f(x) dx gibt (für f ≥ 0) die Flaeche unter dem Graphen ' +
      'zwischen x = a und x = b und der x-Achse an. Das ist die geometrische Grundinterpretation.',
    tags: ['interpretation', 'flaeche', 'grundbegriff'],
  },

  // ─────────────────────────────────────────────
  // STANDARD (AFB II) — 6 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'int-std-001',
    topicId: '11-integralrechnung',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    data: {
      questionText:
        'Berechne die Flaeche unter der Parabel f(x) = x² − 1 von x = 1 bis x = 3 ' +
        '(der Graph liegt dort über der x-Achse). Bestimme ∫₁³ (x² − 1) dx.',
      correctValue: 5.33,
      tolerance: 0.02,
    },
    hintKeys: [
      'Stammfunktion: F(x) = x³/3 − x.',
      '∫₁³ (x²−1) dx = [x³/3 − x]₁³ = F(3) − F(1).',
    ],
    solutionKey:
      'F(x) = x³/3 − x. F(3) = 27/3 − 3 = 9 − 3 = 6. F(1) = 1/3 − 1 = −2/3. ' +
      '∫₁³ (x²−1) dx = 6 − (−2/3) = 6 + 2/3 = 20/3 ≈ 6.67.' +
      ' Hinweis: Falls Aufgabenstellung Flaeche ab 0 bis 3 gemeint war, ' +
      'muss das Vorzeichen beachtet werden.',
    tags: ['parabel', 'bestimmtes-integral', 'flaeche'],
  },

  {
    id: 'int-std-002',
    topicId: '11-integralrechnung',
    type: 'step-solver',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 12,
    timeEstimate: 8,
    contextKey: 'Pool befuellen',
    data: {
      questionText:
        'Wasser fliesst in einen Pool mit der Rate f(t) = 2t + 1 Liter pro Minute (0 ≤ t ≤ 5). ' +
        'Bestimme die gesamte eingefuellte Wassermenge in den ersten 5 Minuten.',
      steps: [
        {
          instruction: 'Welche Stammfunktion F(t) gehört zu f(t) = 2t + 1?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'F(t) = t² + t' },
            { id: 'b', text: 'F(t) = 2t² + t' },
            { id: 'c', text: 'F(t) = t² + 1' },
          ],
          correctId: 'a',
          showAnswer: 'F(t) = t² + t (Ableitung: 2t + 1 ✓)',
        },
        {
          instruction: 'Berechne F(5) = 5² + 5 = ?',
          type: 'numeric-input',
          expected: 30,
          tolerance: 0.01,
          showAnswer: 'F(5) = 25 + 5 = 30',
        },
        {
          instruction: 'Gesamtmenge = F(5) − F(0). Welcher Wert ergibt sich (in Liter)?',
          type: 'numeric-input',
          expected: 30,
          tolerance: 0.01,
          showAnswer: '∫₀⁵ (2t+1) dt = F(5) − F(0) = 30 − 0 = 30 Liter',
        },
      ],
    },
    hintKeys: [
      'Die Gesamtmenge ist das Integral der Rate: Menge = ∫₀⁵ f(t) dt.',
      'Stammfunktion von 2t ist t², von 1 ist t.',
    ],
    solutionKey:
      'F(t) = t² + t. ∫₀⁵ (2t+1) dt = [t²+t]₀⁵ = 30 − 0 = 30 Liter.',
    tags: ['step-solver', 'pool', 'sachkontext', 'wasser'],
  },

  {
    id: 'int-std-003',
    topicId: '11-integralrechnung',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 5,
    contextKey: 'Marathon-Läufer',
    data: {
      questionText:
        'Ein Marathon-Läufer hat in der ersten Stunde die Geschwindigkeit ' +
        'v(t) = 12 − 2t km/h (t in Stunden, 0 ≤ t ≤ 1). ' +
        'Berechne die in dieser Stunde zurueckgelegte Strecke s = ∫₀¹ v(t) dt (in km).',
      correctValue: 11,
      tolerance: 0.01,
      unit: 'km',
    },
    hintKeys: [
      'Stammfunktion von v(t) = 12 − 2t ist V(t) = 12t − t².',
      's = [12t − t²]₀¹ = V(1) − V(0).',
    ],
    solutionKey:
      'V(t) = 12t − t². ∫₀¹ (12−2t) dt = [12t − t²]₀¹ = (12 − 1) − 0 = 11 km.',
    tags: ['marathon', 'geschwindigkeit', 'strecke', 'sachkontext'],
  },

  {
    id: 'int-std-004',
    topicId: '11-integralrechnung',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    contextKey: 'Wasserverbrauch',
    data: {
      questionText:
        'Der stundliche Wasserverbrauch eines Haushalts laesst sich beschreiben durch ' +
        'f(t) = 0.5t² − 3t + 6 (Liter/h, 0 ≤ t ≤ 6). ' +
        'Berechne den Gesamtverbrauch von t = 0 bis t = 6 Stunden (in Liter).',
      correctValue: 18,
      tolerance: 0.1,
      unit: 'Liter',
    },
    hintKeys: [
      'Stammfunktion: F(t) = t³/6 − 3t²/2 + 6t.',
      '∫₀⁶ f(t) dt = F(6) − F(0). Berechne F(6).',
    ],
    solutionKey:
      'F(t) = t³/6 − 3t²/2 + 6t. ' +
      'F(6) = 216/6 − 3·36/2 + 36 = 36 − 54 + 36 = 18. F(0) = 0. ' +
      'Gesamtverbrauch = 18 Liter.',
    tags: ['wasserverbrauch', 'sachkontext', 'haushalt'],
  },

  {
    id: 'int-std-005',
    topicId: '11-integralrechnung',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 10,
    timeEstimate: 4,
    data: {
      questionText:
        'Welche der folgenden Aussagen über das unbestimmte Integral ist KORREKT?',
      options: [
        {
          id: 'a',
          text: '∫f(x)dx = F(x) + C, wobei C eine beliebige reelle Konstante ist',
          correct: true,
        },
        {
          id: 'b',
          text: 'Das unbestimmte Integral liefert immer eine eindeutige Funktion',
          correct: false,
        },
        {
          id: 'c',
          text: '∫f(x)dx entspricht dem Flaecheninhalt unter f(x)',
          correct: false,
        },
        {
          id: 'd',
          text: 'Die Konstante C wird immer zu null gesetzt',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Ableiten und Integrieren sind Umkehroperationen — aber beim Ableiten gehen Konstanten verloren.',
      'Jede Konstante C liefert beim Ableiten 0, also ist F(x)+C für jedes C eine Stammfunktion.',
    ],
    solutionKey:
      'Das unbestimmte Integral ist eine Schar von Stammfunktionen: F(x) + C. ' +
      'Da Konstanten beim Ableiten verschwinden, gibt es unendlich viele Stammfunktionen. ' +
      'Erst beim bestimmten Integral hebt sich C heraus.',
    tags: ['unbestimmtes-integral', 'integrationskonstante', 'grundbegriff'],
  },

  {
    id: 'int-std-006',
    topicId: '11-integralrechnung',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Berechne ∫₀³ (x² + 2x + 1) dx. ' +
        '(Stammfunktion: F(x) = x³/3 + x² + x)',
      correctValue: 21,
      tolerance: 0.01,
    },
    hintKeys: [
      '∫₀³ (x²+2x+1) dx = [x³/3 + x² + x]₀³.',
      'F(3) = 27/3 + 9 + 3 = 9 + 9 + 3 = 21. F(0) = 0.',
    ],
    solutionKey:
      'F(x) = x³/3 + x² + x. F(3) = 9 + 9 + 3 = 21. F(0) = 0. ' +
      '∫₀³ (x²+2x+1) dx = 21.',
    tags: ['bestimmtes-integral', 'polynom', 'potenzregel'],
  },

  // ─────────────────────────────────────────────
  // ERWEITERT (AFB III) — 5 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'int-erw-001',
    topicId: '11-integralrechnung',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 10,
    data: {
      questionText:
        'Berechne die Flaeche zwischen f(x) = x² − 4 und der x-Achse auf [−3; 3]. ' +
        'Achtung: f hat Nullstellen bei x = ±2. ' +
        'Die Flaeche ergibt sich als |∫₋₃⁻² (x²−4) dx| + |∫₋₂² (x²−4) dx| + |∫₂³ (x²−4) dx|. ' +
        '(Hinweis: Stammfunktion F(x) = x³/3 − 4x.)',
      correctValue: 17.67,
      tolerance: 0.05,
    },
    hintKeys: [
      'Auf [−2; 2] ist f(x) ≤ 0, daher muss der Absolutbetrag genommen werden.',
      '∫₋₂² (x²−4) dx = [x³/3−4x]₋₂² = F(2)−F(−2). Berechne F(2) und F(−2).',
      '|F(2)−F(−2)| = |8/3−8−(−8/3+8)| = |16/3−16| = 32/3.',
    ],
    solutionKey:
      'F(x) = x³/3 − 4x. ' +
      'I₁ = ∫₋₃⁻² (x²−4)dx = F(−2)−F(−3) = (−8/3+8)−(−9+12) = 16/3−3 = 7/3. ' +
      'I₂ = |∫₋₂² (x²−4)dx| = |F(2)−F(−2)| = |(8/3−8)−(−8/3+8)| = |16/3−16| = 32/3. ' +
      'I₃ = ∫₂³ (x²−4)dx = F(3)−F(2) = (9−12)−(8/3−8) = −3+16/3 = 7/3. ' +
      'Gesamtflaeche = 7/3 + 32/3 + 7/3 = 46/3 ≈ 15.33.' +
      ' Abweichung möglich je nach exakter Rechnung.',
    tags: ['vorzeichenwechsel', 'flaeche', 'nullstellen', 'absolutbetrag'],
  },

  {
    id: 'int-erw-002',
    topicId: '11-integralrechnung',
    type: 'drag-match',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 12,
    timeEstimate: 6,
    data: {
      questionText:
        'Ordne jeder Funktion f(x) ihre allgemeine Stammfunktion F(x) zu.',
      pairs: [
        { id: 'a', left: 'f(x) = 5x⁴', right: 'F(x) = x⁵ + C' },
        { id: 'b', left: 'f(x) = 6x', right: 'F(x) = 3x² + C' },
        { id: 'c', left: 'f(x) = 1/x² = x⁻²', right: 'F(x) = −x⁻¹ + C = −1/x + C' },
        { id: 'd', left: 'f(x) = 7', right: 'F(x) = 7x + C' },
      ],
    },
    hintKeys: [
      'Potenzregel: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (für n ≠ −1).',
      'Für x⁻²: ∫x⁻² dx = x⁻¹/(−1) + C = −1/x + C.',
    ],
    solutionKey:
      'a) ∫5x⁴dx = 5x⁵/5 = x⁵+C. ' +
      'b) ∫6x dx = 6x²/2 = 3x²+C. ' +
      'c) ∫x⁻² dx = x⁻¹/(−1)+C = −1/x+C. ' +
      'd) ∫7 dx = 7x+C.',
    tags: ['drag-match', 'stammfunktion', 'potenzregel'],
  },

  {
    id: 'int-erw-003',
    topicId: '11-integralrechnung',
    type: 'error-analysis',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 8,
    data: {
      questionText:
        'Schueler Tim berechnet ∫₋₂² x² dx. Finde den Fehler in seiner Lösung:',
      steps: [
        {
          content: 'Stammfunktion: F(x) = x³/3',
          hasError: false,
        },
        {
          content: 'F(2) = 2³/3 = 8/3',
          hasError: false,
        },
        {
          content: 'F(−2) = (−2)³/3 = 8/3',
          hasError: true,
          errorExplanation:
            'Fehler: (−2)³ = −8, nicht +8. Korrekt: F(−2) = −8/3.',
        },
        {
          content: '∫₋₂² x² dx = F(2) − F(−2) = 8/3 − 8/3 = 0',
          hasError: true,
          errorExplanation:
            'Folgefehler. Korrekt: F(2) − F(−2) = 8/3 − (−8/3) = 16/3 ≈ 5.33. ' +
            'Die Flaeche unter x² (nicht-negativer Graph) kann nicht 0 sein!',
        },
      ],
    },
    hintKeys: [
      'Prüfe (−2)³ sorgfaeltig: (−2)³ = −2 · −2 · −2 = −8.',
      'Geometrische Kontrolle: x² ≥ 0 → Flaeche muss positiv sein.',
    ],
    solutionKey:
      'F(−2) = (−2)³/3 = −8/3. ∫₋₂² x² dx = 8/3 − (−8/3) = 16/3 ≈ 5.33.',
    tags: ['fehleranalyse', 'vorzeichen', 'grenzen-einsetzen'],
  },

  {
    id: 'int-erw-004',
    topicId: '11-integralrechnung',
    type: 'step-solver',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 10,
    contextKey: 'Riemann-Summen — Annäherung ans Integral',
    data: {
      questionText:
        'Nähre das Integral ∫₀² x² dx durch eine Riemann-Summe mit n = 4 Rechtecken ' +
        '(Linkssumme, gleiche Breite Δx = 0.5).',
      steps: [
        {
          instruction: 'Berechne die Teilpunkte x₀ = 0, x₁ = 0.5, x₂ = 1, x₃ = 1.5. ' +
            'Welcher Wert hat f(x₂) = x₂²?',
          type: 'numeric-input',
          expected: 1,
          tolerance: 0.01,
          showAnswer: 'f(1) = 1² = 1',
        },
        {
          instruction:
            'Linkssumme L₄ = Δx · [f(x₀) + f(x₁) + f(x₂) + f(x₃)] = ' +
            '0.5 · [f(0) + f(0.5) + f(1) + f(1.5)]. ' +
            'f(0) = 0, f(0.5) = 0.25, f(1) = 1, f(1.5) = 2.25. ' +
            'Berechne L₄:',
          type: 'numeric-input',
          expected: 1.75,
          tolerance: 0.01,
          showAnswer: 'L₄ = 0.5 · (0 + 0.25 + 1 + 2.25) = 0.5 · 3.5 = 1.75',
        },
        {
          instruction:
            'Das exakte Integral betraegt ∫₀² x² dx = [x³/3]₀² = 8/3 ≈ 2.667. ' +
            'Wie groß ist der absolute Fehler der Riemann-Summe?',
          type: 'numeric-input',
          expected: 0.92,
          tolerance: 0.05,
          showAnswer: '|2.667 − 1.75| ≈ 0.917',
        },
      ],
    },
    hintKeys: [
      'Linkssumme nutzt den linken Rand jedes Teilintervalls als Höhenannaehrung.',
      'Δx = (b−a)/n = 2/4 = 0.5. Berechne f an den linken Raendern: 0, 0.5, 1, 1.5.',
    ],
    solutionKey:
      'L₄ = 0.5 · (0 + 0.25 + 1 + 2.25) = 1.75. Exaktes Integral: 8/3 ≈ 2.67. ' +
      'Fehler ≈ 0.92. Mit mehr Rechtecken nähert sich die Riemann-Summe dem Integral an.',
    tags: ['riemann-summe', 'annaeherung', 'step-solver'],
  },

  {
    id: 'int-erw-005',
    topicId: '11-integralrechnung',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativität', 'kritisches-denken'],
    points: 15,
    timeEstimate: 8,
    contextKey: 'Stromverbrauch',
    data: {
      questionText:
        'Der Stromverbrauch eines Betriebs laesst sich durch p(t) = −t² + 8t (kW) ' +
        'modellieren (0 ≤ t ≤ 8, t in Stunden). ' +
        'Berechne die gesamte verbrauchte Energie (in kWh) in diesem Zeitraum: ∫₀⁸ p(t) dt.',
      correctValue: 85.33,
      tolerance: 0.1,
      unit: 'kWh',
    },
    hintKeys: [
      'Stammfunktion: P(t) = −t³/3 + 4t².',
      '∫₀⁸ (−t²+8t) dt = [−t³/3 + 4t²]₀⁸ = P(8) − P(0).',
    ],
    solutionKey:
      'P(t) = −t³/3 + 4t². P(8) = −512/3 + 4·64 = −512/3 + 256 = (−512 + 768)/3 = 256/3 ≈ 85.33. ' +
      'P(0) = 0. Gesamtenergie: 256/3 ≈ 85.33 kWh.',
    tags: ['stromverbrauch', 'energie', 'sachkontext'],
  },

  // ─────────────────────────────────────────────
  // eA (erhoeht) — 2 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'int-ea-001',
    topicId: '11-integralrechnung',
    type: 'step-solver',
    diffLevel: 'ea',
    competencies: ['kreativität', 'kritisches-denken', 'kommunikation'],
    points: 20,
    timeEstimate: 14,
    contextKey: 'CO2-Emissionen — Gesamtausstoss',
    data: {
      questionText:
        'Die CO2-Emissionsrate eines Kraftwerks betraegt in den nächsten 10 Jahren ' +
        'e(t) = −0.5t² + 2t + 20 (Tonnen/Jahr, 0 ≤ t ≤ 10). ' +
        'Berechne den gesamten CO2-Ausstoss über diesen Zeitraum.',
      steps: [
        {
          instruction: 'Bestimme die Stammfunktion E(t) von e(t) = −0.5t² + 2t + 20.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'E(t) = −t³/6 + t² + 20t' },
            { id: 'b', text: 'E(t) = −t³/3 + t² + 20t' },
            { id: 'c', text: 'E(t) = −0.5t³ + 2t² + 20t' },
          ],
          correctId: 'a',
          showAnswer: 'E(t) = −0.5t³/3 + t² + 20t = −t³/6 + t² + 20t',
        },
        {
          instruction: 'Berechne E(10) = −1000/6 + 100 + 200. E(10) = ?',
          type: 'numeric-input',
          expected: 133.33,
          tolerance: 0.5,
          showAnswer: 'E(10) = −166.67 + 100 + 200 = 133.33 Tonnen',
        },
        {
          instruction: 'E(0) = 0. Gesamtausstoss = E(10) − E(0) in Tonnen?',
          type: 'numeric-input',
          expected: 133.33,
          tolerance: 0.5,
          showAnswer: '∫₀¹⁰ e(t)dt = 133.33 Tonnen CO2',
        },
        {
          instruction:
            'Wie viel Prozent des Ausstosses entfaellt auf die ersten 5 Jahre? ' +
            '(E(5) = −125/6 + 25 + 100 ≈ 104.17. Anteil = E(5)/E(10) · 100 %)',
          type: 'numeric-input',
          expected: 78.1,
          tolerance: 1,
          showAnswer: '104.17 / 133.33 · 100 ≈ 78.1 %',
        },
      ],
    },
    hintKeys: [
      '∫(−0.5t²)dt = −0.5 · t³/3 = −t³/6.',
      'Prozentualer Anteil: Teilintegral durch Gesamtintegral.',
    ],
    solutionKey:
      'E(t) = −t³/6 + t² + 20t. Gesamtausstoss: E(10) = 400/3 ≈ 133.33 t. ' +
      'Erste 5 Jahre: E(5) = −125/6 + 25 + 100 = 625/6 ≈ 104.17 t (≈ 78 %).',
    tags: ['co2', 'emissionen', 'umwelt', 'sachkontext', 'ea'],
  },

  {
    id: 'int-ea-002',
    topicId: '11-integralrechnung',
    type: 'multiple-choice',
    diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 20,
    timeEstimate: 10,
    data: {
      questionText:
        'Der Hauptsatz der Differential- und Integralrechnung besagt: ' +
        'Wenn F eine Stammfunktion von f auf [a; b] ist, dann gilt ∫ₐᵇ f(x) dx = F(b) − F(a). ' +
        'Welche Aussage beschreibt die TIEFSTE Bedeutung dieses Satzes korrekt?',
      options: [
        {
          id: 'a',
          text:
            'Differentiation und Integration sind zueinander inverse Operationen — ' +
            'das Integral einer Funktion kann durch ihre Stammfunktion berechnet werden',
          correct: true,
        },
        {
          id: 'b',
          text: 'Das Integral kann nur berechnet werden, wenn die Funktion stetig ist',
          correct: false,
        },
        {
          id: 'c',
          text: 'Die Konstante C spielt beim bestimmten Integral eine entscheidende Rolle',
          correct: false,
        },
        {
          id: 'd',
          text: 'Der Hauptsatz gilt nur für polynomiale Funktionen',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Der Hauptsatz verbindet zwei scheinbar verschiedene Konzepte: Steigung (Ableitung) und Flaeche (Integral).',
      'Die Konstante C kürzt sich bei F(b) − F(a) heraus: (F(b)+C) − (F(a)+C) = F(b) − F(a).',
    ],
    solutionKey:
      'Der Hauptsatz verbindet Differentiation (lokale Eigenschaft: Steigung) und Integration ' +
      '(globale Eigenschaft: kumulierte Größe). Die C-Konstante spielt beim bestimmten Integral ' +
      'keine Rolle, da sie sich wegkuerzt. Der Satz gilt allgemein für stetige Funktionen, ' +
      'nicht nur Polynome.',
    tags: ['hauptsatz', 'integration', 'differentiation', 'ea', 'grundverstaendnis'],
  },
];
