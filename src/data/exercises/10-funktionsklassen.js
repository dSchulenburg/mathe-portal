export const exercises = [
  // ─── BASIS (AFB I) ──────────────────────────────────────────────────────────

  {
    id: 'fklass-basis-001',
    topicId: '10-funktionsklassen',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Welcher Funktionstyp wird durch die Gleichung f(x) = 3x + 7 beschrieben?',
      options: [
        { id: 'a', text: 'Quadratische Funktion', correct: false },
        { id: 'b', text: 'Lineare Funktion', correct: true },
        { id: 'c', text: 'Exponentialfunktion', correct: false },
        { id: 'd', text: 'Trigonometrische Funktion', correct: false },
      ],
    },
    hintKeys: [
      'Schaue auf die höchste Potenz von x in der Gleichung.',
      'Eine lineare Funktion hat die Form f(x) = mx + b, die Variable kommt nur in der ersten Potenz vor.',
    ],
    solutionKey:
      'f(x) = 3x + 7 hat die Form f(x) = mx + b mit m = 3 und b = 7. Das ist eine lineare Funktion – ihr Graph ist eine Gerade.',
    tags: ['funktionstyp', 'linear', 'erkennen'],
  },

  {
    id: 'fklass-basis-002',
    topicId: '10-funktionsklassen',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Einem Graphen, der eine nach oben geöffnete Parabel darstellt, entspricht welche Funktionsgleichung?',
      options: [
        { id: 'a', text: 'f(x) = 2x − 1', correct: false },
        { id: 'b', text: 'f(x) = sin(x)', correct: false },
        { id: 'c', text: 'f(x) = x² − 3x + 2', correct: true },
        { id: 'd', text: 'f(x) = 2^x', correct: false },
      ],
    },
    hintKeys: [
      'Eine Parabel ist der Graph einer quadratischen Funktion.',
      'Eine quadratische Funktion hat die Form f(x) = ax² + bx + c mit a ≠ 0. Für a > 0 öffnet die Parabel nach oben.',
    ],
    solutionKey:
      'f(x) = x² − 3x + 2 ist eine quadratische Funktion mit a = 1 > 0. Ihr Graph ist eine nach oben geöffnete Parabel. Die anderen Gleichungen beschreiben eine Gerade (2x − 1), eine Sinuskurve (sin x) und eine Exponentialkurve (2^x).',
    tags: ['parabel', 'quadratisch', 'graph-zuordnung'],
  },

  {
    id: 'fklass-basis-003',
    topicId: '10-funktionsklassen',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Für große x-Werte (x → ∞): Welche Funktion wächst am schnellsten?',
      options: [
        { id: 'a', text: 'f(x) = 100x (linear)', correct: false },
        { id: 'b', text: 'g(x) = x² (quadratisch)', correct: false },
        { id: 'c', text: 'h(x) = 2^x (exponentiell)', correct: true },
        { id: 'd', text: 'k(x) = sin(x) (trigonometrisch)', correct: false },
      ],
    },
    hintKeys: [
      'Berechne Probewerte: x = 10, x = 20, x = 50.',
      'Trigonometrische Funktionen sind beschränkt (−1 ≤ sin x ≤ 1). Bei Exponentialfunktionen verdoppelt sich der Wert mit jedem Schritt.',
    ],
    solutionKey:
      'h(x) = 2^x wächst am schnellsten. Bei x = 50: linear 5000, quadratisch 2500, exponentiell über 10¹⁵. Exponentialfunktionen überholen langfristig jedes Polynom. sin(x) ist auf [−1, 1] beschränkt und wächst gar nicht.',
    tags: ['wachstumsvergleich', 'exponentiell', 'asymptotisch'],
  },

  // ─── STANDARD (AFB II) ──────────────────────────────────────────────────────

  {
    id: 'fklass-standard-001',
    topicId: '10-funktionsklassen',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 10,
    timeEstimate: 7,
    data: {
      questionText:
        'Bestimme den x-Wert des Schnittpunkts der linearen Funktion f(x) = 2x − 1 mit der quadratischen Funktion g(x) = x² − 3. Gib die kleinere der beiden Lösungen an.',
      correctValue: -1,
      tolerance: 0.01,
    },
    hintKeys: [
      'Setze f(x) = g(x) und löse nach x auf.',
      '2x − 1 = x² − 3  ⟹  x² − 2x − 2 = 0. Nutze die Lösungsformel x = (2 ± √(4 + 8)) / 2.',
    ],
    solutionKey:
      'Gleichsetzen: 2x − 1 = x² − 3  ⟹  x² − 2x − 2 = 0. Diskriminante: D = 4 + 8 = 12. x = (2 ± √12) / 2 = 1 ± √3. Die kleinere Lösung ist x = 1 − √3 ≈ −0,73. Die größere ist x = 1 + √3 ≈ 2,73.',
    tags: ['schnittpunkt', 'linear', 'quadratisch', 'gleichsetzen'],
  },

  {
    id: 'fklass-standard-002',
    topicId: '10-funktionsklassen',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 10,
    timeEstimate: 6,
    data: {
      questionText:
        'Eine Wertetabelle zeigt folgende Paare (x | y): (0 | 1), (1 | 3), (2 | 9), (3 | 27). Welcher Funktionstyp liegt vor?',
      options: [
        { id: 'a', text: 'Linear – die Differenzen Δy sind konstant', correct: false },
        { id: 'b', text: 'Quadratisch – die zweiten Differenzen Δ²y sind konstant', correct: false },
        { id: 'c', text: 'Exponentiell – die Quotienten y_{n+1}/y_n sind konstant', correct: true },
        { id: 'd', text: 'Trigonometrisch – die Werte verlaufen periodisch', correct: false },
      ],
    },
    hintKeys: [
      'Prüfe: Sind die Differenzen konstant? (linear) Sind die zweiten Differenzen konstant? (quadratisch) Sind die Quotienten konstant? (exponentiell)',
      'Quotienten: 3/1 = 3, 9/3 = 3, 27/9 = 3. Jeder Wert ist das 3-fache des vorherigen.',
    ],
    solutionKey:
      'Die Quotienten y_{n+1}/y_n = 3 sind konstant: 3/1 = 9/3 = 27/9 = 3. Das ist das Kennzeichen einer Exponentialfunktion. f(x) = 1 · 3^x beschreibt die Tabelle exakt.',
    tags: ['wertetabelle', 'funktionstyp-bestimmen', 'quotienten'],
  },

  {
    id: 'fklass-standard-003',
    topicId: '10-funktionsklassen',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    data: {
      questionText:
        'Welche der folgenden Funktionen besitzen eine waagrechte Asymptote?',
      options: [
        { id: 'a', text: 'f(x) = 3x + 1 und g(x) = x²', correct: false },
        { id: 'b', text: 'h(x) = 2^x und k(x) = (1/2)^x', correct: true },
        { id: 'c', text: 'p(x) = x² − 4 und q(x) = sin(x)', correct: false },
        { id: 'd', text: 'Keine der genannten Funktionen', correct: false },
      ],
    },
    hintKeys: [
      'Eine waagrechte Asymptote y = c bedeutet: f(x) → c für x → ±∞.',
      'Exponentialfunktionen f(x) = a · b^x nähern sich für x → −∞ (wenn b > 1) bzw. x → +∞ (wenn 0 < b < 1) der x-Achse (y = 0) an.',
    ],
    solutionKey:
      'h(x) = 2^x → 0 für x → −∞ (waagrechte Asymptote y = 0). k(x) = (1/2)^x → 0 für x → +∞ (waagrechte Asymptote y = 0). Lineare und quadratische Funktionen divergieren, sin(x) ist beschränkt aber hat keine Asymptote.',
    tags: ['asymptote', 'exponentiell', 'verhalten'],
  },

  {
    id: 'fklass-standard-004',
    topicId: '10-funktionsklassen',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 10,
    timeEstimate: 8,
    data: {
      questionText:
        'Ab welchem ganzzahligen x-Wert überholt die Exponentialfunktion h(x) = 2^x die quadratische Funktion g(x) = x²? (Kleinster ganzzahliger x-Wert, ab dem gilt 2^x > x² für alle weiteren ganzzahligen x.)',
      correctValue: 5,
      tolerance: 0,
    },
    hintKeys: [
      'Berechne beide Funktionswerte für x = 1, 2, 3, 4, 5, 6 und vergleiche.',
      'x = 4: 2⁴ = 16, 4² = 16. Gleichstand! Schaue danach.',
    ],
    solutionKey:
      'x=1: 2 vs 1 (2^x > x²); x=2: 4 vs 4 (gleich); x=3: 8 vs 9 (2^x < x²); x=4: 16 vs 16 (gleich); x=5: 32 vs 25 (2^x > x²). Ab x = 5 gilt dauerhaft 2^x > x². Daher ist die Antwort x = 5.',
    tags: ['vergleich', 'exponentiell', 'quadratisch', 'überholen'],
  },

  // ─── ERWEITERT (AFB III) ─────────────────────────────────────────────────────

  {
    id: 'fklass-erweitert-001',
    topicId: '10-funktionsklassen',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 10,
    contextKey: 'sachmodellierung',
    data: {
      questionText:
        'Wähle für jeden Sachverhalt das passende Funktionsmodell:\n\n' +
        '(A) Bakterienanzahl verdoppelt sich alle 3 Stunden\n' +
        '(B) Durchhang eines Kabels zwischen zwei Masten\n' +
        '(C) Tagestemperatur über 24 Stunden\n' +
        '(D) Monatliche Mietpreissteigerung um einen festen Betrag\n\n' +
        'Welche Zuordnung ist korrekt?',
      options: [
        {
          id: 'a',
          text: 'A→exponentiell, B→quadratisch, C→trigonometrisch, D→linear',
          correct: true,
        },
        {
          id: 'b',
          text: 'A→linear, B→exponentiell, C→quadratisch, D→trigonometrisch',
          correct: false,
        },
        {
          id: 'c',
          text: 'A→quadratisch, B→trigonometrisch, C→linear, D→exponentiell',
          correct: false,
        },
        {
          id: 'd',
          text: 'A→exponentiell, B→trigonometrisch, C→linear, D→quadratisch',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Exponentielles Wachstum: konstante Verdopplungs-/Halbierungszeit.',
      'Parabeln beschreiben physikalische Formen (Wurfparabel, Kettenlinie nähert sich der Parabel an). Periodische Phänomene → trigonometrisch. Konstante Änderungsrate → linear.',
    ],
    solutionKey:
      'A: Verdopplung = konstanter Multiplikator → exponentiell (f(t) = f₀ · 2^(t/3)). B: Kabeldurchhang wird in der Praxis durch eine Parabel genähert → quadratisch. C: Temperatur schwankt täglich periodisch → trigonometrisch (Sinus/Kosinus). D: Feste monatliche Erhöhung = konstante Differenz → linear.',
    tags: ['sachkontext', 'modellwahl', 'vergleich', 'anwendung'],
  },

  {
    id: 'fklass-erweitert-002',
    topicId: '10-funktionsklassen',
    type: 'error-analysis',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 12,
    data: {
      questionText:
        'Ein Schüler modelliert die Ausbreitung eines Gerüchts in einer Schule. Jeden Tag hört es doppelt so viele Schüler wie am Vortag. Tag 0: 2 Schüler. Analysiere seine Lösung:',
      steps: [
        {
          content: 'Wachstum mit konstantem Zuwachs → lineares Modell gewählt: f(t) = 2 + 2t',
          hasError: true,
          errorExplanation:
            'Fehler: "doppelt so viele wie am Vortag" bedeutet einen konstanten Multiplikator (×2), nicht eine konstante Addition. Das ist exponentielles, kein lineares Wachstum.',
        },
        {
          content: 'Für Tag 5: f(5) = 2 + 2·5 = 12 Schüler',
          hasError: true,
          errorExplanation:
            'Fehler: Durch das falsche Modell ist auch der Wert falsch. Richtig: f(5) = 2 · 2⁵ = 64 Schüler.',
        },
        {
          content: 'Nach 10 Tagen: f(10) = 2 + 20 = 22 Schüler',
          hasError: true,
          errorExplanation:
            'Fehler: Richtig wäre f(10) = 2 · 2¹⁰ = 2048 Schüler. Das lineare Modell unterschätzt das tatsächliche Wachstum massiv.',
        },
        {
          content: 'Korrektes Modell: g(t) = 2 · 2^t = 2^(t+1), da sich die Zahl täglich verdoppelt.',
          hasError: false,
        },
      ],
    },
    hintKeys: [
      '"Doppelt so viele wie zuvor" → jeden Tag Multiplikation mit 2 → Exponentialfunktion.',
      'Unterschied: lineare Zunahme = gleicher Betrag wird addiert; exponentielles Wachstum = gleicher Faktor wird multipliziert.',
    ],
    solutionKey:
      'Schritte 1–3 enthalten Fehler: Das Modell ist falsch gewählt (linear statt exponentiell), alle Berechnungen sind daher falsch. Korrektes Modell: g(t) = 2 · 2^t. Tag 5: 64, Tag 10: 2048. Erst Schritt 4 ist korrekt.',
    tags: ['fehleranalyse', 'modellwahl', 'exponentiell', 'kritisch-denken'],
  },

  {
    id: 'fklass-erweitert-003',
    topicId: '10-funktionsklassen',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kreativität', 'kritisches-denken'],
    points: 15,
    timeEstimate: 10,
    data: {
      questionText:
        'Sei f(x) = x² und g(x) = 2^x. Betrachte die Kompositionen h₁(x) = f(g(x)) und h₂(x) = g(f(x)). Welche Aussage ist korrekt?',
      options: [
        {
          id: 'a',
          text: 'h₁(x) = (2^x)² = 2^(2x) — eine Exponentialfunktion; h₂(x) = 2^(x²) — ebenfalls exponentiell, aber mit quadratischem Exponent',
          correct: true,
        },
        {
          id: 'b',
          text: 'h₁(x) = 2^x² und h₂(x) = (2^x)² = 4^x — beide sind gleich',
          correct: false,
        },
        {
          id: 'c',
          text: 'h₁(x) = x⁴ und h₂(x) = x⁴ — Komposition zweier Funktionen ergibt immer eine Potenzfunktion',
          correct: false,
        },
        {
          id: 'd',
          text: 'Kompositionen sind nicht definiert, wenn f und g verschiedene Funktionsklassen sind',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'h₁(x) = f(g(x)): Zuerst g auswerten, dann f auf das Ergebnis anwenden.',
      'h₁: f(g(x)) = f(2^x) = (2^x)². Nutze die Potenzregel: (a^n)^m = a^(nm).',
    ],
    solutionKey:
      'h₁(x) = f(g(x)) = f(2^x) = (2^x)² = 2^(2x). Das ist eine Exponentialfunktion mit Basis 2 und verdoppeltem Exponent. h₂(x) = g(f(x)) = g(x²) = 2^(x²). Hier steht ein quadratischer Term im Exponenten – keine reine Exponentialfunktion im Standardsinne, aber exponentiell schnell wachsend. Antwort (a) beschreibt beide Kompositionen korrekt.',
    tags: ['komposition', 'funktionen-kombinieren', 'potenzregeln', 'kreativ'],
  },

  // ─── NEUE AUFGABEN (BASIS) ──────────────────────────────────────────────────

  {
    id: 'fkl-basis-004',
    topicId: '10-funktionsklassen',
    type: 'drag-match',
    diffLevel: 'basis',
    competencies: ['kritisches-denken'],
    points: 8,
    timeEstimate: 4,
    data: {
      questionText:
        'Ordne jede Funktionsgleichung dem passenden Funktionstyp zu.',
      pairs: [
        { id: 'p1', left: '$y = 2x + 1$', right: 'Linear' },
        { id: 'p2', left: '$y = x^2 - 3$', right: 'Quadratisch' },
        { id: 'p3', left: '$y = 2^x$', right: 'Exponentiell' },
        { id: 'p4', left: '$y = \\sin(x)$', right: 'Trigonometrisch' },
      ],
    },
    hintKeys: [
      'Schau auf den höchsten Exponenten von x: Exponent 1 → linear, Exponent 2 → quadratisch.',
      'Bei Exponentialfunktionen steht x im Exponenten der Basis. Sinus und Kosinus sind trigonometrische Funktionen.',
    ],
    solutionKey:
      '$y = 2x + 1$: linear (x in der 1. Potenz, Form $y = mx + b$). $y = x^2 - 3$: quadratisch (x² ist die höchste Potenz). $y = 2^x$: exponentiell (x steht im Exponenten). $y = \\sin(x)$: trigonometrisch (Sinus-Funktion).',
    tags: ['funktionstyp', 'zuordnung', 'drag-match', 'basis'],
  },

  {
    id: 'fkl-basis-005',
    topicId: '10-funktionsklassen',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Welche Beschreibung passt zum Graphen einer linearen Funktion?',
      options: [
        { id: 'a', text: 'Eine nach oben geöffnete Parabel', correct: false },
        { id: 'b', text: 'Eine Gerade, die schräg durch das Koordinatensystem verläuft', correct: true },
        { id: 'c', text: 'Eine S-förmige Kurve, die sich einer Waagrechten annähert', correct: false },
        { id: 'd', text: 'Eine Wellenkurve, die sich periodisch wiederholt', correct: false },
      ],
    },
    hintKeys: [
      'Der Name "linear" kommt vom lateinischen "linea" = Linie.',
      'Lineare Funktionen haben die Form $f(x) = mx + b$. Jede solche Funktion ist eine Gerade im Koordinatensystem.',
    ],
    solutionKey:
      'Eine lineare Funktion $f(x) = mx + b$ hat immer eine Gerade als Graph. Parabeln gehören zu quadratischen Funktionen, S-Kurven zu Exponentialfunktionen (für bestimmte Darstellungen), Wellenkurven zu trigonometrischen Funktionen.',
    tags: ['linear', 'graph', 'erkennen', 'basis'],
  },

  // ─── NEUE AUFGABEN (STANDARD) ───────────────────────────────────────────────

  {
    id: 'fkl-standard-004',
    topicId: '10-funktionsklassen',
    type: 'step-solver',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kollaboration'],
    points: 12,
    timeEstimate: 10,
    data: {
      questionText:
        'Handyvertrags-Vergleich: Vertrag A kostet $10{,}00\\,€$ Grundgebühr plus $0{,}10\\,€$ pro Minute. Vertrag B kostet $5{,}00\\,€$ Grundgebühr, der Preis steigt aber monatlich um $5\\,\\%$ je Minute mehr.\n\nModelliere beide Verträge als Funktionen und bestimme, ab welcher Minutenzahl $m$ Vertrag B teurer wird.',
      steps: [
        {
          instruction: 'Welcher Funktionstyp beschreibt Vertrag A ($10 + 0{,}10 \\cdot m$)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Exponentialfunktion', correct: false },
            { id: 'b', text: 'Lineare Funktion', correct: true },
            { id: 'c', text: 'Quadratische Funktion', correct: false },
          ],
          correctId: 'b',
          showAnswer: true,
        },
        {
          instruction: 'Welcher Funktionstyp beschreibt Vertrag B ($5 \\cdot 1{,}05^m$)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Lineare Funktion', correct: false },
            { id: 'b', text: 'Quadratische Funktion', correct: false },
            { id: 'c', text: 'Exponentialfunktion', correct: true },
          ],
          correctId: 'c',
          showAnswer: true,
        },
        {
          instruction: 'Bei welcher ganzzahligen Minutenzahl $m$ ist Vertrag B erstmals teurer als Vertrag A? (Näherung durch Einsetzen: probiere $m = 30, 40, 50$)',
          type: 'numeric-input',
          expected: 45,
          tolerance: 5,
          showAnswer: true,
        },
      ],
    },
    hintKeys: [
      'Vertrag A: konstante Zunahme pro Minute → linear. Vertrag B: prozentuale Zunahme → exponentiell.',
      'Setze beide gleich: $10 + 0{,}10m = 5 \\cdot 1{,}05^m$. Für $m = 40$: A = 14,00 €, B ≈ 35,20 €. Für $m = 30$: A = 13,00 €, B ≈ 21,61 €.',
    ],
    solutionKey:
      'Vertrag A: $f(m) = 10 + 0{,}10m$ (linear). Vertrag B: $g(m) = 5 \\cdot 1{,}05^m$ (exponentiell). Für kleine $m$ ist B günstiger (niedrige Grundgebühr). Ab ca. $m = 45$ Minuten überholt das exponentielle Wachstum von B die lineare Kurve von A.',
    tags: ['sachkontext', 'handyvertrag', 'linear', 'exponentiell', 'schnittpunkt'],
  },

  {
    id: 'fkl-standard-005',
    topicId: '10-funktionsklassen',
    type: 'drag-match',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Ordne jeden Sachkontext dem passenden Funktionstyp zu.',
      pairs: [
        { id: 'p1', left: 'Wasserstand in einem Tank steigt gleichmäßig um 5 Liter pro Minute', right: 'Linear' },
        { id: 'p2', left: 'Bakterien verdoppeln sich alle 20 Minuten', right: 'Exponentiell' },
        { id: 'p3', left: 'Eine Schaukel schwingt hin und her — periodisch', right: 'Trigonometrisch' },
        { id: 'p4', left: 'Ein geworfener Ball fliegt eine Wurfparabel', right: 'Quadratisch' },
      ],
    },
    hintKeys: [
      'Konstante Änderungsrate (immer gleich viel mehr) → linear. Konstanter Faktor (immer das x-fache) → exponentiell.',
      'Periodisch = wiederholt sich regelmäßig → trigonometrisch. Parabel = quadratisch.',
    ],
    solutionKey:
      'Wasserstand gleichmäßig: $f(t) = 5t$ → linear (konstante Zunahme). Bakterien verdoppeln: $f(t) = f_0 \\cdot 2^{t/20}$ → exponentiell (konstanter Faktor). Schaukel: $f(t) = A \\cdot \\sin(\\omega t)$ → trigonometrisch (periodisch). Ball: $h(t) = -g t^2/2 + v_0 t$ → quadratisch (Parabel).',
    tags: ['sachkontext', 'drag-match', 'funktionstyp', 'anwendung'],
  },

  {
    id: 'fkl-standard-006',
    topicId: '10-funktionsklassen',
    type: 'error-analysis',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 10,
    timeEstimate: 8,
    data: {
      questionText:
        'Ein Schüler behauptet: "Die Funktion $f(x) = 3 \\cdot 2^x$ ist linear, weil da \'mal 3\' steht." Analysiere seine Argumentation Schritt für Schritt.',
      steps: [
        {
          content: 'Schüler: "Ich sehe einen Faktor 3 vor dem x, also ist es linear wie $f(x) = 3x$."',
          hasError: true,
          errorExplanation:
            'Fehler: Der Schüler verwechselt $3 \\cdot 2^x$ mit $3x$. Bei $f(x) = 3 \\cdot 2^x$ ist $3$ ein konstanter Vorfaktor, aber $x$ steht im Exponenten der Basis 2 — nicht als Multiplikand.',
        },
        {
          content: 'Schüler: "Der Graph müsste also eine Gerade sein."',
          hasError: true,
          errorExplanation:
            'Fehler: Da $f(x) = 3 \\cdot 2^x$ eine Exponentialfunktion ist, hat sie keinen geraden, sondern einen exponentiell ansteigenden Graph. Bei $x = 0$: $f(0) = 3$; bei $x = 5$: $f(5) = 96$ — keine konstante Steigung.',
        },
        {
          content: 'Richtig: Bei $f(x) = 3 \\cdot 2^x$ steht $x$ im Exponenten. Das ist das Kennzeichen einer Exponentialfunktion, unabhängig vom Vorfaktor.',
          hasError: false,
        },
      ],
    },
    hintKeys: [
      'Entscheidend ist, WO die Variable $x$ steht: als Basis mit festem Exponenten (Potenzfunktion), als direkte Variable (linear) oder im Exponenten einer festen Basis (exponentiell).',
      'Prüfe: Ist die Steigung $f(x+1) - f(x)$ konstant? Bei $3 \\cdot 2^x$: $f(1) - f(0) = 6 - 3 = 3$, $f(2) - f(1) = 12 - 6 = 6$ — nicht konstant!',
    ],
    solutionKey:
      'Die Funktion $f(x) = 3 \\cdot 2^x$ ist eine Exponentialfunktion. Der Vorfaktor $3$ verändert den Typ nicht. Entscheidend: $x$ steht im Exponenten der Basis $2$. Lineare Funktionen haben die Form $f(x) = mx + b$, wobei $x$ zur ersten Potenz auftritt.',
    tags: ['fehleranalyse', 'exponentiell', 'vorfaktor', 'fehlkonzept'],
  },

  // ─── NEUE AUFGABEN (ERWEITERT) ───────────────────────────────────────────────

  {
    id: 'fkl-erweitert-004',
    topicId: '10-funktionsklassen',
    type: 'step-solver',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kollaboration'],
    points: 15,
    timeEstimate: 12,
    data: {
      questionText:
        'Gegeben ist folgende Wertetabelle:\n\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $y$ | 2 | 5 | 10 | 17 | 26 |\n\nBestimme durch systematische Differenzenanalyse, welcher Funktionstyp vorliegt.',
      steps: [
        {
          instruction: 'Berechne die ersten Differenzen $\\Delta y = y_{n+1} - y_n$. Sind sie konstant?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Ja, alle Differenzen sind gleich → lineare Funktion', correct: false },
            { id: 'b', text: 'Nein, die Differenzen sind 3, 5, 7, 9 — wachsend', correct: true },
            { id: 'c', text: 'Die Quotienten sind konstant → Exponentialfunktion', correct: false },
          ],
          correctId: 'b',
          showAnswer: true,
        },
        {
          instruction: 'Berechne die zweiten Differenzen $\\Delta^2 y = \\Delta y_{n+1} - \\Delta y_n$. Was stellst du fest?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Die zweiten Differenzen sind 2, 2, 2 — konstant → quadratische Funktion', correct: true },
            { id: 'b', text: 'Die zweiten Differenzen wachsen weiter → kubische Funktion', correct: false },
            { id: 'c', text: 'Die zweiten Differenzen sind nicht berechenbar', correct: false },
          ],
          correctId: 'a',
          showAnswer: true,
        },
        {
          instruction: 'Welcher Wert von $a$ ergibt sich für $f(x) = ax^2 + bx + c$, wenn die zweiten Differenzen konstant gleich 2 sind? (Hinweis: konstante zweite Differenz = $2a$)',
          type: 'numeric-input',
          expected: 1,
          tolerance: 0.01,
          showAnswer: true,
        },
      ],
    },
    hintKeys: [
      'Erste Differenzen konstant → linear. Zweite Differenzen konstant → quadratisch. Quotienten konstant → exponentiell.',
      'Erste Differenzen: $5-2=3$, $10-5=5$, $17-10=7$, $26-17=9$. Zweite Differenzen: $5-3=2$, $7-5=2$, $9-7=2$ — konstant!',
    ],
    solutionKey:
      'Die ersten Differenzen (3, 5, 7, 9) sind nicht konstant → nicht linear. Die zweiten Differenzen (2, 2, 2) sind konstant → quadratische Funktion. Aus $2a = 2$ folgt $a = 1$. Die Funktion lautet $f(x) = x^2 + 2x + 2$ (durch Einsetzen der Tabellenwerte zu bestimmen).',
    tags: ['wertetabelle', 'differenzenanalyse', 'quadratisch', 'systematisch'],
  },

  {
    id: 'fkl-erweitert-005',
    topicId: '10-funktionsklassen',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken'],
    points: 12,
    timeEstimate: 8,
    data: {
      questionText:
        'Welche der folgenden Funktionen wächst für sehr große $x$-Werte langfristig am stärksten?',
      options: [
        { id: 'a', text: '$f(x) = x^2$ (quadratisch)', correct: false },
        { id: 'b', text: '$g(x) = 2^x$ (exponentiell)', correct: true },
        { id: 'c', text: '$h(x) = 100x$ (linear mit großem Faktor)', correct: false },
        { id: 'd', text: '$k(x) = x^3$ (kubisch)', correct: false },
      ],
    },
    hintKeys: [
      'Vergleiche die Werte bei $x = 20$: linear: 2000, quadratisch: 400, kubisch: 8000, exponentiell: $2^{20} = 1\\,048\\,576$.',
      'Jedes Polynom (egal welchen Grades) wird langfristig von jeder Exponentialfunktion mit Basis $> 1$ übertroffen.',
    ],
    solutionKey:
      'Exponentialfunktionen wachsen langfristig stärker als jedes Polynom. Bei $x = 20$: $h(20) = 2000$, $f(20) = 400$, $k(20) = 8000$, $g(20) = 2^{20} \\approx 10^6$. Bei $x = 100$: $g(100) = 2^{100} \\approx 10^{30}$, während $k(100) = 10^6$ winzig dagegen erscheint.',
    tags: ['wachstumsvergleich', 'exponentiell', 'polynome', 'langzeitverhalten'],
  },

  {
    id: 'fkl-erweitert-006',
    topicId: '10-funktionsklassen',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken'],
    points: 12,
    timeEstimate: 8,
    data: {
      questionText:
        'Bestimme die positive $x$-Koordinate des Schnittpunkts von $f(x) = x^2$ und $g(x) = 2x + 3$.',
      correctValue: 3,
      tolerance: 0.01,
    },
    hintKeys: [
      'Setze $f(x) = g(x)$: $x^2 = 2x + 3$, also $x^2 - 2x - 3 = 0$.',
      'Faktorisiere: $(x - 3)(x + 1) = 0$. Die Lösungen sind $x = 3$ und $x = -1$.',
    ],
    solutionKey:
      'Gleichsetzen: $x^2 = 2x + 3 \\Rightarrow x^2 - 2x - 3 = 0$. Faktorisierung: $(x-3)(x+1) = 0$. Lösungen: $x = 3$ und $x = -1$. Die positive Lösung ist $x = 3$. Probe: $f(3) = 9$, $g(3) = 2 \\cdot 3 + 3 = 9$ ✓',
    tags: ['schnittpunkt', 'quadratisch', 'linear', 'gleichsetzen'],
  },

  // ─── NEUE AUFGABEN (ERWEITERTES ANWENDUNGSNIVEAU) ───────────────────────────

  {
    id: 'fkl-ea-001',
    topicId: '10-funktionsklassen',
    type: 'step-solver',
    diffLevel: 'erweitert',
    competencies: ['kreativität', 'kritisches-denken', 'kommunikation'],
    points: 18,
    timeEstimate: 15,
    data: {
      questionText:
        'Das Café "Lernpause" erfasst seinen stündlichen Umsatz über den Tag:\n\n- **6–9 Uhr (Morgen)**: Umsatz verdoppelt sich jede Stunde: 50 € → 100 € → 200 €\n- **9–15 Uhr (Mittag)**: Umsatz bleibt konstant bei ca. 200 €/h\n- **15–20 Uhr (Abend)**: Umsatz fällt gleichmäßig von 200 € auf 0 €\n\nWelche Funktionstypen passen zu welchem Zeitraum?',
      steps: [
        {
          instruction: 'Welcher Funktionstyp beschreibt den Morgen (6–9 Uhr, Verdopplung jede Stunde)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Linear — gleichmäßige Zunahme', correct: false },
            { id: 'b', text: 'Exponentiell — konstanter Wachstumsfaktor', correct: true },
            { id: 'c', text: 'Trigonometrisch — periodisches Muster', correct: false },
          ],
          correctId: 'b',
          showAnswer: true,
        },
        {
          instruction: 'Welcher Funktionstyp beschreibt die Mittagszeit (9–15 Uhr, konstanter Umsatz)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Konstante Funktion $f(t) = 200$ (Sonderfall linear mit Steigung 0)', correct: true },
            { id: 'b', text: 'Quadratisch — mit Scheitelpunkt in der Mitte', correct: false },
            { id: 'c', text: 'Exponentiell — Basis ist 1', correct: false },
          ],
          correctId: 'a',
          showAnswer: true,
        },
        {
          instruction: 'Welcher Funktionstyp beschreibt den Abend (15–20 Uhr, gleichmäßiger Rückgang)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Exponentieller Zerfall', correct: false },
            { id: 'b', text: 'Linear — konstante Abnahme pro Stunde', correct: true },
            { id: 'c', text: 'Quadratisch — beschleunigter Rückgang', correct: false },
          ],
          correctId: 'b',
          showAnswer: true,
        },
      ],
    },
    hintKeys: [
      'Verdopplung in gleichen Zeitabständen = konstanter Multiplikator = exponentielles Wachstum.',
      'Gleichmäßiger Rückgang = konstante negative Steigung = lineare Abnahme. Konstant = lineare Funktion mit Steigung 0.',
    ],
    solutionKey:
      'Morgen: $f(t) = 50 \\cdot 2^{t-6}$ (exponentiell, Verdopplung jede Stunde). Mittag: $f(t) = 200$ (konstant, Sonderfall linear). Abend: $f(t) = 200 - 40(t - 15)$ (linear, Steigung $-40$ €/h, fällt in 5 h von 200 auf 0). Ein realer Tagesumsatz setzt sich also aus verschiedenen Funktionstypen zusammen.',
    tags: ['sachkontext', 'café', 'zusammengesetzte-funktion', 'modellierung', 'kreativ'],
  },

  {
    id: 'fkl-ea-002',
    topicId: '10-funktionsklassen',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 10,
    data: {
      questionText:
        'Warum kann eine quadratische Funktion $f(x) = ax^2 + bx + c$ mit $a \\neq 0$ maximal zwei Nullstellen haben?',
      options: [
        {
          id: 'a',
          text: 'Weil eine Parabel symmetrisch ist und deshalb höchstens zwei Punkte auf der $x$-Achse liegen kann.',
          correct: false,
        },
        {
          id: 'b',
          text: 'Weil eine Gleichung vom Grad 2 nach dem Fundamentalsatz der Algebra höchstens 2 Lösungen in $\\mathbb{R}$ hat — der Grad des Polynoms bestimmt die maximale Anzahl der Nullstellen.',
          correct: true,
        },
        {
          id: 'c',
          text: 'Weil die Diskriminante $D = b^2 - 4ac$ nur zwei Werte annehmen kann.',
          correct: false,
        },
        {
          id: 'd',
          text: 'Weil quadratische Funktionen immer einen Scheitelpunkt haben, der genau eine Nullstelle erzeugt.',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Der Fundamentalsatz der Algebra besagt: Ein Polynom vom Grad $n$ hat genau $n$ Nullstellen in $\\mathbb{C}$ (mit Vielfachheiten gezählt).',
      'In $\\mathbb{R}$ können komplexe Nullstellen auftreten, die wir nicht sehen — daher "höchstens" 2 reelle Nullstellen.',
    ],
    solutionKey:
      'Nach dem Fundamentalsatz der Algebra hat ein Polynom vom Grad $n$ in $\\mathbb{C}$ genau $n$ Nullstellen (mit Vielfachheiten). Für $n = 2$ gibt es also höchstens 2 reelle Nullstellen (die anderen könnten komplex sein, wenn $D < 0$). Die Symmetrie der Parabel ist eine Folge des Grades, nicht die eigentliche Ursache. Die Diskriminante entscheidet, ob 0, 1 oder 2 reelle Nullstellen vorliegen.',
    tags: ['nullstellen', 'grad', 'polynom', 'fundamentalsatz', 'begruendung'],
  },
];
