import { useState, useMemo } from 'react';

/**
 * Interactive Vierfeldertafel: edit the four inner cells, see margins,
 * conditional probabilities, and an independence check update live.
 * Replaces the markdown-table eyesore that the lesson exercises
 * embedded inline. Three presets surface canonical contexts.
 */

const PRESETS = [
  {
    id: 'sport',
    label: 'Sport × Haustier',
    rowLabel: 'Sport',
    colLabel: 'Haustier',
    rowValues: ['Ja', 'Nein'],
    colValues: ['Ja', 'Nein'],
    cells: [[8, 12], [4, 6]],
  },
  {
    id: 'medical',
    label: 'Krank × Test+',
    rowLabel: 'Status',
    colLabel: 'Test',
    rowValues: ['Krank', 'Gesund'],
    colValues: ['Positiv', 'Negativ'],
    cells: [[95, 5], [990, 8910]],
  },
  {
    id: 'spam',
    label: 'Spam × "Gewinn"',
    rowLabel: 'Mail',
    colLabel: 'Wort "Gewinn"',
    rowValues: ['Spam', 'Kein Spam'],
    colValues: ['Ja', 'Nein'],
    cells: [[210, 90], [35, 665]],
  },
];

const COLORS = {
  primary: '#3b82f6',
  ok: '#10b981',
  warn: '#f59e0b',
  cellBg: '#dbeafe',
  marginBg: '#f1f5f9',
  totalBg: '#cbd5e1',
  text: '#1e293b',
  textMuted: '#64748b',
};

export default function FourFieldTable() {
  const [presetId, setPresetId] = useState('sport');
  const preset = PRESETS.find(p => p.id === presetId);

  // Cells: cells[i][j] where i is row (A/¬A), j is col (B/¬B)
  const [cells, setCells] = useState(preset.cells);

  function applyPreset(p) {
    setPresetId(p.id);
    setCells(p.cells);
  }

  function updateCell(i, j, raw) {
    const v = Math.max(0, Number(raw) || 0);
    const next = cells.map(row => row.slice());
    next[i][j] = v;
    setCells(next);
  }

  const stats = useMemo(() => {
    const a = cells[0][0]; // A ∩ B
    const b = cells[0][1]; // A ∩ ¬B
    const c = cells[1][0]; // ¬A ∩ B
    const d = cells[1][1]; // ¬A ∩ ¬B
    const rowA = a + b;
    const rowNotA = c + d;
    const colB = a + c;
    const colNotB = b + d;
    const total = a + b + c + d;
    if (total === 0) return null;

    const PA = rowA / total;
    const PB = colB / total;
    const PAintB = a / total;
    const PAgivenB = colB > 0 ? a / colB : 0;
    const PBgivenA = rowA > 0 ? a / rowA : 0;
    const expected = PA * PB;
    const independent = Math.abs(PAintB - expected) < 0.005;

    return {
      a, b, c, d, rowA, rowNotA, colB, colNotB, total,
      PA, PB, PAintB, PAgivenB, PBgivenA, expected, independent,
    };
  }, [cells]);

  if (!stats) return <p>Bitte Werte eingeben.</p>;

  const cellStyle = {
    padding: '0.45rem',
    border: '1px solid var(--mp-border)',
    background: COLORS.cellBg,
    textAlign: 'center',
    fontFamily: 'ui-monospace, monospace',
    fontSize: '0.95rem',
  };
  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    textAlign: 'center',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    color: COLORS.text,
    padding: '0.2rem',
    outline: 'none',
  };
  const marginStyle = {
    ...cellStyle,
    background: COLORS.marginBg,
    fontWeight: 600,
    fontSize: '0.85rem',
  };
  const headerStyle = {
    padding: '0.45rem',
    background: 'var(--mp-surface)',
    fontWeight: 600,
    textAlign: 'center',
    fontSize: '0.85rem',
    border: '1px solid var(--mp-border)',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Preset picker */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => applyPreset(p)}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              border: `1px solid ${presetId === p.id ? COLORS.primary : 'var(--mp-border)'}`,
              background: presetId === p.id ? `${COLORS.primary}15` : 'var(--mp-surface)',
              color: presetId === p.id ? COLORS.primary : 'var(--mp-text)',
              fontSize: '0.8rem',
              fontWeight: presetId === p.id ? 600 : 400,
              cursor: 'pointer',
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <p style={{ fontSize: '0.8rem', color: 'var(--mp-muted)', margin: 0 }}>
        Klicke in eine der vier inneren Zellen und ändere den Wert. Die Randverteilungen und alle abgeleiteten
        Wahrscheinlichkeiten werden automatisch neu berechnet.
      </p>

      {/* The 4-field table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', minWidth: '420px', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ ...headerStyle, background: 'transparent', border: 'none' }}></th>
              <th colSpan={2} style={{ ...headerStyle, color: COLORS.primary }}>
                {preset.colLabel}
              </th>
              <th style={{ ...headerStyle, background: 'transparent', color: COLORS.textMuted }}>Σ</th>
            </tr>
            <tr>
              <th style={{ ...headerStyle, background: 'transparent', color: COLORS.primary }}>{preset.rowLabel}</th>
              <th style={headerStyle}>{preset.colValues[0]}</th>
              <th style={headerStyle}>{preset.colValues[1]}</th>
              <th style={headerStyle}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={headerStyle}>{preset.rowValues[0]}</th>
              <td style={cellStyle}>
                <input type="number" min={0} value={cells[0][0]}
                       onChange={(e) => updateCell(0, 0, e.target.value)}
                       style={inputStyle} />
              </td>
              <td style={cellStyle}>
                <input type="number" min={0} value={cells[0][1]}
                       onChange={(e) => updateCell(0, 1, e.target.value)}
                       style={inputStyle} />
              </td>
              <td style={marginStyle}>{stats.rowA}</td>
            </tr>
            <tr>
              <th style={headerStyle}>{preset.rowValues[1]}</th>
              <td style={cellStyle}>
                <input type="number" min={0} value={cells[1][0]}
                       onChange={(e) => updateCell(1, 0, e.target.value)}
                       style={inputStyle} />
              </td>
              <td style={cellStyle}>
                <input type="number" min={0} value={cells[1][1]}
                       onChange={(e) => updateCell(1, 1, e.target.value)}
                       style={inputStyle} />
              </td>
              <td style={marginStyle}>{stats.rowNotA}</td>
            </tr>
            <tr>
              <th style={{ ...headerStyle, color: COLORS.textMuted }}>Σ</th>
              <td style={marginStyle}>{stats.colB}</td>
              <td style={marginStyle}>{stats.colNotB}</td>
              <td style={{ ...marginStyle, background: COLORS.totalBg, fontSize: '0.95rem' }}>{stats.total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Derived probabilities */}
      <div style={{
        padding: '0.75rem',
        borderRadius: '8px',
        background: 'var(--mp-surface)',
        border: '1px solid var(--mp-border)',
        fontFamily: 'ui-monospace, monospace',
        fontSize: '0.85rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '0.4rem 0.8rem',
      }}>
        <div>P({preset.rowValues[0]}) = {stats.rowA}/{stats.total} = <strong>{stats.PA.toFixed(3)}</strong></div>
        <div>P({preset.colValues[0]}) = {stats.colB}/{stats.total} = <strong>{stats.PB.toFixed(3)}</strong></div>
        <div>P({preset.rowValues[0]} ∩ {preset.colValues[0]}) = <strong>{stats.PAintB.toFixed(3)}</strong></div>
        <div>P({preset.colValues[0]} | {preset.rowValues[0]}) = {stats.a}/{stats.rowA} = <strong>{stats.PBgivenA.toFixed(3)}</strong></div>
        <div>P({preset.rowValues[0]} | {preset.colValues[0]}) = {stats.a}/{stats.colB} = <strong>{stats.PAgivenB.toFixed(3)}</strong></div>
      </div>

      {/* Independence check */}
      <div style={{
        padding: '0.75rem',
        borderRadius: '8px',
        background: stats.independent ? `${COLORS.ok}10` : `${COLORS.warn}10`,
        border: `1px solid ${stats.independent ? `${COLORS.ok}50` : `${COLORS.warn}50`}`,
        fontFamily: 'ui-monospace, monospace',
        fontSize: '0.85rem',
      }}>
        <div style={{ fontSize: '0.7rem', color: COLORS.textMuted, marginBottom: '0.2rem', fontFamily: 'inherit' }}>
          Unabhängigkeitscheck:
        </div>
        <div>
          P({preset.rowValues[0]}) · P({preset.colValues[0]}) = {stats.PA.toFixed(3)} · {stats.PB.toFixed(3)} = <strong>{stats.expected.toFixed(4)}</strong>
        </div>
        <div>
          P({preset.rowValues[0]} ∩ {preset.colValues[0]}) = <strong>{stats.PAintB.toFixed(4)}</strong>
        </div>
        <div style={{
          marginTop: '0.3rem',
          fontWeight: 600,
          color: stats.independent ? COLORS.ok : COLORS.warn,
        }}>
          {stats.independent
            ? '✓ stochastisch unabhängig'
            : `✗ abhängig — Differenz ${Math.abs(stats.PAintB - stats.expected).toFixed(4)}`}
        </div>
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', margin: 0, fontStyle: 'italic' }}>
        Die Vierfeldertafel ist der direkte Cousin des Wahrscheinlichkeitsbaums:
        Beide kodieren dieselbe gemeinsame Verteilung von zwei Ereignissen — die Tafel ist statisch,
        der Baum zeigt die zeitliche Reihenfolge. Probiere die Beispiele, dabei bleiben Krank ↔ Test+
        eindeutig <strong>nicht</strong> unabhängig (sonst wäre ein Test ja sinnlos).
      </p>
    </div>
  );
}
