export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.identify_types',
    'objectives.compare_growth',
    'objectives.match_context',
    'objectives.graph_recognition',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'f(x) = mx + b \\quad \\text{(linear)}' },
    { type: 'formula', latex: 'f(x) = ax^2 + bx + c \\quad \\text{(quadratisch)}' },
    { type: 'formula', latex: 'f(x) = a \\cdot b^x \\quad \\text{(exponentiell)}' },
    { type: 'formula', latex: 'f(x) = \\log_a(x) \\quad \\text{(logarithmisch)}' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.growth_comparison' },
    { type: 'formula', latex: 'x \\to \\infty: \\quad \\log(x) \\ll \\sqrt{x} \\ll x \\ll x^2 \\ll 2^x' },
    { type: 'text', key: 'explanation.choosing_functions' },
  ],

  concepts: [
    {
      titleKey: 'concepts.linear.title',
      descriptionKey: 'concepts.linear.desc',
      formula: 'f(x) = mx + b',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.quadratic.title',
      descriptionKey: 'concepts.quadratic.desc',
      formula: 'f(x) = ax^2 + bx + c',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.exponential.title',
      descriptionKey: 'concepts.exponential.desc',
      formula: 'f(x) = a \\cdot b^x, \\quad b > 0, \\; b \\neq 1',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.logarithmic.title',
      descriptionKey: 'concepts.logarithmic.desc',
      formula: 'f(x) = \\log_a(x), \\quad a > 0, \\; a \\neq 1',
      highlight: 'amber',
    },
  ],

  examples: [
    {
      titleKey: 'examples.identify_type.title',
      contextKey: 'examples.identify_type.context',
      steps: [
        { key: 'examples.identify_type.step1', formula: '\\Delta y / \\Delta x = \\text{const} \\quad \\Rightarrow \\quad \\text{linear}' },
        { key: 'examples.identify_type.step2', formula: '\\frac{y_2}{y_1} = \\text{const} \\quad \\Rightarrow \\quad \\text{exponentiell}' },
        { key: 'examples.identify_type.step3', formula: '\\Delta^2 y = \\text{const} \\quad \\Rightarrow \\quad \\text{quadratisch}' },
      ],
      characterComment: 'examples.identify_type.mia_comment',
    },
    {
      titleKey: 'examples.game_mechanics.title',
      contextKey: 'examples.game_mechanics.context',
      steps: [
        { key: 'examples.game_mechanics.step1', formula: '\\text{Laufgeschwindigkeit: } v(t) = 5t + 10 \\quad \\text{(linear)}' },
        { key: 'examples.game_mechanics.step2', formula: '\\text{Fallschaden: } d(h) = 0{,}8 \\cdot h^2 \\quad \\text{(quadratisch)}' },
        { key: 'examples.game_mechanics.step3', formula: '\\text{XP-Bedarf: } xp(n) = 100 \\cdot 1{,}5^n \\quad \\text{(exponentiell)}' },
        { key: 'examples.game_mechanics.step4', formula: '\\text{Lernkurve: } s(t) = 20 \\cdot \\log_2(t + 1) \\quad \\text{(logarithmisch)}' },
      ],
      characterComment: 'examples.game_mechanics.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.app_users.title',
      descriptionKey: 'realworld.app_users.desc',
      icon: '📱',
      formula: 'N(t) = N_0 \\cdot e^{kt} \\quad \\text{(virales Wachstum)}',
    },
    {
      titleKey: 'realworld.salary.title',
      descriptionKey: 'realworld.salary.desc',
      icon: '💰',
      formula: 'G(j) = G_0 + r \\cdot j \\quad \\text{(linearer Anstieg)}',
    },
    {
      titleKey: 'realworld.learning_curve.title',
      descriptionKey: 'realworld.learning_curve.desc',
      icon: '🧠',
      formula: 'L(t) = L_{\\max} \\cdot (1 - e^{-kt}) \\quad \\text{(S\\\"attigungskurve)}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.exp_vs_quad.wrong',
      correctKey: 'mistakes.exp_vs_quad.correct',
      explanationKey: 'mistakes.exp_vs_quad.why',
      wrongFormula: '2^x \\approx x^2 \\quad \\text{f\\\"ur gro\\ss e } x',
      correctFormula: '2^{10} = 1024 \\gg 10^2 = 100',
      characterWarning: 'mistakes.exp_vs_quad.mia_warning',
    },
    {
      wrongKey: 'mistakes.all_curves_linear.wrong',
      correctKey: 'mistakes.all_curves_linear.correct',
      explanationKey: 'mistakes.all_curves_linear.why',
      wrongFormula: '\\text{Verdopplung} \\Rightarrow \\text{linear}',
      correctFormula: '\\text{Verdopplung in gleichen Zeitabst\\\"anden} \\Rightarrow \\text{exponentiell}',
    },
  ],

  prerequisites: ['10-quad-funktionen', '10-exp-wachstum'],

  connections: [
    {
      topicId: '10-quad-funktionen',
      relation: 'verwandt',
      why: 'Eine Funktionsklasse — die quadratische ist eine von vier Grundtypen',
      bubble: {
        character: 'euklid',
        text: 'Du hast schon Parabeln gesehen — hier siehst du, wo sie im Familienporträt aller Funktionen stehen. Linear, quadratisch, exponentiell, logarithmisch — vier Verwandte mit ganz unterschiedlichen Charakteren.',
      },
    },
    {
      topicId: '10-exp-wachstum',
      relation: 'verwandt',
      why: 'Exponentielles Wachstum ist ein Mitglied dieser Familie',
      bubble: {
        character: 'euklid',
        text: 'Exponentielles Wachstum überholt jede Polynomfunktion — auf lange Sicht. Vergleiche es selbst: bei x = 10 ist 2ˣ = 1024, x² nur 100.',
      },
    },
    {
      topicId: '11-ableitungsregeln',
      relation: 'fuehrt-zu',
      why: 'Jede Funktionsklasse hat eine charakteristische Ableitung',
      bubble: {
        character: 'euklid',
        text: 'In Klasse 11 wirst du sehen: Jede Funktionsklasse hat ihre eigene Ableitungsregel. Linear → konstant, quadratisch → linear, exponentiell → bleibt exponentiell. Die Form bleibt erhalten.',
      },
    },
  ],
};
