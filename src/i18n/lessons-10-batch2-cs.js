export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia zírá na obrazovku. Architektura úrovní "Hafenlichter" potřebuje 3D objekty — skladiště, jeřáby, kontejnery. Tim vymodeloval meshe, ale Lumi se ptá: "Kolik paměti potřebuje každý hitbox?" Mia se usměje: "Na to potřebujeme vzorce pro objem."',
      challenge: 'Vypočítej objemy a povrchy jehlanů, kuželů a koulí. Pomoz Mii postavit perfektní 3D hitboxy pro její přístavní čtvrť!',
      outro: '3D tělesa jsou spočítaná, hitboxy sedí. Tim testuje úroveň s jeřábem a volá: "Kolize konečně působí realisticky!" Mia se opře — geometrie dělá hry lepšími.',
    },
    objectives: {
      volume_pyramid: 'Počítat objem jehlanu pomocí vzorce s třetinou',
      volume_cone_sphere: 'Bezpečně určit objemy kuželů a koulí',
      surface_area: 'Aplikovat vzorce pro povrch a interpretovat výsledky',
      apply_3d: 'Přenést výpočty těles na každodenní problémy a herní design',
    },
    explanation: {
      intro: 'Trojrozměrná tělesa mají objem (prostorový obsah) a povrch. U jehlanů a kuželů je klíčový faktor: $\\frac{1}{3}$. Pochází z toho, že se tato tělesa "zužují" — vyplní jen třetinu obalujícího hranolu či válce.',
      cone: 'Kužel je jako "kulatý jehlan" — jeho podstava je kruh o poloměru $r$. Vzorec má stejnou strukturu: třetina krát podstava krát výška, pouze podstava je $\\pi r^2$.',
      mia_tip: 'Mia: "Pamatuju si to takto: Jehlan a kužel jsou skromní sourozenci hranolu a válce — zabírají jen třetinu místa!"',
      sphere: 'Koule je speciální případ: nemá klasickou podstavu ani výšku. Její objem závisí jen na poloměru. Archimédes dokázal, že koule vyplní přesně $\\frac{2}{3}$ obalujícího válce — z toho plyne vzorec.',
    },
    concepts: {
      pyramid: {
        title: 'Objem jehlanu',
        desc: 'Jehlan má třetinu objemu hranolu se stejnou podstavou a výškou. Podstava může být obdélník, trojúhelník nebo libovolný mnohoúhelník.',
      },
      cone: {
        title: 'Objem kužele',
        desc: 'Kužel se chová k válci jako jehlan k hranolu: vyplní přesně třetinu. Jeho kruhová podstava ho činí zvlášť symetrickým.',
      },
      sphere: {
        title: 'Objem koule',
        desc: 'Kouli zcela popisuje její poloměr. $\\frac{4}{3}$ ve vzorci pochází z integrace — nebo z geniálního Archimédova důkazu.',
      },
    },
    examples: {
      icecream: {
        title: 'Výpočet zmrzlinového kornoutu',
        context: 'Zmrzlinový kornout má tvar kužele o poloměru $r = 3$ cm a výšce $h = 12$ cm. Kolik zmrzliny se vejde?',
        step1: 'Identifikujeme data: Kornout je kužel s $r = 3$ cm a $h = 12$ cm.',
        step2: 'Použijeme vzorec pro kužel: Dosadíme do $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ a nejdřív vypočteme výraz v závorce.',
        step3: 'Výsledek: Kornout pojme přibližně $113{,}1\\,\\text{cm}^3$ zmrzliny — to je o něco víc než decilitr.',
        mia_comment: 'Mia: "Hm, takový kornout pojme překvapivě málo! Proto na něj vždy přidávají kopeček."',
      },
      hitbox: {
        title: 'Kulovitý hitbox',
        context: 'V "Hafenlichter" má bóje mít kulovitý hitbox o objemu $V = 904{,}8\\,\\text{cm}^3$. Jak velký musí být poloměr?',
        step1: 'Dané: Objem koule je $V = 904{,}8\\,\\text{cm}^3$. Hledáme: poloměr $r$.',
        step2: 'Převedeme vzorec: Vyřešíme $V = \\frac{4}{3} \\pi r^3$ pro $r^3$ dělením $\\frac{4}{3}\\pi$.',
        step3: 'Vypočteme: $r^3 \\approx 215{,}9$ — teď vezmeme třetí odmocninu.',
        step4: 'Výsledek: $r \\approx 6{,}0$ cm. Hitbox potřebuje poloměr 6 cm.',
        mia_comment: 'Mia: "Počítání pozpátku je při herním designu běžná věc — víš, co chceš, a musíš najít parametry."',
      },
    },
    realworld: {
      packaging: {
        title: 'Design obalů',
        desc: 'Plechovky na nápoje, konzervy, láhve — všude se skrývá výpočet válce. Výrobci optimalizují poměr objemu ke spotřebě materiálu, aby ušetřili náklady.',
      },
      icecream: {
        title: 'Matematika kopečku zmrzliny',
        desc: 'Proč "velký" kopeček zmrzliny vypadá o tolik větší? Protože objem roste s $r^3$! Dvojnásobný poloměr = osminásobný objem. To také vysvětluje, proč jsou XXL menu tak výdělečná.',
      },
      pizza: {
        title: 'Porovnání pizz',
        desc: 'Pizza o průměru 30 cm má větší plochu než dvě pizzy o průměru 20 cm dohromady! $\\pi \\cdot 15^2 = 706{,}9$ vs. $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Velikost se vyplatí.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Zapomenutí na faktor $\\frac{1}{3}$',
        correct: 'U kuželů a jehlanů VŽDY $\\frac{1}{3}$ na začátku',
        why: 'Kužel a jehlan vyplní jen třetinu obalujícího válce či hranolu. Bez tohoto faktoru počítáš objem celého válce — třikrát příliš!',
        mia_warning: 'Mia: "Jednou jsem spočítala všechny hitboxy bez té třetiny. Bóje byly obrovské a blokovaly celý přístavní bazén. Tim z toho nebyl nadšený."',
      },
      surface_volume: {
        wrong: 'Záměna vzorců pro povrch a objem koule',
        correct: 'Objem: $\\frac{4}{3}\\pi r^3$ — Povrch: $4\\pi r^2$',
        why: 'U objemu stojí $r^3$ (kubický, tedy prostorový obsah), u povrchu $r^2$ (kvadratický, tedy plošný obsah). Dívej se na exponent — prozradí ti, co počítáš.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule optimalizuje paměť "Hafenlichter". "Naše textury spotřebují 2 na 20 bajtů — kolik to vlastně je?" Tim počítá: "Moment, mocniny umím..." Mia se směje: "Tak ukaž, co dovedeš."',
      challenge: 'Zvládni pravidla mocnin: násob, umocňuj a zjednodušuj mocniny. Pomoz Timovi bleskově počítat velikosti paměti a časy renderu!',
      outro: 'Tim má pravidla mocnin v malíčku. Výpočty paměti teď jdou v sekundách. "Mocniny jsou jako cheat kódy pro velká čísla", říká. Mia přikyvuje: "A pro malá také — vítej u záporných exponentů."',
    },
    objectives: {
      multiply_powers: 'Násobit a dělit mocniny se stejným základem',
      power_of_power: 'Zjednodušovat mocninu mocniny pravidlem násobení',
      negative_exponents: 'Interpretovat záporné exponenty jako zlomky a převádět',
      apply_memory: 'Aplikovat pravidla mocnin na velikosti paměti a vědecký zápis',
    },
    explanation: {
      intro: 'Mocniny jsou zkrácený zápis opakovaného násobení: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Když násobíš dvě mocniny se stejným základem, sčítáš exponenty — protože prostě prodlužuješ řetěz násobení.',
      power_of_power: 'Co se stane, když umocníš mocninu? $(a^m)^n$ znamená: Násobíš $a^m$ přesně $n$-krát sebou samým. To dává $m \\cdot n$ činitelů — tedy $a^{m \\cdot n}$. Exponenty se násobí.',
      mia_tip: 'Mia: "Stejný základ → exponenty sčítat. Mocnina na mocninu → exponenty násobit. Různé základy → dopočítat, zkratka neexistuje!"',
      negative: 'Záporný exponent obrací mocninu: $a^{-n} = \\frac{1}{a^n}$. To není libovolná definice — logicky plyne ze vzoru: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Každý krok dělí základem.',
    },
    concepts: {
      product_rule: {
        title: 'Pravidlo součinu',
        desc: 'Stejný základ, různé exponenty? Při násobení se exponenty sčítají, při dělení odčítají. Funguje to JEN při stejném základu!',
      },
      power_rule: {
        title: 'Pravidlo mocniny',
        desc: 'Mocnina se znovu umocní? Pak násob exponenty. $(a^3)^4 = a^{12}$ — dvanáct činitelů $a$ celkem.',
      },
      negative_exp: {
        title: 'Záporný exponent',
        desc: 'Minus v exponentu znamená "jedna dělená". Tak se z velkých čísel stávají malá: $10^{-6}$ je miliontina. Perfektní pro mikročipy a milisekundy.',
      },
    },
    examples: {
      simplify: {
        title: 'Výpočet paměti',
        context: 'Tim chce vědět: Kolik je $2^3 \\cdot 2^4$ bajtů? V informatice je to typický výpočet s mocninami dvojky.',
        step1: 'Pravidlo součinu: Stejný základ $2$, takže sčítáme exponenty: $3 + 4 = 7$.',
        step2: 'Vypočteme: $2^7 = 128$ bajtů.',
        step3: 'Zařazení: 128 bajtů — to je skoro 1 kilobajt (to by bylo přesně $2^{10} = 1024$).',
        mia_comment: 'Mia: "V informatice jsou mocniny dvojky všude. RAM, textury, barevná hloubka — vše mocniny 2!"',
      },
      negative: {
        title: 'Převod milisekund',
        context: 'Snímek v "Hafenlichter" se počítá za $10^{-3}$ sekundy. Co to znamená v desetinném zápisu?',
        step1: 'Aplikujeme záporný exponent: $10^{-3}$ znamená $\\frac{1}{10^3}$.',
        step2: 'Vypočteme: $\\frac{1}{1000} = 0{,}001$ sekundy.',
        step3: 'Zařazení: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — jedna milisekunda. Při 60 fps má každý snímek přibližně 16 ms času.',
        mia_comment: 'Mia: "Záporné exponenty znějí děsivě, ale znamenají prostě: malá čísla. $10^{-3}$ = mili, $10^{-6}$ = mikro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Digitální úložiště',
        desc: 'Tvůj telefon má 256 GB? To je $2^{38}$ bajtů, tedy přes 274 miliard bajtů. Každé zdvojnásobení paměti je jen +1 u exponentu — proto technologie rostou tak rychle.',
      },
      richter: {
        title: 'Richterova stupnice',
        desc: 'Zemětřesení o síle 6 není dvakrát tak silné jako síla 3 — je tisíckrát silnější! Každý stupeň znamená $10 \\times$ více energie. Mocniny ukazují ten rozdíl.',
      },
      decibel: {
        title: 'Decibely a hlasitost',
        desc: 'Sluchátka na 100 dB jsou $10^{10}$-krát intenzivnější než práh slyšitelnosti (0 dB). Každých +10 dB = desetinásobná intenzita. Tvůj sluch počítá logaritmicky — tedy mocninami!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Násobení základů místo sčítání exponentů',
        correct: 'Pravidlo součinu platí JEN při stejném základu',
        why: 'U $2^3 \\cdot 3^2$ jsou základy různé (2 a 3). Tady nemůžeš použít pravidlo mocnin — musíš počítat zvlášť: $8 \\cdot 9 = 72$. Sčítání exponentů a násobení základů je častá chyba!',
        mia_warning: 'Mia: "Různé základy = žádná zkratka. Tečka. Jednou jsem to v kódu udělala špatně a všechny textury byly zničené."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "na nultou je nula"',
        correct: '$a^0 = 1$ pro všechna $a \\neq 0$',
        why: 'Sleduj vzor: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — každý krok dělí dvěma. Takže $2^0 = 1$. To platí pro KAŽDÝ základ (kromě 0). Nula je neutrální prvek sčítání, ne násobení.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia prochází knihovnu assetů "Hafenlichter". Hamburská Speicherstadt má budovy všech velikostí — ale všechny by měly vypadat proporcionálně. Lumi se ptá: "Nemůžeme prostě vše zmenšit?" Mia přikyvuje: "Přesně. To je podobnost."',
      challenge: 'Pochop podobné trojúhelníky, faktory změny měřítka a větu o úsecích. Pomoz Mii proporcionálně změnit měřítko přístavní čtvrti!',
      outro: 'Speicherstadt v "Hafenlichter" vypadá fantasticky — každá budova je proporcionální, každý most pasuje. Jule obdivuje výsledek: "Jako by to byl skutečný model!" Mia se usměje: "Taky je. Matematicky přesný."',
    },
    objectives: {
      similar_triangles: 'Rozpoznávat podobné trojúhelníky a popsat jejich vlastnosti',
      scale_factor: 'Počítat a aplikovat faktor změny měřítka $k$',
      intercept_theorem: 'Aplikovat větu o úsecích na geometrické problémy',
      apply_scaling: 'Využívat podobnost v architektuře, kartografii a herním designu',
    },
    explanation: {
      intro: 'Dva útvary jsou podobné, když mají stejný tvar, ale mohou se lišit velikostí. U trojúhelníků stačí, aby se shodovaly všechny úhly — pak jsou automaticky všechny poměry stran stejné. Poměr obrazu k originálu se nazývá faktor změny měřítka $k$.',
      scale_factor: 'Faktor změny měřítka $k$ ti říká, jak moc bylo zvětšeno nebo zmenšeno. $k > 1$ znamená zvětšení, $k < 1$ zmenšení, $k = 1$ znamená shodnost (stejné rozměry). Důležité: $k$ se týká délek — plochy se škálují s $k^2$, objemy s $k^3$!',
      mia_tip: 'Mia: "V herním enginu neustále pracujeme s faktory měřítka. Sprite se scale 0.5 je dvakrát menší, scale 2.0 dvakrát větší. Přesně jako v geometrii!"',
      intercept: 'Věta o úsecích popisuje, co se stane, když rovnoběžné přímky protínají dva paprsky: úseky na paprscích jsou proporcionální. Tím můžeš vypočítat neznámé úseky, aniž bys vše přeměřoval.',
    },
    concepts: {
      similar_triangles: {
        title: 'Podobné trojúhelníky',
        desc: 'Dva trojúhelníky jsou podobné, když se shodují ve všech úhlech. Pak platí: Všechny poměry stran jsou stejné. Zapisujeme $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Faktor změny měřítka',
        desc: 'Faktor $k = \\frac{\\text{Obraz}}{\\text{Originál}}$ popisuje zvětšení nebo zmenšení. $k = 2$ znamená: vše dvakrát větší. $k = 0{,}5$ znamená: vše dvakrát menší.',
      },
      intercept_theorem: {
        title: 'Věta o úsecích',
        desc: 'Pokud dva paprsky protínají rovnoběžné přímky, vznikající úseky jsou proporcionální. Mocný nástroj pro výpočet chybějících délek.',
      },
    },
    examples: {
      model: {
        title: 'Škálování budovy',
        context: 'Hamburský sklad je postaven jako 3D model v měřítku $1:100$. Model je $3{,}5$ cm vysoký. Jak vysoká je skutečná budova?',
        step1: 'Určíme faktor měřítka: $k = \\frac{1}{100}$ znamená, že model je 100krát menší než originál.',
        step2: 'Odečteme výšku modelu: $h_{\\text{Model}} = 3{,}5$ cm.',
        step3: 'Přepočteme zpět: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Budova je 3,5 metru vysoká.',
        mia_comment: 'Mia: "Přesně tak pracujeme v Hafenlichter. Stavíme Speicherstadt jako model a vše proporcionálně škálujeme do hry."',
      },
      intercept: {
        title: 'Aplikace věty o úsecích',
        context: 'Dva paprsky protínají rovnoběžné přímky. Úseky na jednom paprsku jsou 4 a 6, na druhém je první úsek 9. Jak dlouhý je druhý úsek $x$?',
        step1: 'Sestavíme větu o úsecích: Poměry úseků na obou paprscích jsou stejné: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Násobení křížem: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Výsledek: $x = 6$. Druhý úsek má 6 jednotek délky.',
        mia_comment: 'Mia: "Věta o úsecích je jako Auto-Layout v herním enginu — zadáš poměr a vše ostatní se proporcionálně přizpůsobí."',
      },
    },
    realworld: {
      maps: {
        title: 'Mapy a navigace',
        desc: 'Google Maps zobrazuje svět v měřítku. Úroveň přiblížení 15 odpovídá přibližně $1:18.000$. Každá úroveň přiblížení zdvojnásobuje faktor měřítka — přesně jako podobnost v geometrii.',
      },
      architecture: {
        title: 'Architektonické modely',
        desc: 'Než byla postavena Labská filharmonie, existovaly modely v měřítku $1:500$. Architekti využívají podobnost k odvození reálných rozměrů z malých modelů — a naopak.',
      },
      instagram: {
        title: 'Škálování obrázků',
        desc: 'Když ořízneš fotku pro Instagram, mění se měřítko. "Přizpůsobit obrazovce" škáluje proporcionálně (podobně), "Roztáhnout" deformuje (nepodobně). Tvoje oko ten rozdíl okamžitě pozná!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Podobný" a "shodný" je totéž',
        correct: 'Podobný = stejný tvar. Shodný = stejný tvar A stejná velikost',
        why: 'Shodnost je speciální případ podobnosti s $k = 1$. Všechny shodné trojúhelníky jsou podobné, ale ne všechny podobné trojúhelníky jsou shodné. Podobný znamená: stejné úhly, ale strany mohou mít proporcionálně různé délky.',
        mia_warning: 'Mia: "V herním enginu: Shodný = Kopírovat. Podobný = Kopírovat + Škálovat. Když zkopíruješ dům a škáluješ ho, je podobný. Bez škálování je shodný."',
      },
      scale_direction: {
        wrong: 'Faktor měřítka sestavený naopak',
        correct: 'Vždy $k = \\frac{\\text{Obraz}}{\\text{Originál}}$',
        why: 'Pokud je obraz větší než originál, $k$ musí být $> 1$. Pokud zlomek otočíš, dostaneš $k < 1$ a budeš si myslet, že bylo zmenšeno. Zapamatuj si: Obraz nahoře, originál dole.',
      },
    },
  },
};
