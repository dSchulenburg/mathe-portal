export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.grenzen',
    'objectives.beschraenkt',
    'objectives.logistisch',
    'objectives.wendepunkt',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'text', key: 'explanation.beschraenkt' },
    { type: 'formula', latex: 'N(t) = K - (K - N_0) \\cdot e^{-k t}' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.logistisch' },
    { type: 'formula', latex: 'N(t) = \\frac{K}{1 + a \\cdot e^{-r t}} \\qquad \\text{mit } a = \\frac{K - N_0}{N_0}' },
    { type: 'text', key: 'explanation.dgl' },
    { type: 'formula', latex: 'N\'(t) = r \\cdot N(t) \\cdot \\left(1 - \\frac{N(t)}{K}\\right)' },
    { type: 'text', key: 'explanation.wendepunkt' },
    { type: 'formula', latex: 'N(t_W) = \\frac{K}{2}, \\qquad t_W = \\frac{\\ln(a)}{r}, \\qquad N\'(t_W) = \\frac{r \\cdot K}{4}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.kapazitaet.title',
      descriptionKey: 'concepts.kapazitaet.desc',
      formula: '\\lim_{t \\to \\infty} N(t) = K',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.beschraenkt.title',
      descriptionKey: 'concepts.beschraenkt.desc',
      formula: 'N(t) = K - (K - N_0) e^{-k t}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.logistisch.title',
      descriptionKey: 'concepts.logistisch.desc',
      formula: 'N(t) = \\frac{K}{1 + a\\,e^{-r t}}',
      highlight: 'green',
    },
    {
      titleKey: 'concepts.wendepunkt.title',
      descriptionKey: 'concepts.wendepunkt.desc',
      formula: 'N(t_W) = \\tfrac{K}{2} \\quad \\Rightarrow \\quad N\'(t_W) = \\tfrac{rK}{4} \\text{ ist maximal}',
      highlight: 'rose',
    },
  ],

  examples: [
    {
      titleKey: 'examples.seerosen.title',
      contextKey: 'examples.seerosen.context',
      steps: [
        { key: 'examples.seerosen.step1', formula: 'K = 500, \\quad N_0 = 50 \\quad \\Rightarrow \\quad a = \\frac{500 - 50}{50} = 9' },
        { key: 'examples.seerosen.step2', formula: 'N(t) = \\frac{500}{1 + 9\\,e^{-0{,}4t}}' },
        { key: 'examples.seerosen.step3', formula: 'N(0) = \\frac{500}{1 + 9} = 50 \\quad \\checkmark' },
        { key: 'examples.seerosen.step4', formula: 't_W = \\frac{\\ln(9)}{0{,}4} \\approx 5{,}49 \\;\\text{Wochen}, \\quad N(t_W) = 250' },
      ],
      characterComment: 'examples.seerosen.amir_comment',
    },
    {
      titleKey: 'examples.abkuehlung.title',
      contextKey: 'examples.abkuehlung.context',
      steps: [
        { key: 'examples.abkuehlung.step1', formula: 'T(t) = 20 + 60 \\cdot e^{-0{,}1 t}' },
        { key: 'examples.abkuehlung.step2', formula: 'T(0) = 20 + 60 = 80\\,°C' },
        { key: 'examples.abkuehlung.step3', formula: 'T(10) = 20 + 60 \\cdot e^{-1} \\approx 42{,}07\\,°C' },
        { key: 'examples.abkuehlung.step4', formula: '\\lim_{t \\to \\infty} T(t) = 20\\,°C \\quad (\\text{Raumtemperatur})' },
      ],
      characterComment: 'examples.abkuehlung.kai_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.epidemie.title',
      descriptionKey: 'realworld.epidemie.desc',
      icon: '🦠',
      formula: 'N\'(t) = r N \\left(1 - \\tfrac{N}{K}\\right)',
    },
    {
      titleKey: 'realworld.produkt.title',
      descriptionKey: 'realworld.produkt.desc',
      icon: '📱',
      formula: 'N(t) = \\frac{K}{1 + a e^{-rt}}',
    },
    {
      titleKey: 'realworld.abkuehlung.title',
      descriptionKey: 'realworld.abkuehlung.desc',
      icon: '☕',
      formula: 'T(t) = T_U + (T_0 - T_U) e^{-kt}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.wendepunkt_ende.wrong',
      correctKey: 'mistakes.wendepunkt_ende.correct',
      explanationKey: 'mistakes.wendepunkt_ende.why',
      wrongFormula: 'N\'(t_W) = 0 \\quad (\\text{Wachstum endet im Wendepunkt})',
      correctFormula: 'N\'(t_W) = \\tfrac{rK}{4} \\text{ ist das } \\textbf{Maximum} \\text{ der Zuwachsrate}',
      characterWarning: 'mistakes.wendepunkt_ende.amir_warning',
    },
    {
      wrongKey: 'mistakes.exponentiell_gedeckelt.wrong',
      correctKey: 'mistakes.exponentiell_gedeckelt.correct',
      explanationKey: 'mistakes.exponentiell_gedeckelt.why',
      wrongFormula: 'N(t) = \\min\\!\\left(N_0 e^{rt},\\; K\\right)',
      correctFormula: 'N(t) = \\frac{K}{1 + a e^{-rt}} \\quad (\\text{bremst allmählich, ohne Knick})',
      characterWarning: 'mistakes.exponentiell_gedeckelt.amir_warning',
    },
  ],

  prerequisites: ['12-e-funktion-ln'],

  connections: [
    {
      topicId: '10-exp-wachstum',
      relation: 'baut-auf',
      why: 'Exponentielles Wachstum ist der Anfang der logistischen Kurve — bis die Grenze spürbar wird',
      bubble: {
        character: 'euklid',
        text: 'In Klasse 10 hast du gelernt, dass Bakterien exponentiell wachsen. Das stimmt — für eine Weile. Solange $N$ klein gegen $K$ ist, ist der Bremsfaktor $\\left(1 - \\tfrac{N}{K}\\right)$ fast $1$, und die logistische Kurve ist von der exponentiellen kaum zu unterscheiden. Das exponentielle Modell war nie falsch, es war nur die Tangente am Anfang.',
      },
    },
    {
      topicId: '12-e-funktion-ln',
      relation: 'baut-auf',
      why: 'Beide Wachstumsmodelle sind e-Funktionen; der Wendezeitpunkt wird mit dem Logarithmus berechnet',
      bubble: {
        character: 'euklid',
        text: 'Ohne $e$ und $\\ln$ geht hier gar nichts. Die Kapazitätsgrenze steckt im Nenner als $e^{-rt}$, und wenn du wissen willst, wann die Kurve ihren Wendepunkt hat, musst du $a\\,e^{-rt} = 1$ nach $t$ auflösen — das ist eine Logarithmusgleichung: $t_W = \\frac{\\ln(a)}{r}$.',
      },
    },
    {
      topicId: '11-kurvendiskussion',
      relation: 'verwandt',
      why: 'Der Wendepunkt der S-Kurve ist eine klassische Kurvendiskussion mit einer sehr konkreten Bedeutung',
      bubble: {
        character: 'euklid',
        text: 'Hier zahlt sich die Kurvendiskussion aus. Der Wendepunkt ist nicht bloß eine Stelle mit $N\'\' = 0$ — er ist der Moment, in dem der Zuwachs am größten war und ab dem er wieder abnimmt. Bei einer Epidemie ist das der Tag, an dem die Neuinfektionen ihren Höchststand haben. Die Zahl der Infizierten steigt danach weiter, nur langsamer.',
      },
    },
    {
      topicId: '12-integralrechnung-vertieft',
      relation: 'verwandt',
      why: 'Die logistische Funktion entsteht als Lösung einer Differentialgleichung durch Integration',
      bubble: {
        character: 'euklid',
        text: 'Woher kommt die merkwürdige Formel mit dem Bruch überhaupt? Sie fällt nicht vom Himmel: Man löst die Differentialgleichung $N\' = rN\\left(1 - \\tfrac{N}{K}\\right)$ durch Trennung der Variablen und integriert beide Seiten. Für das Abitur musst du das Ergebnis kennen und anwenden — aber es ist gut zu wissen, dass darunter eine Integration steckt.',
      },
    },
  ],
};
