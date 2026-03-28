import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import MathInput from '../../../../components/math/MathInput';
import { validateNumber } from '../../../../utils/mathValidation';

const equations = [
  { formula: 'x^2 = 25', solutions: [5, -5], singleSolution: false },
  { formula: 'x^2 + x = 0', solutions: [0, -1], singleSolution: false },
  { formula: '(x + 3)^2 = 0', solutions: [-3], singleSolution: true },
  { formula: 'x^2 - 1 = 0', solutions: [1, -1], singleSolution: false },
  { formula: 'x^2 + 4x + 4 = 0', solutions: [-2], singleSolution: true },
  { formula: 'x^2 - 7x + 10 = 0', solutions: [5, 2], singleSolution: false },
];

function checkSolution(answers, eq, i) {
  if (eq.singleSolution) {
    if (!answers[`x_${i}`] && answers[`x_${i}`] !== 0) return null;
    return validateNumber(answers[`x_${i}`], eq.solutions[0], 0.1);
  }
  const a1 = answers[`x1_${i}`];
  const a2 = answers[`x2_${i}`];
  if ((a1 === undefined || a1 === '') || (a2 === undefined || a2 === '')) return null;
  const fwd = validateNumber(a1, eq.solutions[0], 0.1) && validateNumber(a2, eq.solutions[1], 0.1);
  const rev = validateNumber(a1, eq.solutions[1], 0.1) && validateNumber(a2, eq.solutions[0], 0.1);
  return fwd || rev;
}

function Ex2Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        <strong>Schnellrunde!</strong> L\u00F6se alle Gleichungen so schnell wie m\u00F6glich.
      </p>

      <div className="quick-equations" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {equations.map((eq, i) => {
          const status = stepResults[i] === true ? 'correct' : stepResults[i] === false ? 'incorrect' : null;
          return (
            <div
              key={i}
              className="quick-eq-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                background: stepResults[i] === true ? 'rgba(46,204,64,0.1)' : 'var(--card-bg, rgba(255,255,255,0.05))',
                border: stepResults[i] === true ? '1px solid var(--success-green, #2ecc40)' : '1px solid var(--border-color, #444)',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontWeight: 'bold', minWidth: '1.5rem' }}>{i + 1}.</span>
              <div style={{ minWidth: '160px' }}>
                <FormulaDisplay formula={eq.formula} displayMode={false} />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {eq.singleSolution ? (
                  <MathInput
                    label="x ="
                    value={answers[`x_${i}`] || ''}
                    onChange={(val) => onAnswer(`x_${i}`, val)}
                    status={status}
                    disabled={isComplete || stepResults[i] === true}
                    placeholder="?"
                    size="small"
                  />
                ) : (
                  <>
                    <MathInput
                      label="x\u2081 ="
                      value={answers[`x1_${i}`] || ''}
                      onChange={(val) => onAnswer(`x1_${i}`, val)}
                      status={status}
                      disabled={isComplete || stepResults[i] === true}
                      placeholder="?"
                      size="small"
                    />
                    <MathInput
                      label="x\u2082 ="
                      value={answers[`x2_${i}`] || ''}
                      onChange={(val) => onAnswer(`x2_${i}`, val)}
                      status={status}
                      disabled={isComplete || stepResults[i] === true}
                      placeholder="?"
                      size="small"
                    />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const exercise = {
  id: 'Q5-EX2',
  levelId: 5,
  order: 2,
  title: 'Schnellrunde',
  description: 'L\u00F6se 6 Gleichungen so schnell wie m\u00F6glich.',
  type: 'mixed',
  xp: { base: 28, bonus: 12 },
  steps: [
    'x\u00B2 = 25',
    'x\u00B2 + x = 0',
    '(x+3)\u00B2 = 0',
    'x\u00B2 - 1 = 0',
    'x\u00B2 + 4x + 4 = 0',
    'x\u00B2 - 7x + 10 = 0',
  ],
  hints: [
    'Bei x\u00B2 = Zahl ziehst du die Wurzel \u2014 denke an \u00B1.',
    'Doppelte L\u00F6sungen entstehen bei perfekten Quadraten wie (x+3)\u00B2 = 0.',
  ],
  component: Ex2Component,
  validate: (answers) => {
    const results = equations.map((eq, i) => checkSolution(answers, eq, i));
    const complete = results.every(r => r === true);
    const doneCount = results.filter(r => r === true).length;

    return {
      complete,
      stepResults: results,
      message: complete
        ? null
        : `${doneCount} von ${equations.length} Gleichungen richtig. Weiter so!`,
    };
  },
};

export default exercise;
