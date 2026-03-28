export const exercises = [
  // ─── BASIS (AFB I) ─────────────────────────────────────────────────────────

  {
    id: 'aehn-basis-001',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 2,
    data: {
      questionText:
        'Zwei Dreiecke sind aehnlich. Die Seiten des kleineren Dreiecks sind 4 cm, 6 cm und 8 cm lang. Die entsprechenden Seiten des groesseren Dreiecks sind 6 cm, 9 cm und 12 cm lang. Wie gross ist der Aehnlichkeitsfaktor k (gross zu klein)?',
      correctValue: 1.5,
      tolerance: 0.01,
    },
    hintKeys: [
      'k = entsprechende Seite groesseres Dreieck / entsprechende Seite kleineres Dreieck.',
      'Berechne z. B. 6 cm ÷ 4 cm.',
    ],
    solutionKey:
      'k = 6/4 = 9/6 = 12/8 = 1,5. Der Aehnlichkeitsfaktor betraegt k = 1,5.',
    tags: ['aehnlichkeitsfaktor', 'dreiecke'],
  },

  {
    id: 'aehn-basis-002',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Strahlensatz: Von einem Punkt S verlaufen zwei Strahlen. Auf dem ersten Strahl liegen A (SA = 3 cm) und B (SB = 9 cm). Auf dem zweiten Strahl liegen C (SC = 4 cm) und D. AB || CD. Berechne SD in cm.',
      correctValue: 12,
      tolerance: 0.05,
      unit: 'cm',
    },
    hintKeys: [
      'Strahlensatz: SA/SB = SC/SD.',
      '3/9 = 4/SD → SD = 9 · 4 / 3',
    ],
    solutionKey:
      'SA/SB = SC/SD → 3/9 = 4/SD → SD = 9 · 4 / 3 = 12 cm.',
    tags: ['strahlensatz', 'fehlende-strecke'],
  },

  {
    id: 'aehn-basis-003',
    topicId: '10-aehnlichkeit',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Zwei Quadrate haben die Seitenlaengen 5 cm und 5 cm. Welche Aussage trifft zu?',
      options: [
        { id: 'a', text: 'Sie sind kongruent (deckungsgleich).', correct: true },
        { id: 'b', text: 'Sie sind aehnlich, aber nicht kongruent.', correct: false },
        { id: 'c', text: 'Sie sind weder aehnlich noch kongruent.', correct: false },
        { id: 'd', text: 'Sie sind aehnlich und kongruent, weil k = 1.', correct: false },
      ],
    },
    hintKeys: [
      'Kongruent bedeutet: gleiche Form UND gleiche Groesse.',
      'Aehnlich bedeutet: gleiche Form, aber Groesse kann verschieden sein.',
      'Kongruenz ist ein Spezialfall der Aehnlichkeit (k = 1).',
    ],
    solutionKey:
      'Beide Quadrate haben Seitenlaenge 5 cm, also k = 1. Gleiche Form und gleiche Groesse → kongruent. Antwort a) ist korrekt. (d) ist zwar mathematisch auch richtig, beschreibt den Begriff aber nicht vollstaendig als kongruent.)',
    tags: ['kongruenz', 'aehnlichkeit', 'begriffe'],
  },

  {
    id: 'aehn-basis-004',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    contextKey: 'karte',
    data: {
      questionText:
        'Auf einer Karte mit dem Massstab 1 : 50 000 misst die Strecke zwischen zwei Ortschaften 6 cm. Wie gross ist die tatsaechliche Entfernung in km?',
      correctValue: 3,
      tolerance: 0.01,
      unit: 'km',
    },
    hintKeys: [
      'Massstab 1 : 50 000 bedeutet: 1 cm auf der Karte entspricht 50 000 cm in der Realitaet.',
      'Echte Strecke = Kartenstrecke × Massstabszahl. Dann Einheit umrechnen (100 cm = 1 m, 1000 m = 1 km).',
    ],
    solutionKey:
      '6 cm × 50 000 = 300 000 cm = 3000 m = 3 km.',
    tags: ['massstab', 'karte', 'sachkontext'],
  },

  // ─── STANDARD (AFB II) ─────────────────────────────────────────────────────

  {
    id: 'aehn-standard-001',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 8,
    timeEstimate: 5,
    data: {
      questionText:
        'Strahlensatz (1. Anwendung): Von Punkt S aus verlaufen zwei Strahlen. Auf einem Strahl: SA = 5 cm, SB = 15 cm. Auf dem anderen Strahl: SC = 7 cm. AB || CD. Berechne die Strecke CD in cm.',
      correctValue: 14,
      tolerance: 0.05,
      unit: 'cm',
    },
    hintKeys: [
      '1. Strahlensatz: SA/SB = AC/BD (Abschnitte auf den Strahlen) oder alternativ SA/AB = SC/CD.',
      'AC = SB - SA = 10 cm. BD = SD - SB fehlt – nutze stattdessen: SA/SB = SC/SD.',
      'SA/SB = SC/SD → 5/15 = 7/SD → SD = 21 cm → CD = SD - SC = 21 - 7 = 14 cm.',
    ],
    solutionKey:
      'SA/SB = SC/SD → 5/15 = 7/SD → SD = 15 · 7 / 5 = 21 cm. CD = SD - SC = 21 - 7 = 14 cm.',
    tags: ['strahlensatz', 'abschnitte', 'standard'],
  },

  {
    id: 'aehn-standard-002',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 8,
    timeEstimate: 5,
    data: {
      questionText:
        'Strahlensatz (2. Anwendung): In einem Dreieck ABC wird die Seite BC durch eine Parallele DE (D auf AB, E auf AC) geteilt. Es gilt AD = 4 cm, DB = 6 cm und DE = 5 cm. Berechne BC in cm.',
      correctValue: 12.5,
      tolerance: 0.05,
      unit: 'cm',
    },
    hintKeys: [
      'AB = AD + DB = 4 + 6 = 10 cm.',
      'Strahlensatz: AD/AB = DE/BC → 4/10 = 5/BC.',
    ],
    solutionKey:
      'AB = 4 + 6 = 10 cm. AD/AB = DE/BC → 4/10 = 5/BC → BC = 10 · 5 / 4 = 12,5 cm.',
    tags: ['strahlensatz', 'dreieck', 'parallele'],
  },

  {
    id: 'aehn-standard-003',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 8,
    timeEstimate: 5,
    data: {
      questionText:
        'Flaechenverhaeltnis aehnlicher Figuren: Zwei aehnliche Dreiecke haben den Aehnlichkeitsfaktor k = 3. Das kleinere Dreieck hat eine Flaeche von 8 cm². Wie gross ist die Flaeche des groesseren Dreiecks in cm²?',
      correctValue: 72,
      tolerance: 0.1,
      unit: 'cm²',
    },
    hintKeys: [
      'Bei aehnlichen Figuren gilt: Flaechenverhaeltnis = k².',
      'A_gross = k² · A_klein = 3² · 8 cm².',
    ],
    solutionKey:
      'A_gross = k² · A_klein = 3² · 8 = 9 · 8 = 72 cm².',
    tags: ['flaechenverhaeltnis', 'aehnlichkeitsfaktor', 'k-quadrat'],
  },

  {
    id: 'aehn-standard-004',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 8,
    timeEstimate: 5,
    data: {
      questionText:
        'Volumenverhaeltnis aehnlicher Koerper: Zwei aehnliche Zylinder haben den Aehnlichkeitsfaktor k = 2. Der kleinere Zylinder hat ein Volumen von 50 cm³. Wie gross ist das Volumen des groesseren Zylinders in cm³?',
      correctValue: 400,
      tolerance: 0.5,
      unit: 'cm³',
    },
    hintKeys: [
      'Bei aehnlichen Koerpern gilt: Volumenverhaeltnis = k³.',
      'V_gross = k³ · V_klein = 2³ · 50 cm³.',
    ],
    solutionKey:
      'V_gross = k³ · V_klein = 2³ · 50 = 8 · 50 = 400 cm³.',
    tags: ['volumenverhaeltnis', 'aehnlichkeitsfaktor', 'k-hoch-drei'],
  },

  // ─── ERWEITERT (AFB III) ───────────────────────────────────────────────────

  {
    id: 'aehn-erweitert-001',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 12,
    timeEstimate: 8,
    contextKey: 'baum-schatten',
    data: {
      questionText:
        'Baumhoehe bestimmen: Ein 1,80 m grosser Mensch wirft bei Sonnenschein einen Schatten von 2,40 m. Zur selben Zeit wirft ein Baum einen Schatten von 16 m. Wie hoch ist der Baum in m?',
      correctValue: 12,
      tolerance: 0.05,
      unit: 'm',
    },
    hintKeys: [
      'Mensch und Baum bilden aehnliche rechtwinklige Dreiecke (Sonne ist sehr weit entfernt, parallele Strahlen).',
      'Verhaeltnis: Koerpergroesse / Schattенlaenge ist fuer beide gleich.',
      '1,80 / 2,40 = h_Baum / 16',
    ],
    solutionKey:
      '1,80 / 2,40 = h / 16 → h = 16 · 1,80 / 2,40 = 28,80 / 2,40 = 12 m. Der Baum ist 12 m hoch.',
    tags: ['sachkontext', 'schatten', 'strahlensatz', 'anwendung'],
  },

  {
    id: 'aehn-erweitert-002',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'],
    points: 12,
    timeEstimate: 10,
    contextKey: 'modellbau',
    data: {
      questionText:
        'Modellbau: Ein Flugzeugmodell wird im Massstab 1 : 72 gebaut. Das echte Flugzeug hat eine Fluegelfläche von 260 m². Wie gross ist die Fluegelfläche des Modells in cm²? (Runde auf ganze cm².)',
      correctValue: 501,
      tolerance: 1,
      unit: 'cm²',
    },
    hintKeys: [
      'Massstab 1 : 72 → Aehnlichkeitsfaktor k = 1/72.',
      'Flaechenverhaeltnis = k² = (1/72)².',
      'A_Modell = A_echt · k² = 260 m² · (1/72)². Einheit umrechnen: 1 m² = 10 000 cm².',
    ],
    solutionKey:
      'A_Modell = 260 m² · (1/72)² = 260 / 5184 m² ≈ 0,05015 m² = 501,5 cm² ≈ 501 cm².',
    tags: ['massstab', 'modellbau', 'flaechenverhaeltnis', 'sachkontext'],
  },

  {
    id: 'aehn-erweitert-003',
    topicId: '10-aehnlichkeit',
    type: 'error-analysis',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 12,
    timeEstimate: 8,
    data: {
      questionText:
        'Fehleranalyse: Jonas loest folgende Aufgabe: "Von Punkt S aus verlaufen zwei Strahlen. SA = 4 cm, AB = 6 cm, SC = 3 cm, AB || CD. Berechne CD." Analysiere seine Loesung und finde den Fehler.',
      steps: [
        {
          content: 'SB = SA + AB = 4 + 6 = 10 cm',
          hasError: false,
        },
        {
          content: 'Strahlensatz: SA/AB = SC/CD',
          hasError: true,
          errorExplanation:
            'Falsch aufgestellt! Der Strahlensatz verbindet Gesamtstrecken vom Scheitel, nicht einzelne Abschnitte untereinander. Korrekt: SA/SB = SC/SD, also 4/10 = 3/SD.',
        },
        {
          content: 'CD = AB · SC / SA = 6 · 3 / 4 = 4,5 cm',
          hasError: true,
          errorExplanation:
            'Falsch, weil der Ansatz in Schritt 2 fehlerhaft war. Korrekt: SD = SB · SC / SA = 10 · 3 / 4 = 7,5 cm. CD = SD - SC = 7,5 - 3 = 4,5 cm. (Zufaellig gleiches Ergebnis, aber falscher Rechenweg!)',
        },
      ],
    },
    hintKeys: [
      'Der Strahlensatz lautet: SA/SB = SC/SD (Gesamtstrecken vom Scheitel S).',
      'Niemals Abschnitt durch Abschnitt vergleichen (SA/AB ≠ SC/CD).',
    ],
    solutionKey:
      'Schritt 2 ist fehlerhaft: Korrekt ist SA/SB = SC/SD, also 4/10 = 3/SD → SD = 7,5 cm → CD = 7,5 - 3 = 4,5 cm. Das Ergebnis ist hier zufaellig gleich, der Rechenweg war aber falsch.',
    tags: ['fehleranalyse', 'strahlensatz', 'typischer-fehler'],
  },

  {
    id: 'aehn-erweitert-004',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'],
    points: 12,
    timeEstimate: 10,
    contextKey: 'fotovergroesserung',
    data: {
      questionText:
        'Fotovergroesserung: Ein Originalfoto hat die Abmessungen 9 cm × 13 cm. Es soll so vergroessert werden, dass die laengere Seite 39 cm betraegt. Wie lang ist dann die kuerzere Seite des vergroesserten Fotos in cm?',
      correctValue: 27,
      tolerance: 0.05,
      unit: 'cm',
    },
    hintKeys: [
      'Aehnliche Rechtecke: Alle entsprechenden Seiten werden mit demselben Faktor k multipliziert.',
      'k = 39 / 13 = 3. Dann: kuerzere Seite = 9 · k.',
    ],
    solutionKey:
      'Aehnlichkeitsfaktor: k = 39/13 = 3. Kuerzere Seite = 9 · 3 = 27 cm. Das vergroesserte Foto ist 27 cm × 39 cm.',
    tags: ['foto', 'sachkontext', 'aehnliche-rechtecke', 'massstab'],
  },
];
