export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.exponential_functions',
    'objectives.growth_factor',
    'objectives.half_life',
    'objectives.model_real_world',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'f(t) = a \\cdot b^t' },
    { type: 'text', key: 'explanation.growth_factor' },
    { type: 'formula', latex: 'b = 1 + \\frac{p}{100} \\quad \\text{(Wachstum: } b > 1\\text{)}' },
    { type: 'formula', latex: 'b = 1 - \\frac{p}{100} \\quad \\text{(Zerfall: } 0 < b < 1\\text{)}' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.half_life' },
    { type: 'formula', latex: 't_H = \\frac{\\ln(0{,}5)}{\\ln(b)}' },
    { type: 'text', key: 'explanation.doubling_time' },
    { type: 'formula', latex: 't_V = \\frac{\\ln(2)}{\\ln(b)}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.exponential_function.title',
      descriptionKey: 'concepts.exponential_function.desc',
      formula: 'f(t) = a \\cdot b^t',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.growth_factor.title',
      descriptionKey: 'concepts.growth_factor.desc',
      formula: 'b = 1 + \\frac{p}{100}',
      highlight: 'green',
    },
    {
      titleKey: 'concepts.half_life.title',
      descriptionKey: 'concepts.half_life.desc',
      formula: 'N(t) = N_0 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{t_H}}',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.euler_base.title',
      descriptionKey: 'concepts.euler_base.desc',
      formula: 'f(t) = a \\cdot e^{k \\cdot t}',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.bacteria.title',
      contextKey: 'examples.bacteria.context',
      steps: [
        { key: 'examples.bacteria.step1', formula: 'N_0 = 500, \\quad b = 2 \\quad \\text{(Verdopplung)}' },
        { key: 'examples.bacteria.step2', formula: 'N(t) = 500 \\cdot 2^t' },
        { key: 'examples.bacteria.step3', formula: 'N(5) = 500 \\cdot 2^5 = 500 \\cdot 32' },
        { key: 'examples.bacteria.step4', formula: 'N(5) = 16\\,000' },
      ],
      characterComment: 'examples.bacteria.mia_comment',
    },
    {
      titleKey: 'examples.radioactive.title',
      contextKey: 'examples.radioactive.context',
      steps: [
        { key: 'examples.radioactive.step1', formula: 'N_0 = 200\\,\\text{g}, \\quad t_H = 8\\,\\text{Tage}' },
        { key: 'examples.radioactive.step2', formula: 'N(t) = 200 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{8}}' },
        { key: 'examples.radioactive.step3', formula: 'N(24) = 200 \\cdot \\left(\\frac{1}{2}\\right)^{3} = 200 \\cdot \\frac{1}{8}' },
        { key: 'examples.radioactive.step4', formula: 'N(24) = 25\\,\\text{g}' },
      ],
      characterComment: 'examples.radioactive.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.tiktok.title',
      descriptionKey: 'realworld.tiktok.desc',
      icon: '📱',
      formula: 'V(t) = V_0 \\cdot 1{,}8^t',
    },
    {
      titleKey: 'realworld.battery.title',
      descriptionKey: 'realworld.battery.desc',
      icon: '🔋',
      formula: 'B(t) = 100 \\cdot 0{,}95^t',
    },
    {
      titleKey: 'realworld.pandemic.title',
      descriptionKey: 'realworld.pandemic.desc',
      icon: '🦠',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.linear_vs_exp.wrong',
      correctKey: 'mistakes.linear_vs_exp.correct',
      explanationKey: 'mistakes.linear_vs_exp.why',
      wrongFormula: 'f(t) = 100 + 5t \\quad \\text{(linear!)}',
      correctFormula: 'f(t) = 100 \\cdot 1{,}05^t \\quad \\text{(exponentiell)}',
      characterWarning: 'mistakes.linear_vs_exp.mia_warning',
    },
    {
      wrongKey: 'mistakes.wrong_growth_factor.wrong',
      correctKey: 'mistakes.wrong_growth_factor.correct',
      explanationKey: 'mistakes.wrong_growth_factor.why',
      wrongFormula: '3\\%\\text{ Wachstum} \\Rightarrow b = 3',
      correctFormula: '3\\%\\text{ Wachstum} \\Rightarrow b = 1{,}03',
    },
  ],

  prerequisites: [],
};
