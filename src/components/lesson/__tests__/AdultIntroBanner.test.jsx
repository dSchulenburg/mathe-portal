import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DisplayModeProvider } from '../../../context/DisplayModeContext';
import AdultIntroBanner from '../AdultIntroBanner';

describe('AdultIntroBanner', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
    sessionStorage.clear();
  });

  it('renders null in youth mode', () => {
    const { container } = render(
      <DisplayModeProvider>
        <AdultIntroBanner title="Potenzgesetze" objectives={['Rechne mit Potenzen']} />
      </DisplayModeProvider>
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders title and objectives in adult mode', () => {
    window.history.replaceState({}, '', '/?mode=adult');
    render(
      <DisplayModeProvider>
        <AdultIntroBanner
          title="Potenzgesetze"
          objectives={['Rechne mit Potenzen', 'Vereinfache Ausdrücke']}
        />
      </DisplayModeProvider>
    );
    expect(screen.getByText('Potenzgesetze')).toBeInTheDocument();
    expect(screen.getByText('Rechne mit Potenzen')).toBeInTheDocument();
    expect(screen.getByText('Vereinfache Ausdrücke')).toBeInTheDocument();
  });
});
