export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'Mia bygger et parkeringshus-minispill til Hafenlichter: Lumi setter fra seg varebilen og må betale når han henter den. Mia programmerer taksten — 2,00 € for inntil én time, deretter 3,50 €. Under testingen legger Tim merke til noe: «Kommer du ett sekund for sent, koster det plutselig 1,50 € mer. Er det en bug?» Mia ser på grafen. Den er ikke ødelagt — den hopper. Og nettopp dette hoppet har et navn.',
      challenge: 'Når har en funksjon et ekte sprang, når bare ett enkelt manglende hull, og når går den mot uendelig? Mia må skille sikkert mellom de tre tilfellene for å avgjøre hvilke takster hun i det hele tatt kan bygge på denne måten.',
      outro: 'Mia kan nå sjekke på ethvert mistenkelig sted om en funksjon er kontinuerlig: grenseverdi fra venstre, grenseverdi fra høyre, funksjonsverdi — stemmer alle tre overens, er alt i orden. Og hun vet hvilke hull hun kan reparere og hvilke ikke. Parkeringstaksten forblir forresten diskontinuerlig. Det er ikke en bug, det er en forretningsbeslutning.',
    },
    objectives: {
      anschaulich: 'Kjenne igjen kontinuitet intuitivt — og vite hvorfor «tegne uten å løfte blyanten» ikke holder som definisjon',
      definition: 'Sjekke kontinuitet i et punkt ved hjelp av grenseverdien: $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Skille sikkert mellom hevbart hull, sprangpunkt og pol',
      zwischenwertsatz: 'Vise at et nullpunkt finnes ved hjelp av skjæringssetningen',
    },
    explanation: {
      intro: 'Intuitivt betyr kontinuerlig: Du kan tegne grafen uten å løfte blyanten. Det er en god første tanke — men det er ikke en definisjon man kan regne med. Hva med en funksjon som mangler nøyaktig ett eneste punkt? Blyanten løfter du praktisk talt ikke, og likevel er funksjonen ikke kontinuerlig der. For en holdbar definisjon trenger du grenseverdien fra differensialregningen.',
      definition: 'En funksjon $f$ kalles kontinuerlig i punktet $x_0$ hvis funksjonsverdien og grenseverdien i dette punktet ikke motsier hverandre:',
      drei_bedingungen: 'I denne ene linja ligger det tre krav. Alle tre må være oppfylt — i hvert moteksempel er det nøyaktig ett av dem som svikter:',
      mia_tip: 'Jeg sjekker det alltid i denne rekkefølgen: For det første, ligger punktet i det hele tatt i definisjonsmengden? Hvis ikke, kan funksjonen i hvert fall ikke være kontinuerlig der. For det andre, går jeg mot samme verdi fra venstre og fra høyre? For det tredje, er denne verdien den som funksjonen faktisk har der? Tre haker, ferdig.',
      einseitig: 'Ved stykkevis definerte funksjoner må du se på skjøten fra begge sider hver for seg. Grenseverdien fra venstre og grenseverdien fra høyre kan ikke gå fra hverandre, og begge må treffe funksjonsverdien:',
      arten: 'Det finnes nøyaktig tre måter kontinuiteten kan gå i stykker på — og de er ikke like ille. Ved et hevbart hull mangler bare ett punkt; du kan fylle det inn, og alt er reparert. Ved et sprangpunkt finnes begge de ensidige grenseverdiene, men de er forskjellige — her hjelper det ikke å fylle inn. Ved en pol går grenseverdiene mot uendelig, det finnes ingen verdi å fylle inn i det hele tatt:',
      zwischenwertsatz: 'Kontinuitet er ikke bare en egenskap man sjekker — den er et verktøy. Skjæringssetningen sier: En kontinuerlig funksjon som begynner under null og slutter over null, må treffe null underveis. Den kan ikke hoppe over, for hoppe er nettopp det den ikke får lov til:',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Kontinuitet i et punkt',
        desc: 'Grenseverdien i punktet stemmer overens med funksjonsverdien. Tre betingelser i én likning: funksjonsverdien finnes, grenseverdien finnes, og de er like. Faller én bort, er funksjonen diskontinuerlig der.',
      },
      einseitig: {
        title: 'Ensidige grenseverdier',
        desc: 'Ved skjøtene til stykkevis definerte funksjoner sjekker du venstre og høyre side hver for seg. Går de to verdiene fra hverandre, har vi et sprang — og spranghøyden er nøyaktig differansen mellom dem.',
      },
      arten: {
        title: 'De tre typene diskontinuitet',
        desc: 'Hevbart hull: grenseverdien finnes, funksjonsverdien mangler — kan repareres. Sprangpunkt: begge ensidige grenseverdier finnes, men er forskjellige — kan ikke repareres. Pol: grenseverdiene går mot uendelig — kan i hvert fall ikke repareres.',
      },
      zwischenwertsatz: {
        title: 'Skjæringssetningen',
        desc: 'Er $f$ kontinuerlig på $[a;b]$ og skifter fortegn i endepunktene, så ligger det minst ett nullpunkt mellom dem. Setningen garanterer eksistens — ikke entydighet, og ikke hvor nøyaktig nullpunktet ligger.',
      },
    },
    examples: {
      luecke: {
        title: 'Tette et hevbart hull',
        context: 'Mia snubler over et uttrykk som ved $x = 1$ gir $\\frac{0}{0}$.',
        step1: 'Nevneren blir null ved $x = 1$ — punktet mangler i definisjonsmengden:',
        step2: 'Faktoriser telleren og forkort. Det er lov så lenge $x \\neq 1$:',
        step3: 'Det forkortede uttrykket kan uten problemer regnes ut ved $x = 1$ — det er grenseverdien:',
        step4: 'Nå fyller du inn det manglende punktet. Den utvidede funksjonen kalles den kontinuerlige utvidelsen:',
        mia_comment: 'Den $\\frac{0}{0}$ skremte meg i starten — jeg trodde noe var ødelagt. Men det er det ikke. Det betyr bare: forkort først, spør seinere. Ødelagt ville $\\frac{1}{0}$ vært, der står det en ekte null helt alene i nevneren.',
      },
      sprung: {
        title: 'Måle opp et sprangpunkt',
        context: 'Parkeringstaksten fra minispillet til Mia — og spørsmålet om hvor dyrt ett sekund kan være.',
        step1: 'Taksten er stykkevis definert, skjøten ligger ved én time:',
        step2: 'Gå mot skjøten fra venstre og fra høyre, og sammenlign verdiene:',
        step3: 'De to grenseverdiene finnes, men er forskjellige — det er definisjonen av et sprangpunkt:',
        step4: 'Spranghøyden er differansen mellom dem. Her er den ingen feil, men selve taksten:',
        kai_comment: 'Nettopp slike sprang er grunnen til at mobilabonnementer og portotrinn irriterer folk. Matematisk er det ingenting feil med det — men den som kommer ett sekund for sent, betaler rett og slett hele neste trinn. Kontinuerlige takster tar betalt på sekundet. Det er en beslutning, ikke en formel.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Trinnvise takster',
        desc: 'Parkeringshus, porto, mobilabonnement: Overalt der det tas betalt per påbegynt enhet, er prisfunksjonen diskontinuerlig. Hvert trinn er et sprangpunkt — og hvert av dem er en bevisst beslutning fra tilbyderen.',
      },
      temperatur: {
        title: 'Fysiske størrelser',
        desc: 'Temperatur, posisjon, fart: Disse størrelsene kan ikke hoppe, fordi et sprang ville bety uendelig mye energi på null tid. Derfor er fysiske modeller nesten alltid kontinuerlige funksjoner.',
      },
      nullstelle: {
        title: 'Finne nullpunkter numerisk',
        desc: 'Hver kalkulator bruker skjæringssetningen: Den leter etter et intervall med fortegnsskifte og halverer det igjen og igjen. Uten kontinuitet ville denne metoden vært verdiløs — nullpunktet kunne rett og slett blitt hoppet over.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'Hvis $f(x_0)$ finnes, er $f$ også kontinuerlig der',
        correct: 'Funksjonsverdien må i tillegg stemme overens med grenseverdien',
        why: 'En sprangfunksjon er definert i sprangpunktet sitt — den har en helt vanlig funksjonsverdi der. Likevel er den diskontinuerlig, fordi grenseverdien fra den ene siden gir noe annet. Å være definert er bare den første av tre betingelser, ikke selve svaret.',
        mia_warning: 'Det skjedde meg med parkeringshuset. Ved nøyaktig én time er prisen definert, nemlig 2,00 €. Jeg trodde at alt dermed var glatt. Grafen hopper likevel — bare ett sekund seinere.',
      },
      pol_ist_hebbar: {
        wrong: 'Ethvert hull i definisjonsmengden kan tettes med en passende verdi',
        correct: 'Bare hvis den tosidige grenseverdien finnes og er endelig',
        why: 'Ved $\\frac{1}{x}$ går funksjonen mot $-\\infty$ fra venstre og mot $+\\infty$ fra høyre. Det finnes ikke noe tall man kunne satt inn — uansett hvilket du velger, stikker grafen av mot uendelig ved siden av. Tommelfingerregelen for brøker: Forkortes den kritiske faktoren bort, er hullet hevbart; blir den stående i nevneren, er det en pol.',
        mia_warning: 'Jeg sjekker det nå alltid med to tall: sett inn $0{,}001$ og $-0{,}001$. Kommer det ut to lignende verdier, er hullet hevbart. Kommer det ut $1000$ og $-1000$, er det en pol — og da er det ingenting å gjøre.',
      },
    },
  },
};
