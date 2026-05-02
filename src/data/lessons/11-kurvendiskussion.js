export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.zeros_extrema',
    'objectives.inflection_points',
    'objectives.monotonicity_symmetry',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'f(x_0) = 0 \\quad \\Rightarrow \\quad x_0 \\text{ ist Nullstelle}' },
    { type: 'text', key: 'explanation.extrema' },
    { type: 'formula', latex: 'f\'(x_0) = 0 \\;\\wedge\\; f\'\'(x_0) \\neq 0 \\quad \\Rightarrow \\quad \\text{Extremstelle}' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.inflection' },
    { type: 'formula', latex: 'f\'\'(x_0) = 0 \\;\\wedge\\; f\'\'\'(x_0) \\neq 0 \\quad \\Rightarrow \\quad \\text{Wendepunkt}' },
    { type: 'text', key: 'explanation.monotonicity' },
    { type: 'formula', latex: 'f\'(x) > 0 \\Rightarrow \\text{streng monoton steigend}, \\quad f\'(x) < 0 \\Rightarrow \\text{streng monoton fallend}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.extrema.title',
      descriptionKey: 'concepts.extrema.desc',
      formula: 'f\'(x_0) = 0: \\quad f\'\'(x_0) < 0 \\Rightarrow \\text{Maximum}, \\quad f\'\'(x_0) > 0 \\Rightarrow \\text{Minimum}',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.inflection.title',
      descriptionKey: 'concepts.inflection.desc',
      formula: 'f\'\'(x_0) = 0 \\;\\wedge\\; f\'\'\'(x_0) \\neq 0',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.symmetry.title',
      descriptionKey: 'concepts.symmetry.desc',
      formula: 'f(-x) = f(x) \\;\\Rightarrow\\; \\text{achsensymmetrisch}, \\quad f(-x) = -f(x) \\;\\Rightarrow\\; \\text{punktsymmetrisch}',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.complete_analysis.title',
      contextKey: 'examples.complete_analysis.context',
      steps: [
        { key: 'examples.complete_analysis.step1', formula: 'f(x) = x^3 - 3x^2 + 2' },
        { key: 'examples.complete_analysis.step2', formula: 'f\'(x) = 3x^2 - 6x = 3x(x - 2) = 0 \\quad \\Rightarrow \\quad x_1 = 0,\\; x_2 = 2' },
        { key: 'examples.complete_analysis.step3', formula: 'f\'\'(x) = 6x - 6: \\quad f\'\'(0) = -6 < 0 \\;\\Rightarrow\\; \\text{Max},\\; f\'\'(2) = 6 > 0 \\;\\Rightarrow\\; \\text{Min}' },
        { key: 'examples.complete_analysis.step4', formula: 'f\'\'(x) = 0 \\;\\Rightarrow\\; x = 1,\\; f\'\'\'(1) = 6 \\neq 0 \\;\\Rightarrow\\; \\text{Wendepunkt bei } (1 \\mid 0)' },
      ],
      characterComment: 'examples.complete_analysis.amir_comment',
    },
    {
      titleKey: 'examples.graph_properties.title',
      contextKey: 'examples.graph_properties.context',
      steps: [
        { key: 'examples.graph_properties.step1', formula: 'f(x) = -x^4 + 4x^2' },
        { key: 'examples.graph_properties.step2', formula: 'f(-x) = -(-x)^4 + 4(-x)^2 = -x^4 + 4x^2 = f(x) \\;\\Rightarrow\\; \\text{achsensymmetrisch}' },
        { key: 'examples.graph_properties.step3', formula: 'f\'(x) = -4x^3 + 8x = 0 \\;\\Rightarrow\\; x_1 = 0,\\; x_{2{,}3} = \\pm\\sqrt{2}' },
        { key: 'examples.graph_properties.step4', formula: 'f(0) = 0 \\;\\text{(Min)},\\; f(\\pm\\sqrt{2}) = 4 \\;\\text{(Max)}' },
      ],
      characterComment: 'examples.graph_properties.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.data_distribution.title',
      descriptionKey: 'realworld.data_distribution.desc',
      icon: '📊',
      formula: 'f\'\'(x_0) = 0 \\;\\Rightarrow\\; \\text{Wendepunkt der Verteilungskurve}',
    },
    {
      titleKey: 'realworld.profit_analysis.title',
      descriptionKey: 'realworld.profit_analysis.desc',
      icon: '💹',
    },
    {
      titleKey: 'realworld.population_growth.title',
      descriptionKey: 'realworld.population_growth.desc',
      icon: '🌍',
      formula: 'P\'\'(t) = 0 \\;\\Rightarrow\\; \\text{Wachstum verlangsamt sich}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.extrema_without_check.wrong',
      correctKey: 'mistakes.extrema_without_check.correct',
      explanationKey: 'mistakes.extrema_without_check.why',
      wrongFormula: 'f\'(x_0) = 0 \\;\\Rightarrow\\; \\text{Extremstelle}',
      correctFormula: 'f\'(x_0) = 0 \\;\\wedge\\; f\'\'(x_0) \\neq 0 \\;\\Rightarrow\\; \\text{Extremstelle}',
      characterWarning: 'mistakes.extrema_without_check.amir_warning',
    },
    {
      wrongKey: 'mistakes.inflection_second_only.wrong',
      correctKey: 'mistakes.inflection_second_only.correct',
      explanationKey: 'mistakes.inflection_second_only.why',
      wrongFormula: 'f\'\'(x_0) = 0 \\;\\Rightarrow\\; \\text{Wendepunkt}',
      correctFormula: 'f\'\'(x_0) = 0 \\;\\wedge\\; f\'\'\'(x_0) \\neq 0 \\;\\Rightarrow\\; \\text{Wendepunkt}',
      characterWarning: 'mistakes.inflection_second_only.amir_warning',
    },
  ],

  prerequisites: ['11-ableitungsregeln'],

  connections: [
    {
      topicId: '11-ableitungsregeln',
      relation: 'baut-auf',
      why: 'Ohne sichere Ableitungen geht keine Kurvendiskussion — sie ist die Anwendung',
      bubble: {
        character: 'euklid',
        text: 'Hier zahlt sich jeder Abend aus, an dem du Ableitungsregeln geübt hast. f\', f\'\', manchmal f\'\'\' — die Regeln sind das Werkzeug, die Diskussion ist die Werkstatt. Wenn dir die Regeln noch wackeln, geh nochmal zurück.',
      },
    },
    {
      topicId: '11-extremwertaufgaben',
      relation: 'fuehrt-zu',
      why: 'Extremwertaufgaben sind angewandte Kurvendiskussion mit Sachkontext',
      bubble: {
        character: 'euklid',
        text: 'Was hier abstrakt ist — Extremstelle finden — wird gleich praktisch: optimale Dosengröße, maximaler Gewinn, kürzester Weg. Die Methode bleibt: $f\'(x) = 0$ setzen, mit $f\'\'$ prüfen.',
      },
    },
    {
      topicId: '11-rationale-funktionen',
      relation: 'verwandt',
      why: 'Polstellen und Asymptoten erweitern die Kurvendiskussion auf Brüche',
      bubble: {
        character: 'euklid',
        text: 'Bisher hattest du Polynome — die haben weder Polstellen noch waagrechte Asymptoten. Bei rationalen Funktionen kommen diese Phänomene dazu. Die Methode der Kurvendiskussion bleibt, sie wird nur um zwei neue Kapitel reicher.',
      },
    },
    {
      topicId: '12-abiturvorbereitung',
      relation: 'fuehrt-zu',
      why: 'Die Standardaufgabe „Untersuchen Sie f auf …" ist im Abi allgegenwärtig',
      bubble: {
        character: 'euklid',
        text: 'In jeder Abiklausur findest du eine vollständige Kurvendiskussion — meist mit einer e- oder Polynomfunktion. Wenn du das Schema „Nullstellen, Extrema, Wendepunkte, Symmetrie, Skizze" verinnerlicht hast, sind 30-40% der Analysis-Punkte sicher.',
      },
    },
  ],
};
