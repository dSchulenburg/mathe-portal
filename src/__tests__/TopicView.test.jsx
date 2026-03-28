import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import TopicView from '../components/views/TopicView';
import { clearDB } from '../data/exerciseDB';

describe('TopicView', () => {
  beforeEach(() => clearDB());

  it('renders topic header', () => {
    render(<TopicView topicId="10-quad-funktionen" onBack={() => {}} />);
    expect(screen.getByText(/Quadratische Funktionen/)).toBeTruthy();
  });

  it('renders difficulty tabs', () => {
    render(<TopicView topicId="10-quad-funktionen" onBack={() => {}} />);
    expect(screen.getByText(/Basis/)).toBeTruthy();
    expect(screen.getByText(/Standard/)).toBeTruthy();
    expect(screen.getByText(/Erweitert/)).toBeTruthy();
  });

  it('shows exercise cards', () => {
    const { container } = render(<TopicView topicId="10-quad-funktionen" onBack={() => {}} />);
    const cards = container.querySelectorAll('[data-testid="exercise-card"]');
    expect(cards.length).toBeGreaterThan(0);
  });
});
