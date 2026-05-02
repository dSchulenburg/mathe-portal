export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.bell_curve',
    'objectives.sigma_rules',
    'objectives.z_transformation',
    'objectives.central_limit_theorem',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\cdot e^{-\\frac{1}{2}\\left(\\frac{x - \\mu}{\\sigma}\\right)^2}' },
    { type: 'text', key: 'explanation.sigma_rules' },
    { type: 'formula', latex: 'P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%' },
    { type: 'formula', latex: 'P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%' },
    { type: 'formula', latex: 'P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%' },
    { type: 'callout', key: 'explanation.kai_tip', character: 'kai' },
    { type: 'text', key: 'explanation.z_transformation' },
    { type: 'formula', latex: 'z = \\frac{x - \\mu}{\\sigma}, \\quad P(X \\leq x) = \\Phi(z)' },
    { type: 'text', key: 'explanation.central_limit' },
    { type: 'formula', latex: '\\bar{X}_n \\xrightarrow{d} N\\!\\left(\\mu,\\, \\frac{\\sigma^2}{n}\\right) \\quad \\text{für } n \\to \\infty' },
  ],

  concepts: [
    {
      titleKey: 'concepts.normal_distribution.title',
      descriptionKey: 'concepts.normal_distribution.desc',
      formula: 'X \\sim N(\\mu,\\, \\sigma^2)',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.sigma_rules.title',
      descriptionKey: 'concepts.sigma_rules.desc',
      formula: '68{,}3\\% \\;-\\; 95{,}4\\% \\;-\\; 99{,}7\\%',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.z_transformation.title',
      descriptionKey: 'concepts.z_transformation.desc',
      formula: 'z = \\frac{x - \\mu}{\\sigma} \\;\\Rightarrow\\; Z \\sim N(0,\\,1)',
      highlight: 'green',
    },
  ],

  examples: [
    {
      titleKey: 'examples.loot_balancing.title',
      contextKey: 'examples.loot_balancing.context',
      steps: [
        { key: 'examples.loot_balancing.step1', formula: 'X \\sim N(50;\\, 8^2), \\quad \\mu = 50,\\; \\sigma = 8' },
        { key: 'examples.loot_balancing.step2', formula: 'P(X \\geq 70) = 1 - \\Phi\\!\\left(\\frac{70 - 50}{8}\\right) = 1 - \\Phi(2{,}5)' },
        { key: 'examples.loot_balancing.step3', formula: '\\Phi(2{,}5) \\approx 0{,}9938' },
        { key: 'examples.loot_balancing.step4', formula: 'P(X \\geq 70) \\approx 0{,}0062 \\approx 0{,}6\\%' },
      ],
      characterComment: 'examples.loot_balancing.kai_comment',
    },
    {
      titleKey: 'examples.frame_times.title',
      contextKey: 'examples.frame_times.context',
      steps: [
        { key: 'examples.frame_times.step1', formula: 'X \\sim N(16{,}7;\\, 2{,}1^2) \\;\\text{ms}' },
        { key: 'examples.frame_times.step2', formula: 'P(X > 20) = 1 - \\Phi\\!\\left(\\frac{20 - 16{,}7}{2{,}1}\\right) = 1 - \\Phi(1{,}57)' },
        { key: 'examples.frame_times.step3', formula: '\\Phi(1{,}57) \\approx 0{,}9418' },
        { key: 'examples.frame_times.step4', formula: 'P(X > 20) \\approx 5{,}8\\% \\;\\Rightarrow\\; \\text{ca. jedes 17. Frame laggt}' },
      ],
      characterComment: 'examples.frame_times.kai_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.quality_control.title',
      descriptionKey: 'realworld.quality_control.desc',
      icon: '📏',
      formula: 'P(|X - \\mu| > 3\\sigma) < 0{,}3\\%',
    },
    {
      titleKey: 'realworld.iq_scores.title',
      descriptionKey: 'realworld.iq_scores.desc',
      icon: '🧠',
      formula: 'IQ \\sim N(100,\\, 15^2)',
    },
    {
      titleKey: 'realworld.stock_returns.title',
      descriptionKey: 'realworld.stock_returns.desc',
      icon: '📈',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.sigma_vs_variance.wrong',
      correctKey: 'mistakes.sigma_vs_variance.correct',
      explanationKey: 'mistakes.sigma_vs_variance.why',
      wrongFormula: 'N(\\mu,\\, \\sigma)',
      correctFormula: 'N(\\mu,\\, \\sigma^2) \\quad \\text{Varianz, nicht Standardabweichung!}',
      characterWarning: 'mistakes.sigma_vs_variance.kai_warning',
    },
    {
      wrongKey: 'mistakes.z_sign.wrong',
      correctKey: 'mistakes.z_sign.correct',
      explanationKey: 'mistakes.z_sign.why',
      wrongFormula: 'z = \\frac{\\mu - x}{\\sigma}',
      correctFormula: 'z = \\frac{x - \\mu}{\\sigma}',
    },
  ],

  prerequisites: ['11-binomialverteilung'],

  connections: [
    {
      topicId: '11-binomialverteilung',
      relation: 'baut-auf',
      why: 'Binomialverteilung wird für große n zur Normalverteilung — Grenzwertsatz',
      bubble: {
        character: 'euklid',
        text: 'Stell dir das Stabdiagramm der Binomialverteilung vor — bei n=20 sieht man noch Treppen, bei n=200 nicht mehr. Die Glockenkurve hier ist der Grenzfall. $\\mu = np$ und $\\sigma = \\sqrt{np(1-p)}$ — die alten Formeln gelten weiter, nur ohne Stäbe.',
      },
    },
    {
      topicId: '12-hypothesentests',
      relation: 'anwendung',
      why: 'Approximative Tests nutzen Normalverteilung statt aufwändiger Binomialrechnung',
      bubble: {
        character: 'euklid',
        text: 'Bei großen Stichproben wäre $P(X \\leq k)$ binomial unangenehm zu rechnen. Mit der Normalverteilung wird daraus eine z-Transformation und ein Blick in die Φ-Tabelle. Hypothesentests werden so erst praxistauglich.',
      },
    },
    {
      topicId: '11-exp-log',
      relation: 'verwandt',
      why: 'Die Glockenkurve enthält e^(-x²/2) — die e-Funktion macht die Krümmung',
      bubble: {
        character: 'euklid',
        text: 'Schau genau auf die Dichte: $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\cdot e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$. Die e-Funktion sorgt für den weichen Abfall in beide Richtungen. Ohne sie keine Glocke.',
      },
    },
  ],
};
