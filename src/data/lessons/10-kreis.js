export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.umfang_flaeche',
    'objectives.bogenmass',
    'objectives.sektor',
    'objectives.bogenlaenge',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'U = 2\\pi r, \\quad A = \\pi r^2' },
    { type: 'text', key: 'explanation.bogenmass' },
    { type: 'formula', latex: 'b = \\alpha \\cdot r \\quad (\\alpha \\text{ im Bogenmaß})' },
    { type: 'callout', key: 'explanation.mia_tip', character: 'mia' },
    { type: 'text', key: 'explanation.umrechnung' },
    { type: 'formula', latex: '\\alpha_{\\text{rad}} = \\frac{\\pi}{180°} \\cdot \\alpha_{\\text{grad}}' },
    { type: 'text', key: 'explanation.sektor' },
    { type: 'formula', latex: 'A_{\\text{Sektor}} = \\frac{\\alpha}{360°} \\cdot \\pi r^2 = \\frac{1}{2} r^2 \\alpha_{\\text{rad}}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.umfang.title',
      descriptionKey: 'concepts.umfang.desc',
      formula: 'U = 2\\pi r = \\pi d',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.flaeche.title',
      descriptionKey: 'concepts.flaeche.desc',
      formula: 'A = \\pi r^2',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.bogenmass.title',
      descriptionKey: 'concepts.bogenmass.desc',
      formula: '\\alpha_{\\text{rad}} = \\frac{b}{r}, \\quad 360° = 2\\pi\\,\\text{rad}',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.sektor.title',
      descriptionKey: 'concepts.sektor.desc',
      formula: 'A_{\\text{Sektor}} = \\frac{\\alpha°}{360°} \\cdot \\pi r^2',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.basics.title',
      contextKey: 'examples.basics.context',
      steps: [
        { key: 'examples.basics.step1', formula: 'r = 5\\,\\text{cm}' },
        { key: 'examples.basics.step2', formula: 'U = 2\\pi \\cdot 5 = 10\\pi \\approx 31{,}42\\,\\text{cm}' },
        { key: 'examples.basics.step3', formula: 'A = \\pi \\cdot 5^2 = 25\\pi \\approx 78{,}54\\,\\text{cm}^2' },
      ],
      characterComment: 'examples.basics.mia_comment',
    },
    {
      titleKey: 'examples.sektor.title',
      contextKey: 'examples.sektor.context',
      steps: [
        { key: 'examples.sektor.step1', formula: 'r = 12\\,\\text{cm}, \\quad \\alpha = 60°' },
        { key: 'examples.sektor.step2', formula: 'A_{\\text{Sektor}} = \\frac{60°}{360°} \\cdot \\pi \\cdot 12^2 = \\frac{1}{6} \\cdot 144\\pi' },
        { key: 'examples.sektor.step3', formula: 'A_{\\text{Sektor}} = 24\\pi \\approx 75{,}40\\,\\text{cm}^2' },
        { key: 'examples.sektor.step4', formula: 'b = \\frac{60°}{360°} \\cdot 2\\pi \\cdot 12 = 4\\pi \\approx 12{,}57\\,\\text{cm}' },
      ],
      characterComment: 'examples.sektor.mia_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.pizza.title',
      descriptionKey: 'realworld.pizza.desc',
      icon: '🍕',
      formula: 'A_{\\text{Stück}} = \\frac{\\pi r^2}{8}',
    },
    {
      titleKey: 'realworld.uhr.title',
      descriptionKey: 'realworld.uhr.desc',
      icon: '⏰',
      formula: '\\alpha_{\\text{Stunde}} = 30°/\\text{h}, \\quad \\alpha_{\\text{Minute}} = 6°/\\text{min}',
    },
    {
      titleKey: 'realworld.riesenrad.title',
      descriptionKey: 'realworld.riesenrad.desc',
      icon: '🎡',
      formula: 'b = 2\\pi r \\cdot \\frac{t}{T}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.unit_mix.wrong',
      correctKey: 'mistakes.unit_mix.correct',
      explanationKey: 'mistakes.unit_mix.why',
      wrongFormula: 'b = \\alpha \\cdot r \\text{ mit } \\alpha = 60° \\Rightarrow b = 60 \\cdot r',
      correctFormula: 'b = \\alpha \\cdot r \\text{ nur wenn } \\alpha \\text{ im Bogenmaß: } 60° = \\tfrac{\\pi}{3}\\,\\text{rad}',
      characterWarning: 'mistakes.unit_mix.mia_warning',
    },
    {
      wrongKey: 'mistakes.area_vs_circumference.wrong',
      correctKey: 'mistakes.area_vs_circumference.correct',
      explanationKey: 'mistakes.area_vs_circumference.why',
      wrongFormula: 'A = 2\\pi r',
      correctFormula: 'A = \\pi r^2 \\quad (\\text{quadratisch in } r)',
    },
  ],

  prerequisites: [],

  connections: [
    {
      topicId: '10-trigonometrie',
      relation: 'fuehrt-zu',
      why: 'Einheitskreis & Bogenmaß sind die Brücke zur Trigonometrie',
      bubble: {
        character: 'euklid',
        text: 'Bogenmaß ist die natürliche Sprache der Trig — sin und cos arbeiten am liebsten in Radiant. 360° ist eine Konvention; 2π ist ein Naturmaß.',
      },
    },
    {
      topicId: '10-koerper',
      relation: 'verwandt',
      why: 'Kugel und Kegel haben Kreis-Querschnitte',
      bubble: {
        character: 'euklid',
        text: 'Volumen einer Kugel = $\\tfrac{4}{3}\\pi r^3$, Volumen eines Kegels = $\\tfrac{1}{3}\\pi r^2 h$. Der Kreis steckt in beiden — als Querschnitt oder als Grundfläche.',
      },
    },
    {
      topicId: '10-periodisch',
      relation: 'fuehrt-zu',
      why: 'Periode 2π in periodischen Funktionen kommt vom Vollkreis',
      bubble: {
        character: 'euklid',
        text: 'Wenn die Sinus-Funktion alle 2π wiederholt, steckt darin der Vollkreis. Eine Umdrehung am Einheitskreis = eine vollständige Periode der Welle.',
      },
    },
  ],
};
