export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'hyp-basis-001', topicId: '12-hypothesentests', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    contextKey: 'Tesla Qualitätskontrolle',
    data: {
      questionText: 'Tesla behauptet: „Höchstens 5 % unserer Akkus sind fehlerhaft." Ein Tester möchte prüfen, ob der wahre Anteil fehlerhafter Akkus höher ist. Welche Hypothesen sind korrekt?',
      options: [
        { id: 'a', text: '$H_0: p \\leq 0{,}05$ und $H_1: p > 0{,}05$', correct: true },
        { id: 'b', text: '$H_0: p > 0{,}05$ und $H_1: p \\leq 0{,}05$', correct: false },
        { id: 'c', text: '$H_0: p = 0{,}95$ und $H_1: p \\neq 0{,}95$', correct: false },
        { id: 'd', text: '$H_0: p < 0{,}05$ und $H_1: p \\geq 0{,}05$', correct: false },
      ],
    },
    hintKeys: [
      '$H_0$ ist die Nullhypothese — die zu prüfende (beibehaltene) Annahme. Sie enthält immer das Gleichheitszeichen.',
      '$H_1$ (Alternativhypothese) ist das, was der Tester eigentlich zeigen will: der Anteil ist höher als behauptet.',
    ],
    solutionKey: '$H_0: p \\leq 0{,}05$ (Teslas Behauptung wird als wahr angenommen) und $H_1: p > 0{,}05$ (rechtsseitiger Test — der Tester vermutet mehr Fehler). $H_0$ enthält immer das Gleichheitszeichen (bzw. $\\leq$ / $\\geq$).',
    tags: ['h0-h1', 'hypothesen', 'formulieren', 'tesla', 'sachkontext'],
  },

  {
    id: 'hyp-basis-002', topicId: '12-hypothesentests', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Was bedeutet das Signifikanzniveau $\\alpha = 0{,}05$?',
      options: [
        { id: 'a', text: 'Die Wahrscheinlichkeit, dass $H_0$ wahr ist, beträgt 5 %.', correct: false },
        { id: 'b', text: 'Die Wahrscheinlichkeit, $H_0$ fälschlicherweise abzulehnen, beträgt höchstens 5 %.', correct: true },
        { id: 'c', text: '95 % aller Testergebnisse liegen im Ablehnungsbereich.', correct: false },
        { id: 'd', text: 'Der Test ist mit 95 % Wahrscheinlichkeit korrekt.', correct: false },
      ],
    },
    hintKeys: ['Das Signifikanzniveau $\\alpha$ gibt die maximal tolerierte Wahrscheinlichkeit für den Fehler 1. Art an: $H_0$ wird abgelehnt, obwohl sie wahr ist.'],
    solutionKey: '$\\alpha = 0{,}05$ bedeutet: Falls $H_0$ tatsächlich wahr ist, beträgt die Wahrscheinlichkeit, trotzdem $H_0$ abzulehnen (Fehler 1. Art), höchstens 5 %. Kleines $\\alpha$ = strenger Test.',
    tags: ['signifikanzniveau', 'alpha', 'definition', 'fehler-1-art'],
  },

  {
    id: 'hyp-basis-003', topicId: '12-hypothesentests', type: 'drag-match', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 8, timeEstimate: 5,
    data: {
      questionText: 'Ordne jedem Begriff seine Bedeutung zu.',
      pairs: [
        { id: 'a', left: 'Fehler 1. Art', right: '$H_0$ wird abgelehnt, obwohl sie wahr ist' },
        { id: 'b', left: 'Fehler 2. Art', right: '$H_0$ wird beibehalten, obwohl sie falsch ist' },
        { id: 'c', left: 'Signifikanzniveau $\\alpha$', right: 'Maximale Wahrscheinlichkeit für Fehler 1. Art' },
        { id: 'd', left: 'Ablehnungsbereich', right: 'Menge der Stichprobenwerte, bei denen $H_0$ abgelehnt wird' },
      ],
    },
    hintKeys: [
      'Fehler 1. Art = zu Unrecht abgelehnt. Fehler 2. Art = zu Unrecht beibehalten.',
      'Das Signifikanzniveau legt die Schwelle für den Fehler 1. Art fest.',
    ],
    solutionKey: 'Fehler 1. Art: $H_0$ fälschlicherweise abgelehnt. Fehler 2. Art: $H_0$ fälschlicherweise beibehalten. $\\alpha$: max. Fehler-1.-Art-Wahrscheinlichkeit. Ablehnungsbereich: kritische Stichprobenwerte.',
    tags: ['drag-match', 'fehler-1-2-art', 'ablehnungsbereich', 'definitionen'],
  },

  {
    id: 'hyp-basis-004', topicId: '12-hypothesentests', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 4,
    contextKey: 'Wahlprognose',
    data: {
      questionText: 'Eine Partei behauptet, 30 % der Stimmen zu erhalten. Ein Meinungsforschungsinstitut will prüfen, ob der Anteil sich verändert hat (nach oben oder unten). Welcher Testtyp ist geeignet?',
      options: [
        { id: 'a', text: 'Einseitiger rechtsseitiger Test, da man nur prüft, ob $p > 0{,}3$.', correct: false },
        { id: 'b', text: 'Zweiseitiger Test, da man prüft, ob $p \\neq 0{,}3$.', correct: true },
        { id: 'c', text: 'Einseitiger linksseitiger Test, da man prüft, ob $p < 0{,}3$.', correct: false },
        { id: 'd', text: 'Kein Test möglich, weil $p$ unbekannt ist.', correct: false },
      ],
    },
    hintKeys: ['Zweiseitig = jede Abweichung (zu groß oder zu klein) interessiert: $H_1: p \\neq p_0$. Einseitig = nur eine Richtung interessiert: $H_1: p > p_0$ oder $H_1: p < p_0$.'],
    solutionKey: 'Da nach Veränderung in beide Richtungen gefragt wird ($H_1: p \\neq 0{,}3$), ist ein zweiseitiger Test geeignet. Einseitige Tests wählt man nur, wenn die Fragestellung von vornherein eine Richtung vorgibt.',
    tags: ['einseitig', 'zweiseitig', 'testtyp', 'wahlprognose', 'sachkontext'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ───────────────────────────────────────

  {
    id: 'hyp-standard-001', topicId: '12-hypothesentests', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 12,
    contextKey: 'Würfelbetrug',
    data: {
      questionText: 'Ein Spieler würfelt 20 Mal und wirft 9 Mal eine Sechs. Er wird verdächtigt, einen gezinkten Würfel zu benutzen. Führe einen einseitigen Binomialtest mit $\\alpha = 0{,}05$ durch. ($H_0: p \\leq \\frac{1}{6}$, $H_1: p > \\frac{1}{6}$, $n = 20$)',
      steps: [
        {
          instruction: 'Welche Wahrscheinlichkeit gilt unter $H_0$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$p_0 = \\frac{1}{6} \\approx 0{,}1667$', correct: true },
            { id: 'b', text: '$p_0 = \\frac{9}{20} = 0{,}45$', correct: false },
            { id: 'c', text: '$p_0 = 0{,}05$', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Unter $H_0$ gilt: $p = \\frac{1}{6}$ (faire Chance auf eine Sechs).',
        },
        {
          instruction: 'Berechne $P(X \\geq 9)$ für $X \\sim B\\!\\left(20;\\, \\tfrac{1}{6}\\right)$. Nutze: $P(X \\leq 8) \\approx 0{,}9547$. Wie groß ist $P(X \\geq 9)$?',
          type: 'numeric-input', expected: 0.0453, tolerance: 0.003,
          showAnswer: '$P(X \\geq 9) = 1 - P(X \\leq 8) = 1 - 0{,}9547 = 0{,}0453$.',
        },
        {
          instruction: 'Vergleiche $P(X \\geq 9) = 0{,}0453$ mit $\\alpha = 0{,}05$. Was ist die Entscheidung?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$0{,}0453 < 0{,}05$ → $H_0$ wird abgelehnt. Verdacht auf gezinkten Würfel ist statistisch signifikant.', correct: true },
            { id: 'b', text: '$0{,}0453 < 0{,}05$ → $H_0$ wird beibehalten. Kein Beweis für Betrug.', correct: false },
            { id: 'c', text: 'Da $0{,}0453 \\approx 0{,}05$, ist keine Entscheidung möglich.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$P(X \\geq 9) = 0{,}0453 < 0{,}05 = \\alpha$ → $H_0$ ablehnen. 9 Sechsen in 20 Würfen ist auf dem 5-%-Niveau signifikant.',
        },
      ],
    },
    hintKeys: [
      'Einseitiger Test (rechts): $H_0$ ablehnen, wenn $P(X \\geq x_{\\text{beob}}) \\leq \\alpha$.',
      '$P(X \\geq k) = 1 - P(X \\leq k-1)$. Kumulierte Binomialwahrscheinlichkeiten aus der Tabelle oder Rechner.',
    ],
    solutionKey: 'Unter $H_0$: $X \\sim B(20; \\frac{1}{6})$. $P(X \\geq 9) \\approx 0{,}0453 < 0{,}05$. $H_0$ wird abgelehnt — statistisch signifikanter Hinweis auf einen gezinkten Würfel.',
    tags: ['step-solver', 'würfelbetrug', 'einseitiger-test', 'binomialtest', 'sachkontext'],
  },

  {
    id: 'hyp-standard-002', topicId: '12-hypothesentests', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 12,
    contextKey: 'Medikamenten-Wirksamkeit',
    data: {
      questionText: 'Ein neues Schmerzmittel wirkt laut Hersteller bei mindestens 70 % der Patienten. In einer Studie mit $n = 15$ Patienten zeigen nur 8 Besserung. Teste auf dem Niveau $\\alpha = 0{,}05$, ob der Anteil signifikant unter 0{,}7 liegt. ($H_0: p \\geq 0{,}7$, $H_1: p < 0{,}7$)',
      steps: [
        {
          instruction: 'Es handelt sich um einen linksseitigen Test. $H_0$ wird abgelehnt, wenn $P(X \\leq 8)$ unter welcher Schranke liegt?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Unter $\\alpha = 0{,}05$.', correct: true },
            { id: 'b', text: 'Über $\\alpha = 0{,}05$.', correct: false },
            { id: 'c', text: 'Unter $1 - \\alpha = 0{,}95$.', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Linksseitiger Test: $H_0$ ablehnen, wenn $P(X \\leq x_{\\text{beob}}) \\leq \\alpha = 0{,}05$.',
        },
        {
          instruction: 'Für $X \\sim B(15; 0{,}7)$ gilt $P(X \\leq 8) \\approx 0{,}0500$. Vergleiche mit $\\alpha = 0{,}05$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$P(X \\leq 8) = 0{,}0500 \\leq 0{,}05$ → $H_0$ wird gerade noch abgelehnt.', correct: true },
            { id: 'b', text: '$P(X \\leq 8) = 0{,}0500 > 0{,}05$ → $H_0$ wird beibehalten.', correct: false },
            { id: 'c', text: 'Der Vergleich ist nicht möglich, da $P(X \\leq 8) = \\alpha$ exakt gleich ist.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$0{,}0500 \\leq 0{,}05$ → $H_0$ ablehnen. Das Medikament wirkt mit statistischer Signifikanz nicht so gut wie behauptet.',
        },
        {
          instruction: 'Was bedeutet die Entscheidung für die Praxis?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Es ist bewiesen, dass das Medikament unwirksam ist.', correct: false },
            { id: 'b', text: 'Die Daten liefern auf dem 5-%-Niveau signifikante Hinweise, dass die Wirkungsrate unter 70 % liegt.', correct: true },
            { id: 'c', text: 'Das Medikament muss sofort vom Markt genommen werden.', correct: false },
          ],
          correctId: 'b',
          showAnswer: 'Statistisch signifikant ≠ bewiesen. Die Daten sprechen gegen die Herstellerangabe — weitere Studien sind nötig.',
        },
      ],
    },
    hintKeys: [
      'Linksseitiger Test: Ablehnungsbereich liegt links. $H_0$ ablehnen, wenn $P(X \\leq x_{\\text{beob}}) \\leq \\alpha$.',
      'Statistisch signifikant bedeutet: Die Abweichung ist unwahrscheinlich unter $H_0$, aber nicht mathematisch bewiesen.',
    ],
    solutionKey: 'Linksseitiger Test: $P(X \\leq 8) \\approx 0{,}0500 \\leq 0{,}05$. $H_0$ wird (gerade noch) abgelehnt. Die Studiendaten sprechen signifikant gegen die Herstellerangabe.',
    tags: ['step-solver', 'medikament', 'linksseitiger-test', 'binomialtest', 'sachkontext'],
  },

  {
    id: 'hyp-standard-003', topicId: '12-hypothesentests', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 8,
    contextKey: 'TikTok-Reichweite',
    data: {
      questionText: 'Ein TikTok-Creator behauptet, sein neues Format wird von mindestens 40 % seiner Follower angeschaut. In einer Stichprobe von $n = 25$ Followern sehen 7 das Video. Wie groß ist $P(X \\leq 7)$ für $X \\sim B(25; 0{,}4)$? (Gegeben: $P(X \\leq 7) \\approx 0{,}1536$.) Gibt es auf dem Niveau $\\alpha = 0{,}05$ Anlass, die Behauptung anzuzweifeln? Gib $P(X \\leq 7)$ an.',
      correctValue: 0.1536,
      tolerance: 0.003,
    },
    hintKeys: [
      'Linksseitiger Test: $H_0: p \\geq 0{,}4$, $H_1: p < 0{,}4$.',
      '$H_0$ wird abgelehnt, wenn $P(X \\leq 7) \\leq 0{,}05$. Ist $0{,}1536 \\leq 0{,}05$?',
    ],
    solutionKey: '$P(X \\leq 7) \\approx 0{,}1536 > 0{,}05 = \\alpha$. Die Behauptung wird nicht signifikant widerlegt — 7 Aufrufe von 25 ist zwar wenig, aber noch kein statistisch signifikantes Ergebnis auf dem 5-%-Niveau.',
    tags: ['tiktok', 'linksseitiger-test', 'binomialtest', 'sachkontext', 'p-wert'],
  },

  {
    id: 'hyp-standard-004', topicId: '12-hypothesentests', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Ordne jedem Fachbegriff seine korrekte Bedeutung im Hypothesentest zu.',
      pairs: [
        { id: 'a', left: '$p$-Wert', right: 'Wahrscheinlichkeit, das Testergebnis oder Extremeres zu beobachten, wenn $H_0$ gilt' },
        { id: 'b', left: 'Kritischer Wert', right: 'Grenzwert, ab dem $H_0$ abgelehnt wird' },
        { id: 'c', left: 'Teststärke (Power)', right: 'Wahrscheinlichkeit, $H_0$ abzulehnen, wenn $H_1$ wahr ist' },
        { id: 'd', left: 'Ablehnungsbereich', right: 'Gesamtheit aller Stichprobenwerte, die zur Ablehnung von $H_0$ führen' },
      ],
    },
    hintKeys: [
      '$p$-Wert: Wie extrem ist das Ergebnis unter $H_0$? Je kleiner, desto auffälliger.',
      'Teststärke = $1 - \\beta$, wobei $\\beta$ die Wahrscheinlichkeit des Fehlers 2. Art ist.',
    ],
    solutionKey: '$p$-Wert: Wahrscheinlichkeit des Beobachteten (oder Extremeren) unter $H_0$. Kritischer Wert: Grenze des Ablehnungsbereichs. Teststärke: Fähigkeit, echte Effekte zu entdecken. Ablehnungsbereich: alle kritischen Stichprobenwerte.',
    tags: ['drag-match', 'p-wert', 'ablehnungsbereich', 'testaerke', 'definitionen'],
  },

  {
    id: 'hyp-standard-005', topicId: '12-hypothesentests', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 7,
    contextKey: 'Wahlprognose',
    data: {
      questionText: 'Bei der letzten Wahl erhielt Partei X 25 % der Stimmen. Vor der neuen Wahl befragt ein Institut 100 Personen — 30 geben an, Partei X zu wählen. Testentscheidung mit $\\alpha = 0{,}05$ (zweiseitig): Für $X \\sim B(100; 0{,}25)$ gilt $P(X \\leq 30) \\approx 0{,}9018$ und $P(X \\geq 30) \\approx 0{,}1459$. Welche Entscheidung ist korrekt?',
      options: [
        { id: 'a', text: '$H_0$ wird abgelehnt, da 30 > 25 = Erwartungswert.', correct: false },
        { id: 'b', text: '$H_0$ wird beibehalten: $p$-Wert $= 2 \\cdot P(X \\geq 30) \\approx 0{,}292 > 0{,}05$.', correct: true },
        { id: 'c', text: '$H_0$ wird abgelehnt, da $P(X \\geq 30) < 0{,}5$.', correct: false },
        { id: 'd', text: 'Ohne den genauen $p$-Wert ist keine Entscheidung möglich.', correct: false },
      ],
    },
    hintKeys: [
      'Zweiseitiger Test: $p$-Wert $= 2 \\cdot P(X \\geq x_{\\text{beob}})$ (wenn $x_{\\text{beob}}$ über dem Erwartungswert liegt).',
      'Falls $p$-Wert $> \\alpha$: $H_0$ beibehalten.',
    ],
    solutionKey: 'Zweiseitiger Test: $p$-Wert $\\approx 2 \\cdot 0{,}1459 = 0{,}292 > 0{,}05$. $H_0$ wird beibehalten — 30 von 100 ist kein statistisch signifikanter Anstieg gegenüber 25 %.',
    tags: ['zweiseitiger-test', 'wahlprognose', 'p-wert', 'sachkontext', 'entscheidung'],
  },

  // ─── ERWEITERT (AFB III) – 4 Aufgaben ─────────────────────────────────────

  {
    id: 'hyp-erweitert-001', topicId: '12-hypothesentests', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 14,
    contextKey: 'Medikamenten-Wirksamkeit',
    data: {
      questionText: 'Ein neues Krebsmedikament soll bei mehr als 60 % der Patienten ansprechen. Tatsächlich sprechen von $n = 20$ Patienten 16 an. Bestimme den Ablehnungsbereich für $\\alpha = 0{,}05$ (rechtsseitig) und triff eine Entscheidung.',
      steps: [
        {
          instruction: 'Wir suchen die kleinste Zahl $k$, sodass $P(X \\geq k) \\leq 0{,}05$ für $X \\sim B(20; 0{,}6)$. Gegeben: $P(X \\geq 15) \\approx 0{,}0510$ und $P(X \\geq 16) \\approx 0{,}0196$. Welches $k$ definiert die Grenze des Ablehnungsbereichs?',
          type: 'numeric-input', expected: 16, tolerance: 0,
          showAnswer: 'Da $P(X \\geq 15) = 0{,}0510 > 0{,}05$ und $P(X \\geq 16) = 0{,}0196 \\leq 0{,}05$, gilt: Ablehnungsbereich $= \\{16, 17, 18, 19, 20\\}$, untere Grenze $k = 16$.',
        },
        {
          instruction: 'Das Testergebnis ist $x_{\\text{beob}} = 16$. Liegt dieser Wert im Ablehnungsbereich?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Ja, $16 \\in \\{16, 17, 18, 19, 20\\}$ → $H_0$ ablehnen.', correct: true },
            { id: 'b', text: 'Nein, 16 ist nicht im Ablehnungsbereich → $H_0$ beibehalten.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '16 liegt genau an der Grenze des Ablehnungsbereichs → $H_0$ wird abgelehnt. 16 von 20 Patienten sprechen signifikant häufiger an als 60 %.',
        },
        {
          instruction: 'Wie groß ist die tatsächliche Irrtumswahrscheinlichkeit (realisierter $\\alpha$-Fehler) für diesen Test?',
          type: 'numeric-input', expected: 0.0196, tolerance: 0.003,
          showAnswer: 'Der realisierte $\\alpha$-Fehler ist $P(X \\geq 16) \\approx 0{,}0196$, nicht das nominale $\\alpha = 0{,}05$.',
        },
      ],
    },
    hintKeys: [
      'Ablehnungsbereich bestimmen: Finde kleinstes $k$ mit $P(X \\geq k) \\leq \\alpha$.',
      'Der realisierte Fehler 1. Art ist oft kleiner als das nominale $\\alpha$, da die Binomialverteilung diskret ist.',
    ],
    solutionKey: 'Ablehnungsbereich: $\\{16, \\ldots, 20\\}$. $x_{\\text{beob}} = 16 \\in$ Ablehnungsbereich → $H_0$ ablehnen. Realisierter $\\alpha$-Fehler: $0{,}0196$.',
    tags: ['ablehnungsbereich', 'medikament', 'rechtsseitiger-test', 'step-solver', 'sachkontext'],
  },

  {
    id: 'hyp-erweitert-002', topicId: '12-hypothesentests', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 14,
    contextKey: 'TikTok-Reichweite',
    data: {
      questionText: 'Ein TikTok-Creator glaubt, dass nur noch 20 % seiner Follower seine Videos sehen (Algorithmus-Problem). Er postet ein Video, das von 40 seiner 150 zufällig ausgewählten Follower gesehen wird. Teste auf Niveau $\\alpha = 0{,}05$ (zweiseitig), ob sich die Sehrate verändert hat.',
      steps: [
        {
          instruction: 'Formuliere die Hypothesen. Welche Darstellung ist korrekt?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$H_0: p = 0{,}2$ und $H_1: p \\neq 0{,}2$', correct: true },
            { id: 'b', text: '$H_0: p = 0{,}2$ und $H_1: p > 0{,}2$', correct: false },
            { id: 'c', text: '$H_0: p \\neq 0{,}2$ und $H_1: p = 0{,}2$', correct: false },
          ],
          correctId: 'a',
          showAnswer: 'Zweiseitig: Veränderung in beide Richtungen möglich. $H_0: p = 0{,}2$ und $H_1: p \\neq 0{,}2$.',
        },
        {
          instruction: 'Für $X \\sim B(150; 0{,}2)$: $E(X) = 30$. Das Beobachtete $x = 40$ liegt über dem Erwartungswert. Für den zweiseitigen Test: $P(X \\geq 40) \\approx 0{,}0160$. Berechne den $p$-Wert.',
          type: 'numeric-input', expected: 0.0320, tolerance: 0.005,
          showAnswer: '$p$-Wert $= 2 \\cdot 0{,}0160 = 0{,}0320$.',
        },
        {
          instruction: 'Vergleiche $p$-Wert $= 0{,}0320$ mit $\\alpha = 0{,}05$.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$0{,}0320 < 0{,}05$ → $H_0$ ablehnen. Die Sehrate hat sich signifikant verändert.', correct: true },
            { id: 'b', text: '$0{,}0320 < 0{,}05$ → $H_0$ beibehalten. Kein signifikanter Unterschied.', correct: false },
            { id: 'c', text: 'Da es sich um einen zweiseitigen Test handelt, muss $p > 0{,}1$ sein.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$p$-Wert $= 0{,}032 < 0{,}05$. $H_0$ ablehnen — die Sehrate ist signifikant gestiegen. Vom Algorithmus-Problem ist tatsächlich nicht auszugehen; die Reichweite ist eher besser.',
        },
      ],
    },
    hintKeys: [
      'Zweiseitiger $p$-Wert: Verdopple die einseitige Wahrscheinlichkeit.',
      '$E(X) = 150 \\cdot 0{,}2 = 30$. Da $40 > 30$, liegt das Ergebnis auf der rechten Seite.',
    ],
    solutionKey: '$H_0: p=0{,}2$, $H_1: p \\neq 0{,}2$. $p$-Wert $= 2 \\cdot 0{,}016 = 0{,}032 < 0{,}05$. $H_0$ ablehnen — signifikante Veränderung der Sehrate.',
    tags: ['zweiseitiger-test', 'tiktok', 'p-wert', 'step-solver', 'sachkontext'],
  },

  {
    id: 'hyp-erweitert-003', topicId: '12-hypothesentests', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 10,
    data: {
      questionText: 'Schüler Finn führt einen Hypothesentest durch. Finde alle Fehler in seiner Lösung. (Aufgabe: $n=10$, $p_0 = 0{,}3$, Beobachtung $x=1$, $\\alpha=0{,}05$, linksseitig)',
      steps: [
        { content: 'Schritt 1: $H_0: p = 0{,}3$ und $H_1: p = 0{,}1$ (Finn tippt, dass $p$ genau 0,1 sein muss)', hasError: true, errorExplanation: 'Fehler: Die Alternativhypothese $H_1$ darf keine konkrete Zahl enthalten (außer bei exakten Tests). Richtig für linksseitigen Test: $H_1: p < 0{,}3$.' },
        { content: 'Schritt 2: $P(X \\leq 1) = P(X=0) + P(X=1) \\approx 0{,}0282 + 0{,}1211 = 0{,}1493$', hasError: false, errorExplanation: '' },
        { content: 'Schritt 3: Da $P(X \\leq 1) = 0{,}1493 > 0{,}05$, wird $H_0$ abgelehnt.', hasError: true, errorExplanation: 'Fehler: Linksseitiger Test → $H_0$ ablehnen, wenn $P(X \\leq x_{\\text{beob}}) \\leq \\alpha$. Da $0{,}1493 > 0{,}05$, wird $H_0$ beibehalten, nicht abgelehnt.' },
      ],
    },
    hintKeys: [
      '$H_1$ sollte eine Ungleichung enthalten, keine konkrete Zahl: $H_1: p < p_0$ (linksseitig).',
      'Linksseitiger Test: $H_0$ ablehnen, wenn $P(X \\leq x_{\\text{beob}}) \\leq \\alpha$. Nicht wenn größer als $\\alpha$!',
    ],
    solutionKey: 'Fehler 1 (Schritt 1): $H_1: p < 0{,}3$ statt konkrete Zahl. Fehler 2 (Schritt 3): Entscheidungsregel ist invertiert — da $0{,}1493 > 0{,}05$, wird $H_0$ beibehalten, nicht abgelehnt.',
    tags: ['fehleranalyse', 'hypothesen', 'entscheidungsregel', 'linksseitiger-test'],
  },

  {
    id: 'hyp-erweitert-004', topicId: '12-hypothesentests', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 10,
    contextKey: 'Tesla Qualitätskontrolle',
    data: {
      questionText: 'In Teslas Batteriefertigung liegt die Ausschussquote laut Norm bei $p_0 = 0{,}04$. Eine Qualitätsprüferin untersucht $n = 100$ Batterien und findet $x = 8$ defekte Exemplare. Sie führt einen rechtsseitigen Test auf $\\alpha = 0{,}05$ durch. Für $X \\sim B(100; 0{,}04)$ gilt $P(X \\geq 8) \\approx 0{,}0469$. Welche Aussagen sind korrekt?',
      options: [
        { id: 'a', text: '$P(X \\geq 8) = 0{,}0469 < 0{,}05$ → $H_0$ wird abgelehnt. Der Prozess liegt signifikant über der Norm.', correct: true },
        { id: 'b', text: 'Da $p = 8/100 = 0{,}08 \\neq 0{,}04$, ist $H_0$ offensichtlich falsch und muss abgelehnt werden.', correct: false },
        { id: 'c', text: 'Das Ergebnis beweist, dass $p > 0{,}04$ im gesamten Werk gilt.', correct: false },
        { id: 'd', text: 'Die Qualitätsprüferin begeht einen Fehler 1. Art, wenn sie $H_0$ ablehnt, obwohl $p$ tatsächlich 0,04 beträgt.', correct: true },
      ],
    },
    hintKeys: [
      'Mehrere Aussagen können korrekt sein. Prüfe jede einzeln.',
      'Statistisch signifikant bedeutet: unwahrscheinlich unter $H_0$ — aber nicht sicher bewiesen.',
    ],
    solutionKey: 'Korrekt sind (a) und (d). (a): $0{,}0469 < 0{,}05$ → $H_0$ ablehnen. (d): Wenn $H_0$ trotzdem stimmt, wäre die Ablehnung ein Fehler 1. Art. (b) ist falsch (Stichprobenwert ≠ Beweis). (c) ist falsch (Stichprobenergebnis gilt nicht für das gesamte Werk).',
    tags: ['mehrfach-richtig', 'fehler-1-art', 'tesla', 'sachkontext', 'rechtsseitiger-test'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 2 Aufgaben ────────────────────────

  {
    id: 'hyp-ea-001', topicId: '12-hypothesentests', type: 'step-solver', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 18,
    contextKey: 'Würfelbetrug — Gütefunktion',
    data: {
      questionText: 'Für den Würfelbetrug-Test ($n = 20$, $\\alpha = 0{,}05$, rechtsseitig, $H_0: p \\leq \\frac{1}{6}$) wurde der Ablehnungsbereich $\\{k_{\\min}, \\ldots, 20\\}$ bestimmt. Analysiere die Gütefunktion $G(p) = P(X \\geq k_{\\min})$ für verschiedene $p$-Werte.',
      steps: [
        {
          instruction: 'Für $X \\sim B(20; \\frac{1}{6})$ gilt $P(X \\geq 7) \\approx 0{,}0673$ und $P(X \\geq 8) \\approx 0{,}0271$. Bestimme $k_{\\min}$.',
          type: 'numeric-input', expected: 8, tolerance: 0,
          showAnswer: '$P(X \\geq 7) = 0{,}0673 > 0{,}05$ und $P(X \\geq 8) = 0{,}0271 \\leq 0{,}05$. Also $k_{\\min} = 8$.',
        },
        {
          instruction: 'Die Gütefunktion gibt die Wahrscheinlichkeit an, $H_0$ abzulehnen, in Abhängigkeit vom wahren $p$. Für $p = \\frac{1}{6}$ gilt $G(\\frac{1}{6}) \\approx 0{,}0271$. Was bedeutet dieser Wert?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Die Wahrscheinlichkeit, einen fairen Würfel irrtümlich als gezinkt zu bezeichnen, beträgt $\\approx 2{,}7\\%$ (Fehler 1. Art).', correct: true },
            { id: 'b', text: 'Der Test kann mit 2,7 % Wahrscheinlichkeit einen gezinkten Würfel entdecken.', correct: false },
            { id: 'c', text: 'Der Test ist zu 97,3 % korrekt.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$G(1/6)$ = Wahrscheinlichkeit, $H_0$ abzulehnen, wenn $H_0$ wahr ist = realisierter Fehler 1. Art $\\approx 2{,}7\\%$.',
        },
        {
          instruction: 'Für $p = 0{,}4$ (stark gezinkter Würfel) gilt $P(X \\geq 8 | p=0{,}4) \\approx 0{,}5956$. Was bedeutet das für die Gütefunktion?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Der Test entdeckt einen auf $p=0{,}4$ gezinkten Würfel mit ca. 60 % Wahrscheinlichkeit.', correct: true },
            { id: 'b', text: 'Der Test macht 60 % Fehler 1. Art.', correct: false },
            { id: 'c', text: 'Ein Würfel mit $p = 0{,}4$ wird zu 40 % fälschlicherweise als fair eingestuft.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$G(0{,}4) \\approx 0{,}60$ = Teststärke (Power) bei $p=0{,}4$. Der Test „sieht" diesen Betrug mit ca. 60 % Wahrscheinlichkeit. Für sicherere Entdeckung: größeres $n$.',
        },
        {
          instruction: 'Wie verhält sich die Gütefunktion $G(p)$ qualitativ für $p \\to 1$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$G(p) \\to 0$, da ein sehr gezinkter Würfel seltener entdeckt wird.', correct: false },
            { id: 'b', text: '$G(p) \\to 1$, da bei sehr hohem $p$ fast alle Stichproben im Ablehnungsbereich liegen.', correct: true },
            { id: 'c', text: '$G(p)$ bleibt konstant, da $k_{\\min}$ fest ist.', correct: false },
          ],
          correctId: 'b',
          showAnswer: 'Je größer das wahre $p$, desto wahrscheinlicher liegt $X$ im Ablehnungsbereich $\\{8, \\ldots, 20\\}$. Für $p \\to 1$ gilt $G(p) \\to 1$.',
        },
      ],
    },
    hintKeys: [
      'Gütefunktion $G(p) = P(X \\geq k_{\\min} | p)$: gibt die Power des Tests in Abhängigkeit von $p$ an.',
      'Bei $p = p_0$: $G(p_0) = $ realisierter Fehler 1. Art. Bei $p > p_0$: $G(p)$ steigt mit wachsender Abweichung.',
    ],
    solutionKey: '$k_{\\min} = 8$. $G(1/6) \\approx 0{,}027$ (Fehler 1. Art). $G(0{,}4) \\approx 0{,}60$ (Teststärke). $G(p) \\to 1$ für $p \\to 1$.',
    tags: ['guefunktion', 'testaerke', 'power', 'würfelbetrug', 'ea', 'sachkontext'],
  },

  {
    id: 'hyp-ea-002', topicId: '12-hypothesentests', type: 'multiple-choice', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 15,
    contextKey: 'Medikamentenstudie — Stichprobengröße',
    data: {
      questionText: 'Ein Pharmaunternehmen testet, ob ein Medikament bei mehr als 50 % der Patienten wirkt ($H_0: p \\leq 0{,}5$, $H_1: p > 0{,}5$, $\\alpha = 0{,}05$). Analysiere den Zusammenhang zwischen Stichprobengröße und dem $\\alpha$-Fehler sowie der Teststärke.',
      options: [
        { id: 'a', text: 'Wenn $n$ erhöht wird, steigt der $\\alpha$-Fehler automatisch an.', correct: false },
        { id: 'b', text: 'Wenn $n$ erhöht wird, bleibt $\\alpha$ kontrolliert bei 0{,}05, aber die Teststärke (Power) steigt — der Test kann kleinere Effekte entdecken.', correct: true },
        { id: 'c', text: 'Ein sehr großes $n$ macht jeden Unterschied statistisch signifikant, auch wenn er praktisch bedeutungslos ist.', correct: true },
        { id: 'd', text: 'Senkt man $\\alpha$ von 0{,}05 auf 0{,}01, sinkt gleichzeitig der Fehler 2. Art (bei gleichem $n$).', correct: false },
      ],
    },
    hintKeys: [
      'Teststärke = $1 - \\beta$. Größeres $n$ → schmalere Verteilung → Ablehnungsbereich wird empfindlicher.',
      'Das Signifikanzniveau $\\alpha$ bleibt durch die Wahl des Ablehnungsbereichs kontrolliert. Senkt man $\\alpha$, wird der Test strenger → Fehler 2. Art ($\\beta$) steigt.',
    ],
    solutionKey: 'Korrekt sind (b) und (c). (b): Größeres $n$ erhöht die Teststärke bei kontrolliertem $\\alpha$. (c): Bei sehr großem $n$ werden auch minimale, praktisch irrelevante Abweichungen signifikant. (a) falsch: $\\alpha$ wird durch den Ablehnungsbereich kontrolliert. (d) falsch: Kleineres $\\alpha$ → strengerer Test → Fehler 2. Art steigt (Zielkonflikt).',
    tags: ['stichprobengroesse', 'alpha-fehler', 'testaerke', 'ea', 'sachkontext', 'zielkonflikt'],
  },
];
