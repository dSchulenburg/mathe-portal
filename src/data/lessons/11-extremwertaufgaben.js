export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.setup_equations',
    'objectives.optimize_constraints',
    'objectives.verify_extremum',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: '\\text{Zielfunktion } f(x) \\to \\max / \\min \\quad \\text{unter Nebenbedingung } g(x) = 0' },
    { type: 'text', key: 'explanation.strategy' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.substitution' },
    { type: 'formula', latex: 'f\'(x) = 0 \\quad \\Rightarrow \\quad x_{\\text{opt}} \\quad \\Rightarrow \\quad f\'\'(x_{\\text{opt}}) \\gtrless 0' },
    { type: 'text', key: 'explanation.domain_check' },
  ],

  concepts: [
    {
      titleKey: 'concepts.target_function.title',
      descriptionKey: 'concepts.target_function.desc',
      formula: 'f(x) \\to \\max \\;/\\; \\min',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.constraint.title',
      descriptionKey: 'concepts.constraint.desc',
      formula: 'g(x{,}\\,y) = 0 \\quad \\Rightarrow \\quad y = h(x) \\quad \\Rightarrow \\quad f(x)',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.boundary_check.title',
      descriptionKey: 'concepts.boundary_check.desc',
      formula: 'f(x_{\\text{opt}}) \\text{ vergleichen mit } f(a) \\text{ und } f(b) \\text{ auf } [a;\\,b]',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.can_volume.title',
      contextKey: 'examples.can_volume.context',
      steps: [
        { key: 'examples.can_volume.step1', formula: 'V = \\pi r^2 h = 330 \\quad \\Rightarrow \\quad h = \\frac{330}{\\pi r^2}' },
        { key: 'examples.can_volume.step2', formula: 'O(r) = 2\\pi r^2 + 2\\pi r \\cdot \\frac{330}{\\pi r^2} = 2\\pi r^2 + \\frac{660}{r}' },
        { key: 'examples.can_volume.step3', formula: 'O\'(r) = 4\\pi r - \\frac{660}{r^2} = 0 \\quad \\Rightarrow \\quad r = \\sqrt[3]{\\frac{660}{4\\pi}} \\approx 3{,}74\\,\\text{cm}' },
        { key: 'examples.can_volume.step4', formula: 'O\'\'(r) = 4\\pi + \\frac{1320}{r^3} > 0 \\quad \\Rightarrow \\quad \\text{Minimum}' },
      ],
      characterComment: 'examples.can_volume.amir_comment',
    },
    {
      titleKey: 'examples.profit_max.title',
      contextKey: 'examples.profit_max.context',
      steps: [
        { key: 'examples.profit_max.step1', formula: 'G(x) = E(x) - K(x) = -0{,}5x^2 + 40x - 200' },
        { key: 'examples.profit_max.step2', formula: 'G\'(x) = -x + 40 = 0 \\quad \\Rightarrow \\quad x = 40' },
        { key: 'examples.profit_max.step3', formula: 'G\'\'(x) = -1 < 0 \\quad \\Rightarrow \\quad \\text{Maximum bei } x = 40' },
        { key: 'examples.profit_max.step4', formula: 'G(40) = -0{,}5 \\cdot 1600 + 1600 - 200 = 600\\,\\text{\\euro}' },
      ],
      characterComment: 'examples.profit_max.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.hyperparameter.title',
      descriptionKey: 'realworld.hyperparameter.desc',
      icon: '🧠',
      formula: '\\alpha_{\\text{opt}} = \\arg\\min_{\\alpha} L(\\alpha)',
    },
    {
      titleKey: 'realworld.packaging.title',
      descriptionKey: 'realworld.packaging.desc',
      icon: '📦',
    },
    {
      titleKey: 'realworld.solar_panel.title',
      descriptionKey: 'realworld.solar_panel.desc',
      icon: '☀️',
      formula: 'P(\\theta) \\to \\max',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.no_constraint.wrong',
      correctKey: 'mistakes.no_constraint.correct',
      explanationKey: 'mistakes.no_constraint.why',
      wrongFormula: 'f(x{,}\\,y) \\to \\min \\quad \\text{(zwei Variablen)}',
      correctFormula: 'g(x{,}\\,y) = 0 \\;\\Rightarrow\\; y = h(x) \\;\\Rightarrow\\; f(x) \\to \\min',
      characterWarning: 'mistakes.no_constraint.amir_warning',
    },
    {
      wrongKey: 'mistakes.no_boundary.wrong',
      correctKey: 'mistakes.no_boundary.correct',
      explanationKey: 'mistakes.no_boundary.why',
      wrongFormula: 'f\'(x_0) = 0 \\;\\Rightarrow\\; \\text{globales Optimum}',
      correctFormula: 'f(x_0) \\text{ vergleichen mit } f(a),\\; f(b) \\text{ an den Raendern}',
      characterWarning: 'mistakes.no_boundary.amir_warning',
    },
  ],

  prerequisites: ['11-kurvendiskussion'],

  connections: [
    {
      topicId: '11-kurvendiskussion',
      relation: 'baut-auf',
      why: 'Optimieren ist eine Extremstelle finden — also Kurvendiskussion mit Bedeutung',
      bubble: {
        character: 'euklid',
        text: 'Mathematisch passiert hier nichts Neues: $f\'(x) = 0$ und mit $f\'\'$ prüfen. Was anders ist, ist der Weg dorthin: Erst musst du aus einer Sachsituation überhaupt eine Funktion bauen. Modellieren ist die eigentliche Kunst.',
      },
    },
    {
      topicId: '10-quad-funktionen',
      relation: 'baut-auf',
      why: 'Der Scheitelpunkt einer Parabel ist das einfachste Optimum überhaupt',
      bubble: {
        character: 'euklid',
        text: 'Wenn deine Zielfunktion am Ende eine Parabel ist, brauchst du gar keine Ableitung — du kennst den Scheitelpunkt schon aus Klasse 10. Quadratische Optimierung ist Extremwert „mit blossem Auge".',
      },
    },
    {
      topicId: '12-e-funktion-ln',
      relation: 'fuehrt-zu',
      why: 'Optimieren mit e-Funktionen — Akkuladung, Pharmadosis, Modellfit',
      bubble: {
        character: 'euklid',
        text: 'In Klasse 12 wirst du Extrema von e-Funktionen suchen — wann ist die Wirkstoffkonzentration am höchsten, wann der Energieverbrauch am geringsten. Die Methode bleibt, nur die Funktionsklasse wird reicher.',
      },
    },
  ],
};
