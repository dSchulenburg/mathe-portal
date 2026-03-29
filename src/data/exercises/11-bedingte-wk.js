export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'bwk-basis-001', topicId: '11-bedingte-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Was bedeutet die bedingte Wahrscheinlichkeit $P(A|B)$?',
      options: [
        { id: 'a', text: 'Die Wahrscheinlichkeit, dass A und B gleichzeitig eintreten.', correct: false },
        { id: 'b', text: 'Die Wahrscheinlichkeit, dass A eintritt, unter der Bedingung, dass B bereits eingetreten ist.', correct: true },
        { id: 'c', text: 'Die Wahrscheinlichkeit von A geteilt durch die Wahrscheinlichkeit von B.', correct: false },
        { id: 'd', text: 'Die Gegenwahrscheinlichkeit von $P(A \\cap B)$.', correct: false },
      ],
    },
    hintKeys: ['$P(A|B)$ liest sich als „Wahrscheinlichkeit von A, gegeben B". Das Eintreten von B schränkt den Wahrscheinlichkeitsraum ein.'],
    solutionKey: 'Die bedingte Wahrscheinlichkeit $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ beschreibt, wie wahrscheinlich A ist, wenn man weiß, dass B bereits eingetreten ist.',
    tags: ['definition', 'bedingte-wahrscheinlichkeit', 'grundbegriffe'],
  },

  {
    id: 'bwk-basis-002', topicId: '11-bedingte-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Gegeben: $P(A \\cap B) = 0{,}12$ und $P(B) = 0{,}4$. Berechne $P(A|B)$ als Dezimalzahl.',
      correctValue: 0.3,
      tolerance: 0.001,
    },
    hintKeys: ['Formel: $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$. Teile einfach die beiden gegebenen Werte.'],
    solutionKey: '$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{0{,}12}{0{,}4} = 0{,}3$.',
    tags: ['bedingte-wahrscheinlichkeit', 'formel', 'berechnung'],
  },

  {
    id: 'bwk-basis-003', topicId: '11-bedingte-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Vierfeldertafel einer Schulklasse (30 SuS): Sport (ja/nein) × Haustier (ja/nein).\n\n| | Haustier: Ja | Haustier: Nein | Gesamt |\n|---|---|---|---|\n| Sport: Ja | 8 | 12 | 20 |\n| Sport: Nein | 4 | 6 | 10 |\n| Gesamt | 12 | 18 | 30 |\n\nWie groß ist $P(\\text{Haustier} | \\text{Sport})$?',
      options: [
        { id: 'a', text: '$\\frac{8}{30} \\approx 0{,}27$', correct: false },
        { id: 'b', text: '$\\frac{8}{12} \\approx 0{,}67$', correct: false },
        { id: 'c', text: '$\\frac{8}{20} = 0{,}4$', correct: true },
        { id: 'd', text: '$\\frac{12}{30} = 0{,}4$', correct: false },
      ],
    },
    hintKeys: ['Bei $P(\\text{Haustier} | \\text{Sport})$ ist die Bedingung „Sport = Ja". Betrachte nur die Zeile „Sport: Ja" — dort gibt es 20 SuS, davon haben 8 ein Haustier.'],
    solutionKey: '$P(\\text{Haustier} | \\text{Sport}) = \\frac{8}{20} = 0{,}4$. Die Bedingung Sport schränkt den Blick auf die 20 Sport-treibenden SuS ein.',
    tags: ['vierfeldertafel', 'ablesen', 'bedingte-wahrscheinlichkeit'],
  },

  {
    id: 'bwk-basis-004', topicId: '11-bedingte-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Zwei Ereignisse A und B sind stochastisch unabhängig. Welche Bedingung muss gelten?',
      options: [
        { id: 'a', text: '$P(A|B) = P(B)$', correct: false },
        { id: 'b', text: '$P(A \\cap B) = P(A) + P(B)$', correct: false },
        { id: 'c', text: '$P(A|B) = P(A)$', correct: true },
        { id: 'd', text: '$P(A \\cap B) = 0$', correct: false },
      ],
    },
    hintKeys: ['Unabhängigkeit bedeutet: Das Eintreten von B beeinflusst die Wahrscheinlichkeit von A nicht. Das Wissen über B ändert also nichts an $P(A)$.'],
    solutionKey: '$P(A|B) = P(A)$ ist das Kriterium für stochastische Unabhängigkeit. Äquivalent dazu: $P(A \\cap B) = P(A) \\cdot P(B)$.',
    tags: ['stochastische-unabhaengigkeit', 'kriterium', 'grundbegriffe'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ───────────────────────────────────────

  {
    id: 'bwk-standard-001', topicId: '11-bedingte-wahrscheinlichkeit', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 8,
    contextKey: 'Führerscheinprüfung',
    data: {
      questionText: 'Bei der Führerscheinprüfung bestehen 70 % den theoretischen Teil (T). Von denen bestehen 80 % auch den praktischen Teil (P). Von denen, die den theoretischen Teil nicht bestehen, bestehen noch 20 % den praktischen Teil. Berechne $P(P)$ (Gesamt-Bestehensquote praktisch).',
      steps: [
        {
          instruction: 'Lies $P(T)$ und $P(\\overline{T})$ ab. Wie groß ist $P(\\overline{T})$?',
          type: 'numeric-input', expected: 0.3, tolerance: 0.001,
          showAnswer: '$P(T) = 0{,}7$, also $P(\\overline{T}) = 1 - 0{,}7 = 0{,}3$',
        },
        {
          instruction: 'Berechne $P(T \\cap P) = P(T) \\cdot P(P|T) = 0{,}7 \\cdot 0{,}8 = ?$',
          type: 'numeric-input', expected: 0.56, tolerance: 0.001,
          showAnswer: '$P(T \\cap P) = 0{,}7 \\cdot 0{,}8 = 0{,}56$',
        },
        {
          instruction: 'Berechne $P(\\overline{T} \\cap P) = P(\\overline{T}) \\cdot P(P|\\overline{T}) = 0{,}3 \\cdot 0{,}2 = ?$',
          type: 'numeric-input', expected: 0.06, tolerance: 0.001,
          showAnswer: '$P(\\overline{T} \\cap P) = 0{,}3 \\cdot 0{,}2 = 0{,}06$',
        },
        {
          instruction: 'Gesamt: $P(P) = P(T \\cap P) + P(\\overline{T} \\cap P) = 0{,}56 + 0{,}06 = ?$',
          type: 'numeric-input', expected: 0.62, tolerance: 0.001,
          showAnswer: '$P(P) = 0{,}56 + 0{,}06 = 0{,}62$. 62 % bestehen den praktischen Teil.',
        },
      ],
    },
    hintKeys: [
      'Baumdiagramm: Erste Stufe = T/T̄, zweite Stufe = P/P̄.',
      'Gesamtwahrscheinlichkeit = Summe aller Pfade, die zu P führen.',
    ],
    solutionKey: '$P(P) = P(T) \\cdot P(P|T) + P(\\overline{T}) \\cdot P(P|\\overline{T}) = 0{,}7 \\cdot 0{,}8 + 0{,}3 \\cdot 0{,}2 = 0{,}56 + 0{,}06 = 0{,}62$.',
    tags: ['baumdiagramm', 'totale-wahrscheinlichkeit', 'step-solver', 'fuehrerschein'],
  },

  {
    id: 'bwk-standard-002', topicId: '11-bedingte-wahrscheinlichkeit', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'Vervollständige die Vierfeldertafel. Ordne die fehlenden Werte den richtigen Feldern zu.\n\nBekannt: $n = 200$, $P(A) = 0{,}5$, $P(B) = 0{,}4$, $P(A \\cap B) = 0{,}2$.',
      pairs: [
        { id: 'a', left: '$n(A \\cap B)$ — beide Ereignisse', right: '40' },
        { id: 'b', left: '$n(A \\cap \\overline{B})$ — nur A', right: '60' },
        { id: 'c', left: '$n(\\overline{A} \\cap B)$ — nur B', right: '40' },
        { id: 'd', left: '$n(\\overline{A} \\cap \\overline{B})$ — keines', right: '60' },
      ],
    },
    hintKeys: [
      '$n(A) = 200 \\cdot 0{,}5 = 100$; $n(B) = 200 \\cdot 0{,}4 = 80$; $n(A \\cap B) = 200 \\cdot 0{,}2 = 40$.',
      '$n(A \\cap \\overline{B}) = n(A) - n(A \\cap B) = 100 - 40 = 60$.',
    ],
    solutionKey: '$n(A \\cap B) = 40$; $n(A \\cap \\overline{B}) = 60$; $n(\\overline{A} \\cap B) = 40$; $n(\\overline{A} \\cap \\overline{B}) = 60$.',
    tags: ['vierfeldertafel', 'drag-match', 'absolut', 'vervollstaendigen'],
  },

  {
    id: 'bwk-standard-003', topicId: '11-bedingte-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 7,
    contextKey: 'Spam-Filter einfach',
    data: {
      questionText: 'Ein E-Mail-Filter: 30 % aller Mails sind Spam ($P(S) = 0{,}3$). Das Wort „Gewinn" kommt in 70 % der Spam-Mails vor: $P(G|S) = 0{,}7$. Berechne $P(S \\cap G)$ als Dezimalzahl.',
      correctValue: 0.21,
      tolerance: 0.001,
    },
    hintKeys: ['Multiplikationsregel: $P(S \\cap G) = P(S) \\cdot P(G|S)$.'],
    solutionKey: '$P(S \\cap G) = P(S) \\cdot P(G|S) = 0{,}3 \\cdot 0{,}7 = 0{,}21$. 21 % aller Mails sind gleichzeitig Spam und enthalten das Wort „Gewinn".',
    tags: ['spam-filter', 'multiplikationsregel', 'sachkontext'],
  },

  {
    id: 'bwk-standard-004', topicId: '11-bedingte-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 10, timeEstimate: 7,
    data: {
      questionText: 'Gegeben: $P(A) = 0{,}4$, $P(B) = 0{,}5$, $P(A \\cap B) = 0{,}2$. Prüfe: Sind A und B stochastisch unabhängig? Berechne $P(A) \\cdot P(B)$ als Dezimalzahl.',
      correctValue: 0.2,
      tolerance: 0.001,
    },
    hintKeys: ['Unabhängigkeitskriterium: $P(A \\cap B) \\stackrel{?}{=} P(A) \\cdot P(B)$. Berechne zuerst das Produkt.'],
    solutionKey: '$P(A) \\cdot P(B) = 0{,}4 \\cdot 0{,}5 = 0{,}2 = P(A \\cap B)$. Die Bedingung ist erfüllt → A und B sind stochastisch unabhängig.',
    tags: ['stochastische-unabhaengigkeit', 'nachweis', 'berechnung'],
  },

  {
    id: 'bwk-standard-005', topicId: '11-bedingte-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 10, timeEstimate: 6,
    contextKey: 'Satz von Bayes – Fabrik',
    data: {
      questionText: 'Eine Fabrik hat Maschine M1 (liefert 60 % der Teile, 3 % defekt) und M2 (40 %, 5 % defekt). Ein zufällig entnommenes Teil ist defekt. Welcher Ausdruck berechnet $P(M1 | \\text{defekt})$ korrekt nach dem Satz von Bayes?',
      options: [
        { id: 'a', text: '$\\dfrac{0{,}6 \\cdot 0{,}03}{0{,}6 \\cdot 0{,}03 + 0{,}4 \\cdot 0{,}05}$', correct: true },
        { id: 'b', text: '$\\dfrac{0{,}03}{0{,}03 + 0{,}05}$', correct: false },
        { id: 'c', text: '$0{,}6 \\cdot 0{,}03$', correct: false },
        { id: 'd', text: '$\\dfrac{0{,}6}{0{,}6 \\cdot 0{,}03 + 0{,}4 \\cdot 0{,}05}$', correct: false },
      ],
    },
    hintKeys: [
      'Satz von Bayes: $P(M1|D) = \\dfrac{P(D|M1) \\cdot P(M1)}{P(D)}$.',
      '$P(D) = P(D|M1) \\cdot P(M1) + P(D|M2) \\cdot P(M2)$ (totale Wahrscheinlichkeit).',
    ],
    solutionKey: '$P(M1|D) = \\dfrac{0{,}6 \\cdot 0{,}03}{0{,}6 \\cdot 0{,}03 + 0{,}4 \\cdot 0{,}05} = \\dfrac{0{,}018}{0{,}018 + 0{,}020} = \\dfrac{0{,}018}{0{,}038} \\approx 0{,}474$.',
    tags: ['bayes', 'qualitaetskontrolle', 'formelauswahl'],
  },

  // ─── ERWEITERT (AFB III) – 3 Aufgaben ─────────────────────────────────────

  {
    id: 'bwk-erweitert-001', topicId: '11-bedingte-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 12,
    contextKey: 'COVID-Schnelltest',
    data: {
      questionText: 'COVID-Schnelltest: Prävalenz $P(\\text{krank}) = 0{,}05$. Sensitivität $P(+|\\text{krank}) = 0{,}90$. Spezifität $P(-|\\text{gesund}) = 0{,}95$. Berechne den positiven Vorhersagewert $P(\\text{krank}|+)$ nach dem Satz von Bayes. Runde auf 3 Dezimalstellen.',
      correctValue: 0.486,
      tolerance: 0.005,
    },
    hintKeys: [
      '$P(+|\\text{gesund}) = 1 - P(-|\\text{gesund}) = 1 - 0{,}95 = 0{,}05$ (Falsch-Positiv-Rate).',
      '$P(+) = P(+|\\text{krank}) \\cdot P(\\text{krank}) + P(+|\\text{gesund}) \\cdot P(\\text{gesund})$.',
      '$P(\\text{krank}|+) = \\dfrac{P(+|\\text{krank}) \\cdot P(\\text{krank})}{P(+)}$.',
    ],
    solutionKey: '$P(+|\\text{krank}) \\cdot P(\\text{krank}) = 0{,}9 \\cdot 0{,}05 = 0{,}045$. $P(+|\\text{gesund}) \\cdot P(\\text{gesund}) = 0{,}05 \\cdot 0{,}95 = 0{,}0475$. $P(+) = 0{,}045 + 0{,}0475 = 0{,}0925$. $P(\\text{krank}|+) = \\dfrac{0{,}045}{0{,}0925} \\approx 0{,}486$. Trotz positivem Test ist nur ~49 % der positiv Getesteten wirklich krank — wegen der niedrigen Prävalenz!',
    tags: ['bayes', 'covid', 'sensitivitaet', 'spezifitaet', 'falsch-positiv', 'vorhersagewert'],
  },

  {
    id: 'bwk-erweitert-002', topicId: '11-bedingte-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativitaet'], points: 15, timeEstimate: 10,
    contextKey: 'Spam-Filter „Gewinn"',
    data: {
      questionText: 'Spam-Filter: $P(\\text{Spam}) = 0{,}3$, $P(\\text{kein Spam}) = 0{,}7$. Wort „Gewinn" kommt vor in 70 % der Spam-Mails ($P(G|S) = 0{,}7$) und in 5 % normaler Mails ($P(G|\\overline{S}) = 0{,}05$). Berechne $P(\\text{Spam}|G)$ auf 3 Dezimalstellen.',
      correctValue: 0.857,
      tolerance: 0.005,
    },
    hintKeys: [
      '$P(G) = P(G|S) \\cdot P(S) + P(G|\\overline{S}) \\cdot P(\\overline{S})$.',
      '$P(S|G) = \\dfrac{P(G|S) \\cdot P(S)}{P(G)}$.',
    ],
    solutionKey: '$P(G|S) \\cdot P(S) = 0{,}7 \\cdot 0{,}3 = 0{,}21$. $P(G|\\overline{S}) \\cdot P(\\overline{S}) = 0{,}05 \\cdot 0{,}7 = 0{,}035$. $P(G) = 0{,}21 + 0{,}035 = 0{,}245$. $P(S|G) = \\dfrac{0{,}21}{0{,}245} \\approx 0{,}857$. Enthält eine Mail das Wort „Gewinn", ist sie mit ~86 % Wahrscheinlichkeit Spam.',
    tags: ['bayes', 'spam-filter', 'sachkontext', 'kreativitaet'],
  },

  {
    id: 'bwk-erweitert-003', topicId: '11-bedingte-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 8,
    contextKey: 'TikTok-Algorithmus',
    data: {
      questionText: 'TikTok-Algorithmus: Ein Video wird an 1000 User ausgespielt. $P(\\text{Like}) = 0{,}12$. $P(\\text{Share} | \\text{Like}) = 0{,}4$. $P(\\text{Share} | \\text{kein Like}) = 0{,}05$. Wie viele Shares werden im Erwartungswert erzielt?',
      options: [
        { id: 'a', text: '88 Shares', correct: false },
        { id: 'b', text: '48 Shares + 44 Shares = 92 Shares', correct: true },
        { id: 'c', text: '$1000 \\cdot 0{,}4 = 400$ Shares', correct: false },
        { id: 'd', text: '$1000 \\cdot 0{,}05 = 50$ Shares', correct: false },
      ],
    },
    hintKeys: [
      '$P(\\text{Share}) = P(\\text{Like}) \\cdot P(\\text{Share}|\\text{Like}) + P(\\overline{\\text{Like}}) \\cdot P(\\text{Share}|\\overline{\\text{Like}})$.',
      'Erwartete Anzahl = $1000 \\cdot P(\\text{Share})$.',
    ],
    solutionKey: '$P(\\text{Share}) = 0{,}12 \\cdot 0{,}4 + 0{,}88 \\cdot 0{,}05 = 0{,}048 + 0{,}044 = 0{,}092$. Erwartete Shares: $1000 \\cdot 0{,}092 = 92$. Option b beschreibt die zwei Pfade richtig.',
    tags: ['tiktok', 'algorithmus', 'totale-wahrscheinlichkeit', 'sachkontext'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 2 Aufgaben ────────────────────────

  {
    id: 'bwk-ea-001', topicId: '11-bedingte-wahrscheinlichkeit', type: 'step-solver', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 15,
    contextKey: 'Satz von Bayes — formale Anwendung',
    data: {
      questionText: 'Drei Fabriken liefern Teile: F1 (50 %, 2 % defekt), F2 (30 %, 4 % defekt), F3 (20 %, 6 % defekt). Ein zufällig entnommenes Teil ist defekt. Berechne $P(F2 | \\text{defekt})$ schrittweise.',
      steps: [
        {
          instruction: 'Berechne $P(D \\cap F1) = P(F1) \\cdot P(D|F1) = 0{,}5 \\cdot 0{,}02 = ?$',
          type: 'numeric-input', expected: 0.01, tolerance: 0.0005,
          showAnswer: '$P(D \\cap F1) = 0{,}5 \\cdot 0{,}02 = 0{,}01$',
        },
        {
          instruction: 'Berechne $P(D \\cap F2) = 0{,}3 \\cdot 0{,}04 = ?$',
          type: 'numeric-input', expected: 0.012, tolerance: 0.0005,
          showAnswer: '$P(D \\cap F2) = 0{,}3 \\cdot 0{,}04 = 0{,}012$',
        },
        {
          instruction: 'Berechne $P(D \\cap F3) = 0{,}2 \\cdot 0{,}06 = ?$',
          type: 'numeric-input', expected: 0.012, tolerance: 0.0005,
          showAnswer: '$P(D \\cap F3) = 0{,}2 \\cdot 0{,}06 = 0{,}012$',
        },
        {
          instruction: 'Totale Wahrscheinlichkeit: $P(D) = 0{,}01 + 0{,}012 + 0{,}012 = ?$',
          type: 'numeric-input', expected: 0.034, tolerance: 0.001,
          showAnswer: '$P(D) = 0{,}034$',
        },
        {
          instruction: 'Satz von Bayes: $P(F2|D) = \\dfrac{P(D \\cap F2)}{P(D)} = \\dfrac{0{,}012}{0{,}034} \\approx ?$ (2 Dezimalstellen)',
          type: 'numeric-input', expected: 0.353, tolerance: 0.005,
          showAnswer: '$P(F2|D) = \\dfrac{0{,}012}{0{,}034} \\approx 0{,}353$. Mit ~35 % Wahrscheinlichkeit stammt das defekte Teil aus F2.',
        },
      ],
    },
    hintKeys: [
      'Totale Wahrscheinlichkeit: $P(D) = \\sum_i P(D|F_i) \\cdot P(F_i)$.',
      'Satz von Bayes: $P(F_i|D) = \\dfrac{P(D|F_i) \\cdot P(F_i)}{P(D)}$.',
    ],
    solutionKey: '$P(D) = 0{,}01 + 0{,}012 + 0{,}012 = 0{,}034$. $P(F2|D) = 0{,}012 / 0{,}034 \\approx 0{,}353$.',
    tags: ['bayes', 'step-solver', 'ea', 'drei-hypothesen', 'totale-wahrscheinlichkeit'],
  },

  {
    id: 'bwk-ea-002', topicId: '11-bedingte-wahrscheinlichkeit', type: 'error-analysis', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 10,
    data: {
      questionText: 'Schülerin Mia berechnet $P(A|B)$ aus: $P(A) = 0{,}6$, $P(B) = 0{,}5$, $P(A \\cap B) = 0{,}2$. Finde den Fehler in ihrer Lösung.',
      steps: [
        { content: 'Schritt 1: Formel: $P(A|B) = \\dfrac{P(A \\cap B)}{P(A)}$', hasError: true, errorExplanation: 'Falsche Formel! Der Nenner muss $P(B)$ sein, nicht $P(A)$. Richtig: $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$. Die Bedingung steht im Nenner.' },
        { content: 'Schritt 2: $P(A|B) = \\dfrac{0{,}2}{0{,}6} \\approx 0{,}333$', hasError: true, errorExplanation: 'Durch die falsche Formel ergibt sich ein falscher Wert. Richtig: $P(A|B) = \\dfrac{0{,}2}{0{,}5} = 0{,}4$.' },
        { content: 'Schritt 3: Ergebnis: $P(A|B) \\approx 0{,}333$', hasError: true, errorExplanation: 'Richtig wäre $P(A|B) = 0{,}4$. Das Ergebnis 0,333 entspricht $P(B|A) = P(A \\cap B)/P(A)$ — Mia hat Bedingendes und Bedingtes vertauscht.' },
      ],
    },
    hintKeys: [
      '$P(A|B)$: A ist das gesuchte Ereignis, B die Bedingung. Im Nenner steht immer die Bedingung: $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$.',
      'Beachte: $P(A|B) \\neq P(B|A)$ (außer bei Symmetrie).',
    ],
    solutionKey: 'Fehler in Schritt 1: Mia vertauscht $P(A)$ und $P(B)$ im Nenner. Korrekt: $P(A|B) = P(A \\cap B) / P(B) = 0{,}2 / 0{,}5 = 0{,}4$.',
    tags: ['fehleranalyse', 'bedingte-wahrscheinlichkeit', 'formel', 'ea'],
  },
];
