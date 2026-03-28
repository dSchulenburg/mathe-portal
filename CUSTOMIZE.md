# Mathe-Portal anpassen

> Du möchtest das Portal für deine Schule oder deinen Kurs anpassen? Hier erfährst du wie.

## Quick Start

```bash
# 1. Fork auf GitHub
# 2. Clone deinen Fork
git clone https://github.com/DEIN-USERNAME/mathe-portal.git
cd mathe-portal

# 3. Installieren
npm install

# 4. Starten
npm run dev
```

## Farben anpassen

Alle Farben sind als CSS-Variablen in `src/App.css` definiert:

```css
:root {
  --mp-bg: #0f0d1a;        /* Hintergrund */
  --mp-surface: #1a1525;    /* Karten */
  --mp-primary: #a78bfa;    /* Hauptfarbe */
  --mp-secondary: #f472b6;  /* Akzent */
  --mp-accent: #fbbf24;     /* Highlights */
}
```

Ändere diese Werte um das Portal an dein Schuldesign anzupassen.

## Eigene Übung hinzufügen

1. Kopiere `src/modules/_template/exercises/TEMPLATE.jsx`
2. Passe ID, Titel, Komponente und Validierung an
3. Registriere die Übung im Level-Index
4. Füge Locale-Einträge in `src/i18n/locales/de.js` (und weitere) hinzu

## Eigenes Modul erstellen

1. Erstelle `src/modules/mein-modul/`
2. Kopiere die Struktur von `quad-funktionen/`:
   - `index.js` — Modul-Definition
   - `levels.js` — Level-Definitionen
   - `badges.js` — Badge-Definitionen
   - `exercises/` — Übungsverzeichnis
3. Importiere das Modul in `src/App.jsx`
4. Füge Locale-Einträge hinzu

## Deployment

### GitHub Pages (kostenlos)

```bash
npm run build
# dist/ Ordner auf GitHub Pages deployen
```

### Eigener Server

```bash
npm run build
# dist/ Inhalt in dein Web-Verzeichnis kopieren
```

### Docker

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
```

## Lizenz

CC BY-SA 4.0 — du darfst anpassen und weitergeben, musst aber die gleiche Lizenz verwenden und den Urheber nennen.
