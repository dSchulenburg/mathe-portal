export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Amirs musikkanbefalingsalgoritme har et problem: populariteten til nye låter stiger eksplosivt i starten — men hvor fort egentlig? Og når flater hypen ut? "Jeg trenger en funksjon som beskriver ekstremt rask vekst og likevel lar seg regne på", sier Amir til Yara. Svaret: eksponentialfunksjonen med Eulers tall $e$ — og motstykket, den naturlige logaritmen.',
      challenge: 'Amir må modellere vekstkurven for strømminger av låter og forutsi når et spor når toppen — til det trenger han eksponentiallikninger og logaritmer.',
      outro: 'Med $e$-funksjonen og $\\ln$ kan Amir nå regne ut når en låt når toppen, og hvor fort interessen faller etterpå. "Det kule er: den naturlige logaritmen gjør enhver eksponentiallikning løsbar", forklarer han Finn. DataPulse forutsier nå låttrender med forbløffende presisjon.',
    },
    objectives: {
      e_function: 'Forstå og bruke $e$-funksjonen som naturlig vekstfunksjon',
      natural_log: 'Beherske den naturlige logaritmen som omvendt funksjon til $e^x$',
      log_rules: 'Bruke logaritmereglene sikkert (produkt, kvotient og potens)',
      solve_exp_equations: 'Løse eksponentiallikninger ved logaritmering',
    },
    explanation: {
      intro: 'Eulers tall $e \\approx 2{,}718$ er den viktigste konstanten for vekstprosesser. Hvorfor akkurat $e$? Fordi funksjonen $f(x) = e^x$ har en enestående egenskap: den deriverte er den selv — $f\'(x) = e^x$. Det betyr: vekstraten er alltid proporsjonal med den aktuelle verdien. Perfekt for naturlig vekst!',
      natural_log: 'Den naturlige logaritmen $\\ln(x)$ er den omvendte funksjonen til $e^x$. Vil du vite hvilken eksponent du trenger for å nå en bestemt verdi, er $\\ln$ verktøyet ditt. De to funksjonene opphever hverandre:',
      amir_tip: 'I ML-koden min dukker $\\ln$ opp overalt — i tapsfunksjonen, ved normaliseringen, i softmax-formelen. Grunnen: $\\ln$ gjør multiplikasjon om til addisjon og gjør enorme tall håndterbare. Derfor regner vi ofte med "log-likelihood" i stedet for sannsynligheter direkte!',
      log_rules: 'De tre logaritmereglene er ekstremt nyttige — de gjør komplekse uttrykk enklere. Grunnidéen: logaritmer gjør multiplikasjon til addisjon, divisjon til subtraksjon og potenser til multiplikasjon:',
      solving: 'For å løse en eksponentiallikning med hensyn på $x$ bruker du $\\ln$ på begge sider. Logaritmen "henter ned eksponenten" — det er nøkkelsteget:',
    },
    concepts: {
      e_function: {
        title: '$e$-funksjonen',
        desc: 'Den generelle formen $f(x) = a \\cdot e^{kx}$: $a$ er startverdien, $k$ bestemmer veksthastigheten. Ved $k > 0$ vokser funksjonen, ved $k < 0$ synker den (eksponentielt henfall). $e$-funksjonen er sin egen deriverte — derfor modellerer den naturlig vekst perfekt.',
      },
      natural_log: {
        title: 'Naturlig logaritme',
        desc: 'Den omvendte funksjonen til $e^x$: $\\ln(x)$ svarer på spørsmålet "hvilken potens av $e$ gir $x$?". Bare definert for $x > 0$. Viktig: $\\ln(1) = 0$ og $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Logaritmeregler',
        desc: 'Tre regler som forenkler alt: produktregelen ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), kvotientregelen ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) og potensregelen ($\\ln(a^r) = r \\cdot \\ln(a)$). Potensregelen er nøkkelen til å løse eksponentiallikninger.',
      },
    },
    examples: {
      solve_exp: {
        title: 'Løs en eksponentiallikning',
        context: 'Amir vil regne ut etter hvor mange dager en låt har 5 ganger så mange strømminger som i starten. Vekstmodellen er: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Sett opp likningen — når når strømmingene verdien 15?',
        step2: 'Del på 3 for å isolere $e^{2x}$:',
        step3: 'Bruk $\\ln$ på begge sider — eksponenten "kommer ned":',
        step4: 'Løs med hensyn på $x$ — del på koeffisienten 2:',
        amir_comment: 'Det er mønsteret jeg trenger hele tiden: isolér, logaritmér, løs. Fungerer for enhver eksponentiallikning!',
      },
      half_life: {
        title: 'Regn ut halveringstiden',
        context: 'Etter toppen mister en viral låt lyttere hver dag. Amir modellerer nedgangen med $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Modellen: 1000 aktive lyttere ved tidspunktet $t = 0$, eksponentiell nedgang:',
        step2: 'Halveringstid betyr: når er det 500 lyttere igjen?',
        step3: 'Isolér og logaritmér — $\\ln$ på begge sider:',
        step4: 'Løs med hensyn på $t$ — etter ca. 6{,}93 dager er lyttertallet halvert:',
        amir_comment: 'Halveringstiden er konstant! Uansett om det er 1000, 500 eller 250 lyttere — det går alltid ca. 6{,}93 dager til neste halvering. Det er magien i eksponentielt henfall.',
      },
    },
    realworld: {
      user_retention: {
        title: 'Brukerlojalitet i apper',
        desc: 'Hvor mange brukere er fortsatt aktive etter en uke? I de fleste apper faller lojaliteten eksponentielt: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse bruker denne modellen til å forutsi hvor mange brukere som er igjen etter 30 dager — og når det bør sendes målrettede push-varsler.',
      },
      compound_interest: {
        title: 'Kontinuerlig renteberegning',
        desc: 'Banker regner med årlig rente, men i teorien finnes også kontinuerlig renteberegning: $K(t) = K_0 \\cdot e^{rt}$. Jo oftere du beregner renter (daglig, hver time, hvert sekund...), desto nærmere kommer du $e^{rt}$. Det er grenseverdien!',
      },
      decibel: {
        title: 'Desibelskalaen',
        desc: 'Lydstyrke måles logaritmisk: $L = 10 \\cdot \\log_{10}(I/I_0)$. Dobles lydintensiteten, stiger nivået bare med ca. $3\\,\\text{dB}$. Derfor høres ikke 10 gitarer 10 ganger så høyt ut som én — hørselen vår arbeider logaritmisk!',
      },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — summen splittet opp',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — bare produkter kan splittes opp',
        why: 'Produktregelen gjelder BARE for multiplikasjon, ikke for addisjon! Det finnes ingen enkel formel for $\\ln(a + b)$. Det er en av de aller vanligste feilene.',
        amir_warning: 'Den buggen kostet meg en gang to timers feilsøking. Likelihood-beregningen min var helt feil fordi jeg brukte $\\ln(p_1 + p_2)$ i stedet for $\\ln(p_1 \\cdot p_2)$. Logaritmer splitter produkter — ikke summer!',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$ — logaritmen feil løst opp',
        correct: '$\\ln(e^x) = x$ — logaritmen opphever eksponentialfunksjonen',
        why: '$\\ln$ og $e^x$ er omvendte funksjoner — de opphever hverandre. Resultatet er rett og slett eksponenten $x$, uten faktoren $e$ foran.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse har lansert en ny funksjon, og Amir vil vite: hvor sannsynlig er det at minst 15 av 100 testbrukere klikker på den nye knappen? Hver bruker klikker eller lar være — et klassisk ja/nei-forsøk som gjentas $n$ ganger. "Dette er ikke lenger tilfeldighet, dette er binomisk fordeling", sier prof. Nguyen på seminaret.',
      challenge: 'Amir trenger sannsynligheten for et bestemt antall klikk ved $n$ uavhengige forsøk — den binomiske fordelingen gir det nøyaktige svaret.',
      outro: 'Amir har nå et statistisk rammeverk for A/B-tester. Han kan regne ut om et resultat er signifikant, eller om det bare oppsto tilfeldig. "Den binomiske fordelingen er fundamentet for nesten enhver statistisk test i praksis", forklarer han Yara. DataPulse tar nå databaserte beslutninger i stedet for magefølelse.',
    },
    objectives: {
      bernoulli: 'Kjenne igjen Bernoulli-forsøk og bestemme suksessannsynligheten $p$',
      binomial_formula: 'Bruke binomialformelen til å beregne $P(X = k)$',
      expected_value: 'Beregne og tolke forventningsverdien $E(X) = n \\cdot p$',
      standard_deviation: 'Bestemme standardavviket $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ og bruke det som spredningsmål',
    },
    explanation: {
      intro: 'Tenk deg at du gjentar et forsøk $n$ ganger, og at det hver gang bare finnes to utfall: suksess (sannsynlighet $p$) eller fiasko (sannsynlighet $1-p$). Den binomiske fordelingen forteller deg hvor sannsynlig nøyaktig $k$ suksesser ved $n$ forsøk er:',
      bernoulli: 'Grunnlaget er Bernoulli-forsøket — ett enkelt forsøk med nøyaktig to utfall. Tre betingelser må gjelde: (1) bare to resultater, (2) sannsynligheten $p$ er den samme i hvert forsøk, (3) forsøkene er uavhengige av hverandre. Binomialkoeffisienten teller de mulige plasseringene:',
      amir_tip: 'Binomialkoeffisienten $\\binom{n}{k}$ teller på hvor mange måter du kan fordele $k$ suksesser på $n$ forsøk. I koden min er det funksjonen scipy.special.comb(n, k). Ved store $n$ regner jeg heller ut den kumulative fordelingen — å summere enkeltsannsynligheter ville vært altfor tregt!',
      expected_value: 'Forventningsverdien $E(X) = n \\cdot p$ forteller deg hvor mange suksesser du kan vente "i gjennomsnitt". Ved 100 forsøk med $p = 0{,}15$ venter du $E(X) = 15$ suksesser. Men det betyr ikke at det er nøyaktig 15 hver gang! Hvor mye resultatene svinger, måles av standardavviket:',
      standard_deviation: 'Standardavviket $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ viser den typiske spredningen rundt forventningsverdien. Tommelfingerregler: ca. 68% av resultatene ligger i $E(X) \\pm \\sigma$ og ca. 95% i $E(X) \\pm 2\\sigma$. Jo større $n$, desto smalere blir fordelingen i forhold til forventningsverdien.',
    },
    concepts: {
      bernoulli: {
        title: 'Bernoulli-forsøk',
        desc: 'Et tilfeldig forsøk med nøyaktig to utfall: suksess (sannsynlighet $p$) eller fiasko ($1-p$). Eksempler: myntkast, klikk/ikke klikk, mål/ikke mål. Den binomiske fordelingen oppstår ved $n$ uavhengige gjentakelser.',
      },
      binomial_formula: {
        title: 'Binomialformelen',
        desc: 'Formelen $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ består av tre deler: $\\binom{n}{k}$ teller plasseringene, $p^k$ er sannsynligheten for $k$ suksesser og $(1-p)^{n-k}$ for $n-k$ fiaskoer.',
      },
      expected_value: {
        title: 'Forventningsverdi og standardavvik',
        desc: 'Forventningsverdien $E(X) = n \\cdot p$ er gjennomsnittet ved mange gjentakelser. Standardavviket $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ måler det typiske avviket fra den. Sammen beskriver de fordelingens beliggenhet og spredning.',
      },
    },
    examples: {
      coin_flips: {
        title: 'Myntkast: nøyaktig 7 kron av 10',
        context: 'Amir tester tilfeldighetsgeneratoren sin: ved 10 kast med en rettferdig mynt — hvor sannsynlig er nøyaktig 7 ganger kron?',
        step1: 'Bestem parametrene: $n = 10$ kast, $p = 0{,}5$ (rettferdig mynt), søkes: $k = 7$ ganger kron.',
        step2: 'Regn ut binomialkoeffisienten — på hvor mange måter kan 7 kron fordeles på 10 kast?',
        step3: 'Sett inn i binomialformelen: plasseringer $\\times$ suksesser $\\times$ fiaskoer:',
        step4: 'Regn ut — sannsynligheten er ca. 11{,}7%, altså heller usannsynlig:',
        amir_comment: 'Bare 11{,}7% — det viser: selv med en rettferdig mynt er 7 kron av 10 ikke særlig overraskende, men heller ikke normaltilfellet. Tilfeldighetsgeneratoren min ser ut til å være i orden!',
      },
      quality_control: {
        title: 'Kvalitetskontroll i produksjonen',
        context: 'En fabrikk har en feilrate på 2%. Amir regner ut: hvor sannsynlig er det at ingen av 20 stikkprøvetatte deler er defekte?',
        step1: 'Parametre: $n = 20$ deler, feilrate $p = 0{,}02$, søkes: $k = 0$ defekte deler.',
        step2: 'Sett inn: $\\binom{20}{0} = 1$, og $0{,}02^0 = 1$ — bare fiaskoene blir igjen:',
        step3: 'Forenkl — igjen står $0{,}98^{20}$:',
        step4: 'Resultat: med ca. 66{,}8% sannsynlighet er ingen del defekt — slett ikke så sikkert!',
        amir_comment: 'Bare to tredels sjanse for null feil ved en feilrate på 2%! Det viser: selv små sannsynligheter hoper seg opp ved mange forsøk. Ved $n = 100$ ville $P(X = 0) \\approx 13{,}3\\%$ — der finner man nesten sikkert en feil.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B-testing hos DataPulse',
        desc: 'Amir tester to versjoner av appen: versjon A har en klikkrate på 12%, versjon B på 15%. Med den binomiske fordelingen regner han ut om forskjellen er statistisk signifikant — eller om den også kunne oppstått tilfeldig. Det er grunnlaget for enhver A/B-test.',
      },
      medicine: {
        title: 'Medisinske studier',
        desc: 'Ved legemiddeltester teller man: hvor mange pasienter blir friske? Er helbredelsesraten signifikant bedre enn ved placebo? Den binomiske fordelingen gir svaret — og beskytter mot forhastede slutninger ved for små utvalg.',
      },
      surveys: {
        title: 'Meningsmålinger og feilmargin',
        desc: 'Hvis 52% stemmer "ja" i en måling — er det virkelig et flertall? Standardavviket $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ viser hvor bredt konfidensintervallet er. Ved $n = 100$ ville $\\sigma \\approx 5\\%$ — resultatet kunne altså også vært 47% eller 57%.',
      },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Glemme binomialkoeffisienten: $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Fullstendig formel med $\\binom{n}{k}$',
        why: 'Uten $\\binom{n}{k}$ teller formelen bare ÉN bestemt rekkefølge — f.eks. først $k$ suksesser og så $n-k$ fiaskoer. Men suksessene kan opptre på ulike plasser! Binomialkoeffisienten teller alle mulige plasseringer.',
        amir_warning: 'Tenk deg at du kaster en terning 3 ganger og vil ha nøyaktig 2 seksere. Det finnes 3 muligheter: 6-6-X, 6-X-6, X-6-6. Binomialkoeffisienten $\\binom{3}{2} = 3$ teller nettopp det. Uten den får du bare en tredel av den riktige sannsynligheten!',
      },
      variance_vs_sigma: {
        wrong: 'Forveksle varians og standardavvik',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — ikke glem kvadratroten!',
        why: 'Variansen er $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, og standardavviket er $\\sigma = \\sqrt{\\text{Var}(X)}$. Uten kvadratroten har resultatet feil enhet og er altfor stort. $\\sigma$ har samme enhet som $X$ — variansen har den i andre.',
      },
    },
  },

  '11-bedingte-wahrscheinlichkeit': {
    story: {
      intro: 'DataPulse anbefaler låter ut fra tidligere lyttevaner. Men Amir merker: ikke alle sammenhenger er like sterke. Den som hører rock, liker kanskje også metal — men gjelder det også motsatt vei? "Sannsynligheten for at noen liker rock HVIS de hører metal, er ikke det samme som omvendt", forklarer prof. Nguyen. Velkommen til betinget sannsynlighet.',
      challenge: 'Amir må forbedre anbefalingslogikken: hvor sannsynlig er det at en bruker liker sjanger $A$, GITT at han hører sjanger $B$? Og hvordan snur man den retningen?',
      outro: 'Med Bayes\' setning kan Amir nå snu anbefalingsretningen: fra "den som hører metal, hører også rock i 60% av tilfellene" blir det "den som hører rock, hører også metal i 35% av tilfellene". "Bayes er som omvendt utvikling for sannsynligheter", gliser han. DataPulse leverer nå tydelig mer presise anbefalinger.',
    },
    objectives: {
      conditional_prob: 'Beregne og tolke betingede sannsynligheter',
      bayes_theorem: 'Bruke Bayes\' setning til å snu retningen på en betinget sannsynlighet',
      independence: 'Undersøke stokastisk uavhengighet og skille den fra avhengighet',
      tree_diagrams: 'Bruke valgtrær og firefeltstabeller som hjelpemidler',
    },
    explanation: {
      intro: 'Den betingede sannsynligheten $P(A \\mid B)$ svarer på spørsmålet: "Hvor sannsynlig er $A$ når vi allerede vet at $B$ har inntruffet?" Kunnskapen om $B$ endrer sannsynligheten — utfallsrommet krymper til de tilfellene der $B$ gjelder:',
      multiplication_rule: 'Multiplikasjonsregelen følger direkte av definisjonen: vil du regne ut sannsynligheten for "$A$ og $B$ samtidig", ganger du $P(B)$ med den betingede sannsynligheten $P(A \\mid B)$:',
      amir_tip: 'I anbefalingskoden min bruker jeg betingede sannsynligheter hele tiden: $P(\\text{like}_Y \\mid \\text{like}_X)$ — sannsynligheten for at en bruker liker låt $Y$, gitt at han har likt låt $X$. Det er hjertet i ethvert kollaborativt filter!',
      bayes: 'Bayes\' setning er magien: den snur retningen. Kjenner du $P(B \\mid A)$, men trenger $P(A \\mid B)$, gir Bayes løsningen. Formelen ser komplisert ut, men kjernen er enkel: du vekter med grunnsannsynligheten (prior):',
      total_probability: 'Til nevneren i Bayes\' setning trenger du ofte den totale sannsynligheten. Den deler opp $P(B)$ i alle de veiene $B$ kan inntreffe på — via $A$ eller via $\\bar{A}$ (ikke-$A$):',
      independence: 'To hendelser er stokastisk uavhengige når kunnskap om den ene ikke endrer sannsynligheten for den andre. Formelt: $P(A \\mid B) = P(A)$ — at $B$ inntreffer, påvirker ikke $A$. Ekvivalent med dette gjelder:',
    },
    concepts: {
      conditional_prob: {
        title: 'Betinget sannsynlighet',
        desc: '$P(A \\mid B)$ er sannsynligheten for $A$ under betingelsen $B$. Du "zoomer" inn på den delen av sannsynlighetsrommet der $B$ gjelder, og spør så etter $A$. Viktig: $P(A \\mid B) \\neq P(B \\mid A)$ — retningen teller!',
      },
      bayes: {
        title: 'Bayes\' setning',
        desc: 'Formelen for å snu retningen: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ er prior (forhåndskunnskap) og $P(A \\mid B)$ posterior (oppdatert vurdering etter observasjon av $B$). Bayesiansk statistikk er grunnlaget for spamfiltre og diagnosesystemer.',
      },
      independence: {
        title: 'Stokastisk uavhengighet',
        desc: '$A$ og $B$ er uavhengige hvis $P(A \\cap B) = P(A) \\cdot P(B)$. Det betyr: at $B$ inntreffer, endrer ingenting ved sannsynligheten for $A$. Pass på: uavhengighet er IKKE det samme som "ingen snittmengde" (disjunkt)!',
      },
    },
    examples: {
      medical_test: {
        title: 'Medisinsk test — grunnrate-feilslutningen',
        context: 'En sykdomstest er korrekt i 99% av tilfellene. Sykdommen rammer 1% av befolkningen. Hvis testen er positiv — hvor sannsynlig er man da virkelig syk?',
        step1: 'Gitt: $P(K) = 0{,}01$ (sykdom), $P(+ \\mid K) = 0{,}99$ (sensitivitet), $P(+ \\mid \\bar{K}) = 0{,}05$ (falsk positiv-rate).',
        step2: 'Regn ut den totale sannsynligheten for et positivt resultat — begge veier (syke + friske):',
        step3: 'Bruk Bayes\' setning — $P(K \\mid +)$ søkes:',
        step4: 'Resultat: bare 16{,}7% sannsynlighet for virkelig å være syk — til tross for 99% testnøyaktighet!',
        amir_comment: 'Det er grunnrate-feilslutningen! Testen er svært presis, men fordi sykdommen er så sjelden ($P(K) = 1\\%$), er de fleste positive testene falskt positive. I ML-verdenen betyr det: presisjon og gjenkalling er ikke det samme!',
      },
      spam_filter: {
        title: 'Spamfilter med Bayes',
        context: 'Amirs e-postfilter skal lære: hvis en e-post inneholder ordet "gevinst" — er den spam?',
        step1: 'Gitte data: 30% av alle e-poster er spam, 80% av spam-e-postene inneholder "gevinst", men også 10% av de vanlige:',
        step2: 'Total sannsynlighet for at en e-post inneholder "gevinst":',
        step3: 'Bayes: hvor sannsynlig er spam når "gevinst" forekommer?',
        step4: 'Resultat: 77{,}4% — en e-post med "gevinst" er med høy sannsynlighet spam:',
        amir_comment: 'Nettopp slik fungerer en naiv Bayes-klassifikator! Jo flere ord du legger til, desto mer presist blir filteret. DataPulse bruker samme prinsipp: i stedet for ord analyserer vi lyttemønstre, og i stedet for spam/ikke-spam klassifiserer vi sjangerpreferanser.',
      },
    },
    realworld: {
      recommendation: {
        title: 'Musikkanbefalinger hos DataPulse',
        desc: 'Kollaborativ filtrering bygger på betingede sannsynligheter: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "den som liker låt X, liker med hvilken sannsynlighet også låt Y?" Spotify, Netflix og DataPulse regner ut millioner av slike betingede sannsynligheter i sanntid.',
      },
      weather: {
        title: 'Værvarsling',
        desc: 'Meteorologer oppdaterer prognosen sin hele tiden med Bayes: $P(\\text{Regn} \\mid \\text{Skyer, Trykk, Vind})$. Hver ny måling forfiner prognosen. Derfor endrer regnsannsynligheten seg i løpet av dagen — det er Bayes i praksis!',
      },
      fraud_detection: {
        title: 'Svindeloppdaging',
        desc: 'Amirs betalingssystem oppdager mistenkelige transaksjoner med Bayes: når en alarm utløses — hvor sannsynlig er ekte svindel? Akkurat som ved den medisinske testen: grunnraten avgjør! Ved en svindelrate på 0{,}1% er de fleste alarmene falske.',
      },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$ — retningen forvekslet',
        correct: 'Å snu retningen går bare med Bayes!',
        why: '$P(A \\mid B)$ og $P(B \\mid A)$ er helt forskjellige verdier. Eksempel: $P(\\text{våt} \\mid \\text{regn}) = 0{,}99$, men $P(\\text{regn} \\mid \\text{våt}) \\ll 0{,}99$ — man kan også bli våt av et vanningsanlegg. Du trenger Bayes\' setning for å snu retningen.',
        amir_warning: 'Den feilen ser jeg hele tiden i kodegjennomganger! Noen regner ut $P(\\text{click} \\mid \\text{bought})$ og bruker det som $P(\\text{bought} \\mid \\text{click})$. Det kan ødelegge anbefalingsalgoritmen fullstendig. Bayes er obligatorisk!',
      },
      ignore_base_rate: {
        wrong: 'Ignorere grunnraten (grunnrate-feilslutningen)',
        correct: 'Ta alltid hensyn til $P(A)$ — prior-sannsynligheten',
        why: 'En test med 99% nøyaktighet høres imponerende ut, men rammer sykdommen bare 1%, er $P(K \\mid +) \\approx 16{,}7\\%$. Den lave grunnraten $P(K) = 0{,}01$ dominerer resultatet. Uten prior får du en helt forvrengt vurdering.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn bygger backend-en til DataPulses nye funksjon: å finne liknende låter. Men hvordan måler man "likhet" mellom låter når hver låt beskrives av dusinvis av egenskaper — tempo, energi, stemning, instrumentering? "Tenk deg hver låt som et punkt i rommet", sier Amir. "Jo nærmere to punkter ligger, desto likere er låtene." Velkommen til vektorenes verden.',
      challenge: 'Amir må framstille låtenes egenskaper som vektorer og regne ut likheten deres — med skalarproduktet og vinkelen mellom vektorer.',
      outro: 'DataPulses anbefalingsmotor bruker nå cosinuslikhet: jo mindre vinkelen mellom to låtvektorer er, desto likere er låtene. "I ML-verdenen er vektorer overalt — ordvektorer, egenskapsrom, nevrale nett. Alt er lineær algebra", sier Amir begeistret til Yara.',
    },
    objectives: {
      vectors_2d_3d: 'Skrive vektorer i $\\mathbb{R}^2$ og $\\mathbb{R}^3$ som søyler og tolke dem geometrisk',
      vector_operations: 'Beherske vektoraddisjon og multiplikasjon med en skalar',
      scalar_product: 'Regne ut skalarproduktet og tolke det geometrisk',
      angle_between_vectors: 'Bestemme vinkelen mellom to vektorer med cosinusformelen',
    },
    explanation: {
      intro: 'En vektor beskriver en forskyvning i rommet — eller mer generelt: en ordnet liste av tall. I $\\mathbb{R}^3$ har en vektor tre koordinater som du skriver som søyle. I dataanalyse kan vektorer også ha 50 eller 500 dimensjoner — prinsippet er det samme:',
      addition: 'Vektorer adderer du koordinatvis — hver rad for seg. Geometrisk setter du den andre vektoren på enden av den første (spiss-til-hale-metoden). Resultatet er den direkte veien fra start til mål:',
      amir_tip: 'I Python-koden min er vektorer bare numpy-arrayer. Addisjonen $\\vec{a} + \\vec{b}$ utføres automatisk elementvis — np.array([3,4]) + np.array([-1,2]) gir np.array([2,6]). Nøyaktig det samme som i matematikken!',
      scalar_product: 'Skalarproduktet (også: indreprodukt) av to vektorer gir ett enkelt tall — ikke en vektor! Du ganger koordinatene parvis og legger alt sammen. Resultatet forteller deg hvor sterkt vektorene "peker i samme retning":',
      length: 'Lengden (normen) til en vektor regnes ut med Pytagoras\' setning — utvidet til tre dimensjoner. I 2D er det den kjente $\\sqrt{x^2 + y^2}$, i 3D kommer $z^2$ i tillegg:',
      angle: 'Skalarproduktets viktigste anvendelse: vinkelen mellom to vektorer. Formelen knytter det algebraiske skalarproduktet til den geometriske tolkningen. Denne vinkelen er i ML-verdenen standardmålet for likhet under navnet "cosinuslikhet":',
    },
    concepts: {
      vector: {
        title: 'Vektor',
        desc: 'En ordnet liste av tall skrevet som søyle. I $\\mathbb{R}^2$ har en vektor 2 koordinater, i $\\mathbb{R}^3$ tre. Geometrisk er den en pil med retning og lengde. I dataanalyse representerer en vektor et objekt med egenskapene sine — f.eks. en låt med tempo, energi og stemning.',
      },
      scalar_product: {
        title: 'Skalarprodukt',
        desc: 'To vektorer inn, ett tall ut: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometrisk gjelder: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Er skalarproduktet null, står vektorene vinkelrett på hverandre (ortogonale).',
      },
      vector_length: {
        title: 'Lengden til en vektor',
        desc: 'Lengden $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — generalisert Pytagoras. En vektor med lengde 1 kalles en enhetsvektor. I ML-verdenen normaliserer man ofte vektorer til lengde 1 for bare å sammenlikne retningen.',
      },
    },
    examples: {
      force_addition: {
        title: 'Legg sammen krefter som vektorer',
        context: 'To krefter virker på et objekt — Amir regner ut den resulterende samlede kraften.',
        step1: 'De to kreftene gitt som 2D-vektorer:',
        step2: 'Legg sammen koordinatvis — hver rad for seg:',
        step3: 'Regn ut lengden til den samlede kraften (Pytagoras):',
        step4: 'Regn ut — den samlede kraften er ca. $6{,}32\\,\\text{N}$:',
        amir_comment: 'Samme prinsipp bruker vi hos DataPulse: i stedet for krefter legger vi sammen egenskapsvektorer. Liker en bruker to sjangre, er den kombinerte smaksvektoren summen — slik finner vi låter som passer til begge sjangrene!',
      },
      angle_vectors: {
        title: 'Vinkel mellom låtvektorer',
        context: 'Amir sammenlikner to låter: låt A har egenskapsvektoren $(1, 2, 3)$ og låt B $(4, -1, 2)$. Hvor like er de?',
        step1: 'Egenskapsvektorene til de to låtene:',
        step2: 'Regn ut skalarproduktet — gang koordinatene parvis og legg sammen:',
        step3: 'Regn ut lengdene til begge vektorene:',
        step4: 'Bruk cosinusformelen — vinkelen er ca. $62{,}2°$:',
        amir_comment: 'En vinkel på $62{,}2°$ betyr: låtene er delvis like, men ikke ekstremt. Ved $0°$ ville de vært identiske (samme proporsjoner), ved $90°$ helt forskjellige. I koden min står det: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))',
      },
    },
    realworld: {
      embeddings: {
        title: 'Ordvektorer og låtvektorer',
        desc: 'I ML-verdenen framstilles ord, låter og bilder som høydimensjonale vektorer (embeddings). Cosinuslikheten $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ måler likheten deres. Et berømt eksempel: "konge" $-$ "mann" $+$ "kvinne" $\\approx$ "dronning" — vektoraritmetikk med ordbetydninger!',
      },
      navigation: {
        title: 'Navigasjon og robotikk',
        desc: 'Navigasjonssystemer og roboter bruker vektorer til posisjon og bevegelse. Posisjonsvektoren sier "hvor er jeg?", hastighetsvektoren "hvorhen og hvor fort?". Vektoraddisjon regner ut den nye posisjonen etter en bevegelse.',
      },
      game_physics: {
        title: 'Spillfysikk og simuleringer',
        desc: 'I spill som Fortnite eller Minecraft regnes fysikken ut med vektorer: $\\vec{v}_{\\text{ny}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Fart, akselerasjon og tyngdekraft — alt sammen vektorer! Uten vektorregning ville ingen ball fløyet riktig.',
      },
    },
    mistakes: {
      scalar_vs_cross: {
        wrong: 'Skalarproduktet gir en vektor',
        correct: 'Skalarproduktet gir et TALL ($\\in \\mathbb{R}$)',
        why: 'Ved skalarproduktet ganger du koordinatvis og LEGGER SAMMEN — resultatet er ett enkelt tall, ikke en vektor. Ikke forveksle det med kryssproduktet (det gir faktisk en vektor, men kommer først senere).',
        amir_warning: 'I numpy: np.dot(a, b) returnerer et tall, np.cross(a, b) returnerer en vektor. Hvis likhetsskåren din plutselig er en array i stedet for et tall, har du brukt feil produkt!',
      },
      length_sum: {
        wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — koordinatene bare lagt sammen',
        correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — bruk Pytagoras!',
        why: 'Lengden til en vektor er den euklidske avstanden fra origo — og den følger Pytagoras\' setning. Bare å legge sammen koordinatene ville gitt Manhattan-avstanden (også nyttig, men noe annet!).',
      },
    },
  },
};
