import { useState, useMemo } from 'react';

/**
 * Markov chain visualised as a state diagram with transition arrows
 * plus a convergence chart that tracks the state vector through n
 * iterations. Watch p_n = T^n · p_0 settle into the fixed-point
 * vector — the abstract eigenvector argument from 12-matrizen
 * becomes a watchable settling.
 */

const W = 600;
const H = 380;

const COLORS = {
  nodeA: '#3b82f6',
  nodeB: '#ec4899',
  arrow: '#475569',
  bg: '#f8fafc',
  text: '#1e293b',
  textMuted: '#64748b',
  fixVec: '#10b981',
  ground: '#cbd5e1',
};

const PRESETS = [
  {
    id: 'weather',
    label: 'Wetter',
    A: 'Sonne ☀',
    B: 'Regen ☂',
    pAA: 0.7, pBB: 0.6,
  },
  {
    id: 'streaming',
    label: 'Spotify ↔ Apple',
    A: 'Spotify',
    B: 'Apple Music',
    pAA: 0.85, pBB: 0.75,
  },
  {
    id: 'commute',
    label: 'Stadt ↔ Umland',
    A: 'Stadt',
    B: 'Umland',
    pAA: 0.95, pBB: 0.92,
  },
  {
    id: 'swap',
    label: 'Pure Swap',
    A: 'Zustand 1',
    B: 'Zustand 2',
    pAA: 0.1, pBB: 0.1,
  },
];

function step(p, T) {
  // p: [pA, pB], T: 2x2 column-stochastic [[pAA, pBA], [pAB, pBB]]
  return [
    p[0] * T.AA + p[1] * T.BA,
    p[0] * T.AB + p[1] * T.BB,
  ];
}

function fixedPoint(T) {
  // For 2-state Markov: π_A = pBA / (pAB + pBA), π_B = pAB / (pAB + pBA)
  const denom = T.AB + T.BA;
  if (denom < 1e-9) return [0.5, 0.5];
  return [T.BA / denom, T.AB / denom];
}

export default function MarkovDiagramm() {
  const [presetId, setPresetId] = useState('weather');
  const preset = PRESETS.find(p => p.id === presetId);

  const [pAA, setPAA] = useState(preset.pAA);
  const [pBB, setPBB] = useState(preset.pBB);
  const [n, setN] = useState(0);
  const [startA, setStartA] = useState(1);  // initial probability for A

  function applyPreset(p) {
    setPresetId(p.id);
    setPAA(p.pAA);
    setPBB(p.pBB);
    setN(0);
  }

  const T = useMemo(() => ({
    AA: pAA, AB: 1 - pAA,
    BA: 1 - pBB, BB: pBB,
  }), [pAA, pBB]);

  // Compute trajectory p_0, p_1, ..., p_30
  const trajectory = useMemo(() => {
    const traj = [[startA, 1 - startA]];
    for (let i = 1; i <= 30; i++) {
      traj.push(step(traj[i - 1], T));
    }
    return traj;
  }, [startA, T]);

  const current = trajectory[Math.min(n, trajectory.length - 1)];
  const fix = fixedPoint(T);

  // Diagram coords
  const nodeAX = 130, nodeAY = 100;
  const nodeBX = 470, nodeBY = 100;
  const r = 30;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Preset picker */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => applyPreset(p)}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              border: `1px solid ${presetId === p.id ? COLORS.nodeA : 'var(--mp-border)'}`,
              background: presetId === p.id ? `${COLORS.nodeA}15` : 'var(--mp-surface)',
              color: presetId === p.id ? COLORS.nodeA : 'var(--mp-text)',
              fontSize: '0.8rem',
              fontWeight: presetId === p.id ? 600 : 400,
              cursor: 'pointer',
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Sliders */}
      <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
        <label style={{ flex: 1, minWidth: '160px', fontSize: '0.85rem' }}>
          <div style={{ color: COLORS.nodeA }}>
            <strong>{preset.A} → {preset.A}</strong>: {pAA.toFixed(2)}
          </div>
          <input type="range" min={0} max={1} step={0.01} value={pAA}
                 onChange={(e) => { setPAA(Number(e.target.value)); setN(0); }} />
        </label>
        <label style={{ flex: 1, minWidth: '160px', fontSize: '0.85rem' }}>
          <div style={{ color: COLORS.nodeB }}>
            <strong>{preset.B} → {preset.B}</strong>: {pBB.toFixed(2)}
          </div>
          <input type="range" min={0} max={1} step={0.01} value={pBB}
                 onChange={(e) => { setPBB(Number(e.target.value)); setN(0); }} />
        </label>
        <label style={{ flex: 1, minWidth: '160px', fontSize: '0.85rem' }}>
          <div>Iteration <strong>n = {n}</strong></div>
          <input type="range" min={0} max={30} step={1} value={n}
                 onChange={(e) => setN(Number(e.target.value))} />
        </label>
        <label style={{ flex: 1, minWidth: '160px', fontSize: '0.85rem' }}>
          <div>Startwert p<sub>0</sub>({preset.A}) = {startA.toFixed(2)}</div>
          <input type="range" min={0} max={1} step={0.05} value={startA}
                 onChange={(e) => { setStartA(Number(e.target.value)); setN(0); }} />
        </label>
      </div>

      {/* Live values */}
      <div style={{
        padding: '0.6rem 0.8rem',
        borderRadius: '8px',
        background: 'var(--mp-surface)',
        border: '1px solid var(--mp-border)',
        fontFamily: 'ui-monospace, monospace',
        fontSize: '0.85rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '0.5rem',
      }}>
        <div>
          <span style={{ color: COLORS.nodeA }}>p<sub>{n}</sub>({preset.A})</span> = <strong>{current[0].toFixed(4)}</strong>
        </div>
        <div>
          <span style={{ color: COLORS.nodeB }}>p<sub>{n}</sub>({preset.B})</span> = <strong>{current[1].toFixed(4)}</strong>
        </div>
        <div>
          <span style={{ color: COLORS.fixVec }}>Fixvektor π</span> = ({fix[0].toFixed(3)} | {fix[1].toFixed(3)})
        </div>
      </div>

      {/* SVG: state diagram + convergence chart */}
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
        {/* Arrowhead marker */}
        <defs>
          <marker id="mkArrow" markerWidth="10" markerHeight="10" refX="9" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L9,4 L0,8 Z" fill={COLORS.arrow} />
          </marker>
        </defs>

        {/* === Top half: state diagram === */}
        {/* Self-loop on A */}
        <path
          d={`M ${nodeAX - 8} ${nodeAY - r + 4} C ${nodeAX - 60} ${nodeAY - 75}, ${nodeAX + 60} ${nodeAY - 75}, ${nodeAX + 8} ${nodeAY - r + 4}`}
          fill="none"
          stroke={COLORS.arrow}
          strokeWidth={1.5}
          markerEnd="url(#mkArrow)"
        />
        <text x={nodeAX} y={nodeAY - r - 36} fontSize={12} textAnchor="middle"
              fontFamily="ui-monospace, monospace" fill={COLORS.text}>
          {pAA.toFixed(2)}
        </text>

        {/* Self-loop on B */}
        <path
          d={`M ${nodeBX - 8} ${nodeBY - r + 4} C ${nodeBX - 60} ${nodeBY - 75}, ${nodeBX + 60} ${nodeBY - 75}, ${nodeBX + 8} ${nodeBY - r + 4}`}
          fill="none"
          stroke={COLORS.arrow}
          strokeWidth={1.5}
          markerEnd="url(#mkArrow)"
        />
        <text x={nodeBX} y={nodeBY - r - 36} fontSize={12} textAnchor="middle"
              fontFamily="ui-monospace, monospace" fill={COLORS.text}>
          {pBB.toFixed(2)}
        </text>

        {/* A → B */}
        <path
          d={`M ${nodeAX + r - 2} ${nodeAY - 8} Q ${(nodeAX + nodeBX) / 2} ${nodeAY - 40} ${nodeBX - r + 2} ${nodeBY - 8}`}
          fill="none" stroke={COLORS.arrow} strokeWidth={1.5} markerEnd="url(#mkArrow)"
        />
        <text x={(nodeAX + nodeBX) / 2} y={nodeAY - 38} fontSize={12} textAnchor="middle"
              fontFamily="ui-monospace, monospace" fill={COLORS.text}>
          {(1 - pAA).toFixed(2)}
        </text>

        {/* B → A */}
        <path
          d={`M ${nodeBX - r + 2} ${nodeBY + 8} Q ${(nodeAX + nodeBX) / 2} ${nodeBY + 40} ${nodeAX + r - 2} ${nodeAY + 8}`}
          fill="none" stroke={COLORS.arrow} strokeWidth={1.5} markerEnd="url(#mkArrow)"
        />
        <text x={(nodeAX + nodeBX) / 2} y={nodeBY + 50} fontSize={12} textAnchor="middle"
              fontFamily="ui-monospace, monospace" fill={COLORS.text}>
          {(1 - pBB).toFixed(2)}
        </text>

        {/* Nodes — radius pulses with current probability */}
        {[
          { x: nodeAX, y: nodeAY, color: COLORS.nodeA, label: preset.A, p: current[0] },
          { x: nodeBX, y: nodeBY, color: COLORS.nodeB, label: preset.B, p: current[1] },
        ].map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r={r} fill={`${node.color}15`} stroke={node.color} strokeWidth={1.5} />
            {/* Probability ring */}
            <circle cx={node.x} cy={node.y} r={r - 4} fill={node.color} opacity={0.15 + node.p * 0.55} />
            <text x={node.x} y={node.y - 4} fontSize={13} fontWeight={600} textAnchor="middle" fill={node.color}>
              {node.label}
            </text>
            <text x={node.x} y={node.y + 12} fontSize={11} fontFamily="ui-monospace, monospace"
                  textAnchor="middle" fill={COLORS.text}>
              {(node.p * 100).toFixed(1)}%
            </text>
          </g>
        ))}

        {/* === Bottom half: convergence chart === */}
        {(() => {
          const chartTop = 200;
          const chartBottom = 350;
          const chartLeft = 60;
          const chartRight = W - 30;
          const chartH = chartBottom - chartTop;
          const chartW = chartRight - chartLeft;

          const xToScreen = (i) => chartLeft + (i / 30) * chartW;
          const yToScreen = (p) => chartBottom - p * chartH;

          const pathA = trajectory.map((p, i) => `${xToScreen(i)},${yToScreen(p[0])}`).join(' ');
          const pathB = trajectory.map((p, i) => `${xToScreen(i)},${yToScreen(p[1])}`).join(' ');

          return (
            <g>
              {/* Axes */}
              <line x1={chartLeft} y1={chartTop} x2={chartLeft} y2={chartBottom} stroke={COLORS.ground} strokeWidth={1} />
              <line x1={chartLeft} y1={chartBottom} x2={chartRight} y2={chartBottom} stroke={COLORS.ground} strokeWidth={1} />
              {/* Y ticks */}
              <text x={chartLeft - 6} y={chartTop + 4} fontSize={9} textAnchor="end" fill={COLORS.textMuted}>1</text>
              <text x={chartLeft - 6} y={(chartTop + chartBottom) / 2 + 4} fontSize={9} textAnchor="end" fill={COLORS.textMuted}>0.5</text>
              <text x={chartLeft - 6} y={chartBottom + 4} fontSize={9} textAnchor="end" fill={COLORS.textMuted}>0</text>

              {/* Fixed-point reference lines */}
              <line x1={chartLeft} y1={yToScreen(fix[0])} x2={chartRight} y2={yToScreen(fix[0])}
                    stroke={COLORS.fixVec} strokeWidth={1} strokeDasharray="3,3" opacity={0.7} />
              <text x={chartRight - 4} y={yToScreen(fix[0]) - 4} fontSize={10} textAnchor="end" fill={COLORS.fixVec}>
                π_{preset.A.split(' ')[0]} = {fix[0].toFixed(2)}
              </text>

              {/* Trajectories */}
              <polyline points={pathA} fill="none" stroke={COLORS.nodeA} strokeWidth={2} />
              <polyline points={pathB} fill="none" stroke={COLORS.nodeB} strokeWidth={2} />

              {/* Marker for current n */}
              <line x1={xToScreen(n)} y1={chartTop} x2={xToScreen(n)} y2={chartBottom}
                    stroke="#fbbf24" strokeWidth={1.5} strokeDasharray="2,2" />
              <circle cx={xToScreen(n)} cy={yToScreen(current[0])} r={4} fill={COLORS.nodeA} stroke="#fff" strokeWidth={1.5} />
              <circle cx={xToScreen(n)} cy={yToScreen(current[1])} r={4} fill={COLORS.nodeB} stroke="#fff" strokeWidth={1.5} />

              {/* X label */}
              <text x={(chartLeft + chartRight) / 2} y={chartBottom + 18} fontSize={10}
                    textAnchor="middle" fill={COLORS.textMuted}>
                Iteration n
              </text>
            </g>
          );
        })()}
      </svg>

      <p style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', margin: 0, fontStyle: 'italic' }}>
        Egal von welchem Startwert aus — die Verteilung läuft gegen denselben <strong style={{ color: COLORS.fixVec }}>Fixvektor π</strong>.
        Das ist genau die Konvergenz-Eigenschaft der Markov-Kette: π = T·π (Eigenvektor zum Eigenwert 1).
      </p>
    </div>
  );
}
