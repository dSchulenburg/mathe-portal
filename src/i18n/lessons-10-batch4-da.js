export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'Mia sætter niveau 4 af Havnelys sammen: Lumi skal springe op på en platform, der langsomt og jævnt driver mod højre. "Bevægelsen er lineær", forklarer Tim. "60 pixels i sekundet — færdig." Mia taster det ind og opdager med det samme: det er en helt almindelig ligning for en ret linje. Startposition plus fart gange tid. Præcis det, hun tog med fra 9. klasse — bare mere formelt nu: $f(x) = m \\cdot x + b$.',
      challenge: 'Mia skal afstemme Lumis springkurve, så han lander præcis på den drivende platform. Hældningen på platformens bevægelse og skæringspunktet med Lumis bane — alt sammen lineært.',
      outro: 'En lineær funktion har to knapper: $m$ bestemmer, hvor stejlt den forløber, $b$ forskyder den op eller ned. Nu forstår Mia, hvorfor hun får brug for den igen og igen: platforme, energiforbrug, livsbjælker — overalt hvor noget "pr. skridt" vokser eller aftager med en fast størrelse, er linjens ligning det rigtige værktøj.',
    },
    objectives: {
      recognize: 'Genkende lineære funktioner på forskriften og på grafen',
      slope_intercept: 'Aflæse hældningen $m$ og skæringen med y-aksen $b$ i formen $f(x) = mx + b$',
      point_slope: 'Opstille en linje ud fra et punkt og en hældning med punkt-hældningsformen',
      two_points: 'Bestemme linjens ligning ud fra to punkter — beregne hældningen og derefter $b$',
    },
    explanation: {
      intro: 'En lineær funktion beskriver en jævn sammenhæng: når $x$ ændrer sig med én enhed, ændrer $y$ sig altid med det samme beløb. I grafen giver det en ret linje. Den generelle form er:',
      slope: 'Hældningen $m$ måler netop dette "beløb pr. skridt". Du får den ud fra to vilkårlige punkter på linjen — højdeforskellen divideret med breddeforskellen:',
      mia_tip: 'Jeg tænker på Lumis platform: den driver præcis 60 pixels i sekundet. Det er min $m = 60$ pixels/sekund. Hvis Lumi starter ved $b = 200$, er positionen efter $t$ sekunder ganske enkelt $f(t) = 60t + 200$. En lineær funktion i det fri!',
      intercept: 'Skæringen med y-aksen $b$ er den værdi, hvor linjen skærer den lodrette akse. Du aflæser den direkte på grafen — eller du indsætter $x = 0$ i forskriften:',
      point_slope: 'Kender du et punkt $P(x_0 \\mid y_0)$ og hældningen $m$, skriver du linjen hurtigst i punkt-hældningsformen. Derfra isolerer du $y$ og får standardformen:',
    },
    concepts: {
      normal_form: {
        title: 'Standardform $f(x) = mx + b$',
        desc: 'Den sædvanlige skrivemåde. $m$ er hældningen, $b$ skæringen med y-aksen. Begge parametre kan du aflæse direkte i forskriften — og begge har en klar geometrisk betydning.',
      },
      slope: {
        title: 'Hældning $m$',
        desc: 'Ændring i $y$ pr. enhed af $x$. Ud fra to punkter: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Positiv = stigende, negativ = faldende, $m = 0$ = vandret linje.',
      },
      point_slope: {
        title: 'Punkt-hældningsform',
        desc: 'Når et punkt $(x_0 \\mid y_0)$ og hældningen $m$ er kendt: $y - y_0 = m(x - x_0)$. Praktisk, fordi du ikke behøver at beregne $b$ særskilt — du isolerer bare $y$.',
      },
      parallel_perpendicular: {
        title: 'Parallelle og vinkelrette',
        desc: 'To linjer er parallelle, når de har samme hældning ($m_g = m_h$). De står vinkelret på hinanden, når produktet af hældningerne giver $-1$ ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Linjens ligning ud fra to punkter',
        context: 'Mia har to observationspunkter fra Lumis platformbane: $P_1(2 \\mid 1)$ og $P_2(5 \\mid 7)$. Hvilken ligning beskriver bevægelsen?',
        step1: 'Skriv de to givne punkter op:',
        step2: 'Beregn hældningen — forskellen på y-værdierne divideret med forskellen på x-værdierne:',
        step3: 'Opstil punkt-hældningsformen med $P_1(2 \\mid 1)$ og $m = 2$, og isolér derefter $y$:',
        step4: 'Færdig ligning på standardform:',
        mia_comment: 'Flot arbejdsgang: to punkter → hældning → indsæt → gang ud. Får jeg senere et tredje punkt, kan jeg bruge det til at tjekke, om min ligning passer.',
      },
      intersection: {
        title: 'Skæringspunkt mellem to linjer',
        context: 'Platformen kører langs $g\\colon y = 2x - 3$, Lumis springbane langs $h\\colon y = -x + 6$. Hvor mødes de?',
        step1: 'Notér begge ligninger — samme variabel $x$, samme variabel $y$:',
        step2: 'I skæringspunktet er begge $y$-værdier ens. Altså: sæt højresiderne lig hinanden:',
        step3: 'Isolér $x$ — begge $x$-led på den ene side, konstanterne på den anden:',
        step4: 'Indsæt $x$-værdien i en af de to ligninger for at få $y$-værdien. Skæringspunkt $S$:',
        mia_comment: 'I spillet er netop dette skæringspunkt træffer-billedet. Kender jeg tidspunktet $x = 3$, ved jeg, i hvilket billede jeg skal udløse kollisionen.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Mobilabonnement med fast pris',
        desc: 'Klassisk eksempel: 9,99 € i fast månedspris plus 10 cent pr. minut. Omkostningen som funktion af taletiden er en perfekt ret linje — $b$ er den faste pris, $m$ minutprisen.',
      },
      taxi: {
        title: 'Taxaomkostninger',
        desc: '4 € i starttakst, derefter 2,50 € pr. kilometer. De samlede omkostninger vokser lineært med den kørte strækning. Kan aflæses på enhver kvittering.',
      },
      constant_speed: {
        title: 'Bevægelse med konstant fart',
        desc: 'En skater sætter i gang med jævn fart $v$ og starter ved $s_0$. Den tilbagelagte strækning efter $t$ sekunder: $s(t) = v \\cdot t + s_0$. Ren linjeligning — kun variablerne hedder noget andet.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Hældningen på hovedet: $\\Delta x / \\Delta y$ i stedet for $\\Delta y / \\Delta x$',
        correct: 'Først højden (y), så bredden (x): $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'Hældningen beskriver "hvor meget højde pr. skridt" — altså $y$-ændringen i tælleren og $x$-ændringen i nævneren. Vender du brøken om, får du den reciprokke: af $m = 2$ bliver fejlagtigt $0{,}5$.',
        mia_warning: 'Mit trick: jeg tænker på en trappe. Trinnets højde divideret med trinnets bredde. Højden står altid øverst i brøken — ligesom på trappen.',
      },
      intercept_zero: {
        wrong: 'At forveksle skæringen med y-aksen med nulpunktet',
        correct: 'Nulpunkt: sæt $f(x) = 0$ og isolér $x$',
        why: 'Skæringen med y-aksen $b$ er $y$-værdien ved $x = 0$ — altså en $y$-værdi. Nulpunktet er den $x$-værdi, hvor $f(x) = 0$. Ved $f(x) = 2x + 5$ er $b = 5$, men nulpunktet ligger ved $x = -2{,}5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'Mia designer en roterende boss til Havnelys. Bossen er et hvirvlende møllehjul med tre arme — og Lumi skal springe gennem mellemrummene. "Hitboxen skal være cirkelformet", siger Tim. "Ellers ser det skævt ud, når Lumi strejfer en arm, der slet ikke er i nærheden." Mia har brug for omkredsen, arealet og vinklen for hver arm — ren cirkelgeometri.',
      challenge: 'Mia skal programmere runde hitboxes. Desuden buelængden, som hver arm stryger igennem pr. sekund — ellers passer rotationshastigheden ikke.',
      outro: 'Med $U = 2\\pi r$ og $A = \\pi r^2$ har Mia standardværktøjerne. Og med radianer omregner hun drejevinkler direkte til tilbagelagte strækninger — meget hurtigere end omvejen over $360°$. "Radianer er drejningernes programmeringssprog", noterer hun sig.',
    },
    objectives: {
      umfang_flaeche: 'Beregne omkreds og areal af en cirkel ud fra radius eller diameter',
      bogenmass: 'Omregne vinkler sikkert mellem grader og radianer',
      sektor: 'Beregne areal og buelængde af en cirkeludsnit med given centervinkel',
      bogenlaenge: 'Bestemme buelængder for hele cirklen og for udsnittet i begge vinkelmål',
    },
    explanation: {
      intro: 'Cirklen er mængden af alle punkter med samme afstand $r$ til centrum. Af dette ene mål $r$ følger omkreds og areal — begge med den berømte konstant $\\pi \\approx 3{,}14159$:',
      bogenmass: 'I stedet for at måle vinkler i grader kan man også bruge den tilhørende buelængde på enhedscirklen — det kaldes radianer. En hel cirkel har omkredsen $2\\pi r$, så $360°$ svarer præcis til $2\\pi$. For enhver vinkel $\\alpha$ i radianer gælder:',
      mia_tip: 'Radianer virkede først mærkelige på mig. Men i kode er de meget mere praktiske: når jeg skriver Math.cos(angle) i JavaScript, forventer funktionen radianer — ikke grader. Glemmer man det, drejer man pludselig sine sprites den forkerte vej.',
      umrechnung: 'Omregningen sker via forholdsreglen "$360° = 2\\pi\\,\\text{rad}$". Det giver en fast faktor, som du omsætter grader og radianer med:',
      sektor: 'Et cirkeludsnit er et "lagkagestykke" af cirklen. Dets andel af areal og omkreds svarer præcis til andelen af dets centervinkel i den hele vinkel. Med vinklen $\\alpha$ (i grader eller radianer) gælder:',
    },
    concepts: {
      umfang: {
        title: 'Omkreds $U$',
        desc: 'Længden af cirkellinjen. Afhænger lineært af radius — dobbelt radius betyder dobbelt omkreds. Med diameteren $d = 2r$ skriver man ofte også kort $U = \\pi d$.',
      },
      flaeche: {
        title: 'Areal $A$',
        desc: 'Det indesluttede areal. Afhænger kvadratisk af radius — dobbelt radius betyder firdobbelt areal. Vigtigt for alle opgaver om "hvor meget materiale" og "hvor meget indhold".',
      },
      bogenmass: {
        title: 'Radianer',
        desc: 'Vinkelmål, der måler vinklen som buelængde på enhedscirklen. Hel cirkel = $2\\pi$, halv cirkel = $\\pi$, ret vinkel = $\\frac{\\pi}{2}$. Standard i analyse og programmering.',
      },
      sektor: {
        title: 'Cirkeludsnit',
        desc: 'Et lagkagestykke: to radier plus buen imellem dem. Areal og buelængde er forholdsmæssige størrelser — centervinklen som brøkdel af $360°$ henholdsvis $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Omkreds og areal ud fra radius',
        context: 'Mias roterende boss har en radius på $5\\,\\text{cm}$ på skærmen. Hvor store er omkreds og areal?',
        step1: 'Radius er givet:',
        step2: 'Indsæt i omkredsen: $U = 2\\pi r$ med $r = 5$. Først eksakt med $\\pi$, derefter afrundet:',
        step3: 'Indsæt i arealet: $A = \\pi r^2$. Bemærk: kvadrér først $r$, gang så med $\\pi$:',
        mia_comment: 'Ved $r = 5$ er omkreds ($\\approx 31$) og areal ($\\approx 79$) helt forskellige tal. Fordobler jeg radius, bliver omkredsen dobbelt så stor — men arealet firdobles. Det er kvadratvirkningen.',
      },
      sektor: {
        title: 'Udsnittets areal og buelængde',
        context: 'En arm på bossen stryger gennem et udsnit med radius $12\\,\\text{cm}$ og centervinkel $60°$. Hvilket areal og hvilken buelængde giver det?',
        step1: 'Radius og vinkel i grader er givet:',
        step2: 'Bestem udsnittets andel af det samlede areal — $\\frac{60°}{360°} = \\frac{1}{6}$:',
        step3: 'Beregn udsnittets areal — eksakt med $\\pi$, derefter afrundet:',
        step4: 'Buelængde: samme andel $\\frac{1}{6}$ af omkredsen $2\\pi r$:',
        mia_comment: 'Tricket er altid det samme: andel = $\\frac{\\alpha°}{360°}$. Den ganger jeg med den hele cirkels størrelse (areal eller omkreds). Virker for $30°$ lige så godt som for $137{,}5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'En pizza i 8 stykker',
        desc: 'En pizza med radius $r$ skæres i 8 lige store stykker. Hvert stykke er et udsnit med $\\frac{360°}{8} = 45°$ og arealet $\\frac{\\pi r^2}{8}$. Konkret anvendelse i ethvert køkken.',
      },
      uhr: {
        title: 'Urets visere som udsnit',
        desc: 'På en time stryger timeviseren $30°$ ($\\frac{360°}{12}$), på et minut stryger minutviseren $6°$ ($\\frac{360°}{60}$). Ren udsnitsmatematik — også nyttigt til vinkelopgaver med ure.',
      },
      riesenrad: {
        title: 'Pariserhjulets buelængde',
        desc: 'En gondol på pariserhjulet i Hamborg med radius $r$ tilbagelægger i tiden $t$ af en hel omdrejning $T$ buelængden $b = 2\\pi r \\cdot \\frac{t}{T}$. Dermed kan man også beregne gondolens fart.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'At indsætte grader i formler, der forventer radianer',
        correct: 'Omregn grader til radianer, før du bruger $b = \\alpha \\cdot r$',
        why: 'Formlen $b = \\alpha \\cdot r$ virker kun, når $\\alpha$ er angivet i radianer. Ved $\\alpha = 60°$ er $b = 60 \\cdot r$ voldsomt forkert — det rigtige ville være $\\alpha = \\frac{\\pi}{3} \\approx 1{,}047$, altså $b \\approx 1{,}047 \\cdot r$.',
        mia_warning: 'Netop det ærgrede mig, da jeg drejede sprites: jeg indsatte 60 i stedet for 1,047 — bossen drejede 57 gange så hurtigt og forsvandt straks ud af skærmen!',
      },
      area_vs_circumference: {
        wrong: 'At beregne arealet med omkredsformlen ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$ — kvadratisk i $r$',
        why: 'Omkreds og areal er forskellige størrelser med forskellige enheder ($\\text{cm}$ over for $\\text{cm}^2$). $2\\pi r$ er lineær, $\\pi r^2$ kvadratisk. Forveksler man dem, er alle efterfølgende beregninger ødelagte — og enheden røber det med det samme.',
      },
    },
  },
};
