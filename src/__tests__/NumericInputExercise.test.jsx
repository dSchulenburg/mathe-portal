import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NumericInputExercise from '../components/exercises/NumericInputExercise';

const exercise = {
  id: 'test-num-001',
  topicId: '10-quad',
  type: 'numeric-input',
  diffLevel: 'basis',
  competencies: ['kommunikation'],
  points: 5,
  data: { questionText: 'Was ist 2 + 2?', correctValue: 4, tolerance: 0.01 },
  hintKeys: ['Zaehle mit den Fingern.'],
  solutionKey: '2 + 2 = 4',
};

describe('NumericInputExercise', () => {
  it('renders question text', () => {
    render(<NumericInputExercise exercise={exercise} onComplete={() => {}} />);
    expect(screen.getByText('Was ist 2 + 2?')).toBeTruthy();
  });

  it('has an input field and check button', () => {
    render(<NumericInputExercise exercise={exercise} onComplete={() => {}} />);
    expect(screen.getByRole('spinbutton')).toBeTruthy();
    expect(screen.getByText('Prüfen')).toBeTruthy();
  });

  it('shows hint on button click', () => {
    render(<NumericInputExercise exercise={exercise} onComplete={() => {}} />);
    fireEvent.click(screen.getByText('Tipp 1/1'));
    expect(screen.getByText('Zaehle mit den Fingern.')).toBeTruthy();
  });
});
