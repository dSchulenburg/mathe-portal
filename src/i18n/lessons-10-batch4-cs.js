export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'Mia skládá čtvrtou úroveň Světel přístavu: Lumi musí skočit na plošinu, která pomalu a rovnoměrně plyne doprava. „Pohyb je lineární," vysvětluje Tim. „60 pixelů za sekundu — a hotovo." Mia to napíše a hned si všimne: tohle je úplně obyčejná rovnice přímky. Počáteční poloha plus rychlost krát čas. Přesně to, co si odnesla z deváté třídy — jen teď formálněji: $f(x) = m \\cdot x + b$.',
      challenge: 'Mia musí Lumiho skokovou křivku doladit tak, aby dopadl přesně na plynoucí plošinu. Sklon pohybu plošiny a průsečík s Lumiho dráhou — všechno lineární.',
      outro: 'Lineární funkce má dva knoflíky: $m$ určuje, jak strmě probíhá, $b$ ji posouvá nahoru nebo dolů. Teď Mia chápe, proč ji potřebuje pořád dokola: plošiny, spotřeba energie, ukazatele života — všude, kde něco „na krok" rovnoměrně roste nebo klesá, je rovnice přímky tím správným nástrojem.',
    },
    objectives: {
      recognize: 'Rozpoznat lineární funkce podle předpisu i podle grafu',
      slope_intercept: 'Odečíst směrnici $m$ a průsečík s osou y $b$ z tvaru $f(x) = mx + b$',
      point_slope: 'Sestavit přímku z bodu a směrnice pomocí tvaru bod-směrnice',
      two_points: 'Určit rovnici přímky ze dvou bodů — vypočítat směrnici, pak $b$',
    },
    explanation: {
      intro: 'Lineární funkce popisuje rovnoměrný vztah: když se $x$ změní o jednu jednotku, $y$ se vždy změní o stejnou hodnotu. V grafu tím vzniká přímka. Obecný tvar je:',
      slope: 'Směrnice $m$ měří přesně tuto „hodnotu na krok". Získáš ji z libovolných dvou bodů přímky — rozdíl výšek dělený rozdílem šířek:',
      mia_tip: 'Myslím na Lumiho plošinu: plyne přesně 60 pixelů za sekundu. To je moje $m = 60$ pixelů/sekundu. Pokud Lumi startuje při $b = 200$, je poloha po $t$ sekundách prostě $f(t) = 60t + 200$. Lineární funkce ve volné přírodě!',
      intercept: 'Průsečík s osou y $b$ je hodnota, ve které přímka protíná svislou osu. Odečteš ji přímo z grafu — nebo dosadíš $x = 0$ do předpisu:',
      point_slope: 'Znáš-li bod $P(x_0 \\mid y_0)$ a směrnici $m$, nejrychleji zapíšeš přímku ve tvaru bod-směrnice. Odtud vyjádříš $y$ a získáš směrnicový tvar:',
    },
    concepts: {
      normal_form: {
        title: 'Směrnicový tvar $f(x) = mx + b$',
        desc: 'Standardní zápis. $m$ je směrnice, $b$ průsečík s osou y. Oba parametry můžeš odečíst přímo z předpisu — a oba mají jasný geometrický význam.',
      },
      slope: {
        title: 'Směrnice $m$',
        desc: 'Změna $y$ na jednotku $x$. Ze dvou bodů: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Kladná = rostoucí, záporná = klesající, $m = 0$ = vodorovná přímka.',
      },
      point_slope: {
        title: 'Tvar bod-směrnice',
        desc: 'Jsou-li známy bod $(x_0 \\mid y_0)$ a směrnice $m$: $y - y_0 = m(x - x_0)$. Praktické, protože nemusíš $b$ počítat zvlášť — prostě vyjádříš $y$.',
      },
      parallel_perpendicular: {
        title: 'Rovnoběžné a kolmé',
        desc: 'Dvě přímky jsou rovnoběžné, mají-li stejnou směrnici ($m_g = m_h$). Jsou na sebe kolmé, když součin směrnic dá $-1$ ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Rovnice přímky ze dvou bodů',
        context: 'Mia má dva pozorovací body Lumiho plošinové dráhy: $P_1(2 \\mid 1)$ a $P_2(5 \\mid 7)$. Která rovnice přímky popisuje tento pohyb?',
        step1: 'Zapsat oba zadané body:',
        step2: 'Vypočítat směrnici — rozdíl hodnot y dělený rozdílem hodnot x:',
        step3: 'Sestavit tvar bod-směrnice s $P_1(2 \\mid 1)$ a $m = 2$, pak vyjádřit $y$:',
        step4: 'Hotová rovnice přímky ve směrnicovém tvaru:',
        mia_comment: 'Pěkný postup: dva body → směrnice → dosadit → roznásobit. Budu-li mít později ještě třetí bod, můžu jím ověřit, zda moje rovnice sedí.',
      },
      intersection: {
        title: 'Průsečík dvou přímek',
        context: 'Plošina jede podél $g\\colon y = 2x - 3$, Lumiho skoková dráha podél $h\\colon y = -x + 6$. Kde se potkají?',
        step1: 'Zapsat obě rovnice přímek — stejná proměnná $x$, stejná proměnná $y$:',
        step2: 'V průsečíku jsou obě hodnoty $y$ stejné. Tedy: položit pravé strany sobě rovné:',
        step3: 'Vyjádřit $x$ — oba členy s $x$ na jednu stranu, konstanty na druhou:',
        step4: 'Dosadit hodnotu $x$ do jedné z obou rovnic, abychom získali hodnotu $y$. Průsečík $S$:',
        mia_comment: 'Ve hře je právě tento průsečík snímkem zásahu. Znám-li okamžik $x = 3$, vím, ve kterém snímku mám spustit kolizi.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Mobilní tarif s paušálem',
        desc: 'Klasický příklad: 9,99 € měsíčního paušálu plus 10 centů za minutu. Náklady v závislosti na době hovoru tvoří dokonalou přímku — $b$ je paušál, $m$ cena za minutu.',
      },
      taxi: {
        title: 'Náklady na taxi',
        desc: '4 € nástupní sazba, pak 2,50 € za kilometr. Celkové náklady rostou lineárně s ujetou vzdáleností. Lze to vyčíst z každé účtenky.',
      },
      constant_speed: {
        title: 'Pohyb konstantní rychlostí',
        desc: 'Skejťák vyráží rovnoměrnou rychlostí $v$ a startuje při $s_0$. Uražená dráha po $t$ sekundách: $s(t) = v \\cdot t + s_0$. Čistá rovnice přímky — jen proměnné se jmenují jinak.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Směrnice vzhůru nohama: $\\Delta x / \\Delta y$ místo $\\Delta y / \\Delta x$',
        correct: 'Nejprve výška (y), pak šířka (x): $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'Směrnice popisuje „kolik výšky na krok" — tedy změnu $y$ v čitateli a změnu $x$ ve jmenovateli. Otočíš-li zlomek, dostaneš převrácenou hodnotu: z $m = 2$ chybně vyjde $0{,}5$.',
        mia_warning: 'Můj trik: myslím na schody. Výška schodu dělená šířkou schodu. Výška je vždy nahoře ve zlomku — stejně jako na schodech.',
      },
      intercept_zero: {
        wrong: 'Zaměňovat průsečík s osou y s nulovým bodem',
        correct: 'Nulový bod: polož $f(x) = 0$ a vyjádři $x$',
        why: 'Průsečík s osou y $b$ je hodnota $y$ při $x = 0$ — tedy hodnota $y$. Nulový bod je hodnota $x$, při níž $f(x) = 0$. U $f(x) = 2x + 5$ je $b = 5$, ale nulový bod leží v $x = -2{,}5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'Mia navrhuje rotujícího bosse do Světel přístavu. Boss je vířící mlýnské kolo se třemi rameny — a Lumi musí proskakovat mezerami. „Hitbox musí být kruhový," říká Tim. „Jinak to vypadá křivě, když Lumi zavadí o rameno, které vůbec není nablízku." Mia potřebuje obvod, obsah a úhel každého ramene — čistá geometrie kruhu.',
      challenge: 'Mia musí naprogramovat kulaté hitboxy. Kromě toho délku oblouku, kterou každé rameno opíše za sekundu — jinak rychlost otáčení nesedí.',
      outro: 'S $U = 2\\pi r$ a $A = \\pi r^2$ má Mia standardní nástroje. A obloukovou mírou přepočítává úhly otočení rovnou na uražené vzdálenosti — mnohem rychleji než oklikou přes $360°$. „Oblouková míra je programovací jazyk otáčení," zapamatuje si.',
    },
    objectives: {
      umfang_flaeche: 'Vypočítat obvod a obsah kruhu z poloměru nebo z průměru',
      bogenmass: 'Spolehlivě převádět úhly mezi stupňovou a obloukovou mírou',
      sektor: 'Vypočítat obsah a délku oblouku kruhové výseče při daném středovém úhlu',
      bogenlaenge: 'Určit délky oblouku pro celou kružnici i pro výseč v obou úhlových mírách',
    },
    explanation: {
      intro: 'Kružnice je množina všech bodů se stejnou vzdáleností $r$ od středu. Z této jediné míry $r$ plynou obvod a obsah — oba se slavnou konstantou $\\pi \\approx 3{,}14159$:',
      bogenmass: 'Místo měření úhlů ve stupních lze použít i odpovídající délku oblouku na jednotkové kružnici — tomu se říká oblouková míra (radián). Celá kružnice má obvod $2\\pi r$, takže $360°$ odpovídá přesně $2\\pi$. Pro každý úhel $\\alpha$ v obloukové míře platí:',
      mia_tip: 'Oblouková míra mi zpočátku přišla divná. Ale v kódu je mnohem praktičtější: když píšu Math.cos(angle) v JavaScriptu, funkce očekává radiány — ne stupně. Kdo na to zapomene, najednou otáčí sprity špatným směrem.',
      umrechnung: 'Převod jde přes poměrové pravidlo „$360° = 2\\pi\\,\\text{rad}$". Z toho plyne pevný činitel, kterým převádíš stupně a radiány navzájem:',
      sektor: 'Výseč je „kus dortu" kruhu. Její podíl na obsahu a obvodu odpovídá přesně podílu jejího středového úhlu na plném úhlu. S úhlem $\\alpha$ (ve stupních nebo radiánech) platí:',
    },
    concepts: {
      umfang: {
        title: 'Obvod $U$',
        desc: 'Délka kružnice. Závisí lineárně na poloměru — dvojnásobný poloměr znamená dvojnásobný obvod. S průměrem $d = 2r$ se často píše krátce také $U = \\pi d$.',
      },
      flaeche: {
        title: 'Obsah $A$',
        desc: 'Uzavřená plocha. Závisí kvadraticky na poloměru — dvojnásobný poloměr znamená čtyřnásobný obsah. Důležité pro všechny úlohy typu „kolik materiálu" a „kolik obsahu".',
      },
      bogenmass: {
        title: 'Oblouková míra (radián)',
        desc: 'Úhlová míra, která měří úhel jako délku oblouku na jednotkové kružnici. Celá kružnice = $2\\pi$, půlkružnice = $\\pi$, pravý úhel = $\\frac{\\pi}{2}$. Standard v analýze i v programování.',
      },
      sektor: {
        title: 'Kruhová výseč',
        desc: 'Kus dortu: dva poloměry plus oblouk mezi nimi. Obsah a délka oblouku jsou poměrné veličiny — středový úhel jako zlomek $360°$, resp. $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Obvod a obsah z poloměru',
        context: 'Miin rotující boss má na obrazovce poloměr $5\\,\\text{cm}$. Jak velké jsou obvod a obsah?',
        step1: 'Je dán poloměr:',
        step2: 'Dosadit do obvodu: $U = 2\\pi r$ s $r = 5$. Nejprve přesně s $\\pi$, pak zaokrouhleně:',
        step3: 'Dosadit do obsahu: $A = \\pi r^2$. Pozor: nejprve umocnit $r$, teprve pak násobit $\\pi$:',
        mia_comment: 'Při $r = 5$ jsou obvod ($\\approx 31$) a obsah ($\\approx 79$) zcela odlišná čísla. Zdvojnásobím-li poloměr, bude obvod dvakrát větší — ale obsah čtyřikrát. To je účinek druhé mocniny.',
      },
      sektor: {
        title: 'Obsah výseče a délka oblouku',
        context: 'Jedno rameno bosse opisuje výseč o poloměru $12\\,\\text{cm}$ a středovém úhlu $60°$. Jaký obsah a jakou délku oblouku to dá?',
        step1: 'Jsou dány poloměr a úhel ve stupňové míře:',
        step2: 'Určit podíl výseče na celkovém obsahu — $\\frac{60°}{360°} = \\frac{1}{6}$:',
        step3: 'Vypočítat obsah výseče — přesně s $\\pi$, pak zaokrouhleně:',
        step4: 'Délka oblouku: stejný podíl $\\frac{1}{6}$ z obvodu $2\\pi r$:',
        mia_comment: 'Trik je pořád stejný: podíl = $\\frac{\\alpha°}{360°}$. Ten násobím veličinou celé kružnice (obsahem nebo obvodem). Funguje pro $30°$ stejně jako pro $137{,}5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'Pizza na 8 kusů',
        desc: 'Pizza o poloměru $r$ se krájí na 8 stejných kusů. Každý kus je výseč s $\\frac{360°}{8} = 45°$ a obsahem $\\frac{\\pi r^2}{8}$. Konkrétní použití v každé kuchyni.',
      },
      uhr: {
        title: 'Ručičky hodin jako výseče',
        desc: 'Za hodinu opíše hodinová ručička $30°$ ($\\frac{360°}{12}$), za minutu opíše minutová ručička $6°$ ($\\frac{360°}{60}$). Čistá matematika výsečí — užitečná i pro úlohy o úhlech s hodinami.',
      },
      riesenrad: {
        title: 'Délka oblouku ruského kola',
        desc: 'Gondola hamburského ruského kola o poloměru $r$ urazí za čas $t$ z celé otáčky $T$ oblouk délky $b = 2\\pi r \\cdot \\frac{t}{T}$. Z toho lze vypočítat i rychlost gondoly.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'Dosazovat stupňovou míru do vzorců s obloukovou mírou',
        correct: 'Před $b = \\alpha \\cdot r$ nejprve převést stupně na radiány',
        why: 'Vzorec $b = \\alpha \\cdot r$ funguje jen tehdy, je-li $\\alpha$ v obloukové míře. Při $\\alpha = 60°$ je $b = 60 \\cdot r$ hrubě chybné — správně by bylo $\\alpha = \\frac{\\pi}{3} \\approx 1{,}047$, tedy $b \\approx 1{,}047 \\cdot r$.',
        mia_warning: 'Přesně tohle mě naštvalo při otáčení spritů: dosadila jsem 60 místo 1,047 — boss se otáčel 57krát rychleji a okamžitě zmizel z obrazovky!',
      },
      area_vs_circumference: {
        wrong: 'Počítat obsah vzorcem pro obvod ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$ — kvadraticky v $r$',
        why: 'Obvod a obsah jsou různé veličiny s různými jednotkami ($\\text{cm}$ oproti $\\text{cm}^2$). $2\\pi r$ je lineární, $\\pi r^2$ kvadratické. Zaměníme-li je, jsou všechny navazující výpočty rozbité — a jednotka to okamžitě prozradí.',
      },
    },
  },
};
