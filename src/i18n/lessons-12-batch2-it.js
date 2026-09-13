export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai è alle prese con il problema finale di bilanciamento di "Hafenlichter 3D": i drop del loot devono sembrare equi, ma restare comunque emozionanti. Se ogni boss lascia cadere esattamente la stessa quantità di oro, diventa noioso — con troppa varianza, invece, i giocatori si lamentano dell\'ingiustizia. "Mi serve una distribuzione che sembri naturale — molti valori vicini alla media, pochi valori estremi", dice Kai alla sua collega Priya. La risposta arriva dalla lezione di statistica: la distribuzione normale con la sua perfetta curva a campana.',
      challenge: 'Kai deve calibrare il sistema di loot e di prestazioni di "Hafenlichter 3D" in modo che le ricompense siano distribuite in modo equo e che i tempi dei frame restino sotto la soglia critica — la distribuzione normale e le sue regole sigma forniscono lo strumento giusto.',
      outro: 'Con la distribuzione normale Kai ha costruito un elegante sistema di bilanciamento: i drop del loot seguono una curva a campana attorno al valore obiettivo, e le regole sigma garantiscono che i valori anomali siano estremamente rari. "La cosa bella è che ora posso calcolare esattamente quale percentuale di giocatori riceve un certo valore di drop", spiega al team. E con la trasformazione $z$ confronta metriche completamente diverse — tempi dei frame, distribuzione dei danni, durata delle partite — su una scala unica. La curva a campana è ovunque.',
    },
    objectives: {
      bell_curve: 'Comprendere la distribuzione normale $N(\\mu, \\sigma^2)$ come distribuzione continua con curva a campana e interpretarne i parametri',
      sigma_rules: 'Applicare le regole sigma ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) per stimare rapidamente le probabilità',
      z_transformation: 'Eseguire la trasformazione $z$ e calcolare le probabilità con la distribuzione normale standard $\\Phi(z)$',
      central_limit_theorem: 'Conoscere il teorema del limite centrale e spiegare perché la distribuzione normale compare ovunque',
    },
    explanation: {
      intro: 'La distribuzione normale è la distribuzione continua più importante della statistica — e la incontri ovunque: nelle altezze delle persone, nei valori misurati, nei tempi dei frame, nei risultati degli esami. La sua densità ha l\'iconica forma a campana, simmetrica attorno al valore atteso $\\mu$. La deviazione standard $\\sigma$ determina quanto la campana è larga o stretta: $\\sigma$ piccola = campana stretta e alta (poca dispersione), $\\sigma$ grande = campana larga e piatta (molta dispersione). La funzione di densità è:',
      sigma_rules: 'Le regole sigma sono il tuo strumento rapido: ti dicono subito quale percentuale di tutti i valori si trova in un certo intervallo attorno a $\\mu$ — senza tabella, senza calcolatrice. Entro $\\pm 1\\sigma$ si trova circa il $68{,}3\\%$, entro $\\pm 2\\sigma$ circa il $95{,}4\\%$ ed entro $\\pm 3\\sigma$ quasi tutto — il $99{,}7\\%$. Questo significa: i valori oltre $3\\sigma$ sono estremamente rari!',
      kai_tip: 'Nello sviluppo di videogiochi uso le regole sigma ogni giorno per il bilanciamento. Se voglio che il 95% dei drop del loot stia tra 30 e 70 monete d\'oro, imposto $\\mu = 50$ e $2\\sigma = 20$, quindi $\\sigma = 10$. Fatto! Le regole mi danno subito la distribuzione, senza dover integrare nulla.',
      z_transformation: 'Ma cosa succede se ti serve una probabilità esatta — non solo le regole sigma? Allora entra in gioco la trasformazione $z$: converti il tuo valore $x$ in un valore $z$ standardizzato e lo cerchi nella tabella della distribuzione normale standard $\\Phi(z)$. Il valore $z$ ti dice di quante deviazioni standard $x$ si discosta dal valore atteso:',
      central_limit: 'Perché la distribuzione normale è così onnipresente? Il teorema del limite centrale dà la risposta: se sommi un numero sufficiente di variabili aleatorie indipendenti, la loro somma si avvicina a una distribuzione normale — indipendentemente dall\'aspetto delle singole distribuzioni. Per questo le medie sono quasi sempre distribuite normalmente, anche quando i singoli dati non lo sono:',
    },
    concepts: {
      normal_distribution: {
        title: 'Distribuzione normale $N(\\mu, \\sigma^2)$',
        desc: 'La distribuzione continua con densità a forma di campana. $\\mu$ è il valore atteso (centro della campana), $\\sigma^2$ la varianza (larghezza della campana). L\'area sotto la curva è sempre 1. Simmetrica attorno a $\\mu$: mediana = moda = valore atteso.',
      },
      sigma_rules: {
        title: 'Regole sigma',
        desc: 'Le tre regole d\'oro: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Indispensabili per stime rapide.',
      },
      z_transformation: {
        title: 'Trasformazione $z$',
        desc: 'Trasforma qualsiasi distribuzione normale nella distribuzione normale standard $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Poi leggi $P(X \\leq x) = \\Phi(z)$ nella tabella. Così distribuzioni normali qualsiasi diventano confrontabili.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Probabilità di un drop del loot',
        context: 'In "Hafenlichter 3D" i boss lasciano cadere oro, distribuito normalmente con $\\mu = 50$ e $\\sigma = 8$. Kai vuole sapere: quanto è probabile un drop leggendario di almeno 70 monete d\'oro?',
        step1: 'Impostare il modello — i drop d\'oro seguono una distribuzione normale:',
        step2: 'Applicare la trasformazione $z$ — di quante deviazioni standard 70 si discosta da 50?',
        step3: 'Cercare nella tabella — leggere $\\Phi(2{,}5)$:',
        step4: 'Calcolare la probabilità complementare — solo lo $0{,}6\\%$ ottiene 70 o più monete d\'oro:',
        kai_comment: 'Perfetto! Un drop leggendario per meno dell\'1% dei giocatori — sembra qualcosa di speciale, senza essere ingiusto. La distribuzione normale mi dà il controllo totale sulla rarità.',
      },
      frame_times: {
        title: 'Analisi dei tempi dei frame',
        context: 'A 60 FPS ogni frame deve essere renderizzato in $16{,}7\\,\\text{ms}$. Il profiler di Kai mostra: i tempi dei frame sono distribuiti normalmente con $\\mu = 16{,}7\\,\\text{ms}$ e $\\sigma = 2{,}1\\,\\text{ms}$. Quanto spesso il gioco va a scatti (tempo del frame $> 20\\,\\text{ms}$)?',
        step1: 'Impostare il modello — tempi dei frame come distribuzione normale:',
        step2: 'La trasformazione $z$ per la soglia di lag $x = 20$:',
        step3: 'Leggere il valore nella tabella:',
        step4: 'Calcolare la probabilità complementare — circa un frame su 17 va a scatti:',
        kai_comment: 'Quasi il 6% di lag — è troppo per un gioco 3D fluido. Devo ottimizzare il renderer finché $\\sigma$ non diventa più piccola. Obiettivo: $\\sigma \\leq 1{,}5$, così meno dell\'1,5% dei frame è interessato.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Controllo qualità nell\'industria',
        desc: 'Le fabbriche usano la regola $3\\sigma$: se un componente si discosta dalla misura nominale di più di $3\\sigma$, viene scartato. La gestione Six Sigma va ancora oltre — $6\\sigma$ significa al massimo 3,4 difetti per milione di pezzi. La distribuzione normale è il fondamento della garanzia di qualità industriale.',
      },
      iq_scores: {
        title: 'Test del QI e standardizzazione',
        desc: 'I valori del QI sono per definizione distribuiti normalmente con $\\mu = 100$ e $\\sigma = 15$. Questo significa: circa il $68\\%$ della popolazione ha un QI tra 85 e 115, circa il $95\\%$ tra 70 e 130. Un QI di 145 ($z = 3$) è raro quanto un drop di 70 monete d\'oro!',
      },
      stock_returns: {
        title: 'Rendimenti azionari e rischio',
        desc: 'I rendimenti azionari giornalieri vengono spesso modellati come distribuiti normalmente — $\\sigma$ è allora il rischio. I gestori di portafoglio usano la trasformazione $z$ per calcolare quanto è probabile un crollo. Però: nella realtà i valori estremi si verificano più spesso di quanto preveda la distribuzione normale ("fat tails", code grasse).',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'Scrivere la distribuzione normale come $N(\\mu, \\sigma)$ — deviazione standard invece della varianza',
        correct: 'La forma corretta è $N(\\mu, \\sigma^2)$ — il secondo parametro è sempre la varianza',
        why: 'Nella notazione $N(\\mu, \\sigma^2)$ il secondo parametro indica la varianza $\\sigma^2$, non la deviazione standard $\\sigma$. Confonderle porta a probabilità completamente sbagliate — per esempio $N(0, 4)$ è una distribuzione con $\\sigma = 2$, non $\\sigma = 4$!',
        kai_warning: 'Questo errore una volta mi ha distrutto tutto il bilanciamento del loot. Intendevo $\\sigma = 8$, ma avevo scritto $N(50, 8)$ — questo significa $\\sigma = \\sqrt{8} \\approx 2{,}83$. I drop erano troppo uniformi! Ricordalo sempre: $N(\\mu, \\sigma^2)$!',
      },
      z_sign: {
        wrong: 'La formula di $z$ al contrario: $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'La forma corretta è $z = \\frac{x - \\mu}{\\sigma}$ — valore meno valore atteso, non il contrario',
        why: 'Se scambi i termini al numeratore, ottieni il segno sbagliato. Un valore sopra la media deve dare un $z$ positivo, un valore sotto la media uno negativo. Con $x = 70$, $\\mu = 50$ si ha $z = +2{,}5$ (sopra la media), non $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai è arrivato al cuore di "Hafenlichter 3D": il motore 3D. Ogni oggetto del gioco — ogni nave, ogni onda, ogni lanterna del porto — deve poter essere ruotato, scalato e spostato. "In 2D le trasformazioni erano semplici formule", ricorda pensando agli inizi di Mia. "Ma in 3D ti serve un sistema che concateni un numero qualsiasi di trasformazioni — e questo sistema sono le matrici." Kai apre il codice degli shader e vede matrici ovunque: matrice model, matrice view, matrice projection.',
      challenge: 'Kai deve capire e implementare le trasformazioni 3D per il suo motore di gioco — rotazione, scalatura e processi di transizione, tutto controllato dalla moltiplicazione tra matrici.',
      outro: 'Per Kai le matrici sono diventate uno strumento quotidiano: ogni trasformazione 3D è una matrice, ogni animazione una sequenza di moltiplicazioni tra matrici, ogni comportamento di transizione una matrice stocastica. "La cosa geniale è che, per quanto complessa sia la trasformazione, alla fine è sempre $\\vec{x}\' = M \\cdot \\vec{x}$", dice. La matrice MVP ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) trasforma ora migliaia di vertici di Hafenlichter per frame in pixel sullo schermo.',
    },
    objectives: {
      matrix_operations: 'Sommare e moltiplicare matrici e applicare con sicurezza le regole di calcolo — in particolare la non commutatività',
      transformation_matrices: 'Costruire matrici di trasformazione per rotazione, scalatura e simmetria e applicarle ai vettori',
      stochastic_matrices: 'Calcolare matrici stocastiche e vettori stazionari per processi di transizione',
      inverse_matrix: 'Determinare la matrice inversa e comprenderne il significato come "trasformazione all\'indietro"',
    },
    explanation: {
      intro: 'Le matrici sono tabelle rettangolari di numeri — ma la loro vera forza sta nel fatto che rappresentano applicazioni. Una matrice $2 \\times 2$ trasforma vettori 2D, una matrice $3 \\times 3$ trasforma vettori 3D. Moltiplicare significa: riga per colonna, poi sommare. Per $C = A \\cdot B$ vale:',
      transformation: 'Nella grafica 3D ogni trasformazione geometrica è una matrice: rotazione, scalatura, simmetria. La matrice di rotazione attorno all\'asse $z$ ruota un punto $(x, y, z)$ dell\'angolo $\\theta$ — e la coordinata $z$ resta invariata:',
      kai_tip: 'Nel mio motore concateno le trasformazioni con la moltiplicazione tra matrici: prima scalare, poi ruotare, poi spostare. L\'ordine è decisivo — le matrici non sono commutative! Prima ruotare e poi spostare dà qualcosa di completamente diverso che prima spostare e poi ruotare. Per questo leggo sempre le catene di matrici da destra a sinistra.',
      stochastic: 'Le matrici stocastiche descrivono processi di transizione: quanto è probabile passare da uno stato a un altro? Ogni colonna ha somma 1 (con vettori colonna). Se moltiplichi il vettore di stato $\\vec{v}_n$ per la matrice di transizione $T$, ottieni lo stato successivo $\\vec{v}_{n+1}$:',
      inverse: 'La matrice inversa $A^{-1}$ è il "tasto annulla": $A \\cdot A^{-1} = I$ (matrice identità). Se $A$ è una rotazione di $30°$, allora $A^{-1}$ è la rotazione di $-30°$. Non ogni matrice ha un\'inversa — solo se $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Moltiplicazione tra matrici',
        desc: 'Riga per colonna: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. Il numero di colonne di $A$ deve essere uguale al numero di righe di $B$. Importante: in generale $A \\cdot B \\neq B \\cdot A$! L\'ordine conta.',
      },
      transformation_matrix: {
        title: 'Matrice di trasformazione',
        desc: 'Ogni applicazione lineare (rotazione, scalatura, simmetria) si può rappresentare come matrice. La matrice di rotazione $R(\\theta)$ ruota i vettori dell\'angolo $\\theta$. Più trasformazioni si concatenano con la moltiplicazione tra matrici — lette da destra a sinistra.',
      },
      stochastic_matrix: {
        title: 'Matrice stocastica e vettore stazionario',
        desc: 'Una matrice stocastica ha somma 1 in ogni colonna — descrive probabilità di transizione. Il vettore stazionario $\\vec{v}_{\\text{fix}}$ con $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ è lo stato di equilibrio a lungo termine, indipendentemente dallo stato iniziale.',
      },
    },
    examples: {
      '3d_rotation': {
        title: 'Rotazione 3D di una luce del porto',
        context: 'Kai vuole ruotare una lanterna del porto di $90°$ attorno all\'asse $z$. La lanterna si trova nel punto $(3, 0, 5)$. Come calcola la nuova posizione?',
        step1: 'Costruire la matrice di rotazione di $90°$ attorno all\'asse $z$ ($\\cos 90° = 0$, $\\sin 90° = 1$):',
        step2: 'Scrivere il vettore posizione della lanterna come vettore colonna:',
        step3: 'Matrice per vettore — moltiplicare riga per riga:',
        step4: 'Risultato: la lanterna ora si trova in $(0, 3, 5)$ — ruotata di $90°$ nel piano $xy$, $z$ invariata:',
        kai_comment: 'È proprio così che funziona ogni frame nel mio motore: migliaia di vertici vengono moltiplicati per la matrice model, poi per la matrice view (posizione della telecamera), poi per la matrice projection (prospettiva). Tre moltiplicazioni tra matrici per vertice — e la GPU lo fa in millisecondi!',
      },
      player_states: {
        title: 'Comportamento dei giocatori come catena di Markov',
        context: 'In "Hafenlichter 3D" i giocatori alternano tra esplorare (E) e combattere (K). Kai ha osservato: chi esplora continua a esplorare nel $70\\%$ dei casi e passa al combattimento nel $30\\%$. Chi combatte continua a combattere nell\'$80\\%$ dei casi e torna a esplorare nel $20\\%$. Attualmente il $60\\%$ dei giocatori sta esplorando.',
        step1: 'Costruire la matrice di transizione $T$ e il vettore iniziale $\\vec{v}_0$:',
        step2: 'Calcolare un passo — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:',
        step3: 'Determinare il vettore stazionario — risolvere il sistema $T \\cdot \\vec{v} = \\vec{v}$ con $x + y = 1$:',
        step4: 'A lungo termine il $40\\%$ esplora e il $60\\%$ combatte — indipendentemente dall\'inizio:',
        kai_comment: 'Questo è oro per il mio game design! Il vettore stazionario mi mostra che a lungo termine i giocatori combattono più di quanto esplorino — comunque inizino. Se voglio più equilibrio, devo cambiare le probabilità di transizione. Le matrici rendono calcolabile il comportamento dei giocatori!',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Computer grafica e motori 3D',
        desc: 'Ogni motore 3D (Unity, Unreal, Godot) si basa sulla moltiplicazione tra matrici. La pipeline MVP — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — trasforma ogni punto 3D sullo schermo 2D. Le GPU moderne sono, nel loro nucleo, enormi macchine per moltiplicare matrici.',
      },
      google_pagerank: {
        title: 'Google PageRank',
        desc: 'L\'algoritmo di ricerca originale di Google modella il web come un\'enorme matrice stocastica: ogni pagina web è uno stato, ogni link una probabilità di transizione. Il vettore stazionario $\\vec{r} = T \\cdot \\vec{r}$ fornisce la classifica — le pagine con i valori più alti nel vettore stazionario stanno in cima.',
      },
      robotics: {
        title: 'Robotica e controllo delle macchine',
        desc: 'I bracci robotici sono composti da giunti, ognuno dei quali esegue una rotazione. La posizione complessiva della mano risulta dal prodotto di tutte le matrici di rotazione lungo il braccio. Questo si chiama cinematica diretta — e la matrice inversa risolve il problema inverso: "Quali angoli dei giunti mi servono per questa posizione della mano?"',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Trattare la moltiplicazione tra matrici come quella tra numeri: $A \\cdot B = B \\cdot A$',
        correct: 'Le matrici NON sono commutative: in generale $A \\cdot B \\neq B \\cdot A$',
        why: 'Prima ruotare e poi spostare dà un risultato diverso che prima spostare e poi ruotare. Nella grafica 3D un ordine scambiato porta a posizioni completamente sbagliate. Quindi: leggi sempre le catene di trasformazioni da destra a sinistra!',
        kai_warning: 'Una volta ho cercato un bug per un giorno intero perché avevo scambiato rotazione e traslazione. Le mie navi ruotavano attorno al centro del mondo invece che attorno al proprio asse! Da allora leggo sempre le catene di matrici da destra a sinistra: $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$ — prima ruotare, poi spostare.',
      },
      stochastic_rows_cols: {
        wrong: 'Supporre che la somma delle righe sia 1 nelle matrici stocastiche con vettori colonna',
        correct: 'Con i vettori colonna deve essere 1 la somma delle colonne: $\\sum_i t_{ij} = 1$',
        why: 'La convenzione dipende dal fatto che usi vettori riga o vettori colonna. A scuola e nelle università tedesche lo standard è il vettore colonna — allora le colonne della matrice di transizione devono avere somma 1. Ogni colonna descrive: "Partendo dallo stato $j$ — come si distribuiscono le transizioni?"',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'È la notte del lancio al porto di Amburgo. Le luci dei Landungsbrücken si riflettono nell\'acqua, e sul grande schermo davanti al mercato del pesce brilla il titolo: "Hafenlichter 3D". Kai è sul palco, con il microfono in mano, e quasi non ci crede — tre anni di sviluppo, e ora il gioco è finalmente pronto. Tra il pubblico scopre due volti noti: Mia, che all\'epoca ha dato il via a tutto con il suo gioco 2D in pixel art, e Amir, i cui algoritmi DataPulse controllano l\'IA degli NPC. "Vi ricordate", dice Kai al microfono, "quando Mia ha iniziato con le funzioni lineari per muovere i personaggi lungo una retta? Poi Amir ha costruito la pipeline dei dati con le derivate e la distribuzione binomiale. E ora siamo qui — con matrici, integrali e distribuzione normale abbiamo creato un intero mondo 3D." La folla esulta. Ma prima che la festa entri nel vivo, Kai ha ancora un\'ultima sfida: l\'esame di maturità di matematica.',
      challenge: 'La prova più grande è alle porte — la maturità riunisce analisi, geometria analitica e stocastica in un unico compito scritto. Kai ha bisogno di una strategia che colleghi tutti gli argomenti, massimizzi i punti ed eviti gli errori tipici.',
      outro: 'La festa di lancio al porto è in pieno svolgimento, la musica suona, e Kai, Mia e Amir brindano. "Tre anni di matematica", dice Mia, "dalla retta alla distribuzione normale." "Dai dati alle reti neurali", aggiunge Amir. "Dai pixel 2D al motore 3D", conclude Kai. Guardano l\'Elba, dove danzano le luci del porto — ognuna un vertice, trasformato da una matrice, illuminato da una funzione esponenziale, bilanciato da una distribuzione normale. La matematica non è mai stata solo fare calcoli. Era la lingua con cui hanno trasformato le loro idee in realtà. Il gioco è uscito. L\'esame sta arrivando. E comunque vada — il viaggio ne è valso la pena. Ogni funzione, ogni derivata, ogni integrale li ha portati fin qui. Al porto. Al traguardo. E all\'inizio di tutto ciò che deve ancora venire.',
    },
    objectives: {
      exam_strategy: 'Sviluppare una chiara strategia d\'esame: esaminare gli esercizi, calcolare il rapporto punti-tempo, fare prima gli esercizi facili',
      cross_topic_connections: 'Riconoscere e sfruttare i collegamenti tra analisi, geometria analitica e stocastica',
      time_management: 'Pianificare in modo realistico il tempo a disposizione per ogni esercizio e rispettarlo',
      error_prevention: 'Riconoscere gli errori tipici, eseguire controlli di plausibilità e interpretare i risultati nel contesto del problema',
    },
    explanation: {
      intro: 'La maturità non è uno sprint, ma un gioco strategico — come un boss finale con più fasi. Hai circa 4-5 ore per tre grandi blocchi tematici. La chiave non è sapere tutto, ma stabilire le priorità in modo intelligente e lavorare con ordine. Kai l\'ha imparato con il suo gioco: "Non puoi correggere tutti i bug contemporaneamente. Correggi quelli che hanno più impatto — ed è esattamente così che affronti l\'esame."',
      kai_rallying: 'Ragazzi, per tre anni abbiamo fatto matematica — non perché dovevamo, ma perché era la chiave dei nostri progetti. Mia ha iniziato con le funzioni, Amir ha addestrato la sua IA con la stocastica, e io ho costruito un mondo 3D con le matrici. La maturità è solo i titoli di coda dopo la battaglia finale. Siamo pronti!',
      structure: 'Il compito scritto è composto di solito da tre parti obbligatorie — analisi (spesso il blocco più grande), geometria analitica e stocastica. I punti si distribuiscono all\'incirca così:',
      time_strategy: 'Pianifica il tuo tempo in proporzione ai punti. Se un esercizio vale 10 punti su 100, investi circa il $10\\%$ del tuo tempo. E la regola d\'oro: inizia dagli esercizi di cui sei sicuro. Ogni punto sicuro vale quanto uno conquistato con fatica!',
      mia_wisdom: 'Ricordatevi le basi! Lo studio di funzione segue sempre lo stesso schema: dominio, zeri, punti estremi, punti di flesso, comportamento per $x \\to \\pm\\infty$. Se conoscete lo schema, ogni funzione è solo una sua variante. L\'ho imparato con i miei personaggi — ogni movimento è, in fondo, una funzione.',
      checking: 'Dopo ogni sottoesercizio: controllo di plausibilità! Le unità di misura sono giuste? I segni hanno senso? Il risultato è in un intervallo realistico? Una probabilità maggiore di 1 o un\'area negativa sono segnali d\'allarme immediati — meglio ricalcolare che andare avanti.',
      amir_data: 'Controllo sempre i miei risultati con i casi limite: cosa succede per $x = 0$? Per $x$ molto grandi? La mia soluzione converge o diverge? Questo modo di pensare, preso dal debugging, vale allo stesso modo per il compito scritto. E in stocastica: controlla sempre che valga $\\sum P = 1$!',
      confidence: 'La cosa più importante alla fine: sai più di quanto pensi. Tre anni di esercizio sono nelle tue mani. Se durante l\'esame per un momento non sai come andare avanti — respira, rileggi l\'esercizio e comincia da ciò che sai fare con sicurezza. Ogni punto conta. E ricorda: la matematica non è un talento, ma una lingua che hai imparato. Parlala.',
    },
    concepts: {
      read_then_plan: {
        title: 'Leggere → Pianificare → Calcolare → Verificare',
        desc: 'Lo schema in 4 passi per ogni esercizio: (1) Leggere tutto l\'esercizio, evidenziare le informazioni. (2) Pianificare la strategia di soluzione — quali metodi ti servono? (3) Calcolare in modo pulito e ordinato. (4) Verificare il risultato: unità di misura, segni, plausibilità, contesto del problema.',
      },
      point_maximizing: {
        title: 'Efficienza dei punti',
        desc: 'Non tutti gli esercizi sono ugualmente difficili per punto. Inizia dagli esercizi in cui ottieni più punti nel minor tempo. Gli ultimi sottoesercizi sono spesso i più difficili — meglio raccogliere prima tutti i punti "facili" in tutti gli esercizi e poi tornare a quelli difficili.',
      },
      plausibility_check: {
        title: 'Controllo di plausibilità',
        desc: 'Quattro controlli rapidi che evitano gli errori di distrazione: (1) Unità di misura: l\'unità è adatta al contesto? (2) Segno: qui un valore negativo ha senso? (3) Limiti: cosa succede per $x \\to 0$ o $x \\to \\infty$? (4) Schizzo: il risultato corrisponde all\'immagine grafica?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Esercizio tipico di analisi: studio di funzione + integrale',
        context: 'Kai modella il consumo di energia del suo motore 3D con $f(x) = (2x - 1) \\cdot e^{-x}$. Determina i punti estremi e calcola l\'area tra il grafico e l\'asse $x$ su $[0;\\, 3]$.',
        step1: 'Impostare la funzione — qui è già data:',
        step2: 'Derivata con la regola del prodotto: $u = 2x - 1$, $v = e^{-x}$, quindi $f\'(x) = u\' \\cdot v + u \\cdot v\'$:',
        step3: 'Trovare il punto estremo — porre $f\'(x) = 0$ ($e^{-x} > 0$ sempre, quindi parentesi = 0):',
        step4: 'Calcolo dell\'area — integrazione per parti oppure determinare la primitiva:',
        mia_comment: 'È proprio lo schema che intendo: derivata con la regola del prodotto, trovare lo zero, calcolare l\'integrale. La funzione cambia, ma la strategia resta sempre la stessa. Esercitati finché non viene in automatico!',
      },
      mixed_stochastik: {
        title: 'Esercizio tipico di stocastica: test d\'ipotesi',
        context: 'Il test A/B di Amir mostra: su 50 utenti, normalmente l\'$8\\%$ clicca sul nuovo pulsante. Dopo un redesign vuole verificare se il tasso di clic è aumentato ($\\alpha = 5\\%$).',
        step1: 'Impostare il modello — distribuzione binomiale con i parametri:',
        step2: 'Formulare le ipotesi — test unilaterale verso l\'alto:',
        step3: 'Cercare la regione critica — provare $k = 8$ ($P$ ancora troppo grande):',
        step4: 'Determinare la regione di rifiuto — da $k = 9$ in poi $H_0$ viene rifiutata:',
        amir_comment: 'I test d\'ipotesi sono, in fondo, logica decisionale: calcoli quanto è improbabile il tuo risultato sotto $H_0$. Se è più improbabile di $\\alpha$, rifiuti $H_0$. È esattamente così che prendo decisioni basate sui dati a DataPulse — solo con campioni più grandi!',
      },
    },
    realworld: {
      release_day: {
        title: 'Release Day: quando tutto si unisce',
        desc: 'Pubblicare un gioco è come un esame: mesi di preparazione sfociano in un momento decisivo. "Hafenlichter 3D" di Kai unisce le basi 2D (Mia), l\'analisi dei dati (Amir) e la matematica 3D (Kai) — proprio come la maturità unisce analisi, geometria e stocastica. La preparazione è tutto.',
      },
      project_management: {
        title: 'Project management e priorità',
        desc: 'Nello sviluppo software dai priorità alle funzionalità in base a impatto e impegno — proprio come agli esercizi d\'esame in base a punti e difficoltà. La formula $\\text{Efficienza} = \\frac{\\text{Punti}}{\\text{Tempo}}$ vale allo stesso modo nel lavoro: concentrati su ciò che fa la differenza più grande.',
      },
      lifelong_learning: {
        title: 'Apprendimento permanente',
        desc: 'La maturità non è la fine, ma l\'inizio. Mia studia game design, Amir data science, Kai informatica dei media — e ovunque serve loro la matematica. La capacità di impadronirsi di nuovi argomenti vale più di qualsiasi singola formula. La matematica vi ha insegnato a pensare.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Scrivere il risultato senza unità di misura e senza riferimento al contesto: "$A = 12{,}5$"',
        correct: 'Sempre unità di misura e interpretazione: "$A = 12{,}5\\,\\text{u.a.}$, che corrisponde a $12{,}5\\,\\text{m}^2$"',
        why: 'Alla maturità ci sono punti per l\'interpretazione nel contesto del problema! Un risultato nudo, senza unità di misura o riferimento alla consegna, ti costa punti facili. Scrivi sempre una frase di risposta: "L\'area misura $12{,}5\\,\\text{m}^2$, che corrisponde alla superficie verde del parco."',
        kai_warning: 'Nello sviluppo di videogiochi i numeri senza contesto non valgono niente. 12,5 — cosa? Pixel? Secondi? Punti danno? Lo stesso vale nel compito scritto: scrivi l\'unità di misura e formula una frase di risposta. Sono punti regalati!',
      },
      skip_plausibility: {
        wrong: 'Non mettere in dubbio un risultato evidentemente sbagliato: $P(X = 5) = 1{,}3$',
        correct: 'Insospettirsi subito: una probabilità non può mai essere maggiore di 1!',
        why: 'I controlli di plausibilità costano 10 secondi, ma possono salvare interi esercizi. Le probabilità stanno sempre tra 0 e 1, le aree non sono mai negative, $e^x > 0$ per ogni $x$. Se il tuo risultato viola queste regole di base, dietro c\'è un errore di calcolo.',
        mia_warning: 'Nel mio ultimo compito scritto ho trovato proprio un errore così: il mio integrale era negativo, anche se la funzione era positiva su tutto l\'intervallo. Controllo rapido, errore di segno scoperto, corretto — 4 punti salvati. Controlla sempre!',
      },
    },
  },
};
