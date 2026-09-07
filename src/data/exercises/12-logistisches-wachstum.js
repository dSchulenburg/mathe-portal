export const exercises = [
  // ─── BASIS (AFB I) – 4 Aufgaben ───────────────────────────────────────────

  {
    id: 'lw-basis-001',
    topicId: '12-logistisches-wachstum',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Was unterscheidet logistisches Wachstum vom exponentiellen Wachstum?',
      options: [
        {
          id: 'a',
          text: 'Logistisches Wachstum nähert sich einer Kapazitätsgrenze $K$; exponentielles wächst unbegrenzt.',
          correct: true,
        },
        {
          id: 'b',
          text: 'Logistisches Wachstum ist immer langsamer als exponentielles.',
          correct: false,
        },
        {
          id: 'c',
          text: 'Logistisches Wachstum ist linear, exponentielles gekrümmt.',
          correct: false,
        },
        {
          id: 'd',
          text: 'Es gibt keinen mathematischen Unterschied, nur einen sprachlichen.',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Frag dich: Was passiert bei beiden Modellen für sehr große $t$?',
    ],
    solutionKey:
      'Richtig ist (a). Das logistische Modell hat eine Sättigungsgrenze: $\\lim\\limits_{t \\to \\infty} N(t) = K$. ' +
      'Antwort (b) stimmt nicht — am Anfang sind beide Kurven praktisch deckungsgleich, weil der ' +
      'Bremsfaktor $\\left(1 - \\frac{N}{K}\\right)$ dann noch fast $1$ ist. ' +
      'Erst wenn $N$ in die Nähe von $K$ kommt, gehen die Modelle auseinander.',
    tags: ['logistisches-wachstum', 'modellvergleich'],
  },
  {
    id: 'lw-basis-002',
    topicId: '12-logistisches-wachstum',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    contextKey: 'Abkühlung',
    data: {
      questionText:
        'Eine Tasse Kaffee kühlt nach $T(t) = 20 + 60 \\cdot e^{-0{,}1t}$ ab ($t$ in Minuten, $T$ in °C). ' +
        'Welcher Temperatur nähert sich der Kaffee auf lange Sicht (in °C)?',
      correctValue: 20,
      tolerance: 0.01,
      unit: '°C',
    },
    hintKeys: [
      'Was passiert mit $e^{-0{,}1t}$, wenn $t$ immer größer wird?',
      '$e^{-x} \\to 0$ für $x \\to \\infty$ — der zweite Summand verschwindet.',
    ],
    solutionKey:
      'Für $t \\to \\infty$ geht $e^{-0{,}1t} \\to 0$, also $T(t) \\to 20$ °C. ' +
      'Das ist die Raumtemperatur — die Schranke, die dem beschränkten Wachstum ihren Namen gibt. ' +
      'Der Kaffee erreicht sie nie exakt, kommt ihr aber beliebig nahe.',
    tags: ['beschraenktes-wachstum', 'grenzwert', 'sachkontext'],
  },
  {
    id: 'lw-basis-003',
    topicId: '12-logistisches-wachstum',
    type: 'numeric-input',
    diffLevel: 'basis',
    competencies: ['kommunikation'],
    points: 5,
    timeEstimate: 3,
    data: {
      questionText:
        'Ein logistisches Modell hat die Kapazität $K = 100\\,000$. Bei welchem Bestand $N$ liegt ' +
        'der Wendepunkt der Kurve?',
      correctValue: 50000,
      tolerance: 1,
    },
    hintKeys: [
      'Der Wendepunkt einer logistischen Kurve liegt immer bei der halben Kapazität — unabhängig von $r$ und $N_0$.',
    ],
    solutionKey:
      '$N(t_W) = \\dfrac{K}{2} = 50\\,000$. ' +
      'Das ist die schönste Eigenschaft des Modells: die Lage des Wendepunkts auf der ' +
      '**N-Achse** hängt nur von $K$ ab. Wachstumsrate und Startwert verschieben nur, ' +
      '**wann** dieser Punkt erreicht wird, nicht bei welchem Bestand.',
    tags: ['logistisches-wachstum', 'wendepunkt'],
  },
  {
    id: 'lw-basis-004',
    topicId: '12-logistisches-wachstum',
    type: 'multiple-choice',
    diffLevel: 'basis',
    competencies: ['kritisches-denken'],
    points: 5,
    timeEstimate: 4,
    data: {
      questionText:
        'Welcher Vorgang wird am besten durch **beschränktes** (nicht logistisches) Wachstum beschrieben?',
      options: [
        {
          id: 'a',
          text: 'Ein heißer Tee kühlt auf Raumtemperatur ab',
          correct: true,
        },
        {
          id: 'b',
          text: 'Ein Video geht viral und erreicht am Ende fast alle Nutzer',
          correct: false,
        },
        {
          id: 'c',
          text: 'Eine Bakterienkultur verdoppelt sich alle 20 Minuten ohne Platzmangel',
          correct: false,
        },
        {
          id: 'd',
          text: 'Ein Kapital wächst mit festem Zinssatz',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Beschränktes Wachstum startet mit dem größten Zuwachs und wird immer langsamer — es hat keine S-Form.',
      'Logistisches Wachstum braucht eine Ansteckungs- oder Vermehrungsphase, in der es erst langsam, dann schneller geht.',
    ],
    solutionKey:
      'Richtig ist (a). Die Abkühlung ist von der ersten Sekunde an am schnellsten und wird dann ' +
      'immer langsamer — das ist beschränktes Wachstum (genauer: beschränkte Abnahme), ohne Wendepunkt. ' +
      '(b) ist logistisch: Ein Video braucht erst wenige, dann viele Weiterleitende — die Kurve ist ' +
      'S-förmig mit Wendepunkt. (c) und (d) sind rein exponentiell, ohne jede Grenze.',
    tags: ['beschraenktes-wachstum', 'modellwahl', 'sachkontext'],
  },

  // ─── STANDARD (AFB II) – 5 Aufgaben ───────────────────────────────────────

  {
    id: 'lw-std-001',
    topicId: '12-logistisches-wachstum',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 4,
    contextKey: 'Seerosen',
    data: {
      questionText:
        'Seerosen breiten sich auf einem Teich nach $N(t) = \\dfrac{500}{1 + 9\\,e^{-0{,}4t}}$ aus ' +
        '($t$ in Wochen). Wie viele Pflanzen waren zu Beginn der Beobachtung vorhanden?',
      correctValue: 50,
      tolerance: 0.01,
    },
    hintKeys: [
      '„Zu Beginn" heißt $t = 0$.',
      '$e^0 = 1$ — der Nenner wird damit zu $1 + 9 = 10$.',
    ],
    solutionKey:
      '$N(0) = \\dfrac{500}{1 + 9 \\cdot e^{0}} = \\dfrac{500}{10} = 50$ Pflanzen. ' +
      'Der Parameter $a = 9$ ist kein Zufallswert: er entsteht aus $a = \\dfrac{K - N_0}{N_0} = \\dfrac{450}{50} = 9$. ' +
      'Aus $a$ kannst du den Startwert also immer zurückrechnen.',
    tags: ['logistisches-wachstum', 'startwert', 'sachkontext'],
  },
  {
    id: 'lw-std-002',
    topicId: '12-logistisches-wachstum',
    type: 'step-solver',
    diffLevel: 'standard',
    competencies: ['kommunikation', 'kritisches-denken'],
    points: 15,
    timeEstimate: 8,
    contextKey: 'Seerosen',
    data: {
      questionText:
        'Weiter mit dem Seerosen-Teich: $N(t) = \\dfrac{500}{1 + 9\\,e^{-0{,}4t}}$, $t$ in Wochen. ' +
        'Untersuche das Modell.',
      steps: [
        {
          instruction: 'Wie groß ist die Kapazität $K$ des Teichs (in Pflanzen)?',
          type: 'numeric-input',
          expected: 500,
          tolerance: 0.01,
          showAnswer:
            'Die Kapazität steht im Zähler: $K = 500$. Für $t \\to \\infty$ geht $e^{-0{,}4t} \\to 0$, ' +
            'der Nenner wird zu $1$, und es bleibt $N \\to 500$.',
        },
        {
          instruction: 'Wie viele Pflanzen sind es nach 5 Wochen? (auf ganze Pflanzen gerundet)',
          type: 'numeric-input',
          expected: 225,
          tolerance: 1,
          showAnswer:
            '$N(5) = \\dfrac{500}{1 + 9 \\cdot e^{-2}} = \\dfrac{500}{1 + 1{,}218} \\approx 225{,}4$, ' +
            'also rund 225 Pflanzen.',
        },
        {
          instruction: 'Bei welchem Bestand liegt der Wendepunkt?',
          type: 'numeric-input',
          expected: 250,
          tolerance: 0.5,
          showAnswer: 'Immer bei der halben Kapazität: $\\dfrac{K}{2} = 250$ Pflanzen.',
        },
        {
          instruction: 'Was bedeutet dieser Wendepunkt für den Teich?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Ab hier breiten sich die Seerosen pro Woche wieder langsamer aus' },
            { id: 'b', text: 'Ab hier nimmt die Zahl der Seerosen ab' },
            { id: 'c', text: 'Ab hier wächst der Bestand am schnellsten' },
          ],
          correctId: 'a',
          showAnswer:
            'Im Wendepunkt ist die Zuwachsrate am **größten**; danach wird sie kleiner. ' +
            'Der Bestand steigt weiter (Antwort b ist falsch), aber die wöchentliche Zunahme ' +
            'schrumpft von jetzt an — der Teich wird eng.',
        },
      ],
    },
    hintKeys: [
      'Die Kapazität kannst du am Zähler ablesen, ohne zu rechnen.',
      'Der Wendepunkt liegt bei $K/2$ — das gilt bei jedem logistischen Modell.',
    ],
    solutionKey:
      '$K = 500$; $N(5) \\approx 225$; Wendepunkt bei $250$ Pflanzen. ' +
      'Nach dem Wendepunkt wächst der Bestand weiter, aber mit abnehmender Rate. ' +
      'Genau diese Unterscheidung — Bestand steigt, Zuwachs fällt — ist die häufigste ' +
      'Interpretationsfrage im Abitur.',
    tags: ['step-solver', 'logistisches-wachstum', 'wendepunkt', 'sachkontext', 'interpretation'],
  },
  {
    id: 'lw-std-003',
    topicId: '12-logistisches-wachstum',
    type: 'numeric-input',
    diffLevel: 'standard',
    competencies: ['kommunikation'],
    points: 10,
    timeEstimate: 5,
    contextKey: 'Abkühlung',
    data: {
      questionText:
        'Der Kaffee von vorhin: $T(t) = 20 + 60 \\cdot e^{-0{,}1t}$ ($t$ in Minuten). ' +
        'Welche Temperatur hat er nach 10 Minuten? (auf zwei Dezimalstellen, in °C)',
      correctValue: 42.07,
      tolerance: 0.05,
      unit: '°C',
    },
    hintKeys: [
      '$-0{,}1 \\cdot 10 = -1$, also brauchst du $e^{-1} \\approx 0{,}3679$.',
    ],
    solutionKey:
      '$T(10) = 20 + 60 \\cdot e^{-1} = 20 + 60 \\cdot 0{,}3679 \\approx 42{,}07$ °C. ' +
      'Nach zehn Minuten ist erst rund ein Drittel der ursprünglichen Temperaturdifferenz übrig — ' +
      'die Abkühlung ist am Anfang am schnellsten und wird dann zäh.',
    tags: ['beschraenktes-wachstum', 'sachkontext', 'e-funktion'],
  },
  {
    id: 'lw-std-004',
    topicId: '12-logistisches-wachstum',
    type: 'multiple-choice',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 10,
    timeEstimate: 5,
    data: {
      questionText:
        'Welche Differentialgleichung beschreibt logistisches Wachstum?',
      options: [
        { id: 'a', text: '$N\'(t) = r \\cdot N(t) \\cdot \\left(1 - \\dfrac{N(t)}{K}\\right)$', correct: true },
        { id: 'b', text: '$N\'(t) = r \\cdot N(t)$', correct: false },
        { id: 'c', text: '$N\'(t) = k \\cdot (K - N(t))$', correct: false },
        { id: 'd', text: '$N\'(t) = r \\cdot K$', correct: false },
      ],
    },
    hintKeys: [
      'Lies die Gleichungen als Sätze: Wovon hängt der Zuwachs jeweils ab?',
      'Logistisch heißt: der Zuwachs braucht sowohl schon vorhandene Individuen als auch noch freien Platz.',
    ],
    solutionKey:
      'Richtig ist (a). Der Zuwachs ist proportional zu **beidem**: zum vorhandenen Bestand $N$ ' +
      '(es braucht Ansteckende) und zum freien Anteil $\\left(1 - \\frac{N}{K}\\right)$ (es braucht ' +
      'noch Platz). Fehlt eines von beidem, steht das Wachstum. ' +
      '(b) ist rein exponentiell, (c) ist beschränktes Wachstum — dort hängt der Zuwachs nur vom ' +
      'freien Rest ab, nicht vom Bestand. Genau deshalb hat (c) keinen Wendepunkt und (a) schon.',
    tags: ['logistisches-wachstum', 'differentialgleichung', 'modellvergleich'],
  },
  {
    id: 'lw-std-005',
    topicId: '12-logistisches-wachstum',
    type: 'error-analysis',
    diffLevel: 'standard',
    competencies: ['kritisches-denken'],
    points: 12,
    timeEstimate: 6,
    data: {
      questionText:
        'Nele interpretiert den Wendepunkt einer Epidemie-Kurve. Finde den Fehler.',
      steps: [
        {
          content: 'Der Wendepunkt liegt bei $N = \\dfrac{K}{2}$, hier also bei 5000 Infizierten.',
          hasError: false,
        },
        {
          content: 'Im Wendepunkt gilt $N\'\'(t_W) = 0$, dort hat die Zuwachsrate ihr Maximum.',
          hasError: false,
        },
        {
          content:
            'Ab dem Wendepunkt sinkt also die Zahl der Infizierten — die Epidemie klingt ab.',
          hasError: true,
          errorExplanation:
            'Verwechselt werden Bestand und Zuwachs. Ab dem Wendepunkt sinkt die **Zuwachsrate** ' +
            '$N\'$, also die Zahl der Neuinfektionen pro Tag. Der **Bestand** $N$ steigt weiter — ' +
            'nur langsamer — und nähert sich der Kapazität $K = 10\\,000$. ' +
            'Die logistische Funktion ist auf ihrem ganzen Definitionsbereich streng monoton steigend.',
        },
      ],
    },
    hintKeys: [
      'Zeichne die S-Kurve und den Wendepunkt ein. Fällt die Kurve dahinter?',
      'Unterscheide sauber: $N$ ist der Bestand, $N\'$ ist der Zuwachs pro Zeiteinheit.',
    ],
    solutionKey:
      'Schritt 3 ist falsch. Der Wendepunkt ist das Maximum von $N\'$, nicht das Ende von $N$. ' +
      'In der Sprache einer Epidemie: der Tag mit den meisten Neuinfektionen ist überschritten, ' +
      'die Gesamtzahl der Infizierten wächst aber weiter bis fast an die Kapazität. ' +
      'Diese Verwechslung ist der Klassiker bei Interpretationsaufgaben — und sie war 2020 ' +
      'auch außerhalb der Schule allgegenwärtig.',
    tags: ['fehleranalyse', 'wendepunkt', 'logistisches-wachstum', 'interpretation'],
  },

  // ─── ERWEITERT (AFB III) – 3 Aufgaben ─────────────────────────────────────

  {
    id: 'lw-erw-001',
    topicId: '12-logistisches-wachstum',
    type: 'step-solver',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 18,
    timeEstimate: 10,
    contextKey: 'Seerosen',
    data: {
      questionText:
        'Bestimme für $N(t) = \\dfrac{500}{1 + 9\\,e^{-0{,}4t}}$ den Wendezeitpunkt und die ' +
        'maximale wöchentliche Zunahme.',
      steps: [
        {
          instruction:
            'Der Wendepunkt liegt bei $N = \\frac{K}{2}$, der Nenner ist dort $2$. ' +
            'Löse $9\\,e^{-0{,}4t} = 1$ nach $t$ auf. (auf zwei Dezimalstellen, in Wochen)',
          type: 'numeric-input',
          expected: 5.49,
          tolerance: 0.02,
          unit: 'Wochen',
          showAnswer:
            '$9\\,e^{-0{,}4t} = 1 \\Rightarrow e^{-0{,}4t} = \\frac{1}{9} \\Rightarrow ' +
            '-0{,}4t = \\ln\\!\\left(\\frac{1}{9}\\right) = -\\ln(9) \\Rightarrow ' +
            't = \\frac{\\ln(9)}{0{,}4} \\approx 5{,}49$ Wochen. ' +
            'Allgemein: $t_W = \\frac{\\ln(a)}{r}$.',
        },
        {
          instruction:
            'Die maximale Zuwachsrate ist $N\'(t_W) = \\frac{r \\cdot K}{4}$. Wie groß ist sie ' +
            '(in Pflanzen pro Woche)?',
          type: 'numeric-input',
          expected: 50,
          tolerance: 0.1,
          unit: 'Pflanzen/Woche',
          showAnswer:
            '$N\'(t_W) = \\dfrac{0{,}4 \\cdot 500}{4} = 50$ Pflanzen pro Woche. ' +
            'Herleitung: In die Differentialgleichung $N\' = rN\\left(1 - \\frac{N}{K}\\right)$ ' +
            'den Wert $N = \\frac{K}{2}$ einsetzen: $r \\cdot \\frac{K}{2} \\cdot \\frac{1}{2} = \\frac{rK}{4}$.',
        },
        {
          instruction: 'Warum ist die Zuwachsrate ausgerechnet bei $N = \\frac{K}{2}$ maximal?',
          type: 'multiple-choice',
          options: [
            {
              id: 'a',
              text: 'Das Produkt $N \\cdot (K - N)$ wird bei $N = \\frac{K}{2}$ am größten — beide Faktoren sind dann gleich',
            },
            { id: 'b', text: 'Weil dort der Bestand am größten ist' },
            { id: 'c', text: 'Weil dort $e^{-rt} = 0$ gilt' },
          ],
          correctId: 'a',
          showAnswer:
            'Die Zuwachsrate ist proportional zu $N \\cdot (K - N)$ — also zum Produkt aus ' +
            '„wie viele stecken an" und „wie viel Platz ist noch frei". Ein Produkt zweier ' +
            'Faktoren mit fester Summe $K$ wird genau dann maximal, wenn beide gleich groß sind. ' +
            'Das ist dieselbe Aussage wie beim Rechteck mit festem Umfang und maximaler Fläche: ' +
            'das Quadrat gewinnt.',
        },
      ],
    },
    hintKeys: [
      'Im Wendepunkt ist der Nenner $1 + a e^{-rt}$ genau $2$ — daraus folgt $a e^{-rt} = 1$.',
      'Für die zweite Teilaufgabe brauchst du keine Ableitung: setze $N = \\frac{K}{2}$ in die Differentialgleichung ein.',
    ],
    solutionKey:
      '$t_W = \\dfrac{\\ln(9)}{0{,}4} \\approx 5{,}49$ Wochen, $N\'(t_W) = \\dfrac{0{,}4 \\cdot 500}{4} = 50$ ' +
      'Pflanzen pro Woche. ' +
      'Der tiefere Grund: $N\' = \\frac{r}{K} \\cdot N \\cdot (K - N)$ ist eine nach unten geöffnete ' +
      'Parabel in $N$ mit den Nullstellen $0$ und $K$. Ihr Scheitel liegt in der Mitte, bei $N = \\frac{K}{2}$. ' +
      'Der Wendepunkt der S-Kurve ist also der Scheitelpunkt der Zuwachs-Parabel.',
    tags: ['step-solver', 'logistisches-wachstum', 'wendepunkt', 'logarithmus', 'ea'],
  },
  {
    id: 'lw-erw-002',
    topicId: '12-logistisches-wachstum',
    type: 'numeric-input',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kreativität'],
    points: 15,
    timeEstimate: 9,
    contextKey: 'Modellierung',
    data: {
      questionText:
        'Eine Insel bietet Platz für höchstens $K = 1200$ Kaninchen. Zu Beobachtungsbeginn ' +
        'leben dort 100 Tiere. Bestimme den Parameter $a$ des logistischen Modells ' +
        '$N(t) = \\dfrac{K}{1 + a\\,e^{-rt}}$.',
      correctValue: 11,
      tolerance: 0.01,
    },
    hintKeys: [
      'Setze $t = 0$ ein: $N(0) = \\dfrac{K}{1 + a}$.',
      'Löse $\\dfrac{1200}{1 + a} = 100$ nach $a$ auf.',
    ],
    solutionKey:
      '$N(0) = \\dfrac{1200}{1 + a} = 100 \\Rightarrow 1 + a = 12 \\Rightarrow a = 11$. ' +
      'Gleichwertig über die Merkformel: $a = \\dfrac{K - N_0}{N_0} = \\dfrac{1100}{100} = 11$. ' +
      'Der Parameter $a$ ist damit anschaulich lesbar — er sagt, wie viele „leere Plätze" ' +
      'anfangs auf jedes vorhandene Tier kommen.',
    tags: ['logistisches-wachstum', 'parameterbestimmung', 'modellierung', 'ea'],
  },
  {
    id: 'lw-erw-003',
    topicId: '12-logistisches-wachstum',
    type: 'multiple-choice',
    diffLevel: 'erweitert',
    competencies: ['kritisches-denken', 'kommunikation'],
    points: 15,
    timeEstimate: 8,
    contextKey: 'Modellkritik',
    data: {
      questionText:
        'Eine Zeitung schreibt: „Die Nutzerzahlen der App wachsen exponentiell — bis 2030 hat sie ' +
        'mehr Nutzer als die Erde Einwohner." Welche Kritik trifft den Kern?',
      options: [
        {
          id: 'a',
          text: 'Exponentielles Wachstum ist nur die Anfangsphase. Sobald ein nennenswerter Anteil der möglichen Nutzer erreicht ist, bremst das Modell sich selbst — logistisch, nicht exponentiell.',
          correct: true,
        },
        {
          id: 'b',
          text: 'Exponentielle Modelle sind mathematisch falsch und dürfen nicht verwendet werden.',
          correct: false,
        },
        {
          id: 'c',
          text: 'Die Zeitung hätte lineares Wachstum annehmen müssen.',
          correct: false,
        },
        {
          id: 'd',
          text: 'Der Fehler liegt in der Jahreszahl, nicht im Modell.',
          correct: false,
        },
      ],
    },
    hintKeys: [
      'Frage nicht, ob das Modell stimmt, sondern in welchem Bereich es stimmt.',
      'Jedes Wachstumsmodell hat einen Gültigkeitsbereich — die Extrapolation über ihn hinaus ist der eigentliche Fehler.',
    ],
    solutionKey:
      'Richtig ist (a). Das exponentielle Modell ist nicht falsch, sondern **außerhalb seines ' +
      'Gültigkeitsbereichs benutzt**. Solange $N \\ll K$ ist, beschreibt es die Daten oft hervorragend — ' +
      'genau das verführt zur Extrapolation. ' +
      'Formal steckt der Unterschied im Bremsfaktor: $N\' = rN\\left(1 - \\frac{N}{K}\\right)$ geht für ' +
      'kleine $N$ in $N\' \\approx rN$ über, also in exponentielles Wachstum. ' +
      'Die exponentielle Kurve ist damit die Tangente der logistischen am Anfang — ' +
      'und Tangenten sind nur lokal gute Näherungen.',
    tags: ['modellkritik', 'logistisches-wachstum', 'gueltigkeitsbereich', 'ea'],
  },
];
