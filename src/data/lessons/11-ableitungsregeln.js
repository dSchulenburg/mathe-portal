export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.power_rule',
    'objectives.constant_sum_rule',
    'objectives.product_quotient_rule',
    'objectives.chain_rule',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'f(x) = x^n \\quad \\Rightarrow \\quad f\'(x) = n \\cdot x^{n-1}' },
    { type: 'text', key: 'explanation.constant_factor' },
    { type: 'formula', latex: '[c \\cdot f(x)]\' = c \\cdot f\'(x), \\qquad [f(x) \\pm g(x)]\' = f\'(x) \\pm g\'(x)' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.product_rule' },
    { type: 'formula', latex: '[u(x) \\cdot v(x)]\' = u\'(x) \\cdot v(x) + u(x) \\cdot v\'(x)' },
    { type: 'text', key: 'explanation.quotient_rule' },
    { type: 'formula', latex: '\\left[\\frac{u(x)}{v(x)}\\right]\' = \\frac{u\'(x) \\cdot v(x) - u(x) \\cdot v\'(x)}{[v(x)]^2}' },
    { type: 'text', key: 'explanation.chain_rule' },
    { type: 'formula', latex: '[f(g(x))]\' = f\'(g(x)) \\cdot g\'(x)' },
  ],

  concepts: [
    {
      titleKey: 'concepts.power_rule.title',
      descriptionKey: 'concepts.power_rule.desc',
      formula: 'f(x) = x^n \\quad \\Rightarrow \\quad f\'(x) = n \\cdot x^{n-1}',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.sum_rule.title',
      descriptionKey: 'concepts.sum_rule.desc',
      formula: '[f(x) + g(x)]\' = f\'(x) + g\'(x)',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.product_rule.title',
      descriptionKey: 'concepts.product_rule.desc',
      formula: '[u \\cdot v]\' = u\' \\cdot v + u \\cdot v\'',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.chain_rule.title',
      descriptionKey: 'concepts.chain_rule.desc',
      formula: '[f(g(x))]\' = f\'(g(x)) \\cdot g\'(x)',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.power_sum.title',
      contextKey: 'examples.power_sum.context',
      steps: [
        { key: 'examples.power_sum.step1', formula: 'f(x) = 3x^4 - 2x^3 + 5x - 7' },
        { key: 'examples.power_sum.step2', formula: 'f\'(x) = 3 \\cdot 4x^3 - 2 \\cdot 3x^2 + 5 \\cdot 1 - 0' },
        { key: 'examples.power_sum.step3', formula: 'f\'(x) = 12x^3 - 6x^2 + 5' },
      ],
      characterComment: 'examples.power_sum.amir_comment',
    },
    {
      titleKey: 'examples.chain_rule.title',
      contextKey: 'examples.chain_rule.context',
      steps: [
        { key: 'examples.chain_rule.step1', formula: 'f(x) = (2x^2 + 1)^3' },
        { key: 'examples.chain_rule.step2', formula: 'u = g(x) = 2x^2 + 1, \\quad f(u) = u^3' },
        { key: 'examples.chain_rule.step3', formula: 'f\'(x) = 3(2x^2 + 1)^2 \\cdot 4x' },
        { key: 'examples.chain_rule.step4', formula: 'f\'(x) = 12x \\cdot (2x^2 + 1)^2' },
      ],
      characterComment: 'examples.chain_rule.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.gradient_descent.title',
      descriptionKey: 'realworld.gradient_descent.desc',
      icon: '🤖',
      formula: '\\theta_{\\text{neu}} = \\theta_{\\text{alt}} - \\alpha \\cdot \\frac{\\partial L}{\\partial \\theta}',
    },
    {
      titleKey: 'realworld.marginal_cost.title',
      descriptionKey: 'realworld.marginal_cost.desc',
      icon: '💰',
      formula: 'K\'(x) = \\text{Grenzkosten}',
    },
    {
      titleKey: 'realworld.acceleration.title',
      descriptionKey: 'realworld.acceleration.desc',
      icon: '🚀',
      formula: 'a(t) = v\'(t) = s\'\'(t)',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.power_rule_constant.wrong',
      correctKey: 'mistakes.power_rule_constant.correct',
      explanationKey: 'mistakes.power_rule_constant.why',
      wrongFormula: '(5)\' = 5',
      correctFormula: '(5)\' = 0',
      characterWarning: 'mistakes.power_rule_constant.amir_warning',
    },
    {
      wrongKey: 'mistakes.chain_rule_forgotten.wrong',
      correctKey: 'mistakes.chain_rule_forgotten.correct',
      explanationKey: 'mistakes.chain_rule_forgotten.why',
      wrongFormula: '[(3x+1)^4]\' = 4(3x+1)^3',
      correctFormula: '[(3x+1)^4]\' = 4(3x+1)^3 \\cdot 3 = 12(3x+1)^3',
      characterWarning: 'mistakes.chain_rule_forgotten.amir_warning',
    },
  ],

  prerequisites: ['10-diff-einfuehrung'],

  connections: [
    {
      topicId: '10-diff-einfuehrung',
      relation: 'baut-auf',
      why: 'Die Potenzregel ersetzt die mühsame Limes-Rechnung durch ein simples Schema',
      bubble: {
        character: 'euklid',
        text: 'In Klasse 10 hast du den Differenzenquotienten gegen Null laufen lassen — Schritt für Schritt. Das war der ehrliche Weg. Jetzt bekommst du die Abkürzung: $f(x) = x^n \\Rightarrow f\'(x) = n \\cdot x^{n-1}$. Aber unter der Haube läuft immer noch derselbe Limes.',
      },
    },
    {
      topicId: '11-kurvendiskussion',
      relation: 'fuehrt-zu',
      why: 'Ableitungsregeln sind die Werkzeuge — Kurvendiskussion ist die Anwendung',
      bubble: {
        character: 'euklid',
        text: 'Was du hier als Regelwerk lernst, brauchst du sofort: $f\'(x) = 0$ verrät Extremstellen, $f\'\'(x) = 0$ verrät Wendepunkte. Ohne diese Regeln keine Kurvendiskussion — und ohne Kurvendiskussion kein Abi.',
      },
    },
    {
      topicId: '11-extremwertaufgaben',
      relation: 'fuehrt-zu',
      why: 'Optimieren = Zielfunktion ableiten und f\'(x) = 0 lösen',
      bubble: {
        character: 'euklid',
        text: 'Die Kettenregel und die Quotientenregel werden in Extremwertaufgaben zum Brot-und-Butter-Werkzeug — jede Optimierung beginnt mit einer Ableitung der Zielfunktion. Wer die Regeln sicher hat, kann sich auf die Modellierung konzentrieren.',
      },
    },
    {
      topicId: '11-exp-log',
      relation: 'verwandt',
      why: 'e^x ist die Funktion, die mit ihrer eigenen Ableitung übereinstimmt',
      bubble: {
        character: 'euklid',
        text: 'Bei den Ableitungsregeln triffst du auf eine wundersame Sache: $\\left(e^x\\right)\' = e^x$. Das ist keine Nebensache — genau das macht $e$ zur natürlichen Basis und ist der Grund, warum die e-Funktion in Klasse 12 so allgegenwärtig wird.',
      },
    },
  ],
};
