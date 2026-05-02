export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.volume_pyramid',
    'objectives.volume_cone_sphere',
    'objectives.surface_area',
    'objectives.apply_3d',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'V_{\\text{Pyramide}} = \\frac{1}{3} \\cdot A_{\\text{Grund}} \\cdot h' },
    { type: 'text', key: 'explanation.cone' },
    { type: 'formula', latex: 'V_{\\text{Kegel}} = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.sphere' },
    { type: 'formula', latex: 'V_{\\text{Kugel}} = \\frac{4}{3} \\cdot \\pi \\cdot r^3' },
  ],

  concepts: [
    {
      titleKey: 'concepts.pyramid.title',
      descriptionKey: 'concepts.pyramid.desc',
      formula: 'V = \\frac{1}{3} \\cdot A_{\\text{Grund}} \\cdot h',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.cone.title',
      descriptionKey: 'concepts.cone.desc',
      formula: 'V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h',
      highlight: 'purple',
    },
    {
      titleKey: 'concepts.sphere.title',
      descriptionKey: 'concepts.sphere.desc',
      formula: 'V = \\frac{4}{3} \\cdot \\pi \\cdot r^3',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.icecream.title',
      contextKey: 'examples.icecream.context',
      steps: [
        { key: 'examples.icecream.step1', formula: 'r = 3\\,\\text{cm}, \\quad h = 12\\,\\text{cm}' },
        { key: 'examples.icecream.step2', formula: 'V = \\frac{1}{3} \\cdot \\pi \\cdot 3^2 \\cdot 12 = \\frac{1}{3} \\cdot \\pi \\cdot 108' },
        { key: 'examples.icecream.step3', formula: 'V = 36\\pi \\approx 113{,}1\\,\\text{cm}^3' },
      ],
      characterComment: 'examples.icecream.mia_comment',
    },
    {
      titleKey: 'examples.hitbox.title',
      contextKey: 'examples.hitbox.context',
      steps: [
        { key: 'examples.hitbox.step1', formula: 'V = 904{,}8\\,\\text{cm}^3' },
        { key: 'examples.hitbox.step2', formula: '904{,}8 = \\frac{4}{3} \\cdot \\pi \\cdot r^3' },
        { key: 'examples.hitbox.step3', formula: 'r^3 = \\frac{904{,}8}{\\frac{4}{3}\\pi} \\approx 215{,}9' },
        { key: 'examples.hitbox.step4', formula: 'r = \\sqrt[3]{215{,}9} \\approx 6{,}0\\,\\text{cm}' },
      ],
      characterComment: 'examples.hitbox.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.packaging.title',
      descriptionKey: 'realworld.packaging.desc',
      icon: '🥫',
      formula: 'V_{\\text{Dose}} = \\pi r^2 h',
    },
    {
      titleKey: 'realworld.icecream.title',
      descriptionKey: 'realworld.icecream.desc',
      icon: '🍦',
    },
    {
      titleKey: 'realworld.pizza.title',
      descriptionKey: 'realworld.pizza.desc',
      icon: '🍕',
      formula: 'A = \\pi r^2',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.third.wrong',
      correctKey: 'mistakes.third.correct',
      explanationKey: 'mistakes.third.why',
      wrongFormula: 'V_{\\text{Kegel}} = \\pi r^2 h',
      correctFormula: 'V_{\\text{Kegel}} = \\frac{1}{3} \\cdot \\pi r^2 h',
      characterWarning: 'mistakes.third.mia_warning',
    },
    {
      wrongKey: 'mistakes.surface_volume.wrong',
      correctKey: 'mistakes.surface_volume.correct',
      explanationKey: 'mistakes.surface_volume.why',
      wrongFormula: 'O_{\\text{Kugel}} = \\frac{4}{3} \\pi r^3',
      correctFormula: 'O_{\\text{Kugel}} = 4 \\pi r^2',
    },
  ],

  prerequisites: ['10-pythagoras'],

  connections: [
    {
      topicId: '10-pythagoras',
      relation: 'baut-auf',
      why: 'Apothema, Mantellinie und Raumdiagonale werden mit Pythagoras berechnet',
      bubble: {
        character: 'euklid',
        text: 'Sobald du eine Pyramide aufschneidest, taucht ein rechtwinkliges Dreieck auf: Höhe, halbe Grundkante, Apothema. Die Formel $s^2 = h^2 + (a/2)^2$ ist nichts anderes als $a^2 + b^2 = c^2$ — Pythagoras ist im Raum genauso treu wie in der Ebene.',
      },
    },
    {
      topicId: '10-aehnlichkeit',
      relation: 'verwandt',
      why: 'Volumen skaliert mit dem dritten Potenz des Ähnlichkeitsfaktors — k³',
      bubble: {
        character: 'euklid',
        text: 'Wenn du einen Wasserkegel zur Hälfte füllst, ist die Höhe halb so groß — aber das Wasser-Volumen ist nur ein Achtel ($k^3 = 0{,}5^3 = 0{,}125$). Ähnlichkeit greift in 3D dreifach: Längen $\\cdot k$, Flächen $\\cdot k^2$, Volumen $\\cdot k^3$.',
      },
    },
    {
      topicId: '10-kreis',
      relation: 'baut-auf',
      why: 'Kreisfläche und -umfang sind Bausteine für Kegel, Zylinder und Kugel',
      bubble: {
        character: 'euklid',
        text: 'Schau auf $V_{\\text{Kegel}} = \\frac{1}{3} \\pi r^2 h$ — die Grundfläche ist nichts anderes als der Kreis aus dem letzten Thema, mal Höhe, mal $\\frac{1}{3}$. 3D-Körper sind in vielen Fällen 2D-Figuren mit einer dritten Dimension.',
      },
    },
    {
      topicId: '11-integralrechnung',
      relation: 'fuehrt-zu',
      why: 'Volumenformeln werden in Klasse 11 mit Integralen hergeleitet',
      bubble: {
        character: 'euklid',
        text: 'Die Formel $V = \\frac{1}{3} \\pi r^2 h$ — woher kommt eigentlich der Faktor $\\frac{1}{3}$? In Klasse 11 wirst du sie mit Integralen herleiten: ein Kegel ist ein Stapel immer kleinerer Kreisscheiben. Volumen wird zur Summe aus unendlich vielen Schnitten.',
      },
    },
  ],
};
