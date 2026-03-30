export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.multiply_powers',
    'objectives.power_of_power',
    'objectives.negative_exponents',
    'objectives.apply_memory',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'a^m \\cdot a^n = a^{m+n}' },
    { type: 'text', key: 'explanation.power_of_power' },
    { type: 'formula', latex: '(a^m)^n = a^{m \\cdot n}' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.negative' },
    { type: 'formula', latex: 'a^{-n} = \\frac{1}{a^n}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.product_rule.title',
      descriptionKey: 'concepts.product_rule.desc',
      formula: 'a^m \\cdot a^n = a^{m+n}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.power_rule.title',
      descriptionKey: 'concepts.power_rule.desc',
      formula: '(a^m)^n = a^{m \\cdot n}',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.negative_exp.title',
      descriptionKey: 'concepts.negative_exp.desc',
      formula: 'a^{-n} = \\frac{1}{a^n}',
      highlight: 'cyan',
    },
  ],

  examples: [
    {
      titleKey: 'examples.simplify.title',
      contextKey: 'examples.simplify.context',
      steps: [
        { key: 'examples.simplify.step1', formula: '2^3 \\cdot 2^4 = 2^{3+4}' },
        { key: 'examples.simplify.step2', formula: '2^7 = 128' },
        { key: 'examples.simplify.step3', formula: '128\\,\\text{Byte} = 1\\,\\text{KB} \\text{ (nah dran)}' },
      ],
      characterComment: 'examples.simplify.mia_comment',
    },
    {
      titleKey: 'examples.negative.title',
      contextKey: 'examples.negative.context',
      steps: [
        { key: 'examples.negative.step1', formula: '10^{-3} = \\frac{1}{10^3}' },
        { key: 'examples.negative.step2', formula: '= \\frac{1}{1000} = 0{,}001' },
        { key: 'examples.negative.step3', formula: '1\\,\\text{ms} = 10^{-3}\\,\\text{s}' },
      ],
      characterComment: 'examples.negative.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.storage.title',
      descriptionKey: 'realworld.storage.desc',
      icon: '💾',
      formula: '1\\,\\text{TB} = 2^{40}\\,\\text{Byte} = 1.099.511.627.776',
    },
    {
      titleKey: 'realworld.richter.title',
      descriptionKey: 'realworld.richter.desc',
      icon: '🌍',
    },
    {
      titleKey: 'realworld.decibel.title',
      descriptionKey: 'realworld.decibel.desc',
      icon: '🔊',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.add_bases.wrong',
      correctKey: 'mistakes.add_bases.correct',
      explanationKey: 'mistakes.add_bases.why',
      wrongFormula: '2^3 \\cdot 3^2 = 6^5',
      correctFormula: '2^3 \\cdot 3^2 = 8 \\cdot 9 = 72',
      characterWarning: 'mistakes.add_bases.mia_warning',
    },
    {
      wrongKey: 'mistakes.zero_exp.wrong',
      correctKey: 'mistakes.zero_exp.correct',
      explanationKey: 'mistakes.zero_exp.why',
      wrongFormula: 'a^0 = 0',
      correctFormula: 'a^0 = 1 \\quad (a \\neq 0)',
    },
  ],

  prerequisites: [],
};
