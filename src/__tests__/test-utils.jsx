// Gemeinsamer Render-Helfer für Komponententests.
//
// TopicView/TopicGrid rufen useTranslation(), und das wirft ohne I18nProvider.
// Die Tests von März (ae08def, 252a8b8) sind älter als die i18n-Einführung und
// rendern nackt — seitdem rot. TopicView.embed.test.jsx hat denselben Wrapper
// lokal; hier steht er einmal für alle.
import { render } from '@testing-library/react';
import { DisplayModeProvider } from '../context/DisplayModeContext';
import { I18nProvider } from '../i18n/I18nProvider';

export function Providers({ children }) {
  return (
    <DisplayModeProvider>
      <I18nProvider>{children}</I18nProvider>
    </DisplayModeProvider>
  );
}

export function renderWithProviders(ui, options) {
  return render(ui, { wrapper: Providers, ...options });
}
