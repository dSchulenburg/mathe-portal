import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { normalizeExpression } from '../../../../utils/mathValidation';

const STEPS = [
  {
    key: 'u',
    formula: 'u = ?',
    placeholder: 'Zähler eingeben',
  },
  {
    key: 'v',
    formula: 'v = ?',
    placeholder: 'Nenner eingeben',
  },
  {
    key: 'du',
    formula: "u' = ?",
    placeholder: 'Ableitung des Zählers',
  },
  {
    key: 'dv',
    formula: "v' = ?",
    placeholder: 'Ableitung des Nenners',
  },
  {
    key: 'result',
    formula: "f'(x) = \\frac{u'v - uv'}{v^2} = ?",
    placeholder: 'Vereinfachtes Ergebnis',
  },
];

const ACCEPTED = {
  u: ['x^2+1', 'x²+1', 'x2+1'],
  v: ['x-1'],
  du: ['2x'],
  dv: ['1'],
  result: [
    '(x^2-2x-1)/(x-1)^2',
    '(x²-2x-1)/(x-1)²',
    '(x2-2x-1)/(x-1)2',
    '(x^2-2x-1)/(x-1)^2',
  ],
};

function validateStep(input, accepted) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return accepted.some(a => normalizeExpression(a) === norm);
}

function D3EX2Component({ answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Leite <strong>f(x) = (x²+1)/(x−1)</strong> mit der <strong>Quotientenregel</strong> ab:
      </p>
      <div className="exercise-formula" style={{ marginBottom: '0.5rem' }}>
        <FormulaDisplay formula="\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}" />
      </div>
      <div className="exercise-formula" style={{ marginBottom: '1rem' }}>
        <FormulaDisplay formula="f(x) = \frac{x^2+1}{x-1}" />
      </div>
      <StepByStepSolver
        steps={STEPS}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
      />
      {stepResults[4] === true && (
        <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--success-bg)', borderRadius: '8px', textAlign: 'center' }}>
          <FormulaDisplay formula="f'(x) = \frac{2x(x-1) - (x^2+1)}{(x-1)^2} = \frac{x^2-2x-1}{(x-1)^2}" displayMode={false} />
        </div>
      )}
    </div>
  );
}

export const exercise = {
  id: 'D3-EX2',
  levelId: 3,
  order: 2,
  title: 'Quotientenregel',
  description: 'Leite f(x) = (x²+1)/(x−1) mit der Quotientenregel ab.',
  type: 'step-by-step',
  xp: { base: 12, bonus: 6 },
  steps: ['u (Zähler) bestimmen', 'v (Nenner) bestimmen', 'u\' berechnen', 'v\' berechnen', 'Ergebnis vereinfachen'],
  hints: [
    'Quotientenregel: (u/v)\' = (u\'v − uv\') / v²',
    'Zähler: u = x²+1 → u\' = 2x. Nenner: v = x−1 → v\' = 1.',
    '(2x·(x−1) − (x²+1)·1) / (x−1)² = (2x²−2x−x²−1) / (x−1)² = (x²−2x−1) / (x−1)²',
  ],
  component: D3EX2Component,
  validate: (answers) => {
    const stepResults = [
      validateStep(answers.u, ACCEPTED.u),
      validateStep(answers.v, ACCEPTED.v),
      validateStep(answers.du, ACCEPTED.du),
      validateStep(answers.dv, ACCEPTED.dv),
      validateStep(answers.result, ACCEPTED.result),
    ];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 5 Schritten richtig. Tipp: (u\'v − uv\') / v²`,
    };
  },
};
