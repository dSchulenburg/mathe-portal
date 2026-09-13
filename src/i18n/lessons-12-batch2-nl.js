export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai staat voor het laatste balancingprobleem van "Hafenlichter 3D": de loot-drops moeten eerlijk aanvoelen, maar toch spannend zijn. Als elke boss precies evenveel goud dropt, is het saai — te veel variatie en de spelers klagen over oneerlijkheid. "Ik heb een verdeling nodig die natuurlijk oogt — veel waarden dicht bij het gemiddelde, weinig extreme waarden", zegt Kai tegen zijn collega Priya. Het antwoord uit het college kansrekening: de normale verdeling met haar perfecte klokvorm.',
      challenge: 'Kai moet het loot- en prestatiesysteem van "Hafenlichter 3D" zo kalibreren dat beloningen eerlijk verdeeld zijn en frametijden onder de kritieke drempel blijven — de normale verdeling en haar sigmaregels leveren daarvoor het gereedschap.',
      outro: 'Met de normale verdeling heeft Kai een elegant balancingsysteem gebouwd: loot-drops volgen een klokcurve rond de streefwaarde, en de sigmaregels garanderen dat uitschieters extreem zeldzaam zijn. "Het mooie is: ik kan nu precies berekenen hoeveel procent van de spelers een bepaalde dropwaarde krijgt", legt hij het team uit. En met de $z$-transformatie vergelijkt hij totaal verschillende meetwaarden — frametijden, schadeverdeling, speelduur — op één uniforme schaal. De klokcurve zit overal.',
    },
    objectives: {
      bell_curve: 'De normale verdeling $N(\\mu, \\sigma^2)$ begrijpen als continue verdeling met klokcurve en haar parameters interpreteren',
      sigma_rules: 'De sigmaregels ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) toepassen voor snelle kansschattingen',
      z_transformation: 'De $z$-transformatie uitvoeren en kansen berekenen met de standaardnormale verdeling $\\Phi(z)$',
      central_limit_theorem: 'De centrale limietstelling kennen en uitleggen waarom de normale verdeling overal opduikt',
    },
    explanation: {
      intro: 'De normale verdeling is de belangrijkste continue verdeling in de statistiek — en je komt haar overal tegen: bij lichaamslengtes, meetwaarden, frametijden, examenresultaten. Haar dichtheid heeft de iconische klokvorm, symmetrisch rond de verwachtingswaarde $\\mu$. De standaardafwijking $\\sigma$ bepaalt hoe breed of smal de klok is: kleine $\\sigma$ = smalle, hoge klok (weinig spreiding), grote $\\sigma$ = brede, platte klok (veel spreiding). De dichtheidsfunctie luidt:',
      sigma_rules: 'De sigmaregels zijn je snelle gereedschap: ze vertellen je meteen hoeveel procent van alle waarden in een bepaald gebied rond $\\mu$ ligt — zonder tabel, zonder rekenmachine. Binnen $\\pm 1\\sigma$ ligt ca. $68{,}3\\%$, binnen $\\pm 2\\sigma$ ca. $95{,}4\\%$ en binnen $\\pm 3\\sigma$ bijna alles — $99{,}7\\%$. Dat betekent: waarden voorbij $3\\sigma$ zijn extreem zeldzaam!',
      kai_tip: 'In gameontwikkeling gebruik ik de sigmaregels elke dag bij het balancen. Als ik wil dat 95% van de loot-drops tussen 30 en 70 goud ligt, stel ik $\\mu = 50$ en $2\\sigma = 20$ in, dus $\\sigma = 10$. Klaar! De regels geven me meteen de verdeling, zonder dat ik iets hoef te integreren.',
      z_transformation: 'Maar wat als je een exacte kans nodig hebt — niet alleen de sigmaregels? Dan komt de $z$-transformatie in beeld: je rekent je waarde $x$ om naar een gestandaardiseerde $z$-waarde en zoekt die op in de tabel van de standaardnormale verdeling $\\Phi(z)$. De $z$-waarde vertelt je hoeveel standaardafwijkingen $x$ van de verwachtingswaarde af ligt:',
      central_limit: 'Waarom is de normale verdeling zo alomtegenwoordig? De centrale limietstelling geeft het antwoord: als je genoeg onafhankelijke toevalsvariabelen optelt, nadert hun som — hoe de afzonderlijke verdelingen er ook uitzien — een normale verdeling. Daarom zijn gemiddelden bijna altijd normaal verdeeld, zelfs als de afzonderlijke data dat niet zijn:',
    },
    concepts: {
      normal_distribution: {
        title: 'Normale verdeling $N(\\mu, \\sigma^2)$',
        desc: 'De continue verdeling met klokvormige dichtheid. $\\mu$ is de verwachtingswaarde (midden van de klok), $\\sigma^2$ de variantie (breedte van de klok). De oppervlakte onder de curve is altijd 1. Symmetrisch rond $\\mu$: mediaan = modus = verwachtingswaarde.',
      },
      sigma_rules: {
        title: 'Sigmaregels',
        desc: 'De drie gouden regels: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Onmisbaar voor snelle schattingen.',
      },
      z_transformation: {
        title: '$z$-transformatie',
        desc: 'Zet elke normale verdeling om in de standaardnormale verdeling $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Daarna lees je $P(X \\leq x) = \\Phi(z)$ af in de tabel. Zo worden willekeurige normale verdelingen vergelijkbaar.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Kans op een loot-drop',
        context: 'In "Hafenlichter 3D" droppen bosses goud, normaal verdeeld met $\\mu = 50$ en $\\sigma = 8$. Kai wil weten: hoe groot is de kans op een legendarische drop van minstens 70 goud?',
        step1: 'Model opstellen — gouddrops volgen een normale verdeling:',
        step2: 'De $z$-transformatie toepassen — hoeveel standaardafwijkingen ligt 70 van 50 af?',
        step3: 'Opzoeken in de tabel — $\\Phi(2{,}5)$ aflezen:',
        step4: 'Complementaire kans berekenen — slechts $0{,}6\\%$ krijgt 70+ goud:',
        kai_comment: 'Perfect! Een legendarische drop bij minder dan 1% van de spelers — dat voelt bijzonder, zonder oneerlijk te zijn. De normale verdeling geeft me volledige controle over de zeldzaamheid.',
      },
      frame_times: {
        title: 'Frametijd-analyse',
        context: 'Bij 60 FPS moet elk frame in $16{,}7\\,\\text{ms}$ gerenderd worden. De profiler van Kai laat zien: de frametijden zijn normaal verdeeld met $\\mu = 16{,}7\\,\\text{ms}$ en $\\sigma = 2{,}1\\,\\text{ms}$. Hoe vaak laggt het spel (frametijd $> 20\\,\\text{ms}$)?',
        step1: 'Model opstellen — frametijden als normale verdeling:',
        step2: 'De $z$-transformatie voor de lagdrempel $x = 20$:',
        step3: 'Tabelwaarde aflezen:',
        step4: 'Complementaire kans berekenen — ongeveer elk 17e frame laggt:',
        kai_comment: 'Bijna 6% lags — dat is te veel voor een vloeiend 3D-spel. Ik moet de renderer optimaliseren tot $\\sigma$ kleiner wordt. Doel: $\\sigma \\leq 1{,}5$, dan heeft minder dan 1,5% van de frames er last van.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Kwaliteitscontrole in de industrie',
        desc: 'Fabrieken gebruiken de $3\\sigma$-regel: als een onderdeel meer dan $3\\sigma$ van de nominale maat afwijkt, wordt het afgekeurd. Six-Sigma-management gaat nog verder — $6\\sigma$ betekent maximaal 3,4 fouten per miljoen onderdelen. De normale verdeling is het fundament van de industriële kwaliteitsborging.',
      },
      iq_scores: {
        title: 'IQ-tests en standaardisering',
        desc: 'IQ-waarden zijn per definitie normaal verdeeld met $\\mu = 100$ en $\\sigma = 15$. Dat betekent: ca. $68\\%$ van de bevolking heeft een IQ tussen 85 en 115, ca. $95\\%$ tussen 70 en 130. Een IQ van 145 ($z = 3$) is net zo zeldzaam als een loot-drop van 70 goud!',
      },
      stock_returns: {
        title: 'Aandelenrendementen en risico',
        desc: 'Dagelijkse aandelenrendementen worden vaak als normaal verdeeld gemodelleerd — $\\sigma$ is dan het risico. Portefeuillebeheerders gebruiken de $z$-transformatie om te berekenen hoe waarschijnlijk een crash is. Maar let op: in werkelijkheid komen extreme uitschieters vaker voor dan de normale verdeling voorspelt ("fat tails").',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'De normale verdeling genoteerd als $N(\\mu, \\sigma)$ — standaardafwijking in plaats van variantie',
        correct: 'Correct is $N(\\mu, \\sigma^2)$ — de tweede parameter is altijd de variantie',
        why: 'In de notatie $N(\\mu, \\sigma^2)$ staat de tweede parameter voor de variantie $\\sigma^2$, niet voor de standaardafwijking $\\sigma$. Verwisselingen leiden tot volledig verkeerde kansen — bijv. is $N(0, 4)$ een verdeling met $\\sigma = 2$, niet $\\sigma = 4$!',
        kai_warning: 'Deze fout heeft ooit mijn complete loot-balancing verpest. Ik bedoelde $\\sigma = 8$, maar schreef $N(50, 8)$ — dat betekent $\\sigma = \\sqrt{8} \\approx 2{,}83$. De drops waren veel te gelijkmatig! Altijd onthouden: $N(\\mu, \\sigma^2)$!',
      },
      z_sign: {
        wrong: 'De $z$-formule omgekeerd: $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'Juist is $z = \\frac{x - \\mu}{\\sigma}$ — waarde min verwachtingswaarde, niet andersom',
        why: 'Als je de termen in de teller omwisselt, krijg je het verkeerde teken. Een waarde boven het gemiddelde moet een positieve $z$ opleveren, een waarde eronder een negatieve. Bij $x = 70$, $\\mu = 50$ is $z = +2{,}5$ (boven het gemiddelde), niet $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai is aangekomen bij het hart van "Hafenlichter 3D": de 3D-engine. Elk object in het spel — elk schip, elke golf, elke lantaarn in de haven — moet gedraaid, geschaald en verschoven kunnen worden. "In 2D waren transformaties gewoon formules", herinnert hij zich van de beginjaren van Mia. "Maar in 3D heb je een systeem nodig dat willekeurig veel transformaties aan elkaar koppelt — en dat zijn matrices." Kai opent de shadercode en ziet overal matrices: model-matrix, view-matrix, projection-matrix.',
      challenge: 'Kai moet de 3D-transformaties voor zijn game-engine begrijpen en implementeren — rotatie, schaling en overgangsprocessen, allemaal aangestuurd door matrixvermenigvuldiging.',
      outro: 'Matrices zijn voor Kai dagelijks gereedschap geworden: elke 3D-transformatie is een matrix, elke animatie een reeks matrixvermenigvuldigingen, elk overgangsgedrag een stochastische matrix. "Het geniale is: hoe complex de transformatie ook is — uiteindelijk is het altijd $\\vec{x}\' = M \\cdot \\vec{x}$", zegt hij. De MVP-matrix ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) verandert nu duizenden Hafenlichter-vertices per frame in pixels op het scherm.',
    },
    objectives: {
      matrix_operations: 'Matrices optellen, vermenigvuldigen en de rekenregels zeker toepassen — in het bijzonder de niet-commutativiteit',
      transformation_matrices: 'Transformatiematrices voor rotatie, schaling en spiegeling opstellen en op vectoren toepassen',
      stochastic_matrices: 'Stochastische matrices en evenwichtsvectoren voor overgangsprocessen berekenen',
      inverse_matrix: 'De inverse matrix bepalen en haar betekenis als "terugtransformatie" begrijpen',
    },
    explanation: {
      intro: 'Matrices zijn rechthoekige getallentabellen — maar hun echte kracht ligt erin dat ze afbeeldingen weergeven. Een $2 \\times 2$-matrix transformeert 2D-vectoren, een $3 \\times 3$-matrix transformeert 3D-vectoren. Vermenigvuldigen betekent: rij keer kolom, dan optellen. Voor $C = A \\cdot B$ geldt:',
      transformation: 'In 3D-graphics is elke meetkundige transformatie een matrix: rotatie, schaling, spiegeling. De rotatiematrix om de $z$-as draait een punt $(x, y, z)$ over de hoek $\\theta$ — en de $z$-coördinaat blijft ongewijzigd:',
      kai_tip: 'In mijn engine koppel ik transformaties via matrixvermenigvuldiging: eerst schalen, dan roteren, dan verschuiven. De volgorde is daarbij cruciaal — matrices zijn niet commutatief! Eerst draaien en dan verschuiven levert iets totaal anders op dan eerst verschuiven en dan draaien. Daarom lees ik matrixketens altijd van rechts naar links.',
      stochastic: 'Stochastische matrices beschrijven overgangsprocessen: hoe waarschijnlijk is het om van de ene toestand naar de andere te gaan? Elke kolom telt op tot 1 (bij kolomvectoren). Als je de toestandsvector $\\vec{v}_n$ vermenigvuldigt met de overgangsmatrix $T$, krijg je de volgende toestand $\\vec{v}_{n+1}$:',
      inverse: 'De inverse matrix $A^{-1}$ is de "ongedaan maken"-knop: $A \\cdot A^{-1} = I$ (eenheidsmatrix). Als $A$ een rotatie over $30°$ is, dan is $A^{-1}$ de rotatie over $-30°$. Niet elke matrix heeft een inverse — alleen als $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Matrixvermenigvuldiging',
        desc: 'Rij keer kolom: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. Het aantal kolommen van $A$ moet gelijk zijn aan het aantal rijen van $B$. Belangrijk: in het algemeen $A \\cdot B \\neq B \\cdot A$! De volgorde doet ertoe.',
      },
      transformation_matrix: {
        title: 'Transformatiematrix',
        desc: 'Elke lineaire afbeelding (rotatie, schaling, spiegeling) kun je weergeven als matrix. De rotatiematrix $R(\\theta)$ draait vectoren over de hoek $\\theta$. Meerdere transformaties worden via matrixvermenigvuldiging gekoppeld — van rechts naar links gelezen.',
      },
      stochastic_matrix: {
        title: 'Stochastische matrix & evenwichtsvector',
        desc: 'Een stochastische matrix heeft in elke kolom de som 1 — ze beschrijft overgangskansen. De evenwichtsvector $\\vec{v}_{\\text{fix}}$ met $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ is de evenwichtstoestand op lange termijn, ongeacht de begintoestand.',
      },
    },
    examples: {
      '3d_rotation': {
        title: '3D-rotatie van een havenlicht',
        context: 'Kai wil een lantaarn in de haven $90°$ om de $z$-as draaien. De lantaarn staat op het punt $(3, 0, 5)$. Hoe berekent hij de nieuwe positie?',
        step1: 'Rotatiematrix voor $90°$ om de $z$-as opstellen ($\\cos 90° = 0$, $\\sin 90° = 1$):',
        step2: 'De plaatsvector van de lantaarn als kolomvector schrijven:',
        step3: 'Matrix keer vector — rij voor rij uitvermenigvuldigen:',
        step4: 'Resultaat: de lantaarn staat nu op $(0, 3, 5)$ — $90°$ gedraaid in het $xy$-vlak, $z$ ongewijzigd:',
        kai_comment: 'Precies zo werkt elk frame in mijn engine: duizenden vertices worden vermenigvuldigd met de model-matrix, dan met de view-matrix (camerapositie), dan met de projection-matrix (perspectief). Drie matrixvermenigvuldigingen per vertex — en de GPU doet dat in milliseconden!',
      },
      player_states: {
        title: 'Spelersgedrag als Markov-keten',
        context: 'In "Hafenlichter 3D" wisselen spelers tussen verkennen (V) en vechten (G). Kai heeft waargenomen: wie verkent, blijft voor $70\\%$ verkennen en gaat voor $30\\%$ vechten. Wie vecht, blijft voor $80\\%$ vechten en gaat voor $20\\%$ weer verkennen. Op dit moment verkent $60\\%$ van de spelers.',
        step1: 'Overgangsmatrix $T$ en beginvector $\\vec{v}_0$ opstellen:',
        step2: 'Eén stap berekenen — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:',
        step3: 'Evenwichtsvector bepalen — stelsel $T \\cdot \\vec{v} = \\vec{v}$ met $x + y = 1$ oplossen:',
        step4: 'Op lange termijn verkent $40\\%$ en vecht $60\\%$ — onafhankelijk van de start:',
        kai_comment: 'Dit is goud voor mijn gamedesign! De evenwichtsvector laat me zien dat de spelers op lange termijn meer vechten dan verkennen — hoe ze ook beginnen. Als ik het evenwichtiger wil, moet ik de overgangskansen veranderen. Matrices maken spelersgedrag berekenbaar!',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Computergraphics & 3D-engines',
        desc: 'Elke 3D-engine (Unity, Unreal, Godot) is gebaseerd op matrixvermenigvuldiging. De MVP-pipeline — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — transformeert elk 3D-punt naar het 2D-scherm. Moderne GPU\'s zijn in de kern enorme machines voor matrixvermenigvuldiging.',
      },
      google_pagerank: {
        title: 'Google PageRank',
        desc: 'Het oorspronkelijke zoekalgoritme van Google modelleert het web als een gigantische stochastische matrix: elke webpagina is een toestand, elke link een overgangskans. De evenwichtsvector $\\vec{r} = T \\cdot \\vec{r}$ levert de ranking op — de pagina\'s met de hoogste waarden in de evenwichtsvector staan helemaal bovenaan.',
      },
      robotics: {
        title: 'Robotica & machinebesturing',
        desc: 'Robotarmen bestaan uit gewrichten die elk een rotatie uitvoeren. De totale positie van de hand volgt uit het product van alle rotatiematrices langs de arm. Dat heet voorwaartse kinematica — en de inverse matrix lost het omgekeerde probleem op: "Welke gewrichtshoeken heb ik nodig voor deze handpositie?"',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Matrixvermenigvuldiging behandeld als vermenigvuldiging van getallen: $A \\cdot B = B \\cdot A$',
        correct: 'Matrices zijn NIET commutatief: in het algemeen $A \\cdot B \\neq B \\cdot A$',
        why: 'Eerst draaien en dan verschuiven levert een ander resultaat op dan eerst verschuiven en dan draaien. In 3D-graphics leidt een verwisselde volgorde tot totaal verkeerde posities. Daarom: transformatieketens altijd van rechts naar links lezen!',
        kai_warning: 'Ik heb ooit een hele dag naar een bug gezocht, omdat ik rotatie en translatie had verwisseld. Mijn schepen draaiden om het middelpunt van de wereld in plaats van om hun eigen as! Sindsdien lees ik matrixketens altijd van rechts naar links: $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$ — eerst roteren, dan verschuiven.',
      },
      stochastic_rows_cols: {
        wrong: 'Rijsom = 1 aangenomen bij stochastische matrices met kolomvectoren',
        correct: 'Bij kolomvectoren moet de kolomsom 1 zijn: $\\sum_i t_{ij} = 1$',
        why: 'De conventie hangt ervan af of je rij- of kolomvectoren gebruikt. Op school en aan Duitse universiteiten is de kolomvector standaard — dan moeten de kolommen van de overgangsmatrix optellen tot 1. Elke kolom beschrijft: "Vanuit toestand $j$ — hoe verdelen de overgangen zich?"',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'Het is releasenacht in de haven van Hamburg. De lichten van de Landungsbrücken weerspiegelen in het water, en op het grote scherm voor de Fischmarkt licht de titel op: "Hafenlichter 3D". Kai staat op het podium, de microfoon in de hand, en kan het nauwelijks geloven — drie jaar ontwikkeling, en nu is het spel eindelijk af. In het publiek ziet hij twee bekende gezichten: Mia, die destijds met haar 2D-pixelartgame alles in gang heeft gezet, en Amir, wiens DataPulse-algoritmen de AI van de NPC\'s aansturen. "Weten jullie nog", zegt Kai in de microfoon, "hoe Mia met lineaire functies begon om personages over een rechte lijn te laten bewegen? Daarna bouwde Amir met afgeleiden en de binomiale verdeling de datapijplijn. En nu staan we hier — met matrices, integralen en de normale verdeling hebben we een complete 3D-wereld gecreëerd." Het publiek juicht. Maar voordat het feest echt losbarst, heeft Kai nog één laatste uitdaging: het eindexamen wiskunde.',
      challenge: 'Het grootste examen staat voor de deur — het eindexamen combineert analyse, analytische meetkunde en kansrekening in één toets. Kai heeft een strategie nodig die alle onderwerpen verbindt, punten maximaliseert en typische fouten voorkomt.',
      outro: 'Het releasefeest in de haven is in volle gang, de muziek speelt, en Kai, Mia en Amir proosten. "Drie jaar wiskunde", zegt Mia, "van de rechte lijn tot de normale verdeling." "Van data tot neurale netwerken", vult Amir aan. "Van 2D-pixels tot de 3D-engine", besluit Kai. Ze kijken naar de Elbe, waar de havenlichten dansen — elk afzonderlijk een vertex, getransformeerd door een matrix, belicht door een exponentiële functie, gebalanceerd door een normale verdeling. Wiskunde was nooit alleen rekenen. Het was de taal waarmee ze hun ideeën werkelijkheid lieten worden. Het spel is uitgebracht. Het examen komt eraan. En hoe het ook afloopt — de reis was het waard. Elke functie, elke afgeleide, elke integraal heeft hen hier gebracht. Naar de haven. Naar het doel. En naar het begin van alles wat nog komt.',
    },
    objectives: {
      exam_strategy: 'Een duidelijke examenstrategie ontwikkelen: opgaven doornemen, verhouding punten-tijd berekenen, makkelijke opgaven eerst',
      cross_topic_connections: 'Verbanden tussen analyse, analytische meetkunde en kansrekening herkennen en benutten',
      time_management: 'Het tijdsbudget per opgave realistisch plannen en aanhouden',
      error_prevention: 'Typische fouten herkennen, plausibiliteitscontroles uitvoeren en resultaten in de context interpreteren',
    },
    explanation: {
      intro: 'Het eindexamen is geen sprint, maar een strategisch spel — zoals een eindbaas met meerdere fasen. Je hebt ca. 4 tot 5 uur voor drie grote themablokken. De sleutel is niet om alles te weten, maar om slim prioriteiten te stellen en netjes te werken. Kai heeft dat bij zijn spel geleerd: "Je kunt niet elke bug tegelijk fixen. Je fixt de bugs met de meeste impact — en precies zo pak je het examen aan."',
      kai_rallying: 'Mensen, we hebben drie jaar lang wiskunde gedaan — niet omdat het moest, maar omdat het de sleutel tot onze projecten was. Mia begon met functies, Amir trainde met kansrekening zijn AI, en ik heb met matrices een 3D-wereld gebouwd. Het eindexamen is alleen nog de aftiteling na het eindgevecht. We zijn er klaar voor!',
      structure: 'De toets bestaat meestal uit drie verplichte delen — analyse (vaak het grootste blok), analytische meetkunde en kansrekening. De punten zijn ongeveer zo verdeeld:',
      time_strategy: 'Plan je tijd in verhouding tot de punten. Als een opgave 10 van de 100 punten oplevert, besteed er dan ca. $10\\%$ van je tijd aan. En de gouden regel: begin met de opgaven waar je zeker van bent. Elk zeker punt telt net zo zwaar als een zwaar bevochten punt!',
      mia_wisdom: 'Denk aan de basis! Functieonderzoek is altijd hetzelfde schema: domein, nulpunten, extrema, buigpunten, gedrag voor $x \\to \\pm\\infty$. Als je het patroon kent, is elke functie slechts een variatie daarop. Dat heb ik bij mijn gamepersonages geleerd — elke beweging is in de kern een functie.',
      checking: 'Na elke deelopgave: plausibiliteitscontrole! Kloppen de eenheden? Zijn de tekens logisch? Ligt het resultaat in een realistisch bereik? Een kans groter dan 1 of een negatieve oppervlakte zijn directe waarschuwingssignalen — dan liever nog een keer narekenen dan doorgaan.',
      amir_data: 'Ik check mijn resultaten altijd tegen grensgevallen: wat gebeurt er voor $x = 0$? Voor heel grote $x$? Convergeert mijn oplossing of divergeert ze? Die denkwijze uit het debuggen geldt net zo goed voor het examen. En bij kansrekening: altijd controleren of $\\sum P = 1$ geldt!',
      confidence: 'Het belangrijkste tot slot: je weet meer dan je denkt. Drie jaar oefening zit in je handen. Als je tijdens het examen even vastloopt — adem diep in, lees de opgave nog een keer, en begin met wat je zeker kunt. Elk punt telt. En onthoud: wiskunde is geen talent, maar een taal die je geleerd hebt. Spreek haar.',
    },
    concepts: {
      read_then_plan: {
        title: 'Lezen → plannen → rekenen → controleren',
        desc: 'Het 4-stappenschema voor elke opgave: (1) opgave volledig lezen, informatie markeren. (2) Oplossingsstrategie plannen — welke methoden heb je nodig? (3) Netjes en overzichtelijk rekenen. (4) Resultaat controleren: eenheden, tekens, plausibiliteit, context.',
      },
      point_maximizing: {
        title: 'Punten-efficiëntie',
        desc: 'Niet elke opgave is per punt even moeilijk. Begin met de opgaven waarbij je de meeste punten in de kortste tijd haalt. De laatste deelopgaven zijn vaak het moeilijkst — verzamel liever eerst alle "makkelijke" punten in alle opgaven en ga dan terug naar de moeilijke.',
      },
      plausibility_check: {
        title: 'Plausibiliteitscontrole',
        desc: 'Vier snelle checks die slordigheidsfouten voorkomen: (1) Eenheden: past de eenheid bij de context? (2) Tekens: is negatief hier zinvol? (3) Limieten: wat gebeurt er voor $x \\to 0$ of $x \\to \\infty$? (4) Schets: past het resultaat bij het grafische beeld?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Typische analyse-opgave: functieonderzoek + integraal',
        context: 'Kai modelleert het energieverbruik van zijn 3D-engine met $f(x) = (2x - 1) \\cdot e^{-x}$. Bepaal de extrema en bereken de oppervlakte tussen de grafiek en de $x$-as op $[0;\\, 3]$.',
        step1: 'Functie opstellen — hier al gegeven:',
        step2: 'Afgeleide met de productregel: $u = 2x - 1$, $v = e^{-x}$, dus $f\'(x) = u\' \\cdot v + u \\cdot v\'$:',
        step3: 'Extremum vinden — $f\'(x) = 0$ stellen ($e^{-x} > 0$ altijd, dus haakje = 0):',
        step4: 'Oppervlakteberekening — partiële integratie of primitieve bepalen:',
        mia_comment: 'Dat is precies het patroon dat ik bedoel: afgeleide met de productregel, nulpunt vinden, integraal berekenen. De functie verandert, maar de strategie blijft altijd dezelfde. Oefenen tot het vanzelf gaat!',
      },
      mixed_stochastik: {
        title: 'Typische kansrekeningopgave: hypothesetoets',
        context: 'De A/B-test van Amir laat zien: van 50 gebruikers klikt normaal gesproken $8\\%$ op de nieuwe knop. Na een redesign wil hij toetsen of het klikpercentage is gestegen ($\\alpha = 5\\%$).',
        step1: 'Model opstellen — binomiale verdeling met de parameters:',
        step2: 'Hypothesen formuleren — eenzijdige toets naar boven:',
        step3: 'Kritiek gebied zoeken — $k = 8$ testen ($P$ nog te groot):',
        step4: 'Kritiek gebied bepalen — vanaf $k = 9$ wordt $H_0$ verworpen:',
        amir_comment: 'Hypothesetoetsen zijn in de kern beslislogica: je berekent hoe onwaarschijnlijk je resultaat onder $H_0$ is. Als het onwaarschijnlijker is dan $\\alpha$, verwerp je $H_0$. Precies zo neem ik datagedreven beslissingen bij DataPulse — alleen met grotere steekproeven!',
      },
    },
    realworld: {
      release_day: {
        title: 'Release day: als alles samenkomt',
        desc: 'Een spel uitbrengen is als een examen: maanden van voorbereiding monden uit in één beslissend moment. "Hafenlichter 3D" van Kai combineert 2D-basis (Mia), data-analyse (Amir) en 3D-wiskunde (Kai) — net zoals het eindexamen analyse, meetkunde en kansrekening combineert. Voorbereiding is alles.',
      },
      project_management: {
        title: 'Projectmanagement & prioriteren',
        desc: 'In softwareontwikkeling prioriteer je features op impact en inspanning — net als examenopgaven op punten en moeilijkheid. De formule $\\text{efficiëntie} = \\frac{\\text{punten}}{\\text{tijd}}$ geldt in je werk net zo goed: concentreer je op wat het grootste verschil maakt.',
      },
      lifelong_learning: {
        title: 'Een leven lang leren',
        desc: 'Het eindexamen is niet het einde, maar het begin. Mia studeert gamedesign, Amir data science, Kai media-informatica — en overal hebben ze wiskunde nodig. Het vermogen om je in nieuwe onderwerpen in te werken is waardevoller dan welke formule ook. Wiskunde heeft jullie leren denken.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Resultaat opschrijven zonder eenheid en zonder context: "$A = 12{,}5$"',
        correct: 'Altijd eenheid en interpretatie: "$A = 12{,}5\\,\\text{OE}$, dat komt overeen met $12{,}5\\,\\text{m}^2$"',
        why: 'Op het eindexamen krijg je punten voor de interpretatie in de context! Een kaal resultaat zonder eenheid of verband met de opgave kost je makkelijke punten. Schrijf altijd een antwoordzin: "De oppervlakte bedraagt $12{,}5\\,\\text{m}^2$, wat overeenkomt met het beplante deel van het park."',
        kai_warning: 'In gameontwikkeling hebben getallen zonder context geen waarde. 12,5 — wat? Pixels? Seconden? Schadepunten? Net zo op het examen: schrijf de eenheid erbij en formuleer een antwoordzin. Dat zijn gratis punten!',
      },
      skip_plausibility: {
        wrong: 'Een duidelijk fout resultaat niet in twijfel trekken: $P(X = 5) = 1{,}3$',
        correct: 'Meteen argwaan krijgen: een kans kan nooit groter zijn dan 1!',
        why: 'Plausibiliteitscontroles kosten 10 seconden, maar kunnen hele opgaven redden. Kansen liggen altijd tussen 0 en 1, oppervlaktes zijn nooit negatief, $e^x > 0$ voor alle $x$. Als je resultaat tegen deze basisregels ingaat, zit er een rekenfout achter.',
        mia_warning: 'Ik heb in mijn laatste toets precies zo\'n fout gevonden: mijn integraal was negatief, hoewel de functie op het hele interval positief was. Snelle check, tekenfout ontdekt, verbeterd — 4 punten gered. Altijd controleren!',
      },
    },
  },
};
