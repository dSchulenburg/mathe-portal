export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Partikelsystemet i "Hafenlichter 3D" ser fantastisk ud — gnister sprøjter, tåge bølger, ild flammer. Men Kai har et ydelsesproblem: tusindvis af partikler på én gang får GPU\'en til at svede. "Jeg skal beregne, hvor hurtigt partikler falmer, så jeg kan smide dem ud af hukommelsen i tide", forklarer han Mia. Svaret ligger i $e$-funktionen og dens modstykke, den naturlige logaritme — værktøjerne til alt, hvad der vokser eller henfalder eksponentielt.',
      challenge: 'Kai skal modellere partiklernes levetid matematisk: hvor hurtigt falmer en gnist? Hvornår er en røgpartikel så gennemsigtig, at den kan slettes? Til det har han brug for kædereglen for $e$-funktioner, afledede af $\\ln$ og at kunne løse henfaldsligninger.',
      outro: 'Med sammensatte $e$-funktioner og $\\ln$-afledede har Kai bygget et smart partikelsystem: hver gnist følger en præcis henfaldskurve, og hver røgpartikel genbruges nøjagtigt, når dens uigennemsigtighed falder under sanseværdien. "Kædereglen er nærmest min ydelsesoptimering", griner Kai. "GPU\'en takker mig med 60 i stedet for 30 FPS." Mia tilføjer: "Og det bedste — den samme matematik beskriver også radioaktivt henfald og opladningskurver for kondensatorer."',
    },
    objectives: {
      advanced_e_properties: 'Differentiere sammensatte $e$-funktioner med kædereglen: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Beherske den afledede af $\\ln(g(x))$ og bruge den til funktionsundersøgelser',
      composite_exp_functions: 'Analysere produkter af polynomier og $e$-funktioner (ekstremum, vendepunkter)',
      differential_equations: 'Forstå simple differentialligninger af typen $f\'(t) = k \\cdot f(t)$ og opstille henfaldsmodeller',
    },
    explanation: {
      intro: 'I 11. klasse lærte du grundlaget for $e^x$ og $\\ln(x)$. Nu bliver det alvor: vi differentierer sammensatte $e$-funktioner, analyserer kurver med $\\ln$ og løser henfaldsligninger. Nøglen er kædereglen — når der i eksponenten ikke kun står $x$, men en hel funktion $g(x)$, giver den ydre afledede $e^{g(x)}$, og den indre afledede $g\'(x)$ kommer til som faktor:',
      ln_derivative: 'Lige så elegant: den afledede af $\\ln(g(x))$ med kædereglen. Den naturlige logaritme "vender funktionen om" — den indre afledede står i tælleren og selve den indre funktion i nævneren:',
      kai_tip: 'I min 3D-motor dukker $e$-funktioner op overalt: partikelhenfald, tågetæthed, lydudtoning. Tricket er altid det samme — kædereglen. Når jeg differentierer $e^{-0{,}5t^2}$ til en gaussfordeling, er den indre funktion $g(t) = -0{,}5t^2$ og den indre afledede $g\'(t) = -t$. Indsæt, færdig. Så snart du har fanget det mønster én gang, kører det automatisk!',
      integration: 'Ved integration kører processen baglæns. For simple eksponentialfunktioner gælder: faktoren i eksponenten vandrer ned i nævneren. Og den berømte $\\frac{1}{x}$-regel fører direkte til $\\ln$:',
      decay_model: 'Eksponentielt henfald er DEN standardmodel for processer, hvor ændringsraten er proportional med den aktuelle værdi: $f\'(t) = -\\lambda \\cdot f(t)$. Løsningen er altid en $e$-funktion med negativ eksponent. Halveringstiden $t_{1/2}$ angiver, efter hvilken tid halvdelen af udgangsværdien er tilbage:',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Kædereglen for $e$-funktioner',
        desc: 'Ved $f(x) = e^{g(x)}$ er den ydre funktion $e^u$ (afledet: $e^u$) og den indre funktion $g(x)$. Resultatet: $e$-funktionen bliver stående, ganget med den indre afledede. Eksempel: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Afledet af $\\ln(g(x))$',
        desc: 'Kædereglen for logaritmen frembringer en brøk: indre afledet divideret med indre funktion. Det er især nyttigt, når $g(x)$ er et polynomium — f.eks. $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Vigtigt: definitionsmængden indskrænkes af $g(x) > 0$.',
      },
      exp_integration: {
        title: 'Logaritmisk integration',
        desc: 'Har en integrand formen $\\frac{f\'(x)}{f(x)}$, er stamfunktionen straks $\\ln|f(x)| + C$. Det er omvendingen af $\\ln$-afledningen og et af de vigtigste integrationstricks. Eksempel: $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Modellér partikelhenfald',
        context: 'I Kais partikelsystem starter 5000 gnistpartikler samtidig. Deres antal aftager eksponentielt — Kai vil beregne henfaldsraten og halveringstiden.',
        step1: 'Opstil henfaldsmodellen — $N_0 = 5000$ partikler, henfaldskonstant $\\lambda = 0{,}03\\,\\text{s}^{-1}$:',
        step2: 'Differentiér med kædereglen — indre funktion $g(t) = -0{,}03t$, indre afledet $g\'(t) = -0{,}03$:',
        step3: 'Beregn starthastigheden — ved $t = 0$ forsvinder 150 partikler i sekundet:',
        step4: 'Bestem halveringstiden — løs $N(t_{1/2}) = \\frac{N_0}{2}$ med $\\ln$:',
        kai_comment: 'Efter 23 sekunder er halvdelen af partiklerne væk — det vil sige, jeg kan frigive hukommelse allerede inden da til den næste eksplosion. I motoren sætter jeg sletningsgrænsen ved $5\\%$ uigennemsigtighed, hvilket er ca. $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Funktionsundersøgelse med $e$-funktion',
        context: 'Kai modellerer lysstyrken i et lysglimt: først stiger den, så falder den. Lysstyrkekurven har formen $f(x) = x^2 \\cdot e^{-x}$ — en typisk "glimt-funktion".',
        step1: 'Funktionen er givet — produkt af et polynomium og en aftagende $e$-funktion:',
        step2: 'Afledet med produktreglen: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — til den anden faktor bruger vi kædereglen:',
        step3: 'Nulpunkter for den afledede: $e^{-x} > 0$ altid, så det er kun $x(2-x) = 0$, der afgør:',
        step4: 'Bestem maksimum — beregn funktionsværdien ved $x = 2$:',
        kai_comment: 'Denne "stig-og-så-fald"-kurve er perfekt til lyseffekter. Ved $x = 0$ er alt mørkt, ved $x = 2$ maksimal lysstyrke, derefter en blød udtoning. I min shader bruger jeg netop denne funktion til mundingsglimt og eksplosionsglimt!',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Partikelsystemer i 3D-motorer',
        desc: 'Hver gnist, hver røgfane, hver ild i et videospil følger en eksponentiel henfaldskurve $N(t) = N_0 \\cdot e^{-\\lambda t}$. Henfaldskonstanten $\\lambda$ bestemmer, hvor hurtigt partiklerne falmer. I Unity og Unreal Engine indstiller du netop denne parameter, når du konfigurerer "Lifetime" og "Fade".',
      },
      signal_processing: {
        title: 'Lydbehandling og signaldæmpning',
        desc: 'Når du hører en rumklangseffekt i GarageBand eller et DJ-værktøj, klinger lyden eksponentielt ud: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. $e$-funktionen styrer lydstyrken, $\\sin$ svingningen. Også Bluetooth-signaler og wifi-rækkevidde følger denne model — derfor hakker streamingen, jo længere du er fra routeren.',
      },
      learning_curve: {
        title: 'Læringskurve og færdighedsudvikling',
        desc: 'Hvor hurtigt lærer du et nyt spil? Læringskurven $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ beskriver, hvordan færdigheder vokser hurtigt i begyndelsen og derefter nærmer sig et maksimum. Spildesignere bruger denne model til at designe sværhedskurver — og også din hjerne følger netop denne funktion, når du lærer gloser eller øver på et instrument.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Glemme den indre afledede: $(e^{3x})\' = e^{3x}$',
        correct: 'Anvend kædereglen: $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'Så snart der står mere end blot $x$ i eksponenten, SKAL kædereglen frem. Den indre funktion her er $g(x) = 3x$ med $g\'(x) = 3$. Den faktor må ikke mangle!',
        kai_warning: 'I min shader differentierede jeg engang $e^{-0{,}5t^2}$ og glemte faktoren $-t$. Resultat: partikler, der aldrig ændrede sig — som frossen røg. Siden tjekker jeg hver gang: står der mere end $x$ i eksponenten? Så kæderegel!',
      },
      ln_negative: {
        wrong: 'Glemme numerisktegnene: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Korrekt med numerisk værdi: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'Funktionen $\\frac{1}{x}$ er også defineret for negative $x$-værdier, men $\\ln(x)$ kun for $x > 0$. Numerisktegnene sikrer, at stamfunktionen gælder på hele definitionsmængden. I bestemte integraler med positive grænser kan du udelade tegnene — ved ubestemte integraler aldrig!',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Til "Hafenlichter 3D" bygger Kai en procedural banegenerator: broer, tunneller og huse skal opstå af matematiske kurver, der roteres om akser. "Forestil jer, jeg definerer en profil og lader den rotere — så har jeg en søjle, en kuppel eller et skibsskrog", sværmer Kai. Men hvordan beregner han det nøjagtige rumfang af disse 3D-legemer? Svaret: omdrejningslegemer, partiel integration og et par elegante integrationsteknikker.',
      challenge: 'Kai skal beregne rumfang af 3D-objekter, der opstår ved rotation af kurver. Desuden har han brug for partiel integration til komplekse belysningsformler og skal undersøge, om bestemte integraler overhovedet konvergerer.',
      outro: 'Banegeneratoren kører: Kai roterer kurveprofiler om akser og får perfekte 3D-legemer med nøjagtigt beregnet rumfang. "Partiel integration var nøglen til belysningsintegralerne", fortæller han Amir, "og uegentlige integraler viser mig, hvornår en lyseffekt har endelig samlet energi — selv når den teoretisk rækker uendeligt langt." Mia nikker: "Ingeniører bruger den samme matematik til at dimensionere beholdere, og fysikere til at beregne bølgeenergi."',
    },
    objectives: {
      integration_techniques: 'Anvende partiel integration og substitution sikkert',
      rotation_volumes: 'Beregne omdrejningsrumfang om $x$-aksen med $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Undersøge uegentlige integraler for konvergens og beregne dem',
      partial_integration: 'Bruge metoden partiel integration målrettet, når produkter skal integreres',
    },
    explanation: {
      intro: 'I 11. klasse lærte du bestemte integraler at kende som areal. Nu kommer tre nye teknikker til. Den første er partiel integration — "omvendingen" af produktreglen. Skal du integrere et produkt som $x \\cdot e^x$, deler du det op i $u$ og $v\'$:',
      substitution: 'Den anden teknik er substitution — "omvendingen" af kædereglen ved differentiation. Når en funktion "sidder inde i" en anden, erstatter du den indre funktion med en ny variabel:',
      kai_tip: 'Mit trick til partiel integration: "LIATE" — logaritmisk, invers trigonometrisk, algebraisk, trigonometrisk, eksponentiel. Det er den rækkefølge, du vælger $u$ i. Så ved $\\int x \\cdot e^x\\,\\mathrm{d}x$ er $u = x$ (algebraisk) og $v\' = e^x$ (eksponentiel). Ved $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$ er $u = \\ln(x)$ og $v\' = x$. Virker næsten altid!',
      rotation_volume: 'Nu bliver det tredimensionelt: roterer du grafen for $f(x)$ om $x$-aksen, opstår et omdrejningslegeme. Dets rumfang beregner du ved at forestille dig legemet sammensat af uendeligt mange tynde cirkelskiver — hver skive har radius $f(x)$:',
      improper: 'Hvad sker der, hvis en integrationsgrænse er $\\infty$? Eller hvis integranden bliver ubegrænset et sted? Så taler vi om uegentlige integraler. Du erstatter problemstedet med en grænseværdi og undersøger, om der kommer en endelig værdi ud:',
    },
    concepts: {
      partial_integration: {
        title: 'Partiel integration',
        desc: 'Omvendingen af produktreglen: du deler integranden op i $u$ (som differentieres) og $\\mathrm{d}v$ (som integreres). Mål: det nye integral $\\int v\\,\\mathrm{d}u$ skal være enklere end det oprindelige. Typisk anvendelse: produkter af polynomium og $e$-funktion eller af polynomium og trigonometri.',
      },
      rotation_volume: {
        title: 'Omdrejningsrumfang',
        desc: 'En funktionsgraf, der roterer om $x$-aksen, frembringer et 3D-legeme. Rumfanget fremkommer som summen af uendeligt mange cirkelskiver med radius $f(x)$ og tykkelse $\\mathrm{d}x$. Hver skive har rumfanget $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$ — lagt sammen (integreret) giver det formlen.',
      },
      improper_integral: {
        title: 'Uegentlige integraler',
        desc: 'Integraler med $\\infty$ som grænse eller med ubegrænset integrand. Du erstatter problemstedet med en variabel og danner grænseværdien. Eksisterer grænseværdien og er endelig, kaldes integralet konvergent — ellers divergent. Klassiker: $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ konvergerer, men $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ divergerer.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Omdrejningslegeme til banedesign',
        context: 'Kai vil generere en søjle, hvis profil følger kurven $f(x) = \\sqrt{x}$. Mellem $x = 0$ og $x = 4$ roterer kurven om $x$-aksen — hvor stort er søjlens rumfang?',
        step1: 'Definér profilen — kvadratrodsfunktionen på intervallet $[0;\\,4]$:',
        step2: 'Anvend formlen for omdrejningsrumfang — kvadrér $f(x)$ og sæt $\\pi$ foran:',
        step3: 'Find stamfunktionen og indsæt grænserne:',
        step4: 'Resultat — søjlen har et rumfang på $8\\pi$ rumfangsenheder:',
        kai_comment: 'Det er præcis den formel, min procedurale generator bruger! Jeg definerer kurveprofiler, roterer dem og kender straks rumfanget — vigtigt for fysiksimuleringer, så objekterne har den rigtige vægt.',
      },
      partial_int: {
        title: 'Partiel integration til belysning',
        context: 'I Kais lysberegnings-shader dukker integralet $\\int x \\cdot e^x\\,\\mathrm{d}x$ op — et produkt, der ikke kan integreres direkte.',
        step1: 'Vælg opdelingen: $u = x$ (bliver enklere ved differentiation), $v\' = e^x$ (er let at integrere):',
        step2: 'Bestem afledede og stamfunktioner:',
        step3: 'Indsæt i formlen — det nye integral er nu kun $\\int e^x\\,\\mathrm{d}x$:',
        step4: 'Forenkl færdigt — sæt uden for parentes, og du får en elegant form:',
        kai_comment: 'Øjeblikket, hvor det nye integral er enklere end det gamle — det er succesoplevelsen ved partiel integration. Bliver det mere kompliceret, har du valgt $u$ og $v\'$ forkert. Så byt dem bare om!',
      },
    },
    realworld: {
      '3d_printing': {
        title: '3D-print og rumfangsberegning i CAD',
        desc: 'Enhver 3D-printer skal vide, hvor meget materiale den bruger. Ved omdrejningssymmetriske dele (vaser, rør, dyser) beregner slicer-softwaren rumfanget med netop denne rotationsformel. Også i CAD-programmer som Fusion 360 ligger der integralregning — når du roterer et tværsnit, regner softwaren $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Lysfald i spilmotorer',
        desc: 'Hvor meget samlet lys modtager en scene fra en punktlyskilde? Intensiteten aftager med $I(r) = I_0 \\cdot e^{-\\alpha r}$. Det uegentlige integral $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ viser: den samlede energi er endelig! Derfor kan spilmotorer simulere lys med begrænset rækkevidde uden at ligge fysisk forkert.',
      },
      terrain_volume: {
        title: 'Terrængenerering og jordarbejde',
        desc: 'Ved vejbyggeprojekter og i Minecraft-agtige spil skal rumfanget af bakkelandskaber beregnes. Formlen $V = \\iint h(x,y)\\,\\mathrm{d}A$ lægger højden sammen over hele fladen — et todimensionalt integral. Bygningsingeniører beregner sådan jordudgravning, og spiludviklere datamængden til terræn-meshes.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Glemme kvadreringen: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Korrekt kvadreret: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Hver cirkelskive har arealet $\\pi r^2$ med $r = f(x)$. Uden kvadreringen beregner du ikke et cirkelareal, men noget helt andet. Huskeregel: "pi-r-i-anden" — kvadratet hører til cirkelformlen!',
        kai_warning: 'Jeg begik den fejl engang til en game jam — min søjle havde kun en brøkdel af det korrekte rumfang og klappede sammen i fysiksimuleringen. Siden skriver jeg altid formlen stort på skærmen: $V = \\pi \\int [f(x)]^2$!',
      },
      improper_no_limit: {
        wrong: 'Indsætte $\\infty$ direkte i stedet for at danne grænseværdien',
        correct: 'Formulér grænseværdien korrekt og undersøg konvergensen',
        why: '$\\infty$ er ikke et tal, man kan indsætte! Du skal altid danne grænseværdien $\\lim_{b \\to \\infty}$ og undersøge, om den eksisterer. Ellers overser man let, at et integral divergerer — som $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, der trods aftagende funktion ikke har nogen endelig værdi.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: '3D-verdenen i "Hafenlichter 3D" tager form: havnekraner, bygningsfacader, vandflader — alt består af trekanter, og hver trekant ligger i en plan. "Til realistisk belysning skal jeg beregne normalvektoren for hver flade", forklarer Kai. "Og til kollisionsdetektion har jeg brug for skæringspunkter mellem linjer og planer." Velkommen til rummets analytiske geometri — matematikken bag enhver 3D-motor.',
      challenge: 'Kai skal opstille planligninger ud fra tre punkter, beregne normalvektorer med krydsproduktet, finde skæringspunkter mellem linje og plan og bestemme afstande mellem objekter — alt sammen i realtid til sin spilmotor.',
      outro: 'Kais kollisionsdetektionssystem fungerer upåklageligt: projektiler rammer vægge, figurer står på gulve, og belysningen beregner for hver flade det perfekte lysindfald via normalvektorer. "Krydsproduktet er mit mest brugte værktøj", siger Kai. "To retningsvektorer ind, normalvektor ud — og så ved jeg, hvordan fladen ligger i rummet." Amir tilføjer: "Og afstandsformlen tjekker, om en spiller er tæt nok på et objekt til at samle det op."',
    },
    objectives: {
      plane_equations: 'Opstille planligninger på parameter-, normal- og koordinatform og omdanne dem indbyrdes',
      line_plane_intersection: 'Beregne skæringspunkter mellem linjer og planer og bestemme indbyrdes beliggenhed',
      distances_3d: 'Beregne afstande i rummet: punkt-plan, punkt-linje og linje-linje',
      cross_product: 'Beherske krydsproduktet og bruge det til beregning af normalvektorer',
    },
    explanation: {
      intro: 'Planer i det tredimensionale rum kan du beskrive på flere måder. Parameterformen starter ved et støttepunkt $\\vec{a}$ og udspænder planen med to retningsvektorer $\\vec{u}$ og $\\vec{v}$. Ethvert punkt i planen kan nås med passende værdier af $r$ og $s$:',
      normal_form: 'Ofte mere elegant er normalformen: en vektor $\\vec{n}$, der står vinkelret på planen (normalvektoren), og et punkt $\\vec{a}$ i planen er nok til at beskrive hele planen. Heraf kan koordinatformen udledes — én enkelt ligning med $x_1$, $x_2$ og $x_3$:',
      kai_tip: 'I min 3D-motor gemmer jeg hver flade på koordinatform — tre koefficienter og en konstant, det er det hele. Til rendering har jeg brug for normalvektoren til belysningen ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$ — skalarproduktet med lysvektoren giver lysstyrkeværdien). Og til fysik har jeg brug for skæringspunkter og afstande. Alle tre former er nyttige — hver til sit formål!',
      cross_product: 'Krydsproduktet $\\vec{u} \\times \\vec{v}$ giver en vektor, der står vinkelret på begge indgangsvektorer — perfekt til at beregne normalvektoren ud fra to retningsvektorer. Bemærk: rækkefølgen er vigtig (antikommutativ)!',
      distance_point_plane: 'Afstanden fra et punkt $P$ til en plan $E$ kan beregnes elegant med Hesses normalform. Du indsætter punktet i koordinatligningen, tager den numeriske værdi og dividerer med normalvektorens længde:',
    },
    concepts: {
      plane_equation: {
        title: 'Planligning på koordinatform',
        desc: 'Den mest kompakte fremstilling af en plan: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. Koefficienterne $n_1, n_2, n_3$ er normalvektorens koordinater, og $d$ fremkommer ved at indsætte et kendt punkt i planen. Ethvert punkt $(x_1, x_2, x_3)$, der opfylder ligningen, ligger i planen.',
      },
      cross_product: {
        title: 'Krydsprodukt',
        desc: 'Krydsproduktet af to vektorer $\\vec{u}$ og $\\vec{v}$ giver en ny vektor $\\vec{n}$, der står vinkelret på begge. Dens længde $|\\vec{u} \\times \\vec{v}|$ svarer til arealet af det udspændte parallelogram. Vigtigt: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ — rækkefølgen bestemmer retningen!',
      },
      distance_formula: {
        title: 'Afstand punkt-plan',
        desc: 'Den korteste afstand fra et punkt $P$ til en plan er længden af lodret fra $P$ ned på planen. Formlen $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ beregner denne afstand direkte ud fra koordinatformen. Den numeriske værdi i tælleren er afgørende — uden den kunne der komme en negativ "afstand" ud.',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Plan ud fra tre hjørnepunkter',
        context: 'Kai har en trekant i sin spilverden med hjørnepunkterne $A(1|0|2)$, $B(3|1|0)$ og $C(0|4|1)$. Han har brug for planligningen til belysning og kollisionsdetektion.',
        step1: 'Tre punkter givet — dan to retningsvektorer ud fra dem:',
        step2: 'Beregn retningsvektorerne $\\vec{u} = \\overrightarrow{AB}$ og $\\vec{v} = \\overrightarrow{AC}$:',
        step3: 'Beregn krydsproduktet $\\vec{n} = \\vec{u} \\times \\vec{v}$ udførligt — koordinat for koordinat efter formlen:',
        step4: 'Opstil koordinatformen — normalvektoren som koefficienter, $d$ ved indsættelse af $A$: $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$:',
        kai_comment: 'I motoren sker præcis det for hver trekant: tre vertices ind, beregn krydsproduktet, plan gemt. Normalvektoren bestemmer samtidig, hvilken vej fladen "kigger" — afgørende for belysning og backface culling!',
      },
      collision_detection: {
        title: 'Linje-plan-skæring (raycast)',
        context: 'Et projektil flyver retlinjet gennem rummet. Kai skal undersøge, om og hvor det rammer en væg — det er et raycast: skæringspunkt mellem linje og plan.',
        step1: 'Linje (flyvebane) og plan (væg) givet:',
        step2: 'Indsæt linjen i planligningen — koordinaterne fra $\\vec{x}(t)$ i stedet for $x_1, x_2, x_3$:',
        step3: 'Løs med hensyn til $t$ — saml sammen og forenkl:',
        step4: 'Beregn skæringspunktet — indsæt $t = 0$ i linjens ligning:',
        kai_comment: 'Ved $t = 0$ rammer linjen planen med det samme — projektilet starter altså lige ved væggen. I motoren tjekker jeg desuden $t > 0$ (fremadretning) og $0 \\leq t \\leq t_{\\max}$ (rækkevidde). Sådan filtrerer jeg træffere bag spilleren eller uden for rækkevidde fra.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: '3D-rendering og belysning',
        desc: 'Enhver 3D-motor beregner belysning via skalarproduktet af normalvektor og lysretning: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Jo mindre vinklen mellem lys og fladenormal er, desto lysere bliver fladen. Det er Lamberts belysningsmodel — grundlaget for realistisk lys i spil, film og AR-apps.',
      },
      architecture: {
        title: 'Arkitektur og BIM-software',
        desc: 'I arkitektprogrammer som AutoCAD eller Revit modelleres tagflader, vægge og ramper som planer. Koordinatformen beskriver beliggenheden i rummet, og normalvektoren viser orienteringen. Statikere beregner med planligninger, hvordan kræfter virker på skrå flader — fra taget til brodækket.',
      },
      gps_navigation: {
        title: 'GPS og dronenavigation',
        desc: 'GPS-koordinater er tredimensionale (længde, bredde, højde). Droner navigerer langs linjer i 3D-rummet og skal genkende forhindringer — modelleret som planer. Afstanden punkt-plan afgør, om en drone kommer for tæt på en husfacade. Selvkørende biler bruger den samme matematik til LIDAR-behandling.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Ignorere rækkefølgen: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Antikommutativ: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'Krydsproduktet er IKKE kommutativt — rækkefølgen bestemmer retningen af resultatvektoren (højrehåndsreglen). Ombytning ændrer fortegnet. Det kan føre til, at normalvektorer peger i den forkerte retning, hvilket inverterer hele belysningen.',
        kai_warning: 'Den fejl genkender man straks: flader, der er belyst "indefra", mens ydersiden er mørk. Sker, når normalvektoren peger den forkerte vej. Vær altid konsekvent med rækkefølgen — $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, aldrig omvendt!',
      },
      distance_abs_forgotten: {
        wrong: 'Glemme numerisk værdi i tælleren: $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'Med numerisk værdi: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: 'Afstande er altid positive! Uden den numeriske værdi i tælleren kan der komme en negativ værdi ud, hvis punktet ligger på den "anden side" af planen. Til en prøve koster det point, i en spilmotor fører det til objekter, der falder gennem vægge.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Før udgivelsen af "Hafenlichter 3D" venter den store playtest: 200 testere spiller en uge, og Kai skal træffe hårde beslutninger. Er balanceringen fair? Er nedbrudsraten acceptabel? "Mavefornemmelse er ikke nok", siger Mia. "Du har brug for en statistisk test, der fortæller dig, om en observeret effekt er ægte — eller bare tilfældig." Velkommen til hypotesetest: matematikken bag databaserede beslutninger.',
      challenge: 'Kai skal afgøre, om de observerede forskelle i playtesten er statistisk signifikante. Er helt A virkelig svagere end helt B, eller var han bare uheldig? Er den nye nedbrudsrate virkelig steget? Til det har han brug for nulhypoteser, signifikansniveauer og at kunne håndtere fejltyper.',
      outro: 'Playtesten er evalueret: Kai har statistisk påvist, at helt A er for svag ($p = 0{,}028 < 0{,}05$), og at nedbrudsraten i den nye build er steget signifikant. "Uden hypotesetest havde jeg måske overset de problemer", indrømmer han. Mia tilføjer: "Det smukke er: du ved nu præcis, hvor sikker din beslutning er — signifikansniveauet kvantificerer din risiko for at tage fejl."',
    },
    objectives: {
      null_hypothesis: 'Opstille nul- og alternativhypotese korrekt og skelne mellem en- og tosidede test',
      significance_level: 'Forstå signifikansniveauet $\\alpha$ og fortolke det som fejlsandsynlighed',
      test_decision: 'Bestemme forkastelsesområder og gennemføre testbeslutninger systematisk',
      error_types: 'Skelne mellem type 1- og type 2-fejl og forstå afvejningen mellem $\\alpha$ og $\\beta$',
    },
    explanation: {
      intro: 'En hypotesetest er en struktureret fremgangsmåde til at træffe en beslutning på grundlag af data. Du starter med en formodning (nulhypotesen $H_0$), indsamler data og undersøger, om data taler imod $H_0$. Alternativhypotesen $H_1$ beskriver det, du egentlig formoder:',
      significance: 'Signifikansniveauet $\\alpha$ er den maksimale sandsynlighed, hvormed du fejlagtigt forkaster $H_0$ (type 1-fejl). Typiske værdier er $\\alpha = 0{,}05$ (5\\%) eller $\\alpha = 0{,}01$ (1\\%). Jo mindre $\\alpha$, desto strengere er testen — men desto lettere overser man ægte effekter:',
      kai_tip: 'Tænk på hypotesetest som et anti-cheat-system: $H_0$ betyder "spilleren snyder IKKE". $\\alpha = 0{,}05$ betyder: kun i 5\\% af tilfældene udelukker jeg en ærlig spiller. Jeg vil holde $\\alpha$ lille for at beskytte de uskyldige — men gør jeg den for lille, slipper de ægte snydere igennem. Det er alfa-beta-afvejningen!',
      rejection_region: 'Forkastelsesområdet indeholder alle testresultater, der er så ekstreme, at vi forkaster $H_0$. Ved en venstresidet test ($H_1\\colon p < p_0$) ligger forkastelsesområdet til venstre — du beregner det største tal $k$, for hvilket $P(X \\leq k) \\leq \\alpha$ gælder:',
      error_types: 'Der kan ske to fejl: type 1-fejl ($\\alpha$) — du forkaster $H_0$, selv om den er sand ("falsk alarm"). Type 2-fejl ($\\beta$) — du beholder $H_0$, selv om $H_1$ er sand ("overset effekt"). Ved fast stikprøvestørrelse $n$ gælder: gør du $\\alpha$ mindre, bliver $\\beta$ større — og omvendt:',
    },
    concepts: {
      hypotheses: {
        title: 'Nul- og alternativhypotese',
        desc: '$H_0$ er "status quo"-antagelsen, der gælder, indtil data taler imod den. $H_1$ er det, du egentlig vil vise. Venstresidet test: $H_1\\colon p < p_0$. Højresidet test: $H_1\\colon p > p_0$. Tosidet test: $H_1\\colon p \\neq p_0$. Vigtigt: man "beviser" aldrig $H_1$ — man kan kun forkaste eller beholde $H_0$.',
      },
      significance_level: {
        title: 'Signifikansniveau $\\alpha$',
        desc: 'Den øvre grænse for sandsynligheden for en type 1-fejl. Ved $\\alpha = 0{,}05$ accepterer du en risiko på 5\\% for fejlagtigt at forkaste $H_0$. Sædvanlige værdier: $0{,}10$ (eksplorativ), $0{,}05$ (standard), $0{,}01$ (streng). $\\alpha$ fastlægges FØR testen — aldrig justeret bagefter!',
      },
      error_types: {
        title: 'Type 1- og type 2-fejl',
        desc: 'Type 1-fejl ($\\alpha$): $H_0$ forkastes, selv om den er sand — en "falsk alarm". Type 2-fejl ($\\beta$): $H_0$ beholdes, selv om $H_1$ er sand — en "overset effekt". Ved fast $n$ trækker $\\alpha$ og $\\beta$ i hver sin retning: mindre $\\alpha$ betyder større $\\beta$. Løsning: større stikprøvestørrelse $n$.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Balancetest: er helt A for svag?',
        context: 'I 100 kampe mellem helt A og helt B vinder helt A kun 40 gange. Kai formoder, at helt A er stillet ringere. Ved fair balancering burde $p = 0{,}5$ gælde.',
        step1: 'Fastlæg hypoteser og signifikansniveau — venstresidet, fordi Kai formoder, at A er for svag:',
        step2: 'Forsøgsopstilling: $n = 100$ kampe, $X$ = antal sejre til helt A, binomialfordelt:',
        step3: 'Beregn sandsynligheden for $X \\leq 40$ under $H_0$ (kumuleret binomialfordeling):',
        step4: 'Testbeslutning: $p$-værdi $0{,}028 < \\alpha = 0{,}05$ — $H_0$ forkastes. Helt A er signifikant for svag:',
        kai_comment: 'Det var det statistiske bevis, jeg havde brug for til balanceteamet. 40 ud af 100 ser "næsten okay" ud, men testen viser: ved fair balancering ville man kun se et så ekstremt resultat i 2{,}8\\% af tilfældene. Det er nok til en nerf-opdatering!',
      },
      crash_rate: {
        title: 'Undersøg nedbrudsraten efter opdateringen',
        context: 'Efter et patch skal nedbrudsraten højst være 2\\%. I 200 testsessioner går spillet ned 8 gange. Er det for meget?',
        step1: 'Opstil hypoteser — højresidet, fordi Kai vil undersøge, om raten ligger OVER 2\\%:',
        step2: 'Data: $n = 200$ sessioner, $X = 8$ nedbrud (observeret: $\\hat{p} = 4\\%$):',
        step3: 'Beregn sandsynligheden for $X \\geq 8$ under $H_0$ — det er $p$-værdien:',
        step4: 'Testbeslutning: $p$-værdi $0{,}042 < \\alpha = 0{,}05$ — nedbrudsraten er signifikant forhøjet:',
        kai_comment: 'Uden testen havde jeg måske sagt "8 nedbrud på 200 sessioner, det går nok". Men hypotesetesten viser: sandsynligheden for at se så mange nedbrud ved en ægte rate på 2\\% er under 5\\%. Patchet skal gennemarbejdes igen.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B-test i apps og på websteder',
        desc: 'Hver gang Netflix ændrer "Afspil nu"-knappen, eller Spotify tester en ny playlistevisning, kører der en hypotesetest. Version A mod version B: hvilken har flest klik? $p$-værdien afgør, om forskellen er ægte eller bare tilfældig variation. Også TikTok, YouTube og Instagram bruger A/B-test — enhver funktion, du ser, har bestået en signifikanstest.',
      },
      quality_assurance: {
        title: 'Kvalitetskontrol i produktionen',
        desc: 'På fabrikker testes der konstant: ligger kassationsraten under grænseværdien? Svarer fyldvægten i chipsposen til den trykte værdi? Hypotesetest beskytter forbrugerne — og virksomhederne mod dyre tilbagekaldelser. Bag enhver stikprøvekontrol ligger den samme matematik, som I lærer her.',
      },
      clinical_trials: {
        title: 'Kliniske studier og lægemidler',
        desc: 'Før et lægemiddel godkendes, skal det bestå en hypotesetest: $H_0$ siger "lægemidlet virker ikke bedre end placebo". Kun hvis $p$-værdien falder under $\\alpha = 0{,}05$, anses virkningen for påvist. De strenge regler ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) beskytter patienter mod uvirksomme lægemidler — men også mod for tidlige afvisninger af virksomme behandlinger.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ "bevist": $p > \\alpha$ betyder, at $H_0$ er sand',
        correct: 'Korrekt formuleret: $p > \\alpha$ betyder, at $H_0$ ikke kan forkastes',
        why: 'En hypotesetest kan aldrig bevise $H_0$ — kun forkaste eller beholde den. "Ikke forkaste" betyder: data er ikke nok til at modbevise $H_0$. Måske er effekten for lille, måske er stikprøven for lille. Derfor siger man "beholde" eller "ikke forkaste", aldrig "acceptere" eller "bevist".',
        kai_warning: 'Det er som uskyldsformodningen i retten: "ikke skyldig" betyder ikke "uskyldig" — det betyder bare, at beviserne ikke rækker. Ligeså med $H_0$: kan jeg ikke påvise, at helt A er svagere, betyder det ikke automatisk, at hun er perfekt balanceret!',
      },
      alpha_beta_confused: {
        wrong: 'Antagelse: mindre $\\alpha$ forbedrer automatisk alt',
        correct: 'Virkeligheden: mindre $\\alpha$ fører ved fast $n$ til større $\\beta$',
        why: 'Gør du testen strengere (mindre $\\alpha$), har du brug for mere ekstreme data for at forkaste $H_0$. Derved stiger sandsynligheden for at overse en ægte effekt ($\\beta$ stiger). Den eneste udvej: større stikprøve $n$ — så kan du holde både $\\alpha$ og $\\beta$ små.',
      },
    },
  },
};
