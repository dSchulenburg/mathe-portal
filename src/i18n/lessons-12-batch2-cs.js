export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai stojí před posledním problémem vyvážení „Hafenlichter 3D": kořist musí působit spravedlivě, a přesto napínavě. Když každý boss shodí přesně stejně zlata, je to nuda — při příliš velkém rozptylu si zase hráči stěžují na nespravedlnost. „Potřebuji rozdělení, které vypadá přirozeně — hodně hodnot blízko průměru, málo extrémů," říká Kai kolegyni Prie. Odpověď z přednášky o stochastice: normální rozdělení se svou dokonalou zvonovou křivkou.',
      challenge: 'Kai musí systém kořisti a výkonu „Hafenlichter 3D" nastavit tak, aby byly odměny rozděleny spravedlivě a časy snímků zůstaly pod kritickou hranicí — normální rozdělení a jeho sigma pravidla mu k tomu dávají nástroj.',
      outro: 'S normálním rozdělením postavil Kai elegantní systém vyvážení: kořist sleduje zvonovou křivku kolem cílové hodnoty a sigma pravidla zaručují, že odlehlé hodnoty jsou nesmírně vzácné. „Krása je v tom, že teď dokážu přesně spočítat, kolik procent hráčů zažije určitou hodnotu kořisti," vysvětluje týmu. A pomocí $z$-transformace srovnává zcela odlišné metriky — časy snímků, rozdělení poškození, délku hraní — na jediné škále. Zvonová křivka je všude.',
    },
    objectives: {
      bell_curve: 'Rozumět normálnímu rozdělení $N(\\mu, \\sigma^2)$ jako spojitému rozdělení se zvonovou křivkou a vykládat jeho parametry',
      sigma_rules: 'Používat sigma pravidla ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) k rychlým odhadům pravděpodobnosti',
      z_transformation: 'Provádět $z$-transformaci a počítat pravděpodobnosti pomocí normovaného normálního rozdělení $\\Phi(z)$',
      central_limit_theorem: 'Znát centrální limitní větu a vysvětlit, proč se normální rozdělení objevuje všude',
    },
    explanation: {
      intro: 'Normální rozdělení je nejdůležitější spojité rozdělení statistiky — a potkáš ho všude: u tělesných výšek, naměřených hodnot, časů snímků, výsledků zkoušek. Jeho hustota má ikonický zvonový tvar, symetrický kolem střední hodnoty $\\mu$. Směrodatná odchylka $\\sigma$ určuje, jak široký nebo úzký zvon je: malá $\\sigma$ = úzký vysoký zvon (malý rozptyl), velká $\\sigma$ = široký plochý zvon (velký rozptyl). Hustota má tvar:',
      sigma_rules: 'Sigma pravidla jsou tvůj rychlý nástroj: hned ti řeknou, kolik procent všech hodnot leží v určitém rozmezí kolem $\\mu$ — bez tabulky, bez kalkulačky. V pásmu $\\pm 1\\sigma$ leží asi $68{,}3\\%$, v pásmu $\\pm 2\\sigma$ asi $95{,}4\\%$ a v pásmu $\\pm 3\\sigma$ téměř vše — $99{,}7\\%$. To znamená: hodnoty za hranicí $3\\sigma$ jsou nesmírně vzácné!',
      kai_tip: 'V herním vývoji používám sigma pravidla při vyvažování denně. Chci-li, aby 95% kořisti leželo mezi 30 a 70 zlatými, nastavím $\\mu = 50$ a $2\\sigma = 20$, tedy $\\sigma = 10$. Hotovo! Pravidla mi hned dají rozdělení, aniž bych musel cokoli integrovat.',
      z_transformation: 'Ale co když potřebuješ přesnou pravděpodobnost — ne jen sigma pravidla? Pak přichází na řadu $z$-transformace: převedeš svou hodnotu $x$ na normovanou hodnotu $z$ a podíváš se do tabulky normovaného normálního rozdělení $\\Phi(z)$. Hodnota $z$ ti řekne, o kolik směrodatných odchylek je $x$ vzdálena od střední hodnoty:',
      central_limit: 'Proč je normální rozdělení tak všudypřítomné? Odpověď dává centrální limitní věta: sečteš-li dostatečně mnoho nezávislých náhodných veličin, blíží se jejich součet — bez ohledu na to, jak vypadají jednotlivá rozdělení — normálnímu rozdělení. Proto jsou průměry téměř vždy normálně rozdělené, i když jednotlivá data nejsou:',
    },
    concepts: {
      normal_distribution: {
        title: 'Normální rozdělení $N(\\mu, \\sigma^2)$',
        desc: 'Spojité rozdělení se zvonovitou hustotou. $\\mu$ je střední hodnota (střed zvonu), $\\sigma^2$ rozptyl (šířka zvonu). Plocha pod křivkou je vždy 1. Symetrické kolem $\\mu$: medián = modus = střední hodnota.',
      },
      sigma_rules: {
        title: 'Sigma pravidla',
        desc: 'Tři zlatá pravidla: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Nepostradatelná pro rychlé odhady.',
      },
      z_transformation: {
        title: '$z$-transformace',
        desc: 'Převádí každé normální rozdělení na normované normální rozdělení $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Poté odečteš $P(X \\leq x) = \\Phi(z)$ z tabulky. Tak se libovolná normální rozdělení stanou srovnatelnými.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Pravděpodobnost padnutí kořisti',
        context: 'V „Hafenlichter 3D" shazují bossové zlato s normálním rozdělením $\\mu = 50$ a $\\sigma = 8$. Kai chce vědět: jak pravděpodobné je legendární padnutí alespoň 70 zlatých?',
        step1: 'Sestavit model — padnutí zlata sleduje normální rozdělení:',
        step2: 'Použít $z$-transformaci — o kolik směrodatných odchylek je 70 vzdáleno od 50?',
        step3: 'Nahlédnout do tabulky — odečíst $\\Phi(2{,}5)$:',
        step4: 'Spočítat doplňkovou pravděpodobnost — jen $0{,}6\\%$ dostane 70 a více zlatých:',
        kai_comment: 'Perfektní! Legendární kořist u méně než 1% hráčů — působí to výjimečně, aniž by to bylo nespravedlivé. Normální rozdělení mi dává úplnou kontrolu nad vzácností.',
      },
      frame_times: {
        title: 'Analýza časů snímků',
        context: 'Při 60 FPS musí být každý snímek vykreslen za $16{,}7\\,\\text{ms}$. Kaiův profiler ukazuje: časy snímků mají normální rozdělení s $\\mu = 16{,}7\\,\\text{ms}$ a $\\sigma = 2{,}1\\,\\text{ms}$. Jak často hra sekne (čas snímku $> 20\\,\\text{ms}$)?',
        step1: 'Sestavit model — časy snímků jako normální rozdělení:',
        step2: '$z$-transformace pro hranici seknutí $x = 20$:',
        step3: 'Odečíst hodnotu z tabulky:',
        step4: 'Spočítat doplňkovou pravděpodobnost — sekne přibližně každý 17. snímek:',
        kai_comment: 'Skoro 6% seknutí — to je na plynulou 3D hru příliš. Musím optimalizovat renderer, dokud $\\sigma$ neklesne. Cíl: $\\sigma \\leq 1{,}5$, pak je zasaženo méně než 1,5% snímků.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Kontrola kvality v průmyslu',
        desc: 'Továrny používají pravidlo $3\\sigma$: odchýlí-li se součástka od jmenovité míry o více než $3\\sigma$, je vyřazena. Řízení Six Sigma jde ještě dál — $6\\sigma$ znamená nejvýše 3,4 vady na milion dílů. Normální rozdělení je základem průmyslového zajišťování kvality.',
      },
      iq_scores: {
        title: 'Testy IQ a standardizace',
        desc: 'Hodnoty IQ jsou z definice normálně rozdělené s $\\mu = 100$ a $\\sigma = 15$. To znamená: asi $68\\%$ populace má IQ mezi 85 a 115 a asi $95\\%$ mezi 70 a 130. IQ 145 ($z = 3$) je stejně vzácné jako padnutí 70 zlatých!',
      },
      stock_returns: {
        title: 'Výnosy akcií a riziko',
        desc: 'Denní výnosy akcií se často modelují jako normálně rozdělené — $\\sigma$ je pak riziko. Portfolio manažeři používají $z$-transformaci k výpočtu pravděpodobnosti krachu. Ovšem: ve skutečnosti se extrémní výkyvy vyskytují častěji, než normální rozdělení předpovídá („těžké chvosty").',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'Zapsat normální rozdělení jako $N(\\mu, \\sigma)$ — směrodatná odchylka místo rozptylu',
        correct: 'Správně je $N(\\mu, \\sigma^2)$ — druhý parametr je vždy rozptyl',
        why: 'V zápisu $N(\\mu, \\sigma^2)$ znamená druhý parametr rozptyl $\\sigma^2$, nikoli směrodatnou odchylku $\\sigma$. Záměna vede k úplně chybným pravděpodobnostem — např. $N(0, 4)$ je rozdělení s $\\sigma = 2$, ne $\\sigma = 4$!',
        kai_warning: 'Tahle chyba mi jednou zničila celé vyvážení kořisti. Myslel jsem $\\sigma = 8$, ale napsal $N(50, 8)$ — a to znamená $\\sigma = \\sqrt{8} \\approx 2{,}83$. Odměny byly příliš jednotvárné! Vždy pamatuj: $N(\\mu, \\sigma^2)$!',
      },
      z_sign: {
        wrong: 'Vzorec pro $z$ obráceně: $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'Správně je $z = \\frac{x - \\mu}{\\sigma}$ — hodnota mínus střední hodnota, ne naopak',
        why: 'Prohodíš-li čitatel, dostaneš špatné znaménko. Hodnota nad průměrem musí dát kladné $z$, hodnota pod ním záporné. Při $x = 70$, $\\mu = 50$ je $z = +2{,}5$ (nad průměrem), nikoli $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai dorazil k srdci „Hafenlichter 3D": 3D enginu. Každý objekt ve hře — každá loď, každá vlna, každá lucerna v přístavu — musí jít otáčet, škálovat a posouvat. „Ve 2D byly transformace prostě vzorce," vzpomíná na Miiny začátky. „Ale ve 3D potřebuješ systém, který zřetězí libovolně mnoho transformací — a to jsou matice." Kai otevře kód shaderu a vidí matice všude: modelová matice, pohledová matice, projekční matice.',
      challenge: 'Kai musí pochopit a implementovat 3D transformace pro svůj herní engine — rotaci, škálování a přechodové procesy, vše řízené násobením matic.',
      outro: 'Matice se pro Kaie staly každodenním nástrojem: každá 3D transformace je matice, každá animace posloupnost násobení matic, každé přechodové chování stochastická matice. „Geniální je to, že ať je transformace jakkoli složitá — nakonec je to vždy $\\vec{x}\' = M \\cdot \\vec{x}$," říká. Matice MVP ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) teď proměňuje tisíce vrcholů Hafenlichter za snímek na pixely na obrazovce.',
    },
    objectives: {
      matrix_operations: 'Sčítat a násobit matice a spolehlivě používat početní pravidla — zejména nekomutativitu',
      transformation_matrices: 'Sestavovat transformační matice pro rotaci, škálování a osovou souměrnost a používat je na vektory',
      stochastic_matrices: 'Počítat stochastické matice a pevné vektory pro přechodové procesy',
      inverse_matrix: 'Určit inverzní matici a chápat její význam jako „zpětné transformace"',
    },
    explanation: {
      intro: 'Matice jsou obdélníkové tabulky čísel — ale jejich skutečná síla spočívá v tom, že představují zobrazení. Matice $2 \\times 2$ transformuje 2D vektory, matice $3 \\times 3$ transformuje 3D vektory. Násobit znamená: řádek krát sloupec, pak sečíst. Pro $C = A \\cdot B$ platí:',
      transformation: 'Ve 3D grafice je každá geometrická transformace maticí: rotace, škálování, osová souměrnost. Rotační matice kolem osy $z$ otočí bod $(x, y, z)$ o úhel $\\theta$ — a souřadnice $z$ zůstane nezměněná:',
      kai_tip: 'Ve svém enginu zřetězuji transformace násobením matic: nejdřív škálovat, pak rotovat, pak posunout. Pořadí je přitom zásadní — matice nejsou komutativní! Nejdřív otočit a pak posunout dá něco úplně jiného než nejdřív posunout a pak otočit. Proto čtu řetězce matic vždy zprava doleva.',
      stochastic: 'Stochastické matice popisují přechodové procesy: jak pravděpodobné je přejít z jednoho stavu do druhého? Každý sloupec dává v součtu 1 (u sloupcových vektorů). Vynásobíš-li stavový vektor $\\vec{v}_n$ přechodovou maticí $T$, dostaneš další stav $\\vec{v}_{n+1}$:',
      inverse: 'Inverzní matice $A^{-1}$ je „tlačítko zpět": $A \\cdot A^{-1} = I$ (jednotková matice). Je-li $A$ rotace o $30°$, pak $A^{-1}$ je rotace o $-30°$. Ne každá matice má inverzní — jen když $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Násobení matic',
        desc: 'Řádek krát sloupec: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. Počet sloupců $A$ se musí rovnat počtu řádků $B$. Důležité: obecně $A \\cdot B \\neq B \\cdot A$! Na pořadí záleží.',
      },
      transformation_matrix: {
        title: 'Transformační matice',
        desc: 'Každé lineární zobrazení (rotaci, škálování, osovou souměrnost) lze vyjádřit maticí. Rotační matice $R(\\theta)$ otáčí vektory o úhel $\\theta$. Více transformací se zřetězuje násobením matic — čte se zprava doleva.',
      },
      stochastic_matrix: {
        title: 'Stochastická matice a pevný vektor',
        desc: 'Stochastická matice má v každém sloupci součet 1 — popisuje přechodové pravděpodobnosti. Pevný vektor $\\vec{v}_{\\text{fix}}$ s $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ je dlouhodobý rovnovážný stav, nezávisle na výchozím stavu.',
      },
    },
    examples: {
      '3d_rotation': {
        title: '3D rotace přístavní lucerny',
        context: 'Kai chce otočit lucernu v přístavu o $90°$ kolem osy $z$. Lucerna je v bodě $(3, 0, 5)$. Jak spočítá novou polohu?',
        step1: 'Sestavit rotační matici pro $90°$ kolem osy $z$ ($\\cos 90° = 0$, $\\sin 90° = 1$):',
        step2: 'Zapsat polohový vektor lucerny jako sloupcový vektor:',
        step3: 'Matice krát vektor — roznásobit řádek po řádku:',
        step4: 'Výsledek: lucerna je nyní v $(0, 3, 5)$ — otočena o $90°$ v rovině $xy$, $z$ beze změny:',
        kai_comment: 'Přesně tak funguje každý snímek v mém enginu: tisíce vrcholů se násobí modelovou maticí, pak pohledovou maticí (poloha kamery) a pak projekční maticí (perspektiva). Tři násobení matic na vrchol — a GPU to zvládne za milisekundy!',
      },
      player_states: {
        title: 'Chování hráče jako Markovův řetězec',
        context: 'V „Hafenlichter 3D" hráči střídají průzkum (P) a boj (B). Kai pozoroval: kdo zkoumá, ten v $70\\%$ případů zkoumá dál a v $30\\%$ přechází do boje. Kdo bojuje, zůstává v boji v $80\\%$ a v $20\\%$ se vrací k průzkumu. Právě teď zkoumá $60\\%$ hráčů.',
        step1: 'Sestavit přechodovou matici $T$ a počáteční vektor $\\vec{v}_0$:',
        step2: 'Spočítat jeden krok — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:',
        step3: 'Určit pevný vektor — vyřešit soustavu $T \\cdot \\vec{v} = \\vec{v}$ s podmínkou $x + y = 1$:',
        step4: 'Dlouhodobě $40\\%$ zkoumá a $60\\%$ bojuje — nezávisle na začátku:',
        kai_comment: 'To je pro můj herní design k nezaplacení! Pevný vektor mi ukazuje, že hráči dlouhodobě bojují víc, než zkoumají — ať začnou jakkoli. Chci-li to vyváženější, musím změnit přechodové pravděpodobnosti. Matice dělají chování hráčů vypočitatelným!',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Počítačová grafika a 3D enginy',
        desc: 'Každý 3D engine (Unity, Unreal, Godot) stojí na násobení matic. Pipeline MVP — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — transformuje každý 3D bod na 2D obrazovku. Moderní GPU jsou v jádru mohutné stroje na násobení matic.',
      },
      google_pagerank: {
        title: 'Google PageRank',
        desc: 'Původní vyhledávací algoritmus Googlu modeluje web jako obrovskou stochastickou matici: každá webová stránka je stav, každý odkaz přechodová pravděpodobnost. Pevný vektor $\\vec{r} = T \\cdot \\vec{r}$ dává pořadí — stránky s nejvyššími hodnotami v pevném vektoru stojí úplně nahoře.',
      },
      robotics: {
        title: 'Robotika a řízení strojů',
        desc: 'Robotická ramena se skládají z kloubů, z nichž každý vykonává rotaci. Celková poloha ruky vyjde jako součin všech rotačních matic podél ramene. Tomu se říká dopředná kinematika — a inverzní matice řeší obrácenou úlohu: „jaké úhly kloubů potřebuji pro tuto polohu ruky?"',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Zacházet s násobením matic jako s násobením čísel: $A \\cdot B = B \\cdot A$',
        correct: 'Matice NEJSOU komutativní: obecně $A \\cdot B \\neq B \\cdot A$',
        why: 'Nejdřív otočit a pak posunout dá jiný výsledek než nejdřív posunout a pak otočit. Ve 3D grafice vede prohozené pořadí k úplně chybným polohám. Proto: řetězce transformací čti vždy zprava doleva!',
        kai_warning: 'Jednou jsem celý den hledal chybu, protože jsem prohodil rotaci a posunutí. Moje lodě se otáčely kolem středu světa místo kolem vlastní osy! Od té doby čtu řetězce matic vždy zprava doleva: $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$ — nejdřív rotovat, pak posunout.',
      },
      stochastic_rows_cols: {
        wrong: 'Předpokládat součet řádku = 1 u stochastických matic se sloupcovými vektory',
        correct: 'U sloupcových vektorů musí být součet sloupce roven 1: $\\sum_i t_{ij} = 1$',
        why: 'Konvence závisí na tom, zda používáš řádkové, nebo sloupcové vektory. Ve škole a na německých univerzitách je standardem sloupcový vektor — pak musí sloupce přechodové matice dávat v součtu 1. Každý sloupec popisuje: „ze stavu $j$ — jak se rozdělují přechody?"',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'Je noc vydání v hamburském přístavu. Světla mol se zrcadlí ve vodě a na velkém plátně před rybím trhem svítí název: „Hafenlichter 3D". Kai stojí na pódiu s mikrofonem v ruce a skoro tomu nevěří — tři roky vývoje a teď je hra konečně hotová. V publiku zahlédne dvě známé tváře: Miu, která tehdy vším pohnula svou 2D pixelartovou hrou, a Amira, jehož algoritmy DataPulse řídí umělou inteligenci vedlejších postav. „Pamatujete," říká Kai do mikrofonu, „jak Mia začínala s lineárními funkcemi, aby pohybovala postavami po přímce? Pak Amir postavil datovou pipeline s derivacemi a binomickým rozdělením. A teď tu stojíme — s maticemi, integrály a normálním rozdělením jsme vytvořili celý 3D svět." Dav jásá. Ale než večírek pořádně začne, čeká Kaie ještě jedna zkouška: maturita z matematiky.',
      challenge: 'Blíží se největší zkouška — maturita spojuje analýzu, analytickou geometrii a stochastiku v jedné písemce. Kai potřebuje strategii, která propojí všechna témata, maximalizuje body a vyhne se typickým chybám.',
      outro: 'Večírek k vydání v přístavu běží, hraje hudba a Kai, Mia a Amir si připíjejí. „Tři roky matematiky," říká Mia, „od přímky k normálnímu rozdělení." „Od dat k neuronovým sítím," dodává Amir. „Od 2D pixelů k 3D enginu," uzavírá Kai. Dívají se na Labe, kde tančí přístavní světla — každé z nich jeden vrchol, transformovaný maticí, osvětlený exponenciální funkcí, vyvážený normálním rozdělením. Matematika nikdy nebyla jen počítání. Byla jazykem, kterým své nápady proměnili ve skutečnost. Hra je vydaná. Zkouška přijde. A ať dopadne jakkoli — cesta za to stála. Každá funkce, každá derivace, každý integrál je sem přivedly. K přístavu. K cíli. A na začátek všeho, co teprve přijde.',
    },
    objectives: {
      exam_strategy: 'Vypracovat jasnou zkouškovou strategii: prohlédnout úlohy, spočítat poměr bodů a času, snadné úlohy nejdřív',
      cross_topic_connections: 'Rozpoznávat a využívat souvislosti mezi analýzou, analytickou geometrií a stochastikou',
      time_management: 'Realisticky plánovat časový rozpočet na úlohu a dodržet ho',
      error_prevention: 'Rozpoznávat typické chyby, provádět kontroly věrohodnosti a vykládat výsledky ve věcném kontextu',
    },
    explanation: {
      intro: 'Maturita není sprint, ale strategická hra — jako závěrečný boss s několika fázemi. Máš zhruba 4 až 5 hodin na tři velké tematické bloky. Klíčem není vědět všechno, ale chytře stanovit priority a pracovat pečlivě. Kai se to naučil na své hře: „Nemůžeš opravit každou chybu naráz. Opravíš ty, které mají největší dopad — a přesně tak přistoupíš ke zkoušce."',
      kai_rallying: 'Lidi, dělali jsme matematiku tři roky — ne proto, že jsme museli, ale protože byla klíčem k našim projektům. Mia začala funkcemi, Amir trénoval svou umělou inteligenci stochastikou a já jsem maticemi postavil 3D svět. Maturita jsou jen titulky po závěrečném boji. Jsme připraveni!',
      structure: 'Písemka se obvykle skládá ze tří povinných částí — analýza (často největší blok), analytická geometrie a stochastika. Body se rozdělují zhruba takto:',
      time_strategy: 'Plánuj svůj čas úměrně bodům. Přináší-li úloha 10 ze 100 bodů, investuj do ní asi $10\\%$ svého času. A zlaté pravidlo: začni úlohami, kterými si jsi jistý. Každý jistý bod váží stejně jako ten těžce vydřený!',
      mia_wisdom: 'Vzpomeňte si na základy! Vyšetření průběhu funkce je vždy stejné schéma: definiční obor, nulové body, extrémy, inflexní body, chování pro $x \\to \\pm\\infty$. Když znáte ten vzorec, je každá funkce jen jeho obměnou. Naučila jsem se to na svých herních postavách — každý pohyb je v jádru funkce.',
      checking: 'Po každé dílčí úloze: kontrola věrohodnosti! Sedí jednotky? Dávají znaménka smysl? Leží výsledek v reálném rozmezí? Pravděpodobnost větší než 1 nebo záporný obsah jsou okamžité varovné signály — pak je lepší přepočítat než pokračovat.',
      amir_data: 'Své výsledky vždy kontroluji na mezních případech: co se stane při $x = 0$? Při velmi velkých $x$? Konverguje mé řešení, nebo diverguje? Tenhle způsob myšlení z ladění platí stejně dobře i pro písemku. A ve stochastice: vždy ověř, zda platí $\\sum P = 1$!',
      confidence: 'To nejdůležitější nakonec: umíš víc, než si myslíš. Tři roky cviku máš v rukou. Když se u zkoušky na chvíli zastavíš — vydechni, přečti si zadání znovu a začni tím, co umíš jistě. Každý bod se počítá. A pamatuj: matematika není talent, ale jazyk, který ses naučil. Mluv jím.',
    },
    concepts: {
      read_then_plan: {
        title: 'Číst → plánovat → počítat → kontrolovat',
        desc: 'Čtyřkrokové schéma pro každou úlohu: (1) přečíst zadání celé, označit informace. (2) naplánovat postup řešení — které metody potřebuješ? (3) počítat pečlivě a přehledně. (4) zkontrolovat výsledek: jednotky, znaménka, věrohodnost, věcný kontext.',
      },
      point_maximizing: {
        title: 'Bodová efektivita',
        desc: 'Ne každá úloha je stejně obtížná na bod. Začni úlohami, kde získáš nejvíc bodů za nejkratší čas. Poslední dílčí úlohy bývají nejtěžší — je lepší nejdřív posbírat všechny „snadné" body ve všech úlohách a pak se vrátit k těžkým.',
      },
      plausibility_check: {
        title: 'Kontrola věrohodnosti',
        desc: 'Čtyři rychlé kontroly, které brání chybám z nepozornosti: (1) jednotky: sedí jednotka ke kontextu? (2) znaménka: dává tu záporná hodnota smysl? (3) limity: co se stane pro $x \\to 0$ nebo $x \\to \\infty$? (4) náčrt: odpovídá výsledek grafické představě?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Typická úloha z analýzy: vyšetření průběhu + integrál',
        context: 'Kai modeluje spotřebu energie svého 3D enginu funkcí $f(x) = (2x - 1) \\cdot e^{-x}$. Urči extrémy a spočítej obsah plochy mezi grafem a osou $x$ na $[0;\\, 3]$.',
        step1: 'Sestavit funkci — zde už je dána:',
        step2: 'Derivace podle pravidla o součinu: $u = 2x - 1$, $v = e^{-x}$, tedy $f\'(x) = u\' \\cdot v + u \\cdot v\'$:',
        step3: 'Najít extrém — položit $f\'(x) = 0$ ($e^{-x} > 0$ vždy, tedy závorka = 0):',
        step4: 'Výpočet obsahu — integrace per partes nebo určení primitivní funkce:',
        mia_comment: 'To je přesně ten vzorec, který mám na mysli: derivace podle pravidla o součinu, najít nulový bod, spočítat integrál. Funkce se mění, ale postup zůstává pořád stejný. Cvičte, dokud to nepůjde samo!',
      },
      mixed_stochastik: {
        title: 'Typická úloha ze stochastiky: test hypotéz',
        context: 'Amirův A/B test ukazuje: z 50 uživatelů kliká obvykle $8\\%$ na nové tlačítko. Po redesignu chce ověřit, zda míra prokliků vzrostla ($\\alpha = 5\\%$).',
        step1: 'Sestavit model — binomické rozdělení s parametry:',
        step2: 'Formulovat hypotézy — jednostranný test nahoru:',
        step3: 'Hledat kritický obor — otestovat $k = 8$ ($P$ ještě příliš velké):',
        step4: 'Určit kritický obor — od $k = 9$ se $H_0$ zamítá:',
        amir_comment: 'Testy hypotéz jsou v jádru rozhodovací logika: spočítáš, jak nepravděpodobný je tvůj výsledek za platnosti $H_0$. Je-li nepravděpodobnější než $\\alpha$, zavrhneš $H_0$. Přesně tak dělám rozhodnutí založená na datech v DataPulse — jen s většími výběry!',
      },
    },
    realworld: {
      release_day: {
        title: 'Den vydání: když se vše sejde',
        desc: 'Vydat hru je jako zkouška: měsíce příprav vyústí v jeden rozhodující okamžik. Kaiovy „Hafenlichter 3D" spojují 2D základy (Mia), datovou analýzu (Amir) a 3D matematiku (Kai) — přesně jako maturita spojuje analýzu, geometrii a stochastiku. Příprava je vším.',
      },
      project_management: {
        title: 'Projektové řízení a priority',
        desc: 'Ve vývoji softwaru stanovuješ priority podle dopadu a náročnosti — přesně jako zkouškové úlohy podle bodů a obtížnosti. Vzorec $\\text{Efektivita} = \\frac{\\text{Body}}{\\text{Čas}}$ platí stejně i v zaměstnání: soustřeď se na to, co udělá největší rozdíl.',
      },
      lifelong_learning: {
        title: 'Celoživotní učení',
        desc: 'Maturita není konec, ale začátek. Mia studuje herní design, Amir datovou vědu a Kai mediální informatiku — a všude potřebují matematiku. Schopnost zapracovat se do nových témat má větší cenu než jakýkoli jednotlivý vzorec. Matematika vás naučila myslet.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Napsat výsledek bez jednotky a bez věcné souvislosti: „$A = 12{,}5$"',
        correct: 'Vždy jednotka a interpretace: „$A = 12{,}5\\,\\text{PJ}$, což odpovídá $12{,}5\\,\\text{m}^2$"',
        why: 'U maturity se dávají body za interpretaci ve věcném kontextu! Holý výsledek bez jednotky nebo vazby na zadání tě stojí snadné body. Vždy napiš odpovědní větu: „Obsah činí $12{,}5\\,\\text{m}^2$, což odpovídá osázené ploše parku."',
        kai_warning: 'V herním vývoji nemají čísla bez kontextu žádnou cenu. 12,5 — čeho? Pixelů? Sekund? Bodů poškození? Stejně tak v písemce: napiš jednotku a zformuluj odpovědní větu. To jsou darované body!',
      },
      skip_plausibility: {
        wrong: 'Nezpochybnit zjevně chybný výsledek: $P(X = 5) = 1{,}3$',
        correct: 'Okamžitě zpozornět: pravděpodobnost nemůže být nikdy větší než 1!',
        why: 'Kontroly věrohodnosti stojí 10 sekund, ale mohou zachránit celé úlohy. Pravděpodobnosti leží vždy mezi 0 a 1, obsahy nejsou nikdy záporné a $e^x > 0$ pro všechna $x$. Porušuje-li tvůj výsledek tato základní pravidla, stojí za tím početní chyba.',
        mia_warning: 'V poslední písemce jsem našla přesně takovou chybu: můj integrál vyšel záporně, přestože funkce byla na celém intervalu kladná. Rychlá kontrola, odhalená chyba ve znaménku, opraveno — zachráněné 4 body. Vždy kontrolujte!',
      },
    },
  },
};
