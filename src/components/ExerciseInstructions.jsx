import { motion } from 'framer-motion';

export default function ExerciseInstructions({ exercise, stepResults, showHint, attempts, onBack }) {
  return (
    <div className="exercise-sidebar">
      <button className="btn btn-secondary" onClick={onBack} style={{ marginBottom: '1rem' }}>
        ← Zurück zur Map
      </button>

      <h2 className="exercise-title">{exercise.title}</h2>
      <p className="exercise-description">{exercise.description}</p>

      {exercise.steps && (
        <div className="step-list">
          <h4>Schritte:</h4>
          {exercise.steps.map((step, i) => (
            <motion.div
              key={i}
              className={`step-item ${stepResults[i] === true ? 'completed' : ''} ${
                stepResults[i] === false ? '' : ''
              } ${i === stepResults.filter(r => r === true).length ? 'active' : ''}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="step-icon">
                {stepResults[i] === true ? '✅' : `${i + 1}`}
              </span>
              <span className="step-text">{step}</span>
            </motion.div>
          ))}
        </div>
      )}

      {showHint && exercise.hints && exercise.hints.length > 0 && (
        <motion.div
          className="hint-box"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <strong>💡 Tipp:</strong>
          <p>{exercise.hints[Math.min(attempts - 2, exercise.hints.length - 1)]}</p>
        </motion.div>
      )}

      <div className="exercise-meta">
        <span>🎯 {exercise.xp.base} XP</span>
        {attempts > 0 && <span>Versuche: {attempts}</span>}
      </div>
    </div>
  );
}
