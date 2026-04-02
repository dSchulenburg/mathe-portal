export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia staart naar haar beeldscherm. De levelarchitectuur van "Hafenlichter" heeft 3D-objecten nodig — pakhuizen, kranen, containers. Tim heeft de meshes gemodelleerd, maar Lumi vraagt: "Hoeveel geheugen heeft elke hitbox nodig?" Mia grijnst: "Daarvoor hebben we volumeformules nodig."',
      challenge: 'Bereken volumes en oppervlakten van piramides, kegels en bollen. Help Mia de perfecte 3D-hitboxen voor haar havenwijk te bouwen!',
      outro: 'De 3D-lichamen zijn berekend, de hitboxen zitten goed. Tim test het kraanlevel en roept: "De botsingen voelen eindelijk realistisch aan!" Mia leunt achterover — meetkunde maakt games beter.',
    },
    objectives: {
      volume_pyramid: 'Het volume van piramides berekenen met de derde-formule',
      volume_cone_sphere: 'Volumes van kegels en bollen veilig bepalen',
      surface_area: 'Oppervlakteformules toepassen en resultaten interpreteren',
      apply_3d: 'Lichaamsberekeningen toepassen op dagelijkse problemen en game design',
    },
    explanation: {
      intro: 'Driedimensionale lichamen hebben volume (inhoud) en oppervlakte. Bij piramides en kegels zit een beslissende factor in de formule: de derde-factor $\\frac{1}{3}$. Die komt doordat deze lichamen "spits toelopen" — ze vullen slechts een derde van het omhullende prisma of cilinder.',
      cone: 'Een kegel is als een "ronde piramide" — zijn grondvlak is een cirkel met straal $r$. De formule heeft dezelfde structuur: een derde maal grondvlak maal hoogte, alleen is het grondvlak $\\pi r^2$.',
      mia_tip: 'Mia: "Ik onthoud het zo: piramide en kegel zijn de bescheiden broertjes van prisma en cilinder — ze nemen maar een derde van de ruimte in!"',
      sphere: 'De bol is het bijzondere geval: hij heeft geen grondvlak en geen hoogte in de klassieke zin. Zijn volume hangt alleen af van de straal. Archimedes bewees dat een bol precies $\\frac{2}{3}$ van de omhullende cilinder vult — daaruit volgt de formule.',
    },
    concepts: {
      pyramid: {
        title: 'Piramidevolume',
        desc: 'Een piramide heeft een derde van het volume van een prisma met hetzelfde grondvlak en hoogte. Het grondvlak kan een rechthoek, driehoek of willekeurige veelhoek zijn.',
      },
      cone: {
        title: 'Kegelvolume',
        desc: 'De kegel verhoudt zich tot de cilinder zoals de piramide tot het prisma: hij vult precies een derde. Zijn cirkelvormige grondvlak maakt hem bijzonder symmetrisch.',
      },
      sphere: {
        title: 'Bolvolume',
        desc: 'De bol wordt volledig beschreven door zijn straal. De $\\frac{4}{3}$ in de formule komt van de integratie — of van het geniale bewijs van Archimedes.',
      },
    },
    examples: {
      icecream: {
        title: 'IJshoorntje berekenen',
        context: 'Een ijshoorntje heeft de vorm van een kegel met straal $r = 3$ cm en hoogte $h = 12$ cm. Hoeveel ijs past erin?',
        step1: 'Gegevens identificeren: het hoorntje is een kegel met $r = 3$ cm en $h = 12$ cm.',
        step2: 'Kegelformule toepassen: we vullen in bij $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ en rekenen eerst de haakjes uit.',
        step3: 'Resultaat: het hoorntje bevat ongeveer $113{,}1\\,\\text{cm}^3$ ijs — iets meer dan een deciliter.',
        mia_comment: 'Mia: "Wauw, zo\'n hoorntje bevat helemaal niet zoveel! Daarom stapelen ze er altijd een bolletje bovenop."',
      },
      hitbox: {
        title: 'Bolvormige hitbox',
        context: 'In "Hafenlichter" moet een boei een bolvormige hitbox hebben met volume $V = 904{,}8\\,\\text{cm}^3$. Hoe groot moet de straal zijn?',
        step1: 'Gegeven: het volume van de bol is $V = 904{,}8\\,\\text{cm}^3$. Gezocht: de straal $r$.',
        step2: 'Formule omvormen: we lossen $V = \\frac{4}{3} \\pi r^3$ op naar $r^3$, door te delen door $\\frac{4}{3}\\pi$.',
        step3: 'Berekenen: $r^3 \\approx 215{,}9$ — nu trekken we de derdemachtswortel.',
        step4: 'Resultaat: $r \\approx 6{,}0$ cm. De hitbox heeft een straal van 6 cm nodig.',
        mia_comment: 'Mia: "Achteruit rekenen is bij game design dagelijks werk — je weet wat je wilt en moet de parameters vinden."',
      },
    },
    realworld: {
      packaging: {
        title: 'Verpakkingsontwerp',
        desc: 'Drankblikjes, conserven, flessen — overal zit cilinderberekening in. Fabrikanten optimaliseren de verhouding tussen volume en materiaalverbruik om kosten te besparen.',
      },
      icecream: {
        title: 'IJsbolletjeswiskunde',
        desc: 'Waarom ziet een "groot" bolletje er zo veel groter uit? Omdat het volume met $r^3$ groeit! Dubbele straal = achtvoudig volume. Dat verklaart ook waarom XXL-menu\'s zo winstgevend zijn.',
      },
      pizza: {
        title: 'Pizzavergelijking',
        desc: 'Een pizza van 30 cm heeft meer oppervlakte dan twee pizza\'s van 20 cm samen! $\\pi \\cdot 15^2 = 706{,}9$ versus $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Groter loont.',
      },
    },
    mistakes: {
      third: {
        wrong: 'De factor $\\frac{1}{3}$ vergeten',
        correct: 'Bij kegel en piramide ALTIJD $\\frac{1}{3}$ ervoor',
        why: 'Kegel en piramide vullen maar een derde van de omhullende cilinder of prisma. Zonder de factor bereken je het volume van de hele cilinder — drie keer te veel!',
        mia_warning: 'Mia: "Ik heb ooit alle hitboxen zonder het derde berekend. De boeien waren enorm en blokkeerden het hele havenbekken. Tim was not amused."',
      },
      surface_volume: {
        wrong: 'Oppervlakte- en volumeformule van de bol verwisseld',
        correct: 'Volume: $\\frac{4}{3}\\pi r^3$ — Oppervlakte: $4\\pi r^2$',
        why: 'Bij het volume staat $r^3$ (kubisch, dus inhoud), bij de oppervlakte $r^2$ (kwadratisch, dus oppervlak). Let op de exponent — die vertelt je wat je berekent.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule optimaliseert het geheugen van "Hafenlichter". "Onze textures vreten 2 tot de macht 20 bytes — hoeveel is dat eigenlijk?" Tim rekent na: "Wacht, machten kan ik..." Mia lacht: "Laat dan maar zien wat je kunt."',
      challenge: 'Beheers de rekenregels voor machten: vermenigvuldig, machtsverheffen en vereenvoudig machten. Help Tim geheugengroottes en rendertijden razendsnel te berekenen!',
      outro: 'Tim beheerst de rekenregels voor machten. De geheugenberekening gaat nu in seconden. "Machten zijn als cheatcodes voor grote getallen", zegt hij. Mia knikt: "En voor kleine ook — welkom bij de negatieve exponenten."',
    },
    objectives: {
      multiply_powers: 'Machten met hetzelfde grondtal vermenigvuldigen en delen',
      power_of_power: 'Macht van een macht vereenvoudigen met de vermenigvuldigingsregel',
      negative_exponents: 'Negatieve exponenten als breuken interpreteren en omrekenen',
      apply_memory: 'Rekenregels voor machten toepassen op geheugengroottes en wetenschappelijke notatie',
    },
    explanation: {
      intro: 'Machten zijn een verkorte schrijfwijze voor herhaalde vermenigvuldiging: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Wanneer je twee machten met hetzelfde grondtal vermenigvuldigt, tel je de exponenten op — want je verlengt gewoon de keten van vermenigvuldigingen.',
      power_of_power: 'Wat gebeurt er als je een macht nogmaals tot een macht verheft? $(a^m)^n$ betekent: je vermenigvuldigt $a^m$ precies $n$ keer met zichzelf. Dat geeft $m \\cdot n$ factoren — dus $a^{m \\cdot n}$. De exponenten worden vermenigvuldigd.',
      mia_tip: 'Mia: "Zelfde grondtal → exponenten optellen. Macht tot macht → exponenten vermenigvuldigen. Verschillende grondtallen → uitrekenen, er is geen afkorting!"',
      negative: 'Een negatieve exponent keert de macht om: $a^{-n} = \\frac{1}{a^n}$. Dat is geen willekeurige definitie — het volgt logisch uit het patroon: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Elke stap deelt door het grondtal.',
    },
    concepts: {
      product_rule: {
        title: 'Productregel',
        desc: 'Zelfde grondtal, verschillende exponenten? Bij vermenigvuldigen worden de exponenten opgeteld, bij delen afgetrokken. Dit werkt ALLEEN bij hetzelfde grondtal!',
      },
      power_rule: {
        title: 'Machtsregel',
        desc: 'Een macht wordt nogmaals tot een macht verheven? Dan vermenigvuldig je de exponenten. $(a^3)^4 = a^{12}$ — twaalf factoren $a$ in totaal.',
      },
      negative_exp: {
        title: 'Negatieve exponent',
        desc: 'Een min in de exponent betekent "een gedeeld door". Zo worden grote getallen klein: $10^{-6}$ is een miljoenste. Perfect voor microchips en milliseconden.',
      },
    },
    examples: {
      simplify: {
        title: 'Geheugen berekenen',
        context: 'Tim wil weten: hoeveel zijn $2^3 \\cdot 2^4$ byte? In de informatica is dit een typische berekening met machten van twee.',
        step1: 'Productregel toepassen: zelfde grondtal $2$, dus we tellen de exponenten op: $3 + 4 = 7$.',
        step2: 'Uitrekenen: $2^7 = 128$ byte.',
        step3: 'Inordenen: 128 byte — bijna 1 kilobyte (dat zou precies $2^{10} = 1024$ zijn).',
        mia_comment: 'Mia: "In de informatica zijn machten van twee overal. RAM, textures, kleurdiepte — alles machten van 2!"',
      },
      negative: {
        title: 'Milliseconden omrekenen',
        context: 'Een frame in "Hafenlichter" wordt berekend in $10^{-3}$ seconden. Wat betekent dat in decimale schrijfwijze?',
        step1: 'Negatieve exponent toepassen: $10^{-3}$ betekent $\\frac{1}{10^3}$.',
        step2: 'Uitrekenen: $\\frac{1}{1000} = 0{,}001$ seconden.',
        step3: 'Inordenen: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — een milliseconde. Bij 60 fps heeft elk frame ongeveer 16 ms tijd.',
        mia_comment: 'Mia: "Negatieve exponenten klinken eng, maar ze betekenen gewoon: kleine getallen. $10^{-3}$ = milli, $10^{-6}$ = micro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Digitaal geheugen',
        desc: 'Je telefoon heeft 256 GB? Dat zijn $2^{38}$ byte, dus meer dan 274 miljard bytes. Elke verdubbeling van het geheugen is maar +1 bij de exponent — daarom groeit technologie zo snel.',
      },
      richter: {
        title: 'Schaal van Richter',
        desc: 'Een aardbeving van sterkte 6 is niet twee keer zo sterk als sterkte 3 — maar duizend keer! Elk niveau betekent $10 \\times$ meer energie. Machten maken het verschil voelbaar.',
      },
      decibel: {
        title: 'Decibel en geluidsterkte',
        desc: 'Een koptelefoon op 100 dB is $10^{10}$ keer intenser dan de gehoordrempel (0 dB). Elke +10 dB = tienvoudige intensiteit. Je oren rekenen logaritmisch — dus met machten!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Grondtallen vermenigvuldigen in plaats van exponenten optellen',
        correct: 'De productregel geldt ALLEEN bij hetzelfde grondtal',
        why: 'Bij $2^3 \\cdot 3^2$ zijn de grondtallen verschillend (2 en 3). Hier kun je geen machtsregel toepassen — je moet apart uitrekenen: $8 \\cdot 9 = 72$. De exponenten optellen en de grondtallen vermenigvuldigen is een veelgemaakte fout!',
        mia_warning: 'Mia: "Verschillende grondtallen = geen afkorting. Punt. Ik heb dit ooit fout in code gedaan en de textures waren allemaal kapot."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "tot de nul is nul"',
        correct: '$a^0 = 1$ voor alle $a \\neq 0$',
        why: 'Volg het patroon: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — elke stap deelt door 2. Dus $2^0 = 1$. Dit geldt voor ELK grondtal (behalve 0). Nul is het neutrale element van de optelling, niet van de vermenigvuldiging.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia scrollt door de assetbibliotheek van "Hafenlichter". De Speicherstadt in Hamburg heeft gebouwen in alle maten — maar ze moeten er allemaal proportioneel uitzien. Lumi vraagt: "Kunnen we niet gewoon alles schalen?" Mia knikt: "Precies. Dat is gelijkvormigheid."',
      challenge: 'Begrijp gelijkvormige driehoeken, schaalfactoren en de stelling van Thales. Help Mia de havenwijk proportioneel te schalen!',
      outro: 'De Speicherstadt in "Hafenlichter" ziet er fantastisch uit — elk gebouw is proportioneel, elke brug past. Jule bewondert het resultaat: "Alsof het een echt model is!" Mia glimlacht: "Dat is het ook. Wiskundig exact."',
    },
    objectives: {
      similar_triangles: 'Gelijkvormige driehoeken herkennen en hun eigenschappen beschrijven',
      scale_factor: 'De schaalfactor $k$ berekenen en toepassen',
      intercept_theorem: 'De stelling van Thales op meetkundige problemen toepassen',
      apply_scaling: 'Gelijkvormigheid gebruiken in architectuur, cartografie en game design',
    },
    explanation: {
      intro: 'Twee figuren zijn gelijkvormig als ze dezelfde vorm hebben maar verschillende grootte mogen zijn. Bij driehoeken is het voldoende dat alle hoeken overeenkomen — dan zijn automatisch alle zijdeverhoudingen gelijk. De verhouding van beeld tot origineel heet schaalfactor $k$.',
      scale_factor: 'De schaalfactor $k$ vertelt je hoeveel er vergroot of verkleind is. $k > 1$ betekent vergroting, $k < 1$ verkleining, $k = 1$ betekent congruent (samenvallend). Belangrijk: $k$ verwijst naar lengten — oppervlakten schalen met $k^2$, volumes met $k^3$!',
      mia_tip: 'Mia: "In de game engine werken we constant met schaalfactoren. Een sprite met scale 0.5 is half zo groot, scale 2.0 dubbel zo groot. Precies als in de meetkunde!"',
      intercept: 'De stelling van Thales beschrijft wat er gebeurt als evenwijdige lijnen door twee stralen worden gesneden: de stukken op de stralen zijn evenredig. Zo kun je onbekende lengten berekenen zonder alles na te meten.',
    },
    concepts: {
      similar_triangles: {
        title: 'Gelijkvormige driehoeken',
        desc: 'Twee driehoeken zijn gelijkvormig als ze in alle hoeken overeenkomen. Dan geldt: alle zijdeverhoudingen zijn gelijk. Dit schrijf je als $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Schaalfactor',
        desc: 'De factor $k = \\frac{\\text{Beeld}}{\\text{Origineel}}$ beschrijft de vergroting of verkleining. $k = 2$ betekent: alles dubbel zo groot. $k = 0{,}5$ betekent: alles half zo groot.',
      },
      intercept_theorem: {
        title: 'Stelling van Thales',
        desc: 'Wanneer twee stralen door evenwijdige lijnen worden gesneden, zijn de ontstane stukken evenredig. Een krachtig gereedschap om ontbrekende lengten te berekenen.',
      },
    },
    examples: {
      model: {
        title: 'Gebouw schalen',
        context: 'Een Hamburgs pakhuis is op schaal $1:100$ als 3D-model gebouwd. Het model is $3{,}5$ cm hoog. Hoe hoog is het echte gebouw?',
        step1: 'Schaalfactor bepalen: $k = \\frac{1}{100}$ betekent dat het model 100 keer kleiner is dan het origineel.',
        step2: 'Modelhoogte aflezen: $h_{\\text{Model}} = 3{,}5$ cm.',
        step3: 'Terugrekenen: $h_{\\text{echt}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Het gebouw is 3,5 meter hoog.',
        mia_comment: 'Mia: "Precies zo werken we in Hafenlichter. We bouwen de Speicherstadt als model en schalen alles proportioneel in het spel."',
      },
      intercept: {
        title: 'Stelling van Thales toepassen',
        context: 'Twee stralen worden door evenwijdige lijnen gesneden. De stukken op de ene straal zijn 4 en 6, op de andere is het eerste stuk 9. Hoe lang is het tweede stuk $x$?',
        step1: 'Stelling van Thales opstellen: de verhoudingen van de stukken op beide stralen zijn gelijk: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Kruislings vermenigvuldigen: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Resultaat: $x = 6$. Het tweede stuk is 6 eenheden lang.',
        mia_comment: 'Mia: "De stelling van Thales is als auto-layout in de game engine — je geeft een verhouding op en al het andere past zich proportioneel aan."',
      },
    },
    realworld: {
      maps: {
        title: 'Landkaarten en navigatie',
        desc: 'Google Maps toont de wereld op schaal. Zoomniveau 15 komt overeen met ongeveer $1:18.000$. Elk zoomniveau verdubbelt de schaalfactor — precies als gelijkvormigheid in de meetkunde.',
      },
      architecture: {
        title: 'Architectuurmodellen',
        desc: 'Voordat de Elbphilharmonie gebouwd werd, waren er modellen op schaal $1:500$. Architecten gebruiken gelijkvormigheid om van kleine modellen op echte maten te sluiten — en andersom.',
      },
      instagram: {
        title: 'Afbeeldingen schalen',
        desc: 'Als je een foto bijsnijdt voor Instagram, verandert de schaal. "Passend op scherm" schaalt proportioneel (gelijkvormig), "Uitrekken" vervormt (niet gelijkvormig). Je oog ziet het verschil meteen!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Gelijkvormig" en "congruent" zijn hetzelfde',
        correct: 'Gelijkvormig = dezelfde vorm. Congruent = dezelfde vorm EN dezelfde grootte',
        why: 'Congruentie is een speciaal geval van gelijkvormigheid met $k = 1$. Alle congruente driehoeken zijn gelijkvormig, maar niet alle gelijkvormige driehoeken zijn congruent. Gelijkvormig betekent: dezelfde hoeken, maar de zijden mogen proportioneel verschillende lengten hebben.',
        mia_warning: 'Mia: "In de game engine: congruent = kopieer. Gelijkvormig = kopieer + schaal. Als je een huis kopieert en schaalt, is het gelijkvormig. Zonder schaling is het congruent."',
      },
      scale_direction: {
        wrong: 'Schaalfactor verkeerd om opgesteld',
        correct: 'Altijd $k = \\frac{\\text{Beeld}}{\\text{Origineel}}$',
        why: 'Als het beeld groter is dan het origineel, moet $k > 1$ zijn. Stel je de breuk verkeerd om op, dan krijg je $k < 1$ en denk je dat er verkleind is. Onthoud: beeld boven, origineel onder.',
      },
    },
  },
};
