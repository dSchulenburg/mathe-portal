export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'Mia buduje dla Świateł Portu minigrę z parkingiem: Lumi zostawia tam furgonetkę i przy odbiorze musi zapłacić. Mia programuje taryfę — 2,00 € do jednej godziny, potem 3,50 €. Podczas testów Tim coś zauważa: „Jeśli przyjdziesz sekundę za późno, nagle płacisz 1,50 € więcej. To bug?" Mia przygląda się wykresowi. Nie jest zepsuty — on skacze. I właśnie to skakanie ma swoją nazwę.',
      challenge: 'Kiedy funkcja ma prawdziwy skok, kiedy tylko jedną brakującą dziurę, a kiedy ucieka do nieskończoności? Mia musi pewnie rozróżniać te trzy przypadki, żeby zdecydować, jakie taryfy w ogóle może w ten sposób zbudować.',
      outro: 'Mia potrafi teraz w każdym podejrzanym miejscu sprawdzić, czy funkcja jest ciągła: granica lewostronna, granica prawostronna, wartość funkcji — jeśli wszystkie trzy się zgadzają, wszystko jest w porządku. I wie, które luki da się naprawić, a których nie. Taryfa parkingowa, nawiasem mówiąc, pozostaje nieciągła. To nie bug, to decyzja biznesowa.',
    },
    objectives: {
      anschaulich: 'Rozpoznawać ciągłość intuicyjnie — i wiedzieć, dlaczego „rysowanie bez odrywania ołówka" nie wystarcza jako definicja',
      definition: 'Sprawdzać ciągłość w punkcie za pomocą granicy: $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Pewnie rozróżniać lukę usuwalną, punkt skoku i biegun',
      zwischenwertsatz: 'Wykazywać istnienie miejsca zerowego za pomocą twierdzenia o wartości pośredniej',
    },
    explanation: {
      intro: 'Intuicyjnie „ciągła" oznacza: możesz narysować wykres bez odrywania ołówka od kartki. To dobra pierwsza myśl — ale nie jest to definicja, z którą da się liczyć. Co z funkcją, której brakuje dokładnie jednego jedynego punktu? Ołówka praktycznie nie odrywasz, a mimo to funkcja nie jest w tym miejscu ciągła. Do solidnej definicji potrzebujesz granicy z rachunku różniczkowego.',
      definition: 'Funkcję $f$ nazywamy ciągłą w punkcie $x_0$, jeśli wartość funkcji i granica w tym punkcie sobie nie przeczą:',
      drei_bedingungen: 'W tej jednej linijce kryją się trzy wymagania. Wszystkie trzy muszą być spełnione — w każdym kontrprzykładzie zawodzi dokładnie jedno z nich:',
      mia_tip: 'Zawsze sprawdzam to w tej kolejności: po pierwsze, czy ten punkt w ogóle należy do dziedziny? Jeśli nie, funkcja już na pewno nie może być tam ciągła. Po drugie, czy z lewej i z prawej zmierzam do tej samej wartości? Po trzecie, czy ta wartość to ta, którą funkcja naprawdę tam przyjmuje? Trzy ptaszki, gotowe.',
      einseitig: 'Przy funkcjach określonych przedziałami musisz w punkcie sklejenia spojrzeć osobno z obu stron. Granica lewostronna i prawostronna nie mogą się rozjeżdżać, a obie muszą trafiać w wartość funkcji:',
      arten: 'Są dokładnie trzy sposoby, w jakie ciągłość może się zepsuć — i nie są one równie poważne. Przy luce usuwalnej brakuje tylko jednego punktu; możesz go dopisać i wszystko jest naprawione. W punkcie skoku istnieją obie granice jednostronne, ale są różne — tu dopisywanie nic nie da. Przy biegunie granice uciekają do nieskończoności, nie ma w ogóle wartości do dopisania:',
      zwischenwertsatz: 'Ciągłość to nie tylko własność, którą się sprawdza — to narzędzie. Twierdzenie o wartości pośredniej mówi: funkcja ciągła, która zaczyna się poniżej zera i kończy powyżej zera, musi po drodze trafić w zero. Nie może go przeskoczyć, bo skakać przecież właśnie nie wolno jej:',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Ciągłość w punkcie',
        desc: 'Granica w danym punkcie jest równa wartości funkcji. Trzy warunki w jednym równaniu: wartość funkcji istnieje, granica istnieje i obie są sobie równe. Jeśli któryś odpada, funkcja jest w tym miejscu nieciągła.',
      },
      einseitig: {
        title: 'Granice jednostronne',
        desc: 'W punktach sklejenia funkcji określonych przedziałami sprawdzasz lewą i prawą stronę osobno. Jeśli obie wartości się rozchodzą, mamy skok — a wysokość skoku to dokładnie ich różnica.',
      },
      arten: {
        title: 'Trzy rodzaje nieciągłości',
        desc: 'Luka usuwalna: granica istnieje, brakuje wartości funkcji — do naprawienia. Punkt skoku: obie granice jednostronne istnieją, ale są różne — nie do naprawienia. Biegun: granice uciekają do nieskończoności — tym bardziej nie do naprawienia.',
      },
      zwischenwertsatz: {
        title: 'Twierdzenie o wartości pośredniej',
        desc: 'Jeśli $f$ jest ciągła na $[a;b]$ i na końcach przedziału zmienia znak, to pomiędzy nimi leży co najmniej jedno miejsce zerowe. Twierdzenie gwarantuje istnienie — nie jednoznaczność i nie to, gdzie dokładnie ono leży.',
      },
    },
    examples: {
      luecke: {
        title: 'Zamykanie luki usuwalnej',
        context: 'Mia natrafia na wyrażenie, które przy $x = 1$ daje $\\frac{0}{0}$.',
        step1: 'Mianownik zeruje się przy $x = 1$ — ten punkt nie należy do dziedziny:',
        step2: 'Rozłożyć licznik na czynniki i skrócić. Wolno to zrobić, dopóki $x \\neq 1$:',
        step3: 'Skrócone wyrażenie da się bez problemu obliczyć przy $x = 1$ — to jest granica:',
        step4: 'Teraz dopisujesz brakujący punkt. Uzupełnioną funkcję nazywamy przedłużeniem ciągłym:',
        mia_comment: 'To $\\frac{0}{0}$ na początku mnie przestraszyło — myślałam, że coś jest zepsute. Ale nie jest. To znaczy tylko: najpierw skróć, potem pytaj. Zepsute byłoby $\\frac{1}{0}$, tam w mianowniku stoi prawdziwe zero, całkiem samo.',
      },
      sprung: {
        title: 'Mierzenie punktu skoku',
        context: 'Taryfa parkingowa z minigry Mii — i pytanie, jak droga może być jedna sekunda.',
        step1: 'Taryfa jest określona przedziałami, punkt sklejenia leży przy jednej godzinie:',
        step2: 'Zbliżyć się do punktu sklejenia z lewej i z prawej strony i porównać wartości:',
        step3: 'Obie granice istnieją, ale są różne — to jest definicja punktu skoku:',
        step4: 'Wysokość skoku to ich różnica. Nie jest to tutaj awaria, lecz sama taryfa:',
        kai_comment: 'Właśnie przez takie skoki taryfy komórkowe i progi opłat pocztowych irytują ludzi. Matematycznie nie ma w tym nic złego — ale kto spóźni się o sekundę, płaci po prostu cały następny próg. Taryfy ciągłe rozliczają co do sekundy. To decyzja, nie wzór.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Taryfy progowe',
        desc: 'Parking, poczta, abonament komórkowy: wszędzie tam, gdzie rozlicza się za rozpoczęte jednostki, funkcja ceny jest nieciągła. Każdy próg to punkt skoku — i każdy z nich jest świadomą decyzją dostawcy.',
      },
      temperatur: {
        title: 'Wielkości fizyczne',
        desc: 'Temperatura, położenie, prędkość: te wielkości nie mogą skakać, bo skok oznaczałby nieskończenie dużo energii w zerowym czasie. Dlatego modele fizyczne to prawie zawsze funkcje ciągłe.',
      },
      nullstelle: {
        title: 'Numeryczne szukanie miejsc zerowych',
        desc: 'Każdy kalkulator korzysta z twierdzenia o wartości pośredniej: szuka przedziału ze zmianą znaku i dzieli go na pół raz za razem. Bez ciągłości ta metoda byłaby bezwartościowa — miejsce zerowe mogłoby zostać po prostu przeskoczone.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'Jeśli $f(x_0)$ istnieje, to $f$ jest tam też ciągła',
        correct: 'Wartość funkcji musi dodatkowo być równa granicy',
        why: 'Funkcja skokowa jest określona w swoim punkcie skoku — ma tam całkiem zwyczajną wartość. Mimo to jest nieciągła, bo granica z jednej strony daje coś innego. Bycie określoną to tylko pierwszy z trzech warunków, a nie od razu odpowiedź.',
        mia_warning: 'To przydarzyło mi się przy parkingu. Dokładnie przy jednej godzinie cena jest określona, mianowicie 2,00 €. Myślałam, że w takim razie wszystko jest gładkie. Wykres i tak skacze — tylko sekundę później.',
      },
      pol_ist_hebbar: {
        wrong: 'Każdą lukę w dziedzinie da się zamknąć odpowiednią wartością',
        correct: 'Tylko jeśli granica obustronna istnieje i jest skończona',
        why: 'Przy $\\frac{1}{x}$ funkcja zmierza z lewej do $-\\infty$, a z prawej do $+\\infty$. Nie ma liczby, którą można by wstawić — którąkolwiek wybierzesz, wykres i tak ucieka obok do nieskończoności. Reguła kciuka dla ułamków: jeśli krytyczny czynnik się skraca, luka jest usuwalna; jeśli zostaje w mianowniku, to biegun.',
        mia_warning: 'Teraz zawsze sprawdzam to dwiema liczbami: wstawiam $0{,}001$ i $-0{,}001$. Jeśli wychodzą dwie podobne wartości, luka jest usuwalna. Jeśli wychodzi $1000$ i $-1000$, to biegun — i nic się nie da zrobić.',
      },
    },
  },
};
