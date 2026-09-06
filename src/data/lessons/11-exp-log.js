export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.e_function',
    'objectives.natural_log',
    'objectives.log_rules',
    'objectives.solve_exp_equations',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'f(x) = e^x \\quad \\text{mit } e \\approx 2{,}718' },
    { type: 'text', key: 'explanation.natural_log' },
    { type: 'formula', latex: '\\ln(e^x) = x \\quad \\text{und} \\quad e^{\\ln(x)} = x' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.log_rules' },
    { type: 'formula', latex: '\\ln(a \\cdot b) = \\ln(a) + \\ln(b)' },
    { type: 'formula', latex: '\\ln\\!\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)' },
    { type: 'formula', latex: '\\ln(a^r) = r \\cdot \\ln(a)' },
    { type: 'text', key: 'explanation.solving' },
    { type: 'formula', latex: 'e^{kx} = c \\;\\Longleftrightarrow\\; x = \\frac{\\ln(c)}{k}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.e_function.title',
      descriptionKey: 'concepts.e_function.desc',
      formula: 'f(x) = a \\cdot e^{k \\cdot x}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.natural_log.title',
      descriptionKey: 'concepts.natural_log.desc',
      formula: 'y = \\ln(x) \\;\\Leftrightarrow\\; x = e^y',
      highlight: 'green',
    },
    {
      titleKey: 'concepts.log_rules.title',
      descriptionKey: 'concepts.log_rules.desc',
      formula: '\\ln(a^r) = r \\cdot \\ln(a)',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.solve_exp.title',
      contextKey: 'examples.solve_exp.context',
      steps: [
        { key: 'examples.solve_exp.step1', formula: '3 \\cdot e^{2x} = 15' },
        { key: 'examples.solve_exp.step2', formula: 'e^{2x} = 5' },
        { key: 'examples.solve_exp.step3', formula: '2x = \\ln(5)' },
        { key: 'examples.solve_exp.step4', formula: 'x = \\frac{\\ln(5)}{2} \\approx 0{,}805' },
      ],
      characterComment: 'examples.solve_exp.amir_comment',
    },
    {
      titleKey: 'examples.half_life.title',
      contextKey: 'examples.half_life.context',
      steps: [
        { key: 'examples.half_life.step1', formula: 'N(t) = 1000 \\cdot e^{-0{,}1t}' },
        { key: 'examples.half_life.step2', formula: '500 = 1000 \\cdot e^{-0{,}1t}' },
        { key: 'examples.half_life.step3', formula: 'e^{-0{,}1t} = 0{,}5 \\;\\Rightarrow\\; -0{,}1t = \\ln(0{,}5)' },
        { key: 'examples.half_life.step4', formula: 't = \\frac{\\ln(0{,}5)}{-0{,}1} \\approx 6{,}93' },
      ],
      characterComment: 'examples.half_life.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.user_retention.title',
      descriptionKey: 'realworld.user_retention.desc',
      icon: '📉',
      formula: 'R(t) = R_0 \\cdot e^{-\\lambda t}',
    },
    {
      titleKey: 'realworld.compound_interest.title',
      descriptionKey: 'realworld.compound_interest.desc',
      icon: '🏦',
      formula: 'K(t) = K_0 \\cdot e^{rt}',
    },
    {
      titleKey: 'realworld.decibel.title',
      descriptionKey: 'realworld.decibel.desc',
      icon: '🔊',
      formula: 'L = 10 \\cdot \\log_{10}\\!\\left(\\frac{I}{I_0}\\right)',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.ln_sum.wrong',
      correctKey: 'mistakes.ln_sum.correct',
      explanationKey: 'mistakes.ln_sum.why',
      wrongFormula: '\\ln(a + b) = \\ln(a) + \\ln(b)',
      correctFormula: '\\ln(a \\cdot b) = \\ln(a) + \\ln(b)',
      characterWarning: 'mistakes.ln_sum.amir_warning',
    },
    {
      wrongKey: 'mistakes.ln_cancel.wrong',
      correctKey: 'mistakes.ln_cancel.correct',
      explanationKey: 'mistakes.ln_cancel.why',
      wrongFormula: '\\ln(e^x) = e \\cdot x',
      correctFormula: '\\ln(e^x) = x',
    },
  ],

  prerequisites: ['10-exp-wachstum'],
  connections: [
    {
      topicId: '10-potenzgesetze',
      relation: 'baut-auf',
      why: 'Jedes Logarithmusgesetz ist ein Potenzgesetz, von der anderen Seite gelesen',
      bubble: {
        character: 'euklid',
        text: '$\\log_a(x \\cdot y) = \\log_a x + \\log_a y$ musst du nicht auswendig lernen, wenn du $a^{m+n} = a^m \\cdot a^n$ kannst. Der Logarithmus ist die Umkehrfunktion, also dreht er jede Regel um: Mal wird Plus, Potenz wird Mal.',
      },
    },
    {
      topicId: '10-exp-wachstum',
      relation: 'baut-auf',
      why: 'Der Logarithmus beantwortet die Frage, die beim Wachstum offen blieb',
      bubble: {
        character: 'euklid',
        text: 'In der 10 konntest du ausrechnen, wie viel nach $n$ Schritten da ist. Die Umkehrfrage «nach wie vielen Schritten ist es doppelt so viel» blieb offen. Der Logarithmus ist genau die Antwort darauf.',
      },
    },
    {
      topicId: '12-e-funktion-ln',
      relation: 'fuehrt-zu',
      why: 'ln ist der Logarithmus zur Basis e, nichts anderes',
      bubble: {
        character: 'euklid',
        text: '$\\ln x = \\log_e x$. Kein neues Konzept, nur eine besonders praktische Basis — praktisch, weil $e^x$ die einzige Funktion ist, die ihre eigene Ableitung ist. Alle Regeln, die du hier lernst, gelten dort unverändert.',
      },
    },
    {
      topicId: '11-ableitungsregeln',
      relation: 'verwandt',
      why: 'Die Basiswechselformel macht jede Exponentialfunktion ableitbar',
      bubble: {
        character: 'euklid',
        text: '$a^x = e^{x \\ln a}$ sieht nach Spielerei aus, ist aber der Trick, mit dem $\\frac{d}{dx} a^x = a^x \\ln a$ überhaupt zustande kommt. Ohne Basiswechsel wäre jede Basis ein eigener Sonderfall.',
      },
    },
  ],
};
