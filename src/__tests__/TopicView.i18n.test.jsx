import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DisplayModeProvider } from '../context/DisplayModeContext';
import { I18nProvider } from '../i18n/I18nProvider';
import TopicView from '../components/views/TopicView';
import { clearDB } from '../data/exerciseDB';

// Befund 13.09.2026: In en/uk standen Themen-Titel und Zurueck-Knopf weiter auf
// Deutsch, weil topics.js den Klartext als titleKey traegt. Dieser Test rendert
// mit gespeicherter Sprache und prueft, dass die Uebersetzung wirklich ankommt.
function renderIn(lang) {
  localStorage.setItem('mathe-portal-language', lang);
  return render(
    <DisplayModeProvider>
      <I18nProvider>
        <TopicView topicId="10-quad-funktionen" onBack={() => {}} />
      </I18nProvider>
    </DisplayModeProvider>
  );
}

describe('TopicView — uebersetzter Header', () => {
  beforeEach(() => {
    clearDB();
    window.history.replaceState({}, '', '/');
  });
  afterEach(() => localStorage.removeItem('mathe-portal-language'));

  it('zeigt Titel und Zurueck-Knopf auf Englisch', () => {
    renderIn('en');
    expect(screen.getByRole('heading', { level: 1, name: /Quadratic Functions/ })).toBeTruthy();
    expect(screen.getByRole('button', { name: /back to topic overview/i })).toBeTruthy();
    expect(screen.queryByRole('heading', { level: 1, name: /Quadratische Funktionen/ })).toBeNull();
  });

  it('zeigt Titel auf Ukrainisch in kyrillischer Schrift', () => {
    renderIn('uk');
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toMatch(/[а-щьюяіїєґ]/i);
  });
});
