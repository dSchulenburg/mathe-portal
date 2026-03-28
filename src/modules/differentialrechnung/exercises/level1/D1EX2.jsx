import { useState } from 'react';
import SlopeExplorer from '../../components/SlopeExplorer';
import MathInput from '../../../../components/math/MathInput';
import { validateNumber } from '../../../../utils/mathValidation';

const fn = (x) => x * x;
const fnDerivative = (x) => 2 * x;

function D1EX2Component({ answers, onAnswer, stepResults, isComplete }) {
  const [currentSlope, setCurrentSlope] = useState(fnDerivative(1));

  const handleXChange = (x, slope) => {
    setCurrentSlope(slope);
    onAnswer('exploredSlope', slope);
    onAnswer('exploredX', x);
  };

  const inputStatus = stepResults[0] === true ? 'correct' : stepResults[0] === false ? 'incorrect' : null;

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Bewege den Punkt auf der Kurve zu <strong>x = 2</strong>.
        Welche Steigung hat die Tangente dort?
      </p>
      <SlopeExplorer
        fn={fn}
        fnDerivative={fnDerivative}
        xRange={[-4, 4]}
        yRange={[-1, 10]}
        initialX={1}
        showSlopeValue={true}
        showTangentLine={true}
        showSlopeTriangle={true}
        onXChange={handleXChange}
      />
      <div style={{ marginTop: '1.5rem' }}>
        <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
          Momentane Änderungsrate bei x = 2:
        </p>
        <MathInput
          label="f'(2) ="
          value={answers.slope || ''}
          onChange={(val) => onAnswer('slope', val)}
          status={inputStatus}
          disabled={isComplete}
          placeholder="Steigung eingeben"
          size="medium"
        />
      </div>
    </div>
  );
}

export const exercise = {
  id: 'D1-EX2',
  levelId: 1,
  order: 2,
  title: 'Momentane Änderungsrate',
  description: 'Erkunde die Tangentensteigung von f(x) = x² interaktiv und bestimme sie bei x = 2.',
  type: 'graph-interact',
  xp: { base: 15, bonus: 8 },
  steps: ['Steigung bei x=2 ablesen und eingeben'],
  hints: [
    'Ziehe den Punkt auf der Kurve zu x = 2 — die angezeigte Steigung ist die momentane Änderungsrate.',
    'Die Ableitung von f(x) = x² ist f\'(x) = 2x. Bei x = 2 ergibt das f\'(2) = 2 · 2 = 4.',
  ],
  component: D1EX2Component,
  validate: (answers) => {
    const correct = validateNumber(answers.slope, 4, 0.2);
    return {
      complete: correct,
      stepResults: [correct],
      message: correct
        ? null
        : 'Nicht ganz. Ziehe den Punkt zu x = 2 und lies die Steigung ab.',
    };
  },
};
