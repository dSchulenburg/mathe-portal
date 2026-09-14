export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'Mia siedzi w swoim małym biurze w hamburskim porcie i wpatruje się w ekran. Lumi, jej postać w grze "Hafenlichter", ma elegancko przeskakiwać nad skrzyniami i kontenerami — ale krzywa skoku wygląda po prostu źle. "Fizyka się nie zgadza", mruczy. Żeby zaprogramować realistyczny tor skoku, Mia potrzebuje funkcji kwadratowych.',
      challenge: 'Lumi ma przeskakiwać nad skrzyniami — ale krzywa skoku wygląda nienaturalnie.',
      outro: 'Dzięki postaci wierzchołkowej Mia zaprogramowała idealną krzywą skoku! Lumi leci teraz eleganckim łukiem nad hamburskimi kontenerami. "Wreszcie wygląda to realistycznie", mówi Tim i przybija jej piątkę.',
    },
    objectives: {
      recognize: 'Rozpoznawać funkcje kwadratowe i opisywać ich własności',
      vertex_form: 'Pewnie przechodzić między postacią ogólną a postacią wierzchołkową',
      pq_formula: 'Obliczać miejsca zerowe wzorem kwadratowym',
      graph_properties: 'Odczytywać z równania kierunek otwarcia, wierzchołek i oś symetrii',
    },
    explanation: {
      intro: 'Wyobraź sobie, że rzucasz piłkę do koszykówki. Piłka leci łukiem w górę, osiąga najwyższy punkt i znowu spada. Ten tor ma bardzo konkretny kształt — parabolę. W matematyce opisujemy go funkcją kwadratową:',
      opening: 'Liczba $a$ decyduje, czy parabola jest otwarta do góry ($a > 0$), czy do dołu ($a < 0$) — i jak bardzo jest "wąska" albo "szeroka". Im większe $|a|$, tym węższa parabola.',
      mia_tip: 'W mojej grze $a$ jest ujemne, bo krzywa skoku idzie w górę, a potem wraca w dół — jak odwrócone U!',
      vertex_form: 'Postać wierzchołkowa od razu pokazuje ci najwyższy (albo najniższy) punkt paraboli. Wierzchołek $S$ ma współrzędne $(d \\mid e)$:',
      conversion: 'Żeby przejść z postaci ogólnej do postaci wierzchołkowej, używasz uzupełniania do kwadratu. Sprytnie dodajesz liczbę i znowu ją odejmujesz, tak żeby powstał pełny kwadrat.',
    },
    concepts: {
      normal_form: {
        title: 'Postać ogólna',
        desc: 'Standardowy zapis. Widzisz od razu: $a$ = otwarcie, $c$ = wyraz wolny (miejsce, w którym parabola przecina oś y).',
      },
      vertex_form: {
        title: 'Postać wierzchołkowa',
        desc: 'Od razu pokazuje wierzchołek $S(d \\mid e)$. Najlepsza do: odczytania punktu najwyższego/najniższego, rozpoznania przesunięcia.',
      },
      pq_formula: {
        title: 'Wzór kwadratowy',
        desc: 'Twoje narzędzie do miejsc zerowych. Warunek: równanie musi mieć postać $x^2 + px + q = 0$ (współczynnik przy $x^2$ musi być równy 1!).',
      },
      discriminant: {
        title: 'Wyróżnik',
        desc: 'Wyrażenie pod pierwiastkiem decyduje: $D > 0$ = dwa miejsca zerowe, $D = 0$ = jedno miejsce zerowe, $D < 0$ = brak rzeczywistych miejsc zerowych.',
      },
    },
    examples: {
      vertex: {
        title: 'Wyznaczanie postaci wierzchołkowej',
        context: 'Mia chce obliczyć najwyższy punkt skoku Lumiego.',
        step1: 'Dana jest funkcja w postaci ogólnej:',
        step2: 'Uzupełnianie do kwadratu: dodajemy $(\\frac{6}{2})^2 = 9$ i znowu to odejmujemy:',
        step3: 'Upraszczamy — wyrażenie w nawiasie jest pełnym kwadratem:',
        step4: 'Odczytujemy wierzchołek: $d = 3$, $e = -4$, czyli:',
        mia_comment: 'Wierzchołek w $(3 \\mid -4)$ to najniższy punkt, bo $a = 1 > 0$. Do krzywej skoku potrzebuję $a < 0$, wtedy będzie to najwyższy punkt!',
      },
      pq: {
        title: 'Miejsca zerowe ze wzoru kwadratowego',
        context: 'Gdzie Lumi znowu dotyka ziemi?',
        step1: 'Dane: równanie ma już właściwą postać (współczynnik przy $x^2$ = 1):',
        step2: 'Odczytujemy wartości $p$ i $q$:',
        step3: 'Wstawiamy do wzoru kwadratowego i obliczamy:',
        step4: 'Lumi ląduje więc w $x = 2$ albo w $x = -4$:',
        mia_comment: 'Dwa miejsca zerowe — parabola przecina oś x dwa razy. W grze oznacza to: Lumi odbija się w $x = -4$ i ląduje w $x = 2$!',
      },
    },
    realworld: {
      basketball: {
        title: 'Rzut do kosza',
        desc: 'Każdy rzut do kosza opisuje parabolę. Wysokość $h$ zależy od czasu $t$. Trenerzy wykorzystują to, żeby obliczyć optymalny kąt wyrzutu.',
      },
      bridge: {
        title: 'Mosty wiszące',
        desc: 'W mostach wiszących, takich jak Golden Gate Bridge, lina nośna zwisa niemal dokładnie w kształcie paraboli – bo pomost rozkłada swój ciężar równomiernie na linę.',
      },
      pricing: {
        title: 'Optymalizacja cen',
        desc: 'Sklep chce wiedzieć: jaka cena daje największy zysk? Kiedy cena rośnie, kupuje mniej osób — zysk jest parabolą z maksimum.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Błąd znaku',
        correct: 'Uważaj na znak',
        why: 'W $f(x) = (x - d)^2 + e$ przed $d$ stoi minus. To oznacza: $f(x) = (x - 3)^2$ ma wierzchołek w $d = +3$, a nie w $-3$!',
        mia_warning: 'Ten błąd znaku kosztował mnie 3 godziny debugowania. Krzywa skoku Lumiego była przesunięta w lewo zamiast w prawo!',
      },
      pq_wrong: {
        wrong: 'Wzór kwadratowy bez dzielenia',
        correct: 'Najpierw podziel przez $a$',
        why: 'Wzór kwadratowy działa tylko wtedy, gdy współczynnik przy $x^2$ jest równy 1. Przy $2x^2 + 4x - 6 = 0$ musisz najpierw podzielić przez 2: $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'Mia ma problem z wykrywaniem kolizji: kiedy Lumi dotyka przeszkody? Tim proponuje obliczyć odległość między dwoma punktami. "Do tego potrzebujesz Pitagorasa", mówi. Mia przypomina sobie twierdzenie ze szkoły — i nagle wszystko ma sens.',
      challenge: 'Wykrywanie kolizji wymaga obliczania odległości między obiektami.',
      outro: 'Wykrywanie kolizji Lumiego działa teraz co do piksela! Mia wykorzystała twierdzenie Pitagorasa, żeby w czasie rzeczywistym obliczać odległość między postacią a przeszkodami.',
    },
    objectives: {
      theorem: 'Pewnie stosować twierdzenie Pitagorasa',
      calculate_sides: 'Obliczać brakujące boki w trójkącie prostokątnym',
      recognize: 'Rozpoznawać, kiedy mamy do czynienia z trójkątem prostokątnym',
      apply: 'Przenosić twierdzenie na problemy z codziennego życia',
    },
    explanation: {
      intro: 'W każdym trójkącie prostokątnym obowiązuje prosta, ale potężna reguła: suma kwadratów przyprostokątnych jest równa kwadratowi przeciwprostokątnej.',
      sides: 'Przy tym $c$ jest zawsze najdłuższym bokiem — przeciwprostokątną. Leży naprzeciw kąta prostego. Dwa krótsze boki $a$ i $b$ nazywamy przyprostokątnymi.',
      mia_tip: 'W mojej grze obliczam odległość między Lumim a obiektem jako przeciwprostokątną. Odległość w poziomie to $a$, w pionie to $b$ — a $c$ to rzeczywista odległość!',
      solving: 'Możesz przekształcić wzór tak, żeby obliczyć dowolny bok. Jeśli szukasz przeciwprostokątnej:',
    },
    concepts: {
      theorem: {
        title: 'Twierdzenie Pitagorasa',
        desc: 'Obowiązuje tylko w trójkątach prostokątnych. $c$ to przeciwprostokątna (naprzeciw kąta prostego), $a$ i $b$ to przyprostokątne.',
      },
      hypotenuse: {
        title: 'Obliczanie przeciwprostokątnej',
        desc: 'Jeśli znasz obie przyprostokątne, wyciągnij pierwiastek z sumy kwadratów.',
      },
      cathetus: {
        title: 'Obliczanie przyprostokątnej',
        desc: 'Jeśli znasz przeciwprostokątną i jedną przyprostokątną, wyciągnij pierwiastek z różnicy.',
      },
    },
    examples: {
      screen: {
        title: 'Obliczanie przekątnej ekranu',
        context: 'Mia chce wiedzieć, jak duży naprawdę jest ekran jej nowego monitora.',
        step1: 'Monitor ma 16 cali szerokości i 9 cali wysokości:',
        step2: 'Stosujemy Pitagorasa — szerokość i wysokość to przyprostokątne:',
        step3: 'Wyciągamy pierwiastek, żeby dostać przekątną:',
        mia_comment: '18,36 cala przekątnej — to wartość, którą producenci podają jako "rozmiar ekranu". Teraz wiem dlaczego!',
      },
      ladder: {
        title: 'Drabina przy ścianie',
        context: 'Jak wysoko sięga 5-metrowa drabina, która stoi 1,5 m od ściany?',
        step1: 'Drabina to przeciwprostokątna, odległość od ściany to przyprostokątna:',
        step2: 'Przekształcamy wzór, żeby obliczyć szukaną przyprostokątną (wysokość):',
        step3: 'Drabina sięga na wysokość prawie 4,77 m:',
        mia_comment: 'W grze używam dokładnie tego obliczenia, żeby sprawdzić, czy Lumi dosięgnie drabiny!',
      },
    },
    realworld: {
      screen: {
        title: 'Przekątna ekranu',
        desc: '"Rozmiar" ekranu to zawsze przekątna — obliczona z twierdzenia Pitagorasa na podstawie szerokości i wysokości.',
      },
      football: {
        title: 'Przekątna boiska piłkarskiego',
        desc: 'Boisko piłkarskie ma wymiary 105 m × 68 m. Jak daleko jest od narożnika do narożnika? Pitagoras ci to zdradzi.',
      },
      wifi: {
        title: 'Zasięg Wi-Fi',
        desc: 'Twój router stoi na parterze, a ty jesteś na pierwszym piętrze. Rzeczywista odległość do routera to przeciwprostokątna z odległości w poziomie i w pionie.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Przeciwprostokątna jako przyprostokątna',
        correct: 'c to zawsze najdłuższy bok',
        why: 'Przeciwprostokątna $c$ leży ZAWSZE naprzeciw kąta prostego. Jest najdłuższym bokiem. Jeśli pomylisz ją z przyprostokątną, całe obliczenie będzie złe.',
      },
      root: {
        wrong: 'Pierwiastek z sumy',
        correct: 'Najpierw dodaj, potem pierwiastek',
        why: '$\\sqrt{a^2 + b^2}$ to NIE to samo co $a + b$! Przykład: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, ale $3 + 4 = 7$.',
        mia_warning: 'Ten błąd znalazł Tim w moim kodzie — wykrywanie kolizji było o 40% za mało dokładne!',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'Mia chce zbudować system lootu dla Hafenlichter. Gracze mają móc znajdować rzadkie przedmioty — ale nie za często, bo zrobi się nudno, i nie za rzadko, bo będzie frustrująco. "To czysty rachunek prawdopodobieństwa", mówi Jule. Mia siada i liczy.',
      challenge: 'System loot dropów ma być sprawiedliwy i emocjonujący.',
      outro: 'System lootu Mii działa! Tak wyważyła prawdopodobieństwa dropów, że gracze średnio co 20 skrzyń znajdują rzadki przedmiot. "Matematyka za tym jest właściwie prosta", uśmiecha się — "ale balansowanie i tak zajęło trochę czasu."',
    },
    objectives: {
      basic: 'Podawać prawdopodobieństwa jako ułamek zwykły, ułamek dziesiętny i procent',
      tree: 'Rozwiązywać wieloetapowe doświadczenia losowe za pomocą drzewek',
      expected_value: 'Obliczać i interpretować wartość oczekiwaną',
      complement: 'Pracować z prawdopodobieństwem zdarzenia przeciwnego ("co najmniej raz...")',
    },
    explanation: {
      intro: 'Jak prawdopodobne jest wyrzucenie szóstki? Jaka jest szansa na rzadki przedmiot w grze? Żeby odpowiedzieć na takie pytania, potrzebujesz rachunku prawdopodobieństwa. Podstawowa idea jest prosta:',
      range: 'Prawdopodobieństwa leżą zawsze między 0 (niemożliwe) a 1 (pewne). Możesz je zapisać jako ułamek zwykły ($\\frac{1}{6}$), ułamek dziesiętny ($0{,}167$) albo procent ($16{,}7\\%$).',
      mia_tip: 'W Hafenlichter $P(\\text{rzadki przedmiot}) = 0{,}05$. To znaczy: przy każdym dropie gracz ma 5% szansy. Brzmi jak mało — ale przy wielu dropach to się sumuje!',
      tree: 'Przy doświadczeniach wieloetapowych (np. dwa rzuty kostką) używasz drzewka. Wzdłuż jednej ścieżki mnożysz prawdopodobieństwa:',
      complement: 'Często łatwiej jest obliczyć "odwrotność". Prawdopodobieństwo, że coś NIE nastąpi, wynosi:',
    },
    concepts: {
      laplace: {
        title: 'Doświadczenie Laplace\'a',
        desc: 'Jeśli wszystkie wyniki są jednakowo prawdopodobne (jak przy uczciwej kostce), po prostu dzielisz: wyniki sprzyjające przez wszystkie możliwe wyniki.',
      },
      complement: {
        title: 'Prawdopodobieństwo zdarzenia przeciwnego',
        desc: 'Prawdopodobieństwo, że A NIE nastąpi. Bardzo przydatne w zadaniach typu "co najmniej raz"!',
      },
      expected: {
        title: 'Wartość oczekiwana',
        desc: '"Średnia" wartość przy wielu powtórzeniach. Przy kostce: $E(X) = 3{,}5$ — nigdy nie wyrzucisz 3,5, ale średnio wychodzi właśnie ta wartość.',
      },
    },
    examples: {
      dice: {
        title: 'Wyrzucenie liczby parzystej',
        context: 'Jak prawdopodobne jest wyrzucenie liczby parzystej kostką?',
        step1: 'Kostka ma 6 ścian — to jest nasze $\\Omega$:',
        step2: 'Wyniki sprzyjające (liczby parzyste): 2, 4, 6 — czyli 3:',
        step3: 'Obliczamy prawdopodobieństwo:',
        mia_comment: '50% — to intuicyjnie jasne. Ale przy trudniejszych pytaniach wzór pomaga, kiedy intuicja zawodzi!',
      },
      loot: {
        title: 'Co najmniej jeden rzadki przedmiot',
        context: 'Mia chce wiedzieć: jak prawdopodobne jest zdobycie co najmniej jednego rzadkiego przedmiotu w 10 loot dropach?',
        step1: 'Prawdopodobieństwo rzadkiego przedmiotu na jeden drop wynosi 5%:',
        step2: 'Korzystamy ze zdarzenia przeciwnego: najpierw obliczamy, że w 10 dropach NIE wypadnie żaden rzadki przedmiot:',
        step3: 'To około 60% — w 60% przypadków NIE dostaje się żadnego rzadkiego przedmiotu:',
        step4: 'Prawdopodobieństwo zdarzenia przeciwnego jest szukaną odpowiedzią:',
        mia_comment: '40% szansy na co najmniej jeden rzadki przedmiot w 10 dropach — to wydaje się uczciwe! Jeśli gracze będą sfrustrowani, po prostu podniosę drop rate.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Lootboxy w grach',
        desc: 'Gry takie jak Genshin Impact czy EA Sports FC wykorzystują prawdopodobieństwo w swoich lootboxach. W sklepach z aplikacjami Apple i Google szanse na wygraną muszą być pokazane – dzięki matematyce możesz sprawdzić, czy zakup się opłaca.',
      },
      shuffle: {
        title: 'Losowe odtwarzanie w Spotify',
        desc: 'Losowe odtwarzanie w Spotify nie jest naprawdę losowe — bo "prawdziwy" przypadek wydaje się dziwny (czasem ta sama piosenka leci 3 razy z rzędu). Spotify używa algorytmów, które "wydają się" bardziej losowe.',
      },
      lottery: {
        title: 'Szanse w Lotto',
        desc: 'Szóstka w Lotto — brzmi realnie? Rzeczywiste prawdopodobieństwo jest znikomo małe:',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Dodawanie ścieżek zamiast mnożenia',
        correct: 'Wzdłuż ścieżki mnożymy',
        why: 'W drzewku mnożysz wzdłuż jednej ścieżki (połączenie I). Dodawać możesz tylko wtedy, gdy łączysz różne ścieżki (połączenie LUB).',
        mia_warning: 'Ten błąd popełniłam w systemie lootu. Drop rate były o wiele za wysokie, bo dodawałam zamiast mnożyć — każdy gracz od razu miał wszystko!',
      },
      percent: {
        wrong: 'Procenty powyżej 100%',
        correct: 'Maksimum to 100%',
        why: 'Prawdopodobieństwo nigdy nie może być większe niż 1 (= 100%). Jeśli twój wynik to $P > 1$, masz błąd w obliczeniach.',
      },
    },
  },
};
