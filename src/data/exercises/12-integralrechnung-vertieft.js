export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'intv-basis-001', topicId: '12-integralrechnung-vertieft', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welche Stammfunktion gehört zu $f(x) = \\sin(x)$?',
      options: [
        { id: 'a', text: '$F(x) = -\\cos(x) + C$', correct: true },
        { id: 'b', text: '$F(x) = \\cos(x) + C$', correct: false },
        { id: 'c', text: '$F(x) = -\\sin(x) + C$', correct: false },
        { id: 'd', text: '$F(x) = \\tan(x) + C$', correct: false },
      ],
    },
    hintKeys: ['Probe: $(-\\cos(x))\' = \\sin(x)$ ✓. Die Ableitung von $-\\cos(x)$ ist $\\sin(x)$.'],
    solutionKey: '$\\int \\sin(x) \\, dx = -\\cos(x) + C$. Probe: $\\frac{d}{dx}(-\\cos x) = \\sin x$ ✓',
    tags: ['stammfunktion', 'sinus', 'grundregeln'],
  },

  {
    id: 'intv-basis-002', topicId: '12-integralrechnung-vertieft', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welche Stammfunktion gehört zu $f(x) = \\cos(x)$?',
      options: [
        { id: 'a', text: '$F(x) = \\sin(x) + C$', correct: true },
        { id: 'b', text: '$F(x) = -\\sin(x) + C$', correct: false },
        { id: 'c', text: '$F(x) = -\\cos(x) + C$', correct: false },
        { id: 'd', text: '$F(x) = \\cos(x) + C$', correct: false },
      ],
    },
    hintKeys: ['Probe: $(\\sin(x))\' = \\cos(x)$ ✓. Ableiten und Integrieren sind Umkehroperationen.'],
    solutionKey: '$\\int \\cos(x) \\, dx = \\sin(x) + C$. Probe: $(\\sin x)\' = \\cos x$ ✓',
    tags: ['stammfunktion', 'kosinus', 'grundregeln'],
  },

  {
    id: 'intv-basis-003', topicId: '12-integralrechnung-vertieft', type: 'drag-match', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Ordne jede Funktion ihrer Stammfunktion zu.',
      pairs: [
        { id: 'a', left: '$f(x) = e^x$', right: '$F(x) = e^x + C$' },
        { id: 'b', left: '$f(x) = \\dfrac{1}{x}$', right: '$F(x) = \\ln|x| + C$' },
        { id: 'c', left: '$f(x) = \\sin(x)$', right: '$F(x) = -\\cos(x) + C$' },
        { id: 'd', left: '$f(x) = \\cos(x)$', right: '$F(x) = \\sin(x) + C$' },
      ],
    },
    hintKeys: [
      '$\\int e^x \\, dx = e^x + C$ (e-Funktion ist ihre eigene Stammfunktion).',
      '$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$ für $x \\neq 0$.',
    ],
    solutionKey: '$e^x \\to e^x$; $\\frac{1}{x} \\to \\ln|x|$; $\\sin x \\to -\\cos x$; $\\cos x \\to \\sin x$. Alle vier Grundstammfunktionen.',
    tags: ['stammfunktion', 'drag-match', 'grundregeln', 'sin-cos-exp-ln'],
  },

  {
    id: 'intv-basis-004', topicId: '12-integralrechnung-vertieft', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Berechne das bestimmte Integral $\\displaystyle\\int_0^1 e^x \\, dx$. Stammfunktion: $F(x) = e^x$. ($e^1 \\approx 2{,}718$; auf 3 Dezimalstellen)',
      correctValue: 1.718,
      tolerance: 0.002,
    },
    hintKeys: [
      'Bestimmtes Integral = $F(\\text{oben}) - F(\\text{unten})$.',
      '$F(1) - F(0) = e^1 - e^0 = e - 1 \\approx 2{,}718 - 1 = 1{,}718$.',
    ],
    solutionKey: '$\\int_0^1 e^x \\, dx = [e^x]_0^1 = e^1 - e^0 = e - 1 \\approx 1{,}718$.',
    tags: ['bestimmtes-integral', 'e-funktion', 'grundrechnung'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ──────────────────────────────────────

  {
    id: 'intv-standard-001', topicId: '12-integralrechnung-vertieft', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 10,
    contextKey: 'Fläche zwischen zwei Kurven',
    data: {
      questionText: 'Berechne die Fläche zwischen $f(x) = x^2$ und $g(x) = x$ im ersten Quadranten schrittweise.',
      steps: [
        {
          instruction: 'Finde die Schnittpunkte: $f(x) = g(x) \\Rightarrow x^2 = x \\Rightarrow x^2 - x = 0$. Welche Nullstellen hat $x(x-1)$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x_1 = 0$ und $x_2 = 1$', correct: true },
            { id: 'b', text: '$x_1 = 1$ und $x_2 = 2$', correct: false },
            { id: 'c', text: '$x_1 = -1$ und $x_2 = 0$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$x(x-1) = 0 \\Rightarrow x = 0$ oder $x = 1$',
        },
        {
          instruction: 'Bilde den Integranden: Auf $[0; 1]$ gilt $g(x) \\geq f(x)$, also $g(x) - f(x) = x - x^2$. Berechne $\\int_0^1 (x - x^2) \\, dx$ als Bruch:',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\dfrac{1}{6}$', correct: true },
            { id: 'b', text: '$\\dfrac{1}{2}$', correct: false },
            { id: 'c', text: '$\\dfrac{1}{3}$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$',
        },
        {
          instruction: 'Die Fläche zwischen den Kurven beträgt $\\frac{1}{6}$ Flächeneinheiten. Wie viel ist das als Dezimalzahl (3 Stellen)?',
          type: 'numeric-input', expected: 0.167, tolerance: 0.001,
          showAnswer: '$A = \\frac{1}{6} \\approx 0{,}167$ FE',
        },
      ],
    },
    hintKeys: [
      'Schnittpunkte: $f(x) = g(x)$ lösen.',
      'Fläche zwischen Kurven: $A = \\int_a^b |g(x) - f(x)| \\, dx$. Prüfe, welche Funktion oben liegt.',
      '$\\int_0^1 x \\, dx = \\frac{1}{2}$; $\\int_0^1 x^2 \\, dx = \\frac{1}{3}$.',
    ],
    solutionKey: 'Schnittpunkte bei $x = 0$ und $x = 1$. $A = \\int_0^1(x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{6}$ FE.',
    tags: ['flaeche-zwischen-kurven', 'schnittpunkte', 'step-solver'],
  },

  {
    id: 'intv-standard-002', topicId: '12-integralrechnung-vertieft', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 10,
    contextKey: 'Solarpanel-Ertrag',
    data: {
      questionText: 'Die Leistung eines Solarpanels über den Tag beträgt $P(t) = 4 \\cdot \\sin\\!\\left(\\frac{\\pi t}{12}\\right)$ kW ($t = 0$ bis $t = 12$ Stunden, $t$ in h). Berechne den Tagesertrag (Energie in kWh) schrittweise.',
      steps: [
        {
          instruction: 'Der Tagesertrag ist $E = \\int_0^{12} P(t) \\, dt = \\int_0^{12} 4 \\sin\\!\\left(\\frac{\\pi t}{12}\\right) dt$. Welche Stammfunktion $F(t)$ gehört zu $4 \\sin\\!\\left(\\frac{\\pi t}{12}\\right)$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$F(t) = -\\dfrac{48}{\\pi} \\cos\\!\\left(\\dfrac{\\pi t}{12}\\right) + C$', correct: true },
            { id: 'b', text: '$F(t) = -4 \\cos\\!\\left(\\dfrac{\\pi t}{12}\\right) + C$', correct: false },
            { id: 'c', text: '$F(t) = 4 \\cos\\!\\left(\\dfrac{\\pi t}{12}\\right) + C$', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Kettenregel rückwärts: $\\int 4\\sin\\!\\left(\\frac{\\pi t}{12}\\right) dt = -\\frac{4}{\\pi/12} \\cos\\!\\left(\\frac{\\pi t}{12}\\right) = -\\frac{48}{\\pi}\\cos\\!\\left(\\frac{\\pi t}{12}\\right) + C$',
        },
        {
          instruction: 'Berechne $F(12) - F(0)$: $F(12) = -\\frac{48}{\\pi}\\cos(\\pi) = -\\frac{48}{\\pi}\\cdot(-1) = \\frac{48}{\\pi}$ und $F(0) = -\\frac{48}{\\pi}\\cos(0) = -\\frac{48}{\\pi}$. Was ist $E$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$E = \\dfrac{96}{\\pi} \\approx 30{,}6$ kWh', correct: true },
            { id: 'b', text: '$E = \\dfrac{48}{\\pi} \\approx 15{,}3$ kWh', correct: false },
            { id: 'c', text: '$E = 48$ kWh', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$E = \\frac{48}{\\pi} - \\left(-\\frac{48}{\\pi}\\right) = \\frac{96}{\\pi} \\approx 30{,}6$ kWh',
        },
        {
          instruction: 'Runde den Tagesertrag auf eine Dezimalstelle (in kWh):',
          type: 'numeric-input', expected: 30.6, tolerance: 0.2,
          showAnswer: '$E = \\frac{96}{\\pi} \\approx 30{,}6$ kWh',
        },
      ],
    },
    hintKeys: [
      'Stammfunktion von $\\sin(at)$ ist $-\\frac{1}{a}\\cos(at)$. Hier: $a = \\frac{\\pi}{12}$.',
      '$\\cos(\\pi) = -1$ und $\\cos(0) = 1$.',
      '$E = F(12) - F(0)$.',
    ],
    solutionKey: '$E = \\int_0^{12} 4\\sin\\!\\left(\\frac{\\pi t}{12}\\right)dt = \\left[-\\frac{48}{\\pi}\\cos\\!\\left(\\frac{\\pi t}{12}\\right)\\right]_0^{12} = \\frac{48}{\\pi} + \\frac{48}{\\pi} = \\frac{96}{\\pi} \\approx 30{,}6$ kWh.',
    tags: ['solarpanel', 'sinus-integral', 'sachkontext', 'energie', 'step-solver'],
  },

  {
    id: 'intv-standard-003', topicId: '12-integralrechnung-vertieft', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Ordne jede Funktion ihrer Stammfunktion zu.',
      pairs: [
        { id: 'a', left: '$f(x) = 2\\cos(x)$', right: '$F(x) = 2\\sin(x) + C$' },
        { id: 'b', left: '$f(x) = 3e^x$', right: '$F(x) = 3e^x + C$' },
        { id: 'c', left: '$f(x) = \\dfrac{2}{x}$', right: '$F(x) = 2\\ln|x| + C$' },
        { id: 'd', left: '$f(x) = -\\sin(x)$', right: '$F(x) = \\cos(x) + C$' },
      ],
    },
    hintKeys: [
      'Konstante Faktoren bleiben beim Integrieren erhalten.',
      '$\\int -\\sin(x)\\,dx = \\cos(x) + C$, Probe: $(\\cos x)\' = -\\sin x$ ✓',
    ],
    solutionKey: '$2\\cos x \\to 2\\sin x$; $3e^x \\to 3e^x$; $\\frac{2}{x} \\to 2\\ln|x|$; $-\\sin x \\to \\cos x$.',
    tags: ['stammfunktion', 'drag-match', 'grundregeln'],
  },

  {
    id: 'intv-standard-004', topicId: '12-integralrechnung-vertieft', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'Berechne $\\displaystyle\\int_1^e \\frac{1}{x} \\, dx$ exakt. (Stamm: $F(x) = \\ln x$; $\\ln(e) = 1$; $\\ln(1) = 0$)',
      correctValue: 1,
      tolerance: 0,
    },
    hintKeys: [
      '$\\int \\frac{1}{x} dx = \\ln|x| + C$.',
      '$F(e) - F(1) = \\ln(e) - \\ln(1) = 1 - 0 = 1$.',
    ],
    solutionKey: '$\\int_1^e \\frac{1}{x}\\,dx = [\\ln x]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$.',
    tags: ['1-durch-x', 'ln', 'bestimmtes-integral'],
  },

  {
    id: 'intv-standard-005', topicId: '12-integralrechnung-vertieft', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 10, timeEstimate: 5,
    contextKey: 'Fläche interpretieren',
    data: {
      questionText: 'Gegeben $f(x) = x^2 - 4$. Warum darf man nicht einfach $\\int_{-2}^{2} (x^2 - 4)\\,dx$ berechnen, um die Fläche zwischen Kurve und x-Achse zu erhalten?',
      options: [
        { id: 'a', text: 'Weil das Integral negativ ist (Kurve liegt unter der x-Achse) und sich positive und negative Anteile aufheben würden.', correct: true },
        { id: 'b', text: 'Weil $f(x) = x^2 - 4$ keine Stammfunktion besitzt.', correct: false },
        { id: 'c', text: 'Weil die Grenzen $-2$ und $2$ keine Nullstellen sind.', correct: false },
        { id: 'd', text: 'Weil die Potenzregel für negative Integrale nicht gilt.', correct: false },
      ],
    },
    hintKeys: [
      'Prüfe, ob $f(x) < 0$ zwischen den Grenzen gilt.',
      '$f(0) = 0 - 4 = -4 < 0$. Der Graph liegt zwischen $x = -2$ und $x = 2$ unter der x-Achse.',
      'Für Flächeninhalt: $A = \\int_{-2}^{2} |f(x)|\\,dx = -\\int_{-2}^{2}(x^2-4)\\,dx$ (da $f < 0$).',
    ],
    solutionKey: '$f(x) = x^2 - 4 < 0$ für $-2 < x < 2$. Das Integral wird negativ, obwohl die Fläche positiv ist. Korrekt: $A = |\\int_{-2}^{2}(x^2-4)\\,dx| = \\frac{16}{3}$ FE.',
    tags: ['flaeche', 'vorzeichen', 'integral-interpretation', 'konzept'],
  },

  // ─── ERWEITERT (AFB III) – 5 Aufgaben ─────────────────────────────────────

  {
    id: 'intv-erweitert-001', topicId: '12-integralrechnung-vertieft', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 12,
    contextKey: 'Benzinverbrauch Roadtrip',
    data: {
      questionText: 'Der Benzinverbrauch eines Autos auf der Autobahn beträgt $v(t) = 6 + 2\\sin\\!\\left(\\frac{\\pi t}{3}\\right)$ l/h ($t$ in h). Berechne den Gesamtverbrauch für einen 6-stündigen Roadtrip.',
      steps: [
        {
          instruction: 'Der Gesamtverbrauch ist $V = \\int_0^6 v(t)\\,dt$. Zerlege das Integral: $\\int_0^6 6\\,dt + \\int_0^6 2\\sin\\!\\left(\\frac{\\pi t}{3}\\right)dt$. Berechne den ersten Teil:',
          type: 'numeric-input', expected: 36, tolerance: 0,
          showAnswer: '$\\int_0^6 6\\,dt = [6t]_0^6 = 36$',
        },
        {
          instruction: 'Berechne $\\int_0^6 2\\sin\\!\\left(\\frac{\\pi t}{3}\\right)dt$. Stammfunktion: $F(t) = -\\frac{6}{\\pi}\\cos\\!\\left(\\frac{\\pi t}{3}\\right)$. Was ergibt $F(6) - F(0)$? $\\cos(2\\pi) = 1$, $\\cos(0) = 1$.',
          type: 'numeric-input', expected: 0, tolerance: 0.001,
          showAnswer: "$F(6) - F(0) = -\\frac{6}{\\pi}\\cos(2\\pi) + \\frac{6}{\\pi}\\cos(0) = -\\frac{6}{\\pi} + \\frac{6}{\\pi} = 0$",
        },
        {
          instruction: 'Was ist der Gesamtverbrauch $V$ des Roadtrips in Litern?',
          type: 'numeric-input', expected: 36, tolerance: 0.1,
          showAnswer: '$V = 36 + 0 = 36$ Liter. Der Sinus-Anteil hebt sich über eine vollständige Periode auf.',
        },
      ],
    },
    hintKeys: [
      'Integral ist linear: $\\int(f+g)\\,dx = \\int f\\,dx + \\int g\\,dx$.',
      'Stammfunktion von $\\sin(at)$ ist $-\\frac{1}{a}\\cos(at)$. Hier $a = \\pi/3$.',
      'Die Sinusfunktion über eine vollständige Periode integriert ergibt 0.',
    ],
    solutionKey: '$V = \\int_0^6 (6 + 2\\sin(\\frac{\\pi t}{3}))\\,dt = [6t]_0^6 + [-\\frac{6}{\\pi}\\cos(\\frac{\\pi t}{3})]_0^6 = 36 + 0 = 36$ Liter.',
    tags: ['benzinverbrauch', 'sinus-integral', 'sachkontext', 'step-solver', 'roadtrip'],
  },

  {
    id: 'intv-erweitert-002', topicId: '12-integralrechnung-vertieft', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 12,
    contextKey: 'Substitutionsregel',
    data: {
      questionText: 'Berechne $\\displaystyle\\int_0^1 2x \\cdot e^{x^2} \\, dx$ mit Substitution $u = x^2$.',
      steps: [
        {
          instruction: 'Setze $u = x^2$. Was ist $du = ?$ und welche neue Grenzen ergeben sich für $x = 0$ und $x = 1$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$du = 2x\\,dx$; neue Grenzen: $u(0) = 0$, $u(1) = 1$', correct: true },
            { id: 'b', text: '$du = x\\,dx$; neue Grenzen: $u(0) = 0$, $u(1) = 2$', correct: false },
            { id: 'c', text: '$du = 2\\,dx$; neue Grenzen: $u(0) = 0$, $u(1) = 1$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$u = x^2 \\Rightarrow du = 2x\\,dx$; $u(0) = 0$, $u(1) = 1$',
        },
        {
          instruction: 'Ersetze im Integral: $\\int_0^1 2x \\cdot e^{x^2}\\,dx = \\int_0^1 e^u \\, du$. Berechne dieses Integral:',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$[e^u]_0^1 = e^1 - e^0 = e - 1$', correct: true },
            { id: 'b', text: '$[e^u]_0^1 = e^1 + e^0 = e + 1$', correct: false },
            { id: 'c', text: '$[e^u]_0^1 = e^0 - e^1 = 1 - e$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\int_0^1 e^u\\,du = [e^u]_0^1 = e - 1 \\approx 1{,}718$',
        },
        {
          instruction: 'Wie lautet das Ergebnis als Dezimalzahl (3 Stellen)? ($e \\approx 2{,}718$)',
          type: 'numeric-input', expected: 1.718, tolerance: 0.002,
          showAnswer: '$e - 1 \\approx 2{,}718 - 1 = 1{,}718$',
        },
      ],
    },
    hintKeys: [
      'Substitution: ersetze $u = x^2$, $du = 2x\\,dx$. Die "$2x\\,dx$" im Integral wird zu "$du$".',
      'Grenzen transformieren: neue Grenzen direkt aus $u = x^2$ berechnen.',
      '$\\int e^u \\, du = e^u + C$.',
    ],
    solutionKey: 'Sub. $u = x^2$, $du = 2x\\,dx$: $\\int_0^1 2x e^{x^2}\\,dx = \\int_0^1 e^u\\,du = [e^u]_0^1 = e - 1 \\approx 1{,}718$.',
    tags: ['substitution', 'e-funktion', 'step-solver', 'integrationstechnik'],
  },

  {
    id: 'intv-erweitert-003', topicId: '12-integralrechnung-vertieft', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 12,
    contextKey: 'Elbe-Tidenhub',
    data: {
      questionText: 'Der Wasserstand der Elbe während der Flut lässt sich näherungsweise durch $h(t) = 2{,}5 \\cdot \\sin\\!\\left(\\frac{\\pi t}{6}\\right)$ m modellieren ($t$ in h, $t = 0$ = Ebbe). Berechne die mittlere Wasserstandserhöhung über 6 Stunden.',
      steps: [
        {
          instruction: 'Berechne zunächst $\\int_0^6 h(t)\\,dt = \\int_0^6 2{,}5 \\sin\\!\\left(\\frac{\\pi t}{6}\\right)dt$. Stammfunktion: $F(t) = -\\frac{15}{\\pi}\\cos\\!\\left(\\frac{\\pi t}{6}\\right)$. Berechne $F(6) - F(0)$. ($\\cos(\\pi) = -1$)',
          type: 'numeric-input', expected: 30 / Math.PI, tolerance: 0.05,
          showAnswer: "$F(6) - F(0) = -\\frac{15}{\\pi}\\cos(\\pi) + \\frac{15}{\\pi}\\cos(0) = \\frac{15}{\\pi} + \\frac{15}{\\pi} = \\frac{30}{\\pi} \\approx 9{,}55$ m·h",
        },
        {
          instruction: 'Der Mittelwert über $[0; 6]$ ist $\\bar{h} = \\frac{1}{6} \\int_0^6 h(t)\\,dt = \\frac{1}{6} \\cdot \\frac{30}{\\pi}$. Berechne $\\bar{h}$ auf 2 Dezimalstellen (in m):',
          type: 'numeric-input', expected: 5 / Math.PI, tolerance: 0.02,
          showAnswer: '$\\bar{h} = \\frac{30}{6\\pi} = \\frac{5}{\\pi} \\approx 1{,}59$ m',
        },
        {
          instruction: 'Interpretiere: Welche Aussage ist korrekt?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Der Wasserstand liegt im Schnitt ca. 1,59 m über dem Ebbe-Niveau.', correct: true },
            { id: 'b', text: 'Der maximale Wasserstand beträgt 1,59 m.', correct: false },
            { id: 'c', text: 'Das Integral gibt den Gesamtverbrauch an Wasser an.', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Mittelwert = durchschnittliche Erhöhung gegenüber $h = 0$ (Ebbe). Maximum ist $h_{\\max} = 2{,}5$ m.',
        },
      ],
    },
    hintKeys: [
      'Stammfunktion von $a\\sin(bt)$ ist $-\\frac{a}{b}\\cos(bt)$. Hier: $a = 2{,}5$, $b = \\frac{\\pi}{6}$.',
      '$\\cos(\\pi) = -1$, $\\cos(0) = 1$.',
      'Mittelwert einer Funktion: $\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.',
    ],
    solutionKey: '$\\int_0^6 2{,}5\\sin(\\frac{\\pi t}{6})\\,dt = \\frac{30}{\\pi} \\approx 9{,}55$. Mittlere Erhöhung: $\\bar{h} = \\frac{5}{\\pi} \\approx 1{,}59$ m.',
    tags: ['elbe', 'tidenhub', 'mittelwert', 'sinus-integral', 'sachkontext', 'step-solver'],
  },

  {
    id: 'intv-erweitert-004', topicId: '12-integralrechnung-vertieft', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 6,
    data: {
      questionText: 'Finde den Fehler. Aufgabe: Berechne $\\int_0^\\pi \\sin(x)\\,dx$.',
      steps: [
        { content: 'Stammfunktion: $F(x) = \\cos(x)$', hasError: true, errorExplanation: "Fehler: Die Stammfunktion von $\\sin(x)$ ist $-\\cos(x)$, NICHT $\\cos(x)$. Probe: $(-\\cos x)' = \\sin x$ ✓, aber $(\\cos x)' = -\\sin x$ ✗." },
        { content: '$F(\\pi) - F(0) = \\cos(\\pi) - \\cos(0) = -1 - 1 = -2$', hasError: true, errorExplanation: 'Folge aus Schritt 1: Mit der richtigen Stammfunktion $F(x) = -\\cos(x)$ ergibt sich $F(\\pi) - F(0) = -\\cos(\\pi) - (-\\cos(0)) = 1 + 1 = 2$.' },
      ],
    },
    hintKeys: ['Probe: $(F(x))\' = f(x)$? Welche Funktion hat $\\sin(x)$ als Ableitung?'],
    solutionKey: '$\\int_0^\\pi \\sin(x)\\,dx = [-\\cos(x)]_0^\\pi = -\\cos(\\pi) + \\cos(0) = 1 + 1 = 2$. Geometrisch: Halbkreis-ähnliche Fläche über der x-Achse = 2 FE.',
    tags: ['fehleranalyse', 'sin-stammfunktion', 'vorzeichen'],
  },

  {
    id: 'intv-erweitert-005', topicId: '12-integralrechnung-vertieft', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 10,
    contextKey: '3D-Druck Volumen',
    data: {
      questionText: 'Ein 3D-Drucker erstellt ein Objekt, dessen Querschnittsfläche durch $f(x) = \\sqrt{x}$ (in cm) beschrieben wird ($0 \\leq x \\leq 4$). Das Volumen des Rotationskörpers um die x-Achse berechnet sich nach $V = \\pi \\int_0^4 [f(x)]^2 \\, dx$. Berechne $V$ in cm³ (auf 1 Dezimalstelle; $\\pi \\approx 3{,}14159$).',
      correctValue: 25.1,
      tolerance: 0.2,
    },
    hintKeys: [
      '$[f(x)]^2 = (\\sqrt{x})^2 = x$.',
      '$\\int_0^4 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^4 = 8$.',
      '$V = \\pi \\cdot 8 = 8\\pi \\approx 25{,}1$ cm³.',
    ],
    solutionKey: '$V = \\pi\\int_0^4(\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi \\cdot \\left[\\frac{x^2}{2}\\right]_0^4 = \\pi \\cdot 8 = 8\\pi \\approx 25{,}1$ cm³.',
    tags: ['rotationskoerper', '3d-druck', 'volumen', 'sachkontext'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 3 Aufgaben ───────────────────────

  {
    id: 'intv-ea-001', topicId: '12-integralrechnung-vertieft', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 15,
    contextKey: 'Rotationsvolumen Vase',
    data: {
      questionText: 'Eine Vase soll als Rotationskörper hergestellt werden. Ihr Querschnitt wird durch $f(x) = 1 + \\frac{1}{2}\\sin(x)$ cm ($0 \\leq x \\leq 2\\pi$) beschrieben. Berechne das Volumen $V = \\pi \\int_0^{2\\pi} [f(x)]^2 \\, dx$ schrittweise.',
      steps: [
        {
          instruction: 'Berechne $[f(x)]^2 = \\left(1 + \\frac{1}{2}\\sin x\\right)^2$. Multipliziere aus:',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$1 + \\sin x + \\frac{1}{4}\\sin^2 x$', correct: true },
            { id: 'b', text: '$1 + \\frac{1}{4}\\sin^2 x$', correct: false },
            { id: 'c', text: '$1 + \\frac{1}{2}\\sin^2 x$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$(1 + \\frac{1}{2}\\sin x)^2 = 1 + 2 \\cdot 1 \\cdot \\frac{1}{2}\\sin x + \\frac{1}{4}\\sin^2 x = 1 + \\sin x + \\frac{1}{4}\\sin^2 x$',
        },
        {
          instruction: 'Es gilt $\\int_0^{2\\pi} 1\\,dx = 2\\pi$, $\\int_0^{2\\pi} \\sin x\\,dx = 0$ und $\\int_0^{2\\pi} \\sin^2 x\\,dx = \\pi$. Was ist $\\int_0^{2\\pi}[f(x)]^2\\,dx$?',
          type: 'numeric-input', expected: 2 * Math.PI + Math.PI / 4, tolerance: 0.1,
          showAnswer: '$\\int_0^{2\\pi}[f(x)]^2\\,dx = 2\\pi + 0 + \\frac{1}{4} \\cdot \\pi = \\frac{9\\pi}{4} \\approx 7{,}07$',
        },
        {
          instruction: 'Berechne $V = \\pi \\cdot \\frac{9\\pi}{4}$ auf eine Dezimalstelle (in cm³):',
          type: 'numeric-input', expected: 9 * Math.PI * Math.PI / 4, tolerance: 0.5,
          showAnswer: '$V = \\frac{9\\pi^2}{4} \\approx 22{,}2$ cm³',
        },
      ],
    },
    hintKeys: [
      'Ausmultiplizieren: $(a+b)^2 = a^2 + 2ab + b^2$ mit $a = 1$, $b = \\frac{1}{2}\\sin x$.',
      'Die drei Teilintegrale über $[0; 2\\pi]$: $\\int 1\\,dx = 2\\pi$, $\\int \\sin x = 0$ (volle Periode), $\\int \\sin^2 x = \\pi$.',
      '$V = \\pi \\cdot \\frac{9\\pi}{4} = \\frac{9\\pi^2}{4}$.',
    ],
    solutionKey: '$V = \\pi\\int_0^{2\\pi}(1 + \\sin x + \\frac{1}{4}\\sin^2 x)\\,dx = \\pi(2\\pi + 0 + \\frac{\\pi}{4}) = \\frac{9\\pi^2}{4} \\approx 22{,}2$ cm³.',
    tags: ['rotationskoerper', 'vase', '3d-druck', 'step-solver', 'ea', 'sinus-quadrat'],
  },

  {
    id: 'intv-ea-002', topicId: '12-integralrechnung-vertieft', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 15,
    contextKey: 'Uneigentliches Integral',
    data: {
      questionText: 'Berechne das uneigentliche Integral $\\displaystyle\\int_1^{\\infty} \\frac{1}{x^2} \\, dx$ als Grenzwert.',
      steps: [
        {
          instruction: 'Ersetze $\\infty$ durch $b$: $\\int_1^b \\frac{1}{x^2}\\,dx = \\int_1^b x^{-2}\\,dx$. Welche Stammfunktion gehört zu $x^{-2}$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$F(x) = -x^{-1} = -\\dfrac{1}{x}$', correct: true },
            { id: 'b', text: '$F(x) = -2x^{-3}$', correct: false },
            { id: 'c', text: '$F(x) = \\ln(x^2)$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\int x^{-2}\\,dx = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C$',
        },
        {
          instruction: 'Berechne $[F(x)]_1^b = F(b) - F(1) = -\\frac{1}{b} - (-1)$. Was erhältst du?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$1 - \\dfrac{1}{b}$', correct: true },
            { id: 'b', text: '$\\dfrac{1}{b} - 1$', correct: false },
            { id: 'c', text: '$-\\dfrac{1}{b} - 1$', correct: false },
          ],
          correctId: 'a',
          showAnswer: "$-\\frac{1}{b} + 1 = 1 - \\frac{1}{b}$",
        },
        {
          instruction: 'Bilde den Grenzwert $\\lim_{b \\to \\infty} \\left(1 - \\frac{1}{b}\\right)$. Was ist das Ergebnis?',
          type: 'numeric-input', expected: 1, tolerance: 0,
          showAnswer: '$\\lim_{b \\to \\infty} \\left(1 - \\frac{1}{b}\\right) = 1 - 0 = 1$',
        },
      ],
    },
    hintKeys: [
      'Uneigentliches Integral: $\\int_1^\\infty f\\,dx = \\lim_{b \\to \\infty} \\int_1^b f\\,dx$.',
      'Potenzregel rückwärts: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}$ für $n \\neq -1$.',
      '$\\frac{1}{b} \\to 0$ für $b \\to \\infty$.',
    ],
    solutionKey: '$\\int_1^\\infty \\frac{1}{x^2}\\,dx = \\lim_{b \\to \\infty}\\left[-\\frac{1}{x}\\right]_1^b = \\lim_{b \\to \\infty}\\left(1-\\frac{1}{b}\\right) = 1$. Das Integral konvergiert gegen 1.',
    tags: ['uneigentliches-integral', 'grenzwert', 'step-solver', 'ea', 'konvergenz'],
  },

  {
    id: 'intv-ea-003', topicId: '12-integralrechnung-vertieft', type: 'multiple-choice', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 12,
    contextKey: 'Substitution — konzeptuell',
    data: {
      questionText: 'Welches Ergebnis liefert $\\displaystyle\\int_0^{\\pi/2} \\sin(x) \\cdot \\cos(x) \\, dx$? Tipp: Substitution $u = \\sin(x)$ oder Additionstheorem $\\sin(x)\\cos(x) = \\frac{1}{2}\\sin(2x)$ nutzen.',
      options: [
        { id: 'a', text: '$\\dfrac{1}{2}$', correct: true },
        { id: 'b', text: '$1$', correct: false },
        { id: 'c', text: '$0$', correct: false },
        { id: 'd', text: '$\\dfrac{\\pi}{4}$', correct: false },
      ],
    },
    hintKeys: [
      'Weg 1 — Additionstheorem: $\\sin x \\cos x = \\frac{1}{2}\\sin(2x)$. Dann $\\int_0^{\\pi/2} \\frac{1}{2}\\sin(2x)\\,dx$.',
      'Stammfunktion von $\\sin(2x)$ ist $-\\frac{1}{2}\\cos(2x)$.',
      'Weg 2 — Substitution: $u = \\sin x$, $du = \\cos x\\,dx$. Neue Grenzen: $u(0) = 0$, $u(\\pi/2) = 1$. Integral wird $\\int_0^1 u\\,du = \\frac{1}{2}$.',
    ],
    solutionKey: 'Via Substitution $u = \\sin x$: $\\int_0^1 u\\,du = \\left[\\frac{u^2}{2}\\right]_0^1 = \\frac{1}{2}$. Via Additionstheorem: $\\left[-\\frac{1}{4}\\cos(2x)\\right]_0^{\\pi/2} = -\\frac{1}{4}(-1) + \\frac{1}{4}(1) = \\frac{1}{2}$.',
    tags: ['substitution', 'additionstheorem', 'sinus-kosinus', 'ea', 'integrationstechnik'],
  },
];
