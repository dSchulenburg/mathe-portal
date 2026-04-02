export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia zira na obrazovku. Architektura urovni "Hafenlichter" potrebuje 3D objekty — skladiste, jeraby, kontejnery. Tim namodelowal meshe, ale Lumi se pta: "Kolik pameti potrebuje kazdy hitbox?" Mia se usmeji: "Na to potrebujeme vzorce pro objem."',
      challenge: 'Vypocitej objemy a povrchy jehlanù, kuzelu a kouli. Pomoz Mii postavit perfektni 3D hitboxy pro jeji pristavni ctvrt!',
      outro: '3D telesa jsou spocitana, hitboxy sedi. Tim testuje uroven s jerabem a vola: "Kolize konecne pusobi realisticky!" Mia se opre — geometrie dela hry lepsimi.',
    },
    objectives: {
      volume_pyramid: 'Pocitat objem jehlanu pomoci vzorce s tretinou',
      volume_cone_sphere: 'Bezpecne urcit objemy kuzelu a kouli',
      surface_area: 'Aplikovat vzorce pro povrch a interpretovat vysledky',
      apply_3d: 'Prenest vypocty teles na kazdodenni problemy a herní design',
    },
    explanation: {
      intro: 'Trojrozmerna telesa maji objem (prostorovy obsah) a povrch. U jehlanu a kuzelu je klicovy faktor: $\\frac{1}{3}$. Pochazi z toho, ze se tato telesa "zuzuji" — vyplni jen tretinu obalujiciho hranolu ci valce.',
      cone: 'Kuzel je jako "kulaty jehlan" — jeho zakladna je kruh o polomeru $r$. Vzorec ma stejnou strukturu: tretina krat zakladna krat vyska, pouze zakladna je $\\pi r^2$.',
      mia_tip: 'Mia: "Pamatuju si to takto: Jehlan a kuzel jsou skromni sourozenci hranolu a valce — zabiraji jen tretinu mista!"',
      sphere: 'Koule je specialni pripad: nema klasickou zakladnu ani vysku. Jeji objem zavisi jen na polomeru. Archimedes dokazal, ze koule vyplni presne $\\frac{2}{3}$ obalujiciho valce — z toho plyne vzorec.',
    },
    concepts: {
      pyramid: {
        title: 'Objem jehlanu',
        desc: 'Jehlan ma tretinu objemu hranolu se stejnou zakladnou a vyskou. Zakladna muze byt obdelnik, trojuhelnik nebo libovolny mnohouhelnik.',
      },
      cone: {
        title: 'Objem kuzelu',
        desc: 'Kuzel se chova k valci jako jehlan k hranolu: vyplni presne tretinu. Jeho kruhova zakladna ho cini zvlast symetrickym.',
      },
      sphere: {
        title: 'Objem koule',
        desc: 'Kouli zcela popisuje jeji polomer. $\\frac{4}{3}$ ve vzorci pochazi z integrace — nebo z genialniho Archimedova dukazu.',
      },
    },
    examples: {
      icecream: {
        title: 'Vypocet zmrzlinoveho kornoutu',
        context: 'Zmrzlinovy kornout ma tvar kuzelu o polomeru $r = 3$ cm a vysce $h = 12$ cm. Kolik zmrzliny se vejde?',
        step1: 'Identifikujeme data: Kornout je kuzel s $r = 3$ cm a $h = 12$ cm.',
        step2: 'Pouzijeme vzorec pro kuzel: Dosadime do $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ a nejdriv vypocteme vyraz v zavorce.',
        step3: 'Vysledek: Kornout pojme priblizne $113{,}1\\,\\text{cm}^3$ zmrzliny — to je o neco vic nez decilitr.',
        mia_comment: 'Mia: "Hm, takovy kornout pojme prekvapive malo! Proto na nej vzdy pridavaji kouli."',
      },
      hitbox: {
        title: 'Kulovity hitbox',
        context: 'V "Hafenlichter" ma boje mit kulovity hitbox o objemu $V = 904{,}8\\,\\text{cm}^3$. Jak velky musi byt polomer?',
        step1: 'Dane: Objem koule je $V = 904{,}8\\,\\text{cm}^3$. Hledame: polomer $r$.',
        step2: 'Prevedeme vzorec: Vyresime $V = \\frac{4}{3} \\pi r^3$ pro $r^3$ delenim $\\frac{4}{3}\\pi$.',
        step3: 'Vypocteme: $r^3 \\approx 215{,}9$ — ted vezmeme treti odmocninu.',
        step4: 'Vysledek: $r \\approx 6{,}0$ cm. Hitbox potrebuje polomer 6 cm.',
        mia_comment: 'Mia: "Pocitani pozpatku je pri hernim designu bezna vec — vis, co chces, a musis najit parametry."',
      },
    },
    realworld: {
      packaging: {
        title: 'Design obalù',
        desc: 'Plechovky na napoje, konzervy, lahve — vsude se skryva vypocet valce. Vyrobci optimalizuji pomer objemu k spotrebe materialu, aby usetri naklady.',
      },
      icecream: {
        title: 'Matematika kopecku zmrzliny',
        desc: 'Proc "velky" kopecek zmrzliny vypada o tolik vetsi? Protoze objem roste s $r^3$! Dvojnasobny polomer = osmnasobny objem. To take vysvetluje, proc jsou XXL menu tak vydelecna.',
      },
      pizza: {
        title: 'Porovnani pizz',
        desc: 'Pizza o prumeru 30 cm ma vetsi plochu nez dve pizzy o prumeru 20 cm dohromady! $\\pi \\cdot 15^2 = 706{,}9$ vs. $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Velikost se vyplati.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Zapomenuti na faktor $\\frac{1}{3}$',
        correct: 'U kuzelu a jehlanu VZDY $\\frac{1}{3}$ na zacatku',
        why: 'Kuzel a jehlan vyplni jen tretinu obalujiciho valce ci hranolu. Bez tohoto faktoru pocitas objem celeho valce — trikrat prilis!',
        mia_warning: 'Mia: "Jednou jsem spocitala vsechny hitboxy bez te tretiny. Boje byly obrovsky a blokovaly cely pristavni bazen. Tim z toho nebyl nadseny."',
      },
      surface_volume: {
        wrong: 'Zamena vzorcu pro povrch a objem koule',
        correct: 'Objem: $\\frac{4}{3}\\pi r^3$ — Povrch: $4\\pi r^2$',
        why: 'U objemu stoji $r^3$ (kubicky, tedy prostorovy obsah), u povrchu $r^2$ (kvadraticky, tedy plostny obsah). Divej se na exponent — prozradi ti, co pocitas.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule optimalizuje pamet "Hafenlichter". "Nase textury spotrebuji 2 na 20 bytu — kolik to vlastne je?" Tim pocita: "Moment, mocniny umim..." Mia se smeji: "Tak ukaz, co dovedeš."',
      challenge: 'Zvladni pravidla mocnin: nasob, umocnuj a zjednodusuj mocniny. Pomoz Timovi bleskove pocitat velikosti pameti a casy renderu!',
      outro: 'Tim ma pravidla mocnin v malicku. Vypocty pameti ted jdou v sekundach. "Mocniny jsou jako cheat kody pro velka cisla", rika. Mia prikyvuje: "A pro mala take — vitej u zapornych exponentu."',
    },
    objectives: {
      multiply_powers: 'Nasobit a delit mocniny se stejnym zakladem',
      power_of_power: 'Zjednodusovat mocninu mocniny pravidlem nasobeni',
      negative_exponents: 'Interpretovat zaporne exponenty jako zlomky a prevadet',
      apply_memory: 'Aplikovat pravidla mocnin na velikosti pameti a vedecky zapis',
    },
    explanation: {
      intro: 'Mocniny jsou zkraceny zapis opakovaného násobení: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Kdyz nasobis dve mocniny se stejnym zakladem, scitas exponenty — protoze proste prodluzujes retez nasobeni.',
      power_of_power: 'Co se stane, kdyz umocnis mocninu? $(a^m)^n$ znamena: Nasobis $a^m$ presne $n$-krat sebou samym. To dava $m \\cdot n$ cinitelu — tedy $a^{m \\cdot n}$. Exponenty se nasobi.',
      mia_tip: 'Mia: "Stejny zaklad → exponenty scitat. Mocnina na mocninu → exponenty nasobit. Ruzne zaklady → dopocitat, zkratka neexistuje!"',
      negative: 'Zaporny exponent obraci mocninu: $a^{-n} = \\frac{1}{a^n}$. To neni libovolna definice — logicky plyne ze vzorce: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Kazdy krok deli zakladem.',
    },
    concepts: {
      product_rule: {
        title: 'Pravidlo soucinu',
        desc: 'Stejny zaklad, ruzne exponenty? Pri nasobeni se exponenty scitaji, pri deleni odcitaji. Funguje to JEN pri stejnem zakladu!',
      },
      power_rule: {
        title: 'Pravidlo mocniny',
        desc: 'Mocnina se znovu umocni? Pak nasob exponenty. $(a^3)^4 = a^{12}$ — dvanact cinitelu $a$ celkem.',
      },
      negative_exp: {
        title: 'Zaporny exponent',
        desc: 'Minus v exponentu znamena "jedna delena". Tak se z velkych cisel stavaji mala: $10^{-6}$ je miliontina. Perfektni pro mikrocipy a milisekundy.',
      },
    },
    examples: {
      simplify: {
        title: 'Vypocet pameti',
        context: 'Tim chce vedet: Kolik je $2^3 \\cdot 2^4$ bytu? V informatice je to typicky vypocet s mocninami dvojky.',
        step1: 'Pravidlo soucinu: Stejny zaklad $2$, takze scitame exponenty: $3 + 4 = 7$.',
        step2: 'Vypocteme: $2^7 = 128$ bytu.',
        step3: 'Zarazeni: 128 bytu — to je skoro 1 kilobajt (to by bylo presne $2^{10} = 1024$).',
        mia_comment: 'Mia: "V informatice jsou mocniny dvojky vsude. RAM, textury, barevna hloubka — vse mocniny 2!"',
      },
      negative: {
        title: 'Prevod milisekund',
        context: 'Snimek v "Hafenlichter" se pocita za $10^{-3}$ sekundy. Co to znamena v desitkovem zapisu?',
        step1: 'Aplikujeme zaporny exponent: $10^{-3}$ znamena $\\frac{1}{10^3}$.',
        step2: 'Vypocteme: $\\frac{1}{1000} = 0{,}001$ sekundy.',
        step3: 'Zarazeni: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — jedna milisekunda. Pri 60 fps ma kazdy snimek priblizne 16 ms casu.',
        mia_comment: 'Mia: "Zaporne exponenty zneji desive, ale znamenaji proste: mala cisla. $10^{-3}$ = mili, $10^{-6}$ = mikro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Digitalni uloziste',
        desc: 'Tvuj telefon ma 256 GB? To je $2^{38}$ bytu, tedy pres 274 miliard bytu. Kazde zdvojnasobeni pameti je jen +1 u exponentu — proto technologie rostou tak rychle.',
      },
      richter: {
        title: 'Richterova stupnice',
        desc: 'Zemetreseni o sile 6 neni dvakrat tak silne jako sila 3 — je tisickrat silnejsi! Kazdy stupen znamena $10 \\times$ vice energie. Mocniny ukazuji ten rozdil.',
      },
      decibel: {
        title: 'Decibely a hlasitost',
        desc: 'Sluchatka na 100 dB jsou $10^{10}$-krat intenzivnejsi nez prah slysilnosti (0 dB). Kazdych +10 dB = desetinasobna intenzita. Tvuj sluch pocita logaritmicky — tedy mocninami!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Nasobeni zakladu misto scitani exponentu',
        correct: 'Pravidlo soucinu plati JEN pri stejnem zakladu',
        why: 'U $2^3 \\cdot 3^2$ jsou zaklady ruzne (2 a 3). Tady nemuzes pouzit pravidlo mocnin — musis pocitat zvlast: $8 \\cdot 9 = 72$. Scitani exponentu a nasobeni zakladu je casta chyba!',
        mia_warning: 'Mia: "Ruzne zaklady = zadna zkratka. Tecka. Jednou jsem to v kodu udelala spatne a vsechny textury byly znicene."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "na nultou je nula"',
        correct: '$a^0 = 1$ pro vsechna $a \\neq 0$',
        why: 'Sleduj vzorec: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — kazdy krok deli dvema. Takze $2^0 = 1$. To plati pro KAZDY zaklad (krome 0). Nula je neutralni prvek scitani, ne nasobeni.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia prochazi knihovnu assetu "Hafenlichter". Hamburska Speicherstadt ma budovy vsech velikosti — ale vsechny by mely vypadat proporcionalne. Lumi se pta: "Nemuzeme proste vse zmensit?" Mia prikyvuje: "Presne. To je podobnost."',
      challenge: 'Pochop podobne trojuhelniky, faktory zmeny meritka a Thalesovu vetu. Pomoz Mii proporcionalne zmenit meritko pristavni ctvrti!',
      outro: 'Speicherstadt v "Hafenlichter" vypada fantasticky — kazda budova je proporcionalni, kazdy most pasi. Jule obdivuje vysledek: "Jako by to byl skutecny model!" Mia se usmeji: "Taky je. Matematicky presny."',
    },
    objectives: {
      similar_triangles: 'Rozpoznavat podobne trojuhelniky a popsat jejich vlastnosti',
      scale_factor: 'Pocitat a aplikovat faktor zmeny meritka $k$',
      intercept_theorem: 'Aplikovat Thalesovu vetu na geometricke problemy',
      apply_scaling: 'Vyuzivat podobnost v architekture, kartografii a hernim designu',
    },
    explanation: {
      intro: 'Dva utvary jsou podobne, kdyz maji stejny tvar, ale mohou se lisit velikosti. U trojuhelniku staci, aby se shodovaly vsechny uhly — pak jsou automaticky vsechny pomery stran stejne. Pomer obrazu k originalu se nazyva faktor zmeny meritka $k$.',
      scale_factor: 'Faktor zmeny meritka $k$ ti rika, jak moc bylo zvetseno nebo zmenseno. $k > 1$ znamena zvetseni, $k < 1$ zmenseni, $k = 1$ znamena shodnost (stejne rozmery). Dulezite: $k$ se tyka delek — plochy se skluji s $k^2$, objemy s $k^3$!',
      mia_tip: 'Mia: "V hernim enginu neustale pracujeme s faktory meritka. Sprite se scale 0.5 je dvakrat mensi, scale 2.0 dvakrat vetsi. Presne jako v geometrii!"',
      intercept: 'Thalesova veta popisuje, co se stane, kdyz rovnobezne primky protinaji dva paprsky: useky na paprskech jsou proporcionalni. Tim muzes vypocitat nezname useky, aniz bys vse premeroval.',
    },
    concepts: {
      similar_triangles: {
        title: 'Podobne trojuhelniky',
        desc: 'Dva trojuhelniky jsou podobne, kdyz se shodnou ve vsech uhlech. Pak plati: Vsechny pomery stran jsou stejne. Zapisujeme $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Faktor zmeny meritka',
        desc: 'Faktor $k = \\frac{\\text{Obraz}}{\\text{Original}}$ popisuje zvetseni nebo zmenseni. $k = 2$ znamena: vse dvakrat vetsi. $k = 0{,}5$ znamena: vse dvakrat mensi.',
      },
      intercept_theorem: {
        title: 'Thalesova veta',
        desc: 'Pokud dva paprsky protinaji rovnobezne primky, vznikajici useky jsou proporcionalni. Mocny nastroj pro vypocet chybejicich delek.',
      },
    },
    examples: {
      model: {
        title: 'Skalovani budovy',
        context: 'Hambursky sklad je postaven jako 3D model v meritku $1:100$. Model je $3{,}5$ cm vysoky. Jak vysoka je skutecna budova?',
        step1: 'Urcime faktor meritka: $k = \\frac{1}{100}$ znamena, ze model je 100krat mensi nez original.',
        step2: 'Odecteme vysku modelu: $h_{\\text{Model}} = 3{,}5$ cm.',
        step3: 'Prepocteme zpet: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Budova je 3,5 metru vysoka.',
        mia_comment: 'Mia: "Presne tak pracujeme v Hafenlichter. Stavime Speicherstadt jako model a vse proporcionalne skalujeme do hry."',
      },
      intercept: {
        title: 'Aplikace Thalesovy vety',
        context: 'Dva paprsky protinaji rovnobezne primky. Useky na jednom paprsku jsou 4 a 6, na druhem je prvni usek 9. Jak dlouhy je druhy usek $x$?',
        step1: 'Postavime Thalesovu vetu: Pomery useku na obou paprskech jsou stejne: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Nasobeni krizem: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Vysledek: $x = 6$. Druhy usek ma 6 jednotek delky.',
        mia_comment: 'Mia: "Thalesova veta je jako Auto-Layout v hernim enginu — zadáte pomer a vse ostatni se proporcionalne prizpusobi."',
      },
    },
    realworld: {
      maps: {
        title: 'Mapy a navigace',
        desc: 'Google Maps zobrazuje svet v meritku. Uroven priblizeni 15 odpovida priblizne $1:18.000$. Kazda uroven priblizeni zdvojnasobuje faktor meritka — presne jako podobnost v geometrii.',
      },
      architecture: {
        title: 'Architektonicke modely',
        desc: 'Nez byla postavena Labska filharmonie, existovaly modely v meritku $1:500$. Architekti vyuzivaji podobnost k odvozeni realnych rozmeru z malych modelu — a naopak.',
      },
      instagram: {
        title: 'Skalovani obrazku',
        desc: 'Kdyz oriznes fotku pro Instagram, meni se meritko. "Prizpusobit obrazovce" skaluje proporcionalne (podobne), "Roztahnout" deformuje (nepodobne). Tvoje oko ten rozdil okamzite pozna!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Podobny" a "shodny" je totez',
        correct: 'Podobny = stejny tvar. Shodny = stejny tvar A stejna velikost',
        why: 'Shodnost je specialni pripad podobnosti s $k = 1$. Vsechny shodne trojuhelniky jsou podobne, ale ne vsechny podobne trojuhelniky jsou shodne. Podobny znamena: stejne uhly, ale strany mohou mit proporcionalne ruzne delky.',
        mia_warning: 'Mia: "V hernim enginu: Shodny = Kopirovat. Podobny = Kopirovat + Skalovat. Kdyz zkopirujete dum a skalujete ho, je podobny. Bez skalovani je shodny."',
      },
      scale_direction: {
        wrong: 'Faktor meritka sestaven naopak',
        correct: 'Vzdy $k = \\frac{\\text{Obraz}}{\\text{Original}}$',
        why: 'Pokud je obraz vetsi nez original, $k$ musi byt $> 1$. Pokud zlomek otocis, dostanes $k < 1$ a budes si myslet, ze bylo zmenseno. Zapamatuj si: Obraz nahore, original dole.',
      },
    },
  },
};
