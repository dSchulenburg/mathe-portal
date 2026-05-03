export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Partikkelsystemet i "Havnelys 3D" ser flott ut — gnister spruter, taake driver, flammer brenner. Men Kai har et ytelsesproblem: Tusenvis av partikler samtidig faar GPUen til aa svette. "Jeg maa beregne hvor raskt partikler blekner slik at jeg kan fjerne dem fra minnet i tide", forklarer han Mia. Svaret ligger i $e$-funksjonen og motparten, den naturlige logaritmen.',
      challenge: 'Kai maa modellere levetiden til partikler matematisk: Hvor raskt blekner en gnist? Naar er en roekpartikkel saa gjennomsiktig at den kan slettes?',
      outro: 'Med kjedede $e$-funksjoner og $\\ln$-deriverte har Kai bygget et smart partikkelsystem. "Kjerneregelen er min ytelsesoptimalisator", flirer Kai. "GPUen takker meg med 60 i stedet for 30 FPS."',
    },
    objectives: {
      advanced_e_properties: 'Derivere kjedede $e$-funksjoner med kjerneregelen: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Beherske den deriverte av $\\ln(g(x))$ og bruke den til kurveanalyser',
      composite_exp_functions: 'Analysere produkter av polynomer og $e$-funksjoner (ekstrema, vendepunkter)',
      differential_equations: 'Forsta enkle differensiallikninger av typen $f\'(t) = k \\cdot f(t)$ og sette opp henfallsmodeller',
    },
    explanation: {
      intro: 'I klasse 11 laerte du grunnlaget for $e^x$ og $\\ln(x)$. Naa blir det alvor: Vi deriverer kjedede $e$-funksjoner, analyserer kurver med $\\ln$ og loeser henfallslikninger. Nokkelen er kjerneregelen:',
      ln_derivative: 'Like elegant: Den deriverte av $\\ln(g(x))$ med kjerneregelen. Den naturlige logaritmen "snur funksjonen om" — den indre deriverte staar i telleren, den indre funksjonen i nevneren:',
      kai_tip: 'I 3D-motoren min dukker $e$-funksjoner opp overalt: Partikkelhenfall, taaketetthet, audio-fadeout. Trikset er alltid det samme — kjerneregelen.',
      integration: 'Ved integrasjon gaar prosessen baklengs. For enkle eksponentialfunksjoner gjelder: Faktoren i eksponenten havner i nevneren. Og den beroemte $\\frac{1}{x}$-regelen foerer direkte til $\\ln$:',
      decay_model: 'Eksponentiell nedbrytning er DEN standardmodellen for prosesser der endringsraten er proporsjonal med naavaerende verdi: $f\'(t) = -\\lambda \\cdot f(t)$. Loesningen er alltid en $e$-funksjon med negativ eksponent.',
    },
    concepts: {
      chain_rule_exp: { title: 'Kjerneregel for $e$-funksjoner', desc: 'Ved $f(x) = e^{g(x)}$ er den ytre funksjonen $e^u$ (derivert: $e^u$) og den indre $g(x)$. Resultatet: $e$-funksjonen staar, multiplisert med den indre deriverte.' },
      ln_derivative: { title: 'Derivert av $\\ln(g(x))$', desc: 'Kjerneregelen for logaritmen skaper en broek: indre deriverte delt paa indre funksjon.' },
      exp_integration: { title: 'Logaritmisk integrasjon', desc: 'Naar en integrand har formen $\\frac{f\'(x)}{f(x)}$, er stammfunksjonen umiddelbart $\\ln|f(x)| + C$.' },
    },
    examples: {
      particle_decay: { title: 'Modellere partikkelhenfall', context: 'I Kais partikkelsystem starter 5000 gnistpartikler samtidig. Antallet avtar eksponentielt.', step1: 'Sett opp henfallsmodellen:', step2: 'Deriver med kjerneregelen:', step3: 'Beregn startraten:', step4: 'Bestem halveringstiden med $\\ln$:', kai_comment: 'Etter 23 sekunder er halvparten av partiklene borte — da kan jeg allerede frigjore minne.' },
      ln_curve_analysis: { title: 'Kurveanalyse med $e$-funksjon', context: 'Kai modellerer lysstyrken til et lynspiss: $f(x) = x^2 \\cdot e^{-x}$.', step1: 'Funksjon gitt — produkt av polynom og avtagende $e$-funksjon:', step2: 'Deriver med produktregelen og kjerneregelen:', step3: 'Nullpunkter for deriverte:', step4: 'Bestem maksimum — ved $x = 2$:', kai_comment: 'Denne "stigning-deretter-fall"-kurven er perfekt for lyseffekter.' },
    },
    realworld: {
      particle_systems: { title: 'Partikkelsystemer i 3D-motorer', desc: 'Enhver gnist, enhver roekfane, enhver flamme i et videospill foelger en eksponentiell henfallskurve $N(t) = N_0 \\cdot e^{-\\lambda t}$.' },
      signal_processing: { title: 'Lydbehandling og signaldemping', desc: 'Naar du hoerer en halleffekt i GarageBand, avtar tonen eksponentielt: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$.' },
      learning_curve: { title: 'Laeringskurve og ferdighetsprogresjon', desc: 'Laeringskurven $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ beskriver hvordan ferdigheter vokser raskt i begynnelsen og deretter naermer seg et maksimum.' },
    },
    mistakes: {
      chain_rule_forgotten: { wrong: 'Glemme indre deriverte: $(e^{3x})\' = e^{3x}$', correct: 'Kjerneregel: $(e^{3x})\' = 3 \\cdot e^{3x}$', why: 'Saa snart det staar mer enn bare $x$ i eksponenten, MAA kjerneregelen til.', kai_warning: 'Glem aldri: Staar mer enn $x$ i eksponenten? Da kjerneregel!' },
      ln_negative: { wrong: 'Glemme beloepsstreker: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$', correct: 'Korrekt med beloep: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$', why: 'Beloepsstrekene sikrer at stammfunksjonen gjelder paa hele definisjonsomraadet.' },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'For "Havnelys 3D" bygger Kai en prosedyre-levelgenerator: Broer, tunneler og hus skal oppstaa fra matematiske kurver som roteres rundt akser. Men hvordan beregner han det eksakte volumet av disse 3D-kroppene? Svaret: Rotasjonsvolum, delvis integrasjon og noen elegante integrasjonsteknikker.',
      challenge: 'Kai maa beregne volum av 3D-objekter som oppstaar ved rotasjon av kurver. I tillegg trenger han delvis integrasjon for komplekse belysningsformler.',
      outro: 'Levelgeneratoren kjoerer: Kai roterer kurveprofiler rundt akser og faar perfekte 3D-kropper med noeaktig beregnet volum.',
    },
    objectives: {
      integration_techniques: 'Anvende delvis integrasjon og substitusjon sikkert',
      rotation_volumes: 'Beregne rotasjonsvolum rundt $x$-aksen med $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Sjekke uegentlige integraler for konvergens og beregne dem',
      partial_integration: 'Bruke delvis integrasjon maalrettet naar produkter maa integreres',
    },
    explanation: {
      intro: 'I klasse 11 laerte du bestemte integraler som areal. Naa kommer tre nye teknikker. Den foerste er delvis integrasjon — "omvendt" produktregel:',
      substitution: 'Den andre teknikken er substitusjon — "omvendt" kjerneregel ved derivasjon:',
      kai_tip: 'Mitt triks for delvis integrasjon: "LIATE" — Logaritme, Invers Trig, Algebraisk, Trigonometrisk, Eksponentiell. Det er rekkeffoelgen du velger $u$ i.',
      rotation_volume: 'Naa blir det tredimensjonalt: Naar du roterer grafen av $f(x)$ rundt $x$-aksen, oppstaar en rotasjonskropp. Volumet beregnes ved aa tenke seg kroppen sammensatt av uendelig mange tynne sirkelskiver:',
      improper: 'Hva skjer naar en integrasjonsgrense er $\\infty$? Da snakker vi om uegentlige integraler. Du erstatter problemstedet med en grenseverdi og sjekker om en endelig verdi kommer ut:',
    },
    concepts: {
      partial_integration: { title: 'Delvis integrasjon', desc: 'Omvendt produktregel: Du deler integranden i $u$ (deriveres) og $\\mathrm{d}v$ (integreres). Maal: Det nye integralet maa vaere enklere enn det opprinnelige.' },
      rotation_volume: { title: 'Rotasjonsvolum', desc: 'En funksjonsgraf som roterer rundt $x$-aksen skaper en 3D-kropp. Volumet er $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$.' },
      improper_integral: { title: 'Uegentlige integraler', desc: 'Integraler med $\\infty$ som grense. Du erstatter med en variabel og danner grenseverdien. Konvergent hvis grenseverdien eksisterer og er endelig.' },
    },
    examples: {
      level_geometry: { title: 'Rotasjonskropp for leveldesign', context: 'Kai vil generere en soeyle med profil $f(x) = \\sqrt{x}$ mellom $x = 0$ og $x = 4$.', step1: 'Definer profil:', step2: 'Sett opp rotasjonsvolumformel:', step3: 'Dann stammfunksjon og sett inn grenser:', step4: 'Resultat — soeylen har volum $8\\pi$:', kai_comment: 'Det er noeaktig formelen min prosedyregenerator bruker!' },
      partial_int: { title: 'Delvis integrasjon for belysning', context: 'I Kais lysberegning dukker integralet $\\int x \\cdot e^x\\,\\mathrm{d}x$ opp.', step1: 'Velg oppdeling: $u = x$, $v\' = e^x$:', step2: 'Bestem deriverte og stammfunksjoner:', step3: 'Sett inn i formelen:', step4: 'Forenkle:', kai_comment: 'Oeyeblikket naar det nye integralet er enklere enn det gamle — det er suksessopplevelsen ved delvis integrasjon.' },
    },
    realworld: {
      '3d_printing': { title: '3D-printing og CAD-volumberegning', desc: 'Enhver 3D-skriver maa vite hvor mye materiale den trenger. Ved rotasjonssymmetriske deler beregner slicer-programvaren volumet med noeaktig denne rotasjonsformelen.' },
      render_falloff: { title: 'Lys-falloff i spillmotorer', desc: 'Det uegentlige integralet $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ viser: Totalenergien er endelig!' },
      terrain_volume: { title: 'Terreng-generering og gravearbeider', desc: 'Ved veibyggingsprosjekter maa volumet av bakkelandskap beregnes.' },
    },
    mistakes: {
      rotation_no_square: { wrong: 'Glemme aa kvadrere: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$', correct: 'Korrekt kvadrert: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$', why: 'Hver sirkelskive har flaten $\\pi r^2$ med $r = f(x)$. Uten kvadreringen beregner du ingen sirkelflate.', kai_warning: 'Pi-r-kvadrat — kvadratet hoerer til sirkelformelen!' },
      improper_no_limit: { wrong: 'Direkte sette inn $\\infty$ i stedet for aa danne grenseverdi', correct: 'Formulere grenseverdi korrekt og sjekke konvergens', why: '$\\infty$ er ikke et tall man kan sette inn! Du maa alltid danne grenseverdien $\\lim_{b \\to \\infty}$.' },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: '3D-verdenen i "Havnelys 3D" tar form: Havnekraner, bygningsfasader, vannflater — alt bestaar av trekanter, og hver trekant ligger i et plan. "For realistisk belysning maa jeg beregne normalvektoren for hvert plan", forklarer Kai. Velkommen til analytisk geometri i rommet.',
      challenge: 'Kai maa sette opp planlikninger fra tre punkter, beregne normalvektorer med kryssproduktet, finne linje-plan-skjaringspunkter og bestemme avstander mellom objekter.',
      outro: 'Kais kollisjonsdeteksjonssystem fungerer feilfritt. "Kryssproduktet er mitt mest brukte verktoey", sier Kai.',
    },
    objectives: {
      plane_equations: 'Sette opp planlikninger i parameter-, normal- og koordinatform og omforme mellom dem',
      line_plane_intersection: 'Beregne skjaringspunkter mellom linjer og plan og bestemme posisjonsrelasjoner',
      distances_3d: 'Beregne avstander i rommet: Punkt-plan, punkt-linje og linje-linje',
      cross_product: 'Beherske kryssproduktet og bruke det til normalvektorberegning',
    },
    explanation: {
      intro: 'Plan i det tredimensjonale rommet kan beskrives paa ulike maater. Parameterformen starter ved et stoettepunkt $\\vec{a}$ og spenner opp planet med to retningsvektorer:',
      normal_form: 'Mer elegant er ofte normalformen: En vektor $\\vec{n}$ som staar vinkelrett paa planet, og et punkt i planet er nok:',
      kai_tip: 'I motoren min lagrer jeg hvert plan i koordinatform — tre koeffisienter og en konstant, det er alt.',
      cross_product: 'Kryssproduktet $\\vec{u} \\times \\vec{v}$ gir en vektor som staar vinkelrett paa begge inngangsvektorene — perfekt for aa beregne normalvektoren:',
      distance_point_plane: 'Avstanden fra et punkt $P$ til et plan $E$ kan beregnes elegant med Hesses normalform:',
    },
    concepts: {
      plane_equation: { title: 'Planlikning i koordinatform', desc: 'Den mest kompakte fremstillingen: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. Koeffisientene er komponentene til normalvektoren.' },
      cross_product: { title: 'Kryssprodukt', desc: 'Kryssproduktet av to vektorer gir en ny vektor som staar vinkelrett paa begge. Beloepet tilsvarer arealet av det oppspente parallellogrammet. Viktig: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$.' },
      distance_formula: { title: 'Avstand punkt-plan', desc: 'Formelen $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ beregner avstanden direkte fra koordinatformen.' },
    },
    examples: {
      game_world_plane: { title: 'Plan fra tre hjoernepunkter', context: 'Kai har en trekant med hjoernepunktene $A(1|0|2)$, $B(3|1|0)$ og $C(0|4|1)$.', step1: 'Tre punkter gitt — dann to retningsvektorer:', step2: 'Beregn retningsvektorer:', step3: 'Beregn kryssprodukt:', step4: 'Sett opp koordinatform:', kai_comment: 'I motoren skjer noeaktig dette for hver trekant: tre vertekser inn, kryssprodukt beregnet, plan lagret.' },
      collision_detection: { title: 'Linje-plan-skjaering (Raycast)', context: 'Et prosjektil flyr rett gjennom rommet. Kai maa sjekke om og hvor det treffer en vegg.', step1: 'Linje (flybane) og plan (vegg) gitt:', step2: 'Sett linje inn i planlikning:', step3: 'Loes for $t$:', step4: 'Beregn skjaringspunkt:', kai_comment: 'I motoren sjekker jeg i tillegg $t > 0$ (fremoverretning) og $0 \\leq t \\leq t_{\\max}$ (rekkevidde).' },
    },
    realworld: {
      '3d_rendering': { title: '3D-rendering og belysning', desc: 'Enhver 3D-motor beregner belysning via skalarproduktet av normalvektor og lysretning: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$.' },
      architecture: { title: 'Arkitektur og BIM-programvare', desc: 'I arkitekturprogrammer modelleres takflater, vegger og ramper som plan.' },
      gps_navigation: { title: 'GPS og dronenavigasjon', desc: 'GPS-koordinater er tredimensjonale. Droner navigerer langs linjer i 3D-rommet og maa gjenkjenne hindringer.' },
    },
    mistakes: {
      cross_product_order: { wrong: 'Ignorere rekkeffoelgen: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$', correct: 'Antikommutativ: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$', why: 'Kryssproduktet er IKKE kommutativt — rekkeffoelgen bestemmer retningen til resultatvektoren.', kai_warning: 'Denne buggen gjenkjenner man straks: Flater som er belyst "innenfra".' },
      distance_abs_forgotten: { wrong: 'Glemme beloep i telleren', correct: 'Med beloep: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$', why: 'Avstander er alltid positive! Uten beloepet kan en negativ verdi komme ut.' },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Foer lansering av "Havnelys 3D" staar den store playtesten for tur: 200 testere spiller i en uke, og Kai maa ta harde avgjorelser. Er balanseringen rettferdig? Er krasjraten akseptabel? "Magefoeelse holder ikke", sier Mia. "Du trenger en statistisk test." Velkommen til hypotesetesting.',
      challenge: 'Kai maa avgjoere om observerte forskjeller i playtesten er statistisk signifikante.',
      outro: 'Playtesten er evaluert: Kai har statistisk bevist at Helt A er for svak ($p = 0{,}028 < 0{,}05$). "Uten hypotesetester ville jeg kanskje ha ignorert disse problemene", innroemmer han.',
    },
    objectives: {
      null_hypothesis: 'Sette opp null- og alternativhypotese korrekt og skille mellom en- og tosidige tester',
      significance_level: 'Forsta signifikansnivaaet $\\alpha$ og tolke det som feilsannsynlighet',
      test_decision: 'Bestemme forkastningsomraader og gjennomfoere testbeslutninger systematisk',
      error_types: 'Skille mellom feil av type 1 og type 2 og forsta avveiningen mellom $\\alpha$ og $\\beta$',
    },
    explanation: {
      intro: 'En hypotesetest er en strukturert fremgangsmaate for aa ta en beslutning basert paa data. Du starter med en antakelse (nullhypotesen $H_0$), samler data og sjekker om dataene taler mot $H_0$:',
      significance: 'Signifikansnivaaet $\\alpha$ er den maksimale sannsynligheten for aa feilaktig forkaste $H_0$ (feil type 1). Typiske verdier er $\\alpha = 0{,}05$ (5%) eller $\\alpha = 0{,}01$ (1%):',
      kai_tip: 'Tenk paa hypotesetester som et anti-juksesystem: $H_0$ betyr "Spilleren jukser IKKE". $\\alpha = 0{,}05$ betyr: Bare i 5% av tilfellene utestenger jeg en aerlig spiller.',
      rejection_region: 'Forkastningsomraadet inneholder alle testresultater som er saa ekstreme at vi forkaster $H_0$:',
      error_types: 'To feil kan skje: Feil type 1 ($\\alpha$) — du forkaster $H_0$ selv om den stemmer ("falsk alarm"). Feil type 2 ($\\beta$) — du beholder $H_0$ selv om $H_1$ stemmer ("savnet effekt").',
    },
    concepts: {
      hypotheses: { title: 'Null- og alternativhypotese', desc: '$H_0$ er "status quo"-antakelsen. $H_1$ er det du egentlig vil vise. Viktig: Man "beviser" aldri $H_1$ — man kan bare forkaste eller beholde $H_0$.' },
      significance_level: { title: 'Signifikansnivaa $\\alpha$', desc: 'OEvregrensen for sannsynligheten for en feil type 1. Ved $\\alpha = 0{,}05$ aksepterer du en 5%-risiko for aa forkaste $H_0$ feilaktig.' },
      error_types: { title: 'Feil type 1 og 2', desc: 'Feil type 1 ($\\alpha$): $H_0$ forkastes selv om den er sann. Feil type 2 ($\\beta$): $H_0$ beholdes selv om $H_1$ er sann. Ved fast $n$ er $\\alpha$ og $\\beta$ motrettet.' },
    },
    examples: {
      playtest_balance: { title: 'Balanseringstest: Er Helt A for svak?', context: 'I 100 kamper mellom Helt A og Helt B vinner Helt A bare 40 ganger.', step1: 'Sett opp hypoteser — venstresidig fordi Kai mistenker at A er for svak:', step2: 'Forseoeksoppsett: $n = 100$, $X$ binomialfordelt:', step3: 'Sannsynlighet for $X \\leq 40$ under $H_0$:', step4: 'Testbeslutning: $p$-verdi $0{,}028 < \\alpha = 0{,}05$ — $H_0$ forkastes:', kai_comment: 'Det var det statistiske beviset jeg trengte for balanseteamet.' },
      crash_rate: { title: 'Krasjrate etter oppdatering', context: 'Etter en patch skal krasjraten vaere maks 2%. I 200 test-sesjoner krasjer spillet 8 ganger.', step1: 'Sett opp hypoteser — hoeyersidig:', step2: 'Data: $n = 200$, $X = 8$:', step3: 'Beregn $p$-verdi:', step4: 'Testbeslutning: $p$-verdi $0{,}042 < \\alpha = 0{,}05$ — krasjraten er signifikant forhoeyet:', kai_comment: 'Uten testen hadde jeg kanskje sagt "8 krasj ved 200 sesjoner, det gaar nok". Men hypotesetesten viser: Patchen maa omarbeides.' },
    },
    realworld: {
      ab_testing: { title: 'A/B-testing i apper og nettsteder', desc: 'Hver gang Netflix endrer "Spill naa"-knappen, kjoeres en hypotesetest. $p$-verdien avgjoer om forskjellen er ekte.' },
      quality_assurance: { title: 'Kvalitetskontroll i produksjonen', desc: 'I fabrikker testes stadig: Ligger utskuddsraten under grenseverdien? Hypotesetester beskytte forbrukere.' },
      clinical_trials: { title: 'Kliniske studier og medikamenter', desc: 'Foer et medikament godkjennes, maa det bestaa en hypotesetest: $H_0$ sier "Medikamentet virker ikke bedre enn placebo".' },
    },
    mistakes: {
      accept_h0: { wrong: '$H_0$ "bevist": $p > \\alpha$ betyr $H_0$ er sann', correct: '$p > \\alpha$ betyr at $H_0$ ikke kan forkastes', why: 'En hypotesetest kan aldri bevise $H_0$ — bare forkaste eller beholde den. "Ikke forkaste" betyr: Dataene strekker ikke til for aa motbevise $H_0$.', kai_warning: 'Som uskyldspresumsjon i retten: "Ikke skyldig" betyr ikke "uskyldig".' },
      alpha_beta_confused: { wrong: 'Antakelse: Mindre $\\alpha$ forbedrer automatisk alt', correct: 'Mindre $\\alpha$ foerer ved fast $n$ til stoerre $\\beta$', why: 'Naar du gjoer testen strengere (mindre $\\alpha$), trenger du mer ekstreme data for aa forkaste $H_0$. Dermed oeker sannsynligheten for aa overse en ekte effekt ($\\beta$ oeker). Eneste utvei: Stoerre utvalg $n$.' },
    },
  },
};
