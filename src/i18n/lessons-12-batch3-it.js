export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'Amir sta costruendo un modello di previsione per il numero di utenti di un\'app di apprendimento. Le prime settimane sono fantastiche: ogni settimana il 40 per cento in più. Fa la proiezione e per l\'anno prossimo gli escono più utenti di quante persone abbiano uno smartphone. «Il tuo modello non è sbagliato», gli dice la sua professoressa, «è solo già fuori dal suo campo di validità. Che cosa succede quando già la metà di tutti gli utenti possibili ha l\'app?» Amir se ne accorge: ha dimenticato che il mondo è finito.',
      challenge: 'Come si modellizza una crescita che ha un limite? E come si distinguono due tipi di limite: uno contro cui si frena fin dall\'inizio, e uno verso cui prima si accelera e poi si frena?',
      outro: 'Ora Amir lavora con due modelli invece di uno. Crescita limitata, quando l\'incremento dipende solo dal margine libero rimasto: raffreddamento, saturazione, carica. Crescita logistica, quando l\'incremento ha bisogno anche della popolazione già presente: contagio, passaparola, popolazioni. E ora sa che cosa significa il punto di flesso: non la fine della crescita, ma il suo momento più rapido.',
    },
    objectives: {
      grenzen: 'Riconoscere quando un modello esponenziale arriva al suo limite, e perché prima era comunque corretto',
      beschraenkt: 'Impostare e analizzare la crescita limitata $N(t) = K - (K - N_0)e^{-kt}$',
      logistisch: 'Determinare il modello logistico $N(t) = \\frac{K}{1 + a e^{-rt}}$ a partire da capacità e valore iniziale',
      wendepunkt: 'Calcolare il punto di flesso e interpretarlo come l\'istante di massimo incremento',
    },
    explanation: {
      intro: 'La crescita esponenziale non conosce limiti. Nella realtà però ce n\'è quasi sempre uno: prima o poi lo stagno è pieno, tutti i clienti possibili hanno il prodotto, la tazza è a temperatura ambiente. Questo limite superiore si chiama capacità $K$. Due modelli descrivono come viene raggiunto, e la differenza tra loro non è una sottigliezza, ma la questione se la curva abbia un punto di flesso.',
      beschraenkt: 'Nella crescita limitata l\'incremento dipende solo da quanto manca ancora. All\'inizio manca di più, quindi l\'incremento è massimo all\'inizio e diventa sempre più piccolo. La curva si avvicina al limite dal basso, senza mai raggiungerlo:',
      amir_tip: 'Distinguo i due modelli con un\'unica domanda: l\'incremento ha bisogno di ciò che c\'è già? Nel caffè che si raffredda no: il calore se ne va, non importa quanto ne resti, conta solo la differenza. In un video virale sì: senza persone che lo condividono non succede nulla. Il primo caso è limitato, il secondo logistico.',
      logistisch: 'Nella crescita logistica la popolazione si aggiunge come secondo fattore. All\'inizio c\'è molto spazio, ma quasi nessun individuo: la crescita è lenta. Alla fine ci sono molti individui, ma non c\'è più spazio: di nuovo lenta. In mezzo c\'è il massimo. Ne risulta la tipica forma a S:',
      dgl: 'La differenza si vede più chiaramente nell\'equazione differenziale. Si legge come una frase: l\'incremento è proporzionale alla popolazione **per** la frazione ancora libera. Se manca uno dei due fattori, la crescita si ferma:',
      wendepunkt: 'Da questa equazione deriva l\'indicatore più importante del modello. Il prodotto tra popolazione e margine libero è massimo proprio quando i due sono uguali, cioè a metà della capacità. Lì si trova il punto di flesso, e lì il tasso di incremento è massimo:',
    },
    concepts: {
      kapazitaet: {
        title: 'Capacità $K$',
        desc: 'Il limite superiore a cui la popolazione si avvicina senza raggiungerlo. È il limite per $t \\to \\infty$ e compare come parametro in entrambi i modelli. Senza una capacità sensata nessuno dei due modelli è applicabile.',
      },
      beschraenkt: {
        title: 'Crescita limitata',
        desc: 'L\'incremento dipende solo dal margine ancora libero $K - N$. Per questo è massimo proprio all\'inizio e poi diminuisce costantemente. La curva non ha punti di flesso: è concava fin dall\'inizio. Tipica di raffreddamento, carica e saturazione.',
      },
      logistisch: {
        title: 'Crescita logistica',
        desc: 'L\'incremento dipende dalla popolazione E dal margine libero. Ne nasce la curva a S: prima lenta, poi veloce, poi di nuovo lenta. Il parametro $a = \\frac{K - N_0}{N_0}$ indica quanti posti liberi spettano all\'inizio a ogni individuo presente.',
      },
      wendepunkt: {
        title: 'Punto di flesso in $K/2$',
        desc: 'Sempre a metà della capacità, indipendentemente da $r$ e $N_0$. Lì il tasso di incremento è massimo, cioè $\\frac{rK}{4}$. Dopo la popolazione continua a crescere, ma più lentamente: è la confusione più frequente negli esercizi di interpretazione.',
      },
    },
    examples: {
      seerosen: {
        title: 'Impostare un modello logistico da capacità e valore iniziale',
        context: 'Su uno stagno con spazio per 500 ninfee crescono inizialmente 50 piante.',
        step1: 'Prima il parametro $a$. Si ricava direttamente da capacità e valore iniziale:',
        step2: 'Così il modello è pronto. Il tasso di crescita $r = 0{,}4$ a settimana proviene dalla serie di misurazioni:',
        step3: 'Verifica: sostituisci $t = 0$. Se non esce il valore iniziale, $a$ è sbagliato:',
        step4: 'L\'istante del flesso si ricava da $a\\,e^{-rt} = 1$: un\'equazione logaritmica:',
        amir_comment: 'La verifica del passo 3 la faccio sempre. Costa dieci secondi e intercetta l\'errore più frequente: $a = \\frac{K}{N_0}$ invece di $a = \\frac{K - N_0}{N_0}$. Nel mio caso sarebbe stato 10 invece di 9: sembra innocuo, ma sposta tutta la curva.',
      },
      abkuehlung: {
        title: 'Crescita limitata nel raffreddamento',
        context: 'Kai lascia un caffè a 80 °C in una stanza a 20 °C.',
        step1: 'Qui il limite è la temperatura ambiente; la differenza rispetto a essa è inizialmente di 60 °C:',
        step2: 'Verifica per $t = 0$: deve risultare la temperatura iniziale:',
        step3: 'Dopo dieci minuti resta solo circa un terzo della differenza:',
        step4: 'Sul lungo periodo rimane la temperatura ambiente, che matematicamente non viene mai raggiunta:',
        kai_comment: 'Con il caffè è esperienza di tutti i giorni: il primo minuto fa di più, poi le cose vanno a rilento. Questa è esattamente la crescita limitata. Ed è il motivo per cui soffiare all\'inizio aiuta e dopo dieci minuti non serve più a niente.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Epidemie',
        desc: 'Le nuove infezioni hanno bisogno di infetti (che contagiano) e di suscettibili (che possono essere contagiati). Il punto di flesso è il giorno con il maggior numero di nuove infezioni: il totale continua poi a salire, solo più lentamente.',
      },
      produkt: {
        title: 'Diffusione di prodotti e app',
        desc: 'I nuovi utenti arrivano per lo più tramite utenti già esistenti. All\'inizio mancano quelli che consigliano, alla fine quelli che non ce l\'hanno ancora. I reparti marketing chiamano la curva a S anche curva di adozione.',
      },
      abkuehlung: {
        title: 'Raffreddamento e carica',
        desc: 'La legge del raffreddamento di Newton e la curva di carica di una batteria sono crescita limitata. Qui conta solo la distanza dallo stato finale: per questo una batteria carica gli ultimi punti percentuali con una lentezza esasperante.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'Dal punto di flesso in poi la popolazione diminuisce',
        correct: 'Dal punto di flesso in poi diminuisce il tasso di incremento, la popolazione continua a crescere',
        why: 'Il punto di flesso è lo zero della derivata seconda, non della prima. Lì $N\'$ ha un massimo, quindi è proprio particolarmente grande, e positiva. La funzione logistica è strettamente crescente su tutto il suo dominio, non decresce mai. Chi qui confonde popolazione e incremento capovolge esattamente l\'affermazione.',
        amir_warning: 'È l\'errore di interpretazione numero uno e costa punti in ogni prova di maturità. Il mio trucco: formulo sempre la risposta con la parola «a» nel senso di «per ogni». Che cosa cambia a settimana? L\'incremento. Che cosa c\'è in totale? La popolazione. Appena compare «a settimana», sto parlando di $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'La crescita logistica è una crescita esponenziale troncata a $K$',
        correct: 'La curva logistica frena gradualmente e non raggiunge mai $K$',
        why: 'Un modello esponenziale troncato avrebbe uno spigolo: nel punto di taglio non sarebbe derivabile e raggiungerebbe il limite esattamente in un tempo finito. La funzione logistica invece è liscia ovunque e si avvicina a $K$ solo asintoticamente. La differenza non è estetica: il modello troncato prevede un istante finale concreto, quello logistico nessuno.',
        amir_warning: 'Di quest\'idea è giusta solo la fase iniziale: finché $N$ è piccolo rispetto a $K$, il fattore di frenata vale quasi $1$ e le due curve sono praticamente sovrapposte. La curva esponenziale è la tangente iniziale di quella logistica: per questo il mio primo modello si adattava così bene alle prime settimane.',
      },
    },
  },
};
