import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders as render } from './test-utils';
import TopicGrid from '../components/views/TopicGrid';

describe('TopicGrid', () => {
  it('renders main title', () => {
    render(<TopicGrid />);
    expect(screen.getByText(/∫nfinity/)).toBeTruthy();
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
