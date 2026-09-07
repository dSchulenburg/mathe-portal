export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'Amir baut ein Vorhersagemodell für die Nutzerzahlen einer Lern-App. Die ersten Wochen sehen fantastisch aus: jede Woche 40 Prozent mehr. Er rechnet hoch — und bekommt für nächstes Jahr mehr Nutzer heraus, als es Menschen mit Smartphone gibt. "Dein Modell ist nicht falsch", sagt seine Professorin, "es ist nur schon außerhalb seines Gültigkeitsbereichs. Was passiert, wenn schon die Hälfte aller möglichen Nutzer die App hat?" Amir merkt: Er hat vergessen, dass die Welt endlich ist.',
      challenge: 'Wie modelliert man Wachstum, das eine Grenze hat? Und wie unterscheidet man zwei Sorten von Grenze: eine, gegen die man von Anfang an bremst, und eine, gegen die man erst beschleunigt und dann bremst?',
      outro: 'Amir arbeitet jetzt mit zwei Modellen statt einem. Beschränktes Wachstum, wenn der Zuwachs nur vom freien Rest abhängt — Abkühlung, Sättigung, Aufladen. Logistisches Wachstum, wenn der Zuwachs außerdem den vorhandenen Bestand braucht — Ansteckung, Weiterempfehlung, Populationen. Und er weiß jetzt, was der Wendepunkt bedeutet: nicht das Ende des Wachstums, sondern seinen schnellsten Moment.',
    },
    objectives: {
      grenzen: 'Erkennen, wann ein exponentielles Modell an seine Grenze kommt — und warum es vorher trotzdem richtig war',
      beschraenkt: 'Beschränktes Wachstum $N(t) = K - (K - N_0)e^{-kt}$ aufstellen und auswerten',
      logistisch: 'Das logistische Modell $N(t) = \\frac{K}{1 + a e^{-rt}}$ aus Kapazität und Startwert bestimmen',
      wendepunkt: 'Den Wendepunkt berechnen und als Zeitpunkt des stärksten Zuwachses deuten',
    },
    explanation: {
      intro: 'Exponentielles Wachstum kennt keine Grenze. In der Wirklichkeit gibt es aber fast immer eine: der Teich ist irgendwann voll, alle möglichen Kunden haben das Produkt, die Tasse ist auf Raumtemperatur. Diese Obergrenze heißt Kapazität $K$. Zwei Modelle beschreiben, wie sie erreicht wird — und der Unterschied zwischen ihnen ist keine Feinheit, sondern die Frage, ob die Kurve einen Wendepunkt hat.',
      beschraenkt: 'Beim beschränkten Wachstum hängt der Zuwachs nur davon ab, wie viel noch fehlt. Am Anfang fehlt am meisten, also ist der Zuwachs am Anfang am größten und wird immer kleiner. Die Kurve nähert sich der Grenze von unten an, ohne sie je zu erreichen:',
      amir_tip: 'Ich unterscheide die beiden Modelle an einer einzigen Frage: Braucht der Zuwachs das, was schon da ist? Beim abkühlenden Kaffee nicht — die Wärme geht weg, egal wie viel noch da ist, nur die Differenz zählt. Bei einem viralen Video schon — ohne Leute, die es teilen, passiert gar nichts. Das erste ist beschränkt, das zweite logistisch.',
      logistisch: 'Beim logistischen Wachstum kommt der Bestand als zweiter Faktor dazu. Am Anfang ist zwar viel Platz, aber es sind kaum Individuen da — das Wachstum ist langsam. Am Ende sind viele Individuen da, aber kein Platz mehr — wieder langsam. Dazwischen liegt das Maximum. Das ergibt die typische S-Form:',
      dgl: 'Am klarsten sieht man den Unterschied in der Differentialgleichung. Sie liest sich wie ein Satz: Der Zuwachs ist proportional zum Bestand **mal** dem noch freien Anteil. Fehlt einer der beiden Faktoren, steht das Wachstum still:',
      wendepunkt: 'Aus dieser Gleichung folgt die wichtigste Kennzahl des Modells. Das Produkt aus Bestand und freiem Rest wird genau dann am größten, wenn beide gleich sind — also bei der halben Kapazität. Dort liegt der Wendepunkt, und dort ist die Zuwachsrate maximal:',
    },
    concepts: {
      kapazitaet: {
        title: 'Kapazität $K$',
        desc: 'Die Obergrenze, der sich der Bestand nähert, ohne sie zu erreichen. Sie ist der Grenzwert für $t \\to \\infty$ und steckt in beiden Modellen als Parameter. Ohne eine sinnvolle Kapazität ist keines der beiden Modelle anwendbar.',
      },
      beschraenkt: {
        title: 'Beschränktes Wachstum',
        desc: 'Der Zuwachs hängt nur vom noch freien Rest $K - N$ ab. Deshalb ist er ganz am Anfang am größten und nimmt danach stetig ab. Die Kurve hat keinen Wendepunkt — sie ist von Beginn an rechtsgekrümmt. Typisch für Abkühlung, Aufladung und Sättigung.',
      },
      logistisch: {
        title: 'Logistisches Wachstum',
        desc: 'Der Zuwachs hängt vom Bestand UND vom freien Rest ab. Daraus entsteht die S-Kurve: erst langsam, dann schnell, dann wieder langsam. Der Parameter $a = \\frac{K - N_0}{N_0}$ sagt, wie viele freie Plätze anfangs auf jedes vorhandene Individuum kommen.',
      },
      wendepunkt: {
        title: 'Wendepunkt bei $K/2$',
        desc: 'Immer bei der halben Kapazität, unabhängig von $r$ und $N_0$. Dort ist die Zuwachsrate maximal, nämlich $\\frac{rK}{4}$. Danach wächst der Bestand weiter, aber langsamer — die häufigste Verwechslung in Interpretationsaufgaben.',
      },
    },
    examples: {
      seerosen: {
        title: 'Logistisches Modell aus Kapazität und Startwert aufstellen',
        context: 'Auf einem Teich mit Platz für 500 Seerosen wachsen anfangs 50 Pflanzen.',
        step1: 'Zuerst der Parameter $a$. Er ergibt sich direkt aus Kapazität und Startwert:',
        step2: 'Damit steht das Modell. Die Wachstumsrate $r = 0{,}4$ pro Woche stammt aus der Messreihe:',
        step3: 'Probe: Setze $t = 0$ ein. Wenn hier nicht der Startwert herauskommt, ist $a$ falsch:',
        step4: 'Der Wendezeitpunkt folgt aus $a\\,e^{-rt} = 1$ — eine Logarithmusgleichung:',
        amir_comment: 'Die Probe in Schritt 3 mache ich immer. Sie kostet zehn Sekunden und fängt den häufigsten Fehler ab: $a = \\frac{K}{N_0}$ statt $a = \\frac{K - N_0}{N_0}$. Bei mir wären das 10 statt 9 gewesen — sieht harmlos aus, verschiebt aber die ganze Kurve.',
      },
      abkuehlung: {
        title: 'Beschränktes Wachstum bei der Abkühlung',
        context: 'Kai lässt einen 80 °C heißen Kaffee in einem 20 °C warmen Raum stehen.',
        step1: 'Die Grenze ist hier die Raumtemperatur, die Differenz dazu beträgt anfangs 60 °C:',
        step2: 'Probe bei $t = 0$: Die Anfangstemperatur muss herauskommen:',
        step3: 'Nach zehn Minuten ist nur noch etwa ein Drittel der Differenz übrig:',
        step4: 'Auf lange Sicht bleibt die Raumtemperatur — erreicht wird sie mathematisch nie:',
        kai_comment: 'Beim Kaffee ist das Alltagswissen: die erste Minute bringt am meisten, danach wird es zäh. Genau das ist beschränktes Wachstum. Und es ist der Grund, warum Pusten am Anfang hilft und nach zehn Minuten nichts mehr bringt.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Epidemien',
        desc: 'Neuinfektionen brauchen Infizierte (die anstecken) und Empfängliche (die sich anstecken können). Der Wendepunkt ist der Tag mit den meisten Neuinfektionen — die Gesamtzahl steigt danach weiter, nur langsamer.',
      },
      produkt: {
        title: 'Produkt- und App-Verbreitung',
        desc: 'Neue Nutzer kommen meist über bestehende Nutzer. Anfangs fehlen die Weiterempfehlenden, am Ende die Unversorgten. Marketingabteilungen nennen die S-Kurve auch Adoptionskurve.',
      },
      abkuehlung: {
        title: 'Abkühlung und Aufladung',
        desc: 'Newtons Abkühlungsgesetz und die Ladekurve eines Akkus sind beschränktes Wachstum. Hier zählt nur der Abstand zum Endzustand — deshalb lädt ein Akku die letzten Prozent so quälend langsam.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'Ab dem Wendepunkt nimmt der Bestand ab',
        correct: 'Ab dem Wendepunkt nimmt die Zuwachsrate ab, der Bestand steigt weiter',
        why: 'Der Wendepunkt ist die Nullstelle der zweiten Ableitung, nicht der ersten. $N\'$ hat dort ein Maximum, ist also gerade besonders groß — und positiv. Die logistische Funktion ist auf ihrem gesamten Definitionsbereich streng monoton steigend, sie fällt nie. Wer hier Bestand und Zuwachs verwechselt, dreht die Aussage genau um.',
        amir_warning: 'Das ist die Nummer eins der Interpretationsfehler und sie kostet in jeder Abiturklausur Punkte. Mein Trick: Ich formuliere die Antwort immer mit dem Wort "pro". Was ändert sich pro Woche? Der Zuwachs. Was ist insgesamt da? Der Bestand. Sobald das Wort "pro" auftaucht, rede ich über $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'Logistisches Wachstum ist exponentielles Wachstum, das bei $K$ abgeschnitten wird',
        correct: 'Die logistische Kurve bremst allmählich ab und erreicht $K$ überhaupt nie',
        why: 'Ein abgeschnittenes exponentielles Modell hätte einen Knick — es wäre an der Schnittstelle nicht differenzierbar und würde die Grenze in endlicher Zeit exakt erreichen. Die logistische Funktion ist dagegen überall glatt und nähert sich $K$ nur asymptotisch. Der Unterschied ist nicht kosmetisch: das abgeschnittene Modell sagt einen konkreten Endzeitpunkt voraus, das logistische keinen.',
        amir_warning: 'Richtig ist an dem Gedanken nur die Anfangsphase: solange $N$ klein gegen $K$ ist, ist der Bremsfaktor fast $1$ und die beiden Kurven liegen praktisch übereinander. Die exponentielle Kurve ist die Anfangstangente der logistischen — deshalb passte mein erstes Modell ja auch so gut auf die ersten Wochen.',
      },
    },
  },
};
