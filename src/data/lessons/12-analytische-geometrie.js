export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.plane_equations',
    'objectives.line_plane_intersection',
    'objectives.distances_3d',
    'objectives.cross_product',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'E\\colon \\vec{x} = \\vec{a} + r \\cdot \\vec{u} + s \\cdot \\vec{v}' },
    { type: 'text', key: 'explanation.normal_form' },
    { type: 'formula', latex: 'E\\colon \\vec{n} \\cdot (\\vec{x} - \\vec{a}) = 0 \\quad \\Leftrightarrow \\quad n_1 x_1 + n_2 x_2 + n_3 x_3 = d' },
    { type: 'callout', key: 'explanation.kai_tip', character: 'kai' },
    { type: 'text', key: 'explanation.cross_product' },
    { type: 'formula', latex: '\\vec{u} \\times \\vec{v} = \\begin{pmatrix} u_2 v_3 - u_3 v_2 \\\\ u_3 v_1 - u_1 v_3 \\\\ u_1 v_2 - u_2 v_1 \\end{pmatrix}' },
    { type: 'text', key: 'explanation.distance_point_plane' },
    { type: 'formula', latex: 'd(P, E) = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.plane_equation.title',
      descriptionKey: 'concepts.plane_equation.desc',
      formula: 'E\\colon n_1 x_1 + n_2 x_2 + n_3 x_3 = d',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.cross_product.title',
      descriptionKey: 'concepts.cross_product.desc',
      formula: '\\vec{n} = \\vec{u} \\times \\vec{v} \\perp E',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.distance_formula.title',
      descriptionKey: 'concepts.distance_formula.desc',
      formula: 'd(P, E) = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}',
      highlight: 'green',
    },
  ],

  examples: [
    {
      titleKey: 'examples.game_world_plane.title',
      contextKey: 'examples.game_world_plane.context',
      steps: [
        { key: 'examples.game_world_plane.step1', formula: 'A(1|0|2),\\; B(3|1|0),\\; C(0|4|1)' },
        { key: 'examples.game_world_plane.step2', formula: '\\vec{u} = \\overrightarrow{AB} = \\begin{pmatrix} 2\\\\1\\\\-2 \\end{pmatrix},\\; \\vec{v} = \\overrightarrow{AC} = \\begin{pmatrix} -1\\\\4\\\\-1 \\end{pmatrix}' },
        { key: 'examples.game_world_plane.step3', formula: '\\vec{n} = \\vec{u} \\times \\vec{v} = \\begin{pmatrix} 1 \\cdot(-1) - (-2) \\cdot 4 \\\\ (-2)\\cdot(-1) - 2\\cdot(-1) \\\\ 2 \\cdot 4 - 1 \\cdot (-1) \\end{pmatrix} = \\begin{pmatrix} 7\\\\4\\\\9 \\end{pmatrix}' },
        { key: 'examples.game_world_plane.step4', formula: 'E\\colon 7x_1 + 4x_2 + 9x_3 = 25' },
      ],
      characterComment: 'examples.game_world_plane.kai_comment',
    },
    {
      titleKey: 'examples.collision_detection.title',
      contextKey: 'examples.collision_detection.context',
      steps: [
        { key: 'examples.collision_detection.step1', formula: 'g\\colon \\vec{x} = \\begin{pmatrix} 1\\\\2\\\\3 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 2\\\\-1\\\\1 \\end{pmatrix}, \\quad E\\colon 2x_1 + x_2 - x_3 = 1' },
        { key: 'examples.collision_detection.step2', formula: '2(1+2t) + (2-t) - (3+t) = 1' },
        { key: 'examples.collision_detection.step3', formula: '2 + 4t + 2 - t - 3 - t = 1 \\;\\Rightarrow\\; 2t + 1 = 1 \\;\\Rightarrow\\; t = 0' },
        { key: 'examples.collision_detection.step4', formula: 'S = \\begin{pmatrix} 1\\\\2\\\\3 \\end{pmatrix} \\;\\Rightarrow\\; \\text{Schnittpunkt } S(1|2|3)' },
      ],
      characterComment: 'examples.collision_detection.kai_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.3d_rendering.title',
      descriptionKey: 'realworld.3d_rendering.desc',
      icon: '🎮',
      formula: '\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)',
    },
    {
      titleKey: 'realworld.architecture.title',
      descriptionKey: 'realworld.architecture.desc',
      icon: '🏗️',
    },
    {
      titleKey: 'realworld.gps_navigation.title',
      descriptionKey: 'realworld.gps_navigation.desc',
      icon: '📍',
      formula: 'd = |\\vec{r}_2 - \\vec{r}_1|',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.cross_product_order.wrong',
      correctKey: 'mistakes.cross_product_order.correct',
      explanationKey: 'mistakes.cross_product_order.why',
      wrongFormula: '\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}',
      correctFormula: '\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})',
      characterWarning: 'mistakes.cross_product_order.kai_warning',
    },
    {
      wrongKey: 'mistakes.distance_abs_forgotten.wrong',
      correctKey: 'mistakes.distance_abs_forgotten.correct',
      explanationKey: 'mistakes.distance_abs_forgotten.why',
      wrongFormula: 'd = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}',
      correctFormula: 'd = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}',
    },
  ],

  prerequisites: ['11-vektorrechnung'],
};
