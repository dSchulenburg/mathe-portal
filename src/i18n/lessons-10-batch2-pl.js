export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia wpatruje się w ekran. Architektura poziomów "Hafenlichter" potrzebuje obiektów 3D — magazynów, dźwigów, kontenerów. Tim wymodelował siatki, ale Lumi pyta: "Ile pamięci potrzebuje każdy hitbox?" Mia uśmiecha się: "Do tego potrzebujemy wzorów na objętość."',
      challenge: 'Oblicz objętości i pola powierzchni ostrosłupów, stożków i kul. Pomóż Mii zbudować idealne hitboxy 3D dla jej portowej dzielnicy!',
      outro: 'Bryły 3D są obliczone, hitboxy dopasowane. Tim testuje poziom z dźwigiem i woła: "Kolizje w końcu wydają się realistyczne!" Mia odchyla się na krześle — geometria sprawia, że gry są lepsze.',
    },
    objectives: {
      volume_pyramid: 'Obliczać objętość ostrosłupów za pomocą wzoru z jedną trzecią',
      volume_cone_sphere: 'Pewnie wyznaczać objętości stożków i kul',
      surface_area: 'Stosować wzory na pole powierzchni i interpretować wyniki',
      apply_3d: 'Przenosić obliczenia brył na problemy codzienne i projektowanie gier',
    },
    explanation: {
      intro: 'Bryły trójwymiarowe mają objętość (zawartość przestrzenną) i powierzchnię. W ostrosłupach i stożkach kluczowy jest czynnik: $\\frac{1}{3}$. Wynika on z tego, że te bryły "zwężają się" — wypełniają tylko jedną trzecią otaczającego graniastosłupa lub walca.',
      cone: 'Stożek to jak "okrągły ostrosłup" — jego podstawa to koło o promieniu $r$. Wzór ma tę samą strukturę: jedna trzecia razy podstawa razy wysokość, tylko że podstawa wynosi $\\pi r^2$.',
      mia_tip: 'Mia: "Zapamiętuję sobie tak: Ostrosłup i stożek to skromne rodzeństwo graniastosłupa i walca — zajmują tylko jedną trzecią miejsca!"',
      sphere: 'Kula to przypadek szczególny: nie ma klasycznej podstawy ani wysokości. Jej objętość zależy tylko od promienia. Archimedes udowodnił, że kula wypełnia dokładnie $\\frac{2}{3}$ otaczającego walca — stąd wynika wzór.',
    },
    concepts: {
      pyramid: {
        title: 'Objętość ostrosłupa',
        desc: 'Ostrosłup ma jedną trzecią objętości graniastosłupa o tej samej podstawie i wysokości. Podstawa może być prostokątem, trójkątem lub dowolnym wielokątem.',
      },
      cone: {
        title: 'Objętość stożka',
        desc: 'Stożek ma się do walca tak jak ostrosłup do graniastosłupa: wypełnia dokładnie jedną trzecią. Jego kołowa podstawa czyni go szczególnie symetrycznym.',
      },
      sphere: {
        title: 'Objętość kuli',
        desc: 'Kulę w pełni opisuje promień. $\\frac{4}{3}$ we wzorze pochodzi z całkowania — lub z genialnego dowodu Archimedesa.',
      },
    },
    examples: {
      icecream: {
        title: 'Obliczanie wafelka lodowego',
        context: 'Wafelek lodowy ma kształt stożka o promieniu $r = 3$ cm i wysokości $h = 12$ cm. Ile lodów się zmieści?',
        step1: 'Identyfikujemy dane: Wafelek to stożek z $r = 3$ cm i $h = 12$ cm.',
        step2: 'Stosujemy wzór na stożek: Wstawiamy do $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ i najpierw obliczamy wyrażenie w nawiasie.',
        step3: 'Wynik: Wafelek mieści około $113{,}1\\,\\text{cm}^3$ lodów — to trochę więcej niż decylitr.',
        mia_comment: 'Mia: "Wow, taki wafelek wcale nie mieści tak dużo! Dlatego zawsze nakładają gałkę na wierzch."',
      },
      hitbox: {
        title: 'Kulisty hitbox',
        context: 'W "Hafenlichter" boja ma mieć kulisty hitbox o objętości $V = 904{,}8\\,\\text{cm}^3$. Jak duży musi być promień?',
        step1: 'Dane: Objętość kuli to $V = 904{,}8\\,\\text{cm}^3$. Szukane: promień $r$.',
        step2: 'Przekształcamy wzór: Rozwiązujemy $V = \\frac{4}{3} \\pi r^3$ względem $r^3$, dzieląc przez $\\frac{4}{3}\\pi$.',
        step3: 'Obliczamy: $r^3 \\approx 215{,}9$ — teraz wyciągamy pierwiastek trzeciego stopnia.',
        step4: 'Wynik: $r \\approx 6{,}0$ cm. Hitbox potrzebuje promienia 6 cm.',
        mia_comment: 'Mia: "Obliczanie wstecz to codzienność w projektowaniu gier — wiesz, czego chcesz, i musisz znaleźć parametry."',
      },
    },
    realworld: {
      packaging: {
        title: 'Projektowanie opakowań',
        desc: 'Puszki na napoje, konserwy, butelki — wszędzie tkwią obliczenia walców. Producenci optymalizują stosunek objętości do zużycia materiału, żeby oszczędzać koszty.',
      },
      icecream: {
        title: 'Matematyka gałki lodowej',
        desc: 'Dlaczego "duża" gałka lodowa wygląda na o wiele większą? Bo objętość rośnie z $r^3$! Podwójny promień = ośmiokrotna objętość. To też tłumaczy, dlaczego zestawy XXL są tak opłacalne.',
      },
      pizza: {
        title: 'Porównanie pizzy',
        desc: 'Pizza 30 cm ma więcej powierzchni niż dwie pizze 20 cm razem! $\\pi \\cdot 15^2 = 706{,}9$ vs. $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Rozmiar się opłaca.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Zapomnienie o czynniku $\\frac{1}{3}$',
        correct: 'Przy stożku i ostrosłupie ZAWSZE $\\frac{1}{3}$ z przodu',
        why: 'Stożek i ostrosłup wypełniają tylko jedną trzecią otaczającego walca lub graniastosłupa. Bez tego czynnika obliczasz objętość całego walca — trzy razy za dużo!',
        mia_warning: 'Mia: "Kiedyś obliczyłam wszystkie hitboxy bez tej jednej trzeciej. Boje były ogromne i blokowały cały basen portowy. Tim nie był zachwycony."',
      },
      surface_volume: {
        wrong: 'Pomylenie wzorów na powierzchnię i objętość kuli',
        correct: 'Objętość: $\\frac{4}{3}\\pi r^3$ — Powierzchnia: $4\\pi r^2$',
        why: 'Przy objętości stoi $r^3$ (sześcienne, czyli zawartość przestrzenna), przy powierzchni $r^2$ (kwadratowe, czyli pole). Zwróć uwagę na wykładnik — mówi ci, co liczysz.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule optymalizuje pamięć "Hafenlichter". "Nasze tekstury zużywają 2 do potęgi 20 bajtów — ile to właściwie jest?" Tim liczy: "Czekaj, potęgi potrafię..." Mia się śmieje: "To pokaż, co umiesz."',
      challenge: 'Opanuj prawa potęgowania: mnóż, potęguj i upraszczaj potęgi. Pomóż Timowi błyskawicznie obliczać rozmiary pamięci i czasy renderowania!',
      outro: 'Tim opanował prawa potęgowania. Obliczanie pamięci idzie teraz w sekundy. "Potęgi są jak kody oszustwa dla dużych liczb", mówi. Mia kiwa głową: "I dla małych też — witaj w świecie ujemnych wykładników."',
    },
    objectives: {
      multiply_powers: 'Mnożyć i dzielić potęgi o tej samej podstawie',
      power_of_power: 'Upraszczać potęgę potęgi za pomocą reguły mnożenia',
      negative_exponents: 'Interpretować ujemne wykładniki jako ułamki i przeliczać',
      apply_memory: 'Stosować prawa potęgowania do rozmiarów pamięci i notacji naukowej',
    },
    explanation: {
      intro: 'Potęgi to skrócony zapis powtarzanego mnożenia: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Gdy mnożysz dwie potęgi o tej samej podstawie, dodajesz wykładniki — bo po prostu wydłużasz łańcuch mnożeń.',
      power_of_power: 'Co się dzieje, gdy potęgujesz potęgę? $(a^m)^n$ oznacza: mnożysz $a^m$ dokładnie $n$ razy przez siebie. To daje $m \\cdot n$ czynników — czyli $a^{m \\cdot n}$. Wykładniki są mnożone.',
      mia_tip: 'Mia: "Ta sama podstawa → wykładniki dodawać. Potęga potęgi → wykładniki mnożyć. Różne podstawy → obliczać, nie ma skrótu!"',
      negative: 'Ujemny wykładnik odwraca potęgę: $a^{-n} = \\frac{1}{a^n}$. To nie jest arbitralna definicja — wynika logicznie ze wzorca: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Każdy krok dzieli przez podstawę.',
    },
    concepts: {
      product_rule: {
        title: 'Reguła iloczynu',
        desc: 'Ta sama podstawa, różne wykładniki? Przy mnożeniu wykładniki się dodają, przy dzieleniu odejmują. To działa TYLKO przy tej samej podstawie!',
      },
      power_rule: {
        title: 'Reguła potęgowania',
        desc: 'Potęga jest ponownie potęgowana? Wtedy mnóż wykładniki. $(a^3)^4 = a^{12}$ — dwanaście czynników $a$ łącznie.',
      },
      negative_exp: {
        title: 'Ujemny wykładnik',
        desc: 'Minus w wykładniku oznacza "jeden podzielone przez". Tak z dużych liczb stają się małe: $10^{-6}$ to jedna milionowa. Idealne dla mikrochipów i milisekund.',
      },
    },
    examples: {
      simplify: {
        title: 'Obliczanie pamięci',
        context: 'Tim chce wiedzieć: Ile to $2^3 \\cdot 2^4$ bajtów? W informatyce to typowe obliczenie z potęgami dwójki.',
        step1: 'Reguła iloczynu: Ta sama podstawa $2$, więc dodajemy wykładniki: $3 + 4 = 7$.',
        step2: 'Obliczamy: $2^7 = 128$ bajtów.',
        step3: 'Umieśćmy w kontekście: 128 bajtów — to prawie 1 kilobajt (to byłoby dokładnie $2^{10} = 1024$).',
        mia_comment: 'Mia: "W informatyce potęgi dwójki są wszędzie. RAM, tekstury, głębia koloru — wszystko potęgi 2!"',
      },
      negative: {
        title: 'Przeliczanie milisekund',
        context: 'Klatka w "Hafenlichter" jest obliczana w $10^{-3}$ sekundy. Co to oznacza w zapisie dziesiętnym?',
        step1: 'Stosujemy ujemny wykładnik: $10^{-3}$ oznacza $\\frac{1}{10^3}$.',
        step2: 'Obliczamy: $\\frac{1}{1000} = 0{,}001$ sekundy.',
        step3: 'Kontekst: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — jedna milisekunda. Przy 60 fps każda klatka ma około 16 ms czasu.',
        mia_comment: 'Mia: "Ujemne wykładniki brzmią strasznie, ale oznaczają po prostu: małe liczby. $10^{-3}$ = mili, $10^{-6}$ = mikro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Pamięć cyfrowa',
        desc: 'Twój telefon ma 256 GB? To $2^{38}$ bajtów, czyli ponad 274 miliardy bajtów. Każde podwojenie pamięci to tylko +1 w wykładniku — dlatego technologia rośnie tak szybko.',
      },
      richter: {
        title: 'Skala Richtera',
        desc: 'Trzęsienie ziemi o sile 6 nie jest dwa razy silniejsze niż 3 — jest tysiąc razy silniejsze! Każdy stopień oznacza $10 \\times$ więcej energii. Potęgi unaoczniają tę różnicę.',
      },
      decibel: {
        title: 'Decybele i głośność',
        desc: 'Słuchawki na 100 dB są $10^{10}$ razy intensywniejsze niż próg słyszalności (0 dB). Każde +10 dB = dziesięciokrotna intensywność. Twoje uszy liczą logarytmicznie — a więc potęgami!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Mnożenie podstaw zamiast dodawania wykładników',
        correct: 'Reguła iloczynu obowiązuje TYLKO przy tej samej podstawie',
        why: 'Przy $2^3 \\cdot 3^2$ podstawy są różne (2 i 3). Tutaj nie możesz zastosować reguły potęgowania — musisz obliczyć osobno: $8 \\cdot 9 = 72$. Dodawanie wykładników i mnożenie podstaw to częsty błąd!',
        mia_warning: 'Mia: "Różne podstawy = brak skrótu. Kropka. Kiedyś zrobiłam ten błąd w kodzie i wszystkie tekstury były zniszczone."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "do potęgi zero daje zero"',
        correct: '$a^0 = 1$ dla wszystkich $a \\neq 0$',
        why: 'Podążaj za wzorcem: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — każdy krok dzieli przez 2. Więc $2^0 = 1$. To obowiązuje dla KAŻDEJ podstawy (oprócz 0). Zero jest elementem neutralnym dodawania, nie mnożenia.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia przegląda bibliotekę zasobów "Hafenlichter". Hamburska Speicherstadt ma budynki wszelkich rozmiarów — ale wszystkie powinny wyglądać proporcjonalnie. Lumi pyta: "Czy nie możemy po prostu wszystkiego przeskalować?" Mia kiwa głową: "Dokładnie. To jest podobieństwo figur."',
      challenge: 'Zrozum trójkąty podobne, współczynniki skali i twierdzenie Talesa. Pomóż Mii proporcjonalnie skalować dzielnicę portową!',
      outro: 'Speicherstadt w "Hafenlichter" wygląda fantastycznie — każdy budynek jest proporcjonalny, każdy most pasuje. Jule podziwia rezultat: "Jakby to był prawdziwy model!" Mia uśmiecha się: "To jest model. Matematycznie dokładny."',
    },
    objectives: {
      similar_triangles: 'Rozpoznawać trójkąty podobne i opisywać ich własności',
      scale_factor: 'Obliczać i stosować współczynnik skali $k$',
      intercept_theorem: 'Stosować twierdzenie Talesa do problemów geometrycznych',
      apply_scaling: 'Wykorzystywać podobieństwo w architekturze, kartografii i projektowaniu gier',
    },
    explanation: {
      intro: 'Dwie figury są podobne, gdy mają ten sam kształt, ale mogą się różnić rozmiarem. Dla trójkątów wystarczy, że wszystkie kąty się zgadzają — wtedy automatycznie wszystkie stosunki boków są równe. Stosunek obrazu do oryginału nazywa się współczynnikiem skali $k$.',
      scale_factor: 'Współczynnik skali $k$ mówi ci, o ile powiększona lub zmniejszona została figura. $k > 1$ oznacza powiększenie, $k < 1$ pomniejszenie, $k = 1$ oznacza przystawanie (identyczne wymiary). Ważne: $k$ dotyczy długości — pola skalują się z $k^2$, objętości z $k^3$!',
      mia_tip: 'Mia: "W silniku gry ciągle pracujemy ze współczynnikami skali. Sprite ze skalą 0.5 jest dwa razy mniejszy, skala 2.0 dwa razy większy. Dokładnie jak w geometrii!"',
      intercept: 'Twierdzenie Talesa opisuje, co się dzieje, gdy równoległe proste są przecinane przez dwa promienie: odcinki na promieniach są proporcjonalne. Dzięki temu możesz obliczyć nieznane odcinki bez mierzenia wszystkiego.',
    },
    concepts: {
      similar_triangles: {
        title: 'Trójkąty podobne',
        desc: 'Dwa trójkąty są podobne, gdy mają równe wszystkie kąty. Wtedy zachodzi: Wszystkie stosunki boków są równe. Zapisujemy to $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Współczynnik skali',
        desc: 'Współczynnik $k = \\frac{\\text{Obraz}}{\\text{Oryginał}}$ opisuje powiększenie lub pomniejszenie. $k = 2$ oznacza: wszystko dwa razy większe. $k = 0{,}5$ oznacza: wszystko dwa razy mniejsze.',
      },
      intercept_theorem: {
        title: 'Twierdzenie Talesa',
        desc: 'Gdy dwa promienie są przecinane przez proste równoległe, powstające odcinki są proporcjonalne. Potężne narzędzie do obliczania brakujących długości.',
      },
    },
    examples: {
      model: {
        title: 'Skalowanie budynku',
        context: 'Hamburski magazyn jest zbudowany jako model 3D w skali $1:100$. Model ma $3{,}5$ cm wysokości. Jaka jest wysokość prawdziwego budynku?',
        step1: 'Wyznaczamy współczynnik skali: $k = \\frac{1}{100}$ oznacza, że model jest 100 razy mniejszy niż oryginał.',
        step2: 'Odczytujemy wysokość modelu: $h_{\\text{Model}} = 3{,}5$ cm.',
        step3: 'Przeliczamy wstecz: $h_{\\text{rzecz}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Budynek ma 3,5 metra wysokości.',
        mia_comment: 'Mia: "Dokładnie tak pracujemy w Hafenlichter. Budujemy Speicherstadt jako model i skalujemy wszystko proporcjonalnie do gry."',
      },
      intercept: {
        title: 'Zastosowanie twierdzenia Talesa',
        context: 'Dwa promienie są przecinane przez proste równoległe. Odcinki na jednym promieniu wynoszą 4 i 6, na drugim pierwszy odcinek wynosi 9. Jaka jest długość drugiego odcinka $x$?',
        step1: 'Stosujemy twierdzenie Talesa: Stosunki odcinków na obu promieniach są równe: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Mnożenie krzyżowe: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Wynik: $x = 6$. Drugi odcinek ma 6 jednostek długości.',
        mia_comment: 'Mia: "Twierdzenie Talesa jest jak Auto-Layout w silniku gry — podajesz proporcje, a wszystko inne dopasowuje się proporcjonalnie."',
      },
    },
    realworld: {
      maps: {
        title: 'Mapy i nawigacja',
        desc: 'Google Maps pokazuje świat w skali. Poziom zoomu 15 odpowiada około $1:18.000$. Każdy poziom zoomu podwaja współczynnik skali — dokładnie jak podobieństwo w geometrii.',
      },
      architecture: {
        title: 'Modele architektoniczne',
        desc: 'Zanim zbudowano Filharmonię Łabską, istniały modele w skali $1:500$. Architekci wykorzystują podobieństwo, aby z małych modeli wnioskować o rzeczywistych wymiarach — i odwrotnie.',
      },
      instagram: {
        title: 'Skalowanie zdjęć',
        desc: 'Gdy przycinasz zdjęcie na Instagram, zmienia się skala. "Dopasuj do ekranu" skaluje proporcjonalnie (podobne), "Rozciągnij" zniekształca (niepodobne). Twoje oko natychmiast widzi różnicę!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Podobne" i "przystające" to to samo',
        correct: 'Podobne = ten sam kształt. Przystające = ten sam kształt I ten sam rozmiar',
        why: 'Przystawanie to szczególny przypadek podobieństwa z $k = 1$. Wszystkie trójkąty przystające są podobne, ale nie wszystkie trójkąty podobne są przystające. Podobne oznacza: te same kąty, ale boki mogą mieć proporcjonalnie różne długości.',
        mia_warning: 'Mia: "W silniku gry: Przystające = Kopiuj. Podobne = Kopiuj + Skaluj. Gdy kopiujesz dom i skalujesz, jest podobny. Bez skalowania jest przystający."',
      },
      scale_direction: {
        wrong: 'Współczynnik skali ustawiony odwrotnie',
        correct: 'Zawsze $k = \\frac{\\text{Obraz}}{\\text{Oryginał}}$',
        why: 'Jeśli obraz jest większy od oryginału, $k$ musi być $> 1$. Jeśli odwrócisz ułamek, dostaniesz $k < 1$ i pomyślisz, że figura została zmniejszona. Pamiętaj: Obraz na górze, oryginał na dole.',
      },
    },
  },
};
