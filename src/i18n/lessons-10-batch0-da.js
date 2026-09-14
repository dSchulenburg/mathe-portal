export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'Mia sidder på sit lille kontor ved havnen i Hamborg og stirrer på skærmen. Lumi, hendes spilfigur i "Havnelys", skal hoppe elegant over kasser og containere — men springkurven ser bare forkert ud. "Fysikken stemmer ikke", mumler hun. For at programmere en realistisk springbane har Mia brug for kvadratiske funktioner.',
      challenge: 'Lumi skal hoppe over kasser — men springkurven ser unaturlig ud.',
      outro: 'Med toppunktsformen har Mia programmeret den perfekte springkurve! Lumi flyver nu i en elegant bue over containerne i Hamborg. "Endelig ser det realistisk ud", siger Tim og giver hende en high five.',
    },
    objectives: {
      recognize: 'Genkende kvadratiske funktioner og beskrive deres egenskaber',
      vertex_form: 'Omregne sikkert mellem normalform og toppunktsform',
      pq_formula: 'Beregne nulpunkter med abc-formlen',
      graph_properties: 'Aflæse åbningsretning, toppunkt og symmetriakse fra ligningen',
    },
    explanation: {
      intro: 'Forestil dig, at du kaster en basketball. Bolden flyver i en bue opad, når det højeste punkt og falder ned igen. Denne bane har en helt bestemt form — en parabel. I matematik beskriver vi den med en kvadratisk funktion:',
      opening: 'Tallet $a$ bestemmer, om parablen er åben opad ($a > 0$) eller nedad ($a < 0$) — og hvor "smal" eller "bred" den er. Jo større $|a|$, desto smallere er parablen.',
      mia_tip: 'I mit spil er $a$ negativ, fordi springkurven jo går opad og så ned igen — som et omvendt U!',
      vertex_form: 'Toppunktsformen fortæller dig direkte det højeste (eller laveste) punkt på parablen. Toppunktet $S$ har koordinaterne $(d \\mid e)$:',
      conversion: 'For at komme fra normalform til toppunktsform bruger du kvadratkomplettering. Du lægger smart et tal til og trækker det fra igen, så der opstår et perfekt kvadrat.',
    },
    concepts: {
      normal_form: {
        title: 'Normalform',
        desc: 'Den almindelige måde at skrive den på. Du ser med det samme: $a$ = åbning, $c$ = skæring med y-aksen (hvor parablen skærer y-aksen).',
      },
      vertex_form: {
        title: 'Toppunktsform',
        desc: 'Viser dig straks toppunktet $S(d \\mid e)$. Bedst til: at aflæse højeste/laveste punkt og se en forskydning.',
      },
      pq_formula: {
        title: 'abc-formel',
        desc: 'Dit værktøj til nulpunkter. Betingelse: Ligningen skal stå på formen $x^2 + px + q = 0$ (koefficienten foran $x^2$ skal være 1!).',
      },
      discriminant: {
        title: 'Diskriminant',
        desc: 'Udtrykket under kvadratroden afgør: $D > 0$ = to nulpunkter, $D = 0$ = ét nulpunkt, $D < 0$ = intet reelt nulpunkt.',
      },
    },
    examples: {
      vertex: {
        title: 'Bestemme toppunktsformen',
        context: 'Mia vil beregne det højeste punkt på Lumis spring.',
        step1: 'Funktionen er givet i normalform:',
        step2: 'Kvadratkomplettering: Vi lægger $(\\frac{6}{2})^2 = 9$ til og trækker det fra igen:',
        step3: 'Saml leddene — udtrykket i parentesen er et perfekt kvadrat:',
        step4: 'Aflæs toppunktet: $d = 3$, $e = -4$, altså:',
        mia_comment: 'Toppunktet ved $(3 \\mid -4)$ er det laveste punkt, fordi $a = 1 > 0$. Til en springkurve har jeg brug for $a < 0$, så bliver det det højeste punkt!',
      },
      pq: {
        title: 'Nulpunkter med abc-formlen',
        context: 'Hvor rammer Lumi jorden igen?',
        step1: 'Givet: Ligningen står allerede på den rigtige form ($x^2$-koefficient = 1):',
        step2: 'Aflæs værdierne for $p$ og $q$:',
        step3: 'Sæt ind i abc-formlen og regn ud:',
        step4: 'Lumi lander altså ved $x = 2$ eller $x = -4$:',
        mia_comment: 'To nulpunkter — parablen skærer x-aksen to gange. I spillet betyder det: Lumi letter ved $x = -4$ og lander ved $x = 2$!',
      },
    },
    realworld: {
      basketball: {
        title: 'Basketballkast',
        desc: 'Hvert kast mod kurven følger en parabel. Højden $h$ afhænger af tiden $t$. Trænere bruger det til at beregne den bedste kastevinkel.',
      },
      bridge: {
        title: 'Brobuer',
        desc: 'Mange broer har form som en parabel — det er den mest stabile bueform, fordi den fordeler vægten jævnt. Golden Gate Bridge? En parabel.',
      },
      pricing: {
        title: 'Prisoptimering',
        desc: 'En butik vil vide: Hvilken pris giver den største fortjeneste? Når prisen stiger, køber færre folk — fortjenesten er en parabel med et maksimum.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Fortegnsfejl',
        correct: 'Pas på fortegnene',
        why: 'I $f(x) = (x - d)^2 + e$ står der et minus foran $d$. Det betyder: $f(x) = (x - 3)^2$ har toppunktet ved $d = +3$, ikke ved $-3$!',
        mia_warning: 'Denne fortegnsfejl kostede mig 3 timers debugging. Lumis springkurve var forskudt til venstre i stedet for til højre!',
      },
      pq_wrong: {
        wrong: 'abc-formel uden division',
        correct: 'Først dividere med $a$',
        why: 'Abc-formlen virker kun, når koefficienten foran $x^2$ er lig med 1. Ved $2x^2 + 4x - 6 = 0$ skal du først dividere med 2: $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'Mia har et problem med kollisionsdetektionen: Hvornår rører Lumi en forhindring? Tim foreslår at beregne afstanden mellem to punkter. "Til det har du brug for Pythagoras", siger han. Mia kan huske sætningen fra skolen — og pludselig giver den helt mening.',
      challenge: 'Kollisionsdetektionen skal beregne afstanden mellem objekter.',
      outro: 'Lumis kollisionsdetektion virker nu helt ned på pixelniveau! Mia har brugt Pythagoras\' sætning til at beregne afstanden mellem spilfiguren og forhindringerne i realtid.',
    },
    objectives: {
      theorem: 'Anvende Pythagoras\' sætning sikkert',
      calculate_sides: 'Beregne manglende sider i en retvinklet trekant',
      recognize: 'Genkende, hvornår en trekant er retvinklet',
      apply: 'Overføre sætningen til problemer fra hverdagen',
    },
    explanation: {
      intro: 'I enhver retvinklet trekant gælder en enkel, men stærk regel: Summen af kateternes kvadrater er lig med hypotenusens kvadrat.',
      sides: 'Her er $c$ altid den længste side — hypotenusen. Den ligger over for den rette vinkel. De to kortere sider $a$ og $b$ kaldes kateter.',
      mia_tip: 'I mit spil beregner jeg afstanden mellem Lumi og et objekt som hypotenusen. Den vandrette afstand er $a$, den lodrette $b$ — og $c$ er den faktiske afstand!',
      solving: 'Du kan omskrive formlen efter hver side. Hvis du leder efter hypotenusen:',
    },
    concepts: {
      theorem: {
        title: 'Pythagoras\' sætning',
        desc: 'Gælder kun i retvinklede trekanter. $c$ er hypotenusen (over for den rette vinkel), $a$ og $b$ er kateterne.',
      },
      hypotenuse: {
        title: 'Beregne hypotenusen',
        desc: 'Hvis du kender begge kateter, tager du kvadratroden af summen af kvadraterne.',
      },
      cathetus: {
        title: 'Beregne en katete',
        desc: 'Hvis du kender hypotenusen og én katete, tager du kvadratroden af differensen.',
      },
    },
    examples: {
      screen: {
        title: 'Beregne skærmdiagonalen',
        context: 'Mia vil vide, hvor stor skærmen på hendes nye monitor egentlig er.',
        step1: 'Monitoren er 16 tommer bred og 9 tommer høj:',
        step2: 'Brug Pythagoras — bredde og højde er kateterne:',
        step3: 'Tag kvadratroden for at få diagonalen:',
        mia_comment: '18,36 tommers diagonal — det er den værdi, producenterne angiver som "skærmstørrelse". Nu ved jeg hvorfor!',
      },
      ladder: {
        title: 'Stige op ad en væg',
        context: 'Hvor højt når en stige på 5 meter, der står 1,5 m fra væggen?',
        step1: 'Stigen er hypotenusen, afstanden til væggen er en katete:',
        step2: 'Omskriv efter den søgte katete (højden):',
        step3: 'Stigen når næsten 4,77 m op:',
        mia_comment: 'I spillet bruger jeg præcis denne beregning til at tjekke, om Lumi kan nå en stige!',
      },
    },
    realworld: {
      screen: {
        title: 'Skærmdiagonal',
        desc: '"Størrelsen" på en skærm er altid diagonalen — beregnet med Pythagoras ud fra bredde og højde.',
      },
      football: {
        title: 'Diagonalen på en fodboldbane',
        desc: 'En fodboldbane er 105 m × 68 m. Hvor langt er der fra hjørne til hjørne? Pythagoras fortæller dig det.',
      },
      wifi: {
        title: 'Wi-fi-rækkevidde',
        desc: 'Din router står i stueetagen, og du er på 1. sal. Den faktiske afstand til routeren er hypotenusen ud fra den vandrette og den lodrette afstand.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Hypotenuse som katete',
        correct: 'c er altid den længste side',
        why: 'Hypotenusen $c$ ligger ALTID over for den rette vinkel. Den er den længste side. Hvis du forveksler den med en katete, passer hele udregningen ikke.',
      },
      root: {
        wrong: 'Kvadratrod af en sum',
        correct: 'Først lægge sammen, så kvadratrod',
        why: '$\\sqrt{a^2 + b^2}$ er IKKE det samme som $a + b$! Eksempel: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, men $3 + 4 = 7$.',
        mia_warning: 'Den fejl fandt Tim i min kode — kollisionsdetektionen var 40% for upræcis!',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'Mia vil bygge et loot-system til Havnelys. Spillerne skal kunne finde sjældne items — men ikke for tit, ellers bliver det kedeligt, og ikke for sjældent, ellers bliver det frustrerende. "Det er ren sandsynlighedsregning", siger Jule. Mia sætter sig ned og regner.',
      challenge: 'Loot-drop-systemet skal være fair og spændende.',
      outro: 'Mias loot-system virker! Hun har justeret drop-sandsynlighederne, så spillerne i gennemsnit finder et sjældent item for hver 20 kasser. "Matematikken bag er faktisk simpel", griner hun — "men balanceringen tog alligevel tid."',
    },
    objectives: {
      basic: 'Angive sandsynligheder som brøk, decimaltal og procent',
      tree: 'Løse flertrins-tilfældighedsforsøg med trædiagrammer',
      expected_value: 'Beregne og fortolke middelværdien',
      complement: 'Arbejde med den komplementære sandsynlighed ("mindst én gang...")',
    },
    explanation: {
      intro: 'Hvor sandsynligt er det at slå en 6\'er? Hvor stor er chancen for et sjældent item i spillet? For at besvare den slags spørgsmål har du brug for sandsynlighedsregning. Grundidéen er simpel:',
      range: 'Sandsynligheder ligger altid mellem 0 (umuligt) og 1 (sikkert). Du kan skrive dem som brøk ($\\frac{1}{6}$), decimaltal ($0{,}167$) eller procent ($16{,}7\\%$).',
      mia_tip: 'I Havnelys er $P(\\text{Rare Item}) = 0{,}05$. Det betyder: Ved hvert drop har spilleren 5% chance. Det lyder af lidt — men over mange drops løber det op!',
      tree: 'Ved forsøg med flere trin (f.eks. at slå med terningen to gange) bruger du et trædiagram. Langs en sti ganger du sandsynlighederne:',
      complement: 'Tit er det nemmere at beregne "det modsatte". Sandsynligheden for, at noget IKKE sker, er:',
    },
    concepts: {
      laplace: {
        title: 'Laplace-forsøg',
        desc: 'Hvis alle udfald er lige sandsynlige (som med en fair terning), dividerer du bare: gunstige udfald med alle mulige udfald.',
      },
      complement: {
        title: 'Komplementær sandsynlighed',
        desc: 'Sandsynligheden for, at A IKKE indtræffer. Super nyttig til opgaver med "mindst én gang"!',
      },
      expected: {
        title: 'Middelværdi',
        desc: 'Den "gennemsnitlige" værdi ved mange gentagelser. For en terning: $E(X) = 3{,}5$ — du kan aldrig slå 3,5, men i gennemsnit giver det denne værdi.',
      },
    },
    examples: {
      dice: {
        title: 'Slå et lige tal',
        context: 'Hvor sandsynligt er et lige tal, når du slår med en terning?',
        step1: 'Terningen har 6 sider — det er vores $\\Omega$:',
        step2: 'Gunstige udfald (lige tal): 2, 4, 6 — det er 3:',
        step3: 'Beregn sandsynligheden:',
        mia_comment: '50% — det er intuitivt klart. Men ved mere komplicerede spørgsmål hjælper formlen, når intuitionen svigter!',
      },
      loot: {
        title: 'Mindst ét sjældent item',
        context: 'Mia vil vide: Hvor sandsynligt er det at få mindst ét sjældent item i 10 loot-drops?',
        step1: 'Sandsynligheden for et sjældent item pr. drop er 5%:',
        step2: 'Brug den komplementære sandsynlighed: Beregn først, at der IKKE kommer noget sjældent item i 10 drops:',
        step3: 'Det er ca. 60% — i 60% af tilfældene får man INTET sjældent item:',
        step4: 'Den komplementære sandsynlighed er det svar, vi leder efter:',
        mia_comment: '40% chance for mindst ét sjældent item i 10 drops — det føles fair! Hvis spillerne bliver frustrerede, hæver jeg bare drop-raten.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Lootbokse i spil',
        desc: 'Spil som Fortnite eller Genshin Impact bruger sandsynligheder til deres drop-systemer. I EU skal drop-raterne offentliggøres — med matematik kan du tjekke, om et køb kan betale sig.',
      },
      shuffle: {
        title: 'Spotify-shuffle',
        desc: 'Spotify-shuffle er ikke rigtig tilfældig — fordi "ægte" tilfældighed føles mærkelig (nogle gange kommer den samme sang 3 gange i træk). Spotify bruger algoritmer, der "føles" mere tilfældige.',
      },
      lottery: {
        title: 'Vinderchancer i lotto',
        desc: '6 rigtige i lotto — lyder det muligt? Den faktiske sandsynlighed er forsvindende lille:',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Lægge stier sammen i stedet for at gange',
        correct: 'Gange langs en sti',
        why: 'I et trædiagram ganger du langs en sti (OG-forbindelse). Du må kun lægge sammen, når du samler forskellige stier (ELLER-forbindelse).',
        mia_warning: 'Den fejl havde jeg i loot-systemet. Drop-raterne var alt for høje, fordi jeg lagde sammen i stedet for at gange — hver spiller havde straks det hele!',
      },
      percent: {
        wrong: 'Procenter over 100%',
        correct: 'Maksimum er 100%',
        why: 'En sandsynlighed kan aldrig være større end 1 (= 100%). Hvis dit resultat er $P > 1$, har du lavet en regnefejl.',
      },
    },
  },
};
