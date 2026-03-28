import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorAnalysisExercise from '../components/exercises/ErrorAnalysisExercise';

const exercise = {
  id: 'test-err-001',
  topicId: '10-quad',
  type: 'error-analysis',
  diffLevel: 'erweitert',
  competencies: ['kritisches-denken'],
  points: 15,
  data: {
    questionText: 'Finde den Fehler:',
    steps: [
      { content: '2 + 2 = 4', hasError: false },
      { content: '4 × 3 = 11', hasError: true, errorExplanation: '4 × 3 = 12, nicht 11' },
      { content: '11 + 1 = 12', hasError: false },
    ],
  },
  hintKeys: ['Pruefe die Multiplikation.'],
  solutionKey: 'Schritt 2 ist falsch: 4 × 3 = 12.',
};

describe('ErrorAnalysisExercise', () => {
  it('renders question and all steps', () => {
    render(<ErrorAnalysisExercise exercise={exercise} onComplete={() => {}} />);
    expect(screen.getByText('Finde den Fehler:')).toBeTruthy();
    expect(screen.getByText('2 + 2 = 4')).toBeTruthy();
    expect(screen.getByText('4 × 3 = 11')).toBeTruthy();
    expect(screen.getByText('11 + 1 = 12')).toBeTruthy();
  });

  it('renders step numbers', () => {
    render(<ErrorAnalysisExercise exercise={exercise} onComplete={() => {}} />);
    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
  });

  it('has a check button', () => {
    render(<ErrorAnalysisExercise exercise={exercise} onComplete={() => {}} />);
    expect(screen.getByText('Prüfen')).toBeTruthy();
  });
});
