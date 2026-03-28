import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FunctionPlotter from '../components/stations/FunctionPlotter';

describe('FunctionPlotter', () => {
  const defaultProps = {
    functions: [
      { expression: 'x^2', color: '#f59e0b', label: 'f(x) = x²' },
    ],
    xRange: [-5, 5],
    yRange: [-2, 10],
  };

  it('renders SVG container', () => {
    const { container } = render(<FunctionPlotter {...defaultProps} />);
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('renders axis labels', () => {
    render(<FunctionPlotter {...defaultProps} />);
    expect(screen.getByText('x')).toBeTruthy();
    expect(screen.getByText('y')).toBeTruthy();
  });

  it('renders sliders when provided', () => {
    const props = {
      ...defaultProps,
      functions: [{ expression: 'a*x^2', color: '#f59e0b', label: 'f(x) = ax²' }],
      sliders: [{ param: 'a', min: -3, max: 3, step: 0.1, initial: 1, label: 'Streckungsfaktor a' }],
    };
    render(<FunctionPlotter {...props} />);
    expect(screen.getByText('Streckungsfaktor a')).toBeTruthy();
    expect(screen.getByRole('slider')).toBeTruthy();
  });
});
