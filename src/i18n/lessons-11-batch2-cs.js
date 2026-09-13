export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Amirův algoritmus doporučování hudby má problém: Popularita nových písniček zpočátku raketově roste — ale jak rychle přesně? A kdy hype odeznívá? "Potřebuji funkci, která popisuje extrémně rychlý růst a přitom zůstává vypočitatelná", říká Amir Yaře. Odpověď: exponenciální funkce s Eulerovým číslem $e$ — a její protějšek, přirozený logaritmus.',
      challenge: 'Amir musí modelovat křivku růstu streamů písniček a předpovědět, kdy track dosáhne svého peaku — k tomu potřebuje exponenciální rovnice a logaritmy.',
      outro: 'S $e$-funkcí a $\\ln$ dokáže Amir teď vypočítat, kdy písnička dosáhne vrcholu a jak rychle poté zájem klesá. "Super je, že přirozený logaritmus dělá každou exponenciální rovnici řešitelnou", vysvětluje Finnovi. DataPulse teď předpovídá trendy písniček s překvapivou přesností.',
    },
    objectives: {
      e_function: 'Chápat a používat $e$-funkci jako přirozenou růstovou funkci',
      natural_log: 'Ovládat přirozený logaritmus jako inverzní funkci k $e^x$',
      log_rules: 'Bezpečně používat pravidla logaritmů (pravidlo součinu, podílu a mocniny)',
      solve_exp_equations: 'Řešit exponenciální rovnice logaritmováním',
    },
    explanation: {
      intro: 'Eulerovo číslo $e \\approx 2{,}718$ je nejdůležitější konstanta pro růstové procesy. Proč zrovna $e$? Protože funkce $f(x) = e^x$ má unikátní vlastnost: Její derivace je ona sama — $f\'(x) = e^x$. To znamená: Rychlost růstu je vždy úměrná aktuální hodnotě. Perfektní pro přirozený růst!',
      natural_log: 'Přirozený logaritmus $\\ln(x)$ je inverzní funkce k $e^x$. Pokud chceš vědět, jaký exponent potřebuješ k dosažení určité hodnoty — pak je $\\ln$ tvůj nástroj. Obě funkce se navzájem ruší:',
      amir_tip: 'V mém ML kódu se $\\ln$ vyskytuje všude — ve ztrátové funkci, při normalizaci, ve vzorci softmax. Důvod: $\\ln$ promění násobení na sčítání a dělá obrovská čísla zvládnutelnými. Proto často počítáme s "log-likelihood" místo přímo s pravděpodobnostmi!',
      log_rules: 'Tři pravidla logaritmů jsou extrémně užitečná — přeměňují složité výrazy na jednodušší. Základní myšlenka: Logaritmy přeměňují násobení na sčítání, dělení na odčítání a mocnění na násobení:',
      solving: 'Abys vyřešil exponenciální rovnici pro $x$, aplikuješ $\\ln$ na obě strany. Logaritmus "stáhne exponent dolů" — to je klíčový krok:',
    },
    concepts: {
      e_function: { title: '$e$-funkce', desc: 'Obecný tvar $f(x) = a \\cdot e^{kx}$: $a$ je počáteční hodnota, $k$ určuje rychlost růstu. Při $k > 0$ funkce roste, při $k < 0$ klesá (exponenciální rozpad). $e$-funkce je svou vlastní derivací — proto dokonale modeluje přirozený růst.' },
      natural_log: { title: 'Přirozený logaritmus', desc: 'Inverzní funkce k $e^x$: $\\ln(x)$ odpovídá na otázku "Jaká mocnina $e$ dává $x$?". Definován jen pro $x > 0$. Důležité: $\\ln(1) = 0$ a $\\ln(e) = 1$.' },
      log_rules: { title: 'Pravidla logaritmů', desc: 'Tři pravidla, která vše zjednodušují: Pravidlo součinu ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), pravidlo podílu ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) a pravidlo mocniny ($\\ln(a^r) = r \\cdot \\ln(a)$). Pravidlo mocniny je klíč k řešení exponenciálních rovnic.' },
    },
    examples: {
      solve_exp: {
        title: 'Řešení exponenciální rovnice', context: 'Amir chce vypočítat, po kolika dnech má písnička 5krát více streamů než na začátku. Model růstu: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Sestavíme rovnici — kdy streamy dosáhnou hodnoty 15?', step2: 'Vydělíme 3, abychom izolovali $e^{2x}$:', step3: 'Aplikujeme $\\ln$ na obě strany — exponent "sjede dolů":', step4: 'Vyřešíme pro $x$ — vydělíme koeficientem 2:',
        amir_comment: 'To je vzor, který neustále potřebuji: Izolovat, logaritmovat, vyřešit. Funguje u každé exponenciální rovnice!',
      },
      half_life: {
        title: 'Výpočet poločasu rozpadu', context: 'Po peaku virální písnička denně ztrácí posluchače. Amir modeluje pokles jako $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Model: 1000 aktivních posluchačů v čase $t = 0$, exponenciální pokles:', step2: 'Poločas rozpadu znamená: Kdy zbývá 500 posluchačů?', step3: 'Izolujeme a logaritmujeme — $\\ln$ na obě strany:', step4: 'Vyřešíme pro $t$ — po přibližně 6,93 dnech se počet posluchačů sníží na polovinu:',
        amir_comment: 'Poločas rozpadu je konstantní! Ať už je 1000, 500 nebo 250 posluchačů — vždy trvá přibližně 6,93 dne do dalšího polovičení. To je kouzlo exponenciálního rozpadu.',
      },
    },
    realworld: {
      user_retention: { title: 'Retence uživatelů aplikací', desc: 'Kolik uživatelů zůstane po týdnu aktivních? U většiny aplikací retence padá exponenciálně: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse používá tento model k předpovědi, kolik uživatelů zůstane po 30 dnech — a kdy cíleně odeslat push notifikace.' },
      compound_interest: { title: 'Spojité úročení', desc: 'Banky počítají s ročním úročením, ale teoreticky existuje i spojité: $K(t) = K_0 \\cdot e^{rt}$. Čím častěji počítáš úroky (denně, hodinově, sekundově...), tím blíže se dostaneš k $e^{rt}$. To je limitní hodnota!' },
      decibel: { title: 'Decibelová stupnice', desc: 'Hlasitost se měří logaritmicky: $L = 10 \\cdot \\log_{10}(I/I_0)$. Zdvojnásobení intenzity zvuku zvýší hladinu jen o přibližně $3\\,\\text{dB}$. Proto 10 kytar nezní 10krát hlasitěji než jedna — náš sluch pracuje logaritmicky!' },
    },
    mistakes: {
      ln_sum: { wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — rozdělení součtu', correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — jen součiny se dají rozdělit', why: 'Pravidlo součinu platí JEN pro násobení, ne pro sčítání! Neexistuje jednoduchý vzorec pro $\\ln(a + b)$. To je jedna z nejčastějších chyb vůbec.', amir_warning: 'Tento bug mě stál dvě hodiny ladění. Můj výpočet likelihood byl úplně špatně, protože jsem použil $\\ln(p_1 + p_2)$ místo $\\ln(p_1 \\cdot p_2)$. Logaritmy rozdělují součiny — ne součty!' },
      ln_cancel: { wrong: '$\\ln(e^x) = e \\cdot x$ — chybné vyřešení logaritmu', correct: '$\\ln(e^x) = x$ — logaritmus ruší exponenciální funkci', why: '$\\ln$ a $e^x$ jsou inverzní funkce — navzájem se ruší. Výsledek je prostě exponent $x$, bez faktoru $e$ před ním.' },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse spustil novou funkci a Amir chce vědět: Jaká je pravděpodobnost, že z 200 testovacích uživatelů alespoň 15 klikne na nový button? Každý uživatel klikne nebo neklikne — klasický pokus ano/ne opakovaný $n$-krát. "To už není náhoda, to je binomické rozdělení", říká prof. Nguyen na semináři.',
      challenge: 'Amir potřebuje pravděpodobnost určitého počtu kliků při $n$ nezávislých pokusech — binomické rozdělení dává přesnou odpověď.',
      outro: 'Amir má teď statistický rámec pro A/B testy. Může vypočítat, zda je výsledek statisticky významný, nebo vznikl čistě náhodou. "Binomické rozdělení je základem téměř každého statistického testu v praxi", vysvětluje Yaře. DataPulse teď dělá rozhodnutí na základě dat, ne pocitů.',
    },
    objectives: {
      bernoulli: 'Rozpoznávat Bernoulliho pokusy a určovat pravděpodobnost úspěchu $p$',
      binomial_formula: 'Používat binomický vzorec k výpočtu $P(X = k)$',
      expected_value: 'Počítat a interpretovat střední hodnotu $E(X) = n \\cdot p$',
      standard_deviation: 'Určovat směrodatnou odchylku $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ a používat ji jako míru rozptylu',
    },
    explanation: {
      intro: 'Představ si, že opakuješ pokus $n$-krát a pokaždé jsou jen dva výsledky: Úspěch (pravděpodobnost $p$) nebo neúspěch (pravděpodobnost $1-p$). Binomické rozdělení ti říká, jak pravděpodobné je přesně $k$ úspěchů při $n$ pokusech:',
      bernoulli: 'Základem je Bernoulliho pokus — jeden pokus s přesně dvěma výsledky. Tři podmínky musí platit: (1) jen dva výsledky, (2) pravděpodobnost $p$ zůstává při každém pokusu stejná, (3) pokusy jsou na sobě nezávislé. Binomický koeficient počítá možná uspořádání:',
      amir_tip: 'Binomický koeficient $\\binom{n}{k}$ počítá, kolika způsoby můžeš rozložit $k$ úspěchů na $n$ pokusů. V mém kódu je to scipy.special.comb(n, k). Pro velká $n$ počítám raději kumulativní rozdělení — sčítání jednotlivých pravděpodobností by bylo příliš pomalé!',
      expected_value: 'Střední hodnota $E(X) = n \\cdot p$ ti říká, kolik úspěchů "průměrně" očekávat. Při 100 pokusech s $p = 0{,}15$ očekáváš $E(X) = 15$ úspěchů. Ale to neznamená, že to bude pokaždé přesně 15! Jak moc výsledky kolísají, měří směrodatná odchylka:',
      standard_deviation: 'Směrodatná odchylka $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ ukazuje typický rozptyl kolem střední hodnoty. Pravidla: Přibližně 68% výsledků leží v $E(X) \\pm \\sigma$, přibližně 95% v $E(X) \\pm 2\\sigma$. Čím větší $n$, tím užší se stává rozdělení vzhledem ke střední hodnotě.',
    },
    concepts: {
      bernoulli: { title: 'Bernoulliho pokus', desc: 'Náhodný pokus s přesně dvěma výsledky: Úspěch (pravděpodobnost $p$) nebo neúspěch ($1-p$). Příklady: Hod mincí, klik/neklik, gól/negól. Binomické rozdělení vzniká $n$-násobným nezávislým opakováním.' },
      binomial_formula: { title: 'Binomický vzorec', desc: 'Vzorec $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ se skládá ze tří částí: $\\binom{n}{k}$ počítá uspořádání, $p^k$ je pravděpodobnost $k$ úspěchů, $(1-p)^{n-k}$ pro $n-k$ neúspěchů.' },
      expected_value: { title: 'Střední hodnota a směrodatná odchylka', desc: 'Střední hodnota $E(X) = n \\cdot p$ je průměr při mnoha opakováních. Směrodatná odchylka $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ měří typickou odchylku od ní. Společně popisují polohu a rozptyl rozdělení.' },
    },
    examples: {
      coin_flips: { title: 'Hod mincí: přesně 7 z 10 hlav', context: 'Amir testuje svůj generátor náhodných čísel: Při 10 hodech spravedlivou mincí — jak pravděpodobné je přesně 7krát hlava?', step1: 'Parametry: $n = 10$ hodů, $p = 0{,}5$ (spravedlivá mince), hledáme: $k = 7$ hlav.', step2: 'Binomický koeficient — kolika způsoby lze rozložit 7 hlav na 10 hodů?', step3: 'Dosadíme do binomického vzorce: Uspořádání $\\times$ úspěchy $\\times$ neúspěchy:', step4: 'Vypočteme — pravděpodobnost je přibližně 11,7%, tedy spíše nepravděpodobné:', amir_comment: 'Jen 11,7% — to ukazuje: I u spravedlivé mince 7 z 10 hlav není obzvlášť překvapivé, ale ani běžné. Můj generátor náhodných čísel se zdá v pořádku!' },
      quality_control: { title: 'Kontrola kvality ve výrobě', context: 'Továrna má chybovost 2%. Amir počítá: Jak pravděpodobné je, že ve vzorku 20 kusů ani jeden není vadný?', step1: 'Parametry: $n = 20$ kusů, chybovost $p = 0{,}02$, hledáme: $k = 0$ vadných.', step2: 'Dosadíme: $\\binom{20}{0} = 1$ a $0{,}02^0 = 1$ — zůstávají jen neúspěchy:', step3: 'Zjednodušíme — zbývá $0{,}98^{20}$:', step4: 'Výsledek: S pravděpodobností přibližně 66,8% není žádný kus vadný — vůbec ne tak jisté!', amir_comment: 'Jen dvě třetiny šance na nula chyb při 2% chybovosti! To ukazuje: I malé pravděpodobnosti se při mnoha pokusech sčítají. Při $n = 100$ by $P(X = 0) \\approx 13{,}3\\%$ — tam skoro jistě najdeš chybu.' },
    },
    realworld: {
      ab_testing: { title: 'A/B testování u DataPulse', desc: 'Amir testuje dvě verze aplikace: Verze A má míru prokliku 12%, verze B 15%. Pomocí binomického rozdělení vypočítá, zda je rozdíl statisticky významný — nebo mohl vzniknout náhodou. To je základ každého A/B testu.' },
      medicine: { title: 'Lékařské studie', desc: 'U testů léků se počítá: Kolik pacientů se uzdravilo? Je míra uzdravení významně lepší než u placeba? Binomické rozdělení dává odpověď — a chrání před unáhlenými závěry u příliš malých vzorků.' },
      surveys: { title: 'Průzkumy a tolerance chyb', desc: 'Pokud v průzkumu 52% hlasuje "ano" — je to opravdu většina? Směrodatná odchylka $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ ukazuje, jak široký je interval spolehlivosti. Při $n = 100$ by $\\sigma \\approx 5\\%$ — výsledek může být tedy i 47% nebo 57%.' },
    },
    mistakes: {
      forget_binomial_coeff: { wrong: 'Zapomenutí binomického koeficientu: $P(X=k) = p^k \\cdot (1-p)^{n-k}$', correct: 'Úplný vzorec s $\\binom{n}{k}$', why: 'Bez $\\binom{n}{k}$ vzorec počítá jen JEDNO konkrétní pořadí — např. nejdřív $k$ úspěchů, pak $n-k$ neúspěchů. Ale úspěchy se mohou vyskytnout na různých místech! Binomický koeficient počítá všechna možná uspořádání.', amir_warning: 'Představ si, že hodíš 3krát kostkou a chceš přesně 2 šestky. Jsou 3 možnosti: 6-6-X, 6-X-6, X-6-6. Binomický koeficient $\\binom{3}{2} = 3$ počítá přesně to. Bez něj dostaneš jen třetinu správné pravděpodobnosti!' },
      variance_vs_sigma: { wrong: 'Záměna rozptylu a směrodatné odchylky', correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — nezapomeň odmocninu!', why: 'Rozptyl je $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, směrodatná odchylka je $\\sigma = \\sqrt{\\text{Var}(X)}$. Bez odmocniny má výsledek špatnou jednotku a je příliš velký. $\\sigma$ má stejnou jednotku jako $X$ — rozptyl ji má na druhou.' },
    },
  },

  '11-bedingte-wahrscheinlichkeit': {
    story: {
      intro: 'DataPulse doporučuje písně na základě dosavadního poslechového chování. Ale Amir si všimne: Ne každá korelace je stejně silná. Kdo poslouchá rock, možná má rád i metal — ale platí to i naopak? "Pravděpodobnost, že někdo má rád rock, KDYŽ poslouchá metal, není totéž co naopak", vysvětluje prof. Nguyen. Vítej u podmíněné pravděpodobnosti.',
      challenge: 'Amir musí vylepšit logiku doporučování: Jak pravděpodobné je, že uživatel má rád žánr $A$, POKUD poslouchá žánr $B$? A jak otočit tento směr?',
      outro: 'S Bayesovou větou může Amir teď otočit směr doporučení: Z "Kdo poslouchá metal, poslouchá v 60% i rock" se stane "Kdo poslouchá rock, poslouchá v 35% i metal". "Bayes je jako reverzní inženýrství pro pravděpodobnosti", usmívá se. DataPulse teď dodává výrazně přesnější doporučení.',
    },
    objectives: {
      conditional_prob: 'Počítat a interpretovat podmíněné pravděpodobnosti',
      bayes_theorem: 'Používat Bayesovu větu k otočení směru podmíněné pravděpodobnosti',
      independence: 'Ověřovat stochastickou nezávislost a odlišovat ji od závislosti',
      tree_diagrams: 'Používat stromové diagramy a čtyřpolní tabulky jako pomocné nástroje',
    },
    explanation: {
      intro: 'Podmíněná pravděpodobnost $P(A \\mid B)$ odpovídá na otázku: "Jak pravděpodobné je $A$, pokud už víme, že nastalo $B$?" Znalost $B$ mění pravděpodobnost — výběrový prostor se zmenšuje na případy, kde $B$ platí:',
      multiplication_rule: 'Pravidlo násobení plyne přímo z definice: Pokud chceš vypočítat pravděpodobnost "$A$ a $B$ zároveň", násobíš $P(B)$ podmíněnou pravděpodobností $P(A \\mid B)$:',
      amir_tip: 'V mém doporučovacím kódu neustále používám podmíněné pravděpodobnosti: $P(\\text{like}_Y \\mid \\text{like}_X)$ — pravděpodobnost, že uživatel má rád písničku $Y$, pokud dal like písničce $X$. To je srdce každého kolaborativního filtru!',
      bayes: 'Bayesova věta je kouzlo: Otáčí směr. Pokud znáš $P(B \\mid A)$, ale potřebuješ $P(A \\mid B)$, Bayes dává řešení. Vzorec vypadá složitě, ale jádro je jednoduché: Vážíš bazickou pravděpodobností (prior):',
      total_probability: 'Pro jmenovatel v Bayesově větě často potřebuješ úplnou pravděpodobnost. Rozkládá $P(B)$ na všechny možné cesty, jak může $B$ nastat — přes $A$ nebo přes $\\bar{A}$ (ne-$A$):',
      independence: 'Dva jevy jsou stochasticky nezávislé, pokud znalost jednoho nemění pravděpodobnost druhého. Formálně: $P(A \\mid B) = P(A)$ — nastání $B$ nemá vliv na $A$. Ekvivalentně:',
    },
    concepts: {
      conditional_prob: { title: 'Podmíněná pravděpodobnost', desc: '$P(A \\mid B)$ je pravděpodobnost $A$ za podmínky $B$. "Přiblížíme" část pravděpodobnostního prostoru, kde platí $B$, a ptáme se na $A$. Důležité: $P(A \\mid B) \\neq P(B \\mid A)$ — na směru záleží!' },
      bayes: { title: 'Bayesova věta', desc: 'Vzorec pro otočení směru: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ je prior (předchozí znalost), $P(A \\mid B)$ je posterior (aktualizovaný odhad po pozorování $B$). Bayesovská statistika je základem spamových filtrů a diagnostických systémů.' },
      independence: { title: 'Stochastická nezávislost', desc: '$A$ a $B$ jsou nezávislé, pokud $P(A \\cap B) = P(A) \\cdot P(B)$. To znamená: Nastání $B$ nic nemění na pravděpodobnosti $A$. Pozor: Nezávislost NENÍ totéž co "žádný průnik" (disjunktnost)!' },
    },
    examples: {
      medical_test: { title: 'Lékařský test — klam bazické míry', context: 'Test na nemoc odhalí 99% nemocných, ale zareaguje i u 5% zdravých. Nemoc postihuje 1% populace. Pokud je test pozitivní — jak pravděpodobné je, že jsi opravdu nemocný?', step1: 'Data: $P(K) = 0{,}01$ (nemoc), $P(+ \\mid K) = 0{,}99$ (senzitivita), $P(+ \\mid \\bar{K}) = 0{,}05$ (false positive rate).', step2: 'Úplná pravděpodobnost pozitivního výsledku — obě cesty (nemocný + zdravý):', step3: 'Bayesova věta — hledáme $P(K \\mid +)$:', step4: 'Výsledek: Jen 16,7% pravděpodobnost, že jsi opravdu nemocný — přestože test odhalí 99% nemocných!', amir_comment: 'To je klam bazické míry! Test je super přesný, ale protože nemoc je tak vzácná ($P(K) = 1\\%$), většina pozitivních testů jsou false positives. V ML světě to znamená: Precision a recall nejsou totéž!' },
      spam_filter: { title: 'Spamový filtr s Bayesem', context: 'Amirův e-mailový filtr se má učit: Pokud mail obsahuje slovo "vyhrál" — je to spam?', step1: 'Data: 30% všech mailů je spam, 80% spamových mailů obsahuje "vyhrál", ale i 10% normálních mailů:', step2: 'Úplná pravděpodobnost, že mail obsahuje "vyhrál":', step3: 'Bayes: Jak pravděpodobný je spam, pokud se vyskytuje "vyhrál"?', step4: 'Výsledek: 77,4% — mail se slovem "vyhrál" je s vysokou pravděpodobností spam:', amir_comment: 'Přesně tak funguje Naive Bayes klasifikátor! Čím více slov přidáš, tím přesnější je filtr. DataPulse používá stejný princip: Místo slov analyzujeme poslechové vzorce, místo spam/nespam klasifikujeme žánrové preference.' },
    },
    realworld: {
      recommendation: { title: 'Hudební doporučení u DataPulse', desc: 'Kolaborativní filtrování je založeno na podmíněných pravděpodobnostech: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "Kdo má rád písničku X, s jakou pravděpodobností má rád i písničku Y?" Spotify, Netflix a DataPulse počítají miliony takových podmíněných pravděpodobností v reálném čase.' },
      weather: { title: 'Předpověď počasí', desc: 'Meteorologové neustále aktualizují předpověď pomocí Bayese: $P(\\text{Déšť} \\mid \\text{Mraky, Tlak, Vítr})$. Každé nové měření zpřesní prognózu. Proto se pravděpodobnost deště v průběhu dne mění — to je Bayes v akci!' },
      fraud_detection: { title: 'Detekce podvodů', desc: 'Amirův platební systém rozpoznává podezřelé transakce pomocí Bayese: Pokud se spustí alarm — jak pravděpodobný je skutečný podvod? Přesně jako u lékařského testu: Bazická míra rozhoduje! Při míře podvodů 0,1% je většina alarmů falešných.' },
    },
    mistakes: {
      confuse_direction: { wrong: '$P(A \\mid B) = P(B \\mid A)$ — záměna směru', correct: 'Otočit směr jde jen s Bayesem!', why: '$P(A \\mid B)$ a $P(B \\mid A)$ jsou úplně různé hodnoty. Příklad: $P(\\text{mokrý} \\mid \\text{déšť}) = 0{,}99$, ale $P(\\text{déšť} \\mid \\text{mokrý}) \\ll 0{,}99$ — člověk může být mokrý i od postřikovače. K otočení směru potřebuješ Bayesovu větu.', amir_warning: 'Tuto chybu vidím v code reviews neustále! Někdo vypočítá $P(\\text{klik} \\mid \\text{koupil})$ a použije to jako $P(\\text{koupil} \\mid \\text{klik})$. To může úplně zničit doporučovací algoritmus. Bayes je povinnost!' },
      ignore_base_rate: { wrong: 'Ignorování bazické míry (Base Rate Fallacy)', correct: 'Vždy zohledni $P(A)$ — apriorní pravděpodobnost', why: 'Test, který odhalí 99% nemocných, zní působivě, ale pokud nemoc postihuje jen 1%, je $P(K \\mid +) \\approx 16{,}7\\%$. Nízká bazická míra $P(K) = 0{,}01$ dominuje výsledku. Bez prioru získáš úplně zkreslený odhad.' },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn staví backend pro novou funkci DataPulse: Hledání podobných písniček. Ale jak měřit "podobnost" mezi písničkami, když je každá popsána desítkami vlastností — tempo, energie, nálada, instrumentace? "Představ si každou písničku jako bod v prostoru", říká Amir. "Čím blíž dva body leží, tím podobnější písně." Vítej ve světě vektorů.',
      challenge: 'Amir musí reprezentovat vlastnosti písní jako vektory a vypočítat jejich podobnost — pomocí skalárního součinu a úhlu mezi vektory.',
      outro: 'Doporučovací engine DataPulse teď používá Cosine Similarity: Čím menší úhel mezi dvěma vektory písní, tím podobnější písně. "V ML světě jsou vektory všude — Word Embeddings, Feature Spaces, neuronové sítě. Vše je lineární algebra", říká nadšeně Amir Yaře.',
    },
    objectives: {
      vectors_2d_3d: 'Zapisovat vektory v $\\mathbb{R}^2$ a $\\mathbb{R}^3$ jako sloupce a interpretovat je geometricky',
      vector_operations: 'Ovládat sčítání vektorů a násobení skalárem',
      scalar_product: 'Počítat skalární součin a interpretovat ho geometricky',
      angle_between_vectors: 'Určovat úhel mezi dvěma vektory pomocí kosinového vzorce',
    },
    explanation: {
      intro: 'Vektor popisuje posun v prostoru — nebo obecněji: uspořádaný seznam čísel. V $\\mathbb{R}^3$ má vektor tři složky, které zapíšeš jako sloupec. V datové analýze mohou mít vektory 50 nebo 500 dimenzí — princip zůstává stejný:',
      addition: 'Vektory sčítáš po složkách — každý řádek zvlášť. Geometricky přikládáš druhý vektor na konec prvního (metoda špička-k-patě). Výsledkem je přímá cesta od startu k cíli:',
      amir_tip: 'V mém Python kódu jsou vektory prostě numpy pole. Sčítání $\\vec{a} + \\vec{b}$ se automaticky provádí po prvcích — np.array([3,4]) + np.array([-1,2]) dává np.array([2,6]). Přesně to samé jako v matematice!',
      scalar_product: 'Skalární součin (také: vnitřní součin) dvou vektorů dává jediné číslo — žádný vektor! Násobíš složky po párech a vše sečteš. Výsledek ti řekne, jak moc vektory "míří stejným směrem":',
      length: 'Délka (velikost) vektoru se počítá Pythagorovou větou — rozšířenou na tři dimenze. Ve 2D je to známý $\\sqrt{x^2 + y^2}$, ve 3D přibude $z^2$:',
      angle: 'Nejdůležitější aplikace skalárního součinu: Úhel mezi dvěma vektory. Vzorec spojuje algebraický skalární součin s geometrickou interpretací. Tento úhel je v ML světě jako "Cosine Similarity" standardní mírou podobnosti:',
    },
    concepts: {
      vector: { title: 'Vektor', desc: 'Uspořádaný seznam čísel zapsaný jako sloupec. V $\\mathbb{R}^2$ má vektor 2 složky, v $\\mathbb{R}^3$ tři. Geometricky je to šipka se směrem a délkou. V datové analýze reprezentuje vektor objekt s jeho vlastnostmi — např. písničku s tempem, energií a náladou.' },
      scalar_product: { title: 'Skalární součin', desc: 'Dva vektory dovnitř, jedno číslo ven: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometricky: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Pokud je skalární součin nula, vektory na sebe stojí kolmo (ortogonální).' },
      vector_length: { title: 'Velikost vektoru', desc: 'Délka $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — zobecněný Pythagoras. Vektor s velikostí 1 se nazývá jednotkový vektor. V ML světě se vektory často normalizují na délku 1, aby se porovnávaly jen směry.' },
    },
    examples: {
      force_addition: { title: 'Sčítání sil jako vektorů', context: 'Dvě síly působí na objekt — Amir počítá výslednou celkovou sílu.', step1: 'Dvě síly dané jako 2D vektory:', step2: 'Sčítáme po složkách — každý řádek zvlášť:', step3: 'Počítáme velikost celkové síly (Pythagoras):', step4: 'Vypočteme — celková síla je přibližně $6{,}32\\,\\text{N}$:', amir_comment: 'Stejný princip používáme u DataPulse: Místo sil sčítáme feature vektory. Pokud uživatel má rád dva žánry, kombinovaný vkusový vektor je součet — tím najdeme písně, které pasují k oběma žánrům!' },
      angle_vectors: { title: 'Úhel mezi vektory písní', context: 'Amir porovnává dvě písně: Píseň A má feature vektor $(1, 2, 3)$ a píseň B $(4, -1, 2)$. Jak moc si jsou podobné?', step1: 'Feature vektory obou písní:', step2: 'Počítáme skalární součin — složky po párech vynásobené a sečtené:', step3: 'Počítáme velikosti obou vektorů:', step4: 'Aplikujeme kosinový vzorec — úhel je přibližně $62{,}2°$:', amir_comment: 'Úhel $62{,}2°$ znamená: Písně jsou částečně podobné, ale ne extrémně. Při $0°$ by byly identické (stejné proporce), při $90°$ úplně odlišné. V mém kódu: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))' },
    },
    realworld: {
      embeddings: { title: 'Word Embeddings a Song Embeddings', desc: 'V ML světě jsou slova, písně a obrázky reprezentovány jako vysokodimenzionální vektory (Embeddings). Cosine Similarity $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ měří jejich podobnost. Slavný příklad: "Král" $-$ "Muž" $+$ "Žena" $\\approx$ "Královna" — vektorová aritmetika s významy slov!' },
      navigation: { title: 'Navigace a robotika', desc: 'Navigační systémy a roboti používají vektory pro pozici a pohyb. Polohový vektor říká "Kde jsem?", rychlostní vektor "Kam a jak rychle?". Sčítání vektorů počítá novou pozici po pohybu.' },
      game_physics: { title: 'Herní fyzika a simulace', desc: 'Ve hrách jako Fortnite nebo Minecraft se fyzika počítá vektory: $\\vec{v}_{\\text{nový}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Rychlost, zrychlení a gravitace — vše vektory! Bez vektorového počtu by žádný míč neletěl správně.' },
    },
    mistakes: {
      scalar_vs_cross: { wrong: 'Skalární součin dává vektor', correct: 'Skalární součin dává ČÍSLO ($\\in \\mathbb{R}$)', why: 'U skalárního součinu násobíš složky po párech a SČÍTÁŠ — výsledek je jediné číslo, žádný vektor. Nepleť si ho s vektorovým součinem (ten opravdu dává vektor, ale přijde až později).', amir_warning: 'V numpy: np.dot(a, b) vrací číslo, np.cross(a, b) vrací vektor. Pokud tvůj similarity score je najednou pole místo čísla, použil jsi špatný součin!' },
      length_sum: { wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — prosté sečtení složek', correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — Pythagoras!', why: 'Délka vektoru je eukleidovská vzdálenost od počátku — a ta plyne z Pythagorovy věty. Prosté sčítání složek by byla manhattanská vzdálenost (také užitečná, ale něco jiného!).' },
    },
  },
};
