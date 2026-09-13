export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Het deeltjessysteem van "Hafenlichter 3D" ziet er grandioos uit — vonken spatten, mist wervelt, vuur laait op. Maar Kai heeft een prestatieprobleem: duizenden deeltjes tegelijk laten de GPU zweten. "Ik moet berekenen hoe snel deeltjes vervagen, zodat ik ze op tijd uit het geheugen gooi", legt hij uit aan Mia. Het antwoord ligt in de $e$-functie en haar tegenhanger, de natuurlijke logaritme — de gereedschappen voor alles wat exponentieel groeit of vervalt.',
      challenge: 'Kai moet de levensduur van deeltjes wiskundig modelleren: hoe snel vervaagt een vonk? Wanneer is een rookdeeltje zo transparant dat het verwijderd kan worden? Daarvoor heeft hij de kettingregel voor $e$-functies nodig, afgeleiden van $\\ln$ en het oplossen van vervalvergelijkingen.',
      outro: 'Met samengestelde $e$-functies en $\\ln$-afgeleiden heeft Kai een slim deeltjessysteem gebouwd: elke vonk volgt een precieze vervalcurve, elk rookdeeltje wordt precies dan gerecycled wanneer zijn dekking onder de waarnemingsdrempel zakt. "De kettingregel is eigenlijk mijn prestatie-optimalisator", grijnst Kai. "De GPU bedankt me met 60 in plaats van 30 FPS." Mia vult aan: "En het mooiste — dezelfde wiskunde beschrijft ook radioactief verval en de laadcurves van condensatoren."',
    },
    objectives: {
      advanced_e_properties: 'Samengestelde $e$-functies met de kettingregel differentiëren: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'De afgeleide van $\\ln(g(x))$ beheersen en gebruiken bij functieonderzoek',
      composite_exp_functions: 'Producten van polynomen en $e$-functies analyseren (extrema, buigpunten)',
      differential_equations: 'Eenvoudige differentiaalvergelijkingen van het type $f\'(t) = k \\cdot f(t)$ begrijpen en vervalmodellen opstellen',
    },
    explanation: {
      intro: 'In klas 11 heb je de basis van $e^x$ en $\\ln(x)$ geleerd. Nu wordt het serieus: we differentiëren samengestelde $e$-functies, onderzoeken grafieken met $\\ln$ en lossen vervalvergelijkingen op. De sleutel is de kettingregel — als er in de exponent niet alleen $x$ staat, maar een hele functie $g(x)$, dan levert de buitenste afgeleide $e^{g(x)}$ en komt de binnenste afgeleide $g\'(x)$ er als factor bij:',
      ln_derivative: 'Net zo elegant: de afgeleide van $\\ln(g(x))$ met de kettingregel. De natuurlijke logaritme "draait de functie om" — de binnenste afgeleide staat in de teller, de binnenste functie zelf in de noemer:',
      kai_tip: 'In mijn 3D-engine duiken $e$-functies overal op: deeltjesverval, mistdichtheid, audio-fade-out. De truc is altijd dezelfde — de kettingregel. Als ik $e^{-0{,}5t^2}$ voor een Gauss-verdeling differentieer, is de binnenste functie $g(t) = -0{,}5t^2$ en de binnenste afgeleide $g\'(t) = -t$. Invullen, klaar. Zodra je dit patroon een keer onder de knie hebt, gaat het vanzelf!',
      integration: 'Bij het integreren loopt het proces achteruit. Voor eenvoudige exponentiële functies geldt: de factor in de exponent verhuist naar de noemer. En de beroemde $\\frac{1}{x}$-regel leidt direct naar $\\ln$:',
      decay_model: 'Exponentieel verval is HET standaardmodel voor processen waarbij de veranderingssnelheid evenredig is met de huidige waarde: $f\'(t) = -\\lambda \\cdot f(t)$. De oplossing is altijd een $e$-functie met een negatieve exponent. De halveringstijd $t_{1/2}$ geeft aan na hoeveel tijd de helft van de beginwaarde over is:',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Kettingregel voor $e$-functies',
        desc: 'Bij $f(x) = e^{g(x)}$ is de buitenste functie $e^u$ (afgeleide: $e^u$) en de binnenste functie $g(x)$. Het resultaat: de $e$-functie blijft staan, vermenigvuldigd met de binnenste afgeleide. Voorbeeld: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Afgeleide van $\\ln(g(x))$',
        desc: 'De kettingregel voor de logaritme levert een breuk op: binnenste afgeleide gedeeld door binnenste functie. Dat is vooral handig als $g(x)$ een polynoom is — bijv. $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Belangrijk: het domein wordt beperkt door $g(x) > 0$.',
      },
      exp_integration: {
        title: 'Logaritmische integratie',
        desc: 'Als een integrand de vorm $\\frac{f\'(x)}{f(x)}$ heeft, is de primitieve direct $\\ln|f(x)| + C$. Dat is de omkering van de $\\ln$-afgeleide en een van de belangrijkste integratietrucs. Voorbeeld: $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Deeltjesverval modelleren',
        context: 'In het deeltjessysteem van Kai starten 5000 vonkdeeltjes tegelijk. Hun aantal neemt exponentieel af — Kai wil de vervalsnelheid en de halveringstijd berekenen.',
        step1: 'Vervalmodel opstellen — $N_0 = 5000$ deeltjes, vervalconstante $\\lambda = 0{,}03\\,\\text{s}^{-1}$:',
        step2: 'Differentiëren met de kettingregel — binnenste functie $g(t) = -0{,}03t$, binnenste afgeleide $g\'(t) = -0{,}03$:',
        step3: 'Beginsnelheid berekenen — bij $t = 0$ verdwijnen 150 deeltjes per seconde:',
        step4: 'Halveringstijd bepalen — $N(t_{1/2}) = \\frac{N_0}{2}$ oplossen met $\\ln$:',
        kai_comment: 'Na 23 seconden is de helft van de deeltjes weg — dat betekent dat ik al eerder geheugen kan vrijmaken voor de volgende explosie. In de engine leg ik de verwijderdrempel bij $5\\%$ dekking, dat is ongeveer $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Functieonderzoek met $e$-functie',
        context: 'Kai modelleert de helderheid van een lichtflits: eerst neemt die toe, dan neemt die af. De helderheidscurve heeft de vorm $f(x) = x^2 \\cdot e^{-x}$ — een typische "flitsfunctie".',
        step1: 'Functie gegeven — product van een polynoom en een afnemende $e$-functie:',
        step2: 'Afgeleide met de productregel: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — voor de tweede factor hebben we de kettingregel nodig:',
        step3: 'Nulpunten van de afgeleide: $e^{-x} > 0$ altijd, dus alleen $x(2-x) = 0$ beslist:',
        step4: 'Maximum bepalen — bij $x = 2$ de functiewaarde uitrekenen:',
        kai_comment: 'Deze "eerst-omhoog-dan-omlaag"-curve is perfect voor lichteffecten. Bij $x = 0$ is alles donker, bij $x = 2$ maximale helderheid, daarna zacht uitdoven. In mijn shader gebruik ik precies deze functie voor mondingsvuur en explosieflitsen!',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Deeltjessystemen in 3D-engines',
        desc: 'Elke vonk, elke rookpluim, elk vuur in een videogame volgt een exponentiële vervalcurve $N(t) = N_0 \\cdot e^{-\\lambda t}$. De vervalconstante $\\lambda$ bepaalt hoe snel deeltjes vervagen. In Unity en Unreal Engine stel je precies deze parameter in als je "Lifetime" en "Fade" configureert.',
      },
      signal_processing: {
        title: 'Audiobewerking & signaaldemping',
        desc: 'Als je in GarageBand of een DJ-tool een galm-effect hoort, sterft de toon exponentieel uit: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. De $e$-functie regelt het volume, de $\\sin$ de trilling. Ook bluetoothsignalen en het bereik van wifi volgen dit model — daarom gaat het streamen haperen naarmate je verder van de router af bent.',
      },
      learning_curve: {
        title: 'Leercurve & skill-progressie',
        desc: 'Hoe snel leer je een nieuw spel? De leercurve $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ beschrijft hoe vaardigheden eerst snel groeien en dan een maximum naderen. Gamedesigners gebruiken dit model om moeilijkheidscurves te ontwerpen — en ook je hersenen volgen precies deze functie bij het leren van woordjes of het oefenen op een instrument.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Binnenste afgeleide vergeten: $(e^{3x})\' = e^{3x}$',
        correct: 'Kettingregel toepassen: $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'Zodra er in de exponent meer dan alleen $x$ staat, MOET de kettingregel erbij. De binnenste functie is hier $g(x) = 3x$ met $g\'(x) = 3$. Deze factor mag niet ontbreken!',
        kai_warning: 'In mijn shader had ik ooit $e^{-0{,}5t^2}$ gedifferentieerd en de factor $-t$ vergeten. Resultaat: deeltjes die nooit veranderden — als bevroren rook. Sindsdien controleer ik elke keer: staat er meer dan $x$ in de exponent? Dan kettingregel!',
      },
      ln_negative: {
        wrong: 'Absolutewaardestrepen vergeten: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Correct met absolute waarde: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'De functie $\\frac{1}{x}$ is ook voor negatieve $x$-waarden gedefinieerd, maar $\\ln(x)$ alleen voor $x > 0$. De absolutewaardestrepen zorgen ervoor dat de primitieve op het hele domein geldt. Bij bepaalde integralen met positieve grenzen mag je de strepen weglaten — bij onbepaalde integralen nooit!',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Voor "Hafenlichter 3D" bouwt Kai een procedurele levelgenerator: bruggen, tunnels en huizen moeten ontstaan uit wiskundige curves die rond assen worden gedraaid. "Stel je voor: ik definieer een profiel en laat het draaien — en ik heb meteen een zuil, een koepel of een scheepsromp", zegt Kai enthousiast. Maar hoe berekent hij het exacte volume van deze 3D-lichamen? Het antwoord: omwentelingsvolumes, partiële integratie en een paar elegante integratietechnieken.',
      challenge: 'Kai moet het volume berekenen van 3D-objecten die ontstaan door curves te laten draaien. Bovendien heeft hij partiële integratie nodig voor complexe belichtingsformules en moet hij controleren of bepaalde integralen überhaupt convergeren.',
      outro: 'De levelgenerator draait: Kai laat curveprofielen rond assen draaien en krijgt perfecte 3D-lichamen met een exact berekend volume. "Partiële integratie was de sleutel voor de belichtingsintegralen", vertelt hij aan Amir, "en oneigenlijke integralen laten me zien wanneer een lichteffect een eindige totale energie heeft — zelfs als het theoretisch oneindig ver reikt." Mia knikt: "Dezelfde wiskunde gebruiken ingenieurs om vaten te dimensioneren en natuurkundigen om golfenergie te berekenen."',
    },
    objectives: {
      integration_techniques: 'Partiële integratie en substitutie zeker toepassen',
      rotation_volumes: 'Omwentelingsvolumes rond de $x$-as berekenen met $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Oneigenlijke integralen op convergentie controleren en berekenen',
      partial_integration: 'De methode van partiële integratie gericht inzetten als producten geïntegreerd moeten worden',
    },
    explanation: {
      intro: 'In klas 11 heb je bepaalde integralen leren kennen als oppervlakte. Nu komen er drie nieuwe technieken bij. De eerste is partiële integratie — de "omkering" van de productregel. Als je een product zoals $x \\cdot e^x$ moet integreren, splits je het op in $u$ en $v\'$:',
      substitution: 'De tweede techniek is substitutie — de "omkering" van de kettingregel bij het differentiëren. Als een functie "in een andere zit", vervang je de binnenste functie door een nieuwe variabele:',
      kai_tip: 'Mijn truc voor partiële integratie: "LIATE" — Logaritme, Inverse goniometrie, Algebraïsch, Trigonometrisch, Exponentieel. Dat is de volgorde waarin je $u$ kiest. Dus bij $\\int x \\cdot e^x\\,\\mathrm{d}x$ is $u = x$ (algebraïsch) en $v\' = e^x$ (exponentieel). Bij $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$ is $u = \\ln(x)$ en $v\' = x$. Werkt bijna altijd!',
      rotation_volume: 'Nu wordt het driedimensionaal: als je de grafiek van $f(x)$ rond de $x$-as laat draaien, ontstaat een omwentelingslichaam. Het volume bereken je door je voor te stellen dat het lichaam is opgebouwd uit oneindig veel dunne cirkelschijfjes — elk schijfje heeft de straal $f(x)$:',
      improper: 'Wat gebeurt er als een integratiegrens $\\infty$ is? Of als de integrand op een plek onbegrensd wordt? Dan spreken we van oneigenlijke integralen. Je vervangt de probleemplek door een limiet en controleert of er een eindige waarde uitkomt:',
    },
    concepts: {
      partial_integration: {
        title: 'Partiële integratie',
        desc: 'De omkering van de productregel: je splitst de integrand op in $u$ (wordt gedifferentieerd) en $\\mathrm{d}v$ (wordt geïntegreerd). Doel: de nieuwe integraal $\\int v\\,\\mathrm{d}u$ moet eenvoudiger zijn dan de oorspronkelijke. Typische toepassing: producten van een polynoom en een $e$-functie of van een polynoom en goniometrie.',
      },
      rotation_volume: {
        title: 'Omwentelingsvolume',
        desc: 'Een functiegrafiek die rond de $x$-as draait, vormt een 3D-lichaam. Het volume volgt uit de som van oneindig veel cirkelschijfjes met straal $f(x)$ en dikte $\\mathrm{d}x$. Elk schijfje heeft het volume $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$ — opgeteld (geïntegreerd) levert dat de formule.',
      },
      improper_integral: {
        title: 'Oneigenlijke integralen',
        desc: 'Integralen met $\\infty$ als grens of met een onbegrensde integrand. Je vervangt de probleemplek door een variabele en bepaalt de limiet. Als de limiet bestaat en eindig is, heet de integraal convergent — anders divergent. Klassieker: $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ convergeert, maar $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ divergeert.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Omwentelingslichaam voor leveldesign',
        context: 'Kai wil een zuil genereren waarvan het profiel de curve $f(x) = \\sqrt{x}$ volgt. Tussen $x = 0$ en $x = 4$ draait de curve rond de $x$-as — hoe groot is het volume van de zuil?',
        step1: 'Profiel definiëren — de wortelfunctie op het interval $[0;\\,4]$:',
        step2: 'Formule voor het omwentelingsvolume opstellen — $f(x)$ kwadrateren en $\\pi$ ervoor:',
        step3: 'Primitieve bepalen en grenzen invullen:',
        step4: 'Resultaat — de zuil heeft een volume van $8\\pi$ volume-eenheden:',
        kai_comment: 'Dat is precies de formule die mijn procedurele generator gebruikt! Ik definieer curveprofielen, laat ze draaien en ken meteen het volume — belangrijk voor natuurkundesimulaties, zodat objecten het juiste gewicht hebben.',
      },
      partial_int: {
        title: 'Partiële integratie voor belichting',
        context: 'In de lichtberekeningsshader van Kai duikt de integraal $\\int x \\cdot e^x\\,\\mathrm{d}x$ op — een product dat niet direct te integreren is.',
        step1: 'Opsplitsing kiezen: $u = x$ (wordt eenvoudiger bij differentiëren), $v\' = e^x$ (laat zich makkelijk integreren):',
        step2: 'Afgeleiden en primitieven bepalen:',
        step3: 'In de formule invullen — de nieuwe integraal is nu alleen nog $\\int e^x\\,\\mathrm{d}x$:',
        step4: 'Verder vereenvoudigen — buiten haakjes brengen levert een elegante vorm op:',
        kai_comment: 'Het moment waarop de nieuwe integraal eenvoudiger is dan de oude — dat is het succesgevoel bij partiële integratie. Als het ingewikkelder wordt, heb je $u$ en $v\'$ verkeerd gekozen. Dan gewoon omwisselen!',
      },
    },
    realworld: {
      '3d_printing': {
        title: '3D-printen & CAD-volumeberekening',
        desc: 'Elke 3D-printer moet weten hoeveel materiaal hij nodig heeft. Bij rotatiesymmetrische onderdelen (vazen, buizen, spuitmonden) berekent de slicersoftware het volume met precies deze omwentelingsformule. Ook in CAD-programma\'s zoals Fusion 360 zit integraalrekening — als je een doorsnede laat draaien, rekent de software $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Licht-falloff in game-engines',
        desc: 'Hoeveel licht ontvangt een scène in totaal van een puntlichtbron? De intensiteit neemt af volgens $I(r) = I_0 \\cdot e^{-\\alpha r}$. De oneigenlijke integraal $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ laat zien: de totale energie is eindig! Daarom kunnen game-engines lampen met een beperkt bereik simuleren zonder natuurkundig fout te zitten.',
      },
      terrain_volume: {
        title: 'Terreingeneratie & grondwerk',
        desc: 'Bij wegenbouwprojecten en in Minecraft-achtige games moet het volume van heuvellandschappen worden berekend. De formule $V = \\iint h(x,y)\\,\\mathrm{d}A$ telt de hoogte over de hele oppervlakte op — een tweedimensionale integraal. Bouwkundigen berekenen er de grondafgraving mee, gameontwikkelaars de hoeveelheid data voor terrein-meshes.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Kwadrateren vergeten: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Correct gekwadrateerd: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Elk cirkelschijfje heeft de oppervlakte $\\pi r^2$ met $r = f(x)$. Zonder kwadrateren bereken je geen cirkeloppervlakte, maar iets heel anders. Ezelsbruggetje: "pi-r-kwadraat" — het kwadraat hoort bij de cirkelformule!',
        kai_warning: 'Ik heb deze fout ooit op een game jam gemaakt — mijn zuil had maar een fractie van het juiste volume en klapte in de natuurkundesimulatie in elkaar. Sindsdien schrijf ik de formule altijd groot op mijn monitor: $V = \\pi \\int [f(x)]^2$!',
      },
      improper_no_limit: {
        wrong: 'Direct $\\infty$ invullen in plaats van een limiet te bepalen',
        correct: 'Limiet correct formuleren en convergentie controleren',
        why: '$\\infty$ is geen getal dat je kunt invullen! Je moet altijd de limiet $\\lim_{b \\to \\infty}$ bepalen en controleren of die bestaat. Anders zie je gemakkelijk over het hoofd dat een integraal divergeert — zoals bij $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, die ondanks de afnemende functie geen eindige waarde heeft.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: 'De 3D-wereld van "Hafenlichter 3D" krijgt vorm: havenkranen, gevels, wateroppervlakken — alles bestaat uit driehoeken, en elke driehoek ligt in een vlak. "Voor realistische belichting moet ik voor elk vlak de normaalvector berekenen", legt Kai uit. "En voor collision detection heb ik snijpunten van lijnen met vlakken nodig." Welkom in de analytische meetkunde van de ruimte — de wiskunde achter elke 3D-engine.',
      challenge: 'Kai moet vlakvergelijkingen opstellen uit drie punten, normaalvectoren berekenen met het uitproduct, snijpunten van lijn en vlak vinden en afstanden tussen objecten bepalen — alles in realtime voor zijn game-engine.',
      outro: 'Het collision-detectionsysteem van Kai werkt perfect: kogels raken muren, personages staan op vloeren, en de belichting berekent voor elk vlak de perfecte lichtinval via normaalvectoren. "Het uitproduct is mijn meestgebruikte tool", zegt Kai. "Twee richtingsvectoren erin, normaalvector eruit — en ik weet meteen hoe het vlak in de ruimte ligt." Amir vult aan: "En de afstandsformule checkt of een speler dicht genoeg bij een object is om het op te pakken."',
    },
    objectives: {
      plane_equations: 'Vlakvergelijkingen in parametervorm, normaalvorm en coördinatenvorm opstellen en in elkaar omzetten',
      line_plane_intersection: 'Snijpunten van lijnen met vlakken berekenen en onderlinge liggingen bepalen',
      distances_3d: 'Afstanden in de ruimte berekenen: punt-vlak, punt-lijn en lijn-lijn',
      cross_product: 'Het uitproduct beheersen en inzetten om normaalvectoren te berekenen',
    },
    explanation: {
      intro: 'Vlakken in de driedimensionale ruimte kun je op verschillende manieren beschrijven. De parametervorm begint bij een steunpunt $\\vec{a}$ en spant het vlak op met twee richtingsvectoren $\\vec{u}$ en $\\vec{v}$. Elk punt van het vlak is te bereiken met passende waarden voor $r$ en $s$:',
      normal_form: 'Eleganter is vaak de normaalvorm: een vector $\\vec{n}$ die loodrecht op het vlak staat (de normaalvector) en een punt $\\vec{a}$ in het vlak zijn genoeg om het hele vlak te beschrijven. Daaruit kun je de coördinatenvorm afleiden — één enkele vergelijking met $x_1$, $x_2$ en $x_3$:',
      kai_tip: 'In mijn 3D-engine sla ik elk vlak op in coördinatenvorm — drie coëfficiënten en een constante, dat is alles. Voor het renderen heb ik de normaalvector nodig voor de belichting ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$ — het inproduct met de lichtvector geeft de helderheidswaarde). En voor de natuurkunde heb ik snijpunten en afstanden nodig. Alle drie de vormen zijn nuttig — elk voor een ander doel!',
      cross_product: 'Het uitproduct $\\vec{u} \\times \\vec{v}$ levert een vector op die loodrecht op beide invoervectoren staat — perfect om uit twee richtingsvectoren de normaalvector te berekenen. Let op: de volgorde is belangrijk (anticommutatief)!',
      distance_point_plane: 'De afstand van een punt $P$ tot een vlak $E$ kun je met de normaalvorm van Hesse elegant berekenen. Je vult het punt in de coördinatenvergelijking in, neemt de absolute waarde en deelt door de lengte van de normaalvector:',
    },
    concepts: {
      plane_equation: {
        title: 'Vlakvergelijking in coördinatenvorm',
        desc: 'De meest compacte weergave van een vlak: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. De coëfficiënten $n_1, n_2, n_3$ zijn de componenten van de normaalvector, $d$ volgt door een bekend punt van het vlak in te vullen. Elk punt $(x_1, x_2, x_3)$ dat aan de vergelijking voldoet, ligt in het vlak.',
      },
      cross_product: {
        title: 'Uitproduct',
        desc: 'Het uitproduct van twee vectoren $\\vec{u}$ en $\\vec{v}$ levert een nieuwe vector $\\vec{n}$ op die loodrecht op beide staat. De lengte $|\\vec{u} \\times \\vec{v}|$ is gelijk aan de oppervlakte van het opgespannen parallellogram. Belangrijk: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ — de volgorde bepaalt de richting!',
      },
      distance_formula: {
        title: 'Afstand punt-vlak',
        desc: 'De kortste afstand van een punt $P$ tot een vlak is de lengte van de loodlijn van $P$ op het vlak. De formule $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ berekent deze afstand direct uit de coördinatenvorm. De absolute waarde in de teller is essentieel — zonder die zou er een negatieve "afstand" uit kunnen komen.',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Vlak door drie hoekpunten',
        context: 'Kai heeft een driehoek in zijn gamewereld met de hoekpunten $A(1|0|2)$, $B(3|1|0)$ en $C(0|4|1)$. Hij heeft de vlakvergelijking nodig voor belichting en botsingsdetectie.',
        step1: 'Drie punten gegeven — daaruit twee richtingsvectoren vormen:',
        step2: 'Richtingsvectoren $\\vec{u} = \\overrightarrow{AB}$ en $\\vec{v} = \\overrightarrow{AC}$ berekenen:',
        step3: 'Uitproduct $\\vec{n} = \\vec{u} \\times \\vec{v}$ uitgebreid berekenen — component voor component volgens de formule:',
        step4: 'Coördinatenvorm opstellen — normaalvector als coëfficiënten, $d$ door $A$ in te vullen: $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$:',
        kai_comment: 'In de engine gebeurt precies dit voor elke driehoek: drie vertices erin, uitproduct berekenen, vlak opgeslagen. De normaalvector bepaalt tegelijk in welke richting het vlak "kijkt" — cruciaal voor belichting en backface culling!',
      },
      collision_detection: {
        title: 'Snijpunt lijn-vlak (raycast)',
        context: 'Een kogel vliegt in een rechte lijn door de ruimte. Kai moet controleren of en waar hij een muur raakt — dat is een raycast: het snijpunt van lijn en vlak.',
        step1: 'Lijn (vliegbaan) en vlak (muur) gegeven:',
        step2: 'Lijn in de vlakvergelijking invullen — de componenten van $\\vec{x}(t)$ voor $x_1, x_2, x_3$:',
        step3: 'Oplossen naar $t$ — samenvatten en vereenvoudigen:',
        step4: 'Snijpunt berekenen — $t = 0$ in de lijnvergelijking invullen:',
        kai_comment: 'Bij $t = 0$ raakt de lijn het vlak meteen — de kogel start dus direct bij de muur. In de engine controleer ik bovendien $t > 0$ (voorwaartse richting) en $0 \\leq t \\leq t_{\\max}$ (bereik). Zo filter ik treffers achter de speler of buiten het bereik eruit.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: '3D-rendering & belichting',
        desc: 'Elke 3D-engine berekent belichting via het inproduct van normaalvector en lichtrichting: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Hoe kleiner de hoek tussen licht en vlaknormaal, hoe helderder het vlak. Dat is het belichtingsmodel van Lambert — de basis voor realistisch licht in games, films en AR-apps.',
      },
      architecture: {
        title: 'Architectuur & BIM-software',
        desc: 'In architectuurprogramma\'s zoals AutoCAD of Revit worden dakvlakken, muren en hellingen als vlakken gemodelleerd. De coördinatenvorm beschrijft de ligging in de ruimte, de normaalvector toont de oriëntatie. Constructeurs berekenen met vlakvergelijkingen hoe krachten op schuine vlakken werken — van het dak tot het brugdek.',
      },
      gps_navigation: {
        title: 'GPS & dronenavigatie',
        desc: 'GPS-coördinaten zijn driedimensionaal (lengte, breedte, hoogte). Drones navigeren langs lijnen in de 3D-ruimte en moeten obstakels — gemodelleerd als vlakken — herkennen. De afstand punt-vlak bepaalt of een drone te dicht bij een gevel komt. Dezelfde wiskunde gebruiken zelfrijdende auto\'s voor de verwerking van LIDAR-data.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Volgorde genegeerd: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Anticommutatief: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'Het uitproduct is NIET commutatief — de volgorde bepaalt de richting van de resultaatvector (rechterhandregel). Omwisselen verandert het teken. Daardoor kunnen normaalvectoren de verkeerde kant op wijzen, waardoor de hele belichting omkeert.',
        kai_warning: 'Deze bug herken je meteen: vlakken die "van binnenuit" belicht worden, terwijl de buitenkant donker blijft. Dat gebeurt als de normaalvector de verkeerde kant op wijst. Wees altijd consequent met de volgorde — $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, nooit andersom!',
      },
      distance_abs_forgotten: {
        wrong: 'Absolute waarde in de teller vergeten: $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'Met absolute waarde: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: 'Afstanden zijn altijd positief! Zonder de absolute waarde in de teller kan er een negatieve waarde uitkomen als het punt aan de "andere kant" van het vlak ligt. Op het examen kost dat punten, in de game-engine leidt het tot objecten die door muren vallen.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Voor de release van "Hafenlichter 3D" staat de grote playtest gepland: 200 testers spelen een week lang en Kai moet harde beslissingen nemen. Is de balancing eerlijk? Is het crashpercentage acceptabel? "Een onderbuikgevoel is niet genoeg", zegt Mia. "Je hebt een statistische toets nodig die je vertelt of een waargenomen effect echt is — of gewoon toeval." Welkom bij de hypothesetoetsen: de wiskunde achter datagedreven beslissingen.',
      challenge: 'Kai moet beslissen of waargenomen verschillen in de playtest statistisch significant zijn. Is held A echt zwakker dan held B, of had hij alleen pech? Is het nieuwe crashpercentage echt gestegen? Daarvoor heeft hij nulhypothesen, significantieniveaus en inzicht in soorten fouten nodig.',
      outro: 'De playtest is geëvalueerd: Kai heeft statistisch aangetoond dat held A te zwak is ($p = 0{,}028 < 0{,}05$) en dat het crashpercentage in de nieuwe build significant is gestegen. "Zonder hypothesetoetsen had ik deze problemen misschien genegeerd", geeft hij toe. Mia vult aan: "Het mooie is: je weet nu precies hoe zeker je beslissing is — het significantieniveau kwantificeert jouw risico om het mis te hebben."',
    },
    objectives: {
      null_hypothesis: 'Nul- en alternatieve hypothese correct opstellen en onderscheid maken tussen eenzijdige en tweezijdige toetsen',
      significance_level: 'Het significantieniveau $\\alpha$ begrijpen en interpreteren als kans op een vergissing',
      test_decision: 'Kritieke gebieden bepalen en toetsbeslissingen systematisch uitvoeren',
      error_types: 'Fouten van de 1e en 2e soort onderscheiden en de afweging tussen $\\alpha$ en $\\beta$ begrijpen',
    },
    explanation: {
      intro: 'Een hypothesetoets is een gestructureerde methode om op basis van data een beslissing te nemen. Je begint met een aanname (nulhypothese $H_0$), verzamelt data en controleert of de data tegen $H_0$ pleiten. De alternatieve hypothese $H_1$ beschrijft wat je eigenlijk vermoedt:',
      significance: 'Het significantieniveau $\\alpha$ is de maximale kans waarmee je $H_0$ ten onrechte verwerpt (fout van de 1e soort). Typische waarden zijn $\\alpha = 0{,}05$ (5\\%) of $\\alpha = 0{,}01$ (1\\%). Hoe kleiner $\\alpha$, hoe strenger de toets — maar hoe eerder je echte effecten over het hoofd ziet:',
      kai_tip: 'Denk aan hypothesetoetsen als een anti-cheatsysteem: $H_0$ betekent "De speler cheat NIET". $\\alpha = 0{,}05$ betekent: slechts in 5\\% van de gevallen ban ik een eerlijke speler. Ik wil $\\alpha$ klein houden om onschuldigen te beschermen — maar als ik hem te klein maak, glippen echte cheaters erdoor. Dat is de alfa-bèta-afweging!',
      rejection_region: 'Het kritieke gebied bevat alle toetsresultaten die zo extreem zijn dat we $H_0$ verwerpen. Bij een linkszijdige toets ($H_1\\colon p < p_0$) ligt het kritieke gebied links — je berekent het grootste getal $k$ waarvoor $P(X \\leq k) \\leq \\alpha$ geldt:',
      error_types: 'Er kunnen twee fouten gebeuren: fout van de 1e soort ($\\alpha$) — je verwerpt $H_0$, hoewel die klopt ("vals alarm"). Fout van de 2e soort ($\\beta$) — je behoudt $H_0$, hoewel $H_1$ klopt ("gemist effect"). Bij een vaste steekproefomvang $n$ geldt: als je $\\alpha$ verkleint, wordt $\\beta$ groter — en omgekeerd:',
    },
    concepts: {
      hypotheses: {
        title: 'Nul- en alternatieve hypothese',
        desc: '$H_0$ is de "status quo"-aanname, die geldt zolang de data er niet tegen pleiten. $H_1$ is wat je eigenlijk wilt aantonen. Linkszijdige toets: $H_1\\colon p < p_0$. Rechtszijdige toets: $H_1\\colon p > p_0$. Tweezijdige toets: $H_1\\colon p \\neq p_0$. Belangrijk: je "bewijst" $H_1$ nooit — je kunt $H_0$ alleen verwerpen of behouden.',
      },
      significance_level: {
        title: 'Significantieniveau $\\alpha$',
        desc: 'De bovengrens voor de kans op een fout van de 1e soort. Bij $\\alpha = 0{,}05$ accepteer je een risico van 5\\% om $H_0$ ten onrechte te verwerpen. Gebruikelijke waarden: $0{,}10$ (verkennend), $0{,}05$ (standaard), $0{,}01$ (streng). $\\alpha$ wordt VOOR de toets vastgelegd — nooit achteraf aangepast!',
      },
      error_types: {
        title: 'Fouten van de 1e en 2e soort',
        desc: 'Fout van de 1e soort ($\\alpha$): $H_0$ wordt verworpen, hoewel die waar is — een "vals alarm". Fout van de 2e soort ($\\beta$): $H_0$ wordt behouden, hoewel $H_1$ waar is — een "gemist effect". Bij vaste $n$ werken $\\alpha$ en $\\beta$ tegen elkaar in: een kleinere $\\alpha$ betekent een grotere $\\beta$. Oplossing: een grotere steekproefomvang $n$.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Balancingtoets: is held A te zwak?',
        context: 'In 100 matches tussen held A en held B wint held A maar 40 keer. Kai vermoedt dat held A benadeeld is. Bij eerlijke balancing zou $p = 0{,}5$ moeten gelden.',
        step1: 'Hypothesen en significantieniveau vastleggen — linkszijdig, omdat Kai vermoedt dat A te zwak is:',
        step2: 'Opzet: $n = 100$ matches, $X$ = aantal overwinningen van held A, binomiaal verdeeld:',
        step3: 'Kans op $X \\leq 40$ onder $H_0$ berekenen (cumulatieve binomiale verdeling):',
        step4: 'Toetsbeslissing: $p$-waarde $0{,}028 < \\alpha = 0{,}05$ — $H_0$ wordt verworpen. Held A is significant te zwak:',
        kai_comment: 'Dat was het statistische bewijs dat ik nodig had voor het balance-team. 40 van de 100 lijkt "bijna oké", maar de toets laat zien: bij eerlijke balancing zou je zo\'n extreem resultaat maar in 2{,}8\\% van de gevallen zien. Dat is genoeg voor een nerf-update!',
      },
      crash_rate: {
        title: 'Crashpercentage na update controleren',
        context: 'Na een patch mag het crashpercentage maximaal 2\\% zijn. In 200 testsessies crasht het spel 8 keer. Is dat te veel?',
        step1: 'Hypothesen opstellen — rechtszijdig, omdat Kai wil controleren of het percentage BOVEN 2\\% ligt:',
        step2: 'Data: $n = 200$ sessies, $X = 8$ crashes (waargenomen: $\\hat{p} = 4\\%$):',
        step3: 'Kans op $X \\geq 8$ onder $H_0$ berekenen — dat is de $p$-waarde:',
        step4: 'Toetsbeslissing: $p$-waarde $0{,}042 < \\alpha = 0{,}05$ — het crashpercentage is significant verhoogd:',
        kai_comment: 'Zonder de toets had ik misschien gezegd "8 crashes bij 200 sessies, dat valt wel mee". Maar de hypothesetoets laat zien: de kans om bij een echt percentage van 2\\% zoveel crashes te zien, ligt onder 5\\%. De patch moet opnieuw worden bewerkt.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B-testen bij apps & websites',
        desc: 'Elke keer dat Netflix de knop "Nu afspelen" verandert of Spotify een nieuwe playlistweergave test, loopt er een hypothesetoets. Versie A tegen versie B: welke krijgt meer klikken? De $p$-waarde beslist of het verschil echt is of alleen toevallige schommeling. Ook TikTok, YouTube en Instagram gebruiken A/B-tests — elke functie die je ziet, heeft een significantietoets doorstaan.',
      },
      quality_assurance: {
        title: 'Kwaliteitscontrole in de productie',
        desc: 'In fabrieken wordt voortdurend getest: ligt het uitvalpercentage onder de grenswaarde? Klopt het vulgewicht van de chipszak met de opgedrukte waarde? Hypothesetoetsen beschermen consumenten — en bedrijven tegen dure terugroepacties. Achter elke steekproefcontrole zit dezelfde wiskunde die jullie hier leren.',
      },
      clinical_trials: {
        title: 'Klinische studies & medicijnen',
        desc: 'Voordat een medicijn wordt toegelaten, moet het een hypothesetoets doorstaan: $H_0$ zegt "Het medicijn werkt niet beter dan een placebo". Alleen als de $p$-waarde onder $\\alpha = 0{,}05$ valt, geldt de werkzaamheid als aangetoond. De strenge regels ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) beschermen patiënten tegen onwerkzame medicijnen — maar ook tegen het te vroeg afwijzen van werkzame therapieën.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ "bewezen": $p > \\alpha$ betekent dat $H_0$ waar is',
        correct: 'Correct geformuleerd: $p > \\alpha$ betekent dat $H_0$ niet verworpen kan worden',
        why: 'Een hypothesetoets kan $H_0$ nooit bewijzen — alleen verwerpen of behouden. "Niet verwerpen" betekent: de data zijn niet genoeg om $H_0$ te weerleggen. Misschien is het effect te klein, misschien de steekproef. Daarom zeg je "behouden" of "niet verwerpen", nooit "accepteren" of "bewezen".',
        kai_warning: 'Het is net als het vermoeden van onschuld in de rechtszaal: "niet schuldig" betekent niet "onschuldig" — het betekent alleen dat het bewijs niet volstaat. Net zo bij $H_0$: als ik niet kan aantonen dat held A zwakker is, betekent dat niet automatisch dat hij perfect gebalanceerd is!',
      },
      alpha_beta_confused: {
        wrong: 'Aanname: een kleinere $\\alpha$ verbetert automatisch alles',
        correct: 'Werkelijkheid: een kleinere $\\alpha$ leidt bij vaste $n$ tot een grotere $\\beta$',
        why: 'Als je de toets strenger maakt (kleinere $\\alpha$), heb je extremere data nodig om $H_0$ te verwerpen. Daardoor stijgt de kans om een echt effect over het hoofd te zien ($\\beta$ stijgt). De enige uitweg: een grotere steekproef $n$ — daarmee kun je zowel $\\alpha$ als $\\beta$ klein houden.',
      },
    },
  },
};
