export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'Mia staví pro Světla přístavu minihru s parkovacím domem: Lumi v něm odstaví dodávku a při vyzvednutí musí zaplatit. Mia programuje tarif — 2,00 € do jedné hodiny, potom 3,50 €. Při testování si Tim něčeho všimne: „Když přijdeš o sekundu později, stojí to najednou o 1,50 € víc. Je to bug?" Mia se podívá na graf. Není rozbitý — skáče. A právě tohle skákání má svoje jméno.',
      challenge: 'Kdy má funkce skutečný skok, kdy jen jednu chybějící díru a kdy utíká do nekonečna? Mia musí tyto tři případy spolehlivě rozlišovat, aby mohla rozhodnout, jaké tarify vůbec smí takto postavit.',
      outro: 'Mia teď umí v každém podezřelém místě ověřit, zda je funkce spojitá: limita zleva, limita zprava, funkční hodnota — shodují-li se všechny tři, je všechno v pořádku. A ví, které mezery umí opravit a které ne. Tarif parkovacího domu mimochodem zůstává nespojitý. To není bug, to je obchodní rozhodnutí.',
    },
    objectives: {
      anschaulich: 'Poznat spojitost názorně — a vědět, proč „nakreslit bez zvednutí tužky" jako definice nestačí',
      definition: 'Ověřit spojitost v bodě pomocí limity: $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Spolehlivě rozlišovat odstranitelnou nespojitost, skok a pól',
      zwischenwertsatz: 'Pomocí věty o mezihodnotě dokázat existenci nulového bodu',
    },
    explanation: {
      intro: 'Názorně znamená spojitá: graf můžeš nakreslit, aniž bys zvedl tužku. To je dobrá první myšlenka — ale není to definice, se kterou se dá počítat. Co třeba funkce, které chybí přesně jediný bod? Tužku prakticky nezvedáš, a přesto funkce v tom místě spojitá není. Pro pevnou definici potřebuješ limitu z diferenciálního počtu.',
      definition: 'Funkce $f$ se nazývá spojitá v bodě $x_0$, jestliže si funkční hodnota a limita v tomto bodě neodporují:',
      drei_bedingungen: 'V tomto jediném řádku se skrývají tři požadavky. Všechny tři musí být splněny — u každého protipříkladu selže přesně jeden z nich:',
      mia_tip: 'Ověřuju to vždycky v tomhle pořadí: Za prvé, patří ten bod vůbec do definičního oboru? Pokud ne, spojitá tam být rozhodně nemůže. Za druhé, blížím se zleva i zprava ke stejné hodnotě? Za třetí, je ta hodnota ta, kterou funkce v tom bodě opravdu nabývá? Tři fajfky, hotovo.',
      einseitig: 'U funkcí definovaných po částech se musíš v místě napojení podívat zvlášť z obou stran. Limita zleva a limita zprava se nesmí rozcházet a obě musí trefit funkční hodnotu:',
      arten: 'Spojitost se může pokazit přesně třemi způsoby — a nejsou stejně vážné. U odstranitelné nespojitosti chybí jen jeden bod; můžeš ho doplnit a vše je opraveno. U skoku existují obě jednostranné limity, ale jsou různé — tady doplnění nepomůže. U pólu utíkají limity do nekonečna, neexistuje vůbec žádná hodnota, kterou by šlo doplnit:',
      zwischenwertsatz: 'Spojitost není jen vlastnost, kterou se ověřuje — je to nástroj. Věta o mezihodnotě říká: Spojitá funkce, která začíná pod nulou a končí nad nulou, musí cestou nulu trefit. Nemůže ji přeskočit, protože skákat právě nesmí:',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Spojitost v bodě',
        desc: 'Limita v bodě se shoduje s funkční hodnotou. Tři podmínky v jedné rovnici: funkční hodnota existuje, limita existuje a obě se rovnají. Odpadne-li jedna z nich, je funkce v tom bodě nespojitá.',
      },
      einseitig: {
        title: 'Jednostranné limity',
        desc: 'V místech napojení funkcí definovaných po částech ověřuješ levou a pravou stranu zvlášť. Rozcházejí-li se obě hodnoty, jde o skok — a výška skoku je přesně jejich rozdíl.',
      },
      arten: {
        title: 'Tři druhy nespojitosti',
        desc: 'Odstranitelná nespojitost: limita existuje, funkční hodnota chybí — opravitelné. Skok: obě jednostranné limity existují, ale jsou různé — neopravitelné. Pól: limity utíkají do nekonečna — o to méně opravitelné.',
      },
      zwischenwertsatz: {
        title: 'Věta o mezihodnotě',
        desc: 'Je-li $f$ spojitá na $[a;b]$ a na krajích intervalu mění znaménko, leží mezi nimi alespoň jeden nulový bod. Věta zaručuje existenci — ne jednoznačnost a ne to, kde přesně leží.',
      },
    },
    examples: {
      luecke: {
        title: 'Zacelení odstranitelné nespojitosti',
        context: 'Mia narazí na výraz, který v $x = 1$ vede na $\\frac{0}{0}$.',
        step1: 'Jmenovatel je v $x = 1$ nulový — tento bod v definičním oboru chybí:',
        step2: 'Rozložit čitatel na součin a zkrátit. To je dovoleno, dokud je $x \\neq 1$:',
        step3: 'Zkrácený výraz lze v $x = 1$ bez problémů vyčíslit — to je limita:',
        step4: 'Teď doplníš chybějící bod. Doplněná funkce se nazývá spojité rozšíření:',
        mia_comment: 'Z toho $\\frac{0}{0}$ jsem se zpočátku lekla — myslela jsem, že je něco rozbité. Ale není. Znamená to jen: nejdřív zkrať, pak se ptej. Rozbité by bylo $\\frac{1}{0}$, tam je ve jmenovateli skutečná nula úplně sama.',
      },
      sprung: {
        title: 'Proměření skoku',
        context: 'Tarif parkovacího domu z Miiny minihry — a otázka, jak drahá může být jedna sekunda.',
        step1: 'Tarif je definován po částech, místo napojení leží u jedné hodiny:',
        step2: 'Přiblížit se k místu napojení zleva i zprava a porovnat hodnoty:',
        step3: 'Obě limity existují, ale jsou různé — to je definice skoku:',
        step4: 'Výška skoku je jejich rozdíl. Tady to není porucha, ale samotný tarif:',
        kai_comment: 'Právě takové skoky jsou důvodem, proč mobilní tarify a poštovní sazby lidi štvou. Matematicky na tom nic špatného není — ale kdo přijde o sekundu později, zaplatí prostě celý další stupeň. Spojité tarify účtují přesně na sekundu. To je rozhodnutí, ne vzorec.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Stupňovité tarify',
        desc: 'Parkovací dům, poštovné, mobilní tarif: Všude tam, kde se účtuje za započaté jednotky, je cenová funkce nespojitá. Každý stupeň je skok — a každý z nich je vědomé rozhodnutí poskytovatele.',
      },
      temperatur: {
        title: 'Fyzikální veličiny',
        desc: 'Teplota, poloha, rychlost: Tyto veličiny nemohou skákat, protože skok by znamenal nekonečně mnoho energie za nulový čas. Proto jsou fyzikální modely téměř vždy spojité funkce.',
      },
      nullstelle: {
        title: 'Numerické hledání nulových bodů',
        desc: 'Každá kalkulačka využívá větu o mezihodnotě: Hledá interval se změnou znaménka a stále ho půlí. Bez spojitosti by byl tento postup bezcenný — nulový bod by se mohl prostě přeskočit.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'Existuje-li $f(x_0)$, je $f$ v tom bodě také spojitá',
        correct: 'Funkční hodnota se navíc musí shodovat s limitou',
        why: 'Skoková funkce je ve svém bodě skoku definovaná — má tam úplně normální funkční hodnotu. Přesto je nespojitá, protože limita z jedné strany dává něco jiného. Být definovaná je jen první ze tří podmínek, ne rovnou odpověď.',
        mia_warning: 'Tohle se mi stalo u parkovacího domu. Přesně při jedné hodině je cena definovaná, totiž 2,00 €. Myslela jsem, že je tím všechno hladké. Graf přesto skáče — jen o sekundu později.',
      },
      pol_ist_hebbar: {
        wrong: 'Každou mezeru v definičním oboru lze uzavřít vhodnou hodnotou',
        correct: 'Jen tehdy, když oboustranná limita existuje a je konečná',
        why: 'U $\\frac{1}{x}$ jde funkce zleva k $-\\infty$ a zprava k $+\\infty$. Neexistuje číslo, které by se dalo dosadit — ať zvolíš jakékoli, graf vedle něj uteče do nekonečna. Pravidlo pro zlomky: Pokud se kritický činitel vykrátí, je mezera odstranitelná; zůstane-li ve jmenovateli, je to pól.',
        mia_warning: 'Teď to vždycky ověřuju dvěma čísly: dosadím $0{,}001$ a $-0{,}001$. Vyjdou-li dvě podobné hodnoty, je mezera odstranitelná. Vyjde-li $1000$ a $-1000$, je to pól — a s tím se nedá nic dělat.',
      },
    },
  },
};
