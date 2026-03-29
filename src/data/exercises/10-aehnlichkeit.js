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

  // ─── BASIS (AFB I) — neu ───────────────────────────────────────────────────

  {
    id: 'aehn-basis-005',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    contextKey: 'modellbau',
    data: {
      questionText:
        'Modell-Massstab: Ein Architekturmodell wird im Massstab $1 : 500$ gebaut. Das echte Gebaeude ist $12{,}0\\,\\text{m}$ hoch. Wie hoch ist das Gebaeudemodell in cm?',
      correctValue: 2.4,
      tolerance: 0.05,
      unit: 'cm',
    },
    hintKeys: [
      'Massstab $1 : 500$ bedeutet: $1\\,\\text{cm}$ im Modell entspricht $500\\,\\text{cm}$ in der Realitaet.',
      'Modellhoehe $= \\dfrac{\\text{echte Hoehe}}{500}$. Rechne zuerst $12{,}0\\,\\text{m}$ in cm um.',
    ],
    solutionKey:
      '$12{,}0\\,\\text{m} = 1200\\,\\text{cm}$. Modellhoehe $= \\dfrac{1200}{500} = 2{,}4\\,\\text{cm}$.',
    tags: ['massstab', 'modellbau', 'sachkontext', 'einheitenumrechnung'],
  },

  {
    id: 'aehn-basis-006',
    topicId: '10-aehnlichkeit',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Welche Aussagen treffen auf zwei aehnliche Dreiecke zu? (Waehle alle richtigen Antworten.)',
      options: [
        {
          id: 'a',
          text: 'Alle entsprechenden Winkel sind gleich gross.',
          correct: true,
        },
        {
          id: 'b',
          text: 'Alle entsprechenden Seiten sind gleich lang.',
          correct: false,
        },
        {
          id: 'c',
          text: 'Die Verhaeltnisse entsprechender Seiten sind alle gleich (proportional).',
          correct: true,
        },
        {
          id: 'd',
          text: 'Die Dreiecke muessen dieselbe Flaeche haben.',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Aehnlichkeit bedeutet: gleiche Form, aber nicht zwingend gleiche Groesse.',
      'Pruefe jede Aussage einzeln: Geht es um Winkel oder Seiten? Exakt gleich oder nur proportional?',
    ],
    solutionKey:
      'Aehnliche Dreiecke haben (a) gleiche Winkel und (c) proportionale Seiten. Die Seiten muessen NICHT gleich lang sein (b falsch) und die Flaechen koennen verschieden sein (d falsch).',
    tags: ['aehnlichkeit', 'dreiecke', 'begriffe', 'winkel', 'proportional'],
  },

  // ─── STANDARD (AFB II) — neu ───────────────────────────────────────────────

  {
    id: 'aehn-standard-005',
    topicId: '10-aehnlichkeit',
    type: 'step-solver',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 8,
    timeEstimate: 7,
    contextKey: 'schatten',
    data: {
      questionText:
        'Baumhoehe per Schattenmessung: An einem sonnigen Tag wirft eine $1{,}70\\,\\text{m}$ grosse Person einen Schatten von $2{,}50\\,\\text{m}$ Laenge. Zur gleichen Zeit wirft ein nahe stehender Baum einen Schatten von $8{,}00\\,\\text{m}$. Wie hoch ist der Baum?',
      steps: [
        {
          instruction:
            'Stelle die Strahlensatz-Proportion auf. Person und Baum bilden aehnliche Dreiecke. Welche Proportion ist korrekt?',
          type: 'multiple-choice',
          options: [
            {
              id: 'a',
              text: '$\\dfrac{1{,}70}{2{,}50} = \\dfrac{h}{8{,}00}$',
            },
            {
              id: 'b',
              text: '$\\dfrac{1{,}70}{h} = \\dfrac{8{,}00}{2{,}50}$',
            },
            {
              id: 'c',
              text: '$\\dfrac{2{,}50}{8{,}00} = \\dfrac{h}{1{,}70}$',
            },
          ],
          correctId: 'a',
        },
        {
          instruction:
            'Loesche die Gleichung nach $h$ auf und berechne die Baumhoehe in Metern.',
          type: 'numeric',
          expected: 5.44,
          tolerance: 0.05,
          showAnswer: true,
        },
      ],
    },
    hintKeys: [
      'Gleichzeitig = gleicher Sonnenwinkel → aehnliche rechtwinklige Dreiecke.',
      'Proportion: $\\dfrac{\\text{Koerperhoehe}}{\\text{Schattенlaenge}} = \\dfrac{\\text{Baumhoehe}}{\\text{Baumschatten}}$.',
      '$h = \\dfrac{1{,}70 \\cdot 8{,}00}{2{,}50}$',
    ],
    solutionKey:
      '$\\dfrac{1{,}70}{2{,}50} = \\dfrac{h}{8{,}00} \\Rightarrow h = \\dfrac{1{,}70 \\cdot 8{,}00}{2{,}50} = \\dfrac{13{,}6}{2{,}5} = 5{,}44\\,\\text{m}$. Der Baum ist $5{,}44\\,\\text{m}$ hoch.',
    tags: ['strahlensatz', 'schatten', 'sachkontext', 'step-solver'],
  },

  {
    id: 'aehn-standard-006',
    topicId: '10-aehnlichkeit',
    type: 'drag-match',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 8,
    timeEstimate: 6,
    data: {
      questionText:
        'Aehnliche Dreiecke erkennen: Ordne jedem Dreieck das aehnliche Partnerdreiek zu. Achte auf proportionale Seiten.',
      pairs: [
        {
          id: '1',
          left: 'Dreieck A: Seiten $3\\,\\text{cm}$, $4\\,\\text{cm}$, $5\\,\\text{cm}$',
          right: 'Dreieck P: Seiten $6\\,\\text{cm}$, $8\\,\\text{cm}$, $10\\,\\text{cm}$ $(k=2)$',
        },
        {
          id: '2',
          left: 'Dreieck B: Seiten $5\\,\\text{cm}$, $12\\,\\text{cm}$, $13\\,\\text{cm}$',
          right: 'Dreieck Q: Seiten $10\\,\\text{cm}$, $24\\,\\text{cm}$, $26\\,\\text{cm}$ $(k=2)$',
        },
        {
          id: '3',
          left: 'Dreieck C: Seiten $8\\,\\text{cm}$, $15\\,\\text{cm}$, $17\\,\\text{cm}$',
          right: 'Dreieck R: Seiten $4\\,\\text{cm}$, $7{,}5\\,\\text{cm}$, $8{,}5\\,\\text{cm}$ $(k=0{,}5)$',
        },
        {
          id: '4',
          left: 'Dreieck D: Seiten $9\\,\\text{cm}$, $12\\,\\text{cm}$, $15\\,\\text{cm}$',
          right: 'Dreieck S: Seiten $3\\,\\text{cm}$, $4\\,\\text{cm}$, $5\\,\\text{cm}$ $(k=\\tfrac{1}{3})$',
        },
      ],
    },
    hintKeys: [
      'Pruefe, ob das Verhaeltnis aller drei Seiten gleich ist: $\\dfrac{a_2}{a_1} = \\dfrac{b_2}{b_1} = \\dfrac{c_2}{c_1}$.',
      'Bekannte Pythagoraische Tripel: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$.',
    ],
    solutionKey:
      'A–P $(k=2)$, B–Q $(k=2)$, C–R $(k=0{,}5)$, D–S $(k=\\tfrac{1}{3})$. Alle Seitenverhaeltnisse sind konstant.',
    tags: ['aehnliche-dreiecke', 'proportionale-seiten', 'drag-match', 'pythagoraeische-tripel'],
  },

  {
    id: 'aehn-standard-007',
    topicId: '10-aehnlichkeit',
    type: 'error-analysis',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 8,
    timeEstimate: 6,
    data: {
      questionText:
        'Fehleranalyse Strahlensatz: Lena loest folgende Aufgabe: "Von Punkt S aus verlaufen zwei Strahlen. $SA = 6\\,\\text{cm}$, $SB = 9\\,\\text{cm}$, $SC = 4\\,\\text{cm}$. $AB \\parallel CD$. Berechne $SD$." Finde den Fehler in Lenas Loesung.',
      steps: [
        {
          content:
            'Strahlensatz anwenden: $\\dfrac{SA}{SC} = \\dfrac{AB}{CD}$, also $\\dfrac{6}{4} = \\dfrac{9}{SD}$',
          hasError: true,
          errorExplanation:
            'Falsche Proportion! Der Strahlensatz verbindet Strecken auf DEMSELBEN Strahl vom Scheitel S. Korrekt: $\\dfrac{SA}{SB} = \\dfrac{SC}{SD}$, also $\\dfrac{6}{9} = \\dfrac{4}{SD}$.',
        },
        {
          content: '$SD = \\dfrac{9 \\cdot 4}{6} = 6\\,\\text{cm}$',
          hasError: true,
          errorExplanation:
            'Falsch, weil Schritt 1 fehlerhaft war. Korrekt: $SD = \\dfrac{SB \\cdot SC}{SA} = \\dfrac{9 \\cdot 4}{6} = 6\\,\\text{cm}$. Hier ist das Ergebnis zufaellig richtig, der Ansatz war aber falsch.',
        },
        {
          content: '$CD = SD - SC = 6 - 4 = 2\\,\\text{cm}$',
          hasError: false,
        },
      ],
    },
    hintKeys: [
      'Erster Strahlensatz: $\\dfrac{SA}{SB} = \\dfrac{SC}{SD}$ — immer Gesamtstrecken vom Scheitel vergleichen.',
      'Niemals Strecken von verschiedenen Strahlen direkt gegenueberstellen.',
    ],
    solutionKey:
      'Schritt 1 ist fehlerhaft: Die richtige Proportion lautet $\\dfrac{SA}{SB} = \\dfrac{SC}{SD}$. Das Ergebnis $SD = 6\\,\\text{cm}$ ist zufaellig korrekt, der Rechenweg aber falsch.',
    tags: ['fehleranalyse', 'strahlensatz', 'typischer-fehler', 'proportion'],
  },

  // ─── ERWEITERT (AFB III) — neu ─────────────────────────────────────────────

  {
    id: 'aehn-erweitert-005',
    topicId: '10-aehnlichkeit',
    type: 'step-solver',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'],
    points: 12,
    timeEstimate: 10,
    contextKey: 'karte',
    data: {
      questionText:
        'Google-Maps-Analyse: Auf einem Screenshot misst die Strecke zwischen zwei Haltestellen auf dem Bildschirm $4{,}2\\,\\text{cm}$. Der eingeblendete Massstabsbalken zeigt: $1{,}5\\,\\text{cm}$ entsprechen $500\\,\\text{m}$ in der Realitaet. Berechne (1) den Massstab der Karte und (2) die tatsaechliche Entfernung zwischen den Haltestellen.',
      steps: [
        {
          instruction:
            'Berechne den Massstab der Karte. $1{,}5\\,\\text{cm}$ entspricht $500\\,\\text{m}$ in der Realitaet. Gib den Massstab als Verhaeltnis $1 : n$ an. Welcher Wert ist $n$?',
          type: 'numeric',
          expected: 33333,
          tolerance: 500,
          showAnswer: true,
        },
        {
          instruction:
            'Berechne die reale Entfernung zwischen den Haltestellen. Die Bildschirmstrecke betraegt $4{,}2\\,\\text{cm}$. Nutze den Massstab aus Schritt 1. Gib die Entfernung in Metern an.',
          type: 'numeric',
          expected: 1400,
          tolerance: 50,
          showAnswer: true,
        },
        {
          instruction:
            'Welche Proportion beschreibt den Rechenweg fuer Schritt 2 korrekt?',
          type: 'multiple-choice',
          options: [
            {
              id: 'a',
              text: '$\\dfrac{1{,}5}{500} = \\dfrac{4{,}2}{d}$, also $d = \\dfrac{4{,}2 \\cdot 500}{1{,}5}\\,\\text{m}$',
            },
            {
              id: 'b',
              text: '$d = 4{,}2 \\cdot 1{,}5 \\cdot 500\\,\\text{m}$',
            },
            {
              id: 'c',
              text: '$d = \\dfrac{500}{4{,}2 \\cdot 1{,}5}\\,\\text{m}$',
            },
          ],
          correctId: 'a',
        },
      ],
    },
    hintKeys: [
      'Massstab: $1\\,\\text{cm}$ auf der Karte entspricht $\\dfrac{500}{1{,}5}\\,\\text{m}$ in der Realitaet.',
      'Reale Entfernung $= $ Kartenlaenge $\\times$ Massstabszahl. Einheiten beachten!',
    ],
    solutionKey:
      '(1) $1{,}5\\,\\text{cm} \\hat{=} 500\\,\\text{m} = 50\\,000\\,\\text{cm} \\Rightarrow 1\\,\\text{cm} \\hat{=} \\dfrac{50000}{1{,}5} \\approx 33\\,333\\,\\text{cm}$, Massstab $\\approx 1 : 33\\,333$. (2) $d = \\dfrac{4{,}2 \\cdot 500}{1{,}5} = 1400\\,\\text{m}$.',
    tags: ['massstab', 'karte', 'google-maps', 'sachkontext', 'step-solver'],
  },

  {
    id: 'aehn-erweitert-006',
    topicId: '10-aehnlichkeit',
    type: 'drag-match',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 12,
    timeEstimate: 8,
    data: {
      questionText:
        'Strahlensatz-Formeln zuordnen: Ordne jeder Strahlensatz-Formel die passende Beschreibung zu.',
      pairs: [
        {
          id: '1',
          left: '$\\dfrac{SA}{SB} = \\dfrac{SC}{SD}$',
          right: 'Erster Strahlensatz: Verhaeltnis der Gesamtstrecken auf beiden Strahlen vom Scheitel S',
        },
        {
          id: '2',
          left: '$\\dfrac{SA}{AB} = \\dfrac{SC}{CD}$',
          right: 'Zweiter Strahlensatz: Verhaeltnis von Gesamtstrecke zu Abschnitt ist auf beiden Strahlen gleich',
        },
        {
          id: '3',
          left: '$\\dfrac{AB}{CD} = \\dfrac{SA}{SC}$',
          right: 'Parallelenstrecken verhalten sich wie die zugehoerigen Gesamtstrecken vom Scheitel',
        },
        {
          id: '4',
          left: '$k = \\dfrac{SB}{SA} = \\dfrac{SD}{SC}$',
          right: 'Aehnlichkeitsfaktor k: Streckungsverhaeltnis vom kleineren zum groesseren Strahl',
        },
      ],
    },
    hintKeys: [
      'Erster Strahlensatz: Gesamtstrecken desselben Strahls stehen im gleichen Verhaeltnis.',
      'Zweiter Strahlensatz: Abschnitte auf parallelen Geraden verhalten sich wie die Strecken vom Scheitel.',
    ],
    solutionKey:
      'Formel 1 = Erster Strahlensatz (Gesamtstrecken). Formel 2 = Zweiter Strahlensatz (Gesamtstrecke zu Abschnitt). Formel 3 = Parallelenstrecken proportional zu Scheitelstrecken. Formel 4 = Aehnlichkeitsfaktor k.',
    tags: ['strahlensatz', 'formeln', 'drag-match', 'erster-zweiter-strahlensatz'],
  },

  {
    id: 'aehn-erweitert-007',
    topicId: '10-aehnlichkeit',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 12,
    timeEstimate: 8,
    data: {
      questionText:
        'Zwei aehnliche Dreiecke haben den Aehnlichkeitsfaktor $k = 1{,}5$ (gross zu klein). Der Umfang des kleineren Dreiecks betraegt $24\\,\\text{cm}$. Berechne den Umfang des groesseren Dreiecks in cm.',
      correctValue: 36,
      tolerance: 0.1,
      unit: 'cm',
    },
    hintKeys: [
      'Bei aehnlichen Figuren verhaelt sich der Umfang genauso wie die Seiten: Umfang-Verhaeltnis $= k$.',
      '$U_{\\text{gross}} = k \\cdot U_{\\text{klein}} = 1{,}5 \\cdot 24\\,\\text{cm}$.',
    ],
    solutionKey:
      '$U_{\\text{gross}} = k \\cdot U_{\\text{klein}} = 1{,}5 \\cdot 24 = 36\\,\\text{cm}$. Der Umfang des groesseren Dreiecks betraegt $36\\,\\text{cm}$.',
    tags: ['umfang', 'aehnlichkeitsfaktor', 'dreiecke', 'linear'],
  },

  // ─── ERWEITERTES ANFORDERUNGSNIVEAU (eA) ──────────────────────────────────

  {
    id: 'aehn-ea-001',
    topicId: '10-aehnlichkeit',
    type: 'step-solver',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'],
    points: 15,
    timeEstimate: 12,
    contextKey: 'fotovergroesserung',
    data: {
      questionText:
        'Foto-Postervergroesserung: Ein digitales Foto hat das Format $10\\,\\text{cm} \\times 15\\,\\text{cm}$. Es soll auf ein Poster mit einer Breite von $60\\,\\text{cm}$ vergroessert werden. Berechne (1) den Vergroesserungsfaktor, (2) die Hoehe des Posters und (3) das Flaechenverhaeltnis von Poster zu Original.',
      steps: [
        {
          instruction:
            'Berechne den Vergroesserungsfaktor $k$. Die Breite wird von $10\\,\\text{cm}$ auf $60\\,\\text{cm}$ vergroessert.',
          type: 'numeric',
          expected: 6,
          tolerance: 0.05,
          showAnswer: true,
        },
        {
          instruction:
            'Berechne die Hoehe des vergroesserten Posters in cm. Die Originalhoehe betraegt $15\\,\\text{cm}$.',
          type: 'numeric',
          expected: 90,
          tolerance: 0.5,
          showAnswer: true,
        },
        {
          instruction:
            'Berechne das Flaechenverhaeltnis $\\dfrac{A_{\\text{Poster}}}{A_{\\text{Original}}}$. Nutze $k^2$.',
          type: 'numeric',
          expected: 36,
          tolerance: 0.1,
          showAnswer: true,
        },
      ],
    },
    hintKeys: [
      '$k = \\dfrac{\\text{neue Breite}}{\\text{alte Breite}} = \\dfrac{60}{10}$.',
      'Alle Laengenmasse werden mit $k$ multipliziert, Flaechenmasse mit $k^2$.',
      '$A_{\\text{Poster}} = 60 \\cdot 90 = 5400\\,\\text{cm}^2$, $A_{\\text{Original}} = 10 \\cdot 15 = 150\\,\\text{cm}^2$.',
    ],
    solutionKey:
      '(1) $k = \\dfrac{60}{10} = 6$. (2) Hoehe $= 15 \\cdot 6 = 90\\,\\text{cm}$. (3) Flaechenverhaeltnis $= k^2 = 36$ (Poster ist 36-mal so gross wie das Original).',
    tags: ['foto', 'sachkontext', 'k-quadrat', 'flaechenverhaeltnis', 'step-solver', 'ea'],
  },

  {
    id: 'aehn-ea-002',
    topicId: '10-aehnlichkeit',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 8,
    data: {
      questionText:
        'Warum ist das Flaechenverhaeltnis aehnlicher Figuren $k^2$ und nicht $k$? Waehle die beste Begruendung.',
      options: [
        {
          id: 'a',
          text: 'Weil Flaechen zweidimensional sind: Laenge UND Breite werden jeweils mit $k$ multipliziert, sodass $A_{\\text{gross}} = (k \\cdot l) \\cdot (k \\cdot b) = k^2 \\cdot l \\cdot b = k^2 \\cdot A_{\\text{klein}}$.',
          correct: true,
        },
        {
          id: 'b',
          text: 'Weil man bei Flaechen immer quadrieren muss — das ist eine Rechenregel fuer Aehnlichkeit.',
          correct: false,
        },
        {
          id: 'c',
          text: 'Weil $k^2$ immer groesser als $k$ ist und Flaechen immer groesser als Laengen sind.',
          correct: false,
        },
        {
          id: 'd',
          text: 'Weil der Umfang ebenfalls mit $k^2$ skaliert.',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Denke an ein Rechteck mit Seiten $l$ und $b$: Was passiert mit jeder Seite bei Aehnlichkeit?',
      'Flaeche $= $ Laenge $\\times$ Breite. Wenn beide Masse mit $k$ multipliziert werden …',
    ],
    solutionKey:
      'Antwort (a): Eine Flaeche ergibt sich aus dem Produkt zweier Laengenmasse. Da beide mit $k$ skaliert werden, ergibt sich $k \\cdot k = k^2$ als Flaechenverhaeltnis. Der Umfang (eindimensional) skaliert mit $k$, das Volumen (dreidimensional) mit $k^3$.',
    tags: ['flaechenverhaeltnis', 'k-quadrat', 'begruendung', 'konzept', 'ea'],
  },
];
