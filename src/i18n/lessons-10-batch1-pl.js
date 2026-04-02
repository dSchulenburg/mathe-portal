export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia opanowala krzywa skoku Lumiego — ale teraz utkwila w martwym punkcie. W poziomie 3 gry "Hafenlichter" Lumi musi wyladowac na ruchomej platformie. "Potrzebuje dokladnego momentu, kiedy krzywa skoku trafia na platforme", mowi Mia do Tima. To oznacza: musi rozwiazac rownanie kwadratowe. Nie tylko narysowac funkcje, ale konkretnie wyznaczyc $x$.',
      challenge: 'Mia musi obliczyc, kiedy krzywa skoku Lumiego przecina ruchoma platforme — to prowadzi do rownania kwadratowego.',
      outro: 'Mia ma teraz trzy metody w swoim zestawie narzedzi: wzor kwadratowy, uzupelnianie do kwadratu i faktoryzacje. W zaleznosci od rownania wybiera odpowiednia metode — a Lumi laduje teraz precyzyjnie na kazdej platformie. "To jak scyzoryk szwajcarski", usmiecha sie.',
    },
    objectives: {
      solve: 'Pewnie rozwiazywac rownania kwadratowe i podawac zbior rozwiazan',
      pq_formula: 'Stosowac wzor kwadratowy — lacznie z przypadkami szczegolnymi (brak lub jedno rozwiazanie)',
      completing_square: 'Rozumiec i przeprowadzac uzupelnianie do kwadratu jako metode rozwiazywania',
      factoring: 'Rozwiazywac rownania kwadratowe przez faktoryzacje',
    },
    explanation: {
      intro: 'Rownanie kwadratowe ma postac ogolna z najwyzszym wykladnikiem 2. W przeciwienstwie do rownan liniowych ($x$ do potegi 1) moze miec zero, jedno lub dwa rozwiazania. Postac ogolna to:',
      normal_form: 'Do wzoru kwadratowego potrzebujemy postaci normalnej — to znaczy wspolczynnik przed $x^2$ musi wynosic dokladnie 1. Jesli tak nie jest, dzielimy cale rownanie przez $a$:',
      mia_tip: 'Zapamietuje sobie: Najpierw wszystko przenosze na jedna strone, zeby po prawej bylo zero. Potem dziele przez wspolczynnik przed $x^2$. Dopiero WTEDY moge uzyc wzoru kwadratowego!',
      pq_formula: 'Wzor kwadratowy to uniwersalne narzedzie do rownan kwadratowych w postaci normalnej. Odczytujesz $p$ i $q$ bezposrednio i wstawiasz:',
      completing_square: 'Uzupelnianie do kwadratu dziala tak: przeksztalcasz lewa strone w kwadrat doskonaly. W tym celu dodajesz $(\\frac{p}{2})^2$ po obu stronach. Wynikiem jest wyrazenie postaci $(x + \\frac{p}{2})^2$, ktore mozesz latwo rozwiazac wzgledem $x$.',
      factoring: 'Jesli znasz (lub mozesz odgadnac) miejsca zerowe $x_1$ i $x_2$, rownanie mozna zapisac jako iloczyn dwoch nawiasow. Iloczyn jest rowny zero, gdy co najmniej jeden czynnik jest rowny zero:',
    },
    concepts: {
      pq_formula: {
        title: 'Wzor kwadratowy',
        desc: 'Standardowe narzedzie do rownan kwadratowych w postaci normalnej. Dziala zawsze — potrzebujesz tylko $p$ (wspolczynnik przed $x$) i $q$ (wyraz wolny).',
      },
      completing_square: {
        title: 'Uzupelnianie do kwadratu',
        desc: 'Uzupelniasz lewa strone do kwadratu doskonalego. Szczegolnie przydatne, gdy chcesz tez wyznaczyc wierzcholek paraboli.',
      },
      discriminant: {
        title: 'Wyroznik (delta)',
        desc: 'Wyrazenie pod pierwiastkiem we wzorze kwadratowym: $D > 0$ daje dwa rozwiazania, $D = 0$ daje dokladnie jedno, $D < 0$ oznacza brak rozwiazania rzeczywistego.',
      },
      factoring: {
        title: 'Faktoryzacja',
        desc: 'Rozklad na dwa czynniki liniowe. Dziala szczegolnie elegancko, gdy miejsca zerowe sa liczbami calkowitymi — wtedy czesto mozna je odgadnac.',
      },
    },
    examples: {
      pq_application: {
        title: 'Rozwiazywanie rownania wzorem kwadratowym',
        context: 'Mia oblicza, kiedy krzywa skoku Lumiego trafia na platforme przy $y = 0$.',
        step1: 'Rownanie jest juz w postaci normalnej (wspolczynnik przed $x^2$ wynosi 1):',
        step2: 'Odczytujemy $p$ i $q$ — uwaga na znaki:',
        step3: 'Wstawiamy wartosci do wzoru kwadratowego i obliczamy krok po kroku:',
        step4: 'Dwa rozwiazania — Lumi trafia na platforme w dwoch miejscach:',
        mia_comment: 'Dwa rozwiazania maja sens: Lumi wyskakuje przy $x = 1$ i laduje przy $x = 3$. Odcinek pomiedzy to lot!',
      },
      completing_square: {
        title: 'Rozwiazywanie przez uzupelnianie do kwadratu',
        context: 'Tim chce rozwiazac rownanie bez wzoru kwadratowego — jako alternatywa.',
        step1: 'Zaczynamy od rownania w postaci normalnej:',
        step2: 'Najpierw przenosimy wyraz wolny na prawa strone:',
        step3: 'Teraz uzupelnianie do kwadratu: $(\\frac{6}{2})^2 = 9$ dodajemy po obu stronach:',
        step4: 'Lewa strona jest teraz kwadratem doskonalym — wyciagamy pierwiastek, co daje dwa przypadki:',
        step5: 'Obliczamy oba rozwiazania:',
        mia_comment: 'To samo rownanie, te same rozwiazania, inna droga. Uzywam uzupelniania do kwadratu, gdy potrzebuje tez wierzcholka paraboli — dwie pieczenie na jednym ogniu!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds i parabole rzutu',
        desc: 'Kazdy rzut w Angry Birds przebiega po paraboli. Rownanie $h(t) = 0$ mowi ci, kiedy obiekt uderza w ziemie. Fizycy uzywaja tego samego wzoru do opisu rzeczywistych ruchow rzutowych.',
      },
      breakeven: {
        title: 'Znajdowanie progu rentownosci',
        desc: 'Firma chce wiedziec: Od jakiej ilosci sztuk zaczynamy zarabiac? Rownanie zysku $G(x) = 0$ daje punkty progu rentownosci — najczesciej jest to rownanie kwadratowe.',
      },
      rocket: {
        title: 'Starty rakiet',
        desc: 'Wysokosc rakiety po starcie jest opisana funkcja kwadratowa (dopoki paliwo wystarcza). Kiedy osiagnie 1000 m? Rownanie kwadratowe!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Stosowanie wzoru kwadratowego bez zera po prawej stronie',
        correct: 'Najpierw przenies wszystko na jedna strone',
        why: 'Wzor kwadratowy wymaga, aby prawa strona byla rowna zero. Przy $x^2 + 3x = 5$ musisz najpierw dodac $-5$ po obu stronach, zeby powstalo $x^2 + 3x - 5 = 0$. W przeciwnym razie $q$ bedzie bledne!',
        mia_warning: 'Kiedys mialam ten blad w kodzie — kolizja z platforma byla zupelnie nieprawidlowa, bo $q$ mialo zly znak. Zawsze najpierw zero po prawej!',
      },
      sign_pq: {
        wrong: 'Blad znaku przy $p$ we wzorze kwadratowym',
        correct: 'Uwazaj na minus przed $\\frac{p}{2}$',
        why: 'We wzorze kwadratowym stoi $-\\frac{p}{2}$. Przy $x^2 - 6x + 8 = 0$ mamy $p = -6$, wiec $-\\frac{-6}{2} = +3$. Jesli zapomnisz o minusie, dostaniesz $-3$ zamiast $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia pracuje nad poziomem z latarnia morska w grze Hafenlichter. Latarnia rzuca snop swiatla na port, a Lumi musi ukrywac sie w cieniu. "Musze obliczyc, jak daleko siega snop swiatla przy danym kacie", mowi Mia. Tim wskazuje na trojkat prostokatny, ktory snop swiatla tworzy z ziemia. "To trygonometria — sinus, cosinus i tangens."',
      challenge: 'Mia potrzebuje zasiegu snopu swiatla przy roznych katach, zeby zaprogramowac strefy cienia.',
      outro: 'Latarnia morska obraca sie powoli, a snop swiatla wedruje po porcie. Dzieki sinusowi i cosinusowi kod Mii oblicza w czasie rzeczywistym, ktore obszary sa oswietlone. Lumi skrada sie od cienia do cienia — poziom jest naprawde fascynujacy!',
    },
    objectives: {
      sin_cos_tan: 'Pewnie stosowac sinus, cosinus i tangens w trojkacie prostokatnym',
      unit_circle: 'Rozumiec okrag jednostkowy i odczytywac z niego wartosci',
      angle_calculations: 'Obliczac katy i dlugosci bokow za pomoca funkcji trygonometrycznych',
      real_problems: 'Rozwiazywac zadania praktyczne z trygonometria (wysokosci, odleglosci, katy)',
    },
    explanation: {
      intro: 'Trygonometria laczy katy z dlugosciami bokow. W kazdym trojkacie prostokatnym obowiazuja trzy podstawowe stosunki — nazwane od kata $\\alpha$, ktory rozpatrujesz:',
      mia_tip: 'Moj sposob na zapamietanie: "SOH CAH TOA" — Sin = Przeciwprostokatna/Przeciwprostokatna, Cos = Przyprostokatna/Przeciwprostokatna, Tan = Przeciwprostokatna/Przyprostokatna. Brzmi dziwnie, ale nigdy sie nie zapomina!',
      unit_circle: 'Okrag jednostkowy ma promien 1 i srodek w poczatku ukladu wspolrzednych. Dla kazdego kata $\\alpha$ podaje bezposrednio wartosci: wspolrzedna $x$ to $\\cos(\\alpha)$, wspolrzedna $y$ to $\\sin(\\alpha)$. Dlatego zawsze zachodzi:',
      special_angles: 'Pewne katy powinienes znac na pamiec: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Wskazowka: Na okregu jednostkowym mozesz te wartosci odczytac geometrycznie.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'Stosunek przyprostokatnej lezacej naprzeciw kata do przeciwprostokatnej. Na okregu jednostkowym $\\sin(\\alpha)$ odpowiada wspolrzednej $y$ punktu na okregu.',
      },
      cosine: {
        title: 'Cosinus',
        desc: 'Stosunek przyprostokatnej przyleglej do kata do przeciwprostokatnej. Na okregu jednostkowym $\\cos(\\alpha)$ odpowiada wspolrzednej $x$. Cosinus i sinus sa przesuniete o $90°$.',
      },
      tangent: {
        title: 'Tangens',
        desc: 'Stosunek przyprostokatnej lezacej naprzeciw kata do przyprostokatnej przyleglej — lub rownowazne $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Idealny do nachylen i katow pochylenia.',
      },
      unit_circle: {
        title: 'Okrag jednostkowy',
        desc: 'Okrag o promieniu 1. Kazdy punkt na okregu ma wspolrzedne $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Dzieki temu mozna zdefiniowac sin i cos dla wszystkich katow — nie tylko ostrych.',
      },
    },
    examples: {
      height_tan: {
        title: 'Obliczanie wysokosci za pomoca tangensa',
        context: 'Mia mierzy kat do szczytu latarni: $35°$. Odleglosc od wiezy wynosi $50\\,\\text{m}$.',
        step1: 'Szkic: Odleglosc to przyprostokatna przylgla, szukana wysokosc to przyprostokatna naprzeciwlegla. Wiec tangens:',
        step2: 'Przeksztalcamy wzgledem wysokosci $h$ — mnozac obie strony przez $50\\,\\text{m}$:',
        step3: 'Kalkulator (tryb DEG!): $\\tan(35°) \\approx 0{,}7002$ — wstawiamy i obliczamy:',
        mia_comment: 'W grze to dziala w czasie rzeczywistym: kat snopu swiatla sie zmienia, a moj kod natychmiast oblicza nowy zasieg. Tangens jest do tego idealny!',
      },
      unit_circle: {
        title: 'Odczytywanie wartosci z okregu jednostkowego',
        context: 'Tim chce pokazac Mii, jak dziala okrag jednostkowy — na przykladzie $60°$.',
        step1: 'Zamiana kata (opcjonalnie): $60°$ odpowiada $\\frac{\\pi}{3}$ w mierze lukowej:',
        step2: 'Odczytujemy wartosc sinusa — wspolrzedna $y$ punktu na okregu jednostkowym:',
        step3: 'Odczytujemy wartosc cosinusa — wspolrzedna $x$:',
        step4: 'Punkt na okregu jednostkowym ma wiec wspolrzedne:',
        mia_comment: 'Na okregu jednostkowym widze sinus i cosinus jako dlugosci. To jest o wiele bardziej przejrzyste niz same liczby w tabeli!',
      },
    },
    realworld: {
      compass: {
        title: 'Nawigacja i GPS',
        desc: 'Twoj smartfon oblicza kierunki za pomoca trygonometrii. Funkcja atan2 zamienia wspolrzedne $x$ i $y$ na kat — dzieki temu Google Maps wie, w ktora strone masz isc.',
      },
      building_height: {
        title: 'Pomiar wysokosci budynkow',
        desc: 'Architekci i geodeci mierza wysokosci budynkow bez wchodzenia na dach. Przy uzyciu katomierza i tangensa wystarczy odleglosc i kat.',
      },
      music: {
        title: 'Dzwieki i fale akustyczne',
        desc: 'Kazdy ton to fala sinusoidalna. Ton koncertowy A ma 440 drgan na sekunde — opisany przez $f(t) = \\sin(880\\pi t)$. Muzyka to stosowana trygonometria!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Pomylenie sinusa z cosinusem',
        correct: 'Sinus = Przeciwprostokatna/Przeciwprostokatna',
        why: 'Sinus dotyczy przyprostokatnej naprzeciwleglej (bok naprzeciw kata), cosinus przyprostokatnej przyleglej (bok obok kata). Jesli je pomylisz, dostaniesz bledna wartosc.',
        mia_warning: 'Wciaz mi sie to czasem zdarza! Rysuje trojkat i podpisuje boki wzgledem kata. Wtedy od razu widze, ktora jest przeciwlegla, a ktora przylgla.',
      },
      deg_rad: {
        wrong: 'Zly tryb katowy na kalkulatorze',
        correct: 'Zawsze sprawdzaj tryb DEG przy stopniach',
        why: 'W trybie RAD kalkulator interpretuje $90$ jako $90$ radianow (ok. $5156°$), a nie jako $90°$. $\\sin(90°) = 1$, ale $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Wynik: zupelnie bledny.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter ma dostac tryb wieloosobowy. Mia testuje serwery z 10 graczami — wszystko dziala plynnie. Ale Tim ostrzega: "A co bedzie przy 100? Przy 1000? Jesli gra stanie sie wirusowa, liczba graczy moze sie podwajac co kilka dni." Mia liczy i jest zszokowana: wzrost wykladniczy jest o wiele szybszy, niz sie mysli.',
      challenge: 'Obciazenie serwerow nie rosnie liniowo z liczba graczy, lecz wykladniczo. Mia musi przewidziec, kiedy serwery zostana przeciazone.',
      outro: 'Mia zbudowala model przewidujacy rozwoj liczby graczy. Dzieki funkcji wykladniczej wie teraz: Jesli czas podwojenia wynosi 3 dni, po 2 tygodniach potrzebuje 32 razy wiecej pojemnosci serwera. "Lepiej skalowac wczesniej niz pozno sie zalamac", decyduje.',
    },
    objectives: {
      exponential_functions: 'Rozpoznawac funkcje wykladnicze i odromniac je od funkcji liniowych',
      growth_factor: 'Wyznaczac wspolczynnik wzrostu z danych procentowych i interpretowac go',
      half_life: 'Obliczac i stosowac okres poltrwania i czas podwojenia',
      model_real_world: 'Modelowac rzeczywiste procesy wzrostu i rozpadu za pomoca funkcji wykladniczych',
    },
    explanation: {
      intro: 'Przy wzroscie liniowym w kazdym kroku dodaje sie taka sama wartosc. Przy wzroscie wykladniczym w kazdym kroku mnozy sie przez ten sam wspolczynnik. Brzmi podobnie — ale prowadzi do zupelnie roznych wynikow:',
      growth_factor: 'Wspolczynnik wzrostu $b$ mowi ci wszystko: Jesli cos rosnie o $p\\%$ na jednostke czasu, wspolczynnik jest wiekszy od 1. Jesli cos maleje o $p\\%$ (rozpad), jest mniejszy od 1:',
      mia_tip: 'Funkcje liniowe dodaja, funkcje wykladnicze mnoza. Przy 10% wzrostu dziennie wspolczynnik wynosi $b = 1{,}10$ — po 7 dniach wiec $1{,}10^7 \\approx 1{,}95$, prawie podwojenie! To mnie zaskoczylo przy planowaniu serwerow.',
      half_life: 'Okres poltrwania $t_H$ to czas, po ktorym zostaje polowa. Jest staly — niezaleznie od wartosci poczatkowej. To jest to, co wyroznia rozpad wykladniczy:',
      doubling_time: 'Odpowiednik przy wzroscie: Czas podwojenia $t_V$ mowi ci, po jakim czasie wartosc sie podwoi. Rowniez on pozostaje zawsze taki sam:',
    },
    concepts: {
      exponential_function: {
        title: 'Funkcja wykladnicza',
        desc: 'Postac ogolna: $a$ to wartosc poczatkowa, $b$ wspolczynnik wzrostu, $t$ czas. Kluczowe: zmienna stoi w wykladniku — to roznica w porownaniu z funkcjami potegowymi.',
      },
      growth_factor: {
        title: 'Wspolczynnik wzrostu',
        desc: 'Przy $p\\%$ wzrostu: $b = 1 + \\frac{p}{100}$. Przyklad: 5% wzrostu daje $b = 1{,}05$. Przy 12% spadku: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Okres poltrwania',
        desc: 'Czas, po ktorym wartosc zmniejszy sie o polowe. Typowy dla rozpadu promieniotworczego, lekow w organizmie lub rozladowania baterii. Okres poltrwania jest niezalezny od wartosci poczatkowej.',
      },
      euler_base: {
        title: 'Naturalna funkcja wykladnicza',
        desc: 'Podstawa $e \\approx 2{,}718$ jest szczegolna: funkcja $e^x$ jest wlasna pochodna. Z $k > 0$ rosnie, z $k < 0$ zanika. Standard w naukach przyrodniczych.',
      },
    },
    examples: {
      bacteria: {
        title: 'Wzrost bakterii',
        context: 'Kultura bakteryjna zaczyna od 500 bakterii i podwaja sie co godzine.',
        step1: 'Identyfikujemy wartosc poczatkowa i wspolczynnik wzrostu — podwojenie oznacza wspolczynnik 2:',
        step2: 'Budujemy funkcje wykladnicza — $t$ liczy godziny:',
        step3: 'Podstawiamy $t = 5$ (po 5 godzinach): $2^5 = 32$:',
        step4: 'Po 5 godzinach jest 16 000 bakterii:',
        mia_comment: 'Z 500 do 16 000 w zaledwie 5 godzin! To pokazuje, dlaczego wzrost wykladniczy jest tak zaskakujacy. Z serwerami jest podobnie — liczba graczy moze rosnac szybciej, niz mozna zamowic serwery.',
      },
      radioactive: {
        title: 'Rozpad promieniotworczy',
        context: 'Lek ma okres poltrwania 8 dni. Poczatkowa ilosc: 200 g.',
        step1: 'Notujemy okres poltrwania i wartosc poczatkowa:',
        step2: 'Budujemy wzor rozpadu z $t_H = 8$:',
        step3: 'Podstawiamy po 24 dniach — to dokladnie 3 okresy poltrwania ($\\frac{24}{8} = 3$):',
        step4: 'Po 24 dniach zostaje tylko 25 g — jedna osma wartosci poczatkowej:',
        mia_comment: 'Po kazdym okresie poltrwania ilosc maleje o polowe: $200 \\to 100 \\to 50 \\to 25$. Tak jest zawsze, niezaleznie od tego, czy zaczynasz od 200 g czy od 2 ton.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Wirusowe filmy na TikToku',
        desc: 'Wirusowe wideo zaczyna od 100 wyswietlen. Jesli kazdy widz pokazuje je 1,8 osobom, liczby eksploduja: po 10 rundach to juz ponad 35 000 wyswietlen. Algorytmy jeszcze wzmacniaja ten efekt.',
      },
      battery: {
        title: 'Rozladowanie baterii',
        desc: 'Twoja bateria w telefonie traci okolo 5% ladunku na godzine. Po 14 godzinach zostaje okolo polowa — to nie jest spadek liniowy, lecz rozpad wykladniczy.',
      },
      pandemic: {
        title: 'Rozprzestrzenianie sie pandemii',
        desc: 'COVID-19 pokazal, co oznacza "wzrost wykladniczy": Bez srodkow zaradczych liczba przypadkow podwajala sie co 3 dni. Po miesiacu to wspolczynnik $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Model liniowy zamiast wykladniczego',
        correct: 'Zmiana procentowa = funkcja wykladnicza',
        why: '"5% wzrostu rocznie" to NIE $+5$ rocznie, lecz $\\cdot 1{,}05$ rocznie. Przy modelu liniowym przyrost jest staly, przy wykladniczym rosnie coraz szybciej.',
        mia_warning: 'Na poczatku liczylem $\\text{Gracze}(t) = 100 + 50t$. Rzeczywiste liczby po tygodniu byly 3 razy wyzsze! Wzrost wykladniczy prawie zawsze sie nie docenia.',
      },
      wrong_growth_factor: {
        wrong: 'Wstawienie procentu bezposrednio jako wspolczynnika',
        correct: 'Wspolczynnik = $1 + \\frac{p}{100}$',
        why: 'Przy 3% wzrostu wspolczynnik wynosi $1{,}03$, nie $3$! Z $b = 3$ wartosc potrojilaby sie zamiast rosnac o 3%. Zawsze licz $1 + \\frac{p}{100}$.',
      },
    },
  },
};
