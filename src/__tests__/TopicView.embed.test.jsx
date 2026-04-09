import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DisplayModeProvider } from '../context/DisplayModeContext';
import { I18nProvider } from '../i18n/I18nProvider';
import TopicView from '../components/views/TopicView';
import { clearDB } from '../data/exerciseDB';

function Wrapper({ children }) {
  return (
    <DisplayModeProvider>
      <I18nProvider>{children}</I18nProvider>
    </DisplayModeProvider>
  );
}

describe('TopicView — embed mode', () => {
  beforeEach(() => {
    clearDB();
    // Reset URL to plain path (no embed param)
    window.history.replaceState({}, '', '/');
  });

  // Use the header button's aria-label specifically to avoid false positives
  // from the "topic not found" fallback button which has text "← Zurück"
  // but no aria-label.
  const headerBackLabel = /zurück zur themenübersicht/i;

  it('hides the sticky header (Zurück button) when embed=1', () => {
    window.history.replaceState({}, '', '/?embed=1');
    render(
      <Wrapper>
        <TopicView topicId="10-quad-funktionen" onBack={() => {}} />
      </Wrapper>
    );
    expect(screen.queryByRole('button', { name: headerBackLabel })).toBeNull();
  });

  it('shows the sticky header (Zurück button) by default (no embed param)', () => {
    render(
      <Wrapper>
        <TopicView topicId="10-quad-funktionen" onBack={() => {}} />
      </Wrapper>
    );
    expect(screen.queryByRole('button', { name: headerBackLabel })).not.toBeNull();
  });
});
