import { useState, useEffect } from 'react';
import { exercises as quadExercises } from '../../data/exercises/10-quad-funktionen';
import { registerExercise, getExercise } from '../../data/exerciseDB';
import ExerciseCard from '../exercises/ExerciseCard';
import NumericInputExercise from '../exercises/NumericInputExercise';
import MultipleChoiceExercise from '../exercises/MultipleChoiceExercise';
import ErrorAnalysisExercise from '../exercises/ErrorAnalysisExercise';
import OERShareButton from '../exercises/OERShareButton';

// Register exercises
quadExercises.forEach(ex => { try { registerExercise(ex); } catch {} });

function renderExercise(exercise) {
  const onComplete = () => {}; // Single view — no navigation
  switch (exercise.type) {
    case 'numeric-input': return <NumericInputExercise exercise={exercise} onComplete={onComplete} />;
    case 'multiple-choice': return <MultipleChoiceExercise exercise={exercise} onComplete={onComplete} />;
    case 'error-analysis': return <ErrorAnalysisExercise exercise={exercise} onComplete={onComplete} />;
    default: return <p style={{ color: 'var(--mp-muted)' }}>Aufgabentyp nicht implementiert.</p>;
  }
}

export default function SingleExerciseView({ exerciseId, onBack }) {
  const exercise = getExercise(exerciseId);

  if (!exercise) {
    return (
      <div style={{ padding: '2rem', color: 'var(--mp-text)', textAlign: 'center' }}>
        <p style={{ color: 'var(--mp-error)', fontSize: '1.25rem' }}>Aufgabe nicht gefunden: {exerciseId}</p>
        {onBack && <button onClick={onBack} style={{ marginTop: '1rem', color: 'var(--mp-primary)' }}>← Zurück</button>}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '1rem' }}>
      {onBack && (
        <button onClick={onBack} style={{ color: 'var(--mp-primary)', marginBottom: '1rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}>
          ← Zurück zur Übersicht
        </button>
      )}
      <ExerciseCard exercise={exercise} index={0} total={1}>
        {renderExercise(exercise)}
      </ExerciseCard>
      <div style={{ marginTop: '0.75rem' }}>
        <OERShareButton exercise={exercise} />
      </div>
    </div>
  );
}
