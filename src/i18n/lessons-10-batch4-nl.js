export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'Mia zet niveau 4 van Havenlichten in elkaar: Lumi moet op een platform springen dat langzaam en gelijkmatig naar rechts drijft. "De beweging is lineair", legt Tim uit. "60 pixels per seconde — klaar." Mia typt het in en merkt meteen: dit is een doodgewone vergelijking van een rechte lijn. Startpositie plus snelheid maal tijd. Precies wat ze uit de derde klas heeft meegenomen, alleen nu formeler: $f(x) = m \\cdot x + b$.',
      challenge: 'Mia moet Lumi\'s sprongkromme zo afstemmen dat hij precies op het drijvende platform landt. Helling van de platformbeweging en snijpunt met Lumi\'s baan — allemaal lineair.',
      outro: 'Een lineaire functie heeft twee knoppen: $m$ bepaalt hoe steil ze loopt, $b$ verschuift haar omhoog of omlaag. Mia snapt nu waarom ze die keer op keer nodig heeft: platforms, energieverbruik, healthbalken — overal waar iets "per stap" met een constante hoeveelheid toe- of afneemt, is de lijnvergelijking het juiste gereedschap.',
    },
    objectives: {
      recognize: 'Lineaire functies herkennen aan het voorschrift en aan de grafiek',
      slope_intercept: 'De richtingscoëfficiënt $m$ en het snijpunt met de y-as $b$ aflezen uit de vorm $f(x) = mx + b$',
      point_slope: 'Een lijn opstellen uit een punt en een helling met de punt-richtingsvorm',
      two_points: 'De lijnvergelijking bepalen uit twee punten — helling berekenen, dan $b$',
    },
    explanation: {
      intro: 'Een lineaire functie beschrijft een gelijkmatig verband: als $x$ met één eenheid verandert, verandert $y$ altijd met dezelfde hoeveelheid. In de grafiek ontstaat daardoor een rechte lijn. De algemene vorm is:',
      slope: 'De richtingscoëfficiënt $m$ meet precies die "hoeveelheid per stap". Je haalt hem uit twee willekeurige punten van de lijn — hoogteverschil gedeeld door breedteverschil:',
      mia_tip: 'Ik denk aan Lumi\'s platform: dat drijft precies 60 pixels per seconde. Dat is mijn $m = 60$ pixels/seconde. Als Lumi bij $b = 200$ start, is de positie na $t$ seconden simpelweg $f(t) = 60t + 200$. Een lineaire functie in het wild!',
      intercept: 'Het snijpunt met de y-as $b$ is de waarde waar de lijn de verticale as snijdt. Je leest hem direct van de grafiek af — of je vult $x = 0$ in het voorschrift in:',
      point_slope: 'Als je een punt $P(x_0 \\mid y_0)$ en de helling $m$ kent, schrijf je de lijn het snelst in de punt-richtingsvorm. Daaruit los je op naar $y$ en krijg je de standaardvorm:',
    },
    concepts: {
      normal_form: {
        title: 'Standaardvorm $f(x) = mx + b$',
        desc: 'De gebruikelijke schrijfwijze. $m$ is de richtingscoëfficiënt, $b$ het snijpunt met de y-as. Beide parameters kun je direct uit het voorschrift aflezen — en beide hebben een duidelijke meetkundige betekenis.',
      },
      slope: {
        title: 'Richtingscoëfficiënt $m$',
        desc: 'Verandering van $y$ per eenheid van $x$. Uit twee punten: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Positief = stijgend, negatief = dalend, $m = 0$ = horizontale lijn.',
      },
      point_slope: {
        title: 'Punt-richtingsvorm',
        desc: 'Als een punt $(x_0 \\mid y_0)$ en de helling $m$ bekend zijn: $y - y_0 = m(x - x_0)$. Handig, want je hoeft $b$ niet apart te berekenen — je lost gewoon op naar $y$.',
      },
      parallel_perpendicular: {
        title: 'Evenwijdig en loodrecht',
        desc: 'Twee lijnen zijn evenwijdig als ze dezelfde helling hebben ($m_g = m_h$). Ze staan loodrecht op elkaar als het product van de hellingen $-1$ is ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Lijnvergelijking uit twee punten',
        context: 'Mia heeft twee waarnemingspunten van Lumi\'s platformbaan: $P_1(2 \\mid 1)$ en $P_2(5 \\mid 7)$. Welke lijnvergelijking beschrijft die beweging?',
        step1: 'De twee gegeven punten opschrijven:',
        step2: 'Helling berekenen — verschil van de y-waarden gedeeld door verschil van de x-waarden:',
        step3: 'Punt-richtingsvorm opstellen met $P_1(2 \\mid 1)$ en $m = 2$, daarna oplossen naar $y$:',
        step4: 'Voltooide lijnvergelijking in standaardvorm:',
        mia_comment: 'Mooie werkwijze: twee punten → helling → invullen → uitwerken. Als ik later nog een derde punt heb, kan ik daarmee controleren of mijn vergelijking klopt.',
      },
      intersection: {
        title: 'Snijpunt van twee lijnen',
        context: 'Het platform beweegt langs $g\\colon y = 2x - 3$, Lumi\'s sprongbaan langs $h\\colon y = -x + 6$. Waar ontmoeten ze elkaar?',
        step1: 'Beide lijnvergelijkingen noteren — dezelfde variabele $x$, dezelfde variabele $y$:',
        step2: 'In het snijpunt zijn beide $y$-waarden gelijk. Dus: de rechterleden aan elkaar gelijkstellen:',
        step3: 'Oplossen naar $x$ — beide $x$-termen naar één kant, de constanten naar de andere:',
        step4: 'De $x$-waarde in een van beide vergelijkingen invullen om de $y$-waarde te krijgen. Snijpunt $S$:',
        mia_comment: 'In het spel is precies dat snijpunt het treffer-frame. Als ik het tijdstip $x = 3$ ken, weet ik in welk frame ik de botsing moet afvuren.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Mobiel abonnement met basistarief',
        desc: 'Klassiek voorbeeld: 9,99 € basistarief per maand plus 10 cent per minuut. De kosten als functie van de gespreksduur vormen een perfecte rechte lijn — $b$ is het basistarief, $m$ de minuutprijs.',
      },
      taxi: {
        title: 'Taxikosten',
        desc: '4 € starttarief bij instappen, daarna 2,50 € per kilometer. De totale kosten groeien lineair met de afgelegde afstand. Af te lezen op elke bon.',
      },
      constant_speed: {
        title: 'Beweging met constante snelheid',
        desc: 'Een skater vertrekt met gelijkmatige $v$ en start bij $s_0$. De afgelegde afstand na $t$ seconden: $s(t) = v \\cdot t + s_0$. Pure lijnvergelijking — alleen de variabelen heten anders.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Helling omgekeerd: $\\Delta x / \\Delta y$ in plaats van $\\Delta y / \\Delta x$',
        correct: 'Eerst de hoogte (y), dan de breedte (x): $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'De helling beschrijft "hoeveel hoogte per stap" — dus de $y$-verandering in de teller en de $x$-verandering in de noemer. Draai je de breuk om, dan krijg je het omgekeerde: uit $m = 2$ wordt ten onrechte $0{,}5$.',
        mia_warning: 'Mijn trucje: ik denk aan een trap. Hoogte van de tree gedeeld door breedte van de tree. De hoogte staat altijd boven in de breuk — net als op de trap.',
      },
      intercept_zero: {
        wrong: 'Het snijpunt met de y-as verwarren met het nulpunt',
        correct: 'Nulpunt: stel $f(x) = 0$ en los op naar $x$',
        why: 'Het snijpunt met de y-as $b$ is de $y$-waarde bij $x = 0$ — dus een $y$-waarde. Het nulpunt is de $x$-waarde waarbij $f(x) = 0$. Bij $f(x) = 2x + 5$ is $b = 5$, maar het nulpunt ligt bij $x = -2{,}5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'Mia ontwerpt een draaiende eindbaas voor Havenlichten. De baas is een wervelend molenrad met drie armen — en Lumi moet door de openingen springen. "De hitbox moet cirkelvormig zijn", zegt Tim. "Anders ziet het er scheef uit als Lumi een arm raakt die helemaal niet in de buurt is." Mia heeft de omtrek, de oppervlakte en de hoek van elke arm nodig — pure cirkelmeetkunde.',
      challenge: 'Mia moet ronde hitboxes programmeren. Daarnaast de booglengte die elke arm per seconde bestrijkt — anders klopt de draaisnelheid niet.',
      outro: 'Met $U = 2\\pi r$ en $A = \\pi r^2$ heeft Mia het standaardgereedschap. En met radialen rekent ze draaihoeken direct om naar afgelegde afstanden — veel sneller dan via de omweg over $360°$. "Radialen zijn de programmeertaal van draaibewegingen", noteert ze.',
    },
    objectives: {
      umfang_flaeche: 'Omtrek en oppervlakte van een cirkel berekenen met straal of diameter',
      bogenmass: 'Hoeken zeker omrekenen tussen graden en radialen',
      sektor: 'Oppervlakte en booglengte van een sector met gegeven middelpuntshoek berekenen',
      bogenlaenge: 'Booglengtes van de hele cirkel en van de sector in beide hoekmaten bepalen',
    },
    explanation: {
      intro: 'De cirkel is de verzameling van alle punten op dezelfde afstand $r$ van het middelpunt. Uit die ene maat $r$ volgen omtrek en oppervlakte — beide met de beroemde constante $\\pi \\approx 3{,}14159$:',
      bogenmass: 'In plaats van hoeken in graden te meten kun je ook de bijbehorende booglengte op de eenheidscirkel gebruiken — dat heet radiaal. Een hele cirkel heeft omtrek $2\\pi r$, dus $360°$ komt precies overeen met $2\\pi$. Voor elke hoek $\\alpha$ in radialen geldt:',
      mia_tip: 'Radialen vond ik eerst raar. Maar in code zijn ze veel praktischer: als ik Math.cos(angle) in JavaScript schrijf, verwacht de functie radialen — geen graden. Wie dat vergeet, draait ineens sprites de verkeerde kant op.',
      umrechnung: 'Het omrekenen gaat via de verhoudingsregel "$360° = 2\\pi\\,\\text{rad}$". Dat levert een vaste factor op waarmee je graden en radialen in elkaar omzet:',
      sektor: 'Een sector is een "taartpunt" van de cirkel. Zijn aandeel in oppervlakte en omtrek komt precies overeen met het aandeel van zijn middelpuntshoek in de volle hoek. Met hoek $\\alpha$ (in graden of radialen) geldt:',
    },
    concepts: {
      umfang: {
        title: 'Omtrek $U$',
        desc: 'De lengte van de cirkellijn. Hangt lineair van de straal af — dubbele straal betekent dubbele omtrek. Met de diameter $d = 2r$ schrijft men vaak ook kort $U = \\pi d$.',
      },
      flaeche: {
        title: 'Oppervlakte $A$',
        desc: 'Het ingesloten vlak. Hangt kwadratisch van de straal af — dubbele straal betekent viervoudige oppervlakte. Belangrijk voor alle "hoeveel materiaal"- en "hoeveel inhoud"-opgaven.',
      },
      bogenmass: {
        title: 'Radiaal',
        desc: 'Hoekmaat die de hoek meet als booglengte op de eenheidscirkel. Hele cirkel = $2\\pi$, halve cirkel = $\\pi$, rechte hoek = $\\frac{\\pi}{2}$. Standaard in analyse en programmeren.',
      },
      sektor: {
        title: 'Cirkelsector',
        desc: 'Een taartpunt: twee stralen plus de boog daartussen. Oppervlakte en booglengte zijn evenredige grootheden — de middelpuntshoek als deel van $360°$ respectievelijk $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Omtrek en oppervlakte uit de straal',
        context: 'Mia\'s draaiende eindbaas heeft een straal van $5\\,\\text{cm}$ op het scherm. Hoe groot zijn omtrek en oppervlakte?',
        step1: 'Gegeven is de straal:',
        step2: 'Invullen in de omtrek: $U = 2\\pi r$ met $r = 5$. Eerst exact met $\\pi$, dan afgerond:',
        step3: 'Invullen in de oppervlakte: $A = \\pi r^2$. Let op: eerst $r$ kwadrateren, dan met $\\pi$ vermenigvuldigen:',
        mia_comment: 'Bij $r = 5$ zijn omtrek ($\\approx 31$) en oppervlakte ($\\approx 79$) heel verschillende getallen. Verdubbel ik de straal, dan wordt de omtrek twee keer zo groot — de oppervlakte echter vier keer. Dat is de kwadraatwerking.',
      },
      sektor: {
        title: 'Sectoroppervlakte en booglengte',
        context: 'Eén arm van de eindbaas bestrijkt een sector met straal $12\\,\\text{cm}$ en middelpuntshoek $60°$. Welke oppervlakte en welke booglengte levert dat op?',
        step1: 'Gegeven zijn straal en hoek in graden:',
        step2: 'Het sectoraandeel van de totale oppervlakte bepalen — $\\frac{60°}{360°} = \\frac{1}{6}$:',
        step3: 'Sectoroppervlakte uitrekenen — exact met $\\pi$, daarna afgerond:',
        step4: 'Booglengte: hetzelfde aandeel $\\frac{1}{6}$ van de omtrek $2\\pi r$:',
        mia_comment: 'De truc is altijd dezelfde: aandeel = $\\frac{\\alpha°}{360°}$. Dat vermenigvuldig ik met de grootheid van de hele cirkel (oppervlakte of omtrek). Werkt voor $30°$ net zo goed als voor $137{,}5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'Een pizza in 8 stukken',
        desc: 'Een pizza met straal $r$ wordt in 8 gelijke stukken gesneden. Elk stuk is een sector met $\\frac{360°}{8} = 45°$ en oppervlakte $\\frac{\\pi r^2}{8}$. Concrete toepassing in elke keuken.',
      },
      uhr: {
        title: 'Klokwijzers als sectoren',
        desc: 'In een uur bestrijkt de urenwijzer $30°$ ($\\frac{360°}{12}$), in een minuut de minutenwijzer $6°$ ($\\frac{360°}{60}$). Pure sectorwiskunde — ook handig voor hoekopgaven met klokken.',
      },
      riesenrad: {
        title: 'Booglengte van het reuzenrad',
        desc: 'Een cabine van het Hamburgse reuzenrad met straal $r$ legt in de tijd $t$ van een volledige omwenteling $T$ de booglengte $b = 2\\pi r \\cdot \\frac{t}{T}$ af. Daarmee kun je ook de snelheid van de cabine uitrekenen.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'Graden invullen in formules die radialen verwachten',
        correct: 'Vóór $b = \\alpha \\cdot r$ eerst graden naar radialen omrekenen',
        why: 'De formule $b = \\alpha \\cdot r$ werkt alleen als $\\alpha$ in radialen staat. Bij $\\alpha = 60°$ is $b = 60 \\cdot r$ enorm fout — juist zou zijn $\\alpha = \\frac{\\pi}{3} \\approx 1{,}047$, dus $b \\approx 1{,}047 \\cdot r$.',
        mia_warning: 'Precies dat heeft me bij het draaien van sprites geërgerd: 60 ingevuld in plaats van 1,047 — de eindbaas draaide 57 keer zo snel en was meteen van het scherm verdwenen!',
      },
      area_vs_circumference: {
        wrong: 'Oppervlakte berekenen met de omtrekformule ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$ — kwadratisch in $r$',
        why: 'Omtrek en oppervlakte zijn verschillende grootheden met verschillende eenheden ($\\text{cm}$ tegenover $\\text{cm}^2$). $2\\pi r$ is lineair, $\\pi r^2$ kwadratisch. Verwar je ze, dan zijn alle vervolgberekeningen kapot — en de eenheid verraadt het meteen.',
      },
    },
  },
};
