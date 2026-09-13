export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Model ML Amira dla DataPulse daje użyteczne rekomendacje piosenek — ale trening trwa wiecznie. "Gradient Descent to w zasadzie nic innego niż pochodne", wyjaśnia mu jego profesorka matematyki. "Jeśli zrozumiesz, jak działają reguły różniczkowania, zrozumiesz też, dlaczego twój model się uczy." Amir postanawia systematycznie przejść przez te reguły.',
      challenge: 'Amir chce zrozumieć, jak jego model ML wewnętrznie różniczkuje funkcję straty — do tego potrzebuje reguł: potęgowej, sumy, iloczynu i łańcuchowej.',
      outro: 'Amir ma teraz solidne fundamenty: reguła potęgowa dla prostych wyrażeń, reguły sumy i stałej dla złożonych wyrażeń, reguła iloczynu dla mnożeń i reguła łańcuchowa dla zagnieżdżonych funkcji. "Teraz w końcu rozumiem, co PyTorch robi w tle z Autogradem", mówi zadowolony.',
    },
    objectives: {
      power_rule: 'Pewnie stosować regułę potęgową: różniczkować $f(x) = x^n$',
      constant_sum_rule: 'Opanować reguły stałej i sumy: różniczkować wyrazy osobno i zachowywać współczynniki',
      product_quotient_rule: 'Poprawnie stosować reguły iloczynu i ilorazu',
      chain_rule: 'Pewnie stosować regułę łańcuchową przy zagnieżdżonych funkcjach',
    },
    explanation: {
      intro: 'Reguła potęgowa to najważniejsza reguła bazowa: Wyciągasz wykładnik jako współczynnik i zmniejszasz wykładnik o 1. Dzięki temu różniczkujesz każdą funkcję potęgową w mgnieniu oka:',
      constant_factor: 'Stałe współczynniki pozostają przy różniczkowaniu, a sumy można różniczkować wyraz po wyrazie. To sprawia, że złożone wyrażenia są przejrzyste:',
      amir_tip: 'W moim kodzie ML wszędzie są sumy i współczynniki — funkcja straty to ogromna suma po wszystkich punktach danych. To, że mogę różniczkować każdy wyraz osobno, sprawia, że backpropagation w ogóle jest możliwe!',
      product_rule: 'Gdy dwie funkcje są mnożone, NIE wolno po prostu różniczkować każdej z osobna. Zamiast tego obowiązuje reguła iloczynu — "pierwsza razy pochodna drugiej plus druga razy pochodna pierwszej":',
      quotient_rule: 'Dla ułamków funkcji istnieje reguła ilorazu. Pomoc pamięciowa: "Mianownik razy pochodna licznika minus licznik razy pochodna mianownika przez mianownik do kwadratu":',
      chain_rule: 'Przy zagnieżdżonych funkcjach — czyli funkcji w funkcji — potrzebujesz reguły łańcuchowej. Różniczkujesz "od zewnątrz do wewnątrz" i mnożysz przez pochodną wewnętrzną:',
    },
    concepts: {
      power_rule: {
        title: 'Reguła potęgowa',
        desc: 'Reguła podstawowa: Wykładnik staje się współczynnikiem, wykładnik maleje o 1. Obowiązuje też dla ujemnych i ułamkowych wykładników, np. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Reguły sumy i stałej',
        desc: 'Sumy różniczkuje się wyraz po wyrazie, stałe współczynniki są zachowywane. Dzięki temu rozkładasz każde wyrażenie wielomianowe na proste części.',
      },
      product_rule: {
        title: 'Reguła iloczynu',
        desc: 'Dla iloczynu dwóch funkcji: Pierwsza zróżniczkowana razy druga plus pierwsza razy druga zróżniczkowana. Niezbędna, gdy dwa zmienne wyrażenia są mnożone.',
      },
      quotient_rule: {
        title: 'Reguła ilorazu',
        desc: 'Dla ułamków: mianownik razy pochodna licznika, minus licznik razy pochodna mianownika, podzielone przez mianownik do kwadratu. Minus to różnica w porównaniu z regułą iloczynu — i najczęstsze źródło błędów. Potrzebna wszędzie tam, gdzie coś jest "na" coś innego: koszt jednostkowy, prędkość, stężenie.',
      },
      chain_rule: {
        title: 'Reguła łańcuchowa',
        desc: 'Zróżniczkuj funkcję zewnętrzną, zostaw wewnętrzną, potem pomnóż przez pochodną wewnętrzną. Serce backpropagation w sieciach neuronowych.',
      },
    },
    examples: {
      power_sum: {
        title: 'Różniczkowanie wielomianu regułami potęgową i sumy',
        context: 'Amir upraszcza wyrażenie ze swojej funkcji kosztu.',
        step1: 'Dany jest wielomian — różniczkujemy każdy wyraz osobno:',
        step2: 'Stosujemy regułę potęgową do każdego wyrazu: Wykładnik jako współczynnik, wykładnik minus 1. Stała $-7$ odpada:',
        step3: 'Po uproszczeniu otrzymujemy funkcję pochodną:',
        amir_comment: 'Dokładnie tak wygląda gradient moich cech wielomianowych. Każdy wyraz wnosi swój wkład do nachylenia — a PyTorch robi to automatycznie dla tysięcy parametrów jednocześnie.',
      },
      quotient_rule: {
        title: 'Różniczkowanie funkcji wymiernej regułą ilorazu',
        context: 'Amir mierzy, ile zapytań jego serwer obsługuje na każdą upływającą sekundę — jedna wielkość na drugą, czyli ułamek.',
        step1: 'Najpierw nazywasz licznik i mianownik. Kto to pominie, później je zamieni:',
        step2: 'Zróżniczkuj oba osobno — to łatwa część:',
        step3: 'Teraz wstaw: mianownik razy pochodna licznika, minus licznik razy pochodna mianownika, wszystko przez $v^2$:',
        step4: 'Wymnóż i uprość. Mianownik zostaje jako kwadrat, nie wymnażasz go:',
        amir_comment: 'Ważne: Mianownik zostaje $(x-1)^2$. Kiedyś zawsze grzecznie go wymnażałem i w ten sposób blokowałem sobie skracanie. W badaniu przebiegu funkcji chcesz widzieć miejsca zerowe mianownika — jako czynnik, a nie jako wielomian.',
      },
      chain_rule: {
        title: 'Zagnieżdżona funkcja z regułą łańcuchową',
        context: 'Amir różniczkuje funkcję aktywacji, która zawiera złożenie.',
        step1: 'Dana jest zagnieżdżona funkcja potęgowa:',
        step2: 'Rozkład na funkcję zewnętrzną $f(u) = u^3$ i wewnętrzną $g(x) = 2x^2 + 1$:',
        step3: 'Zróżniczkuj zewnętrzną (reguła potęgowa na $u^3$), zostaw wewnętrzną, razy pochodna wewnętrzna ($4x$):',
        step4: 'Uporządkowane — czynnik $4x$ wyciągnięty na początek:',
        amir_comment: 'Reguła łańcuchowa to dosłownie backpropagation! Każda warstwa w sieci neuronowej to zagnieżdżona funkcja, a reguła łańcuchowa łączy gradienty od warstwy do warstwy.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent w Machine Learning',
        desc: 'Każdy model ML minimalizuje funkcję straty przez różniczkowanie. Gradient wskazuje kierunek najstromszego wzrostu — idziemy w przeciwnym kierunku, aby znaleźć minimum.',
      },
      marginal_cost: {
        title: 'Koszty krańcowe w ekonomii',
        desc: 'Pochodna funkcji kosztów $K(x)$ daje koszty krańcowe: Ile kosztuje wytworzenie jeszcze jednej jednostki? Firmy codziennie wykorzystują to do kalkulacji cen.',
      },
      acceleration: {
        title: 'Przyspieszenie w fizyce',
        desc: 'Prędkość to pochodna drogi, przyspieszenie to pochodna prędkości. Czujnik w twoim telefonie mierzy dokładnie to: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'Pochodna stałej to sama stała',
        correct: 'Pochodna stałej jest zawsze zerem',
        why: 'Stała nie ma nachylenia — nie zmienia się. Pomyśl o $f(x) = 5$: To jest pozioma linia, więc nachylenie wszędzie wynosi 0. Obowiązuje to dla każdej liczby bez $x$.',
        amir_warning: 'Wyraz wolny (bias) w moim modelu to stała — jego pochodna po $x$ wynosi 0. Jeśli o tym zapomnisz, gradient dostanie błędne przesunięcie i trening się rozjedzie.',
      },
      chain_rule_forgotten: {
        wrong: 'Zapomnienie o pochodnej wewnętrznej przy zagnieżdżonych funkcjach',
        correct: 'Zawsze mnóż przez pochodną wewnętrzną',
        why: 'Przy $[(3x+1)^4]\'$ nie wystarczy tylko ściągnąć wykładnik. MUSISZ pomnożyć przez pochodną wyrażenia wewnętrznego $(3x+1)\' = 3$. Bez pochodnej wewnętrznej brakuje czynnika 3.',
        amir_warning: 'Wyobraź sobie, że w sieci neuronowej zapomnisz o pochodnej wewnętrznej w jednej warstwie — gradient byłby zupełnie błędny i model uczy się bzdur. Reguła łańcuchowa nie jest opcjonalna!',
      },
      quotient_sign: {
        wrong: 'Zamieniony licznik reguły ilorazu: $u \\cdot v\' - u\' \\cdot v$',
        correct: 'Najpierw mianownik razy pochodna licznika: $u\' \\cdot v - u \\cdot v\'$',
        why: 'Reguła iloczynu jest symetryczna — możesz zamienić oba składniki, wynik się nie zmienia. W regule ilorazu stoi minus, więc kolejność jest ustalona. Jeśli ją zamienisz, dostaniesz dokładnie przeciwieństwo poprawnej pochodnej. Podstępne jest to, że wyrażenie wygląda wiarygodnie, liczysz dalej poprawnie, a mimo to na końcu każdy znak jest zły. Z maksimum robi się minimum.',
        amir_warning: 'Zrób sprawdzenie w prostym miejscu. Dla $f(x) = \\frac{x}{x+1}$ funkcja wszędzie rośnie, więc $f\'$ musi być dodatnia. Jeśli wychodzi ci coś ujemnego, odwróciłeś licznik — to kosztuje cię dziesięć sekund i ratuje całe zadanie.',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Algorytm rekomendacji Amira daje wyniki — ale czy są naprawdę optymalne? "Musisz przeanalizować funkcję straty całościowo", mówi jego profesor. "Gdzie są minima? Gdzie punkty przegięcia?" Amir uświadamia sobie: Pełne badanie przebiegu funkcji pokazuje mu, czy model naprawdę znalazł globalne minimum, czy utknął w lokalnym.',
      challenge: 'Amir analizuje krajobraz strat swojego modelu: systematycznie wyznacza miejsca zerowe, ekstrema, punkty przegięcia i monotoniczność funkcji.',
      outro: 'Amir potrafi teraz całkowicie scharakteryzować każdą funkcję wymierną: znajdować miejsca zerowe, wyznaczać maksima i minima, obliczać punkty przegięcia i odczytywać monotoniczność. "Jeśli narysuję krajobraz strat, od razu widzę, czy optymalizator wylądował we właściwej dolinie", mówi.',
    },
    objectives: {
      zeros_extrema: 'Systematycznie wyznaczać miejsca zerowe i punkty ekstremalne funkcji',
      inflection_points: 'Obliczać punkty przegięcia i rozumieć ich znaczenie dla przebiegu krzywej',
      monotonicity_symmetry: 'Analizować monotoniczność i symetrię funkcji',
    },
    explanation: {
      intro: 'Badanie przebiegu funkcji to pełna analiza funkcji. Zaczynamy od miejsc zerowych — punktów, w których wykres przecina oś $x$:',
      extrema: 'Punkty ekstremalne (maksima i minima) znajdujesz tam, gdzie pierwsza pochodna jest równa zero. Ale uwaga: Nie każde miejsce zerowe $f\'$ jest automatycznie ekstremum! Potrzebujesz drugiej pochodnej do potwierdzenia:',
      amir_tip: 'Krajobraz strat mojego modelu ma wiele lokalnych minimów. Badaniem przebiegu funkcji mogę sprawdzić, czy punkt krytyczny naprawdę jest minimum — czy może tylko punktem siodłowym, w którym optymalizator się zacina.',
      inflection: 'Punkty przegięcia oznaczają przejście między krzywizną lewą a prawą. Tu zmienia się charakter krzywizny — druga pochodna zmienia znak:',
      monotonicity: 'Monotoniczność mówi ci, gdzie funkcja rośnie, a gdzie maleje. Odczytujesz ją bezpośrednio ze znaku pierwszej pochodnej:',
    },
    concepts: {
      extrema: {
        title: 'Punkty ekstremalne (max/min)',
        desc: 'Warunek konieczny: $f\'(x_0) = 0$. Warunek wystarczający: $f\'\'(x_0) < 0$ daje maksimum, $f\'\'(x_0) > 0$ daje minimum. Oba warunki razem dają pewność.',
      },
      inflection: {
        title: 'Punkty przegięcia',
        desc: 'Gdzie zmienia się krzywizna: $f\'\'(x_0) = 0$ I $f\'\'\'(x_0) \\neq 0$. W rozkładach normalnych punkty przegięcia oznaczają odchylenie standardowe.',
      },
      symmetry: {
        title: 'Symetria',
        desc: 'Symetria osiowa względem osi $y$ gdy $f(-x) = f(x)$ (tylko parzyste wykładniki). Symetria środkowa względem początku układu przy $f(-x) = -f(x)$ (tylko nieparzyste wykładniki). Oszczędza pracy!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Pełne badanie przebiegu funkcji',
        context: 'Amir bada funkcję sześcienną — podobną do funkcji strat z wieloma ekstremami.',
        step1: 'Dana jest funkcja — analizujemy ją całkowicie:',
        step2: 'Obliczamy pierwszą pochodną i wyznaczamy jej miejsca zerowe (warunek konieczny dla ekstremów):',
        step3: 'Sprawdzamy drugą pochodną w punktach krytycznych (warunek wystarczający): Wartość ujemna = maksimum, wartość dodatnia = minimum:',
        step4: 'Wyznaczamy punkt przegięcia przez $f\'\' = 0$ i potwierdzamy trzecią pochodną:',
        amir_comment: 'Dokładnie tak analizuję krajobraz strat: Najpierw znajduję punkty krytyczne, potem sprawdzam, czy to minimum czy punkt siodłowy. Przy wielowymiarowych funkcjach mój optymalizator robi to numerycznie — ale zasada jest identyczna.',
      },
      graph_properties: {
        title: 'Wykorzystanie symetrii i ekstremów',
        context: 'Funkcja symetryczna — połowa pracy odpada dzięki symetrii.',
        step1: 'Dana jest funkcja 4. stopnia — sprawdzamy najpierw symetrię:',
        step2: 'Wstawiamy $-x$: Wszystkie wykładniki parzyste, więc $f(-x) = f(x)$ — osiowo symetryczna! Ekstrema występują symetrycznie:',
        step3: 'Przyrównujemy pierwszą pochodną do zera — dzięki symetrii wystarczy znaleźć rozwiązania dodatnie:',
        step4: 'Obliczamy wartości funkcji — dzięki symetrii $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symetria w danych to złoto: Jeśli wiem, że moja funkcja straty jest symetryczna, muszę przeszukać tylko połowę przestrzeni parametrów. To skraca czas treningu o połowę!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analiza rozkładów danych',
        desc: 'Rozkład normalny ma punkty przegięcia przy $\\mu \\pm \\sigma$. Badanie przebiegu funkcji mówi ci, gdzie koncentruje się większość punktów danych i gdzie zaczyna się rozproszenie.',
      },
      profit_analysis: {
        title: 'Maksymalizacja zysku',
        desc: 'Funkcja zysku $G(x)$ ma maksimum — optymalną wielkość produkcji. Badanie przebiegu funkcji pokazuje dokładnie, przy jakiej ilości zysk jest maksymalny.',
      },
      population_growth: {
        title: 'Wzrost populacji',
        desc: 'Punkt przegięcia krzywej wzrostu oznacza moment, od którego wzrost zwalnia. Epidemiolodzy wykorzystują dokładnie tę analizę do krzywych zakażeń.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Każde miejsce zerowe $f\'$ jest automatycznie punktem ekstremalnym',
        correct: 'Miejsce zerowe $f\'$ PLUS zmiana znaku lub $f\'\' \\neq 0$ do sprawdzenia',
        why: 'Przy $f(x) = x^3$ mamy $f\'(0) = 0$, ale to nie jest ekstremum — to punkt siodłowy! MUSISZ sprawdzić warunek wystarczający ($f\'\' \\neq 0$ lub zmiana znaku $f\'$).',
        amir_warning: 'W wyższych wymiarach takie miejsca nazywają się "Saddle Points" — optymalizator się tam zacina i myśli, że znalazł minimum. Zawsze sprawdzaj drugą pochodną!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ wystarczy na punkt przegięcia',
        correct: '$f\'\'(x_0) = 0$ I $f\'\'\'(x_0) \\neq 0$ łącznie potwierdzają punkt przegięcia',
        why: 'Przy $f(x) = x^4$ mamy $f\'\'(0) = 0$, ale to nie punkt przegięcia — krzywizna się nie zmienia! Trzecia pochodna musi być różna od zera, aby zagwarantować zmianę krzywizny.',
        amir_warning: 'Ta sama pułapka co przy ekstremach: Warunek konieczny sam nigdy nie wystarczy. Zawsze sprawdzaj warunek wystarczający — inaczej ufasz błędnemu wynikowi.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse ma działać na telefonie — ale model Amira zużywa zbyt dużo pamięci. "Musisz zoptymalizować architekturę sieci", mówi jego koleżanka Sara. "Maksymalna dokładność przy minimalnym zużyciu pamięci." Amir rozpoznaje: To klasyczne zadanie optymalizacyjne — optymalizacja jednej wielkości przy ograniczeniu innej.',
      challenge: 'Amir chce znaleźć najlepszą architekturę modelu: maksymalna jakość predykcji pod warunkiem ograniczonych zasobów obliczeniowych.',
      outro: 'Amir zrozumiał zasadę: Ustawić funkcję celu, wstawić warunek ograniczający, zredukować do jednej zmiennej, różniczkować, przyrównać do zera, sprawdzić. "Czy wymiary puszki, czy parametry modelu — schemat jest zawsze ten sam", stwierdza. Jego model mieści się teraz w 50 MB.',
    },
    objectives: {
      setup_equations: 'Z kontekstu praktycznego ustalić funkcję celu i warunek ograniczający',
      optimize_constraints: 'Przez wstawienie warunku ograniczającego stworzyć funkcję jednej zmiennej i zoptymalizować',
      verify_extremum: 'Sprawdzić drugą pochodną, czy to maksimum czy minimum, i uwzględnić wartości brzegowe',
    },
    explanation: {
      intro: 'W zadaniach optymalizacyjnych chodzi zawsze o to samo: Jedna wielkość ma być możliwie duża lub mała (funkcja celu), podczas gdy obowiązuje ograniczenie (warunek):',
      strategy: 'Strategia jest zawsze taka sama: (1) Ustawić funkcję celu — co ma być zoptymalizowane? (2) Znaleźć warunek ograniczający — jakie ograniczenie obowiązuje? (3) Rozwiązać warunek względem jednej zmiennej i wstawić do funkcji celu. (4) Różniczkować, przyrównać do zera, sprawdzić.',
      amir_tip: 'Tuning hiperparametrów to dokładnie takie zadanie optymalizacyjne: Chcę zminimalizować błąd walidacji (funkcja celu), ale pamięć GPU jest ograniczona (warunek). Schemat z lekcji matematyki działa 1:1!',
      substitution: 'Po wstawieniu warunku funkcja celu zależy już tylko od jednej zmiennej. Teraz normalnie różniczkujemy i sprawdzamy punkt krytyczny:',
      domain_check: 'Nie zapomnij o dziedzinie! W realnych problemach często są granice (np. $r > 0$ dla promienia). Porównaj wartość funkcji w punkcie krytycznym z wartościami brzegowymi — czasem optimum leży na brzegu.',
    },
    concepts: {
      target_function: {
        title: 'Funkcja celu',
        desc: 'Wielkość, która ma być zoptymalizowana — maksymalny zysk, minimalna powierzchnia, najlepsza dokładność. Początkowo często zależy od dwóch zmiennych.',
      },
      constraint: {
        title: 'Warunek ograniczający',
        desc: 'Ograniczenie, które obowiązuje — stała objętość, ograniczony budżet, ograniczone parametry. Pozwala wyeliminować jedną zmienną i zredukować funkcję celu do jednej zmiennej.',
      },
      boundary_check: {
        title: 'Sprawdzanie wartości brzegowych',
        desc: 'Optimum może też leżeć na brzegu dziedziny. Zawsze porównuj $f(x_{opt})$ z wartościami funkcji na brzegach $f(a)$ i $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Puszka o minimalnym zużyciu materiału',
        context: 'Cylindryczna puszka ma pojemność 330 ml — przy możliwie małej ilości blachy.',
        step1: 'Warunek: Objętość jest stała. Rozwiązujemy względem $h$, aby wyeliminować jedną zmienną:',
        step2: 'Ustalamy funkcję celu (powierzchnia) i wstawiamy $h$ — teraz wszystko zależy tylko od $r$:',
        step3: 'Różniczkujemy, przyrównujemy do zera i rozwiązujemy względem $r$ — to optymalny promień:',
        step4: 'Sprawdzamy drugą pochodną: Wartość dodatnia oznacza minimum — naprawdę znaleźliśmy najoszczędniejszą puszkę:',
        amir_comment: 'To dokładnie jak kompresja modelu: Stała dokładność (warunek), minimalna liczba parametrów (funkcja celu). Zamieniam $r$ na "szerokość warstwy" a $h$ na "głębokość" — ta sama zasada!',
      },
      profit_max: {
        title: 'Maksymalny zysk',
        context: 'Startup chce znaleźć optymalną cenę swojego modelu subskrypcji.',
        step1: 'Ustalamy funkcję zysku: przychód minus koszty — tutaj już w jednej zmiennej:',
        step2: 'Przyrównujemy pochodną do zera — optymalna ilość:',
        step3: 'Druga pochodna jest ujemna — więc to maksimum. Zysk jest tu naprawdę maksymalny:',
        step4: 'Obliczamy maksymalny zysk przez wstawienie:',
        amir_comment: 'Optymalizacja cen to klasyk w Data Science. W DataPulse moglibyśmy obliczyć optymalny poziom subskrypcji dokładnie tak samo — maksymalizować zysk pod warunkiem, że użytkownicy nie odejdą.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Optymalizacja hiperparametrów',
        desc: 'Współczynnik uczenia $\\alpha$ w Gradient Descent musi być optymalnie dobrany: Za duży = dywergencja, za mały = wiecznie wolno. Optymalny $\\alpha$ minimalizuje błąd walidacji.',
      },
      packaging: {
        title: 'Projektowanie opakowań',
        desc: 'Minimalne zużycie materiału przy stałej objętości — dokładnie to rozwiązują inżynierowie codziennie. Każda puszka na napoje, każdy karton to wynik zadania optymalizacyjnego.',
      },
      solar_panel: {
        title: 'Ustawienie panelu słonecznego',
        desc: 'Kąt nachylenia panelu słonecznego determinuje uzysk energii. Znalezienie optymalnego kąta to zadanie optymalizacyjne z pozycją słońca jako warunkiem.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Bezpośrednie różniczkowanie funkcji celu z dwiema zmiennymi',
        correct: 'Najpierw wstaw warunek, potem różniczkuj',
        why: 'Z dwiema zmiennymi nie możesz po prostu różniczkować po $x$ — $y$ się zmienia! MUSISZ użyć warunku, aby wyrazić $y$ przez $x$. Dopiero wtedy wszystko zależy od jednej zmiennej.',
        amir_warning: 'To jak model ML ze zbyt wieloma wolnymi parametrami: Bez ograniczeń brak sensownego optimum. Warunek redukuje stopnie swobody — dokładnie jak regularyzacja.',
      },
      no_boundary: {
        wrong: 'Przyjęcie punktu krytycznego za globalne optimum',
        correct: 'Porównaj punkt krytyczny z wartościami brzegowymi',
        why: 'Na ograniczonym przedziale $[a, b]$ optimum może leżeć na brzegu! $f\'(x_0) = 0$ daje tylko lokalnych kandydatów. Musisz porównać $f(x_0)$, $f(a)$ i $f(b)$.',
        amir_warning: 'W praktyce każdy parametr ma dozwolony zakres. Mój współczynnik uczenia nie może być ujemny, wielkość batcha nie może przekraczać pamięci GPU. Sprawdzanie wartości brzegowych jest obowiązkowe!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse działa — ale Amir potrzebuje nowej metryki: Ile piosenek użytkownicy słuchają łącznie w tygodniu? Ma współczynnik słuchania $r(t)$ jako funkcję czasu, ale potrzebuje całkowitej liczby. "Prędkość razy czas daje ilość — ale prędkość się ciągle zmienia", zastanawia się Amir. Jego kolega Kai uśmiecha się: "Brzmi jak całka."',
      challenge: 'Amir chce z zależnego od czasu współczynnika słuchania $r(t)$ obliczyć całkowitą liczbę odsłuchanych piosenek — to prowadzi go do rachunku całkowego.',
      outro: 'Amir potrafi teraz tworzyć funkcje pierwotne, obliczać całki oznaczone i wyznaczać pola między krzywymi. "Całkowanie to odwrotność różniczkowania — a w praktyce sumuję w ten sposób ciągłe dane", podsumowuje. Jego metryka tygodniowego słuchania jest gotowa.',
    },
    objectives: {
      antiderivative: 'Tworzyć funkcje pierwotne odwracając regułę potęgową i rozumieć stałą całkowania $C$',
      definite_integral: 'Obliczać całki oznaczone za pomocą twierdzenia podstawowego: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Rozumieć podstawowe twierdzenie rachunku różniczkowego i całkowego i stosować je do obliczania pól',
    },
    explanation: {
      intro: 'Całkowanie to odwrotność różniczkowania: Jeśli $F\'(x) = f(x)$, to $F(x)$ jest funkcją pierwotną $f(x)$. Ogólna funkcja pierwotna zawsze zawiera stałą $C$:',
      power_rule_integral: 'Reguła potęgowa wspak: Zwiększ wykładnik o 1 i podziel przez nowy wykładnik. Działa to dla wszystkich $n \\neq -1$:',
      amir_tip: 'Całkowanie to jak agregacja w bazach danych: Pochodna daje chwilową prędkość zmian, całka sumuje wszystko. Jeśli znam pobrania na godzinę, całka daje mi całkowitą liczbę pobrań w danym okresie.',
      definite_integral: 'Całka oznaczona oblicza "całkowity efekt" między dwiema granicami. Twierdzenie podstawowe czyni to prostym: Funkcja pierwotna w górnej granicy minus funkcja pierwotna w dolnej granicy:',
      area_interpretation: 'Geometrycznie całka oznaczona to pole między krzywą a osią $x$. Uwaga: Pola poniżej osi $x$ liczą się ujemnie! Dla rzeczywistego pola potrzebujesz wartości bezwzględnej:',
    },
    concepts: {
      antiderivative: {
        title: 'Funkcja pierwotna',
        desc: 'Funkcja $F(x)$ z $F\'(x) = f(x)$. Stała $+C$ jest ważna, bo różne funkcje pierwotne różnią się tylko o stałą.',
      },
      definite_integral: {
        title: 'Całka oznaczona',
        desc: 'Oblicza pole ze znakiem między $f(x)$ a osią $x$ od $a$ do $b$. Wstaw górną granicę minus wstaw dolną granicę.',
      },
      fundamental_theorem: {
        title: 'Podstawowe twierdzenie analizy',
        desc: 'Łączy różniczkowanie i całkowanie: Są to operacje odwrotne. Całkę oznaczoną można obliczyć za pomocą funkcji pierwotnej.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Pole między parabolą a osią $x$',
        context: 'Amir wizualizuje rozkład czasu słuchania jako pole pod krzywą.',
        step1: 'Wyznaczamy funkcję i miejsca zerowe — to nasze granice całkowania:',
        step2: 'Tworzymy funkcję pierwotną odwracając regułę potęgową:',
        step3: 'Obliczamy całkę oznaczoną: Wstawiamy górną granicę minus dolną granicę:',
        step4: 'Całka jest ujemna, bo parabola leży poniżej osi $x$. Dla pola bierzemy wartość bezwzględną:',
        amir_comment: 'Ujemne całki mają pełny sens w analizie danych: Jeśli $f(x)$ to odchylenie od średniej, ujemna całka pokazuje, że wartości ogólnie były poniżej średniej.',
      },
      distance_from_velocity: {
        title: 'Obliczanie drogi z prędkości',
        context: 'Jak daleko jedzie autonomiczny samochód w 4 sekundy?',
        step1: 'Dana jest funkcja prędkości:',
        step2: 'Całkowita droga to całka prędkości po czasie:',
        step3: 'Tworzymy funkcję pierwotną — całkujemy każdy wyraz osobno:',
        step4: 'Wstawiamy granice i obliczamy różnicę:',
        amir_comment: 'Dane z czujników przychodzą jako tempo — prędkość, przepustowość, zapytania na sekundę. Całka zamienia to w całkowitą ilość. Mój dashboard pokazuje dokładnie to: $\\int_0^T r(t)\\,dt$ = całkowita liczba streamów.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Agregacja danych w czasie',
        desc: 'Gdy prędkość przepływu danych $r(t)$ jest znana, całka daje całkowitą ilość w danym okresie. Tak serwisy streamingowe obliczają miesięczne minuty słuchania z danych sekundowych.',
      },
      energy_consumption: {
        title: 'Zużycie energii',
        desc: 'Moc $P(t)$ w watach razy czas daje energię w dżulach — ale tylko przy stałej mocy. Przy zmiennej mocy potrzebujesz całki: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Prawdopodobieństwa',
        desc: 'Prawdopodobieństwo, że zmienna losowa przyjmuje wartość między $a$ a $b$, to pole pod funkcją gęstości — czyli całka oznaczona. Podstawa całej statystyki.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Zapomnienie stałej całkowania $C$ przy całkach nieoznaczonych',
        correct: 'Zawsze dodawaj $+ C$ przy całce nieoznaczonej',
        why: 'Jeśli $F\'(x) = 2x$, to zarówno $x^2$ jak i $x^2 + 7$ są funkcjami pierwotnymi. $+C$ reprezentuje wszystkie możliwe funkcje pierwotne. Przy całce oznaczonej $C$ się skraca — tam możesz je pominąć.',
        amir_warning: 'W praktyce $C$ to warunek początkowy: Ile piosenek użytkownik już odsłuchał, zanim zaczęliśmy mierzyć? Bez $C$ twoje obliczenie startuje od zera zamiast od rzeczywistej wartości.',
      },
      negative_area: {
        wrong: 'Bezpośrednia interpretacja całki jako pola, nawet gdy ujemna',
        correct: 'Dla rzeczywistego pola bierz wartość bezwzględną całki',
        why: 'Całka $\\int_a^b f(x)\\,dx$ może być ujemna, gdy $f(x) < 0$. To jest poprawne jako pole ze znakiem. Jeśli potrzebujesz geometrycznego pola, musisz całkować $|f(x)|$ lub obliczać pola częściowe osobno.',
        amir_warning: 'Wyobraź sobie, że obliczasz całkowity czas słuchania i dostajesz wynik ujemny — to byłoby oczywiście błędne. Przy problemach z polami zawsze sprawdzaj, czy funkcja zmienia znak, i obliczaj przedziały częściowe osobno!',
      },
    },
  },
};
