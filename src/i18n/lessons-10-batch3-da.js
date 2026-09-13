export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia scroller gennem animationslisten for Havnelys og rynker panden. Lumis åndeanimation ser ud som en robot — hakkende og unaturlig. Også bølgerne i havnen virker stive, og dag-nat-cyklussen hopper i stedet for at flyde. "Alt der gentager sig, kræver en svingning", siger Tim. "Sinus og cosinus — de er lavet til det." Mia åbner lommeregneren og dykker ind i de periodiske funktioners verden.',
      challenge: 'Åndeanimation, bølgegang og dag-nat-cyklus skal svinge naturligt i stedet for at hakke.',
      outro: 'Lumis åndedræt hæver og sænker sig nu blødt, havnebølgerne ruller jævnt ind mod land, og lyset skifter glidende fra morgenrøde til midnatsblå. "Sinusfunktioner findes overalt i naturen", siger Jule. Mia nikker: "Og nu er de også i Havnelys."',
    },
    objectives: {
      periodic_functions: 'Genkende periodiske funktioner og skelne dem fra ikke-periodiske',
      amplitude_period: 'Aflæse amplitude og periode fra grafer og ligninger',
      frequency: 'Beregne frekvensen og forklare dens betydning',
      modeling: 'Modellere reelle processer med sinusfunktioner',
    },
    explanation: {
      intro: 'Nogle processer gentager sig igen og igen: dit hjerteslag, tidevandet, årstiderne. I matematikken beskriver vi sådanne svingninger med periodiske funktioner. Den vigtigste af dem er sinusfunktionen:',
      parameters: 'Den generelle sinusfunktion har fire parametre, som du kan forstå som regulatorer på en mikser: $A$ styrer svingningens højde (amplitude), $b$ påvirker hvor hurtigt svingningen gentager sig (periode), $c$ forskyder kurven til venstre eller højre, og $d$ forskyder den op eller ned.',
      mia_tip: 'Til Lumis åndeanimation bruger jeg $A = 3$ pixel og $T = 4$ sekunder. Det betyder: Hvert 4. sekund ånder Lumi ind og ud én gang, og brystet bevæger sig 3 pixel op og ned. Helt naturligt!',
      graph_reading: 'For at aflæse en periodisk funktion fra grafen søger du efter mønstret, der gentager sig. Afstanden mellem to identiske steder hedder periode $T$. Matematisk betyder periodicitet:',
      applications: 'Periodiske funktioner er det matematiske værktøj til alt, der svinger: lydbølger, vekselstrøm, penduler, lysbølger og endda planetbaner. Hver gang en proces gentager sig regelmæssigt, gemmer sig en sinusfunktion (eller dens slægtninge) bag.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitude',
        desc: 'Amplituden $A$ er det maksimale udslag fra middelværdien. Den måler, hvor "stærk" svingningen er. På grafen aflæser du den som halve differencen mellem højeste og laveste punkt.',
      },
      period: {
        title: 'Periode',
        desc: 'Perioden $T$ er længden af en fuldstændig svingningscyklus. Efter tiden $T$ gentager alt sig præcis. Jo større $b$, desto kortere periode.',
      },
      frequency: {
        title: 'Frekvens',
        desc: 'Frekvensen $f$ angiver, hvor mange svingninger per tidsenhed der finder sted. Den er den omvendte af perioden. Enhed: Hertz (Hz) = svingninger per sekund.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Aflæse sinusfunktion fra grafen',
        context: 'Mia har en bølgeeffekt i spillet og vil finde den passende ligning.',
        step1: 'Aflæs højeste og laveste punkt: $y_{\\max} = 3$ og $y_{\\min} = -3$. Amplituden er halve differencen — bølgen svinger 3 enheder op og ned.',
        step2: 'Aflæs perioden: En fuldstændig cyklus varer $4\\pi$ enheder. Deraf beregner vi $b$ med formlen $b = \\frac{2\\pi}{T}$ — det giver $0{,}5$.',
        step3: 'Sæt ligningen sammen: Da midterlinjen er ved $y = 0$ ($d = 0$) og ingen faseforskydning ($c = 0$) er synlig, er funktionen simpelthen:',
        mia_comment: 'Amplitude 3, periode $4\\pi$ — dermed gynger havnebølgerne pænt langsomt. Til hurtigere bølger øger jeg bare $b$!',
      },
      ferris_wheel: {
        title: 'Modellere pariserhjul',
        context: 'Et pariserhjul med 60 m diameter drejer én gang hvert 10. minut. Den laveste gondol er 5 m over jorden.',
        step1: 'Bestem amplituden: Radius er halve højden, altså $A = 30\\,\\text{m}$. Midterlinjen ligger ved $d = 5 + 30 = 35\\,\\text{m}$ (jord + radius).',
        step2: 'Perioden er en fuld omdrejning: $T = 10\\,\\text{min}$. Deraf følger $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Tag hensyn til startpunktet: Starte nederst betyder, at vi forskyder sinus med $-\\frac{\\pi}{2}$ (sinus starter normalt i midten, ikke nederst).',
        step4: 'Kontrol: Efter 2,5 minutter (kvart omdrejning) skal gondolen være på middelhøjde. Indsæt: $\\sin(0) = 0$, altså $h = 35\\,\\text{m}$. Passer!',
        mia_comment: 'Præcis sådan fungerer også dag-nat-cyklussen i Havnelys: Sinus med $T = 24$ (en spildag) og forskydning, så det er mørkest ved midnat.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Dit hjerteslag',
        desc: 'Dit hjerte slår ca. 72 gange per minut — det er 1,2 slag per sekund. De elektriske signaler fra hjertet (EKG) viser en periodisk kurve. Læger aflæser amplitude og frekvens for at opdage hjerteproblemer.',
      },
      tides: {
        title: 'Ebbe og flod',
        desc: 'I Hamburgs havn svinger vandstanden mellem høj- og lavvande hver 12,4. time. Det er en næsten perfekt sinusfunktion — forårsaget af månens tiltrækningskraft.',
      },
      temperature: {
        title: 'Årstemperatur',
        desc: 'Gennemsnitstemperaturen over et år følger omtrent en sinuskurve: varmt om sommeren, koldt om vinteren, med en periode på 365 dage. Klimaforskere bruger denne model som basis for prognoser.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Forveksle periode og frekvens',
        correct: 'Frekvens er den omvendte af perioden',
        why: 'Hvis perioden er $T = 2\\,\\text{s}$, svinger det hvert 2. sekund én gang. Frekvensen er da $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — ikke $2\\,\\text{Hz}$! Frekvens = "Hvor ofte per sekund?", Periode = "Hvor lang tid tager en cyklus?"',
        mia_warning: 'Denne fejl førte til, at Lumis åndedræt var dobbelt så hurtigt — hun så ud som efter en sprint!',
      },
      b_value: {
        wrong: 'Sætte $b$ lig perioden',
        correct: 'Omregne $b$ og $T$ med formlen',
        why: '$b$ er IKKE perioden, men hænger sammen via $T = \\frac{2\\pi}{b}$. Hvis perioden er $4\\pi$, så er $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — ikke $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Havnelys kører — men det hakker. Mia åbner ydeevnemonitoren og ser: I nogle scener falder billedraten til 15 FPS. "Hvor præcist bliver det langsomt?", spørger Tim. "Jeg har ikke brug for gennemsnittet over hele scenen, men det præcise sted, hvor ydeevnen bryder sammen." Jule smiler: "Det er præcis det spørgsmål, der førte til opfindelsen af differentialregningen — den momentane ændringsrate."',
      challenge: 'Finde det præcise sted, hvor billedraten bryder sammen — ikke bare gennemsnittet.',
      outro: 'Mia har fundet det kritiske sted: Præcis ved billede 847 eksploderer renderingstiden, fordi 200 partikler spawnes samtidigt. "Uden den momentane ændringsrate havde jeg søgt evigt", siger hun. Tim nikker: "Newton ville have gjort det på samme måde — bare uden ydeevnemonitor."',
    },
    objectives: {
      average_rate: 'Beregne og fortolke den gennemsnitlige ændringsrate (sekanthældning)',
      instantaneous_rate: 'Forstå den momentane ændringsrate som en grænseværdi',
      limit_concept: 'Følge overgangen fra sekant til tangent',
      derivative_notation: 'Kende og anvende de forskellige skrivemåder for den afledede',
    },
    explanation: {
      intro: 'Forestil dig, at du cykler til skole. Speedometeret viser 20 km/t — det er din momentane hastighed. Men hvordan beregner man den? Når du siger "Jeg cyklede 10 km på 30 minutter", er det et gennemsnit. Den momentane hastighed i et bestemt punkt er noget andet — og præcis det handler differentialregningen om.',
      secant_to_tangent: 'Ideen er genialt simpel: Beregn gennemsnitshældningen mellem to punkter, og ryk så punkterne stadig tættere sammen. I grænseværdien — når afstanden går mod nul — får du hældningen i et enkelt punkt. Det er den afledede:',
      mia_tip: 'Den gennemsnitlige billedrate over 10 sekunder siger mig intet. Jeg har brug for den momentane rate ved billede 847! Præcis som speedometeret: Det viser ikke gennemsnittet af hele turen, men hvor hurtigt du er NU.',
      derivative_meaning: 'Den afledede $f\'(x_0)$ har en klar betydning: Den angiver hældningen af tangenten til grafen i punktet $x_0$. Er $f\'(x_0) > 0$, stiger funktionen der. Er $f\'(x_0) < 0$, falder den. Er $f\'(x_0) = 0$, har funktionen der (muligvis) et maksimum eller minimum. Der findes forskellige skrivemåder:',
      geometric_interpretation: 'Geometrisk sker følgende: Sekanten gennem to punkter på grafen drejer, når punkterne rykker sammen. I grænseværdien bliver sekanten til en tangent — en ret linje, der "berører" grafen i præcis ét punkt. Hældningen af denne tangent er den afledede.',
    },
    concepts: {
      difference_quotient: {
        title: 'Differenskvotient',
        desc: 'Den gennemsnitlige ændringsrate mellem to punkter. Den beregner hældningen af sekanten — en ret linje, der skærer grafen i to punkter.',
      },
      differential_quotient: {
        title: 'Differentialkvotient (afledet)',
        desc: 'Den momentane ændringsrate på et sted. Opstår, når $h$ i differenskvotienten går mod nul. Giver tangenthældningen.',
      },
      derivative_notation: {
        title: 'Skrivemåder for den afledede',
        desc: 'Der er tre gangbare skrivemåder: $f\'(x)$ (Lagrange, hyppigst i skolen), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, fremhæver brøkkarakteren) og $\\dot{y}$ (Newton, især i fysik for tidsafledede).',
      },
    },
    examples: {
      average_speed: {
        title: 'Gennemsnitlig hastighed',
        context: 'En bold ruller ned ad en rampe. Strækningen afhænger kvadratisk af tiden.',
        step1: 'Givet er vej-tid-funktionen. Efter 2 sekunder har bolden tilbagelagt 2 m, efter 4 sekunder 8 m.',
        step2: 'Gennemsnitlig hastighed mellem $t = 2$ og $t = 4$: Vi dividerer strækningsændringen med tidsændringen. Det giver $3\\,\\text{m/s}$ i gennemsnit.',
        step3: 'Nu forkorter vi intervallet: Mellem $t = 2$ og $t = 2{,}1$ får vi $2{,}05\\,\\text{m/s}$. Jo kortere interval, desto tættere kommer vi på den momentane hastighed ved $t = 2$.',
        mia_comment: 'Præcis sådan fungerer min ydeevnemonitor: Den måler billedraten i stadig kortere intervaller, til jeg finder det præcise sted, hvor det hakker.',
      },
      instantaneous_rate: {
        title: 'Beregne den momentane ændringsrate',
        context: 'Bestem den afledede af $f(x) = x^2$ i punktet $x_0 = 3$.',
        step1: 'Vi sætter $f(x) = x^2$ og $x_0 = 3$ ind i differenskvotienten. Søgt: Hvad sker der, når $h$ går mod 0?',
        step2: 'Regn tælleren ud: $(3+h)^2 = 9 + 6h + h^2$. Minus $f(3) = 9$ giver $6h + h^2$ i tælleren.',
        step3: 'Divider med $h$ (det må vi, fordi $h \\neq 0$ i grænseprocessen): Der er $6 + h$ tilbage.',
        step4: 'Dan grænseværdi: For $h \\to 0$ bliver $6 + h$ til $6$. Hældningen af tangenten ved $x = 3$ er altså præcis $6$.',
        mia_comment: 'Tangenten ved $x = 3$ har hældning 6. Gør jeg det for hvert punkt, får jeg den afledede funktion $f\'(x) = 2x$. Ved $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Passer!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Fotofælder og hastighed',
        desc: 'En fotofælde måler ikke din momentane hastighed, men din gennemsnitshastighed over en kort strækning (strækningskontrol: over flere kilometer). Jo kortere målestrækning, desto tættere på momentanværdien.',
      },
      stock_trends: {
        title: 'Aktiekurser og trends',
        desc: 'Når en aktie "stiger", mener analytikere den positive afledede af kursen. Hældningen af tangenten til kursforløbet viser trenden: positiv = optrend, negativ = nedtrend, nul = vendepunkt.',
      },
      speedometer: {
        title: 'Speedometer i bilen',
        desc: 'Dit speedometer viser den momentane hastighed — matematisk den afledede af vejfunktionen mht. tid. GPS-enheder beregner den som grænseværdi af meget korte tidsintervaller.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Gennemsnit = momentanværdi',
        correct: 'Skelne mellem gennemsnit og momentanværdi',
        why: 'Den gennemsnitlige ændringsrate over et interval $[1;\\,5]$ er IKKE lig den momentane ændringsrate ved $x = 3$ (midten). Det gælder kun for lineære funktioner! For krummede grafer afviger begge værdier.',
        mia_warning: 'Jeg beregnede først den gennemsnitlige billedrate og troede, alt var ok. Men lokalt var der massive fald! Gennemsnittet skjulte problemet.',
      },
      secant_tangent: {
        wrong: 'Sekanthældning = tangenthældning',
        correct: 'Tangenten er grænseværdien af sekanten',
        why: 'Sekanten skærer grafen i to punkter, tangenten berører den i ét. Først når de to punkter nærmer sig ($h \\to 0$), bliver sekanten til tangent. Uden grænseværdi er det kun en tilnærmelse.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Havnelys har brug for et balanceringssystem: Hvor hurtigt skal Lumi levle? Hvor stærke bliver fjenderne? Hvad koster en opgradering? "Hvis alt vokser lineært, bliver spillet kedeligt", siger Jule. Tim tilføjer: "Og hvis alt vokser eksponentielt, bliver det unfair." Mia indser: Hun må kende forskellige væksttyper og bruge dem målrettet.',
      challenge: 'Finde de rigtige vækstkurver til spilbalancering — lineær, kvadratisk, eksponentiel eller logaritmisk.',
      outro: 'Mias balanceringssystem er færdigt: Løbehastighed vokser lineært, faldskade kvadratisk, XP-behov eksponentielt og læringskurven logaritmisk. "Hver kurve har sin plads", siger hun tilfreds. Spillet føles nu fair og spændende — fra Level 1 til endbossen.',
    },
    objectives: {
      identify_types: 'Genkende de fire store funktionsklasser (lineær, kvadratisk, eksponentiel, logaritmisk) på ligninger og grafer',
      compare_growth: 'Sammenligne og rangere vækstadfærden for funktionsklasserne',
      match_context: 'Vælge den rigtige funktionsklasse til en given situation og begrunde',
      graph_recognition: 'Tildele grafer til de rigtige funktionstyper',
    },
    explanation: {
      intro: 'I matematikken findes der forskellige "familier" af funktioner — hver med sin egen karakter. Nogle vokser jævnt, andre stadig hurtigere, atter andre stadig langsommere. De fire vigtigste klasser for 10. klasse er:',
      mia_tip: 'I spildesign bruger jeg hver funktionsklasse til noget andet: Lineær vækst til forudsigelige ting (løbehastighed), kvadratisk til ting der "opskruer sig" (faldskade), eksponentiel til udfordringer (XP-behov) og logaritmisk til læringseffekter (færdighedsudvikling).',
      growth_comparison: 'Afgørende er: Hvor hurtigt vokser hver funktionsklasse for store $x$-værdier? Rækkefølgen er altid den samme — uanset hvilke konkrete tal du sætter ind:',
      choosing_functions: 'At vælge den rigtige funktion til et problem er en nøglekompetence. Spørg dig selv: Er ændringen konstant (lineær)? Accelererer den jævnt (kvadratisk)? Fordobles værdien i faste intervaller (eksponentiel)? Bliver tilvæksten stadig mindre (logaritmisk)?',
    },
    concepts: {
      linear: {
        title: 'Lineære funktioner',
        desc: 'Konstant ændringsrate: Per trin kommer der altid lige meget til. Grafen er en ret linje. Hældning $m$ og y-akseskæring $b$ kan aflæses direkte.',
      },
      quadratic: {
        title: 'Kvadratiske funktioner',
        desc: 'Ændringsraten ændrer sig selv lineært — der kommer stadig hurtigere mere til (eller mindre). Grafen er en parabel med toppunkt.',
      },
      exponential: {
        title: 'Eksponentielle funktioner',
        desc: 'Vækst med en fast procentdel: Jo mere der er, desto mere kommer til. Fordobling i faste tidsintervaller. Vokser på lang sigt hurtigere end enhver potensfunktion.',
      },
      logarithmic: {
        title: 'Logaritmiske funktioner',
        desc: 'Omvendt funktion af eksponentialfunktionen. Vokser hurtigt i begyndelsen, derefter stadig langsommere. Modellerer mætningseffekter og læringskurver.',
      },
    },
    examples: {
      identify_type: {
        title: 'Genkende funktionstype fra værditabeller',
        context: 'Tre datasæt foreligger. Hvilken type passer til hvert?',
        step1: 'Test for lineær: Dan differencerne mellem påfølgende $y$-værdier. Er de konstante, er funktionen lineær.',
        step2: 'Test for eksponentiel: Dan kvotienterne mellem påfølgende $y$-værdier. Er de konstante, er funktionen eksponentiel.',
        step3: 'Test for kvadratisk: Dan de anden differencer (differencerne af differencerne). Er disse konstante, er funktionen kvadratisk.',
        mia_comment: 'Præcis sådan tester jeg min balancering: Jeg lader 100 runder simulere og tjekker, om værdierne følger den ønskede væksttype. Når de anden differencer driver af, stemmer noget ikke.',
      },
      game_mechanics: {
        title: 'Modellere spilmekanikker',
        context: 'Fire forskellige spilmekanikker i Havnelys kræver forskellige funktioner.',
        step1: 'Løbehastighed: Stiger per level med det samme beløb ($+5$ per level). Det er en konstant ændring — altså lineær. Fair og forudsigelig.',
        step2: 'Faldskade: Fra 2 m højde let skade, fra 10 m meget mere. Skadestigningen accelererer — kvadratisk. Giver fysisk mening (energi = $\\frac{1}{2}mv^2$).',
        step3: 'XP-behov per level: Level 2 kræver 150 XP, Level 3 kræver 225 XP, Level 4 kræver 337 XP. Behovet vokser altid med 50% — eksponentielt. Sådan forbliver højere levels en ægte udfordring.',
        step4: 'Læringskurve (færdighed): I begyndelsen lærer man hurtigt, senere stadig langsommere. Efter $t$ timers spilletid behersker man $20 \\cdot \\log_2(t+1)$ procent af mekanikkerne — logaritmisk.',
        mia_comment: 'Det er kernen i spildesign: Den rigtige kurve til den rigtige mekanik. Lineær XP ville være kedeligt, eksponentiel faldskade ville være unfair. Hver funktionstype har sit sweet spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Virale app-downloads',
        desc: 'Når hver bruger inviterer to venner, og de igen to, fordobles downloads. I begyndelsen næppe synligt, derefter eksplosivt — typisk eksponentielt. TikTok, Instagram og WhatsApp voksede sådan.',
      },
      salary: {
        title: 'Lommepenge og løn',
        desc: 'Dine lommepenge stiger (forhåbentlig) hvert år med det samme beløb — lineær vækst. Senere i karrieren stiger lønnen ofte tilsvarende: Et fast beløb per års erhvervserfaring.',
      },
      learning_curve: {
        title: 'Læringsfremgang',
        desc: 'Nyt instrument, ny sport, nyt sprog: I begyndelsen gør du enorme fremskridt, derefter bliver det stadig sværere at blive bedre. Det er en logaritmisk mætningskurve — og helt normalt!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Eksponentiel" og "kvadratisk" er det samme',
        correct: 'Eksponentiel vokser MEGET hurtigere end kvadratisk',
        why: 'For små tal ser $x^2$ og $2^x$ ens ud: $4^2 = 16$ og $2^4 = 16$. Men for $x = 10$: $10^2 = 100$ mod $2^{10} = 1024$. Eksponentiel vækst overhaler enhver potensfunktion!',
        mia_warning: 'Jeg havde XP-behovet først kvadratisk i stedet for eksponentielt. Resultat: Fra Level 20 var spillet alt for nemt, fordi spillerne samlede XP hurtigere end behovet voksede.',
      },
      all_curves_linear: {
        wrong: 'Al vækst er lineær',
        correct: 'Først tjekke væksttypen',
        why: 'Bare fordi noget "fordobles", betyder det ikke, at det er lineært! "Hver 3. dag dobbelt så mange følgere" er eksponentielt, ikke lineært. Lineært ville være: "Hver dag 100 nye følgere". Forskellen: konstant tilvækst (lineær) vs. konstant faktor (eksponentiel).',
      },
    },
  },
};
