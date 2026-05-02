import { useState, useRef, useMemo } from 'react';

/**
 * 2D vector visualisation: two arrows from origin, live readout of
 * lengths, dot product, angle, and the projection of a onto b.
 *
 * Why this matters: a vector lesson without arrows is unintuitive,
 * and the dot-product → cosine identity is the bridge to embeddings,
 * physics work, projections, and analytic geometry. Drag the arrow
 * tips to feel the geometry.
 */

const W = 520;
const H = 380;
const ORIGIN = { x: W / 2, y: H / 2 - 10 };
const SCALE = 30;          // pixels per unit

const COLORS = {
  axis: '#cbd5e1',
  grid: '#e2e8f0',
  vecA: '#3b82f6',
  vecB: '#ec4899',
  proj: '#a855f7',
  text: '#1e293b',
  textMuted: '#64748b',
  bg: '#f8fafc',
  ortho: '#10b981',
};

const PRESETS = [
  { id: 'orthogonal', label: 'Orthogonal (90°)', a: [3, 0], b: [0, 3] },
  { id: 'parallel', label: 'Parallel (0°)', a: [3, 1], b: [4, 4 / 3] },
  { id: 'general', label: 'Allgemein (~45°)', a: [4, 1], b: [2, 3] },
  { id: 'opposite', label: 'Entgegengesetzt', a: [3, 2], b: [-3, -2] },
];

function toScreen(vx, vy) {
  return { x: ORIGIN.x + vx * SCALE, y: ORIGIN.y - vy * SCALE };
}

function dot(a, b) { return a[0] * b[0] + a[1] * b[1]; }
function len(a) { return Math.hypot(a[0], a[1]); }

export default function VectorExplorer() {
  const [a, setA] = useState([4, 1]);
  const [b, setB] = useState([2, 3]);
  const [showProjection, setShowProjection] = useState(true);
  const [dragging, setDragging] = useState(null);  // 'a' | 'b' | null
  const svgRef = useRef(null);

  const lenA = len(a);
  const lenB = len(b);
  const dotProduct = dot(a, b);
  const cosAngle = lenA && lenB ? dotProduct / (lenA * lenB) : 0;
  const angleRad = Math.acos(Math.max(-1, Math.min(1, cosAngle)));
  const angleDeg = (angleRad * 180) / Math.PI;

  const isOrtho = Math.abs(dotProduct) < 0.001;

  // Projection of a onto b: (a·b / b·b) · b
  const projection = useMemo(() => {
    const bSqr = b[0] * b[0] + b[1] * b[1];
    if (bSqr < 1e-9) return null;
    const t = dotProduct / bSqr;
    return [t * b[0], t * b[1]];
  }, [a, b, dotProduct]);

  // Drag-handling
  function handlePointerDown(which) {
    setDragging(which);
  }
  function handlePointerUp() {
    setDragging(null);
  }
  function handlePointerMove(e) {
    if (!dragging || !svgRef.current) return;
    const pt = svgRef.current.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const ctm = svgRef.current.getScreenCTM().inverse();
    const local = pt.matrixTransform(ctm);
    const vx = (local.x - ORIGIN.x) / SCALE;
    const vy = -(local.y - ORIGIN.y) / SCALE;
    const rounded = [Math.round(vx * 2) / 2, Math.round(vy * 2) / 2];
    if (dragging === 'a') setA(rounded);
    else if (dragging === 'b') setB(rounded);
  }

  const aTip = toScreen(a[0], a[1]);
  const bTip = toScreen(b[0], b[1]);
  const projTip = projection ? toScreen(projection[0], projection[1]) : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Presets */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => { setA(p.a); setB(p.b); }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              border: '1px solid var(--mp-border)',
              background: 'var(--mp-surface)',
              color: 'var(--mp-text)',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            {p.label}
          </button>
        ))}
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', cursor: 'pointer', marginLeft: 'auto' }}>
          <input type="checkbox" checked={showProjection} onChange={(e) => setShowProjection(e.target.checked)} />
          Projektion zeigen
        </label>
      </div>

      {/* Sliders */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
        {[
          { label: 'a', vec: a, setter: setA, color: COLORS.vecA },
          { label: 'b', vec: b, setter: setB, color: COLORS.vecB },
        ].map(({ label, vec, setter, color }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div style={{ fontSize: '0.85rem', color }}>
              <strong>{label}</strong> = ({vec[0]} | {vec[1]})
            </div>
            <label style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              x
              <input type="range" min={-5} max={5} step={0.5} value={vec[0]}
                     onChange={(e) => setter([Number(e.target.value), vec[1]])}
                     style={{ flex: 1 }} />
            </label>
            <label style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              y
              <input type="range" min={-5} max={5} step={0.5} value={vec[1]}
                     onChange={(e) => setter([vec[0], Number(e.target.value)])}
                     style={{ flex: 1 }} />
            </label>
          </div>
        ))}
      </div>

      {/* Live readout */}
      <div style={{
        padding: '0.6rem 0.8rem',
        borderRadius: '8px',
        background: isOrtho ? `${COLORS.ortho}10` : 'var(--mp-surface)',
        border: `1px solid ${isOrtho ? `${COLORS.ortho}50` : 'var(--mp-border)'}`,
        fontFamily: 'ui-monospace, monospace',
        fontSize: '0.85rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '0.5rem',
      }}>
        <div><span style={{ color: COLORS.vecA }}>|a|</span> = {lenA.toFixed(2)}</div>
        <div><span style={{ color: COLORS.vecB }}>|b|</span> = {lenB.toFixed(2)}</div>
        <div>a · b = <strong>{dotProduct.toFixed(2)}</strong></div>
        <div>cos α = {cosAngle.toFixed(3)}</div>
        <div>α = <strong>{angleDeg.toFixed(1)}°</strong></div>
        {isOrtho && (
          <div style={{ color: COLORS.ortho, fontWeight: 600 }}>⊥ orthogonal!</div>
        )}
      </div>

      {/* SVG */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{
          width: '100%',
          maxWidth: `${W}px`,
          height: 'auto',
          background: COLORS.bg,
          borderRadius: '8px',
          border: '1px solid var(--mp-border)',
          touchAction: 'none',
        }}
      >
        {/* Grid */}
        {Array.from({ length: 11 }).map((_, i) => {
          const v = i - 5;
          const sx = ORIGIN.x + v * SCALE;
          const sy = ORIGIN.y - v * SCALE;
          return (
            <g key={`grid-${i}`}>
              <line x1={sx} y1={20} x2={sx} y2={H - 20} stroke={COLORS.grid} strokeWidth={0.5} />
              <line x1={20} y1={sy} x2={W - 20} y2={sy} stroke={COLORS.grid} strokeWidth={0.5} />
            </g>
          );
        })}
        {/* Axes */}
        <line x1={20} y1={ORIGIN.y} x2={W - 20} y2={ORIGIN.y} stroke={COLORS.axis} strokeWidth={1.2} />
        <line x1={ORIGIN.x} y1={20} x2={ORIGIN.x} y2={H - 20} stroke={COLORS.axis} strokeWidth={1.2} />

        {/* Arrowhead defs */}
        <defs>
          <marker id="arrowA" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,4 L0,8 Z" fill={COLORS.vecA} />
          </marker>
          <marker id="arrowB" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,4 L0,8 Z" fill={COLORS.vecB} />
          </marker>
          <marker id="arrowProj" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,4 L0,8 Z" fill={COLORS.proj} />
          </marker>
        </defs>

        {/* Projection visualisation */}
        {showProjection && projection && lenB > 0 && (
          <>
            {/* Drop line from a's tip onto b's line */}
            <line
              x1={aTip.x} y1={aTip.y}
              x2={projTip.x} y2={projTip.y}
              stroke={COLORS.proj}
              strokeWidth={1.2}
              strokeDasharray="4,3"
              opacity={0.7}
            />
            {/* Projection arrow on top of b */}
            <line
              x1={ORIGIN.x} y1={ORIGIN.y}
              x2={projTip.x} y2={projTip.y}
              stroke={COLORS.proj}
              strokeWidth={4}
              opacity={0.55}
              markerEnd="url(#arrowProj)"
            />
          </>
        )}

        {/* Vector b */}
        <line
          x1={ORIGIN.x} y1={ORIGIN.y}
          x2={bTip.x} y2={bTip.y}
          stroke={COLORS.vecB}
          strokeWidth={3}
          markerEnd="url(#arrowB)"
        />
        {/* Vector a */}
        <line
          x1={ORIGIN.x} y1={ORIGIN.y}
          x2={aTip.x} y2={aTip.y}
          stroke={COLORS.vecA}
          strokeWidth={3}
          markerEnd="url(#arrowA)"
        />

        {/* Angle arc when both vectors non-zero */}
        {lenA > 0.01 && lenB > 0.01 && (
          <path
            d={(() => {
              const r = 25;
              const aA = Math.atan2(a[1], a[0]);
              const bA = Math.atan2(b[1], b[0]);
              const start = { x: ORIGIN.x + r * Math.cos(aA), y: ORIGIN.y - r * Math.sin(aA) };
              const end = { x: ORIGIN.x + r * Math.cos(bA), y: ORIGIN.y - r * Math.sin(bA) };
              const sweep = ((aA - bA + 2 * Math.PI) % (2 * Math.PI)) > Math.PI ? 1 : 0;
              return `M ${start.x} ${start.y} A ${r} ${r} 0 0 ${sweep} ${end.x} ${end.y}`;
            })()}
            stroke="#fbbf24"
            strokeWidth={1.5}
            fill="none"
          />
        )}

        {/* Draggable arrow tips */}
        <circle
          cx={aTip.x} cy={aTip.y} r={9}
          fill={COLORS.vecA}
          stroke="#fff"
          strokeWidth={2}
          onPointerDown={(e) => { e.preventDefault(); handlePointerDown('a'); }}
          style={{ cursor: 'grab' }}
        />
        <circle
          cx={bTip.x} cy={bTip.y} r={9}
          fill={COLORS.vecB}
          stroke="#fff"
          strokeWidth={2}
          onPointerDown={(e) => { e.preventDefault(); handlePointerDown('b'); }}
          style={{ cursor: 'grab' }}
        />
        <text x={aTip.x + 12} y={aTip.y - 8} fontSize={13} fontWeight={600} fill={COLORS.vecA}>a</text>
        <text x={bTip.x + 12} y={bTip.y - 8} fontSize={13} fontWeight={600} fill={COLORS.vecB}>b</text>
      </svg>

      <p style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', margin: 0, fontStyle: 'italic' }}>
        Du kannst die Pfeilspitzen ziehen oder die Slider nutzen.
        Die Formel <code>a · b = |a|·|b|·cos(α)</code> verbindet Skalarprodukt und Winkel —
        und das ist auch das Prinzip, mit dem KI-Embeddings ihre Ähnlichkeit messen.
      </p>
    </div>
  );
}
