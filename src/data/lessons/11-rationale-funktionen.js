export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.definition',
    'objectives.poles',
    'objectives.removable_gaps',
    'objectives.asymptotes',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'f(x) = \\frac{p(x)}{q(x)}, \\quad q(x) \\neq 0' },
    { type: 'text', key: 'explanation.domain' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.poles' },
    { type: 'formula', latex: 'q(x_0) = 0,\\; p(x_0) \\neq 0 \\;\\Rightarrow\\; \\text{Polstelle bei } x_0' },
    { type: 'text', key: 'explanation.removable' },
    { type: 'formula', latex: 'q(x_0) = 0 \\;\\wedge\\; p(x_0) = 0 \\;\\Rightarrow\\; \\text{hebbare L\\\"ucke (kürzen!)}' },
    { type: 'text', key: 'explanation.asymptotes' },
    { type: 'formula', latex: '\\deg(p) < \\deg(q): \\; y = 0 \\quad | \\quad \\deg(p) = \\deg(q): \\; y = \\tfrac{a_n}{b_n}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.definition.title',
      descriptionKey: 'concepts.definition.desc',
      formula: 'f(x) = \\frac{p(x)}{q(x)}',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.pole.title',
      descriptionKey: 'concepts.pole.desc',
      formula: 'x_0 \\text{ Polstelle} \\;\\Leftrightarrow\\; q(x_0) = 0 \\wedge p(x_0) \\neq 0',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.removable_gap.title',
      descriptionKey: 'concepts.removable_gap.desc',
      formula: 'p(x_0) = q(x_0) = 0 \\;\\Rightarrow\\; \\text{hebbar — kürzen!}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.asymptote.title',
      descriptionKey: 'concepts.asymptote.desc',
      formula: '\\lim_{x \\to \\pm\\infty} f(x) = c \\;\\Rightarrow\\; y = c \\text{ ist waagrechte Asymptote}',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.simple_pole.title',
      contextKey: 'examples.simple_pole.context',
      steps: [
        { key: 'examples.simple_pole.step1', formula: 'f(x) = \\frac{1}{x - 2}' },
        { key: 'examples.simple_pole.step2', formula: 'q(x) = x - 2 = 0 \\Rightarrow x = 2' },
        { key: 'examples.simple_pole.step3', formula: 'p(2) = 1 \\neq 0 \\Rightarrow \\text{Polstelle bei } x = 2' },
        { key: 'examples.simple_pole.step4', formula: '\\lim_{x \\to \\pm\\infty} f(x) = 0 \\Rightarrow y = 0 \\text{ Asymptote}' },
      ],
      characterComment: 'examples.simple_pole.amir_comment',
    },
    {
      titleKey: 'examples.removable.title',
      contextKey: 'examples.removable.context',
      steps: [
        { key: 'examples.removable.step1', formula: 'f(x) = \\frac{x^2 - 1}{x - 1}' },
        { key: 'examples.removable.step2', formula: 'p(1) = 0 \\;\\wedge\\; q(1) = 0 \\Rightarrow \\text{hebbare Lücke}' },
        { key: 'examples.removable.step3', formula: 'f(x) = \\frac{(x-1)(x+1)}{x-1} = x + 1 \\quad (x \\neq 1)' },
        { key: 'examples.removable.step4', formula: '\\text{Graph: Gerade } y = x+1 \\text{ mit Loch bei } (1 \\mid 2)' },
      ],
      characterComment: 'examples.removable.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.unit_cost.title',
      descriptionKey: 'realworld.unit_cost.desc',
      icon: '🏭',
      formula: 'k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}',
    },
    {
      titleKey: 'realworld.light_intensity.title',
      descriptionKey: 'realworld.light_intensity.desc',
      icon: '💡',
      formula: 'I(r) = \\frac{P}{4\\pi r^2}',
    },
    {
      titleKey: 'realworld.dilution.title',
      descriptionKey: 'realworld.dilution.desc',
      icon: '🧪',
      formula: 'c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.pole_vs_zero.wrong',
      correctKey: 'mistakes.pole_vs_zero.correct',
      explanationKey: 'mistakes.pole_vs_zero.why',
      wrongFormula: 'f(x) = \\frac{x-3}{x+2}: \\; \\text{Nullstelle bei } x = -2',
      correctFormula: 'f(x) = \\frac{x-3}{x+2}: \\; \\text{Nullstelle bei } x = 3, \\text{ Polstelle bei } x = -2',
      characterWarning: 'mistakes.pole_vs_zero.amir_warning',
    },
    {
      wrongKey: 'mistakes.dont_cancel.wrong',
      correctKey: 'mistakes.dont_cancel.correct',
      explanationKey: 'mistakes.dont_cancel.why',
      wrongFormula: 'f(x) = \\frac{x^2 - 4}{x - 2}: \\text{ Polstelle bei } x = 2',
      correctFormula: 'f(x) = \\frac{(x-2)(x+2)}{x-2} = x + 2: \\text{ hebbare Lücke bei } x = 2',
    },
  ],

  prerequisites: ['10-quad-gleichungen'],

  connections: [
    {
      topicId: '11-kurvendiskussion',
      relation: 'verwandt',
      why: 'Asymptoten erweitern die klassische Kurvendiskussion um neue Eigenschaften',
      bubble: {
        character: 'euklid',
        text: 'In der Kurvendiskussion hast du Extrema, Wendepunkte, Symmetrie betrachtet. Bei rationalen Funktionen kommen Polstellen und Asymptoten dazu — der Graph hat plötzlich Ränder, an denen er ins Unendliche schießt.',
      },
    },
    {
      topicId: '11-integralrechnung',
      relation: 'anwendung',
      why: '1/x ist die Stammfunktions-Quelle des natürlichen Logarithmus',
      bubble: {
        character: 'euklid',
        text: 'Die einfachste rationale Funktion, 1/x, integriert sich zu ln(|x|). Das ist der Brücken-Punkt zwischen Algebra (rationale Funktionen) und Analysis (Logarithmen).',
      },
    },
    {
      topicId: '12-abiturvorbereitung',
      relation: 'fuehrt-zu',
      why: 'Hebbare Lücken sind Standard-Inhalt im Abi',
      bubble: {
        character: 'euklid',
        text: 'Eine der typischen Abi-Aufgaben ist: "Zeige, dass die Lücke hebbar ist und gib die stetige Fortsetzung an." Wer hier vorbereitet ist, hat im Abi einen Schulterklopfer.',
      },
    },
  ],
};
