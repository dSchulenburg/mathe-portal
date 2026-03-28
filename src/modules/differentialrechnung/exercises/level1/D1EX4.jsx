import { useState } from 'react';
import SecantToTangent from '../../components/SecantToTangent';
import MultipleChoice from '../../../../components/math/MultipleChoice';
import { validateMultipleChoice } from '../../../../utils/mathValidation';

const fn = (x) => x * x;

const MC_OPTIONS = [
  { id: 'a', label: '3', correct: false },
  { id: 'b', label: '6', correct: true },
  { id: 'c', label: '9', correct: false },
  { id: 'd', label: '12', correct: false },
];

function D1EX4Component({ answers, onAnswer, stepResults, isComplete }) {
  const [animDone, setAnimDone] = useState(false);

  const mcStatus = stepResults.length > 0 ? 'checked' : null;

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Beobachte, wie die <strong>Sekante zur Tangente</strong> wird,
        wenn h → 0. Welche Steigung hat die Tangente bei x = 3?
      </p>
      <SecantToTangent
        fn={fn}
        fixedX={3}
        initialH={4}
        showFormula={true}
        showHValue={true}
        onComplete={() => setAnimDone(true)}
      />
      <div style={{ marginTop: '1.5rem' }}>
        <p style={{ marginWeight: '0.5rem', fontWeight: 600 }}>
          Steigung der Tangente bei x = 3:
        </p>
        <MultipleChoice
          options={MC_OPTIONS.map(opt => ({ ...opt, label: opt.label }))}
          selected={answers.mcAnswer || null}
          onSelect={(val) => onAnswer('mcAnswer', val)}
          multiSelect={false}
          status={mcStatus}
          isComplete={isComplete}
        />
      </div>
    </div>
  );
}

export const exercise = {
  id: 'D1-EX4',
  levelId: 1,
  order: 4,
  title: 'Grenzwert visuell: Sekante → Tangente',
  description: 'Beobachte die h→0-Animation und bestimme die Tangentensteigung bei x = 3.',
  type: 'mixed',
  xp: { base: 15, bonus: 8 },
  steps: ['Richtige Steigung auswählen'],
  hints: [
    'Die Tangentensteigung bei x = a ist der Grenzwert des Differenzenquotienten für h → 0.',
    'Für f(x) = x² gilt: f\'(x) = 2x. Bei x = 3 ergibt das f\'(3) = 2 · 3 = 6.',
  ],
  component: D1EX4Component,
  validate: (answers) => {
    const correct = validateMultipleChoice(
      answers.mcAnswer ? [answers.mcAnswer] : [],
      ['b']
    );
    return {
      complete: correct,
      stepResults: [correct],
      message: correct
        ? null
        : 'Nicht ganz. Denke an die Ableitungsformel f\'(x) = 2x.',
    };
  },
};
