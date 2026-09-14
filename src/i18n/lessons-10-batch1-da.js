export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia har fået Lumis springkurve til at virke — men nu sidder hun fast. I Level 3 af "Hafenlichter" skal Lumi lande på en platform i bevægelse. "Jeg har brug for det præcise tidspunkt, hvor springkurven rammer platformen", siger Mia til Tim. Det betyder: Hun skal løse en andengradsligning. Ikke bare tegne funktionen, men helt konkret løse for $x$.',
      challenge: 'Mia skal beregne, hvornår Lumis springkurve krydser den bevægelige platform — det fører til en andengradsligning.',
      outro: 'Mia har tre metoder i sin værktøjskasse: abc-formlen, fuldstændig kvadrering og faktorisering. Afhængigt af ligningen vælger hun den rette metode — og Lumi lander nu præcist på hver platform. "Det er som en schweizisk lommekniv", griner hun.',
    },
    objectives: {
      solve: 'Løse andengradsligninger sikkert og angive løsningsmængden',
      pq_formula: 'Anvende abc-formlen — inklusive specialtilfælde (ingen eller én løsning)',
      completing_square: 'Forstå og gennemføre fuldstændig kvadrering som løsningsmetode',
      factoring: 'Løse andengradsligninger ved faktorisering',
    },
    explanation: {
      intro: 'En andengradsligning har den generelle form med den højeste eksponent 2. I modsætning til lineære ligninger ($x$ i første potens) kan den have nul, én eller to løsninger. Den generelle form er:',
      normal_form: 'Til abc-formlen har vi brug for normalformen — det vil sige, at koefficienten foran $x^2$ skal være præcis 1. Er det ikke tilfældet, dividerer vi hele ligningen med $a$:',
      mia_tip: 'Jeg husker det sådan: Først flytte alt til én side, så højresiden er nul. Så dividere med koefficienten foran $x^2$. Først DA må jeg bruge abc-formlen!',
      pq_formula: 'Abc-formlen er universalværktøj for andengradsligninger i normalform. Du aflæser $p$ og $q$ direkte og sætter ind:',
      completing_square: 'Fuldstændig kvadrering fungerer sådan: Du omformer venstresiden til et perfekt kvadrat. Du tilføjer $(\\frac{p}{2})^2$ på begge sider. Resultatet er et udtryk af formen $(x + \\frac{p}{2})^2$, som du nemt kan løse for $x$.',
      factoring: 'Hvis du kender nulpunkterne $x_1$ og $x_2$ (eller kan gætte dem), kan ligningen skrives som et produkt af to parenteser. Produktet er nul, når mindst én faktor er nul:',
    },
    concepts: {
      pq_formula: {
        title: 'abc-formel',
        desc: 'Standardværktøj for andengradsligninger i normalform. Virker altid — du behøver kun $p$ (koefficienten foran $x$) og $q$ (konstantleddet).',
      },
      completing_square: {
        title: 'Fuldstændig kvadrering',
        desc: 'Du fuldstændiggør venstresiden til et perfekt kvadrat. Særligt nyttigt, når du også vil bestemme toppunktet for en parabel.',
      },
      discriminant: {
        title: 'Diskriminant',
        desc: 'Udtrykket under rodtegnet i abc-formlen: $D > 0$ giver to løsninger, $D = 0$ giver præcis én, $D < 0$ betyder ingen reel løsning.',
      },
      factoring: {
        title: 'Faktorisering',
        desc: 'Opdeling i to linearfaktorer. Virker særligt elegant, når nulpunkterne er hele tal — så kan du ofte gætte dem.',
      },
    },
    examples: {
      pq_application: {
        title: 'Løse ligning med abc-formlen',
        context: 'Mia beregner, hvornår Lumis springkurve rammer platformen ved $y = 0$.',
        step1: 'Ligningen er allerede i normalform (koefficienten foran $x^2$ er 1):',
        step2: 'Vi aflæser $p$ og $q$ — pas på fortegnene:',
        step3: 'Sæt værdierne ind i abc-formlen og regn ud trin for trin:',
        step4: 'To løsninger — Lumi rammer platformen på to steder:',
        mia_comment: 'To løsninger giver mening: Lumi springer op ved $x = 1$ og lander ved $x = 3$ igen. Stykket imellem er flyvningen!',
      },
      completing_square: {
        title: 'Løse ved fuldstændig kvadrering',
        context: 'Tim vil løse ligningen uden abc-formlen — som et alternativ.',
        step1: 'Vi starter med ligningen i normalform:',
        step2: 'Først flytte konstantleddet til højresiden:',
        step3: 'Nu den fuldstændige kvadrering: $(\\frac{6}{2})^2 = 9$ tilføjes på begge sider:',
        step4: 'Venstresiden er nu et perfekt kvadrat — tag roden giver to tilfælde:',
        step5: 'Beregn begge løsninger:',
        mia_comment: 'Samme ligning, samme løsninger, anden vej. Jeg bruger fuldstændig kvadrering, når jeg også har brug for parablens toppunkt — to fluer med ét smæk!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds og kastparabler',
        desc: 'Hvert kast i Angry Birds følger en parabel. Ligningen $h(t) = 0$ fortæller dig, hvornår objektet rammer jorden. Fysikere bruger den samme formel til rigtige kastbevægelser.',
      },
      breakeven: {
        title: 'Finde gevinstzonen',
        desc: 'En virksomhed vil vide: Fra hvilket antal enheder går vi i plus? Gevinsten $G(x) = 0$ giver break-even-punkterne — som oftest en andengradsligning.',
      },
      rocket: {
        title: 'Raketopsendelser',
        desc: 'Højden af en raket efter opsendelsen følger en kvadratisk funktion (så længe brændstoffet rækker). Hvornår når den 1000 m? Andengradsligning!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'abc-formel uden nul på højresiden',
        correct: 'Først flytte alt til én side',
        why: 'Abc-formlen forudsætter, at højresiden er nul. Ved $x^2 + 3x = 5$ skal du først tilføje $-5$ på begge sider, så $x^2 + 3x - 5 = 0$ opstår. Ellers er $q$ forkert!',
        mia_warning: 'Jeg havde denne fejl i koden engang — platform-kollisionen var helt forkert, fordi $q$ havde forkert fortegn. Altid nul på højresiden først!',
      },
      sign_pq: {
        wrong: 'Fortegnsfejl ved $p$ i abc-formlen',
        correct: 'Husk minustegnet foran $\\frac{p}{2}$',
        why: 'I abc-formlen står der $-\\frac{p}{2}$. Ved $x^2 - 6x + 8 = 0$ er $p = -6$, altså $-\\frac{-6}{2} = +3$. Glemmer du minustegnet, får du $-3$ i stedet for $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia arbejder på fyrtårns-levelet i Hafenlichter. Fyrtårnet kaster en lyskegle over havnen, og Lumi skal gemme sig i skyggen. "Jeg skal beregne, hvor langt lyskeglen når ved en bestemt vinkel", siger Mia. Tim peger på en retvinklet trekant, som lyskeglen danner med jorden. "Det er trigonometri — sinus, cosinus og tangens."',
      challenge: 'Mia har brug for lyskeglens rækkevidde ved forskellige vinkler for at programmere skyggeområdet.',
      outro: 'Fyrtårnet roterer langsomt, og lyskeglen vandrer over havnen. Takket være sinus og cosinus beregner Mias kode i realtid, hvilke områder der er oplyste. Lumi sniger sig fra skygge til skygge — levelet er blevet rigtig spændende!',
    },
    objectives: {
      sin_cos_tan: 'Anvende sinus, cosinus og tangens i retvinklede trekanter sikkert',
      unit_circle: 'Forstå enhedscirklen og kunne aflæse værdier',
      angle_calculations: 'Beregne vinkler og sidelængder med trigonometriske funktioner',
      real_problems: 'Løse praktiske opgaver med trigonometri (højder, afstande, vinkler)',
    },
    explanation: {
      intro: 'Trigonometri forbinder vinkler med sidelængder. I enhver retvinklet trekant gælder tre grundlæggende forhold — opkaldt efter vinklen $\\alpha$, du betragter:',
      mia_tip: 'Min huskeregel: Modstående katete delt med hypotenusen (sin), hosliggende katete delt med hypotenusen (cos), modstående katete delt med hosliggende katete (tan). Lyder fjollet, men du glemmer det aldrig!',
      unit_circle: 'Enhedscirklen har radius 1 og centrum i origo. For enhver vinkel $\\alpha$ giver den dig værdierne direkte: $x$-koordinaten er $\\cos(\\alpha)$, $y$-koordinaten er $\\sin(\\alpha)$. Dermed gælder altid:',
      special_angles: 'Visse vinkler bør du kende udenad: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Tip: På enhedscirklen kan du aflæse disse værdier geometrisk.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'Forholdet mellem modstående katete og hypotenuse. På enhedscirklen svarer $\\sin(\\alpha)$ til $y$-koordinaten for punktet på cirklen.',
      },
      cosine: {
        title: 'Cosinus',
        desc: 'Forholdet mellem hosliggende katete og hypotenuse. På enhedscirklen svarer $\\cos(\\alpha)$ til $x$-koordinaten. Cosinus og sinus er forskudt med $90°$.',
      },
      tangent: {
        title: 'Tangens',
        desc: 'Forholdet mellem modstående katete og hosliggende katete — eller ækvivalent $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideel til hældninger og hældningsvinkler.',
      },
      unit_circle: {
        title: 'Enhedscirklen',
        desc: 'En cirkel med radius 1. Hvert punkt på cirklen har koordinaterne $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Dermed kan sin og cos defineres for alle vinkler — ikke kun spidse.',
      },
    },
    examples: {
      height_tan: {
        title: 'Beregne højde med tangens',
        context: 'Mia måler vinklen til fyrtårnets top: $35°$. Afstanden til tårnet er $50\\,\\text{m}$.',
        step1: 'Skitse: Afstanden er hosliggende katete, den søgte højde er modstående katete. Altså tangens:',
        step2: 'Løse for højden $h$ — multiplicer begge sider med $50\\,\\text{m}$:',
        step3: 'Lommeregner (DEG-tilstand!): $\\tan(35°) \\approx 0{,}7002$ indsættes og beregnes:',
        mia_comment: 'I spillet sker det i realtid: Vinklen på lyskeglen ændrer sig, og min kode beregner straks den nye rækkevidde. Tangens er perfekt til det!',
      },
      unit_circle: {
        title: 'Aflæse værdier på enhedscirklen',
        context: 'Tim vil vise Mia, hvordan enhedscirklen fungerer — med eksemplet $60°$.',
        step1: 'Omregne vinklen (valgfrit): $60°$ svarer til $\\frac{\\pi}{3}$ i radianer:',
        step2: 'Aflæse sinusværdien — $y$-koordinaten for punktet på enhedscirklen:',
        step3: 'Aflæse cosinusværdien — $x$-koordinaten:',
        step4: 'Punktet på enhedscirklen har altså koordinaterne:',
        mia_comment: 'På enhedscirklen ser jeg sin og cos som længder. Det gør det meget mere anskueligt end bare tal i en tabel!',
      },
    },
    realworld: {
      compass: {
        title: 'Navigation og GPS',
        desc: 'Din smartphone beregner retninger med trigonometri. Funktionen atan2 omsætter $x$- og $y$-koordinater til en vinkel — sådan ved Google Maps, hvilken retning du skal gå.',
      },
      building_height: {
        title: 'Måle bygningshøjder',
        desc: 'Arkitekter og landmålere måler bygningshøjder uden at klatre op på taget. Med en vinkelmåler og tangens er afstand og vinkel fuldt tilstrækkeligt.',
      },
      music: {
        title: 'Toner og lydbølger',
        desc: 'Enhver tone er en sinusbølge. Kammertonen A har 440 svingninger per sekund — beskrevet ved $f(t) = \\sin(880\\pi t)$. Musik er anvendt trigonometri!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Forveksle sinus og cosinus',
        correct: 'Sinus = modstående katete/hypotenuse',
        why: 'Sinus hører til modstående katete (siden over for vinklen), cosinus til hosliggende katete (siden ved siden af vinklen). Forveksler du dem, får du forkert værdi.',
        mia_warning: 'Det sker mig stadig! Jeg tegner trekanten og mærker siderne i forhold til vinklen. Så ser jeg straks, hvad der er modstående og hosliggende katete.',
      },
      deg_rad: {
        wrong: 'Forkert vinkeltilstand på lommeregneren',
        correct: 'Altid tjek DEG-tilstand ved gradangivelser',
        why: 'I RAD-tilstand tolker lommeregneren $90$ som $90$ radianer (ca. $5156°$), ikke som $90°$. $\\sin(90°) = 1$, men $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Resultat: helt forkert.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter skal have en multiplayer-tilstand. Mia tester serverne med 10 spillere — alt kører smooth. Men Tim advarer: "Hvad sker der med 100? Med 1000? Hvis spillet går viralt, fordobles spillerantallet måske hver par dage." Mia regner efter og bliver forskrækket: Eksponentiel vækst er meget hurtigere, end man tror.',
      challenge: 'Serverbelastningen vokser ikke lineært med spillerne, men eksponentielt. Mia skal forudsige, hvornår serverne bliver overbelastede.',
      outro: 'Mia har bygget en model, der forudsiger udviklingen af spillerantallet. Takket være eksponentialfunktionen ved hun nu: Hvis fordoblingstiden er 3 dage, har hun brug for 32 gange så meget serverkapacitet efter 2 uger. "Hellere skalere tidligt end crashe sent", beslutter hun.',
    },
    objectives: {
      exponential_functions: 'Genkende eksponentialfunktioner og skelne dem fra lineære funktioner',
      growth_factor: 'Bestemme vækstfaktoren ud fra procentangivelser og fortolke den',
      half_life: 'Beregne og anvende halveringstid og fordoblingstid',
      model_real_world: 'Modellere reelle vækst- og henfaldsprocesser med eksponentialfunktioner',
    },
    explanation: {
      intro: 'Ved lineær vækst kommer der det samme til i hvert skridt. Ved eksponentiel vækst multipliceres der med den samme faktor i hvert skridt. Det lyder ens — men fører til helt forskellige resultater:',
      growth_factor: 'Vækstfaktoren $b$ fortæller dig alt: Vokser noget med $p\\%$ per tidsenhed, er faktoren større end 1. Aftager noget med $p\\%$ (henfald), er den mindre end 1:',
      mia_tip: 'Lineære funktioner adderer, eksponentialfunktioner multiplicerer. Ved 10% vækst per dag er faktoren $b = 1{,}10$ — efter 7 dage altså $1{,}10^7 \\approx 1{,}95$, næsten en fordobling! Det overraskede mig ved serverplanlægningen.',
      half_life: 'Halveringstiden $t_H$ er den tid, hvorefter halvdelen er tilbage. Den er konstant — uanset hvor meget du starter med. Det er det særlige ved eksponentielt henfald:',
      doubling_time: 'Modstykket ved vækst: Fordoblingstiden $t_V$ fortæller dig, efter hvilken tid værdien har fordoblet sig. Også den forbliver altid ens:',
    },
    concepts: {
      exponential_function: {
        title: 'Eksponentialfunktion',
        desc: 'Den generelle form: $a$ er startværdien, $b$ vækstfaktoren, $t$ tiden. Afgørende: Variablen står i eksponenten — det er det, der adskiller den fra potensfunktioner.',
      },
      growth_factor: {
        title: 'Vækstfaktor',
        desc: 'Ved $p\\%$ stigning: $b = 1 + \\frac{p}{100}$. Eksempel: 5% vækst giver $b = 1{,}05$. Ved 12% fald: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Halveringstid',
        desc: 'Tiden indtil en værdi har halveret sig. Typisk for radioaktivt henfald, medicin i kroppen eller batteriopladning. Halveringstiden er uafhængig af startværdien.',
      },
      euler_base: {
        title: 'Naturlig eksponentialfunktion',
        desc: 'Grundtallet $e \\approx 2{,}718$ er særligt: Funktionen $e^x$ er sin egen afledede. Med $k > 0$ vokser den, med $k < 0$ henfalder den. Standard i naturvidenskaberne.',
      },
    },
    examples: {
      bacteria: {
        title: 'Bakterievækst',
        context: 'En bakteriekultur starter med 500 bakterier og fordobles hver time.',
        step1: 'Identificer startværdi og vækstfaktor — fordobling betyder faktor 2:',
        step2: 'Opstil eksponentialfunktionen — $t$ tæller timerne:',
        step3: 'Indsæt $t = 5$ (efter 5 timer): $2^5 = 32$:',
        step4: 'Efter 5 timer er der 16.000 bakterier:',
        mia_comment: 'Fra 500 til 16.000 på bare 5 timer! Det viser, hvorfor eksponentiel vækst er så overraskende. Med servere er det tilsvarende — spillertal kan vokse hurtigere, end man kan bestille servere.',
      },
      radioactive: {
        title: 'Radioaktivt henfald',
        context: 'Et medikament har en halveringstid på 8 dage. Startmængde: 200 g.',
        step1: 'Noter halveringstid og startværdi:',
        step2: 'Opstil henfaldsformlen med $t_H = 8$:',
        step3: 'Indsæt efter 24 dage — det er præcis 3 halveringstider ($\\frac{24}{8} = 3$):',
        step4: 'Efter 24 dage er der kun 25 g tilbage — en ottendedel af startværdien:',
        mia_comment: 'Efter hver halveringstid halveres mængden: $200 \\to 100 \\to 50 \\to 25$. Sådan er det altid, uanset om du starter med 200 g eller 2 tons.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Virale TikTok-videoer',
        desc: 'En viral video får indledningsvis 100 visninger. Hvis hver seer viser den til 1,8 personer, eksploderer tallene: Efter 10 runder er det allerede over 35.000 visninger. Algoritmer forstærker denne effekt yderligere.',
      },
      battery: {
        title: 'Batteriafladning',
        desc: 'Dit mobilbatteri mister ca. 5% af ladningen per time. Efter 14 timer er omtrent halvdelen tilbage — det er ikke et lineært fald, men eksponentielt henfald.',
      },
      pandemic: {
        title: 'Pandemispredning',
        desc: 'COVID-19 viste, hvad "eksponentiel vækst" betyder: Uden foranstaltninger fordoblede smittetallene sig hver 3. dag. Efter en måned ville det være faktor $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Lineær model i stedet for eksponentiel',
        correct: 'Procentvis ændring = eksponentialfunktion',
        why: '"5% vækst per år" er IKKE $+5$ per år, men $\\cdot 1{,}05$ per år. Med lineær model vokser beløbet konstant, med eksponentiel vokser det stadig hurtigere.',
        mia_warning: 'Jeg havde først regnet $\\text{Spillere}(t) = 100 + 50t$. De virkelige tal lå 3 gange så højt efter en uge! Eksponentiel vækst undervurderes næsten altid.',
      },
      wrong_growth_factor: {
        wrong: 'Procenttal sat direkte ind som faktor',
        correct: 'Faktor = $1 + \\frac{p}{100}$',
        why: 'Ved 3% vækst er faktoren $1{,}03$, ikke $3$! Med $b = 3$ ville værdien tredobles i stedet for at vokse med 3%. Regn altid $1 + \\frac{p}{100}$.',
      },
    },
  },
};
