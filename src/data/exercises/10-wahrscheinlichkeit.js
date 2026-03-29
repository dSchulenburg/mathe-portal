export const exercises = [
  // ─── BASIS (AFB I) – 7 Aufgaben ───────────────────────────────────────────

  {
    id: 'wahr-basis-001', topicId: '10-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 2,
    data: {
      questionText: 'Ein Baumdiagramm zeigt ein zweistufiges Experiment. Im ersten Wurf liegt P(Kopf) = 0,5, im zweiten Wurf P(Kopf|Kopf) = 0,5. Welche Aussage trifft zu?',
      options: [
        { id: 'a', text: 'Pfadwahrscheinlichkeiten werden addiert', correct: false },
        { id: 'b', text: 'Pfadwahrscheinlichkeiten werden multipliziert', correct: true },
        { id: 'c', text: 'P(Kopf, Kopf) = 0,5 + 0,5 = 1,0', correct: false },
        { id: 'd', text: 'Alle Pfade haben die gleiche Wahrscheinlichkeit', correct: false },
      ],
    },
    hintKeys: ['Die Pfadregel sagt: Wahrscheinlichkeiten entlang eines Pfades werden multipliziert.'],
    solutionKey: 'Beim Ablesen eines Baumdiagramms multipliziert man die Wahrscheinlichkeiten entlang eines Pfades (Produktregel). P(Kopf, Kopf) = 0,5 · 0,5 = 0,25.',
    tags: ['baumdiagramm', 'pfadregel', 'ablesen'],
  },

  {
    id: 'wahr-basis-002', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Eine Urne enthält 3 rote und 7 blaue Kugeln. Man zieht zweimal mit Zurücklegen. Berechne P(rot, rot) als Dezimalzahl.',
      correctValue: 0.09,
      tolerance: 0.001,
    },
    hintKeys: ['P(rot) = 3/10 = 0,3. Bei Ziehen mit Zurücklegen bleibt die Wahrscheinlichkeit gleich. Multipliziere beide Pfadwahrscheinlichkeiten.'],
    solutionKey: 'P(rot) = 3/10 = 0,3. P(rot, rot) = 0,3 · 0,3 = 0,09.',
    tags: ['multiplikationsregel', 'mit-zuruecklegen', 'pfadwahrscheinlichkeit'],
  },

  {
    id: 'wahr-basis-003', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 2,
    data: {
      questionText: 'Die Wahrscheinlichkeit, dass es morgen regnet, beträgt 0,35. Wie groß ist die Gegenwahrscheinlichkeit (kein Regen)?',
      correctValue: 0.65,
      tolerance: 0.001,
    },
    hintKeys: ['Die Summe aller Gegenwahrscheinlichkeiten beträgt 1: P(A) + P(Ā) = 1.'],
    solutionKey: 'P(kein Regen) = 1 – P(Regen) = 1 – 0,35 = 0,65.',
    tags: ['gegenwahrscheinlichkeit', 'komplementaerereignis'],
  },

  {
    id: 'wahr-basis-004', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Ein fairer Würfel wird geworfen. Gewinn: +3 € bei einer 6, –1 € sonst. Berechne den Erwartungswert E(X) in Euro. Gib das Ergebnis als Dezimalzahl an (auf 3 Stellen gerundet).',
      correctValue: -0.333,
      tolerance: 0.001,
      unit: '€',
    },
    hintKeys: ['E(X) = Summe aller (Wert · Wahrscheinlichkeit). P(6) = 1/6, P(nicht 6) = 5/6.'],
    solutionKey: 'E(X) = 3 · (1/6) + (–1) · (5/6) = 3/6 – 5/6 = –2/6 = –1/3 ≈ –0,333 €.',
    tags: ['erwartungswert', 'laplace'],
    contextKey: 'gluecksspiel',
  },

  {
    id: 'wahr-basis-005', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 2,
    data: {
      questionText: 'Ein fairer Würfel hat 6 gleichwahrscheinliche Ergebnisse. Wie groß ist P(gerade Zahl)? Gib die Dezimalzahl an.',
      correctValue: 0.5,
      tolerance: 0.001,
    },
    hintKeys: ['Beim Laplace-Experiment gilt: P(Ereignis) = günstige Ergebnisse / alle Ergebnisse.'],
    solutionKey: 'Gerade Zahlen: {2, 4, 6} → 3 günstige Ergebnisse. P(gerade) = 3/6 = 0,5.',
    tags: ['laplace', 'gleichwahrscheinlich'],
  },

  {
    id: 'wahr-basis-006', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Vierfeldertafel: In einer Klasse mögen 15 Schüler Sport, 10 mögen kein Sport. Von denen, die Sport mögen, haben 9 auch ein Haustier. Insgesamt haben 13 Schüler ein Haustier. Wie viele mögen kein Sport und haben kein Haustier?',
      correctValue: 6,
      tolerance: 0.001,
    },
    hintKeys: ['Fülle die Vierfeldertafel systematisch aus: Sport & Haustier = 9. Gesamt Haustier = 13. Also: kein Sport & Haustier = 13 – 9 = 4. Kein Sport gesamt = 10. Kein Sport & kein Haustier = ?'],
    solutionKey: 'Sport & Haustier = 9; kein Sport & Haustier = 13 – 9 = 4; kein Sport gesamt = 10; kein Sport & kein Haustier = 10 – 4 = 6.',
    tags: ['vierfeldertafel', 'absolut'],
  },

  {
    id: 'wahr-basis-007', topicId: '10-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welche der folgenden Tabellen beschreibt eine gültige Wahrscheinlichkeitsverteilung für X ∈ {1, 2, 3}?',
      options: [
        { id: 'a', text: 'P(1)=0,2, P(2)=0,5, P(3)=0,3 → Summe = 1,0', correct: true },
        { id: 'b', text: 'P(1)=0,3, P(2)=0,4, P(3)=0,4 → Summe = 1,1', correct: false },
        { id: 'c', text: 'P(1)=–0,1, P(2)=0,6, P(3)=0,5 → negative Wahrscheinlichkeit', correct: false },
        { id: 'd', text: 'P(1)=0,5, P(2)=0,5, P(3)=0,5 → Summe = 1,5', correct: false },
      ],
    },
    hintKeys: ['Gültige Wahrscheinlichkeitsverteilung: alle Werte ≥ 0 und die Summe aller P = 1.'],
    solutionKey: 'Option a: 0,2 + 0,5 + 0,3 = 1,0 ✓. Alle anderen Summen sind ≠ 1 oder enthalten negative Werte.',
    tags: ['wahrscheinlichkeitsverteilung', 'summe-eins'],
  },

  // ─── STANDARD (AFB II) – 7 Aufgaben ───────────────────────────────────────

  {
    id: 'wahr-standard-001', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'Aus einem Stapel mit 5 roten und 3 blauen Karten zieht man zweimal ohne Zurücklegen. Wie groß ist P(beide rot)? Gib die Dezimalzahl an.',
      correctValue: 0.357,
      tolerance: 0.001,
    },
    hintKeys: ['P(1. rot) = 5/8. Nach dem Ziehen einer roten Karte: P(2. rot | 1. rot) = 4/7. Multipliziere beide.'],
    solutionKey: 'P(beide rot) = (5/8) · (4/7) = 20/56 = 5/14 ≈ 0,357.',
    tags: ['ohne-zuruecklegen', 'mehrstufig', 'bedingte-wahrscheinlichkeit'],
  },

  {
    id: 'wahr-standard-002', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'Aus Umfragedaten: P(Rad fährt) = 0,4; P(Rad fährt und kommt pünktlich) = 0,32. Berechne P(pünktlich | Rad fährt).',
      correctValue: 0.8,
      tolerance: 0.001,
    },
    hintKeys: ['Bedingte Wahrscheinlichkeit: P(B|A) = P(A ∩ B) / P(A).'],
    solutionKey: 'P(pünktlich | Rad fährt) = P(Rad ∩ pünktlich) / P(Rad) = 0,32 / 0,4 = 0,8.',
    tags: ['bedingte-wahrscheinlichkeit', 'formel'],
  },

  {
    id: 'wahr-standard-003', topicId: '10-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 7,
    data: {
      questionText: 'Vierfeldertafel: P(A) = 0,5; P(B) = 0,4; P(A ∩ B) = 0,2. Sind A und B stochastisch unabhängig?',
      options: [
        { id: 'a', text: 'Ja, denn P(A) · P(B) = 0,5 · 0,4 = 0,2 = P(A ∩ B)', correct: true },
        { id: 'b', text: 'Nein, denn P(A ∩ B) müsste 0 sein', correct: false },
        { id: 'c', text: 'Nein, denn P(A) ≠ P(B)', correct: false },
        { id: 'd', text: 'Ja, denn P(A) + P(B) > 1', correct: false },
      ],
    },
    hintKeys: ['Unabhängigkeit: A und B sind unabhängig genau dann, wenn P(A ∩ B) = P(A) · P(B).'],
    solutionKey: 'P(A) · P(B) = 0,5 · 0,4 = 0,2 = P(A ∩ B). Die Bedingung ist erfüllt → A und B sind stochastisch unabhängig.',
    tags: ['stochastische-unabhaengigkeit', 'vierfeldertafel'],
  },

  {
    id: 'wahr-standard-004', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'Beim Glücksrad: Mit P = 1/4 gewinnt man 8 €, mit P = 3/4 verliert man 2 €. Berechne den Erwartungswert E(X) in Euro.',
      correctValue: 0.5,
      tolerance: 0.001,
      unit: '€',
    },
    hintKeys: ['E(X) = 8 · P(Gewinn) + (–2) · P(Verlust) = 8 · (1/4) + (–2) · (3/4).'],
    solutionKey: 'E(X) = 8 · (1/4) + (–2) · (3/4) = 2 – 1,5 = 0,5 €. Der Erwartungswert beträgt 0,50 €.',
    tags: ['erwartungswert', 'spiel', 'fairness'],
  },

  {
    id: 'wahr-standard-005', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 7,
    data: {
      questionText: 'Drei Münzen werden geworfen. Berechne P(mindestens eine Münze zeigt Kopf) als Dezimalzahl.',
      correctValue: 0.875,
      tolerance: 0.001,
    },
    hintKeys: ['Gegenwahrscheinlichkeit nutzen: P(mindestens 1 Kopf) = 1 – P(kein Kopf). P(kein Kopf) = (1/2)³.'],
    solutionKey: 'P(kein Kopf) = (1/2)³ = 1/8 = 0,125. P(mindestens 1 Kopf) = 1 – 0,125 = 0,875.',
    tags: ['gegenwahrscheinlichkeit', 'mindestens-einmal', 'mehrstufig'],
  },

  {
    id: 'wahr-standard-006', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 7,
    data: {
      questionText: 'Ein Würfel wird dreimal geworfen. Wie groß ist P(genau beim 3. Wurf die erste 6)? Gib die Dezimalzahl an.',
      correctValue: 0.116,
      tolerance: 0.001,
    },
    hintKeys: ['Der gesuchte Pfad: keine 6, keine 6, dann 6. P = (5/6) · (5/6) · (1/6).'],
    solutionKey: 'P = (5/6)² · (1/6) = 25/216 ≈ 0,1157 ≈ 0,116.',
    tags: ['pfadregel', 'drei-stufig', 'multiplikationsregel'],
  },

  {
    id: 'wahr-standard-007', topicId: '10-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'In einer Fabrik produzieren Maschine A (60 % der Teile, 2 % Defekte) und Maschine B (40 % der Teile, 5 % Defekte). Ein Teil wird zufällig entnommen. Welches Baumdiagramm beschreibt den Anteil defekter Teile von Maschine A korrekt?',
      options: [
        { id: 'a', text: 'P(A) = 0,6, P(defekt|A) = 0,02 → P(A ∩ defekt) = 0,012', correct: true },
        { id: 'b', text: 'P(A) = 0,6, P(defekt|A) = 0,05 → P(A ∩ defekt) = 0,030', correct: false },
        { id: 'c', text: 'P(A) = 0,4, P(defekt|A) = 0,02 → P(A ∩ defekt) = 0,008', correct: false },
        { id: 'd', text: 'P(defekt|A) = 0,6 · 0,02 = 0,012 ist die bedingte Wahrscheinlichkeit', correct: false },
      ],
    },
    hintKeys: ['Im Baumdiagramm: erste Stufe = Maschine (A oder B), zweite Stufe = Qualität (defekt / nicht defekt). P(A ∩ defekt) = P(A) · P(defekt|A).'],
    solutionKey: 'P(A) = 0,6; P(defekt|A) = 0,02. P(A ∩ defekt) = 0,6 · 0,02 = 0,012. Option a ist korrekt.',
    tags: ['baumdiagramm', 'qualitaetskontrolle', 'bedingte-wahrscheinlichkeit'],
  },

  // ─── ERWEITERT (AFB III) – 6 Aufgaben ─────────────────────────────────────

  {
    id: 'wahr-erweitert-001', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 10,
    data: {
      questionText: 'Medizinischer Test auf Erkrankung K: Prävalenz P(K) = 0,01. Sensitivität P(positiv|K) = 0,95. Spezifität P(negativ|¬K) = 0,90. Berechne den positiven Vorhersagewert P(K|positiv) nach dem Satz von Bayes. Gib die Dezimalzahl an.',
      correctValue: 0.087,
      tolerance: 0.002,
    },
    hintKeys: [
      'Satz von Bayes: P(K|pos) = P(pos|K)·P(K) / P(pos).',
      'P(pos) = P(pos|K)·P(K) + P(pos|¬K)·P(¬K). P(pos|¬K) = 1 – Spezifität = 0,10.',
    ],
    solutionKey: 'P(pos|K)·P(K) = 0,95·0,01 = 0,0095. P(pos|¬K)·P(¬K) = 0,10·0,99 = 0,099. P(pos) = 0,0095 + 0,099 = 0,1085. P(K|pos) = 0,0095/0,1085 ≈ 0,0876 ≈ 0,087.',
    tags: ['bayes', 'medizin', 'sachkontext', 'vorhersagewert'],
    contextKey: 'medizinischer-test',
  },

  {
    id: 'wahr-erweitert-002', topicId: '10-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativitaet'], points: 15, timeEstimate: 8,
    data: {
      questionText: 'Lotterie: Einsatz 1 €. Gewinn 10 € mit P = 0,05, Gewinn 2 € mit P = 0,2, sonst kein Gewinn. Ist das Spiel fair?',
      options: [
        { id: 'a', text: 'Ja, E(X) = 0 €, das Spiel ist exakt fair', correct: false },
        { id: 'b', text: 'Nein, E(Nettogewinn) = –0,1 €, Spieler verliert im Durchschnitt', correct: true },
        { id: 'c', text: 'Ja, weil Gewinne wahrscheinlicher als Verluste sind', correct: false },
        { id: 'd', text: 'Nein, E(Nettogewinn) = +0,1 €, Spieler gewinnt im Durchschnitt', correct: false },
      ],
    },
    hintKeys: [
      'Berechne E(Auszahlung) = 10·0,05 + 2·0,2 + 0·0,75.',
      'Nettogewinn = Auszahlung – Einsatz. Ein faires Spiel hat E(Nettogewinn) = 0.',
    ],
    solutionKey: 'E(Auszahlung) = 10·0,05 + 2·0,2 + 0·0,75 = 0,5 + 0,4 = 0,9 €. E(Nettogewinn) = 0,9 – 1 = –0,1 €. Das Spiel ist nicht fair: Im Durchschnitt verliert man 10 Cent pro Runde.',
    tags: ['erwartungswert', 'fairness', 'lotterie'],
    contextKey: 'gluecksspiel-analyse',
  },

  {
    id: 'wahr-erweitert-003', topicId: '10-wahrscheinlichkeit', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 8,
    data: {
      questionText: 'Schüler Leon berechnet P(genau 2 Köpfe bei 3 Münzwürfen). Finde den Fehler in seiner Lösung.',
      steps: [
        { content: 'Schritt 1: P(Kopf) = 0,5', hasError: false },
        { content: 'Schritt 2: Es gibt 3 mögliche Reihenfolgen für 2 Köpfe: KKZ, KZK, ZKK', hasError: false },
        { content: 'Schritt 3: Pfadwahrscheinlichkeit für KKZ: 0,5 · 0,5 · 0,5 = 0,125', hasError: false },
        { content: 'Schritt 4: P(genau 2 Köpfe) = 0,125 + 0,5 = 0,625 (Pfadwert + P(Kopf))', hasError: true, errorExplanation: 'Leon addiert fälschlicherweise P(Kopf)=0,5 zum Pfadwert. Richtig: Man multipliziert die Pfadwahrscheinlichkeit mit der Anzahl der günstigen Pfade. P = 3 · 0,125 = 0,375.' },
      ],
    },
    hintKeys: ['Gleichwahrscheinliche Pfade: Ihre Gesamtwahrscheinlichkeit = Anzahl · Pfadwahrscheinlichkeit.'],
    solutionKey: 'Fehler in Schritt 4: Leon addiert P(Kopf) = 0,5 statt die 3 Pfade zu summieren. Richtig: P(genau 2 Köpfe) = 3 · 0,125 = 0,375.',
    tags: ['fehleranalyse', 'pfadregel', 'mehrstufig'],
  },

  {
    id: 'wahr-erweitert-004', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 9,
    data: {
      questionText: 'Versicherung: 1000 Kunden. P(Unfall) = 0,02. Kosten pro Unfall: 5000 €. Prämie pro Kunde: 120 €. Berechne den erwarteten Gewinn der Versicherung in € pro Jahr.',
      correctValue: 20000,
      tolerance: 1,
      unit: '€',
    },
    hintKeys: [
      'Erwartete Schadenskosten = 1000 · P(Unfall) · 5000 €.',
      'Gesamteinnahmen = 1000 · 120 €. Gewinn = Einnahmen – Kosten.',
    ],
    solutionKey: 'Erwartete Unfälle = 1000 · 0,02 = 20. Schadenskosten = 20 · 5000 = 100 000 €. Einnahmen = 1000 · 120 = 120 000 €. Gewinn = 120 000 – 100 000 = 20 000 €.',
    tags: ['erwartungswert', 'versicherung', 'sachkontext'],
    contextKey: 'versicherungskalkulation',
  },

  {
    id: 'wahr-erweitert-005', topicId: '10-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kritisches-denken'], points: 15, timeEstimate: 8,
    data: {
      questionText: 'Gegeben: P(A) = 0,6, P(B) = 0,5, P(A ∩ B) = 0,25. Sind A und B stochastisch unabhängig? Begründe.',
      options: [
        { id: 'a', text: 'Nein, denn P(A) · P(B) = 0,30 ≠ 0,25 = P(A ∩ B)', correct: true },
        { id: 'b', text: 'Ja, denn P(A ∩ B) > 0', correct: false },
        { id: 'c', text: 'Ja, denn P(A|B) = P(A ∩ B) / P(B) = 0,5', correct: false },
        { id: 'd', text: 'Nein, denn P(A) + P(B) ≠ 1', correct: false },
      ],
    },
    hintKeys: ['Unabhängigkeitsbedingung: A ⊥ B ⟺ P(A ∩ B) = P(A) · P(B). Berechne P(A) · P(B) und vergleiche mit P(A ∩ B).'],
    solutionKey: 'P(A) · P(B) = 0,6 · 0,5 = 0,30. P(A ∩ B) = 0,25 ≠ 0,30. Da die Bedingung nicht erfüllt ist, sind A und B stochastisch abhängig. Option a ist korrekt.',
    tags: ['stochastische-unabhaengigkeit', 'nachweis', 'begruendung'],
  },

  {
    id: 'wahr-erweitert-006', topicId: '10-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativitaet'], points: 15, timeEstimate: 9,
    data: {
      questionText: 'Urne mit 4 roten (R) und 2 blauen (B) Kugeln. Vergleich: 2 Züge mit Zurücklegen (mZ) vs. ohne Zurücklegen (oZ). Welche Aussage über P(beide blau) ist korrekt?',
      options: [
        { id: 'a', text: 'P(BB, mZ) = (2/6)² = 1/9 ≈ 0,111; P(BB, oZ) = (2/6)·(1/5) = 1/15 ≈ 0,067 → oZ hat kleinere Wahrscheinlichkeit', correct: true },
        { id: 'b', text: 'P(BB, mZ) = P(BB, oZ), da es sich um dieselbe Urne handelt', correct: false },
        { id: 'c', text: 'P(BB, oZ) > P(BB, mZ), weil ohne Zurücklegen mehr Möglichkeiten bestehen', correct: false },
        { id: 'd', text: 'P(BB, mZ) = (2/6)·(2/5) = 2/15, weil sich die Urne verändert', correct: false },
      ],
    },
    hintKeys: [
      'Mit Zurücklegen: P(B) bleibt konstant = 2/6 bei jedem Zug.',
      'Ohne Zurücklegen: nach dem 1. blauen Zug nur noch 1 blaue von 5 Kugeln.',
    ],
    solutionKey: 'mZ: P(BB) = (2/6)·(2/6) = 4/36 = 1/9 ≈ 0,111. oZ: P(BB) = (2/6)·(1/5) = 2/30 = 1/15 ≈ 0,067. Ohne Zurücklegen ist die Wahrscheinlichkeit kleiner, weil eine blaue Kugel fehlt.',
    tags: ['urnenmodell', 'mit-zuruecklegen', 'ohne-zuruecklegen', 'vergleich'],
  },

  // ─── PREMIUM UPGRADE: 8 neue Übungen ────────────────────────────

  {
    id: 'wk-basis-008', topicId: '10-wahrscheinlichkeit', type: 'drag-match', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Ordne jedem Ereignis die richtige Wahrscheinlichkeit zu.',
      pairs: [
        { id: 'a', left: 'Würfel zeigt eine 6', right: '$\\frac{1}{6}$' },
        { id: 'b', left: 'Münze zeigt Kopf', right: '$\\frac{1}{2}$' },
        { id: 'c', left: 'Sicheres Ereignis', right: '$1$' },
        { id: 'd', left: 'Unmögliches Ereignis', right: '$0$' },
      ],
    },
    hintKeys: ['Ein sicheres Ereignis tritt immer ein (P=1), ein unmögliches nie (P=0).'],
    solutionKey: 'P(6) = 1/6, P(Kopf) = 1/2, P(sicher) = 1, P(unmöglich) = 0.',
    tags: ['drag-match', 'grundbegriffe'],
  },
  {
    id: 'wk-standard-008', topicId: '10-wahrscheinlichkeit', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'], points: 12, timeEstimate: 6,
    contextKey: 'Urne mit farbigen Kugeln',
    data: {
      questionText: 'Eine Urne enthält 5 rote und 3 blaue Kugeln. Du ziehst 2 Kugeln ohne Zurücklegen. Wie groß ist P(beide rot)?',
      steps: [
        { instruction: 'P(1. Kugel rot) = $\\frac{5}{8}$ = ? (Dezimalzahl, 3 Stellen)', type: 'numeric-input', expected: 0.625, tolerance: 0.001, showAnswer: 'P(1. rot) = 5/8 = 0,625' },
        { instruction: 'Nach Ziehen: 4 rote, 3 blaue übrig. P(2. rot | 1. rot) = $\\frac{4}{7}$ ≈ ?', type: 'numeric-input', expected: 0.571, tolerance: 0.002, showAnswer: 'P(2. rot | 1. rot) = 4/7 ≈ 0,571' },
        { instruction: 'P(beide rot) = $\\frac{5}{8} \\cdot \\frac{4}{7}$ ≈ ?', type: 'numeric-input', expected: 0.357, tolerance: 0.005, showAnswer: 'P(beide rot) = 20/56 ≈ 0,357' },
      ],
    },
    hintKeys: ['Ohne Zurücklegen: Nach dem ersten Ziehen ändert sich die Anzahl.', 'Pfadregel: P(A und B) = P(A) · P(B|A).'],
    solutionKey: 'P(beide rot) = 5/8 · 4/7 = 20/56 = 5/14 ≈ 0,357.',
    tags: ['step-solver', 'urne', 'pfadregel'],
  },
  {
    id: 'wk-standard-009', topicId: '10-wahrscheinlichkeit', type: 'error-analysis', diffLevel: 'standard',
    competencies: ['kritisches-denken'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Finde den Fehler. Urne: 3 rote, 2 blaue. Ziehen mit Zurücklegen. P(1× rot, 1× blau)?',
      steps: [
        { content: 'P(rot, blau) = 3/5 · 2/5 = 6/25', hasError: false },
        { content: 'P(blau, rot) = 2/5 · 3/5 = 6/25', hasError: false },
        { content: 'P(1× rot, 1× blau) = 6/25', hasError: true, errorExplanation: 'Es gibt zwei Pfade (rot-blau UND blau-rot). Richtig: P = 6/25 + 6/25 = 12/25.' },
      ],
    },
    hintKeys: ['Bei "1× rot, 1× blau" ist die Reihenfolge egal — zähle alle Pfade!'],
    solutionKey: 'P(1× rot, 1× blau) = P(rot,blau) + P(blau,rot) = 12/25 = 0,48.',
    tags: ['fehleranalyse', 'baumdiagramm'],
  },
  {
    id: 'wk-erweitert-008', topicId: '10-wahrscheinlichkeit', type: 'numeric-input', diffLevel: 'erweitert',
    competencies: ['kritisches-denken'], points: 15, timeEstimate: 6,
    contextKey: 'Lotto 6 aus 49',
    data: {
      questionText: 'Wie viele Möglichkeiten gibt es beim Lotto "6 aus 49"? Berechne $\\binom{49}{6}$.',
      correctValue: 13983816, tolerance: 1,
    },
    hintKeys: ['$\\binom{49}{6} = \\frac{49!}{6! \\cdot 43!} = \\frac{49 \\cdot 48 \\cdot 47 \\cdot 46 \\cdot 45 \\cdot 44}{720}$'],
    solutionKey: '$\\binom{49}{6} = 13.983.816$.',
    tags: ['lotto', 'binomialkoeffizient'],
  },
  {
    id: 'wk-erweitert-009', topicId: '10-wahrscheinlichkeit', type: 'drag-match', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 5,
    data: {
      questionText: 'Ordne jeden Sachkontext dem passenden Wahrscheinlichkeitsmodell zu.',
      pairs: [
        { id: 'a', left: 'Qualitätskontrolle: 10 Teile prüfen', right: 'Binomialverteilung' },
        { id: 'b', left: 'Kugeln ziehen ohne Zurücklegen', right: 'Hypergeometrisch' },
        { id: 'c', left: 'Wartezeit bis zum ersten Treffer', right: 'Geometrische Vert.' },
        { id: 'd', left: 'Münze werfen: Kopf oder Zahl', right: 'Bernoulli-Experiment' },
      ],
    },
    hintKeys: ['Binomial = n unabhängige Versuche, gleiche Trefferwahrscheinlichkeit.'],
    solutionKey: 'Binomial: feste Anzahl, unabhängig. Hypergeometrisch: ohne Zurücklegen. Geometrisch: Warten auf Treffer. Bernoulli: ein Versuch.',
    tags: ['drag-match', 'verteilungen'],
  },
  {
    id: 'wk-ea-001', topicId: '10-wahrscheinlichkeit', type: 'multiple-choice', diffLevel: 'ea',
    competencies: ['kritisches-denken'], points: 20, timeEstimate: 5,
    data: {
      questionText: 'Spielerfehlschluss: Du wirfst 10× Kopf hintereinander. Ist beim 11. Wurf Zahl wahrscheinlicher?',
      options: [
        { id: 'a', text: 'Ja, nach so vielen Köpfen muss Zahl kommen.', correct: false },
        { id: 'b', text: 'Nein, P(Zahl) = 50 %, weil Würfe unabhängig sind.', correct: true },
        { id: 'c', text: 'Ja, die Münze ist wahrscheinlich unfair.', correct: false },
      ],
    },
    hintKeys: ['Unabhängigkeit: vorherige Ergebnisse beeinflussen die nächsten nicht.'],
    solutionKey: 'Die Münze hat kein Gedächtnis. P(Zahl) = 0,5 bei jedem Wurf. Der "Ausgleich" ist ein Trugschluss (Gambler\'s Fallacy).',
    tags: ['spielerfehlschluss', 'ea'],
  },
  {
    id: 'wk-ea-002', topicId: '10-wahrscheinlichkeit', type: 'step-solver', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 7,
    contextKey: 'Glücksrad — Erwartungswert',
    data: {
      questionText: 'Glücksrad: 50% Niete (0 €), 30% Klein (5 €), 20% Hauptgewinn (20 €). Berechne E(X).',
      steps: [
        { instruction: 'Beitrag Niete: $0{,}5 \\cdot 0$ = ?', type: 'numeric-input', expected: 0, tolerance: 0.01, showAnswer: '0,5 · 0 = 0 €' },
        { instruction: 'Beitrag Klein: $0{,}3 \\cdot 5$ = ?', type: 'numeric-input', expected: 1.5, tolerance: 0.01, showAnswer: '0,3 · 5 = 1,50 €' },
        { instruction: 'Beitrag Hauptgewinn: $0{,}2 \\cdot 20$ = ?', type: 'numeric-input', expected: 4, tolerance: 0.01, showAnswer: '0,2 · 20 = 4 €. E(X) = 0 + 1,50 + 4 = 5,50 €' },
      ],
    },
    hintKeys: ['E(X) = P₁·X₁ + P₂·X₂ + P₃·X₃'],
    solutionKey: 'E(X) = 0,5·0 + 0,3·5 + 0,2·20 = 5,50 €.',
    tags: ['step-solver', 'erwartungswert', 'ea'],
  },
  {
    id: 'wk-erweitert-010', topicId: '10-wahrscheinlichkeit', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kreativitaet', 'kritisches-denken'], points: 15, timeEstimate: 7,
    contextKey: 'Geburtstagsproblem',
    data: {
      questionText: 'Klasse mit 23 Personen: P(mindestens 2 haben gleichen Geburtstag)?',
      steps: [
        { instruction: 'Gegenereignis: P(alle verschieden). Person 1: 365/365, Person 2: 364/365, Person 3: ?', type: 'multiple-choice',
          options: [{ id: 'a', text: '$\\frac{363}{365}$' }, { id: 'b', text: '$\\frac{364}{365}$' }, { id: 'c', text: '$\\frac{362}{365}$' }],
          correctId: 'a', showAnswer: 'Person 3 hat noch 363 freie Tage.' },
        { instruction: 'P(alle verschieden) ≈ 0,493. P(mind. 2 gleich) = 1 − 0,493 = ?', type: 'numeric-input', expected: 0.507, tolerance: 0.005, showAnswer: 'P ≈ 50,7% — überraschend hoch!' },
      ],
    },
    hintKeys: ['P(mind. 1 gleich) = 1 − P(alle verschieden).'],
    solutionKey: 'P(mind. 2 gleich) ≈ 50,7%. Schon ab 23 Personen ist es wahrscheinlicher als nicht!',
    tags: ['step-solver', 'geburtstagsproblem'],
  },
];
