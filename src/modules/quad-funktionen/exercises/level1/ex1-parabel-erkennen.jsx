import MultipleChoice from '../../../../components/math/MultipleChoice';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { validateMultipleChoice } from '../../../../utils/mathValidation';

const options = [
  { id: 'a', label: null, formula: 'f(x) = 2x^2 + 3x - 1', correct: true },
  { id: 'b', label: null, formula: 'g(x) = 5x + 2', correct: false },
  { id: 'c', label: null, formula: 'h(x) = x^3 - 2x', correct: false },
  { id: 'd', label: null, formula: 'k(x) = -x^2 + 4', correct: true },
  { id: 'e', label: null, formula: 'm(x) = \\sqrt{x}', correct: false },
  { id: 'f', label: null, formula: 'p(x) = (x-3)^2', correct: true },
];

const correctIds = options.filter(o => o.correct).map(o => o.id);

function Ex1Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  const selected = answers.selected || [];
  const status = stepResults.length > 0 ? 'checked' : null;

  const displayOptions = options.map(opt => ({
    id: opt.id,
    label: <FormulaDisplay formula={opt.formula} displayMode={false} />,
    correct: opt.correct,
  }));

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Welche der folgenden Funktionen sind <strong>quadratische Funktionen</strong>?
        Wähle alle richtigen Antworten aus.
      </p>
      <MultipleChoice
        options={displayOptions}
        selected={selected}
        onSelect={(val) => onAnswer('selected', val)}
        multiSelect={true}
        status={status}
        isComplete={isComplete}
      />
    </div>
  );
}

const exercise = {
  id: 'Q1-EX1',
  levelId: 1,
  order: 1,
  title: 'Parabel oder nicht?',
  description: 'Erkenne, welche Funktionen quadratisch sind.',
  type: 'multiple-choice',
  xp: { base: 15, bonus: 8 },
  steps: ['Schau dir die Funktionsgleichungen an', 'Wähle alle quadratischen Funktionen'],
  hints: [
    'Quadratische Funktionen haben x² als höchste Potenz.',
    'Auch die Scheitelpunktform (x-d)² ist quadratisch!',
  ],
  component: Ex1Component,
  validate: (answers) => {
    const selected = answers.selected || [];
    const correct = validateMultipleChoice(selected, correctIds);
    return {
      complete: correct,
      stepResults: [correct],
      message: correct
        ? null
        : `Du hast ${selected.length} von ${correctIds.length} richtigen Funktionen ausgewählt. Prüfe nochmal genau!`,
    };
  },
};

export default exercise;
