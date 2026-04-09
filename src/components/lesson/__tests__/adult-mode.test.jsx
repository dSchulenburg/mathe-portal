import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { DisplayModeProvider } from '../../../context/DisplayModeContext';
import StoryOutro from '../StoryOutro';
import CharacterCallout from '../CharacterCallout';
import AudioPlayer from '../AudioPlayer';

// Minimal valid props per component

const character = {
  name: 'Mia Kovacs',
  portrait: '/portraits/mia.png',
  color: '#7c3aed',
  colorDark: '#1e1030',
  colorText: '#e2d9f7',
  story: 'Hafenprojekt',
};

// t() must return a real string (not the fallback key) so StoryOutro doesn't bail
const t = (key) => 'Mia hat es geschafft!';

describe('Adult-mode hiding', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
    sessionStorage.clear();
  });

  it('StoryOutro renders null in adult mode', () => {
    window.history.replaceState({}, '', '/?mode=adult');
    const { container } = render(
      <DisplayModeProvider>
        <StoryOutro
          character={character}
          topicId="bruchrechnung"
          topicIndex={0}
          totalTopics={9}
          t={t}
        />
      </DisplayModeProvider>
    );
    expect(container.firstChild).toBeNull();
  });

  it('CharacterCallout renders null in adult mode', () => {
    window.history.replaceState({}, '', '/?mode=adult');
    const { container } = render(
      <DisplayModeProvider>
        <CharacterCallout character={character}>
          Probier es mal aus!
        </CharacterCallout>
      </DisplayModeProvider>
    );
    expect(container.firstChild).toBeNull();
  });

  it('AudioPlayer renders null in adult mode', () => {
    window.history.replaceState({}, '', '/?mode=adult');
    const { container } = render(
      <DisplayModeProvider>
        <AudioPlayer src="/audio/mia-intro.mp3" />
      </DisplayModeProvider>
    );
    expect(container.firstChild).toBeNull();
  });

  it('StoryOutro renders normally in youth mode', () => {
    const { container } = render(
      <DisplayModeProvider>
        <StoryOutro
          character={character}
          topicId="bruchrechnung"
          topicIndex={0}
          totalTopics={9}
          t={t}
        />
      </DisplayModeProvider>
    );
    expect(container.firstChild).not.toBeNull();
  });

  it('CharacterCallout renders normally in youth mode', () => {
    const { container } = render(
      <DisplayModeProvider>
        <CharacterCallout character={character}>
          Probier es mal aus!
        </CharacterCallout>
      </DisplayModeProvider>
    );
    expect(container.firstChild).not.toBeNull();
  });

  it('AudioPlayer renders normally in youth mode', () => {
    const { container } = render(
      <DisplayModeProvider>
        <AudioPlayer src="/audio/mia-intro.mp3" />
      </DisplayModeProvider>
    );
    expect(container.firstChild).not.toBeNull();
  });
});
