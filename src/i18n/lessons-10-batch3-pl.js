export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia przeglade liste animacji Hafenlichter i marszczy brwi. Animacja oddychania Lumiego wyglada jak robot — sztywna i nienaturalna. Fale w porcie tez sa toporne, a cykl dnia i nocy skacze zamiast plynac. "Wszystko, co sie powtarza, potrzebuje oscylacji", mowi Tim. "Sinus i cosinus — sa do tego stworzone." Mia otwiera kalkulator i zanurza sie w swiecie funkcji okresowych.',
      challenge: 'Animacja oddychania, falowanie i cykl dnia/nocy powinny plynnie oscylowac zamiast szarpac.',
      outro: 'Oddech Lumiego teraz lagodnie unosi sie i opada, fale portowe toca sie rownomiernie do brzegu, a swiatlo plynnie przechodzi od porannej czerwieni do polnocnego bleekitu. "Funkcje sinusoidalne sa wszedzie w naturze", mowi Jule. Mia kiwa glowa: "I teraz sa tez w Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Rozpoznawac funkcje okresowe i odromniac je od nieokresowych',
      amplitude_period: 'Odczytywac amplitude i okres z wykresow i rownan',
      frequency: 'Obliczac czestotliwosc i wyjasnic jej znaczenie',
      modeling: 'Modelowac rzeczywiste zjawiska za pomoca funkcji sinusoidalnych',
    },
    explanation: {
      intro: 'Niektore procesy powtarzaja sie ciagle: bicie serca, plywy, pory roku. W matematyce opisujemy takie oscylacje funkcjami okresowymi. Najwazniejsza z nich to funkcja sinusoidalna:',
      parameters: 'Ogolna funkcja sinusoidalna ma cztery parametry, ktore mozesz rozumiec jak pokretla na mikserze: $A$ steruje wysokoscia oscylacji (amplituda), $b$ wplywa na szybkosc powtarzania (okres), $c$ przesuwa krzywa w lewo lub prawo, a $d$ przesuwa ja w gore lub w dol.',
      mia_tip: 'Do animacji oddychania Lumiego uzywam $A = 3$ pikseli i $T = 4$ sekundy. To znaczy: co 4 sekundy Lumi oddycha raz — wdech i wydech, a klatka piersiowa przesuwa sie o 3 piksele w gore i w dol. Zupelnie naturalnie!',
      graph_reading: 'Aby odczytac funkcje okresowa z wykresu, szukasz wzorca, ktory sie powtarza. Odleglosc miedzy dwoma identycznymi miejscami to okres $T$. Matematycznie okresowosc oznacza:',
      applications: 'Funkcje okresowe to matematyczne narzedzie do wszystkiego, co oscyluje: fale dzwiekowe, prad zmienny, wahadlo, fale swietlne, a nawet orbity planet. Zawsze gdy proces powtarza sie regularnie, za nim kryje sie funkcja sinusoidalna (lub jej pokrewne).',
    },
    concepts: {
      amplitude: {
        title: 'Amplituda',
        desc: 'Amplituda $A$ to maksymalne wychylenie od wartosci sredniej. Mierzy, jak "silna" jest oscylacja. Na wykresie odczytujesz ja jako polowe roznicy miedzy najwyzszym a najnizszym punktem.',
      },
      period: {
        title: 'Okres',
        desc: 'Okres $T$ to dlugosc jednego pelnego cyklu oscylacji. Po czasie $T$ wszystko powtarza sie dokladnie. Im wieksze $b$, tym krotszy okres.',
      },
      frequency: {
        title: 'Czestotliwosc',
        desc: 'Czestotliwosc $f$ podaje, ile oscylacji przypada na jednostke czasu. Jest odwrotnoscia okresu. Jednostka: herc (Hz) = oscylacje na sekunde.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Odczytywanie funkcji sinusoidalnej z wykresu',
        context: 'Mia ma efekt falowy w grze i chce znalezc odpowiednie rownanie.',
        step1: 'Odczytujemy najwyzszy i najnizszy punkt: $y_{\\max} = 3$ i $y_{\\min} = -3$. Amplituda to polowa roznicy — fala wychyla sie o 3 jednostki w gore i w dol.',
        step2: 'Odczytujemy okres: Jeden pelny cykl trwa $4\\pi$ jednostek. Stad obliczamy $b$ ze wzoru $b = \\frac{2\\pi}{T}$ — co daje $0{,}5$.',
        step3: 'Skladamy rownanie: Poniewaz linia srodkowa lezy przy $y = 0$ ($d = 0$) i nie ma przesuniecia fazowego ($c = 0$), funkcja to po prostu:',
        mia_comment: 'Amplituda 3, okres $4\\pi$ — dzieki temu fale portowe kolysza sie ladnie wolno. Dla szybszych fal po prostu zwiekszam $b$!',
      },
      ferris_wheel: {
        title: 'Modelowanie diabelskiego mlyna',
        context: 'Diabelski mlyn o srednicy 60 m obraca sie co 10 minut. Najnizsza gondola jest 5 m nad ziemia.',
        step1: 'Wyznaczamy amplitude: Promien to polowa wysokosci, wiec $A = 30\\,\\text{m}$. Linia srodkowa lezy przy $d = 5 + 30 = 35\\,\\text{m}$ (ziemia + promien).',
        step2: 'Okres to jeden pelny obrot: $T = 10\\,\\text{min}$. Stad $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Uwzgledniamy punkt startowy: Start na dole oznacza przesuniecie sinusa o $-\\frac{\\pi}{2}$ (sinus normalnie startuje w srodku, nie na dole).',
        step4: 'Sprawdzenie: Po 2,5 minuty (cwierc obrotu) gondola powinna byc na sredniej wysokosci. Wstawiamy: $\\sin(0) = 0$, wiec $h = 35\\,\\text{m}$. Zgadza sie!',
        mia_comment: 'Dokladnie tak dziala cykl dnia i nocy w Hafenlichter: sinus z $T = 24$ (jeden dzien gry) i przesuniecie, zeby o polnocy bylo najciemniej.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Bicie twojego serca',
        desc: 'Twoje serce bije okolo 72 razy na minute — to 1,2 uderzen na sekunde. Sygnaly elektryczne serca (EKG) pokazuja krzywa okresowa. Lekarze odczytuja amplitude i czestotliwosc, aby wykrywac problemy sercowe.',
      },
      tides: {
        title: 'Odplyn i przyplyn',
        desc: 'W porcie hamburskim poziom wody waha sie co 12,4 godziny miedzy przyplyn a odplyn. To prawie doskonala funkcja sinusoidalna — spowodowana sila przycigania Ksiezyca.',
      },
      temperature: {
        title: 'Temperatura roczna',
        desc: 'Srednia temperatura w ciagu roku przyblizone odpowiada sinusoidzie: cieplo latem, zimno zima, z okresem 365 dni. Klimatolodzy uzywaja tego modelu jako podstawy do prognoz.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Pomylenie okresu z czestotliwoscia',
        correct: 'Czestotliwosc to odwrotnosc okresu',
        why: 'Jesli okres wynosi $T = 2\\,\\text{s}$, oscylacja powtarza sie co 2 sekundy. Czestotliwosc to wtedy $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — nie $2\\,\\text{Hz}$! Czestotliwosc = "Ile razy na sekunde?", Okres = "Jak dlugo trwa jeden cykl?"',
        mia_warning: 'Ten blad sprawil, ze oddech Lumiego byl dwa razy szybszy — wygladal jakby wlasnie skonczyl sprint!',
      },
      b_value: {
        wrong: 'Zrownanie $b$ z okresem',
        correct: 'Przelicz $b$ i $T$ za pomoca wzoru',
        why: '$b$ to NIE okres, lecz jest zwiazany z nim wzorem $T = \\frac{2\\pi}{b}$. Jesli okres wynosi $4\\pi$, to $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — nie $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter dziala — ale przycina. Mia otwiera monitor wydajnosci i widzi: W niektorych scenach klatkaz spada do 15 FPS. "Gdzie dokladnie robi sie wolno?", pyta Tim. "Nie potrzebuje sredniej z calej sceny, ale dokladne miejsce, gdzie wydajnosc spada." Jule usmiecha sie: "To jest dokladnie pytanie, ktore doprowadzilo do wynalezienia rachunku rozniczkowego — chwilowa predkosc zmian."',
      challenge: 'Znalezc dokladne miejsce, gdzie klatkaz spada — nie tylko srednia.',
      outro: 'Mia znalazla krytyczne miejsce: Dokladnie przy klatce 847 czas renderowania eksploduje, bo tam pojawia sie 200 czastek jednoczesnie. "Bez chwilowej predkosci zmian szukalabym w nieskonczonosc", mowi. Tim kiwa glowa: "Newton zrobilby to samo — tylko bez monitora wydajnosci."',
    },
    objectives: {
      average_rate: 'Obliczac i interpretowac srednia predkosc zmian (nachylenie siecznej)',
      instantaneous_rate: 'Rozumiec chwilowa predkosc zmian jako granice',
      limit_concept: 'Przesledzic przejscie od siecznej do stycznej',
      derivative_notation: 'Znac i stosowac rozne zapisy pochodnej',
    },
    explanation: {
      intro: 'Wyobraz sobie, ze jedziesz rowerem do szkoly. Twoj licznik pokazuje 20 km/h — to twoja chwilowa predkosc. Ale jak ja obliczyc? Jesli mowisz "Przejachalem 10 km w 30 minut", to jest srednia. Chwilowa predkosc w konkretnym punkcie to cos innego — i dokladnie o to chodzi w rachunku rozniczkowym.',
      secant_to_tangent: 'Pomysl jest genialnie prosty: Oblicz srednie nachylenie miedzy dwoma punktami, a potem przesuwaj punkty coraz blizej siebie. W przypadku granicznym — gdy odleglosc zmierza do zera — otrzymujesz nachylenie w jednym punkcie. To jest pochodna:',
      mia_tip: 'Srednia klatkaz przez 10 sekund nic mi nie mowi. Potrzebuje chwilowej wartosci przy klatce 847! Dokladnie jak przy liczniku: nie pokazuje sredniej z calej jazdy, lecz jak szybko jedziesz TERAZ.',
      derivative_meaning: 'Pochodna $f\'(x_0)$ ma jasne znaczenie: Podaje nachylenie stycznej do wykresu w punkcie $x_0$. Jesli $f\'(x_0) > 0$, funkcja tam rosnie. Jesli $f\'(x_0) < 0$, maleje. Jesli $f\'(x_0) = 0$, funkcja ma tam (byc moze) maksimum lub minimum. Istnieja rozne zapisy:',
      geometric_interpretation: 'Geometrycznie dzieje sie nastepujaco: Sieczna przez dwa punkty na wykresie obraca sie, gdy punkty sie zbliaja. W przypadku granicznym sieczna staje sie styczna — prosta, ktora "dotyka" wykresu w dokladnie jednym punkcie. Nachylenie tej stycznej to pochodna.',
    },
    concepts: {
      difference_quotient: {
        title: 'Iloraz roznicowy',
        desc: 'Srednia predkosc zmian miedzy dwoma punktami. Oblicza nachylenie siecznej — prostej, ktora przecina wykres w dwoch punktach.',
      },
      differential_quotient: {
        title: 'Iloraz rozniczkowy (pochodna)',
        desc: 'Chwilowa predkosc zmian w danym punkcie. Powstaje, gdy $h$ w ilorazie roznicowym zmierza do zera. Podaje nachylenie stycznej.',
      },
      derivative_notation: {
        title: 'Zapisy pochodnej',
        desc: 'Sa trzy popularne zapisy: $f\'(x)$ (Lagrange, najczestszy w szkole), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, podkresla charakter ulamkowy) i $\\dot{y}$ (Newton, glownie w fizyce dla pochodnych po czasie).',
      },
    },
    examples: {
      average_speed: {
        title: 'Srednia predkosc',
        context: 'Pilka toczy sie po rampie. Przebyta droga zalezy kwadratowo od czasu.',
        step1: 'Dana jest funkcja drogi od czasu. Po 2 sekundach pilka przebyla 2 m, po 4 sekundach 8 m.',
        step2: 'Srednia predkosc miedzy $t = 2$ i $t = 4$: Dzielimy zmiane drogi przez zmiane czasu. To daje $3\\,\\text{m/s}$ srednio.',
        step3: 'Teraz zmniejszamy przedzial: Miedzy $t = 2$ a $t = 2{,}1$ wychodzi $2{,}05\\,\\text{m/s}$. Im krotszy przedzial, tym blizej chwilowej predkosci przy $t = 2$.',
        mia_comment: 'Dokladnie tak dziala moj monitor wydajnosci: Mierzy klatkaz w coraz krotszych przedzialach, az znajduje dokladne miejsce, gdzie sie zacina.',
      },
      instantaneous_rate: {
        title: 'Obliczanie chwilowej predkosci zmian',
        context: 'Wyznacz pochodna $f(x) = x^2$ w punkcie $x_0 = 3$.',
        step1: 'Wstawiamy $f(x) = x^2$ i $x_0 = 3$ do ilorazu roznicowego. Szukamy: co sie dzieje, gdy $h$ zmierza do 0?',
        step2: 'Obliczamy licznik: $(3+h)^2 = 9 + 6h + h^2$. Minus $f(3) = 9$ daje $6h + h^2$ w liczniku.',
        step3: 'Skracamy przez $h$ (mozemy, bo $h \\neq 0$ w procesie granicznym): Pozostaje $6 + h$.',
        step4: 'Obliczamy granice: Dla $h \\to 0$ wyrazenie $6 + h$ daje $6$. Nachylenie stycznej przy $x = 3$ wynosi wiec dokladnie $6$.',
        mia_comment: 'Styczna przy $x = 3$ ma nachylenie 6. Jesli zrobie to dla kazdego punktu, dostane funkcje pochodna $f\'(x) = 2x$. Przy $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Pasuje!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Fotoradary i predkosc',
        desc: 'Fotoradar nie mierzy twojej chwilowej predkosci, lecz srednia predkosc na krotkim odcinku (odcinkowy pomiar predkosci: na kilku kilometrach). Im krotszy odcinek pomiarowy, tym blizej wartosci chwilowej.',
      },
      stock_trends: {
        title: 'Kursy akcji i trendy',
        desc: 'Gdy akcja "rosnie", analitycy maja na mysli dodatnia pochodna kursu. Nachylenie stycznej do przebiegu kursu pokazuje trend: dodatni = trend wzrostowy, ujemny = trend spadkowy, zero = punkt zwrotny.',
      },
      speedometer: {
        title: 'Predkosciomierz w samochodzie',
        desc: 'Twoj predkosciomierz pokazuje chwilowa predkosc — matematycznie pochodna funkcji drogi po czasie. Urzadzenia GPS obliczaja ja jako granice z bardzo krotkich przedzialow czasowych.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Srednia = wartosc chwilowa',
        correct: 'Rozrozniaj srednia od wartosci chwilowej',
        why: 'Srednia predkosc zmian na przedziale $[1;\\,5]$ NIE jest rowna chwilowej predkosci zmian przy $x = 3$ (srodku). Obowiazuje to tylko dla funkcji liniowych! Przy zakrzywionych wykresach obie wartosci sie roznia.',
        mia_warning: 'Najpierw obliczylam srednia klatkaz i myslalam, ze wszystko jest OK. Ale lokalnie byly ogromne spadki! Srednia ukryla problem.',
      },
      secant_tangent: {
        wrong: 'Nachylenie siecznej = nachylenie stycznej',
        correct: 'Styczna jest przypadkiem granicznym siecznej',
        why: 'Sieczna przecina wykres w dwoch punktach, styczna dotyka go w jednym. Dopiero gdy dwa punkty sie zbliaza ($h \\to 0$), sieczna staje sie styczna. Bez granicy to tylko przyblizenie.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter potrzebuje systemu balansowania: Jak szybko Lumi powinien zdobywac poziomy? Jak silni staja sie przeciwnicy? Ile kosztuje ulepszenie? "Jesli wszystko rosnie liniowo, gra bedzie nudna", mowi Jule. Tim dodaje: "A jesli wszystko rosnie wykladniczo, bedzie niesprawiedliwa." Mia uswiadamia sobie: Musi znac rozne typy wzrostu i celowo je stosowac.',
      challenge: 'Znalezc odpowiednie krzywe wzrostu do balansowania gier — liniowe, kwadratowe, wykladnicze lub logarytmiczne.',
      outro: 'System balansowania Mii jest gotowy: Predkosc biegu rosnie liniowo, obrazenia od upadku kwadratowo, wymagania XP wykladniczo, a krzywa uczenia sie logarytmicznie. "Kazda krzywa ma swoje miejsce", mowi z zadowoleniem. Gra czuje sie teraz sprawiedliwa i ekscytujaca — od poziomu 1 do koncowego bossa.',
    },
    objectives: {
      identify_types: 'Rozpoznawac cztery glowne klasy funkcji (liniowe, kwadratowe, wykladnicze, logarytmiczne) po rownaniach i wykresach',
      compare_growth: 'Porownywac zachowanie wzrostowe klas funkcji i je uporzadkowac',
      match_context: 'Dobierac odpowiednia klase funkcji do sytuacji i uzasadniac wybor',
      graph_recognition: 'Przypisywac wykresy do wlasciwych typow funkcji',
    },
    explanation: {
      intro: 'W matematyce istnieja rozne "rodziny" funkcji — kazda o wlasnym charakterze. Jedne rosna rownomiernie, inne coraz szybciej, jeszcze inne coraz wolniej. Cztery najwazniejsze klasy dla klasy 10 to:',
      mia_tip: 'W projektowaniu gier uzywam kazdej klasy funkcji do czegos innego: Wzrost liniowy do przewidywalnych rzeczy (predkosc biegu), kwadratowy do rzeczy, ktore sie "nakreecaja" (obrazenia od upadku), wykladniczy do wyzwan (wymagania XP) i logarytmiczny do efektow uczenia sie (postep umiejetnosci).',
      growth_comparison: 'Kluczowe jest: Jak szybko rosnie kazda klasa funkcji dla duzych wartosci $x$? Kolejnosc jest zawsze taka sama — niezaleznie od konkretnych liczb:',
      choosing_functions: 'Wybor wlasciwej funkcji do problemu to kluczowa kompetencja. Zadaj sobie pytanie: Czy zmiana jest stala (liniowa)? Czy przyspieza rownomiernie (kwadratowa)? Czy wartosc podwaja sie w rownych odstepach (wykladnicza)? Czy przyrost staje sie coraz mniejszy (logarytmiczna)?',
    },
    concepts: {
      linear: {
        title: 'Funkcje liniowe',
        desc: 'Stala predkosc zmian: W kazdym kroku dodaje sie tyle samo. Wykres to prosta. Nachylenie $m$ i punkt przeciecia z osia y $b$ mozna odczytac bezposrednio.',
      },
      quadratic: {
        title: 'Funkcje kwadratowe',
        desc: 'Sama predkosc zmian zmienia sie liniowo — przybywa coraz szybciej wiecej (lub mniej). Wykres to parabola z wierzcholkiem.',
      },
      exponential: {
        title: 'Funkcje wykladnicze',
        desc: 'Wzrost o staly procent: Im wiecej jest, tym wiecej przybywa. Podwojenie w rownych odstepach czasu. Dlugoterminowo rosnie szybciej niz kazda funkcja potegowa.',
      },
      logarithmic: {
        title: 'Funkcje logarytmiczne',
        desc: 'Funkcja odwrotna do wykladniczej. Na poczatku rosnie szybko, potem coraz wolniej. Modeluje efekty nasycenia i krzywe uczenia sie.',
      },
    },
    examples: {
      identify_type: {
        title: 'Rozpoznawanie typu funkcji po tabeli wartosci',
        context: 'Sa trzy zestawy danych. Jaki typ pasuje do kazdego?',
        step1: 'Testuj liniowy: Oblicz roznice kolejnych wartosci $y$. Jesli sa stale, funkcja jest liniowa.',
        step2: 'Testuj wykladniczy: Oblicz ilorazy kolejnych wartosci $y$. Jesli sa stale, funkcja jest wykladnicza.',
        step3: 'Testuj kwadratowy: Oblicz drugie roznice (roznice roznic). Jesli sa stale, funkcja jest kwadratowa.',
        mia_comment: 'Dokladnie tak testuje balansowanie: Symuluje 100 rund i sprawdzam, czy wartosci odpowiadaja zadanemu typowi wzrostu. Jesli drugie roznice odbiegaja, cos jest nie tak.',
      },
      game_mechanics: {
        title: 'Modelowanie mechanik gry',
        context: 'Cztery rozne mechaniki w Hafenlichter potrzebuja roznych funkcji.',
        step1: 'Predkosc biegu: Rosnie o ta sama wartosc na poziom ($+5$ na poziom). To stala zmiana — wiec liniowa. Sprawiedliwe i przewidywalne.',
        step2: 'Obrazenia od upadku: Z 2 m niewielkie obrazenia, z 10 m duzo wiecej. Wzrost obrazen przyspiesza — kwadratowo. Fizycznie sensowne (energia = $\\frac{1}{2}mv^2$).',
        step3: 'Wymagania XP na poziom: Poziom 2 wymaga 150 XP, poziom 3 wymaga 225 XP, poziom 4 wymaga 337 XP. Wymagania rosna zawsze o 50% — wykladniczo. Dzieki temu wyzsze poziomy sa prawdziwym wyzwaniem.',
        step4: 'Krzywa uczenia sie (umiejetnosc): Na poczatku uczysz sie szybko, potem coraz wolniej. Po $t$ godzinach gry opanowujesz $20 \\cdot \\log_2(t+1)$ procent mechanik — logarytmicznie.',
        mia_comment: 'To sedno projektowania gier: Odpowiednia krzywa do odpowiedniej mechaniki. Liniowe XP bylyby nudne, wykladnicze obrazenia od upadku bylyby niesprawiedliwe. Kazdy typ funkcji ma swoj sweet spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Wirusowe pobrania aplikacji',
        desc: 'Kiedy kazdy uzytkownik zaprasza dwoch znajomych, a ci znow dwoch, liczba pobran podwaja sie. Na poczatku prawie niezauwazone, potem eksplozja — typowo wykladnicze. TikTok, Instagram i WhatsApp tak wlasnie rosly.',
      },
      salary: {
        title: 'Kieszonkowe i wynagrodzenie',
        desc: 'Twoje kieszonkowe rosnie (miejmy nadzieje) co roku o te sama kwote — wzrost liniowy. Pozniej w pracy wynagrodzenie czesto rosnie podobnie: stala kwota za kazdy rok doswiadczenia.',
      },
      learning_curve: {
        title: 'Postep w nauce',
        desc: 'Nowy instrument, nowy sport, nowy jezyk: Na poczatku robisz ogromne postepy, potem coraz trudniej jest sie poprawic. To logarytmiczna krzywa nasycenia — i jest to zupelnie normalne!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Wykladniczy" i "kwadratowy" to to samo',
        correct: 'Wykladniczy rosnie O WIELE szybciej niz kwadratowy',
        why: 'Przy malych liczbach $x^2$ i $2^x$ wygladaja podobnie: $4^2 = 16$ i $2^4 = 16$. Ale przy $x = 10$: $10^2 = 100$ wobec $2^{10} = 1024$. Wzrost wykladniczy wyprzedza kazda funkcje potegowa!',
        mia_warning: 'Poczatkowo ustalilam wymagania XP kwadratowo zamiast wykladniczo. Efekt: Od poziomu 20 gra byla zbyt latwa, bo gracze zbierali XP szybciej niz rosly wymagania.',
      },
      all_curves_linear: {
        wrong: 'Kazdy wzrost jest liniowy',
        correct: 'Najpierw sprawdz typ wzrostu',
        why: 'Tylko dlatego, ze cos sie "podwaja", nie oznacza, ze jest liniowe! "Co 3 dni dwa razy wiecej obserwujacych" to wzrost wykladniczy, nie liniowy. Liniowy byloby: "Codziennie 100 nowych obserwujacych". Roznica: staly przyrost (liniowy) vs. staly wspolczynnik (wykladniczy).',
      },
    },
  },
};
