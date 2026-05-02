import { useState, useMemo } from 'react';

/**
 * Einheitskreis-Explorer — bridges right-triangle trig to the unit circle
 * and to periodic functions. The slider walks the angle α; the side-by-side
 * unrolling visualises why sin/cos look like waves and why
 * sin² + cos² = 1 is just Pythagoras at radius 1.
 */

const W = 660;
const H = 340;
const C_X = 170;            // circle center x
const C_Y = 170;            // circle center y
const R = 130;              // circle radius
const WAVE_X0 = 340;        // wave plot left edge
const WAVE_W = 290;         // wave plot width
const WAVE_AMP = 130;       // sin/cos amplitude in pixels

const COLORS = {
  axis: '#94a3b8',
  circle: '#475569',
  point: '#1e293b',
  cos: '#3b82f6',
  sin: '#ec4899',
  bg: '#f8fafc',
  text: '#1e293b',
  textMuted: '#64748b',
};

const SPECIAL_ANGLES = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];

function specialValue(deg, fn) {
  // Returns nice text for sin/cos at special angles
  const r = (deg * Math.PI) / 180;
  const v = fn(r);
  if (Math.abs(v) < 1e-9) return '0';
  if (Math.abs(v - 1) < 1e-9) return '1';
  if (Math.abs(v + 1) < 1e-9) return '−1';
  if (Math.abs(Math.abs(v) - 0.5) < 1e-9) return v < 0 ? '−½' : '½';
  if (Math.abs(Math.abs(v) - Math.SQRT2 / 2) < 1e-9) return v < 0 ? '−√2⁄2' : '√2⁄2';
  if (Math.abs(Math.abs(v) - Math.sqrt(3) / 2) < 1e-9) return v < 0 ? '−√3⁄2' : '√3⁄2';
  return v.toFixed(3);
}

export default function Einheitskreis() {
  const [angle, setAngle] = useState(60);   // in degrees
  const [showWave, setShowWave] = useState(true);
  const [snapToSpecial, setSnapToSpecial] = useState(false);

  const handleAngleChange = (raw) => {
    const v = Number(raw);
    if (snapToSpecial) {
      const closest = SPECIAL_ANGLES.reduce((a, b) =>
        Math.abs(b - v) < Math.abs(a - v) ? b : a
      );
      setAngle(closest);
    } else {
      setAngle(v);
    }
  };

  const rad = (angle * Math.PI) / 180;
  const cosA = Math.cos(rad);
  const sinA = Math.sin(rad);
  const Px = C_X + R * cosA;
  const Py = C_Y - R * sinA;          // SVG y-down → flip sign

  // Pre-compute the wave path up to current angle
  const wavePoints = useMemo(() => {
    const samples = 200;
    const sin = [];
    const cos = [];
    for (let i = 0; i <= samples; i++) {
      const a = (i / samples) * angle;
      const ar = (a * Math.PI) / 180;
      const x = WAVE_X0 + (i / samples) * WAVE_W * (angle / 360);
      sin.push(`${x},${C_Y - WAVE_AMP * Math.sin(ar)}`);
      cos.push(`${x},${C_Y - WAVE_AMP * Math.cos(ar)}`);
    }
    return { sin: sin.join(' '), cos: cos.join(' ') };
  }, [angle]);

  // Tick marks on wave x-axis (every 90°)
  const waveTicks = [0, 90, 180, 270, 360];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Slider + toggles */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <label style={{ flex: 1, minWidth: '240px', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>Winkel α</strong>
            <span style={{ fontFamily: 'ui-monospace, monospace' }}>
              {angle}° = {(rad).toFixed(3)} rad
            </span>
          </div>
          <input type="range" min={0} max={360} step={1} value={angle}
                 onChange={(e) => handleAngleChange(e.target.value)} style={{ width: '100%' }} />
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', cursor: 'pointer' }}>
          <input type="checkbox" checked={snapToSpecial} onChange={(e) => setSnapToSpecial(e.target.checked)} />
          Auf besondere Winkel rasten
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', cursor: 'pointer' }}>
          <input type="checkbox" checked={showWave} onChange={(e) => setShowWave(e.target.checked)} />
          Welle abrollen
        </label>
      </div>

      {/* Live values */}
      <div style={{
        padding: '0.6rem 0.8rem',
        borderRadius: '8px',
        background: 'var(--mp-surface)',
        border: '1px solid var(--mp-border)',
        fontFamily: 'ui-monospace, monospace',
        fontSize: '0.9rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '0.5rem',
      }}>
        <div><span style={{ color: COLORS.cos }}>cos(α)</span> = <strong>{specialValue(angle, Math.cos)}</strong></div>
        <div><span style={{ color: COLORS.sin }}>sin(α)</span> = <strong>{specialValue(angle, Math.sin)}</strong></div>
        <div>tan(α) = <strong>{Math.abs(cosA) < 1e-9 ? 'undefiniert' : (sinA / cosA).toFixed(3)}</strong></div>
        <div style={{ color: '#10b981' }}>
          cos² + sin² = <strong>{(cosA * cosA + sinA * sinA).toFixed(3)}</strong> ✓
        </div>
      </div>

      {/* SVG */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{
          width: '100%',
          maxWidth: `${W}px`,
          height: 'auto',
          background: COLORS.bg,
          borderRadius: '8px',
          border: '1px solid var(--mp-border)',
        }}
      >
        {/* === Left: Unit circle === */}
        {/* Axes */}
        <line x1={20} y1={C_Y} x2={C_X + R + 20} y2={C_Y} stroke={COLORS.axis} strokeWidth={1} />
        <line x1={C_X} y1={20} x2={C_X} y2={C_Y + R + 20} stroke={COLORS.axis} strokeWidth={1} />
        {/* Axis ticks at ±1 */}
        <line x1={C_X + R} y1={C_Y - 4} x2={C_X + R} y2={C_Y + 4} stroke={COLORS.axis} />
        <line x1={C_X - R} y1={C_Y - 4} x2={C_X - R} y2={C_Y + 4} stroke={COLORS.axis} />
        <line x1={C_X - 4} y1={C_Y - R} x2={C_X + 4} y2={C_Y - R} stroke={COLORS.axis} />
        <line x1={C_X - 4} y1={C_Y + R} x2={C_X + 4} y2={C_Y + R} stroke={COLORS.axis} />
        <text x={C_X + R + 4} y={C_Y - 6} fontSize={10} fill={COLORS.textMuted}>1</text>
        <text x={C_X - R - 12} y={C_Y - 6} fontSize={10} fill={COLORS.textMuted}>−1</text>
        <text x={C_X + 6} y={C_Y - R + 4} fontSize={10} fill={COLORS.textMuted}>1</text>
        <text x={C_X + 6} y={C_Y + R + 12} fontSize={10} fill={COLORS.textMuted}>−1</text>

        {/* Unit circle */}
        <circle cx={C_X} cy={C_Y} r={R} fill="none" stroke={COLORS.circle} strokeWidth={1.5} />

        {/* Angle arc */}
        <path
          d={(() => {
            const sweep = angle > 180 ? 1 : 0;
            const x2 = C_X + 25 * Math.cos(rad);
            const y2 = C_Y - 25 * Math.sin(rad);
            return `M ${C_X + 25} ${C_Y} A 25 25 0 ${sweep} 0 ${x2} ${y2}`;
          })()}
          stroke="#fbbf24"
          strokeWidth={2}
          fill="none"
        />
        <text x={C_X + 32} y={C_Y - 8} fontSize={11} fill="#d97706" fontWeight={600}>α</text>

        {/* cos and sin perpendiculars */}
        <line x1={C_X} y1={C_Y} x2={Px} y2={C_Y} stroke={COLORS.cos} strokeWidth={3} />
        <line x1={Px} y1={C_Y} x2={Px} y2={Py} stroke={COLORS.sin} strokeWidth={3} />
        {/* Hypotenuse (radius to P) */}
        <line x1={C_X} y1={C_Y} x2={Px} y2={Py} stroke={COLORS.point} strokeWidth={1.5} strokeDasharray="3,3" />

        {/* Point P */}
        <circle cx={Px} cy={Py} r={6} fill={COLORS.point} stroke="#fff" strokeWidth={2} />
        <text x={Px + (cosA >= 0 ? 8 : -8)} y={Py + (sinA >= 0 ? -10 : 16)}
              textAnchor={cosA >= 0 ? 'start' : 'end'} fontSize={11} fontWeight={600} fill={COLORS.point}>
          P
        </text>

        {/* === Divider === */}
        <line x1={WAVE_X0 - 12} y1={20} x2={WAVE_X0 - 12} y2={H - 20}
              stroke={COLORS.axis} strokeWidth={1} strokeDasharray="2,4" />

        {/* === Right: Wave === */}
        {showWave && (
          <>
            {/* x-axis */}
            <line x1={WAVE_X0} y1={C_Y} x2={WAVE_X0 + WAVE_W} y2={C_Y} stroke={COLORS.axis} />
            {/* Tick marks for 0, 90, 180, 270, 360 */}
            {waveTicks.map((deg) => {
              const x = WAVE_X0 + (deg / 360) * WAVE_W;
              return (
                <g key={`wt-${deg}`}>
                  <line x1={x} y1={C_Y - 4} x2={x} y2={C_Y + 4} stroke={COLORS.axis} />
                  <text x={x} y={C_Y + 16} fontSize={9} fill={COLORS.textMuted} textAnchor="middle">
                    {deg}°
                  </text>
                </g>
              );
            })}
            {/* y-axis */}
            <line x1={WAVE_X0} y1={C_Y - WAVE_AMP} x2={WAVE_X0} y2={C_Y + WAVE_AMP} stroke={COLORS.axis} />
            <text x={WAVE_X0 - 6} y={C_Y - WAVE_AMP + 4} fontSize={9} fill={COLORS.textMuted} textAnchor="end">1</text>
            <text x={WAVE_X0 - 6} y={C_Y + 4} fontSize={9} fill={COLORS.textMuted} textAnchor="end">0</text>
            <text x={WAVE_X0 - 6} y={C_Y + WAVE_AMP + 4} fontSize={9} fill={COLORS.textMuted} textAnchor="end">−1</text>

            {/* Cosine path */}
            <polyline points={wavePoints.cos} fill="none" stroke={COLORS.cos} strokeWidth={2} opacity={0.85} />
            {/* Sine path */}
            <polyline points={wavePoints.sin} fill="none" stroke={COLORS.sin} strokeWidth={2} opacity={0.85} />

            {/* Current angle markers on the wave */}
            {(() => {
              const x = WAVE_X0 + (angle / 360) * WAVE_W;
              return (
                <g>
                  <line x1={x} y1={C_Y - WAVE_AMP - 4} x2={x} y2={C_Y + WAVE_AMP + 4}
                        stroke="#fbbf24" strokeWidth={1} strokeDasharray="2,3" />
                  <circle cx={x} cy={C_Y - WAVE_AMP * cosA} r={4} fill={COLORS.cos} stroke="#fff" strokeWidth={1.5} />
                  <circle cx={x} cy={C_Y - WAVE_AMP * sinA} r={4} fill={COLORS.sin} stroke="#fff" strokeWidth={1.5} />
                </g>
              );
            })()}

            {/* Legend */}
            <g transform={`translate(${WAVE_X0 + WAVE_W - 70}, 28)`}>
              <line x1={0} y1={0} x2={16} y2={0} stroke={COLORS.cos} strokeWidth={2} />
              <text x={20} y={4} fontSize={11} fill={COLORS.cos}>cos α</text>
              <line x1={0} y1={16} x2={16} y2={16} stroke={COLORS.sin} strokeWidth={2} />
              <text x={20} y={20} fontSize={11} fill={COLORS.sin}>sin α</text>
            </g>
          </>
        )}
      </svg>

      <p style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', margin: 0, fontStyle: 'italic' }}>
        P liegt auf dem Einheitskreis bei <code>(cos α | sin α)</code>. Die Strecke vom Ursprung zu P ist <strong>1</strong> —
        deshalb ist <code>sin²α + cos²α = 1</code> einfach Pythagoras am Einheitskreis.
        Wenn der Punkt rotiert, „rollt" sich die Sinus-Welle ab.
      </p>
    </div>
  );
}
