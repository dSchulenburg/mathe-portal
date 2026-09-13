export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'Amir buduje model prognozujący liczbę użytkowników aplikacji do nauki. Pierwsze tygodnie wyglądają fantastycznie: co tydzień 40 procent więcej. Ekstrapoluje — i na przyszły rok wychodzi mu więcej użytkowników, niż jest ludzi ze smartfonem. „Twój model nie jest błędny", mówi jego profesorka, „jest tylko już poza swoim zakresem stosowalności. Co się dzieje, gdy aplikację ma już połowa wszystkich możliwych użytkowników?" Amir zauważa: zapomniał, że świat jest skończony.',
      challenge: 'Jak modelować wzrost, który ma granicę? I jak rozróżnić dwa rodzaje granicy: taką, przed którą hamuje się od samego początku, i taką, do której najpierw się przyspiesza, a potem hamuje?',
      outro: 'Amir pracuje teraz z dwoma modelami zamiast jednego. Wzrost ograniczony, gdy przyrost zależy tylko od wolnej reszty — stygnięcie, nasycanie, ładowanie. Wzrost logistyczny, gdy przyrost potrzebuje dodatkowo istniejącego stanu — zarażanie, polecanie dalej, populacje. I wie już, co oznacza punkt przegięcia: nie koniec wzrostu, lecz jego najszybszy moment.',
    },
    objectives: {
      grenzen: 'Rozpoznawać, kiedy model wykładniczy dochodzi do swojej granicy — i dlaczego wcześniej mimo to był poprawny',
      beschraenkt: 'Układać i analizować wzrost ograniczony $N(t) = K - (K - N_0)e^{-kt}$',
      logistisch: 'Wyznaczać model logistyczny $N(t) = \\frac{K}{1 + a e^{-rt}}$ z pojemności i wartości początkowej',
      wendepunkt: 'Obliczać punkt przegięcia i interpretować go jako moment najsilniejszego przyrostu',
    },
    explanation: {
      intro: 'Wzrost wykładniczy nie zna granic. W rzeczywistości jednak prawie zawsze jakaś istnieje: staw w pewnym momencie jest pełny, wszyscy możliwi klienci mają już produkt, kubek osiągnął temperaturę pokojową. Ta górna granica nazywa się pojemnością $K$. Dwa modele opisują, jak zostaje osiągnięta — a różnica między nimi nie jest drobnostką, lecz pytaniem, czy krzywa ma punkt przegięcia.',
      beschraenkt: 'We wzroście ograniczonym przyrost zależy tylko od tego, ile jeszcze brakuje. Na początku brakuje najwięcej, więc przyrost jest na początku największy i staje się coraz mniejszy. Krzywa zbliża się do granicy od dołu, nigdy jej nie osiągając:',
      amir_tip: 'Rozróżniam te dwa modele jednym jedynym pytaniem: czy przyrost potrzebuje tego, co już jest? Przy stygnącej kawie nie — ciepło ucieka bez względu na to, ile go jeszcze jest, liczy się tylko różnica. Przy wiralowym filmiku tak — bez ludzi, którzy go udostępniają, nic się nie dzieje. Pierwsze to wzrost ograniczony, drugie logistyczny.',
      logistisch: 'We wzroście logistycznym dochodzi stan jako drugi czynnik. Na początku jest wprawdzie dużo miejsca, ale prawie nie ma osobników — wzrost jest powolny. Na końcu jest wiele osobników, ale nie ma już miejsca — znowu powoli. Pomiędzy leży maksimum. Daje to typowy kształt litery S:',
      dgl: 'Najwyraźniej widać różnicę w równaniu różniczkowym. Czyta się je jak zdanie: przyrost jest proporcjonalny do stanu **razy** wciąż wolna część. Jeśli brakuje jednego z tych dwóch czynników, wzrost staje w miejscu:',
      wendepunkt: 'Z tego równania wynika najważniejszy parametr modelu. Iloczyn stanu i wolnej reszty jest największy dokładnie wtedy, gdy oba są równe — czyli przy połowie pojemności. Tam leży punkt przegięcia i tam tempo przyrostu jest maksymalne:',
    },
    concepts: {
      kapazitaet: {
        title: 'Pojemność $K$',
        desc: 'Górna granica, do której zbliża się stan, nie osiągając jej. Jest granicą dla $t \\to \\infty$ i występuje w obu modelach jako parametr. Bez sensownej pojemności żadnego z tych dwóch modeli nie da się zastosować.',
      },
      beschraenkt: {
        title: 'Wzrost ograniczony',
        desc: 'Przyrost zależy tylko od wciąż wolnej reszty $K - N$. Dlatego jest największy na samym początku i potem stale maleje. Krzywa nie ma punktu przegięcia — od początku jest wklęsła. Typowe dla stygnięcia, ładowania i nasycania.',
      },
      logistisch: {
        title: 'Wzrost logistyczny',
        desc: 'Przyrost zależy od stanu ORAZ od wolnej reszty. Stąd powstaje krzywa S: najpierw powoli, potem szybko, potem znowu powoli. Parametr $a = \\frac{K - N_0}{N_0}$ mówi, ile wolnych miejsc przypada na początku na każdego istniejącego osobnika.',
      },
      wendepunkt: {
        title: 'Punkt przegięcia przy $K/2$',
        desc: 'Zawsze przy połowie pojemności, niezależnie od $r$ i $N_0$. Tam tempo przyrostu jest maksymalne i wynosi $\\frac{rK}{4}$. Potem stan dalej rośnie, ale wolniej — to najczęstsza pomyłka w zadaniach na interpretację.',
      },
    },
    examples: {
      seerosen: {
        title: 'Układanie modelu logistycznego z pojemności i wartości początkowej',
        context: 'Na stawie, na którym jest miejsce dla 500 lilii wodnych, rośnie na początku 50 roślin.',
        step1: 'Najpierw parametr $a$. Wynika bezpośrednio z pojemności i wartości początkowej:',
        step2: 'Tym samym model jest gotowy. Tempo wzrostu $r = 0{,}4$ na tydzień pochodzi z serii pomiarów:',
        step3: 'Sprawdzenie: wstaw $t = 0$. Jeśli nie wyjdzie tu wartość początkowa, $a$ jest błędne:',
        step4: 'Moment przegięcia wynika z $a\\,e^{-rt} = 1$ — to równanie logarytmiczne:',
        amir_comment: 'Sprawdzenie z kroku 3 robię zawsze. Kosztuje dziesięć sekund i wyłapuje najczęstszy błąd: $a = \\frac{K}{N_0}$ zamiast $a = \\frac{K - N_0}{N_0}$. U mnie byłoby to 10 zamiast 9 — wygląda niewinnie, ale przesuwa całą krzywą.',
      },
      abkuehlung: {
        title: 'Wzrost ograniczony przy stygnięciu',
        context: 'Kai zostawia kawę o temperaturze 80 °C w pokoju, w którym jest 20 °C.',
        step1: 'Granicą jest tu temperatura pokojowa, różnica względem niej wynosi na początku 60 °C:',
        step2: 'Sprawdzenie dla $t = 0$: musi wyjść temperatura początkowa:',
        step3: 'Po dziesięciu minutach zostaje już tylko około jednej trzeciej różnicy:',
        step4: 'W dłuższej perspektywie zostaje temperatura pokojowa — matematycznie nigdy nie zostaje osiągnięta:',
        kai_comment: 'Przy kawie to wiedza z codzienności: pierwsza minuta daje najwięcej, potem idzie opornie. Dokładnie to jest wzrost ograniczony. I dlatego dmuchanie na początku pomaga, a po dziesięciu minutach nic już nie daje.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Epidemie',
        desc: 'Nowe zakażenia potrzebują zakażonych (którzy zarażają) i podatnych (którzy mogą się zarazić). Punkt przegięcia to dzień z największą liczbą nowych zakażeń — łączna liczba rośnie potem dalej, tylko wolniej.',
      },
      produkt: {
        title: 'Rozpowszechnianie produktów i aplikacji',
        desc: 'Nowi użytkownicy przychodzą najczęściej przez dotychczasowych użytkowników. Na początku brakuje polecających, na końcu tych, którzy jeszcze nie mają produktu. Działy marketingu nazywają krzywą S także krzywą adopcji.',
      },
      abkuehlung: {
        title: 'Stygnięcie i ładowanie',
        desc: 'Prawo stygnięcia Newtona i krzywa ładowania akumulatora to wzrost ograniczony. Liczy się tu tylko odległość od stanu końcowego — dlatego akumulator ładuje ostatnie procenty tak męcząco powoli.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'Od punktu przegięcia stan maleje',
        correct: 'Od punktu przegięcia maleje tempo przyrostu, a stan dalej rośnie',
        why: 'Punkt przegięcia to miejsce zerowe drugiej pochodnej, nie pierwszej. $N\'$ ma tam maksimum, jest więc właśnie szczególnie duże — i dodatnie. Funkcja logistyczna jest na całej swojej dziedzinie ściśle rosnąca, nigdy nie maleje. Kto myli tu stan z przyrostem, odwraca stwierdzenie dokładnie na odwrót.',
        amir_warning: 'To błąd interpretacji numer jeden i kosztuje punkty na każdej maturze. Mój trik: zawsze formułuję odpowiedź ze słowem „na". Co zmienia się na tydzień? Przyrost. Co jest w sumie? Stan. Gdy tylko pojawia się słowo „na", mówię o $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'Wzrost logistyczny to wzrost wykładniczy obcięty na poziomie $K$',
        correct: 'Krzywa logistyczna hamuje stopniowo i w ogóle nigdy nie osiąga $K$',
        why: 'Obcięty model wykładniczy miałby załamanie — w miejscu obcięcia nie byłby różniczkowalny i osiągnąłby granicę dokładnie w skończonym czasie. Funkcja logistyczna jest natomiast wszędzie gładka i zbliża się do $K$ tylko asymptotycznie. Różnica nie jest kosmetyczna: model obcięty przewiduje konkretny moment końcowy, logistyczny żadnego.',
        amir_warning: 'Poprawna jest w tej myśli tylko faza początkowa: dopóki $N$ jest małe w porównaniu z $K$, czynnik hamujący wynosi prawie $1$ i obie krzywe leżą praktycznie jedna na drugiej. Krzywa wykładnicza jest początkową styczną krzywej logistycznej — dlatego mój pierwszy model tak dobrze pasował do pierwszych tygodni.',
      },
    },
  },
};
