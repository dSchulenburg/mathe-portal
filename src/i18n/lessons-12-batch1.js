export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Das Partikelsystem von "Hafenlichter 3D" sieht grandios aus — Funken sprühen, Nebel wabert, Feuer lodert. Aber Kai hat ein Performance-Problem: Tausende Partikel gleichzeitig bringen die GPU ins Schwitzen. "Ich muss berechnen, wie schnell Partikel verblassen, damit ich sie rechtzeitig aus dem Speicher werfe", erklärt er Mia. Die Antwort liegt in der $e$-Funktion und ihrem Gegenstück, dem natürlichen Logarithmus — den Werkzeugen für alles, was exponentiell wächst oder zerfällt.',
      challenge: 'Kai muss die Lebensdauer von Partikeln mathematisch modellieren: Wie schnell verblasst ein Funke? Wann ist eine Rauchpartikel so transparent, dass sie gelöscht werden kann? Dafür braucht er die Kettenregel für $e$-Funktionen, Ableitungen von $\\ln$ und das Lösen von Zerfallsgleichungen.',
      outro: 'Mit verketteten $e$-Funktionen und $\\ln$-Ableitungen hat Kai ein smartes Partikelsystem gebaut: Jeder Funke folgt einer präzisen Zerfallskurve, jede Rauchpartikel wird exakt dann recycelt, wenn ihre Opazität unter die Wahrnehmungsschwelle faellt. "Die Kettenregel ist quasi mein Performance-Optimizer", grinst Kai. "Die GPU dankt es mir mit 60 statt 30 FPS." Mia ergänzt: "Und das Beste — dieselbe Mathematik beschreibt auch radioaktiven Zerfall und Ladekurven von Kondensatoren."',
    },
    objectives: {
      advanced_e_properties: 'Verkettete $e$-Funktionen mit der Kettenregel ableiten: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Die Ableitung von $\\ln(g(x))$ beherrschen und für Kurvendiskussionen nutzen',
      composite_exp_functions: 'Produkte aus Polynomen und $e$-Funktionen analysieren (Extrema, Wendepunkte)',
      differential_equations: 'Einfache Differentialgleichungen vom Typ $f\'(t) = k \\cdot f(t)$ verstehen und Zerfallsmodelle aufstellen',
    },
    explanation: {
      intro: 'In Klasse 11 hast du die Grundlagen von $e^x$ und $\\ln(x)$ gelernt. Jetzt wird es ernst: Wir leiten verkettete $e$-Funktionen ab, analysieren Kurven mit $\\ln$ und lösen Zerfallsgleichungen. Der Schlüssel ist die Kettenregel — wenn im Exponenten nicht nur $x$ steht, sondern eine ganze Funktion $g(x)$, dann liefert die äußere Ableitung $e^{g(x)}$ und die innere Ableitung $g\'(x)$ kommt als Faktor dazu:',
      ln_derivative: 'Genauso elegant: Die Ableitung von $\\ln(g(x))$ mit der Kettenregel. Der natürliche Logarithmus "dreht die Funktion um" — die innere Ableitung steht im Zähler, die innere Funktion selbst im Nenner:',
      kai_tip: 'In meiner 3D-Engine tauchen $e$-Funktionen überall auf: Partikel-Zerfall, Nebel-Dichte, Audio-Fadeout. Der Trick ist immer derselbe — die Kettenregel. Wenn ich $e^{-0{,}5t^2}$ für eine Gauss-Verteilung ableite, ist die innere Funktion $g(t) = -0{,}5t^2$ und die innere Ableitung $g\'(t) = -t$. Einsetzen, fertig. Sobald du dieses Muster einmal draufhast, läuft es automatisch!',
      integration: 'Beim Integrieren läuft der Prozess rückwärts. Für einfache Exponentialfunktionen gilt: Der Faktor im Exponenten wandert in den Nenner. Und die berühmte $\\frac{1}{x}$-Regel führt direkt zum $\\ln$:',
      decay_model: 'Exponentieller Zerfall ist DAS Standardmodell für Prozesse, bei denen die Änderungsrate proportional zum aktuellen Wert ist: $f\'(t) = -\\lambda \\cdot f(t)$. Die Lösung ist immer eine $e$-Funktion mit negativem Exponenten. Die Halbwertszeit $t_{1/2}$ gibt an, nach welcher Zeit die Hälfte des Ausgangswerts übrig ist:',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Kettenregel für $e$-Funktionen',
        desc: 'Bei $f(x) = e^{g(x)}$ ist die äußere Funktion $e^u$ (Ableitung: $e^u$) und die innere Funktion $g(x)$. Das Ergebnis: Die $e$-Funktion bleibt stehen, multipliziert mit der inneren Ableitung. Beispiel: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Ableitung von $\\ln(g(x))$',
        desc: 'Die Kettenregel für den Logarithmus erzeugt einen Bruch: innere Ableitung durch innere Funktion. Das ist besonders nützlich, wenn $g(x)$ ein Polynom ist — z.B. $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Wichtig: Der Definitionsbereich wird durch $g(x) > 0$ eingeschraenkt.',
      },
      exp_integration: {
        title: 'Logarithmische Integration',
        desc: 'Wenn ein Integrand die Form $\\frac{f\'(x)}{f(x)}$ hat, ist die Stammfunktion sofort $\\ln|f(x)| + C$. Das ist die Umkehrung der $\\ln$-Ableitung und einer der wichtigsten Integrationstricks. Beispiel: $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Partikelzerfall modellieren',
        context: 'In Kais Partikelsystem starten 5000 Funkenpartikel gleichzeitig. Ihre Anzahl nimmt exponentiell ab — Kai will die Zerfallsrate und die Halbwertszeit berechnen.',
        step1: 'Zerfallsmodell aufstellen — $N_0 = 5000$ Partikel, Zerfallskonstante $\\lambda = 0{,}03\\,\\text{s}^{-1}$:',
        step2: 'Ableiten mit der Kettenregel — innere Funktion $g(t) = -0{,}03t$, innere Ableitung $g\'(t) = -0{,}03$:',
        step3: 'Anfangsrate berechnen — bei $t = 0$ verschwinden 150 Partikel pro Sekunde:',
        step4: 'Halbwertszeit bestimmen — $N(t_{1/2}) = \\frac{N_0}{2}$ aufloesen mit $\\ln$:',
        kai_comment: 'Nach 23 Sekunden ist die Hälfte der Partikel weg — das heisst, ich kann schon vorher Speicher freigeben für die nächste Explosion. In der Engine setze ich die Kill-Schwelle bei $5\\%$ Opazität, das sind etwa $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Kurvendiskussion mit $e$-Funktion',
        context: 'Kai modelliert die Helligkeit eines Lichtblitzes: Erst steigt sie an, dann faellt sie ab. Die Helligkeitskurve hat die Form $f(x) = x^2 \\cdot e^{-x}$ — eine typische "Aufblitz-Funktion".',
        step1: 'Funktion gegeben — Produkt aus Polynom und abklingender $e$-Funktion:',
        step2: 'Ableitung mit der Produktregel: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — für den zweiten Faktor brauchen wir die Kettenregel:',
        step3: 'Nullstellen der Ableitung: $e^{-x} > 0$ immer, also entscheidet nur $x(2-x) = 0$:',
        step4: 'Maximum bestimmen — bei $x = 2$ den Funktionswert ausrechnen:',
        kai_comment: 'Diese "Anstieg-dann-Abfall"-Kurve ist perfekt für Lichteffekte. Bei $x = 0$ ist alles dunkel, bei $x = 2$ maximale Helligkeit, danach sanftes Abklingen. In meinem Shader nutze ich genau diese Funktion für Muzzle Flash und Explosionsblitze!',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Partikelsysteme in 3D-Engines',
        desc: 'Jeder Funke, jede Rauchfahne, jedes Feuer in einem Videospiel folgt einer exponentiellen Zerfallskurve $N(t) = N_0 \\cdot e^{-\\lambda t}$. Die Zerfallskonstante $\\lambda$ bestimmt, wie schnell Partikel verblassen. In Unity und Unreal Engine stellst du genau diesen Parameter ein, wenn du "Lifetime" und "Fade" konfigurierst.',
      },
      signal_processing: {
        title: 'Audioverarbeitung & Signaldaempfung',
        desc: 'Wenn du in GarageBand oder einem DJ-Tool einen Hall-Effekt hörst, klingt der Ton exponentiell ab: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. Die $e$-Funktion steuert die Lautstaerke, der $\\sin$ die Schwingung. Auch Bluetooth-Signale und WLAN-Reichweite folgen diesem Modell — deshalb wird das Streaming ruckelig, je weiter du vom Router weg bist.',
      },
      learning_curve: {
        title: 'Lernkurve & Skill-Progression',
        desc: 'Wie schnell lernst du ein neues Spiel? Die Lernkurve $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ beschreibt, wie Faehigkeiten anfangs schnell wachsen und sich dann einem Maximum nähern. Spieledesigner nutzen dieses Modell, um Schwierigkeitskurven zu designen — und auch dein Gehirn folgt beim Vokabellernen oder Instrumentueben genau dieser Funktion.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Innere Ableitung vergessen: $(e^{3x})\' = e^{3x}$',
        correct: 'Kettenregel anwenden: $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'Sobald im Exponenten mehr als nur $x$ steht, MUSS die Kettenregel ran. Die innere Funktion hier ist $g(x) = 3x$ mit $g\'(x) = 3$. Dieser Faktor darf nicht fehlen!',
        kai_warning: 'In meinem Shader hatte ich mal $e^{-0{,}5t^2}$ abgeleitet und den Faktor $-t$ vergessen. Ergebnis: Partikel, die sich nie verändert haben — wie eingefrorener Rauch. Seitdem prüfe ich jedes Mal: Steht mehr als $x$ im Exponenten? Dann Kettenregel!',
      },
      ln_negative: {
        wrong: 'Betragsstriche vergessen: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Korrekt mit Betrag: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'Die Funktion $\\frac{1}{x}$ ist auch für negative $x$-Werte definiert, aber $\\ln(x)$ nur für $x > 0$. Die Betragsstriche stellen sicher, dass die Stammfunktion auf dem gesamten Definitionsbereich gilt. In bestimmten Integralen mit positiven Grenzen kannst du die Striche weglassen — bei unbestimmten Integralen nie!',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Für "Hafenlichter 3D" baut Kai einen prozeduralen Level-Generator: Bruecken, Tunnel und Haeuser sollen aus mathematischen Kurven entstehen, die um Achsen rotiert werden. "Stellt euch vor, ich definiere ein Profil und lasse es rotieren — schon habe ich eine Saeule, eine Kuppel oder ein Schiffsrumpf", schwaermt Kai. Aber wie berechnet er das exakte Volumen dieser 3D-Koerper? Die Antwort: Rotationsvolumina, partielle Integration und ein paar elegante Integrationstechniken.',
      challenge: 'Kai muss Volumen von 3D-Objekten berechnen, die durch Rotation von Kurven entstehen. Ausserdem braucht er partielle Integration für komplexe Beleuchtungsformeln und muss prüfen, ob bestimmte Integrale überhaupt konvergieren.',
      outro: 'Der Level-Generator läuft: Kai dreht Kurvenprofile um Achsen und erhaelt perfekte 3D-Koerper mit exakt berechnetem Volumen. "Partielle Integration war der Schlüssel für die Beleuchtungs-Integrale", erzaehlt er Amir, "und uneigentliche Integrale zeigen mir, wann ein Lichteffekt endliche Gesamtenergie hat — selbst wenn er theoretisch unendlich weit reicht." Mia nickt: "Dieselbe Mathematik nutzen Ingenieure, um Behaelter zu dimensionieren und Physiker, um Wellenenergie zu berechnen."',
    },
    objectives: {
      integration_techniques: 'Partielle Integration und Substitution sicher anwenden',
      rotation_volumes: 'Rotationsvolumina um die $x$-Achse berechnen mit $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Uneigentliche Integrale auf Konvergenz prüfen und berechnen',
      partial_integration: 'Die Methode der partiellen Integration gezielt einsetzen, wenn Produkte integriert werden müssen',
    },
    explanation: {
      intro: 'In Klasse 11 hast du bestimmte Integrale als Flaecheninhalt kennengelernt. Jetzt kommen drei neue Techniken dazu. Die erste ist die partielle Integration — die "Umkehrung" der Produktregel. Wenn du ein Produkt wie $x \\cdot e^x$ integrieren musst, zerlegst du es in $u$ und $v\'$:',
      substitution: 'Die zweite Technik ist die Substitution — die "Umkehrung" der Kettenregel beim Ableiten. Wenn eine Funktion "in einer anderen steckt", ersetzt du die innere Funktion durch eine neue Variable:',
      kai_tip: 'Mein Trick für partielle Integration: "LIATE" — Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponentiell. Das ist die Reihenfolge, in der du $u$ wählst. Also bei $\\int x \\cdot e^x\\,\\mathrm{d}x$ ist $u = x$ (algebraisch) und $v\' = e^x$ (exponentiell). Bei $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$ ist $u = \\ln(x)$ und $v\' = x$. Funktioniert fast immer!',
      rotation_volume: 'Jetzt wird es dreidimensional: Wenn du den Graphen von $f(x)$ um die $x$-Achse rotierst, entsteht ein Rotationskoerper. Sein Volumen berechnest du, indem du dir den Koerper aus unendlich vielen duennen Kreisscheiben zusammengesetzt vorstellst — jede Scheibe hat den Radius $f(x)$:',
      improper: 'Was passiert, wenn eine Integrationsgrenze $\\infty$ ist? Oder der Integrand an einer Stelle unbeschraenkt wird? Dann sprechen wir von uneigentlichen Integralen. Du ersetzt die Problemstelle durch einen Grenzwert und prüfst, ob ein endlicher Wert herauskommt:',
    },
    concepts: {
      partial_integration: {
        title: 'Partielle Integration',
        desc: 'Die Umkehrung der Produktregel: Du zerlegst den Integranden in $u$ (wird abgeleitet) und $\\mathrm{d}v$ (wird integriert). Ziel: Das neue Integral $\\int v\\,\\mathrm{d}u$ muss einfacher sein als das urspruengliche. Typische Anwendung: Produkte aus Polynom und $e$-Funktion oder Polynom und Trigonometrie.',
      },
      rotation_volume: {
        title: 'Rotationsvolumen',
        desc: 'Ein Funktionsgraph, der um die $x$-Achse rotiert, erzeugt einen 3D-Koerper. Das Volumen ergibt sich aus der Summe unendlich vieler Kreisscheiben mit Radius $f(x)$ und Dicke $\\mathrm{d}x$. Jede Scheibe hat das Volumen $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$ — aufsummiert (integriert) ergibt das die Formel.',
      },
      improper_integral: {
        title: 'Uneigentliche Integrale',
        desc: 'Integrale mit $\\infty$ als Grenze oder unbeschraenktem Integranden. Du ersetzt die Problemstelle durch eine Variable und bildest den Grenzwert. Wenn der Grenzwert existiert und endlich ist, heisst das Integral konvergent — sonst divergent. Klassiker: $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ konvergiert, aber $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ divergiert.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Rotationskoerper für Level-Design',
        context: 'Kai will eine Saeule generieren, deren Profil der Kurve $f(x) = \\sqrt{x}$ folgt. Zwischen $x = 0$ und $x = 4$ rotiert die Kurve um die $x$-Achse — wie groß ist das Volumen der Saeule?',
        step1: 'Profil definieren — die Wurzelfunktion auf dem Intervall $[0;\\,4]$:',
        step2: 'Rotationsvolumen-Formel ansetzen — $f(x)$ quadrieren und $\\pi$ davor:',
        step3: 'Stammfunktion bilden und Grenzen einsetzen:',
        step4: 'Ergebnis — die Saeule hat ein Volumen von $8\\pi$ Volumeneinheiten:',
        kai_comment: 'Das ist genau die Formel, die mein prozeduraler Generator nutzt! Ich definiere Kurvenprofile, rotiere sie und kenne sofort das Volumen — wichtig für Physik-Simulationen, damit Objekte das richtige Gewicht haben.',
      },
      partial_int: {
        title: 'Partielle Integration für Beleuchtung',
        context: 'In Kais Lichtberechnungs-Shader taucht das Integral $\\int x \\cdot e^x\\,\\mathrm{d}x$ auf — ein Produkt, das nicht direkt integrierbar ist.',
        step1: 'Zerlegung wählen: $u = x$ (wird einfacher beim Ableiten), $v\' = e^x$ (laesst sich leicht integrieren):',
        step2: 'Ableitungen und Stammfunktionen bestimmen:',
        step3: 'In die Formel einsetzen — das neue Integral ist jetzt nur noch $\\int e^x\\,\\mathrm{d}x$:',
        step4: 'Fertig vereinfachen — ausklammern ergibt eine elegante Form:',
        kai_comment: 'Der Moment, wenn das neue Integral einfacher ist als das alte — das ist das Erfolgserlebnis bei partieller Integration. Wenn es komplizierter wird, hast du $u$ und $v\'$ falsch gewählt. Dann einfach tauschen!',
      },
    },
    realworld: {
      '3d_printing': {
        title: '3D-Druck & CAD-Volumenberechnung',
        desc: 'Jeder 3D-Drucker muss wissen, wie viel Material er braucht. Bei rotationssymmetrischen Teilen (Vasen, Roehren, Duesen) berechnet die Slicer-Software das Volumen mit genau dieser Rotationsformel. Auch in CAD-Programmen wie Fusion 360 steckt Integralrechnung — wenn du einen Querschnitt rotierst, rechnet die Software $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Licht-Falloff in Game-Engines',
        desc: 'Wie viel Gesamtlicht empfaengt eine Szene von einer Punktlichtquelle? Die Intensität nimmt mit $I(r) = I_0 \\cdot e^{-\\alpha r}$ ab. Das uneigentliche Integral $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ zeigt: Die Gesamtenergie ist endlich! Deshalb können Game-Engines Lichter mit begrenzter Reichweite simulieren, ohne physikalisch falsch zu liegen.',
      },
      terrain_volume: {
        title: 'Terrain-Generierung & Erdarbeiten',
        desc: 'Bei Strassenbauprojekten und in Minecraft-artigen Spielen muss das Volumen von Huegellandschaften berechnet werden. Die Formel $V = \\iint h(x,y)\\,\\mathrm{d}A$ summiert die Höhe über die gesamte Flaeche auf — ein zweidimensionales Integral. Bauingenieure berechnen damit Erdaushub, Spieleentwickler die Datenmenge für Terrain-Meshes.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Quadrieren vergessen: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Korrekt quadriert: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Jede Kreisscheibe hat die Flaeche $\\pi r^2$ mit $r = f(x)$. Ohne das Quadrieren berechnest du keine Kreisflaeche, sondern etwas voellig anderes. Eselsbruecke: "Pi-r-Quadrat" — das Quadrat gehört zur Kreisformel!',
        kai_warning: 'Ich habe diesen Fehler mal bei einem Game-Jam gemacht — meine Saeule hatte nur ein Bruchteil des korrekten Volumens und ist in der Physik-Simulation zusammengeklappt. Seitdem schreibe ich mir die Formel immer groß an den Monitor: $V = \\pi \\int [f(x)]^2$!',
      },
      improper_no_limit: {
        wrong: 'Direkt $\\infty$ einsetzen statt Grenzwert zu bilden',
        correct: 'Grenzwert korrekt formulieren und Konvergenz prüfen',
        why: '$\\infty$ ist keine Zahl, die man einsetzen kann! Du musst immer den Grenzwert $\\lim_{b \\to \\infty}$ bilden und prüfen, ob er existiert. Sonst übersieht man leicht, dass ein Integral divergiert — wie bei $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, das trotz abnehmender Funktion keinen endlichen Wert hat.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: 'Die 3D-Welt von "Hafenlichter 3D" nimmt Gestalt an: Hafenkraene, Gebaeudefassaden, Wasserflaechen — alles besteht aus Dreiecken, und jedes Dreieck liegt in einer Ebene. "Für realistische Beleuchtung muss ich für jede Flaeche den Normalenvektor berechnen", erklärt Kai. "Und für Collision Detection brauche ich Schnittpunkte von Geraden mit Ebenen." Willkommen in der analytischen Geometrie des Raums — der Mathematik hinter jeder 3D-Engine.',
      challenge: 'Kai muss Ebenengleichungen aus drei Punkten aufstellen, Normalenvektoren per Kreuzprodukt berechnen, Gerade-Ebene-Schnittpunkte finden und Abständde zwischen Objekten bestimmen — alles in Echtzeit für seine Game-Engine.',
      outro: 'Kais Collision-Detection-System funktioniert einwandfrei: Geschosse treffen Waende, Charaktere stehen auf Boeden, und die Beleuchtung berechnet für jede Flaeche den perfekten Lichteinfall über Normalenvektoren. "Das Kreuzprodukt ist mein meistgenutztes Tool", sagt Kai. "Zwei Richtungsvektoren rein, Normalenvektor raus — und schon weiss ich, wie die Flaeche im Raum steht." Amir ergänzt: "Und die Abstandsformel checkt, ob ein Spieler nah genug an einem Objekt ist, um es aufzuheben."',
    },
    objectives: {
      plane_equations: 'Ebenengleichungen in Parameter-, Normalen- und Koordinatenform aufstellen und ineinander umwandeln',
      line_plane_intersection: 'Schnittpunkte von Geraden mit Ebenen berechnen und Lagebeziehungen bestimmen',
      distances_3d: 'Abständde im Raum berechnen: Punkt-Ebene, Punkt-Gerade und Gerade-Gerade',
      cross_product: 'Das Kreuzprodukt beherrschen und zur Normalenvektor-Berechnung einsetzen',
    },
    explanation: {
      intro: 'Ebenen im dreidimensionalen Raum kannst du auf verschiedene Arten beschreiben. Die Parameterform startet bei einem Stuetzpunkt $\\vec{a}$ und spannt die Ebene mit zwei Richtungsvektoren $\\vec{u}$ und $\\vec{v}$ auf. Jeder Punkt der Ebene laesst sich durch passende Werte für $r$ und $s$ erreichen:',
      normal_form: 'Eleganter ist oft die Normalenform: Ein Vektor $\\vec{n}$, der senkrecht auf der Ebene steht (der Normalenvektor), und ein Punkt $\\vec{a}$ in der Ebene genuegen, um die gesamte Ebene zu beschreiben. Daraus laesst sich die Koordinatenform ableiten — eine einzelne Gleichung mit $x_1$, $x_2$ und $x_3$:',
      kai_tip: 'In meiner 3D-Engine speichere ich jede Flaeche in Koordinatenform — drei Koeffizienten und eine Konstante, das wars. Zum Rendern brauche ich den Normalenvektor für die Beleuchtung ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$ — das Skalarprodukt mit dem Lichtvektor gibt den Helligkeitswert). Und für Physik brauche ich Schnittpunkte und Abständde. Alle drei Formen sind nützlich — jede für einen anderen Zweck!',
      cross_product: 'Das Kreuzprodukt $\\vec{u} \\times \\vec{v}$ liefert einen Vektor, der senkrecht auf beiden Eingabevektoren steht — perfekt, um aus zwei Richtungsvektoren den Normalenvektor zu berechnen. Achtung: Die Reihenfolge ist wichtig (antikommutativ)!',
      distance_point_plane: 'Der Abstand eines Punktes $P$ von einer Ebene $E$ laesst sich mit der Hesseschen Normalform elegant berechnen. Du setzt den Punkt in die Koordinatengleichung ein, nimmst den Betrag und teilst durch die Laenge des Normalenvektors:',
    },
    concepts: {
      plane_equation: {
        title: 'Ebenengleichung in Koordinatenform',
        desc: 'Die kompakteste Darstellung einer Ebene: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. Die Koeffizienten $n_1, n_2, n_3$ sind die Komponenten des Normalenvektors, $d$ ergibt sich durch Einsetzen eines bekannten Ebenenpunkts. Jeder Punkt $(x_1, x_2, x_3)$, der die Gleichung erfuellt, liegt in der Ebene.',
      },
      cross_product: {
        title: 'Kreuzprodukt',
        desc: 'Das Kreuzprodukt zweier Vektoren $\\vec{u}$ und $\\vec{v}$ liefert einen neuen Vektor $\\vec{n}$, der senkrecht auf beiden steht. Sein Betrag $|\\vec{u} \\times \\vec{v}|$ entspricht der Flaeche des aufgespannten Parallelogramms. Wichtig: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ — die Reihenfolge bestimmt die Richtung!',
      },
      distance_formula: {
        title: 'Abstand Punkt-Ebene',
        desc: 'Der kürzeste Abstand eines Punktes $P$ zu einer Ebene ist die Laenge des Lots von $P$ auf die Ebene. Die Formel $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ berechnet diesen Abstand direkt aus der Koordinatenform. Der Betrag im Zähler ist entscheidend — ohne ihn könnte ein negativer "Abstand" herauskommen.',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Ebene aus drei Eckpunkten',
        context: 'Kai hat ein Dreieck in seiner Game-Welt mit den Eckpunkten $A(1|0|2)$, $B(3|1|0)$ und $C(0|4|1)$. Er braucht die Ebenengleichung für Beleuchtung und Kollisionserkennung.',
        step1: 'Drei Punkte gegeben — daraus zwei Richtungsvektoren bilden:',
        step2: 'Richtungsvektoren $\\vec{u} = \\overrightarrow{AB}$ und $\\vec{v} = \\overrightarrow{AC}$ berechnen:',
        step3: 'Kreuzprodukt $\\vec{n} = \\vec{u} \\times \\vec{v}$ ausführlich berechnen — Komponente für Komponente nach der Formel:',
        step4: 'Koordinatenform aufstellen — Normalenvektor als Koeffizienten, $d$ durch Einsetzen von $A$: $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$:',
        kai_comment: 'In der Engine passiert genau das für jedes Dreieck: drei Vertices rein, Kreuzprodukt berechnen, Ebene gespeichert. Der Normalenvektor bestimmt gleichzeitig, in welche Richtung die Flaeche "schaut" — entscheidend für Beleuchtung und Backface Culling!',
      },
      collision_detection: {
        title: 'Gerade-Ebene-Schnitt (Raycast)',
        context: 'Ein Geschoss fliegt geradlinig durch den Raum. Kai muss prüfen, ob und wo es eine Wand trifft — das ist ein Raycast: Gerade-Ebene-Schnittpunkt.',
        step1: 'Gerade (Flugbahn) und Ebene (Wand) gegeben:',
        step2: 'Gerade in Ebenengleichung einsetzen — die Komponenten von $\\vec{x}(t)$ für $x_1, x_2, x_3$:',
        step3: 'Nach $t$ aufloesen — zusammenfassen und vereinfachen:',
        step4: 'Schnittpunkt berechnen — $t = 0$ in die Geradengleichung einsetzen:',
        kai_comment: 'Bei $t = 0$ trifft die Gerade sofort die Ebene — das Geschoss startet also direkt an der Wand. In der Engine prüfe ich zusaetzlich $t > 0$ (Vorwaertsrichtung) und $0 \\leq t \\leq t_{\\max}$ (Reichweite). So filtere ich Treffer hinter dem Spieler oder ausserhalb der Reichweite raus.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: '3D-Rendering & Beleuchtung',
        desc: 'Jede 3D-Engine berechnet Beleuchtung über das Skalarprodukt von Normalenvektor und Lichtrichtung: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Je kleiner der Winkel zwischen Licht und Flaechennormale, desto heller die Flaeche. Das ist das Lambert-Beleuchtungsmodell — die Grundlage für realistisches Licht in Games, Filmen und AR-Apps.',
      },
      architecture: {
        title: 'Architektur & BIM-Software',
        desc: 'In Architekturprogrammen wie AutoCAD oder Revit werden Dachflaechen, Waende und Rampen als Ebenen modelliert. Die Koordinatenform beschreibt die Lage im Raum, der Normalenvektor zeigt die Ausrichtung. Statiker berechnen mit Ebenengleichungen, wie Kraefte auf schraege Flaechen wirken — vom Dach bis zur Brueckenfahrbahn.',
      },
      gps_navigation: {
        title: 'GPS & Drohnennavigation',
        desc: 'GPS-Koordinaten sind dreidimensional (Laenge, Breite, Höhe). Drohnen navigieren entlang von Geraden im 3D-Raum und müssen Hindernisse — modelliert als Ebenen — erkennen. Der Abstand Punkt-Ebene entscheidet, ob eine Drohne einer Hausfassade zu nahe kommt. Dieselbe Mathematik nutzen selbstfahrende Autos für die LIDAR-Auswertung.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Reihenfolge ignoriert: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Antikommutativ: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'Das Kreuzprodukt ist NICHT kommutativ — die Reihenfolge bestimmt die Richtung des Ergebnisvektors (Rechte-Hand-Regel). Vertauschen ändert das Vorzeichen. Das kann dazu führen, dass Normalenvektoren in die falsche Richtung zeigen, was die gesamte Beleuchtung invertiert.',
        kai_warning: 'Diesen Bug erkennt man sofort: Flaechen, die "von innen" beleuchtet sind, während die Aussenseite dunkel bleibt. Passiert, wenn der Normalenvektor in die falsche Richtung zeigt. Immer konsistent mit der Reihenfolge sein — $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, nie andersrum!',
      },
      distance_abs_forgotten: {
        wrong: 'Betrag im Zähler vergessen: $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'Mit Betrag: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: 'Abständde sind immer positiv! Ohne den Betrag im Zähler kann ein negativer Wert herauskommen, wenn der Punkt auf der "anderen Seite" der Ebene liegt. In der Klausur ist das ein Punktabzug, in der Game-Engine führt es zu Objekten, die durch Waende fallen.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Vor dem Release von "Hafenlichter 3D" steht der große Playtest an: 200 Tester spielen eine Woche lang und Kai muss harte Entscheidungen treffen. Ist das Balancing fair? Ist die Crash-Rate akzeptabel? "Bauchgefuehl reicht nicht", sagt Mia. "Du brauchst einen statistischen Test, der dir sagt, ob ein beobachteter Effekt echt ist — oder nur Zufall." Willkommen bei den Hypothesentests: der Mathematik hinter datengetriebenen Entscheidungen.',
      challenge: 'Kai muss entscheiden, ob beobachtete Unterschiede im Playtest statistisch signifikant sind. Ist Held A wirklich schwaecher als Held B, oder hatte er nur Pech? Ist die neue Crash-Rate wirklich gestiegen? Dafür braucht er Nullhypothesen, Signifikanzniveaus und den Umgang mit Fehlerarten.',
      outro: 'Der Playtest ist ausgewertet: Kai hat statistisch nachgewiesen, dass Held A zu schwach ist ($p = 0{,}028 < 0{,}05$), und die Crash-Rate im neuen Build signifikant gestiegen ist. "Ohne Hypothesentests haette ich diese Probleme vielleicht ignoriert", gibt er zu. Mia ergänzt: "Das Schöne ist: Du weisst jetzt genau, wie sicher deine Entscheidung ist — das Signifikanzniveau quantifiziert dein Risiko, falsch zu liegen."',
    },
    objectives: {
      null_hypothesis: 'Null- und Alternativhypothese korrekt aufstellen und zwischen ein- und zweiseitigen Tests unterscheiden',
      significance_level: 'Das Signifikanzniveau $\\alpha$ verstehen und als Irrtumswahrscheinlichkeit interpretieren',
      test_decision: 'Ablehnungsbereiche bestimmen und Testentscheidungen systematisch durchführen',
      error_types: 'Fehler 1. und 2. Art unterscheiden und den Trade-off zwischen $\\alpha$ und $\\beta$ verstehen',
    },
    explanation: {
      intro: 'Ein Hypothesentest ist ein strukturiertes Verfahren, um auf Basis von Daten eine Entscheidung zu treffen. Du startest mit einer Vermutung (Nullhypothese $H_0$), sammelst Daten und prüfst, ob die Daten gegen $H_0$ sprechen. Die Alternativhypothese $H_1$ beschreibt, was du eigentlich vermutest:',
      significance: 'Das Signifikanzniveau $\\alpha$ ist die maximale Wahrscheinlichkeit, mit der du $H_0$ faelschlicherweise ablehnst (Fehler 1. Art). Typische Werte sind $\\alpha = 0{,}05$ (5\\%) oder $\\alpha = 0{,}01$ (1\\%). Je kleiner $\\alpha$, desto strenger der Test — aber desto eher übersieht man echte Effekte:',
      kai_tip: 'Denkt an Hypothesentests wie an ein Anti-Cheat-System: $H_0$ heisst "Der Spieler cheated NICHT". $\\alpha = 0{,}05$ bedeutet: Nur in 5\\% der Faelle banne ich einen ehrlichen Spieler. Ich will $\\alpha$ klein halten, um Unschuldige zu schuetzen — aber wenn ich es zu klein mache, rutschen echte Cheater durch. Das ist der Alpha-Beta-Trade-off!',
      rejection_region: 'Der Ablehnungsbereich enthaelt alle Testergebnisse, die so extrem sind, dass wir $H_0$ ablehnen. Bei einem linksseitigen Test ($H_1\\colon p < p_0$) liegt der Ablehnungsbereich links — du berechnest die größte Zahl $k$, für die $P(X \\leq k) \\leq \\alpha$ gilt:',
      error_types: 'Zwei Fehler können passieren: Fehler 1. Art ($\\alpha$) — du lehnst $H_0$ ab, obwohl sie stimmt ("Fehlalarm"). Fehler 2. Art ($\\beta$) — du behältst $H_0$ bei, obwohl $H_1$ stimmt ("verpasster Effekt"). Bei festem Stichprobenumfang $n$ gilt: Wenn du $\\alpha$ verkleinerst, wird $\\beta$ größer — und umgekehrt:',
    },
    concepts: {
      hypotheses: {
        title: 'Null- und Alternativhypothese',
        desc: '$H_0$ ist die "Status-quo"-Annahme, die so lange gilt, bis die Daten dagegen sprechen. $H_1$ ist das, was du eigentlich zeigen willst. Linksseitiger Test: $H_1\\colon p < p_0$. Rechtsseitiger Test: $H_1\\colon p > p_0$. Zweiseitiger Test: $H_1\\colon p \\neq p_0$. Wichtig: Man "beweist" $H_1$ nie — man kann $H_0$ nur ablehnen oder beibehalten.',
      },
      significance_level: {
        title: 'Signifikanzniveau $\\alpha$',
        desc: 'Die Obergrenze für die Wahrscheinlichkeit eines Fehlers 1. Art. Bei $\\alpha = 0{,}05$ akzeptierst du ein 5\\%-Risiko, $H_0$ faelschlicherweise abzulehnen. Uebliche Werte: $0{,}10$ (explorativ), $0{,}05$ (Standard), $0{,}01$ (streng). $\\alpha$ wird VOR dem Test festgelegt — nie nachtraeglich angepasst!',
      },
      error_types: {
        title: 'Fehler 1. und 2. Art',
        desc: 'Fehler 1. Art ($\\alpha$): $H_0$ wird abgelehnt, obwohl sie wahr ist — ein "Fehlalarm". Fehler 2. Art ($\\beta$): $H_0$ wird beibehalten, obwohl $H_1$ wahr ist — ein "verpasster Effekt". Bei festem $n$ sind $\\alpha$ und $\\beta$ gegenlaeudig: Kleineres $\\alpha$ bedeutet größeres $\\beta$. Abhilfe: Größerer Stichprobenumfang $n$.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Balancing-Test: Ist Held A zu schwach?',
        context: 'In 100 Matches zwischen Held A und Held B gewinnt Held A nur 40-mal. Kai vermutet, dass Held A benachteiligt ist. Bei fairem Balancing müsste $p = 0{,}5$ gelten.',
        step1: 'Hypothesen und Signifikanzniveau festlegen — linksseitig, weil Kai vermutet, dass A zu schwach ist:',
        step2: 'Versuchsaufbau: $n = 100$ Matches, $X$ = Anzahl Siege von Held A, binomialverteilt:',
        step3: 'Wahrscheinlichkeit für $X \\leq 40$ unter $H_0$ berechnen (kumulierte Binomialverteilung):',
        step4: 'Testentscheidung: $p$-Wert $0{,}028 < \\alpha = 0{,}05$ — $H_0$ wird abgelehnt. Held A ist signifikant zu schwach:',
        kai_comment: 'Das war der statistische Beweis, den ich für das Balance-Team brauchte. 40 von 100 sieht "fast okay" aus, aber der Test zeigt: Bei fairem Balancing würde man so ein extremes Ergebnis nur in 2{,}8\\% der Faelle sehen. Das reicht für ein Nerf-Update!',
      },
      crash_rate: {
        title: 'Crash-Rate nach Update prüfen',
        context: 'Nach einem Patch soll die Crash-Rate bei maximal 2\\% liegen. In 200 Test-Sessions crasht das Spiel 8-mal. Ist das zu viel?',
        step1: 'Hypothesen aufstellen — rechtsseitig, weil Kai prüfen will, ob die Rate UEBER 2\\% liegt:',
        step2: 'Daten: $n = 200$ Sessions, $X = 8$ Abstürze (beobachtet: $\\hat{p} = 4\\%$):',
        step3: 'Wahrscheinlichkeit für $X \\geq 8$ unter $H_0$ berechnen — das ist der $p$-Wert:',
        step4: 'Testentscheidung: $p$-Wert $0{,}042 < \\alpha = 0{,}05$ — die Crash-Rate ist signifikant erhoeht:',
        kai_comment: 'Ohne den Test haette ich vielleicht gesagt "8 Crashes bei 200 Sessions, das passt schon". Aber der Hypothesentest zeigt: Die Wahrscheinlichkeit, bei einer echten 2\\%-Rate so viele Crashes zu sehen, liegt unter 5\\%. Der Patch muss nochmal überarbeitet werden.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B-Testing bei Apps & Websites',
        desc: 'Jedes Mal wenn Netflix den "Jetzt abspielen"-Button ändert oder Spotify eine neue Playlist-Ansicht testet, läuft ein Hypothesentest. Version A gegen Version B: Welche hat mehr Klicks? Der $p$-Wert entscheidet, ob der Unterschied echt ist oder nur zufaellige Schwankung. Auch TikTok, YouTube und Instagram nutzen A/B-Tests — jedes Feature, das du siehst, hat einen Signifikanztest bestanden.',
      },
      quality_assurance: {
        title: 'Qualitätskontrolle in der Produktion',
        desc: 'In Fabriken wird staendig getestet: Liegt die Ausschussrate unter dem Grenzwert? Entspricht das Füllgewicht der Chipstüte dem aufgedruckten Wert? Hypothesentests schuetzen Verbraucher — und Unternehmen vor teuren Rueckrufaktionen. Bei jeder Stichprobenpruefung steckt dieselbe Mathematik dahinter, die ihr hier lernt.',
      },
      clinical_trials: {
        title: 'Klinische Studien & Medikamente',
        desc: 'Bevor ein Medikament zugelassen wird, muss es einen Hypothesentest bestehen: $H_0$ sagt "Das Medikament wirkt nicht besser als ein Placebo". Nur wenn der $p$-Wert unter $\\alpha = 0{,}05$ faellt, gilt die Wirksamkeit als nachgewiesen. Die strengen Regeln ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) schuetzen Patienten vor unwirksamen Medikamenten — aber auch vor zu frühen Ablehnungen wirksamer Therapien.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ "bewiesen": $p > \\alpha$ bedeutet $H_0$ ist wahr',
        correct: 'Korrekt formuliert: $p > \\alpha$ bedeutet $H_0$ kann nicht abgelehnt werden',
        why: 'Ein Hypothesentest kann $H_0$ nie beweisen — nur ablehnen oder beibehalten. "Nicht ablehnen" heisst: Die Daten reichen nicht aus, um $H_0$ zu widerlegen. Vielleicht ist der Effekt zu klein, vielleicht die Stichprobe zu klein. Deshalb sagt man "beibehalten" oder "nicht ablehnen", nie "akzeptieren" oder "bewiesen".',
        kai_warning: 'Das ist wie Unschuldsvermutung vor Gericht: "Nicht schuldig" heisst nicht "unschuldig" — es heisst nur, dass die Beweise nicht ausreichen. Genauso bei $H_0$: Wenn ich nicht nachweisen kann, dass Held A schwaecher ist, heisst das nicht automatisch, dass er perfekt balanciert ist!',
      },
      alpha_beta_confused: {
        wrong: 'Annahme: Kleineres $\\alpha$ verbessert automatisch alles',
        correct: 'Realität: Kleineres $\\alpha$ führt bei festem $n$ zu größerem $\\beta$',
        why: 'Wenn du den Test strenger machst (kleineres $\\alpha$), brauchst du extremere Daten, um $H_0$ abzulehnen. Dadurch steigt die Wahrscheinlichkeit, einen echten Effekt zu übersehen ($\\beta$ steigt). Der einzige Ausweg: Größere Stichprobe $n$ — damit kannst du sowohl $\\alpha$ als auch $\\beta$ klein halten.',
      },
    },
  },
};
