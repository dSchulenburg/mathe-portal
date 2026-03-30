import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const ALL_LESSON_SECTIONS = ['story', 'objectives', 'explanation', 'concepts', 'examples', 'realWorld', 'mistakes'];

const updateStreak = (state) => {
  const today = new Date().toDateString();
  const last = state.lastPracticeDate ? new Date(state.lastPracticeDate).toDateString() : null;
  if (last === today) return { streakDays: state.streakDays, lastPracticeDate: state.lastPracticeDate };
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  return {
    streakDays: last === yesterday ? state.streakDays + 1 : 1,
    lastPracticeDate: Date.now(),
  };
};

export const useMathStore = create(
  persist(
    (set, get) => ({
      // State
      completedExercises: {},
      totalPoints: 0,
      streakDays: 0,
      lastPracticeDate: null,
      lessonSectionsRead: {},

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
          ...updateStreak(state),
        };
      }),

      markSectionRead: (topicId, sectionKey) => set((state) => {
        if (state.lessonSectionsRead[topicId]?.[sectionKey]) return state;

        const updated = {
          ...state.lessonSectionsRead,
          [topicId]: { ...state.lessonSectionsRead[topicId], [sectionKey]: true },
        };

        const allRead = ALL_LESSON_SECTIONS.every(s => updated[topicId]?.[s]);
        const bonus = allRead ? 20 : 0;

        return {
          lessonSectionsRead: updated,
          totalPoints: state.totalPoints + 5 + bonus,
          ...updateStreak(state),
        };
      }),

      getLessonProgress: (topicId) => {
        const sections = get().lessonSectionsRead[topicId] || {};
        const read = ALL_LESSON_SECTIONS.filter(s => sections[s]).length;
        return { read, total: ALL_LESSON_SECTIONS.length, complete: read === ALL_LESSON_SECTIONS.length };
      },

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
        lessonSectionsRead: {},
      }),
    }),
    {
      name: 'mathe-db-v1',
      partialize: (state) => ({
        completedExercises: state.completedExercises,
        totalPoints: state.totalPoints,
        streakDays: state.streakDays,
        lastPracticeDate: state.lastPracticeDate,
        lessonSectionsRead: state.lessonSectionsRead,
      }),
    }
  )
);
