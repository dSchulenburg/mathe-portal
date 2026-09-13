export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Amirs ML-modell for DataPulse leverer brukbare sanganbefalinger — men treningen tar evig tid. "Gradient Descent er i prinsippet ikke annet enn derivasjon", forklarer matematikkprofessoren hans. "Når du forstår hvordan derivasjonsreglene fungerer, forstår du også hvorfor modellen lærer." Amir bestemmer seg for å jobbe seg systematisk gjennom reglene.',
      challenge: 'Amir vil forstå hvordan ML-modellen internt deriverer tapsfunksjonen — til det trenger han potens-, sum-, produkt- og kjerneregelen.',
      outro: 'Amir har nå et solid fundament: Potensregelen for enkle ledd, sum- og faktorregelen for sammensatte uttrykk, produktregelen for multiplikasjoner og kjerneregelen for sammensatte funksjoner. "Nå forstår jeg endelig hva PyTorch gjør i bakgrunnen med Autograd", sier han fornøyd.',
    },
    objectives: {
      power_rule: 'Anvende potensregelen sikkert: derivere $f(x) = x^n$',
      constant_sum_rule: 'Beherske konstant- og sumregelen: derivere ledd for ledd og beholde faktorer',
      product_quotient_rule: 'Anvende produkt- og kvotientregelen korrekt',
      chain_rule: 'Bruke kjerneregelen sikkert ved sammensatte funksjoner',
    },
    explanation: {
      intro: 'Potensregelen er den viktigste basisregelen: Du trekker eksponenten ut som faktor og reduserer eksponenten med 1. Dermed deriverer du enhver potensfunksjon i en håndvending:',
      constant_factor: 'Konstante faktorer beholdes ved derivasjon, og ved summer kan du derivere ledd for ledd. Det gjør sammensatte uttrykk oversiktlige:',
      amir_tip: 'I ML-koden min stikker summer og faktorer overalt — tapsfunksjonen er en enorm sum over alle datapunkter. At jeg får derivere hvert ledd for seg gjør Backpropagation i det hele tatt mulig!',
      product_rule: 'Når to funksjoner multipliseres, får du IKKE bare derivere begge for seg. I stedet gjelder produktregelen — "første ganger den deriverte av andre pluss andre ganger den deriverte av første":',
      quotient_rule: 'For brøker av funksjoner finnes kvotientregelen. Huskeregel: "NAT minus TAN gjennom N i annen" (N = nevner, T = teller, A = derivert):',
      chain_rule: 'Ved sammensatte funksjoner — altså en funksjon inni en funksjon — trenger du kjerneregelen. Du deriverer "utenfra og inn" og multipliserer med den indre deriverte:',
    },
    concepts: {
      power_rule: {
        title: 'Potensregelen',
        desc: 'Grunnregelen: Eksponenten blir faktor, eksponenten synker med 1. Gjelder også for negative og brøkeksponenter, f.eks. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Sum- og faktorregel',
        desc: 'Summer deriveres ledd for ledd, konstante faktorer beholdes. Dermed bryter du ethvert polynom ned i enkle enkeltledd.',
      },
      product_rule: {
        title: 'Produktregelen',
        desc: 'For produktet av to funksjoner: Første derivert ganger andre pluss første ganger andre derivert. Uunnværlig så snart to variable uttrykk multipliseres.',
      },
      quotient_rule: {
        title: 'Kvotientregelen',
        desc: 'For brøker: Nevner ganger den deriverte av telleren, minus teller ganger den deriverte av nevneren, delt på nevneren i annen. Minuset er forskjellen fra produktregelen — og den vanligste feilkilden. Nødvendig overalt der noe står "per" noe annet: stykkostnader, hastighet, konsentrasjon.',
      },
      chain_rule: {
        title: 'Kjerneregelen',
        desc: 'Ytre funksjon deriveres, indre står, deretter multipliseres med den indre deriverte. Hjertestykket i Backpropagation i nevrale nettverk.',
      },
    },
    examples: {
      power_sum: {
        title: 'Derivere polynom med potens- og sumregel',
        context: 'Amir forenkler et ledd fra kostnadsfunksjonen sin.',
        step1: 'Gitt er polynomet — vi deriverer hvert ledd for seg:',
        step2: 'Potensregelen på hvert ledd: Eksponent som faktor, eksponent minus 1. Konstanten $-7$ faller bort:',
        step3: 'Satt sammen gir det den deriverte funksjonen:',
        amir_comment: 'Nøyaktig slik ser gradienten til mine polynomiale features ut. Hvert ledd bidrar til stigningen — og PyTorch gjør dette automatisk for tusenvis av parametere samtidig.',
      },
      quotient_rule: {
        title: 'Derivere en rasjonal funksjon med kvotientregelen',
        context: 'Amir måler hvor mange forespørsler serveren hans klarer per sekund som går — en størrelse per en annen, altså en brøk.',
        step1: 'Først navngir du teller og nevner. Hopper du over det, bytter du dem om senere:',
        step2: 'Deriver begge hver for seg — det er den enkle delen:',
        step3: 'Sett nå inn: Nevner ganger den deriverte av telleren, minus teller ganger den deriverte av nevneren, alt delt på $v^2$:',
        step4: 'Multipliser ut og trekk sammen. Nevneren blir stående som kvadrat, den multipliseres ikke ut:',
        amir_comment: 'Viktig: Nevneren forblir $(x-1)^2$. Før multipliserte jeg den alltid pliktoppfyllende ut og ødela dermed muligheten til å forkorte. I kurveanalysen vil du kunne se nullpunktene til nevneren — som faktor, ikke som polynom.',
      },
      chain_rule: {
        title: 'Sammensatt funksjon med kjerneregelen',
        context: 'Amir deriverer en aktiveringsfunksjon som inneholder en sammensetning.',
        step1: 'Gitt er en sammensatt potensfunksjon:',
        step2: 'Oppdeling i ytre funksjon $f(u) = u^3$ og indre funksjon $g(x) = 2x^2 + 1$:',
        step3: 'Derivere ytre (potensregelen på $u^3$), la indre stå, ganger indre deriverte ($4x$):',
        step4: 'Ryddet opp — faktor $4x$ trukket foran:',
        amir_comment: 'Kjerneregelen er literally Backpropagation! Hvert lag i Neural Network er en sammensatt funksjon, og kjerneregelen lenker gradientene fra lag til lag.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent i Machine Learning',
        desc: 'Enhver ML-modell minimerer en tapsfunksjon ved derivasjon. Gradienten viser retningen til den bratteste stigningen — vi går i motsatt retning for å finne minimumet.',
      },
      marginal_cost: {
        title: 'Grensekostnader i økonomien',
        desc: 'Den deriverte av kostnadsfunksjonen $K(x)$ gir grensekostnadene: Hva koster en produsert enhet til? Bedrifter bruker dette daglig til priskalkulasjon.',
      },
      acceleration: {
        title: 'Akselerasjon i fysikken',
        desc: 'Hastighet er den deriverte av veien, akselerasjon den deriverte av hastigheten. Mobilsensoren din måler nøyaktig det: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'Den deriverte av en konstant er konstanten selv',
        correct: 'Den deriverte av en konstant er alltid null',
        why: 'En konstant har ingen stigning — den endrer seg ikke. Tenk på $f(x) = 5$: Det er en vannrett linje, altså er stigningen overalt 0. Det gjelder for ethvert tall uten $x$.',
        amir_warning: 'Bias-leddet i modellen min er en konstant — dets deriverte med hensyn på $x$ er 0. Glemmer du det, får gradienten en feil offset og treningen divergerer.',
      },
      chain_rule_forgotten: {
        wrong: 'Glemme den indre deriverte ved sammensatte funksjoner',
        correct: 'Alltid multiplisere med den indre deriverte',
        why: 'Ved $[(3x+1)^4]\'$ er det ikke nok bare å trekke ned eksponenten. Du MÅ multiplisere med den deriverte av det indre leddet $(3x+1)\' = 3$. Uten indre deriverte mangler faktoren 3.',
        amir_warning: 'Forestill deg at du glemmer den indre deriverte i ett lag av et Neural Network — gradienten ville vært helt feil og modellen lærer tøys. Kjerneregelen er ikke valgfri!',
      },
      quotient_sign: {
        wrong: 'Telleren i kvotientregelen byttet om: $u \\cdot v\' - u\' \\cdot v$',
        correct: 'Nevner ganger den deriverte av telleren først: $u\' \\cdot v - u \\cdot v\'$',
        why: 'Produktregelen er symmetrisk — du kan bytte om de to leddene, resultatet blir det samme. I kvotientregelen står det et minus, og dermed er rekkefølgen fast. Bytter du dem om, får du nøyaktig det negative av den riktige deriverte. Det lumske er: Uttrykket ser plausibelt ut, du regner korrekt videre, og likevel er hvert fortegn feil til slutt. Et toppunkt blir til et bunnpunkt.',
        amir_warning: 'Gjør en prøve på et enkelt sted. For $f(x) = \\frac{x}{x+1}$ er funksjonen voksende overalt, så $f\'$ må være positiv. Får du noe negativt, har du byttet om telleren — det koster deg ti sekunder og redder hele oppgaven.',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Amirs anbefalingsalgoritme spytter ut resultater — men er de virkelig optimale? "Du må analysere tapsfunksjonen fullstendig", sier professoren. "Hvor er minimaene? Hvor er vendepunktene?" Amir innser: En fullstendig kurveanalyse viser ham om modellen virkelig har funnet det globale minimumet eller sitter fast i et lokalt minimum.',
      challenge: 'Amir analyserer tapslandskapet til modellen sin: Bestemme nullpunkter, ekstrema, vendepunkter og monotoni for en funksjon fullstendig.',
      outro: 'Amir kan nå fullstendig karakterisere enhver rasjonal funksjon: Finne nullpunkter, bestemme topp- og bunnpunkter, beregne vendepunkter og lese av monotoniadferd. "Når jeg tegner tapslandskapet slik, ser jeg umiddelbart om optimalisatoren har landet i riktig dal", sier han.',
    },
    objectives: {
      zeros_extrema: 'Systematisk bestemme nullpunkter og ekstremalpunkter for en funksjon',
      inflection_points: 'Beregne vendepunkter og forstå deres betydning for kurveforløpet',
      monotonicity_symmetry: 'Analysere monotoniadferd og symmetri for en funksjon',
    },
    explanation: {
      intro: 'En kurveanalyse er den fullstendige analysen av en funksjon. Vi begynner med nullpunktene — stedene der grafen krysser $x$-aksen:',
      extrema: 'Ekstremalpunkter (topp- og bunnpunkter) finner du der den første deriverte er null. Men pass på: Ikke ethvert nullpunkt av $f\'$ er automatisk et ekstremum! Du trenger den andre deriverte til bekreftelse:',
      amir_tip: 'Tapslandskapet til modellen min har mange lokale minima. Med kurveanalysen kan jeg sjekke om et kritisk punkt virkelig er et minimum — eller bare et sadelpunkt der optimalisatoren sitter fast.',
      inflection: 'Vendepunkter markerer overgangen mellom venstre- og høyrekrumning. Her endres krumningsadferden — den andre deriverte skifter fortegn:',
      monotonicity: 'Monotoniadferden forteller deg hvor funksjonen stiger og hvor den synker. Du leser det direkte av fortegnet til den første deriverte:',
    },
    concepts: {
      extrema: {
        title: 'Ekstremalpunkter (topp-/bunnpunkter)',
        desc: 'Nødvendig betingelse: $f\'(x_0) = 0$. Tilstrekkelig: $f\'\'(x_0) < 0$ gir toppunkt, $f\'\'(x_0) > 0$ gir bunnpunkt. Begge betingelsene sammen gjør det sikkert.',
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
        context: 'Amir undersøker en kubisk funksjon — lignende tapsfunksjoner med flere ekstrema.',
        step1: 'Gitt er funksjonen — vi analyserer den fullstendig:',
        step2: 'Dann første deriverte og bestem nullpunkter (nødvendig betingelse for ekstrema):',
        step3: 'Evaluer andre deriverte i de kritiske punktene (tilstrekkelig betingelse): Negativ verdi = toppunkt, positiv verdi = bunnpunkt:',
        step4: 'Bestem vendepunkt via $f\'\' = 0$ og bekreft med tredje deriverte:',
        amir_comment: 'Nøyaktig slik analyserer jeg tapslandskapet: Først finne kritiske punkter, deretter sjekke om det er minimum eller sadelpunkt. For høy-dimensjonale funksjoner gjør optimalisatoren min dette numerisk — men prinsippet er identisk.',
      },
      graph_properties: {
        title: 'Utnytte symmetri og ekstrema',
        context: 'En symmetrisk funksjon — halvparten av arbeidet faller bort på grunn av symmetri.',
        step1: 'Gitt er en fjerdegradsfunksjon — vi sjekker først symmetri:',
        step2: 'Sett inn $-x$: Alle eksponenter er partall, altså $f(-x) = f(x)$ — aksesymmetrisk! Ekstrema kommer symmetrisk:',
        step3: 'Sett første deriverte lik null — på grunn av symmetri holder det å finne de positive løsningene:',
        step4: 'Beregn funksjonsverdier — takket være symmetri gjelder $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symmetri i data er gull verdt: Hvis jeg vet at tapsfunksjonen min er symmetrisk, trenger jeg bare å gjennomsøke halvparten av parameterrommet. Det halverer treningstiden!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analysere datafordelinger',
        desc: 'Normalfordelingen har vendepunkter ved $\\mu \\pm \\sigma$. Kurveanalyse forteller deg hvor de fleste datapunktene konsentrerer seg og hvor spredningen begynner.',
      },
      profit_analysis: {
        title: 'Gevinstmaksimering',
        desc: 'Gevinstfunksjonen $G(x)$ har et maksimum — den optimale produksjonsmengden. Kurveanalyse viser nøyaktig ved hvilket stykktall gevinsten er maksimal.',
      },
      population_growth: {
        title: 'Befolkningsvekst',
        desc: 'Vendepunktet til en vekstkurve markerer øyeblikket da veksten avtar. Epidemiologer bruker nøyaktig denne analysen for smittekurver.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Ethvert nullpunkt av $f\'$ er automatisk et ekstremalpunkt',
        correct: 'Nullpunkt av $f\'$ PLUSS fortegnsskifte eller $f\'\' \\neq 0$ må sjekkes',
        why: 'Ved $f(x) = x^3$ er $f\'(0) = 0$, men intet ekstremum — det er et sadelpunkt! Du MÅ sjekke den tilstrekkelige betingelsen ($f\'\' \\neq 0$ eller fortegnsskifte av $f\'$).',
        amir_warning: 'I høyere dimensjoner kalles slike punkter "Saddle Points" — optimalisatoren sitter fast og tror den har funnet et minimum. Alltid sjekke den andre deriverte!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ er nok for et vendepunkt',
        correct: '$f\'\'(x_0) = 0$ OG $f\'\'\'(x_0) \\neq 0$ bekrefter vendepunktet sammen',
        why: 'Ved $f(x) = x^4$ er $f\'\'(0) = 0$, men intet vendepunkt — krumningen skifter ikke! Den tredje deriverte må være ulik null for å garantere krumningsskiftet.',
        amir_warning: 'Samme felle som ved ekstrema: Den nødvendige betingelsen alene rekker aldri. Alltid sjekke den tilstrekkelige betingelsen — ellers stoler du på et feil resultat.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse skal kjøre på mobilen — men Amirs modell trenger for mye minne. "Du må optimalisere nettverksarkitekturen", sier teamkollegaen Sara. "Maksimal nøyaktighet med minimalt minneforbruk." Amir innser: Det er en klassisk optimaliseringsoppgave — optimalisere en størrelse mens en annen er begrenset.',
      challenge: 'Amir vil finne den beste modellarkitekturen: Maksimal prediksjonskvalitet under bibetingelsen med begrensede beregningsressurser.',
      outro: 'Amir har forstått prinsippet: Sette opp målfunksjon, sette inn bibetingelse, redusere til én variabel, derivere, sette lik null, sjekke. "Enten det er boksdimensjoner eller modellparametere — skjemaet er alltid det samme", konstaterer han. Modellen passer nå på 50 MB.',
    },
    objectives: {
      setup_equations: 'Sette opp målfunksjon og bibetingelse fra en praktisk sammenheng',
      optimize_constraints: 'Lage en funksjon av én variabel ved å sette inn bibetingelsen, og optimalisere',
      verify_extremum: 'Sjekke med den andre deriverte om det foreligger et maksimum eller minimum, og ta hensyn til randverdier',
    },
    explanation: {
      intro: 'Ved optimaliseringsoppgaver handler det alltid om det samme: En størrelse skal bli så stor eller liten som mulig (målfunksjon), mens en begrensning gjelder (bibetingelse):',
      strategy: 'Strategien er alltid lik: (1) Sette opp målfunksjonen — hva skal optimaliseres? (2) Finne bibetingelsen — hvilken begrensning gjelder? (3) Løse bibetingelsen for én variabel og sette inn i målfunksjonen. (4) Derivere, sette lik null, sjekke.',
      amir_tip: 'Hyperparameter-tuning er nøyaktig en slik optimaliseringsoppgave: Jeg vil minimere valideringsfeilen (målfunksjon), men GPU-minnet er begrenset (bibetingelse). Skjemaet fra matematikkundervisningen fungerer 1:1!',
      substitution: 'Etter innsetting av bibetingelsen avhenger målfunksjonen bare av én variabel. Nå deriveres som vanlig og det kritiske punktet sjekkes:',
      domain_check: 'Ikke glem definisjonsområdet! Ved reelle problemer er det ofte grenser (f.eks. $r > 0$ for en radius). Sammenlign funksjonsverdien i det kritiske punktet med randverdiene — noen ganger ligger optimumet på randen.',
    },
    concepts: {
      target_function: {
        title: 'Målfunksjon',
        desc: 'Størrelsen som skal optimaliseres — maksimal gevinst, minimal overflate, beste nøyaktighet. Avhenger i utgangspunktet ofte av to variable.',
      },
      constraint: {
        title: 'Bibetingelse',
        desc: 'Begrensningen som gjelder — fast volum, begrenset budsjett, begrensede parametere. Gjør det mulig å eliminere en variabel og redusere målfunksjonen til én variabel.',
      },
      boundary_check: {
        title: 'Randverdisjekk',
        desc: 'Optimumet kan også ligge på randen av definisjonsområdet. Sammenlign alltid $f(x_{opt})$ med funksjonsverdiene på randene $f(a)$ og $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Boks med minimalt materialforbruk',
        context: 'En sylindrisk boks skal romme 330 ml — med minst mulig blikk.',
        step1: 'Bibetingelse: Volumet er fast. Løs for $h$ for å eliminere en variabel:',
        step2: 'Sett opp målfunksjonen (overflate) og sett inn $h$ — nå avhenger alt bare av $r$:',
        step3: 'Deriver, sett lik null og løs for $r$ — dette er den optimale radiusen:',
        step4: 'Sjekk andre deriverte: Positiv betyr minimum — vi har virkelig funnet den mest sparsommelige boksen:',
        amir_comment: 'Det er nøyaktig som modellkomprimering: Fast nøyaktighet (bibetingelse), minimalt antall parametere (målfunksjon). Jeg erstatter $r$ med "lagbredde" og $h$ med "dybde" — samme prinsipp!',
      },
      profit_max: {
        title: 'Maksimal gevinst',
        context: 'En startup vil finne den optimale prisen for sin abonnementsmodell.',
        step1: 'Sett opp gevinstfunksjonen: Inntekt minus kostnader — her allerede i én variabel:',
        step2: 'Sett deriverte lik null — det optimale antallet:',
        step3: 'Andre deriverte er negativ — altså et maksimum. Gevinsten blir virkelig maksimal her:',
        step4: 'Beregn maksimal gevinst ved innsetting:',
        amir_comment: 'Prisoptimalisering er en klassiker i Data Science. Hos DataPulse kunne vi beregne det optimale abonnementsnivået på nøyaktig samme måte — maksimere gevinst under betingelsen at brukere ikke hopper av.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Hyperparameter-optimalisering',
        desc: 'Læreraten $\\alpha$ i Gradient Descent må velges optimalt: For stor = divergens, for liten = evig tregt. Den optimale $\\alpha$ minimerer valideringsfeilen.',
      },
      packaging: {
        title: 'Emballasjedesign',
        desc: 'Minimalt materialforbruk ved fast volum — nøyaktig det løser ingeniører daglig. Enhver drikkeboks, enhver kartong er resultatet av en optimaliseringsoppgave.',
      },
      solar_panel: {
        title: 'Solcellepanel-vinkling',
        desc: 'Helningsvinkelen på et solcellepanel bestemmer energiutbyttet. Å finne den optimale vinkelen er en optimaliseringsoppgave med solstanden som bibetingelse.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Derivere målfunksjonen med to variable direkte',
        correct: 'Først sette inn bibetingelsen, deretter derivere',
        why: 'Med to variable kan du ikke bare derivere med hensyn på $x$ — $y$ endrer seg med! Du MÅ bruke bibetingelsen for å uttrykke $y$ ved $x$. Først da avhenger alt av én variabel.',
        amir_warning: 'Det er som en ML-modell med for mange frie parametere: Uten Constraints intet fornuftig optimum. Bibetingelsen reduserer frihetsgradene — nøyaktig som regularisering.',
      },
      no_boundary: {
        wrong: 'Anta at kritisk punkt er globalt optimum',
        correct: 'Sammenligne kritisk punkt med randverdier',
        why: 'På et begrenset intervall $[a, b]$ kan optimumet ligge på randen! $f\'(x_0) = 0$ gir bare lokale kandidater. Du må sammenligne $f(x_0)$, $f(a)$ og $f(b)$.',
        amir_warning: 'I praksis har enhver parameter et tillatt område. Læreraten min kan ikke være negativ, batchstørrelsen ikke overstige GPU-minnet. Sjekke randverdier er obligatorisk!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse kjører — men Amir trenger en ny metrikk: Hvor mange sanger lytter brukerne på totalt per uke? Han har lytteraten $r(t)$ som funksjon av tid, men han trenger totaltallet. "Rate ganger tid gir mengde — men raten endrer seg hele tiden", grubler Amir. Kameraten Kai flirer: "Høres ut som et integral."',
      challenge: 'Amir vil fra den tidsavhengige lytteraten $r(t)$ beregne det totale antallet hørte sanger — det fører ham til integralregningen.',
      outro: 'Amir kan nå danne stamfunksjoner, beregne bestemte integraler og bestemme arealer mellom kurver. "Integrasjon er det omvendte av derivasjon — og i praksis summerer jeg dermed opp kontinuerlige data", oppsummerer han. Hans Weekly-Listening-metrikk står.',
    },
    objectives: {
      antiderivative: 'Danne stamfunksjoner med potensregelen baklengs og forstå integrasjonskonstanten $C$',
      definite_integral: 'Beregne bestemte integraler med hovedsetningen: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Forstå hovedsetningen i analyse og anvende den ved arealberegninger',
    },
    explanation: {
      intro: 'Integrasjon er det omvendte av derivasjon: Når $F\'(x) = f(x)$, da er $F(x)$ en stamfunksjon av $f(x)$. Den generelle stamfunksjonen inneholder alltid konstanten $C$:',
      power_rule_integral: 'Potensregelen baklengs: Øk eksponenten med 1 og del på den nye eksponenten. Det fungerer for alle $n \\neq -1$:',
      amir_tip: 'Integrasjon er som aggregering i databaser: Derivasjon gir den momentane endringsraten, integrasjon summerer alt opp. Når jeg kjenner nedlastingene per time, gir integralet det totale antall nedlastinger over en tidsperiode.',
      definite_integral: 'Det bestemte integralet beregner "totaleffekten" mellom to grenser. Hovedsetningen gjør det enkelt: Stamfunksjon i øvre grense minus stamfunksjon i nedre grense:',
      area_interpretation: 'Geometrisk er det bestemte integralet arealet mellom kurve og $x$-akse. OBS: Arealer under $x$-aksen teller negativt! For det faktiske arealet trenger du absoluttverdien:',
    },
    concepts: {
      antiderivative: {
        title: 'Stamfunksjon',
        desc: 'En funksjon $F(x)$ med $F\'(x) = f(x)$. Konstanten $+C$ er viktig fordi ulike stamfunksjoner bare skiller seg med en konstant.',
      },
      definite_integral: {
        title: 'Bestemt integral',
        desc: 'Beregner det fortegnsbestemte arealet mellom $f(x)$ og $x$-aksen fra $a$ til $b$. Øvre grense innsatt minus nedre grense innsatt.',
      },
      fundamental_theorem: {
        title: 'Analysens hovedsetning',
        desc: 'Forbinder derivasjon og integrasjon: Derivere og integrere er inverse operasjoner. Det bestemte integralet kan beregnes via stamfunksjonen.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Areal mellom parabel og $x$-akse',
        context: 'Amir visualiserer fordelingen av lyttetid som areal under en kurve.',
        step1: 'Bestem funksjon og nullpunkter — det er våre integrasjonsgrenser:',
        step2: 'Dann stamfunksjon med potensregelen baklengs:',
        step3: 'Beregn bestemt integral: Sett inn øvre grense minus nedre grense:',
        step4: 'Integralet er negativt fordi parabelen ligger under $x$-aksen. For arealet ta absoluttverdien:',
        amir_comment: 'Negative integraler gir mening i dataanalyse: Når $f(x)$ er avviket fra gjennomsnittet, viser et negativt integral at verdiene totalt sett lå under snittet.',
      },
      distance_from_velocity: {
        title: 'Beregne strekning fra hastighet',
        context: 'Hvor langt kjører en selvkjørende bil på 4 sekunder?',
        step1: 'Gitt er hastighetsfunksjonen:',
        step2: 'Totalstrekningen er integralet av hastigheten over tiden:',
        step3: 'Dann stamfunksjon — integrer hvert ledd for seg:',
        step4: 'Sett inn grenser og beregn differansen:',
        amir_comment: 'Sensordata kommer inn som rate — hastighet, datagjennomstrømning, requests per sekund. Integralet gjør det til totalmengde. Dashboardet mitt viser nøyaktig det: $\\int_0^T r(t)\\,dt$ = totalstrømmer.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Dataaggregering over tid',
        desc: 'Når dataraten $r(t)$ er kjent, gir integralet totalmengden over en tidsperiode. Slik beregner strømmetjenester månedlige lytteminutter fra sekund-for-sekund-data.',
      },
      energy_consumption: {
        title: 'Energiforbruk',
        desc: 'Effekt $P(t)$ i watt ganger tid gir energi i joule — men bare ved konstant effekt. Ved svingende effekt trenger du integralet: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Sannsynligheter',
        desc: 'Sannsynligheten for at en stokastisk variabel ligger mellom $a$ og $b$ er arealet under tetthetsfunksjonen — altså et bestemt integral. Grunnlaget for all statistikk.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Glemme integrasjonskonstanten $C$ ved ubestemte integraler',
        correct: 'Alltid legge til $+ C$ ved ubestemt integral',
        why: 'Når $F\'(x) = 2x$, da er både $x^2$ og $x^2 + 7$ en stamfunksjon. $+C$ representerer alle mulige stamfunksjoner. Ved bestemte integraler forkortes $C$ bort — der kan du utelate den.',
        amir_warning: 'I praksis er $C$ initialbetingelsen: Hvor mange sanger hadde brukeren allerede hørt før vi begynte å måle? Uten $C$ mangler startverdien, og beregningen starter på null i stedet for den ekte verdien.',
      },
      negative_area: {
        wrong: 'Tolke integral direkte som areal, selv når det er negativt',
        correct: 'For ekte arealer ta absoluttverdien av integralverdiene',
        why: 'Integralet $\\int_a^b f(x)\\,dx$ kan være negativt når $f(x) < 0$. Det er korrekt som fortegnsbestemt areal. Trenger du det geometriske arealet, må du integrere $|f(x)|$ eller beregne delområdene separat.',
        amir_warning: 'Forestill deg at du beregner total lyttetid og får et negativt resultat — det ville åpenbart vært feil. Ved arealproblemer alltid sjekke om funksjonen skifter fortegn, og beregne delintervaller separat!',
      },
    },
  },
};
