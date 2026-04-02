export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia prochazi seznam animaci Hafenlichter a vrasti celo. Animace dychani Lumiho vypada jako robot — trhana a neprirozena. Vlny v pristavu pusobi strnule a cyklus dne a noci skace misto plynuleho prechodu. "Vse, co se opakuje, potrebuje kmitani", rika Tim. "Sinus a kosinus — na to jsou stvoreny." Mia otevre kalkulacku a pono­ri se do sveta periodickych funkci.',
      challenge: 'Animace dychani, vlneni a cyklus dne/noci maji plynne kmitat misto trhani.',
      outro: 'Dychani Lumiho se ted jemne zdviha a klesa, pristavni vlny se rovnomerne vali ke brehu a svetlo plynule prechazi od ranni cervene k pulnocni modri. "Sinusoidy jsou vsude v prirode", rika Jule. Mia prikyvuje: "A ted jsou taky v Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Rozpoznavat periodicke funkce a odlisit je od neperiodickych',
      amplitude_period: 'Odecist amplitudu a periodu z grafu a rovnic',
      frequency: 'Vypocitat frekvenci a vysvetlit jeji vyznam',
      modeling: 'Modelovat realne jevy pomoci sinusoid',
    },
    explanation: {
      intro: 'Nektere deje se neustale opakuji: tep srdce, prilivove jevy, rocni obdobi. V matematice popisujeme takova kmitani periodickymi funkcemi. Nejdulezitejsi z nich je sinusoida:',
      parameters: 'Obecna sinusoida ma ctyri parametry, ktere si muzes predstavit jako regulatory na mixu: $A$ ridi vysku kmitani (amplituda), $b$ ovlivnuje, jak rychle se kmitani opakuje (perioda), $c$ posuva krivku doleva ci doprava a $d$ ji posuva nahoru ci dolu.',
      mia_tip: 'Pro animaci dychani Lumiho pouzivam $A = 3$ pixely a $T = 4$ sekundy. To znamena: Kazde 4 sekundy Lumi jednou nadechne a vydechne, a hrudnik se pohne o 3 pixely nahoru a dolu. Uplne prirozene!',
      graph_reading: 'Abys odecetl periodickou funkci z grafu, hledej vzor, ktery se opakuje. Vzdalenost mezi dvema identickymi misty se nazyva perioda $T$. Matematicky periodicita znamena:',
      applications: 'Periodicke funkce jsou matematickym nastrojem pro vse, co kmita: zvukove vlny, stridavy proud, kyvadlo, svetelne vlny a dokonce orbity planet. Vzdycky, kdyz se dej pravidelne opakuje, skryva se za nim sinusoida (nebo jeji pribuzne).',
    },
    concepts: {
      amplitude: {
        title: 'Amplituda',
        desc: 'Amplituda $A$ je maximalni vychylka od stredni hodnoty. Meri, jak "silne" je kmitani. Na grafu ji odectes jako polovinu rozdilu mezi nejvyssim a nejnizsim bodem.',
      },
      period: {
        title: 'Perioda',
        desc: 'Perioda $T$ je delka jednoho uplneho cyklu kmitani. Po case $T$ se vse presne opakuje. Cim vetsi $b$, tim kratsi perioda.',
      },
      frequency: {
        title: 'Frekvence',
        desc: 'Frekvence $f$ udava, kolik kmitu pripada na casovou jednotku. Je prevracenou hodnotou periody. Jednotka: hertz (Hz) = kmity za sekundu.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Cteni sinusoidy z grafu',
        context: 'Mia ma vlnovy efekt ve hre a chce najit odpovidajici rovnici.',
        step1: 'Odecteme nejvyssi a nejnizsi bod: $y_{\\max} = 3$ a $y_{\\min} = -3$. Amplituda je polovina rozdilu — vlna se vychyluje o 3 jednotky nahoru a dolu.',
        step2: 'Odecteme periodu: Jeden uplny cyklus trva $4\\pi$ jednotek. Odtud vypocteme $b$ pomoci vzorce $b = \\frac{2\\pi}{T}$ — to dava $0{,}5$.',
        step3: 'Sestavime rovnici: Protoze stredni cara lezi na $y = 0$ ($d = 0$) a neni videt fazovy posun ($c = 0$), funkce je proste:',
        mia_comment: 'Amplituda 3, perioda $4\\pi$ — tim se pristavni vlny houpou hezky pomalu. Pro rychlejsi vlny proste zvysim $b$!',
      },
      ferris_wheel: {
        title: 'Modelovani ruzicoveho kola',
        context: 'Ruzicove kolo o prumeru 60 m se otoci jednou za 10 minut. Nejnizsi gondola je 5 m nad zemi.',
        step1: 'Urcime amplitudu: Polomer je polovina vysky, takze $A = 30\\,\\text{m}$. Stredni cara lezi na $d = 5 + 30 = 35\\,\\text{m}$ (zem + polomer).',
        step2: 'Perioda je jedna plna otacka: $T = 10\\,\\text{min}$. Odtud $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Zohlednime startovni bod: Start dole znamena posun sinu o $-\\frac{\\pi}{2}$ (sinus normalne startuje uprostred, ne dole).',
        step4: 'Kontrola: Po 2,5 minutach (ctvrt otacky) by mela byt gondola ve stredni vysce. Dosadime: $\\sin(0) = 0$, takze $h = 35\\,\\text{m}$. Souhlasi!',
        mia_comment: 'Presne tak funguje cyklus dne a noci v Hafenlichter: sinus s $T = 24$ (jeden herni den) a posun, aby o pulnoci bylo nejtmavsji.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Tep tveho srdce',
        desc: 'Tve srdce bije priblizne 72krat za minutu — to je 1,2 uderu za sekundu. Elektricke signaly srdce (EKG) ukazuji periodickou krivku. Lekari odecitaji amplitudu a frekvenci, aby odhalili srdecni problemy.',
      },
      tides: {
        title: 'Odliv a priliv',
        desc: 'V hamburskem pristavu kolisa hladina vody kazdych 12,4 hodin mezi prilivem a odlivem. To je temer dokonala sinusoida — zpusobena pritazlivou silou Mesice.',
      },
      temperature: {
        title: 'Rocni teplota',
        desc: 'Prumerna teplota v prubehu roku priblizne sleduje sinusoidu: teplo v lete, zima v zime, s periodou 365 dnu. Klimatologove pouzivaji tento model jako zaklad pro predpovedi.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Zamena periody a frekvence',
        correct: 'Frekvence je prevracena hodnota periody',
        why: 'Pokud je perioda $T = 2\\,\\text{s}$, kmitani se opakuje kazde 2 sekundy. Frekvence je pak $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — ne $2\\,\\text{Hz}$! Frekvence = "Kolikrat za sekundu?", Perioda = "Jak dlouho trva jeden cyklus?"',
        mia_warning: 'Tato chyba zpusobila, ze Lumiho dychani bylo dvakrat rychlejsi — vypadal, jako by zrovna dobehol sprint!',
      },
      b_value: {
        wrong: 'Ztotozneni $b$ s periodou',
        correct: 'Prepocitej $b$ a $T$ pomoci vzorce',
        why: '$b$ NENI perioda, ale souvisi s ni pres $T = \\frac{2\\pi}{b}$. Pokud je perioda $4\\pi$, pak $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — ne $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter bezi — ale seknuti. Mia otevre monitor vykonu a vidi: V nekterych scenach padne snimkova frekvence na 15 FPS. "Kde presne se to zpomaluje?", pta se Tim. "Nepotrebuju prumer pres celou scenu, ale presne misto, kde vykon klesa." Jule se usmeji: "To je presne otazka, ktera vedla k vynalezu diferncialniho poctu — okamzita rychlost zmeny."',
      challenge: 'Najit presne misto, kde snimkova frekvence pada — ne jen prumer.',
      outro: 'Mia nasla kriticke misto: Presne u snimku 847 vybuchne cas renderu, protoze tam se najednou objevi 200 castic. "Bez okamzite rychlosti zmeny bych hledala vecne", rika. Tim prikyvuje: "Newton by to delal stejne — jen bez monitoru vykonu."',
    },
    objectives: {
      average_rate: 'Pocitat a interpretovat prumernou rychlost zmeny (sklon secny)',
      instantaneous_rate: 'Chapat okamzitou rychlost zmeny jako limitu',
      limit_concept: 'Sledovat prechod od secny k tecne',
      derivative_notation: 'Znat a pouzivat ruzne zapisy derivace',
    },
    explanation: {
      intro: 'Predstav si, ze jedeme na kole do skoly. Tvuj tachometr ukazuje 20 km/h — to je tva okamzita rychlost. Ale jak ji vypocitat? Kdyz reknes "Ujel jsem 10 km za 30 minut", je to prumer. Okamzita rychlost v konkretnim bode je neco jineho — a presne o tom je diferencialni pocet.',
      secant_to_tangent: 'Myslenka je genialne jednoducha: Vypocitej prumerny sklon mezi dvema body, a pak posouvej body stale bliz k sobe. V limitnim pripade — kdyz se vzdalenost blizi nule — ziskas sklon v jedinem bode. To je derivace:',
      mia_tip: 'Prumerna snimkova frekvence za 10 sekund mi nic nerekne. Potrebuji okamzitou hodnotu u snimku 847! Presne jako tachometr: neukazuje prumer cele jizdy, ale jak rychle jedes PRAVE TED.',
      derivative_meaning: 'Derivace $f\'(x_0)$ ma jasny vyznam: Udava sklon tecny ke grafu v bode $x_0$. Pokud $f\'(x_0) > 0$, funkce tam roste. Pokud $f\'(x_0) < 0$, klesa. Pokud $f\'(x_0) = 0$, funkce tam ma (mozna) maximum nebo minimum. Existuji ruzne zapisy:',
      geometric_interpretation: 'Geometricky se deje nasledujici: Secna dvema body na grafu se otaci, kdyz se body priblizuji. V limitnim pripade se secna stane tecnou — primkou, ktera graf "dotyka" v presne jednom bode. Sklon teto tecny je derivace.',
    },
    concepts: {
      difference_quotient: {
        title: 'Rozdilovy podil',
        desc: 'Prumerna rychlost zmeny mezi dvema body. Pocita sklon secny — primky, ktera protina graf ve dvou bodech.',
      },
      differential_quotient: {
        title: 'Diferencialni podil (derivace)',
        desc: 'Okamzita rychlost zmeny v jednom bode. Vznikne, kdyz $h$ v rozdilovem podilu miri k nule. Udava sklon tecny.',
      },
      derivative_notation: {
        title: 'Zapisy derivace',
        desc: 'Existuji tri bezne zapisy: $f\'(x)$ (Lagrange, nejcastejsi ve skole), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, zduraznuje zlomkovy charakter) a $\\dot{y}$ (Newton, hlavne ve fyzice pro casove derivace).',
      },
    },
    examples: {
      average_speed: {
        title: 'Prumerna rychlost',
        context: 'Micek se kuti po rampe. Draha zavisi kvadraticky na case.',
        step1: 'Dana je funkce drahy v case. Po 2 sekundach je micek 2 m daleko, po 4 sekundach 8 m.',
        step2: 'Prumerna rychlost mezi $t = 2$ a $t = 4$: Vydelime zmenu drahy zmenou casu. To dava $3\\,\\text{m/s}$ prumerne.',
        step3: 'Ted zmensime interval: Mezi $t = 2$ a $t = 2{,}1$ vyjde $2{,}05\\,\\text{m/s}$. Cim kratsi interval, tim blize k okamzite rychlosti pri $t = 2$.',
        mia_comment: 'Presne tak funguje muj monitor vykonu: Meri snimkovou frekvenci ve stale kratsich intervalech, az najde presne misto, kde to vazi.',
      },
      instantaneous_rate: {
        title: 'Vypocet okamzite rychlosti zmeny',
        context: 'Urc derivaci $f(x) = x^2$ v bode $x_0 = 3$.',
        step1: 'Dosadime $f(x) = x^2$ a $x_0 = 3$ do rozdiloveho podilu. Hledame: co se stane, kdyz $h$ miri k 0?',
        step2: 'Vypocteme citatel: $(3+h)^2 = 9 + 6h + h^2$. Minus $f(3) = 9$ dava $6h + h^2$ v citateli.',
        step3: 'Krattme $h$ (muzeme, protoze $h \\neq 0$ v limitnim procesu): Zbyva $6 + h$.',
        step4: 'Spocteme limitu: Pro $h \\to 0$ se $6 + h$ stane $6$. Sklon tecny pri $x = 3$ je tedy presne $6$.',
        mia_comment: 'Tecna pri $x = 3$ ma sklon 6. Kdyz to udelam pro kazdy bod, dostanu funkci derivace $f\'(x) = 2x$. Pri $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Souhlasi!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Radary a rychlost',
        desc: 'Radar nemeri tvoji okamzitou rychlost, ale prumernou rychlost na kratkem useku (usekove mereni: na nekolika kilometrech). Cim kratsi mereny usek, tim blize k okamzite hodnote.',
      },
      stock_trends: {
        title: 'Akciove kurzy a trendy',
        desc: 'Kdyz akcie "stoupaji", analytici maji na mysli kladnou derivaci kurzu. Sklon tecny ke krivce kurzu ukazuje trend: kladny = vzestupny trend, zaporny = sestupny trend, nula = bod zvratu.',
      },
      speedometer: {
        title: 'Tachometr v aute',
        desc: 'Tvuj tachometr ukazuje okamzitou rychlost — matematicky derivaci funkce drahy podle casu. GPS zarizeni ji pocitaji jako limitu z velmi kratkych casovych intervalu.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Prumer = okamzita hodnota',
        correct: 'Rozlisuj prumer od okamzite hodnoty',
        why: 'Prumerna rychlost zmeny na intervalu $[1;\\,5]$ NENI stejna jako okamzita rychlost zmeny pri $x = 3$ (uprostred). To plati jen u linearnich funkci! U zakrivených grafu se obe hodnoty lisi.',
        mia_warning: 'Nejdriv jsem spocitala prumernou snimkovou frekvenci a myslela si, ze je vse v poradku. Ale lokalne byly masivni propady! Prumer zamaskovoal problem.',
      },
      secant_tangent: {
        wrong: 'Sklon secny = sklon tecny',
        correct: 'Tecna je limitni pripad secny',
        why: 'Secna protina graf ve dvou bodech, tecna se ho dotyka v jednom. Teprve kdyz se dva body priblizi ($h \\to 0$), secna se stane tecnou. Bez limity je to jen priblizeni.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter potrebuje system vyvazeni: Jak rychle ma Lumi postupovat v urovnich? Jak silni se stavaji neprately? Kolik stoji vylepseni? "Kdyz vse roste linearne, hra bude nudna", rika Jule. Tim dodava: "A kdyz vse roste exponencialne, bude to nefer." Mia si uvedomuje: Musi znat ruzne typy rustu a cilene je pouzivat.',
      challenge: 'Najit spravne krivky rustu pro vyvazeni her — linearni, kvadraticke, exponencialni nebo logaritmicke.',
      outro: 'System vyvazeni Mii je hotovy: Rychlost behu roste linearne, poskozeni z padu kvadraticky, pozadavky na XP exponencialne a krivka uceni logaritmicky. "Kazda krivka ma sve misto", rika spokojena. Hra se ted citi fer a vzrusujici — od urovne 1 az po finalniho bosse.',
    },
    objectives: {
      identify_types: 'Rozpoznat ctyri hlavni tridy funkci (linearni, kvadraticke, exponencialni, logaritmicke) podle rovnic a grafu',
      compare_growth: 'Porovnavat chovani rustu trid funkci a radit je',
      match_context: 'Prirazovat spravnou tridu funkce k situaci a zduvodnit volbu',
      graph_recognition: 'Prirazovat grafy ke spravnym typum funkci',
    },
    explanation: {
      intro: 'V matematice existuji ruzne "rodiny" funkci — kazda s vlastnim charakterem. Nektere rostou rovnomerne, jine stale rychleji, dalsi stale pomaleji. Ctyri nejdulezitejsi tridy pro 10. rocnik jsou:',
      mia_tip: 'V hernim designu pouzivam kazdou tridu funkce na neco jineho: Linearni rust pro predvidatelne veci (rychlost behu), kvadraticky pro veci, ktere se "rozhoupeji" (poskozeni z padu), exponencialni pro vyzvy (pozadavky na XP) a logaritmicky pro efekty uceni (postup dovednosti).',
      growth_comparison: 'Rozhodujici je: Jak rychle roste kazda trida funkce pro velke hodnoty $x$? Poradi je vzdy stejne — bez ohledu na konkretni cisla:',
      choosing_functions: 'Vybrat spravnou funkci pro problem je klicova kompetence. Zeptej se: Je zmena konstantni (linearni)? Zrychluje se rovnomerne (kvadraticka)? Zdvojnasobuje se hodnota v pravidelnych intervalech (exponencialni)? Stava se prirustek stale mensim (logaritmicka)?',
    },
    concepts: {
      linear: {
        title: 'Linearni funkce',
        desc: 'Konstantni rychlost zmeny: V kazdem kroku se pricte stejna hodnota. Graf je primka. Smernici $m$ a usek na ose y $b$ lze primo odecist.',
      },
      quadratic: {
        title: 'Kvadraticke funkce',
        desc: 'Sama rychlost zmeny se meni linearne — pribiva stale rychleji vice (nebo mene). Graf je parabola s vrcholem.',
      },
      exponential: {
        title: 'Exponencialni funkce',
        desc: 'Rust o pevne procento: Cim vice je, tim vice pribude. Zdvojnasobeni v pravidelnych casovych intervalech. Dlouhodobe roste rychleji nez jakakoli mocninna funkce.',
      },
      logarithmic: {
        title: 'Logaritmicke funkce',
        desc: 'Inverzni funkce k exponencialni. Zpocatku roste rychle, pak stale pomaleji. Modeluje efekty nasyceni a krivky uceni.',
      },
    },
    examples: {
      identify_type: {
        title: 'Rozpoznani typu funkce z tabulky hodnot',
        context: 'Jsou dany tri datove sady. Jaky typ pasi ke kazde?',
        step1: 'Testuj linearni: Vypocitej rozdily po sobe jdoucich hodnot $y$. Jsou-li konstantni, funkce je linearni.',
        step2: 'Testuj exponencialni: Vypocitej podily po sobe jdoucich hodnot $y$. Jsou-li konstantni, funkce je exponencialni.',
        step3: 'Testuj kvadratickou: Vypocitej druhe diference (diference diferenci). Jsou-li konstantni, funkce je kvadraticka.',
        mia_comment: 'Presne tak testuji vyvazeni: Nechám simulovat 100 kol a kontroluji, zda hodnoty odpovidaji pozadovanemu typu rustu. Pokud druhe diference odbihuji, neco je spatne.',
      },
      game_mechanics: {
        title: 'Modelovani hernich mechanik',
        context: 'Ctyri ruzne herni mechaniky v Hafenlichter potrebuji ruzne funkce.',
        step1: 'Rychlost behu: Roste o stejnou hodnotu na uroven ($+5$ na uroven). To je konstantni zmena — takze linearni. Fer a predvidatelne.',
        step2: 'Poskozeni z padu: Ze 2 m male poskozeni, z 10 m mnohem vice. Narust poskozeni se zrychluje — kvadraticky. Fyzikalne to dava smysl (energie = $\\frac{1}{2}mv^2$).',
        step3: 'Pozadavky na XP za uroven: Uroven 2 vyzaduje 150 XP, uroven 3 vyzaduje 225 XP, uroven 4 vyzaduje 337 XP. Pozadavek roste vzdy o 50% — exponencialne. Takto zustsvanou vyssi urovne skutecnou vyzvou.',
        step4: 'Krivka uceni (dovednost): Zpocatku se ucis rychle, pozdeji stale pomaleji. Po $t$ hodinach hrani ovladas $20 \\cdot \\log_2(t+1)$ procent mechanik — logaritmicky.',
        mia_comment: 'To je jadro herniho designu: Spravna krivka pro spravnou mechaniku. Linearni XP by byly nudne, exponencialni poskozeni z padu by bylo nefer. Kazdy typ funkce ma svuj sweet spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Viralni stahovani aplikaci',
        desc: 'Kdyz kazdy uzivatel pozve dva kamarady a ti zase dva, pocet stazeni se zdvojnasobi. Zpocatku temer neviditelne, pak explozivni — typicky exponencialni. TikTok, Instagram a WhatsApp takto rostly.',
      },
      salary: {
        title: 'Kapesne a plat',
        desc: 'Tve kapesne roste (doufejme) kazdy rok o stejnou castku — linearni rust. Pozdeji v praci plat casto roste podobne: pevna castka za kazdy rok praxe.',
      },
      learning_curve: {
        title: 'Pokrok v uceni',
        desc: 'Novy nastroj, novy sport, novy jazyk: Zpocatku delas obrovsky pokrok, pak je stale tezsi se zlepsovat. To je logaritmicka krivka nasyceni — a je to uplne normalni!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Exponencialni" a "kvadraticky" je totez',
        correct: 'Exponencialni roste MNOHEM rychleji nez kvadraticky',
        why: 'U malych cisel $x^2$ a $2^x$ vypadaji podobne: $4^2 = 16$ a $2^4 = 16$. Ale pri $x = 10$: $10^2 = 100$ oproti $2^{10} = 1024$. Exponencialni rust predstihne kazdou mocninnou funkci!',
        mia_warning: 'Zpocatku jsem nastavila pozadavky na XP kvadraticky misto exponencialne. Vysledek: Od urovne 20 byla hra prilis snadna, protoze hraci sbirali XP rychleji nez rostly pozadavky.',
      },
      all_curves_linear: {
        wrong: 'Kazdy rust je linearni',
        correct: 'Nejdriv over typ rustu',
        why: 'Jen proto, ze se neco "zdvojnasobi", neznamena, ze je to linearni! "Kazde 3 dny dvakrat tolik sledujicich" je exponencialni, ne linearni. Linearni by bylo: "Kazdy den 100 novych sledujicich". Rozdil: konstantni prirustek (linearni) vs. konstantni faktor (exponencialni).',
      },
    },
  },
};
