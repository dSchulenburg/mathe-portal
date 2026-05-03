export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.solve_2x2',
    'objectives.gauss_3x3',
    'objectives.solution_types',
    'objectives.matrix_form',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: '\\begin{aligned} a_{11} x + a_{12} y &= b_1 \\\\ a_{21} x + a_{22} y &= b_2 \\end{aligned}' },
    { type: 'text', key: 'explanation.methods' },
    { type: 'callout', key: 'explanation.amir_tip', character: 'amir' },
    { type: 'text', key: 'explanation.gauss' },
    { type: 'formula', latex: '\\begin{pmatrix} a_{11} & a_{12} & | & b_1 \\\\ a_{21} & a_{22} & | & b_2 \\end{pmatrix} \\to \\begin{pmatrix} 1 & * & | & * \\\\ 0 & 1 & | & * \\end{pmatrix}' },
    { type: 'text', key: 'explanation.solution_types' },
    { type: 'formula', latex: '\\det A \\neq 0 \\Rightarrow \\text{eindeutige Lösung}' },
  ],

  concepts: [
    {
      titleKey: 'concepts.lgs.title',
      descriptionKey: 'concepts.lgs.desc',
      formula: 'A \\cdot \\vec{x} = \\vec{b}',
      highlight: 'cyan',
    },
    {
      titleKey: 'concepts.gauss.title',
      descriptionKey: 'concepts.gauss.desc',
      formula: '\\text{Erlaubte Operationen: Zeile} \\cdot k, \\text{ Zeile} + \\text{Zeile}, \\text{ Zeilen tauschen}',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.solution_types.title',
      descriptionKey: 'concepts.solution_types.desc',
      formula: '\\text{eindeutig} \\;|\\; \\text{keine} \\;|\\; \\text{unendlich viele}',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.matrix.title',
      descriptionKey: 'concepts.matrix.desc',
      formula: '(A | \\vec{b}) \\to (\\text{Stufenform})',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.simple_2x2.title',
      contextKey: 'examples.simple_2x2.context',
      steps: [
        { key: 'examples.simple_2x2.step1', formula: '\\begin{aligned} 2x + y &= 7 \\\\ x - y &= 2 \\end{aligned}' },
        { key: 'examples.simple_2x2.step2', formula: '\\text{Addition: } 3x = 9 \\Rightarrow x = 3' },
        { key: 'examples.simple_2x2.step3', formula: '\\text{Einsetzen: } 3 - y = 2 \\Rightarrow y = 1' },
        { key: 'examples.simple_2x2.step4', formula: 'L = \\{(3, 1)\\}' },
      ],
      characterComment: 'examples.simple_2x2.amir_comment',
    },
    {
      titleKey: 'examples.gauss_3x3.title',
      contextKey: 'examples.gauss_3x3.context',
      steps: [
        { key: 'examples.gauss_3x3.step1', formula: '\\begin{pmatrix} 1 & 1 & 1 & | & 6 \\\\ 2 & -1 & 1 & | & 3 \\\\ 1 & 2 & -1 & | & 2 \\end{pmatrix}' },
        { key: 'examples.gauss_3x3.step2', formula: 'Z_2 \\to Z_2 - 2 Z_1: \\begin{pmatrix} 1 & 1 & 1 & | & 6 \\\\ 0 & -3 & -1 & | & -9 \\\\ 1 & 2 & -1 & | & 2 \\end{pmatrix}' },
        { key: 'examples.gauss_3x3.step3', formula: 'Z_3 \\to Z_3 - Z_1: \\begin{pmatrix} 1 & 1 & 1 & | & 6 \\\\ 0 & -3 & -1 & | & -9 \\\\ 0 & 1 & -2 & | & -4 \\end{pmatrix}' },
        { key: 'examples.gauss_3x3.step4', formula: '\\Rightarrow z = 1, y = \\tfrac{8}{3}, x = \\tfrac{7}{3}' },
      ],
      characterComment: 'examples.gauss_3x3.amir_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.mischung.title',
      descriptionKey: 'realworld.mischung.desc',
      icon: '🧪',
      formula: '\\text{Stoff 1: } x + y = m, \\quad \\text{Wert: } a x + b y = w',
    },
    {
      titleKey: 'realworld.preise.title',
      descriptionKey: 'realworld.preise.desc',
      icon: '🛒',
    },
    {
      titleKey: 'realworld.network.title',
      descriptionKey: 'realworld.network.desc',
      icon: '🔌',
      formula: 'I_1 + I_2 = I_3 \\quad \\text{(Knotenregel)}',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.sign_error.wrong',
      correctKey: 'mistakes.sign_error.correct',
      explanationKey: 'mistakes.sign_error.why',
      wrongFormula: 'Z_2 - 2 Z_1: \\;a_{21} - 2 a_{11} \\text{ vergessen, nur erste Spalte beachtet}',
      correctFormula: '\\text{Jede Zelle der Zeile umformen, nicht nur die Pivot-Spalte}',
      characterWarning: 'mistakes.sign_error.amir_warning',
    },
    {
      wrongKey: 'mistakes.no_solution.wrong',
      correctKey: 'mistakes.no_solution.correct',
      explanationKey: 'mistakes.no_solution.why',
      wrongFormula: '0 = 5 \\Rightarrow x = 5',
      correctFormula: '0 = 5 \\Rightarrow \\text{Widerspruch — keine Lösung}',
    },
  ],

  prerequisites: ['10-lineare-funktionen'],

  connections: [
    {
      topicId: '12-matrizen',
      relation: 'fuehrt-zu',
      why: 'LGS in Matrixform Ax = b ist die direkte Vorbereitung für Klasse 12',
      bubble: {
        character: 'euklid',
        text: 'Wenn du LGS in Matrixform schreibst, hast du den Sprung zur Matrizenrechnung schon gemacht. In Klasse 12 wirst du Markov-Ketten und Eigenvektoren auf demselben Stamm aufbauen.',
      },
    },
    {
      topicId: '11-vektorrechnung',
      relation: 'verwandt',
      why: 'Schnitt zweier Geraden im Raum löst man mit LGS',
      bubble: {
        character: 'euklid',
        text: 'Wenn zwei Geraden im 3D-Raum sich schneiden sollen, bekommst du ein 3-Gleichungs-System mit den Parametern als Unbekannte. LGS ist das Werkzeug.',
      },
    },
    {
      topicId: '12-analytische-geometrie',
      relation: 'fuehrt-zu',
      why: 'Schnittgerade zweier Ebenen, Schnittpunkt Gerade-Ebene — alles LGS',
      bubble: {
        character: 'euklid',
        text: 'Im 3D wird das LGS zum Standardwerkzeug: Gerade trifft Ebene, Ebene trifft Ebene, Spiegelpunkt — überall steht ein 3×3-System dahinter. Wer Gauß beherrscht, hat die analytische Geometrie zu 80 % gelöst.',
      },
    },
  ],
};
