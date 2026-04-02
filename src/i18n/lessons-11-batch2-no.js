export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Amirs musikkanbefalsingsalgoritme har et problem: Populariteten til nye sanger stiger eksplosivt i begynnelsen — men hvor raskt noeaktig? Og naar flater hypen ut? "Jeg trenger en funksjon som beskriver ekstremt rask vekst og likevel forblir haandterbar", sier Amir til Yara. Svaret: eksponentialfunksjonen med Eulers tall $e$ — og motparten, den naturlige logaritmen.',
      challenge: 'Amir maa modellere vekstkurven for sangstroemmer og forutsi naar en laaat naar toppen — til det trenger han eksponentiallikninger og logaritmer.',
      outro: 'Med $e$-funksjonen og $\\ln$ kan Amir naa beregne naar en sang naar sitt hoeidepunkt og hvor raskt interessen avtar deretter. "Det kule er: Den naturlige logaritmen gjoer enhver eksponentiallikning loesbar", forklarer han Finn. DataPulse forutsier naa sangtrender med forbloeffende presisjon.',
    },
    objectives: {
      e_function: 'Forsta $e$-funksjonen som naturlig vekstfunksjon og anvende den',
      natural_log: 'Beherske den naturlige logaritmen som omvendt funksjon av $e^x$',
      log_rules: 'Anvende logaritmeregler sikkert (produkt-, kvotient- og potensregel)',
      solve_exp_equations: 'Loese eksponentiallikninger ved logaritmering',
    },
    explanation: {
      intro: 'Eulers tall $e \\approx 2{,}718$ er den viktigste konstanten for vekstprosesser. Hvorfor akkurat $e$? Fordi funksjonen $f(x) = e^x$ har en unik egenskap: Den deriverte er seg selv — $f\'(x) = e^x$. Det betyr: Vekstraten er alltid proporsjonal med den naavaerende verdien. Perfekt for naturlig vekst!',
      natural_log: 'Den naturlige logaritmen $\\ln(x)$ er den omvendte funksjonen av $e^x$. Naar du vil vite hvilken eksponent du trenger for aa naa en bestemt verdi — da er $\\ln$ verktoyet ditt. De to funksjonene opphever hverandre:',
      amir_tip: 'I ML-koden min dukker $\\ln$ opp overalt — i tapsfunksjonen, ved normalisering, i softmax-formelen. Grunnen: $\\ln$ gjor multiplikasjon om til addisjon og gjoer enorme tall haandterbare. Derfor regner vi ofte med "Log-Likelihood" i stedet for sannsynligheter direkte!',
      log_rules: 'De tre logaritmereglene er ekstremt nyttige — de gjor komplekse uttrykk til enklere. Grunnideen: Logaritmer gjor multiplikasjon til addisjon, divisjon til subtraksjon og potenser til multiplikasjon:',
      solving: 'For aa loese en eksponentiallikning for $x$, anvender du $\\ln$ paa begge sider. Logaritmen "henter eksponenten ned" — det er noekkelsteget:',
    },
    concepts: {
      e_function: {
        title: '$e$-funksjon',
        desc: 'Den generelle formen $f(x) = a \\cdot e^{kx}$: $a$ er startverdien, $k$ bestemmer veksthastigheten. Ved $k > 0$ vokser funksjonen, ved $k < 0$ avtar den (eksponentiell nedbrytning). $e$-funksjonen er sin egen deriverte — derfor modellerer den naturlig vekst perfekt.',
      },
      natural_log: {
        title: 'Naturlig logaritme',
        desc: 'Den omvendte funksjonen av $e^x$: $\\ln(x)$ besvarer spoersmaalet "Hvilken potens av $e$ gir $x$?". Definert bare for $x > 0$. Viktig: $\\ln(1) = 0$ og $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Logaritmeregler',
        desc: 'Tre regler som forenkler alt: Produktregel ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), Kvotientregel ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) og Potensregel ($\\ln(a^r) = r \\cdot \\ln(a)$). Potensregelen er nokkelen til aa loese eksponentiallikninger.',
      },
    },
    examples: {
      solve_exp: {
        title: 'Loese eksponentiallikning',
        context: 'Amir vil beregne etter hvor mange dager en sang har 5 ganger saa mange stroemmer som i begynnelsen.',
        step1: 'Sett opp likningen — naar naar stroemmene verdien 15?',
        step2: 'Del paa 3 for aa isolere $e^{2x}$:',
        step3: 'Anvend $\\ln$ paa begge sider — eksponenten "kommer ned":',
        step4: 'Loes for $x$ — del paa koeffisienten 2:',
        amir_comment: 'Det er moensteret jeg trenger hele tiden: Isolere, logaritmere, loese. Fungerer ved enhver eksponentiallikning!',
      },
      half_life: {
        title: 'Beregne halveringstid',
        context: 'Etter toppen mister en viral sang daglig lyttere. Amir modellerer nedgangen med $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Modellen: 1000 aktive lyttere ved tidspunkt $t = 0$, eksponentiell nedgang:',
        step2: 'Halveringstid betyr: Naar er det 500 lyttere igjen?',
        step3: 'Isoler og logaritmer — $\\ln$ paa begge sider:',
        step4: 'Loes for $t$ — etter ca. 6{,}93 dager har lytterantallet halvert seg:',
        amir_comment: 'Halveringstiden er konstant! Uansett om 1000, 500 eller 250 lyttere — det tar alltid ca. 6{,}93 dager til neste halvering. Det er magien ved eksponentiell nedbrytning.',
      },
    },
    realworld: {
      user_retention: {
        title: 'Brukerretensjon i apper',
        desc: 'Hvor mange brukere er fortsatt aktive etter en uke? For de fleste apper faller retensjonen eksponentielt: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse bruker denne modellen til aa forutsi hvor mange brukere som fortsatt er med etter 30 dager.',
      },
      compound_interest: {
        title: 'Kontinuerlig rente',
        desc: 'Banker regner med aarlig rente, men i teorien finnes ogsaa kontinuerlig rente: $K(t) = K_0 \\cdot e^{rt}$. Jo oftere du beregner rente (daglig, per time, per sekund...), desto naermere kommer du $e^{rt}$. Det er grenseverdien!',
      },
      decibel: {
        title: 'Desibelskalaen',
        desc: 'Lydstyrke maales logaritmisk: $L = 10 \\cdot \\log_{10}(I/I_0)$. Dobles lydintensiteten, stiger nivaaet bare med ca. $3\\,\\text{dB}$. Derfor hoeres 10 gitarer ikke 10 ganger saa hoyt som en — hoerselen vaar jobber logaritmisk!',
      },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — sum splittet opp',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — bare produkter kan splittes',
        why: 'Produktregelen gjelder KUN for multiplikasjon, ikke for addisjon! Det finnes ingen enkel formel for $\\ln(a + b)$. Det er en av de vanligste feilene overhodet.',
        amir_warning: 'Denne buggen kostet meg to timer med debugging. Likelihood-beregningen min var helt feil fordi jeg brukte $\\ln(p_1 + p_2)$ i stedet for $\\ln(p_1 \\cdot p_2)$. Logaritmer splitter produkter — ikke summer!',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$ — logaritmen feil oppLoest',
        correct: '$\\ln(e^x) = x$ — logaritmen opphever eksponentialfunksjonen',
        why: '$\\ln$ og $e^x$ er omvendte funksjoner — de opphever hverandre. Resultatet er rett og slett eksponenten $x$, uten faktor $e$ foran.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse har lansert en ny funksjon, og Amir vil vite: Hvor sannsynlig er det at av 100 testbrukere minst 15 klikker paa den nye knappen? Hver bruker klikker eller klikker ikke — et klassisk ja/nei-eksperiment som gjentas $n$ ganger. "Det er ikke tilfeldig lenger, det er binomialfordeling", sier Prof. Nguyen i seminaret.',
      challenge: 'Amir trenger sannsynligheten for et bestemt antall klikk ved $n$ uavhengige forsoek — binomialfordelingen gir det eksakte svaret.',
      outro: 'Amir har naa et statistisk rammeverk for A/B-tester. Han kan beregne om et resultat er signifikant eller bare tilfeldig. "Binomialfordelingen er fundamentet for naesten enhver statistisk test i praksis", forklarer han Yara. DataPulse tar beslutninger naa databasert i stedet for paa magefoeelse.',
    },
    objectives: {
      bernoulli: 'Gjenkjenne Bernoulli-eksperimenter og bestemme suksessannsynligheten $p$',
      binomial_formula: 'Anvende binomialformelen for aa beregne $P(X = k)$',
      expected_value: 'Beregne og tolke forventningsverdien $E(X) = n \\cdot p$',
      standard_deviation: 'Bestemme standardavviket $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ og bruke det som spredningsmaal',
    },
    explanation: {
      intro: 'Forestill deg at du gjentar et eksperiment $n$ ganger, og hver gang er det bare to utfall: Suksess (sannsynlighet $p$) eller mislykkethet (sannsynlighet $1-p$). Binomialfordelingen forteller deg hvor sannsynlig noeaktig $k$ suksesser ved $n$ forsoek er:',
      bernoulli: 'Grunnlaget er Bernoulli-eksperimentet — et enkelt forsoek med noeaktig to utfall. Tre betingelser maa gjelde: (1) bare to resultater, (2) sannsynligheten $p$ forblir lik ved hvert forsoek, (3) forsoekene er uavhengige av hverandre. Binomialkoeffisienten teller de mulige arrangementene:',
      amir_tip: 'Binomialkoeffisienten $\\binom{n}{k}$ teller paa hvor mange maater du kan fordele $k$ suksesser paa $n$ forsoek. I koden min er det funksjonen scipy.special.comb(n, k). For store $n$ beregner jeg heller den kumulative fordelingen — aa summere enkeltsannsynligheter ville vaert altfor tregt!',
      expected_value: 'Forventningsverdien $E(X) = n \\cdot p$ forteller deg hvor mange suksesser du "i gjennomsnitt" forventer. Ved 100 forsoek med $p = 0{,}15$ forventer du $E(X) = 15$ suksesser. Men det betyr ikke at det blir noeaktig 15 hver gang! Hvor mye resultatene svinger, maaler standardavviket:',
      standard_deviation: 'Standardavviket $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ viser den typiske spredningen rundt forventningsverdien. Tommelfingerregler: Ca. 68% av resultatene ligger i $E(X) \\pm \\sigma$, ca. 95% i $E(X) \\pm 2\\sigma$.',
    },
    concepts: {
      bernoulli: {
        title: 'Bernoulli-eksperiment',
        desc: 'Et stokastisk eksperiment med noeaktig to utfall: Suksess (sannsynlighet $p$) eller mislykkethet ($1-p$). Eksempler: Myntkast, klikk/ikke-klikk, maal/ikke-maal.',
      },
      binomial_formula: {
        title: 'Binomialformel',
        desc: 'Formelen $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ bestaar av tre deler: $\\binom{n}{k}$ teller arrangementene, $p^k$ er sannsynligheten for $k$ suksesser, $(1-p)^{n-k}$ for $n-k$ mislykketheter.',
      },
      expected_value: {
        title: 'Forventningsverdi og standardavvik',
        desc: 'Forventningsverdien $E(X) = n \\cdot p$ er middelverdien ved mange gjentakelser. Standardavviket $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ maaler det typiske avviket derfra.',
      },
    },
    examples: {
      coin_flips: {
        title: 'Myntkast: noeaktig 7 av 10 ganger mynt',
        context: 'Amir tester tilfeldighetsgeneratoren sin: Ved 10 rettferdige myntkast — hvor sannsynlig er noeaktig 7 ganger mynt?',
        step1: 'Bestem parametere: $n = 10$ kast, $p = 0{,}5$ (rettferdig mynt), soeakt: $k = 7$ ganger mynt.',
        step2: 'Beregn binomialkoeffisienten — paa hvor mange maater kan 7 mynt fordeles paa 10 kast?',
        step3: 'Sett inn i binomialformelen: Arrangementer $\\times$ suksesser $\\times$ mislykketheter:',
        step4: 'Regn ut — sannsynligheten er ca. 11{,}7%, altsaa heller usannsynlig:',
        amir_comment: 'Bare 11{,}7% — det viser: Selv med en rettferdig mynt er 7 av 10 ganger mynt ikke spesielt overraskende, men heller ikke det vanlige tilfellet. Tilfeldighetsgeneratoren min ser ut til aa vaere ok!',
      },
      quality_control: {
        title: 'Kvalitetskontroll i produksjonen',
        context: 'En fabrikk har en feilrate paa 2%. Amir beregner: Hvor sannsynlig er det at i et utvalg paa 20 stykker ikke en eneste er defekt?',
        step1: 'Parametere: $n = 20$ stykker, feilrate $p = 0{,}02$, soeakt: $k = 0$ defekte deler.',
        step2: 'Sett inn: $\\binom{20}{0} = 1$, og $0{,}02^0 = 1$ — bare mislykkethetene gjenstaar:',
        step3: 'Forenkle — det gjenstaar $0{,}98^{20}$:',
        step4: 'Resultat: Med ca. 66{,}8% sannsynlighet er ingen del defekt — slett ikke saa sikkert!',
        amir_comment: 'Bare to tredjedeler sjanse for null feil ved 2% feilrate! Det viser: Ogsaa smaa sannsynligheter summerer seg ved mange forsoek.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B-testing hos DataPulse',
        desc: 'Amir tester to versjoner av appen: Versjon A har en klikkrate paa 12%, versjon B paa 15%. Med binomialfordelingen beregner han om forskjellen er statistisk signifikant.',
      },
      medicine: {
        title: 'Medisinske studier',
        desc: 'Ved medikamenttester teller man: Hvor mange pasienter blir friske? Er helbredelsesraten signifikant bedre enn ved placebo? Binomialfordelingen gir svaret.',
      },
      surveys: {
        title: 'Meningsundersokelser og feiltoleranse',
        desc: 'Naar 52% stemmer "Ja" i en undersokelse — er det virkelig et flertall? Standardavviket $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ viser hvor bredt konfidensintervallet er.',
      },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Glemme binomialkoeffisienten: $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Fullstendig formel med $\\binom{n}{k}$',
        why: 'Uten $\\binom{n}{k}$ teller formelen bare EN bestemt rekkefoelge. Men suksessene kan forekomme paa forskjellige steder! Binomialkoeffisienten teller alle mulige arrangementer.',
        amir_warning: 'Forestill deg at du kaster 3 ganger og vil ha noeaktig 2 seksere. Det er 3 muligheter: 6-6-X, 6-X-6, X-6-6. Binomialkoeffisienten $\\binom{3}{2} = 3$ teller noeaktig det.',
      },
      variance_vs_sigma: {
        wrong: 'Forveksle varians og standardavvik',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — ikke glem roten!',
        why: 'Variansen er $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, standardavviket er $\\sigma = \\sqrt{\\text{Var}(X)}$. Uten rot har resultatet feil enhet og er altfor stort.',
      },
    },
  },

  '11-bedingte-wk': {
    story: {
      intro: 'DataPulse anbefaler sanger basert paa tidligere lytteadferd. Men Amir merker: Ikke enhver korrelasjon er like sterk. Den som lytter til rock, liker kanskje ogsa metal — men gjelder det ogsa omvendt? "Sannsynligheten for at noen liker rock GITT at de hoerer metal, er ikke det samme som omvendt", forklarer Prof. Nguyen. Velkommen til betinget sannsynlighet.',
      challenge: 'Amir maa forbedre anbefalingslogikken: Hvor sannsynlig er det at en bruker liker sjanger $A$, GITT at de hoerer sjanger $B$?',
      outro: 'Med Bayes\' setning kan Amir naa snu anbefalingsretningen: Fra "Den som hoerer metal, hoerer til 60% ogsaa rock" blir "Den som hoerer rock, hoerer til 35% ogsaa metal". DataPulse leverer naa betydelig mer presise anbefalinger.',
    },
    objectives: {
      conditional_prob: 'Beregne og tolke betingede sannsynligheter',
      bayes_theorem: 'Anvende Bayes\' setning for aa snu retningen paa en betinget sannsynlighet',
      independence: 'Sjekke stokastisk uavhengighet og skille den fra avhengighet',
      tree_diagrams: 'Bruke trediagrammer og firefeltstabell som hjelpemidler',
    },
    explanation: {
      intro: 'Den betingede sannsynligheten $P(A \\mid B)$ besvarer spoersmaalet: "Hvor sannsynlig er $A$ naar vi allerede vet at $B$ har inntruffet?" Kunnskapen om $B$ endrer sannsynligheten — utfallsrommet krymper til tilfellene der $B$ gjelder:',
      multiplication_rule: 'Multiplikasjonsregelen foelger direkte fra definisjonen: Naar du vil beregne sannsynligheten for "$A$ og $B$ samtidig", multipliserer du $P(B)$ med den betingede sannsynligheten $P(A \\mid B)$:',
      amir_tip: 'I anbefalingskoden min bruker jeg betingede sannsynligheter hele tiden: $P(\\text{like}_Y \\mid \\text{like}_X)$ — sannsynligheten for at en bruker liker sang $Y$, gitt at de liker sang $X$. Det er hjertet i enhver Collaborative Filter!',
      bayes: 'Bayes\' setning er magien: Den snur retningen. Naar du kjenner $P(B \\mid A)$ men trenger $P(A \\mid B)$, gir Bayes loesningen:',
      total_probability: 'For nevneren i Bayes\' setning trenger du ofte den totale sannsynligheten. Den deler opp $P(B)$ i alle mulige veier $B$ kan inntreffe paa:',
      independence: 'To hendelser er stokastisk uavhengige naar kunnskap om den ene ikke endrer sannsynligheten for den andre. Formelt: $P(A \\mid B) = P(A)$:',
    },
    concepts: {
      conditional_prob: {
        title: 'Betinget sannsynlighet',
        desc: '$P(A \\mid B)$ er sannsynligheten for $A$ under betingelsen $B$. Viktig: $P(A \\mid B) \\neq P(B \\mid A)$ — retningen teller!',
      },
      bayes: {
        title: 'Bayes\' setning',
        desc: 'Formelen for aa snu retningen: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ er prior (forhaandskunnskap), $P(A \\mid B)$ er posterior (oppdatert vurdering etter observasjon av $B$).',
      },
      independence: {
        title: 'Stokastisk uavhengighet',
        desc: '$A$ og $B$ er uavhengige naar $P(A \\cap B) = P(A) \\cdot P(B)$. Forsiktig: Uavhengighet er IKKE det samme som "ingen felles mengde" (disjunkt)!',
      },
    },
    examples: {
      medical_test: {
        title: 'Medisinsk test — Base Rate Fallacy',
        context: 'En sykdomstest er 99% korrekt. Sykdommen rammer 1% av befolkningen. Naar testen er positiv — hvor sannsynlig er man virkelig syk?',
        step1: 'Gitt: $P(K) = 0{,}01$ (sykdom), $P(+ \\mid K) = 0{,}99$ (sensitivitet), $P(+ \\mid \\bar{K}) = 0{,}05$ (falsk-positiv rate).',
        step2: 'Total sannsynlighet for et positivt resultat beregnes — begge veier (syk + frisk):',
        step3: 'Anvend Bayes\' setning — $P(K \\mid +)$ er soeakt:',
        step4: 'Resultat: Bare 16{,}7% sannsynlighet for aa vaere virkelig syk — til tross for 99% testnoeaktighet!',
        amir_comment: 'Det er Base Rate Fallacy! Testen er supernoeyaktig, men fordi sykdommen er saa sjelden ($P(K) = 1\\%$), er de fleste positive testene falsk-positive.',
      },
      spam_filter: {
        title: 'Spamfilter med Bayes',
        context: 'Amirs e-postfilter skal laere: Naar en e-post inneholder ordet "Gevinst" — er den spam?',
        step1: 'Gitte data: 30% av alle e-poster er spam, 80% av spam-e-postene inneholder "Gevinst", men ogsaa 10% av normale e-poster:',
        step2: 'Total sannsynlighet for at en e-post inneholder "Gevinst":',
        step3: 'Bayes: Hvor sannsynlig er spam naar "Gevinst" forekommer?',
        step4: 'Resultat: 77{,}4% — en e-post med "Gevinst" er med hoey sannsynlighet spam:',
        amir_comment: 'Noeaktig slik fungerer en Naive-Bayes-Classifier! Jo flere ord du legger til, desto mer presis blir filteret.',
      },
    },
    realworld: {
      recommendation: {
        title: 'Musikksnbefalinger hos DataPulse',
        desc: 'Collaborative Filtering baserer seg paa betingede sannsynligheter: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "Den som liker sang X, liker med hvilken sannsynlighet ogsaa sang Y?"',
      },
      weather: {
        title: 'Vaermelding',
        desc: 'Meteorologer oppdaterer prognosen sin stadig med Bayes: $P(\\text{Regn} \\mid \\text{Skyer, Trykk, Vind})$. Hver ny maaling forbedrer prognosen.',
      },
      fraud_detection: {
        title: 'Svindeloppdagelse',
        desc: 'Amirs betalingssystem gjenkjenner mistenkelige transaksjoner med Bayes: Naar en alarm utloeses — hvor sannsynlig er ekte svindel?',
      },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$ — retningen forvekslet',
        correct: 'Aa snu retningen gaar bare med Bayes!',
        why: '$P(A \\mid B)$ og $P(B \\mid A)$ er helt forskjellige verdier. Du trenger Bayes\' setning for aa snu retningen.',
        amir_warning: 'Denne feilen ser jeg i code reviews hele tiden! Noen beregner $P(\\text{click} \\mid \\text{bought})$ og bruker det som $P(\\text{bought} \\mid \\text{click})$. Bayes er obligatorisk!',
      },
      ignore_base_rate: {
        wrong: 'Ignorere basisraten (Base Rate Fallacy)',
        correct: 'Alltid ta hensyn til $P(A)$ — prior-sannsynligheten',
        why: 'En 99%-noeyaktig test hoeres imponerende ut, men naar sykdommen bare rammer 1%, er $P(K \\mid +) \\approx 16{,}7\\%$. Den lave basisraten dominerer resultatet.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn bygger backend for DataPulses nye funksjon: Finne lignende sanger. Men hvordan maaler man "likhet" mellom sanger naar hver sang beskrives av dusinvis av egenskaper? "Tenk paa hver sang som et punkt i rommet", sier Amir. "Jo naermere to punkter ligger, desto mer like er sangene." Velkommen til vektorenes verden.',
      challenge: 'Amir maa representere sangegenskaper som vektorer og beregne deres likhet — med skalarproduktet og vinkelen mellom vektorer.',
      outro: 'DataPulses anbefalingsmotor bruker naa Cosine Similarity: Jo mindre vinkelen mellom to sangvektorer, desto mer like er sangene. "I ML-verdenen er vektorer overalt — Word Embeddings, Feature Spaces, nevrale nettverk. Alt er lineaer algebra", sier Amir begeistret.',
    },
    objectives: {
      vectors_2d_3d: 'Notere vektorer i $\\mathbb{R}^2$ og $\\mathbb{R}^3$ som soeyler og tolke geometrisk',
      vector_operations: 'Beherske vektoraddisjon og skalarmultiplikasjon',
      scalar_product: 'Beregne skalarproduktet og tolke det geometrisk',
      angle_between_vectors: 'Bestemme vinkelen mellom to vektorer med cosinusformelen',
    },
    explanation: {
      intro: 'En vektor beskriver en forskyvning i rommet — eller mer generelt: en ordnet liste med tall. I $\\mathbb{R}^3$ har en vektor tre komponenter som du skriver som soeyle:',
      addition: 'Vektorer adderes komponentvis — hver rad for seg. Geometrisk legger du den andre vektoren i enden av den foerste (spiss-til-fot-metoden):',
      amir_tip: 'I Python-koden min er vektorer rett og slett numpy-arrays. Addisjonen $\\vec{a} + \\vec{b}$ utfoeres automatisk elementvis — noeaktig det samme som i matematikken!',
      scalar_product: 'Skalarproduktet (ogsaa: indre produkt) av to vektorer gir et enkelt tall — ingen vektor! Du multipliserer komponentene parvis og summerer alt. Resultatet forteller deg hvor sterkt vektorene "peker i samme retning":',
      length: 'Lengden (beloepet) av en vektor beregnes via Pythagoras\' setning — utvidet til tre dimensjoner:',
      angle: 'Den viktigste anvendelsen av skalarproduktet: Vinkelen mellom to vektorer. Denne vinkelen er i ML-verdenen kjent som "Cosine Similarity" — standardmaalet for likhet:',
    },
    concepts: {
      vector: {
        title: 'Vektor',
        desc: 'En ordnet liste med tall skrevet som soeyIe. I $\\mathbb{R}^2$ har en vektor 2 komponenter, i $\\mathbb{R}^3$ tre. I dataanalyse representerer en vektor et objekt med sine egenskaper.',
      },
      scalar_product: {
        title: 'Skalarprodukt',
        desc: 'To vektorer inn, ett tall ut: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometrisk gjelder: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Naar skalarproduktet er null, staar vektorene vinkelrett paa hverandre.',
      },
      vector_length: {
        title: 'Beloep av en vektor',
        desc: 'Lengden $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — generalisert Pythagoras. En vektor med beloep 1 kalles enhetsvektor.',
      },
    },
    examples: {
      force_addition: {
        title: 'Addere krefter som vektorer',
        context: 'To krefter virker paa et objekt — Amir beregner den resulterende totalkraften.',
        step1: 'De to kreftene gitt som 2D-vektorer:',
        step2: 'Adder komponentvis — hver rad for seg:',
        step3: 'Beregn beloepet av totalkraften (Pythagoras):',
        step4: 'Regn ut — totalkraften er ca. $6{,}32\\,\\text{N}$:',
        amir_comment: 'Det samme prinsippet bruker vi hos DataPulse: I stedet for krefter adderer vi featurevektorer.',
      },
      angle_vectors: {
        title: 'Vinkel mellom sangvektorer',
        context: 'Amir sammenligner to sanger: Sang A har featurevektoren $(1, 2, 3)$ og sang B $(4, -1, 2)$.',
        step1: 'Featurevektorene til de to sangene:',
        step2: 'Beregn skalarprodukt — multipliser komponentene parvis og summer:',
        step3: 'Beregn beloepene av begge vektorer:',
        step4: 'Anvend cosinusformelen — vinkelen er ca. $62{,}2°$:',
        amir_comment: 'En vinkel paa $62{,}2°$ betyr: Sangene er delvis like, men ikke ekstremt. Ved $0°$ ville de vaert identiske, ved $90°$ helt forskjellige.',
      },
    },
    realworld: {
      embeddings: {
        title: 'Word Embeddings og Song Embeddings',
        desc: 'I ML-verdenen representeres ord, sanger og bilder som hoey-dimensjonale vektorer (Embeddings). Cosine Similarity maaler deres likhet.',
      },
      navigation: {
        title: 'Navigasjon og robotikk',
        desc: 'Navigasjonssystemer og roboter bruker vektorer for posisjon og bevegelse. Vektoraddisjon beregner den nye posisjonen etter en bevegelse.',
      },
      game_physics: {
        title: 'Spillfysikk og simulasjoner',
        desc: 'I spill som Fortnite eller Minecraft beregnes fysikken med vektorer: $\\vec{v}_{\\text{ny}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$.',
      },
    },
    mistakes: {
      scalar_vs_cross: {
        wrong: 'Skalarproduktet gir en vektor',
        correct: 'Skalarproduktet gir et TALL ($\\in \\mathbb{R}$)',
        why: 'Ved skalarproduktet multipliserer du komponentvis og ADDERER — resultatet er et enkelt tall, ingen vektor.',
        amir_warning: 'I numpy: np.dot(a, b) gir et tall, np.cross(a, b) gir en vektor. Hvis likhetsscoren din ploetselig er et array i stedet for et tall, har du brukt feil produkt!',
      },
      length_sum: {
        wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — komponentene bare lagt sammen',
        correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — bruk Pythagoras!',
        why: 'Lengden av en vektor er den euklidske avstanden fra origo — og den foelger Pythagoras\' setning.',
      },
    },
  },
};
