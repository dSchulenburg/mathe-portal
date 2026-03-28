import { useState, useCallback } from 'react';
import FunctionGraph, { toSVG, toMath, WIDTH, HEIGHT, PADDING } from './FunctionGraph';

export default function SlopeExplorer({
  fn,
  fnDerivative,
  xRange = [-4, 4],
  yRange = [-4, 8],
  initialX = 1,
  showSlopeValue = true,
  showTangentLine = true,
  showSlopeTriangle = false,
  onXChange,
}) {
  const [currentX, setCurrentX] = useState(initialX);
  const [isDragging, setIsDragging] = useState(false);

  const slope = fnDerivative(currentX);
  const yValue = fn(currentX);

  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => setIsDragging(false);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const svgX = (e.clientX - rect.left) * (WIDTH / rect.width);
    const [mathX] = toMath(svgX, 0, xRange, yRange);
    const clampedX = Math.max(xRange[0] + 0.5, Math.min(xRange[1] - 0.5, mathX));
    const rounded = Math.round(clampedX * 20) / 20;
    setCurrentX(rounded);
    if (onXChange) onXChange(rounded, fnDerivative(rounded));
  }, [isDragging, xRange, yRange, fnDerivative, onXChange]);

  const highlightPoints = [
    { x: currentX, y: yValue, color: 'var(--mp-secondary)', label: '' },
  ];

  if (showSlopeTriangle) {
    const dx = 1;
    const dy = slope * dx;
    highlightPoints.push(
      { x: currentX + dx, y: yValue, label: 'Δx=1', color: 'var(--mp-muted)' },
      { x: currentX + dx, y: yValue + dy, label: `Δy=${dy.toFixed(1)}`, color: 'var(--mp-accent)' },
    );
  }

  return (
    <div className="slope-explorer">
      <div
        style={{ position: 'relative', touchAction: 'none' }}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerDown={handlePointerDown}
      >
        <FunctionGraph
          fn={fn}
          fnDerivative={fnDerivative}
          xRange={xRange}
          yRange={yRange}
          showGrid={true}
          showTangentAt={showTangentLine ? currentX : undefined}
          highlightPoints={highlightPoints}
          interactive={false}
        />
      </div>
      {showSlopeValue && (
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <span style={{ color: 'var(--mp-muted)', fontSize: '0.9rem' }}>
            x = {currentX.toFixed(1)} · f(x) = {yValue.toFixed(2)} ·{' '}
          </span>
          <span style={{ color: 'var(--mp-secondary)', fontWeight: 600, fontSize: '1.1rem' }}>
            m = f′(x) = {slope.toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
}
