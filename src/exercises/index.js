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

export function getLevelExercises(moduleId, levelId) {
  const prefix = moduleId === 'quad-funktionen' ? 'Q' : 'D';
  return exercises
    .filter(e => e.id.startsWith(`${prefix}${levelId}-`))
    .sort((a, b) => a.order - b.order);
}

export function getNextExercise(currentId) {
  const match = currentId.match(/^([A-Z])(\d+)-EX(\d+)$/);
  if (!match) return null;
  const [, prefix, level, ex] = match;
  const levelNum = parseInt(level);
  const exNum = parseInt(ex);
  const nextInLevel = exercises.find(e => e.id === `${prefix}${levelNum}-EX${exNum + 1}`);
  if (nextInLevel) return nextInLevel;
  const nextLevel = exercises.find(e => e.id === `${prefix}${levelNum + 1}-EX1`);
  return nextLevel || null;
}
