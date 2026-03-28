import MultipleChoice from '../../../../components/math/MultipleChoice';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { validateMultipleChoice } from '../../../../utils/mathValidation';

const questions = [
  {
    formula: 'f(x) = 2x^2',
    direction: 'up',
    width: 'narrower',
    dirLabel: 'nach oben',
    widthLabel: 'schmaler',
  },
  {
    formula: 'f(x) = -x^2 + 1',
    direction: 'down',
    width: 'standard',
    dirLabel: 'nach unten',
    widthLabel: 'Normalbreite',
  },
  {
    formula: 'f(x) = 0{,}5x^2 - 3',
    direction: 'up',
    width: 'wider',
    dirLabel: 'nach oben',
    widthLabel: 'breiter',
  },
  {
    formula: 'f(x) = -3x^2 + 2x',
    direction: 'down',
    width: 'narrower',
    dirLabel: 'nach unten',
    widthLabel: 'schmaler',
  },
];

const dirOptions = [
  { id: 'up', label: 'nach oben geöffnet', correct: false },
  { id: 'down', label: 'nach unten geöffnet', correct: false },
];

const widthOptions = [
  { id: 'wider', label: 'breiter als Normalparabel', correct: false },
  { id: 'standard', label: 'Normalbreite', correct: false },
  { id: 'narrower', label: 'schmaler als Normalparabel', correct: false },
];

function Ex3Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Bestimme für jede Funktion die <strong>Öffnungsrichtung</strong> und die <strong>Streckung</strong>.
      </p>
      {questions.map((q, i) => {
        const dirAnswer = answers[`q${i + 1}_dir`];
        const widthAnswer = answers[`q${i + 1}_width`];
        const stepDone = stepResults[i] === true;
        const stepChecked = stepResults.length > 0;

        const dirOpts = dirOptions.map(o => ({
          ...o,
          correct: o.id === q.direction,
        }));
        const widOpts = widthOptions.map(o => ({
          ...o,
          correct: o.id === q.width,
        }));

        return (
          <div key={i} className="sub-question" style={{ marginBottom: '1.5rem', padding: '1rem', borderRadius: '8px', background: stepDone ? 'var(--glass-bg)' : 'transparent', border: '1px solid var(--border-color)' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <strong>{i + 1}.</strong> <FormulaDisplay formula={q.formula} displayMode={false} />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Öffnung:</span>
              <MultipleChoice
                options={dirOpts}
                selected={dirAnswer}
                onSelect={(val) => onAnswer(`q${i + 1}_dir`, val)}
                status={stepChecked ? 'checked' : null}
                isComplete={isComplete || stepDone}
              />
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Streckung:</span>
              <MultipleChoice
                options={widOpts}
                selected={widthAnswer}
                onSelect={(val) => onAnswer(`q${i + 1}_width`, val)}
                status={stepChecked ? 'checked' : null}
                isComplete={isComplete || stepDone}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const exercise = {
  id: 'Q1-EX3',
  levelId: 1,
  order: 3,
  title: 'Öffnung und Streckung',
  description: 'Bestimme Öffnungsrichtung und Streckung quadratischer Funktionen.',
  type: 'multiple-choice',
  xp: { base: 20, bonus: 10 },
  steps: questions.map((q, i) => `Funktion ${i + 1}: ${q.dirLabel}, ${q.widthLabel}`),
  hints: [
    'Ist a > 0, öffnet die Parabel nach oben. Ist a < 0, nach unten.',
    '|a| > 1 → schmaler, |a| = 1 → Normalbreite, |a| < 1 → breiter.',
  ],
  component: Ex3Component,
  validate: (answers) => {
    const results = questions.map((q, i) => {
      if (answers[`q${i + 1}_dir`] === undefined || answers[`q${i + 1}_dir`] === null) return null;
      if (answers[`q${i + 1}_width`] === undefined || answers[`q${i + 1}_width`] === null) return null;
      const dirCorrect = answers[`q${i + 1}_dir`] === q.direction;
      const widthCorrect = answers[`q${i + 1}_width`] === q.width;
      return dirCorrect && widthCorrect;
    });

    const complete = results.every(r => r === true);
    const doneCount = results.filter(r => r === true).length;

    return {
      complete,
      stepResults: results,
      message: complete
        ? null
        : `${doneCount} von ${questions.length} richtig. Achte auf das Vorzeichen und den Betrag von a!`,
    };
  },
};

export default exercise;
