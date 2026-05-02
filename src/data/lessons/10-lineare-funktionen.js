export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.recognize',
    'objectives.slope_intercept',
    'objectives.point_slope',
    'objectives.two_points',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'f(x) = m \\cdot x + b' },
    { type: 'text', key: 'explanation.slope' },
    { type: 'formula', latex: 'm = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.intercept' },
    { type: 'formula', latex: 'f(0) = b \\quad \\text{(Schnittpunkt mit der y-Achse)}' },
    { type: 'text', key: 'explanation.point_slope' },
    { type: 'formula', latex: 'y - y_0 = m \\cdot (x - x_0)' },
  ],

  concepts: [
    {
      titleKey: 'concepts.normal_form.title',
      descriptionKey: 'concepts.normal_form.desc',
      formula: 'f(x) = m \\cdot x + b',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.slope.title',
      descriptionKey: 'concepts.slope.desc',
      formula: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.point_slope.title',
      descriptionKey: 'concepts.point_slope.desc',
      formula: 'y - y_0 = m(x - x_0)',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.parallel_perpendicular.title',
      descriptionKey: 'concepts.parallel_perpendicular.desc',
      formula: 'g \\parallel h \\Leftrightarrow m_g = m_h, \\quad g \\perp h \\Leftrightarrow m_g \\cdot m_h = -1',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.from_points.title',
      contextKey: 'examples.from_points.context',
      steps: [
        { key: 'examples.from_points.step1', formula: 'P_1(2 \\mid 1), \\quad P_2(5 \\mid 7)' },
        { key: 'examples.from_points.step2', formula: 'm = \\frac{7 - 1}{5 - 2} = \\frac{6}{3} = 2' },
        { key: 'examples.from_points.step3', formula: 'y - 1 = 2(x - 2) \\Rightarrow y = 2x - 3' },
        { key: 'examples.from_points.step4', formula: 'f(x) = 2x - 3' },
      ],
      characterComment: 'examples.from_points.mia_comment',
    },
    {
      titleKey: 'examples.intersection.title',
      contextKey: 'examples.intersection.context',
      steps: [
        { key: 'examples.intersection.step1', formula: 'g\\colon y = 2x - 3, \\quad h\\colon y = -x + 6' },
        { key: 'examples.intersection.step2', formula: '2x - 3 = -x + 6' },
        { key: 'examples.intersection.step3', formula: '3x = 9 \\Rightarrow x = 3' },
        { key: 'examples.intersection.step4', formula: 'y = 2 \\cdot 3 - 3 = 3 \\Rightarrow S(3 \\mid 3)' },
      ],
      characterComment: 'examples.intersection.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.handytarif.title',
      descriptionKey: 'realworld.handytarif.desc',
      icon: '📱',
      formula: 'K(t) = 0{,}10 \\cdot t + 9{,}99',
    },
    {
      titleKey: 'realworld.taxi.title',
      descriptionKey: 'realworld.taxi.desc',
      icon: '🚕',
      formula: 'K(s) = 2{,}50 \\cdot s + 4{,}00',
    },
    {
      titleKey: 'realworld.constant_speed.title',
      descriptionKey: 'realworld.constant_speed.desc',
      icon: '🛹',
      formula: 's(t) = v \\cdot t + s_0',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.slope_inverted.wrong',
      correctKey: 'mistakes.slope_inverted.correct',
      explanationKey: 'mistakes.slope_inverted.why',
      wrongFormula: 'm = \\frac{\\Delta x}{\\Delta y}',
      correctFormula: 'm = \\frac{\\Delta y}{\\Delta x}',
      characterWarning: 'mistakes.slope_inverted.mia_warning',
    },
    {
      wrongKey: 'mistakes.intercept_zero.wrong',
      correctKey: 'mistakes.intercept_zero.correct',
      explanationKey: 'mistakes.intercept_zero.why',
      wrongFormula: 'f(x) = 2x + 5 \\Rightarrow \\text{Nullstelle bei } x = 5',
      correctFormula: 'f(x) = 2x + 5 = 0 \\Rightarrow x = -\\tfrac{5}{2}',
    },
  ],

  prerequisites: [],

  connections: [
    {
      topicId: '10-quad-funktionen',
      relation: 'fuehrt-zu',
      why: 'Nach den linearen folgen quadratische Funktionen — derselbe Aufbau, ein Term mehr',
      bubble: {
        character: 'euklid',
        text: 'Lineare Funktionen sind die einfachste Funktionsfamilie. Mit nur einem zusätzlichen x²-Term wirst du gleich Parabeln zeichnen — die Logik bleibt dieselbe: Term verstehen, Graph deuten.',
      },
    },
    {
      topicId: '10-diff-einfuehrung',
      relation: 'fuehrt-zu',
      why: 'Steigung einer Geraden wird später die Ableitung an einem Punkt',
      bubble: {
        character: 'euklid',
        text: 'Die Steigung m einer Geraden ist überall gleich. Bei gekrümmten Funktionen ändert sich die Steigung — und genau das misst die Ableitung. Lineare Funktionen sind der Sonderfall, bei dem f′(x) = m konstant ist.',
      },
    },
    {
      topicId: '11-vektorrechnung',
      relation: 'fuehrt-zu',
      why: 'Geraden im Raum werden mit Stütz- und Richtungsvektor beschrieben — der Richtungsvektor entspricht der Steigung',
      bubble: {
        character: 'euklid',
        text: 'In Klasse 11 schreibst du Geraden als g: x⃗ = a⃗ + t·u⃗. Der Richtungsvektor u⃗ ist die räumliche Verallgemeinerung der Steigung — gleicher Grundgedanke, neue Sprache.',
      },
    },
  ],
};
