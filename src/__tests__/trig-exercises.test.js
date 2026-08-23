import { describe, it, expect } from 'vitest';
import { DIFF_LEVELS } from '../data/types';
import { exercises } from '../data/exercises/10-trigonometrie';

describe('Trigonometrie exercises', () => {
  it('has 25 exercises', () => { expect(exercises.length).toBe(25); });
  it('all have required fields', () => {
    exercises.forEach(ex => {
      expect(ex.id).toBeTruthy();
      expect(ex.topicId).toBe('10-trigonometrie');
      expect(DIFF_LEVELS).toContain(ex.diffLevel);
      expect(ex.competencies.length).toBeGreaterThan(0);
      expect(ex.points).toBeGreaterThan(0);
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
  it('has no duplicate question texts', () => {
    const texts = exercises.map(e => (e.data.questionText ?? JSON.stringify(e.data)).trim());
    expect(new Set(texts).size).toBe(texts.length);
  });
});
