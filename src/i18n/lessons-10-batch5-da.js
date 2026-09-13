export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'Mia bygger et parkeringshus-minispil til "Havnelys": Lumi parkerer varevognen og skal betale, når den hentes. Mia programmerer taksten — 2,00 € op til en time, derefter 3,50 €. Under testen opdager Tim noget: "Hvis du kommer et sekund for sent, koster det pludselig 1,50 € mere. Er det en bug?" Mia kigger på grafen. Den er ikke i stykker — den springer. Og netop det spring har et navn.',
      challenge: 'Hvornår har en funktion et ægte spring, hvornår mangler der bare et enkelt punkt, og hvornår løber den mod uendelig? Mia skal kunne holde de tre tilfælde sikkert adskilt for at afgøre, hvilke takster hun overhovedet må bygge sådan.',
      outro: 'Mia kan nu ved ethvert mistænkeligt sted tjekke, om en funktion er kontinuert: grænseværdi fra venstre, grænseværdi fra højre, funktionsværdi — stemmer alle tre overens, er alt i orden. Og hun ved, hvilke huller hun kan reparere, og hvilke ikke. Parkeringstaksten forbliver i øvrigt diskontinuert. Det er ikke en bug, det er en forretningsbeslutning.',
    },
    objectives: {
      anschaulich: 'Genkende kontinuitet intuitivt — og vide, hvorfor "tegne uden at løfte blyanten" ikke er nok som definition',
      definition: 'Tjekke kontinuitet i et punkt via grænseværdien: $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Skelne sikkert mellem hæveligt hul, springpunkt og pol',
      zwischenwertsatz: 'Påvise eksistensen af et nulpunkt med mellemværdisætningen',
    },
    explanation: {
      intro: 'Intuitivt betyder kontinuert: du kan tegne grafen uden at løfte blyanten. Det er en god første tanke — men det er ikke en definition, man kan regne med. Hvad med en funktion, der mangler præcis ét eneste punkt? Blyanten løfter du praktisk talt ikke, og alligevel er funktionen ikke kontinuert der. For at få en holdbar definition har du brug for grænseværdien fra differentialregningen.',
      definition: 'En funktion $f$ kaldes kontinuert i punktet $x_0$, hvis funktionsværdien og grænseværdien i dette punkt ikke modsiger hinanden:',
      drei_bedingungen: 'I denne ene linje gemmer sig tre krav. Alle tre skal være opfyldt — i hvert modeksempel fejler præcis ét af dem:',
      mia_tip: 'Jeg tjekker det altid i denne rækkefølge: For det første, ligger punktet overhovedet i definitionsmængden? Hvis ikke, kan det i hvert fald ikke være kontinuert. For det andet, nærmer jeg mig den samme værdi fra venstre og fra højre? For det tredje, er denne værdi den, funktionen faktisk antager der? Tre flueben, færdig.',
      einseitig: 'Ved stykkevis definerede funktioner skal du se på overgangsstedet fra begge sider hver for sig. Den venstresidede og den højresidede grænseværdi må ikke være forskellige, og begge skal ramme funktionsværdien:',
      arten: 'Der er præcis tre måder, kontinuitet kan gå i stykker på — og de er ikke lige slemme. Ved det hævelige hul mangler der kun ét punkt; du kan tilføje det, og så er alt repareret. Ved springpunktet findes begge ensidede grænseværdier, men de er forskellige — her hjælper det ikke at tilføje noget. Ved polen løber grænseværdierne mod uendelig, der er slet ingen værdi at tilføje:',
      zwischenwertsatz: 'Kontinuitet er ikke kun en egenskab, man tjekker — den er et værktøj. Mellemværdisætningen siger: En kontinuert funktion, der starter under nul og slutter over nul, må ramme nul undervejs. Den kan ikke springe over, for springe er netop det, den ikke må:',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Kontinuitet i et punkt',
        desc: 'Grænseværdien i punktet stemmer overens med funktionsværdien. Tre betingelser i én ligning: funktionsværdien findes, grænseværdien findes, og de er ens. Falder én bort, er funktionen diskontinuert der.',
      },
      einseitig: {
        title: 'Ensidede grænseværdier',
        desc: 'Ved overgangssteder for stykkevis definerede funktioner tjekker du venstre og højre hver for sig. Er de to værdier forskellige, foreligger der et spring — og springhøjden er præcis deres forskel.',
      },
      arten: {
        title: 'De tre typer diskontinuitet',
        desc: 'Hæveligt hul: grænseværdien findes, funktionsværdien mangler — kan repareres. Springpunkt: begge ensidede grænseværdier findes, men er forskellige — kan ikke repareres. Pol: grænseværdierne løber mod uendelig — kan slet ikke repareres.',
      },
      zwischenwertsatz: {
        title: 'Mellemværdisætningen',
        desc: 'Er $f$ kontinuert på $[a;b]$ og skifter fortegn ved endepunkterne, så ligger der mindst ét nulpunkt imellem. Sætningen garanterer eksistens — ikke entydighed og ikke, hvor det præcis ligger.',
      },
    },
    examples: {
      luecke: {
        title: 'Lukke et hæveligt hul',
        context: 'Mia falder over et udtryk, der ved $x = 1$ giver $\\frac{0}{0}$.',
        step1: 'Nævneren bliver nul ved $x = 1$ — punktet mangler i definitionsmængden:',
        step2: 'Faktorisér tælleren og forkort. Det er tilladt, så længe $x \\neq 1$:',
        step3: 'Det forkortede udtryk kan uden problemer udregnes ved $x = 1$ — det er grænseværdien:',
        step4: 'Nu tilføjer du det manglende punkt. Den udvidede funktion kaldes den kontinuerte fortsættelse:',
        mia_comment: 'Det $\\frac{0}{0}$ skræmte mig i starten — jeg troede, at noget var i stykker. Men det er det ikke. Det betyder bare: forkort først, spørg bagefter. I stykker ville være $\\frac{1}{0}$, der står et ægte nul alene i nævneren.',
      },
      sprung: {
        title: 'Opmåle et springpunkt',
        context: 'Parkeringstaksten fra Mias minispil — og spørgsmålet om, hvor dyrt et sekund kan være.',
        step1: 'Taksten er stykkevis defineret, overgangsstedet ligger ved en time:',
        step2: 'Gå mod overgangsstedet fra venstre og fra højre, og sammenlign værdierne:',
        step3: 'De to grænseværdier findes, men er forskellige — det er definitionen på et springpunkt:',
        step4: 'Springhøjden er deres forskel. Den er her ikke en fejl, men selve taksten:',
        kai_comment: 'Netop den slags spring er grunden til, at mobilabonnementer og portotrin irriterer folk. Matematisk er der intet forkert ved det — men den, der kommer et sekund for sent, betaler nu engang hele det næste trin. Kontinuerte takster afregner på sekundet. Det er en beslutning, ikke en formel.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Trinvise takster',
        desc: 'Parkeringshus, porto, mobilabonnement: overalt hvor der afregnes i påbegyndte enheder, er prisfunktionen diskontinuert. Hvert trin er et springpunkt — og hvert af dem er en bevidst beslutning fra udbyderens side.',
      },
      temperatur: {
        title: 'Fysiske størrelser',
        desc: 'Temperatur, position, fart: disse størrelser kan ikke springe, fordi et spring ville betyde uendelig meget energi på nul tid. Derfor er fysiske modeller næsten altid kontinuerte funktioner.',
      },
      nullstelle: {
        title: 'Finde nulpunkter numerisk',
        desc: 'Enhver lommeregner bruger mellemværdisætningen: den søger et interval med fortegnsskift og halverer det igen og igen. Uden kontinuitet ville metoden være værdiløs — nulpunktet kunne simpelthen blive sprunget over.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'Hvis $f(x_0)$ findes, er $f$ også kontinuert der',
        correct: 'Funktionsværdien skal desuden stemme overens med grænseværdien',
        why: 'En springfunktion er defineret i sit springpunkt — den har der en helt normal funktionsværdi. Alligevel er den diskontinuert, fordi grænseværdien fra den ene side giver noget andet. At være defineret er kun den første af tre betingelser, ikke selve svaret.',
        mia_warning: 'Det skete for mig med parkeringshuset. Ved præcis en time er prisen defineret, nemlig 2,00 €. Jeg troede, at så var alt glat. Grafen springer alligevel — bare et sekund senere.',
      },
      pol_ist_hebbar: {
        wrong: 'Ethvert hul i definitionsmængden kan lukkes med en passende værdi',
        correct: 'Kun hvis den tosidede grænseværdi findes og er endelig',
        why: 'Ved $\\frac{1}{x}$ løber funktionen mod $-\\infty$ fra venstre og mod $+\\infty$ fra højre. Der findes intet tal, man kunne indsætte — uanset hvilket du vælger, springer grafen ved siden af mod uendelig. Tommelfingerreglen for brøker: forkortes den kritiske faktor væk, er hullet hæveligt; bliver den stående i nævneren, er det en pol.',
        mia_warning: 'Jeg tjekker det nu altid med to tal: indsæt $0{,}001$ og $-0{,}001$. Kommer der to lignende værdier ud, er hullet hæveligt. Kommer der $1000$ og $-1000$ ud, er det en pol — og så er der intet at gøre.',
      },
    },
  },
};
