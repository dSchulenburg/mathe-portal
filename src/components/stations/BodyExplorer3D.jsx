import { useState, useMemo, useRef } from 'react';

/**
 * Pragmatic 3D body viewer using SVG + manual orthographic projection.
 * No three.js dependency, ~200 LOC, sufficient for didactic purposes.
 *
 * Pyramid, cone, and sphere as wireframes that the student can rotate.
 * Live volume + surface readouts. Cone has a water-level slider that
 * shows the similar-cone scaling (V ~ r³) explicitly — the punchline
 * of koerp-erweitert-005, previously left to imagination.
 */

const W = 480;
const H = 380;
const CX = W / 2;
const CY = H / 2 + 20;
const SCALE = 8;

const COLORS = {
  edge: '#1e293b',
  edgeBack: '#94a3b8',
  fill: '#3b82f680',
  water: '#06b6d480',
  bg: '#f8fafc',
  text: '#1e293b',
  textMuted: '#64748b',
  accent: '#3b82f6',
};

const BODIES = [
  { id: 'pyramid', label: 'Pyramide' },
  { id: 'cone', label: 'Kegel' },
  { id: 'sphere', label: 'Kugel' },
];

function rotate(p, phi, theta) {
  // p = [x, y, z]
  const cp = Math.cos(phi), sp = Math.sin(phi);
  const ct = Math.cos(theta), st = Math.sin(theta);
  // Yaw (y-axis)
  const x1 = p[0] * cp + p[2] * sp;
  const z1 = -p[0] * sp + p[2] * cp;
  // Pitch (x-axis)
  const y2 = p[1] * ct - z1 * st;
  const z2 = p[1] * st + z1 * ct;
  return [x1, y2, z2];
}

function project(p, scale = SCALE) {
  // Orthographic — drop z but keep it for back/front sorting
  return { x: CX + p[0] * scale, y: CY - p[1] * scale, z: p[2] };
}

function buildPyramid(a, h) {
  // Square base, side length a, height h. Apex at (0,h,0)
  const half = a / 2;
  const v = [
    [0, h, 0],          // apex
    [-half, 0, -half],  // base 1
    [half, 0, -half],   // base 2
    [half, 0, half],    // base 3
    [-half, 0, half],   // base 4
  ];
  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4],   // sides
    [1, 2], [2, 3], [3, 4], [4, 1],   // base
  ];
  const faces = [
    [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1], [1, 2, 3, 4],
  ];
  return { vertices: v, edges, faces };
}

function buildCone(r, h, segments = 24) {
  const v = [[0, h, 0]]; // apex
  for (let i = 0; i < segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    v.push([r * Math.cos(t), 0, r * Math.sin(t)]);
  }
  const edges = [];
  // Generators (every 3rd to keep wireframe clean)
  for (let i = 1; i <= segments; i += 3) {
    edges.push([0, i]);
  }
  // Base ring
  for (let i = 1; i <= segments; i++) {
    const next = i === segments ? 1 : i + 1;
    edges.push([i, next]);
  }
  return { vertices: v, edges, faces: [] };
}

function buildSphere(r, latRings = 6, lonRings = 12) {
  const v = [];
  const indexAt = (lat, lon) => lat * lonRings + lon;
  for (let lat = 0; lat <= latRings; lat++) {
    const phi = (lat / latRings) * Math.PI;
    for (let lon = 0; lon < lonRings; lon++) {
      const theta = (lon / lonRings) * Math.PI * 2;
      v.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      ]);
    }
  }
  const edges = [];
  // Latitude rings
  for (let lat = 0; lat <= latRings; lat++) {
    for (let lon = 0; lon < lonRings; lon++) {
      const next = (lon + 1) % lonRings;
      edges.push([indexAt(lat, lon), indexAt(lat, next)]);
    }
  }
  // Longitude lines
  for (let lon = 0; lon < lonRings; lon += 2) {
    for (let lat = 0; lat < latRings; lat++) {
      edges.push([indexAt(lat, lon), indexAt(lat + 1, lon)]);
    }
  }
  return { vertices: v, edges, faces: [] };
}

export default function BodyExplorer3D() {
  const [bodyId, setBodyId] = useState('cone');
  const [r, setR] = useState(8);          // base radius (or pyramid half-side)
  const [h, setH] = useState(14);         // height
  const [phi, setPhi] = useState(0.6);
  const [theta, setTheta] = useState(0.35);
  const [waterLevel, setWaterLevel] = useState(0);  // 0..1, only for cone
  const dragRef = useRef(null);
  const svgRef = useRef(null);

  const body = useMemo(() => {
    if (bodyId === 'pyramid') return buildPyramid(r * 2, h);
    if (bodyId === 'cone') return buildCone(r, h);
    if (bodyId === 'sphere') return buildSphere(r);
    return { vertices: [], edges: [] };
  }, [bodyId, r, h]);

  // Apply rotation
  const transformed = body.vertices.map(v => rotate(v, phi, theta));
  const projected = transformed.map(p => project(p));

  // Compute z-extent for back/front opacity
  const zs = transformed.map(p => p[2]);
  const zMin = Math.min(...zs, 0);
  const zMax = Math.max(...zs, 1);
  const zRange = zMax - zMin || 1;

  // Stats
  const stats = useMemo(() => {
    if (bodyId === 'pyramid') {
      const a = r * 2;
      const V = (1 / 3) * a * a * h;
      const lat = Math.sqrt((a / 2) ** 2 + h * h);  // slant height (apothem of triangle)
      const O = a * a + 2 * a * lat;
      return [
        { label: 'V', value: `${V.toFixed(2)}` },
        { label: 'O', value: `${O.toFixed(2)}` },
        { label: 'a', value: `${a.toFixed(1)}` },
        { label: 'h', value: `${h.toFixed(1)}` },
      ];
    }
    if (bodyId === 'cone') {
      const V = (1 / 3) * Math.PI * r * r * h;
      const m = Math.sqrt(r * r + h * h);
      const O = Math.PI * r * r + Math.PI * r * m;
      // Water cone (similar) — water level wL ∈ [0,1] of full height
      const wH = waterLevel * h;
      const wR = waterLevel * r;
      const Vw = (1 / 3) * Math.PI * wR * wR * wH;
      return [
        { label: 'V', value: V.toFixed(2) },
        { label: 'O', value: O.toFixed(2) },
        { label: 'r', value: r.toFixed(1) },
        { label: 'h', value: h.toFixed(1) },
        { label: 'V_Wasser', value: Vw.toFixed(2) },
        { label: 'V_Wasser/V', value: (waterLevel ** 3).toFixed(3), highlight: true },
      ];
    }
    if (bodyId === 'sphere') {
      const V = (4 / 3) * Math.PI * r * r * r;
      const O = 4 * Math.PI * r * r;
      return [
        { label: 'V', value: V.toFixed(2) },
        { label: 'O', value: O.toFixed(2) },
        { label: 'r', value: r.toFixed(1) },
      ];
    }
    return [];
  }, [bodyId, r, h, waterLevel]);

  function handleStart(e) {
    dragRef.current = { x: e.clientX, y: e.clientY, phi, theta };
  }
  function handleMove(e) {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    setPhi(dragRef.current.phi + dx * 0.01);
    setTheta(Math.max(-Math.PI / 2, Math.min(Math.PI / 2, dragRef.current.theta + dy * 0.01)));
  }
  function handleEnd() {
    dragRef.current = null;
  }

  // For the cone water cone, build a smaller cone for the water surface
  const waterCone = useMemo(() => {
    if (bodyId !== 'cone' || waterLevel <= 0) return null;
    const wH = waterLevel * h;
    const wR = waterLevel * r;
    const segments = 24;
    const pts = [];
    for (let i = 0; i < segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      pts.push(rotate([wR * Math.cos(t), h - wH, wR * Math.sin(t)], phi, theta));
    }
    return pts.map(p => project(p));
  }, [bodyId, waterLevel, r, h, phi, theta]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Body picker */}
      <div style={{ display: 'flex', gap: '0.4rem' }}>
        {BODIES.map((b) => (
          <button
            key={b.id}
            onClick={() => setBodyId(b.id)}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              border: `1px solid ${bodyId === b.id ? COLORS.accent : 'var(--mp-border)'}`,
              background: bodyId === b.id ? `${COLORS.accent}15` : 'var(--mp-surface)',
              color: bodyId === b.id ? COLORS.accent : 'var(--mp-text)',
              fontSize: '0.85rem',
              fontWeight: bodyId === b.id ? 600 : 400,
              cursor: 'pointer',
            }}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Sliders */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.6rem' }}>
        <label style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column' }}>
          <span>{bodyId === 'pyramid' ? 'Halbseite a/2' : 'Radius r'}: <strong>{r.toFixed(1)}</strong></span>
          <input type="range" min={2} max={14} step={0.5} value={r} onChange={(e) => setR(Number(e.target.value))} />
        </label>
        {bodyId !== 'sphere' && (
          <label style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column' }}>
            <span>Höhe h: <strong>{h.toFixed(1)}</strong></span>
            <input type="range" min={3} max={22} step={0.5} value={h} onChange={(e) => setH(Number(e.target.value))} />
          </label>
        )}
        {bodyId === 'cone' && (
          <label style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column' }}>
            <span>Wasserstand: <strong>{(waterLevel * 100).toFixed(0)} %</strong></span>
            <input type="range" min={0} max={1} step={0.01} value={waterLevel} onChange={(e) => setWaterLevel(Number(e.target.value))} />
          </label>
        )}
      </div>

      {/* Stats */}
      <div style={{
        padding: '0.6rem 0.8rem',
        borderRadius: '8px',
        background: 'var(--mp-surface)',
        border: '1px solid var(--mp-border)',
        fontFamily: 'ui-monospace, monospace',
        fontSize: '0.85rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '0.5rem',
      }}>
        {stats.map((s) => (
          <div key={s.label} style={{ color: s.highlight ? COLORS.accent : COLORS.text }}>
            <span style={{ color: COLORS.textMuted }}>{s.label} =</span> <strong>{s.value}</strong>
            {s.highlight && <span style={{ marginLeft: '0.4rem', fontSize: '0.75rem' }}>(= k³ bei k = {waterLevel.toFixed(2)})</span>}
          </div>
        ))}
      </div>

      {/* SVG */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        onPointerDown={handleStart}
        onPointerMove={handleMove}
        onPointerUp={handleEnd}
        onPointerLeave={handleEnd}
        style={{
          width: '100%',
          maxWidth: `${W}px`,
          height: 'auto',
          background: COLORS.bg,
          borderRadius: '8px',
          border: '1px solid var(--mp-border)',
          touchAction: 'none',
          cursor: dragRef.current ? 'grabbing' : 'grab',
        }}
      >
        {/* Ground reference (subtle ellipse) */}
        <ellipse cx={CX} cy={CY} rx={Math.max(r, 8) * SCALE} ry={Math.max(r, 8) * SCALE * 0.25}
                 fill="none" stroke={COLORS.edgeBack} strokeWidth={0.5} strokeDasharray="3,3" opacity={0.4} />

        {/* Edges */}
        {body.edges.map(([i, j], idx) => {
          const a = projected[i];
          const b = projected[j];
          const zMid = (a.z + b.z) / 2;
          const front = (zMid - zMin) / zRange;
          const opacity = 0.35 + front * 0.65;
          const sw = 1 + front * 1;
          return (
            <line key={`e-${idx}`}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={COLORS.edge}
                  strokeWidth={sw}
                  opacity={opacity} />
          );
        })}

        {/* Water surface ellipse for cone */}
        {waterCone && (
          <polygon
            points={waterCone.map(p => `${p.x},${p.y}`).join(' ')}
            fill={COLORS.water}
            stroke="#06b6d4"
            strokeWidth={1.2}
          />
        )}

        {/* Hint text */}
        <text x={W - 10} y={H - 10} fontSize={10} fill={COLORS.textMuted} textAnchor="end">
          Ziehen zum Drehen
        </text>
      </svg>

      <p style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', margin: 0, fontStyle: 'italic' }}>
        Ziehe die Figur zum Drehen. Beim Kegel zeigt der Wasserstand-Slider den klassischen Skalierungs-Effekt:
        wenn die Wassertiefe halbiert wird, sinkt das Volumen auf ⅛ — Volumen skaliert mit dem Faktor <strong>k³</strong>,
        weil der Wasserkegel zum Gesamtkegel ähnlich ist.
      </p>
    </div>
  );
}
