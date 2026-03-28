/** @type {Map<string, object>} */
const exercises = new Map();

export function registerExercise(exercise) {
  if (!exercise.id) throw new Error('Exercise must have an id');
  exercises.set(exercise.id, exercise);
}

export function getExercise(id) {
  return exercises.get(id);
}

export function getExercisesByTopic(topicId) {
  return Array.from(exercises.values()).filter(e => e.topicId === topicId);
}

export function getExercisesByLevel(topicId, diffLevel) {
  return Array.from(exercises.values()).filter(
    e => e.topicId === topicId && e.diffLevel === diffLevel
  );
}

export function filterExercises({ topicId, diffLevel, competency, type, tag } = {}) {
  let result = Array.from(exercises.values());
  if (topicId) result = result.filter(e => e.topicId === topicId);
  if (diffLevel) result = result.filter(e => e.diffLevel === diffLevel);
  if (competency) result = result.filter(e => e.competencies.includes(competency));
  if (type) result = result.filter(e => e.type === type);
  if (tag) result = result.filter(e => e.tags?.includes(tag));
  return result;
}

export function getAllExercises() {
  return Array.from(exercises.values());
}

export function clearDB() {
  exercises.clear();
}
