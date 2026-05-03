export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Partikelsystemet i "Havnelys 3D" ser storslaaet ud — gnister sprutter, taage driver, flammer blafer. Men Kai har et ydeevneproblem: Tusindvis af partikler samtidigt faar GPUen til at svede. "Jeg skal beregne, hvor hurtigt partikler falmer, saa jeg kan smide dem ud af hukommelsen i tide", forklarer han Mia. Svaret ligger i $e$-funktionen og dens modstykke, den naturlige logaritme.',
      challenge: 'Kai skal modellere partiklers levetid matematisk: Hvor hurtigt falmer en gnist? Hvornaar er en roegpartikel saa gennemsigtig, at den kan slettes?',
      outro: 'Med kaedede $e$-funktioner og $\\ln$-afledede har Kai bygget et smart partikelsystem. "Kaedereglen er min ydeevneoptimering", griner Kai. "GPUen takker mig med 60 i stedet for 30 FPS."',
    },
    objectives: {
      advanced_e_properties: 'Differentiere kaedede $e$-funktioner med kaedereglen: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Beherske den afledede af $\\ln(g(x))$ og bruge den til kurveanalyser',
      composite_exp_functions: 'Analysere produkter af polynomier og $e$-funktioner (ekstrema, vendepunkter)',
      differential_equations: 'Forstaa simple differentialligninger af typen $f\'(t) = k \\cdot f(t)$ og opstille henfaldsmodeller',
    },
    explanation: {
      intro: 'I klasse 11 laerte du grundlaget for $e^x$ og $\\ln(x)$. Nu bliver det alvor: Vi differentierer kaedede $e$-funktioner, analyserer kurver med $\\ln$ og loeser henfaldsligninger. Noeglen er kaedereglen:',
      ln_derivative: 'Lige saa elegant: Den afledede af $\\ln(g(x))$ med kaedereglen. Den naturlige logaritme "vender funktionen om":',
      kai_tip: 'I min 3D-motor dukker $e$-funktioner op overalt: Partikelhenfald, taagetaethed, audio-fadeout. Trikket er altid det samme — kaedereglen.',
      integration: 'Ved integration gaar processen baglæns. For simple eksponentialfunktioner gaelder: Faktoren i eksponenten havner i naevneren:',
      decay_model: 'Eksponentielt henfald er DEN standardmodel for processer, hvor aendringsraten er proportional med den aktuelle vaerdi: $f\'(t) = -\\lambda \\cdot f(t)$.',
    },
    concepts: {
      chain_rule_exp: { title: 'Kaederegel for $e$-funktioner', desc: 'Ved $f(x) = e^{g(x)}$: $e$-funktionen bliver staaende, multipliceret med den indre afledede.' },
      ln_derivative: { title: 'Afledet af $\\ln(g(x))$', desc: 'Kaedereglen for logaritmen skaber en broek: indre afledede divideret med indre funktion.' },
      exp_integration: { title: 'Logaritmisk integration', desc: 'Naar en integrand har formen $\\frac{f\'(x)}{f(x)}$, er stamfunktionen straks $\\ln|f(x)| + C$.' },
    },
    examples: {
      particle_decay: { title: 'Modellere partikelhenfald', context: 'I Kais partikelsystem starter 5000 gnistpartikler samtidigt.', step1: 'Opstil henfaldsmodel:', step2: 'Differentier med kaedereglen:', step3: 'Beregn startrate:', step4: 'Bestem halveringstid med $\\ln$:', kai_comment: 'Efter 23 sekunder er halvdelen af partiklerne vaek.' },
      ln_curve_analysis: { title: 'Kurveanalyse med $e$-funktion', context: 'Kai modellerer lysstyrken af et lysglimt: $f(x) = x^2 \\cdot e^{-x}$.', step1: 'Funktion givet:', step2: 'Differentier med produktreglen og kaedereglen:', step3: 'Nulpunkter for afledede:', step4: 'Bestem maksimum ved $x = 2$:', kai_comment: 'Denne "stigning-saa-fald"-kurve er perfekt til lyseffekter.' },
    },
    realworld: {
      particle_systems: { title: 'Partikelsystemer i 3D-motorer', desc: 'Enhver gnist, enhver roegfane, enhver flamme i et videospil foelger en eksponentiel henfaldskurve.' },
      signal_processing: { title: 'Lydbehandling og signaldæmpning', desc: 'Naar du hoerer en halleffekt, aftager tonen eksponentielt: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$.' },
      learning_curve: { title: 'Laeringskurve og faerdighedsprogression', desc: 'Laeringskurven $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ beskriver, hvordan faerdigheder vokser hurtigt i begyndelsen.' },
    },
    mistakes: {
      chain_rule_forgotten: { wrong: 'Glemme indre afledede: $(e^{3x})\' = e^{3x}$', correct: 'Kaederegel: $(e^{3x})\' = 3 \\cdot e^{3x}$', why: 'Saa snart der staar mere end bare $x$ i eksponenten, SKAL kaedereglen bruges.', kai_warning: 'Glem aldrig: Staar mere end $x$ i eksponenten? Saa kaederegel!' },
      ln_negative: { wrong: 'Glemme beloebsstreger: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$', correct: 'Korrekt med beloeb: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$', why: 'Beloebsstregerne sikrer, at stamfunktionen gaelder paa hele definitionsmaengden.' },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Til "Havnelys 3D" bygger Kai en procedural levelgenerator: Broer, tunneler og huse skal opstaa fra matematiske kurver, der roteres om akser. Men hvordan beregner han det praecise volumen af disse 3D-legemer? Svaret: Rotationsvoluminer, partiel integration og nogle elegante integrationsteknikker.',
      challenge: 'Kai skal beregne voluminer af 3D-objekter, der opstaaar ved rotation af kurver.',
      outro: 'Levelgeneratoren koerer: Kai roterer kurveprofiler om akser og faar perfekte 3D-legemer med praecist beregnet volumen.',
    },
    objectives: {
      integration_techniques: 'Anvende partiel integration og substitution sikkert',
      rotation_volumes: 'Beregne rotationsvoluminer om $x$-aksen med $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Tjekke uegentlige integraler for konvergens og beregne dem',
      partial_integration: 'Bruge partiel integration maalrettet, naar produkter skal integreres',
    },
    explanation: {
      intro: 'I klasse 11 laerte du bestemte integraler som areal. Nu kommer tre nye teknikker. Den foerste er partiel integration — "omvendt" produktregel:',
      substitution: 'Den anden teknik er substitution — "omvendt" kaederegel:',
      kai_tip: 'Mit trick til partiel integration: "LIATE" — Logaritme, Invers Trig, Algebraisk, Trigonometrisk, Eksponentiel.',
      rotation_volume: 'Nu bliver det tredimensionalt: Naar du roterer grafen af $f(x)$ om $x$-aksen, opstaaar et rotationslegeme. Voluminet beregnes som summen af uendeligt mange tynde cirkelskiver:',
      improper: 'Hvad sker der, naar en integrationsgraense er $\\infty$? Saa taler vi om uegentlige integraler:',
    },
    concepts: {
      partial_integration: { title: 'Partiel integration', desc: 'Omvendt produktregel: Du opdeler integranden i $u$ (differentieres) og $\\mathrm{d}v$ (integreres).' },
      rotation_volume: { title: 'Rotationsvolumen', desc: 'En funktionsgraf, der roterer om $x$-aksen, skaber et 3D-legeme. Voluminet er $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$.' },
      improper_integral: { title: 'Uegentlige integraler', desc: 'Integraler med $\\infty$ som graense. Konvergent, hvis graensevaerdien eksisterer og er endelig.' },
    },
    examples: {
      level_geometry: { title: 'Rotationslegeme til leveldesign', context: 'Kai vil generere en soejle med profil $f(x) = \\sqrt{x}$ mellem $x = 0$ og $x = 4$.', step1: 'Definer profil:', step2: 'Saet rotationsvolumenformlen op:', step3: 'Dan stamfunktion og indsaet graenser:', step4: 'Resultat — soejlen har volumen $8\\pi$:', kai_comment: 'Det er praecis den formel, min procedurale generator bruger!' },
      partial_int: { title: 'Partiel integration til belysning', context: 'I Kais lysberegning dukker integralet $\\int x \\cdot e^x\\,\\mathrm{d}x$ op.', step1: 'Vaelg opdeling: $u = x$, $v\' = e^x$:', step2: 'Bestem afledede og stamfunktioner:', step3: 'Indsaet i formlen:', step4: 'Forenkl:', kai_comment: 'OEjeblikket, naar det nye integral er simplere end det gamle — det er succesoplevelsen ved partiel integration.' },
    },
    realworld: {
      '3d_printing': { title: '3D-print og CAD-volumenberegning', desc: 'Enhver 3D-printer skal vide, hvor meget materiale den behoever. Ved rotationssymmetriske dele beregner slicer-softwaren voluminet med praecis denne rotationsformel.' },
      render_falloff: { title: 'Lys-falloff i spilmotorer', desc: 'Det uegentlige integral $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ viser: Totalenergien er endelig!' },
      terrain_volume: { title: 'Terraengenerering og jordarbejde', desc: 'Ved vejbyggeprojekter skal voluminet af bakkelaandskaber beregnes.' },
    },
    mistakes: {
      rotation_no_square: { wrong: 'Glemme at kvadrere: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$', correct: 'Korrekt kvadreret: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$', why: 'Hver cirkelskive har fladen $\\pi r^2$ med $r = f(x)$.', kai_warning: 'Pi-r-i-anden — kvadratet hoerer til cirkelformlen!' },
      improper_no_limit: { wrong: 'Direkte indsaette $\\infty$', correct: 'Formulere graensevaerdi korrekt og tjekke konvergens', why: '$\\infty$ er ikke et tal, man kan indsaette!' },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: '3D-verdenen i "Havnelys 3D" tager form: Havnekraner, bygningsfacader, vandflader — alt bestaar af trekanter, og hver trekant ligger i et plan. "Til realistisk belysning skal jeg beregne normalvektoren for hvert plan", forklarer Kai. Velkommen til analytisk geometri i rummet.',
      challenge: 'Kai skal opstille planligninger ud fra tre punkter, beregne normalvektorer med krydsprodukt, finde linje-plan-skaerings­punkter og bestemme afstande mellem objekter.',
      outro: 'Kais kollisionsdetektionssystem fungerer fejlfrit. "Kryds­produktet er mit mest brugte vaerktoej", siger Kai.',
    },
    objectives: {
      plane_equations: 'Opstille planligninger i parameter-, normal- og koordinatform og omforme mellem dem',
      line_plane_intersection: 'Beregne skaeringspunkter mellem linjer og planer og bestemme laegningsrelationer',
      distances_3d: 'Beregne afstande i rummet: Punkt-plan, punkt-linje og linje-linje',
      cross_product: 'Beherske kryds­produktet og bruge det til normalvektorberegning',
    },
    explanation: {
      intro: 'Planer i det tredimensionale rum kan beskrives paa forskellige maader. Parameterformen starter ved et stoettepunkt $\\vec{a}$ og spaender planet op med to retningsvektorer:',
      normal_form: 'Mere elegant er ofte normalformen: En vektor $\\vec{n}$, der staar vinkelret paa planet, og et punkt i planet er nok:',
      kai_tip: 'I min motor gemmer jeg hvert plan i koordinatform — tre koefficienter og en konstant, det er alt.',
      cross_product: 'Kryds­produktet $\\vec{u} \\times \\vec{v}$ giver en vektor, der staar vinkelret paa begge inputvektorer:',
      distance_point_plane: 'Afstanden fra et punkt $P$ til et plan $E$ kan beregnes elegant med Hesses normalform:',
    },
    concepts: {
      plane_equation: { title: 'Planligning i koordinatform', desc: 'Den mest kompakte fremstilling: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$.' },
      cross_product: { title: 'Krydsproduktet', desc: 'Kryds­produktet af to vektorer giver en ny vektor, der staar vinkelret paa begge. Belobet svarer til arealet af det opspoendte parallelogram. Vigtigt: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$.' },
      distance_formula: { title: 'Afstand punkt-plan', desc: 'Formlen $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ beregner afstanden direkte fra koordinatformen.' },
    },
    examples: {
      game_world_plane: { title: 'Plan ud fra tre hjoernepunkter', context: 'Kai har en trekant med hjoernepunkterne $A(1|0|2)$, $B(3|1|0)$ og $C(0|4|1)$.', step1: 'Tre punkter givet — dan to retningsvektorer:', step2: 'Beregn retningsvektorer:', step3: 'Beregn krydsproduktet:', step4: 'Opstil koordinatform:', kai_comment: 'I motoren sker praecis dette for hver trekant: tre vertices ind, krydsproduktet beregnet, plan gemt.' },
      collision_detection: { title: 'Linje-plan-skaering (Raycast)', context: 'Et projektil flyver retlinjet gennem rummet.', step1: 'Linje og plan givet:', step2: 'Indsaet linje i planligning:', step3: 'Loes for $t$:', step4: 'Beregn skaeringspunkt:', kai_comment: 'I motoren tjekker jeg desuden $t > 0$ og $0 \\leq t \\leq t_{\\max}$.' },
    },
    realworld: {
      '3d_rendering': { title: '3D-rendering og belysning', desc: 'Enhver 3D-motor beregner belysning via skalarproduktet af normalvektor og lysretning.' },
      architecture: { title: 'Arkitektur og BIM-software', desc: 'I arkitekturprogrammer modelleres tagflader, vægge og ramper som planer.' },
      gps_navigation: { title: 'GPS og dronenavigation', desc: 'GPS-koordinater er tredimensionale. Droner navigerer langs linjer i 3D-rummet.' },
    },
    mistakes: {
      cross_product_order: { wrong: 'Ignorere raekkefoelgen: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$', correct: 'Antikommutativ: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$', why: 'Kryds­produktet er IKKE kommutativt.', kai_warning: 'Denne bug genkender man straks: Flader, der er belyst "indefra".' },
      distance_abs_forgotten: { wrong: 'Glemme beloeb i taelleren', correct: 'Med beloeb: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$', why: 'Afstande er altid positive!' },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Foer lanceringen af "Havnelys 3D" staar den store playtest for doeren: 200 testere spiller i en uge, og Kai skal traeffe harde beslutninger. Er balanceringen fair? Er crashraten acceptabel? "Mavefornemmelse raekker ikke", siger Mia. "Du har brug for en statistisk test." Velkommen til hypotesetest.',
      challenge: 'Kai skal afgoere, om observerede forskelle i playtesten er statistisk signifikante.',
      outro: 'Playtesten er evalueret: Kai har statistisk bevist, at Helt A er for svag ($p = 0{,}028 < 0{,}05$). "Uden hypotesetest havde jeg maase ignoreret disse problemer", indroemmer han.',
    },
    objectives: {
      null_hypothesis: 'Opstille nul- og alternativhypotese korrekt og skelne mellem en- og tosidede tests',
      significance_level: 'Forstaa signifikansniveauet $\\alpha$ og fortolke det som fejlsandsynlighed',
      test_decision: 'Bestemme forkastelsesomraader og gennemfoere testbeslutninger systematisk',
      error_types: 'Skelne mellem fejl af type 1 og type 2 og forstaa afvejningen mellem $\\alpha$ og $\\beta$',
    },
    explanation: {
      intro: 'En hypotesetest er en struktureret fremgangsmaade til at traeffe en beslutning baseret paa data. Du starter med en antagelse (nulhypotesen $H_0$), samler data og tjekker, om data taler imod $H_0$:',
      significance: 'Signifikansniveauet $\\alpha$ er den maksimale sandsynlighed for fejlagtigt at forkaste $H_0$ (fejl type 1). Typiske vaerdier er $\\alpha = 0{,}05$ (5%) eller $\\alpha = 0{,}01$ (1%):',
      kai_tip: 'Taenk paa hypotesetests som et anti-snydesystem: $H_0$ betyder "Spilleren snyder IKKE". $\\alpha = 0{,}05$ betyder: Kun i 5% af tilfaeldene banner jeg en aerlig spiller.',
      rejection_region: 'Forkastelsesomraadet indeholder alle testresultater, der er saa ekstreme, at vi forkaster $H_0$:',
      error_types: 'To fejl kan ske: Fejl type 1 ($\\alpha$) — du forkaster $H_0$, selv om den er sand ("falsk alarm"). Fejl type 2 ($\\beta$) — du beholder $H_0$, selv om $H_1$ er sand ("overset effekt").',
    },
    concepts: {
      hypotheses: { title: 'Nul- og alternativhypotese', desc: '$H_0$ er "status quo"-antagelsen. $H_1$ er det, du egentlig vil vise. Vigtigt: Man "beviser" aldrig $H_1$ — man kan kun forkaste eller beholde $H_0$.' },
      significance_level: { title: 'Signifikansniveau $\\alpha$', desc: 'OEvregrænsen for sandsynligheden for en fejl type 1. $\\alpha$ fastsaettes FOER testen — aldrig justeret bagefter!' },
      error_types: { title: 'Fejl type 1 og 2', desc: 'Fejl type 1 ($\\alpha$): $H_0$ forkastes, selv om den er sand. Fejl type 2 ($\\beta$): $H_0$ beholdes, selv om $H_1$ er sand.' },
    },
    examples: {
      playtest_balance: { title: 'Balanceringstest: Er Helt A for svag?', context: 'I 100 kampe vinder Helt A kun 40 gange.', step1: 'Opstil hypoteser — venstresidig:', step2: 'Forsoeg: $n = 100$, $X$ binomialfordelt:', step3: 'Sandsynlighed for $X \\leq 40$ under $H_0$:', step4: 'Testbeslutning: $p$-vaerdi $0{,}028 < \\alpha = 0{,}05$ — $H_0$ forkastes:', kai_comment: 'Det var det statistiske bevis, jeg havde brug for til balanceteamet.' },
      crash_rate: { title: 'Crashrate efter opdatering', context: 'I 200 test-sessioner crasher spillet 8 gange.', step1: 'Opstil hypoteser — hoejresidig:', step2: 'Data: $n = 200$, $X = 8$:', step3: 'Beregn $p$-vaerdi:', step4: 'Testbeslutning: $p$-vaerdi $0{,}042 < \\alpha = 0{,}05$ — crashraten er signifikant forhojet:', kai_comment: 'Uden testen havde jeg maase sagt "8 crashes ved 200 sessioner, det gaar nok". Men hypotesetesten viser: Patchen skal omarbejdes.' },
    },
    realworld: {
      ab_testing: { title: 'A/B-testing i apps og websites', desc: 'Hver gang Netflix aendrer "Afspil nu"-knappen, koeres en hypotesetest.' },
      quality_assurance: { title: 'Kvalitetskontrol i produktionen', desc: 'I fabrikker testes stadig: Ligger udskodsraten under graensevaerdien?' },
      clinical_trials: { title: 'Kliniske studier og medikamenter', desc: 'Foer et medikament godkendes, skal det bestaa en hypotesetest.' },
    },
    mistakes: {
      accept_h0: { wrong: '$H_0$ "bevist": $p > \\alpha$ betyder $H_0$ er sand', correct: '$p > \\alpha$ betyder, at $H_0$ ikke kan forkastes', why: 'En hypotesetest kan aldrig bevise $H_0$ — kun forkaste eller beholde den.', kai_warning: 'Som uskyldsformodning i retten: "Ikke skyldig" betyder ikke "uskyldig".' },
      alpha_beta_confused: { wrong: 'Mindre $\\alpha$ forbedrer automatisk alt', correct: 'Mindre $\\alpha$ foerer ved fast $n$ til stoerre $\\beta$', why: 'Naar du goer testen strengere, kraeves mere ekstreme data for at forkaste $H_0$. Eneste udvej: Stoerre stikproeve $n$.' },
    },
  },
};
