import { describe, it, expect } from 'vitest';
import { DIFF_LEVELS } from '../data/types';
import { exercises } from '../data/exercises/10-quad-gleichungen';

describe('Quadratische Gleichungen exercises', () => {
  it('has 15 exercises', () => { expect(exercises.length).toBe(15); });
  it('all have required fields', () => {
    exercises.forEach(ex => {
      expect(ex.id).toBeTruthy();
      expect(ex.topicId).toBe('10-quad-gleichungen');
      expect(DIFF_LEVELS).toContain(ex.diffLevel);
      expect(ex.competencies.length).toBeGreaterThan(0);
      expect(ex.data).toBeDefined();
      expect(ex.solutionKey).toBeTruthy();
    });
  });
  it('covers all difficulty levels', () => {
    const levels = new Set(exercises.map(e => e.diffLevel));
    expect(levels.has('basis')).toBe(true);
    expect(levels.has('standard')).toBe(true);
    expect(levels.has('erweitert')).toBe(true);
  });
  it('has unique IDs', () => {
    const ids = exercises.map(e => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
