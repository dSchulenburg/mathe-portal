export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.bernoulli',
    'objectives.binomial_formula',
    'objectives.expected_value',
    'objectives.standard_deviation',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}' },
    { type: 'text', key: 'explanation.bernoulli' },
    { type: 'formula', latex: '\\binom{n}{k} = \\frac{n!}{k! \\cdot (n-k)!}' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.expected_value' },
    { type: 'formula', latex: 'E(X) = n \\cdot p' },
    { type: 'text', key: 'explanation.standard_deviation' },
    { type: 'formula', latex: '\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.bernoulli.title',
      descriptionKey: 'concepts.bernoulli.desc',
      formula: 'P(\\text{Erfolg}) = p, \\quad P(\\text{Misserfolg}) = 1 - p',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.binomial_formula.title',
      descriptionKey: 'concepts.binomial_formula.desc',
      formula: 'P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}',
      highlight: 'green',
    },
    {
      titleKey: 'concepts.expected_value.title',
      descriptionKey: 'concepts.expected_value.desc',
      formula: 'E(X) = n \\cdot p, \\quad \\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.coin_flips.title',
      contextKey: 'examples.coin_flips.context',
      steps: [
        { key: 'examples.coin_flips.step1', formula: 'n = 10, \\quad p = 0{,}5, \\quad k = 7' },
        { key: 'examples.coin_flips.step2', formula: '\\binom{10}{7} = \\frac{10!}{7! \\cdot 3!} = 120' },
        { key: 'examples.coin_flips.step3', formula: 'P(X = 7) = 120 \\cdot 0{,}5^7 \\cdot 0{,}5^3' },
        { key: 'examples.coin_flips.step4', formula: 'P(X = 7) = 120 \\cdot 0{,}5^{10} \\approx 0{,}117' },
      ],
      characterComment: 'examples.coin_flips.amir_comment',
    },
    {
      titleKey: 'examples.quality_control.title',
      contextKey: 'examples.quality_control.context',
      steps: [
        { key: 'examples.quality_control.step1', formula: 'n = 20, \\quad p = 0{,}02, \\quad k = 0' },
        { key: 'examples.quality_control.step2', formula: 'P(X = 0) = \\binom{20}{0} \\cdot 0{,}02^0 \\cdot 0{,}98^{20}' },
        { key: 'examples.quality_control.step3', formula: 'P(X = 0) = 1 \\cdot 1 \\cdot 0{,}98^{20}' },
        { key: 'examples.quality_control.step4', formula: 'P(X = 0) \\approx 0{,}668 \\approx 66{,}8\\%' },
      ],
      characterComment: 'examples.quality_control.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.ab_testing.title',
      descriptionKey: 'realworld.ab_testing.desc',
      icon: '🧪',
      formula: 'P(X \\geq k) = 1 - P(X < k)',
    },
    {
      titleKey: 'realworld.medicine.title',
      descriptionKey: 'realworld.medicine.desc',
      icon: '💊',
    },
    {
      titleKey: 'realworld.surveys.title',
      descriptionKey: 'realworld.surveys.desc',
      icon: '📊',
      formula: '\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.forget_binomial_coeff.wrong',
      correctKey: 'mistakes.forget_binomial_coeff.correct',
      explanationKey: 'mistakes.forget_binomial_coeff.why',
      wrongFormula: 'P(X = k) = p^k \\cdot (1-p)^{n-k}',
      correctFormula: 'P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}',
      characterWarning: 'mistakes.forget_binomial_coeff.amir_warning',
    },
    {
      wrongKey: 'mistakes.variance_vs_sigma.wrong',
      correctKey: 'mistakes.variance_vs_sigma.correct',
      explanationKey: 'mistakes.variance_vs_sigma.why',
      wrongFormula: '\\sigma = n \\cdot p \\cdot (1-p)',
      correctFormula: '\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}',
    },
  ],

  prerequisites: ['10-wahrscheinlichkeit'],
};
