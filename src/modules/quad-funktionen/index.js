import { registerModule } from '../registry';
import { levels } from './levels';
import { badges } from './badges';
// Side-effect: triggers registerExercises for all 24 exercises
import './exercises';

registerModule({
  id: 'quad-funktionen',
  titleKey: 'modules.quad-funktionen.title',
  subtitleKey: 'modules.quad-funktionen.subtitle',
  icon: '📈',
  accentColor: '#38bdf8',
  levels,
  badges,
  exerciseCount: 24,
  totalLevels: 6,
  exercisePrefix: 'Q',
});
