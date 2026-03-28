import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

const GRAPH_SIZE = 400;
const PADDING = 40;
const INNER = GRAPH_SIZE - 2 * PADDING;

// Convert math coords to SVG coords
function toSVG(x, y, xRange, yRange) {
  const svgX = PADDING + ((x - xRange[0]) / (xRange[1] - xRange[0])) * INNER;
  const svgY = PADDING + ((yRange[1] - y) / (yRange[1] - yRange[0])) * INNER;
  return { x: svgX, y: svgY };
}

// Convert SVG coords back to math coords
function toMath(svgX, svgY, xRange, yRange) {
  const x = xRange[0] + ((svgX - PADDING) / INNER) * (xRange[1] - xRange[0]);
  const y = yRange[1] - ((svgY - PADDING) / INNER) * (yRange[1] - yRange[0]);
  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
}

function generateParabolaPath(a, b, c, xRange, yRange) {
  const points = [];
  const steps = 200;
  for (let i = 0; i <= steps; i++) {
    const x = xRange[0] + (xRange[1] - xRange[0]) * (i / steps);
    const y = a * x * x + b * x + c;
    if (y >= yRange[0] - 1 && y <= yRange[1] + 1) {
      const svg = toSVG(x, y, xRange, yRange);
      points.push(svg);
    }
  }
  if (points.length === 0) return '';
  return 'M ' + points.map(p => `${p.x},${p.y}`).join(' L ');
}

export default function ParabolaGraph({
  a = 1, b = 0, c = 0,
  xRange = [-6, 6],
  yRange = [-6, 6],
  showVertex = false,
  showZeros = false,
  showGrid = true,
  showAxisLabels = true,
  interactive = false,
  onPointClick = null,
  highlightPoints = [],
  sliders = false,
  onParamsChange = null,
  className = '',
}) {
  const [params, setParams] = useState({ a, b, c });
  const currentA = sliders ? params.a : a;
  const currentB = sliders ? params.b : b;
  const currentC = sliders ? params.c : c;

  // Calculate key points
  const vertex = useMemo(() => {
    const vx = -currentB / (2 * currentA);
    const vy = currentA * vx * vx + currentB * vx + currentC;
    return { x: vx, y: vy };
  }, [currentA, currentB, currentC]);

  const zeros = useMemo(() => {
    const discriminant = currentB * currentB - 4 * currentA * currentC;
    if (discriminant < 0) return [];
    if (discriminant === 0) {
      const x = -currentB / (2 * currentA);
      return [{ x, y: 0 }];
    }
    const sqrtD = Math.sqrt(discriminant);
    return [
      { x: (-currentB + sqrtD) / (2 * currentA), y: 0 },
      { x: (-currentB - sqrtD) / (2 * currentA), y: 0 },
    ];
  }, [currentA, currentB, currentC]);

  const parabolaPath = useMemo(
    () => generateParabolaPath(currentA, currentB, currentC, xRange, yRange),
    [currentA, currentB, currentC, xRange, yRange]
  );

  const handleClick = useCallback((e) => {
    if (!interactive || !onPointClick) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * GRAPH_SIZE;
    const svgY = ((e.clientY - rect.top) / rect.height) * GRAPH_SIZE;
    const math = toMath(svgX, svgY, xRange, yRange);
    onPointClick(math);
  }, [interactive, onPointClick, xRange, yRange]);

  const handleSlider = (param, value) => {
    const newParams = { ...params, [param]: parseFloat(value) };
    setParams(newParams);
    if (onParamsChange) onParamsChange(newParams);
  };

  // Grid lines
  const gridLines = [];
  if (showGrid) {
    for (let x = Math.ceil(xRange[0]); x <= Math.floor(xRange[1]); x++) {
      const svg = toSVG(x, 0, xRange, yRange);
      gridLines.push({ x1: svg.x, y1: PADDING, x2: svg.x, y2: GRAPH_SIZE - PADDING, label: x, axis: 'x' });
    }
    for (let y = Math.ceil(yRange[0]); y <= Math.floor(yRange[1]); y++) {
      const svg = toSVG(0, y, xRange, yRange);
      gridLines.push({ x1: PADDING, y1: svg.y, x2: GRAPH_SIZE - PADDING, y2: svg.y, label: y, axis: 'y' });
    }
  }

  const origin = toSVG(0, 0, xRange, yRange);

  return (
    <div className={`graph-container ${className}`}>
      <svg
        viewBox={`0 0 ${GRAPH_SIZE} ${GRAPH_SIZE}`}
        width="100%"
        style={{ maxWidth: GRAPH_SIZE, cursor: interactive ? 'crosshair' : 'default' }}
        onClick={handleClick}
      >
        {/* Grid */}
        {gridLines.map((line, i) => (
          <g key={i}>
            <line
              x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
              stroke="var(--mp-border)" strokeWidth={line.label === 0 ? 0 : 0.5}
            />
            {showAxisLabels && line.label !== 0 && (
              <text
                x={line.axis === 'x' ? line.x1 : PADDING - 15}
                y={line.axis === 'x' ? GRAPH_SIZE - PADDING + 15 : line.y1 + 4}
                fill="var(--mp-muted)" fontSize="10" textAnchor="middle"
              >
                {line.label}
              </text>
            )}
          </g>
        ))}

        {/* Axes */}
        <line x1={PADDING} y1={origin.y} x2={GRAPH_SIZE - PADDING} y2={origin.y} stroke="var(--mp-muted)" strokeWidth={1.5} />
        <line x1={origin.x} y1={PADDING} x2={origin.x} y2={GRAPH_SIZE - PADDING} stroke="var(--mp-muted)" strokeWidth={1.5} />

        {/* Axis arrows */}
        <polygon points={`${GRAPH_SIZE - PADDING},${origin.y - 4} ${GRAPH_SIZE - PADDING},${origin.y + 4} ${GRAPH_SIZE - PADDING + 8},${origin.y}`} fill="var(--mp-muted)" />
        <polygon points={`${origin.x - 4},${PADDING} ${origin.x + 4},${PADDING} ${origin.x},${PADDING - 8}`} fill="var(--mp-muted)" />

        {/* Axis labels */}
        <text x={GRAPH_SIZE - PADDING + 12} y={origin.y + 4} fill="var(--mp-muted)" fontSize="14" fontWeight="bold">x</text>
        <text x={origin.x + 8} y={PADDING - 8} fill="var(--mp-muted)" fontSize="14" fontWeight="bold">y</text>

        {/* Parabola */}
        <motion.path
          d={parabolaPath}
          fill="none"
          stroke="var(--bswi-lightblue)"
          strokeWidth={2.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        {/* Vertex */}
        {showVertex && vertex.y >= yRange[0] && vertex.y <= yRange[1] && (() => {
          const vSvg = toSVG(vertex.x, vertex.y, xRange, yRange);
          return (
            <g>
              <circle cx={vSvg.x} cy={vSvg.y} r={5} fill="var(--bswi-yellow)" stroke="var(--mp-muted)" strokeWidth={1} />
              <text x={vSvg.x + 10} y={vSvg.y - 10} fill="var(--mp-text)" fontSize="11" fontWeight="bold">
                S({vertex.x.toFixed(1)}|{vertex.y.toFixed(1)})
              </text>
            </g>
          );
        })()}

        {/* Zeros */}
        {showZeros && zeros.map((z, i) => {
          const zSvg = toSVG(z.x, z.y, xRange, yRange);
          return (
            <g key={`zero-${i}`}>
              <circle cx={zSvg.x} cy={zSvg.y} r={5} fill="var(--bswi-error)" stroke="var(--mp-muted)" strokeWidth={1} />
              <text x={zSvg.x + 8} y={zSvg.y + 15} fill="var(--bswi-error)" fontSize="11" fontWeight="bold">
                x{i + 1}={z.x.toFixed(1)}
              </text>
            </g>
          );
        })}

        {/* Custom highlight points */}
        {highlightPoints.map((p, i) => {
          const pSvg = toSVG(p.x, p.y, xRange, yRange);
          return (
            <g key={`highlight-${i}`}>
              <circle cx={pSvg.x} cy={pSvg.y} r={6} fill={p.color || 'var(--bswi-yellow)'} stroke="var(--mp-muted)" strokeWidth={1} />
              {p.label && (
                <text x={pSvg.x + 10} y={pSvg.y - 5} fill={p.color || '#333'} fontSize="11">{p.label}</text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Sliders */}
      {sliders && (
        <div className="slider-container">
          {['a', 'b', 'c'].map(param => (
            <div key={param} className="slider-row">
              <label className="slider-label">
                {param} = {params[param].toFixed(1)}
              </label>
              <input
                type="range"
                min={param === 'a' ? -3 : -5}
                max={param === 'a' ? 3 : 5}
                step={0.1}
                value={params[param]}
                onChange={(e) => handleSlider(param, e.target.value)}
              />
            </div>
          ))}
          <div className="formula-display" style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            f(x) = {params.a !== 1 ? (params.a === -1 ? '-' : params.a.toFixed(1)) : ''}x&sup2;
            {params.b > 0 ? ` + ${params.b.toFixed(1)}x` : params.b < 0 ? ` - ${Math.abs(params.b).toFixed(1)}x` : ''}
            {params.c > 0 ? ` + ${params.c.toFixed(1)}` : params.c < 0 ? ` - ${Math.abs(params.c).toFixed(1)}` : ''}
          </div>
        </div>
      )}
    </div>
  );
}
