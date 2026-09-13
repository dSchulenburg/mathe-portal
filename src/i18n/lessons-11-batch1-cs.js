export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Amirův ML model pro DataPulse dává použitelná doporučení písniček — ale trénování trvá věčnost. "Gradient Descent není v zásadě nic jiného než derivace", vysvětluje mu jeho profesorka matematiky. "Když pochopíš, jak fungují pravidla derivování, pochopíš taky, proč se tvůj model učí." Amir se rozhodne pravidla systematicky projít.',
      challenge: 'Amir chce pochopit, jak jeho ML model vnitřně derivuje ztrátovou funkci — k tomu potřebuje pravidla: mocninné, součtu, součinu a řetězové.',
      outro: 'Amir má teď pevné základy: Mocninné pravidlo pro jednoduché výrazy, pravidla součtu a konstanty pro složené výrazy, pravidlo součinu pro násobení a řetězové pravidlo pro vnořené funkce. "Teď konečně chápu, co PyTorch dělá na pozadí s Autogradem", říká spokojeně.',
    },
    objectives: {
      power_rule: 'Bezpečně používat mocninné pravidlo: derivovat $f(x) = x^n$',
      constant_sum_rule: 'Ovládat pravidla konstanty a součtu: derivovat členy jednotlivě a zachovávat koeficienty',
      product_quotient_rule: 'Správně používat pravidla součinu a podílu',
      chain_rule: 'Bezpečně používat řetězové pravidlo u vnořených funkcí',
    },
    explanation: {
      intro: 'Mocninné pravidlo je nejdůležitější základní pravidlo: Vytáhneš exponent jako koeficient a snížíš exponent o 1. Tím derivuješ každou mocninnou funkci raz dva:',
      constant_factor: 'Konstantní koeficienty zůstávají při derivování zachovány a součty se derivují člen po členu. Tím se složené výrazy zpřehlední:',
      amir_tip: 'V mém ML kódu jsou všude součty a koeficienty — ztrátová funkce je obrovský součet přes všechny datové body. Že můžu derivovat každý člen samostatně, dělá backpropagation vůbec možnou!',
      product_rule: 'Když jsou dvě funkce násobeny, NESMÍŠ prostě derivovat každou zvlášť. Místo toho platí pravidlo součinu — "první krát derivace druhé plus druhá krát derivace první":',
      quotient_rule: 'Pro zlomky funkcí existuje pravidlo podílu. Pomůcka: "Jmenovatel krát derivace čitatele minus čitatel krát derivace jmenovatele, to celé přes jmenovatel na druhou". Na rozdíl od pravidla součinu tady záleží na pořadí — minus dělá vzorec nesymetrickým:',
      chain_rule: 'U vnořených funkcí — tedy funkce ve funkci — potřebuješ řetězové pravidlo. Derivuješ "zvenku dovnitř" a násobíš vnitřní derivací:',
    },
    concepts: {
      power_rule: {
        title: 'Mocninné pravidlo',
        desc: 'Základní pravidlo: Exponent se stane koeficientem, exponent klesá o 1. Platí i pro záporné a zlomkové exponenty, např. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Pravidla součtu a konstanty',
        desc: 'Součty se derivují člen po členu, konstantní koeficienty se zachovávají. Tím rozložíš každý polynomický člen na jednoduché části.',
      },
      product_rule: {
        title: 'Pravidlo součinu',
        desc: 'Pro součin dvou funkcí: První derivovaná krát druhá plus první krát druhá derivovaná. Nepostradatelné, jakmile se násobí dva proměnné výrazy.',
      },
      quotient_rule: {
        title: 'Pravidlo podílu',
        desc: 'Pro zlomky: jmenovatel krát derivace čitatele, minus čitatel krát derivace jmenovatele, děleno druhou mocninou jmenovatele. Minus je rozdíl oproti pravidlu součinu — a nejčastější zdroj chyb. Potřebné všude, kde je něco "na" něco jiného: náklady na kus, rychlost, koncentrace.',
      },
      chain_rule: {
        title: 'Řetězové pravidlo',
        desc: 'Derivuj vnější funkci, vnitřní nech být, pak násob derivací vnitřní. Srdce backpropagation v neuronových sítích.',
      },
    },
    examples: {
      power_sum: {
        title: 'Derivování polynomu mocninným a součtovým pravidlem',
        context: 'Amir zjednodušuje člen ze své nákladové funkce.',
        step1: 'Daný je polynom — derivujeme každý člen zvlášť:',
        step2: 'Aplikujeme mocninné pravidlo na každý člen: Exponent jako koeficient, exponent minus 1. Konstanta $-7$ odpadá:',
        step3: 'Po zjednodušení dostaneme funkci derivace:',
        amir_comment: 'Přesně takto vypadá gradient mých polynomických features. Každý člen přispívá ke sklonu — a PyTorch to dělá automaticky pro tisíce parametrů současně.',
      },
      quotient_rule: {
        title: 'Derivování lomené racionální funkce pravidlem podílu',
        context: 'Amir měří, kolik požadavků jeho server zvládne za každou uplynulou sekundu — jedna veličina na jinou, tedy zlomek.',
        step1: 'Nejdřív pojmenuješ čitatel a jmenovatel. Kdo to přeskočí, později je zamění:',
        step2: 'Oba zvlášť zderivuj — to je ta snadná část:',
        step3: 'Teď dosaď: jmenovatel krát derivace čitatele, minus čitatel krát derivace jmenovatele, vše děleno $v^2$:',
        step4: 'Roznásob a zjednoduš. Jmenovatel zůstane jako druhá mocnina, neroznásobuje se:',
        amir_comment: 'Důležité: Jmenovatel zůstane $(x-1)^2$. Dřív jsem ho vždycky poctivě roznásobil a tím si zablokoval krácení. Při vyšetřování průběhu funkce chceš vidět nulové body jmenovatele — jako činitel, ne jako polynom.',
      },
      chain_rule: {
        title: 'Vnořená funkce s řetězovým pravidlem',
        context: 'Amir derivuje aktivační funkci, která obsahuje složení.',
        step1: 'Daná je vnořená mocninná funkce:',
        step2: 'Rozložení na vnější funkci $f(u) = u^3$ a vnitřní funkci $g(x) = 2x^2 + 1$:',
        step3: 'Derivuj vnější (mocninné pravidlo na $u^3$), nech vnitřní být, krát vnitřní derivace ($4x$):',
        step4: 'Uspořádáno — faktor $4x$ vytažen před:',
        amir_comment: 'Řetězové pravidlo je doslova backpropagation! Každá vrstva v neuronové síti je vnořená funkce a řetězové pravidlo řetězí gradienty od vrstvy k vrstvě.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent v Machine Learning',
        desc: 'Každý ML model minimalizuje ztrátovou funkci derivováním. Gradient ukazuje směr nejstrmějšího vzestupu — jdeme opačným směrem, abychom našli minimum.',
      },
      marginal_cost: {
        title: 'Mezní náklady v ekonomii',
        desc: 'Derivace nákladové funkce $K(x)$ dává mezní náklady: Kolik stojí vyrobit jednu další jednotku? Firmy to denně používají pro kalkulaci cen.',
      },
      acceleration: {
        title: 'Zrychlení ve fyzice',
        desc: 'Rychlost je derivace dráhy, zrychlení je derivace rychlosti. Senzor v tvém telefonu měří přesně toto: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'Derivace konstanty je sama konstanta',
        correct: 'Derivace konstanty je vždy nula',
        why: 'Konstanta nemá sklon — nemění se. Pomysli na $f(x) = 5$: To je vodorovná přímka, takže sklon je všude 0. Platí to pro každé číslo bez $x$.',
        amir_warning: 'Bias term v mém modelu je konstanta — jeho derivace podle $x$ je 0. Pokud na to zapomeneš, gradient dostane chybný offset a trénování diverguje.',
      },
      chain_rule_forgotten: {
        wrong: 'Zapomenutí vnitřní derivace u vnořených funkcí',
        correct: 'Vždy násob vnitřní derivací',
        why: 'U $[(3x+1)^4]\'$ nestačí jen stáhnout exponent. MUSÍŠ násobit derivací vnitřního členu $(3x+1)\' = 3$. Bez vnitřní derivace chybí faktor 3.',
        amir_warning: 'Představ si, že v neuronové síti zapomeneš vnitřní derivaci u jedné vrstvy — gradient by byl úplně špatný a model se učí nesmysly. Řetězové pravidlo není volitelné!',
      },
      quotient_sign: {
        wrong: 'Čitatel v pravidle podílu prohozený: $u \\cdot v\' - u\' \\cdot v$',
        correct: 'Nejdřív jmenovatel krát derivace čitatele: $u\' \\cdot v - u \\cdot v\'$',
        why: 'Pravidlo součinu je symetrické — oba sčítance smíš prohodit a výsledek zůstane stejný. V pravidle podílu stojí minus, a tím je pořadí pevné. Když ho prohodíš, dostaneš přesně opačnou hodnotu správné derivace. Záludné na tom je: výraz vypadá věrohodně, dál počítáš správně, a přesto na konci nesedí žádné znaménko. Z maxima se stane minimum.',
        amir_warning: 'Udělej zkoušku na jednoduchém místě. U $f(x) = \\frac{x}{x+1}$ je funkce všude rostoucí, takže $f\'$ musí být kladná. Když ti vyjde něco záporného, prohodil jsi čitatel — stojí tě to deset sekund a zachrání to celou úlohu.',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Amirův doporučovací algoritmus dává výsledky — ale jsou opravdu optimální? "Musíš ztrátovou funkci kompletně analyzovat", říká jeho profesor. "Kde jsou minima? Kde body zvratu?" Amir si uvědomuje: Úplná analýza křivky mu ukáže, jestli model opravdu našel globální minimum, nebo uvízl v lokálním.',
      challenge: 'Amir analyzuje krajinu ztrát svého modelu: systematicky určuje kořeny, extrémy, body zvratu a monotónnost funkce.',
      outro: 'Amir dokáže teď úplně charakterizovat každou racionální funkci: najít kořeny, určit maxima a minima, vypočítat body zvratu a odečíst monotónnost. "Když si nakreslím krajinu ztrát, okamžitě vidím, jestli optimizer přistál ve správném údolí", říká.',
    },
    objectives: {
      zeros_extrema: 'Systematicky určovat kořeny a extrémní body funkce',
      inflection_points: 'Počítat body zvratu a chápat jejich význam pro průběh křivky',
      monotonicity_symmetry: 'Analyzovat monotónnost a symetrii funkce',
    },
    explanation: {
      intro: 'Analýza křivky je úplný rozbor funkce. Začínáme s kořeny — místy, kde graf protíná osu $x$:',
      extrema: 'Extrémní body (maxima a minima) najdeš tam, kde je první derivace rovna nule. Ale pozor: Ne každý kořen $f\'$ je automaticky extrém! Potřebuješ druhou derivaci k ověření:',
      amir_tip: 'Krajina ztrát mého modelu má mnoho lokálních minim. Analýzou křivky můžu ověřit, jestli je kritický bod opravdu minimum — nebo jen sedlový bod, kde optimizer uvízne.',
      inflection: 'Body zvratu označují přechod mezi levým a pravým zakřivením. Tady se mění charakter zakřivení — druhá derivace mění znaménko:',
      monotonicity: 'Monotónnost ti říká, kde funkce roste a kde klesá. Odečteš ji přímo ze znaménka první derivace:',
    },
    concepts: {
      extrema: {
        title: 'Extrémní body (max/min)',
        desc: 'Nutná podmínka: $f\'(x_0) = 0$. Postačující: $f\'\'(x_0) < 0$ dává maximum, $f\'\'(x_0) > 0$ dává minimum. Obě podmínky dohromady dají jistotu.',
      },
      inflection: {
        title: 'Body zvratu',
        desc: 'Kde se mění zakřivení: $f\'\'(x_0) = 0$ A $f\'\'\'(x_0) \\neq 0$. U normálních rozdělení označují body zvratu směrodatnou odchylku.',
      },
      symmetry: {
        title: 'Symetrie',
        desc: 'Osová symetrie k ose $y$ při $f(-x) = f(x)$ (jen sudé exponenty). Bodová symetrie k počátku při $f(-x) = -f(x)$ (jen liché exponenty). Ušetří práci!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Úplná analýza křivky',
        context: 'Amir zkoumá kubickou funkci — podobnou ztrátovým funkcím s více extrémy.',
        step1: 'Daná je funkce — analyzujeme ji kompletně:',
        step2: 'Sestavíme první derivaci a určíme její kořeny (nutná podmínka pro extrémy):',
        step3: 'Vyhodnotíme druhou derivaci v kritických bodech (postačující podmínka): Záporná hodnota = maximum, kladná hodnota = minimum:',
        step4: 'Určíme bod zvratu přes $f\'\' = 0$ a potvrdíme třetí derivací:',
        amir_comment: 'Přesně tak analyzuji krajinu ztrát: Nejdřív najdu kritické body, pak ověřím, jestli je to minimum nebo sedlový bod. U vysokodimenzionálních funkcí to můj optimizer dělá numericky — ale princip je identický.',
      },
      graph_properties: {
        title: 'Využití symetrie a extrémů',
        context: 'Symetrická funkce — polovina práce odpadá díky symetrii.',
        step1: 'Daná je funkce 4. stupně — nejdřív ověříme symetrii:',
        step2: 'Dosadíme $-x$: Všechny exponenty sudé, takže $f(-x) = f(x)$ — osově symetrická! Extrémy se vyskytují symetricky:',
        step3: 'Položíme první derivaci rovnou nule — díky symetrii stačí najít kladná řešení:',
        step4: 'Vypočteme funkční hodnoty — díky symetrii $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symetrie v datech je zlato: Pokud vím, že moje ztrátová funkce je symetrická, musím prohledat jen polovinu prostoru parametrů. To zkrátí čas trénování na polovinu!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analýza rozdělení dat',
        desc: 'Normální rozdělení má body zvratu při $\\mu \\pm \\sigma$. Analýza křivky ti prozradí, kde se soustředí většina datových bodů a kde začíná rozptyl.',
      },
      profit_analysis: {
        title: 'Maximalizace zisku',
        desc: 'Funkce zisku $G(x)$ má maximum — optimální objem výroby. Analýza křivky přesně ukáže, při jakém množství je zisk maximální.',
      },
      population_growth: {
        title: 'Populační růst',
        desc: 'Bod zvratu růstové křivky označuje moment, od kterého růst klesá. Epidemiologové používají přesně tuto analýzu pro křivky nákazy.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Každý kořen $f\'$ je automaticky extrémní bod',
        correct: 'Kořen $f\'$ PLUS změna znaménka nebo $f\'\' \\neq 0$ ověřit',
        why: 'U $f(x) = x^3$ je $f\'(0) = 0$, ale žádný extrém — je to sedlový bod! MUSÍŠ ověřit postačující podmínku ($f\'\' \\neq 0$ nebo změna znaménka $f\'$).',
        amir_warning: 'Ve vyšších dimenzích se takovým místům říká "Saddle Points" — optimizer tam uvízne a myslí si, že našel minimum. Vždy kontroluj druhou derivaci!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ stačí pro bod zvratu',
        correct: '$f\'\'(x_0) = 0$ A $f\'\'\'(x_0) \\neq 0$ společně potvrzují bod zvratu',
        why: 'U $f(x) = x^4$ je $f\'\'(0) = 0$, ale žádný bod zvratu — zakřivení se nemění! Třetí derivace musí být nenulová, aby garantovala změnu zakřivení.',
        amir_warning: 'Stejná past jako u extrémů: Nutná podmínka sama nikdy nestačí. Vždy ověřuj postačující podmínku — jinak věříš chybnému výsledku.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse má běžet na telefonu — ale Amirův model spotřebuje příliš paměti. "Musíš optimalizovat architekturu sítě", říká jeho kolegyně Sara. "Maximální přesnost při minimálním využití paměti." Amir pozná: To je klasická optimalizační úloha — optimalizovat jednu veličinu za omezení jiné.',
      challenge: 'Amir chce najít nejlepší architekturu modelu: maximální kvalita predikcí za podmínky omezených výpočetních zdrojů.',
      outro: 'Amir pochopil princip: Sestavit účelovou funkci, dosadit vedlejší podmínku, redukovat na jednu proměnnou, derivovat, položit rovnu nule, ověřit. "Ať už rozměry plechovky nebo parametry modelu — schéma je vždy stejné", konstatuje. Jeho model se teď vejde do 50 MB.',
    },
    objectives: {
      setup_equations: 'Z praktického kontextu sestavit účelovou funkci a vedlejší podmínku',
      optimize_constraints: 'Dosazením vedlejší podmínky vytvořit funkci jedné proměnné a optimalizovat',
      verify_extremum: 'Druhou derivací ověřit, zda se jedná o maximum nebo minimum, a zohlednit krajní hodnoty',
    },
    explanation: {
      intro: 'U optimalizačních úloh jde vždy o totéž: Jedna veličina má být co největší nebo nejmenší (účelová funkce), přičemž platí omezení (vedlejší podmínka):',
      strategy: 'Strategie je vždy stejná: (1) Sestavit účelovou funkci — co se má optimalizovat? (2) Najít vedlejší podmínku — jaké omezení platí? (3) Vyřešit vedlejší podmínku pro jednu proměnnou a dosadit do účelové funkce. (4) Derivovat, položit rovnu nule, ověřit.',
      amir_tip: 'Ladění hyperparametrů je přesně taková optimalizační úloha: Chci minimalizovat validační chybu (účelová funkce), ale paměť GPU je omezená (vedlejší podmínka). Schéma z hodiny matiky funguje 1:1!',
      substitution: 'Po dosazení vedlejší podmínky závisí účelová funkce už jen na jedné proměnné. Teď se normálně derivuje a ověří kritický bod:',
      domain_check: 'Nezapomeň na definiční obor! U reálných problémů jsou často hranice (např. $r > 0$ pro poloměr). Porovnej hodnotu funkce v kritickém bodě s krajními hodnotami — někdy leží optimum na okraji.',
    },
    concepts: {
      target_function: {
        title: 'Účelová funkce',
        desc: 'Veličina, která se má optimalizovat — maximální zisk, minimální povrch, nejlepší přesnost. Zpočátku často závisí na dvou proměnných.',
      },
      constraint: {
        title: 'Vedlejší podmínka',
        desc: 'Omezení, které platí — pevný objem, omezený rozpočet, omezené parametry. Umožňuje eliminovat jednu proměnnou a redukovat účelovou funkci na jednu proměnnou.',
      },
      boundary_check: {
        title: 'Kontrola krajních hodnot',
        desc: 'Optimum může ležet i na okraji definičního oboru. Vždy porovnej $f(x_{opt})$ s hodnotami funkce na okrajích $f(a)$ a $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Plechovka s minimální spotřebou materiálu',
        context: 'Válcová plechovka má pojmout 330 ml — s co nejmenším množstvím plechu.',
        step1: 'Vedlejší podmínka: Objem je pevný. Vyřešíme pro $h$, abychom eliminovali jednu proměnnou:',
        step2: 'Sestavíme účelovou funkci (povrch) a dosadíme $h$ — teď vše závisí jen na $r$:',
        step3: 'Derivujeme, položíme rovnu nule a vyřešíme pro $r$ — to je optimální poloměr:',
        step4: 'Ověříme druhou derivaci: Kladná hodnota znamená minimum — opravdu jsme našli nejúspornější plechovku:',
        amir_comment: 'To je přesně jako komprese modelu: Pevná přesnost (vedlejší podmínka), minimální počet parametrů (účelová funkce). Nahradím $r$ za "šířku vrstvy" a $h$ za "hloubku" — stejný princip!',
      },
      profit_max: {
        title: 'Maximální zisk',
        context: 'Startup chce najít optimální cenu pro svůj předplatný model.',
        step1: 'Sestavíme funkci zisku: tržby minus náklady — tady už v jedné proměnné:',
        step2: 'Položíme derivaci rovnu nule — optimální množství:',
        step3: 'Druhá derivace je záporná — jde tedy o maximum. Zisk je tady opravdu maximální:',
        step4: 'Vypočteme maximální zisk dosazením:',
        amir_comment: 'Optimalizace cen je klasika v Data Science. U DataPulse bychom mohli optimální úroveň předplatného vypočítat přesně takto — maximalizovat zisk za podmínky, že uživatelé neodejdou.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Optimalizace hyperparametrů',
        desc: 'Rychlost učení $\\alpha$ v Gradient Descent musí být optimálně zvolená: Příliš velká = divergence, příliš malá = věčně pomalé. Optimální $\\alpha$ minimalizuje validační chybu.',
      },
      packaging: {
        title: 'Design obalů',
        desc: 'Minimální spotřeba materiálu při pevném objemu — přesně to řeší inženýři denně. Každá plechovka na nápoje, každý karton je výsledkem optimalizační úlohy.',
      },
      solar_panel: {
        title: 'Nastavení solárního panelu',
        desc: 'Úhel náklonu solárního panelu určuje energetický výnos. Najít optimální úhel je optimalizační úloha s polohou slunce jako vedlejší podmínkou.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Přímé derivování účelové funkce se dvěma proměnnými',
        correct: 'Nejdřív dosaď vedlejší podmínku, pak derivuj',
        why: 'Se dvěma proměnnými nemůžeš prostě derivovat podle $x$ — $y$ se mění s ním! MUSÍŠ použít vedlejší podmínku k vyjádření $y$ pomocí $x$. Teprve pak vše závisí na jedné proměnné.',
        amir_warning: 'To je jako ML model s příliš mnoha volnými parametry: Bez omezení žádné smysluplné optimum. Vedlejší podmínka redukuje stupně volnosti — přesně jako regularizace.',
      },
      no_boundary: {
        wrong: 'Kritické místo považovat za globální optimum',
        correct: 'Porovnat kritické místo s krajními hodnotami',
        why: 'Na omezeném intervalu $[a, b]$ může optimum ležet na okraji! $f\'(x_0) = 0$ dává jen lokální kandidáty. Musíš porovnat $f(x_0)$, $f(a)$ a $f(b)$.',
        amir_warning: 'V praxi má každý parametr povolený rozsah. Moje rychlost učení nemůže být záporná, velikost dávky nemůže překročit paměť GPU. Kontrola krajních hodnot je povinnost!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse běží — ale Amir potřebuje novou metriku: Kolik písniček uživatelé celkově poslechnou za týden? Má sazbu poslechů $r(t)$ jako funkci času, ale potřebuje celkový počet. "Sazba krát čas dává množství — ale sazba se neustále mění", přemýšlí Amir. Jeho kamarád Kai se usměje: "Zní to jako integrál."',
      challenge: 'Amir chce z časově závislé sazby poslechů $r(t)$ vypočítat celkový počet poslechnutých písniček — to ho přivádí k integrálnímu počtu.',
      outro: 'Amir teď umí tvořit primitivní funkce, počítat určité integrály a určovat plochy mezi křivkami. "Integrování je opak derivování — a v praxi tím sčítám spojitá data", shrnuje. Jeho metrika týdenních poslechů je hotová.',
    },
    objectives: {
      antiderivative: 'Tvořit primitivní funkce obrácením mocninného pravidla a chápat integrační konstantu $C$',
      definite_integral: 'Počítat určité integrály pomocí základní věty: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Chápat základní větu diferenciálního a integrálního počtu a používat ji při výpočtech ploch',
    },
    explanation: {
      intro: 'Integrování je opak derivování: Pokud $F\'(x) = f(x)$, pak $F(x)$ je primitivní funkce k $f(x)$. Obecná primitivní funkce vždy obsahuje konstantu $C$:',
      power_rule_integral: 'Mocninné pravidlo pozpátku: Zvyš exponent o 1 a vyděl novým exponentem. Funguje to pro všechna $n \\neq -1$:',
      amir_tip: 'Integrování je jako agregace v databázích: Derivace dává okamžitou rychlost změny, integrál vše sčítá. Když znám počty stažení za hodinu, integrál mi dá celkový počet stažení za časové období.',
      definite_integral: 'Určitý integrál počítá "celkový efekt" mezi dvěma mezemi. Základní věta to usnadňuje: Primitivní funkce v horní mezi minus primitivní funkce v dolní mezi:',
      area_interpretation: 'Geometricky je určitý integrál plocha mezi křivkou a osou $x$. Pozor: Plochy pod osou $x$ se počítají záporně! Pro skutečnou plochu potřebuješ absolutní hodnotu:',
    },
    concepts: {
      antiderivative: {
        title: 'Primitivní funkce',
        desc: 'Funkce $F(x)$ s $F\'(x) = f(x)$. Konstanta $+C$ je důležitá, protože různé primitivní funkce se liší jen o konstantu.',
      },
      definite_integral: {
        title: 'Určitý integrál',
        desc: 'Počítá znaménkovou plochu mezi $f(x)$ a osou $x$ od $a$ do $b$. Horní mez dosadit minus dolní mez dosadit.',
      },
      fundamental_theorem: {
        title: 'Základní věta analýzy',
        desc: 'Spojuje derivování a integrování: Jsou to vzájemně inverzní operace. Určitý integrál lze vypočítat pomocí primitivní funkce.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Plocha mezi parabolou a osou $x$',
        context: 'Amir vizualizuje rozdělení času poslechu jako plochu pod křivkou.',
        step1: 'Určíme funkci a kořeny — to jsou naše integrační meze:',
        step2: 'Sestavíme primitivní funkci obrácením mocninného pravidla:',
        step3: 'Vypočteme určitý integrál: Dosadíme horní mez minus dolní mez:',
        step4: 'Integrál je záporný, protože parabola leží pod osou $x$. Pro plochu vezmeme absolutní hodnotu:',
        amir_comment: 'Záporné integrály dávají v datové analýze plný smysl: Pokud $f(x)$ je odchylka od průměru, záporný integrál ukazuje, že hodnoty celkově ležely pod průměrem.',
      },
      distance_from_velocity: {
        title: 'Výpočet dráhy z rychlosti',
        context: 'Jak daleko ujede autonomní auto za 4 sekundy?',
        step1: 'Daná je funkce rychlosti:',
        step2: 'Celková dráha je integrál rychlosti přes čas:',
        step3: 'Sestavíme primitivní funkci — integrujeme každý člen zvlášť:',
        step4: 'Dosadíme meze a vypočteme rozdíl:',
        amir_comment: 'Senzorová data přicházejí jako sazba — rychlost, propustnost, požadavky za sekundu. Integrál z toho dělá celkové množství. Můj dashboard ukazuje přesně toto: $\\int_0^T r(t)\\,dt$ = celkový počet streamů.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Agregace dat v čase',
        desc: 'Když je datová sazba $r(t)$ známá, integrál dává celkové množství za časové období. Takto streamovací služby počítají měsíční minuty poslechu ze sekundových dat.',
      },
      energy_consumption: {
        title: 'Spotřeba energie',
        desc: 'Výkon $P(t)$ ve wattech krát čas dává energii v joulech — ale jen při konstantním výkonu. Při kolísajícím výkonu potřebuješ integrál: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Pravděpodobnosti',
        desc: 'Pravděpodobnost, že náhodná veličina leží mezi $a$ a $b$, je plocha pod funkcí hustoty — tedy určitý integrál. Základ veškeré statistiky.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Zapomenutí integrační konstanty $C$ u neurčitých integrálů',
        correct: 'Vždy přidej $+ C$ u neurčitého integrálu',
        why: 'Pokud $F\'(x) = 2x$, pak jak $x^2$, tak $x^2 + 7$ jsou primitivní funkce. $+C$ reprezentuje všechny možné primitivní funkce. U určitého integrálu se $C$ zkrátí — tam ji můžeš vynechat.',
        amir_warning: 'V praxi je $C$ počáteční podmínka: Kolik písniček uživatel už poslouchal, než jsme začali měřit? Bez $C$ tvůj výpočet startuje od nuly místo od skutečné hodnoty.',
      },
      negative_area: {
        wrong: 'Přímá interpretace integrálu jako plochy, i když je záporný',
        correct: 'Pro skutečnou plochu vezmi absolutní hodnotu integrálu',
        why: 'Integrál $\\int_a^b f(x)\\,dx$ může být záporný, když $f(x) < 0$. To je správně jako znaménková plocha. Pokud potřebuješ geometrickou plochu, musíš integrovat $|f(x)|$ nebo počítat dílčí plochy zvlášť.',
        amir_warning: 'Představ si, že počítáš celkový čas poslechu a dostaneš záporný výsledek — to by bylo zjevně špatně. U plošných úloh vždy ověř, jestli funkce mění znaménko, a počítej dílčí intervaly zvlášť!',
      },
    },
  },
};
