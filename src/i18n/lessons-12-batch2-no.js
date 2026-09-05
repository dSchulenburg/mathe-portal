export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai står overfor det siste balanseproblemet i "Hafenlichter 3D": loot-dropp må føles rettferdige, men samtidig spennende. Dropper hver boss nøyaktig like mye gull, blir det kjedelig — for mye varians, og spillerne klager over urettferdighet. "Jeg trenger en fordeling som ser naturlig ut — mange verdier nær gjennomsnittet, få ekstremverdier", sier Kai til kollegaen Priya. Svaret fra stokastikkforelesningen: normalfordelingen med sin perfekte klokkekurve.',
      challenge: 'Kai må kalibrere loot- og ytelsessystemet i "Hafenlichter 3D" slik at belønningene fordeles rettferdig og bildetidene holder seg under den kritiske grensen — normalfordelingen og sigmareglene gir verktøyet til det.',
      outro: 'Med normalfordelingen har Kai bygd et elegant balansesystem: loot-dropp følger en klokkekurve rundt målverdien, og sigmareglene sikrer at ekstremtilfeller er svært sjeldne. "Det fine er: jeg kan nå regne ut nøyaktig hvor mange prosent av spillerne som opplever en bestemt droppverdi", forklarer han teamet. Og med $z$-transformasjonen sammenlikner han helt ulike mål — bildetider, skadefordeling, spilletid — på én felles skala. Klokkekurven er overalt.',
    },
    objectives: {
      bell_curve: 'Forstå normalfordelingen $N(\\mu, \\sigma^2)$ som kontinuerlig fordeling med klokkekurve og tolke parametrene',
      sigma_rules: 'Bruke sigmareglene ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) til raske sannsynlighetsanslag',
      z_transformation: 'Gjennomføre $z$-transformasjonen og regne ut sannsynligheter med standardnormalfordelingen $\\Phi(z)$',
      central_limit_theorem: 'Kjenne sentralgrenseteoremet og forklare hvorfor normalfordelingen dukker opp overalt',
    },
    explanation: {
      intro: 'Normalfordelingen er statistikkens viktigste kontinuerlige fordeling — og du møter den overalt: ved kroppshøyder, måleverdier, bildetider, eksamensresultater. Tettheten har den ikoniske klokkeformen, symmetrisk om forventningsverdien $\\mu$. Standardavviket $\\sigma$ bestemmer hvor bred eller smal klokken er: liten $\\sigma$ = smal, høy klokke (lite spredning), stor $\\sigma$ = bred, flat klokke (mye spredning). Tetthetsfunksjonen er:',
      sigma_rules: 'Sigmareglene er hurtigverktøyet ditt: de forteller deg straks hvor mange prosent av alle verdier som ligger i et bestemt område rundt $\\mu$ — uten tabell, uten kalkulator. Innenfor $\\pm 1\\sigma$ ligger ca. $68{,}3\\%$, innenfor $\\pm 2\\sigma$ ca. $95{,}4\\%$ og innenfor $\\pm 3\\sigma$ nesten alt — $99{,}7\\%$. Det betyr: verdier utenfor $3\\sigma$ er svært sjeldne!',
      kai_tip: 'I spillutvikling bruker jeg sigmareglene daglig til balansering. Vil jeg at 95% av loot-droppene skal ligge mellom 30 og 70 gull, setter jeg $\\mu = 50$ og $2\\sigma = 20$, altså $\\sigma = 10$. Ferdig! Reglene gir meg straks fordelingen uten at jeg må integrere noe som helst.',
      z_transformation: 'Men hva om du trenger en nøyaktig sannsynlighet — ikke bare sigmareglene? Da kommer $z$-transformasjonen inn: du gjør verdien $x$ om til en standardisert $z$-verdi og slår opp i tabellen for standardnormalfordelingen $\\Phi(z)$. $z$-verdien forteller deg hvor mange standardavvik $x$ er fra forventningsverdien:',
      central_limit: 'Hvorfor er normalfordelingen så allestedsnærværende? Sentralgrenseteoremet gir svaret: legger du sammen tilstrekkelig mange uavhengige stokastiske variabler, nærmer summen seg — uansett hvordan de enkelte fordelingene ser ut — en normalfordeling. Derfor er gjennomsnitt nesten alltid normalfordelte, selv når enkeltdataene ikke er det:',
    },
    concepts: {
      normal_distribution: {
        title: 'Normalfordeling $N(\\mu, \\sigma^2)$',
        desc: 'Den kontinuerlige fordelingen med klokkeformet tetthet. $\\mu$ er forventningsverdien (klokkens midtpunkt), $\\sigma^2$ variansen (klokkens bredde). Arealet under kurven er alltid 1. Symmetrisk om $\\mu$: median = typetall = forventningsverdi.',
      },
      sigma_rules: {
        title: 'Sigmaregler',
        desc: 'De tre gylne reglene: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Uunnværlige til raske anslag.',
      },
      z_transformation: {
        title: '$z$-transformasjon',
        desc: 'Gjør enhver normalfordeling om til standardnormalfordelingen $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Deretter leser du $P(X \\leq x) = \\Phi(z)$ i tabellen. Slik blir vilkårlige normalfordelinger sammenliknbare.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Sannsynlighet for et loot-dropp',
        context: 'I "Hafenlichter 3D" dropper bosser gull, normalfordelt med $\\mu = 50$ og $\\sigma = 8$. Kai vil vite: hvor sannsynlig er et legendarisk dropp på minst 70 gull?',
        step1: 'Sett opp modellen — gulldropp følger en normalfordeling:',
        step2: 'Bruk $z$-transformasjonen — hvor mange standardavvik er 70 fra 50?',
        step3: 'Slå opp i tabellen — les av $\\Phi(2{,}5)$:',
        step4: 'Regn ut komplementærsannsynligheten — bare $0{,}6\\%$ får 70 gull eller mer:',
        kai_comment: 'Perfekt! Et legendarisk dropp hos under 1% av spillerne — det føles spesielt uten å være urettferdig. Normalfordelingen gir meg full kontroll over sjeldenheten.',
      },
      frame_times: {
        title: 'Analyse av bildetider',
        context: 'Ved 60 FPS må hvert bilde rendres på $16{,}7\\,\\text{ms}$. Kais profiler viser: bildetidene er normalfordelte med $\\mu = 16{,}7\\,\\text{ms}$ og $\\sigma = 2{,}1\\,\\text{ms}$. Hvor ofte hakker spillet (bildetid $> 20\\,\\text{ms}$)?',
        step1: 'Sett opp modellen — bildetider som normalfordeling:',
        step2: '$z$-transformasjonen for hakkegrensen $x = 20$:',
        step3: 'Les av tabellverdien:',
        step4: 'Regn ut komplementærsannsynligheten — ca. hvert 17. bilde hakker:',
        kai_comment: 'Nesten 6% hakk — det er for mye til et flytende 3D-spill. Jeg må optimalisere rendereren til $\\sigma$ blir mindre. Mål: $\\sigma \\leq 1{,}5$, da er under 1,5% av bildene berørt.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Kvalitetskontroll i industrien',
        desc: 'Fabrikker bruker $3\\sigma$-regelen: avviker en komponent mer enn $3\\sigma$ fra målmålet, blir den vraket. Six Sigma-ledelse går enda lenger — $6\\sigma$ betyr høyst 3,4 feil per million deler. Normalfordelingen er fundamentet for industriell kvalitetssikring.',
      },
      iq_scores: {
        title: 'IQ-tester og standardisering',
        desc: 'IQ-verdier er per definisjon normalfordelte med $\\mu = 100$ og $\\sigma = 15$. Det betyr: ca. $68\\%$ av befolkningen har en IQ mellom 85 og 115, og ca. $95\\%$ mellom 70 og 130. En IQ på 145 ($z = 3$) er like sjelden som et loot-dropp på 70 gull!',
      },
      stock_returns: {
        title: 'Aksieavkastning og risiko',
        desc: 'Daglig aksieavkastning modelleres ofte som normalfordelt — $\\sigma$ er da risikoen. Porteføljeforvaltere bruker $z$-transformasjonen til å regne ut hvor sannsynlig et krakk er. Men: i virkeligheten forekommer ekstreme utslag oftere enn normalfordelingen forutsier ("fete haler").',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'Notere normalfordelingen med $N(\\mu, \\sigma)$ — standardavvik i stedet for varians',
        correct: 'Korrekt er $N(\\mu, \\sigma^2)$ — den andre parameteren er alltid variansen',
        why: 'I notasjonen $N(\\mu, \\sigma^2)$ står den andre parameteren for variansen $\\sigma^2$, ikke for standardavviket $\\sigma$. Forvekslinger fører til helt feil sannsynligheter — f.eks. er $N(0, 4)$ en fordeling med $\\sigma = 2$, ikke $\\sigma = 4$!',
        kai_warning: 'Den feilen ødela en gang hele loot-balanseringen min. Jeg mente $\\sigma = 8$, men skrev $N(50, 8)$ — og det betyr $\\sigma = \\sqrt{8} \\approx 2{,}83$. Gevinstene ble altfor ensartede! Husk alltid: $N(\\mu, \\sigma^2)$!',
      },
      z_sign: {
        wrong: '$z$-formelen omvendt: $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'Korrekt er $z = \\frac{x - \\mu}{\\sigma}$ — verdi minus forventningsverdi, ikke omvendt',
        why: 'Bytter du om på telleren, får du feil fortegn. En verdi over gjennomsnittet må gi en positiv $z$, en verdi under en negativ. Ved $x = 70$, $\\mu = 50$ er $z = +2{,}5$ (over gjennomsnittet), ikke $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai har nådd hjertet i "Hafenlichter 3D": 3D-motoren. Hvert objekt i spillet — hvert skip, hver bølge, hver lykt i havnen — må kunne roteres, skaleres og flyttes. "I 2D var transformasjoner bare formler", husker han fra Mias begynnelse. "Men i 3D trenger du et system som kjeder sammen vilkårlig mange transformasjoner — og det er matriser." Kai åpner shader-koden og ser matriser overalt: modellmatrise, view-matrise, projeksjonsmatrise.',
      challenge: 'Kai må forstå og implementere 3D-transformasjonene til spillmotoren sin — rotasjon, skalering og overgangsprosesser, alt sammen styrt av matrisemultiplikasjon.',
      outro: 'Matriser er blitt et daglig verktøy for Kai: hver 3D-transformasjon er en matrise, hver animasjon en rekke matrisemultiplikasjoner, hver overgangsatferd en stokastisk matrise. "Det geniale er: uansett hvor kompleks transformasjonen er — til slutt er det alltid $\\vec{x}\' = M \\cdot \\vec{x}$", sier han. MVP-matrisen ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) gjør nå tusenvis av Hafenlichter-vertices per bilde om til piksler på skjermen.',
    },
    objectives: {
      matrix_operations: 'Addere og multiplisere matriser og bruke regnereglene sikkert — særlig ikke-kommutativiteten',
      transformation_matrices: 'Sette opp transformasjonsmatriser for rotasjon, skalering og speiling og bruke dem på vektorer',
      stochastic_matrices: 'Regne ut stokastiske matriser og fikspunktvektorer til overgangsprosesser',
      inverse_matrix: 'Bestemme den inverse matrisen og forstå betydningen som "tilbaketransformasjon"',
    },
    explanation: {
      intro: 'Matriser er rektangulære talltabeller — men den egentlige styrken ligger i at de representerer avbildninger. En $2 \\times 2$-matrise transformerer 2D-vektorer, en $3 \\times 3$-matrise transformerer 3D-vektorer. Å multiplisere betyr: rad ganger søyle, deretter summere. For $C = A \\cdot B$ gjelder:',
      transformation: 'I 3D-grafikk er enhver geometrisk transformasjon en matrise: rotasjon, skalering, speiling. Rotasjonsmatrisen om $z$-aksen dreier et punkt $(x, y, z)$ vinkelen $\\theta$ — og $z$-koordinaten forblir uendret:',
      kai_tip: 'I motoren min kjeder jeg sammen transformasjoner med matrisemultiplikasjon: først skalere, så rotere, så flytte. Rekkefølgen er her avgjørende — matriser er ikke kommutative! Først dreie og så flytte gir noe helt annet enn først flytte og så dreie. Derfor leser jeg alltid matrisekjeder fra høyre mot venstre.',
      stochastic: 'Stokastiske matriser beskriver overgangsprosesser: hvor sannsynlig er det å gå fra én tilstand til en annen? Hver søyle summerer til 1 (ved søylevektorer). Multipliserer du tilstandsvektoren $\\vec{v}_n$ med overgangsmatrisen $T$, får du den neste tilstanden $\\vec{v}_{n+1}$:',
      inverse: 'Den inverse matrisen $A^{-1}$ er "angre-knappen": $A \\cdot A^{-1} = I$ (identitetsmatrisen). Er $A$ en rotasjon på $30°$, er $A^{-1}$ rotasjonen på $-30°$. Ikke enhver matrise har en invers — bare når $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Matrisemultiplikasjon',
        desc: 'Rad ganger søyle: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. Antall søyler i $A$ må være lik antall rader i $B$. Viktig: generelt er $A \\cdot B \\neq B \\cdot A$! Rekkefølgen betyr noe.',
      },
      transformation_matrix: {
        title: 'Transformasjonsmatrise',
        desc: 'Enhver lineær avbildning (rotasjon, skalering, speiling) kan framstilles som matrise. Rotasjonsmatrisen $R(\\theta)$ dreier vektorer vinkelen $\\theta$. Flere transformasjoner kjedes sammen ved matrisemultiplikasjon — lest fra høyre mot venstre.',
      },
      stochastic_matrix: {
        title: 'Stokastisk matrise og fikspunktvektor',
        desc: 'En stokastisk matrise har summen 1 i hver søyle — den beskriver overgangssannsynligheter. Fikspunktvektoren $\\vec{v}_{\\text{fix}}$ med $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ er den langsiktige likevektstilstanden, uansett utgangstilstand.',
      },
    },
    examples: {
      '3d_rotation': {
        title: '3D-rotasjon av en havnelykt',
        context: 'Kai vil dreie en lykt i havnen $90°$ om $z$-aksen. Lykten står i punktet $(3, 0, 5)$. Hvordan regner han ut den nye posisjonen?',
        step1: 'Sett opp rotasjonsmatrisen for $90°$ om $z$-aksen ($\\cos 90° = 0$, $\\sin 90° = 1$):',
        step2: 'Skriv lyktens posisjonsvektor som søylevektor:',
        step3: 'Matrise ganger vektor — gang ut rad for rad:',
        step4: 'Resultat: lykten står nå i $(0, 3, 5)$ — dreid $90°$ i $xy$-planet, $z$ uendret:',
        kai_comment: 'Nøyaktig slik fungerer hvert bilde i motoren min: tusenvis av vertices multipliseres med modellmatrisen, så med view-matrisen (kameraposisjon) og så med projeksjonsmatrisen (perspektiv). Tre matrisemultiplikasjoner per vertex — og GPU-en gjør det på millisekunder!',
      },
      player_states: {
        title: 'Spilleratferd som Markovkjede',
        context: 'I "Hafenlichter 3D" veksler spillerne mellom å utforske (U) og kjempe (K). Kai har observert: den som utforsker, fortsetter å utforske i $70\\%$ av tilfellene og går over til kamp i $30\\%$. Den som kjemper, blir i kamp i $80\\%$ og utforsker igjen i $20\\%$. Nå utforsker $60\\%$ av spillerne.',
        step1: 'Sett opp overgangsmatrisen $T$ og startvektoren $\\vec{v}_0$:',
        step2: 'Regn ut ett steg — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:',
        step3: 'Bestem fikspunktvektoren — løs likningssystemet $T \\cdot \\vec{v} = \\vec{v}$ med $x + y = 1$:',
        step4: 'På lang sikt utforsker $40\\%$ og kjemper $60\\%$ — uavhengig av starten:',
        kai_comment: 'Det er gull verdt for spilldesignet mitt! Fikspunktvektoren viser meg at spillerne på lang sikt kjemper mer enn de utforsker — uansett hvordan de starter. Vil jeg ha det mer balansert, må jeg endre overgangssannsynlighetene. Matriser gjør spilleratferd beregnelig!',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Datagrafikk og 3D-motorer',
        desc: 'Enhver 3D-motor (Unity, Unreal, Godot) bygger på matrisemultiplikasjon. MVP-pipelinen — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — transformerer hvert 3D-punkt til 2D-skjermen. Moderne GPU-er er i kjernen massive matrisemultiplikasjonsmaskiner.',
      },
      google_pagerank: {
        title: 'Googles PageRank',
        desc: 'Googles opprinnelige søkealgoritme modellerer nettet som en enorm stokastisk matrise: hver nettside er en tilstand, hver lenke en overgangssannsynlighet. Fikspunktvektoren $\\vec{r} = T \\cdot \\vec{r}$ gir rangeringen — sidene med de høyeste verdiene i fikspunktvektoren ligger øverst.',
      },
      robotics: {
        title: 'Robotikk og maskinstyring',
        desc: 'Robotarmer består av ledd som hver utfører en rotasjon. Håndens samlede posisjon framkommer som produktet av alle rotasjonsmatrisene langs armen. Det kalles foroverkinematikk — og den inverse matrisen løser det omvendte problemet: "hvilke leddvinkler trenger jeg til denne håndposisjonen?"',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Behandle matrisemultiplikasjon som tallmultiplikasjon: $A \\cdot B = B \\cdot A$',
        correct: 'Matriser er IKKE kommutative: generelt $A \\cdot B \\neq B \\cdot A$',
        why: 'Først dreie og så flytte gir et annet resultat enn først flytte og så dreie. I 3D-grafikk fører ombyttet rekkefølge til helt feil posisjoner. Derfor: les alltid transformasjonskjeder fra høyre mot venstre!',
        kai_warning: 'Jeg lette en gang en hel dag etter en bug fordi jeg hadde byttet om rotasjon og translasjon. Skipene mine dreide om verdens sentrum i stedet for sin egen akse! Siden leser jeg alltid matrisekjeder fra høyre mot venstre: $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$ — først rotere, så flytte.',
      },
      stochastic_rows_cols: {
        wrong: 'Anta radsum = 1 ved stokastiske matriser med søylevektorer',
        correct: 'Ved søylevektorer må søylesummen være 1: $\\sum_i t_{ij} = 1$',
        why: 'Konvensjonen avhenger av om du bruker rad- eller søylevektorer. På skolen og ved tyske universiteter er søylevektoren standard — da må søylene i overgangsmatrisen summere til 1. Hver søyle beskriver: "fra tilstand $j$ — hvordan fordeler overgangene seg?"',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'Det er lanseringskveld i Hamburgs havn. Lysene fra bryggene speiler seg i vannet, og på det store lerretet foran fiskemarkedet lyser tittelen: "Hafenlichter 3D". Kai står på scenen med mikrofonen i hånden og kan nesten ikke fatte det — tre års utvikling, og nå er spillet endelig ferdig. I publikum får han øye på to kjente ansikter: Mia, som den gang satte det hele i gang med sitt 2D-pikselspill, og Amir, hvis DataPulse-algoritmer styrer KI-en til NPC-ene. "Husker dere", sier Kai i mikrofonen, "da Mia begynte med lineære funksjoner for å flytte spillfigurer langs en linje? Så bygde Amir datapipelinen med deriverte og binomisk fordeling. Og nå står vi her — med matriser, integraler og normalfordeling har vi skapt en komplett 3D-verden." Mengden jubler. Men før festen for alvor tar av, har Kai en siste utfordring: matematikkeksamen.',
      challenge: 'Den største prøven venter — eksamen forener analyse, analytisk geometri og stokastikk i én oppgave. Kai trenger en strategi som knytter sammen alle temaene, maksimerer poengene og unngår de typiske feilene.',
      outro: 'Lanseringsfesten i havnen går sin gang, musikken spiller, og Kai, Mia og Amir skåler. "Tre år med matematikk", sier Mia, "fra den rette linjen til normalfordelingen." "Fra data til nevrale nett", legger Amir til. "Fra 2D-piksler til 3D-motor", avslutter Kai. De ser ut over Elben, der havnelysene danser — hvert eneste et vertex, transformert av en matrise, opplyst av en eksponentialfunksjon, balansert av en normalfordeling. Matematikk var aldri bare regning. Det var språket de gjorde idéene sine virkelige med. Spillet er lansert. Eksamen kommer. Og uansett hvordan det går — reisen var verdt det. Hver funksjon, hver derivert, hvert integral har ført dem hit. Til havnen. Til målet. Og til begynnelsen på alt som ennå kommer.',
    },
    objectives: {
      exam_strategy: 'Utvikle en klar eksamensstrategi: se gjennom oppgavene, regn ut poeng-tid-forholdet, lette oppgaver først',
      cross_topic_connections: 'Se og utnytte forbindelsene mellom analyse, analytisk geometri og stokastikk',
      time_management: 'Planlegge tidsbudsjettet per oppgave realistisk og holde det',
      error_prevention: 'Gjenkjenne typiske feil, gjøre rimelighetssjekker og tolke resultater i saksammenhengen',
    },
    explanation: {
      intro: 'Eksamen er ikke en spurt, men et strategispill — som en sluttboss med flere faser. Du har ca. 4 til 5 timer på tre store temablokker. Nøkkelen er ikke å vite alt, men å prioritere klokt og arbeide ryddig. Kai lærte det med spillet sitt: "Du kan ikke fikse hver bug samtidig. Du fikser dem som har størst effekt — og nøyaktig slik går du løs på eksamen."',
      kai_rallying: 'Folkens, vi har drevet med matematikk i tre år — ikke fordi vi måtte, men fordi det var nøkkelen til prosjektene våre. Mia begynte med funksjoner, Amir trente KI-en sin med stokastikk, og jeg bygde en 3D-verden med matriser. Eksamen er bare rulleteksten etter sluttkampen. Vi er klare!',
      structure: 'Prøven består typisk av tre obligatoriske deler — analyse (ofte den største blokken), analytisk geometri og stokastikk. Poengene fordeler seg omtrent slik:',
      time_strategy: 'Planlegg tiden proporsjonalt med poengene. Gir en oppgave 10 av 100 poeng, invester ca. $10\\%$ av tiden din. Og den gylne regelen: begynn med oppgavene du er sikker på. Hvert sikkert poeng teller like mye som et hardt tilkjempet!',
      mia_wisdom: 'Husk grunnlaget! En funksjonsdrøfting er alltid det samme skjemaet: definisjonsmengde, nullpunkter, ekstremalpunkter, vendepunkter, oppførsel for $x \\to \\pm\\infty$. Kjenner dere mønsteret, er hver funksjon bare en variasjon av det. Det lærte jeg med spillfigurene mine — enhver bevegelse er i kjernen en funksjon.',
      checking: 'Etter hver deloppgave: rimelighetssjekk! Stemmer enhetene? Gir fortegnene mening? Ligger resultatet i et realistisk område? En sannsynlighet større enn 1 eller et negativt areal er umiddelbare varselsignaler — da er det bedre å regne om enn å gå videre.',
      amir_data: 'Jeg sjekker alltid resultatene mine mot grensetilfeller: hva skjer ved $x = 0$? Ved svært store $x$? Konvergerer løsningen min, eller divergerer den? Den tenkemåten fra feilsøking gjelder like mye til prøven. Og i stokastikk: sjekk alltid om $\\sum P = 1$ gjelder!',
      confidence: 'Det viktigste til slutt: du kan mer enn du tror. Tre års øving sitter i hendene dine. Står du fast et øyeblikk under prøven — pust ut, les oppgaven på nytt, og begynn med det du kan sikkert. Hvert poeng teller. Og husk: matematikk er ikke talent, men et språk du har lært. Snakk det.',
    },
    concepts: {
      read_then_plan: {
        title: 'Lese → planlegge → regne → sjekke',
        desc: 'Firetrinnsskjemaet for hver oppgave: (1) les hele oppgaven og marker informasjonen. (2) planlegg løsningsstrategien — hvilke metoder trenger du? (3) regn ryddig og oversiktlig. (4) sjekk resultatet: enheter, fortegn, rimelighet, saksammenheng.',
      },
      point_maximizing: {
        title: 'Poengeffektivitet',
        desc: 'Ikke alle oppgaver er like vanskelige per poeng. Begynn med oppgavene der du henter flest poeng på kortest tid. De siste deloppgavene er ofte de vanskeligste — det er bedre først å samle alle de "lette" poengene i alle oppgavene og så vende tilbake til de vanskelige.',
      },
      plausibility_check: {
        title: 'Rimelighetssjekk',
        desc: 'Fire raske sjekker som hindrer slurvefeil: (1) enheter: passer enheten til sammenhengen? (2) fortegn: gir et negativt tall mening her? (3) grenseverdier: hva skjer for $x \\to 0$ eller $x \\to \\infty$? (4) skisse: passer resultatet til den grafiske forestillingen?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Typisk analyseoppgave: funksjonsdrøfting + integral',
        context: 'Kai modellerer energiforbruket i 3D-motoren sin med $f(x) = (2x - 1) \\cdot e^{-x}$. Bestem ekstremalpunktene, og regn ut arealet mellom grafen og $x$-aksen på $[0;\\, 3]$.',
        step1: 'Sett opp funksjonen — her allerede gitt:',
        step2: 'Derivert med produktregelen: $u = 2x - 1$, $v = e^{-x}$, altså $f\'(x) = u\' \\cdot v + u \\cdot v\'$:',
        step3: 'Finn ekstremalpunktet — sett $f\'(x) = 0$ ($e^{-x} > 0$ alltid, altså parentesen = 0):',
        step4: 'Arealberegning — delvis integrasjon eller bestemme den antideriverte:',
        mia_comment: 'Det er nøyaktig det mønsteret jeg mener: derivert med produktregelen, finn nullpunktet, regn ut integralet. Funksjonen endrer seg, men strategien er alltid den samme. Øv til det går av seg selv!',
      },
      mixed_stochastik: {
        title: 'Typisk stokastikkoppgave: hypotesetest',
        context: 'Amirs A/B-test viser: av 50 brukere klikker vanligvis $8\\%$ på den nye knappen. Etter en redesign vil han teste om klikkraten har steget ($\\alpha = 5\\%$).',
        step1: 'Sett opp modellen — binomisk fordeling med parametrene:',
        step2: 'Formulér hypotesene — ensidig test oppover:',
        step3: 'Søk det kritiske området — test $k = 8$ ($P$ fortsatt for stor):',
        step4: 'Bestem forkastningsområdet — fra $k = 9$ forkastes $H_0$:',
        amir_comment: 'Hypotesetester er i kjernen beslutningslogikk: du regner ut hvor usannsynlig resultatet ditt er under $H_0$. Er det mer usannsynlig enn $\\alpha$, forkaster du $H_0$. Nøyaktig slik tar jeg databaserte avgjørelser hos DataPulse — bare med større utvalg!',
      },
    },
    realworld: {
      release_day: {
        title: 'Lanseringsdag: når alt kommer sammen',
        desc: 'Å lansere et spill er som en eksamen: måneder med forberedelse munner ut i ett avgjørende øyeblikk. Kais "Hafenlichter 3D" forener 2D-grunnlaget (Mia), dataanalysen (Amir) og 3D-matematikken (Kai) — nøyaktig som eksamen forener analyse, geometri og stokastikk. Forberedelse er alt.',
      },
      project_management: {
        title: 'Prosjektledelse og prioritering',
        desc: 'I programvareutvikling prioriterer du funksjoner etter effekt og innsats — nøyaktig som eksamensoppgaver etter poeng og vanskelighetsgrad. Formelen $\\text{Effektivitet} = \\frac{\\text{Poeng}}{\\text{Tid}}$ gjelder like mye i yrkeslivet: konsentrer deg om det som utgjør størst forskjell.',
      },
      lifelong_learning: {
        title: 'Livslang læring',
        desc: 'Eksamen er ikke slutten, men begynnelsen. Mia studerer spilldesign, Amir datavitenskap og Kai medieinformatikk — og overalt trenger de matematikk. Evnen til å sette seg inn i nye temaer er mer verdt enn noen enkelt formel. Matematikken har lært dere å tenke.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Skrive resultatet uten enhet og uten saksammenheng: "$A = 12{,}5$"',
        correct: 'Alltid enhet og tolkning: "$A = 12{,}5\\,\\text{AE}$, som tilsvarer $12{,}5\\,\\text{m}^2$"',
        why: 'Til eksamen gis det poeng for tolkningen i saksammenhengen! Et nakent resultat uten enhet eller forbindelse til oppgaveteksten koster deg lette poeng. Skriv alltid en svarsetning: "Arealet er $12{,}5\\,\\text{m}^2$, som tilsvarer parkens beplantede areal."',
        kai_warning: 'I spillutvikling har tall uten sammenheng ingen verdi. 12,5 — hva da? Piksler? Sekunder? Skadepoeng? Slik er det på prøven også: skriv enheten, og formulér en svarsetning. Det er gratispoeng!',
      },
      skip_plausibility: {
        wrong: 'Ikke stille spørsmål ved et åpenbart feil resultat: $P(X = 5) = 1{,}3$',
        correct: 'Stusse med én gang: en sannsynlighet kan aldri være større enn 1!',
        why: 'Rimelighetssjekker koster 10 sekunder, men kan redde hele oppgaver. Sannsynligheter ligger alltid mellom 0 og 1, arealer er aldri negative, og $e^x > 0$ for alle $x$. Bryter resultatet ditt med disse grunnreglene, ligger det en regnefeil bak.',
        mia_warning: 'På den siste prøven min fant jeg nøyaktig en slik feil: integralet mitt var negativt, selv om funksjonen var positiv på hele intervallet. Rask sjekk, fortegnsfeil oppdaget, rettet — 4 poeng reddet. Sjekk alltid!',
      },
    },
  },
};
