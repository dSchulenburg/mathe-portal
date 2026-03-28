import { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import Layout from './components/Layout';
import LevelMap from './components/LevelMap';
import StoryIntro from './components/StoryIntro';
import ExerciseView from './components/ExerciseView';
import LevelComplete from './components/LevelComplete';
import BadgeWall from './components/BadgeWall';
import ProfileCard from './components/ProfileCard';

// Import all level exercises — importing triggers registerExercises
import './exercises/level1';
import './exercises/level2';
import './exercises/level3';
import './exercises/level4';
import './exercises/level5';
import './exercises/level6';

const VIEWS = { LEVELS: 'levels', STORY: 'story', EXERCISE: 'exercise', COMPLETE: 'complete', BADGES: 'badges', PROFILE: 'profile' };

function AppContent() {
  const [view, setView] = useState(VIEWS.LEVELS);
  const [currentLevelId, setCurrentLevelId] = useState(null);
  const [currentExerciseId, setCurrentExerciseId] = useState(null);
  const [storyShown, setStoryShown] = useState(new Set());
  const [completionData, setCompletionData] = useState(null);
  const { state } = useGame();

  const handleSelectLevel = (levelId) => {
    setCurrentLevelId(levelId);
    if (!storyShown.has(levelId)) {
      setStoryShown(prev => new Set(prev).add(levelId));
      setView(VIEWS.STORY);
    } else {
      setCurrentExerciseId(null); // let ExerciseView pick first incomplete
      setView(VIEWS.EXERCISE);
    }
  };

  const handleStartExercise = () => {
    setCurrentExerciseId(null);
    setView(VIEWS.EXERCISE);
  };

  const handleExerciseComplete = (exerciseId, nextExerciseId) => {
    const result = state.exerciseResults[exerciseId];
    const stars = result?.stars || 1;

    setCompletionData({
      exerciseId,
      stars,
      levelId: currentLevelId,
      nextExerciseId,
    });
    setView(VIEWS.COMPLETE);
  };

  const handleNextExercise = () => {
    if (completionData?.nextExerciseId) {
      setCurrentExerciseId(completionData.nextExerciseId);
      setCompletionData(null);
      setView(VIEWS.EXERCISE);
    } else {
      handleBackToMap();
    }
  };

  const handleBackToMap = () => {
    setView(VIEWS.LEVELS);
    setCurrentLevelId(null);
    setCurrentExerciseId(null);
    setCompletionData(null);
  };

  const handleNavigate = (viewName) => {
    setView(viewName);
  };

  return (
    <Layout onNavigate={handleNavigate}>
      {view === VIEWS.LEVELS && (
        <LevelMap onSelectLevel={handleSelectLevel} />
      )}
      {view === VIEWS.STORY && (
        <StoryIntro levelId={currentLevelId} onStart={handleStartExercise} />
      )}
      {view === VIEWS.EXERCISE && (
        <ExerciseView
          levelId={currentLevelId}
          exerciseId={currentExerciseId}
          onComplete={handleExerciseComplete}
          onBack={handleBackToMap}
        />
      )}
      {view === VIEWS.COMPLETE && completionData && (
        <LevelComplete
          exerciseId={completionData.exerciseId}
          stars={completionData.stars}
          levelId={completionData.levelId}
          onNextExercise={completionData.nextExerciseId ? handleNextExercise : null}
          onBackToMap={handleBackToMap}
        />
      )}
      {view === VIEWS.BADGES && (
        <BadgeWall onBack={handleBackToMap} />
      )}
      {view === VIEWS.PROFILE && (
        <ProfileCard onBack={handleBackToMap} />
      )}
    </Layout>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}
