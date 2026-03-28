import { useState, useEffect } from 'react';
import ParabolaGraph from '../../components/math/ParabolaGraph';
import { validateNumber } from '../../utils/mathValidation';

const targets = [
  { x: 2, y: -3, label: 'S(2 | -3)' },
  { x: -1, y: 4, label: 'S(-1 | 4)' },
  { x: 0, y: 5, label: 'S(0 | 5)' },
];

function Ex4Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  // Find active step (first not-yet-correct)
  const activeStep = (() => {
    for (let i = 0; i < targets.length; i++) {
      if (stepResults[i] !== true) return i;
    }
    return targets.length - 1;
  })();

  const target = targets[activeStep];

  // Track current slider params per step
  const paramKey = `params_${activeStep}`;
  const currentParams = answers[paramKey] || { a: 1, b: 0, c: 0 };

  const handleParamsChange = (params) => {
    onAnswer(paramKey, params);
    // Also store the vertex for validation
    const vx = -params.b / (2 * params.a);
    const vy = params.a * vx * vx + params.b * vx + params.c;
    onAnswer(`q${activeStep + 1}_vx`, vx);
    onAnswer(`q${activeStep + 1}_vy`, vy);
  };

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Verschiebe die Normalparabel mit den Schiebereglern, sodass der Scheitelpunkt bei{' '}
        <strong>{target.label}</strong> liegt. ({activeStep + 1}/{targets.length})
      </p>
      <ParabolaGraph
        a={currentParams.a}
        b={currentParams.b}
        c={currentParams.c}
        xRange={[-6, 6]}
        yRange={[-6, 6]}
        showVertex={true}
        sliders={true}
        onParamsChange={handleParamsChange}
        highlightPoints={[{ x: target.x, y: target.y, color: 'var(--bswi-error)', label: target.label }]}
      />
      {stepResults[activeStep] === true && (
        <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--success-bg)', borderRadius: '8px', textAlign: 'center' }}>
          Scheitelpunkt getroffen!
        </div>
      )}
    </div>
  );
}

const exercise = {
  id: 'L1-EX4',
  levelId: 1,
  order: 4,
  title: 'Normalparabel verschieben',
  description: 'Verschiebe die Parabel mit Schiebereglern zum Zielpunkt.',
  type: 'graph-interact',
  xp: { base: 25, bonus: 12 },
  steps: targets.map(t => `Verschiebe auf ${t.label}`),
  hints: [
    'Der Parameter c verschiebt die Parabel nach oben oder unten.',
    'Der Parameter b beeinflusst die horizontale Position des Scheitelpunkts. Formel: x_S = -b/(2a).',
  ],
  component: Ex4Component,
  validate: (answers) => {
    const results = targets.map((t, i) => {
      const vx = answers[`q${i + 1}_vx`];
      const vy = answers[`q${i + 1}_vy`];
      if (vx === undefined || vy === undefined) return false;
      const xOk = validateNumber(vx, t.x, 0.3);
      const yOk = validateNumber(vy, t.y, 0.3);
      return xOk && yOk;
    });

    const complete = results.every(r => r === true);
    const doneCount = results.filter(r => r === true).length;

    return {
      complete,
      stepResults: results,
      message: complete
        ? null
        : `${doneCount} von ${targets.length} Zielpunkten getroffen. Nutze die Schieberegler, um den Scheitelpunkt zu verschieben!`,
    };
  },
};

export default exercise;
