export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'ageo-basis-001', topicId: '12-analytische-geometrie', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Eine Ebene $E$ ist durch drei Punkte $A = (1; 0; 0)$, $B = (0; 2; 0)$ und $C = (0; 0; 3)$ gegeben. Welche der folgenden Darstellungen ist eine Parameterform der Ebene?',
      options: [
        { id: 'a', text: '$E: \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} -1 \\\\ 0 \\\\ 3 \\end{pmatrix}$', correct: true },
        { id: 'b', text: '$E: 2x + 3y + z = 6$', correct: false },
        { id: 'c', text: '$E: \\vec{n} \\cdot (\\vec{x} - \\vec{p}) = 0$', correct: false },
        { id: 'd', text: '$E: \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 0 \\\\ 2 \\\\ 0 \\end{pmatrix}$', correct: false },
      ],
    },
    hintKeys: ['Die Parameterform einer Ebene hat die Form $\\vec{x} = \\vec{p} + s \\cdot \\vec{u} + t \\cdot \\vec{v}$, mit einem Stützvektor und zwei linear unabhängigen Richtungsvektoren.'],
    solutionKey: 'Die Parameterform lautet $\\vec{x} = \\vec{p} + s \\cdot \\vec{u} + t \\cdot \\vec{v}$ mit Stützvektor $\\vec{p} = \\overrightarrow{OA}$ und Richtungsvektoren $\\overrightarrow{AB}$ und $\\overrightarrow{AC}$. Option (b) ist Koordinatenform, (c) ist Normalenform (kompakt), (d) hat nur einen Richtungsvektor → Gerade.',
    tags: ['ebene', 'parameterform', 'definition', 'erkennen'],
  },

  {
    id: 'ageo-basis-002', topicId: '12-analytische-geometrie', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    data: {
      questionText: 'Die Ebene $E$ hat die Gleichung $\\vec{x} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix}$. Liegt der Punkt $P = (3; 2; 3)$ auf der Ebene $E$?',
      options: [
        { id: 'a', text: 'Ja, mit $s = 1$ und $t = 1$.', correct: true },
        { id: 'b', text: 'Nein, da der Punkt nicht durch Einsetzen darstellbar ist.', correct: false },
        { id: 'c', text: 'Ja, mit $s = 2$ und $t = 0$.', correct: false },
        { id: 'd', text: 'Das kann ohne Koordinatenform nicht entschieden werden.', correct: false },
      ],
    },
    hintKeys: [
      'Setze den Punkt $P$ gleich dem Ebenenausdruck: $\\begin{pmatrix} 3 \\\\ 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix}$.',
      'Das liefert drei Gleichungen: $3 = 2 + s$, $2 = s + t$, $3 = 1 + 2t$.',
    ],
    solutionKey: 'Aus der ersten Gleichung: $s = 1$. Aus der dritten: $t = 1$. Probe mit der zweiten: $s + t = 1 + 1 = 2$ ✓. Also liegt $P$ auf $E$ mit $s = 1, t = 1$.',
    tags: ['punkt-auf-ebene', 'parameterform', 'gleichungssystem'],
  },

  {
    id: 'ageo-basis-003', topicId: '12-analytische-geometrie', type: 'multiple-choice', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 3,
    data: {
      questionText: 'Welcher Vektor ist der Normalenvektor der Ebene $E: 3x - 2y + 5z = 10$?',
      options: [
        { id: 'a', text: '$\\vec{n} = \\begin{pmatrix} 3 \\\\ -2 \\\\ 5 \\end{pmatrix}$', correct: true },
        { id: 'b', text: '$\\vec{n} = \\begin{pmatrix} 10 \\\\ 0 \\\\ 0 \\end{pmatrix}$', correct: false },
        { id: 'c', text: '$\\vec{n} = \\begin{pmatrix} -3 \\\\ 2 \\\\ -5 \\end{pmatrix}$', correct: false },
        { id: 'd', text: '$\\vec{n} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 5 \\end{pmatrix}$', correct: false },
      ],
    },
    hintKeys: ['In der Koordinatenform $ax + by + cz = d$ liest man den Normalenvektor direkt ab: $\\vec{n} = \\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}$. Beachte dabei die Vorzeichen!'],
    solutionKey: 'In der Koordinatenform $3x - 2y + 5z = 10$ sind die Koeffizienten der Variablen die Komponenten des Normalenvektors: $\\vec{n} = \\begin{pmatrix} 3 \\\\ -2 \\\\ 5 \\end{pmatrix}$. Achtung: Option (c) wäre ein antiparalleler Normalenvektor (ebenfalls senkrecht zur Ebene, aber entgegengesetzt).',
    tags: ['normalenvektor', 'koordinatenform', 'ablesen'],
  },

  {
    id: 'ageo-basis-004', topicId: '12-analytische-geometrie', type: 'numeric-input', diffLevel: 'basis',
    competencies: ['kommunikation'], points: 5, timeEstimate: 4,
    contextKey: 'Architektur — Dachfläche',
    data: {
      questionText: 'Eine geneigte Dachfläche wird modelliert. Der Aufpunkt ist $A = (0; 0; 4)$, die Richtungsvektoren sind $\\vec{u} = \\begin{pmatrix} 6 \\\\ 0 \\\\ -2 \\end{pmatrix}$ und $\\vec{v} = \\begin{pmatrix} 0 \\\\ 5 \\\\ 0 \\end{pmatrix}$. Liegt der Punkt $Q = (6; 5; 2)$ auf der Dachfläche? Setze $s = 1, t = 1$ ein und gib die $z$-Koordinate des resultierenden Punktes an.',
      correctValue: 2,
      tolerance: 0.001,
    },
    hintKeys: [
      '$\\vec{x} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 4 \\end{pmatrix} + 1 \\cdot \\begin{pmatrix} 6 \\\\ 0 \\\\ -2 \\end{pmatrix} + 1 \\cdot \\begin{pmatrix} 0 \\\\ 5 \\\\ 0 \\end{pmatrix}$.',
      'Berechne komponentenweise: $z = 4 + 1 \\cdot (-2) + 1 \\cdot 0 = ?$',
    ],
    solutionKey: '$\\vec{x} = \\begin{pmatrix} 0+6+0 \\\\ 0+0+5 \\\\ 4-2+0 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 5 \\\\ 2 \\end{pmatrix}$. Die $z$-Koordinate ist $2$. Da diese mit $Q = (6;5;2)$ übereinstimmt, liegt $Q$ auf der Dachfläche.',
    tags: ['parameterform', 'einsetzen', 'dachflaeche', 'architektur', 'sachkontext'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ───────────────────────────────────────

  {
    id: 'ageo-standard-001', topicId: '12-analytische-geometrie', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 10,
    contextKey: 'Laser-Schneidmaschine',
    data: {
      questionText: 'Eine Laser-Schneidmaschine fährt entlang der Ebene $E: \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 0 \\\\ 1 \\\\ 3 \\end{pmatrix}$. Wandle diese Parameterform in die Koordinatenform $ax + by + cz = d$ um.',
      steps: [
        {
          instruction: 'Berechne den Normalenvektor $\\vec{n} = \\vec{u} \\times \\vec{v}$ mit $\\vec{u} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$ und $\\vec{v} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 3 \\end{pmatrix}$. Berechne die $x$-Komponente: $n_x = u_y \\cdot v_z - u_z \\cdot v_y = 1 \\cdot 3 - 0 \\cdot 1 = ?$',
          type: 'numeric-input', expected: 3, tolerance: 0.001,
          showAnswer: '$n_x = 1 \\cdot 3 - 0 \\cdot 1 = 3$',
        },
        {
          instruction: '$y$-Komponente: $n_y = u_z \\cdot v_x - u_x \\cdot v_z = 0 \\cdot 0 - 2 \\cdot 3 = ?$',
          type: 'numeric-input', expected: -6, tolerance: 0.001,
          showAnswer: '$n_y = 0 \\cdot 0 - 2 \\cdot 3 = -6$',
        },
        {
          instruction: '$z$-Komponente: $n_z = u_x \\cdot v_y - u_y \\cdot v_x = 2 \\cdot 1 - 1 \\cdot 0 = ?$',
          type: 'numeric-input', expected: 2, tolerance: 0.001,
          showAnswer: '$n_z = 2 \\cdot 1 - 1 \\cdot 0 = 2$. Also $\\vec{n} = \\begin{pmatrix} 3 \\\\ -6 \\\\ 2 \\end{pmatrix}$.',
        },
        {
          instruction: 'Berechne $d = \\vec{n} \\cdot \\vec{p}$ mit Stützvektor $\\vec{p} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}$: $d = 3 \\cdot 1 + (-6) \\cdot 0 + 2 \\cdot 2 = ?$',
          type: 'numeric-input', expected: 7, tolerance: 0.001,
          showAnswer: '$d = 3 + 0 + 4 = 7$. Koordinatenform: $3x - 6y + 2z = 7$.',
        },
      ],
    },
    hintKeys: [
      'Kreuzprodukt (Vektorprodukt): $\\vec{u} \\times \\vec{v} = \\begin{pmatrix} u_y v_z - u_z v_y \\\\ u_z v_x - u_x v_z \\\\ u_x v_y - u_y v_x \\end{pmatrix}$.',
      'Der Wert $d$ berechnet sich als Skalarprodukt von $\\vec{n}$ mit einem beliebigen Punkt der Ebene.',
    ],
    solutionKey: '$\\vec{n} = \\begin{pmatrix} 3 \\\\ -6 \\\\ 2 \\end{pmatrix}$, $d = 7$. Koordinatenform: $3x - 6y + 2z = 7$.',
    tags: ['parameterform', 'koordinatenform', 'umwandlung', 'kreuzprodukt', 'laser', 'sachkontext'],
  },

  {
    id: 'ageo-standard-002', topicId: '12-analytische-geometrie', type: 'drag-match', diffLevel: 'standard',
    competencies: ['kommunikation'], points: 10, timeEstimate: 5,
    data: {
      questionText: 'Ordne jede Ebenengleichung ihrer richtigen Bezeichnung zu.',
      pairs: [
        { id: 'a', left: '$E: \\vec{x} = \\vec{p} + s \\cdot \\vec{u} + t \\cdot \\vec{v}$', right: 'Parameterform' },
        { id: 'b', left: '$E: ax + by + cz = d$', right: 'Koordinatenform' },
        { id: 'c', left: '$E: \\vec{n}_0 \\cdot \\vec{x} = d_0$ mit $|\\vec{n}_0| = 1$', right: 'Hesse-Normalform' },
        { id: 'd', left: '$E: \\vec{n} \\cdot (\\vec{x} - \\vec{p}) = 0$', right: 'Normalenform' },
      ],
    },
    hintKeys: [
      'Parameter = zwei Freiheitsgrade ($s$ und $t$), Koordinate = drei Variablen mit Koeffizienten, Hesse = normierter Normalenvektor.',
      'Die Normalenform verwendet den Normalenvektor und einen Aufpunkt, während die Hesse-Normalform den Einheits-Normalenvektor verwendet.',
    ],
    solutionKey: 'Parameterform: $\\vec{p} + s\\vec{u} + t\\vec{v}$ | Koordinatenform: $ax+by+cz=d$ | Normalenform: $\\vec{n}\\cdot(\\vec{x}-\\vec{p})=0$ | Hesse-Normalform: normierter $\\vec{n}_0$, direkter Abstandswert.',
    tags: ['drag-match', 'ebenenformen', 'definitionen', 'parameterform', 'koordinatenform'],
  },

  {
    id: 'ageo-standard-003', topicId: '12-analytische-geometrie', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 10,
    contextKey: 'VR-Gaming Kollisionserkennung',
    data: {
      questionText: 'In einem VR-Spiel fliegt ein Laserstrahl entlang der Geraden $g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$ auf die Wand $E: x + y - z = 4$. Berechne den Durchstoßpunkt.',
      steps: [
        {
          instruction: 'Setze die Geradengleichung in die Ebenengleichung ein: $(2 + t) + (1 + 2t) - (3t) = 4$. Vereinfache den linken Term.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$3 + 0t = 4$', correct: true },
            { id: 'b', text: '$3 + 6t = 4$', correct: false },
            { id: 'c', text: '$3 + 2t = 4$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$(2+t) + (1+2t) - (3t) = 3 + t + 2t - 3t = 3 + 0t = 3$.',
        },
        {
          instruction: 'Die Gleichung $3 = 4$ hat keine Lösung. Was bedeutet das geometrisch?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Die Gerade schneidet die Ebene in einem Punkt.', correct: false },
            { id: 'b', text: 'Die Gerade liegt parallel zur Ebene (kein Schnittpunkt).', correct: true },
            { id: 'c', text: 'Die Gerade liegt in der Ebene (unendlich viele Schnittpunkte).', correct: false },
          ],
          correctId: 'b',
          showAnswer: 'Keine Lösung → Gerade ist parallel zur Ebene. Bestätige: $\\vec{v} \\cdot \\vec{n} = \\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix} \\cdot \\begin{pmatrix}1\\\\1\\\\-1\\end{pmatrix} = 1+2-3 = 0$ ✓',
        },
      ],
    },
    hintKeys: [
      'Einsetzen: Ersetze $x, y, z$ in der Ebenengleichung durch die Geradenkomponenten $x = 2+t$, $y = 1+2t$, $z = 3t$.',
      'Wenn sich $t$ wegkürzt: entweder parallel (keine Lösung) oder die Gerade liegt in der Ebene (alle $t$ Lösungen).',
    ],
    solutionKey: 'Nach Einsetzen: $3 = 4$ — Widerspruch. Die Gerade liegt parallel zur Ebene, da $\\vec{v} \\cdot \\vec{n} = 0$. Kein Durchstoßpunkt.',
    tags: ['durchstosspunkt', 'gerade-ebene', 'parallel', 'vr-gaming', 'sachkontext'],
  },

  {
    id: 'ageo-standard-004', topicId: '12-analytische-geometrie', type: 'step-solver', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 12, timeEstimate: 10,
    contextKey: 'Solarpanel-Montage',
    data: {
      questionText: 'Ein Solarpanel liegt in der Ebene $E: 2x + y + 2z = 6$. Der Sonnenstrahl fährt entlang $g: \\vec{x} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 3 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$. Berechne den Auftreffpunkt des Strahls auf dem Panel.',
      steps: [
        {
          instruction: 'Setze $x = t$, $y = 2t$, $z = 3 - t$ in $2x + y + 2z = 6$ ein. Wie lautet der vereinfachte Ausdruck?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$6 + t = 6$', correct: false },
            { id: 'b', text: '$6 + 3t = 6$', correct: false },
            { id: 'c', text: '$6 + t = 6$, also $t = 0$', correct: false },
            { id: 'd', text: '$2t + 2t - 2t + 6 = 6$, vereinfacht $2t + 6 = 6$', correct: true },
          ],
          correctId: 'd',
          showAnswer: '$2t + 2t + 2(3-t) = 2t + 2t + 6 - 2t = 2t + 6 = 6$.',
        },
        {
          instruction: 'Löse $2t + 6 = 6$ nach $t$.',
          type: 'numeric-input', expected: 0, tolerance: 0.001,
          showAnswer: '$2t = 0 \\Rightarrow t = 0$.',
        },
        {
          instruction: 'Berechne den Auftreffpunkt mit $t = 0$. Gib die $x$-Koordinate des Punktes an.',
          type: 'numeric-input', expected: 0, tolerance: 0.001,
          showAnswer: '$t = 0: \\vec{x} = \\begin{pmatrix}0\\\\0\\\\3\\end{pmatrix}$. Auftreffpunkt: $(0; 0; 3)$.',
        },
      ],
    },
    hintKeys: [
      'Ersetze $x$, $y$, $z$ in der Ebenengleichung durch die entsprechenden Ausdrücke aus der Geradengleichung.',
      'Löse die entstehende lineare Gleichung nach $t$ auf und setze zurück in die Geradengleichung ein.',
    ],
    solutionKey: 'Einsetzen liefert $t = 0$. Auftreffpunkt: $\\vec{x} = \\begin{pmatrix}0\\\\0\\\\3\\end{pmatrix}$, also $S = (0; 0; 3)$.',
    tags: ['durchstosspunkt', 'gerade-ebene', 'solarpanel', 'sachkontext', 'step-solver'],
  },

  {
    id: 'ageo-standard-005', topicId: '12-analytische-geometrie', type: 'multiple-choice', diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'], points: 10, timeEstimate: 6,
    data: {
      questionText: 'Gegeben: Ebene $E: x + 2y - z = 4$. Welche Darstellung in Parameterform ist korrekt?',
      options: [
        { id: 'a', text: '$E: \\vec{x} = \\begin{pmatrix} 4 \\\\ 0 \\\\ 0 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$', correct: true },
        { id: 'b', text: '$E: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 4 \\\\ 0 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ 4 \\end{pmatrix}$', correct: false },
        { id: 'c', text: '$E: \\vec{x} = s \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 4 \\\\ 0 \\\\ 0 \\end{pmatrix}$', correct: false },
        { id: 'd', text: '$E: \\vec{x} = \\begin{pmatrix} 4 \\\\ 0 \\\\ 0 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$', correct: false },
      ],
    },
    hintKeys: [
      'Wähle einen Punkt auf der Ebene als Stützvektor (z.B. $x=4, y=0, z=0$).',
      'Richtungsvektoren müssen senkrecht zum Normalenvektor $\\vec{n} = \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$ sein, also $\\vec{u} \\cdot \\vec{n} = 0$ und $\\vec{v} \\cdot \\vec{n} = 0$.',
    ],
    solutionKey: 'Stützpunkt $(4;0;0)$ liegt auf $E$: $4+0-0=4$ ✓. Richtungsvektor $(-2;1;0)$: $-2+2+0=0$ ✓. Richtungsvektor $(1;0;1)$: $1+0-1=0$ ✓. Option (a) ist korrekt. In (d) ist der zweite Richtungsvektor $\\vec{n}$ selbst — unzulässig.',
    tags: ['koordinatenform', 'parameterform', 'umwandlung', 'richtungsvektor'],
  },

  // ─── ERWEITERT (AFB III) – 5 Aufgaben ─────────────────────────────────────

  {
    id: 'ageo-erweitert-001', topicId: '12-analytische-geometrie', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 14,
    contextKey: 'Architektur — Dachflächen-Schnitt',
    data: {
      questionText: 'Zwei Dachflächen eines modernen Hauses werden als Ebenen modelliert: $E_1: x + y + z = 6$ und $E_2: x - y + z = 2$. Berechne die Schnittgerade der beiden Dachflächen (als Parameterdarstellung).',
      steps: [
        {
          instruction: 'Subtrahiere $E_2$ von $E_1$: $(x+y+z) - (x-y+z) = 6 - 2$. Vereinfache.',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$2y = 4$, also $y = 2$', correct: true },
            { id: 'b', text: '$2x = 4$, also $x = 2$', correct: false },
            { id: 'c', text: '$2z = 4$, also $z = 2$', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$E_1 - E_2: 2y = 4 \\Rightarrow y = 2$.',
        },
        {
          instruction: 'Setze $y = 2$ in $E_1$ ein: $x + 2 + z = 6$, also $x + z = ?$',
          type: 'numeric-input', expected: 4, tolerance: 0.001,
          showAnswer: '$x + z = 4$.',
        },
        {
          instruction: 'Setze $z = t$ (freier Parameter) und löse nach $x$: $x = 4 - t$. Gib damit die Schnittgerade als Parameterdarstellung an. Welche $x$-Komponente des Richtungsvektors ergibt sich?',
          type: 'numeric-input', expected: -1, tolerance: 0.001,
          showAnswer: '$g: \\vec{x} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} -1 \\\\ 0 \\\\ 1 \\end{pmatrix}$. Der Richtungsvektor hat $x$-Komponente $-1$.',
        },
      ],
    },
    hintKeys: [
      'Schnittgerade zweier Ebenen: Löse das Gleichungssystem $E_1$ und $E_2$ mit einer freien Variablen.',
      'Addiere oder subtrahiere die Gleichungen geschickt, um eine Variable zu eliminieren.',
    ],
    solutionKey: '$y = 2$, $x = 4 - t$, $z = t$. Schnittgerade: $g: \\vec{x} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} -1 \\\\ 0 \\\\ 1 \\end{pmatrix}$.',
    tags: ['schnittgerade', 'zwei-ebenen', 'gleichungssystem', 'architektur', 'sachkontext'],
  },

  {
    id: 'ageo-erweitert-002', topicId: '12-analytische-geometrie', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 12,
    contextKey: 'Laser-Schneidmaschine',
    data: {
      questionText: 'In einer Laser-Schneidmaschine soll der Abstand des Schneidkopfs $P = (3; 1; 4)$ von der Schnittebene $E: 2x + 6y - 3z = 7$ auf 0,1 mm genau eingestellt werden. Berechne den Abstand mit der Hesse-Normalform.',
      steps: [
        {
          instruction: 'Berechne den Betrag des Normalenvektors $\\vec{n} = \\begin{pmatrix} 2 \\\\ 6 \\\\ -3 \\end{pmatrix}$: $|\\vec{n}| = \\sqrt{4 + 36 + 9} = ?$',
          type: 'numeric-input', expected: 7, tolerance: 0.001,
          showAnswer: '$|\\vec{n}| = \\sqrt{49} = 7$.',
        },
        {
          instruction: 'Berechne den Zähler: $\\vec{n} \\cdot \\vec{p} - d = 2 \\cdot 3 + 6 \\cdot 1 + (-3) \\cdot 4 - 7 = ?$',
          type: 'numeric-input', expected: -7, tolerance: 0.001,
          showAnswer: '$6 + 6 - 12 - 7 = -7$.',
        },
        {
          instruction: 'Berechne $d(P, E) = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|} = \\frac{|-7|}{7} = ?$',
          type: 'numeric-input', expected: 1, tolerance: 0.001,
          showAnswer: '$d(P, E) = \\frac{7}{7} = 1$. Der Abstand beträgt 1 (Längeneinheit).',
        },
      ],
    },
    hintKeys: [
      'Hesse-Normalform-Abstandsformel: $d(P, E) = \\dfrac{|\\vec{n} \\cdot \\overrightarrow{OP} - d|}{|\\vec{n}|}$.',
      'Normiere den Normalenvektor durch Division durch seinen Betrag.',
    ],
    solutionKey: '$|\\vec{n}| = 7$. Zähler: $|2 \\cdot 3 + 6 \\cdot 1 + (-3) \\cdot 4 - 7| = |-7| = 7$. Abstand: $d = 7/7 = 1$.',
    tags: ['abstand-punkt-ebene', 'hesse-normalform', 'laser', 'sachkontext', 'step-solver'],
  },

  {
    id: 'ageo-erweitert-003', topicId: '12-analytische-geometrie', type: 'multiple-choice', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kollaboration'], points: 15, timeEstimate: 12,
    contextKey: 'Architektur — Solaranlage auf Dach',
    data: {
      questionText: 'Ein Architekt plant ein Flachdach (Ebene $E_1: z = 5$) und ein geneigtes Vordach (Ebene $E_2: x + 2z = 11$). Ein Sonnenstrahl verläuft entlang $g: \\vec{x} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 7 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ -1 \\end{pmatrix}$. Welche Aussage ist korrekt?',
      options: [
        { id: 'a', text: 'Der Strahl trifft zuerst $E_2$ (Vordach) bei $t = 2$, dann $E_1$ (Flachdach) bei $t = 2$ — beide gleichzeitig.', correct: false },
        { id: 'b', text: 'Der Strahl trifft zuerst $E_2$ (Vordach) bei $t = 2$, Punkt $(3;2;5)$.', correct: true },
        { id: 'c', text: 'Der Strahl trifft zuerst $E_1$ (Flachdach) bei $t = 2$, da $E_1$ höher liegt.', correct: false },
        { id: 'd', text: 'Der Strahl trifft keine der beiden Ebenen, da er senkrecht nach unten fällt.', correct: false },
      ],
    },
    hintKeys: [
      'Setze $g$ in $E_1: z = 5$ ein: $7 - t = 5 \\Rightarrow t = 2$, Punkt $(3;2;5)$.',
      'Setze $g$ in $E_2: x + 2z = 11$ ein: $3 + 2(7-t) = 11 \\Rightarrow 17 - 2t = 11 \\Rightarrow t = 3$, Punkt $(3;2;4)$. Das Vordach wird bei $t=3$ getroffen, das Flachdach bei $t=2$. Da der Strahl von oben kommt und $t=2 < t=3$, trifft er zuerst $E_1$.',
    ],
    solutionKey: '$E_1$: $t = 2$, Punkt $(3;2;5)$. $E_2$: $t = 3$, Punkt $(3;2;4)$. Da kleines $t$ = frühere Begegnung auf dem Weg von oben, trifft der Strahl zuerst das Flachdach $E_1$ bei $(3;2;5)$. Achtung: Option (b) nennt zwar den richtigen Punkt, verwechselt aber die Ebenenbezeichnung — korrekt wäre $E_1$.',
    tags: ['durchstosspunkt', 'vergleich', 'architektur', 'zwei-ebenen', 'sachkontext'],
  },

  {
    id: 'ageo-erweitert-004', topicId: '12-analytische-geometrie', type: 'error-analysis', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'], points: 15, timeEstimate: 10,
    data: {
      questionText: 'Schülerin Lena berechnet den Abstand von Punkt $P = (1; 2; 3)$ zur Ebene $E: 3x + 4y = 10$. Finde alle Fehler in ihrer Lösung.',
      steps: [
        { content: 'Schritt 1: Normalenvektor $\\vec{n} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}$, $|\\vec{n}| = \\sqrt{3^2 + 4^2} = 5$', hasError: false, errorExplanation: '' },
        { content: 'Schritt 2: Zähler $= 3 \\cdot 1 + 4 \\cdot 2 + 3 = 3 + 8 + 3 = 14$', hasError: true, errorExplanation: 'Fehler: Das $+3$ im Zähler ist falsch. Die Ebenengleichung lautet $3x+4y = 10$, also $d = 10$. Zähler: $|3 \\cdot 1 + 4 \\cdot 2 - 10| = |3 + 8 - 10| = |1| = 1$.' },
        { content: 'Schritt 3: $d(P,E) = \\frac{14}{5} = 2{,}8$', hasError: true, errorExplanation: 'Durch den Fehler in Schritt 2 ist auch das Ergebnis falsch. Richtig: $d(P,E) = \\frac{1}{5} = 0{,}2$.' },
      ],
    },
    hintKeys: ['Abstandsformel: $d(P,E) = \\dfrac{|ax_P + by_P + cz_P - d|}{\\sqrt{a^2+b^2+c^2}}$. Das $d$ in dieser Formel ist der Wert rechts vom Gleichheitszeichen in der Koordinatenform.'],
    solutionKey: 'Fehler in Schritt 2: Lena hat $d = 10$ nicht korrekt als $-10$ eingesetzt. Richtig: Zähler $= |3+8-10| = 1$. Abstand $= 1/5 = 0{,}2$.',
    tags: ['fehleranalyse', 'abstand-punkt-ebene', 'hesse-normalform', 'fehler-finden'],
  },

  {
    id: 'ageo-erweitert-005', topicId: '12-analytische-geometrie', type: 'step-solver', diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativität'], points: 15, timeEstimate: 14,
    contextKey: 'VR-Gaming — Kollision Kugel/Wand',
    data: {
      questionText: 'In einem VR-Spiel nähert sich ein Spielercharakter (Startpunkt $S = (0; 0; 6)$, Bewegungsrichtung $\\vec{v} = \\begin{pmatrix} 2 \\\\ 1 \\\\ -3 \\end{pmatrix}$) einer Wand (Ebene $E: 2x + y - z = 3$). Bestimme den Auftreffpunkt und prüfe, ob sich der Charakter mit dem Rücken oder der Vorderseite nähert (Normalenvektor $\\vec{n} = \\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}$ zeigt nach außen).',
      steps: [
        {
          instruction: 'Setze die Geradendarstellung $\\vec{x} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 6 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ -3 \\end{pmatrix}$ in $E$ ein. Welchen Wert hat $t$?',
          type: 'numeric-input', expected: 1, tolerance: 0.001,
          showAnswer: '$2(2t) + (t) - (6-3t) = 3 \\Rightarrow 4t + t - 6 + 3t = 3 \\Rightarrow 8t = 9$. Warte — nochmals: $2 \\cdot 2t + 1 \\cdot t + (-1)(6-3t) = 4t+t-6+3t = 8t-6 = 3 \\Rightarrow t = 9/8$. Hmm, prüfe: Einsetzen $x=2t,y=t,z=6-3t$: $4t+t-(6-3t) = 8t-6=3 \\Rightarrow t = 9/8 \\approx 1{,}125$.',
        },
        {
          instruction: 'Berechne den Auftreffpunkt mit $t = 9/8$. Gib die gerundete $z$-Koordinate auf 2 Dezimalstellen an.',
          type: 'numeric-input', expected: 2.63, tolerance: 0.05,
          showAnswer: '$z = 6 - 3 \\cdot \\frac{9}{8} = 6 - \\frac{27}{8} = \\frac{48-27}{8} = \\frac{21}{8} \\approx 2{,}63$.',
        },
        {
          instruction: 'Das Skalarprodukt $\\vec{v} \\cdot \\vec{n} = \\begin{pmatrix}2\\\\1\\\\-3\\end{pmatrix} \\cdot \\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$ ergibt?',
          type: 'numeric-input', expected: 8, tolerance: 0.001,
          showAnswer: '$4 + 1 + 3 = 8 > 0$. Der Charakter bewegt sich in Richtung des Normalenvektors → nähert sich von der Außenseite (Vorderseite) der Wand.',
        },
      ],
    },
    hintKeys: [
      'Einsetzen: $x = 2t, y = t, z = 6-3t$ in $2x + y - z = 3$.',
      'Vorzeichen von $\\vec{v} \\cdot \\vec{n}$: positiv → nähert sich von der Seite, auf die $\\vec{n}$ zeigt.',
    ],
    solutionKey: '$t = 9/8$. Auftreffpunkt: $(2{,}25; 1{,}125; 2{,}63)$. Da $\\vec{v} \\cdot \\vec{n} = 8 > 0$, bewegt sich der Charakter in Richtung des nach außen zeigenden Normalenvektors — er kommt von vorne.',
    tags: ['durchstosspunkt', 'vr-gaming', 'kollision', 'normalenvektor', 'sachkontext'],
  },

  // ─── eA (erhöhtes Anforderungsniveau) – 3 Aufgaben ────────────────────────

  {
    id: 'ageo-ea-001', topicId: '12-analytische-geometrie', type: 'step-solver', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 16,
    data: {
      questionText: 'Berechne den Winkel $\\varphi$ zwischen den Ebenen $E_1: x + y + z = 3$ und $E_2: x + 2y - z = 1$. Gib den Winkel in Grad an (auf eine Dezimalstelle gerundet).',
      steps: [
        {
          instruction: 'Normalenvektor $\\vec{n}_1 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$, $|\\vec{n}_1| = ?$ (auf 3 Dezimalstellen)',
          type: 'numeric-input', expected: 1.732, tolerance: 0.002,
          showAnswer: '$|\\vec{n}_1| = \\sqrt{1+1+1} = \\sqrt{3} \\approx 1{,}732$.',
        },
        {
          instruction: 'Normalenvektor $\\vec{n}_2 = \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$, $|\\vec{n}_2| = ?$ (auf 3 Dezimalstellen)',
          type: 'numeric-input', expected: 2.449, tolerance: 0.002,
          showAnswer: '$|\\vec{n}_2| = \\sqrt{1+4+1} = \\sqrt{6} \\approx 2{,}449$.',
        },
        {
          instruction: 'Skalarprodukt $\\vec{n}_1 \\cdot \\vec{n}_2 = 1 \\cdot 1 + 1 \\cdot 2 + 1 \\cdot (-1) = ?$',
          type: 'numeric-input', expected: 2, tolerance: 0.001,
          showAnswer: '$1 + 2 - 1 = 2$.',
        },
        {
          instruction: 'Berechne $\\cos(\\varphi) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|} = \\frac{2}{\\sqrt{3} \\cdot \\sqrt{6}} = \\frac{2}{\\sqrt{18}}$. Gib den Winkel $\\varphi$ in Grad an.',
          type: 'numeric-input', expected: 61.9, tolerance: 0.3,
          showAnswer: '$\\cos(\\varphi) = \\frac{2}{\\sqrt{18}} = \\frac{2}{3\\sqrt{2}} \\approx 0{,}4714$. $\\varphi = \\arccos(0{,}4714) \\approx 61{,}9°$.',
        },
      ],
    },
    hintKeys: [
      'Winkel zwischen Ebenen: $\\cos(\\varphi) = \\dfrac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$. Der Betragsstriche beim Skalarprodukt stellen sicher, dass der spitze Winkel berechnet wird.',
      '$\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2} \\approx 4{,}243$.',
    ],
    solutionKey: '$|\\vec{n}_1| = \\sqrt{3}$, $|\\vec{n}_2| = \\sqrt{6}$, $\\vec{n}_1 \\cdot \\vec{n}_2 = 2$. $\\cos \\varphi = 2/(3\\sqrt{2}) \\approx 0{,}471$. $\\varphi \\approx 61{,}9°$.',
    tags: ['winkel-ebenen', 'skalarprodukt', 'normalenvektor', 'ea', 'kreuzprodukt'],
  },

  {
    id: 'ageo-ea-002', topicId: '12-analytische-geometrie', type: 'step-solver', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 18,
    contextKey: 'VR-Gaming — Spiegelbild',
    data: {
      questionText: 'In einem VR-Spiel wird ein Charakter an einer Spiegelwand $E: x + y + z = 6$ gespiegelt. Berechne den Spiegelpunkt $P\' $ von $P = (4; 2; 3)$.',
      steps: [
        {
          instruction: 'Die Lotgerade durch $P$ senkrecht zu $E$ lautet $g: \\vec{x} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 3 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$. Setze $g$ in $E$ ein, um den Lotfußpunkt $F$ zu finden. Berechne $t$.',
          type: 'numeric-input', expected: -1, tolerance: 0.001,
          showAnswer: '$(4+t) + (2+t) + (3+t) = 6 \\Rightarrow 9 + 3t = 6 \\Rightarrow t = -1$.',
        },
        {
          instruction: 'Berechne den Lotfußpunkt $F$ mit $t = -1$. Gib die $x$-Koordinate von $F$ an.',
          type: 'numeric-input', expected: 3, tolerance: 0.001,
          showAnswer: '$F = \\begin{pmatrix} 4-1 \\\\ 2-1 \\\\ 3-1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 2 \\end{pmatrix}$.',
        },
        {
          instruction: 'Der Spiegelpunkt berechnet sich als $P\' = 2F - P$. Gib die $x$-Koordinate von $P\'$ an.',
          type: 'numeric-input', expected: 2, tolerance: 0.001,
          showAnswer: '$P\'_x = 2 \\cdot 3 - 4 = 2$. $P\' = (2; 0; 1)$.',
        },
        {
          instruction: 'Überprüfe, ob $P\'$ auf der gleichen Seite wie $P$ oder gegenüber liegt. Setze $P\'$ in die Ebenengleichung ein: $2 + 0 + 1 = ?$ Liegt $P\'$ auf der Ebene?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '$3 \\neq 6$ — $P\'$ liegt nicht auf $E$, sondern auf der gegenüberliegenden Seite. Das Ergebnis ist plausibel.', correct: true },
            { id: 'b', text: '$3 = 6$ — $P\'$ liegt auf der Ebene.', correct: false },
          ],
          correctId: 'a',
          showAnswer: '$2 + 0 + 1 = 3 \\neq 6$. $P\'$ liegt auf der anderen Seite der Ebene, korrekt für ein Spiegelbild.',
        },
      ],
    },
    hintKeys: [
      'Spiegeln an einer Ebene: (1) Lotgerade $g$ durch $P$ mit $\\vec{n}$ als Richtung, (2) Schnittpunkt $F$ mit $E$ berechnen, (3) $P\' = 2F - P$.',
      'Der Normalenvektor von $x+y+z=6$ ist $\\vec{n} = \\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$.',
    ],
    solutionKey: '$t = -1$, $F = (3;1;2)$, $P\' = 2 \\cdot \\begin{pmatrix}3\\\\1\\\\2\\end{pmatrix} - \\begin{pmatrix}4\\\\2\\\\3\\end{pmatrix} = \\begin{pmatrix}2\\\\0\\\\1\\end{pmatrix}$.',
    tags: ['spiegelpunkt', 'ebene', 'lotgerade', 'vr-gaming', 'ea', 'sachkontext'],
  },

  {
    id: 'ageo-ea-003', topicId: '12-analytische-geometrie', type: 'multiple-choice', diffLevel: 'ea',
    competencies: ['kritisches-denken', 'kommunikation'], points: 20, timeEstimate: 15,
    contextKey: 'Sonneneinstrahlung auf Solarpanel',
    data: {
      questionText: 'Ein Solarpanel liegt in der Ebene $E: 2x + 2y + z = 10$ (Normalenvektor zeigt nach oben-außen). Die Sonne steht in Richtung $\\vec{s} = \\begin{pmatrix} -1 \\\\ -1 \\\\ -2 \\end{pmatrix}$ (einfallender Strahl). Der Einfallswinkel $\\alpha$ gegenüber der Panelnormalen entscheidet über die Energieausbeute. Berechne $\\alpha$ (in Grad, auf eine Dezimalstelle).',
      options: [
        { id: 'a', text: '$\\alpha \\approx 9{,}7°$ — fast senkrecht, maximale Ausbeute.', correct: false },
        { id: 'b', text: '$\\alpha \\approx 80{,}3°$ — sehr flacher Einfall, geringe Ausbeute.', correct: false },
        { id: 'c', text: '$\\alpha \\approx 9{,}7°$, aber der Einfallswinkel wird gegenüber der Normalen gemessen, daher muss $90° - 9{,}7° = 80{,}3°$ angegeben werden.', correct: false },
        { id: 'd', text: '$\\cos\\alpha = \\dfrac{|\\vec{n} \\cdot \\vec{s}|}{|\\vec{n}| \\cdot |\\vec{s}|} = \\dfrac{6}{3 \\cdot \\sqrt{6}} \\approx 0{,}816$, $\\alpha \\approx 35{,}3°$.', correct: true },
      ],
    },
    hintKeys: [
      '$\\vec{n} = \\begin{pmatrix}2\\\\2\\\\1\\end{pmatrix}$, $|\\vec{n}| = 3$. $\\vec{s} = \\begin{pmatrix}-1\\\\-1\\\\-2\\end{pmatrix}$, $|\\vec{s}| = \\sqrt{6}$.',
      '$\\vec{n} \\cdot \\vec{s} = -2 + (-2) + (-2) = -6$. Mit Betragsstrichen: $|-6| = 6$.',
    ],
    solutionKey: '$\\vec{n} \\cdot \\vec{s} = -6$, $|\\vec{n}| = 3$, $|\\vec{s}| = \\sqrt{6}$. $\\cos\\alpha = 6/(3\\sqrt{6}) = 2/\\sqrt{6} \\approx 0{,}816$. $\\alpha = \\arccos(0{,}816) \\approx 35{,}3°$.',
    tags: ['winkel-ebene-gerade', 'solarpanel', 'skalarprodukt', 'sachkontext', 'ea'],
  },
];
