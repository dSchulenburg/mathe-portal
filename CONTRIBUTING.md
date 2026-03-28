# Beitragen zum Mathe-Portal

> Mathematik gehört allen. Deine Beiträge machen dieses Portal besser für alle.

## Wie du beitragen kannst

### Neue Übung vorschlagen
1. Öffne ein [Issue](https://github.com/dSchulenburg/mathe-portal/issues/new?template=neue-uebung.md)
2. Beschreibe die Übung: Thema, Schwierigkeitsgrad, erwartete Lösung
3. Wir besprechen das gemeinsam und setzen es um

### Übersetzung verbessern
1. Öffne ein [Issue](https://github.com/dSchulenburg/mathe-portal/issues/new?template=uebersetzung.md)
2. Nenne die Sprache und die fehlerhafte Stelle
3. Schlage eine bessere Übersetzung vor

### Bug melden
1. Öffne ein [Issue](https://github.com/dSchulenburg/mathe-portal/issues/new?template=bug.md)
2. Beschreibe was passiert und was du erwartest
3. Nenne Browser und Gerät

### Code beitragen
1. Fork das Repository
2. Erstelle einen Feature-Branch: `git checkout -b feat/meine-aenderung`
3. Schreibe deinen Code (siehe Coding-Guidelines unten)
4. Teste lokal: `npm run dev`
5. Erstelle einen Pull Request

## Coding-Guidelines

- **Sprache:** Komponentennamen auf Englisch, UI-Texte über i18n (nie hardcoded)
- **Übungen:** Folge dem Exercise-Template in `src/modules/_template/`
- **CSS:** Nutze die CSS-Variablen (`--mp-primary`, `--mp-surface`, etc.)
- **Formeln:** KaTeX für alle mathematischen Ausdrücke
- **Inklusiv:** Gender-Doppelpunkt (DE), diverse Perspektiven in Stories
- **Keine Dependencies:** Wir halten den Stack minimal (React, Vite, framer-motion, KaTeX)

## Übungen erstellen

Jede Übung besteht aus:
1. **React-Komponente** — rendert die Aufgabe
2. **exercise-Objekt** — definiert ID, Typ, XP, Validierung, Hints
3. **Locale-Einträge** — Titel und Beschreibung in allen 13 Sprachen

Siehe `src/modules/_template/exercises/TEMPLATE.jsx` für ein kommentiertes Beispiel.

## Pull Request Checkliste

- [ ] Übung funktioniert in `npm run dev`
- [ ] Validierung akzeptiert korrekte Antworten
- [ ] Locale-Einträge in mindestens DE und EN vorhanden
- [ ] Keine neuen Dependencies hinzugefügt
- [ ] `npm run build` läuft ohne Fehler
- [ ] Inklusive Sprache verwendet

## Lizenz

Mit deinem Beitrag stimmst du zu, dass er unter [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) veröffentlicht wird.

## Fragen?

Öffne eine [Discussion](https://github.com/dSchulenburg/mathe-portal/discussions) oder schreibe an [dirk-schulenburg.net](https://dirk-schulenburg.net).
