export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai staar foran det endelige balanseringsproblemet i "Havnelys 3D": Loot-droppene maa foeles rettferdige, men likevel spennende. "Jeg trenger en fordeling som ser naturlig ut — mange verdier naer gjennomsnittet, faa ekstremverdier", sier Kai. Svaret fra stokastikkforelesningen: normalfordelingen med sin perfekte klokkekurve.',
      challenge: 'Kai maa kalibrere loot- og ytelsessystemet slik at beloenninger er rettferdig fordelt og bildetider holder seg under den kritiske grensen.',
      outro: 'Med normalfordelingen har Kai bygget et elegant balanseringssystem: Loot-dropper foelger en klokkekurve rundt maalet verdien, og sigmareglene garanterer at avvikere er ekstremt sjeldne.',
    },
    objectives: {
      bell_curve: 'Forsta normalfordelingen $N(\\mu, \\sigma^2)$ som kontinuerlig fordeling med klokkekurve og tolke parameterne',
      sigma_rules: 'Anvende sigmareglene ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) for raske sannsynlighetsanslag',
      z_transformation: 'Gjennomfoere $z$-transformasjonen og beregne sannsynligheter med standardnormalfordelingen $\\Phi(z)$',
      central_limit_theorem: 'Kjenne Den sentrale grenseverdisettningen og forklare hvorfor normalfordelingen dukker opp overalt',
    },
    explanation: {
      intro: 'Normalfordelingen er den viktigste kontinuerlige fordelingen i statistikken. Dens tetthet har den ikoniske klokkeformen, symmetrisk rundt forventningsverdien $\\mu$. Standardavviket $\\sigma$ bestemmer hvor bred eller smal klokken er:',
      sigma_rules: 'Sigmareglene er ditt hurtigverktoey: De forteller deg umiddelbart hvor mange prosent av alle verdier som ligger i et bestemt omraade rundt $\\mu$ — uten tabell, uten kalkulator.',
      kai_tip: 'I spillutviklingen bruker jeg sigmareglene daglig ved balansering. Naar jeg vil at 95% av loot-droppene skal ligge mellom 30 og 70 gull, setter jeg $\\mu = 50$ og $2\\sigma = 20$, altsaa $\\sigma = 10$. Ferdig!',
      z_transformation: 'Men hva om du trenger en eksakt sannsynlighet? Da kommer $z$-transformasjonen: Du regner verdien din $x$ om til en standardisert $z$-verdi og slaar opp i tabellen for standardnormalfordelingen $\\Phi(z)$:',
      central_limit: 'Hvorfor er normalfordelingen saa allestedsnaervaerende? Den sentrale grenseverdisettningen gir svaret: Naar du adderer nok uavhengige stokastiske stoerrlser, naermer summen seg en normalfordeling — uansett hvordan enkeltfordelingene ser ut:',
    },
    concepts: {
      normal_distribution: { title: 'Normalfordeling $N(\\mu, \\sigma^2)$', desc: 'Den kontinuerlige fordelingen med klokkeformet tetthet. $\\mu$ er forventningsverdien, $\\sigma^2$ variansen. Symmetrisk rundt $\\mu$.' },
      sigma_rules: { title: 'Sigmaregler', desc: 'De tre gylne reglene: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$.' },
      z_transformation: { title: '$z$-transformasjon', desc: 'Gjor enhver normalfordeling om til standardnormalfordelingen $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Deretter les av $P(X \\leq x) = \\Phi(z)$ fra tabellen.' },
    },
    examples: {
      loot_balancing: { title: 'Loot-drop-sannsynlighet', context: 'Bosser dropper gull, normalfordelt med $\\mu = 50$ og $\\sigma = 8$. Hvor sannsynlig er minst 70 gull?', step1: 'Sett opp modell:', step2: 'Anvend $z$-transformasjonen:', step3: 'Slaa opp i tabellen — $\\Phi(2{,}5)$:', step4: 'Beregn mot-sannsynlighet — bare $0{,}6\\%$ faar 70+ gull:', kai_comment: 'Perfekt! En legendaer drop ved under 1% av spillerne — det foeles spesielt uten aa vaere urettferdig.' },
      frame_times: { title: 'Bildetid-analyse', context: 'Ved 60 FPS maa hvert bilde renderes paa $16{,}7\\,\\text{ms}$. Bildetidene er normalfordelt med $\\mu = 16{,}7$ og $\\sigma = 2{,}1$.', step1: 'Sett opp modell:', step2: 'Anvend $z$-transformasjonen for lag-grensen $x = 20$:', step3: 'Les av tabellverdi:', step4: 'Beregn mot-sannsynlighet — ca. hvert 17. bilde laggar:', kai_comment: 'Nesten 6% lags — for mye for et flytende 3D-spill. Jeg maa optimalisere rendereren.' },
    },
    realworld: {
      quality_control: { title: 'Kvalitetskontroll i industrien', desc: 'Fabrikker bruker $3\\sigma$-regelen: Naar en komponent avviker mer enn $3\\sigma$ fra maalmaaelet, sorteres den ut. Six-Sigma-ledelse gaar enda lenger.' },
      iq_scores: { title: 'IQ-tester og standardisering', desc: 'IQ-verdier er per definisjon normalfordelt med $\\mu = 100$ og $\\sigma = 15$. Ca. $68\\%$ av befolkningen har en IQ mellom 85 og 115.' },
      stock_returns: { title: 'Aksjeavkastning og risiko', desc: 'Daglige aksjeavkastninger modelleres ofte som normalfordelt — $\\sigma$ er da risikoen.' },
    },
    mistakes: {
      sigma_vs_variance: { wrong: 'Notere normalfordelingen med $N(\\mu, \\sigma)$ — standardavvik i stedet for varians', correct: 'Korrekt er $N(\\mu, \\sigma^2)$ — den andre parameteren er alltid variansen', why: 'Forvekslinger foerer til helt feil sannsynligheter.' },
      z_sign: { wrong: '$z$-formelen feil vei: $z = \\frac{\\mu - x}{\\sigma}$', correct: 'Riktig er $z = \\frac{x - \\mu}{\\sigma}$', why: 'En verdi over gjennomsnittet maa gi positiv $z$, en under negativ.' },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai er ved hjertestykket av "Havnelys 3D": 3D-motoren. Ethvert objekt i spillet maa dreies, skaleres og flyttes. "I 3D trenger du et system som kjeder sammen vilkaarlig mange transformasjoner — og det er matriser." Kai aapner shader-koden og ser matriser overalt: Model-matrise, View-matrise, Projection-matrise.',
      challenge: 'Kai maa forsta og implementere 3D-transformasjonene for spillmotoren sin — rotasjon, skalering og overgangsprosesser, alt styrt av matrisemultiplikasjon.',
      outro: 'Matriser har blitt Kais daglige verktoey: Enhver 3D-transformasjon er en matrise, enhver animasjon en foelge av matrisemultiplikasjoner. "Uansett hvor kompleks transformasjonen — til slutt er det alltid $\\vec{x}\' = M \\cdot \\vec{x}$", sier han.',
    },
    objectives: {
      matrix_operations: 'Addere og multiplisere matriser og anvende regnereglene sikkert — spesielt ikke-kommutativiteten',
      transformation_matrices: 'Sette opp transformasjonsmatriser for rotasjon, skalering og speiling og anvende dem paa vektorer',
      stochastic_matrices: 'Beregne stokastiske matriser og fiksvektorer for overgangsprosesser',
      inverse_matrix: 'Bestemme den inverse matrisen og forsta dens betydning som "tilbaketransformasjon"',
    },
    explanation: {
      intro: 'Matriser er rektangulaere talltabeller — men deres sanne kraft ligger i at de representerer avbildninger. Multiplikasjon betyr: Rad ganger soyle, deretter summere:',
      transformation: 'I 3D-grafikk er enhver geometrisk transformasjon en matrise: Rotasjon, skalering, speiling:',
      kai_tip: 'I motoren min kjeder jeg transformasjoner ved matrisemultiplikasjon: Foerst skalere, saa rotere, saa flytte. Rekkeffoelgen er avgjoerende — matriser er ikke kommutative!',
      stochastic: 'Stokastiske matriser beskriver overgangsprosesser: Hvor sannsynlig er det aa gaa fra en tilstand til en annen?',
      inverse: 'Den inverse matrisen $A^{-1}$ er "angre-knappen": $A \\cdot A^{-1} = I$ (enhetsmatrisen). Ikke enhver matrise har en invers — bare naar $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: { title: 'Matrisemultiplikasjon', desc: 'Rad ganger soyle. Viktig: $A \\cdot B \\neq B \\cdot A$ generelt! Rekkeffoelge teller.' },
      transformation_matrix: { title: 'Transformasjonsmatrise', desc: 'Enhver lineaer avbildning kan fremstilles som matrise. Flere transformasjoner kjedes sammen ved matrisemultiplikasjon — lest fra hoeyre til venstre.' },
      stochastic_matrix: { title: 'Stokastisk matrise og fiksvektor', desc: 'En stokastisk matrise har soeylesum 1. Fiksvektoren $\\vec{v}_{\\text{fix}}$ med $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ er den langsiktige likevektstilstanden.' },
    },
    examples: {
      '3d_rotation': { title: '3D-rotasjon av et havnelys', context: 'Kai vil dreie en lykt i havnen $90°$ rundt $z$-aksen.', step1: 'Sett opp rotasjonsmatrisen for $90°$:', step2: 'Skriv ortsvektoren som soylevektor:', step3: 'Matrise ganger vektor:', step4: 'Resultat: Lykten sitter naa ved $(0, 3, 5)$ — dreid $90°$:', kai_comment: 'Noeaktig slik fungerer hvert bilde i motoren min: Tusenvis av vertekser multipliseres med Model-, View- og Projection-matrisen.' },
      player_states: { title: 'Spilleradferd som Markov-kjede', context: 'Spillere veksler mellom Utforske (U) og Kjempe (K).', step1: 'Sett opp overgangsmatrise $T$ og startvektor:', step2: 'Beregn ett steg — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:', step3: 'Bestem fiksvektor — loes $T \\cdot \\vec{v} = \\vec{v}$:', step4: 'Langsiktig utforsker 40% og kjemper 60%:', kai_comment: 'Det er gull for spilldesignet! Fiksvektoren viser meg langsiktig spilleradferd — uavhengig av startpunktet.' },
    },
    realworld: {
      computer_graphics: { title: 'Datagrafikk og 3D-motorer', desc: 'Enhver 3D-motor baserer seg paa matrisemultiplikasjon. Moderne GPUer er i kjernen massive matrisemultiplikasjonsmaskiner.' },
      google_pagerank: { title: 'Google PageRank', desc: 'Googles opprinnelige soekealgoritme modellerer nettet som en enorm stokastisk matrise. Fiksvektoren gir rangeringen.' },
      robotics: { title: 'Robotikk og maskinstyring', desc: 'Robotarmer bestaar av ledd som utfoerer rotasjoner. Totalposisjonen er produktet av alle rotasjonsmatriser langs armen.' },
    },
    mistakes: {
      commutative: { wrong: 'Behandle matrisemultiplikasjon som tallmultiplikasjon: $A \\cdot B = B \\cdot A$', correct: 'Matriser er IKKE kommutative: $A \\cdot B \\neq B \\cdot A$ generelt', why: 'Foerst dreie, saa flytte gir et annet resultat enn foerst flytte, saa dreie. Alltid les transformasjonskjeder fra hoeyre til venstre!', kai_warning: 'Jeg soekte en hel dag etter en bug fordi jeg byttet rotasjon og translasjon. Skipene mine roterte rundt verdensmidtpunktet i stedet for sin egen akse!' },
      stochastic_rows_cols: { wrong: 'Radsum = 1 antatt ved stokastiske matriser med soeyleevektorer', correct: 'Ved soeylevektorer maa soeyleummen vaere 1', why: 'Konvensjonen avhenger av om du bruker rad- eller soeylevektorer. I skolen er soeylevektorer standard.' },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'Det er lanseringsnatt ved Hamburg havn. Lysene fra Landungsbruecken speiler seg i vannet, og paa den store lerretet lyser tittelen: "Havnelys 3D". Kai staar paa scenen. I publikum oppdager han Mia og Amir. "Husker dere", sier Kai, "da Mia begynte med lineaere funksjoner? Og naa staar vi her — med matriser, integraler og normalfordeling har vi skapt en komplett 3D-verden." Men foer festen starter, har Kai en siste utfordring: matteeksamen.',
      challenge: 'Den stoerste proeven staar for tur — eksamenen forener analyse, analytisk geometri og stokastikk i en skriftlig proeve.',
      outro: 'Lanseringsfesten gaar, musikken spiller, og Kai, Mia og Amir skaaler. Matematikk var aldri bare regning. Det var spraaket de brukte for aa gjoere ideene sine til virkelighet. Spillet er lansert. Proeven kommer. Og uansett hvordan den gaar — reisen var verdt det.',
    },
    objectives: {
      exam_strategy: 'Utvikle en klar eksamensstrategi: Gjennomgaa oppgaver, beregne poeng-tid-forhold, lette oppgaver foerst',
      cross_topic_connections: 'Gjenkjenne og utnytte forbindelser mellom analyse, analytisk geometri og stokastikk',
      time_management: 'Planlegge tidsbudsjettet per oppgave realistisk og holde det',
      error_prevention: 'Gjenkjenne typiske feil, gjennomfoere plausibilitetskontroller og tolke resultater i kontekst',
    },
    explanation: {
      intro: 'Eksamen er ikke en sprint, men et strategisk spill — som en Endgame-boss med flere faser. Du har ca. 4 til 5 timer for tre store temablokker. Noekkelen er ikke aa vite alt, men aa prioritere klokt og jobbe ryddig.',
      kai_rallying: 'Folk, vi har gjort matte i tre aar — ikke fordi vi maatte, men fordi det var nokkelen til prosjektene vaare. Vi er klare!',
      structure: 'Eksamenen bestaar typisk av tre obligatoriske deler — Analyse (ofte den stoerste), Analytisk geometri og Stokastikk.',
      time_strategy: 'Planlegg tiden din proporsjonalt med poengene. Gylden regel: Begynn med oppgavene der du er sikker.',
      mia_wisdom: 'Husk det grunnleggende! Funksjonsanalyse er alltid samme skjema: Definisjonsomraade, nullpunkter, ekstrema, vendepunkter, oppfoersel for $x \\to \\pm\\infty$.',
      checking: 'Etter hver deloppgave: Plausibilitetskontroll! Stemmer enhetene? Gir fortegnene mening? Ligger resultatet i et realistisk omraade?',
      amir_data: 'Jeg sjekker resultatene mine alltid mot grensetilfeller: Hva skjer for $x = 0$? For veldig store $x$? Og ved stokastikk: Alltid sjekke om $\\sum P = 1$ gjelder!',
      confidence: 'Det viktigste til slutt: Du vet mer enn du tror. Tre aars oeving stikker i hendene dine.',
    },
    concepts: {
      read_then_plan: { title: 'Les → Planlegg → Regn → Sjekk', desc: '4-stegs-skjemaet for enhver oppgave: (1) Les oppgaven fullstendig. (2) Planlegg loesningsstrategien. (3) Regn ryddig. (4) Sjekk resultatet.' },
      point_maximizing: { title: 'Poengeffektivitet', desc: 'Ikke enhver oppgave er like vanskelig per poeng. Begynn med oppgavene der du faar flest poeng paa kortest tid.' },
      plausibility_check: { title: 'Plausibilitetskontroll', desc: 'Fire raske sjekker: (1) Enheter: Passer enheten til konteksten? (2) Fortegn: Gir negativt mening her? (3) Grenseverdier: Hva skjer for $x \\to 0$ eller $x \\to \\infty$? (4) Skisse: Passer resultatet til den grafiske forestillingen?' },
    },
    examples: {
      mixed_analysis: { title: 'Typisk analyseoppgave: Kurveanalyse + Integral', context: 'Kai modellerer energiforbruket til 3D-motoren med $f(x) = (2x - 1) \\cdot e^{-x}$.', step1: 'Funksjon gitt:', step2: 'Deriver med produktregelen:', step3: 'Finn ekstrem — sett $f\'(x) = 0$:', step4: 'Arealberegning — delvis integrasjon:', mia_comment: 'Det er noeaktig moensteret jeg mener: Deriver med produktregel, finn nullpunkt, beregn integral. Oev til det gaar automatisk!' },
      mixed_stochastik: { title: 'Typisk stokastikkoppgave: Hypotesetest', context: 'Amirs A/B-test: Av 50 brukere klikker normalt 8% paa den nye knappen. Etter redesign — har klikkraten steget?', step1: 'Sett opp modell — binomialfordeling:', step2: 'Formuler hypoteser — ensidig oppover:', step3: 'Soek etter kritisk omraade:', step4: 'Bestem forkastningsomraadet:', amir_comment: 'Hypotesetester er beslutningslogikk i kjernen.' },
    },
    realworld: {
      release_day: { title: 'Lanseringsdag: Naar alt kommer sammen', desc: 'Aa lansere et spill er som en eksamen: Maaneders forberedelse munner ut i et avgjoerende oeyeblikk.' },
      project_management: { title: 'Prosjektledelse og prioritering', desc: 'I programvareutvikling prioriterer du funksjoner etter effekt og innsats — noeaktig som eksamensoppgaver etter poeng og vanskelighetsgrad.' },
      lifelong_learning: { title: 'Livslang laering', desc: 'Eksamen er ikke slutten, men begynnelsen. Evnen til aa sette seg inn i nye emner er mer verdifull enn enhver enkelt formel.' },
    },
    mistakes: {
      no_units_context: { wrong: 'Skrive resultat uten enhet og uten kontekst: "$A = 12{,}5$"', correct: 'Alltid enhet og tolkning: "$A = 12{,}5\\,\\text{FE}$, det tilsvarer $12{,}5\\,\\text{m}^2$"', why: 'Paa eksamen gis poeng for tolkning i kontekst! Et nakent resultat uten enhet koster deg enkle poeng.', kai_warning: 'Tall uten kontekst har ingen verdi. 12,5 — hva? Piksler? Sekunder? Skadepoeng? Skriv enheten og formuler et svarsetning.' },
      skip_plausibility: { wrong: 'Ikke stille spoersmaaal ved et aapenbart feil resultat: $P(X = 5) = 1{,}3$', correct: 'Straks bli mistenksom: En sannsynlighet kan aldri vaere stoerre enn 1!', why: 'Plausibilitetskontroller koster 10 sekunder, men kan redde hele oppgaver.', mia_warning: 'Jeg fant noeaktig en slik feil i min siste proeve: Integralet mitt var negativt selv om funksjonen var positiv i hele intervallet. Rask sjekk, fortegnsfeil funnet, rettet — 4 poeng reddet.' },
    },
  },
};
