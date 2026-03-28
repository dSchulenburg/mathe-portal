import { describe, it, expect, beforeEach } from 'vitest';
import {
  registerExercise,
  getExercise,
  getExercisesByTopic,
  getExercisesByLevel,
  filterExercises,
  clearDB,
} from '../data/exerciseDB';

describe('exerciseDB', () => {
  beforeEach(() => clearDB());

  const sampleExercise = {
    id: 'quad-scheitel-001',
    topicId: '10-quad-funktionen',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionKey: 'exercise.quad-scheitel-001.task',
      correctValue: 4,
      tolerance: 0.01,
    },
    hintKeys: ['exercise.quad-scheitel-001.hint1'],
    solutionKey: 'exercise.quad-scheitel-001.solution',
    tags: ['abiturrelevant'],
  };

  it('registers and retrieves an exercise', () => {
    registerExercise(sampleExercise);
    expect(getExercise('quad-scheitel-001')).toEqual(sampleExercise);
  });

  it('returns undefined for unknown ID', () => {
    expect(getExercise('nonexistent')).toBeUndefined();
  });

  it('filters by topic', () => {
    registerExercise(sampleExercise);
    registerExercise({ ...sampleExercise, id: 'other-001', topicId: '10-trig' });
    const result = getExercisesByTopic('10-quad-funktionen');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('quad-scheitel-001');
  });

  it('filters by difficulty level', () => {
    registerExercise(sampleExercise);
    registerExercise({ ...sampleExercise, id: 'quad-002', diffLevel: 'standard' });
    const result = getExercisesByLevel('10-quad-funktionen', 'basis');
    expect(result).toHaveLength(1);
  });

  it('filters by multiple criteria', () => {
    registerExercise(sampleExercise);
    registerExercise({ ...sampleExercise, id: 'quad-002', diffLevel: 'standard', competencies: ['kreativitaet'] });
    registerExercise({ ...sampleExercise, id: 'quad-003', diffLevel: 'basis', competencies: ['kreativitaet'] });
    const result = filterExercises({ topicId: '10-quad-funktionen', diffLevel: 'basis' });
    expect(result).toHaveLength(2);
    const creative = filterExercises({ topicId: '10-quad-funktionen', competency: 'kreativitaet' });
    expect(creative).toHaveLength(2);
  });
});
