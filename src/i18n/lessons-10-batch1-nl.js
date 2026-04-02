export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia heeft de springcurve van Lumi werkend gekregen — maar nu zit ze vast. In level 3 van "Hafenlichter" moet Lumi op een bewegend platform landen. "Ik heb het exacte moment nodig waarop de springcurve het platform raakt", zegt Mia tegen Tim. Dat betekent: ze moet een kwadratische vergelijking oplossen. Niet alleen de functie tekenen, maar concreet naar $x$ oplossen.',
      challenge: 'Mia moet berekenen wanneer Lumis springcurve het bewegende platform snijdt — dat leidt tot een kwadratische vergelijking.',
      outro: 'Mia heeft drie methoden in haar gereedschapskist: de abc-formule, het kwadraatafsplitsen en factoriseren. Afhankelijk van de vergelijking kiest ze de juiste methode — en Lumi landt nu precies op elk platform. "Het is als een Zwitsers zakmes", grijnst ze.',
    },
    objectives: {
      solve: 'Kwadratische vergelijkingen veilig oplossen en de oplossingenverzameling aangeven',
      pq_formula: 'De abc-formule toepassen — inclusief bijzondere gevallen (geen of een oplossing)',
      completing_square: 'Kwadraatafsplitsen als oplosmethode begrijpen en uitvoeren',
      factoring: 'Kwadratische vergelijkingen door factoriseren oplossen',
    },
    explanation: {
      intro: 'Een kwadratische vergelijking heeft de algemene vorm met hoogste exponent 2. In tegenstelling tot lineaire vergelijkingen ($x$ tot de macht 1) kan ze nul, een of twee oplossingen hebben. De algemene vorm luidt:',
      normal_form: 'Voor de abc-formule hebben we de genormaliseerde vorm nodig — dat wil zeggen, de coefficient voor $x^2$ moet precies 1 zijn. Is dat niet het geval, dan delen we de hele vergelijking door $a$:',
      mia_tip: 'Ik onthoud: eerst alles naar een kant brengen, zodat rechts nul staat. Dan delen door de coefficient voor $x^2$. Pas DAARNA mag ik de abc-formule gebruiken!',
      pq_formula: 'De abc-formule is het universele gereedschap voor kwadratische vergelijkingen in genormaliseerde vorm. Je leest $p$ en $q$ direct af en vult in:',
      completing_square: 'Kwadraatafsplitsen werkt zo: je vormt de linkerkant om tot een perfect kwadraat. Daarvoor tel je $(\\frac{p}{2})^2$ bij beide kanten op. Het resultaat is een uitdrukking van de vorm $(x + \\frac{p}{2})^2$, die je gemakkelijk naar $x$ kunt oplossen.',
      factoring: 'Als je de nulpunten $x_1$ en $x_2$ kent (of kunt raden), kun je de vergelijking schrijven als product van twee haakjes. Het product is nul als minstens een factor nul is:',
    },
    concepts: {
      pq_formula: {
        title: 'abc-formule',
        desc: 'Het standaardgereedschap voor kwadratische vergelijkingen in genormaliseerde vorm. Werkt altijd — je hebt alleen $p$ (coefficient van $x$) en $q$ (constante term) nodig.',
      },
      completing_square: {
        title: 'Kwadraatafsplitsen',
        desc: 'Je maakt de linkerkant compleet tot een perfect kwadraat. Bijzonder nuttig als je ook het toppunt van een parabool wilt bepalen.',
      },
      discriminant: {
        title: 'Discriminant',
        desc: 'De uitdrukking onder de wortel in de abc-formule: $D > 0$ geeft twee oplossingen, $D = 0$ geeft precies een, $D < 0$ betekent geen reele oplossing.',
      },
      factoring: {
        title: 'Factoriseren',
        desc: 'Ontbinding in twee lineaire factoren. Werkt bijzonder elegant als de nulpunten gehele getallen zijn — dan kun je ze vaak raden.',
      },
    },
    examples: {
      pq_application: {
        title: 'Vergelijking oplossen met de abc-formule',
        context: 'Mia berekent wanneer Lumis springcurve het platform bij $y = 0$ raakt.',
        step1: 'De vergelijking is al in genormaliseerde vorm (coefficient voor $x^2$ is 1):',
        step2: 'We lezen $p$ en $q$ af — let op de tekens:',
        step3: 'Waarden invullen in de abc-formule en stap voor stap uitrekenen:',
        step4: 'Twee oplossingen — Lumi raakt het platform op twee punten:',
        mia_comment: 'Twee oplossingen kloppen: Lumi springt op bij $x = 1$ en landt bij $x = 3$. Het stuk ertussen is de vlucht!',
      },
      completing_square: {
        title: 'Oplossen door kwadraatafsplitsen',
        context: 'Tim wil de vergelijking zonder abc-formule oplossen — als alternatief.',
        step1: 'We starten met de vergelijking in genormaliseerde vorm:',
        step2: 'Eerst de constante term naar rechts brengen:',
        step3: 'Nu het kwadraatafsplitsen: $(\\frac{6}{2})^2 = 9$ bij beide kanten optellen:',
        step4: 'De linkerkant is nu een perfect kwadraat — wortel trekken geeft twee gevallen:',
        step5: 'Beide oplossingen berekenen:',
        mia_comment: 'Zelfde vergelijking, zelfde oplossingen, andere weg. Ik gebruik kwadraatafsplitsen als ik ook het toppunt van de parabool nodig heb — twee vliegen in een klap!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds en werpparabolen',
        desc: 'Elke worp in Angry Birds volgt een parabool. De vergelijking $h(t) = 0$ vertelt je wanneer het object de grond raakt. Fysici gebruiken dezelfde formule voor echte werpbewegingen.',
      },
      breakeven: {
        title: 'Break-evenpunt vinden',
        desc: 'Een bedrijf wil weten: vanaf welk aantal maken we winst? De vergelijking $G(x) = 0$ levert de break-evenpunten — meestal een kwadratische vergelijking.',
      },
      rocket: {
        title: 'Raketlanceringen',
        desc: 'De hoogte van een raket na de lancering volgt een kwadratische functie (zolang de brandstof meegaat). Wanneer bereikt ze 1000 m? Kwadratische vergelijking!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'abc-formule zonder nul aan de rechterkant',
        correct: 'Eerst alles naar een kant brengen',
        why: 'De abc-formule vereist dat de rechterkant nul is. Bij $x^2 + 3x = 5$ moet je eerst $-5$ bij beide kanten optellen, zodat $x^2 + 3x - 5 = 0$ ontstaat. Anders klopt $q$ niet!',
        mia_warning: 'Ik had deze fout ooit in mijn code — de platformbotsing was helemaal fout omdat $q$ het verkeerde teken had. Altijd eerst nul rechts!',
      },
      sign_pq: {
        wrong: 'Tekenfout bij $p$ in de abc-formule',
        correct: 'Let op het minteken voor $\\frac{p}{2}$',
        why: 'In de abc-formule staat $-\\frac{p}{2}$. Bij $x^2 - 6x + 8 = 0$ is $p = -6$, dus $-\\frac{-6}{2} = +3$. Vergeet je het minteken, dan krijg je $-3$ in plaats van $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia werkt aan het vuurtorenlevel van Hafenlichter. De vuurtoren schijnt een lichtkegel over de haven, en Lumi moet zich in de schaduw verstoppen. "Ik moet berekenen hoe ver de lichtkegel bij een bepaalde hoek reikt", zegt Mia. Tim wijst naar een rechthoekige driehoek die de lichtkegel met de grond vormt. "Dat is goniometrie — sinus, cosinus en tangens."',
      challenge: 'Mia heeft de reikwijdte van de lichtkegel bij verschillende hoeken nodig om het schaduwgebied te programmeren.',
      outro: 'De vuurtoren draait langzaam en de lichtkegel beweegt over de haven. Dankzij sinus en cosinus berekent Mia\'s code in realtime welke gebieden verlicht zijn. Lumi sluipt van schaduw naar schaduw — het level is echt spannend geworden!',
    },
    objectives: {
      sin_cos_tan: 'Sinus, cosinus en tangens in de rechthoekige driehoek veilig toepassen',
      unit_circle: 'De eenheidscirkel begrijpen en waarden aflezen',
      angle_calculations: 'Hoeken en zijdelengten met goniometrische functies berekenen',
      real_problems: 'Praktijkopgaven met goniometrie oplossen (hoogten, afstanden, hoeken)',
    },
    explanation: {
      intro: 'Goniometrie verbindt hoeken met zijdelengten. In elke rechthoekige driehoek gelden drie fundamentele verhoudingen — genoemd naar de hoek $\\alpha$ die je beschouwt:',
      mia_tip: 'Mijn ezelsbruggetje: "SOS CAS TOA" — Sinus = Overstaande/Schuine zijde, Cosinus = Aanliggende/Schuine zijde, Tangens = Overstaande/Aanliggende. Klinkt gek, maar je vergeet het nooit!',
      unit_circle: 'De eenheidscirkel heeft straal 1 en middelpunt in de oorsprong. Voor elke hoek $\\alpha$ levert hij direct de waarden: de $x$-coordinaat is $\\cos(\\alpha)$, de $y$-coordinaat is $\\sin(\\alpha)$. Dus geldt altijd:',
      special_angles: 'Bepaalde hoeken moet je uit je hoofd kennen: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Tip: op de eenheidscirkel kun je deze waarden meetkundig aflezen.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'De verhouding van overstaande zijde tot schuine zijde. Op de eenheidscirkel komt $\\sin(\\alpha)$ overeen met de $y$-coordinaat van het punt op de cirkel.',
      },
      cosine: {
        title: 'Cosinus',
        desc: 'De verhouding van aanliggende zijde tot schuine zijde. Op de eenheidscirkel komt $\\cos(\\alpha)$ overeen met de $x$-coordinaat. Cosinus en sinus zijn $90°$ verschoven.',
      },
      tangent: {
        title: 'Tangens',
        desc: 'De verhouding van overstaande tot aanliggende zijde — of equivalent $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideaal voor hellingen en hellingshoeken.',
      },
      unit_circle: {
        title: 'Eenheidscirkel',
        desc: 'Een cirkel met straal 1. Elk punt op de cirkel heeft coordinaten $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Zo kun je sin en cos voor alle hoeken definieren — niet alleen voor scherpe hoeken.',
      },
    },
    examples: {
      height_tan: {
        title: 'Hoogte berekenen met de tangens',
        context: 'Mia meet de hoek naar de top van de vuurtoren: $35°$. De afstand tot de toren is $50\\,\\text{m}$.',
        step1: 'Schets: de afstand is de aanliggende zijde, de gezochte hoogte is de overstaande zijde. Dus tangens:',
        step2: 'Naar hoogte $h$ omvormen — beide kanten vermenigvuldigen met $50\\,\\text{m}$:',
        step3: 'Rekenmachine (DEG-modus!): $\\tan(35°) \\approx 0{,}7002$ invullen en uitrekenen:',
        mia_comment: 'In het spel gebeurt dit in realtime: de hoek van de lichtkegel verandert, en mijn code berekent meteen de nieuwe reikwijdte. Tangens is daar perfect voor!',
      },
      unit_circle: {
        title: 'Waarden aflezen op de eenheidscirkel',
        context: 'Tim wil Mia laten zien hoe de eenheidscirkel werkt — aan de hand van $60°$.',
        step1: 'Hoek omrekenen (optioneel): $60°$ komt overeen met $\\frac{\\pi}{3}$ in radialen:',
        step2: 'Sinuswaarde aflezen — de $y$-coordinaat van het punt op de eenheidscirkel:',
        step3: 'Cosinuswaarde aflezen — de $x$-coordinaat:',
        step4: 'Het punt op de eenheidscirkel heeft dus de coordinaten:',
        mia_comment: 'Op de eenheidscirkel zie ik sin en cos als lengten. Dat maakt het veel aanschouwelijker dan alleen getallen in een tabel!',
      },
    },
    realworld: {
      compass: {
        title: 'Navigatie en GPS',
        desc: 'Je smartphone berekent richtingen met goniometrie. De functie atan2 zet $x$- en $y$-coordinaten om in een hoek — zo weet Google Maps in welke richting je moet lopen.',
      },
      building_height: {
        title: 'Gebouwhoogten meten',
        desc: 'Architecten en landmeters meten gebouwhoogten zonder op het dak te klimmen. Met een hoekmeter en de tangens zijn afstand en hoek voldoende.',
      },
      music: {
        title: 'Tonen en geluidsgolven',
        desc: 'Elke toon is een sinusgolf. De stemtoon A heeft 440 trillingen per seconde — beschreven door $f(t) = \\sin(880\\pi t)$. Muziek is toegepaste goniometrie!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Sinus en cosinus verwisseld',
        correct: 'Sinus = overstaande zijde / schuine zijde',
        why: 'Sinus hoort bij de overstaande zijde (de zijde tegenover de hoek), cosinus bij de aanliggende zijde (de zijde naast de hoek). Verwissel je ze, dan krijg je de verkeerde waarde.',
        mia_warning: 'Overkomt me nog steeds soms! Ik teken de driehoek en label de zijden ten opzichte van de hoek. Dan zie ik meteen wat de overstaande en wat de aanliggende zijde is.',
      },
      deg_rad: {
        wrong: 'Verkeerde hoekmodus op de rekenmachine',
        correct: 'Altijd DEG-modus controleren bij graden',
        why: 'In RAD-modus interpreteert de rekenmachine $90$ als $90$ radialen (ca. $5156°$), niet als $90°$. $\\sin(90°) = 1$, maar $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Resultaat: volledig fout.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter moet een multiplayermodus krijgen. Mia test de servers met 10 spelers — alles draait soepel. Maar Tim waarschuwt: "Wat gebeurt er bij 100? Bij 1000? Als het spel viraal gaat, verdubbelt het aantal spelers misschien elke paar dagen." Mia rekent na en schrikt: exponentiele groei is veel sneller dan je denkt.',
      challenge: 'De serverbelasting groeit niet lineair met de spelers, maar exponentieel. Mia moet voorspellen wanneer de servers overbelast raken.',
      outro: 'Mia heeft een model gebouwd dat de ontwikkeling van het spelersaantal voorspelt. Dankzij de exponentiele functie weet ze nu: als de verdubbelingstijd 3 dagen is, heeft ze na 2 weken 32 keer zoveel servercapaciteit nodig. "Liever vroeg opschalen dan laat crashen", besluit ze.',
    },
    objectives: {
      exponential_functions: 'Exponentiele functies herkennen en van lineaire functies onderscheiden',
      growth_factor: 'De groeifactor uit percentages bepalen en interpreteren',
      half_life: 'Halveringstijd en verdubbelingstijd berekenen en toepassen',
      model_real_world: 'Reele groei- en vervalprocessen met exponentiele functies modelleren',
    },
    explanation: {
      intro: 'Bij lineaire groei komt er elke stap hetzelfde bedrag bij. Bij exponentiele groei wordt er elke stap met dezelfde factor vermenigvuldigd. Dat klinkt vergelijkbaar — maar leidt tot totaal verschillende resultaten:',
      growth_factor: 'De groeifactor $b$ vertelt je alles: groeit iets met $p\\%$ per tijdseenheid, dan is de factor groter dan 1. Neemt iets met $p\\%$ af (verval), dan is hij kleiner dan 1:',
      mia_tip: 'Lineaire functies tellen op, exponentiele functies vermenigvuldigen. Bij 10% groei per dag is de factor $b = 1{,}10$ — na 7 dagen dus $1{,}10^7 \\approx 1{,}95$, bijna een verdubbeling! Dat verraste me bij de serverplanning.',
      half_life: 'De halveringstijd $t_H$ is de tijd waarna nog de helft over is. Die is constant — ongeacht hoeveel je begint. Dat is het bijzondere aan exponentieel verval:',
      doubling_time: 'Het equivalent bij groei: de verdubbelingstijd $t_V$ vertelt je na hoeveel tijd de waarde verdubbeld is. Ook die blijft altijd gelijk:',
    },
    concepts: {
      exponential_function: {
        title: 'Exponentiele functie',
        desc: 'De algemene vorm: $a$ is de beginwaarde, $b$ de groeifactor, $t$ de tijd. Essentieel: de variabele staat in de exponent — dat maakt het verschil met machtsfuncties.',
      },
      growth_factor: {
        title: 'Groeifactor',
        desc: 'Bij $p\\%$ toename: $b = 1 + \\frac{p}{100}$. Voorbeeld: 5% groei geeft $b = 1{,}05$. Bij 12% afname: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Halveringstijd',
        desc: 'De tijd totdat een waarde gehalveerd is. Typisch voor radioactief verval, medicijnen in het lichaam of batterijontlading. De halveringstijd is onafhankelijk van de beginwaarde.',
      },
      euler_base: {
        title: 'Natuurlijke exponentiele functie',
        desc: 'Het grondtal $e \\approx 2{,}718$ is bijzonder: de functie $e^x$ is haar eigen afgeleide. Met $k > 0$ groeit ze, met $k < 0$ vervalt ze. Standaard in de natuurwetenschappen.',
      },
    },
    examples: {
      bacteria: {
        title: 'Bacteriegroei',
        context: 'Een bacteriecultuur begint met 500 bacterien en verdubbelt elk uur.',
        step1: 'Beginwaarde en groeifactor identificeren — verdubbeling betekent factor 2:',
        step2: 'De exponentiele functie opstellen — $t$ telt de uren:',
        step3: 'Voor $t = 5$ (na 5 uur) invullen: $2^5 = 32$:',
        step4: 'Na 5 uur zijn er 16.000 bacterien:',
        mia_comment: 'Van 500 naar 16.000 in slechts 5 uur! Dat laat zien waarom exponentiele groei zo verrassend is. Bij servers werkt het net zo — spelersaantallen kunnen sneller groeien dan je servers kunt bijbestellen.',
      },
      radioactive: {
        title: 'Radioactief verval',
        context: 'Een medicijn heeft een halveringstijd van 8 dagen. Beginhoeveelheid: 200 g.',
        step1: 'Halveringstijd en beginwaarde noteren:',
        step2: 'De vervalformule met $t_H = 8$ opstellen:',
        step3: 'Na 24 dagen invullen — dat zijn precies 3 halveringstijden ($\\frac{24}{8} = 3$):',
        step4: 'Na 24 dagen is er nog maar 25 g over — een achtste van de beginwaarde:',
        mia_comment: 'Na elke halveringstijd halveert de hoeveelheid: $200 \\to 100 \\to 50 \\to 25$. Dat is altijd zo, of je nu met 200 g of 2 ton begint.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Virale TikTok-video\'s',
        desc: 'Een virale video begint met 100 views. Als elke kijker het aan 1,8 mensen laat zien, exploderen de aantallen: na 10 rondes zijn het al meer dan 35.000 views. Algoritmen versterken dit effect nog.',
      },
      battery: {
        title: 'Batterijontlading',
        desc: 'Je telefoonbatterij verliest per uur ongeveer 5% lading. Na 14 uur is nog ongeveer de helft over — dat is geen lineaire afname, maar exponentieel verval.',
      },
      pandemic: {
        title: 'Pandemieverspreiding',
        desc: 'COVID-19 heeft laten zien wat "exponentiele groei" betekent: zonder maatregelen verdubbelden de besmettingen elke 3 dagen. Na een maand zou de factor $2^{10} = 1024$ zijn.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Lineair model in plaats van exponentieel',
        correct: 'Procentuele verandering = exponentiele functie',
        why: '"5% groei per jaar" is NIET $+5$ per jaar, maar $\\cdot 1{,}05$ per jaar. Bij een lineair model is de toename constant, bij een exponentieel model wordt die steeds groter.',
        mia_warning: 'Ik had eerst $\\text{Spelers}(t) = 100 + 50t$ berekend. De echte aantallen waren na een week 3x zo hoog! Exponentiele groei wordt bijna altijd onderschat.',
      },
      wrong_growth_factor: {
        wrong: 'Percentage direct als factor ingevuld',
        correct: 'Factor = $1 + \\frac{p}{100}$',
        why: 'Bij 3% groei is de factor $1{,}03$, niet $3$! Met $b = 3$ zou de waarde verdrievoudigen in plaats van 3% groeien. Reken altijd $1 + \\frac{p}{100}$.',
      },
    },
  },
};
