import { COMPETENCIES_4K } from '../../data/types';

export default function CompetencyTag({ id }) {
  const comp = COMPETENCIES_4K.find(c => c.id === id);
  if (!comp) return null;

  return (
    <span className={`text-sm ${comp.colorClass}`} title={id}>
      {comp.icon}
    </span>
  );
}
