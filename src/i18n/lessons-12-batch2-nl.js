export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai staat voor het laatste balanceringsprobleem van "Hafenlichter 3D": de lootdrops moeten eerlijk aanvoelen maar toch spannend zijn. Als elke boss precies evenveel goud dropt, is het saai — te veel spreiding en spelers klagen over oneerlijkheid. "Ik heb een verdeling nodig die er natuurlijk uitziet — veel waarden dicht bij het gemiddelde, weinig extremen", zegt Kai tegen zijn collega Priya. Het antwoord uit het statistiekcollege: de normale verdeling met haar perfecte klokcurve.',
      challenge: 'Kai moet het loot- en prestatiesysteem van "Hafenlichter 3D" zo kalibreren dat beloningen eerlijk verdeeld zijn en frametijden onder de kritische drempel blijven — de normale verdeling en haar sigmaregels leveren het gereedschap.',
      outro: 'Met de normale verdeling heeft Kai een elegant balanceringssysteem gebouwd: lootdrops volgen een klokcurve rond de streefwaarde, en de sigmaregels garanderen dat uitschieters extreem zeldzaam zijn.',
    },
    objectives: {
      bell_curve: 'De normale verdeling $N(\\mu, \\sigma^2)$ als continue verdeling met klokcurve begrijpen en haar parameters interpreteren',
      sigma_rules: 'De sigmaregels ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) voor snelle kansschattingen toepassen',
      z_transformation: 'De $z$-transformatie uitvoeren en kansen met de standaardnormale verdeling $\\Phi(z)$ berekenen',
      central_limit_theorem: 'De Centrale Limietstelling kennen en uitleggen waarom de normale verdeling overal opduikt',
    },
    explanation: {
      intro: 'De normale verdeling is de belangrijkste continue verdeling van de statistiek — en je komt haar overal tegen: lichaamslengte, meetwaarden, frametijden, toetsresultaten. Haar dichtheid heeft de iconische klokvorm, symmetrisch rond de verwachtingswaarde $\\mu$. De standaardafwijking $\\sigma$ bepaalt hoe breed of smal de klok is:',
      sigma_rules: 'De sigmaregels zijn je snelgereedschap: ze vertellen je meteen welk percentage van alle waarden in een bepaald bereik rond $\\mu$ ligt — zonder tabel, zonder rekenmachine. Binnen $\\pm 1\\sigma$ ligt ca. $68{,}3\\%$, binnen $\\pm 2\\sigma$ ca. $95{,}4\\%$ en binnen $\\pm 3\\sigma$ bijna alles — $99{,}7\\%$:',
      kai_tip: 'In gameontwikkeling gebruik ik de sigmaregels dagelijks bij balancering. Als ik wil dat 95% van de lootdrops tussen 30 en 70 goud valt, stel ik $\\mu = 50$ en $2\\sigma = 20$ in, dus $\\sigma = 10$. Klaar!',
      z_transformation: 'Maar wat als je een exacte kans nodig hebt — niet alleen de sigmaregels? Dan komt de $z$-transformatie in beeld: je rekent je waarde $x$ om naar een gestandaardiseerde $z$-waarde en zoekt op in de tabel van de standaardnormale verdeling $\\Phi(z)$:',
      central_limit: 'Waarom is de normale verdeling zo alomtegenwoordig? De Centrale Limietstelling geeft het antwoord: als je genoeg onafhankelijke stochastische variabelen optelt, nadert hun som — ongeacht hoe de individuele verdelingen eruitzien — een normale verdeling:',
    },
    concepts: {
      normal_distribution: { title: 'Normale verdeling $N(\\mu, \\sigma^2)$', desc: 'De continue verdeling met klokvormige dichtheid. $\\mu$ is de verwachtingswaarde (midden van de klok), $\\sigma^2$ de variantie (breedte van de klok). De oppervlakte onder de curve is altijd 1. Symmetrisch rond $\\mu$: mediaan = modus = verwachtingswaarde.' },
      sigma_rules: { title: 'Sigmaregels', desc: 'De drie gouden regels: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Onmisbaar voor snelle schattingen.' },
      z_transformation: { title: '$z$-transformatie', desc: 'Zet elke normale verdeling om in de standaardnormale verdeling $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Daarna lees je $P(X \\leq x) = \\Phi(z)$ af uit de tabel. Zo worden willekeurige normale verdelingen vergelijkbaar.' },
    },
    examples: {
      loot_balancing: { title: 'Kans op een lootdrop', context: 'In "Hafenlichter 3D" droppen bosses goud, normaal verdeeld met $\\mu = 50$ en $\\sigma = 8$. Kai wil weten: hoe waarschijnlijk is een legendarische drop van minstens 70 goud?', step1: 'Model opstellen — gouddrops volgen een normale verdeling:', step2: 'De $z$-transformatie toepassen — hoeveel standaardafwijkingen ligt 70 van 50?', step3: 'In de tabel opzoeken — $\\Phi(2{,}5)$ aflezen:', step4: 'Tegenkans berekenen — slechts $0{,}6\\%$ krijgt 70+ goud:', kai_comment: 'Perfect! Een legendarische drop bij minder dan 1% van de spelers — dat voelt bijzonder aan zonder oneerlijk te zijn. De normale verdeling geeft me totale controle over de zeldzaamheid.' },
      frame_times: { title: 'Frametijdanalyse', context: 'Bij 60 FPS moet elk frame in $16{,}7\\,\\text{ms}$ gerenderd worden. Kais profiler toont: de frametijden zijn normaal verdeeld met $\\mu = 16{,}7\\,\\text{ms}$ en $\\sigma = 2{,}1\\,\\text{ms}$. Hoe vaak lagt het spel (frametijd $> 20\\,\\text{ms}$)?', step1: 'Model opstellen — frametijden als normale verdeling:', step2: 'De $z$-transformatie voor de lagdrempel $x = 20$:', step3: 'Tabelwaarde aflezen:', step4: 'Tegenkans berekenen — ca. elk 17e frame lagt:', kai_comment: 'Bijna 6% lags — dat is te veel voor een vloeiend 3D-spel. Ik moet de renderer optimaliseren tot $\\sigma$ kleiner wordt. Doel: $\\sigma \\leq 1{,}5$, dan is minder dan 1,5% van de frames getroffen.' },
    },
    realworld: {
      quality_control: { title: 'Kwaliteitscontrole in de industrie', desc: 'Fabrieken gebruiken de $3\\sigma$-regel: als een onderdeel meer dan $3\\sigma$ van de streefmaat afwijkt, wordt het afgekeurd. Six Sigma-management gaat nog verder — $6\\sigma$ betekent maximaal 3,4 fouten per miljoen onderdelen.' },
      iq_scores: { title: 'IQ-tests en standaardisatie', desc: 'IQ-waarden zijn per definitie normaal verdeeld met $\\mu = 100$ en $\\sigma = 15$. Dat betekent: ca. $68\\%$ van de bevolking heeft een IQ tussen 85 en 115.' },
      stock_returns: { title: 'Aandelenrendementen en risico', desc: 'Dagelijkse aandelenrendementen worden vaak als normaal verdeeld gemodelleerd — $\\sigma$ is dan het risico. Portefeuillemanagers gebruiken de $z$-transformatie om te berekenen hoe waarschijnlijk een crash is.' },
    },
    mistakes: {
      sigma_vs_variance: { wrong: 'Normale verdeling genoteerd met $N(\\mu, \\sigma)$ — standaardafwijking in plaats van variantie', correct: 'Correct is $N(\\mu, \\sigma^2)$ — de tweede parameter is altijd de variantie', why: 'In de notatie $N(\\mu, \\sigma^2)$ staat de tweede parameter voor de variantie $\\sigma^2$, niet voor de standaardafwijking $\\sigma$. Verwisselingen leiden tot helemaal verkeerde kansen.', kai_warning: 'Deze fout heeft ooit mijn hele lootbalancering vernield. Ik bedoelde $\\sigma = 8$, maar schreef $N(50, 8)$ — dat betekent $\\sigma = \\sqrt{8} \\approx 2{,}83$. De drops waren veel te uniform!' },
      z_sign: { wrong: 'De $z$-formule verkeerd om: $z = \\frac{\\mu - x}{\\sigma}$', correct: 'Juist is $z = \\frac{x - \\mu}{\\sigma}$ — waarde min verwachtingswaarde, niet andersom', why: 'Als je teller en noemer verwisselt, krijg je het verkeerde teken. Een waarde boven het gemiddelde moet een positief $z$ geven, een waarde eronder een negatief.' },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai is bij het hart van "Hafenlichter 3D" aangekomen: de 3D-engine. Elk object in het spel — elk schip, elke golf, elke lantaarn aan de haven — moet geroteerd, geschaald en verplaatst kunnen worden. "In 2D waren transformaties eenvoudige formules", herinnert hij zich Mia\'s begin. "Maar in 3D heb je een systeem nodig dat willekeurig veel transformaties aan elkaar koppelt — en dat zijn matrices."',
      challenge: 'Kai moet de 3D-transformaties voor zijn game-engine begrijpen en implementeren — rotatie, schaling en overgangsprocessen, alles bestuurd door matrixvermenigvuldiging.',
      outro: 'Matrices zijn voor Kai dagelijks gereedschap geworden: elke 3D-transformatie is een matrix, elke animatie een reeks matrixvermenigvuldigingen. "Het geniale is: hoe complex de transformatie ook is — uiteindelijk is het altijd $\\vec{x}\' = M \\cdot \\vec{x}$", zegt hij.',
    },
    objectives: {
      matrix_operations: 'Matrices optellen en vermenigvuldigen en de rekenregels veilig toepassen — met name de niet-commutativiteit',
      transformation_matrices: 'Transformatiematrices voor rotatie, schaling en spiegeling opstellen en op vectoren toepassen',
      stochastic_matrices: 'Stochastische matrices en fixvectoren voor overgangsprocessen berekenen',
      inverse_matrix: 'De inverse matrix bepalen en haar betekenis als "omgekeerde transformatie" begrijpen',
    },
    explanation: {
      intro: 'Matrices zijn rechthoekige getallentabellen — maar hun ware kracht ligt erin dat ze afbeeldingen voorstellen. Een $2 \\times 2$-matrix transformeert 2D-vectoren, een $3 \\times 3$-matrix 3D-vectoren. Vermenigvuldiging betekent: rij maal kolom, dan optellen:',
      transformation: 'In 3D-graphics is elke geometrische transformatie een matrix: rotatie, schaling, spiegeling. De rotatiematrix om de $z$-as draait een punt $(x, y, z)$ over de hoek $\\theta$:',
      kai_tip: 'In mijn engine koppel ik transformaties door matrixvermenigvuldiging: eerst schalen, dan roteren, dan verplaatsen. De volgorde is daarbij beslissend — matrices zijn niet commutatief!',
      stochastic: 'Stochastische matrices beschrijven overgangsprocessen: hoe waarschijnlijk is het om van de ene toestand naar de andere over te gaan? Elke kolom telt op tot 1:',
      inverse: 'De inverse matrix $A^{-1}$ is de "ongedaan maken"-knop: $A \\cdot A^{-1} = I$ (eenheidsmatrix). Als $A$ een rotatie over $30°$ is, dan is $A^{-1}$ de rotatie over $-30°$:',
    },
    concepts: {
      matrix_multiplication: { title: 'Matrixvermenigvuldiging', desc: 'Rij maal kolom: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. Het aantal kolommen van $A$ moet gelijk zijn aan het aantal rijen van $B$. Belangrijk: $A \\cdot B \\neq B \\cdot A$ in het algemeen!' },
      transformation_matrix: { title: 'Transformatiematrix', desc: 'Elke lineaire afbeelding (rotatie, schaling, spiegeling) kan als matrix worden weergegeven. Meerdere transformaties worden door matrixvermenigvuldiging gekoppeld — van rechts naar links gelezen.' },
      stochastic_matrix: { title: 'Stochastische matrix & fixvector', desc: 'Een stochastische matrix heeft in elke kolom de som 1 — ze beschrijft overgangskansen. De fixvector $\\vec{v}_{\\text{fix}}$ met $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ is de langetermijnevenwichtstoestand.' },
    },
    examples: {
      '3d_rotation': { title: '3D-rotatie van een havenlantaarn', context: 'Kai wil een lantaarn in de haven $90°$ om de $z$-as draaien. De lantaarn zit op het punt $(3, 0, 5)$.', step1: 'Rotatiematrix voor $90°$ om de $z$-as opstellen ($\\cos 90° = 0$, $\\sin 90° = 1$):', step2: 'De positievector van de lantaarn als kolomvector schrijven:', step3: 'Matrix maal vector — rij voor rij uitvermenigvuldigen:', step4: 'Resultaat: de lantaarn zit nu op $(0, 3, 5)$ — $90°$ gedraaid in het $xy$-vlak, $z$ onveranderd:', kai_comment: 'Precies zo werkt elk frame in mijn engine: duizenden vertices worden met de Model-matrix vermenigvuldigd, dan met de View-matrix, dan met de Projection-matrix. Drie matrixvermenigvuldigingen per vertex — en de GPU doet dat in milliseconden!' },
      player_states: { title: 'Spelersgedrag als Markov-keten', context: 'In "Hafenlichter 3D" wisselen spelers tussen Verkennen (V) en Vechten (K). Kai heeft geobserveerd: wie verkent, blijft voor $70\\%$ bij verkennen en stapt voor $30\\%$ over naar vechten. Wie vecht, blijft voor $80\\%$ bij vechten en verkent voor $20\\%$ weer. Momenteel verkent $60\\%$ van de spelers.', step1: 'Overgangsmatrix $T$ en startvector $\\vec{v}_0$ opstellen:', step2: 'Een stap berekenen — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:', step3: 'Fixvector bepalen — stelsel $T \\cdot \\vec{v} = \\vec{v}$ met $x + y = 1$ oplossen:', step4: 'Op de lange termijn verkent $40\\%$ en vecht $60\\%$ — onafhankelijk van de start:', kai_comment: 'Dit is goud voor mijn game design! De fixvector laat me zien dat spelers op de lange termijn meer vechten dan verkennen. Als ik een beter evenwicht wil, moet ik de overgangskansen veranderen.' },
    },
    realworld: {
      computer_graphics: { title: 'Computergraphics en 3D-engines', desc: 'Elke 3D-engine (Unity, Unreal, Godot) is gebaseerd op matrixvermenigvuldiging. De MVP-pipeline — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — transformeert elk 3D-punt naar het 2D-scherm.' },
      google_pagerank: { title: 'Google PageRank', desc: 'Google\'s oorspronkelijke zoekalgoritme modelleert het web als een enorme stochastische matrix: elke webpagina is een toestand, elke link een overgangskans. De fixvector $\\vec{r} = T \\cdot \\vec{r}$ bepaalt de ranking.' },
      robotics: { title: 'Robotica en machinebesturing', desc: 'Robotarmen bestaan uit gewrichten die elk een rotatie uitvoeren. De totale positie van de hand volgt als product van alle rotatiematrices langs de arm.' },
    },
    mistakes: {
      commutative: { wrong: 'Matrixvermenigvuldiging als gewone vermenigvuldiging behandeld: $A \\cdot B = B \\cdot A$', correct: 'Matrices zijn NIET commutatief: $A \\cdot B \\neq B \\cdot A$ in het algemeen', why: 'Eerst roteren dan verplaatsen geeft een ander resultaat dan eerst verplaatsen dan roteren. Daarom: transformatieketens altijd van rechts naar links lezen!', kai_warning: 'Ik heb ooit een hele dag naar een bug gezocht omdat ik rotatie en translatie had omgewisseld. Mijn schepen draaiden rond het wereldmiddelpunt in plaats van rond hun eigen as!' },
      stochastic_rows_cols: { wrong: 'Rijsom = 1 aangenomen bij stochastische matrices met kolomvectoren', correct: 'Bij kolomvectoren moet de kolomsom 1 zijn: $\\sum_i t_{ij} = 1$', why: 'De conventie hangt af van of je rij- of kolomvectoren gebruikt. Op school is de kolomvector standaard — dan moeten de kolommen van de overgangsmatrix de som 1 hebben.' },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'Het is releasenacht aan de Hamburger haven. De lichten van de aanlegsteigers spiegelen in het water, en op het grote scherm voor de vismarkt straalt de titel: "Hafenlichter 3D". Kai staat op het podium, de microfoon in de hand, en kan het nauwelijks geloven — drie jaar ontwikkeling, en nu is het spel eindelijk klaar.',
      challenge: 'De grootste toets staat voor de deur — het eindexamen verenigt analyse, analytische meetkunde en statistiek in een tentamen. Kai heeft een strategie nodig die alle onderwerpen verbindt, punten maximaliseert en typische fouten vermijdt.',
      outro: 'Het releasefeest aan de haven is in volle gang, de muziek speelt, en Kai, Mia en Amir proosten. "Drie jaar wiskunde", zegt Mia, "van de rechte lijn tot de normale verdeling." Wiskunde was nooit alleen rekenen. Het was de taal waarmee ze hun ideeen werkelijkheid lieten worden.',
    },
    objectives: {
      exam_strategy: 'Een duidelijke tentamenstrategie ontwikkelen: opgaven bekijken, punten-tijdverhouding berekenen, makkelijke opgaven eerst',
      cross_topic_connections: 'Verbindingen tussen analyse, analytische meetkunde en statistiek herkennen en benutten',
      time_management: 'Het tijdbudget per opgave realistisch plannen en aanhouden',
      error_prevention: 'Typische fouten herkennen, plausibiliteitscontroles uitvoeren en resultaten in context interpreteren',
    },
    explanation: {
      intro: 'Het eindexamen is geen sprint maar een strategisch spel — als een eindbaas met meerdere fasen. Je hebt ca. 4 tot 5 uur voor drie grote thematische blokken. De sleutel is niet alles te weten, maar slim te prioriteren en netjes te werken.',
      kai_rallying: 'Mensen, we hebben drie jaar lang wiskunde gedaan — niet omdat het moest, maar omdat het de sleutel tot onze projecten was. Mia begon met functies, Amir trainde zijn AI met statistiek, en ik bouwde een 3D-wereld met matrices. Het examen is alleen nog de aftiteling na het eindgevecht. We zijn er klaar voor!',
      structure: 'Het tentamen bestaat doorgaans uit drie verplichte delen — analyse (vaak het grootste blok), analytische meetkunde en statistiek.',
      time_strategy: 'Plan je tijd evenredig met de punten. Als een opgave 10 van 100 punten oplevert, investeer ca. $10\\%$ van je tijd. En de gouden regel: begin met opgaven waar je zeker van bent.',
      mia_wisdom: 'Herinner je de basis! Functieanalyse is altijd hetzelfde schema: definitiegebied, nulpunten, extremen, buigpunten, gedrag voor $x \\to \\pm\\infty$. Als je het patroon kent, is elke functie slechts een variatie.',
      checking: 'Na elke deelopgave: plausibiliteitscheck! Kloppen de eenheden? Hebben de tekens zin? Ligt het resultaat in een realistisch bereik?',
      amir_data: 'Ik controleer mijn resultaten altijd tegen grensgevallen: wat gebeurt er voor $x = 0$? Voor heel groot $x$? Convergeert mijn oplossing of divergeert ze?',
      confidence: 'Het allerbelangrijkste aan het eind: je weet meer dan je denkt. Drie jaar oefening zit in je handen. Als je in het examen even niet verder komt — adem door, lees de opgave opnieuw, en begin met wat je zeker kunt.',
    },
    concepts: {
      read_then_plan: { title: 'Lezen → Plannen → Rekenen → Controleren', desc: 'Het 4-stappenplan voor elke opgave: (1) opgave helemaal lezen, informatie markeren. (2) oplossingsstrategie plannen. (3) netjes en overzichtelijk rekenen. (4) resultaat controleren: eenheden, tekens, plausibiliteit, context.' },
      point_maximizing: { title: 'Puntenefficiëntie', desc: 'Niet elke opgave is even moeilijk per punt. Begin met opgaven waar je de meeste punten in de kortste tijd haalt. De laatste deelopgaven zijn vaak het moeilijkst — beter eerst alle "makkelijke" punten in alle opgaven verzamelen.' },
      plausibility_check: { title: 'Plausibiliteitscheck', desc: 'Vier snelle checks die slordigheidsfoutjes voorkomen: (1) Eenheden: past de eenheid bij de context? (2) Tekens: is negatief hier zinvol? (3) Grenswaarden: wat gebeurt voor $x \\to 0$ of $x \\to \\infty$? (4) Schets: past het resultaat bij het grafische beeld?' },
    },
    examples: {
      mixed_analysis: { title: 'Typische analyse-opgave: curveanalyse + integraal', context: 'Kai modelleert het energieverbruik van zijn 3D-engine met $f(x) = (2x - 1) \\cdot e^{-x}$. Bepaal de extremen en bereken de oppervlakte tussen grafiek en $x$-as op $[0;\\, 3]$.', step1: 'Functie gegeven — hier al aangeleverd:', step2: 'Afgeleide met productregel:', step3: 'Extremum vinden:', step4: 'Oppervlakteberekening:', mia_comment: 'Dit is precies het patroon dat ik bedoel: afgeleide met productregel, nulpunt vinden, integraal berekenen. De functie verandert, maar de strategie blijft altijd hetzelfde.' },
      mixed_stochastik: { title: 'Typische statistiekopgave: hypothesetoets', context: 'Amirs A/B-test toont: van 50 gebruikers klikt normaal $8\\%$ op de nieuwe knop. Na een redesign wil hij testen of het klikpercentage gestegen is ($\\alpha = 5\\%$).', step1: 'Model opstellen — binomiale verdeling:', step2: 'Hypothesen formuleren — eenzijdige toets naar boven:', step3: 'Kritiek gebied zoeken:', step4: 'Verwerpingsgebied bepalen:', amir_comment: 'Hypothesetoetsen zijn in de kern beslissingslogica: je berekent hoe onwaarschijnlijk je resultaat onder $H_0$ is. Als het onwaarschijnlijker is dan $\\alpha$, verwerp je $H_0$.' },
    },
    realworld: {
      release_day: { title: 'Releasedag: als alles samenkomt', desc: 'Een spel uitbrengen is als een examen: maanden voorbereiding monden uit in een beslissend moment. Kais "Hafenlichter 3D" verenigt 2D-basis (Mia), data-analyse (Amir) en 3D-wiskunde (Kai) — precies zoals het eindexamen analyse, meetkunde en statistiek verenigt.' },
      project_management: { title: 'Projectmanagement en prioritering', desc: 'In softwareontwikkeling prioriteer je features op impact en inspanning — precies als tentamenopgaven op punten en moeilijkheid.' },
      lifelong_learning: { title: 'Levenslang leren', desc: 'Het eindexamen is niet het einde maar het begin. Het vermogen om je in nieuwe onderwerpen in te werken is waardevoller dan elke afzonderlijke formule. Wiskunde heeft jullie leren denken.' },
    },
    mistakes: {
      no_units_context: { wrong: 'Resultaat zonder eenheid en zonder context: "$A = 12{,}5$"', correct: 'Altijd eenheid en interpretatie: "$A = 12{,}5\\,\\text{VE}$, dat komt overeen met $12{,}5\\,\\text{m}^2$"', why: 'Op het examen zijn er punten voor de interpretatie in context! Een kaal resultaat zonder eenheid of verband met de vraagstelling kost makkelijke punten.', kai_warning: 'In gameontwikkeling hebben getallen zonder context geen waarde. 12,5 — wat? Pixels? Seconden? Schaadpunten? Net zo in het tentamen: schrijf de eenheid erbij en formuleer een antwoordzin.' },
      skip_plausibility: { wrong: 'Een overduidelijk fout resultaat niet in twijfel trekken: $P(X = 5) = 1{,}3$', correct: 'Meteen argwanend worden: een kans kan nooit groter dan 1 zijn!', why: 'Plausibiliteitschecks kosten 10 seconden maar kunnen hele opgaven redden. Kansen liggen altijd tussen 0 en 1, oppervlakten zijn nooit negatief, $e^x > 0$ voor alle $x$.', mia_warning: 'Ik heb in mijn laatste tentamen precies zo\'n fout gevonden: mijn integraal was negatief terwijl de functie op het hele interval positief was. Snelle check, tekenfout ontdekt, gecorrigeerd — 4 punten gered.' },
    },
  },
};
