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
    competencies: ['kreativitaet', 'kritisches-denken'],
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
];
