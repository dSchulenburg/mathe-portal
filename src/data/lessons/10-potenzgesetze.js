export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.multiply_powers',
    'objectives.power_of_power',
    'objectives.negative_exponents',
    'objectives.apply_memory',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'a^m \\cdot a^n = a^{m+n}' },
    { type: 'text', key: 'explanation.power_of_power' },
    { type: 'formula', latex: '(a^m)^n = a^{m \\cdot n}' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.negative' },
    { type: 'formula', latex: 'a^{-n} = \\frac{1}{a^n}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.product_rule.title',
      descriptionKey: 'concepts.product_rule.desc',
      formula: 'a^m \\cdot a^n = a^{m+n}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.power_rule.title',
      descriptionKey: 'concepts.power_rule.desc',
      formula: '(a^m)^n = a^{m \\cdot n}',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.negative_exp.title',
      descriptionKey: 'concepts.negative_exp.desc',
      formula: 'a^{-n} = \\frac{1}{a^n}',
      highlight: 'cyan',
    },
  ],

  examples: [
    {
      titleKey: 'examples.simplify.title',
      contextKey: 'examples.simplify.context',
      steps: [
        { key: 'examples.simplify.step1', formula: '2^3 \\cdot 2^4 = 2^{3+4}' },
        { key: 'examples.simplify.step2', formula: '2^7 = 128' },
        { key: 'examples.simplify.step3', formula: '128\\,\\text{Byte} = 1\\,\\text{KB} \\text{ (nah dran)}' },
      ],
      characterComment: 'examples.simplify.mia_comment',
    },
    {
      titleKey: 'examples.negative.title',
      contextKey: 'examples.negative.context',
      steps: [
        { key: 'examples.negative.step1', formula: '10^{-3} = \\frac{1}{10^3}' },
        { key: 'examples.negative.step2', formula: '= \\frac{1}{1000} = 0{,}001' },
        { key: 'examples.negative.step3', formula: '1\\,\\text{ms} = 10^{-3}\\,\\text{s}' },
      ],
      characterComment: 'examples.negative.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.storage.title',
      descriptionKey: 'realworld.storage.desc',
      icon: '💾',
      formula: '1\\,\\text{TB} = 2^{40}\\,\\text{Byte} = 1.099.511.627.776',
    },
    {
      titleKey: 'realworld.richter.title',
      descriptionKey: 'realworld.richter.desc',
      icon: '🌍',
    },
    {
      titleKey: 'realworld.decibel.title',
      descriptionKey: 'realworld.decibel.desc',
      icon: '🔊',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.add_bases.wrong',
      correctKey: 'mistakes.add_bases.correct',
      explanationKey: 'mistakes.add_bases.why',
      wrongFormula: '2^3 \\cdot 3^2 = 6^5',
      correctFormula: '2^3 \\cdot 3^2 = 8 \\cdot 9 = 72',
      characterWarning: 'mistakes.add_bases.mia_warning',
    },
    {
      wrongKey: 'mistakes.zero_exp.wrong',
      correctKey: 'mistakes.zero_exp.correct',
      explanationKey: 'mistakes.zero_exp.why',
      wrongFormula: 'a^0 = 0',
      correctFormula: 'a^0 = 1 \\quad (a \\neq 0)',
    },
  ],

  prerequisites: [],
  connections: [
    {
      topicId: '10-exp-wachstum',
      relation: 'fuehrt-zu',
      why: 'a^(m+n) = a^m mal a^n ist der Grund, warum Wachstum pro Schritt multipliziert statt addiert',
      bubble: {
        character: 'euklid',
        text: 'Merk dir $a^{m+n} = a^m \\cdot a^n$ gut. Wenn gleich etwas «pro Jahr um 5 % wächst», dann steckt genau dieses Gesetz dahinter: Zwei Jahre hintereinander sind nicht $2 \\cdot 1{,}05$, sondern $1{,}05^2$. Wer hier addiert, rechnet den Rest der Oberstufe falsch.',
      },
    },
    {
      topicId: '11-exp-log',
      relation: 'fuehrt-zu',
      why: 'Die Logarithmusgesetze sind die Potenzgesetze rückwärts gelesen',
      bubble: {
        character: 'euklid',
        text: 'Du lernst hier drei Regeln, die dir in der 11 noch einmal begegnen — nur gespiegelt. Aus $a^m \\cdot a^n = a^{m+n}$ wird $\\log(x \\cdot y) = \\log x + \\log y$. Der Logarithmus macht aus Mal ein Plus, weil die Potenz aus einem Plus ein Mal gemacht hat. Eine Regel, zwei Blickrichtungen.',
      },
    },
    {
      topicId: '11-ableitungsregeln',
      relation: 'fuehrt-zu',
      why: 'Die Potenzregel greift nur, wenn Wurzeln und Brüche als Potenzen geschrieben sind',
      bubble: {
        character: 'euklid',
        text: 'Die Ableitungsregel $\\frac{d}{dx} x^n = n \\cdot x^{n-1}$ sieht harmlos aus, bis $\\sqrt{x}$ oder $\\frac{1}{x^2}$ auftaucht. Dann rettet dich nur, dass du $\\sqrt{x} = x^{1/2}$ und $\\frac{1}{x^2} = x^{-2}$ schreiben kannst. Genau das übst du hier.',
      },
    },
    {
      topicId: '10-aehnlichkeit',
      relation: 'anwendung',
      why: 'Streckt man eine Figur um k, wachsen Flächen mit k hoch 2 und Volumen mit k hoch 3',
      bubble: {
        character: 'euklid',
        text: 'Ein Würfel mit doppelter Kantenlänge hat nicht das doppelte Volumen, sondern das achtfache: $2^3 = 8$. Flächen wachsen mit $k^2$, Volumen mit $k^3$. Das ist keine Geometrie-Eigenheit, das sind die Potenzgesetze in Lebensgröße.',
      },
    },
  ],
};
