import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExerciseCard from '../components/exercises/ExerciseCard';

describe('ExerciseCard', () => {
  const exercise = {
    id: 'quad-001',
    topicId: '10-quad-funktionen',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kreativitaet', 'kommunikation'],
    points: 10,
    timeEstimate: 5,
    data: { questionKey: 'test.task', correctValue: 42 },
    hintKeys: ['test.hint1'],
    solutionKey: 'test.solution',
  };

  it('renders difficulty badge', () => {
    render(<ExerciseCard exercise={exercise} index={0} total={5} />);
    expect(screen.getByText('AFB II')).toBeTruthy();
  });

  it('renders 4K competency tags', () => {
    render(<ExerciseCard exercise={exercise} index={0} total={5} />);
    expect(screen.getByText('💡')).toBeTruthy();
    expect(screen.getByText('💬')).toBeTruthy();
  });

  it('renders exercise counter', () => {
    render(<ExerciseCard exercise={exercise} index={2} total={8} />);
    expect(screen.getByText('Aufgabe 3 von 8')).toBeTruthy();
  });
});
