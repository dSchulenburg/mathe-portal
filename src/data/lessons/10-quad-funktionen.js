export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.recognize',
    'objectives.vertex_form',
    'objectives.pq_formula',
    'objectives.graph_properties',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'f(x) = ax^2 + bx + c' },
    { type: 'text', key: 'explanation.opening' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.vertex_form' },
    { type: 'formula', latex: 'f(x) = a(x - d)^2 + e \\quad \\Rightarrow \\quad S(d \\mid e)' },
    { type: 'text', key: 'explanation.conversion' },
  ],

  concepts: [
    {
      titleKey: 'concepts.normal_form.title',
      descriptionKey: 'concepts.normal_form.desc',
      formula: 'f(x) = ax^2 + bx + c',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.vertex_form.title',
      descriptionKey: 'concepts.vertex_form.desc',
      formula: 'f(x) = a(x - d)^2 + e',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.pq_formula.title',
      descriptionKey: 'concepts.pq_formula.desc',
      formula: 'x_{1,2} = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.discriminant.title',
      descriptionKey: 'concepts.discriminant.desc',
      formula: 'D = \\left(\\frac{p}{2}\\right)^2 - q',
      highlight: 'cyan',
    },
  ],

  examples: [
    {
      titleKey: 'examples.vertex.title',
      contextKey: 'examples.vertex.context',
      steps: [
        { key: 'examples.vertex.step1', formula: 'f(x) = x^2 - 6x + 5' },
        { key: 'examples.vertex.step2', formula: 'f(x) = (x^2 - 6x + 9) - 9 + 5' },
        { key: 'examples.vertex.step3', formula: 'f(x) = (x - 3)^2 - 4' },
        { key: 'examples.vertex.step4', formula: 'S(3 \\mid -4)' },
      ],
      characterComment: 'examples.vertex.mia_comment',
    },
    {
      titleKey: 'examples.pq.title',
      contextKey: 'examples.pq.context',
      steps: [
        { key: 'examples.pq.step1', formula: 'x^2 + 2x - 8 = 0' },
        { key: 'examples.pq.step2', formula: 'p = 2, \\quad q = -8' },
        { key: 'examples.pq.step3', formula: 'x_{1,2} = -1 \\pm \\sqrt{1 + 8} = -1 \\pm 3' },
        { key: 'examples.pq.step4', formula: 'x_1 = 2, \\quad x_2 = -4' },
      ],
      characterComment: 'examples.pq.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.basketball.title',
      descriptionKey: 'realworld.basketball.desc',
      icon: '🏀',
      formula: 'h(t) = -4{,}9t^2 + v_0 \\cdot t + h_0',
    },
    {
      titleKey: 'realworld.bridge.title',
      descriptionKey: 'realworld.bridge.desc',
      icon: '🌉',
    },
    {
      titleKey: 'realworld.pricing.title',
      descriptionKey: 'realworld.pricing.desc',
      icon: '💰',
      formula: 'G(p) = p \\cdot (1000 - 20p) - 5000',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.sign_error.wrong',
      correctKey: 'mistakes.sign_error.correct',
      explanationKey: 'mistakes.sign_error.why',
      wrongFormula: 'f(x) = (x - 3)^2 + 2 \\Rightarrow S(-3 \\mid 2)',
      correctFormula: 'f(x) = (x - 3)^2 + 2 \\Rightarrow S(3 \\mid 2)',
      characterWarning: 'mistakes.sign_error.mia_warning',
    },
    {
      wrongKey: 'mistakes.pq_wrong.wrong',
      correctKey: 'mistakes.pq_wrong.correct',
      explanationKey: 'mistakes.pq_wrong.why',
      wrongFormula: '2x^2 + 4x - 6 = 0 \\Rightarrow p=4, q=-6',
      correctFormula: 'x^2 + 2x - 3 = 0 \\Rightarrow p=2, q=-3',
    },
  ],

  prerequisites: ['10-potenzgesetze'],
  connections: [
    {
      topicId: '10-quad-gleichungen',
      relation: 'baut-auf',
      why: 'Die Nullstellen einer Parabel sind die Lösungen der zugehörigen Gleichung',
      bubble: {
        character: 'euklid',
        text: 'Jede Frage nach einem Schnittpunkt mit der x-Achse ist eine quadratische Gleichung im Kostüm. $f(x) = 0$ ist keine neue Aufgabe, sondern dieselbe von der anderen Seite.',
      },
    },
    {
      topicId: '10-diff-einfuehrung',
      relation: 'fuehrt-zu',
      why: 'Die Parabel ist die erste Funktion, deren Steigung sich an jeder Stelle ändert',
      bubble: {
        character: 'euklid',
        text: 'Bei der Geraden war die Steigung überall gleich. Bei der Parabel nicht mehr — und genau deshalb wird sie zum Einstieg in die Differentialrechnung. Die Ableitung $f\'(x) = 2x$ sagt dir: links vom Scheitel fällt es, rechts steigt es, im Scheitel ist die Steigung null.',
      },
    },
    {
      topicId: '11-extremwertaufgaben',
      relation: 'anwendung',
      why: 'Der Scheitelpunkt ist das Optimum, lange bevor man ableiten kann',
      bubble: {
        character: 'euklid',
        text: 'Höchster Punkt eines Wurfs, größte Fläche, kleinste Kosten: Steckt eine Parabel dahinter, ist die Antwort der Scheitelpunkt. Du optimierst hier bereits, nur heißt es noch nicht so.',
      },
    },
    {
      topicId: '10-funktionsklassen',
      relation: 'verwandt',
      why: 'Die Parabel ist der Prototyp der nichtlinearen Funktionen',
      bubble: {
        character: 'euklid',
        text: 'Verschieben, strecken, spiegeln: Was du an $f(x) = a(x-d)^2 + e$ verstehst, überträgst du später auf Sinus, Exponentialfunktion und Wurzel. Die Scheitelpunktform ist die Blaupause für jede Funktionsklasse, die danach kommt.',
      },
    },
  ],
};
