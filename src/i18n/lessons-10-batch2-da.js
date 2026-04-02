export const batch2 = {
  '10-koerper': {
    story: {
      intro:
        'Mia stirrer paa sin skaerm. Level-arkitekturen i "Havnelys" har brug for 3D-objekter — lagerhaller, kraner, containere. Tim har modelleret meshene, men Lumi spoerger: "Hvor meget hukommelse kraever hver hitbox?" Mia griner: "Til det har vi brug for volumenformler."',
      challenge:
        'Beregn voluminer og overflader af pyramider, kegler og kugler. Hjaelp Mia med at bygge de perfekte 3D-hitboxe til hendes havnekvarter!',
      outro:
        '3D-legemerne er beregnet, hitboxene sidder. Tim tester kran-levelet og raaber: "Kollisionerne foeles endelig realistiske!" Mia laener sig tilbage — geometri goer spil bedre.',
    },
    objectives: {
      volume_pyramid: 'Beregne voluminet af pyramider med tredjedelformlen',
      volume_cone_sphere: 'Bestemme voluminer af kegler og kugler sikkert',
      surface_area: 'Anvende overfladeformler og fortolke resultaterne',
      apply_3d: 'Overfoere rumberegninger til hverdagsproblemer og spildesign',
    },
    explanation: {
      intro:
        'Tredimensionale legemer har volumen (rumindhold) og overflade. Ved pyramider og kegler gemmer sig en afgoerende faktor i formlen: tredjedelsfaktoren $\\frac{1}{3}$. Den kommer af, at disse legemer "loebert spidst til" — de fylder kun en tredjedel af det omsluttende prisme hhv. cylinder.',
      cone:
        'En kegle er som en "rund pyramide" — grundfladen er en cirkel med radius $r$. Formlen har samme struktur: en tredjedel gange grundflade gange hoejde, bare at grundfladen er $\\pi r^2$.',
      mia_tip:
        'Mia: "Jeg husker det saadan: Pyramide og kegle er de beskedne soeskende til prisme og cylinder — de tager kun en tredjedel af pladsen!"',
      sphere:
        'Kuglen er specialtilfaeldet: Den har ingen grundflade og ingen hoejde i klassisk forstand. Voluminet afhaenger kun af radius. Arkimedes beviste, at en kugle fylder praecis $\\frac{2}{3}$ af den omsluttende cylinder — deraf foelger formlen.',
    },
    concepts: {
      pyramid: {
        title: 'Pyramidevolumen',
        desc: 'En pyramide har en tredjedel af voluminet af et prisme med samme grundflade og hoejde. Grundfladen kan vaere et rektangel, en trekant eller en vilkaarlig polygon.',
      },
      cone: {
        title: 'Keglevolumen',
        desc: 'Keglen forholder sig til cylinderen som pyramiden til prismet: Den fylder praecis en tredjedel. Den cirkelformede grundflade goer den saerligt symmetrisk.',
      },
      sphere: {
        title: 'Kuglevolumen',
        desc: 'Kuglen beskrives fuldstaendigt af sin radius. $\\frac{4}{3}$ i formlen stammer fra integration — eller fra Arkimedes\' geniale bevis.',
      },
    },
    examples: {
      icecream: {
        title: 'Beregne isvaffel',
        context:
          'En isvaffel har form som en kegle med radius $r = 3$ cm og hoejde $h = 12$ cm. Hvor meget is er der plads til?',
        step1: 'Givet: Keglen har $r = 3$ cm og $h = 12$ cm.',
        step2: 'Anvend kegleformlen: Vi saetter ind i $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ og beregner parentesudtrykket foerst.',
        step3: 'Resultat: Vaflen rummer ca. $113{,}1\\,\\text{cm}^3$ is — det er lidt mere end en deciliter.',
        mia_comment:
          'Mia: "Wow, saadan en vaffel rummer slet ikke saa meget! Derfor stabler de altid en kugle ovenpaa."',
      },
      hitbox: {
        title: 'Kugleformet hitbox',
        context:
          'I "Havnelys" skal en boeje have en kugleformet hitbox med volumen $V = 904{,}8\\,\\text{cm}^3$. Hvor stor skal radius vaere?',
        step1: 'Givet: Kuglens volumen er $V = 904{,}8\\,\\text{cm}^3$. Soegt: radius $r$.',
        step2: 'Omstil formlen: Vi loeser $V = \\frac{4}{3} \\pi r^3$ for $r^3$ ved at dividere med $\\frac{4}{3}\\pi$.',
        step3: 'Beregn: $r^3 \\approx 215{,}9$ — nu tager vi tredje rod.',
        step4: 'Resultat: $r \\approx 6{,}0$ cm. Hitboxen kraever en radius paa 6 cm.',
        mia_comment:
          'Mia: "At regne baglæns er hverdag i spildesign — du ved, hvad du vil have, og skal finde parametrene."',
      },
    },
    realworld: {
      packaging: {
        title: 'Emballagedesign',
        desc: 'Drikkedaaser, konserves, flasker — overalt gemmer sig cylinderberegning. Producenter optimerer forholdet mellem volumen og materialforbrug for at spare omkostninger.',
      },
      icecream: {
        title: 'Iskugle-matematik',
        desc: 'Hvorfor ser en "stor" iskugle saa meget stoerre ud? Fordi voluminet vokser med $r^3$! Dobbelt radius = otte gange voluminet. Det forklarer ogsaa, hvorfor XXL-menuer er saa profitable.',
      },
      pizza: {
        title: 'Pizzasammenligning',
        desc: 'En 30 cm-pizza har mere areal end to 20 cm-pizzaer tilsammen! $\\pi \\cdot 15^2 = 706{,}9$ mod $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Stoerrelse betaler sig.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Glemme faktoren $\\frac{1}{3}$',
        correct: 'Ved kegle og pyramide ALTID $\\frac{1}{3}$ foran',
        why: 'Kegle og pyramide fylder kun en tredjedel af den omsluttende cylinder hhv. prisme. Uden faktoren beregner du voluminet af hele cylinderen — tre gange for meget!',
        mia_warning:
          'Mia: "Jeg beregnede engang alle hitboxene uden tredjedelen. Boejerne var enorme og blokerede hele havnebassinet. Tim var not amused."',
      },
      surface_volume: {
        wrong: 'Forveksle overflade- og volumenformlen for kuglen',
        correct: 'Volumen: $\\frac{4}{3}\\pi r^3$ — Overflade: $4\\pi r^2$',
        why: 'Ved volumen staar $r^3$ (kubisk, altsaa rumindhold), ved overflade $r^2$ (kvadratisk, altsaa fladeindhold). Laeg maerke til eksponenten — den fortaeller dig, hvad du beregner.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro:
        'Jule optimerer hukommelsen i "Havnelys". "Vores teksturer bruger 2 i 20. potens bytes — hvor meget er det egentlig?" Tim regner efter: "Vent, potenser kan jeg..." Mia ler: "Saa vis, hvad du kan."',
      challenge:
        'Mestr potensreglerne: Multiplicer, potensieer og forenkl potenser. Hjaelp Tim med at beregne hukommelsesstoerrelser og renderingstider lynhurtigt!',
      outro:
        'Tim har potensreglerne i hus. Hukommelsesberegningen tager nu sekunder. "Potenser er som snydekoder til store tal", siger han. Mia nikker: "Og til smaa ogsaa — velkommen til de negative eksponenter."',
    },
    objectives: {
      multiply_powers: 'Multiplicere og dividere potenser med samme grundtal',
      power_of_power: 'Forenkle potens af potens med multiplikationsreglen',
      negative_exponents: 'Fortolke negative eksponenter som broeker og omregne',
      apply_memory: 'Anvende potensreglerne paa hukommelsesstoerrelser og videnskabelig notation',
    },
    explanation: {
      intro:
        'Potenser er en kortform for gentaget multiplikation: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Naar du multiplicerer to potenser med samme grundtal, adderer du eksponenterne — for du forlaenger simpelthen kaeden af multiplikationer.',
      power_of_power:
        'Hvad sker der, naar du potenserer en potens igen? $(a^m)^n$ betyder: Du multiplicerer $a^m$ praecis $n$ gange med sig selv. Det giver $m \\cdot n$ faktorer — altsaa $a^{m \\cdot n}$. Eksponenterne multipliceres.',
      mia_tip:
        'Mia: "Samme grundtal → addere eksponenter. Potens ophojet i potens → multiplicere eksponenter. Forskellige grundtal → udregne, der er ingen genvej!"',
      negative:
        'En negativ eksponent vender potensen: $a^{-n} = \\frac{1}{a^n}$. Det er ikke en vilkaarlig definition — det foelger logisk af moenstret: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Hvert trin dividerer med grundtallet.',
    },
    concepts: {
      product_rule: {
        title: 'Produktregel',
        desc: 'Samme grundtal, forskellige eksponenter? Ved multiplikation adderes eksponenterne, ved division subtraheres de. Det virker KUN med samme grundtal!',
      },
      power_rule: {
        title: 'Potensregel',
        desc: 'En potens potenseres igen? Saa multiplicerer du eksponenterne. $(a^3)^4 = a^{12}$ — tolv faktorer $a$ i alt.',
      },
      negative_exp: {
        title: 'Negativ eksponent',
        desc: 'Et minus i eksponenten betyder "en divideret med". Saadan bliver store tal til smaa: $10^{-6}$ er en milliontedel. Perfekt til mikrochips og millisekunder.',
      },
    },
    examples: {
      simplify: {
        title: 'Beregne hukommelse',
        context:
          'Tim vil vide: Hvor meget er $2^3 \\cdot 2^4$ byte? I informatik er dette en typisk beregning med topptenser.',
        step1: 'Anvend produktreglen: Samme grundtal $2$, saa vi adderer eksponenterne: $3 + 4 = 7$.',
        step2: 'Beregn: $2^7 = 128$ byte.',
        step3: 'Indordning: 128 byte — det er naesten 1 kilobyte (det ville vaere praecis $2^{10} = 1024$).',
        mia_comment:
          'Mia: "I informatik er topptenser overalt. RAM, teksturer, farvedybder — alt potenser af 2!"',
      },
      negative: {
        title: 'Omregne millisekunder',
        context:
          'Et frame i "Havnelys" beregnes paa $10^{-3}$ sekunder. Hvad betyder det i decimalform?',
        step1: 'Anvend negativ eksponent: $10^{-3}$ betyder $\\frac{1}{10^3}$.',
        step2: 'Beregn: $\\frac{1}{1000} = 0{,}001$ sekunder.',
        step3: 'Indordning: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — et millisekund. Ved 60 fps har hvert frame ca. 16 ms tid.',
        mia_comment:
          'Mia: "Negative eksponenter lyder uhyggelige, men de betyder bare: smaa tal. $10^{-3}$ = milli, $10^{-6}$ = mikro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Digital hukommelse',
        desc: 'Din mobil har 256 GB? Det er $2^{38}$ byte, altsaa over 274 milliarder bytes. Hver fordobling af hukommelsen er kun +1 paa eksponenten — derfor vokser teknologien saa hurtigt.',
      },
      richter: {
        title: 'Richterskalaen',
        desc: 'Et jordskælv paa styrke 6 er ikke dobbelt saa kraeftigt som styrke 3 — men tusind gange! Hvert trin betyder $10 \\times$ mere energi. Potenser goer forskellen mærkbar.',
      },
      decibel: {
        title: 'Decibel og lydstyrke',
        desc: 'Hoeretelefoner paa 100 dB er $10^{10}$ gange mere intense end hoeregrænsen (0 dB). Hver +10 dB = ti gange intensiteten. Dine oerer regner logaritmisk — altsaa med potenser!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Multiplicere grundtal i stedet for at addere eksponenter',
        correct: 'Produktreglen gaelder KUN med samme grundtal',
        why: 'Ved $2^3 \\cdot 3^2$ er grundtallene forskellige (2 og 3). Her kan du ikke bruge nogen potensregel — du maa beregne enkeltvis: $8 \\cdot 9 = 72$. At addere eksponenterne og multiplicere grundtallene er en hyppig fejl!',
        mia_warning:
          'Mia: "Forskellige grundtal = ingen genvej. Punktum. Jeg lavede den fejl i koden engang, og teksturerne var alle oedelagte."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "ophojet i nul er nul"',
        correct: '$a^0 = 1$ for alle $a \\neq 0$',
        why: 'Foelg moenstret: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — hvert trin dividerer med 2. Altsaa $2^0 = 1$. Det gaelder for ALLE grundtal (undtagen 0). Nul er det neutrale element for addition, ikke for multiplikation.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro:
        'Mia scroller gennem asset-biblioteket til "Havnelys". Hamburg Speicherstadt har bygninger i alle stoerrelser — men de skal alle se proportionale ud. Lumi spoerger: "Kan vi ikke bare skalere alt?" Mia nikker: "Praecis. Det er ligedannethed."',
      challenge:
        'Forstaa ligedannede trekanter, skaleringsfaktorer og straaesaetningen. Hjaelp Mia med at skalere havnekvarteret proportionalt!',
      outro:
        'Speicherstadt i "Havnelys" ser fantastisk ud — hver bygning er proportional, hver bro passer. Jule beundrer resultatet: "Som om det var en rigtig model!" Mia smiler: "Det er det ogsaa. Matematisk eksakt."',
    },
    objectives: {
      similar_triangles: 'Genkende ligedannede trekanter og beskrive deres egenskaber',
      scale_factor: 'Beregne og anvende skaleringsfaktoren $k$',
      intercept_theorem: 'Anvende straaesaetningen paa geometriske problemer',
      apply_scaling: 'Bruge ligedannethed i arkitektur, kartografi og spildesign',
    },
    explanation: {
      intro:
        'To figurer er ligedannede, naar de har samme form, men maa vaere forskellige i stoerrelse. For trekanter er det tilstraekkeligt, at alle vinkler stemmer overens — saa er automatisk alle sideforhold ens. Forholdet mellem billede og original hedder skaleringsfaktor $k$.',
      scale_factor:
        'Skaleringsfaktoren $k$ fortaeller dig, hvor meget der er forstoerret eller formindsket. $k > 1$ betyder forstoerrelse, $k < 1$ formindskelse, $k = 1$ betyder kongruent (formens). Vigtigt: $k$ gaelder for laengder — flader skaleres med $k^2$, voluminer med $k^3$!',
      mia_tip:
        'Mia: "I spilmotoren arbejder vi hele tiden med skaleringsfaktorer. En sprite med scale 0.5 er halvt saa stor, scale 2.0 dobbelt. Praecis som i geometrien!"',
      intercept:
        'Straaesaetningen beskriver, hvad der sker, naar parallelle linjer skaerer to straaler: Afsnittene paa straalerne er proportionale. Dermed kan du beregne ukendte straekninger uden at maale alt.',
    },
    concepts: {
      similar_triangles: {
        title: 'Ligedannede trekanter',
        desc: 'To trekanter er ligedannede, naar de stemmer overens i alle vinkler. Saa gaelder: Alle sideforhold er ens. Det skrives $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Skaleringsfaktor',
        desc: 'Faktoren $k = \\frac{\\text{Billede}}{\\text{Original}}$ beskriver forstoerrelsen eller formindskelsen. $k = 2$ betyder: alt dobbelt saa stort. $k = 0{,}5$ betyder: alt halvt saa stort.',
      },
      intercept_theorem: {
        title: 'Straaesaetningen',
        desc: 'Naar to straaler skaeres af parallelle linjer, er de opstaade afsnit proportionale. Et kraftfuldt vaerktoej til at beregne manglende laengder.',
      },
    },
    examples: {
      model: {
        title: 'Skalere bygning',
        context:
          'Et Hamburg-pakhus er bygget som 3D-model i maalestok $1:100$. Modellen er $3{,}5$ cm hoej. Hvor hoej er den rigtige bygning?',
        step1: 'Bestem skaleringsfaktoren: $k = \\frac{1}{100}$ betyder, at modellen er 100 gange mindre end originalen.',
        step2: 'Aflaes modelhoejden: $h_{\\text{Model}} = 3{,}5$ cm.',
        step3: 'Regn tilbage: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Bygningen er 3,5 meter hoej.',
        mia_comment:
          'Mia: "Praecis saadan arbejder vi i Havnelys. Vi bygger Speicherstadt som model og skalerer alt proportionalt ind i spillet."',
      },
      intercept: {
        title: 'Anvende straaesaetningen',
        context:
          'To straaler skaeres af parallelle linjer. Afsnittene paa den ene straale er 4 og 6, paa den anden er det foerste afsnit 9. Hvor langt er det andet afsnit $x$?',
        step1: 'Opstil straaesaetningen: Forholdene mellem afsnittene paa begge straaler er ens: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Krydsmuliplicer: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Resultat: $x = 6$. Det andet afsnit er 6 enheder langt.',
        mia_comment:
          'Mia: "Straaesaetningen er som auto-layout i spilmotoren — du angiver et forhold, og alt andet tilpasser sig proportionalt."',
      },
    },
    realworld: {
      maps: {
        title: 'Kort og navigation',
        desc: 'Google Maps viser verden i maalestok. Zoomniveau 15 svarer til ca. $1:18\\,000$. Hvert zoomniveau fordobler skaleringsfaktoren — praecis som ligedannethed i geometrien.',
      },
      architecture: {
        title: 'Arkitekturmodeller',
        desc: 'Foer Elbphilharmonie blev bygget, fandtes der modeller i maalestok $1:500$. Arkitekter bruger ligedannethed til at slutte fra smaa modeller til virkelige maal — og omvendt.',
      },
      instagram: {
        title: 'Skalere billeder',
        desc: 'Naar du beskaerer et foto til Instagram, aendres maalestokken. "Tilpas til skaerm" skalerer proportionalt (ligedannet), "Straek" forvrider (ikke ligedannet). Dit oeje ser forskellen med det samme!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Ligedannet" og "kongruent" er det samme',
        correct: 'Ligedannet = samme form. Kongruent = samme form OG samme stoerrelse',
        why: 'Kongruens er et specialtilfaelde af ligedannethed med $k = 1$. Alle kongruente trekanter er ligedannede, men ikke alle ligedannede trekanter er kongruente. Ligedannet betyder: samme vinkler, men siderne maa vaere proportionalt forskellige i laengde.',
        mia_warning:
          'Mia: "I spilmotoren: Kongruent = Kopier. Ligedannet = Kopier + Skaler. Naar du kopierer et hus og skalerer det, er det ligedannet. Uden skalering er det kongruent."',
      },
      scale_direction: {
        wrong: 'Stille skaleringsfaktoren forkert op',
        correct: 'Altid $k = \\frac{\\text{Billede}}{\\text{Original}}$',
        why: 'Hvis billedet er stoerre end originalen, skal $k > 1$. Stiller du broeken forkert op, faar du $k < 1$ og tror, der blev formindsket. Husk: Billede i taelleren, original i naevneren.',
      },
    },
  },
};
