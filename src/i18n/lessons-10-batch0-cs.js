export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'Mia sedí ve své malé kanceláři v hamburském přístavu a zírá na obrazovku. Lumi, její herní postava ve hře "Hafenlichter", má elegantně přeskakovat bedny a kontejnery — ale křivka skoku vypadá prostě špatně. "Fyzika nesedí," mumlá. Aby mohla naprogramovat realistickou dráhu skoku, potřebuje Mia kvadratické funkce.',
      challenge: 'Lumi má přeskakovat bedny — ale křivka skoku vypadá nepřirozeně.',
      outro: 'S vrcholovým tvarem naprogramovala Mia dokonalou křivku skoku! Lumi teď letí elegantním obloukem nad hamburskými kontejnery. "Konečně to vypadá realisticky," říká Tim a plácne si s ní.',
    },
    objectives: {
      recognize: 'Rozpoznat kvadratické funkce a popsat jejich vlastnosti',
      vertex_form: 'Bezpečně převádět mezi normálním a vrcholovým tvarem',
      pq_formula: 'Počítat nulové body kvadratickým vzorcem',
      graph_properties: 'Z rovnice vyčíst směr otevření, vrchol a osu souměrnosti',
    },
    explanation: {
      intro: 'Představ si, že házíš basketbalový míč. Míč letí obloukem nahoru, dosáhne nejvyššího bodu a zase padá. Tato dráha má úplně určitý tvar — parabolu. Matematicky ji popisujeme kvadratickou funkcí:',
      opening: 'Číslo $a$ určuje, jestli je parabola otevřená nahoru ($a > 0$), nebo dolů ($a < 0$) — a jak "úzká" nebo "široká" je. Čím větší $|a|$, tím užší parabola.',
      mia_tip: 'V mé hře je $a$ záporné, protože křivka skoku jde nahoru a pak zase dolů — jako obrácené U!',
      vertex_form: 'Vrcholový tvar ti hned prozradí nejvyšší (nebo nejnižší) bod paraboly. Vrchol $S$ má souřadnice $(d \\mid e)$:',
      conversion: 'Z normálního tvaru do vrcholového se dostaneš doplněním na čtverec. Šikovně přidáš číslo a zase ho odečteš, aby vznikl úplný čtverec.',
    },
    concepts: {
      normal_form: {
        title: 'Normální tvar',
        desc: 'Standardní zápis. Hned vidíš: $a$ = otevření, $c$ = úsek na ose y (kde parabola protíná osu y).',
      },
      vertex_form: {
        title: 'Vrcholový tvar',
        desc: 'Hned ti prozradí vrchol $S(d \\mid e)$. Nejlepší pro: vyčtení nejvyššího/nejnižšího bodu, rozpoznání posunutí.',
      },
      pq_formula: {
        title: 'Kvadratický vzorec',
        desc: 'Tvůj nástroj na nulové body. Podmínka: Rovnice musí mít tvar $x^2 + px + q = 0$ (koeficient před $x^2$ musí být 1!).',
      },
      discriminant: {
        title: 'Diskriminant',
        desc: 'Výraz pod odmocninou rozhoduje: $D > 0$ = dva nulové body, $D = 0$ = jeden nulový bod, $D < 0$ = žádný reálný nulový bod.',
      },
    },
    examples: {
      vertex: {
        title: 'Určení vrcholového tvaru',
        context: 'Mia chce vypočítat nejvyšší bod Lumiho skoku.',
        step1: 'Funkce je daná v normálním tvaru:',
        step2: 'Doplnění na čtverec: Přidáme $(\\frac{6}{2})^2 = 9$ a zase ho odečteme:',
        step3: 'Zjednodušíme — výraz v závorce je úplný čtverec:',
        step4: 'Vyčteme vrchol: $d = 3$, $e = -4$, tedy:',
        mia_comment: 'Vrchol v $(3 \\mid -4)$ je nejnižší bod, protože $a = 1 > 0$. Pro křivku skoku potřebuji $a < 0$, pak to bude nejvyšší bod!',
      },
      pq: {
        title: 'Nulové body kvadratickým vzorcem',
        context: 'Kde Lumi znovu dopadne na zem?',
        step1: 'Dáno: Rovnice už má správný tvar (koeficient u $x^2$ = 1):',
        step2: 'Vyčteme hodnoty $p$ a $q$:',
        step3: 'Dosadíme do kvadratického vzorce a vypočítáme:',
        step4: 'Lumi tedy přistane v $x = 2$ nebo $x = -4$:',
        mia_comment: 'Dva nulové body — parabola protíná osu x dvakrát. Ve hře to znamená: Lumi se odrazí v $x = -4$ a přistane v $x = 2$!',
      },
    },
    realworld: {
      basketball: {
        title: 'Hod na koš',
        desc: 'Každý hod na koš opisuje parabolu. Výška $h$ závisí na čase $t$. Trenéři to využívají k výpočtu optimálního úhlu odhodu.',
      },
      bridge: {
        title: 'Visuté mosty',
        desc: 'U visutých mostů, jako je Golden Gate Bridge, visí nosné lano téměř přesně ve tvaru paraboly – protože mostovka rozkládá svou váhu rovnoměrně po laně.',
      },
      pricing: {
        title: 'Optimalizace ceny',
        desc: 'Obchod chce vědět: Která cena přinese největší zisk? Když cena roste, kupuje méně lidí — zisk je parabola s maximem.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Chyba ve znaménku',
        correct: 'Dávej pozor na znaménka',
        why: 'V $f(x) = (x - d)^2 + e$ stojí před $d$ minus. To znamená: $f(x) = (x - 3)^2$ má vrchol v $d = +3$, ne v $-3$!',
        mia_warning: 'Tahle chyba ve znaménku mě stála 3 hodiny debugování. Lumiho křivka skoku byla posunutá doleva místo doprava!',
      },
      pq_wrong: {
        wrong: 'Kvadratický vzorec bez dělení',
        correct: 'Nejdřív vyděl $a$',
        why: 'Kvadratický vzorec funguje jen tehdy, když je koeficient před $x^2$ roven 1. U $2x^2 + 4x - 6 = 0$ musíš nejdřív vydělit 2: $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'Mia má problém s detekcí kolizí: Kdy se Lumi dotkne překážky? Tim navrhuje spočítat vzdálenost mezi dvěma body. "Na to potřebuješ Pythagorovu větu," říká. Mia si na tu větu vzpomíná ze školy — a najednou jí dává úplný smysl.',
      challenge: 'Detekce kolizí potřebuje výpočet vzdálenosti mezi objekty.',
      outro: 'Lumiho detekce kolizí teď funguje s přesností na pixel! Mia použila Pythagorovu větu, aby v reálném čase počítala vzdálenost mezi herní postavou a překážkami.',
    },
    objectives: {
      theorem: 'Bezpečně používat Pythagorovu větu',
      calculate_sides: 'Počítat chybějící strany v pravoúhlém trojúhelníku',
      recognize: 'Poznat, kdy jde o pravoúhlý trojúhelník',
      apply: 'Přenést větu na problémy z běžného života',
    },
    explanation: {
      intro: 'V každém pravoúhlém trojúhelníku platí jednoduché, ale silné pravidlo: Součet čtverců odvěsen se rovná čtverci přepony.',
      sides: 'Přitom je $c$ vždy nejdelší strana — přepona. Leží naproti pravému úhlu. Dvě kratší strany $a$ a $b$ se nazývají odvěsny.',
      mia_tip: 'Ve své hře počítám vzdálenost mezi Lumim a objektem jako přeponu. Vodorovná vzdálenost je $a$, svislá $b$ — a $c$ je skutečná vzdálenost!',
      solving: 'Vzorec můžeš upravit pro každou stranu. Když hledáš přeponu:',
    },
    concepts: {
      theorem: {
        title: 'Pythagorova věta',
        desc: 'Platí jen v pravoúhlých trojúhelnících. $c$ je přepona (naproti pravému úhlu), $a$ a $b$ jsou odvěsny.',
      },
      hypotenuse: {
        title: 'Výpočet přepony',
        desc: 'Když znáš obě odvěsny, odmocni součet jejich čtverců.',
      },
      cathetus: {
        title: 'Výpočet odvěsny',
        desc: 'Když znáš přeponu a jednu odvěsnu, odmocni rozdíl.',
      },
    },
    examples: {
      screen: {
        title: 'Výpočet úhlopříčky obrazovky',
        context: 'Mia chce vědět, jak velká je obrazovka jejího nového monitoru doopravdy.',
        step1: 'Monitor je 16 palců široký a 9 palců vysoký:',
        step2: 'Použijeme Pythagorovu větu — šířka a výška jsou odvěsny:',
        step3: 'Odmocníme a dostaneme úhlopříčku:',
        mia_comment: 'Úhlopříčka 18,36 palce — to je hodnota, kterou výrobci uvádějí jako "velikost obrazovky". Teď už vím proč!',
      },
      ladder: {
        title: 'Žebřík u zdi',
        context: 'Jak vysoko dosáhne 5metrový žebřík, který stojí 1,5 m od zdi?',
        step1: 'Žebřík je přepona, vzdálenost od zdi je odvěsna:',
        step2: 'Vyjádříme hledanou odvěsnu (výšku):',
        step3: 'Žebřík dosáhne skoro do výšky 4,77 m:',
        mia_comment: 'Ve hře používám přesně tenhle výpočet, abych zkontrolovala, jestli Lumi dosáhne na žebřík!',
      },
    },
    realworld: {
      screen: {
        title: 'Úhlopříčka obrazovky',
        desc: '"Velikost" obrazovky je vždy její úhlopříčka — spočítaná Pythagorovou větou ze šířky a výšky.',
      },
      football: {
        title: 'Úhlopříčka fotbalového hřiště',
        desc: 'Fotbalové hřiště má rozměry 105 m × 68 m. Jak daleko je to z rohu do rohu? Pythagorova věta ti to prozradí.',
      },
      wifi: {
        title: 'Dosah Wi-Fi',
        desc: 'Tvůj router stojí v přízemí, ty jsi v 1. patře. Skutečná vzdálenost k routeru je přepona z vodorovné a svislé vzdálenosti.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Přepona jako odvěsna',
        correct: 'c je vždy nejdelší strana',
        why: 'Přepona $c$ leží VŽDY naproti pravému úhlu. Je to nejdelší strana. Když ji zaměníš s odvěsnou, celý výpočet nesedí.',
      },
      root: {
        wrong: 'Odmocnina ze součtu',
        correct: 'Nejdřív sečti, pak odmocni',
        why: '$\\sqrt{a^2 + b^2}$ NENÍ totéž co $a + b$! Příklad: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, ale $3 + 4 = 7$.',
        mia_warning: 'Tuhle chybu našel Tim v mém kódu — detekce kolizí byla o 40% nepřesná!',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'Mia chce pro Hafenlichter postavit loot systém. Hráči mají nacházet vzácné předměty — ale ne moc často, jinak to bude nuda, a ne moc zřídka, jinak to bude frustrující. "To je čistý počet pravděpodobnosti," říká Jule. Mia si sedne a počítá.',
      challenge: 'Systém loot dropů má být férový a napínavý.',
      outro: 'Miin loot systém funguje! Vyvážila pravděpodobnosti dropů tak, že hráči v průměru najdou Rare item v každé 20. bedně. "Ta matematika za tím je vlastně jednoduchá," usmívá se — "ale vyvažování stejně chvíli trvalo."',
    },
    objectives: {
      basic: 'Uvádět pravděpodobnosti jako zlomek, desetinné číslo a procenta',
      tree: 'Řešit vícestupňové náhodné pokusy stromovými diagramy',
      expected_value: 'Vypočítat a interpretovat střední hodnotu',
      complement: 'Pracovat s opačnou pravděpodobností ("alespoň jednou...")',
    },
    explanation: {
      intro: 'Jak pravděpodobné je hodit šestku? Jaká je šance na vzácný předmět ve hře? Abys na takové otázky odpověděl, potřebuješ počet pravděpodobnosti. Základní myšlenka je jednoduchá:',
      range: 'Pravděpodobnosti leží vždy mezi 0 (nemožné) a 1 (jisté). Můžeš je zapsat jako zlomek ($\\frac{1}{6}$), desetinné číslo ($0{,}167$) nebo procenta ($16{,}7\\%$).',
      mia_tip: 'V Hafenlichter je $P(\\text{Rare Item}) = 0{,}05$. To znamená: Při každém dropu má hráč 5% šanci. Zní to málo — ale při mnoha dropech se to sčítá!',
      tree: 'U vícestupňových pokusů (např. dvakrát hodit kostkou) používáš stromový diagram. Podél cesty pravděpodobnosti násobíš:',
      complement: 'Často je jednodušší spočítat "opak". Pravděpodobnost, že se něco NESTANE, je:',
    },
    concepts: {
      laplace: {
        title: 'Laplaceův pokus',
        desc: 'Když jsou všechny výsledky stejně pravděpodobné (jako u férové kostky), prostě vydělíš: příznivé výsledky všemi možnými.',
      },
      complement: {
        title: 'Opačná pravděpodobnost',
        desc: 'Pravděpodobnost, že A NENASTANE. Super užitečné pro úlohy typu "alespoň jednou"!',
      },
      expected: {
        title: 'Střední hodnota',
        desc: '"Průměrná" hodnota při mnoha opakováních. U kostky: $E(X) = 3{,}5$ — 3,5 sice nikdy hodit nemůžeš, ale v průměru vychází právě tahle hodnota.',
      },
    },
    examples: {
      dice: {
        title: 'Hodit sudé číslo',
        context: 'Jak pravděpodobné je hodit kostkou sudé číslo?',
        step1: 'Kostka má 6 stěn — to je naše $\\Omega$:',
        step2: 'Příznivé výsledky (sudá čísla): 2, 4, 6 — to jsou 3:',
        step3: 'Vypočítáme pravděpodobnost:',
        mia_comment: '50% — to je intuitivně jasné. Ale u složitějších otázek pomůže vzorec tam, kde intuice selže!',
      },
      loot: {
        title: 'Alespoň jeden Rare item',
        context: 'Mia chce vědět: Jak pravděpodobné je dostat v 10 loot dropech alespoň jeden Rare item?',
        step1: 'Pravděpodobnost Rare itemu na jeden drop je 5%:',
        step2: 'Použijeme opačnou pravděpodobnost: Nejdřív spočítáme, že v 10 dropech NEPADNE žádný Rare:',
        step3: 'To je asi 60% — v 60% případů nedostaneš ŽÁDNÝ Rare:',
        step4: 'Opačná pravděpodobnost je hledaná odpověď:',
        mia_comment: '40% šance na alespoň jeden Rare v 10 dropech — to působí férově! Když budou hráči frustrovaní, prostě zvýším drop rate.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Herní lootboxy',
        desc: 'Hry jako Genshin Impact nebo EA Sports FC používají pro své lootboxy pravděpodobnosti. V obchodech s aplikacemi od Applu a Googlu se musí šance na výhru zobrazovat – s matematikou si můžeš ověřit, jestli se nákup vyplatí.',
      },
      shuffle: {
        title: 'Spotify Shuffle',
        desc: 'Spotify Shuffle není doopravdy náhodný — protože "skutečná" náhoda působí divně (někdy přijde stejná písnička 3x za sebou). Spotify používá algoritmy, které "působí" náhodněji.',
      },
      lottery: {
        title: 'Šance na výhru v loterii',
        desc: '6 správných čísel v loterii — zní to reálně? Skutečná pravděpodobnost je mizivě malá:',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Sčítat cesty místo násobení',
        correct: 'Podél cesty násobit',
        why: 'Ve stromovém diagramu násobíš podél cesty (spojka A). Sčítat smíš jen tehdy, když spojuješ různé cesty (spojka NEBO).',
        mia_warning: 'Tuhle chybu jsem udělala u loot systému. Drop rate byly moc vysoké, protože jsem sčítala místo násobení — každý hráč měl hned všechno!',
      },
      percent: {
        wrong: 'Procenta nad 100%',
        correct: 'Maximum je 100%',
        why: 'Pravděpodobnost nemůže být nikdy větší než 1 (= 100%). Když ti vyjde $P > 1$, máš ve výpočtu chybu.',
      },
    },
  },
};
