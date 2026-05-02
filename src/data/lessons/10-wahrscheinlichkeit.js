export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.basic',
    'objectives.tree',
    'objectives.expected_value',
    'objectives.complement',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'P(E) = \\frac{\\text{günstige Ergebnisse}}{\\text{mögliche Ergebnisse}}' },
    { type: 'text', key: 'explanation.range' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.tree' },
    { type: 'formula', latex: 'P(A \\cap B) = P(A) \\cdot P(B)' },
    { type: 'text', key: 'explanation.complement' },
    { type: 'formula', latex: 'P(\\bar{A}) = 1 - P(A)' },
  ],

  concepts: [
    {
      titleKey: 'concepts.laplace.title',
      descriptionKey: 'concepts.laplace.desc',
      formula: 'P(E) = \\frac{|E|}{|\\Omega|}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.complement.title',
      descriptionKey: 'concepts.complement.desc',
      formula: 'P(\\bar{A}) = 1 - P(A)',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.expected.title',
      descriptionKey: 'concepts.expected.desc',
      formula: 'E(X) = \\sum_{i} x_i \\cdot P(X = x_i)',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.dice.title',
      contextKey: 'examples.dice.context',
      steps: [
        { key: 'examples.dice.step1', formula: '|\\Omega| = 6' },
        { key: 'examples.dice.step2', formula: '|E| = 3 \\quad (2, 4, 6)' },
        { key: 'examples.dice.step3', formula: 'P(E) = \\frac{3}{6} = \\frac{1}{2} = 50\\%' },
      ],
      characterComment: 'examples.dice.mia_comment',
    },
    {
      titleKey: 'examples.loot.title',
      contextKey: 'examples.loot.context',
      steps: [
        { key: 'examples.loot.step1', formula: 'P(\\text{Rare}) = 0{,}05' },
        { key: 'examples.loot.step2', formula: 'P(\\text{kein Rare in 10 Drops}) = 0{,}95^{10}' },
        { key: 'examples.loot.step3', formula: '= 0{,}5987 \\approx 60\\%' },
        { key: 'examples.loot.step4', formula: 'P(\\text{mind. 1 Rare}) = 1 - 0{,}5987 \\approx 40\\%' },
      ],
      characterComment: 'examples.loot.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.lootbox.title',
      descriptionKey: 'realworld.lootbox.desc',
      icon: '🎲',
    },
    {
      titleKey: 'realworld.shuffle.title',
      descriptionKey: 'realworld.shuffle.desc',
      icon: '🎵',
    },
    {
      titleKey: 'realworld.lottery.title',
      descriptionKey: 'realworld.lottery.desc',
      icon: '🎰',
      formula: 'P(6 \\text{ Richtige}) = \\frac{1}{\\binom{49}{6}} = \\frac{1}{13.983.816}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.addition.wrong',
      correctKey: 'mistakes.addition.correct',
      explanationKey: 'mistakes.addition.why',
      wrongFormula: 'P(A \\cap B) = P(A) + P(B)',
      correctFormula: 'P(A \\cap B) = P(A) \\cdot P(B)',
      characterWarning: 'mistakes.addition.mia_warning',
    },
    {
      wrongKey: 'mistakes.percent.wrong',
      correctKey: 'mistakes.percent.correct',
      explanationKey: 'mistakes.percent.why',
    },
  ],

  prerequisites: [],

  connections: [
    {
      topicId: '11-bedingte-wahrscheinlichkeit',
      relation: 'fuehrt-zu',
      why: 'Bedingte Wk fragt: was ändert sich, wenn ich vorher etwas weiß?',
      bubble: {
        character: 'euklid',
        text: 'Du hast hier Wahrscheinlichkeiten gerechnet, ohne dass dich Information unterwegs stört. In Klasse 11 dreht sich alles darum: Wenn ich weiß, dass A eingetreten ist — wie verschiebt sich dann $P(B)$? Bayes ist die Mathematik des Dazulernens.',
      },
    },
    {
      topicId: '11-binomialverteilung',
      relation: 'fuehrt-zu',
      why: 'Binomialverteilung verallgemeinert die Pfadregel auf n unabhängige Wiederholungen',
      bubble: {
        character: 'euklid',
        text: 'Wenn du dieselbe Münze 100-mal wirfst und fragst „Wie wahrscheinlich genau 60 Kopf?" — dann brauchst du nicht 100 Pfade zu zeichnen. Die Binomialformel macht das in einer Zeile. Die Idee ist aber dieselbe wie hier am Baum.',
      },
    },
    {
      topicId: '12-normalverteilung',
      relation: 'fuehrt-zu',
      why: 'Aus diskreter Wk wird im Grenzfall stetige Verteilung',
      bubble: {
        character: 'euklid',
        text: 'Würfel und Münzen sind diskret — endlich viele Ergebnisse, klare Brüche. In Klasse 12 lernst du stetige Verteilungen kennen, allen voran die Glockenkurve. Aus den Säulen wird eine glatte Fläche, aus $\\sum$ wird $\\int$.',
      },
    },
  ],
};
