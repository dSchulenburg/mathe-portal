export const batch2 = {
  '10-koerper': {
    story: {
      intro:
        'Mia stirrer på sin skærm. Level-arkitekturen i "Havnelys" har brug for 3D-objekter — lagerhaller, kraner, containere. Tim har modelleret meshene, men Lumi spørger: "Hvor meget hukommelse kræver hver hitbox?" Mia griner: "Til det har vi brug for volumenformler."',
      challenge:
        'Beregn voluminer og overflader af pyramider, kegler og kugler. Hjælp Mia med at bygge de perfekte 3D-hitboxe til hendes havnekvarter!',
      outro:
        '3D-legemerne er beregnet, hitboxene sidder. Tim tester kran-levelet og råber: "Kollisionerne føles endelig realistiske!" Mia læner sig tilbage — geometri gør spil bedre.',
    },
    objectives: {
      volume_pyramid: 'Beregne voluminet af pyramider med tredjedelformlen',
      volume_cone_sphere: 'Bestemme voluminer af kegler og kugler sikkert',
      surface_area: 'Anvende overfladeformler og fortolke resultaterne',
      apply_3d: 'Overføre rumberegninger til hverdagsproblemer og spildesign',
    },
    explanation: {
      intro:
        'Tredimensionale legemer har volumen (rumindhold) og overflade. Ved pyramider og kegler gemmer sig en afgørende faktor i formlen: tredjedelsfaktoren $\\frac{1}{3}$. Den kommer af, at disse legemer "løber spidst til" — de fylder kun en tredjedel af det omsluttende prisme hhv. cylinder.',
      cone:
        'En kegle er som en "rund pyramide" — grundfladen er en cirkel med radius $r$. Formlen har samme struktur: en tredjedel gange grundflade gange højde, bare at grundfladen er $\\pi r^2$.',
      mia_tip:
        'Mia: "Jeg husker det sådan: Pyramide og kegle er de beskedne søskende til prisme og cylinder — de tager kun en tredjedel af pladsen!"',
      sphere:
        'Kuglen er specialtilfældet: Den har ingen grundflade og ingen højde i klassisk forstand. Voluminet afhænger kun af radius. Arkimedes beviste, at en kugle fylder præcis $\\frac{2}{3}$ af den omsluttende cylinder — deraf følger formlen.',
    },
    concepts: {
      pyramid: {
        title: 'Pyramidevolumen',
        desc: 'En pyramide har en tredjedel af voluminet af et prisme med samme grundflade og højde. Grundfladen kan være et rektangel, en trekant eller en vilkårlig polygon.',
      },
      cone: {
        title: 'Keglevolumen',
        desc: 'Keglen forholder sig til cylinderen som pyramiden til prismet: Den fylder præcis en tredjedel. Den cirkelformede grundflade gør den særligt symmetrisk.',
      },
      sphere: {
        title: 'Kuglevolumen',
        desc: 'Kuglen beskrives fuldstændigt af sin radius. $\\frac{4}{3}$ i formlen stammer fra integration — eller fra Arkimedes\' geniale bevis.',
      },
    },
    examples: {
      icecream: {
        title: 'Beregne isvaffel',
        context:
          'En isvaffel har form som en kegle med radius $r = 3$ cm og højde $h = 12$ cm. Hvor meget is er der plads til?',
        step1: 'Givet: Keglen har $r = 3$ cm og $h = 12$ cm.',
        step2: 'Anvend kegleformlen: Vi sætter ind i $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ og beregner parentesudtrykket først.',
        step3: 'Resultat: Vaflen rummer ca. $113{,}1\\,\\text{cm}^3$ is — det er lidt mere end en deciliter.',
        mia_comment:
          'Mia: "Wow, sådan en vaffel rummer slet ikke så meget! Derfor stabler de altid en kugle ovenpå."',
      },
      hitbox: {
        title: 'Kugleformet hitbox',
        context:
          'I "Havnelys" skal en bøje have en kugleformet hitbox med volumen $V = 904{,}8\\,\\text{cm}^3$. Hvor stor skal radius være?',
        step1: 'Givet: Kuglens volumen er $V = 904{,}8\\,\\text{cm}^3$. Søgt: radius $r$.',
        step2: 'Omstil formlen: Vi løser $V = \\frac{4}{3} \\pi r^3$ for $r^3$ ved at dividere med $\\frac{4}{3}\\pi$.',
        step3: 'Beregn: $r^3 \\approx 215{,}9$ — nu tager vi tredje rod.',
        step4: 'Resultat: $r \\approx 6{,}0$ cm. Hitboxen kræver en radius på 6 cm.',
        mia_comment:
          'Mia: "At regne baglæns er hverdag i spildesign — du ved, hvad du vil have, og skal finde parametrene."',
      },
    },
    realworld: {
      packaging: {
        title: 'Emballagedesign',
        desc: 'Drikkedåser, konserves, flasker — overalt gemmer sig cylinderberegning. Producenter optimerer forholdet mellem volumen og materialforbrug for at spare omkostninger.',
      },
      icecream: {
        title: 'Iskugle-matematik',
        desc: 'Hvorfor ser en "stor" iskugle så meget større ud? Fordi voluminet vokser med $r^3$! Dobbelt radius = otte gange voluminet. Det forklarer også, hvorfor XXL-menuer er så profitable.',
      },
      pizza: {
        title: 'Pizzasammenligning',
        desc: 'En 30 cm-pizza har mere areal end to 20 cm-pizzaer tilsammen! $\\pi \\cdot 15^2 = 706{,}9$ mod $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Størrelse betaler sig.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Glemme faktoren $\\frac{1}{3}$',
        correct: 'Ved kegle og pyramide ALTID $\\frac{1}{3}$ foran',
        why: 'Kegle og pyramide fylder kun en tredjedel af den omsluttende cylinder hhv. prisme. Uden faktoren beregner du voluminet af hele cylinderen — tre gange for meget!',
        mia_warning:
          'Mia: "Jeg beregnede engang alle hitboxene uden tredjedelen. Bøjerne var enorme og blokerede hele havnebassinet. Tim var not amused."',
      },
      surface_volume: {
        wrong: 'Forveksle overflade- og volumenformlen for kuglen',
        correct: 'Volumen: $\\frac{4}{3}\\pi r^3$ — Overflade: $4\\pi r^2$',
        why: 'Ved volumen står $r^3$ (kubisk, altså rumindhold), ved overflade $r^2$ (kvadratisk, altså fladeindhold). Læg mærke til eksponenten — den fortæller dig, hvad du beregner.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro:
        'Jule optimerer hukommelsen i "Havnelys". "Vores teksturer bruger 2 i 20. potens bytes — hvor meget er det egentlig?" Tim regner efter: "Vent, potenser kan jeg..." Mia ler: "Så vis, hvad du kan."',
      challenge:
        'Mestr potensreglerne: Multiplicer, potensér og forenkl potenser. Hjælp Tim med at beregne hukommelsesstørrelser og renderingstider lynhurtigt!',
      outro:
        'Tim har potensreglerne i hus. Hukommelsesberegningen tager nu sekunder. "Potenser er som snydekoder til store tal", siger han. Mia nikker: "Og til små også — velkommen til de negative eksponenter."',
    },
    objectives: {
      multiply_powers: 'Multiplicere og dividere potenser med samme grundtal',
      power_of_power: 'Forenkle potens af potens med multiplikationsreglen',
      negative_exponents: 'Fortolke negative eksponenter som brøker og omregne',
      apply_memory: 'Anvende potensreglerne på hukommelsesstørrelser og videnskabelig notation',
    },
    explanation: {
      intro:
        'Potenser er en kortform for gentaget multiplikation: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Når du multiplicerer to potenser med samme grundtal, adderer du eksponenterne — for du forlænger simpelthen kæden af multiplikationer.',
      power_of_power:
        'Hvad sker der, når du potenserer en potens igen? $(a^m)^n$ betyder: Du multiplicerer $a^m$ præcis $n$ gange med sig selv. Det giver $m \\cdot n$ faktorer — altså $a^{m \\cdot n}$. Eksponenterne multipliceres.',
      mia_tip:
        'Mia: "Samme grundtal → addere eksponenter. Potens ophøjet i potens → multiplicere eksponenter. Forskellige grundtal → udregne, der er ingen genvej!"',
      negative:
        'En negativ eksponent vender potensen: $a^{-n} = \\frac{1}{a^n}$. Det er ikke en vilkårlig definition — det følger logisk af mønstret: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Hvert trin dividerer med grundtallet.',
    },
    concepts: {
      product_rule: {
        title: 'Produktregel',
        desc: 'Samme grundtal, forskellige eksponenter? Ved multiplikation adderes eksponenterne, ved division subtraheres de. Det virker KUN med samme grundtal!',
      },
      power_rule: {
        title: 'Potensregel',
        desc: 'En potens potenseres igen? Så multiplicerer du eksponenterne. $(a^3)^4 = a^{12}$ — tolv faktorer $a$ i alt.',
      },
      negative_exp: {
        title: 'Negativ eksponent',
        desc: 'Et minus i eksponenten betyder "en divideret med". Sådan bliver store tal til små: $10^{-6}$ er en milliontedel. Perfekt til mikrochips og millisekunder.',
      },
    },
    examples: {
      simplify: {
        title: 'Beregne hukommelse',
        context:
          'Tim vil vide: Hvor meget er $2^3 \\cdot 2^4$ byte? I informatik er dette en typisk beregning med totalspotenser.',
        step1: 'Anvend produktreglen: Samme grundtal $2$, så vi adderer eksponenterne: $3 + 4 = 7$.',
        step2: 'Beregn: $2^7 = 128$ byte.',
        step3: 'Indordning: 128 byte — det er næsten 1 kilobyte (det ville være præcis $2^{10} = 1024$).',
        mia_comment:
          'Mia: "I informatik er totalspotenser overalt. RAM, teksturer, farvedybder — alt potenser af 2!"',
      },
      negative: {
        title: 'Omregne millisekunder',
        context:
          'Et frame i "Havnelys" beregnes på $10^{-3}$ sekunder. Hvad betyder det i decimalform?',
        step1: 'Anvend negativ eksponent: $10^{-3}$ betyder $\\frac{1}{10^3}$.',
        step2: 'Beregn: $\\frac{1}{1000} = 0{,}001$ sekunder.',
        step3: 'Indordning: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — et millisekund. Ved 60 fps har hvert frame ca. 16 ms tid.',
        mia_comment:
          'Mia: "Negative eksponenter lyder uhyggelige, men de betyder bare: små tal. $10^{-3}$ = milli, $10^{-6}$ = mikro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Digital hukommelse',
        desc: 'Din mobil har 256 GB? Det er $2^{38}$ byte, altså over 274 milliarder bytes. Hver fordobling af hukommelsen er kun +1 på eksponenten — derfor vokser teknologien så hurtigt.',
      },
      richter: {
        title: 'Richterskalaen',
        desc: 'Et jordskælv på styrke 6 er ikke dobbelt så kraftigt som styrke 3 — men tusind gange! Hvert trin betyder $10 \\times$ mere energi. Potenser gør forskellen mærkbar.',
      },
      decibel: {
        title: 'Decibel og lydstyrke',
        desc: 'Høretelefoner på 100 dB er $10^{10}$ gange mere intense end høregrænsen (0 dB). Hver +10 dB = ti gange intensiteten. Dine ører regner logaritmisk — altså med potenser!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Multiplicere grundtal i stedet for at addere eksponenter',
        correct: 'Produktreglen gælder KUN med samme grundtal',
        why: 'Ved $2^3 \\cdot 3^2$ er grundtallene forskellige (2 og 3). Her kan du ikke bruge nogen potensregel — du må beregne enkeltvis: $8 \\cdot 9 = 72$. At addere eksponenterne og multiplicere grundtallene er en hyppig fejl!',
        mia_warning:
          'Mia: "Forskellige grundtal = ingen genvej. Punktum. Jeg lavede den fejl i koden engang, og teksturerne var alle ødelagte."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "ophøjet i nul er nul"',
        correct: '$a^0 = 1$ for alle $a \\neq 0$',
        why: 'Følg mønstret: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — hvert trin dividerer med 2. Altså $2^0 = 1$. Det gælder for ALLE grundtal (undtagen 0). Nul er det neutrale element for addition, ikke for multiplikation.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro:
        'Mia scroller gennem asset-biblioteket til "Havnelys". Hamburg Speicherstadt har bygninger i alle størrelser — men de skal alle se proportionale ud. Lumi spørger: "Kan vi ikke bare skalere alt?" Mia nikker: "Præcis. Det er ligedannethed."',
      challenge:
        'Forstå ligedannede trekanter, skaleringsfaktorer og strålesætningen. Hjælp Mia med at skalere havnekvarteret proportionalt!',
      outro:
        'Speicherstadt i "Havnelys" ser fantastisk ud — hver bygning er proportional, hver bro passer. Jule beundrer resultatet: "Som om det var en rigtig model!" Mia smiler: "Det er det også. Matematisk eksakt."',
    },
    objectives: {
      similar_triangles: 'Genkende ligedannede trekanter og beskrive deres egenskaber',
      scale_factor: 'Beregne og anvende skaleringsfaktoren $k$',
      intercept_theorem: 'Anvende strålesætningen på geometriske problemer',
      apply_scaling: 'Bruge ligedannethed i arkitektur, kartografi og spildesign',
    },
    explanation: {
      intro:
        'To figurer er ligedannede, når de har samme form, men må være forskellige i størrelse. For trekanter er det tilstrækkeligt, at alle vinkler stemmer overens — så er automatisk alle sideforhold ens. Forholdet mellem billede og original hedder skaleringsfaktor $k$.',
      scale_factor:
        'Skaleringsfaktoren $k$ fortæller dig, hvor meget der er forstørret eller formindsket. $k > 1$ betyder forstørrelse, $k < 1$ formindskelse, $k = 1$ betyder kongruent (formens). Vigtigt: $k$ gælder for længder — flader skaleres med $k^2$, voluminer med $k^3$!',
      mia_tip:
        'Mia: "I spilmotoren arbejder vi hele tiden med skaleringsfaktorer. En sprite med scale 0.5 er halvt så stor, scale 2.0 dobbelt. Præcis som i geometrien!"',
      intercept:
        'Strålesætningen beskriver, hvad der sker, når parallelle linjer skærer to stråler: Afsnittene på strålerne er proportionale. Dermed kan du beregne ukendte strækninger uden at måle alt.',
    },
    concepts: {
      similar_triangles: {
        title: 'Ligedannede trekanter',
        desc: 'To trekanter er ligedannede, når de stemmer overens i alle vinkler. Så gælder: Alle sideforhold er ens. Det skrives $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Skaleringsfaktor',
        desc: 'Faktoren $k = \\frac{\\text{Billede}}{\\text{Original}}$ beskriver forstørrelsen eller formindskelsen. $k = 2$ betyder: alt dobbelt så stort. $k = 0{,}5$ betyder: alt halvt så stort.',
      },
      intercept_theorem: {
        title: 'Strålesætningen',
        desc: 'Når to stråler skæres af parallelle linjer, er de opståede afsnit proportionale. Et kraftfuldt værktøj til at beregne manglende længder.',
      },
    },
    examples: {
      model: {
        title: 'Skalere bygning',
        context:
          'Et Hamburg-pakhus er bygget som 3D-model i målestok $1:100$. Modellen er $3{,}5$ cm høj. Hvor høj er den rigtige bygning?',
        step1: 'Bestem skaleringsfaktoren: $k = \\frac{1}{100}$ betyder, at modellen er 100 gange mindre end originalen.',
        step2: 'Aflæs modelhøjden: $h_{\\text{Model}} = 3{,}5$ cm.',
        step3: 'Regn tilbage: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Bygningen er 3,5 meter høj.',
        mia_comment:
          'Mia: "Præcis sådan arbejder vi i Havnelys. Vi bygger Speicherstadt som model og skalerer alt proportionalt ind i spillet."',
      },
      intercept: {
        title: 'Anvende strålesætningen',
        context:
          'To stråler skæres af parallelle linjer. Afsnittene på den ene stråle er 4 og 6, på den anden er det første afsnit 9. Hvor langt er det andet afsnit $x$?',
        step1: 'Opstil strålesætningen: Forholdene mellem afsnittene på begge stråler er ens: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Krydsmultiplicer: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Resultat: $x = 6$. Det andet afsnit er 6 enheder langt.',
        mia_comment:
          'Mia: "Strålesætningen er som auto-layout i spilmotoren — du angiver et forhold, og alt andet tilpasser sig proportionalt."',
      },
    },
    realworld: {
      maps: {
        title: 'Kort og navigation',
        desc: 'Google Maps viser verden i målestok. Zoomniveau 15 svarer til ca. $1:18.000$. Hvert zoomniveau fordobler skaleringsfaktoren — præcis som ligedannethed i geometrien.',
      },
      architecture: {
        title: 'Arkitekturmodeller',
        desc: 'Før Elbphilharmonie blev bygget, fandtes der modeller i målestok $1:500$. Arkitekter bruger ligedannethed til at slutte fra små modeller til virkelige mål — og omvendt.',
      },
      instagram: {
        title: 'Skalere billeder',
        desc: 'Når du beskærer et foto til Instagram, ændres målestokken. "Tilpas til skærm" skalerer proportionalt (ligedannet), "Stræk" forvrider (ikke ligedannet). Dit øje ser forskellen med det samme!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Ligedannet" og "kongruent" er det samme',
        correct: 'Ligedannet = samme form. Kongruent = samme form OG samme størrelse',
        why: 'Kongruens er et specialtilfælde af ligedannethed med $k = 1$. Alle kongruente trekanter er ligedannede, men ikke alle ligedannede trekanter er kongruente. Ligedannet betyder: samme vinkler, men siderne må være proportionalt forskellige i længde.',
        mia_warning:
          'Mia: "I spilmotoren: Kongruent = Kopier. Ligedannet = Kopier + Skaler. Når du kopierer et hus og skalerer det, er det ligedannet. Uden skalering er det kongruent."',
      },
      scale_direction: {
        wrong: 'Stille skaleringsfaktoren forkert op',
        correct: 'Altid $k = \\frac{\\text{Billede}}{\\text{Original}}$',
        why: 'Hvis billedet er større end originalen, skal $k > 1$. Stiller du brøken forkert op, får du $k < 1$ og tror, der blev formindsket. Husk: Billede i tælleren, original i nævneren.',
      },
    },
  },
};
