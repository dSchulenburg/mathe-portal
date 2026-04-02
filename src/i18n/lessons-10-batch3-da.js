export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia scroller gennem animationslisten for Havnelys og rynker panden. Lumis aandeanimation ser ud som en robot — hakkende og unaturlig. Ogsaa boelgerne i havnen virker stive, og dag-nat-cyklussen hopper i stedet for at flyde. "Alt der gentager sig, kraever en svingning", siger Tim. "Sinus og cosinus — de er lavet til det." Mia aabner lommeregneren og dykker ind i de periodiske funktioners verden.',
      challenge: 'Aandeanimation, boelgegang og dag-nat-cyklus skal svinge naturligt i stedet for at hakke.',
      outro: 'Lumis aandedraet haever og saenker sig nu blødt, havneboelgerne ruller jaevnt ind mod land, og lyset skifter glidende fra morgenroede til midnatsblaat. "Sinusfunktioner findes overalt i naturen", siger Jule. Mia nikker: "Og nu er de ogsaa i Havnelys."',
    },
    objectives: {
      periodic_functions: 'Genkende periodiske funktioner og skelne dem fra ikke-periodiske',
      amplitude_period: 'Aflæse amplitude og periode fra grafer og ligninger',
      frequency: 'Beregne frekvensen og forklare dens betydning',
      modeling: 'Modellere reelle processer med sinusfunktioner',
    },
    explanation: {
      intro: 'Nogle processer gentager sig igen og igen: dit hjerteslag, tidevandet, aarstiderne. I matematikken beskriver vi saadanne svingninger med periodiske funktioner. Den vigtigste af dem er sinusfunktionen:',
      parameters: 'Den generelle sinusfunktion har fire parametre, som du kan forstaa som regulatorer paa en mikser: $A$ styrer svingningens hoejde (amplitude), $b$ paavirker hvor hurtigt svingningen gentager sig (periode), $c$ forskyder kurven til venstre eller hoejre, og $d$ forskyder den op eller ned.',
      mia_tip: 'Til Lumis aandeanimation bruger jeg $A = 3$ pixel og $T = 4$ sekunder. Det betyder: Hvert 4. sekund aander Lumi ind og ud en gang, og brystet bevaeger sig 3 pixel op og ned. Helt naturligt!',
      graph_reading: 'For at aflæse en periodisk funktion fra grafen soeger du efter moenstret, der gentager sig. Afstanden mellem to identiske steder hedder periode $T$. Matematisk betyder periodicitet:',
      applications: 'Periodiske funktioner er det matematiske vaerktoej til alt, der svinger: lydboelger, vekselstroem, penduler, lysboelger og endda planetbaner. Hver gang en proces gentager sig regelmaessigt, gemmer sig en sinusfunktion (eller dens slaegtninge) bag.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitude',
        desc: 'Amplituden $A$ er det maksimale udslag fra middelvaerdien. Den maaler, hvor "staerk" svingningen er. Paa grafen aflaeser du den som halve differencen mellem hoejeste og laveste punkt.',
      },
      period: {
        title: 'Periode',
        desc: 'Perioden $T$ er laengden af en fuldstaendig svingningscyklus. Efter tiden $T$ gentager alt sig praecis. Jo stoerre $b$, desto kortere periode.',
      },
      frequency: {
        title: 'Frekvens',
        desc: 'Frekvensen $f$ angiver, hvor mange svingninger per tidsenhed der finder sted. Den er den omvendte af perioden. Enhed: Hertz (Hz) = svingninger per sekund.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Aflæse sinusfunktion fra grafen',
        context: 'Mia har en boelgeeffekt i spillet og vil finde den passende ligning.',
        step1: 'Aflaes hoejeste og laveste punkt: $y_{\\max} = 3$ og $y_{\\min} = -3$. Amplituden er halve differencen — boelgen svinger 3 enheder op og ned.',
        step2: 'Aflaes perioden: En fuldstaendig cyklus varer $4\\pi$ enheder. Deraf beregner vi $b$ med formlen $b = \\frac{2\\pi}{T}$ — det giver $0{,}5$.',
        step3: 'Saet ligningen sammen: Da midterlinjen er ved $y = 0$ ($d = 0$) og ingen faseforskydning ($c = 0$) er synlig, er funktionen simpelthen:',
        mia_comment: 'Amplitude 3, periode $4\\pi$ — dermed gynger havneboelgerne paent langsomt. Til hurtigere boelger oejer jeg bare $b$!',
      },
      ferris_wheel: {
        title: 'Modellere pariserhjul',
        context: 'Et pariserhjul med 60 m diameter drejer en gang hvert 10. minut. Den laveste gondol er 5 m over jorden.',
        step1: 'Bestem amplituden: Radius er halve hoejden, altsaa $A = 30\\,\\text{m}$. Midterlinjen ligger ved $d = 5 + 30 = 35\\,\\text{m}$ (jord + radius).',
        step2: 'Perioden er en fuld omdrejning: $T = 10\\,\\text{min}$. Deraf foelger $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Tag hensyn til startpunktet: Starte nederst betyder, at vi forskyder sinus med $-\\frac{\\pi}{2}$ (sinus starter normalt i midten, ikke nederst).',
        step4: 'Kontrol: Efter 2,5 minutter (kvart omdrejning) skal gondolen vaere paa middelhoejde. Indsaet: $\\sin(0) = 0$, altsaa $h = 35\\,\\text{m}$. Passer!',
        mia_comment: 'Praecis saadan fungerer ogsaa dag-nat-cyklussen i Havnelys: Sinus med $T = 24$ (en spildag) og forskydning, saa det er moerkest ved midnat.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Dit hjerteslag',
        desc: 'Dit hjerte slaar ca. 72 gange per minut — det er 1,2 slag per sekund. De elektriske signaler fra hjertet (EKG) viser en periodisk kurve. Laeger aflaeser amplitude og frekvens for at opdage hjerteproblemer.',
      },
      tides: {
        title: 'Ebbe og flod',
        desc: 'I Hamburgs havn svinger vandstanden mellem hoej- og lavvande hvert 12,4. time. Det er en naesten perfekt sinusfunktion — foraaraget af maanens tiltraekningskraft.',
      },
      temperature: {
        title: 'Aarstemperatur',
        desc: 'Gennemsnitstemperaturen over et aar foelger omtrent en sinuskurve: varmt om sommeren, koldt om vinteren, med en periode paa 365 dage. Klimaforskere bruger denne model som basis for prognoser.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Forveksle periode og frekvens',
        correct: 'Frekvens er den omvendte af perioden',
        why: 'Hvis perioden er $T = 2\\,\\text{s}$, svinger det hvert 2. sekund en gang. Frekvensen er da $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — ikke $2\\,\\text{Hz}$! Frekvens = "Hvor ofte per sekund?", Periode = "Hvor lang tid tager en cyklus?"',
        mia_warning: 'Denne fejl foerte til, at Lumis aandedraet var dobbelt saa hurtigt — hun saa ud som efter en sprint!',
      },
      b_value: {
        wrong: 'Saette $b$ lig perioden',
        correct: 'Omregne $b$ og $T$ med formlen',
        why: '$b$ er IKKE perioden, men haenger sammen via $T = \\frac{2\\pi}{b}$. Hvis perioden er $4\\pi$, saa er $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — ikke $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Havnelys koerer — men det hakker. Mia aabner ydeevnemonitoren og ser: I nogle scener falder billedraten til 15 FPS. "Hvor praecist bliver det langsomt?", spoerger Tim. "Jeg har ikke brug for gennemsnittet over hele scenen, men det praecise sted, hvor ydeevnen bryder sammen." Jule smiler: "Det er praecis det spoergsmaal, der foerte til opfindelsen af differentialregningen — den momentane aendringsrate."',
      challenge: 'Finde det praecise sted, hvor billedraten bryder sammen — ikke bare gennemsnittet.',
      outro: 'Mia har fundet det kritiske sted: Praecis ved billede 847 eksploderer renderingstiden, fordi 200 partikler spawnes samtidigt. "Uden den momentane aendringsrate havde jeg soegt evigt", siger hun. Tim nikker: "Newton ville have gjort det paa samme maade — bare uden ydeevnemonitor."',
    },
    objectives: {
      average_rate: 'Beregne og fortolke den gennemsnitlige aendringsrate (sekanthaeldning)',
      instantaneous_rate: 'Forstaa den momentane aendringsrate som en graensevaerdi',
      limit_concept: 'Foelge overgangen fra sekant til tangent',
      derivative_notation: 'Kende og anvende de forskellige skrivemaader for den afledede',
    },
    explanation: {
      intro: 'Forestil dig, at du cykler til skole. Speedometeret viser 20 km/t — det er din momentane hastighed. Men hvordan beregner man den? Naar du siger "Jeg cyklede 10 km paa 30 minutter", er det et gennemsnit. Den momentane hastighed i et bestemt punkt er noget andet — og praecis det handler differentialregningen om.',
      secant_to_tangent: 'Ideen er genialt simpel: Beregn gennemsnithaeldningen mellem to punkter, og ryk saa punkterne stadig taettere sammen. I graensevaerdien — naar afstanden gaar mod nul — faar du haeldningen i et enkelt punkt. Det er den afledede:',
      mia_tip: 'Den gennemsnitlige billedrate over 10 sekunder siger mig intet. Jeg har brug for den momentane rate ved billede 847! Praecis som speedometeret: Det viser ikke gennemsnittet af hele turen, men hvor hurtigt du er NU.',
      derivative_meaning: 'Den afledede $f\'(x_0)$ har en klar betydning: Den angiver haeldningen af tangenten til grafen i punktet $x_0$. Er $f\'(x_0) > 0$, stiger funktionen der. Er $f\'(x_0) < 0$, falder den. Er $f\'(x_0) = 0$, har funktionen der (muligvis) et maksimum eller minimum. Der findes forskellige skrivemaader:',
      geometric_interpretation: 'Geometrisk sker foelgende: Sekanten gennem to punkter paa grafen drejer, naar punkterne rykker sammen. I graensevaerdien bliver sekanten til en tangent — en ret linje, der "beroerer" grafen i praecis et punkt. Haeldningen af denne tangent er den afledede.',
    },
    concepts: {
      difference_quotient: {
        title: 'Differenskvotient',
        desc: 'Den gennemsnitlige aendringsrate mellem to punkter. Den beregner haeldningen af sekanten — en ret linje, der skaerer grafen i to punkter.',
      },
      differential_quotient: {
        title: 'Differentialkvotient (afledet)',
        desc: 'Den momentane aendringsrate paa et sted. Opstaaar, naar $h$ i differenskvotienten gaar mod nul. Giver tangenthaeldningen.',
      },
      derivative_notation: {
        title: 'Skrivemaader for den afledede',
        desc: 'Der er tre gangbare skrivemaader: $f\'(x)$ (Lagrange, hyppigst i skolen), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, fremhaever broekkarakteren) og $\\dot{y}$ (Newton, isaer i fysik for tidsafledede).',
      },
    },
    examples: {
      average_speed: {
        title: 'Gennemsnitlig hastighed',
        context: 'En bold ruller ned ad en rampe. Straekingen afhaenger kvadratisk af tiden.',
        step1: 'Givet er vej-tid-funktionen. Efter 2 sekunder har bolden tilbagelagt 2 m, efter 4 sekunder 8 m.',
        step2: 'Gennemsnitlig hastighed mellem $t = 2$ og $t = 4$: Vi dividerer straekningsaendringen med tidsaendringen. Det giver $3\\,\\text{m/s}$ i gennemsnit.',
        step3: 'Nu forkorter vi intervallet: Mellem $t = 2$ og $t = 2{,}1$ faar vi $2{,}05\\,\\text{m/s}$. Jo kortere interval, desto taettere kommer vi paa den momentane hastighed ved $t = 2$.',
        mia_comment: 'Praecis saadan fungerer min ydeevnemonitor: Den maaler billedraten i stadig kortere intervaller, til jeg finder det praecise sted, hvor det hakker.',
      },
      instantaneous_rate: {
        title: 'Beregne den momentane aendringsrate',
        context: 'Bestem den afledede af $f(x) = x^2$ i punktet $x_0 = 3$.',
        step1: 'Vi saetter $f(x) = x^2$ og $x_0 = 3$ ind i differenskvotienten. Soegt: Hvad sker der, naar $h$ gaar mod 0?',
        step2: 'Regn taelleren ud: $(3+h)^2 = 9 + 6h + h^2$. Minus $f(3) = 9$ giver $6h + h^2$ i taelleren.',
        step3: 'Divider med $h$ (det maa vi, fordi $h \\neq 0$ i graenseprocessen): Der er $6 + h$ tilbage.',
        step4: 'Dan graensevaerdi: For $h \\to 0$ bliver $6 + h$ til $6$. Haeldningen af tangenten ved $x = 3$ er altsaa praecis $6$.',
        mia_comment: 'Tangenten ved $x = 3$ har haeldning 6. Goer jeg det for hvert punkt, faar jeg den afledede funktion $f\'(x) = 2x$. Ved $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Passer!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Fotofaelder og hastighed',
        desc: 'En fotofaelde maaler ikke din momentane hastighed, men din gennemsnitshastighed over en kort straekining (stræekningskontrol: over flere kilometer). Jo kortere maalestraekking, desto taettere paa momentanvaerdien.',
      },
      stock_trends: {
        title: 'Aktiekurser og trends',
        desc: 'Naar en aktie "stiger", mener analytikere den positive afledede af kursen. Haeldningen af tangenten til kursforloebet viser trenden: positiv = optrend, negativ = nedtrend, nul = vendepunkt.',
      },
      speedometer: {
        title: 'Speedometer i bilen',
        desc: 'Dit speedometer viser den momentane hastighed — matematisk den afledede af vejfunktionen mht. tid. GPS-enheder beregner den som graensevaerdi af meget korte tidsintervaller.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Gennemsnit = momentanvaerdi',
        correct: 'Skelne mellem gennemsnit og momentanvaerdi',
        why: 'Den gennemsnitlige aendringsrate over et interval $[1;\\,5]$ er IKKE lig den momentane aendringsrate ved $x = 3$ (midten). Det gaelder kun for lineaere funktioner! For krummede grafer afviger begge vaerdier.',
        mia_warning: 'Jeg beregnede foerst den gennemsnitlige billedrate og troede, alt var ok. Men lokalt var der massive fald! Gennemsnittet skjulte problemet.',
      },
      secant_tangent: {
        wrong: 'Sekanthaeldning = tangenthaeldning',
        correct: 'Tangenten er graensevaerdien af sekanten',
        why: 'Sekanten skaerer grafen i to punkter, tangenten beroerer den i et. Foerst naar de to punkter naermer sig ($h \\to 0$), bliver sekanten til tangent. Uden graensevaerdi er det kun en tilnaermelse.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Havnelys har brug for et balanceringssystem: Hvor hurtigt skal Lumi levle? Hvor staerke bliver fjenderne? Hvad koster en opgradering? "Hvis alt vokser lineaert, bliver spillet kedeligt", siger Jule. Tim tilfojer: "Og hvis alt vokser eksponentielt, bliver det unfair." Mia indser: Hun maa kende forskellige vaeksttyper og bruge dem maalrettet.',
      challenge: 'Finde de rigtige vaekstkurver til spilbalancering — lineaer, kvadratisk, eksponentiel eller logaritmisk.',
      outro: 'Mias balanceringssystem er faerdigt: Loebehastighed vokser lineaert, faldskade kvadratisk, XP-behov eksponentielt og laeringskurven logaritmisk. "Hver kurve har sin plads", siger hun tilfreds. Spillet foeles nu fair og spaendende — fra Level 1 til endbossen.',
    },
    objectives: {
      identify_types: 'Genkende de fire store funktionsklasser (lineaer, kvadratisk, eksponentiel, logaritmisk) paa ligninger og grafer',
      compare_growth: 'Sammenligne og rangere vaekstadfaerden for funktionsklasserne',
      match_context: 'Vaelge den rigtige funktionsklasse til en given situation og begrunde',
      graph_recognition: 'Tildele grafer til de rigtige funktionstyper',
    },
    explanation: {
      intro: 'I matematikken findes der forskellige "familier" af funktioner — hver med sin egen karakter. Nogle vokser jaevnt, andre stadig hurtigere, atter andre stadig langsommere. De fire vigtigste klasser for 10. klasse er:',
      mia_tip: 'I spildesign bruger jeg hver funktionsklasse til noget andet: Lineaer vaekst til forudsigelige ting (loebehastighed), kvadratisk til ting der "opskruer sig" (faldskade), eksponentiel til udfordringer (XP-behov) og logaritmisk til laeringseffekter (faerdighedsudvikling).',
      growth_comparison: 'Afgoerende er: Hvor hurtigt vokser hver funktionsklasse for store $x$-vaerdier? Raekkefoelgen er altid den samme — uanset hvilke konkrete tal du saetter ind:',
      choosing_functions: 'At vaelge den rigtige funktion til et problem er en noelgekompetence. Spoerg dig selv: Er aendringen konstant (lineaer)? Accelererer den jaevnt (kvadratisk)? Fordobles vaerdien i faste intervaller (eksponentiel)? Bliver tilvaeksten stadig mindre (logaritmisk)?',
    },
    concepts: {
      linear: {
        title: 'Lineaere funktioner',
        desc: 'Konstant aendringsrate: Per trin kommer der altid lige meget til. Grafen er en ret linje. Haeldning $m$ og y-akseskaering $b$ kan aflases direkte.',
      },
      quadratic: {
        title: 'Kvadratiske funktioner',
        desc: 'Aendringsraten aendrer sig selv lineaert — der kommer stadig hurtigere mere til (eller mindre). Grafen er en parabel med toppunkt.',
      },
      exponential: {
        title: 'Eksponentielle funktioner',
        desc: 'Vaekst med en fast procentdel: Jo mere der er, desto mere kommer til. Fordobling i faste tidsintervaller. Vokser paa lang sigt hurtigere end enhver potensfunktion.',
      },
      logarithmic: {
        title: 'Logaritmiske funktioner',
        desc: 'Omvendt funktion af eksponentialfunktionen. Vokser hurtigt i begyndelsen, derefter stadig langsommere. Modellerer maetningseffekter og laeringskurver.',
      },
    },
    examples: {
      identify_type: {
        title: 'Genkende funktionstype fra vaerditabeller',
        context: 'Tre datasaet foreligger. Hvilken type passer til hvert?',
        step1: 'Test for lineaer: Dan differencerne mellem paafoelgende $y$-vaerdier. Er de konstante, er funktionen lineaer.',
        step2: 'Test for eksponentiel: Dan kvotienterne mellem paafoelgende $y$-vaerdier. Er de konstante, er funktionen eksponentiel.',
        step3: 'Test for kvadratisk: Dan de anden differencer (differencerne af differencerne). Er disse konstante, er funktionen kvadratisk.',
        mia_comment: 'Praecis saadan tester jeg min balancering: Jeg lader 100 runder simulere og tjekker, om vaerdierne foelger den oenskede vaeksttype. Naar de anden differencer driver af, stemmer noget ikke.',
      },
      game_mechanics: {
        title: 'Modellere spilmekanikker',
        context: 'Fire forskellige spilmekanikker i Havnelys kraever forskellige funktioner.',
        step1: 'Loebehastighed: Stiger per level med det samme beloeb ($+5$ per level). Det er en konstant aendring — altsaa lineaer. Fair og forudsigelig.',
        step2: 'Faldskade: Fra 2 m hoejde let skade, fra 10 m meget mere. Skadestigningen accelererer — kvadratisk. Giver fysisk mening (energi = $\\frac{1}{2}mv^2$).',
        step3: 'XP-behov per level: Level 2 kraever 150 XP, Level 3 kraever 225 XP, Level 4 kraever 337 XP. Behovet vokser altid med 50% — eksponentielt. Saadan forbliver hoejere levels en aefte udfordring.',
        step4: 'Laeringskurve (faerdighed): I begyndelsen laerer man hurtigt, senere stadig langsommere. Efter $t$ timers spilletid behersker man $20 \\cdot \\log_2(t+1)$ procent af mekanikkerne — logaritmisk.',
        mia_comment: 'Det er kernen i spildesign: Den rigtige kurve til den rigtige mekanik. Lineaer XP ville vaere kedeligt, eksponentiel faldskade ville vaere unfair. Hver funktionstype har sit sweet spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Virale app-downloads',
        desc: 'Naar hver bruger inviterer to venner, og de igen to, fordobles downloads. I begyndelsen naeppe synligt, derefter eksplosivt — typisk eksponentielt. TikTok, Instagram og WhatsApp voksede saadan.',
      },
      salary: {
        title: 'Lommepenge og loen',
        desc: 'Dine lommepenge stiger (forhaabenlig) hvert aar med det samme beloeb — lineaer vaekst. Senere i karrieren stiger loennen ofte tilsvarende: Et fast beloeb per aars erhvervserfaring.',
      },
      learning_curve: {
        title: 'Laeringsfremgang',
        desc: 'Nyt instrument, ny sport, nyt sprog: I begyndelsen goer du enorme fremskridt, derefter bliver det stadig svaerere at blive bedre. Det er en logaritmisk maetningskurve — og helt normalt!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Eksponentiel" og "kvadratisk" er det samme',
        correct: 'Eksponentiel vokser MEGET hurtigere end kvadratisk',
        why: 'For smaa tal ser $x^2$ og $2^x$ ens ud: $4^2 = 16$ og $2^4 = 16$. Men for $x = 10$: $10^2 = 100$ mod $2^{10} = 1024$. Eksponentiel vaekst overhaler enhver potensfunktion!',
        mia_warning: 'Jeg havde XP-behovet foerst kvadratisk i stedet for eksponentielt. Resultat: Fra Level 20 var spillet alt for nemt, fordi spillerne samlede XP hurtigere end behovet voksede.',
      },
      all_curves_linear: {
        wrong: 'Al vaekst er lineaer',
        correct: 'Foerst tjekke vaeksttypen',
        why: 'Bare fordi noget "fordobles", betyder det ikke, at det er lineaert! "Hvert 3. dag dobbelt saa mange foelgere" er eksponentielt, ikke lineaert. Lineaert ville vaere: "Hver dag 100 nye foelgere". Forskellen: konstant tilvaekst (lineaer) vs. konstant faktor (eksponentiel).',
      },
    },
  },
};
