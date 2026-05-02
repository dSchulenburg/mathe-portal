import { useState, useMemo } from 'react';
import * as d3 from 'd3';

/**
 * Interactive probability tree.
 * Click an end node → path highlights + the path-rule formula appears.
 * Toggle between probability mode and frequency mode (Gigerenzer's tree).
 *
 * The most underused diagram in school math: bridges Laplace,
 * conditional probability, Bayes, and binomial. One picture, many topics.
 */

const EXAMPLES = {
  twoCoins: {
    label: 'Zwei Münzwürfe',
    description: 'Symmetrisch — alle vier Pfade gleich wahrscheinlich.',
    n0: 100,
    tree: {
      name: 'Start',
      children: [
        {
          name: 'Kopf',
          p: 0.5,
          children: [
            { name: 'Kopf', p: 0.5 },
            { name: 'Zahl', p: 0.5 },
          ],
        },
        {
          name: 'Zahl',
          p: 0.5,
          children: [
            { name: 'Kopf', p: 0.5 },
            { name: 'Zahl', p: 0.5 },
          ],
        },
      ],
    },
  },
  urn: {
    label: 'Urne ohne Zurücklegen',
    description: '5 rote · 3 blaue Kugeln. Nach dem ersten Zug ändert sich die Wahrscheinlichkeit.',
    n0: 56,
    tree: {
      name: 'Start',
      children: [
        {
          name: 'Rot',
          p: 5 / 8,
          children: [
            { name: 'Rot', p: 4 / 7 },
            { name: 'Blau', p: 3 / 7 },
          ],
        },
        {
          name: 'Blau',
          p: 3 / 8,
          children: [
            { name: 'Rot', p: 5 / 7 },
            { name: 'Blau', p: 2 / 7 },
          ],
        },
      ],
    },
  },
  medical: {
    label: 'Medizintest (Bayes)',
    description: 'Prävalenz 1 %, Test 95 % sensitiv, 90 % spezifisch. Häufigkeitsbaum-Modus aktivieren!',
    n0: 10000,
    tree: {
      name: '10 000 Personen',
      children: [
        {
          name: 'Krank',
          p: 0.01,
          children: [
            { name: 'Test +', p: 0.95 },
            { name: 'Test −', p: 0.05 },
          ],
        },
        {
          name: 'Gesund',
          p: 0.99,
          children: [
            { name: 'Test +', p: 0.10 },
            { name: 'Test −', p: 0.90 },
          ],
        },
      ],
    },
  },
};

const WIDTH = 640;
const HEIGHT = 320;
const MARGIN = { top: 20, right: 120, bottom: 20, left: 80 };

const COLORS = {
  edge: '#94a3b8',
  edgeHighlight: '#3b82f6',
  node: '#1e293b',
  nodeHighlight: '#3b82f6',
  bg: '#f8fafc',
  text: '#1e293b',
  textMuted: '#64748b',
  pathProb: '#3b82f6',
};

function formatProb(p) {
  if (p === 0) return '0';
  if (p === 1) return '1';
  // Try common fractions first
  const fractions = [
    [1 / 2, '½'], [1 / 3, '⅓'], [2 / 3, '⅔'], [1 / 4, '¼'], [3 / 4, '¾'],
    [1 / 5, '⅕'], [2 / 5, '⅖'], [3 / 5, '⅗'], [4 / 5, '⅘'],
    [1 / 6, '⅙'], [5 / 6, '⅚'], [1 / 8, '⅛'], [3 / 8, '⅜'], [5 / 8, '⅝'], [7 / 8, '⅞'],
  ];
  for (const [v, s] of fractions) {
    if (Math.abs(p - v) < 0.005) return s;
  }
  return p < 0.01 ? p.toFixed(4) : p.toFixed(2);
}

function formatPercent(p) {
  if (p < 0.001) return (p * 100).toFixed(3) + ' %';
  if (p < 0.01) return (p * 100).toFixed(2) + ' %';
  return (p * 100).toFixed(1) + ' %';
}

function nodeId(d) {
  if (!d.parent) return 'root';
  const path = [];
  let cur = d;
  while (cur.parent) {
    path.unshift(cur.data.name);
    cur = cur.parent;
  }
  return path.join('→');
}

export default function ProbabilityTree() {
  const [exampleId, setExampleId] = useState('twoCoins');
  const [showFrequency, setShowFrequency] = useState(false);
  const [highlightedId, setHighlightedId] = useState(null);

  const example = EXAMPLES[exampleId];

  const layout = useMemo(() => {
    const root = d3.hierarchy(example.tree);

    // Compute path probabilities and absolute frequencies along the way
    root.each(d => {
      d.data.pathProb = d.parent ? d.parent.data.pathProb * d.data.p : 1;
      d.data.frequency = d.parent ? d.parent.data.frequency * d.data.p : example.n0;
      d.data.id = nodeId(d);
    });

    const treeLayout = d3.tree().size([
      HEIGHT - MARGIN.top - MARGIN.bottom,
      WIDTH - MARGIN.left - MARGIN.right,
    ]);
    treeLayout(root);
    return root;
  }, [exampleId, example.n0, example.tree]);

  const allDescendants = layout.descendants();
  const allLinks = layout.links();
  const leaves = allDescendants.filter(d => !d.children);

  // Determine the highlighted ancestry (set of ids on path from root to highlighted node)
  const highlightedPath = useMemo(() => {
    if (!highlightedId) return new Set();
    const node = allDescendants.find(d => d.data.id === highlightedId);
    if (!node) return new Set();
    const ids = new Set();
    let cur = node;
    while (cur) {
      ids.add(cur.data.id);
      cur = cur.parent;
    }
    return ids;
  }, [highlightedId, allDescendants]);

  const highlightedNode = highlightedId
    ? allDescendants.find(d => d.data.id === highlightedId)
    : null;

  // Build pathRule expression like  P(Rot)·P(Blau|Rot) = ⅝ · 3/7
  const pathRule = useMemo(() => {
    if (!highlightedNode) return null;
    const ancestors = highlightedNode.ancestors().reverse().slice(1); // skip root
    if (ancestors.length === 0) return null;
    const factors = ancestors.map(a => formatProb(a.data.p));
    const labels = ancestors.map(a => a.data.name);
    return {
      labels,
      factors,
      product: highlightedNode.data.pathProb,
      frequency: Math.round(highlightedNode.data.frequency),
    };
  }, [highlightedNode]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Example selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {Object.entries(EXAMPLES).map(([id, ex]) => (
          <button
            key={id}
            onClick={() => {
              setExampleId(id);
              setHighlightedId(null);
            }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              border: `1px solid ${exampleId === id ? COLORS.nodeHighlight : 'var(--mp-border)'}`,
              background: exampleId === id ? `${COLORS.nodeHighlight}15` : 'var(--mp-surface)',
              color: exampleId === id ? COLORS.nodeHighlight : 'var(--mp-text)',
              fontSize: '0.8rem',
              fontWeight: exampleId === id ? 600 : 400,
              cursor: 'pointer',
            }}
          >
            {ex.label}
          </button>
        ))}
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--mp-muted)', margin: 0 }}>
        {example.description}
      </p>

      {/* Frequency toggle */}
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={showFrequency}
          onChange={e => setShowFrequency(e.target.checked)}
        />
        <span>Häufigkeitsbaum (Gigerenzer): zeige Personen statt Wahrscheinlichkeiten</span>
      </label>

      {/* Path-rule display when something is highlighted */}
      <div
        style={{
          minHeight: '3.2rem',
          padding: '0.6rem 0.8rem',
          borderRadius: '8px',
          background: highlightedNode ? `${COLORS.nodeHighlight}10` : 'var(--mp-surface)',
          border: `1px solid ${highlightedNode ? `${COLORS.nodeHighlight}40` : 'var(--mp-border)'}`,
          fontFamily: 'ui-monospace, monospace',
          fontSize: '0.95rem',
          color: 'var(--mp-text)',
          transition: 'background 0.15s',
        }}
      >
        {pathRule ? (
          <>
            <div style={{ fontSize: '0.7rem', color: 'var(--mp-muted)', marginBottom: '0.2rem', fontFamily: 'inherit' }}>
              Pfadregel:
            </div>
            <div>
              P({pathRule.labels.join(' ∩ ')}) = {pathRule.factors.join(' · ')}
              {' = '}
              <strong style={{ color: COLORS.pathProb }}>
                {showFrequency
                  ? `${pathRule.frequency} von ${example.n0}`
                  : `${pathRule.product.toFixed(4)} (${formatPercent(pathRule.product)})`}
              </strong>
            </div>
          </>
        ) : (
          <span style={{ color: 'var(--mp-muted)', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif' }}>
            👉 Klicke auf ein <em>Endblatt</em> rechts, um den Pfad und die Pfadregel zu sehen.
          </span>
        )}
      </div>

      {/* The tree itself */}
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
        <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
          {/* Edges */}
          {allLinks.map((link, i) => {
            const inPath = highlightedPath.has(link.target.data.id);
            const midX = (link.source.y + link.target.y) / 2;
            const midY = (link.source.x + link.target.x) / 2;
            return (
              <g key={`edge-${i}`}>
                <path
                  d={`M${link.source.y},${link.source.x} L${link.target.y},${link.target.x}`}
                  stroke={inPath ? COLORS.edgeHighlight : COLORS.edge}
                  strokeWidth={inPath ? 2.5 : 1.2}
                  fill="none"
                  style={{ transition: 'stroke 0.15s, stroke-width 0.15s' }}
                />
                <text
                  x={midX}
                  y={midY - 5}
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="ui-monospace, monospace"
                  fill={inPath ? COLORS.edgeHighlight : COLORS.textMuted}
                  fontWeight={inPath ? 700 : 500}
                  style={{ transition: 'fill 0.15s' }}
                >
                  {showFrequency
                    ? Math.round(link.target.data.frequency)
                    : formatProb(link.target.data.p)}
                </text>
              </g>
            );
          })}

          {/* Nodes */}
          {allDescendants.map((d) => {
            const isLeaf = !d.children;
            const inPath = highlightedPath.has(d.data.id);
            const isHighlighted = d.data.id === highlightedId;
            const r = d.parent ? 6 : 4;

            return (
              <g
                key={d.data.id}
                transform={`translate(${d.y}, ${d.x})`}
                onClick={isLeaf ? () => setHighlightedId(d.data.id === highlightedId ? null : d.data.id) : undefined}
                style={{ cursor: isLeaf ? 'pointer' : 'default' }}
              >
                <circle
                  r={isHighlighted ? r + 2 : r}
                  fill={inPath ? COLORS.nodeHighlight : COLORS.node}
                  stroke={isLeaf ? '#fff' : 'none'}
                  strokeWidth={isLeaf ? 2 : 0}
                  style={{ transition: 'fill 0.15s, r 0.15s' }}
                />
                <text
                  x={isLeaf ? r + 8 : -(r + 6)}
                  y={4}
                  textAnchor={isLeaf ? 'start' : 'end'}
                  fontSize="12"
                  fontWeight={inPath ? 600 : 500}
                  fill={inPath ? COLORS.edgeHighlight : COLORS.text}
                  style={{ transition: 'fill 0.15s', pointerEvents: 'none', userSelect: 'none' }}
                >
                  {d.data.name}
                </text>
                {isLeaf && (
                  <text
                    x={r + 8}
                    y={18}
                    textAnchor="start"
                    fontSize="10"
                    fontFamily="ui-monospace, monospace"
                    fill={COLORS.textMuted}
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {showFrequency
                      ? `${Math.round(d.data.frequency)}`
                      : formatPercent(d.data.pathProb)}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      <p style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', margin: 0, fontStyle: 'italic' }}>
        Pfadregel: Wahrscheinlichkeiten entlang eines Pfades werden <strong>multipliziert</strong>.
        Um P(A oder B) zu bekommen, addiert man die Endwahrscheinlichkeiten der entsprechenden Blätter.
      </p>
    </div>
  );
}
