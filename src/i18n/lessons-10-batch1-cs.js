export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia zvládla Lumiho křivku skoku — ale teď uvízla. V úrovni 3 hry "Hafenlichter" musí Lumi přistát na pohyblivé platformě. "Potřebuju přesný okamžik, kdy křivka skoku narazí na platformu", říká Mia Timovi. To znamená: musí vyřešit kvadratickou rovnici. Ne jen nakreslit funkci, ale konkrétně vyřešit rovnici pro $x$.',
      challenge: 'Mia musí vypočítat, kdy křivka skoku Lumiho protne pohyblivou platformu — to vede ke kvadratické rovnici.',
      outro: 'Mia má teď tři metody ve svém arzenálu: kvadratický vzorec, doplnění na čtverec a faktorizaci. Podle rovnice volí správnou metodu — a Lumi teď přistává přesně na každé platformě. "Je to jako švýcarský nůž", usměje se.',
    },
    objectives: {
      solve: 'Bezpečně řešit kvadratické rovnice a uvádět množinu řešení',
      pq_formula: 'Aplikovat kvadratický vzorec — včetně speciálních případů (žádné nebo jedno řešení)',
      completing_square: 'Rozumět doplnění na čtverec jako metodě řešení a provádět ji',
      factoring: 'Řešit kvadratické rovnice faktorizací',
    },
    explanation: {
      intro: 'Kvadratická rovnice má obecný tvar s nejvyšším exponentem 2. Na rozdíl od lineárních rovnic ($x$ na první) může mít nula, jedno nebo dvě řešení. Obecný tvar je:',
      normal_form: 'Pro kvadratický vzorec potřebujeme normální tvar — to znamená, že koeficient před $x^2$ musí být přesně 1. Pokud tomu tak není, vydělíme celou rovnici číslem $a$:',
      mia_tip: 'Pamatuju si: Nejdřív vše převedu na jednu stranu, aby napravo byla nula. Pak vydělím koeficientem před $x^2$. Teprve POTOM můžu použít kvadratický vzorec!',
      pq_formula: 'Kvadratický vzorec je univerzální nástroj pro kvadratické rovnice v normálním tvaru. Přímo odečteš $p$ a $q$ a dosadíš:',
      completing_square: 'Doplnění na čtverec funguje takto: Převedeme levou stranu na úplný čtverec. K tomu přičteme $(\\frac{p}{2})^2$ na obě strany. Výsledkem je výraz tvaru $(x + \\frac{p}{2})^2$, který snadno vyřešíš pro $x$.',
      factoring: 'Pokud znáš (nebo můžeš uhádnout) kořeny $x_1$ a $x_2$, rovnice se dá zapsat jako součin dvou závorek. Součin je nula, pokud je alespoň jeden činitel nula:',
    },
    concepts: {
      pq_formula: {
        title: 'Kvadratický vzorec',
        desc: 'Standardní nástroj pro kvadratické rovnice v normálním tvaru. Funguje vždy — potřebuješ jen $p$ (koeficient před $x$) a $q$ (konstantní člen).',
      },
      completing_square: {
        title: 'Doplnění na čtverec',
        desc: 'Doplníš levou stranu na úplný čtverec. Obzvlášť užitečné, když chceš také určit vrchol paraboly.',
      },
      discriminant: {
        title: 'Diskriminant',
        desc: 'Výraz pod odmocninou v kvadratickém vzorci: $D > 0$ dává dvě řešení, $D = 0$ dává přesně jedno, $D < 0$ znamená žádné reálné řešení.',
      },
      factoring: {
        title: 'Faktorizace',
        desc: 'Rozklad na dva lineární činitele. Funguje obzvlášť elegantně, když jsou kořeny celá čísla — pak je často můžeš uhádnout.',
      },
    },
    examples: {
      pq_application: {
        title: 'Řešení rovnice kvadratickým vzorcem',
        context: 'Mia počítá, kdy křivka skoku Lumiho narazí na platformu při $y = 0$.',
        step1: 'Rovnice je již v normálním tvaru (koeficient před $x^2$ je 1):',
        step2: 'Odečteme $p$ a $q$ — pozor na znaménka:',
        step3: 'Dosadíme hodnoty do kvadratického vzorce a počítáme krok za krokem:',
        step4: 'Dvě řešení — Lumi narazí na platformu na dvou místech:',
        mia_comment: 'Dvě řešení dávají smysl: Lumi vyskočí při $x = 1$ a přistane při $x = 3$. Úsek mezi tím je let!',
      },
      completing_square: {
        title: 'Řešení doplněním na čtverec',
        context: 'Tim chce rovnici vyřešit bez kvadratického vzorce — jako alternativu.',
        step1: 'Začínáme s rovnicí v normálním tvaru:',
        step2: 'Nejdřív převedeme konstantní člen na pravou stranu:',
        step3: 'Teď doplnění na čtverec: $(\\frac{6}{2})^2 = 9$ přičteme na obě strany:',
        step4: 'Levá strana je teď úplný čtverec — odmocníme, což dává dva případy:',
        step5: 'Vypočteme obě řešení:',
        mia_comment: 'Stejná rovnice, stejná řešení, jiná cesta. Doplnění na čtverec používám, když potřebuji také vrchol paraboly — dvě mouchy jednou ranou!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds a paraboly vrhu',
        desc: 'Každý vrh v Angry Birds sleduje parabolu. Rovnice $h(t) = 0$ ti řekne, kdy objekt dopadne na zem. Fyzikové používají stejný vzorec pro skutečné pohyby vrhu.',
      },
      breakeven: {
        title: 'Nalezení bodu zvratu',
        desc: 'Firma chce vědět: Od jakého počtu kusů začínáme vydělávat? Rovnice zisku $G(x) = 0$ dává body zvratu — většinou je to kvadratická rovnice.',
      },
      rocket: {
        title: 'Starty raket',
        desc: 'Výška rakety po startu je popsána kvadratickou funkcí (dokud stačí palivo). Kdy dosáhne 1000 m? Kvadratická rovnice!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Použití kvadratického vzorce bez nuly na pravé straně',
        correct: 'Nejdřív převeď vše na jednu stranu',
        why: 'Kvadratický vzorec předpokládá, že pravá strana je nula. U $x^2 + 3x = 5$ musíš nejdřív přičíst $-5$ na obě strany, aby vzniklo $x^2 + 3x - 5 = 0$. Jinak bude $q$ špatně!',
        mia_warning: 'Jednou jsem měla tuto chybu v kódu — kolize s platformou byla úplně mimo, protože $q$ mělo špatné znaménko. Vždy nejdřív nula napravo!',
      },
      sign_pq: {
        wrong: 'Chyba znaménka u $p$ v kvadratickém vzorci',
        correct: 'Dávej pozor na minus před $\\frac{p}{2}$',
        why: 'V kvadratickém vzorci stojí $-\\frac{p}{2}$. U $x^2 - 6x + 8 = 0$ je $p = -6$, takže $-\\frac{-6}{2} = +3$. Když zapomeneš na minus, dostaneš $-3$ místo $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia pracuje na úrovni s majákem ve hře Hafenlichter. Maják vysílá kužel světla nad přístav a Lumi se musí schovat ve stínu. "Musím vypočítat, jak daleko kužel světla sahá při daném úhlu", říká Mia. Tim ukazuje na pravoúhlý trojúhelník, který kužel světla tvoří se zemí. "To je trigonometrie — sinus, kosinus a tangens."',
      challenge: 'Mia potřebuje dosah kužele světla při různých úhlech, aby naprogramovala oblasti stínu.',
      outro: 'Maják se pomalu otáčí a kužel světla putuje po přístavu. Díky sinu a kosinu Miin kód počítá v reálném čase, které oblasti jsou osvětlené. Lumi se plíží od stínu ke stínu — úroveň je opravdu napínavá!',
    },
    objectives: {
      sin_cos_tan: 'Bezpečně používat sinus, kosinus a tangens v pravoúhlém trojúhelníku',
      unit_circle: 'Rozumět jednotkové kružnici a umět z ní číst hodnoty',
      angle_calculations: 'Počítat úhly a délky stran pomocí goniometrických funkcí',
      real_problems: 'Řešit praktické úlohy s trigonometrií (výšky, vzdálenosti, úhly)',
    },
    explanation: {
      intro: 'Trigonometrie spojuje úhly s délkami stran. V každém pravoúhlém trojúhelníku platí tři základní poměry — pojmenované podle úhlu $\\alpha$, který zkoumáš:',
      mia_tip: 'Moje pomůcka na zapamatování: "SOH CAH TOA" — Sin = Protilehlá/Přepona, Cos = Přilehlá/Přepona, Tan = Protilehlá/Přilehlá. Zní to divně, ale nikdy na to nezapomeneš!',
      unit_circle: 'Jednotková kružnice má poloměr 1 a střed v počátku souřadnic. Pro každý úhel $\\alpha$ přímo udává hodnoty: $x$-ová souřadnice je $\\cos(\\alpha)$, $y$-ová souřadnice je $\\sin(\\alpha)$. Proto vždy platí:',
      special_angles: 'Určité úhly bys měl znát zpaměti: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Tip: Na jednotkové kružnici můžeš tyto hodnoty odečíst geometricky.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'Poměr protilehlé odvěsny k přeponě. Na jednotkové kružnici $\\sin(\\alpha)$ odpovídá $y$-ové souřadnici bodu na kružnici.',
      },
      cosine: {
        title: 'Kosinus',
        desc: 'Poměr přilehlé odvěsny k přeponě. Na jednotkové kružnici $\\cos(\\alpha)$ odpovídá $x$-ové souřadnici. Kosinus a sinus jsou posunuty o $90°$.',
      },
      tangent: {
        title: 'Tangens',
        desc: 'Poměr protilehlé odvěsny k přilehlé odvěsně — nebo ekvivalentně $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideální pro sklony a úhly náklonu.',
      },
      unit_circle: {
        title: 'Jednotková kružnice',
        desc: 'Kružnice o poloměru 1. Každý bod na kružnici má souřadnice $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Tím lze definovat sin a cos pro všechny úhly — nejen pro ostré.',
      },
    },
    examples: {
      height_tan: {
        title: 'Výpočet výšky pomocí tangens',
        context: 'Mia měří úhel ke střeše majáku: $35°$. Vzdálenost od věže je $50\\,\\text{m}$.',
        step1: 'Náčrt: Vzdálenost je přilehlá odvěsna, hledaná výška je protilehlá odvěsna. Takže tangens:',
        step2: 'Vyjádření výšky $h$ — násobíme obě strany $50\\,\\text{m}$:',
        step3: 'Kalkulačka (režim DEG!): $\\tan(35°) \\approx 0{,}7002$ dosadíme a vypočteme:',
        mia_comment: 'Ve hře to běží v reálném čase: úhel kužele světla se mění a můj kód okamžitě počítá nový dosah. Tangens je na to perfektní!',
      },
      unit_circle: {
        title: 'Čtení hodnot z jednotkové kružnice',
        context: 'Tim chce Mii ukázat, jak funguje jednotková kružnice — na příkladu $60°$.',
        step1: 'Přepočet úhlu (volitelné): $60°$ odpovídá $\\frac{\\pi}{3}$ v obloukové míře:',
        step2: 'Přečteme hodnotu sinu — $y$-ová souřadnice bodu na jednotkové kružnici:',
        step3: 'Přečteme hodnotu kosinu — $x$-ová souřadnice:',
        step4: 'Bod na jednotkové kružnici má tedy souřadnice:',
        mia_comment: 'Na jednotkové kružnici vidím sinus a kosinus jako délky. To je mnohem názornější než jen čísla v tabulce!',
      },
    },
    realworld: {
      compass: {
        title: 'Navigace a GPS',
        desc: 'Tvůj telefon počítá směry pomocí trigonometrie. Funkce atan2 převádí $x$-ové a $y$-ové souřadnice na úhel — tak Google Maps ví, kterým směrem máš jít.',
      },
      building_height: {
        title: 'Měření výšek budov',
        desc: 'Architekti a geodeti měří výšky budov, aniž by lezli na střechu. S úhloměrem a tangens stačí vzdálenost a úhel.',
      },
      music: {
        title: 'Tóny a zvukové vlny',
        desc: 'Každý tón je sinusoida. Ladicí tón A má 440 kmitů za sekundu — popsaný pomocí $f(t) = \\sin(880\\pi t)$. Hudba je aplikovaná trigonometrie!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Záměna sinu a kosinu',
        correct: 'Sinus = Protilehlá/Přepona',
        why: 'Sinus patří k protilehlé odvěsně (strana naproti úhlu), kosinus k přilehlé odvěsně (strana vedle úhlu). Pokud je zaměníš, dostaneš špatnou hodnotu.',
        mia_warning: 'Stále se mi to občas stává! Nakreslím si trojúhelník a popíšu strany vzhledem k úhlu. Pak hned vidím, která je protilehlá a která přilehlá.',
      },
      deg_rad: {
        wrong: 'Špatný úhlový režim na kalkulačce',
        correct: 'Vždy zkontroluj režim DEG při zadávání stupňů',
        why: 'V režimu RAD kalkulačka interpretuje $90$ jako $90$ radiánů (přibližně $5156°$), ne jako $90°$. $\\sin(90°) = 1$, ale $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Výsledek: úplně špatný.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter má dostat multiplayerový režim. Mia testuje servery s 10 hráči — vše běží plynule. Ale Tim varuje: "A co při 100? Při 1000? Když se hra stane virální, počet hráčů se může zdvojnásobit každé tři dny." Mia počítá a je šokovaná: exponenciální růst je mnohem rychlejší, než se zdá.',
      challenge: 'Zátěž serverů neroste lineárně s počtem hráčů, ale exponenciálně. Mia musí předpovědět, kdy budou servery přetížené.',
      outro: 'Mia postavila model předpovídající vývoj počtu hráčů. Díky exponenciální funkci teď ví: Pokud je doba zdvojnásobení 3 dny, po 2 týdnech potřebuje 32krát větší kapacitu serverů. "Raději škálovat brzy než pozdě spadnout", rozhoduje se.',
    },
    objectives: {
      exponential_functions: 'Rozpoznávat exponenciální funkce a odlišit je od lineárních funkcí',
      growth_factor: 'Určit faktor růstu z procentních údajů a interpretovat ho',
      half_life: 'Vypočítat a aplikovat poločas rozpadu a dobu zdvojnásobení',
      model_real_world: 'Modelovat reálné procesy růstu a rozpadu pomocí exponenciálních funkcí',
    },
    explanation: {
      intro: 'Při lineárním růstu se v každém kroku přičítá stejná hodnota. Při exponenciálním růstu se v každém kroku násobí stejným faktorem. Zní to podobně — ale vede to k úplně odlišným výsledkům:',
      growth_factor: 'Faktor růstu $b$ ti řekne vše: Roste-li něco o $p\\%$ za časovou jednotku, faktor je větší než 1. Klesá-li něco o $p\\%$ (rozpad), je menší než 1:',
      mia_tip: 'Lineární funkce sčítají, exponenciální násobí. Při 10% denním růstu je faktor $b = 1{,}10$ — po 7 dnech tedy $1{,}10^7 \\approx 1{,}95$, skoro zdvojnásobení! To mě překvapilo při plánování serverů.',
      half_life: 'Poločas rozpadu $t_H$ je doba, po které zůstává polovina. Je konstantní — bez ohledu na výchozí hodnotu. To je na exponenciálním rozpadu zvláštní:',
      doubling_time: 'Protějšek při růstu: Doba zdvojnásobení $t_V$ ti říká, za jak dlouho se hodnota zdvojnásobí. Také zůstává vždy stejná:',
    },
    concepts: {
      exponential_function: {
        title: 'Exponenciální funkce',
        desc: 'Obecný tvar: $a$ je počáteční hodnota, $b$ faktor růstu, $t$ čas. Rozhodující: proměnná je v exponentu — to je rozdíl oproti mocninným funkcím.',
      },
      growth_factor: {
        title: 'Faktor růstu',
        desc: 'Při $p\\%$ nárůstu: $b = 1 + \\frac{p}{100}$. Příklad: 5% růst dává $b = 1{,}05$. Při 12% poklesu: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Poločas rozpadu',
        desc: 'Doba, za kterou se hodnota sníží na polovinu. Typický pro radioaktivní rozpad, léky v těle nebo vybíjení baterie. Poločas rozpadu je nezávislý na počáteční hodnotě.',
      },
      euler_base: {
        title: 'Přirozená exponenciální funkce',
        desc: 'Základ $e \\approx 2{,}718$ je zvláštní: funkce $e^x$ je svou vlastní derivací. S $k > 0$ roste, s $k < 0$ klesá. Standard v přírodních vědách.',
      },
    },
    examples: {
      bacteria: {
        title: 'Růst bakterií',
        context: 'Bakteriální kultura začíná s 500 bakteriemi a zdvojnásobuje se každou hodinu.',
        step1: 'Identifikujeme počáteční hodnotu a faktor růstu — zdvojnásobení znamená faktor 2:',
        step2: 'Sestavíme exponenciální funkci — $t$ počítá hodiny:',
        step3: 'Dosadíme $t = 5$ (po 5 hodinách): $2^5 = 32$:',
        step4: 'Po 5 hodinách je 16 000 bakterií:',
        mia_comment: 'Z 500 na 16 000 za pouhých 5 hodin! To ukazuje, proč je exponenciální růst tak překvapivý. U serverů to funguje podobně — počty hráčů mohou růst rychleji, než stihneš objednat servery.',
      },
      radioactive: {
        title: 'Radioaktivní rozpad',
        context: 'Lék má poločas rozpadu 8 dní. Počáteční množství: 200 g.',
        step1: 'Poznamenáme si poločas rozpadu a počáteční hodnotu:',
        step2: 'Sestavíme vzorec rozpadu s $t_H = 8$:',
        step3: 'Dosadíme po 24 dnech — to jsou přesně 3 poločasy rozpadu ($\\frac{24}{8} = 3$):',
        step4: 'Po 24 dnech zbývá jen 25 g — osmina počáteční hodnoty:',
        mia_comment: 'Po každém poločasu rozpadu se množství sníží na polovinu: $200 \\to 100 \\to 50 \\to 25$. Tak je to vždy, ať už začínáš s 200 g nebo se 2 tunami.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Virální videa na TikToku',
        desc: 'Virální video začíná na 100 zhlédnutích. Když každý divák ukáže video 1,8 lidem, čísla vybuchnou: po 10 kolech je to už přes 35 000 zhlédnutí. Algoritmy tento efekt ještě posilují.',
      },
      battery: {
        title: 'Vybíjení baterie',
        desc: 'Baterie tvého telefonu ztrácí každou hodinu přibližně 5% nabití. Po 14 hodinách zbývá asi polovina — to není lineární pokles, ale exponenciální rozpad.',
      },
      pandemic: {
        title: 'Šíření pandemie',
        desc: 'COVID-19 ukázal, co znamená "exponenciální růst": Bez opatření se počet případů zdvojnásoboval každé 3 dny. Po měsíci by to byl faktor $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Lineární model místo exponenciálního',
        correct: 'Procentní změna = exponenciální funkce',
        why: '"5% růst ročně" NENÍ $+5$ za rok, ale $\\cdot 1{,}05$ za rok. U lineárního modelu je přírůstek konstantní, u exponenciálního roste stále rychleji.',
        mia_warning: 'Nejdřív jsem počítala $\\text{Hráči}(t) = 100 + 50t$. Skutečná čísla byla po týdnu 3krát vyšší! Exponenciální růst se téměř vždy podceňuje.',
      },
      wrong_growth_factor: {
        wrong: 'Dosazení procent přímo jako faktoru',
        correct: 'Faktor = $1 + \\frac{p}{100}$',
        why: 'Při 3% růstu je faktor $1{,}03$, ne $3$! S $b = 3$ by se hodnota ztrojnásobila místo růstu o 3 %. Vždy počítej $1 + \\frac{p}{100}$.',
      },
    },
  },
};
