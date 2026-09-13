export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia opanowała krzywą skoku Lumiego — ale teraz utknęła w martwym punkcie. W poziomie 3 gry "Hafenlichter" Lumi musi wylądować na ruchomej platformie. "Potrzebuję dokładnego momentu, kiedy krzywa skoku trafia na platformę", mówi Mia do Tima. To oznacza: musi rozwiązać równanie kwadratowe. Nie tylko narysować funkcję, ale konkretnie wyznaczyć $x$.',
      challenge: 'Mia musi obliczyć, kiedy krzywa skoku Lumiego przecina ruchomą platformę — to prowadzi do równania kwadratowego.',
      outro: 'Mia ma teraz trzy metody w swoim zestawie narzędzi: wzór kwadratowy, uzupełnianie do kwadratu i faktoryzację. W zależności od równania wybiera odpowiednią metodę — a Lumi ląduje teraz precyzyjnie na każdej platformie. "To jak scyzoryk szwajcarski", uśmiecha się.',
    },
    objectives: {
      solve: 'Pewnie rozwiązywać równania kwadratowe i podawać zbiór rozwiązań',
      pq_formula: 'Stosować wzór kwadratowy — łącznie z przypadkami szczególnymi (brak lub jedno rozwiązanie)',
      completing_square: 'Rozumieć i przeprowadzać uzupełnianie do kwadratu jako metodę rozwiązywania',
      factoring: 'Rozwiązywać równania kwadratowe przez faktoryzację',
    },
    explanation: {
      intro: 'Równanie kwadratowe ma postać ogólną z najwyższym wykładnikiem 2. W przeciwieństwie do równań liniowych ($x$ do potęgi 1) może mieć zero, jedno lub dwa rozwiązania. Postać ogólna to:',
      normal_form: 'Do wzoru kwadratowego potrzebujemy postaci normalnej — to znaczy współczynnik przed $x^2$ musi wynosić dokładnie 1. Jeśli tak nie jest, dzielimy całe równanie przez $a$:',
      mia_tip: 'Zapamiętuję sobie: Najpierw wszystko przenoszę na jedną stronę, żeby po prawej było zero. Potem dzielę przez współczynnik przed $x^2$. Dopiero WTEDY mogę użyć wzoru kwadratowego!',
      pq_formula: 'Wzór kwadratowy to uniwersalne narzędzie do równań kwadratowych w postaci normalnej. Odczytujesz $p$ i $q$ bezpośrednio i wstawiasz:',
      completing_square: 'Uzupełnianie do kwadratu działa tak: przekształcasz lewą stronę w kwadrat doskonały. W tym celu dodajesz $(\\frac{p}{2})^2$ po obu stronach. Wynikiem jest wyrażenie postaci $(x + \\frac{p}{2})^2$, które możesz łatwo rozwiązać względem $x$.',
      factoring: 'Jeśli znasz (lub możesz odgadnąć) miejsca zerowe $x_1$ i $x_2$, równanie można zapisać jako iloczyn dwóch nawiasów. Iloczyn jest równy zero, gdy co najmniej jeden czynnik jest równy zero:',
    },
    concepts: {
      pq_formula: {
        title: 'Wzór kwadratowy',
        desc: 'Standardowe narzędzie do równań kwadratowych w postaci normalnej. Działa zawsze — potrzebujesz tylko $p$ (współczynnik przed $x$) i $q$ (wyraz wolny).',
      },
      completing_square: {
        title: 'Uzupełnianie do kwadratu',
        desc: 'Uzupełniasz lewą stronę do kwadratu doskonałego. Szczególnie przydatne, gdy chcesz też wyznaczyć wierzchołek paraboli.',
      },
      discriminant: {
        title: 'Wyróżnik (delta)',
        desc: 'Wyrażenie pod pierwiastkiem we wzorze kwadratowym: $D > 0$ daje dwa rozwiązania, $D = 0$ daje dokładnie jedno, $D < 0$ oznacza brak rozwiązania rzeczywistego.',
      },
      factoring: {
        title: 'Faktoryzacja',
        desc: 'Rozkład na dwa czynniki liniowe. Działa szczególnie elegancko, gdy miejsca zerowe są liczbami całkowitymi — wtedy często można je odgadnąć.',
      },
    },
    examples: {
      pq_application: {
        title: 'Rozwiązywanie równania wzorem kwadratowym',
        context: 'Mia oblicza, kiedy krzywa skoku Lumiego trafia na platformę przy $y = 0$.',
        step1: 'Równanie jest już w postaci normalnej (współczynnik przed $x^2$ wynosi 1):',
        step2: 'Odczytujemy $p$ i $q$ — uwaga na znaki:',
        step3: 'Wstawiamy wartości do wzoru kwadratowego i obliczamy krok po kroku:',
        step4: 'Dwa rozwiązania — Lumi trafia na platformę w dwóch miejscach:',
        mia_comment: 'Dwa rozwiązania mają sens: Lumi wyskakuje przy $x = 1$ i ląduje przy $x = 3$. Odcinek pomiędzy to lot!',
      },
      completing_square: {
        title: 'Rozwiązywanie przez uzupełnianie do kwadratu',
        context: 'Tim chce rozwiązać równanie bez wzoru kwadratowego — jako alternatywa.',
        step1: 'Zaczynamy od równania w postaci normalnej:',
        step2: 'Najpierw przenosimy wyraz wolny na prawą stronę:',
        step3: 'Teraz uzupełnianie do kwadratu: $(\\frac{6}{2})^2 = 9$ dodajemy po obu stronach:',
        step4: 'Lewa strona jest teraz kwadratem doskonałym — wyciągamy pierwiastek, co daje dwa przypadki:',
        step5: 'Obliczamy oba rozwiązania:',
        mia_comment: 'To samo równanie, te same rozwiązania, inna droga. Używam uzupełniania do kwadratu, gdy potrzebuję też wierzchołka paraboli — dwie pieczenie na jednym ogniu!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds i parabole rzutu',
        desc: 'Każdy rzut w Angry Birds przebiega po paraboli. Równanie $h(t) = 0$ mówi ci, kiedy obiekt uderza w ziemię. Fizycy używają tego samego wzoru do opisu rzeczywistych ruchów rzutowych.',
      },
      breakeven: {
        title: 'Znajdowanie progu rentowności',
        desc: 'Firma chce wiedzieć: Od jakiej ilości sztuk zaczynamy zarabiać? Równanie zysku $G(x) = 0$ daje punkty progu rentowności — najczęściej jest to równanie kwadratowe.',
      },
      rocket: {
        title: 'Starty rakiet',
        desc: 'Wysokość rakiety po starcie jest opisana funkcją kwadratową (dopóki paliwo wystarcza). Kiedy osiągnie 1000 m? Równanie kwadratowe!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Stosowanie wzoru kwadratowego bez zera po prawej stronie',
        correct: 'Najpierw przenieś wszystko na jedną stronę',
        why: 'Wzór kwadratowy wymaga, aby prawa strona była równa zero. Przy $x^2 + 3x = 5$ musisz najpierw dodać $-5$ po obu stronach, żeby powstało $x^2 + 3x - 5 = 0$. W przeciwnym razie $q$ będzie błędne!',
        mia_warning: 'Kiedyś miałam ten błąd w kodzie — kolizja z platformą była zupełnie nieprawidłowa, bo $q$ miało zły znak. Zawsze najpierw zero po prawej!',
      },
      sign_pq: {
        wrong: 'Błąd znaku przy $p$ we wzorze kwadratowym',
        correct: 'Uważaj na minus przed $\\frac{p}{2}$',
        why: 'We wzorze kwadratowym stoi $-\\frac{p}{2}$. Przy $x^2 - 6x + 8 = 0$ mamy $p = -6$, więc $-\\frac{-6}{2} = +3$. Jeśli zapomnisz o minusie, dostaniesz $-3$ zamiast $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia pracuje nad poziomem z latarnią morską w grze Hafenlichter. Latarnia rzuca snop światła na port, a Lumi musi ukrywać się w cieniu. "Muszę obliczyć, jak daleko sięga snop światła przy danym kącie", mówi Mia. Tim wskazuje na trójkąt prostokątny, który snop światła tworzy z ziemią. "To trygonometria — sinus, cosinus i tangens."',
      challenge: 'Mia potrzebuje zasięgu snopu światła przy różnych kątach, żeby zaprogramować strefy cienia.',
      outro: 'Latarnia morska obraca się powoli, a snop światła wędruje po porcie. Dzięki sinusowi i cosinusowi kod Mii oblicza w czasie rzeczywistym, które obszary są oświetlone. Lumi skrada się od cienia do cienia — poziom jest naprawdę fascynujący!',
    },
    objectives: {
      sin_cos_tan: 'Pewnie stosować sinus, cosinus i tangens w trójkącie prostokątnym',
      unit_circle: 'Rozumieć okrąg jednostkowy i odczytywać z niego wartości',
      angle_calculations: 'Obliczać kąty i długości boków za pomocą funkcji trygonometrycznych',
      real_problems: 'Rozwiązywać zadania praktyczne z trygonometrią (wysokości, odległości, kąty)',
    },
    explanation: {
      intro: 'Trygonometria łączy kąty z długościami boków. W każdym trójkącie prostokątnym obowiązują trzy podstawowe stosunki — nazwane od kąta $\\alpha$, który rozpatrujesz:',
      mia_tip: 'Mój sposób na zapamiętanie: "SOH CAH TOA" — Sin = przeciwległa/przeciwprostokątna, Cos = przyległa/przeciwprostokątna, Tan = przeciwległa/przyległa. Brzmi dziwnie, ale nigdy się nie zapomina!',
      unit_circle: 'Okrąg jednostkowy ma promień 1 i środek w początku układu współrzędnych. Dla każdego kąta $\\alpha$ podaje bezpośrednio wartości: współrzędna $x$ to $\\cos(\\alpha)$, współrzędna $y$ to $\\sin(\\alpha)$. Dlatego zawsze zachodzi:',
      special_angles: 'Pewne kąty powinieneś znać na pamięć: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Wskazówka: Na okręgu jednostkowym możesz te wartości odczytać geometrycznie.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'Stosunek przyprostokątnej leżącej naprzeciw kąta do przeciwprostokątnej. Na okręgu jednostkowym $\\sin(\\alpha)$ odpowiada współrzędnej $y$ punktu na okręgu.',
      },
      cosine: {
        title: 'Cosinus',
        desc: 'Stosunek przyprostokątnej przyległej do kąta do przeciwprostokątnej. Na okręgu jednostkowym $\\cos(\\alpha)$ odpowiada współrzędnej $x$. Cosinus i sinus są przesunięte o $90°$.',
      },
      tangent: {
        title: 'Tangens',
        desc: 'Stosunek przyprostokątnej leżącej naprzeciw kąta do przyprostokątnej przyległej — lub równoważnie $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Idealny do nachyleń i kątów pochylenia.',
      },
      unit_circle: {
        title: 'Okrąg jednostkowy',
        desc: 'Okrąg o promieniu 1. Każdy punkt na okręgu ma współrzędne $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Dzięki temu można zdefiniować sin i cos dla wszystkich kątów — nie tylko ostrych.',
      },
    },
    examples: {
      height_tan: {
        title: 'Obliczanie wysokości za pomocą tangensa',
        context: 'Mia mierzy kąt do szczytu latarni: $35°$. Odległość od wieży wynosi $50\\,\\text{m}$.',
        step1: 'Szkic: Odległość to przyprostokątna przyległa, szukana wysokość to przyprostokątna naprzeciwległa. Więc tangens:',
        step2: 'Przekształcamy względem wysokości $h$ — mnożąc obie strony przez $50\\,\\text{m}$:',
        step3: 'Kalkulator (tryb DEG!): $\\tan(35°) \\approx 0{,}7002$ — wstawiamy i obliczamy:',
        mia_comment: 'W grze to działa w czasie rzeczywistym: kąt snopu światła się zmienia, a mój kod natychmiast oblicza nowy zasięg. Tangens jest do tego idealny!',
      },
      unit_circle: {
        title: 'Odczytywanie wartości z okręgu jednostkowego',
        context: 'Tim chce pokazać Mii, jak działa okrąg jednostkowy — na przykładzie $60°$.',
        step1: 'Zamiana kąta (opcjonalnie): $60°$ odpowiada $\\frac{\\pi}{3}$ w mierze łukowej:',
        step2: 'Odczytujemy wartość sinusa — współrzędna $y$ punktu na okręgu jednostkowym:',
        step3: 'Odczytujemy wartość cosinusa — współrzędna $x$:',
        step4: 'Punkt na okręgu jednostkowym ma więc współrzędne:',
        mia_comment: 'Na okręgu jednostkowym widzę sinus i cosinus jako długości. To jest o wiele bardziej przejrzyste niż same liczby w tabeli!',
      },
    },
    realworld: {
      compass: {
        title: 'Nawigacja i GPS',
        desc: 'Twój smartfon oblicza kierunki za pomocą trygonometrii. Funkcja atan2 zamienia współrzędne $x$ i $y$ na kąt — dzięki temu Google Maps wie, w którą stronę masz iść.',
      },
      building_height: {
        title: 'Pomiar wysokości budynków',
        desc: 'Architekci i geodeci mierzą wysokości budynków bez wchodzenia na dach. Przy użyciu kątomierza i tangensa wystarczy odległość i kąt.',
      },
      music: {
        title: 'Dźwięki i fale akustyczne',
        desc: 'Każdy ton to fala sinusoidalna. Ton koncertowy A ma 440 drgań na sekundę — opisany przez $f(t) = \\sin(880\\pi t)$. Muzyka to stosowana trygonometria!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Pomylenie sinusa z cosinusem',
        correct: 'Sinus = przeciwległa/przeciwprostokątna',
        why: 'Sinus dotyczy przyprostokątnej naprzeciwległej (bok naprzeciw kąta), cosinus przyprostokątnej przyległej (bok obok kąta). Jeśli je pomylisz, dostaniesz błędną wartość.',
        mia_warning: 'Wciąż mi się to czasem zdarza! Rysuję trójkąt i podpisuję boki względem kąta. Wtedy od razu widzę, która jest przeciwległa, a która przyległa.',
      },
      deg_rad: {
        wrong: 'Zły tryb kątowy na kalkulatorze',
        correct: 'Zawsze sprawdzaj tryb DEG przy stopniach',
        why: 'W trybie RAD kalkulator interpretuje $90$ jako $90$ radianów (ok. $5156°$), a nie jako $90°$. $\\sin(90°) = 1$, ale $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Wynik: zupełnie błędny.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter ma dostać tryb wieloosobowy. Mia testuje serwery z 10 graczami — wszystko działa płynnie. Ale Tim ostrzega: "A co będzie przy 100? Przy 1000? Jeśli gra stanie się wirusowa, liczba graczy może się podwajać co kilka dni." Mia liczy i jest zszokowana: wzrost wykładniczy jest o wiele szybszy, niż się myśli.',
      challenge: 'Obciążenie serwerów nie rośnie liniowo z liczbą graczy, lecz wykładniczo. Mia musi przewidzieć, kiedy serwery zostaną przeciążone.',
      outro: 'Mia zbudowała model przewidujący rozwój liczby graczy. Dzięki funkcji wykładniczej wie teraz: Jeśli czas podwojenia wynosi 3 dni, po 2 tygodniach potrzebuje 32 razy więcej pojemności serwera. "Lepiej skalować wcześniej niż późno się załamać", decyduje.',
    },
    objectives: {
      exponential_functions: 'Rozpoznawać funkcje wykładnicze i odróżniać je od funkcji liniowych',
      growth_factor: 'Wyznaczać współczynnik wzrostu z danych procentowych i interpretować go',
      half_life: 'Obliczać i stosować okres połowicznego rozpadu i czas podwojenia',
      model_real_world: 'Modelować rzeczywiste procesy wzrostu i rozpadu za pomocą funkcji wykładniczych',
    },
    explanation: {
      intro: 'Przy wzroście liniowym w każdym kroku dodaje się taką samą wartość. Przy wzroście wykładniczym w każdym kroku mnoży się przez ten sam współczynnik. Brzmi podobnie — ale prowadzi do zupełnie różnych wyników:',
      growth_factor: 'Współczynnik wzrostu $b$ mówi ci wszystko: Jeśli coś rośnie o $p\\%$ na jednostkę czasu, współczynnik jest większy od 1. Jeśli coś maleje o $p\\%$ (rozpad), jest mniejszy od 1:',
      mia_tip: 'Funkcje liniowe dodają, funkcje wykładnicze mnożą. Przy 10% wzrostu dziennie współczynnik wynosi $b = 1{,}10$ — po 7 dniach więc $1{,}10^7 \\approx 1{,}95$, prawie podwojenie! To mnie zaskoczyło przy planowaniu serwerów.',
      half_life: 'Okres połowicznego rozpadu $t_H$ to czas, po którym zostaje połowa. Jest stały — niezależnie od wartości początkowej. To jest to, co wyróżnia rozpad wykładniczy:',
      doubling_time: 'Odpowiednik przy wzroście: Czas podwojenia $t_V$ mówi ci, po jakim czasie wartość się podwoi. Również on pozostaje zawsze taki sam:',
    },
    concepts: {
      exponential_function: {
        title: 'Funkcja wykładnicza',
        desc: 'Postać ogólna: $a$ to wartość początkowa, $b$ współczynnik wzrostu, $t$ czas. Kluczowe: zmienna stoi w wykładniku — to różnica w porównaniu z funkcjami potęgowymi.',
      },
      growth_factor: {
        title: 'Współczynnik wzrostu',
        desc: 'Przy $p\\%$ wzrostu: $b = 1 + \\frac{p}{100}$. Przykład: 5% wzrostu daje $b = 1{,}05$. Przy 12% spadku: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Okres połowicznego rozpadu',
        desc: 'Czas, po którym wartość zmniejszy się o połowę. Typowy dla rozpadu promieniotwórczego, leków w organizmie lub rozładowania baterii. Okres połowicznego rozpadu jest niezależny od wartości początkowej.',
      },
      euler_base: {
        title: 'Naturalna funkcja wykładnicza',
        desc: 'Podstawa $e \\approx 2{,}718$ jest szczególna: funkcja $e^x$ jest własną pochodną. Z $k > 0$ rośnie, z $k < 0$ zanika. Standard w naukach przyrodniczych.',
      },
    },
    examples: {
      bacteria: {
        title: 'Wzrost bakterii',
        context: 'Kultura bakteryjna zaczyna od 500 bakterii i podwaja się co godzinę.',
        step1: 'Identyfikujemy wartość początkową i współczynnik wzrostu — podwojenie oznacza współczynnik 2:',
        step2: 'Budujemy funkcję wykładniczą — $t$ liczy godziny:',
        step3: 'Podstawiamy $t = 5$ (po 5 godzinach): $2^5 = 32$:',
        step4: 'Po 5 godzinach jest 16 000 bakterii:',
        mia_comment: 'Z 500 do 16 000 w zaledwie 5 godzin! To pokazuje, dlaczego wzrost wykładniczy jest tak zaskakujący. Z serwerami jest podobnie — liczba graczy może rosnąć szybciej, niż można zamówić serwery.',
      },
      radioactive: {
        title: 'Rozpad promieniotwórczy',
        context: 'Lek ma okres połowicznego rozpadu 8 dni. Początkowa ilość: 200 g.',
        step1: 'Notujemy okres połowicznego rozpadu i wartość początkową:',
        step2: 'Budujemy wzór rozpadu z $t_H = 8$:',
        step3: 'Podstawiamy po 24 dniach — to dokładnie 3 okresy połowicznego rozpadu ($\\frac{24}{8} = 3$):',
        step4: 'Po 24 dniach zostaje tylko 25 g — jedna ósma wartości początkowej:',
        mia_comment: 'Po każdym okresie połowicznego rozpadu ilość maleje o połowę: $200 \\to 100 \\to 50 \\to 25$. Tak jest zawsze, niezależnie od tego, czy zaczynasz od 200 g czy od 2 ton.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Wirusowe filmy na TikToku',
        desc: 'Wirusowe wideo zaczyna od 100 wyświetleń. Jeśli każdy widz pokazuje je 1,8 osobom, liczby eksplodują: po 10 rundach to już ponad 35 000 wyświetleń. Algorytmy jeszcze wzmacniają ten efekt.',
      },
      battery: {
        title: 'Rozładowanie baterii',
        desc: 'Twoja bateria w telefonie traci około 5% ładunku na godzinę. Po 14 godzinach zostaje około połowa — to nie jest spadek liniowy, lecz rozpad wykładniczy.',
      },
      pandemic: {
        title: 'Rozprzestrzenianie się pandemii',
        desc: 'COVID-19 pokazał, co oznacza "wzrost wykładniczy": Bez środków zaradczych liczba przypadków podwajała się co 3 dni. Po miesiącu to współczynnik $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Model liniowy zamiast wykładniczego',
        correct: 'Zmiana procentowa = funkcja wykładnicza',
        why: '"5% wzrostu rocznie" to NIE $+5$ rocznie, lecz $\\cdot 1{,}05$ rocznie. Przy modelu liniowym przyrost jest stały, przy wykładniczym rośnie coraz szybciej.',
        mia_warning: 'Na początku liczyłam $\\text{Gracze}(t) = 100 + 50t$. Rzeczywiste liczby po tygodniu były 3 razy wyższe! Wzrost wykładniczy prawie zawsze się nie docenia.',
      },
      wrong_growth_factor: {
        wrong: 'Wstawienie procentu bezpośrednio jako współczynnika',
        correct: 'Współczynnik = $1 + \\frac{p}{100}$',
        why: 'Przy 3% wzrostu współczynnik wynosi $1{,}03$, nie $3$! Z $b = 3$ wartość potroiłaby się zamiast rosnąć o 3%. Zawsze licz $1 + \\frac{p}{100}$.',
      },
    },
  },
};
