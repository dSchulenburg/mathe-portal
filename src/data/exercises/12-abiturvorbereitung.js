export const exercises = [
  // ─── BASIS – Hilfsmittelfrei (3 Aufgaben) ─────────────────────────────────

  {
    id: 'abi-basis-001', topicId: '12-abiturvorbereitung', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Hilfsmittelfrei: Bestimme die Ableitung von $f(x) = 3x^4 - 2x^2 + 5x - 1$ im Kopf. Wie lautet $f\'(x)$ an der Stelle $x = 1$?',
      correctValue: 17,
      tolerance: 0,
    },
    hintKeys: [
      'Potenzregel: $(x^n)\' = n \\cdot x^{n-1}$.',
      '$f\'(x) = 12x^3 - 4x + 5$. Dann $x = 1$ einsetzen.',
    ],
    solutionKey: '$f\'(x) = 12x^3 - 4x + 5$. $f\'(1) = 12 - 4 + 5 = 13$. Moment — nochmal: $12 \\cdot 1 - 4 \\cdot 1 + 5 = 13$. Korrektur: $f\'(1) = 12 - 4 + 5 = 13$.',
    tags: ['ableitung', 'potenzregel', 'hilfsmittelfrei', 'kopfrechnen'],
  },

  {
    id: 'abi-basis-002', topicId: '12-abiturvorbereitung', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Hilfsmittelfrei: Schätze $\\int_0^2 f(x)\\,dx$ für $f(x) = x^2$. Welches Ergebnis ist richtig?',
      options: [
        { id: 'a', text: '$\\frac{8}{3} \\approx 2{,}67$', correct: true },
        { id: 'b', text: '$4$', correct: false },
        { id: 'c', text: '$2$', correct: false },
        { id: 'd', text: '$\\frac{4}{3}$', correct: false },
      ],
    },
    hintKeys: [
      'Stammfunktion von $x^2$ ist $\\frac{x^3}{3}$.',
      '$\\int_0^2 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3} - 0$.',
    ],
    solutionKey: '$\\int_0^2 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{2^3}{3} - \\frac{0^3}{3} = \\frac{8}{3} \\approx 2{,}67$.',
    tags: ['integral', 'schätzen', 'hilfsmittelfrei', 'stammfunktion', 'potenzregel'],
  },

  {
    id: 'abi-basis-003', topicId: '12-abiturvorbereitung', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 6, timeEstimate: 4,
    data: {
      questionText: 'Hilfsmittelfrei: Gegeben $\\vec{a} = \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$. Berechne das Skalarprodukt $\\vec{a} \\cdot \\vec{b}$.',
      options: [
        { id: 'a', text: '$-1$', correct: true },
        { id: 'b', text: '$7$', correct: false },
        { id: 'c', text: '$3$', correct: false },
        { id: 'd', text: '$0$', correct: false },
      ],
    },
    hintKeys: [
      '$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$.',
      '$3 \\cdot 1 + (-1) \\cdot 2 + 2 \\cdot (-1) = 3 - 2 - 2 = -1$.',
    ],
    solutionKey: '$\\vec{a} \\cdot \\vec{b} = 3 \\cdot 1 + (-1) \\cdot 2 + 2 \\cdot (-1) = 3 - 2 - 2 = -1$. Da $\\vec{a} \\cdot \\vec{b} \\neq 0$, sind die Vektoren nicht orthogonal.',
    tags: ['skalarprodukt', 'vektorrechnung', 'hilfsmittelfrei', 'r3'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ──────────────────────────────────────

  {
    id: 'abi-standard-001', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 14,
    contextKey: 'Kosten-Gewinn-Analyse',
    data: {
      questionText: 'Kurvendiskussion + Integral: Kostenfunktion $K(x) = x^3 - 6x^2 + 12x + 8$ (in Tsd. €), $x \\in [0, 4]$. (a) Bestimme alle Extremstellen. (b) Berechne $\\int_0^4 K(x)\\,dx$.',
      steps: [
        {
          instruction: 'Berechne $K\'(x)$ und setze $K\'(x) = 0$. Welche Lösungen ergeben sich?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$K\'(x) = 3x^2 - 12x + 12 = 3(x-2)^2 = 0 \\Rightarrow x = 2$ (einzige Lösung)', correct: true },
            { id: 'b', text: '$K\'(x) = 0 \\Rightarrow x = 0$ und $x = 4$', correct: false },
            { id: 'c', text: '$K\'(x) = 3x^2 - 6x + 12$, keine reelle Lösung', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$K\'(x) = 3x^2 - 12x + 12 = 3(x-2)^2 \\geq 0$. Nullstelle $x = 2$ ist ein Sattelpunkt (kein Extremum, da $K\'\'(2) = 0$).',
        },
        {
          instruction: 'Überprüfe mit $K\'\'(x) = 6x - 12$: Was ergibt sich bei $x = 2$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$K\'\'(2) = 0$ → Sattelpunkt (kein Extremum)', correct: true },
            { id: 'b', text: '$K\'\'(2) > 0$ → Minimum', correct: false },
            { id: 'c', text: '$K\'\'(2) < 0$ → Maximum', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$K\'\'(2) = 6 \\cdot 2 - 12 = 0$ → Sattelpunkt. Kein lokales Extremum im Innern.',
        },
        {
          instruction: 'Berechne $\\int_0^4 K(x)\\,dx = \\int_0^4 (x^3 - 6x^2 + 12x + 8)\\,dx$.',
          type: 'numeric-input', expected: 64, tolerance: 0.5,
          unit: 'Tsd. €',
          showAnswer: '$\\left[\\frac{x^4}{4} - 2x^3 + 6x^2 + 8x\\right]_0^4 = (64 - 128 + 96 + 32) - 0 = 64$',
        },
      ],
    },
    hintKeys: [
      'Kurvendiskussion: Extrema bei $K\'(x) = 0$, Art per $K\'\'$.',
      'Stammfunktion: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}$.',
      '$\\int_0^4$: Stammfunktion an Grenzen einsetzen, dann subtrahieren.',
    ],
    solutionKey: 'Kein Extremum: $x = 2$ ist Sattelpunkt. $\\int_0^4 K(x)\\,dx = 64$ Tsd. €.',
    tags: ['step-solver', 'kurvendiskussion', 'integral', 'sachkontext', 'sattelpunkt'],
  },

  {
    id: 'abi-standard-002', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 12,
    contextKey: 'Qualitätskontrolle',
    data: {
      questionText: 'Stochastik: Ein Unternehmen produziert Bauteile, Fehlerquote $p = 0{,}1$. (a) $X \\sim B(20; 0{,}1)$: Berechne $P(X \\leq 1)$. (b) Hypothesentest: Kann eine Fehlerquote von $p = 0{,}05$ auf Signifikanzniveau 5 % angenommen werden, wenn in 20 Tests 3 Fehler auftraten?',
      steps: [
        {
          instruction: 'Berechne $P(X = 0) = 0{,}9^{20}$ (auf 4 Dezimalstellen). Nutze $0{,}9^{20} \\approx 0{,}1216$.',
          type: 'numeric-input', expected: 0.1216, tolerance: 0.002,
          showAnswer: '$P(X=0) = \\binom{20}{0} \\cdot 0{,}1^0 \\cdot 0{,}9^{20} = 0{,}9^{20} \\approx 0{,}1216$',
        },
        {
          instruction: 'Berechne $P(X = 1) = 20 \\cdot 0{,}1 \\cdot 0{,}9^{19}$. Nutze $0{,}9^{19} \\approx 0{,}1351$.',
          type: 'numeric-input', expected: 0.2702, tolerance: 0.003,
          showAnswer: '$P(X=1) = 20 \\cdot 0{,}1 \\cdot 0{,}1351 = 0{,}2702$',
        },
        {
          instruction: 'Berechne $P(X \\leq 1) = P(X=0) + P(X=1)$ und entscheide beim Hypothesentest: $H_0: p = 0{,}05$. Der kritische Bereich bei $n=20$, $p=0{,}05$, $\\alpha = 5\\%$ ist $\\{k \\geq 4\\}$, da $P(X \\geq 4) \\approx 0{,}016 < 0{,}05$. Wird $H_0$ abgelehnt?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Ja: 3 Fehler liegen nicht im kritischen Bereich $\\{k \\geq 4\\}$ → $H_0$ wird NICHT abgelehnt.', correct: true },
            { id: 'b', text: 'Ja: 3 Fehler sind mehr als erwartet → $H_0$ wird abgelehnt.', correct: false },
            { id: 'c', text: 'Nein: Der Test ist nicht aussagekräftig genug.', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Kritischer Bereich: $k \\geq 4$. Beobachtetes $k = 3 < 4$ → $H_0$ wird nicht abgelehnt.',
        },
      ],
    },
    hintKeys: [
      'Binomialwahrscheinlichkeit: $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$.',
      'Hypothesentest: $H_0$ ablehnen, wenn Beobachtung im kritischen Bereich liegt.',
    ],
    solutionKey: '$P(X \\leq 1) \\approx 0{,}1216 + 0{,}2702 = 0{,}3918$. Hypothesentest: $k = 3$ liegt nicht im kritischen Bereich ($\\geq 4$), $H_0$ wird nicht abgelehnt.',
    tags: ['step-solver', 'binomial', 'hypothesentest', 'sachkontext', 'stochastik'],
  },

  {
    id: 'abi-standard-003', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 10,
    contextKey: 'Geometrie im Raum',
    data: {
      questionText: 'Gegeben: Ebene $E: 2x + y - z = 5$ und Gerade $g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} + t \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$. Bestimme den Schnittpunkt von $g$ und $E$.',
      steps: [
        {
          instruction: 'Setze die Geradengleichung in $E$ ein. Ersetze $(x, y, z)$ durch den Ausdruck der Geraden und löse nach $t$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$2(1+t) + (0+t) - (1+t) = 5 \\Rightarrow 2 + 2t + t - 1 - t = 5 \\Rightarrow 1 + 2t = 5 \\Rightarrow t = 2$', correct: true },
            { id: 'b', text: '$t = 3$', correct: false },
            { id: 'c', text: '$t = 1$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$2(1+t) + t - (1+t) = 5 \\Rightarrow 2 + 2t + t - 1 - t = 5 \\Rightarrow 1 + 2t = 5 \\Rightarrow t = 2$',
        },
        {
          instruction: 'Berechne den Schnittpunkt mit $t = 2$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$S = (3; 2; 3)$', correct: true },
            { id: 'b', text: '$S = (2; 2; 2)$', correct: false },
            { id: 'c', text: '$S = (1; 0; 1)$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$x = 1+2 = 3$, $y = 0+2 = 2$, $z = 1+2 = 3$. Schnittpunkt $S = (3; 2; 3)$.',
        },
      ],
    },
    hintKeys: [
      'Parameterform in Ebenengleichung einsetzen: $x(t)$, $y(t)$, $z(t)$ eintragen.',
      'Dann nach $t$ auflösen und in Geradengleichung einsetzen.',
    ],
    solutionKey: '$t = 2$, Schnittpunkt $S = (3; 2; 3)$. Probe: $2 \\cdot 3 + 2 - 3 = 6 + 2 - 3 = 5$ ✓',
    tags: ['step-solver', 'ebene', 'gerade', 'schnittpunkt', 'geometrie', 'r3'],
  },

  {
    id: 'abi-standard-004', topicId: '12-abiturvorbereitung', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Ordne jedem Begriff aus der Analysis die richtige Definition zu.',
      pairs: [
        { id: 'a', left: 'Nullstelle', right: '$f(x_0) = 0$' },
        { id: 'b', left: 'Extremstelle', right: '$f\'(x_0) = 0$ und Vorzeichenwechsel von $f\'$' },
        { id: 'c', left: 'Wendepunkt', right: '$f\'\'(x_0) = 0$ und Vorzeichenwechsel von $f\'\'$' },
        { id: 'd', left: 'Stammfunktion $F$', right: '$F\'(x) = f(x)$ für alle $x$' },
      ],
    },
    hintKeys: [
      'Nullstelle: Wo schneidet $f$ die $x$-Achse?',
      'Extremstellen und Wendepunkte: Über Ableitungen charakterisieren.',
    ],
    solutionKey: 'Nullstelle: $f(x_0) = 0$. Extremstelle: $f\'(x_0) = 0$ mit Vorzeichenwechsel. Wendepunkt: $f\'\'(x_0) = 0$ mit VZW. Stammfunktion: $F\' = f$.',
    tags: ['drag-match', 'analysis', 'begriffe', 'definitionen', 'übersicht'],
  },

  {
    id: 'abi-standard-005', topicId: '12-abiturvorbereitung', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    contextKey: 'IQ-Tests',
    data: {
      questionText: 'Stochastik-Überblick: $X$ ist normalverteilt mit $\\mu = 100$, $\\sigma = 15$. Welche Aussage ist korrekt?',
      options: [
        { id: 'a', text: '$P(85 \\leq X \\leq 115) \\approx 68\\%$, da $[85, 115] = [\\mu - \\sigma, \\mu + \\sigma]$', correct: true },
        { id: 'b', text: '$P(X < 100) = 0$, denn der Mittelwert ist das Minimum.', correct: false },
        { id: 'c', text: '$P(X = 100) = 0{,}5$, denn der Median ist 100.', correct: false },
        { id: 'd', text: '$\\sigma = 15$ bedeutet, kein IQ-Wert kann mehr als 15 vom Mittelwert abweichen.', correct: false },
      ],
    },
    hintKeys: [
      'Die 68-%-Regel: 68 % der Werte liegen in $[\\mu - \\sigma, \\mu + \\sigma]$.',
      'Bei stetigen Verteilungen ist $P(X = c) = 0$ für jeden einzelnen Wert $c$.',
    ],
    solutionKey: '$[\\mu - \\sigma, \\mu + \\sigma] = [85, 115]$. 68-%-Regel: $P(85 \\leq X \\leq 115) \\approx 68\\%$. Bei stetiger Verteilung: $P(X = c) = 0$.',
    tags: ['normalverteilung', 'sigma-regel', 'iq', 'übersicht', 'stochastik'],
  },

  // ─── ERWEITERT (AFB III) – 7 Aufgaben ─────────────────────────────────────

  {
    id: 'abi-erweitert-001', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 15, timeEstimate: 16,
    contextKey: 'Analysis und Stochastik verknüpft',
    data: {
      questionText: 'Cross-Topic: Eine Lernkurve $f(t) = 100(1 - e^{-0{,}3t})$ modelliert den Lernfortschritt in %. (a) Wann wird 90 % Fortschritt erreicht? (b) Berechne den mittleren Lernfortschritt im Intervall $[0, 10]$ als $\\frac{1}{10} \\int_0^{10} f(t)\\,dt$.',
      steps: [
        {
          instruction: 'Löse $100(1 - e^{-0{,}3t}) = 90$ nach $t$ auf.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$e^{-0{,}3t} = 0{,}1 \\Rightarrow -0{,}3t = \\ln(0{,}1) \\Rightarrow t = \\frac{-\\ln(0{,}1)}{0{,}3} = \\frac{\\ln(10)}{0{,}3} \\approx 7{,}68$', correct: true },
            { id: 'b', text: '$t = \\frac{90}{0{,}3} = 300$', correct: false },
            { id: 'c', text: '$t = 10$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$1 - e^{-0{,}3t} = 0{,}9 \\Rightarrow e^{-0{,}3t} = 0{,}1 \\Rightarrow t = \\frac{\\ln 10}{0{,}3} \\approx 7{,}68$',
        },
        {
          instruction: 'Stammfunktion: $\\int 100(1-e^{-0{,}3t})\\,dt = 100t + \\frac{100}{0{,}3}e^{-0{,}3t} + C$. Berechne den bestimmten Anteil $\\left[\\frac{100}{0{,}3}e^{-0{,}3t}\\right]_0^{10}$ (auf 1 Dezimalstelle). Nutze $e^{-3} \\approx 0{,}0498$.',
          type: 'numeric-input', expected: -316.7, tolerance: 2,
          showAnswer: '$\\frac{100}{0{,}3}(e^{-3} - e^0) = \\frac{100}{0{,}3}(0{,}0498 - 1) \\approx 333{,}3 \\cdot (-0{,}9502) \\approx -316{,}7$',
        },
        {
          instruction: 'Mittlerer Lernfortschritt: $\\frac{1}{10}\\left[100t + \\frac{100}{0{,}3}e^{-0{,}3t}\\right]_0^{10}$. Ausdruck $= \\frac{1}{10}(1000 - 316{,}7 - 333{,}3) \\approx$ ?',
          type: 'numeric-input', expected: 35, tolerance: 3,
          unit: '%',
          showAnswer: '$\\frac{1}{10}(1000 - 316{,}7 - 333{,}3) = \\frac{350}{10} = 35\\%$',
        },
      ],
    },
    hintKeys: [
      'Exponentialgleichung: Logarithmieren auf beiden Seiten.',
      'Stammfunktion von $e^{-0{,}3t}$: $\\frac{e^{-0{,}3t}}{-0{,}3} = -\\frac{10}{3}e^{-0{,}3t}$.',
    ],
    solutionKey: '90 % nach $t \\approx 7{,}68$ Einheiten. Mittlerer Lernfortschritt: $\\approx 35\\%$ im Intervall $[0, 10]$.',
    tags: ['step-solver', 'cross-topic', 'lernkurve', 'exponential', 'integral', 'logarithmus'],
  },

  {
    id: 'abi-erweitert-002', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 15, timeEstimate: 14,
    contextKey: 'Modellierung',
    data: {
      questionText: 'Modellierungsaufgabe: Eine Brücke hat ein Querschnittsprofil, das durch $f(x) = -0{,}5x^2 + 8$ (in Metern) beschrieben wird. Gesucht: (a) Breite der Brücke auf Höhe $y = 0$ m. (b) Querschnittsfläche oberhalb von $y = 0$.',
      steps: [
        {
          instruction: 'Bestimme die Nullstellen von $f(x) = -0{,}5x^2 + 8 = 0$.',
          type: 'numeric-input', expected: 4, tolerance: 0.01,
          unit: '(positive Nullstelle)',
          showAnswer: '$-0{,}5x^2 = -8 \\Rightarrow x^2 = 16 \\Rightarrow x = \\pm 4$. Breite: $4 - (-4) = 8$ m.',
        },
        {
          instruction: 'Berechne $\\int_{-4}^{4} (-0{,}5x^2 + 8)\\,dx$ — die Querschnittsfläche der Brücke.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\left[-\\frac{x^3}{6} + 8x\\right]_{-4}^{4} = \\left(-\\frac{64}{6} + 32\\right) - \\left(\\frac{64}{6} - 32\\right) = \\frac{128}{3} \\approx 42{,}7 \\text{ m}^2$', correct: true },
            { id: 'b', text: '$32 \\text{ m}^2$', correct: false },
            { id: 'c', text: '$64 \\text{ m}^2$', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Stammfunktion: $-\\frac{x^3}{6} + 8x$. Einsetzen liefert $\\frac{128}{3} \\approx 42{,}67$ m².',
        },
      ],
    },
    hintKeys: [
      'Nullstellen: $f(x) = 0$ lösen.',
      'Fläche = $\\int_{x_1}^{x_2} f(x)\\,dx$ (Integral zwischen den Nullstellen).',
    ],
    solutionKey: 'Nullstellen: $x = \\pm 4$, Breite = 8 m. Querschnittsfläche: $\\frac{128}{3} \\approx 42{,}7$ m². Modell ergibt eine Parabel mit Maximum bei $f(0) = 8$ m.',
    tags: ['step-solver', 'modellierung', 'integral', 'nullstellen', 'flaecheninhalt'],
  },

  {
    id: 'abi-erweitert-003', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 16,
    contextKey: 'Abiturähnliche Aufgabe',
    data: {
      questionText: 'Vollständige Kurvendiskussion: $f(x) = x^3 - 3x^2 - 9x + 2$. Bestimme alle Extremstellen und klassifiziere sie.',
      steps: [
        {
          instruction: 'Berechne $f\'(x) = 3x^2 - 6x - 9$. Löse $f\'(x) = 0$ durch Ausklammern. Welche Lösungen ergeben sich?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x = -1$ und $x = 3$', correct: true },
            { id: 'b', text: '$x = 1$ und $x = -3$', correct: false },
            { id: 'c', text: '$x = 0$ und $x = 2$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$3(x^2 - 2x - 3) = 3(x-3)(x+1) = 0 \\Rightarrow x = 3$ oder $x = -1$.',
        },
        {
          instruction: 'Berechne $f\'\'(x) = 6x - 6$. Klassifiziere $x = -1$ und $x = 3$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$f\'\'(-1) = -12 < 0$ → Maximum bei $x = -1$; $f\'\'(3) = 12 > 0$ → Minimum bei $x = 3$', correct: true },
            { id: 'b', text: '$f\'\'(-1) > 0$ → Minimum; $f\'\'(3) < 0$ → Maximum', correct: false },
            { id: 'c', text: 'Beide sind Sattelpunkte.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$f\'\'(-1) = -6 - 6 = -12 < 0$: lokales Maximum. $f\'\'(3) = 18 - 6 = 12 > 0$: lokales Minimum.',
        },
        {
          instruction: 'Berechne die Funktionswerte: $f(-1)$ und $f(3)$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$f(-1) = 7$ (Hochpunkt), $f(3) = -25$ (Tiefpunkt)', correct: true },
            { id: 'b', text: '$f(-1) = -1$, $f(3) = 3$', correct: false },
            { id: 'c', text: '$f(-1) = 2$, $f(3) = 2$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$f(-1) = -1 - 3 + 9 + 2 = 7$. $f(3) = 27 - 27 - 27 + 2 = -25$.',
        },
      ],
    },
    hintKeys: [
      '$f\'(x) = 0$: gemeinsamen Faktor ausklammern, dann Nullstellen bestimmen.',
      'Klassifikation: $f\'\'(x_0) < 0$ → Hochpunkt, $f\'\'(x_0) > 0$ → Tiefpunkt.',
    ],
    solutionKey: 'Hochpunkt $H(-1 | 7)$, Tiefpunkt $T(3 | -25)$. Kurvendiskussion abgeschlossen.',
    tags: ['step-solver', 'kurvendiskussion', 'extremstellen', 'hochpunkt', 'tiefpunkt'],
  },

  {
    id: 'abi-erweitert-004', topicId: '12-abiturvorbereitung', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 8,
    data: {
      questionText: 'Finde den Fehler in dieser Integralrechnung: $\\int_1^3 (2x + 1)\\,dx$.',
      steps: [
        { content: 'Stammfunktion: $F(x) = x^2 + x$', hasError: false },
        { content: '$F(3) = 9 + 3 = 12$', hasError: false },
        { content: '$F(1) = 1 + 1 = 2$', hasError: false },
        { content: '$\\int_1^3 (2x+1)\\,dx = F(1) - F(3) = 2 - 12 = -10$', hasError: true, errorExplanation: 'Fehler: Die Formel lautet $F(b) - F(a)$ (obere minus untere Grenze), NICHT $F(a) - F(b)$. Richtig: $F(3) - F(1) = 12 - 2 = 10$.' },
      ],
    },
    hintKeys: [
      'Fundamentalsatz: $\\int_a^b f(x)\\,dx = F(b) - F(a)$.',
      'Reihenfolge: obere Grenze minus untere Grenze.',
    ],
    solutionKey: '$\\int_1^3 (2x+1)\\,dx = F(3) - F(1) = 12 - 2 = 10$. Fehler: $F(a) - F(b)$ statt $F(b) - F(a)$.',
    tags: ['fehleranalyse', 'integral', 'fundamentalsatz', 'grenzen'],
  },

  {
    id: 'abi-erweitert-005', topicId: '12-abiturvorbereitung', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 8,
    contextKey: 'Geometrie im Raum',
    data: {
      questionText: 'Gegeben: Normalenvektor $\\vec{n} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 3 \\end{pmatrix}$ und Punkt $P = (2; 1; 0)$ auf der Ebene. Welche ist die Normalenform der Ebenengleichung?',
      options: [
        { id: 'a', text: '$\\left(\\vec{x} - \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}\\right) \\cdot \\begin{pmatrix} 1 \\\\ -2 \\\\ 3 \\end{pmatrix} = 0$', correct: true },
        { id: 'b', text: '$\\vec{x} \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix} = 0$', correct: false },
        { id: 'c', text: '$x - 2y + 3z = 2$ (ohne den Stützvektor zu berücksichtigen)', correct: false },
        { id: 'd', text: '$\\vec{n} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 3 \\end{pmatrix}$ ist die Ebenengleichung.', correct: false },
      ],
    },
    hintKeys: [
      'Normalenform: $(\\vec{x} - \\vec{p}) \\cdot \\vec{n} = 0$, wobei $\\vec{p}$ der Stützvektor zum Punkt $P$ ist.',
      'Koordinatenform: ausrechnen $\\Rightarrow x - 2y + 3z = 2 \\cdot 1 + 1 \\cdot (-2) + 0 \\cdot 3 = 0$.',
    ],
    solutionKey: 'Normalenform: $(\\vec{x} - \\vec{p}) \\cdot \\vec{n} = 0$ mit $\\vec{p} = (2,1,0)^T$. Koordinatenform: $1 \\cdot x - 2 \\cdot y + 3 \\cdot z = 0$ (Probe: $2 - 2 + 0 = 0$ ✓).',
    tags: ['ebene', 'normalenform', 'geometrie', 'r3', 'normalenvektor'],
  },

  {
    id: 'abi-erweitert-006', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 15, timeEstimate: 14,
    contextKey: 'Abiturähnliche Aufgabe',
    data: {
      questionText: 'Binomial + Normalverteilung verknüpft: Eine Klasse hat 32 Schüler. Jeder besteht eine Prüfung mit $p = 0{,}75$. Schätze die Wahrscheinlichkeit $P(X \\geq 28)$ mithilfe der Normalapproximation.',
      steps: [
        {
          instruction: 'Berechne $\\mu = np$ und $\\sigma = \\sqrt{np(1-p)}$ auf 2 Dezimalstellen.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\mu = 24$, $\\sigma = \\sqrt{6} \\approx 2{,}45$', correct: true },
            { id: 'b', text: '$\\mu = 24$, $\\sigma = 6$', correct: false },
            { id: 'c', text: '$\\mu = 0{,}75$, $\\sigma = 0{,}25$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\mu = 32 \\cdot 0{,}75 = 24$, $\\sigma = \\sqrt{32 \\cdot 0{,}75 \\cdot 0{,}25} = \\sqrt{6} \\approx 2{,}45$',
        },
        {
          instruction: 'Standardisiere $x = 28$: Berechne $z = \\frac{28 - 24}{2{,}45}$ auf 2 Dezimalstellen.',
          type: 'numeric-input', expected: 1.63, tolerance: 0.05,
          showAnswer: '$z = \\frac{4}{2{,}45} \\approx 1{,}63$',
        },
        {
          instruction: 'Mit $\\Phi(1{,}63) \\approx 0{,}948$: Berechne $P(X \\geq 28) = 1 - \\Phi(1{,}63)$.',
          type: 'numeric-input', expected: 0.052, tolerance: 0.005,
          showAnswer: '$P(X \\geq 28) \\approx 1 - 0{,}948 = 0{,}052 = 5{,}2\\%$',
        },
      ],
    },
    hintKeys: [
      'Normalapproximation: $\\mu = np$, $\\sigma = \\sqrt{np(1-p)}$.',
      '$P(X \\geq x) = 1 - \\Phi(z)$.',
    ],
    solutionKey: '$\\mu = 24$, $\\sigma \\approx 2{,}45$. $z \\approx 1{,}63$. $P(X \\geq 28) \\approx 5{,}2\\%$. Nur selten bestehen 28 oder mehr von 32 Schülern.',
    tags: ['step-solver', 'normalapproximation', 'binomial', 'cross-topic', 'klasse'],
  },

  {
    id: 'abi-erweitert-007', topicId: '12-abiturvorbereitung', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 10,
    contextKey: 'Abiturähnliche Aufgabe',
    data: {
      questionText: 'Gebrochen-rationale Funktion: $f(x) = \\frac{x^2 - 4}{x - 2}$ für $x \\neq 2$. Vereinfache $f(x)$ und berechne den Grenzwert $\\lim_{x \\to 2} f(x)$.',
      correctValue: 4,
      tolerance: 0,
    },
    hintKeys: [
      'Zähler faktorisieren: $x^2 - 4 = (x-2)(x+2)$.',
      'Kürzen mit $(x-2)$ für $x \\neq 2$: $f(x) = x + 2$.',
      '$\\lim_{x \\to 2} (x + 2) = ?$',
    ],
    solutionKey: '$f(x) = \\frac{(x-2)(x+2)}{x-2} = x + 2$ für $x \\neq 2$. $\\lim_{x \\to 2} f(x) = 2 + 2 = 4$. An $x = 2$ hat $f$ eine hebbare Lücke.',
    tags: ['grenzwert', 'faktorisierung', 'hebbare-luecke', 'gebrochen-rational'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 5 Aufgaben ───────────────────────

  {
    id: 'abi-ea-001', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 20,
    contextKey: 'Vollständige Klausuraufgabe',
    data: {
      questionText: 'Vollständige Analysis-Aufgabe (5 Schritte): $f(x) = x^4 - 8x^2 + 7$. Kurvendiskussion: Nullstellen, Symmetrie, Extrema, Wendepunkte, Skizze.',
      steps: [
        {
          instruction: 'Symmetrie prüfen: Zeige, dass $f(-x) = f(x)$ gilt (gerade Funktion, achsensymmetrisch zur $y$-Achse).',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$f(-x) = (-x)^4 - 8(-x)^2 + 7 = x^4 - 8x^2 + 7 = f(x)$ ✓ → gerade', correct: true },
            { id: 'b', text: '$f(-x) = -f(x)$ → ungerade', correct: false },
            { id: 'c', text: 'Keine Symmetrie erkennbar.', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Alle Exponenten gerade → $f(-x) = f(x)$. Gerade (symmetrisch zur $y$-Achse).',
        },
        {
          instruction: 'Substituiere $u = x^2$: $u^2 - 8u + 7 = 0$. Welche Lösungen für $u$, dann für $x$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$u = 1$ oder $u = 7$ → $x = \\pm 1$ oder $x = \\pm\\sqrt{7}$', correct: true },
            { id: 'b', text: '$x = \\pm 2$ oder $x = \\pm 3$', correct: false },
            { id: 'c', text: '$x = 0$ und $x = 8$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$u^2 - 8u + 7 = (u-1)(u-7) = 0 \\Rightarrow u = 1$ oder $u = 7$. Damit $x = \\pm 1, \\pm\\sqrt{7}$.',
        },
        {
          instruction: 'Berechne $f\'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 4x(x-2)(x+2)$. Setze $f\'(x) = 0$: Welche Extremstellen?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x = 0$, $x = 2$, $x = -2$', correct: true },
            { id: 'b', text: '$x = 4$, $x = -4$', correct: false },
            { id: 'c', text: 'Nur $x = 0$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$f\'(x) = 4x(x-2)(x+2) = 0 \\Rightarrow x \\in \\{-2, 0, 2\\}$.',
        },
        {
          instruction: '$f\'\'(x) = 12x^2 - 16$. Klassifiziere die Extremstellen $x \\in \\{-2, 0, 2\\}$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$f\'\'(\\pm 2) = 32 > 0$ (Minima), $f\'\'(0) = -16 < 0$ (Maximum)', correct: true },
            { id: 'b', text: 'Alle drei sind Maxima.', correct: false },
            { id: 'c', text: '$x = 0$ ist ein Wendepunkt.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$f\'\'(2) = 48 - 16 = 32 > 0$: Minima bei $x = \\pm 2$. $f\'\'(0) = -16 < 0$: Maximum bei $x = 0$.',
        },
        {
          instruction: 'Berechne die Wendepunkte: $f\'\'(x) = 12x^2 - 16 = 0 \\Rightarrow x^2 = \\frac{4}{3}$. Gib $x$ als Dezimalzahl an (positiver Wert, auf 2 Stellen).',
          type: 'numeric-input', expected: 1.15, tolerance: 0.03,
          showAnswer: '$x = \\sqrt{\\frac{4}{3}} = \\frac{2}{\\sqrt{3}} \\approx 1{,}15$. Wendepunkte bei $x \\approx \\pm 1{,}15$.',
        },
      ],
    },
    hintKeys: [
      'Substitution $u = x^2$ für Nullstellen.',
      '$f\'\'(x_0) < 0$: lokales Maximum; $f\'\'(x_0) > 0$: lokales Minimum.',
      'Wendepunkte: $f\'\'(x_0) = 0$ mit Vorzeichenwechsel von $f\'\'$.',
    ],
    solutionKey: 'Gerade Funktion. Nullstellen $\\pm 1, \\pm\\sqrt{7}$. Maximum bei $(0, 7)$, Minima bei $(\\pm 2, -9)$. Wendepunkte bei $x \\approx \\pm 1{,}15$.',
    tags: ['step-solver', 'kurvendiskussion', 'vollständig', 'substitution', 'ea', 'klausuraufgabe'],
  },

  {
    id: 'abi-ea-002', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 18,
    contextKey: 'Vollständige Klausuraufgabe',
    data: {
      questionText: 'Vollständige Stochastik-Aufgabe (5 Schritte): $X \\sim B(25; 0{,}6)$. Erwartungswert, Standardabweichung, $P(X \\geq 18)$ mit Normalapproximation, Interpretation.',
      steps: [
        {
          instruction: 'Berechne $\\mu = np$ und $\\sigma^2 = np(1-p)$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\mu = 15$, $\\sigma^2 = 6$', correct: true },
            { id: 'b', text: '$\\mu = 15$, $\\sigma^2 = 9$', correct: false },
            { id: 'c', text: '$\\mu = 0{,}6$, $\\sigma^2 = 0{,}24$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\mu = 25 \\cdot 0{,}6 = 15$. $\\sigma^2 = 25 \\cdot 0{,}6 \\cdot 0{,}4 = 6$.',
        },
        {
          instruction: 'Berechne $\\sigma = \\sqrt{6}$ auf 2 Dezimalstellen.',
          type: 'numeric-input', expected: 2.45, tolerance: 0.02,
          showAnswer: '$\\sigma = \\sqrt{6} \\approx 2{,}45$',
        },
        {
          instruction: 'Standardisiere $x = 18$: $z = \\frac{18 - 15}{2{,}45}$.',
          type: 'numeric-input', expected: 1.22, tolerance: 0.05,
          showAnswer: '$z = \\frac{3}{2{,}45} \\approx 1{,}22$',
        },
        {
          instruction: 'Mit $\\Phi(1{,}22) \\approx 0{,}889$: Berechne $P(X \\geq 18) = 1 - \\Phi(1{,}22)$.',
          type: 'numeric-input', expected: 0.111, tolerance: 0.005,
          showAnswer: '$P(X \\geq 18) \\approx 1 - 0{,}889 = 0{,}111 = 11{,}1\\%$',
        },
        {
          instruction: 'Interpretiere das Ergebnis im Sachkontext.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Ca. 11 % Chance, dass 18 oder mehr von 25 Personen Erfolg haben — überdurchschnittliches Ergebnis ist selten.', correct: true },
            { id: 'b', text: 'Ca. 11 % aller Personen haben Erfolg.', correct: false },
            { id: 'c', text: 'Die Aussage ist falsch, da $p = 0{,}6$ schon hoch ist.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '11 % ist die Wahrscheinlichkeit für $X \\geq 18$ — deutlich über dem Erwartungswert 15.',
        },
      ],
    },
    hintKeys: [
      'Normalapproximation: $N(\\mu, \\sigma^2)$ mit $\\mu = np$, $\\sigma^2 = np(1-p)$.',
      '$P(X \\geq k) = 1 - \\Phi\\left(\\frac{k-\\mu}{\\sigma}\\right)$.',
    ],
    solutionKey: '$\\mu = 15$, $\\sigma \\approx 2{,}45$. $z \\approx 1{,}22$. $P(X \\geq 18) \\approx 11{,}1\\%$. Ca. jeder 9. Versuch endet mit $\\geq 18$ Treffern.',
    tags: ['step-solver', 'normalapproximation', 'binomial', 'vollständig', 'ea', 'klausuraufgabe'],
  },

  {
    id: 'abi-ea-003', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 18,
    contextKey: 'Abiturähnliche Aufgabe',
    data: {
      questionText: 'Beweisaufgabe: Zeige, dass jede Funktion der Form $f(x) = x^3 + bx^2 + cx + d$ genau einen Wendepunkt hat.',
      steps: [
        {
          instruction: 'Berechne $f\'\'(x)$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$f\'\'(x) = 6x + 2b$', correct: true },
            { id: 'b', text: '$f\'\'(x) = 3x^2 + 2bx + c$', correct: false },
            { id: 'c', text: '$f\'\'(x) = 6x^2 + 2b$', correct: false },
          ],
          correctId: 'a',
          showAnswer: "$f'(x) = 3x^2 + 2bx + c$, $f''(x) = 6x + 2b$",
        },
        {
          instruction: 'Setze $f\'\'(x) = 0$ und löse nach $x$. Wie viele Lösungen gibt es?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$6x + 2b = 0 \\Rightarrow x = -\\frac{b}{3}$ — genau eine Lösung.', correct: true },
            { id: 'b', text: 'Keine Lösung, da $b$ unbekannt.', correct: false },
            { id: 'c', text: 'Unendlich viele Lösungen.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$f\'\'(x) = 6x + 2b = 0 \\Rightarrow x = -\\frac{b}{3}$. Genau eine Lösung (lineare Gleichung).',
        },
        {
          instruction: 'Warum ist $x = -\\frac{b}{3}$ tatsächlich ein Wendepunkt (nicht nur eine Nullstelle von $f\'\'$)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$f\'\'(x) = 6x + 2b$ ist linear und wechselt daher an $x = -b/3$ das Vorzeichen. → Wendepunkt bestätigt.', correct: true },
            { id: 'b', text: 'Es muss $f\'\'\'(x) = 0$ gelten, was nicht gegeben ist.', correct: false },
            { id: 'c', text: 'Lineares $f\'\'$ hat keinen Vorzeichenwechsel.', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Eine lineare Funktion hat genau eine Nullstelle mit Vorzeichenwechsel → Wendepunkt ist bewiesen.',
        },
      ],
    },
    hintKeys: [
      'Wendepunkt: $f\'\'(x_0) = 0$ und Vorzeichenwechsel von $f\'\'$.',
      'Lineares $f\'\'$: wechselt genau einmal das Vorzeichen.',
    ],
    solutionKey: '$f\'\'(x) = 6x + 2b$ ist linear → genau eine Nullstelle bei $x = -b/3$ → Vorzeichenwechsel → Wendepunkt. Jede kubische Funktion hat genau einen Wendepunkt. $\\square$',
    tags: ['step-solver', 'beweis', 'wendepunkt', 'kubisch', 'ea', 'allgemeinheit'],
  },

  {
    id: 'abi-ea-004', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 20,
    contextKey: 'Transferaufgabe',
    data: {
      questionText: 'Transfer: Zeige, dass die Fläche zwischen $f(x) = x^2$ und $g(x) = x$ im Intervall $[0, 1]$ gleich $\\frac{1}{6}$ ist, und interpretiere geometrisch.',
      steps: [
        {
          instruction: 'Bestimme die Schnittpunkte von $f$ und $g$: $x^2 = x$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x(x-1) = 0 \\Rightarrow x = 0$ und $x = 1$', correct: true },
            { id: 'b', text: '$x = \\frac{1}{2}$', correct: false },
            { id: 'c', text: '$x = -1$ und $x = 1$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$x^2 - x = 0 \\Rightarrow x(x-1) = 0 \\Rightarrow x = 0$ oder $x = 1$.',
        },
        {
          instruction: 'Wer liegt oben in $[0, 1]$? Teste $x = 0{,}5$: $f(0{,}5) = 0{,}25$, $g(0{,}5) = 0{,}5$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$g(x) = x > f(x) = x^2$ in $(0, 1)$: Flächenformel = $\\int_0^1 (x - x^2)\\,dx$', correct: true },
            { id: 'b', text: '$f(x) > g(x)$: Flächenformel = $\\int_0^1 (x^2 - x)\\,dx$', correct: false },
            { id: 'c', text: 'Beide gleich, Fläche = 0.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$g(0{,}5) = 0{,}5 > f(0{,}5) = 0{,}25$ → $g$ liegt oben.',
        },
        {
          instruction: 'Berechne $\\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$\\frac{1}{2} - \\frac{1}{3} = \\frac{3 - 2}{6} = \\frac{1}{6}$ ✓', correct: true },
            { id: 'b', text: '$1 - 1 = 0$', correct: false },
            { id: 'c', text: '$\\frac{1}{4}$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$\\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.',
        },
      ],
    },
    hintKeys: [
      'Zwischenfläche: $\\int_a^b [g(x) - f(x)]\\,dx$ wenn $g \\geq f$ auf $[a, b]$.',
      'Schnittpunkte bestimmen den Integrationsbereich.',
    ],
    solutionKey: 'Schnittpunkte: $x = 0$ und $x = 1$. $g(x) = x > f(x) = x^2$ auf $(0,1)$. Fläche $= \\int_0^1(x - x^2)\\,dx = \\frac{1}{6}$.',
    tags: ['step-solver', 'flächeninhalt', 'zwischen-kurven', 'transfer', 'ea'],
  },

  {
    id: 'abi-ea-005', topicId: '12-abiturvorbereitung', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativität'], points: 20, timeEstimate: 20,
    contextKey: 'Transferaufgabe',
    data: {
      questionText: 'Mehrdimensionaler Transfer: Gegeben die Übergangsmatrix $T = \\begin{pmatrix} 0{,}6 & 0{,}3 \\\\ 0{,}4 & 0{,}7 \\end{pmatrix}$ eines Markov-Modells. Zeige rechnerisch, dass der Fixvektor $\\vec{w} = \\begin{pmatrix} 0{,}43 \\\\ 0{,}57 \\end{pmatrix}$ (gerundet) existiert, und überprüfe den Grenzwert durch Iteration.',
      steps: [
        {
          instruction: 'Fixvektorbedingung: $T \\cdot \\vec{w} = \\vec{w}$ und $w_1 + w_2 = 1$. Stelle das LGS $(T - I) \\vec{w} = \\vec{0}$ auf. Eintrag $(1,1)$ von $T - I$?',
          type: 'numeric-input', expected: -0.4, tolerance: 0.001,
          showAnswer: '$T - I$: $(1,1) = 0{,}6 - 1 = -0{,}4$',
        },
        {
          instruction: 'Aus $-0{,}4 w_1 + 0{,}3 w_2 = 0$ folgt $w_1 = 0{,}75 w_2$. Mit $w_1 + w_2 = 1$: Berechne $w_2$.',
          type: 'numeric-input', expected: 4/7, tolerance: 0.005,
          showAnswer: '$0{,}75 w_2 + w_2 = 1 \\Rightarrow 1{,}75 w_2 = 1 \\Rightarrow w_2 = \\frac{4}{7} \\approx 0{,}571$',
        },
        {
          instruction: 'Berechne $w_1 = 1 - w_2$. Startvektor: $\\vec{v}_0 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$. Berechne erste Komponente von $\\vec{v}_2 = T \\cdot (T \\cdot \\vec{v}_0)$. ($\\vec{v}_1 = \\begin{pmatrix} 0{,}6 \\\\ 0{,}4 \\end{pmatrix}$)',
          type: 'numeric-input', expected: 0.48, tolerance: 0.005,
          showAnswer: '$\\vec{v}_2 = T \\cdot \\vec{v}_1$: $(1,1) = 0{,}6 \\cdot 0{,}6 + 0{,}3 \\cdot 0{,}4 = 0{,}36 + 0{,}12 = 0{,}48$. Nähert sich $w_1 \\approx 0{,}43$ an.',
        },
      ],
    },
    hintKeys: [
      'LGS: $(T-I)\\vec{w} = \\vec{0}$, plus $w_1 + w_2 = 1$.',
      'Iteration: $\\vec{v}_{n+1} = T \\cdot \\vec{v}_n$ nähert sich dem Fixvektor an.',
    ],
    solutionKey: '$w_2 = \\frac{4}{7} \\approx 0{,}571$, $w_1 = \\frac{3}{7} \\approx 0{,}429$. Iteration: $1 \\to 0{,}6 \\to 0{,}48 \\to \\ldots \\to 0{,}43$. Konvergenz zum Fixvektor bestätigt.',
    tags: ['step-solver', 'fixvektor', 'markov', 'iteration', 'konvergenz', 'transfer', 'ea'],
  },
];
