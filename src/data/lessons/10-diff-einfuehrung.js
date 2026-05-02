export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.average_rate',
    'objectives.instantaneous_rate',
    'objectives.limit_concept',
    'objectives.derivative_notation',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: '\\overline{m} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}' },
    { type: 'text', key: 'explanation.secant_to_tangent' },
    { type: 'formula', latex: 'f\'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.derivative_meaning' },
    { type: 'formula', latex: 'f\'(x) = \\frac{\\mathrm{d}f}{\\mathrm{d}x} = \\dot{f}(x)' },
    { type: 'text', key: 'explanation.geometric_interpretation' },
  ],

  concepts: [
    {
      titleKey: 'concepts.difference_quotient.title',
      descriptionKey: 'concepts.difference_quotient.desc',
      formula: '\\frac{\\Delta y}{\\Delta x} = \\frac{f(x_0 + h) - f(x_0)}{h}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.differential_quotient.title',
      descriptionKey: 'concepts.differential_quotient.desc',
      formula: 'f\'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.derivative_notation.title',
      descriptionKey: 'concepts.derivative_notation.desc',
      formula: 'f\'(x), \\quad \\frac{\\mathrm{d}f}{\\mathrm{d}x}, \\quad \\dot{y}',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.average_speed.title',
      contextKey: 'examples.average_speed.context',
      steps: [
        { key: 'examples.average_speed.step1', formula: 's(t) = 0{,}5 \\cdot t^2 \\quad \\text{(in Metern)}' },
        { key: 'examples.average_speed.step2', formula: '\\overline{v} = \\frac{s(4) - s(2)}{4 - 2} = \\frac{8 - 2}{2} = 3\\,\\frac{\\text{m}}{\\text{s}}' },
        { key: 'examples.average_speed.step3', formula: '\\overline{v}_{[2;\\,2{,}1]} = \\frac{s(2{,}1) - s(2)}{0{,}1} = \\frac{2{,}205 - 2}{0{,}1} = 2{,}05\\,\\frac{\\text{m}}{\\text{s}}' },
      ],
      characterComment: 'examples.average_speed.mia_comment',
    },
    {
      titleKey: 'examples.instantaneous_rate.title',
      contextKey: 'examples.instantaneous_rate.context',
      steps: [
        { key: 'examples.instantaneous_rate.step1', formula: 'f(x) = x^2, \\quad x_0 = 3' },
        { key: 'examples.instantaneous_rate.step2', formula: '\\frac{f(3 + h) - f(3)}{h} = \\frac{(3+h)^2 - 9}{h} = \\frac{9 + 6h + h^2 - 9}{h}' },
        { key: 'examples.instantaneous_rate.step3', formula: '= \\frac{6h + h^2}{h} = 6 + h' },
        { key: 'examples.instantaneous_rate.step4', formula: 'f\'(3) = \\lim_{h \\to 0}(6 + h) = 6' },
      ],
      characterComment: 'examples.instantaneous_rate.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.speed_camera.title',
      descriptionKey: 'realworld.speed_camera.desc',
      icon: '📸',
      formula: '\\overline{v} = \\frac{\\Delta s}{\\Delta t}',
    },
    {
      titleKey: 'realworld.stock_trends.title',
      descriptionKey: 'realworld.stock_trends.desc',
      icon: '📈',
    },
    {
      titleKey: 'realworld.speedometer.title',
      descriptionKey: 'realworld.speedometer.desc',
      icon: '🏎️',
      formula: 'v(t) = s\'(t) = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.average_vs_instant.wrong',
      correctKey: 'mistakes.average_vs_instant.correct',
      explanationKey: 'mistakes.average_vs_instant.why',
      wrongFormula: '\\frac{f(5) - f(1)}{5 - 1} = f\'(3)',
      correctFormula: '\\frac{f(5) - f(1)}{5 - 1} = \\overline{m}_{[1;\\,5]} \\neq f\'(3)',
      characterWarning: 'mistakes.average_vs_instant.mia_warning',
    },
    {
      wrongKey: 'mistakes.secant_tangent.wrong',
      correctKey: 'mistakes.secant_tangent.correct',
      explanationKey: 'mistakes.secant_tangent.why',
      wrongFormula: 'm_{\\text{Sekante}} = m_{\\text{Tangente}}',
      correctFormula: 'm_{\\text{Tangente}} = \\lim_{h \\to 0} m_{\\text{Sekante}}',
    },
  ],

  prerequisites: ['10-quad-funktionen'],

  connections: [
    {
      topicId: '11-ableitungsregeln',
      relation: 'fuehrt-zu',
      why: 'Die Limes-Rechnung wird durch Regeln ersetzt — gleiche Idee, anderes Tempo',
      bubble: {
        character: 'euklid',
        text: 'Was du hier mühevoll mit dem h-Limes berechnest, geht in Klasse 11 in einer Zeile: $f(x) = x^2 \\Rightarrow f\'(x) = 2x$. Die Regel kommt nicht aus dem Nichts — sie ist genau die Limes-Rechnung, die du gerade übst, ein für alle Mal erledigt.',
      },
    },
    {
      topicId: '10-quad-funktionen',
      relation: 'baut-auf',
      why: 'Die Tangentensteigung wird zuerst an Parabeln entdeckt',
      bubble: {
        character: 'euklid',
        text: 'Du nutzt $f(x) = x^2$ als Übungsfunktion — und nicht zufällig. Parabeln sind die einfachsten Kurven, an denen die Steigung sich ändert. Eine Gerade hätte überall dieselbe Steigung — da gäbe es nichts zu entdecken.',
      },
    },
    {
      topicId: '11-extremwertaufgaben',
      relation: 'fuehrt-zu',
      why: 'f\'(x) = 0 ist die Bedingung für Extremstellen',
      bubble: {
        character: 'euklid',
        text: 'Was bringt es, die Tangentensteigung auszurechnen? In Klasse 11 wirst du sehen: Genau dort, wo $f\'(x) = 0$ — wo die Tangente waagrecht liegt — sitzen die Maxima und Minima. Aus dem Limes wird ein Werkzeug zur Optimierung.',
      },
    },
    {
      topicId: '11-integralrechnung',
      relation: 'fuehrt-zu',
      why: 'Integralrechnung ist die Umkehrung der Differentialrechnung',
      bubble: {
        character: 'euklid',
        text: 'Hier zerlegst du eine Bewegung in Momentangeschwindigkeiten. In Klasse 11 wirst du das umgekehrt machen: aus der Geschwindigkeit den zurückgelegten Weg zusammenbauen. Differenzieren und Integrieren sind zwei Richtungen derselben Idee.',
      },
    },
  ],
};
