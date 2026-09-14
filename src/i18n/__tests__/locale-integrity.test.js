import { describe, it, expect } from 'vitest';
import de from '../locales/de';
import en from '../locales/en';
import uk from '../locales/uk';
import ru from '../locales/ru';
import pl from '../locales/pl';
import fr from '../locales/fr';
import es from '../locales/es';
import pt from '../locales/pt';
import nl from '../locales/nl';
import it_ from '../locales/it';
import cs from '../locales/cs';
import no from '../locales/no';
import da from '../locales/da';

// Befund 13.09.2026 (Task 9by): Commit f9a3d02 hatte in allen zwoelf
// Uebersetzungen 562 Texte durch den Portalnamen ersetzt und Nachbarfelder
// (desc, context, Rechenschritte) geloescht. scripts/check-i18n-parity.mjs sah
// das nicht, weil es nur die Batch-Dateien liest, nicht die zusammengesetzte
// Locale. Dieser Test prueft die Locale so, wie I18nProvider sie bekommt.
const PORTAL_NAME = '∫nfinity';
const OK_PORTAL_NAME = new Set(['portal.title']);

const LANGS = { en, uk, ru, pl, fr, es, pt, nl, it: it_, cs, no, da };

function flatten(obj, prefix = '', out = new Map()) {
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) flatten(v, path, out);
    else out.set(path, v);
  }
  return out;
}

const deFlat = flatten(de);

describe('Locale-Integritaet', () => {
  it('de: Portalname nur als Titel', () => {
    const hits = [...deFlat].filter(([k, v]) => v === PORTAL_NAME && !OK_PORTAL_NAME.has(k));
    expect(hits.map(([k]) => k)).toEqual([]);
  });

  for (const [lang, locale] of Object.entries(LANGS)) {
    const flat = flatten(locale);

    it(`${lang}: kein Portalname als Platzhalter`, () => {
      const hits = [...flat].filter(([k, v]) => v === PORTAL_NAME && !OK_PORTAL_NAME.has(k));
      expect(hits.map(([k]) => k)).toEqual([]);
    });

    // Ein fehlender Schluessel faellt in t() still auf Deutsch zurueck — genau
    // so standen Pythagoras und Wahrscheinlichkeit in uk/ru komplett deutsch da.
    it(`${lang}: dieselben Schluessel wie de`, () => {
      const missing = [...deFlat.keys()].filter((k) => !flat.has(k));
      const extra = [...flat.keys()].filter((k) => !deFlat.has(k));
      expect({ missing, extra }).toEqual({ missing: [], extra: [] });
    });
  }
});
