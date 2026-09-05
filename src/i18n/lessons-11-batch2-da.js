export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Amirs musikanbefalingsalgoritme har et problem: populariteten af nye sange stiger eksplosivt i begyndelsen — men hvor hurtigt præcis? Og hvornår flader hypen ud? "Jeg har brug for en funktion, der beskriver ekstremt hurtig vækst og alligevel forbliver beregnelig", siger Amir til Yara. Svaret: eksponentialfunktionen med Eulers tal $e$ — og dens modstykke, den naturlige logaritme.',
      challenge: 'Amir skal modellere vækstkurven for sangenes streams og forudsige, hvornår et nummer når sit højdepunkt — til det har han brug for eksponentialligninger og logaritmer.',
      outro: 'Med $e$-funktionen og $\\ln$ kan Amir nu beregne, hvornår en sang når sit højdepunkt, og hvor hurtigt interessen falder bagefter. "Det fede er: den naturlige logaritme gør enhver eksponentialligning løselig", forklarer han Finn. DataPulse forudsiger nu sangtendenser med forbløffende præcision.',
    },
    objectives: {
      e_function: 'Forstå og anvende $e$-funktionen som naturlig vækstfunktion',
      natural_log: 'Beherske den naturlige logaritme som omvendt funktion til $e^x$',
      log_rules: 'Anvende logaritmereglerne sikkert (produkt, kvotient og potens)',
      solve_exp_equations: 'Løse eksponentialligninger ved logaritmering',
    },
    explanation: {
      intro: 'Eulers tal $e \\approx 2{,}718$ er den vigtigste konstant for vækstprocesser. Hvorfor lige $e$? Fordi funktionen $f(x) = e^x$ har en enestående egenskab: dens afledede er den selv — $f\'(x) = e^x$. Det betyder: væksthastigheden er altid proportional med den aktuelle værdi. Perfekt til naturlig vækst!',
      natural_log: 'Den naturlige logaritme $\\ln(x)$ er den omvendte funktion til $e^x$. Vil du vide, hvilken eksponent du skal bruge for at nå en bestemt værdi, så er $\\ln$ dit værktøj. De to funktioner ophæver hinanden:',
      amir_tip: 'I min ML-kode dukker $\\ln$ op overalt — i tabsfunktionen, ved normaliseringen, i softmax-formlen. Grunden: $\\ln$ forvandler multiplikation til addition og gør enorme tal håndterbare. Derfor regner vi ofte med "log-likelihood" i stedet for sandsynligheder direkte!',
      log_rules: 'De tre logaritmeregler er ekstremt nyttige — de forvandler komplekse udtryk til enklere. Grundidéen: logaritmer gør multiplikation til addition, division til subtraktion og potenser til multiplikation:',
      solving: 'For at løse en eksponentialligning med hensyn til $x$ anvender du $\\ln$ på begge sider. Logaritmen "henter eksponenten ned" — det er nøgletrinnet:',
    },
    concepts: {
      e_function: {
        title: '$e$-funktionen',
        desc: 'Den generelle form $f(x) = a \\cdot e^{kx}$: $a$ er startværdien, $k$ bestemmer væksthastigheden. Ved $k > 0$ vokser funktionen, ved $k < 0$ falder den (eksponentielt henfald). $e$-funktionen er sin egen afledede — derfor modellerer den naturlig vækst perfekt.',
      },
      natural_log: {
        title: 'Naturlig logaritme',
        desc: 'Den omvendte funktion til $e^x$: $\\ln(x)$ besvarer spørgsmålet "hvilken potens af $e$ giver $x$?". Kun defineret for $x > 0$. Vigtigt: $\\ln(1) = 0$ og $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Logaritmeregler',
        desc: 'Tre regler, der forenkler alt: produktreglen ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), kvotientreglen ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) og potensreglen ($\\ln(a^r) = r \\cdot \\ln(a)$). Potensreglen er nøglen til at løse eksponentialligninger.',
      },
    },
    examples: {
      solve_exp: {
        title: 'Løs en eksponentialligning',
        context: 'Amir vil beregne, efter hvor mange dage en sang har 5 gange så mange streams som i starten. Vækstmodellen lyder: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Opstil ligningen — hvornår når streamsene værdien 15?',
        step2: 'Divider med 3 for at isolere $e^{2x}$:',
        step3: 'Anvend $\\ln$ på begge sider — eksponenten "kommer ned":',
        step4: 'Løs med hensyn til $x$ — divider med koefficienten 2:',
        amir_comment: 'Det er det mønster, jeg konstant har brug for: isolér, logaritmér, løs. Virker ved enhver eksponentialligning!',
      },
      half_life: {
        title: 'Beregn halveringstiden',
        context: 'Efter toppen mister en viral sang lyttere hver dag. Amir modellerer faldet med $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Modellen: 1000 aktive lyttere til tidspunktet $t = 0$, eksponentielt fald:',
        step2: 'Halveringstid betyder: hvornår er der 500 lyttere tilbage?',
        step3: 'Isolér og logaritmér — $\\ln$ på begge sider:',
        step4: 'Løs med hensyn til $t$ — efter ca. 6{,}93 dage er lytterantallet halveret:',
        amir_comment: 'Halveringstiden er konstant! Uanset om det er 1000, 500 eller 250 lyttere — der går altid ca. 6{,}93 dage til den næste halvering. Det er det eksponentielle henfalds magi.',
      },
    },
    realworld: {
      user_retention: {
        title: 'Brugerfastholdelse i apps',
        desc: 'Hvor mange brugere er stadig aktive efter en uge? I de fleste apps falder fastholdelsen eksponentielt: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse bruger denne model til at forudsige, hvor mange brugere der stadig er med efter 30 dage — og hvornår der målrettet skal sendes push-beskeder.',
      },
      compound_interest: {
        title: 'Kontinuerlig forrentning',
        desc: 'Banker regner med årlig forrentning, men i teorien findes også kontinuerlig forrentning: $K(t) = K_0 \\cdot e^{rt}$. Jo oftere du beregner renter (dagligt, hver time, hvert sekund...), desto tættere kommer du på $e^{rt}$. Det er grænseværdien!',
      },
      decibel: {
        title: 'Decibelskalaen',
        desc: 'Lydstyrke måles logaritmisk: $L = 10 \\cdot \\log_{10}(I/I_0)$. Fordobles lydintensiteten, stiger niveauet kun med ca. $3\\,\\text{dB}$. Derfor lyder 10 guitarer ikke 10 gange så højt som én — vores hørelse arbejder logaritmisk!',
      },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — summen delt op',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — kun produkter kan deles op',
        why: 'Produktreglen gælder KUN for multiplikation, ikke for addition! Der findes ingen simpel formel for $\\ln(a + b)$. Det er en af de allerhyppigste fejl.',
        amir_warning: 'Den fejl kostede mig engang to timers fejlsøgning. Min likelihood-beregning var fuldstændig forkert, fordi jeg brugte $\\ln(p_1 + p_2)$ i stedet for $\\ln(p_1 \\cdot p_2)$. Logaritmer deler produkter op — ikke summer!',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$ — logaritmen forkert opløst',
        correct: '$\\ln(e^x) = x$ — logaritmen ophæver eksponentialfunktionen',
        why: '$\\ln$ og $e^x$ er omvendte funktioner — de ophæver hinanden. Resultatet er simpelthen eksponenten $x$, uden faktoren $e$ foran.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse har lanceret en ny funktion, og Amir vil vide: hvor sandsynligt er det, at mindst 15 ud af 100 testbrugere klikker på den nye knap? Hver bruger klikker eller lader være — et klassisk ja/nej-eksperiment, der gentages $n$ gange. "Det er ikke længere tilfældighed, det er binomialfordeling", siger prof. Nguyen på seminaret.',
      challenge: 'Amir har brug for sandsynligheden for et bestemt antal klik ved $n$ uafhængige forsøg — binomialfordelingen giver det præcise svar.',
      outro: 'Amir har nu et statistisk framework til A/B-tests. Han kan beregne, om et resultat er signifikant, eller om det bare opstod tilfældigt. "Binomialfordelingen er fundamentet for næsten enhver statistisk test i praksis", forklarer han Yara. DataPulse træffer nu databaserede beslutninger i stedet for mavefornemmelser.',
    },
    objectives: {
      bernoulli: 'Genkende Bernoulli-eksperimenter og bestemme successandsynligheden $p$',
      binomial_formula: 'Anvende binomialformlen til at beregne $P(X = k)$',
      expected_value: 'Beregne og fortolke middelværdien $E(X) = n \\cdot p$',
      standard_deviation: 'Bestemme standardafvigelsen $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ og bruge den som spredningsmål',
    },
    explanation: {
      intro: 'Forestil dig, at du gentager et eksperiment $n$ gange, og at der hver gang kun er to udfald: succes (sandsynlighed $p$) eller fiasko (sandsynlighed $1-p$). Binomialfordelingen fortæller dig, hvor sandsynligt præcis $k$ successer ved $n$ forsøg er:',
      bernoulli: 'Grundlaget er Bernoulli-eksperimentet — et enkelt forsøg med præcis to udfald. Tre betingelser skal gælde: (1) kun to resultater, (2) sandsynligheden $p$ er den samme ved hvert forsøg, (3) forsøgene er uafhængige af hinanden. Binomialkoefficienten tæller de mulige placeringer:',
      amir_tip: 'Binomialkoefficienten $\\binom{n}{k}$ tæller, på hvor mange måder du kan fordele $k$ successer på $n$ forsøg. I min kode er det funktionen scipy.special.comb(n, k). Ved store $n$ beregner jeg hellere den kumulerede fordeling — at summere enkeltsandsynligheder ville være alt for langsomt!',
      expected_value: 'Middelværdien $E(X) = n \\cdot p$ fortæller dig, hvor mange successer du "i gennemsnit" kan forvente. Ved 100 forsøg med $p = 0{,}15$ forventer du $E(X) = 15$ successer. Men det betyder ikke, at det er præcis 15 hver gang! Hvor meget resultaterne svinger, måles af standardafvigelsen:',
      standard_deviation: 'Standardafvigelsen $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ viser den typiske spredning omkring middelværdien. Tommelfingerregler: ca. 68% af resultaterne ligger i $E(X) \\pm \\sigma$ og ca. 95% i $E(X) \\pm 2\\sigma$. Jo større $n$, desto smallere bliver fordelingen i forhold til middelværdien.',
    },
    concepts: {
      bernoulli: {
        title: 'Bernoulli-eksperiment',
        desc: 'Et tilfældigt eksperiment med præcis to udfald: succes (sandsynlighed $p$) eller fiasko ($1-p$). Eksempler: møntkast, klik/intet klik, mål/intet mål. Binomialfordelingen opstår ved $n$-dobbelt uafhængig gentagelse.',
      },
      binomial_formula: {
        title: 'Binomialformlen',
        desc: 'Formlen $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ består af tre dele: $\\binom{n}{k}$ tæller placeringerne, $p^k$ er sandsynligheden for $k$ successer og $(1-p)^{n-k}$ for $n-k$ fiaskoer.',
      },
      expected_value: {
        title: 'Middelværdi og standardafvigelse',
        desc: 'Middelværdien $E(X) = n \\cdot p$ er gennemsnittet ved mange gentagelser. Standardafvigelsen $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ måler den typiske afvigelse derfra. Tilsammen beskriver de fordelingens placering og spredning.',
      },
    },
    examples: {
      coin_flips: {
        title: 'Møntkast: præcis 7 plat ud af 10',
        context: 'Amir tester sin tilfældighedsgenerator: ved 10 kast med en fair mønt — hvor sandsynligt er præcis 7 gange plat?',
        step1: 'Bestem parametrene: $n = 10$ kast, $p = 0{,}5$ (fair mønt), søges: $k = 7$ gange plat.',
        step2: 'Beregn binomialkoefficienten — på hvor mange måder kan 7 plat fordeles på 10 kast?',
        step3: 'Indsæt i binomialformlen: placeringer $\\times$ successer $\\times$ fiaskoer:',
        step4: 'Regn ud — sandsynligheden er ca. 11{,}7%, altså snarere usandsynligt:',
        amir_comment: 'Kun 11{,}7% — det viser: selv med en fair mønt er 7 plat ud af 10 ikke særligt overraskende, men heller ikke normaltilfældet. Min tilfældighedsgenerator ser ud til at være i orden!',
      },
      quality_control: {
        title: 'Kvalitetskontrol i produktionen',
        context: 'En fabrik har en fejlrate på 2%. Amir beregner: hvor sandsynligt er det, at ingen af 20 stikprøveudtagne stykker er defekte?',
        step1: 'Parametre: $n = 20$ stykker, fejlrate $p = 0{,}02$, søges: $k = 0$ defekte dele.',
        step2: 'Indsæt: $\\binom{20}{0} = 1$, og $0{,}02^0 = 1$ — kun fiaskoerne bliver tilbage:',
        step3: 'Forenkl — tilbage står $0{,}98^{20}$:',
        step4: 'Resultat: med ca. 66{,}8% sandsynlighed er ingen del defekt — slet ikke så sikkert!',
        amir_comment: 'Kun to tredjedeles chance for nul fejl ved en fejlrate på 2%! Det viser: selv små sandsynligheder hober sig op ved mange forsøg. Ved $n = 100$ ville $P(X = 0) \\approx 13{,}3\\%$ — der finder man næsten med sikkerhed en fejl.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B-test hos DataPulse',
        desc: 'Amir tester to versioner af appen: version A har en klikrate på 12%, version B på 15%. Med binomialfordelingen beregner han, om forskellen er statistisk signifikant — eller om den også kunne være opstået tilfældigt. Det er grundlaget for enhver A/B-test.',
      },
      medicine: {
        title: 'Medicinske studier',
        desc: 'Ved lægemiddeltest tæller man: hvor mange patienter bliver raske? Er helbredelsesraten signifikant bedre end ved placebo? Binomialfordelingen giver svaret — og beskytter mod forhastede konklusioner ved for små stikprøver.',
      },
      surveys: {
        title: 'Meningsmålinger og fejlmargin',
        desc: 'Hvis 52% stemmer "ja" i en måling — er det så virkelig et flertal? Standardafvigelsen $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ viser, hvor bredt konfidensintervallet er. Ved $n = 100$ ville $\\sigma \\approx 5\\%$ — resultatet kunne altså også være 47% eller 57%.',
      },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Glemme binomialkoefficienten: $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Fuldstændig formel med $\\binom{n}{k}$',
        why: 'Uden $\\binom{n}{k}$ tæller formlen kun ÉN bestemt rækkefølge — f.eks. først $k$ successer og derefter $n-k$ fiaskoer. Men successerne kan optræde på forskellige pladser! Binomialkoefficienten tæller alle mulige placeringer.',
        amir_warning: 'Forestil dig, at du kaster en terning 3 gange og vil have præcis 2 seksere. Der er 3 muligheder: 6-6-X, 6-X-6, X-6-6. Binomialkoefficienten $\\binom{3}{2} = 3$ tæller netop det. Uden den får du kun en tredjedel af den rigtige sandsynlighed!',
      },
      variance_vs_sigma: {
        wrong: 'Forveksle varians og standardafvigelse',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — glem ikke kvadratroden!',
        why: 'Variansen er $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, og standardafvigelsen er $\\sigma = \\sqrt{\\text{Var}(X)}$. Uden kvadratroden har resultatet den forkerte enhed og er alt for stort. $\\sigma$ har samme enhed som $X$ — variansen har den i anden.',
      },
    },
  },

  '11-bedingte-wahrscheinlichkeit': {
    story: {
      intro: 'DataPulse anbefaler sange ud fra den hidtidige lytteadfærd. Men Amir bemærker: ikke alle sammenhænge er lige stærke. Den, der hører rock, kan måske også lide metal — men gælder det også omvendt? "Sandsynligheden for, at nogen kan lide rock, HVIS de hører metal, er ikke det samme som omvendt", forklarer prof. Nguyen. Velkommen til den betingede sandsynlighed.',
      challenge: 'Amir skal forbedre anbefalingslogikken: hvor sandsynligt er det, at en bruger kan lide genre $A$, GIVET at han hører genre $B$? Og hvordan vender man den retning om?',
      outro: 'Med Bayes\' sætning kan Amir nu vende anbefalingsretningen om: fra "den, der hører metal, hører også rock i 60% af tilfældene" bliver "den, der hører rock, hører også metal i 35% af tilfældene". "Bayes er som reverse engineering for sandsynligheder", griner han. DataPulse leverer nu tydeligt mere præcise anbefalinger.',
    },
    objectives: {
      conditional_prob: 'Beregne og fortolke betingede sandsynligheder',
      bayes_theorem: 'Anvende Bayes\' sætning til at vende retningen af en betinget sandsynlighed om',
      independence: 'Undersøge stokastisk uafhængighed og skelne den fra afhængighed',
      tree_diagrams: 'Bruge tælletræer og firfeltstabeller som hjælpemidler',
    },
    explanation: {
      intro: 'Den betingede sandsynlighed $P(A \\mid B)$ besvarer spørgsmålet: "Hvor sandsynligt er $A$, når vi allerede ved, at $B$ er indtruffet?" Viden om $B$ ændrer sandsynligheden — udfaldsrummet skrumper til de tilfælde, hvor $B$ gælder:',
      multiplication_rule: 'Multiplikationsreglen følger direkte af definitionen: vil du beregne sandsynligheden for "$A$ og $B$ samtidig", ganger du $P(B)$ med den betingede sandsynlighed $P(A \\mid B)$:',
      amir_tip: 'I min anbefalingskode bruger jeg konstant betingede sandsynligheder: $P(\\text{like}_Y \\mid \\text{like}_X)$ — sandsynligheden for, at en bruger kan lide sang $Y$, givet at han har liket sang $X$. Det er hjertet i ethvert collaborative filter!',
      bayes: 'Bayes\' sætning er magien: den vender retningen om. Kender du $P(B \\mid A)$, men har brug for $P(A \\mid B)$, giver Bayes løsningen. Formlen ser kompliceret ud, men kernen er enkel: du vægter med grundsandsynligheden (prior):',
      total_probability: 'Til nævneren i Bayes\' sætning har du ofte brug for den totale sandsynlighed. Den opdeler $P(B)$ i alle de veje, ad hvilke $B$ kan indtræffe — via $A$ eller via $\\bar{A}$ (ikke-$A$):',
      independence: 'To hændelser er stokastisk uafhængige, når viden om den ene ikke ændrer sandsynligheden for den anden. Formelt: $P(A \\mid B) = P(A)$ — at $B$ indtræffer, har ingen indflydelse på $A$. Ækvivalent hermed gælder:',
    },
    concepts: {
      conditional_prob: {
        title: 'Betinget sandsynlighed',
        desc: '$P(A \\mid B)$ er sandsynligheden for $A$ under betingelsen $B$. Du "zoomer" ind på den del af sandsynlighedsrummet, hvor $B$ gælder, og spørger så efter $A$. Vigtigt: $P(A \\mid B) \\neq P(B \\mid A)$ — retningen tæller!',
      },
      bayes: {
        title: 'Bayes\' sætning',
        desc: 'Formlen til at vende retningen om: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ er prior (forhåndsviden) og $P(A \\mid B)$ posterior (opdateret vurdering efter observation af $B$). Bayesiansk statistik er grundlaget for spamfiltre og diagnosesystemer.',
      },
      independence: {
        title: 'Stokastisk uafhængighed',
        desc: '$A$ og $B$ er uafhængige, hvis $P(A \\cap B) = P(A) \\cdot P(B)$. Det betyder: at $B$ indtræffer, ændrer intet ved sandsynligheden for $A$. Pas på: uafhængighed er IKKE det samme som "ingen fællesmængde" (disjunkt)!',
      },
    },
    examples: {
      medical_test: {
        title: 'Medicinsk test — base rate fallacy',
        context: 'En sygdomstest er korrekt i 99% af tilfældene. Sygdommen rammer 1% af befolkningen. Hvis testen er positiv — hvor sandsynligt er man så virkelig syg?',
        step1: 'Givet: $P(K) = 0{,}01$ (sygdom), $P(+ \\mid K) = 0{,}99$ (sensitivitet), $P(+ \\mid \\bar{K}) = 0{,}05$ (falsk positiv-rate).',
        step2: 'Beregn den totale sandsynlighed for et positivt resultat — begge veje (syge + raske):',
        step3: 'Anvend Bayes\' sætning — $P(K \\mid +)$ søges:',
        step4: 'Resultat: kun 16{,}7% sandsynlighed for virkelig at være syg — trods 99% testnøjagtighed!',
        amir_comment: 'Det er base rate fallacy! Testen er meget præcis, men fordi sygdommen er så sjælden ($P(K) = 1\\%$), er de fleste positive tests falsk positive. I ML-verdenen betyder det: precision og recall er ikke det samme!',
      },
      spam_filter: {
        title: 'Spamfilter med Bayes',
        context: 'Amirs e-mailfilter skal lære: hvis en mail indeholder ordet "gevinst" — er den så spam?',
        step1: 'Givne data: 30% af alle mails er spam, 80% af spammails indeholder "gevinst", men også 10% af de normale mails:',
        step2: 'Total sandsynlighed for, at en mail indeholder "gevinst":',
        step3: 'Bayes: hvor sandsynligt er spam, når "gevinst" forekommer?',
        step4: 'Resultat: 77{,}4% — en mail med "gevinst" er med høj sandsynlighed spam:',
        amir_comment: 'Præcis sådan fungerer en Naive Bayes-klassifikator! Jo flere ord du tilføjer, desto mere præcist bliver filtret. DataPulse bruger samme princip: i stedet for ord analyserer vi lyttemønstre, og i stedet for spam/ikke-spam klassificerer vi genrepræferencer.',
      },
    },
    realworld: {
      recommendation: {
        title: 'Musikanbefalinger hos DataPulse',
        desc: 'Collaborative filtering bygger på betingede sandsynligheder: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "den, der kan lide sang X, kan med hvilken sandsynlighed også lide sang Y?" Spotify, Netflix og DataPulse beregner millioner af sådanne betingede sandsynligheder i realtid.',
      },
      weather: {
        title: 'Vejrudsigt',
        desc: 'Meteorologer opdaterer konstant deres prognose med Bayes: $P(\\text{Regn} \\mid \\text{Skyer, Tryk, Vind})$. Hver ny måling forfiner prognosen. Derfor ændrer regnsandsynligheden sig i løbet af dagen — det er Bayes i aktion!',
      },
      fraud_detection: {
        title: 'Svindeldetektion',
        desc: 'Amirs betalingssystem opdager mistænkelige transaktioner med Bayes: når en alarm udløses — hvor sandsynligt er ægte svindel så? Præcis som ved den medicinske test: grundraten afgør det! Ved en svindelrate på 0{,}1% er de fleste alarmer falske.',
      },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$ — retningen forvekslet',
        correct: 'At vende retningen om går kun med Bayes!',
        why: '$P(A \\mid B)$ og $P(B \\mid A)$ er helt forskellige værdier. Eksempel: $P(\\text{våd} \\mid \\text{regn}) = 0{,}99$, men $P(\\text{regn} \\mid \\text{våd}) \\ll 0{,}99$ — man kan også blive våd af et vandingsanlæg. Du har brug for Bayes\' sætning til at vende retningen om.',
        amir_warning: 'Den fejl ser jeg konstant i kodegennemgange! Nogen beregner $P(\\text{click} \\mid \\text{bought})$ og bruger det som $P(\\text{bought} \\mid \\text{click})$. Det kan fuldstændig ødelægge anbefalingsalgoritmen. Bayes er obligatorisk!',
      },
      ignore_base_rate: {
        wrong: 'Ignorere grundraten (base rate fallacy)',
        correct: 'Tag altid $P(A)$ — prior-sandsynligheden — med i betragtning',
        why: 'En test med 99% nøjagtighed lyder imponerende, men rammer sygdommen kun 1%, er $P(K \\mid +) \\approx 16{,}7\\%$. Den lave grundrate $P(K) = 0{,}01$ dominerer resultatet. Uden prior får du en fuldstændig forvrænget vurdering.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn bygger backenden til DataPulses nye funktion: at finde lignende sange. Men hvordan måler man "lighed" mellem sange, når hver sang beskrives af snesevis af egenskaber — tempo, energi, stemning, instrumentering? "Forestil dig hver sang som et punkt i rummet", siger Amir. "Jo tættere to punkter ligger, desto mere ligner sangene hinanden." Velkommen til vektorernes verden.',
      challenge: 'Amir skal fremstille sangenes features som vektorer og beregne deres lighed — med skalarproduktet og vinklen mellem vektorer.',
      outro: 'DataPulses anbefalingsmotor bruger nu cosinuslighed: jo mindre vinklen mellem to sangvektorer er, desto mere ligner sangene hinanden. "I ML-verdenen er vektorer overalt — word embeddings, feature spaces, neurale netværk. Det hele er lineær algebra", siger Amir begejstret til Yara.',
    },
    objectives: {
      vectors_2d_3d: 'Notere vektorer i $\\mathbb{R}^2$ og $\\mathbb{R}^3$ som søjler og fortolke dem geometrisk',
      vector_operations: 'Beherske vektoraddition og multiplikation med en skalar',
      scalar_product: 'Beregne skalarproduktet og tolke det geometrisk',
      angle_between_vectors: 'Bestemme vinklen mellem to vektorer med cosinusformlen',
    },
    explanation: {
      intro: 'En vektor beskriver en forskydning i rummet — eller mere generelt: en ordnet liste af tal. I $\\mathbb{R}^3$ har en vektor tre koordinater, som du skriver som søjle. I dataanalyse kan vektorer også have 50 eller 500 dimensioner — princippet er det samme:',
      addition: 'Vektorer lægger du sammen koordinatvis — hver række for sig. Geometrisk sætter du den anden vektor for enden af den første (spids-til-hale-metoden). Resultatet er den direkte vej fra start til mål:',
      amir_tip: 'I min Python-kode er vektorer bare numpy-arrays. Additionen $\\vec{a} + \\vec{b}$ udføres automatisk elementvis — np.array([3,4]) + np.array([-1,2]) giver np.array([2,6]). Præcis det samme som i matematikken!',
      scalar_product: 'Skalarproduktet (også: indre produkt) af to vektorer giver ét enkelt tal — ikke en vektor! Du ganger koordinaterne parvis og lægger det hele sammen. Resultatet fortæller dig, hvor kraftigt vektorerne "peger i samme retning":',
      length: 'Længden (normen) af en vektor beregnes med Pythagoras\' sætning — udvidet til tre dimensioner. I 2D er det den velkendte $\\sqrt{x^2 + y^2}$, i 3D kommer $z^2$ til:',
      angle: 'Skalarproduktets vigtigste anvendelse: vinklen mellem to vektorer. Formlen forbinder det algebraiske skalarprodukt med den geometriske fortolkning. Denne vinkel er i ML-verdenen standardmålet for lighed under navnet "cosinuslighed":',
    },
    concepts: {
      vector: {
        title: 'Vektor',
        desc: 'En ordnet liste af tal skrevet som søjle. I $\\mathbb{R}^2$ har en vektor 2 koordinater, i $\\mathbb{R}^3$ tre. Geometrisk er den en pil med retning og længde. I dataanalyse repræsenterer en vektor et objekt med dets egenskaber — f.eks. en sang med tempo, energi og stemning.',
      },
      scalar_product: {
        title: 'Skalarprodukt',
        desc: 'To vektorer ind, ét tal ud: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometrisk gælder: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Er skalarproduktet nul, står vektorerne vinkelret på hinanden (ortogonale).',
      },
      vector_length: {
        title: 'En vektors længde',
        desc: 'Længden $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — generaliseret Pythagoras. En vektor med længde 1 kaldes en enhedsvektor. I ML-verdenen normaliserer man ofte vektorer til længde 1 for kun at sammenligne retningen.',
      },
    },
    examples: {
      force_addition: {
        title: 'Læg kræfter sammen som vektorer',
        context: 'To kræfter virker på et objekt — Amir beregner den resulterende samlede kraft.',
        step1: 'De to kræfter givet som 2D-vektorer:',
        step2: 'Læg sammen koordinatvis — hver række for sig:',
        step3: 'Beregn den samlede krafts længde (Pythagoras):',
        step4: 'Regn ud — den samlede kraft er ca. $6{,}32\\,\\text{N}$:',
        amir_comment: 'Samme princip bruger vi hos DataPulse: i stedet for kræfter lægger vi featurevektorer sammen. Kan en bruger lide to genrer, er den kombinerede smagsvektor summen — sådan finder vi sange, der passer til begge genrer!',
      },
      angle_vectors: {
        title: 'Vinkel mellem sangvektorer',
        context: 'Amir sammenligner to sange: sang A har featurevektoren $(1, 2, 3)$ og sang B $(4, -1, 2)$. Hvor meget ligner de hinanden?',
        step1: 'De to sanges featurevektorer:',
        step2: 'Beregn skalarproduktet — gang koordinaterne parvis og læg sammen:',
        step3: 'Beregn begge vektorers længde:',
        step4: 'Anvend cosinusformlen — vinklen er ca. $62{,}2°$:',
        amir_comment: 'En vinkel på $62{,}2°$ betyder: sangene ligner delvis hinanden, men ikke ekstremt. Ved $0°$ ville de være identiske (samme proportioner), ved $90°$ helt forskellige. I min kode står der: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))',
      },
    },
    realworld: {
      embeddings: {
        title: 'Word embeddings og song embeddings',
        desc: 'I ML-verdenen fremstilles ord, sange og billeder som højdimensionale vektorer (embeddings). Cosinusligheden $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ måler deres lighed. Et berømt eksempel: "konge" $-$ "mand" $+$ "kvinde" $\\approx$ "dronning" — vektoraritmetik med ordbetydninger!',
      },
      navigation: {
        title: 'Navigation og robotteknik',
        desc: 'Navigationssystemer og robotter bruger vektorer til position og bevægelse. Positionsvektoren siger "hvor er jeg?", hastighedsvektoren "hvorhen og hvor hurtigt?". Vektoraddition beregner den nye position efter en bevægelse.',
      },
      game_physics: {
        title: 'Spilfysik og simuleringer',
        desc: 'I spil som Fortnite eller Minecraft beregnes fysikken med vektorer: $\\vec{v}_{\\text{ny}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Hastighed, acceleration og tyngdekraft — alt sammen vektorer! Uden vektorregning ville ingen bold flyve rigtigt.',
      },
    },
    mistakes: {
      scalar_vs_cross: {
        wrong: 'Skalarproduktet giver en vektor',
        correct: 'Skalarproduktet giver et TAL ($\\in \\mathbb{R}$)',
        why: 'Ved skalarproduktet ganger du koordinatvis og LÆGGER SAMMEN — resultatet er ét enkelt tal, ikke en vektor. Forveksl det ikke med krydsproduktet (det giver faktisk en vektor, men kommer først senere).',
        amir_warning: 'I numpy: np.dot(a, b) returnerer et tal, np.cross(a, b) returnerer en vektor. Hvis din similarity-score pludselig er et array i stedet for et tal, har du brugt det forkerte produkt!',
      },
      length_sum: {
        wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — koordinaterne bare lagt sammen',
        correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — brug Pythagoras!',
        why: 'En vektors længde er den euklidiske afstand fra origo — og den følger Pythagoras\' sætning. Simpelthen at lægge koordinaterne sammen ville give Manhattan-afstanden (også nyttig, men noget andet!).',
      },
    },
  },
};
