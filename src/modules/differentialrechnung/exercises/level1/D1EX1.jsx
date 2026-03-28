import FunctionGraph from '../../components/FunctionGraph';
import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import { validateNumber } from '../../../../utils/mathValidation';

const fn = (x) => x * x;

const STEPS = [
  { key: 'f1', label: 'f(1) = 1² = ?', formula: 'f(1) = 1^2 = ?', placeholder: '?' },
  { key: 'f3', label: 'f(3) = 3² = ?', formula: 'f(3) = 3^2 = ?', placeholder: '?' },
  { key: 'slope', label: 'Δy/Δx = (f(3)−f(1))/(3−1) = ?', formula: '\\frac{\\Delta y}{\\Delta x} = \\frac{f(3)-f(1)}{3-1} = ?', placeholder: '?' },
];

function D1EX1Component({ answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Berechne die <strong>durchschnittliche Änderungsrate</strong> von{' '}
        <em>f(x) = x²</em> zwischen x = 1 und x = 3.
      </p>
      <FunctionGraph
        fn={fn}
        xRange={[-1, 5]}
        yRange={[-1, 12]}
        showSecantBetween={[1, 3]}
        highlightPoints={[
          { x: 1, y: 1, color: 'var(--mp-primary)', label: 'A(1|1)' },
          { x: 3, y: 9, color: 'var(--mp-secondary)', label: 'B(3|9)' },
        ]}
      />
      <StepByStepSolver
        steps={STEPS}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="f(x) = x^2"
      />
    </div>
  );
}

export const exercise = {
  id: 'D1-EX1',
  levelId: 1,
  order: 1,
  title: 'Durchschnittliche Änderungsrate',
  description: 'Berechne die Sekantensteigung für f(x) = x² zwischen zwei Punkten.',
  type: 'step-by-step',
  xp: { base: 15, bonus: 8 },
  steps: ['f(1) berechnen', 'f(3) berechnen', 'Differenzenquotient berechnen'],
  hints: [
    'Die durchschnittliche Änderungsrate ist die Steigung der Sekante zwischen zwei Punkten.',
    'Formel: Δy/Δx = (f(x₂) − f(x₁)) / (x₂ − x₁)',
    'Berechne erst f(1) und f(3) einzeln, dann bilde den Quotienten.',
  ],
  component: D1EX1Component,
  validate: (answers) => {
    const r1 = validateNumber(answers.f1, 1, 0.1);
    const r2 = validateNumber(answers.f3, 9, 0.1);
    const r3 = validateNumber(answers.slope, 4, 0.1);
    const stepResults = [r1, r2, r3];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 3 Schritten richtig. Tipp: Δy/Δx = (9 − 1) / (3 − 1)`,
    };
  },
};
