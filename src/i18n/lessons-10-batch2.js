export const batch2 = {
  '10-koerper': {
    story: {
      intro:
        'Mia starrt auf ihren Bildschirm. Die Level-Architektur von "Hafenlichter" braucht 3D-Objekte — Lagerhallen, Kräne, Container. Tim hat die Meshes modelliert, aber Lumi fragt: "Wie viel Speicher braucht jede Hitbox?" Mia grinst: "Dafür brauchen wir Volumenformeln."',
      challenge:
        'Berechne Volumina und Oberflächen von Pyramiden, Kegeln und Kugeln. Hilf Mia, die perfekten 3D-Hitboxen für ihr Hafenviertel zu bauen!',
      outro:
        'Die 3D-Körper sind berechnet, die Hitboxen sitzen. Tim testet den Kran-Level und ruft: "Die Kollisionen fühlen sich endlich realistisch an!" Mia lehnt sich zurück — Geometrie macht Games besser.',
    },
    objectives: {
      volume_pyramid: 'Das Volumen von Pyramiden mit der Drittels-Formel berechnen',
      volume_cone_sphere: 'Volumina von Kegeln und Kugeln sicher bestimmen',
      surface_area: 'Oberflächenformeln anwenden und Ergebnisse interpretieren',
      apply_3d: 'Körperberechnungen auf Alltagsprobleme und Game-Design übertragen',
    },
    explanation: {
      intro:
        'Dreidimensionale Körper haben Volumen (Rauminhalt) und Oberfläche. Bei Pyramiden und Kegeln steckt ein entscheidender Faktor in der Formel: der Drittel-Faktor $\\frac{1}{3}$. Er kommt daher, dass diese Körper "spitz zulaufen" — sie füllen nur ein Drittel des umschließenden Prismas bzw. Zylinders.',
      cone:
        'Ein Kegel ist wie eine "runde Pyramide" — seine Grundfläche ist ein Kreis mit Radius $r$. Die Formel hat dieselbe Struktur: ein Drittel mal Grundfläche mal Höhe, nur dass die Grundfläche $\\pi r^2$ beträgt.',
      mia_tip:
        'Mia: "Ich merke mir das so: Pyramide und Kegel sind die bescheidenen Geschwister von Prisma und Zylinder — sie nehmen nur ein Drittel vom Platz ein!"',
      sphere:
        'Die Kugel ist der Sonderfall: Sie hat keine Grundfläche und keine Höhe im klassischen Sinn. Ihr Volumen hängt nur vom Radius ab. Archimedes hat bewiesen, dass eine Kugel genau $\\frac{2}{3}$ des umschließenden Zylinders ausfüllt — daraus folgt die Formel.',
    },
    concepts: {
      pyramid: {
        title: 'Pyramidenvolumen',
        desc: 'Eine Pyramide hat ein Drittel des Volumens eines Prismas mit gleicher Grundfläche und Höhe. Die Grundfläche kann ein Rechteck, Dreieck oder beliebiges Vieleck sein.',
      },
      cone: {
        title: 'Kegelvolumen',
        desc: 'Der Kegel verhält sich zum Zylinder wie die Pyramide zum Prisma: Er füllt genau ein Drittel. Seine kreisförmige Grundfläche macht ihn besonders symmetrisch.',
      },
      sphere: {
        title: 'Kugelvolumen',
        desc: 'Die Kugel wird vollständig durch ihren Radius beschrieben. Die $\\frac{4}{3}$ in der Formel stammen aus der Integration — oder aus dem genialen Beweis von Archimedes.',
      },
    },
    examples: {
      icecream: {
        title: 'Eiswaffel berechnen',
        context:
          'Eine Eiswaffel hat die Form eines Kegels mit Radius $r = 3$ cm und Höhe $h = 12$ cm. Wie viel Eis passt hinein?',
        step1: 'Gegeben identifizieren: Die Waffel ist ein Kegel mit $r = 3$ cm und $h = 12$ cm.',
        step2: 'Kegelformel anwenden: Wir setzen in $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ ein und rechnen zuerst den Klammerausdruck aus.',
        step3: 'Ergebnis: Die Waffel fasst etwa $113{,}1\\,\\text{cm}^3$ Eis — das ist etwas mehr als ein Deziliter.',
        mia_comment:
          'Mia: "Krass, so eine Waffel fasst gar nicht so viel! Deshalb stapeln die immer eine Kugel oben drauf."',
      },
      hitbox: {
        title: 'Kugelförmige Hitbox',
        context:
          'In "Hafenlichter" soll eine Boje eine kugelförmige Hitbox mit Volumen $V = 904{,}8\\,\\text{cm}^3$ haben. Wie groß muss der Radius sein?',
        step1: 'Gegeben: Das Volumen der Kugel ist $V = 904{,}8\\,\\text{cm}^3$. Gesucht: der Radius $r$.',
        step2: 'Formel umstellen: Wir lösen $V = \\frac{4}{3} \\pi r^3$ nach $r^3$ auf, indem wir durch $\\frac{4}{3}\\pi$ teilen.',
        step3: 'Berechnen: $r^3 \\approx 215{,}9$ — jetzt ziehen wir die dritte Wurzel.',
        step4: 'Ergebnis: $r \\approx 6{,}0$ cm. Die Hitbox braucht einen Radius von 6 cm.',
        mia_comment:
          'Mia: "Rückwärts rechnen ist beim Game-Design Alltag — du weißt, was du willst, und musst die Parameter finden."',
      },
    },
    realworld: {
      packaging: {
        title: 'Verpackungsdesign',
        desc: 'Getränkedosen, Konserven, Flaschen — überall steckt Zylinderberechnung drin. Hersteller optimieren das Verhältnis von Volumen zu Materialverbrauch, um Kosten zu sparen.',
      },
      icecream: {
        title: 'Eiskugel-Mathematik',
        desc: 'Warum sieht eine "große" Eiskugel so viel größer aus? Weil das Volumen mit $r^3$ wächst! Doppelter Radius = achtfaches Volumen. Das erklärt auch, warum XXL-Menüs so profitabel sind.',
      },
      pizza: {
        title: 'Pizza-Vergleich',
        desc: 'Eine 30-cm-Pizza hat mehr Fläche als zwei 20-cm-Pizzen zusammen! $\\pi \\cdot 15^2 = 706{,}9$ vs. $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Größe lohnt sich.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Den Faktor $\\frac{1}{3}$ vergessen',
        correct: 'Bei Kegel und Pyramide IMMER $\\frac{1}{3}$ davor',
        why: 'Kegel und Pyramide füllen nur ein Drittel des umschließenden Zylinders bzw. Prismas. Ohne den Faktor berechnest du das Volumen des ganzen Zylinders — dreimal zu viel!',
        mia_warning:
          'Mia: "Ich hab mal alle Hitboxen ohne das Drittel berechnet. Die Bojen waren riesig und haben das ganze Hafenbecken blockiert. Tim war not amused."',
      },
      surface_volume: {
        wrong: 'Oberflächen- und Volumenformel der Kugel verwechseln',
        correct: 'Volumen: $\\frac{4}{3}\\pi r^3$ — Oberfläche: $4\\pi r^2$',
        why: 'Beim Volumen steht $r^3$ (kubisch, also Rauminhalt), bei der Oberfläche $r^2$ (quadratisch, also Flächeninhalt). Achte auf den Exponenten — er verrät dir, was du berechnest.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro:
        'Jule optimiert den Speicher von "Hafenlichter". "Unsere Texturen fressen 2 hoch 20 Bytes — wie viel ist das eigentlich?" Tim rechnet nach: "Warte, Potenzen kann ich..." Mia lacht: "Dann zeig mal, was du draufhast."',
      challenge:
        'Meistere die Potenzgesetze: Multipliziere, potenziere und vereinfache Potenzen. Hilf Tim, Speichergrößen und Renderzeiten blitzschnell zu berechnen!',
      outro:
        'Tim hat die Potenzgesetze drauf. Die Speicherberechnung geht jetzt in Sekunden. "Potenzen sind wie Cheat-Codes für große Zahlen", sagt er. Mia nickt: "Und für kleine auch — willkommen bei den negativen Exponenten."',
    },
    objectives: {
      multiply_powers: 'Potenzen mit gleicher Basis multiplizieren und dividieren',
      power_of_power: 'Potenz einer Potenz mit der Multiplikationsregel vereinfachen',
      negative_exponents: 'Negative Exponenten als Brüche interpretieren und umrechnen',
      apply_memory: 'Potenzgesetze auf Speichergrößen und wissenschaftliche Notation anwenden',
    },
    explanation: {
      intro:
        'Potenzen sind eine Kurzschreibweise für wiederholte Multiplikation: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Wenn du zwei Potenzen mit gleicher Basis multiplizierst, addierst du die Exponenten — denn du verlängerst einfach die Kette der Multiplikationen.',
      power_of_power:
        'Was passiert, wenn du eine Potenz nochmal potenzierst? $(a^m)^n$ bedeutet: Du multiplizierst $a^m$ genau $n$-mal mit sich selbst. Das ergibt $m \\cdot n$ Faktoren — also $a^{m \\cdot n}$. Die Exponenten werden multipliziert.',
      mia_tip:
        'Mia: "Gleiche Basis → Exponenten addieren. Potenz hoch Potenz → Exponenten multiplizieren. Verschiedene Basen → ausrechnen, da gibt es keine Abkürzung!"',
      negative:
        'Ein negativer Exponent dreht die Potenz um: $a^{-n} = \\frac{1}{a^n}$. Das ist keine willkürliche Definition — es folgt logisch aus dem Muster: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Jeder Schritt teilt durch die Basis.',
    },
    concepts: {
      product_rule: {
        title: 'Produktregel',
        desc: 'Gleiche Basis, verschiedene Exponenten? Beim Multiplizieren werden die Exponenten addiert, beim Dividieren subtrahiert. Das funktioniert NUR bei gleicher Basis!',
      },
      power_rule: {
        title: 'Potenzregel',
        desc: 'Eine Potenz wird nochmal potenziert? Dann multipliziere die Exponenten. $(a^3)^4 = a^{12}$ — zwölf Faktoren $a$ insgesamt.',
      },
      negative_exp: {
        title: 'Negativer Exponent',
        desc: 'Ein Minus im Exponenten bedeutet "eins geteilt durch". So werden aus großen Zahlen kleine: $10^{-6}$ ist ein Millionstel. Perfekt für Mikrochips und Millisekunden.',
      },
    },
    examples: {
      simplify: {
        title: 'Speicher berechnen',
        context:
          'Tim will wissen: Wie viel sind $2^3 \\cdot 2^4$ Byte? In der Informatik ist das eine typische Rechnung mit Zweierpotenzen.',
        step1: 'Produktregel anwenden: Gleiche Basis $2$, also addieren wir die Exponenten: $3 + 4 = 7$.',
        step2: 'Ausrechnen: $2^7 = 128$ Byte.',
        step3: 'Einordnen: 128 Byte — das ist fast 1 Kilobyte (das wären genau $2^{10} = 1024$).',
        mia_comment:
          'Mia: "In der Informatik sind Zweierpotenzen überall. RAM, Texturen, Farbtiefen — alles Potenzen von 2!"',
      },
      negative: {
        title: 'Millisekunden umrechnen',
        context:
          'Ein Frame in "Hafenlichter" wird in $10^{-3}$ Sekunden berechnet. Was bedeutet das in Dezimalschreibweise?',
        step1: 'Negativen Exponenten anwenden: $10^{-3}$ bedeutet $\\frac{1}{10^3}$.',
        step2: 'Ausrechnen: $\\frac{1}{1000} = 0{,}001$ Sekunden.',
        step3: 'Einordnen: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — eine Millisekunde. Bei 60 fps hat jedes Frame etwa 16 ms Zeit.',
        mia_comment:
          'Mia: "Negative Exponenten klingen scary, aber sie bedeuten einfach: kleine Zahlen. $10^{-3}$ = Milli, $10^{-6}$ = Mikro, $10^{-9}$ = Nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Digitaler Speicher',
        desc: 'Dein Handy hat 256 GB? Das sind $2^{38}$ Byte, also über 274 Milliarden Bytes. Jede Verdopplung des Speichers ist nur ein +1 beim Exponenten — darum wächst Technologie so schnell.',
      },
      richter: {
        title: 'Richterskala',
        desc: 'Ein Erdbeben der Stärke 6 ist nicht doppelt so stark wie Stärke 3 — sondern tausendmal! Jede Stufe bedeutet $10 \\times$ mehr Energie. Potenzen machen den Unterschied erlebbar.',
      },
      decibel: {
        title: 'Dezibel und Lautstärke',
        desc: 'Kopfhörer auf 100 dB sind $10^{10}$-mal intensiver als die Hörschwelle (0 dB). Jede +10 dB = zehnfache Intensität. Deine Ohren rechnen logarithmisch — also mit Potenzen!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Basen multiplizieren statt Exponenten addieren',
        correct: 'Die Produktregel gilt NUR bei gleicher Basis',
        why: 'Bei $2^3 \\cdot 3^2$ sind die Basen verschieden (2 und 3). Hier kannst du keine Potenzregel anwenden — du musst einzeln ausrechnen: $8 \\cdot 9 = 72$. Die Exponenten zu addieren und die Basen zu multiplizieren ist ein häufiger Fehler!',
        mia_warning:
          'Mia: "Verschiedene Basen = keine Abkürzung. Punkt. Ich hab das mal im Code falsch gemacht und die Texturen waren alle zerstört."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "hoch null ist null"',
        correct: '$a^0 = 1$ für alle $a \\neq 0$',
        why: 'Folge dem Muster: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — jeder Schritt teilt durch 2. Also $2^0 = 1$. Das gilt für JEDE Basis (außer 0). Null ist das neutrale Element der Addition, nicht der Multiplikation.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro:
        'Mia scrollt durch die Asset-Library von "Hafenlichter". Die Hamburger Speicherstadt hat Gebäude in allen Größen — aber sie sollen alle proportional aussehen. Lumi fragt: "Können wir nicht einfach alles skalieren?" Mia nickt: "Genau. Das ist Ähnlichkeit."',
      challenge:
        'Verstehe ähnliche Dreiecke, Skalierungsfaktoren und den Strahlensatz. Hilf Mia, das Hafenviertel proportional zu skalieren!',
      outro:
        'Die Speicherstadt in "Hafenlichter" sieht fantastisch aus — jedes Gebäude ist proportional, jede Brücke passt. Jule bewundert das Ergebnis: "Als wäre es ein echtes Modell!" Mia lächelt: "Ist es auch. Mathematisch exakt."',
    },
    objectives: {
      similar_triangles: 'Ähnliche Dreiecke erkennen und ihre Eigenschaften beschreiben',
      scale_factor: 'Den Skalierungsfaktor $k$ berechnen und anwenden',
      intercept_theorem: 'Den Strahlensatz auf geometrische Probleme anwenden',
      apply_scaling: 'Ähnlichkeit in Architektur, Kartografie und Game-Design nutzen',
    },
    explanation: {
      intro:
        'Zwei Figuren sind ähnlich, wenn sie die gleiche Form haben, aber unterschiedlich groß sein dürfen. Bei Dreiecken reicht es, wenn alle Winkel übereinstimmen — dann sind automatisch alle Seitenverhältnisse gleich. Das Verhältnis von Bild zu Original heißt Skalierungsfaktor $k$.',
      scale_factor:
        'Der Skalierungsfaktor $k$ sagt dir, um wie viel vergrößert oder verkleinert wurde. $k > 1$ bedeutet Vergrößerung, $k < 1$ Verkleinerung, $k = 1$ heißt kongruent (deckungsgleich). Wichtig: $k$ bezieht sich auf Längen — Flächen skalieren mit $k^2$, Volumina mit $k^3$!',
      mia_tip:
        'Mia: "In der Game-Engine arbeiten wir ständig mit Scale-Faktoren. Ein Sprite mit scale 0.5 ist halb so groß, scale 2.0 doppelt. Genau wie in der Geometrie!"',
      intercept:
        'Der Strahlensatz beschreibt, was passiert, wenn parallele Geraden von zwei Strahlen geschnitten werden: Die Abschnitte auf den Strahlen sind proportional. Damit kannst du unbekannte Strecken berechnen, ohne alles nachmessen zu müssen.',
    },
    concepts: {
      similar_triangles: {
        title: 'Ähnliche Dreiecke',
        desc: 'Zwei Dreiecke sind ähnlich, wenn sie in allen Winkeln übereinstimmen. Dann gilt: Alle Seitenverhältnisse sind gleich. Das schreibt man $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Skalierungsfaktor',
        desc: 'Der Faktor $k = \\frac{\\text{Bild}}{\\text{Original}}$ beschreibt die Vergrößerung oder Verkleinerung. $k = 2$ heißt: alles doppelt so groß. $k = 0{,}5$ heißt: alles halb so groß.',
      },
      intercept_theorem: {
        title: 'Strahlensatz',
        desc: 'Werden zwei Strahlen von parallelen Geraden geschnitten, sind die entstehenden Abschnitte proportional. Ein mächtiges Werkzeug, um fehlende Längen zu berechnen.',
      },
    },
    examples: {
      model: {
        title: 'Gebäude skalieren',
        context:
          'Ein Hamburger Speicher ist im Maßstab $1:100$ als 3D-Modell gebaut. Das Modell ist $3{,}5$ cm hoch. Wie hoch ist das echte Gebäude?',
        step1: 'Skalierungsfaktor bestimmen: $k = \\frac{1}{100}$ bedeutet, das Modell ist 100-mal kleiner als das Original.',
        step2: 'Modellhöhe ablesen: $h_{\\text{Modell}} = 3{,}5$ cm.',
        step3: 'Rückrechnen: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Das Gebäude ist 3,5 Meter hoch.',
        mia_comment:
          'Mia: "Genau so arbeiten wir in Hafenlichter. Wir bauen die Speicherstadt als Modell und skalieren alles proportional ins Spiel."',
      },
      intercept: {
        title: 'Strahlensatz anwenden',
        context:
          'Zwei Strahlen werden von parallelen Geraden geschnitten. Die Abschnitte auf dem einen Strahl sind 4 und 6, auf dem anderen ist der erste Abschnitt 9. Wie lang ist der zweite Abschnitt $x$?',
        step1: 'Strahlensatz aufstellen: Die Verhältnisse der Abschnitte auf beiden Strahlen sind gleich: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Kreuz multiplizieren: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Ergebnis: $x = 6$. Der zweite Abschnitt ist 6 Einheiten lang.',
        mia_comment:
          'Mia: "Der Strahlensatz ist wie Auto-Layout in der Game-Engine — du gibst ein Verhältnis vor, und alles andere passt sich proportional an."',
      },
    },
    realworld: {
      maps: {
        title: 'Landkarten & Navigation',
        desc: 'Google Maps zeigt die Welt im Maßstab. Zoomstufe 15 entspricht etwa $1:18.000$. Jede Zoomstufe verdoppelt den Skalierungsfaktor — genau wie Ähnlichkeit in der Geometrie.',
      },
      architecture: {
        title: 'Architekturmodelle',
        desc: 'Bevor die Elbphilharmonie gebaut wurde, gab es Modelle im Maßstab $1:500$. Architekten nutzen Ähnlichkeit, um aus kleinen Modellen auf reale Maße zu schließen — und umgekehrt.',
      },
      instagram: {
        title: 'Bilder skalieren',
        desc: 'Wenn du ein Foto für Instagram zuschneidest, ändert sich der Maßstab. "Fit to screen" skaliert proportional (ähnlich), "Stretch" verzerrt (nicht ähnlich). Dein Auge erkennt den Unterschied sofort!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Ähnlich" und "kongruent" sind dasselbe',
        correct: 'Ähnlich = gleiche Form. Kongruent = gleiche Form UND gleiche Größe',
        why: 'Kongruenz ist ein Spezialfall von Ähnlichkeit mit $k = 1$. Alle kongruenten Dreiecke sind ähnlich, aber nicht alle ähnlichen Dreiecke sind kongruent. Ähnlich bedeutet: gleiche Winkel, aber die Seiten dürfen proportional verschieden lang sein.',
        mia_warning:
          'Mia: "In der Game-Engine: Kongruent = Copy. Ähnlich = Copy + Scale. Wenn du ein Haus kopierst und skalierst, ist es ähnlich. Ohne Skalierung ist es kongruent."',
      },
      scale_direction: {
        wrong: 'Skalierungsfaktor falsch herum aufstellen',
        correct: 'Immer $k = \\frac{\\text{Bild}}{\\text{Original}}$',
        why: 'Wenn das Bild größer als das Original ist, muss $k > 1$ sein. Stellst du den Bruch falsch herum auf, bekommst du $k < 1$ und denkst, es wurde verkleinert. Merke: Bild oben, Original unten.',
      },
    },
  },
};
