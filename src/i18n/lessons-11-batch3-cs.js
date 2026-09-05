export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'Amir staví v DataPulse nový doporučovací filtr. Vzorec: „relevance na posluchače dělená počtem posluchačů". Zní to čistě — dokud se Yara nezeptá: „Co se stane, když má skladba nula posluchačů?" Amir zírá do kódu: dělení nulou. Pád. Póly, odstranitelné nespojitosti, asymptoty — celá rodina racionálních funkcí se mu najednou objeví v sešitě a on ji musí opravdu pochopit.',
      challenge: 'Amir musí filtr zabezpečit tak, aby nepadal v pólech — a zároveň poznat, kdy je zdánlivý pád ve skutečnosti jen odstranitelná nespojitost, kterou lze zkrátit.',
      outro: 'Se třemi nástroji si Amir poradí: zkontrolovat definiční obor (kde se jmenovatel nuluje?), rozlišit pól a odstranitelnou nespojitost (nuluje se tam i čitatel?) a určit asymptoty (chování pro velká $|x|$). Jeho filtr teď běží čistě — a profesor Nguyen chválí: „To je pořádná numerická hygiena."',
    },
    objectives: {
      definition: 'Rozpoznat racionální funkci a určit její definiční obor',
      poles: 'Najít póly — nulové body jmenovatele, v nichž čitatel není nulový',
      removable_gaps: 'Rozpoznat odstranitelné nespojitosti, odstranit je zkrácením a uvést spojité rozšíření',
      asymptotes: 'Odvodit svislé a vodorovné asymptoty z předpisu funkce',
    },
    explanation: {
      intro: 'Racionální funkce je podíl dvou polynomů — čitatel $p(x)$ dělený jmenovatelem $q(x)$. Rozhodující bod: jmenovatel se nikdy nesmí nulovat, jinak funkce v tomto místě není definována.',
      domain: 'Definiční obor $D_f$ tvoří všechna reálná čísla kromě nulových bodů jmenovatele. Rozlož jmenovatel na součin nebo spočítej jeho nulové body — to jsou mezery v $D_f$.',
      amir_tip: 'Můj první reflex u každé racionální funkce: kde se jmenovatel nuluje? Tyto hodnoty $x$ si píšu nahoru na list. Teprve pak se pouštím do zbytku. Kdo to přeskočí, přehlédne póly — a v kódu pak program spadne.',
      poles: 'Pól máš tehdy, když se jmenovatel nuluje, ale čitatel ne. Tam hodnota funkce vystřelí do nekonečna (kladného nebo záporného) — graf má svislou asymptotu.',
      removable: 'Nuluje-li se na témže místě i čitatel, můžeš společný činitel zkrátit. Zůstane takzvaná „odstranitelná nespojitost": graf tam má jen díru, kterou bys mohl vyplnit rozumnou definicí.',
      asymptotes: 'Chování pro velká $|x|$ odečteš ze stupňů polynomů: je-li stupeň čitatele menší než stupeň jmenovatele, pak $f(x) \\to 0$ — osa x je vodorovnou asymptotou. Jsou-li stupně stejné, dává poměr nejvyšších koeficientů vodorovnou asymptotu.',
    },
    concepts: {
      definition: {
        title: 'Racionální funkce',
        desc: 'Podíl dvou polynomů $p(x)$ a $q(x)$. Definovaná všude, kde $q(x) \\neq 0$. Příklady: $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Pól',
        desc: 'Bod $x_0$ s $q(x_0) = 0$ a $p(x_0) \\neq 0$. Graf vystřelí k $\\pm\\infty$ — svislá asymptota v $x = x_0$. Sudý řád pólu ⇒ beze změny znaménka, lichý ⇒ se změnou znaménka.',
      },
      removable_gap: {
        title: 'Odstranitelná nespojitost',
        desc: 'Bod $x_0$ s $p(x_0) = q(x_0) = 0$. Zkrátit společný činitel, pak spočítat limitu — to je „spojité rozšíření". Graf tam má jen otevřenou díru.',
      },
      asymptote: {
        title: 'Vodorovná asymptota',
        desc: 'Limita pro $x \\to \\pm\\infty$. Při $\\deg p < \\deg q$ je to $y = 0$, při $\\deg p = \\deg q$ poměr vedoucích koeficientů. Při $\\deg p > \\deg q$ existuje místo toho šikmá nebo křivková asymptota.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Vyšetřit jednoduchý pól',
        context: 'Amir zkoumá nejjednodušší racionální funkci svého filtru: $f(x) = \\frac{1}{x-2}$. Kde není definovaná a jak se chová?',
        step1: 'Zapsat předpis funkce — čitatel $p(x) = 1$, jmenovatel $q(x) = x - 2$:',
        step2: 'Hledat nulový bod jmenovatele: $q(x) = 0$ dává kritické místo:',
        step3: 'Vyhodnotit tam čitatel: $p(2) = 1 \\neq 0$. Tedy žádná odstranitelná nespojitost, ale skutečný pól:',
        step4: 'Chování v nekonečnu: $\\frac{1}{x-2} \\to 0$ pro $x \\to \\pm\\infty$. Osa x je vodorovnou asymptotou:',
        amir_comment: 'Klasický případ: svislá asymptota v $x = 2$, vodorovná v $y = 0$. V kódu tedy musím $x = 2$ výslovně odchytit — jinak NaN. Přesně na to se ptala Yara.',
      },
      removable: {
        title: 'Najít odstranitelnou nespojitost zkrácením',
        context: 'Při testu Amir narazí na $f(x) = \\frac{x^2 - 1}{x - 1}$. Při $x = 1$ se jmenovatel nuluje — pád? Nebo přece ne?',
        step1: 'Zapsat předpis funkce — čitatel je rozdíl druhých mocnin:',
        step2: 'Při $x = 1$ se nulují čitatel I jmenovatel. To je indikátor odstranitelné nespojitosti:',
        step3: 'Rozložit čitatel $(x^2 - 1) = (x-1)(x+1)$, pak zkrátit společný činitel $(x-1)$:',
        step4: 'Graf je tedy přímka $y = x + 1$ — s dírou právě v $x = 1$, protože původní $f$ tam není definovaná:',
        amir_comment: 'Důležité: přes zkrácení nesmím $x = 1$ zahrnout do $D_f$. Původní funkce tam zůstává nedefinovaná. V kódu to řeším podmínkou if a vracím limitu $f(1) := 2$ — čisté spojité rozšíření.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Jednotkové náklady ve výrobě',
        desc: 'Fixní náklady $F$ rozdělené na $x$ vyrobených kusů plus variabilní náklady $v$ na kus: $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. Pro $x \\to \\infty$ se jednotkové náklady blíží k $v$ — vodorovná asymptota v praxi.',
      },
      light_intensity: {
        title: 'Svítivost a druhá mocnina vzdálenosti',
        desc: 'Lampa s výkonem $P$ vytváří ve vzdálenosti $r$ svítivost $I(r) = \\frac{P}{4\\pi r^2}$. Při $r \\to 0$ pól (teoreticky nekonečně jasno přímo u zdroje), při $r \\to \\infty$ je $I \\to 0$. Klasický přírodní zákon.',
      },
      dilution: {
        title: 'Koncentrace při ředění',
        desc: 'Šťáva o koncentraci $c_0$ a objemu $V_0$ se ředí objemem $V$ vody: $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Zde není žádný pól ($V_0 + V > 0$), ale pro $V \\to \\infty$ jde koncentrace k nule — vodorovná asymptota $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'Zaměňovat pól a nulový bod',
        correct: 'Nulový bod: čitatel je nula. Pól: jmenovatel je nula a čitatel není',
        why: 'U $f(x) = \\frac{x-3}{x+2}$ leží nulový bod v $x = 3$ (tam je $p(x) = 0$, tedy $f = 0$) a pól v $x = -2$ (tam je $q(x) = 0$). Kdo si role prohodí, nakreslí graf úplně špatně — díra a pól na nesprávných místech.',
        amir_warning: 'Moje pomůcka: nulový bod je tam, kde $f$ „vydá nulu". Pól je tam, kde $f$ „vybuchne". Obojí plyne přímo z čitatele, resp. jmenovatele — nikdy je nezaměňuj.',
      },
      dont_cancel: {
        wrong: 'Přehlédnout společný činitel a předpokládat pól',
        correct: 'Nejprve rozložit čitatel i jmenovatel na součin, pak zkrátit společné činitele',
        why: 'U $f(x) = \\frac{x^2-4}{x-2}$ se zdá, že $x = 2$ je pól. Rozložíme-li však čitatel, vyjde $\\frac{(x-2)(x+2)}{x-2} = x+2$ — tedy jen odstranitelná nespojitost. Kdo nerozkládá, tvrdí, že existuje pól, který vůbec neexistuje.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'Amir trénuje v DataPulse jednoduchý lineární model: tři příznaky (tempo, hlasitost, tanečnost), z nichž model odhaduje hodnocení posluchačů. Ze tří známých příkladů vyjdou tři rovnice o třech neznámých — vahách příznaků. „Ručně to nepůjde," říká Finn. Amir se usměje: „Půjde, s Gaussem." Soustavy lineárních rovnic, klasika, která se skrývá za každým ML kódem.',
      challenge: 'Amir musí ze tří trénovacích příkladů určit tři váhy $a$, $b$, $c$. Tři rovnice, tři neznámé — Gauss.',
      outro: 'Gaussovou metodou Amir systematicky převádí rozšířenou matici soustavy na stupňovitý tvar. Levá dolní oblast se krok za krokem stává nulami, pak odečítá řešení zpětně. „Přesně tohle dělá numpy.linalg.solve na pozadí," vysvětluje Finnovi — „jen teď konečně chápu proč."',
    },
    objectives: {
      solve_2x2: 'Řešit soustavy lineárních rovnic o dvou neznámých dosazovací, porovnávací nebo sčítací metodou',
      gauss_3x3: 'Systematicky převádět soustavy o třech neznámých na stupňovitý tvar Gaussovým algoritmem',
      solution_types: 'Rozlišovat tři typy řešení — jednoznačné, žádné, nekonečně mnoho',
      matrix_form: 'Zapsat soustavu v maticovém tvaru $A\\vec{x} = \\vec{b}$ a správně sestavit rozšířenou matici',
    },
    explanation: {
      intro: 'Soustava lineárních rovnic je soubor několika rovnic se stejnými neznámými. Řešením soustavy je sada hodnot, která splňuje VŠECHNY rovnice současně. Známé už z deváté třídy — typicky dvě rovnice, dvě neznámé:',
      methods: 'Pro soustavy 2×2 stačí klasické metody: dosazovací, porovnávací nebo sčítací. Při 3×3 a větších se to rychle stává nepřehledným — proto Gaussův algoritmus, který probíhá mechanicky a vždy stejně.',
      amir_tip: 'Můj postup pro 3×3: vypsat rozšířenou matici, a pak CÍLEVĚDOMĚ. Nejprve vynulovat levý sloupec pod pivotem, pak prostřední sloupec pod druhým pivotem. Stupňovitý tvar. Zpětné dosazení. Zní to mechanicky — ono to mechanické je, a právě v tom je výhoda.',
      gauss: 'V Gaussově metodě zapíšeš soustavu jako rozšířenou matici $(A | \\vec{b})$. Třemi řádkovými operacemi — vynásobit řádek číslem, sečíst nebo odečíst řádky, prohodit řádky — převedeš matici na stupňovitý tvar. Množinu řešení to nemění.',
      solution_types: 'Ze stupňovitého tvaru odečteš typ řešení přímo: žádný sporný nulový řádek dole ⇒ jednoznačné řešení. Řádek $0 = c$ s $c \\neq 0$ ⇒ žádné řešení. Řádek $0 = 0$ ⇒ zavést parametr, nekonečně mnoho řešení.',
    },
    concepts: {
      lgs: {
        title: 'Soustava lineárních rovnic',
        desc: 'Soubor lineárních rovnic se společnými neznámými. V maticovém tvaru: $A \\vec{x} = \\vec{b}$, kde $A$ je matice koeficientů a $\\vec{b}$ vektor pravých stran.',
      },
      gauss: {
        title: 'Gaussův algoritmus',
        desc: 'Standardní metoda řešení. Převést rozšířenou matici na stupňovitý tvar, pak řešit zpětně. Tři povolené operace, které nemění množinu řešení: vynásobit řádek skalárem, přičíst násobek řádku, prohodit dva řádky.',
      },
      solution_types: {
        title: 'Tři typy řešení',
        desc: 'Jednoznačné řešení (tolik pivotů, kolik je neznámých), žádné řešení (sporný řádek $0 = c$), nekonečně mnoho řešení (alespoň jeden řádek $0=0$, se zavedenými volnými parametry).',
      },
      matrix: {
        title: 'Rozšířená matice soustavy',
        desc: 'Zápis $(A | \\vec{b})$. Vlevo koeficienty neznámých, vpravo (oddělená čarou) pravá strana. Ušetří neustálé přepisování názvů proměnných.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'Jednoduchá soustava 2×2 sčítací metodou',
        context: 'Amir má dvě vzorové rovnice z trénovacích dat. Hledá $x$ (váhu pro tempo) a $y$ (váhu pro hlasitost).',
        step1: 'Zapsat soustavu rovnic:',
        step2: 'Sečíst obě rovnice — členy s $y$ se vyruší a $x$ je ihned vyřešeno:',
        step3: 'Dosadit $x = 3$ do jedné z výchozích rovnic, zde do druhé:',
        step4: 'Množina řešení — uvést jako dvojici $(x, y)$:',
        amir_comment: 'Klasická sčítací metoda: když má člověk štěstí, proměnné vypadnou hned. Pokud ne, musím jednu rovnici nejprve vynásobit vhodným číslem — např. dvěma, aby si koeficienty odpovídaly.',
      },
      gauss_3x3: {
        title: 'Vyřešit soustavu 3×3 Gaussem',
        context: 'Amir má malou trénovací sadu: tři hodnocení posluchačů a tři váhy $x, y, z$. Tři rovnice — Gaussova metoda v rozšířené matici.',
        step1: 'Sestavit rozšířenou matici — koeficienty vlevo, pravé strany vpravo od čáry:',
        step2: 'Řádek 2 minus dvakrát řádek 1 — prvek $a_{21} = 2$ se vynuluje:',
        step3: 'Řádek 3 minus řádek 1 — prvek $a_{31} = 1$ se vynuluje. Levý sloupec je teď čistý pod pivotem 1:',
        step4: 'Pokračovat až ke stupňovitému tvaru, pak řešit zpětně: $z$ z posledního řádku, dosadit výše pro $y$, pak $x$. Řešení: $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$:',
        amir_comment: 'Gauss je účetnictví: každou řádkovou operaci pečlivě zaznamenat. Kdo provede operaci jen z poloviny — např. upraví jen pivotní sloupec — dostane nesmysl. Disciplína tu poráží genialitu.',
      },
    },
    realworld: {
      mischung: {
        title: 'Úlohy o směsích',
        desc: 'Lékárník míchá dva roztoky o koncentracích $a$ a $b$ do směsi o celkové hmotnosti $m$ a celkovém množství účinné látky $w$. Dvě rovnice, dvě neznámé — rovnou soustava.',
      },
      preise: {
        title: 'Rekonstrukce cen',
        desc: 'Tři zákazníci, tři účtenky s množstvími a celkovou cenou — z toho je třeba dopočítat jednotkové ceny. Tři rovnice, tři neznámé jednotkové ceny. Gauss to vyřeší v několika krocích.',
      },
      network: {
        title: 'Elektrické obvody (Kirchhoff)',
        desc: 'V síti odporů dává každá uzlová rovnice (proud dovnitř = proud ven) a každá smyčková rovnice (součet napětí = 0) jednu lineární podmínku. Při $n$ neznámých vzniká soustava $n \\times n$ — standardní postup v elektrotechnice.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Při řádkové operaci upravovat jen pivotní sloupec',
        correct: 'Upravit každý sloupec řádku (včetně pravé strany) — všechny současně',
        why: 'Řádková operace platí pro CELÝ řádek. Kdo při $Z_2 - 2Z_1$ upraví jen pivotní prvek a zapomene na ostatní sloupce, zničí rovnici. Důsledek: stupňovitý tvar vypadá správně, ale řešení jsou chybná — a chybu je pak těžké najít.',
        amir_warning: 'Právě tahle chyba mě u cvičné písemky stála celý bod. Od té doby píšu celý nový řádek — všechny prvky včetně pravé strany — pečlivě pod ten starý. Dá se to porovnat jedním pohledem.',
      },
      no_solution: {
        wrong: 'Vykládat sporný řádek $0 = c$ jako $x = c$',
        correct: 'Řádek $0 = c$ s $c \\neq 0$ znamená: soustava NEMÁ řešení',
        why: 'Vyjde-li nakonec $0 = 5$, je to spor — žádná hodnota $x, y, z$ ho nemůže splnit. Množina řešení je prázdná. Kdo to čte jako $x = 5$, udává řešení, které soustava nesplňuje.',
      },
    },
  },
};
