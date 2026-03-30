export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.similar_triangles',
    'objectives.scale_factor',
    'objectives.intercept_theorem',
    'objectives.apply_scaling',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: '\\frac{a\'}{a} = \\frac{b\'}{b} = \\frac{c\'}{c} = k' },
    { type: 'text', key: 'explanation.scale_factor' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.intercept' },
    { type: 'formula', latex: '\\frac{\\overline{SA}}{\\overline{SB}} = \\frac{\\overline{SA\'}}{\\overline{SB\'}}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.similar_triangles.title',
      descriptionKey: 'concepts.similar_triangles.desc',
      formula: '\\triangle ABC \\sim \\triangle A\'B\'C\' \\Leftrightarrow \\frac{a\'}{a} = \\frac{b\'}{b} = \\frac{c\'}{c}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.scale_factor.title',
      descriptionKey: 'concepts.scale_factor.desc',
      formula: 'k = \\frac{\\text{Bild}}{\\text{Original}}',
      highlight: 'green',
    },
    {
      titleKey: 'concepts.intercept_theorem.title',
      descriptionKey: 'concepts.intercept_theorem.desc',
      formula: '\\frac{\\overline{ZA}}{\\overline{ZA\'}} = \\frac{\\overline{ZB}}{\\overline{ZB\'}}',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.model.title',
      contextKey: 'examples.model.context',
      steps: [
        { key: 'examples.model.step1', formula: 'k = \\frac{1}{100}' },
        { key: 'examples.model.step2', formula: 'h_{\\text{Modell}} = 3{,}5\\,\\text{cm}' },
        { key: 'examples.model.step3', formula: 'h_{\\text{real}} = 3{,}5 \\cdot 100 = 350\\,\\text{cm} = 3{,}5\\,\\text{m}' },
      ],
      characterComment: 'examples.model.mia_comment',
    },
    {
      titleKey: 'examples.intercept.title',
      contextKey: 'examples.intercept.context',
      steps: [
        { key: 'examples.intercept.step1', formula: '\\frac{4}{6} = \\frac{x}{9}' },
        { key: 'examples.intercept.step2', formula: 'x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}' },
        { key: 'examples.intercept.step3', formula: 'x = 6' },
      ],
      characterComment: 'examples.intercept.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.maps.title',
      descriptionKey: 'realworld.maps.desc',
      icon: '🗺️',
      formula: 'k = 1 : 50.000',
    },
    {
      titleKey: 'realworld.architecture.title',
      descriptionKey: 'realworld.architecture.desc',
      icon: '🏗️',
    },
    {
      titleKey: 'realworld.instagram.title',
      descriptionKey: 'realworld.instagram.desc',
      icon: '📱',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.congruence.wrong',
      correctKey: 'mistakes.congruence.correct',
      explanationKey: 'mistakes.congruence.why',
      characterWarning: 'mistakes.congruence.mia_warning',
    },
    {
      wrongKey: 'mistakes.scale_direction.wrong',
      correctKey: 'mistakes.scale_direction.correct',
      explanationKey: 'mistakes.scale_direction.why',
      wrongFormula: 'k = \\frac{\\text{Original}}{\\text{Bild}}',
      correctFormula: 'k = \\frac{\\text{Bild}}{\\text{Original}}',
    },
  ],

  prerequisites: ['10-pythagoras'],
};
