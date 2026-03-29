export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'elog-basis-001', topicId: '11-exp-log', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Berechne den Funktionswert $f(x) = e^x$ an der Stelle $x = 0$. Gib das Ergebnis als ganze Zahl an.',
      correctValue: 1,
      tolerance: 0,
    },
    hintKeys: ['Es gilt: $e^0 = 1$ für jede Basis. Die e-Funktion hat bei $x = 0$ immer den Wert 1.'],
    solutionKey: '$e^0 = 1$. Die e-Funktion schneidet die y-Achse immer beim Punkt $(0 | 1)$.',
    tags: ['e-funktion', 'funktionswert', 'definition'],
  },

  {
    id: 'elog-basis-002', topicId: '11-exp-log', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welche der folgenden Aussagen über den natürlichen Logarithmus ist korrekt?',
      options: [
        { id: 'a', text: '$\\ln(e) = 1$', correct: true },
        { id: 'b', text: '$\\ln(0) = 0$', correct: false },
        { id: 'c', text: '$\\ln(1) = e$', correct: false },
        { id: 'd', text: '$\\ln(e) = 0$', correct: false },
      ],
    },
    hintKeys: ['Der natürliche Logarithmus ist die Umkehrfunktion von $e^x$. Überlege: für welches $x$ gilt $e^x = e$?'],
    solutionKey: '$\\ln(e) = 1$, denn $e^1 = e$. Außerdem gilt $\\ln(1) = 0$, da $e^0 = 1$.',
    tags: ['logarithmus', 'ln', 'definition', 'ln-e', 'ln-1'],
  },

  {
    id: 'elog-basis-003', topicId: '11-exp-log', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Berechne: $e^{\\ln(7)}$ = ?',
      correctValue: 7,
      tolerance: 0.001,
    },
    hintKeys: ['Die Umkehrbeziehung lautet: $e^{\\ln(x)} = x$ für alle $x > 0$.'],
    solutionKey: '$e^{\\ln(7)} = 7$. Allgemein gilt: $e^{\\ln(x)} = x$, da $e^x$ und $\\ln(x)$ Umkehrfunktionen voneinander sind.',
    tags: ['umkehrbeziehung', 'e-hoch-ln', 'definition'],
  },

  {
    id: 'elog-basis-004', topicId: '11-exp-log', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Ein Bestand wächst exponentiell. Der Anfangswert beträgt $N_0 = 500$, die Wachstumsrate $k = 0{,}1$ pro Stunde. Welche Formel beschreibt den Bestand nach $t$ Stunden?',
      options: [
        { id: 'a', text: '$N(t) = 500 \\cdot e^{0{,}1 \\cdot t}$', correct: true },
        { id: 'b', text: '$N(t) = 500 + e^{0{,}1 \\cdot t}$', correct: false },
        { id: 'c', text: '$N(t) = 500 \\cdot 0{,}1^t$', correct: false },
        { id: 'd', text: '$N(t) = e^{500 \\cdot 0{,}1 \\cdot t}$', correct: false },
      ],
    },
    hintKeys: ['Das allgemeine Wachstumsmodell lautet: $N(t) = N_0 \\cdot e^{k \\cdot t}$. $N_0$ ist der Startwert, $k$ die Wachstumskonstante.'],
    solutionKey: '$N(t) = 500 \\cdot e^{0{,}1 \\cdot t}$ ist das Standardmodell für exponentielles Wachstum mit $N_0 = 500$ und $k = 0{,}1$.',
    tags: ['wachstumsmodell', 'e-funktion', 'formel'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ──────────────────────────────────────

  {
    id: 'elog-standard-001', topicId: '11-exp-log', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 8,
    contextKey: 'Radioaktiver Zerfall',
    data: {
      questionText: 'Eine radioaktive Substanz zerfällt nach $N(t) = 800 \\cdot e^{-0{,}035 \\cdot t}$ (t in Jahren). Berechne schrittweise die Halbwertszeit.',
      steps: [
        {
          instruction: 'Setze $N(t) = \\frac{N_0}{2} = 400$ und löse $800 \\cdot e^{-0{,}035 \\cdot t} = 400$. Dividiere zunächst beide Seiten durch 800. Was erhältst du?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$e^{-0{,}035 \\cdot t} = 0{,}5$', correct: true },
            { id: 'b', text: '$e^{-0{,}035 \\cdot t} = 400$', correct: false },
            { id: 'c', text: '$-0{,}035 \\cdot t = 0{,}5$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$e^{-0{,}035 \\cdot t} = 0{,}5$',
        },
        {
          instruction: 'Wende $\\ln$ auf beiden Seiten an: $\\ln(e^{-0{,}035 \\cdot t}) = \\ln(0{,}5)$. Es gilt $\\ln(0{,}5) \\approx -0{,}6931$. Was ist $-0{,}035 \\cdot t$?',
          type: 'numeric-input', expected: -0.6931, tolerance: 0.001,
          showAnswer: '$-0{,}035 \\cdot t = \\ln(0{,}5) \\approx -0{,}6931$',
        },
        {
          instruction: 'Teile durch $-0{,}035$: $t = \\frac{-0{,}6931}{-0{,}035}$. Berechne die Halbwertszeit in Jahren (auf ganze Jahre gerundet).',
          type: 'numeric-input', expected: 19.8, tolerance: 0.5,
          showAnswer: '$t_{1/2} = \\frac{0{,}6931}{0{,}035} \\approx 19{,}8 \\approx 20$ Jahre',
        },
      ],
    },
    hintKeys: [
      'Halbwertszeit: Der Bestand soll auf die Hälfte gesunken sein → $N(t) = N_0 / 2$.',
      'Nach dem Dividieren: Logarithmiere beide Seiten mit $\\ln$.',
      '$\\ln(0{,}5) = \\ln(1/2) = -\\ln(2) \\approx -0{,}6931$.',
    ],
    solutionKey: '$800 \\cdot e^{-0{,}035 t} = 400 \\Rightarrow e^{-0{,}035 t} = 0{,}5 \\Rightarrow t = \\frac{\\ln(0{,}5)}{-0{,}035} \\approx 19{,}8$ Jahre.',
    tags: ['halbwertszeit', 'zerfall', 'logarithmus', 'step-solver'],
  },

  {
    id: 'elog-standard-002', topicId: '11-exp-log', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    contextKey: 'Bakterienwachstum',
    data: {
      questionText: 'Eine Bakterienkultur startet mit $N_0 = 200$ Bakterien und wächst nach $N(t) = 200 \\cdot e^{0{,}05 \\cdot t}$ (t in Minuten). Nach wie vielen Minuten ist die Anzahl auf 1000 gestiegen? (auf ganze Minuten runden)',
      correctValue: 32,
      tolerance: 1,
    },
    hintKeys: [
      'Setze $N(t) = 1000$: $200 \\cdot e^{0{,}05 t} = 1000$.',
      'Dividiere durch 200: $e^{0{,}05 t} = 5$. Wende $\\ln$ an.',
      '$t = \\frac{\\ln(5)}{0{,}05}$. $\\ln(5) \\approx 1{,}609$.',
    ],
    solutionKey: '$200 \\cdot e^{0{,}05 t} = 1000 \\Rightarrow e^{0{,}05 t} = 5 \\Rightarrow t = \\frac{\\ln(5)}{0{,}05} = \\frac{1{,}609}{0{,}05} \\approx 32$ Minuten.',
    tags: ['wachstumsmodell', 'gleichung-loesen', 'sachkontext'],
  },

  {
    id: 'elog-standard-003', topicId: '11-exp-log', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 4,
    data: {
      questionText: 'Ordne jeden Sachkontext dem passenden Funktionstyp zu.',
      pairs: [
        { id: 'a', left: 'Instagram-Follower verdoppeln sich wöchentlich', right: 'Exponentielles Wachstum' },
        { id: 'b', left: 'Radioaktives Uran zerfällt über Jahrtausende', right: 'Exponentieller Zerfall' },
        { id: 'c', left: 'Kaffee kühlt auf Zimmertemperatur ab', right: 'Sättigungsfunktion' },
        { id: 'd', left: 'Kreditbetrag nach 10 Jahren mit 3 % Zinsen', right: 'Exponentielles Wachstum' },
      ],
    },
    hintKeys: [
      'Wachstum: $N(t) = N_0 \\cdot e^{kt}$ mit $k > 0$. Zerfall: $k < 0$.',
      'Sättigung: nähert sich einem Grenzwert, z.B. $T(t) = T_{\\text{Raum}} + (T_0 - T_{\\text{Raum}}) \\cdot e^{-kt}$.',
    ],
    solutionKey: 'Instagram & Kredit = Wachstum ($k > 0$); Uran = Zerfall ($k < 0$); Kaffee = Sättigung (nähert sich Raumtemperatur).',
    tags: ['drag-match', 'sachkontext', 'wachstum-zerfall-saettigung'],
  },

  {
    id: 'elog-standard-004', topicId: '11-exp-log', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Vereinfache mit den Logarithmengesetzen: $\\ln(e^3 \\cdot e^5)$ = ?',
      correctValue: 8,
      tolerance: 0.001,
    },
    hintKeys: [
      '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$.',
      '$\\ln(e^n) = n$.',
    ],
    solutionKey: '$\\ln(e^3 \\cdot e^5) = \\ln(e^3) + \\ln(e^5) = 3 + 5 = 8$. Alternativ: $e^3 \\cdot e^5 = e^8$, also $\\ln(e^8) = 8$.',
    tags: ['logarithmengesetze', 'vereinfachen', 'ln'],
  },

  {
    id: 'elog-standard-005', topicId: '11-exp-log', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Ein Medikament zerfällt im Körper nach $C(t) = 100 \\cdot e^{-0{,}2 \\cdot t}$ mg. Welche Konzentration liegt nach 5 Stunden vor? ($e^{-1} \\approx 0{,}368$)',
      options: [
        { id: 'a', text: '$C(5) \\approx 36{,}8$ mg', correct: true },
        { id: 'b', text: '$C(5) \\approx 20$ mg', correct: false },
        { id: 'c', text: '$C(5) \\approx 50$ mg', correct: false },
        { id: 'd', text: '$C(5) \\approx 63{,}2$ mg', correct: false },
      ],
    },
    hintKeys: [
      '$C(5) = 100 \\cdot e^{-0{,}2 \\cdot 5} = 100 \\cdot e^{-1}$.',
      '$e^{-1} \\approx 0{,}368$.',
    ],
    solutionKey: '$C(5) = 100 \\cdot e^{-1} = 100 \\cdot 0{,}368 = 36{,}8$ mg.',
    tags: ['zerfall', 'sachkontext', 'medikament', 'e-funktion'],
  },

  // ─── ERWEITERT (AFB III) – 5 Aufgaben ─────────────────────────────────────

  {
    id: 'elog-erweitert-001', topicId: '11-exp-log', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 10,
    contextKey: 'Instagram-Follower',
    data: {
      questionText: 'Ein Instagram-Account hat aktuell 1.200 Follower. Die Follower-Zahl wächst täglich um 8 %. Modelliere die Situation mit $N(t) = N_0 \\cdot e^{kt}$ und berechne, nach wie vielen Tagen 10.000 Follower erreicht werden.',
      steps: [
        {
          instruction: 'Welche Wachstumskonstante $k$ beschreibt 8 % tägliches Wachstum? Tipp: $k = \\ln(1{,}08)$. Berechne $k$ auf 4 Dezimalstellen.',
          type: 'numeric-input', expected: 0.0770, tolerance: 0.0005,
          showAnswer: '$k = \\ln(1{,}08) \\approx 0{,}0770$',
        },
        {
          instruction: 'Stelle die Gleichung $1200 \\cdot e^{0{,}077 t} = 10000$ auf und löse nach $e^{0{,}077 t}$. Was erhältst du (auf 4 Stellen)?',
          type: 'numeric-input', expected: 8.333, tolerance: 0.01,
          showAnswer: '$e^{0{,}077 t} = \\frac{10000}{1200} \\approx 8{,}333$',
        },
        {
          instruction: 'Berechne $t = \\frac{\\ln(8{,}333)}{0{,}077}$ (auf ganze Tage runden). $\\ln(8{,}333) \\approx 2{,}120$.',
          type: 'numeric-input', expected: 28, tolerance: 1,
          showAnswer: '$t = \\frac{2{,}120}{0{,}077} \\approx 27{,}5 \\approx 28$ Tage',
        },
      ],
    },
    hintKeys: [
      'Wachstumsrate $r = 8\\% = 0{,}08$ bedeutet: Faktor pro Tag = $1{,}08$. Es gilt $k = \\ln(b)$.',
      'Nach dem Dividieren: Logarithmiere mit $\\ln$.',
    ],
    solutionKey: '$k = \\ln(1{,}08) \\approx 0{,}077$. $1200 \\cdot e^{0{,}077 t} = 10000 \\Rightarrow t = \\frac{\\ln(10000/1200)}{0{,}077} \\approx 28$ Tage.',
    tags: ['step-solver', 'instagram', 'wachstum', 'sachkontext'],
  },

  {
    id: 'elog-erweitert-002', topicId: '11-exp-log', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 10,
    contextKey: 'Kaffee abkühlen',
    data: {
      questionText: 'Newtons Abkühlungsgesetz: $T(t) = T_{\\text{Raum}} + (T_0 - T_{\\text{Raum}}) \\cdot e^{-k \\cdot t}$. Ein Kaffee hat $T_0 = 90$ °C, Raumtemperatur $T_{\\text{Raum}} = 20$ °C, $k = 0{,}05$ min⁻¹. Berechne schrittweise $T(20)$.',
      steps: [
        {
          instruction: 'Berechne zuerst $(T_0 - T_{\\text{Raum}}) = 90 - 20$.',
          type: 'numeric-input', expected: 70, tolerance: 0,
          showAnswer: '$T_0 - T_{\\text{Raum}} = 70$ °C',
        },
        {
          instruction: 'Berechne den Exponenten $-k \\cdot t = -0{,}05 \\cdot 20$.',
          type: 'numeric-input', expected: -1, tolerance: 0,
          showAnswer: '$-0{,}05 \\cdot 20 = -1$',
        },
        {
          instruction: 'Berechne $T(20) = 20 + 70 \\cdot e^{-1}$. Nutze $e^{-1} \\approx 0{,}368$. Gib das Ergebnis in °C an.',
          type: 'numeric-input', expected: 45.76, tolerance: 0.5,
          showAnswer: '$T(20) = 20 + 70 \\cdot 0{,}368 = 20 + 25{,}76 \\approx 45{,}8$ °C',
        },
      ],
    },
    hintKeys: [
      'Setze alle Werte in die Formel ein. Berechne Schritt für Schritt.',
      '$e^{-1} \\approx 0{,}368$.',
    ],
    solutionKey: '$T(20) = 20 + (90 - 20) \\cdot e^{-0{,}05 \\cdot 20} = 20 + 70 \\cdot e^{-1} \\approx 20 + 25{,}8 \\approx 45{,}8$ °C.',
    tags: ['newton-abkuehlung', 'sachkontext', 'step-solver', 'kaffee'],
  },

  {
    id: 'elog-erweitert-003', topicId: '11-exp-log', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 15, timeEstimate: 8,
    data: {
      questionText: 'Löse die Gleichung $3 \\cdot e^{2x} - 12 = 0$ nach $x$ auf. Gib das Ergebnis auf 3 Dezimalstellen gerundet an. ($\\ln(4) \\approx 1{,}386$)',
      correctValue: 0.693,
      tolerance: 0.002,
    },
    hintKeys: [
      'Addiere 12, dann teile durch 3: $e^{2x} = 4$.',
      'Logarithmiere: $2x = \\ln(4)$. Teile durch 2.',
      '$\\ln(4) = 2 \\cdot \\ln(2) \\approx 2 \\cdot 0{,}693 = 1{,}386$.',
    ],
    solutionKey: '$3 e^{2x} = 12 \\Rightarrow e^{2x} = 4 \\Rightarrow 2x = \\ln(4) \\approx 1{,}386 \\Rightarrow x = \\frac{\\ln(4)}{2} \\approx 0{,}693$.',
    tags: ['gleichung-loesen', 'e-funktion', 'logarithmus'],
  },

  {
    id: 'elog-erweitert-004', topicId: '11-exp-log', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 12, timeEstimate: 6,
    data: {
      questionText: 'Finde den Fehler. Aufgabe: Vereinfache $\\ln(e^4) + \\ln(1)$.',
      steps: [
        { content: '$\\ln(e^4) = 4$', hasError: false },
        { content: '$\\ln(1) = 1$', hasError: true, errorExplanation: 'Fehler: $\\ln(1) = 0$, nicht 1! Es gilt $e^0 = 1$, also $\\ln(1) = 0$. Richtig: $4 + 0 = 4$.' },
        { content: '$\\ln(e^4) + \\ln(1) = 4 + 1 = 5$', hasError: true, errorExplanation: 'Folgt aus dem Fehler in Schritt 2. Richtig: $4 + 0 = 4$.' },
      ],
    },
    hintKeys: ['$\\ln(1) = 0$, weil $e^0 = 1$.'],
    solutionKey: '$\\ln(e^4) + \\ln(1) = 4 + 0 = 4$.',
    tags: ['fehleranalyse', 'logarithmengesetze', 'ln-1'],
  },

  {
    id: 'elog-erweitert-005', topicId: '11-exp-log', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 8,
    contextKey: 'Logarithmengesetze',
    data: {
      questionText: 'Welcher Ausdruck ist äquivalent zu $\\ln\\left(\\frac{a^3}{b}\\right)$?',
      options: [
        { id: 'a', text: '$3 \\cdot \\ln(a) - \\ln(b)$', correct: true },
        { id: 'b', text: '$3 \\cdot \\ln(a) + \\ln(b)$', correct: false },
        { id: 'c', text: '$\\ln(a^3) \\cdot \\ln(b)$', correct: false },
        { id: 'd', text: '$\\frac{3 \\cdot \\ln(a)}{\\ln(b)}$', correct: false },
      ],
    },
    hintKeys: [
      'Logarithmus eines Quotienten: $\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)$.',
      'Logarithmus einer Potenz: $\\ln(a^n) = n \\cdot \\ln(a)$.',
    ],
    solutionKey: '$\\ln\\left(\\frac{a^3}{b}\\right) = \\ln(a^3) - \\ln(b) = 3 \\cdot \\ln(a) - \\ln(b)$.',
    tags: ['logarithmengesetze', 'quotient', 'potenz', 'umformen'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 2 Aufgaben ───────────────────────

  {
    id: 'elog-ea-001', topicId: '11-exp-log', type: 'multiple-choice', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'], points: 20, timeEstimate: 12,
    data: {
      questionText: 'Warum gilt für die Ableitung $f(x) = e^{kx}$: $f\'(x) = k \\cdot e^{kx}$? Welche Begründung ist mathematisch korrekt?',
      options: [
        { id: 'a', text: 'Durch die Kettenregel: äußere Ableitung $e^{kx}$ bleibt, innere Ableitung von $kx$ ergibt den Faktor $k$.', correct: true },
        { id: 'b', text: 'Weil $e^{kx}$ sich mit der Produktregel ableiten lässt: $k \\cdot x \\cdot e^{kx-1}$.', correct: false },
        { id: 'c', text: 'Die e-Funktion ist ihre eigene Ableitung — der Faktor $k$ entsteht durch Addition.', correct: false },
        { id: 'd', text: 'Es gilt $\\frac{d}{dx} e^{kx} = x \\cdot e^{kx - 1}$, analog zur Potenzregel.', correct: false },
      ],
    },
    hintKeys: [
      'Die Kettenregel: $(f \\circ g)\' = f\'(g(x)) \\cdot g\'(x)$. Hier ist $f(u) = e^u$ und $g(x) = kx$.',
      '$f\'(u) = e^u$ und $g\'(x) = k$.',
    ],
    solutionKey: 'Kettenregel: $\\frac{d}{dx} e^{kx} = e^{kx} \\cdot \\frac{d}{dx}(kx) = e^{kx} \\cdot k = k \\cdot e^{kx}$. Die e-Funktion ist die einzige Funktion, die ihre eigene Ableitung ist — durch die Kettenregel kommt der Faktor $k$ dazu.',
    tags: ['ableitung', 'kettenregel', 'e-funktion', 'begruendung', 'ea'],
  },

  {
    id: 'elog-ea-002', topicId: '11-exp-log', type: 'step-solver', diffLevel: 'eA',
    competencies: ['kritisches-denken', 'kommunikation', 'kreativitaet'], points: 20, timeEstimate: 15,
    contextKey: 'Crypto-Kursmodell',
    data: {
      questionText: 'Ein Crypto-Kurs wird in zwei Phasen modelliert: Boom $C_1(t) = 100 \\cdot e^{0{,}3t}$ (0 bis 10 Tage) und Crash $C_2(t) = C_1(10) \\cdot e^{-0{,}5(t-10)}$ (ab Tag 10). Analysiere das Modell schrittweise.',
      steps: [
        {
          instruction: 'Berechne den Kurswert am Ende des Booms: $C_1(10) = 100 \\cdot e^{3}$. $e^3 \\approx 20{,}09$. Runde auf ganze Zahlen.',
          type: 'numeric-input', expected: 2009, tolerance: 5,
          showAnswer: '$C_1(10) = 100 \\cdot e^3 \\approx 2009$',
        },
        {
          instruction: 'Nach dem Crash soll der Kurs auf den Startwert 100 zurückgefallen sein: $C_2(t^*) = 100$. Setze ein: $2009 \\cdot e^{-0{,}5(t^*-10)} = 100$. Berechne $e^{-0{,}5(t^*-10)}$ auf 4 Stellen.',
          type: 'numeric-input', expected: 0.0498, tolerance: 0.001,
          showAnswer: '$e^{-0{,}5(t^*-10)} = \\frac{100}{2009} \\approx 0{,}0498$',
        },
        {
          instruction: 'Löse nach $t^*$: $-0{,}5(t^* - 10) = \\ln(0{,}0498) \\approx -3{,}0$. Berechne $t^*$ (in Tagen, auf ganze Tage).',
          type: 'numeric-input', expected: 16, tolerance: 1,
          showAnswer: '$t^* - 10 = \\frac{-3{,}0}{-0{,}5} = 6 \\Rightarrow t^* = 16$ Tage',
        },
      ],
    },
    hintKeys: [
      '$e^3 \\approx 20{,}09$.',
      '$\\ln(0{,}05) \\approx -3{,}0$.',
      'Löse $-0{,}5(t^* - 10) = -3{,}0$ durch Dividieren.',
    ],
    solutionKey: 'Boom-Höchstwert: $C_1(10) \\approx 2009$. Nach dem Crash erreicht den Startwert wieder nach ca. 16 Tagen. Das Modell zeigt: schneller Boom, schnellerer Crash.',
    tags: ['step-solver', 'crypto', 'sachkontext', 'boom-crash', 'ea'],
  },
];
