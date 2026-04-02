export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Amirs ML-model voor DataPulse levert bruikbare songaanbevelingen — maar de training duurt eindeloos. "Gradient Descent is in principe niets anders dan afgeleiden", legt zijn wiskundeprofessor uit. "Als je begrijpt hoe differentiatieregels werken, begrijp je ook waarom je model leert." Amir besluit de regels systematisch door te werken.',
      challenge: 'Amir wil begrijpen hoe zijn ML-model intern de verliesfunctie differentieert — daarvoor heeft hij de machtsregel, somregel, productregel en kettingregel nodig.',
      outro: 'Amir heeft nu een stevig fundament: machtsregel voor eenvoudige termen, som- en factorregel voor samengestelde uitdrukkingen, productregel voor vermenigvuldigingen en de kettingregel voor samengestelde functies. "Nu begrijp ik eindelijk wat PyTorch op de achtergrond met Autograd doet", zegt hij tevreden.',
    },
    objectives: {
      power_rule: 'De machtsregel veilig toepassen: $f(x) = x^n$ differentiëren',
      constant_sum_rule: 'Constanten- en somregel beheersen: termen apart differentiëren en factoren behouden',
      product_quotient_rule: 'Product- en quotiëntregel correct toepassen',
      chain_rule: 'De kettingregel bij samengestelde functies veilig inzetten',
    },
    explanation: {
      intro: 'De machtsregel is de belangrijkste basisregel: je trekt de exponent als factor naar voren en verlaagt de exponent met 1. Zo differentieer je elke machtsfunctie in een handomdraai:',
      constant_factor: 'Constante factoren blijven bij het differentiëren behouden, en bij sommen mag je term voor term differentiëren. Dat maakt samengestelde termen overzichtelijk:',
      amir_tip: 'In mijn ML-code zitten overal sommen en factoren — de verliesfunctie is een enorme som over alle datapunten. Dat ik elke term apart mag differentiëren maakt backpropagation überhaupt mogelijk!',
      product_rule: 'Als twee functies vermenigvuldigd worden, mag je NIET gewoon allebei apart differentiëren. In plaats daarvan geldt de productregel — "eerste keer afgeleide van de tweede plus tweede keer afgeleide van de eerste":',
      quotient_rule: 'Voor breuken van functies is er de quotiëntregel. Ezelsbruggetje: "NAT min TAN door N kwadraat" (N = noemer, T = teller, A = afgeleide):',
      chain_rule: 'Bij samengestelde functies — dus een functie in een functie — heb je de kettingregel nodig. Je differentieert "van buiten naar binnen" en vermenigvuldigt met de interne afgeleide:',
    },
    concepts: {
      power_rule: { title: 'Machtsregel', desc: 'De basisregel: exponent wordt factor, exponent daalt met 1. Geldt ook voor negatieve en gebroken exponenten, bijv. $\\frac{1}{x} = x^{-1}$.' },
      sum_rule: { title: 'Som- en factorregel', desc: 'Sommen worden term voor term gedifferentieerd, constante factoren blijven behouden. Zo ontleed je elke polynoomterm in eenvoudige delen.' },
      product_rule: { title: 'Productregel', desc: 'Voor het product van twee functies: afgeleide van de eerste keer tweede plus eerste keer afgeleide van de tweede. Onmisbaar zodra twee variabele uitdrukkingen vermenigvuldigd worden.' },
      chain_rule: { title: 'Kettingregel', desc: 'Buitenste functie differentiëren, binnenste laten staan, dan vermenigvuldigen met de afgeleide van de binnenste. Het hart van backpropagation in neurale netwerken.' },
    },
    examples: {
      power_sum: {
        title: 'Polynoom differentiëren met machts- en somregel',
        context: 'Amir vereenvoudigt een term uit zijn kostenfunctie.',
        step1: 'Gegeven is het polynoom — we differentiëren elke term apart:',
        step2: 'Machtsregel op elke term: exponent als factor, exponent min 1. Constante $-7$ valt weg:',
        step3: 'Samenvoegen geeft de afgeleide functie:',
        amir_comment: 'Precies zo ziet de gradiënt van mijn polynomiale features eruit. Elke term levert zijn bijdrage aan de helling — en PyTorch doet dit automatisch voor duizenden parameters tegelijk.',
      },
      chain_rule: {
        title: 'Samengestelde functie met kettingregel',
        context: 'Amir differentieert een activatiefunctie die een compositie bevat.',
        step1: 'Gegeven is een samengestelde machtsfunctie:',
        step2: 'Ontleden in buitenste functie $f(u) = u^3$ en binnenste functie $g(x) = 2x^2 + 1$:',
        step3: 'Buitenste differentiëren (machtsregel op $u^3$), binnenste laten staan, keer binnenste afgeleide ($4x$):',
        step4: 'Opgeruimd — factor $4x$ naar voren gehaald:',
        amir_comment: 'De kettingregel IS letterlijk backpropagation! Elke laag in het neuraal netwerk is een samengestelde functie, en de kettingregel schakelt de gradiënten van laag tot laag.',
      },
    },
    realworld: {
      gradient_descent: { title: 'Gradient Descent in Machine Learning', desc: 'Elk ML-model minimaliseert een verliesfunctie door te differentiëren. De gradiënt wijst de richting van de steilste stijging — we gaan de andere kant op om het minimum te vinden.' },
      marginal_cost: { title: 'Marginale kosten in de economie', desc: 'De afgeleide van de kostenfunctie $K(x)$ geeft de marginale kosten: wat kost een extra geproduceerde eenheid? Bedrijven gebruiken dit dagelijks voor prijsberekening.' },
      acceleration: { title: 'Versnelling in de natuurkunde', desc: 'Snelheid is de afgeleide van de weg, versnelling de afgeleide van de snelheid. De sensor van je smartphone meet precies dat: $a(t) = v\'(t) = s\'\'(t)$.' },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'De afgeleide van een constante is de constante zelf',
        correct: 'De afgeleide van een constante is altijd nul',
        why: 'Een constante heeft geen helling — ze verandert niet. Denk aan $f(x) = 5$: dat is een horizontale lijn, dus de helling is overal 0. Geldt voor elk getal zonder $x$.',
        amir_warning: 'De biasterm in mijn model is een constante — zijn afgeleide naar $x$ is 0. Als je dat vergeet, krijgt je gradiënt een verkeerde offset en de training divergeert.',
      },
      chain_rule_forgotten: {
        wrong: 'Binnenste afgeleide vergeten bij samengestelde functies',
        correct: 'Altijd met de binnenste afgeleide vermenigvuldigen',
        why: 'Bij $[(3x+1)^4]\'$ is het niet genoeg om alleen de exponent naar beneden te halen. Je MOET vermenigvuldigen met de afgeleide van de binnenste term $(3x+1)\' = 3$. Zonder binnenste afgeleide ontbreekt de factor 3.',
        amir_warning: 'Stel je voor dat je in een neuraal netwerk bij een laag de binnenste afgeleide vergeet — de gradiënt zou helemaal fout zijn en het model leert onzin. De kettingregel is niet optioneel!',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Amirs aanbevelingsalgoritme spuugt resultaten uit — maar zijn ze echt optimaal? "Je moet de verliesfunctie volledig analyseren", zegt zijn professor. "Waar zijn de minima? Waar de buigpunten?" Amir merkt: een volledige curveanalyse laat hem zien of zijn model echt het globale minimum gevonden heeft of vastzit in een lokaal minimum.',
      challenge: 'Amir analyseert het verlieslandschap van zijn model: nulpunten, extremen, buigpunten en monotoniciteit van een functie volledig bepalen.',
      outro: 'Amir kan nu elke geheel-rationale functie volledig karakteriseren: nulpunten vinden, hoge- en dieptepunten bepalen, buigpunten berekenen en het monotoniciteitgedrag aflezen. "Als ik het verlieslandschap zo teken, zie ik meteen of mijn optimizer in de juiste vallei is geland", zegt hij.',
    },
    objectives: {
      zeros_extrema: 'Nulpunten en extremen van een functie systematisch bepalen',
      inflection_points: 'Buigpunten berekenen en hun betekenis voor het curveverloop begrijpen',
      monotonicity_symmetry: 'Monotoniciteitgedrag en symmetrie van een functie analyseren',
    },
    explanation: {
      intro: 'Een curveanalyse is de volledige analyse van een functie. We beginnen met de nulpunten — de punten waar de grafiek de $x$-as snijdt:',
      extrema: 'Extremen (hoge- en dieptepunten) vind je waar de eerste afgeleide nul wordt. Maar let op: niet elke nulplaats van $f\'$ is automatisch een extremum! Je hebt de tweede afgeleide nodig ter bevestiging:',
      amir_tip: 'Het verlieslandschap van mijn model heeft veel lokale minima. Met curveanalyse kan ik controleren of een kritiek punt echt een minimum is — of slechts een zadelpunt waar de optimizer blijft hangen.',
      inflection: 'Buigpunten markeren de overgang tussen links- en rechtskromming. Hier verandert het krommingsgedrag — de tweede afgeleide wisselt van teken:',
      monotonicity: 'Het monotoniciteitgedrag vertelt je waar de functie stijgt en waar ze daalt. Je leest het direct af aan het teken van de eerste afgeleide:',
    },
    concepts: {
      extrema: { title: 'Extremen (hoge-/dieptepunten)', desc: 'Noodzakelijke voorwaarde: $f\'(x_0) = 0$. Voldoende: $f\'\'(x_0) < 0$ geeft hoogpunt, $f\'\'(x_0) > 0$ geeft dieptepunt. Beide voorwaarden samen maken het zeker.' },
      inflection: { title: 'Buigpunten', desc: 'Waar de kromming wisselt: $f\'\'(x_0) = 0$ EN $f\'\'\'(x_0) \\neq 0$. Bij normale verdelingen markeren buigpunten de standaardafwijking.' },
      symmetry: { title: 'Symmetrie', desc: 'Assymmetrie ten opzichte van de $y$-as bij $f(-x) = f(x)$ (alleen even exponenten). Puntsymmetrie ten opzichte van de oorsprong bij $f(-x) = -f(x)$ (alleen oneven exponenten). Bespaart rekenwerk!' },
    },
    examples: {
      complete_analysis: {
        title: 'Volledige curveanalyse',
        context: 'Amir onderzoekt een kubische functie — vergelijkbaar met verliesfuncties met meerdere extremen.',
        step1: 'Gegeven is de functie — we analyseren haar volledig:',
        step2: 'Eerste afgeleide bepalen en nulpunten vinden (noodzakelijke voorwaarde voor extremen):',
        step3: 'Tweede afgeleide in de kritieke punten evalueren (voldoende voorwaarde): negatieve waarde = maximum, positieve waarde = minimum:',
        step4: 'Buigpunt bepalen via $f\'\' = 0$ en bevestigen met derde afgeleide:',
        amir_comment: 'Precies zo analyseer ik het verlieslandschap: eerst kritieke punten vinden, dan controleren of het minimum of zadelpunt is. Bij hoogdimensionale functies doet mijn optimizer dat numeriek — maar het principe is identiek.',
      },
      graph_properties: {
        title: 'Symmetrie en extremen benutten',
        context: 'Een symmetrische functie — de helft van het werk vervalt door symmetrie.',
        step1: 'Gegeven is een functie van de 4e graad — we controleren eerst symmetrie:',
        step2: 'Invullen van $-x$: alle exponenten even, dus $f(-x) = f(x)$ — assymmetrisch! Extremen komen symmetrisch voor:',
        step3: 'Eerste afgeleide nul stellen — door symmetrie volstaat het de positieve oplossingen te vinden:',
        step4: 'Functiewaarden berekenen — dankzij symmetrie geldt $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symmetrie in data is goud waard: als ik weet dat mijn verliesfunctie symmetrisch is, hoef ik maar de helft van de parameterruimte te doorzoeken. Dat halveert de trainingstijd!',
      },
    },
    realworld: {
      data_distribution: { title: 'Dataverdelingen analyseren', desc: 'De normale verdeling heeft buigpunten bij $\\mu \\pm \\sigma$. Curveanalyse vertelt je waar de meeste datapunten geconcentreerd zijn en waar de spreiding begint.' },
      profit_analysis: { title: 'Winstmaximalisatie', desc: 'De winstfunctie $G(x)$ heeft een maximum — de optimale productiehoeveelheid. Curveanalyse laat precies zien bij welke hoeveelheid de winst maximaal is.' },
      population_growth: { title: 'Bevolkingsgroei', desc: 'Het buigpunt van een groeicurve markeert het moment waarop de groei afneemt. Epidemiologen gebruiken precies deze analyse voor infectiecurves.' },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Elke nulplaats van $f\'$ is automatisch een extremum',
        correct: 'Nulplaats van $f\'$ PLUS tekenwissel of $f\'\' \\neq 0$ controleren',
        why: 'Bij $f(x) = x^3$ is $f\'(0) = 0$, maar geen extremum — het is een zadelpunt! Je MOET de voldoende voorwaarde ($f\'\' \\neq 0$ of tekenwissel van $f\'$) controleren.',
        amir_warning: 'In hogere dimensies heten zulke punten "Saddle Points" — de optimizer blijft daar hangen en denkt een minimum gevonden te hebben. Altijd de tweede afgeleide checken!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ volstaat voor een buigpunt',
        correct: '$f\'\'(x_0) = 0$ EN $f\'\'\'(x_0) \\neq 0$ samen bevestigen het buigpunt',
        why: 'Bij $f(x) = x^4$ is $f\'\'(0) = 0$, maar geen buigpunt — de kromming wisselt niet! De derde afgeleide moet ongelijk aan nul zijn om de krommingswissel te garanderen.',
        amir_warning: 'Dezelfde valkuil als bij extremen: de noodzakelijke voorwaarde alleen is nooit genoeg. Altijd de voldoende voorwaarde controleren — anders vertrouw je op een fout resultaat.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse moet op de telefoon draaien — maar Amirs model heeft te veel geheugen nodig. "Je moet de netwerkarchitectuur optimaliseren", zegt zijn teamgenote Sara. "Maximale nauwkeurigheid bij minimaal geheugenverbruik." Amir herkent: dit is een klassiek optimalisatieprobleem — een grootheid optimaliseren terwijl een andere beperkt is.',
      challenge: 'Amir wil de beste modelarchitectuur vinden: maximale voorspellingskwaliteit onder de randvoorwaarde van beperkte rekenkracht.',
      outro: 'Amir heeft het principe begrepen: doelfunctie opstellen, randvoorwaarde invullen, tot een variabele reduceren, differentiëren, nul stellen, controleren. "Of het nu gaat om blikafmetingen of modelparameters — het schema is altijd hetzelfde", stelt hij vast. Zijn model past nu in 50 MB.',
    },
    objectives: {
      setup_equations: 'Uit een praktijksituatie doelfunctie en randvoorwaarde opstellen',
      optimize_constraints: 'Door de randvoorwaarde in te vullen een functie van een variabele maken en optimaliseren',
      verify_extremum: 'Met de tweede afgeleide controleren of er een maximum of minimum is, en randwaarden meenemen',
    },
    explanation: {
      intro: 'Bij optimalisatieproblemen gaat het altijd om hetzelfde: een grootheid moet zo groot of klein mogelijk worden (doelfunctie), terwijl er een beperking geldt (randvoorwaarde):',
      strategy: 'De strategie is altijd dezelfde: (1) doelfunctie opstellen — wat moet geoptimaliseerd worden? (2) randvoorwaarde vinden — welke beperking geldt? (3) randvoorwaarde naar een variabele oplossen en in de doelfunctie invullen. (4) differentiëren, nul stellen, controleren.',
      amir_tip: 'Hyperparameter-tuning is precies zo\'n optimalisatieprobleem: ik wil de validatiefout minimaliseren (doelfunctie), maar mijn GPU-geheugen is beperkt (randvoorwaarde). Het schema uit de wiskundeles werkt 1:1!',
      substitution: 'Na het invullen van de randvoorwaarde hangt de doelfunctie nog maar van een variabele af. Nu wordt gewoon gedifferentieerd en het kritieke punt gecontroleerd:',
      domain_check: 'Vergeet het definitiegebied niet! Bij reele problemen zijn er vaak grenzen (bijv. $r > 0$ bij een straal). Vergelijk de functiewaarde in het kritieke punt met de randwaarden — soms ligt het optimum op de rand.',
    },
    concepts: {
      target_function: { title: 'Doelfunctie', desc: 'De grootheid die geoptimaliseerd moet worden — maximale winst, minimaal oppervlak, beste nauwkeurigheid. Hangt aanvankelijk vaak van twee variabelen af.' },
      constraint: { title: 'Randvoorwaarde', desc: 'De beperking die geldt — vast volume, beperkt budget, beperkte parameters. Maakt het mogelijk een variabele te elimineren en de doelfunctie tot een variabele te reduceren.' },
      boundary_check: { title: 'Randwaardecontrole', desc: 'Het optimum kan ook op de rand van het definitiegebied liggen. Vergelijk altijd $f(x_{opt})$ met de functiewaarden op de randen $f(a)$ en $f(b)$.' },
    },
    examples: {
      can_volume: {
        title: 'Blik met minimaal materiaalverbruik',
        context: 'Een cilindrisch blik moet 330 ml bevatten — met zo min mogelijk blik.',
        step1: 'Randvoorwaarde: het volume is vast. Naar $h$ oplossen om een variabele te elimineren:',
        step2: 'Doelfunctie (oppervlakte) opstellen en $h$ invullen — nu hangt alles alleen van $r$ af:',
        step3: 'Differentiëren, nul stellen en naar $r$ oplossen — dit is de optimale straal:',
        step4: 'Tweede afgeleide controleren: positief betekent minimum — we hebben inderdaad het zuinigste blik gevonden:',
        amir_comment: 'Dit is precies als modelcompressie: vaste nauwkeurigheid (randvoorwaarde), minimaal aantal parameters (doelfunctie). Ik vervang $r$ door "laagbreedte" en $h$ door "diepte" — zelfde principe!',
      },
      profit_max: {
        title: 'Maximale winst',
        context: 'Een startup wil de optimale prijs voor zijn abonnementsmodel vinden.',
        step1: 'Winstfunctie opstellen: opbrengst min kosten — hier al in een variabele:',
        step2: 'Afgeleide nul stellen — de optimale hoeveelheid:',
        step3: 'Tweede afgeleide is negatief — dus een maximum. De winst is hier inderdaad maximaal:',
        step4: 'Maximale winst berekenen door invullen:',
        amir_comment: 'Prijsoptimalisatie is een klassieker in Data Science. Bij DataPulse zouden we de optimale abonnementsstap precies zo kunnen berekenen — winst maximaliseren onder de voorwaarde dat gebruikers niet afhaken.',
      },
    },
    realworld: {
      hyperparameter: { title: 'Hyperparameteroptimalisatie', desc: 'De learning rate $\\alpha$ in Gradient Descent moet optimaal gekozen worden: te groot = divergentie, te klein = eindeloos langzaam. De optimale $\\alpha$ minimaliseert de validatiefout.' },
      packaging: { title: 'Verpakkingsontwerp', desc: 'Minimaal materiaalverbruik bij vast volume — precies dat lossen ingenieurs dagelijks op. Elk drankblik, elke doos is het resultaat van een optimalisatieprobleem.' },
      solar_panel: { title: 'Uitrichting van zonnepanelen', desc: 'De hellingshoek van een zonnepaneel bepaalt de energieopbrengst. De optimale hoek vinden is een optimalisatieprobleem met de zonnestand als randvoorwaarde.' },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Doelfunctie met twee variabelen direct differentiëren',
        correct: 'Eerst randvoorwaarde invullen, dan differentiëren',
        why: 'Met twee variabelen kun je niet zomaar naar $x$ differentiëren — $y$ verandert mee! Je MOET de randvoorwaarde gebruiken om $y$ door $x$ uit te drukken. Pas dan hangt alles van een variabele af.',
        amir_warning: 'Dat is als een ML-model met te veel vrije parameters: zonder constraints geen zinvol optimum. De randvoorwaarde reduceert de vrijheidsgraden — precies als regularisatie.',
      },
      no_boundary: {
        wrong: 'Kritiek punt als globaal optimum aannemen',
        correct: 'Kritiek punt met randwaarden vergelijken',
        why: 'Op een begrensd interval $[a, b]$ kan het optimum op de rand liggen! $f\'(x_0) = 0$ levert alleen lokale kandidaten. Je moet $f(x_0)$, $f(a)$ en $f(b)$ vergelijken.',
        amir_warning: 'In de praktijk heeft elke parameter een toegestaan bereik. Mijn learning rate mag niet negatief zijn, de batchgrootte niet boven het GPU-geheugen uit. Randwaarden controleren is verplicht!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse draait — maar Amir heeft een nieuwe metriek nodig: hoeveel songs luisteren gebruikers in totaal per week? Hij heeft de luistersnelheid $r(t)$ als functie van de tijd, maar hij heeft het totaal nodig. "Snelheid maal tijd geeft hoeveelheid — maar de snelheid verandert constant", piekert Amir. Zijn vriend Kai grijnst: "Klinkt als een integraal."',
      challenge: 'Amir wil uit de tijdsafhankelijke luistersnelheid $r(t)$ het totale aantal beluisterde songs berekenen — dat brengt hem bij de integraalrekening.',
      outro: 'Amir kan nu primitieven bepalen, bepaalde integralen berekenen en oppervlakten tussen curves bepalen. "Integratie is het omgekeerde van differentiatie — en in de praktijk sommeer ik daarmee continue data op", vat hij samen. Zijn wekelijkse luistermetriek staat.',
    },
    objectives: {
      antiderivative: 'Primitieven bepalen met de machtsregel achteruit en de integratieconstante $C$ begrijpen',
      definite_integral: 'Bepaalde integralen berekenen met de hoofdstelling: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'De hoofdstelling van de analyse begrijpen en bij oppervlakteberekeningen toepassen',
    },
    explanation: {
      intro: 'Integratie is het omgekeerde van differentiatie: als $F\'(x) = f(x)$, dan is $F(x)$ een primitieve van $f(x)$. De algemene primitieve bevat altijd de constante $C$:',
      power_rule_integral: 'De machtsregel achteruit: exponent met 1 verhogen en door de nieuwe exponent delen. Dit werkt voor alle $n \\neq -1$:',
      amir_tip: 'Integratie is als aggregatie in databases: differentiatie geeft de momentane veranderingssnelheid, integratie somt alles op. Als ik de downloads per uur ken, geeft de integraal me de totale downloads over een periode.',
      definite_integral: 'De bepaalde integraal berekent het "totale effect" tussen twee grenzen. De hoofdstelling maakt het eenvoudig: primitieve bij de bovengrens min primitieve bij de ondergrens:',
      area_interpretation: 'Meetkundig is de bepaalde integraal de oppervlakte tussen curve en $x$-as. Let op: oppervlakten onder de $x$-as tellen negatief! Voor de echte oppervlakte heb je de absolute waarde nodig:',
    },
    concepts: {
      antiderivative: { title: 'Primitieve', desc: 'Een functie $F(x)$ met $F\'(x) = f(x)$. De constante $+C$ is belangrijk omdat verschillende primitieven slechts een constante van elkaar verschillen.' },
      definite_integral: { title: 'Bepaalde integraal', desc: 'Berekent de getekende oppervlakte tussen $f(x)$ en de $x$-as van $a$ tot $b$. Bovengrens invullen min ondergrens invullen.' },
      fundamental_theorem: { title: 'Hoofdstelling van de analyse', desc: 'Verbindt differentiatie en integratie: differentiëren en integreren zijn omgekeerde bewerkingen. De bepaalde integraal kan via de primitieve berekend worden.' },
    },
    examples: {
      area_calculation: {
        title: 'Oppervlakte tussen parabool en $x$-as',
        context: 'Amir visualiseert de verdeling van luistertijd als oppervlakte onder een curve.',
        step1: 'Functie en nulpunten bepalen — dit zijn onze integratiegrenzen:',
        step2: 'Primitieve bepalen met de machtsregel achteruit:',
        step3: 'Bepaalde integraal berekenen: bovengrens invullen min ondergrens invullen:',
        step4: 'De integraal is negatief omdat de parabool onder de $x$-as ligt. Voor de oppervlakte de absolute waarde nemen:',
        amir_comment: 'Negatieve integralen hebben in data-analyse helemaal zin: als $f(x)$ de afwijking van het gemiddelde is, laat een negatieve integraal zien dat de waarden overall onder het gemiddelde lagen.',
      },
      distance_from_velocity: {
        title: 'Afstand uit snelheid berekenen',
        context: 'Hoe ver rijdt een autonoom rijdende auto in 4 seconden?',
        step1: 'Gegeven is de snelheidsfunctie:',
        step2: 'De totale afstand is de integraal van de snelheid over de tijd:',
        step3: 'Primitieve bepalen — elke term apart integreren:',
        step4: 'Grenzen invullen en verschil berekenen:',
        amir_comment: 'Sensordata komen binnen als snelheid — snelheid, datadoorvoer, requests per seconde. De integraal maakt er de totale hoeveelheid van. Mijn dashboard toont precies dat: $\\int_0^T r(t)\\,dt$ = totale streams.',
      },
    },
    realworld: {
      data_aggregation: { title: 'Data-aggregatie over tijd', desc: 'Als de datasnelheid $r(t)$ bekend is, levert de integraal de totale hoeveelheid over een periode. Zo berekenen streamingdiensten maandelijkse luisterminuten uit data per seconde.' },
      energy_consumption: { title: 'Energieverbruik', desc: 'Vermogen $P(t)$ in watt maal tijd geeft energie in joule — maar alleen bij constant vermogen. Bij wisselend vermogen heb je de integraal nodig: $E = \\int P(t)\\,dt$.' },
      probability: { title: 'Kansen', desc: 'De kans dat een stochastische variabele tussen $a$ en $b$ ligt, is de oppervlakte onder de dichtheidsfunctie — dus een bepaalde integraal. De basis van alle statistiek.' },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Integratieconstante $C$ vergeten bij onbepaalde integralen',
        correct: 'Altijd $+ C$ toevoegen bij de onbepaalde integraal',
        why: 'Als $F\'(x) = 2x$, dan is zowel $x^2$ als $x^2 + 7$ een primitieve. De $+C$ vertegenwoordigt alle mogelijke primitieven. Bij de bepaalde integraal valt $C$ weg — daar mag je het weglaten.',
        amir_warning: 'In de praktijk is $C$ de beginvoorwaarde: hoeveel songs had de gebruiker al beluisterd voordat we begonnen te meten? Zonder $C$ ontbreekt de startwaarde en begint je berekening bij nul in plaats van bij de echte waarde.',
      },
      negative_area: {
        wrong: 'Integraal direct als oppervlakte interpreteren, ook als negatief',
        correct: 'Voor echte oppervlakten de absolute waarde van de integraalwaarden nemen',
        why: 'De integraal $\\int_a^b f(x)\\,dx$ kan negatief zijn als $f(x) < 0$. Dat is correct als getekende oppervlakte. Als je de meetkundige oppervlakte nodig hebt, moet je $|f(x)|$ integreren of de deeloppervlakten apart berekenen.',
        amir_warning: 'Stel je voor dat je de totale luistertijd berekent en een negatief resultaat krijgt — dat zou overduidelijk fout zijn. Bij oppervlakteproblemen altijd controleren of de functie van teken wisselt en deelintervallen apart berekenen!',
      },
    },
  },
};
