export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Amiruv ML model pro DataPulse dava pouzitelna doporuceni pisnicek — ale trenovani trva vecnost. "Gradient Descent neni v zasade nic jineho nez derivace", vysvetluje mu jeho profesorka matematiky. "Kdyz pochopis, jak funguji pravidla derivovani, pochopis taky, proc se tvuj model uci." Amir se rozhodne pravidla systematicky projit.',
      challenge: 'Amir chce pochopit, jak jeho ML model vnitrne derivuje ztratovou funkci — k tomu potrebuje pravidla: mocninne, souctu, soucinu a retezove.',
      outro: 'Amir ma ted pevne zaklady: Mocninne pravidlo pro jednoduche vyrazy, pravidla souctu a konstanty pro slozene vyrazy, pravidlo soucinu pro nasobeni a retezove pravidlo pro vnorene funkce. "Ted konecne chapu, co PyTorch dela na pozadi s Autogradem", rika spokojen.',
    },
    objectives: {
      power_rule: 'Bezpecne pouzivat mocninne pravidlo: derivovat $f(x) = x^n$',
      constant_sum_rule: 'Ovladat pravidla konstanty a souctu: derivovat cleny jednotlive a zachovavat koeficienty',
      product_quotient_rule: 'Spravne pouzivat pravidla soucinu a podilu',
      chain_rule: 'Bezpecne pouzivat retezove pravidlo u vnorenych funkci',
    },
    explanation: {
      intro: 'Mocninne pravidlo je nejdulezitejsi zakladni pravidlo: Vytahnes exponent jako koeficient a snizis exponent o 1. Tim derivujes kazdou mocninnou funkci raz dva:',
      constant_factor: 'Konstantni koeficienty zustavaji pri derivovani zachovany a soucty se derivuji clen po clenu. Tim se slozene vyrazy zprehledni:',
      amir_tip: 'V mem ML kodu jsou vsude soucty a koeficienty — ztratova funkce je obrovsky soucet pres vsechny datove body. Ze mohu derivovat kazdy clen samostatne, dela backpropagation vubec moznou!',
      product_rule: 'Kdyz jsou dve funkce nasobeny, NESMI se proste derivovat kazda zvlast. Misto toho plati pravidlo soucinu — "prvni krat derivace druhe plus druha krat derivace prvni":',
      quotient_rule: 'Pro zlomky funkci existuje pravidlo podilu. Pomucka: "Jmenovatel krat derivace citatele minus citatel krat derivace jmenovatele pres jmenovatel na druhou":',
      chain_rule: 'U vnorenych funkci — tedy funkce ve funkci — potrebujes retezove pravidlo. Derivujes "zvenku dovnitr" a nasobis vnitrni derivaci:',
    },
    concepts: {
      power_rule: {
        title: 'Mocninne pravidlo',
        desc: 'Zakladni pravidlo: Exponent se stane koeficientem, exponent klesa o 1. Plati i pro zaporne a zlomkove exponenty, napr. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Pravidla souctu a konstanty',
        desc: 'Soucty se derivuji clen po clenu, konstantni koeficienty se zachovavaji. Tim rozlozis kazdy polynomicky clen na jednoduche casti.',
      },
      product_rule: {
        title: 'Pravidlo soucinu',
        desc: 'Pro soucin dvou funkci: Prvni derivovana krat druha plus prvni krat druha derivovana. Nepostradatelne, jakmile se nasobi dva promenne vyrazy.',
      },
      chain_rule: {
        title: 'Retezove pravidlo',
        desc: 'Derivuj vnejsi funkci, vnitrni nech byt, pak nasob derivaci vnitrni. Srdce backpropagation v neurovych sitich.',
      },
    },
    examples: {
      power_sum: {
        title: 'Derivovani polynomu mocninnym a souctovym pravidlem',
        context: 'Amir zjednodusuje clen ze sve nakladove funkce.',
        step1: 'Dan je polynom — derivujeme kazdy clen zvlast:',
        step2: 'Aplikujeme mocninne pravidlo na kazdy clen: Exponent jako koeficient, exponent minus 1. Konstanta $-7$ odpada:',
        step3: 'Po zjednoduseni dostaneme funkci derivace:',
        amir_comment: 'Presne takto vypada gradient mych polynomickych features. Kazdy clen prispiva ke sklonu — a PyTorch to dela automaticky pro tisice parametru soucasne.',
      },
      chain_rule: {
        title: 'Vnorena funkce s retezovym pravidlem',
        context: 'Amir derivuje aktivacni funkci, ktera obsahuje slozeni.',
        step1: 'Dana je vnorena mocninna funkce:',
        step2: 'Rozlozeni na vnejsi funkci $f(u) = u^3$ a vnitrni funkci $g(x) = 2x^2 + 1$:',
        step3: 'Derivuj vnejsi (mocninne pravidlo na $u^3$), nech vnitrni byt, krat vnitrni derivace ($4x$):',
        step4: 'Usporadano — faktor $4x$ vytazen pred:',
        amir_comment: 'Retezove pravidlo je doslova backpropagation! Kazda vrstva v neuronovce je vnorena funkce a retezove pravidlo retezi gradienty od vrstvy k vrstve.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent v Machine Learning',
        desc: 'Kazdy ML model minimalizuje ztratovou funkci derivovanim. Gradient ukazuje smer nejstrmejsiho vzestupu — jdeme opacnym smerem, abychom nasli minimum.',
      },
      marginal_cost: {
        title: 'Mezni naklady v ekonomii',
        desc: 'Derivace nakladove funkce $K(x)$ dava mezni naklady: Kolik stoji vyrobit jednu dalsi jednotku? Firmy to denne pouzivaji pro kalkulaci cen.',
      },
      acceleration: {
        title: 'Zrychleni ve fyzice',
        desc: 'Rychlost je derivace drahy, zrychleni je derivace rychlosti. Senzor v tvem telefonu meri presne toto: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'Derivace konstanty je sama konstanta',
        correct: 'Derivace konstanty je vzdy nula',
        why: 'Konstanta nema sklon — nemeni se. Pomysli na $f(x) = 5$: To je vodorovná primka, takze sklon je vsude 0. Plati to pro kazde cislo bez $x$.',
        amir_warning: 'Bias term v mem modelu je konstanta — jeho derivace podle $x$ je 0. Pokud na to zapomenes, gradient dostane chybny offset a trenovani diverguje.',
      },
      chain_rule_forgotten: {
        wrong: 'Zapomenuti vnitrni derivace u vnorenych funkci',
        correct: 'Vzdy nasob vnitrni derivaci',
        why: 'U $[(3x+1)^4]\'$ nestaci jen stahnout exponent. MUSIS nasobit derivaci vnitrniho clenu $(3x+1)\' = 3$. Bez vnitrni derivace chybi faktor 3.',
        amir_warning: 'Predstav si, ze v neuronove siti zapomenes vnitrni derivaci u jedne vrstvy — gradient by byl uplne spatny a model se uci nesmysly. Retezove pravidlo neni volitelne!',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Amiruv doporucovaci algoritmus dava vysledky — ale jsou opravdu optimalni? "Musis ztratovou funkci kompletne analyzovat", rika jeho profesor. "Kde jsou minima? Kde body zvratu?" Amir si uvedomuje: Uplna analyza krivky mu ukaze, jestli model opravdu nasel globalni minimum, nebo uvizl v lokalnim.',
      challenge: 'Amir analyzuje krajinu ztrát sveho modelu: systematicky urcuje koreny, extremy, body zvratu a monotonost funkce.',
      outro: 'Amir dokaze ted uplne charakterizovat kazdou racionalni funkci: najit koreny, urcit maxima a minima, vypocitat body zvratu a odecist monotonost. "Kdyz si nakreslim krajinu ztrat, okamzite vidim, jestli optimizer pristal ve spravnem udoli", rika.',
    },
    objectives: {
      zeros_extrema: 'Systematicky urcovat koreny a extremni body funkce',
      inflection_points: 'Pocitat body zvratu a chapat jejich vyznam pro prubeh krivky',
      monotonicity_symmetry: 'Analyzovat monotonost a symetrii funkce',
    },
    explanation: {
      intro: 'Analyza krivky je uplny rozbor funkce. Zaciname s koreny — misty, kde graf protina osu $x$:',
      extrema: 'Extremni body (maxima a minima) najdes tam, kde je prvni derivace rovna nule. Ale pozor: Ne kazdy koren $f\'$ je automaticky extrem! Potrebujes druhou derivaci k overeni:',
      amir_tip: 'Krajina ztrat meho modelu ma mnoho lokalnich minim. Analyzou krivky mohu overit, jestli je kriticky bod opravdu minimum — nebo jen sedlovy bod, kde optimizer uvisne.',
      inflection: 'Body zvratu oznacuji prechod mezi levym a pravym zakrivenim. Tady se meni charakter zakriveni — druha derivace meni znamenko:',
      monotonicity: 'Monotonost ti rika, kde funkce roste a kde klesa. Odectes ji primo ze znamenka prvni derivace:',
    },
    concepts: {
      extrema: {
        title: 'Extremni body (max/min)',
        desc: 'Nutna podminka: $f\'(x_0) = 0$. Postacujici: $f\'\'(x_0) < 0$ dava maximum, $f\'\'(x_0) > 0$ dava minimum. Obe podminky dohromady daji jistotu.',
      },
      inflection: {
        title: 'Body zvratu',
        desc: 'Kde se meni zakriveni: $f\'\'(x_0) = 0$ A $f\'\'\'(x_0) \\neq 0$. U normalnich rozdeleni oznacuji body zvratu smerodatnou odchylku.',
      },
      symmetry: {
        title: 'Symetrie',
        desc: 'Osova symetrie k ose $y$ pri $f(-x) = f(x)$ (jen sude exponenty). Bodova symetrie k pocatku pri $f(-x) = -f(x)$ (jen liche exponenty). Usetri praci!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Uplna analyza krivky',
        context: 'Amir zkouma kubickou funkci — podobnou ztraovym funkcim s vice extremy.',
        step1: 'Dana je funkce — analyzujeme ji kompletne:',
        step2: 'Sestavime prvni derivaci a urcime jeji koreny (nutna podminka pro extremy):',
        step3: 'Vyhodnotime druhou derivaci v kritickych bodech (postacujici podminka): Zaporna hodnota = maximum, kladna hodnota = minimum:',
        step4: 'Urcime bod zvratu pres $f\'\' = 0$ a potvrdime treti derivaci:',
        amir_comment: 'Presne tak analyzuji krajinu ztrat: Nejdriv najdu kriticke body, pak overim, jestli je to minimum nebo sedlovy bod. U vysoke-dimenzionalnich funkci to muj optimizer dela numericky — ale princip je identicky.',
      },
      graph_properties: {
        title: 'Vyuziti symetrie a extremu',
        context: 'Symetricka funkce — polovina prace odpada diky symetrii.',
        step1: 'Dana je funkce 4. stupne — nejdriv overime symetrii:',
        step2: 'Dosadime $-x$: Vsechny exponenty sude, takze $f(-x) = f(x)$ — osove symetricka! Extremy se vyskytuji symetricky:',
        step3: 'Polozime prvni derivaci rovnou nule — diky symetrii staci najit kladna reseni:',
        step4: 'Vypocteme funkcni hodnoty — diky symetrii $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symetrie v datech je zlato: Pokud vim, ze moje ztratova funkce je symetricka, musim prohledat jen polovinu prostoru parametru. To zkrati cas trenovani na polovinu!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analyza rozdeleni dat',
        desc: 'Normalni rozdeleni ma body zvratu pri $\\mu \\pm \\sigma$. Analyza krivky ti prozradi, kde se soustredi vetsina datovych bodu a kde zacina rozptyl.',
      },
      profit_analysis: {
        title: 'Maximalizace zisku',
        desc: 'Funkce zisku $G(x)$ ma maximum — optimalni objem vyroby. Analyza krivky presne ukaze, pri jakem mnozstvi je zisk maximalni.',
      },
      population_growth: {
        title: 'Populacni rust',
        desc: 'Bod zvratu rustove krivky oznacuje moment, od ktereho rust klesa. Epidemiologove pouzivaji presne tuto analyzu pro krivky nakazy.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Kazdy koren $f\'$ je automaticky extremni bod',
        correct: 'Koren $f\'$ PLUS zmena znamenka nebo $f\'\' \\neq 0$ overit',
        why: 'U $f(x) = x^3$ je $f\'(0) = 0$, ale zadny extrem — je to sedlovy bod! MUSIS overit postacujici podminku ($f\'\' \\neq 0$ nebo zmena znamenka $f\'$).',
        amir_warning: 'Ve vyssich dimenzich se takovym mistum rika "Saddle Points" — optimizer tam uvisne a mysli si, ze nasel minimum. Vzdy kontroluj druhou derivaci!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ staci pro bod zvratu',
        correct: '$f\'\'(x_0) = 0$ A $f\'\'\'(x_0) \\neq 0$ spolecne potvrzuji bod zvratu',
        why: 'U $f(x) = x^4$ je $f\'\'(0) = 0$, ale zadny bod zvratu — zakriveni se nemeni! Treti derivace musi byt nenulova, aby garantovala zmenu zakriveni.',
        amir_warning: 'Stejna past jako u extremu: Nutna podminka sama nikdy nestaci. Vzdy overuj postacujici podminku — jinak veris chybnemu vysledku.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse ma bezet na telefonu — ale Amiruv model spotrebuje prilis pameti. "Musis optimalizovat architekturu site", rika jeho kolegyne Sara. "Maximalni presnost pri minimalnim vyuziti pameti." Amir pozna: To je klasicka optimalizacni uloha — optimalizovat jednu velicinu za omezeni jine.',
      challenge: 'Amir chce najit nejlepsi architekturu modelu: maximalni kvalita predikci za podminky omezenych vypocetnich zdroju.',
      outro: 'Amir pochopil princip: Sestavit ucelovou funkci, dosadit vedlejsi podminku, redukovat na jednu promennou, derivovat, polozit rovnu nule, overit. "At uz rozmery plechovky nebo parametry modelu — schema je vzdy stejne", konstatuje. Jeho model se ted vejde do 50 MB.',
    },
    objectives: {
      setup_equations: 'Z praktickeho kontextu sestavit ucelovou funkci a vedlejsi podminku',
      optimize_constraints: 'Dosazenim vedlejsi podminky vytvorit funkci jedne promenne a optimalizovat',
      verify_extremum: 'Druhou derivaci overit, zda se jedna o maximum nebo minimum, a zohlednit krajni hodnoty',
    },
    explanation: {
      intro: 'U optimalizacnich uloh jde vzdy o totez: Jedna velicina ma byt co nejvetsi nebo nejmensi (ucelova funkce), pricemz plati omezeni (vedlejsi podminka):',
      strategy: 'Strategie je vzdy stejna: (1) Sestavit ucelovou funkci — co se ma optimalizovat? (2) Najit vedlejsi podminku — jake omezeni plati? (3) Vyresit vedlejsi podminku pro jednu promennou a dosadit do ucelove funkce. (4) Derivovat, polozit rovnu nule, overit.',
      amir_tip: 'Ladeni hyperparametru je presne takova optimalizacni uloha: Chci minimalizovat validacni chybu (ucelova funkce), ale pamet GPU je omezena (vedlejsi podminka). Schema z hodiny matiky funguje 1:1!',
      substitution: 'Po dosazeni vedlejsi podminky zavisi ucelova funkce uz jen na jedne promenne. Ted se normalne derivuje a overi kriticky bod:',
      domain_check: 'Nezapomen na defincni obor! U reálnych problemu jsou casto hranice (napr. $r > 0$ pro polomer). Porovnej hodnotu funkce v kritickem bode s krajnimi hodnotami — nekdy lezi optimum na okraji.',
    },
    concepts: {
      target_function: {
        title: 'Ucelova funkce',
        desc: 'Velicina, ktera se ma optimalizovat — maximalni zisk, minimalni povrch, nejlepsi presnost. Zpocatku casto zavisi na dvou promennych.',
      },
      constraint: {
        title: 'Vedlejsi podminka',
        desc: 'Omezeni, ktere plati — pevny objem, omezeny rozpocet, omezene parametry. Umoznuje eliminovat jednu promennou a redukovat ucelovou funkci na jednu promennou.',
      },
      boundary_check: {
        title: 'Kontrola krajnich hodnot',
        desc: 'Optimum muze lezet i na okraji definicniho oboru. Vzdy porovnej $f(x_{opt})$ s hodnotami funkce na okrajich $f(a)$ a $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Plechovka s minimalni spotrebou materialu',
        context: 'Valcova plechovka ma pojmout 330 ml — s co nejmensim mnozstvim plechu.',
        step1: 'Vedlejsi podminka: Objem je pevny. Vyresime pro $h$, abychom eliminovali jednu promennou:',
        step2: 'Sestavime ucelovou funkci (povrch) a dosadime $h$ — ted vse zavisi jen na $r$:',
        step3: 'Derivujeme, polozime rovnu nule a vyresime pro $r$ — to je optimalni polomer:',
        step4: 'Overime druhou derivaci: Kladna hodnota znamena minimum — opravdu jsme nasli nejuspornejsi plechovku:',
        amir_comment: 'To je presne jako komprese modelu: Pevna presnost (vedlejsi podminka), minimalni pocet parametru (ucelova funkce). Nahradim $r$ za "sirku vrstvy" a $h$ za "hloubku" — stejny princip!',
      },
      profit_max: {
        title: 'Maximalni zisk',
        context: 'Startup chce najit optimalni cenu pro svuj predplatny model.',
        step1: 'Sestavime funkci zisku: trzby minus naklady — tady uz v jedne promenne:',
        step2: 'Polozime derivaci rovnu nule — optimalni mnozstvi:',
        step3: 'Druha derivace je zaporna — jde tedy o maximum. Zisk je tady opravdu maximalni:',
        step4: 'Vypocteme maximalni zisk dosazenim:',
        amir_comment: 'Optimalizace cen je klasika v Data Science. U DataPulse bychom mohli optimalni uroven predplatneho vypocitat presne takto — maximalizovat zisk za podminky, ze uzivatele neodejdou.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Optimalizace hyperparametru',
        desc: 'Rychlost uceni $\\alpha$ v Gradient Descent musi byt optimalne zvolena: Prilis velka = divergence, prilis mala = vecne pomale. Optimalni $\\alpha$ minimalizuje validacni chybu.',
      },
      packaging: {
        title: 'Design obalu',
        desc: 'Minimalni spotreba materialu pri pevnem objemu — presne to resi inzenyri denne. Kazda plechovka na napoje, kazdy karton je vysledkem optimalizacni ulohy.',
      },
      solar_panel: {
        title: 'Nastaveni solarniho panelu',
        desc: 'Uhel naklonu solarniho panelu urcuje energeticky vynos. Najit optimalni uhel je optimalizacni uloha s polohou slunce jako vedlejsi podminkou.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Prime derivovani ucelove funkce se dvema promennymi',
        correct: 'Nejdriv dosad vedlejsi podminku, pak derivuj',
        why: 'Se dvema promennymi nemuzes proste derivovat podle $x$ — $y$ se meni s nim! MUSIS pouzit vedlejsi podminku k vyjadreni $y$ pomoci $x$. Teprve pak vse zavisi na jedne promenne.',
        amir_warning: 'To je jako ML model s prilis mnoha volnymi parametry: Bez omezeni zadne smysluplne optimum. Vedlejsi podminka redukuje stupne volnosti — presne jako regularizace.',
      },
      no_boundary: {
        wrong: 'Kriticke misto povazovat za globalni optimum',
        correct: 'Porovnat kriticke misto s krajnimi hodnotami',
        why: 'Na omezenem intervalu $[a, b]$ muze optimum lezet na okraji! $f\'(x_0) = 0$ dava jen lokalni kandidaty. Musis porovnat $f(x_0)$, $f(a)$ a $f(b)$.',
        amir_warning: 'V praxi ma kazdy parametr povoleny rozsah. Moje rychlost uceni nemuze byt zaporna, velikost davky nemuze prekrocit pamet GPU. Kontrola krajnich hodnot je povinnost!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse bezi — ale Amir potrebuje novou metriku: Kolik pisnicek uzivatele celkove poslechnou za tyden? Ma sazbu poslechu $r(t)$ jako funkci casu, ale potrebuje celkovy pocet. "Sazba krat cas dava mnozstvi — ale sazba se neustale meni", premysli Amir. Jeho kamared Kai se usmeji: "Zni to jako integral."',
      challenge: 'Amir chce z casove zavisle sazby poslechu $r(t)$ vypocitat celkovy pocet poslechnutych pisnicek — to ho privadi k integralnimu poctu.',
      outro: 'Amir ted umi tvorit primitivni funkce, pocitat urcite integraly a urcovat plochy mezi krivkami. "Integrovani je opak derivovani — a v praxi tim scitam spojita data", shrnuje. Jeho metrika tydenich poslechu je hotova.',
    },
    objectives: {
      antiderivative: 'Tvorit primitivni funkce obracenim mocninneho pravidla a chapat integracni konstantu $C$',
      definite_integral: 'Pocitat urcite integraly pomoci zakladni vety: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Chapat zakladni vetu diferncialniho a integralniho poctu a pouzivat ji pri vypoctech ploch',
    },
    explanation: {
      intro: 'Integrovani je opak derivovani: Pokud $F\'(x) = f(x)$, pak $F(x)$ je primitivni funkce k $f(x)$. Obecna primitivni funkce vzdy obsahuje konstantu $C$:',
      power_rule_integral: 'Mocninne pravidlo pozpatku: Zvys exponent o 1 a vydel novym exponentem. Funguje to pro vsechna $n \\neq -1$:',
      amir_tip: 'Integrovani je jako agregace v databazich: Derivace dava okamzitou rychlost zmeny, integral vse scita. Kdyz znam pocty stazeni za hodinu, integral mi da celkovy pocet stazeni za casove obdobi.',
      definite_integral: 'Urcity integral pocita "celkovy efekt" mezi dvema mezemi. Zakladni veta to usnadnuje: Primitivni funkce v horni mezi minus primitivni funkce v dolni mezi:',
      area_interpretation: 'Geometricky je urcity integral plocha mezi krivkou a osou $x$. Pozor: Plochy pod osou $x$ se pocitaji zaporne! Pro skutecnou plochu potrebujes absolutni hodnotu:',
    },
    concepts: {
      antiderivative: {
        title: 'Primitivni funkce',
        desc: 'Funkce $F(x)$ s $F\'(x) = f(x)$. Konstanta $+C$ je dulezita, protoze ruzne primitivni funkce se lisi jen o konstantu.',
      },
      definite_integral: {
        title: 'Urcity integral',
        desc: 'Pocita znamenkovanou plochu mezi $f(x)$ a osou $x$ od $a$ do $b$. Horni mez dosadit minus dolni mez dosadit.',
      },
      fundamental_theorem: {
        title: 'Zakladni veta analyzy',
        desc: 'Spojuje derivovani a integrovani: Jsou to vzajemne inverzni operace. Urcity integral lze vypocitat pomoci primitivni funkce.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Plocha mezi parabolou a osou $x$',
        context: 'Amir vizualizuje rozdeleni casu poslechu jako plochu pod krivkou.',
        step1: 'Urcime funkci a koreny — to jsou nase integracni meze:',
        step2: 'Sestavime primitivni funkci obracenim mocninneho pravidla:',
        step3: 'Vypocteme urcity integral: Dosadime horni mez minus dolni mez:',
        step4: 'Integral je zaporny, protoze parabola lezi pod osou $x$. Pro plochu vezmeme absolutni hodnotu:',
        amir_comment: 'Zaporne integraly davaji v datove analyze plny smysl: Pokud $f(x)$ je odchylka od prumeru, zaporny integral ukazuje, ze hodnoty celkove lezely pod prumerem.',
      },
      distance_from_velocity: {
        title: 'Vypocet drahy z rychlosti',
        context: 'Jak daleko ujede autonomni auto za 4 sekundy?',
        step1: 'Dana je funkce rychlosti:',
        step2: 'Celkova draha je integral rychlosti pres cas:',
        step3: 'Sestavime primitivni funkci — integrujeme kazdy clen zvlast:',
        step4: 'Dosadime meze a vypocteme rozdil:',
        amir_comment: 'Senzorova data prichazeji jako sazba — rychlost, propustnost, pozadavky za sekundu. Integral z toho dela celkove mnozstvi. Muj dashboard ukazuje presne toto: $\\int_0^T r(t)\\,dt$ = celkovy pocet streamu.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Agregace dat v case',
        desc: 'Kdyz je datova sazba $r(t)$ znama, integral dava celkove mnozstvi za casove obdobi. Takto streamovaci sluzby pocitaji mesicni minuty poslechu ze sekundovych dat.',
      },
      energy_consumption: {
        title: 'Spotreba energie',
        desc: 'Vykon $P(t)$ ve wattech krat cas dava energii v joulech — ale jen pri konstantnim vykonu. Pri kolisajicim vykonu potrebujes integral: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Pravdepodobnosti',
        desc: 'Pravdepodobnost, ze nahodna velicina lezi mezi $a$ a $b$, je plocha pod hustotni funkci — tedy urcity integral. Zaklad veskere statistiky.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Zapomenuti integracni konstanty $C$ u neurditych integralu',
        correct: 'Vzdy pridej $+ C$ u neurciteho integralu',
        why: 'Pokud $F\'(x) = 2x$, pak jak $x^2$, tak $x^2 + 7$ jsou primitivni funkce. $+C$ reprezentuje vsechny mozne primitivni funkce. U urciteho integralu se $C$ zkrati — tam ji muzes vynechat.',
        amir_warning: 'V praxi je $C$ pocatecni podminka: Kolik pisnicek uzivatel uz poslouchal, nez jsme zacali merit? Bez $C$ tvuj vypocet startuje od nuly misto od skutecne hodnoty.',
      },
      negative_area: {
        wrong: 'Prima interpretace integralu jako plochy, i kdyz je zaporny',
        correct: 'Pro skutecnou plochu vez absolutni hodnotu integralu',
        why: 'Integral $\\int_a^b f(x)\\,dx$ muze byt zaporny, kdyz $f(x) < 0$. To je spravne jako znaménkovaná plocha. Pokud potrebujes geometrickou plochu, musis integrovat $|f(x)|$ nebo pocitat dilci plochy zvlast.',
        amir_warning: 'Predstav si, ze pocitas celkovy cas poslechu a dostanes zaporny vysledek — to by bylo zjevne spatne. U plosnych uloh vzdy over, jestli funkce meni znamenko, a pocitej dilci intervaly zvlast!',
      },
    },
  },
};
