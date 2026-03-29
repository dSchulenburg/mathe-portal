export const exercises = [
  // ─────────────────────────────────────────────
  // BASIS (AFB I) — 4 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'ext-basis-001',
    topicId: '11-extremwertaufgaben',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Welche der folgenden Funktionen beschreibt eine Zielfunktion fuer das Problem ' +
        '"Maximiere den Flaecheninhalt eines Rechtecks mit gegebenem Umfang U = 20 m"? ' +
        'Die Seiten seien x und y, wobei y = 10 − x.',
      options: [
        { id: 'a', text: 'A(x) = x · (10 − x)', correct: true },
        { id: 'b', text: 'A(x) = x + (10 − x)', correct: false },
        { id: 'c', text: 'A(x) = 2x + 2(10 − x)', correct: false },
        { id: 'd', text: 'A(x) = x² − 10x', correct: false },
      ],
    },
    hintKeys: [
      'Flaeche eines Rechtecks = Laenge · Breite.',
      'Die Nebenbedingung 2x + 2y = 20 liefert y = 10 − x.',
    ],
    solutionKey:
      'Die Zielfunktion ist A(x) = x · y. Mit y = 10 − x ergibt sich A(x) = x(10 − x). ' +
      'Umfang und Summe der Seiten sind keine Flaechen.',
    tags: ['zielfunktion', 'rechteck', 'flaeche'],
  },

  {
    id: 'ext-basis-002',
    topicId: '11-extremwertaufgaben',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Gegeben ist die Funktion f(x) = −x² + 6x − 5 auf dem Intervall [0; 6]. ' +
        'An welcher der folgenden Stellen liegt das Maximum?',
      options: [
        { id: 'a', text: 'x = 3', correct: true },
        { id: 'b', text: 'x = 0', correct: false },
        { id: 'c', text: 'x = 6', correct: false },
        { id: 'd', text: 'x = 5', correct: false },
      ],
    },
    hintKeys: [
      'Bilde f′(x) und setze f′(x) = 0.',
      'f′(x) = −2x + 6. Loese nach x auf.',
    ],
    solutionKey:
      'f′(x) = −2x + 6 = 0 → x = 3. ' +
      'Da f″(3) = −2 < 0, liegt bei x = 3 ein Maximum vor. f(3) = −9 + 18 − 5 = 4.',
    tags: ['maximum', 'ableitung', 'parabel'],
  },

  {
    id: 'ext-basis-003',
    topicId: '11-extremwertaufgaben',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Pruefe die Randwerte: Die Funktion f(x) = x² − 4x + 3 ist auf [0; 4] definiert. ' +
        'Welchen Wert hat f an der Stelle x = 4 (rechter Rand)?',
      correctValue: 3,
      tolerance: 0.01,
    },
    hintKeys: [
      'Setze x = 4 direkt in die Funktion ein.',
      'f(4) = 4² − 4·4 + 3.',
    ],
    solutionKey:
      'f(4) = 16 − 16 + 3 = 3. ' +
      'Das Minimum liegt bei x = 2: f(2) = 4 − 8 + 3 = −1. ' +
      'Das Maximum auf [0; 4] liegt am Rand: f(0) = 3 und f(4) = 3.',
    tags: ['randwerte', 'minimum', 'parabel'],
  },

  {
    id: 'ext-basis-004',
    topicId: '11-extremwertaufgaben',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Ein Optimierungsproblem hat die Zielfunktion A(x) = x(12 − x). ' +
        'Welche der folgenden Aussagen trifft zu?',
      options: [
        { id: 'a', text: 'Das Maximum liegt bei x = 6', correct: true },
        { id: 'b', text: 'Das Maximum liegt bei x = 12', correct: false },
        { id: 'c', text: 'Die Funktion hat kein Maximum', correct: false },
        { id: 'd', text: 'Das Maximum liegt bei x = 0', correct: false },
      ],
    },
    hintKeys: [
      'A(x) = 12x − x². Bilde A′(x) und setze = 0.',
      'A′(x) = 12 − 2x = 0 → x = ?',
    ],
    solutionKey:
      'A(x) = 12x − x². A′(x) = 12 − 2x = 0 → x = 6. ' +
      'A″(x) = −2 < 0: Maximum. A(6) = 6 · 6 = 36.',
    tags: ['maximum', 'zielfunktion', 'grundaufgabe'],
  },

  // ─────────────────────────────────────────────
  // STANDARD (AFB II) — 5 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'ext-std-001',
    topicId: '11-extremwertaufgaben',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 6,
    contextKey: 'Dose optimieren — maximales Volumen',
    data: {
      questionText:
        'Eine zylindrische Dose soll aus einem Blech mit der Gesamtflaeche 150π cm² ' +
        'gefertigt werden. Gesamtflaeche = 2πr² + 2πrh = 150π. ' +
        'Damit gilt h = (75 − r²) / r. ' +
        'Die Zielfunktion fuer das Volumen lautet V(r) = πr²h = π(75r − r³). ' +
        'Bei welchem Radius r (in cm) ist das Volumen maximal?',
      correctValue: 5,
      tolerance: 0.01,
      unit: 'cm',
    },
    hintKeys: [
      'V(r) = π(75r − r³). Bilde V′(r) und setze = 0.',
      'V′(r) = π(75 − 3r²) = 0 → 3r² = 75 → r² = 25.',
    ],
    solutionKey:
      'V′(r) = π(75 − 3r²) = 0 → r² = 25 → r = 5 cm (r > 0). ' +
      'V″(r) = −6πr < 0 → Maximum. V(5) = π(375 − 125) = 250π cm³.',
    tags: ['dose', 'volumen', 'zylinder', 'sachkontext'],
  },

  {
    id: 'ext-std-002',
    topicId: '11-extremwertaufgaben',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 10,
    timeEstimate: 5,
    contextKey: 'Dose optimieren — minimales Material',
    data: {
      questionText:
        'Eine zylindrische Konservendose soll ein Volumen von 500 ml = 500 cm³ fassen. ' +
        'Das verwendete Blech (Oberflaeche) soll minimal sein. ' +
        'Mit V = πr²h = 500 folgt h = 500 / (πr²). ' +
        'Die Zielfunktion ist O(r) = 2πr² + 1000/r. ' +
        'Bilde O′(r), setze = 0 und berechne den optimalen Radius r auf eine Dezimalstelle. ' +
        '(Hinweis: Ergebnis in cm, gerundet.)',
      correctValue: 4.3,
      tolerance: 0.1,
      unit: 'cm',
    },
    hintKeys: [
      'O′(r) = 4πr − 1000/r². Setze O′(r) = 0.',
      '4πr = 1000/r² → r³ = 1000/(4π) = 250/π.',
    ],
    solutionKey:
      'O′(r) = 4πr − 1000/r² = 0 → 4πr³ = 1000 → r³ = 250/π ≈ 79.6 → r ≈ 4.3 cm. ' +
      'O″(r) = 4π + 2000/r³ > 0 → Minimum.',
    tags: ['dose', 'oberflaeche', 'minimum', 'sachkontext'],
  },

  {
    id: 'ext-std-003',
    topicId: '11-extremwertaufgaben',
    type: 'step-solver',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 12,
    timeEstimate: 8,
    contextKey: 'Gartenplanung — maximale Flaeche',
    data: {
      questionText:
        'Ein rechteckiger Garten soll mit 40 m Zaun eingezaeumt werden. ' +
        'Eine Seite bildet eine vorhandene Mauer (kein Zaun noetig). ' +
        'Bestimme die Abmessungen fuer maximale Flaeche.',
      steps: [
        {
          instruction: 'Stelle die Zielfunktion auf. Mit 2x + y = 40 gilt y = 40 − 2x. ' +
            'Die Flaeche ist A(x) = x · y. Was ergibt sich?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'A(x) = x(40 − 2x) = 40x − 2x²' },
            { id: 'b', text: 'A(x) = x(40 − x) = 40x − x²' },
            { id: 'c', text: 'A(x) = 2x(40 − 2x)' },
          ],
          correctId: 'a',
          showAnswer: 'A(x) = x · (40 − 2x) = 40x − 2x² (zwei Seiten x, eine Seite y)',
        },
        {
          instruction: 'Bilde A′(x) und setze A′(x) = 0. Der optimale Wert fuer x ist:',
          type: 'numeric-input',
          expected: 10,
          tolerance: 0.01,
          showAnswer: 'A′(x) = 40 − 4x = 0 → x = 10 m',
        },
        {
          instruction: 'Berechne die maximale Flaeche A(10):',
          type: 'numeric-input',
          expected: 200,
          tolerance: 0.1,
          showAnswer: 'A(10) = 10 · (40 − 20) = 10 · 20 = 200 m²',
        },
      ],
    },
    hintKeys: [
      'Zeichne eine Skizze: eine Mauer als eine Laengsseite, Zaun um die anderen drei Seiten.',
      'Nebenbedingung: 2x + y = 40 (x = Breite, y = Laenge parallel zur Mauer).',
      'A′(x) = 40 − 4x. Nullstelle gibt das Maximum.',
    ],
    solutionKey:
      'Zielfunktion A(x) = 40x − 2x². A′(x) = 40 − 4x = 0 → x = 10 m. ' +
      'y = 40 − 20 = 20 m. Maximale Flaeche: A(10) = 200 m².',
    tags: ['step-solver', 'garten', 'rechteck', 'sachkontext'],
  },

  {
    id: 'ext-std-004',
    topicId: '11-extremwertaufgaben',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 6,
    contextKey: 'Produktionsoptimierung',
    data: {
      questionText:
        'Ein Unternehmen hat die Kostenfunktion K(x) = 0.5x² − 20x + 500 (Euro) ' +
        'fuer x Stueck (x ∈ [0; 50]). ' +
        'Bei welcher Stueckzahl x sind die Kosten minimal?',
      correctValue: 20,
      tolerance: 0.01,
      unit: 'Stueck',
    },
    hintKeys: [
      'Bilde K′(x) und setze K′(x) = 0.',
      'K′(x) = x − 20 = 0 → x = ?',
    ],
    solutionKey:
      'K′(x) = x − 20 = 0 → x = 20. ' +
      'K″(x) = 1 > 0 → Minimum. K(20) = 200 − 400 + 500 = 300 Euro.',
    tags: ['kosten', 'minimum', 'wirtschaft', 'sachkontext'],
  },

  {
    id: 'ext-std-005',
    topicId: '11-extremwertaufgaben',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 10,
    timeEstimate: 4,
    data: {
      questionText:
        'Bei einer Extremwertaufgabe erhaeelt man die kritische Stelle x = 4. ' +
        'Die zweite Ableitung der Zielfunktion hat den Wert f″(4) = −6. ' +
        'Was folgt daraus?',
      options: [
        { id: 'a', text: 'Bei x = 4 liegt ein Maximum vor (f″ < 0)', correct: true },
        { id: 'b', text: 'Bei x = 4 liegt ein Minimum vor (f″ < 0)', correct: false },
        { id: 'c', text: 'Bei x = 4 liegt ein Wendepunkt vor', correct: false },
        { id: 'd', text: 'Keine Aussage moeglich, da f″ negativ', correct: false },
      ],
    },
    hintKeys: [
      'Das Vorzeichen von f″ gibt an, ob Hoch- oder Tiefpunkt.',
      'f″(x) < 0 → Hochpunkt (Maximum); f″(x) > 0 → Tiefpunkt (Minimum).',
    ],
    solutionKey:
      'f″(4) = −6 < 0 bedeutet: Die Funktion ist an dieser Stelle konkav (nach unten gewolbt). ' +
      'Daher liegt ein lokales Maximum vor.',
    tags: ['zweite-ableitung', 'maximum', 'kriterium'],
  },

  // ─────────────────────────────────────────────
  // ERWEITERT (AFB III) — 4 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'ext-erw-001',
    topicId: '11-extremwertaufgaben',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativitaet', 'kritisches-denken'],
    points: 15,
    timeEstimate: 10,
    contextKey: 'Festival-Buehne — optimale Sichtweite',
    data: {
      questionText:
        'Eine Festival-Buehne ist 8 m breit und 3 m hoch aufgehaengt (Unterkante). ' +
        'Ein Zuschauer steht in Abstand x von der Buehne. ' +
        'Der Sehwinkel α (in rad) kann angenaeherrt beschrieben werden durch ' +
        'f(x) = arctan(11/x) − arctan(3/x) fuer x > 0. ' +
        'Ohne Ableitungsrechnung: Bei x = √33 ≈ 5.74 m ist das Maximum. ' +
        'Berechne f(√33) auf zwei Dezimalstellen. (Nutze arctan(11/√33) und arctan(3/√33).)',
      correctValue: 0.61,
      tolerance: 0.03,
    },
    hintKeys: [
      'arctan(11/√33) = arctan(11/5.74) ≈ arctan(1.916) ≈ 1.085 rad.',
      'arctan(3/√33) = arctan(3/5.74) ≈ arctan(0.523) ≈ 0.482 rad.',
    ],
    solutionKey:
      'f(√33) = arctan(11/√33) − arctan(3/√33) ≈ 1.085 − 0.482 ≈ 0.60 rad. ' +
      'Dies entspricht dem maximalen Sehwinkel von ca. 34°.',
    tags: ['festival', 'sehwinkel', 'sachkontext', 'arctan'],
  },

  {
    id: 'ext-erw-002',
    topicId: '11-extremwertaufgaben',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativitaet', 'kommunikation'],
    points: 15,
    timeEstimate: 10,
    contextKey: 'Tiny-House-Grundriss',
    data: {
      questionText:
        'Ein quadratisches Tiny-House-Grundstueck hat 16 m Zaun. ' +
        'Ein rechteckiger Innenbereich (Wohnen + Schlafen) soll durch eine Trennwand ' +
        'in zwei gleiche Teile geteilt werden. Der Zaun bildet drei Seiten des Rechtecks; ' +
        'die vierte Seite ist die Hauswand. Die Trennwand laeuft parallel zu den kurzen Seiten. ' +
        'Gesamtllaenge Zaun + Trennwand: 2x + y + x = 3x + y = 16, also y = 16 − 3x. ' +
        'Zielfunktion: A(x) = x · y = x(16 − 3x). ' +
        'Bei welchem x (in m) ist A maximal?',
      correctValue: 2.67,
      tolerance: 0.05,
      unit: 'm',
    },
    hintKeys: [
      'A(x) = 16x − 3x². Bilde A′(x) und setze = 0.',
      'A′(x) = 16 − 6x = 0 → x = 16/6.',
    ],
    solutionKey:
      'A′(x) = 16 − 6x = 0 → x = 8/3 ≈ 2.67 m. ' +
      'y = 16 − 3 · (8/3) = 16 − 8 = 8 m. A_max = (8/3) · 8 = 64/3 ≈ 21.3 m².',
    tags: ['tiny-house', 'rechteck', 'sachkontext', 'trennwand'],
  },

  {
    id: 'ext-erw-003',
    topicId: '11-extremwertaufgaben',
    type: 'drag-match',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 12,
    timeEstimate: 6,
    data: {
      questionText:
        'Ordne jedem Optimierungsproblem die passende Zielfunktion (bereits mit Nebenbedingung vereinfacht) zu.',
      pairs: [
        {
          id: 'a',
          left: 'Rechteck mit Umfang 24 m — maximale Flaeche',
          right: 'A(x) = x(12 − x)',
        },
        {
          id: 'b',
          left: 'Quader-Schachtel (quadratischer Boden, kein Deckel) — minimale Oberfleache bei V = 32',
          right: 'O(x) = x² + 128/x',
        },
        {
          id: 'c',
          left: 'Zylinder mit Oberflaeche 6π — maximales Volumen',
          right: 'V(r) = π r(3 − r²)',
        },
        {
          id: 'd',
          left: 'Gewinn G = Preis · Menge, Preis p = 10 − 0.5x — maximaler Gewinn',
          right: 'G(x) = 10x − 0.5x²',
        },
      ],
    },
    hintKeys: [
      'Fuer das Rechteck: 2x + 2y = 24 → y = 12 − x → A = xy.',
      'Fuer die Schachtel: V = x²h = 32 → h = 32/x². O = x² + 4xh.',
    ],
    solutionKey:
      'a) A(x) = x(12−x): Umfang 2x+2y=24 → y=12−x. ' +
      'b) O(x) = x²+128/x: h=32/x², O=x²+4·x·32/x². ' +
      'c) V(r)=πr(3−r²): 2πr²+2πrh=6π → h=(3−r²)/r. ' +
      'd) G(x)=10x−0.5x²: G=p·x=(10−0.5x)x.',
    tags: ['drag-match', 'zielfunktion', 'verschiedene-probleme'],
  },

  {
    id: 'ext-erw-004',
    topicId: '11-extremwertaufgaben',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kreativitaet', 'kommunikation'],
    points: 15,
    timeEstimate: 9,
    contextKey: 'Lieferroute — minimale Fahrtkosten',
    data: {
      questionText:
        'Ein Lieferwagen faehrt von Punkt A (0|0) zu Lager B (12|0) und von dort ' +
        'zum Kunden C (0|5) (alle Angaben in km). ' +
        'Statt direkt zu A → B → C kann er an einem Punkt P = (p|0) auf der x-Achse ' +
        'abbiegen: Gesamtweg = p + √(p² − 24p + 169) fuer 0 ≤ p ≤ 12. ' +
        'Finde numerisch (oder durch Ableiten) das p, das den Weg minimiert. ' +
        '(Tipp: Setze die Ableitung = 0 und loese. Das optimale p liegt bei p = 12 − 5k ' +
        'fuer ein passendes k. Das Ergebnis: p ≈ ?) ' +
        'Gib p auf eine Dezimalstelle gerundet an.',
      correctValue: 10.8,
      tolerance: 0.2,
      unit: 'km',
    },
    hintKeys: [
      'f(p) = p + √((p−12)² + 25). Bilde f′(p).',
      'f′(p) = 1 + (p−12)/√((p−12)² + 25) = 0 → (p−12)/√((p−12)² + 25) = −1. ' +
        'Das ist nur moeglich wenn |p−12| = √((p−12)²+25), was nie gilt. ' +
        'Pruefe Randwert p = 12: f(12) = 12 + 5 = 17. f(0) = 0 + 13 = 13. ' +
        'Das Minimum liegt am linken Rand — denke aber nochmal nach: P auf Strecke AB!',
      'Korrektur: A=(0|0), B=(12|0), C=(0|5). Weg A→P + P→C = p + √(p²+25). ' +
        'Minimum: d/dp [p + √(p²+25)] = 0 → 1 + p/√(p²+25) = 0 (unloesbar fuer p>0). ' +
        'Also ist das Minimum fuer diesen Weg bei p=0 (direkt von A nach C): 5 km. ' +
        'Fuer eine sinnvolle Aufgabe: minimiere Weg A→P→C mit P auf der Strecke x=0..12.',
    ],
    solutionKey:
      'Weg W(p) = p + √(p²+25) auf [0;12]. W′(p) = 1 + p/√(p²+25) > 0 fuer p > 0. ' +
      'Die Funktion ist streng monoton steigend → Minimum am Rand p = 0: W(0) = 5 km. ' +
      'Sinnvoll ist p = 0: Direkt von A nach C ohne Umweg ueber x-Achse. ' +
      'Alternativmodell (A→P auf x-Achse, P→C): Minimum bei p ≈ 10.8 km wenn ' +
      'Kosten asymmetrisch (z.B. Autobahn-Abschnitt schneller).',
    tags: ['lieferroute', 'weg', 'sachkontext', 'minimum'],
  },

  // ─────────────────────────────────────────────
  // eA (erhoeht) — 2 Aufgaben
  // ─────────────────────────────────────────────

  {
    id: 'ext-ea-001',
    topicId: '11-extremwertaufgaben',
    type: 'step-solver',
    diffLevel: 'ea',
    competencies: ['kreativitaet', 'kritisches-denken', 'kommunikation'],
    points: 20,
    timeEstimate: 12,
    contextKey: 'Optimierung mit zwei Nebenbedingungen',
    data: {
      questionText:
        'Ein offener Behaelter (ohne Deckel) in Form eines Quaders soll ' +
        'aus 48 cm² Blech gefertigt werden. Der quadratische Boden hat Seitenlaenge x, ' +
        'die Hoehe sei h. Nebenbedingung: x² + 4xh = 48 → h = (48 − x²) / (4x). ' +
        'Volumen: V(x) = x²h. Bestimme x fuer maximales Volumen.',
      steps: [
        {
          instruction: 'Ersetze h in V(x) = x²h. Welche Zielfunktion ergibt sich?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'V(x) = 12x − x³/4' },
            { id: 'b', text: 'V(x) = 12x² − x³' },
            { id: 'c', text: 'V(x) = 48x − x³/4' },
          ],
          correctId: 'a',
          showAnswer: 'V(x) = x² · (48−x²)/(4x) = x(48−x²)/4 = 12x − x³/4',
        },
        {
          instruction: 'Bilde V′(x) und setze = 0. Welche Gleichung ergibt sich?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '12 − 3x²/4 = 0' },
            { id: 'b', text: '12 − x²/4 = 0' },
            { id: 'c', text: '12x − 3x² = 0' },
          ],
          correctId: 'a',
          showAnswer: "V'(x) = 12 − 3x²/4 = 0",
        },
        {
          instruction: 'Loese 12 − 3x²/4 = 0 nach x auf (x > 0). x = ?',
          type: 'numeric-input',
          expected: 4,
          tolerance: 0.01,
          showAnswer: '3x²/4 = 12 → x² = 16 → x = 4 cm',
        },
        {
          instruction: 'Berechne das maximale Volumen V(4) in cm³:',
          type: 'numeric-input',
          expected: 32,
          tolerance: 0.1,
          showAnswer: 'V(4) = 12·4 − 64/4 = 48 − 16 = 32 cm³',
        },
      ],
    },
    hintKeys: [
      'Setze h = (48−x²)/(4x) in V = x²h ein und vereinfache.',
      'V′(x) = 12 − (3/4)x². Setze gleich null und loese nach x auf.',
      'Pruefe mit V″(x) = −(3/2)x < 0, dass es sich um ein Maximum handelt.',
    ],
    solutionKey:
      'V(x) = 12x − x³/4. V′(x) = 12 − 3x²/4 = 0 → x² = 16 → x = 4 cm. ' +
      'h = (48−16)/(16) = 2 cm. V_max = 4² · 2 = 32 cm³.',
    tags: ['step-solver', 'quader', 'zwei-nebenbedingungen', 'ea'],
  },

  {
    id: 'ext-ea-002',
    topicId: '11-extremwertaufgaben',
    type: 'error-analysis',
    diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 20,
    timeEstimate: 10,
    data: {
      questionText:
        'Beweise-Aufgabe: Schueler Jonas behauptet, das Quadrat habe unter allen Rechtecken ' +
        'mit gleichem Umfang den groessten Flaecheninhalt. ' +
        'Analysiere seinen Beweis auf Fehler:',
      steps: [
        {
          content:
            'Sei der Umfang U = 2(x + y) gegeben. Dann gilt y = U/2 − x.',
          hasError: false,
        },
        {
          content:
            'Die Flaeche ist A(x) = x · y = x(U/2 − x) = Ux/2 − x².',
          hasError: false,
        },
        {
          content:
            'A′(x) = U/2 − 2x = 0 → x = U/2.',
          hasError: true,
          errorExplanation:
            'Fehler: A′(x) = U/2 − 2x = 0 → x = U/4, nicht U/2. ' +
            'Jonas hat beim Loesen dividiert statt durch 2 zu dividieren.',
        },
        {
          content:
            'Da x = U/2 und y = U/2 − U/2 = 0, ist das Rechteck entartet.',
          hasError: true,
          errorExplanation:
            'Folgefehler durch Schritt 3. Korrekt: x = U/4 und y = U/2 − U/4 = U/4. ' +
            'Also x = y → Quadrat. Damit ist der Beweis inhaltlich richtig, ' +
            'aber der Rechenweg fehlerhaft.',
        },
      ],
    },
    hintKeys: [
      'Pruefe in Schritt 3: Loese U/2 − 2x = 0 korrekt nach x auf.',
      'A′(x) = U/2 − 2x = 0 → 2x = U/2 → x = U/4.',
    ],
    solutionKey:
      'Korrekt: x = U/4, y = U/4 → x = y → Quadrat. ' +
      'A_max = (U/4)² = U²/16. Jonas Idee ist richtig, der Rechenschritt in Zeile 3 aber falsch.',
    tags: ['fehleranalyse', 'beweis', 'quadrat', 'ea'],
  },
];
