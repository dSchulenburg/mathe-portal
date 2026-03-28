import { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import { evaluate } from 'mathjs';

const MARGIN = { top: 20, right: 20, bottom: 40, left: 48 };
const DEFAULT_WIDTH = 480;
const DEFAULT_HEIGHT = 320;

const THEME = {
  bg: '#0f0d1a',
  grid: '#2a2440',
  axis: '#9890b0',
  axisText: '#9890b0',
};

export default function FunctionPlotter({
  functions = [],
  sliders = [],
  xRange = [-5, 5],
  yRange = [-5, 5],
  width: propWidth,
  height: propHeight,
  taskKey,
}) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [dims, setDims] = useState({
    width: propWidth ?? DEFAULT_WIDTH,
    height: propHeight ?? DEFAULT_HEIGHT,
  });

  // Slider param state — keyed by param name
  const [params, setParams] = useState(() => {
    const init = {};
    (sliders ?? []).forEach((s) => {
      init[s.param] = s.initial ?? 0;
    });
    return init;
  });

  // Responsive sizing via ResizeObserver
  useEffect(() => {
    if (propWidth && propHeight) return; // fixed size, skip
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        if (w > 0) {
          setDims({
            width: propWidth ?? w,
            height: propHeight ?? Math.round(w * (DEFAULT_HEIGHT / DEFAULT_WIDTH)),
          });
        }
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [propWidth, propHeight]);

  const drawChart = useCallback(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const { width, height } = dims;
    const innerW = width - MARGIN.left - MARGIN.right;
    const innerH = height - MARGIN.top - MARGIN.bottom;

    const svg = d3.select(svgEl);
    svg.selectAll('*').remove();

    svg
      .attr('width', width)
      .attr('height', height)
      .style('background', THEME.bg)
      .style('border-radius', '8px');

    const g = svg
      .append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const xScale = d3.scaleLinear().domain(xRange).range([0, innerW]);
    const yScale = d3.scaleLinear().domain(yRange).range([innerH, 0]);

    // Clip path so curves don't overflow
    svg
      .append('defs')
      .append('clipPath')
      .attr('id', 'plot-clip')
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', innerW)
      .attr('height', innerH);

    // Grid lines
    const xTicks = xScale.ticks(8);
    const yTicks = yScale.ticks(6);

    g.append('g')
      .attr('class', 'grid-x')
      .selectAll('line')
      .data(xTicks)
      .join('line')
      .attr('x1', (d) => xScale(d))
      .attr('x2', (d) => xScale(d))
      .attr('y1', 0)
      .attr('y2', innerH)
      .attr('stroke', THEME.grid)
      .attr('stroke-width', 1);

    g.append('g')
      .attr('class', 'grid-y')
      .selectAll('line')
      .data(yTicks)
      .join('line')
      .attr('x1', 0)
      .attr('x2', innerW)
      .attr('y1', (d) => yScale(d))
      .attr('y2', (d) => yScale(d))
      .attr('stroke', THEME.grid)
      .attr('stroke-width', 1);

    // Axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(8)
      .tickSize(4)
      .tickPadding(6);
    const yAxis = d3
      .axisLeft(yScale)
      .ticks(6)
      .tickSize(4)
      .tickPadding(6);

    g.append('g')
      .attr('class', 'axis-x')
      .attr('transform', `translate(0,${innerH})`)
      .call(xAxis)
      .call((ax) => {
        ax.select('.domain').attr('stroke', THEME.axis);
        ax.selectAll('.tick line').attr('stroke', THEME.axis);
        ax.selectAll('.tick text')
          .attr('fill', THEME.axisText)
          .attr('font-size', '11px');
      });

    g.append('g')
      .attr('class', 'axis-y')
      .call(yAxis)
      .call((ax) => {
        ax.select('.domain').attr('stroke', THEME.axis);
        ax.selectAll('.tick line').attr('stroke', THEME.axis);
        ax.selectAll('.tick text')
          .attr('fill', THEME.axisText)
          .attr('font-size', '11px');
      });

    // Axis labels
    svg
      .append('text')
      .attr('x', MARGIN.left + innerW + 8)
      .attr('y', MARGIN.top + innerH)
      .attr('fill', THEME.axisText)
      .attr('font-size', '13px')
      .attr('dominant-baseline', 'middle')
      .text('x');

    svg
      .append('text')
      .attr('x', MARGIN.left - 12)
      .attr('y', MARGIN.top - 8)
      .attr('fill', THEME.axisText)
      .attr('font-size', '13px')
      .attr('text-anchor', 'middle')
      .text('y');

    // Zero lines (if in range)
    if (xRange[0] <= 0 && 0 <= xRange[1]) {
      g.append('line')
        .attr('x1', xScale(0))
        .attr('x2', xScale(0))
        .attr('y1', 0)
        .attr('y2', innerH)
        .attr('stroke', THEME.axis)
        .attr('stroke-width', 1.5);
    }
    if (yRange[0] <= 0 && 0 <= yRange[1]) {
      g.append('line')
        .attr('x1', 0)
        .attr('x2', innerW)
        .attr('y1', yScale(0))
        .attr('y2', yScale(0))
        .attr('stroke', THEME.axis)
        .attr('stroke-width', 1.5);
    }

    // Generate + plot each function
    const NUM_POINTS = 300;
    const [yMin, yMax] = yRange;
    const yClamp = 5; // extra buffer beyond yRange

    functions.forEach(({ expression, color, label }) => {
      const step = (xRange[1] - xRange[0]) / (NUM_POINTS - 1);
      const points = [];

      for (let i = 0; i < NUM_POINTS; i++) {
        const x = xRange[0] + i * step;
        try {
          let y = evaluate(expression, { x, ...params });
          // Convert matrix/complex to number if needed
          if (typeof y !== 'number' || !isFinite(y)) {
            points.push(null); // break the line
            continue;
          }
          // Clip to avoid visual artifacts
          y = Math.max(yMin - yClamp, Math.min(yMax + yClamp, y));
          points.push([x, y]);
        } catch {
          points.push(null);
        }
      }

      const lineGen = d3
        .line()
        .x((d) => xScale(d[0]))
        .y((d) => yScale(d[1]))
        .defined((d) => d !== null)
        .curve(d3.curveLinear);

      g.append('path')
        .datum(points)
        .attr('clip-path', 'url(#plot-clip)')
        .attr('fill', 'none')
        .attr('stroke', color ?? '#f59e0b')
        .attr('stroke-width', 2)
        .attr('d', lineGen);

      // Legend label at right edge of curve
      if (label) {
        const lastValid = [...points].reverse().find((p) => p !== null);
        if (lastValid) {
          const lx = Math.min(xScale(lastValid[0]) + 4, innerW - 4);
          const ly = yScale(lastValid[1]);
          if (ly >= 0 && ly <= innerH) {
            g.append('text')
              .attr('x', lx)
              .attr('y', ly)
              .attr('fill', color ?? '#f59e0b')
              .attr('font-size', '11px')
              .attr('dominant-baseline', 'middle')
              .text(label);
          }
        }
      }
    });
  }, [dims, functions, xRange, yRange, params]);

  useEffect(() => {
    drawChart();
  }, [drawChart]);

  const handleSliderChange = (param, value) => {
    setParams((prev) => ({ ...prev, [param]: Number(value) }));
  };

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      {taskKey && (
        <p
          style={{
            color: THEME.axisText,
            fontSize: '13px',
            marginBottom: '8px',
            fontStyle: 'italic',
          }}
        >
          {taskKey}
        </p>
      )}

      <svg ref={svgRef} style={{ display: 'block', maxWidth: '100%' }} />

      {sliders && sliders.length > 0 && (
        <div
          style={{
            marginTop: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {sliders.map((s) => (
            <div key={s.param} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <label
                htmlFor={`slider-${s.param}`}
                style={{ color: THEME.axisText, fontSize: '13px', minWidth: '160px' }}
              >
                {s.label ?? s.param}: <strong style={{ color: 'var(--mp-text)' }}>{params[s.param]}</strong>
              </label>
              <input
                id={`slider-${s.param}`}
                type="range"
                role="slider"
                min={s.min}
                max={s.max}
                step={s.step ?? 0.1}
                value={params[s.param]}
                onChange={(e) => handleSliderChange(s.param, e.target.value)}
                style={{ minHeight: '44px', flex: 1, accentColor: '#f59e0b', cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
