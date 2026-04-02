export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Het deeltjessysteem van "Hafenlichter 3D" ziet er grandioos uit — vonken vliegen, mist wervelt, vuur laait. Maar Kai heeft een prestatieprobleem: duizenden deeltjes tegelijk brengen de GPU in het zweet. "Ik moet berekenen hoe snel deeltjes vervagen, zodat ik ze op tijd uit het geheugen gooi", legt hij uit aan Mia. Het antwoord ligt in de $e$-functie en haar tegenhanger, de natuurlijke logaritme.',
      challenge: 'Kai moet de levensduur van deeltjes wiskundig modelleren: hoe snel vervaagt een vonk? Wanneer is een rookdeeltje zo transparant dat het verwijderd kan worden? Daarvoor heeft hij de kettingregel voor $e$-functies, afgeleiden van $\\ln$ en het oplossen van vervalvergelijkingen nodig.',
      outro: 'Met gekoppelde $e$-functies en $\\ln$-afgeleiden heeft Kai een slim deeltjessysteem gebouwd: elke vonk volgt een precieze vervalcurve, elk rookdeeltje wordt exact dan gerecycled wanneer zijn opaciteit onder de waarnemingsdrempel zakt. "De kettingregel is praktisch mijn prestatie-optimalisator", grijnst Kai.',
    },
    objectives: {
      advanced_e_properties: 'Gekoppelde $e$-functies met de kettingregel differentiëren: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'De afgeleide van $\\ln(g(x))$ beheersen en voor curveanalyses gebruiken',
      composite_exp_functions: 'Producten van polynomen en $e$-functies analyseren (extremen, buigpunten)',
      differential_equations: 'Eenvoudige differentiaalvergelijkingen van het type $f\'(t) = k \\cdot f(t)$ begrijpen en vervalmodellen opstellen',
    },
    explanation: {
      intro: 'In klas 11 heb je de basis van $e^x$ en $\\ln(x)$ geleerd. Nu wordt het serieus: we differentiëren gekoppelde $e$-functies, analyseren curves met $\\ln$ en lossen vervalvergelijkingen op. De sleutel is de kettingregel:',
      ln_derivative: 'Even elegant: de afgeleide van $\\ln(g(x))$ met de kettingregel. De natuurlijke logaritme "keert de functie om" — de interne afgeleide staat in de teller, de interne functie zelf in de noemer:',
      kai_tip: 'In mijn 3D-engine komen $e$-functies overal voor: deeltjesverval, mistdichtheid, audio-fadeout. De truc is altijd dezelfde — de kettingregel.',
      integration: 'Bij integratie loopt het proces achteruit. Voor eenvoudige exponentiele functies geldt: de factor in de exponent gaat naar de noemer. En de beroemde $\\frac{1}{x}$-regel leidt direct naar $\\ln$:',
      decay_model: 'Exponentieel verval is HET standaardmodel voor processen waarbij de veranderingssnelheid evenredig is met de huidige waarde: $f\'(t) = -\\lambda \\cdot f(t)$. De oplossing is altijd een $e$-functie met negatieve exponent:',
    },
    concepts: {
      chain_rule_exp: { title: 'Kettingregel voor $e$-functies', desc: 'Bij $f(x) = e^{g(x)}$ is de buitenste functie $e^u$ (afgeleide: $e^u$) en de binnenste $g(x)$. Resultaat: de $e$-functie blijft staan, vermenigvuldigd met de interne afgeleide. Voorbeeld: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.' },
      ln_derivative: { title: 'Afgeleide van $\\ln(g(x))$', desc: 'De kettingregel voor de logaritme genereert een breuk: interne afgeleide gedeeld door interne functie. Bijzonder nuttig als $g(x)$ een polynoom is.' },
      exp_integration: { title: 'Logaritmische integratie', desc: 'Als een integrand de vorm $\\frac{f\'(x)}{f(x)}$ heeft, is de primitieve direct $\\ln|f(x)| + C$. Dit is de omgekeerde van de $\\ln$-afgeleide en een van de belangrijkste integratietrucs.' },
    },
    examples: {
      particle_decay: { title: 'Deeltjesverval modelleren', context: 'In Kais deeltjessysteem starten 5000 vonkdeeltjes tegelijk. Hun aantal neemt exponentieel af — Kai wil de vervalsnelheid en halveringstijd berekenen.', step1: 'Vervalmodel opstellen — $N_0 = 5000$ deeltjes, vervalconstante $\\lambda = 0{,}03\\,\\text{s}^{-1}$:', step2: 'Differentiëren met de kettingregel — interne functie $g(t) = -0{,}03t$, interne afgeleide $g\'(t) = -0{,}03$:', step3: 'Beginsnelheid berekenen — bij $t = 0$ verdwijnen 150 deeltjes per seconde:', step4: 'Halveringstijd bepalen — $N(t_{1/2}) = \\frac{N_0}{2}$ oplossen met $\\ln$:', kai_comment: 'Na 23 seconden is de helft van de deeltjes weg — dat betekent dat ik al eerder geheugen kan vrijmaken voor de volgende explosie.' },
      ln_curve_analysis: { title: 'Curveanalyse met $e$-functie', context: 'Kai modelleert de helderheid van een lichtflits: eerst stijgt die, dan daalt die. De helderheidscurve heeft de vorm $f(x) = x^2 \\cdot e^{-x}$.', step1: 'Functie gegeven — product van polynoom en afnemende $e$-functie:', step2: 'Afgeleide met productregel en kettingregel:', step3: 'Nulpunten van de afgeleide: $e^{-x} > 0$ altijd, dus beslist alleen $x(2-x) = 0$:', step4: 'Maximum bepalen — functiewaarde bij $x = 2$ uitrekenen:', kai_comment: 'Deze "stijging-dan-daling"-curve is perfect voor lichteffecten. Bij $x = 0$ is alles donker, bij $x = 2$ maximale helderheid, daarna zacht vervagen.' },
    },
    realworld: {
      particle_systems: { title: 'Deeltjessystemen in 3D-engines', desc: 'Elke vonk, elke rookpluim, elk vuur in een videospel volgt een exponentiele vervalcurve $N(t) = N_0 \\cdot e^{-\\lambda t}$.' },
      signal_processing: { title: 'Audioverwerking en signaaldemping', desc: 'Als je in GarageBand een galm-effect hoort, neemt het geluid exponentieel af: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$.' },
      learning_curve: { title: 'Leercurve en vaardigheidsprogressie', desc: 'De leercurve $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ beschrijft hoe vaardigheden aanvankelijk snel groeien en dan een maximum naderen.' },
    },
    mistakes: {
      chain_rule_forgotten: { wrong: 'Interne afgeleide vergeten: $(e^{3x})\' = e^{3x}$', correct: 'Kettingregel toepassen: $(e^{3x})\' = 3 \\cdot e^{3x}$', why: 'Zodra er meer dan alleen $x$ in de exponent staat, MOET de kettingregel eraan te pas komen.', kai_warning: 'In mijn shader had ik ooit $e^{-0{,}5t^2}$ gedifferentieerd en de factor $-t$ vergeten. Resultaat: deeltjes die nooit veranderden — als bevroren rook.' },
      ln_negative: { wrong: 'Absolute-waardestrepen vergeten: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$', correct: 'Correct met absolute waarde: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$', why: 'De functie $\\frac{1}{x}$ is ook voor negatieve $x$-waarden gedefinieerd, maar $\\ln(x)$ alleen voor $x > 0$. De absolute-waardestrepen zorgen ervoor dat de primitieve op het hele definitiegebied geldt.' },
    },
  },

  '12-integralrechnung-v': {
    story: {
      intro: 'Voor "Hafenlichter 3D" bouwt Kai een procedurele levelgenerator: bruggen, tunnels en huizen moeten ontstaan uit wiskundige curves die om assen geroteerd worden.',
      challenge: 'Kai moet volumes berekenen van 3D-objecten die door rotatie van curves ontstaan. Bovendien heeft hij partiele integratie nodig voor complexe belichtingsformules.',
      outro: 'De levelgenerator draait: Kai roteert curveprofielen om assen en krijgt perfecte 3D-lichamen met exact berekend volume.',
    },
    objectives: {
      integration_techniques: 'Partiele integratie en substitutie veilig toepassen',
      rotation_volumes: 'Omwentelingsvolumes om de $x$-as berekenen met $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Oneigenlijke integralen op convergentie controleren en berekenen',
      partial_integration: 'De methode van partiele integratie gericht inzetten als producten geïntegreerd moeten worden',
    },
    explanation: {
      intro: 'In klas 11 heb je bepaalde integralen als oppervlakte-inhoud leren kennen. Nu komen er drie nieuwe technieken bij. De eerste is partiele integratie — de "omgekeerde" productregel:',
      substitution: 'De tweede techniek is substitutie — de "omgekeerde" kettingregel bij differentiëren:',
      kai_tip: 'Mijn truc voor partiele integratie: "LIATE" — Logaritme, Inverse trig, Algebraïsch, Trigonometrisch, Exponentieel. Dat is de volgorde waarin je $u$ kiest.',
      rotation_volume: 'Nu wordt het driedimensionaal: als je de grafiek van $f(x)$ om de $x$-as roteert, ontstaat een omwentelingslichaam. Het volume bereken je door het lichaam voor te stellen als samengesteld uit oneindig veel dunne cirkelvormige schijven:',
      improper: 'Wat gebeurt er als een integratiegrens $\\infty$ is? Dan spreken we van oneigenlijke integralen:',
    },
    concepts: {
      partial_integration: { title: 'Partiele integratie', desc: 'De omgekeerde productregel: je ontleedt de integrand in $u$ (wordt gedifferentieerd) en $\\mathrm{d}v$ (wordt geïntegreerd). Doel: de nieuwe integraal $\\int v\\,\\mathrm{d}u$ moet eenvoudiger zijn dan de oorspronkelijke.' },
      rotation_volume: { title: 'Omwentelingsvolume', desc: 'Een functiegrafiek die om de $x$-as roteert genereert een 3D-lichaam. Het volume volgt uit de som van oneindig veel cirkelvormige schijven met straal $f(x)$ en dikte $\\mathrm{d}x$.' },
      improper_integral: { title: 'Oneigenlijke integralen', desc: 'Integralen met $\\infty$ als grens of onbegrensde integrand. Je vervangt de probleemplek door een variabele en berekent de limiet. Als de limiet bestaat en eindig is, convergeert de integraal.' },
    },
    examples: {
      level_geometry: { title: 'Omwentelingslichaam voor levelontwerp', context: 'Kai wil een zuil genereren waarvan het profiel de curve $f(x) = \\sqrt{x}$ volgt. Tussen $x = 0$ en $x = 4$ roteert de curve om de $x$-as.', step1: 'Profiel definiëren — de wortelfunctie op het interval $[0;\\,4]$:', step2: 'Formule voor omwentelingsvolume aanzetten — $f(x)$ kwadrateren en $\\pi$ ervoor:', step3: 'Primitieve bepalen en grenzen invullen:', step4: 'Resultaat — de zuil heeft een volume van $8\\pi$ volume-eenheden:', kai_comment: 'Dit is precies de formule die mijn procedurele generator gebruikt! Ik definieer curveprofielen, roteer ze en ken meteen het volume.' },
      partial_int: { title: 'Partiele integratie voor belichting', context: 'In Kais belichtingsshader verschijnt de integraal $\\int x \\cdot e^x\\,\\mathrm{d}x$ — een product dat niet direct integreerbaar is.', step1: 'Ontleding kiezen: $u = x$, $v\' = e^x$:', step2: 'Afgeleiden en primitieven bepalen:', step3: 'In de formule invullen — de nieuwe integraal is nu alleen nog $\\int e^x\\,\\mathrm{d}x$:', step4: 'Vereenvoudigen:', kai_comment: 'Het moment dat de nieuwe integraal eenvoudiger is dan de oude — dat is het succesmoment bij partiele integratie.' },
    },
    realworld: {
      '3d_printing': { title: '3D-printen en CAD-volumeberekening', desc: 'Elke 3D-printer moet weten hoeveel materiaal nodig is. Bij rotatiesymmetrische onderdelen berekent de slicersoftware het volume met precies deze omwentelingsformule.' },
      render_falloff: { title: 'Licht-falloff in game-engines', desc: 'De oneigenlijke integraal $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ laat zien: de totale energie is eindig!' },
      terrain_volume: { title: 'Terraingeneratie en grondwerk', desc: 'Bij wegenbouwprojecten en Minecraft-achtige spellen moet het volume van heuvellandschappen berekend worden.' },
    },
    mistakes: {
      rotation_no_square: { wrong: 'Kwadrateren vergeten: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$', correct: 'Correct gekwadrateerd: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$', why: 'Elke cirkelschijf heeft oppervlak $\\pi r^2$ met $r = f(x)$. Zonder kwadrateren bereken je geen cirkeloppervlak maar iets heel anders.', kai_warning: 'Ik heb deze fout ooit op een game jam gemaakt — mijn zuil had maar een fractie van het correcte volume en is in de fysicasimulatie ineengezakt.' },
      improper_no_limit: { wrong: 'Direct $\\infty$ invullen in plaats van limiet berekenen', correct: 'Limiet correct formuleren en convergentie controleren', why: '$\\infty$ is geen getal dat je kunt invullen! Je moet altijd de limiet $\\lim_{b \\to \\infty}$ berekenen en controleren of die bestaat.' },
    },
  },

  '12-analytische-geo': {
    story: {
      intro: 'De 3D-wereld van "Hafenlichter 3D" krijgt vorm: havenkranen, gebouwgevels, wateroppervlakken — alles bestaat uit driehoeken, en elke driehoek ligt in een vlak. "Voor realistische belichting moet ik voor elk oppervlak de normaalvector berekenen", legt Kai uit.',
      challenge: 'Kai moet vlakvergelijkingen uit drie punten opstellen, normaalvectoren via het kruisproduct berekenen, snijpunten lijn-vlak vinden en afstanden tussen objecten bepalen.',
      outro: 'Kais botsingsdetectiesysteem werkt perfect: kogels raken muren, personages staan op vloeren, en de belichting berekent voor elk oppervlak de perfecte lichtinval via normaalvectoren.',
    },
    objectives: {
      plane_equations: 'Vlakvergelijkingen in parameter-, normaal- en coördinatenvorm opstellen en in elkaar omzetten',
      line_plane_intersection: 'Snijpunten van lijnen met vlakken berekenen en liggingrelaties bepalen',
      distances_3d: 'Afstanden in de ruimte berekenen: punt-vlak, punt-lijn en lijn-lijn',
      cross_product: 'Het kruisproduct beheersen en voor normaalvectorberekening inzetten',
    },
    explanation: {
      intro: 'Vlakken in de driedimensionale ruimte kun je op verschillende manieren beschrijven. De parametervorm start bij een steunpunt $\\vec{a}$ en spant het vlak op met twee richtingsvectoren $\\vec{u}$ en $\\vec{v}$:',
      normal_form: 'Eleganter is vaak de normaalvorm: een vector $\\vec{n}$ die loodrecht op het vlak staat en een punt $\\vec{a}$ in het vlak volstaan. Daaruit volgt de coördinatenvorm:',
      kai_tip: 'In mijn engine sla ik elk oppervlak op in coördinatenvorm — drie coëfficiënten en een constante, meer niet. Voor rendering heb ik de normaalvector voor belichting nodig, voor fysica heb ik snijpunten en afstanden nodig.',
      cross_product: 'Het kruisproduct $\\vec{u} \\times \\vec{v}$ levert een vector die loodrecht op beide invoervectoren staat — perfect om uit twee richtingsvectoren de normaalvector te berekenen. Let op: de volgorde is belangrijk (anticommutatief)!',
      distance_point_plane: 'De afstand van een punt $P$ tot een vlak $E$ bereken je elegant met de Hessiaanse normaalvorm:',
    },
    concepts: {
      plane_equation: { title: 'Vlakvergelijking in coördinatenvorm', desc: 'De meest compacte weergave van een vlak: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. De coëfficiënten zijn de componenten van de normaalvector.' },
      cross_product: { title: 'Kruisproduct', desc: 'Het kruisproduct van twee vectoren $\\vec{u}$ en $\\vec{v}$ levert een nieuwe vector $\\vec{n}$ op die loodrecht op beide staat. De grootte $|\\vec{u} \\times \\vec{v}|$ is de oppervlakte van het opgespannen parallellogram. Belangrijk: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$!' },
      distance_formula: { title: 'Afstand punt-vlak', desc: 'De kortste afstand van een punt $P$ tot een vlak is de lengte van het loodrecht van $P$ op het vlak.' },
    },
    examples: {
      game_world_plane: { title: 'Vlak uit drie hoekpunten', context: 'Kai heeft een driehoek in zijn gamewereld met hoekpunten $A(1|0|2)$, $B(3|1|0)$ en $C(0|4|1)$.', step1: 'Drie punten gegeven — twee richtingsvectoren bepalen:', step2: 'Richtingsvectoren $\\vec{u} = \\overrightarrow{AB}$ en $\\vec{v} = \\overrightarrow{AC}$ berekenen:', step3: 'Kruisproduct $\\vec{n} = \\vec{u} \\times \\vec{v}$ uitgebreid berekenen:', step4: 'Coördinatenvorm opstellen:', kai_comment: 'In de engine gebeurt precies dit voor elke driehoek: drie vertices erin, kruisproduct berekenen, vlak opgeslagen. De normaalvector bepaalt tegelijk in welke richting het oppervlak "kijkt".' },
      collision_detection: { title: 'Lijn-vlak-snijpunt (Raycast)', context: 'Een kogel vliegt rechtlijnig door de ruimte. Kai moet controleren of en waar het een muur raakt.', step1: 'Lijn (baan) en vlak (muur) gegeven:', step2: 'Lijn invullen in vlakvergelijking:', step3: 'Naar $t$ oplossen:', step4: 'Snijpunt berekenen:', kai_comment: 'In de engine controleer ik aanvullend $t > 0$ (voorwaartse richting) en $0 \\leq t \\leq t_{\\max}$ (bereik).' },
    },
    realworld: {
      '3d_rendering': { title: '3D-rendering en belichting', desc: 'Elke 3D-engine berekent belichting via het inproduct van normaalvector en lichtrichting: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Dit is het Lambert-belichtingsmodel.' },
      architecture: { title: 'Architectuur en BIM-software', desc: 'In architectuurprogramma\'s als AutoCAD of Revit worden dakoppervlakken, muren en hellingbanen als vlakken gemodelleerd.' },
      gps_navigation: { title: 'GPS en dronenavigatie', desc: 'GPS-coördinaten zijn driedimensionaal. Drones navigeren langs lijnen in de 3D-ruimte en moeten obstakels — gemodelleerd als vlakken — detecteren.' },
    },
    mistakes: {
      cross_product_order: { wrong: 'Volgorde genegeerd: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$', correct: 'Anticommutatief: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$', why: 'Het kruisproduct is NIET commutatief — de volgorde bepaalt de richting van de resultaatvector (rechterhandregel). Omwisselen verandert het teken.', kai_warning: 'Deze bug herken je meteen: oppervlakken die "van binnenuit" verlicht zijn terwijl de buitenkant donker blijft.' },
      distance_abs_forgotten: { wrong: 'Absolute waarde in de teller vergeten', correct: 'Met absolute waarde: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$', why: 'Afstanden zijn altijd positief! Zonder de absolute waarde in de teller kan een negatieve waarde uitkomen als het punt aan de "andere kant" van het vlak ligt.' },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Voor de release van "Hafenlichter 3D" staat de grote playtest aan: 200 testers spelen een week lang en Kai moet harde beslissingen nemen. Is de balancering eerlijk? Is het crashpercentage acceptabel? "Onderbuikgevoel is niet genoeg", zegt Mia. "Je hebt een statistische test nodig."',
      challenge: 'Kai moet beslissen of waargenomen verschillen in de playtest statistisch significant zijn.',
      outro: 'De playtest is uitgewerkt: Kai heeft statistisch aangetoond dat held A te zwak is ($p = 0{,}028 < 0{,}05$) en het crashpercentage in de nieuwe build significant gestegen is.',
    },
    objectives: {
      null_hypothesis: 'Nul- en alternatieve hypothese correct opstellen en tussen een- en tweezijdige toetsen onderscheiden',
      significance_level: 'Het significantieniveau $\\alpha$ begrijpen en als foutenkans interpreteren',
      test_decision: 'Verwerpingsgebieden bepalen en toetsbeslissingen systematisch uitvoeren',
      error_types: 'Fouten van type I en II onderscheiden en de trade-off tussen $\\alpha$ en $\\beta$ begrijpen',
    },
    explanation: {
      intro: 'Een hypothesetoets is een gestructureerde procedure om op basis van data een beslissing te nemen. Je start met een vermoeden (nulhypothese $H_0$), verzamelt data en toetst of de data tegen $H_0$ spreken:',
      significance: 'Het significantieniveau $\\alpha$ is de maximale kans waarmee je $H_0$ ten onrechte verwerpt (fout type I). Typische waarden zijn $\\alpha = 0{,}05$ (5%) of $\\alpha = 0{,}01$ (1%):',
      kai_tip: 'Denk aan hypothesetoetsen als aan een anti-cheatsysteem: $H_0$ betekent "De speler cheated NIET". $\\alpha = 0{,}05$ betekent: slechts in 5% van de gevallen ban ik een eerlijke speler.',
      rejection_region: 'Het verwerpingsgebied bevat alle toetsresultaten die zo extreem zijn dat we $H_0$ verwerpen:',
      error_types: 'Twee fouten kunnen optreden: Fout type I ($\\alpha$) — je verwerpt $H_0$ terwijl ze waar is ("vals alarm"). Fout type II ($\\beta$) — je handhaaft $H_0$ terwijl $H_1$ waar is ("gemist effect"):',
    },
    concepts: {
      hypotheses: { title: 'Nul- en alternatieve hypothese', desc: '$H_0$ is de "status-quo"-aanname die geldt totdat de data ertegen spreken. $H_1$ is wat je eigenlijk wilt aantonen. Belangrijk: je "bewijst" $H_1$ nooit — je kunt $H_0$ alleen verwerpen of handhaven.' },
      significance_level: { title: 'Significantieniveau $\\alpha$', desc: 'De bovengrens voor de kans op een fout type I. $\\alpha$ wordt VOOR de toets vastgelegd — nooit achteraf aangepast!' },
      error_types: { title: 'Fouten type I en II', desc: 'Fout type I ($\\alpha$): $H_0$ wordt verworpen terwijl ze waar is — een "vals alarm". Fout type II ($\\beta$): $H_0$ wordt gehandhaafd terwijl $H_1$ waar is — een "gemist effect".' },
    },
    examples: {
      playtest_balance: { title: 'Balanceringstoets: is held A te zwak?', context: 'In 100 wedstrijden tussen held A en held B wint held A slechts 40 keer. Kai vermoedt dat held A benadeeld is.', step1: 'Hypothesen en significantieniveau vaststellen — eenzijdig, want Kai vermoedt dat A te zwak is:', step2: 'Opzet: $n = 100$ wedstrijden, $X$ = aantal overwinningen van held A, binomiaal verdeeld:', step3: 'Kans berekenen voor $X \\leq 40$ onder $H_0$ (cumulatieve binomiale verdeling):', step4: 'Toetsbeslissing: $p$-waarde $0{,}028 < \\alpha = 0{,}05$ — $H_0$ wordt verworpen. Held A is significant te zwak:', kai_comment: 'Dit was het statistische bewijs dat ik nodig had voor het balanceringsteam. 40 van 100 ziet er "bijna oké" uit, maar de toets laat zien: bij eerlijke balancering zou je zo\'n extreem resultaat slechts in 2{,}8% van de gevallen zien.' },
      crash_rate: { title: 'Crashpercentage na update controleren', context: 'Na een patch moet het crashpercentage maximaal 2% zijn. In 200 testsessies crasht het spel 8 keer. Is dat te veel?', step1: 'Hypothesen opstellen — rechtszijdig, want Kai wil controleren of het percentage BOVEN 2% ligt:', step2: 'Data: $n = 200$ sessies, $X = 8$ crashes (waargenomen: $\\hat{p} = 4\\%$):', step3: 'Kans berekenen voor $X \\geq 8$ onder $H_0$ — dit is de $p$-waarde:', step4: 'Toetsbeslissing: $p$-waarde $0{,}042 < \\alpha = 0{,}05$ — het crashpercentage is significant verhoogd:', kai_comment: 'Zonder de toets had ik misschien gezegd "8 crashes bij 200 sessies, dat is wel oké". Maar de hypothesetoets laat zien: de kans om bij een echt 2%-percentage zoveel crashes te zien ligt onder 5%.' },
    },
    realworld: {
      ab_testing: { title: 'A/B-testing bij apps en websites', desc: 'Elke keer dat Netflix de "Nu afspelen"-knop wijzigt of Spotify een nieuwe playlist-weergave test, loopt er een hypothesetoets. De $p$-waarde beslist of het verschil echt is of slechts toevallige schommeling.' },
      quality_assurance: { title: 'Kwaliteitscontrole in de productie', desc: 'In fabrieken wordt constant getest: ligt het uitvalpercentage onder de grenswaarde? Komt het vulgewicht overeen met de opgegeven waarde?' },
      clinical_trials: { title: 'Klinische studies en medicijnen', desc: 'Voordat een medicijn wordt goedgekeurd, moet het een hypothesetoets doorstaan: $H_0$ zegt "Het medicijn werkt niet beter dan een placebo". Alleen als de $p$-waarde onder $\\alpha = 0{,}05$ zakt, geldt de werkzaamheid als bewezen.' },
    },
    mistakes: {
      accept_h0: { wrong: '$H_0$ "bewezen": $p > \\alpha$ betekent $H_0$ is waar', correct: 'Correct geformuleerd: $p > \\alpha$ betekent $H_0$ kan niet verworpen worden', why: 'Een hypothesetoets kan $H_0$ nooit bewijzen — alleen verwerpen of handhaven. "Niet verwerpen" betekent: de data zijn niet toereikend om $H_0$ te weerleggen.', kai_warning: 'Het is als de onschuldpresumptie voor de rechter: "niet schuldig" betekent niet "onschuldig" — het betekent alleen dat de bewijzen niet voldoende zijn.' },
      alpha_beta_confused: { wrong: 'Een kleinere $\\alpha$ verbetert automatisch alles', correct: 'Een kleinere $\\alpha$ leidt bij vaste $n$ tot een grotere $\\beta$', why: 'Als je de toets strenger maakt (kleinere $\\alpha$), heb je extremere data nodig om $H_0$ te verwerpen. Daardoor stijgt de kans een echt effect te missen ($\\beta$ stijgt). De enige uitweg: grotere steekproef $n$.' },
    },
  },
};
