import MathInput from '../../../../components/math/MathInput';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { normalizeExpression } from '../../../../utils/mathValidation';

const PROBLEMS = [
  {
    key: 'p1',
    formula: 'f(x) = x^3',
    accepted: ['3x^2', '3x²', '3x2'],
    display: '3x²',
  },
  {
    key: 'p2',
    formula: 'f(x) = x^5',
    accepted: ['5x^4', '5x⁴', '5x4'],
    display: '5x⁴',
  },
  {
    key: 'p3',
    formula: 'f(x) = x^{-1} = \\frac{1}{x}',
    accepted: ['-x^(-2)', '-x^{-2}', '-x⁻²', '-1/x^2', '-1/x²', '-x-2', '-x^-2'],
    display: '-x⁻²',
  },
  {
    key: 'p4',
    formula: 'f(x) = \\sqrt{x} = x^{1/2}',
    accepted: ['1/(2*sqrt(x))', '1/(2√x)', '0.5x^(-0.5)', '0.5x^(-1/2)', '(1/2)x^(-1/2)', '1/2*x^(-1/2)'],
    display: '1/(2√x)',
  },
  {
    key: 'p5',
    formula: 'f(x) = x^{-2}',
    accepted: ['-2x^(-3)', '-2x^{-3}', '-2x⁻³', '-2x-3', '-2x^-3'],
    display: '-2x⁻³',
  },
];

function matchesAccepted(input, accepted) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return accepted.some(a => {
    const normA = normalizeExpression(a);
    return norm === normA || norm.replace(/\*/g, '') === normA.replace(/\*/g, '');
  });
}

function D2EX1Component({ answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Leite folgende Funktionen mit der <strong>Potenzregel</strong> ab:{' '}
        <em>f(x) = xⁿ → f'(x) = n · x^(n−1)</em>
      </p>
      {PROBLEMS.map((prob, i) => {
        const status = stepResults[i] === true ? 'correct' : stepResults[i] === false ? 'incorrect' : null;
        return (
          <div key={prob.key} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <div style={{ minWidth: '180px' }}>
              <FormulaDisplay formula={prob.formula} displayMode={false} />
            </div>
            <MathInput
              label="f'(x) ="
              value={answers[prob.key] || ''}
              onChange={(val) => onAnswer(prob.key, val)}
              status={status}
              disabled={isComplete}
              placeholder="Ableitung eingeben"
              size="medium"
            />
          </div>
        );
      })}
    </div>
  );
}

export const exercise = {
  id: 'D2-EX1',
  levelId: 2,
  order: 1,
  title: 'Potenzregel',
  description: 'Wende die Potenzregel auf verschiedene Potenzfunktionen an.',
  type: 'input',
  xp: { base: 10, bonus: 5 },
  steps: PROBLEMS.map((p, i) => `Ableitung von Funktion ${i + 1}`),
  hints: [
    'Potenzregel: f(x) = xⁿ → f\'(x) = n · x^(n−1)',
    'Für negative Exponenten gilt die Regel genauso: x⁻¹ → −1 · x⁻²',
    'Für Wurzeln: √x = x^(1/2) → (1/2) · x^(−1/2) = 1/(2√x)',
  ],
  component: D2EX1Component,
  validate: (answers) => {
    const stepResults = PROBLEMS.map(prob => matchesAccepted(answers[prob.key], prob.accepted));
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von ${PROBLEMS.length} Ableitungen richtig. Denke an: f(x) = xⁿ → f'(x) = n·x^(n-1)`,
    };
  },
};
