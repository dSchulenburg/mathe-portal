export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.integration_techniques',
    'objectives.rotation_volumes',
    'objectives.improper_integrals',
    'objectives.partial_integration',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: '\\int u \\cdot v\'\\,\\mathrm{d}x = u \\cdot v - \\int u\' \\cdot v\\,\\mathrm{d}x' },
    { type: 'text', key: 'explanation.substitution' },
    { type: 'formula', latex: '\\int f(g(x)) \\cdot g\'(x)\\,\\mathrm{d}x = F(g(x)) + C' },
    { type: 'callout', key: 'explanation.kai_tip', character: 'kai' },
    { type: 'text', key: 'explanation.rotation_volume' },
    { type: 'formula', latex: 'V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x' },
    { type: 'text', key: 'explanation.improper' },
    { type: 'formula', latex: '\\int_1^{\\infty} \\frac{1}{x^2}\\,\\mathrm{d}x = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^b = 1' },
  ],

  concepts: [
    {
      titleKey: 'concepts.partial_integration.title',
      descriptionKey: 'concepts.partial_integration.desc',
      formula: '\\int u\\,\\mathrm{d}v = u \\cdot v - \\int v\\,\\mathrm{d}u',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.rotation_volume.title',
      descriptionKey: 'concepts.rotation_volume.desc',
      formula: 'V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.improper_integral.title',
      descriptionKey: 'concepts.improper_integral.desc',
      formula: '\\int_a^{\\infty} f(x)\\,\\mathrm{d}x = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,\\mathrm{d}x',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.level_geometry.title',
      contextKey: 'examples.level_geometry.context',
      steps: [
        { key: 'examples.level_geometry.step1', formula: 'f(x) = \\sqrt{x}, \\quad x \\in [0;\\, 4]' },
        { key: 'examples.level_geometry.step2', formula: 'V = \\pi \\int_0^4 (\\sqrt{x})^2\\,\\mathrm{d}x = \\pi \\int_0^4 x\\,\\mathrm{d}x' },
        { key: 'examples.level_geometry.step3', formula: 'V = \\pi \\left[\\frac{x^2}{2}\\right]_0^4 = \\pi \\cdot \\frac{16}{2}' },
        { key: 'examples.level_geometry.step4', formula: 'V = 8\\pi \\approx 25{,}13\\,\\text{VE}' },
      ],
      characterComment: 'examples.level_geometry.kai_comment',
    },
    {
      titleKey: 'examples.partial_int.title',
      contextKey: 'examples.partial_int.context',
      steps: [
        { key: 'examples.partial_int.step1', formula: '\\int x \\cdot e^x\\,\\mathrm{d}x, \\quad u = x,\\; v\' = e^x' },
        { key: 'examples.partial_int.step2', formula: 'u\' = 1, \\quad v = e^x' },
        { key: 'examples.partial_int.step3', formula: '= x \\cdot e^x - \\int 1 \\cdot e^x\\,\\mathrm{d}x' },
        { key: 'examples.partial_int.step4', formula: '= x \\cdot e^x - e^x + C = e^x(x - 1) + C' },
      ],
      characterComment: 'examples.partial_int.kai_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.3d_printing.title',
      descriptionKey: 'realworld.3d_printing.desc',
      icon: '🖨️',
      formula: 'V = \\pi \\int_a^b [r(h)]^2\\,\\mathrm{d}h',
    },
    {
      titleKey: 'realworld.render_falloff.title',
      descriptionKey: 'realworld.render_falloff.desc',
      icon: '💡',
      formula: '\\int_0^{\\infty} I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}',
    },
    {
      titleKey: 'realworld.terrain_volume.title',
      descriptionKey: 'realworld.terrain_volume.desc',
      icon: '🏔️',
      formula: 'V = \\iint_R h(x,y)\\,\\mathrm{d}A',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.rotation_no_square.wrong',
      correctKey: 'mistakes.rotation_no_square.correct',
      explanationKey: 'mistakes.rotation_no_square.why',
      wrongFormula: 'V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x',
      correctFormula: 'V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x',
      characterWarning: 'mistakes.rotation_no_square.kai_warning',
    },
    {
      wrongKey: 'mistakes.improper_no_limit.wrong',
      correctKey: 'mistakes.improper_no_limit.correct',
      explanationKey: 'mistakes.improper_no_limit.why',
      wrongFormula: '\\int_1^{\\infty} \\frac{1}{x}\\,\\mathrm{d}x = \\ln(\\infty) = \\infty \\;\\checkmark',
      correctFormula: '\\int_1^{\\infty} \\frac{1}{x}\\,\\mathrm{d}x \\to \\infty \\;\\Rightarrow\\; \\text{divergent!}',
    },
  ],

  prerequisites: ['11-integralrechnung'],
};
