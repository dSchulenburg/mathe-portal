export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia har fått til Lumis hoppkurve — men nå sitter hun fast. I Level 3 av "Hafenlichter" må Lumi lande på en plattform i bevegelse. "Jeg trenger det eksakte tidspunktet da hoppkurven treffer plattformen", sier Mia til Tim. Det betyr: Hun må løse en andregradslikning. Ikke bare tegne funksjonen, men helt konkret løse for $x$.',
      challenge: 'Mia må beregne når Lumis hoppkurve krysser den bevegelige plattformen — det fører til en andregradslikning.',
      outro: 'Mia har tre metoder i verktøykassen sin: abc-formelen, fullstendig kvadrering og faktorisering. Avhengig av likningen velger hun riktig metode — og Lumi lander nå punktlig på hver plattform. "Det er som en sveitserkniv", smiler hun.',
    },
    objectives: {
      solve: 'Løse andregradslikninger sikkert og angi løsningsmengden',
      pq_formula: 'Anvende abc-formelen — inkludert spesialtilfeller (ingen eller én løsning)',
      completing_square: 'Forstå og gjennomføre fullstendig kvadrering som løsningsmetode',
      factoring: 'Løse andregradslikninger ved faktorisering',
    },
    explanation: {
      intro: 'En andregradslikning har den generelle formen med den høyeste eksponenten 2. I motsetning til lineære likninger ($x$ opphøyd i 1) kan den ha null, én eller to løsninger. Den generelle formen er:',
      normal_form: 'For abc-formelen trenger vi normalformen — det betyr at koeffisienten foran $x^2$ må være nøyaktig 1. Er det ikke tilfellet, deler vi hele likningen på $a$:',
      mia_tip: 'Jeg husker det slik: Først flytte alt til én side slik at høyresiden er null. Så dele på koeffisienten foran $x^2$. Først DA får jeg bruke abc-formelen!',
      pq_formula: 'Abc-formelen er universalverktøy for andregradslikninger i normalform. Du leser av $p$ og $q$ direkte og setter inn:',
      completing_square: 'Fullstendig kvadrering fungerer slik: Du omformer venstresiden til et perfekt kvadrat. Du legger til $(\\frac{p}{2})^2$ på begge sider. Resultatet er et uttrykk av formen $(x + \\frac{p}{2})^2$, som du enkelt kan løse for $x$.',
      factoring: 'Hvis du kjenner nullpunktene $x_1$ og $x_2$ (eller kan gjette dem), kan likningen skrives som et produkt av to parenteser. Produktet er null når minst én faktor er null:',
    },
    concepts: {
      pq_formula: {
        title: 'abc-formel',
        desc: 'Standardverktøy for andregradslikninger i normalform. Fungerer alltid — du trenger bare $p$ (koeffisienten foran $x$) og $q$ (konstantleddet).',
      },
      completing_square: {
        title: 'Fullstendig kvadrering',
        desc: 'Du kompletterer venstresiden til et perfekt kvadrat. Spesielt nyttig når du også vil bestemme toppunktet til en parabel.',
      },
      discriminant: {
        title: 'Diskriminant',
        desc: 'Uttrykket under rottegnet i abc-formelen: $D > 0$ gir to løsninger, $D = 0$ gir nøyaktig én, $D < 0$ betyr ingen reell løsning.',
      },
      factoring: {
        title: 'Faktorisering',
        desc: 'Oppdeling i to lineærfaktorer. Fungerer spesielt elegant når nullpunktene er heltall — da kan du ofte gjette dem.',
      },
    },
    examples: {
      pq_application: {
        title: 'Løse likning med abc-formelen',
        context: 'Mia beregner når Lumis hoppkurve treffer plattformen ved $y = 0$.',
        step1: 'Likningen er allerede i normalform (koeffisienten foran $x^2$ er 1):',
        step2: 'Vi leser av $p$ og $q$ — vær forsiktig med fortegnene:',
        step3: 'Sett verdiene inn i abc-formelen og regn ut steg for steg:',
        step4: 'To løsninger — Lumi treffer plattformen på to steder:',
        mia_comment: 'To løsninger gir mening: Lumi hopper opp ved $x = 1$ og lander ved $x = 3$ igjen. Strekket mellom er flygningen!',
      },
      completing_square: {
        title: 'Løse ved fullstendig kvadrering',
        context: 'Tim vil løse likningen uten abc-formelen — som et alternativ.',
        step1: 'Vi starter med likningen i normalform:',
        step2: 'Først flytte konstantleddet til høyresiden:',
        step3: 'Nå den fullstendige kvadreringen: $(\\frac{6}{2})^2 = 9$ legges til på begge sider:',
        step4: 'Venstresiden er nå et perfekt kvadrat — ta roten gir to tilfeller:',
        step5: 'Beregn begge løsningene:',
        mia_comment: 'Samme likning, samme løsninger, annen vei. Jeg bruker fullstendig kvadrering når jeg også trenger toppunktet til parabelen — to fluer i én smekk!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds og kastparabler',
        desc: 'Hvert kast i Angry Birds følger en parabel. Likningen $h(t) = 0$ forteller deg når objektet treffer bakken. Fysikere bruker den samme formelen for ekte kastbevegelser.',
      },
      breakeven: {
        title: 'Finne gevinstsonen',
        desc: 'En bedrift vil vite: Fra hvilket antall enheter går vi i pluss? Gevinsten $G(x) = 0$ gir break-even-punktene — som oftest en andregradslikning.',
      },
      rocket: {
        title: 'Rakettoppskytinger',
        desc: 'Høyden til en rakett etter oppskytingen følger en kvadratisk funksjon (så lenge drivstoffet rekker). Når når den 1000 m? Andregradslikning!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'abc-formel uten null på høyresiden',
        correct: 'Først flytte alt til én side',
        why: 'Abc-formelen forutsetter at høyresiden er null. Ved $x^2 + 3x = 5$ må du først legge til $-5$ på begge sider slik at $x^2 + 3x - 5 = 0$ oppstår. Ellers blir $q$ feil!',
        mia_warning: 'Jeg hadde denne feilen i koden en gang — plattform-kollisjonen var helt feil fordi $q$ hadde galt fortegn. Alltid null på høyresiden først!',
      },
      sign_pq: {
        wrong: 'Fortegnsfeil ved $p$ i abc-formelen',
        correct: 'Husk minustegnet foran $\\frac{p}{2}$',
        why: 'I abc-formelen står det $-\\frac{p}{2}$. Ved $x^2 - 6x + 8 = 0$ er $p = -6$, altså $-\\frac{-6}{2} = +3$. Glemmer du minustegnet, får du $-3$ i stedet for $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia jobber med fyrtårn-levelet i Hafenlichter. Fyrtårnet kaster en lyskjegle over havnen, og Lumi må gjemme seg i skyggen. "Jeg må beregne hvor langt lyskjeglen når ved en bestemt vinkel", sier Mia. Tim peker på en rettvinklet trekant som lyskjeglen danner med bakken. "Det er trigonometri — sinus, cosinus og tangens."',
      challenge: 'Mia trenger rekkevidden til lyskjeglen ved ulike vinkler for å programmere skyggeområdet.',
      outro: 'Fyrtårnet roterer sakte, og lyskjeglen vandrer over havnen. Takket være sinus og cosinus beregner Mias kode i sanntid hvilke områder som er opplyst. Lumi sniker seg fra skygge til skygge — levelet har blitt skikkelig spennende!',
    },
    objectives: {
      sin_cos_tan: 'Anvende sinus, cosinus og tangens i rettvinklede trekanter sikkert',
      unit_circle: 'Forstå enhetssirkelen og kunne lese av verdier',
      angle_calculations: 'Beregne vinkler og sidelengder med trigonometriske funksjoner',
      real_problems: 'Løse praktiske oppgaver med trigonometri (høyder, avstander, vinkler)',
    },
    explanation: {
      intro: 'Trigonometri forbinder vinkler med sidelengder. I enhver rettvinklet trekant gjelder tre grunnleggende forholdstall — oppkalt etter vinkelen $\\alpha$ du betrakter:',
      mia_tip: 'Min huskeregel: Motstående katet delt på hypotenus (sin), hosliggende katet delt på hypotenus (cos), motstående katet delt på hosliggende katet (tan). Høres dumt ut, men du glemmer det aldri!',
      unit_circle: 'Enhetssirkelen har radius 1 og sentrum i origo. For enhver vinkel $\\alpha$ gir den deg verdiene direkte: $x$-koordinaten er $\\cos(\\alpha)$, $y$-koordinaten er $\\sin(\\alpha)$. Dermed gjelder alltid:',
      special_angles: 'Visse vinkler bør du kunne utenat: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Tips: På enhetssirkelen kan du lese av disse verdiene geometrisk.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'Forholdet mellom motstående katet og hypotenus. På enhetssirkelen tilsvarer $\\sin(\\alpha)$ $y$-koordinaten til punktet på sirkelen.',
      },
      cosine: {
        title: 'Cosinus',
        desc: 'Forholdet mellom hosliggende katet og hypotenus. På enhetssirkelen tilsvarer $\\cos(\\alpha)$ $x$-koordinaten. Cosinus og sinus er forskjøvet med $90°$.',
      },
      tangent: {
        title: 'Tangens',
        desc: 'Forholdet mellom motstående katet og hosliggende katet — eller ekvivalent $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideell for stigninger og helningsvinkler.',
      },
      unit_circle: {
        title: 'Enhetssirkelen',
        desc: 'En sirkel med radius 1. Hvert punkt på sirkelen har koordinatene $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Dermed kan sin og cos defineres for alle vinkler — ikke bare spisse.',
      },
    },
    examples: {
      height_tan: {
        title: 'Beregne høyde med tangens',
        context: 'Mia måler vinkelen til fyrtårntoppen: $35°$. Avstanden til tårnet er $50\\,\\text{m}$.',
        step1: 'Skisse: Avstanden er hosliggende katet, den søkte høyden er motstående katet. Altså tangens:',
        step2: 'Løse for høyden $h$ — multipliser begge sider med $50\\,\\text{m}$:',
        step3: 'Kalkulator (DEG-modus!): $\\tan(35°) \\approx 0{,}7002$ settes inn og beregnes:',
        mia_comment: 'I spillet skjer dette i sanntid: Vinkelen til lyskjeglen endrer seg, og koden min beregner straks den nye rekkevidden. Tangens er perfekt for det!',
      },
      unit_circle: {
        title: 'Lese av verdier på enhetssirkelen',
        context: 'Tim vil vise Mia hvordan enhetssirkelen fungerer — med eksempelet $60°$.',
        step1: 'Omregne vinkelen (valgfritt): $60°$ tilsvarer $\\frac{\\pi}{3}$ i radianer:',
        step2: 'Lese av sinusverdien — $y$-koordinaten til punktet på enhetssirkelen:',
        step3: 'Lese av cosinusverdien — $x$-koordinaten:',
        step4: 'Punktet på enhetssirkelen har altså koordinatene:',
        mia_comment: 'På enhetssirkelen ser jeg sin og cos som lengder. Det gjør det mye mer anskuelig enn bare tall i en tabell!',
      },
    },
    realworld: {
      compass: {
        title: 'Navigasjon og GPS',
        desc: 'Smarttelefonen din beregner retninger med trigonometri. Funksjonen atan2 gjør om $x$- og $y$-koordinater til en vinkel — slik vet Google Maps hvilken retning du må gå.',
      },
      building_height: {
        title: 'Måle bygningshøyder',
        desc: 'Arkitekter og landmålere måler bygningshøyder uten å klatre opp på taket. Med en vinkelmåler og tangens holder det med avstand og vinkel.',
      },
      music: {
        title: 'Toner og lydbølger',
        desc: 'Enhver tone er en sinusbølge. Kammertonen A har 440 svingninger per sekund — beskrevet ved $f(t) = \\sin(880\\pi t)$. Musikk er anvendt trigonometri!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Forveksle sinus og cosinus',
        correct: 'Sinus = motstående katet/hypotenus',
        why: 'Sinus hører til motstående katet (siden overfor vinkelen), cosinus til hosliggende katet (siden ved siden av vinkelen). Forveksler du dem, får du feil verdi.',
        mia_warning: 'Det hender meg fortsatt! Jeg tegner trekanten og merker sidene i forhold til vinkelen. Da ser jeg straks hva som er motstående og hosliggende katet.',
      },
      deg_rad: {
        wrong: 'Feil vinkelmodus på kalkulatoren',
        correct: 'Alltid sjekke DEG-modus ved gradangivelser',
        why: 'I RAD-modus tolker kalkulatoren $90$ som $90$ radianer (ca. $5156°$), ikke som $90°$. $\\sin(90°) = 1$, men $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Resultat: helt feil.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter skal få en flerspillermodus. Mia tester serverne med 10 spillere — alt går smooth. Men Tim advarer: "Hva skjer med 100? Med 1000? Hvis spillet går viralt, dobles kanskje spillerantallet hvert par dager." Mia regner etter og blir forskrekket: Eksponentiell vekst er mye raskere enn man tror.',
      challenge: 'Serverbelastningen vokser ikke lineært med spillerne, men eksponentielt. Mia må forutsi når serverne blir overbelastet.',
      outro: 'Mia har bygd en modell som forutsier utviklingen av spillerantallet. Takket være eksponentialfunksjonen vet hun nå: Hvis doblingstiden er 3 dager, trenger hun etter 2 uker 32 ganger så mye serverkapasitet. "Heller skalere tidlig enn krasje sent", bestemmer hun.',
    },
    objectives: {
      exponential_functions: 'Gjenkjenne eksponentialfunksjoner og skille dem fra lineære funksjoner',
      growth_factor: 'Bestemme vekstfaktoren fra prosentangivelser og tolke den',
      half_life: 'Beregne og anvende halveringstid og doblingstid',
      model_real_world: 'Modellere reelle vekst- og nedbrytingsprosesser med eksponentialfunksjoner',
    },
    explanation: {
      intro: 'Ved lineær vekst kommer det like mye til i hvert steg. Ved eksponentiell vekst multipliseres det med den samme faktoren i hvert steg. Det høres likt ut — men fører til helt forskjellige resultater:',
      growth_factor: 'Vekstfaktoren $b$ forteller deg alt: Vokser noe med $p\\%$ per tidsenhet, er faktoren større enn 1. Avtar noe med $p\\%$ (nedbrytning), er den mindre enn 1:',
      mia_tip: 'Lineære funksjoner adderer, eksponentialfunksjoner multipliserer. Ved 10% vekst per dag er faktoren $b = 1{,}10$ — etter 7 dager altså $1{,}10^7 \\approx 1{,}95$, nesten en dobling! Det overrasket meg ved serverplanleggingen.',
      half_life: 'Halveringstiden $t_H$ er tiden det tar før halvparten er igjen. Den er konstant — uansett hvor mye du starter med. Det er det spesielle ved eksponentiell nedbrytning:',
      doubling_time: 'Motstykket ved vekst: Doblingstiden $t_V$ forteller deg etter hvor lang tid verdien har doblet seg. Også den forblir alltid lik:',
    },
    concepts: {
      exponential_function: {
        title: 'Eksponentialfunksjon',
        desc: 'Den generelle formen: $a$ er startverdien, $b$ vekstfaktoren, $t$ tiden. Avgjørende: Variabelen står i eksponenten — det er det som skiller den fra potensfunksjoner.',
      },
      growth_factor: {
        title: 'Vekstfaktor',
        desc: 'Ved $p\\%$ økning: $b = 1 + \\frac{p}{100}$. Eksempel: 5% vekst gir $b = 1{,}05$. Ved 12% avtak: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Halveringstid',
        desc: 'Tiden til en verdi har halvert seg. Typisk for radioaktivt henfall, medikamenter i kroppen eller batterilading. Halveringstiden er uavhengig av startverdien.',
      },
      euler_base: {
        title: 'Naturlig eksponentialfunksjon',
        desc: 'Grunntallet $e \\approx 2{,}718$ er spesielt: Funksjonen $e^x$ er sin egen deriverte. Med $k > 0$ vokser den, med $k < 0$ avtar den. Standard i naturvitenskapene.',
      },
    },
    examples: {
      bacteria: {
        title: 'Bakterievekst',
        context: 'En bakteriekultur starter med 500 bakterier og dobles hver time.',
        step1: 'Identifiser startverdi og vekstfaktor — dobling betyr faktor 2:',
        step2: 'Sett opp eksponentialfunksjonen — $t$ teller timene:',
        step3: 'Sett inn $t = 5$ (etter 5 timer): $2^5 = 32$:',
        step4: 'Etter 5 timer er det 16 000 bakterier:',
        mia_comment: 'Fra 500 til 16 000 på bare 5 timer! Det viser hvorfor eksponentiell vekst er så overraskende. Med servere er det lignende — spillertallene kan vokse raskere enn man kan bestille servere.',
      },
      radioactive: {
        title: 'Radioaktivt henfall',
        context: 'Et medikament har en halveringstid på 8 dager. Startmengde: 200 g.',
        step1: 'Noter halveringstid og startverdi:',
        step2: 'Sett opp henfallsformelen med $t_H = 8$:',
        step3: 'Sett inn etter 24 dager — det er nøyaktig 3 halveringstider ($\\frac{24}{8} = 3$):',
        step4: 'Etter 24 dager er det bare 25 g igjen — en åttendedel av startverdien:',
        mia_comment: 'Etter hver halveringstid halveres mengden: $200 \\to 100 \\to 50 \\to 25$. Slik er det alltid, uansett om du starter med 200 g eller 2 tonn.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Virale TikTok-videoer',
        desc: 'En viral video får innledningsvis 100 visninger. Hvis hver seer viser den til 1,8 personer, eksploderer tallene: Etter 10 runder er det allerede over 35 000 visninger. Algoritmer forsterker denne effekten ytterligere.',
      },
      battery: {
        title: 'Batteriutlading',
        desc: 'Mobilbatteriet ditt mister ca. 5% av ladningen per time. Etter 14 timer er omtrent halvparten igjen — det er ikke et lineært fall, men eksponentiell nedbrytning.',
      },
      pandemic: {
        title: 'Pandemispredning',
        desc: 'COVID-19 viste hva "eksponentiell vekst" betyr: Uten tiltak doblet smittetallene seg hver 3. dag. Etter en måned ville det være faktor $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Lineær modell i stedet for eksponentiell',
        correct: 'Prosentvis endring = eksponentialfunksjon',
        why: '"5% vekst per år" er IKKE $+5$ per år, men $\\cdot 1{,}05$ per år. Med lineær modell vokser beløpet konstant, med eksponentiell vokser det stadig raskere.',
        mia_warning: 'Jeg hadde først regnet $\\text{Spillere}(t) = 100 + 50t$. De virkelige tallene lå 3 ganger så høyt etter en uke! Eksponentiell vekst undervurderes nesten alltid.',
      },
      wrong_growth_factor: {
        wrong: 'Prosenttall satt inn direkte som faktor',
        correct: 'Faktor = $1 + \\frac{p}{100}$',
        why: 'Ved 3% vekst er faktoren $1{,}03$, ikke $3$! Med $b = 3$ ville verdien tredobles i stedet for å vokse med 3%. Regn alltid $1 + \\frac{p}{100}$.',
      },
    },
  },
};
