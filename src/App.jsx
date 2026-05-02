import { useState, useEffect } from 'react';
import { GameProvider } from './context/GameContext';
import { I18nProvider } from './i18n/I18nProvider';
import { parseRoute, navigate } from './lib/router';
import TopicView from './components/views/TopicView';
import SingleExerciseView from './components/views/SingleExerciseView';
import TopicGrid from './components/views/TopicGrid';
import MikroCardMount from './components/journal/MikroCardMount';

function RouteAwareApp() {
  const [route, setRoute] = useState(() => parseRoute());

  useEffect(() => {
    const handler = () => setRoute(parseRoute());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  if (route.view === 'topic') {
    return (
      <I18nProvider>
        <GameProvider>
          <div style={{ background: 'var(--mp-bg)', minHeight: '100vh', color: 'var(--mp-text)' }}>
            <TopicView topicId={route.topicId} onBack={() => navigate('/')} />
            <MikroCardMount />
          </div>
        </GameProvider>
      </I18nProvider>
    );
  }

  if (route.view === 'exercise') {
    return (
      <I18nProvider>
        <GameProvider>
          <div style={{ background: 'var(--mp-bg)', minHeight: '100vh', color: 'var(--mp-text)' }}>
            <SingleExerciseView exerciseId={route.exerciseId} onBack={() => navigate('/')} />
            <MikroCardMount />
          </div>
        </GameProvider>
      </I18nProvider>
    );
  }

  // Default: TopicGrid (∫nfinity)
  return (
    <I18nProvider>
      <GameProvider>
        <div style={{ background: 'var(--mp-bg)', minHeight: '100vh', color: 'var(--mp-text)' }}>
          <TopicGrid />
          <MikroCardMount />
        </div>
      </GameProvider>
    </I18nProvider>
  );
}

export default function App() {
  return <RouteAwareApp />;
}
