export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Amirs ML-model til DataPulse leverer brugbare sanganbefalinger — men træningen tager evigheder. "Gradient Descent er i princippet ikke andet end differentiation", forklarer hans matematikprofessor. "Når du forstår, hvordan differentiationsreglerne virker, forstår du også, hvorfor din model lærer." Amir beslutter at gennemarbejde reglerne systematisk.',
      challenge: 'Amir vil forstå, hvordan hans ML-model internt differentierer tabsfunktionen — til det har han brug for potens-, sum-, produkt- og kædereglen.',
      outro: 'Amir har nu et solidt fundament: Potensreglen til simple led, sum- og faktorreglen til sammensatte udtryk, produktreglen til multiplikationer og kædereglen til sammensatte funktioner. "Nu forstår jeg endelig, hvad PyTorch gør i baggrunden med Autograd", siger han tilfreds.',
    },
    objectives: {
      power_rule: 'Anvende potensreglen sikkert: differentiere $f(x) = x^n$',
      constant_sum_rule: 'Beherske konstant- og sumreglen: differentiere led for led og beholde faktorer',
      product_quotient_rule: 'Anvende produkt- og kvotientreglen korrekt',
      chain_rule: 'Bruge kædereglen sikkert ved sammensatte funktioner',
    },
    explanation: {
      intro: 'Potensreglen er den vigtigste basisregel: Du trækker eksponenten ned som faktor og reducerer eksponenten med 1. Dermed differentierer du enhver potensfunktion i en håndvending:',
      constant_factor: 'Konstante faktorer beholdes ved differentiation, og ved summer må du differentiere led for led. Det gør sammensatte udtryk overskuelige:',
      amir_tip: 'I min ML-kode gemmer sig overalt summer og faktorer — tabsfunktionen er en enorm sum over alle datapunkter. At jeg må differentiere hvert led for sig gør Backpropagation overhovedet muligt!',
      product_rule: 'Når to funktioner multipliceres, må du IKKE bare differentiere begge enkeltvis. I stedet gælder produktreglen — "første gange den afledede af anden plus anden gange den afledede af første":',
      quotient_rule: 'Til brøker af funktioner findes kvotientreglen. Huskeregel: "NAT minus TAN gennem N i anden" (N = nævner, T = tæller, A = afledet). I modsætning til produktreglen kommer det her an på rækkefølgen — minusset gør formlen usymmetrisk:',
      chain_rule: 'Ved sammensatte funktioner — altså en funktion inde i en funktion — har du brug for kædereglen. Du differentierer "udefra og ind" og multiplicerer med den indre afledede:',
    },
    concepts: {
      power_rule: {
        title: 'Potensreglen',
        desc: 'Grundreglen: Eksponenten bliver faktor, eksponenten falder med 1. Gælder også for negative og brøkeksponenter, f.eks. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Sum- og faktorregel',
        desc: 'Summer differentieres led for led, konstante faktorer beholdes. Dermed nedbryder du ethvert polynom i simple enkeltled.',
      },
      product_rule: {
        title: 'Produktreglen',
        desc: 'For produktet af to funktioner: Første afledt gange anden plus første gange anden afledt. Uundværlig, så snart to variable udtryk multipliceres.',
      },
      quotient_rule: {
        title: 'Kvotientreglen',
        desc: 'For brøker: Nævner gange den afledede af tælleren, minus tæller gange den afledede af nævneren, divideret med nævneren i anden. Minusset er forskellen fra produktreglen — og den hyppigste fejlkilde. Nødvendig overalt, hvor noget står "per" noget andet: stykomkostninger, hastighed, koncentration.',
      },
      chain_rule: {
        title: 'Kædereglen',
        desc: 'Ydre funktion differentieres, indre står, derefter multipliceres med den indre afledede. Hjertestykket i Backpropagation i neurale netværk.',
      },
    },
    examples: {
      power_sum: {
        title: 'Differentiere polynom med potens- og sumregel',
        context: 'Amir forenkler et led fra sin omkostningsfunktion.',
        step1: 'Givet er polynomiet — vi differentierer hvert led for sig:',
        step2: 'Potensreglen på hvert led: Eksponent som faktor, eksponent minus 1. Konstanten $-7$ falder væk:',
        step3: 'Sammensat giver den afledede funktion:',
        amir_comment: 'Præcis sådan ser gradienten af mine polynomiale features ud. Hvert led bidrager til hældningen — og PyTorch gør det automatisk for tusindvis af parametre samtidigt.',
      },
      quotient_rule: {
        title: 'Differentiere en brøkfunktion med kvotientreglen',
        context: 'Amir måler, hvor mange forespørgsler hans server klarer per sekund, der går — en størrelse per en anden, altså en brøk.',
        step1: 'Først navngiver du tæller og nævner. Springer du det over, bytter du dem om senere:',
        step2: 'Differentier begge hver for sig — det er den lette del:',
        step3: 'Sæt nu ind: Nævner gange den afledede af tælleren, minus tæller gange den afledede af nævneren, det hele divideret med $v^2$:',
        step4: 'Gang ud og saml. Nævneren bliver stående som kvadrat, den ganges ikke ud:',
        amir_comment: 'Vigtigt: Nævneren forbliver $(x-1)^2$. Før gangede jeg den altid pænt ud og spærrede dermed for at forkorte. I kurveanalysen vil du kunne se nævnerens nulpunkter — som faktor, ikke som polynomium.',
      },
      chain_rule: {
        title: 'Sammensat funktion med kædereglen',
        context: 'Amir differentierer en aktiveringsfunktion, der indeholder en sammensætning.',
        step1: 'Givet er en sammensat potensfunktion:',
        step2: 'Opdeling i ydre funktion $f(u) = u^3$ og indre funktion $g(x) = 2x^2 + 1$:',
        step3: 'Differentier ydre (potensreglen på $u^3$), lad indre stå, gange indre afledede ($4x$):',
        step4: 'Ryddet op — faktor $4x$ trukket foran:',
        amir_comment: 'Kædereglen er literally Backpropagation! Hvert lag i Neural Network er en sammensat funktion, og kædereglen kæder gradienterne fra lag til lag.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent i Machine Learning',
        desc: 'Enhver ML-model minimerer en tabsfunktion ved differentiation. Gradienten viser retningen af den stejleste stigning — vi går i den modsatte retning for at finde minimum.',
      },
      marginal_cost: {
        title: 'Grænseomkostninger i økonomien',
        desc: 'Den afledede af omkostningsfunktionen $K(x)$ giver grænseomkostningerne: Hvad koster en produceret enhed mere? Virksomheder bruger det dagligt til priskalkulation.',
      },
      acceleration: {
        title: 'Acceleration i fysikken',
        desc: 'Hastighed er den afledede af vejen, acceleration den afledede af hastigheden. Din mobilsensor måler præcis det: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'Den afledede af en konstant er konstanten selv',
        correct: 'Den afledede af en konstant er altid nul',
        why: 'En konstant har ingen hældning — den ændrer sig ikke. Tænk på $f(x) = 5$: Det er en vandret linje, altså er hældningen overalt 0. Det gælder for ethvert tal uden $x$.',
        amir_warning: 'Bias-leddet i min model er en konstant — dets afledede mht. $x$ er 0. Glemmer du det, får gradienten en forkert offset, og træningen divergerer.',
      },
      chain_rule_forgotten: {
        wrong: 'Glemme den indre afledede ved sammensatte funktioner',
        correct: 'Altid multiplicere med den indre afledede',
        why: 'Ved $[(3x+1)^4]\'$ er det ikke nok bare at trække eksponenten ned. Du SKAL multiplicere med den afledede af det indre led $(3x+1)\' = 3$. Uden indre afledede mangler faktoren 3.',
        amir_warning: 'Forestil dig, at du glemmer den indre afledede i et lag af et Neural Network — gradienten ville være helt forkert, og modellen lærer nonsens. Kædereglen er ikke valgfri!',
      },
      quotient_sign: {
        wrong: 'Tælleren i kvotientreglen byttet om: $u \\cdot v\' - u\' \\cdot v$',
        correct: 'Nævner gange den afledede af tælleren først: $u\' \\cdot v - u \\cdot v\'$',
        why: 'Produktreglen er symmetrisk — du må bytte de to led om, resultatet forbliver det samme. I kvotientreglen står der et minus, og dermed ligger rækkefølgen fast. Bytter du dem om, får du præcis det negative af den rigtige afledede. Det lumske ved det: Udtrykket ser plausibelt ud, du regner korrekt videre, og alligevel er hvert fortegn forkert til sidst. Et maksimum bliver til et minimum.',
        amir_warning: 'Lav en prøve på et simpelt sted. For $f(x) = \\frac{x}{x+1}$ er funktionen voksende overalt, så $f\'$ skal være positiv. Får du noget negativt, har du byttet om på tælleren — det koster dig ti sekunder og redder hele opgaven.',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Amirs anbefalingsalgoritme spytter resultater ud — men er de virkelig optimale? "Du skal analysere tabsfunktionen fuldstændigt", siger hans professor. "Hvor er minimaerne? Hvor er vendepunkterne?" Amir indser: En fuldstændig kurveanalyse viser ham, om modellen virkelig har fundet det globale minimum eller sidder fast i et lokalt minimum.',
      challenge: 'Amir analyserer tabslandskabet for sin model: Bestemme nulpunkter, ekstrema, vendepunkter og monotonicitet for en funktion fuldstændigt.',
      outro: 'Amir kan nu fuldstændigt karakterisere enhver hel rational funktion: Finde nulpunkter, bestemme maksima og minima, beregne vendepunkter og aflæse monotoniadfærd. "Når jeg tegner tabslandskabet sådan, ser jeg straks, om min optimizer er landet i den rigtige dal", siger han.',
    },
    objectives: {
      zeros_extrema: 'Systematisk bestemme nulpunkter og ekstremalpunkter for en funktion',
      inflection_points: 'Beregne vendepunkter og forstå deres betydning for kurveforløbet',
      monotonicity_symmetry: 'Analysere monotoniadfærd og symmetri for en funktion',
    },
    explanation: {
      intro: 'En kurveanalyse er den fuldstændige analyse af en funktion. Vi begynder med nulpunkterne — de steder, hvor grafen skærer $x$-aksen:',
      extrema: 'Ekstremalpunkter (maksima og minima) finder du der, hvor den første afledede er nul. Men pas på: Ikke ethvert nulpunkt af $f\'$ er automatisk et ekstremum! Du har brug for den anden afledede til bekræftelse:',
      amir_tip: 'Tabslandskabet for min model har mange lokale minima. Med kurveanalysen kan jeg tjekke, om et kritisk punkt virkelig er et minimum — eller blot et sadelpunkt, hvor optimizeren sidder fast.',
      inflection: 'Vendepunkter markerer overgangen mellem venstre- og højrekrumning. Her ændrer krumningsadfærden sig — den anden afledede skifter fortegn:',
      monotonicity: 'Monotoniadfærden fortæller dig, hvor funktionen stiger, og hvor den falder. Du aflæser det direkte af fortegnet for den første afledede:',
    },
    concepts: {
      extrema: {
        title: 'Ekstremalpunkter (maksima/minima)',
        desc: 'Nødvendig betingelse: $f\'(x_0) = 0$. Tilstrækkelig: $f\'\'(x_0) < 0$ giver maksimum, $f\'\'(x_0) > 0$ giver minimum. Begge betingelser tilsammen gør det sikkert.',
      },
      inflection: {
        title: 'Vendepunkter',
        desc: 'Hvor krumningen skifter: $f\'\'(x_0) = 0$ OG $f\'\'\'(x_0) \\neq 0$. Ved normalfordelinger markerer vendepunkter standardafvigelsen.',
      },
      symmetry: {
        title: 'Symmetri',
        desc: 'Aksesymmetri til $y$-aksen ved $f(-x) = f(x)$ (kun lige eksponenter). Punktsymmetri til origo ved $f(-x) = -f(x)$ (kun ulige eksponenter). Sparer regnearbejde!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Fuldstændig kurveanalyse',
        context: 'Amir undersøger en kubisk funktion — lignende tabsfunktioner med flere ekstrema.',
        step1: 'Givet er funktionen — vi analyserer den fuldstændigt:',
        step2: 'Dan første afledede og bestem nulpunkter (nødvendig betingelse for ekstrema):',
        step3: 'Evaluer anden afledede i de kritiske punkter (tilstrækkelig betingelse): Negativ værdi = maksimum, positiv værdi = minimum:',
        step4: 'Bestem vendepunkt via $f\'\' = 0$ og bekræft med tredje afledede:',
        amir_comment: 'Præcis sådan analyserer jeg tabslandskabet: Først finde kritiske punkter, derefter tjekke om det er minimum eller sadelpunkt. For højdimensionale funktioner gør min optimizer det numerisk — men princippet er identisk.',
      },
      graph_properties: {
        title: 'Udnytte symmetri og ekstrema',
        context: 'En symmetrisk funktion — halvdelen af arbejdet bortfalder pga. symmetri.',
        step1: 'Givet er en fjerdegradsfunktion — vi tjekker først symmetri:',
        step2: 'Indsæt $-x$: Alle eksponenter er lige, altså $f(-x) = f(x)$ — aksesymmetrisk! Ekstrema forekommer symmetrisk:',
        step3: 'Sæt første afledede lig nul — pga. symmetri er det nok at finde de positive løsninger:',
        step4: 'Beregn funktionsværdier — takket være symmetri gælder $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symmetri i data er guld værd: Hvis jeg ved, at min tabsfunktion er symmetrisk, behøver jeg kun at gennemsøge halvdelen af parameterrummet. Det halverer træningstiden!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analysere datafordelinger',
        desc: 'Normalfordelingen har vendepunkter ved $\\mu \\pm \\sigma$. Kurveanalyse fortæller dig, hvor de fleste datapunkter koncentrerer sig, og hvor spredningen begynder.',
      },
      profit_analysis: {
        title: 'Gevinstmaksimering',
        desc: 'Gevinstfunktionen $G(x)$ har et maksimum — den optimale produktionsmængde. Kurveanalyse viser præcis, ved hvilket styktal gevinsten er maksimal.',
      },
      population_growth: {
        title: 'Befolkningsvækst',
        desc: 'Vendepunktet for en vækstkurve markerer øjeblikket, hvor væksten aftager. Epidemiologer bruger præcis denne analyse til infektionskurver.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Ethvert nulpunkt af $f\'$ er automatisk et ekstremalpunkt',
        correct: 'Nulpunkt af $f\'$ PLUS fortegnsskifte eller $f\'\' \\neq 0$ skal tjekkes',
        why: 'Ved $f(x) = x^3$ er $f\'(0) = 0$, men intet ekstremum — det er et sadelpunkt! Du SKAL tjekke den tilstrækkelige betingelse ($f\'\' \\neq 0$ eller fortegnsskifte af $f\'$).',
        amir_warning: 'I højere dimensioner hedder sådanne punkter "Saddle Points" — optimizeren sidder fast og tror, den har fundet et minimum. Altid tjekke den anden afledede!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ er nok for et vendepunkt',
        correct: '$f\'\'(x_0) = 0$ OG $f\'\'\'(x_0) \\neq 0$ bekræfter vendepunktet tilsammen',
        why: 'Ved $f(x) = x^4$ er $f\'\'(0) = 0$, men intet vendepunkt — krumningen skifter ikke! Den tredje afledede skal være forskellig fra nul for at garantere krumningsskiftet.',
        amir_warning: 'Samme fælde som ved ekstrema: Den nødvendige betingelse alene rækker aldrig. Altid tjekke den tilstrækkelige betingelse — ellers stoler du på et forkert resultat.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse skal køre på mobilen — men Amirs model kræver for meget hukommelse. "Du skal optimere netværksarkitekturen", siger teamkollegaen Sara. "Maksimal nøjagtighed med minimalt hukommelsesforbrug." Amir indser: Det er en klassisk optimeringsopgave — optimere en størrelse, mens en anden er begrænset.',
      challenge: 'Amir vil finde den bedste modelarkitektur: Maksimal forudsigelseskvalitet under bibetingelsen med begrænsede beregningsressourcer.',
      outro: 'Amir har forstået princippet: Opstille målfunktion, indsætte bibetingelse, reducere til én variabel, differentiere, sætte lig nul, tjekke. "Hvad enten det er dåsedimensioner eller modelparametre — skemaet er altid det samme", konstaterer han. Hans model passer nu på 50 MB.',
    },
    objectives: {
      setup_equations: 'Opstille målfunktion og bibetingelse ud fra en praktisk sammenhæng',
      optimize_constraints: 'Skabe en funktion af én variabel ved at indsætte bibetingelsen og optimere',
      verify_extremum: 'Tjekke med den anden afledede, om der foreligger et maksimum eller minimum, og tage hensyn til randværdier',
    },
    explanation: {
      intro: 'Ved optimeringsopgaver handler det altid om det samme: En størrelse skal være så stor eller lille som muligt (målfunktion), mens en begrænsning gælder (bibetingelse):',
      strategy: 'Strategien er altid ens: (1) Opstil målfunktionen — hvad skal optimeres? (2) Find bibetingelsen — hvilken begrænsning gælder? (3) Løs bibetingelsen for én variabel og indsæt i målfunktionen. (4) Differentier, sæt lig nul, tjek.',
      amir_tip: 'Hyperparameter-tuning er præcis sådan en optimeringsopgave: Jeg vil minimere valideringsfejlen (målfunktion), men min GPU-hukommelse er begrænset (bibetingelse). Skemaet fra matematikundervisningen fungerer 1:1!',
      substitution: 'Efter indsættelse af bibetingelsen afhænger målfunktionen kun af én variabel. Nu differentieres som normalt, og det kritiske punkt tjekkes:',
      domain_check: 'Glem ikke definitionsmængden! Ved reelle problemer er der ofte grænser (f.eks. $r > 0$ for en radius). Sammenlign funktionsværdien i det kritiske punkt med randværdierne — sommetider ligger optimum på randen.',
    },
    concepts: {
      target_function: {
        title: 'Målfunktion',
        desc: 'Størrelsen, der skal optimeres — maksimal gevinst, minimal overflade, bedste nøjagtighed. Afhænger i udgangspunktet ofte af to variable.',
      },
      constraint: {
        title: 'Bibetingelse',
        desc: 'Begrænsningen, der gælder — fast volumen, begrænset budget, begrænsede parametre. Gør det muligt at eliminere en variabel og reducere målfunktionen til én variabel.',
      },
      boundary_check: {
        title: 'Randværditjek',
        desc: 'Optimum kan også ligge på randen af definitionsmængden. Sammenlign altid $f(x_{opt})$ med funktionsværdierne på rænderne $f(a)$ og $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Dåse med minimalt materialforbrug',
        context: 'En cylindrisk dåse skal rumme 330 ml — med så lidt blik som muligt.',
        step1: 'Bibetingelse: Voluminet er fast. Løs for $h$ for at eliminere en variabel:',
        step2: 'Opstil målfunktionen (overflade) og indsæt $h$ — nu afhænger alt kun af $r$:',
        step3: 'Differentier, sæt lig nul og løs for $r$ — dette er den optimale radius:',
        step4: 'Tjek anden afledede: Positiv betyder minimum — vi har virkelig fundet den mest sparsomme dåse:',
        amir_comment: 'Det er præcis som modelkomprimering: Fast nøjagtighed (bibetingelse), minimalt antal parametre (målfunktion). Jeg erstatter $r$ med "lagbredde" og $h$ med "dybde" — samme princip!',
      },
      profit_max: {
        title: 'Maksimal gevinst',
        context: 'En startup vil finde den optimale pris for sin abonnementsmodel.',
        step1: 'Opstil gevinstfunktionen: Indtægt minus omkostninger — her allerede i én variabel:',
        step2: 'Sæt afledede lig nul — det optimale antal:',
        step3: 'Anden afledede er negativ — altså et maksimum. Gevinsten bliver virkelig maksimal her:',
        step4: 'Beregn maksimal gevinst ved indsættelse:',
        amir_comment: 'Prisoptimering er en klassiker i Data Science. Hos DataPulse kunne vi beregne det optimale abonnementsniveau på præcis samme måde — maksimere gevinst under betingelsen, at brugere ikke springer fra.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Hyperparameter-optimering',
        desc: 'Læringsraten $\\alpha$ i Gradient Descent skal vælges optimalt: For stor = divergens, for lille = evigt langsomt. Den optimale $\\alpha$ minimerer valideringsfejlen.',
      },
      packaging: {
        title: 'Emballagedesign',
        desc: 'Minimalt materialforbrug ved fast volumen — præcis det løser ingeniører dagligt. Enhver drikkedåse, enhver karton er resultatet af en optimeringsopgave.',
      },
      solar_panel: {
        title: 'Solcellepanel-hældning',
        desc: 'Hældningsvinklen på et solcellepanel bestemmer energiudbyttet. At finde den optimale vinkel er en optimeringsopgave med solstanden som bibetingelse.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Differentiere målfunktionen med to variable direkte',
        correct: 'Først indsætte bibetingelsen, derefter differentiere',
        why: 'Med to variable kan du ikke bare differentiere mht. $x$ — $y$ ændrer sig med! Du SKAL bruge bibetingelsen til at udtrykke $y$ ved $x$. Først da afhænger alt af én variabel.',
        amir_warning: 'Det er som en ML-model med for mange frie parametre: Uden Constraints intet fornuftigt optimum. Bibetingelsen reducerer frihedsgraderne — præcis som regularisering.',
      },
      no_boundary: {
        wrong: 'Antage, at kritisk punkt er globalt optimum',
        correct: 'Sammenligne kritisk punkt med randværdier',
        why: 'På et begrænset interval $[a, b]$ kan optimum ligge på randen! $f\'(x_0) = 0$ giver kun lokale kandidater. Du skal sammenligne $f(x_0)$, $f(a)$ og $f(b)$.',
        amir_warning: 'I praksis har enhver parameter et tilladt område. Min læringsrate må ikke være negativ, batchstørrelsen ikke overskride GPU-hukommelsen. Tjekke randværdier er obligatorisk!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse kører — men Amir har brug for en ny metrik: Hvor mange sange lytter brugerne på i alt per uge? Han har lytteraten $r(t)$ som funktion af tid, men han har brug for totaltallet. "Rate gange tid giver mængde — men raten ændrer sig hele tiden", grubler Amir. Hans kammerat Kai griner: "Lyder som et integral."',
      challenge: 'Amir vil ud fra den tidsafhængige lytterate $r(t)$ beregne det samlede antal hørte sange — det fører ham til integralregningen.',
      outro: 'Amir kan nu danne stamfunktioner, beregne bestemte integraler og bestemme arealer mellem kurver. "Integration er det omvendte af differentiation — og i praksis summerer jeg dermed kontinuerte data op", opsummerer han. Hans Weekly-Listening-metrik står.',
    },
    objectives: {
      antiderivative: 'Danne stamfunktioner med potensreglen baglæns og forstå integrationskonstanten $C$',
      definite_integral: 'Beregne bestemte integraler med hovedsætningen: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Forstå analysens hovedsætning og anvende den ved arealberegninger',
    },
    explanation: {
      intro: 'Integration er det omvendte af differentiation: Når $F\'(x) = f(x)$, så er $F(x)$ en stamfunktion af $f(x)$. Den generelle stamfunktion indeholder altid konstanten $C$:',
      power_rule_integral: 'Potensreglen baglæns: Forhøj eksponenten med 1 og divider med den nye eksponent. Det virker for alle $n \\neq -1$:',
      amir_tip: 'Integration er som aggregering i databaser: Differentiation giver den momentane ændringsrate, integration summerer alt op. Når jeg kender downloads per time, giver integralet de samlede downloads over en tidsperiode.',
      definite_integral: 'Det bestemte integral beregner "totaleffekten" mellem to grænser. Hovedsætningen gør det simpelt: Stamfunktion i øvre grænse minus stamfunktion i nedre grænse:',
      area_interpretation: 'Geometrisk er det bestemte integral arealet mellem kurve og $x$-akse. OBS: Arealer under $x$-aksen tæller negativt! Til det faktiske areal har du brug for absolutværdien:',
    },
    concepts: {
      antiderivative: {
        title: 'Stamfunktion',
        desc: 'En funktion $F(x)$ med $F\'(x) = f(x)$. Konstanten $+C$ er vigtig, fordi forskellige stamfunktioner kun adskiller sig med en konstant.',
      },
      definite_integral: {
        title: 'Bestemt integral',
        desc: 'Beregner det fortegnsbestemte areal mellem $f(x)$ og $x$-aksen fra $a$ til $b$. Øvre grænse indsat minus nedre grænse indsat.',
      },
      fundamental_theorem: {
        title: 'Analysens hovedsætning',
        desc: 'Forbinder differentiation og integration: Differentiere og integrere er inverse operationer. Det bestemte integral kan beregnes via stamfunktionen.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Areal mellem parabel og $x$-akse',
        context: 'Amir visualiserer fordelingen af lyttetid som areal under en kurve.',
        step1: 'Bestem funktion og nulpunkter — det er vores integrationsgrænser:',
        step2: 'Dan stamfunktion med potensreglen baglæns:',
        step3: 'Beregn bestemt integral: Indsæt øvre grænse minus nedre grænse:',
        step4: 'Integralet er negativt, fordi parablen ligger under $x$-aksen. Til arealet tag absolutværdien:',
        amir_comment: 'Negative integraler giver mening i dataanalyse: Når $f(x)$ er afvigelsen fra gennemsnittet, viser et negativt integral, at værdierne samlet set lå under gennemsnittet.',
      },
      distance_from_velocity: {
        title: 'Beregne strækning ud fra hastighed',
        context: 'Hvor langt kører en selvkørende bil på 4 sekunder?',
        step1: 'Givet er hastighedsfunktionen:',
        step2: 'Totalstrækningen er integralet af hastigheden over tid:',
        step3: 'Dan stamfunktion — integrer hvert led for sig:',
        step4: 'Indsæt grænser og beregn differencen:',
        amir_comment: 'Sensordata kommer ind som rate — hastighed, datagennemstrømning, requests per sekund. Integralet gør det til totalmængde. Mit dashboard viser præcis det: $\\int_0^T r(t)\\,dt$ = totalstreams.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Dataaggregering over tid',
        desc: 'Når dataraten $r(t)$ er kendt, giver integralet totalmængden over en tidsperiode. Sådan beregner streamingtjenester månedlige lytteminutter ud fra data sekund for sekund.',
      },
      energy_consumption: {
        title: 'Energiforbrug',
        desc: 'Effekt $P(t)$ i watt gange tid giver energi i joule — men kun ved konstant effekt. Ved svingende effekt har du brug for integralet: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Sandsynligheder',
        desc: 'Sandsynligheden for, at en stokastisk variabel ligger mellem $a$ og $b$, er arealet under tæthedsfunktionen — altså et bestemt integral. Grundlaget for al statistik.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Glemme integrationskonstanten $C$ ved ubestemte integraler',
        correct: 'Altid tilføje $+ C$ ved ubestemt integral',
        why: 'Når $F\'(x) = 2x$, så er både $x^2$ og $x^2 + 7$ en stamfunktion. $+C$ repræsenterer alle mulige stamfunktioner. Ved bestemte integraler forkortes $C$ væk — der må du udelade den.',
        amir_warning: 'I praksis er $C$ begyndelsesbetingelsen: Hvor mange sange havde brugeren allerede hørt, før vi begyndte at måle? Uden $C$ mangler startværdien, og din beregning starter ved nul i stedet for den rigtige værdi.',
      },
      negative_area: {
        wrong: 'Fortolke integral direkte som areal, også når det er negativt',
        correct: 'Til rigtige arealer tag absolutværdien af integralværdierne',
        why: 'Integralet $\\int_a^b f(x)\\,dx$ kan være negativt, når $f(x) < 0$. Det er korrekt som fortegnsbestemt areal. Har du brug for det geometriske areal, skal du integrere $|f(x)|$ eller beregne delarealerne separat.',
        amir_warning: 'Forestil dig, at du beregner den samlede lyttetid og får et negativt resultat — det ville åbenbart være forkert. Ved arealproblemer altid tjekke, om funktionen skifter fortegn, og beregne delintervaller separat!',
      },
    },
  },
};
