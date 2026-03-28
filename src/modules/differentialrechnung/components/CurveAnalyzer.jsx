import { useState, useCallback } from 'react';
import FunctionGraph from './FunctionGraph';

export default function CurveAnalyzer({
  fn,
  fnDerivative,
  fnSecondDerivative,
  xRange = [-3, 3],
  yRange,
  mode = 'extrema',
  expectedPoints = [],
  expectedRegions = [],
  tolerance = 0.3,
  onResult,
}) {
  const [markedPoints, setMarkedPoints] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  // Auto-compute yRange if not provided
  const computedYRange = yRange || (() => {
    let minY = Infinity, maxY = -Infinity;
    for (let x = xRange[0]; x <= xRange[1]; x += 0.1) {
      const y = fn(x);
      if (isFinite(y)) { minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
    }
    const padding = (maxY - minY) * 0.2 || 2;
    return [Math.floor(minY - padding), Math.ceil(maxY + padding)];
  })();

  const handlePointClick = useCallback((point) => {
    if (isChecked) return;
    const existing = markedPoints.findIndex(
      p => Math.abs(p.x - point.x) < tolerance && Math.abs(p.y - point.y) < tolerance
    );
    if (existing >= 0) {
      setMarkedPoints(prev => prev.filter((_, i) => i !== existing));
    } else {
      const nearest = expectedPoints.find(
        ep => Math.abs(ep.x - point.x) < tolerance * 1.5
      );
      const snappedX = nearest ? nearest.x : point.x;
      const snappedY = fn(snappedX);
      setMarkedPoints(prev => [...prev, { x: snappedX, y: snappedY }]);
    }
  }, [isChecked, markedPoints, expectedPoints, tolerance, fn]);

  const checkAnswer = () => {
    const results = [];
    const found = [];
    const missed = [];

    expectedPoints.forEach(ep => {
      const match = markedPoints.find(mp => Math.abs(mp.x - ep.x) < tolerance);
      if (match) {
        found.push({ ...ep, matched: true });
        results.push({ x: ep.x, y: fn(ep.x), color: 'var(--mp-success)', label: '✓' });
      } else {
        missed.push(ep);
        results.push({ x: ep.x, y: fn(ep.x), color: 'var(--mp-error)', label: ep.type || '?' });
      }
    });

    markedPoints.forEach(mp => {
      const isExpected = expectedPoints.find(ep => Math.abs(mp.x - ep.x) < tolerance);
      if (!isExpected) {
        results.push({ x: mp.x, y: mp.y, color: 'var(--mp-error)', label: '✗' });
      }
    });

    setFeedback(results);
    setIsChecked(true);

    const correct = found.length === expectedPoints.length &&
      markedPoints.length === expectedPoints.length;

    if (onResult) onResult({ correct, found, missed, markedPoints });
  };

  const resetAnalysis = () => {
    setMarkedPoints([]);
    setFeedback([]);
    setIsChecked(false);
  };

  const displayPoints = isChecked ? feedback : markedPoints.map(p => ({
    ...p, color: 'var(--mp-accent)',
    label: `(${p.x.toFixed(1)}|${p.y.toFixed(1)})`,
  }));

  const modeLabels = {
    extrema: 'Markiere die Extrempunkte (Hoch- und Tiefpunkte)',
    inflection: 'Markiere die Wendepunkte',
    zeros: 'Markiere die Nullstellen',
    monotony: 'Markiere die Bereiche',
    full: 'Führe eine vollständige Kurvendiskussion durch',
  };

  return (
    <div className="curve-analyzer">
      <p style={{ color: 'var(--mp-muted)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
        {modeLabels[mode] || modeLabels.extrema}
        {!isChecked && ` (${markedPoints.length}/${expectedPoints.length} Punkte markiert)`}
      </p>

      <FunctionGraph
        fn={fn}
        xRange={xRange}
        yRange={computedYRange}
        showGrid={true}
        highlightPoints={displayPoints}
        interactive={!isChecked}
        onPointClick={handlePointClick}
        accentColor="var(--mp-primary)"
      />

      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '0.75rem' }}>
        {!isChecked && markedPoints.length > 0 && (
          <button onClick={checkAnswer}
            style={{ background: 'var(--mp-primary)', color: 'white', border: 'none',
              padding: '0.5rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>
            Prüfen
          </button>
        )}
        {isChecked && (
          <button onClick={resetAnalysis}
            style={{ background: 'var(--mp-surface)', color: 'var(--mp-text)',
              border: '1px solid var(--mp-border)', padding: '0.5rem 1rem',
              borderRadius: '8px', cursor: 'pointer' }}>
            Nochmal
          </button>
        )}
      </div>
    </div>
  );
}
