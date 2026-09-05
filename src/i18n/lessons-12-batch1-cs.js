export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Částicový systém „Hafenlichter 3D" vypadá skvěle — jiskry stříkají, mlha se vlní, oheň plápolá. Jenže Kai má problém s výkonem: tisíce částic naráz nutí GPU se pořádně zapotit. „Musím spočítat, jak rychle částice blednou, abych je stihl včas vyhodit z paměti," vysvětluje Mie. Odpověď leží v $e$-funkci a jejím protějšku, přirozeném logaritmu — nástrojích pro všechno, co exponenciálně roste nebo se rozpadá.',
      challenge: 'Kai musí matematicky namodelovat životnost částic: jak rychle vyhasne jiskra? Kdy je částice kouře tak průhledná, že ji lze smazat? K tomu potřebuje řetězové pravidlo pro $e$-funkce, derivace $\\ln$ a řešení rovnic rozpadu.',
      outro: 'Se složenými $e$-funkcemi a derivacemi $\\ln$ postavil Kai chytrý částicový systém: každá jiskra sleduje přesnou křivku rozpadu a každá částice kouře se recykluje právě tehdy, když její neprůhlednost klesne pod práh vnímání. „Řetězové pravidlo je vlastně můj optimalizátor výkonu," šklebí se Kai. „GPU se mi odvděčí 60 snímky místo 30." Mia dodává: „A to nejlepší — stejná matematika popisuje i radioaktivní rozpad a nabíjecí křivky kondenzátorů."',
    },
    objectives: {
      advanced_e_properties: 'Derivovat složené $e$-funkce řetězovým pravidlem: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Ovládnout derivaci $\\ln(g(x))$ a využít ji při vyšetřování průběhu funkce',
      composite_exp_functions: 'Analyzovat součiny polynomů a $e$-funkcí (extrémy, inflexní body)',
      differential_equations: 'Rozumět jednoduchým diferenciálním rovnicím typu $f\'(t) = k \\cdot f(t)$ a sestavovat modely rozpadu',
    },
    explanation: {
      intro: 'V 11. ročníku ses naučil základy $e^x$ a $\\ln(x)$. Teď to začíná vážně: derivujeme složené $e$-funkce, analyzujeme křivky s $\\ln$ a řešíme rovnice rozpadu. Klíčem je řetězové pravidlo — když v exponentu nestojí jen $x$, ale celá funkce $g(x)$, dá vnější derivace $e^{g(x)}$ a vnitřní derivace $g\'(x)$ přibude jako činitel:',
      ln_derivative: 'Stejně elegantní: derivace $\\ln(g(x))$ řetězovým pravidlem. Přirozený logaritmus funkci „obrátí" — vnitřní derivace stojí v čitateli a samotná vnitřní funkce ve jmenovateli:',
      kai_tip: 'V mém 3D enginu se $e$-funkce objevují všude: rozpad částic, hustota mlhy, doznívání zvuku. Trik je pořád stejný — řetězové pravidlo. Když derivuji $e^{-0{,}5t^2}$ pro Gaussovo rozdělení, je vnitřní funkce $g(t) = -0{,}5t^2$ a vnitřní derivace $g\'(t) = -t$. Dosadit a hotovo. Jakmile ten vzorec jednou pochytíš, jede to samo!',
      integration: 'Při integrování běží proces pozpátku. Pro jednoduché exponenciální funkce platí: činitel z exponentu putuje do jmenovatele. A slavné pravidlo $\\frac{1}{x}$ vede přímo k $\\ln$:',
      decay_model: 'Exponenciální rozpad je TEN standardní model pro procesy, u nichž je rychlost změny úměrná aktuální hodnotě: $f\'(t) = -\\lambda \\cdot f(t)$. Řešením je vždy $e$-funkce se záporným exponentem. Poločas $t_{1/2}$ udává, po jaké době zbude polovina výchozí hodnoty:',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Řetězové pravidlo pro $e$-funkce',
        desc: 'U $f(x) = e^{g(x)}$ je vnější funkce $e^u$ (derivace: $e^u$) a vnitřní funkce $g(x)$. Výsledek: $e$-funkce zůstane, vynásobená vnitřní derivací. Příklad: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Derivace $\\ln(g(x))$',
        desc: 'Řetězové pravidlo pro logaritmus vytváří zlomek: vnitřní derivace dělená vnitřní funkcí. To je obzvlášť užitečné, když je $g(x)$ polynom — např. $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Důležité: definiční obor je omezen podmínkou $g(x) > 0$.',
      },
      exp_integration: {
        title: 'Logaritmická integrace',
        desc: 'Má-li integrand tvar $\\frac{f\'(x)}{f(x)}$, je primitivní funkce okamžitě $\\ln|f(x)| + C$. Je to obrácení derivace $\\ln$ a jeden z nejdůležitějších integračních triků. Příklad: $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Modelování rozpadu částic',
        context: 'V Kaiově částicovém systému startuje současně 5000 jiskrových částic. Jejich počet ubývá exponenciálně — Kai chce spočítat rychlost rozpadu a poločas.',
        step1: 'Sestavit model rozpadu — $N_0 = 5000$ částic, rozpadová konstanta $\\lambda = 0{,}03\\,\\text{s}^{-1}$:',
        step2: 'Derivovat řetězovým pravidlem — vnitřní funkce $g(t) = -0{,}03t$, vnitřní derivace $g\'(t) = -0{,}03$:',
        step3: 'Spočítat počáteční rychlost — při $t = 0$ mizí 150 částic za sekundu:',
        step4: 'Určit poločas — vyřešit $N(t_{1/2}) = \\frac{N_0}{2}$ pomocí $\\ln$:',
        kai_comment: 'Po 23 sekundách je polovina částic pryč — to znamená, že můžu uvolnit paměť ještě dřív pro další explozi. V enginu nastavuji práh smazání na $5\\%$ neprůhlednosti, což je zhruba $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Vyšetření průběhu s $e$-funkcí',
        context: 'Kai modeluje jas světelného záblesku: nejprve stoupá, pak klesá. Křivka jasu má tvar $f(x) = x^2 \\cdot e^{-x}$ — typická „zábleskovová" funkce.',
        step1: 'Funkce je dána — součin polynomu a klesající $e$-funkce:',
        step2: 'Derivace podle pravidla o součinu: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — pro druhý činitel potřebujeme řetězové pravidlo:',
        step3: 'Nulové body derivace: $e^{-x} > 0$ vždy, takže rozhoduje jen $x(2-x) = 0$:',
        step4: 'Určit maximum — spočítat hodnotu funkce při $x = 2$:',
        kai_comment: 'Tahle křivka „vzestup a pak pokles" je ideální pro světelné efekty. Při $x = 0$ je vše temné, při $x = 2$ maximální jas a pak jemné doznívání. Ve svém shaderu používám přesně tuhle funkci pro záblesk hlavně a výbuchové záblesky!',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Částicové systémy ve 3D enginech',
        desc: 'Každá jiskra, každý pruh kouře, každý oheň ve videohře sleduje exponenciální křivku rozpadu $N(t) = N_0 \\cdot e^{-\\lambda t}$. Rozpadová konstanta $\\lambda$ určuje, jak rychle částice blednou. V Unity a Unreal Enginu nastavuješ přesně tento parametr, když konfiguruješ „Lifetime" a „Fade".',
      },
      signal_processing: {
        title: 'Zpracování zvuku a útlum signálu',
        desc: 'Když v GarageBandu nebo v DJ nástroji slyšíš dozvuk, zvuk doznívá exponenciálně: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. $e$-funkce řídí hlasitost, $\\sin$ kmitání. Také Bluetooth signály a dosah wi-fi se řídí tímto modelem — proto se streamování zadrhává, čím dál jsi od routeru.',
      },
      learning_curve: {
        title: 'Křivka učení a růst dovednosti',
        desc: 'Jak rychle se naučíš novou hru? Křivka učení $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ popisuje, jak dovednosti zpočátku rychle rostou a pak se blíží k maximu. Herní designéři používají tento model k návrhu křivek obtížnosti — a i tvůj mozek sleduje přesně tuhle funkci při učení slovíček nebo cvičení na nástroj.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Zapomenutá vnitřní derivace: $(e^{3x})\' = e^{3x}$',
        correct: 'Použít řetězové pravidlo: $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'Jakmile v exponentu stojí víc než jen $x$, řetězové pravidlo MUSÍ nastoupit. Vnitřní funkce je zde $g(x) = 3x$ s $g\'(x) = 3$. Tenhle činitel nesmí chybět!',
        kai_warning: 'Ve svém shaderu jsem jednou derivoval $e^{-0{,}5t^2}$ a zapomněl na činitel $-t$. Výsledek: částice, které se nikdy nezměnily — jako zmrzlý kouř. Od té doby pokaždé kontroluji: stojí v exponentu víc než $x$? Tak řetězové pravidlo!',
      },
      ln_negative: {
        wrong: 'Zapomenuté absolutní hodnoty: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Správně s absolutní hodnotou: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'Funkce $\\frac{1}{x}$ je definována i pro záporné hodnoty $x$, ale $\\ln(x)$ jen pro $x > 0$. Absolutní hodnota zajistí, že primitivní funkce platí na celém definičním oboru. U určitých integrálů s kladnými mezemi ji můžeš vynechat — u neurčitých nikdy!',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Pro „Hafenlichter 3D" staví Kai procedurální generátor úrovní: mosty, tunely a domy mají vznikat z matematických křivek, které se otáčejí kolem os. „Představte si, že definuji profil a nechám ho rotovat — a už mám sloup, kupoli nebo lodní trup," nadchne se Kai. Jak ale spočítá přesný objem těchto 3D těles? Odpověď: rotační objemy, integrace per partes a několik elegantních integračních technik.',
      challenge: 'Kai musí spočítat objemy 3D objektů, které vznikají rotací křivek. Kromě toho potřebuje integraci per partes pro složité vzorce osvětlení a musí ověřit, zda určité integrály vůbec konvergují.',
      outro: 'Generátor úrovní běží: Kai otáčí profily křivek kolem os a dostává dokonalá 3D tělesa s přesně spočítaným objemem. „Integrace per partes byla klíčem k integrálům osvětlení," vypráví Amirovi, „a nevlastní integrály mi ukazují, kdy má světelný efekt konečnou celkovou energii — i když teoreticky sahá nekonečně daleko." Mia přikyvuje: „Stejnou matematiku používají inženýři k dimenzování nádrží a fyzici k výpočtu energie vln."',
    },
    objectives: {
      integration_techniques: 'Spolehlivě používat integraci per partes a substituci',
      rotation_volumes: 'Počítat rotační objemy kolem osy $x$ vzorcem $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Ověřovat konvergenci nevlastních integrálů a počítat je',
      partial_integration: 'Cíleně nasazovat metodu per partes, když je třeba integrovat součiny',
    },
    explanation: {
      intro: 'V 11. ročníku jsi poznal určité integrály jako obsah plochy. Teď přibývají tři nové techniky. První je integrace per partes — „obrácení" pravidla o součinu. Musíš-li integrovat součin jako $x \\cdot e^x$, rozložíš ho na $u$ a $v\'$:',
      substitution: 'Druhou technikou je substituce — „obrácení" řetězového pravidla při derivování. Když jedna funkce „sedí uvnitř" druhé, nahradíš vnitřní funkci novou proměnnou:',
      kai_tip: 'Můj trik pro per partes: „LIATE" — logaritmická, inverzní goniometrická, algebraická, goniometrická, exponenciální. To je pořadí, v jakém volíš $u$. Takže u $\\int x \\cdot e^x\\,\\mathrm{d}x$ je $u = x$ (algebraická) a $v\' = e^x$ (exponenciální). U $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$ je $u = \\ln(x)$ a $v\' = x$. Funguje skoro vždycky!',
      rotation_volume: 'Teď to bude trojrozměrné: když otočíš graf $f(x)$ kolem osy $x$, vznikne rotační těleso. Jeho objem spočítáš tak, že si těleso představíš složené z nekonečně mnoha tenkých kruhových plátků — každý plátek má poloměr $f(x)$:',
      improper: 'Co se stane, když je integrační mez $\\infty$? Nebo když se integrand v nějakém bodě stane neomezeným? Pak mluvíme o nevlastních integrálech. Problémové místo nahradíš limitou a ověříš, zda vyjde konečná hodnota:',
    },
    concepts: {
      partial_integration: {
        title: 'Integrace per partes',
        desc: 'Obrácení pravidla o součinu: integrand rozložíš na $u$ (které se derivuje) a $\\mathrm{d}v$ (které se integruje). Cíl: nový integrál $\\int v\\,\\mathrm{d}u$ musí být jednodušší než původní. Typické použití: součiny polynomu a $e$-funkce nebo polynomu a goniometrie.',
      },
      rotation_volume: {
        title: 'Rotační objem',
        desc: 'Graf funkce rotující kolem osy $x$ vytváří 3D těleso. Objem vyjde jako součet nekonečně mnoha kruhových plátků o poloměru $f(x)$ a tloušťce $\\mathrm{d}x$. Každý plátek má objem $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$ — sečteno (integrováno) to dá vzorec.',
      },
      improper_integral: {
        title: 'Nevlastní integrály',
        desc: 'Integrály s $\\infty$ jako mezí nebo s neomezeným integrandem. Problémové místo nahradíš proměnnou a utvoříš limitu. Existuje-li limita a je konečná, nazývá se integrál konvergentní — jinak divergentní. Klasika: $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ konverguje, ale $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ diverguje.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Rotační těleso pro návrh úrovně',
        context: 'Kai chce vygenerovat sloup, jehož profil sleduje křivku $f(x) = \\sqrt{x}$. Mezi $x = 0$ a $x = 4$ křivka rotuje kolem osy $x$ — jak velký je objem sloupu?',
        step1: 'Definovat profil — odmocninová funkce na intervalu $[0;\\,4]$:',
        step2: 'Použít vzorec pro rotační objem — umocnit $f(x)$ na druhou a dát $\\pi$ dopředu:',
        step3: 'Najít primitivní funkci a dosadit meze:',
        step4: 'Výsledek — sloup má objem $8\\pi$ objemových jednotek:',
        kai_comment: 'To je přesně ten vzorec, který používá můj procedurální generátor! Definuji profily křivek, nechám je rotovat a hned znám objem — důležité pro fyzikální simulace, aby objekty měly správnou hmotnost.',
      },
      partial_int: {
        title: 'Per partes pro osvětlení',
        context: 'V Kaiově shaderu pro výpočet světla se objevuje integrál $\\int x \\cdot e^x\\,\\mathrm{d}x$ — součin, který nelze integrovat přímo.',
        step1: 'Zvolit rozklad: $u = x$ (derivováním se zjednoduší), $v\' = e^x$ (snadno se integruje):',
        step2: 'Určit derivace a primitivní funkce:',
        step3: 'Dosadit do vzorce — nový integrál je teď jen $\\int e^x\\,\\mathrm{d}x$:',
        step4: 'Doupravit — vytknutí dá elegantní tvar:',
        kai_comment: 'Ten okamžik, kdy je nový integrál jednodušší než starý — to je pocit úspěchu při per partes. Když se to zkomplikuje, zvolil jsi $u$ a $v\'$ špatně. Pak je stačí prohodit!',
      },
    },
    realworld: {
      '3d_printing': {
        title: '3D tisk a výpočet objemu v CAD',
        desc: 'Každá 3D tiskárna musí vědět, kolik materiálu potřebuje. U rotačně symetrických dílů (vázy, trubky, trysky) počítá slicovací software objem přesně tímto rotačním vzorcem. I v CAD programech jako Fusion 360 se skrývá integrální počet — když otočíš průřez, software počítá $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Úbytek světla v herních enginech',
        desc: 'Kolik celkového světla dostane scéna z bodového zdroje? Intenzita klesá podle $I(r) = I_0 \\cdot e^{-\\alpha r}$. Nevlastní integrál $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ ukazuje: celková energie je konečná! Proto mohou herní enginy simulovat světla s omezeným dosahem, aniž by byly fyzikálně mimo.',
      },
      terrain_volume: {
        title: 'Generování terénu a zemní práce',
        desc: 'U silničních staveb a ve hrách typu Minecraft je třeba počítat objem kopcovité krajiny. Vzorec $V = \\iint h(x,y)\\,\\mathrm{d}A$ sčítá výšku přes celou plochu — dvojrozměrný integrál. Stavební inženýři tak počítají výkop zeminy a herní vývojáři objem dat pro sítě terénu.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Zapomenuté umocnění: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Správně umocněno: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Každý kruhový plátek má obsah $\\pi r^2$ s $r = f(x)$. Bez umocnění nepočítáš obsah kruhu, ale něco úplně jiného. Pomůcka: „pí er na druhou" — druhá mocnina patří ke vzorci pro kruh!',
        kai_warning: 'Tuhle chybu jsem jednou udělal na game jamu — můj sloup měl jen zlomek správného objemu a ve fyzikální simulaci se složil. Od té doby si vzorec vždycky píšu velkými písmeny na monitor: $V = \\pi \\int [f(x)]^2$!',
      },
      improper_no_limit: {
        wrong: 'Dosazovat $\\infty$ přímo místo tvoření limity',
        correct: 'Správně zapsat limitu a ověřit konvergenci',
        why: '$\\infty$ není číslo, které lze dosadit! Vždy musíš utvořit limitu $\\lim_{b \\to \\infty}$ a ověřit, zda existuje. Jinak se snadno přehlédne, že integrál diverguje — jako $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, který navzdory klesající funkci nemá konečnou hodnotu.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: '3D svět „Hafenlichter 3D" nabývá tvaru: přístavní jeřáby, fasády budov, vodní hladiny — vše je složeno z trojúhelníků a každý trojúhelník leží v rovině. „Pro realistické osvětlení musím spočítat normálový vektor každé plochy," vysvětluje Kai. „A pro detekci kolizí potřebuji průsečíky přímek s rovinami." Vítejte v analytické geometrii prostoru — matematice za každým 3D enginem.',
      challenge: 'Kai musí sestavovat rovnice rovin ze tří bodů, počítat normálové vektory vektorovým součinem, hledat průsečíky přímky a roviny a určovat vzdálenosti mezi objekty — a to vše v reálném čase pro svůj herní engine.',
      outro: 'Kaiův systém detekce kolizí funguje bezchybně: projektily zasahují stěny, postavy stojí na podlaze a osvětlení počítá pro každou plochu dokonalý dopad světla přes normálové vektory. „Vektorový součin je můj nejpoužívanější nástroj," říká Kai. „Dva směrové vektory dovnitř, normálový vektor ven — a hned vím, jak plocha leží v prostoru." Amir dodává: „A vzorec pro vzdálenost ověří, jestli je hráč dost blízko objektu, aby ho mohl sebrat."',
    },
    objectives: {
      plane_equations: 'Sestavovat rovnice rovin v parametrickém, normálovém a obecném tvaru a převádět je mezi sebou',
      line_plane_intersection: 'Počítat průsečíky přímek s rovinami a určovat vzájemnou polohu',
      distances_3d: 'Počítat vzdálenosti v prostoru: bod-rovina, bod-přímka a přímka-přímka',
      cross_product: 'Ovládnout vektorový součin a využít ho k výpočtu normálového vektoru',
    },
    explanation: {
      intro: 'Roviny v trojrozměrném prostoru můžeš popsat několika způsoby. Parametrický tvar vychází z opěrného bodu $\\vec{a}$ a rozpíná rovinu dvěma směrovými vektory $\\vec{u}$ a $\\vec{v}$. Každého bodu roviny lze dosáhnout vhodnými hodnotami $r$ a $s$:',
      normal_form: 'Často elegantnější je normálový tvar: vektor $\\vec{n}$ kolmý k rovině (normálový vektor) a bod $\\vec{a}$ v rovině stačí k popisu celé roviny. Z toho lze odvodit obecný tvar — jedinou rovnici s $x_1$, $x_2$ a $x_3$:',
      kai_tip: 'Ve svém 3D enginu ukládám každou plochu v obecném tvaru — tři koeficienty a konstanta, a to je vše. K vykreslování potřebuji normálový vektor pro osvětlení ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$ — skalární součin s vektorem světla dá hodnotu jasu). A pro fyziku potřebuji průsečíky a vzdálenosti. Všechny tři tvary jsou užitečné — každý k jinému účelu!',
      cross_product: 'Vektorový součin $\\vec{u} \\times \\vec{v}$ dá vektor kolmý na oba vstupní vektory — ideální pro výpočet normálového vektoru ze dvou směrových vektorů. Pozor: pořadí je důležité (antikomutativita)!',
      distance_point_plane: 'Vzdálenost bodu $P$ od roviny $E$ lze elegantně spočítat Hesseho normálovým tvarem. Dosadíš bod do obecné rovnice, vezmeš absolutní hodnotu a vydělíš délkou normálového vektoru:',
    },
    concepts: {
      plane_equation: {
        title: 'Rovnice roviny v obecném tvaru',
        desc: 'Nejkompaktnější vyjádření roviny: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. Koeficienty $n_1, n_2, n_3$ jsou složky normálového vektoru a $d$ vyjde dosazením známého bodu roviny. Každý bod $(x_1, x_2, x_3)$, který rovnici splňuje, leží v rovině.',
      },
      cross_product: {
        title: 'Vektorový součin',
        desc: 'Vektorový součin dvou vektorů $\\vec{u}$ a $\\vec{v}$ dá nový vektor $\\vec{n}$, který je kolmý na oba. Jeho velikost $|\\vec{u} \\times \\vec{v}|$ odpovídá obsahu rozepnutého rovnoběžníku. Důležité: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ — pořadí určuje směr!',
      },
      distance_formula: {
        title: 'Vzdálenost bod-rovina',
        desc: 'Nejkratší vzdálenost bodu $P$ od roviny je délka kolmice z $P$ na rovinu. Vzorec $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ počítá tuto vzdálenost přímo z obecného tvaru. Absolutní hodnota v čitateli je zásadní — bez ní by mohla vyjít záporná „vzdálenost".',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Rovina ze tří vrcholů',
        context: 'Kai má ve svém herním světě trojúhelník s vrcholy $A(1|0|2)$, $B(3|1|0)$ a $C(0|4|1)$. Potřebuje rovnici roviny pro osvětlení a detekci kolizí.',
        step1: 'Dány tři body — vytvořit z nich dva směrové vektory:',
        step2: 'Spočítat směrové vektory $\\vec{u} = \\overrightarrow{AB}$ a $\\vec{v} = \\overrightarrow{AC}$:',
        step3: 'Podrobně spočítat vektorový součin $\\vec{n} = \\vec{u} \\times \\vec{v}$ — složku po složce podle vzorce:',
        step4: 'Sestavit obecný tvar — normálový vektor jako koeficienty, $d$ dosazením $A$: $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$:',
        kai_comment: 'V enginu se přesně tohle děje pro každý trojúhelník: tři vrcholy dovnitř, spočítat vektorový součin, rovina uložena. Normálový vektor zároveň určuje, kterým směrem plocha „hledí" — zásadní pro osvětlení a backface culling!',
      },
      collision_detection: {
        title: 'Průsečík přímky a roviny (raycast)',
        context: 'Projektil letí přímočaře prostorem. Kai musí ověřit, zda a kde zasáhne stěnu — to je raycast: průsečík přímky a roviny.',
        step1: 'Dány přímka (dráha letu) a rovina (stěna):',
        step2: 'Dosadit přímku do rovnice roviny — složky $\\vec{x}(t)$ místo $x_1, x_2, x_3$:',
        step3: 'Vyjádřit $t$ — sloučit a zjednodušit:',
        step4: 'Spočítat průsečík — dosadit $t = 0$ do rovnice přímky:',
        kai_comment: 'Při $t = 0$ zasáhne přímka rovinu okamžitě — projektil tedy startuje přímo u stěny. V enginu navíc kontroluji $t > 0$ (směr dopředu) a $0 \\leq t \\leq t_{\\max}$ (dosah). Tak odfiltruji zásahy za hráčem nebo mimo dosah.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: '3D vykreslování a osvětlení',
        desc: 'Každý 3D engine počítá osvětlení skalárním součinem normálového vektoru a směru světla: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Čím menší je úhel mezi světlem a normálou plochy, tím světlejší je plocha. To je Lambertův model osvětlení — základ realistického světla ve hrách, filmech a AR aplikacích.',
      },
      architecture: {
        title: 'Architektura a BIM software',
        desc: 'V architektonických programech jako AutoCAD nebo Revit se střešní plochy, stěny a rampy modelují jako roviny. Obecný tvar popisuje polohu v prostoru, normálový vektor ukazuje orientaci. Statici počítají rovnicemi rovin, jak síly působí na šikmé plochy — od střechy po mostovku.',
      },
      gps_navigation: {
        title: 'GPS a navigace dronů',
        desc: 'GPS souřadnice jsou trojrozměrné (délka, šířka, výška). Drony se pohybují po přímkách v 3D prostoru a musí rozpoznávat překážky — modelované jako roviny. Vzdálenost bod-rovina rozhoduje, zda se dron nedostane příliš blízko fasádě domu. Stejnou matematiku používají samořídící auta pro vyhodnocení LIDARu.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Ignorované pořadí: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Antikomutativní: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'Vektorový součin NENÍ komutativní — pořadí určuje směr výsledného vektoru (pravidlo pravé ruky). Prohození změní znaménko. To může vést k tomu, že normálové vektory ukazují špatným směrem, což převrátí celé osvětlení.',
        kai_warning: 'Tuhle chybu poznáš okamžitě: plochy osvětlené „zevnitř", zatímco vnější strana zůstává temná. Stává se, když normálový vektor ukazuje špatným směrem. Vždy dodržuj stejné pořadí — $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, nikdy naopak!',
      },
      distance_abs_forgotten: {
        wrong: 'Zapomenutá absolutní hodnota v čitateli: $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'S absolutní hodnotou: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: 'Vzdálenosti jsou vždy kladné! Bez absolutní hodnoty v čitateli může vyjít záporná hodnota, pokud bod leží na „druhé straně" roviny. V písemce to stojí body, v herním enginu to vede k objektům, které propadají stěnami.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Před vydáním „Hafenlichter 3D" přichází velký playtest: 200 testerů hraje týden a Kai musí učinit tvrdá rozhodnutí. Je vyvážení spravedlivé? Je míra pádů přijatelná? „Pocit nestačí," říká Mia. „Potřebuješ statistický test, který ti řekne, jestli je pozorovaný efekt skutečný — nebo jen náhoda." Vítejte u testování hypotéz: matematiky za rozhodnutími založenými na datech.',
      challenge: 'Kai musí rozhodnout, zda jsou pozorované rozdíly v playtestu statisticky významné. Je hrdina A opravdu slabší než hrdina B, nebo měl jen smůlu? Vzrostla nová míra pádů doopravdy? K tomu potřebuje nulové hypotézy, hladiny významnosti a práci s druhy chyb.',
      outro: 'Playtest je vyhodnocen: Kai statisticky prokázal, že hrdina A je příliš slabý ($p = 0{,}028 < 0{,}05$) a že míra pádů v novém buildu významně vzrostla. „Bez testů hypotéz bych ty problémy možná přehlédl," přiznává. Mia dodává: „Krása je v tom, že teď přesně víš, jak jisté je tvé rozhodnutí — hladina významnosti vyčísluje tvé riziko, že se mýlíš."',
    },
    objectives: {
      null_hypothesis: 'Správně stanovit nulovou a alternativní hypotézu a rozlišovat jednostranné a oboustranné testy',
      significance_level: 'Rozumět hladině významnosti $\\alpha$ a vykládat ji jako pravděpodobnost omylu',
      test_decision: 'Určovat kritické obory a systematicky provádět testová rozhodnutí',
      error_types: 'Rozlišovat chyby prvního a druhého druhu a chápat kompromis mezi $\\alpha$ a $\\beta$',
    },
    explanation: {
      intro: 'Test hypotéz je strukturovaný postup, jak na základě dat učinit rozhodnutí. Začneš s domněnkou (nulová hypotéza $H_0$), sesbíráš data a ověříš, zda data mluví proti $H_0$. Alternativní hypotéza $H_1$ popisuje to, co vlastně předpokládáš:',
      significance: 'Hladina významnosti $\\alpha$ je největší pravděpodobnost, s níž mylně zamítneš $H_0$ (chyba prvního druhu). Typické hodnoty jsou $\\alpha = 0{,}05$ (5\\%) nebo $\\alpha = 0{,}01$ (1\\%). Čím menší $\\alpha$, tím přísnější test — ale tím snáz přehlédneš skutečné efekty:',
      kai_tip: 'Představte si testy hypotéz jako antipodvodní systém: $H_0$ znamená „hráč NEPODVÁDÍ". $\\alpha = 0{,}05$ znamená: jen v 5\\% případů zabanuji poctivého hráče. Chci držet $\\alpha$ malé, abych chránil nevinné — ale když ho udělám příliš malé, skuteční podvodníci proklouznou. To je kompromis alfa-beta!',
      rejection_region: 'Kritický obor obsahuje všechny výsledky testu tak extrémní, že $H_0$ zamítneme. U levostranného testu ($H_1\\colon p < p_0$) leží kritický obor vlevo — spočítáš největší číslo $k$, pro které platí $P(X \\leq k) \\leq \\alpha$:',
      error_types: 'Mohou nastat dvě chyby: chyba prvního druhu ($\\alpha$) — zamítneš $H_0$, přestože platí („falešný poplach"). Chyba druhého druhu ($\\beta$) — ponecháš $H_0$, přestože platí $H_1$ („přehlédnutý efekt"). Při pevném rozsahu výběru $n$ platí: zmenšíš-li $\\alpha$, vzroste $\\beta$ — a naopak:',
    },
    concepts: {
      hypotheses: {
        title: 'Nulová a alternativní hypotéza',
        desc: '$H_0$ je předpoklad „současného stavu", který platí, dokud data nemluví proti němu. $H_1$ je to, co chceš vlastně ukázat. Levostranný test: $H_1\\colon p < p_0$. Pravostranný test: $H_1\\colon p > p_0$. Oboustranný test: $H_1\\colon p \\neq p_0$. Důležité: $H_1$ se nikdy „nedokazuje" — $H_0$ lze jen zamítnout nebo ponechat.',
      },
      significance_level: {
        title: 'Hladina významnosti $\\alpha$',
        desc: 'Horní mez pravděpodobnosti chyby prvního druhu. Při $\\alpha = 0{,}05$ přijímáš 5\\% riziko, že $H_0$ mylně zamítneš. Obvyklé hodnoty: $0{,}10$ (průzkumné), $0{,}05$ (standard), $0{,}01$ (přísné). $\\alpha$ se stanoví PŘED testem — nikdy se nedolaďuje dodatečně!',
      },
      error_types: {
        title: 'Chyby prvního a druhého druhu',
        desc: 'Chyba prvního druhu ($\\alpha$): $H_0$ je zamítnuta, přestože platí — „falešný poplach". Chyba druhého druhu ($\\beta$): $H_0$ je ponechána, přestože platí $H_1$ — „přehlédnutý efekt". Při pevném $n$ jdou $\\alpha$ a $\\beta$ proti sobě: menší $\\alpha$ znamená větší $\\beta$. Náprava: větší rozsah výběru $n$.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Test vyvážení: je hrdina A příliš slabý?',
        context: 'Ve 100 zápasech mezi hrdinou A a hrdinou B vyhraje hrdina A jen 40krát. Kai předpokládá, že hrdina A je znevýhodněn. Při spravedlivém vyvážení by mělo platit $p = 0{,}5$.',
        step1: 'Stanovit hypotézy a hladinu významnosti — levostranně, protože Kai předpokládá, že A je příliš slabý:',
        step2: 'Uspořádání pokusu: $n = 100$ zápasů, $X$ = počet vítězství hrdiny A, binomicky rozdělené:',
        step3: 'Spočítat pravděpodobnost $X \\leq 40$ za platnosti $H_0$ (kumulativní binomické rozdělení):',
        step4: 'Testové rozhodnutí: $p$-hodnota $0{,}028 < \\alpha = 0{,}05$ — $H_0$ se zamítá. Hrdina A je významně příliš slabý:',
        kai_comment: 'To byl ten statistický důkaz, který jsem potřeboval pro tým vyvážení. 40 ze 100 vypadá „skoro v pohodě", ale test ukazuje: při spravedlivém vyvážení by se tak extrémní výsledek objevil jen ve 2{,}8\\% případů. To stačí na oslabující aktualizaci!',
      },
      crash_rate: {
        title: 'Ověření míry pádů po aktualizaci',
        context: 'Po patchi má být míra pádů nejvýše 2\\%. Ve 200 testovacích sezeních hra spadne 8krát. Je to příliš?',
        step1: 'Stanovit hypotézy — pravostranně, protože Kai chce ověřit, zda míra leží NAD 2\\%:',
        step2: 'Data: $n = 200$ sezení, $X = 8$ pádů (pozorováno: $\\hat{p} = 4\\%$):',
        step3: 'Spočítat pravděpodobnost $X \\geq 8$ za platnosti $H_0$ — to je $p$-hodnota:',
        step4: 'Testové rozhodnutí: $p$-hodnota $0{,}042 < \\alpha = 0{,}05$ — míra pádů je významně zvýšená:',
        kai_comment: 'Bez testu bych možná řekl „8 pádů na 200 sezení, to je v pohodě". Ale test hypotéz ukazuje: pravděpodobnost, že při skutečné 2\\% míře uvidíme tolik pádů, je pod 5\\%. Patch se musí ještě jednou přepracovat.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B testování v aplikacích a na webech',
        desc: 'Pokaždé, když Netflix změní tlačítko „Přehrát" nebo Spotify testuje nové zobrazení playlistu, běží test hypotéz. Verze A proti verzi B: která má víc kliknutí? $p$-hodnota rozhoduje, zda je rozdíl skutečný, nebo jen náhodné kolísání. Také TikTok, YouTube a Instagram používají A/B testy — každá funkce, kterou vidíš, prošla testem významnosti.',
      },
      quality_assurance: {
        title: 'Kontrola kvality ve výrobě',
        desc: 'V továrnách se neustále testuje: je zmetkovitost pod mezní hodnotou? Odpovídá hmotnost náplně sáčku chipsů natištěné hodnotě? Testy hypotéz chrání spotřebitele — a firmy před drahým stahováním z trhu. Za každou výběrovou kontrolou stojí stejná matematika, kterou se tady učíte.',
      },
      clinical_trials: {
        title: 'Klinické studie a léky',
        desc: 'Než se lék schválí, musí projít testem hypotéz: $H_0$ říká „lék nepůsobí lépe než placebo". Jen když $p$-hodnota klesne pod $\\alpha = 0{,}05$, považuje se účinnost za prokázanou. Přísná pravidla ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) chrání pacienty před neúčinnými léky — ale i před předčasným zamítnutím účinných terapií.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ „dokázána": $p > \\alpha$ znamená, že $H_0$ je pravdivá',
        correct: 'Správně formulováno: $p > \\alpha$ znamená, že $H_0$ nelze zamítnout',
        why: 'Test hypotéz nemůže $H_0$ nikdy dokázat — jen zamítnout nebo ponechat. „Nezamítnout" znamená: data nestačí k vyvrácení $H_0$. Možná je efekt příliš malý, možná je výběr příliš malý. Proto se říká „ponechat" nebo „nezamítnout", nikdy „přijmout" či „dokázáno".',
        kai_warning: 'Je to jako presumpce neviny u soudu: „nevinen" neznamená „je nevinný" — znamená to jen, že důkazy nestačí. Stejně je to s $H_0$: když nedokážu, že hrdina A je slabší, neznamená to automaticky, že je dokonale vyvážený!',
      },
      alpha_beta_confused: {
        wrong: 'Domněnka: menší $\\alpha$ automaticky vše zlepší',
        correct: 'Skutečnost: menší $\\alpha$ vede při pevném $n$ k většímu $\\beta$',
        why: 'Když test zpřísníš (menší $\\alpha$), potřebuješ extrémnější data k zamítnutí $H_0$. Tím roste pravděpodobnost, že přehlédneš skutečný efekt ($\\beta$ stoupá). Jediné východisko: větší výběr $n$ — tak můžeš držet malé jak $\\alpha$, tak $\\beta$.',
      },
    },
  },
};
