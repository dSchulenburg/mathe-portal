import { useState, useMemo } from 'react';

/**
 * Binomial distribution histogram with σ-regions, normal-approximation overlay,
 * and presets that mirror the lesson's example contexts. Makes the *shape* of
 * B(n, p) visible — the asymmetry, the σ-rule (68/95/99.7), and the central-limit
 * approach to the normal curve as n grows.
 */

const PRESETS = [
  { id: 'fair', label: 'Münze (n=10, p=0,5)', n: 10, p: 0.5 },
  { id: 'airpods', label: 'AirPods (n=20, p=0,05)', n: 20, p: 0.05 },
  { id: 'basketball', label: 'Freiwurf (n=10, p=0,8)', n: 10, p: 0.8 },
  { id: 'large', label: 'CLT-Demo (n=80, p=0,3)', n: 80, p: 0.3 },
];

const WIDTH = 640;
const HEIGHT = 320;
const MARGIN = { top: 20, right: 24, bottom: 42, left: 48 };

const COLORS = {
  bar: '#3b82f6',
  barInRegion: '#2563eb',
  barOutside: '#cbd5e1',
  barSelected: '#f59e0b',
  axis: '#475569',
  text: '#1e293b',
  textMuted: '#64748b',
  sigma1: '#10b98140',
  sigma2: '#10b98120',
  sigma3: '#10b98110',
  normal: '#ef4444',
  bg: '#f8fafc',
};

// Log-gamma for stable binomial computation
function lnGamma(x) {
  const c = [76.18009172947146, -86.50532032941677, 24.01409824083091,
             -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
  let y = x, t = x + 5.5;
  t -= (x + 0.5) * Math.log(t);
  let s = 1.000000000190015;
  for (let i = 0; i < 6; i++) s += c[i] / ++y;
  return -t + Math.log(2.5066282746310005 * s / x);
}

function binomialPMF(n, k, p) {
  if (k < 0 || k > n) return 0;
  if (p === 0) return k === 0 ? 1 : 0;
  if (p === 1) return k === n ? 1 : 0;
  const logCoeff = lnGamma(n + 1) - lnGamma(k + 1) - lnGamma(n - k + 1);
  return Math.exp(logCoeff + k * Math.log(p) + (n - k) * Math.log(1 - p));
}

function normalPDF(x, mu, sigma) {
  return Math.exp(-0.5 * ((x - mu) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));
}

export default function BinomialHistogram() {
  const [n, setN] = useState(10);
  const [p, setP] = useState(0.5);
  const [showSigma, setShowSigma] = useState(true);
  const [showNormal, setShowNormal] = useState(false);
  const [selectedK, setSelectedK] = useState(null);

  const stats = useMemo(() => {
    const mu = n * p;
    const sigma = Math.sqrt(n * p * (1 - p));
    const probs = [];
    for (let k = 0; k <= n; k++) probs.push(binomialPMF(n, k, p));
    const maxProb = Math.max(...probs);
    return { mu, sigma, probs, maxProb };
  }, [n, p]);

  const innerWidth = WIDTH - MARGIN.left - MARGIN.right;
  const innerHeight = HEIGHT - MARGIN.top - MARGIN.bottom;
  const barWidth = innerWidth / (n + 1);

  const xScale = (k) => MARGIN.left + (k + 0.5) * barWidth;
  const yScale = (prob) => MARGIN.top + innerHeight - (prob / stats.maxProb) * innerHeight;

  // x-axis tick selection — every 1 if n<=20, else step to keep ~10 ticks
  const tickStep = n <= 20 ? 1 : Math.ceil(n / 10);
  const ticks = [];
  for (let k = 0; k <= n; k += tickStep) ticks.push(k);
  if (ticks[ticks.length - 1] !== n) ticks.push(n);

  function isInSigma(k, level) {
    return Math.abs(k - stats.mu) <= level * stats.sigma;
  }

  function pSum(predicate) {
    let s = 0;
    for (let k = 0; k <= n; k++) if (predicate(k)) s += stats.probs[k];
    return s;
  }

  const sigma1Coverage = pSum((k) => isInSigma(k, 1));
  const sigma2Coverage = pSum((k) => isInSigma(k, 2));

  const applyPreset = (preset) => {
    setN(preset.n);
    setP(preset.p);
    setSelectedK(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Presets */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {PRESETS.map((preset) => {
          const active = preset.n === n && Math.abs(preset.p - p) < 0.001;
          return (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset)}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: `1px solid ${active ? COLORS.bar : 'var(--mp-border)'}`,
                background: active ? `${COLORS.bar}15` : 'var(--mp-surface)',
                color: active ? COLORS.bar : 'var(--mp-text)',
                fontSize: '0.8rem',
                fontWeight: active ? 600 : 400,
                cursor: 'pointer',
              }}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Sliders */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <label style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: '180px', fontSize: '0.85rem' }}>
          <span>
            <strong>n</strong> (Anzahl Versuche): <span style={{ fontFamily: 'ui-monospace, monospace', color: COLORS.bar }}>{n}</span>
          </span>
          <input type="range" min={1} max={100} step={1} value={n}
                 onChange={(e) => { setN(Number(e.target.value)); setSelectedK(null); }} />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: '180px', fontSize: '0.85rem' }}>
          <span>
            <strong>p</strong> (Trefferw'keit): <span style={{ fontFamily: 'ui-monospace, monospace', color: COLORS.bar }}>{p.toFixed(2)}</span>
          </span>
          <input type="range" min={0.01} max={0.99} step={0.01} value={p}
                 onChange={(e) => { setP(Number(e.target.value)); setSelectedK(null); }} />
        </label>
      </div>

      {/* Toggles */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
          <input type="checkbox" checked={showSigma} onChange={(e) => setShowSigma(e.target.checked)} />
          σ-Bereiche zeigen (1σ / 2σ / 3σ)
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
          <input type="checkbox" checked={showNormal} onChange={(e) => setShowNormal(e.target.checked)} />
          Normalverteilung überlagern
        </label>
      </div>

      {/* Stats panel */}
      <div style={{
        padding: '0.6rem 0.8rem',
        borderRadius: '8px',
        background: `${COLORS.bar}08`,
        border: `1px solid ${COLORS.bar}30`,
        fontFamily: 'ui-monospace, monospace',
        fontSize: '0.85rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.2rem',
      }}>
        <span>E(X) = n·p = <strong>{stats.mu.toFixed(2)}</strong></span>
        <span>σ = √(n·p·(1−p)) = <strong>{stats.sigma.toFixed(3)}</strong></span>
        <span>1σ-Abdeckung: <strong>{(sigma1Coverage * 100).toFixed(1)} %</strong></span>
        <span>2σ-Abdeckung: <strong>{(sigma2Coverage * 100).toFixed(1)} %</strong></span>
        {selectedK !== null && (
          <span style={{ color: COLORS.barSelected }}>
            P(X={selectedK}) = <strong>{stats.probs[selectedK].toFixed(4)}</strong>
            ({(stats.probs[selectedK] * 100).toFixed(2)} %)
          </span>
        )}
      </div>

      {/* SVG Histogram */}
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
        {/* Sigma background bands */}
        {showSigma && (
          <>
            {[3, 2, 1].map((level) => {
              const lo = Math.max(0, stats.mu - level * stats.sigma);
              const hi = Math.min(n, stats.mu + level * stats.sigma);
              const x1 = xScale(lo) - barWidth / 2;
              const x2 = xScale(hi) + barWidth / 2;
              return (
                <rect
                  key={`sigma-${level}`}
                  x={x1}
                  y={MARGIN.top}
                  width={x2 - x1}
                  height={innerHeight}
                  fill={level === 1 ? COLORS.sigma1 : level === 2 ? COLORS.sigma2 : COLORS.sigma3}
                />
              );
            })}
          </>
        )}

        {/* Bars */}
        {stats.probs.map((prob, k) => {
          const x = xScale(k) - barWidth * 0.4;
          const y = yScale(prob);
          const h = MARGIN.top + innerHeight - y;
          const isSel = selectedK === k;
          const inSigma1 = isInSigma(k, 1);
          const fill = isSel
            ? COLORS.barSelected
            : showSigma
              ? (inSigma1 ? COLORS.barInRegion : COLORS.barOutside)
              : COLORS.bar;

          return (
            <g key={k} onClick={() => setSelectedK(selectedK === k ? null : k)} style={{ cursor: 'pointer' }}>
              <rect
                x={x}
                y={y}
                width={barWidth * 0.8}
                height={h}
                fill={fill}
                rx={1}
                style={{ transition: 'fill 0.15s' }}
              />
              {/* Invisible hit target for very thin bars */}
              <rect x={x - 1} y={MARGIN.top} width={barWidth * 0.8 + 2} height={innerHeight} fill="transparent" />
            </g>
          );
        })}

        {/* Normal-approximation overlay */}
        {showNormal && stats.sigma > 0 && (
          <path
            d={(() => {
              const points = [];
              const steps = 200;
              for (let i = 0; i <= steps; i++) {
                const k = (i / steps) * n;
                const f = normalPDF(k, stats.mu, stats.sigma);
                points.push(`${xScale(k)},${yScale(f)}`);
              }
              return `M${points.join(' L')}`;
            })()}
            stroke={COLORS.normal}
            strokeWidth={2}
            fill="none"
            opacity={0.85}
          />
        )}

        {/* Mean indicator */}
        <line
          x1={xScale(stats.mu)}
          y1={MARGIN.top}
          x2={xScale(stats.mu)}
          y2={MARGIN.top + innerHeight}
          stroke={COLORS.normal}
          strokeWidth={1}
          strokeDasharray="3,3"
          opacity={0.6}
        />
        <text x={xScale(stats.mu)} y={MARGIN.top - 6} fontSize={11} textAnchor="middle" fill={COLORS.normal} fontFamily="ui-monospace, monospace">
          μ = {stats.mu.toFixed(1)}
        </text>

        {/* x-axis */}
        <line
          x1={MARGIN.left}
          y1={MARGIN.top + innerHeight}
          x2={WIDTH - MARGIN.right}
          y2={MARGIN.top + innerHeight}
          stroke={COLORS.axis}
        />
        {ticks.map((k) => (
          <g key={`tick-${k}`}>
            <line
              x1={xScale(k)}
              y1={MARGIN.top + innerHeight}
              x2={xScale(k)}
              y2={MARGIN.top + innerHeight + 4}
              stroke={COLORS.axis}
            />
            <text
              x={xScale(k)}
              y={MARGIN.top + innerHeight + 16}
              textAnchor="middle"
              fontSize={11}
              fill={COLORS.textMuted}
              fontFamily="ui-monospace, monospace"
            >
              {k}
            </text>
          </g>
        ))}
        <text
          x={MARGIN.left + innerWidth / 2}
          y={HEIGHT - 6}
          textAnchor="middle"
          fontSize={11}
          fill={COLORS.textMuted}
        >
          k (Anzahl Treffer)
        </text>

        {/* y-axis label */}
        <text
          x={-(MARGIN.top + innerHeight / 2)}
          y={14}
          transform="rotate(-90)"
          textAnchor="middle"
          fontSize={11}
          fill={COLORS.textMuted}
          fontFamily="ui-monospace, monospace"
        >
          P(X = k)
        </text>
      </svg>

      <p style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', margin: 0, fontStyle: 'italic' }}>
        Klick einen Stab an, um P(X=k) abzulesen.
        Bei p=0,5 ist die Verteilung symmetrisch — bei kleinen oder großen p stark schief.
        Mit wachsendem n nähert sich das Histogramm der Glockenkurve (zentraler Grenzwertsatz).
      </p>
    </div>
  );
}
