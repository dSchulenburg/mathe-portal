import { useState, useMemo } from 'react';

/**
 * Riemann sums visualised: rectangles under (or over) the curve
 * thinning out as n grows. Watch the sum chase the exact integral —
 * the Hauptsatz becomes pictorial. Three sample functions, three
 * partition modes (left, right, midpoint), and an n-slider that
 * scales 4 → 256.
 */

const W = 600;
const H = 360;
const MARGIN = { top: 24, right: 24, bottom: 36, left: 48 };

const COLORS = {
  axis: '#475569',
  grid: '#e2e8f0',
  curve: '#3b82f6',
  rectFill: '#a855f730',
  rectStroke: '#a855f7',
  area: '#10b981',
  bg: '#f8fafc',
  text: '#1e293b',
  textMuted: '#64748b',
};

const FUNCTIONS = [
  {
    id: 'x2',
    label: 'f(x) = x²',
    f: (x) => x * x,
    F: (x) => (x * x * x) / 3,
    yMax: 4,
    defaultRange: [0, 2],
  },
  {
    id: 'cubic',
    label: 'f(x) = x³ − 2x + 2',
    f: (x) => x * x * x - 2 * x + 2,
    F: (x) => (x * x * x * x) / 4 - x * x + 2 * x,
    yMax: 6,
    defaultRange: [0, 2],
  },
  {
    id: 'sinShift',
    label: 'f(x) = sin(x) + 1,5',
    f: (x) => Math.sin(x) + 1.5,
    F: (x) => -Math.cos(x) + 1.5 * x,
    yMax: 3,
    defaultRange: [0, Math.PI],
  },
];

const MODES = [
  { id: 'left', label: 'Linksendpunkt' },
  { id: 'right', label: 'Rechtsendpunkt' },
  { id: 'mid', label: 'Mittelpunkt' },
];

const N_VALUES = [4, 8, 16, 32, 64, 128, 256];

export default function RiemannSummen() {
  const [funcId, setFuncId] = useState('x2');
  const fn = FUNCTIONS.find(f => f.id === funcId);

  const [a, setA] = useState(fn.defaultRange[0]);
  const [b, setB] = useState(fn.defaultRange[1]);
  const [nIdx, setNIdx] = useState(2);  // index in N_VALUES
  const [mode, setMode] = useState('mid');

  const n = N_VALUES[nIdx];

  // Adjust ranges if function changes
  function selectFunction(id) {
    setFuncId(id);
    const f = FUNCTIONS.find(x => x.id === id);
    setA(f.defaultRange[0]);
    setB(f.defaultRange[1]);
  }

  const exact = fn.F(b) - fn.F(a);

  const { riemann, rects } = useMemo(() => {
    const dx = (b - a) / n;
    let sum = 0;
    const list = [];
    for (let i = 0; i < n; i++) {
      const x_left = a + i * dx;
      const x_right = x_left + dx;
      let xEval;
      if (mode === 'left') xEval = x_left;
      else if (mode === 'right') xEval = x_right;
      else xEval = x_left + dx / 2;
      const fVal = fn.f(xEval);
      sum += fVal * dx;
      list.push({ x: x_left, w: dx, h: fVal });
    }
    return { riemann: sum, rects: list };
  }, [fn, a, b, n, mode]);

  const error = riemann - exact;
  const yMaxPlot = Math.max(fn.yMax, ...rects.map(r => r.h)) * 1.1;

  const innerW = W - MARGIN.left - MARGIN.right;
  const innerH = H - MARGIN.top - MARGIN.bottom;
  const xRangePlot = [Math.min(a, fn.defaultRange[0]) - 0.2, Math.max(b, fn.defaultRange[1]) + 0.2];
  const xToScreen = (x) => MARGIN.left + ((x - xRangePlot[0]) / (xRangePlot[1] - xRangePlot[0])) * innerW;
  const yToScreen = (y) => MARGIN.top + innerH - (y / yMaxPlot) * innerH;

  // Curve path
  const curvePath = useMemo(() => {
    const samples = 200;
    const pts = [];
    for (let i = 0; i <= samples; i++) {
      const x = xRangePlot[0] + (i / samples) * (xRangePlot[1] - xRangePlot[0]);
      const y = fn.f(x);
      if (y >= 0 && y <= yMaxPlot) pts.push(`${xToScreen(x)},${yToScreen(y)}`);
    }
    return `M${pts.join(' L')}`;
  }, [fn, xRangePlot, yMaxPlot]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Function picker */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {FUNCTIONS.map((f) => (
          <button
            key={f.id}
            onClick={() => selectFunction(f.id)}
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
      </div>

      {/* Sliders + mode */}
      <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
        <label style={{ flex: 1, minWidth: '160px', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>n</strong> (Rechtecke) <span style={{ fontFamily: 'ui-monospace, monospace', color: COLORS.rectStroke }}>{n}</span>
          </div>
          <input type="range" min={0} max={N_VALUES.length - 1} step={1} value={nIdx}
                 onChange={(e) => setNIdx(Number(e.target.value))} style={{ width: '100%' }} />
        </label>
        <label style={{ flex: 1, minWidth: '120px', fontSize: '0.85rem' }}>
          <div>untere Grenze a = <span style={{ fontFamily: 'ui-monospace, monospace' }}>{a.toFixed(2)}</span></div>
          <input type="range" min={fn.defaultRange[0] - 1} max={b - 0.1} step={0.05} value={a}
                 onChange={(e) => setA(Number(e.target.value))} style={{ width: '100%' }} />
        </label>
        <label style={{ flex: 1, minWidth: '120px', fontSize: '0.85rem' }}>
          <div>obere Grenze b = <span style={{ fontFamily: 'ui-monospace, monospace' }}>{b.toFixed(2)}</span></div>
          <input type="range" min={a + 0.1} max={fn.defaultRange[1] + 1} step={0.05} value={b}
                 onChange={(e) => setB(Number(e.target.value))} style={{ width: '100%' }} />
        </label>
      </div>

      {/* Mode buttons */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            style={{
              padding: '0.3rem 0.6rem',
              borderRadius: '6px',
              border: `1px solid ${mode === m.id ? COLORS.rectStroke : 'var(--mp-border)'}`,
              background: mode === m.id ? `${COLORS.rectStroke}15` : 'var(--mp-surface)',
              color: mode === m.id ? COLORS.rectStroke : 'var(--mp-text)',
              fontSize: '0.8rem',
              fontWeight: mode === m.id ? 600 : 400,
              cursor: 'pointer',
            }}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Live readout */}
      <div style={{
        padding: '0.75rem',
        borderRadius: '8px',
        background: Math.abs(error) < 0.01 ? `${COLORS.area}10` : 'var(--mp-surface)',
        border: `1px solid ${Math.abs(error) < 0.01 ? `${COLORS.area}50` : 'var(--mp-border)'}`,
        fontFamily: 'ui-monospace, monospace',
        fontSize: '0.9rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
      }}>
        <div>
          <span style={{ color: COLORS.rectStroke }}>Riemann-Summe</span> (n = {n})
          {' = '}
          <strong>{riemann.toFixed(5)}</strong>
        </div>
        <div>
          <span style={{ color: COLORS.area }}>Exaktes Integral</span> ∫_{a.toFixed(2)}^{b.toFixed(2)} f(x) dx
          {' = '}
          F({b.toFixed(2)}) − F({a.toFixed(2)}) = <strong>{exact.toFixed(5)}</strong>
        </div>
        <div style={{
          color: Math.abs(error) < 0.01 ? COLORS.area : COLORS.textMuted,
          fontWeight: Math.abs(error) < 0.01 ? 600 : 400,
        }}>
          Fehler: {error.toFixed(5)}
          {Math.abs(error) < 0.01 && ' — perfekte Annäherung ✓'}
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
        {/* Axes */}
        <line x1={MARGIN.left} y1={yToScreen(0)} x2={W - MARGIN.right} y2={yToScreen(0)}
              stroke={COLORS.axis} strokeWidth={1} />
        <line x1={MARGIN.left} y1={MARGIN.top} x2={MARGIN.left} y2={MARGIN.top + innerH}
              stroke={COLORS.axis} strokeWidth={1} />

        {/* Rectangles */}
        {rects.map((r, i) => {
          const x1 = xToScreen(r.x);
          const x2 = xToScreen(r.x + r.w);
          const y1 = yToScreen(Math.max(0, r.h));
          const y0 = yToScreen(0);
          if (r.h < 0) return null;
          return (
            <rect
              key={i}
              x={x1}
              y={y1}
              width={Math.max(0, x2 - x1)}
              height={y0 - y1}
              fill={COLORS.rectFill}
              stroke={n <= 64 ? COLORS.rectStroke : 'none'}
              strokeWidth={n <= 16 ? 1 : 0.5}
              opacity={n <= 64 ? 1 : 0.85}
            />
          );
        })}

        {/* Curve */}
        <path d={curvePath} stroke={COLORS.curve} strokeWidth={2.5} fill="none" />

        {/* Boundary markers a, b */}
        {[
          { x: a, label: 'a' },
          { x: b, label: 'b' },
        ].map((m) => (
          <g key={m.label}>
            <line x1={xToScreen(m.x)} y1={MARGIN.top} x2={xToScreen(m.x)} y2={yToScreen(0)}
                  stroke={COLORS.area} strokeWidth={1} strokeDasharray="3,3" />
            <text x={xToScreen(m.x)} y={yToScreen(0) + 14} fontSize={11} fontFamily="ui-monospace, monospace"
                  textAnchor="middle" fill={COLORS.area} fontWeight={600}>
              {m.label} = {m.x.toFixed(2)}
            </text>
          </g>
        ))}

        {/* y-axis label */}
        <text x={MARGIN.left + 4} y={MARGIN.top + 12} fontSize={10} fill={COLORS.textMuted}>
          y = {yMaxPlot.toFixed(1)}
        </text>
      </svg>

      <p style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', margin: 0, fontStyle: 'italic' }}>
        Schiebe n von 4 nach 256 — die Rechtecke werden dünner, die Riemann-Summe nähert sich dem exakten Wert.
        Im Grenzfall <code>n → ∞</code> wird daraus das bestimmte Integral.
        Wechsle auch die Methode (Links/Rechts/Mittel) — Mittelpunkt konvergiert am schnellsten.
      </p>
    </div>
  );
}
