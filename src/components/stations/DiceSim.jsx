import { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';

const WIDTH = 460;
const HEIGHT = 280;
const MARGIN = { top: 20, right: 20, bottom: 35, left: 45 };

const MODES = [
  { id: 'dice1', label: '1 Würfel', outcomes: [1, 2, 3, 4, 5, 6], theoretical: () => 1 / 6 },
  {
    id: 'dice2',
    label: '2 Würfel (Summe)',
    outcomes: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    theoretical: (k) => {
      const ways = k <= 7 ? k - 1 : 13 - k;
      return ways / 36;
    },
  },
  { id: 'coin', label: 'Münze', outcomes: ['Kopf', 'Zahl'], theoretical: () => 1 / 2 },
];

function rollDice1() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice2() {
  return rollDice1() + rollDice1();
}

function flipCoin() {
  return Math.random() < 0.5 ? 'Kopf' : 'Zahl';
}

export default function DiceSim() {
  const svgRef = useRef(null);
  const [mode, setMode] = useState(MODES[0]);
  const [history, setHistory] = useState([]);
  const [counts, setCounts] = useState({});

  const total = history.length;

  const doThrow = useCallback((n = 1) => {
    const newResults = [];
    for (let i = 0; i < n; i++) {
      let result;
      if (mode.id === 'dice1') result = rollDice1();
      else if (mode.id === 'dice2') result = rollDice2();
      else result = flipCoin();
      newResults.push(result);
    }

    setHistory((prev) => [...prev, ...newResults]);
    setCounts((prev) => {
      const next = { ...prev };
      for (const r of newResults) {
        next[r] = (next[r] || 0) + 1;
      }
      return next;
    });
  }, [mode]);

  const handleReset = useCallback(() => {
    setHistory([]);
    setCounts({});
  }, []);

  const handleModeChange = useCallback((m) => {
    setMode(m);
    setHistory([]);
    setCounts({});
  }, []);

  // D3 bar chart
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const w = WIDTH - MARGIN.left - MARGIN.right;
    const h = HEIGHT - MARGIN.top - MARGIN.bottom;
    const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const outcomes = mode.outcomes;
    const x = d3.scaleBand().domain(outcomes).range([0, w]).padding(0.2);
    const maxFreq = total > 0 ? Math.max(...outcomes.map((o) => (counts[o] || 0) / total), ...outcomes.map((o) => mode.theoretical(o))) * 1.2 : 0.5;
    const y = d3.scaleLinear().domain([0, maxFreq]).range([h, 0]);

    // Axes
    g.append('g')
      .attr('transform', `translate(0,${h})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('fill', 'var(--mp-muted)')
      .style('font-size', '11px');

    g.append('g')
      .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format('.0%')))
      .selectAll('text')
      .style('fill', 'var(--mp-muted)')
      .style('font-size', '11px');

    // Style axis lines
    g.selectAll('.domain, .tick line').attr('stroke', 'var(--mp-border)');

    // Bars (relative frequency)
    if (total > 0) {
      g.selectAll('.bar')
        .data(outcomes)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d))
        .attr('y', (d) => y((counts[d] || 0) / total))
        .attr('width', x.bandwidth())
        .attr('height', (d) => h - y((counts[d] || 0) / total))
        .attr('fill', '#3b82f6')
        .attr('rx', 3)
        .attr('opacity', 0.75);
    }

    // Theoretical line markers
    outcomes.forEach((o) => {
      const th = mode.theoretical(o);
      g.append('line')
        .attr('x1', x(o))
        .attr('x2', x(o) + x.bandwidth())
        .attr('y1', y(th))
        .attr('y2', y(th))
        .attr('stroke', '#fbbf24')
        .attr('stroke-width', 2.5)
        .attr('stroke-dasharray', '4,3');
    });

    // Legend
    const legend = svg.append('g').attr('transform', `translate(${MARGIN.left + 10}, 8)`);
    legend.append('rect').attr('width', 12).attr('height', 12).attr('fill', '#3b82f6').attr('rx', 2).attr('opacity', 0.75);
    legend.append('text').attr('x', 16).attr('y', 10).text('Relativ').style('fill', 'var(--mp-muted)').style('font-size', '11px');
    legend.append('line').attr('x1', 80).attr('x2', 100).attr('y1', 6).attr('y2', 6).attr('stroke', '#fbbf24').attr('stroke-width', 2.5).attr('stroke-dasharray', '4,3');
    legend.append('text').attr('x', 104).attr('y', 10).text('Theorie').style('fill', 'var(--mp-muted)').style('font-size', '11px');
  }, [mode, counts, total]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Mode buttons */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => handleModeChange(m)}
            style={{
              padding: '0.4rem 0.75rem',
              borderRadius: '6px',
              border: `1.5px solid ${mode.id === m.id ? 'var(--mp-primary)' : 'var(--mp-border)'}`,
              background: mode.id === m.id ? 'rgba(167,139,250,0.12)' : 'var(--mp-surface)',
              color: 'var(--mp-text)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: mode.id === m.id ? 600 : 400,
            }}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Chart */}
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

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <button onClick={() => doThrow(1)} style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: 'var(--mp-primary)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}>
          Werfen
        </button>
        <button onClick={() => doThrow(100)} style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: 'var(--mp-surface)', color: 'var(--mp-text)', border: '1px solid var(--mp-border)', cursor: 'pointer', fontSize: '0.9rem' }}>
          100× werfen
        </button>
        <button onClick={handleReset} style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: 'var(--mp-surface)', color: 'var(--mp-muted)', border: '1px solid var(--mp-border)', cursor: 'pointer', fontSize: '0.9rem' }}>
          Reset
        </button>
        <span style={{ fontSize: '0.8rem', color: 'var(--mp-muted)', marginLeft: 'auto' }}>
          {total} Würfe
        </span>
      </div>
    </div>
  );
}
