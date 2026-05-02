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
  ],

  prerequisites: ['10-pythagoras'],
};
