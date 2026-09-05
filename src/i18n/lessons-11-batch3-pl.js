export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'Amir buduje w DataPulse nowy filtr rekomendacji. Wzór: „trafność na słuchacza podzielona przez liczbę słuchaczy". Brzmi czysto — dopóki Yara nie zapyta: „A co się stanie, jeśli utwór ma zero słuchaczy?" Amir wpatruje się w kod: dzielenie przez zero. Awaria. Bieguny, luki usuwalne, asymptoty — cała rodzina funkcji wymiernych nagle pojawia się w jego notatniku i musi ją naprawdę zrozumieć.',
      challenge: 'Amir musi tak zabezpieczyć swój filtr, żeby nie wywracał się na biegunach — i jednocześnie rozpoznawać, kiedy pozorna awaria jest w rzeczywistości tylko luką usuwalną, którą da się skrócić.',
      outro: 'Z trzema narzędziami Amir daje sobie radę: sprawdzić dziedzinę (gdzie mianownik się zeruje?), odróżnić biegun od luki usuwalnej (czy licznik też się tam zeruje?) i wyznaczyć asymptoty (zachowanie dla dużych $|x|$). Jego filtr działa teraz czysto — a profesor Nguyen chwali: „To jest porządna higiena numeryczna."',
    },
    objectives: {
      definition: 'Rozpoznawać funkcję wymierną i wyznaczać jej dziedzinę',
      poles: 'Znajdować bieguny — miejsca zerowe mianownika, w których licznik nie jest zerem',
      removable_gaps: 'Rozpoznawać luki usuwalne, usuwać je przez skracanie i podawać przedłużenie ciągłe',
      asymptotes: 'Wyprowadzać asymptoty pionowe i poziome ze wzoru funkcji',
    },
    explanation: {
      intro: 'Funkcja wymierna to iloraz dwóch wielomianów — licznik $p(x)$ podzielony przez mianownik $q(x)$. Punkt decydujący: mianownik nigdy nie może być zerem, bo wtedy funkcja nie jest w tym miejscu określona.',
      domain: 'Dziedzina $D_f$ składa się ze wszystkich liczb rzeczywistych poza miejscami zerowymi mianownika. Rozłóż mianownik na czynniki albo oblicz jego miejsca zerowe — to są luki w $D_f$.',
      amir_tip: 'Mój pierwszy odruch przy każdej funkcji wymiernej: gdzie mianownik się zeruje? Te wartości $x$ wypisuję na górze kartki. Dopiero potem zajmuję się resztą. Kto to pomija, przeocza bieguny — a w kodzie program się wtedy wywraca.',
      poles: 'Biegun masz wtedy, gdy mianownik się zeruje, a licznik nie. Tam wartość funkcji ucieka do nieskończoności (dodatniej lub ujemnej) — wykres ma asymptotę pionową.',
      removable: 'Jeśli w tym samym miejscu zeruje się także licznik, możesz skrócić wspólny czynnik. Zostaje wtedy tak zwana „luka usuwalna": wykres ma tam jedynie dziurę, którą mógłbyś wypełnić sensowną definicją.',
      asymptotes: 'Zachowanie dla dużych $|x|$ odczytujesz ze stopni wielomianów: jeśli stopień licznika jest mniejszy niż stopień mianownika, to $f(x) \\to 0$ — oś x jest asymptotą poziomą. Jeśli stopnie są równe, iloraz najwyższych współczynników daje asymptotę poziomą.',
    },
    concepts: {
      definition: {
        title: 'Funkcja wymierna',
        desc: 'Iloraz dwóch wielomianów $p(x)$ i $q(x)$. Określona wszędzie tam, gdzie $q(x) \\neq 0$. Przykłady: $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Biegun',
        desc: 'Punkt $x_0$ z $q(x_0) = 0$ i $p(x_0) \\neq 0$. Wykres ucieka do $\\pm\\infty$ — asymptota pionowa w $x = x_0$. Parzysty rząd bieguna ⇒ brak zmiany znaku, nieparzysty ⇒ zmiana znaku.',
      },
      removable_gap: {
        title: 'Luka usuwalna',
        desc: 'Punkt $x_0$ z $p(x_0) = q(x_0) = 0$. Skrócić wspólny czynnik, potem obliczyć granicę — to jest „przedłużenie ciągłe". Wykres ma tam tylko otwartą dziurę.',
      },
      asymptote: {
        title: 'Asymptota pozioma',
        desc: 'Granica dla $x \\to \\pm\\infty$. Przy $\\deg p < \\deg q$ wynosi $y = 0$, przy $\\deg p = \\deg q$ jest ilorazem współczynników wiodących. Przy $\\deg p > \\deg q$ istnieje zamiast tego asymptota ukośna lub krzywoliniowa.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Zbadać prosty biegun',
        context: 'Amir sprawdza najprostszą funkcję wymierną swojego filtra: $f(x) = \\frac{1}{x-2}$. Gdzie nie jest określona i jak się zachowuje?',
        step1: 'Zapisać wzór funkcji — licznik $p(x) = 1$, mianownik $q(x) = x - 2$:',
        step2: 'Poszukać miejsca zerowego mianownika: $q(x) = 0$ daje punkt krytyczny:',
        step3: 'Obliczyć tam licznik: $p(2) = 1 \\neq 0$. A więc nie luka usuwalna, lecz prawdziwy biegun:',
        step4: 'Zachowanie w nieskończoności: $\\frac{1}{x-2} \\to 0$ dla $x \\to \\pm\\infty$. Oś x jest asymptotą poziomą:',
        amir_comment: 'Klasyczny przypadek: asymptota pionowa w $x = 2$, pozioma w $y = 0$. W kodzie muszę więc jawnie przechwycić $x = 2$ — inaczej NaN. Dokładnie o to pytała Yara.',
      },
      removable: {
        title: 'Znaleźć lukę usuwalną przez skracanie',
        context: 'Podczas testu Amir natrafia na $f(x) = \\frac{x^2 - 1}{x - 1}$. Przy $x = 1$ mianownik się zeruje — awaria? A może jednak nie?',
        step1: 'Zapisać wzór funkcji — licznik to wzór skróconego mnożenia:',
        step2: 'Przy $x = 1$ zerują się licznik I mianownik. To wskazówka na lukę usuwalną:',
        step3: 'Rozłożyć licznik $(x^2 - 1) = (x-1)(x+1)$, a potem skrócić wspólny czynnik $(x-1)$:',
        step4: 'Wykres jest zatem prostą $y = x + 1$ — z dziurą dokładnie w $x = 1$, ponieważ pierwotna $f$ nie jest tam określona:',
        amir_comment: 'Ważne: mimo skrócenia nie wolno mi włączyć $x = 1$ do $D_f$. Pierwotna funkcja pozostaje tam nieokreślona. W kodzie rozwiązuję to warunkiem if i zwracam granicę $f(1) := 2$ — czyste przedłużenie ciągłe.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Koszt jednostkowy w produkcji',
        desc: 'Koszty stałe $F$ rozłożone na $x$ wyprodukowanych sztuk plus koszty zmienne $v$ na sztukę: $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. Dla $x \\to \\infty$ koszt jednostkowy zbliża się do $v$ — asymptota pozioma w praktyce.',
      },
      light_intensity: {
        title: 'Natężenie światła i kwadrat odległości',
        desc: 'Lampa o mocy $P$ wytwarza w odległości $r$ natężenie $I(r) = \\frac{P}{4\\pi r^2}$. Przy $r \\to 0$ biegun (teoretycznie nieskończenie jasno tuż przy źródle), przy $r \\to \\infty$ mamy $I \\to 0$. Klasyczne prawo przyrody.',
      },
      dilution: {
        title: 'Stężenie przy rozcieńczaniu',
        desc: 'Sok o stężeniu $c_0$ i objętości $V_0$ rozcieńcza się objętością $V$ wody: $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Tutaj nie ma bieguna ($V_0 + V > 0$), ale dla $V \\to \\infty$ stężenie dąży do zera — asymptota pozioma $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'Mylenie bieguna z miejscem zerowym',
        correct: 'Miejsce zerowe: licznik równy zeru. Biegun: mianownik równy zeru, a licznik nie',
        why: 'Dla $f(x) = \\frac{x-3}{x+2}$ miejsce zerowe leży przy $x = 3$ (tam $p(x) = 0$, więc $f = 0$), a biegun przy $x = -2$ (tam $q(x) = 0$). Kto zamieni te role, narysuje wykres kompletnie błędnie — dziura i biegun w złych miejscach.',
        amir_warning: 'Moja pamięciówka: miejsce zerowe jest tam, gdzie $f$ „wydaje zero". Biegun jest tam, gdzie $f$ „wybucha". Oba wynikają wprost z licznika bądź mianownika — nigdy ich nie myl.',
      },
      dont_cancel: {
        wrong: 'Przeoczyć wspólny czynnik i przyjąć biegun',
        correct: 'Najpierw rozłożyć licznik i mianownik na czynniki, potem skrócić wspólne',
        why: 'Dla $f(x) = \\frac{x^2-4}{x-2}$ wydaje się, że $x = 2$ jest biegunem. Ale jeśli rozłożyć licznik, wychodzi $\\frac{(x-2)(x+2)}{x-2} = x+2$ — czyli tylko luka usuwalna. Kto nie rozkłada, twierdzi, że istnieje biegun, którego wcale nie ma.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'Amir trenuje w DataPulse prosty model liniowy: trzy cechy (tempo, głośność, taneczność), na podstawie których model szacuje ocenę słuchaczy. Z trzech znanych przykładów wynikają trzy równania z trzema niewiadomymi — wagami cech. „Ręcznie nic z tego nie będzie", mówi Finn. Amir się uśmiecha: „Będzie, z Gaussem." Układy równań liniowych, klasyk, który kryje się za każdym kodem ML.',
      challenge: 'Amir musi z trzech przykładów treningowych wyznaczyć trzy wagi $a$, $b$, $c$. Trzy równania, trzy niewiadome — Gauss.',
      outro: 'Metodą Gaussa Amir systematycznie doprowadza macierz rozszerzoną do postaci schodkowej. Obszar w lewym dolnym rogu krok po kroku staje się zerami, a potem odczytuje rozwiązania wstecz. „To dokładnie to, co numpy.linalg.solve robi w tle", tłumaczy Finnowi — „tylko teraz w końcu rozumiem dlaczego."',
    },
    objectives: {
      solve_2x2: 'Rozwiązywać układy równań liniowych z dwiema niewiadomymi przez podstawianie, porównywanie lub dodawanie',
      gauss_3x3: 'Systematycznie doprowadzać układy z trzema niewiadomymi do postaci schodkowej algorytmem Gaussa',
      solution_types: 'Rozróżniać trzy typy rozwiązań — jednoznaczne, brak, nieskończenie wiele',
      matrix_form: 'Zapisywać układ w postaci macierzowej $A\\vec{x} = \\vec{b}$ i poprawnie budować macierz rozszerzoną',
    },
    explanation: {
      intro: 'Układ równań liniowych to zbiór kilku równań z tymi samymi niewiadomymi. Rozwiązaniem układu jest zestaw wartości, który spełnia WSZYSTKIE równania jednocześnie. Znane już z trzeciej klasy — typowo dwa równania, dwie niewiadome:',
      methods: 'Dla układów 2×2 wystarczą metody klasyczne: podstawianie, porównywanie albo dodawanie. Przy 3×3 lub większych szybko robi się nieprzejrzyście — dlatego algorytm Gaussa, który przebiega mechanicznie i zawsze tak samo.',
      amir_tip: 'Mój tok postępowania dla 3×3: wypisać macierz rozszerzoną, a potem KONSEKWENTNIE. Najpierw wyzerować lewą kolumnę pod elementem głównym, potem środkową kolumnę pod drugim elementem głównym. Postać schodkowa. Rozwiązywanie wstecz. Brzmi mechanicznie — bo jest mechaniczne, i właśnie na tym polega zaleta.',
      gauss: 'W metodzie Gaussa zapisujesz układ jako macierz rozszerzoną $(A | \\vec{b})$. Trzema operacjami na wierszach — pomnożyć wiersz przez liczbę, dodać lub odjąć wiersze, zamienić wiersze — przekształcasz macierz do postaci schodkowej. Nie zmienia to zbioru rozwiązań.',
      solution_types: 'Z postaci schodkowej odczytujesz typ rozwiązania wprost: brak sprzecznego wiersza zerowego na dole ⇒ rozwiązanie jednoznaczne. Wiersz $0 = c$ z $c \\neq 0$ ⇒ brak rozwiązań. Wiersz $0 = 0$ ⇒ wprowadzić parametr, nieskończenie wiele rozwiązań.',
    },
    concepts: {
      lgs: {
        title: 'Układ równań liniowych',
        desc: 'Zbiór równań liniowych ze wspólnymi niewiadomymi. W postaci macierzowej: $A \\vec{x} = \\vec{b}$, gdzie $A$ jest macierzą współczynników, a $\\vec{b}$ wektorem prawych stron.',
      },
      gauss: {
        title: 'Algorytm Gaussa',
        desc: 'Standardowa metoda rozwiązywania. Doprowadzić macierz rozszerzoną do postaci schodkowej, a potem rozwiązać wstecz. Trzy dozwolone operacje, które nie zmieniają zbioru rozwiązań: pomnożyć wiersz przez skalar, dodać wielokrotność wiersza, zamienić dwa wiersze.',
      },
      solution_types: {
        title: 'Trzy typy rozwiązań',
        desc: 'Rozwiązanie jednoznaczne (tyle elementów głównych, ile niewiadomych), brak rozwiązań (sprzeczny wiersz $0 = c$), nieskończenie wiele rozwiązań (przynajmniej jeden wiersz $0=0$, z parametrami swobodnymi).',
      },
      matrix: {
        title: 'Macierz rozszerzona współczynników',
        desc: 'Zapis $(A | \\vec{b})$. Po lewej współczynniki niewiadomych, po prawej (oddzielona kreską) prawa strona. Oszczędza ciągłego przepisywania nazw zmiennych.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'Prosty układ 2×2 metodą dodawania',
        context: 'Amir ma dwa przykładowe równania z danych treningowych. Szuka $x$ (waga dla tempa) i $y$ (waga dla głośności).',
        step1: 'Zapisać układ równań:',
        step2: 'Dodać oba równania — wyrazy z $y$ się znoszą, a $x$ jest natychmiast rozwiązane:',
        step3: 'Podstawić $x = 3$ do jednego z równań wyjściowych, tutaj do drugiego:',
        step4: 'Zbiór rozwiązań — podać jako parę $(x, y)$:',
        amir_comment: 'Klasyczna metoda dodawania: przy odrobinie szczęścia zmienne znikają od razu. Jeśli nie, trzeba najpierw pomnożyć jedno równanie przez odpowiednią liczbę — np. przez 2, żeby współczynniki do siebie pasowały.',
      },
      gauss_3x3: {
        title: 'Rozwiązać układ 3×3 metodą Gaussa',
        context: 'Amir ma mały zestaw treningowy: trzy oceny słuchaczy i trzy wagi $x, y, z$. Trzy równania — metoda Gaussa w macierzy rozszerzonej.',
        step1: 'Ułożyć macierz rozszerzoną — współczynniki po lewej, prawe strony po prawej od kreski:',
        step2: 'Wiersz 2 minus 2 razy wiersz 1 — element $a_{21} = 2$ staje się zerem:',
        step3: 'Wiersz 3 minus wiersz 1 — element $a_{31} = 1$ staje się zerem. Lewa kolumna jest teraz czysta pod elementem głównym 1:',
        step4: 'Dalej aż do postaci schodkowej, potem rozwiązywanie wstecz: $z$ z ostatniego wiersza, podstawić wyżej dla $y$, potem $x$. Rozwiązanie: $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$:',
        amir_comment: 'Gauss to księgowość: każdą operację na wierszu notować starannie. Kto wykona operację po połowie — np. przekształci tylko kolumnę elementu głównego — dostanie śmieci. Dyscyplina bije tu geniusz.',
      },
    },
    realworld: {
      mischung: {
        title: 'Zadania na mieszaniny',
        desc: 'Aptekarz miesza dwa roztwory o stężeniach $a$ i $b$ w mieszaninę o masie całkowitej $m$ i całkowitej zawartości substancji czynnej $w$. Dwa równania, dwie niewiadome — od razu układ.',
      },
      preise: {
        title: 'Odtwarzanie cen',
        desc: 'Trzech klientów, trzy paragony z ilościami i ceną łączną — trzeba z nich odtworzyć ceny jednostkowe. Trzy równania, trzy nieznane ceny jednostkowe. Gauss rozwiązuje to w kilku krokach.',
      },
      network: {
        title: 'Obwody elektryczne (Kirchhoff)',
        desc: 'W sieci oporników każde równanie węzła (prąd wpływający = prąd wypływający) i każde równanie oczka (suma napięć = 0) daje warunek liniowy. Przy $n$ niewiadomych powstaje układ $n \\times n$ — standardowa metoda w elektrotechnice.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Przy operacji na wierszu przekształcać tylko kolumnę elementu głównego',
        correct: 'Przekształcać każdą kolumnę wiersza (łącznie z prawą stroną) — wszystkie naraz',
        why: 'Operacja na wierszu dotyczy CAŁEGO wiersza. Kto przy $Z_2 - 2Z_1$ przekształci tylko element główny, a zapomni o pozostałych kolumnach, niszczy równanie. Skutek: postać schodkowa wygląda poprawnie, ale rozwiązania są błędne — a błąd trudno potem znaleźć.',
        amir_warning: 'Dokładnie ten błąd kosztował mnie cały punkt na próbnym sprawdzianie. Od tamtej pory wypisuję cały nowy wiersz — wszystkie elementy łącznie z prawą stroną — starannie pod starym. Da się to porównać jednym spojrzeniem.',
      },
      no_solution: {
        wrong: 'Interpretowanie sprzecznego wiersza $0 = c$ jako $x = c$',
        correct: 'Wiersz $0 = c$ z $c \\neq 0$ oznacza: układ NIE ma rozwiązania',
        why: 'Jeśli na końcu wychodzi $0 = 5$, to sprzeczność — żadna wartość $x, y, z$ nie może jej spełnić. Zbiór rozwiązań jest pusty. Kto odczyta to jako $x = 5$, podaje rozwiązanie, którego układ nie spełnia.',
      },
    },
  },
};
