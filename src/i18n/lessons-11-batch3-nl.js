export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'Amir bouwt bij DataPulse een nieuw aanbevelingsfilter. De formule: "relevantie per luisteraar gedeeld door aantal luisteraars". Klinkt netjes — tot Yara vraagt: "Wat gebeurt er als een track nul luisteraars heeft?" Amir staart naar de code: deling door nul. Crash. Polen, ophefbare discontinuïteiten, asymptoten — de hele familie van de rationale functies duikt ineens op in zijn notitieboek, en hij moet ze echt begrijpen.',
      challenge: 'Amir moet zijn filter zo beveiligen dat het niet crasht bij polen — en tegelijk herkennen wanneer een schijnbare crash in werkelijkheid alleen een ophefbare discontinuïteit is die je kunt wegdelen.',
      outro: 'Met drie stukken gereedschap komt Amir eruit: het domein controleren (waar wordt de noemer nul?), pool en ophefbare discontinuïteit onderscheiden (wordt de teller daar ook nul?) en asymptoten bepalen (gedrag voor grote $|x|$). Zijn filter draait nu netjes — en professor Nguyen prijst hem: "Dat is nette numerieke hygiëne."',
    },
    objectives: {
      definition: 'Een rationale functie herkennen en haar domein bepalen',
      poles: 'Polen vinden — nulpunten van de noemer waar de teller niet nul is',
      removable_gaps: 'Ophefbare discontinuïteiten herkennen, wegdelen en de continue voortzetting aangeven',
      asymptotes: 'Verticale en horizontale asymptoten afleiden uit het functievoorschrift',
    },
    explanation: {
      intro: 'Een rationale functie is een breuk van twee veeltermen — teller $p(x)$ gedeeld door noemer $q(x)$. Het beslissende punt: de noemer mag nooit nul worden, anders is de functie op die plek niet gedefinieerd.',
      domain: 'Het domein $D_f$ bestaat uit alle reële getallen behalve de nulpunten van de noemer. Ontbind de noemer in factoren of bereken de nulpunten — dat zijn de gaten in $D_f$.',
      amir_tip: 'Mijn eerste reflex bij elke rationale functie: waar wordt de noemer nul? Die $x$-waarden schrijf ik bovenaan het blad. Pas daarna kijk ik naar de rest. Wie dat overslaat, mist polen — en in de code klapt het programma er dan uit.',
      poles: 'Je hebt een pool als de noemer nul wordt maar de teller niet. Daar schiet de functiewaarde naar oneindig (positief of negatief) — de grafiek heeft een verticale asymptoot.',
      removable: 'Als op diezelfde plek ook de teller nul wordt, kun je de gemeenschappelijke factor wegdelen. Er blijft een zogeheten "ophefbare discontinuïteit": de grafiek heeft daar alleen een gat, dat je met een zinvolle definitie zou kunnen opvullen.',
      asymptotes: 'Het gedrag voor grote $|x|$ lees je af aan de graden van de veeltermen: is de graad van de teller kleiner dan die van de noemer, dan geldt $f(x) \\to 0$ — de x-as is horizontale asymptoot. Zijn de graden gelijk, dan geeft de verhouding van de hoogste coëfficiënten de horizontale asymptoot.',
    },
    concepts: {
      definition: {
        title: 'Rationale functie',
        desc: 'Quotiënt van twee veeltermen $p(x)$ en $q(x)$. Gedefinieerd overal waar $q(x) \\neq 0$. Voorbeelden: $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Pool',
        desc: 'Punt $x_0$ met $q(x_0) = 0$ en $p(x_0) \\neq 0$. De grafiek schiet naar $\\pm\\infty$ — verticale asymptoot bij $x = x_0$. Even poolorde ⇒ geen tekenwisseling, oneven ⇒ tekenwisseling.',
      },
      removable_gap: {
        title: 'Ophefbare discontinuïteit',
        desc: 'Punt $x_0$ met $p(x_0) = q(x_0) = 0$. Gemeenschappelijke factor wegdelen, daarna de limiet uitrekenen — dat is de "continue voortzetting". De grafiek heeft daar alleen een open gat.',
      },
      asymptote: {
        title: 'Horizontale asymptoot',
        desc: 'Limiet voor $x \\to \\pm\\infty$. Bij $\\deg p < \\deg q$ is die $y = 0$, bij $\\deg p = \\deg q$ de verhouding van de leidende coëfficiënten. Bij $\\deg p > \\deg q$ is er in plaats daarvan een scheve of kromme asymptoot.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Een enkelvoudige pool onderzoeken',
        context: 'Amir bekijkt de eenvoudigste rationale functie van zijn filter: $f(x) = \\frac{1}{x-2}$. Waar is ze niet gedefinieerd, hoe gedraagt ze zich?',
        step1: 'Functievoorschrift opschrijven — teller $p(x) = 1$, noemer $q(x) = x - 2$:',
        step2: 'Nulpunt van de noemer zoeken: $q(x) = 0$ levert een kritiek punt:',
        step3: 'De teller daar evalueren: $p(2) = 1 \\neq 0$. Dus geen ophefbare discontinuïteit, maar een echte pool:',
        step4: 'Gedrag in het oneindige: $\\frac{1}{x-2} \\to 0$ voor $x \\to \\pm\\infty$. De x-as is horizontale asymptoot:',
        amir_comment: 'Klassiek geval: verticale asymptoot bij $x = 2$, horizontale asymptoot bij $y = 0$. In de code moet ik $x = 2$ dus expliciet opvangen — anders NaN. Precies dat was Yara\'s vraag.',
      },
      removable: {
        title: 'Ophefbare discontinuïteit vinden door wegdelen',
        context: 'In een test stuit Amir op $f(x) = \\frac{x^2 - 1}{x - 1}$. Bij $x = 1$ wordt de noemer nul — crash? Of toch niet?',
        step1: 'Functievoorschrift opschrijven — de teller is een merkwaardig product:',
        step2: 'Bij $x = 1$ zijn teller ÉN noemer nul. Dat is de aanwijzing voor een ophefbare discontinuïteit:',
        step3: 'Teller ontbinden $(x^2 - 1) = (x-1)(x+1)$, daarna de gemeenschappelijke factor $(x-1)$ wegdelen:',
        step4: 'De grafiek is dus de lijn $y = x + 1$ — met een gat precies bij $x = 1$, omdat de oorspronkelijke $f$ daar niet gedefinieerd is:',
        amir_comment: 'Belangrijk: ondanks het wegdelen mag ik $x = 1$ niet in $D_f$ opnemen. De oorspronkelijke functie blijft daar ongedefinieerd. In de code los ik dat op met een if-controle en geef ik de limiet $f(1) := 2$ terug — een nette continue voortzetting.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Stukkosten in de productie',
        desc: 'Vaste kosten $F$ verdeeld over $x$ geproduceerde stuks plus variabele kosten $v$ per stuk: $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. Voor $x \\to \\infty$ naderen de stukkosten $v$ — een horizontale asymptoot in het echt.',
      },
      light_intensity: {
        title: 'Lichtsterkte en het kwadraat van de afstand',
        desc: 'Een lamp met vermogen $P$ levert op afstand $r$ de lichtsterkte $I(r) = \\frac{P}{4\\pi r^2}$. Bij $r \\to 0$ een pool (theoretisch oneindig helder vlak bij de bron), bij $r \\to \\infty$ geldt $I \\to 0$. Klassieke natuurwet.',
      },
      dilution: {
        title: 'Concentratie bij verdunnen',
        desc: 'Een sap met concentratie $c_0$ en volume $V_0$ wordt verdund met volume $V$ water: $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Hier is geen pool ($V_0 + V > 0$), maar voor $V \\to \\infty$ gaat de concentratie naar nul — horizontale asymptoot $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'Pool en nulpunt verwarren',
        correct: 'Nulpunt: teller nul. Pool: noemer nul en teller niet nul',
        why: 'Bij $f(x) = \\frac{x-3}{x+2}$ ligt het nulpunt bij $x = 3$ (daar is $p(x) = 0$, dus $f = 0$) en de pool bij $x = -2$ (daar is $q(x) = 0$). Wie de rollen verwisselt, tekent de grafiek volledig verkeerd — gat en pool op de verkeerde plekken.',
        amir_warning: 'Mijn ezelsbruggetje: het nulpunt is waar $f$ "nul teruggeeft". De pool is waar $f$ "explodeert". Beide volgen direct uit teller respectievelijk noemer — nooit verwarren.',
      },
      dont_cancel: {
        wrong: 'De gemeenschappelijke factor over het hoofd zien en een pool aannemen',
        correct: 'Eerst teller en noemer ontbinden, dan gemeenschappelijke factoren wegdelen',
        why: 'Bij $f(x) = \\frac{x^2-4}{x-2}$ lijkt $x = 2$ een pool te zijn. Ontbind je de teller echter, dan wordt het $\\frac{(x-2)(x+2)}{x-2} = x+2$ — dus slechts een ophefbare discontinuïteit. Wie niet ontbindt, beweert dat er een pool is die helemaal niet bestaat.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'Amir traint bij DataPulse een eenvoudig lineair model: drie kenmerken (tempo, volume, dansbaarheid), waaruit het model een luisteraarsbeoordeling schat. Uit drie bekende voorbeelden volgen drie vergelijkingen met drie onbekenden — de gewichten van de kenmerken. "Met de hand wordt dat niks", zegt Finn. Amir grijnst: "Jawel, met Gauss." Lineaire stelsels, een klassieker die achter elke ML-code schuilgaat.',
      challenge: 'Amir moet uit drie trainingsvoorbeelden de drie gewichten $a$, $b$, $c$ bepalen. Drie vergelijkingen, drie onbekenden — Gauss.',
      outro: 'Met de methode van Gauss brengt Amir de uitgebreide coëfficiëntenmatrix systematisch in trapvorm. Het gebied linksonder wordt stap voor stap nul, daarna leest hij de oplossingen terugwaarts af. "Dit is precies wat numpy.linalg.solve op de achtergrond doet", legt hij Finn uit — "alleen snap ik nu eindelijk waarom."',
    },
    objectives: {
      solve_2x2: 'Lineaire stelsels met twee onbekenden oplossen door substitutie, gelijkstelling of optelling',
      gauss_3x3: 'Stelsels met drie onbekenden systematisch in trapvorm brengen met het algoritme van Gauss',
      solution_types: 'De drie oplossingstypen onderscheiden — eenduidig, geen, oneindig veel',
      matrix_form: 'Een stelsel in matrixvorm $A\\vec{x} = \\vec{b}$ schrijven en de uitgebreide matrix correct opstellen',
    },
    explanation: {
      intro: 'Een lineair stelsel is een verzameling van meerdere vergelijkingen met dezelfde onbekenden. Een oplossing van het stelsel is een stel waarden dat ALLE vergelijkingen tegelijk vervult. Al bekend uit de derde klas — meestal twee vergelijkingen, twee onbekenden:',
      methods: 'Voor 2×2-stelsels volstaan de klassieke methodes: substitutie, gelijkstelling of optelling. Bij 3×3 of groter wordt het snel onoverzichtelijk — vandaar het algoritme van Gauss, dat mechanisch en altijd hetzelfde verloopt.',
      amir_tip: 'Mijn werkwijze voor 3×3: uitgebreide matrix opschrijven, dan DOELGERICHT. Eerst de linkerkolom onder de spil nul maken, dan de middelste kolom onder de tweede spil. Trapvorm. Terugwaarts oplossen. Klinkt mechanisch — het ís mechanisch, en dat is juist het voordeel.',
      gauss: 'Bij de methode van Gauss schrijf je het stelsel als uitgebreide matrix $(A | \\vec{b})$. Met drie rijoperaties — een rij met een getal vermenigvuldigen, rijen optellen of aftrekken, rijen verwisselen — vorm je de matrix om tot trapvorm. Dat verandert de oplossingsverzameling niet.',
      solution_types: 'Uit de trapvorm lees je het oplossingstype direct af: geen tegenstrijdige nulrij onderaan ⇒ eenduidige oplossing. Een rij $0 = c$ met $c \\neq 0$ ⇒ geen oplossing. Een rij $0 = 0$ ⇒ parameter invoeren, oneindig veel oplossingen.',
    },
    concepts: {
      lgs: {
        title: 'Lineair stelsel',
        desc: 'Een verzameling lineaire vergelijkingen met gemeenschappelijke onbekenden. In matrixvorm: $A \\vec{x} = \\vec{b}$, waarbij $A$ de coëfficiëntenmatrix is en $\\vec{b}$ de vector van de rechterleden.',
      },
      gauss: {
        title: 'Algoritme van Gauss',
        desc: 'Standaardoplossingsmethode. De uitgebreide matrix in trapvorm brengen, daarna terugwaarts oplossen. Drie toegestane operaties die de oplossingsverzameling niet veranderen: een rij met een scalair vermenigvuldigen, een veelvoud van een rij optellen, twee rijen verwisselen.',
      },
      solution_types: {
        title: 'Drie oplossingstypen',
        desc: 'Eenduidige oplossing (evenveel spillen als onbekenden), geen oplossing (tegenstrijdige rij $0 = c$), oneindig veel oplossingen (minstens één rij $0=0$, met vrije parameters).',
      },
      matrix: {
        title: 'Uitgebreide coëfficiëntenmatrix',
        desc: 'Schrijfwijze $(A | \\vec{b})$. Links de coëfficiënten van de onbekenden, rechts (door een streep gescheiden) het rechterlid. Bespaart het steeds opnieuw opschrijven van de variabelenamen.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'Eenvoudig 2×2-stelsel door optelling',
        context: 'Amir heeft twee voorbeeldvergelijkingen uit zijn trainingsdata. Hij zoekt $x$ (gewicht voor tempo) en $y$ (gewicht voor volume).',
        step1: 'Het stelsel opschrijven:',
        step2: 'Beide vergelijkingen optellen — de $y$-termen vallen weg, $x$ is meteen opgelost:',
        step3: '$x = 3$ invullen in een van de uitgangsvergelijkingen, hier de tweede:',
        step4: 'Oplossingsverzameling — aangeven als paar $(x, y)$:',
        amir_comment: 'Klassieke optelmethode: met geluk vallen variabelen meteen weg. Zo niet, dan moet ik eerst een vergelijking met een passend getal vermenigvuldigen — bijvoorbeeld met 2, zodat de coëfficiënten bij elkaar passen.',
      },
      gauss_3x3: {
        title: '3×3-stelsel met Gauss oplossen',
        context: 'Amir heeft een mini-trainingsset: drie luisteraarsbeoordelingen, drie gewichten $x, y, z$. Drie vergelijkingen — methode van Gauss in de uitgebreide matrix.',
        step1: 'Uitgebreide matrix opstellen — coëfficiënten links, rechterleden rechts van de streep:',
        step2: 'Rij 2 min 2 keer rij 1 — het element $a_{21} = 2$ wordt nul:',
        step3: 'Rij 3 min rij 1 — het element $a_{31} = 1$ wordt nul. De linkerkolom is nu schoon onder de spil 1:',
        step4: 'Verder tot trapvorm, dan terugwaarts oplossen: $z$ uit de laatste rij, hoger invullen voor $y$, daarna $x$. Oplossing: $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$:',
        amir_comment: 'Gauss is boekhouding: elke rijoperatie netjes noteren. Wie een operatie half uitvoert — bijvoorbeeld alleen de spilkolom omvormt — krijgt rommel. Discipline verslaat hier genialiteit.',
      },
    },
    realworld: {
      mischung: {
        title: 'Mengopgaven',
        desc: 'Een apotheker mengt twee oplossingen met concentraties $a$ en $b$ tot een mengsel met totale massa $m$ en totale werkzame stof $w$. Twee vergelijkingen, twee onbekenden — meteen een stelsel.',
      },
      preise: {
        title: 'Prijzen reconstrueren',
        desc: 'Drie klanten, drie bonnetjes met hoeveelheden en totaalprijs — daaruit de stukprijzen terugrekenen. Drie vergelijkingen, drie onbekende stukprijzen. Gauss lost dat in enkele stappen op.',
      },
      network: {
        title: 'Stroomkringen (Kirchhoff)',
        desc: 'In een netwerk van weerstanden levert elke knooppuntvergelijking (stroom erin = stroom eruit) en elke maasvergelijking (som van de spanningen = 0) een lineaire voorwaarde. Bij $n$ onbekenden geeft dat een $n \\times n$-stelsel — standaardmethode in de elektrotechniek.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Bij een rijoperatie alleen de spilkolom omvormen',
        correct: 'Elke kolom van de rij omvormen (inclusief het rechterlid) — allemaal tegelijk',
        why: 'Een rijoperatie geldt voor de HELE rij. Wie bij $Z_2 - 2Z_1$ alleen het spilelement omvormt en de andere kolommen vergeet, vernielt de vergelijking. Gevolg: de trapvorm ziet er goed uit, maar de oplossingen kloppen niet — en de fout is achteraf lastig te vinden.',
        amir_warning: 'Precies die fout heeft me in een proefwerk een heel punt gekost. Sindsdien schrijf ik de complete nieuwe rij — alle elementen inclusief rechterlid — netjes onder de oude. Zo is het in één oogopslag te vergelijken.',
      },
      no_solution: {
        wrong: 'Een tegenstrijdige rij $0 = c$ als $x = c$ interpreteren',
        correct: 'Een rij $0 = c$ met $c \\neq 0$ betekent: het stelsel heeft GEEN oplossing',
        why: 'Als er aan het eind $0 = 5$ uitkomt, is dat een tegenspraak — geen enkele waarde van $x, y, z$ kan dat vervullen. De oplossingsverzameling is leeg. Wie dat als $x = 5$ leest, geeft een oplossing op die het stelsel niet vervult.',
      },
    },
  },
};
