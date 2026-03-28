import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import FunctionGraph from '../../components/FunctionGraph';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { normalizeExpression, validateNumber } from '../../../../utils/mathValidation';

const fn = (x) => x * x * x - 3 * x;

const STEPS = [
  {
    key: 'df',
    formula: "f'(x) = ?",
    placeholder: 'Ableitung eingeben',
  },
  {
    key: 'xsq',
    formula: "f'(x) = 0 \\Rightarrow 3x^2 - 3 = 0 \\Rightarrow x^2 = ?",
    placeholder: 'x² = ?',
  },
  {
    key: 'x1',
    formula: 'x_1 = ?',
    placeholder: 'Erste Nullstelle',
  },
  {
    key: 'x2',
    formula: 'x_2 = ?',
    placeholder: 'Zweite Nullstelle',
  },
  {
    key: 'y1',
    formula: 'f(-1) = ?',
    placeholder: 'y-Wert bei x = -1',
  },
  {
    key: 'y2',
    formula: 'f(1) = ?',
    placeholder: 'y-Wert bei x = 1',
  },
];

const ACCEPTED_DF = ['3x^2-3', '3x²-3', '-3+3x^2', '-3+3x²', '3x2-3'];

function validateStep(input, accepted) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return accepted.some(a => normalizeExpression(a) === norm);
}

function D4EX1Component({ answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Finde die <strong>Extremstellen</strong> von <em>f(x) = x³ − 3x</em>.
      </p>
      <FunctionGraph
        fn={fn}
        xRange={[-3, 3]}
        yRange={[-4, 4]}
        showGrid={true}
        highlightPoints={
          stepResults[4] === true && stepResults[5] === true
            ? [
                { x: -1, y: 2, color: 'var(--mp-primary)', label: 'HP(-1|2)' },
                { x: 1, y: -2, color: 'var(--mp-secondary)', label: 'TP(1|-2)' },
              ]
            : []
        }
      />
      <div className="exercise-formula" style={{ margin: '0.75rem 0' }}>
        <FormulaDisplay formula="f(x) = x^3 - 3x" />
      </div>
      <StepByStepSolver
        steps={STEPS}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
      />
    </div>
  );
}

export const exercise = {
  id: 'D4-EX1',
  levelId: 4,
  order: 1,
  title: 'Extremstellen finden',
  description: 'Bestimme die Extremstellen von f(x) = x³ − 3x.',
  type: 'step-by-step',
  xp: { base: 15, bonus: 8 },
  steps: ['f\'(x) berechnen', 'x² bestimmen', 'x₁ bestimmen', 'x₂ bestimmen', 'f(-1) berechnen', 'f(1) berechnen'],
  hints: [
    'Extremstellen: f\'(x) = 0 setzen und auflösen.',
    'f\'(x) = 3x² − 3 = 0 → x² = 1 → x = ±1',
    'f(-1) = (-1)³ − 3·(-1) = -1 + 3 = 2 (Hochpunkt), f(1) = 1 − 3 = -2 (Tiefpunkt)',
  ],
  component: D4EX1Component,
  validate: (answers) => {
    const dfOk = (!answers.df || answers.df === '') ? null : validateStep(answers.df, ACCEPTED_DF);
    const xsqOk = (!answers.xsq && answers.xsq !== 0) ? null : validateNumber(answers.xsq, 1, 0.05);

    // x1 = -1, x2 = 1 (or swapped)
    let x1Ok, x2Ok;
    if ((!answers.x1 && answers.x1 !== 0) || (!answers.x2 && answers.x2 !== 0)) {
      x1Ok = (!answers.x1 && answers.x1 !== 0) ? null : false;
      x2Ok = (!answers.x2 && answers.x2 !== 0) ? null : false;
    } else {
      const x1Val = parseFloat((answers.x1 || '').replace(',', '.'));
      const x2Val = parseFloat((answers.x2 || '').replace(',', '.'));
      const xPair = [x1Val, x2Val].sort((a, b) => a - b);
      x1Ok = Math.abs(xPair[0] - (-1)) < 0.1;
      x2Ok = Math.abs(xPair[1] - 1) < 0.1;
    }

    const y1Ok = (!answers.y1 && answers.y1 !== 0) ? null : validateNumber(answers.y1, 2, 0.1);
    const y2Ok = (!answers.y2 && answers.y2 !== 0) ? null : validateNumber(answers.y2, -2, 0.1);

    const stepResults = [dfOk, xsqOk, x1Ok, x2Ok, y1Ok, y2Ok];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 6 Schritten richtig. Tipp: f\'(x) = 3x² − 3, Nullstellen bei x = ±1`,
    };
  },
};
