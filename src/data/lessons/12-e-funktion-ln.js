export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.advanced_e_properties',
    'objectives.ln_calculus',
    'objectives.composite_exp_functions',
    'objectives.differential_equations',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: '\\frac{\\mathrm{d}}{\\mathrm{d}x} e^{g(x)} = g\'(x) \\cdot e^{g(x)}' },
    { type: 'text', key: 'explanation.ln_derivative' },
    { type: 'formula', latex: '\\frac{\\mathrm{d}}{\\mathrm{d}x} \\ln(g(x)) = \\frac{g\'(x)}{g(x)}' },
    { type: 'callout', key: 'explanation.kai_tip', character: 'kai' },
    { type: 'text', key: 'explanation.integration' },
    { type: 'formula', latex: '\\int e^{ax}\\,\\mathrm{d}x = \\frac{1}{a} \\cdot e^{ax} + C' },
    { type: 'formula', latex: '\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C' },
    { type: 'text', key: 'explanation.decay_model' },
    { type: 'formula', latex: 'N(t) = N_0 \\cdot e^{-\\lambda t}, \\quad \\lambda = \\frac{\\ln(2)}{t_{1/2}}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.chain_rule_exp.title',
      descriptionKey: 'concepts.chain_rule_exp.desc',
      formula: '\\left(e^{g(x)}\\right)\' = g\'(x) \\cdot e^{g(x)}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.ln_derivative.title',
      descriptionKey: 'concepts.ln_derivative.desc',
      formula: '(\\ln(g(x)))\' = \\frac{g\'(x)}{g(x)}',
      highlight: 'green',
    },
    {
      titleKey: 'concepts.exp_integration.title',
      descriptionKey: 'concepts.exp_integration.desc',
      formula: '\\int \\frac{f\'(x)}{f(x)}\\,\\mathrm{d}x = \\ln|f(x)| + C',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.particle_decay.title',
      contextKey: 'examples.particle_decay.context',
      steps: [
        { key: 'examples.particle_decay.step1', formula: 'N(t) = 5000 \\cdot e^{-0{,}03t}' },
        { key: 'examples.particle_decay.step2', formula: 'N\'(t) = 5000 \\cdot (-0{,}03) \\cdot e^{-0{,}03t} = -150 \\cdot e^{-0{,}03t}' },
        { key: 'examples.particle_decay.step3', formula: 'N\'(0) = -150 \\;\\Rightarrow\\; \\text{150 Partikel/s Anfangsrate}' },
        { key: 'examples.particle_decay.step4', formula: 't_{1/2} = \\frac{\\ln(2)}{0{,}03} \\approx 23{,}1\\,\\text{s}' },
      ],
      characterComment: 'examples.particle_decay.kai_comment',
    },
    {
      titleKey: 'examples.ln_curve_analysis.title',
      contextKey: 'examples.ln_curve_analysis.context',
      steps: [
        { key: 'examples.ln_curve_analysis.step1', formula: 'f(x) = x^2 \\cdot e^{-x}' },
        { key: 'examples.ln_curve_analysis.step2', formula: 'f\'(x) = 2x \\cdot e^{-x} + x^2 \\cdot (-e^{-x}) = x(2 - x) \\cdot e^{-x}' },
        { key: 'examples.ln_curve_analysis.step3', formula: 'f\'(x) = 0 \\;\\Rightarrow\\; x = 0 \\;\\text{oder}\\; x = 2' },
        { key: 'examples.ln_curve_analysis.step4', formula: 'f(2) = 4 \\cdot e^{-2} \\approx 0{,}541 \\;\\Rightarrow\\; \\text{Maximum bei } (2 \\mid 0{,}541)' },
      ],
      characterComment: 'examples.ln_curve_analysis.kai_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.particle_systems.title',
      descriptionKey: 'realworld.particle_systems.desc',
      icon: '✨',
      formula: 'N(t) = N_0 \\cdot e^{-\\lambda t}',
    },
    {
      titleKey: 'realworld.signal_processing.title',
      descriptionKey: 'realworld.signal_processing.desc',
      icon: '📡',
      formula: 'S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)',
    },
    {
      titleKey: 'realworld.learning_curve.title',
      descriptionKey: 'realworld.learning_curve.desc',
      icon: '🧠',
      formula: 'L(t) = L_{\\max} \\cdot (1 - e^{-kt})',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.chain_rule_forgotten.wrong',
      correctKey: 'mistakes.chain_rule_forgotten.correct',
      explanationKey: 'mistakes.chain_rule_forgotten.why',
      wrongFormula: '\\left(e^{3x}\\right)\' = e^{3x}',
      correctFormula: '\\left(e^{3x}\\right)\' = 3 \\cdot e^{3x}',
      characterWarning: 'mistakes.chain_rule_forgotten.kai_warning',
    },
    {
      wrongKey: 'mistakes.ln_negative.wrong',
      correctKey: 'mistakes.ln_negative.correct',
      explanationKey: 'mistakes.ln_negative.why',
      wrongFormula: '\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C',
      correctFormula: '\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C',
    },
  ],

  prerequisites: ['11-exp-log'],
};
