import { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { I18nProvider } from './i18n/I18nProvider';
import { useTranslation } from './i18n/useTranslation';
import { getModule } from './modules/registry';
import Layout from './components/Layout';
import TopicSelector from './components/TopicSelector';
import LevelMap from './components/LevelMap';
import StoryIntro from './components/StoryIntro';
import ExerciseView from './components/ExerciseView';
import LevelComplete from './components/LevelComplete';
import BadgeWall from './components/BadgeWall';
import ProfileCard from './components/ProfileCard';

// Side-effect: registers modules + exercises
import './modules/quad-funktionen';
import './modules/differentialrechnung';

const VIEWS = {
  TOPICS: 'topics',
  LEVELS: 'levels',
  STORY: 'story',
  EXERCISE: 'exercise',
  COMPLETE: 'complete',
  BADGES: 'badges',
  PROFILE: 'profile',
};

function AppContent() {
  const [view, setView] = useState(VIEWS.TOPICS);
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const [currentLevelId, setCurrentLevelId] = useState(null);
  const [currentExerciseId, setCurrentExerciseId] = useState(null);
  const [storyShown, setStoryShown] = useState(new Set());
  const [completionData, setCompletionData] = useState(null);
  const [exerciseLabel, setExerciseLabel] = useState('');

  const { state, dispatch } = useGame();
  const { t } = useTranslation();

  const currentModule = currentModuleId ? getModule(currentModuleId) : null;
  const moduleName = currentModuleId ? t(`modules.${currentModuleId}.title`) : '';

  // --- Navigation handlers ---

  const handleSelectModule = (moduleId) => {
    setCurrentModuleId(moduleId);
    setView(VIEWS.LEVELS);
  };

  const handleSelectLevel = (levelId) => {
    setCurrentLevelId(levelId);
    const key = `${currentModuleId}:${levelId}`;
    if (!storyShown.has(key)) {
      setStoryShown(prev => new Set(prev).add(key));
      setView(VIEWS.STORY);
    } else {
      setCurrentExerciseId(null);
      setView(VIEWS.EXERCISE);
    }
  };

  const handleStartExercise = () => {
    setCurrentExerciseId(null);
    setView(VIEWS.EXERCISE);
  };

  const handleExerciseComplete = (exerciseId, nextExerciseId) => {
    const result = state.modules[currentModuleId]?.exerciseResults?.[exerciseId];
    const stars = result?.stars || 1;
    setCompletionData({ exerciseId, stars, levelId: currentLevelId, nextExerciseId });
    setView(VIEWS.COMPLETE);
  };

  const handleNextExercise = () => {
    if (completionData?.nextExerciseId) {
      setCurrentExerciseId(completionData.nextExerciseId);
      setCompletionData(null);
      setView(VIEWS.EXERCISE);
    } else {
      handleBackToLevels();
    }
  };

  const handleBackToLevels = () => {
    setView(VIEWS.LEVELS);
    setCurrentLevelId(null);
    setCurrentExerciseId(null);
    setCompletionData(null);
  };

  const handleBackToTopics = () => {
    setView(VIEWS.TOPICS);
    setCurrentModuleId(null);
    setCurrentLevelId(null);
    setCurrentExerciseId(null);
    setCompletionData(null);
  };

  const handleNavigate = (viewName) => {
    setView(viewName);
  };

  const handleLanguageChange = (lang) => {
    dispatch({ type: 'SET_LANGUAGE', payload: { language: lang } });
  };

  // --- Back button logic ---
  const handleBack = () => {
    if (view === VIEWS.LEVELS) return handleBackToTopics();
    if (view === VIEWS.STORY) return handleBackToLevels();
    if (view === VIEWS.EXERCISE || view === VIEWS.COMPLETE) return handleBackToLevels();
    if (view === VIEWS.BADGES || view === VIEWS.PROFILE) return setView(currentModuleId ? VIEWS.LEVELS : VIEWS.TOPICS);
  };

  // --- Exercise label for header ---
  const handleExerciseLabelChange = (label) => {
    setExerciseLabel(label);
  };

  return (
    <Layout
      view={view}
      moduleName={moduleName}
      exerciseLabel={exerciseLabel}
      onBack={view !== VIEWS.TOPICS ? handleBack : null}
      onNavigate={handleNavigate}
      onLanguageChange={handleLanguageChange}
    >
      {view === VIEWS.TOPICS && (
        <TopicSelector onSelectModule={handleSelectModule} />
      )}

      {view === VIEWS.LEVELS && currentModule && (
        <LevelMap
          moduleId={currentModuleId}
          levels={currentModule.levels}
          accentColor={currentModule.accentColor}
          onSelectLevel={handleSelectLevel}
        />
      )}

      {view === VIEWS.STORY && currentModule && currentLevelId && (
        <StoryIntro
          moduleId={currentModuleId}
          levelId={currentLevelId}
          accentColor={currentModule.accentColor}
          onStart={handleStartExercise}
        />
      )}

      {view === VIEWS.EXERCISE && (
        <ExerciseView
          moduleId={currentModuleId}
          levelId={currentLevelId}
          exerciseId={currentExerciseId}
          onComplete={handleExerciseComplete}
          onBack={handleBackToLevels}
        />
      )}

      {view === VIEWS.COMPLETE && completionData && (
        <LevelComplete
          exerciseId={completionData.exerciseId}
          stars={completionData.stars}
          levelId={completionData.levelId}
          onNextExercise={completionData.nextExerciseId ? handleNextExercise : null}
          onBackToMap={handleBackToLevels}
        />
      )}

      {view === VIEWS.BADGES && (
        <BadgeWall moduleId={currentModuleId} onBack={handleBack} />
      )}

      {view === VIEWS.PROFILE && (
        <ProfileCard onBack={handleBack} />
      )}
    </Layout>
  );
}

function AppWithI18n() {
  const { state } = useGame();
  return (
    <I18nProvider language={state.language}>
      <AppContent />
    </I18nProvider>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppWithI18n />
    </GameProvider>
  );
}
