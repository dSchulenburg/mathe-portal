export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Amiruv algoritmus doporucovani hudby ma problem: Popularita novych pisnicek zpocatku raketove roste — ale jak rychle presne? A kdy hype odezniva? "Potrebuji funkci, ktera popisuje extremne rychly rust a pritom zustava vypocitatelna", rika Amir Yare. Odpoved: exponencialni funkce s Eulerovou cislicou $e$ — a jeji protejsek, prirozeny logaritmus.',
      challenge: 'Amir musi modelovat krivku rustu streamu pisnicek a predpovedet, kdy track dosahne svuj peak — k tomu potrebuje exponencialni rovnice a logaritmy.',
      outro: 'S $e$-funkci a $\\ln$ dokaze Amir ted vypocitat, kdy pisnicka dosahne vrcholu a jak rychle pote zajem klesa. "Super je, ze prirozeny logaritmus dela kazdou exponencialni rovnici resitelnou", vysvetluje Finnovi. DataPulse ted predpovida trendy pisnicek s prekvapivou presnosti.',
    },
    objectives: {
      e_function: 'Chapat a pouzivat $e$-funkci jako prirozenou rustovou funkci',
      natural_log: 'Ovladat prirozeny logaritmus jako inverzni funkci k $e^x$',
      log_rules: 'Bezpecne pouzivat pravidla logaritmu (pravidlo soucinu, podilu a mocniny)',
      solve_exp_equations: 'Resit exponencialni rovnice logaritmovanim',
    },
    explanation: {
      intro: 'Eulerovo cislo $e \\approx 2{,}718$ je nejdulezitejsi konstanta pro rustove procesy. Proc zrovna $e$? Protoze funkce $f(x) = e^x$ ma unikatni vlastnost: Jeji derivace je ona sama — $f\'(x) = e^x$. To znamena: Rychlost rustu je vzdy umerna aktualni hodnote. Perfektni pro prirozeny rust!',
      natural_log: 'Prirozeny logaritmus $\\ln(x)$ je inverzni funkce k $e^x$. Pokud chces vedet, jaky exponent potrebujes k dosazeni urcite hodnoty — pak je $\\ln$ tvuj nastroj. Obe funkce se navzajem rusi:',
      amir_tip: 'V mem ML kodu se $\\ln$ vyskytuje vsude — ve ztratove funkci, pri normalizaci, ve vzorci softmax. Duvod: $\\ln$ premeni nasobeni na scitani a dela obrovsky cisla zvladnutelnymi. Proto casto pocitame s "log-likelihood" misto primo s pravdepodobnostmi!',
      log_rules: 'Tri pravidla logaritmu jsou extremne uzitecna — premeruji slozite vyrazy na jednodussi. Zakladni myslenka: Logaritmy premeruji nasobeni na scitani, deleni na odcitani a mocneni na nasobeni:',
      solving: 'Abys vyresil exponencialni rovnici pro $x$, aplikujes $\\ln$ na obe strany. Logaritmus "stahne exponent dolu" — to je klicovy krok:',
    },
    concepts: {
      e_function: { title: '$e$-funkce', desc: 'Obecny tvar $f(x) = a \\cdot e^{kx}$: $a$ je pocatecni hodnota, $k$ urcuje rychlost rustu. Pri $k > 0$ funkce roste, pri $k < 0$ klesa (exponencialni rozpad). $e$-funkce je svoji vlastni derivaci — proto dokonale modeluje prirozeny rust.' },
      natural_log: { title: 'Prirozeny logaritmus', desc: 'Inverzni funkce k $e^x$: $\\ln(x)$ odpovida na otazku "Jaka mocnina $e$ dava $x$?". Definovan jen pro $x > 0$. Dulezite: $\\ln(1) = 0$ a $\\ln(e) = 1$.' },
      log_rules: { title: 'Pravidla logaritmu', desc: 'Tri pravidla, ktera vse zjednodusuji: Pravidlo soucinu ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), pravidlo podilu ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) a pravidlo mocniny ($\\ln(a^r) = r \\cdot \\ln(a)$). Pravidlo mocniny je klic k reseni exponencialnich rovnic.' },
    },
    examples: {
      solve_exp: {
        title: 'Reseni exponencialni rovnice', context: 'Amir chce vypocitat, po kolika dnech ma pisnicka 5krat vice streamu nez na zacatku. Model rustu: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Sestavime rovnici — kdy streamy dosahnou hodnoty 15?', step2: 'Vydelime 3, abychom izolovali $e^{2x}$:', step3: 'Aplikujeme $\\ln$ na obe strany — exponent "sjede dolu":', step4: 'Vyresime pro $x$ — vydelime koeficientem 2:',
        amir_comment: 'To je vzor, ktery neustale potrebuji: Izolovat, logaritmovat, vyresit. Funguje u kazde exponencialni rovnice!',
      },
      half_life: {
        title: 'Vypocet polocasu rozpadu', context: 'Po peaku viralni pisnicka denne ztraci posluchace. Amir modeluje pokles jako $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Model: 1000 aktivnich posluchacu v case $t = 0$, exponencialni pokles:', step2: 'Polocas rozpadu znamena: Kdy zbyva 500 posluchacu?', step3: 'Izolujeme a logaritmujeme — $\\ln$ na obe strany:', step4: 'Vyresime pro $t$ — po priblizne 6{,}93 dnech se pocet posluchacu snizi na polovinu:',
        amir_comment: 'Polocas rozpadu je konstantni! At uz je 1000, 500 nebo 250 posluchacu — vzdy trva priblizne 6{,}93 dne do dalsiho poloveni. To je kouzlo exponencialniho rozpadu.',
      },
    },
    realworld: {
      user_retention: { title: 'Retence uzivatelu aplikaci', desc: 'Kolik uzivatelu zustane po tydnu aktivnich? U vetsiny aplikaci retence pada exponencialne: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse pouziva tento model k predpovedi, kolik useru zustane po 30 dnech — a kdy cilene odeslat push notifikace.' },
      compound_interest: { title: 'Spojite uroceni', desc: 'Banky pocitaji s rocnim urocenim, ale teoreticky existuje i spojite: $K(t) = K_0 \\cdot e^{rt}$. Cim casteji pocitas uroky (denne, hodinove, sekundove...), tim blize se dostanes k $e^{rt}$. To je limitni hodnota!' },
      decibel: { title: 'Decibelova stupnice', desc: 'Hlasitost se meri logaritmicky: $L = 10 \\cdot \\log_{10}(I/I_0)$. Zdvojnasobeni intenzity zvuku zvysi hladinu jen o priblizne $3\\,\\text{dB}$. Proto 10 kytar nezni 10krat hlasiteji nez jedna — nas sluch pracuje logaritmicky!' },
    },
    mistakes: {
      ln_sum: { wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — rozdeleni souctu', correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — jen souciny se daji rozdelit', why: 'Pravidlo soucinu plati JEN pro nasobeni, ne pro scitani! Neexistuje jednoduchy vzorec pro $\\ln(a + b)$. To je jedna z nejcastejsich chyb vubec.', amir_warning: 'Tento bug me stal dve hodiny ladeni. Muj vypocet likelihood byl uplne spatny, protoze jsem pouzil $\\ln(p_1 + p_2)$ misto $\\ln(p_1 \\cdot p_2)$. Logaritmy rozdeluji souciny — ne soucty!' },
      ln_cancel: { wrong: '$\\ln(e^x) = e \\cdot x$ — chybne vyreseni logaritmu', correct: '$\\ln(e^x) = x$ — logaritmus rusi exponencialni funkci', why: '$\\ln$ a $e^x$ jsou inverzni funkce — navzajem se rusi. Vysledek je proste exponent $x$, bez faktoru $e$ pred nim.' },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse spustil novou funkci a Amir chce vedet: Jaka je pravdepodobnost, ze z 200 testovacich uzivatelu alespon 15 klikne na novy button? Kazdy uzivatel klikne nebo neklikne — klasicky pokus ano/ne opakovany $n$-krat. "To uz neni nahoda, to je binomicke rozdeleni", rika prof. Nguyen na seminari.',
      challenge: 'Amir potrebuje pravdepodobnost urciteho poctu kliku pri $n$ nezavislych pokusech — binomicke rozdeleni dava presnou odpoved.',
      outro: 'Amir ma ted statisticky ramec pro A/B testy. Muze vypocitat, zda je vysledek statisticky vyznamny, nebo vznikl ciste nahodou. "Binomicke rozdeleni je zakladem temer kazdeho statistickeho testu v praxi", vysvetluje Yare. DataPulse ted dela rozhodnuti na zaklade dat, ne pocitu.',
    },
    objectives: {
      bernoulli: 'Rozpoznavat Bernoulliho pokusy a urcovat pravdepodobnost uspechu $p$',
      binomial_formula: 'Pouzivat binomicky vzorec k vypoctu $P(X = k)$',
      expected_value: 'Pocitat a interpretovat stredni hodnotu $E(X) = n \\cdot p$',
      standard_deviation: 'Urcovat smerodatnou odchylku $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ a pouzivat jako miru rozptylu',
    },
    explanation: {
      intro: 'Predstav si, ze opakujes pokus $n$-krat a pokazde jsou jen dva vysledky: Uspech (pravdepodobnost $p$) nebo neuspech (pravdepodobnost $1-p$). Binomicke rozdeleni ti rika, jak pravdepodobne je presne $k$ uspechu pri $n$ pokusech:',
      bernoulli: 'Zakladem je Bernoulliho pokus — jeden pokus s presne dvema vysledky. Tri podminky musi platit: (1) jen dva vysledky, (2) pravdepodobnost $p$ zustava pri kazdem pokusu stejna, (3) pokusy jsou na sobe nezavisle. Binomicky koeficient pocita mozna usporadani:',
      amir_tip: 'Binomicky koeficient $\\binom{n}{k}$ pocita, kolika zpusoby muzes rozlozit $k$ uspechu na $n$ pokusu. V mem kodu je to scipy.special.comb(n, k). Pro velka $n$ pocitam radeji kumulativni rozdeleni — scitani jednotlivych pravdepodobnosti by bylo prilis pomale!',
      expected_value: 'Stredni hodnota $E(X) = n \\cdot p$ ti rika, kolik uspechu "prumerne" ocekavat. Pri 100 pokusech s $p = 0{,}15$ ocekavat $E(X) = 15$ uspechu. Ale to neznamena, ze to bude pokazde presne 15! Jak moc vysledky kolisaji, meri smerodatna odchylka:',
      standard_deviation: 'Smerodatna odchylka $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ ukazuje typicky rozptyl kolem stredni hodnoty. Pravidla: Priblizne 68% vysledku lezi v $E(X) \\pm \\sigma$, priblizne 95% v $E(X) \\pm 2\\sigma$. Cim vetsi $n$, tim uzsi se stava rozdeleni vzhledem ke stredni hodnote.',
    },
    concepts: {
      bernoulli: { title: 'Bernoulliho pokus', desc: 'Nahodny pokus s presne dvema vysledky: Uspech (pravdepodobnost $p$) nebo neuspech ($1-p$). Priklady: Hod minci, klik/neklik, gol/negol. Binomicke rozdeleni vznika $n$-nasobnym nezavislym opakovanim.' },
      binomial_formula: { title: 'Binomicky vzorec', desc: 'Vzorec $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ se sklada ze tri casti: $\\binom{n}{k}$ pocita usporadani, $p^k$ je pravdepodobnost $k$ uspechu, $(1-p)^{n-k}$ pro $n-k$ neuspechu.' },
      expected_value: { title: 'Stredni hodnota a smerodatna odchylka', desc: 'Stredni hodnota $E(X) = n \\cdot p$ je prumer pri mnoha opakovanich. Smerodatna odchylka $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ meri typickou odchylku od ni. Spolecne popisuji polohu a rozptyl rozdeleni.' },
    },
    examples: {
      coin_flips: { title: 'Hod minci: presne 7 z 10 hlav', context: 'Amir testuje svuj generator nahodnych cisel: Pri 10 hodech spravedlivou minci — jak pravdepodobne je presne 7krat hlava?', step1: 'Parametry: $n = 10$ hodu, $p = 0{,}5$ (spravedliva mince), hledame: $k = 7$ hlav.', step2: 'Binomicky koeficient — kolika zpusoby lze rozlozit 7 hlav na 10 hodu?', step3: 'Dosadime do binomickeho vzorce: Usporadani $\\times$ uspechy $\\times$ neuspechy:', step4: 'Vypocteme — pravdepodobnost je priblizne 11{,}7%, tedy spise nepravdepodobne:', amir_comment: 'Jen 11{,}7% — to ukazuje: I u spravedlive mince 7 z 10 hlav neni obzvlast prekvapive, ale ani bezne. Muj generator nahodnych cisel se zda v poradku!' },
      quality_control: { title: 'Kontrola kvality ve vyrobe', context: 'Tovarna ma chybovost 2%. Amir pocita: Jak pravdepodobne je, ze ve vzorku 20 kusu ani jeden neni vadny?', step1: 'Parametry: $n = 20$ kusu, chybovost $p = 0{,}02$, hledame: $k = 0$ vadnych.', step2: 'Dosadime: $\\binom{20}{0} = 1$ a $0{,}02^0 = 1$ — zustavaji jen neuspechy:', step3: 'Zjednodusime — zbyva $0{,}98^{20}$:', step4: 'Vysledek: S pravdepodobnosti priblizne 66{,}8% neni zadny kus vadny — vubec ne tak jiste!', amir_comment: 'Jen dve tretiny sance na nula chyb pri 2% chybovosti! To ukazuje: I male pravdepodobnosti se pri mnoha pokusech scitaji. Pri $n = 100$ by $P(X = 0) \\approx 13{,}3\\%$ — tam skoro jiste najdes chybu.' },
    },
    realworld: {
      ab_testing: { title: 'A/B testovani u DataPulse', desc: 'Amir testuje dve verze aplikace: Verze A ma miru prokliku 12%, verze B 15%. Pomoci binomickeho rozdeleni vypocita, zda je rozdil statisticky vyznamny — nebo mohl vzniknout nahodou. To je zaklad kazdeho A/B testu.' },
      medicine: { title: 'Lekarske studie', desc: 'U testu leku se pocita: Kolik pacientu se uzdravilo? Je mira uzdraveni vyznamne lepsi nez u placeba? Binomicke rozdeleni dava odpoved — a chrani pred unáhlenými zavery u prilis malych vzorku.' },
      surveys: { title: 'Pruzkumy a tolerance chyb', desc: 'Pokud v pruzkumu 52% hlasuje "ano" — je to opravdu vetsina? Smerodatna odchylka $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ ukazuje, jak siroky je interval spolehlivosti. Pri $n = 100$ by $\\sigma \\approx 5\\%$ — vysledek muze byt tedy i 47% nebo 57%.' },
    },
    mistakes: {
      forget_binomial_coeff: { wrong: 'Zapomenuti binomickeho koeficientu: $P(X=k) = p^k \\cdot (1-p)^{n-k}$', correct: 'Uplny vzorec s $\\binom{n}{k}$', why: 'Bez $\\binom{n}{k}$ vzorec pocita jen JEDNO konkretni poradi — napr. nejdriv $k$ uspechu, pak $n-k$ neuspechu. Ale uspechy se mohou vyskytnout na ruznych mistech! Binomicky koeficient pocita vsechna mozna usporadani.', amir_warning: 'Predstav si, ze hodis 3krat kostkou a chces presne 2 sestky. Jsou 3 moznosti: 6-6-X, 6-X-6, X-6-6. Binomicky koeficient $\\binom{3}{2} = 3$ pocita presne to. Bez nej dostanes jen tretinu spravne pravdepodobnosti!' },
      variance_vs_sigma: { wrong: 'Zamena rozptylu a smerodatne odchylky', correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — nezapomen odmocninu!', why: 'Rozptyl je $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, smerodatna odchylka je $\\sigma = \\sqrt{\\text{Var}(X)}$. Bez odmocniny ma vysledek spatnou jednotku a je prilis velky. $\\sigma$ ma stejnou jednotku jako $X$ — rozptyl ji ma na druhou.' },
    },
  },

  '11-bedingte-wahrscheinlichkeit': {
    story: {
      intro: 'DataPulse doporucuje pisni na zaklade dosavadniho poslechoveho chovani. Ale Amir si vsimne: Ne kazda korelace je stejne silna. Kdo posloucha rock, mozna ma rad i metal — ale plati to i naopak? "Pravdepodobnost, ze nekdo ma rad rock, KDYZ posloucha metal, neni totez co naopak", vysvetluje prof. Nguyen. Vitej u podminene pravdepodobnosti.',
      challenge: 'Amir musi vylepsit logiku doporucovani: Jak pravdepodobne je, ze uzivatel ma rad zanr $A$, POKUD posloucha zanr $B$? A jak otocit tento smer?',
      outro: 'S Bayesovou vetou muze Amir ted otocit smer doporuceni: Z "Kdo posloucha metal, posloucha v 60% i rock" se stane "Kdo posloucha rock, posloucha v 35% i metal". "Bayes je jako reverzni inzenyrstvi pro pravdepodobnosti", usmiva se. DataPulse ted dodava vyrazne presnejsi doporuceni.',
    },
    objectives: {
      conditional_prob: 'Pocitat a interpretovat podminene pravdepodobnosti',
      bayes_theorem: 'Pouzivat Bayesovu vetu k otoceni smeru podminene pravdepodobnosti',
      independence: 'Overovat stochastickou nezavislost a odlisovat od zavislosti',
      tree_diagrams: 'Pouzivat stromove diagramy a ctyrpolne tabulky jako pomocne nastroje',
    },
    explanation: {
      intro: 'Podminena pravdepodobnost $P(A \\mid B)$ odpovida na otazku: "Jak pravdepodobne je $A$, pokud uz vime, ze nastalo $B$?" Znalost $B$ meni pravdepodobnost — vyberovy prostor se zmensuje na pripady, kde $B$ plati:',
      multiplication_rule: 'Pravidlo nasobeni plyne primo z definice: Pokud chces vypocitat pravdepodobnost "$A$ a $B$ zaroven", nasobis $P(B)$ podminenou pravdepodobnosti $P(A \\mid B)$:',
      amir_tip: 'V mem doporucovacim kodu neustale pouzivam podminene pravdepodobnosti: $P(\\text{like}_Y \\mid \\text{like}_X)$ — pravdepodobnost, ze uzivatel ma rad pisnicku $Y$, pokud dal like pisnicce $X$. To je srdce kazdeho kolaborativniho filtru!',
      bayes: 'Bayesova veta je kouzlo: Otaci smer. Pokud znas $P(B \\mid A)$, ale potrebujes $P(A \\mid B)$, Bayes dava reseni. Vzorec vypada slozite, ale jadro je jednoduche: Vazis bazovou pravdepodobnosti (prior):',
      total_probability: 'Pro jmenovatel v Bayesove vete casto potrebujes uplnou pravdepodobnost. Rozklada $P(B)$ na vsechny mozne cesty, jak muze $B$ nastat — pres $A$ nebo pres $\\bar{A}$ (ne-$A$):',
      independence: 'Dva jevy jsou stochasticky nezavisle, pokud znalost jednoho nemeni pravdepodobnost druheho. Formalne: $P(A \\mid B) = P(A)$ — nastani $B$ nema vliv na $A$. Ekvivalentne:',
    },
    concepts: {
      conditional_prob: { title: 'Podminena pravdepodobnost', desc: '$P(A \\mid B)$ je pravdepodobnost $A$ za podminky $B$. "Priblizime" cast pravdepodobnostniho prostoru, kde plati $B$, a ptame se na $A$. Dulezite: $P(A \\mid B) \\neq P(B \\mid A)$ — smer je dulezity!' },
      bayes: { title: 'Bayesova veta', desc: 'Vzorec pro otoceni smeru: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ je prior (predchozi znalost), $P(A \\mid B)$ je posterior (aktualizovany odhad po pozorovani $B$). Bayesovska statistika je zakladem spamoych filtru a diagnostickych systemu.' },
      independence: { title: 'Stochasticka nezavislost', desc: '$A$ a $B$ jsou nezavisle, pokud $P(A \\cap B) = P(A) \\cdot P(B)$. To znamena: Nastani $B$ nic nemeni na pravdepodobnosti $A$. Pozor: Nezavislost NENI totez co "zadny prunik" (disjunktnost)!' },
    },
    examples: {
      medical_test: { title: 'Lekarsky test — klam bazove sazby', context: 'Test na nemoc je 99% spravny. Nemoc postihuje 1% populace. Pokud je test pozitivni — jak pravdepodobne je, ze jsi opravdu nemocny?', step1: 'Data: $P(K) = 0{,}01$ (nemoc), $P(+ \\mid K) = 0{,}99$ (senzitivita), $P(+ \\mid \\bar{K}) = 0{,}05$ (false positive rate).', step2: 'Uplna pravdepodobnost pozitivniho vysledku — obe cesty (nemocny + zdravy):', step3: 'Bayesova veta — hledame $P(K \\mid +)$:', step4: 'Vysledek: Jen 16{,}7% pravdepodobnost, ze jsi opravdu nemocny — navzdory 99% presnosti testu!', amir_comment: 'To je klam bazove sazby! Test je super presny, ale protoze nemoc je tak vzacna ($P(K) = 1\\%$), vetsina pozitivnich testu jsou false positives. V ML svete to znamena: Precision a recall nejsou totez!' },
      spam_filter: { title: 'Spamovy filtr s Bayesem', context: 'Amiruv e-mailovy filtr se ma ucit: Pokud mail obsahuje slovo "vyhral" — je to spam?', step1: 'Data: 30% vsech mailu je spam, 80% spamovych mailu obsahuje "vyhral", ale i 10% normalnich mailu:', step2: 'Uplna pravdepodobnost, ze mail obsahuje "vyhral":', step3: 'Bayes: Jak pravdepodobny je spam, pokud se vyskyuje "vyhral"?', step4: 'Vysledek: 77{,}4% — mail se slovem "vyhral" je s vysokou pravdepodobnosti spam:', amir_comment: 'Presne tak funguje Naive Bayes klasifikator! Cim vice slov pridas, tim presnejsi je filtr. DataPulse pouziva stejny princip: Misto slov analyzujeme poslechove vzorce, misto spam/nespam klasifikujeme zanrove preference.' },
    },
    realworld: {
      recommendation: { title: 'Hudebni doporuceni u DataPulse', desc: 'Kolaborativni filtrovani je zalozeno na podminenych pravdepodobnostech: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "Kdo ma rad pisnicku X, s jakou pravdepodobnosti ma rad i pisnicku Y?" Spotify, Netflix a DataPulse pocitaji miliony takovych podminenych pravdepodobnosti v realnem case.' },
      weather: { title: 'Predpoved pocasi', desc: 'Meteorologove neustale aktualizuji predpoved pomoci Bayese: $P(\\text{Dest} \\mid \\text{Mraky, Tlak, Vitr})$. Kazde nove mereni zpresni prognozu. Proto se pravdepodobnost deste v prubehu dne meni — to je Bayes v akci!' },
      fraud_detection: { title: 'Detekce podvodu', desc: 'Amiruv platebni system rozpoznava podezrele transakce pomoci Bayese: Pokud se spusti alarm — jak pravdepodobny je skutecny podvod? Presne jako u lekarskeho testu: Bazova sazba rozhoduje! Pri mire podvodu 0{,}1% je vetsina alarmu falesnych.' },
    },
    mistakes: {
      confuse_direction: { wrong: '$P(A \\mid B) = P(B \\mid A)$ — zamena smeru', correct: 'Otocit smer jde jen s Bayesem!', why: '$P(A \\mid B)$ a $P(B \\mid A)$ jsou uplne ruzne hodnoty. Priklad: $P(\\text{mokry} \\mid \\text{dest}) = 0{,}99$, ale $P(\\text{dest} \\mid \\text{mokry}) \\ll 0{,}99$ — clovek muze byt mokry i od postrikovaciho zarizeni. K otoceni smeru potrebujes Bayesovu vetu.', amir_warning: 'Tuto chybu vidim v code reviews neustale! Nekdo vypocita $P(\\text{klik} \\mid \\text{koupil})$ a pouzije to jako $P(\\text{koupil} \\mid \\text{klik})$. To muze uplne znicit doporucovaci algoritmus. Bayes je povinnost!' },
      ignore_base_rate: { wrong: 'Ignorovani bazove sazby (Base Rate Fallacy)', correct: 'Vzdy zohledni $P(A)$ — apriorno pravdepodobnost', why: 'Test s 99% presnosti zni pusobive, ale pokud nemoc postihuje jen 1%, je $P(K \\mid +) \\approx 16{,}7\\%$. Nizka bazova sazba $P(K) = 0{,}01$ dominuje vysledku. Bez prioru ziskas uplne zkresleny odhad.' },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn stavi backend pro novou funkci DataPulse: Hledani podobnych pisnicek. Ale jak merit "podobnost" mezi pisnickymi, kdyz je kazda popsana desitkami vlastnosti — tempo, energie, nalada, instrumentace? "Predstav si kazdou pisnicku jako bod v prostoru", rika Amir. "Cim bliz dva body lezi, tim podobnejsi pisne." Vitej ve svete vektoru.',
      challenge: 'Amir musi reprezentovat vlastnosti pisni jako vektory a vypocitat jejich podobnost — pomoci skalarniho soucinu a uhlu mezi vektory.',
      outro: 'Doporucovaci engine DataPulse ted pouziva Cosine Similarity: Cim mensi uhel mezi dvema vektory pisni, tim podobnejsi pisne. "V ML svete jsou vektory vsude — Word Embeddings, Feature Spaces, neuronove site. Vse je linearni algebra", rika nadseny Amir Yare.',
    },
    objectives: {
      vectors_2d_3d: 'Zapisovat vektory v $\\mathbb{R}^2$ a $\\mathbb{R}^3$ jako sloupce a interpretovat geometricky',
      vector_operations: 'Ovladat scitani vektoru a nasobeni skalarem',
      scalar_product: 'Pocitat skalarni soucin a interpretovat geometricky',
      angle_between_vectors: 'Urcovat uhel mezi dvema vektory pomoci kosinoveho vzorce',
    },
    explanation: {
      intro: 'Vektor popisuje posun v prostoru — nebo obecneji: usporadany seznam cisel. V $\\mathbb{R}^3$ ma vektor tri slozky, ktere zapises jako sloupec. V datove analyze mohou mit vektory 50 nebo 500 dimenzi — princip zustava stejny:',
      addition: 'Vektory scitas po slozkach — kazdy radek zvlast. Geometricky prikladáš druhy vektor na konec prvniho (metoda spicka-k-pate). Vysledkem je prima cesta od startu k cili:',
      amir_tip: 'V mem Python kodu jsou vektory proste numpy pole. Scitani $\\vec{a} + \\vec{b}$ se automaticky provadi po prvcich — np.array([3,4]) + np.array([-1,2]) dava np.array([2,6]). Presne to same jako v matice!',
      scalar_product: 'Skalarni soucin (take: vnitrni soucin) dvou vektoru dava jedine cislo — zadny vektor! Nasobis slozky po parech a vse sctes. Vysledek ti rekne, jak moc vektory "miri stejnym smerem":',
      length: 'Delka (velikost) vektoru se pocita Pythagorovou vetou — rozsirenou na tri dimenze. Ve 2D je to znamy $\\sqrt{x^2 + y^2}$, ve 3D pribude $z^2$:',
      angle: 'Nejdulezitejsi aplikace skalarniho soucinu: Uhel mezi dvema vektory. Vzorec spojuje algebraicky skalarni soucin s geometrickou interpretaci. Tento uhel je v ML svete jako "Cosine Similarity" standardni mirou podobnosti:',
    },
    concepts: {
      vector: { title: 'Vektor', desc: 'Usporadany seznam cisel zapsany jako sloupec. V $\\mathbb{R}^2$ ma vektor 2 slozky, v $\\mathbb{R}^3$ tri. Geometricky je to sipka se smerem a delkou. V datove analyze reprezentuje vektor objekt s jeho vlastnostmi — napr. pisnicku s tempem, energii a naladou.' },
      scalar_product: { title: 'Skalarni soucin', desc: 'Dva vektory dovnitr, jedno cislo ven: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometricky: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Pokud je skalarni soucin nula, vektory na sebe stoji kolmo (ortogonalni).' },
      vector_length: { title: 'Velikost vektoru', desc: 'Delka $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — zobecneny Pythagoras. Vektor s velikosti 1 se nazyva jednotkovy vektor. V ML svete se vektory casto normalizuji na delku 1, aby se porovnavaly jen smery.' },
    },
    examples: {
      force_addition: { title: 'Scitani sil jako vektoru', context: 'Dve sily pusobi na objekt — Amir pocita vyslednou celkovou silu.', step1: 'Dve sily dane jako 2D vektory:', step2: 'Scitame po slozkach — kazdy radek zvlast:', step3: 'Pocitame velikost celkove sily (Pythagoras):', step4: 'Vypocteme — celkova sila je priblizne $6{,}32\\,\\text{N}$:', amir_comment: 'Stejny princip pouzivame u DataPulse: Misto sil scitame feature vektory. Pokud uzivatel ma rad dva zanry, kombinovany vkusovy vektor je soucet — tim najdeme pisne, ktere pasi k obema zanrum!' },
      angle_vectors: { title: 'Uhel mezi vektory pisni', context: 'Amir porovnava dve pisne: Pisen A ma feature vektor $(1, 2, 3)$ a pisen B $(4, -1, 2)$. Jak moc si jsou podobne?', step1: 'Feature vektory obou pisni:', step2: 'Pocitame skalarni soucin — slozky po parech nasobene a sectene:', step3: 'Pocitame velikosti obou vektoru:', step4: 'Aplikujeme kosinovy vzorec — uhel je priblizne $62{,}2°$:', amir_comment: 'Uhel $62{,}2°$ znamena: Pisne jsou castecne podobne, ale ne extremne. Pri $0°$ by byly identicke (stejne proporce), pri $90°$ uplne odlisne. V mem kodu: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))' },
    },
    realworld: {
      embeddings: { title: 'Word Embeddings a Song Embeddings', desc: 'V ML svete jsou slova, pisne a obrazky reprezentovany jako vysoko-dimenzionalni vektory (Embeddings). Cosine Similarity $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ meri jejich podobnost. Slavny priklad: "Kral" $-$ "Muz" $+$ "Zena" $\\approx$ "Kralovna" — vektorova aritmetika s vyznamy slov!' },
      navigation: { title: 'Navigace a robotika', desc: 'Navigacni systemy a roboti pouzivaji vektory pro pozici a pohyb. Polohovy vektor rika "Kde jsem?", rychlostni vektor "Kam a jak rychle?". Scitani vektoru pocita novou pozici po pohybu.' },
      game_physics: { title: 'Herni fyzika a simulace', desc: 'Ve hrach jako Fortnite nebo Minecraft se fyzika pocita vektory: $\\vec{v}_{\\text{novy}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Rychlost, zrychleni a gravitace — vse vektory! Bez vektoroveho poctu by zadny mic neletel spravne.' },
    },
    mistakes: {
      scalar_vs_cross: { wrong: 'Skalarni soucin dava vektor', correct: 'Skalarni soucin dava CISLO ($\\in \\mathbb{R}$)', why: 'U skalarniho soucinu nasobis slozky po parech a SCITAS — vysledek je jedine cislo, zadny vektor. Neples si ho s krizovym soucinem (ten opravdu dava vektor, ale prijde az pozdeji).', amir_warning: 'V numpy: np.dot(a, b) vraci cislo, np.cross(a, b) vraci vektor. Pokud tvuj similarity score je najednou pole misto cisla, pouzil jsi spatny soucin!' },
      length_sum: { wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — proste secteni slozek', correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — Pythagoras!', why: 'Delka vektoru je euklidovska vzdalenost od pocatku — a ta plyne z Pythagorovy vety. Proste scitani slozek by bylo manhattanska vzdalenost (take uzitecna, ale neco jineho!).' },
    },
  },
};
