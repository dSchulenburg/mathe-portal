import { useState } from 'react';
import ParabolaGraph from '../../../../components/math/ParabolaGraph';
import MathInput from '../../../../components/math/MathInput';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { validateNumber } from '../../../../utils/mathValidation';

const parabolas = [
  { a: 1, b: -4, c: 1, formula: 'f(x) = (x-2)^2 - 3', vertex: { x: 2, y: -3 } },
  { a: -1, b: -2, c: 3, formula: 'f(x) = -(x+1)^2 + 4', vertex: { x: -1, y: 4 } },
  { a: 0.5, b: 0, c: -2, formula: 'f(x) = 0{,}5x^2 - 2', vertex: { x: 0, y: -2 } },
];

function Ex2Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  // Advance to next incomplete step
  const activeStep = (() => {
    for (let i = 0; i < parabolas.length; i++) {
      if (stepResults[i] !== true) return i;
    }
    return currentStep;
  })();

  const p = parabolas[activeStep] || parabolas[parabolas.length - 1];

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Lies den <strong>Scheitelpunkt</strong> der Parabel ab. ({activeStep + 1}/{parabolas.length})
      </p>
      <div className="exercise-formula">
        <FormulaDisplay formula={p.formula} />
      </div>
      <ParabolaGraph
        a={p.a}
        b={p.b}
        c={p.c}
        xRange={[-6, 6]}
        yRange={[-6, 6]}
        showVertex={stepResults[activeStep] === true}
      />
      <div className="input-row" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <MathInput
          label="x_S ="
          value={answers[`q${activeStep + 1}_x`] || ''}
          onChange={(val) => onAnswer(`q${activeStep + 1}_x`, val)}
          status={stepResults[activeStep] === true ? 'correct' : stepResults[activeStep] === false ? 'incorrect' : null}
          disabled={isComplete || stepResults[activeStep] === true}
          placeholder="x-Koordinate"
          size="small"
        />
        <MathInput
          label="y_S ="
          value={answers[`q${activeStep + 1}_y`] || ''}
          onChange={(val) => onAnswer(`q${activeStep + 1}_y`, val)}
          status={stepResults[activeStep] === true ? 'correct' : stepResults[activeStep] === false ? 'incorrect' : null}
          disabled={isComplete || stepResults[activeStep] === true}
          placeholder="y-Koordinate"
          size="small"
        />
      </div>
    </div>
  );
}

const exercise = {
  id: 'Q1-EX2',
  levelId: 1,
  order: 2,
  title: 'Scheitelpunkt ablesen',
  description: 'Lies den Scheitelpunkt aus dem Graphen ab.',
  type: 'graph-interact',
  xp: { base: 20, bonus: 10 },
  steps: ['Scheitelpunkt von Parabel 1', 'Scheitelpunkt von Parabel 2', 'Scheitelpunkt von Parabel 3'],
  hints: [
    'Der Scheitelpunkt ist der tiefste (oder höchste) Punkt der Parabel.',
    'Lies die Koordinaten vom Gitter ab — x-Wert und y-Wert getrennt.',
  ],
  component: Ex2Component,
  validate: (answers) => {
    const results = parabolas.map((p, i) => {
      const xKey = `q${i + 1}_x`;
      const yKey = `q${i + 1}_y`;
      const xCorrect = validateNumber(answers[xKey], p.vertex.x, 0.3);
      const yCorrect = validateNumber(answers[yKey], p.vertex.y, 0.3);
      return xCorrect && yCorrect;
    });

    const complete = results.every(r => r === true);
    const doneCount = results.filter(r => r === true).length;

    // Find current step (first incomplete)
    const currentStep = results.findIndex(r => r !== true);
    const currentStepJustCompleted = currentStep === -1 || results[currentStep] === true;

    let message;
    if (complete) {
      message = null; // ExerciseView handles success
    } else if (doneCount > 0 && currentStep >= 0 && results[currentStep] === false) {
      // Current step wrong
      message = 'Nicht ganz. Schau genau auf das Koordinatensystem!';
    } else if (doneCount > 0) {
      // Previous step correct, moving to next
      message = `Richtig! Weiter zu Parabel ${doneCount + 1} von ${parabolas.length}.`;
    } else {
      message = 'Schau genau auf das Koordinatensystem!';
    }

    return {
      complete,
      stepResults: results,
      message,
    };
  },
};

export default exercise;
