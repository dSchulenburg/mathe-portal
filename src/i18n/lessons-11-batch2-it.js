export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'L\'algoritmo di raccomandazione musicale di Amir ha un problema: la popolarità delle nuove canzoni sale inizialmente in modo esplosivo — ma quanto velocemente? E quando si appiattisce l\'hype? "Mi serve una funzione che descriva una crescita estremamente rapida e che resti calcolabile", dice Amir a Yara. La risposta: la funzione esponenziale con il numero di Eulero $e$ — e la sua controparte, il logaritmo naturale.',
      challenge: 'Amir deve modellare la curva di crescita degli stream e prevedere quando un brano raggiunge il picco — per questo gli servono equazioni esponenziali e logaritmi.',
      outro: 'Con la funzione $e$ e il $\\ln$ Amir può ora calcolare quando una canzone raggiunge il picco e quanto velocemente l\'interesse cala in seguito. "La cosa bella è: il logaritmo naturale rende risolvibile qualsiasi equazione esponenziale", spiega a Finn. DataPulse ora prevede le tendenze musicali con una precisione sorprendente.',
    },
    objectives: {
      e_function: 'Comprendere e applicare la funzione $e$ come funzione di crescita naturale',
      natural_log: 'Padroneggiare il logaritmo naturale come funzione inversa di $e^x$',
      log_rules: 'Applicare con sicurezza le leggi dei logaritmi (regola del prodotto, del quoziente e della potenza)',
      solve_exp_equations: 'Risolvere equazioni esponenziali tramite logaritmizzazione',
    },
    explanation: {
      intro: 'Il numero di Eulero $e \\approx 2{,}718$ è la costante più importante per i processi di crescita. Perché proprio $e$? Perché la funzione $f(x) = e^x$ ha una proprietà unica: la sua derivata è sé stessa — $f\'(x) = e^x$. Ciò significa: il tasso di crescita è sempre proporzionale al valore attuale. Perfetto per la crescita naturale!',
      natural_log: 'Il logaritmo naturale $\\ln(x)$ è la funzione inversa di $e^x$. Se vuoi sapere quale esponente ti serve per raggiungere un certo valore — allora $\\ln$ è il tuo strumento. Le due funzioni si annullano a vicenda:',
      amir_tip: 'Nel mio codice ML $\\ln$ appare ovunque — nella loss function, nella normalizzazione, nella formula softmax. Il motivo: $\\ln$ trasforma la moltiplicazione in addizione e rende gestibili numeri enormi. Per questo calcoliamo spesso con la "log-likelihood" invece che con le probabilità dirette!',
      log_rules: 'Le tre leggi dei logaritmi sono estremamente utili — trasformano espressioni complesse in più semplici. L\'idea di base: i logaritmi trasformano moltiplicazioni in addizioni, divisioni in sottrazioni e potenze in moltiplicazioni:',
      solving: 'Per risolvere un\'equazione esponenziale rispetto a $x$, applichi il $\\ln$ a entrambi i lati. Il logaritmo "porta giù l\'esponente" — questo è il passo chiave:',
    },
    concepts: {
      e_function: { title: 'Funzione $e$', desc: 'La forma generale $f(x) = a \\cdot e^{kx}$: $a$ è il valore iniziale, $k$ determina la velocità di crescita. Con $k > 0$ la funzione cresce, con $k < 0$ decade (decadimento esponenziale). La funzione $e$ è la derivata di sé stessa — per questo modella perfettamente la crescita naturale.' },
      natural_log: { title: 'Logaritmo naturale', desc: 'La funzione inversa di $e^x$: $\\ln(x)$ risponde alla domanda "Quale potenza di $e$ dà $x$?". Definito solo per $x > 0$. Importante: $\\ln(1) = 0$ e $\\ln(e) = 1$.' },
      log_rules: { title: 'Leggi dei logaritmi', desc: 'Tre regole che semplificano tutto: regola del prodotto ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), regola del quoziente ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) e regola della potenza ($\\ln(a^r) = r \\cdot \\ln(a)$). La regola della potenza è la chiave per risolvere equazioni esponenziali.' },
    },
    examples: {
      solve_exp: {
        title: 'Risolvere un\'equazione esponenziale',
        context: 'Amir vuole calcolare dopo quanti giorni una canzone ha 5 volte gli stream iniziali. Il modello di crescita è: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Impostare l\'equazione — quando gli stream raggiungono il valore 15?',
        step2: 'Dividere per 3 per isolare $e^{2x}$:',
        step3: 'Applicare il $\\ln$ a entrambi i lati — l\'esponente "scende":',
        step4: 'Risolvere per $x$ — dividere per il coefficiente 2:',
        amir_comment: 'Questo è lo schema che mi serve continuamente: isolare, logaritmizzare, risolvere. Funziona con qualsiasi equazione esponenziale!',
      },
      half_life: {
        title: 'Calcolare il tempo di dimezzamento',
        context: 'Dopo il picco una canzone virale perde ascoltatori ogni giorno. Amir modella il calo con $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Il modello: 1000 ascoltatori attivi al tempo $t = 0$, decadimento esponenziale:',
        step2: 'Tempo di dimezzamento significa: quando restano 500 ascoltatori?',
        step3: 'Isolare e logaritmizzare — $\\ln$ a entrambi i lati:',
        step4: 'Risolvere per $t$ — dopo circa 6{,}93 giorni il numero di ascoltatori si è dimezzato:',
        amir_comment: 'Il tempo di dimezzamento è costante! Che siano 1000, 500 o 250 ascoltatori — ci vogliono sempre circa 6{,}93 giorni fino al prossimo dimezzamento. Questa è la magia del decadimento esponenziale.',
      },
    },
    realworld: {
      user_retention: { title: 'User Retention nelle app', desc: 'Quanti utenti restano attivi dopo una settimana? Per la maggior parte delle app la retention cala esponenzialmente: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse usa questo modello per prevedere quanti utenti sono ancora attivi dopo 30 giorni.' },
      compound_interest: { title: 'Interesse continuo', desc: 'Le banche calcolano con interesse annuale, ma in teoria esiste anche l\'interesse continuo: $K(t) = K_0 \\cdot e^{rt}$. Più spesso calcoli gli interessi (giornalmente, ogni ora, ogni secondo...), più ti avvicini a $e^{rt}$. Questo è il limite!' },
      decibel: { title: 'Scala dei decibel', desc: 'Il volume si misura logaritmicamente: $L = 10 \\cdot \\log_{10}(I/I_0)$. Se l\'intensità sonora raddoppia, il livello sale solo di circa $3\\,\\text{dB}$. Ecco perché 10 chitarre non suonano 10 volte più forte di una — il nostro udito lavora logaritmicamente!' },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — somma scomposta',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — solo i prodotti si possono scomporre',
        why: 'La regola del prodotto vale SOLO per la moltiplicazione, non per l\'addizione! Non esiste una formula semplice per $\\ln(a + b)$. Questo è uno degli errori più frequenti in assoluto.',
        amir_warning: 'Questo bug mi è costato due ore di debugging. Il mio calcolo della likelihood era completamente sbagliato perché avevo usato $\\ln(p_1 + p_2)$ invece di $\\ln(p_1 \\cdot p_2)$. I logaritmi scompongono prodotti — non somme!',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$ — logaritmo risolto erroneamente',
        correct: '$\\ln(e^x) = x$ — il logaritmo annulla la funzione esponenziale',
        why: '$\\ln$ e $e^x$ sono funzioni inverse — si annullano a vicenda. Il risultato è semplicemente l\'esponente $x$, senza fattore $e$ davanti.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse ha lanciato una nuova funzione, e Amir vuole sapere: quanto è probabile che almeno 15 dei 100 utenti di test clicchino sul nuovo pulsante? Ogni utente clicca o non clicca — un classico esperimento sì/no ripetuto $n$ volte. "Questo non è più caso, è distribuzione binomiale", dice la Prof.ssa Nguyen nel seminario.',
      challenge: 'Amir ha bisogno della probabilità di un certo numero di clic in $n$ tentativi indipendenti — la distribuzione binomiale fornisce la risposta esatta.',
      outro: 'Amir ha ora un framework statistico per gli A/B test. Può calcolare se un risultato è significativo o solo casuale. "La distribuzione binomiale è il fondamento di quasi ogni test statistico nella pratica", spiega a Yara. DataPulse prende ora decisioni basate sui dati invece che a intuito.',
    },
    objectives: {
      bernoulli: 'Riconoscere esperimenti di Bernoulli e determinare la probabilità di successo $p$',
      binomial_formula: 'Applicare la formula binomiale per calcolare $P(X = k)$',
      expected_value: 'Calcolare e interpretare il valore atteso $E(X) = n \\cdot p$',
      standard_deviation: 'Determinare la deviazione standard $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ e usarla come misura di dispersione',
    },
    explanation: {
      intro: 'Immagina di ripetere un esperimento $n$ volte, e ogni volta ci sono solo due esiti: successo (probabilità $p$) o insuccesso (probabilità $1-p$). La distribuzione binomiale ti dice quanto è probabile ottenere esattamente $k$ successi in $n$ tentativi:',
      bernoulli: 'La base è l\'esperimento di Bernoulli — un singolo tentativo con esattamente due esiti. Tre condizioni devono valere: (1) solo due risultati, (2) la probabilità $p$ resta uguale ad ogni tentativo, (3) i tentativi sono indipendenti. Il coefficiente binomiale conta le disposizioni possibili:',
      amir_tip: 'Il coefficiente binomiale $\\binom{n}{k}$ conta in quanti modi puoi distribuire $k$ successi su $n$ tentativi. Nel mio codice è la funzione scipy.special.comb(n, k). Per $n$ grandi preferisco calcolare la distribuzione cumulativa — sommare le probabilità singole sarebbe troppo lento!',
      expected_value: 'Il valore atteso $E(X) = n \\cdot p$ ti dice quanti successi ti aspetti "in media". Con 100 tentativi e $p = 0{,}15$ ti aspetti $E(X) = 15$ successi. Ma questo non significa che siano sempre esattamente 15! Quanto oscillano i risultati lo misura la deviazione standard:',
      standard_deviation: 'La deviazione standard $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ mostra la dispersione tipica attorno al valore atteso. Regole empiriche: circa il 68% dei risultati sta in $E(X) \\pm \\sigma$, circa il 95% in $E(X) \\pm 2\\sigma$. Più grande è $n$, più stretta diventa la distribuzione rispetto al valore atteso.',
    },
    concepts: {
      bernoulli: { title: 'Esperimento di Bernoulli', desc: 'Un esperimento casuale con esattamente due esiti: successo (probabilità $p$) o insuccesso ($1-p$). Esempi: lancio di moneta, clic/non clic, gol/non gol. La distribuzione binomiale nasce dalla ripetizione indipendente $n$ volte.' },
      binomial_formula: { title: 'Formula binomiale', desc: 'La formula $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ è composta da tre parti: $\\binom{n}{k}$ conta le disposizioni, $p^k$ è la probabilità per $k$ successi, $(1-p)^{n-k}$ per $n-k$ insuccessi.' },
      expected_value: { title: 'Valore atteso e deviazione standard', desc: 'Il valore atteso $E(X) = n \\cdot p$ è la media dopo molte ripetizioni. La deviazione standard $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ misura la deviazione tipica. Insieme descrivono posizione e dispersione della distribuzione.' },
    },
    examples: {
      coin_flips: {
        title: 'Lancio di moneta: esattamente 7 teste su 10',
        context: 'Amir testa il suo generatore di numeri casuali: con 10 lanci di una moneta equa — quanto è probabile esattamente 7 volte testa?',
        step1: 'Determinare i parametri: $n = 10$ lanci, $p = 0{,}5$ (moneta equa), cercato: $k = 7$ volte testa.',
        step2: 'Calcolare il coefficiente binomiale — in quanti modi possono essere distribuiti 7 testa su 10 lanci?',
        step3: 'Sostituire nella formula binomiale: disposizioni $\\times$ successi $\\times$ insuccessi:',
        step4: 'Risultato — la probabilità è circa l\'11{,}7%, quindi piuttosto improbabile:',
        amir_comment: 'Solo l\'11{,}7% — questo mostra: anche con una moneta equa, 7 su 10 volte testa non è particolarmente sorprendente, ma nemmeno la norma. Il mio generatore di numeri casuali sembra a posto!',
      },
      quality_control: {
        title: 'Controllo qualità nella produzione',
        context: 'Una fabbrica ha un tasso di difetti del 2%. Amir calcola: quanto è probabile che in un campione di 20 pezzi nessuno sia difettoso?',
        step1: 'Parametri: $n = 20$ pezzi, tasso di difetti $p = 0{,}02$, cercato: $k = 0$ pezzi difettosi.',
        step2: 'Sostituire: $\\binom{20}{0} = 1$, e $0{,}02^0 = 1$ — restano solo gli insuccessi:',
        step3: 'Semplificare — resta $0{,}98^{20}$:',
        step4: 'Risultato: con circa il 66{,}8% di probabilità nessun pezzo è difettoso — non così sicuro!',
        amir_comment: 'Solo due terzi di probabilità di zero difetti con un tasso del 2%! Questo mostra: anche piccole probabilità si sommano con molti tentativi. Con $n = 100$ sarebbe $P(X = 0) \\approx 13{,}3\\%$ — lì si trova quasi sicuramente un difetto.',
      },
    },
    realworld: {
      ab_testing: { title: 'A/B Testing su DataPulse', desc: 'Amir testa due versioni dell\'app: la versione A ha un tasso di clic del 12%, la B del 15%. Con la distribuzione binomiale calcola se la differenza è statisticamente significativa — o se potrebbe essere dovuta al caso.' },
      medicine: { title: 'Studi clinici', desc: 'Nei test sui farmaci si conta: quanti pazienti guariscono? Il tasso di guarigione è significativamente migliore del placebo? La distribuzione binomiale fornisce la risposta — e protegge da conclusioni affrettate con campioni troppo piccoli.' },
      surveys: { title: 'Sondaggi e margine d\'errore', desc: 'Se in un sondaggio il 52% vota "sì" — è davvero una maggioranza? La deviazione standard $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ mostra quanto è largo l\'intervallo di confidenza. Con $n = 100$ sarebbe $\\sigma \\approx 5\\%$ — il risultato potrebbe essere anche 47% o 57%.' },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Coefficiente binomiale dimenticato: $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Formula completa con $\\binom{n}{k}$',
        why: 'Senza $\\binom{n}{k}$ la formula conta solo UNA sequenza specifica — es. prima $k$ successi, poi $n-k$ insuccessi. Ma i successi possono apparire in diverse posizioni! Il coefficiente binomiale conta tutte le disposizioni possibili.',
        amir_warning: 'Immagina di lanciare un dado 3 volte e volere esattamente 2 sei. Ci sono 3 possibilità: 6-6-X, 6-X-6, X-6-6. Il coefficiente binomiale $\\binom{3}{2} = 3$ conta esattamente questo. Senza di esso ottieni solo un terzo della probabilità corretta!',
      },
      variance_vs_sigma: {
        wrong: 'Varianza e deviazione standard confuse',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — non dimenticare la radice!',
        why: 'La varianza è $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, la deviazione standard è $\\sigma = \\sqrt{\\text{Var}(X)}$. Senza radice il risultato ha l\'unità sbagliata ed è troppo grande. $\\sigma$ ha la stessa unità di $X$ — la varianza l\'ha al quadrato.',
      },
    },
  },

  '11-bedingte-wahrscheinlichkeit': {
    story: {
      intro: 'DataPulse raccomanda canzoni basandosi sul comportamento d\'ascolto passato. Ma Amir nota: non tutte le correlazioni sono ugualmente forti. Chi ascolta rock forse apprezza anche il metal — ma vale anche il contrario? "La probabilità che a qualcuno piaccia il rock SE ascolta metal non è la stessa del contrario", spiega la Prof.ssa Nguyen. Benvenuti alla probabilità condizionata.',
      challenge: 'Amir deve migliorare la logica di raccomandazione: quanto è probabile che a un utente piaccia il genere $A$, DATO che ascolta il genere $B$? E come si inverte questa direzione?',
      outro: 'Con il teorema di Bayes Amir può ora invertire la direzione della raccomandazione: da "Chi ascolta metal, ascolta al 60% anche rock" diventa "Chi ascolta rock, ascolta al 35% anche metal". "Bayes è come il reverse engineering per le probabilità", sorride. DataPulse fornisce ora raccomandazioni nettamente più precise.',
    },
    objectives: {
      conditional_prob: 'Calcolare e interpretare probabilità condizionate',
      bayes_theorem: 'Applicare il teorema di Bayes per invertire la direzione di una probabilità condizionata',
      independence: 'Verificare l\'indipendenza stocastica e distinguerla dalla dipendenza',
      tree_diagrams: 'Utilizzare diagrammi ad albero e tabelle a quattro campi come strumenti',
    },
    explanation: {
      intro: 'La probabilità condizionata $P(A \\mid B)$ risponde alla domanda: "Quanto è probabile $A$ se sappiamo già che $B$ si è verificato?" La conoscenza di $B$ cambia la probabilità — lo spazio campionario si restringe ai casi in cui vale $B$:',
      multiplication_rule: 'La regola della moltiplicazione segue direttamente dalla definizione: se vuoi calcolare la probabilità di "$A$ e $B$ contemporaneamente", moltiplichi $P(B)$ per la probabilità condizionata $P(A \\mid B)$:',
      amir_tip: 'Nel mio codice di raccomandazione uso costantemente probabilità condizionate: $P(\\text{like}_Y \\mid \\text{like}_X)$ — la probabilità che a un utente piaccia la canzone $Y$, dato che ha messo like alla canzone $X$. Questo è il cuore di ogni Collaborative Filter!',
      bayes: 'Il teorema di Bayes è la magia: inverte la direzione. Se conosci $P(B \\mid A)$ ma ti serve $P(A \\mid B)$, Bayes ti dà la soluzione. La formula sembra complicata, ma il nucleo è semplice: pesi con la probabilità di base (Prior):',
      total_probability: 'Per il denominatore nel teorema di Bayes ti serve spesso la probabilità totale. Essa scompone $P(B)$ in tutti i percorsi possibili attraverso cui $B$ può verificarsi — tramite $A$ o tramite $\\bar{A}$ (non-$A$):',
      independence: 'Due eventi sono stocasticamente indipendenti quando la conoscenza dell\'uno non cambia la probabilità dell\'altro. Formalmente: $P(A \\mid B) = P(A)$ — il verificarsi di $B$ non influenza $A$. Equivalentemente vale:',
    },
    concepts: {
      conditional_prob: { title: 'Probabilità condizionata', desc: '$P(A \\mid B)$ è la probabilità di $A$ sotto la condizione $B$. Si "zooma" nella parte dello spazio di probabilità in cui vale $B$, e poi si chiede di $A$. Importante: $P(A \\mid B) \\neq P(B \\mid A)$ — la direzione conta!' },
      bayes: { title: 'Teorema di Bayes', desc: 'La formula per invertire la direzione: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ è il Prior (conoscenza precedente), $P(A \\mid B)$ il Posterior (stima aggiornata dopo l\'osservazione di $B$). La statistica bayesiana è la base di filtri antispam e sistemi diagnostici.' },
      independence: { title: 'Indipendenza stocastica', desc: '$A$ e $B$ sono indipendenti se $P(A \\cap B) = P(A) \\cdot P(B)$. Significa: il verificarsi di $B$ non cambia nulla sulla probabilità di $A$. Attenzione: indipendenza NON è la stessa cosa di "nessuna intersezione" (disgiunti)!' },
    },
    examples: {
      medical_test: {
        title: 'Test medico — Base Rate Fallacy',
        context: 'Un test per una malattia è accurato al 99%. La malattia colpisce l\'1% della popolazione. Se il test è positivo — quanto è probabile essere davvero malati?',
        step1: 'Dati: $P(K) = 0{,}01$ (malattia), $P(+ \\mid K) = 0{,}99$ (sensibilità), $P(+ \\mid \\bar{K}) = 0{,}05$ (tasso di falsi positivi).',
        step2: 'Calcolare la probabilità totale di un risultato positivo — entrambi i percorsi (malato + sano):',
        step3: 'Applicare il teorema di Bayes — cercato $P(K \\mid +)$:',
        step4: 'Risultato: solo il 16{,}7% di probabilità di essere davvero malato — nonostante il 99% di accuratezza del test!',
        amir_comment: 'Questa è la Base Rate Fallacy! Il test è super accurato, ma poiché la malattia è così rara ($P(K) = 1\\%$), la maggior parte dei test positivi sono falsi positivi. Nel mondo ML questo significa: Precision e Recall non sono la stessa cosa!',
      },
      spam_filter: {
        title: 'Filtro antispam con Bayes',
        context: 'Il filtro email di Amir deve imparare: se un\'email contiene la parola "Vincita" — è spam?',
        step1: 'Dati: il 30% di tutte le email sono spam, l\'80% delle email spam contengono "Vincita", ma anche il 10% delle email normali:',
        step2: 'Probabilità totale che un\'email contenga "Vincita":',
        step3: 'Bayes: quanto è probabile lo spam se appare "Vincita"?',
        step4: 'Risultato: 77{,}4% — un\'email con "Vincita" è con alta probabilità spam:',
        amir_comment: 'Esattamente così funziona un Naive Bayes Classifier! Più parole aggiungi, più preciso diventa il filtro. DataPulse usa lo stesso principio: invece di parole analizziamo pattern di ascolto, invece di spam/non spam classifichiamo preferenze di genere.',
      },
    },
    realworld: {
      recommendation: { title: 'Raccomandazioni musicali di DataPulse', desc: 'Il Collaborative Filtering si basa su probabilità condizionate: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "Chi apprezza la canzone X, con quale probabilità apprezza anche la canzone Y?" Spotify, Netflix e DataPulse calcolano milioni di queste probabilità condizionate in tempo reale.' },
      weather: { title: 'Previsioni meteo', desc: 'I meteorologi aggiornano costantemente le previsioni con Bayes: $P(\\text{Pioggia} \\mid \\text{Nuvole, Pressione, Vento})$. Ogni nuova misurazione affina la previsione.' },
      fraud_detection: { title: 'Rilevamento frodi', desc: 'Il sistema di pagamento di Amir rileva transazioni sospette con Bayes: se scatta un allarme — quanto è probabile una frode reale? Come nel test medico: il tasso di base decide!' },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$ — direzione confusa',
        correct: 'Invertire la direzione è possibile solo con Bayes!',
        why: '$P(A \\mid B)$ e $P(B \\mid A)$ sono valori completamente diversi. Esempio: $P(\\text{bagnato} \\mid \\text{pioggia}) = 0{,}99$, ma $P(\\text{pioggia} \\mid \\text{bagnato}) \\ll 0{,}99$ — si può essere bagnati anche da un irrigatore. Il teorema di Bayes serve per invertire la direzione.',
        amir_warning: 'Vedo questo errore costantemente nelle code review! Qualcuno calcola $P(\\text{click} \\mid \\text{bought})$ e lo usa come $P(\\text{bought} \\mid \\text{click})$. Questo può rovinare completamente l\'algoritmo di raccomandazione. Bayes è obbligatorio!',
      },
      ignore_base_rate: {
        wrong: 'Ignorare il tasso di base (Base Rate Fallacy)',
        correct: 'Considerare sempre $P(A)$ — la probabilità a priori',
        why: 'Un test accurato al 99% sembra impressionante, ma se la malattia colpisce solo l\'1%, $P(K \\mid +) \\approx 16{,}7\\%$. Il basso tasso di base $P(K) = 0{,}01$ domina il risultato. Senza il Prior ottieni una stima completamente distorta.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn costruisce il backend per la nuova funzione di DataPulse: trovare canzoni simili. Ma come si misura la "somiglianza" tra canzoni, quando ogni canzone è descritta da dozzine di proprietà — tempo, energia, umore, strumentazione? "Immagina ogni canzone come un punto nello spazio", dice Amir. "Più vicini sono due punti, più simili sono le canzoni." Benvenuti nel mondo dei vettori.',
      challenge: 'Amir deve rappresentare le caratteristiche delle canzoni come vettori e calcolarne la somiglianza — con il prodotto scalare e l\'angolo tra vettori.',
      outro: 'Il motore di raccomandazione di DataPulse ora usa la Cosine Similarity: più piccolo è l\'angolo tra due vettori-canzone, più simili le canzoni. "Nel mondo ML i vettori sono ovunque — Word Embeddings, Feature Spaces, reti neurali. Tutto è algebra lineare", dice Amir entusiasta a Yara.',
    },
    objectives: {
      vectors_2d_3d: 'Scrivere vettori in $\\mathbb{R}^2$ e $\\mathbb{R}^3$ come colonne e interpretarli geometricamente',
      vector_operations: 'Padroneggiare addizione vettoriale e moltiplicazione per scalare',
      scalar_product: 'Calcolare il prodotto scalare e interpretarlo geometricamente',
      angle_between_vectors: 'Determinare l\'angolo tra due vettori con la formula del coseno',
    },
    explanation: {
      intro: 'Un vettore descrive uno spostamento nello spazio — o più in generale: un elenco ordinato di numeri. In $\\mathbb{R}^3$ un vettore ha tre componenti che scrivi come colonna. Nell\'analisi dei dati i vettori possono avere anche 50 o 500 dimensioni — il principio resta lo stesso:',
      addition: 'I vettori si sommano componente per componente — ogni riga per sé. Geometricamente attacchi il secondo vettore alla fine del primo (metodo punta-piede). Il risultato è il percorso diretto dall\'inizio alla fine:',
      amir_tip: 'Nel mio codice Python i vettori sono semplicemente array numpy. L\'addizione $\\vec{a} + \\vec{b}$ viene eseguita automaticamente elemento per elemento — np.array([3,4]) + np.array([-1,2]) dà np.array([2,6]). Esattamente come in matematica!',
      scalar_product: 'Il prodotto scalare (o prodotto interno) di due vettori dà un singolo numero — non un vettore! Moltiplichi le componenti a coppie e sommi tutto. Il risultato ti dice quanto i vettori "puntano nella stessa direzione":',
      length: 'La lunghezza (il modulo) di un vettore si calcola con il teorema di Pitagora — esteso a tre dimensioni. Nel caso 2D è il noto $\\sqrt{x^2 + y^2}$, nel 3D si aggiunge $z^2$:',
      angle: 'L\'applicazione più importante del prodotto scalare: l\'angolo tra due vettori. La formula collega il prodotto scalare algebrico con l\'interpretazione geometrica. Questo angolo è nel mondo ML la misura standard di somiglianza nota come "Cosine Similarity":',
    },
    concepts: {
      vector: { title: 'Vettore', desc: 'Un elenco ordinato di numeri scritto come colonna. In $\\mathbb{R}^2$ un vettore ha 2 componenti, in $\\mathbb{R}^3$ tre. Geometricamente è una freccia con direzione e lunghezza. Nell\'analisi dei dati un vettore rappresenta un oggetto con le sue proprietà — es. una canzone con tempo, energia e umore.' },
      scalar_product: { title: 'Prodotto scalare', desc: 'Due vettori dentro, un numero fuori: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometricamente vale: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Se il prodotto scalare è zero, i vettori sono perpendicolari (ortogonali).' },
      vector_length: { title: 'Modulo di un vettore', desc: 'La lunghezza $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — Pitagora generalizzato. Un vettore con modulo 1 si chiama versore. Nel mondo ML si normalizzano spesso i vettori a lunghezza 1 per confrontare solo la direzione.' },
    },
    examples: {
      force_addition: {
        title: 'Sommare forze come vettori',
        context: 'Due forze agiscono su un oggetto — Amir calcola la forza risultante totale.',
        step1: 'Le due forze date come vettori 2D:',
        step2: 'Sommare componente per componente — ogni riga singolarmente:',
        step3: 'Calcolare il modulo della forza totale (Pitagora):',
        step4: 'Risultato — la forza totale è circa $6{,}32\\,\\text{N}$:',
        amir_comment: 'Lo stesso principio lo usiamo a DataPulse: invece di forze sommiamo vettori di feature. Se un utente apprezza due generi, il vettore di gusto combinato è la somma — così troviamo canzoni che si adattano a entrambi i generi!',
      },
      angle_vectors: {
        title: 'Angolo tra vettori-canzone',
        context: 'Amir confronta due canzoni: la canzone A ha il vettore feature $(1, 2, 3)$ e la canzone B $(4, -1, 2)$. Quanto sono simili?',
        step1: 'I vettori feature delle due canzoni:',
        step2: 'Calcolare il prodotto scalare — moltiplicare le componenti a coppie e sommare:',
        step3: 'Calcolare i moduli di entrambi i vettori:',
        step4: 'Applicare la formula del coseno — l\'angolo è circa $62{,}2°$:',
        amir_comment: 'Un angolo di $62{,}2°$ significa: le canzoni sono parzialmente simili, ma non estremamente. A $0°$ sarebbero identiche (stesse proporzioni), a $90°$ completamente diverse. Nel mio codice: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))',
      },
    },
    realworld: {
      embeddings: { title: 'Word Embeddings e Song Embeddings', desc: 'Nel mondo ML parole, canzoni e immagini sono rappresentate come vettori ad alta dimensione (Embeddings). La Cosine Similarity $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ misura la loro somiglianza. Un esempio famoso: "Re" $-$ "Uomo" $+$ "Donna" $\\approx$ "Regina" — aritmetica vettoriale con significati di parole!' },
      navigation: { title: 'Navigazione e robotica', desc: 'I sistemi di navigazione e i robot usano vettori per posizione e movimento. Il vettore posizione dice "Dove sono?", il vettore velocità "Dove e quanto veloce?". L\'addizione vettoriale calcola la nuova posizione dopo un movimento.' },
      game_physics: { title: 'Fisica nei giochi e simulazioni', desc: 'In giochi come Fortnite o Minecraft la fisica si calcola con vettori: $\\vec{v}_{\\text{nuova}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Velocità, accelerazione e gravità — tutto vettori! Senza calcolo vettoriale nessuna palla volerebbe correttamente.' },
    },
    mistakes: {
      scalar_vs_cross: {
        wrong: 'Il prodotto scalare dà un vettore',
        correct: 'Il prodotto scalare dà un NUMERO ($\\in \\mathbb{R}$)',
        why: 'Nel prodotto scalare moltiplichi componente per componente e SOMMI — il risultato è un singolo numero, non un vettore. Non confonderlo con il prodotto vettoriale (che effettivamente dà un vettore, ma viene dopo).',
        amir_warning: 'In numpy: np.dot(a, b) restituisce un numero, np.cross(a, b) restituisce un vettore. Se il tuo punteggio di somiglianza è improvvisamente un array invece di un numero, hai usato il prodotto sbagliato!',
      },
      length_sum: {
        wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — componenti semplicemente sommate',
        correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — applicare Pitagora!',
        why: 'La lunghezza di un vettore è la distanza euclidea dall\'origine — e segue il teorema di Pitagora. Sommare semplicemente le componenti sarebbe la distanza Manhattan (anch\'essa utile, ma qualcosa di diverso!).',
      },
    },
  },
};
