export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.solve',
    'objectives.pq_formula',
    'objectives.completing_square',
    'objectives.factoring',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'ax^2 + bx + c = 0' },
    { type: 'text', key: 'explanation.normal_form' },
    { type: 'formula', latex: 'x^2 + px + q = 0' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.pq_formula' },
    { type: 'formula', latex: 'x_{1,2} = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}' },
    { type: 'text', key: 'explanation.completing_square' },
    { type: 'text', key: 'explanation.factoring' },
    { type: 'formula', latex: '(x - x_1)(x - x_2) = 0' },
  ],

  concepts: [
    {
      titleKey: 'concepts.pq_formula.title',
      descriptionKey: 'concepts.pq_formula.desc',
      formula: 'x_{1,2} = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.completing_square.title',
      descriptionKey: 'concepts.completing_square.desc',
      formula: 'x^2 + px = \\left(x + \\frac{p}{2}\\right)^2 - \\left(\\frac{p}{2}\\right)^2',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.discriminant.title',
      descriptionKey: 'concepts.discriminant.desc',
      formula: 'D = \\left(\\frac{p}{2}\\right)^2 - q',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.factoring.title',
      descriptionKey: 'concepts.factoring.desc',
      formula: 'x^2 + px + q = (x - x_1)(x - x_2)',
      highlight: 'amber',
    },
  ],

  examples: [
    {
      titleKey: 'examples.pq_application.title',
      contextKey: 'examples.pq_application.context',
      steps: [
        { key: 'examples.pq_application.step1', formula: 'x^2 - 4x + 3 = 0' },
        { key: 'examples.pq_application.step2', formula: 'p = -4, \\quad q = 3' },
        { key: 'examples.pq_application.step3', formula: 'x_{1,2} = 2 \\pm \\sqrt{4 - 3} = 2 \\pm 1' },
        { key: 'examples.pq_application.step4', formula: 'x_1 = 3, \\quad x_2 = 1' },
      ],
      characterComment: 'examples.pq_application.mia_comment',
    },
    {
      titleKey: 'examples.completing_square.title',
      contextKey: 'examples.completing_square.context',
      steps: [
        { key: 'examples.completing_square.step1', formula: 'x^2 + 6x + 5 = 0' },
        { key: 'examples.completing_square.step2', formula: 'x^2 + 6x = -5' },
        { key: 'examples.completing_square.step3', formula: '(x + 3)^2 - 9 = -5' },
        { key: 'examples.completing_square.step4', formula: '(x + 3)^2 = 4 \\Rightarrow x = -3 \\pm 2' },
        { key: 'examples.completing_square.step5', formula: 'x_1 = -1, \\quad x_2 = -5' },
      ],
      characterComment: 'examples.completing_square.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.angry_birds.title',
      descriptionKey: 'realworld.angry_birds.desc',
      icon: '🐦',
      formula: 'h(t) = -4{,}9t^2 + v_0 \\cdot t + h_0 = 0',
    },
    {
      titleKey: 'realworld.breakeven.title',
      descriptionKey: 'realworld.breakeven.desc',
      icon: '📊',
      formula: 'G(x) = -0{,}5x^2 + 20x - 150 = 0',
    },
    {
      titleKey: 'realworld.rocket.title',
      descriptionKey: 'realworld.rocket.desc',
      icon: '🚀',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.not_zero.wrong',
      correctKey: 'mistakes.not_zero.correct',
      explanationKey: 'mistakes.not_zero.why',
      wrongFormula: 'x^2 + 3x = 5 \\Rightarrow p=3, q=5',
      correctFormula: 'x^2 + 3x - 5 = 0 \\Rightarrow p=3, q=-5',
      characterWarning: 'mistakes.not_zero.mia_warning',
    },
    {
      wrongKey: 'mistakes.sign_pq.wrong',
      correctKey: 'mistakes.sign_pq.correct',
      explanationKey: 'mistakes.sign_pq.why',
      wrongFormula: 'x^2 - 6x + 8 = 0 \\Rightarrow x_{1,2} = -3 \\pm \\sqrt{9 - 8}',
      correctFormula: 'x^2 - 6x + 8 = 0 \\Rightarrow x_{1,2} = 3 \\pm \\sqrt{9 - 8}',
    },
  ],

  prerequisites: ['10-quad-funktionen'],
};
