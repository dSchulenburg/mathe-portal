import { describe, it, expect } from 'vitest';
import { DIFF_LEVELS } from '../data/types';
import { exercises } from '../data/exercises/10-aehnlichkeit';
describe('Ähnlichkeit exercises', () => {
  it('has 12 exercises', () => { expect(exercises.length).toBe(12); });
  it('all have required fields', () => { exercises.forEach(ex => { expect(ex.id).toBeTruthy(); expect(ex.topicId).toBe('10-aehnlichkeit'); expect(DIFF_LEVELS).toContain(ex.diffLevel); expect(ex.competencies.length).toBeGreaterThan(0); expect(ex.data).toBeDefined(); expect(ex.solutionKey).toBeTruthy(); }); });
  it('covers all levels', () => { const l = new Set(exercises.map(e => e.diffLevel)); expect(l.has('basis')).toBe(true); expect(l.has('standard')).toBe(true); expect(l.has('erweitert')).toBe(true); });
  it('has unique IDs', () => { const ids = exercises.map(e => e.id); expect(new Set(ids).size).toBe(ids.length); });
});
