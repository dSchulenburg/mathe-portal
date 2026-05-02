# Didaktische Analyse — Mathe-Portal

> Phase 1: Bestandsaufnahme aller 27 Themen, identifizierte Lücken und Querverbindungen.
> Phase 2 (folgt): Konkrete Überarbeitung mit Priorisierung.

**Analyse-Raster pro Thema:**
1. Visualisierungslücke
2. Pädagogische Tiefe
3. Querverbindungen
4. Lebensweltbezug
5. Curriculare Lücken

---

## A. Stochastik-Domäne (4 Themen)

### Befund auf einen Blick

Die Stochastik ist **die Visualisierungs-Wüste** des Portals. 4 Themen, davon 3 ohne jede Visual-Komponente (`station: null, plotter: null`). Nur Wahrscheinlichkeitsrechnung hat eine `DiceSim`, Normalverteilung einen Plotter — beide nicht das, was das Thema eigentlich braucht. Das ist umso bitterer, weil Stochastik der Bereich ist, wo SuS am stärksten an **abstrakter Notation** ($P(A|B)$, $\binom{n}{k}$, $\sigma$) scheitern und wo **gute Bilder** den Unterschied machen zwischen "kapiert" und "kopiert".

### 10-wahrscheinlichkeit

- **Visualisierung**: ❌ `Wahrscheinlichkeitsbaum` wird in `objectives.tree`, `explanation.tree` und der Pfadregel-Formel zentral genannt, taucht in **6 von 23 Aufgaben** explizit auf (`wahr-basis-001`, `wahr-standard-006`, `wahr-standard-007`, `wk-standard-009`, `bwk-basis-003`-Ähnliche), wird **aber nirgends gezeigt**. Vorhandene Station: `DiceSim` — ein Würfelroller, der genau das einfachste Konzept (Laplace) bereits abdeckt, aber den Baum *nicht* zeigt. **Vierfeldertafel** wird in Aufgaben als ASCII-Markdown-Tabelle in `questionText` eingebettet — visuell verkrüppelt.
- **Tiefe**: Solide. 23 Aufgaben über 4 Niveaus (Basis/Standard/Erweitert/eA), mehrere `step-solver`, `error-analysis` (`wahr-erweitert-003`: Leons Pfadfehler) und `drag-match`. Geburtstagsproblem (`wk-erweitert-010`) und Bayes (`wahr-erweitert-001`) liefern Aha-Momente — aber als reine Zahlenrechnungen, ohne Bild.
- **Querverbindungen**: `prerequisites: []` — korrekt. **Aber**: Erwartungswert wird hier eingeführt, taucht später in 11-Binomialverteilung wieder auf — die Brücke wird nicht gebaut. Bedingte Wk wird an der Aufgabe `wahr-standard-001` ("ohne Zurücklegen") **versteckt vorweggenommen**, die formale Einführung kommt erst in Klasse 11. Hier sollte ein expliziter Vorausblick stehen.
- **Lebenswelt**: ⭐ Top — Lootboxen, Shuffle, Lotto, Versicherung, Münzwurf-Spiel. SuS-affin, ehrlich (Glücksspiel-Skepsis explizit).
- **Curriculum**: Vollständigkeitsbaum, Pfadregel, Gegenwahrscheinlichkeit, Erwartungswert, Vierfeldertafel — alles da. **Fehlt**: das Histogramm einer Wahrscheinlichkeitsverteilung als Bild (Aufgabe `wahr-basis-007` fragt nach gültiger Verteilung, ohne dass je ein Histogramm gezeigt wurde).

### 11-bedingte-wahrscheinlichkeit

- **Visualisierung**: ❌ Komplett fehlend. `objectives.tree_diagrams` ist ein Lernziel, aber **keine** Komponente zeigt ihn. Der **umgekippte Baum** (Bayes-Inversion: von $P(B|A)$ zu $P(A|B)$) ist der didaktische Nordstern dieses Themas — und genau hier müsste eine Animation sein, in der derselbe Baum aus zwei Perspektiven gelesen wird. Vierfeldertafel: wieder Markdown-ASCII (`bwk-basis-003`).
- **Tiefe**: Aufgaben sind anspruchsvoll (`bwk-standard-005` Bayes-Formelauswahl, `bwk-erweitert-001` COVID, `bwk-ea-001` Drei-Fabriken-Bayes). Gute `error-analysis` (`bwk-ea-002`: Mias Bedingungsverwechslung). Aber: Bayes wird **rein algebraisch** behandelt, ohne den intuitiven Häufigkeitsbaum (Gigerenzer-Ansatz: 10.000 Personen → 100 krank → 95 positiv → ...), der genau dieses Thema in der Schulpraxis öffnet.
- **Querverbindungen**: Verlinkt korrekt auf `10-wahrscheinlichkeit`. **Aber Bayes ist Inversion** der bedingten Wk und sollte das didaktisch markieren. Das Spam-Filter-Beispiel (`bwk-standard-003`) und das Spam-Filter-Bayes-Beispiel (`bwk-erweitert-002`) verwenden denselben Kontext aus zwei Richtungen — ungenutzte Brücke.
- **Lebenswelt**: ⭐ Top — COVID-Test, Spam-Filter, TikTok-Algorithmus, Führerschein. Das ist aktuell und trifft.
- **Curriculum**: Konditionierung, totale Wahrscheinlichkeit, Bayes, Unabhängigkeit — alles formal abgedeckt. **Fehlt**: Visualisierung der Häufigkeitsbaum-Strategie (siehe oben).

### 11-binomialverteilung

- **Visualisierung**: ❌ Kein Plotter, keine Station. Die Binomialverteilung **ist** ein Histogramm — das ist ihre visuelle Identität. Ein interaktiver Slider für $n$ und $p$, der das Stabdiagramm umbaut, ist die natürlichste mögliche Visualisierung. Sigma-Regel (`binom-erweitert-003`) wird ohne Bild eingeführt.
- **Tiefe**: Stark. 16 Aufgaben, viele `step-solver`, gute Differenzierung. AB-Test (`binom-erweitert-002`) und Entscheidungsregel (`binom-ea-001` Lieferanten-Ablehnung) sind kognitiv tief. Aber: Die Binomial-**Form** (Schiefe je nach $p$, Symmetrie bei $p=0{,}5$) bleibt unsichtbar.
- **Querverbindungen**: Korrekt auf `10-wahrscheinlichkeit`. **Fehlt**: Vorausverweis auf 12-Normalverteilung (Binomial → Normal als Grenzfall, zentraler Grenzwertsatz). Diese Brücke ist die wichtigste in der gesamten Sek-II-Stochastik.
- **Lebenswelt**: ⭐ AirPods, Basketball, AB-Test, Regen, Multiple-Choice-Raten. Sehr gut.
- **Curriculum**: Bernoulli, Binomialformel, kumulativ, Erwartungswert, Sigma — vollständig.

### 12-hypothesentests

- **Visualisierung**: ❌ Keine. Hypothesentest **ohne Bild des Ablehnungsbereichs** unter der Verteilungskurve ist didaktisch eine Formel-Wüste. α- und β-Fehler-Visualisierung (zwei überlappende Kurven mit gefärbten Schwanzbereichen) ist klassisches Stochastik-Lehrmaterial — fehlt komplett.
- **Tiefe**: Examples sind ok (Playtest-Balance, Crash-Rate). Aber `mistakes.alpha_beta_confused` ist ein purer Formelhinweis, der ohne Visualisierung fast nicht greifbar ist. Konzept "p-Wert" wird in `realworld.ab_testing` einmal genannt, sonst nirgends erklärt.
- **Querverbindungen**: Korrekt auf `11-binomialverteilung`. Sollte aber explizit auf 12-Normalverteilung verweisen für approximative Tests.
- **Lebenswelt**: Gaming-Themen (Held-Balance, Crash-Rate) — gut, aber A/B-Testing als Hauptbeispiel fehlt im `examples`-Block (taucht nur in `realWorld` auf).
- **Curriculum**: Linksseitig/rechtsseitig/zweiseitig: nur ein Beispiel pro Seite. **Fehlt**: Konzept "Trennschärfe" (Power) und der Zusammenhang mit Stichprobengröße $n$.

### 12-normalverteilung

- **Visualisierung**: ⚠️ Plotter vorhanden (Glockenkurve mit µ, σ-Slidern) — Pluspunkt. **Aber**: Sigma-Regeln (68 / 95,4 / 99,7 %) werden in der Lesson genannt, aber nicht visuell hinterlegt — der Plotter zeigt nur die Kurve, nicht die schraffierten Flächen. Z-Transformation: pure Formel.
- **Tiefe**: Examples (Loot-Balancing, Frame-Times) sind originell. Aber: Zentraler Grenzwertsatz wird in der `explanation` als Formel genannt — ohne Bild, ohne Animation, ohne den klassischen "Galton-Brett"-Bezug.
- **Querverbindungen**: Korrekt auf `11-binomialverteilung`. **Fehlt**: Visualisierung der Approximation Binomial → Normal (Stabdiagramm wird zur Glockenkurve, wenn $n$ groß).
- **Lebenswelt**: Quality-Control, IQ, Stock-Returns — solide, aber generisch verglichen mit den anderen Stochastik-Themen.
- **Curriculum**: Vollständig in der Notation. **Fehlt**: Erklärung, *warum* die Normalverteilung so universal ist (Grenzwertsatz mit Beispiel).

### Stochastik — Querschnitt

**Wiederkehrende Muster:**
- Der **Wahrscheinlichkeitsbaum** ist der inhaltliche Bezugspunkt von 3 der 4 Themen (10-WK, 11-bedingt, 11-binomial implizit) und wird **nirgends visualisiert**. Er ist die offensichtlichste Lücke und der grösste Hebel.
- **Histogramme** (für Binomial, später Normal) fehlen ebenfalls vollständig.
- **Vierfeldertafel** wird in Aufgabentexten als Markdown-Tabelle eingebettet — sollte eine eigene visuelle Komponente werden (mit Drag-and-Drop auch direkt als interaktive Übung).
- Aufgabenqualität ist **durchgehend hoch** — die Inhalte sind nicht das Problem, die Bilder sind es.

**Ungenutzte Brücken:**
- 10-WK ↔ 11-bedingt: Pfadregel und Häufigkeitsbaum sollten auf demselben Komponenten-Stamm aufbauen
- 11-Binomial ↔ 12-Normal: zentraler Grenzwertsatz als Animation
- 11-bedingt: Bayes als Inversion sichtbar machen (gleicher Baum, andere Leserichtung)

**Stärkstes Thema:** 11-bedingt — anspruchsvolle Aufgaben mit echten Aha-Möglichkeiten (COVID-Test).
**Schwächstes Thema:** 12-Hypothesentests — formal komplett, didaktisch nackt.

### Top 5 Fix-Empfehlungen Stochastik (Phase 2)

| # | Maßnahme | Wirkung in | Aufwand |
|---|----------|------------|---------|
| 1 | **`ProbabilityTree`-Komponente** (zwei-/dreistufig, mit Pfadregel-Animation, Bayes-Umkehr) | 10-WK, 11-bedingt, 11-binomial | mittel |
| 2 | **`BinomialHistogram`-Komponente** (n/p-Slider, Stabdiagramm, Sigma-Schraffur, Approximation Binomial→Normal) | 11-binomial, 12-normal, 12-hypo | mittel |
| 3 | **`SigmaShader`** für Normalverteilung (zwei überlappende Kurven, Schwanzbereich-Färbung) | 12-normal, 12-hypo (α/β-Fehler) | niedrig |
| 4 | **`FourFieldTable`-Komponente** (echte interaktive Vierfeldertafel statt Markdown) | 10-WK, 11-bedingt | niedrig |
| 5 | **`HäufigkeitsBaum`-Modus** für Bayes (10.000-Personen-Strategie nach Gigerenzer) | 11-bedingt | niedrig (Erweiterung von #1) |

---

## B. Analysis-Domäne (14 Themen)

### Pro Thema

#### 10-quad-funktionen
- **Visualisierung**: Plotter mit a/b/c-Slidern. Fehlt: visualisierte quadratische Ergänzung (Schritt-für-Schritt von Normal- zu Scheitelform), Diskriminanten-Färbung. Scheitelpunkt nicht markiert.
- **Tiefe**: Solide. `qf-erweitert-005` Error-Analysis adressiert klassisches Fehlkonzept ("|a|>1 → nach unten").
- **Querverbindung**: Brücke zu `10-quad-gleichungen` (pq-Formel) fehlt im Lesson-Text. Vorbereitung für `10-diff-einfuehrung` über $f'(x)=2ax+b$ wird nicht aufgemacht.
- **Lebenswelt**: ⭐ Basketball, Brücke, Pricing — tragfähig, mit Formeln.
- **Curriculum**: ok für Klasse 10.

#### 10-quad-gleichungen
- **Visualisierung**: `station: DiscriminantViz` ✅. Faktorisierte Form $(x-x_1)(x-x_2)=0$ wird im concepts erwähnt, aber nicht visuell mit der Parabel verknüpft.
- **Tiefe**: Sehr gute Aufgaben — Vieta (`qgl-ea-001`), Wurzelgleichung mit Probe, biquadratisch via Substitution, quadratische Ergänzung als Step-Solver. Vorbildlich.
- **Querverbindung**: "Nullstelle = Lösung der Gleichung" sollte explizit werden.
- **Lebenswelt**: Geschäft, Zug-v-t — sachlich gut, weniger jugendaffin.
- **Curriculum**: vollständig.

#### 10-exp-wachstum
- **Visualisierung**: Plotter mit a·b^x. Fehlt: Halbwertszeit/Verdopplungszeit als Hilfslinien; Vergleich linear vs. exponentiell als Doppelplot.
- **Tiefe**: Sehr stark. `exp-ea-003` thematisiert Modellkritik (warum exp.-Wachstum nie dauerhaft) — selten und exzellent.
- **Querverbindung**: `prerequisites: []` — fragwürdig, Potenzgesetze stehen im Hintergrund. Brücke zu `11-exp-log` und `12-e-funktion-ln` stark, aber im Lesson nicht angesprochen.
- **Lebenswelt**: ⭐ TikTok, Pandemie, Akku, Pizza-Abkühlung — perfekt Gen-Z.
- **Curriculum**: Logistisches/begrenztes Wachstum erwähnt, aber nicht behandelt.

#### 10-periodisch
- **Visualisierung**: Plotter mit a/b/c/d ✅. Periode/Amplitude als sichtbare Markierungen wären didaktisch noch besser.
- **Tiefe**: Hochwertig. `period-erw-005` (Superposition zweier Schwingungen mit kgV der Perioden) anspruchsvoll und konzeptuell tief.
- **Querverbindung**: `prerequisites: 10-trigonometrie`. Beziehung zu `10-exp-wachstum` (gedämpfte Schwingung) wird in 12 erwähnt, fehlt hier.
- **Lebenswelt**: ⭐ Gezeiten, EKG, Wechselstrom — physikalisch korrekt.
- **Curriculum**: vollständig.

#### 10-diff-einfuehrung
- **Visualisierung**: ⚠️ **Größte Lücke der Domäne**. Plotter zeigt Tangente bei x=a, aber **die Sekante→Tangente-Animation fehlt** — das ist der zentrale Aha-Moment der Differentialrechnung. Ein h-Slider, der von h=2 → h=0 wandert, wäre Kernfeature.
- **Tiefe**: Sauberer Limes-Aufbau, korrekte Begriffsabgrenzung mittlere vs. momentane Änderungsrate.
- **Querverbindung**: prerequisites: `10-quad-funktionen`. Übergang zu `11-ableitungsregeln` (Potenzregel) wird in der Lesson nicht angekündigt.
- **Lebenswelt**: Geschwindigkeit, Tachometer — solide, physik-typisch.
- **Curriculum**: Limes-Begriff drin, Stetigkeit fehlt.

#### 10-funktionsklassen
- **Visualisierung**: Plotter mit linear/quadratisch/exponentiell parallel ✅. Logarithmische Funktion fehlt im Plotter trotz Erwähnung.
- **Tiefe**: Hervorragend. `fkl-standard-004` (Handyvertrag), `fkl-ea-001` (Café Lernpause mit drei Funktionsphasen), `fkl-erweitert-004` (Differenzenanalyse zur Typbestimmung) — methodisch tief.
- **Querverbindung**: **Konzeptueller Hub für die ganze Domäne** — sollte aktiv auf alle anderen Funktionsthemen verweisen.
- **Lebenswelt**: ⭐ Lernkurve, virales Wachstum, Salär, Café — divers und altersgerecht.
- **Curriculum**: **Lineare Funktionen** existieren nur als Vergleichsfolie — kein eigenes Topic. Für MSA-Niveau echte Lücke.

#### 11-ableitungsregeln
- **Visualisierung**: Plotter zeigt f und f' parallel ✅. Fehlt: Kettenregel als Schichten-Visualisierung.
- **Tiefe**: Sehr stark. `abl-ea-001` (Beweis Potenzregel via Limes + binomischer Lehrsatz) und `abl-ea-002` (dreifache Verkettung sin((x²+1)³)) sind eA-Niveau und didaktisch sauber.
- **Querverbindung**: prerequisites: `10-diff-einführung` — kleiner Bug (ü statt ue), aber funktional.
- **Lebenswelt**: ⭐ Skateboard-Halfpipe, Akku-Entlade, Spotify, Mietpreise.
- **Curriculum**: Quotientenregel im Explanation erwähnt, **keine Aufgabe dazu** — Lücke.

#### 11-kurvendiskussion
- **Visualisierung**: Plotter zeigt $f(x)=ax^3-3ax$ mit a-Slider, aber f' und f'' werden nicht parallel angezeigt. Natürliche Erweiterung: alle drei Funktionen übereinander mit gemeinsamen kritischen x-Werten.
- **Tiefe**: Solide. `kd-std-005` adressiert das Fehlkonzept "f'(x)=0 ⇒ Extremum" mit Sattelpunkt-Gegenbeispiel x³ — wichtig. **🐛 Bug in `kd-ea-002`**: Lösungsschlüssel zuerst a=1 mit f(2)=4≠0, dann andere Lösung mit a=-3/2.
- **Querverbindung**: prerequisites: `11-ableitungsregeln`. Brücke zu `11-extremwertaufgaben` fehlt explizit.
- **Lebenswelt**: ⭐ Podcast, Online-Shop, Reaktionszeit, COVID, Wasserrutsche.
- **Curriculum**: **Asymptoten und Polstellen fehlen komplett** — typische 11er-Themen.

#### 11-extremwertaufgaben
- **Visualisierung**: ❌ `plotter: null`. Skizzen-Modus mit Slider für die Variable und Live-Anzeige der Zielfunktion wäre extrem hilfreich. **Didaktisch reichste Lücke der Domäne.**
- **Tiefe**: Methodik wird sauber durchgezogen. **🐛 Bug `ext-erw-001`** Festival-Bühne: Maximum bei x=√33 ohne Begründung postuliert. **🐛 Bug `ext-erw-004`** Lieferroute: Aufgabe widerspricht sich im hintKey ("Korrektur: für eine sinnvolle Aufgabe...").
- **Querverbindung**: Brücke zu `10-quad-funktionen` (Scheitelpunkt = einfachstes Optimum) fehlt.
- **Lebenswelt**: Dose, Garten, Tiny-House, Festival-Bühne, Lieferroute — abwechslungsreich, aber zwei Aufgaben buggy.
- **Curriculum**: ok.

#### 11-integralrechnung
- **Visualisierung**: ⚠️ **Riemann-Summen sind die zentrale Visualisierungs-Lücke der Integralrechnung** — `int-erw-004` rechnet sie, aber ohne Bild. Slider mit n=4,8,16,...,∞ Rechtecken wäre Pflicht-Feature.
- **Tiefe**: Stammfunktion-Konzept sauber. `int-ea-002` über die "tiefste Bedeutung des Hauptsatzes" zeigt konzeptuelle Reflexion. **🐛 Bug `int-erw-001`**: correctValue=17.67, solutionKey rechnet 46/3≈15.33 — Widerspruch.
- **Querverbindung**: Brücke nach `12-integralrechnung-v` fehlt — Substitution wandert zwischen den Themen.
- **Lebenswelt**: ⭐ Pool, Marathon, Wasserverbrauch, Stromverbrauch, CO2.
- **Curriculum**: Mittelwert einer Funktion fehlt.

#### 11-exp-log
- **Visualisierung**: Plotter zeigt e^(bx) und ln(x) gemeinsam ✅. Fehlt: Achsensymmetrie zur Diagonale y=x.
- **Tiefe**: Step-Solver für Halbwertszeit, Bakterien, Newton-Abkühlung. `elog-ea-001` zur Begründung der Ableitungsregel via Kettenregel — konzeptuell gut.
- **Querverbindung**: Verbindung zu `11-ableitungsregeln` (e^x als selbstableitende Funktion) wird nicht thematisiert — gerade hier liegt die didaktisch spannende Definition von e.
- **Lebenswelt**: ⭐ Instagram-Follower, Kaffee-Abkühlung, Crypto, Medikament.
- **Curriculum**: e als Grenzwert $\lim(1+1/n)^n$ fehlt komplett.

#### 12-e-funktion-ln
- **Visualisierung**: Plotter zeigt $f(x)=ax\cdot e^{-bx}$ ✅. Fehlt: logistisches Wachstum visualisiert (kommt in Aufgabe `efn-erweitert-002` ohne Plot).
- **Tiefe**: ⭐ **Beste Lesson der gesamten Analysis-Domäne.** Radiokarbon, Akku-Ladekurve, logistisches Wachstum, partielle Integration als Step-Solver. `efn-ea-002` (Modell-Parameter aus Datenpunkten fitten) ist authentischer Modellierungs-Use-Case.
- **Querverbindung**: Partielle Integration kommt hier UND in `12-integralrechnung-v` vor — Doppelung ohne Verweis.
- **Lebenswelt**: ⭐ Akku, virale Posts, Radiokarbon, Pharma — überzeugend.
- **Curriculum**: stark. Differentialgleichungen in objectives erwähnt, aber nicht behandelt.

#### 12-integralrechnung-v
- **Visualisierung**: Plotter zeigt zwei Kurven ohne Schraffur. Die "Fläche zwischen Kurven" wird benannt, nicht visualisiert. **Rotationskörper $V=\pi\int f^2 dx$ ist die größte 3D-Lücke** — könnte als rotierender Querschnitt wirkungsvoll sein.
- **Tiefe**: Solide. Partielle Integration, Substitution, uneigentliches Integral, Volumen — alle Abi-Klassiker.
- **Querverbindung**: Substitution erscheint hier zum ersten Mal — für 12er sehr spät, sollte in `11-integralrechnung` als Vorgriff sein.
- **Lebenswelt**: ⭐ Solarpanel, Roadtrip, Elbe-Tide, 3D-Druck.
- **Curriculum**: Vollständig für Sek-II.

#### 12-abiturvorbereitung
- **Visualisierung**: ❌ `plotter: null`. **Topic-Atlas** als graphisches Netzwerk aller 27 Topics wäre genau hier didaktisch goldwert.
- **Tiefe**: Cross-Topic-Aufgaben (Analysis + Stochastik). **🐛 Bug `abi-basis-001`**: correctValue=17, solutionKey sagt mehrfach 13. `abi-erweitert-007` zur hebbaren Lücke ist die einzige Aufgabe zu gebrochen-rationalen Funktionen in der ganzen Domäne.
- **Querverbindung**: prerequisites: leer (verständlich, weil Hub). **Topic-Map** mit Klick-Navigation wäre hier ideal.
- **Lebenswelt**: realWorld-Block hat 3 Items ohne Formel — wirkt halbfertig.
- **Curriculum**: Methodische Hinweise (Zeitmanagement, Plausibilitätscheck) sind drin — selten und wertvoll.

### Analysis — Querschnitt

**Stärken:**
- Einheitliche Lesson-Struktur konsequent durchgehalten — exzellente Wartbarkeit.
- Charakter-System (Mia 10, Amir 11, Kai 12) als Lernbegleiter — stiftet Identifikation.
- 14 von 14 Themen haben Plotter — beachtlich.
- Premium-Aufgabentypen (step-solver, drag-match, error-analysis) didaktisch stark.
- Lebensweltbezüge sehr durchdacht für Gen-Z.
- "Mistakes"-Block in jeder Lesson — nicht selbstverständlich.

**Schwächen:**
- **Querverbindungen sind statisch** — `prerequisites`-Feld, aber kein aktiver Verweis im Lesson-Text. Hub-Charakter von `10-funktionsklassen` und `12-abiturvorbereitung` wird nicht ausgespielt.
- **Plotter sind monolithisch** — sie zeigen die Funktion, aber selten das didaktische Kernkonzept (Sekante→Tangente, Riemann-Summen, Krümmungswechsel, Rotationskörper).
- **🐛 Inhaltliche Bugs in Aufgabenlösungen** — fünf ernsthafte Fälle (siehe unten). Vertrauensschaden bei SuS, die richtig rechnen.
- **Reine Algebra dominiert** — wenig "Schätze ohne Rechnung", "Skizziere selbst" außer in 10-funktionsklassen.

**Fehlende Brücken (5 wichtigste):**
1. `10-quad-funktionen` → `10-quad-gleichungen`: "Nullstelle = Lösung der Gleichung"
2. `10-diff-einführung` → `11-ableitungsregeln`: "Diese Limes-Rechnung wird ab jetzt durch Regeln ersetzt"
3. `11-ableitungsregeln` → `11-kurvendiskussion` → `11-extremwertaufgaben`: das natürliche Triple wird nicht erzählt
4. `11-integralrechnung` ↔ `12-integralrechnung-v`: Substitution wandert ohne Roten Faden
5. `11-exp-log` → `12-e-funktion-ln`: "e^x ist seine eigene Ableitung — und genau deshalb wählen wir es als Basis"

**Stärkste Themen:**
- `12-e-funktion-ln` — Modellierungs-Use-Cases, konzeptuelle Tiefe, vielfältige Aufgabentypen
- `10-funktionsklassen` — Hub-Charakter, Differenzenanalyse, Mehrphasen-Modellierung
- `11-ableitungsregeln` — korrekte Beweise, mehrfache Verkettung, anschlussfähige Sachkontexte
- `10-periodisch` — ehrlich physikalische Aufgaben, kgV-Superposition

**Schwächste Themen:**
- `11-extremwertaufgaben` — zwei Bugs, kein Plotter, keine Skizzen-Komponente; gerade hier wäre Visualisierung Pflicht
- `12-abiturvorbereitung` — defekter Lösungsschlüssel, halbfertige realWorld-Items
- `11-kurvendiskussion` — `kd-ea-002` in sich inkonsistent

### Curriculare Lücken Analysis

1. **Lineare Funktionen** als eigenständiges Topic — fehlt komplett (nur in `10-funktionsklassen` gestreift). Für MSA-Niveau wichtig.
2. **Asymptoten und gebrochen-rationale Funktionen** — fehlt komplett (eine Aufgabe in `12-abi`). Klassisches 11er-Thema.
3. **Stetigkeit** als Konzept — fehlt, obwohl Limes in 10 eingeführt wird.
4. **Logistisches/begrenztes Wachstum** als eigenes Topic — wird in einer Aufgabe in 12 erwähnt.
5. **e als Grenzwert** $\lim(1+1/n)^n$ — fehlt.
6. **Newton-Verfahren** für Nullstellen — fehlt.
7. **Quotientenregel** — im Explanation 11-ableitungsregeln erwähnt, keine einzige Aufgabe.

### 🐛 Lösungsschlüssel-Bugs (KRITISCH)

| Aufgabe | Bug |
|---------|-----|
| `abi-basis-001` | correctValue=17, solutionKey rechnet f'(1)=12-4+5=13 |
| `int-erw-001` | correctValue=17.67, solutionKey rechnet 46/3≈15.33 |
| `ext-erw-001` Festival-Bühne | Maximum bei x=√33 ohne Begründung postuliert |
| `ext-erw-004` Lieferroute | hintKey enthält "Korrektur: für eine sinnvolle Aufgabe..." |
| `kd-ea-002` | Lösungsschlüssel widersprüchlich (a=1 vs. a=-3/2) |

→ Niedrigster Aufwand, höchster Trust-Impact. Sollte vor allen Visualisierungs-Arbeiten erledigt werden.

### Top 5 Fix-Empfehlungen Analysis

| # | Maßnahme | Impact | Aufwand |
|---|----------|--------|---------|
| 1 | **Bugs fixen** (5 Lösungsschlüssel) | ⭐⭐⭐⭐⭐ | minimal |
| 2 | **`connections`-Feld** in jeder Lesson (aktive Brücken statt nur prerequisites) | ⭐⭐⭐⭐⭐ | niedrig |
| 3 | **Sekante→Tangente-Animation** für `10-diff-einfuehrung` (h-Slider) | ⭐⭐⭐⭐⭐ | mittel |
| 4 | **Riemann-Summen-Visualisierung** für `11-integralrechnung` (n-Slider, Rechtecke werden feiner) | ⭐⭐⭐⭐⭐ | mittel |
| 5 | **Neue Topics**: `10-lineare-funktionen` und `11-asymptoten` | ⭐⭐⭐⭐ | hoch |

---

## C. Geometrie- & Algebra-Domänen

### Geometrie — Pro Thema

#### 10-pythagoras

- **Visualisierung**: ✅ `PythagorasExplorer`-Station vorhanden. **Aber**: Pythagoräische Tripel werden 5× im Aufgaben-Set genannt (3-4-5, 5-12-13, 8-15-17, 7-24-25, 9-40-41) — komplett ohne Visualisierung. Fehlt: Tripel-Generator (k·(3,4,5)), Beweisanimation (Quadrate über den Seiten), Raumdiagonale-3D-Viewer für die starke `pyth-erweitert-001`-Aufgabe.
- **Tiefe**: Sehr stark. 19 Aufgaben, drei Levels + eA. Fehleranalyse `pyth-erweitert-003` (Leon dividiert durch 2 statt Wurzel) ist exemplarisch — genau der Standard-Schülerfehler.
- **Querverbindung**: `prerequisites: ['10-potenzgesetze']` deklariert, aber **keine** sichtbare Verzweigung zu `10-trigonometrie` (sin²+cos²=1!), `10-koerper` (Raumdiagonale), `11-vektorrechnung` (|v|=√(...) IST Pythagoras), `10-aehnlichkeit` (Tripel skalieren). Fünf Brücken müssen explizit werden.
- **Lebenswelt**: ⭐ Bildschirm 16:9, Fußballfeld (105×68→125m), WLAN, Leiter, Quader, Satteldach, Schiff-Navigation. Authentisch.
- **Curriculum**: Sinus-/Kosinussatz wird in `pyth-erweitert-005` via tan(30°) angeschnitten — als Bonus, nicht als Weg.

#### 10-trigonometrie

- **Visualisierung**: ⚠️ Plotter für sin/cos vorhanden — **kein Einheitskreis**. `concepts.unit_circle` mit Formel $P(\cos\alpha \mid \sin\alpha)$ ist rein verbal. SOH-CAH-TOA als Text-Mnemonik im Hint statt visuell am Dreieck. **Sinus-/Kosinussatz** taucht in 5 Aufgaben auf, ist aber **nicht in der Lesson erklärt** — Lücke.
- **Tiefe**: Stark. 21 Aufgaben. Ambiguer Fall des Sinussatzes (`trig-erw-004`) ist anspruchsvoll. Pegelstand Elbe Hamburg (`trig-ea-004`) ist lokal verankert — Klasse für die BS:WI-SuS.
- **Querverbindung**: Brücken fehlen zu `10-pythagoras` (Beweis sin²+cos²=1), `10-aehnlichkeit` (**Trig als Verhältnis ähnlicher Dreiecke — der konzeptionelle Ursprung!**), `10-periodisch` (Periodisch IST angewandte Trig — die Lessons reden nicht miteinander), `11-vektorrechnung` (Skalarprodukt → cos α), `12-analytische-geo` (Winkel zwischen Ebenen).
- **Lebenswelt**: ⭐ Pegel Elbe, Riesenrad, Steigung 8°→14,1%, Turmpeilung. Sehr stark.
- **Curriculum**: Sinus-/Kosinussatz braucht **eigene Lesson-Sektion**. Bogenmaß ist genannt, aber nicht verankert.

#### 10-koerper

- **Visualisierung**: ❌ **Keine Station, kein Plotter** — und das ist ein Skandal. Es geht buchstäblich um 3D-Körper, und es gibt kein einziges Bild. SuS sollen Apothema, Mantelfläche, Wasserstand-im-umgekehrten-Kegel berechnen, ohne dass je ein Körper rotiert dargestellt würde. `koerp-erweitert-005` (Wasserstand h=4,5m bei H=9m, Volumen-skaliert mit r³) verlangt **Ähnlichkeit der Wasserkegel** — visuell sofort klar, ohne Bild extrem abstrakt.
- **Tiefe**: Sehr gut konzipiert. 19 Aufgaben. Kirchturm = Quader+Pyramide, Eistüte = Kegel+Halbkugel, Wasserturm = Zylinder+Halbkugel. `koerp-ea-002` (Radius·2 → V·8) ist exemplarisch für „dimensionales Denken".
- **Querverbindung**: Brilliantes Aufeinandertreffen in `koerp-standard-004` (Apothema = √(h²+(a/2)²)) — aber nicht hervorgehoben. Brücke zu `10-aehnlichkeit` (Wasserkegel-Skalierung) im SolutionKey erwähnt, in Lesson nicht.
- **Lebenswelt**: ⭐ Eis, Pizza, Kirchturm, Wasserturm, Fußball, Zeltdach. Griffig.
- **Curriculum**: Kegelschnitte fehlen. Oberflächen- vs. Volumenformeln in `koerp-erweitert-003` explizit gegenübergestellt — sehr gut.

#### 10-aehnlichkeit

- **Visualisierung**: ❌ **Keine Station, kein Plotter**. Strahlensatz ist ein **rein visuelles Theorem** — und wird ausschließlich textuell präsentiert. Größte Visualisierungs-Lücke der Geometrie nach `10-koerper`. Fehleranalyse `aehn-erweitert-003` zeigt subtile Verwechslung (SA/AB statt SA/SB), die nur visuell verständlich wird. Schatten-Aufgaben (Baum 12m, Person 1,80m) **schreien** nach Strahlensatz-Sketch.
- **Tiefe**: Stark. 14 Aufgaben mit drei Strahlensatz-Varianten, Flächen-/Volumen-Skalierung (k², k³). `aehn-ea-002` fragt **warum** k² statt k — hochwertige metakognitive Arbeit.
- **Querverbindung**: Schwächste Stelle der Domäne. **Strahlensatz ist die konzeptionelle Wurzel der Trigonometrie** (gleicher Sonnenwinkel → ähnliche Dreiecke → konstante Verhältnisse → trig Funktionen). Brücke wird **nicht** gebaut. Verbindung zu `10-koerper` (k³-Skalierung) auch nicht systematisch.
- **Lebenswelt**: ⭐ Karten 1:50000, Schattenmessung, Modellbau, Foto-Vergrößerung, Google-Maps-Screenshot. Aktuell.
- **Curriculum**: Zentrische Streckung als eigenes Konzept fehlt. Goldener Schnitt fehlt.

#### 11-vektorrechnung

- **Visualisierung**: ❌ **Keine Station, kein Plotter**. Vektoren ohne Pfeil sind didaktisch eine Zumutung. `vek-basis-001` definiert den Vektor als „Verschiebung" — zeigt aber keine. Skalarprodukt → Winkel ohne Bild praktisch unverständlich. Kollinearität (`vek-erweitert-003`) verlangt geometrische Intuition, die hier fehlt.
- **Tiefe**: Solide. 14 Aufgaben. Drohnenflug (`vek-erweitert-001`), Minecraft-Distanzen — authentisch und Gen-Z-tauglich. Lagebeziehung Geraden (`vek-ea-001`) und Skalarprodukt-Bedingung (`vek-ea-002`) bringen anspruchsvolle eA-Aufgaben.
- **Querverbindung**: `prerequisites: []` — **falsch!** Müsste mindestens `10-pythagoras` enthalten (|v| ist literally Pythagoras). **Kreuzprodukt** wird in `12-analytische-geo` plötzlich vorausgesetzt, aber **hier nirgendwo** eingeführt — Lücke.
- **Lebenswelt**: ⭐ Embeddings/AI (cos-similarity), GPS, Game-Physics, Minecraft. Stark.
- **Curriculum**: Kreuzprodukt fehlt komplett. Ebenenkonzept fehlt vorbereitend.

#### 12-analytische-geo

- **Visualisierung**: ❌ **Keine Station, kein Plotter** — am dramatischsten. 3D-Geometrie mit Ebenen, Schnittgeraden, Spiegelungen, Lotfußpunkten **ohne ein einziges 3D-Rendering**. `ageo-ea-002` Spiegelpunkt-Aufgabe ist ohne Visualisierung nur algebraisch erlebbar. Three.js-Komponente mit drehbarer Ebene + Lot ist hier Pflicht, nicht Kür.
- **Tiefe**: Inhaltlich exzellent. 16 Aufgaben. Hesse-Normalform sauber, Spiegelpunkt-Konstruktion vollständig, Sonneneinstrahlung auf Solarpanel (`ageo-ea-003`) sehr starke Verzahnung mit Physik.
- **Querverbindung**: `prerequisites: ['11-vektorrechnung']` ✅. Aber: Kreuzprodukt wird **erstmals hier erklärt**, sollte zurück nach `11-vektorrechnung`. Verbindung zu `11-extremwertaufgaben` (Optimierung im Raum) fehlt.
- **Lebenswelt**: ⭐ VR-Gaming (Kollision, Spiegel), Architektur, Laser-Schneidmaschine, GPS, Solar.
- **Curriculum**: Kreuzprodukt-Eigenschaften (Antikommutativität, Determinanten-Schreibweise) fehlen vertieft.

### Geometrie — Querschnitt

**Wiederkehrende Muster:**
- Aufgaben-Sets durchweg **didaktisch hochwertig** (alle Aufgabentypen, drei Stufen + eA, eingebettete Sachkontexte). Lessons jedoch **textlastig**.
- 5 von 6 Themen haben **keine domain-spezifische Visualisierung** (nur Pythagoras hat eine Station). Bei einer Domäne, die historisch und epistemisch **vom Bild lebt**, ist das die Hauptbaustelle.

**Fehlende Brücken** (die wichtigsten 5):
1. `10-aehnlichkeit` → `10-trigonometrie`: Trig ist nichts anderes als „konstantes Seitenverhältnis bei festem Winkel" — ähnliche Dreiecke. Verbindung wird nirgends gemacht.
2. `10-pythagoras` → `11-vektorrechnung`: |v| = √(...) IST Pythagoras. `vek-basis-002` schreibt es im Hint sogar so — aber `vektorrechnung.prerequisites` enthält Pythagoras nicht.
3. `10-pythagoras` → `10-trigonometrie`: sin²+cos²=1 ist Pythagoras am Einheitskreis. Wird nicht hergeleitet.
4. `11-vektorrechnung` → `12-analytische-geo`: Kreuzprodukt steht im falschen Modul.
5. `10-koerper` → `10-aehnlichkeit`: Volumen-Skalierung mit k³. Wasserkegel nutzt es, ohne dass die Lesson die Brücke baut.

**Schwächste Themen:** `10-koerper` und `10-aehnlichkeit` gleichauf — beide rein-textuelle Lessons in Sub-Domänen, die ohne Bild kaum verstehbar sind.
**Stärkstes Thema:** `10-pythagoras` — gute Station, sauberes Aufgaben-Set, klare Hierarchie.

### Algebra — Pro Thema

#### 10-potenzgesetze

- **Visualisierung**: Kein Plotter, keine Station. Algebra ist visualisierungs-schwächer als Geometrie — aber: `pot-ea-001` (2¹⁰≈10³, daraus 2²⁰≈10⁶) wäre eine **logarithmische Achse** sehr griffig. „Powers of Ten"-Zoom wäre ein Aha-Moment. Nice-to-have.
- **Tiefe**: Sehr stark. 17 Aufgaben. `pot-ea-002` fragt **warum** a⁻ⁿ=1/aⁿ gelten **muss** — Konsistenz-Argument über Produktregel. eA-würdig und didaktisch goldrichtig.
- **Querverbindung**: `prerequisites: []` OK. Brücken zu Nachfolgern werden gut gespannt: in `10-quad-funktionen` und `10-quad-gleichungen` jeweils explizit als prerequisite. Wurzeln als rationale Exponenten bauen perfekt zur `11-exp-log`-Brücke vor.
- **Lebenswelt**: ⭐ Lichtjahr, Smartphone-Speicher, IT-Konvention 1KB. Wissenschaftliche Notation in 4 Aufgaben sauber durchdekliniert.
- **Curriculum**: Logarithmen werden nur am Rande angeschnitten (`exp-log` ist Klasse 11) — OK so.

#### 12-matrizen

- **Visualisierung**: ❌ **Keine Station, kein Plotter**. Markov-Übergänge **schreien** nach Zustandsdiagramm (Knoten + gerichtete Pfeile). PageRank (`mat-ea-001`) ohne Graphen-Visualisierung der drei Webseiten ist verpasste Chance. Rotationsmatrizen ohne 3D-Animation? Leslie-Matrix ohne Population-Pyramide? **Vier Visualisierungen**, alle didaktisch unverzichtbar.
- **Tiefe**: Inhaltlich top. 16 Aufgaben. Markov-Konvergenz (`mat-ea-003`: 1,0→0,8→0,7→0,65→…→0,6) zeigt Grenzverhalten greifbar. Fixvektor mit (T-I)·w=0 sauber durchgezogen. Konvergenz unabhängig vom Startvektor in `mat-erweitert-005` ist eine echte mathematische Aussage.
- **Querverbindung**: `prerequisites: ['11-vektorrechnung']` ✅. **Aber**: Brücke zu `11-binomialverteilung`/`11-bedingte-wk` (Markov ist angewandte Wk-Theorie!) fehlt komplett. Brücke zu `12-normalverteilung` (Eigenwerte ~ Varianzen) fehlt. Rotationsmatrizen verbinden zu `10-trigonometrie` — nicht hervorgehoben.
- **Lebenswelt**: ⭐ Spotify vs. Apple Music, Wetter-Markov, Pendler Stadt-Umland, Spielerverhalten, PageRank, Frösche-Population.
- **Curriculum**: Determinante fehlt. Eigenwerte/Eigenvektoren als Konzept implizit (Fixvektor IST Eigenvektor zu λ=1) — wird nicht expliziert.

### Algebra — Querschnitt

**Diese Domäne hat nur 2 Themen — drei kapitale Curriculum-Lücken:**

1. **Lineare Funktionen / LGS** — komplett fehlend. f(x)=mx+b ist Klasse-9-Stoff, der in `10-diff-einfuehrung` und `11-vektorrechnung` (Geraden) **vorausgesetzt** wird, ohne im Portal jemals eigenständig aufzutauchen. LGS / Gauss-Verfahren wird in `mat-erweitert-002` gelöst, ist aber kein eigenes Modul. Klasse 10 sollte das haben.
2. **Termumformungen / Binomische Formeln** — Pflichtstoff für Quad-Gleichungen, nicht abgebildet. Faktorisierung wird in `10-quad-gleichungen` vorausgesetzt.
3. **Bruchgleichungen / Rationale Funktionen** — fehlt. Wäre Brücke zu Kurvendiskussion (Polstellen) und Integration (Partialbruchzerlegung).

**Fehlende Brücken:**
- `12-matrizen` ↔ `11-bedingte-wk` (Markov-Ketten = Wahrscheinlichkeitsbäume in Matrixform!)
- `12-matrizen` ↔ `10-trigonometrie` (Drehmatrix)
- `10-potenzgesetze` ↔ `10-pythagoras` (a²+b²=c² ist Algebra über Geometrie)

**Schwächstes Thema:** Strukturell — `12-matrizen` braucht 4 Visualisierungen.
**Stärkstes Thema:** `10-potenzgesetze` — `pot-ea-002` ist metakognitives Highlight.

### Top 5 Fix-Empfehlungen Geometrie + Algebra

| # | Fix | Impact | Aufwand |
|---|-----|--------|---------|
| 1 | **Strahlensatz-Explorer** (`10-aehnlichkeit`) — interaktive SVG: Scheitel S, Punkte A/B/C/D mit Sliders, Parallelen, Live-Verhältnisanzeige | ⭐⭐⭐⭐⭐ | niedrig |
| 2 | **Einheitskreis-Komponente** (`10-trigonometrie`) — rotierender Punkt P(cos α \| sin α), Sinus-/Kosinus-Strahlen, Aufrollen zur Sinus-Welle | ⭐⭐⭐⭐⭐ | niedrig–mittel |
| 3 | **3D-Körper-Viewer** (`10-koerper`) — Three.js: rotierbar, Schnittflächen, Wasserstand-Slider; wiederverwendbar für `12-analytische-geo` | ⭐⭐⭐⭐⭐ | mittel |
| 4 | **Vektor-Visualisierung 2D/3D** (`11-vektorrechnung`) — Drag&Drop-Pfeile, Skalarprodukt zeigt Winkel + Projektion | ⭐⭐⭐⭐⭐ | mittel |
| 5 | **Markov-Diagramm-Komponente** (`12-matrizen`) — Knoten-Pfeil-Graph, Iterations-Slider zeigt Konvergenz | ⭐⭐⭐⭐ | mittel |

**Bonus / Curricular**: Drei eigene neue Module priorisieren — `10-lineare-funktionen`, `10-kreis`, `11-LGS-gauss`.

**Kreuzprodukt verschieben**: Aus `12-analytische-geo` heraus, in `11-vektorrechnung` als zweite Hälfte einbauen.

**Prerequisites-Audit:**
- `11-vektorrechnung.prerequisites` muss `10-pythagoras` enthalten
- `10-trigonometrie.prerequisites` sollte `10-aehnlichkeit` enthalten (konzeptionell)
- `12-matrizen.prerequisites` sollte `11-bedingte-wk` mitlisten (Markov-Anwendung)

---

## D. Lerntagebuch & Dashboard

### Stand der Dinge

Das Lerntagebuch existiert bereits — und ist **explizit für Wiederverwendung** designt. Es lebt jedoch nicht auf `master`, sondern auf Branch **`feat/journal-phase1-solo`** im Docker-Repo. 23 Commits, vollständig implementiert, manuell getestet, **PR offen**.

### Architektur

**Drei-teilig** und sauber entkoppelt:

1. **`shared/journal/`** — wiederverwendbares Modul (TS, ~30 Dateien, ~2000 LOC)
   - `types.ts` — Datenmodell
   - `store.ts` (93 Z.) — localStorage-Wrapper, ISO-Wochen-Indizierung
   - `MikroCard.tsx` (177 Z.) — Voice-First-Overlay
   - `speechRecognition.ts` (88 Z.) — Browser-SpeechRecognition + Fallback-Detection
   - `promptApi.ts`, `synthesisApi.ts` — Claude-Anbindung mit 1.5s Timeout
   - `fallbackPrompts.ts` — statische Prompt-Library wenn Claude nicht erreichbar
   - `indexedDBAudio.ts` — Audio-Blob-Persistenz
2. **Trainer-spezifischer Mount** — `MikroCardMount.tsx` (~70 Z.) im jeweiligen Trainer
3. **Dashboard-Anbindung** — `dashboard/src/components/journal/` mit `NarrativeJourney` und `ThematicMap`; Backend-Route `dashboard-api/routes/journal.js` mit Claude-Sonnet-Anbindung

### Datenmodell

```ts
interface JournalEntry {
  id: string;              // crypto.randomUUID()
  timestamp: number;
  moduleId: string;        // 'buchfuehrung' | künftig 'mathe-portal'
  sectionId: string;       // 'level-3' (NICHT pro Aufgabe!)
  context: { concepts: string[]; character?: string };
  prompt: string;          // der Reflexionsimpuls
  modality: 'voice' | 'text' | 'skip';
  transcript?: string;
  audioBlobId?: string;
  moodColor?: 0|1|2|3|4;   // 5er-Stimmungsskala
  durationMs?: number;
}
```

Plus `Cluster`, `WeeklyReview`, `JournalSettings` (mit `swarmOptedIn` + `swarmAnonId` als Vorbereitung für Stigmergie-Phase).

### UX

- **Voice-First** — MikroCard-Overlay öffnet sich am **Level-Ende** (NICHT pro Aufgabe — explizite Designentscheidung nach User-Test).
- 4-Sekunden-Watchdog → Tipp-Modus-Fallback bei Browser-Block.
- Skip-Button + Session-Debounce.
- Dashboard zeigt **kein** Eintrags-Listing. Stattdessen: Button "Deine Woche ansehen (~5 Sek)" → Claude generiert Narrative + Cluster + Muster-Notiz → als `WeeklyReview` gecached.

### Persistenz

- **localStorage**: `journal:entries:{moduleId}`, `journal:weekly-review:{weekIso}`, `journal:settings`, `journal:module-ids`
- **IndexedDB** für Audio-Blobs
- **Backend** nur für Prompt-Generierung + Wochensynthese — keine Eintragspersistenz serverseitig

### Verknüpfung mit Übungen

**Sehr lose**. Trigger ist Level-Ende mit `sectionId = 'level-{n}'`. Im `context.concepts` wird der Aufgaben-Typ durchgereicht, plus optional ein `character`. **Konkrete Aufgaben-IDs werden nicht referenziert.** Loose-Coupling via `CustomEvent('journal:section-complete', ...)`.

### i18n

⚠️ Komponenten haben **hardcoded deutsche Strings**. Phase-1-Scope: deutsch only. Konflikt mit dem 13-sprachigen Mathe-Portal — entweder akzeptieren oder gleich i18nisieren.

### Schüler-Dashboard

- React/Vite/TypeScript-SPA, Layout: `Header` + `NicknamePrompt` + `StatsBar` + `QuickAccess` + 2/3-Grid (`ModuleProgress` + `BadgeWall` links, `ActivityHeatmap` + `WeaknessPanel` rechts) + `Milestones` + `JournalTab`.
- **Datenfluss**: kein API-Aufruf, sondern **gemeinsamer localStorage** auf gleicher Domain via Adapter-Pattern. Pro Trainer ein Adapter unter `dashboard/src/adapters/`.
- ✅ **Mathe-Portal-Adapter existiert bereits** (`mathe-portal.adapter.ts`, `id: 'mathe-portal'`, `exercisesTotal: 513`, `url: '/mathe-portal/'`).
- `JournalTab` ist auf dem Branch bereits gemounted (`dashboard/src/App.tsx:65`). Nichts zu tun, sobald Branch gemerged ist. Alternative für besseres "unter Lernfortschritt": `JournalTab` direkt **unter** `ModuleProgress` einsetzen statt am Ende.

### Mathe-Portal Voraussetzungen

- **Stack**: Vite 6 + React 18.3 + **JavaScript** (`.jsx`, kein TS) + Zustand 5 + framer-motion + d3 + katex + mathjs + Tailwind v4. Globaler State: eigener `GameContext`-Reducer.
- ⚠️ **TS/JS-Mismatch**: `shared/journal/` ist TS, Mathe-Portal ist JS. Lösung: Vite kompiliert TS on-the-fly, also direkter Import via relativen Pfad funktioniert. `vitest.config.js` ggf. erweitern.
- **Aufgaben-IDs**: Zwei Schemata gleichzeitig:
  - **Datengetrieben** (neuer): `wahr-basis-001` ✅ stabil
  - **Level-basiert** (älter): `Q1-EX1`, `D2-EX3` (nur quad-funktionen + differential)
  - Für Lerntagebuch reicht: `sectionId = topic-${topicId}`, also z.B. `topic-10-wahrscheinlichkeit`
- **Stolpersteine**:
  1. Trigger-Event — Mathe-Portal hat **keine Level pro Topic** im klassischen Sinn. Empfehlung: feuern bei `TopicView`-Unmount mit Bedingung "≥3 Aufgaben dieser Session korrekt".
  2. i18n-Konflikt (siehe oben)
  3. Branch-Status — `feat/journal-phase1-solo` ist **lokal nicht gepusht**. Vor Portierung erst stabilisieren/mergen.

### Empfehlung

- **Aufwand: 1–2 Tage**, wenn Branch stabil ist
- **Weg**: 1:1 portieren, **nicht** neu bauen — `shared/journal` ist genau dafür designt
- **Sequenz**:
  1. Branch `feat/journal-phase1-solo` mergen oder rebasen (Voraussetzung)
  2. `mathe-portal/src/components/MikroCardMount.jsx` schreiben (~70 Zeilen, Vorlage aus Buchführung)
  3. Trigger-Event in `TopicView` einbauen
  4. Smoke-Test im Dev-Server
  5. i18n-Strings entscheiden: deutsch belassen (Phase 1) oder Phase 1.5 mitnehmen
- **Heatmap-Erweiterung** (User-Wunsch): kein Eingriff am Branch nötig — `JournalSettings` hat bereits `swarmOptedIn` + `swarmAnonId` als Vorbereitung. Heatmap = neue Komponente in Phase 2, die die anonymen Eintrags-Counts pro Topic aggregiert.

---

## E. Querschnitts-Empfehlungen & Phase-2-Roadmap

### Übergreifende Befunde (alle 27 Themen)

**Was schon stark ist:**
- Lesson-Struktur einheitlich, wartbar, sprachsensibel (i18n).
- Aufgaben-Sets durchgehend hoch — vier AFB-Stufen, viele Aufgabentypen, Charakter-System (Mia/Amir/Kai), Fehleranalyse-Aufgaben, Sachkontexte oft Gen-Z-relevant (Spotify, TikTok, Crypto, Minecraft, Akku, Pharma, Klima).
- Lebensweltbezüge inhaltlich tragfähig.
- **14 Themen haben Plotter, 4 eine Station.**

**Wo es überall hakt — drei strukturelle Muster:**

1. **Visualisierungs-Defizit ist asymmetrisch verteilt:**
   - **Analysis** hat 14/14 Plotter (gut), aber sie sind monolithisch — sie zeigen die Funktion, nicht das didaktische Kernkonzept (Sekante→Tangente, Riemann-Summen, Krümmungswechsel).
   - **Stochastik** hat **3 von 4 Themen** ohne jede Visualisierung — genau dort, wo SuS am meisten Bilder brauchen.
   - **Geometrie** hat **5 von 6 Themen** ohne Visualisierung — bei einer Domäne, die epistemisch vom Bild lebt.
   - **Algebra** hat 0 von 2 (Matrizen schreit nach Markov-Diagramm).

2. **Querverbindungen sind statisch, nicht aktiv.** Das `prerequisites`-Feld benennt Vorgänger, aber der Lesson-Text macht keine aktiven Brücken. Hub-Themen (`10-funktionsklassen`, `12-abiturvorbereitung`) spielen ihre Hub-Rolle nicht aus. Querverbindungen über Domänengrenzen hinweg (Stochastik↔Algebra über Markov, Geometrie↔Trigonometrie über Strahlensatz) fehlen ganz.

3. **Vertrauensschäden durch fünf Lösungsschlüssel-Bugs in der Analysis** — das ist die niedrigschwelligste Baustelle und sollte vor allem anderen erledigt werden.

### Curriculare Hauptlücken

| Fehlt | Wo es bemerkbar wird |
|-------|---------------------|
| **Lineare Funktionen** als eigenes Topic | wird in `10-diff-einfuehrung` und `11-vektorrechnung` vorausgesetzt |
| **Asymptoten / gebrochen-rationale Funktionen** | nur 1 Aufgabe in `12-abiturvorbereitung` |
| **Stetigkeit** | Limes wird in 10 eingeführt, Stetigkeit nicht |
| **LGS / Gauss-Verfahren** als eigenes Topic | wird in `12-matrizen` ohne Vorlauf benutzt |
| **Termumformungen / binomische Formeln** | wird in `10-quad-gleichungen` vorausgesetzt |
| **Bruchgleichungen** | wäre Brücke zu Polstellen + Partialbruch |
| **Kreis** (Sektor, Bogenmaß) | Bogenmaß in `10-trigonometrie` erwähnt, nicht verankert |
| **Quotientenregel-Aufgaben** | im Lesson-Text vorhanden, keine Aufgabe |

### Stigmergie-Baustein: Lerntagebuch

Das Lerntagebuch existiert bereits als wiederverwendbares Modul auf Branch `feat/journal-phase1-solo`. **Der Branch muss zuerst gemerged werden**, dann ist die Mathe-Portal-Integration ein 1-2-Tage-Task. Das Dashboard hat bereits einen Mathe-Portal-Adapter — die Integration ist also überraschend nahtlos.

Die **Heatmap-Erweiterung** (auf User-Wunsch zusätzlich) ist eine neue Komponente in Phase 2, die anonyme Eintrags-Counts pro Topic aggregiert und visuell zurückspielt. `JournalSettings` hat dafür bereits `swarmOptedIn` + `swarmAnonId` vorbereitet.

### Phase-2-Roadmap (priorisiert)

**Sortiert nach Impact ÷ Aufwand. Erst die niedrig hängenden Früchte, dann die strukturellen Hebel.**

#### Welle 1 — Vertrauen + Tagebuch (1 Woche)

| # | Aufgabe | Wirkung |
|---|---------|---------|
| 1 | **5 Lösungsschlüssel-Bugs fixen** (`abi-basis-001`, `int-erw-001`, `ext-erw-001`, `ext-erw-004`, `kd-ea-002`) | Trust |
| 2 | **Branch `feat/journal-phase1-solo` mergen + Mathe-Portal-Mount** schreiben | Lerntagebuch live |
| 3 | **Prerequisites-Audit** (`vektorrechnung` ← `10-pythagoras`, `trigonometrie` ← `10-aehnlichkeit`, `matrizen` ← `11-bedingte-wk`) | strukturell |
| 4 | **`connections`-Feld** im Lesson-Schema einführen + Hub-Themen befüllen (`10-funktionsklassen`, `12-abiturvorbereitung`) | aktive Brücken |

#### Welle 2 — Visuelle Pflicht-Komponenten (2-3 Wochen)

Die **6 wichtigsten Visualisierungen**, die in mehreren Themen Wirkung entfalten:

| # | Komponente | Wirkt auf | Aufwand |
|---|-----------|-----------|---------|
| 1 | **`ProbabilityTree`** (zwei-/dreistufig, Pfadregel-Animation, Bayes-Inversion) | 10-WK, 11-bedingt, 11-binomial | mittel |
| 2 | **`BinomialHistogram`** (n/p-Slider, Stabdiagramm, Sigma-Schraffur, Approximation→Normal) | 11-binomial, 12-normal, 12-hypo | mittel |
| 3 | **`StrahlensatzExplorer`** (SVG, S-Scheitel, A/B/C/D-Slider, Live-Verhältnisanzeige) | 10-aehnlichkeit, +Brücke zu 10-trig | niedrig |
| 4 | **`Einheitskreis`** (rotierender Punkt, Sin/Cos-Strahlen, Aufrollen zur Welle) | 10-trig, 10-periodisch | niedrig–mittel |
| 5 | **`Koerper3D`** (Three.js, Pyramide/Kegel/Kugel, Schnittflächen) | 10-koerper, 12-analytische-geo | mittel |
| 6 | **`Vektor2D3D`** (Drag&Drop-Pfeile, Skalarprodukt → Winkel + Projektion) | 11-vektor, 12-analytische-geo | mittel |

#### Welle 3 — Didaktische Kernmomente Analysis (1-2 Wochen)

| # | Komponente | Wirkt auf |
|---|-----------|-----------|
| 1 | **`SekanteTangente`** (h-Slider 2 → 0, Sekantensteigung läuft gegen Tangente) | 10-diff-einfuehrung |
| 2 | **`RiemannSummen`** (n=4,8,16,...,∞ Rechtecke, Annäherung an exaktes Integral) | 11-integral, +Brücke zu 12-integral-v |
| 3 | **`SigmaShader`** (Glockenkurve, schraffierte 1σ/2σ/3σ-Bereiche, α/β-Fehler bei zwei Kurven) | 12-normal, 12-hypo |
| 4 | **`MarkovDiagramm`** (Knoten-Pfeil-Graph, Iterations-Slider, Konvergenz zum Fixvektor) | 12-matrizen, +Brücke zu 11-bedingt |
| 5 | **`FourFieldTable`** (echte interaktive Vierfeldertafel statt Markdown-Tabelle) | 10-WK, 11-bedingt |
| 6 | **`HäufigkeitsBaum`** (10.000-Personen-Modus für Bayes nach Gigerenzer) | 11-bedingt |

#### Welle 4 — Curriculum-Erweiterung (3-4 Wochen, größeres Stück)

Drei neue Topics:
- `10-lineare-funktionen` (MSA-Pflicht)
- `10-kreis` (Bogenmaß, Sektor)
- `11-asymptoten-rationale-funktionen` (klassisches 11er-Thema)
- (optional) `11-LGS-gauss`

**Kreuzprodukt umziehen** aus `12-analytische-geo` nach `11-vektorrechnung`.

#### Welle 5 — Heatmap & Stigmergie (1-2 Wochen)

- Anonymer Eintrags-Counter pro Topic (oder Aufgabe — feiner!) im Lerntagebuch-Backend
- Heatmap-Visualisierung in Topic-Liste und im Dashboard
- Optional: Aggregierte Tags ("Stolperstein", "Aha", "Frage") als zweite Schicht

### Was bewusst nicht in Phase 2 sollte

- **Visualisierungen für jedes Topic einzeln neu bauen** — die 6 Pflicht-Komponenten wirken auf Mehrere und sind effizienter.
- **Themen-Atlas** für `12-abiturvorbereitung` — schöne Idee, aber niedriger Impact verglichen mit den Pflicht-Visualisierungen. Auf Welle 6 verschieben.
- **i18n des Lerntagebuchs** in alle 13 Sprachen — Phase 2 deutsch belassen, später nachziehen.
- **Differenzierungs-Modi** (langsamer Modus, DAZ-Modus) — wichtig, aber nicht Teil der Visualisierungs-Welle.

### Eine Warnung

Die Stärke des Portals liegt im **inhaltlichen Tiefgang** der Aufgaben. Die Versuchung wird sein, in Welle 2-3 schnelle hübsche Visualisierungen zu bauen, die das didaktische Kernkonzept *nicht* treffen (z.B. ein Wahrscheinlichkeitsbaum, der nur dekorativ ist statt die Pfadregel ANIMIERT). Pro Komponente sollte vorab klar sein: **Welcher Aha-Moment wird hier sichtbar gemacht, der ohne die Komponente unsichtbar bleibt?** Wenn diese Frage keine eindeutige Antwort hat, lieber den Rohbau verbessern als die Vitrine.
