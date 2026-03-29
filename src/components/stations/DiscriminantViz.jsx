import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const WIDTH = 460;
const HEIGHT = 320;
const MARGIN = { top: 15, right: 20, bottom: 35, left: 45 };

export default function DiscriminantViz() {
  const svgRef = useRef(null);
  const [p, setP] = useState(-4);
  const [q, setQ] = useState(3);

  const D = (p / 2) ** 2 - q;
  const x1 = D >= 0 ? -p / 2 + Math.sqrt(D) : null;
  const x2 = D >= 0 ? -p / 2 - Math.sqrt(D) : null;

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const w = WIDTH - MARGIN.left - MARGIN.right;
    const h = HEIGHT - MARGIN.top - MARGIN.bottom;
    const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    // Determine view range based on vertex
    const vx = -p / 2;
    const vy = vx * vx + p * vx + q;
    const xMin = Math.min(vx - 5, -6);
    const xMax = Math.max(vx + 5, 6);

    const xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, w]);
    const samples = [];
    for (let xi = xMin; xi <= xMax; xi += 0.1) {
      samples.push({ x: xi, y: xi * xi + p * xi + q });
    }
    const yVals = samples.map((s) => s.y);
    const yMin = Math.min(-2, Math.min(...yVals) - 1);
    const yMax = Math.max(5, Math.max(...yVals) + 1);
    const yScale = d3.scaleLinear().domain([yMin, yMax]).range([h, 0]);

    // Grid
    g.append('g')
      .call(d3.axisBottom(xScale).ticks(10).tickSize(-h))
      .attr('transform', `translate(0,${h})`)
      .selectAll('line')
      .attr('stroke', 'var(--mp-border)')
      .attr('stroke-opacity', 0.3);
    g.append('g')
      .call(d3.axisLeft(yScale).ticks(8).tickSize(-w))
      .selectAll('line')
      .attr('stroke', 'var(--mp-border)')
      .attr('stroke-opacity', 0.3);

    g.selectAll('.domain').attr('stroke', 'var(--mp-border)');
    g.selectAll('.tick text').style('fill', 'var(--mp-muted)').style('font-size', '10px');

    // X-axis highlight
    if (yScale(0) >= 0 && yScale(0) <= h) {
      g.append('line').attr('x1', 0).attr('x2', w).attr('y1', yScale(0)).attr('y2', yScale(0)).attr('stroke', 'var(--mp-muted)').attr('stroke-width', 1.5);
    }

    // Parabola
    const line = d3.line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveNatural);

    const visibleSamples = samples.filter((s) => s.y >= yMin && s.y <= yMax);
    g.append('path')
      .datum(visibleSamples)
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#f97316')
      .attr('stroke-width', 2.5);

    // Nullstellen dots
    const dotColor = D > 0 ? '#22c55e' : D === 0 ? '#fbbf24' : '#ef4444';
    if (D >= 0 && x1 !== null) {
      g.append('circle')
        .attr('cx', xScale(x1))
        .attr('cy', yScale(0))
        .attr('r', 6)
        .attr('fill', dotColor)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);

      if (D > 0 && x2 !== null && Math.abs(x1 - x2) > 0.01) {
        g.append('circle')
          .attr('cx', xScale(x2))
          .attr('cy', yScale(0))
          .attr('r', 6)
          .attr('fill', dotColor)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2);
      }
    }

    // Vertex dot
    g.append('circle')
      .attr('cx', xScale(vx))
      .attr('cy', yScale(vy))
      .attr('r', 4)
      .attr('fill', '#f97316')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5);

  }, [p, q, D, x1, x2]);

  const dColor = D > 0 ? '#22c55e' : D === 0 ? '#fbbf24' : '#ef4444';
  const dText = D > 0 ? '2 Nullstellen' : D === 0 ? '1 Nullstelle (doppelt)' : 'Keine reelle Nullstelle';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={{
          width: '100%',
          maxWidth: `${WIDTH}px`,
          background: 'var(--mp-bg)',
          borderRadius: '8px',
          border: '1px solid var(--mp-border)',
        }}
      />

      {/* Sliders */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--mp-text)', fontSize: '0.9rem' }}>
          <span style={{ fontWeight: 600 }}>p =</span>
          <input type="range" min="-6" max="6" step="0.5" value={p} onChange={(e) => setP(parseFloat(e.target.value))} style={{ width: '120px' }} />
          <span style={{ minWidth: '2.5rem', textAlign: 'right', fontFamily: 'monospace' }}>{p}</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--mp-text)', fontSize: '0.9rem' }}>
          <span style={{ fontWeight: 600 }}>q =</span>
          <input type="range" min="-6" max="6" step="0.5" value={q} onChange={(e) => setQ(parseFloat(e.target.value))} style={{ width: '120px' }} />
          <span style={{ minWidth: '2.5rem', textAlign: 'right', fontFamily: 'monospace' }}>{q}</span>
        </label>
      </div>

      {/* Info display */}
      <div style={{
        padding: '0.75rem 1rem',
        borderRadius: '8px',
        background: 'var(--mp-surface)',
        border: `1.5px solid ${dColor}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.95rem', color: 'var(--mp-text)' }}>
          x² + ({p})x + ({q}) = 0
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '0.95rem' }}>
          <span style={{ color: 'var(--mp-muted)' }}>D = (p/2)² − q = </span>
          <strong style={{ color: dColor }}>{D.toFixed(2)}</strong>
          <span style={{ color: dColor, marginLeft: '0.75rem', fontWeight: 600 }}>{dText}</span>
        </div>
        {D >= 0 && x1 !== null && (
          <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--mp-text)' }}>
            x₁ = {x1.toFixed(3)}{D > 0 && x2 !== null ? `, x₂ = ${x2.toFixed(3)}` : ''}
          </div>
        )}
      </div>
    </div>
  );
}
