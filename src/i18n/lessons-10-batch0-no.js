export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'Mia sitter på det lille kontoret sitt ved Hamburg havn og stirrer på skjermen. Lumi, spillfiguren hennes i "Havnelys", skal hoppe elegant over kasser og containere — men hoppkurven ser bare feil ut. "Fysikken stemmer ikke", mumler hun. For å programmere en realistisk hoppbane trenger Mia kvadratiske funksjoner.',
      challenge: 'Lumi skal hoppe over kasser — men hoppkurven ser unaturlig ut.',
      outro: 'Med toppunktformen har Mia programmert den perfekte hoppkurven! Lumi flyr nå i en elegant bue over containerne i Hamburg. "Endelig ser det realistisk ut", sier Tim og gir henne en high five.',
    },
    objectives: {
      recognize: 'Gjenkjenne kvadratiske funksjoner og beskrive egenskapene deres',
      vertex_form: 'Regne sikkert om mellom normalform og toppunktform',
      pq_formula: 'Beregne nullpunkter med abc-formelen',
      graph_properties: 'Lese av åpningsretning, toppunkt og symmetriakse fra likningen',
    },
    explanation: {
      intro: 'Tenk deg at du kaster en basketball. Ballen flyr i en bue oppover, når det høyeste punktet og faller ned igjen. Denne banen har en helt bestemt form — en parabel. Matematisk beskriver vi den med en kvadratisk funksjon:',
      opening: 'Tallet $a$ bestemmer om parabelen åpner seg oppover ($a > 0$) eller nedover ($a < 0$) — og hvor "smal" eller "bred" den er. Jo større $|a|$ er, desto smalere er parabelen.',
      mia_tip: 'I spillet mitt er $a$ negativ, fordi hoppkurven går oppover og så ned igjen — som en U opp ned!',
      vertex_form: 'Toppunktformen viser deg direkte det høyeste (eller laveste) punktet på parabelen. Toppunktet $S$ har koordinatene $(d \\mid e)$:',
      conversion: 'For å komme fra normalform til toppunktform bruker du fullstendig kvadrering. Du legger smart til et tall og trekker det fra igjen, slik at det oppstår et perfekt kvadrat.',
    },
    concepts: {
      normal_form: {
        title: 'Normalform',
        desc: 'Standardformen. Du ser direkte: $a$ = åpning, $c$ = skjæringspunkt med y-aksen (der parabelen krysser y-aksen).',
      },
      vertex_form: {
        title: 'Toppunktform',
        desc: 'Viser deg toppunktet $S(d \\mid e)$ med en gang. Best til å lese av høyeste/laveste punkt og se forskyvningen.',
      },
      pq_formula: {
        title: 'abc-formel',
        desc: 'Verktøyet ditt for nullpunkter. Forutsetning: Likningen må stå på formen $x^2 + px + q = 0$ (koeffisienten foran $x^2$ må være 1!).',
      },
      discriminant: {
        title: 'Diskriminant',
        desc: 'Uttrykket under rottegnet avgjør: $D > 0$ = to nullpunkter, $D = 0$ = ett nullpunkt, $D < 0$ = ingen reelle nullpunkter.',
      },
    },
    examples: {
      vertex: {
        title: 'Finne toppunktformen',
        context: 'Mia vil beregne det høyeste punktet i Lumis hopp.',
        step1: 'Funksjonen er gitt i normalform:',
        step2: 'Fullstendig kvadrering: Vi legger til $(\\frac{6}{2})^2 = 9$ og trekker det fra igjen:',
        step3: 'Slå sammen — uttrykket i parentesen er et perfekt kvadrat:',
        step4: 'Les av toppunktet: $d = 3$, $e = -4$, altså:',
        mia_comment: 'Toppunktet i $(3 \\mid -4)$ er det laveste punktet, fordi $a = 1 > 0$. For en hoppkurve trenger jeg $a < 0$, da blir det det høyeste punktet!',
      },
      pq: {
        title: 'Nullpunkter med abc-formelen',
        context: 'Hvor treffer Lumi bakken igjen?',
        step1: 'Gitt: Likningen står allerede på riktig form ($x^2$-koeffisient = 1):',
        step2: 'Les av verdiene for $p$ og $q$:',
        step3: 'Sett inn i abc-formelen og regn ut:',
        step4: 'Lumi lander altså ved $x = 2$ eller $x = -4$:',
        mia_comment: 'To nullpunkter — parabelen krysser x-aksen to ganger. I spillet betyr det: Lumi hopper av ved $x = -4$ og lander ved $x = 2$!',
      },
    },
    realworld: {
      basketball: {
        title: 'Basketballkast',
        desc: 'Hvert kast mot kurven følger en parabel. Høyden $h$ avhenger av tiden $t$. Trenere bruker dette til å beregne den beste utkastvinkelen.',
      },
      bridge: {
        title: 'Brobuer',
        desc: 'Mange broer har form som en parabel — det er den mest stabile bueformen, fordi den fordeler vekten jevnt. Golden Gate Bridge? En parabel.',
      },
      pricing: {
        title: 'Prisoptimering',
        desc: 'En butikk vil vite: Hvilken pris gir mest fortjeneste? Når prisen stiger, kjøper færre folk — fortjenesten er en parabel med et maksimum.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Fortegnsfeil',
        correct: 'Pass på fortegnet',
        why: 'I $f(x) = (x - d)^2 + e$ står det et minus foran $d$. Det betyr: $f(x) = (x - 3)^2$ har toppunktet ved $d = +3$, ikke ved $-3$!',
        mia_warning: 'Denne fortegnsfeilen kostet meg 3 timer med debugging. Lumis hoppkurve var forskjøvet mot venstre i stedet for mot høyre!',
      },
      pq_wrong: {
        wrong: 'abc-formel uten divisjon',
        correct: 'Del først på $a$',
        why: 'Abc-formelen fungerer bare når koeffisienten foran $x^2$ er lik 1. Ved $2x^2 + 4x - 6 = 0$ må du først dele på 2: $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'Mia har et problem med kollisjonsdeteksjonen: Når berører Lumi en hindring? Tim foreslår å beregne avstanden mellom to punkter. "Til det trenger du Pytagoras", sier han. Mia husker setningen fra skolen — og plutselig gir den full mening.',
      challenge: 'Kollisjonsdeteksjonen trenger avstandsberegning mellom objekter.',
      outro: 'Lumis kollisjonsdeteksjon fungerer nå helt ned på pikselen! Mia har brukt Pytagoras\' setning til å beregne avstanden mellom spillfiguren og hindringene i sanntid.',
    },
    objectives: {
      theorem: 'Bruke Pytagoras\' setning sikkert',
      calculate_sides: 'Beregne manglende sider i en rettvinklet trekant',
      recognize: 'Kjenne igjen når en trekant er rettvinklet',
      apply: 'Overføre setningen til problemer fra hverdagen',
    },
    explanation: {
      intro: 'I hver rettvinklet trekant gjelder en enkel, men kraftig regel: Summen av katetenes kvadrater er lik kvadratet av hypotenusen.',
      sides: 'Her er $c$ alltid den lengste siden — hypotenusen. Den ligger rett overfor den rette vinkelen. De to kortere sidene $a$ og $b$ kalles kateter.',
      mia_tip: 'I spillet mitt beregner jeg avstanden mellom Lumi og et objekt som hypotenusen. Den vannrette avstanden er $a$, den loddrette $b$ — og $c$ er den faktiske avstanden!',
      solving: 'Du kan løse formelen for hvilken som helst side. Hvis du leter etter hypotenusen:',
    },
    concepts: {
      theorem: {
        title: 'Pytagoras\' setning',
        desc: 'Gjelder bare i rettvinklede trekanter. $c$ er hypotenusen (overfor den rette vinkelen), $a$ og $b$ er katetene.',
      },
      hypotenuse: {
        title: 'Beregne hypotenusen',
        desc: 'Når du kjenner begge katetene, tar du kvadratroten av summen av kvadratene.',
      },
      cathetus: {
        title: 'Beregne en katet',
        desc: 'Når du kjenner hypotenusen og én katet, tar du kvadratroten av differansen.',
      },
    },
    examples: {
      screen: {
        title: 'Beregne skjermdiagonalen',
        context: 'Mia vil vite hvor stor skjermen på den nye monitoren hennes egentlig er.',
        step1: 'Monitoren er 16 tommer bred og 9 tommer høy:',
        step2: 'Bruk Pytagoras — bredde og høyde er katetene:',
        step3: 'Ta kvadratroten for å få diagonalen:',
        mia_comment: '18,36 tommer diagonal — det er verdien produsentene oppgir som "skjermstørrelse". Nå vet jeg hvorfor!',
      },
      ladder: {
        title: 'Stige mot veggen',
        context: 'Hvor høyt rekker en 5 meter lang stige som står 1,5 m fra veggen?',
        step1: 'Stigen er hypotenusen, avstanden til veggen er en katet:',
        step2: 'Løs for kateten vi leter etter (høyden):',
        step3: 'Stigen rekker nesten 4,77 m opp:',
        mia_comment: 'I spillet bruker jeg akkurat denne beregningen til å sjekke om Lumi kan nå en stige!',
      },
    },
    realworld: {
      screen: {
        title: 'Skjermdiagonal',
        desc: '"Størrelsen" på en skjerm er alltid diagonalen — beregnet med Pytagoras ut fra bredde og høyde.',
      },
      football: {
        title: 'Diagonalen på en fotballbane',
        desc: 'En fotballbane er 105 m × 68 m. Hvor langt er det fra hjørne til hjørne? Pytagoras gir deg svaret.',
      },
      wifi: {
        title: 'Wi-Fi-rekkevidde',
        desc: 'Ruteren din står i første etasje, du er i andre etasje. Den faktiske avstanden til ruteren er hypotenusen av den vannrette og den loddrette avstanden.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Hypotenusen som katet',
        correct: 'c er alltid den lengste siden',
        why: 'Hypotenusen $c$ ligger ALLTID overfor den rette vinkelen. Den er den lengste siden. Hvis du forveksler den med en katet, blir hele utregningen feil.',
      },
      root: {
        wrong: 'Kvadratrot av summen',
        correct: 'Først addere, så ta roten',
        why: '$\\sqrt{a^2 + b^2}$ er IKKE det samme som $a + b$! Eksempel: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, men $3 + 4 = 7$.',
        mia_warning: 'Denne feilen fant Tim i koden min — kollisjonsdeteksjonen var 40 % for upresis!',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'Mia vil bygge et loot-system for Havnelys. Spillerne skal kunne finne sjeldne gjenstander — men ikke for ofte, ellers blir det kjedelig, og ikke for sjelden, ellers blir det frustrerende. "Dette er ren sannsynlighetsregning", sier Jule. Mia setter seg ned og regner.',
      challenge: 'Loot-drop-systemet skal være rettferdig og spennende.',
      outro: 'Mias loot-system fungerer! Hun har justert drop-sannsynlighetene slik at spillerne i snitt finner en sjelden gjenstand i hver 20. kasse. "Matematikken bak er egentlig enkel", flirer hun — "men balanseringen tok likevel tid."',
    },
    objectives: {
      basic: 'Angi sannsynligheter som brøk, desimaltall og prosent',
      tree: 'Løse sammensatte forsøk med valgtre',
      expected_value: 'Beregne og tolke forventningsverdien',
      complement: 'Arbeide med komplementær sannsynlighet ("minst én gang...")',
    },
    explanation: {
      intro: 'Hvor sannsynlig er det å slå en 6 med terningen? Hvor stor er sjansen for en sjelden gjenstand i spillet? For å svare på slike spørsmål trenger du sannsynlighetsregning. Grunnideen er enkel:',
      range: 'Sannsynligheter ligger alltid mellom 0 (umulig) og 1 (sikkert). Du kan skrive dem som brøk ($\\frac{1}{6}$), desimaltall ($0{,}167$) eller prosent ($16{,}7\\%$).',
      mia_tip: 'I Havnelys er $P(\\text{sjelden gjenstand}) = 0{,}05$. Det betyr: Ved hvert drop har spilleren 5 % sjanse. Høres lite ut — men over mange drop blir det mye!',
      tree: 'Ved sammensatte forsøk (f.eks. å kaste terningen to ganger) bruker du et valgtre. Langs en sti multipliserer du sannsynlighetene:',
      complement: 'Ofte er det enklere å beregne "det motsatte". Sannsynligheten for at noe IKKE skjer, er:',
    },
    concepts: {
      laplace: {
        title: 'Laplace-forsøk',
        desc: 'Når alle utfall er like sannsynlige (som med en rettferdig terning), deler du rett og slett: gunstige utfall delt på alle mulige.',
      },
      complement: {
        title: 'Komplementær sannsynlighet',
        desc: 'Sannsynligheten for at A IKKE inntreffer. Supernyttig for oppgaver med "minst én gang"!',
      },
      expected: {
        title: 'Forventningsverdi',
        desc: 'Den "gjennomsnittlige" verdien ved mange gjentakelser. For en terning: $E(X) = 3{,}5$ — du kan aldri slå 3,5, men i snitt blir det denne verdien.',
      },
    },
    examples: {
      dice: {
        title: 'Slå et partall',
        context: 'Hvor sannsynlig er det å slå et partall med terningen?',
        step1: 'Terningen har 6 sider — det er vår $\\Omega$:',
        step2: 'Gunstige utfall (partall): 2, 4, 6 — det er 3:',
        step3: 'Beregn sannsynligheten:',
        mia_comment: '50 % — det er intuitivt klart. Men ved mer kompliserte spørsmål hjelper formelen når intuisjonen svikter!',
      },
      loot: {
        title: 'Minst én sjelden gjenstand',
        context: 'Mia vil vite: Hvor sannsynlig er det å få minst én sjelden gjenstand i 10 loot-drop?',
        step1: 'Sannsynligheten for en sjelden gjenstand per drop er 5 %:',
        step2: 'Bruk komplementær sannsynlighet: Beregn først at INGEN sjelden gjenstand kommer i 10 drop:',
        step3: 'Det er ca. 60 % — i 60 % av tilfellene får man INGEN sjelden gjenstand:',
        step4: 'Den komplementære sannsynligheten er svaret vi leter etter:',
        mia_comment: '40 % sjanse for minst én sjelden gjenstand i 10 drop — det føles rettferdig! Hvis spillerne blir frustrerte, øker jeg bare drop-raten.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Lootbokser i spill',
        desc: 'Spill som Fortnite eller Genshin Impact bruker sannsynligheter i drop-systemene sine. I EU må drop-ratene offentliggjøres — med matte kan du sjekke om et kjøp lønner seg.',
      },
      shuffle: {
        title: 'Spotify-shuffle',
        desc: 'Spotify Shuffle er ikke egentlig tilfeldig — fordi "ekte" tilfeldighet føles rar (noen ganger kommer samme sang 3 ganger på rad). Spotify bruker algoritmer som "føles" mer tilfeldige.',
      },
      lottery: {
        title: 'Vinnersjanser i Lotto',
        desc: '6 rette i Lotto — høres det mulig ut? Den faktiske sannsynligheten er forsvinnende liten:',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Addere stier i stedet for å multiplisere',
        correct: 'Multipliser langs en sti',
        why: 'I et valgtre multipliserer du langs en sti (OG-kobling). Du får bare addere når du slår sammen forskjellige stier (ELLER-kobling).',
        mia_warning: 'Denne feilen hadde jeg i loot-systemet. Drop-ratene var altfor høye fordi jeg adderte i stedet for å multiplisere — alle spillerne hadde alt med en gang!',
      },
      percent: {
        wrong: 'Prosent over 100 %',
        correct: 'Maksimum er 100 %',
        why: 'En sannsynlighet kan aldri være større enn 1 (= 100 %). Hvis resultatet ditt er $P > 1$, har du regnet feil.',
      },
    },
  },
};
