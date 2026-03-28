import { useMemo } from 'react';
import { motion } from 'framer-motion';

const PADDING = 40;
const WIDTH = 500;
const HEIGHT = 400;

function toSVG(x, y, xRange, yRange) {
  const svgX = PADDING + ((x - xRange[0]) / (xRange[1] - xRange[0])) * (WIDTH - 2 * PADDING);
  const svgY = PADDING + ((yRange[1] - y) / (yRange[1] - yRange[0])) * (HEIGHT - 2 * PADDING);
  return [svgX, svgY];
}

function toMath(svgX, svgY, xRange, yRange) {
  const x = xRange[0] + ((svgX - PADDING) / (WIDTH - 2 * PADDING)) * (xRange[1] - xRange[0]);
  const y = yRange[1] - ((svgY - PADDING) / (HEIGHT - 2 * PADDING)) * (yRange[1] - yRange[0]);
  return [x, y];
}

function generatePath(fn, xRange, steps = 200) {
  const points = [];
  const dx = (xRange[1] - xRange[0]) / steps;
  for (let i = 0; i <= steps; i++) {
    const x = xRange[0] + i * dx;
    const y = fn(x);
    if (isFinite(y)) points.push([x, y]);
  }
  return points;
}

export default function FunctionGraph({
  fn,
  fnDerivative,
  xRange = [-5, 5],
  yRange = [-5, 5],
  showGrid = true,
  showTangentAt,
  showSecantBetween,
  highlightPoints = [],
  coloredRegions = [],
  interactive = false,
  onPointClick,
  accentColor = 'var(--mp-primary)',
  className = '',
}) {
  const curve = useMemo(() => generatePath(fn, xRange), [fn, xRange]);

  const pathD = useMemo(() => {
    if (curve.length === 0) return '';
    return curve
      .map((p, i) => {
        const [sx, sy] = toSVG(p[0], p[1], xRange, yRange);
        return `${i === 0 ? 'M' : 'L'}${sx},${sy}`;
      })
      .join(' ');
  }, [curve, xRange, yRange]);

  const handleClick = (e) => {
    if (!interactive || !onPointClick) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const svgX = (e.clientX - rect.left) * (WIDTH / rect.width);
    const svgY = (e.clientY - rect.top) * (HEIGHT / rect.height);
    const [mx, my] = toMath(svgX, svgY, xRange, yRange);
    onPointClick({ x: Math.round(mx * 10) / 10, y: Math.round(my * 10) / 10 });
  };

  // Grid lines + axis labels
  const gridLines = [];
  if (showGrid) {
    for (let x = Math.ceil(xRange[0]); x <= Math.floor(xRange[1]); x++) {
      const [sx] = toSVG(x, 0, xRange, yRange);
      gridLines.push(
        <line key={`gx${x}`} x1={sx} y1={PADDING} x2={sx} y2={HEIGHT - PADDING}
          stroke="var(--mp-border)" strokeWidth={x === 0 ? 1.5 : 0.5} />
      );
      if (x !== 0) {
        const [, labelY] = toSVG(0, 0, xRange, yRange);
        gridLines.push(
          <text key={`lx${x}`} x={sx} y={Math.min(labelY + 15, HEIGHT - 5)}
            textAnchor="middle" fill="var(--mp-muted)" fontSize="10">{x}</text>
        );
      }
    }
    for (let y = Math.ceil(yRange[0]); y <= Math.floor(yRange[1]); y++) {
      const [, sy] = toSVG(0, y, xRange, yRange);
      gridLines.push(
        <line key={`gy${y}`} x1={PADDING} y1={sy} x2={WIDTH - PADDING} y2={sy}
          stroke="var(--mp-border)" strokeWidth={y === 0 ? 1.5 : 0.5} />
      );
      if (y !== 0) {
        const [labelX] = toSVG(0, 0, xRange, yRange);
        gridLines.push(
          <text key={`ly${y}`} x={Math.max(labelX - 5, 5)} y={sy + 4}
            textAnchor="end" fill="var(--mp-muted)" fontSize="10">{y}</text>
        );
      }
    }
  }

  // Tangent line at a point
  let tangentLine = null;
  if (showTangentAt != null && fnDerivative) {
    const x0 = showTangentAt;
    const y0 = fn(x0);
    const m = fnDerivative(x0);
    const dx = (xRange[1] - xRange[0]) * 0.3;
    const [x1s, y1s] = toSVG(x0 - dx, y0 - m * dx, xRange, yRange);
    const [x2s, y2s] = toSVG(x0 + dx, y0 + m * dx, xRange, yRange);
    const [px, py] = toSVG(x0, y0, xRange, yRange);
    tangentLine = (
      <>
        <line x1={x1s} y1={y1s} x2={x2s} y2={y2s}
          stroke="var(--mp-secondary)" strokeWidth={2} strokeDasharray="6,4" />
        <circle cx={px} cy={py} r={5} fill="var(--mp-secondary)" />
      </>
    );
  }

  // Secant line between two points
  let secantLine = null;
  if (showSecantBetween && showSecantBetween.length === 2) {
    const [xa, xb] = showSecantBetween;
    const [sxa, sya] = toSVG(xa, fn(xa), xRange, yRange);
    const [sxb, syb] = toSVG(xb, fn(xb), xRange, yRange);
    secantLine = (
      <>
        <line x1={sxa} y1={sya} x2={sxb} y2={syb}
          stroke="var(--mp-accent)" strokeWidth={2} />
        <circle cx={sxa} cy={sya} r={4} fill="var(--mp-accent)" />
        <circle cx={sxb} cy={syb} r={4} fill="var(--mp-accent)" />
      </>
    );
  }

  // Colored regions (for monotonicity/curvature)
  const regions = coloredRegions.map((region, i) => {
    const [x1s] = toSVG(region.from, 0, xRange, yRange);
    const [x2s] = toSVG(region.to, 0, xRange, yRange);
    return (
      <rect key={`region-${i}`}
        x={x1s} y={PADDING} width={x2s - x1s} height={HEIGHT - 2 * PADDING}
        fill={region.color} />
    );
  });

  // Highlighted points with optional labels
  const points = highlightPoints.map((pt, i) => {
    const [px, py] = toSVG(pt.x, pt.y, xRange, yRange);
    return (
      <g key={`pt-${i}`}>
        <circle cx={px} cy={py} r={6}
          fill={pt.color || 'var(--mp-accent)'} stroke="white" strokeWidth={2} />
        {pt.label && (
          <text x={px + 10} y={py - 10}
            fill={pt.color || 'var(--mp-accent)'} fontSize="12" fontWeight="600">
            {pt.label}
          </text>
        )}
      </g>
    );
  });

  return (
    <svg
      className={`function-graph ${className}`}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      onClick={handleClick}
      style={{ cursor: interactive ? 'crosshair' : 'default', maxWidth: '100%' }}
    >
      {regions}
      {gridLines}
      <motion.path
        d={pathD}
        fill="none"
        stroke={accentColor}
        strokeWidth={2.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      {secantLine}
      {tangentLine}
      {points}
    </svg>
  );
}

export { toSVG, toMath, PADDING, WIDTH, HEIGHT };
