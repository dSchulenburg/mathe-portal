import { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';

const CANVAS_W = 360;
const CANVAS_H = 300;
const PAD = 40;

export default function PythagorasExplorer() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);

  const c = Math.sqrt(a * a + b * b);

  const draw = useCallback(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const svg = d3.select(svgEl);
    svg.selectAll('*').remove();

    svg
      .attr('width', CANVAS_W)
      .attr('height', CANVAS_H)
      .style('display', 'block')
      .style('max-width', '100%');

    // Scale so the triangle fits nicely
    const maxSide = Math.max(a, b);
    const scale = (Math.min(CANVAS_W, CANVAS_H) - 2 * PAD) / maxSide;

    // Right-angle corner: bottom-left
    const ox = PAD;
    const oy = CANVAS_H - PAD;

    // Points of the right triangle
    // P0 = right-angle vertex (bottom-left)
    // P1 = along x-axis (bottom-right) — length a
    // P2 = along y-axis (top-left) — length b
    const P0 = [ox, oy];
    const P1 = [ox + a * scale, oy];
    const P2 = [ox, oy - b * scale];

    // Triangle fill
    svg.append('polygon')
      .attr('points', `${P0[0]},${P0[1]} ${P1[0]},${P1[1]} ${P2[0]},${P2[1]}`)
      .attr('fill', 'rgba(251,191,36,0.10)')
      .attr('stroke', 'none');

    // Kathete a (horizontal, bottom)
    svg.append('line')
      .attr('x1', P0[0]).attr('y1', P0[1])
      .attr('x2', P1[0]).attr('y2', P1[1])
      .attr('stroke', 'var(--mp-primary)')
      .attr('stroke-width', 2.5);

    // Kathete b (vertical, left)
    svg.append('line')
      .attr('x1', P0[0]).attr('y1', P0[1])
      .attr('x2', P2[0]).attr('y2', P2[1])
      .attr('stroke', 'var(--mp-primary)')
      .attr('stroke-width', 2.5);

    // Hypotenuse c (in gold)
    svg.append('line')
      .attr('x1', P1[0]).attr('y1', P1[1])
      .attr('x2', P2[0]).attr('y2', P2[1])
      .attr('stroke', '#fbbf24')
      .attr('stroke-width', 3);

    // Right-angle marker at P0
    const markerSize = Math.min(14, scale * 0.7);
    svg.append('polyline')
      .attr('points', `${P0[0] + markerSize},${P0[1]} ${P0[0] + markerSize},${P0[1] - markerSize} ${P0[0]},${P0[1] - markerSize}`)
      .attr('fill', 'none')
      .attr('stroke', 'var(--mp-muted)')
      .attr('stroke-width', 1.5);

    // Label a (below horizontal leg, centered)
    svg.append('text')
      .attr('x', (P0[0] + P1[0]) / 2)
      .attr('y', P0[1] + 18)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '600')
      .attr('fill', 'var(--mp-primary)')
      .text(`a = ${a}`);

    // Label b (left of vertical leg, centered)
    svg.append('text')
      .attr('x', P0[0] - 20)
      .attr('y', (P0[1] + P2[1]) / 2)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '600')
      .attr('fill', 'var(--mp-primary)')
      .text(`b = ${b}`);

    // Label c (along hypotenuse, offset to the right)
    const midCx = (P1[0] + P2[0]) / 2 + 18;
    const midCy = (P1[1] + P2[1]) / 2;
    svg.append('text')
      .attr('x', midCx)
      .attr('y', midCy)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '700')
      .attr('fill', '#fbbf24')
      .text(`c ≈ ${c.toFixed(2)}`);

  }, [a, b, c]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div ref={containerRef} style={{ width: '100%', maxWidth: '480px' }}>
      {/* SVG Canvas */}
      <div style={{ background: 'var(--mp-bg)', borderRadius: '8px', padding: '0.5rem', marginBottom: '1rem' }}>
        <svg ref={svgRef} style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }} />
      </div>

      {/* Sliders */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
        {/* Slider a */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <label
            htmlFor="slider-a"
            style={{ fontSize: '13px', color: 'var(--mp-muted)', minWidth: '130px', display: 'flex', gap: '4px', alignItems: 'center' }}
          >
            <span>Kathete</span>
            <strong style={{ color: 'var(--mp-primary)' }}>a</strong>
            <span>:</span>
            <strong style={{ color: 'var(--mp-text)' }}>{a}</strong>
          </label>
          <input
            id="slider-a"
            type="range"
            min={1}
            max={10}
            step={0.5}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            style={{ flex: 1, minHeight: '44px', accentColor: 'var(--mp-primary)', cursor: 'pointer' }}
          />
        </div>

        {/* Slider b */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <label
            htmlFor="slider-b"
            style={{ fontSize: '13px', color: 'var(--mp-muted)', minWidth: '130px', display: 'flex', gap: '4px', alignItems: 'center' }}
          >
            <span>Kathete</span>
            <strong style={{ color: 'var(--mp-primary)' }}>b</strong>
            <span>:</span>
            <strong style={{ color: 'var(--mp-text)' }}>{b}</strong>
          </label>
          <input
            id="slider-b"
            type="range"
            min={1}
            max={10}
            step={0.5}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            style={{ flex: 1, minHeight: '44px', accentColor: 'var(--mp-primary)', cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Live formula display */}
      <div style={{
        background: 'var(--mp-bg)',
        border: '1px solid var(--mp-border)',
        borderRadius: '8px',
        padding: '0.75rem 1rem',
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: '1rem',
        lineHeight: 1.7,
        color: 'var(--mp-text)',
      }}>
        <div>
          <span style={{ color: 'var(--mp-primary)' }}>a²</span>
          {' + '}
          <span style={{ color: 'var(--mp-primary)' }}>b²</span>
          {' = '}
          <span style={{ color: '#fbbf24' }}>c²</span>
        </div>
        <div style={{ fontSize: '0.95rem' }}>
          <span style={{ color: 'var(--mp-primary)' }}>{a}²</span>
          {' + '}
          <span style={{ color: 'var(--mp-primary)' }}>{b}²</span>
          {' = '}
          <span style={{ color: 'var(--mp-muted)' }}>{(a * a).toFixed(1)} + {(b * b).toFixed(1)}</span>
          {' = '}
          <span style={{ color: 'var(--mp-muted)' }}>{(a * a + b * b).toFixed(1)}</span>
        </div>
        <div style={{ fontSize: '1rem', marginTop: '2px' }}>
          {'c = √'}
          <span style={{ color: 'var(--mp-muted)' }}>{(a * a + b * b).toFixed(1)}</span>
          {' = '}
          <strong style={{ color: '#fbbf24', fontSize: '1.1rem' }}>{c.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}
