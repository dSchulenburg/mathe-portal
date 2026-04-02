export const batch2 = {
  '10-koerper': {
    story: {
      intro:
        'Mia stirrer paa skjermen. Level-arkitekturen til "Havnelys" trenger 3D-objekter — lagerhaller, kraner, containere. Tim har modellert meshene, men Lumi spoer: "Hvor mye minne trenger hver hitbox?" Mia smiler: "Til det trenger vi volum-formler."',
      challenge:
        'Beregn volum og overflate av pyramider, kjegler og kuler. Hjelp Mia med aa bygge de perfekte 3D-hitboksene for havnekvartalet!',
      outro:
        '3D-kroppene er beregnet, hitboksene sitter. Tim tester kran-levelet og roper: "Kollisjonene foeles endelig realistiske!" Mia lener seg tilbake — geometri gjoer spill bedre.',
    },
    objectives: {
      volume_pyramid: 'Beregne volumet av pyramider med tredjedelsformelen',
      volume_cone_sphere: 'Bestemme volum av kjegler og kuler sikkert',
      surface_area: 'Anvende overflateformler og tolke resultatene',
      apply_3d: 'Overfoere romberegninger til hverdagsproblemer og spilldesign',
    },
    explanation: {
      intro:
        'Tredimensjonale kropper har volum (rominnhold) og overflate. Ved pyramider og kjegler stikker en avgjoerende faktor i formelen: tredjedelsfaktoren $\\frac{1}{3}$. Den kommer av at disse kroppene "smalner av" — de fyller bare en tredjedel av det omsluttende prismet eller sylinderen.',
      cone:
        'En kjegle er som en "rund pyramide" — grunnflaten er en sirkel med radius $r$. Formelen har samme struktur: en tredjedel ganger grunnflate ganger hoeyde, bare at grunnflaten er $\\pi r^2$.',
      mia_tip:
        'Mia: "Jeg husker det slik: Pyramide og kjegle er de beskjedne soeknene til prisme og sylinder — de tar bare en tredjedel av plassen!"',
      sphere:
        'Kulen er spesialtilfellet: Den har ingen grunnflate og ingen hoeyde i klassisk forstand. Volumet avhenger bare av radiusen. Arkimedes beviste at en kule fyller noeaktig $\\frac{2}{3}$ av den omsluttende sylinderen — derfra foelger formelen.',
    },
    concepts: {
      pyramid: {
        title: 'Pyramidevolum',
        desc: 'En pyramide har en tredjedel av volumet til et prisme med samme grunnflate og hoeyde. Grunnflaten kan vaere et rektangel, en trekant eller en vilkaarlig mangekant.',
      },
      cone: {
        title: 'Kjeglevolum',
        desc: 'Kjeglen forhalder seg til sylinderen som pyramiden til prismet: Den fyller noeaktig en tredjedel. Den sirkelformede grunnflaten gjoer den spesielt symmetrisk.',
      },
      sphere: {
        title: 'Kulevolum',
        desc: 'Kulen beskrives fullstendig av radiusen. $\\frac{4}{3}$ i formelen stammer fra integrasjon — eller fra Arkimedes\' geniale bevis.',
      },
    },
    examples: {
      icecream: {
        title: 'Beregne iskremkjegle',
        context:
          'En iskremkjegle har formen av en kjegle med radius $r = 3$ cm og hoeyde $h = 12$ cm. Hvor mye is faar plass?',
        step1: 'Identifiser gitt informasjon: Kjeglen har $r = 3$ cm og $h = 12$ cm.',
        step2: 'Anvend kjegleformelen: Vi setter inn i $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ og regner ut parentesuttrykket foerst.',
        step3: 'Resultat: Kjeglen rommer ca. $113{,}1\\,\\text{cm}^3$ is — det er litt mer enn en desiliter.',
        mia_comment:
          'Mia: "Wow, en slik kjegle rommer ikke saa mye! Derfor stabler de alltid en kule oppaa."',
      },
      hitbox: {
        title: 'Kuleformet hitbox',
        context:
          'I "Havnelys" skal en boeye ha en kuleformet hitbox med volum $V = 904{,}8\\,\\text{cm}^3$. Hvor stor maa radiusen vaere?',
        step1: 'Gitt: Volumet av kulen er $V = 904{,}8\\,\\text{cm}^3$. Soeakt: radiusen $r$.',
        step2: 'Omstill formelen: Vi loeser $V = \\frac{4}{3} \\pi r^3$ for $r^3$ ved aa dividere med $\\frac{4}{3}\\pi$.',
        step3: 'Beregn: $r^3 \\approx 215{,}9$ — naa tar vi tredje rot.',
        step4: 'Resultat: $r \\approx 6{,}0$ cm. Hitboksen trenger en radius paa 6 cm.',
        mia_comment:
          'Mia: "Aa regne baklengs er hverdagen i spilldesign — du vet hva du vil ha, og maa finne parameterne."',
      },
    },
    realworld: {
      packaging: {
        title: 'Emballasjedesign',
        desc: 'Drikkebokser, hermetikk, flasker — overalt stikker sylinderberegning i. Produsenter optimaliserer forholdet mellom volum og materialforbruk for aa spare kostnader.',
      },
      icecream: {
        title: 'Iskule-matematikk',
        desc: 'Hvorfor ser en "stor" iskule saa mye stoerre ut? Fordi volumet vokser med $r^3$! Dobbel radius = aatten ganger volumet. Det forklarer ogaa hvorfor XXL-menyer er saa loennsomme.',
      },
      pizza: {
        title: 'Pizzasammenligning',
        desc: 'En 30 cm-pizza har mer areal enn to 20 cm-pizzaer til sammen! $\\pi \\cdot 15^2 = 706{,}9$ mot $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Stoerrelse loenner seg.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Glemme faktoren $\\frac{1}{3}$',
        correct: 'Ved kjegle og pyramide ALLTID $\\frac{1}{3}$ foran',
        why: 'Kjegle og pyramide fyller bare en tredjedel av den omsluttende sylinderen resp. prismet. Uten faktoren beregner du volumet av hele sylinderen — tre ganger for mye!',
        mia_warning:
          'Mia: "Jeg beregnet en gang alle hitboksene uten tredjedelen. Boeyene var enorme og blokkerte hele havnebassenget. Tim var ikke begeistret."',
      },
      surface_volume: {
        wrong: 'Forveksle overflate- og volumformelen for kulen',
        correct: 'Volum: $\\frac{4}{3}\\pi r^3$ — Overflate: $4\\pi r^2$',
        why: 'Ved volum staar $r^3$ (kubisk, altsaa rominnhold), ved overflate $r^2$ (kvadratisk, altsaa flateinnhold). Legg merke til eksponenten — den forteller deg hva du beregner.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro:
        'Jule optimaliserer minnet i "Havnelys". "Teksturene vaare bruker 2 opphoeyd i 20 bytes — hvor mye er det egentlig?" Tim regner etter: "Vent, potenser kan jeg..." Mia ler: "Da vis hva du kan."',
      challenge:
        'Mestre potenslovene: Multipliser, potensieer og forenkle potenser. Hjelp Tim med aa beregne minnestoerrelser og renderingstider lynraskt!',
      outro:
        'Tim har potenslovene i boks. Minneberegningen gaar naa paa sekunder. "Potenser er som juksekoder for store tall", sier han. Mia nikker: "Og for smaa ogaa — velkommen til de negative eksponentene."',
    },
    objectives: {
      multiply_powers: 'Multiplisere og dividere potenser med samme grunntall',
      power_of_power: 'Forenkle potens av potens med multiplikasjonsregelen',
      negative_exponents: 'Tolke negative eksponenter som broeker og omregne',
      apply_memory: 'Anvende potenslovene paa minnestoerrelser og vitenskapelig notasjon',
    },
    explanation: {
      intro:
        'Potenser er en kortform for gjentatt multiplikasjon: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Naar du multipliserer to potenser med samme grunntall, adderer du eksponentene — for du forlenger rett og slett kjeden av multiplikasjoner.',
      power_of_power:
        'Hva skjer naar du potenserer en potens igjen? $(a^m)^n$ betyr: Du multipliserer $a^m$ noeaktig $n$ ganger med seg selv. Det gir $m \\cdot n$ faktorer — altsaa $a^{m \\cdot n}$. Eksponentene multipliseres.',
      mia_tip:
        'Mia: "Samme grunntall → addere eksponenter. Potens opphoeyd i potens → multiplisere eksponenter. Ulike grunntall → regne ut, det finnes ingen snarvei!"',
      negative:
        'En negativ eksponent snur potensen: $a^{-n} = \\frac{1}{a^n}$. Det er ikke en vilkaarlig definisjon — det foelger logisk av moensteret: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Hvert steg deler paa grunntallet.',
    },
    concepts: {
      product_rule: {
        title: 'Produktregel',
        desc: 'Samme grunntall, ulike eksponenter? Ved multiplikasjon adderes eksponentene, ved divisjon subtraheres de. Det fungerer KUN med samme grunntall!',
      },
      power_rule: {
        title: 'Potensregel',
        desc: 'En potens potenseres paa nytt? Da multipliserer du eksponentene. $(a^3)^4 = a^{12}$ — tolv faktorer $a$ totalt.',
      },
      negative_exp: {
        title: 'Negativ eksponent',
        desc: 'Et minus i eksponenten betyr "en delt paa". Slik blir store tall til smaa: $10^{-6}$ er en milliontedel. Perfekt for mikrobrikker og millisekunder.',
      },
    },
    examples: {
      simplify: {
        title: 'Beregne minne',
        context:
          'Tim vil vite: Hvor mye er $2^3 \\cdot 2^4$ byte? I informatikk er dette en typisk beregning med toerpotenser.',
        step1: 'Anvend produktregelen: Samme grunntall $2$, saa vi adderer eksponentene: $3 + 4 = 7$.',
        step2: 'Regn ut: $2^7 = 128$ byte.',
        step3: 'Innordning: 128 byte — det er nesten 1 kilobyte (det ville vaert noeaktig $2^{10} = 1024$).',
        mia_comment:
          'Mia: "I informatikk er toerpotenser overalt. RAM, teksturer, fargedybder — alt potenser av 2!"',
      },
      negative: {
        title: 'Omregne millisekunder',
        context:
          'Et frame i "Havnelys" beregnes paa $10^{-3}$ sekunder. Hva betyr det i desimalform?',
        step1: 'Anvend negativ eksponent: $10^{-3}$ betyr $\\frac{1}{10^3}$.',
        step2: 'Regn ut: $\\frac{1}{1000} = 0{,}001$ sekunder.',
        step3: 'Innordning: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — ett millisekund. Ved 60 fps har hvert frame omtrent 16 ms tid.',
        mia_comment:
          'Mia: "Negative eksponenter hoeres skummelt ut, men de betyr bare: smaa tall. $10^{-3}$ = milli, $10^{-6}$ = mikro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Digitalt minne',
        desc: 'Mobilen din har 256 GB? Det er $2^{38}$ byte, altsaa over 274 milliarder bytes. Hver dobling av minnet er bare +1 paa eksponenten — derfor vokser teknologien saa raskt.',
      },
      richter: {
        title: 'Richterskalaen',
        desc: 'Et jordskjelv paa styrke 6 er ikke dobbelt saa sterkt som styrke 3 — men tusen ganger! Hvert trinn betyr $10 \\times$ mer energi. Potenser gjoer forskjellen opplevbar.',
      },
      decibel: {
        title: 'Desibel og lydstyrke',
        desc: 'Hoeretelefoner paa 100 dB er $10^{10}$ ganger mer intense enn hoerselsterskelen (0 dB). Hver +10 dB = ti ganger intensiteten. OErene dine regner logaritmisk — altsaa med potenser!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Multiplisere grunntall i stedet for aa addere eksponenter',
        correct: 'Produktregelen gjelder KUN med samme grunntall',
        why: 'Ved $2^3 \\cdot 3^2$ er grunntallene forskjellige (2 og 3). Her kan du ikke bruke noen potensregel — du maa regne ut hver for seg: $8 \\cdot 9 = 72$. Aa addere eksponentene og multiplisere grunntallene er en vanlig feil!',
        mia_warning:
          'Mia: "Ulike grunntall = ingen snarvei. Punktum. Jeg gjorde den feilen i koden en gang, og teksturene var oedelagte."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "opphoeyd i null er null"',
        correct: '$a^0 = 1$ for alle $a \\neq 0$',
        why: 'Foelg moensteret: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — hvert steg deler paa 2. Altsaa $2^0 = 1$. Det gjelder for ALLE grunntall (unntatt 0). Null er det noeytrale elementet for addisjon, ikke for multiplikasjon.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro:
        'Mia scroller gjennom asset-biblioteket til "Havnelys". Hamburg Speicherstadt har bygninger i alle stoerrelser — men de skal alle se proporsjonale ut. Lumi spoer: "Kan vi ikke bare skalere alt?" Mia nikker: "Noeaktig. Det er likhet."',
      challenge:
        'Forstaa likedannede trekanter, skaleringsfaktorer og straalesetninge. Hjelp Mia med aa skalere havnekvartalet proporsjonalt!',
      outro:
        'Speicherstadt i "Havnelys" ser fantastisk ut — hvert bygg er proporsjonalt, hver bro passer. Jule beundrer resultatet: "Som om det var en ekte modell!" Mia smiler: "Det er det ogaa. Matematisk eksakt."',
    },
    objectives: {
      similar_triangles: 'Gjenkjenne likedannede trekanter og beskrive egenskapene deres',
      scale_factor: 'Beregne og anvende skaleringsfaktoren $k$',
      intercept_theorem: 'Anvende straaleteoremene paa geometriske problemer',
      apply_scaling: 'Bruke likhet i arkitektur, kartografi og spilldesign',
    },
    explanation: {
      intro:
        'To figurer er likedannede naar de har samme form, men kan vaere forskjellig store. For trekanter holder det at alle vinkler stemmer overens — da er automatisk alle sideforhold like. Forholdet mellom bilde og original kalles skaleringsfaktor $k$.',
      scale_factor:
        'Skaleringsfaktoren $k$ forteller deg hvor mye det er forsoerret eller forminsket. $k > 1$ betyr forstoerrelse, $k < 1$ forminskning, $k = 1$ betyr kongruent (formlik). Viktig: $k$ gjelder for lengder — flater skaleres med $k^2$, volum med $k^3$!',
      mia_tip:
        'Mia: "I spillmotoren jobber vi hele tiden med skaleringsfaktorer. En sprite med scale 0.5 er halvparten saa stor, scale 2.0 dobbelt. Akkurat som i geometrien!"',
      intercept:
        'Straaleteoremene beskriver hva som skjer naar parallelle linjer skaerer to straaler: Avsnittene paa straalene er proporsjonale. Dermed kan du beregne ukjente strekninger uten aa maale alt.',
    },
    concepts: {
      similar_triangles: {
        title: 'Likedannede trekanter',
        desc: 'To trekanter er likedannede naar de stemmer overens i alle vinkler. Da gjelder: Alle sideforhold er like. Det skrives $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Skaleringsfaktor',
        desc: 'Faktoren $k = \\frac{\\text{Bilde}}{\\text{Original}}$ beskriver forstoerrelsen eller forminskningen. $k = 2$ betyr: alt dobbelt saa stort. $k = 0{,}5$ betyr: alt halvparten saa stort.',
      },
      intercept_theorem: {
        title: 'Straaleteoremene',
        desc: 'Naar to straaler skaeres av parallelle linjer, er de oppstaatte avsnittene proporsjonale. Et kraftig verktoey for aa beregne manglende lengder.',
      },
    },
    examples: {
      model: {
        title: 'Skalere bygning',
        context:
          'Et Hamburg-lagerhus er bygd som 3D-modell i maalestokk $1:100$. Modellen er $3{,}5$ cm hoey. Hvor hoey er den ekte bygningen?',
        step1: 'Bestem skaleringsfaktoren: $k = \\frac{1}{100}$ betyr at modellen er 100 ganger mindre enn originalen.',
        step2: 'Les av modellhoeyden: $h_{\\text{Modell}} = 3{,}5$ cm.',
        step3: 'Regn tilbake: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Bygningen er 3,5 meter hoey.',
        mia_comment:
          'Mia: "Noeaktig slik jobber vi i Havnelys. Vi bygger Speicherstadt som modell og skalerer alt proporsjonalt inn i spillet."',
      },
      intercept: {
        title: 'Anvende straaleteoremene',
        context:
          'To straaler skaeres av parallelle linjer. Avsnittene paa den ene straalen er 4 og 6, paa den andre er det foerste avsnittet 9. Hvor langt er det andre avsnittet $x$?',
        step1: 'Sett opp straaleteoremene: Forholdene mellom avsnittene paa begge straaler er like: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Kryssmultipliser: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Resultat: $x = 6$. Det andre avsnittet er 6 enheter langt.',
        mia_comment:
          'Mia: "Straaleteoremene er som auto-layout i spillmotoren — du angir et forhold, og alt annet tilpasser seg proporsjonalt."',
      },
    },
    realworld: {
      maps: {
        title: 'Kart og navigasjon',
        desc: 'Google Maps viser verden i maalestokk. Zoomnivaa 15 tilsvarer omtrent $1:18\\,000$. Hvert zoomnivaa dobler skaleringsfaktoren — akkurat som likhet i geometrien.',
      },
      architecture: {
        title: 'Arkitekturmodeller',
        desc: 'Foer Elbphilharmonie ble bygget, fantes det modeller i maalestokk $1:500$. Arkitekter bruker likhet for aa slutte fra smaa modeller til virkelige maal — og omvendt.',
      },
      instagram: {
        title: 'Skalere bilder',
        desc: 'Naar du beskjaerer et bilde for Instagram, endres maalestokken. "Tilpass til skjerm" skalerer proporsjonalt (likedannet), "Strekk" forvrenger (ikke likedannet). OEyet ditt ser forskjellen med en gang!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Likedannet" og "kongruent" er det samme',
        correct: 'Likedannet = samme form. Kongruent = samme form OG samme stoerrelse',
        why: 'Kongruens er et spesialtilfelle av likhet med $k = 1$. Alle kongruente trekanter er likedannede, men ikke alle likedannede trekanter er kongruente. Likedannet betyr: samme vinkler, men sidene kan vaere proporsjonalt forskjellig lange.',
        mia_warning:
          'Mia: "I spillmotoren: Kongruent = Kopier. Likedannet = Kopier + Skaler. Naar du kopierer et hus og skalerer det, er det likedannet. Uten skalering er det kongruent."',
      },
      scale_direction: {
        wrong: 'Sette opp skaleringsfaktoren feil vei',
        correct: 'Alltid $k = \\frac{\\text{Bilde}}{\\text{Original}}$',
        why: 'Hvis bildet er stoerre enn originalen, maa $k > 1$. Setter du broeken feil vei, faar du $k < 1$ og tror det ble forminsket. Husk: Bilde i telleren, original i nevneren.',
      },
    },
  },
};
