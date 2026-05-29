export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.conditional_prob',
    'objectives.bayes_theorem',
    'objectives.independence',
    'objectives.tree_diagrams',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}' },
    { type: 'text', key: 'explanation.multiplication_rule' },
    { type: 'formula', latex: 'P(A \\cap B) = P(B) \\cdot P(A \\mid B)' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.bayes' },
    { type: 'formula', latex: 'P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}' },
    { type: 'text', key: 'explanation.total_probability' },
    { type: 'formula', latex: 'P(B) = P(B \\mid A) \\cdot P(A) + P(B \\mid \\bar{A}) \\cdot P(\\bar{A})' },
    { type: 'text', key: 'explanation.independence' },
    { type: 'formula', latex: 'P(A \\mid B) = P(A) \\;\\Leftrightarrow\\; A, B \\text{ unabhängig}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.conditional_prob.title',
      descriptionKey: 'concepts.conditional_prob.desc',
      formula: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.bayes.title',
      descriptionKey: 'concepts.bayes.desc',
      formula: 'P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}',
      highlight: 'green',
    },
    {
      titleKey: 'concepts.independence.title',
      descriptionKey: 'concepts.independence.desc',
      formula: 'P(A \\cap B) = P(A) \\cdot P(B)',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.medical_test.title',
      contextKey: 'examples.medical_test.context',
      steps: [
        { key: 'examples.medical_test.step1', formula: 'P(K) = 0{,}01, \\quad P(+ \\mid K) = 0{,}99, \\quad P(+ \\mid \\bar{K}) = 0{,}05' },
        { key: 'examples.medical_test.step2', formula: 'P(+) = 0{,}99 \\cdot 0{,}01 + 0{,}05 \\cdot 0{,}99 = 0{,}0594' },
        { key: 'examples.medical_test.step3', formula: 'P(K \\mid +) = \\frac{0{,}99 \\cdot 0{,}01}{0{,}0594}' },
        { key: 'examples.medical_test.step4', formula: 'P(K \\mid +) \\approx 0{,}167 \\approx 16{,}7\\%' },
      ],
      characterComment: 'examples.medical_test.amir_comment',
    },
    {
      titleKey: 'examples.spam_filter.title',
      contextKey: 'examples.spam_filter.context',
      steps: [
        { key: 'examples.spam_filter.step1', formula: 'P(S) = 0{,}3, \\quad P(W \\mid S) = 0{,}8, \\quad P(W \\mid \\bar{S}) = 0{,}1' },
        { key: 'examples.spam_filter.step2', formula: 'P(W) = 0{,}8 \\cdot 0{,}3 + 0{,}1 \\cdot 0{,}7 = 0{,}31' },
        { key: 'examples.spam_filter.step3', formula: 'P(S \\mid W) = \\frac{0{,}8 \\cdot 0{,}3}{0{,}31}' },
        { key: 'examples.spam_filter.step4', formula: 'P(S \\mid W) \\approx 0{,}774 \\approx 77{,}4\\%' },
      ],
      characterComment: 'examples.spam_filter.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.recommendation.title',
      descriptionKey: 'realworld.recommendation.desc',
      icon: '🎵',
      formula: 'P(\\text{like}_Y \\mid \\text{like}_X)',
    },
    {
      titleKey: 'realworld.weather.title',
      descriptionKey: 'realworld.weather.desc',
      icon: '🌧️',
    },
    {
      titleKey: 'realworld.fraud_detection.title',
      descriptionKey: 'realworld.fraud_detection.desc',
      icon: '🔒',
      formula: 'P(\\text{Betrug} \\mid \\text{Alarm}) = \\frac{P(\\text{Alarm} \\mid \\text{Betrug}) \\cdot P(\\text{Betrug})}{P(\\text{Alarm})}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.confuse_direction.wrong',
      correctKey: 'mistakes.confuse_direction.correct',
      explanationKey: 'mistakes.confuse_direction.why',
      wrongFormula: 'P(A \\mid B) = P(B \\mid A)',
      correctFormula: 'P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}',
      characterWarning: 'mistakes.confuse_direction.amir_warning',
    },
    {
      wrongKey: 'mistakes.ignore_base_rate.wrong',
      correctKey: 'mistakes.ignore_base_rate.correct',
      explanationKey: 'mistakes.ignore_base_rate.why',
      wrongFormula: 'P(K \\mid +) \\approx P(+ \\mid K) = 0{,}99',
      correctFormula: 'P(K \\mid +) = 0{,}167 \\quad \\text{(wegen } P(K) = 0{,}01\\text{)}',
    },
  ],

  prerequisites: ['10-wahrscheinlichkeit'],

  connections: [
    {
      topicId: '10-wahrscheinlichkeit',
      relation: 'baut-auf',
      why: 'Bedingte Wk macht aus dem Baum ein zweischneidiges Werkzeug — Pfad und Bayes-Inversion',
      bubble: {
        character: 'euklid',
        text: 'Den Baum hast du schon gesehen. Neu ist hier: derselbe Baum lässt sich aus zwei Richtungen lesen. $P(B \\mid A)$ liest nach unten, $P(A \\mid B)$ liest nach oben. Bayes ist die Kunst, den Baum umzukippen.',
      },
    },
    {
      topicId: '12-matrizen',
      relation: 'fuehrt-zu',
      why: 'Übergangsmatrizen (Markov) sind bedingte Wahrscheinlichkeiten in Tabellenform',
      bubble: {
        character: 'euklid',
        text: 'Wenn du in Klasse 12 eine Übergangsmatrix siehst, schau in jede Zelle: dort steht ein $P(\\text{neu} \\mid \\text{alt})$ — also genau das, was du hier lernst. Markov ist bedingte Wk in Bewegung.',
      },
    },
    {
      topicId: '11-binomialverteilung',
      relation: 'verwandt',
      why: 'Unabhängige Wiederholungen sind die Voraussetzung der Binomialformel',
      bubble: {
        character: 'euklid',
        text: 'Der Begriff Unabhängigkeit, den du hier präzise lernst — $P(A \\cap B) = P(A) \\cdot P(B)$ — ist genau die Bedingung, unter der die Binomialformel überhaupt gilt. Hängt zwischen den Zügen etwas zusammen, bricht das Modell.',
      },
    },
  ],
};
