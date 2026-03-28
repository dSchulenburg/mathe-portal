import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useMathStore = create(
  persist(
    (set, get) => ({
      // State
      completedExercises: {},
      totalPoints: 0,
      streakDays: 0,
      lastPracticeDate: null,

      // Actions
      submitAnswer: (exerciseId, result) => set((state) => {
        const existing = state.completedExercises[exerciseId];
        const isNew = !existing;
        const isBetter = existing && !existing.correct && result.correct;
        const pointsToAdd = (isNew || isBetter) ? result.points : 0;

        return {
          completedExercises: {
            ...state.completedExercises,
            [exerciseId]: {
              correct: existing ? (existing.correct || result.correct) : result.correct,
              attempts: existing ? existing.attempts + result.attempts : result.attempts,
              hintsUsed: result.hintsUsed,
              points: Math.max(existing?.points || 0, result.points),
              topicId: result.topicId || existing?.topicId,
              diffLevel: result.diffLevel || existing?.diffLevel,
              timestamp: Date.now(),
            },
          },
          totalPoints: state.totalPoints + pointsToAdd,
        };
      }),

      getTopicProgress: (topicId, totalExercises) => {
        const exercises = Object.entries(get().completedExercises)
          .filter(([, r]) => r.topicId === topicId);
        const completed = exercises.length;
        const correct = exercises.filter(([, r]) => r.correct).length;
        return {
          completed,
          totalExercises,
          correctRate: completed > 0 ? correct / completed : 0,
          mastered: completed >= totalExercises * 0.8 && (correct / Math.max(completed, 1)) >= 0.8,
        };
      },

      reset: () => set({
        completedExercises: {},
        totalPoints: 0,
        streakDays: 0,
        lastPracticeDate: null,
      }),
    }),
    {
      name: 'mathe-db-v1',
      partialize: (state) => ({
        completedExercises: state.completedExercises,
        totalPoints: state.totalPoints,
        streakDays: state.streakDays,
        lastPracticeDate: state.lastPracticeDate,
      }),
    }
  )
);
