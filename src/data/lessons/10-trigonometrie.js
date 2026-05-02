export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.sin_cos_tan',
    'objectives.unit_circle',
    'objectives.angle_calculations',
    'objectives.real_problems',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: '\\sin(\\alpha) = \\frac{\\text{Gegenkathete}}{\\text{Hypotenuse}}' },
    { type: 'formula', latex: '\\cos(\\alpha) = \\frac{\\text{Ankathete}}{\\text{Hypotenuse}}' },
    { type: 'formula', latex: '\\tan(\\alpha) = \\frac{\\text{Gegenkathete}}{\\text{Ankathete}}' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.unit_circle' },
    { type: 'formula', latex: '\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1' },
    { type: 'text', key: 'explanation.special_angles' },
  ],

  concepts: [
    {
      titleKey: 'concepts.sine.title',
      descriptionKey: 'concepts.sine.desc',
      formula: '\\sin(\\alpha) = \\frac{a}{c}',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.cosine.title',
      descriptionKey: 'concepts.cosine.desc',
      formula: '\\cos(\\alpha) = \\frac{b}{c}',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.tangent.title',
      descriptionKey: 'concepts.tangent.desc',
      formula: '\\tan(\\alpha) = \\frac{a}{b} = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.unit_circle.title',
      descriptionKey: 'concepts.unit_circle.desc',
      formula: 'P(\\cos(\\alpha) \\mid \\sin(\\alpha))',
      highlight: 'cyan',
    },
  ],

  examples: [
    {
      titleKey: 'examples.height_tan.title',
      contextKey: 'examples.height_tan.context',
      steps: [
        { key: 'examples.height_tan.step1', formula: '\\tan(35°) = \\frac{h}{50\\,\\text{m}}' },
        { key: 'examples.height_tan.step2', formula: 'h = 50\\,\\text{m} \\cdot \\tan(35°)' },
        { key: 'examples.height_tan.step3', formula: 'h = 50 \\cdot 0{,}7002 \\approx 35{,}0\\,\\text{m}' },
      ],
      characterComment: 'examples.height_tan.mia_comment',
    },
    {
      titleKey: 'examples.unit_circle.title',
      contextKey: 'examples.unit_circle.context',
      steps: [
        { key: 'examples.unit_circle.step1', formula: '\\alpha = 60° = \\frac{\\pi}{3}' },
        { key: 'examples.unit_circle.step2', formula: '\\sin(60°) = \\frac{\\sqrt{3}}{2} \\approx 0{,}866' },
        { key: 'examples.unit_circle.step3', formula: '\\cos(60°) = \\frac{1}{2} = 0{,}5' },
        { key: 'examples.unit_circle.step4', formula: 'P\\left(0{,}5 \\mid \\frac{\\sqrt{3}}{2}\\right)' },
      ],
      characterComment: 'examples.unit_circle.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.compass.title',
      descriptionKey: 'realworld.compass.desc',
      icon: '🧭',
      formula: '\\theta = \\text{atan2}(y, x)',
    },
    {
      titleKey: 'realworld.building_height.title',
      descriptionKey: 'realworld.building_height.desc',
      icon: '🏗️',
      formula: 'h = d \\cdot \\tan(\\alpha) + h_0',
    },
    {
      titleKey: 'realworld.music.title',
      descriptionKey: 'realworld.music.desc',
      icon: '🎵',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.sin_cos_swap.wrong',
      correctKey: 'mistakes.sin_cos_swap.correct',
      explanationKey: 'mistakes.sin_cos_swap.why',
      wrongFormula: '\\sin(\\alpha) = \\frac{\\text{Ankathete}}{\\text{Hypotenuse}}',
      correctFormula: '\\sin(\\alpha) = \\frac{\\text{Gegenkathete}}{\\text{Hypotenuse}}',
      characterWarning: 'mistakes.sin_cos_swap.mia_warning',
    },
    {
      wrongKey: 'mistakes.deg_rad.wrong',
      correctKey: 'mistakes.deg_rad.correct',
      explanationKey: 'mistakes.deg_rad.why',
      wrongFormula: '\\sin(90) = 0{,}894 \\quad \\text{(RAD-Modus!)}',
      correctFormula: '\\sin(90°) = 1 \\quad \\text{(DEG-Modus)}',
    },
  ],

  prerequisites: ['10-pythagoras', '10-aehnlichkeit'],

  connections: [
    {
      topicId: '10-aehnlichkeit',
      relation: 'baut-auf',
      why: 'Trig-Funktionen sind konstante Seitenverhältnisse bei festem Winkel — also ähnliche Dreiecke',
      bubble: {
        character: 'euklid',
        text: 'Sinus, Kosinus, Tangens — das sind nichts anderes als Seitenverhältnisse. Und weil ähnliche Dreiecke gleiche Verhältnisse haben, hängt der Wert nur vom Winkel ab. Strahlensatz und Trig sind dieselbe Idee in zwei Verkleidungen.',
      },
    },
    {
      topicId: '10-pythagoras',
      relation: 'baut-auf',
      why: 'sin²(α) + cos²(α) = 1 ist Pythagoras am Einheitskreis',
      bubble: {
        character: 'euklid',
        text: 'Wenn ein Punkt auf dem Einheitskreis bei (cos α | sin α) liegt, dann ist sein Abstand zum Ursprung 1. Pythagoras: cos²(α) + sin²(α) = 1². Die wichtigste Identität der Trigonometrie ist nur Pythagoras im neuen Kostüm.',
      },
    },
    {
      topicId: '10-periodisch',
      relation: 'fuehrt-zu',
      why: 'Periodische Vorgänge werden mit sin/cos modelliert',
      bubble: {
        character: 'euklid',
        text: 'Jede Schwingung — Gezeiten, Herzschlag, Wechselstrom — wird mit Sinus und Kosinus beschrieben. Das ist die direkte Anwendung dessen, was du hier lernst.',
      },
    },
    {
      topicId: '11-vektorrechnung',
      relation: 'fuehrt-zu',
      why: 'Skalarprodukt: a·b = |a|·|b|·cos(α) — Trig macht Vektoren messbar',
      bubble: {
        character: 'euklid',
        text: 'In Klasse 11 wirst du sehen, wie der Winkel zwischen zwei Vektoren über cos(α) ausgedrückt wird. Embeddings in der KI funktionieren genauso — der Sinn von Trig reicht weit über das Dreieck hinaus.',
      },
    },
  ],
};
