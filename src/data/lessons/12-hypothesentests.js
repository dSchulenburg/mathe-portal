export const lesson = {
  story: {
    introKey: 'story.intro',
    challengeKey: 'story.challenge',
    outroKey: 'story.outro',
  },

  objectives: [
    'objectives.null_hypothesis',
    'objectives.significance_level',
    'objectives.test_decision',
    'objectives.error_types',
  ],

  explanation: [
    { type: 'text', key: 'explanation.intro' },
    { type: 'formula', latex: 'H_0\\colon p = p_0 \\quad \\text{vs.} \\quad H_1\\colon p \\neq p_0' },
    { type: 'text', key: 'explanation.significance' },
    { type: 'formula', latex: '\\alpha = P(\\text{Fehler 1. Art}) = P(H_0 \\text{ ablehnen} \\mid H_0 \\text{ wahr})' },
    { type: 'callout', key: 'explanation.kai_tip', character: 'kai' },
    { type: 'text', key: 'explanation.rejection_region' },
    { type: 'formula', latex: 'P(X \\leq k) \\leq \\alpha \\;\\Rightarrow\\; \\text{Ablehnungsbereich } \\{0, 1, \\ldots, k\\}' },
    { type: 'text', key: 'explanation.error_types' },
    { type: 'formula', latex: '\\beta = P(\\text{Fehler 2. Art}) = P(H_0 \\text{ beibehalten} \\mid H_1 \\text{ wahr})' },
  ],

  concepts: [
    {
      titleKey: 'concepts.hypotheses.title',
      descriptionKey: 'concepts.hypotheses.desc',
      formula: 'H_0\\colon p = p_0 \\quad \\text{vs.} \\quad H_1\\colon p < p_0',
      highlight: 'amber',
    },
    {
      titleKey: 'concepts.significance_level.title',
      descriptionKey: 'concepts.significance_level.desc',
      formula: '\\alpha \\in \\{0{,}01;\\; 0{,}05;\\; 0{,}10\\}',
      highlight: 'rose',
    },
    {
      titleKey: 'concepts.error_types.title',
      descriptionKey: 'concepts.error_types.desc',
      formula: '\\alpha = P(\\text{Typ I}), \\quad \\beta = P(\\text{Typ II})',
      highlight: 'purple',
    },
  ],

  examples: [
    {
      titleKey: 'examples.playtest_balance.title',
      contextKey: 'examples.playtest_balance.context',
      steps: [
        { key: 'examples.playtest_balance.step1', formula: 'H_0\\colon p = 0{,}5 \\quad H_1\\colon p < 0{,}5 \\quad \\alpha = 0{,}05' },
        { key: 'examples.playtest_balance.step2', formula: 'n = 100 \\text{ Matches},\\; X = \\text{Siege Held A}' },
        { key: 'examples.playtest_balance.step3', formula: 'P(X \\leq 40) = \\sum_{k=0}^{40} \\binom{100}{k} \\cdot 0{,}5^{100} \\approx 0{,}028' },
        { key: 'examples.playtest_balance.step4', formula: '0{,}028 < 0{,}05 \\;\\Rightarrow\\; H_0 \\text{ ablehnen: Held A ist zu schwach}' },
      ],
      characterComment: 'examples.playtest_balance.kai_comment',
    },
    {
      titleKey: 'examples.crash_rate.title',
      contextKey: 'examples.crash_rate.context',
      steps: [
        { key: 'examples.crash_rate.step1', formula: 'H_0\\colon p = 0{,}02 \\quad H_1\\colon p > 0{,}02 \\quad \\alpha = 0{,}05' },
        { key: 'examples.crash_rate.step2', formula: 'n = 200 \\text{ Sessions},\\; X = 8 \\text{ Abstuerze}' },
        { key: 'examples.crash_rate.step3', formula: 'P(X \\geq 8) = 1 - P(X \\leq 7) \\approx 0{,}042' },
        { key: 'examples.crash_rate.step4', formula: '0{,}042 < 0{,}05 \\;\\Rightarrow\\; H_0 \\text{ ablehnen: Crash-Rate ist signifikant erhoeht}' },
      ],
      characterComment: 'examples.crash_rate.kai_comment',
    },
  ],

  realWorld: [
    {
      titleKey: 'realworld.ab_testing.title',
      descriptionKey: 'realworld.ab_testing.desc',
      icon: '🧪',
      formula: 'p\\text{-Wert} < \\alpha \\;\\Rightarrow\\; \\text{signifikant}',
    },
    {
      titleKey: 'realworld.quality_assurance.title',
      descriptionKey: 'realworld.quality_assurance.desc',
      icon: '🏭',
    },
    {
      titleKey: 'realworld.clinical_trials.title',
      descriptionKey: 'realworld.clinical_trials.desc',
      icon: '💊',
      formula: '\\alpha = 0{,}05, \\quad \\beta \\leq 0{,}20',
    },
  ],

  mistakes: [
    {
      wrongKey: 'mistakes.accept_h0.wrong',
      correctKey: 'mistakes.accept_h0.correct',
      explanationKey: 'mistakes.accept_h0.why',
      wrongFormula: 'p > \\alpha \\;\\Rightarrow\\; H_0 \\text{ ist wahr}',
      correctFormula: 'p > \\alpha \\;\\Rightarrow\\; H_0 \\text{ kann nicht abgelehnt werden}',
      characterWarning: 'mistakes.accept_h0.kai_warning',
    },
    {
      wrongKey: 'mistakes.alpha_beta_confused.wrong',
      correctKey: 'mistakes.alpha_beta_confused.correct',
      explanationKey: 'mistakes.alpha_beta_confused.why',
      wrongFormula: '\\alpha \\downarrow \\;\\Rightarrow\\; \\beta \\downarrow',
      correctFormula: '\\alpha \\downarrow \\;\\Rightarrow\\; \\beta \\uparrow \\quad \\text{(bei festem } n\\text{)}',
    },
  ],

  prerequisites: ['11-binomialverteilung'],
};
