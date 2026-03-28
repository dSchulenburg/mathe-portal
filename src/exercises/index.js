// Will be populated by level exercise files
// Each exercise follows this schema:
/*
{
  id: 'L1-EX1',           // Unique ID
  levelId: 1,              // Which level
  order: 1,                // Order within level (1-4)
  title: 'Parabel oder nicht?',
  description: 'Erkenne, welche Funktionen quadratisch sind.',
  type: 'multiple-choice', // 'multiple-choice' | 'input' | 'step-by-step' | 'graph-interact' | 'drag-drop'
  xp: { base: 15, bonus: 8 },
  content: { ... },        // Type-specific content
  validation: { ... },     // Type-specific validation rules
  hints: ['...'],          // 1-2 hints
}
*/

const exercises = [];

export function registerExercises(exs) {
  exercises.push(...exs);
}

export function getAllExercises() {
  return exercises;
}

export function getExercise(id) {
  return exercises.find(e => e.id === id);
}

export function getLevelExercises(levelId) {
  return exercises.filter(e => e.levelId === levelId).sort((a, b) => a.order - b.order);
}

export function getNextExercise(currentId) {
  const current = getExercise(currentId);
  if (!current) return null;
  // Try next in same level
  const sameLevelNext = exercises.find(e => e.levelId === current.levelId && e.order === current.order + 1);
  if (sameLevelNext) return sameLevelNext;
  // Try first of next level
  const nextLevelFirst = exercises.find(e => e.levelId === current.levelId + 1 && e.order === 1);
  return nextLevelFirst || null;
}
