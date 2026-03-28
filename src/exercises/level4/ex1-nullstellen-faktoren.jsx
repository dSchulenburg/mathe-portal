import DragDropFactors from '../../components/math/DragDropFactors';

const options = ['(x+1)', '(x-1)', '(x+2)', '(x-2)', '(x+3)', '(x-3)'];
const correctFactors = ['(x-2)', '(x+3)'];

function Ex1Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  const status = stepResults.length > 0
    ? (stepResults[0] === true ? 'correct' : 'incorrect')
    : null;

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Die Nullstellen sind <strong>x₁ = 2</strong> und <strong>x₂ = -3</strong>.
        <br />
        Ziehe die passenden Faktoren in die Felder, um die <strong>Faktorform</strong> zu bilden.
      </p>
      <DragDropFactors
        options={options}
        dropZones={2}
        onAnswer={(zones) => onAnswer('zones', zones)}
        answer={answers.zones || [null, null]}
        status={status}
        isComplete={isComplete}
        equation="x₁ = 2, x₂ = -3"
      />
    </div>
  );
}

const exercise = {
  id: 'L4-EX1',
  levelId: 4,
  order: 1,
  title: 'Nullstellen zu Faktoren',
  description: 'Bilde aus den gegebenen Nullstellen die Faktorform.',
  type: 'drag-drop',
  xp: { base: 22, bonus: 10 },
  steps: [
    'Nullstelle x₁ = 2 → Faktor (x - 2)',
    'Nullstelle x₂ = -3 → Faktor (x + 3)',
  ],
  hints: [
    'Aus einer Nullstelle x₀ wird der Faktor (x - x₀).',
    'x₁ = 2 → (x - 2), x₂ = -3 → (x - (-3)) = (x + 3)',
  ],
  component: Ex1Component,
  validate: (answers) => {
    const zones = answers.zones || [null, null];
    // Both factors must be present (order doesn't matter)
    const placed = zones.filter(Boolean);
    const correct = placed.length === 2
      && correctFactors.every(f => placed.includes(f));

    return {
      complete: correct,
      stepResults: [correct],
      message: correct ? null : 'Prüfe, welcher Faktor zu welcher Nullstelle gehört.',
    };
  },
};

export default exercise;
