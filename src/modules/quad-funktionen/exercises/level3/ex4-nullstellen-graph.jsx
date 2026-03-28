import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import ParabolaGraph from '../../../../components/math/ParabolaGraph';
import { validateNumber, allStepsComplete } from '../../../../utils/mathValidation';

const steps = [
  { key: 'p', label: 'p =', placeholder: '?' },
  { key: 'q', label: 'q =', placeholder: '?' },
  { key: 'x1', formula: 'x_1 =', placeholder: '?' },
  { key: 'x2', formula: 'x_2 =', placeholder: '?' },
];

const expected = {
  p: -4,
  q: 3,
  x1: 3,
  x2: 1,
};

function Ex4Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  const allDone = allStepsComplete(stepResults);

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Berechne die Nullstellen mit der <strong>pq-Formel</strong> und überprüfe dein Ergebnis am Graphen.
      </p>
      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="x^2 - 4x + 3 = 0"
      />

      {allDone && (
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Deine Nullstellen im Graphen:
          </p>
          <ParabolaGraph
            a={1}
            b={-4}
            c={3}
            xRange={[-2, 6]}
            yRange={[-2, 6]}
            showZeros={true}
            showVertex={true}
          />
        </div>
      )}
    </div>
  );
}

const exercise = {
  id: 'Q3-EX4',
  levelId: 3,
  order: 4,
  title: 'Nullstellen berechnen und prüfen',
  description: 'Berechne die Nullstellen von x² - 4x + 3 und überprüfe sie am Graphen.',
  type: 'step-by-step',
  xp: { base: 22, bonus: 10 },
  steps: [
    'Bestimme p und q',
    'Berechne x₁ und x₂ mit der pq-Formel',
    'Überprüfe die Nullstellen im Graphen',
  ],
  hints: [
    'Bei x² - 4x + 3 = 0 ist p = -4 und q = 3.',
    'x₁,₂ = -(-4)/2 ± √((-4/2)² - 3) = 2 ± √(4-3) = 2 ± 1',
  ],
  component: Ex4Component,
  validate: (answers) => {
    const keys = steps.map(s => s.key);
    const results = keys.map(key =>
      answers[key] !== undefined && answers[key] !== ''
        ? validateNumber(answers[key], expected[key])
        : false
    );
    const complete = allStepsComplete(results);
    return {
      complete,
      stepResults: results,
      message: complete ? null : 'Prüfe die markierten Schritte nochmal.',
    };
  },
};

export default exercise;
