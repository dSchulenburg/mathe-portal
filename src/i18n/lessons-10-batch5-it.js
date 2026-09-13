export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'Mia sta creando per Luci del Porto un minigioco del parcheggio: Lumi lascia il furgone delle consegne e al ritiro deve pagare. Mia programma la tariffa: 2,00 € fino a un\'ora, dopo 3,50 €. Durante i test Tim nota qualcosa: «Se arrivi un secondo in ritardo, all\'improvviso costa 1,50 € in più. È un bug?» Mia guarda il grafico. Non è rotto: fa un salto. E proprio questo salto ha un nome.',
      challenge: 'Quando una funzione fa un vero salto, quando le manca solo un singolo punto e quando va all\'infinito? Mia deve distinguere con sicurezza i tre casi per decidere quali tariffe può costruire in questo modo.',
      outro: 'Ora Mia sa verificare in ogni punto sospetto se una funzione è continua: limite da sinistra, limite da destra, valore della funzione. Se tutti e tre coincidono, va tutto bene. E sa quali buchi può riparare e quali no. La tariffa del parcheggio, tra l\'altro, resta discontinua. Non è un bug, è una scelta commerciale.',
    },
    objectives: {
      anschaulich: 'Riconoscere intuitivamente la continuità e sapere perché «disegnare senza staccare la matita» non basta come definizione',
      definition: 'Verificare la continuità in un punto tramite il limite: $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Distinguere con sicurezza discontinuità eliminabile, punto di salto e polo',
      zwischenwertsatz: 'Dimostrare l\'esistenza di uno zero con il teorema dei valori intermedi',
    },
    explanation: {
      intro: 'Intuitivamente, continua significa: puoi disegnare il grafico senza staccare la matita. È una buona prima idea, ma non è una definizione con cui si possa calcolare. Che dire di una funzione a cui manca esattamente un solo punto? In pratica non stacchi la matita, eppure lì la funzione non è continua. Per una definizione solida ti serve il limite del calcolo differenziale.',
      definition: 'Una funzione $f$ si dice continua nel punto $x_0$ se il valore della funzione e il limite in quel punto non si contraddicono:',
      drei_bedingungen: 'In questa sola riga ci sono tre richieste. Devono essere soddisfatte tutte e tre: in ogni controesempio ne fallisce esattamente una:',
      mia_tip: 'Io controllo sempre in quest\'ordine: primo, il punto appartiene al dominio? Se no, lì non può proprio essere continua. Secondo, arrivo allo stesso valore da sinistra e da destra? Terzo, quel valore è quello che la funzione assume davvero lì? Tre spunte, fatto.',
      einseitig: 'Nelle funzioni definite a tratti devi guardare separatamente da entrambi i lati nel punto di raccordo. Il limite sinistro e il limite destro non devono essere diversi, ed entrambi devono coincidere con il valore della funzione:',
      arten: 'Ci sono esattamente tre modi in cui la continuità può rompersi, e non sono ugualmente gravi. Nella discontinuità eliminabile manca solo un punto; puoi aggiungerlo e tutto è riparato. Nel punto di salto esistono entrambi i limiti laterali, ma sono diversi: qui aggiungere un punto non serve. Nel polo i limiti vanno all\'infinito, non c\'è alcun valore da aggiungere:',
      zwischenwertsatz: 'La continuità non è solo una proprietà da verificare: è uno strumento. Il teorema dei valori intermedi dice: una funzione continua che parte sotto lo zero e finisce sopra lo zero deve incontrare lo zero lungo la strada. Non può scavalcarlo, perché saltare è proprio ciò che non le è permesso:',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Continuità in un punto',
        desc: 'Il limite nel punto coincide con il valore della funzione. Tre condizioni in un\'unica equazione: il valore della funzione esiste, il limite esiste, e sono uguali. Se ne manca una, lì la funzione è discontinua.',
      },
      einseitig: {
        title: 'Limiti laterali',
        desc: 'Nei punti di raccordo delle funzioni definite a tratti verifichi sinistra e destra separatamente. Se i due valori sono diversi, c\'è un salto, e l\'altezza del salto è esattamente la loro differenza.',
      },
      arten: {
        title: 'I tre tipi di discontinuità',
        desc: 'Discontinuità eliminabile: il limite esiste, manca il valore della funzione; riparabile. Punto di salto: entrambi i limiti laterali esistono, ma sono diversi; non riparabile. Polo: i limiti vanno all\'infinito; a maggior ragione non riparabile.',
      },
      zwischenwertsatz: {
        title: 'Teorema dei valori intermedi',
        desc: 'Se $f$ è continua su $[a;b]$ e agli estremi cambia segno, allora tra di essi c\'è almeno uno zero. Il teorema garantisce l\'esistenza, non l\'unicità e nemmeno dove si trovi esattamente.',
      },
    },
    examples: {
      luecke: {
        title: 'Colmare una discontinuità eliminabile',
        context: 'Mia si imbatte in un\'espressione che in $x = 1$ dà $\\frac{0}{0}$.',
        step1: 'Il denominatore si annulla in $x = 1$: il punto non appartiene al dominio:',
        step2: 'Scomporre il numeratore e semplificare. È consentito finché $x \\neq 1$:',
        step3: 'L\'espressione semplificata si calcola senza problemi in $x = 1$: questo è il limite:',
        step4: 'Ora aggiungi il punto mancante. La funzione completata si chiama prolungamento per continuità:',
        mia_comment: 'All\'inizio il $\\frac{0}{0}$ mi ha spaventata: pensavo che qualcosa fosse rotto. E invece no. Significa solo: prima semplifica, poi fai domande. Rotto sarebbe $\\frac{1}{0}$: lì c\'è un vero zero da solo al denominatore.',
      },
      sprung: {
        title: 'Misurare un punto di salto',
        context: 'La tariffa del parcheggio del minigioco di Mia, e la domanda di quanto possa costare un secondo.',
        step1: 'La tariffa è definita a tratti; il punto di raccordo si trova a un\'ora:',
        step2: 'Avvicinarsi al punto di raccordo da sinistra e da destra e confrontare i valori:',
        step3: 'I due limiti esistono, ma sono diversi: questa è la definizione di punto di salto:',
        step4: 'L\'altezza del salto è la loro differenza. Qui non è un guasto, ma la tariffa:',
        kai_comment: 'Sono proprio salti come questi il motivo per cui le tariffe telefoniche e gli scaglioni postali irritano la gente. Matematicamente non c\'è niente di sbagliato, ma chi arriva con un secondo di ritardo paga l\'intero scaglione successivo. Le tariffe continue fatturano al secondo. È una scelta, non una formula.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Tariffe a scaglioni',
        desc: 'Parcheggio, spese postali, contratto telefonico: ovunque si fatturi per unità iniziata, la funzione del prezzo è discontinua. Ogni scaglione è un punto di salto, e ognuno di essi è una scelta consapevole del fornitore.',
      },
      temperatur: {
        title: 'Grandezze fisiche',
        desc: 'Temperatura, posizione, velocità: queste grandezze non possono saltare, perché un salto significherebbe un\'energia infinita in un tempo nullo. Per questo i modelli fisici sono quasi sempre funzioni continue.',
      },
      nullstelle: {
        title: 'Trovare gli zeri numericamente',
        desc: 'Ogni calcolatrice usa il teorema dei valori intermedi: cerca un intervallo con cambio di segno e continua a dimezzarlo. Senza continuità questo metodo non varrebbe nulla: lo zero potrebbe semplicemente essere scavalcato.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'Se $f(x_0)$ esiste, allora $f$ lì è anche continua',
        correct: 'Il valore della funzione deve inoltre coincidere con il limite',
        why: 'Una funzione a gradino è definita nel suo punto di salto: lì ha un valore della funzione del tutto normale. Eppure è discontinua, perché il limite da uno dei due lati dà un altro risultato. Essere definita è solo la prima di tre condizioni, non ancora la risposta.',
        mia_warning: 'Mi è successo con il parcheggio. A un\'ora esatta il prezzo è definito: 2,00 €. Pensavo che quindi fosse tutto liscio. Il grafico salta comunque, solo un secondo dopo.',
      },
      pol_ist_hebbar: {
        wrong: 'Ogni punto escluso dal dominio si può colmare con un valore adatto',
        correct: 'Solo se il limite da entrambi i lati esiste ed è finito',
        why: 'Con $\\frac{1}{x}$ la funzione tende a $-\\infty$ da sinistra e a $+\\infty$ da destra. Non c\'è alcun numero che si possa inserire: qualunque tu scelga, il grafico schizza accanto all\'infinito. La regola pratica per le frazioni: se il fattore critico si semplifica, la discontinuità è eliminabile; se resta al denominatore, è un polo.',
        mia_warning: 'Ora controllo sempre con due numeri: sostituisco $0{,}001$ e $-0{,}001$. Se escono due valori simili, la discontinuità è eliminabile. Se escono $1000$ e $-1000$, è un polo, e lì non c\'è niente da fare.',
      },
    },
  },
};
