export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'System cząsteczek w "Hafenlichter 3D" wygląda wspaniale — iskry sypią się, mgła faluje, ogień płonie. Ale Kai ma problem z wydajnością: tysiące cząsteczek jednocześnie sprawiają, że GPU zaczyna się pocić. "Muszę obliczyć, jak szybko cząsteczki blakną, żeby w porę usuwać je z pamięci", wyjaśnia Mii. Odpowiedź tkwi w funkcji $e$ i jej odpowiedniku, logarytmie naturalnym — narzędziach do opisu wszystkiego, co rośnie lub zanika wykładniczo.',
      challenge: 'Kai musi matematycznie zamodelować czas życia cząsteczek: Jak szybko blaknie iskra? Kiedy cząsteczka dymu jest już tak przezroczysta, że można ją usunąć? Do tego potrzebuje reguły łańcuchowej dla funkcji $e$, pochodnych $\\ln$ i rozwiązywania równań rozpadu.',
      outro: 'Dzięki złożonym funkcjom $e$ i pochodnym $\\ln$ Kai zbudował sprytny system cząsteczek: każda iskra podąża za precyzyjną krzywą rozpadu, każda cząsteczka dymu zostaje poddana recyklingowi dokładnie wtedy, gdy jej nieprzezroczystość spadnie poniżej progu widoczności. "Reguła łańcuchowa to właściwie mój optymalizator wydajności", uśmiecha się Kai. "GPU dziękuje mi za to 60 zamiast 30 FPS." Mia dodaje: "A najlepsze jest to, że ta sama matematyka opisuje też rozpad promieniotwórczy i krzywe ładowania kondensatorów."',
    },
    objectives: {
      advanced_e_properties: 'Obliczać pochodne złożonych funkcji $e$ za pomocą reguły łańcuchowej: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Opanować pochodną $\\ln(g(x))$ i wykorzystywać ją w badaniu przebiegu funkcji',
      composite_exp_functions: 'Analizować iloczyny wielomianów i funkcji $e$ (ekstrema, punkty przegięcia)',
      differential_equations: 'Rozumieć proste równania różniczkowe typu $f\'(t) = k \\cdot f(t)$ i tworzyć modele rozpadu',
    },
    explanation: {
      intro: 'W klasie 11 poznałeś podstawy $e^x$ i $\\ln(x)$. Teraz zaczyna się na poważnie: obliczamy pochodne złożonych funkcji $e$, analizujemy wykresy z $\\ln$ i rozwiązujemy równania rozpadu. Kluczem jest reguła łańcuchowa — jeśli w wykładniku nie stoi samo $x$, lecz cała funkcja $g(x)$, to pochodna zewnętrzna daje $e^{g(x)}$, a pochodna wewnętrzna $g\'(x)$ dochodzi jako czynnik:',
      ln_derivative: 'Równie elegancko: pochodna $\\ln(g(x))$ z regułą łańcuchową. Logarytm naturalny "odwraca funkcję" — pochodna wewnętrzna stoi w liczniku, a sama funkcja wewnętrzna w mianowniku:',
      kai_tip: 'W moim silniku 3D funkcje $e$ pojawiają się wszędzie: rozpad cząsteczek, gęstość mgły, wyciszanie dźwięku. Trik jest zawsze ten sam — reguła łańcuchowa. Kiedy liczę pochodną $e^{-0{,}5t^2}$ dla rozkładu Gaussa, funkcja wewnętrzna to $g(t) = -0{,}5t^2$, a pochodna wewnętrzna to $g\'(t) = -t$. Podstawiasz i gotowe. Gdy raz opanujesz ten schemat, pójdzie automatycznie!',
      integration: 'Przy całkowaniu proces biegnie w odwrotną stronę. Dla prostych funkcji wykładniczych obowiązuje: czynnik z wykładnika wędruje do mianownika. A słynna reguła $\\frac{1}{x}$ prowadzi prosto do $\\ln$:',
      decay_model: 'Rozpad wykładniczy to NAJWAŻNIEJSZY standardowy model dla procesów, w których tempo zmian jest proporcjonalne do aktualnej wartości: $f\'(t) = -\\lambda \\cdot f(t)$. Rozwiązaniem jest zawsze funkcja $e$ z ujemnym wykładnikiem. Okres połowicznego rozpadu $t_{1/2}$ mówi, po jakim czasie zostaje połowa wartości początkowej:',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Reguła łańcuchowa dla funkcji $e$',
        desc: 'Dla $f(x) = e^{g(x)}$ funkcją zewnętrzną jest $e^u$ (pochodna: $e^u$), a funkcją wewnętrzną $g(x)$. Wynik: funkcja $e$ pozostaje bez zmian, pomnożona przez pochodną wewnętrzną. Przykład: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Pochodna $\\ln(g(x))$',
        desc: 'Reguła łańcuchowa dla logarytmu daje ułamek: pochodna wewnętrzna przez funkcję wewnętrzną. Jest to szczególnie przydatne, gdy $g(x)$ jest wielomianem — np. $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Ważne: dziedzina jest ograniczona warunkiem $g(x) > 0$.',
      },
      exp_integration: {
        title: 'Całkowanie logarytmiczne',
        desc: 'Jeśli funkcja podcałkowa ma postać $\\frac{f\'(x)}{f(x)}$, to funkcja pierwotna to od razu $\\ln|f(x)| + C$. To odwrócenie pochodnej $\\ln$ i jeden z najważniejszych trików całkowania. Przykład: $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Modelowanie rozpadu cząsteczek',
        context: 'W systemie cząsteczek Kaia startuje jednocześnie 5000 iskier. Ich liczba maleje wykładniczo — Kai chce obliczyć tempo rozpadu i okres połowicznego rozpadu.',
        step1: 'Ustal model rozpadu — $N_0 = 5000$ cząsteczek, stała rozpadu $\\lambda = 0{,}03\\,\\text{s}^{-1}$:',
        step2: 'Oblicz pochodną z regułą łańcuchową — funkcja wewnętrzna $g(t) = -0{,}03t$, pochodna wewnętrzna $g\'(t) = -0{,}03$:',
        step3: 'Oblicz tempo początkowe — przy $t = 0$ znika 150 cząsteczek na sekundę:',
        step4: 'Wyznacz okres połowicznego rozpadu — rozwiąż $N(t_{1/2}) = \\frac{N_0}{2}$ za pomocą $\\ln$:',
        kai_comment: 'Po 23 sekundach połowa cząsteczek znika — to znaczy, że mogę wcześniej zwolnić pamięć na następną eksplozję. W silniku ustawiam próg usuwania na $5\\%$ nieprzezroczystości, co daje około $4{,}3 \\cdot t_{1/2} \\approx 100\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Badanie przebiegu funkcji z funkcją $e$',
        context: 'Kai modeluje jasność błysku światła: najpierw rośnie, potem maleje. Krzywa jasności ma postać $f(x) = x^2 \\cdot e^{-x}$ — typowa "funkcja rozbłysku".',
        step1: 'Dana funkcja — iloczyn wielomianu i zanikającej funkcji $e$:',
        step2: 'Pochodna z reguły iloczynu: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — do drugiego czynnika potrzebujemy reguły łańcuchowej:',
        step3: 'Miejsca zerowe pochodnej: $e^{-x} > 0$ zawsze, więc decyduje tylko $x(2-x) = 0$:',
        step4: 'Wyznacz maksimum — oblicz wartość funkcji dla $x = 2$:',
        kai_comment: 'Ta krzywa "najpierw w górę, potem w dół" jest idealna do efektów świetlnych. Przy $x = 0$ wszystko jest ciemne, przy $x = 2$ jasność jest maksymalna, potem następuje łagodne wygaszanie. W moim shaderze używam dokładnie tej funkcji do błysku wystrzału i błysków eksplozji!',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Systemy cząsteczek w silnikach 3D',
        desc: 'Każda iskra, każda smuga dymu, każdy ogień w grze wideo podąża za wykładniczą krzywą rozpadu $N(t) = N_0 \\cdot e^{-\\lambda t}$. Stała rozpadu $\\lambda$ określa, jak szybko cząsteczki blakną. W Unity i Unreal Engine ustawiasz dokładnie ten parametr, gdy konfigurujesz "Lifetime" i "Fade".',
      },
      signal_processing: {
        title: 'Przetwarzanie dźwięku i tłumienie sygnału',
        desc: 'Kiedy w GarageBand albo w programie dla DJ-ów słyszysz efekt pogłosu, dźwięk zanika wykładniczo: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. Funkcja $e$ steruje głośnością, a $\\sin$ drganiem. Również sygnały Bluetooth i zasięg Wi-Fi podlegają temu modelowi — dlatego streaming zaczyna się zacinać, im dalej jesteś od routera.',
      },
      learning_curve: {
        title: 'Krzywa uczenia się i rozwój umiejętności',
        desc: 'Jak szybko uczysz się nowej gry? Krzywa uczenia się $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ opisuje, jak umiejętności na początku szybko rosną, a potem zbliżają się do maksimum. Projektanci gier wykorzystują ten model do projektowania krzywych trudności — i także twój mózg podczas nauki słówek lub ćwiczenia gry na instrumencie podąża dokładnie za tą funkcją.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Zapomniana pochodna wewnętrzna: $(e^{3x})\' = e^{3x}$',
        correct: 'Zastosuj regułę łańcuchową: $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'Gdy tylko w wykładniku stoi coś więcej niż samo $x$, reguła łańcuchowa jest OBOWIĄZKOWA. Funkcja wewnętrzna to tutaj $g(x) = 3x$, a $g\'(x) = 3$. Tego czynnika nie może zabraknąć!',
        kai_warning: 'W moim shaderze liczyłem kiedyś pochodną $e^{-0{,}5t^2}$ i zapomniałem o czynniku $-t$. Wynik: cząsteczki, które nigdy się nie zmieniały — jak zamrożony dym. Od tamtej pory za każdym razem sprawdzam: czy w wykładniku stoi więcej niż $x$? W takim razie reguła łańcuchowa!',
      },
      ln_negative: {
        wrong: 'Zapomniane kreski wartości bezwzględnej: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Poprawnie z wartością bezwzględną: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'Funkcja $\\frac{1}{x}$ jest określona także dla ujemnych wartości $x$, ale $\\ln(x)$ tylko dla $x > 0$. Kreski wartości bezwzględnej zapewniają, że funkcja pierwotna obowiązuje w całej dziedzinie. W całkach oznaczonych z dodatnimi granicami możesz pominąć kreski — w całkach nieoznaczonych nigdy!',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Do "Hafenlichter 3D" Kai buduje proceduralny generator poziomów: mosty, tunele i domy mają powstawać z krzywych matematycznych obracanych wokół osi. "Wyobraźcie sobie, że definiuję profil i każę mu się obracać — i już mam kolumnę, kopułę albo kadłub statku", zachwyca się Kai. Ale jak obliczyć dokładną objętość tych brył 3D? Odpowiedź: objętości brył obrotowych, całkowanie przez części i kilka eleganckich technik całkowania.',
      challenge: 'Kai musi obliczać objętość obiektów 3D, które powstają przez obrót krzywych. Poza tym potrzebuje całkowania przez części do złożonych wzorów oświetlenia i musi sprawdzić, czy pewne całki w ogóle są zbieżne.',
      outro: 'Generator poziomów działa: Kai obraca profile krzywych wokół osi i otrzymuje idealne bryły 3D z dokładnie obliczoną objętością. "Całkowanie przez części było kluczem do całek oświetlenia", opowiada Amirowi, "a całki niewłaściwe pokazują mi, kiedy efekt świetlny ma skończoną energię całkowitą — nawet jeśli teoretycznie sięga nieskończenie daleko." Mia kiwa głową: "Tej samej matematyki używają inżynierowie do wymiarowania zbiorników, a fizycy do obliczania energii fal."',
    },
    objectives: {
      integration_techniques: 'Pewnie stosować całkowanie przez części i przez podstawienie',
      rotation_volumes: 'Obliczać objętości brył obrotowych wokół osi $x$ za pomocą $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Sprawdzać zbieżność całek niewłaściwych i je obliczać',
      partial_integration: 'Celowo stosować metodę całkowania przez części, gdy trzeba scałkować iloczyny',
    },
    explanation: {
      intro: 'W klasie 11 poznałeś całki oznaczone jako pole powierzchni. Teraz dochodzą trzy nowe techniki. Pierwsza to całkowanie przez części — "odwrócenie" reguły iloczynu. Gdy musisz scałkować iloczyn taki jak $x \\cdot e^x$, rozkładasz go na $u$ i $v\'$:',
      substitution: 'Druga technika to całkowanie przez podstawienie — "odwrócenie" reguły łańcuchowej przy pochodnych. Gdy jedna funkcja "siedzi w drugiej", zastępujesz funkcję wewnętrzną nową zmienną:',
      kai_tip: 'Mój trik na całkowanie przez części: "LIATE" — Logarytm, funkcje odwrotne do trygonometrycznych (Inverse Trig), Algebraiczne, Trygonometryczne, Eksponencjalne (wykładnicze). To kolejność, w jakiej wybierasz $u$. Czyli przy $\\int x \\cdot e^x\\,\\mathrm{d}x$ bierzesz $u = x$ (algebraiczne) i $v\' = e^x$ (wykładnicze). Przy $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$ bierzesz $u = \\ln(x)$ i $v\' = x$. Działa prawie zawsze!',
      rotation_volume: 'Teraz robi się trójwymiarowo: gdy obracasz wykres $f(x)$ wokół osi $x$, powstaje bryła obrotowa. Jej objętość obliczasz, wyobrażając sobie, że bryła składa się z nieskończenie wielu cienkich krążków — każdy krążek ma promień $f(x)$:',
      improper: 'Co się dzieje, gdy granica całkowania wynosi $\\infty$? Albo gdy funkcja podcałkowa w jakimś punkcie staje się nieograniczona? Wtedy mówimy o całkach niewłaściwych. Zastępujesz problematyczne miejsce granicą i sprawdzasz, czy wychodzi skończona wartość:',
    },
    concepts: {
      partial_integration: {
        title: 'Całkowanie przez części',
        desc: 'Odwrócenie reguły iloczynu: rozkładasz funkcję podcałkową na $u$ (liczysz pochodną) i $\\mathrm{d}v$ (całkujesz). Cel: nowa całka $\\int v\\,\\mathrm{d}u$ musi być prostsza niż pierwotna. Typowe zastosowanie: iloczyny wielomianu i funkcji $e$ albo wielomianu i funkcji trygonometrycznej.',
      },
      rotation_volume: {
        title: 'Objętość bryły obrotowej',
        desc: 'Wykres funkcji obracający się wokół osi $x$ tworzy bryłę 3D. Objętość wynika z sumy nieskończenie wielu krążków o promieniu $f(x)$ i grubości $\\mathrm{d}x$. Każdy krążek ma objętość $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$ — po zsumowaniu (scałkowaniu) daje to wzór.',
      },
      improper_integral: {
        title: 'Całki niewłaściwe',
        desc: 'Całki z $\\infty$ jako granicą lub z nieograniczoną funkcją podcałkową. Zastępujesz problematyczne miejsce zmienną i obliczasz granicę. Jeśli granica istnieje i jest skończona, całkę nazywamy zbieżną — w przeciwnym razie rozbieżną. Klasyka: $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ jest zbieżna, ale $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ jest rozbieżna.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Bryły obrotowe do projektowania poziomów',
        context: 'Kai chce wygenerować kolumnę, której profil podąża za krzywą $f(x) = \\sqrt{x}$. Między $x = 0$ a $x = 4$ krzywa obraca się wokół osi $x$ — jak duża jest objętość kolumny?',
        step1: 'Zdefiniuj profil — funkcja pierwiastkowa na przedziale $[0;\\,4]$:',
        step2: 'Zastosuj wzór na objętość bryły obrotowej — podnieś $f(x)$ do kwadratu i dopisz $\\pi$ z przodu:',
        step3: 'Wyznacz funkcję pierwotną i podstaw granice:',
        step4: 'Wynik — kolumna ma objętość $8\\pi$ jednostek sześciennych:',
        kai_comment: 'To dokładnie ten wzór, którego używa mój proceduralny generator! Definiuję profile krzywych, obracam je i od razu znam objętość — ważne dla symulacji fizycznych, żeby obiekty miały właściwą masę.',
      },
      partial_int: {
        title: 'Całkowanie przez części w oświetleniu',
        context: 'W shaderze Kaia do obliczania światła pojawia się całka $\\int x \\cdot e^x\\,\\mathrm{d}x$ — iloczyn, którego nie da się scałkować bezpośrednio.',
        step1: 'Wybierz rozkład: $u = x$ (upraszcza się przy liczeniu pochodnej), $v\' = e^x$ (łatwo ją scałkować):',
        step2: 'Wyznacz pochodne i funkcje pierwotne:',
        step3: 'Podstaw do wzoru — nowa całka to już tylko $\\int e^x\\,\\mathrm{d}x$:',
        step4: 'Uprość do końca — wyłączenie przed nawias daje elegancką postać:',
        kai_comment: 'Ten moment, gdy nowa całka jest prostsza od starej — to jest poczucie sukcesu przy całkowaniu przez części. Jeśli robi się bardziej skomplikowanie, źle wybrałeś $u$ i $v\'$. Wtedy po prostu zamień!',
      },
    },
    realworld: {
      '3d_printing': {
        title: 'Druk 3D i obliczanie objętości w CAD',
        desc: 'Każda drukarka 3D musi wiedzieć, ile materiału potrzebuje. Przy częściach obrotowo symetrycznych (wazony, rury, dysze) oprogramowanie typu slicer oblicza objętość dokładnie tym wzorem na bryłę obrotową. Także w programach CAD, takich jak Fusion 360, kryje się rachunek całkowy — gdy obracasz przekrój, program liczy $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Spadek natężenia światła w silnikach gier',
        desc: 'Ile całkowitego światła odbiera scena od punktowego źródła światła? Natężenie maleje zgodnie z $I(r) = I_0 \\cdot e^{-\\alpha r}$. Całka niewłaściwa $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ pokazuje: energia całkowita jest skończona! Dlatego silniki gier mogą symulować światła o ograniczonym zasięgu, nie popełniając błędu fizycznego.',
      },
      terrain_volume: {
        title: 'Generowanie terenu i prace ziemne',
        desc: 'Przy budowie dróg i w grach w stylu Minecrafta trzeba obliczać objętość pagórkowatego terenu. Wzór $V = \\iint h(x,y)\\,\\mathrm{d}A$ sumuje wysokość po całej powierzchni — to całka dwuwymiarowa. Inżynierowie budownictwa obliczają w ten sposób ilość wykopanej ziemi, a twórcy gier ilość danych dla siatek terenu.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Zapomniane podniesienie do kwadratu: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Poprawnie z kwadratem: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Każdy krążek ma pole $\\pi r^2$, gdzie $r = f(x)$. Bez podniesienia do kwadratu nie obliczasz pola koła, lecz coś zupełnie innego. Sposób na zapamiętanie: "pi r kwadrat" — kwadrat należy do wzoru na pole koła!',
        kai_warning: 'Popełniłem kiedyś ten błąd na game jamie — moja kolumna miała tylko ułamek prawidłowej objętości i zawaliła się w symulacji fizycznej. Od tamtej pory zawsze zapisuję sobie wzór dużymi literami na monitorze: $V = \\pi \\int [f(x)]^2$!',
      },
      improper_no_limit: {
        wrong: 'Bezpośrednie podstawienie $\\infty$ zamiast obliczenia granicy',
        correct: 'Poprawnie zapisz granicę i sprawdź zbieżność',
        why: '$\\infty$ to nie liczba, którą można podstawić! Zawsze musisz obliczyć granicę $\\lim_{b \\to \\infty}$ i sprawdzić, czy istnieje. W przeciwnym razie łatwo przeoczyć, że całka jest rozbieżna — jak w przypadku $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, która mimo malejącej funkcji nie ma skończonej wartości.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: 'Świat 3D w "Hafenlichter 3D" nabiera kształtu: dźwigi portowe, fasady budynków, powierzchnie wody — wszystko składa się z trójkątów, a każdy trójkąt leży w jakiejś płaszczyźnie. "Żeby oświetlenie było realistyczne, muszę dla każdej powierzchni obliczyć wektor normalny", wyjaśnia Kai. "A do wykrywania kolizji potrzebuję punktów przecięcia prostych z płaszczyznami." Witaj w geometrii analitycznej przestrzeni — matematyce, która stoi za każdym silnikiem 3D.',
      challenge: 'Kai musi wyznaczać równania płaszczyzn z trzech punktów, obliczać wektory normalne za pomocą iloczynu wektorowego, znajdować punkty przecięcia prostej z płaszczyzną i wyznaczać odległości między obiektami — wszystko w czasie rzeczywistym dla swojego silnika gry.',
      outro: 'System wykrywania kolizji Kaia działa bez zarzutu: pociski trafiają w ściany, postacie stoją na podłogach, a oświetlenie oblicza dla każdej powierzchni idealny kąt padania światła za pomocą wektorów normalnych. "Iloczyn wektorowy to moje najczęściej używane narzędzie", mówi Kai. "Dwa wektory kierunkowe na wejściu, wektor normalny na wyjściu — i już wiem, jak powierzchnia jest ułożona w przestrzeni." Amir dodaje: "A wzór na odległość sprawdza, czy gracz jest wystarczająco blisko obiektu, żeby go podnieść."',
    },
    objectives: {
      plane_equations: 'Wyznaczać równania płaszczyzn w postaci parametrycznej, normalnej i ogólnej oraz przekształcać je jedne w drugie',
      line_plane_intersection: 'Obliczać punkty przecięcia prostych z płaszczyznami i określać ich wzajemne położenie',
      distances_3d: 'Obliczać odległości w przestrzeni: punkt–płaszczyzna, punkt–prosta i prosta–prosta',
      cross_product: 'Opanować iloczyn wektorowy i stosować go do obliczania wektora normalnego',
    },
    explanation: {
      intro: 'Płaszczyzny w przestrzeni trójwymiarowej możesz opisywać na różne sposoby. Postać parametryczna zaczyna się od punktu zaczepienia $\\vec{a}$ i rozpina płaszczyznę dwoma wektorami kierunkowymi $\\vec{u}$ i $\\vec{v}$. Do każdego punktu płaszczyzny można dojść, dobierając odpowiednie wartości $r$ i $s$:',
      normal_form: 'Często bardziej elegancka jest postać normalna: wektor $\\vec{n}$, który jest prostopadły do płaszczyzny (wektor normalny), i punkt $\\vec{a}$ leżący w płaszczyźnie wystarczą, żeby opisać całą płaszczyznę. Z niej można wyprowadzić postać ogólną — jedno równanie z $x_1$, $x_2$ i $x_3$:',
      kai_tip: 'W moim silniku 3D zapisuję każdą powierzchnię w postaci ogólnej — trzy współczynniki i stała, i tyle. Do renderowania potrzebuję wektora normalnego do oświetlenia ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$ — iloczyn skalarny z wektorem światła daje wartość jasności). A do fizyki potrzebuję punktów przecięcia i odległości. Wszystkie trzy postacie są przydatne — każda do innego celu!',
      cross_product: 'Iloczyn wektorowy $\\vec{u} \\times \\vec{v}$ daje wektor prostopadły do obu wektorów wejściowych — idealny, żeby z dwóch wektorów kierunkowych obliczyć wektor normalny. Uwaga: kolejność jest ważna (antykomutatywność)!',
      distance_point_plane: 'Odległość punktu $P$ od płaszczyzny $E$ można elegancko obliczyć za pomocą postaci normalnej Hessego. Podstawiasz punkt do równania ogólnego, bierzesz wartość bezwzględną i dzielisz przez długość wektora normalnego:',
    },
    concepts: {
      plane_equation: {
        title: 'Równanie płaszczyzny w postaci ogólnej',
        desc: 'Najbardziej zwarty zapis płaszczyzny: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. Współczynniki $n_1, n_2, n_3$ to składowe wektora normalnego, a $d$ otrzymujesz, podstawiając znany punkt płaszczyzny. Każdy punkt $(x_1, x_2, x_3)$, który spełnia to równanie, leży w płaszczyźnie.',
      },
      cross_product: {
        title: 'Iloczyn wektorowy',
        desc: 'Iloczyn wektorowy dwóch wektorów $\\vec{u}$ i $\\vec{v}$ daje nowy wektor $\\vec{n}$, prostopadły do obu. Jego długość $|\\vec{u} \\times \\vec{v}|$ odpowiada polu rozpiętego równoległoboku. Ważne: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ — kolejność określa kierunek!',
      },
      distance_formula: {
        title: 'Odległość punktu od płaszczyzny',
        desc: 'Najkrótsza odległość punktu $P$ od płaszczyzny to długość rzutu prostopadłego (odcinka prostopadłego) z $P$ na płaszczyznę. Wzór $d(P,E) = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ oblicza tę odległość bezpośrednio z postaci ogólnej. Wartość bezwzględna w liczniku jest kluczowa — bez niej mogłaby wyjść ujemna "odległość".',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Płaszczyzna z trzech wierzchołków',
        context: 'Kai ma w świecie gry trójkąt o wierzchołkach $A(1|0|2)$, $B(3|1|0)$ i $C(0|4|1)$. Potrzebuje równania płaszczyzny do oświetlenia i wykrywania kolizji.',
        step1: 'Dane są trzy punkty — utwórz z nich dwa wektory kierunkowe:',
        step2: 'Oblicz wektory kierunkowe $\\vec{u} = \\overrightarrow{AB}$ i $\\vec{v} = \\overrightarrow{AC}$:',
        step3: 'Oblicz szczegółowo iloczyn wektorowy $\\vec{n} = \\vec{u} \\times \\vec{v}$ — składowa po składowej według wzoru:',
        step4: 'Zapisz postać ogólną — wektor normalny jako współczynniki, $d$ przez podstawienie $A$: $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$:',
        kai_comment: 'W silniku dzieje się dokładnie to dla każdego trójkąta: trzy wierzchołki na wejściu, obliczenie iloczynu wektorowego, płaszczyzna zapisana. Wektor normalny określa jednocześnie, w którą stronę powierzchnia "patrzy" — kluczowe dla oświetlenia i backface culling!',
      },
      collision_detection: {
        title: 'Przecięcie prostej z płaszczyzną (raycast)',
        context: 'Pocisk leci po linii prostej przez przestrzeń. Kai musi sprawdzić, czy i gdzie trafi w ścianę — to jest raycast: punkt przecięcia prostej z płaszczyzną.',
        step1: 'Dane są prosta (tor lotu) i płaszczyzna (ściana):',
        step2: 'Podstaw prostą do równania płaszczyzny — składowe $\\vec{x}(t)$ w miejsce $x_1, x_2, x_3$:',
        step3: 'Rozwiąż względem $t$ — pogrupuj wyrazy i uprość:',
        step4: 'Oblicz punkt przecięcia — podstaw $t = 0$ do równania prostej:',
        kai_comment: 'Przy $t = 0$ prosta od razu trafia w płaszczyznę — pocisk startuje więc bezpośrednio przy ścianie. W silniku sprawdzam dodatkowo $t > 0$ (kierunek do przodu) i $0 \\leq t \\leq t_{\\max}$ (zasięg). W ten sposób odfiltrowuję trafienia za graczem albo poza zasięgiem.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: 'Renderowanie 3D i oświetlenie',
        desc: 'Każdy silnik 3D oblicza oświetlenie za pomocą iloczynu skalarnego wektora normalnego i kierunku światła: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Im mniejszy kąt między światłem a normalną powierzchni, tym jaśniejsza powierzchnia. To model oświetlenia Lamberta — podstawa realistycznego światła w grach, filmach i aplikacjach AR.',
      },
      architecture: {
        title: 'Architektura i oprogramowanie BIM',
        desc: 'W programach architektonicznych, takich jak AutoCAD czy Revit, połacie dachowe, ściany i rampy modeluje się jako płaszczyzny. Postać ogólna opisuje położenie w przestrzeni, a wektor normalny pokazuje orientację. Konstruktorzy obliczają za pomocą równań płaszczyzn, jak siły działają na pochyłe powierzchnie — od dachu po jezdnię mostu.',
      },
      gps_navigation: {
        title: 'GPS i nawigacja dronów',
        desc: 'Współrzędne GPS są trójwymiarowe (długość, szerokość, wysokość). Drony nawigują wzdłuż prostych w przestrzeni 3D i muszą rozpoznawać przeszkody — modelowane jako płaszczyzny. Odległość punktu od płaszczyzny decyduje, czy dron nie zbliża się za bardzo do fasady domu. Tej samej matematyki używają samochody autonomiczne do analizy danych z LIDAR-u.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Zignorowana kolejność: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Antykomutatywność: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'Iloczyn wektorowy NIE jest przemienny — kolejność określa kierunek wektora wynikowego (reguła prawej dłoni). Zamiana kolejności zmienia znak. Może to sprawić, że wektory normalne wskazują w złą stronę, co odwraca całe oświetlenie.',
        kai_warning: 'Ten błąd widać od razu: powierzchnie oświetlone "od środka", podczas gdy strona zewnętrzna pozostaje ciemna. Zdarza się to, gdy wektor normalny wskazuje w złą stronę. Zawsze trzymaj się konsekwentnie jednej kolejności — $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, nigdy odwrotnie!',
      },
      distance_abs_forgotten: {
        wrong: 'Zapomniana wartość bezwzględna w liczniku: $d(P,E) = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'Z wartością bezwzględną: $d(P,E) = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: 'Odległości są zawsze dodatnie! Bez wartości bezwzględnej w liczniku może wyjść wartość ujemna, jeśli punkt leży po "drugiej stronie" płaszczyzny. Na sprawdzianie oznacza to utratę punktów, a w silniku gry — obiekty, które przelatują przez ściany.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Przed premierą "Hafenlichter 3D" czeka wielki playtest: 200 testerów gra przez tydzień, a Kai musi podjąć trudne decyzje. Czy balans jest uczciwy? Czy wskaźnik awarii jest do przyjęcia? "Przeczucie nie wystarczy", mówi Mia. "Potrzebujesz testu statystycznego, który powie ci, czy zaobserwowany efekt jest prawdziwy — czy to tylko przypadek." Witaj w świecie testów hipotez: matematyki stojącej za decyzjami opartymi na danych.',
      challenge: 'Kai musi zdecydować, czy różnice zaobserwowane w playteście są statystycznie istotne. Czy bohater A naprawdę jest słabszy od bohatera B, czy po prostu miał pecha? Czy nowy wskaźnik awarii naprawdę wzrósł? Do tego potrzebuje hipotez zerowych, poziomów istotności i umiejętności radzenia sobie z rodzajami błędów.',
      outro: 'Playtest jest przeanalizowany: Kai wykazał statystycznie, że bohater A jest za słaby ($p = 0{,}028 < 0{,}05$), a wskaźnik awarii w nowej wersji istotnie wzrósł. "Bez testów hipotez być może zignorowałbym te problemy", przyznaje. Mia dodaje: "Najpiękniejsze jest to, że teraz wiesz dokładnie, jak pewna jest twoja decyzja — poziom istotności określa liczbowo twoje ryzyko pomyłki."',
    },
    objectives: {
      null_hypothesis: 'Poprawnie formułować hipotezę zerową i alternatywną oraz rozróżniać testy jednostronne i dwustronne',
      significance_level: 'Rozumieć poziom istotności $\\alpha$ i interpretować go jako prawdopodobieństwo błędu',
      test_decision: 'Wyznaczać obszary odrzucenia i systematycznie podejmować decyzje testowe',
      error_types: 'Rozróżniać błędy I i II rodzaju oraz rozumieć kompromis między $\\alpha$ a $\\beta$',
    },
    explanation: {
      intro: 'Test hipotezy to uporządkowana procedura podejmowania decyzji na podstawie danych. Zaczynasz od przypuszczenia (hipoteza zerowa $H_0$), zbierasz dane i sprawdzasz, czy dane przemawiają przeciwko $H_0$. Hipoteza alternatywna $H_1$ opisuje to, co właściwie podejrzewasz:',
      significance: 'Poziom istotności $\\alpha$ to maksymalne prawdopodobieństwo, z jakim błędnie odrzucasz $H_0$ (błąd I rodzaju). Typowe wartości to $\\alpha = 0{,}05$ (5%) lub $\\alpha = 0{,}01$ (1%). Im mniejsze $\\alpha$, tym surowszy test — ale tym łatwiej przeoczyć prawdziwe efekty:',
      kai_tip: 'Pomyślcie o testach hipotez jak o systemie anti-cheat: $H_0$ oznacza "Gracz NIE oszukuje". $\\alpha = 0{,}05$ znaczy: tylko w 5% przypadków banuję uczciwego gracza. Chcę, żeby $\\alpha$ było małe, żeby chronić niewinnych — ale jeśli zrobię je za małe, prawdziwi oszuści się prześlizgną. To jest kompromis alfa–beta!',
      rejection_region: 'Obszar odrzucenia zawiera wszystkie wyniki testu, które są tak skrajne, że odrzucamy $H_0$. W teście lewostronnym ($H_1\\colon p < p_0$) obszar odrzucenia leży po lewej stronie — obliczasz największą liczbę $k$, dla której zachodzi $P(X \\leq k) \\leq \\alpha$:',
      error_types: 'Mogą się zdarzyć dwa błędy: błąd I rodzaju ($\\alpha$) — odrzucasz $H_0$, choć jest prawdziwa ("fałszywy alarm"). Błąd II rodzaju ($\\beta$) — zachowujesz $H_0$, choć prawdziwa jest $H_1$ ("przeoczony efekt"). Przy stałej liczebności próby $n$ obowiązuje: gdy zmniejszasz $\\alpha$, $\\beta$ rośnie — i odwrotnie:',
    },
    concepts: {
      hypotheses: {
        title: 'Hipoteza zerowa i alternatywna',
        desc: '$H_0$ to założenie "status quo", które obowiązuje tak długo, aż dane zaczną mu przeczyć. $H_1$ to to, co właściwie chcesz wykazać. Test lewostronny: $H_1\\colon p < p_0$. Test prawostronny: $H_1\\colon p > p_0$. Test dwustronny: $H_1\\colon p \\neq p_0$. Ważne: nigdy nie "udowadnia się" $H_1$ — $H_0$ można tylko odrzucić albo zachować.',
      },
      significance_level: {
        title: 'Poziom istotności $\\alpha$',
        desc: 'Górna granica prawdopodobieństwa błędu I rodzaju. Przy $\\alpha = 0{,}05$ akceptujesz 5% ryzyka, że błędnie odrzucisz $H_0$. Typowe wartości: $0{,}10$ (eksploracyjnie), $0{,}05$ (standard), $0{,}01$ (surowo). $\\alpha$ ustala się PRZED testem — nigdy nie dopasowuje się go po fakcie!',
      },
      error_types: {
        title: 'Błędy I i II rodzaju',
        desc: 'Błąd I rodzaju ($\\alpha$): $H_0$ zostaje odrzucona, choć jest prawdziwa — "fałszywy alarm". Błąd II rodzaju ($\\beta$): $H_0$ zostaje zachowana, choć prawdziwa jest $H_1$ — "przeoczony efekt". Przy stałym $n$ wartości $\\alpha$ i $\\beta$ zmieniają się w przeciwnych kierunkach: mniejsze $\\alpha$ oznacza większe $\\beta$. Rozwiązanie: większa liczebność próby $n$.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Test balansu: czy bohater A jest za słaby?',
        context: 'W 100 meczach między bohaterem A a bohaterem B bohater A wygrywa tylko 40 razy. Kai podejrzewa, że bohater A jest pokrzywdzony. Przy uczciwym balansie powinno zachodzić $p = 0{,}5$.',
        step1: 'Ustal hipotezy i poziom istotności — test lewostronny, bo Kai podejrzewa, że A jest za słaby:',
        step2: 'Schemat doświadczenia: $n = 100$ meczów, $X$ = liczba zwycięstw bohatera A, rozkład dwumianowy:',
        step3: 'Oblicz prawdopodobieństwo $X \\leq 40$ przy założeniu $H_0$ (dystrybuanta rozkładu dwumianowego):',
        step4: 'Decyzja testowa: wartość $p$ $0{,}028 < \\alpha = 0{,}05$ — $H_0$ zostaje odrzucona. Bohater A jest istotnie za słaby:',
        kai_comment: 'To był statystyczny dowód, którego potrzebowałem dla zespołu od balansu. 40 na 100 wygląda "prawie w porządku", ale test pokazuje: przy uczciwym balansie tak skrajny wynik zdarzałby się tylko w 2,8% przypadków. To wystarczy na aktualizację z osłabieniem (nerfem)!',
      },
      crash_rate: {
        title: 'Sprawdzanie wskaźnika awarii po aktualizacji',
        context: 'Po poprawce wskaźnik awarii ma wynosić najwyżej 2%. W 200 sesjach testowych gra zawiesza się 8 razy. Czy to za dużo?',
        step1: 'Sformułuj hipotezy — test prawostronny, bo Kai chce sprawdzić, czy wskaźnik jest POWYŻEJ 2%:',
        step2: 'Dane: $n = 200$ sesji, $X = 8$ awarii (zaobserwowano: $\\hat{p} = 4\\%$):',
        step3: 'Oblicz prawdopodobieństwo $X \\geq 8$ przy założeniu $H_0$ — to jest wartość $p$:',
        step4: 'Decyzja testowa: wartość $p$ $0{,}049 < \\alpha = 0{,}05$ — wskaźnik awarii jest istotnie podwyższony:',
        kai_comment: 'Bez testu może powiedziałbym "8 awarii na 200 sesji, jakoś to będzie". Ale test hipotezy pokazuje: prawdopodobieństwo zobaczenia tylu awarii przy prawdziwym wskaźniku 2% jest mniejsze niż 5%. Poprawkę trzeba jeszcze raz przerobić.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'Testy A/B w aplikacjach i na stronach',
        desc: 'Za każdym razem, gdy Netflix zmienia przycisk "Odtwórz teraz" albo Spotify testuje nowy widok playlisty, przeprowadzany jest test hipotezy. Wersja A kontra wersja B: która ma więcej kliknięć? Wartość $p$ decyduje, czy różnica jest prawdziwa, czy to tylko przypadkowe wahanie. Również TikTok, YouTube i Instagram korzystają z testów A/B — każda funkcja, którą widzisz, przeszła test istotności.',
      },
      quality_assurance: {
        title: 'Kontrola jakości w produkcji',
        desc: 'W fabrykach testuje się nieustannie: czy odsetek braków jest poniżej wartości granicznej? Czy masa zawartości paczki chipsów odpowiada wartości nadrukowanej? Testy hipotez chronią konsumentów — a firmy przed kosztownymi akcjami wycofywania produktów. Za każdą kontrolą wyrywkową kryje się ta sama matematyka, której uczycie się tutaj.',
      },
      clinical_trials: {
        title: 'Badania kliniczne i leki',
        desc: 'Zanim lek zostanie dopuszczony, musi przejść test hipotezy: $H_0$ mówi "Lek nie działa lepiej niż placebo". Tylko gdy wartość $p$ spadnie poniżej $\\alpha = 0{,}05$, skuteczność uważa się za wykazaną. Surowe reguły ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) chronią pacjentów przed nieskutecznymi lekami — ale też przed zbyt pochopnym odrzucaniem skutecznych terapii.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ "udowodniona": $p > \\alpha$ oznacza, że $H_0$ jest prawdziwa',
        correct: 'Poprawne sformułowanie: $p > \\alpha$ oznacza, że $H_0$ nie może zostać odrzucona',
        why: 'Test hipotezy nigdy nie może udowodnić $H_0$ — można ją tylko odrzucić albo zachować. "Nie odrzucić" znaczy: dane nie wystarczają, żeby obalić $H_0$. Może efekt jest za mały, może próba jest za mała. Dlatego mówi się "zachować" albo "nie odrzucić", nigdy "przyjąć" czy "udowodnić".',
        kai_warning: 'To jak domniemanie niewinności w sądzie: "niewinny w świetle dowodów" nie znaczy "na pewno niewinny" — znaczy tylko, że dowody nie wystarczają. Tak samo z $H_0$: jeśli nie potrafię wykazać, że bohater A jest słabszy, to nie znaczy automatycznie, że jest idealnie zbalansowany!',
      },
      alpha_beta_confused: {
        wrong: 'Założenie: mniejsze $\\alpha$ automatycznie wszystko poprawia',
        correct: 'Rzeczywistość: mniejsze $\\alpha$ przy stałym $n$ prowadzi do większego $\\beta$',
        why: 'Gdy robisz test surowszym (mniejsze $\\alpha$), potrzebujesz bardziej skrajnych danych, żeby odrzucić $H_0$. Przez to rośnie prawdopodobieństwo przeoczenia prawdziwego efektu ($\\beta$ rośnie). Jedyne wyjście: większa próba $n$ — dzięki temu możesz utrzymać małe zarówno $\\alpha$, jak i $\\beta$.',
      },
    },
  },
};
