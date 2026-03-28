import { motion, AnimatePresence } from 'framer-motion';

export default function ValidationFeedback({ feedback, isComplete, onCheck, onNext, hasAnswers }) {
  return (
    <AnimatePresence>
      <motion.div
        className={`validation-bar ${feedback?.type === 'success' ? 'validation-success' : ''} ${feedback?.type === 'error' ? 'validation-error' : ''} ${feedback?.type === 'progress' ? 'validation-progress' : ''}`}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {feedback && (
          <div className="validation-message">
            {feedback.type === 'success' ? '✅' : feedback.type === 'progress' ? '👍' : '❌'} {feedback.message}
          </div>
        )}
        <div className="validation-actions">
          {!isComplete ? (
            <button
              className="btn btn-check"
              onClick={onCheck}
              disabled={!hasAnswers}
            >
              Prüfen
            </button>
          ) : (
            <button className="btn btn-next" onClick={onNext}>
              Weiter →
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
