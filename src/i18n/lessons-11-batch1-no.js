export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Amirs ML-modell for DataPulse leverer brukbare sanganbefalinger — men treningen tar evig tid. "Gradient Descent er i prinsippet ikke annet enn derivasjon", forklarer matematikkprofessoren hans. "Naar du forstaar hvordan derivasjonsreglene fungerer, forstaar du ogsaa hvorfor modellen laerer." Amir bestemmer seg for aa jobbe seg systematisk gjennom reglene.',
      challenge: 'Amir vil forsta hvordan ML-modellen internt deriverer tapsfunksjonen — til det trenger han potens-, sum-, produkt- og kjerneregelen.',
      outro: 'Amir har naa et solid fundament: Potensregelen for enkle ledd, sum- og faktorregelen for sammensatte uttrykk, produktregelen for multiplikasjoner og kjerneregelen for sammensatte funksjoner. "Naa forstaar jeg endelig hva PyTorch gjoer i bakgrunnen med Autograd", sier han fornoyd.',
    },
    objectives: {
      power_rule: 'Anvende potensregelen sikkert: derivere $f(x) = x^n$',
      constant_sum_rule: 'Beherske konstant- og sumregelen: derivere ledd for ledd og beholde faktorer',
      product_quotient_rule: 'Anvende produkt- og kvotientregelen korrekt',
      chain_rule: 'Bruke kjerneregelen sikkert ved sammensatte funksjoner',
    },
    explanation: {
      intro: 'Potensregelen er den viktigste basisregelen: Du trekker eksponenten ut som faktor og reduserer eksponenten med 1. Dermed deriverer du enhver potensfunksjon i en haandvending:',
      constant_factor: 'Konstante faktorer beholdes ved derivasjon, og ved summer kan du derivere ledd for ledd. Det gjoer sammensatte uttrykk oversiktlige:',
      amir_tip: 'I ML-koden min stikker summer og faktorer overalt — tapsfunksjonen er en enorm sum over alle datapunkter. At jeg faar derivere hvert ledd for seg gjoer Backpropagation i det hele tatt mulig!',
      product_rule: 'Naar to funksjoner multipliseres, faar du IKKE bare derivere begge for seg. I stedet gjelder produktregelen — "foerste ganger den deriverte av andre pluss andre ganger den deriverte av foerste":',
      quotient_rule: 'For broeker av funksjoner finnes kvotientregelen. Huskeregel: "NAT minus TAN gjennom N i annen" (N = nevner, T = teller, A = derivert):',
      chain_rule: 'Ved sammensatte funksjoner — altsaa en funksjon inni en funksjon — trenger du kjerneregelen. Du deriverer "utenfra og inn" og multipliserer med den indre deriverte:',
    },
    concepts: {
      power_rule: {
        title: 'Potensregelen',
        desc: 'Grunnregelen: Eksponenten blir faktor, eksponenten synker med 1. Gjelder ogsaa for negative og broekkeksponenter, f.eks. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Sum- og faktorregel',
        desc: 'Summer deriveres ledd for ledd, konstante faktorer beholdes. Dermed bryter du ethvert polynom ned i enkle enkelttledd.',
      },
      product_rule: {
        title: 'Produktregelen',
        desc: 'For produktet av to funksjoner: Foerste derivert ganger andre pluss foerste ganger andre derivert. Uunnvaerlig saa snart to variable uttrykk multipliseres.',
      },
      chain_rule: {
        title: 'Kjerneregelen',
        desc: 'Ytre funksjon deriveres, indre staar, deretter multipliseres med den indre deriverte. Hjertestykket i Backpropagation i nevrale nettverk.',
      },
    },
    examples: {
      power_sum: {
        title: 'Derivere polynom med potens- og sumregel',
        context: 'Amir forenkler et ledd fra kostnadsfunksjonen sin.',
        step1: 'Gitt er polynomet — vi deriverer hvert ledd for seg:',
        step2: 'Potensregelen paa hvert ledd: Eksponent som faktor, eksponent minus 1. Konstanten $-7$ faller bort:',
        step3: 'Sett sammen gir den deriverte funksjonen:',
        amir_comment: 'Noeaktig slik ser gradienten til mine polynomiale features ut. Hvert ledd bidrar til stigningen — og PyTorch gjoer dette automatisk for tusenvis av parametere samtidig.',
      },
      chain_rule: {
        title: 'Sammensatt funksjon med kjerneregelen',
        context: 'Amir deriverer en aktiveringsfunksjon som inneholder en sammensetning.',
        step1: 'Gitt er en sammensatt potensfunksjon:',
        step2: 'Oppdeling i ytre funksjon $f(u) = u^3$ og indre funksjon $g(x) = 2x^2 + 1$:',
        step3: 'Derivere ytre (potensregelen paa $u^3$), la indre staa, ganger indre deriverte ($4x$):',
        step4: 'Ryddet opp — faktor $4x$ trukket foran:',
        amir_comment: 'Kjerneregelen er literally Backpropagation! Hvert lag i Neural Network er en sammensatt funksjon, og kjerneregelen lenker gradientene fra lag til lag.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent i Machine Learning',
        desc: 'Enhver ML-modell minimerer en tapsfunksjon ved derivasjon. Gradienten viser retningen til den bratteste stigningen — vi gaar i motsatt retning for aa finne minimumet.',
      },
      marginal_cost: {
        title: 'Grensekostnader i oekonomien',
        desc: 'Den deriverte av kostnadsfunksjonen $K(x)$ gir grensekostnadene: Hva koster en produsert enhet til? Bedrifter bruker dette daglig til priskalkulasjon.',
      },
      acceleration: {
        title: 'Akselerasjon i fysikken',
        desc: 'Hastighet er den deriverte av veien, akselerasjon den deriverte av hastigheten. Mobilsensoren din maaler noeaktig det: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'Den deriverte av en konstant er konstanten selv',
        correct: 'Den deriverte av en konstant er alltid null',
        why: 'En konstant har ingen stigning — den endrer seg ikke. Tenk paa $f(x) = 5$: Det er en vannrett linje, altsaa er stigningen overalt 0. Det gjelder for ethvert tall uten $x$.',
        amir_warning: 'Bias-leddet i modellen min er en konstant — dets deriverte med hensyn paa $x$ er 0. Glemmer du det, faar gradienten en feil offset og treningen divergerer.',
      },
      chain_rule_forgotten: {
        wrong: 'Glemme den indre deriverte ved sammensatte funksjoner',
        correct: 'Alltid multiplisere med den indre deriverte',
        why: 'Ved $[(3x+1)^4]\'$ er det ikke nok bare aa trekke ned eksponenten. Du MAA multiplisere med den deriverte av det indre leddet $(3x+1)\' = 3$. Uten indre deriverte mangler faktoren 3.',
        amir_warning: 'Forestill deg at du glemmer den indre deriverte i ett lag av et Neural Network — gradienten ville vaere helt feil og modellen laerer toeys. Kjerneregelen er ikke valgfri!',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Amirs anbefalingsalgoritme spytter ut resultater — men er de virkelig optimale? "Du maa analysere tapsfunksjonen fullstendig", sier professoren. "Hvor er minimaene? Hvor er vendepunktene?" Amir innser: En fullstendig kurveanalyse viser ham om modellen virkelig har funnet det globale minimumet eller sitter fast i et lokalt minimum.',
      challenge: 'Amir analyserer tapslandskapet til modellen sin: Bestemme nullpunkter, ekstrema, vendepunkter og monotoni for en funksjon fullstendig.',
      outro: 'Amir kan naa fullstendig karakterisere enhver rasjonal funksjon: Finne nullpunkter, bestemme topp- og bunnpunkter, beregne vendepunkter og lese av monotoniadferd. "Naar jeg tegner tapslandskapet slik, ser jeg umiddelbart om optimalisatoren har landet i riktig dal", sier han.',
    },
    objectives: {
      zeros_extrema: 'Systematisk bestemme nullpunkter og ekstremalpunkter for en funksjon',
      inflection_points: 'Beregne vendepunkter og forsta deres betydning for kurveforleopet',
      monotonicity_symmetry: 'Analysere monotoniadferd og symmetri for en funksjon',
    },
    explanation: {
      intro: 'En kurveanalyse er den fullstendige analysen av en funksjon. Vi begynner med nullpunktene — stedene der grafen krysser $x$-aksen:',
      extrema: 'Ekstremalpunkter (topp- og bunnpunkter) finner du der den foerste deriverte er null. Men pass paa: Ikke ethvert nullpunkt av $f\'$ er automatisk et ekstremum! Du trenger den andre deriverte til bekreftelse:',
      amir_tip: 'Tapslandskapet til modellen min har mange lokale minima. Med kurveanalysen kan jeg sjekke om et kritisk punkt virkelig er et minimum — eller bare et sadelpunkt der optimalisatoren sitter fast.',
      inflection: 'Vendepunkter markerer overgangen mellom venstre- og hoeyrekrumning. Her endres krumningsadferden — den andre deriverte skifter fortegn:',
      monotonicity: 'Monotoniadferden forteller deg hvor funksjonen stiger og hvor den synker. Du leser det direkte av fortegnet til den foerste deriverte:',
    },
    concepts: {
      extrema: {
        title: 'Ekstremalpunkter (topp-/bunnpunkter)',
        desc: 'Noedvendig betingelse: $f\'(x_0) = 0$. Tilstrekkelig: $f\'\'(x_0) < 0$ gir toppunkt, $f\'\'(x_0) > 0$ gir bunnpunkt. Begge betingelsene sammen gjoer det sikkert.',
      },
      inflection: {
        title: 'Vendepunkter',
        desc: 'Der krumningen skifter: $f\'\'(x_0) = 0$ OG $f\'\'\'(x_0) \\neq 0$. Ved normalfordelinger markerer vendepunkter standardavviket.',
      },
      symmetry: {
        title: 'Symmetri',
        desc: 'Aksesymmetri til $y$-aksen ved $f(-x) = f(x)$ (bare partall-eksponenter). Punktsymmetri til origo ved $f(-x) = -f(x)$ (bare oddetall-eksponenter). Sparer regnearbeid!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Fullstendig kurveanalyse',
        context: 'Amir undersoeaker en kubisk funksjon — lignende tapsfunksjoner med flere ekstrema.',
        step1: 'Gitt er funksjonen — vi analyserer den fullstendig:',
        step2: 'Dann foerste deriverte og bestem nullpunkter (noedvendig betingelse for ekstrema):',
        step3: 'Evaluer andre deriverte i de kritiske punktene (tilstrekkelig betingelse): Negativ verdi = toppunkt, positiv verdi = bunnpunkt:',
        step4: 'Bestem vendepunkt via $f\'\' = 0$ og bekreft med tredje deriverte:',
        amir_comment: 'Noeaktig slik analyserer jeg tapslandskapet: Foerst finne kritiske punkter, deretter sjekke om det er minimum eller sadelpunkt. For hoey-dimensjonale funksjoner gjoer optimalisatoren min dette numerisk — men prinsippet er identisk.',
      },
      graph_properties: {
        title: 'Utnytte symmetri og ekstrema',
        context: 'En symmetrisk funksjon — halvparten av arbeidet faller bort paa grunn av symmetri.',
        step1: 'Gitt er en fjerdegradsfunksjon — vi sjekker foerst symmetri:',
        step2: 'Sett inn $-x$: Alle eksponenter er partall, altsaa $f(-x) = f(x)$ — aksesymmetrisk! Ekstrema kommer symmetrisk:',
        step3: 'Sett foerste deriverte lik null — paa grunn av symmetri holder det aa finne de positive loesningene:',
        step4: 'Beregn funksjonsverdier — takket vaere symmetri gjelder $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symmetri i data er gull verdt: Hvis jeg vet at tapsfunksjonen min er symmetrisk, trenger jeg bare aa gjennomsoke halvparten av parameterrommet. Det halverer treningstiden!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analysere datafordelinger',
        desc: 'Normalfordelingen har vendepunkter ved $\\mu \\pm \\sigma$. Kurveanalyse forteller deg hvor de fleste datapunktene konsentrerer seg og hvor spredningen begynner.',
      },
      profit_analysis: {
        title: 'Gevinstmaksimering',
        desc: 'Gevinstfunksjonen $G(x)$ har et maksimum — den optimale produksjonsmengden. Kurveanalyse viser noeaktig ved hvilken stykktall gevinsten er maksimal.',
      },
      population_growth: {
        title: 'Befolkningsvekst',
        desc: 'Vendepunktet til en vekstkurve markerer oeyeblikket da veksten avtar. Epidemiologer bruker noeaktig denne analysen for smittekurver.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Ethvert nullpunkt av $f\'$ er automatisk et ekstremalpunkt',
        correct: 'Nullpunkt av $f\'$ PLUSS fortegnsskifte eller $f\'\' \\neq 0$ maa sjekkes',
        why: 'Ved $f(x) = x^3$ er $f\'(0) = 0$, men intet ekstremum — det er et sadelpunkt! Du MAA sjekke den tilstrekkelige betingelsen ($f\'\' \\neq 0$ eller fortegnsskifte av $f\'$).',
        amir_warning: 'I hoeyere dimensjoner kalles slike punkter "Saddle Points" — optimalisatoren sitter fast og tror den har funnet et minimum. Alltid sjekke den andre deriverte!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ er nok for et vendepunkt',
        correct: '$f\'\'(x_0) = 0$ OG $f\'\'\'(x_0) \\neq 0$ bekrefter vendepunktet sammen',
        why: 'Ved $f(x) = x^4$ er $f\'\'(0) = 0$, men intet vendepunkt — krumningen skifter ikke! Den tredje deriverte maa vaere ulik null for aa garantere krumningsskiftet.',
        amir_warning: 'Samme felle som ved ekstrema: Den noedvendige betingelsen alene rekker aldri. Alltid sjekke den tilstrekkelige betingelsen — ellers stoler du paa et feil resultat.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse skal kjoere paa mobilen — men Amirs modell trenger for mye minne. "Du maa optimalisere nettverksarkitekturen", sier teamkollegaen Sara. "Maksimal noeaktighet med minimalt minneforbruk." Amir innser: Det er en klassisk optimaliseringsoppgave — optimalisere en stoerrelse mens en annen er begrenset.',
      challenge: 'Amir vil finne den beste modellarkitekturen: Maksimal prediksjonskvalitest under bibetingelsen med begrensede beregningsressurser.',
      outro: 'Amir har forstaat prinsippet: Sette opp maalfunksjon, sette inn bibetingelse, redusere til en variabel, derivere, sette lik null, sjekke. "Enten det er boeksdimensjoner eller modellparametere — skjemaet er alltid det samme", konstaterer han. Modellen passer naa paa 50 MB.',
    },
    objectives: {
      setup_equations: 'Sette opp maalfunksjon og bibetingelse fra en praktisk sammenheng',
      optimize_constraints: 'Lage en funksjon av en variabel ved aa sette inn bibetingelsen, og optimalisere',
      verify_extremum: 'Sjekke med den andre deriverte om det foreligger et maksimum eller minimum, og ta hensyn til randverdier',
    },
    explanation: {
      intro: 'Ved optimaliseringsoppgaver handler det alltid om det samme: En stoerrelse skal bli saa stor eller liten som mulig (maalfunksjon), mens en begrensning gjelder (bibetingelse):',
      strategy: 'Strategien er alltid lik: (1) Sette opp maalfunksjonen — hva skal optimaliseres? (2) Finne bibetingelsen — hvilken begrensning gjelder? (3) Loese bibetingelsen for en variabel og sette inn i maalfunksjonen. (4) Derivere, sette lik null, sjekke.',
      amir_tip: 'Hyperparameter-tuning er noeaktig en slik optimaliseringsoppgave: Jeg vil minimere valideringsfeilen (maalfunksjon), men GPU-minnet er begrenset (bibetingelse). Skjemaet fra matematikkundervisningen fungerer 1:1!',
      substitution: 'Etter innsetting av bibetingelsen avhenger maalfunksjonen bare av en variabel. Naa deriveres som vanlig og det kritiske punktet sjekkes:',
      domain_check: 'Ikke glem definisjonsomraadet! Ved reelle problemer er det ofte grenser (f.eks. $r > 0$ for en radius). Sammenlign funksjonsverdien i det kritiske punktet med randverdiene — noen ganger ligger optimumet paa randen.',
    },
    concepts: {
      target_function: {
        title: 'Maalfunksjon',
        desc: 'Stoerrelsen som skal optimaliseres — maksimal gevinst, minimal overflate, beste noeaktighet. Avhenger i utgangspunktet ofte av to variable.',
      },
      constraint: {
        title: 'Bibetingelse',
        desc: 'Begrensningen som gjelder — fast volum, begrenset budsjett, begrensede parametere. Gjoer det mulig aa eliminere en variabel og redusere maalfunksjonen til en variabel.',
      },
      boundary_check: {
        title: 'Randverdisjekk',
        desc: 'Optimumet kan ogsaa ligge paa randen av definisjonsomraadet. Sammenlign alltid $f(x_{opt})$ med funksjonsverdiene paa randene $f(a)$ og $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Boeks med minimalt materialforbruk',
        context: 'En sylindrisk boeks skal romme 330 ml — med minst mulig blikk.',
        step1: 'Bibetingelse: Volumet er fast. Loes for $h$ for aa eliminere en variabel:',
        step2: 'Sett opp maalfunksjonen (overflate) og sett inn $h$ — naa avhenger alt bare av $r$:',
        step3: 'Deriver, sett lik null og loes for $r$ — dette er den optimale radiusen:',
        step4: 'Sjekk andre deriverte: Positiv betyr minimum — vi har virkelig funnet den mest sparsommelige boeksen:',
        amir_comment: 'Det er noeaktig som modellkomprimering: Fast noeaktighet (bibetingelse), minimalt antall parametere (maalfunksjon). Jeg erstatter $r$ med "lagbredde" og $h$ med "dybde" — samme prinsipp!',
      },
      profit_max: {
        title: 'Maksimal gevinst',
        context: 'En startup vil finne den optimale prisen for sin abonnementsmodell.',
        step1: 'Sett opp gevinstfunksjonen: Inntekt minus kostnader — her allerede i en variabel:',
        step2: 'Sett deriverte lik null — det optimale antallet:',
        step3: 'Andre deriverte er negativ — altsaa et maksimum. Gevinsten blir virkelig maksimal her:',
        step4: 'Beregn maksimal gevinst ved innsetting:',
        amir_comment: 'Prisoptimalisering er en klassiker i Data Science. Hos DataPulse kunne vi beregne den optimale abonnementsnivaaet paa noeaktig samme maate — maksimere gevinst under betingelsen at brukere ikke hopper av.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Hyperparameter-optimalisering',
        desc: 'Laereraten $\\alpha$ i Gradient Descent maa velges optimalt: For stor = divergens, for liten = evig tregt. Den optimale $\\alpha$ minimerer valideringsfeilen.',
      },
      packaging: {
        title: 'Emballasjedesign',
        desc: 'Minimalt materialforbruk ved fast volum — noeaktig det loeser ingenioerer daglig. Enhver drikkeboeks, enhver kartong er resultatet av en optimaliseringsoppgave.',
      },
      solar_panel: {
        title: 'Solcellepanel-vinkling',
        desc: 'Helningsvinkelen paa et solcellepanel bestemmer energiutbyttet. Aa finne den optimale vinkelen er en optimaliseringsoppgave med solstanden som bibetingelse.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Derivere maalfunksjonen med to variable direkte',
        correct: 'Foerst sette inn bibetingelsen, deretter derivere',
        why: 'Med to variable kan du ikke bare derivere med hensyn paa $x$ — $y$ endrer seg med! Du MAA bruke bibetingelsen for aa uttrykke $y$ ved $x$. Foerst da avhenger alt av en variabel.',
        amir_warning: 'Det er som en ML-modell med for mange frie parametere: Uten Constraints intet fornuftig optimum. Bibetingelsen reduserer frihetsgradene — noeaktig som regularisering.',
      },
      no_boundary: {
        wrong: 'Anta at kritisk punkt er globalt optimum',
        correct: 'Sammenligne kritisk punkt med randverdier',
        why: 'Paa et begrenset intervall $[a, b]$ kan optimumet ligge paa randen! $f\'(x_0) = 0$ gir bare lokale kandidater. Du maa sammenligne $f(x_0)$, $f(a)$ og $f(b)$.',
        amir_warning: 'I praksis har enhver parameter et tillatt omraade. Laereraten min kan ikke vaere negativ, batchstoerrelsen ikke overstige GPU-minnet. Sjekke randverdier er obligatorisk!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse kjoerer — men Amir trenger en ny metrikk: Hvor mange sanger lytter brukerne paa totalt per uke? Han har lytteraten $r(t)$ som funksjon av tid, men han trenger totaltallet. "Rate ganger tid gir mengde — men raten endrer seg hele tiden", grubler Amir. Kameraten Kai flirer: "Hoeres ut som et integral."',
      challenge: 'Amir vil fra den tidsavhengige lytteraten $r(t)$ beregne det totale antallet hoerte sanger — det foerer ham til integralregningen.',
      outro: 'Amir kan naa danne stammfunksjoner, beregne bestemte integraler og bestemme arealer mellom kurver. "Integrasjon er det omvendte av derivasjon — og i praksis summerer jeg dermed opp kontinuerlige data", oppsummerer han. Hans Weekly-Listening-metrikk staar.',
    },
    objectives: {
      antiderivative: 'Danne stammfunksjoner med potensregelen baklengs og forsta integrasjonskonstanten $C$',
      definite_integral: 'Beregne bestemte integraler med hovedsettningen: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Forsta hovedsettningen i analyse og anvende den ved arealberegninger',
    },
    explanation: {
      intro: 'Integrasjon er det omvendte av derivasjon: Naar $F\'(x) = f(x)$, da er $F(x)$ en stammfunksjon av $f(x)$. Den generelle stammfunksjonen inneholder alltid konstanten $C$:',
      power_rule_integral: 'Potensregelen baklengs: OEk eksponenten med 1 og del paa den nye eksponenten. Det fungerer for alle $n \\neq -1$:',
      amir_tip: 'Integrasjon er som aggregering i databaser: Derivasjon gir den momentane endringsraten, integrasjon summerer alt opp. Naar jeg kjenner nedlastingene per time, gir integralet det totale antall nedlastinger over en tidsperiode.',
      definite_integral: 'Det bestemte integralet beregner "totaleffekten" mellom to grenser. Hovedsettningen gjoer det enkelt: Stammfunksjon i ovre grense minus stammfunksjon i nedre grense:',
      area_interpretation: 'Geometrisk er det bestemte integralet arealet mellom kurve og $x$-akse. OBS: Arealer under $x$-aksen teller negativt! For det faktiske arealet trenger du absoluttverdien:',
    },
    concepts: {
      antiderivative: {
        title: 'Stammfunksjon',
        desc: 'En funksjon $F(x)$ med $F\'(x) = f(x)$. Konstanten $+C$ er viktig fordi ulike stammfunksjoner bare skiller seg med en konstant.',
      },
      definite_integral: {
        title: 'Bestemt integral',
        desc: 'Beregner det fortegnsbestemte arealet mellom $f(x)$ og $x$-aksen fra $a$ til $b$. OEvre grense innsatt minus nedre grense innsatt.',
      },
      fundamental_theorem: {
        title: 'Analysens hovedsetning',
        desc: 'Forbinder derivasjon og integrasjon: Derivere og integrere er inverse operasjoner. Det bestemte integralet kan beregnes via stammfunksjonen.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Areal mellom parabel og $x$-akse',
        context: 'Amir visualiserer fordelingen av lyttetid som areal under en kurve.',
        step1: 'Bestem funksjon og nullpunkter — det er vare integrasjonsgrenser:',
        step2: 'Dann stammfunksjon med potensregelen baklengs:',
        step3: 'Beregn bestemt integral: Sett inn ovre grense minus nedre grense:',
        step4: 'Integralet er negativt fordi parabelen ligger under $x$-aksen. For arealet ta absoluttverdien:',
        amir_comment: 'Negative integraler gir mening i dataanalyse: Naar $f(x)$ er avviket fra gjennomsnittet, viser et negativt integral at verdiene totalt sett laa under snittet.',
      },
      distance_from_velocity: {
        title: 'Beregne strekning fra hastighet',
        context: 'Hvor langt kjoerer en selvkjoerende bil paa 4 sekunder?',
        step1: 'Gitt er hastighetsfunksjonen:',
        step2: 'Totalstrekningen er integralet av hastigheten over tiden:',
        step3: 'Dann stammfunksjon — integrer hvert ledd for seg:',
        step4: 'Sett inn grenser og beregn differansen:',
        amir_comment: 'Sensordata kommer inn som rate — hastighet, datagjennomstroemning, requests per sekund. Integralet gjoer det til totalmengde. Dashboardet mitt viser noeaktig det: $\\int_0^T r(t)\\,dt$ = totalstroemmer.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Dataaggregering over tid',
        desc: 'Naar dataraten $r(t)$ er kjent, gir integralet totalmengden over en tidsperiode. Slik beregner stroemmetjenester maanedlige lytteminutter fra sekund-for-sekund-data.',
      },
      energy_consumption: {
        title: 'Energiforbruk',
        desc: 'Effekt $P(t)$ i watt ganger tid gir energi i joule — men bare ved konstant effekt. Ved svingene effekt trenger du integralet: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Sannsynligheter',
        desc: 'Sannsynligheten for at en stokastisk variabel ligger mellom $a$ og $b$ er arealet under tetthetsfunksjonen — altsaa et bestemt integral. Grunnlaget for all statistikk.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Glemme integrasjonskonstanten $C$ ved ubestemte integraler',
        correct: 'Alltid legge til $+ C$ ved ubestemt integral',
        why: 'Naar $F\'(x) = 2x$, da er baade $x^2$ og $x^2 + 7$ en stammfunksjon. $+C$ representerer alle mulige stammfunksjoner. Ved bestemte integraler forkortes $C$ bort — der kan du utelate den.',
        amir_warning: 'I praksis er $C$ initialbetingelsen: Hvor mange sanger hadde brukeren allerede hoert foer vi begynte aa maale? Uten $C$ mangler startverdien, og beregningen starter paa null i stedet for den ekte verdien.',
      },
      negative_area: {
        wrong: 'Tolke integral direkte som areal, selv naar det er negativt',
        correct: 'For ekte arealer ta absoluttverdien av integralverdiene',
        why: 'Integralet $\\int_a^b f(x)\\,dx$ kan vaere negativt naar $f(x) < 0$. Det er korrekt som fortegnsbestemt areal. Trenger du det geometriske arealet, maa du integrere $|f(x)|$ eller beregne delomraadene separat.',
        amir_warning: 'Forestill deg at du beregner total lyttetid og faar et negativt resultat — det ville aapenbart vaere feil. Ved arealproblemer alltid sjekke om funksjonen skifter fortegn, og beregne delintervaller separat!',
      },
    },
  },
};
