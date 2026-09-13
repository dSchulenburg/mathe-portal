export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai stoi przed ostatnim problemem balansowania w "Hafenlichter 3D": łupy (loot-dropy) muszą wydawać się sprawiedliwe, ale jednocześnie ekscytujące. Jeśli każdy boss upuszcza dokładnie tyle samo złota, robi się nudno — przy zbyt dużej wariancji gracze narzekają na niesprawiedliwość. "Potrzebuję rozkładu, który wygląda naturalnie — dużo wartości blisko średniej, mało wartości skrajnych", mówi Kai do swojej koleżanki Priyi. Odpowiedź z wykładu ze stochastyki: rozkład normalny z jego idealną krzywą dzwonową.',
      challenge: 'Kai musi tak skalibrować system łupów i wydajności w "Hafenlichter 3D", aby nagrody były sprawiedliwie rozłożone, a czasy klatek pozostawały poniżej krytycznego progu — rozkład normalny i reguły sigma dają mu do tego narzędzia.',
      outro: 'Dzięki rozkładowi normalnemu Kai zbudował elegancki system balansowania: łupy układają się w krzywą dzwonową wokół wartości docelowej, a reguły sigma gwarantują, że wartości odstające są niezwykle rzadkie. "Najpiękniejsze jest to, że teraz mogę dokładnie obliczyć, jaki procent graczy doświadczy określonej wartości łupu", tłumaczy zespołowi. A dzięki transformacji $z$ porównuje zupełnie różne metryki — czasy klatek, rozkład obrażeń, czas gry — na jednej wspólnej skali. Krzywa dzwonowa jest wszędzie.',
    },
    objectives: {
      bell_curve: 'Rozumieć rozkład normalny $N(\\mu, \\sigma^2)$ jako rozkład ciągły z krzywą dzwonową i interpretować jego parametry',
      sigma_rules: 'Stosować reguły sigma ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) do szybkiego szacowania prawdopodobieństw',
      z_transformation: 'Przeprowadzać transformację $z$ i obliczać prawdopodobieństwa za pomocą standardowego rozkładu normalnego $\\Phi(z)$',
      central_limit_theorem: 'Znać centralne twierdzenie graniczne i wyjaśniać, dlaczego rozkład normalny pojawia się wszędzie',
    },
    explanation: {
      intro: 'Rozkład normalny to najważniejszy rozkład ciągły w statystyce — i spotykasz go wszędzie: przy wzroście ludzi, wynikach pomiarów, czasach klatek, wynikach egzaminów. Jego gęstość ma charakterystyczny kształt dzwonu, symetryczny względem wartości oczekiwanej $\\mu$. Odchylenie standardowe $\\sigma$ decyduje o tym, jak szeroki lub wąski jest dzwon: małe $\\sigma$ = wąski, wysoki dzwon (mały rozrzut), duże $\\sigma$ = szeroki, płaski dzwon (duży rozrzut). Funkcja gęstości ma postać:',
      sigma_rules: 'Reguły sigma to twoje szybkie narzędzie: od razu mówią ci, jaki procent wszystkich wartości leży w określonym przedziale wokół $\\mu$ — bez tablicy, bez kalkulatora. W przedziale $\\pm 1\\sigma$ leży ok. $68{,}3\\%$, w przedziale $\\pm 2\\sigma$ ok. $95{,}4\\%$, a w przedziale $\\pm 3\\sigma$ prawie wszystko — $99{,}7\\%$. To oznacza: wartości poza $3\\sigma$ są niezwykle rzadkie!',
      kai_tip: 'Przy tworzeniu gier codziennie używam reguł sigma do balansowania. Jeśli chcę, żeby 95% łupów mieściło się między 30 a 70 sztukami złota, ustawiam $\\mu = 50$ i $2\\sigma = 20$, czyli $\\sigma = 10$. Gotowe! Reguły od razu dają mi rozkład, i nie muszę niczego całkować.',
      z_transformation: 'Ale co, jeśli potrzebujesz dokładnego prawdopodobieństwa — a nie tylko reguł sigma? Wtedy do gry wchodzi transformacja $z$: przeliczasz swoją wartość $x$ na standaryzowaną wartość $z$ i sprawdzasz w tablicy standardowego rozkładu normalnego $\\Phi(z)$. Wartość $z$ mówi ci, o ile odchyleń standardowych $x$ jest oddalone od wartości oczekiwanej:',
      central_limit: 'Dlaczego rozkład normalny jest tak wszechobecny? Odpowiedź daje centralne twierdzenie graniczne: jeśli dodasz wystarczająco dużo niezależnych zmiennych losowych, ich suma — bez względu na to, jak wyglądają poszczególne rozkłady — zbliża się do rozkładu normalnego. Dlatego średnie są prawie zawsze rozłożone normalnie, nawet jeśli pojedyncze dane takie nie są:',
    },
    concepts: {
      normal_distribution: {
        title: 'Rozkład normalny $N(\\mu, \\sigma^2)$',
        desc: 'Rozkład ciągły z gęstością w kształcie dzwonu. $\\mu$ to wartość oczekiwana (środek dzwonu), $\\sigma^2$ to wariancja (szerokość dzwonu). Pole pod krzywą zawsze wynosi 1. Symetryczny względem $\\mu$: mediana = dominanta = wartość oczekiwana.',
      },
      sigma_rules: {
        title: 'Reguły sigma',
        desc: 'Trzy złote reguły: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Niezbędne do szybkich oszacowań.',
      },
      z_transformation: {
        title: 'Transformacja $z$',
        desc: 'Zamienia każdy rozkład normalny w standardowy rozkład normalny $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Następnie odczytujesz $P(X \\leq x) = \\Phi(z)$ z tablicy. Dzięki temu dowolne rozkłady normalne stają się porównywalne.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Prawdopodobieństwo łupu',
        context: 'W "Hafenlichter 3D" bossowie upuszczają złoto o rozkładzie normalnym z $\\mu = 50$ i $\\sigma = 8$. Kai chce wiedzieć: jak prawdopodobny jest legendarny łup wynoszący co najmniej 70 sztuk złota?',
        step1: 'Tworzymy model — łupy złota mają rozkład normalny:',
        step2: 'Stosujemy transformację $z$ — o ile odchyleń standardowych 70 jest oddalone od 50?',
        step3: 'Sprawdzamy w tablicy — odczytujemy $\\Phi(2{,}5)$:',
        step4: 'Obliczamy prawdopodobieństwo zdarzenia przeciwnego — tylko $0{,}6\\%$ dostaje 70+ sztuk złota:',
        kai_comment: 'Idealnie! Legendarny łup u mniej niż 1% graczy — to daje poczucie wyjątkowości, a przy tym nie jest niesprawiedliwe. Rozkład normalny daje mi pełną kontrolę nad rzadkością.',
      },
      frame_times: {
        title: 'Analiza czasów klatek',
        context: 'Przy 60 FPS każda klatka musi zostać wyrenderowana w $16{,}7\\,\\text{ms}$. Profiler Kaia pokazuje: czasy klatek mają rozkład normalny z $\\mu = 16{,}7\\,\\text{ms}$ i $\\sigma = 2{,}1\\,\\text{ms}$. Jak często gra się zacina (czas klatki $> 20\\,\\text{ms}$)?',
        step1: 'Tworzymy model — czasy klatek jako rozkład normalny:',
        step2: 'Transformacja $z$ dla progu zacięcia $x = 20$:',
        step3: 'Odczytujemy wartość z tablicy:',
        step4: 'Obliczamy prawdopodobieństwo zdarzenia przeciwnego — zacina się mniej więcej co 17. klatka:',
        kai_comment: 'Prawie 6% zacięć — to za dużo jak na płynną grę 3D. Muszę optymalizować renderer, aż $\\sigma$ się zmniejszy. Cel: $\\sigma \\leq 1{,}5$, wtedy dotyczy to mniej niż 1,5% klatek.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Kontrola jakości w przemyśle',
        desc: 'Fabryki stosują regułę $3\\sigma$: jeśli element odbiega od wymiaru nominalnego o więcej niż $3\\sigma$, zostaje odrzucony. Zarządzanie Six Sigma idzie jeszcze dalej — $6\\sigma$ oznacza maksymalnie 3,4 błędu na milion elementów. Rozkład normalny jest fundamentem przemysłowego zapewniania jakości.',
      },
      iq_scores: {
        title: 'Testy IQ i standaryzacja',
        desc: 'Wyniki IQ z definicji mają rozkład normalny z $\\mu = 100$ i $\\sigma = 15$. To oznacza: ok. $68\\%$ ludności ma IQ między 85 a 115, ok. $95\\%$ między 70 a 130. IQ równe 145 ($z = 3$) jest tak rzadkie jak łup 70 sztuk złota!',
      },
      stock_returns: {
        title: 'Stopy zwrotu z akcji i ryzyko',
        desc: 'Dzienne stopy zwrotu z akcji często modeluje się jako zmienne o rozkładzie normalnym — $\\sigma$ oznacza wtedy ryzyko. Zarządzający portfelami używają transformacji $z$, żeby obliczyć, jak prawdopodobny jest krach. Jednak w rzeczywistości skrajne wartości odstające zdarzają się częściej, niż przewiduje rozkład normalny ("grube ogony", ang. fat tails).',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'Zapisanie rozkładu normalnego jako $N(\\mu, \\sigma)$ — odchylenie standardowe zamiast wariancji',
        correct: 'Poprawnie jest $N(\\mu, \\sigma^2)$ — drugi parametr to zawsze wariancja',
        why: 'W zapisie $N(\\mu, \\sigma^2)$ drugi parametr oznacza wariancję $\\sigma^2$, a nie odchylenie standardowe $\\sigma$. Pomyłki prowadzą do zupełnie błędnych prawdopodobieństw — np. $N(0, 4)$ to rozkład z $\\sigma = 2$, a nie $\\sigma = 4$!',
        kai_warning: 'Ten błąd zniszczył mi kiedyś całe balansowanie łupów. Miałem na myśli $\\sigma = 8$, ale napisałem $N(50, 8)$ — a to oznacza $\\sigma = \\sqrt{8} \\approx 2{,}83$. Łupy były o wiele za bardzo jednolite! Zawsze pamiętaj: $N(\\mu, \\sigma^2)$!',
      },
      z_sign: {
        wrong: 'Wzór na $z$ odwrotnie: $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'Poprawnie jest $z = \\frac{x - \\mu}{\\sigma}$ — wartość minus wartość oczekiwana, a nie odwrotnie',
        why: 'Jeśli zamienisz kolejność w liczniku, dostaniesz zły znak. Wartość powyżej średniej musi dawać dodatnie $z$, a wartość poniżej — ujemne. Dla $x = 70$, $\\mu = 50$ mamy $z = +2{,}5$ (powyżej średniej), a nie $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai dotarł do serca "Hafenlichter 3D": silnika 3D. Każdy obiekt w grze — każdy statek, każda fala, każda latarnia w porcie — musi dać się obracać, skalować i przesuwać. "W 2D transformacje były po prostu wzorami", wspomina początki Mii. "Ale w 3D potrzebujesz systemu, który łączy dowolnie wiele transformacji — i to są macierze." Kai otwiera kod shaderów i widzi macierze wszędzie: macierz modelu, macierz widoku, macierz projekcji.',
      challenge: 'Kai musi zrozumieć i zaimplementować transformacje 3D dla swojego silnika gry — obrót, skalowanie i procesy przejścia, wszystko sterowane mnożeniem macierzy.',
      outro: 'Macierze stały się dla Kaia codziennym narzędziem: każda transformacja 3D to macierz, każda animacja to ciąg mnożeń macierzy, każde zachowanie przejściowe to macierz stochastyczna. "Genialne jest to, że bez względu na to, jak złożona jest transformacja — na końcu zawsze jest $\\vec{x}\' = M \\cdot \\vec{x}$", mówi. Macierz MVP ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) zamienia teraz w każdej klatce tysiące wierzchołków Hafenlichter w piksele na ekranie.',
    },
    objectives: {
      matrix_operations: 'Dodawać i mnożyć macierze oraz pewnie stosować reguły rachunkowe — zwłaszcza nieprzemienność',
      transformation_matrices: 'Tworzyć macierze transformacji dla obrotu, skalowania i odbicia oraz stosować je do wektorów',
      stochastic_matrices: 'Obliczać macierze stochastyczne i wektory stacjonarne dla procesów przejścia',
      inverse_matrix: 'Wyznaczać macierz odwrotną i rozumieć jej znaczenie jako "transformacji odwrotnej"',
    },
    explanation: {
      intro: 'Macierze to prostokątne tablice liczb — ale ich prawdziwa siła polega na tym, że przedstawiają przekształcenia. Macierz $2 \\times 2$ przekształca wektory 2D, macierz $3 \\times 3$ przekształca wektory 3D. Mnożenie oznacza: wiersz razy kolumna, a potem zsumować. Dla $C = A \\cdot B$ zachodzi:',
      transformation: 'W grafice 3D każde przekształcenie geometryczne jest macierzą: obrót, skalowanie, odbicie. Macierz obrotu wokół osi $z$ obraca punkt $(x, y, z)$ o kąt $\\theta$ — a współrzędna $z$ pozostaje bez zmian:',
      kai_tip: 'W moim silniku łączę transformacje przez mnożenie macierzy: najpierw skalowanie, potem obrót, potem przesunięcie. Kolejność jest przy tym kluczowa — macierze nie są przemienne! Najpierw obrót, potem przesunięcie daje coś zupełnie innego niż najpierw przesunięcie, potem obrót. Dlatego łańcuchy macierzy czytam zawsze od prawej do lewej.',
      stochastic: 'Macierze stochastyczne opisują procesy przejścia: jak prawdopodobne jest przejście z jednego stanu do innego? Każda kolumna sumuje się do 1 (przy wektorach kolumnowych). Jeśli pomnożysz wektor stanu $\\vec{v}_n$ przez macierz przejścia $T$, otrzymasz następny stan $\\vec{v}_{n+1}$:',
      inverse: 'Macierz odwrotna $A^{-1}$ to "przycisk cofnij": $A \\cdot A^{-1} = I$ (macierz jednostkowa). Jeśli $A$ to obrót o $30°$, to $A^{-1}$ jest obrotem o $-30°$. Nie każda macierz ma macierz odwrotną — tylko wtedy, gdy $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Mnożenie macierzy',
        desc: 'Wiersz razy kolumna: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. Liczba kolumn $A$ musi być równa liczbie wierszy $B$. Ważne: w ogólności $A \\cdot B \\neq B \\cdot A$! Kolejność ma znaczenie.',
      },
      transformation_matrix: {
        title: 'Macierz transformacji',
        desc: 'Każde przekształcenie liniowe (obrót, skalowanie, odbicie) można przedstawić jako macierz. Macierz obrotu $R(\\theta)$ obraca wektory o kąt $\\theta$. Kilka transformacji łączy się przez mnożenie macierzy — czytane od prawej do lewej.',
      },
      stochastic_matrix: {
        title: 'Macierz stochastyczna i wektor stacjonarny',
        desc: 'Macierz stochastyczna ma w każdej kolumnie sumę 1 — opisuje prawdopodobieństwa przejścia. Wektor stacjonarny $\\vec{v}_{\\text{fix}}$ spełniający $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ to długoterminowy stan równowagi, niezależny od stanu początkowego.',
      },
    },
    examples: {
      '3d_rotation': {
        title: 'Obrót 3D latarni w porcie',
        context: 'Kai chce obrócić latarnię w porcie o $90°$ wokół osi $z$. Latarnia stoi w punkcie $(3, 0, 5)$. Jak obliczy nowe położenie?',
        step1: 'Tworzymy macierz obrotu o $90°$ wokół osi $z$ ($\\cos 90° = 0$, $\\sin 90° = 1$):',
        step2: 'Zapisujemy wektor wodzący latarni jako wektor kolumnowy:',
        step3: 'Macierz razy wektor — wymnażamy wiersz po wierszu:',
        step4: 'Wynik: latarnia stoi teraz w $(0, 3, 5)$ — obrócona o $90°$ w płaszczyźnie $xy$, $z$ bez zmian:',
        kai_comment: 'Dokładnie tak działa każda klatka w moim silniku: tysiące wierzchołków mnoży się przez macierz modelu, potem przez macierz widoku (położenie kamery), potem przez macierz projekcji (perspektywa). Trzy mnożenia macierzy na każdy wierzchołek — a GPU robi to w milisekundach!',
      },
      player_states: {
        title: 'Zachowanie graczy jako łańcuch Markowa',
        context: 'W "Hafenlichter 3D" gracze przełączają się między eksplorowaniem (E) a walką (K). Kai zaobserwował: kto eksploruje, w $70\\%$ przypadków eksploruje dalej, a w $30\\%$ przechodzi do walki. Kto walczy, w $80\\%$ zostaje w walce, a w $20\\%$ wraca do eksplorowania. Obecnie eksploruje $60\\%$ graczy.',
        step1: 'Tworzymy macierz przejścia $T$ i wektor początkowy $\\vec{v}_0$:',
        step2: 'Obliczamy jeden krok — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:',
        step3: 'Wyznaczamy wektor stacjonarny — rozwiązujemy układ równań $T \\cdot \\vec{v} = \\vec{v}$ z $x + y = 1$:',
        step4: 'W długim okresie $40\\%$ eksploruje, a $60\\%$ walczy — niezależnie od stanu początkowego:',
        kai_comment: 'To jest złoto dla mojego game designu! Wektor stacjonarny pokazuje mi, że gracze w długim okresie więcej walczą niż eksplorują — bez względu na to, jak zaczynają. Jeśli chcę większej równowagi, muszę zmienić prawdopodobieństwa przejścia. Macierze sprawiają, że zachowanie graczy da się obliczyć!',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Grafika komputerowa i silniki 3D',
        desc: 'Każdy silnik 3D (Unity, Unreal, Godot) opiera się na mnożeniu macierzy. Potok MVP — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — przekształca każdy punkt 3D na ekran 2D. Nowoczesne GPU to w gruncie rzeczy potężne maszyny do mnożenia macierzy.',
      },
      google_pagerank: {
        title: 'Google PageRank',
        desc: 'Pierwotny algorytm wyszukiwania Google modeluje sieć jako ogromną macierz stochastyczną: każda strona internetowa to stan, każdy link to prawdopodobieństwo przejścia. Wektor stacjonarny $\\vec{r} = T \\cdot \\vec{r}$ daje ranking — strony z najwyższymi wartościami w wektorze stacjonarnym są na samej górze.',
      },
      robotics: {
        title: 'Robotyka i sterowanie maszynami',
        desc: 'Ramiona robotów składają się z przegubów, z których każdy wykonuje obrót. Całkowite położenie chwytaka wynika z iloczynu wszystkich macierzy obrotu wzdłuż ramienia. Nazywa się to kinematyką prostą — a macierz odwrotna rozwiązuje problem odwrotny: "Jakich kątów w przegubach potrzebuję dla tego położenia chwytaka?"',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Traktowanie mnożenia macierzy jak mnożenia liczb: $A \\cdot B = B \\cdot A$',
        correct: 'Macierze NIE są przemienne: w ogólności $A \\cdot B \\neq B \\cdot A$',
        why: 'Najpierw obrót, potem przesunięcie daje inny wynik niż najpierw przesunięcie, potem obrót. W grafice 3D zamieniona kolejność prowadzi do zupełnie błędnych położeń. Dlatego: łańcuchy transformacji zawsze czytaj od prawej do lewej!',
        kai_warning: 'Kiedyś przez cały dzień szukałem błędu, bo zamieniłem obrót i przesunięcie. Moje statki obracały się wokół środka świata zamiast wokół własnej osi! Od tamtej pory łańcuchy macierzy czytam zawsze od prawej do lewej: $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$ — najpierw obrót, potem przesunięcie.',
      },
      stochastic_rows_cols: {
        wrong: 'Założenie, że suma w wierszu = 1 przy macierzach stochastycznych z wektorami kolumnowymi',
        correct: 'Przy wektorach kolumnowych suma w kolumnie musi wynosić 1: $\\sum_i t_{ij} = 1$',
        why: 'Konwencja zależy od tego, czy używasz wektorów wierszowych, czy kolumnowych. W niemieckich szkołach i na niemieckich uczelniach standardem jest wektor kolumnowy — wtedy kolumny macierzy przejścia muszą sumować się do 1. Każda kolumna opisuje: "Wychodząc ze stanu $j$ — jak rozkładają się przejścia?"',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'Jest noc premiery w hamburskim porcie. Światła Landungsbrücken odbijają się w wodzie, a na wielkim ekranie przed Fischmarkt świeci tytuł: "Hafenlichter 3D". Kai stoi na scenie z mikrofonem w ręce i nie może w to uwierzyć — trzy lata pracy, a teraz gra jest wreszcie gotowa. Na widowni dostrzega dwie znajome twarze: Mię, która kiedyś swoją grą 2D w stylu pixel art wszystko zapoczątkowała, i Amira, którego algorytmy DataPulse sterują sztuczną inteligencją postaci NPC. "Pamiętacie", mówi Kai do mikrofonu, "jak Mia zaczynała od funkcji liniowych, żeby poruszać postaciami po prostej? Potem Amir za pomocą pochodnych i rozkładu dwumianowego zbudował potok danych. A teraz stoimy tutaj — dzięki macierzom, całkom i rozkładowi normalnemu stworzyliśmy cały świat 3D." Tłum wiwatuje. Ale zanim impreza naprawdę się rozkręci, Kai ma jeszcze jedno ostatnie wyzwanie: maturę z matematyki.',
      challenge: 'Przed nami największy egzamin — matura łączy analizę, geometrię analityczną i stochastykę w jednym sprawdzianie. Kai potrzebuje strategii, która połączy wszystkie tematy, zmaksymalizuje punkty i pozwoli uniknąć typowych błędów.',
      outro: 'Impreza premierowa w porcie trwa, gra muzyka, a Kai, Mia i Amir wznoszą toast. "Trzy lata matematyki", mówi Mia, "od prostej do rozkładu normalnego." "Od danych do sieci neuronowych", dodaje Amir. "Od pikseli 2D do silnika 3D", kończy Kai. Patrzą na Łabę, gdzie tańczą światła portu — każde z nich to wierzchołek przekształcony przez macierz, oświetlony funkcją wykładniczą, zbalansowany rozkładem normalnym. Matematyka nigdy nie była tylko liczeniem. Była językiem, dzięki któremu ich pomysły stały się rzeczywistością. Gra została wydana. Egzamin nadchodzi. I bez względu na to, jak się skończy — ta podróż była tego warta. Każda funkcja, każda pochodna, każda całka doprowadziła ich tutaj. Do portu. Do celu. I do początku wszystkiego, co jeszcze przed nimi.',
    },
    objectives: {
      exam_strategy: 'Opracować jasną strategię egzaminacyjną: przejrzeć zadania, obliczyć stosunek punktów do czasu, łatwe zadania najpierw',
      cross_topic_connections: 'Rozpoznawać i wykorzystywać powiązania między analizą, geometrią analityczną i stochastyką',
      time_management: 'Realistycznie planować budżet czasu na każde zadanie i go przestrzegać',
      error_prevention: 'Rozpoznawać typowe błędy, przeprowadzać kontrole sensowności i interpretować wyniki w kontekście zadania',
    },
    explanation: {
      intro: 'Matura to nie sprint, tylko strategiczna gra — jak boss końcowy z kilkoma fazami. Masz ok. 4 do 5 godzin na trzy duże bloki tematyczne. Kluczem nie jest wiedzieć wszystko, tylko mądrze ustalać priorytety i starannie pracować. Kai nauczył się tego przy swojej grze: "Nie naprawisz wszystkich bugów naraz. Naprawiasz te, które mają największy wpływ — i dokładnie tak podchodzisz do egzaminu."',
      kai_rallying: 'Ludzie, przez trzy lata robiliśmy matematykę — nie dlatego, że musieliśmy, tylko dlatego, że była kluczem do naszych projektów. Mia zaczęła od funkcji, Amir trenował swoją AI dzięki stochastyce, a ja zbudowałem świat 3D z macierzami. Matura to już tylko napisy końcowe po walce z ostatnim bossem. Jesteśmy gotowi!',
      structure: 'Egzamin składa się zwykle z trzech obowiązkowych części — analizy (często największy blok), geometrii analitycznej i stochastyki. Punkty rozkładają się mniej więcej tak:',
      time_strategy: 'Planuj czas proporcjonalnie do punktów. Jeśli zadanie daje 10 ze 100 punktów, poświęć mu ok. $10\\%$ swojego czasu. I złota zasada: zacznij od zadań, których jesteś pewien. Każdy pewny punkt liczy się tak samo jak punkt zdobyty z trudem!',
      mia_wisdom: 'Pamiętajcie o podstawach! Badanie funkcji to zawsze ten sam schemat: dziedzina, miejsca zerowe, ekstrema, punkty przegięcia, zachowanie dla $x \\to \\pm\\infty$. Jeśli znacie ten wzorzec, każda funkcja jest tylko jego wariacją. Nauczyłam się tego przy moich postaciach w grze — każdy ruch jest w gruncie rzeczy funkcją.',
      checking: 'Po każdym podpunkcie: kontrola sensowności! Czy jednostki się zgadzają? Czy znaki mają sens? Czy wynik mieści się w realistycznym zakresie? Prawdopodobieństwo większe niż 1 albo ujemne pole to natychmiastowe sygnały ostrzegawcze — wtedy lepiej przeliczyć jeszcze raz, niż iść dalej.',
      amir_data: 'Zawsze sprawdzam swoje wyniki na przypadkach granicznych: co się dzieje dla $x = 0$? Dla bardzo dużych $x$? Czy moje rozwiązanie jest zbieżne, czy rozbieżne? Ten sposób myślenia z debugowania sprawdza się tak samo na egzaminie. A w stochastyce: zawsze sprawdzaj, czy zachodzi $\\sum P = 1$!',
      confidence: 'Najważniejsze na koniec: wiesz więcej, niż myślisz. W twoich rękach są trzy lata ćwiczeń. Jeśli na egzaminie na chwilę utkniesz — weź głęboki oddech, przeczytaj zadanie jeszcze raz i zacznij od tego, co umiesz na pewno. Każdy punkt się liczy. I pamiętaj: matematyka to nie talent, tylko język, którego się nauczyłeś. Mów nim.',
    },
    concepts: {
      read_then_plan: {
        title: 'Czytaj → Planuj → Licz → Sprawdzaj',
        desc: 'Schemat 4 kroków dla każdego zadania: (1) Przeczytaj całe zadanie, zaznacz informacje. (2) Zaplanuj strategię rozwiązania — jakich metod potrzebujesz? (3) Licz starannie i przejrzyście. (4) Sprawdź wynik: jednostki, znaki, sensowność, kontekst zadania.',
      },
      point_maximizing: {
        title: 'Efektywność punktowa',
        desc: 'Nie każde zadanie jest tak samo trudne w przeliczeniu na punkt. Zacznij od zadań, w których zdobędziesz najwięcej punktów w najkrótszym czasie. Ostatnie podpunkty są często najtrudniejsze — lepiej najpierw zebrać wszystkie "łatwe" punkty we wszystkich zadaniach, a potem wrócić do trudnych.',
      },
      plausibility_check: {
        title: 'Kontrola sensowności',
        desc: 'Cztery szybkie kontrole, które zapobiegają błędom z nieuwagi: (1) Jednostki: czy jednostka pasuje do kontekstu? (2) Znak: czy wartość ujemna ma tu sens? (3) Wartości graniczne: co się dzieje dla $x \\to 0$ lub $x \\to \\infty$? (4) Szkic: czy wynik pasuje do wyobrażenia graficznego?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Typowe zadanie z analizy: badanie przebiegu funkcji + całka',
        context: 'Kai modeluje zużycie energii swojego silnika 3D funkcją $f(x) = (2x - 1) \\cdot e^{-x}$. Wyznacz ekstrema i oblicz pole między wykresem a osią $x$ na przedziale $[0;\\, 3]$.',
        step1: 'Zapisujemy funkcję — tutaj jest już dana:',
        step2: 'Pochodna z reguły iloczynu: $u = 2x - 1$, $v = e^{-x}$, czyli $f\'(x) = u\' \\cdot v + u \\cdot v\'$:',
        step3: 'Szukamy ekstremum — przyrównujemy $f\'(x) = 0$ ($e^{-x} > 0$ zawsze, więc nawias = 0):',
        step4: 'Obliczanie pola — całkowanie przez części lub wyznaczenie funkcji pierwotnej:',
        mia_comment: 'To jest dokładnie ten wzorzec, o którym mówię: pochodna z reguły iloczynu, znaleźć miejsce zerowe, obliczyć całkę. Funkcja się zmienia, ale strategia zawsze zostaje ta sama. Ćwiczcie, aż zacznie iść automatycznie!',
      },
      mixed_stochastik: {
        title: 'Typowe zadanie ze stochastyki: test hipotez',
        context: 'Test A/B Amira pokazuje: z 50 użytkowników na nowy przycisk klika zwykle $8\\%$. Po zmianie projektu chce sprawdzić, czy współczynnik kliknięć wzrósł ($\\alpha = 5\\%$).',
        step1: 'Tworzymy model — rozkład dwumianowy z parametrami:',
        step2: 'Formułujemy hipotezy — test jednostronny w górę:',
        step3: 'Szukamy obszaru krytycznego — sprawdzamy $k = 8$ ($P$ wciąż za duże):',
        step4: 'Wyznaczamy obszar odrzucenia — od $k = 9$ odrzucamy $H_0$:',
        amir_comment: 'Testy hipotez to w gruncie rzeczy logika decyzji: obliczasz, jak mało prawdopodobny jest twój wynik przy założeniu $H_0$. Jeśli jest mniej prawdopodobny niż $\\alpha$, odrzucasz $H_0$. Dokładnie tak podejmuję decyzje oparte na danych w DataPulse — tylko z większymi próbami!',
      },
    },
    realworld: {
      release_day: {
        title: 'Dzień premiery: kiedy wszystko się łączy',
        desc: 'Wydanie gry jest jak egzamin: miesiące przygotowań prowadzą do jednego decydującego momentu. "Hafenlichter 3D" Kaia łączy podstawy 2D (Mia), analizę danych (Amir) i matematykę 3D (Kai) — tak jak matura łączy analizę, geometrię i stochastykę. Przygotowanie to podstawa.',
      },
      project_management: {
        title: 'Zarządzanie projektami i priorytety',
        desc: 'W tworzeniu oprogramowania ustalasz priorytety funkcji według wpływu i nakładu pracy — tak jak zadania egzaminacyjne według punktów i trudności. Wzór $\\text{Efektywność} = \\frac{\\text{Punkty}}{\\text{Czas}}$ obowiązuje tak samo w pracy: skup się na tym, co robi największą różnicę.',
      },
      lifelong_learning: {
        title: 'Uczenie się przez całe życie',
        desc: 'Matura to nie koniec, tylko początek. Mia studiuje projektowanie gier, Amir data science, Kai informatykę medialną — i wszędzie potrzebują matematyki. Umiejętność wdrażania się w nowe tematy jest cenniejsza niż jakikolwiek pojedynczy wzór. Matematyka nauczyła was myśleć.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Zapisanie wyniku bez jednostki i bez odniesienia do kontekstu: "$A = 12{,}5$"',
        correct: 'Zawsze jednostka i interpretacja: "$A = 12{,}5\\,\\text{j.p.}$, co odpowiada $12{,}5\\,\\text{m}^2$"',
        why: 'Na maturze są punkty za interpretację w kontekście zadania! Goły wynik bez jednostki lub odniesienia do treści zadania kosztuje cię łatwe punkty. Zawsze pisz zdanie z odpowiedzią: "Pole wynosi $12{,}5\\,\\text{m}^2$, co odpowiada zazielenionej powierzchni parku."',
        kai_warning: 'Przy tworzeniu gier liczby bez kontekstu nie mają wartości. 12,5 — czego? Pikseli? Sekund? Punktów obrażeń? Tak samo na egzaminie: napisz jednostkę i sformułuj zdanie z odpowiedzią. To punkty w prezencie!',
      },
      skip_plausibility: {
        wrong: 'Niekwestionowanie oczywiście błędnego wyniku: $P(X = 5) = 1{,}3$',
        correct: 'Od razu powinna zapalić się lampka: prawdopodobieństwo nigdy nie może być większe niż 1!',
        why: 'Kontrole sensowności kosztują 10 sekund, a mogą uratować całe zadania. Prawdopodobieństwa zawsze leżą między 0 a 1, pola nigdy nie są ujemne, $e^x > 0$ dla wszystkich $x$. Jeśli twój wynik łamie te podstawowe zasady, kryje się za tym błąd rachunkowy.',
        mia_warning: 'Na moim ostatnim sprawdzianie znalazłam dokładnie taki błąd: moja całka wyszła ujemna, chociaż funkcja była dodatnia w całym przedziale. Szybka kontrola, znaleziony błąd znaku, poprawione — 4 punkty uratowane. Zawsze sprawdzajcie!',
      },
    },
  },
};
