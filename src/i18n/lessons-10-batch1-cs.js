export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia zvladla Lumiho krivku skoku — ale ted uvizla. V urovni 3 hry "Hafenlichter" musi Lumi pristat na pohyblive platforme. "Potrebuju presny okamzik, kdy krivka skoku narazi na platformu", rika Mia Timovi. To znamena: musi vyresit kvadratickou rovnici. Ne jen nakreslit funkci, ale konkretne vyresit rovnici pro $x$.',
      challenge: 'Mia musi vypocitat, kdy krivka skoku Lumiho protne pohyblivou platformu — to vede ke kvadraticke rovnici.',
      outro: 'Mia ma ted tri metody ve svem arzenalu: kvadraticky vzorec, doplneni na ctverec a faktorizaci. Podle rovnice voli spravnou metodu — a Lumi ted pristava presne na kazde platforme. "Je to jako svycarsky nuz", usmeji se.',
    },
    objectives: {
      solve: 'Bezpecne resit kvadraticke rovnice a uvadet mnozinu reseni',
      pq_formula: 'Aplikovat kvadraticky vzorec — vcetne specialnich pripadu (zadne nebo jedno reseni)',
      completing_square: 'Rozumet doplneni na ctverec jako metode reseni a provadet ji',
      factoring: 'Resit kvadraticke rovnice faktorizaci',
    },
    explanation: {
      intro: 'Kvadraticka rovnice ma obecny tvar s nejvyssim exponentem 2. Na rozdil od linearnich rovnic ($x$ na prvni) muze mit nula, jedno nebo dve reseni. Obecny tvar je:',
      normal_form: 'Pro kvadraticky vzorec potrebujeme normalni tvar — to znamena, ze koeficient pred $x^2$ musi byt presne 1. Pokud tomu tak neni, vydelime celou rovnici cislem $a$:',
      mia_tip: 'Pamatuju si: Nejdriv vse prevedu na jednu stranu, aby napravo byla nula. Pak vydelim koeficientem pred $x^2$. Teprve POTOM mohu pouzit kvadraticky vzorec!',
      pq_formula: 'Kvadraticky vzorec je univerzalni nastroj pro kvadraticke rovnice v normalnim tvaru. Primes odectes $p$ a $q$ a dosadis:',
      completing_square: 'Doplneni na ctverec funguje takto: Prevedeme levou stranu na uplny ctverec. K tomu pricteme $(\\frac{p}{2})^2$ na obe strany. Vysledkem je vyraz tvaru $(x + \\frac{p}{2})^2$, ktery snadno vyresis pro $x$.',
      factoring: 'Pokud znas (nebo muzes uhadnout) koreny $x_1$ a $x_2$, rovnice se da zapsat jako soucin dvou zavorek. Soucin je nula, pokud je alespon jeden cinitel nula:',
    },
    concepts: {
      pq_formula: {
        title: 'Kvadraticky vzorec',
        desc: 'Standardni nastroj pro kvadraticke rovnice v normalnim tvaru. Funguje vzdy — potrebujes jen $p$ (koeficient pred $x$) a $q$ (konstantni clen).',
      },
      completing_square: {
        title: 'Doplneni na ctverec',
        desc: 'Doplnis levou stranu na uplny ctverec. Obzvlast uzitecne, kdyz chces take urcit vrchol paraboly.',
      },
      discriminant: {
        title: 'Diskriminant',
        desc: 'Vyraz pod odmocninou v kvadratickem vzorci: $D > 0$ dava dve reseni, $D = 0$ dava presne jedno, $D < 0$ znamena zadne realne reseni.',
      },
      factoring: {
        title: 'Faktorizace',
        desc: 'Rozklad na dva linearni cinitele. Funguje obzvlast elegantne, kdyz jsou koreny cele cisla — pak je casto muzes uhadnout.',
      },
    },
    examples: {
      pq_application: {
        title: 'Reseni rovnice kvadratickym vzorcem',
        context: 'Mia pocita, kdy krivka skoku Lumiho narazi na platformu pri $y = 0$.',
        step1: 'Rovnice je jiz v normalnim tvaru (koeficient pred $x^2$ je 1):',
        step2: 'Odecteme $p$ a $q$ — pozor na znamenka:',
        step3: 'Dosadime hodnoty do kvadratickeho vzorce a pocitame krok za krokem:',
        step4: 'Dve reseni — Lumi narazi na platformu na dvou mistech:',
        mia_comment: 'Dve reseni davaji smysl: Lumi vyskoci pri $x = 1$ a pristane pri $x = 3$. Usek mezi tim je let!',
      },
      completing_square: {
        title: 'Reseni doplnenim na ctverec',
        context: 'Tim chce rovnici vyresit bez kvadratickeho vzorce — jako alternativu.',
        step1: 'Zaciname s rovnici v normalnim tvaru:',
        step2: 'Nejdriv prevedeme konstantni clen na pravou stranu:',
        step3: 'Ted doplneni na ctverec: $(\\frac{6}{2})^2 = 9$ pricteme na obe strany:',
        step4: 'Leva strana je ted uplny ctverec — odmocnime, coz dava dva pripady:',
        step5: 'Vypocteme oba reseni:',
        mia_comment: 'Stejna rovnice, stejna reseni, jina cesta. Doplneni na ctverec pouzivam, kdyz potrebuji take vrchol paraboly — dve mouchy jednou ranou!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds a paraboly vrhu',
        desc: 'Kazdy vrh v Angry Birds sleduje parabolu. Rovnice $h(t) = 0$ ti rekne, kdy objekt dolehne na zem. Fyzikove pouzivaji stejny vzorec pro skutecne pohyby vrhu.',
      },
      breakeven: {
        title: 'Nalezeni bodu zvratu',
        desc: 'Firma chce vedet: Od jakeho poctu kusu zaciname vydelavat? Rovnice zisku $G(x) = 0$ dava body zvratu — vetsinou je to kvadraticka rovnice.',
      },
      rocket: {
        title: 'Starty raket',
        desc: 'Vyska rakety po startu je popsana kvadratickou funkci (dokud staci palivo). Kdy dosahne 1000 m? Kvadraticka rovnice!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Pouziti kvadratickeho vzorce bez nuly na prave strane',
        correct: 'Nejdriv preved vse na jednu stranu',
        why: 'Kvadraticky vzorec predpoklada, ze prava strana je nula. U $x^2 + 3x = 5$ musis nejdriv pricist $-5$ na obe strany, aby vzniklo $x^2 + 3x - 5 = 0$. Jinak bude $q$ spatne!',
        mia_warning: 'Jednou jsem mela tuto chybu v kodu — kolize s platformou byla uplne mimo, protoze $q$ melo spatne znamenko. Vzdy nejdriv nula napravo!',
      },
      sign_pq: {
        wrong: 'Chyba znamenka u $p$ v kvadratickem vzorci',
        correct: 'Davej pozor na minus pred $\\frac{p}{2}$',
        why: 'V kvadratickem vzorci stoji $-\\frac{p}{2}$. U $x^2 - 6x + 8 = 0$ je $p = -6$, takze $-\\frac{-6}{2} = +3$. Kdyz zapomenes na minus, dostanes $-3$ misto $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia pracuje na urovni s majaky ve hre Hafenlichter. Majak vyslila kuzel svetla nad pristav a Lumi se musi schovat ve stinu. "Musim vypocitat, jak daleko kuzel svetla saha pri danem uhlu", rika Mia. Tim ukazuje na pravouhly trojuhelnik, ktery kuzel svetla tvori se zemi. "To je trigonometrie — sinus, kosinus a tangens."',
      challenge: 'Mia potrebuje dosah kuzelu svetla pri ruznych uhlech, aby naprogramovala oblasti stinu.',
      outro: 'Majak se pomalu otaci a kuzel svetla putuje po pristavu. Diky sinu a kosinu Miin kod pocita v realnem case, ktere oblasti jsou osvetlene. Lumi se plizi od stinu ke stinu — uroven je opravdu napinava!',
    },
    objectives: {
      sin_cos_tan: 'Bezpecne pouzivat sinus, kosinus a tangens v pravouhlem trojuhelniku',
      unit_circle: 'Rozumet jednotkove kruznici a umet z ni cist hodnoty',
      angle_calculations: 'Pocitat uhly a delky stran pomoci trigonometrickych funkci',
      real_problems: 'Resit prakticke ulohy s trigonometrii (vysky, vzdalenosti, uhly)',
    },
    explanation: {
      intro: 'Trigonometrie spojuje uhly s delkami stran. V kazdem pravouhlem trojuhelniku plati tri zakladni pomery — pojmenovane podle uhlu $\\alpha$, ktery zkoumas:',
      mia_tip: 'Moje pomucka na zapamatovani: "SOH CAH TOA" — Sin = Protilehla/Prepona, Cos = Prilehla/Prepona, Tan = Protilehla/Prilehla. Zni to divne, ale nikdy na to nezapomnite!',
      unit_circle: 'Jednotkova kruznice ma polomer 1 a stred v pocatku souradnic. Pro kazdy uhel $\\alpha$ primo udava hodnoty: $x$-ova souradnice je $\\cos(\\alpha)$, $y$-ova souradnice je $\\sin(\\alpha)$. Proto vzdy plati:',
      special_angles: 'Urcite uhly bys mel znat zpaměti: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Tip: Na jednotkove kruznici muzes tyto hodnoty odecist geometricky.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'Pomer protilehle odvesny k prepone. Na jednotkove kruznici $\\sin(\\alpha)$ odpovida $y$-ove souradnici bodu na kruznici.',
      },
      cosine: {
        title: 'Kosinus',
        desc: 'Pomer prilehle odvesny k prepone. Na jednotkove kruznici $\\cos(\\alpha)$ odpovida $x$-ove souradnici. Kosinus a sinus jsou posunuty o $90°$.',
      },
      tangent: {
        title: 'Tangens',
        desc: 'Pomer protilehle odvesny k prilehle odvesne — nebo ekvivalentne $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Idealni pro sklony a uhly naklonu.',
      },
      unit_circle: {
        title: 'Jednotkova kruznice',
        desc: 'Kruznice o polomeru 1. Kazdy bod na kruznici ma souradnice $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Tim lze definovat sin a cos pro vsechny uhly — nejen pro ostre.',
      },
    },
    examples: {
      height_tan: {
        title: 'Vypocet vysky pomoci tangensu',
        context: 'Mia meri uhel ke streche majaku: $35°$. Vzdalenost od veze je $50\\,\\text{m}$.',
        step1: 'Nacrt: Vzdalenost je prilehla odvesna, hledana vyska je protilehla odvesna. Takze tangens:',
        step2: 'Vyjadreni vysky $h$ — nasobime obe strany $50\\,\\text{m}$:',
        step3: 'Kalkulacka (rezim DEG!): $\\tan(35°) \\approx 0{,}7002$ dosadime a vypocteme:',
        mia_comment: 'Ve hre to bezi v realnem case: uhel kuzelu svetla se meni a muj kod okamzite pocita novy dosah. Tangens je na to perfektni!',
      },
      unit_circle: {
        title: 'Cteni hodnot z jednotkove kruznice',
        context: 'Tim chce Mii ukazat, jak funguje jednotkova kruznice — na prikladu $60°$.',
        step1: 'Prepocet uhlu (volitelne): $60°$ odpovida $\\frac{\\pi}{3}$ v obloukove mire:',
        step2: 'Precteme hodnotu sinu — $y$-ova souradnice bodu na jednotkove kruznici:',
        step3: 'Precteme hodnotu kosinu — $x$-ova souradnice:',
        step4: 'Bod na jednotkove kruznici ma tedy souradnice:',
        mia_comment: 'Na jednotkove kruznici vidim sinus a kosinus jako delky. To je mnohem nazornejsi nez jen cisla v tabulce!',
      },
    },
    realworld: {
      compass: {
        title: 'Navigace a GPS',
        desc: 'Tvuj telefon pocita smery pomoci trigonometrie. Funkce atan2 prevadi $x$-ove a $y$-ove souradnice na uhel — tak Google Maps vi, kterym smerem mas jit.',
      },
      building_height: {
        title: 'Mereni vysek budov',
        desc: 'Architekti a geodeti meri vysky budov, aniz by lezli na strechu. S uhel merem a tangensem staci vzdalenost a uhel.',
      },
      music: {
        title: 'Tony a zvukove vlny',
        desc: 'Kazdy ton je sinusoida. Ladici ton A ma 440 kmitu za sekundu — popsany pomoci $f(t) = \\sin(880\\pi t)$. Hudba je aplikovana trigonometrie!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Zamena sinu a kosinu',
        correct: 'Sinus = Protilehla/Prepona',
        why: 'Sinus patri k protilehle odvesne (strana naproti uhlu), kosinus k prilehle odvesne (strana vedle uhlu). Pokud je zamenis, dostanes spatnou hodnotu.',
        mia_warning: 'Stale se mi to obcas stava! Nakreslim si trojuhelnik a popisu strany vzhledem k uhlu. Pak hned vidim, ktera je protilehla a ktera prilehla.',
      },
      deg_rad: {
        wrong: 'Spatny uhlovy rezim na kalkulacce',
        correct: 'Vzdy zkontroluj rezim DEG pri zadavani stupnu',
        why: 'V rezimu RAD kalkulacka interpretuje $90$ jako $90$ radianu (priblizne $5156°$), ne jako $90°$. $\\sin(90°) = 1$, ale $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Vysledek: uplne spatny.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter ma dostat multiplayerovy rezim. Mia testuje servery s 10 hraci — vse bezi plynne. Ale Tim varuje: "A co pri 100? Pri 1000? Kdyz se hra stane viralní, pocet hracu se muze zdvojnasobit kazde tri dny." Mia pocita a je sokovana: exponencialni rust je mnohem rychlejsi, nez se zda.',
      challenge: 'Zatez serveru neroste linearne s poctem hracu, ale exponencialne. Mia musi predpovedet, kdy budou servery pretizeny.',
      outro: 'Mia postavila model predpovidajici vyvoj poctu hracu. Diky exponencialni funkci ted vi: Pokud je cas zdvojnasobeni 3 dny, po 2 tydnech potrebuje 32krat vetsi kapacitu serveru. "Radeji skalovat brzy nez pozde spadnout", rozhoduje se.',
    },
    objectives: {
      exponential_functions: 'Rozpoznavat exponencialni funkce a odlisit je od linearnich funkci',
      growth_factor: 'Urcit faktor rustu z procentnich udaju a interpretovat ho',
      half_life: 'Vypocitat a aplikovat polocas rozpadu a cas zdvojnasobeni',
      model_real_world: 'Modelovat realne procesy rustu a rozpadu pomoci exponencialnich funkci',
    },
    explanation: {
      intro: 'Pri linearnim rustu se v kazdem kroku pricita stejna hodnota. Pri exponencialnim rustu se v kazdem kroku nasobi stejnym faktorem. Zni to podobne — ale vede to k uplne odlisnym vysledkum:',
      growth_factor: 'Faktor rustu $b$ ti rekne vse: Roste-li neco o $p\\%$ za casovou jednotku, faktor je vetsi nez 1. Klesá-li neco o $p\\%$ (rozpad), je mensi nez 1:',
      mia_tip: 'Linearni funkce scitaji, exponencialni nasobi. Pri 10% dennim rustu je faktor $b = 1{,}10$ — po 7 dnech tedy $1{,}10^7 \\approx 1{,}95$, skoro zdvojnasobeni! To me prekvapilo pri planovani serveru.',
      half_life: 'Polocas rozpadu $t_H$ je doba, po ktere zustava polovina. Je konstantni — bez ohledu na vychozi hodnotu. To je to zvlastni na exponencialnim rozpadu:',
      doubling_time: 'Protejsek pri rustu: Cas zdvojnasobeni $t_V$ ti rika, za jak dlouho se hodnota zdvojnasobi. Take zustava vzdy stejny:',
    },
    concepts: {
      exponential_function: {
        title: 'Exponencialni funkce',
        desc: 'Obecny tvar: $a$ je pocatecni hodnota, $b$ faktor rustu, $t$ cas. Rozhodujici: promenna je v exponentu — to je rozdil oproti mocninnym funkcim.',
      },
      growth_factor: {
        title: 'Faktor rustu',
        desc: 'Pri $p\\%$ narustu: $b = 1 + \\frac{p}{100}$. Priklad: 5% rust dava $b = 1{,}05$. Pri 12% poklesu: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Polocas rozpadu',
        desc: 'Doba, za kterou se hodnota snizi na polovinu. Typicky pro radioaktivni rozpad, leky v tele nebo vybijeni baterie. Polocas rozpadu je nezavisly na pocatecni hodnote.',
      },
      euler_base: {
        title: 'Prirozena exponencialni funkce',
        desc: 'Zaklad $e \\approx 2{,}718$ je zvlastni: funkce $e^x$ je svoji vlastni derivaci. S $k > 0$ roste, s $k < 0$ klesa. Standard v prirodnich vedach.',
      },
    },
    examples: {
      bacteria: {
        title: 'Rust bakterii',
        context: 'Bakterialni kultura zacina s 500 bakteriemi a zdvojnasobuje se kazdou hodinu.',
        step1: 'Identifikujeme pocatecni hodnotu a faktor rustu — zdvojnasobeni znamena faktor 2:',
        step2: 'Sestavime exponencialni funkci — $t$ pocita hodiny:',
        step3: 'Dosadime $t = 5$ (po 5 hodinach): $2^5 = 32$:',
        step4: 'Po 5 hodinach je 16 000 bakterii:',
        mia_comment: 'Z 500 na 16 000 za pouhych 5 hodin! To ukazuje, proc je exponencialni rust tak prekvapujici. U serveru to funguje podobne — pocty hracu mohou rust rychleji, nez stihnes objednat servery.',
      },
      radioactive: {
        title: 'Radioaktivni rozpad',
        context: 'Lek ma polocas rozpadu 8 dni. Pocatecni mnozstvi: 200 g.',
        step1: 'Poznamename si polocas rozpadu a pocatecni hodnotu:',
        step2: 'Sestavime vzorec rozpadu s $t_H = 8$:',
        step3: 'Dosadime po 24 dnech — to jsou presne 3 polocasy rozpadu ($\\frac{24}{8} = 3$):',
        step4: 'Po 24 dnech zbyva jen 25 g — osmina pocatecni hodnoty:',
        mia_comment: 'Po kazdem polocasu rozpadu se mnozstvi snizi na polovinu: $200 \\to 100 \\to 50 \\to 25$. Tak to je vzdy, at uz zacinas s 200 g nebo se 2 tunami.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Viralni videa na TikToku',
        desc: 'Viralni video zacina na 100 zhlednuti. Kdyz kazdy divak ukaze video 1,8 lidem, cisla vybuchnou: po 10 kolech je to uz pres 35 000 zhlednuti. Algoritmy tento efekt jeste posiluji.',
      },
      battery: {
        title: 'Vybijeni baterie',
        desc: 'Baterie tveho telefonu ztraci kazdou hodinu priblizne 5% nabiti. Po 14 hodinach zbyva asi polovina — to neni linearni pokles, ale exponencialni rozpad.',
      },
      pandemic: {
        title: 'Sireni pandemie',
        desc: 'COVID-19 ukazal, co znamena "exponencialni rust": Bez opatreni se pocet pripadu zdvojnasoboval kazde 3 dny. Po mesici by to byl faktor $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Linearni model misto exponencialniho',
        correct: 'Procentni zmena = exponencialni funkce',
        why: '"5% rust rocne" NENI $+5$ za rok, ale $\\cdot 1{,}05$ za rok. U linearniho modelu je prirustek konstantni, u exponencialniho roste stale rychleji.',
        mia_warning: 'Nejdriv jsem pocitala $\\text{Hraci}(t) = 100 + 50t$. Skutecna cisla byla po tydnu 3krat vyssi! Exponencialni rust se temer vzdy podcenuje.',
      },
      wrong_growth_factor: {
        wrong: 'Dosazeni procent primo jako faktoru',
        correct: 'Faktor = $1 + \\frac{p}{100}$',
        why: 'Pri 3% rustu je faktor $1{,}03$, ne $3$! S $b = 3$ by se hodnota ztrojnasobila misto rustu o 3%. Vzdy pocitej $1 + \\frac{p}{100}$.',
      },
    },
  },
};
