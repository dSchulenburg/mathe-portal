export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.anschaulich',
    'objectives.definition',
    'objectives.arten',
    'objectives.zwischenwertsatz',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'text', key: 'explanation.definition' },
    { type: 'formula', latex: '\\lim_{x \\to x_0} f(x) = f(x_0)' },
    { type: 'text', key: 'explanation.drei_bedingungen' },
    { type: 'formula', latex: '\\text{(1) } f(x_0) \\text{ existiert} \\quad \\text{(2) } \\lim_{x \\to x_0} f(x) \\text{ existiert} \\quad \\text{(3) beide sind gleich}' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.einseitig' },
    { type: 'formula', latex: '\\lim_{x \\to x_0^-} f(x) = \\lim_{x \\to x_0^+} f(x) = f(x_0)' },
    { type: 'text', key: 'explanation.arten' },
    { type: 'formula', latex: '\\underbrace{\\frac{x^2-1}{x-1}}_{\\text{hebbare Lücke}} \\qquad \\underbrace{\\frac{1}{x}}_{\\text{Polstelle}} \\qquad \\underbrace{\\begin{cases} 2 & x < 1 \\\\ 3 & x \\geq 1 \\end{cases}}_{\\text{Sprungstelle}}' },
    { type: 'text', key: 'explanation.zwischenwertsatz' },
    { type: 'formula', latex: 'f \\text{ stetig auf } [a;b], \\; f(a) < 0 < f(b) \\quad \\Rightarrow \\quad \\exists\\, x_0 \\in (a;b) \\text{ mit } f(x_0) = 0' },
  ],

  concepts: [
    {
      titleKey: 'concepts.stetig_an_stelle.title',
      descriptionKey: 'concepts.stetig_an_stelle.desc',
      formula: '\\lim_{x \\to x_0} f(x) = f(x_0)',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.einseitig.title',
      descriptionKey: 'concepts.einseitig.desc',
      formula: '\\lim_{x \\to x_0^-} f(x) \\overset{!}{=} \\lim_{x \\to x_0^+} f(x)',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.arten.title',
      descriptionKey: 'concepts.arten.desc',
      formula: '\\text{hebbare Lücke} \\;\\neq\\; \\text{Sprungstelle} \\;\\neq\\; \\text{Polstelle}',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.zwischenwertsatz.title',
      descriptionKey: 'concepts.zwischenwertsatz.desc',
      formula: 'f(a) < 0 < f(b) \\;\\Rightarrow\\; \\exists\\, x_0 \\in (a;b): f(x_0) = 0',
      highlight: 'green',
    },
  ],

  examples: [
    {
      titleKey: 'examples.luecke.title',
      contextKey: 'examples.luecke.context',
      steps: [
        { key: 'examples.luecke.step1', formula: 'f(x) = \\frac{x^2 - 1}{x - 1}, \\quad D = \\mathbb{R} \\setminus \\{1\\}' },
        { key: 'examples.luecke.step2', formula: '\\frac{x^2-1}{x-1} = \\frac{(x-1)(x+1)}{x-1} = x + 1 \\quad (x \\neq 1)' },
        { key: 'examples.luecke.step3', formula: '\\lim_{x \\to 1} f(x) = 1 + 1 = 2' },
        { key: 'examples.luecke.step4', formula: '\\tilde{f}(x) = \\begin{cases} \\frac{x^2-1}{x-1} & x \\neq 1 \\\\ 2 & x = 1 \\end{cases} \\quad \\text{ist stetig}' },
      ],
      characterComment: 'examples.luecke.mia_comment',
    },
    {
      titleKey: 'examples.sprung.title',
      contextKey: 'examples.sprung.context',
      steps: [
        { key: 'examples.sprung.step1', formula: 'p(t) = \\begin{cases} 2{,}00\\,€ & 0 < t \\leq 1 \\\\ 3{,}50\\,€ & 1 < t \\leq 2 \\end{cases}' },
        { key: 'examples.sprung.step2', formula: '\\lim_{t \\to 1^-} p(t) = 2{,}00 \\qquad \\lim_{t \\to 1^+} p(t) = 3{,}50' },
        { key: 'examples.sprung.step3', formula: '2{,}00 \\neq 3{,}50 \\;\\Rightarrow\\; \\text{Sprungstelle bei } t = 1' },
        { key: 'examples.sprung.step4', formula: '\\text{Sprunghöhe} = 3{,}50 - 2{,}00 = 1{,}50\\,€' },
      ],
      characterComment: 'examples.sprung.kai_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.parkhaus.title',
      descriptionKey: 'realworld.parkhaus.desc',
      icon: '🅿️',
      formula: 'p(t) = \\text{Stufenfunktion, unstetig an jeder vollen Stunde}',
    },
    {
      titleKey: 'realworld.temperatur.title',
      descriptionKey: 'realworld.temperatur.desc',
      icon: '🌡️',
      formula: 'T(t) \\text{ stetig — kein Sprung ohne Energiezufuhr}',
    },
    {
      titleKey: 'realworld.nullstelle.title',
      descriptionKey: 'realworld.nullstelle.desc',
      icon: '🎯',
      formula: 'f(a) < 0 < f(b) \\;\\Rightarrow\\; \\text{Nullstelle im Intervall}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.definiert_gleich_stetig.wrong',
      correctKey: 'mistakes.definiert_gleich_stetig.correct',
      explanationKey: 'mistakes.definiert_gleich_stetig.why',
      wrongFormula: 'f(x_0) \\text{ existiert} \\;\\Rightarrow\\; f \\text{ ist bei } x_0 \\text{ stetig}',
      correctFormula: 'f(x_0) \\text{ existiert } \\textbf{und} \\; \\lim_{x \\to x_0} f(x) = f(x_0)',
      characterWarning: 'mistakes.definiert_gleich_stetig.mia_warning',
    },
    {
      wrongKey: 'mistakes.pol_ist_hebbar.wrong',
      correctKey: 'mistakes.pol_ist_hebbar.correct',
      explanationKey: 'mistakes.pol_ist_hebbar.why',
      wrongFormula: '\\frac{1}{x} \\text{ bei } x = 0 \\text{ durch einen Wert stetig ergänzen}',
      correctFormula: '\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty \\neq +\\infty = \\lim_{x \\to 0^+} \\frac{1}{x}',
      characterWarning: 'mistakes.pol_ist_hebbar.mia_warning',
    },
  ],

  prerequisites: ['10-diff-einfuehrung'],

  connections: [
    {
      topicId: '10-diff-einfuehrung',
      relation: 'baut-auf',
      why: 'Der Grenzwertbegriff aus der Differentialrechnung ist das Werkzeug, mit dem Stetigkeit überhaupt erst definiert wird',
      bubble: {
        character: 'euklid',
        text: 'Du hast den Limes kennengelernt, um die Tangentensteigung zu bekommen. Jetzt benutzt du dasselbe Werkzeug für eine andere Frage: Passt der Grenzwert zum Funktionswert? $\\lim_{x \\to x_0} f(x) = f(x_0)$ — mehr ist Stetigkeit nicht. Und es gilt die Einbahnstraße: differenzierbar $\\Rightarrow$ stetig, aber nicht umgekehrt. $f(x) = |x|$ ist bei $0$ stetig und hat dort trotzdem keine Tangente.',
      },
    },
    {
      topicId: '11-rationale-funktionen',
      relation: 'fuehrt-zu',
      why: 'Hebbare Lücke und Polstelle sind genau die beiden Fälle, die bei gebrochen-rationalen Funktionen unterschieden werden müssen',
      bubble: {
        character: 'euklid',
        text: 'Hier trennst du zum ersten Mal Lücke von Pol. In Klasse 11 bekommt genau diese Unterscheidung einen Namen und eine Rechenregel: kürzt sich der Faktor im Nenner weg, ist es eine hebbare Lücke; bleibt er stehen, ist es eine Polstelle mit Asymptote. Die Abi-Frage "Zeige, dass die Lücke hebbar ist" beantwortest du dann in zwei Zeilen.',
      },
    },
    {
      topicId: '11-integralrechnung',
      relation: 'fuehrt-zu',
      why: 'Der Hauptsatz setzt Stetigkeit voraus — ohne sie gibt es keine Stammfunktion',
      bubble: {
        character: 'euklid',
        text: 'Wenn du später integrierst, steht in jedem Satz derselbe Halbsatz: "sei $f$ stetig auf $[a;b]$". Das ist keine Formalie. Auf einer Sprungstelle bricht der Zusammenhang zwischen Fläche und Stammfunktion zusammen. Stetigkeit ist die Eintrittskarte zur Integralrechnung.',
      },
    },
    {
      topicId: '10-funktionsklassen',
      relation: 'verwandt',
      why: 'Polynome, Sinus und Exponentialfunktionen sind überall stetig — Brüche und abschnittsweise Definitionen nicht',
      bubble: {
        character: 'euklid',
        text: 'Die gute Nachricht zuerst: Ganzrationale Funktionen, $\\sin$, $\\cos$ und $e^x$ sind auf ganz $\\mathbb{R}$ stetig. Du musst also gar nicht überall suchen. Verdächtig sind nur zwei Sorten: Brüche an den Nullstellen des Nenners, und abschnittsweise definierte Funktionen an den Nahtstellen.',
      },
    },
  ],
};
