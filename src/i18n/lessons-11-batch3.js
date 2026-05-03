export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'Amir baut bei DataPulse einen neuen Empfehlungs-Filter. Die Formel: "Relevanz pro Hörer geteilt durch Anzahl Hörer". Klingt sauber — bis Yara fragt: "Was passiert, wenn ein Track null Hörer hat?" Amir starrt auf den Code: Division durch null. Crash. Polstellen, hebbare Lücken, Asymptoten — die ganze Familie der rationalen Funktionen taucht plötzlich in seinem Notebook auf, und er muss sie wirklich verstehen.',
      challenge: 'Amir muss seinen Filter so absichern, dass er an Polstellen nicht abstürzt — und gleichzeitig erkennen, wann ein scheinbarer Crash in Wahrheit nur eine hebbare Lücke ist, die man wegkürzen kann.',
      outro: 'Mit drei Werkzeugen ist Amir durch: Definitionsmenge prüfen (wo wird der Nenner null?), zwischen Polstelle und hebbarer Lücke unterscheiden (Zähler dort auch null?), und Asymptoten bestimmen (Verhalten für große $|x|$). Sein Filter läuft jetzt sauber durch — und Prof. Nguyen lobt: "Das ist saubere numerische Hygiene."',
    },
    objectives: {
      definition: 'Eine rationale Funktion erkennen und ihre Definitionsmenge bestimmen',
      poles: 'Polstellen finden — Nullstellen des Nenners, an denen der Zähler nicht null ist',
      removable_gaps: 'Hebbare Lücken erkennen, durch Kürzen beseitigen und die stetige Fortsetzung angeben',
      asymptotes: 'Senkrechte und waagerechte Asymptoten aus dem Funktionsterm ableiten',
    },
    explanation: {
      intro: 'Eine rationale Funktion ist ein Bruch aus zwei Polynomen — Zähler $p(x)$ geteilt durch Nenner $q(x)$. Der entscheidende Punkt: Der Nenner darf nie null werden, sonst ist die Funktion an dieser Stelle nicht definiert.',
      domain: 'Die Definitionsmenge $D_f$ besteht aus allen reellen Zahlen außer den Nullstellen des Nenners. Den Nenner faktorisieren oder Nullstellen ausrechnen — das sind die Lücken in $D_f$.',
      amir_tip: 'Mein erster Reflex bei jeder rationalen Funktion: Wo wird der Nenner null? Diese $x$-Werte schreibe ich oben aufs Blatt. Erst dann kümmere ich mich um den Rest. Wer das überspringt, übersieht Polstellen — und im Code stürzt das Programm dann ab.',
      poles: 'Eine Polstelle hast du, wenn der Nenner null wird, der Zähler aber nicht. Dort schießt der Funktionswert ins Unendliche (positiv oder negativ) — der Graph hat eine senkrechte Asymptote.',
      removable: 'Wenn an derselben Stelle auch der Zähler null wird, kannst du den gemeinsamen Faktor kürzen. Es bleibt eine sogenannte "hebbare Lücke": Der Graph hat dort nur ein Loch, das du durch eine sinnvolle Definition füllen könntest.',
      asymptotes: 'Das Verhalten für große $|x|$ liest du an den Graden der Polynome ab: Ist der Zähler-Grad kleiner als der Nenner-Grad, wird $f(x) \\to 0$ — die x-Achse ist waagerechte Asymptote. Sind die Grade gleich, ergibt das Verhältnis der höchsten Koeffizienten die waagerechte Asymptote.',
    },
    concepts: {
      definition: {
        title: 'Rationale Funktion',
        desc: 'Quotient aus zwei Polynomen $p(x)$ und $q(x)$. Definiert überall, wo $q(x) \\neq 0$. Beispiele: $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Polstelle',
        desc: 'Stelle $x_0$ mit $q(x_0) = 0$ und $p(x_0) \\neq 0$. Der Graph schießt nach $\\pm\\infty$ — senkrechte Asymptote bei $x = x_0$. Pol-Ordnung gerade ⇒ kein Vorzeichenwechsel, ungerade ⇒ Vorzeichenwechsel.',
      },
      removable_gap: {
        title: 'Hebbare Lücke',
        desc: 'Stelle $x_0$ mit $p(x_0) = q(x_0) = 0$. Gemeinsamen Faktor kürzen, dann den Grenzwert ausrechnen — das ist die "stetige Fortsetzung". Der Graph hat dort nur ein offenes Loch.',
      },
      asymptote: {
        title: 'Waagerechte Asymptote',
        desc: 'Grenzwert für $x \\to \\pm\\infty$. Bei $\\deg p < \\deg q$ ist sie $y = 0$, bei $\\deg p = \\deg q$ ist sie das Verhältnis der Leitkoeffizienten. Bei $\\deg p > \\deg q$ gibt es stattdessen eine Schräg- oder Kurven-Asymptote.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Einfache Polstelle untersuchen',
        context: 'Amir prüft die einfachste rationale Funktion seines Filters: $f(x) = \\frac{1}{x-2}$. Wo ist sie nicht definiert, wie verhält sie sich?',
        step1: 'Funktionsterm aufschreiben — Zähler $p(x) = 1$, Nenner $q(x) = x - 2$:',
        step2: 'Nullstelle des Nenners suchen: $q(x) = 0$ liefert eine kritische Stelle:',
        step3: 'Zähler dort auswerten: $p(2) = 1 \\neq 0$. Also keine hebbare Lücke, sondern echte Polstelle:',
        step4: 'Verhalten im Unendlichen: $\\frac{1}{x-2} \\to 0$ für $x \\to \\pm\\infty$. Die x-Achse ist waagerechte Asymptote:',
        amir_comment: 'Klassischer Fall: senkrechte Asymptote bei $x = 2$, waagerechte Asymptote bei $y = 0$. Im Code muss ich also $x = 2$ explizit abfangen — sonst NaN. Genau das war Yaras Frage.',
      },
      removable: {
        title: 'Hebbare Lücke per Kürzen finden',
        context: 'Amir stößt im Test auf $f(x) = \\frac{x^2 - 1}{x - 1}$. Bei $x = 1$ wird der Nenner null — Crash? Oder doch nicht?',
        step1: 'Funktionsterm aufschreiben — Zähler ist die dritte binomische Form:',
        step2: 'Bei $x = 1$ sind Zähler UND Nenner null. Das ist der Indikator für eine hebbare Lücke:',
        step3: 'Zähler faktorisieren $(x^2 - 1) = (x-1)(x+1)$, dann gemeinsamen Faktor $(x-1)$ kürzen:',
        step4: 'Der Graph ist also die Gerade $y = x + 1$ — mit einem Loch genau bei $x = 1$, weil das ursprüngliche $f$ dort nicht definiert ist:',
        amir_comment: 'Wichtig: Trotz Kürzung darf ich $x = 1$ nicht in $D_f$ aufnehmen. Die ursprüngliche Funktion bleibt undefiniert dort. Im Code löse ich das mit einer if-Abfrage und gebe den Grenzwert $f(1) := 2$ zurück — saubere stetige Fortsetzung.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Stückkosten in der Produktion',
        desc: 'Fixkosten $F$ verteilt auf $x$ produzierte Stücke plus variable Kosten $v$ pro Stück: $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. Für $x \\to \\infty$ nähern sich die Stückkosten $v$ an — waagerechte Asymptote in echt.',
      },
      light_intensity: {
        title: 'Lichtstärke mit Abstandsquadrat',
        desc: 'Eine Lampe mit Leistung $P$ erzeugt im Abstand $r$ die Lichtstärke $I(r) = \\frac{P}{4\\pi r^2}$. Bei $r \\to 0$ Polstelle (theoretisch unendlich hell direkt an der Quelle), bei $r \\to \\infty$ geht $I \\to 0$. Klassisches Naturgesetz.',
      },
      dilution: {
        title: 'Konzentration beim Verdünnen',
        desc: 'Ein Saft mit Konzentration $c_0$ und Volumen $V_0$ wird mit Volumen $V$ Wasser verdünnt: $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Hier gibt es keine Polstelle ($V_0 + V > 0$), aber für $V \\to \\infty$ geht die Konzentration gegen null — waagerechte Asymptote $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'Polstelle und Nullstelle verwechseln',
        correct: 'Nullstelle: Zähler null. Polstelle: Nenner null und Zähler nicht null',
        why: 'Bei $f(x) = \\frac{x-3}{x+2}$ ist die Nullstelle bei $x = 3$ (dort wird $p(x) = 0$, also $f = 0$) und die Polstelle bei $x = -2$ (dort wird $q(x) = 0$). Wer die Rollen vertauscht, zeichnet den Graphen komplett falsch — Loch und Pol an den falschen Stellen.',
        amir_warning: 'Mein Eselsbrücke: Die Nullstelle ist da, wo $f$ "Null hervorgibt". Die Polstelle ist da, wo $f$ "explodiert". Beides ergibt sich direkt aus Zähler bzw. Nenner — nie verwechseln.',
      },
      dont_cancel: {
        wrong: 'Gemeinsamen Faktor übersehen und Polstelle annehmen',
        correct: 'Erst Zähler und Nenner faktorisieren, dann gemeinsame Faktoren kürzen',
        why: 'Bei $f(x) = \\frac{x^2-4}{x-2}$ scheint $x = 2$ eine Polstelle zu sein. Faktorisiert man aber den Zähler, wird $\\frac{(x-2)(x+2)}{x-2} = x+2$ — also nur eine hebbare Lücke. Wer nicht faktorisiert, behauptet einen Pol, der gar nicht existiert.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'Amir trainiert bei DataPulse ein einfaches lineares Modell: drei Features (Tempo, Lautstärke, Tanzbarkeit), das Modell schätzt daraus eine Hörer-Bewertung. Aus drei bekannten Beispielen ergeben sich drei Gleichungen mit drei Unbekannten — den Gewichten der Features. "Per Hand wird das nichts", sagt Finn. Amir grinst: "Doch, mit Gauß." Lineare Gleichungssysteme, ein Klassiker, der in jedem ML-Code dahinter steckt.',
      challenge: 'Amir muss aus drei Trainings-Beispielen die drei Feature-Gewichte $a$, $b$, $c$ bestimmen. Drei Gleichungen, drei Unbekannte — Gauß.',
      outro: 'Mit dem Gauß-Verfahren bringt Amir die erweiterte Koeffizienten-Matrix systematisch in Stufenform. Der untere linke Bereich wird Schritt für Schritt zu Nullen, dann liest er die Lösungen rückwärts ab. "Das ist genau das, was numpy.linalg.solve im Hintergrund macht", erklärt er Finn — "nur jetzt verstehe ich endlich, warum."',
    },
    objectives: {
      solve_2x2: 'Lineare Gleichungssysteme mit zwei Unbekannten durch Einsetzen, Gleichsetzen oder Addition lösen',
      gauss_3x3: 'LGS mit drei Unbekannten mit dem Gauß-Algorithmus systematisch in Stufenform bringen',
      solution_types: 'Die drei Lösungstypen unterscheiden — eindeutig, keine Lösung, unendlich viele',
      matrix_form: 'LGS in Matrixform $A\\vec{x} = \\vec{b}$ schreiben und die erweiterte Matrix richtig anlegen',
    },
    explanation: {
      intro: 'Ein lineares Gleichungssystem (LGS) ist eine Sammlung mehrerer Gleichungen mit denselben Unbekannten. Eine Lösung des LGS ist ein Wertesatz, der ALLE Gleichungen gleichzeitig erfüllt. Schon in Klasse 9 bekannt — typisch zwei Gleichungen, zwei Unbekannte:',
      methods: 'Für 2×2-Systeme reichen die klassischen Verfahren: Einsetzen, Gleichsetzen oder das Additionsverfahren. Bei 3×3 oder größer wird das schnell unübersichtlich — deshalb der Gauß-Algorithmus, der mechanisch und immer gleich abläuft.',
      amir_tip: 'Mein Workflow für 3×3: erweiterte Matrix hinschreiben, dann ZIELSTREBIG. Erst die linke Spalte unter dem Pivot zu Null machen, dann die mittlere Spalte unter dem zweiten Pivot. Stufenform. Rückwärts auflösen. Klingt mechanisch — ist auch mechanisch, das ist gerade der Vorteil.',
      gauss: 'Beim Gauß-Verfahren schreibst du das LGS als erweiterte Matrix $(A | \\vec{b})$. Mit drei Zeilenoperationen — Zeile mit Zahl multiplizieren, Zeilen addieren/subtrahieren, Zeilen tauschen — formst du die Matrix in Stufenform um. Das ändert die Lösungsmenge nicht.',
      solution_types: 'Aus der Stufenform liest du den Lösungstyp direkt ab: keine Nullzeile am unteren Rand mit Widerspruch ⇒ eindeutige Lösung. Eine Zeile $0 = c$ mit $c \\neq 0$ ⇒ keine Lösung. Eine Zeile $0 = 0$ ⇒ Parameter setzen, unendlich viele Lösungen.',
    },
    concepts: {
      lgs: {
        title: 'Lineares Gleichungssystem',
        desc: 'Eine Sammlung linearer Gleichungen mit gemeinsamen Unbekannten. In Matrixform: $A \\vec{x} = \\vec{b}$, wobei $A$ die Koeffizientenmatrix und $\\vec{b}$ der Vektor der rechten Seiten ist.',
      },
      gauss: {
        title: 'Gauß-Algorithmus',
        desc: 'Standard-Lösungsverfahren. Erweiterte Matrix in Stufenform überführen, dann rückwärts auflösen. Drei erlaubte Operationen, die die Lösungsmenge nicht verändern: Zeile mit Skalar multiplizieren, Vielfache von Zeilen addieren, Zeilen tauschen.',
      },
      solution_types: {
        title: 'Drei Lösungstypen',
        desc: 'Eindeutige Lösung (so viele Pivots wie Unbekannte), keine Lösung (Widerspruchszeile $0 = c$), unendlich viele Lösungen (mindestens eine $0=0$-Zeile, freie Parameter setzen).',
      },
      matrix: {
        title: 'Erweiterte Koeffizientenmatrix',
        desc: 'Schreibweise $(A | \\vec{b})$. Links die Koeffizienten der Unbekannten, rechts (durch einen Strich getrennt) die rechte Seite. Spart das ständige Mitschreiben der Variablennamen.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'Einfaches 2×2-System per Addition',
        context: 'Amir hat zwei Beispiel-Gleichungen aus Trainingsdaten. Er sucht $x$ (Gewicht für Tempo) und $y$ (Gewicht für Lautstärke).',
        step1: 'Das Gleichungssystem aufschreiben:',
        step2: 'Beide Gleichungen addieren — die $y$-Terme heben sich auf, $x$ ist sofort gelöst:',
        step3: '$x = 3$ in eine der Ausgangsgleichungen einsetzen, hier die zweite:',
        step4: 'Lösungsmenge — als Tupel $(x, y)$ angeben:',
        amir_comment: 'Klassisches Additionsverfahren: Wenn ich Glück habe, fallen Variablen direkt weg. Wenn nicht, muss ich vorher eine Gleichung mit einer passenden Zahl multiplizieren — z.B. mal 2, damit die Koeffizienten zueinander passen.',
      },
      gauss_3x3: {
        title: '3×3-System mit Gauß lösen',
        context: 'Amir hat ein Trainings-Mini-Set: drei Hörer-Bewertungen, drei Feature-Gewichte $x, y, z$. Drei Gleichungen — Gauß-Verfahren in der erweiterten Matrix.',
        step1: 'Erweiterte Matrix aufstellen — Koeffizienten links, rechte Seiten rechts vom Strich:',
        step2: 'Zeile 2 minus 2 mal Zeile 1 — der Eintrag $a_{21} = 2$ wird zu null:',
        step3: 'Zeile 3 minus Zeile 1 — der Eintrag $a_{31} = 1$ wird zu null. Die linke Spalte ist jetzt unter dem Pivot 1 sauber:',
        step4: 'Weiter bis Stufenform, dann rückwärts auflösen: aus letzter Zeile $z$, oben einsetzen für $y$, dann $x$. Lösung: $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$:',
        amir_comment: 'Gauß ist Buchhaltung: jede Zeilenoperation sauber notieren. Wer eine Operation nur halb ausführt — z.B. nur die Pivot-Spalte umformt — bekommt Müll. Disziplin schlägt Genie hier.',
      },
    },
    realworld: {
      mischung: {
        title: 'Mischungsaufgaben',
        desc: 'Ein Apotheker mischt zwei Lösungen mit Konzentrationen $a$ und $b$ zu einer Mischung mit Gesamtmasse $m$ und Gesamtwirkstoff $w$. Zwei Gleichungen, zwei Unbekannte — direkt LGS.',
      },
      preise: {
        title: 'Preise rekonstruieren',
        desc: 'Drei Kunden, drei Quittungen mit jeweils Mengen und Gesamtpreis — daraus die Einzelpreise zurückrechnen. Drei Gleichungen, drei unbekannte Stückpreise. Gauß löst das in wenigen Schritten.',
      },
      network: {
        title: 'Stromkreise (Kirchhoff)',
        desc: 'In einem Netzwerk aus Widerständen liefert jede Knotengleichung (Strom rein = Strom raus) und jede Maschengleichung (Spannungssumme = 0) eine lineare Bedingung. Bei $n$ Unbekannten ergibt das ein $n \\times n$-LGS — Standard-Verfahren in der Elektrotechnik.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Bei Zeilenoperation nur die Pivot-Spalte umformen',
        correct: 'Jede Spalte der Zeile (inklusive rechter Seite) umformen — alle gleichzeitig',
        why: 'Eine Zeilenoperation gilt für die GANZE Zeile. Wer bei $Z_2 - 2Z_1$ nur den Pivot-Eintrag umformt und die anderen Spalten vergisst, zerstört die Gleichung. Folge: Stufenform sieht richtig aus, Lösungen sind aber falsch — und der Fehler ist hinterher schwer zu finden.',
        amir_warning: 'Genau dieser Fehler hat mich in einer Übungsklausur einen ganzen Punkt gekostet. Seitdem schreibe ich die komplette neue Zeile — alle Einträge inklusive rechte Seite — sauber unter die alte. Visuell vergleichbar.',
      },
      no_solution: {
        wrong: 'Eine Widerspruchszeile $0 = c$ als $x = c$ interpretieren',
        correct: 'Zeile $0 = c$ mit $c \\neq 0$ bedeutet: das System hat KEINE Lösung',
        why: 'Wenn am Ende $0 = 5$ herauskommt, ist das ein Widerspruch — kein Wert von $x, y, z$ kann das erfüllen. Lösungsmenge ist leer. Wer das als $x = 5$ liest, gibt eine Lösung an, die das System nicht erfüllt.',
      },
    },
  },
};
