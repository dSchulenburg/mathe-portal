export const exercises = [
  // ─────────────────────────────────────────────
  // BASIS (AFB I) — 5 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'kd-basis-001',
    topicId: '11-kurvendiskussion',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Bestimme die Nullstellen von $f(x) = x^2 - 4$. Wie viele positive Nullstellen hat die Funktion?',
      correctValue: 1,
      tolerance: 0.01,
    },
    hintKeys: [
      'Setze $f(x) = 0$: $x^2 - 4 = 0 \\Rightarrow x^2 = 4$.',
      'Wurzel ziehen: $x = \\pm 2$. Welche davon ist positiv?',
    ],
    solutionKey:
      '$x^2 = 4 \\Rightarrow x = \\pm 2$. ' +
      'Es gibt genau eine positive Nullstelle: $x = 2$.',
    tags: ['nullstellen', 'quadratische-funktion'],
  },

  {
    id: 'kd-basis-002',
    topicId: '11-kurvendiskussion',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Betrachte $f(x) = x^3 - 3x$. Auf welchem Intervall ist $f$ streng monoton steigend?',
      options: [
        { id: 'a', text: '$(-\\infty; -1)$ und $(1; \\infty)$', correct: true },
        { id: 'b', text: '$(-1; 1)$', correct: false },
        { id: 'c', text: '$(0; \\infty)$', correct: false },
        { id: 'd', text: 'überall', correct: false },
      ],
    },
    hintKeys: [
      "$f'(x) = 3x^2 - 3 = 3(x^2 - 1)$. Wann ist $f'(x) > 0$?",
      '$f\'(x) > 0$ genau dann, wenn $x^2 > 1$, also $|x| > 1$.',
    ],
    solutionKey:
      "$f'(x) = 3x^2 - 3 > 0 \\Leftrightarrow x^2 > 1 \\Leftrightarrow x < -1$ oder $x > 1$. " +
      'Monoton steigend auf $(-\\infty; -1)$ und $(1; \\infty)$.',
    tags: ['monotonie', 'ableitung', 'kubische-funktion'],
  },

  {
    id: 'kd-basis-003',
    topicId: '11-kurvendiskussion',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Welche Symmetrie besitzt die Funktion $f(x) = x^4 - 2x^2$?',
      options: [
        { id: 'a', text: 'Achsensymmetrie zur y-Achse (gerade Funktion)', correct: true },
        { id: 'b', text: 'Punktsymmetrie zum Ursprung (ungerade Funktion)', correct: false },
        { id: 'c', text: 'Keine Symmetrie', correct: false },
        { id: 'd', text: 'Achsensymmetrie zur x-Achse', correct: false },
      ],
    },
    hintKeys: [
      'Überprüfe: $f(-x) = (-x)^4 - 2(-x)^2 = x^4 - 2x^2 = f(x)$.',
      'Gilt $f(-x) = f(x)$, ist $f$ achsensymmetrisch. Gilt $f(-x) = -f(x)$, ist $f$ punktsymmetrisch.',
    ],
    solutionKey:
      '$f(-x) = (-x)^4 - 2(-x)^2 = x^4 - 2x^2 = f(x)$. ' +
      'Da $f(-x) = f(x)$, ist $f$ achsensymmetrisch zur y-Achse (gerade Funktion).',
    tags: ['symmetrie', 'achsensymmetrie', 'gerade-funktion'],
  },

  {
    id: 'kd-basis-004',
    topicId: '11-kurvendiskussion',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Wie viele Nullstellen hat $f(x) = x^3 + x$ (ohne Taschenrechner)?',
      options: [
        { id: 'a', text: 'Genau eine Nullstelle: $x = 0$', correct: true },
        { id: 'b', text: 'Drei Nullstellen', correct: false },
        { id: 'c', text: 'Keine Nullstellen', correct: false },
        { id: 'd', text: 'Zwei Nullstellen', correct: false },
      ],
    },
    hintKeys: [
      'Faktorisiere: $f(x) = x(x^2 + 1)$.',
      '$x^2 + 1 > 0$ für alle $x \\in \\mathbb{R}$ — hat keine reellen Nullstellen.',
    ],
    solutionKey:
      '$f(x) = x(x^2 + 1) = 0 \\Rightarrow x = 0$ (da $x^2 + 1 > 0$ immer). ' +
      'Genau eine Nullstelle: $x = 0$.',
    tags: ['nullstellen', 'faktorisierung', 'kubische-funktion'],
  },

  {
    id: 'kd-basis-005',
    topicId: '11-kurvendiskussion',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Auf welchem Intervall ist $f(x) = -x^2 + 4x$ monoton fallend?',
      options: [
        { id: 'a', text: '$(2; \\infty)$', correct: true },
        { id: 'b', text: '$(-\\infty; 2)$', correct: false },
        { id: 'c', text: '$(0; 4)$', correct: false },
        { id: 'd', text: '$(-\\infty; 0)$', correct: false },
      ],
    },
    hintKeys: [
      "$f'(x) = -2x + 4$. Wann ist $f'(x) < 0$?",
      '$-2x + 4 < 0 \\Rightarrow x > 2$.',
    ],
    solutionKey:
      "$f'(x) = -2x + 4 < 0 \\Leftrightarrow x > 2$. " +
      'Monoton fallend auf $(2; \\infty)$.',
    tags: ['monotonie', 'fallend', 'parabel'],
  },

  // ─────────────────────────────────────────────
  // STANDARD (AFB II) — 6 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'kd-std-001',
    topicId: '11-kurvendiskussion',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 7,
    data: {
      questionText:
        'Bestimme die x-Koordinate des lokalen Maximums von $f(x) = -x^3 + 3x$. ' +
        '(Notwendige Bedingung: $f\'(x) = 0$; hinreichende Bedingung prüfen.)',
      correctValue: 1,
      tolerance: 0.01,
    },
    hintKeys: [
      "$f'(x) = -3x^2 + 3 = 0 \\Rightarrow x^2 = 1$.",
      "Prüfe $f''(x) = -6x$: Welcher Wert ergibt ein Maximum?",
    ],
    solutionKey:
      "$f'(x) = -3x^2 + 3 = 0 \\Rightarrow x = \\pm 1$. " +
      "$f''(1) = -6 < 0$ → lokales Maximum bei $x = 1$. " +
      "$f''(-1) = 6 > 0$ → lokales Minimum bei $x = -1$.",
    tags: ['extrema', 'lokales-maximum', 'zweite-ableitung', 'kubische-funktion'],
  },

  {
    id: 'kd-std-002',
    topicId: '11-kurvendiskussion',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 7,
    data: {
      questionText:
        'Bestimme die x-Koordinate des Wendepunkts von $f(x) = x^3 - 6x^2 + 9x + 2$.',
      correctValue: 2,
      tolerance: 0.01,
    },
    hintKeys: [
      "Wendepunkt: $f''(x) = 0$ und Vorzeichenwechsel von $f''$.",
      "$f'(x) = 3x^2 - 12x + 9$, $f''(x) = 6x - 12$.",
    ],
    solutionKey:
      "$f''(x) = 6x - 12 = 0 \\Rightarrow x = 2$. " +
      "$f'''(2) = 6 \\neq 0$ → Vorzeichenwechsel bestätigt. Wendepunkt bei $x = 2$. " +
      "$f(2) = 8 - 24 + 18 + 2 = 4$. Wendepunkt: $W(2|4)$.",
    tags: ['wendepunkt', 'zweite-ableitung', 'kubische-funktion'],
  },

  {
    id: 'kd-std-003',
    topicId: '11-kurvendiskussion',
    type: 'step-solver',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 10,
    contextKey: 'Podcast-Downloads',
    data: {
      questionText:
        'Podcast-Downloads pro Woche: $P(t) = -t^3 + 6t^2 + 9t$ (in Tsd., $t \\geq 0$, $t$ in Wochen). ' +
        'Führe eine vollständige Kurvendiskussion durch (Extrema, Wendepunkt).',
      steps: [
        {
          instruction: "Bestimme $P'(t)$.",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: "$P'(t) = -3t^2 + 12t + 9$" },
            { id: 'b', text: "$P'(t) = -3t^2 + 12t$" },
            { id: 'c', text: "$P'(t) = -t^2 + 6t + 9$" },
          ],
          correctId: 'a',
          showAnswer: "$P'(t) = -3t^2 + 12t + 9$",
        },
        {
          instruction: "Setze $P'(t) = 0$ und löse (Mitternachtsformel oder Faktorisierung). Wie lautet die positive Lösung (gerundet auf 2 Dezimalstellen)?",
          type: 'numeric-input',
          expected: 4.65,
          tolerance: 0.1,
          showAnswer: "$-3t^2 + 12t + 9 = 0 \\Rightarrow t^2 - 4t - 3 = 0$. $t = 2 + \\sqrt{7} \\approx 4{,}65$.",
        },
        {
          instruction: "Bestimme $P''(t)$.",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: "$P''(t) = -6t + 12$" },
            { id: 'b', text: "$P''(t) = -6t^2 + 12$" },
            { id: 'c', text: "$P''(t) = -6t$" },
          ],
          correctId: 'a',
          showAnswer: "$P''(t) = -6t + 12$",
        },
        {
          instruction: "Wo liegt der Wendepunkt (Inflection Point) des Download-Verlaufs?",
          type: 'numeric-input',
          expected: 2,
          tolerance: 0.01,
          showAnswer: "$P''(t) = -6t + 12 = 0 \\Rightarrow t = 2$. Wendepunkt bei $t = 2$ Wochen.",
        },
      ],
    },
    hintKeys: [
      "Maximum: $P'(t) = 0$ und $P''(t) < 0$.",
      "Wendepunkt: $P''(t) = 0$ mit Vorzeichenwechsel.",
    ],
    solutionKey:
      "$P'(t) = -3t^2 + 12t + 9$. Maximum bei $t \\approx 4{,}65$ Wochen. " +
      "Wendepunkt bei $t = 2$ Wochen: hier wachsen die Downloads am schnellsten.",
    tags: ['step-solver', 'kurvendiskussion', 'sachkontext', 'podcast', 'extrema', 'wendepunkt'],
  },

  {
    id: 'kd-std-004',
    topicId: '11-kurvendiskussion',
    type: 'step-solver',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 10,
    data: {
      questionText:
        'Führe eine vollständige Kurvendiskussion für $f(x) = x^3 - 3x^2$ durch: ' +
        'Nullstellen, Extrema, Wendepunkt.',
      steps: [
        {
          instruction: 'Bestimme die Nullstellen von $f(x) = x^3 - 3x^2$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x = 0$ und $x = 3$' },
            { id: 'b', text: '$x = 3$ (doppelt)' },
            { id: 'c', text: '$x = 0$ (dreifach)' },
          ],
          correctId: 'a',
          showAnswer: '$f(x) = x^2(x - 3) = 0 \\Rightarrow x = 0$ (doppelt) und $x = 3$.',
        },
        {
          instruction: "Setze $f'(x) = 3x^2 - 6x = 0$. Welche x-Werte sind Kandidaten für Extrema?",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x = 0$ und $x = 2$' },
            { id: 'b', text: '$x = 0$ und $x = 3$' },
            { id: 'c', text: '$x = 2$ und $x = -2$' },
          ],
          correctId: 'a',
          showAnswer: "$f'(x) = 3x(x - 2) = 0 \\Rightarrow x = 0$ oder $x = 2$.",
        },
        {
          instruction: "Nutze $f''(x) = 6x - 6$: Handelt es sich bei $x = 2$ um ein Minimum oder Maximum?",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Lokales Minimum, da $f\'\'(2) = 6 > 0$' },
            { id: 'b', text: 'Lokales Maximum, da $f\'\'(2) = 6 > 0$' },
            { id: 'c', text: 'Sattelpunkt' },
          ],
          correctId: 'a',
          showAnswer: "$f''(2) = 6 \\cdot 2 - 6 = 6 > 0$ → lokales Minimum bei $x = 2$. $f(2) = 8 - 12 = -4$.",
        },
        {
          instruction: 'Bestimme den Wendepunkt (wo $f\'\'(x) = 0$).',
          type: 'numeric-input',
          expected: 1,
          tolerance: 0.01,
          showAnswer: "$f''(x) = 6x - 6 = 0 \\Rightarrow x = 1$. $f(1) = 1 - 3 = -2$. Wendepunkt $W(1|-2)$.",
        },
      ],
    },
    hintKeys: [
      "Notwendige Bedingung für Extrema: $f'(x) = 0$.",
      "Hinreichende Bedingung: $f''(x) > 0$ → Minimum; $f''(x) < 0$ → Maximum.",
    ],
    solutionKey:
      'Nullstellen: $x = 0$ und $x = 3$. ' +
      'Lokales Max. bei $x = 0$: $f(0) = 0$. Lokales Min. bei $x = 2$: $f(2) = -4$. ' +
      'Wendepunkt: $W(1|-2)$.',
    tags: ['step-solver', 'kurvendiskussion', 'nullstellen', 'extrema', 'wendepunkt'],
  },

  {
    id: 'kd-std-005',
    topicId: '11-kurvendiskussion',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Welche Aussage über Extrema ist KORREKT?',
      options: [
        {
          id: 'a',
          text: "Ist $f'(x_0) = 0$ und wechselt $f'$ das Vorzeichen, liegt ein lokales Extremum vor.",
          correct: true,
        },
        {
          id: 'b',
          text: "Ist $f'(x_0) = 0$, ist $x_0$ immer ein Extremum.",
          correct: false,
        },
        {
          id: 'c',
          text: "Ist $f''(x_0) = 0$, liegt kein Extremum vor.",
          correct: false,
        },
        {
          id: 'd',
          text: "Ein Extremum liegt vor, wenn $f''(x_0) > 0$ und $f'(x_0) \\neq 0$.",
          correct: false,
        },
      ],
    },
    hintKeys: [
      "Notwendige Bedingung: $f'(x_0) = 0$. Hinreichend: Vorzeichenwechsel.",
      "Gegenbeispiel für Antwort B: $f(x) = x^3$ hat bei $x = 0$ keine Extremum.",
    ],
    solutionKey:
      "Notwendige Bedingung: $f'(x_0) = 0$. Hinreichend für ein Extremum ist ein Vorzeichenwechsel von $f'$. " +
      "Ohne Vorzeichenwechsel liegt ein Sattelpunkt vor (z.B. $x^3$ bei $x = 0$).",
    tags: ['extrema', 'kriterium', 'vorzeichenwechsel', 'sattelpunkt'],
  },

  {
    id: 'kd-std-006',
    topicId: '11-kurvendiskussion',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 6,
    contextKey: 'Gaming-Leistungskurve',
    data: {
      questionText:
        'Die Reaktionszeit eines Gamers (in ms) folgt $R(t) = t^2 - 8t + 20$ ($t$ in Spielstunden, $0 \\leq t \\leq 8$). ' +
        'Bei welchem $t$ ist die Reaktionszeit minimal (optimale Performance)?',
      correctValue: 4,
      tolerance: 0.01,
    },
    hintKeys: [
      "$R'(t) = 2t - 8 = 0 \\Rightarrow t = ?$",
      "Prüfe: $R''(t) = 2 > 0$ → Minimum.",
    ],
    solutionKey:
      "$R'(t) = 2t - 8 = 0 \\Rightarrow t = 4$. " +
      "$R''(4) = 2 > 0$ → lokales Minimum. " +
      "Minimale Reaktionszeit: $R(4) = 16 - 32 + 20 = 4$ ms bei $t = 4$ Stunden.",
    tags: ['extrema', 'minimum', 'sachkontext', 'gaming'],
  },

  // ─────────────────────────────────────────────
  // ERWEITERT (AFB III) — 5 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'kd-erw-001',
    topicId: '11-kurvendiskussion',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 10,
    contextKey: 'Online-Shop Gewinn',
    data: {
      questionText:
        'Der Gewinn eines Online-Shops (in Tsd. €) bei $x$ tsd. verkauften Artikeln: ' +
        '$G(x) = -x^3 + 9x^2 - 15x - 25$. ' +
        'Bestimme die Anzahl $x$ (in Tsd. Artikeln), bei der der Gewinn maximal ist. ' +
        'Gib $x$ als ganze Zahl an.',
      correctValue: 5,
      tolerance: 0.01,
    },
    hintKeys: [
      "$G'(x) = -3x^2 + 18x - 15 = -3(x^2 - 6x + 5) = -3(x-1)(x-5)$.",
      "Kandidaten: $x = 1$ und $x = 5$. Prüfe mit $G''$.",
    ],
    solutionKey:
      "$G'(x) = -3x^2 + 18x - 15 = -3(x-1)(x-5) = 0 \\Rightarrow x = 1$ oder $x = 5$. " +
      "$G''(x) = -6x + 18$. $G''(5) = -12 < 0$ → Maximum bei $x = 5$. " +
      "$G(5) = -125 + 225 - 75 - 25 = 0$ Tsd. € (Gewinnschwelle).",
    tags: ['extrema', 'maximum', 'sachkontext', 'gewinn', 'online-shop'],
  },

  {
    id: 'kd-erw-002',
    topicId: '11-kurvendiskussion',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 9,
    contextKey: 'COVID-Kurve Wendepunkt',
    data: {
      questionText:
        'Neuinfektionen (modelliert) nach $I(t) = -t^3 + 12t^2 + 3$ (in Tsd., $t$ in Wochen). ' +
        'Der Wendepunkt markiert den Zeitpunkt, ab dem die Ausbreitung langsamer wird. ' +
        'Bestimme die x-Koordinate des Wendepunkts.',
      correctValue: 4,
      tolerance: 0.01,
    },
    hintKeys: [
      "$I'(t) = -3t^2 + 24t$, $I''(t) = -6t + 24$.",
      "$I''(t) = 0 \\Rightarrow t = 4$.",
    ],
    solutionKey:
      "$I''(t) = -6t + 24 = 0 \\Rightarrow t = 4$ Wochen. " +
      "$I'''(4) = -6 \\neq 0$ → echtes Wendepunkt. " +
      "Ab Woche 4 wächst die Infektionszahl langsamer.",
    tags: ['wendepunkt', 'sachkontext', 'covid', 'infektionskurve'],
  },

  {
    id: 'kd-erw-003',
    topicId: '11-kurvendiskussion',
    type: 'drag-match',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 7,
    data: {
      questionText:
        'Ordne jeder Eigenschaft des Graphen die mathematische Bedingung zu.',
      pairs: [
        { id: 'a', left: 'Lokales Minimum',             right: "$f'(x_0) = 0$ und $f''(x_0) > 0$" },
        { id: 'b', left: 'Wendepunkt',                  right: "$f''(x_0) = 0$ mit VZW von $f''$" },
        { id: 'c', left: 'Monoton steigend auf $[a;b]$', right: "$f'(x) \\geq 0$ für alle $x \\in [a;b]$" },
        { id: 'd', left: 'Sattelpunkt',                 right: "$f'(x_0) = 0$ ohne VZW von $f'$" },
      ],
    },
    hintKeys: [
      'Merke: Min → Kurve konvex ($f\'\' > 0$); Max → Kurve konkav ($f\'\' < 0$).',
      'Sattelpunkt: $f\'(x_0) = 0$, aber $f\'$ wechselt das Vorzeichen NICHT.',
    ],
    solutionKey:
      'Minimum: $f\'(x_0) = 0$ und $f\'\'(x_0) > 0$. ' +
      'Wendepunkt: $f\'\'(x_0) = 0$ mit Vorzeichenwechsel. ' +
      'Monoton steigend: $f\'(x) \\geq 0$. ' +
      'Sattelpunkt: $f\'(x_0) = 0$ ohne Vorzeichenwechsel.',
    tags: ['drag-match', 'kurvendiskussion', 'bedingungen', 'extrema', 'wendepunkt'],
  },

  {
    id: 'kd-erw-004',
    topicId: '11-kurvendiskussion',
    type: 'error-analysis',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 8,
    contextKey: 'Wasserrutsche-Design',
    data: {
      questionText:
        'Eine Wasserrutsche soll dem Profil $h(x) = -0{,}1x^3 + 0{,}6x^2$ folgen (Höhe in m, Länge in m). ' +
        'Schülerin Mia analysiert das Profil und macht einen Fehler. Finde ihn:',
      steps: [
        {
          content: "$h'(x) = -0{,}3x^2 + 1{,}2x$",
          hasError: false,
        },
        {
          content: "$h'(x) = 0$: $-0{,}3x(x - 4) = 0 \\Rightarrow x = 0$ oder $x = 4$",
          hasError: false,
        },
        {
          content: "$h''(x) = -0{,}6x + 1{,}2$",
          hasError: false,
        },
        {
          content: "$h''(4) = -0{,}6 \\cdot 4 + 1{,}2 = -2{,}4 + 1{,}2 = -1{,}2 > 0$ → Maximum bei $x = 4$",
          hasError: true,
          errorExplanation:
            "$-1{,}2 > 0$ ist falsch — $-1{,}2 < 0$. " +
            "Da $h''(4) = -1{,}2 < 0$, liegt ein lokales MAXIMUM vor (Rutsche am höchsten Punkt bei $x = 4$ m). " +
            "Mia hat das Vorzeichen falsch interpretiert.",
        },
      ],
    },
    hintKeys: [
      '$h\'\'(x_0) < 0$ → Maximum (Kurve ist konkav). $h\'\'(x_0) > 0$ → Minimum.',
      'Rechne $-0{,}6 \\cdot 4 + 1{,}2$ sorgfältig.',
    ],
    solutionKey:
      "$h''(4) = -2{,}4 + 1{,}2 = -1{,}2 < 0$ → lokales Maximum bei $x = 4$. " +
      "Die Rutsche erreicht ihren höchsten Punkt bei $x = 4$ m: $h(4) = -6{,}4 + 9{,}6 = 3{,}2$ m.",
    tags: ['fehleranalyse', 'extrema', 'vorzeichen', 'sachkontext', 'wasserrutsche'],
  },

  {
    id: 'kd-erw-005',
    topicId: '11-kurvendiskussion',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kommunikation', 'kritisches-denken', 'kreativität'],
    points: 15,
    timeEstimate: 10,
    contextKey: 'Online-Shop Gewinnoptimierung',
    data: {
      questionText:
        'Ein Online-Shop erzielt den Gewinn $G(p) = -2p^3 + 30p^2 - 100p$ (€) bei Preis $p$ (€). ' +
        'Bestimme den Preis $p$ (ganze Zahl in €), bei dem der Gewinn maximal ist.',
      correctValue: 10,
      tolerance: 0.01,
    },
    hintKeys: [
      "$G'(p) = -6p^2 + 60p - 100$. Setze $= 0$ und nutze die Mitternachtsformel.",
      "$p = \\frac{-60 \\pm \\sqrt{3600 - 2400}}{-12}$. Vereinfachen...",
    ],
    solutionKey:
      "$G'(p) = -6p^2 + 60p - 100 = 0 \\Rightarrow p^2 - 10p + \\frac{50}{3} = 0$. " +
      "Alternativ: $G'(p) = -2(3p^2 - 30p + 50) = 0$. " +
      "$p = \\frac{30 \\pm \\sqrt{900 - 600}}{6} = \\frac{30 \\pm \\sqrt{300}}{6} \\approx \\frac{30 \\pm 17{,}3}{6}$. " +
      "$p_1 \\approx 7{,}9$ oder $p_2 \\approx 2{,}1$. " +
      "$G''(p) = -12p + 60$: $G''(7{,}9) < 0$ → Maximum bei $p \\approx 8$ €. " +
      "Ganzzahlig: $p = 8$ ergibt $G(8) = -1024 + 1920 - 800 = 96$ €.",
    tags: ['extrema', 'maximum', 'sachkontext', 'gewinn', 'preisoptimierung'],
  },

  // ─────────────────────────────────────────────
  // eA (Erhöhtes Anforderungsniveau) — 2 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'kd-ea-001',
    topicId: '11-kurvendiskussion',
    type: 'step-solver',
    diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kreativität', 'kommunikation'],
    points: 20,
    timeEstimate: 15,
    data: {
      questionText:
        'Führe eine vollständige Kurvendiskussion von $f(x) = x^4 - 8x^2 + 7$ durch. ' +
        'Untersuche Symmetrie, Nullstellen, Extrema und Wendepunkte.',
      steps: [
        {
          instruction: 'Welche Symmetrie besitzt $f$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Achsensymmetrie zur y-Achse' },
            { id: 'b', text: 'Punktsymmetrie zum Ursprung' },
            { id: 'c', text: 'Keine Symmetrie' },
          ],
          correctId: 'a',
          showAnswer: '$f(-x) = (-x)^4 - 8(-x)^2 + 7 = f(x)$ → achsensymmetrisch.',
        },
        {
          instruction: 'Bestimme die Nullstellen. Substitution $u = x^2$: welche $u$-Werte ergeben sich?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$u = 1$ und $u = 7$' },
            { id: 'b', text: '$u = 2$ und $u = 4$' },
            { id: 'c', text: '$u = -1$ und $u = 7$' },
          ],
          correctId: 'a',
          showAnswer: '$u^2 - 8u + 7 = 0 \\Rightarrow (u-1)(u-7) = 0 \\Rightarrow u = 1$ oder $u = 7$.',
        },
        {
          instruction: 'Wie viele reelle Nullstellen hat $f(x)$ insgesamt?',
          type: 'numeric-input',
          expected: 4,
          tolerance: 0.01,
          showAnswer: '$x^2 = 1 \\Rightarrow x = \\pm 1$; $x^2 = 7 \\Rightarrow x = \\pm\\sqrt{7}$. Insgesamt 4 Nullstellen.',
        },
        {
          instruction: "Extrema: $f'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 0$. Welche x-Werte sind Kandidaten?",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$x = 0$, $x = 2$, $x = -2$' },
            { id: 'b', text: '$x = 0$, $x = 4$' },
            { id: 'c', text: '$x = \\pm 2$ (nur)' },
          ],
          correctId: 'a',
          showAnswer: "$f'(x) = 4x(x^2 - 4) = 4x(x-2)(x+2) = 0 \\Rightarrow x \\in \\{-2, 0, 2\\}$.",
        },
        {
          instruction: "Prüfe mit $f''(x) = 12x^2 - 16$: Wie lautet der Funktionswert $f(0)$ (lokales Maximum oder Minimum)?",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$f(0) = 7$, lokales Maximum ($f\'\'(0) = -16 < 0$)' },
            { id: 'b', text: '$f(0) = 7$, lokales Minimum ($f\'\'(0) = -16 < 0$)' },
            { id: 'c', text: '$f(0) = 0$, Sattelpunkt' },
          ],
          correctId: 'a',
          showAnswer: "$f''(0) = -16 < 0$ → lokales Maximum. $f(0) = 7$. Maxima: $(-2|-9)$ und $(2|-9)$ sind Minima ($f''(\\pm2) = 32 > 0$).",
        },
      ],
    },
    hintKeys: [
      'Substitution $u = x^2$ vereinfacht das Nullstellenproblem zu einer quadratischen Gleichung.',
      "Für Extrema: $f'(x) = 4x^3 - 16x$ faktorisieren.",
    ],
    solutionKey:
      'Achsensymmetrie. Nullstellen: $x = \\pm 1$, $x = \\pm\\sqrt{7}$. ' +
      'Lokales Max.: $(0|7)$. Lokale Min.: $(-2|-9)$ und $(2|-9)$. ' +
      'Wendepunkte: $f\'\'(x) = 12x^2 - 16 = 0 \\Rightarrow x = \\pm\\frac{2}{\\sqrt{3}} \\approx \\pm 1{,}15$.',
    tags: ['step-solver', 'kurvendiskussion', 'grade-4-funktion', 'symmetrie', 'substitution', 'ea'],
  },

  {
    id: 'kd-ea-002',
    topicId: '11-kurvendiskussion',
    type: 'step-solver',
    diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kreativität'],
    points: 20,
    timeEstimate: 15,
    data: {
      questionText:
        'Bestimme einen Funktionsterm $f(x) = ax^3 + bx^2 + cx + d$ aus folgenden Bedingungen: ' +
        '(1) $f(0) = 2$, (2) $f(2) = 0$, (3) lokales Extremum bei $x = 1$ mit $f(1) = 3$, (4) $f\'(1) = 0$.',
      steps: [
        {
          instruction: 'Aus Bedingung (1) $f(0) = 2$: Welchen Wert hat $d$?',
          type: 'numeric-input',
          expected: 2,
          tolerance: 0.01,
          showAnswer: '$f(0) = a \\cdot 0 + b \\cdot 0 + c \\cdot 0 + d = d = 2$. Also $d = 2$.',
        },
        {
          instruction: "Aus Bedingung (4) $f'(1) = 0$: Welche Gleichung ergibt sich für $a$, $b$, $c$?",
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$3a + 2b + c = 0$' },
            { id: 'b', text: '$a + b + c = 0$' },
            { id: 'c', text: '$3a + b + c = 0$' },
          ],
          correctId: 'a',
          showAnswer: "$f'(x) = 3ax^2 + 2bx + c$. $f'(1) = 3a + 2b + c = 0$.",
        },
        {
          instruction: 'Aus den Bedingungen (2) und (3) erhältst du zwei weitere Gleichungen. Wie lautet das Gleichungssystem (3 Gleichungen in $a, b, c$)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$8a + 4b + 2c = -2$; $a + b + c = 1$; $3a + 2b + c = 0$' },
            { id: 'b', text: '$2a + 4b + 2c = 0$; $a + b + c = 3$; $3a + 2b + c = 0$' },
            { id: 'c', text: '$8a + 4b + 2c = 2$; $a + b + c = 3$; $3a + 2b + c = 0$' },
          ],
          correctId: 'a',
          showAnswer:
            '$f(2) = 8a + 4b + 2c + 2 = 0 \\Rightarrow 8a + 4b + 2c = -2$ (÷2: $4a + 2b + c = -1$). ' +
            '$f(1) = a + b + c + 2 = 3 \\Rightarrow a + b + c = 1$.',
        },
        {
          instruction: 'Löse das Gleichungssystem. Welcher Wert ergibt sich für $a$?',
          type: 'numeric-input',
          expected: -1,
          tolerance: 0.01,
          showAnswer:
            'LGS: (I) $4a + 2b + c = -1$, (II) $a + b + c = 1$, (III) $3a + 2b + c = 0$. ' +
            '(I) − (III): $a = -1$. (III) − (II): $2a + b = -1 \\Rightarrow b = 1$. ' +
            'Aus (II): $c = 1 - a - b = 1$.',
        },
        {
          instruction: 'Verifiziere: Erfüllt $f(x) = -x^3 + x^2 + x + 2$ die Bedingung $f(2) = 0$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Ja: $f(2) = -8 + 4 + 2 + 2 = 0$ ✓' },
            { id: 'b', text: 'Nein: $f(2) = 8 - 12 + 6 + 2 = 4 \\neq 0$' },
            { id: 'c', text: 'Bedingung ist überbestimmt — keine Lösung möglich' },
          ],
          correctId: 'a',
          showAnswer:
            'Mit $a = -1$, $b = 1$, $c = 1$, $d = 2$: $f(x) = -x^3 + x^2 + x + 2$. ' +
            'Probe: $f(0) = 2$ ✓, $f(1) = -1+1+1+2 = 3$ ✓, $f(2) = -8+4+2+2 = 0$ ✓, ' +
            "$f'(x) = -3x^2 + 2x + 1$, $f'(1) = -3+2+1 = 0$ ✓. Alle vier Bedingungen erfüllt.",
        },
      ],
    },
    hintKeys: [
      'Ein kubisches Polynom hat 4 Parameter — du brauchst genau 4 Bedingungen.',
      'Stelle ein lineares Gleichungssystem auf und löse es (Gauß-Verfahren).',
    ],
    solutionKey:
      'Aus den 4 Bedingungen ergibt sich das LGS mit Lösung $a = -1$, $b = 1$, $c = 1$, $d = 2$. ' +
      '$f(x) = -x^3 + x^2 + x + 2$. ' +
      "Probe: $f(0) = 2$, $f(1) = 3$, $f(2) = 0$, $f'(1) = 0$ — alle vier Bedingungen erfüllt.",
    tags: ['step-solver', 'funktionsbestimmung', 'gleichungssystem', 'bedingungen', 'ea'],
  },
];
