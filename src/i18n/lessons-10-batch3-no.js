export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia scroller gjennom animasjonslisten til Havnelys og rynker pannen. Lumis pusteanimasjon ser ut som en robot — hakkete og unaturlig. Også bølgene i havnen virker stive, og dag-natt-syklusen hopper i stedet for å flyte. "Alt som gjentar seg, trenger en svingning", sier Tim. "Sinus og cosinus — de er laget for det." Mia åpner kalkulatoren og dykker inn i verden av periodiske funksjoner.',
      challenge: 'Pusteanimasjon, bølgegang og dag-natt-syklus skal svinge naturlig i stedet for å rykke.',
      outro: 'Lumis pust hever og senker seg nå mykt, havnebølgene ruller jevnt inn mot land, og lyset skifter glidende fra morgenrøde til midnattsblått. "Sinusfunksjoner finnes overalt i naturen", sier Jule. Mia nikker: "Og nå er de også i Havnelys."',
    },
    objectives: {
      periodic_functions: 'Gjenkjenne periodiske funksjoner og skille dem fra ikke-periodiske',
      amplitude_period: 'Lese av amplitude og periode fra grafer og likninger',
      frequency: 'Beregne frekvensen og forklare dens betydning',
      modeling: 'Modellere reelle prosesser med sinusfunksjoner',
    },
    explanation: {
      intro: 'Noen prosesser gjentar seg stadig: hjerteslaget ditt, tidevannet, årstidene. I matematikken beskriver vi slike svingninger med periodiske funksjoner. Den viktigste av dem er sinusfunksjonen:',
      parameters: 'Den generelle sinusfunksjonen har fire parametere som du kan forstå som regulatorer på et miksebord: $A$ styrer høyden på svingningen (amplitude), $b$ påvirker hvor raskt svingningen gjentar seg (periode), $c$ forskyver kurven til venstre eller høyre, og $d$ forskyver den opp eller ned.',
      mia_tip: 'For Lumis pusteanimasjon bruker jeg $A = 3$ piksler og $T = 4$ sekunder. Det betyr: Hvert 4. sekund puster Lumi inn og ut én gang, og brystet beveger seg 3 piksler opp og ned. Helt naturlig!',
      graph_reading: 'For å lese av en periodisk funksjon fra grafen, søker du etter mønsteret som gjentar seg. Avstanden mellom to identiske steder kalles periode $T$. Matematisk betyr periodisitet:',
      applications: 'Periodiske funksjoner er det matematiske verktøyet for alt som svinger: lydbølger, vekselstrøm, pendler, lysbølger og til og med planetbaner. Hver gang en prosess gjentar seg regelmessig, stikker en sinusfunksjon (eller dens slektninger) bak.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitude',
        desc: 'Amplituden $A$ er det maksimale utslaget fra middelverdien. Den måler hvor "sterk" svingningen er. På grafen leser du den av som halve differansen mellom høyeste og laveste punkt.',
      },
      period: {
        title: 'Periode',
        desc: 'Perioden $T$ er lengden av en fullstendig svingningssyklus. Etter tiden $T$ gjentar alt seg nøyaktig. Jo større $b$, desto kortere periode.',
      },
      frequency: {
        title: 'Frekvens',
        desc: 'Frekvensen $f$ angir hvor mange svingninger per tidsenhet som finner sted. Den er den omvendte av perioden. Enhet: Hertz (Hz) = svingninger per sekund.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Lese av sinusfunksjon fra grafen',
        context: 'Mia har en bølgeeffekt i spillet og vil finne den passende likningen.',
        step1: 'Les av høyeste og laveste punkt: $y_{\\max} = 3$ og $y_{\\min} = -3$. Amplituden er halve differansen — bølgen svinger 3 enheter opp og ned.',
        step2: 'Les av perioden: En fullstendig syklus varer $4\\pi$ enheter. Derfra beregner vi $b$ med formelen $b = \\frac{2\\pi}{T}$ — det gir $0{,}5$.',
        step3: 'Sett sammen likningen: Siden midtlinjen er ved $y = 0$ ($d = 0$) og ingen faseforskyvning ($c = 0$) er synlig, er funksjonen rett og slett:',
        mia_comment: 'Amplitude 3, periode $4\\pi$ — med det gynger havnebølgene pent sakte. For raskere bølger øker jeg bare $b$!',
      },
      ferris_wheel: {
        title: 'Modellere pariserhjul',
        context: 'Et pariserhjul med 60 m diameter roterer én gang hvert 10. minutt. Den laveste gondolen er 5 m over bakken.',
        step1: 'Bestem amplituden: Radiusen er halve høyden, altså $A = 30\\,\\text{m}$. Midtlinjen ligger ved $d = 5 + 30 = 35\\,\\text{m}$ (bakke + radius).',
        step2: 'Perioden er en full omdreining: $T = 10\\,\\text{min}$. Derfra følger $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Ta hensyn til startpunktet: Starte nederst betyr at vi forskyver sinus med $-\\frac{\\pi}{2}$ (sinus starter normalt i midten, ikke nederst).',
        step4: 'Kontroll: Etter 2,5 minutter (kvart omdreining) skal gondolen være på middelhøyde. Sett inn: $\\sin(0) = 0$, altså $h = 35\\,\\text{m}$. Stemmer!',
        mia_comment: 'Nøyaktig slik fungerer også dag-natt-syklusen i Havnelys: Sinus med $T = 24$ (en spilldag) og forskyvning slik at det er mørkest ved midnatt.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Hjerteslaget ditt',
        desc: 'Hjertet ditt slår ca. 72 ganger per minutt — det er 1,2 slag per sekund. De elektriske signalene fra hjertet (EKG) viser en periodisk kurve. Leger leser av amplitude og frekvens for å oppdage hjerteproblemer.',
      },
      tides: {
        title: 'Flo og fjære',
        desc: 'I Hamburg havn svinger vannstanden mellom høy- og lavvann hver 12,4. time. Det er en nesten perfekt sinusfunksjon — forårsaket av månens tiltrekningskraft.',
      },
      temperature: {
        title: 'Årstemperatur',
        desc: 'Gjennomsnittstemperaturen gjennom et år følger omtrent en sinuskurve: varmt om sommeren, kaldt om vinteren, med en periode på 365 dager. Klimaforskere bruker denne modellen som grunnlag for prognoser.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Forveksle periode og frekvens',
        correct: 'Frekvens er den omvendte av perioden',
        why: 'Hvis perioden er $T = 2\\,\\text{s}$, svinger det hvert 2. sekund én gang. Frekvensen er da $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — ikke $2\\,\\text{Hz}$! Frekvens = "Hvor ofte per sekund?", Periode = "Hvor lang tid tar en syklus?"',
        mia_warning: 'Denne feilen førte til at Lumis pust var dobbelt så raskt — hun så ut som etter en sprint!',
      },
      b_value: {
        wrong: 'Sette $b$ lik perioden',
        correct: 'Omregne $b$ og $T$ med formelen',
        why: '$b$ er IKKE perioden, men henger sammen via $T = \\frac{2\\pi}{b}$. Hvis perioden er $4\\pi$, da er $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — ikke $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Havnelys kjører — men det hakker. Mia åpner ytelsesmonitoren og ser: I noen scener faller bildefrekvensen til 15 FPS. "Hvor nøyaktig blir det tregt?", spør Tim. "Jeg trenger ikke gjennomsnittet over hele scenen, men det nøyaktige stedet der ytelsen bryter sammen." Jule smiler: "Det er nøyaktig spørsmålet som førte til oppfinnelsen av differensialregningen — den momentane endringsraten."',
      challenge: 'Finne det nøyaktige stedet der bildefrekvensen bryter sammen — ikke bare gjennomsnittet.',
      outro: 'Mia har funnet det kritiske stedet: Nøyaktig ved bilde 847 eksploderer renderingstiden fordi 200 partikler spawnes samtidig. "Uten den momentane endringsraten hadde jeg lett evig", sier hun. Tim nikker: "Newton ville ha gjort det på samme måte — bare uten ytelsesmonitor."',
    },
    objectives: {
      average_rate: 'Beregne og tolke den gjennomsnittlige endringsraten (sekantstigningen)',
      instantaneous_rate: 'Forstå den momentane endringsraten som en grenseverdi',
      limit_concept: 'Følge overgangen fra sekant til tangent',
      derivative_notation: 'Kjenne til og anvende de ulike skrivemåtene for den deriverte',
    },
    explanation: {
      intro: 'Forestill deg at du sykler til skolen. Hastighetsmåleren viser 20 km/t — det er din momentane hastighet. Men hvordan beregner man den? Når du sier "Jeg syklet 10 km på 30 minutter", er det et gjennomsnitt. Den momentane hastigheten i et bestemt punkt er noe annet — og det er nøyaktig det differensialregningen handler om.',
      secant_to_tangent: 'Ideen er genialt enkel: Beregn gjennomsnittsstigningen mellom to punkter, og flytt så punktene stadig nærmere hverandre. I grenseverdien — når avstanden går mot null — får du stigningen i et enkelt punkt. Det er den deriverte:',
      mia_tip: 'Den gjennomsnittlige bildefrekvensen over 10 sekunder sier meg ingenting. Jeg trenger den momentane raten ved bilde 847! Akkurat som hastighetsmåleren: Den viser ikke gjennomsnittet av hele turen, men hvor raskt du er NÅ.',
      derivative_meaning: 'Den deriverte $f\'(x_0)$ har en klar betydning: Den angir stigningen til tangenten til grafen i punktet $x_0$. Er $f\'(x_0) > 0$, stiger funksjonen der. Er $f\'(x_0) < 0$, synker den. Er $f\'(x_0) = 0$, har funksjonen der (muligens) et topp- eller bunnpunkt. Det finnes ulike skrivemåter:',
      geometric_interpretation: 'Geometrisk skjer følgende: Sekanten gjennom to punkter på grafen dreier seg når punktene nærmer seg. I grenseverdien blir sekanten til en tangent — en rett linje som "berører" grafen i nøyaktig ett punkt. Stigningen til denne tangenten er den deriverte.',
    },
    concepts: {
      difference_quotient: {
        title: 'Differenskvotient',
        desc: 'Den gjennomsnittlige endringsraten mellom to punkter. Den beregner stigningen til sekanten — en rett linje som skjærer grafen i to punkter.',
      },
      differential_quotient: {
        title: 'Differensialkvotient (derivert)',
        desc: 'Den momentane endringsraten på et sted. Oppstår når $h$ i differenskvotienten går mot null. Gir tangentstigningen.',
      },
      derivative_notation: {
        title: 'Skrivemåter for den deriverte',
        desc: 'Det finnes tre vanlige skrivemåter: $f\'(x)$ (Lagrange, vanligst i skolen), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, fremhever brøkkarakteren) og $\\dot{y}$ (Newton, spesielt i fysikk for tidsderiverte).',
      },
    },
    examples: {
      average_speed: {
        title: 'Gjennomsnittlig hastighet',
        context: 'En ball ruller ned en rampe. Strekningen avhenger kvadratisk av tiden.',
        step1: 'Gitt er vei-tid-funksjonen. Etter 2 sekunder har ballen tilbakelagt 2 m, etter 4 sekunder 8 m.',
        step2: 'Gjennomsnittlig hastighet mellom $t = 2$ og $t = 4$: Vi deler strekningsendringen på tidsendringen. Det gir $3\\,\\text{m/s}$ i gjennomsnitt.',
        step3: 'Nå forkorter vi intervallet: Mellom $t = 2$ og $t = 2{,}1$ får vi $2{,}05\\,\\text{m/s}$. Jo kortere intervall, desto nærmere kommer vi den momentane hastigheten ved $t = 2$.',
        mia_comment: 'Nøyaktig slik fungerer ytelsesmonitoren min: Den måler bildefrekvensen i stadig kortere intervaller til jeg finner det nøyaktige stedet der det hakker.',
      },
      instantaneous_rate: {
        title: 'Beregne den momentane endringsraten',
        context: 'Bestem den deriverte av $f(x) = x^2$ i punktet $x_0 = 3$.',
        step1: 'Vi setter $f(x) = x^2$ og $x_0 = 3$ inn i differenskvotienten. Søkt: Hva skjer når $h$ går mot 0?',
        step2: 'Regn ut telleren: $(3+h)^2 = 9 + 6h + h^2$. Minus $f(3) = 9$ gir $6h + h^2$ i telleren.',
        step3: 'Del på $h$ (det er tillatt fordi $h \\neq 0$ i grenseprosessen): Det gjenstår $6 + h$.',
        step4: 'Dann grenseverdi: For $h \\to 0$ blir $6 + h$ til $6$. Stigningen til tangenten ved $x = 3$ er altså nøyaktig $6$.',
        mia_comment: 'Tangenten ved $x = 3$ har stigning 6. Gjør jeg dette for hvert punkt, får jeg den deriverte funksjonen $f\'(x) = 2x$. Ved $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Stemmer!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Fotobokser og hastighet',
        desc: 'En fotoboks måler ikke din momentane hastighet, men din gjennomsnittshastighet over en kort strekning (streknings-ATK: over flere kilometer). Jo kortere målestrekningen, desto nærmere momentanverdien.',
      },
      stock_trends: {
        title: 'Aksjekurser og trender',
        desc: 'Når en aksje "stiger", mener analytikere den positive deriverte av kursen. Stigningen til tangenten på kursutviklingen viser trenden: positiv = opptrend, negativ = nedtrend, null = vendepunkt.',
      },
      speedometer: {
        title: 'Speedometer i bilen',
        desc: 'Speedometeret ditt viser den momentane hastigheten — matematisk den deriverte av veifunksjonen med hensyn på tid. GPS-enheter beregner den som grenseverdi fra svært korte tidsintervaller.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Gjennomsnitt = momentanverdi',
        correct: 'Skille mellom gjennomsnitt og momentanverdi',
        why: 'Den gjennomsnittlige endringsraten over et intervall $[1;\\,5]$ er IKKE lik den momentane endringsraten ved $x = 3$ (midten). Det gjelder bare for lineære funksjoner! For buede grafer avviker begge verdiene.',
        mia_warning: 'Jeg beregnet først den gjennomsnittlige bildefrekvensen og trodde alt var ok. Men lokalt var det massive fall! Gjennomsnittet skjulte problemet.',
      },
      secant_tangent: {
        wrong: 'Sekantstigning = tangentstigning',
        correct: 'Tangenten er grenseverdien av sekanten',
        why: 'Sekanten skjærer grafen i to punkter, tangenten berører den i ett. Først når de to punktene nærmer seg ($h \\to 0$), blir sekanten til tangent. Uten grenseverdi er det bare en tilnærming.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Havnelys trenger et balanseringssystem: Hvor raskt skal Lumi levle? Hvor sterke blir fiendene? Hvor mye koster en oppgradering? "Hvis alt vokser lineært, blir spillet kjedelig", sier Jule. Tim legger til: "Og hvis alt vokser eksponentielt, blir det urettferdig." Mia innser: Hun må kjenne ulike veksttyper og bruke dem målrettet.',
      challenge: 'Finne de rette vekstkurvene for spillbalansering — lineær, kvadratisk, eksponentiell eller logaritmisk.',
      outro: 'Mias balanseringssystem er ferdig: Løpshastighet vokser lineært, fallskade kvadratisk, XP-behov eksponentielt og læringskurven logaritmisk. "Hver kurve har sin plass", sier hun fornøyd. Spillet føles nå rettferdig og spennende — fra Level 1 til endbossen.',
    },
    objectives: {
      identify_types: 'Gjenkjenne de fire store funksjonsklassene (lineær, kvadratisk, eksponentiell, logaritmisk) på likninger og grafer',
      compare_growth: 'Sammenligne og rangere vekstatferden til funksjonsklassene',
      match_context: 'Velge riktig funksjonsklasse for en gitt situasjon og begrunne',
      graph_recognition: 'Tilordne grafer til riktige funksjonstyper',
    },
    explanation: {
      intro: 'I matematikken finnes det ulike "familier" av funksjoner — hver med sin egen karakter. Noen vokser jevnt, andre stadig raskere, atter andre stadig saktere. De fire viktigste klassene for 10. klasse er:',
      mia_tip: 'I spilldesign bruker jeg hver funksjonsklasse til noe annet: Lineær vekst for forutsigbare ting (løpshastighet), kvadratisk for ting som "forsterker seg" (fallskade), eksponentiell for utfordringer (XP-behov) og logaritmisk for læringseffekter (ferdighetsutvikling).',
      growth_comparison: 'Avgjørende er: Hvor raskt vokser hver funksjonsklasse for store $x$-verdier? Rekkefølgen er alltid den samme — uansett hvilke konkrete tall du setter inn:',
      choosing_functions: 'Å velge riktig funksjon for et problem er en nøkkelkompetanse. Spør deg: Er endringen konstant (lineær)? Akselererer den jevnt (kvadratisk)? Dobles verdien i jevne intervaller (eksponentiell)? Blir tilveksten stadig mindre (logaritmisk)?',
    },
    concepts: {
      linear: {
        title: 'Lineære funksjoner',
        desc: 'Konstant endringsrate: Per steg kommer det alltid like mye til. Grafen er en rett linje. Stigning $m$ og y-akseskjæringspunkt $b$ kan leses direkte av.',
      },
      quadratic: {
        title: 'Kvadratiske funksjoner',
        desc: 'Endringsraten endrer seg selv lineært — det kommer stadig raskere mer til (eller mindre). Grafen er en parabel med toppunkt.',
      },
      exponential: {
        title: 'Eksponentielle funksjoner',
        desc: 'Vekst med en fast prosentandel: Jo mer som er der, desto mer kommer til. Dobling i jevne tidsintervaller. Vokser langsiktig raskere enn enhver potensfunksjon.',
      },
      logarithmic: {
        title: 'Logaritmiske funksjoner',
        desc: 'Omvendt funksjon av eksponentialfunksjonen. Vokser raskt i begynnelsen, deretter stadig saktere. Modellerer metningseffekter og læringskurver.',
      },
    },
    examples: {
      identify_type: {
        title: 'Gjenkjenne funksjonstype fra verditabeller',
        context: 'Tre datasett foreligger. Hvilken type passer i hvert tilfelle?',
        step1: 'Test på lineær: Dann differansene mellom påfølgende $y$-verdier. Er de konstante, er funksjonen lineær.',
        step2: 'Test på eksponentiell: Dann kvotientene mellom påfølgende $y$-verdier. Er de konstante, er funksjonen eksponentiell.',
        step3: 'Test på kvadratisk: Dann de andre differansene (differansene av differansene). Er disse konstante, er funksjonen kvadratisk.',
        mia_comment: 'Nøyaktig slik tester jeg balanseringen: Jeg lar 100 runder simuleres og sjekker om verdiene følger ønsket veksttype. Når de andre differansene driver av, stemmer noe ikke.',
      },
      game_mechanics: {
        title: 'Modellere spillmekanikker',
        context: 'Fire ulike spillmekanikker i Havnelys trenger forskjellige funksjoner.',
        step1: 'Løpshastighet: Øker per level med samme beløp ($+5$ per level). Det er en konstant endring — altså lineær. Rettferdig og forutsigbart.',
        step2: 'Fallskade: Fra 2 m høyde lett skade, fra 10 m mye mer. Skadetilveksten akselererer — kvadratisk. Gir fysisk mening (energi = $\\frac{1}{2}mv^2$).',
        step3: 'XP-behov per level: Level 2 trenger 150 XP, Level 3 trenger 225 XP, Level 4 trenger 337 XP. Behovet vokser alltid med 50% — eksponentielt. Slik forblir høyere levels en ekte utfordring.',
        step4: 'Læringskurve (ferdighet): I begynnelsen lærer man raskt, senere stadig saktere. Etter $t$ timers spilletid behersker man $20 \\cdot \\log_2(t+1)$ prosent av mekanikkene — logaritmisk.',
        mia_comment: 'Det er kjernen i spilldesign: Riktig kurve for riktig mekanikk. Lineær XP ville vært kjedelig, eksponentiell fallskade ville vært urettferdig. Hver funksjonstype har sin sweet spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Virale app-nedlastinger',
        desc: 'Når hver bruker inviterer to venner og de igjen to, dobles nedlastingene. I begynnelsen knapt synlig, deretter eksplosivt — typisk eksponentielt. TikTok, Instagram og WhatsApp vokste slik.',
      },
      salary: {
        title: 'Lommepenger og lønn',
        desc: 'Lommepengene dine øker (forhåpentligvis) hvert år med det samme beløpet — lineær vekst. Senere i yrkeslivet øker lønnen ofte på lignende måte: Et fast beløp per år med yrkeserfaring.',
      },
      learning_curve: {
        title: 'Læringsfremgang',
        desc: 'Nytt instrument, ny sport, nytt språk: I begynnelsen gjør du enorme fremskritt, deretter blir det stadig vanskeligere å bli bedre. Det er en logaritmisk metningskurve — og helt normalt!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Eksponentiell" og "kvadratisk" er det samme',
        correct: 'Eksponentiell vokser MYE raskere enn kvadratisk',
        why: 'For små tall ser $x^2$ og $2^x$ like ut: $4^2 = 16$ og $2^4 = 16$. Men for $x = 10$: $10^2 = 100$ mot $2^{10} = 1024$. Eksponentiell vekst forbigår enhver potensfunksjon!',
        mia_warning: 'Jeg hadde XP-behovet først kvadratisk i stedet for eksponentielt. Resultat: Fra Level 20 var spillet altfor lett, fordi spillerne samlet XP raskere enn behovet vokste.',
      },
      all_curves_linear: {
        wrong: 'All vekst er lineær',
        correct: 'Først sjekke veksttypen',
        why: 'Bare fordi noe "dobles", betyr det ikke at det er lineært! "Hver 3. dag dobbelt så mange følgere" er eksponentielt, ikke lineært. Lineært ville være: "Hver dag 100 nye følgere". Forskjellen: konstant tilvekst (lineær) vs. konstant faktor (eksponentiell).',
      },
    },
  },
};
