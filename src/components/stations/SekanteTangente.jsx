import { useState, useMemo } from 'react';

/**
 * Sekante → Tangente: the central aha-moment of differential calculus
 * made watchable. The h-slider walks from h=2 down to h=0.01;
 * the secant slope chases the tangent slope and the panel below shows
 * the difference shrinking to zero. f'(x₀) is what's left when h vanishes.
 */

const W = 580;
const H = 360;
const MARGIN = { top: 24, right: 24, bottom: 36, left: 44 };

const COLORS = {
  axis: '#94a3b8',
  grid: '#e2e8f0',
  curve: '#3b82f6',
  secant: '#f59e0b',
  tangent: '#a855f7',
  pointP: '#1e293b',
  pointQ: '#f59e0b',
  bg: '#f8fafc',
  text: '#1e293b',
  textMuted: '#64748b',
};

const FUNCTIONS = [
  {
    id: 'square',
    label: 'f(x) = x²',
    f: (x) => x * x,
    df: (x) => 2 * x,
    yRange: [-1, 9],
  },
  {
    id: 'cubic',
    label: 'f(x) = x³ − 3x',
    f: (x) => x * x * x - 3 * x,
    df: (x) => 3 * x * x - 3,
    yRange: [-4, 4],
  },
  {
    id: 'sin',
    label: 'f(x) = sin(x)',
    f: Math.sin,
    df: Math.cos,
    yRange: [-1.5, 1.5],
  },
];

const X_RANGE = [-3, 3];

export default function SekanteTangente() {
  const [funcId, setFuncId] = useState('square');
  const [x0, setX0] = useState(1);
  const [h, setH] = useState(1.5);
  const [showTangent, setShowTangent] = useState(true);

  const fn = FUNCTIONS.find(x => x.id === funcId);
  const yRange = fn.yRange;
  const innerW = W - MARGIN.left - MARGIN.right;
  const innerH = H - MARGIN.top - MARGIN.bottom;

  const xToScreen = (x) => MARGIN.left + ((x - X_RANGE[0]) / (X_RANGE[1] - X_RANGE[0])) * innerW;
  const yToScreen = (y) => MARGIN.top + innerH - ((y - yRange[0]) / (yRange[1] - yRange[0])) * innerH;

  // Function curve (sampled)
  const curvePath = useMemo(() => {
    const n = 200;
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const x = X_RANGE[0] + (i / n) * (X_RANGE[1] - X_RANGE[0]);
      const y = fn.f(x);
      if (y >= yRange[0] - 1 && y <= yRange[1] + 1) {
        pts.push(`${xToScreen(x)},${yToScreen(y)}`);
      }
    }
    return `M${pts.join(' L')}`;
  }, [fn, yRange]);

  const fP = fn.f(x0);
  const fQ = fn.f(x0 + h);
  const mSecant = (fQ - fP) / h;
  const mTangent = fn.df(x0);
  const error = Math.abs(mSecant - mTangent);

  // Secant line: extrapolated through P and Q over the plot range
  const secantY = (x) => fP + mSecant * (x - x0);
  const tangentY = (x) => fP + mTangent * (x - x0);

  const Px = { x: x0, y: fP };
  const Qx = { x: x0 + h, y: fQ };

  const xTicks = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Function selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {FUNCTIONS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFuncId(f.id)}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              border: `1px solid ${funcId === f.id ? COLORS.curve : 'var(--mp-border)'}`,
              background: funcId === f.id ? `${COLORS.curve}15` : 'var(--mp-surface)',
              color: funcId === f.id ? COLORS.curve : 'var(--mp-text)',
              fontSize: '0.8rem',
              fontFamily: 'ui-monospace, monospace',
              fontWeight: funcId === f.id ? 600 : 400,
              cursor: 'pointer',
            }}
          >
            {f.label}
          </button>
        ))}
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', cursor: 'pointer', marginLeft: 'auto' }}>
          <input type="checkbox" checked={showTangent} onChange={(e) => setShowTangent(e.target.checked)} />
          Tangente einblenden
        </label>
      </div>

      {/* Sliders */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <label style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: '180px', fontSize: '0.85rem' }}>
          <span>
            <strong>x₀</strong> (Berührpunkt): <span style={{ fontFamily: 'ui-monospace, monospace' }}>{x0.toFixed(2)}</span>
          </span>
          <input type="range" min={X_RANGE[0] + 0.5} max={X_RANGE[1] - 0.5} step={0.05} value={x0}
                 onChange={(e) => setX0(Number(e.target.value))} />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: '180px', fontSize: '0.85rem' }}>
          <span>
            <strong>h</strong> (Abstand zu Q): <span style={{ fontFamily: 'ui-monospace, monospace' }}>{h.toFixed(3)}</span>
            {' '}<button
              type="button"
              onClick={() => setH(0.01)}
              style={{
                fontSize: '0.7rem',
                padding: '0.1rem 0.4rem',
                marginLeft: '0.4rem',
                borderRadius: '3px',
                border: 'none',
                background: COLORS.tangent,
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              h → 0
            </button>
          </span>
          <input type="range" min={0.01} max={2} step={0.01} value={h}
                 onChange={(e) => setH(Number(e.target.value))} />
        </label>
      </div>

      {/* Slope readout */}
      <div style={{
        padding: '0.75rem',
        borderRadius: '8px',
        background: 'var(--mp-surface)',
        border: '1px solid var(--mp-border)',
        fontFamily: 'ui-monospace, monospace',
        fontSize: '0.9rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
      }}>
        <div>
          <span style={{ color: COLORS.secant }}>m_Sekante</span> = (f(x₀+h) − f(x₀)) / h
          {' = '}
          ({fQ.toFixed(3)} − {fP.toFixed(3)}) / {h.toFixed(3)}
          {' = '}
          <strong>{mSecant.toFixed(4)}</strong>
        </div>
        <div>
          <span style={{ color: COLORS.tangent }}>m_Tangente</span> = f′(x₀) = <strong>{mTangent.toFixed(4)}</strong>
        </div>
        <div style={{
          color: error < 0.05 ? '#10b981' : COLORS.textMuted,
          fontWeight: error < 0.05 ? 600 : 400,
        }}>
          Differenz: {error.toFixed(4)}
          {error < 0.05 && ' — Sekante ≈ Tangente ✓'}
        </div>
      </div>

      {/* SVG Plot */}
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
        {/* Grid + axes */}
        {xTicks.map((x) => (
          <line key={`gv-${x}`}
                x1={xToScreen(x)} y1={MARGIN.top}
                x2={xToScreen(x)} y2={MARGIN.top + innerH}
                stroke={COLORS.grid} strokeWidth={0.5} />
        ))}
        <line x1={xToScreen(0)} y1={MARGIN.top} x2={xToScreen(0)} y2={MARGIN.top + innerH}
              stroke={COLORS.axis} strokeWidth={1} />
        <line x1={MARGIN.left} y1={yToScreen(0)} x2={W - MARGIN.right} y2={yToScreen(0)}
              stroke={COLORS.axis} strokeWidth={1} />
        {xTicks.map((x) => (
          <text key={`tx-${x}`} x={xToScreen(x)} y={yToScreen(0) + 14}
                textAnchor="middle" fontSize={10} fill={COLORS.textMuted}>{x}</text>
        ))}

        {/* Function curve */}
        <path d={curvePath} stroke={COLORS.curve} strokeWidth={2.5} fill="none" />

        {/* Tangent line (purple, thinner, dashed) */}
        {showTangent && (
          <line
            x1={MARGIN.left}
            y1={yToScreen(Math.max(yRange[0], Math.min(yRange[1], tangentY(X_RANGE[0]))))}
            x2={W - MARGIN.right}
            y2={yToScreen(Math.max(yRange[0], Math.min(yRange[1], tangentY(X_RANGE[1]))))}
            stroke={COLORS.tangent}
            strokeWidth={1.5}
            strokeDasharray="5,3"
            opacity={0.85}
          />
        )}

        {/* Secant line (orange, solid) */}
        <line
          x1={MARGIN.left}
          y1={yToScreen(Math.max(yRange[0], Math.min(yRange[1], secantY(X_RANGE[0]))))}
          x2={W - MARGIN.right}
          y2={yToScreen(Math.max(yRange[0], Math.min(yRange[1], secantY(X_RANGE[1]))))}
          stroke={COLORS.secant}
          strokeWidth={2}
          opacity={0.9}
        />

        {/* Δx / Δy guide */}
        <line x1={xToScreen(Px.x)} y1={yToScreen(Px.y)}
              x2={xToScreen(Qx.x)} y2={yToScreen(Px.y)}
              stroke={COLORS.textMuted} strokeWidth={1} strokeDasharray="2,3" />
        <line x1={xToScreen(Qx.x)} y1={yToScreen(Px.y)}
              x2={xToScreen(Qx.x)} y2={yToScreen(Qx.y)}
              stroke={COLORS.textMuted} strokeWidth={1} strokeDasharray="2,3" />
        <text x={(xToScreen(Px.x) + xToScreen(Qx.x)) / 2} y={yToScreen(Px.y) + 12}
              fontSize={10} fill={COLORS.textMuted} textAnchor="middle" fontFamily="ui-monospace, monospace">h</text>

        {/* Points P and Q */}
        <circle cx={xToScreen(Px.x)} cy={yToScreen(Px.y)} r={5} fill={COLORS.pointP} stroke="#fff" strokeWidth={2} />
        <text x={xToScreen(Px.x) - 8} y={yToScreen(Px.y) + 4} fontSize={12} fontWeight={600}
              textAnchor="end" fill={COLORS.pointP}>P</text>
        <circle cx={xToScreen(Qx.x)} cy={yToScreen(Qx.y)} r={5} fill={COLORS.pointQ} stroke="#fff" strokeWidth={2} />
        <text x={xToScreen(Qx.x) + 8} y={yToScreen(Qx.y) - 6} fontSize={12} fontWeight={600}
              fill={COLORS.pointQ}>Q</text>

        {/* Legend */}
        <g transform={`translate(${W - MARGIN.right - 130}, ${MARGIN.top + 6})`}>
          <line x1={0} y1={0} x2={18} y2={0} stroke={COLORS.secant} strokeWidth={2} />
          <text x={22} y={4} fontSize={10} fill={COLORS.secant}>Sekante PQ</text>
          {showTangent && (
            <>
              <line x1={0} y1={14} x2={18} y2={14} stroke={COLORS.tangent} strokeWidth={1.5} strokeDasharray="4,2" />
              <text x={22} y={18} fontSize={10} fill={COLORS.tangent}>Tangente bei P</text>
            </>
          )}
        </g>
      </svg>

      <p style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', margin: 0, fontStyle: 'italic' }}>
        Zieh den h-Slider Richtung 0 — die Sekante kippt langsam in die Tangente.
        Das ist die Definition der Ableitung: <code>f′(x₀) = lim h→0 (f(x₀+h) − f(x₀)) / h</code>.
        Der Klick auf <strong>h → 0</strong> springt direkt zur Grenzlage.
      </p>
    </div>
  );
}
