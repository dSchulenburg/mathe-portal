export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'Mia bouwt voor "Hafenlichter" een parkeergarage-minispel: Lumi zet de bestelbus neer en moet bij het ophalen betalen. Mia programmeert het tarief — 2,00 € tot een uur, daarna 3,50 €. Bij het testen valt Tim iets op: "Als je één seconde te laat bent, kost het ineens 1,50 € meer. Is dat een bug?" Mia bekijkt de grafiek. Die is niet kapot — hij springt. En precies dat springen heeft een naam.',
      challenge: 'Wanneer heeft een functie een echte sprong, wanneer ontbreekt er maar één los punt, en wanneer schiet ze naar oneindig? Mia moet de drie gevallen zeker uit elkaar houden om te beslissen welke tarieven ze überhaupt zo mag bouwen.',
      outro: 'Mia kan nu op elke verdachte plek controleren of een functie continu is: limiet van links, limiet van rechts, functiewaarde — komen alle drie overeen, dan is alles in orde. En ze weet welke gaten ze kan repareren en welke niet. Het parkeertarief blijft trouwens discontinu. Dat is geen bug, dat is een zakelijke beslissing.',
    },
    objectives: {
      anschaulich: 'Continuïteit aanschouwelijk herkennen — en weten waarom "tekenen zonder het potlood op te tillen" als definitie niet volstaat',
      definition: 'Continuïteit in een punt controleren via de limiet: $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Ophefbare discontinuïteit, sprongdiscontinuïteit en pool zeker onderscheiden',
      zwischenwertsatz: 'Met de tussenwaardestelling het bestaan van een nulpunt aantonen',
    },
    explanation: {
      intro: 'Aanschouwelijk betekent continu: je kunt de grafiek tekenen zonder het potlood op te tillen. Dat is een goede eerste gedachte — maar het is geen definitie waarmee je kunt rekenen. Hoe zit het met een functie waaraan precies één enkel punt ontbreekt? Het potlood til je praktisch niet op, en toch is de functie daar niet continu. Voor een stevige definitie heb je de limiet uit de differentiaalrekening nodig.',
      definition: 'Een functie $f$ heet continu in het punt $x_0$ als de functiewaarde en de limiet in dat punt elkaar niet tegenspreken:',
      drei_bedingungen: 'In deze ene regel zitten drie eisen. Aan alle drie moet voldaan zijn — bij elk tegenvoorbeeld faalt precies één ervan:',
      mia_tip: 'Ik controleer het altijd in deze volgorde: ten eerste, ligt het punt überhaupt in het domein? Zo niet, dan kan het al niet continu zijn. Ten tweede, loop ik van links en van rechts naar dezelfde waarde toe? Ten derde, is die waarde de waarde die de functie daar echt aanneemt? Drie vinkjes, klaar.',
      einseitig: 'Bij stuksgewijs gedefinieerde functies moet je op het naadpunt van beide kanten apart kijken. De linkerlimiet en de rechterlimiet mogen niet uiteenlopen, en beide moeten de functiewaarde raken:',
      arten: 'Er zijn precies drie manieren waarop continuïteit kapot kan gaan — en ze zijn niet even erg. Bij de ophefbare discontinuïteit ontbreekt alleen één punt; je kunt het aanvullen en alles is gerepareerd. Bij de sprongdiscontinuïteit bestaan beide eenzijdige limieten, maar ze zijn verschillend — hier helpt aanvullen niet. Bij de pool lopen de limieten naar oneindig, er is helemaal geen waarde om aan te vullen:',
      zwischenwertsatz: 'Continuïteit is niet alleen een eigenschap die je controleert — het is een gereedschap. De tussenwaardestelling zegt: een continue functie die onder nul begint en boven nul eindigt, moet onderweg de nul raken. Ze kan er niet overheen springen, want springen mag ze nu juist niet:',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Continuïteit in een punt',
        desc: 'De limiet in het punt komt overeen met de functiewaarde. Drie voorwaarden in één vergelijking: de functiewaarde bestaat, de limiet bestaat, en ze zijn gelijk. Valt er één weg, dan is de functie daar discontinu.',
      },
      einseitig: {
        title: 'Eenzijdige limieten',
        desc: 'Op naadpunten van stuksgewijs gedefinieerde functies controleer je links en rechts apart. Lopen de twee waarden uiteen, dan is er een sprong — en de spronghoogte is precies hun verschil.',
      },
      arten: {
        title: 'De drie soorten discontinuïteit',
        desc: 'Ophefbare discontinuïteit: limiet bestaat, functiewaarde ontbreekt — te repareren. Sprongdiscontinuïteit: beide eenzijdige limieten bestaan, maar zijn verschillend — niet te repareren. Pool: de limieten lopen naar oneindig — al helemaal niet te repareren.',
      },
      zwischenwertsatz: {
        title: 'Tussenwaardestelling',
        desc: 'Is $f$ continu op $[a;b]$ en wisselt ze aan de randen van teken, dan ligt daartussen minstens één nulpunt. De stelling garandeert het bestaan — niet de uniciteit en niet waar het precies ligt.',
      },
    },
    examples: {
      luecke: {
        title: 'Een ophefbare discontinuïteit dichten',
        context: 'Mia stuit op een term die bij $x = 1$ uitkomt op $\\frac{0}{0}$.',
        step1: 'De noemer wordt bij $x = 1$ nul — het punt ontbreekt in het domein:',
        step2: 'De teller ontbinden in factoren en wegdelen. Dat mag, zolang $x \\neq 1$ is:',
        step3: 'De vereenvoudigde term is bij $x = 1$ zonder problemen uit te rekenen — dat is de limiet:',
        step4: 'Nu vul je het ontbrekende punt aan. De aangevulde functie heet continue voortzetting:',
        mia_comment: 'Van dat $\\frac{0}{0}$ schrok ik eerst — ik dacht dat er iets kapot was. Maar dat is niet zo. Het betekent alleen: eerst wegdelen, later vragen. Kapot zou $\\frac{1}{0}$ zijn, daar staat een echte nul alleen in de noemer.',
      },
      sprung: {
        title: 'Een sprongdiscontinuïteit opmeten',
        context: 'Het parkeertarief uit Mia\'s minispel — en de vraag hoe duur één seconde kan zijn.',
        step1: 'Het tarief is stuksgewijs gedefinieerd, het naadpunt ligt bij een uur:',
        step2: 'Van links en van rechts naar het naadpunt toe lopen en de waarden vergelijken:',
        step3: 'De twee limieten bestaan, maar zijn verschillend — dat is de definitie van een sprongdiscontinuïteit:',
        step4: 'De spronghoogte is hun verschil. Die is hier geen fout, maar het tarief zelf:',
        kai_comment: 'Precies zulke sprongen zijn de reden waarom mobiele abonnementen en portotreden mensen ergeren. Wiskundig is daar niets mis mee — maar wie één seconde te laat is, betaalt nu eenmaal de volle volgende trede. Continue tarieven rekenen per seconde af. Dat is een beslissing, geen formule.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Staffeltarieven',
        desc: 'Parkeergarage, porto, mobiel abonnement: overal waar per begonnen eenheid wordt afgerekend, is de prijsfunctie discontinu. Elke trede is een sprongdiscontinuïteit — en elk daarvan is een bewuste keuze van de aanbieder.',
      },
      temperatur: {
        title: 'Natuurkundige grootheden',
        desc: 'Temperatuur, positie, snelheid: deze grootheden kunnen niet springen, omdat een sprong oneindig veel energie in nul tijd zou betekenen. Daarom zijn natuurkundige modellen bijna altijd continue functies.',
      },
      nullstelle: {
        title: 'Nulpunten numeriek vinden',
        desc: 'Elke rekenmachine gebruikt de tussenwaardestelling: hij zoekt een interval met tekenwisseling en halveert het steeds verder. Zonder continuïteit zou deze methode waardeloos zijn — het nulpunt zou gewoon overgesprongen kunnen worden.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'Als $f(x_0)$ bestaat, is $f$ daar ook continu',
        correct: 'De functiewaarde moet bovendien overeenkomen met de limiet',
        why: 'Een sprongfunctie is in haar sprongpunt gedefinieerd — ze heeft daar een volkomen normale functiewaarde. Toch is ze discontinu, omdat de limiet van de ene kant iets anders oplevert. Gedefinieerd zijn is alleen de eerste van drie voorwaarden, nog niet het antwoord.',
        mia_warning: 'Dat is mij bij de parkeergarage overkomen. Bij precies een uur is de prijs gedefinieerd, namelijk 2,00 €. Ik dacht dat daarmee alles glad liep. De grafiek springt toch — alleen een seconde later.',
      },
      pol_ist_hebbar: {
        wrong: 'Elk gat in het domein kun je dichten met een passende waarde',
        correct: 'Alleen als de tweezijdige limiet bestaat en eindig is',
        why: 'Bij $\\frac{1}{x}$ loopt de functie links naar $-\\infty$ en rechts naar $+\\infty$. Er is geen getal dat je zou kunnen invullen — welk je ook kiest, de grafiek schiet ernaast naar oneindig. De vuistregel voor breuken: valt de kritieke factor weg, dan is de discontinuïteit ophefbaar; blijft hij in de noemer staan, dan is het een pool.',
        mia_warning: 'Ik controleer het nu altijd met twee getallen: $0{,}001$ en $-0{,}001$ invullen. Komen er twee vergelijkbare waarden uit, dan is de discontinuïteit ophefbaar. Komen er $1000$ en $-1000$ uit, dan is het een pool — en daar valt niets aan te doen.',
      },
    },
  },
};
