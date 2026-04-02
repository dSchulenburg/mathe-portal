export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai affronta il problema finale di bilanciamento di "Hafenlichter 3D": i drop del loot devono sembrare equi ma comunque emozionanti. Se ogni boss droppa esattamente la stessa quantita di oro, e noioso — troppa varianza e i giocatori si lamentano dell\'ingiustizia. "Mi serve una distribuzione che sembri naturale — molti valori vicini alla media, pochi estremi", dice Kai alla sua collega Priya. La risposta dalla lezione di statistica: la distribuzione normale con la sua perfetta curva a campana.',
      challenge: 'Kai deve calibrare il sistema di loot e prestazioni di "Hafenlichter 3D" in modo che le ricompense siano distribuite equamente e i tempi dei frame restino sotto la soglia critica — la distribuzione normale e le regole sigma forniscono lo strumento.',
      outro: 'Con la distribuzione normale Kai ha costruito un elegante sistema di bilanciamento: i drop del loot seguono una curva a campana attorno al valore target, e le regole sigma garantiscono che i valori estremi siano estremamente rari. "La cosa bella e: posso ora calcolare esattamente quale percentuale di giocatori sperimenta un certo valore di drop", spiega al team.',
    },
    objectives: {
      bell_curve: 'Comprendere la distribuzione normale $N(\\mu, \\sigma^2)$ come distribuzione continua con curva a campana e interpretarne i parametri',
      sigma_rules: 'Applicare le regole sigma ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) per stime rapide delle probabilita',
      z_transformation: 'Eseguire la trasformazione $z$ e calcolare le probabilita con la distribuzione normale standard $\\Phi(z)$',
      central_limit_theorem: 'Conoscere il Teorema del Limite Centrale e spiegare perche la distribuzione normale appare ovunque',
    },
    explanation: {
      intro: 'La distribuzione normale e la piu importante distribuzione continua della statistica — e la incontri ovunque: altezze corporee, valori di misurazione, tempi dei frame, risultati degli esami. La sua densita ha l\'iconica forma a campana, simmetrica attorno al valore atteso $\\mu$. La deviazione standard $\\sigma$ determina quanto e larga o stretta la campana:',
      sigma_rules: 'Le regole sigma sono il tuo strumento rapido: ti dicono immediatamente quale percentuale di tutti i valori si trova in un certo intervallo attorno a $\\mu$ — senza tabelle, senza calcolatrice. Entro $\\pm 1\\sigma$ si trova circa il $68{,}3\\%$, entro $\\pm 2\\sigma$ circa il $95{,}4\\%$ e entro $\\pm 3\\sigma$ quasi tutto — il $99{,}7\\%$:',
      kai_tip: 'Nello sviluppo di giochi uso le regole sigma quotidianamente per il bilanciamento. Se voglio che il 95% dei drop del loot cada tra 30 e 70 oro, imposto $\\mu = 50$ e $2\\sigma = 20$, cioe $\\sigma = 10$. Fatto!',
      z_transformation: 'Ma cosa fare se ti serve una probabilita esatta — non solo le regole sigma? Allora entra in gioco la trasformazione $z$: converti il tuo valore $x$ in un valore $z$ standardizzato e consulti la tabella della distribuzione normale standard $\\Phi(z)$:',
      central_limit: 'Perche la distribuzione normale e cosi onnipresente? Il Teorema del Limite Centrale da la risposta: se sommi abbastanza variabili casuali indipendenti, la loro somma — indipendentemente dalle distribuzioni individuali — si avvicina a una distribuzione normale:',
    },
    concepts: {
      normal_distribution: { title: 'Distribuzione normale $N(\\mu, \\sigma^2)$', desc: 'La distribuzione continua con densita a forma di campana. $\\mu$ e il valore atteso (centro della campana), $\\sigma^2$ la varianza (larghezza della campana). L\'area sotto la curva e sempre 1. Simmetrica attorno a $\\mu$: mediana = moda = valore atteso.' },
      sigma_rules: { title: 'Regole sigma', desc: 'Le tre regole d\'oro: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Indispensabili per stime rapide.' },
      z_transformation: { title: 'Trasformazione $z$', desc: 'Trasforma qualsiasi distribuzione normale nella distribuzione normale standard $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Poi leggi $P(X \\leq x) = \\Phi(z)$ dalla tabella. Cosi distribuzioni normali diverse diventano confrontabili.' },
    },
    examples: {
      loot_balancing: { title: 'Probabilita del drop del loot', context: 'In "Hafenlichter 3D" i boss droppano oro, distribuito normalmente con $\\mu = 50$ e $\\sigma = 8$. Kai vuole sapere: quanto e probabile un drop leggendario di almeno 70 oro?', step1: 'Modello — i drop dell\'oro seguono una distribuzione normale:', step2: 'Trasformazione $z$ — quante deviazioni standard separa 70 da 50?', step3: 'Consultare la tabella — leggere $\\Phi(2{,}5)$:', step4: 'Probabilita complementare — solo lo $0{,}6\\%$ ottiene 70+ oro:', kai_comment: 'Perfetto! Un drop leggendario per meno dell\'1% dei giocatori — si sente speciale senza essere ingiusto. La distribuzione normale mi da il controllo totale sulla rarita.' },
      frame_times: { title: 'Analisi dei tempi dei frame', context: 'A 60 FPS ogni frame deve essere renderizzato in $16{,}7\\,\\text{ms}$. Il profiler di Kai mostra: i tempi dei frame sono distribuiti normalmente con $\\mu = 16{,}7\\,\\text{ms}$ e $\\sigma = 2{,}1\\,\\text{ms}$. Quanto spesso il gioco lagga (tempo frame $> 20\\,\\text{ms}$)?', step1: 'Modello — tempi dei frame come distribuzione normale:', step2: 'Trasformazione $z$ per la soglia di lag $x = 20$:', step3: 'Leggere il valore dalla tabella:', step4: 'Probabilita complementare — circa ogni 17esimo frame lagga:', kai_comment: 'Quasi il 6% di lag — troppo per un gioco 3D fluido. Devo ottimizzare il renderer finche $\\sigma$ diventa piu piccolo. Obiettivo: $\\sigma \\leq 1{,}5$, cosi meno dell\'1,5% dei frame e colpito.' },
    },
    realworld: {
      quality_control: { title: 'Controllo qualita nell\'industria', desc: 'Le fabbriche usano la regola $3\\sigma$: se un componente devia piu di $3\\sigma$ dal valore target, viene scartato. Il management Six Sigma va ancora oltre — $6\\sigma$ significa massimo 3,4 difetti per milione di pezzi.' },
      iq_scores: { title: 'Test del QI e standardizzazione', desc: 'I valori del QI sono per definizione distribuiti normalmente con $\\mu = 100$ e $\\sigma = 15$. Circa il $68\\%$ della popolazione ha un QI tra 85 e 115.' },
      stock_returns: { title: 'Rendimenti azionari e rischio', desc: 'I rendimenti giornalieri delle azioni sono spesso modellati come distribuiti normalmente — $\\sigma$ e allora il rischio. I gestori di portafoglio usano la trasformazione $z$ per calcolare la probabilita di un crash.' },
    },
    mistakes: {
      sigma_vs_variance: { wrong: 'Distribuzione normale notata con $N(\\mu, \\sigma)$ — deviazione standard invece di varianza', correct: 'Corretto e $N(\\mu, \\sigma^2)$ — il secondo parametro e sempre la varianza', why: 'Nella notazione $N(\\mu, \\sigma^2)$ il secondo parametro rappresenta la varianza $\\sigma^2$, non la deviazione standard $\\sigma$. Confusioni portano a probabilita completamente errate.', kai_warning: 'Questo errore mi ha distrutto il bilanciamento del loot. Intendevo $\\sigma = 8$, ma ho scritto $N(50, 8)$ — che significa $\\sigma = \\sqrt{8} \\approx 2{,}83$. I drop erano troppo uniformi!' },
      z_sign: { wrong: 'Formula $z$ al contrario: $z = \\frac{\\mu - x}{\\sigma}$', correct: 'Corretto e $z = \\frac{x - \\mu}{\\sigma}$ — valore meno valore atteso, non viceversa', why: 'Se scambi numeratore e denominatore, ottieni il segno sbagliato. Un valore sopra la media deve dare un $z$ positivo, uno sotto un $z$ negativo.' },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai e arrivato al cuore di "Hafenlichter 3D": il motore 3D. Ogni oggetto nel gioco — ogni nave, ogni onda, ogni lanterna al porto — deve poter essere ruotato, scalato e spostato. "In 2D le trasformazioni erano semplici formule", ricorda gli inizi di Mia. "Ma in 3D ti serve un sistema che concateni un numero qualsiasi di trasformazioni — e queste sono le matrici."',
      challenge: 'Kai deve comprendere e implementare le trasformazioni 3D per il suo motore di gioco — rotazione, scalatura e processi di transizione, tutto controllato dalla moltiplicazione di matrici.',
      outro: 'Le matrici sono diventate lo strumento quotidiano di Kai: ogni trasformazione 3D e una matrice, ogni animazione una sequenza di moltiplicazioni di matrici. "Il geniale e: non importa quanto sia complessa la trasformazione — alla fine e sempre $\\vec{x}\' = M \\cdot \\vec{x}$", dice.',
    },
    objectives: {
      matrix_operations: 'Sommare e moltiplicare matrici e applicare con sicurezza le regole di calcolo — in particolare la non-commutativita',
      transformation_matrices: 'Costruire matrici di trasformazione per rotazione, scalatura e riflessione e applicarle a vettori',
      stochastic_matrices: 'Calcolare matrici stocastiche e vettori fissi per processi di transizione',
      inverse_matrix: 'Determinare la matrice inversa e comprendere il suo significato come "trasformazione inversa"',
    },
    explanation: {
      intro: 'Le matrici sono tabelle rettangolari di numeri — ma la loro vera forza sta nel rappresentare trasformazioni. Una matrice $2 \\times 2$ trasforma vettori 2D, una $3 \\times 3$ vettori 3D. Moltiplicazione significa: riga per colonna, poi sommare:',
      transformation: 'Nella grafica 3D ogni trasformazione geometrica e una matrice: rotazione, scalatura, riflessione. La matrice di rotazione attorno all\'asse $z$ ruota un punto $(x, y, z)$ dell\'angolo $\\theta$:',
      kai_tip: 'Nella mia engine concateno trasformazioni tramite moltiplicazione di matrici: prima scalare, poi ruotare, poi traslare. L\'ordine e decisivo — le matrici non sono commutative! Prima ruotare poi traslare da un risultato completamente diverso da prima traslare poi ruotare.',
      stochastic: 'Le matrici stocastiche descrivono processi di transizione: quanto e probabile passare da uno stato a un altro? Ogni colonna somma a 1:',
      inverse: 'La matrice inversa $A^{-1}$ e il "tasto annulla": $A \\cdot A^{-1} = I$ (matrice identita). Se $A$ e una rotazione di $30°$, allora $A^{-1}$ e la rotazione di $-30°$:',
    },
    concepts: {
      matrix_multiplication: { title: 'Moltiplicazione di matrici', desc: 'Riga per colonna: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. Il numero di colonne di $A$ deve essere uguale al numero di righe di $B$. Importante: $A \\cdot B \\neq B \\cdot A$ in generale!' },
      transformation_matrix: { title: 'Matrice di trasformazione', desc: 'Ogni trasformazione lineare (rotazione, scalatura, riflessione) puo essere rappresentata come matrice. Piu trasformazioni vengono concatenate tramite moltiplicazione di matrici — lette da destra a sinistra.' },
      stochastic_matrix: { title: 'Matrice stocastica e vettore fisso', desc: 'Una matrice stocastica ha in ogni colonna la somma 1 — descrive probabilita di transizione. Il vettore fisso $\\vec{v}_{\\text{fix}}$ con $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ e lo stato di equilibrio a lungo termine.' },
    },
    examples: {
      '3d_rotation': { title: 'Rotazione 3D di una lanterna del porto', context: 'Kai vuole ruotare una lanterna nel porto di $90°$ attorno all\'asse $z$. La lanterna si trova nel punto $(3, 0, 5)$.', step1: 'Costruire la matrice di rotazione per $90°$ attorno all\'asse $z$ ($\\cos 90° = 0$, $\\sin 90° = 1$):', step2: 'Scrivere il vettore posizione della lanterna come vettore colonna:', step3: 'Matrice per vettore — moltiplicare riga per riga:', step4: 'Risultato: la lanterna si trova ora in $(0, 3, 5)$ — ruotata di $90°$ nel piano $xy$, $z$ invariato:', kai_comment: 'Esattamente cosi funziona ogni frame nella mia engine: migliaia di vertici vengono moltiplicati per la matrice Model, poi la View, poi la Projection. Tre moltiplicazioni di matrici per vertice — e la GPU lo fa in millisecondi!' },
      player_states: { title: 'Comportamento dei giocatori come catena di Markov', context: 'In "Hafenlichter 3D" i giocatori alternano tra Esplorare (E) e Combattere (K). Kai ha osservato: chi esplora resta al $70\\%$ nell\'esplorazione e passa al $30\\%$ al combattimento. Chi combatte resta all\'$80\\%$ in combattimento e torna al $20\\%$ all\'esplorazione. Attualmente il $60\\%$ dei giocatori esplora.', step1: 'Costruire la matrice di transizione $T$ e il vettore iniziale $\\vec{v}_0$:', step2: 'Calcolare un passo — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:', step3: 'Determinare il vettore fisso — risolvere il sistema $T \\cdot \\vec{v} = \\vec{v}$ con $x + y = 1$:', step4: 'A lungo termine il $40\\%$ esplora e il $60\\%$ combatte — indipendentemente dallo stato iniziale:', kai_comment: 'Questo e oro per il mio game design! Il vettore fisso mi mostra che a lungo termine i giocatori combattono piu di quanto esplorino. Se voglio un equilibrio migliore, devo cambiare le probabilita di transizione.' },
    },
    realworld: {
      computer_graphics: { title: 'Computer grafica e motori 3D', desc: 'Ogni motore 3D (Unity, Unreal, Godot) si basa sulla moltiplicazione di matrici. La pipeline MVP — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — trasforma ogni punto 3D sullo schermo 2D. Le GPU moderne sono fondamentalmente macchine massive di moltiplicazione di matrici.' },
      google_pagerank: { title: 'Google PageRank', desc: 'L\'algoritmo di ricerca originale di Google modella il web come un\'enorme matrice stocastica: ogni pagina e uno stato, ogni link una probabilita di transizione. Il vettore fisso $\\vec{r} = T \\cdot \\vec{r}$ determina il ranking.' },
      robotics: { title: 'Robotica e controllo macchine', desc: 'I bracci robotici consistono in giunture che eseguono ciascuna una rotazione. La posizione complessiva della mano risulta come prodotto di tutte le matrici di rotazione lungo il braccio.' },
    },
    mistakes: {
      commutative: { wrong: 'Moltiplicazione di matrici trattata come moltiplicazione di numeri: $A \\cdot B = B \\cdot A$', correct: 'Le matrici NON sono commutative: $A \\cdot B \\neq B \\cdot A$ in generale', why: 'Prima ruotare poi traslare da un risultato diverso da prima traslare poi ruotare. Per questo: catene di trasformazione sempre lette da destra a sinistra!', kai_warning: 'Ho cercato un bug per un giorno intero perche avevo scambiato rotazione e traslazione. Le mie navi giravano attorno al centro del mondo invece che attorno al proprio asse!' },
      stochastic_rows_cols: { wrong: 'Somma delle righe = 1 assunta per matrici stocastiche con vettori colonna', correct: 'Con vettori colonna deve valere la somma delle colonne = 1: $\\sum_i t_{ij} = 1$', why: 'La convenzione dipende dall\'uso di vettori riga o colonna. A scuola il vettore colonna e standard — allora le colonne della matrice di transizione devono avere somma 1.' },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'E la notte del rilascio al porto di Amburgo. Le luci dei pontili si riflettono nell\'acqua, e sul grande schermo davanti al mercato del pesce brilla il titolo: "Hafenlichter 3D". Kai e sul palco, il microfono in mano, e non riesce a crederci — tre anni di sviluppo, e ora il gioco e finalmente pronto.',
      challenge: 'La prova piu grande e imminente — l\'esame di maturita unisce analisi, geometria analitica e statistica in un unico compito. Kai ha bisogno di una strategia che colleghi tutti gli argomenti, massimizzi i punti e eviti gli errori tipici.',
      outro: 'La festa del rilascio al porto e in pieno svolgimento, la musica suona, e Kai, Mia e Amir brindano. "Tre anni di matematica", dice Mia, "dalla retta alla distribuzione normale." La matematica non e mai stata solo calcolo. Era il linguaggio con cui hanno reso reali le loro idee.',
    },
    objectives: {
      exam_strategy: 'Sviluppare una chiara strategia d\'esame: esaminare gli esercizi, calcolare il rapporto punti-tempo, esercizi facili prima',
      cross_topic_connections: 'Riconoscere e sfruttare le connessioni tra analisi, geometria analitica e statistica',
      time_management: 'Pianificare realisticamente e rispettare il budget di tempo per esercizio',
      error_prevention: 'Riconoscere errori tipici, eseguire controlli di plausibilita e interpretare i risultati nel contesto',
    },
    explanation: {
      intro: 'L\'esame di maturita non e uno sprint ma un gioco strategico — come un boss finale con diverse fasi. Hai circa 4-5 ore per tre grandi blocchi tematici. La chiave non e sapere tutto, ma dare priorita con intelligenza e lavorare con precisione.',
      kai_rallying: 'Ragazzi, abbiamo fatto matematica per tre anni — non perche dovevamo, ma perche era la chiave dei nostri progetti. Mia ha iniziato con le funzioni, Amir ha allenato la sua IA con la statistica, e io ho costruito un mondo 3D con le matrici. L\'esame e solo i titoli di coda dopo il boss finale. Siamo pronti!',
      structure: 'Il compito consiste tipicamente di tre parti obbligatorie — analisi (spesso il blocco piu grande), geometria analitica e statistica.',
      time_strategy: 'Pianifica il tuo tempo proporzionalmente ai punti. Se un esercizio vale 10 su 100 punti, investi circa il $10\\%$ del tuo tempo. E la regola d\'oro: inizia con gli esercizi di cui sei sicuro.',
      mia_wisdom: 'Ricordatevi delle basi! L\'analisi di funzioni e sempre lo stesso schema: dominio, zeri, estremi, punti di flesso, comportamento per $x \\to \\pm\\infty$. Se conosci lo schema, ogni funzione e solo una variazione.',
      checking: 'Dopo ogni sotto-esercizio: controllo di plausibilita! Le unita sono giuste? I segni hanno senso? Il risultato e in un intervallo realistico?',
      amir_data: 'Controllo sempre i miei risultati contro i casi limite: cosa succede per $x = 0$? Per $x$ molto grande? La mia soluzione converge o diverge?',
      confidence: 'La cosa piu importante alla fine: sai piu di quanto pensi. Tre anni di pratica sono nelle tue mani. Se in esame non vai avanti per un momento — respira, rileggi l\'esercizio e inizia con cio che sai fare con sicurezza.',
    },
    concepts: {
      read_then_plan: { title: 'Leggere → Pianificare → Calcolare → Verificare', desc: 'Lo schema in 4 passi per ogni esercizio: (1) leggere completamente, evidenziare le informazioni. (2) pianificare la strategia risolutiva. (3) calcolare in modo ordinato. (4) verificare: unita, segni, plausibilita, contesto.' },
      point_maximizing: { title: 'Efficienza dei punti', desc: 'Non ogni esercizio e ugualmente difficile per punto. Inizia con gli esercizi dove prendi il maggior numero di punti nel minor tempo. Le ultime parti sono spesso le piu difficili — meglio prima raccogliere tutti i punti "facili" in tutti gli esercizi.' },
      plausibility_check: { title: 'Controllo di plausibilita', desc: 'Quattro controlli rapidi che prevengono errori di distrazione: (1) Unita: l\'unita si adatta al contesto? (2) Segni: un valore negativo ha senso qui? (3) Limiti: cosa succede per $x \\to 0$ o $x \\to \\infty$? (4) Schizzo: il risultato corrisponde all\'immagine grafica?' },
    },
    examples: {
      mixed_analysis: { title: 'Tipico esercizio di analisi: analisi della curva + integrale', context: 'Kai modella il consumo energetico del suo motore 3D con $f(x) = (2x - 1) \\cdot e^{-x}$. Determina gli estremi e calcola l\'area tra grafico e asse $x$ su $[0;\\, 3]$.', step1: 'Funzione data — gia fornita:', step2: 'Derivata con regola del prodotto:', step3: 'Trovare gli estremi:', step4: 'Calcolo dell\'area:', mia_comment: 'Questo e esattamente lo schema che intendo: derivata con regola del prodotto, trovare lo zero, calcolare l\'integrale. La funzione cambia, ma la strategia resta sempre la stessa.' },
      mixed_stochastik: { title: 'Tipico esercizio di statistica: test di ipotesi', context: 'L\'A/B test di Amir mostra: di 50 utenti normalmente l\'$8\\%$ clicca sul nuovo pulsante. Dopo un redesign vuole testare se il tasso di clic e aumentato ($\\alpha = 5\\%$).', step1: 'Costruire il modello — distribuzione binomiale:', step2: 'Formulare le ipotesi — test unilaterale verso l\'alto:', step3: 'Testare la regione critica:', step4: 'Determinare la regione di rifiuto:', amir_comment: 'I test di ipotesi sono fondamentalmente logica decisionale: calcoli quanto improbabile e il tuo risultato sotto $H_0$. Se e piu improbabile di $\\alpha$, scarti $H_0$.' },
    },
    realworld: {
      release_day: { title: 'Giorno del rilascio: quando tutto si unisce', desc: 'Rilasciare un gioco e come un esame: mesi di preparazione sfociano in un momento decisivo. "Hafenlichter 3D" di Kai unisce le basi 2D (Mia), l\'analisi dei dati (Amir) e la matematica 3D (Kai) — esattamente come la maturita unisce analisi, geometria e statistica.' },
      project_management: { title: 'Gestione progetti e priorita', desc: 'Nello sviluppo software si danno priorita alle feature per impatto e sforzo — esattamente come gli esercizi d\'esame per punti e difficolta.' },
      lifelong_learning: { title: 'Apprendimento permanente', desc: 'L\'esame di maturita non e la fine ma l\'inizio. La capacita di padroneggiare nuovi argomenti e piu preziosa di qualsiasi singola formula. La matematica vi ha insegnato a pensare.' },
    },
    mistakes: {
      no_units_context: { wrong: 'Risultato senza unita e senza contesto: "$A = 12{,}5$"', correct: 'Sempre unita e interpretazione: "$A = 12{,}5\\,\\text{FE}$, corrispondente a $12{,}5\\,\\text{m}^2$"', why: 'All\'esame ci sono punti per l\'interpretazione nel contesto! Un risultato nudo senza unita o riferimento alla domanda costa punti facili.', kai_warning: 'Nello sviluppo di giochi i numeri senza contesto non hanno valore. 12,5 — cosa? Pixel? Secondi? Punti danno? Uguale nel compito: scrivi l\'unita e formula una frase di risposta.' },
      skip_plausibility: { wrong: 'Non mettere in dubbio un risultato ovviamente sbagliato: $P(X = 5) = 1{,}3$', correct: 'Insospettirsi subito: una probabilita non puo mai essere maggiore di 1!', why: 'I controlli di plausibilita costano 10 secondi ma possono salvare interi esercizi. Le probabilita stanno sempre tra 0 e 1, le aree non sono mai negative, $e^x > 0$ per ogni $x$.', mia_warning: 'Nell\'ultimo compito ho trovato esattamente un errore cosi: il mio integrale era negativo anche se la funzione era positiva su tutto l\'intervallo. Controllo rapido, errore di segno scoperto, corretto — 4 punti salvati.' },
    },
  },
};
