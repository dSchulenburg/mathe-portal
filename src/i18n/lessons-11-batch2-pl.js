export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Algorytm rekomendacji muzyki Amira ma problem: Popularność nowych piosenek rośnie początkowo eksplozywnie — ale jak szybko dokładnie? I kiedy hype się wygasza? "Potrzebuję funkcji, która opisuje ekstremalnie szybki wzrost, ale pozostaje obliczalna", mówi Amir do Yary. Odpowiedź: funkcja wykładnicza z liczbą Eulera $e$ — i jej odpowiednik, logarytm naturalny.',
      challenge: 'Amir musi modelować krzywą wzrostu streamów piosenek i przewidzieć, kiedy utwór osiągnie szczyt — do tego potrzebuje równań wykładniczych i logarytmów.',
      outro: 'Z funkcją $e$ i $\\ln$ Amir może teraz obliczyć, kiedy piosenka osiąga punkt kulminacyjny i jak szybko potem zainteresowanie spada. "Fajne jest to, że logarytm naturalny sprawia, że każde równanie wykładnicze staje się rozwiązywalne", wyjaśnia Finnowi. DataPulse przewiduje teraz trendy piosenek z zadziwiającą precyzją.',
    },
    objectives: {
      e_function: 'Rozumieć i stosować funkcję $e$ jako naturalną funkcję wzrostu',
      natural_log: 'Opanować logarytm naturalny jako funkcję odwrotną do $e^x$',
      log_rules: 'Pewnie stosować prawa logarytmów (reguła iloczynu, ilorazu i potęgi)',
      solve_exp_equations: 'Rozwiązywać równania wykładnicze przez logarytmowanie',
    },
    explanation: {
      intro: 'Liczba Eulera $e \\approx 2{,}718$ to najważniejsza stała dla procesów wzrostu. Dlaczego akurat $e$? Bo funkcja $f(x) = e^x$ ma unikalną własność: Jej pochodna to ona sama — $f\'(x) = e^x$. To znaczy: prędkość wzrostu jest zawsze proporcjonalna do aktualnej wartości. Idealne dla naturalnego wzrostu!',
      natural_log: 'Logarytm naturalny $\\ln(x)$ to funkcja odwrotna do $e^x$. Jeśli chcesz wiedzieć, jakiego wykładnika potrzebujesz, aby osiągnąć określoną wartość — wtedy $\\ln$ jest twoim narzędziem. Obie funkcje wzajemnie się znoszą:',
      amir_tip: 'W moim kodzie ML $\\ln$ pojawia się wszędzie — w funkcji straty, przy normalizacji, we wzorze softmax. Powód: $\\ln$ zamienia mnożenie w dodawanie i sprawia, że ogromne liczby stają się poręczne. Dlatego liczymy często z "log-likelihood" zamiast bezpośrednio z prawdopodobieństwami!',
      log_rules: 'Trzy prawa logarytmów są niezwykle przydatne — zamieniają złożone wyrażenia w prostsze. Podstawowa idea: Logarytmy zamieniają mnożenie w dodawanie, dzielenie w odejmowanie i potęgowanie w mnożenie:',
      solving: 'Aby rozwiązać równanie wykładnicze względem $x$, stosujemy $\\ln$ po obu stronach. Logarytm "ściąga wykładnik w dół" — to kluczowy krok:',
    },
    concepts: {
      e_function: {
        title: 'Funkcja $e$',
        desc: 'Postać ogólna $f(x) = a \\cdot e^{kx}$: $a$ to wartość początkowa, $k$ określa szybkość wzrostu. Przy $k > 0$ funkcja rośnie, przy $k < 0$ maleje (rozpad wykładniczy). Funkcja $e$ jest własną pochodną — dlatego doskonale modeluje naturalny wzrost.',
      },
      natural_log: {
        title: 'Logarytm naturalny',
        desc: 'Funkcja odwrotna do $e^x$: $\\ln(x)$ odpowiada na pytanie "Jaka potęga $e$ daje $x$?". Zdefiniowany tylko dla $x > 0$. Ważne: $\\ln(1) = 0$ i $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Prawa logarytmów',
        desc: 'Trzy reguły, które wszystko upraszczają: Reguła iloczynu ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), reguła ilorazu ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) i reguła potęgi ($\\ln(a^r) = r \\cdot \\ln(a)$). Reguła potęgi jest kluczem do rozwiązywania równań wykładniczych.',
      },
    },
    examples: {
      solve_exp: {
        title: 'Rozwiązywanie równania wykładniczego',
        context: 'Amir chce obliczyć, po ilu dniach piosenka ma 5 razy więcej streamów niż na początku. Model wzrostu: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Budujemy równanie — kiedy streamy osiągają wartość 15?',
        step2: 'Dzielimy przez 3, aby wyizolować $e^{2x}$:',
        step3: 'Stosujemy $\\ln$ po obu stronach — wykładnik "schodzi w dół":',
        step4: 'Rozwiązujemy względem $x$ — dzielimy przez współczynnik 2:',
        amir_comment: 'To jest wzorzec, którego ciągle potrzebuję: Izolować, logarytmować, rozwiązywać. Działa przy każdym równaniu wykładniczym!',
      },
      half_life: {
        title: 'Obliczanie okresu połowicznego rozpadu',
        context: 'Po szczycie wirusowa piosenka codziennie traci słuchaczy. Amir modeluje spadek jako $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Model: 1000 aktywnych słuchaczy w chwili $t = 0$, rozpad wykładniczy:',
        step2: 'Okres połowicznego rozpadu oznacza: Kiedy zostanie 500 słuchaczy?',
        step3: 'Izolujemy i logarytmujemy — $\\ln$ po obu stronach:',
        step4: 'Rozwiązujemy względem $t$ — po około 6{,}93 dniach liczba słuchaczy maleje o połowę:',
        amir_comment: 'Okres połowicznego rozpadu jest stały! Niezależnie od tego, czy jest 1000, 500 czy 250 słuchaczy — zawsze trwa około 6{,}93 dnia do następnego połowienia. To magia rozpadu wykładniczego.',
      },
    },
    realworld: {
      user_retention: {
        title: 'Retencja użytkowników aplikacji',
        desc: 'Ilu użytkowników zostaje aktywnych po tygodniu? W większości aplikacji retencja spada wykładniczo: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse używa tego modelu do przewidywania, ilu userów zostanie po 30 dniach — i kiedy celowo wysyłać powiadomienia push.',
      },
      compound_interest: {
        title: 'Ciągłe oprocentowanie',
        desc: 'Banki liczą z rocznym oprocentowaniem, ale teoretycznie istnieje też ciągłe oprocentowanie: $K(t) = K_0 \\cdot e^{rt}$. Im częściej naliczasz odsetki (dziennie, godzinowo, sekundowo...), tym bliżej jesteś $e^{rt}$. To jest granica!',
      },
      decibel: {
        title: 'Skala decybelowa',
        desc: 'Głośność mierzona jest logarytmicznie: $L = 10 \\cdot \\log_{10}(I/I_0)$. Podwojenie intensywności dźwięku zwiększa poziom tylko o około $3\\,\\text{dB}$. Dlatego 10 gitar nie brzmi 10 razy głośniej niż jedna — nasz słuch działa logarytmicznie!',
      },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — rozdzielenie sumy',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — tylko iloczyny można rozdzielać',
        why: 'Reguła iloczynu obowiązuje TYLKO dla mnożenia, nie dla dodawania! Nie istnieje prosty wzór na $\\ln(a + b)$. To jeden z najczęstszych błędów w ogóle.',
        amir_warning: 'Ten bug kosztował mnie kiedyś dwie godziny debugowania. Moje obliczenie likelihood było zupełnie błędne, bo użyłem $\\ln(p_1 + p_2)$ zamiast $\\ln(p_1 \\cdot p_2)$. Logarytmy rozdzielają iloczyny — nie sumy!',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$ — błędne rozwiązanie logarytmu',
        correct: '$\\ln(e^x) = x$ — logarytm znosi funkcję wykładniczą',
        why: '$\\ln$ i $e^x$ to funkcje odwrotne — wzajemnie się znoszą. Wynikiem jest po prostu wykładnik $x$, bez czynnika $e$ przed nim.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse wprowadził nową funkcję i Amir chce wiedzieć: Jakie jest prawdopodobieństwo, że ze 100 testowych użytkowników co najmniej 15 kliknie w nowy przycisk? Każdy użytkownik klika lub nie — klasyczny eksperyment tak/nie powtórzony $n$ razy. "To już nie jest przypadek, to rozkład dwumianowy", mówi prof. Nguyen na seminarium.',
      challenge: 'Amir potrzebuje prawdopodobieństwa określonej liczby kliknięć przy $n$ niezależnych próbach — rozkład dwumianowy daje dokładną odpowiedź.',
      outro: 'Amir ma teraz statystyczne ramy dla testów A/B. Może obliczyć, czy wynik jest statystycznie istotny, czy powstał czysto przypadkowo. "Rozkład dwumianowy to fundament niemal każdego testu statystycznego w praktyce", wyjaśnia Yarze. DataPulse podejmuje teraz decyzje oparte na danych, a nie na intuicji.',
    },
    objectives: {
      bernoulli: 'Rozpoznawać eksperymenty Bernoulliego i wyznaczać prawdopodobieństwo sukcesu $p$',
      binomial_formula: 'Stosować wzór dwumianowy do obliczania $P(X = k)$',
      expected_value: 'Obliczać i interpretować wartość oczekiwaną $E(X) = n \\cdot p$',
      standard_deviation: 'Wyznaczać odchylenie standardowe $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ i stosować jako miarę rozproszenia',
    },
    explanation: {
      intro: 'Wyobraź sobie, że powtarzasz eksperyment $n$ razy, a za każdym razem są tylko dwa wyniki: sukces (prawdopodobieństwo $p$) lub porażka (prawdopodobieństwo $1-p$). Rozkład dwumianowy mówi ci, jak prawdopodobne jest dokładnie $k$ sukcesów przy $n$ próbach:',
      bernoulli: 'Bazą jest eksperyment Bernoulliego — pojedyncza próba z dokładnie dwoma wynikami. Trzy warunki muszą być spełnione: (1) tylko dwa wyniki, (2) prawdopodobieństwo $p$ zostaje takie samo przy każdej próbie, (3) próby są wzajemnie niezależne. Współczynnik dwumianowy liczy możliwe układy:',
      amir_tip: 'Współczynnik dwumianowy $\\binom{n}{k}$ liczy, na ile sposobów możesz rozłożyć $k$ sukcesów na $n$ prób. W moim kodzie to scipy.special.comb(n, k). Dla dużych $n$ liczę raczej dystrybuantę — sumowanie pojedynczych prawdopodobieństw byłoby zbyt wolne!',
      expected_value: 'Wartość oczekiwana $E(X) = n \\cdot p$ mówi ci, ilu sukcesów "średnio" oczekujesz. Przy 100 próbach z $p = 0{,}15$ oczekujesz $E(X) = 15$ sukcesów. Ale to nie znaczy, że za każdym razem będzie dokładnie 15! Jak bardzo wyniki wahają się wokół średniej, mierzy odchylenie standardowe:',
      standard_deviation: 'Odchylenie standardowe $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ pokazuje typowe rozproszenie wokół wartości oczekiwanej. Reguły: Około 68% wyników leży w $E(X) \\pm \\sigma$, około 95% w $E(X) \\pm 2\\sigma$. Im większe $n$, tym węższy staje się rozkład względem wartości oczekiwanej.',
    },
    concepts: {
      bernoulli: {
        title: 'Eksperyment Bernoulliego',
        desc: 'Eksperyment losowy z dokładnie dwoma wynikami: Sukces (prawdopodobieństwo $p$) lub porażka ($1-p$). Przykłady: rzut monetą, klik/brak kliku, gol/brak gola. Rozkład dwumianowy powstaje przez $n$-krotne niezależne powtórzenie.',
      },
      binomial_formula: {
        title: 'Wzór dwumianowy',
        desc: 'Wzór $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ składa się z trzech części: $\\binom{n}{k}$ liczy układy, $p^k$ to prawdopodobieństwo $k$ sukcesów, $(1-p)^{n-k}$ to prawdopodobieństwo $n-k$ porażek.',
      },
      expected_value: {
        title: 'Wartość oczekiwana i odchylenie standardowe',
        desc: 'Wartość oczekiwana $E(X) = n \\cdot p$ to średnia przy wielu powtórzeniach. Odchylenie standardowe $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ mierzy typowe odchylenie od niej. Razem opisują położenie i rozproszenie rozkładu.',
      },
    },
    examples: {
      coin_flips: {
        title: 'Rzut monetą: dokładnie 7 z 10 razy orzeł',
        context: 'Amir testuje swój generator losowy: Przy 10 uczciwych rzutach monetą — jak prawdopodobne jest dokładnie 7 razy orzeł?',
        step1: 'Parametry: $n = 10$ rzutów, $p = 0{,}5$ (uczciwa moneta), szukane: $k = 7$ razy orzeł.',
        step2: 'Obliczamy współczynnik dwumianowy — na ile sposobów można rozłożyć 7 orłów na 10 rzutów?',
        step3: 'Wstawiamy do wzoru dwumianowego: Układy $\\times$ sukcesy $\\times$ porażki:',
        step4: 'Obliczamy — prawdopodobieństwo wynosi ok. 11{,}7%, więc raczej mało prawdopodobne:',
        amir_comment: 'Tylko 11{,}7% — to pokazuje: Nawet przy uczciwej monecie 7 z 10 orłów nie jest szczególnie zaskakujące, ale też nie jest normalne. Mój generator losowy chyba jest w porządku!',
      },
      quality_control: {
        title: 'Kontrola jakości w produkcji',
        context: 'Fabryka ma wskaźnik wadliwości 2%. Amir oblicza: Jak prawdopodobne jest, że w próbce 20 sztuk ani jedna nie jest wadliwa?',
        step1: 'Parametry: $n = 20$ sztuk, wskaźnik wadliwości $p = 0{,}02$, szukane: $k = 0$ wadliwych.',
        step2: 'Wstawiamy: $\\binom{20}{0} = 1$ i $0{,}02^0 = 1$ — zostają tylko porażki:',
        step3: 'Upraszczamy — zostaje $0{,}98^{20}$:',
        step4: 'Wynik: Z prawdopodobieństwem ok. 66{,}8% żadna część nie jest wadliwa — wcale nie takie pewne!',
        amir_comment: 'Tylko dwie trzecie szansy na zero błędów przy 2% wadliwości! To pokazuje: Nawet małe prawdopodobieństwa sumują się przy wielu próbach. Przy $n = 100$ byłoby $P(X = 0) \\approx 13{,}3\\%$ — prawie na pewno znajdziesz błąd.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'Testy A/B w DataPulse',
        desc: 'Amir testuje dwie wersje aplikacji: Wersja A ma wskaźnik kliknięć 12%, wersja B 15%. Za pomocą rozkładu dwumianowego oblicza, czy różnica jest statystycznie istotna — czy mogła powstać przypadkowo. To podstawa każdego testu A/B.',
      },
      medicine: {
        title: 'Badania medyczne',
        desc: 'W testach leków liczy się: Ilu pacjentów wyzdrowiało? Czy wskaźnik wyleczenia jest istotnie lepszy niż przy placebo? Rozkład dwumianowy daje odpowiedź — i chroni przed pochopnymi wnioskami przy zbyt małych próbach.',
      },
      surveys: {
        title: 'Sondaże i tolerancja błędu',
        desc: 'Jeśli w sondażu 52% głosuje na "tak" — czy to naprawdę większość? Odchylenie standardowe $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ pokazuje, jak szeroki jest przedział ufności. Przy $n = 100$ byłoby $\\sigma \\approx 5\\%$ — wynik może więc wynosić też 47% lub 57%.',
      },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Zapomnienie współczynnika dwumianowego: $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Pełny wzór z $\\binom{n}{k}$',
        why: 'Bez $\\binom{n}{k}$ wzór liczy tylko JEDNĄ określoną kolejność — np. najpierw $k$ sukcesów, potem $n-k$ porażek. Ale sukcesy mogą wystąpić na różnych pozycjach! Współczynnik dwumianowy liczy wszystkie możliwe układy.',
        amir_warning: 'Wyobraź sobie, że rzucasz kostką 3 razy i chcesz dokładnie 2 szóstki. Są 3 możliwości: 6-6-X, 6-X-6, X-6-6. Współczynnik dwumianowy $\\binom{3}{2} = 3$ liczy dokładnie to. Bez niego dostaniesz tylko jedną trzecią prawidłowego prawdopodobieństwa!',
      },
      variance_vs_sigma: {
        wrong: 'Pomylenie wariancji z odchyleniem standardowym',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — nie zapomnij o pierwiastku!',
        why: 'Wariancja to $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, odchylenie standardowe to $\\sigma = \\sqrt{\\text{Var}(X)}$. Bez pierwiastka wynik ma złą jednostkę i jest zbyt duży. $\\sigma$ ma tę samą jednostkę co $X$ — wariancja ma ją podniesioną do kwadratu.',
      },
    },
  },

  '11-bedingte-wahrscheinlichkeit': {
    story: {
      intro: 'DataPulse rekomenduje piosenki na podstawie dotychczasowego zachowania słuchacza. Ale Amir zauważa, że nie każda korelacja jest równie silna. Kto słucha rocka, może też lubić metal — ale czy to działa też w drugą stronę? "Prawdopodobieństwo, że ktoś lubi rock, JEŚLI słucha metalu, nie jest tym samym co odwrotnie", wyjaśnia prof. Nguyen. Witaj w świecie prawdopodobieństwa warunkowego.',
      challenge: 'Amir musi poprawić logikę rekomendacji: Jak prawdopodobne jest, że użytkownik lubi gatunek $A$, POD WARUNKIEM że słucha gatunku $B$? I jak odwrócić ten kierunek?',
      outro: 'Z twierdzeniem Bayesa Amir może teraz odwracać kierunek rekomendacji: Z "Kto słucha metalu, słucha w 60% też rocka" staje się "Kto słucha rocka, słucha w 35% też metalu". "Bayes to jak inżynieria wsteczna dla prawdopodobieństw", uśmiecha się. DataPulse dostarcza teraz wyraźnie precyzyjniejsze rekomendacje.',
    },
    objectives: {
      conditional_prob: 'Obliczać i interpretować prawdopodobieństwa warunkowe',
      bayes_theorem: 'Stosować twierdzenie Bayesa do odwracania kierunku prawdopodobieństwa warunkowego',
      independence: 'Sprawdzać niezależność stochastyczną i odróżniać ją od zależności',
      tree_diagrams: 'Wykorzystywać diagramy drzewkowe i tablice czteropolowe jako narzędzia pomocnicze',
    },
    explanation: {
      intro: 'Prawdopodobieństwo warunkowe $P(A \\mid B)$ odpowiada na pytanie: "Jak prawdopodobne jest $A$, jeśli już wiemy, że $B$ zaszło?" Wiedza o $B$ zmienia prawdopodobieństwo — przestrzeń próbkowa zmniejsza się do przypadków, w których $B$ zachodzi:',
      multiplication_rule: 'Reguła mnożenia wynika bezpośrednio z definicji: Jeśli chcesz obliczyć prawdopodobieństwo "$A$ i $B$ jednocześnie", mnożysz $P(B)$ przez warunkowe prawdopodobieństwo $P(A \\mid B)$:',
      amir_tip: 'W moim kodzie rekomendacji ciągle używam prawdopodobieństw warunkowych: $P(\\text{like}_Y \\mid \\text{like}_X)$ — prawdopodobieństwo, że użytkownik polubi piosenkę $Y$, pod warunkiem że polubił piosenkę $X$. To serce każdego filtra kolaboratywnego!',
      bayes: 'Twierdzenie Bayesa to magia: Odwraca kierunek. Jeśli znasz $P(B \\mid A)$, ale potrzebujesz $P(A \\mid B)$, Bayes daje rozwiązanie. Wzór wygląda skomplikowanie, ale istota jest prosta: Ważysz prawdopodobieństwem bazowym (prior):',
      total_probability: 'Do mianownika w twierdzeniu Bayesa często potrzebujesz prawdopodobieństwa całkowitego. Rozkłada ono $P(B)$ na wszystkie możliwe drogi, którymi $B$ może zajść — przez $A$ lub przez $\\bar{A}$ (nie-$A$):',
      independence: 'Dwa zdarzenia są stochastycznie niezależne, jeśli wiedza o jednym nie zmienia prawdopodobieństwa drugiego. Formalnie: $P(A \\mid B) = P(A)$ — zajście $B$ nie wpływa na $A$. Równoważnie:',
    },
    concepts: {
      conditional_prob: {
        title: 'Prawdopodobieństwo warunkowe',
        desc: '$P(A \\mid B)$ to prawdopodobieństwo $A$ pod warunkiem $B$. "Przybliżamy" część przestrzeni prawdopodobieństwa, gdzie $B$ zachodzi, i pytamy o $A$. Ważne: $P(A \\mid B) \\neq P(B \\mid A)$ — kierunek ma znaczenie!',
      },
      bayes: {
        title: 'Twierdzenie Bayesa',
        desc: 'Wzór na odwrócenie kierunku: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ to prior (wiedza wstępna), $P(A \\mid B)$ to posterior (zaktualizowana ocena po zaobserwowaniu $B$). Statystyka bayesowska to podstawa filtrów antyspamowych i systemów diagnostycznych.',
      },
      independence: {
        title: 'Niezależność stochastyczna',
        desc: '$A$ i $B$ są niezależne, jeśli $P(A \\cap B) = P(A) \\cdot P(B)$. To znaczy: Zajście $B$ nic nie zmienia w prawdopodobieństwie $A$. Uwaga: Niezależność NIE jest tym samym co "brak części wspólnej" (rozłączność)!',
      },
    },
    examples: {
      medical_test: {
        title: 'Test medyczny — pułapka stawki bazowej',
        context: 'Test na chorobę jest w 99% prawidłowy. Choroba dotyczy 1% populacji. Jeśli test jest pozytywny — jak prawdopodobne jest, że naprawdę jesteś chory?',
        step1: 'Dane: $P(K) = 0{,}01$ (choroba), $P(+ \\mid K) = 0{,}99$ (czułość), $P(+ \\mid \\bar{K}) = 0{,}05$ (wskaźnik fałszywych wyników pozytywnych).',
        step2: 'Obliczamy całkowite prawdopodobieństwo pozytywnego wyniku — obie drogi (chory + zdrowy):',
        step3: 'Stosujemy twierdzenie Bayesa — szukamy $P(K \\mid +)$:',
        step4: 'Wynik: Tylko 16{,}7% prawdopodobieństwa, że naprawdę jesteś chory — mimo 99% dokładności testu!',
        amir_comment: 'To jest pułapka stawki bazowej! Test jest super dokładny, ale ponieważ choroba jest tak rzadka ($P(K) = 1\\%$), większość pozytywnych testów to fałszywe alarmy. W świecie ML to znaczy: Precyzja i czułość to nie to samo!',
      },
      spam_filter: {
        title: 'Filtr antyspamowy z Bayesem',
        context: 'Filtr e-mail Amira ma się uczyć: Jeśli mail zawiera słowo "wygrana" — czy to spam?',
        step1: 'Dane: 30% wszystkich maili to spam, 80% maili spamowych zawiera "wygrana", ale też 10% normalnych maili:',
        step2: 'Całkowite prawdopodobieństwo, że mail zawiera "wygrana":',
        step3: 'Bayes: Jak prawdopodobny jest spam, jeśli występuje "wygrana"?',
        step4: 'Wynik: 77{,}4% — mail ze słowem "wygrana" jest z dużym prawdopodobieństwem spamem:',
        amir_comment: 'Dokładnie tak działa klasyfikator Naive Bayes! Im więcej słów dodasz, tym precyzyjniejszy staje się filtr. DataPulse używa tej samej zasady: Zamiast słów analizujemy wzorce słuchania, zamiast spam/nie-spam klasyfikujemy preferencje gatunkowe.',
      },
    },
    realworld: {
      recommendation: { title: 'Rekomendacje muzyczne w DataPulse', desc: 'Filtrowanie kolaboratywne bazuje na prawdopodobieństwach warunkowych: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "Kto lubi piosenkę X, z jakim prawdopodobieństwem lubi też piosenkę Y?" Spotify, Netflix i DataPulse obliczają miliony takich warunkowych prawdopodobieństw w czasie rzeczywistym.' },
      weather: { title: 'Prognoza pogody', desc: 'Meteorolodzy ciągle aktualizują prognozę za pomocą Bayesa: $P(\\text{Deszcz} \\mid \\text{Chmury, Ciśnienie, Wiatr})$. Każdy nowy pomiar udokładnia prognozę. Dlatego prawdopodobieństwo deszczu zmienia się w ciągu dnia — to Bayes w akcji!' },
      fraud_detection: { title: 'Wykrywanie oszustw', desc: 'System płatności Amira rozpoznaje podejrzane transakcje za pomocą Bayesa: Jeśli alarm się włącza — jak prawdopodobne jest prawdziwe oszustwo? Dokładnie jak przy teście medycznym: Stawka bazowa decyduje! Przy wskaźniku oszustw 0{,}1% większość alarmów to fałszywe alarmy.' },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$ — pomylenie kierunku',
        correct: 'Odwrócenie kierunku możliwe tylko z Bayesem!',
        why: '$P(A \\mid B)$ i $P(B \\mid A)$ to zupełnie różne wartości. Przykład: $P(\\text{mokry} \\mid \\text{deszcz}) = 0{,}99$, ale $P(\\text{deszcz} \\mid \\text{mokry}) \\ll 0{,}99$ — można też być mokrym od zraszacza. Do odwrócenia kierunku potrzebujesz twierdzenia Bayesa.',
        amir_warning: 'Ten błąd widzę ciągle w code review! Ktoś oblicza $P(\\text{klik} \\mid \\text{kupił})$ i używa jako $P(\\text{kupił} \\mid \\text{klik})$. To może zupełnie zrujnować algorytm rekomendacji. Bayes jest obowiązkowy!',
      },
      ignore_base_rate: {
        wrong: 'Ignorowanie stawki bazowej (Base Rate Fallacy)',
        correct: 'Zawsze uwzględniaj $P(A)$ — prawdopodobieństwo a priori',
        why: 'Test o 99% dokładności brzmi imponująco, ale jeśli choroba dotyczy tylko 1%, to $P(K \\mid +) \\approx 16{,}7\\%$. Niska stawka bazowa $P(K) = 0{,}01$ dominuje wynik. Bez prior dostaniesz zupełnie zniekształconą ocenę.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn buduje backend dla nowej funkcji DataPulse: Znajdowanie podobnych piosenek. Ale jak mierzyć "podobieństwo" między piosenkami, gdy każda jest opisana dziesiątkami cech — tempo, energia, nastrój, instrumentacja? "Wyobraź sobie każdą piosenkę jako punkt w przestrzeni", mówi Amir. "Im bliżej są dwa punkty, tym bardziej podobne piosenki." Witaj w świecie wektorów.',
      challenge: 'Amir musi przedstawić cechy piosenek jako wektory i obliczyć ich podobieństwo — za pomocą iloczynu skalarnego i kąta między wektorami.',
      outro: 'Silnik rekomendacji DataPulse używa teraz Cosine Similarity: Im mniejszy kąt między dwoma wektorami piosenek, tym bardziej są podobne. "W świecie ML wektory są wszędzie — Word Embeddings, Feature Spaces, sieci neuronowe. Wszystko to algebra liniowa", mówi zachwycony Amir do Yary.',
    },
    objectives: {
      vectors_2d_3d: 'Zapisywać wektory w $\\mathbb{R}^2$ i $\\mathbb{R}^3$ jako kolumny i interpretować geometrycznie',
      vector_operations: 'Opanować dodawanie wektorów i mnożenie przez skalar',
      scalar_product: 'Obliczać iloczyn skalarny i interpretować geometrycznie',
      angle_between_vectors: 'Wyznaczać kąt między dwoma wektorami za pomocą wzoru cosinusowego',
    },
    explanation: {
      intro: 'Wektor opisuje przesunięcie w przestrzeni — lub ogólniej: uporządkowaną listę liczb. W $\\mathbb{R}^3$ wektor ma trzy składowe, które zapisujesz jako kolumnę. W analizie danych wektory mogą mieć 50 lub 500 wymiarów — zasada pozostaje ta sama:',
      addition: 'Wektory dodajesz składowa po składowej — każdy wiersz osobno. Geometrycznie dostawiasz drugi wektor na koniec pierwszego (metoda koniec-do-początku). Wynikiem jest bezpośrednia droga od startu do celu:',
      amir_tip: 'W moim kodzie Python wektory to po prostu tablice numpy. Dodawanie $\\vec{a} + \\vec{b}$ jest automatycznie wykonywane element po elemencie — np.array([3,4]) + np.array([-1,2]) daje np.array([2,6]). Dokładnie to samo co w matematyce!',
      scalar_product: 'Iloczyn skalarny (też: iloczyn wewnętrzny) dwóch wektorów daje pojedynczą liczbę — nie wektor! Mnożysz składowe parami i sumujesz wszystko. Wynik mówi ci, jak mocno wektory "wskazują w tym samym kierunku":',
      length: 'Długość (moduł) wektora oblicza się twierdzeniem Pitagorasa — rozszerzonym na trzy wymiary. W 2D to znany $\\sqrt{x^2 + y^2}$, w 3D dochodzi $z^2$:',
      angle: 'Najważniejsze zastosowanie iloczynu skalarnego: Kąt między dwoma wektorami. Wzór łączy algebraiczny iloczyn skalarny z interpretacją geometryczną. Ten kąt jest w świecie ML standardową miarą podobieństwa jako "Cosine Similarity":',
    },
    concepts: {
      vector: { title: 'Wektor', desc: 'Uporządkowana lista liczb zapisana jako kolumna. W $\\mathbb{R}^2$ wektor ma 2 składowe, w $\\mathbb{R}^3$ trzy. Geometrycznie to strzałka z kierunkiem i długością. W analizie danych wektor reprezentuje obiekt z jego cechami — np. piosenkę z tempem, energią i nastrojem.' },
      scalar_product: { title: 'Iloczyn skalarny', desc: 'Dwa wektory wchodzą, jedna liczba wychodzi: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometrycznie: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Jeśli iloczyn skalarny wynosi zero, wektory są prostopadłe (ortogonalne).' },
      vector_length: { title: 'Moduł wektora', desc: 'Długość $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — uogólnione twierdzenie Pitagorasa. Wektor o module 1 nazywa się wektorem jednostkowym. W świecie ML wektory często normalizuje się do długości 1, aby porównywać tylko kierunki.' },
    },
    examples: {
      force_addition: {
        title: 'Dodawanie sił jako wektorów',
        context: 'Dwie siły działają na obiekt — Amir oblicza wypadkową siłę całkowitą.',
        step1: 'Dwie siły dane jako wektory 2D:', step2: 'Dodajemy składowa po składowej — każdy wiersz osobno:', step3: 'Obliczamy moduł siły wypadkowej (Pitagoras):', step4: 'Obliczamy — siła wypadkowa wynosi ok. $6{,}32\\,\\text{N}$:',
        amir_comment: 'Tę samą zasadę stosujemy w DataPulse: Zamiast sił dodajemy wektory cech. Jeśli użytkownik lubi dwa gatunki, połączony wektor gustów to suma — dzięki temu znajdujemy piosenki pasujące do obu gatunków!',
      },
      angle_vectors: {
        title: 'Kąt między wektorami piosenek',
        context: 'Amir porównuje dwie piosenki: Piosenka A ma wektor cech $(1, 2, 3)$, a piosenka B $(4, -1, 2)$. Jak bardzo są podobne?',
        step1: 'Wektory cech obu piosenek:', step2: 'Obliczamy iloczyn skalarny — składowe mnożone parami i zsumowane:', step3: 'Obliczamy moduły obu wektorów:', step4: 'Stosujemy wzór cosinusowy — kąt wynosi ok. $62{,}2°$:',
        amir_comment: 'Kąt $62{,}2°$ oznacza: Piosenki są częściowo podobne, ale nie ekstremalnie. Przy $0°$ byłyby identyczne (te same proporcje), przy $90°$ zupełnie różne. W moim kodzie: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))',
      },
    },
    realworld: {
      embeddings: { title: 'Word Embeddings i Song Embeddings', desc: 'W świecie ML słowa, piosenki i obrazy są przedstawiane jako wielowymiarowe wektory (Embeddings). Cosine Similarity $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ mierzy ich podobieństwo. Słynny przykład: "Król" $-$ "Mężczyzna" $+$ "Kobieta" $\\approx$ "Królowa" — arytmetyka wektorowa ze znaczeniami słów!' },
      navigation: { title: 'Nawigacja i robotyka', desc: 'Systemy nawigacyjne i roboty używają wektorów do opisu pozycji i ruchu. Wektor pozycji mówi "Gdzie jestem?", wektor prędkości "Dokąd i jak szybko?". Dodawanie wektorów oblicza nową pozycję po przesunięciu.' },
      game_physics: { title: 'Fizyka gier i symulacje', desc: 'W grach jak Fortnite czy Minecraft fizyka jest obliczana wektorami: $\\vec{v}_{\\text{nowy}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Prędkość, przyspieszenie i grawitacja — wszystko to wektory! Bez rachunku wektorowego żadna piłka nie leciałaby prawidłowo.' },
    },
    mistakes: {
      scalar_vs_cross: { wrong: 'Iloczyn skalarny daje wektor', correct: 'Iloczyn skalarny daje LICZBĘ ($\\in \\mathbb{R}$)', why: 'Przy iloczynie skalarnym mnożysz składowe parami i DODAJESZ — wynikiem jest pojedyncza liczba, nie wektor. Nie myl go z iloczynem wektorowym (który daje wektor, ale pojawia się później).', amir_warning: 'W numpy: np.dot(a, b) zwraca liczbę, np.cross(a, b) zwraca wektor. Jeśli twój wynik podobieństwa nagle jest tablicą zamiast liczby, użyłeś złego iloczynu!' },
      length_sum: { wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — proste dodanie składowych', correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — Pitagoras!', why: 'Długość wektora to odległość euklidesowa od początku układu — a ta wynika z twierdzenia Pitagorasa. Proste dodawanie składowych to odległość Manhattan (też użyteczna, ale coś innego!).' },
    },
  },
};
