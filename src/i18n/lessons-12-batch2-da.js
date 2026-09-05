export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai står over for det sidste balanceproblem i "Hafenlichter 3D": loot-drops skal føles fair, men samtidig spændende. Hvis hver boss dropper præcis lige meget guld, er det kedeligt — for meget varians, og spillerne klager over urimelighed. "Jeg har brug for en fordeling, der ser naturlig ud — mange værdier tæt på gennemsnittet, få ekstremværdier", siger Kai til sin kollega Priya. Svaret fra stokastikforelæsningen: normalfordelingen med dens perfekte klokkekurve.',
      challenge: 'Kai skal kalibrere loot- og ydelsessystemet i "Hafenlichter 3D", så belønningerne er fair fordelt, og billedtiderne holder sig under den kritiske grænse — normalfordelingen og dens sigmaregler giver værktøjet til det.',
      outro: 'Med normalfordelingen har Kai bygget et elegant balancesystem: loot-drops følger en klokkekurve omkring målværdien, og sigmareglerne sikrer, at udsving er yderst sjældne. "Det smukke er: jeg kan nu præcis beregne, hvor mange procent af spillerne der oplever en bestemt dropværdi", forklarer han holdet. Og med $z$-transformationen sammenligner han vidt forskellige mål — billedtider, skadesfordeling, spilletid — på én fælles skala. Klokkekurven er alle vegne.',
    },
    objectives: {
      bell_curve: 'Forstå normalfordelingen $N(\\mu, \\sigma^2)$ som kontinuert fordeling med klokkekurve og fortolke dens parametre',
      sigma_rules: 'Anvende sigmareglerne ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) til hurtige sandsynlighedsvurderinger',
      z_transformation: 'Gennemføre $z$-transformationen og beregne sandsynligheder med standardnormalfordelingen $\\Phi(z)$',
      central_limit_theorem: 'Kende den centrale grænseværdisætning og forklare, hvorfor normalfordelingen dukker op overalt',
    },
    explanation: {
      intro: 'Normalfordelingen er statistikkens vigtigste kontinuerte fordeling — og du møder den overalt: ved kropshøjder, måleværdier, billedtider, eksamensresultater. Dens tæthed har den ikoniske klokkeform, symmetrisk om middelværdien $\\mu$. Standardafvigelsen $\\sigma$ bestemmer, hvor bred eller smal klokken er: lille $\\sigma$ = smal, høj klokke (lille spredning), stor $\\sigma$ = bred, flad klokke (stor spredning). Tæthedsfunktionen lyder:',
      sigma_rules: 'Sigmareglerne er dit hurtige værktøj: de fortæller dig straks, hvor mange procent af alle værdier der ligger i et bestemt område omkring $\\mu$ — uden tabel, uden lommeregner. Inden for $\\pm 1\\sigma$ ligger ca. $68{,}3\\%$, inden for $\\pm 2\\sigma$ ca. $95{,}4\\%$ og inden for $\\pm 3\\sigma$ næsten alt — $99{,}7\\%$. Det betyder: værdier ud over $3\\sigma$ er yderst sjældne!',
      kai_tip: 'I spiludvikling bruger jeg sigmareglerne dagligt til balancering. Vil jeg have, at 95% af loot-drops ligger mellem 30 og 70 guld, sætter jeg $\\mu = 50$ og $2\\sigma = 20$, altså $\\sigma = 10$. Færdig! Reglerne giver mig straks fordelingen, uden at jeg skal integrere noget som helst.',
      z_transformation: 'Men hvad nu, hvis du har brug for en præcis sandsynlighed — ikke bare sigmareglerne? Så kommer $z$-transformationen i spil: du regner din værdi $x$ om til en standardiseret $z$-værdi og slår op i tabellen for standardnormalfordelingen $\\Phi(z)$. $z$-værdien fortæller dig, hvor mange standardafvigelser $x$ er fra middelværdien:',
      central_limit: 'Hvorfor er normalfordelingen så allestedsnærværende? Den centrale grænseværdisætning giver svaret: lægger du tilstrækkeligt mange uafhængige stokastiske variable sammen, nærmer deres sum sig — uanset hvordan de enkelte fordelinger ser ud — en normalfordeling. Derfor er gennemsnit næsten altid normalfordelte, selv når de enkelte data ikke er det:',
    },
    concepts: {
      normal_distribution: {
        title: 'Normalfordeling $N(\\mu, \\sigma^2)$',
        desc: 'Den kontinuerte fordeling med klokkeformet tæthed. $\\mu$ er middelværdien (klokkens midte), $\\sigma^2$ variansen (klokkens bredde). Arealet under kurven er altid 1. Symmetrisk om $\\mu$: median = typetal = middelværdi.',
      },
      sigma_rules: {
        title: 'Sigmaregler',
        desc: 'De tre gyldne regler: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Uundværlige til hurtige vurderinger.',
      },
      z_transformation: {
        title: '$z$-transformation',
        desc: 'Forvandler enhver normalfordeling til standardnormalfordelingen $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Derefter aflæser du $P(X \\leq x) = \\Phi(z)$ i tabellen. Sådan bliver vilkårlige normalfordelinger sammenlignelige.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Sandsynlighed for et loot-drop',
        context: 'I "Hafenlichter 3D" dropper bosser guld, normalfordelt med $\\mu = 50$ og $\\sigma = 8$. Kai vil vide: hvor sandsynligt er et legendarisk drop på mindst 70 guld?',
        step1: 'Opstil modellen — guld-drops følger en normalfordeling:',
        step2: 'Anvend $z$-transformationen — hvor mange standardafvigelser er 70 fra 50?',
        step3: 'Slå op i tabellen — aflæs $\\Phi(2{,}5)$:',
        step4: 'Beregn komplementærsandsynligheden — kun $0{,}6\\%$ får 70 guld eller mere:',
        kai_comment: 'Perfekt! Et legendarisk drop hos under 1% af spillerne — det føles særligt uden at være urimeligt. Normalfordelingen giver mig fuld kontrol over sjældenheden.',
      },
      frame_times: {
        title: 'Analyse af billedtider',
        context: 'Ved 60 FPS skal hvert billede renderes på $16{,}7\\,\\text{ms}$. Kais profiler viser: billedtiderne er normalfordelte med $\\mu = 16{,}7\\,\\text{ms}$ og $\\sigma = 2{,}1\\,\\text{ms}$. Hvor ofte hakker spillet (billedtid $> 20\\,\\text{ms}$)?',
        step1: 'Opstil modellen — billedtider som normalfordeling:',
        step2: '$z$-transformationen for hakke-grænsen $x = 20$:',
        step3: 'Aflæs tabelværdien:',
        step4: 'Beregn komplementærsandsynligheden — ca. hvert 17. billede hakker:',
        kai_comment: 'Næsten 6% hak — det er for meget til et flydende 3D-spil. Jeg skal optimere rendereren, indtil $\\sigma$ bliver mindre. Mål: $\\sigma \\leq 1{,}5$, så er under 1,5% af billederne berørt.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Kvalitetskontrol i industrien',
        desc: 'Fabrikker bruger $3\\sigma$-reglen: afviger en komponent mere end $3\\sigma$ fra målmålet, kasseres den. Six Sigma-ledelse går endnu videre — $6\\sigma$ betyder højst 3,4 fejl pr. million dele. Normalfordelingen er fundamentet for industriel kvalitetssikring.',
      },
      iq_scores: {
        title: 'IQ-test og standardisering',
        desc: 'IQ-værdier er per definition normalfordelte med $\\mu = 100$ og $\\sigma = 15$. Det betyder: ca. $68\\%$ af befolkningen har en IQ mellem 85 og 115, og ca. $95\\%$ mellem 70 og 130. En IQ på 145 ($z = 3$) er lige så sjælden som et loot-drop på 70 guld!',
      },
      stock_returns: {
        title: 'Aktieafkast og risiko',
        desc: 'Daglige aktieafkast modelleres ofte som normalfordelte — $\\sigma$ er da risikoen. Porteføljeforvaltere bruger $z$-transformationen til at beregne, hvor sandsynligt et krak er. Dog: i virkeligheden forekommer ekstreme udsving hyppigere, end normalfordelingen forudsiger ("fat tails").',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'Notere normalfordelingen med $N(\\mu, \\sigma)$ — standardafvigelse i stedet for varians',
        correct: 'Korrekt er $N(\\mu, \\sigma^2)$ — den anden parameter er altid variansen',
        why: 'I notationen $N(\\mu, \\sigma^2)$ står den anden parameter for variansen $\\sigma^2$, ikke for standardafvigelsen $\\sigma$. Forvekslinger fører til helt forkerte sandsynligheder — f.eks. er $N(0, 4)$ en fordeling med $\\sigma = 2$, ikke $\\sigma = 4$!',
        kai_warning: 'Den fejl ødelagde engang hele min loot-balancering. Jeg mente $\\sigma = 8$, men skrev $N(50, 8)$ — og det betyder $\\sigma = \\sqrt{8} \\approx 2{,}83$. Gevinsterne blev alt for ensartede! Husk altid: $N(\\mu, \\sigma^2)$!',
      },
      z_sign: {
        wrong: '$z$-formlen omvendt: $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'Korrekt er $z = \\frac{x - \\mu}{\\sigma}$ — værdi minus middelværdi, ikke omvendt',
        why: 'Bytter du om på tælleren, får du det forkerte fortegn. En værdi over gennemsnittet skal give et positivt $z$, en værdi under et negativt. Ved $x = 70$, $\\mu = 50$ er $z = +2{,}5$ (over gennemsnittet), ikke $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai er nået til hjertet af "Hafenlichter 3D": 3D-motoren. Hvert objekt i spillet — hvert skib, hver bølge, hver lygte i havnen — skal kunne roteres, skaleres og flyttes. "I 2D var transformationer bare formler", husker han fra Mias begyndelse. "Men i 3D har du brug for et system, der kæder vilkårligt mange transformationer sammen — og det er matricer." Kai åbner shader-koden og ser matricer overalt: model-matrix, view-matrix, projektionsmatrix.',
      challenge: 'Kai skal forstå og implementere 3D-transformationerne til sin spilmotor — rotation, skalering og overgangsprocesser, alt sammen styret af matrixmultiplikation.',
      outro: 'Matricer er blevet et dagligt værktøj for Kai: hver 3D-transformation er en matrix, hver animation en række matrixmultiplikationer, hver overgangsadfærd en stokastisk matrix. "Det geniale er: uanset hvor kompleks transformationen er — til sidst er det altid $\\vec{x}\' = M \\cdot \\vec{x}$", siger han. MVP-matricen ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) forvandler nu tusindvis af Hafenlichter-vertices pr. billede til pixels på skærmen.',
    },
    objectives: {
      matrix_operations: 'Addere og multiplicere matricer og anvende regnereglerne sikkert — især ikke-kommutativiteten',
      transformation_matrices: 'Opstille transformationsmatricer til rotation, skalering og spejling og anvende dem på vektorer',
      stochastic_matrices: 'Beregne stokastiske matricer og fixvektorer til overgangsprocesser',
      inverse_matrix: 'Bestemme den inverse matrix og forstå dens betydning som "tilbagetransformation"',
    },
    explanation: {
      intro: 'Matricer er rektangulære taltabeller — men deres sande styrke ligger i, at de repræsenterer afbildninger. En $2 \\times 2$-matrix transformerer 2D-vektorer, en $3 \\times 3$-matrix transformerer 3D-vektorer. At multiplicere betyder: række gange søjle, derefter lægge sammen. For $C = A \\cdot B$ gælder:',
      transformation: 'I 3D-grafik er enhver geometrisk transformation en matrix: rotation, skalering, spejling. Rotationsmatricen om $z$-aksen drejer et punkt $(x, y, z)$ vinklen $\\theta$ — og $z$-koordinaten forbliver uændret:',
      kai_tip: 'I min motor kæder jeg transformationer sammen med matrixmultiplikation: først skalere, så rotere, så flytte. Rækkefølgen er her afgørende — matricer er ikke kommutative! Først dreje og så flytte giver noget helt andet end først flytte og så dreje. Derfor læser jeg altid matrixkæder fra højre mod venstre.',
      stochastic: 'Stokastiske matricer beskriver overgangsprocesser: hvor sandsynligt er det at skifte fra én tilstand til en anden? Hver søjle summer til 1 (ved søjlevektorer). Multiplicerer du tilstandsvektoren $\\vec{v}_n$ med overgangsmatricen $T$, får du den næste tilstand $\\vec{v}_{n+1}$:',
      inverse: 'Den inverse matrix $A^{-1}$ er "fortryd-knappen": $A \\cdot A^{-1} = I$ (enhedsmatricen). Er $A$ en rotation på $30°$, så er $A^{-1}$ rotationen på $-30°$. Ikke enhver matrix har en invers — kun når $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Matrixmultiplikation',
        desc: 'Række gange søjle: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. Antallet af søjler i $A$ skal være lig antallet af rækker i $B$. Vigtigt: generelt er $A \\cdot B \\neq B \\cdot A$! Rækkefølgen betyder noget.',
      },
      transformation_matrix: {
        title: 'Transformationsmatrix',
        desc: 'Enhver lineær afbildning (rotation, skalering, spejling) kan fremstilles som matrix. Rotationsmatricen $R(\\theta)$ drejer vektorer vinklen $\\theta$. Flere transformationer kædes sammen ved matrixmultiplikation — læst fra højre mod venstre.',
      },
      stochastic_matrix: {
        title: 'Stokastisk matrix og fixvektor',
        desc: 'En stokastisk matrix har i hver søjle summen 1 — den beskriver overgangssandsynligheder. Fixvektoren $\\vec{v}_{\\text{fix}}$ med $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ er den langsigtede ligevægtstilstand, uanset udgangstilstanden.',
      },
    },
    examples: {
      '3d_rotation': {
        title: '3D-rotation af en havnelygte',
        context: 'Kai vil dreje en lygte i havnen $90°$ om $z$-aksen. Lygten sidder i punktet $(3, 0, 5)$. Hvordan beregner han den nye position?',
        step1: 'Opstil rotationsmatricen for $90°$ om $z$-aksen ($\\cos 90° = 0$, $\\sin 90° = 1$):',
        step2: 'Skriv lygtens stedvektor som søjlevektor:',
        step3: 'Matrix gange vektor — gang ud række for række:',
        step4: 'Resultat: lygten sidder nu i $(0, 3, 5)$ — drejet $90°$ i $xy$-planen, $z$ uændret:',
        kai_comment: 'Præcis sådan fungerer hvert billede i min motor: tusindvis af vertices multipliceres med model-matricen, så med view-matricen (kameraposition) og så med projektionsmatricen (perspektiv). Tre matrixmultiplikationer pr. vertex — og GPU\'en gør det på millisekunder!',
      },
      player_states: {
        title: 'Spilleradfærd som Markovkæde',
        context: 'I "Hafenlichter 3D" skifter spillerne mellem at udforske (U) og kæmpe (K). Kai har observeret: den, der udforsker, bliver ved med at udforske i $70\\%$ af tilfældene og skifter til kamp i $30\\%$. Den, der kæmper, bliver i kamp i $80\\%$ og udforsker igen i $20\\%$. Lige nu udforsker $60\\%$ af spillerne.',
        step1: 'Opstil overgangsmatricen $T$ og startvektoren $\\vec{v}_0$:',
        step2: 'Beregn ét skridt — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:',
        step3: 'Bestem fixvektoren — løs ligningssystemet $T \\cdot \\vec{v} = \\vec{v}$ med $x + y = 1$:',
        step4: 'På lang sigt udforsker $40\\%$ og kæmper $60\\%$ — uafhængigt af starten:',
        kai_comment: 'Det er guld værd for mit spildesign! Fixvektoren viser mig, at spillerne på lang sigt kæmper mere, end de udforsker — uanset hvordan de starter. Vil jeg have det mere balanceret, skal jeg ændre overgangssandsynlighederne. Matricer gør spilleradfærd beregnelig!',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Computergrafik og 3D-motorer',
        desc: 'Enhver 3D-motor (Unity, Unreal, Godot) bygger på matrixmultiplikation. MVP-pipelinen — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — transformerer hvert 3D-punkt til den 2D-skærm. Moderne GPU\'er er i kernen massive matrixmultiplikationsmaskiner.',
      },
      google_pagerank: {
        title: 'Googles PageRank',
        desc: 'Googles oprindelige søgealgoritme modellerer nettet som en gigantisk stokastisk matrix: hver webside er en tilstand, hvert link en overgangssandsynlighed. Fixvektoren $\\vec{r} = T \\cdot \\vec{r}$ giver rangordenen — siderne med de højeste værdier i fixvektoren ligger øverst.',
      },
      robotics: {
        title: 'Robotteknik og maskinstyring',
        desc: 'Robotarme består af led, der hver udfører en rotation. Håndens samlede position fremkommer som produktet af alle rotationsmatricer langs armen. Det kaldes fremadrettet kinematik — og den inverse matrix løser det omvendte problem: "hvilke ledvinkler skal jeg bruge til denne håndposition?"',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Behandle matrixmultiplikation som talmultiplikation: $A \\cdot B = B \\cdot A$',
        correct: 'Matricer er IKKE kommutative: generelt $A \\cdot B \\neq B \\cdot A$',
        why: 'Først dreje og så flytte giver et andet resultat end først flytte og så dreje. I 3D-grafik fører ombyttet rækkefølge til helt forkerte positioner. Derfor: læs altid transformationskæder fra højre mod venstre!',
        kai_warning: 'Jeg ledte engang en hel dag efter en fejl, fordi jeg havde byttet om på rotation og translation. Mine skibe drejede om verdens centrum i stedet for deres egen akse! Siden læser jeg altid matrixkæder fra højre mod venstre: $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$ — først rotere, så flytte.',
      },
      stochastic_rows_cols: {
        wrong: 'Antage rækkesum = 1 ved stokastiske matricer med søjlevektorer',
        correct: 'Ved søjlevektorer skal søjlesummen være 1: $\\sum_i t_{ij} = 1$',
        why: 'Konventionen afhænger af, om du bruger række- eller søjlevektorer. I skolen og på tyske universiteter er søjlevektoren standard — så skal søjlerne i overgangsmatricen summe til 1. Hver søjle beskriver: "fra tilstand $j$ — hvordan fordeler overgangene sig?"',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'Det er udgivelsesaften i Hamborgs havn. Lysene fra anløbsbroerne spejler sig i vandet, og på det store lærred foran fiskemarkedet lyser titlen: "Hafenlichter 3D". Kai står på scenen med mikrofonen i hånden og kan næsten ikke fatte det — tre års udvikling, og nu er spillet endelig færdigt. I publikum får han øje på to kendte ansigter: Mia, der dengang satte det hele i gang med sit 2D-pixelartspil, og Amir, hvis DataPulse-algoritmer styrer NPC\'ernes AI. "Kan I huske", siger Kai i mikrofonen, "dengang Mia begyndte med lineære funktioner for at flytte spilfigurer langs en linje? Så byggede Amir datapipelinen med afledede og binomialfordeling. Og nu står vi her — med matricer, integraler og normalfordeling har vi skabt en komplet 3D-verden." Mængden jubler. Men før festen for alvor går i gang, har Kai en sidste udfordring: matematikeksamen.',
      challenge: 'Den største prøve venter — eksamen forener analyse, analytisk geometri og stokastik i én opgave. Kai har brug for en strategi, der forbinder alle emner, maksimerer point og undgår de typiske fejl.',
      outro: 'Udgivelsesfesten i havnen kører, musikken spiller, og Kai, Mia og Amir skåler. "Tre års matematik", siger Mia, "fra den rette linje til normalfordelingen." "Fra data til neurale netværk", tilføjer Amir. "Fra 2D-pixels til 3D-motor", slutter Kai. De ser ud over Elben, hvor havnelysene danser — hvert eneste et vertex, transformeret af en matrix, oplyst af en eksponentialfunktion, balanceret af en normalfordeling. Matematik var aldrig bare regning. Det var det sprog, de gjorde deres idéer virkelige med. Spillet er udgivet. Eksamen kommer. Og uanset hvordan den går — rejsen var det værd. Hver funktion, hver afledet, hvert integral har ført dem hertil. Til havnen. Til målet. Og til begyndelsen på alt det, der endnu kommer.',
    },
    objectives: {
      exam_strategy: 'Udvikle en klar eksamensstrategi: se opgaverne igennem, beregn point-tid-forholdet, lette opgaver først',
      cross_topic_connections: 'Genkende og udnytte forbindelser mellem analyse, analytisk geometri og stokastik',
      time_management: 'Planlægge tidsbudgettet pr. opgave realistisk og holde det',
      error_prevention: 'Genkende typiske fejl, foretage plausibilitetstjek og fortolke resultater i sagsammenhængen',
    },
    explanation: {
      intro: 'Eksamen er ikke en sprint, men et strategispil — som en slutboss med flere faser. Du har ca. 4 til 5 timer til tre store emneblokke. Nøglen er ikke at vide alt, men at prioritere klogt og arbejde ordentligt. Kai lærte det med sit spil: "Du kan ikke rette hver bug på én gang. Du retter dem, der har størst effekt — og præcis sådan går du til eksamen."',
      kai_rallying: 'Folkens, vi har lavet matematik i tre år — ikke fordi vi skulle, men fordi det var nøglen til vores projekter. Mia begyndte med funktioner, Amir trænede sin AI med stokastik, og jeg byggede en 3D-verden med matricer. Eksamen er bare rulleteksterne efter slutkampen. Vi er klar!',
      structure: 'Prøven består typisk af tre obligatoriske dele — analyse (ofte den største blok), analytisk geometri og stokastik. Pointene fordeler sig omtrent sådan:',
      time_strategy: 'Planlæg din tid proportionalt med pointene. Giver en opgave 10 ud af 100 point, så invester ca. $10\\%$ af din tid. Og den gyldne regel: begynd med de opgaver, du er sikker på. Hvert sikkert point tæller lige så meget som et hårdt tilkæmpet!',
      mia_wisdom: 'Husk det grundlæggende! En funktionsundersøgelse er altid det samme skema: definitionsmængde, nulpunkter, ekstremumssteder, vendepunkter, opførsel for $x \\to \\pm\\infty$. Kender I mønstret, er hver funktion bare en variation af det. Det lærte jeg med mine spilfigurer — enhver bevægelse er i kernen en funktion.',
      checking: 'Efter hver delopgave: plausibilitetstjek! Passer enhederne? Giver fortegnene mening? Ligger resultatet i et realistisk område? En sandsynlighed større end 1 eller et negativt areal er øjeblikkelige advarselssignaler — så er det bedre at regne efter end at fortsætte.',
      amir_data: 'Jeg tjekker altid mine resultater mod grænsetilfælde: hvad sker der ved $x = 0$? Ved meget store $x$? Konvergerer min løsning, eller divergerer den? Den tankegang fra fejlsøgning gælder præcis lige så meget til prøven. Og i stokastik: tjek altid, om $\\sum P = 1$ gælder!',
      confidence: 'Det vigtigste til sidst: du ved mere, end du tror. Tre års øvelse sidder i dine hænder. Går du i stå et øjeblik under prøven — træk vejret, læs opgaven igen, og begynd med det, du kan med sikkerhed. Hvert point tæller. Og husk: matematik er ikke talent, men et sprog, du har lært. Tal det.',
    },
    concepts: {
      read_then_plan: {
        title: 'Læse → planlægge → regne → tjekke',
        desc: 'Fire-trinsskemaet til hver opgave: (1) læs opgaven helt igennem og marker informationen. (2) planlæg løsningsstrategien — hvilke metoder har du brug for? (3) regn pænt og overskueligt. (4) tjek resultatet: enheder, fortegn, plausibilitet, sagsammenhæng.',
      },
      point_maximizing: {
        title: 'Pointeffektivitet',
        desc: 'Ikke alle opgaver er lige svære pr. point. Begynd med de opgaver, hvor du henter flest point på kortest tid. De sidste delopgaver er ofte de sværeste — det er bedre først at samle alle de "lette" point i alle opgaver og så vende tilbage til de svære.',
      },
      plausibility_check: {
        title: 'Plausibilitetstjek',
        desc: 'Fire hurtige tjek, der forhindrer sjuskefejl: (1) enheder: passer enheden til sammenhængen? (2) fortegn: giver et negativt tal mening her? (3) grænseværdier: hvad sker der for $x \\to 0$ eller $x \\to \\infty$? (4) skitse: passer resultatet til den grafiske forestilling?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Typisk analyseopgave: funktionsundersøgelse + integral',
        context: 'Kai modellerer energiforbruget i sin 3D-motor med $f(x) = (2x - 1) \\cdot e^{-x}$. Bestem ekstremumsstederne, og beregn arealet mellem grafen og $x$-aksen på $[0;\\, 3]$.',
        step1: 'Opstil funktionen — her allerede givet:',
        step2: 'Afledet med produktreglen: $u = 2x - 1$, $v = e^{-x}$, altså $f\'(x) = u\' \\cdot v + u \\cdot v\'$:',
        step3: 'Find ekstremumsstedet — sæt $f\'(x) = 0$ ($e^{-x} > 0$ altid, altså parentesen = 0):',
        step4: 'Arealberegning — partiel integration eller bestemmelse af stamfunktionen:',
        mia_comment: 'Det er præcis det mønster, jeg mener: afledet med produktreglen, find nulpunktet, beregn integralet. Funktionen skifter, men strategien er altid den samme. Øv, indtil det kører af sig selv!',
      },
      mixed_stochastik: {
        title: 'Typisk stokastikopgave: hypotesetest',
        context: 'Amirs A/B-test viser: af 50 brugere klikker normalt $8\\%$ på den nye knap. Efter et redesign vil han teste, om klikraten er steget ($\\alpha = 5\\%$).',
        step1: 'Opstil modellen — binomialfordeling med parametrene:',
        step2: 'Formulér hypoteserne — ensidet test opad:',
        step3: 'Søg det kritiske område — test $k = 8$ ($P$ stadig for stor):',
        step4: 'Bestem forkastelsesområdet — fra $k = 9$ forkastes $H_0$:',
        amir_comment: 'Hypotesetest er i kernen beslutningslogik: du beregner, hvor usandsynligt dit resultat er under $H_0$. Er det mere usandsynligt end $\\alpha$, forkaster du $H_0$. Præcis sådan træffer jeg databaserede beslutninger hos DataPulse — bare med større stikprøver!',
      },
    },
    realworld: {
      release_day: {
        title: 'Udgivelsesdag: når alt falder på plads',
        desc: 'At udgive et spil er som en eksamen: måneders forberedelse munder ud i ét afgørende øjeblik. Kais "Hafenlichter 3D" forener 2D-grundlaget (Mia), dataanalysen (Amir) og 3D-matematikken (Kai) — præcis som eksamen forener analyse, geometri og stokastik. Forberedelse er alt.',
      },
      project_management: {
        title: 'Projektledelse og prioritering',
        desc: 'I softwareudvikling prioriterer du funktioner efter effekt og indsats — præcis som eksamensopgaver efter point og sværhedsgrad. Formlen $\\text{Effektivitet} = \\frac{\\text{Point}}{\\text{Tid}}$ gælder lige så meget i arbejdslivet: koncentrer dig om det, der gør den største forskel.',
      },
      lifelong_learning: {
        title: 'Livslang læring',
        desc: 'Eksamen er ikke slutningen, men begyndelsen. Mia læser spildesign, Amir data science og Kai medieinformatik — og overalt har de brug for matematik. Evnen til at sætte sig ind i nye emner er mere værd end nogen enkelt formel. Matematikken har lært jer at tænke.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Skrive resultatet uden enhed og uden sagsammenhæng: "$A = 12{,}5$"',
        correct: 'Altid enhed og fortolkning: "$A = 12{,}5\\,\\text{AE}$, hvilket svarer til $12{,}5\\,\\text{m}^2$"',
        why: 'Til eksamen gives der point for fortolkningen i sagsammenhængen! Et nøgent resultat uden enhed eller forbindelse til opgaveteksten koster dig lette point. Skriv altid en svarsætning: "Arealet er $12{,}5\\,\\text{m}^2$, hvilket svarer til parkens beplantede areal."',
        kai_warning: 'I spiludvikling har tal uden sammenhæng ingen værdi. 12,5 — hvad? Pixels? Sekunder? Skadespoint? Ligeså til prøven: skriv enheden på, og formulér en svarsætning. Det er foræringspoint!',
      },
      skip_plausibility: {
        wrong: 'Ikke sætte spørgsmålstegn ved et åbenlyst forkert resultat: $P(X = 5) = 1{,}3$',
        correct: 'Studse med det samme: en sandsynlighed kan aldrig være større end 1!',
        why: 'Plausibilitetstjek koster 10 sekunder, men kan redde hele opgaver. Sandsynligheder ligger altid mellem 0 og 1, arealer er aldrig negative, og $e^x > 0$ for alle $x$. Bryder dit resultat med disse grundregler, ligger der en regnefejl bag.',
        mia_warning: 'Til min sidste prøve fandt jeg præcis sådan en fejl: mit integral var negativt, selv om funktionen var positiv på hele intervallet. Hurtigt tjek, fortegnsfejl opdaget, rettet — 4 point reddet. Tjek altid!',
      },
    },
  },
};
