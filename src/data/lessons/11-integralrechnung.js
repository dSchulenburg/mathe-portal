export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.antiderivative',
    'objectives.definite_integral',
    'objectives.fundamental_theorem',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'F\'(x) = f(x) \\quad \\Rightarrow \\quad F(x) = \\int f(x)\\,\\mathrm{d}x' },
    { type: 'text', key: 'explanation.power_rule_integral' },
    { type: 'formula', latex: '\\int x^n\\,\\mathrm{d}x = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.definite_integral' },
    { type: 'formula', latex: '\\int_a^b f(x)\\,\\mathrm{d}x = F(b) - F(a)' },
    { type: 'text', key: 'explanation.area_interpretation' },
    { type: 'formula', latex: 'A = \\int_a^b |f(x)|\\,\\mathrm{d}x' },
  ],

  concepts: [
    {
      titleKey: 'concepts.antiderivative.title',
      descriptionKey: 'concepts.antiderivative.desc',
      formula: 'F\'(x) = f(x), \\quad \\int f(x)\\,\\mathrm{d}x = F(x) + C',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.definite_integral.title',
      descriptionKey: 'concepts.definite_integral.desc',
      formula: '\\int_a^b f(x)\\,\\mathrm{d}x = F(b) - F(a)',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.fundamental_theorem.title',
      descriptionKey: 'concepts.fundamental_theorem.desc',
      formula: '\\frac{\\mathrm{d}}{\\mathrm{d}x} \\int_a^x f(t)\\,\\mathrm{d}t = f(x)',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.area_calculation.title',
      contextKey: 'examples.area_calculation.context',
      steps: [
        { key: 'examples.area_calculation.step1', formula: 'f(x) = x^2 - 4, \\quad \\text{Nullstellen: } x = \\pm 2' },
        { key: 'examples.area_calculation.step2', formula: 'F(x) = \\frac{x^3}{3} - 4x' },
        { key: 'examples.area_calculation.step3', formula: '\\int_{-2}^{2} (x^2 - 4)\\,\\mathrm{d}x = F(2) - F(-2) = \\left(\\frac{8}{3} - 8\\right) - \\left(-\\frac{8}{3} + 8\\right) = -\\frac{32}{3}' },
        { key: 'examples.area_calculation.step4', formula: 'A = \\left|{-\\frac{32}{3}}\\right| = \\frac{32}{3} \\approx 10{,}67\\,\\text{FE}' },
      ],
      characterComment: 'examples.area_calculation.amir_comment',
    },
    {
      titleKey: 'examples.distance_from_velocity.title',
      contextKey: 'examples.distance_from_velocity.context',
      steps: [
        { key: 'examples.distance_from_velocity.step1', formula: 'v(t) = 3t^2 + 2 \\quad \\left[\\frac{\\text{m}}{\\text{s}}\\right]' },
        { key: 'examples.distance_from_velocity.step2', formula: 's = \\int_0^4 (3t^2 + 2)\\,\\mathrm{d}t' },
        { key: 'examples.distance_from_velocity.step3', formula: 'F(t) = t^3 + 2t' },
        { key: 'examples.distance_from_velocity.step4', formula: 's = F(4) - F(0) = (64 + 8) - 0 = 72\\,\\text{m}' },
      ],
      characterComment: 'examples.distance_from_velocity.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.data_aggregation.title',
      descriptionKey: 'realworld.data_aggregation.desc',
      icon: '📡',
      formula: '\\text{Gesamt} = \\int_0^T r(t)\\,\\mathrm{d}t',
    },
    {
      titleKey: 'realworld.energy_consumption.title',
      descriptionKey: 'realworld.energy_consumption.desc',
      icon: '⚡',
      formula: 'E = \\int_0^T P(t)\\,\\mathrm{d}t',
    },
    {
      titleKey: 'realworld.probability.title',
      descriptionKey: 'realworld.probability.desc',
      icon: '🎲',
      formula: 'P(a \\leq X \\leq b) = \\int_a^b f(x)\\,\\mathrm{d}x',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.constant_forgotten.wrong',
      correctKey: 'mistakes.constant_forgotten.correct',
      explanationKey: 'mistakes.constant_forgotten.why',
      wrongFormula: '\\int 2x\\,\\mathrm{d}x = x^2',
      correctFormula: '\\int 2x\\,\\mathrm{d}x = x^2 + C',
      characterWarning: 'mistakes.constant_forgotten.amir_warning',
    },
    {
      wrongKey: 'mistakes.negative_area.wrong',
      correctKey: 'mistakes.negative_area.correct',
      explanationKey: 'mistakes.negative_area.why',
      wrongFormula: 'A = \\int_a^b f(x)\\,\\mathrm{d}x \\quad \\text{(auch wenn } f < 0\\text{)}',
      correctFormula: 'A = \\int_a^b |f(x)|\\,\\mathrm{d}x',
      characterWarning: 'mistakes.negative_area.amir_warning',
    },
  ],

  prerequisites: ['11-ableitungsregeln'],
};
