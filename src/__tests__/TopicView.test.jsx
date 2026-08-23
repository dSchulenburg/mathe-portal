import { describe, it, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders as render } from './test-utils';
import TopicView from '../components/views/TopicView';
import { clearDB } from '../data/exerciseDB';

describe('TopicView', () => {
  beforeEach(() => clearDB());

  // Rollen-Queries statt Text-Regex: Seit der Lern-Ebene (f9a3d02) kommen
  // "Quadratische Funktionen" und "Standard" auch in Lernzielen/Lektionstext vor.
  it('renders topic header', () => {
    render(<TopicView topicId="10-quad-funktionen" onBack={() => {}} />);
    expect(screen.getByRole('heading', { level: 1, name: /Quadratische Funktionen/ })).toBeTruthy();
  });

  it('renders difficulty tabs', () => {
    render(<TopicView topicId="10-quad-funktionen" onBack={() => {}} />);
    expect(screen.getByRole('button', { name: /Basis/ })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Standard/ })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Erweitert/ })).toBeTruthy();
  });

  it('shows exercise cards', () => {
    const { container } = render(<TopicView topicId="10-quad-funktionen" onBack={() => {}} />);
    const cards = container.querySelectorAll('[data-testid="exercise-card"]');
    expect(cards.length).toBeGreaterThan(0);
  });
});
