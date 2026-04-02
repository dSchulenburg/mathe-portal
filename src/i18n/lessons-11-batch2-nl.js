export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Amirs muziekaanbevelingsalgoritme heeft een probleem: de populariteit van nieuwe songs stijgt aanvankelijk explosief — maar hoe snel precies? En wanneer vlakt de hype af? "Ik heb een functie nodig die extreem snelle groei beschrijft en toch berekenbaar blijft", zegt Amir tegen Yara. Het antwoord: de exponentiele functie met het getal van Euler $e$ — en haar tegenhanger, de natuurlijke logaritme.',
      challenge: 'Amir moet de groeicurve van songstreams modelleren en voorspellen wanneer een track zijn piek bereikt — daarvoor heeft hij exponentiele vergelijkingen en logaritmen nodig.',
      outro: 'Met de $e$-functie en $\\ln$ kan Amir nu berekenen wanneer een song zijn hoogtepunt bereikt en hoe snel de interesse daarna afneemt. "Het mooie is: de natuurlijke logaritme maakt elke exponentiele vergelijking oplosbaar", legt hij uit aan Finn. DataPulse voorspelt nu songtrends met verrassende precisie.',
    },
    objectives: {
      e_function: 'De $e$-functie als natuurlijke groeifunctie begrijpen en toepassen',
      natural_log: 'De natuurlijke logaritme als omkeerfunctie van $e^x$ beheersen',
      log_rules: 'Logaritmewetten veilig toepassen (product-, quotient- en machtsregel)',
      solve_exp_equations: 'Exponentiele vergelijkingen oplossen door logaritmiseren',
    },
    explanation: {
      intro: 'Het getal van Euler $e \\approx 2{,}718$ is de belangrijkste constante voor groeiprocessen. Waarom juist $e$? Omdat de functie $f(x) = e^x$ een unieke eigenschap heeft: haar afgeleide is zichzelf — $f\'(x) = e^x$. Dat betekent: de groeisnelheid is altijd evenredig met de huidige waarde. Perfect voor natuurlijke groei!',
      natural_log: 'De natuurlijke logaritme $\\ln(x)$ is de omkeerfunctie van $e^x$. Als je wilt weten welke exponent je nodig hebt om een bepaalde waarde te bereiken — dan is $\\ln$ je gereedschap. De twee functies heffen elkaar op:',
      amir_tip: 'In mijn ML-code duikt $\\ln$ overal op — in de loss function, bij normalisatie, in de softmax-formule. De reden: $\\ln$ zet vermenigvuldiging om in optelling en maakt enorme getallen hanteerbaar. Daarom rekenen we vaak met "log-likelihood" in plaats van met kansen direct!',
      log_rules: 'De drie logaritmewetten zijn extreem nuttig — ze veranderen complexe uitdrukkingen in eenvoudigere. Het basisidee: logaritmen maken van vermenigvuldiging optelling, van deling aftrekking en van machten vermenigvuldiging:',
      solving: 'Om een exponentiele vergelijking naar $x$ op te lossen, pas je aan beide kanten de $\\ln$ toe. De logaritme "haalt de exponent naar beneden" — dat is de sleutelstap:',
    },
    concepts: {
      e_function: { title: '$e$-functie', desc: 'De algemene vorm $f(x) = a \\cdot e^{kx}$: $a$ is de beginwaarde, $k$ bepaalt de groeisnelheid. Bij $k > 0$ groeit de functie, bij $k < 0$ vervalt ze (exponentieel verval). De $e$-functie is haar eigen afgeleide — daarom modelleert ze natuurlijke groei perfect.' },
      natural_log: { title: 'Natuurlijke logaritme', desc: 'De omkeerfunctie van $e^x$: $\\ln(x)$ beantwoordt de vraag "Welke macht van $e$ geeft $x$?". Alleen gedefinieerd voor $x > 0$. Belangrijk: $\\ln(1) = 0$ en $\\ln(e) = 1$.' },
      log_rules: { title: 'Logaritmewetten', desc: 'Drie regels die alles vereenvoudigen: productregel ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), quotientregel ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) en machtsregel ($\\ln(a^r) = r \\cdot \\ln(a)$). De machtsregel is de sleutel tot het oplossen van exponentiele vergelijkingen.' },
    },
    examples: {
      solve_exp: { title: 'Exponentiele vergelijking oplossen', context: 'Amir wil berekenen na hoeveel dagen een song 5 keer zoveel streams heeft als in het begin. Het groeimodel luidt: $S(x) = 3 \\cdot e^{2x}$.', step1: 'Vergelijking opstellen — wanneer bereiken de streams de waarde 15?', step2: 'Door 3 delen om $e^{2x}$ te isoleren:', step3: 'Aan beide kanten de $\\ln$ toepassen — de exponent "komt naar beneden":', step4: 'Naar $x$ oplossen — delen door de coefficient 2:', amir_comment: 'Dit is het patroon dat ik constant nodig heb: isoleren, logaritmiseren, oplossen. Werkt bij elke exponentiele vergelijking!' },
      half_life: { title: 'Halveringstijd berekenen', context: 'Na de piek verliest een virale song dagelijks luisteraars. Amir modelleert de afname met $N(t) = 1000 \\cdot e^{-0{,}1t}$.', step1: 'Het model: 1000 actieve luisteraars op tijdstip $t = 0$, exponentieel verval:', step2: 'Halveringstijd betekent: wanneer zijn er nog 500 luisteraars over?', step3: 'Isoleren en logaritmiseren — $\\ln$ aan beide kanten:', step4: 'Naar $t$ oplossen — na ca. 6{,}93 dagen is het luisteraantal gehalveerd:', amir_comment: 'De halveringstijd is constant! Of het nu 1000, 500 of 250 luisteraars zijn — het duurt altijd ca. 6{,}93 dagen tot de volgende halvering. Dat is de magie van exponentieel verval.' },
    },
    realworld: {
      user_retention: { title: 'User Retention bij apps', desc: 'Hoeveel gebruikers zijn na een week nog actief? Bij de meeste apps daalt de retention exponentieel: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse gebruikt dit model om te voorspellen hoeveel users na 30 dagen nog meedoen.' },
      compound_interest: { title: 'Continue rente', desc: 'Banken rekenen met jaarlijkse rente, maar in theorie bestaat er ook continue rente: $K(t) = K_0 \\cdot e^{rt}$. Hoe vaker je rente berekent, hoe dichter je bij $e^{rt}$ komt. Dat is de limiet!' },
      decibel: { title: 'Decibelschaal', desc: 'Geluidssterkte wordt logaritmisch gemeten: $L = 10 \\cdot \\log_{10}(I/I_0)$. Als de geluidsintensiteit verdubbelt, stijgt het niveau maar met ca. $3\\,\\text{dB}$. Daarom klinken 10 gitaren niet 10 keer zo hard als een — ons gehoor werkt logaritmisch!' },
    },
    mistakes: {
      ln_sum: { wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — som opgesplitst', correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — alleen producten kun je opsplitsen', why: 'De productregel geldt ALLEEN voor vermenigvuldiging, niet voor optelling! Er is geen eenvoudige formule voor $\\ln(a + b)$. Dit is een van de allermeest gemaakte fouten.', amir_warning: 'Deze bug heeft me ooit twee uur debugging gekost. Mijn likelihood-berekening was helemaal fout omdat ik $\\ln(p_1 + p_2)$ in plaats van $\\ln(p_1 \\cdot p_2)$ had gebruikt. Logaritmen splitsen producten op — geen sommen!' },
      ln_cancel: { wrong: '$\\ln(e^x) = e \\cdot x$ — logaritme fout opgelost', correct: '$\\ln(e^x) = x$ — de logaritme heft de exponentiele functie op', why: '$\\ln$ en $e^x$ zijn omkeerfuncties — ze heffen elkaar op. Het resultaat is gewoon de exponent $x$, zonder factor $e$ ervoor.' },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse heeft een nieuwe functie gelanceerd en Amir wil weten: hoe waarschijnlijk is het dat van 100 testgebruikers minstens 15 op de nieuwe knop klikken? Elke gebruiker klikt of klikt niet — een klassiek ja/nee-experiment dat $n$ keer herhaald wordt. "Dit is geen toeval meer, dit is de binomiale verdeling", zegt Prof. Nguyen in het college.',
      challenge: 'Amir heeft de kans nodig op een bepaald aantal klikken bij $n$ onafhankelijke experimenten — de binomiale verdeling levert het exacte antwoord.',
      outro: 'Amir heeft nu een statistisch framework voor A/B-tests. Hij kan berekenen of een resultaat significant is of slechts toevallig tot stand is gekomen. "De binomiale verdeling is het fundament voor bijna elke statistische test in de praktijk", legt hij uit aan Yara. DataPulse neemt nu datagedreven beslissingen in plaats van op gevoel.',
    },
    objectives: {
      bernoulli: 'Bernoulli-experimenten herkennen en de succeskans $p$ bepalen',
      binomial_formula: 'De binomiale formule toepassen om $P(X = k)$ te berekenen',
      expected_value: 'Verwachtingswaarde $E(X) = n \\cdot p$ berekenen en interpreteren',
      standard_deviation: 'Standaardafwijking $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ bepalen en als spreidingsmaat gebruiken',
    },
    explanation: {
      intro: 'Stel je voor dat je een experiment $n$ keer herhaalt, en elke keer zijn er maar twee uitkomsten: succes (kans $p$) of mislukking (kans $1-p$). De binomiale verdeling vertelt je hoe waarschijnlijk precies $k$ successen bij $n$ pogingen zijn:',
      bernoulli: 'De basis is het Bernoulli-experiment — een enkel experiment met precies twee uitkomsten. Drie voorwaarden moeten gelden: (1) slechts twee resultaten, (2) de kans $p$ blijft bij elke poging gelijk, (3) de pogingen zijn onafhankelijk. De binomiaalcoefficient telt de mogelijke schikkingen:',
      amir_tip: 'De binomiaalcoefficient $\\binom{n}{k}$ telt op hoeveel manieren je $k$ successen over $n$ pogingen kunt verdelen. In mijn code is dat de functie scipy.special.comb(n, k). Voor grote $n$ bereken ik liever de cumulatieve verdeling — afzonderlijke kansen optellen zou veel te langzaam zijn!',
      expected_value: 'De verwachtingswaarde $E(X) = n \\cdot p$ vertelt je hoeveel successen je "gemiddeld" verwacht. Bij 100 pogingen met $p = 0{,}15$ verwacht je $E(X) = 15$ successen. Maar dat betekent niet dat het elke keer precies 15 is! Hoe sterk de resultaten schommelen meet de standaardafwijking:',
      standard_deviation: 'De standaardafwijking $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ toont de typische spreiding rond de verwachtingswaarde. Vuistregels: ongeveer 68% van de resultaten ligt in $E(X) \\pm \\sigma$, ongeveer 95% in $E(X) \\pm 2\\sigma$. Hoe groter $n$, hoe smaller de verdeling relatief tot de verwachtingswaarde.',
    },
    concepts: {
      bernoulli: { title: 'Bernoulli-experiment', desc: 'Een kansexperiment met precies twee uitkomsten: succes (kans $p$) of mislukking ($1-p$). Voorbeelden: muntworp, klik/geen klik, doelpunt/geen doelpunt. De binomiale verdeling ontstaat door $n$-voudige onafhankelijke herhaling.' },
      binomial_formula: { title: 'Binomiale formule', desc: 'De formule $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ bestaat uit drie delen: $\\binom{n}{k}$ telt de schikkingen, $p^k$ is de kans op $k$ successen, $(1-p)^{n-k}$ op $n-k$ mislukkingen.' },
      expected_value: { title: 'Verwachtingswaarde & standaardafwijking', desc: 'De verwachtingswaarde $E(X) = n \\cdot p$ is het gemiddelde bij veel herhalingen. De standaardafwijking $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ meet de typische afwijking ervan. Samen beschrijven ze ligging en spreiding van de verdeling.' },
    },
    examples: {
      coin_flips: { title: 'Muntworp: precies 7 van 10 keer kop', context: 'Amir test zijn toevalsgenerator: bij 10 eerlijke muntworpen — hoe waarschijnlijk is precies 7 keer kop?', step1: 'Parameters bepalen: $n = 10$ worpen, $p = 0{,}5$ (eerlijke munt), gezocht: $k = 7$ keer kop.', step2: 'Binomiaalcoefficient berekenen — op hoeveel manieren kunnen 7 kop over 10 worpen verdeeld zijn?', step3: 'In de binomiale formule invullen: schikkingen $\\times$ successen $\\times$ mislukkingen:', step4: 'Uitrekenen — de kans bedraagt ca. 11{,}7%, dus eerder onwaarschijnlijk:', amir_comment: 'Slechts 11{,}7% — dat toont: ook bij een eerlijke munt is 7 van 10 keer kop niet bijzonder verrassend, maar ook niet de norm. Mijn toevalsgenerator lijkt in orde!' },
      quality_control: { title: 'Kwaliteitscontrole in de productie', context: 'Een fabriek heeft een foutenpercentage van 2%. Amir berekent: hoe waarschijnlijk is het dat in een steekproef van 20 stuks geen enkel exemplaar defect is?', step1: 'Parameters: $n = 20$ stuks, foutenpercentage $p = 0{,}02$, gezocht: $k = 0$ defecte onderdelen.', step2: 'Invullen: $\\binom{20}{0} = 1$, en $0{,}02^0 = 1$ — alleen de mislukkingen blijven over:', step3: 'Vereenvoudigen — er blijft $0{,}98^{20}$ over:', step4: 'Resultaat: met ca. 66{,}8% kans is geen enkel onderdeel defect — helemaal niet zo zeker!', amir_comment: 'Slechts twee derde kans op nul fouten bij 2% foutenpercentage! Dit toont: ook kleine kansen tellen op bij veel pogingen. Bij $n = 100$ zou $P(X = 0) \\approx 13{,}3\\%$ zijn — dan vind je bijna zeker een fout.' },
    },
    realworld: {
      ab_testing: { title: 'A/B-testing bij DataPulse', desc: 'Amir test twee versies van de app: versie A heeft een klikpercentage van 12%, versie B van 15%. Met de binomiale verdeling berekent hij of het verschil statistisch significant is — of dat het ook door toeval zou kunnen zijn gekomen.' },
      medicine: { title: 'Medische studies', desc: 'Bij medicijntests tel je: hoeveel patienten worden beter? Is het genezingspercentage significant beter dan bij placebo? De binomiale verdeling levert het antwoord — en beschermt tegen voorbarige conclusies bij te kleine steekproeven.' },
      surveys: { title: 'Opiniepeilingen en fouttolerantie', desc: 'Als bij een enquete 52% "ja" stemt — is dat echt een meerderheid? De standaardafwijking $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ toont hoe breed het betrouwbaarheidsinterval is. Bij $n = 100$ zou $\\sigma \\approx 5\\%$ zijn — het resultaat zou ook 47% of 57% kunnen zijn.' },
    },
    mistakes: {
      forget_binomial_coeff: { wrong: 'Binomiaalcoefficient vergeten: $P(X=k) = p^k \\cdot (1-p)^{n-k}$', correct: 'Volledige formule met $\\binom{n}{k}$', why: 'Zonder $\\binom{n}{k}$ telt de formule slechts EEN bepaalde volgorde — bijv. eerst $k$ successen, dan $n-k$ mislukkingen. Maar de successen kunnen op verschillende plaatsen voorkomen! De binomiaalcoefficient telt alle mogelijke schikkingen.', amir_warning: 'Stel je voor, je gooit 3 keer en wilt precies 2 zessen. Er zijn 3 mogelijkheden: 6-6-X, 6-X-6, X-6-6. De binomiaalcoefficient $\\binom{3}{2} = 3$ telt precies dat. Zonder hem krijg je slechts een derde van de juiste kans!' },
      variance_vs_sigma: { wrong: 'Variantie en standaardafwijking verwisseld', correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — de wortel niet vergeten!', why: 'De variantie is $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, de standaardafwijking is $\\sigma = \\sqrt{\\text{Var}(X)}$. Zonder wortel heeft het resultaat de verkeerde eenheid en is veel te groot. $\\sigma$ heeft dezelfde eenheid als $X$ — de variantie heeft die gekwadrateerd.' },
    },
  },

  '11-bedingte-wk': {
    story: {
      intro: 'DataPulse beveelt songs aan op basis van eerder luistergedrag. Maar Amir merkt: niet elke correlatie is even sterk. Wie rock luistert, waardeert misschien ook metal — maar geldt dat ook andersom? "De kans dat iemand van rock houdt ALS hij metal luistert, is niet hetzelfde als andersom", legt Prof. Nguyen uit. Welkom bij de voorwaardelijke kans.',
      challenge: 'Amir moet de aanbevelingslogica verbeteren: hoe waarschijnlijk is het dat een user genre $A$ waardeert, GEGEVEN dat hij genre $B$ luistert? En hoe keer je deze richting om?',
      outro: 'Met de stelling van Bayes kan Amir nu de aanbevelingsrichting omdraaien: van "Wie metal luistert, luistert voor 60% ook rock" wordt "Wie rock luistert, luistert voor 35% ook metal". "Bayes is als reverse engineering voor kansen", grijnst hij. DataPulse levert nu duidelijk preciezere aanbevelingen.',
    },
    objectives: {
      conditional_prob: 'Voorwaardelijke kansen berekenen en interpreteren',
      bayes_theorem: 'De stelling van Bayes toepassen om de richting van een voorwaardelijke kans om te keren',
      independence: 'Stochastische onafhankelijkheid controleren en van afhankelijkheid onderscheiden',
      tree_diagrams: 'Boomdiagrammen en vierveldentabellen als hulpmiddel inzetten',
    },
    explanation: {
      intro: 'De voorwaardelijke kans $P(A \\mid B)$ beantwoordt de vraag: "Hoe waarschijnlijk is $A$ als we al weten dat $B$ is opgetreden?" De kennis over $B$ verandert de kans — de steekproefruimte krimpt tot de gevallen waarin $B$ geldt:',
      multiplication_rule: 'De vermenigvuldigingsregel volgt direct uit de definitie: als je de kans wilt berekenen op "$A$ en $B$ tegelijk", vermenigvuldig je $P(B)$ met de voorwaardelijke kans $P(A \\mid B)$:',
      amir_tip: 'In mijn aanbevelingscode gebruik ik constant voorwaardelijke kansen: $P(\\text{like}_Y \\mid \\text{like}_X)$ — de kans dat een user song $Y$ waardeert, gegeven dat hij song $X$ geliket heeft. Dit is het hart van elke Collaborative Filter!',
      bayes: 'De stelling van Bayes is de magie: hij draait de richting om. Als je $P(B \\mid A)$ kent maar $P(A \\mid B)$ nodig hebt, levert Bayes de oplossing. De formule ziet er ingewikkeld uit, maar de kern is eenvoudig: je weegt met de basiskans (Prior):',
      total_probability: 'Voor de noemer in de stelling van Bayes heb je vaak de totale kans nodig. Die ontleedt $P(B)$ in alle mogelijke wegen waarop $B$ kan optreden — via $A$ of via $\\bar{A}$ (niet-$A$):',
      independence: 'Twee gebeurtenissen zijn stochastisch onafhankelijk als de kennis over de ene de kans op de andere niet verandert. Formeel: $P(A \\mid B) = P(A)$ — het optreden van $B$ heeft geen invloed op $A$. Equivalent geldt:',
    },
    concepts: {
      conditional_prob: { title: 'Voorwaardelijke kans', desc: '$P(A \\mid B)$ is de kans op $A$ onder de voorwaarde $B$. Je "zoomt in" op het deel van de kansruimte waarin $B$ geldt, en vraagt dan naar $A$. Belangrijk: $P(A \\mid B) \\neq P(B \\mid A)$ — de richting telt!' },
      bayes: { title: 'Stelling van Bayes', desc: 'De formule om de richting om te keren: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ is de Prior (voorkennis), $P(A \\mid B)$ de Posterior (bijgewerkte inschatting na observatie van $B$). Bayesiaanse statistiek is de basis van spamfilters en diagnosesystemen.' },
      independence: { title: 'Stochastische onafhankelijkheid', desc: '$A$ en $B$ zijn onafhankelijk als $P(A \\cap B) = P(A) \\cdot P(B)$. Dat betekent: het optreden van $B$ verandert niets aan de kans op $A$. Let op: onafhankelijkheid is NIET hetzelfde als "geen doorsnede" (disjunct)!' },
    },
    examples: {
      medical_test: { title: 'Medische test — Base Rate Fallacy', context: 'Een ziektetest is 99% nauwkeurig. De ziekte treft 1% van de bevolking. Als de test positief is — hoe waarschijnlijk ben je echt ziek?', step1: 'Gegeven: $P(K) = 0{,}01$ (ziekte), $P(+ \\mid K) = 0{,}99$ (sensitiviteit), $P(+ \\mid \\bar{K}) = 0{,}05$ (fout-positief percentage).', step2: 'Totale kans op een positief resultaat berekenen — beide wegen (ziek + gezond):', step3: 'Stelling van Bayes toepassen — gezocht is $P(K \\mid +)$:', step4: 'Resultaat: slechts 16{,}7% kans om echt ziek te zijn — ondanks 99% testnauwkeurigheid!', amir_comment: 'Dat is de Base Rate Fallacy! De test is super nauwkeurig, maar omdat de ziekte zo zeldzaam is ($P(K) = 1\\%$), zijn de meeste positieve tests fout-positief. In de ML-wereld heet dat: Precision en Recall zijn niet hetzelfde!' },
      spam_filter: { title: 'Spamfilter met Bayes', context: 'Amirs emailfilter moet leren: als een mail het woord "Winst" bevat — is het spam?', step1: 'Gegeven data: 30% van alle mails zijn spam, 80% van de spammails bevatten "Winst", maar ook 10% van de normale mails:', step2: 'Totale kans dat een mail "Winst" bevat:', step3: 'Bayes: hoe waarschijnlijk is spam als "Winst" voorkomt?', step4: 'Resultaat: 77{,}4% — een mail met "Winst" is met hoge waarschijnlijkheid spam:', amir_comment: 'Precies zo werkt een Naive Bayes Classifier! Hoe meer woorden je toevoegt, hoe preciezer het filter. DataPulse gebruikt hetzelfde principe: in plaats van woorden analyseren we luisterpatronen, in plaats van spam/niet-spam classificeren we genrevoorkeuren.' },
    },
    realworld: {
      recommendation: { title: 'Muziekaanbevelingen bij DataPulse', desc: 'Collaborative Filtering is gebaseerd op voorwaardelijke kansen: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "Wie song X waardeert, waardeert met welke kans ook song Y?" Spotify, Netflix en DataPulse berekenen miljoenen van zulke voorwaardelijke kansen in realtime.' },
      weather: { title: 'Weersvoorspelling', desc: 'Meteorologen werken hun voorspelling voortdurend bij met Bayes: $P(\\text{Regen} \\mid \\text{Wolken, Druk, Wind})$. Elke nieuwe meting verfijnt de prognose.' },
      fraud_detection: { title: 'Fraudedetectie', desc: 'Amirs betalingssysteem herkent verdachte transacties met Bayes: als er een alarm afgaat — hoe waarschijnlijk is echte fraude? Net als bij de medische test: het basispercentage beslist!' },
    },
    mistakes: {
      confuse_direction: { wrong: '$P(A \\mid B) = P(B \\mid A)$ — richting verwisseld', correct: 'De richting omdraaien kan alleen met Bayes!', why: '$P(A \\mid B)$ en $P(B \\mid A)$ zijn volstrekt verschillende waarden. Voorbeeld: $P(\\text{nat} \\mid \\text{regen}) = 0{,}99$, maar $P(\\text{regen} \\mid \\text{nat}) \\ll 0{,}99$ — je kunt ook nat worden van een sproeier. De stelling van Bayes is nodig om de richting om te keren.', amir_warning: 'Deze fout zie ik constant in code reviews! Iemand berekent $P(\\text{click} \\mid \\text{bought})$ en gebruikt het als $P(\\text{bought} \\mid \\text{click})$. Dat kan het aanbevelingsalgoritme helemaal ruineren. Bayes is verplicht!' },
      ignore_base_rate: { wrong: 'Het basispercentage genegeerd (Base Rate Fallacy)', correct: 'Altijd $P(A)$ — de prior-kans — meenemen', why: 'Een 99%-nauwkeurige test klinkt indrukwekkend, maar als de ziekte slechts 1% treft, is $P(K \\mid +) \\approx 16{,}7\\%$. Het lage basispercentage $P(K) = 0{,}01$ domineert het resultaat. Zonder de Prior krijg je een volstrekt vertekende inschatting.' },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn bouwt de backend voor de nieuwe functie van DataPulse: vergelijkbare songs vinden. Maar hoe meet je "gelijkenis" tussen songs als elke song door tientallen eigenschappen beschreven wordt — tempo, energie, stemming, instrumentatie? "Stel je elke song voor als een punt in de ruimte", zegt Amir. "Hoe dichter twee punten bij elkaar liggen, hoe vergelijkbaarder de songs." Welkom in de wereld van vectoren.',
      challenge: 'Amir moet songfeatures als vectoren weergeven en hun gelijkenis berekenen — met het inproduct en de hoek tussen vectoren.',
      outro: 'De aanbevelingsengine van DataPulse gebruikt nu Cosine Similarity: hoe kleiner de hoek tussen twee songvectoren, hoe vergelijkbaarder de songs. "In de ML-wereld zijn vectoren overal — Word Embeddings, Feature Spaces, neurale netwerken. Alles is lineaire algebra", zegt Amir enthousiast tegen Yara.',
    },
    objectives: {
      vectors_2d_3d: 'Vectoren in $\\mathbb{R}^2$ en $\\mathbb{R}^3$ als kolommen noteren en meetkundig interpreteren',
      vector_operations: 'Vectoroptelling en scalaire vermenigvuldiging beheersen',
      scalar_product: 'Het inproduct berekenen en meetkundig duiden',
      angle_between_vectors: 'De hoek tussen twee vectoren met de cosinusformule bepalen',
    },
    explanation: {
      intro: 'Een vector beschrijft een verplaatsing in de ruimte — of algemener: een geordende lijst getallen. In $\\mathbb{R}^3$ heeft een vector drie componenten die je als kolom schrijft. In data-analyse kunnen vectoren ook 50 of 500 dimensies hebben — het principe blijft hetzelfde:',
      addition: 'Vectoren tel je component voor component op — elke rij apart. Meetkundig leg je de tweede vector aan het einde van de eerste (punt-aan-voet-methode). Het resultaat is de directe weg van start naar doel:',
      amir_tip: 'In mijn Python-code zijn vectoren gewoon numpy-arrays. De optelling $\\vec{a} + \\vec{b}$ wordt automatisch elementgewijs uitgevoerd — np.array([3,4]) + np.array([-1,2]) geeft np.array([2,6]). Precies hetzelfde als in de wiskunde!',
      scalar_product: 'Het inproduct (ook: scalair product) van twee vectoren levert een enkel getal op — geen vector! Je vermenigvuldigt de componenten paarsgewijs en telt alles op. Het resultaat vertelt je hoe sterk de vectoren "dezelfde kant op wijzen":',
      length: 'De lengte (de norm) van een vector bereken je via de stelling van Pythagoras — uitgebreid naar drie dimensies. In het 2D-geval is het de bekende $\\sqrt{x^2 + y^2}$, in 3D komt $z^2$ erbij:',
      angle: 'De belangrijkste toepassing van het inproduct: de hoek tussen twee vectoren. De formule verbindt het algebraische inproduct met de meetkundige interpretatie. Deze hoek is in de ML-wereld als "Cosine Similarity" de standaardmaat voor gelijkenis:',
    },
    concepts: {
      vector: { title: 'Vector', desc: 'Een geordende lijst getallen als kolom geschreven. In $\\mathbb{R}^2$ heeft een vector 2 componenten, in $\\mathbb{R}^3$ drie. Meetkundig is het een pijl met richting en lengte. In data-analyse vertegenwoordigt een vector een object met zijn eigenschappen — bijv. een song met tempo, energie en stemming.' },
      scalar_product: { title: 'Inproduct', desc: 'Twee vectoren erin, een getal eruit: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Meetkundig geldt: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Als het inproduct nul is, staan de vectoren loodrecht op elkaar (orthogonaal).' },
      vector_length: { title: 'Norm van een vector', desc: 'De lengte $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — veralgemeende Pythagoras. Een vector met norm 1 heet eenheidsvector. In de ML-wereld normaliseert men vectoren vaak tot lengte 1 om alleen de richting te vergelijken.' },
    },
    examples: {
      force_addition: { title: 'Krachten als vectoren optellen', context: 'Twee krachten werken op een object — Amir berekent de resulterende totaalkracht.', step1: 'De twee krachten gegeven als 2D-vectoren:', step2: 'Component voor component optellen — elke rij apart:', step3: 'Norm van de totaalkracht berekenen (Pythagoras):', step4: 'Uitrekenen — de totaalkracht bedraagt ca. $6{,}32\\,\\text{N}$:', amir_comment: 'Hetzelfde principe gebruiken we bij DataPulse: in plaats van krachten tellen we featurevectoren op. Als een user twee genres waardeert, is de gecombineerde smaakvector de som — daarmee vinden we songs die bij beide genres passen!' },
      angle_vectors: { title: 'Hoek tussen songvectoren', context: 'Amir vergelijkt twee songs: song A heeft featurevector $(1, 2, 3)$ en song B $(4, -1, 2)$. Hoe vergelijkbaar zijn ze?', step1: 'De featurevectoren van de twee songs:', step2: 'Inproduct berekenen — componenten paarsgewijs vermenigvuldigen en optellen:', step3: 'Normen van beide vectoren berekenen:', step4: 'Cosinusformule toepassen — de hoek bedraagt ca. $62{,}2°$:', amir_comment: 'Een hoek van $62{,}2°$ betekent: de songs zijn gedeeltelijk vergelijkbaar, maar niet extreem. Bij $0°$ zouden ze identiek zijn (dezelfde verhoudingen), bij $90°$ helemaal verschillend. In mijn code staat: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))' },
    },
    realworld: {
      embeddings: { title: 'Word Embeddings & Song Embeddings', desc: 'In de ML-wereld worden woorden, songs en afbeeldingen als hoogdimensionale vectoren weergegeven (Embeddings). De Cosine Similarity $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ meet hun gelijkenis. Een beroemd voorbeeld: "Koning" $-$ "Man" $+$ "Vrouw" $\\approx$ "Koningin" — vectorrekenkunde met woordbetekenissen!' },
      navigation: { title: 'Navigatie & robotica', desc: 'Navigatiesystemen en robots gebruiken vectoren voor positie en beweging. De positievector zegt "Waar ben ik?", de snelheidsvector "Waarheen en hoe snel?". Vectoroptelling berekent de nieuwe positie na een beweging.' },
      game_physics: { title: 'Gamefysica & simulaties', desc: 'In games als Fortnite of Minecraft wordt de fysica met vectoren berekend: $\\vec{v}_{\\text{nieuw}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Snelheid, versnelling en zwaartekracht — alles vectoren! Zonder vectorrekening zou geen bal goed vliegen.' },
    },
    mistakes: {
      scalar_vs_cross: { wrong: 'Inproduct levert een vector op', correct: 'Het inproduct levert een GETAL op ($\\in \\mathbb{R}$)', why: 'Bij het inproduct vermenigvuldig je componentgewijs en TEL JE OP — het resultaat is een enkel getal, geen vector. Verwar het niet met het kruisproduct (dat levert inderdaad een vector op, maar komt pas later).', amir_warning: 'In numpy: np.dot(a, b) geeft een getal terug, np.cross(a, b) geeft een vector terug. Als je similarity-score plotseling een array is in plaats van een getal, heb je het verkeerde product gebruikt!' },
      length_sum: { wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — componenten simpelweg opgeteld', correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — Pythagoras toepassen!', why: 'De lengte van een vector is de Euclidische afstand tot de oorsprong — en die volgt de stelling van Pythagoras. Simpelweg de componenten optellen zou de Manhattan-afstand zijn (ook nuttig, maar iets anders!).' },
    },
  },
};
