export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'System czastek "Hafenlichter 3D" wyglada wspaniale — iskry lecza, mgla sie unosi, ogien buchna. Ale Kai ma problem z wydajnoscia: Tysiace czastek jednoczesnie obciazaja GPU. "Musze obliczyc, jak szybko czastki blaknac, zeby je na czas usunac z pamieci", wyjasnia Mii. Odpowiedz lezy w funkcji $e$ i jej odpowiedniku, logarytmie naturalnym — narzedziach do wszystkiego, co rosnie lub zanika wykladniczo.',
      challenge: 'Kai musi matematycznie modelowac czas zycia czastek: Jak szybko blaknac iskra? Kiedy czastka dymu jest na tyle przezroczysta, ze mozna ja usunac? Do tego potrzebuje reguly lancuchowej dla funkcji $e$, pochodnych $\\ln$ i rozwiazywania rownan rozpadu.',
      outro: 'Z zloonymi funkcjami $e$ i pochodnymi $\\ln$ Kai zbudowal inteligentny system czastek: Kazda iskra podaza precyzyjnej krzywej rozpadu, kazda czastka dymu jest recyklingowana dokladnie wtedy, gdy jej nieprzezroczystosc spada ponizej progu percepcji. "Regula lancuchowa to w zasadzie moj optymalizator wydajnosci", usmiecha sie Kai.',
    },
    objectives: {
      advanced_e_properties: 'Rozniczkowac zlozone funkcje $e$ regula lancuchowa: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Opanowac pochodna $\\ln(g(x))$ i stosowac ja w badaniu krzywych',
      composite_exp_functions: 'Analizowac iloczyny wielomianow i funkcji $e$ (ekstrema, punkty przegiecia)',
      differential_equations: 'Rozumiec proste rownania rozniczkowe typu $f\'(t) = k \\cdot f(t)$ i budowac modele rozpadu',
    },
    explanation: {
      intro: 'W klasie 11 poznales podstawy $e^x$ i $\\ln(x)$. Teraz zaczyna sie na powaznie: Rozniczkujemy zlozone funkcje $e$, analizujemy krzywe z $\\ln$ i rozwiazujemy rownania rozpadu. Klucz to regula lancuchowa — jesli w wykladniku nie stoi samo $x$, lecz cala funkcja $g(x)$, pochodna zewnetrzna daje $e^{g(x)}$, a pochodna wewnetrzna $g\'(x)$ dolacza jako czynnik:',
      ln_derivative: 'Rownie elegancko: Pochodna $\\ln(g(x))$ z regula lancuchowa. Logarytm naturalny "odwraca funkcje" — pochodna wewnetrzna stoi w liczniku, sama funkcja wewnetrzna w mianowniku:',
      kai_tip: 'W moim silniku 3D funkcje $e$ pojawiaja sie wszedzie: rozpad czastek, gestosc mgly, wygaszanie dzwieku. Trick jest zawsze ten sam — regula lancuchowa. Gdy rozniczkuje $e^{-0{,}5t^2}$ dla rozkladu Gaussa, funkcja wewnetrzna to $g(t) = -0{,}5t^2$, a pochodna wewnetrzna $g\'(t) = -t$. Wstawic, gotowe!',
      integration: 'Przy calkowaniu proces biegnie odwrotnie. Dla prostych funkcji wykladniczych: czynnik w wykladniku przechodzi do mianownika. A slynna regula $\\frac{1}{x}$ prowadzi bezposrednio do $\\ln$:',
      decay_model: 'Rozpad wykladniczy to STANDARDOWY model dla procesow, w ktorych predkosc zmian jest proporcjonalna do aktualnej wartosci: $f\'(t) = -\\lambda \\cdot f(t)$. Rozwiazanie to zawsze funkcja $e$ z ujemnym wykladnikiem. Okres poltrwania $t_{1/2}$ podaje, po jakim czasie zostaje polowa wartosci poczatkowej:',
    },
    concepts: {
      chain_rule_exp: { title: 'Regula lancuchowa dla funkcji $e$', desc: 'Przy $f(x) = e^{g(x)}$ funkcja zewnetrzna to $e^u$ (pochodna: $e^u$), wewnetrzna $g(x)$. Wynik: Funkcja $e$ zostaje, pomnozoona przez pochodna wewnetrzna. Przyklad: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.' },
      ln_derivative: { title: 'Pochodna $\\ln(g(x))$', desc: 'Regula lancuchowa dla logarytmu tworzy ulamek: pochodna wewnetrzna przez funkcje wewnetrzna. Szczegolnie przydatne, gdy $g(x)$ jest wielomianem — np. $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Wazne: Dziedzina jest ograniczona przez $g(x) > 0$.' },
      exp_integration: { title: 'Calkowanie logarytmiczne', desc: 'Gdy podcalkowy ma postac $\\frac{f\'(x)}{f(x)}$, funkcja pierwotna to natychmiast $\\ln|f(x)| + C$. To odwrotnosc pochodnej $\\ln$ i jeden z najwazniejszych triczkow calkowania.' },
    },
    examples: {
      particle_decay: { title: 'Modelowanie rozpadu czastek', context: 'W systemie czastek Kaia 5000 czastek iskier startuje jednoczesnie. Ich liczba maleje wykladniczo — Kai chce obliczyc predkosc rozpadu i okres poltrwania.', step1: 'Budujemy model rozpadu — $N_0 = 5000$ czastek, stala rozpadu $\\lambda = 0{,}03\\,\\text{s}^{-1}$:', step2: 'Rozniczkujemy regula lancuchowa — funkcja wewnetrzna $g(t) = -0{,}03t$, pochodna wewnetrzna $g\'(t) = -0{,}03$:', step3: 'Obliczamy predkosc poczatkowa — przy $t = 0$ znika 150 czastek na sekunde:', step4: 'Wyznaczamy okres poltrwania — rozwiazujemy $N(t_{1/2}) = \\frac{N_0}{2}$ za pomoca $\\ln$:', kai_comment: 'Po 23 sekundach polowa czastek znika — to znaczy, ze moge juz wczesniej zwalniac pamiec na nastepna eksplozje. W silniku ustawiam prog usuwania na $5\\%$ nieprzezroczystosci, to ok. $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.' },
      ln_curve_analysis: { title: 'Badanie krzywej z funkcja $e$', context: 'Kai modeluje jasnosc blysku swiatla: Najpierw rosnie, potem opada. Krzywa jasnosci ma postac $f(x) = x^2 \\cdot e^{-x}$ — typowa "funkcja blysku".', step1: 'Dana funkcja — iloczyn wielomianu i malejzcej funkcji $e$:', step2: 'Pochodna regula iloczynu: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — dla drugiego czynnika potrzebujemy reguly lancuchowej:', step3: 'Miejsca zerowe pochodnej: $e^{-x} > 0$ zawsze, wiec decyduje tylko $x(2-x) = 0$:', step4: 'Wyznaczamy maksimum — przy $x = 2$ obliczamy wartosc funkcji:', kai_comment: 'Ta krzywa "wzrost-potem-spadek" jest idealna do efektow swietlnych. Przy $x = 0$ jest ciemno, przy $x = 2$ maksymalna jasnosc, potem lagodne wygaszanie. W moim shaderze uzywam dokladnie tej funkcji do blyskow i eksplozji!' },
    },
    realworld: {
      particle_systems: { title: 'Systemy czastek w silnikach 3D', desc: 'Kazda iskra, kazda smuga dymu, kazdy ogien w grze komputerowej podaza krzywej rozpadu wykladniczego $N(t) = N_0 \\cdot e^{-\\lambda t}$. Stala rozpadu $\\lambda$ okresla, jak szybko czastki blaknac.' },
      signal_processing: { title: 'Przetwarzanie audio i tlumienie sygnalu', desc: 'Gdy slyszysz efekt poglosu w GarageBand, dzwiek zanika wykladniczo: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. Funkcja $e$ steruje glosnoscia, $\\sin$ oscylacja.' },
      learning_curve: { title: 'Krzywa uczenia sie i progresja umiejetnosci', desc: 'Jak szybko uczysz sie nowej gry? Krzywa uczenia $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ opisuje, jak umiejetnosci poczatkowo szybko rosna, a potem zblizaja sie do maksimum.' },
    },
    mistakes: {
      chain_rule_forgotten: { wrong: 'Zapomnienie pochodnej wewnetrznej: $(e^{3x})\' = e^{3x}$', correct: 'Zastosuj regule lancuchowa: $(e^{3x})\' = 3 \\cdot e^{3x}$', why: 'Gdy w wykladniku stoi wiecej niz samo $x$, MUSISZ uzyc reguly lancuchowej. Funkcja wewnetrzna to $g(x) = 3x$ z $g\'(x) = 3$. Ten czynnik nie moze zginac!', kai_warning: 'Kiedys w shaderze rozniczkowalem $e^{-0{,}5t^2}$ i zapomnialem o czynniku $-t$. Efekt: Czastki, ktore sie nigdy nie zmienialy — jak zamrozniony dym.' },
      ln_negative: { wrong: 'Zapomnienie kresek wartosci bezwzglednej: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$', correct: 'Poprawnie z wartoscia bezwzgledna: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$', why: 'Funkcja $\\frac{1}{x}$ jest zdefiniowana tez dla ujemnych $x$, ale $\\ln(x)$ tylko dla $x > 0$. Kreski wartosci bezwzglednej zapewniaja, ze funkcja pierwotna obowiazuje na calej dziedzinie.' },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Dla "Hafenlichter 3D" Kai buduje proceduralny generator poziomow: Mosty, tunele i budynki maja powstawac z matematycznych krzywych obracanych wokol osi. "Wyobrazcie sobie, ze definiuje profil i obracam go — i juz mam kolumne, kopule lub kadlub statku", zachwyca sie Kai.',
      challenge: 'Kai musi obliczac objetosci obiektow 3D powstajacych przez obrot krzywych. Ponadto potrzebuje calkowania czesciowego dla zlozonych wzorow oswietlenia i musi sprawdzac, czy okreslone calki w ogole sa zbiezne.',
      outro: 'Generator poziomow dziala: Kai obraca profile krzywych wokol osi i otrzymuje doskonale bryly 3D z dokladnie obliczona objetoscia. "Calkowanie czesciowe bylo kluczem do calek oswietleniowych", opowiada Amirowi.',
    },
    objectives: {
      integration_techniques: 'Pewnie stosowac calkowanie czesciowe i podstawianie',
      rotation_volumes: 'Obliczac objetosci obrotowe wokol osi $x$ wzorem $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Sprawdzac zbieznosc calek niewlasciwych i obliczac je',
      partial_integration: 'Celowo stosowac metode calkowania czesciowego przy calkowaniu iloczynow',
    },
    explanation: {
      intro: 'W klasie 11 poznales calki oznaczone jako pole. Teraz dochodza trzy nowe techniki. Pierwsza to calkowanie czesciowe — "odwrotnosc" reguly iloczynu. Gdy musisz scalkowac iloczyn jak $x \\cdot e^x$, rozkladasz go na $u$ i $v\'$:',
      substitution: 'Druga technika to podstawianie — "odwrotnosc" reguly lancuchowej przy rozniczkowaniu. Gdy funkcja "tkwi w innej", zastepujesz funkcje wewnetrzna nowa zmienna:',
      kai_tip: 'Moj trick do calkowania czesciowego: "LIATE" — Logarytm, Odwrotnosc tryg., Algebraiczne, Trygonometryczne, Wykladnicze. To kolejnosc wyboru $u$. Przy $\\int x \\cdot e^x\\,\\mathrm{d}x$ mamy $u = x$ (algebraiczne), $v\' = e^x$ (wykladnicze). Dziala prawie zawsze!',
      rotation_volume: 'Teraz staje sie trojwymiarowe: Gdy obracasz wykres $f(x)$ wokol osi $x$, powstaje bryla obrotowa. Jej objetosc obliczasz wyobrazajac sobie bryle zlozona z nieskonczonej liczby cienkich tarcz kolowych — kazda o promieniu $f(x)$:',
      improper: 'Co sie dzieje, gdy granica calkowania to $\\infty$? Lub gdy podcalkowy jest nieograniczony w pewnym punkcie? Wtedy mowimy o calkach niewlasciwych. Zastepujesz problem granica i sprawdzasz, czy wychodzi wartosc skonczona:',
    },
    concepts: {
      partial_integration: { title: 'Calkowanie czesciowe', desc: 'Odwrotnosc reguly iloczynu: Rozkladasz podcalkowy na $u$ (rozniczkujesz) i $\\mathrm{d}v$ (calkuljesz). Cel: Nowa calka $\\int v\\,\\mathrm{d}u$ musi byc prostsza od oryginalnej.' },
      rotation_volume: { title: 'Objetosc obrotowa', desc: 'Wykres funkcji obracany wokol osi $x$ tworzy bryle 3D. Objetosc wynika z sumy nieskonczenie wielu tarcz kolowych o promieniu $f(x)$ i grubosci $\\mathrm{d}x$.' },
      improper_integral: { title: 'Calki niewlasciwe', desc: 'Calki z $\\infty$ jako granica lub nieograniczonym podcalkowym. Zastepujesz problem zmienna i obliczasz granice. Jesli granica istnieje i jest skonczona, calka jest zbiezna — w przeciwnym razie rozbiezna.' },
    },
    examples: {
      level_geometry: { title: 'Bryla obrotowa do projektowania poziomow', context: 'Kai chce wygenerowac kolumne, ktorej profil podaza krzywej $f(x) = \\sqrt{x}$. Miedzy $x = 0$ a $x = 4$ krzywa obraca sie wokol osi $x$ — jaka jest objetosc kolumny?', step1: 'Definiujemy profil — funkcja pierwiastkowa na przedziale $[0;\\,4]$:', step2: 'Stosujemy wzor na objetosc obrotowa — podnosimy $f(x)$ do kwadratu i dodajemy $\\pi$ z przodu:', step3: 'Tworzymy funkcje pierwotna i wstawiamy granice:', step4: 'Wynik — kolumna ma objetosc $8\\pi$ jednostek objetosci:', kai_comment: 'To dokladnie wzor, ktory uzywa moj proceduralny generator! Definiuje profile krzywych, obracam je i od razu znam objetosc — wazne dla symulacji fizycznych, zeby obiekty mialy prawidlowa mase.' },
      partial_int: { title: 'Calkowanie czesciowe do oswietlenia', context: 'W shaderze Kaia pojawia sie calka $\\int x \\cdot e^x\\,\\mathrm{d}x$ — iloczyn, ktory nie da sie bezposrednio scaalkowac.', step1: 'Wybieramy rozklad: $u = x$ (prostsze przy rozniczkowaniu), $v\' = e^x$ (latwe do calkowania):', step2: 'Obliczamy pochodne i funkcje pierwotne:', step3: 'Wstawiamy do wzoru — nowa calka to juz tylko $\\int e^x\\,\\mathrm{d}x$:', step4: 'Konczymy upraszczanie — wyciaganie daje elegancka postac:', kai_comment: 'Ten moment, gdy nowa calka jest prostsza od starej — to satysfakcja przy calkowaniu czesciowym. Jesli jest bardziej skomplikowana, zle wybrales $u$ i $v\'$. Po prostu zamien!' },
    },
    realworld: {
      '3d_printing': { title: 'Druk 3D i obliczanie objetosci CAD', desc: 'Kazda drukarka 3D musi wiedziec, ile materialu potrzebuje. Przy czesciach symetrycznych obrotowo (wazony, rury, dysze) oprogramowanie Slicer oblicza objetosc dokladnie tym wzorem obrotowym.' },
      render_falloff: { title: 'Zanikanie swiatla w silnikach gier', desc: 'Ile swiatla lacznie otrzymuje scena od zrodla punktowego? Intensywnosc maleje jako $I(r) = I_0 \\cdot e^{-\\alpha r}$. Calka niewlasciwa $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ pokazuje: Calkowita energia jest skonczona!' },
      terrain_volume: { title: 'Generowanie terenu i roboty ziemne', desc: 'Przy projektach drogowych i w grach typu Minecraft oblicza sie objetosc wzgorz. Wzor $V = \\iint h(x,y)\\,\\mathrm{d}A$ sumuje wysokosc na calej powierzchni — calka dwuwymiarowa.' },
    },
    mistakes: {
      rotation_no_square: { wrong: 'Zapomnienie o potegowaniu: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$', correct: 'Poprawnie z kwadratem: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$', why: 'Kazda tarcza kolowa ma pole $\\pi r^2$ z $r = f(x)$. Bez potegowania nie obliczasz pola kola. Zapamietaj: "Pi-r-kwadrat" — kwadrat nalezy do wzoru na kolo!', kai_warning: 'Kiedys na game-jamie zrobilem ten blad — moja kolumna miala tylko ulamek prawidlowej objetosci i zawalila sie w symulacji fizycznej.' },
      improper_no_limit: { wrong: 'Bezposrednie wstawienie $\\infty$ zamiast obliczania granicy', correct: 'Poprawnie sformuluj granice i sprawdz zbieznosc', why: '$\\infty$ nie jest liczba, ktora mozna wstawic! Musisz zawsze obliczyc granice $\\lim_{b \\to \\infty}$ i sprawdzic, czy istnieje. Inaczej latwo przeoczyc, ze calka jest rozbiezna.' },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: 'Swiat 3D "Hafenlichter 3D" nabiera ksztaltu: Dzwigi portowe, fasady budynkow, powierzchnie wody — wszystko sklada sie z trojkatow, a kazdy trojkat lezy w plaszczyznie. "Do realistycznego oswietlenia musze dla kazdej powierzchni obliczyc wektor normalny", wyjasnia Kai.',
      challenge: 'Kai musi budowac rownania plaszczyzn z trzech punktow, obliczac wektory normalne iloczynem wektorowym, znajdowac punkty przeciecia prostych z plaszczyznami i wyznaczac odleglosci miedzy obiektami.',
      outro: 'System detekcji kolizji Kaia dziala bez zarzutu: Pociski trafiaja w sciany, postacie stoja na podlogach, a oswietlenie oblicza dla kazdej powierzchni doskonaly kat padania swiatla przez wektory normalne.',
    },
    objectives: {
      plane_equations: 'Budowac rownania plaszczyzn w postaci parametrycznej, normalnej i wspolrzednej oraz przeliczac miedzy nimi',
      line_plane_intersection: 'Obliczac punkty przeciecia prostych z plaszczyznami i okreslac wzajemne polozenie',
      distances_3d: 'Obliczac odleglosci w przestrzeni: punkt-plaszczyzna, punkt-prosta i prosta-prosta',
      cross_product: 'Opanowac iloczyn wektorowy i stosowac go do obliczania wektorow normalnych',
    },
    explanation: {
      intro: 'Plaszczyzny w przestrzeni trojwymiarowej mozna opisac na rozne sposoby. Postac parametryczna startuje od punktu zaczepienia $\\vec{a}$ i rozpina plaszczyzne dwoma wektorami kierunkowymi $\\vec{u}$ i $\\vec{v}$:',
      normal_form: 'Elegansza jest czesto postac normalna: Wektor $\\vec{n}$ prostopadly do plaszczyzny (wektor normalny) i punkt $\\vec{a}$ w plaszczyznie wystarczaja do opisania calej plaszczyzny. Stad mozna wyprowadzic postac wspolrzedna:',
      kai_tip: 'W moim silniku przechowuje kazda powierzchnie w postaci wspolrzednej — trzy wspolczynniki i stala, to wszystko. Do renderowania potrzebuje wektora normalnego do oswietlenia ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$). A do fizyki potrzebuje punktow przeciecia i odleglosci.',
      cross_product: 'Iloczyn wektorowy $\\vec{u} \\times \\vec{v}$ daje wektor prostopadly do obu wektorow wejsciowych — idealny do obliczania wektora normalnego z dwoch wektorow kierunkowych. Uwaga: Kolejnosc ma znaczenie (antykomutatywnosc)!',
      distance_point_plane: 'Odleglosc punktu $P$ od plaszczyzny $E$ mozna elegancko obliczyc hessowska postacia normalna. Wstawiasz punkt do rownania wspolrzednego, bierzesz wartosc bezwzgledna i dzielisz przez dlugosc wektora normalnego:',
    },
    concepts: {
      plane_equation: { title: 'Rownanie plaszczyzny we wspolrzednych', desc: 'Najzwiezczniejsza reprezentacja plaszczyzny: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. Wspolczynniki $n_1, n_2, n_3$ to skladowe wektora normalnego.' },
      cross_product: { title: 'Iloczyn wektorowy', desc: 'Iloczyn wektorowy dwoch wektorow $\\vec{u}$ i $\\vec{v}$ daje nowy wektor $\\vec{n}$ prostopadly do obu. Jego dlugosc $|\\vec{u} \\times \\vec{v}|$ odpowiada polu rozpieetego rownoleglboku. Wazne: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$.' },
      distance_formula: { title: 'Odleglosc punkt-plaszczyzna', desc: 'Najkrotsza odleglosc punktu $P$ do plaszczyzny to dlugosc pionu z $P$ na plaszczyzne. Wzor $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ oblicza te odleglosc bezposrednio z postaci wspolrzednej.' },
    },
    examples: {
      game_world_plane: { title: 'Plaszczyzna z trzech wierzcholkow', context: 'Kai ma trojkat w swiecie gry z wierzcholkami $A(1|0|2)$, $B(3|1|0)$ i $C(0|4|1)$. Potrzebuje rownania plaszczyzny do oswietlenia i detekcji kolizji.', step1: 'Trzy punkty dane — tworzymy dwa wektory kierunkowe:', step2: 'Obliczamy wektory kierunkowe $\\vec{u} = \\overrightarrow{AB}$ i $\\vec{v} = \\overrightarrow{AC}$:', step3: 'Obliczamy iloczyn wektorowy $\\vec{n} = \\vec{u} \\times \\vec{v}$ szczegolowo:', step4: 'Budujemy postac wspolrzedna — wektor normalny jako wspolczynniki, $d$ przez wstawienie $A$:', kai_comment: 'W silniku dokladnie to dzieje sie dla kazdego trojkata: trzy wierzcholki wchodza, obliczamy iloczyn wektorowy, plaszczyzna zapisana. Wektor normalny okresla jednoczesnie, w ktora strone "patrzy" powierzchnia.' },
      collision_detection: { title: 'Przeciecie prostej z plaszczyzna (Raycast)', context: 'Pocisk leci prosto przez przestrzen. Kai musi sprawdzic, czy i gdzie uderza w sciane — to raycast: punkt przeciecia prostej z plaszczyzna.', step1: 'Prosta (tor lotu) i plaszczyzna (sciana) dane:', step2: 'Wstawiamy prosta do rownania plaszczyzny:', step3: 'Rozwiazujemy wzgledem $t$:', step4: 'Obliczamy punkt przeciecia — wstawiamy $t$ do rownania prostej:', kai_comment: 'W silniku dodatkowo sprawdzam $t > 0$ (kierunek do przodu) i $0 \\leq t \\leq t_{\\max}$ (zasieg). Tak filtrue trafienia za graczem lub poza zasiegiem.' },
    },
    realworld: {
      '3d_rendering': { title: 'Rendering 3D i oswietlenie', desc: 'Kazdy silnik 3D oblicza oswietlenie iloczynem skalarnym wektora normalnego i kierunku swiatla: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. To model oswietlenia Lamberta.' },
      architecture: { title: 'Architektura i oprogramowanie BIM', desc: 'W programach jak AutoCAD lub Revit powierzchnie dachowe, sciany i rampy sa modelowane jako plaszczyzny. Postac wspolrzedna opisuje polozenie w przestrzeni.' },
      gps_navigation: { title: 'GPS i nawigacja dronow', desc: 'Wspolrzedne GPS sa trojwymiarowe. Drony nawiguja wzdluz prostych w przestrzeni 3D i musza rozpoznawac przeszkody modelowane jako plaszczyzny. Odleglosc punkt-plaszczyzna decyduje, czy dron jest zbyt blisko fasady.' },
    },
    mistakes: {
      cross_product_order: { wrong: 'Ignorowanie kolejnosci: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$', correct: 'Antykomutatywnosc: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$', why: 'Iloczyn wektorowy NIE jest przemienny — kolejnosc okresla kierunek wektora wynikowego (regula prawej reki). Zamiana zmienia znak.', kai_warning: 'Ten blad rozpoznaje sie natychmiast: Powierzchnie oswietlone "od wewnatrz", a zewnetrzna strona ciemna. Wystepuje, gdy wektor normalny wskazuje w zla strone.' },
      distance_abs_forgotten: { wrong: 'Zapomnienie wartosci bezwzglednej w liczniku: $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$', correct: 'Z wartoscia bezwzgledna: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$', why: 'Odleglosci sa zawsze dodatnie! Bez wartosci bezwzglednej w liczniku moze wyjsc wartosc ujemna, gdy punkt lezy po "drugiej stronie" plaszczyzny.' },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Przed premiera "Hafenlichter 3D" nadchodzi wielki playtest: 200 testerow gra przez tydzien, a Kai musi podejmowac twarde decyzje. Czy balansowanie jest sprawiedliwe? Czy wskaznik awarii jest akceptowalny?',
      challenge: 'Kai musi zdecydowac, czy obserwowane roznice w playtescie sa statystycznie istotne. Czy bohater A jest naprawde slabszy niz B, czy mial po prostu pecha?',
      outro: 'Playtest jest przeanalizowany: Kai udowodnil statystycznie, ze bohater A jest za slaby ($p = 0{,}028 < 0{,}05$), a wskaznik awarii w nowym buildzie istotnie wzrosl.',
    },
    objectives: {
      null_hypothesis: 'Poprawnie formulowac hipoteze zerowa i alternatywna oraz rozromniac testy jedno- i dwustronne',
      significance_level: 'Rozumiec poziom istotnosci $\\alpha$ i interpretowac go jako prawdopodobienstwo bledu',
      test_decision: 'Wyznaczac obszary odrzucenia i systematycznie podejmowac decyzje testowe',
      error_types: 'Rozromniac blad I i II rodzaju i rozumiec kompromis miedzy $\\alpha$ a $\\beta$',
    },
    explanation: {
      intro: 'Test hipotezy to ustrukturyzowana procedura podejmowania decyzji na podstawie danych. Zaczynasz od przypuszczenia (hipoteza zerowa $H_0$), zbierasz dane i sprawdzasz, czy dane przecza $H_0$:',
      significance: 'Poziom istotnosci $\\alpha$ to maksymalne prawdopodobienstwo blednego odrzucenia $H_0$ (blad I rodzaju). Typowe wartosci to $\\alpha = 0{,}05$ (5%) lub $\\alpha = 0{,}01$ (1%):',
      kai_tip: 'Mysslcie o testach hipotez jak o systemie anti-cheat: $H_0$ oznacza "Gracz NIE oszukuje". $\\alpha = 0{,}05$ znaczy: Tylko w 5% przypadkow banuujemy uczciwego gracza.',
      rejection_region: 'Obszar odrzucenia zawiera wszystkie wyniki testowe na tyle ekstremalne, ze odrzucamy $H_0$:',
      error_types: 'Moga wystapic dwa bledy: Blad I rodzaju ($\\alpha$) — odrzucasz $H_0$, choc jest prawdziwa ("falszywy alarm"). Blad II rodzaju ($\\beta$) — zachowujesz $H_0$, choc $H_1$ jest prawdziwa ("przeoczony efekt"):',
    },
    concepts: {
      hypotheses: { title: 'Hipoteza zerowa i alternatywna', desc: '$H_0$ to zalozenie "status quo", ktore obowiazuje dopoki dane nie przecza. $H_1$ to to, co chcesz wykazac. Wazne: Nigdy nie "udowadniasz" $H_1$ — mozesz jedynie odrzucic lub zachowac $H_0$.' },
      significance_level: { title: 'Poziom istotnosci $\\alpha$', desc: 'Gorna granica prawdopodobienstwa bledu I rodzaju. Przy $\\alpha = 0{,}05$ akceptujesz 5% ryzyka blednego odrzucenia $H_0$. $\\alpha$ ustalasz PRZED testem — nigdy potem!' },
      error_types: { title: 'Blad I i II rodzaju', desc: 'Blad I rodzaju ($\\alpha$): $H_0$ odrzucona, choc prawdziwa — "falszywy alarm". Blad II rodzaju ($\\beta$): $H_0$ zachowana, choc $H_1$ prawdziwa — "przeoczony efekt". Przy stalym $n$: Mniejsze $\\alpha$ oznacza wieksze $\\beta$.' },
    },
    examples: {
      playtest_balance: { title: 'Test balansowania: Czy bohater A jest za slaby?', context: 'W 100 meczach miedzy bohaterem A i B, A wygrywa tylko 40 razy. Kai podejrzewa, ze A jest uposledzony.', step1: 'Hipotezy i poziom istotnosci — lewostronny, bo Kai podejrzewa, ze A jest za slaby:', step2: 'Uklad: $n = 100$ meczy, $X$ = liczba zwycięstw A, rozklad dwumianowy:', step3: 'Prawdopodobienstwo $X \\leq 40$ pod $H_0$ (kumulowany rozklad dwumianowy):', step4: 'Decyzja: $p$-wartosc $0{,}028 < \\alpha = 0{,}05$ — $H_0$ odrzucona. Bohater A jest istotnie za slaby:', kai_comment: 'To byl statystyczny dowod, ktory potrzebowalem dla zespolu balansowania. 40 ze 100 wyglada "prawie ok", ale test pokazuje: Przy sprawiedliwym balansowaniu tak ekstremalny wynik wystapilby tylko w 2{,}8% przypadkow.' },
      crash_rate: { title: 'Sprawdzanie wskaznika awarii po aktualizacji', context: 'Po patchu wskaznik awarii ma wynosic max 2%. W 200 sesjach testowych gra crashuje 8 razy. Czy to za duzo?', step1: 'Hipotezy — prawostronny, bo Kai sprawdza, czy wskaznik jest POWYZEJ 2%:', step2: 'Dane: $n = 200$ sesji, $X = 8$ awarii (obserwowane: $\\hat{p} = 4\\%$):', step3: 'Prawdopodobienstwo $X \\geq 8$ pod $H_0$ — to $p$-wartosc:', step4: 'Decyzja: $p$-wartosc $0{,}042 < \\alpha = 0{,}05$ — wskaznik awarii jest istotnie podwyzszony:', kai_comment: 'Bez testu moze bym powiedzial "8 crashy na 200 sesji, to chyba pasuje". Ale test hipotezy pokazuje: Prawdopodobienstwo zobaczenia tylu awarii przy prawdziwym 2% jest ponizej 5%. Patch musi byc poprawiony.' },
    },
    realworld: {
      ab_testing: { title: 'Testy A/B w aplikacjach i na stronach', desc: 'Za kazdym razem, gdy Netflix zmienia przycisk "Odtwarzaj" lub Spotify testuje nowy widok playlist, wykonywany jest test hipotezy. Wartosc $p$ decyduje, czy roznica jest realna.' },
      quality_assurance: { title: 'Kontrola jakosci w produkcji', desc: 'W fabrykach ciagle testuje sie: Czy wskaznik wadliwosci jest ponizej limitu? Testy hipotez chronia konsumentow.' },
      clinical_trials: { title: 'Badania kliniczne i leki', desc: 'Zanim lek zostanie dopuszczony, musi przejsc test hipotezy: $H_0$ mowi "Lek nie dziala lepiej niz placebo". Tylko gdy $p < \\alpha = 0{,}05$, skutecznosc jest uznana za udowodniona.' },
    },
    mistakes: {
      accept_h0: { wrong: '$H_0$ "udowodniona": $p > \\alpha$ oznacza, ze $H_0$ jest prawdziwa', correct: 'Poprawnie: $p > \\alpha$ oznacza, ze $H_0$ nie moze byc odrzucona', why: 'Test hipotezy nigdy nie moze udowodnic $H_0$ — tylko odrzucic lub zachowac. "Nie odrzucic" oznacza: Dane nie wystarczaja do obalenia $H_0$.' },
      alpha_beta_confused: { wrong: 'Mniejsze $\\alpha$ automatycznie poprawia wszystko', correct: 'Mniejsze $\\alpha$ prowadzi przy stalym $n$ do wiekszego $\\beta$', why: 'Gdy robisz test surowszym (mniejsze $\\alpha$), potrzebujesz bardziej ekstremalnych danych do odrzucenia $H_0$. Tym samym rosnie prawdopodobienstwo przeoczenia rzeczywistego efektu ($\\beta$). Jedyne wyjscie: Wieksza probka $n$.' },
    },
  },
};
