import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame, isExerciseUnlocked } from '../context/GameContext';
import { getExercise, getNextExercise, getLevelExercises } from '../exercises';
import { allStepsComplete, calculateStars } from '../utils/mathValidation';
import ExerciseInstructions from './ExerciseInstructions';
import ValidationFeedback from './ValidationFeedback';

export default function ExerciseView({ levelId, exerciseId, onComplete, onBack }) {
  const { state, dispatch } = useGame();
  const [attempts, setAttempts] = useState(0);
  const [answers, setAnswers] = useState({});
  const [stepResults, setStepResults] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success'|'error', message: '' }

  // Get current exercise — if no exerciseId, find first incomplete in level
  const exercise = exerciseId
    ? getExercise(exerciseId)
    : getLevelExercises(levelId).find(ex => {
        const unlocked = isExerciseUnlocked(state, ex.id);
        const completed = state.exerciseResults[ex.id];
        return unlocked && !completed;
      }) || getLevelExercises(levelId)[0];

  if (!exercise) {
    return (
      <div className="placeholder">
        <h2>Keine Übungen gefunden</h2>
        <button className="btn btn-secondary" onClick={onBack}>Zurück</button>
      </div>
    );
  }

  const handleAnswer = useCallback((key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleCheck = useCallback(() => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    // Validation depends on exercise type — delegate to exercise's validate function
    if (exercise.validate) {
      const result = exercise.validate(answers);
      setStepResults(result.stepResults || []);

      if (result.complete) {
        const stars = calculateStars(newAttempts);
        setIsComplete(true);
        setFeedback({ type: 'success', message: `Richtig! ${stars === 3 ? 'Perfekt beim ersten Versuch!' : stars === 2 ? 'Gut gemacht!' : 'Geschafft!'}` });
        dispatch({
          type: 'COMPLETE_EXERCISE',
          payload: { exerciseId: exercise.id, stars, levelId: exercise.levelId }
        });
      } else {
        setFeedback({ type: 'error', message: result.message || 'Nicht ganz richtig. Versuch es nochmal!' });
        if (newAttempts >= 2) setShowHint(true);
      }
    }
  }, [answers, attempts, exercise, dispatch]);

  const handleNext = useCallback(() => {
    const next = getNextExercise(exercise.id);
    if (next && next.levelId === exercise.levelId) {
      // Next exercise in same level
      setAttempts(0);
      setAnswers({});
      setStepResults([]);
      setShowHint(false);
      setIsComplete(false);
      setFeedback(null);
      onComplete(exercise.id, next.id);
    } else {
      // Level complete or no more exercises
      onComplete(exercise.id, null);
    }
  }, [exercise, onComplete]);

  // Render exercise content based on type
  const renderExerciseContent = () => {
    // Import and render type-specific component
    // This will be filled in when math components exist
    const ContentComponent = exercise.component;
    if (ContentComponent) {
      return (
        <ContentComponent
          exercise={exercise}
          answers={answers}
          onAnswer={handleAnswer}
          stepResults={stepResults}
          isComplete={isComplete}
        />
      );
    }
    return <div className="placeholder">Übungstyp "{exercise.type}" wird geladen...</div>;
  };

  return (
    <div className="exercise-layout">
      <ExerciseInstructions
        exercise={exercise}
        stepResults={stepResults}
        showHint={showHint}
        attempts={attempts}
        onBack={onBack}
      />
      <div className="exercise-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={exercise.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderExerciseContent()}
          </motion.div>
        </AnimatePresence>
      </div>
      <ValidationFeedback
        feedback={feedback}
        isComplete={isComplete}
        onCheck={handleCheck}
        onNext={handleNext}
        hasAnswers={Object.keys(answers).length > 0}
      />
    </div>
  );
}
