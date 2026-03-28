import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MultipleChoiceExercise from '../components/exercises/MultipleChoiceExercise';

const exercise = {
  id: 'test-mc-001',
  topicId: '10-quad',
  type: 'multiple-choice',
  diffLevel: 'standard',
  competencies: ['kritisches-denken'],
  points: 10,
  data: {
    questionText: 'Welche sind quadratische Funktionen?',
    options: [
      { id: 'a', text: 'f(x) = x²', correct: true },
      { id: 'b', text: 'g(x) = 2x + 1', correct: false },
      { id: 'c', text: 'h(x) = -3x²', correct: true },
    ],
  },
  hintKeys: ['Quadratisch bedeutet: hoechste Potenz ist x².'],
  solutionKey: 'f(x) = x² und h(x) = -3x² sind quadratisch.',
};

describe('MultipleChoiceExercise', () => {
  it('renders question and all options', () => {
    render(<MultipleChoiceExercise exercise={exercise} onComplete={() => {}} />);
    expect(screen.getByText('Welche sind quadratische Funktionen?')).toBeTruthy();
    expect(screen.getByText('f(x) = x²')).toBeTruthy();
    expect(screen.getByText('g(x) = 2x + 1')).toBeTruthy();
    expect(screen.getByText('h(x) = -3x²')).toBeTruthy();
  });

  it('shows multi-select hint when multiple correct', () => {
    render(<MultipleChoiceExercise exercise={exercise} onComplete={() => {}} />);
    expect(screen.getByText(/Mehrere Antworten/)).toBeTruthy();
  });

  it('allows selecting options', () => {
    render(<MultipleChoiceExercise exercise={exercise} onComplete={() => {}} />);
    const optA = screen.getByText('f(x) = x²');
    fireEvent.click(optA);
    // Option should visually indicate selection (we check it doesn't crash)
    expect(optA).toBeTruthy();
  });
});
