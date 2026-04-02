export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai staar foran det endelige balanceringsproblem i "Havnelys 3D": Loot-drops skal foeles fair, men stadig spaendende. "Jeg har brug for en fordeling, der ser naturlig ud — mange vaerdier taet paa gennemsnittet, faa ekstremer", siger Kai. Svaret fra stokastikforelæsningen: normalfordelingen med sin perfekte klokkekurve.',
      challenge: 'Kai skal kalibrere loot- og ydeevnesystemet, saa beloenninger er fair fordelt, og frametider holder sig under den kritiske graense.',
      outro: 'Med normalfordelingen har Kai bygget et elegant balanceringssystem: Loot-drops foelger en klokkekurve omkring maalvaerdien, og sigmareglerne garanterer, at afvigere er ekstremt sjaeldne.',
    },
    objectives: {
      bell_curve: 'Forstaa normalfordelingen $N(\\mu, \\sigma^2)$ som kontinuert fordeling med klokkekurve og fortolke parametrene',
      sigma_rules: 'Anvende sigmareglerne ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) til hurtige sandsynlighedsoverslag',
      z_transformation: 'Gennemfoere $z$-transformationen og beregne sandsynligheder med standardnormalfordelingen $\\Phi(z)$',
      central_limit_theorem: 'Kende Den centrale graensevaerdisaetning og forklare, hvorfor normalfordelingen dukker op overalt',
    },
    explanation: {
      intro: 'Normalfordelingen er den vigtigste kontinuerte fordeling i statistikken. Dens taethed har den ikoniske klokkeform, symmetrisk omkring forventningsvaerdien $\\mu$. Standardafvigelsen $\\sigma$ bestemmer, hvor bred eller smal klokken er:',
      sigma_rules: 'Sigmareglerne er dit hurtigvaerktoej: De fortaeller dig straks, hvor mange procent af alle vaerdier der ligger i et bestemt omraade omkring $\\mu$:',
      kai_tip: 'I spiludviklingen bruger jeg sigmareglerne dagligt til balancering. Naar jeg vil have, at 95% af loot-drops ligger mellem 30 og 70 guld, saetter jeg $\\mu = 50$ og $2\\sigma = 20$, altsaa $\\sigma = 10$. Faerdigt!',
      z_transformation: 'Men hvad hvis du har brug for en eksakt sandsynlighed? Saa kommer $z$-transformationen: Du omregner din vaerdi $x$ til en standardiseret $z$-vaerdi og slaar op i tabellen for standardnormalfordelingen $\\Phi(z)$:',
      central_limit: 'Hvorfor er normalfordelingen saa allestedsnaervaerende? Den centrale graensevaerdisaetning giver svaret: Naar du adderer nok uafhaengige stokastiske stoerelser, naermer summen sig en normalfordeling:',
    },
    concepts: {
      normal_distribution: { title: 'Normalfordeling $N(\\mu, \\sigma^2)$', desc: 'Den kontinuerte fordeling med klokkeformet taethed. $\\mu$ er forventningsvaerdien, $\\sigma^2$ variansen. Symmetrisk omkring $\\mu$.' },
      sigma_rules: { title: 'Sigmaregler', desc: 'De tre gyldne regler: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$.' },
      z_transformation: { title: '$z$-transformation', desc: 'Goer enhver normalfordeling om til standardnormalfordelingen $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Derefter aflaes $P(X \\leq x) = \\Phi(z)$ i tabellen.' },
    },
    examples: {
      loot_balancing: { title: 'Loot-drop-sandsynlighed', context: 'Bosser dropper guld, normalfordelt med $\\mu = 50$ og $\\sigma = 8$. Hvor sandsynligt er mindst 70 guld?', step1: 'Opstil model:', step2: 'Anvend $z$-transformation:', step3: 'Slaa op i tabel — $\\Phi(2{,}5)$:', step4: 'Beregn modsandsynlighed — kun $0{,}6\\%$ faar 70+ guld:', kai_comment: 'Perfekt! Et legendaert drop ved under 1% af spillerne — det foeles saerligt uden at vaere unfair.' },
      frame_times: { title: 'Frametid-analyse', context: 'Ved 60 FPS skal hvert frame renderes paa $16{,}7\\,\\text{ms}$. Frametider er normalfordelt med $\\mu = 16{,}7$ og $\\sigma = 2{,}1$.', step1: 'Opstil model:', step2: 'Anvend $z$-transformation for lag-graensen $x = 20$:', step3: 'Aflaes tabelvaerdi:', step4: 'Beregn modsandsynlighed — ca. hvert 17. frame lagger:', kai_comment: 'Naesten 6% lags — det er for meget til et flydende 3D-spil.' },
    },
    realworld: {
      quality_control: { title: 'Kvalitetskontrol i industrien', desc: 'Fabrikker bruger $3\\sigma$-reglen: Naar en komponent afviger mere end $3\\sigma$ fra maalmaalet, sorteres den fra.' },
      iq_scores: { title: 'IQ-tests og standardisering', desc: 'IQ-vaerdier er per definition normalfordelt med $\\mu = 100$ og $\\sigma = 15$.' },
      stock_returns: { title: 'Aktieafkast og risiko', desc: 'Daglige aktieafkast modelleres ofte som normalfordelt — $\\sigma$ er da risikoen.' },
    },
    mistakes: {
      sigma_vs_variance: { wrong: 'Notere normalfordelingen med $N(\\mu, \\sigma)$', correct: 'Korrekt er $N(\\mu, \\sigma^2)$ — den anden parameter er altid variansen', why: 'Forvekslinger foerer til helt forkerte sandsynligheder.' },
      z_sign: { wrong: '$z$-formlen forkert vej: $z = \\frac{\\mu - x}{\\sigma}$', correct: 'Rigtigt er $z = \\frac{x - \\mu}{\\sigma}$', why: 'En vaerdi over gennemsnittet skal give positiv $z$, en under negativ.' },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai er ved hjertestykket af "Havnelys 3D": 3D-motoren. Ethvert objekt i spillet skal drejes, skaleres og flyttes. "I 3D har du brug for et system, der kaeder vilkaarligt mange transformationer sammen — og det er matricer." Kai aabner shader-koden og ser matricer overalt.',
      challenge: 'Kai skal forstaa og implementere 3D-transformationerne til sin spilmotor — rotation, skalering og overgangsprocesser, alt styret af matrixmultiplikation.',
      outro: 'Matricer er blevet Kais daglige vaerktoej: Enhver 3D-transformation er en matrix, enhver animation en foelge af matrixmultiplikationer. "Uanset hvor kompleks transformationen — til sidst er det altid $\\vec{x}\' = M \\cdot \\vec{x}$", siger han.',
    },
    objectives: {
      matrix_operations: 'Addere og multiplicere matricer og anvende regnereglerne sikkert — isaer ikke-kommutativiteten',
      transformation_matrices: 'Opstille transformationsmatricer til rotation, skalering og spejling og anvende dem paa vektorer',
      stochastic_matrices: 'Beregne stokastiske matricer og fiksvektorer til overgangsprocesser',
      inverse_matrix: 'Bestemme den inverse matrix og forstaa dens betydning som "tilbagetransformation"',
    },
    explanation: {
      intro: 'Matricer er rektangulaere taltabeller — men deres sande kraft ligger i, at de repraesenterer afbildninger. Multiplikation betyder: Raekke gange soejle, derefter summere:',
      transformation: 'I 3D-grafik er enhver geometrisk transformation en matrix: Rotation, skalering, spejling:',
      kai_tip: 'I min motor kaeder jeg transformationer ved matrixmultiplikation: Foerst skalere, saa rotere, saa flytte. Raekkeffoelgen er afgoerende — matricer er ikke kommutative!',
      stochastic: 'Stokastiske matricer beskriver overgangsprocesser: Hvor sandsynligt er det at gaa fra en tilstand til en anden?',
      inverse: 'Den inverse matrix $A^{-1}$ er "fortryd-knappen": $A \\cdot A^{-1} = I$ (identitetsmatricen). Ikke enhver matrix har en invers — kun naar $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: { title: 'Matrixmultiplikation', desc: 'Raekke gange soejle. Vigtigt: $A \\cdot B \\neq B \\cdot A$ generelt! Raekkeffoelge taeller.' },
      transformation_matrix: { title: 'Transformationsmatrix', desc: 'Enhver lineaer afbildning kan fremstilles som matrix. Flere transformationer kaedes sammen ved matrixmultiplikation — laest fra hoejre mod venstre.' },
      stochastic_matrix: { title: 'Stokastisk matrix og fiksvektor', desc: 'En stokastisk matrix har soejlesum 1. Fiksvektoren $\\vec{v}_{\\text{fix}}$ med $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ er den langsigtede ligevaegtstilstand.' },
    },
    examples: {
      '3d_rotation': { title: '3D-rotation af et havnelys', context: 'Kai vil dreje en lanterne i havnen $90°$ om $z$-aksen.', step1: 'Opstil rotationsmatrix for $90°$:', step2: 'Skriv stedvektor som soejlevektor:', step3: 'Matrix gange vektor:', step4: 'Resultat: Lanternen sidder nu ved $(0, 3, 5)$ — drejet $90°$:', kai_comment: 'Praecis saadan fungerer hvert frame i min motor: Tusindvis af vertices multipliceres med Model-, View- og Projection-matricen.' },
      player_states: { title: 'Spilleradfaerd som Markov-kaede', context: 'Spillere skifter mellem Udforske (U) og Kampe (K).', step1: 'Opstil overgangsmatrix $T$ og startvektor:', step2: 'Beregn et skridt — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:', step3: 'Bestem fiksvektor — loes $T \\cdot \\vec{v} = \\vec{v}$:', step4: 'Langsigtet udforsker 40% og kaemper 60%:', kai_comment: 'Det er guld for mit spildesign! Fiksvektoren viser mig langsigtet spilleradfaerd.' },
    },
    realworld: {
      computer_graphics: { title: 'Computergrafik og 3D-motorer', desc: 'Enhver 3D-motor baserer sig paa matrixmultiplikation. Moderne GPUer er i kernen massive matrixmultiplikationsmaskiner.' },
      google_pagerank: { title: 'Google PageRank', desc: 'Googles oprindelige soegealgoritme modellerer nettet som en enorm stokastisk matrix. Fiksvektoren giver rangeringen.' },
      robotics: { title: 'Robotik og maskinstyring', desc: 'Robotarme bestaar af led, der udfoeerer rotationer. Totalpositionen er produktet af alle rotationsmatricer langs armen.' },
    },
    mistakes: {
      commutative: { wrong: 'Behandle matrixmultiplikation som talmultiplikation: $A \\cdot B = B \\cdot A$', correct: 'Matricer er IKKE kommutative: $A \\cdot B \\neq B \\cdot A$ generelt', why: 'Foerst dreje, saa flytte giver et andet resultat end foerst flytte, saa dreje.', kai_warning: 'Jeg sogte en hel dag efter en bug, fordi jeg byttede rotation og translation. Mine skibe roterede om verdensmidtpunktet i stedet for deres egen akse!' },
      stochastic_rows_cols: { wrong: 'Raekkesum = 1 antaget ved stokastiske matricer med soejlevektorer', correct: 'Ved soejlevektorer skal soejlesummen vaere 1', why: 'Konventionen afhaenger af, om du bruger raekke- eller soejlevektorer. I skolen er soejlevektorer standard.' },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'Det er udgivelsesnat ved Hamburgs havn. Lysene fra Landungsbruecken spejler sig i vandet, og paa det store laerred lyser titlen: "Havnelys 3D". Kai staar paa scenen. I publikum opdager han Mia og Amir. "Husker I", siger Kai, "da Mia begyndte med lineaere funktioner? Og nu staar vi her — med matricer, integraler og normalfordeling har vi skabt en komplet 3D-verden." Men foer festen starter, har Kai en sidste udfordring: matematik-eksamenen.',
      challenge: 'Den stoerste proeve staar for doeren — eksamenen forener analyse, analytisk geometri og stokastik i en skriftlig proeve.',
      outro: 'Udgivelsesfesten koerer, musikken spiller, og Kai, Mia og Amir skaaler. Matematik var aldrig bare regning. Det var sproget, de brugte til at goere deres ideer til virkelighed. Spillet er udgivet. Proeven kommer. Og uanset hvordan den gaar — rejsen var det vaerd.',
    },
    objectives: {
      exam_strategy: 'Udvikle en klar eksamensstrategi: Gennemse opgaver, beregne point-tid-forhold, nemme opgaver foerst',
      cross_topic_connections: 'Genkende og udnytte forbindelser mellem analyse, analytisk geometri og stokastik',
      time_management: 'Planlaegge tidsbudgettet per opgave realistisk og overholde det',
      error_prevention: 'Genkende typiske fejl, gennemfoere plausibilitetskontroller og fortolke resultater i kontekst',
    },
    explanation: {
      intro: 'Eksamenen er ikke en sprint, men et strategisk spil — som en Endgame-boss med flere faser. Du har ca. 4 til 5 timer til tre store temablokke. Noeglen er ikke at vide alt, men at prioritere klogt og arbejde ordentligt.',
      kai_rallying: 'Folk, vi har lavet matematik i tre aar — ikke fordi vi skulle, men fordi det var noeglen til vores projekter. Vi er klar!',
      structure: 'Eksamenen bestaar typisk af tre obligatoriske dele — Analyse (ofte den stoerste), Analytisk geometri og Stokastik.',
      time_strategy: 'Planlaeg din tid proportionalt med pointene. Gyldne regel: Begynd med opgaverne, hvor du er sikker.',
      mia_wisdom: 'Husk det grundlaeggende! Funktionsanalyse er altid samme skema: Definitionsmaengde, nulpunkter, ekstrema, vendepunkter, adfaerd for $x \\to \\pm\\infty$.',
      checking: 'Efter hver delopgave: Plausibilitetskontrol! Stemmer enhederne? Giver fortegnene mening?',
      amir_data: 'Jeg tjekker mine resultater altid mod graensetilfaelde: Hvad sker for $x = 0$? For meget store $x$?',
      confidence: 'Det vigtigste til sidst: Du ved mere, end du tror. Tre aars oevelse sidder i haenderne.',
    },
    concepts: {
      read_then_plan: { title: 'Laes → Planlaeg → Regn → Tjek', desc: '4-trins-skemaet til enhver opgave: (1) Laes opgaven fuldstaendigt. (2) Planlaeg loesningsstrategi. (3) Regn ordentligt. (4) Tjek resultatet.' },
      point_maximizing: { title: 'Pointeffektivitet', desc: 'Ikke enhver opgave er lige svaer per point. Begynd med opgaverne, hvor du faar flest point paa kortest tid.' },
      plausibility_check: { title: 'Plausibilitetskontrol', desc: 'Fire hurtige tjek: (1) Enheder: Passer enheden til konteksten? (2) Fortegn: Giver negativt mening her? (3) Graensevaerdier: Hvad sker for $x \\to 0$ eller $x \\to \\infty$? (4) Skitse: Passer resultatet til den grafiske forestilling?' },
    },
    examples: {
      mixed_analysis: { title: 'Typisk analyseopgave: Kurveanalyse + Integral', context: 'Kai modellerer energiforbruget af 3D-motoren med $f(x) = (2x - 1) \\cdot e^{-x}$.', step1: 'Funktion givet:', step2: 'Differentier med produktreglen:', step3: 'Find ekstrema — saet $f\'(x) = 0$:', step4: 'Arealberegning — partiel integration:', mia_comment: 'Det er praecis moenstret, jeg mener: Differentier med produktregel, find nulpunkt, beregn integral. OEv, til det koerer automatisk!' },
      mixed_stochastik: { title: 'Typisk stokastikopgave: Hypotesetest', context: 'Amirs A/B-test: Af 50 brugere klikker normalt 8% paa den nye knap. Er klikraten steget?', step1: 'Opstil model — binomialfordeling:', step2: 'Formuler hypoteser — ensidig opad:', step3: 'Soeg efter kritisk omraade:', step4: 'Bestem forkastelsesomraade:', amir_comment: 'Hypotesetests er beslutningslogik i kernen.' },
    },
    realworld: {
      release_day: { title: 'Udgivelsesdag: Naar alt kommer sammen', desc: 'At udgive et spil er som en eksamen: Maaneders forberedelse munder ud i et afgoerende oejeblik.' },
      project_management: { title: 'Projektledelse og prioritering', desc: 'I softwareudvikling prioriterer du features efter effekt og indsats — praecis som eksamensopgaver efter point og svaerhedsgrad.' },
      lifelong_learning: { title: 'Livslang laering', desc: 'Eksamenen er ikke slutningen, men begyndelsen. Evnen til at saette sig ind i nye emner er mere vaerdifuld end enhver enkelt formel.' },
    },
    mistakes: {
      no_units_context: { wrong: 'Skrive resultat uden enhed og kontekst: "$A = 12{,}5$"', correct: 'Altid enhed og fortolkning: "$A = 12{,}5\\,\\text{FE}$, det svarer til $12{,}5\\,\\text{m}^2$"', why: 'Til eksamen gives der point for fortolkning i kontekst!', kai_warning: 'Tal uden kontekst har ingen vaerdi. Skriv enheden og formuler et svarsaetning.' },
      skip_plausibility: { wrong: 'Ikke stille spoergsmaalstegn ved et aabenbart forkert resultat: $P(X = 5) = 1{,}3$', correct: 'Straks studs: En sandsynlighed kan aldrig vaere stoerre end 1!', why: 'Plausibilitetskontroller koster 10 sekunder, men kan redde hele opgaver.', mia_warning: 'Jeg fandt praecis saadan en fejl i min sidste proeve: Mit integral var negativt, selv om funktionen var positiv i hele intervallet. Hurtig kontrol, fortegnsfejl fundet, rettet — 4 point reddet.' },
    },
  },
};
