import DiffBadge from './DiffBadge';
import CompetencyTag from './CompetencyTag';

export default function ExerciseCard({ exercise, index, total, children }) {
  return (
    <div className="rounded-lg p-4" style={{ background: 'var(--mp-surface)', border: '1px solid var(--mp-border)' }}>
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <DiffBadge level={exercise.diffLevel} />
          {exercise.competencies.map(c => (
            <CompetencyTag key={c} id={c} />
          ))}
        </div>
        <span className="text-xs" style={{ color: 'var(--mp-muted)' }}>
          Aufgabe {index + 1} von {total}
        </span>
      </div>
      {children}
    </div>
  );
}
