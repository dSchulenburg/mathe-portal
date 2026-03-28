import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TopicGrid from '../components/views/TopicGrid';

describe('TopicGrid', () => {
  it('renders main title', () => {
    render(<TopicGrid />);
    expect(screen.getByText(/Aufgabendatenbank/)).toBeTruthy();
  });

  it('renders grade tabs', () => {
    render(<TopicGrid />);
    // multiple elements contain "Klasse 10" (tab button + topic period spans + subtitle)
    expect(screen.getAllByText(/Klasse 10/).length).toBeGreaterThan(0);
  });

  it('renders topic cards', () => {
    render(<TopicGrid />);
    expect(screen.getByText(/Quadratische Funktionen/)).toBeTruthy();
    expect(screen.getByText(/Trigonometrie/)).toBeTruthy();
  });
});
