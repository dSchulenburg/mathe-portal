export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'Amir staví předpovědní model pro počty uživatelů výukové aplikace. První týdny vypadají fantasticky: každý týden o 40 procent víc. Extrapoluje — a na příští rok mu vychází víc uživatelů, než kolik je lidí se smartphonem. „Tvůj model není špatný," říká jeho profesorka, „jen už je mimo oblast své platnosti. Co se stane, když aplikaci má už polovina všech možných uživatelů?" Amir si uvědomí: Zapomněl, že svět je konečný.',
      challenge: 'Jak modelovat růst, který má hranici? A jak rozlišit dva druhy hranice: jednu, před kterou se brzdí od samého začátku, a druhou, ke které se nejdřív zrychluje a pak brzdí?',
      outro: 'Amir teď pracuje se dvěma modely místo jednoho. Omezený růst, když přírůstek závisí jen na volném zbytku — chladnutí, nasycení, nabíjení. Logistický růst, když přírůstek navíc potřebuje stávající stav — nákaza, doporučování, populace. A teď ví, co znamená inflexní bod: ne konec růstu, ale jeho nejrychlejší okamžik.',
    },
    objectives: {
      grenzen: 'Poznat, kdy exponenciální model narazí na svou hranici — a proč byl předtím přesto správný',
      beschraenkt: 'Sestavit a vyhodnotit omezený růst $N(t) = K - (K - N_0)e^{-kt}$',
      logistisch: 'Určit logistický model $N(t) = \\frac{K}{1 + a e^{-rt}}$ z kapacity a počáteční hodnoty',
      wendepunkt: 'Vypočítat inflexní bod a interpretovat ho jako okamžik nejsilnějšího přírůstku',
    },
    explanation: {
      intro: 'Exponenciální růst nezná žádnou hranici. Ve skutečnosti ale téměř vždy nějaká je: rybník je jednou plný, všichni možní zákazníci už produkt mají, hrnek má pokojovou teplotu. Této horní hranici se říká kapacita $K$. Dva modely popisují, jak se jí dosáhne — a rozdíl mezi nimi není detail, ale otázka, zda má křivka inflexní bod.',
      beschraenkt: 'U omezeného růstu závisí přírůstek jen na tom, kolik ještě chybí. Na začátku chybí nejvíc, takže přírůstek je na začátku největší a pořád se zmenšuje. Křivka se k hranici blíží zdola, aniž by jí kdy dosáhla:',
      amir_tip: 'Oba modely rozlišuju jedinou otázkou: Potřebuje přírůstek to, co už tu je? U chladnoucí kávy ne — teplo odchází bez ohledu na to, kolik ho ještě zbývá, počítá se jen rozdíl. U virálního videa ano — bez lidí, kteří ho sdílejí, se nestane vůbec nic. To první je omezený růst, to druhé logistický.',
      logistisch: 'U logistického růstu přibývá jako druhý činitel stav. Na začátku je sice hodně místa, ale skoro žádní jedinci — růst je pomalý. Na konci je jedinců hodně, ale už žádné místo — zase pomalu. Mezi tím leží maximum. Z toho vzniká typický tvar S:',
      dgl: 'Nejjasněji je rozdíl vidět v diferenciální rovnici. Čte se jako věta: Přírůstek je úměrný stavu **krát** dosud volnému podílu. Chybí-li jeden z obou činitelů, růst se zastaví:',
      wendepunkt: 'Z této rovnice plyne nejdůležitější ukazatel modelu. Součin stavu a volného zbytku je největší právě tehdy, když se oba rovnají — tedy při poloviční kapacitě. Tam leží inflexní bod a tam je rychlost přírůstku maximální:',
    },
    concepts: {
      kapazitaet: {
        title: 'Kapacita $K$',
        desc: 'Horní hranice, ke které se stav blíží, aniž by jí dosáhl. Je limitou pro $t \\to \\infty$ a v obou modelech vystupuje jako parametr. Bez smysluplné kapacity nelze použít ani jeden z obou modelů.',
      },
      beschraenkt: {
        title: 'Omezený růst',
        desc: 'Přírůstek závisí jen na dosud volném zbytku $K - N$. Proto je největší úplně na začátku a potom plynule klesá. Křivka nemá inflexní bod — od začátku je konkávní. Typické pro chladnutí, nabíjení a nasycení.',
      },
      logistisch: {
        title: 'Logistický růst',
        desc: 'Přírůstek závisí na stavu A na volném zbytku. Z toho vzniká S-křivka: nejdřív pomalu, pak rychle, pak zase pomalu. Parametr $a = \\frac{K - N_0}{N_0}$ udává, kolik volných míst připadá na začátku na každého přítomného jedince.',
      },
      wendepunkt: {
        title: 'Inflexní bod při $K/2$',
        desc: 'Vždy při poloviční kapacitě, nezávisle na $r$ a $N_0$. Tam je rychlost přírůstku maximální, a to $\\frac{rK}{4}$. Potom stav dál roste, ale pomaleji — nejčastější záměna v interpretačních úlohách.',
      },
    },
    examples: {
      seerosen: {
        title: 'Sestavení logistického modelu z kapacity a počáteční hodnoty',
        context: 'Na rybníku s místem pro 500 leknínů roste na začátku 50 rostlin.',
        step1: 'Nejprve parametr $a$. Plyne přímo z kapacity a počáteční hodnoty:',
        step2: 'Tím je model hotový. Růstová rychlost $r = 0{,}4$ za týden pochází z řady měření:',
        step3: 'Zkouška: Dosaď $t = 0$. Pokud tu nevyjde počáteční hodnota, je $a$ špatně:',
        step4: 'Okamžik inflexe plyne z $a\\,e^{-rt} = 1$ — logaritmická rovnice:',
        amir_comment: 'Zkoušku v kroku 3 dělám vždycky. Stojí deset sekund a zachytí nejčastější chybu: $a = \\frac{K}{N_0}$ místo $a = \\frac{K - N_0}{N_0}$. U mě by to bylo 10 místo 9 — vypadá to nevinně, ale posune to celou křivku.',
      },
      abkuehlung: {
        title: 'Omezený růst při chladnutí',
        context: 'Kai nechá stát kávu o teplotě 80 °C v místnosti s teplotou 20 °C.',
        step1: 'Hranicí je tu pokojová teplota, rozdíl vůči ní činí na začátku 60 °C:',
        step2: 'Zkouška pro $t = 0$: Musí vyjít počáteční teplota:',
        step3: 'Po deseti minutách zbývá už jen asi třetina rozdílu:',
        step4: 'Z dlouhodobého hlediska zůstává pokojová teplota — matematicky se jí nikdy nedosáhne:',
        kai_comment: 'U kávy je to každodenní zkušenost: První minuta přinese nejvíc, pak to jde ztuha. Přesně to je omezený růst. A je to důvod, proč foukání na začátku pomáhá a po deseti minutách už nic nepřinese.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Epidemie',
        desc: 'Nové infekce potřebují nakažené (kteří nakazí) a vnímavé (kteří se mohou nakazit). Inflexní bod je den s nejvíce novými infekcemi — celkový počet potom dál roste, jen pomaleji.',
      },
      produkt: {
        title: 'Šíření produktů a aplikací',
        desc: 'Noví uživatelé přicházejí většinou přes stávající uživatele. Na začátku chybějí ti, kdo doporučují, na konci ti, kdo produkt ještě nemají. Marketingová oddělení nazývají S-křivku také adopční křivkou.',
      },
      abkuehlung: {
        title: 'Chladnutí a nabíjení',
        desc: 'Newtonův zákon ochlazování a nabíjecí křivka akumulátoru jsou omezený růst. Počítá se tu jen vzdálenost ke konečnému stavu — proto se akumulátor posledních pár procent nabíjí tak mučivě pomalu.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'Od inflexního bodu stav klesá',
        correct: 'Od inflexního bodu klesá rychlost přírůstku, stav dál roste',
        why: 'Inflexní bod je nulový bod druhé derivace, ne první. $N\'$ tam má maximum, je tedy právě obzvlášť velká — a kladná. Logistická funkce je na celém svém definičním oboru ryze rostoucí, nikdy neklesá. Kdo tu zamění stav a přírůstek, obrátí tvrzení přesně naopak.',
        amir_warning: 'To je chyba číslo jedna v interpretaci a stojí body u každé maturity. Můj trik: Odpověď formuluju vždycky se slovem „za". Co se mění za týden? Přírůstek. Co je tu celkem? Stav. Jakmile se objeví slovo „za", mluvím o $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'Logistický růst je exponenciální růst, který je u $K$ useknutý',
        correct: 'Logistická křivka brzdí postupně a $K$ vůbec nikdy nedosáhne',
        why: 'Useknutý exponenciální model by měl zlom — v místě useknutí by nebyl diferencovatelný a hranice by dosáhl přesně v konečném čase. Logistická funkce je naproti tomu všude hladká a ke $K$ se blíží jen asymptoticky. Rozdíl není kosmetický: Useknutý model předpovídá konkrétní koncový okamžik, logistický žádný.',
        amir_warning: 'Správná je na té myšlence jen počáteční fáze: Dokud je $N$ malé vůči $K$, je brzdicí činitel skoro $1$ a obě křivky prakticky leží na sobě. Exponenciální křivka je počáteční tečnou logistické — proto taky můj první model tak dobře seděl na první týdny.',
      },
    },
  },
};
