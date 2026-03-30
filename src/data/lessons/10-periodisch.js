export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.periodic_functions',
    'objectives.amplitude_period',
    'objectives.frequency',
    'objectives.modeling',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'f(x) = A \\cdot \\sin(b \\cdot x + c) + d' },
    { type: 'text', key: 'explanation.parameters' },
    { type: 'formula', latex: 'A = \\text{Amplitude}, \\quad T = \\frac{2\\pi}{b}, \\quad f = \\frac{1}{T}' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.graph_reading' },
    { type: 'formula', latex: 'f(x + T) = f(x) \\quad \\text{f\\\"ur alle } x' },
    { type: 'text', key: 'explanation.applications' },
  ],

  concepts: [
    {
      titleKey: 'concepts.amplitude.title',
      descriptionKey: 'concepts.amplitude.desc',
      formula: 'A = \\frac{y_{\\max} - y_{\\min}}{2}',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.period.title',
      descriptionKey: 'concepts.period.desc',
      formula: 'T = \\frac{2\\pi}{b}',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.frequency.title',
      descriptionKey: 'concepts.frequency.desc',
      formula: 'f = \\frac{1}{T} = \\frac{b}{2\\pi}',
      highlight: 'amber',
    },
  ],

  examples: [
    {
      titleKey: 'examples.graph_reading.title',
      contextKey: 'examples.graph_reading.context',
      steps: [
        { key: 'examples.graph_reading.step1', formula: 'y_{\\max} = 3, \\quad y_{\\min} = -3 \\quad \\Rightarrow \\quad A = 3' },
        { key: 'examples.graph_reading.step2', formula: 'T = 4\\pi \\quad \\Rightarrow \\quad b = \\frac{2\\pi}{T} = \\frac{2\\pi}{4\\pi} = 0{,}5' },
        { key: 'examples.graph_reading.step3', formula: 'f(x) = 3 \\cdot \\sin(0{,}5 \\cdot x)' },
      ],
      characterComment: 'examples.graph_reading.mia_comment',
    },
    {
      titleKey: 'examples.ferris_wheel.title',
      contextKey: 'examples.ferris_wheel.context',
      steps: [
        { key: 'examples.ferris_wheel.step1', formula: 'A = \\frac{60\\,\\text{m}}{2} = 30\\,\\text{m}, \\quad d = 35\\,\\text{m}' },
        { key: 'examples.ferris_wheel.step2', formula: 'T = 10\\,\\text{min} \\quad \\Rightarrow \\quad b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}' },
        { key: 'examples.ferris_wheel.step3', formula: 'h(t) = 30 \\cdot \\sin\\!\\left(\\frac{\\pi}{5} \\cdot t - \\frac{\\pi}{2}\\right) + 35' },
        { key: 'examples.ferris_wheel.step4', formula: 'h(2{,}5) = 30 \\cdot \\sin(0) + 35 = 35\\,\\text{m}' },
      ],
      characterComment: 'examples.ferris_wheel.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.heartbeat.title',
      descriptionKey: 'realworld.heartbeat.desc',
      icon: '💓',
      formula: 'f \\approx 1{,}2\\,\\text{Hz} \\quad (72\\,\\text{bpm})',
    },
    {
      titleKey: 'realworld.tides.title',
      descriptionKey: 'realworld.tides.desc',
      icon: '🌊',
      formula: 'T \\approx 12{,}4\\,\\text{h}',
    },
    {
      titleKey: 'realworld.temperature.title',
      descriptionKey: 'realworld.temperature.desc',
      icon: '🌡️',
      formula: 'T(t) = A \\cdot \\sin\\!\\left(\\frac{2\\pi}{365} \\cdot t + c\\right) + d',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.period_frequency.wrong',
      correctKey: 'mistakes.period_frequency.correct',
      explanationKey: 'mistakes.period_frequency.why',
      wrongFormula: 'T = 2\\,\\text{s} \\quad \\Rightarrow \\quad f = 2\\,\\text{Hz}',
      correctFormula: 'T = 2\\,\\text{s} \\quad \\Rightarrow \\quad f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}',
      characterWarning: 'mistakes.period_frequency.mia_warning',
    },
    {
      wrongKey: 'mistakes.b_value.wrong',
      correctKey: 'mistakes.b_value.correct',
      explanationKey: 'mistakes.b_value.why',
      wrongFormula: 'T = 4\\pi \\quad \\Rightarrow \\quad b = 4\\pi',
      correctFormula: 'T = 4\\pi \\quad \\Rightarrow \\quad b = \\frac{2\\pi}{4\\pi} = 0{,}5',
    },
  ],

  prerequisites: ['10-trigonometrie'],
};
