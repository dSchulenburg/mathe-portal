export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.vectors_2d_3d',
    'objectives.vector_operations',
    'objectives.scalar_product',
    'objectives.angle_between_vectors',
    'objectives.cross_product',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: '\\vec{a} = \\begin{pmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{pmatrix}' },
    { type: 'text', key: 'explanation.addition' },
    { type: 'formula', latex: '\\vec{a} + \\vec{b} = \\begin{pmatrix} a_1 + b_1 \\\\ a_2 + b_2 \\\\ a_3 + b_3 \\end{pmatrix}' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.scalar_product' },
    { type: 'formula', latex: '\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3' },
    { type: 'text', key: 'explanation.length' },
    { type: 'formula', latex: '|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}' },
    { type: 'text', key: 'explanation.angle' },
    { type: 'formula', latex: '\\cos(\\alpha) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}' },
    { type: 'text', key: 'explanation.cross_product' },
    { type: 'formula', latex: '\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_2 b_3 - a_3 b_2 \\\\ a_3 b_1 - a_1 b_3 \\\\ a_1 b_2 - a_2 b_1 \\end{pmatrix}' },
    { type: 'text', key: 'explanation.cross_product_meaning' },
    { type: 'formula', latex: '\\vec{a} \\times \\vec{b} \\perp \\vec{a}, \\quad \\vec{a} \\times \\vec{b} \\perp \\vec{b}, \\quad |\\vec{a} \\times \\vec{b}| = |\\vec{a}|\\,|\\vec{b}|\\,\\sin(\\alpha)' },
  ],

  concepts: [
    {
      titleKey: 'concepts.vector.title',
      descriptionKey: 'concepts.vector.desc',
      formula: '\\vec{a} = \\begin{pmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{pmatrix}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.scalar_product.title',
      descriptionKey: 'concepts.scalar_product.desc',
      formula: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)',
      highlight: 'green',
    },
    {
      titleKey: 'concepts.vector_length.title',
      descriptionKey: 'concepts.vector_length.desc',
      formula: '|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.cross_product.title',
      descriptionKey: 'concepts.cross_product.desc',
      formula: '\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_2 b_3 - a_3 b_2 \\\\ a_3 b_1 - a_1 b_3 \\\\ a_1 b_2 - a_2 b_1 \\end{pmatrix}',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.force_addition.title',
      contextKey: 'examples.force_addition.context',
      steps: [
        { key: 'examples.force_addition.step1', formula: '\\vec{F_1} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}, \\quad \\vec{F_2} = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}' },
        { key: 'examples.force_addition.step2', formula: '\\vec{F} = \\vec{F_1} + \\vec{F_2} = \\begin{pmatrix} 2 \\\\ 6 \\end{pmatrix}' },
        { key: 'examples.force_addition.step3', formula: '|\\vec{F}| = \\sqrt{2^2 + 6^2} = \\sqrt{40}' },
        { key: 'examples.force_addition.step4', formula: '|\\vec{F}| = 2\\sqrt{10} \\approx 6{,}32\\,\\text{N}' },
      ],
      characterComment: 'examples.force_addition.amir_comment',
    },
    {
      titleKey: 'examples.angle_vectors.title',
      contextKey: 'examples.angle_vectors.context',
      steps: [
        { key: 'examples.angle_vectors.step1', formula: '\\vec{a} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}, \\quad \\vec{b} = \\begin{pmatrix} 4 \\\\ -1 \\\\ 2 \\end{pmatrix}' },
        { key: 'examples.angle_vectors.step2', formula: '\\vec{a} \\cdot \\vec{b} = 1 \\cdot 4 + 2 \\cdot (-1) + 3 \\cdot 2 = 8' },
        { key: 'examples.angle_vectors.step3', formula: '|\\vec{a}| = \\sqrt{14}, \\quad |\\vec{b}| = \\sqrt{21}' },
        { key: 'examples.angle_vectors.step4', formula: '\\cos(\\alpha) = \\frac{8}{\\sqrt{14} \\cdot \\sqrt{21}} \\approx 0{,}467 \\;\\Rightarrow\\; \\alpha \\approx 62{,}2°' },
      ],
      characterComment: 'examples.angle_vectors.amir_comment',
    },
    {
      titleKey: 'examples.cross_product.title',
      contextKey: 'examples.cross_product.context',
      steps: [
        { key: 'examples.cross_product.step1', formula: '\\vec{a} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\quad \\vec{b} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 0 \\end{pmatrix}' },
        { key: 'examples.cross_product.step2', formula: '\\vec{a} \\times \\vec{b} = \\begin{pmatrix} 1 \\cdot 0 - 0 \\cdot 3 \\\\ 0 \\cdot 1 - 2 \\cdot 0 \\\\ 2 \\cdot 3 - 1 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 5 \\end{pmatrix}' },
        { key: 'examples.cross_product.step3', formula: '|\\vec{a} \\times \\vec{b}| = 5 = \\text{Flächeninhalt des Parallelogramms aus } \\vec{a} \\text{ und } \\vec{b}' },
        { key: 'examples.cross_product.step4', formula: '\\text{Probe: } \\vec{a} \\cdot (\\vec{a} \\times \\vec{b}) = 2 \\cdot 0 + 1 \\cdot 0 + 0 \\cdot 5 = 0 \\;\\checkmark' },
      ],
      characterComment: 'examples.cross_product.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.embeddings.title',
      descriptionKey: 'realworld.embeddings.desc',
      icon: '🎵',
      formula: '\\text{sim}(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}',
    },
    {
      titleKey: 'realworld.navigation.title',
      descriptionKey: 'realworld.navigation.desc',
      icon: '🧭',
    },
    {
      titleKey: 'realworld.game_physics.title',
      descriptionKey: 'realworld.game_physics.desc',
      icon: '🎮',
      formula: '\\vec{v}_{\\text{neu}} = \\vec{v} + \\vec{a} \\cdot \\Delta t',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.scalar_vs_cross.wrong',
      correctKey: 'mistakes.scalar_vs_cross.correct',
      explanationKey: 'mistakes.scalar_vs_cross.why',
      wrongFormula: '\\vec{a} \\cdot \\vec{b} = \\begin{pmatrix} a_1 b_1 \\\\ a_2 b_2 \\\\ a_3 b_3 \\end{pmatrix}',
      correctFormula: '\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 \\in \\mathbb{R}',
      characterWarning: 'mistakes.scalar_vs_cross.amir_warning',
    },
    {
      wrongKey: 'mistakes.length_sum.wrong',
      correctKey: 'mistakes.length_sum.correct',
      explanationKey: 'mistakes.length_sum.why',
      wrongFormula: '|\\vec{a}| = a_1 + a_2 + a_3',
      correctFormula: '|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}',
    },
    {
      wrongKey: 'mistakes.cross_commutative.wrong',
      correctKey: 'mistakes.cross_commutative.correct',
      explanationKey: 'mistakes.cross_commutative.why',
      wrongFormula: '\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{a}',
      correctFormula: '\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a}) \\quad \\text{(antikommutativ)}',
    },
  ],

  prerequisites: ['10-pythagoras'],

  connections: [
    {
      topicId: '10-pythagoras',
      relation: 'baut-auf',
      why: 'Vektorlänge ist Pythagoras in n Dimensionen',
      bubble: {
        character: 'euklid',
        text: 'Schau dir $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ noch einmal an — das ist der Satz des Pythagoras, einmal für die Bodendiagonale und dann nochmal für die Raumdiagonale, in einer einzigen Wurzel zusammengefasst. Du kannst das beliebig fortsetzen.',
      },
    },
    {
      topicId: '10-trigonometrie',
      relation: 'baut-auf',
      why: 'Skalarprodukt nutzt cos(α) — der Winkel zwischen Vektoren',
      bubble: {
        character: 'euklid',
        text: 'Der Kosinus, den du am Dreieck eingeführt hast, kommt hier wieder: $\\cos(\\alpha) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|\\,|\\vec{b}|}$. So misst man Winkel zwischen Vektoren — und genau so misst eine KI, wie ähnlich sich zwei Wörter sind.',
      },
    },
    {
      topicId: '12-matrizen',
      relation: 'fuehrt-zu',
      why: 'Matrizen wirken auf Vektoren — Drehung, Spiegelung, Übergang',
      bubble: {
        character: 'euklid',
        text: 'Vektoren sind Punkte und Richtungen. In Klasse 12 lernst du Matrizen kennen — das sind die Werkzeuge, die diese Punkte verschieben, drehen und strecken. Aus einem Vektor wird $M \\cdot \\vec{v}$, und plötzlich rotiert die ganze Spielwelt.',
      },
    },
    {
      topicId: '12-analytische-geometrie',
      relation: 'fuehrt-zu',
      why: 'Geraden und Ebenen werden mit Vektoren beschrieben',
      bubble: {
        character: 'euklid',
        text: 'Ein einzelner Vektor ist nur ein Pfeil. Zwei Vektoren spannen eine Ebene auf, drei einen Raum. In Klasse 12 wirst du daraus Geradengleichungen, Ebenengleichungen und Schnittpunkte bauen — die ganze analytische Geometrie ist Vektorrechnung in Anwendung.',
      },
    },
  ],
};
