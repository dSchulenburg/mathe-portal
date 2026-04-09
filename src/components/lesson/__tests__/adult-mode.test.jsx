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

function withAdultMode(children) {
  window.history.replaceState({}, '', '/?mode=adult');
  return <DisplayModeProvider>{children}</DisplayModeProvider>;
}

describe('Adult-mode hiding', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
    sessionStorage.clear();
  });

  it('StoryOutro renders null in adult mode', () => {
    const { container } = render(
      withAdultMode(
        <StoryOutro
          character={character}
          topicId="bruchrechnung"
          topicIndex={0}
          totalTopics={9}
          t={t}
        />
      )
    );
    expect(container.firstChild).toBeNull();
  });

  it('CharacterCallout renders null in adult mode', () => {
    const { container } = render(
      withAdultMode(
        <CharacterCallout character={character}>
          Probier es mal aus!
        </CharacterCallout>
      )
    );
    expect(container.firstChild).toBeNull();
  });

  it('AudioPlayer renders null in adult mode', () => {
    const { container } = render(
      withAdultMode(
        <AudioPlayer src="/audio/mia-intro.mp3" />
      )
    );
    expect(container.firstChild).toBeNull();
  });
});
