export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'norm-basis-001', topicId: '12-normalverteilung', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welche der folgenden Beschreibungen passt zur Normalverteilung (Glockenkurve)?',
      options: [
        { id: 'a', text: 'Symmetrisch um den Erwartungswert $\\mu$, mit den meisten Werten nahe dem Zentrum und seltener werdenden Werten zu den Rändern hin.', correct: true },
        { id: 'b', text: 'Alle Werte sind gleichmäßig verteilt, die Kurve ist eine waagerechte Gerade.', correct: false },
        { id: 'c', text: 'Die Kurve steigt von links nach rechts monoton an und fällt dann plötzlich ab.', correct: false },
        { id: 'd', text: 'Nur ganzzahlige Werte sind möglich (diskrete Verteilung).', correct: false },
      ],
    },
    hintKeys: ['Die Normalverteilung ist symmetrisch und glockenförmig. Sie ist eine stetige Verteilung, d. h. auch nicht-ganzzahlige Werte sind möglich.'],
    solutionKey: 'Die Normalverteilung ist glockenförmig und symmetrisch um $\\mu$. Die Fläche unter der Kurve ist 1. Werte nahe $\\mu$ treten am häufigsten auf, Extremwerte sind selten.',
    tags: ['glockenkurve', 'definition', 'erkennen', 'symmetrie'],
  },

  {
    id: 'norm-basis-002', topicId: '12-normalverteilung', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    contextKey: 'IQ-Tests',
    data: {
      questionText: 'IQ-Werte sind normalverteilt mit $\\mu = 100$ und $\\sigma = 15$. Was beschreibt $\\mu$ und $\\sigma$ in diesem Kontext?',
      options: [
        { id: 'a', text: '$\\mu = 100$ ist der Durchschnitts-IQ, $\\sigma = 15$ gibt an, wie stark die IQ-Werte um den Durchschnitt streuen.', correct: true },
        { id: 'b', text: '$\\mu = 100$ ist der Maximal-IQ, $\\sigma = 15$ ist der Minimal-IQ.', correct: false },
        { id: 'c', text: '$\\mu = 100$ und $\\sigma = 15$ sind beide Maximalwerte.', correct: false },
        { id: 'd', text: '$\\sigma = 15$ bedeutet, dass niemand mehr als 15 Punkte vom Mittelwert abweicht.', correct: false },
      ],
    },
    hintKeys: ['$\\mu$ = Erwartungswert (Mittelwert), $\\sigma$ = Standardabweichung (typische Abweichung vom Mittelwert).'],
    solutionKey: '$\\mu = 100$ ist der Mittelwert (Zentrum der Glockenkurve). $\\sigma = 15$ ist die Standardabweichung — sie misst, wie breit oder schmal die Verteilung ist. Ein großes $\\sigma$ → breitere Kurve.',
    tags: ['parameter', 'mu', 'sigma', 'iq', 'ablesen'],
  },

  {
    id: 'norm-basis-003', topicId: '12-normalverteilung', type: 'drag-match', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 8, timeEstimate: 4,
    data: {
      questionText: 'Ordne die Sigma-Bereiche den richtigen Wahrscheinlichkeiten zu (68-95-99,7-Regel).',
      pairs: [
        { id: 'a', left: '$P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma)$', right: 'ca. 68 %' },
        { id: 'b', left: '$P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma)$', right: 'ca. 95 %' },
        { id: 'c', left: '$P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma)$', right: 'ca. 99,7 %' },
        { id: 'd', left: '$P(X > \\mu + 3\\sigma)$', right: 'ca. 0,15 %' },
      ],
    },
    hintKeys: [
      'Merkhilfe: 1-Sigma → 68 %, 2-Sigma → 95 %, 3-Sigma → 99,7 %.',
      'Wegen der Symmetrie gilt: $P(X > \\mu + 3\\sigma) = \\frac{100\\% - 99{,}7\\%}{2} = 0{,}15\\%$.',
    ],
    solutionKey: '68-95-99,7-Regel: Im Bereich $[\\mu \\pm \\sigma]$ liegen 68 %, in $[\\mu \\pm 2\\sigma]$ liegen 95 %, in $[\\mu \\pm 3\\sigma]$ liegen 99,7 % aller Werte. Außerhalb von $3\\sigma$ liegen nur 0,3 % — aufgeteilt auf beide Seiten je 0,15 %.',
    tags: ['68-95-997-regel', 'sigma-regeln', 'drag-match', 'wahrscheinlichkeit'],
  },

  {
    id: 'norm-basis-004', topicId: '12-normalverteilung', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    contextKey: 'Körpergrößen',
    data: {
      questionText: 'Körpergrößen von Frauen sind normalverteilt mit $\\mu = 166$ cm und $\\sigma = 6$ cm. In welchem Bereich liegen nach der 68-%-Regel ca. 68 % aller Körpergrößen? Gib die obere Grenze $\\mu + \\sigma$ in cm an.',
      correctValue: 172,
      tolerance: 0,
      unit: 'cm',
    },
    hintKeys: ['Berechne $\\mu + \\sigma = 166 + 6$.'],
    solutionKey: '$\\mu + \\sigma = 166 + 6 = 172$ cm. Ca. 68 % aller Frauen sind zwischen 160 cm und 172 cm groß ($\\mu \\pm \\sigma = 166 \\pm 6$).',
    tags: ['sigma-regel', 'koerpergroesse', 'sachkontext', 'berechnung'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ──────────────────────────────────────

  {
    id: 'norm-standard-001', topicId: '12-normalverteilung', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 9,
    contextKey: 'IQ-Tests',
    data: {
      questionText: 'IQ-Werte: $\\mu = 100$, $\\sigma = 15$. Berechne den $z$-Wert für einen IQ von 130 und interpretiere das Ergebnis.',
      steps: [
        {
          instruction: 'Wende die Standardisierungsformel an: $z = \\frac{x - \\mu}{\\sigma}$. Setze $x = 130$, $\\mu = 100$, $\\sigma = 15$ ein und berechne $z$.',
          type: 'numeric-input', expected: 2, tolerance: 0.01,
          showAnswer: '$z = \\frac{130 - 100}{15} = \\frac{30}{15} = 2$',
        },
        {
          instruction: 'Was bedeutet $z = 2$ in Worten?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Ein IQ von 130 liegt genau 2 Standardabweichungen über dem Durchschnitt.', correct: true },
            { id: 'b', text: 'Ein IQ von 130 liegt 2 Punkte über dem Durchschnitt.', correct: false },
            { id: 'c', text: 'Nur 2 % der Menschen haben einen höheren IQ.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$z = 2$ bedeutet: der Wert liegt 2 Standardabweichungen über $\\mu$.',
        },
        {
          instruction: 'Mit der 95-%-Regel: Wie viel Prozent der Menschen haben einen IQ von mehr als 130?',
          type: 'numeric-input', expected: 2.5, tolerance: 0.1,
          unit: '%',
          showAnswer: '95 % liegen in $[\\mu \\pm 2\\sigma]$, also 5 % außerhalb. Wegen Symmetrie: 2,5 % über 130.',
        },
      ],
    },
    hintKeys: [
      'Formel: $z = \\frac{x - \\mu}{\\sigma}$.',
      'Der $z$-Wert gibt an, wie viele Standardabweichungen ein Wert vom Mittelwert entfernt ist.',
      'Die 2-Sigma-Regel: 95 % der Werte liegen in $[\\mu - 2\\sigma,\\, \\mu + 2\\sigma]$.',
    ],
    solutionKey: '$z = \\frac{130 - 100}{15} = 2$. Ein IQ von 130 liegt 2 Standardabweichungen über dem Mittelwert. Ca. 2,5 % der Menschen haben einen höheren IQ.',
    tags: ['z-wert', 'standardisierung', 'iq', 'sachkontext', 'step-solver'],
  },

  {
    id: 'norm-standard-002', topicId: '12-normalverteilung', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    contextKey: 'Amazon-Lieferzeiten',
    data: {
      questionText: 'Amazon-Lieferzeiten sind normalverteilt mit $\\mu = 2{,}5$ Tage und $\\sigma = 0{,}5$ Tage. Ein Paket kommt nach $x = 3{,}5$ Tagen. Berechne den $z$-Wert (auf 1 Dezimalstelle).',
      correctValue: 2.0,
      tolerance: 0.05,
    },
    hintKeys: [
      '$z = \\frac{x - \\mu}{\\sigma}$.',
      '$z = \\frac{3{,}5 - 2{,}5}{0{,}5}$.',
    ],
    solutionKey: '$z = \\frac{3{,}5 - 2{,}5}{0{,}5} = \\frac{1{,}0}{0{,}5} = 2{,}0$. Das Paket kam 2 Standardabweichungen später als im Durchschnitt — recht ungewöhnlich.',
    tags: ['z-wert', 'amazon', 'lieferzeiten', 'sachkontext', 'berechnung'],
  },

  {
    id: 'norm-standard-003', topicId: '12-normalverteilung', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Ordne jeden Sigma-Bereich dem richtigen Anteil der Werte in einer Normalverteilung $N(\\mu, \\sigma^2)$ zu.',
      pairs: [
        { id: 'a', left: 'Anteil der Werte außerhalb $[\\mu - 2\\sigma,\\, \\mu + 2\\sigma]$', right: 'ca. 5 %' },
        { id: 'b', left: 'Anteil der Werte zwischen $\\mu$ und $\\mu + \\sigma$', right: 'ca. 34 %' },
        { id: 'c', left: 'Anteil der Werte unterhalb $\\mu - 3\\sigma$', right: 'ca. 0,15 %' },
        { id: 'd', left: 'Anteil der Werte im gesamten Bereich $(-\\infty, +\\infty)$', right: '100 %' },
      ],
    },
    hintKeys: [
      '68-95-99,7-Regel als Ausgangspunkt.',
      'Die Verteilung ist symmetrisch: 50 % unterhalb von $\\mu$, 50 % oberhalb.',
      'Von $\\mu$ bis $\\mu + \\sigma$: Hälfte des 68 %-Bereichs = 34 %.',
    ],
    solutionKey: 'Außerhalb 2-Sigma: 5 %. Von $\\mu$ bis $\\mu + \\sigma$: 34 % (Hälfte des 68 %-Bereichs). Unterhalb $\\mu - 3\\sigma$: 0,15 %. Gesamtfläche unter der Kurve: 100 %.',
    tags: ['drag-match', 'sigma-regel', 'wahrscheinlichkeit', 'flaechenanteil'],
  },

  {
    id: 'norm-standard-004', topicId: '12-normalverteilung', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 7,
    contextKey: 'Körpergrößen',
    data: {
      questionText: 'Männer in Deutschland: $\\mu = 178$ cm, $\\sigma = 7$ cm. Berechne, wie viel Prozent der Männer größer als 185 cm sind. Nutze die 68-%-Regel (Anteil außerhalb des 1-$\\sigma$-Bereichs auf einer Seite = 16 %).',
      correctValue: 16,
      tolerance: 0.5,
      unit: '%',
    },
    hintKeys: [
      '$\\mu + \\sigma = 178 + 7 = 185$ cm.',
      '68 % liegen in $[171, 185]$, also 32 % außerhalb — je 16 % auf jeder Seite.',
    ],
    solutionKey: '$\\mu + \\sigma = 185$ cm. 68 % der Männer sind zwischen 171 cm und 185 cm groß. 32 % liegen außerhalb, und wegen Symmetrie sind 16 % größer als 185 cm.',
    tags: ['koerpergroesse', 'sigma-regel', '68-prozent', 'sachkontext'],
  },

  {
    id: 'norm-standard-005', topicId: '12-normalverteilung', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 5,
    contextKey: 'Klausurergebnisse',
    data: {
      questionText: 'Klausurergebnisse sind normalverteilt mit $\\mu = 60$ Punkte und $\\sigma = 12$ Punkte. Ein Schüler hat 84 Punkte. Aus welcher Aussage folgt direkt, dass weniger als 2,5 % der Klasse mehr Punkte haben?',
      options: [
        { id: 'a', text: '84 Punkte entsprechen $z = 2$, und nach der 95-%-Regel liegen nur 2,5 % aller Werte oberhalb von $\\mu + 2\\sigma$.', correct: true },
        { id: 'b', text: '84 Punkte sind mehr als der Mittelwert, also hat nur die Hälfte der Klasse weniger Punkte.', correct: false },
        { id: 'c', text: 'Da $\\sigma = 12$ groß ist, können nur wenige so hohe Punkte erreichen.', correct: false },
        { id: 'd', text: '84 ist eine hohe Punktzahl, also haben sehr wenige mehr.', correct: false },
      ],
    },
    hintKeys: [
      '$z = \\frac{84 - 60}{12} = 2$.',
      '2-Sigma-Regel: 95 % in $[\\mu - 2\\sigma,\\, \\mu + 2\\sigma]$, also 5 % außerhalb, je 2,5 % pro Seite.',
    ],
    solutionKey: '$z = \\frac{84-60}{12} = 2$. Nach der 95-%-Regel liegen 5 % aller Werte außerhalb des 2-Sigma-Bereichs. Wegen Symmetrie: 2,5 % haben mehr als 84 Punkte.',
    tags: ['klausur', 'z-wert', '95-prozent', 'interpretation', 'prozentrang'],
  },

  // ─── ERWEITERT (AFB III) – 4 Aufgaben ─────────────────────────────────────

  {
    id: 'norm-erweitert-001', topicId: '12-normalverteilung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 12,
    contextKey: 'Produktionstoleranz',
    data: {
      questionText: 'Schrauben werden mit Länge $\\mu = 10{,}0$ mm und $\\sigma = 0{,}1$ mm produziert. Toleranzbereich: 9,8 bis 10,2 mm. Berechne den Anteil der Ausschussware.',
      steps: [
        {
          instruction: 'Berechne den $z$-Wert für die untere Grenze $x_u = 9{,}8$ mm.',
          type: 'numeric-input', expected: -2, tolerance: 0.01,
          showAnswer: '$z_u = \\frac{9{,}8 - 10{,}0}{0{,}1} = \\frac{-0{,}2}{0{,}1} = -2$',
        },
        {
          instruction: 'Berechne den $z$-Wert für die obere Grenze $x_o = 10{,}2$ mm.',
          type: 'numeric-input', expected: 2, tolerance: 0.01,
          showAnswer: '$z_o = \\frac{10{,}2 - 10{,}0}{0{,}1} = \\frac{0{,}2}{0{,}1} = 2$',
        },
        {
          instruction: 'Welcher Anteil liegt innerhalb des Toleranzbereichs $[-2\\sigma, +2\\sigma]$? (Nutze 95-%-Regel)',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '95 % der Schrauben liegen im Toleranzbereich.', correct: true },
            { id: 'b', text: '68 % der Schrauben liegen im Toleranzbereich.', correct: false },
            { id: 'c', text: '99,7 % der Schrauben liegen im Toleranzbereich.', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Da $z_u = -2$ und $z_o = +2$: 95 % im Toleranzbereich.',
        },
        {
          instruction: 'Berechne den Anteil der Ausschussware in Prozent.',
          type: 'numeric-input', expected: 5, tolerance: 0.1,
          unit: '%',
          showAnswer: '$100\\% - 95\\% = 5\\%$ sind Ausschuss.',
        },
      ],
    },
    hintKeys: [
      '$z = \\frac{x - \\mu}{\\sigma}$ für beide Grenzen.',
      'Toleranzbereich = Wahrscheinlichkeitsbereich. 95-%-Regel für $\\pm 2\\sigma$.',
    ],
    solutionKey: '$z_u = -2$, $z_o = +2$. Die 95-%-Regel liefert: 95 % der Schrauben sind in Toleranz, 5 % sind Ausschuss.',
    tags: ['step-solver', 'produktion', 'toleranz', 'ausschuss', 'z-wert'],
  },

  {
    id: 'norm-erweitert-002', topicId: '12-normalverteilung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 12,
    contextKey: 'Klausurergebnisse',
    data: {
      questionText: 'Klausur: $\\mu = 55$ Punkte, $\\sigma = 10$ Punkte. Bestehe-Grenze: 40 Punkte. Berechne den Prozentrang eines Schülers mit 65 Punkten mithilfe des $z$-Werts und der Normalverteilungstabelle ($\\Phi(1) \\approx 0{,}841$).',
      steps: [
        {
          instruction: 'Berechne den $z$-Wert für 65 Punkte.',
          type: 'numeric-input', expected: 1.0, tolerance: 0.01,
          showAnswer: '$z = \\frac{65 - 55}{10} = 1{,}0$',
        },
        {
          instruction: 'Der Prozentrang ist $\\Phi(z) \\approx 0{,}841$. Was bedeutet das?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Ca. 84,1 % der Schüler haben 65 oder weniger Punkte — der Schüler ist besser als 84 % der Klasse.', correct: true },
            { id: 'b', text: 'Der Schüler hat 84,1 % der maximal möglichen Punkte.', correct: false },
            { id: 'c', text: 'Ca. 84,1 % der Schüler haben mehr als 65 Punkte.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\Phi(1) = 0{,}841$: 84,1 % aller Werte liegen unterhalb von $\\mu + \\sigma$.',
        },
        {
          instruction: 'Berechne nun den $z$-Wert für die Bestehe-Grenze 40 Punkte.',
          type: 'numeric-input', expected: -1.5, tolerance: 0.05,
          showAnswer: '$z = \\frac{40 - 55}{10} = -1{,}5$',
        },
      ],
    },
    hintKeys: [
      '$z = \\frac{x - \\mu}{\\sigma}$.',
      '$\\Phi(z)$ liefert den Anteil der Werte unterhalb von $x$ (Prozentrang).',
    ],
    solutionKey: '$z_{65} = 1{,}0$. Der Prozentrang $\\Phi(1) \\approx 84{,}1\\%$ bedeutet: besser als 84 % der Klasse. Für die Bestehensgrenze: $z_{40} = -1{,}5$.',
    tags: ['prozentrang', 'phi-funktion', 'klausur', 'step-solver'],
  },

  {
    id: 'norm-erweitert-003', topicId: '12-normalverteilung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'], points: 15, timeEstimate: 10,
    contextKey: 'IQ-Tests',
    data: {
      questionText: 'IQ: $\\mu = 100$, $\\sigma = 15$. Standardisiere und transformiere zurück: Welchen IQ-Wert hat jemand mit $z = 1{,}5$?',
      steps: [
        {
          instruction: 'Forme die Standardisierungsformel $z = \\frac{x - \\mu}{\\sigma}$ nach $x$ um.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x = \\mu + z \\cdot \\sigma$', correct: true },
            { id: 'b', text: '$x = \\mu - z \\cdot \\sigma$', correct: false },
            { id: 'c', text: '$x = z \\cdot \\mu \\cdot \\sigma$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$z = \\frac{x - \\mu}{\\sigma} \\Rightarrow x = \\mu + z \\cdot \\sigma$',
        },
        {
          instruction: 'Berechne den IQ-Wert für $z = 1{,}5$, $\\mu = 100$, $\\sigma = 15$.',
          type: 'numeric-input', expected: 122.5, tolerance: 0.1,
          showAnswer: '$x = 100 + 1{,}5 \\cdot 15 = 100 + 22{,}5 = 122{,}5$',
        },
        {
          instruction: 'Interpretiere: Welcher Prozentsatz der Bevölkerung hat einen IQ unter 122,5? (Nutze: $\\Phi(1{,}5) \\approx 0{,}933$)',
          type: 'numeric-input', expected: 93.3, tolerance: 0.5,
          unit: '%',
          showAnswer: '$\\Phi(1{,}5) \\approx 93{,}3\\%$ der Bevölkerung haben einen IQ unter 122,5.',
        },
      ],
    },
    hintKeys: [
      'Rücktransformation: $x = \\mu + z \\cdot \\sigma$.',
      '$\\Phi(z)$ aus der Tabelle ablesen und als Prozentsatz interpretieren.',
    ],
    solutionKey: '$x = 100 + 1{,}5 \\cdot 15 = 122{,}5$. Ca. 93,3 % der Bevölkerung haben einen niedrigeren IQ. $z = 1{,}5$ entspricht dem 93,3. Perzentil.',
    tags: ['ruecktransformation', 'standardisierung', 'iq', 'phi-funktion'],
  },

  {
    id: 'norm-erweitert-004', topicId: '12-normalverteilung', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 7,
    data: {
      questionText: 'Finde den Fehler. Aufgabe: Normalverteilung mit $\\mu = 50$, $\\sigma = 10$. Berechne $P(X < 70)$ mit $\\Phi(2) \\approx 0{,}977$.',
      steps: [
        { content: '$z = \\frac{70 - 50}{10} = 2$', hasError: false },
        { content: '$P(X < 70) = 1 - \\Phi(2) \\approx 1 - 0{,}977 = 0{,}023$', hasError: true, errorExplanation: 'Fehler: $\\Phi(z) = P(X < x)$ direkt. Für $P(X < 70)$ gilt $P(X < 70) = \\Phi(2) \\approx 0{,}977$, nicht $1 - \\Phi(2)$. Das Komplement $1 - \\Phi(2)$ wäre $P(X > 70)$.' },
        { content: 'Interpretation: Nur 2,3 % der Werte liegen unter 70.', hasError: true, errorExplanation: 'Folge des Fehlers. Richtig: 97,7 % der Werte liegen unter 70, da 70 zwei Standardabweichungen über dem Mittelwert liegt.' },
      ],
    },
    hintKeys: [
      '$\\Phi(z) = P(X < x)$: die Tabelle gibt direkt den Anteil unterhalb von $x$ an.',
      '$P(X > x) = 1 - \\Phi(z)$.',
    ],
    solutionKey: '$P(X < 70) = \\Phi(2) \\approx 0{,}977 = 97{,}7\\%$. Der Fehler war, $1 - \\Phi$ zu berechnen — das wäre $P(X > 70)$.',
    tags: ['fehleranalyse', 'phi-funktion', 'P-kleiner-x', 'komplement'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 2 Aufgaben ───────────────────────

  {
    id: 'norm-ea-001', topicId: '12-normalverteilung', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'], points: 20, timeEstimate: 15,
    contextKey: 'Binomial-Normal-Approximation',
    data: {
      questionText: '$X \\sim B(100; 0{,}4)$. Da $n = 100$ groß und $p = 0{,}4$ nicht zu extrem ist ($np = 40 \\geq 10$), approximiere $X$ durch eine Normalverteilung und berechne $P(X \\leq 45)$.',
      steps: [
        {
          instruction: 'Berechne Erwartungswert und Varianz der Binomialverteilung: $\\mu = np$ und $\\sigma^2 = np(1-p)$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\mu = 40$, $\\sigma^2 = 24$', correct: true },
            { id: 'b', text: '$\\mu = 40$, $\\sigma^2 = 40$', correct: false },
            { id: 'c', text: '$\\mu = 0{,}4$, $\\sigma^2 = 0{,}24$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\mu = 100 \\cdot 0{,}4 = 40$, $\\sigma^2 = 100 \\cdot 0{,}4 \\cdot 0{,}6 = 24$',
        },
        {
          instruction: 'Berechne $\\sigma = \\sqrt{24}$ auf 2 Dezimalstellen.',
          type: 'numeric-input', expected: 4.90, tolerance: 0.02,
          showAnswer: '$\\sigma = \\sqrt{24} \\approx 4{,}90$',
        },
        {
          instruction: 'Standardisiere $x = 45$: Berechne $z = \\frac{45 - 40}{4{,}90}$ auf 2 Dezimalstellen.',
          type: 'numeric-input', expected: 1.02, tolerance: 0.05,
          showAnswer: '$z = \\frac{45 - 40}{4{,}90} \\approx 1{,}02$',
        },
        {
          instruction: 'Mit $\\Phi(1{,}02) \\approx 0{,}846$: Was ist $P(X \\leq 45)$ näherungsweise?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$P(X \\leq 45) \\approx 84{,}6\\%$', correct: true },
            { id: 'b', text: '$P(X \\leq 45) \\approx 15{,}4\\%$', correct: false },
            { id: 'c', text: '$P(X \\leq 45) \\approx 50\\%$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$P(X \\leq 45) \\approx \\Phi(1{,}02) \\approx 0{,}846 = 84{,}6\\%$',
        },
      ],
    },
    hintKeys: [
      'Voraussetzung der Approximation: $np \\geq 10$ und $n(1-p) \\geq 10$.',
      'Approximation: $B(n, p) \\approx N(\\mu, \\sigma^2)$ mit $\\mu = np$, $\\sigma^2 = np(1-p)$.',
      'Standardisierung: $z = \\frac{x - \\mu}{\\sigma}$, dann $\\Phi(z)$ ablesen.',
    ],
    solutionKey: '$\\mu = 40$, $\\sigma = \\sqrt{24} \\approx 4{,}90$. $z = \\frac{45-40}{4{,}90} \\approx 1{,}02$. $P(X \\leq 45) \\approx \\Phi(1{,}02) \\approx 84{,}6\\%$.',
    tags: ['approximation', 'binomial-normal', 'step-solver', 'ea', 'standardisierung'],
  },

  {
    id: 'norm-ea-002', topicId: '12-normalverteilung', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'], points: 20, timeEstimate: 18,
    contextKey: 'Amazon-Lieferzeiten',
    data: {
      questionText: 'Amazon wirbt: „95 % aller Pakete kommen innerhalb von 3 Tagen." Die Lieferzeit ist normalverteilt mit $\\mu = 2{,}0$ Tage. Berechne die zugehörige Standardabweichung $\\sigma$ und erkläre das Konfidenzintervall-Konzept.',
      steps: [
        {
          instruction: '„95 % kommen bis 3 Tage" bedeutet: $P(X \\leq 3) = 0{,}95$, also $\\Phi(z) = 0{,}95$. Welcher $z$-Wert erfüllt $\\Phi(z) \\approx 0{,}95$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$z \\approx 1{,}645$', correct: true },
            { id: 'b', text: '$z \\approx 2{,}0$', correct: false },
            { id: 'c', text: '$z \\approx 1{,}0$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\Phi(1{,}645) \\approx 0{,}95$ (Standardwert aus der Tabelle).',
        },
        {
          instruction: 'Forme $z = \\frac{x - \\mu}{\\sigma}$ nach $\\sigma$ um und berechne $\\sigma$ für $z = 1{,}645$, $x = 3$, $\\mu = 2$. Runde auf 2 Dezimalstellen.',
          type: 'numeric-input', expected: 0.61, tolerance: 0.02,
          unit: 'Tage',
          showAnswer: '$\\sigma = \\frac{x - \\mu}{z} = \\frac{3 - 2}{1{,}645} \\approx 0{,}61$ Tage',
        },
        {
          instruction: 'Was ist ein Konfidenzintervall (95 %-Konfidenzintervall)? Wähle die richtige Aussage.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Ein Intervall, das mit 95 % Wahrscheinlichkeit den wahren Wert enthält. Für Lieferzeiten: $[\\mu - 1{,}96\\sigma,\\, \\mu + 1{,}96\\sigma]$ deckt 95 % aller Fälle ab.', correct: true },
            { id: 'b', text: 'Ein Intervall, in dem 5 % aller Werte liegen.', correct: false },
            { id: 'c', text: 'Der Bereich zwischen Minimum und Maximum.', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Konfidenzintervall: $[\\mu \\pm 1{,}96\\sigma]$ enthält 95 % aller Werte der Normalverteilung.',
        },
      ],
    },
    hintKeys: [
      '$\\Phi(z) = 0{,}95 \\Rightarrow z \\approx 1{,}645$ (aus Tabelle).',
      '$\\sigma = \\frac{x - \\mu}{z}$ (Umformung der Standardisierung).',
      'Das 95-%-Konfidenzintervall: $[\\mu - 1{,}96\\sigma,\\, \\mu + 1{,}96\\sigma]$ — ähnlich der 2-Sigma-Regel.',
    ],
    solutionKey: '$z_{0{,}95} \\approx 1{,}645$. $\\sigma = \\frac{3 - 2}{1{,}645} \\approx 0{,}61$ Tage. Das 95-%-KI $[\\mu \\pm 1{,}96\\sigma] \\approx [0{,}80,\\, 3{,}20]$ Tage enthält 95 % aller Lieferzeiten.',
    tags: ['konfidenzintervall', 'sigma-bestimmen', 'amazon', 'step-solver', 'ea', 'umformung'],
  },
];
