export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'Amir bygger et nytt anbefalingsfilter hos DataPulse. Formelen: «relevans per lytter delt på antall lyttere». Det høres ryddig ut — helt til Yara spør: «Hva skjer hvis en låt har null lyttere?» Amir stirrer på koden: divisjon med null. Krasj. Poler, hevbare hull, asymptoter — hele familien av rasjonale funksjoner dukker plutselig opp i notatboka hans, og han må forstå den ordentlig.',
      challenge: 'Amir må sikre filteret sitt slik at det ikke krasjer ved poler — og samtidig kjenne igjen når en tilsynelatende krasj i virkeligheten bare er et hevbart hull som kan forkortes bort.',
      outro: 'Med tre verktøy kommer Amir i mål: sjekke definisjonsmengden (hvor blir nevneren null?), skille mellom pol og hevbart hull (blir telleren også null der?) og bestemme asymptoter (oppførsel ved store $|x|$). Filteret hans går nå rent — og professor Nguyen roser: «Det er ordentlig numerisk hygiene.»',
    },
    objectives: {
      definition: 'Kjenne igjen en rasjonal funksjon og bestemme definisjonsmengden',
      poles: 'Finne poler — nullpunkter for nevneren der telleren ikke er null',
      removable_gaps: 'Kjenne igjen hevbare hull, fjerne dem ved forkorting og angi den kontinuerlige utvidelsen',
      asymptotes: 'Utlede loddrette og vannrette asymptoter av funksjonsuttrykket',
    },
    explanation: {
      intro: 'En rasjonal funksjon er en brøk av to polynomer — telleren $p(x)$ delt på nevneren $q(x)$. Det avgjørende punktet: nevneren må aldri bli null, ellers er funksjonen ikke definert der.',
      domain: 'Definisjonsmengden $D_f$ består av alle reelle tall bortsett fra nullpunktene til nevneren. Faktoriser nevneren eller regn ut nullpunktene — det er hullene i $D_f$.',
      amir_tip: 'Min første refleks ved enhver rasjonal funksjon: hvor blir nevneren null? De $x$-verdiene skriver jeg øverst på arket. Først etterpå tar jeg fatt på resten. Hopper man over det, overser man poler — og i koden krasjer programmet da.',
      poles: 'Du har en pol når nevneren blir null, men telleren ikke gjør det. Der skyter funksjonsverdien mot uendelig (positiv eller negativ) — grafen har en loddrett asymptote.',
      removable: 'Blir telleren null på samme sted, kan du forkorte bort den felles faktoren. Igjen står et såkalt «hevbart hull»: grafen har bare et hull der, som du kunne fylle med en fornuftig definisjon.',
      asymptotes: 'Oppførselen ved store $|x|$ leser du av gradene til polynomene: er graden til telleren mindre enn graden til nevneren, gjelder $f(x) \\to 0$ — x-aksen er vannrett asymptote. Er gradene like, gir forholdet mellom de høyeste koeffisientene den vannrette asymptoten.',
    },
    concepts: {
      definition: {
        title: 'Rasjonal funksjon',
        desc: 'Kvotient av to polynomer $p(x)$ og $q(x)$. Definert overalt der $q(x) \\neq 0$. Eksempler: $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Pol',
        desc: 'Punkt $x_0$ med $q(x_0) = 0$ og $p(x_0) \\neq 0$. Grafen skyter mot $\\pm\\infty$ — loddrett asymptote ved $x = x_0$. Like polorden ⇒ ingen fortegnsskifte, ulike ⇒ fortegnsskifte.',
      },
      removable_gap: {
        title: 'Hevbart hull',
        desc: 'Punkt $x_0$ med $p(x_0) = q(x_0) = 0$. Forkort bort den felles faktoren, og regn så ut grenseverdien — det er den «kontinuerlige utvidelsen». Grafen har bare et åpent hull der.',
      },
      asymptote: {
        title: 'Vannrett asymptote',
        desc: 'Grenseverdi for $x \\to \\pm\\infty$. Ved $\\deg p < \\deg q$ er den $y = 0$, ved $\\deg p = \\deg q$ er den forholdet mellom de ledende koeffisientene. Ved $\\deg p > \\deg q$ finnes det i stedet en skrå eller krum asymptote.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Undersøk en enkel pol',
        context: 'Amir sjekker den enkleste rasjonale funksjonen i filteret sitt: $f(x) = \\frac{1}{x-2}$. Hvor er den ikke definert, og hvordan oppfører den seg?',
        step1: 'Skriv opp funksjonsuttrykket — teller $p(x) = 1$, nevner $q(x) = x - 2$:',
        step2: 'Finn nullpunktet til nevneren: $q(x) = 0$ gir et kritisk sted:',
        step3: 'Regn ut telleren der: $p(2) = 1 \\neq 0$. Altså ikke et hevbart hull, men en ekte pol:',
        step4: 'Oppførsel i det uendelige: $\\frac{1}{x-2} \\to 0$ for $x \\to \\pm\\infty$. X-aksen er vannrett asymptote:',
        amir_comment: 'Klassisk tilfelle: loddrett asymptote ved $x = 2$, vannrett asymptote ved $y = 0$. I koden må jeg altså fange opp $x = 2$ eksplisitt — ellers NaN. Nettopp det var spørsmålet til Yara.',
      },
      removable: {
        title: 'Finn et hevbart hull ved forkorting',
        context: 'Under en test støter Amir på $f(x) = \\frac{x^2 - 1}{x - 1}$. Ved $x = 1$ blir nevneren null — krasj? Eller kanskje ikke?',
        step1: 'Skriv opp funksjonsuttrykket — telleren er en konjugatsetning:',
        step2: 'Ved $x = 1$ er både teller OG nevner null. Det er indikatoren på et hevbart hull:',
        step3: 'Faktoriser telleren $(x^2 - 1) = (x-1)(x+1)$, og forkort så bort den felles faktoren $(x-1)$:',
        step4: 'Grafen er altså linja $y = x + 1$ — med et hull nøyaktig ved $x = 1$, fordi den opprinnelige $f$ ikke er definert der:',
        amir_comment: 'Viktig: til tross for forkortingen kan jeg ikke ta $x = 1$ inn i $D_f$. Den opprinnelige funksjonen forblir udefinert der. I koden løser jeg det med en if-test og returnerer grenseverdien $f(1) := 2$ — en ryddig kontinuerlig utvidelse.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Enhetskostnader i produksjonen',
        desc: 'Faste kostnader $F$ fordelt på $x$ produserte enheter pluss variable kostnader $v$ per enhet: $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. For $x \\to \\infty$ nærmer enhetskostnadene seg $v$ — en vannrett asymptote i praksis.',
      },
      light_intensity: {
        title: 'Lysstyrke og avstandskvadratet',
        desc: 'En lampe med effekten $P$ gir i avstanden $r$ lysstyrken $I(r) = \\frac{P}{4\\pi r^2}$. Ved $r \\to 0$ en pol (teoretisk uendelig lyst helt inntil kilden), ved $r \\to \\infty$ går $I \\to 0$. Klassisk naturlov.',
      },
      dilution: {
        title: 'Konsentrasjon ved fortynning',
        desc: 'En saft med konsentrasjonen $c_0$ og volumet $V_0$ fortynnes med volumet $V$ vann: $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Her finnes ingen pol ($V_0 + V > 0$), men for $V \\to \\infty$ går konsentrasjonen mot null — vannrett asymptote $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'Å blande sammen pol og nullpunkt',
        correct: 'Nullpunkt: telleren er null. Pol: nevneren er null og telleren ikke null',
        why: 'Ved $f(x) = \\frac{x-3}{x+2}$ ligger nullpunktet ved $x = 3$ (der er $p(x) = 0$, altså $f = 0$) og polen ved $x = -2$ (der er $q(x) = 0$). Bytter man om på rollene, tegner man grafen helt feil — hull og pol på gale steder.',
        amir_warning: 'Huskeregelen min: nullpunktet er der $f$ «gir null». Polen er der $f$ «eksploderer». Begge følger direkte av henholdsvis teller og nevner — bland dem aldri.',
      },
      dont_cancel: {
        wrong: 'Å overse den felles faktoren og anta en pol',
        correct: 'Faktoriser først teller og nevner, forkort så bort de felles faktorene',
        why: 'Ved $f(x) = \\frac{x^2-4}{x-2}$ ser $x = 2$ ut til å være en pol. Faktoriserer man derimot telleren, blir det $\\frac{(x-2)(x+2)}{x-2} = x+2$ — altså bare et hevbart hull. Den som ikke faktoriserer, hevder at det finnes en pol som ikke eksisterer i det hele tatt.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'Amir trener hos DataPulse en enkel lineær modell: tre egenskaper (tempo, lydstyrke, dansbarhet), som modellen bruker til å anslå en lyttervurdering. Ut fra tre kjente eksempler kommer tre likninger med tre ukjente — vektene til egenskapene. «For hånd går det aldri», sier Finn. Amir gliser: «Jo da, med Gauss.» Lineære likningssystemer, en klassiker som gjemmer seg bak all ML-kode.',
      challenge: 'Amir må ut fra tre treningseksempler bestemme de tre vektene $a$, $b$, $c$. Tre likninger, tre ukjente — Gauss.',
      outro: 'Med Gauss-metoden bringer Amir systematisk den utvidede koeffisientmatrisen på trappeform. Området nede til venstre blir til nuller steg for steg, og deretter leser han løsningene baklengs. «Det er nøyaktig det numpy.linalg.solve gjør i bakgrunnen», forklarer han Finn — «bare nå forstår jeg endelig hvorfor.»',
    },
    objectives: {
      solve_2x2: 'Løse lineære likningssystemer med to ukjente ved innsetting, likhetsmetoden eller addisjon',
      gauss_3x3: 'Bringe systemer med tre ukjente systematisk på trappeform med Gauss-algoritmen',
      solution_types: 'Skille mellom de tre løsningstypene — entydig, ingen, uendelig mange',
      matrix_form: 'Skrive et system på matriseform $A\\vec{x} = \\vec{b}$ og sette opp den utvidede matrisen riktig',
    },
    explanation: {
      intro: 'Et lineært likningssystem er en samling av flere likninger med de samme ukjente. En løsning på systemet er et sett verdier som oppfyller ALLE likningene samtidig. Allerede kjent fra 10. trinn — typisk to likninger, to ukjente:',
      methods: 'Til 2×2-systemer holder de klassiske metodene: innsetting, likhetsmetoden eller addisjon. Ved 3×3 eller større blir det fort uoversiktlig — derfor Gauss-algoritmen, som går mekanisk og alltid likt.',
      amir_tip: 'Arbeidsgangen min for 3×3: skriv opp den utvidede matrisen, og gå så MÅLRETTET til verks. Først gjøre venstre kolonne null under pivoten, så midtkolonnen under den andre pivoten. Trappeform. Løs baklengs. Det høres mekanisk ut — det ér mekanisk, og nettopp det er fordelen.',
      gauss: 'I Gauss-metoden skriver du systemet som utvidet matrise $(A | \\vec{b})$. Med tre radoperasjoner — gange en rad med et tall, legge sammen eller trekke fra rader, bytte rader — former du matrisen om til trappeform. Det endrer ikke løsningsmengden.',
      solution_types: 'Ut fra trappeformen leser du løsningstypen direkte: ingen motstridende nullrad nederst ⇒ entydig løsning. En rad $0 = c$ med $c \\neq 0$ ⇒ ingen løsning. En rad $0 = 0$ ⇒ innfør en parameter, uendelig mange løsninger.',
    },
    concepts: {
      lgs: {
        title: 'Lineært likningssystem',
        desc: 'En samling lineære likninger med felles ukjente. På matriseform: $A \\vec{x} = \\vec{b}$, der $A$ er koeffisientmatrisen og $\\vec{b}$ vektoren av høyresider.',
      },
      gauss: {
        title: 'Gauss-algoritmen',
        desc: 'Standardmetoden for løsning. Bring den utvidede matrisen på trappeform, og løs deretter baklengs. Tre tillatte operasjoner som ikke endrer løsningsmengden: gange en rad med en skalar, legge til et multiplum av en rad, bytte to rader.',
      },
      solution_types: {
        title: 'Tre løsningstyper',
        desc: 'Entydig løsning (like mange pivoter som ukjente), ingen løsning (motstridende rad $0 = c$), uendelig mange løsninger (minst én rad $0=0$, med frie parametre).',
      },
      matrix: {
        title: 'Utvidet koeffisientmatrise',
        desc: 'Skrivemåten $(A | \\vec{b})$. Til venstre koeffisientene til de ukjente, til høyre (skilt med en strek) høyresiden. Sparer deg for stadig å skrive variabelnavnene på nytt.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'Enkelt 2×2-system ved addisjon',
        context: 'Amir har to eksempellikninger fra treningsdataene sine. Han søker $x$ (vekt for tempo) og $y$ (vekt for lydstyrke).',
        step1: 'Skriv opp likningssystemet:',
        step2: 'Legg sammen begge likningene — $y$-leddene opphever hverandre, og $x$ er straks løst:',
        step3: 'Sett inn $x = 3$ i en av utgangslikningene, her den andre:',
        step4: 'Løsningsmengde — oppgi den som paret $(x, y)$:',
        amir_comment: 'Klassisk addisjonsmetode: med litt flaks forsvinner variablene med det samme. Hvis ikke, må jeg først gange en likning med et passende tall — for eksempel med 2, slik at koeffisientene passer sammen.',
      },
      gauss_3x3: {
        title: 'Løs et 3×3-system med Gauss',
        context: 'Amir har et lite treningssett: tre lyttervurderinger og tre vekter $x, y, z$. Tre likninger — Gauss-metoden i den utvidede matrisen.',
        step1: 'Sett opp den utvidede matrisen — koeffisienter til venstre, høyresider til høyre for streken:',
        step2: 'Rad 2 minus 2 ganger rad 1 — elementet $a_{21} = 2$ blir null:',
        step3: 'Rad 3 minus rad 1 — elementet $a_{31} = 1$ blir null. Venstre kolonne er nå ren under pivoten 1:',
        step4: 'Fortsett til trappeform, og løs så baklengs: $z$ fra siste rad, sett inn oppover for $y$, deretter $x$. Løsning: $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$:',
        amir_comment: 'Gauss er bokføring: noter hver radoperasjon ordentlig. Den som utfører en operasjon halvveis — for eksempel bare former om pivotkolonnen — får bare tull. Disiplin slår geni her.',
      },
    },
    realworld: {
      mischung: {
        title: 'Blandingsoppgaver',
        desc: 'En apoteker blander to løsninger med konsentrasjonene $a$ og $b$ til en blanding med samlet masse $m$ og samlet virkestoff $w$. To likninger, to ukjente — et likningssystem med en gang.',
      },
      preise: {
        title: 'Rekonstruere priser',
        desc: 'Tre kunder, tre kvitteringer med mengder og totalpris — ut fra dette skal enhetsprisene regnes tilbake. Tre likninger, tre ukjente enhetspriser. Gauss løser det på få steg.',
      },
      network: {
        title: 'Strømkretser (Kirchhoff)',
        desc: 'I et nettverk av motstander gir hver knutepunktlikning (strøm inn = strøm ut) og hver masketlikning (spenningssum = 0) en lineær betingelse. Ved $n$ ukjente gir det et $n \\times n$-system — standardmetode i elektroteknikk.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Ved en radoperasjon bare å forme om pivotkolonnen',
        correct: 'Form om hver kolonne i raden (inkludert høyresiden) — alle samtidig',
        why: 'En radoperasjon gjelder for HELE raden. Den som ved $Z_2 - 2Z_1$ bare former om pivotelementet og glemmer de andre kolonnene, ødelegger likningen. Følge: trappeformen ser riktig ut, men løsningene er feil — og feilen er vanskelig å finne i ettertid.',
        amir_warning: 'Nettopp den feilen kostet meg et helt poeng på en øvingsprøve. Siden da skriver jeg hele den nye raden — alle elementer inkludert høyresiden — ryddig under den gamle. Da kan den sammenlignes med et blikk.',
      },
      no_solution: {
        wrong: 'Å tolke en motstridende rad $0 = c$ som $x = c$',
        correct: 'En rad $0 = c$ med $c \\neq 0$ betyr: systemet har INGEN løsning',
        why: 'Kommer det til slutt ut $0 = 5$, er det en motsigelse — ingen verdi av $x, y, z$ kan oppfylle den. Løsningsmengden er tom. Den som leser det som $x = 5$, oppgir en løsning systemet ikke oppfyller.',
      },
    },
  },
};
