export const batch2 = {
  '10-koerper': {
    story: {
      intro:
        'Mia stirrer på skjermen. Level-arkitekturen til "Hafenlichter" trenger 3D-objekter — lagerhaller, kraner, containere. Tim har modellert meshene, men Lumi spør: "Hvor mye minne trenger hver hitbox?" Mia smiler: "Til det trenger vi volum-formler."',
      challenge:
        'Beregn volum og overflate av pyramider, kjegler og kuler. Hjelp Mia med å bygge de perfekte 3D-hitboksene for havnekvartalet!',
      outro:
        '3D-kroppene er beregnet, hitboksene sitter. Tim tester kran-levelet og roper: "Kollisjonene føles endelig realistiske!" Mia lener seg tilbake — geometri gjør spill bedre.',
    },
    objectives: {
      volume_pyramid: 'Beregne volumet av pyramider med tredjedelsformelen',
      volume_cone_sphere: 'Bestemme volum av kjegler og kuler sikkert',
      surface_area: 'Anvende overflateformler og tolke resultatene',
      apply_3d: 'Overføre romberegninger til hverdagsproblemer og spilldesign',
    },
    explanation: {
      intro:
        'Tredimensjonale kropper har volum (rominnhold) og overflate. Ved pyramider og kjegler stikker en avgjørende faktor i formelen: tredjedelsfaktoren $\\frac{1}{3}$. Den kommer av at disse kroppene "smalner av" — de fyller bare en tredjedel av det omsluttende prismet eller sylinderen.',
      cone:
        'En kjegle er som en "rund pyramide" — grunnflaten er en sirkel med radius $r$. Formelen har samme struktur: en tredjedel ganger grunnflate ganger høyde, bare at grunnflaten er $\\pi r^2$.',
      mia_tip:
        'Mia: "Jeg husker det slik: Pyramide og kjegle er de beskjedne søsknene til prisme og sylinder — de tar bare en tredjedel av plassen!"',
      sphere:
        'Kulen er spesialtilfellet: Den har ingen grunnflate og ingen høyde i klassisk forstand. Volumet avhenger bare av radiusen. Arkimedes beviste at en kule fyller nøyaktig $\\frac{2}{3}$ av den omsluttende sylinderen — derfra følger formelen.',
    },
    concepts: {
      pyramid: {
        title: 'Pyramidevolum',
        desc: 'En pyramide har en tredjedel av volumet til et prisme med samme grunnflate og høyde. Grunnflaten kan være et rektangel, en trekant eller en vilkårlig mangekant.',
      },
      cone: {
        title: 'Kjeglevolum',
        desc: 'Kjeglen forholder seg til sylinderen som pyramiden til prismet: Den fyller nøyaktig en tredjedel. Den sirkelformede grunnflaten gjør den spesielt symmetrisk.',
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
          'En iskremkjegle har formen av en kjegle med radius $r = 3$ cm og høyde $h = 12$ cm. Hvor mye is får plass?',
        step1: 'Identifiser gitt informasjon: Kjeglen har $r = 3$ cm og $h = 12$ cm.',
        step2: 'Anvend kjegleformelen: Vi setter inn i $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ og regner ut parentesuttrykket først.',
        step3: 'Resultat: Kjeglen rommer ca. $113{,}1\\,\\text{cm}^3$ is — det er litt mer enn en desiliter.',
        mia_comment:
          'Mia: "Wow, en slik kjegle rommer ikke så mye! Derfor stabler de alltid en kule oppå."',
      },
      hitbox: {
        title: 'Kuleformet hitbox',
        context:
          'I "Hafenlichter" skal en bøye ha en kuleformet hitbox med volum $V = 904{,}8\\,\\text{cm}^3$. Hvor stor må radiusen være?',
        step1: 'Gitt: Volumet av kulen er $V = 904{,}8\\,\\text{cm}^3$. Søkt: radiusen $r$.',
        step2: 'Omstill formelen: Vi løser $V = \\frac{4}{3} \\pi r^3$ for $r^3$ ved å dividere med $\\frac{4}{3}\\pi$.',
        step3: 'Beregn: $r^3 \\approx 215{,}9$ — nå tar vi tredje rot.',
        step4: 'Resultat: $r \\approx 6{,}0$ cm. Hitboksen trenger en radius på 6 cm.',
        mia_comment:
          'Mia: "Å regne baklengs er hverdagen i spilldesign — du vet hva du vil ha, og må finne parameterne."',
      },
    },
    realworld: {
      packaging: {
        title: 'Emballasjedesign',
        desc: 'Drikkebokser, hermetikk, flasker — overalt stikker sylinderberegning i. Produsenter optimaliserer forholdet mellom volum og materialforbruk for å spare kostnader.',
      },
      icecream: {
        title: 'Iskule-matematikk',
        desc: 'Hvorfor ser en "stor" iskule så mye større ut? Fordi volumet vokser med $r^3$! Dobbel radius = åtte ganger volumet. Det forklarer også hvorfor XXL-menyer er så lønnsomme.',
      },
      pizza: {
        title: 'Pizzasammenligning',
        desc: 'En 30 cm-pizza har mer areal enn to 20 cm-pizzaer til sammen! $\\pi \\cdot 15^2 = 706{,}9$ mot $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Størrelse lønner seg.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Glemme faktoren $\\frac{1}{3}$',
        correct: 'Ved kjegle og pyramide ALLTID $\\frac{1}{3}$ foran',
        why: 'Kjegle og pyramide fyller bare en tredjedel av den omsluttende sylinderen resp. prismet. Uten faktoren beregner du volumet av hele sylinderen — tre ganger for mye!',
        mia_warning:
          'Mia: "Jeg beregnet en gang alle hitboksene uten tredjedelen. Bøyene var enorme og blokkerte hele havnebassenget. Tim var ikke begeistret."',
      },
      surface_volume: {
        wrong: 'Forveksle overflate- og volumformelen for kulen',
        correct: 'Volum: $\\frac{4}{3}\\pi r^3$ — Overflate: $4\\pi r^2$',
        why: 'Ved volum står $r^3$ (kubisk, altså rominnhold), ved overflate $r^2$ (kvadratisk, altså flateinnhold). Legg merke til eksponenten — den forteller deg hva du beregner.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro:
        'Jule optimaliserer minnet i "Hafenlichter". "Teksturene våre bruker 2 opphøyd i 20 bytes — hvor mye er det egentlig?" Tim regner etter: "Vent, potenser kan jeg..." Mia ler: "Da vis hva du kan."',
      challenge:
        'Mestre potenslovene: Multipliser, potenser og forenkle potenser. Hjelp Tim med å beregne minnestørrelser og renderingstider lynraskt!',
      outro:
        'Tim har potenslovene i boks. Minneberegningen går nå på sekunder. "Potenser er som juksekoder for store tall", sier han. Mia nikker: "Og for små også — velkommen til de negative eksponentene."',
    },
    objectives: {
      multiply_powers: 'Multiplisere og dividere potenser med samme grunntall',
      power_of_power: 'Forenkle potens av potens med multiplikasjonsregelen',
      negative_exponents: 'Tolke negative eksponenter som brøker og omregne',
      apply_memory: 'Anvende potenslovene på minnestørrelser og vitenskapelig notasjon',
    },
    explanation: {
      intro:
        'Potenser er en kortform for gjentatt multiplikasjon: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Når du multipliserer to potenser med samme grunntall, adderer du eksponentene — for du forlenger rett og slett kjeden av multiplikasjoner.',
      power_of_power:
        'Hva skjer når du potenserer en potens igjen? $(a^m)^n$ betyr: Du multipliserer $a^m$ nøyaktig $n$ ganger med seg selv. Det gir $m \\cdot n$ faktorer — altså $a^{m \\cdot n}$. Eksponentene multipliseres.',
      mia_tip:
        'Mia: "Samme grunntall → addere eksponenter. Potens opphøyd i potens → multiplisere eksponenter. Ulike grunntall → regne ut, det finnes ingen snarvei!"',
      negative:
        'En negativ eksponent snur potensen: $a^{-n} = \\frac{1}{a^n}$. Det er ikke en vilkårlig definisjon — det følger logisk av mønsteret: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Hvert steg deler på grunntallet.',
    },
    concepts: {
      product_rule: {
        title: 'Produktregel',
        desc: 'Samme grunntall, ulike eksponenter? Ved multiplikasjon adderes eksponentene, ved divisjon subtraheres de. Det fungerer KUN med samme grunntall!',
      },
      power_rule: {
        title: 'Potensregel',
        desc: 'En potens potenseres på nytt? Da multipliserer du eksponentene. $(a^3)^4 = a^{12}$ — tolv faktorer $a$ totalt.',
      },
      negative_exp: {
        title: 'Negativ eksponent',
        desc: 'Et minus i eksponenten betyr "en delt på". Slik blir store tall til små: $10^{-6}$ er en milliontedel. Perfekt for mikrobrikker og millisekunder.',
      },
    },
    examples: {
      simplify: {
        title: 'Beregne minne',
        context:
          'Tim vil vite: Hvor mye er $2^3 \\cdot 2^4$ byte? I informatikk er dette en typisk beregning med toerpotenser.',
        step1: 'Anvend produktregelen: Samme grunntall $2$, så vi adderer eksponentene: $3 + 4 = 7$.',
        step2: 'Regn ut: $2^7 = 128$ byte.',
        step3: 'Innordning: 128 byte — det er nesten 1 kilobyte (det ville vært nøyaktig $2^{10} = 1024$).',
        mia_comment:
          'Mia: "I informatikk er toerpotenser overalt. RAM, teksturer, fargedybder — alt potenser av 2!"',
      },
      negative: {
        title: 'Omregne millisekunder',
        context:
          'Et frame i "Hafenlichter" beregnes på $10^{-3}$ sekunder. Hva betyr det i desimalform?',
        step1: 'Anvend negativ eksponent: $10^{-3}$ betyr $\\frac{1}{10^3}$.',
        step2: 'Regn ut: $\\frac{1}{1000} = 0{,}001$ sekunder.',
        step3: 'Innordning: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — ett millisekund. Ved 60 fps har hvert frame omtrent 16 ms tid.',
        mia_comment:
          'Mia: "Negative eksponenter høres skummelt ut, men de betyr bare: små tall. $10^{-3}$ = milli, $10^{-6}$ = mikro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Digitalt minne',
        desc: 'Mobilen din har 256 GB? Det er $2^{38}$ byte, altså over 274 milliarder bytes. Hver dobling av minnet er bare +1 på eksponenten — derfor vokser teknologien så raskt.',
      },
      richter: {
        title: 'Richterskalaen',
        desc: 'Et jordskjelv på styrke 6 er ikke dobbelt så sterkt som styrke 3 — men tusen ganger! Hvert trinn betyr $10 \\times$ mer energi. Potenser gjør forskjellen opplevbar.',
      },
      decibel: {
        title: 'Desibel og lydstyrke',
        desc: 'Hodetelefoner på 100 dB er $10^{10}$ ganger mer intense enn hørselsterskelen (0 dB). Hver +10 dB = ti ganger intensiteten. Ørene dine regner logaritmisk — altså med potenser!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Multiplisere grunntall i stedet for å addere eksponenter',
        correct: 'Produktregelen gjelder KUN med samme grunntall',
        why: 'Ved $2^3 \\cdot 3^2$ er grunntallene forskjellige (2 og 3). Her kan du ikke bruke noen potensregel — du må regne ut hver for seg: $8 \\cdot 9 = 72$. Å addere eksponentene og multiplisere grunntallene er en vanlig feil!',
        mia_warning:
          'Mia: "Ulike grunntall = ingen snarvei. Punktum. Jeg gjorde den feilen i koden en gang, og teksturene var ødelagte."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "opphøyd i null er null"',
        correct: '$a^0 = 1$ for alle $a \\neq 0$',
        why: 'Følg mønsteret: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — hvert steg deler på 2. Altså $2^0 = 1$. Det gjelder for ALLE grunntall (unntatt 0). Null er det nøytrale elementet for addisjon, ikke for multiplikasjon.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro:
        'Mia scroller gjennom asset-biblioteket til "Hafenlichter". Hamburg Speicherstadt har bygninger i alle størrelser — men de skal alle se proporsjonale ut. Lumi spør: "Kan vi ikke bare skalere alt?" Mia nikker: "Nøyaktig. Det er likhet."',
      challenge:
        'Forstå likedannede trekanter, skaleringsfaktorer og stråleteoremene. Hjelp Mia med å skalere havnekvartalet proporsjonalt!',
      outro:
        'Speicherstadt i "Hafenlichter" ser fantastisk ut — hvert bygg er proporsjonalt, hver bro passer. Jule beundrer resultatet: "Som om det var en ekte modell!" Mia smiler: "Det er det også. Matematisk eksakt."',
    },
    objectives: {
      similar_triangles: 'Gjenkjenne likedannede trekanter og beskrive egenskapene deres',
      scale_factor: 'Beregne og anvende skaleringsfaktoren $k$',
      intercept_theorem: 'Anvende stråleteoremene på geometriske problemer',
      apply_scaling: 'Bruke likhet i arkitektur, kartografi og spilldesign',
    },
    explanation: {
      intro:
        'To figurer er likedannede når de har samme form, men kan være forskjellig store. For trekanter holder det at alle vinkler stemmer overens — da er automatisk alle sideforhold like. Forholdet mellom bilde og original kalles skaleringsfaktor $k$.',
      scale_factor:
        'Skaleringsfaktoren $k$ forteller deg hvor mye det er forstørret eller forminsket. $k > 1$ betyr forstørrelse, $k < 1$ forminskning, $k = 1$ betyr kongruent (formlik). Viktig: $k$ gjelder for lengder — flater skaleres med $k^2$, volum med $k^3$!',
      mia_tip:
        'Mia: "I spillmotoren jobber vi hele tiden med skaleringsfaktorer. En sprite med scale 0.5 er halvparten så stor, scale 2.0 dobbelt. Akkurat som i geometrien!"',
      intercept:
        'Stråleteoremene beskriver hva som skjer når parallelle linjer skjærer to stråler: Avsnittene på strålene er proporsjonale. Dermed kan du beregne ukjente strekninger uten å måle alt.',
    },
    concepts: {
      similar_triangles: {
        title: 'Likedannede trekanter',
        desc: 'To trekanter er likedannede når de stemmer overens i alle vinkler. Da gjelder: Alle sideforhold er like. Det skrives $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Skaleringsfaktor',
        desc: 'Faktoren $k = \\frac{\\text{Bilde}}{\\text{Original}}$ beskriver forstørrelsen eller forminskningen. $k = 2$ betyr: alt dobbelt så stort. $k = 0{,}5$ betyr: alt halvparten så stort.',
      },
      intercept_theorem: {
        title: 'Stråleteoremene',
        desc: 'Når to stråler skjæres av parallelle linjer, er de oppståtte avsnittene proporsjonale. Et kraftig verktøy for å beregne manglende lengder.',
      },
    },
    examples: {
      model: {
        title: 'Skalere bygning',
        context:
          'Et Hamburg-lagerhus er bygd som 3D-modell i målestokk $1:100$. Modellen er $3{,}5$ cm høy. Hvor høy er den ekte bygningen?',
        step1: 'Bestem skaleringsfaktoren: $k = \\frac{1}{100}$ betyr at modellen er 100 ganger mindre enn originalen.',
        step2: 'Les av modellhøyden: $h_{\\text{Modell}} = 3{,}5$ cm.',
        step3: 'Regn tilbake: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Bygningen er 3,5 meter høy.',
        mia_comment:
          'Mia: "Nøyaktig slik jobber vi i Hafenlichter. Vi bygger Speicherstadt som modell og skalerer alt proporsjonalt inn i spillet."',
      },
      intercept: {
        title: 'Anvende stråleteoremene',
        context:
          'To stråler skjæres av parallelle linjer. Avsnittene på den ene strålen er 4 og 6, på den andre er det første avsnittet 9. Hvor langt er det andre avsnittet $x$?',
        step1: 'Sett opp stråleteoremene: Forholdene mellom avsnittene på begge stråler er like: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Kryssmultipliser: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Resultat: $x = 6$. Det andre avsnittet er 6 enheter langt.',
        mia_comment:
          'Mia: "Stråleteoremene er som auto-layout i spillmotoren — du angir et forhold, og alt annet tilpasser seg proporsjonalt."',
      },
    },
    realworld: {
      maps: {
        title: 'Kart og navigasjon',
        desc: 'Google Maps viser verden i målestokk. Zoomnivå 15 tilsvarer omtrent $1:18.000$. Hvert zoomnivå dobler skaleringsfaktoren — akkurat som likhet i geometrien.',
      },
      architecture: {
        title: 'Arkitekturmodeller',
        desc: 'Før Elbphilharmonie ble bygget, fantes det modeller i målestokk $1:500$. Arkitekter bruker likhet for å slutte fra små modeller til virkelige mål — og omvendt.',
      },
      instagram: {
        title: 'Skalere bilder',
        desc: 'Når du beskjærer et bilde for Instagram, endres målestokken. "Tilpass til skjerm" skalerer proporsjonalt (likedannet), "Strekk" forvrenger (ikke likedannet). Øyet ditt ser forskjellen med en gang!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Likedannet" og "kongruent" er det samme',
        correct: 'Likedannet = samme form. Kongruent = samme form OG samme størrelse',
        why: 'Kongruens er et spesialtilfelle av likhet med $k = 1$. Alle kongruente trekanter er likedannede, men ikke alle likedannede trekanter er kongruente. Likedannet betyr: samme vinkler, men sidene kan være proporsjonalt forskjellig lange.',
        mia_warning:
          'Mia: "I spillmotoren: Kongruent = Kopier. Likedannet = Kopier + Skaler. Når du kopierer et hus og skalerer det, er det likedannet. Uten skalering er det kongruent."',
      },
      scale_direction: {
        wrong: 'Sette opp skaleringsfaktoren feil vei',
        correct: 'Alltid $k = \\frac{\\text{Bilde}}{\\text{Original}}$',
        why: 'Hvis bildet er større enn originalen, må $k > 1$. Setter du brøken feil vei, får du $k < 1$ og tror det ble forminsket. Husk: Bilde i telleren, original i nevneren.',
      },
    },
  },
};
