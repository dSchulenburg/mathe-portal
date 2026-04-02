export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Model ML Amira dla DataPulse daje uzyteczne rekomendacje piosenek — ale trening trwa wiecznie. "Gradient Descent to w zasadzie nic innego niz pochodne", wyjasnia mu jego profesorka matematyki. "Jesli zrozumiesz, jak dzialaja reguly rozniczkowania, zrozumiesz tez, dlaczego twoj model sie uczy." Amir postanawia systematycznie przejsc przez te reguly.',
      challenge: 'Amir chce zrozumiec, jak jego model ML wewnetrznie rozniczkuje funkcje straty — do tego potrzebuje regul: potegowej, sumy, iloczynu i lancuchowej.',
      outro: 'Amir ma teraz solidne fundamenty: regula potegowa dla prostych wyrazen, reguly sumy i stalej dla zlozonych wyrazen, regula iloczynu dla mnozen i regula lancuchowa dla zagniezdonych funkcji. "Teraz w koncu rozumiem, co PyTorch robi w tle z Autogradem", mowi zadowolony.',
    },
    objectives: {
      power_rule: 'Pewnie stosowac regule potegowa: rozniczkowac $f(x) = x^n$',
      constant_sum_rule: 'Opanowac reguly stalej i sumy: rozniczkowac wyrazy osobno i zachowywac wspolczynniki',
      product_quotient_rule: 'Poprawnie stosowac reguly iloczynu i ilorazu',
      chain_rule: 'Pewnie stosowac regule lancuchowa przy zagniezdonych funkcjach',
    },
    explanation: {
      intro: 'Regula potegowa to najwazniejsza regula bazowa: Wyciagasz wykladnik jako wspolczynnik i zmniejszasz wykladnik o 1. Dzieki temu rozniczkujesz kazda funkcje potegowa w mgnieniu oka:',
      constant_factor: 'Stale wspolczynniki pozostaja przy rozniczkowaniu, a sumy mozna rozniczkowac wyraz po wyrazie. To sprawia, ze zlozone wyrazy sa przejrzyste:',
      amir_tip: 'W moim kodzie ML wszedzie sa sumy i wspolczynniki — funkcja straty to ogromna suma po wszystkich punktach danych. To, ze moge rozniczkowac kazdy wyraz osobno, sprawia, ze backpropagation w ogole jest mozliwe!',
      product_rule: 'Gdy dwie funkcje sa mnozoone, NIE wolno po prostu rozniczkowac kazdej z osobna. Zamiast tego obowiazuje regula iloczynu — "pierwszy razy pochodna drugiego plus drugi razy pochodna pierwszego":',
      quotient_rule: 'Dla ulamkow funkcji istnieje regula ilorazu. Pomoc pamieciowa: "Mianownik razy pochodna licznika minus licznik razy pochodna mianownika przez mianownik do kwadratu":',
      chain_rule: 'Przy zagniezdonych funkcjach — czyli funkcji w funkcji — potrzebujesz reguly lancuchowej. Rozniczkujesz "od zewnatrz do wewnatrz" i mnozysz przez pochodna wewnetrzna:',
    },
    concepts: {
      power_rule: {
        title: 'Regula potegowa',
        desc: 'Regula podstawowa: Wykladnik staje sie wspolczynnikiem, wykladnik maleje o 1. Obowiazuje tez dla ujemnych i ulamkowych wykladnikow, np. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Reguly sumy i stalej',
        desc: 'Sumy rozniczkuje sie wyraz po wyrazie, stale wspolczynniki sa zachowywane. Dzieki temu rozkladasz kazdy wyraz wielomianowy na proste czesci.',
      },
      product_rule: {
        title: 'Regula iloczynu',
        desc: 'Dla iloczynu dwoch funkcji: Pierwsza rozniczkowana razy druga plus pierwsza razy druga rozniczkowana. Niezbedna, gdy dwa zmienne wyrazenia sa mnozoone.',
      },
      chain_rule: {
        title: 'Regula lancuchowa',
        desc: 'Rozniczkuj funkcje zewnetrzna, zostaw wewnetrzna, potem pomnoz przez pochodna wewnetrzna. Serce backpropagation w sieciach neuronowych.',
      },
    },
    examples: {
      power_sum: {
        title: 'Rozniczkowanie wielomianu regulami potegowa i sumy',
        context: 'Amir upraszcza wyraz ze swojej funkcji kosztu.',
        step1: 'Dany jest wielomian — rozniczkujemy kazdy wyraz osobno:',
        step2: 'Stosujemy regule potegowa do kazdego wyrazu: Wykladnik jako wspolczynnik, wykladnik minus 1. Stala $-7$ odpada:',
        step3: 'Uproszczone daje funkcje pochodna:',
        amir_comment: 'Dokladnie tak wyglada gradient moich cech wielomianowych. Kazdy wyraz wnosi swoj wklad do nachylenia — a PyTorch robi to automatycznie dla tysiecy parametrow jednoczesnie.',
      },
      chain_rule: {
        title: 'Zagniezdzona funkcja z regula lancuchowa',
        context: 'Amir rozniczkuje funkcje aktywacji, ktora zawiera zlozenie.',
        step1: 'Dana jest zagniezdzona funkcja potegowa:',
        step2: 'Rozklad na funkcje zewnetrzna $f(u) = u^3$ i wewnetrzna $g(x) = 2x^2 + 1$:',
        step3: 'Rozniczkuj zewnetrzna (regula potegowa na $u^3$), zostaw wewnetrzna, razy pochodna wewnetrzna ($4x$):',
        step4: 'Uporzadkowane — czynnik $4x$ wyciagniety na poczatek:',
        amir_comment: 'Regula lancuchowa to dosłownie backpropagation! Kazda warstwa w sieci neuronowej to zagniezdzona funkcja, a regula lancuchowa laczy gradienty od warstwy do warstwy.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent w Machine Learning',
        desc: 'Kazdy model ML minimalizuje funkcje straty przez rozniczkowanie. Gradient wskazuje kierunek najstromszego wzrostu — idziemy w przeciwnym kierunku, aby znalezc minimum.',
      },
      marginal_cost: {
        title: 'Koszty krancowe w ekonomii',
        desc: 'Pochodna funkcji kosztow $K(x)$ daje koszty krancowe: Ile kosztuje wytworzenie jeszcze jednej jednostki? Firmy codziennie wykorzystuja to do kalkulacji cen.',
      },
      acceleration: {
        title: 'Przyspieszenie w fizyce',
        desc: 'Predkosc to pochodna drogi, przyspieszenie to pochodna predkosci. Czujnik w twoim telefonie mierzy dokladnie to: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'Pochodna stalej to sama stala',
        correct: 'Pochodna stalej jest zawsze zerem',
        why: 'Stala nie ma nachylenia — nie zmienia sie. Pomysl o $f(x) = 5$: To jest pozioma linia, wiec nachylenie wszedzie wynosi 0. Obowiazuje to dla kazdej liczby bez $x$.',
        amir_warning: 'Wyraz wolny (bias) w moim modelu to stala — jego pochodna po $x$ wynosi 0. Jesli o tym zapomnisz, gradient dostanie bledne przesuniecie i trening sie rozjezdzie.',
      },
      chain_rule_forgotten: {
        wrong: 'Zapomnienie o pochodnej wewnetrznej przy zagniezdonych funkcjach',
        correct: 'Zawsze mnoz przez pochodna wewnetrzna',
        why: 'Przy $[(3x+1)^4]\'$ nie wystarczy tylko sciagnac wykladnik. MUSISZ pomnozzyc przez pochodna wyrazu wewnetrznego $(3x+1)\' = 3$. Bez pochodnej wewnetrznej brakuje czynnika 3.',
        amir_warning: 'Wyobraz sobie, ze w sieci neuronowej zapomnisz o pochodnej wewnetrznej w jednej warstwie — gradient bylby zupelnie bledny i model uczy sie bzdur. Regula lancuchowa nie jest opcjonalna!',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Algorytm rekomendacji Amira daje wyniki — ale czy sa naprawde optymalne? "Musisz przeanalizowac funkcje straty calosciowo", mowi jego profesor. "Gdzie sa minima? Gdzie punkty przegiecia?" Amir uswiadamia sobie: Pelne badanie krzywej pokazuje mu, czy model naprawde znalazl globalne minimum, czy utknal w lokalnym.',
      challenge: 'Amir analizuje krajobraz strat swojego modelu: systematycznie wyznacza miejsca zerowe, ekstrema, punkty przegiecia i monotonicznsc funkcji.',
      outro: 'Amir potrafi teraz calkowicie scharakteryzowac kazda funkcje wymierna: znajdowac miejsca zerowe, wyznaczac maksima i minima, obliczac punkty przegiecia i odczytywac monotonicznosc. "Jesli narysuje krajobraz strat, od razu widze, czy optymalizator wyladowal we wlasciwej dolinie", mowi.',
    },
    objectives: {
      zeros_extrema: 'Systematycznie wyznaczac miejsca zerowe i punkty ekstremalne funkcji',
      inflection_points: 'Obliczac punkty przegiecia i rozumiec ich znaczenie dla przebiegu krzywej',
      monotonicity_symmetry: 'Analizowac monotonicznosc i symetrie funkcji',
    },
    explanation: {
      intro: 'Badanie krzywej to pelna analiza funkcji. Zaczynamy od miejsc zerowych — punktow, w ktorych wykres przecina os $x$:',
      extrema: 'Punkty ekstremalne (maksima i minima) znajdujesz tam, gdzie pierwsza pochodna jest rowna zero. Ale uwaga: Nie kazde miejsce zerowe $f\'$ jest automatycznie ekstremum! Potrzebujesz drugiej pochodnej do potwierdzenia:',
      amir_tip: 'Krajobraz strat mojego modelu ma wiele lokalnych minimow. Badaniem krzywej moge sprawdzic, czy punkt krytyczny naprawde jest minimum — czy moze tylko punktem siodlowym, w ktorym optymalizator sie zacina.',
      inflection: 'Punkty przegiecia oznaczaja przejscie miedzy krzywizna lewa a prawa. Tu zmienia sie charakter krzywizny — druga pochodna zmienia znak:',
      monotonicity: 'Monotonicznosc mowi ci, gdzie funkcja rosnie, a gdzie maleje. Odczytujesz ja bezposrednio ze znaku pierwszej pochodnej:',
    },
    concepts: {
      extrema: {
        title: 'Punkty ekstremalne (max/min)',
        desc: 'Warunek konieczny: $f\'(x_0) = 0$. Warunek wystarczajacy: $f\'\'(x_0) < 0$ daje maksimum, $f\'\'(x_0) > 0$ daje minimum. Oba warunki razem daja pewnosc.',
      },
      inflection: {
        title: 'Punkty przegiecia',
        desc: 'Gdzie zmienia sie krzywizna: $f\'\'(x_0) = 0$ I $f\'\'\'(x_0) \\neq 0$. W rozkladach normalnych punkty przegiecia oznaczaja odchylenie standardowe.',
      },
      symmetry: {
        title: 'Symetria',
        desc: 'Symetria osiowa wzgledem osi $y$ gdy $f(-x) = f(x)$ (tylko parzyste wykladniki). Symetria centralna wzgledem poczatku ukladu przy $f(-x) = -f(x)$ (tylko nieparzyste wykladniki). Oszczedza pracy!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Pelne badanie krzywej',
        context: 'Amir bada funkcje szesciennia — podobna do funkcji strat z wieloma ekstremami.',
        step1: 'Dana jest funkcja — analizujemy ja calkowicie:',
        step2: 'Obliczamy pierwsza pochodna i wyznaczamy jej miejsca zerowe (warunek konieczny dla ekstremow):',
        step3: 'Sprawdzamy druga pochodna w punktach krytycznych (warunek wystarczajacy): Wartosc ujemna = maksimum, wartosc dodatnia = minimum:',
        step4: 'Wyznaczamy punkt przegiecia przez $f\'\' = 0$ i potwierdzamy trzecia pochodna:',
        amir_comment: 'Dokladnie tak analizuje krajobraz strat: Najpierw znajduje punkty krytyczne, potem sprawdzam, czy to minimum czy punkt siodlowy. Przy wielowymiarowych funkcjach moj optymalizator robi to numerycznie — ale zasada jest identyczna.',
      },
      graph_properties: {
        title: 'Wykorzystanie symetrii i ekstremow',
        context: 'Funkcja symetryczna — polowa pracy odpada dzieki symetrii.',
        step1: 'Dana jest funkcja 4. stopnia — sprawdzamy najpierw symetrie:',
        step2: 'Wstawiamy $-x$: Wszystkie wykladniki parzyste, wiec $f(-x) = f(x)$ — osiowo symetryczna! Ekstrema wystepuja symetrycznie:',
        step3: 'Przyrownujemy pierwsza pochodna do zera — dzieki symetrii wystarczy znalezc rozwiazania dodatnie:',
        step4: 'Obliczamy wartosci funkcji — dzieki symetrii $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symetria w danych to zloto: Jesli wiem, ze moja funkcja straty jest symetryczna, musze przeszukac tylko polowe przestrzeni parametrow. To skraca czas treningu o polowe!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analiza rozkladow danych',
        desc: 'Rozklad normalny ma punkty przegiecia przy $\\mu \\pm \\sigma$. Badanie krzywej mowi ci, gdzie koncentruje sie wiekszosc punktow danych i gdzie zaczyna sie rozproszenie.',
      },
      profit_analysis: {
        title: 'Maksymalizacja zysku',
        desc: 'Funkcja zysku $G(x)$ ma maksimum — optymalna wielkosc produkcji. Badanie krzywej pokazuje dokladnie, przy jakiej ilosci zysk jest maksymalny.',
      },
      population_growth: {
        title: 'Wzrost populacji',
        desc: 'Punkt przegiecia krzywej wzrostu oznacza moment, od ktorego wzrost zwalnia. Epidemiolodzy wykorzystuja dokladnie te analize do krzywych zakazen.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Kazde miejsce zerowe $f\'$ jest automatycznie punktem ekstremalnym',
        correct: 'Miejsce zerowe $f\'$ PLUS zmiana znaku lub $f\'\' \\neq 0$ do sprawdzenia',
        why: 'Przy $f(x) = x^3$ mamy $f\'(0) = 0$, ale to nie jest ekstremum — to punkt siodlowy! MUSISZ sprawdzic warunek wystarczajacy ($f\'\' \\neq 0$ lub zmiana znaku $f\'$).',
        amir_warning: 'W wyzszych wymiarach takie miejsca nazywaja sie "Saddle Points" — optymalizator sie tam zacina i mysli, ze znalazl minimum. Zawsze sprawdzaj druga pochodna!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ wystarczy na punkt przegiecia',
        correct: '$f\'\'(x_0) = 0$ I $f\'\'\'(x_0) \\neq 0$ lacznie potwierdzaja punkt przegiecia',
        why: 'Przy $f(x) = x^4$ mamy $f\'\'(0) = 0$, ale to nie punkt przegiecia — krzywizna sie nie zmienia! Trzecia pochodna musi byc rozna od zera, aby zagwarantowac zmiane krzywizny.',
        amir_warning: 'Ta sama pulapka co przy ekstremach: Warunek konieczny sam nigdy nie wystarczy. Zawsze sprawdzaj warunek wystarczajacy — inaczej ufasz blednememu wynikowi.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse ma dzialac na telefonie — ale model Amira zuzywa zbyt duzo pamieci. "Musisz zoptymalizowac architekture sieci", mowi jego kolezanka Sara. "Maksymalna dokladnosc przy minimalnym zuzyciu pamieci." Amir rozpoznaje: To klasyczne zadanie optymalizacyjne — optymalizacja jednej wielkosci przy ograniczeniu innej.',
      challenge: 'Amir chce znalezc najlepsza architekture modelu: maksymalna jakosc predykcji pod warunkiem ograniczonych zasobow obliczeniowych.',
      outro: 'Amir zrozumial zasade: Ustawic funkcje celu, wstawic warunek ograniczajacy, zredukowac do jednej zmiennej, rozniczkowac, przyrownac do zera, sprawdzic. "Czy wymiary puszki, czy parametry modelu — schemat jest zawsze ten sam", stwierdza. Jego model miesci sie teraz w 50 MB.',
    },
    objectives: {
      setup_equations: 'Z kontekstu praktycznego ustalic funkcje celu i warunek ograniczajacy',
      optimize_constraints: 'Przez wstawienie warunku ograniczajacego stworzyc funkcje jednej zmiennej i zoptymalizowac',
      verify_extremum: 'Sprawdzic druga pochodna, czy to maksimum czy minimum, i uwzglednic wartosci brzegowe',
    },
    explanation: {
      intro: 'W zadaniach optymalizacyjnych chodzi zawsze o to samo: Jedna wielkosc ma byc mozliwie duza lub mala (funkcja celu), podczas gdy obowiazuje ograniczenie (warunek):',
      strategy: 'Strategia jest zawsze taka sama: (1) Ustawic funkcje celu — co ma byc zoptymalizowane? (2) Znalezc warunek ograniczajacy — jakie ograniczenie obowiazuje? (3) Rozwiazac warunek wzgledem jednej zmiennej i wstawic do funkcji celu. (4) Rozniczkowac, przyrownac do zera, sprawdzic.',
      amir_tip: 'Tuning hiperparametrow to dokladnie takie zadanie optymalizacyjne: Chce zminimalizowac blad walidacji (funkcja celu), ale pamiec GPU jest ograniczona (warunek). Schemat z lekcji matematyki dziala 1:1!',
      substitution: 'Po wstawieniu warunku funkcja celu zalezy juz tylko od jednej zmiennej. Teraz normalnie rozniczkujemy i sprawdzamy punkt krytyczny:',
      domain_check: 'Nie zapomnij o dziedzinie! W realnych problemach czesto sa granice (np. $r > 0$ dla promienia). Porownaj wartosc funkcji w punkcie krytycznym z wartosciami brzegowymi — czasem optimum lezy na brzegu.',
    },
    concepts: {
      target_function: {
        title: 'Funkcja celu',
        desc: 'Wielkosc, ktora ma byc zoptymalizowana — maksymalny zysk, minimalna powierzchnia, najlepsza dokladnosc. Poczatkowo czesto zalezy od dwoch zmiennych.',
      },
      constraint: {
        title: 'Warunek ograniczajacy',
        desc: 'Ograniczenie, ktore obowiazuje — stala objetosc, ograniczony budzet, ograniczone parametry. Pozwala wyeliminowac jedna zmienna i zredukowac funkcje celu do jednej zmiennej.',
      },
      boundary_check: {
        title: 'Sprawdzanie wartosci brzegowych',
        desc: 'Optimum moze tez lezec na brzegu dziedziny. Zawsze porownuj $f(x_{opt})$ z wartosciami funkcji na brzegach $f(a)$ i $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Puszka o minimalnym zuzyciu materialu',
        context: 'Cylindryczna puszka ma pojemnosc 330 ml — przy mozliwie malej ilosci blachy.',
        step1: 'Warunek: Objetosc jest stala. Rozwiazujemy wzgledem $h$, aby wyeliminowac jedna zmienna:',
        step2: 'Ustalamy funkcje celu (powierzchnia) i wstawiamy $h$ — teraz wszystko zalezy tylko od $r$:',
        step3: 'Rozniczkujemy, przyrownujemy do zera i rozwiazujemy wzgledem $r$ — to optymalny promien:',
        step4: 'Sprawdzamy druga pochodna: Wartosc dodatnia oznacza minimum — naprawde znalezlismy najoszczedniejsza puszke:',
        amir_comment: 'To dokladnie jak kompresja modelu: Stala dokladnosc (warunek), minimalna liczba parametrow (funkcja celu). Zamieniam $r$ na "szerokosc warstwy" a $h$ na "glebokosc" — ta sama zasada!',
      },
      profit_max: {
        title: 'Maksymalny zysk',
        context: 'Startup chce znalezc optymalna cene swojego modelu subskrypcji.',
        step1: 'Ustalamy funkcje zysku: przychod minus koszty — tutaj juz w jednej zmiennej:',
        step2: 'Przyrownujemy pochodna do zera — optymalna ilosc:',
        step3: 'Druga pochodna jest ujemna — wiec to maksimum. Zysk jest tu naprawde maksymalny:',
        step4: 'Obliczamy maksymalny zysk przez wstawienie:',
        amir_comment: 'Optymalizacja cen to klasyk w Data Science. W DataPulse moglibysmy obliczyc optymalny poziom subskrypcji dokladnie tak samo — maksymalizowac zysk pod warunkiem, ze uzytkownicy nie odejda.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Optymalizacja hiperparametrow',
        desc: 'Wspolczynnik uczenia $\\alpha$ w Gradient Descent musi byc optymalnie dobrany: Za duzy = dywergencja, za maly = wiecznie wolno. Optymalny $\\alpha$ minimalizuje blad walidacji.',
      },
      packaging: {
        title: 'Projektowanie opakowan',
        desc: 'Minimalne zuzycie materialu przy stalej objetosci — dokladnie to rozwiazuja inzynierowie codziennie. Kazda puszka na napoje, kazdy karton to wynik zadania optymalizacyjnego.',
      },
      solar_panel: {
        title: 'Ustawienie panelu slonecznego',
        desc: 'Kat nachylenia panelu slonecznego determinuje uzysk energii. Znalezienie optymalnego kata to zadanie optymalizacyjne z pozycja slonca jako warunkiem.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Bezposrednie rozniczkowanie funkcji celu z dwiema zmiennymi',
        correct: 'Najpierw wstaw warunek, potem rozniczkuj',
        why: 'Z dwiema zmiennymi nie mozesz po prostu rozniczkowac po $x$ — $y$ sie zmienia! MUSISZ uzyc warunku, aby wyrazic $y$ przez $x$. Dopiero wtedy wszystko zalezy od jednej zmiennej.',
        amir_warning: 'To jak model ML ze zbyt wieloma wolnymi parametrami: Bez ograniczen brak sensownego optimum. Warunek redukuje stopnie swobody — dokladnie jak regularyzacja.',
      },
      no_boundary: {
        wrong: 'Przyjecie punktu krytycznego za globalne optimum',
        correct: 'Porownaj punkt krytyczny z wartosciami brzegowymi',
        why: 'Na ograniczonym przedziale $[a, b]$ optimum moze lezec na brzegu! $f\'(x_0) = 0$ daje tylko lokalne kandydatury. Musisz porownac $f(x_0)$, $f(a)$ i $f(b)$.',
        amir_warning: 'W praktyce kazdy parametr ma dozwolony zakres. Moj wspolczynnik uczenia nie moze byc ujemny, wielkosc batcha nie moze przekraczac pamieci GPU. Sprawdzanie wartosci brzegowych jest obowiazkowe!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse dziala — ale Amir potrzebuje nowej metryki: Ile piosenek uzytkownicy sluchaja lacznie w tygodniu? Ma wspolczynnik sluchania $r(t)$ jako funkcje czasu, ale potrzebuje calkowitej liczby. "Predkosc razy czas daje ilosc — ale predkosc sie ciagle zmienia", zastanawia sie Amir. Jego kolega Kai usmiecha sie: "Brzmi jak calka."',
      challenge: 'Amir chce z zaleznego od czasu wspolczynnika sluchania $r(t)$ obliczyc calkowita liczbe odsluchanych piosenek — to prowadzi go do rachunku calkowego.',
      outro: 'Amir potrafi teraz tworzyc funkcje pierwotne, obliczac calki oznaczone i wyznaczac pola miedzy krzywymi. "Calkowanie to odwrotnosc rozniczkowania — a w praktyce sumuje w ten sposob cigle dane", podsumowuje. Jego metryka tygodniowego sluchania jest gotowa.',
    },
    objectives: {
      antiderivative: 'Tworzyc funkcje pierwotne odwracajac regule potegowa i rozumiec stala calkowania $C$',
      definite_integral: 'Obliczac calki oznaczone za pomoca twierdzenia podstawowego: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Rozumiec podstawowe twierdzenie rachunku rozniczkowego i calkowego i stosowac je do obliczania pol',
    },
    explanation: {
      intro: 'Calkowanie to odwrotnosc rozniczkowania: Jesli $F\'(x) = f(x)$, to $F(x)$ jest funkcja pierwotna $f(x)$. Ogolna funkcja pierwotna zawsze zawiera stala $C$:',
      power_rule_integral: 'Regula potegowa wspak: Zwieksz wykladnik o 1 i podziel przez nowy wykladnik. Dziala to dla wszystkich $n \\neq -1$:',
      amir_tip: 'Calkowanie to jak agregacja w bazach danych: Pochodna daje chwilowa predkosc zmian, calka sumuje wszystko. Jesli znam pobrania na godzine, calka daje mi calkowita liczbe pobran w danym okresie.',
      definite_integral: 'Calka oznaczona oblicza "calkowity efekt" miedzy dwiema granicami. Twierdzenie podstawowe czyni to prostym: Funkcja pierwotna w gornej granicy minus funkcja pierwotna w dolnej granicy:',
      area_interpretation: 'Geometrycznie calka oznaczona to pole miedzy krzywa a osia $x$. Uwaga: Pola ponizej osi $x$ licza sie ujemnie! Dla rzeczywistego pola potrzebujesz wartosci bezwzglednej:',
    },
    concepts: {
      antiderivative: {
        title: 'Funkcja pierwotna',
        desc: 'Funkcja $F(x)$ z $F\'(x) = f(x)$. Stala $+C$ jest wazna, bo rozne funkcje pierwotne roznia sie tylko o stala.',
      },
      definite_integral: {
        title: 'Calka oznaczona',
        desc: 'Oblicza pole ze znakiem miedzy $f(x)$ a osia $x$ od $a$ do $b$. Gornia granica wstawic minus dolna granica wstawic.',
      },
      fundamental_theorem: {
        title: 'Podstawowe twierdzenie analizy',
        desc: 'Laczy rozniczkowanie i calkowanie: Sa to operacje odwrotne. Calke oznaczona mozna obliczyc za pomoca funkcji pierwotnej.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Pole miedzy parabola a osia $x$',
        context: 'Amir wizualizuje rozklad czasu sluchania jako pole pod krzywa.',
        step1: 'Wyznaczamy funkcje i miejsca zerowe — to nasze granice calkowania:',
        step2: 'Tworzymy funkcje pierwotna odwracajac regule potegowa:',
        step3: 'Obliczamy calke oznaczona: Wstawiamy gorna granice minus dolna granice:',
        step4: 'Calka jest ujemna, bo parabola lezy ponizej osi $x$. Dla pola bierzemy wartosc bezwzgledna:',
        amir_comment: 'Ujemne calki maja pelny sens w analizie danych: Jesli $f(x)$ to odchylenie od sredniej, ujemna calka pokazuje, ze wartosci ogolnie byly ponizej sredniej.',
      },
      distance_from_velocity: {
        title: 'Obliczanie drogi z predkosci',
        context: 'Jak daleko jedzie autonomiczny samochod w 4 sekundy?',
        step1: 'Dana jest funkcja predkosci:',
        step2: 'Calkowita droga to calka predkosci po czasie:',
        step3: 'Tworzymy funkcje pierwotna — calkujemy kazdy wyraz osobno:',
        step4: 'Wstawiamy granice i obliczamy roznice:',
        amir_comment: 'Dane z czujnikow przychodza jako predkosc — predkosc, przepustowosc, zapytania na sekunde. Calka zamienia to w calkowita ilosc. Moj dashboard pokazuje dokladnie to: $\\int_0^T r(t)\\,dt$ = calkowita liczba streamow.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Agregacja danych w czasie',
        desc: 'Gdy predkosc przeplywu danych $r(t)$ jest znana, calka daje calkowita ilosc w danym okresie. Tak serwisy streamingowe obliczaja miesieczne minuty sluchania z danych sekundowych.',
      },
      energy_consumption: {
        title: 'Zuzycie energii',
        desc: 'Moc $P(t)$ w watach razy czas daje energie w dzulach — ale tylko przy stalej mocy. Przy zmiennej mocy potrzebujesz calki: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Prawdopodobienstwa',
        desc: 'Prawdopodobienstwo, ze zmienna losowa przyjmuje wartosc miedzy $a$ a $b$, to pole pod funkcja gestosci — czyli calka oznaczona. Podstawa calej statystyki.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Zapomnienie stalej calkowania $C$ przy calkach nieoznaczonych',
        correct: 'Zawsze dodawaj $+ C$ przy calce nieoznaczonej',
        why: 'Jesli $F\'(x) = 2x$, to zarowno $x^2$ jak i $x^2 + 7$ sa funkcjami pierwotnymi. $+C$ reprezentuje wszystkie mozliwe funkcje pierwotne. Przy calce oznaczonej $C$ sie skraca — tam mozesz je pominac.',
        amir_warning: 'W praktyce $C$ to warunek poczatkowy: Ile piosenek uzytkownik juz odsluchal, zanim zaczlismy mierzyc? Bez $C$ twoje obliczenie startuje od zera zamiast od rzeczywistej wartosci.',
      },
      negative_area: {
        wrong: 'Bezposrednia interpretacja calki jako pola, nawet gdy ujemna',
        correct: 'Dla rzeczywistego pola biez wartosc bezwzgledna calki',
        why: 'Calka $\\int_a^b f(x)\\,dx$ moze byc ujemna, gdy $f(x) < 0$. To jest poprawne jako pole ze znakiem. Jesli potrzebujesz geometrycznego pola, musisz calkowac $|f(x)|$ lub obliczac czesciowe pola osobno.',
        amir_warning: 'Wyobraz sobie, ze obliczasz calkowity czas sluchania i dostajesz wynik ujemny — to byloby oczywiscie bledne. Przy problemach z polami zawsze sprawdzaj, czy funkcja zmienia znak, i obliczaj przedzialy czesciowe osobno!',
      },
    },
  },
};
