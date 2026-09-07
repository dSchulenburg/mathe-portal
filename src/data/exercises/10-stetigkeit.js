export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'st-basis-001',
    topicId: '10-stetigkeit',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Was muss gelten, damit eine Funktion $f$ an der Stelle $x_0$ stetig ist?',
      options: [
        { id: 'a', text: '$\\lim\\limits_{x \\to x_0} f(x) = f(x_0)$', correct: true },
        { id: 'b', text: '$f(x_0)$ ist definiert — das genügt', correct: false },
        { id: 'c', text: '$f$ ist an der Stelle $x_0$ differenzierbar', correct: false },
        { id: 'd', text: '$f(x_0) = 0$', correct: false },
      ],
    },
    hintKeys: [
      'Stetig heißt: der Wert, auf den die Funktion zuläuft, ist auch der Wert, den sie annimmt.',
    ],
    solutionKey:
      'Richtig ist (a). Drei Dinge müssen zusammenkommen: $f(x_0)$ muss existieren, der Grenzwert ' +
      'muss existieren, und beide müssen übereinstimmen. ' +
      '(b) reicht nicht — eine Sprungfunktion ist an der Sprungstelle definiert und trotzdem unstetig. ' +
      '(c) ist zu stark: Differenzierbarkeit erzwingt Stetigkeit, aber $f(x) = |x|$ ist bei $0$ stetig ' +
      'und dort nicht differenzierbar.',
    tags: ['definition', 'grenzwert'],
  },
  {
    id: 'st-basis-002',
    topicId: '10-stetigkeit',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Die Funktion $f(x) = \\dfrac{x^2 - 9}{x - 3}$ ist an der Stelle $x = 3$ nicht definiert. ' +
        'Welchen Wert musst du $f(3)$ zuweisen, damit die Funktion dort stetig wird?',
      correctValue: 6,
      tolerance: 0.001,
    },
    hintKeys: [
      'Faktorisiere den Zähler: $x^2 - 9 = (x-3)(x+3)$.',
      'Nach dem Kürzen bleibt $x + 3$ — und dieser Term ist bei $x = 3$ problemlos auswertbar.',
    ],
    solutionKey:
      '$\\dfrac{x^2-9}{x-3} = \\dfrac{(x-3)(x+3)}{x-3} = x+3$ für alle $x \\neq 3$. ' +
      'Also ist $\\lim\\limits_{x \\to 3} f(x) = 6$. Mit $f(3) := 6$ ist die Lücke gehoben — ' +
      'die Funktion heißt dann **stetig fortgesetzt**.',
    tags: ['hebbare-luecke', 'stetige-fortsetzung'],
  },
  {
    id: 'st-basis-003',
    topicId: '10-stetigkeit',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText: 'Welche dieser Funktionen ist an der Stelle $x = 0$ **un**stetig?',
      options: [
        { id: 'a', text: '$f(x) = \\dfrac{1}{x}$', correct: true },
        { id: 'b', text: '$f(x) = |x|$', correct: false },
        { id: 'c', text: '$f(x) = x^2 - 4$', correct: false },
        { id: 'd', text: '$f(x) = \\sin(x)$', correct: false },
      ],
    },
    hintKeys: [
      'Prüfe zuerst, ob die Stelle überhaupt zum Definitionsbereich gehört.',
    ],
    solutionKey:
      '$\\dfrac{1}{x}$ ist bei $x = 0$ gar nicht definiert — die Funktion hat dort eine **Polstelle**. ' +
      'Die Betragsfunktion $|x|$ ist bei $0$ stetig (sie hat nur einen Knick, keinen Sprung), ' +
      'Polynome und $\\sin$ sind auf ganz $\\mathbb{R}$ stetig. ' +
      'Knick $\\neq$ Sprung: ein Knick kostet die Differenzierbarkeit, nicht die Stetigkeit.',
    tags: ['polstelle', 'unstetigkeit'],
  },
  {
    id: 'st-basis-004',
    topicId: '10-stetigkeit',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 4,
    contextKey: 'Parkhaus',
    data: {
      questionText:
        'Ein Parkhaus rechnet in vollen Stunden ab: bis einschließlich 1 Stunde kostet es 2,00 €, ' +
        'ab der angebrochenen zweiten Stunde 3,50 €. Wie hoch ist der Sprung der Preisfunktion ' +
        'an der Stelle $t = 1$ (in €)?',
      correctValue: 1.5,
      tolerance: 0.01,
      unit: '€',
    },
    hintKeys: [
      'Vergleiche den linksseitigen Grenzwert (kurz vor einer Stunde) mit dem rechtsseitigen (kurz danach).',
    ],
    solutionKey:
      '$\\lim\\limits_{t \\to 1^-} p(t) = 2{,}00$ €, $\\lim\\limits_{t \\to 1^+} p(t) = 3{,}50$ €. ' +
      'Die Sprunghöhe ist die Differenz: $3{,}50 - 2{,}00 = 1{,}50$ €. ' +
      'Solche Stufentarife sind das Alltagsbeispiel für eine Sprungstelle — und der Grund, ' +
      'warum eine Minute Verspätung 1,50 € kosten kann.',
    tags: ['sprungstelle', 'sachkontext', 'stufenfunktion'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ───────────────────────────────────────

  {
    id: 'st-std-001',
    topicId: '10-stetigkeit',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Gegeben ist $f(x) = \\begin{cases} 2x + a & \\text{für } x < 1 \\\\ x^2 + 3 & \\text{für } x \\geq 1 \\end{cases}$. ' +
        'Für welchen Wert von $a$ ist $f$ an der Nahtstelle $x = 1$ stetig?',
      correctValue: 2,
      tolerance: 0.001,
    },
    hintKeys: [
      'An der Nahtstelle müssen beide Äste denselben Wert liefern.',
      'Setze $x = 1$ in beide Terme ein und setze sie gleich: $2 \\cdot 1 + a = 1^2 + 3$.',
    ],
    solutionKey:
      'Linksseitig: $\\lim\\limits_{x \\to 1^-} f(x) = 2 + a$. Rechtsseitig und als Funktionswert: ' +
      '$f(1) = 1 + 3 = 4$. Stetigkeit verlangt $2 + a = 4$, also $a = 2$. ' +
      'Bei jedem anderen $a$ hat der Graph an dieser Stelle einen Sprung der Höhe $|a - 2|$.',
    tags: ['nahtstelle', 'parameter', 'abschnittsweise'],
  },
  {
    id: 'st-std-002',
    topicId: '10-stetigkeit',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Bestimme den Grenzwert $\\lim\\limits_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$.',
      correctValue: 4,
      tolerance: 0.001,
    },
    hintKeys: [
      'Einsetzen liefert $\\frac{0}{0}$ — das ist kein Ergebnis, sondern ein Hinweis auf einen gemeinsamen Faktor.',
      'Dritte binomische Formel: $x^2 - 4 = (x-2)(x+2)$.',
    ],
    solutionKey:
      '$\\dfrac{x^2-4}{x-2} = \\dfrac{(x-2)(x+2)}{x-2} = x+2$ für $x \\neq 2$, also ' +
      '$\\lim\\limits_{x \\to 2} f(x) = 4$. ' +
      'Der Ausdruck $\\frac{0}{0}$ heißt „unbestimmter Ausdruck": er sagt nur, dass man kürzen muss, ' +
      'nicht dass der Grenzwert nicht existiert.',
    tags: ['hebbare-luecke', 'grenzwert', 'kuerzen'],
  },
  {
    id: 'st-std-003',
    topicId: '10-stetigkeit',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Welche Aussage über $f(x) = \\dfrac{x - 2}{(x-2)(x+1)}$ ist richtig?',
      options: [
        {
          id: 'a',
          text: 'Bei $x = 2$ hebbare Lücke, bei $x = -1$ Polstelle',
          correct: true,
        },
        {
          id: 'b',
          text: 'Bei $x = 2$ und $x = -1$ jeweils eine Polstelle',
          correct: false,
        },
        {
          id: 'c',
          text: 'Bei $x = 2$ Polstelle, bei $x = -1$ hebbare Lücke',
          correct: false,
        },
        { id: 'd', text: 'Die Funktion ist auf ganz $\\mathbb{R}$ stetig', correct: false },
      ],
    },
    hintKeys: [
      'Kürze, was sich kürzen lässt — und schau, welcher Faktor im Nenner stehen bleibt.',
      'Faustregel: kürzt sich der Faktor weg, ist es eine Lücke. Bleibt er stehen, ist es ein Pol.',
    ],
    solutionKey:
      'Kürzen ergibt $f(x) = \\dfrac{1}{x+1}$ für $x \\neq 2$. Der Faktor $(x-2)$ verschwindet — ' +
      'bei $x = 2$ liegt also nur eine **hebbare Lücke** mit dem Wert $\\frac{1}{3}$. ' +
      'Der Faktor $(x+1)$ bleibt im Nenner stehen: bei $x = -1$ liegt eine **Polstelle**, ' +
      'dort wächst die Funktion über alle Grenzen. ' +
      'Beide Stellen fehlen im Definitionsbereich — aber nur eine davon lässt sich reparieren.',
    tags: ['hebbare-luecke', 'polstelle', 'unterscheidung'],
  },
  {
    id: 'st-std-004',
    topicId: '10-stetigkeit',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 10,
    timeEstimate: 5,
    contextKey: 'Lieferkosten',
    data: {
      questionText:
        'Ein Lieferdienst berechnet für Strecken unter 2 km einen Kilometerpreis von $a$ € pro km, ' +
        'ab 2 km gilt $f(x) = x + 4$ (in €). Für welches $a$ geht der Tarif an der Stelle ' +
        '$x = 2$ ohne Sprung ineinander über?',
      correctValue: 3,
      tolerance: 0.001,
      unit: '€/km',
    },
    hintKeys: [
      'Der erste Ast lautet $f(x) = a \\cdot x$. Setze beide Äste bei $x = 2$ gleich.',
      '$a \\cdot 2 = 2 + 4$',
    ],
    solutionKey:
      'Stetigkeit bei $x = 2$ verlangt $a \\cdot 2 = 2 + 4 = 6$, also $a = 3$ €/km. ' +
      'Kunden merken so etwas sofort: bei $a = 2$ würde die Rechnung beim Überschreiten von 2 km ' +
      'plötzlich von 4 € auf 6 € springen — ein Sprung, den niemand erklären kann.',
    tags: ['nahtstelle', 'parameter', 'sachkontext'],
  },
  {
    id: 'st-std-005',
    topicId: '10-stetigkeit',
    type: 'error-analysis',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 12,
    timeEstimate: 6,
    data: {
      questionText:
        'Jonas untersucht $f(x) = \\dfrac{1}{x}$ an der Stelle $x = 0$. Finde den Fehler.',
      steps: [
        {
          content: '$f$ ist bei $x = 0$ nicht definiert, dort ist also etwas zu untersuchen.',
          hasError: false,
        },
        {
          content:
            'Wie bei $\\frac{x^2-1}{x-1}$ lässt sich die Lücke heben — ich definiere einfach $f(0) := 0$.',
          hasError: true,
          errorExplanation:
            'Eine Lücke ist nur dann hebbar, wenn der Grenzwert existiert. Hier ist ' +
            '$\\lim\\limits_{x \\to 0^-} \\frac{1}{x} = -\\infty$ und $\\lim\\limits_{x \\to 0^+} \\frac{1}{x} = +\\infty$ — ' +
            'die beiden einseitigen Grenzwerte sind nicht einmal endlich, geschweige denn gleich. ' +
            'Es gibt keinen Wert, den man einsetzen könnte. Das ist eine Polstelle.',
        },
        {
          content: 'Damit wäre $f$ auf ganz $\\mathbb{R}$ stetig.',
          hasError: false,
        },
      ],
    },
    hintKeys: [
      'Prüfe die beiden einseitigen Grenzwerte einzeln — nähere dich $0$ von links und von rechts.',
      'Setze testweise $x = 0{,}001$ und $x = -0{,}001$ ein.',
    ],
    solutionKey:
      'Schritt 2 ist falsch. Nicht jede Definitionslücke ist hebbar. Die Unterscheidung: ' +
      'existiert der beidseitige Grenzwert, ist die Lücke **hebbar**; laufen die einseitigen ' +
      'Grenzwerte auseinander oder ins Unendliche, ist es eine **Polstelle** und nichts zu retten. ' +
      'Schritt 3 folgt logisch aus Schritt 2 und ist deshalb ebenfalls falsch — aber der Fehler ' +
      'steckt eine Zeile weiter oben.',
    tags: ['fehleranalyse', 'polstelle', 'hebbare-luecke'],
  },

  // ─── ERWEITERT (AFB III) – 3 Aufgaben ─────────────────────────────────────

  {
    id: 'st-erw-001',
    topicId: '10-stetigkeit',
    type: 'step-solver',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 9,
    contextKey: 'Zwischenwertsatz',
    data: {
      questionText:
        'Zeige mit dem Zwischenwertsatz, dass $f(x) = x^3 - x - 1$ im Intervall $[1;2]$ eine ' +
        'Nullstelle hat — und grenze sie mit einem Halbierungsschritt weiter ein.',
      steps: [
        {
          instruction: 'Welche Voraussetzung des Zwischenwertsatzes ist hier ohne Rechnung erfüllt?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$f$ ist als Polynom auf ganz $\\mathbb{R}$ stetig' },
            { id: 'b', text: '$f$ ist streng monoton steigend' },
            { id: 'c', text: '$f$ hat genau eine Nullstelle' },
          ],
          correctId: 'a',
          showAnswer:
            'Ganzrationale Funktionen sind überall stetig — das darfst du ohne Nachweis benutzen. ' +
            'Genau deshalb ist der Satz auf Polynome so bequem anwendbar.',
        },
        {
          instruction: 'Berechne $f(1)$.',
          type: 'numeric-input',
          expected: -1,
          tolerance: 0.001,
          showAnswer: '$f(1) = 1 - 1 - 1 = -1$',
        },
        {
          instruction: 'Berechne $f(2)$.',
          type: 'numeric-input',
          expected: 5,
          tolerance: 0.001,
          showAnswer: '$f(2) = 8 - 2 - 1 = 5$',
        },
        {
          instruction: 'Berechne $f(1{,}5)$ für den Halbierungsschritt.',
          type: 'numeric-input',
          expected: 0.875,
          tolerance: 0.001,
          showAnswer: '$f(1{,}5) = 3{,}375 - 1{,}5 - 1 = 0{,}875$',
        },
        {
          instruction: 'In welchem Teilintervall liegt die Nullstelle danach sicher?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$[1; 1{,}5]$' },
            { id: 'b', text: '$[1{,}5; 2]$' },
            { id: 'c', text: 'Das lässt sich nicht entscheiden' },
          ],
          correctId: 'a',
          showAnswer:
            '$f(1) = -1 < 0$ und $f(1{,}5) = 0{,}875 > 0$ — der Vorzeichenwechsel liegt jetzt in ' +
            '$[1; 1{,}5]$. Im rechten Teil sind beide Werte positiv, dort garantiert der Satz nichts.',
        },
      ],
    },
    hintKeys: [
      'Der Zwischenwertsatz braucht zwei Dinge: Stetigkeit auf dem Intervall und einen Vorzeichenwechsel an den Rändern.',
      'Nach dem Halbierungsschritt behältst du die Hälfte, in der das Vorzeichen noch wechselt.',
    ],
    solutionKey:
      '$f$ ist als Polynom stetig, $f(1) = -1 < 0$ und $f(2) = 5 > 0$. Nach dem Zwischenwertsatz ' +
      'gibt es also mindestens ein $x_0 \\in (1;2)$ mit $f(x_0) = 0$. ' +
      'Mit $f(1{,}5) = 0{,}875 > 0$ verlagert sich der Vorzeichenwechsel auf $[1; 1{,}5]$. ' +
      'Beachte: Der Satz liefert **Existenz**, keine Eindeutigkeit und keinen Wert — genau deshalb ' +
      'braucht man danach ein Näherungsverfahren wie die Intervallhalbierung.',
    tags: ['step-solver', 'zwischenwertsatz', 'nullstellensatz', 'intervallhalbierung', 'ea'],
  },
  {
    id: 'st-erw-002',
    topicId: '10-stetigkeit',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 12,
    timeEstimate: 6,
    data: {
      questionText:
        'Welcher Zusammenhang zwischen Stetigkeit und Differenzierbarkeit ist korrekt?',
      options: [
        {
          id: 'a',
          text: 'Differenzierbar $\\Rightarrow$ stetig, aber nicht umgekehrt. Gegenbeispiel: $f(x) = |x|$ bei $x = 0$',
          correct: true,
        },
        {
          id: 'b',
          text: 'Stetig $\\Rightarrow$ differenzierbar, aber nicht umgekehrt',
          correct: false,
        },
        { id: 'c', text: 'Beide Begriffe bedeuten dasselbe', correct: false },
        { id: 'd', text: 'Die beiden Begriffe haben nichts miteinander zu tun', correct: false },
      ],
    },
    hintKeys: [
      'Zeichne $|x|$ in der Nähe von $0$. Musst du den Stift absetzen? Kannst du eine eindeutige Tangente anlegen?',
    ],
    solutionKey:
      'Richtig ist (a). Differenzierbarkeit ist die stärkere Forderung: wo eine Tangente existiert, ' +
      'kann kein Sprung sein. Die Umkehrung gilt nicht — $|x|$ ist bei $0$ stetig (man zeichnet ohne ' +
      'abzusetzen), hat dort aber einen Knick: von links kommt die Steigung $-1$, von rechts $+1$. ' +
      'Der Grenzwert des Differenzenquotienten existiert also nicht. ' +
      'Merksatz: **stetig ist Vorbedingung, nicht Belohnung.**',
    tags: ['differenzierbarkeit', 'verstaendnis', 'ea'],
  },
  {
    id: 'st-erw-003',
    topicId: '10-stetigkeit',
    type: 'step-solver',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativität'],
    points: 18,
    timeEstimate: 10,
    data: {
      questionText:
        'Gegeben ist $f(x) = \\begin{cases} x^2 + a & \\text{für } x < 1 \\\\ b\\,x + 2 & \\text{für } x \\geq 1 \\end{cases}$. ' +
        'Bestimme $a$ und $b$ so, dass $f$ an der Nahtstelle nicht nur stetig, sondern sogar ' +
        'differenzierbar ist — der Graph also weder springt noch knickt.',
      steps: [
        {
          instruction: 'Welche Gleichung liefert die Stetigkeit bei $x = 1$?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$1 + a = b + 2$' },
            { id: 'b', text: '$a = b$' },
            { id: 'c', text: '$2 = b$' },
          ],
          correctId: 'a',
          showAnswer:
            'Beide Äste bei $x = 1$ auswerten: links $1^2 + a = 1 + a$, rechts $b \\cdot 1 + 2 = b + 2$. ' +
            'Gleichsetzen ergibt $1 + a = b + 2$.',
        },
        {
          instruction: 'Bestimme $b$ aus der Bedingung, dass auch die Steigungen zusammenpassen.',
          type: 'numeric-input',
          expected: 2,
          tolerance: 0.001,
          showAnswer:
            'Links ist $f\'(x) = 2x$, bei $x = 1$ also $2$. Rechts ist $f\'(x) = b$. ' +
            'Kein Knick heißt $2 = b$, also $b = 2$.',
        },
        {
          instruction: 'Setze $b$ in die Stetigkeitsbedingung ein und bestimme $a$.',
          type: 'numeric-input',
          expected: 3,
          tolerance: 0.001,
          showAnswer: '$1 + a = 2 + 2 = 4 \\Rightarrow a = 3$.',
        },
      ],
    },
    hintKeys: [
      'Zwei Unbekannte brauchen zwei Bedingungen: eine für den Wert, eine für die Steigung.',
      'Die Steigungsbedingung ist die einfachere — sie enthält nur $b$. Fang damit an.',
    ],
    solutionKey:
      'Mit $a = 3$ und $b = 2$ ist $f$ bei $x = 1$ differenzierbar: beide Äste liefern den Wert $4$ ' +
      'und die Steigung $2$. ' +
      'Die Reihenfolge ist der Trick — die Ableitungsbedingung $2 = b$ enthält nur eine Unbekannte ' +
      'und löst das System sofort auf. ' +
      'Wer stattdessen mit der Stetigkeitsgleichung beginnt, hängt mit $1 + a = b + 2$ in einer ' +
      'Gleichung mit zwei Unbekannten fest.',
    tags: ['step-solver', 'nahtstelle', 'parameter', 'differenzierbarkeit', 'ea'],
  },
];
