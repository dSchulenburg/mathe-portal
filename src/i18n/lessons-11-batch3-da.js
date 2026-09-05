export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'Amir bygger et nyt anbefalingsfilter hos DataPulse. Formlen: "relevans pr. lytter divideret med antal lyttere". Det lyder rent — indtil Yara spørger: "Hvad sker der, hvis et nummer har nul lyttere?" Amir stirrer på koden: division med nul. Nedbrud. Poler, hævelige huller, asymptoter — hele familien af rationale funktioner dukker pludselig op i hans notesbog, og han bliver nødt til at forstå den til bunds.',
      challenge: 'Amir skal sikre sit filter, så det ikke bryder ned ved poler — og samtidig genkende, hvornår et tilsyneladende nedbrud i virkeligheden kun er et hæveligt hul, der kan forkortes væk.',
      outro: 'Med tre værktøjer er Amir igennem: tjekke definitionsmængden (hvor bliver nævneren nul?), skelne mellem pol og hæveligt hul (bliver tælleren også nul dér?) og bestemme asymptoter (opførsel ved store $|x|$). Hans filter kører nu rent — og professor Nguyen roser: "Det er ordentlig numerisk hygiejne."',
    },
    objectives: {
      definition: 'Genkende en rational funktion og bestemme dens definitionsmængde',
      poles: 'Finde poler — nulpunkter for nævneren, hvor tælleren ikke er nul',
      removable_gaps: 'Genkende hævelige huller, fjerne dem ved forkortning og angive den kontinuerte fortsættelse',
      asymptotes: 'Udlede lodrette og vandrette asymptoter af funktionsforskriften',
    },
    explanation: {
      intro: 'En rational funktion er en brøk af to polynomier — tælleren $p(x)$ divideret med nævneren $q(x)$. Det afgørende punkt: nævneren må aldrig blive nul, ellers er funktionen ikke defineret dér.',
      domain: 'Definitionsmængden $D_f$ består af alle reelle tal undtagen nævnerens nulpunkter. Faktorisér nævneren eller beregn nulpunkterne — det er hullerne i $D_f$.',
      amir_tip: 'Min første refleks ved enhver rational funktion: hvor bliver nævneren nul? De $x$-værdier skriver jeg øverst på arket. Først derefter tager jeg fat på resten. Springer man det over, overser man poler — og i koden bryder programmet så ned.',
      poles: 'Du har en pol, når nævneren bliver nul, men tælleren ikke gør. Dér skyder funktionsværdien mod uendelig (positiv eller negativ) — grafen har en lodret asymptote.',
      removable: 'Hvis tælleren også bliver nul samme sted, kan du forkorte den fælles faktor væk. Tilbage bliver et såkaldt "hæveligt hul": grafen har dér blot et hul, som du kunne udfylde med en fornuftig definition.',
      asymptotes: 'Opførslen ved store $|x|$ aflæser du på polynomiernes grader: er tællerens grad mindre end nævnerens, gælder $f(x) \\to 0$ — x-aksen er vandret asymptote. Er graderne ens, giver forholdet mellem de højeste koefficienter den vandrette asymptote.',
    },
    concepts: {
      definition: {
        title: 'Rational funktion',
        desc: 'Kvotient af to polynomier $p(x)$ og $q(x)$. Defineret overalt, hvor $q(x) \\neq 0$. Eksempler: $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Pol',
        desc: 'Punkt $x_0$ med $q(x_0) = 0$ og $p(x_0) \\neq 0$. Grafen skyder mod $\\pm\\infty$ — lodret asymptote ved $x = x_0$. Lige polorden ⇒ intet fortegnsskift, ulige ⇒ fortegnsskift.',
      },
      removable_gap: {
        title: 'Hæveligt hul',
        desc: 'Punkt $x_0$ med $p(x_0) = q(x_0) = 0$. Forkort den fælles faktor væk, og beregn derefter grænseværdien — det er den "kontinuerte fortsættelse". Grafen har dér kun et åbent hul.',
      },
      asymptote: {
        title: 'Vandret asymptote',
        desc: 'Grænseværdi for $x \\to \\pm\\infty$. Ved $\\deg p < \\deg q$ er den $y = 0$, ved $\\deg p = \\deg q$ er den forholdet mellem de ledende koefficienter. Ved $\\deg p > \\deg q$ er der i stedet en skrå eller krum asymptote.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Undersøg en simpel pol',
        context: 'Amir tjekker den simpleste rationale funktion i sit filter: $f(x) = \\frac{1}{x-2}$. Hvor er den ikke defineret, og hvordan opfører den sig?',
        step1: 'Skriv funktionsforskriften op — tæller $p(x) = 1$, nævner $q(x) = x - 2$:',
        step2: 'Find nævnerens nulpunkt: $q(x) = 0$ giver et kritisk sted:',
        step3: 'Evaluér tælleren dér: $p(2) = 1 \\neq 0$. Altså intet hæveligt hul, men en ægte pol:',
        step4: 'Opførsel i det uendelige: $\\frac{1}{x-2} \\to 0$ for $x \\to \\pm\\infty$. X-aksen er vandret asymptote:',
        amir_comment: 'Klassisk tilfælde: lodret asymptote ved $x = 2$, vandret asymptote ved $y = 0$. I koden skal jeg altså udtrykkeligt fange $x = 2$ — ellers NaN. Præcis det var Yaras spørgsmål.',
      },
      removable: {
        title: 'Find et hæveligt hul ved forkortning',
        context: 'Under en test støder Amir på $f(x) = \\frac{x^2 - 1}{x - 1}$. Ved $x = 1$ bliver nævneren nul — nedbrud? Eller måske ikke?',
        step1: 'Skriv funktionsforskriften op — tælleren er en kvadratsætning:',
        step2: 'Ved $x = 1$ er både tæller OG nævner nul. Det er indikatoren for et hæveligt hul:',
        step3: 'Faktorisér tælleren $(x^2 - 1) = (x-1)(x+1)$, og forkort derefter den fælles faktor $(x-1)$ væk:',
        step4: 'Grafen er altså linjen $y = x + 1$ — med et hul netop ved $x = 1$, fordi den oprindelige $f$ ikke er defineret dér:',
        amir_comment: 'Vigtigt: trods forkortningen må jeg ikke optage $x = 1$ i $D_f$. Den oprindelige funktion forbliver udefineret dér. I koden løser jeg det med en if-test og returnerer grænseværdien $f(1) := 2$ — en ren kontinuert fortsættelse.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Stykomkostninger i produktionen',
        desc: 'Faste omkostninger $F$ fordelt på $x$ producerede stykker plus variable omkostninger $v$ pr. stykke: $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. For $x \\to \\infty$ nærmer stykomkostningerne sig $v$ — en vandret asymptote i virkeligheden.',
      },
      light_intensity: {
        title: 'Lysstyrke og afstandskvadratet',
        desc: 'En lampe med effekten $P$ giver i afstanden $r$ lysstyrken $I(r) = \\frac{P}{4\\pi r^2}$. Ved $r \\to 0$ en pol (teoretisk uendelig lyst helt tæt på kilden), ved $r \\to \\infty$ går $I \\to 0$. Klassisk naturlov.',
      },
      dilution: {
        title: 'Koncentration ved fortynding',
        desc: 'En saft med koncentrationen $c_0$ og volumenet $V_0$ fortyndes med volumenet $V$ vand: $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Her er der ingen pol ($V_0 + V > 0$), men for $V \\to \\infty$ går koncentrationen mod nul — vandret asymptote $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'At forveksle pol og nulpunkt',
        correct: 'Nulpunkt: tælleren er nul. Pol: nævneren er nul, og tælleren er ikke nul',
        why: 'Ved $f(x) = \\frac{x-3}{x+2}$ ligger nulpunktet ved $x = 3$ (dér er $p(x) = 0$, altså $f = 0$) og polen ved $x = -2$ (dér er $q(x) = 0$). Bytter man om på rollerne, tegner man grafen helt forkert — hul og pol de forkerte steder.',
        amir_warning: 'Min huskeregel: nulpunktet er dér, hvor $f$ "giver nul". Polen er dér, hvor $f$ "eksploderer". Begge følger direkte af henholdsvis tæller og nævner — forveksl dem aldrig.',
      },
      dont_cancel: {
        wrong: 'At overse den fælles faktor og antage en pol',
        correct: 'Faktorisér først tæller og nævner, og forkort så de fælles faktorer væk',
        why: 'Ved $f(x) = \\frac{x^2-4}{x-2}$ ser $x = 2$ ud til at være en pol. Faktoriserer man tælleren, bliver det dog $\\frac{(x-2)(x+2)}{x-2} = x+2$ — altså kun et hæveligt hul. Den, der ikke faktoriserer, påstår, at der findes en pol, som slet ikke eksisterer.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'Amir træner hos DataPulse en simpel lineær model: tre features (tempo, lydstyrke, dansbarhed), som modellen bruger til at anslå en lyttervurdering. Ud fra tre kendte eksempler fremkommer tre ligninger med tre ubekendte — featurenes vægte. "I hånden går det aldrig", siger Finn. Amir smiler: "Jo, med Gauss." Lineære ligningssystemer, en klassiker der gemmer sig bag al ML-kode.',
      challenge: 'Amir skal ud fra tre træningseksempler bestemme de tre vægte $a$, $b$, $c$. Tre ligninger, tre ubekendte — Gauss.',
      outro: 'Med Gauss-metoden bringer Amir systematisk den udvidede koefficientmatrix på trappeform. Området nederst til venstre bliver til nuller trin for trin, og derefter aflæser han løsningerne baglæns. "Det er præcis det, numpy.linalg.solve gør i baggrunden", forklarer han Finn — "bare nu forstår jeg endelig hvorfor."',
    },
    objectives: {
      solve_2x2: 'Løse lineære ligningssystemer med to ubekendte ved substitution, lige store koefficienter eller addition',
      gauss_3x3: 'Bringe systemer med tre ubekendte systematisk på trappeform med Gauss-algoritmen',
      solution_types: 'Skelne mellem de tre løsningstyper — entydig, ingen, uendelig mange',
      matrix_form: 'Skrive et system på matrixform $A\\vec{x} = \\vec{b}$ og opstille den udvidede matrix korrekt',
    },
    explanation: {
      intro: 'Et lineært ligningssystem er en samling af flere ligninger med de samme ubekendte. En løsning til systemet er et sæt værdier, der opfylder ALLE ligninger samtidig. Allerede kendt fra 9. klasse — typisk to ligninger, to ubekendte:',
      methods: 'Til 2×2-systemer rækker de klassiske metoder: substitution, lige store koefficienter eller addition. Ved 3×3 eller større bliver det hurtigt uoverskueligt — derfor Gauss-algoritmen, der forløber mekanisk og altid ens.',
      amir_tip: 'Min arbejdsgang til 3×3: skriv den udvidede matrix op, og gå så MÅLRETTET til værks. Først gøre venstre søjle nul under pivoten, så midtersøjlen under den anden pivot. Trappeform. Løs baglæns. Det lyder mekanisk — det ér mekanisk, og netop dét er fordelen.',
      gauss: 'I Gauss-metoden skriver du systemet som udvidet matrix $(A | \\vec{b})$. Med tre rækkeoperationer — gange en række med et tal, lægge rækker sammen eller trække dem fra hinanden, bytte rækker — omformer du matricen til trappeform. Det ændrer ikke løsningsmængden.',
      solution_types: 'Ud fra trappeformen aflæser du løsningstypen direkte: ingen modstridende nulrække nederst ⇒ entydig løsning. En række $0 = c$ med $c \\neq 0$ ⇒ ingen løsning. En række $0 = 0$ ⇒ indfør en parameter, uendelig mange løsninger.',
    },
    concepts: {
      lgs: {
        title: 'Lineært ligningssystem',
        desc: 'En samling lineære ligninger med fælles ubekendte. På matrixform: $A \\vec{x} = \\vec{b}$, hvor $A$ er koefficientmatricen og $\\vec{b}$ vektoren af højresider.',
      },
      gauss: {
        title: 'Gauss-algoritmen',
        desc: 'Standardmetoden til løsning. Bring den udvidede matrix på trappeform, og løs derefter baglæns. Tre tilladte operationer, der ikke ændrer løsningsmængden: gange en række med en skalar, lægge et multiplum af en række til, bytte to rækker.',
      },
      solution_types: {
        title: 'Tre løsningstyper',
        desc: 'Entydig løsning (lige så mange pivoter som ubekendte), ingen løsning (modstridende række $0 = c$), uendelig mange løsninger (mindst én række $0=0$, med frie parametre).',
      },
      matrix: {
        title: 'Udvidet koefficientmatrix',
        desc: 'Skrivemåden $(A | \\vec{b})$. Til venstre koefficienterne for de ubekendte, til højre (adskilt af en streg) højresiden. Sparer den stadige gentagelse af variabelnavnene.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'Simpelt 2×2-system ved addition',
        context: 'Amir har to eksempelligninger fra sine træningsdata. Han søger $x$ (vægt for tempo) og $y$ (vægt for lydstyrke).',
        step1: 'Skriv ligningssystemet op:',
        step2: 'Læg de to ligninger sammen — $y$-leddene ophæver hinanden, og $x$ er straks løst:',
        step3: 'Indsæt $x = 3$ i en af udgangsligningerne, her den anden:',
        step4: 'Løsningsmængde — angiv den som par $(x, y)$:',
        amir_comment: 'Klassisk additionsmetode: med lidt held forsvinder variablerne med det samme. Ellers skal jeg først gange en ligning med et passende tal — f.eks. med 2, så koefficienterne passer sammen.',
      },
      gauss_3x3: {
        title: 'Løs et 3×3-system med Gauss',
        context: 'Amir har et lille træningssæt: tre lyttervurderinger og tre vægte $x, y, z$. Tre ligninger — Gauss-metoden i den udvidede matrix.',
        step1: 'Opstil den udvidede matrix — koefficienter til venstre, højresider til højre for stregen:',
        step2: 'Række 2 minus 2 gange række 1 — elementet $a_{21} = 2$ bliver nul:',
        step3: 'Række 3 minus række 1 — elementet $a_{31} = 1$ bliver nul. Venstre søjle er nu ren under pivoten 1:',
        step4: 'Fortsæt til trappeform, og løs så baglæns: $z$ fra sidste række, indsæt opad for $y$, derefter $x$. Løsning: $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$:',
        amir_comment: 'Gauss er bogholderi: notér hver rækkeoperation ordentligt. Den, der kun udfører en operation halvt — f.eks. kun omformer pivotsøjlen — får noget vrøvl ud af det. Disciplin slår geni her.',
      },
    },
    realworld: {
      mischung: {
        title: 'Blandingsopgaver',
        desc: 'En apoteker blander to opløsninger med koncentrationerne $a$ og $b$ til en blanding med den samlede masse $m$ og det samlede virkestof $w$. To ligninger, to ubekendte — et ligningssystem med det samme.',
      },
      preise: {
        title: 'Rekonstruér priser',
        desc: 'Tre kunder, tre kvitteringer med mængder og samlet pris — heraf skal stykpriserne regnes tilbage. Tre ligninger, tre ukendte stykpriser. Gauss klarer det på få trin.',
      },
      network: {
        title: 'Strømkredse (Kirchhoff)',
        desc: 'I et netværk af modstande giver hver knudeligning (strøm ind = strøm ud) og hver maskeligning (spændingssum = 0) en lineær betingelse. Ved $n$ ubekendte giver det et $n \\times n$-system — standardmetode i elektroteknik.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Ved en rækkeoperation kun at omforme pivotsøjlen',
        correct: 'Omform hver søjle i rækken (inklusive højresiden) — alle på én gang',
        why: 'En rækkeoperation gælder for HELE rækken. Den, der ved $Z_2 - 2Z_1$ kun omformer pivotelementet og glemmer de øvrige søjler, ødelægger ligningen. Følge: trappeformen ser rigtig ud, men løsningerne er forkerte — og fejlen er bagefter svær at finde.',
        amir_warning: 'Netop den fejl kostede mig et helt point til en øveprøve. Siden skriver jeg hele den nye række — alle elementer inklusive højresiden — pænt under den gamle. Så kan den sammenlignes med det blotte øje.',
      },
      no_solution: {
        wrong: 'At tolke en modstridende række $0 = c$ som $x = c$',
        correct: 'En række $0 = c$ med $c \\neq 0$ betyder: systemet har INGEN løsning',
        why: 'Hvis der til sidst kommer $0 = 5$ ud, er det en modsigelse — ingen værdi af $x, y, z$ kan opfylde den. Løsningsmængden er tom. Den, der læser det som $x = 5$, angiver en løsning, systemet ikke opfylder.',
      },
    },
  },
};
