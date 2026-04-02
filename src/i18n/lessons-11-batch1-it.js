export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Il modello ML di Amir per DataPulse fornisce raccomandazioni musicali accettabili — ma l\'addestramento richiede un\'eternita. "Il Gradient Descent non e altro che derivate", gli spiega la sua professoressa di matematica. "Se capisci come funzionano le regole di derivazione, capisci anche perche il tuo modello impara." Amir decide di studiare le regole sistematicamente.',
      challenge: 'Amir vuole capire come il suo modello ML deriva internamente la funzione di perdita — per questo gli servono la regola della potenza, della somma, del prodotto e della catena.',
      outro: 'Amir ha ora una base solida: regola della potenza per termini semplici, regola della somma e del fattore per espressioni composte, regola del prodotto per moltiplicazioni e la regola della catena per funzioni composte. "Ora finalmente capisco cosa fa PyTorch in background con Autograd", dice soddisfatto.',
    },
    objectives: {
      power_rule: 'Applicare con sicurezza la regola della potenza: derivare $f(x) = x^n$',
      constant_sum_rule: 'Padroneggiare la regola delle costanti e della somma: derivare termini singolarmente e mantenere i fattori',
      product_quotient_rule: 'Applicare correttamente la regola del prodotto e del quoziente',
      chain_rule: 'Usare con sicurezza la regola della catena per funzioni composte',
    },
    explanation: {
      intro: 'La regola della potenza e la regola base piu importante: porti l\'esponente come fattore e riduci l\'esponente di 1. Cosi derivi qualsiasi funzione potenza in un attimo:',
      constant_factor: 'I fattori costanti restano invariati nella derivazione, e le somme si possono derivare termine per termine. Questo rende gestibili i termini composti:',
      amir_tip: 'Nel mio codice ML ci sono somme e fattori ovunque — la funzione di perdita e un\'enorme somma su tutti i punti dati. Il fatto che posso derivare ogni termine singolarmente rende possibile la backpropagation!',
      product_rule: 'Quando due funzioni vengono moltiplicate, NON puoi semplicemente derivarle singolarmente. Si applica la regola del prodotto — "prima per derivata della seconda piu seconda per derivata della prima":',
      quotient_rule: 'Per frazioni di funzioni c\'e la regola del quoziente. Aiuto mnemonico: "NDA meno DNA su N quadrato" (N = denominatore, D = numeratore, A = derivata):',
      chain_rule: 'Per funzioni composte — cioe una funzione dentro un\'altra — ti serve la regola della catena. Derivi "dall\'esterno verso l\'interno" e moltiplichi per la derivata interna:',
    },
    concepts: {
      power_rule: {
        title: 'Regola della potenza',
        desc: 'La regola fondamentale: l\'esponente diventa fattore, l\'esponente decresce di 1. Vale anche per esponenti negativi e frazionari, es. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Regola della somma e del fattore',
        desc: 'Le somme si derivano termine per termine, i fattori costanti restano. Cosi scomponi ogni termine polinomiale in parti semplici.',
      },
      product_rule: {
        title: 'Regola del prodotto',
        desc: 'Per il prodotto di due funzioni: derivata della prima per seconda piu prima per derivata della seconda. Indispensabile quando due espressioni variabili vengono moltiplicate.',
      },
      chain_rule: {
        title: 'Regola della catena',
        desc: 'Derivi la funzione esterna, lasci invariata quella interna, poi moltiplichi per la derivata dell\'interna. Il cuore della backpropagation nelle reti neurali.',
      },
    },
    examples: {
      power_sum: {
        title: 'Derivare un polinomio con le regole della potenza e della somma',
        context: 'Amir semplifica un termine dalla sua funzione di costo.',
        step1: 'Dato il polinomio — deriviamo ogni termine singolarmente:',
        step2: 'Regola della potenza per ogni termine: esponente come fattore, esponente meno 1. La costante $-7$ scompare:',
        step3: 'Riunire tutto da la funzione derivata:',
        amir_comment: 'Esattamente cosi si presenta il gradiente delle mie feature polinomiali. Ogni termine contribuisce alla pendenza — e PyTorch lo fa automaticamente per migliaia di parametri contemporaneamente.',
      },
      chain_rule: {
        title: 'Funzione composta con la regola della catena',
        context: 'Amir deriva una funzione di attivazione che contiene una composizione.',
        step1: 'Data una funzione potenza composta:',
        step2: 'Scomposizione in funzione esterna $f(u) = u^3$ e funzione interna $g(x) = 2x^2 + 1$:',
        step3: 'Derivare l\'esterna (regola della potenza su $u^3$), lasciare invariata l\'interna, per derivata interna ($4x$):',
        step4: 'Riordinato — fattore $4x$ portato davanti:',
        amir_comment: 'La regola della catena E letteralmente la backpropagation! Ogni strato nella rete neurale e una funzione composta, e la regola della catena concatena i gradienti da strato a strato.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent nel Machine Learning',
        desc: 'Ogni modello ML minimizza una funzione di perdita tramite derivazione. Il gradiente indica la direzione della salita piu ripida — noi andiamo nella direzione opposta per trovare il minimo.',
      },
      marginal_cost: {
        title: 'Costi marginali in economia',
        desc: 'La derivata della funzione di costo $K(x)$ da i costi marginali: quanto costa un\'unita prodotta in piu? Le aziende lo usano quotidianamente per il calcolo dei prezzi.',
      },
      acceleration: {
        title: 'Accelerazione in fisica',
        desc: 'La velocita e la derivata della posizione, l\'accelerazione e la derivata della velocita. Il sensore del tuo smartphone misura esattamente questo: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'La derivata di una costante e la costante stessa',
        correct: 'La derivata di una costante e sempre zero',
        why: 'Una costante non ha pendenza — non cambia. Pensa a $f(x) = 5$: e una linea orizzontale, quindi la pendenza e ovunque 0. Vale per ogni numero senza $x$.',
        amir_warning: 'Il termine bias nel mio modello e una costante — la sua derivata rispetto a $x$ e 0. Se lo dimentichi, il gradiente ha un offset sbagliato e l\'addestramento diverge.',
      },
      chain_rule_forgotten: {
        wrong: 'Dimenticare la derivata interna nelle funzioni composte',
        correct: 'Moltiplicare sempre per la derivata interna',
        why: 'Per $[(3x+1)^4]\'$ non basta portare giu l\'esponente. DEVI moltiplicare per la derivata del termine interno $(3x+1)\' = 3$. Senza derivata interna manca il fattore 3.',
        amir_warning: 'Immagina di dimenticare la derivata interna in uno strato della rete neurale — il gradiente sarebbe completamente sbagliato e il modello imparerebbe assurdita. La regola della catena non e opzionale!',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'L\'algoritmo di raccomandazione di Amir produce risultati — ma sono davvero ottimali? "Devi analizzare completamente la funzione di perdita", dice il suo professore. "Dove sono i minimi? Dove i punti di flesso?" Amir si rende conto: un\'analisi completa della curva gli mostra se il suo modello ha davvero trovato il minimo globale o e bloccato in un minimo locale.',
      challenge: 'Amir analizza il paesaggio della perdita del suo modello: determinare sistematicamente zeri, estremi, punti di flesso e monotonia di una funzione.',
      outro: 'Amir puo ora caratterizzare completamente qualsiasi funzione razionale intera: trovare gli zeri, determinare massimi e minimi, calcolare punti di flesso e leggere il comportamento monotono. "Se disegno cosi il paesaggio della perdita, vedo subito se il mio optimizer e atterrato nella valle giusta", dice.',
    },
    objectives: {
      zeros_extrema: 'Determinare sistematicamente zeri e punti estremi di una funzione',
      inflection_points: 'Calcolare i punti di flesso e comprendere il loro significato per l\'andamento della curva',
      monotonicity_symmetry: 'Analizzare il comportamento monotono e la simmetria di una funzione',
    },
    explanation: {
      intro: 'Un\'analisi della curva e lo studio completo di una funzione. Iniziamo con gli zeri — i punti in cui il grafico interseca l\'asse $x$:',
      extrema: 'I punti estremi (massimi e minimi) si trovano dove la derivata prima si annulla. Ma attenzione: non ogni zero di $f\'$ e automaticamente un estremo! Serve la derivata seconda per la conferma:',
      amir_tip: 'Il paesaggio della perdita del mio modello ha molti minimi locali. Con l\'analisi della curva posso verificare se un punto critico e davvero un minimo — o solo un punto sella dove l\'optimizer si blocca.',
      inflection: 'I punti di flesso segnano la transizione tra concavita verso sinistra e verso destra. Qui cambia il comportamento di curvatura — la derivata seconda cambia segno:',
      monotonicity: 'Il comportamento monotono ti dice dove la funzione cresce e dove decresce. Lo leggi direttamente dal segno della derivata prima:',
    },
    concepts: {
      extrema: {
        title: 'Punti estremi (massimi/minimi)',
        desc: 'Condizione necessaria: $f\'(x_0) = 0$. Sufficiente: $f\'\'(x_0) < 0$ da un massimo, $f\'\'(x_0) > 0$ da un minimo. Entrambe le condizioni insieme lo rendono sicuro.',
      },
      inflection: {
        title: 'Punti di flesso',
        desc: 'Dove la curvatura cambia: $f\'\'(x_0) = 0$ E $f\'\'\'(x_0) \\neq 0$. Nelle distribuzioni normali i punti di flesso segnano la deviazione standard.',
      },
      symmetry: {
        title: 'Simmetria',
        desc: 'Simmetria assiale rispetto all\'asse $y$ per $f(-x) = f(x)$ (solo esponenti pari). Simmetria puntuale rispetto all\'origine per $f(-x) = -f(x)$ (solo esponenti dispari). Risparmia calcoli!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Analisi completa della curva',
        context: 'Amir esamina una funzione cubica — simile a funzioni di perdita con piu estremi.',
        step1: 'Data la funzione — la analizziamo completamente:',
        step2: 'Calcolare la derivata prima e trovare i suoi zeri (condizione necessaria per estremi):',
        step3: 'Valutare la derivata seconda nei punti critici (condizione sufficiente): valore negativo = massimo, valore positivo = minimo:',
        step4: 'Determinare il punto di flesso con $f\'\' = 0$ e confermare con la derivata terza:',
        amir_comment: 'Esattamente cosi analizzo il paesaggio della perdita: prima trovo i punti critici, poi verifico se sono minimi o punti sella. Per funzioni ad alta dimensione il mio optimizer lo fa numericamente — ma il principio e identico.',
      },
      graph_properties: {
        title: 'Sfruttare simmetria ed estremi',
        context: 'Una funzione simmetrica — meta del lavoro scompare grazie alla simmetria.',
        step1: 'Data una funzione di grado 4 — verifichiamo prima la simmetria:',
        step2: 'Sostituendo $-x$: tutti gli esponenti sono pari, quindi $f(-x) = f(x)$ — assialmente simmetrica! Gli estremi appaiono simmetricamente:',
        step3: 'Derivata prima uguale a zero — per simmetria basta trovare le soluzioni positive:',
        step4: 'Calcolare i valori della funzione — grazie alla simmetria vale $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'La simmetria nei dati vale oro: se so che la mia funzione di perdita e simmetrica, devo esplorare solo meta dello spazio dei parametri. Dimezza il tempo di addestramento!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analizzare distribuzioni di dati',
        desc: 'La distribuzione normale ha punti di flesso in $\\mu \\pm \\sigma$. L\'analisi della curva ti rivela dove si concentrano la maggior parte dei punti dati e dove inizia la dispersione.',
      },
      profit_analysis: {
        title: 'Massimizzazione del profitto',
        desc: 'La funzione di profitto $G(x)$ ha un massimo — la quantita di produzione ottimale. L\'analisi della curva mostra esattamente a quale quantita il profitto e massimo.',
      },
      population_growth: {
        title: 'Crescita della popolazione',
        desc: 'Il punto di flesso di una curva di crescita segna il momento dal quale la crescita rallenta. Gli epidemiologi usano esattamente questa analisi per le curve di infezione.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Ogni zero di $f\'$ e automaticamente un punto estremo',
        correct: 'Zero di $f\'$ PIU cambio di segno o $f\'\' \\neq 0$ da verificare',
        why: 'Per $f(x) = x^3$ si ha $f\'(0) = 0$, ma non e un estremo — e un punto sella! DEVI verificare la condizione sufficiente ($f\'\' \\neq 0$ o cambio di segno di $f\'$).',
        amir_warning: 'In dimensioni superiori questi punti si chiamano "Saddle Points" — l\'optimizer si blocca li e pensa di aver trovato un minimo. Controlla sempre la derivata seconda!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ basta per un punto di flesso',
        correct: '$f\'\'(x_0) = 0$ E $f\'\'\'(x_0) \\neq 0$ insieme confermano il punto di flesso',
        why: 'Per $f(x) = x^4$ si ha $f\'\'(0) = 0$, ma non e un punto di flesso — la curvatura non cambia! La derivata terza deve essere diversa da zero per garantire il cambio di curvatura.',
        amir_warning: 'Stessa trappola degli estremi: la condizione necessaria da sola non basta mai. Verifica sempre la condizione sufficiente — altrimenti ti fidi di un risultato falso.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse deve funzionare sul telefono — ma il modello di Amir richiede troppa memoria. "Devi ottimizzare l\'architettura della rete", dice la sua collega Sara. "Massima accuratezza con minimo consumo di memoria." Amir riconosce: e un classico problema di ottimizzazione — ottimizzare una grandezza mentre un\'altra e vincolata.',
      challenge: 'Amir vuole trovare la migliore architettura del modello: massima qualita di previsione sotto il vincolo di risorse computazionali limitate.',
      outro: 'Amir ha capito il principio: impostare la funzione obiettivo, inserire il vincolo, ridurre a una variabile, derivare, uguagliare a zero, verificare. "Che si tratti di dimensioni di lattine o parametri del modello — lo schema e sempre lo stesso", constata. Il suo modello ora sta in 50 MB.',
    },
    objectives: {
      setup_equations: 'Ricavare funzione obiettivo e vincolo da un contesto pratico',
      optimize_constraints: 'Sostituendo il vincolo generare una funzione di una variabile e ottimizzarla',
      verify_extremum: 'Verificare con la derivata seconda se si tratta di un massimo o minimo, e considerare i valori ai bordi',
    },
    explanation: {
      intro: 'Nei problemi di ottimizzazione si tratta sempre dello stesso: una grandezza deve essere massimizzata o minimizzata (funzione obiettivo), mentre vale un vincolo (condizione accessoria):',
      strategy: 'La strategia e sempre la stessa: (1) impostare la funzione obiettivo — cosa va ottimizzato? (2) trovare il vincolo — quale restrizione vale? (3) risolvere il vincolo per una variabile e sostituire nella funzione obiettivo. (4) derivare, uguagliare a zero, verificare.',
      amir_tip: 'Il tuning degli iperparametri e esattamente un problema di ottimizzazione: voglio minimizzare l\'errore di validazione (funzione obiettivo), ma la memoria GPU e limitata (vincolo). Lo schema della lezione di matematica funziona 1:1!',
      substitution: 'Dopo aver sostituito il vincolo, la funzione obiettivo dipende da una sola variabile. Ora si deriva normalmente e si verifica il punto critico:',
      domain_check: 'Non dimenticare il dominio! Nei problemi reali ci sono spesso limiti (es. $r > 0$ per un raggio). Confronta il valore della funzione nel punto critico con i valori ai bordi — a volte l\'ottimo e al bordo.',
    },
    concepts: {
      target_function: {
        title: 'Funzione obiettivo',
        desc: 'La grandezza da ottimizzare — massimo profitto, minima superficie, migliore accuratezza. Inizialmente dipende spesso da due variabili.',
      },
      constraint: {
        title: 'Vincolo',
        desc: 'La restrizione che vale — volume fisso, budget limitato, parametri limitati. Permette di eliminare una variabile e ridurre la funzione obiettivo a una sola variabile.',
      },
      boundary_check: {
        title: 'Verifica dei valori ai bordi',
        desc: 'L\'ottimo puo trovarsi anche al bordo del dominio. Confronta sempre $f(x_{opt})$ con i valori della funzione ai bordi $f(a)$ e $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Lattina con minimo consumo di materiale',
        context: 'Una lattina cilindrica deve contenere 330 ml — con il minimo di lamiera.',
        step1: 'Vincolo: il volume e fisso. Isolare $h$ per eliminare una variabile:',
        step2: 'Impostare la funzione obiettivo (superficie) e sostituire $h$ — ora tutto dipende solo da $r$:',
        step3: 'Derivare, uguagliare a zero e risolvere per $r$ — questo e il raggio ottimale:',
        step4: 'Verificare la derivata seconda: positiva significa minimo — abbiamo davvero trovato la lattina piu economica:',
        amir_comment: 'E esattamente come la compressione del modello: accuratezza fissa (vincolo), numero minimo di parametri (funzione obiettivo). Sostituisco $r$ con "larghezza dello strato" e $h$ con "profondita" — stesso principio!',
      },
      profit_max: {
        title: 'Massimo profitto',
        context: 'Una startup vuole trovare il prezzo ottimale per il suo modello di abbonamento.',
        step1: 'Impostare la funzione di profitto: ricavi meno costi — qui gia in una variabile:',
        step2: 'Derivata uguale a zero — la quantita ottimale:',
        step3: 'La derivata seconda e negativa — quindi un massimo. Il profitto e effettivamente massimo qui:',
        step4: 'Calcolare il profitto massimo sostituendo:',
        amir_comment: 'L\'ottimizzazione del prezzo e un classico in Data Science. Con DataPulse potremmo calcolare il livello di abbonamento ottimale allo stesso modo — massimizzare il profitto a condizione che gli utenti non abbandonino.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Ottimizzazione degli iperparametri',
        desc: 'Il learning rate $\\alpha$ nel Gradient Descent deve essere scelto ottimalmente: troppo grande = divergenza, troppo piccolo = infinitamente lento. L\'$\\alpha$ ottimale minimizza l\'errore di validazione.',
      },
      packaging: {
        title: 'Design degli imballaggi',
        desc: 'Minimo consumo di materiale a volume fisso — esattamente questo risolvono quotidianamente gli ingegneri. Ogni lattina, ogni cartone e il risultato di un problema di ottimizzazione.',
      },
      solar_panel: {
        title: 'Orientamento del pannello solare',
        desc: 'L\'angolo di inclinazione di un pannello solare determina la resa energetica. Trovare l\'angolo ottimale e un problema di ottimizzazione con la posizione del sole come vincolo.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Derivare direttamente la funzione obiettivo con due variabili',
        correct: 'Prima sostituire il vincolo, poi derivare',
        why: 'Con due variabili non puoi semplicemente derivare rispetto a $x$ — $y$ cambia con essa! DEVI usare il vincolo per esprimere $y$ tramite $x$. Solo allora tutto dipende da una variabile.',
        amir_warning: 'E come un modello ML con troppi parametri liberi: senza vincoli nessun ottimo sensato. Il vincolo riduce i gradi di liberta — esattamente come la regolarizzazione.',
      },
      no_boundary: {
        wrong: 'Assumere il punto critico come ottimo globale',
        correct: 'Confrontare il punto critico con i valori ai bordi',
        why: 'Su un intervallo limitato $[a, b]$ l\'ottimo puo trovarsi al bordo! $f\'(x_0) = 0$ fornisce solo candidati locali. Devi confrontare $f(x_0)$, $f(a)$ e $f(b)$.',
        amir_warning: 'In pratica ogni parametro ha un intervallo ammissibile. Il mio learning rate non puo essere negativo, la batch size non puo superare la memoria GPU. Verificare i valori ai bordi e obbligatorio!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse funziona — ma Amir ha bisogno di una nuova metrica: quante canzoni ascoltano gli utenti in totale a settimana? Ha il tasso di ascolto $r(t)$ come funzione del tempo, ma gli serve il totale. "Tasso per tempo da quantita — ma il tasso cambia continuamente", riflette Amir. Il suo amico Kai sorride: "Sembra un integrale."',
      challenge: 'Amir vuole calcolare dal tasso di ascolto variabile $r(t)$ il numero totale di canzoni ascoltate — questo lo porta al calcolo integrale.',
      outro: 'Amir ora sa calcolare primitive, integrali definiti e aree tra curve. "L\'integrazione e l\'inverso della derivazione — e in pratica aggrego cosi dati continui", riassume. La sua metrica settimanale di ascolto e pronta.',
    },
    objectives: {
      antiderivative: 'Calcolare primitive con la regola della potenza al contrario e comprendere la costante di integrazione $C$',
      definite_integral: 'Calcolare integrali definiti con il teorema fondamentale: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Comprendere il teorema fondamentale del calcolo e applicarlo al calcolo delle aree',
    },
    explanation: {
      intro: 'L\'integrazione e l\'inverso della derivazione: se $F\'(x) = f(x)$, allora $F(x)$ e una primitiva di $f(x)$. La primitiva generale contiene sempre la costante $C$:',
      power_rule_integral: 'La regola della potenza al contrario: aumenta l\'esponente di 1 e dividi per il nuovo esponente. Funziona per tutti gli $n \\neq -1$:',
      amir_tip: 'L\'integrazione e come l\'aggregazione nei database: la derivata da il tasso di variazione istantaneo, l\'integrazione somma tutto. Se conosco i download all\'ora, l\'integrale mi da i download totali in un periodo.',
      definite_integral: 'L\'integrale definito calcola l\'"effetto totale" tra due estremi. Il teorema fondamentale lo rende semplice: primitiva all\'estremo superiore meno primitiva all\'estremo inferiore:',
      area_interpretation: 'Geometricamente l\'integrale definito e l\'area tra curva e asse $x$. Attenzione: le aree sotto l\'asse $x$ contano negative! Per l\'area reale serve il valore assoluto:',
    },
    concepts: {
      antiderivative: {
        title: 'Primitiva',
        desc: 'Una funzione $F(x)$ con $F\'(x) = f(x)$. La costante $+C$ e importante perche diverse primitive differiscono solo per una costante.',
      },
      definite_integral: {
        title: 'Integrale definito',
        desc: 'Calcola l\'area con segno tra $f(x)$ e l\'asse $x$ da $a$ a $b$. Sostituire l\'estremo superiore meno sostituire l\'estremo inferiore.',
      },
      fundamental_theorem: {
        title: 'Teorema fondamentale dell\'analisi',
        desc: 'Collega derivazione e integrazione: derivare e integrare sono operazioni inverse. L\'integrale definito si puo calcolare tramite la primitiva.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Area tra parabola e asse $x$',
        context: 'Amir visualizza la distribuzione del tempo di ascolto come area sotto una curva.',
        step1: 'Determinare funzione e zeri — questi sono gli estremi di integrazione:',
        step2: 'Calcolare la primitiva con la regola della potenza al contrario:',
        step3: 'Calcolare l\'integrale definito: sostituire l\'estremo superiore meno l\'estremo inferiore:',
        step4: 'L\'integrale e negativo perche la parabola sta sotto l\'asse $x$. Per l\'area prendere il valore assoluto:',
        amir_comment: 'Gli integrali negativi hanno perfettamente senso nell\'analisi dei dati: se $f(x)$ e la deviazione dalla media, un integrale negativo mostra che i valori complessivamente erano sotto la media.',
      },
      distance_from_velocity: {
        title: 'Calcolare la distanza dalla velocita',
        context: 'Quanto lontano va un\'auto a guida autonoma in 4 secondi?',
        step1: 'Data la funzione velocita:',
        step2: 'La distanza totale e l\'integrale della velocita nel tempo:',
        step3: 'Calcolare la primitiva — integrare ogni termine singolarmente:',
        step4: 'Sostituire gli estremi e calcolare la differenza:',
        amir_comment: 'I dati dei sensori arrivano come tasso — velocita, throughput, richieste al secondo. L\'integrale ne fa la quantita totale. La mia dashboard mostra esattamente questo: $\\int_0^T r(t)\\,dt$ = stream totali.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Aggregazione dei dati nel tempo',
        desc: 'Se il tasso di dati $r(t)$ e noto, l\'integrale fornisce la quantita totale in un periodo. Cosi i servizi di streaming calcolano i minuti di ascolto mensili da dati al secondo.',
      },
      energy_consumption: {
        title: 'Consumo energetico',
        desc: 'Potenza $P(t)$ in watt per tempo da energia in joule — ma solo a potenza costante. Con potenza variabile serve l\'integrale: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Probabilita',
        desc: 'La probabilita che una variabile casuale sia compresa tra $a$ e $b$ e l\'area sotto la funzione di densita — cioe un integrale definito. La base di tutta la statistica.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Dimenticare la costante di integrazione $C$ negli integrali indefiniti',
        correct: 'Aggiungere sempre $+ C$ nell\'integrale indefinito',
        why: 'Se $F\'(x) = 2x$, allora sia $x^2$ che $x^2 + 7$ sono primitive. Il $+C$ rappresenta tutte le possibili primitive. Nell\'integrale definito $C$ si cancella — li puoi ometterlo.',
        amir_warning: 'In pratica $C$ e la condizione iniziale: quante canzoni aveva gia ascoltato l\'utente prima che iniziassimo a misurare? Senza $C$ manca il valore iniziale e il calcolo parte da zero invece che dal valore reale.',
      },
      negative_area: {
        wrong: 'Interpretare l\'integrale direttamente come area, anche se negativo',
        correct: 'Per le aree reali prendere il valore assoluto dei valori integrali',
        why: 'L\'integrale $\\int_a^b f(x)\\,dx$ puo essere negativo se $f(x) < 0$. Questo e corretto come area con segno. Se hai bisogno dell\'area geometrica, devi integrare $|f(x)|$ o calcolare le aree parziali separatamente.',
        amir_warning: 'Immagina di calcolare il tempo di ascolto totale e ottenere un risultato negativo — sarebbe ovviamente sbagliato. Nei problemi di area verifica sempre se la funzione cambia segno e calcola gli intervalli parziali separatamente!',
      },
    },
  },
};
