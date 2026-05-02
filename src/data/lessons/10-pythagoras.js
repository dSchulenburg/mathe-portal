export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.theorem',
    'objectives.calculate_sides',
    'objectives.recognize',
    'objectives.apply',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'a^2 + b^2 = c^2' },
    { type: 'text', key: 'explanation.sides' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.solving' },
    { type: 'formula', latex: 'c = \\sqrt{a^2 + b^2}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.theorem.title',
      descriptionKey: 'concepts.theorem.desc',
      formula: 'a^2 + b^2 = c^2',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.hypotenuse.title',
      descriptionKey: 'concepts.hypotenuse.desc',
      formula: 'c = \\sqrt{a^2 + b^2}',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.cathetus.title',
      descriptionKey: 'concepts.cathetus.desc',
      formula: 'a = \\sqrt{c^2 - b^2}',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.screen.title',
      contextKey: 'examples.screen.context',
      steps: [
        { key: 'examples.screen.step1', formula: 'a = 16, \\quad b = 9' },
        { key: 'examples.screen.step2', formula: 'c^2 = 16^2 + 9^2 = 256 + 81 = 337' },
        { key: 'examples.screen.step3', formula: 'c = \\sqrt{337} \\approx 18{,}36' },
      ],
      characterComment: 'examples.screen.mia_comment',
    },
    {
      titleKey: 'examples.ladder.title',
      contextKey: 'examples.ladder.context',
      steps: [
        { key: 'examples.ladder.step1', formula: 'c = 5\\,\\text{m}, \\quad b = 1{,}5\\,\\text{m}' },
        { key: 'examples.ladder.step2', formula: 'a^2 = c^2 - b^2 = 25 - 2{,}25 = 22{,}75' },
        { key: 'examples.ladder.step3', formula: 'a = \\sqrt{22{,}75} \\approx 4{,}77\\,\\text{m}' },
      ],
      characterComment: 'examples.ladder.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.screen.title',
      descriptionKey: 'realworld.screen.desc',
      icon: '📺',
    },
    {
      titleKey: 'realworld.football.title',
      descriptionKey: 'realworld.football.desc',
      icon: '⚽',
      formula: 'd = \\sqrt{105^2 + 68^2} \\approx 125\\,\\text{m}',
    },
    {
      titleKey: 'realworld.wifi.title',
      descriptionKey: 'realworld.wifi.desc',
      icon: '📡',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.hypotenuse.wrong',
      correctKey: 'mistakes.hypotenuse.correct',
      explanationKey: 'mistakes.hypotenuse.why',
      wrongFormula: 'a^2 + c^2 = b^2',
      correctFormula: 'a^2 + b^2 = c^2',
    },
    {
      wrongKey: 'mistakes.root.wrong',
      correctKey: 'mistakes.root.correct',
      explanationKey: 'mistakes.root.why',
      wrongFormula: '\\sqrt{a^2 + b^2} = a + b',
      correctFormula: '\\sqrt{a^2 + b^2} \\neq a + b',
      characterWarning: 'mistakes.root.mia_warning',
    },
  ],

  prerequisites: ['10-potenzgesetze'],

  connections: [
    {
      topicId: '10-trigonometrie',
      relation: 'fuehrt-zu',
      why: 'sin²(α) + cos²(α) = 1 ist Pythagoras am Einheitskreis',
      bubble: {
        character: 'euklid',
        text: 'Wenn du gleich Sinus und Kosinus triffst, schau dir $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$ noch einmal an. Das ist nichts anderes als $a^2 + b^2 = c^2$ — nur dass die Hypotenuse 1 ist und der Punkt auf einem Kreis liegt. Pythagoras im Kostüm.',
      },
    },
    {
      topicId: '11-vektorrechnung',
      relation: 'fuehrt-zu',
      why: 'Die Länge eines Vektors ist Pythagoras in n Dimensionen',
      bubble: {
        character: 'euklid',
        text: 'In der Vektorrechnung wirst du $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$ schreiben — und gar nicht merken, dass du dreidimensionalen Pythagoras gerade als selbstverständlich behandelst. Wer den Satz hier verstanden hat, hat ihn auch in 4, 5 oder 1000 Dimensionen verstanden.',
      },
    },
    {
      topicId: '10-koerper',
      relation: 'anwendung',
      why: 'Apothema und Raumdiagonale werden mit Pythagoras berechnet',
      bubble: {
        character: 'euklid',
        text: 'Sobald du eine Pyramide aufschneidest, wartet wieder ein rechtwinkliges Dreieck auf dich: $h^2 + (a/2)^2 = s^2$. Pythagoras ist das Werkzeug, mit dem 3D-Körper messbar werden.',
      },
    },
    {
      topicId: '10-aehnlichkeit',
      relation: 'verwandt',
      why: 'Pythagoras-Tripel skalieren mit dem Ähnlichkeitsfaktor',
      bubble: {
        character: 'euklid',
        text: 'Das Tripel (3, 4, 5) bleibt rechtwinklig, wenn du es mit 2, 7 oder $\\pi$ multiplizierst — daraus wird (6, 8, 10), (21, 28, 35) und so weiter. Ähnlichkeit erbt Rechtwinkligkeit. Eine kleine, aber tiefe Symmetrie der Geometrie.',
      },
    },
  ],
};
