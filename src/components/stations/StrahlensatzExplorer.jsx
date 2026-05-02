import { useState, useMemo } from 'react';

/**
 * Strahlensatz-Explorer — verifies the ratio invariance live as the user
 * drags the two parallels. The most visual theorem in school geometry
 * was previously textonly.
 *
 * Setup: vertex S at top, two rays going down-left and down-right.
 * Two parallels (orange + violet) cross both rays. Strahlensatz says:
 *   SA / SA' = SB / SB' = AB / A'B'
 * Confirmed numerically in the readout and visually by the equal-color
 * ratio markers next to each rail.
 */

const WIDTH = 580;
const HEIGHT = 360;

const COLORS = {
  ray: '#475569',
  par1: '#f59e0b',
  par2: '#a855f7',
  vertex: '#1e293b',
  pointA: '#f59e0b',
  pointB: '#a855f7',
  text: '#1e293b',
  textMuted: '#64748b',
  ok: '#10b981',
  shadow: '#94a3b8',
  bg: '#f8fafc',
};

const SCENARIOS = [
  { id: 'classic', label: 'Strahlensatz (klassisch)', description: 'Zwei Strahlen, zwei Parallelen — die Verhältnisse bleiben gleich, egal wo du die Parallelen ziehst.' },
  { id: 'shadow', label: 'Baum & Schatten', description: 'Stab (1,5 m) wirft Schatten von 0,9 m. Wie hoch ist der Baum, dessen Schatten 4,2 m misst? Strahlensatz mit der Sonne als Scheitel.' },
];

export default function StrahlensatzExplorer() {
  const [scenarioId, setScenarioId] = useState('classic');
  // t1, t2 ∈ (0,1] — relative position of each parallel from the vertex (1 = at the far edge)
  const [t1, setT1] = useState(0.45);
  const [t2, setT2] = useState(0.85);

  const scenario = SCENARIOS.find(s => s.id === scenarioId);

  // Geometric setup
  const S = { x: WIDTH / 2, y: 30 };
  const angleDeg = 32;
  const rayLen = HEIGHT - 50;
  const angleRad = (angleDeg * Math.PI) / 180;
  const rayL_end = { x: S.x - Math.sin(angleRad) * rayLen, y: S.y + Math.cos(angleRad) * rayLen };
  const rayR_end = { x: S.x + Math.sin(angleRad) * rayLen, y: S.y + Math.cos(angleRad) * rayLen };

  function pointOnRay(end, t) {
    return { x: S.x + (end.x - S.x) * t, y: S.y + (end.y - S.y) * t };
  }

  const A = pointOnRay(rayL_end, t1);
  const B = pointOnRay(rayR_end, t1);
  const Ap = pointOnRay(rayL_end, t2);
  const Bp = pointOnRay(rayR_end, t2);

  // Lengths
  const dist = (p, q) => Math.hypot(p.x - q.x, p.y - q.y);
  const lenSA = dist(S, A);
  const lenSAp = dist(S, Ap);
  const lenSB = dist(S, B);
  const lenSBp = dist(S, Bp);
  const lenAB = dist(A, B);
  const lenApBp = dist(Ap, Bp);

  // Convert to "school-friendly" units (cm in the visualisation × scale → metres in shadow scenario)
  // For the classic scenario, lengths are pixel-based — show as "Einheiten".
  // For the shadow scenario, we re-scale so that the stick is 1.5 m.
  const scale = scenarioId === 'shadow' ? 1.5 / lenSA : 1; // shadow uses SA = stick = 1.5m
  const unit = scenarioId === 'shadow' ? ' m' : '';

  const ratios = useMemo(() => ({
    leftRay: lenSA / lenSAp,
    rightRay: lenSB / lenSBp,
    parallels: lenAB / lenApBp,
  }), [lenSA, lenSAp, lenSB, lenSBp, lenAB, lenApBp]);

  const fmt = (v) => (v * scale).toFixed(2) + unit;

  const ratiosMatch =
    Math.abs(ratios.leftRay - ratios.rightRay) < 0.001 &&
    Math.abs(ratios.leftRay - ratios.parallels) < 0.001;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Scenario selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            onClick={() => setScenarioId(s.id)}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              border: `1px solid ${scenarioId === s.id ? COLORS.par1 : 'var(--mp-border)'}`,
              background: scenarioId === s.id ? `${COLORS.par1}15` : 'var(--mp-surface)',
              color: scenarioId === s.id ? COLORS.par1 : 'var(--mp-text)',
              fontSize: '0.8rem',
              fontWeight: scenarioId === s.id ? 600 : 400,
              cursor: 'pointer',
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--mp-muted)', margin: 0 }}>
        {scenario.description}
      </p>

      {/* Sliders */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <label style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: '180px', fontSize: '0.85rem' }}>
          <span><strong style={{ color: COLORS.par1 }}>Parallele 1</strong> (A — B): <span style={{ fontFamily: 'ui-monospace, monospace' }}>t = {t1.toFixed(2)}</span></span>
          <input type="range" min={0.15} max={0.95} step={0.01} value={t1}
                 onChange={(e) => setT1(Math.min(Number(e.target.value), t2 - 0.05))} />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: '180px', fontSize: '0.85rem' }}>
          <span><strong style={{ color: COLORS.par2 }}>Parallele 2</strong> (A' — B'): <span style={{ fontFamily: 'ui-monospace, monospace' }}>t = {t2.toFixed(2)}</span></span>
          <input type="range" min={0.2} max={0.98} step={0.01} value={t2}
                 onChange={(e) => setT2(Math.max(Number(e.target.value), t1 + 0.05))} />
        </label>
      </div>

      {/* Live ratios */}
      <div style={{
        padding: '0.75rem',
        borderRadius: '8px',
        background: ratiosMatch ? `${COLORS.ok}10` : 'var(--mp-surface)',
        border: `1px solid ${ratiosMatch ? `${COLORS.ok}50` : 'var(--mp-border)'}`,
        fontFamily: 'ui-monospace, monospace',
        fontSize: '0.85rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '0.5rem',
      }}>
        <div>
          <span style={{ color: COLORS.par1 }}>SA / SA′</span> = {fmt(lenSA)} / {fmt(lenSAp)}
          {' = '}
          <strong>{ratios.leftRay.toFixed(3)}</strong>
        </div>
        <div>
          <span style={{ color: COLORS.par2 }}>SB / SB′</span> = {fmt(lenSB)} / {fmt(lenSBp)}
          {' = '}
          <strong>{ratios.rightRay.toFixed(3)}</strong>
        </div>
        <div>
          <span>AB / A′B′</span> = {fmt(lenAB)} / {fmt(lenApBp)}
          {' = '}
          <strong>{ratios.parallels.toFixed(3)}</strong>
        </div>
        <div style={{
          color: ratiosMatch ? COLORS.ok : COLORS.textMuted,
          fontWeight: 600,
        }}>
          {ratiosMatch ? '✓ Strahlensatz erfüllt' : 'Verhältnisse weichen ab'}
        </div>
      </div>

      {/* Shadow scenario: derived height */}
      {scenarioId === 'shadow' && (
        <div style={{
          padding: '0.6rem 0.8rem',
          borderRadius: '8px',
          background: `${COLORS.par2}10`,
          border: `1px solid ${COLORS.par2}40`,
          fontSize: '0.9rem',
        }}>
          Wenn der Baum-Schatten {fmt(lenSBp)} misst, dann ist der Baum {(lenApBp * scale).toFixed(2)} m hoch
          {' '}— wegen <code style={{ fontFamily: 'ui-monospace, monospace' }}>Höhe / Schatten = const</code>.
        </div>
      )}

      {/* SVG */}
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={{
          width: '100%',
          maxWidth: `${WIDTH}px`,
          height: 'auto',
          background: COLORS.bg,
          borderRadius: '8px',
          border: '1px solid var(--mp-border)',
        }}
      >
        {/* Rays */}
        <line x1={S.x} y1={S.y} x2={rayL_end.x} y2={rayL_end.y} stroke={COLORS.ray} strokeWidth={1.5} />
        <line x1={S.x} y1={S.y} x2={rayR_end.x} y2={rayR_end.y} stroke={COLORS.ray} strokeWidth={1.5} />

        {/* Parallel 2 (further) — drawn first so closer one is on top */}
        <line x1={Ap.x} y1={Ap.y} x2={Bp.x} y2={Bp.y} stroke={COLORS.par2} strokeWidth={2.5} />
        {/* Parallel 1 (closer) */}
        <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke={COLORS.par1} strokeWidth={2.5} />

        {/* Shadow scenario: stick + tree visualisation */}
        {scenarioId === 'shadow' && (
          <>
            {/* Stick at parallel 1 */}
            <line x1={A.x + (B.x - A.x) * 0.25} y1={A.y + (B.y - A.y) * 0.25}
                  x2={A.x + (B.x - A.x) * 0.25} y2={A.y + (B.y - A.y) * 0.25 - 30}
                  stroke="#1e293b" strokeWidth={3} />
            <text x={A.x + (B.x - A.x) * 0.25} y={A.y + (B.y - A.y) * 0.25 - 35}
                  fontSize={11} textAnchor="middle" fill="#1e293b">Stab</text>
            {/* Tree at parallel 2 */}
            <circle cx={Ap.x + (Bp.x - Ap.x) * 0.7} cy={Ap.y + (Bp.y - Ap.y) * 0.7 - 35}
                    r={14} fill="#16a34a" />
            <line x1={Ap.x + (Bp.x - Ap.x) * 0.7} y1={Ap.y + (Bp.y - Ap.y) * 0.7 - 21}
                  x2={Ap.x + (Bp.x - Ap.x) * 0.7} y2={Ap.y + (Bp.y - Ap.y) * 0.7}
                  stroke="#854d0e" strokeWidth={3} />
            <text x={Ap.x + (Bp.x - Ap.x) * 0.7} y={Ap.y + (Bp.y - Ap.y) * 0.7 - 55}
                  fontSize={11} textAnchor="middle" fill="#1e293b">Baum</text>
          </>
        )}

        {/* Vertex S — sun-like in shadow scenario */}
        {scenarioId === 'shadow' ? (
          <g>
            <circle cx={S.x} cy={S.y} r={12} fill="#fbbf24" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
              const r = (deg * Math.PI) / 180;
              return (
                <line key={deg}
                      x1={S.x + Math.cos(r) * 14} y1={S.y + Math.sin(r) * 14}
                      x2={S.x + Math.cos(r) * 20} y2={S.y + Math.sin(r) * 20}
                      stroke="#fbbf24" strokeWidth={2} />
              );
            })}
            <text x={S.x} y={S.y - 26} fontSize={11} textAnchor="middle" fill={COLORS.textMuted}>☀ Sonne</text>
          </g>
        ) : (
          <>
            <circle cx={S.x} cy={S.y} r={5} fill={COLORS.vertex} />
            <text x={S.x + 10} y={S.y + 4} fontSize={13} fontWeight={600} fill={COLORS.text}>S</text>
          </>
        )}

        {/* Points A, A', B, B' */}
        {[
          { p: A, label: 'A', anchor: 'end', dx: -8, dy: 4, color: COLORS.pointA },
          { p: B, label: 'B', anchor: 'start', dx: 8, dy: 4, color: COLORS.pointA },
          { p: Ap, label: "A′", anchor: 'end', dx: -8, dy: 4, color: COLORS.pointB },
          { p: Bp, label: "B′", anchor: 'start', dx: 8, dy: 4, color: COLORS.pointB },
        ].map((pt) => (
          <g key={pt.label}>
            <circle cx={pt.p.x} cy={pt.p.y} r={4} fill={pt.color} />
            <text x={pt.p.x + pt.dx} y={pt.p.y + pt.dy} fontSize={12} fontWeight={600} textAnchor={pt.anchor} fill={COLORS.text}>
              {pt.label}
            </text>
          </g>
        ))}
      </svg>

      <p style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', margin: 0, fontStyle: 'italic' }}>
        Schiebe die beiden Parallelen — die drei Verhältnisse SA/SA′, SB/SB′ und AB/A′B′ bleiben <strong>immer gleich</strong>.
        Das ist der Strahlensatz: ein Verhältnis genügt, um aus drei Längen die vierte zu bestimmen.
      </p>
    </div>
  );
}
