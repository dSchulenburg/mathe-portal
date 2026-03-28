import { DIFF_LEVEL_META } from '../../data/types';

export default function DiffBadge({ level }) {
  const meta = DIFF_LEVEL_META[level];
  if (!meta) return null;

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold"
      style={{ backgroundColor: meta.color + '22', color: meta.color, border: `1px solid ${meta.color}44` }}
    >
      <span>{meta.icon}</span>
      <span>{meta.label}</span>
    </span>
  );
}
