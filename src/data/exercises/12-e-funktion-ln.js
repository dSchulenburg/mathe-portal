export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'efn-basis-001', topicId: '12-e-funktion-ln', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Was ist die Ableitung von $f(x) = e^x$?',
      options: [
        { id: 'a', text: '$f\'(x) = e^x$', correct: true },
        { id: 'b', text: '$f\'(x) = x \\cdot e^{x-1}$', correct: false },
        { id: 'c', text: '$f\'(x) = e^{x-1}$', correct: false },
        { id: 'd', text: '$f\'(x) = 1$', correct: false },
      ],
    },
    hintKeys: ['Die e-Funktion ist die einzige Funktion, die ihre eigene Ableitung ist: $\\frac{d}{dx} e^x = e^x$.'],
    solutionKey: '$f\'(x) = e^x$. Die natürliche Exponentialfunktion ist ihre eigene Ableitung — das ist ihre besondere Eigenschaft.',
    tags: ['ableitung', 'e-funktion', 'definition'],
  },

  {
    id: 'efn-basis-002', topicId: '12-e-funktion-ln', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welche der folgenden Aussagen gilt für $f(x) = e^{2x}$?',
      options: [
        { id: 'a', text: '$f\'(x) = 2e^{2x}$', correct: true },
        { id: 'b', text: '$f\'(x) = e^{2x}$', correct: false },
        { id: 'c', text: '$f\'(x) = 2x \\cdot e^{2x-1}$', correct: false },
        { id: 'd', text: '$f\'(x) = 2e^x$', correct: false },
      ],
    },
    hintKeys: ['Kettenregel: $\\frac{d}{dx} e^{g(x)} = e^{g(x)} \\cdot g\'(x)$. Hier ist $g(x) = 2x$, also $g\'(x) = 2$.'],
    solutionKey: '$f\'(x) = e^{2x} \\cdot 2 = 2e^{2x}$. Kettenregel: äußere Ableitung $e^{2x}$ bleibt, innere Ableitung von $2x$ ergibt den Faktor 2.',
    tags: ['ableitung', 'kettenregel', 'e-funktion'],
  },

  {
    id: 'efn-basis-003', topicId: '12-e-funktion-ln', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Was ist die Ableitung von $f(x) = \\ln(x)$ für $x > 0$?',
      options: [
        { id: 'a', text: '$f\'(x) = \\dfrac{1}{x}$', correct: true },
        { id: 'b', text: '$f\'(x) = \\ln(x-1)$', correct: false },
        { id: 'c', text: '$f\'(x) = e^x$', correct: false },
        { id: 'd', text: '$f\'(x) = x$', correct: false },
      ],
    },
    hintKeys: ['Die Ableitung des natürlichen Logarithmus ist eine der wichtigsten Grundregeln: $\\frac{d}{dx} \\ln(x) = \\frac{1}{x}$.'],
    solutionKey: '$f\'(x) = \\frac{1}{x}$. Der natürliche Logarithmus $\\ln(x)$ hat die Ableitung $\\frac{1}{x}$ für alle $x > 0$.',
    tags: ['ableitung', 'ln', 'logarithmus', 'definition'],
  },

  {
    id: 'efn-basis-004', topicId: '12-e-funktion-ln', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Berechne: $\\ln(e^2)$ = ?',
      correctValue: 2,
      tolerance: 0,
    },
    hintKeys: ['$\\ln$ und $e^x$ sind Umkehrfunktionen: $\\ln(e^n) = n$.'],
    solutionKey: '$\\ln(e^2) = 2$. Allgemein gilt: $\\ln(e^n) = n$, da $\\ln$ die Umkehrfunktion von $e^x$ ist.',
    tags: ['ln', 'umkehrbeziehung', 'berechnung'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ──────────────────────────────────────

  {
    id: 'efn-standard-001', topicId: '12-e-funktion-ln', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 10,
    contextKey: 'Kurvendiskussion',
    data: {
      questionText: 'Untersuche die Funktion $f(x) = x \\cdot e^{-x}$ schrittweise: Bestimme die Ableitung, finde die Nullstelle der Ableitung und klassifiziere das Extremum.',
      steps: [
        {
          instruction: 'Berechne $f\'(x)$ mithilfe der Produktregel: $(u \\cdot v)\' = u\' \\cdot v + u \\cdot v\'$ mit $u = x$ und $v = e^{-x}$. Welches Ergebnis erhältst du?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$f\'(x) = e^{-x} - x \\cdot e^{-x} = e^{-x}(1 - x)$', correct: true },
            { id: 'b', text: "$f'(x) = e^{-x} + x \\cdot e^{-x}$", correct: false },
            { id: 'c', text: "$f'(x) = -x \\cdot e^{-x}$", correct: false },
          ],
          correctId: 'a',
          showAnswer: "$f'(x) = 1 \\cdot e^{-x} + x \\cdot (-e^{-x}) = e^{-x}(1 - x)$",
        },
        {
          instruction: "Setze $f'(x) = 0$: $e^{-x}(1-x) = 0$. Da $e^{-x} > 0$ für alle $x$, folgt $1 - x = 0$. An welcher Stelle liegt die Nullstelle der Ableitung?",
          type: 'numeric-input', expected: 1, tolerance: 0,
          showAnswer: '$x = 1$ ist die einzige kritische Stelle.',
        },
        {
          instruction: 'Berechne den Funktionswert $f(1) = 1 \\cdot e^{-1}$. Nutze $e^{-1} \\approx 0{,}368$. Auf 3 Dezimalstellen gerundet?',
          type: 'numeric-input', expected: 0.368, tolerance: 0.001,
          showAnswer: "$f(1) = e^{-1} \\approx 0{,}368$. Da $f'$ von $+$ nach $-$ wechselt, ist $(1 \\mid e^{-1})$ ein Maximum.",
        },
      ],
    },
    hintKeys: [
      'Produktregel: $(u \\cdot v)\' = u\'v + uv\'$. Hier: $u = x$, $v = e^{-x}$.',
      "$f'(x) = 0 \\Rightarrow e^{-x}(1-x) = 0$. $e^{-x}$ ist immer positiv — was muss also gelten?",
      "Vorzeichenwechsel von $f'$: für $x < 1$ ist $(1-x) > 0$, für $x > 1$ ist $(1-x) < 0$ → Maximum.",
    ],
    solutionKey: "$f'(x) = e^{-x}(1-x) = 0 \\Rightarrow x = 1$. Hochpunkt bei $(1 \\mid e^{-1}) \\approx (1 \\mid 0{,}368)$.",
    tags: ['kurvendiskussion', 'produktregel', 'extremum', 'step-solver'],
  },

  {
    id: 'efn-standard-002', topicId: '12-e-funktion-ln', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 10,
    contextKey: 'Medikamentenkonzentration',
    data: {
      questionText: 'Die Konzentration eines Medikaments im Blut beträgt nach $t$ Stunden $c(t) = t \\cdot e^{-0{,}5t}$ mg/l. Finde das Maximum der Konzentration.',
      steps: [
        {
          instruction: "Berechne $c'(t)$ mit der Produktregel. Was ergibt sich für $c'(t)$?",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: "$c'(t) = e^{-0{,}5t}(1 - 0{,}5t)$", correct: true },
            { id: 'b', text: "$c'(t) = e^{-0{,}5t} - 0{,}5t$", correct: false },
            { id: 'c', text: "$c'(t) = -0{,}5 \\cdot e^{-0{,}5t}$", correct: false },
          ],
          correctId: 'a',
          showAnswer: "$c'(t) = 1 \\cdot e^{-0{,}5t} + t \\cdot (-0{,}5 e^{-0{,}5t}) = e^{-0{,}5t}(1 - 0{,}5t)$",
        },
        {
          instruction: "Setze $c'(t) = 0$. Da $e^{-0{,}5t} > 0$ muss $1 - 0{,}5t = 0$ gelten. Nach wie vielen Stunden tritt das Maximum auf?",
          type: 'numeric-input', expected: 2, tolerance: 0,
          showAnswer: '$1 - 0{,}5t = 0 \\Rightarrow t = 2$ Stunden',
        },
        {
          instruction: 'Berechne die maximale Konzentration: $c(2) = 2 \\cdot e^{-1}$. Nutze $e^{-1} \\approx 0{,}368$. In mg/l (2 Dezimalstellen):',
          type: 'numeric-input', expected: 0.74, tolerance: 0.01,
          showAnswer: '$c(2) = 2 \\cdot e^{-1} \\approx 2 \\cdot 0{,}368 = 0{,}74$ mg/l',
        },
      ],
    },
    hintKeys: [
      'Produktregel mit $u = t$, $v = e^{-0{,}5t}$: $u\' = 1$, $v\' = -0{,}5 e^{-0{,}5t}$.',
      '$e^{-0{,}5t}$ ist immer positiv — nur $(1-0{,}5t) = 0$ kann die Ableitung null machen.',
      '$e^{-1} \\approx 0{,}368$.',
    ],
    solutionKey: "$c'(t) = e^{-0{,}5t}(1-0{,}5t) = 0 \\Rightarrow t = 2$. Maximale Konzentration: $c(2) = 2e^{-1} \\approx 0{,}74$ mg/l.",
    tags: ['medikament', 'sachkontext', 'produktregel', 'extremum', 'step-solver'],
  },

  {
    id: 'efn-standard-003', topicId: '12-e-funktion-ln', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Ordne jede Funktion ihrer Ableitung zu.',
      pairs: [
        { id: 'a', left: '$f(x) = e^{3x}$', right: "$f'(x) = 3e^{3x}$" },
        { id: 'b', left: '$f(x) = e^{-x}$', right: "$f'(x) = -e^{-x}$" },
        { id: 'c', left: '$f(x) = 5 \\cdot e^x$', right: "$f'(x) = 5e^x$" },
        { id: 'd', left: '$f(x) = e^{0{,}5x}$', right: "$f'(x) = 0{,}5 \\cdot e^{0{,}5x}$" },
      ],
    },
    hintKeys: [
      'Kettenregel: $\\frac{d}{dx} e^{kx} = k \\cdot e^{kx}$.',
      'Konstante Faktoren bleiben beim Ableiten erhalten: $(c \\cdot f)\' = c \\cdot f\'$.',
    ],
    solutionKey: "$e^{3x} \\to 3e^{3x}$; $e^{-x} \\to -e^{-x}$; $5e^x \\to 5e^x$; $e^{0{,}5x} \\to 0{,}5e^{0{,}5x}$. Kettenregel: innere Ableitung als Faktor.",
    tags: ['drag-match', 'ableitung', 'kettenregel', 'e-funktion'],
  },

  {
    id: 'efn-standard-004', topicId: '12-e-funktion-ln', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 8, timeEstimate: 5,
    data: {
      questionText: 'Berechne $f\'(x)$ für $f(x) = \\ln(3x)$ und werte aus: $f\'(2) = ?$ (auf 3 Dezimalstellen).',
      correctValue: 0.5,
      tolerance: 0.001,
    },
    hintKeys: [
      'Kettenregel: $\\frac{d}{dx} \\ln(g(x)) = \\frac{g\'(x)}{g(x)}$.',
      'Hier $g(x) = 3x$, also $g\'(x) = 3$. Damit: $f\'(x) = \\frac{3}{3x} = \\frac{1}{x}$.',
    ],
    solutionKey: "$f'(x) = \\frac{3}{3x} = \\frac{1}{x}$. Damit gilt $f'(2) = \\frac{1}{2} = 0{,}5$.",
    tags: ['ableitung', 'ln', 'kettenregel', 'auswerten'],
  },

  {
    id: 'efn-standard-005', topicId: '12-e-funktion-ln', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    contextKey: 'Gleichung lösen',
    data: {
      questionText: 'Löse die Gleichung $\\ln(x) + \\ln(x-1) = \\ln(6)$ nach $x$ auf. Welcher Wert ist korrekt?',
      options: [
        { id: 'a', text: '$x = 3$', correct: true },
        { id: 'b', text: '$x = 6$', correct: false },
        { id: 'c', text: '$x = -2$', correct: false },
        { id: 'd', text: '$x = 2$', correct: false },
      ],
    },
    hintKeys: [
      '$\\ln(a) + \\ln(b) = \\ln(a \\cdot b)$. Fasse die linke Seite zusammen.',
      'Aus $\\ln(x(x-1)) = \\ln(6)$ folgt $x(x-1) = 6$. Löse die quadratische Gleichung.',
      'Achte auf den Definitionsbereich: $x > 0$ und $x - 1 > 0 \\Rightarrow x > 1$.',
    ],
    solutionKey: '$\\ln(x) + \\ln(x-1) = \\ln(x(x-1)) = \\ln(6) \\Rightarrow x^2 - x - 6 = 0 \\Rightarrow (x-3)(x+2) = 0$. Da $x > 1$: $x = 3$.',
    tags: ['gleichung-lösen', 'logarithmengesetze', 'ln', 'definitionsbereich'],
  },

  // ─── ERWEITERT (AFB III) – 5 Aufgaben ─────────────────────────────────────

  {
    id: 'efn-erweitert-001', topicId: '12-e-funktion-ln', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 12,
    contextKey: 'Akku-Ladekurve',
    data: {
      questionText: 'Die Ladung eines Akkus folgt $U(t) = U_{\\max} \\cdot (1 - e^{-t/\\tau})$ mit $U_{\\max} = 4{,}2$ V und Zeitkonstante $\\tau = 30$ min. Analysiere die Ladekurve schrittweise.',
      steps: [
        {
          instruction: 'Berechne die Spannung nach einer Zeitkonstante ($t = \\tau = 30$ min): $U(30) = 4{,}2 \\cdot (1 - e^{-1})$. Nutze $e^{-1} \\approx 0{,}368$. Auf 2 Dezimalstellen:',
          type: 'numeric-input', expected: 2.65, tolerance: 0.05,
          showAnswer: '$U(30) = 4{,}2 \\cdot (1 - 0{,}368) = 4{,}2 \\cdot 0{,}632 \\approx 2{,}65$ V',
        },
        {
          instruction: 'Wie viel Prozent der Maximalspannung sind nach einer Zeitkonstante erreicht? (auf ganze Prozent)',
          type: 'numeric-input', expected: 63, tolerance: 1,
          showAnswer: '$\\frac{U(\\tau)}{U_{\\max}} = 1 - e^{-1} \\approx 0{,}632 = 63{,}2\\%$',
        },
        {
          instruction: 'Nach welcher Zeit ist $U(t) = 3{,}99$ V (95 % von $U_{\\max}$)? Löse: $4{,}2(1-e^{-t/30}) = 3{,}99$. Berechne $t$ in Minuten (auf ganze Minuten). $\\ln(0{,}05) \\approx -3{,}0$.',
          type: 'numeric-input', expected: 90, tolerance: 2,
          showAnswer: '$1 - e^{-t/30} = \\frac{3{,}99}{4{,}2} \\approx 0{,}95 \\Rightarrow e^{-t/30} = 0{,}05 \\Rightarrow t = -30 \\cdot \\ln(0{,}05) \\approx 90$ min',
        },
      ],
    },
    hintKeys: [
      '$U(\\tau) = U_{\\max}(1-e^{-1})$. $e^{-1} \\approx 0{,}368$, also $1 - e^{-1} \\approx 0{,}632$.',
      '95%-Laden: $1-e^{-t/30} = 0{,}95 \\Rightarrow e^{-t/30} = 0{,}05$. Logarithmieren!',
      '$\\ln(0{,}05) \\approx -3$, daher $t = 30 \\cdot 3 = 90$ min.',
    ],
    solutionKey: 'Nach $\\tau = 30$ min sind ca. 63 % erreicht. Nach ca. 90 min ist der Akku zu 95 % geladen. Sättigungsfunktion: nähert sich asymptotisch $U_{\\max}$.',
    tags: ['akku', 'saettigung', 'sachkontext', 'step-solver', 'elektrotechnik'],
  },

  {
    id: 'efn-erweitert-002', topicId: '12-e-funktion-ln', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 15, timeEstimate: 12,
    contextKey: 'Virale Social-Media-Posts',
    data: {
      questionText: 'Virale Reichweite eines Posts wird durch logistisches Wachstum modelliert: $R(t) = \\frac{K}{1 + \\left(\\frac{K - R_0}{R_0}\\right) \\cdot e^{-r t}}$ mit Kapazität $K = 100{.}000$, Startwert $R_0 = 1{.}000$, Wachstumsrate $r = 0{,}5$ (t in Stunden). Analysiere das Modell.',
      steps: [
        {
          instruction: 'Berechne den Vorfaktor $\\frac{K-R_0}{R_0} = \\frac{100000 - 1000}{1000}$.',
          type: 'numeric-input', expected: 99, tolerance: 0,
          showAnswer: '$\\frac{99000}{1000} = 99$',
        },
        {
          instruction: 'Berechne $R(10)$: Exponent $= -0{,}5 \\cdot 10 = -5$, $e^{-5} \\approx 0{,}0067$. Also: $R(10) = \\frac{100000}{1 + 99 \\cdot 0{,}0067}$. Auf ganze Zahlen runden:',
          type: 'numeric-input', expected: 60241, tolerance: 500,
          showAnswer: '$R(10) = \\frac{100000}{1 + 0{,}6633} \\approx \\frac{100000}{1{,}663} \\approx 60{.}000$',
        },
        {
          instruction: 'Was ist der Grenzwert $\\lim_{t \\to \\infty} R(t)$? (Nenner: $e^{-rt} \\to 0$ für $t \\to \\infty$)',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\lim_{t \\to \\infty} R(t) = K = 100{.}000$', correct: true },
            { id: 'b', text: '$\\lim_{t \\to \\infty} R(t) = 0$', correct: false },
            { id: 'c', text: '$\\lim_{t \\to \\infty} R(t) = \\infty$', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Für $t \\to \\infty$: $e^{-rt} \\to 0$, Nenner $\\to 1$, also $R \\to K = 100{.}000$.',
        },
      ],
    },
    hintKeys: [
      'Berechne zuerst den Vorfaktor $(K-R_0)/R_0$.',
      '$e^{-5} \\approx 0{,}0067$. Einsetzen in die Formel.',
      'Logistisches Wachstum: saturiert bei der Kapazitätsgrenze $K$.',
    ],
    solutionKey: 'Nach 10 h ca. 60.000 Reichweite (60 %); Grenzwert: $K = 100.000$. Logistisches Wachstum modelliert Sättigungseffekte realistischer als rein exponentielles Wachstum.',
    tags: ['logistisches-wachstum', 'social-media', 'sachkontext', 'grenzwert', 'step-solver'],
  },

  {
    id: 'efn-erweitert-003', topicId: '12-e-funktion-ln', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 10,
    contextKey: 'Radiokarbon-Datierung',
    data: {
      questionText: 'C-14 zerfällt nach $N(t) = N_0 \\cdot e^{-\\lambda t}$ mit $\\lambda = \\frac{\\ln 2}{5730} \\approx 1{,}21 \\cdot 10^{-4}$ pro Jahr. Ein Fund hat noch 65 % der ursprünglichen C-14-Menge. Datiere das Alter schrittweise.',
      steps: [
        {
          instruction: 'Stelle die Gleichung $N_0 \\cdot e^{-\\lambda t} = 0{,}65 \\cdot N_0$ auf und kürze $N_0$. Was erhältst du?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$e^{-\\lambda t} = 0{,}65$', correct: true },
            { id: 'b', text: '$e^{-\\lambda t} = 0{,}35$', correct: false },
            { id: 'c', text: '$-\\lambda t = 0{,}65$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$e^{-\\lambda t} = 0{,}65$',
        },
        {
          instruction: 'Wende $\\ln$ an: $-\\lambda t = \\ln(0{,}65)$. Berechne $\\ln(0{,}65)$ auf 4 Dezimalstellen. ($\\ln(0{,}65) \\approx -0{,}4308$)',
          type: 'numeric-input', expected: -0.4308, tolerance: 0.001,
          showAnswer: '$\\ln(0{,}65) \\approx -0{,}4308$',
        },
        {
          instruction: 'Berechne das Alter: $t = \\frac{-\\ln(0{,}65)}{\\lambda} = \\frac{0{,}4308}{1{,}21 \\cdot 10^{-4}}$. Auf ganze Jahre runden:',
          type: 'numeric-input', expected: 3561, tolerance: 50,
          showAnswer: '$t = \\frac{0{,}4308}{0{,}000121} \\approx 3561$ Jahre',
        },
      ],
    },
    hintKeys: [
      'Kürze $N_0$ auf beiden Seiten.',
      '$\\ln(0{,}65) = \\ln(65/100) \\approx -0{,}431$.',
      '$t = \\frac{-\\ln(0{,}65)}{\\lambda}$. Einheiten: Jahre.',
    ],
    solutionKey: '$e^{-\\lambda t} = 0{,}65 \\Rightarrow t = \\frac{\\ln(0{,}65)}{-\\lambda} \\approx \\frac{0{,}431}{1{,}21 \\cdot 10^{-4}} \\approx 3560$ Jahre. Der Fund ist ca. 3.560 Jahre alt.',
    tags: ['radiokarbon', 'zerfall', 'logarithmus', 'sachkontext', 'step-solver', 'archaeologie'],
  },

  {
    id: 'efn-erweitert-004', topicId: '12-e-funktion-ln', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 6,
    data: {
      questionText: 'Finde den Fehler. Aufgabe: Bestimme $f\'(x)$ für $f(x) = x^2 \\cdot e^x$.',
      steps: [
        { content: 'Produktregel: $(u \\cdot v)\' = u\'v + uv\'$ mit $u = x^2$, $v = e^x$', hasError: false },
        { content: "$u' = 2x$, $v' = e^x$", hasError: false },
        { content: "$f'(x) = 2x \\cdot e^x + x^2 \\cdot e^{x-1}$", hasError: true, errorExplanation: "Fehler: $v' = e^x$, NICHT $e^{x-1}$! Die e-Funktion ist ihre eigene Ableitung, die Potenzregel (Exponent -1) gilt nur für $x^n$. Richtig: $f'(x) = 2x e^x + x^2 e^x = e^x(2x + x^2)$." },
      ],
    },
    hintKeys: ['$\\frac{d}{dx} e^x = e^x$ — die e-Funktion behält denselben Exponent.'],
    solutionKey: "$f'(x) = 2x \\cdot e^x + x^2 \\cdot e^x = e^x(x^2 + 2x) = x \\cdot e^x(x+2)$.",
    tags: ['fehleranalyse', 'produktregel', 'e-funktion', 'ableitung'],
  },

  {
    id: 'efn-erweitert-005', topicId: '12-e-funktion-ln', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 7,
    contextKey: 'Wachstumsrate bestimmen',
    data: {
      questionText: 'Eine Population wächst von 500 auf 2000 Individuen in 8 Jahren. Modell: $N(t) = 500 \\cdot e^{kt}$. Welche Wachstumsrate $k$ beschreibt dieses Verhalten? ($\\ln(4) \\approx 1{,}386$)',
      options: [
        { id: 'a', text: '$k = \\frac{\\ln(4)}{8} \\approx 0{,}173$', correct: true },
        { id: 'b', text: '$k = \\frac{4}{8} = 0{,}5$', correct: false },
        { id: 'c', text: '$k = \\ln(8) \\approx 2{,}08$', correct: false },
        { id: 'd', text: '$k = \\frac{\\ln(2000)}{8} \\approx 0{,}95$', correct: false },
      ],
    },
    hintKeys: [
      'Setze $N(8) = 2000$: $500 \\cdot e^{8k} = 2000 \\Rightarrow e^{8k} = 4$.',
      'Logarithmiere: $8k = \\ln(4) \\Rightarrow k = \\frac{\\ln(4)}{8}$.',
    ],
    solutionKey: '$500 e^{8k} = 2000 \\Rightarrow e^{8k} = 4 \\Rightarrow k = \\frac{\\ln(4)}{8} = \\frac{1{,}386}{8} \\approx 0{,}173$.',
    tags: ['wachstumsrate', 'parameter-bestimmen', 'sachkontext', 'e-funktion'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 3 Aufgaben ───────────────────────

  {
    id: 'efn-ea-001', topicId: '12-e-funktion-ln', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 15,
    contextKey: 'Partielle Integration',
    data: {
      questionText: 'Berechne $\\int x \\cdot e^x \\, dx$ mit partieller Integration: $\\int u \\cdot v\' \\, dx = u \\cdot v - \\int u\' \\cdot v \\, dx$.',
      steps: [
        {
          instruction: 'Wähle $u = x$ und $v\' = e^x$. Was ist dann $u\'$ und $v$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: "$u' = 1$, $v = e^x$", correct: true },
            { id: 'b', text: "$u' = 1$, $v = e^{x+1}$", correct: false },
            { id: 'c', text: "$u' = x$, $v = e^x$", correct: false },
          ],
          correctId: 'a',
          showAnswer: "$u' = 1$, $v = e^x$ (da $\\int e^x \\, dx = e^x$)",
        },
        {
          instruction: 'Wende die Formel an: $\\int x \\cdot e^x \\, dx = u \\cdot v - \\int u\' \\cdot v \\, dx = x \\cdot e^x - \\int 1 \\cdot e^x \\, dx$. Berechne das verbleibende Integral $\\int e^x \\, dx$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\int e^x \\, dx = e^x + C$', correct: true },
            { id: 'b', text: '$\\int e^x \\, dx = \\frac{e^{x+1}}{x+1} + C$', correct: false },
            { id: 'c', text: '$\\int e^x \\, dx = x \\cdot e^x + C$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\int e^x \\, dx = e^x + C$',
        },
        {
          instruction: 'Stelle das vollständige Ergebnis auf. Welche Stammfunktion von $x \\cdot e^x$ ist korrekt?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$F(x) = x \\cdot e^x - e^x + C = e^x(x - 1) + C$', correct: true },
            { id: 'b', text: '$F(x) = x \\cdot e^x + e^x + C$', correct: false },
            { id: 'c', text: '$F(x) = \\frac{x^2}{2} \\cdot e^x + C$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\int x e^x \\, dx = x e^x - e^x + C = e^x(x-1) + C$',
        },
      ],
    },
    hintKeys: [
      'Bei partieller Integration gilt: $u$ ableiten, $v\'$ aufleiten.',
      'Wähle $u = x$ (wird einfacher beim Ableiten) und $v\' = e^x$ (einfach aufzuleiten).',
      'Ergebnis: $x \\cdot e^x - \\int e^x dx = x \\cdot e^x - e^x + C$.',
    ],
    solutionKey: '$\\int x e^x \\, dx = x e^x - e^x + C = e^x(x-1) + C$. Probe: $[e^x(x-1)]\\prime = e^x(x-1) + e^x = x \\cdot e^x$ ✓',
    tags: ['stammfunktion', 'partielle-integration', 'step-solver', 'ea'],
  },

  {
    id: 'efn-ea-002', topicId: '12-e-funktion-ln', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 15,
    contextKey: 'Modellierung — Parameter fitten',
    data: {
      questionText: 'Ein Pharmaunternehmen misst die Konzentration eines Wirkstoffs: Bei $t = 0$ h ist $c = 8$ mg/l, bei $t = 3$ h ist $c = 2$ mg/l. Das Modell lautet $c(t) = c_0 \\cdot e^{-\\lambda t}$. Bestimme $c_0$ und $\\lambda$.',
      steps: [
        {
          instruction: 'Bestimme $c_0$ aus der Anfangsbedingung $c(0) = 8$: $c_0 \\cdot e^0 = 8$. Was ist $c_0$?',
          type: 'numeric-input', expected: 8, tolerance: 0,
          showAnswer: '$c_0 = 8$ mg/l',
        },
        {
          instruction: 'Setze $c(3) = 2$ ein: $8 \\cdot e^{-3\\lambda} = 2$. Löse nach $e^{-3\\lambda}$. Was erhältst du?',
          type: 'numeric-input', expected: 0.25, tolerance: 0.001,
          showAnswer: '$e^{-3\\lambda} = \\frac{2}{8} = 0{,}25$',
        },
        {
          instruction: 'Bestimme $\\lambda$: $-3\\lambda = \\ln(0{,}25)$. $\\ln(0{,}25) = \\ln(1/4) = -\\ln(4) \\approx -1{,}386$. Berechne $\\lambda$ auf 3 Dezimalstellen:',
          type: 'numeric-input', expected: 0.462, tolerance: 0.002,
          showAnswer: '$\\lambda = \\frac{\\ln(4)}{3} \\approx \\frac{1{,}386}{3} \\approx 0{,}462$ h⁻¹',
        },
      ],
    },
    hintKeys: [
      '$e^0 = 1$, also liefert $c(0) = c_0$ direkt den Startwert.',
      'Dividiere durch $c_0 = 8$: $e^{-3\\lambda} = 1/4$.',
      '$\\ln(1/4) = -\\ln(4) = -2\\ln(2) \\approx -1{,}386$.',
    ],
    solutionKey: '$c_0 = 8$ mg/l; $\\lambda = \\frac{\\ln 4}{3} \\approx 0{,}462$ h⁻¹. Modell: $c(t) = 8 \\cdot e^{-0{,}462 t}$. Halbwertszeit: $t_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx 1{,}5$ h.',
    tags: ['modellierung', 'parameter-fitten', 'step-solver', 'pharma', 'ea'],
  },

  {
    id: 'efn-ea-003', topicId: '12-e-funktion-ln', type: 'multiple-choice', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 12,
    contextKey: 'Wendepunkt und Krümmung',
    data: {
      questionText: 'Für $f(x) = x \\cdot e^{-x}$ gilt $f\'\'(x) = e^{-x}(x - 2)$. Welche Aussage über den Wendepunkt ist korrekt?',
      options: [
        { id: 'a', text: 'Wendepunkt bei $x = 2$, da $f\'\'(2) = 0$ und $f\'\'$ dort das Vorzeichen wechselt.', correct: true },
        { id: 'b', text: 'Wendepunkt bei $x = 0$, da $f(0) = 0$.', correct: false },
        { id: 'c', text: 'Kein Wendepunkt, da $f\'\'(x) > 0$ für alle $x$.', correct: false },
        { id: 'd', text: 'Wendepunkt bei $x = 1$, da $f\'(1) = 0$.', correct: false },
      ],
    },
    hintKeys: [
      "Wendepunktbedingung: $f''(x) = 0$ UND Vorzeichenwechsel von $f''$.",
      "$f''(x) = e^{-x}(x-2) = 0 \\Rightarrow x = 2$ (da $e^{-x} > 0$).",
      "Für $x < 2$: $(x-2) < 0 \\Rightarrow f'' < 0$ (linksgekrümmt). Für $x > 2$: $(x-2) > 0 \\Rightarrow f'' > 0$ (rechtsgekrümmt). Vorzeichenwechsel ✓",
    ],
    solutionKey: "$f''(2) = e^{-2}(2-2) = 0$. Da $e^{-x} > 0$ gilt: Vorzeichen von $f''$ hängt von $(x-2)$ ab — Vorzeichenwechsel bei $x = 2$. Wendepunkt bei $(2 \\mid 2e^{-2}) \\approx (2 \\mid 0{,}271)$.",
    tags: ['wendepunkt', 'kruemmung', 'zweite-ableitung', 'kurvendiskussion', 'ea'],
  },
];
