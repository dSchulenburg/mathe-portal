import { describe, it, expect } from 'vitest';
import { TOPICS } from '../data/topics';
import { portalBatch1 } from '../i18n/portal-batch1';
import de from '../i18n/locales/de';
import { topicTitle, bridgeText } from '../i18n/topicTitle';

// portal-batch1.js ist aus topics.js und data/lessons erzeugt. Laeuft beides
// auseinander, zeigt die deutsche Oberflaeche den alten Text, die Uebersetzungen
// einen noch aelteren — und niemand merkt es. Abhilfe bei rotem Test:
//   node scripts/extract-portal-strings.mjs
describe('portal-batch1 (deutsche Quelle) ist mit den Daten synchron', () => {
  it('hat fuer jedes Thema den Titel aus topics.js', () => {
    for (const topic of TOPICS) {
      expect(portalBatch1.topics[topic.id]?.title, topic.id).toBe(topic.titleKey);
    }
  });

  it('hat jede Bruecken-Sprechblase unter bridges.<topicId>.<n>', () => {
    let count = 0;
    for (const topic of TOPICS) {
      (topic.lesson?.connections || []).forEach((conn, n) => {
        if (!conn.bubble?.text) return;
        count++;
        expect(portalBatch1.bridges[topic.id]?.[n], `${topic.id}#${n}`).toBe(conn.bubble.text);
      });
    }
    expect(count).toBeGreaterThan(100);
  });

  it('ist in locales/de.js auf oberster Ebene verdrahtet', () => {
    expect(de.topics).toBe(portalBatch1.topics);
    expect(de.bridges).toBe(portalBatch1.bridges);
    expect(de.topicView.back).toBe('← Zurück');
  });
});

describe('topicTitle / bridgeText', () => {
  const topic = { id: 'x-thema', titleKey: 'Klartext' };

  it('nimmt die Uebersetzung, wenn der Key existiert', () => {
    const t = (k) => (k === 'topics.x-thema.title' ? 'Plain text' : k);
    expect(topicTitle(t, topic)).toBe('Plain text');
  });

  it('faellt auf den Klartext zurueck, wenn t() den Key zurueckgibt', () => {
    expect(topicTitle((k) => k, topic)).toBe('Klartext');
    expect(bridgeText((k) => k, 'x-thema', 0, 'Blase')).toBe('Blase');
  });

  it('kommt ohne t aus', () => {
    expect(topicTitle(undefined, topic)).toBe('Klartext');
    expect(bridgeText(undefined, 'x-thema', 0, 'Blase')).toBe('Blase');
  });
});
