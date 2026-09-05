export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'Mia składa czwarty poziom Świateł Portu: Lumi musi wskoczyć na platformę, która powoli i równomiernie dryfuje w prawo. „Ruch jest liniowy", tłumaczy Tim. „60 pikseli na sekundę — i tyle." Mia to wpisuje i od razu zauważa: to najzwyklejsze równanie prostej. Pozycja początkowa plus prędkość razy czas. Dokładnie to, co wyniosła z trzeciej klasy — tylko teraz bardziej formalnie: $f(x) = m \\cdot x + b$.',
      challenge: 'Mia musi tak dostroić krzywą skoku Lumiego, żeby wylądował dokładnie na dryfującej platformie. Nachylenie ruchu platformy i punkt przecięcia z torem Lumiego — wszystko liniowe.',
      outro: 'Funkcja liniowa ma dwa pokrętła: $m$ ustala, jak stromo przebiega, $b$ przesuwa ją w górę lub w dół. Teraz Mia rozumie, dlaczego potrzebuje jej wciąż na nowo: platformy, zużycie energii, paski życia — wszędzie tam, gdzie coś „na krok" rośnie albo maleje o stałą wartość, równanie prostej jest właściwym narzędziem.',
    },
    objectives: {
      recognize: 'Rozpoznawać funkcje liniowe po wzorze i po wykresie',
      slope_intercept: 'Odczytywać współczynnik kierunkowy $m$ i wyraz wolny $b$ z postaci $f(x) = mx + b$',
      point_slope: 'Układać równanie prostej z punktu i nachylenia w postaci punkt-nachylenie',
      two_points: 'Wyznaczać równanie prostej z dwóch punktów — obliczyć nachylenie, potem $b$',
    },
    explanation: {
      intro: 'Funkcja liniowa opisuje równomierną zależność: gdy $x$ zmienia się o jedną jednostkę, $y$ zmienia się zawsze o tę samą wartość. Na wykresie powstaje przez to prosta. Postać ogólna to:',
      slope: 'Współczynnik kierunkowy $m$ mierzy dokładnie tę „wartość na krok". Otrzymujesz go z dowolnych dwóch punktów prostej — różnica wysokości podzielona przez różnicę szerokości:',
      mia_tip: 'Myślę o platformie Lumiego: dryfuje dokładnie 60 pikseli na sekundę. To moje $m = 60$ pikseli/sekundę. Jeśli Lumi startuje przy $b = 200$, to pozycja po $t$ sekundach to po prostu $f(t) = 60t + 200$. Funkcja liniowa na wolności!',
      intercept: 'Wyraz wolny $b$ to wartość, przy której prosta przecina oś pionową. Odczytujesz go wprost z wykresu — albo wstawiasz $x = 0$ do wzoru:',
      point_slope: 'Jeśli znasz punkt $P(x_0 \\mid y_0)$ i nachylenie $m$, najszybciej zapiszesz prostą w postaci punkt-nachylenie. Stamtąd wyznaczasz $y$ i otrzymujesz postać kierunkową:',
    },
    concepts: {
      normal_form: {
        title: 'Postać kierunkowa $f(x) = mx + b$',
        desc: 'Standardowy zapis. $m$ to współczynnik kierunkowy, $b$ wyraz wolny. Oba parametry możesz odczytać wprost ze wzoru — i oba mają jasne znaczenie geometryczne.',
      },
      slope: {
        title: 'Współczynnik kierunkowy $m$',
        desc: 'Zmiana $y$ na jednostkę $x$. Z dwóch punktów: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Dodatni = rosnąca, ujemny = malejąca, $m = 0$ = prosta pozioma.',
      },
      point_slope: {
        title: 'Postać punkt-nachylenie',
        desc: 'Gdy znane są punkt $(x_0 \\mid y_0)$ i nachylenie $m$: $y - y_0 = m(x - x_0)$. Wygodna, bo nie musisz osobno obliczać $b$ — po prostu wyznaczasz $y$.',
      },
      parallel_perpendicular: {
        title: 'Równoległe i prostopadłe',
        desc: 'Dwie proste są równoległe, gdy mają to samo nachylenie ($m_g = m_h$). Są do siebie prostopadłe, gdy iloczyn nachyleń wynosi $-1$ ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Równanie prostej z dwóch punktów',
        context: 'Mia ma dwa punkty obserwacyjne toru platformy Lumiego: $P_1(2 \\mid 1)$ i $P_2(5 \\mid 7)$. Jakie równanie prostej opisuje ten ruch?',
        step1: 'Zapisać oba dane punkty:',
        step2: 'Obliczyć nachylenie — różnica wartości y podzielona przez różnicę wartości x:',
        step3: 'Ułożyć postać punkt-nachylenie z $P_1(2 \\mid 1)$ i $m = 2$, a potem wyznaczyć $y$:',
        step4: 'Gotowe równanie prostej w postaci kierunkowej:',
        mia_comment: 'Ładny tok postępowania: dwa punkty → nachylenie → podstawić → wymnożyć. Jeśli później będę mieć jeszcze trzeci punkt, mogę nim sprawdzić, czy moje równanie się zgadza.',
      },
      intersection: {
        title: 'Punkt przecięcia dwóch prostych',
        context: 'Platforma jedzie wzdłuż $g\\colon y = 2x - 3$, tor skoku Lumiego wzdłuż $h\\colon y = -x + 6$. Gdzie się spotykają?',
        step1: 'Zanotować oba równania prostych — ta sama zmienna $x$, ta sama zmienna $y$:',
        step2: 'W punkcie przecięcia obie wartości $y$ są równe. Zatem: przyrównać prawe strony:',
        step3: 'Wyznaczyć $x$ — oba wyrazy z $x$ na jedną stronę, stałe na drugą:',
        step4: 'Podstawić wartość $x$ do jednego z równań, aby otrzymać wartość $y$. Punkt przecięcia $S$:',
        mia_comment: 'W grze właśnie ten punkt przecięcia jest klatką trafienia. Jeśli znam moment $x = 3$, wiem, w której klatce mam wyzwolić kolizję.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Taryfa komórkowa z abonamentem',
        desc: 'Klasyczny przykład: 9,99 € abonamentu miesięcznie plus 10 centów za minutę. Koszt w zależności od czasu rozmowy to idealna prosta — $b$ to abonament, $m$ cena minuty.',
      },
      taxi: {
        title: 'Koszt taksówki',
        desc: '4 € opłaty początkowej przy wsiadaniu, potem 2,50 € za kilometr. Koszt całkowity rośnie liniowo wraz z przejechanym dystansem. Widać to na każdym paragonie.',
      },
      constant_speed: {
        title: 'Ruch ze stałą prędkością',
        desc: 'Deskorolkarz rusza z równomierną $v$ i startuje przy $s_0$. Przebyta droga po $t$ sekundach: $s(t) = v \\cdot t + s_0$. Czyste równanie prostej — tylko zmienne nazywają się inaczej.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Nachylenie do góry nogami: $\\Delta x / \\Delta y$ zamiast $\\Delta y / \\Delta x$',
        correct: 'Najpierw wysokość (y), potem szerokość (x): $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'Nachylenie opisuje „ile wysokości na krok" — czyli zmianę $y$ w liczniku i zmianę $x$ w mianowniku. Jeśli odwrócisz ułamek, otrzymasz odwrotność: z $m = 2$ wyjdzie błędnie $0{,}5$.',
        mia_warning: 'Mój sposób: myślę o schodach. Wysokość stopnia podzielona przez szerokość stopnia. Wysokość jest zawsze u góry ułamka — tak jak na schodach.',
      },
      intercept_zero: {
        wrong: 'Mylenie wyrazu wolnego z miejscem zerowym',
        correct: 'Miejsce zerowe: przyjmij $f(x) = 0$ i wyznacz $x$',
        why: 'Wyraz wolny $b$ to wartość $y$ przy $x = 0$ — a więc wartość $y$. Miejsce zerowe to wartość $x$, przy której $f(x) = 0$. Dla $f(x) = 2x + 5$ mamy $b = 5$, ale miejsce zerowe leży przy $x = -2{,}5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'Mia projektuje obrotowego bossa do Świateł Portu. Boss to wirujące koło młyńskie z trzema ramionami — a Lumi musi przeskakiwać przez szczeliny. „Hitbox musi być kołowy", mówi Tim. „Inaczej wygląda to krzywo, kiedy Lumi muska ramię, którego wcale nie ma w pobliżu." Mia potrzebuje obwodu, pola i kąta każdego ramienia — czysta geometria koła.',
      challenge: 'Mia musi zaprogramować okrągłe hitboksy. Do tego długość łuku, którą każde ramię zakreśla na sekundę — inaczej prędkość obrotu się nie zgadza.',
      outro: 'Z $U = 2\\pi r$ i $A = \\pi r^2$ Mia ma standardowe narzędzia. A miarą łukową przelicza kąty obrotu wprost na przebyte odcinki — o wiele szybciej niż okrężną drogą przez $360°$. „Miara łukowa to język programowania obrotów", zapamiętuje.',
    },
    objectives: {
      umfang_flaeche: 'Obliczać obwód i pole koła na podstawie promienia lub średnicy',
      bogenmass: 'Pewnie przeliczać kąty między miarą stopniową a łukową',
      sektor: 'Obliczać pole i długość łuku wycinka koła przy danym kącie środkowym',
      bogenlaenge: 'Wyznaczać długości łuku dla pełnego koła i dla wycinka w obu miarach kątowych',
    },
    explanation: {
      intro: 'Okrąg to zbiór wszystkich punktów oddalonych o tę samą odległość $r$ od środka. Z tej jednej miary $r$ wynikają obwód i pole — oba ze słynną stałą $\\pi \\approx 3{,}14159$:',
      bogenmass: 'Zamiast mierzyć kąty w stopniach, można też używać odpowiadającej im długości łuku na okręgu jednostkowym — nazywa się to miarą łukową (radianem). Pełne koło ma obwód $2\\pi r$, więc $360°$ odpowiada dokładnie $2\\pi$. Dla każdego kąta $\\alpha$ w mierze łukowej zachodzi:',
      mia_tip: 'Miara łukowa wydawała mi się początkowo dziwna. Ale w kodzie jest o wiele wygodniejsza: kiedy piszę Math.cos(angle) w JavaScripcie, funkcja oczekuje radianów — nie stopni. Kto o tym zapomni, nagle obraca sprite\'y w złą stronę.',
      umrechnung: 'Przeliczenie idzie przez regułę proporcji „$360° = 2\\pi\\,\\text{rad}$". Daje to stały mnożnik, którym zamieniasz stopnie i radiany jedne na drugie:',
      sektor: 'Wycinek to „kawałek tortu" koła. Jego udział w polu i obwodzie odpowiada dokładnie udziałowi jego kąta środkowego w kącie pełnym. Dla kąta $\\alpha$ (w stopniach lub radianach) zachodzi:',
    },
    concepts: {
      umfang: {
        title: 'Obwód $U$',
        desc: 'Długość linii okręgu. Zależy liniowo od promienia — podwójny promień oznacza podwójny obwód. Przy średnicy $d = 2r$ pisze się często krótko $U = \\pi d$.',
      },
      flaeche: {
        title: 'Pole $A$',
        desc: 'Zamknięta powierzchnia. Zależy kwadratowo od promienia — podwójny promień oznacza czterokrotne pole. Ważne dla wszystkich zadań typu „ile materiału" i „ile zawartości".',
      },
      bogenmass: {
        title: 'Miara łukowa (radian)',
        desc: 'Miara kąta, która mierzy kąt jako długość łuku na okręgu jednostkowym. Pełne koło = $2\\pi$, półkole = $\\pi$, kąt prosty = $\\frac{\\pi}{2}$. Standard w analizie i programowaniu.',
      },
      sektor: {
        title: 'Wycinek koła',
        desc: 'Kawałek tortu: dwa promienie plus łuk między nimi. Pole i długość łuku są wielkościami proporcjonalnymi — kąt środkowy jako ułamek $360°$ względnie $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Obwód i pole na podstawie promienia',
        context: 'Obrotowy boss Mii ma na ekranie promień $5\\,\\text{cm}$. Jak duże są obwód i pole?',
        step1: 'Dany jest promień:',
        step2: 'Podstawić do obwodu: $U = 2\\pi r$ z $r = 5$. Najpierw dokładnie z $\\pi$, potem w zaokrągleniu:',
        step3: 'Podstawić do pola: $A = \\pi r^2$. Uwaga: najpierw podnieść $r$ do kwadratu, dopiero potem pomnożyć przez $\\pi$:',
        mia_comment: 'Przy $r = 5$ obwód ($\\approx 31$) i pole ($\\approx 79$) to zupełnie różne liczby. Jeśli podwoję promień, obwód będzie dwa razy większy — ale pole czterokrotnie. To działanie kwadratu.',
      },
      sektor: {
        title: 'Pole wycinka i długość łuku',
        context: 'Jedno ramię bossa zakreśla wycinek o promieniu $12\\,\\text{cm}$ i kącie środkowym $60°$. Jakie pole i jaka długość łuku z tego wynikają?',
        step1: 'Dane są promień i kąt w mierze stopniowej:',
        step2: 'Wyznaczyć udział wycinka w polu całkowitym — $\\frac{60°}{360°} = \\frac{1}{6}$:',
        step3: 'Obliczyć pole wycinka — dokładnie z $\\pi$, potem w zaokrągleniu:',
        step4: 'Długość łuku: ten sam udział $\\frac{1}{6}$ obwodu $2\\pi r$:',
        mia_comment: 'Sztuczka jest zawsze ta sama: udział = $\\frac{\\alpha°}{360°}$. Mnożę go przez wielkość pełnego koła (pole albo obwód). Działa dla $30°$ tak samo jak dla $137{,}5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'Pizza na 8 kawałków',
        desc: 'Pizzę o promieniu $r$ kroi się na 8 równych kawałków. Każdy kawałek to wycinek o $\\frac{360°}{8} = 45°$ i polu $\\frac{\\pi r^2}{8}$. Konkretne zastosowanie w każdej kuchni.',
      },
      uhr: {
        title: 'Wskazówki zegara jako wycinki',
        desc: 'W ciągu godziny wskazówka godzinowa zakreśla $30°$ ($\\frac{360°}{12}$), w ciągu minuty wskazówka minutowa $6°$ ($\\frac{360°}{60}$). Czysta matematyka wycinków — przydatna też w zadaniach o kątach z zegarami.',
      },
      riesenrad: {
        title: 'Długość łuku diabelskiego młyna',
        desc: 'Gondola hamburskiego diabelskiego młyna o promieniu $r$ pokonuje w czasie $t$ pełnego obrotu $T$ łuk o długości $b = 2\\pi r \\cdot \\frac{t}{T}$. Można stąd obliczyć również prędkość gondoli.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'Wstawianie miary stopniowej do wzorów na miarę łukową',
        correct: 'Przed $b = \\alpha \\cdot r$ najpierw zamienić stopnie na radiany',
        why: 'Wzór $b = \\alpha \\cdot r$ działa tylko wtedy, gdy $\\alpha$ jest w mierze łukowej. Przy $\\alpha = 60°$ zapis $b = 60 \\cdot r$ jest rażąco błędny — poprawnie byłoby $\\alpha = \\frac{\\pi}{3} \\approx 1{,}047$, czyli $b \\approx 1{,}047 \\cdot r$.',
        mia_warning: 'Właśnie to zirytowało mnie przy obracaniu sprite\'ów: wstawiłam 60 zamiast 1,047 — boss zakręcił się 57 razy szybciej i natychmiast zniknął z ekranu!',
      },
      area_vs_circumference: {
        wrong: 'Obliczanie pola wzorem na obwód ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$ — kwadratowo względem $r$',
        why: 'Obwód i pole to różne wielkości o różnych jednostkach ($\\text{cm}$ wobec $\\text{cm}^2$). $2\\pi r$ jest liniowe, $\\pi r^2$ kwadratowe. Jeśli się je pomyli, wszystkie dalsze obliczenia są zepsute — a jednostka zdradza to natychmiast.',
      },
    },
  },
};
