export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia prochází seznam animací Hafenlichter a vraští čelo. Animace dýchání Lumiho vypadá jako robot — trhaná a nepřirozená. Vlny v přístavu působí strnule a cyklus dne a noci skáče místo plynulého přechodu. "Vše, co se opakuje, potřebuje kmitání", říká Tim. "Sinus a kosinus — na to jsou stvořeny." Mia otevře kalkulačku a ponoří se do světa periodických funkcí.',
      challenge: 'Animace dýchání, vlnění a cyklus dne/noci mají plynule kmitat místo trhání.',
      outro: 'Dýchání Lumiho se teď jemně zvedá a klesá, přístavní vlny se rovnoměrně valí ke břehu a světlo plynule přechází od ranní červené k půlnoční modré. "Sinusoidy jsou všude v přírodě", říká Jule. Mia přikyvuje: "A teď jsou taky v Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Rozpoznávat periodické funkce a odlišit je od neperiodických',
      amplitude_period: 'Odečíst amplitudu a periodu z grafů a rovnic',
      frequency: 'Vypočítat frekvenci a vysvětlit její význam',
      modeling: 'Modelovat reálné jevy pomocí sinusoid',
    },
    explanation: {
      intro: 'Některé děje se neustále opakují: tep srdce, přílivové jevy, roční období. V matematice popisujeme taková kmitání periodickými funkcemi. Nejdůležitější z nich je sinusoida:',
      parameters: 'Obecná sinusoida má čtyři parametry, které si můžeš představit jako regulátory na mixu: $A$ řídí výšku kmitání (amplituda), $b$ ovlivňuje, jak rychle se kmitání opakuje (perioda), $c$ posouvá křivku doleva či doprava a $d$ ji posouvá nahoru či dolů.',
      mia_tip: 'Pro animaci dýchání Lumiho používám $A = 3$ pixely a $T = 4$ sekundy. To znamená: Každé 4 sekundy se Lumi jednou nadechne a vydechne, a hrudník se pohne o 3 pixely nahoru a dolů. Úplně přirozené!',
      graph_reading: 'Abys odečetl periodickou funkci z grafu, hledej vzor, který se opakuje. Vzdálenost mezi dvěma identickými místy se nazývá perioda $T$. Matematicky periodicita znamená:',
      applications: 'Periodické funkce jsou matematickým nástrojem pro vše, co kmitá: zvukové vlny, střídavý proud, kyvadlo, světelné vlny a dokonce oběžné dráhy planet. Vždycky, když se děj pravidelně opakuje, skrývá se za ním sinusoida (nebo její příbuzné).',
    },
    concepts: {
      amplitude: {
        title: 'Amplituda',
        desc: 'Amplituda $A$ je maximální výchylka od střední hodnoty. Měří, jak "silné" je kmitání. Na grafu ji odečteš jako polovinu rozdílu mezi nejvyšším a nejnižším bodem.',
      },
      period: {
        title: 'Perioda',
        desc: 'Perioda $T$ je délka jednoho úplného cyklu kmitání. Po čase $T$ se vše přesně opakuje. Čím větší $b$, tím kratší perioda.',
      },
      frequency: {
        title: 'Frekvence',
        desc: 'Frekvence $f$ udává, kolik kmitů připadá na časovou jednotku. Je převrácenou hodnotou periody. Jednotka: hertz (Hz) = kmity za sekundu.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Čtení sinusoidy z grafu',
        context: 'Mia má vlnový efekt ve hře a chce najít odpovídající rovnici.',
        step1: 'Odečteme nejvyšší a nejnižší bod: $y_{\\max} = 3$ a $y_{\\min} = -3$. Amplituda je polovina rozdílu — vlna se vychyluje o 3 jednotky nahoru a dolů.',
        step2: 'Odečteme periodu: Jeden úplný cyklus trvá $4\\pi$ jednotek. Odtud vypočteme $b$ pomocí vzorce $b = \\frac{2\\pi}{T}$ — to dává $0{,}5$.',
        step3: 'Sestavíme rovnici: Protože střední čára leží na $y = 0$ ($d = 0$) a není vidět fázový posun ($c = 0$), funkce je prostě:',
        mia_comment: 'Amplituda 3, perioda $4\\pi$ — tím se přístavní vlny houpou hezky pomalu. Pro rychlejší vlny prostě zvýším $b$!',
      },
      ferris_wheel: {
        title: 'Modelování ruského kola',
        context: 'Ruské kolo o průměru 60 m se otočí jednou za 10 minut. Nejnižší gondola je 5 m nad zemí.',
        step1: 'Určíme amplitudu: Poloměr je polovina výšky, takže $A = 30\\,\\text{m}$. Střední čára leží na $d = 5 + 30 = 35\\,\\text{m}$ (zem + poloměr).',
        step2: 'Perioda je jedna plná otáčka: $T = 10\\,\\text{min}$. Odtud $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Zohledníme startovní bod: Start dole znamená posun sinu o $-\\frac{\\pi}{2}$ (sinus normálně startuje uprostřed, ne dole).',
        step4: 'Kontrola: Po 2,5 minutách (čtvrt otáčky) by měla být gondola ve střední výšce. Dosadíme: $\\sin(0) = 0$, takže $h = 35\\,\\text{m}$. Souhlasí!',
        mia_comment: 'Přesně tak funguje cyklus dne a noci v Hafenlichter: sinus s $T = 24$ (jeden herní den) a posun, aby o půlnoci bylo nejtmavěji.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Tep tvého srdce',
        desc: 'Tvé srdce bije přibližně 72krát za minutu — to je 1,2 úderu za sekundu. Elektrické signály srdce (EKG) ukazují periodickou křivku. Lékaři odečítají amplitudu a frekvenci, aby odhalili srdeční problémy.',
      },
      tides: {
        title: 'Odliv a příliv',
        desc: 'V hamburském přístavu kolísá hladina vody každých 12,4 hodiny mezi přílivem a odlivem. To je téměř dokonalá sinusoida — způsobená přitažlivou silou Měsíce.',
      },
      temperature: {
        title: 'Roční teplota',
        desc: 'Průměrná teplota v průběhu roku přibližně sleduje sinusoidu: teplo v létě, zima v zimě, s periodou 365 dnů. Klimatologové používají tento model jako základ pro předpovědi.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Záměna periody a frekvence',
        correct: 'Frekvence je převrácená hodnota periody',
        why: 'Pokud je perioda $T = 2\\,\\text{s}$, kmitání se opakuje každé 2 sekundy. Frekvence je pak $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — ne $2\\,\\text{Hz}$! Frekvence = "Kolikrát za sekundu?", Perioda = "Jak dlouho trvá jeden cyklus?"',
        mia_warning: 'Tato chyba způsobila, že Lumiho dýchání bylo dvakrát rychlejší — vypadal, jako by zrovna doběhl sprint!',
      },
      b_value: {
        wrong: 'Ztotožnění $b$ s periodou',
        correct: 'Přepočítej $b$ a $T$ pomocí vzorce',
        why: '$b$ NENÍ perioda, ale souvisí s ní přes $T = \\frac{2\\pi}{b}$. Pokud je perioda $4\\pi$, pak $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — ne $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter běží — ale seká se. Mia otevře monitor výkonu a vidí: V některých scénách padne snímková frekvence na 15 FPS. "Kde přesně se to zpomaluje?", ptá se Tim. "Nepotřebuju průměr přes celou scénu, ale přesné místo, kde výkon klesá." Jule se usměje: "To je přesně otázka, která vedla k vynálezu diferenciálního počtu — okamžitá rychlost změny."',
      challenge: 'Najít přesné místo, kde snímková frekvence padá — ne jen průměr.',
      outro: 'Mia našla kritické místo: Přesně u snímku 847 vybuchne čas renderu, protože tam se najednou objeví 200 částic. "Bez okamžité rychlosti změny bych hledala věčně", říká. Tim přikyvuje: "Newton by to dělal stejně — jen bez monitoru výkonu."',
    },
    objectives: {
      average_rate: 'Počítat a interpretovat průměrnou rychlost změny (sklon sečny)',
      instantaneous_rate: 'Chápat okamžitou rychlost změny jako limitu',
      limit_concept: 'Sledovat přechod od sečny k tečně',
      derivative_notation: 'Znát a používat různé zápisy derivace',
    },
    explanation: {
      intro: 'Představ si, že jedeš na kole do školy. Tvůj tachometr ukazuje 20 km/h — to je tvá okamžitá rychlost. Ale jak ji vypočítat? Když řekneš "Ujel jsem 10 km za 30 minut", je to průměr. Okamžitá rychlost v konkrétním bodě je něco jiného — a přesně o tom je diferenciální počet.',
      secant_to_tangent: 'Myšlenka je geniálně jednoduchá: Vypočítej průměrný sklon mezi dvěma body, a pak posouvej body stále blíž k sobě. V limitním případě — když se vzdálenost blíží nule — získáš sklon v jediném bodě. To je derivace:',
      mia_tip: 'Průměrná snímková frekvence za 10 sekund mi nic neřekne. Potřebuji okamžitou hodnotu u snímku 847! Přesně jako tachometr: neukazuje průměr celé jízdy, ale jak rychle jedeš PRÁVĚ TEĎ.',
      derivative_meaning: 'Derivace $f\'(x_0)$ má jasný význam: Udává sklon tečny ke grafu v bodě $x_0$. Pokud $f\'(x_0) > 0$, funkce tam roste. Pokud $f\'(x_0) < 0$, klesá. Pokud $f\'(x_0) = 0$, funkce tam má (možná) maximum nebo minimum. Existují různé zápisy:',
      geometric_interpretation: 'Geometricky se děje následující: Sečna dvěma body na grafu se otáčí, když se body přibližují. V limitním případě se sečna stane tečnou — přímkou, která se grafu "dotýká" v přesně jednom bodě. Sklon této tečny je derivace.',
    },
    concepts: {
      difference_quotient: {
        title: 'Diferenční podíl',
        desc: 'Průměrná rychlost změny mezi dvěma body. Počítá sklon sečny — přímky, která protíná graf ve dvou bodech.',
      },
      differential_quotient: {
        title: 'Diferenciální podíl (derivace)',
        desc: 'Okamžitá rychlost změny v jednom bodě. Vznikne, když $h$ v diferenčním podílu míří k nule. Udává sklon tečny.',
      },
      derivative_notation: {
        title: 'Zápisy derivace',
        desc: 'Existují tři běžné zápisy: $f\'(x)$ (Lagrange, nejčastější ve škole), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, zdůrazňuje zlomkový charakter) a $\\dot{y}$ (Newton, hlavně ve fyzice pro časové derivace).',
      },
    },
    examples: {
      average_speed: {
        title: 'Průměrná rychlost',
        context: 'Míček se kutálí po rampě. Dráha závisí kvadraticky na čase.',
        step1: 'Daná je funkce dráhy v čase. Po 2 sekundách je míček 2 m daleko, po 4 sekundách 8 m.',
        step2: 'Průměrná rychlost mezi $t = 2$ a $t = 4$: Vydělíme změnu dráhy změnou času. To dává $3\\,\\text{m/s}$ průměrně.',
        step3: 'Teď zmenšíme interval: Mezi $t = 2$ a $t = 2{,}1$ vyjde $2{,}05\\,\\text{m/s}$. Čím kratší interval, tím blíže k okamžité rychlosti při $t = 2$.',
        mia_comment: 'Přesně tak funguje můj monitor výkonu: Měří snímkovou frekvenci ve stále kratších intervalech, až najde přesné místo, kde to vázne.',
      },
      instantaneous_rate: {
        title: 'Výpočet okamžité rychlosti změny',
        context: 'Urči derivaci $f(x) = x^2$ v bodě $x_0 = 3$.',
        step1: 'Dosadíme $f(x) = x^2$ a $x_0 = 3$ do diferenčního podílu. Hledáme: co se stane, když $h$ míří k 0?',
        step2: 'Vypočteme čitatel: $(3+h)^2 = 9 + 6h + h^2$. Minus $f(3) = 9$ dává $6h + h^2$ v čitateli.',
        step3: 'Krátíme $h$ (můžeme, protože $h \\neq 0$ v limitním procesu): Zbývá $6 + h$.',
        step4: 'Spočteme limitu: Pro $h \\to 0$ se $6 + h$ stane $6$. Sklon tečny při $x = 3$ je tedy přesně $6$.',
        mia_comment: 'Tečna při $x = 3$ má sklon 6. Když to udělám pro každý bod, dostanu funkci derivace $f\'(x) = 2x$. Při $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Souhlasí!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Radary a rychlost',
        desc: 'Radar neměří tvoji okamžitou rychlost, ale průměrnou rychlost na krátkém úseku (úsekové měření: na několika kilometrech). Čím kratší měřený úsek, tím blíže k okamžité hodnotě.',
      },
      stock_trends: {
        title: 'Akciové kurzy a trendy',
        desc: 'Když akcie "stoupají", analytici mají na mysli kladnou derivaci kurzu. Sklon tečny ke křivce kurzu ukazuje trend: kladný = vzestupný trend, záporný = sestupný trend, nula = bod zvratu.',
      },
      speedometer: {
        title: 'Tachometr v autě',
        desc: 'Tvůj tachometr ukazuje okamžitou rychlost — matematicky derivaci funkce dráhy podle času. GPS zařízení ji počítají jako limitu z velmi krátkých časových intervalů.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Průměr = okamžitá hodnota',
        correct: 'Rozlišuj průměr od okamžité hodnoty',
        why: 'Průměrná rychlost změny na intervalu $[1;\\,5]$ NENÍ stejná jako okamžitá rychlost změny při $x = 3$ (uprostřed). To platí jen u lineárních funkcí! U zakřivených grafů se obě hodnoty liší.',
        mia_warning: 'Nejdřív jsem spočítala průměrnou snímkovou frekvenci a myslela si, že je vše v pořádku. Ale lokálně byly masivní propady! Průměr zamaskoval problém.',
      },
      secant_tangent: {
        wrong: 'Sklon sečny = sklon tečny',
        correct: 'Tečna je limitní případ sečny',
        why: 'Sečna protíná graf ve dvou bodech, tečna se ho dotýká v jednom. Teprve když se dva body přiblíží ($h \\to 0$), sečna se stane tečnou. Bez limity je to jen přiblížení.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter potřebuje systém vyvážení: Jak rychle má Lumi postupovat v úrovních? Jak silní se stávají nepřátelé? Kolik stojí vylepšení? "Když vše roste lineárně, hra bude nudná", říká Jule. Tim dodává: "A když vše roste exponenciálně, bude to nefér." Mia si uvědomuje: Musí znát různé typy růstu a cíleně je používat.',
      challenge: 'Najít správné křivky růstu pro vyvážení hry — lineární, kvadratické, exponenciální nebo logaritmické.',
      outro: 'Miin systém vyvážení je hotový: Rychlost běhu roste lineárně, poškození z pádu kvadraticky, požadavky na XP exponenciálně a křivka učení logaritmicky. "Každá křivka má své místo", říká spokojeně. Hra teď působí férově a vzrušujícím dojmem — od úrovně 1 až po finálního bosse.',
    },
    objectives: {
      identify_types: 'Rozpoznat čtyři hlavní třídy funkcí (lineární, kvadratické, exponenciální, logaritmické) podle rovnic a grafů',
      compare_growth: 'Porovnávat chování růstu tříd funkcí a řadit je',
      match_context: 'Přiřazovat správnou třídu funkce k situaci a zdůvodnit volbu',
      graph_recognition: 'Přiřazovat grafy ke správným typům funkcí',
    },
    explanation: {
      intro: 'V matematice existují různé "rodiny" funkcí — každá s vlastním charakterem. Některé rostou rovnoměrně, jiné stále rychleji, další stále pomaleji. Čtyři nejdůležitější třídy pro 10. ročník jsou:',
      mia_tip: 'V herním designu používám každou třídu funkce na něco jiného: Lineární růst pro předvídatelné věci (rychlost běhu), kvadratický pro věci, které se "rozhoupou" (poškození z pádu), exponenciální pro výzvy (požadavky na XP) a logaritmický pro efekty učení (postup dovedností).',
      growth_comparison: 'Rozhodující je: Jak rychle roste každá třída funkce pro velké hodnoty $x$? Pořadí je vždy stejné — bez ohledu na konkrétní čísla:',
      choosing_functions: 'Vybrat správnou funkci pro problém je klíčová kompetence. Zeptej se: Je změna konstantní (lineární)? Zrychluje se rovnoměrně (kvadratická)? Zdvojnásobuje se hodnota v pravidelných intervalech (exponenciální)? Stává se přírůstek stále menším (logaritmická)?',
    },
    concepts: {
      linear: {
        title: 'Lineární funkce',
        desc: 'Konstantní rychlost změny: V každém kroku se přičte stejná hodnota. Graf je přímka. Směrnici $m$ a úsek na ose y $b$ lze přímo odečíst.',
      },
      quadratic: {
        title: 'Kvadratické funkce',
        desc: 'Sama rychlost změny se mění lineárně — přibývá stále rychleji více (nebo méně). Graf je parabola s vrcholem.',
      },
      exponential: {
        title: 'Exponenciální funkce',
        desc: 'Růst o pevné procento: Čím více je, tím více přibude. Zdvojnásobení v pravidelných časových intervalech. Dlouhodobě roste rychleji než jakákoli mocninná funkce.',
      },
      logarithmic: {
        title: 'Logaritmické funkce',
        desc: 'Inverzní funkce k exponenciální. Zpočátku roste rychle, pak stále pomaleji. Modeluje efekty nasycení a křivky učení.',
      },
    },
    examples: {
      identify_type: {
        title: 'Rozpoznání typu funkce z tabulky hodnot',
        context: 'Jsou dány tři datové sady. Jaký typ pasuje ke každé?',
        step1: 'Testuj lineární: Vypočítej rozdíly po sobě jdoucích hodnot $y$. Jsou-li konstantní, funkce je lineární.',
        step2: 'Testuj exponenciální: Vypočítej podíly po sobě jdoucích hodnot $y$. Jsou-li konstantní, funkce je exponenciální.',
        step3: 'Testuj kvadratickou: Vypočítej druhé diference (diference diferencí). Jsou-li konstantní, funkce je kvadratická.',
        mia_comment: 'Přesně tak testuji vyvážení: Nechám simulovat 100 kol a kontroluji, zda hodnoty odpovídají požadovanému typu růstu. Pokud druhé diference odbíhají, něco je špatně.',
      },
      game_mechanics: {
        title: 'Modelování herních mechanik',
        context: 'Čtyři různé herní mechaniky v Hafenlichter potřebují různé funkce.',
        step1: 'Rychlost běhu: Roste o stejnou hodnotu na úroveň ($+5$ na úroveň). To je konstantní změna — takže lineární. Férové a předvídatelné.',
        step2: 'Poškození z pádu: Ze 2 m malé poškození, z 10 m mnohem více. Nárůst poškození se zrychluje — kvadraticky. Fyzikálně to dává smysl (energie = $\\frac{1}{2}mv^2$).',
        step3: 'Požadavky na XP za úroveň: Úroveň 2 vyžaduje 150 XP, úroveň 3 vyžaduje 225 XP, úroveň 4 vyžaduje 337 XP. Požadavek roste vždy o 50% — exponenciálně. Tak zůstávají vyšší úrovně skutečnou výzvou.',
        step4: 'Křivka učení (dovednost): Zpočátku se učíš rychle, později stále pomaleji. Po $t$ hodinách hraní ovládáš $20 \\cdot \\log_2(t+1)$ procent mechanik — logaritmicky.',
        mia_comment: 'To je jádro herního designu: Správná křivka pro správnou mechaniku. Lineární XP by byly nudné, exponenciální poškození z pádu by bylo nefér. Každý typ funkce má svůj sweet spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Virální stahování aplikací',
        desc: 'Když každý uživatel pozve dva kamarády a ti zase dva, počet stažení se zdvojnásobí. Zpočátku téměř neviditelné, pak explozivní — typicky exponenciální. TikTok, Instagram a WhatsApp takto rostly.',
      },
      salary: {
        title: 'Kapesné a plat',
        desc: 'Tvé kapesné roste (doufejme) každý rok o stejnou částku — lineární růst. Později v práci plat často roste podobně: pevná částka za každý rok praxe.',
      },
      learning_curve: {
        title: 'Pokrok v učení',
        desc: 'Nový nástroj, nový sport, nový jazyk: Zpočátku děláš obrovský pokrok, pak je stále těžší se zlepšovat. To je logaritmická křivka nasycení — a je to úplně normální!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Exponenciální" a "kvadratický" je totéž',
        correct: 'Exponenciální roste MNOHEM rychleji než kvadratický',
        why: 'U malých čísel $x^2$ a $2^x$ vypadají podobně: $4^2 = 16$ a $2^4 = 16$. Ale při $x = 10$: $10^2 = 100$ oproti $2^{10} = 1024$. Exponenciální růst předstihne každou mocninnou funkci!',
        mia_warning: 'Zpočátku jsem nastavila požadavky na XP kvadraticky místo exponenciálně. Výsledek: Od úrovně 20 byla hra příliš snadná, protože hráči sbírali XP rychleji, než rostly požadavky.',
      },
      all_curves_linear: {
        wrong: 'Každý růst je lineární',
        correct: 'Nejdřív ověř typ růstu',
        why: 'Jen proto, že se něco "zdvojnásobí", neznamená, že je to lineární! "Každé 3 dny dvakrát tolik sledujících" je exponenciální, ne lineární. Lineární by bylo: "Každý den 100 nových sledujících". Rozdíl: konstantní přírůstek (lineární) vs. konstantní faktor (exponenciální).',
      },
    },
  },
};
