import { registerModule } from '../registry';
import { levels } from './levels';
import { badges } from './badges';

registerModule({
  id: 'differentialrechnung',
  titleKey: 'modules.differentialrechnung.title',
  subtitleKey: 'modules.differentialrechnung.subtitle',
  icon: '📊',
  accentColor: '#a78bfa',
  levels,
  badges,
  exerciseCount: 16,
  totalLevels: 4,
  exercisePrefix: 'D',
});

// Import exercises (side-effect registration)
import './exercises';
