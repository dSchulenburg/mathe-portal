import { motion } from 'framer-motion';
import MathInput from './MathInput';
import FormulaDisplay from './FormulaDisplay';

export default function StepByStepSolver({
  steps,        // [{ label: 'p = ?', formula: 'p = ...', key: 'p' }, ...]
  answers,      // { p: '5', q: '6', ... }
  onAnswer,     // (key, value) => void
  stepResults,  // [true, false, null, ...]
  isComplete,
  headerFormula = null, // Optional formula to display above steps
}) {
  return (
    <div className="step-solver">
      {headerFormula && (
        <div className="step-solver-header">
          <FormulaDisplay formula={headerFormula} />
        </div>
      )}

      {steps.map((step, i) => {
        const status = stepResults[i] === true ? 'correct' : stepResults[i] === false ? 'incorrect' : null;
        const isActive = i === 0 || stepResults[i - 1] === true;

        return (
          <motion.div
            key={step.key}
            className={`step-solver-row ${isActive ? 'active' : 'dimmed'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isActive ? 1 : 0.4, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="step-solver-label">
              <span className="step-number">{i + 1}.</span>
              {step.formula ? (
                <FormulaDisplay formula={step.formula} displayMode={false} />
              ) : (
                <span>{step.label}</span>
              )}
            </div>
            <MathInput
              value={answers[step.key] || ''}
              onChange={(val) => onAnswer(step.key, val)}
              status={status}
              disabled={!isActive || isComplete}
              placeholder={step.placeholder || '?'}
              size="medium"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
