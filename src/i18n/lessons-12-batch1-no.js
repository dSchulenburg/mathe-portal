export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Partikkelsystemet i "Hafenlichter 3D" ser praktfullt ut — gnister spruter, tåke bølger, ild flammer. Men Kai har et ytelsesproblem: tusenvis av partikler samtidig får GPU-en til å svette. "Jeg må regne ut hvor fort partikler falmer, så jeg kan kaste dem ut av minnet i tide", forklarer han Mia. Svaret ligger i $e$-funksjonen og motstykket, den naturlige logaritmen — verktøyene for alt som vokser eller henfaller eksponentielt.',
      challenge: 'Kai må modellere partiklenes levetid matematisk: hvor fort falmer en gnist? Når er en røykpartikkel så gjennomsiktig at den kan slettes? Til det trenger han kjerneregelen for $e$-funksjoner, deriverte av $\\ln$ og å kunne løse henfallslikninger.',
      outro: 'Med sammensatte $e$-funksjoner og $\\ln$-deriverte har Kai bygd et smart partikkelsystem: hver gnist følger en presis henfallskurve, og hver røykpartikkel gjenbrukes nøyaktig når gjennomsiktigheten faller under sanseterskelen. "Kjerneregelen er nærmest ytelsesoptimaliseringen min", gliser Kai. "GPU-en takker meg med 60 i stedet for 30 FPS." Mia legger til: "Og det beste — den samme matematikken beskriver også radioaktivt henfall og ladekurver for kondensatorer."',
    },
    objectives: {
      advanced_e_properties: 'Derivere sammensatte $e$-funksjoner med kjerneregelen: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Beherske den deriverte av $\\ln(g(x))$ og bruke den til funksjonsdrøfting',
      composite_exp_functions: 'Analysere produkter av polynomer og $e$-funksjoner (ekstremalpunkter, vendepunkter)',
      differential_equations: 'Forstå enkle differensiallikninger av typen $f\'(t) = k \\cdot f(t)$ og sette opp henfallsmodeller',
    },
    explanation: {
      intro: 'I 11. trinn lærte du grunnlaget for $e^x$ og $\\ln(x)$. Nå blir det alvor: vi deriverer sammensatte $e$-funksjoner, analyserer kurver med $\\ln$ og løser henfallslikninger. Nøkkelen er kjerneregelen — når det i eksponenten ikke bare står $x$, men en hel funksjon $g(x)$, gir den ytre deriverte $e^{g(x)}$, og den indre deriverte $g\'(x)$ kommer i tillegg som faktor:',
      ln_derivative: 'Like elegant: den deriverte av $\\ln(g(x))$ med kjerneregelen. Den naturlige logaritmen "snur funksjonen" — den indre deriverte står i telleren og selve den indre funksjonen i nevneren:',
      kai_tip: 'I 3D-motoren min dukker $e$-funksjoner opp overalt: partikkelhenfall, tåketetthet, lyduttoning. Trikset er alltid det samme — kjerneregelen. Når jeg deriverer $e^{-0{,}5t^2}$ til en gaussfordeling, er den indre funksjonen $g(t) = -0{,}5t^2$ og den indre deriverte $g\'(t) = -t$. Sett inn, ferdig. Så snart du har fanget mønsteret én gang, går det automatisk!',
      integration: 'Ved integrasjon går prosessen baklengs. For enkle eksponentialfunksjoner gjelder: faktoren i eksponenten vandrer ned i nevneren. Og den berømte $\\frac{1}{x}$-regelen fører rett til $\\ln$:',
      decay_model: 'Eksponentielt henfall er DEN standardmodellen for prosesser der endringsraten er proporsjonal med den aktuelle verdien: $f\'(t) = -\\lambda \\cdot f(t)$. Løsningen er alltid en $e$-funksjon med negativ eksponent. Halveringstiden $t_{1/2}$ angir etter hvilken tid halvparten av utgangsverdien er igjen:',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Kjerneregelen for $e$-funksjoner',
        desc: 'Ved $f(x) = e^{g(x)}$ er den ytre funksjonen $e^u$ (derivert: $e^u$) og den indre funksjonen $g(x)$. Resultatet: $e$-funksjonen blir stående, ganget med den indre deriverte. Eksempel: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Derivert av $\\ln(g(x))$',
        desc: 'Kjerneregelen for logaritmen gir en brøk: indre derivert delt på indre funksjon. Det er særlig nyttig når $g(x)$ er et polynom — f.eks. $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Viktig: definisjonsmengden begrenses av $g(x) > 0$.',
      },
      exp_integration: {
        title: 'Logaritmisk integrasjon',
        desc: 'Har en integrand formen $\\frac{f\'(x)}{f(x)}$, er den antideriverte straks $\\ln|f(x)| + C$. Det er omvendingen av $\\ln$-derivasjonen og et av de viktigste integrasjonstriksene. Eksempel: $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Modellér partikkelhenfall',
        context: 'I Kais partikkelsystem starter 5000 gnistpartikler samtidig. Antallet avtar eksponentielt — Kai vil regne ut henfallsraten og halveringstiden.',
        step1: 'Sett opp henfallsmodellen — $N_0 = 5000$ partikler, henfallskonstant $\\lambda = 0{,}03\\,\\text{s}^{-1}$:',
        step2: 'Derivér med kjerneregelen — indre funksjon $g(t) = -0{,}03t$, indre derivert $g\'(t) = -0{,}03$:',
        step3: 'Regn ut starthastigheten — ved $t = 0$ forsvinner 150 partikler i sekundet:',
        step4: 'Bestem halveringstiden — løs $N(t_{1/2}) = \\frac{N_0}{2}$ med $\\ln$:',
        kai_comment: 'Etter 23 sekunder er halvparten av partiklene borte — det vil si at jeg kan frigjøre minne allerede før det til neste eksplosjon. I motoren setter jeg slettegrensen ved $5\\%$ dekkevne, som er ca. $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Funksjonsdrøfting med $e$-funksjon',
        context: 'Kai modellerer lysstyrken i et lysglimt: først stiger den, så faller den. Lysstyrkekurven har formen $f(x) = x^2 \\cdot e^{-x}$ — en typisk "glimt-funksjon".',
        step1: 'Funksjonen er gitt — produkt av et polynom og en avtakende $e$-funksjon:',
        step2: 'Derivert med produktregelen: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — til den andre faktoren trenger vi kjerneregelen:',
        step3: 'Nullpunkter for den deriverte: $e^{-x} > 0$ alltid, så det er bare $x(2-x) = 0$ som avgjør:',
        step4: 'Bestem maksimum — regn ut funksjonsverdien ved $x = 2$:',
        kai_comment: 'Denne "stig-og-så-fall"-kurven er perfekt til lyseffekter. Ved $x = 0$ er alt mørkt, ved $x = 2$ maksimal lysstyrke, deretter en myk uttoning. I shaderen min bruker jeg nettopp denne funksjonen til munningsglimt og eksplosjonsglimt!',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Partikkelsystemer i 3D-motorer',
        desc: 'Hver gnist, hver røykfane, hver ild i et videospill følger en eksponentiell henfallskurve $N(t) = N_0 \\cdot e^{-\\lambda t}$. Henfallskonstanten $\\lambda$ bestemmer hvor fort partiklene falmer. I Unity og Unreal Engine stiller du inn nettopp denne parameteren når du konfigurerer "Lifetime" og "Fade".',
      },
      signal_processing: {
        title: 'Lydbehandling og signaldemping',
        desc: 'Når du hører en romklangseffekt i GarageBand eller et DJ-verktøy, klinger lyden ut eksponentielt: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. $e$-funksjonen styrer lydstyrken, $\\sin$ svingningen. Også Bluetooth-signaler og wifi-rekkevidde følger denne modellen — derfor hakker strømmingen jo lenger unna ruteren du er.',
      },
      learning_curve: {
        title: 'Læringskurve og ferdighetsutvikling',
        desc: 'Hvor fort lærer du et nytt spill? Læringskurven $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ beskriver hvordan ferdigheter vokser raskt i starten og deretter nærmer seg et maksimum. Spilldesignere bruker denne modellen til å utforme vanskelighetskurver — og også hjernen din følger nettopp denne funksjonen når du pugger gloser eller øver på et instrument.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Glemme den indre deriverte: $(e^{3x})\' = e^{3x}$',
        correct: 'Bruk kjerneregelen: $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'Så snart det står mer enn bare $x$ i eksponenten, MÅ kjerneregelen fram. Den indre funksjonen her er $g(x) = 3x$ med $g\'(x) = 3$. Den faktoren kan ikke mangle!',
        kai_warning: 'I shaderen min deriverte jeg en gang $e^{-0{,}5t^2}$ og glemte faktoren $-t$. Resultat: partikler som aldri endret seg — som frossen røyk. Siden sjekker jeg hver gang: står det mer enn $x$ i eksponenten? Da kjerneregel!',
      },
      ln_negative: {
        wrong: 'Glemme absoluttverditegnene: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Korrekt med absoluttverdi: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'Funksjonen $\\frac{1}{x}$ er også definert for negative $x$-verdier, men $\\ln(x)$ bare for $x > 0$. Absoluttverditegnene sikrer at den antideriverte gjelder på hele definisjonsmengden. I bestemte integraler med positive grenser kan du utelate tegnene — ved ubestemte integraler aldri!',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Til "Hafenlichter 3D" bygger Kai en prosedural banegenerator: broer, tunneler og hus skal oppstå av matematiske kurver som roteres om akser. "Tenk dere at jeg definerer en profil og lar den rotere — så har jeg en søyle, en kuppel eller et skipsskrog", sverger Kai. Men hvordan regner han ut det nøyaktige volumet til disse 3D-legemene? Svaret: omdreiningslegemer, delvis integrasjon og noen elegante integrasjonsteknikker.',
      challenge: 'Kai må regne ut volumer av 3D-objekter som oppstår ved rotasjon av kurver. Dessuten trenger han delvis integrasjon til komplekse belysningsformler og må undersøke om bestemte integraler i det hele tatt konvergerer.',
      outro: 'Banegeneratoren kjører: Kai roterer kurveprofiler om akser og får perfekte 3D-legemer med nøyaktig beregnet volum. "Delvis integrasjon var nøkkelen til belysningsintegralene", forteller han Amir, "og uegentlige integraler viser meg når en lyseffekt har endelig samlet energi — selv når den teoretisk rekker uendelig langt." Mia nikker: "Ingeniører bruker den samme matematikken til å dimensjonere beholdere, og fysikere til å regne ut bølgeenergi."',
    },
    objectives: {
      integration_techniques: 'Bruke delvis integrasjon og substitusjon sikkert',
      rotation_volumes: 'Regne ut omdreiningsvolum om $x$-aksen med $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Undersøke uegentlige integraler for konvergens og regne dem ut',
      partial_integration: 'Bruke metoden delvis integrasjon målrettet når produkter skal integreres',
    },
    explanation: {
      intro: 'I 11. trinn ble du kjent med bestemte integraler som areal. Nå kommer tre nye teknikker i tillegg. Den første er delvis integrasjon — "omvendingen" av produktregelen. Skal du integrere et produkt som $x \\cdot e^x$, deler du det opp i $u$ og $v\'$:',
      substitution: 'Den andre teknikken er substitusjon — "omvendingen" av kjerneregelen ved derivasjon. Når en funksjon "sitter inni" en annen, erstatter du den indre funksjonen med en ny variabel:',
      kai_tip: 'Trikset mitt for delvis integrasjon: "LIATE" — logaritmisk, invers trigonometrisk, algebraisk, trigonometrisk, eksponentiell. Det er rekkefølgen du velger $u$ i. Så ved $\\int x \\cdot e^x\\,\\mathrm{d}x$ er $u = x$ (algebraisk) og $v\' = e^x$ (eksponentiell). Ved $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$ er $u = \\ln(x)$ og $v\' = x$. Fungerer nesten alltid!',
      rotation_volume: 'Nå blir det tredimensjonalt: roterer du grafen til $f(x)$ om $x$-aksen, oppstår et omdreiningslegeme. Volumet regner du ut ved å tenke deg legemet satt sammen av uendelig mange tynne sirkelskiver — hver skive har radius $f(x)$:',
      improper: 'Hva skjer om en integrasjonsgrense er $\\infty$? Eller om integranden blir ubegrenset et sted? Da snakker vi om uegentlige integraler. Du erstatter problemstedet med en grenseverdi og undersøker om det kommer en endelig verdi ut:',
    },
    concepts: {
      partial_integration: {
        title: 'Delvis integrasjon',
        desc: 'Omvendingen av produktregelen: du deler integranden opp i $u$ (som deriveres) og $\\mathrm{d}v$ (som integreres). Mål: det nye integralet $\\int v\\,\\mathrm{d}u$ må være enklere enn det opprinnelige. Typisk anvendelse: produkter av polynom og $e$-funksjon eller av polynom og trigonometri.',
      },
      rotation_volume: {
        title: 'Omdreiningsvolum',
        desc: 'En funksjonsgraf som roterer om $x$-aksen, danner et 3D-legeme. Volumet framkommer som summen av uendelig mange sirkelskiver med radius $f(x)$ og tykkelse $\\mathrm{d}x$. Hver skive har volumet $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$ — summert (integrert) gir det formelen.',
      },
      improper_integral: {
        title: 'Uegentlige integraler',
        desc: 'Integraler med $\\infty$ som grense eller med ubegrenset integrand. Du erstatter problemstedet med en variabel og danner grenseverdien. Eksisterer grenseverdien og er endelig, kalles integralet konvergent — ellers divergent. Klassiker: $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ konvergerer, men $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ divergerer.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Omdreiningslegeme til banedesign',
        context: 'Kai vil generere en søyle med en profil som følger kurven $f(x) = \\sqrt{x}$. Mellom $x = 0$ og $x = 4$ roterer kurven om $x$-aksen — hvor stort er volumet til søylen?',
        step1: 'Definér profilen — kvadratrotfunksjonen på intervallet $[0;\\,4]$:',
        step2: 'Bruk formelen for omdreiningsvolum — kvadrer $f(x)$ og sett $\\pi$ foran:',
        step3: 'Finn den antideriverte og sett inn grensene:',
        step4: 'Resultat — søylen har et volum på $8\\pi$ volumenheter:',
        kai_comment: 'Det er nøyaktig den formelen den prosedurale generatoren min bruker! Jeg definerer kurveprofiler, roterer dem og kjenner straks volumet — viktig for fysikksimuleringer, så objektene har riktig vekt.',
      },
      partial_int: {
        title: 'Delvis integrasjon til belysning',
        context: 'I Kais lysberegningsshader dukker integralet $\\int x \\cdot e^x\\,\\mathrm{d}x$ opp — et produkt som ikke lar seg integrere direkte.',
        step1: 'Velg oppdelingen: $u = x$ (blir enklere ved derivasjon), $v\' = e^x$ (er lett å integrere):',
        step2: 'Bestem deriverte og antideriverte:',
        step3: 'Sett inn i formelen — det nye integralet er nå bare $\\int e^x\\,\\mathrm{d}x$:',
        step4: 'Forenkl ferdig — sett utenfor parentes, og du får en elegant form:',
        kai_comment: 'Øyeblikket da det nye integralet er enklere enn det gamle — det er mestringsfølelsen ved delvis integrasjon. Blir det mer komplisert, har du valgt $u$ og $v\'$ feil. Da er det bare å bytte om!',
      },
    },
    realworld: {
      '3d_printing': {
        title: '3D-printing og volumberegning i CAD',
        desc: 'Enhver 3D-printer må vite hvor mye materiale den trenger. Ved omdreiningssymmetriske deler (vaser, rør, dyser) regner slicer-programvaren ut volumet med nettopp denne rotasjonsformelen. Også i CAD-program som Fusion 360 ligger det integralregning — når du roterer et tverrsnitt, regner programvaren $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Lysfall i spillmotorer',
        desc: 'Hvor mye samlet lys får en scene fra en punktlyskilde? Intensiteten avtar med $I(r) = I_0 \\cdot e^{-\\alpha r}$. Det uegentlige integralet $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ viser: den samlede energien er endelig! Derfor kan spillmotorer simulere lys med begrenset rekkevidde uten å ligge fysisk feil an.',
      },
      terrain_volume: {
        title: 'Terrenggenerering og masseflytting',
        desc: 'Ved veiprosjekter og i Minecraft-liknende spill må volumet av kupert terreng regnes ut. Formelen $V = \\iint h(x,y)\\,\\mathrm{d}A$ summerer høyden over hele flaten — et todimensjonalt integral. Byggingeniører regner slik ut masseuttak, og spillutviklere datamengden til terreng-mesher.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Glemme kvadreringen: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Korrekt kvadrert: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Hver sirkelskive har arealet $\\pi r^2$ med $r = f(x)$. Uten kvadreringen regner du ikke ut et sirkelareal, men noe helt annet. Huskeregel: "pi-r-i-andre" — kvadratet hører til sirkelformelen!',
        kai_warning: 'Jeg gjorde den feilen en gang på en game jam — søylen min hadde bare en brøkdel av det riktige volumet og klappet sammen i fysikksimuleringen. Siden skriver jeg alltid formelen stort på skjermen: $V = \\pi \\int [f(x)]^2$!',
      },
      improper_no_limit: {
        wrong: 'Sette inn $\\infty$ direkte i stedet for å danne grenseverdien',
        correct: 'Formulér grenseverdien korrekt og undersøk konvergensen',
        why: '$\\infty$ er ikke et tall man kan sette inn! Du må alltid danne grenseverdien $\\lim_{b \\to \\infty}$ og undersøke om den eksisterer. Ellers overser man lett at et integral divergerer — som $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, som tross avtakende funksjon ikke har noen endelig verdi.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: '3D-verdenen i "Hafenlichter 3D" tar form: havnekraner, bygningsfasader, vannflater — alt består av trekanter, og hver trekant ligger i et plan. "Til realistisk belysning må jeg regne ut normalvektoren for hver flate", forklarer Kai. "Og til kollisjonsdeteksjon trenger jeg skjæringspunkter mellom linjer og plan." Velkommen til rommets analytiske geometri — matematikken bak enhver 3D-motor.',
      challenge: 'Kai må sette opp planlikninger ut fra tre punkter, regne ut normalvektorer med kryssproduktet, finne skjæringspunkter mellom linje og plan og bestemme avstander mellom objekter — alt sammen i sanntid til spillmotoren sin.',
      outro: 'Kais kollisjonsdeteksjonssystem fungerer feilfritt: prosjektiler treffer vegger, figurer står på gulv, og belysningen regner ut det perfekte lysinnfallet for hver flate via normalvektorer. "Kryssproduktet er verktøyet jeg bruker mest", sier Kai. "To retningsvektorer inn, normalvektor ut — og så vet jeg hvordan flaten ligger i rommet." Amir legger til: "Og avstandsformelen sjekker om en spiller er nær nok et objekt til å plukke det opp."',
    },
    objectives: {
      plane_equations: 'Sette opp planlikninger på parameter-, normal- og koordinatform og gjøre dem om til hverandre',
      line_plane_intersection: 'Regne ut skjæringspunkter mellom linjer og plan og bestemme innbyrdes beliggenhet',
      distances_3d: 'Regne ut avstander i rommet: punkt-plan, punkt-linje og linje-linje',
      cross_product: 'Beherske kryssproduktet og bruke det til å regne ut normalvektorer',
    },
    explanation: {
      intro: 'Plan i det tredimensjonale rommet kan du beskrive på flere måter. Parameterformen starter i et støttepunkt $\\vec{a}$ og spenner ut planet med to retningsvektorer $\\vec{u}$ og $\\vec{v}$. Ethvert punkt i planet kan nås med passende verdier for $r$ og $s$:',
      normal_form: 'Ofte mer elegant er normalformen: en vektor $\\vec{n}$ som står vinkelrett på planet (normalvektoren), og et punkt $\\vec{a}$ i planet er nok til å beskrive hele planet. Herfra kan koordinatformen utledes — én enkelt likning med $x_1$, $x_2$ og $x_3$:',
      kai_tip: 'I 3D-motoren min lagrer jeg hver flate på koordinatform — tre koeffisienter og en konstant, det er alt. Til rendering trenger jeg normalvektoren til belysningen ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$ — skalarproduktet med lysvektoren gir lysstyrkeverdien). Og til fysikk trenger jeg skjæringspunkter og avstander. Alle tre formene er nyttige — hver til sitt formål!',
      cross_product: 'Kryssproduktet $\\vec{u} \\times \\vec{v}$ gir en vektor som står vinkelrett på begge inngangsvektorene — perfekt til å regne ut normalvektoren fra to retningsvektorer. Merk: rekkefølgen er viktig (antikommutativ)!',
      distance_point_plane: 'Avstanden fra et punkt $P$ til et plan $E$ kan regnes ut elegant med Hesses normalform. Du setter punktet inn i koordinatlikningen, tar absoluttverdien og deler på lengden til normalvektoren:',
    },
    concepts: {
      plane_equation: {
        title: 'Planlikning på koordinatform',
        desc: 'Den mest kompakte framstillingen av et plan: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. Koeffisientene $n_1, n_2, n_3$ er koordinatene til normalvektoren, og $d$ framkommer ved å sette inn et kjent punkt i planet. Ethvert punkt $(x_1, x_2, x_3)$ som oppfyller likningen, ligger i planet.',
      },
      cross_product: {
        title: 'Kryssprodukt',
        desc: 'Kryssproduktet av to vektorer $\\vec{u}$ og $\\vec{v}$ gir en ny vektor $\\vec{n}$ som står vinkelrett på begge. Lengden $|\\vec{u} \\times \\vec{v}|$ tilsvarer arealet av det utspente parallellogrammet. Viktig: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ — rekkefølgen bestemmer retningen!',
      },
      distance_formula: {
        title: 'Avstand punkt-plan',
        desc: 'Den korteste avstanden fra et punkt $P$ til et plan er lengden av normalen fra $P$ ned på planet. Formelen $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ regner ut denne avstanden direkte fra koordinatformen. Absoluttverdien i telleren er avgjørende — uten den kunne det komme ut en negativ "avstand".',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Plan ut fra tre hjørnepunkter',
        context: 'Kai har en trekant i spillverdenen sin med hjørnepunktene $A(1|0|2)$, $B(3|1|0)$ og $C(0|4|1)$. Han trenger planlikningen til belysning og kollisjonsdeteksjon.',
        step1: 'Tre punkter gitt — dann to retningsvektorer ut fra dem:',
        step2: 'Regn ut retningsvektorene $\\vec{u} = \\overrightarrow{AB}$ og $\\vec{v} = \\overrightarrow{AC}$:',
        step3: 'Regn ut kryssproduktet $\\vec{n} = \\vec{u} \\times \\vec{v}$ utførlig — koordinat for koordinat etter formelen:',
        step4: 'Sett opp koordinatformen — normalvektoren som koeffisienter, $d$ ved innsetting av $A$: $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$:',
        kai_comment: 'I motoren skjer nettopp dette for hver trekant: tre vertices inn, regn ut kryssproduktet, plan lagret. Normalvektoren bestemmer samtidig hvilken vei flaten "ser" — avgjørende for belysning og backface culling!',
      },
      collision_detection: {
        title: 'Linje-plan-skjæring (raycast)',
        context: 'Et prosjektil flyr rettlinjet gjennom rommet. Kai må undersøke om og hvor det treffer en vegg — det er et raycast: skjæringspunkt mellom linje og plan.',
        step1: 'Linje (flybane) og plan (vegg) gitt:',
        step2: 'Sett linjen inn i planlikningen — koordinatene til $\\vec{x}(t)$ i stedet for $x_1, x_2, x_3$:',
        step3: 'Løs med hensyn på $t$ — samle sammen og forenkl:',
        step4: 'Regn ut skjæringspunktet — sett $t = 0$ inn i linjelikningen:',
        kai_comment: 'Ved $t = 0$ treffer linjen planet med én gang — prosjektilet starter altså rett ved veggen. I motoren sjekker jeg i tillegg $t > 0$ (forover) og $0 \\leq t \\leq t_{\\max}$ (rekkevidde). Slik filtrerer jeg bort treff bak spilleren eller utenfor rekkevidde.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: '3D-rendering og belysning',
        desc: 'Enhver 3D-motor regner ut belysning via skalarproduktet av normalvektor og lysretning: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Jo mindre vinkelen mellom lys og flatenormal er, desto lysere blir flaten. Det er Lamberts belysningsmodell — grunnlaget for realistisk lys i spill, film og AR-apper.',
      },
      architecture: {
        title: 'Arkitektur og BIM-programvare',
        desc: 'I arkitektprogram som AutoCAD eller Revit modelleres takflater, vegger og ramper som plan. Koordinatformen beskriver beliggenheten i rommet, og normalvektoren viser orienteringen. Byggingeniører regner med planlikninger på hvordan krefter virker på skrå flater — fra taket til brodekket.',
      },
      gps_navigation: {
        title: 'GPS og dronenavigasjon',
        desc: 'GPS-koordinater er tredimensjonale (lengde, bredde, høyde). Droner navigerer langs linjer i 3D-rommet og må gjenkjenne hindringer — modellert som plan. Avstanden punkt-plan avgjør om en drone kommer for nær en husfasade. Selvkjørende biler bruker den samme matematikken til LIDAR-behandling.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Ignorere rekkefølgen: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Antikommutativ: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'Kryssproduktet er IKKE kommutativt — rekkefølgen bestemmer retningen til resultatvektoren (høyrehåndsregelen). Ombytting endrer fortegnet. Det kan føre til at normalvektorer peker feil vei, noe som inverterer hele belysningen.',
        kai_warning: 'Den buggen kjenner man igjen med én gang: flater som er belyst "innenfra", mens utsiden er mørk. Skjer når normalvektoren peker feil vei. Vær alltid konsekvent med rekkefølgen — $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, aldri omvendt!',
      },
      distance_abs_forgotten: {
        wrong: 'Glemme absoluttverdien i telleren: $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'Med absoluttverdi: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: 'Avstander er alltid positive! Uten absoluttverdien i telleren kan det komme ut en negativ verdi om punktet ligger på den "andre siden" av planet. På en prøve koster det poeng, i en spillmotor fører det til objekter som faller gjennom vegger.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Før lanseringen av "Hafenlichter 3D" venter den store spilltesten: 200 testere spiller i en uke, og Kai må ta harde avgjørelser. Er balanseringen rettferdig? Er krasjraten akseptabel? "Magefølelse holder ikke", sier Mia. "Du trenger en statistisk test som forteller deg om en observert effekt er ekte — eller bare tilfeldig." Velkommen til hypotesetesting: matematikken bak databaserte avgjørelser.',
      challenge: 'Kai må avgjøre om de observerte forskjellene i spilltesten er statistisk signifikante. Er helt A virkelig svakere enn helt B, eller var det bare uflaks? Har den nye krasjraten virkelig steget? Til det trenger han nullhypoteser, signifikansnivåer og å kunne håndtere feiltyper.',
      outro: 'Spilltesten er analysert: Kai har statistisk påvist at helt A er for svak ($p = 0{,}028 < 0{,}05$), og at krasjraten i den nye builden har steget signifikant. "Uten hypotesetester hadde jeg kanskje oversett disse problemene", innrømmer han. Mia legger til: "Det fine er: du vet nå nøyaktig hvor sikker avgjørelsen din er — signifikansnivået tallfester risikoen for å ta feil."',
    },
    objectives: {
      null_hypothesis: 'Sette opp null- og alternativhypotese korrekt og skille mellom en- og tosidige tester',
      significance_level: 'Forstå signifikansnivået $\\alpha$ og tolke det som feilsannsynlighet',
      test_decision: 'Bestemme forkastningsområder og gjennomføre testavgjørelser systematisk',
      error_types: 'Skille mellom type 1- og type 2-feil og forstå avveiingen mellom $\\alpha$ og $\\beta$',
    },
    explanation: {
      intro: 'En hypotesetest er en strukturert framgangsmåte for å ta en avgjørelse på grunnlag av data. Du starter med en antakelse (nullhypotesen $H_0$), samler data og undersøker om dataene taler mot $H_0$. Alternativhypotesen $H_1$ beskriver det du egentlig antar:',
      significance: 'Signifikansnivået $\\alpha$ er den største sannsynligheten for at du feilaktig forkaster $H_0$ (type 1-feil). Typiske verdier er $\\alpha = 0{,}05$ (5\\%) eller $\\alpha = 0{,}01$ (1\\%). Jo mindre $\\alpha$, desto strengere er testen — men desto lettere overser man ekte effekter:',
      kai_tip: 'Tenk på hypotesetester som et anti-juks-system: $H_0$ betyr "spilleren jukser IKKE". $\\alpha = 0{,}05$ betyr: bare i 5\\% av tilfellene utestenger jeg en ærlig spiller. Jeg vil holde $\\alpha$ liten for å beskytte de uskyldige — men gjør jeg den for liten, slipper de ekte jukserne unna. Det er alfa-beta-avveiingen!',
      rejection_region: 'Forkastningsområdet inneholder alle testresultater som er så ekstreme at vi forkaster $H_0$. Ved en venstresidig test ($H_1\\colon p < p_0$) ligger forkastningsområdet til venstre — du regner ut det største tallet $k$ som oppfyller $P(X \\leq k) \\leq \\alpha$:',
      error_types: 'To feil kan skje: type 1-feil ($\\alpha$) — du forkaster $H_0$ selv om den er sann ("falsk alarm"). Type 2-feil ($\\beta$) — du beholder $H_0$ selv om $H_1$ er sann ("oversett effekt"). Ved fast utvalgsstørrelse $n$ gjelder: gjør du $\\alpha$ mindre, blir $\\beta$ større — og omvendt:',
    },
    concepts: {
      hypotheses: {
        title: 'Null- og alternativhypotese',
        desc: '$H_0$ er "status quo"-antakelsen som gjelder inntil dataene taler mot den. $H_1$ er det du egentlig vil vise. Venstresidig test: $H_1\\colon p < p_0$. Høyresidig test: $H_1\\colon p > p_0$. Tosidig test: $H_1\\colon p \\neq p_0$. Viktig: man "beviser" aldri $H_1$ — man kan bare forkaste eller beholde $H_0$.',
      },
      significance_level: {
        title: 'Signifikansnivå $\\alpha$',
        desc: 'Den øvre grensen for sannsynligheten for en type 1-feil. Ved $\\alpha = 0{,}05$ godtar du en risiko på 5\\% for feilaktig å forkaste $H_0$. Vanlige verdier: $0{,}10$ (utforskende), $0{,}05$ (standard), $0{,}01$ (streng). $\\alpha$ fastsettes FØR testen — aldri justert i etterkant!',
      },
      error_types: {
        title: 'Type 1- og type 2-feil',
        desc: 'Type 1-feil ($\\alpha$): $H_0$ forkastes selv om den er sann — en "falsk alarm". Type 2-feil ($\\beta$): $H_0$ beholdes selv om $H_1$ er sann — en "oversett effekt". Ved fast $n$ trekker $\\alpha$ og $\\beta$ i hver sin retning: mindre $\\alpha$ betyr større $\\beta$. Løsning: større utvalgsstørrelse $n$.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Balansetest: er helt A for svak?',
        context: 'I 100 kamper mellom helt A og helt B vinner helt A bare 40 ganger. Kai antar at helt A er dårligere stilt. Ved rettferdig balansering burde $p = 0{,}5$ gjelde.',
        step1: 'Fastsett hypoteser og signifikansnivå — venstresidig, fordi Kai antar at A er for svak:',
        step2: 'Forsøksoppsett: $n = 100$ kamper, $X$ = antall seire for helt A, binomisk fordelt:',
        step3: 'Regn ut sannsynligheten for $X \\leq 40$ under $H_0$ (kumulativ binomisk fordeling):',
        step4: 'Testavgjørelse: $p$-verdi $0{,}028 < \\alpha = 0{,}05$ — $H_0$ forkastes. Helt A er signifikant for svak:',
        kai_comment: 'Det var det statistiske beviset jeg trengte til balanseteamet. 40 av 100 ser "nesten greit" ut, men testen viser: ved rettferdig balansering ville man bare sett et så ekstremt resultat i 2{,}8\\% av tilfellene. Det holder til en nerf-oppdatering!',
      },
      crash_rate: {
        title: 'Undersøk krasjraten etter oppdateringen',
        context: 'Etter en oppdatering skal krasjraten være høyst 2\\%. I 200 testøkter krasjer spillet 8 ganger. Er det for mye?',
        step1: 'Sett opp hypotesene — høyresidig, fordi Kai vil undersøke om raten ligger OVER 2\\%:',
        step2: 'Data: $n = 200$ økter, $X = 8$ krasj (observert: $\\hat{p} = 4\\%$):',
        step3: 'Regn ut sannsynligheten for $X \\geq 8$ under $H_0$ — det er $p$-verdien:',
        step4: 'Testavgjørelse: $p$-verdi $0{,}042 < \\alpha = 0{,}05$ — krasjraten er signifikant forhøyet:',
        kai_comment: 'Uten testen hadde jeg kanskje sagt "8 krasj på 200 økter, det går nok". Men hypotesetesten viser: sannsynligheten for å se så mange krasj ved en ekte rate på 2\\% er under 5\\%. Oppdateringen må gjennomarbeides på nytt.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B-testing i apper og på nettsteder',
        desc: 'Hver gang Netflix endrer "Spill av"-knappen eller Spotify tester en ny spillelistevisning, kjører det en hypotesetest. Versjon A mot versjon B: hvilken har flest klikk? $p$-verdien avgjør om forskjellen er ekte eller bare tilfeldig variasjon. Også TikTok, YouTube og Instagram bruker A/B-tester — enhver funksjon du ser, har bestått en signifikanstest.',
      },
      quality_assurance: {
        title: 'Kvalitetskontroll i produksjonen',
        desc: 'På fabrikker testes det hele tiden: ligger vrakraten under grenseverdien? Stemmer fyllvekten i chipsposen med den trykte verdien? Hypotesetester beskytter forbrukerne — og bedriftene mot dyre tilbakekallinger. Bak enhver stikkprøvekontroll ligger den samme matematikken som dere lærer her.',
      },
      clinical_trials: {
        title: 'Kliniske studier og legemidler',
        desc: 'Før et legemiddel godkjennes, må det bestå en hypotesetest: $H_0$ sier "legemidlet virker ikke bedre enn placebo". Bare hvis $p$-verdien faller under $\\alpha = 0{,}05$, regnes virkningen som påvist. De strenge reglene ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) beskytter pasienter mot uvirksomme legemidler — men også mot for tidlige avvisninger av virksomme behandlinger.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ "bevist": $p > \\alpha$ betyr at $H_0$ er sann',
        correct: 'Korrekt formulert: $p > \\alpha$ betyr at $H_0$ ikke kan forkastes',
        why: 'En hypotesetest kan aldri bevise $H_0$ — bare forkaste eller beholde den. "Ikke forkaste" betyr: dataene holder ikke til å motbevise $H_0$. Kanskje er effekten for liten, kanskje er utvalget for lite. Derfor sier man "beholde" eller "ikke forkaste", aldri "godta" eller "bevist".',
        kai_warning: 'Det er som uskyldspresumsjonen i retten: "ikke skyldig" betyr ikke "uskyldig" — det betyr bare at bevisene ikke holder. Slik er det med $H_0$ også: kan jeg ikke påvise at helt A er svakere, betyr det ikke automatisk at hun er perfekt balansert!',
      },
      alpha_beta_confused: {
        wrong: 'Antakelse: mindre $\\alpha$ forbedrer automatisk alt',
        correct: 'Virkeligheten: mindre $\\alpha$ fører ved fast $n$ til større $\\beta$',
        why: 'Gjør du testen strengere (mindre $\\alpha$), trenger du mer ekstreme data for å forkaste $H_0$. Dermed øker sannsynligheten for å overse en ekte effekt ($\\beta$ stiger). Den eneste utveien: større utvalg $n$ — da kan du holde både $\\alpha$ og $\\beta$ små.',
      },
    },
  },
};
