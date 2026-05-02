export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.exam_strategy',
    'objectives.cross_topic_connections',
    'objectives.time_management',
    'objectives.error_prevention',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'callout', key: 'explanation.kai_rallying', character: 'kai' },
    { type: 'text', key: 'explanation.structure' },
    { type: 'formula', latex: '\\text{Punkte} = \\text{Analysis} + \\text{Analytische Geometrie} + \\text{Stochastik}' },
    { type: 'text', key: 'explanation.time_strategy' },
    { type: 'formula', latex: 't_{\\text{Aufgabe}} \\approx \\frac{\\text{Punkte}_{\\text{Aufgabe}}}{\\text{Punkte}_{\\text{gesamt}}} \\cdot t_{\\text{gesamt}}' },
    { type: 'callout', key: 'explanation.mia_wisdom', character: 'mia' },
    { type: 'text', key: 'explanation.checking' },
    { type: 'callout', key: 'explanation.amir_data', character: 'amir' },
    { type: 'text', key: 'explanation.confidence' },
  ],

  concepts: [
    {
      titleKey: 'concepts.read_then_plan.title',
      descriptionKey: 'concepts.read_then_plan.desc',
      formula: '\\text{Lesen} \\to \\text{Planen} \\to \\text{Rechnen} \\to \\text{Prüfen}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.point_maximizing.title',
      descriptionKey: 'concepts.point_maximizing.desc',
      formula: '\\text{Effizienz} = \\frac{\\text{Punkte}}{\\text{Zeit}} \\;\\Rightarrow\\; \\text{Leichte zuerst!}',
      highlight: 'green',
    },
    {
      titleKey: 'concepts.plausibility_check.title',
      descriptionKey: 'concepts.plausibility_check.desc',
      formula: '\\text{Einheiten, Vorzeichen, Grenzwerte, Skizze}',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.mixed_analysis.title',
      contextKey: 'examples.mixed_analysis.context',
      steps: [
        { key: 'examples.mixed_analysis.step1', formula: 'f(x) = (2x - 1) \\cdot e^{-x}' },
        { key: 'examples.mixed_analysis.step2', formula: 'f\'(x) = 2 \\cdot e^{-x} + (2x-1)\\cdot(-e^{-x}) = (3 - 2x) \\cdot e^{-x}' },
        { key: 'examples.mixed_analysis.step3', formula: 'f\'(x) = 0 \\;\\Rightarrow\\; x = 1{,}5, \\quad f(1{,}5) = 2 \\cdot e^{-1{,}5} \\approx 0{,}446' },
        { key: 'examples.mixed_analysis.step4', formula: 'A = \\int_0^3 f(x)\\,\\mathrm{d}x = \\left[(-2x+3) \\cdot e^{-x}\\right]_0^3 \\approx 2{,}85\\,\\text{FE}' },
      ],
      characterComment: 'examples.mixed_analysis.mia_comment',
    },
    {
      titleKey: 'examples.mixed_stochastik.title',
      contextKey: 'examples.mixed_stochastik.context',
      steps: [
        { key: 'examples.mixed_stochastik.step1', formula: 'X \\sim B(50;\\, 0{,}08), \\quad E(X) = 4, \\quad \\sigma \\approx 1{,}92' },
        { key: 'examples.mixed_stochastik.step2', formula: 'H_0\\colon p = 0{,}08, \\quad H_1\\colon p > 0{,}08, \\quad \\alpha = 0{,}05' },
        { key: 'examples.mixed_stochastik.step3', formula: 'P(X \\geq 8) = 1 - P(X \\leq 7) \\approx 0{,}052 > 0{,}05' },
        { key: 'examples.mixed_stochastik.step4', formula: 'P(X \\geq 9) \\approx 0{,}021 < 0{,}05 \\;\\Rightarrow\\; k_{\\text{krit}} = 9' },
      ],
      characterComment: 'examples.mixed_stochastik.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.release_day.title',
      descriptionKey: 'realworld.release_day.desc',
      icon: '🚀',
    },
    {
      titleKey: 'realworld.project_management.title',
      descriptionKey: 'realworld.project_management.desc',
      icon: '📋',
    },
    {
      titleKey: 'realworld.lifelong_learning.title',
      descriptionKey: 'realworld.lifelong_learning.desc',
      icon: '🎓',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.no_units_context.wrong',
      correctKey: 'mistakes.no_units_context.correct',
      explanationKey: 'mistakes.no_units_context.why',
      wrongFormula: 'A = 12{,}5',
      correctFormula: 'A = 12{,}5\\,\\text{FE} \\;\\hat{=}\\; 12{,}5\\,\\text{m}^2',
      characterWarning: 'mistakes.no_units_context.kai_warning',
    },
    {
      wrongKey: 'mistakes.skip_plausibility.wrong',
      correctKey: 'mistakes.skip_plausibility.correct',
      explanationKey: 'mistakes.skip_plausibility.why',
      wrongFormula: 'P(X = 5) = 1{,}3 \\quad \\text{(nicht hinterfragt)}',
      correctFormula: '0 \\leq P(X = k) \\leq 1 \\;\\Rightarrow\\; \\text{Rechenfehler suchen!}',
      characterWarning: 'mistakes.skip_plausibility.mia_warning',
    },
  ],

  prerequisites: [],

  connections: [
    {
      topicId: '11-kurvendiskussion',
      relation: 'baut-auf',
      why: 'Vollständige Funktionsuntersuchung ist die wiederkehrende Standardaufgabe',
      bubble: {
        character: 'euklid',
        text: 'Wenn du nur eines aus Klasse 11 mitnehmen sollst: das Schema der Kurvendiskussion. Nullstellen, Extrema, Wendepunkte, Symmetrie, Skizze — in jeder Abiklausur stehen damit 30-40% der Analysis-Punkte zur Disposition.',
      },
    },
    {
      topicId: '12-e-funktion-ln',
      relation: 'baut-auf',
      why: 'e-Funktionen sind die häufigste Funktionsklasse im Abi',
      bubble: {
        character: 'euklid',
        text: 'Ableitungen mit der Produktregel von $f(x) = (ax+b) \\cdot e^{cx}$ — kommt fast jedes Jahr vor. Wer hier sicher ist, spart sich Stress am entscheidenden Tag.',
      },
    },
    {
      topicId: '12-integralrechnung-vertieft',
      relation: 'baut-auf',
      why: 'Flächen, Volumen und Mittelwerte liefern die zweite Hälfte der Analysis-Punkte',
      bubble: {
        character: 'euklid',
        text: 'Substitution, partielle Integration, Fläche zwischen zwei Kurven — das sind die typischen Aufgaben. Plus die Modellierung: Wofür steht das Integral im Sachzusammenhang? Diese Frage trennt 12 Punkte von 15 Punkten.',
      },
    },
    {
      topicId: '12-matrizen',
      relation: 'baut-auf',
      why: 'Übergangsmatrizen und Fixvektor sind das algebraische Standard-Set',
      bubble: {
        character: 'euklid',
        text: 'Wer im Algebra-Teil eine Markovkette sieht, sollte sofort den Fixvektor angehen — das ist meist die Punktelawine. $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ ist die Schlüsselgleichung.',
      },
    },
    {
      topicId: '12-hypothesentests',
      relation: 'baut-auf',
      why: 'Hypothesentests sind im Stochastik-Teil fast immer dabei',
      bubble: {
        character: 'euklid',
        text: 'Linksseitig, rechtsseitig, zweiseitig — ein klares Schema, das im Abi reproduzierbar Punkte bringt. Achte auf den α-Fehler und auf den Übergang zur Normalverteilung bei großen n.',
      },
    },
  ],
};
