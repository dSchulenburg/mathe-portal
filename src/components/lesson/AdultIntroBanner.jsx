import { useDisplayMode } from '../../context/DisplayModeContext';
import styles from './AdultIntroBanner.module.css';

export default function AdultIntroBanner({ title, objectives = [] }) {
  const { mode } = useDisplayMode();
  if (mode !== 'adult') return null;

  return (
    <div className={styles.banner}>
      <h2 className={styles.title}>{title}</h2>
      {objectives.length > 0 && (
        <ul className={styles.objectives}>
          {objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
