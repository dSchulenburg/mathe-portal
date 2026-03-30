export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.matrix_operations',
    'objectives.transformation_matrices',
    'objectives.stochastic_matrices',
    'objectives.inverse_matrix',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'A \\cdot B = C, \\quad c_{ij} = \\sum_{k=1}^{n} a_{ik} \\cdot b_{kj}' },
    { type: 'text', key: 'explanation.transformation' },
    { type: 'formula', latex: '\\vec{x}\' = M \\cdot \\vec{x} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\cdot \\begin{pmatrix} x \\\\ y \\end{pmatrix}' },
    { type: 'callout', key: 'explanation.kai_tip', character: 'kai' },
    { type: 'text', key: 'explanation.stochastic' },
    { type: 'formula', latex: '\\vec{v}_{n+1} = T \\cdot \\vec{v}_n, \\quad \\sum_{i} t_{ij} = 1' },
    { type: 'text', key: 'explanation.inverse' },
    { type: 'formula', latex: 'A \\cdot A^{-1} = I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.matrix_multiplication.title',
      descriptionKey: 'concepts.matrix_multiplication.desc',
      formula: '(A \\cdot B)_{ij} = \\sum_{k} a_{ik} \\cdot b_{kj}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.transformation_matrix.title',
      descriptionKey: 'concepts.transformation_matrix.desc',
      formula: 'R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.stochastic_matrix.title',
      descriptionKey: 'concepts.stochastic_matrix.desc',
      formula: 'T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}',
      highlight: 'green',
    },
  ],

  examples: [
    {
      titleKey: 'examples.3d_rotation.title',
      contextKey: 'examples.3d_rotation.context',
      steps: [
        { key: 'examples.3d_rotation.step1', formula: 'R_z(90°) = \\begin{pmatrix} 0 & -1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}' },
        { key: 'examples.3d_rotation.step2', formula: '\\vec{p} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 5 \\end{pmatrix}' },
        { key: 'examples.3d_rotation.step3', formula: '\\vec{p}\' = R_z \\cdot \\vec{p} = \\begin{pmatrix} 0 \\cdot 3 + (-1) \\cdot 0 + 0 \\cdot 5 \\\\ 1 \\cdot 3 + 0 \\cdot 0 + 0 \\cdot 5 \\\\ 0 \\cdot 3 + 0 \\cdot 0 + 1 \\cdot 5 \\end{pmatrix}' },
        { key: 'examples.3d_rotation.step4', formula: '\\vec{p}\' = \\begin{pmatrix} 0 \\\\ 3 \\\\ 5 \\end{pmatrix} \\;\\Rightarrow\\; \\text{90°-Drehung um z-Achse}' },
      ],
      characterComment: 'examples.3d_rotation.kai_comment',
    },
    {
      titleKey: 'examples.player_states.title',
      contextKey: 'examples.player_states.context',
      steps: [
        { key: 'examples.player_states.step1', formula: 'T = \\begin{pmatrix} 0{,}7 & 0{,}2 \\\\ 0{,}3 & 0{,}8 \\end{pmatrix}, \\quad \\vec{v}_0 = \\begin{pmatrix} 0{,}6 \\\\ 0{,}4 \\end{pmatrix}' },
        { key: 'examples.player_states.step2', formula: '\\vec{v}_1 = T \\cdot \\vec{v}_0 = \\begin{pmatrix} 0{,}7 \\cdot 0{,}6 + 0{,}2 \\cdot 0{,}4 \\\\ 0{,}3 \\cdot 0{,}6 + 0{,}8 \\cdot 0{,}4 \\end{pmatrix} = \\begin{pmatrix} 0{,}50 \\\\ 0{,}50 \\end{pmatrix}' },
        { key: 'examples.player_states.step3', formula: 'T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}} \\;\\Rightarrow\\; 0{,}7x + 0{,}2y = x,\\; x + y = 1' },
        { key: 'examples.player_states.step4', formula: '\\vec{v}_{\\text{fix}} = \\begin{pmatrix} 0{,}4 \\\\ 0{,}6 \\end{pmatrix} \\;\\Rightarrow\\; \\text{40\\% Explore, 60\\% Fight}' },
      ],
      characterComment: 'examples.player_states.kai_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.computer_graphics.title',
      descriptionKey: 'realworld.computer_graphics.desc',
      icon: '🎮',
      formula: 'M_{\\text{MVP}} = M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}',
    },
    {
      titleKey: 'realworld.google_pagerank.title',
      descriptionKey: 'realworld.google_pagerank.desc',
      icon: '🔍',
      formula: '\\vec{r} = T \\cdot \\vec{r}',
    },
    {
      titleKey: 'realworld.robotics.title',
      descriptionKey: 'realworld.robotics.desc',
      icon: '🤖',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.commutative.wrong',
      correctKey: 'mistakes.commutative.correct',
      explanationKey: 'mistakes.commutative.why',
      wrongFormula: 'A \\cdot B = B \\cdot A',
      correctFormula: 'A \\cdot B \\neq B \\cdot A \\quad \\text{(i.\\,A.)}',
      characterWarning: 'mistakes.commutative.kai_warning',
    },
    {
      wrongKey: 'mistakes.stochastic_rows_cols.wrong',
      correctKey: 'mistakes.stochastic_rows_cols.correct',
      explanationKey: 'mistakes.stochastic_rows_cols.why',
      wrongFormula: '\\sum_{j} t_{ij} = 1 \\quad \\text{(Zeilensumme)}',
      correctFormula: '\\sum_{i} t_{ij} = 1 \\quad \\text{(Spaltensumme bei Spaltenvektor)}',
    },
  ],

  prerequisites: ['11-vektorrechnung'],
};
