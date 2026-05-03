export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Algorytm rekomendacji muzyki Amira ma problem: Popularnosc nowych piosenek rosnie poczatkowo eksplozywnie — ale jak szybko dokladnie? I kiedy hype sie wygasza? "Potrzebuje funkcji, ktora opisuje ekstremalnie szybki wzrost, ale pozostaje obliczalna", mowi Amir do Yary. Odpowiedz: funkcja wykladnicza z liczba Eulera $e$ — i jej odpowiednik, logarytm naturalny.',
      challenge: 'Amir musi modelowac krzywa wzrostu streamow piosenek i przewidziec, kiedy utwor osiagnie szczyt — do tego potrzebuje rownan wykladniczych i logarytmow.',
      outro: 'Z funkcja $e$ i $\\ln$ Amir moze teraz obliczyc, kiedy piosenka osiaga punkt kulminacyjny i jak szybko potem zainteresowanie spada. "Fajne jest to, ze logarytm naturalny sprawia, ze kazde rownanie wykladnicze staje sie rozwiazywalne", wyjasnia Finnowi. DataPulse przewiduje teraz trendy piosenek z zadziwiajaca precyzja.',
    },
    objectives: {
      e_function: 'Rozumiec i stosowac funkcje $e$ jako naturalna funkcje wzrostu',
      natural_log: 'Opanowac logarytm naturalny jako funkcje odwrotna do $e^x$',
      log_rules: 'Pewnie stosowac prawa logarytmow (regula iloczynu, ilorazu i potegi)',
      solve_exp_equations: 'Rozwiazywac rownania wykladnicze przez logarytmowanie',
    },
    explanation: {
      intro: 'Liczba Eulera $e \\approx 2{,}718$ to najwazniejsza stala dla procesow wzrostu. Dlaczego akurat $e$? Bo funkcja $f(x) = e^x$ ma unikalna wlasciwosc: Jej pochodna to ona sama — $f\'(x) = e^x$. To znaczy: predkosc wzrostu jest zawsze proporcjonalna do aktualnej wartosci. Idealne dla naturalnego wzrostu!',
      natural_log: 'Logarytm naturalny $\\ln(x)$ to funkcja odwrotna do $e^x$. Jesli chcesz wiedziec, jaki wykladnik potrzebujesz, aby osiagnac okreslona wartosc — wtedy $\\ln$ jest twoim narzedziem. Obie funkcje wzajemnie sie znosza:',
      amir_tip: 'W moim kodzie ML $\\ln$ pojawia sie wszedzie — w funkcji straty, przy normalizacji, we wzorze softmax. Powod: $\\ln$ zamienia mnozenie w dodawanie i sprawia, ze ogromne liczby staja sie podreczne. Dlatego liczymy czesto z "log-likelihood" zamiast bezposrednio z prawdopodobienstwami!',
      log_rules: 'Trzy prawa logarytmow sa niezwykle przydatne — zamieniaja zlozone wyrazenia w prostsze. Podstawowa idea: Logarytmy zamieniaja mnozenie w dodawanie, dzielenie w odejmowanie i potegowanie w mnozenie:',
      solving: 'Aby rozwiazac rownanie wykladnicze wzgledem $x$, stosujemy $\\ln$ po obu stronach. Logarytm "sciaga wykladnik w dol" — to kluczowy krok:',
    },
    concepts: {
      e_function: {
        title: 'Funkcja $e$',
        desc: 'Postac ogolna $f(x) = a \\cdot e^{kx}$: $a$ to wartosc poczatkowa, $k$ okresla szybkosc wzrostu. Przy $k > 0$ funkcja rosnie, przy $k < 0$ maleje (rozpad wykladniczy). Funkcja $e$ jest wlasna pochodna — dlatego doskonale modeluje naturalny wzrost.',
      },
      natural_log: {
        title: 'Logarytm naturalny',
        desc: 'Funkcja odwrotna do $e^x$: $\\ln(x)$ odpowiada na pytanie "Jaka potega $e$ daje $x$?". Zdefiniowany tylko dla $x > 0$. Wazne: $\\ln(1) = 0$ i $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Prawa logarytmow',
        desc: 'Trzy reguly, ktore wszystko upraszczaja: Regula iloczynu ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), regula ilorazu ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) i regula potegi ($\\ln(a^r) = r \\cdot \\ln(a)$). Regula potegi jest kluczem do rozwiazywania rownan wykladniczych.',
      },
    },
    examples: {
      solve_exp: {
        title: 'Rozwiazywanie rownania wykladniczego',
        context: 'Amir chce obliczyc, po ilu dniach piosenka ma 5 razy wiecej streamow niz na poczatku. Model wzrostu: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Budujemy rownanie — kiedy streamy osiagaja wartosc 15?',
        step2: 'Dzielimy przez 3, aby wyizolowac $e^{2x}$:',
        step3: 'Stosujemy $\\ln$ po obu stronach — wykladnik "schodzi w dol":',
        step4: 'Rozwiazujemy wzgledem $x$ — dzielimy przez wspolczynnik 2:',
        amir_comment: 'To jest wzorzec, ktorego ciagle potrzebuje: Izolowac, logarytmowac, rozwiazywac. Dziala przy kazdym rownaniu wykladniczym!',
      },
      half_life: {
        title: 'Obliczanie okresu poltrwania',
        context: 'Po szczycie wirusowa piosenka codziennie traci sluchaczy. Amir modeluje spadek jako $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Model: 1000 aktywnych sluchaczy w chwili $t = 0$, rozpad wykladniczy:',
        step2: 'Okres poltrwania oznacza: Kiedy zostanie 500 sluchaczy?',
        step3: 'Izolujemy i logarytmujemy — $\\ln$ po obu stronach:',
        step4: 'Rozwiazujemy wzgledem $t$ — po okolo 6{,}93 dniach liczba sluchaczy maleje o polowe:',
        amir_comment: 'Okres poltrwania jest staly! Niezaleznie od tego, czy jest 1000, 500 czy 250 sluchaczy — zawsze trwa okolo 6{,}93 dnia do nastepnego polowienia. To magia rozpadu wykladniczego.',
      },
    },
    realworld: {
      user_retention: {
        title: 'Retencja uzytkownikow aplikacji',
        desc: 'Ilu uzytkownikow zostaje aktywnych po tygodniu? W wiekszosci aplikacji retencja spada wykladniczo: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse uzywa tego modelu do przewidywania, ilu userow zostanie po 30 dniach — i kiedy celowo wysylac powiadomienia push.',
      },
      compound_interest: {
        title: 'Cigle oprocentowanie',
        desc: 'Banki licza z rocznym oprocentowaniem, ale teoretycznie istnieje tez cigle oprocentowanie: $K(t) = K_0 \\cdot e^{rt}$. Im czesciej naliczasz odsetki (dziennie, godzinowo, sekundowo...), tym blizej jestes $e^{rt}$. To jest granica!',
      },
      decibel: {
        title: 'Skala decybelowa',
        desc: 'Glosnosc mierzona jest logarytmicznie: $L = 10 \\cdot \\log_{10}(I/I_0)$. Podwojenie intensywnosci dzwieku zwieksza poziom tylko o okolo $3\\,\\text{dB}$. Dlatego 10 gitar nie brzmi 10 razy glosniej niz jedna — nasz sluch dziala logarytmicznie!',
      },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — rozdzielenie sumy',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — tylko iloczyny mozna rozdzielac',
        why: 'Regula iloczynu obowiazuje TYLKO dla mnozenia, nie dla dodawania! Nie istnieje prosty wzor na $\\ln(a + b)$. To jeden z najczestszych bledow w ogole.',
        amir_warning: 'Ten bug kosztowal mnie kiedys dwie godziny debugowania. Moje obliczenie likelihood bylo zupelnie bledne, bo uzylem $\\ln(p_1 + p_2)$ zamiast $\\ln(p_1 \\cdot p_2)$. Logarytmy rozdzielaja iloczyny — nie sumy!',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$ — bledne rozwiazanie logarytmu',
        correct: '$\\ln(e^x) = x$ — logarytm znosi funkcje wykladnicza',
        why: '$\\ln$ i $e^x$ to funkcje odwrotne — wzajemnie sie znosza. Wynikiem jest po prostu wykladnik $x$, bez czynnika $e$ przed nim.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse wprowadzil nowa funkcje i Amir chce wiedziec: Jakie jest prawdopodobienstwo, ze z 100 testowych uzytkownikow co najmniej 15 kliknie w nowy przycisk? Kazdy uzytkownik klika lub nie — klasyczny eksperyment tak/nie powtorzony $n$ razy. "To juz nie jest przypadek, to rozklad dwumianowy", mowi prof. Nguyen na seminarium.',
      challenge: 'Amir potrzebuje prawdopodobienstwa okreslonej liczby klikniec przy $n$ niezaleznych probach — rozklad dwumianowy daje dokladna odpowiedz.',
      outro: 'Amir ma teraz statystyczne ramy dla testow A/B. Moze obliczyc, czy wynik jest statystycznie istotny, czy powstal czysto przypadkowo. "Rozklad dwumianowy to fundament niemal kazdego testu statystycznego w praktyce", wyjasnia Yarze. DataPulse podejmuje teraz decyzje oparte na danych, a nie na intuicji.',
    },
    objectives: {
      bernoulli: 'Rozpoznawac eksperymenty Bernoulliego i wyznaczac prawdopodobienstwo sukcesu $p$',
      binomial_formula: 'Stosowac wzor dwumianowy do obliczania $P(X = k)$',
      expected_value: 'Obliczac i interpretowac wartosc oczekiwana $E(X) = n \\cdot p$',
      standard_deviation: 'Wyznaczac odchylenie standardowe $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ i stosowac jako miare rozproszenia',
    },
    explanation: {
      intro: 'Wyobraz sobie, ze powtarzasz eksperyment $n$ razy, a za kazdym razem sa tylko dwa wyniki: sukces (prawdopodobienstwo $p$) lub porazka (prawdopodobienstwo $1-p$). Rozklad dwumianowy mowi ci, jak prawdopodobne jest dokladnie $k$ sukcesow przy $n$ probach:',
      bernoulli: 'Baza to eksperyment Bernoulliego — pojedyncza proba z dokladnie dwoma wynikami. Trzy warunki musza byc spelnione: (1) tylko dwa wyniki, (2) prawdopodobienstwo $p$ zostaje takie samo przy kazdej probie, (3) proby sa wzajemnie niezalezne. Wspolczynnik dwumianowy liczy mozliwe uklady:',
      amir_tip: 'Wspolczynnik dwumianowy $\\binom{n}{k}$ liczy, na ile sposobow mozesz rozlozyc $k$ sukcesow na $n$ prob. W moim kodzie to scipy.special.comb(n, k). Dla duzych $n$ licze raczej dystrybuante — sumowanie pojedynczych prawdopodobienstw byloby zbyt wolne!',
      expected_value: 'Wartosc oczekiwana $E(X) = n \\cdot p$ mowi ci, ilu sukcesow "srednio" oczekujesz. Przy 100 probach z $p = 0{,}15$ oczekujesz $E(X) = 15$ sukcesow. Ale to nie znaczy, ze za kazdym razem bedzie dokladnie 15! Jak bardzo wyniki wahaja sie wokol sredniej, mierzy odchylenie standardowe:',
      standard_deviation: 'Odchylenie standardowe $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ pokazuje typowe rozproszenie wokol wartosci oczekiwanej. Reguly: Okolo 68% wynikow lezy w $E(X) \\pm \\sigma$, okolo 95% w $E(X) \\pm 2\\sigma$. Im wieksze $n$, tym wezszy staje sie rozklad wzgledem wartosci oczekiwanej.',
    },
    concepts: {
      bernoulli: {
        title: 'Eksperyment Bernoulliego',
        desc: 'Eksperyment losowy z dokladnie dwoma wynikami: Sukces (prawdopodobienstwo $p$) lub porazka ($1-p$). Przyklady: rzut moneta, klik/brak kliku, gol/brak gola. Rozklad dwumianowy powstaje przez $n$-krotne niezalezne powtorzenie.',
      },
      binomial_formula: {
        title: 'Wzor dwumianowy',
        desc: 'Wzor $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ sklada sie z trzech czesci: $\\binom{n}{k}$ liczy uklady, $p^k$ to prawdopodobienstwo $k$ sukcesow, $(1-p)^{n-k}$ to prawdopodobienstwo $n-k$ porazek.',
      },
      expected_value: {
        title: 'Wartosc oczekiwana i odchylenie standardowe',
        desc: 'Wartosc oczekiwana $E(X) = n \\cdot p$ to srednia przy wielu powtorzeniach. Odchylenie standardowe $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ mierzy typowe odchylenie od niej. Razem opisuja polozenie i rozproszenie rozkladu.',
      },
    },
    examples: {
      coin_flips: {
        title: 'Rzut moneta: dokladnie 7 z 10 razy orzol',
        context: 'Amir testuje swoj generator losowy: Przy 10 uczciwych rzutach moneta — jak prawdopodobne jest dokladnie 7 razy orzol?',
        step1: 'Parametry: $n = 10$ rzutow, $p = 0{,}5$ (uczciwa moneta), szukane: $k = 7$ razy orzol.',
        step2: 'Obliczamy wspolczynnik dwumianowy — na ile sposobow mozna rozlozyc 7 orlow na 10 rzutow?',
        step3: 'Wstawiamy do wzoru dwumianowego: Uklady $\\times$ sukcesy $\\times$ porazki:',
        step4: 'Obliczamy — prawdopodobienstwo wynosi ok. 11{,}7%, wiec raczej malo prawdopodobne:',
        amir_comment: 'Tylko 11{,}7% — to pokazuje: Nawet przy uczciwej monecie 7 z 10 orlow nie jest szczegolnie zaskakujace, ale tez nie jest normalne. Moj generator losowy chyba jest w porzadku!',
      },
      quality_control: {
        title: 'Kontrola jakosci w produkcji',
        context: 'Fabryka ma wskaznik wadliwosci 2%. Amir oblicza: Jak prawdopodobne jest, ze w probce 20 sztuk ani jedna nie jest wadliwa?',
        step1: 'Parametry: $n = 20$ sztuk, wskaznik wadliwosci $p = 0{,}02$, szukane: $k = 0$ wadliwych.',
        step2: 'Wstawiamy: $\\binom{20}{0} = 1$ i $0{,}02^0 = 1$ — zostaja tylko porazki:',
        step3: 'Upraszczamy — zostaje $0{,}98^{20}$:',
        step4: 'Wynik: Z prawdopodobienstwem ok. 66{,}8% zadna czesc nie jest wadliwa — wcale nie takie pewne!',
        amir_comment: 'Tylko dwie trzecie szansy na zero bledow przy 2% wadliwosci! To pokazuje: Nawet male prawdopodobienstwa sumuja sie przy wielu probach. Przy $n = 100$ byloby $P(X = 0) \\approx 13{,}3\\%$ — prawie na pewno znajdziesz blad.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'Testy A/B w DataPulse',
        desc: 'Amir testuje dwie wersje aplikacji: Wersja A ma wskaznik klikniec 12%, wersja B 15%. Za pomoca rozkladu dwumianowego oblicza, czy roznica jest statystycznie istotna — czy mogla powstac przypadkowo. To podstawa kazdego testu A/B.',
      },
      medicine: {
        title: 'Badania medyczne',
        desc: 'W testach lekow liczy sie: Ilu pacjentow wyzdrowalo? Czy wskaznik wyleczenia jest istotnie lepszy niz przy placebo? Rozklad dwumianowy daje odpowiedz — i chroni przed pochopnymi wnioskami przy zbyt malych probach.',
      },
      surveys: {
        title: 'Sondaze i tolerancja bledu',
        desc: 'Jesli w sondazu 52% glosuje na "tak" — czy to naprawde wiekszosc? Odchylenie standardowe $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ pokazuje, jak szeroki jest przedzial ufnosci. Przy $n = 100$ byloby $\\sigma \\approx 5\\%$ — wynik moze wiec wynosic tez 47% lub 57%.',
      },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Zapomnienie wspolczynnika dwumianowego: $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Pelny wzor z $\\binom{n}{k}$',
        why: 'Bez $\\binom{n}{k}$ wzor liczy tylko JEDNA okreslona kolejnosc — np. najpierw $k$ sukcesow, potem $n-k$ porazek. Ale sukcesy moga wystapic na roznych pozycjach! Wspolczynnik dwumianowy liczy wszystkie mozliwe uklady.',
        amir_warning: 'Wyobraz sobie, ze rzucasz kostka 3 razy i chcesz dokladnie 2 szostki. Sa 3 mozliwosci: 6-6-X, 6-X-6, X-6-6. Wspolczynnik dwumianowy $\\binom{3}{2} = 3$ liczy dokladnie to. Bez niego dostaniesz tylko jedna trzecia prawidlowego prawdopodobienstwa!',
      },
      variance_vs_sigma: {
        wrong: 'Pomylenie wariancji z odchyleniem standardowym',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — nie zapomnij o pierwiastku!',
        why: 'Wariancja to $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, odchylenie standardowe to $\\sigma = \\sqrt{\\text{Var}(X)}$. Bez pierwiastka wynik ma zla jednostke i jest zbyt duzy. $\\sigma$ ma te sama jednostke co $X$ — wariancja ma ja podniesiona do kwadratu.',
      },
    },
  },

  '11-bedingte-wahrscheinlichkeit': {
    story: {
      intro: 'DataPulse rekomenduje piosenki na podstawie dotychczasowego zachowania sluchacza. Ale Amir zauwa, ze nie kazda korelacja jest rownie silna. Kto slucha rocka, moze tez lubic metal — ale czy to dziala tez w druga strone? "Prawdopodobienstwo, ze ktos lubi rock, JESLI slucha metalu, nie jest tym samym co odwrotnie", wyjasnia prof. Nguyen. Witaj w swiecie prawdopodobienstwa warunkowego.',
      challenge: 'Amir musi poprawic logike rekomendacji: Jak prawdopodobne jest, ze uzytkownik lubi gatunek $A$, POD WARUNKIEM ze slucha gatunku $B$? I jak odwrocic ten kierunek?',
      outro: 'Z twierdzeniem Bayesa Amir moze teraz odwracac kierunek rekomendacji: Z "Kto slucha metalu, slucha w 60% tez rocka" staje sie "Kto slucha rocka, slucha w 35% tez metalu". "Bayes to jak inzynieria wsteczna dla prawdopodobienstw", usmiecha sie. DataPulse dostarcza teraz wyraznie precyzyjniejsze rekomendacje.',
    },
    objectives: {
      conditional_prob: 'Obliczac i interpretowac prawdopodobienstwa warunkowe',
      bayes_theorem: 'Stosowac twierdzenie Bayesa do odwracania kierunku prawdopodobienstwa warunkowego',
      independence: 'Sprawdzac niezaleznosc stochastyczna i odromniac od zaleznosci',
      tree_diagrams: 'Wykorzystywac diagramy drzewkowe i tablice czteropolowe jako narzedzia pomocnicze',
    },
    explanation: {
      intro: 'Prawdopodobienstwo warunkowe $P(A \\mid B)$ odpowiada na pytanie: "Jak prawdopodobne jest $A$, jesli juz wiemy, ze $B$ zaszlo?" Wiedza o $B$ zmienia prawdopodobienstwo — przestrzen probkowa zmniejsza sie do przypadkow, w ktorych $B$ zachodzi:',
      multiplication_rule: 'Regula mnozenia wynika bezposrednio z definicji: Jesli chcesz obliczyc prawdopodobienstwo "$A$ i $B$ jednoczesnie", mnozysz $P(B)$ przez warunkowe prawdopodobienstwo $P(A \\mid B)$:',
      amir_tip: 'W moim kodzie rekomendacji ciagle uzywam prawdopodobienstw warunkowych: $P(\\text{like}_Y \\mid \\text{like}_X)$ — prawdopodobienstwo, ze uzytkownik polubi piosenke $Y$, pod warunkiem ze polubil piosenke $X$. To serce kazdego filtra kolaboratywnego!',
      bayes: 'Twierdzenie Bayesa to magia: Odwraca kierunek. Jesli znasz $P(B \\mid A)$, ale potrzebujesz $P(A \\mid B)$, Bayes daje rozwiazanie. Wzor wyglada skomplikowanie, ale istota jest prosta: Wazysz prawdopodobienstwem bazowym (prior):',
      total_probability: 'Do mianownika w twierdzeniu Bayesa czesto potrzebujesz calkowitego prawdopodobienstwa. Rozklada ono $P(B)$ na wszystkie mozliwe drogi, ktorymi $B$ moze zajsc — przez $A$ lub przez $\\bar{A}$ (nie-$A$):',
      independence: 'Dwa zdarzenia sa stochastycznie niezalezne, jesli wiedza o jednym nie zmienia prawdopodobienstwa drugiego. Formalnie: $P(A \\mid B) = P(A)$ — zajscie $B$ nie wplywa na $A$. Rownowazne:',
    },
    concepts: {
      conditional_prob: {
        title: 'Prawdopodobienstwo warunkowe',
        desc: '$P(A \\mid B)$ to prawdopodobienstwo $A$ pod warunkiem $B$. "Przyblizamy" czesc przestrzeni prawdopodobienstwa, gdzie $B$ zachodzi, i pytamy o $A$. Wazne: $P(A \\mid B) \\neq P(B \\mid A)$ — kierunek ma znaczenie!',
      },
      bayes: {
        title: 'Twierdzenie Bayesa',
        desc: 'Wzor na odwrocenie kierunku: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ to prior (wiedza wstepna), $P(A \\mid B)$ to posterior (zaktualizowana ocena po zaobserwowaniu $B$). Statystyka bayesowska to podstawa filtrow antyspamowych i systemow diagnostycznych.',
      },
      independence: {
        title: 'Niezaleznosc stochastyczna',
        desc: '$A$ i $B$ sa niezalezne, jesli $P(A \\cap B) = P(A) \\cdot P(B)$. To znaczy: Zajscie $B$ nic nie zmienia w prawdopodobienstwie $A$. Uwaga: Niezaleznosc NIE jest tym samym co "brak czesci wspolnej" (rozlacznosc)!',
      },
    },
    examples: {
      medical_test: {
        title: 'Test medyczny — pulapka stawki bazowej',
        context: 'Test na chorobe jest w 99% prawidlowy. Choroba dotyczy 1% populacji. Jesli test jest pozytywny — jak prawdopodobne jest, ze naprawde jestes chory?',
        step1: 'Dane: $P(K) = 0{,}01$ (choroba), $P(+ \\mid K) = 0{,}99$ (czulosc), $P(+ \\mid \\bar{K}) = 0{,}05$ (wskaznik falszywych wynikow pozytywnych).',
        step2: 'Obliczamy calkowite prawdopodobienstwo pozytywnego wyniku — obie drogi (chory + zdrowy):',
        step3: 'Stosujemy twierdzenie Bayesa — szukamy $P(K \\mid +)$:',
        step4: 'Wynik: Tylko 16{,}7% prawdopodobienstwa, ze naprawde jestes chory — mimo 99% dokladnosci testu!',
        amir_comment: 'To jest pulapka stawki bazowej! Test jest super dokladny, ale poniewaz choroba jest tak rzadka ($P(K) = 1\\%$), wiekszosc pozytywnych testow to falsze alarmy. W swiecie ML to znaczy: Precyzja i czulosc to nie to samo!',
      },
      spam_filter: {
        title: 'Filtr antyspamowy z Bayesem',
        context: 'Filtr e-mail Amira ma sie uczyc: Jesli mail zawiera slowo "wygrana" — czy to spam?',
        step1: 'Dane: 30% wszystkich maili to spam, 80% maili spam zawiera "wygrana", ale tez 10% normalnych maili:',
        step2: 'Calkowite prawdopodobienstwo, ze mail zawiera "wygrana":',
        step3: 'Bayes: Jak prawdopodobny jest spam, jesli wystepuje "wygrana"?',
        step4: 'Wynik: 77{,}4% — mail ze slowem "wygrana" jest z duzym prawdopodobienstwem spamem:',
        amir_comment: 'Dokladnie tak dziala klasyfikator Naive Bayes! Im wiecej slow dodasz, tym precyzyjniejszy staje sie filtr. DataPulse uzywa tego samego zasady: Zamiast slow analizujemy wzorce sluchania, zamiast spam/nie-spam klasyfikujemy preferencje gatunkowe.',
      },
    },
    realworld: {
      recommendation: { title: 'Rekomendacje muzyczne w DataPulse', desc: 'Filtrowanie kolaboratywne bazuje na prawdopodobienstwach warunkowych: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "Kto lubi piosenke X, z jakim prawdopodobienstwem lubi tez piosenke Y?" Spotify, Netflix i DataPulse obliczaja miliony takich warunkowych prawdopodobienstw w czasie rzeczywistym.' },
      weather: { title: 'Prognoza pogody', desc: 'Meteorolodzy ciagle aktualizuja prognoze za pomoca Bayesa: $P(\\text{Deszcz} \\mid \\text{Chmury, Cisnienie, Wiatr})$. Kazdy nowy pomiar udokladnia prognoze. Dlatego prawdopodobienstwo deszczu zmienia sie w ciagu dnia — to Bayes w akcji!' },
      fraud_detection: { title: 'Wykrywanie oszustw', desc: 'System platnosci Amira rozpoznaje podejrzane transakcje za pomoca Bayesa: Jesli alarm sie wlacza — jak prawdopodobne jest prawdziwe oszustwo? Dokladnie jak przy tescie medycznym: Stawka bazowa decyduje! Przy wskazniku oszustw 0{,}1% wiekszosc alarmow to falszywe alarmy.' },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$ — pomylenie kierunku',
        correct: 'Odwrocenie kierunku mozliwe tylko z Bayesem!',
        why: '$P(A \\mid B)$ i $P(B \\mid A)$ to zupelnie rozne wartosci. Przyklad: $P(\\text{mokry} \\mid \\text{deszcz}) = 0{,}99$, ale $P(\\text{deszcz} \\mid \\text{mokry}) \\ll 0{,}99$ — mozna tez byc mokrym od zraszacza. Do odwrocenia kierunku potrzebujesz twierdzenia Bayesa.',
        amir_warning: 'Ten blad widze ciagle w code review! Ktos oblicza $P(\\text{klik} \\mid \\text{kupil})$ i uzywa jako $P(\\text{kupil} \\mid \\text{klik})$. To moze zupelnie zrujnowac algorytm rekomendacji. Bayes jest obowiazkowy!',
      },
      ignore_base_rate: {
        wrong: 'Ignorowanie stawki bazowej (Base Rate Fallacy)',
        correct: 'Zawsze uwzgledniaj $P(A)$ — prawdopodobienstwo a priori',
        why: 'Test o 99% dokladnosci brzmi imponujaco, ale jesli choroba dotyczy tylko 1%, to $P(K \\mid +) \\approx 16{,}7\\%$. Niska stawka bazowa $P(K) = 0{,}01$ dominuje wynik. Bez prior dostaniesz zupelnie znieksztalcona ocene.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn buduje backend dla nowej funkcji DataPulse: Znajdowanie podobnych piosenek. Ale jak mierzyc "podobienstwo" miedzy piosenkami, gdy kazda jest opisana dziesiatkami cech — tempo, energia, nastroj, instrumentacja? "Wyobraz sobie kazda piosenke jako punkt w przestrzeni", mowi Amir. "Im blizej sa dwa punkty, tym bardziej podobne piosenki." Witaj w swiecie wektorow.',
      challenge: 'Amir musi przedstawic cechy piosenek jako wektory i obliczyc ich podobienstwo — za pomoca iloczynu skalarnego i kata miedzy wektorami.',
      outro: 'Silnik rekomendacji DataPulse uzywa teraz Cosine Similarity: Im mniejszy kat miedzy dwoma wektorami piosenek, tym bardziej sa podobne. "W swiecie ML wektory sa wszedzie — Word Embeddings, Feature Spaces, sieci neuronowe. Wszystko to algebra liniowa", mowi zachwycony Amir do Yary.',
    },
    objectives: {
      vectors_2d_3d: 'Zapisywac wektory w $\\mathbb{R}^2$ i $\\mathbb{R}^3$ jako kolumny i interpretowac geometrycznie',
      vector_operations: 'Opanowac dodawanie wektorow i mnozenie przez skalar',
      scalar_product: 'Obliczac iloczyn skalarny i interpretowac geometrycznie',
      angle_between_vectors: 'Wyznaczac kat miedzy dwoma wektorami za pomoca wzoru cosinusowego',
    },
    explanation: {
      intro: 'Wektor opisuje przesuniecie w przestrzeni — lub ogolniej: uporzadkowana lista liczb. W $\\mathbb{R}^3$ wektor ma trzy skladowe, ktore zapisujesz jako kolumne. W analizie danych wektory moga miec 50 lub 500 wymiarow — zasada pozostaje ta sama:',
      addition: 'Wektory dodajesz skladowa po skladowej — kazdy wiersz osobno. Geometrycznie dostawiasz drugi wektor na koniec pierwszego (metoda koniec-do-poczatku). Wynikiem jest bezposrednia droga od startu do celu:',
      amir_tip: 'W moim kodzie Python wektory to po prostu tablice numpy. Dodawanie $\\vec{a} + \\vec{b}$ jest automatycznie wykonywane element po elemencie — np.array([3,4]) + np.array([-1,2]) daje np.array([2,6]). Dokladnie to samo co w matematyce!',
      scalar_product: 'Iloczyn skalarny (tez: iloczyn wewnetrzny) dwoch wektorow daje pojedyncza liczbe — nie wektor! Mnozysz skladowe parami i sumujesz wszystko. Wynik mowi ci, jak mocno wektory "wskazuja w tym samym kierunku":',
      length: 'Dlugosc (modul) wektora oblicza sie twierdzeniem Pitagorasa — rozszerzonym na trzy wymiary. W 2D to znany $\\sqrt{x^2 + y^2}$, w 3D dochodzi $z^2$:',
      angle: 'Najwazniejsze zastosowanie iloczynu skalarnego: Kat miedzy dwoma wektorami. Wzor laczy algebraiczny iloczyn skalarny z interpretacja geometryczna. Ten kat jest w swiecie ML standardowa miara podobienstwa jako "Cosine Similarity":',
    },
    concepts: {
      vector: { title: 'Wektor', desc: 'Uporzadkowana lista liczb zapisana jako kolumna. W $\\mathbb{R}^2$ wektor ma 2 skladowe, w $\\mathbb{R}^3$ trzy. Geometrycznie to strzalka z kierunkiem i dlugoscia. W analizie danych wektor reprezentuje obiekt z jego cechami — np. piosenke z tempem, energia i nastrojem.' },
      scalar_product: { title: 'Iloczyn skalarny', desc: 'Dwa wektory wchodza, jedna liczba wychodzi: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometrycznie: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Jesli iloczyn skalarny wynosi zero, wektory sa prostopadle (ortogonalne).' },
      vector_length: { title: 'Modul wektora', desc: 'Dlugosc $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — uogolnione twierdzenie Pitagorasa. Wektor o module 1 nazywa sie wektorem jednostkowym. W swiecie ML wektory czesto normalizuje sie do dlugosci 1, aby porownywac tylko kierunki.' },
    },
    examples: {
      force_addition: {
        title: 'Dodawanie sil jako wektorow',
        context: 'Dwie sily dzialaja na obiekt — Amir oblicza wypadkowa sile calkowita.',
        step1: 'Dwie sily dane jako wektory 2D:', step2: 'Dodajemy skladowa po skladowej — kazdy wiersz osobno:', step3: 'Obliczamy modul sily wypadkowej (Pitagoras):', step4: 'Obliczamy — sila wypadkowa wynosi ok. $6{,}32\\,\\text{N}$:',
        amir_comment: 'Te sama zasade stosujemy w DataPulse: Zamiast sil dodajemy wektory cech. Jesli uzytkownik lubi dwa gatunki, polaczony wektor gustow to suma — dzieki temu znajdujemy piosenki pasujace do obu gatunkow!',
      },
      angle_vectors: {
        title: 'Kat miedzy wektorami piosenek',
        context: 'Amir porownuje dwie piosenki: Piosenka A ma wektor cech $(1, 2, 3)$, a piosenka B $(4, -1, 2)$. Jak bardzo sa podobne?',
        step1: 'Wektory cech obu piosenek:', step2: 'Obliczamy iloczyn skalarny — skladowe mnozoone parami i zsumowane:', step3: 'Obliczamy moduly obu wektorow:', step4: 'Stosujemy wzor cosinusowy — kat wynosi ok. $62{,}2°$:',
        amir_comment: 'Kat $62{,}2°$ oznacza: Piosenki sa czesciowo podobne, ale nie ekstremalnie. Przy $0°$ bylyby identyczne (te same proporcje), przy $90°$ zupelnie rozne. W moim kodzie: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))',
      },
    },
    realworld: {
      embeddings: { title: 'Word Embeddings i Song Embeddings', desc: 'W swiecie ML slowa, piosenki i obrazy sa przedstawiane jako wielowymiarowe wektory (Embeddings). Cosine Similarity $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ mierzy ich podobienstwo. Slynny przyklad: "Krol" $-$ "Mezczyzna" $+$ "Kobieta" $\\approx$ "Krolowa" — arytmetyka wektorowa ze znaczeniami slow!' },
      navigation: { title: 'Nawigacja i robotyka', desc: 'Systemy nawigacyjne i roboty uzywaja wektorow do opisu pozycji i ruchu. Wektor pozycji mowi "Gdzie jestem?", wektor predkosci "Dokad i jak szybko?". Dodawanie wektorow oblicza nowa pozycje po przesunieciu.' },
      game_physics: { title: 'Fizyka gier i symulacje', desc: 'W grach jak Fortnite czy Minecraft fizyka jest obliczana wektorami: $\\vec{v}_{\\text{nowy}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Predkosc, przyspieszenie i grawitacja — wszystko to wektory! Bez rachunku wektorowego zadna pilka nie lecialaby prawidlowo.' },
    },
    mistakes: {
      scalar_vs_cross: { wrong: 'Iloczyn skalarny daje wektor', correct: 'Iloczyn skalarny daje LICZBE ($\\in \\mathbb{R}$)', why: 'Przy iloczynie skalarnym mnozysz skladowe parami i DODAJESZ — wynikiem jest pojedyncza liczba, nie wektor. Nie myl go z iloczynem wektorowym (ktory daje wektor, ale pojawia sie pozniej).', amir_warning: 'W numpy: np.dot(a, b) zwraca liczbe, np.cross(a, b) zwraca wektor. Jesli twoj wynik podobienstwa nagle jest tablica zamiast liczby, uzyles zlego iloczynu!' },
      length_sum: { wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — proste dodanie skladowych', correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — Pitagoras!', why: 'Dlugosc wektora to odleglosc euklidesowa od poczatku ukladu — a ta wynika z twierdzenia Pitagorasa. Proste dodawanie skladowych to odleglosc Manhattan (tez uzyteczna, ale cos innego!).' },
    },
  },
};
