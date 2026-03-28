import { useState, useEffect, useRef } from 'react';
import FunctionGraph from './FunctionGraph';

export default function SecantToTangent({
  fn,
  fixedX = 2,
  initialH = 3,
  minH = 0.01,
  autoPlay = false,
  speed = 1,
  showFormula = true,
  showHValue = true,
  onComplete,
}) {
  const [h, setH] = useState(initialH);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const animRef = useRef(null);

  const yP = fn(fixedX);
  const yQ = fn(fixedX + h);
  const secantSlope = h !== 0 ? (yQ - yP) / h : 0;

  useEffect(() => {
    if (!isPlaying) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    let lastTime = null;
    const animate = (time) => {
      if (lastTime === null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      setH(prev => {
        const decay = Math.max(0.3, prev * 0.5);
        const newH = prev - dt * speed * decay;
        if (newH <= minH) {
          setIsPlaying(false);
          if (onComplete) onComplete();
          return minH;
        }
        return newH;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [isPlaying, speed, minH, onComplete]);

  const reset = () => {
    setH(initialH);
    setIsPlaying(false);
  };

  // Compute reasonable yRange
  const maxY = Math.max(fn(fixedX), fn(fixedX + initialH)) + 3;

  return (
    <div className="secant-to-tangent">
      <FunctionGraph
        fn={fn}
        xRange={[fixedX - 3, fixedX + initialH + 2]}
        yRange={[-2, maxY]}
        showGrid={true}
        showSecantBetween={[fixedX, fixedX + h]}
        highlightPoints={[
          { x: fixedX, y: yP, label: 'P', color: 'var(--mp-primary)' },
          { x: fixedX + h, y: yQ, label: 'Q', color: 'var(--mp-accent)' },
        ]}
      />

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        {showHValue && (
          <div style={{ color: 'var(--mp-muted)', marginBottom: '0.5rem' }}>
            h = {h.toFixed(3)}
          </div>
        )}
        {showFormula && (
          <div style={{ color: 'var(--mp-text)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--mp-muted)' }}>(f(x+h) − f(x)) / h = </span>
            <span style={{ color: 'var(--mp-accent)', fontWeight: 600 }}>
              {secantSlope.toFixed(3)}
            </span>
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              background: 'var(--mp-primary)', color: 'white', border: 'none',
              padding: '0.5rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 600,
            }}
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
          <button
            onClick={reset}
            style={{
              background: 'var(--mp-surface)', color: 'var(--mp-text)',
              border: '1px solid var(--mp-border)', padding: '0.5rem 1rem',
              borderRadius: '8px', cursor: 'pointer',
            }}
          >
            ↺ Reset
          </button>
        </div>

        <input
          type="range" min={minH} max={initialH} step={0.01} value={h}
          onChange={(e) => { setH(parseFloat(e.target.value)); setIsPlaying(false); }}
          style={{ width: '80%', marginTop: '0.75rem' }}
        />
      </div>

      {h <= minH + 0.01 && (
        <div style={{
          textAlign: 'center', color: 'var(--mp-success)', fontWeight: 600,
          marginTop: '0.5rem', fontSize: '1.1rem',
        }}>
          h → 0: Das ist die Ableitung! f′({fixedX}) ≈ {secantSlope.toFixed(1)}
        </div>
      )}
    </div>
  );
}
