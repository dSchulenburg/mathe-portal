export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia har faaet Lumis springkurve til at virke — men nu sidder hun fast. I Level 3 af "Havnelys" skal Lumi lande paa en platform i bevaegelse. "Jeg har brug for det praecise tidspunkt, hvor springkurven rammer platformen", siger Mia til Tim. Det betyder: Hun skal loese en andengradsligning. Ikke bare tegne funktionen, men helt konkret loese for $x$.',
      challenge: 'Mia skal beregne, hvornaar Lumis springkurve krydser den bevaegelige platform — det foerer til en andengradsligning.',
      outro: 'Mia har tre metoder i sin vaerktoejskasse: abc-formlen, fuldstaendig kvadrering og faktorisering. Afhaengigt af ligningen vaelger hun den rette metode — og Lumi lander nu praecist paa hver platform. "Det er som en schweizisk lommekniv", griner hun.',
    },
    objectives: {
      solve: 'Loese andengradsligninger sikkert og angive loesningsmangden',
      pq_formula: 'Anvende abc-formlen — inklusive specialtilfaelde (ingen eller en loesning)',
      completing_square: 'Forstaa og gennemfoere fuldstaendig kvadrering som loesningsmetode',
      factoring: 'Loese andengradsligninger ved faktorisering',
    },
    explanation: {
      intro: 'En andengradsligning har den generelle form med den hoejeste eksponent 2. I modsaetning til lineaere ligninger ($x$ i foerste potens) kan den have nul, en eller to loesninger. Den generelle form er:',
      normal_form: 'Til abc-formlen har vi brug for normalformen — det vil sige, at koefficienten foran $x^2$ skal vaere praecis 1. Er det ikke tilfaeldet, dividerer vi hele ligningen med $a$:',
      mia_tip: 'Jeg husker det saadan: Foerst flytte alt til en side, saa hoejresiden er nul. Saa dividere med koefficienten foran $x^2$. Foerst DA maa jeg bruge abc-formlen!',
      pq_formula: 'Abc-formlen er universalvaerktoej for andengradsligninger i normalform. Du aflaeser $p$ og $q$ direkte og saetter ind:',
      completing_square: 'Fuldstaendig kvadrering fungerer saadan: Du omformer venstresiden til et perfekt kvadrat. Du tilfojer $(\\frac{p}{2})^2$ paa begge sider. Resultatet er et udtryk af formen $(x + \\frac{p}{2})^2$, som du nemt kan loese for $x$.',
      factoring: 'Hvis du kender nulpunkterne $x_1$ og $x_2$ (eller kan gaette dem), kan ligningen skrives som et produkt af to parenteser. Produktet er nul, naar mindst en faktor er nul:',
    },
    concepts: {
      pq_formula: {
        title: 'abc-formel',
        desc: 'Standardvaerktoej for andengradsligninger i normalform. Virker altid — du behoever kun $p$ (koefficienten foran $x$) og $q$ (konstantleddet).',
      },
      completing_square: {
        title: 'Fuldstaendig kvadrering',
        desc: 'Du fuldstaendiggoer venstresiden til et perfekt kvadrat. Saerligt nyttigt, naar du ogsaa vil bestemme toppunktet for en parabel.',
      },
      discriminant: {
        title: 'Diskriminant',
        desc: 'Udtrykket under rodtegnet i abc-formlen: $D > 0$ giver to loesninger, $D = 0$ giver praecis en, $D < 0$ betyder ingen reel loesning.',
      },
      factoring: {
        title: 'Faktorisering',
        desc: 'Opdeling i to linearfaktorer. Virker saerligt elegant, naar nulpunkterne er hele tal — saa kan du ofte gaette dem.',
      },
    },
    examples: {
      pq_application: {
        title: 'Loese ligning med abc-formlen',
        context: 'Mia beregner, hvornaar Lumis springkurve rammer platformen ved $y = 0$.',
        step1: 'Ligningen er allerede i normalform (koefficienten foran $x^2$ er 1):',
        step2: 'Vi aflaeser $p$ og $q$ — pas paa fortegnene:',
        step3: 'Saet vaerdierne ind i abc-formlen og regn ud trin for trin:',
        step4: 'To loesninger — Lumi rammer platformen paa to steder:',
        mia_comment: 'To loesninger giver mening: Lumi springer op ved $x = 1$ og lander ved $x = 3$ igen. Stykket imellem er flyvningen!',
      },
      completing_square: {
        title: 'Loese ved fuldstaendig kvadrering',
        context: 'Tim vil loese ligningen uden abc-formlen — som et alternativ.',
        step1: 'Vi starter med ligningen i normalform:',
        step2: 'Foerst flytte konstantleddet til hoejresiden:',
        step3: 'Nu den fuldstaendige kvadrering: $(\\frac{6}{2})^2 = 9$ tilfojes paa begge sider:',
        step4: 'Venstresiden er nu et perfekt kvadrat — tag roden giver to tilfaelde:',
        step5: 'Beregn begge loesninger:',
        mia_comment: 'Samme ligning, samme loesninger, anden vej. Jeg bruger fuldstaendig kvadrering, naar jeg ogsaa har brug for parablens toppunkt — to fluer med et smaek!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds og kastparabler',
        desc: 'Hvert kast i Angry Birds foelger en parabel. Ligningen $h(t) = 0$ fortaeller dig, hvornaar objektet rammer jorden. Fysikere bruger den samme formel til rigtige kastbevaegelser.',
      },
      breakeven: {
        title: 'Finde gevinstzonen',
        desc: 'En virksomhed vil vide: Fra hvilket antal enheder gaar vi i plus? Gevinsten $G(x) = 0$ giver break-even-punkterne — som oftest en andengradsligning.',
      },
      rocket: {
        title: 'Raketopsendelser',
        desc: 'Hoejden af en raket efter opsendelsen foelger en kvadratisk funktion (saa laenge braendstoffet raekker). Hvornaar naar den 1000 m? Andengradsligning!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'abc-formel uden nul paa hoejresiden',
        correct: 'Foerst flytte alt til en side',
        why: 'Abc-formlen forudsaetter, at hoejresiden er nul. Ved $x^2 + 3x = 5$ skal du foerst tilfoeje $-5$ paa begge sider, saa $x^2 + 3x - 5 = 0$ opstaaar. Ellers er $q$ forkert!',
        mia_warning: 'Jeg havde denne fejl i koden engang — platform-kollisionen var helt forkert, fordi $q$ havde forkert fortegn. Altid nul paa hoejresiden foerst!',
      },
      sign_pq: {
        wrong: 'Fortegnsfejl ved $p$ i abc-formlen',
        correct: 'Husk minustegnet foran $\\frac{p}{2}$',
        why: 'I abc-formlen staar der $-\\frac{p}{2}$. Ved $x^2 - 6x + 8 = 0$ er $p = -6$, altsaa $-\\frac{-6}{2} = +3$. Glemmer du minustegnet, faar du $-3$ i stedet for $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia arbejder paa fyrtaarns-levelet i Havnelys. Fyrtaarnet kaster en lyskegle over havnen, og Lumi skal gemme sig i skyggen. "Jeg skal beregne, hvor langt lyskeglen naar ved en bestemt vinkel", siger Mia. Tim peger paa en retvinklet trekant, som lyskeglen danner med jorden. "Det er trigonometri — sinus, cosinus og tangens."',
      challenge: 'Mia har brug for lyskeglens raekkevidde ved forskellige vinkler for at programmere skyggeomraadet.',
      outro: 'Fyrtaarnet roterer langsomt, og lyskeglen vandrer over havnen. Takket vaere sinus og cosinus beregner Mias kode i realtid, hvilke omraader der er oplyste. Lumi sniger sig fra skygge til skygge — levelet er blevet rigtig spaendende!',
    },
    objectives: {
      sin_cos_tan: 'Anvende sinus, cosinus og tangens i retvinklede trekanter sikkert',
      unit_circle: 'Forstaa enhedscirklen og kunne aflase vaerdier',
      angle_calculations: 'Beregne vinkler og sidelaengder med trigonometriske funktioner',
      real_problems: 'Loese praktiske opgaver med trigonometri (hoejder, afstande, vinkler)',
    },
    explanation: {
      intro: 'Trigonometri forbinder vinkler med sidelaengder. I enhver retvinklet trekant gaelder tre grundlaeggende forhold — opkaldt efter vinklen $\\alpha$, du betragter:',
      mia_tip: 'Min huskeregel: Modstaaende katete delt med hypotenusen (sin), hosliggende katete delt med hypotenusen (cos), modstaaende katete delt med hosliggende katete (tan). Lyder fjollet, men du glemmer det aldrig!',
      unit_circle: 'Enhedscirklen har radius 1 og centrum i origo. For enhver vinkel $\\alpha$ giver den dig vaerdierne direkte: $x$-koordinaten er $\\cos(\\alpha)$, $y$-koordinaten er $\\sin(\\alpha)$. Dermed gaelder altid:',
      special_angles: 'Visse vinkler boer du kende udenad: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Tip: Paa enhedscirklen kan du aflæse disse vaerdier geometrisk.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'Forholdet mellem modstaaende katete og hypotenuse. Paa enhedscirklen svarer $\\sin(\\alpha)$ til $y$-koordinaten for punktet paa cirklen.',
      },
      cosine: {
        title: 'Cosinus',
        desc: 'Forholdet mellem hosliggende katete og hypotenuse. Paa enhedscirklen svarer $\\cos(\\alpha)$ til $x$-koordinaten. Cosinus og sinus er forskudt med $90°$.',
      },
      tangent: {
        title: 'Tangens',
        desc: 'Forholdet mellem modstaaende katete og hosliggende katete — eller aekvivalent $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideel til haeldninger og haeldningsvinkler.',
      },
      unit_circle: {
        title: 'Enhedscirklen',
        desc: 'En cirkel med radius 1. Hvert punkt paa cirklen har koordinaterne $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Dermed kan sin og cos defineres for alle vinkler — ikke kun spidse.',
      },
    },
    examples: {
      height_tan: {
        title: 'Beregne hoejde med tangens',
        context: 'Mia maaler vinklen til fyrtaarnets top: $35°$. Afstanden til taarnet er $50\\,\\text{m}$.',
        step1: 'Skitse: Afstanden er hosliggende katete, den sogte hoejde er modstaaende katete. Altsaa tangens:',
        step2: 'Loese for hoejden $h$ — multiplicer begge sider med $50\\,\\text{m}$:',
        step3: 'Lommeregner (DEG-tilstand!): $\\tan(35°) \\approx 0{,}7002$ indsaettes og beregnes:',
        mia_comment: 'I spillet sker det i realtid: Vinklen paa lyskeglen aendrer sig, og min kode beregner straks den nye raekkevidde. Tangens er perfekt til det!',
      },
      unit_circle: {
        title: 'Aflase vaerdier paa enhedscirklen',
        context: 'Tim vil vise Mia, hvordan enhedscirklen fungerer — med eksemplet $60°$.',
        step1: 'Omregne vinklen (valgfrit): $60°$ svarer til $\\frac{\\pi}{3}$ i radianer:',
        step2: 'Aflase sinusvaerdien — $y$-koordinaten for punktet paa enhedscirklen:',
        step3: 'Aflase cosinusvaerdien — $x$-koordinaten:',
        step4: 'Punktet paa enhedscirklen har altsaa koordinaterne:',
        mia_comment: 'Paa enhedscirklen ser jeg sin og cos som laengder. Det goer det meget mere anskueligt end bare tal i en tabel!',
      },
    },
    realworld: {
      compass: {
        title: 'Navigation og GPS',
        desc: 'Din smartphone beregner retninger med trigonometri. Funktionen atan2 omsaetter $x$- og $y$-koordinater til en vinkel — saadan ved Google Maps, hvilken retning du skal gaa.',
      },
      building_height: {
        title: 'Maale bygningshoejder',
        desc: 'Arkitekter og landmaalere maaler bygningshoejder uden at klatre op paa taget. Med en vinkelmaaler og tangens er afstand og vinkel fuldt tilstraekkeligt.',
      },
      music: {
        title: 'Toner og lydboelger',
        desc: 'Enhver tone er en sinusboelge. Kammertonen A har 440 svingninger per sekund — beskrevet ved $f(t) = \\sin(880\\pi t)$. Musik er anvendt trigonometri!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Forveksle sinus og cosinus',
        correct: 'Sinus = modstaaende katete/hypotenuse',
        why: 'Sinus hoerer til modstaaende katete (siden overfor vinklen), cosinus til hosliggende katete (siden ved siden af vinklen). Forveksler du dem, faar du forkert vaerdi.',
        mia_warning: 'Det sker mig stadig! Jeg tegner trekanten og maerker siderne i forhold til vinklen. Saa ser jeg straks, hvad der er modstaaende og hosliggende katete.',
      },
      deg_rad: {
        wrong: 'Forkert vinkeltilstand paa lommeregneren',
        correct: 'Altid tjek DEG-tilstand ved gradangivelser',
        why: 'I RAD-tilstand tolker lommeregneren $90$ som $90$ radianer (ca. $5156°$), ikke som $90°$. $\\sin(90°) = 1$, men $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Resultat: helt forkert.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Havnelys skal have en multiplayer-tilstand. Mia tester serverne med 10 spillere — alt koerer smooth. Men Tim advarer: "Hvad sker der med 100? Med 1000? Hvis spillet gaar viralt, fordobles spillerantallet maase hver par dage." Mia regner efter og bliver forskraekket: Eksponentiel vaekst er meget hurtigere, end man tror.',
      challenge: 'Serverbelastningen vokser ikke lineaert med spillerne, men eksponentielt. Mia skal forudsige, hvornaar serverne bliver overbelastede.',
      outro: 'Mia har bygget en model, der forudsiger udviklingen af spillerantallet. Takket vaere eksponentialfunktionen ved hun nu: Hvis fordobblingstiden er 3 dage, har hun brug for 32 gange saa meget serverkapacitet efter 2 uger. "Hellere skalere tidligt end crashe sent", beslutter hun.',
    },
    objectives: {
      exponential_functions: 'Genkende eksponentialfunktioner og skelne dem fra lineaere funktioner',
      growth_factor: 'Bestemme vaekstfaktoren ud fra procentangivelser og fortolke den',
      half_life: 'Beregne og anvende halveringstid og fordobblingstid',
      model_real_world: 'Modellere reelle vaekst- og henfaldsprocesser med eksponentialfunktioner',
    },
    explanation: {
      intro: 'Ved lineaer vaekst kommer der det samme til i hvert skridt. Ved eksponentiel vaekst multipliceres der med den samme faktor i hvert skridt. Det lyder ens — men foerer til helt forskellige resultater:',
      growth_factor: 'Vaekstfaktoren $b$ fortaeller dig alt: Vokser noget med $p\\%$ per tidsenhed, er faktoren stoerre end 1. Aftager noget med $p\\%$ (henfald), er den mindre end 1:',
      mia_tip: 'Lineaere funktioner adderer, eksponentialfunktioner multiplicerer. Ved 10% vaekst per dag er faktoren $b = 1{,}10$ — efter 7 dage altsaa $1{,}10^7 \\approx 1{,}95$, naesten en fordobling! Det overraskede mig ved serverplanlaegningen.',
      half_life: 'Halveringstiden $t_H$ er den tid, hvorefter halvdelen er tilbage. Den er konstant — uanset hvor meget du starter med. Det er det saerlige ved eksponentielt henfald:',
      doubling_time: 'Modstykket ved vaekst: Fordobblingstiden $t_V$ fortaeller dig, efter hvilken tid vaerdien har fordoblet sig. Ogsaa den forbliver altid ens:',
    },
    concepts: {
      exponential_function: {
        title: 'Eksponentialfunktion',
        desc: 'Den generelle form: $a$ er startvaerdien, $b$ vaekstfaktoren, $t$ tiden. Afgoerende: Variablen staar i eksponenten — det er det, der adskiller den fra potensfunktioner.',
      },
      growth_factor: {
        title: 'Vaekstfaktor',
        desc: 'Ved $p\\%$ stigning: $b = 1 + \\frac{p}{100}$. Eksempel: 5% vaekst giver $b = 1{,}05$. Ved 12% fald: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Halveringstid',
        desc: 'Tiden indtil en vaerdi har halvereret sig. Typisk for radioaktivt henfald, medicin i kroppen eller batteriopladning. Halveringstiden er uafhaengig af startvaerdien.',
      },
      euler_base: {
        title: 'Naturlig eksponentialfunktion',
        desc: 'Grundtallet $e \\approx 2{,}718$ er saerligt: Funktionen $e^x$ er sin egen afledede. Med $k > 0$ vokser den, med $k < 0$ henfalder den. Standard i naturvidenskaberne.',
      },
    },
    examples: {
      bacteria: {
        title: 'Bakterievaekst',
        context: 'En bakteriekultur starter med 500 bakterier og fordobles hver time.',
        step1: 'Identificer startvaerdi og vaekstfaktor — fordobling betyder faktor 2:',
        step2: 'Opstil eksponentialfunktionen — $t$ taeller timerne:',
        step3: 'Indsaet $t = 5$ (efter 5 timer): $2^5 = 32$:',
        step4: 'Efter 5 timer er der 16.000 bakterier:',
        mia_comment: 'Fra 500 til 16.000 paa bare 5 timer! Det viser, hvorfor eksponentiel vaekst er saa overraskende. Med servere er det tilsvarende — spillertal kan vokse hurtigere, end man kan bestille servere.',
      },
      radioactive: {
        title: 'Radioaktivt henfald',
        context: 'Et medikament har en halveringstid paa 8 dage. Startmaengde: 200 g.',
        step1: 'Noter halveringstid og startvaerdi:',
        step2: 'Opstil henfaldsformlen med $t_H = 8$:',
        step3: 'Indsaet efter 24 dage — det er praecis 3 halveringstider ($\\frac{24}{8} = 3$):',
        step4: 'Efter 24 dage er der kun 25 g tilbage — en ottendedel af startvaerdien:',
        mia_comment: 'Efter hver halveringstid halveres maengden: $200 \\to 100 \\to 50 \\to 25$. Saadan er det altid, uanset om du starter med 200 g eller 2 tons.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Virale TikTok-videoer',
        desc: 'En viral video faar indledningsvis 100 visninger. Hvis hver seer viser den til 1,8 personer, eksploderer tallene: Efter 10 runder er det allerede over 35.000 visninger. Algoritmer forstaerker denne effekt yderligere.',
      },
      battery: {
        title: 'Batteriaflading',
        desc: 'Dit mobilbatteri mister ca. 5% af ladningen per time. Efter 14 timer er omtrent halvdelen tilbage — det er ikke et lineaert fald, men eksponentielt henfald.',
      },
      pandemic: {
        title: 'Pandemispredning',
        desc: 'COVID-19 viste, hvad "eksponentiel vaekst" betyder: Uden foranstaltninger fordoblede smittetallene sig hver 3. dag. Efter en maaned ville det vaere faktor $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Lineaer model i stedet for eksponentiel',
        correct: 'Procentvis aendring = eksponentialfunktion',
        why: '"5% vaekst per aar" er IKKE $+5$ per aar, men $\\cdot 1{,}05$ per aar. Med lineaer model vokser beloebet konstant, med eksponentiel vokser det stadig hurtigere.',
        mia_warning: 'Jeg havde foerst regnet $\\text{Spillere}(t) = 100 + 50t$. De virkelige tal laa 3 gange saa hoejt efter en uge! Eksponentiel vaekst undervurderes naesten altid.',
      },
      wrong_growth_factor: {
        wrong: 'Procenttal sat direkte ind som faktor',
        correct: 'Faktor = $1 + \\frac{p}{100}$',
        why: 'Ved 3% vaekst er faktoren $1{,}03$, ikke $3$! Med $b = 3$ ville vaerdien tredobles i stedet for at vokse med 3%. Regn altid $1 + \\frac{p}{100}$.',
      },
    },
  },
};
