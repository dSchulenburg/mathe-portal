export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia wpatruje sie w ekran. Architektura poziomow "Hafenlichter" potrzebuje obiektow 3D — magazynow, dzwigow, kontenerow. Tim wymodelowal siatki, ale Lumi pyta: "Ile pamieci potrzebuje kazdy hitbox?" Mia usmiecha sie: "Do tego potrzebujemy wzorow na objetosc."',
      challenge: 'Oblicz objetosci i pola powierzchni ostrosluopw, stozkow i kul. Pomoz Mii zbudowac idealne hitboxy 3D dla jej portowej dzielnicy!',
      outro: 'Bryly 3D sa obliczone, hitboxy dopasowane. Tim testuje poziom z dzwigiem i wola: "Kolizje w koncu wydaja sie realistyczne!" Mia odchyla sie na krzesle — geometria sprawia, ze gry sa lepsze.',
    },
    objectives: {
      volume_pyramid: 'Obliczac objetosc ostroslupow za pomoca wzoru z jedna trzecia',
      volume_cone_sphere: 'Pewnie wyznaczac objetosci stozkow i kul',
      surface_area: 'Stosowac wzory na pole powierzchni i interpretowac wyniki',
      apply_3d: 'Przenosic obliczenia bryl na problemy codzienne i projektowanie gier',
    },
    explanation: {
      intro: 'Bryly trojwymiarowe maja objetosc (zawartosc przestrzenna) i powierzchnie. W ostroslupach i stozkach kluczowy jest czynnik: $\\frac{1}{3}$. Wynika on z tego, ze te bryly "zwezaja sie" — wypelniaja tylko jedna trzecia otaczajacego graniastoslupa lub walca.',
      cone: 'Stozek to jak "okragly ostroslup" — jego podstawa to kolo o promieniu $r$. Wzor ma te sama strukture: jedna trzecia razy podstawa razy wysokosc, tylko ze podstawa wynosi $\\pi r^2$.',
      mia_tip: 'Mia: "Zapamietuje sobie tak: Ostroslup i stozek to skromne rodzenstwo graniastoslupa i walca — zajmuja tylko jedna trzecia miejsca!"',
      sphere: 'Kula to przypadek szczegolny: nie ma klasycznej podstawy ani wysokosci. Jej objetosc zalezy tylko od promienia. Archimedes udowodnil, ze kula wypelnia dokladnie $\\frac{2}{3}$ otaczajacego walca — stad wynika wzor.',
    },
    concepts: {
      pyramid: {
        title: 'Objetosc ostroslupa',
        desc: 'Ostroslup ma jedna trzecia objetosci graniastoslupa o tej samej podstawie i wysokosci. Podstawa moze byc prostokatem, trojkatem lub dowolnym wielokatem.',
      },
      cone: {
        title: 'Objetosc stozka',
        desc: 'Stozek ma sie do walca tak jak ostroslup do graniastoslupa: wypelnia dokladnie jedna trzecia. Jego kolowa podstawa czyni go szczegolnie symetrycznym.',
      },
      sphere: {
        title: 'Objetosc kuli',
        desc: 'Kule w pelni opisuje promien. $\\frac{4}{3}$ we wzorze pochodzi z calkowania — lub z genialnego dowodu Archimedesa.',
      },
    },
    examples: {
      icecream: {
        title: 'Obliczanie wafelka lodowego',
        context: 'Wafelek lodowy ma ksztalt stozka o promieniu $r = 3$ cm i wysokosci $h = 12$ cm. Ile lodow sie zmiesci?',
        step1: 'Identyfikujemy dane: Wafelek to stozek z $r = 3$ cm i $h = 12$ cm.',
        step2: 'Stosujemy wzor na stozek: Wstawiamy do $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ i najpierw obliczamy wyrazenie w nawiasie.',
        step3: 'Wynik: Wafelek miesci okolo $113{,}1\\,\\text{cm}^3$ lodow — to troche wiecej niz decylitr.',
        mia_comment: 'Mia: "Wow, taki wafelek wcale nie miesci tak duzo! Dlatego zawsze nakladaja galke na wierzch."',
      },
      hitbox: {
        title: 'Kulisty hitbox',
        context: 'W "Hafenlichter" boja ma miec kulisty hitbox o objetosci $V = 904{,}8\\,\\text{cm}^3$. Jak duzy musi byc promien?',
        step1: 'Dane: Objetosc kuli to $V = 904{,}8\\,\\text{cm}^3$. Szukane: promien $r$.',
        step2: 'Przeksztalcamy wzor: Rozwiazujemy $V = \\frac{4}{3} \\pi r^3$ wzgledem $r^3$, dzielac przez $\\frac{4}{3}\\pi$.',
        step3: 'Obliczamy: $r^3 \\approx 215{,}9$ — teraz wyciagamy pierwiastek trzeciego stopnia.',
        step4: 'Wynik: $r \\approx 6{,}0$ cm. Hitbox potrzebuje promienia 6 cm.',
        mia_comment: 'Mia: "Obliczanie wstecz to codziennosc w projektowaniu gier — wiesz, czego chcesz, i musisz znalezc parametry."',
      },
    },
    realworld: {
      packaging: {
        title: 'Projektowanie opakowan',
        desc: 'Puszki na napoje, konserwy, butelki — wszedzie tkwia obliczenia walcow. Producenci optymalizuja stosunek objetosci do zuzycia materialu, zeby oszczedzac koszty.',
      },
      icecream: {
        title: 'Matematyka galki lodowej',
        desc: 'Dlaczego "duza" galka lodowa wyglada na o wiele wieksza? Bo objetosc rosnie z $r^3$! Podwojny promien = osmiokrotna objetosc. To tez tlumaczy, dlaczego zestawy XXL sa tak oplacalne.',
      },
      pizza: {
        title: 'Porownanie pizzy',
        desc: 'Pizza 30 cm ma wiecej powierzchni niz dwie pizze 20 cm razem! $\\pi \\cdot 15^2 = 706{,}9$ vs. $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Rozmiar sie oplaca.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Zapomnienie o czynniku $\\frac{1}{3}$',
        correct: 'Przy stozku i ostroslupie ZAWSZE $\\frac{1}{3}$ z przodu',
        why: 'Stozek i ostroslup wypelniaja tylko jedna trzecia otaczajacego walca lub graniastoslupa. Bez tego czynnika obliczasz objetosc calego walca — trzy razy za duzo!',
        mia_warning: 'Mia: "Kiedys obliczylem wszystkie hitboxy bez tej jednej trzeciej. Boje byly ogromne i blokowaly caly basen portowy. Tim nie byl zachwycony."',
      },
      surface_volume: {
        wrong: 'Pomylenie wzorow na powierzchnie i objetosc kuli',
        correct: 'Objetosc: $\\frac{4}{3}\\pi r^3$ — Powierzchnia: $4\\pi r^2$',
        why: 'Przy objetosci stoi $r^3$ (szescienne, czyli zawartosc przestrzenna), przy powierzchni $r^2$ (kwadratowe, czyli pole). Zwroccie uwage na wykladnik — mowi wam, co liczycie.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule optymalizuje pamiec "Hafenlichter". "Nasze tekstury zuzywaja 2 do potegi 20 bajtow — ile to wlasciwie jest?" Tim liczy: "Czekaj, potegi potrafie..." Mia sie smieje: "To pokaz, co umiesz."',
      challenge: 'Opanuj prawa potegowania: mnoz, poteguj i upraszczaj potegi. Pomoz Timowi blyskawicznie obliczac rozmiary pamieci i czasy renderowania!',
      outro: 'Tim opanowal prawa potegowania. Obliczanie pamieci idzie teraz w sekundy. "Potegi sa jak kody oszustwa dla duzych liczb", mowi. Mia kiwa glowa: "I dla malych tez — witaj w swiecie ujemnych wykladnikow."',
    },
    objectives: {
      multiply_powers: 'Mnozyc i dzielic potegi o tej samej podstawie',
      power_of_power: 'Upraszczac potege potegi za pomoca reguly mnozenia',
      negative_exponents: 'Interpretowac ujemne wykladniki jako ulamki i przeliczac',
      apply_memory: 'Stosowac prawa potegowania do rozmiarow pamieci i notacji naukowej',
    },
    explanation: {
      intro: 'Potegi to skrocony zapis powtarzanego mnozenia: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Gdy mnozysz dwie potegi o tej samej podstawie, dodajesz wykladniki — bo po prostu wydluzasz lancuch mnozen.',
      power_of_power: 'Co sie dzieje, gdy potegujesz potege? $(a^m)^n$ oznacza: mnozysz $a^m$ dokladnie $n$ razy przez siebie. To daje $m \\cdot n$ czynnikow — czyli $a^{m \\cdot n}$. Wykladniki sa mnozoone.',
      mia_tip: 'Mia: "Ta sama podstawa → wykladniki dodawac. Potega potegi → wykladniki mnozyc. Rozne podstawy → obliczac, nie ma skrotu!"',
      negative: 'Ujemny wykladnik odwraca potege: $a^{-n} = \\frac{1}{a^n}$. To nie jest arbitralna definicja — wynika logicznie ze wzorca: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Kazdy krok dzieli przez podstawe.',
    },
    concepts: {
      product_rule: {
        title: 'Regula iloczynu',
        desc: 'Ta sama podstawa, rozne wykladniki? Przy mnozeniu wykladniki sie dodaja, przy dzieleniu odejmuja. To dziala TYLKO przy tej samej podstawie!',
      },
      power_rule: {
        title: 'Regula potegowania',
        desc: 'Potega jest ponownie potegowana? Wtedy mnoz wykladniki. $(a^3)^4 = a^{12}$ — dwanascie czynnikow $a$ lacznie.',
      },
      negative_exp: {
        title: 'Ujemny wykladnik',
        desc: 'Minus w wykladniku oznacza "jeden podzielone przez". Tak z duzych liczb staja sie male: $10^{-6}$ to jedna milionowa. Idealne dla mikrochipow i milisekund.',
      },
    },
    examples: {
      simplify: {
        title: 'Obliczanie pamieci',
        context: 'Tim chce wiedziec: Ile to $2^3 \\cdot 2^4$ bajtow? W informatyce to typowe obliczenie z potegami dwojki.',
        step1: 'Regula iloczynu: Ta sama podstawa $2$, wiec dodajemy wykladniki: $3 + 4 = 7$.',
        step2: 'Obliczamy: $2^7 = 128$ bajtow.',
        step3: 'Umiescmy w kontekscie: 128 bajtow — to prawie 1 kilobajt (to byloby dokladnie $2^{10} = 1024$).',
        mia_comment: 'Mia: "W informatyce potegi dwojki sa wszedzie. RAM, tekstury, glebia koloru — wszystko potegi 2!"',
      },
      negative: {
        title: 'Przeliczanie milisekund',
        context: 'Klatka w "Hafenlichter" jest obliczana w $10^{-3}$ sekundy. Co to oznacza w zapisie dziesietnym?',
        step1: 'Stosujemy ujemny wykladnik: $10^{-3}$ oznacza $\\frac{1}{10^3}$.',
        step2: 'Obliczamy: $\\frac{1}{1000} = 0{,}001$ sekundy.',
        step3: 'Kontekst: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — jedna milisekunda. Przy 60 fps kazda klatka ma okolo 16 ms czasu.',
        mia_comment: 'Mia: "Ujemne wykladniki brzmia strasznie, ale oznaczaja po prostu: male liczby. $10^{-3}$ = mili, $10^{-6}$ = mikro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Pamiec cyfrowa',
        desc: 'Twoj telefon ma 256 GB? To $2^{38}$ bajtow, czyli ponad 274 miliardy bajtow. Kazde podwojenie pamieci to tylko +1 w wykladniku — dlatego technologia rosnie tak szybko.',
      },
      richter: {
        title: 'Skala Richtera',
        desc: 'Trzesienie ziemi o sile 6 nie jest dwa razy silniejsze niz 3 — jest tysiac razy silniejsze! Kazdy stopien oznacza $10 \\times$ wiecej energii. Potegi unaoczniaja te roznice.',
      },
      decibel: {
        title: 'Decybele i glosnosc',
        desc: 'Sluchawki na 100 dB sa $10^{10}$ razy intensywniejsze niz prog slyszalnosci (0 dB). Kazde +10 dB = dziesieciokrotna intensywnosc. Twoje uszy licza logarytmicznie — a wiec potegami!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Mnozenie podstaw zamiast dodawania wykladnikow',
        correct: 'Regula iloczynu obowiazuje TYLKO przy tej samej podstawie',
        why: 'Przy $2^3 \\cdot 3^2$ podstawy sa rozne (2 i 3). Tutaj nie mozesz zastosowac reguly potegowania — musisz obliczyc osobno: $8 \\cdot 9 = 72$. Dodawanie wykladnikow i mnozenie podstaw to czesty blad!',
        mia_warning: 'Mia: "Rozne podstawy = brak skrotu. Kropka. Kiedys zrobilem ten blad w kodzie i wszystkie tekstury byly zniszczone."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "do potegi zero daje zero"',
        correct: '$a^0 = 1$ dla wszystkich $a \\neq 0$',
        why: 'Podazaj za wzorcem: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — kazdy krok dzieli przez 2. Wiec $2^0 = 1$. To obowiazuje dla KAZDEJ podstawy (oprocz 0). Zero jest elementem neutralnym dodawania, nie mnozenia.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia przeglade biblioteke zasobow "Hafenlichter". Hamburska Speicherstadt ma budynki wszelkich rozmiarow — ale wszystkie powinny wygladac proporcjonalnie. Lumi pyta: "Czy nie mozemy po prostu wszystkiego przeskalowac?" Mia kiwa glowa: "Dokladnie. To jest podobienstwo figur."',
      challenge: 'Zrozum trojkaty podobne, wspolczynniki skali i twierdzenie Talesa. Pomoz Mii proporcjonalnie skalowac dzielnice portowa!',
      outro: 'Speicherstadt w "Hafenlichter" wyglada fantastycznie — kazdy budynek jest proporcjonalny, kazdy most pasuje. Jule podziwia rezultat: "Jakby to byl prawdziwy model!" Mia usmiecha sie: "To jest model. Matematycznie dokladny."',
    },
    objectives: {
      similar_triangles: 'Rozpoznawac trojkaty podobne i opisywac ich wlasciwosci',
      scale_factor: 'Obliczac i stosowac wspolczynnik skali $k$',
      intercept_theorem: 'Stosowac twierdzenie Talesa do problemow geometrycznych',
      apply_scaling: 'Wykorzystywac podobienstwo w architekturze, kartografii i projektowaniu gier',
    },
    explanation: {
      intro: 'Dwie figury sa podobne, gdy maja ten sam ksztalt, ale moga sie roznic rozmiarem. Dla trojkatow wystarczy, ze wszystkie katy sie zgadzaja — wtedy automatycznie wszystkie stosunki bokow sa rowne. Stosunek obrazu do oryginalu nazywa sie wspolczynnikiem skali $k$.',
      scale_factor: 'Wspolczynnik skali $k$ mowi ci, o ile powiekszona lub zmniejszona zostala figura. $k > 1$ oznacza powiekszenie, $k < 1$ pomniejszenie, $k = 1$ oznacza przystawanie (identyczne wymiary). Wazne: $k$ dotyczy dlugosci — pola skaluja sie z $k^2$, objetosci z $k^3$!',
      mia_tip: 'Mia: "W silniku gry ciagle pracujemy ze wspolczynnikami skali. Sprite ze skala 0.5 jest dwa razy mniejszy, skala 2.0 dwa razy wiekszy. Dokladnie jak w geometrii!"',
      intercept: 'Twierdzenie Talesa opisuje, co sie dzieje, gdy rownolegle proste sa przecinane przez dwa promienie: odcinki na promieniach sa proporcjonalne. Dzieki temu mozesz obliczyc nieznane odcinki bez mierzenia wszystkiego.',
    },
    concepts: {
      similar_triangles: {
        title: 'Trojkaty podobne',
        desc: 'Dwa trojkaty sa podobne, gdy maja rowne wszystkie katy. Wtedy zachodzi: Wszystkie stosunki bokow sa rowne. Zapisujemy to $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Wspolczynnik skali',
        desc: 'Wspolczynnik $k = \\frac{\\text{Obraz}}{\\text{Oryginal}}$ opisuje powiekszenie lub pomniejszenie. $k = 2$ oznacza: wszystko dwa razy wieksze. $k = 0{,}5$ oznacza: wszystko dwa razy mniejsze.',
      },
      intercept_theorem: {
        title: 'Twierdzenie Talesa',
        desc: 'Gdy dwa promienie sa przecinane przez proste rownolegle, powstajace odcinki sa proporcjonalne. Potezne narzedzie do obliczania brakujacych dlugosci.',
      },
    },
    examples: {
      model: {
        title: 'Skalowanie budynku',
        context: 'Hamburski magazyn jest zbudowany jako model 3D w skali $1:100$. Model ma $3{,}5$ cm wysokosci. Jaka jest wysokosc prawdziwego budynku?',
        step1: 'Wyznaczamy wspolczynnik skali: $k = \\frac{1}{100}$ oznacza, ze model jest 100 razy mniejszy niz oryginal.',
        step2: 'Odczytujemy wysokosc modelu: $h_{\\text{Model}} = 3{,}5$ cm.',
        step3: 'Przeliczamy wstecz: $h_{\\text{rzecz}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Budynek ma 3,5 metra wysokosci.',
        mia_comment: 'Mia: "Dokladnie tak pracujemy w Hafenlichter. Budujemy Speicherstadt jako model i skalujemy wszystko proporcjonalnie do gry."',
      },
      intercept: {
        title: 'Zastosowanie twierdzenia Talesa',
        context: 'Dwa promienie sa przecinane przez proste rownolegle. Odcinki na jednym promieniu wynosa 4 i 6, na drugim pierwszy odcinek wynosi 9. Jaka jest dlugosc drugiego odcinka $x$?',
        step1: 'Stosujemy twierdzenie Talesa: Stosunki odcinkow na obu promieniach sa rowne: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Mnozenie krzyzowe: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Wynik: $x = 6$. Drugi odcinek ma 6 jednostek dlugosci.',
        mia_comment: 'Mia: "Twierdzenie Talesa jest jak Auto-Layout w silniku gry — podajesz proporcje, a wszystko inne dopasowuje sie proporcjonalnie."',
      },
    },
    realworld: {
      maps: {
        title: 'Mapy i nawigacja',
        desc: 'Google Maps pokazuje swiat w skali. Poziom zoomu 15 odpowiada okolo $1:18.000$. Kazdy poziom zoomu podwaja wspolczynnik skali — dokladnie jak podobienstwo w geometrii.',
      },
      architecture: {
        title: 'Modele architektoniczne',
        desc: 'Zanim zbudowano Filharmonie Labska, istnialy modele w skali $1:500$. Architekci wykorzystuja podobienstwo, aby z malych modeli wnioskwac o rzeczywistych wymiarach — i odwrotnie.',
      },
      instagram: {
        title: 'Skalowanie zdjec',
        desc: 'Gdy przycinasz zdjecie na Instagram, zmienia sie skala. "Dopasuj do ekranu" skaluje proporcjonalnie (podobne), "Rozciagnij" znieksztalca (niepodobne). Twoje oko natychmiast widzi roznice!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Podobne" i "przystawajace" to to samo',
        correct: 'Podobne = ten sam ksztalt. Przystawajace = ten sam ksztalt I ten sam rozmiar',
        why: 'Przystawanie to szczegolny przypadek podobienstwa z $k = 1$. Wszystkie trojkaty przystawajace sa podobne, ale nie wszystkie trojkaty podobne sa przystawajace. Podobne oznacza: te same katy, ale boki moga miec proporcjonalnie rozne dlugosci.',
        mia_warning: 'Mia: "W silniku gry: Przystawajace = Kopiuj. Podobne = Kopiuj + Skaluj. Gdy kopiujesz dom i skalujesz, jest podobny. Bez skalowania jest przystawajacy."',
      },
      scale_direction: {
        wrong: 'Wspolczynnik skali ustawiony odwrotnie',
        correct: 'Zawsze $k = \\frac{\\text{Obraz}}{\\text{Oryginal}}$',
        why: 'Jesli obraz jest wiekszy od oryginalu, $k$ musi byc $> 1$. Jesli odwrocisz ulamek, dostaniesz $k < 1$ i pomyslisz, ze figura zostala zmniejszona. Pamietaj: Obraz na gorze, oryginal na dole.',
      },
    },
  },
};
