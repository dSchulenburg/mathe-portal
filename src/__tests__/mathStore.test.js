import { describe, it, expect, beforeEach } from 'vitest';
import { useMathStore } from '../store/mathStore';

describe('mathStore', () => {
  beforeEach(() => {
    useMathStore.getState().reset();
  });

  it('starts with empty state', () => {
    const state = useMathStore.getState();
    expect(state.completedExercises).toEqual({});
    expect(state.totalPoints).toBe(0);
    expect(state.streakDays).toBe(0);
  });

  it('records exercise result', () => {
    const { submitAnswer } = useMathStore.getState();
    submitAnswer('quad-001', { correct: true, attempts: 1, hintsUsed: 0, points: 10 });
    const state = useMathStore.getState();
    expect(state.completedExercises['quad-001']).toBeDefined();
    expect(state.completedExercises['quad-001'].correct).toBe(true);
    expect(state.totalPoints).toBe(10);
  });

  it('tracks best result per exercise', () => {
    const { submitAnswer } = useMathStore.getState();
    submitAnswer('quad-001', { correct: false, attempts: 1, hintsUsed: 1, points: 0 });
    submitAnswer('quad-001', { correct: true, attempts: 2, hintsUsed: 1, points: 10 });
    const state = useMathStore.getState();
    expect(state.completedExercises['quad-001'].correct).toBe(true);
    expect(state.completedExercises['quad-001'].attempts).toBe(3);
    expect(state.totalPoints).toBe(10);
  });

  it('calculates topic progress', () => {
    const { submitAnswer } = useMathStore.getState();
    submitAnswer('quad-001', { correct: true, attempts: 1, hintsUsed: 0, points: 5, topicId: '10-quad', diffLevel: 'basis' });
    submitAnswer('quad-002', { correct: true, attempts: 1, hintsUsed: 0, points: 5, topicId: '10-quad', diffLevel: 'basis' });
    const progress = useMathStore.getState().getTopicProgress('10-quad', 10);
    expect(progress.completed).toBe(2);
    expect(progress.correctRate).toBe(1);
  });
});
