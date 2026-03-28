import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { normalizeExpression } from '../../../../utils/mathValidation';

const STEPS = [
  {
    key: 'u',
    formula: 'u = ?',
    placeholder: 'Ersten Faktor eingeben',
  },
  {
    key: 'v',
    formula: 'v = ?',
    placeholder: 'Zweiten Faktor eingeben',
  },
  {
    key: 'du',
    formula: "u' = ?",
    placeholder: 'Ableitung von u',
  },
  {
    key: 'dv',
    formula: "v' = ?",
    placeholder: 'Ableitung von v',
  },
  {
    key: 'result',
    formula: "f'(x) = u'v + uv' = ?",
    placeholder: 'Zusammenfassen',
  },
];

const ACCEPTED = {
  u: ['2x+1'],
  v: ['x^3', 'x³', 'x3'],
  du: ['2'],
  dv: ['3x^2', '3x²', '3x2'],
  result: [
    '8x^3+3x^2', '8x³+3x²', '3x^2+8x^3', '3x²+8x³',
    '8x3+3x2', '3x2+8x3',
  ],
};

function validateStep(input, accepted) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return accepted.some(a => normalizeExpression(a) === norm);
}

function D3EX1Component({ answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Leite <strong>f(x) = (2x+1) · x³</strong> mit der <strong>Produktregel</strong> ab:
      </p>
      <div className="exercise-formula" style={{ marginBottom: '0.5rem' }}>
        <FormulaDisplay formula="(u \cdot v)' = u'v + uv'" />
      </div>
      <div className="exercise-formula" style={{ marginBottom: '1rem' }}>
        <FormulaDisplay formula="f(x) = (2x+1) \cdot x^3" />
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
          <FormulaDisplay formula="f'(x) = 2 \cdot x^3 + (2x+1) \cdot 3x^2 = 2x^3 + 6x^3 + 3x^2 = 8x^3 + 3x^2" displayMode={false} />
        </div>
      )}
    </div>
  );
}

export const exercise = {
  id: 'D3-EX1',
  levelId: 3,
  order: 1,
  title: 'Produktregel',
  description: 'Leite f(x) = (2x+1) · x³ mit der Produktregel ab.',
  type: 'step-by-step',
  xp: { base: 12, bonus: 6 },
  steps: ['u bestimmen', 'v bestimmen', 'u\' berechnen', 'v\' berechnen', 'Ergebnis zusammenfassen'],
  hints: [
    'Produktregel: (u · v)\' = u\'v + uv\'',
    'Setze u = 2x+1 und v = x³. Dann ist u\' = 2 und v\' = 3x².',
    '2 · x³ + (2x+1) · 3x² = 2x³ + 6x³ + 3x² = 8x³ + 3x²',
  ],
  component: D3EX1Component,
  validate: (answers) => {
    const stepResults = [
      (!answers.u || answers.u === '') ? null : validateStep(answers.u, ACCEPTED.u),
      (!answers.v || answers.v === '') ? null : validateStep(answers.v, ACCEPTED.v),
      (!answers.du || answers.du === '') ? null : validateStep(answers.du, ACCEPTED.du),
      (!answers.dv || answers.dv === '') ? null : validateStep(answers.dv, ACCEPTED.dv),
      (!answers.result || answers.result === '') ? null : validateStep(answers.result, ACCEPTED.result),
    ];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 5 Schritten richtig. Tipp: u'v + uv' = 2·x³ + (2x+1)·3x²`,
    };
  },
};
