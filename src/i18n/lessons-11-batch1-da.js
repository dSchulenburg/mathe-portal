export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Amirs ML-model til DataPulse leverer brugbare sanganbefalinger — men traeningen tager evigheder. "Gradient Descent er i princippet ikke andet end differentiation", forklarer hans matematikprofessor. "Naar du forstaar, hvordan differentiationsreglerne virker, forstaar du ogsaa, hvorfor din model laerer." Amir beslutter at gennemarbejde reglerne systematisk.',
      challenge: 'Amir vil forstaa, hvordan hans ML-model internt differentierer tabsfunktionen — til det har han brug for potens-, sum-, produkt- og kaedereglen.',
      outro: 'Amir har nu et solidt fundament: Potensreglen til simple led, sum- og faktorreglen til sammensatte udtryk, produktreglen til multiplikationer og kaedereglen til sammensatte funktioner. "Nu forstaar jeg endelig, hvad PyTorch goer i baggrunden med Autograd", siger han tilfreds.',
    },
    objectives: {
      power_rule: 'Anvende potensreglen sikkert: differentiere $f(x) = x^n$',
      constant_sum_rule: 'Beherske konstant- og sumreglen: differentiere led for led og beholde faktorer',
      product_quotient_rule: 'Anvende produkt- og kvotientreglen korrekt',
      chain_rule: 'Bruge kaedereglen sikkert ved sammensatte funktioner',
    },
    explanation: {
      intro: 'Potensreglen er den vigtigste basisregel: Du traekker eksponenten ned som faktor og reducerer eksponenten med 1. Dermed differentierer du enhver potensfunktion i en haandvending:',
      constant_factor: 'Konstante faktorer beholdes ved differentiation, og ved summer maa du differentiere led for led. Det goer sammensatte udtryk overskuelige:',
      amir_tip: 'I min ML-kode gemmer sig overalt summer og faktorer — tabsfunktionen er en enorm sum over alle datapunkter. At jeg maa differentiere hvert led for sig goer Backpropagation overhovedet muligt!',
      product_rule: 'Naar to funktioner multipliceres, maa du IKKE bare differentiere begge enkeltvis. I stedet gaelder produktreglen — "foerste gange den afledede af anden plus anden gange den afledede af foerste":',
      quotient_rule: 'Til broeker af funktioner findes kvotientreglen. Huskeregel: "NAT minus TAN gennem N i anden" (N = naevner, T = taeller, A = afledet):',
      chain_rule: 'Ved sammensatte funktioner — altsaa en funktion inde i en funktion — har du brug for kaedereglen. Du differentierer "udefra og ind" og multiplicerer med den indre afledede:',
    },
    concepts: {
      power_rule: {
        title: 'Potensreglen',
        desc: 'Grundreglen: Eksponenten bliver faktor, eksponenten falder med 1. Gaelder ogsaa for negative og broekeksponenter, f.eks. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Sum- og faktorregel',
        desc: 'Summer differentieres led for led, konstante faktorer beholdes. Dermed nedbryder du ethvert polynom i simple enkeltled.',
      },
      product_rule: {
        title: 'Produktreglen',
        desc: 'For produktet af to funktioner: Foerste afledt gange anden plus foerste gange anden afledt. Uundvaerlig, saa snart to variable udtryk multipliceres.',
      },
      chain_rule: {
        title: 'Kaedereglen',
        desc: 'Ydre funktion differentieres, indre staar, derefter multipliceres med den indre afledede. Hjertestykket i Backpropagation i neurale netvaerk.',
      },
    },
    examples: {
      power_sum: {
        title: 'Differentiere polynom med potens- og sumregel',
        context: 'Amir forenkler et led fra sin omkostningsfunktion.',
        step1: 'Givet er polynomiet — vi differentierer hvert led for sig:',
        step2: 'Potensreglen paa hvert led: Eksponent som faktor, eksponent minus 1. Konstanten $-7$ falder vaek:',
        step3: 'Sammensat giver den afledede funktion:',
        amir_comment: 'Praecis saadan ser gradienten af mine polynomiale features ud. Hvert led bidrager til haeldningen — og PyTorch goer det automatisk for tusindvis af parametre samtidigt.',
      },
      chain_rule: {
        title: 'Sammensat funktion med kaedereglen',
        context: 'Amir differentierer en aktiveringsfunktion, der indeholder en sammensaetning.',
        step1: 'Givet er en sammensat potensfunktion:',
        step2: 'Opdeling i ydre funktion $f(u) = u^3$ og indre funktion $g(x) = 2x^2 + 1$:',
        step3: 'Differentier ydre (potensreglen paa $u^3$), lad indre staa, gange indre afledede ($4x$):',
        step4: 'Ryddet op — faktor $4x$ trukket foran:',
        amir_comment: 'Kaedereglen er literally Backpropagation! Hvert lag i Neural Network er en sammensat funktion, og kaedereglen kaeder gradienterne fra lag til lag.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent i Machine Learning',
        desc: 'Enhver ML-model minimerer en tabsfunktion ved differentiation. Gradienten viser retningen af den stejleste stigning — vi gaar i den modsatte retning for at finde minimum.',
      },
      marginal_cost: {
        title: 'Graenseomkostninger i oekonomien',
        desc: 'Den afledede af omkostningsfunktionen $K(x)$ giver graenseomkostningerne: Hvad koster en produceret enhed mere? Virksomheder bruger det dagligt til priskalkulation.',
      },
      acceleration: {
        title: 'Acceleration i fysikken',
        desc: 'Hastighed er den afledede af vejen, acceleration den afledede af hastigheden. Din mobilsensor maaler praecis det: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'Den afledede af en konstant er konstanten selv',
        correct: 'Den afledede af en konstant er altid nul',
        why: 'En konstant har ingen haeldning — den aendrer sig ikke. Taenk paa $f(x) = 5$: Det er en vandret linje, altsaa er haeldningen overalt 0. Det gaelder for ethvert tal uden $x$.',
        amir_warning: 'Bias-leddet i min model er en konstant — dets afledede mht. $x$ er 0. Glemmer du det, faar gradienten en forkert offset, og traeningen divergerer.',
      },
      chain_rule_forgotten: {
        wrong: 'Glemme den indre afledede ved sammensatte funktioner',
        correct: 'Altid multiplicere med den indre afledede',
        why: 'Ved $[(3x+1)^4]\'$ er det ikke nok bare at traekke eksponenten ned. Du SKAL multiplicere med den afledede af det indre led $(3x+1)\' = 3$. Uden indre afledede mangler faktoren 3.',
        amir_warning: 'Forestil dig, at du glemmer den indre afledede i et lag af et Neural Network — gradienten ville vaere helt forkert, og modellen laerer nonsens. Kaedereglen er ikke valgfri!',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Amirs anbefalingsalgoritme spytter resultater ud — men er de virkelig optimale? "Du skal analysere tabsfunktionen fuldstaendigt", siger hans professor. "Hvor er minimaerne? Hvor er vendepunkterne?" Amir indser: En fuldstaendig kurveanalyse viser ham, om modellen virkelig har fundet det globale minimum eller sidder fast i et lokalt minimum.',
      challenge: 'Amir analyserer tabslandskabet for sin model: Bestemme nulpunkter, ekstrema, vendepunkter og monotonicitet for en funktion fuldstaendigt.',
      outro: 'Amir kan nu fuldstaendigt karakterisere enhver hel rational funktion: Finde nulpunkter, bestemme maksima og minima, beregne vendepunkter og aflase monotoniadfaerd. "Naar jeg tegner tabslandskabet saadan, ser jeg straks, om min optimizer er landet i den rigtige dal", siger han.',
    },
    objectives: {
      zeros_extrema: 'Systematisk bestemme nulpunkter og ekstremalpunkter for en funktion',
      inflection_points: 'Beregne vendepunkter og forstaa deres betydning for kurveforloebet',
      monotonicity_symmetry: 'Analysere monotoniadfaerd og symmetri for en funktion',
    },
    explanation: {
      intro: 'En kurveanalyse er den fuldstaendige analyse af en funktion. Vi begynder med nulpunkterne — de steder, hvor grafen skaerer $x$-aksen:',
      extrema: 'Ekstremalpunkter (maksima og minima) finder du der, hvor den foerste afledede er nul. Men pas paa: Ikke ethvert nulpunkt af $f\'$ er automatisk et ekstreum! Du har brug for den anden afledede til bekraeftelse:',
      amir_tip: 'Tabslandskabet for min model har mange lokale minima. Med kurveanalysen kan jeg tjekke, om et kritisk punkt virkelig er et minimum — eller blot et sadelpunkt, hvor optimizeren sidder fast.',
      inflection: 'Vendepunkter markerer overgangen mellem venstre- og hoejrekrumning. Her aendrer krumningsadfaerden sig — den anden afledede skifter fortegn:',
      monotonicity: 'Monotoniadfaerden fortaeller dig, hvor funktionen stiger, og hvor den falder. Du aflaeser det direkte af fortegnet for den foerste afledede:',
    },
    concepts: {
      extrema: {
        title: 'Ekstremalpunkter (maksima/minima)',
        desc: 'Noedvendig betingelse: $f\'(x_0) = 0$. Tilstraekkelig: $f\'\'(x_0) < 0$ giver maksimum, $f\'\'(x_0) > 0$ giver minimum. Begge betingelser tilsammen goer det sikkert.',
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
        title: 'Fuldstaendig kurveanalyse',
        context: 'Amir undersoejer en kubisk funktion — lignende tabsfunktioner med flere ekstrema.',
        step1: 'Givet er funktionen — vi analyserer den fuldstaendigt:',
        step2: 'Dan foerste afledede og bestem nulpunkter (noedvendig betingelse for ekstrema):',
        step3: 'Evaluer anden afledede i de kritiske punkter (tilstraekkelig betingelse): Negativ vaerdi = maksimum, positiv vaerdi = minimum:',
        step4: 'Bestem vendepunkt via $f\'\' = 0$ og bekraeft med tredje afledede:',
        amir_comment: 'Praecis saadan analyserer jeg tabslandskabet: Foerst finde kritiske punkter, derefter tjekke om det er minimum eller sadelpunkt. For hoejdimensionale funktioner goer min optimizer det numerisk — men princippet er identisk.',
      },
      graph_properties: {
        title: 'Udnytte symmetri og ekstrema',
        context: 'En symmetrisk funktion — halvdelen af arbejdet bortfalder pga. symmetri.',
        step1: 'Givet er en fjerdegradsfunktion — vi tjekker foerst symmetri:',
        step2: 'Indsaet $-x$: Alle eksponenter er lige, altsaa $f(-x) = f(x)$ — aksesymmetrisk! Ekstrema forekommer symmetrisk:',
        step3: 'Saet foerste afledede lig nul — pga. symmetri er det nok at finde de positive loesninger:',
        step4: 'Beregn funktionsvaerdier — takket vaere symmetri gaelder $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symmetri i data er guld vaerd: Hvis jeg ved, at min tabsfunktion er symmetrisk, behoever jeg kun at gennemsoge halvdelen af parameterrummet. Det halverer traeningstiden!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analysere datafordelinger',
        desc: 'Normalfordelingen har vendepunkter ved $\\mu \\pm \\sigma$. Kurveanalyse fortaeller dig, hvor de fleste datapunkter koncentrerer sig, og hvor spredningen begynder.',
      },
      profit_analysis: {
        title: 'Gevinstmaksimering',
        desc: 'Gevinstfunktionen $G(x)$ har et maksimum — den optimale produktionsmaengde. Kurveanalyse viser praecis, ved hvilket styktal gevinsten er maksimal.',
      },
      population_growth: {
        title: 'Befolkningsvaekst',
        desc: 'Vendepunktet for en vaekstkurve markerer oejeblikket, hvor vaeksten aftager. Epidemiologer bruger praecis denne analyse til infektionskurver.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Ethvert nulpunkt af $f\'$ er automatisk et ekstremalpunkt',
        correct: 'Nulpunkt af $f\'$ PLUS fortegnsskifte eller $f\'\' \\neq 0$ skal tjekkes',
        why: 'Ved $f(x) = x^3$ er $f\'(0) = 0$, men intet ekstremum — det er et sadelpunkt! Du SKAL tjekke den tilstraekkelige betingelse ($f\'\' \\neq 0$ eller fortegnsskifte af $f\'$).',
        amir_warning: 'I hoejere dimensioner hedder saadanne punkter "Saddle Points" — optimizeren sidder fast og tror, den har fundet et minimum. Altid tjekke den anden afledede!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ er nok for et vendepunkt',
        correct: '$f\'\'(x_0) = 0$ OG $f\'\'\'(x_0) \\neq 0$ bekraefter vendepunktet tilsammen',
        why: 'Ved $f(x) = x^4$ er $f\'\'(0) = 0$, men intet vendepunkt — krumningen skifter ikke! Den tredje afledede skal vaere forskellig fra nul for at garantere krumningsskiftet.',
        amir_warning: 'Samme faelde som ved ekstrema: Den noedvendige betingelse alene raekker aldrig. Altid tjekke den tilstraekkelige betingelse — ellers stoler du paa et forkert resultat.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse skal koere paa mobilen — men Amirs model kraever for meget hukommelse. "Du skal optimere netvaerksarkitekturen", siger teamkollegaen Sara. "Maksimal nojagtighed med minimalt hukommelsesforbrug." Amir indser: Det er en klassisk optimeringsopgave — optimere en stoerrelse, mens en anden er begraenset.',
      challenge: 'Amir vil finde den bedste modelarkitektur: Maksimal forudsigelseskvalitet under bibetingelsen med begraensede beregningsressourcer.',
      outro: 'Amir har forstaaet princippet: Opstille maalfunktion, indsaette bibetingelse, reducere til en variabel, differentiere, saette lig nul, tjekke. "Hvad enten det er daasedimensioner eller modelparametre — skemaet er altid det samme", konstaterer han. Hans model passer nu paa 50 MB.',
    },
    objectives: {
      setup_equations: 'Opstille maalfunktion og bibetingelse ud fra en praktisk sammenhaeng',
      optimize_constraints: 'Skabe en funktion af en variabel ved at indsaette bibetingelsen og optimere',
      verify_extremum: 'Tjekke med den anden afledede, om der foreligger et maksimum eller minimum, og tage hensyn til randvaerdier',
    },
    explanation: {
      intro: 'Ved optimeringsopgaver handler det altid om det samme: En stoerrelse skal vaere saa stor eller lille som muligt (maalfunktion), mens en begraensning gaelder (bibetingelse):',
      strategy: 'Strategien er altid ens: (1) Opstil maalfunktionen — hvad skal optimeres? (2) Find bibetingelsen — hvilken begraensning gaelder? (3) Loes bibetingelsen for en variabel og indsaet i maalfunktionen. (4) Differentier, saet lig nul, tjek.',
      amir_tip: 'Hyperparameter-tuning er praecis saadan en optimeringsopgave: Jeg vil minimere valideringsfejlen (maalfunktion), men min GPU-hukommelse er begraenset (bibetingelse). Skemaet fra matematikundervisningen fungerer 1:1!',
      substitution: 'Efter indsaettelse af bibetingelsen afhaenger maalfunktionen kun af en variabel. Nu differentieres som normalt, og det kritiske punkt tjekkes:',
      domain_check: 'Glem ikke definitionsmaengden! Ved reelle problemer er der ofte graenser (f.eks. $r > 0$ for en radius). Sammenlign funktionsvaerdien i det kritiske punkt med randvaerdierne — sommetider ligger optimum paa randen.',
    },
    concepts: {
      target_function: {
        title: 'Maalfunktion',
        desc: 'Stoerrelsen, der skal optimeres — maksimal gevinst, minimal overflade, bedste noejagtighed. Afhaenger i udgangspunktet ofte af to variable.',
      },
      constraint: {
        title: 'Bibetingelse',
        desc: 'Begraensningen, der gaelder — fast volumen, begraenset budget, begraensede parametre. Goer det muligt at eliminere en variabel og reducere maalfunktionen til en variabel.',
      },
      boundary_check: {
        title: 'Randvaerditjek',
        desc: 'Optimum kan ogsaa ligge paa randen af definitionsmaengden. Sammenlign altid $f(x_{opt})$ med funktionsvaerdierne paa raenderne $f(a)$ og $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Daase med minimalt materialforbrug',
        context: 'En cylindrisk daase skal rumme 330 ml — med saa lidt blik som muligt.',
        step1: 'Bibetingelse: Voluminet er fast. Loes for $h$ for at eliminere en variabel:',
        step2: 'Opstil maalfunktionen (overflade) og indsaet $h$ — nu afhaenger alt kun af $r$:',
        step3: 'Differentier, saet lig nul og loes for $r$ — dette er den optimale radius:',
        step4: 'Tjek anden afledede: Positiv betyder minimum — vi har virkelig fundet den mest sparsomme daase:',
        amir_comment: 'Det er praecis som modelkomprimering: Fast noejagtighed (bibetingelse), minimalt antal parametre (maalfunktion). Jeg erstatter $r$ med "lagbredde" og $h$ med "dybde" — samme princip!',
      },
      profit_max: {
        title: 'Maksimal gevinst',
        context: 'En startup vil finde den optimale pris for sin abonnementsmodel.',
        step1: 'Opstil gevinstfunktionen: Indtaegt minus omkostninger — her allerede i en variabel:',
        step2: 'Saet afledede lig nul — det optimale antal:',
        step3: 'Anden afledede er negativ — altsaa et maksimum. Gevinsten bliver virkelig maksimal her:',
        step4: 'Beregn maksimal gevinst ved indsaettelse:',
        amir_comment: 'Prisoptimering er en klassiker i Data Science. Hos DataPulse kunne vi beregne det optimale abonnementsniveau paa praecis samme maade — maksimere gevinst under betingelsen, at brugere ikke springer fra.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Hyperparameter-optimering',
        desc: 'Laeringsraten $\\alpha$ i Gradient Descent skal vaelges optimalt: For stor = divergens, for lille = evigt langsomt. Den optimale $\\alpha$ minimerer valideringsfejlen.',
      },
      packaging: {
        title: 'Emballagedesign',
        desc: 'Minimalt materialforbrug ved fast volumen — praecis det loeser ingenioerer dagligt. Enhver drikkedaase, enhver karton er resultatet af en optimeringsopgave.',
      },
      solar_panel: {
        title: 'Solcellepanel-haeldning',
        desc: 'Haeldningsvinklen paa et solcellepanel bestemmer energiudbyttet. At finde den optimale vinkel er en optimeringsopgave med solstanden som bibetingelse.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Differentiere maalfunktionen med to variable direkte',
        correct: 'Foerst indsaette bibetingelsen, derefter differentiere',
        why: 'Med to variable kan du ikke bare differentiere mht. $x$ — $y$ aendrer sig med! Du SKAL bruge bibetingelsen til at udtrykke $y$ ved $x$. Foerst da afhaenger alt af en variabel.',
        amir_warning: 'Det er som en ML-model med for mange frie parametre: Uden Constraints intet fornuftigt optimum. Bibetingelsen reducerer frihedsgraderne — praecis som regularisering.',
      },
      no_boundary: {
        wrong: 'Antage, at kritisk punkt er globalt optimum',
        correct: 'Sammenligne kritisk punkt med randvaerdier',
        why: 'Paa et begraenset interval $[a, b]$ kan optimum ligge paa randen! $f\'(x_0) = 0$ giver kun lokale kandidater. Du skal sammenligne $f(x_0)$, $f(a)$ og $f(b)$.',
        amir_warning: 'I praksis har enhver parameter et tilladt omraade. Min laeringsrate maa ikke vaere negativ, batchstoerrelsen ikke overskride GPU-hukommelsen. Tjekke randvaerdier er obligatorisk!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse koerer — men Amir har brug for en ny metrik: Hvor mange sange lytter brugerne paa i alt per uge? Han har lytteraten $r(t)$ som funktion af tid, men han har brug for totaltallet. "Rate gange tid giver maengde — men raten aendrer sig hele tiden", grubler Amir. Hans kammerat Kai griner: "Lyder som et integral."',
      challenge: 'Amir vil ud fra den tidsafhaengige lytterate $r(t)$ beregne det samlede antal hoerte sange — det foerer ham til integralregningen.',
      outro: 'Amir kan nu danne stamfunktioner, beregne bestemte integraler og bestemme arealer mellem kurver. "Integration er det omvendte af differentiation — og i praksis summerer jeg dermed kontinuerte data op", opsummerer han. Hans Weekly-Listening-metrik staar.',
    },
    objectives: {
      antiderivative: 'Danne stamfunktioner med potensreglen baglæns og forstaa integrationskonstanten $C$',
      definite_integral: 'Beregne bestemte integraler med hovedsaetningen: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Forstaa analysens hovedsaetning og anvende den ved arealberegninger',
    },
    explanation: {
      intro: 'Integration er det omvendte af differentiation: Naar $F\'(x) = f(x)$, saa er $F(x)$ en stamfunktion af $f(x)$. Den generelle stamfunktion indeholder altid konstanten $C$:',
      power_rule_integral: 'Potensreglen baglæns: Forhoej eksponenten med 1 og divider med den nye eksponent. Det virker for alle $n \\neq -1$:',
      amir_tip: 'Integration er som aggregering i databaser: Differentiation giver den momentane aendringsrate, integration summerer alt op. Naar jeg kender downloads per time, giver integralet de samlede downloads over en tidsperiode.',
      definite_integral: 'Det bestemte integral beregner "totaleffekten" mellem to graenser. Hovedsaetningen goer det simpelt: Stamfunktion i oevre graense minus stamfunktion i nedre graense:',
      area_interpretation: 'Geometrisk er det bestemte integral arealet mellem kurve og $x$-akse. OBS: Arealer under $x$-aksen taeller negativt! Til det faktiske areal har du brug for absolutvaerdien:',
    },
    concepts: {
      antiderivative: {
        title: 'Stamfunktion',
        desc: 'En funktion $F(x)$ med $F\'(x) = f(x)$. Konstanten $+C$ er vigtig, fordi forskellige stamfunktioner kun adskiller sig med en konstant.',
      },
      definite_integral: {
        title: 'Bestemt integral',
        desc: 'Beregner det fortegnsbestemte areal mellem $f(x)$ og $x$-aksen fra $a$ til $b$. Oevre graense indsat minus nedre graense indsat.',
      },
      fundamental_theorem: {
        title: 'Analysens hovedsaetning',
        desc: 'Forbinder differentiation og integration: Differentiere og integrere er inverse operationer. Det bestemte integral kan beregnes via stamfunktionen.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Areal mellem parabel og $x$-akse',
        context: 'Amir visualiserer fordelingen af lyttetid som areal under en kurve.',
        step1: 'Bestem funktion og nulpunkter — det er vores integrationsgraenser:',
        step2: 'Dan stamfunktion med potensreglen baglæns:',
        step3: 'Beregn bestemt integral: Indsaet oevre graense minus nedre graense:',
        step4: 'Integralet er negativt, fordi parablen ligger under $x$-aksen. Til arealet tag absolutvaerdien:',
        amir_comment: 'Negative integraler giver mening i dataanalyse: Naar $f(x)$ er afvigelsen fra gennemsnittet, viser et negativt integral, at vaerdierne samlet set laa under gennemsnittet.',
      },
      distance_from_velocity: {
        title: 'Beregne straekning ud fra hastighed',
        context: 'Hvor langt koerer en selvkoerende bil paa 4 sekunder?',
        step1: 'Givet er hastighedsfunktionen:',
        step2: 'Totalstraekningen er integralet af hastigheden over tid:',
        step3: 'Dan stamfunktion — integrer hvert led for sig:',
        step4: 'Indsaet graenser og beregn differencen:',
        amir_comment: 'Sensordata kommer ind som rate — hastighed, datagennemstroemning, requests per sekund. Integralet goer det til totalmaengde. Mit dashboard viser praecis det: $\\int_0^T r(t)\\,dt$ = totalstreams.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Dataaggregering over tid',
        desc: 'Naar dataraten $r(t)$ er kendt, giver integralet totalmaengden over en tidsperiode. Saadan beregner streamingtjenester maanedlige lytteminutter ud fra data sekund for sekund.',
      },
      energy_consumption: {
        title: 'Energiforbrug',
        desc: 'Effekt $P(t)$ i watt gange tid giver energi i joule — men kun ved konstant effekt. Ved svingende effekt har du brug for integralet: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Sandsynligheder',
        desc: 'Sandsynligheden for, at en stokastisk variabel ligger mellem $a$ og $b$, er arealet under taethedsfunktionen — altsaa et bestemt integral. Grundlaget for al statistik.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Glemme integrationskonstanten $C$ ved ubestemte integraler',
        correct: 'Altid tilfoeje $+ C$ ved ubestemt integral',
        why: 'Naar $F\'(x) = 2x$, saa er baade $x^2$ og $x^2 + 7$ en stamfunktion. $+C$ repraesenterer alle mulige stamfunktioner. Ved bestemte integraler forkortes $C$ vaek — der maa du udelade den.',
        amir_warning: 'I praksis er $C$ begyndelsesbetingelsen: Hvor mange sange havde brugeren allerede hoert, foer vi begyndte at maale? Uden $C$ mangler startvaerdien, og din beregning starter ved nul i stedet for den rigtige vaerdi.',
      },
      negative_area: {
        wrong: 'Fortolke integral direkte som areal, ogsaa naar det er negativt',
        correct: 'Til rigtige arealer tag absolutvaerdien af integralvaerdierne',
        why: 'Integralet $\\int_a^b f(x)\\,dx$ kan vaere negativt, naar $f(x) < 0$. Det er korrekt som fortegnsbestemt areal. Har du brug for det geometriske areal, skal du integrere $|f(x)|$ eller beregne delarealerne separat.',
        amir_warning: 'Forestil dig, at du beregner den samlede lyttetid og faar et negativt resultat — det ville aabenbart vaere forkert. Ved arealproblemer altid tjekke, om funktionen skifter fortegn, og beregne delintervaller separat!',
      },
    },
  },
};
