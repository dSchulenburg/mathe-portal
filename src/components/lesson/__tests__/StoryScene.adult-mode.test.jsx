import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { DisplayModeProvider } from '../../../context/DisplayModeContext';
import StoryScene from '../StoryScene';

// Minimal valid props for StoryScene
const character = {
  name: 'Mia Kovacs',
  portrait: '/portraits/mia.png',
  color: '#7c3aed',
  colorDark: '#1e1030',
  colorText: '#e2d9f7',
  story: 'Hafenprojekt',
};
const story = { intro: 'Mia blickt auf den Hafen.', challenge: 'Berechne den Weg.' };
const topicStory = { topicId: 'bruchrechnung', audioFile: null };
const t = (key) => key;

describe('StoryScene adult-mode', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
    sessionStorage.clear();
  });

  it('renders null in adult mode', () => {
    window.history.replaceState({}, '', '/?mode=adult');
    const { container } = render(
      <DisplayModeProvider>
        <StoryScene
          character={character}
          story={story}
          topicStory={topicStory}
          t={t}
        />
      </DisplayModeProvider>
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders normally in youth mode', () => {
    const { container } = render(
      <DisplayModeProvider>
        <StoryScene
          character={character}
          story={story}
          topicStory={topicStory}
          t={t}
        />
      </DisplayModeProvider>
    );
    expect(container.firstChild).not.toBeNull();
  });
});
