export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia przegląda listę animacji Hafenlichter i marszczy brwi. Animacja oddychania Lumiego wygląda jak robot — sztywna i nienaturalna. Fale w porcie też są toporne, a cykl dnia i nocy skacze zamiast płynąć. "Wszystko, co się powtarza, potrzebuje oscylacji", mówi Tim. "Sinus i cosinus — są do tego stworzone." Mia otwiera kalkulator i zanurza się w świecie funkcji okresowych.',
      challenge: 'Animacja oddychania, falowanie i cykl dnia/nocy powinny płynnie oscylować zamiast szarpać.',
      outro: 'Oddech Lumiego teraz łagodnie unosi się i opada, fale portowe toczą się równomiernie do brzegu, a światło płynnie przechodzi od porannej czerwieni do północnego błękitu. "Funkcje sinusoidalne są wszędzie w naturze", mówi Jule. Mia kiwa głową: "I teraz są też w Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Rozpoznawać funkcje okresowe i odróżniać je od nieokresowych',
      amplitude_period: 'Odczytywać amplitudę i okres z wykresów i równań',
      frequency: 'Obliczać częstotliwość i wyjaśnić jej znaczenie',
      modeling: 'Modelować rzeczywiste zjawiska za pomocą funkcji sinusoidalnych',
    },
    explanation: {
      intro: 'Niektóre procesy powtarzają się ciągle: bicie serca, pływy, pory roku. W matematyce opisujemy takie oscylacje funkcjami okresowymi. Najważniejsza z nich to funkcja sinusoidalna:',
      parameters: 'Ogólna funkcja sinusoidalna ma cztery parametry, które możesz rozumieć jak pokrętła na mikserze: $A$ steruje wysokością oscylacji (amplituda), $b$ wpływa na szybkość powtarzania (okres), $c$ przesuwa krzywą w lewo lub prawo, a $d$ przesuwa ją w górę lub w dół.',
      mia_tip: 'Do animacji oddychania Lumiego używam $A = 3$ pikseli i $T = 4$ sekundy. To znaczy: co 4 sekundy Lumi oddycha raz — wdech i wydech, a klatka piersiowa przesuwa się o 3 piksele w górę i w dół. Zupełnie naturalnie!',
      graph_reading: 'Aby odczytać funkcję okresową z wykresu, szukasz wzorca, który się powtarza. Odległość między dwoma identycznymi miejscami to okres $T$. Matematycznie okresowość oznacza:',
      applications: 'Funkcje okresowe to matematyczne narzędzie do wszystkiego, co oscyluje: fale dźwiękowe, prąd zmienny, wahadło, fale świetlne, a nawet orbity planet. Zawsze gdy proces powtarza się regularnie, za nim kryje się funkcja sinusoidalna (lub jej pokrewne).',
    },
    concepts: {
      amplitude: {
        title: 'Amplituda',
        desc: 'Amplituda $A$ to maksymalne wychylenie od wartości średniej. Mierzy, jak "silna" jest oscylacja. Na wykresie odczytujesz ją jako połowę różnicy między najwyższym a najniższym punktem.',
      },
      period: {
        title: 'Okres',
        desc: 'Okres $T$ to długość jednego pełnego cyklu oscylacji. Po czasie $T$ wszystko powtarza się dokładnie. Im większe $b$, tym krótszy okres.',
      },
      frequency: {
        title: 'Częstotliwość',
        desc: 'Częstotliwość $f$ podaje, ile oscylacji przypada na jednostkę czasu. Jest odwrotnością okresu. Jednostka: herc (Hz) = oscylacje na sekundę.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Odczytywanie funkcji sinusoidalnej z wykresu',
        context: 'Mia ma efekt falowy w grze i chce znaleźć odpowiednie równanie.',
        step1: 'Odczytujemy najwyższy i najniższy punkt: $y_{\\max} = 3$ i $y_{\\min} = -3$. Amplituda to połowa różnicy — fala wychyla się o 3 jednostki w górę i w dół.',
        step2: 'Odczytujemy okres: Jeden pełny cykl trwa $4\\pi$ jednostek. Stąd obliczamy $b$ ze wzoru $b = \\frac{2\\pi}{T}$ — co daje $0{,}5$.',
        step3: 'Składamy równanie: Ponieważ linia środkowa leży przy $y = 0$ ($d = 0$) i nie ma przesunięcia fazowego ($c = 0$), funkcja to po prostu:',
        mia_comment: 'Amplituda 3, okres $4\\pi$ — dzięki temu fale portowe kołyszą się ładnie wolno. Dla szybszych fal po prostu zwiększam $b$!',
      },
      ferris_wheel: {
        title: 'Modelowanie diabelskiego młyna',
        context: 'Diabelski młyn o średnicy 60 m obraca się co 10 minut. Najniższa gondola jest 5 m nad ziemią.',
        step1: 'Wyznaczamy amplitudę: Promień to połowa wysokości, więc $A = 30\\,\\text{m}$. Linia środkowa leży przy $d = 5 + 30 = 35\\,\\text{m}$ (ziemia + promień).',
        step2: 'Okres to jeden pełny obrót: $T = 10\\,\\text{min}$. Stąd $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Uwzględniamy punkt startowy: Start na dole oznacza przesunięcie sinusa o $-\\frac{\\pi}{2}$ (sinus normalnie startuje w środku, nie na dole).',
        step4: 'Sprawdzenie: Po 2,5 minuty (ćwierć obrotu) gondola powinna być na średniej wysokości. Wstawiamy: $\\sin(0) = 0$, więc $h = 35\\,\\text{m}$. Zgadza się!',
        mia_comment: 'Dokładnie tak działa cykl dnia i nocy w Hafenlichter: sinus z $T = 24$ (jeden dzień gry) i przesunięcie, żeby o północy było najciemniej.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Bicie twojego serca',
        desc: 'Twoje serce bije około 72 razy na minutę — to 1,2 uderzeń na sekundę. Sygnały elektryczne serca (EKG) pokazują krzywą okresową. Lekarze odczytują amplitudę i częstotliwość, aby wykrywać problemy sercowe.',
      },
      tides: {
        title: 'Odpływ i przypływ',
        desc: 'W porcie hamburskim poziom wody waha się co 12,4 godziny między przypływem a odpływem. To prawie doskonała funkcja sinusoidalna — spowodowana siłą przyciągania Księżyca.',
      },
      temperature: {
        title: 'Temperatura roczna',
        desc: 'Średnia temperatura w ciągu roku w przybliżeniu odpowiada sinusoidzie: ciepło latem, zimno zimą, z okresem 365 dni. Klimatolodzy używają tego modelu jako podstawy do prognoz.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Pomylenie okresu z częstotliwością',
        correct: 'Częstotliwość to odwrotność okresu',
        why: 'Jeśli okres wynosi $T = 2\\,\\text{s}$, oscylacja powtarza się co 2 sekundy. Częstotliwość to wtedy $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — nie $2\\,\\text{Hz}$! Częstotliwość = "Ile razy na sekundę?", Okres = "Jak długo trwa jeden cykl?"',
        mia_warning: 'Ten błąd sprawił, że oddech Lumiego był dwa razy szybszy — wyglądał, jakby właśnie skończył sprint!',
      },
      b_value: {
        wrong: 'Zrównanie $b$ z okresem',
        correct: 'Przelicz $b$ i $T$ za pomocą wzoru',
        why: '$b$ to NIE okres, lecz jest związany z nim wzorem $T = \\frac{2\\pi}{b}$. Jeśli okres wynosi $4\\pi$, to $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — nie $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter działa — ale przycina. Mia otwiera monitor wydajności i widzi: W niektórych scenach klatkaż spada do 15 FPS. "Gdzie dokładnie robi się wolno?", pyta Tim. "Nie potrzebuję średniej z całej sceny, ale dokładne miejsce, gdzie wydajność spada." Jule uśmiecha się: "To jest dokładnie pytanie, które doprowadziło do wynalezienia rachunku różniczkowego — chwilowa prędkość zmian."',
      challenge: 'Znaleźć dokładne miejsce, gdzie klatkaż spada — nie tylko średnią.',
      outro: 'Mia znalazła krytyczne miejsce: Dokładnie przy klatce 847 czas renderowania eksploduje, bo tam pojawia się 200 cząstek jednocześnie. "Bez chwilowej prędkości zmian szukałabym w nieskończoność", mówi. Tim kiwa głową: "Newton zrobiłby to samo — tylko bez monitora wydajności."',
    },
    objectives: {
      average_rate: 'Obliczać i interpretować średnią prędkość zmian (nachylenie siecznej)',
      instantaneous_rate: 'Rozumieć chwilową prędkość zmian jako granicę',
      limit_concept: 'Prześledzić przejście od siecznej do stycznej',
      derivative_notation: 'Znać i stosować różne zapisy pochodnej',
    },
    explanation: {
      intro: 'Wyobraź sobie, że jedziesz rowerem do szkoły. Twój licznik pokazuje 20 km/h — to twoja chwilowa prędkość. Ale jak ją obliczyć? Jeśli mówisz "Przejechałem 10 km w 30 minut", to jest średnia. Chwilowa prędkość w konkretnym punkcie to coś innego — i dokładnie o to chodzi w rachunku różniczkowym.',
      secant_to_tangent: 'Pomysł jest genialnie prosty: Oblicz średnie nachylenie między dwoma punktami, a potem przesuwaj punkty coraz bliżej siebie. W przypadku granicznym — gdy odległość zmierza do zera — otrzymujesz nachylenie w jednym punkcie. To jest pochodna:',
      mia_tip: 'Średni klatkaż przez 10 sekund nic mi nie mówi. Potrzebuję chwilowej wartości przy klatce 847! Dokładnie jak przy liczniku: nie pokazuje średniej z całej jazdy, lecz jak szybko jedziesz TERAZ.',
      derivative_meaning: 'Pochodna $f\'(x_0)$ ma jasne znaczenie: Podaje nachylenie stycznej do wykresu w punkcie $x_0$. Jeśli $f\'(x_0) > 0$, funkcja tam rośnie. Jeśli $f\'(x_0) < 0$, maleje. Jeśli $f\'(x_0) = 0$, funkcja ma tam (być może) maksimum lub minimum. Istnieją różne zapisy:',
      geometric_interpretation: 'Geometrycznie dzieje się następująco: Sieczna przez dwa punkty na wykresie obraca się, gdy punkty się zbliżają. W przypadku granicznym sieczna staje się styczną — prostą, która "dotyka" wykresu w dokładnie jednym punkcie. Nachylenie tej stycznej to pochodna.',
    },
    concepts: {
      difference_quotient: {
        title: 'Iloraz różnicowy',
        desc: 'Średnia prędkość zmian między dwoma punktami. Oblicza nachylenie siecznej — prostej, która przecina wykres w dwóch punktach.',
      },
      differential_quotient: {
        title: 'Iloraz różniczkowy (pochodna)',
        desc: 'Chwilowa prędkość zmian w danym punkcie. Powstaje, gdy $h$ w ilorazie różnicowym zmierza do zera. Podaje nachylenie stycznej.',
      },
      derivative_notation: {
        title: 'Zapisy pochodnej',
        desc: 'Są trzy popularne zapisy: $f\'(x)$ (Lagrange, najczęstszy w szkole), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, podkreśla charakter ułamkowy) i $\\dot{y}$ (Newton, głównie w fizyce dla pochodnych po czasie).',
      },
    },
    examples: {
      average_speed: {
        title: 'Średnia prędkość',
        context: 'Piłka toczy się po rampie. Przebyta droga zależy kwadratowo od czasu.',
        step1: 'Dana jest funkcja drogi od czasu. Po 2 sekundach piłka przebyła 2 m, po 4 sekundach 8 m.',
        step2: 'Średnia prędkość między $t = 2$ i $t = 4$: Dzielimy zmianę drogi przez zmianę czasu. To daje $3\\,\\text{m/s}$ średnio.',
        step3: 'Teraz zmniejszamy przedział: Między $t = 2$ a $t = 2{,}1$ wychodzi $2{,}05\\,\\text{m/s}$. Im krótszy przedział, tym bliżej chwilowej prędkości przy $t = 2$.',
        mia_comment: 'Dokładnie tak działa mój monitor wydajności: Mierzy klatkaż w coraz krótszych przedziałach, aż znajduje dokładne miejsce, gdzie się zacina.',
      },
      instantaneous_rate: {
        title: 'Obliczanie chwilowej prędkości zmian',
        context: 'Wyznacz pochodną $f(x) = x^2$ w punkcie $x_0 = 3$.',
        step1: 'Wstawiamy $f(x) = x^2$ i $x_0 = 3$ do ilorazu różnicowego. Szukamy: co się dzieje, gdy $h$ zmierza do 0?',
        step2: 'Obliczamy licznik: $(3+h)^2 = 9 + 6h + h^2$. Minus $f(3) = 9$ daje $6h + h^2$ w liczniku.',
        step3: 'Skracamy przez $h$ (możemy, bo $h \\neq 0$ w procesie granicznym): Pozostaje $6 + h$.',
        step4: 'Obliczamy granicę: Dla $h \\to 0$ wyrażenie $6 + h$ daje $6$. Nachylenie stycznej przy $x = 3$ wynosi więc dokładnie $6$.',
        mia_comment: 'Styczna przy $x = 3$ ma nachylenie 6. Jeśli zrobię to dla każdego punktu, dostanę funkcję pochodną $f\'(x) = 2x$. Przy $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Pasuje!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Fotoradary i prędkość',
        desc: 'Fotoradar nie mierzy twojej chwilowej prędkości, lecz średnią prędkość na krótkim odcinku (odcinkowy pomiar prędkości: na kilku kilometrach). Im krótszy odcinek pomiarowy, tym bliżej wartości chwilowej.',
      },
      stock_trends: {
        title: 'Kursy akcji i trendy',
        desc: 'Gdy akcja "rośnie", analitycy mają na myśli dodatnią pochodną kursu. Nachylenie stycznej do przebiegu kursu pokazuje trend: dodatni = trend wzrostowy, ujemny = trend spadkowy, zero = punkt zwrotny.',
      },
      speedometer: {
        title: 'Prędkościomierz w samochodzie',
        desc: 'Twój prędkościomierz pokazuje chwilową prędkość — matematycznie pochodną funkcji drogi po czasie. Urządzenia GPS obliczają ją jako granicę z bardzo krótkich przedziałów czasowych.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Średnia = wartość chwilowa',
        correct: 'Rozróżniaj średnią od wartości chwilowej',
        why: 'Średnia prędkość zmian na przedziale $[1;\\,5]$ NIE jest równa chwilowej prędkości zmian przy $x = 3$ (środku). Obowiązuje to tylko dla funkcji liniowych! Przy zakrzywionych wykresach obie wartości się różnią.',
        mia_warning: 'Najpierw obliczyłam średni klatkaż i myślałam, że wszystko jest OK. Ale lokalnie były ogromne spadki! Średnia ukryła problem.',
      },
      secant_tangent: {
        wrong: 'Nachylenie siecznej = nachylenie stycznej',
        correct: 'Styczna jest przypadkiem granicznym siecznej',
        why: 'Sieczna przecina wykres w dwóch punktach, styczna dotyka go w jednym. Dopiero gdy dwa punkty się zbliżą ($h \\to 0$), sieczna staje się styczną. Bez granicy to tylko przybliżenie.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter potrzebuje systemu balansowania: Jak szybko Lumi powinien zdobywać poziomy? Jak silni stają się przeciwnicy? Ile kosztuje ulepszenie? "Jeśli wszystko rośnie liniowo, gra będzie nudna", mówi Jule. Tim dodaje: "A jeśli wszystko rośnie wykładniczo, będzie niesprawiedliwa." Mia uświadamia sobie: Musi znać różne typy wzrostu i celowo je stosować.',
      challenge: 'Znaleźć odpowiednie krzywe wzrostu do balansowania gier — liniowe, kwadratowe, wykładnicze lub logarytmiczne.',
      outro: 'System balansowania Mii jest gotowy: Prędkość biegu rośnie liniowo, obrażenia od upadku kwadratowo, wymagania XP wykładniczo, a krzywa uczenia się logarytmicznie. "Każda krzywa ma swoje miejsce", mówi z zadowoleniem. Gra jest teraz sprawiedliwa i ekscytująca — od poziomu 1 do końcowego bossa.',
    },
    objectives: {
      identify_types: 'Rozpoznawać cztery główne klasy funkcji (liniowe, kwadratowe, wykładnicze, logarytmiczne) po równaniach i wykresach',
      compare_growth: 'Porównywać zachowanie wzrostowe klas funkcji i je uporządkować',
      match_context: 'Dobierać odpowiednią klasę funkcji do sytuacji i uzasadniać wybór',
      graph_recognition: 'Przypisywać wykresy do właściwych typów funkcji',
    },
    explanation: {
      intro: 'W matematyce istnieją różne "rodziny" funkcji — każda o własnym charakterze. Jedne rosną równomiernie, inne coraz szybciej, jeszcze inne coraz wolniej. Cztery najważniejsze klasy dla klasy 10 to:',
      mia_tip: 'W projektowaniu gier używam każdej klasy funkcji do czegoś innego: Wzrost liniowy do przewidywalnych rzeczy (prędkość biegu), kwadratowy do rzeczy, które się "nakręcają" (obrażenia od upadku), wykładniczy do wyzwań (wymagania XP) i logarytmiczny do efektów uczenia się (postęp umiejętności).',
      growth_comparison: 'Kluczowe jest: Jak szybko rośnie każda klasa funkcji dla dużych wartości $x$? Kolejność jest zawsze taka sama — niezależnie od konkretnych liczb:',
      choosing_functions: 'Wybór właściwej funkcji do problemu to kluczowa kompetencja. Zadaj sobie pytanie: Czy zmiana jest stała (liniowa)? Czy przyspiesza równomiernie (kwadratowa)? Czy wartość podwaja się w równych odstępach (wykładnicza)? Czy przyrost staje się coraz mniejszy (logarytmiczna)?',
    },
    concepts: {
      linear: {
        title: 'Funkcje liniowe',
        desc: 'Stała prędkość zmian: W każdym kroku dodaje się tyle samo. Wykres to prosta. Nachylenie $m$ i punkt przecięcia z osią y $b$ można odczytać bezpośrednio.',
      },
      quadratic: {
        title: 'Funkcje kwadratowe',
        desc: 'Sama prędkość zmian zmienia się liniowo — przybywa coraz szybciej więcej (lub mniej). Wykres to parabola z wierzchołkiem.',
      },
      exponential: {
        title: 'Funkcje wykładnicze',
        desc: 'Wzrost o stały procent: Im więcej jest, tym więcej przybywa. Podwojenie w równych odstępach czasu. Długoterminowo rośnie szybciej niż każda funkcja potęgowa.',
      },
      logarithmic: {
        title: 'Funkcje logarytmiczne',
        desc: 'Funkcja odwrotna do wykładniczej. Na początku rośnie szybko, potem coraz wolniej. Modeluje efekty nasycenia i krzywe uczenia się.',
      },
    },
    examples: {
      identify_type: {
        title: 'Rozpoznawanie typu funkcji po tabeli wartości',
        context: 'Są trzy zestawy danych. Jaki typ pasuje do każdego?',
        step1: 'Testuj liniowy: Oblicz różnice kolejnych wartości $y$. Jeśli są stałe, funkcja jest liniowa.',
        step2: 'Testuj wykładniczy: Oblicz ilorazy kolejnych wartości $y$. Jeśli są stałe, funkcja jest wykładnicza.',
        step3: 'Testuj kwadratowy: Oblicz drugie różnice (różnice różnic). Jeśli są stałe, funkcja jest kwadratowa.',
        mia_comment: 'Dokładnie tak testuję balansowanie: Symuluję 100 rund i sprawdzam, czy wartości odpowiadają zadanemu typowi wzrostu. Jeśli drugie różnice odbiegają, coś jest nie tak.',
      },
      game_mechanics: {
        title: 'Modelowanie mechanik gry',
        context: 'Cztery różne mechaniki w Hafenlichter potrzebują różnych funkcji.',
        step1: 'Prędkość biegu: Rośnie o tę samą wartość na poziom ($+5$ na poziom). To stała zmiana — więc liniowa. Sprawiedliwe i przewidywalne.',
        step2: 'Obrażenia od upadku: Z 2 m niewielkie obrażenia, z 10 m dużo więcej. Wzrost obrażeń przyspiesza — kwadratowo. Fizycznie sensowne (energia = $\\frac{1}{2}mv^2$).',
        step3: 'Wymagania XP na poziom: Poziom 2 wymaga 150 XP, poziom 3 wymaga 225 XP, poziom 4 wymaga 337 XP. Wymagania rosną zawsze o 50% — wykładniczo. Dzięki temu wyższe poziomy są prawdziwym wyzwaniem.',
        step4: 'Krzywa uczenia się (umiejętność): Na początku uczysz się szybko, potem coraz wolniej. Po $t$ godzinach gry opanowujesz $20 \\cdot \\log_2(t+1)$ procent mechanik — logarytmicznie.',
        mia_comment: 'To sedno projektowania gier: Odpowiednia krzywa do odpowiedniej mechaniki. Liniowe XP byłyby nudne, wykładnicze obrażenia od upadku byłyby niesprawiedliwe. Każdy typ funkcji ma swój sweet spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Wirusowe pobrania aplikacji',
        desc: 'Kiedy każdy użytkownik zaprasza dwóch znajomych, a ci znów dwóch, liczba pobrań podwaja się. Na początku prawie niezauważone, potem eksplozja — typowo wykładnicze. TikTok, Instagram i WhatsApp tak właśnie rosły.',
      },
      salary: {
        title: 'Kieszonkowe i wynagrodzenie',
        desc: 'Twoje kieszonkowe rośnie (miejmy nadzieję) co roku o tę samą kwotę — wzrost liniowy. Później w pracy wynagrodzenie często rośnie podobnie: stała kwota za każdy rok doświadczenia.',
      },
      learning_curve: {
        title: 'Postęp w nauce',
        desc: 'Nowy instrument, nowy sport, nowy język: Na początku robisz ogromne postępy, potem coraz trudniej jest się poprawić. To logarytmiczna krzywa nasycenia — i jest to zupełnie normalne!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Wykładniczy" i "kwadratowy" to to samo',
        correct: 'Wykładniczy rośnie O WIELE szybciej niż kwadratowy',
        why: 'Przy małych liczbach $x^2$ i $2^x$ wyglądają podobnie: $4^2 = 16$ i $2^4 = 16$. Ale przy $x = 10$: $10^2 = 100$ wobec $2^{10} = 1024$. Wzrost wykładniczy wyprzedza każdą funkcję potęgową!',
        mia_warning: 'Początkowo ustaliłam wymagania XP kwadratowo zamiast wykładniczo. Efekt: Od poziomu 20 gra była zbyt łatwa, bo gracze zbierali XP szybciej, niż rosły wymagania.',
      },
      all_curves_linear: {
        wrong: 'Każdy wzrost jest liniowy',
        correct: 'Najpierw sprawdź typ wzrostu',
        why: 'Tylko dlatego, że coś się "podwaja", nie oznacza, że jest liniowe! "Co 3 dni dwa razy więcej obserwujących" to wzrost wykładniczy, nie liniowy. Liniowy byłby: "Codziennie 100 nowych obserwujących". Różnica: stały przyrost (liniowy) vs. stały współczynnik (wykładniczy).',
      },
    },
  },
};
