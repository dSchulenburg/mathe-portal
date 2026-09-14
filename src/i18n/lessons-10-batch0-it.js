export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'Mia è seduta nel suo piccolo ufficio al porto di Amburgo e fissa lo schermo. Lumi, il suo personaggio in "Hafenlichter", deve saltare con eleganza sopra casse e container — ma la curva di salto sembra proprio sbagliata. "La fisica non torna", mormora. Per programmare una traiettoria di salto realistica, Mia ha bisogno delle funzioni quadratiche.',
      challenge: 'Lumi deve saltare sopra le casse — ma la curva di salto sembra innaturale.',
      outro: 'Con la forma del vertice Mia ha programmato la curva di salto perfetta! Ora Lumi vola in un arco elegante sopra i container di Amburgo. "Finalmente sembra realistico", dice Tim e le batte il cinque.',
    },
    objectives: {
      recognize: 'Riconoscere le funzioni quadratiche e descriverne le proprietà',
      vertex_form: 'Passare con sicurezza dalla forma normale alla forma del vertice e viceversa',
      pq_formula: 'Calcolare gli zeri con la formula risolutiva',
      graph_properties: 'Leggere dall\'equazione la direzione di apertura, il vertice e l\'asse di simmetria',
    },
    explanation: {
      intro: 'Immagina di lanciare un pallone da basket. La palla vola in un arco verso l\'alto, raggiunge il punto più alto e ricade. Questa traiettoria ha una forma ben precisa — una parabola. In matematica la descriviamo con una funzione quadratica:',
      opening: 'Il numero $a$ decide se la parabola è aperta verso l\'alto ($a > 0$) o verso il basso ($a < 0$) — e quanto è "stretta" o "larga". Più grande è $|a|$, più stretta è la parabola.',
      mia_tip: 'Nel mio gioco $a$ è negativo, perché la curva di salto va prima in su e poi torna giù — come una U capovolta!',
      vertex_form: 'La forma del vertice ti mostra subito il punto più alto (o più basso) della parabola. Il vertice $S$ ha le coordinate $(d \\mid e)$:',
      conversion: 'Per passare dalla forma normale alla forma del vertice usi il completamento del quadrato. Aggiungi un numero scelto con furbizia e poi lo sottrai di nuovo, così nasce un quadrato perfetto.',
    },
    concepts: {
      normal_form: {
        title: 'Forma normale',
        desc: 'La rappresentazione standard. Vedi subito: $a$ = apertura, $c$ = intercetta sull\'asse y (dove la parabola taglia l\'asse y).',
      },
      vertex_form: {
        title: 'Forma del vertice',
        desc: 'Ti mostra subito il vertice $S(d \\mid e)$. Ideale per: leggere il punto di massimo/minimo, riconoscere una traslazione.',
      },
      pq_formula: {
        title: 'Formula risolutiva',
        desc: 'Il tuo strumento per gli zeri. Condizione: l\'equazione deve avere la forma $x^2 + px + q = 0$ (il coefficiente davanti a $x^2$ deve essere 1!).',
      },
      discriminant: {
        title: 'Discriminante',
        desc: 'L\'espressione sotto la radice decide: $D > 0$ = due zeri, $D = 0$ = uno zero, $D < 0$ = nessuno zero reale.',
      },
    },
    examples: {
      vertex: {
        title: 'Trovare la forma del vertice',
        context: 'Mia vuole calcolare il punto più alto del salto di Lumi.',
        step1: 'La funzione è data in forma normale:',
        step2: 'Completamento del quadrato: aggiungiamo $(\\frac{6}{2})^2 = 9$ e lo sottraiamo di nuovo:',
        step3: 'Raccogliamo — l\'espressione tra parentesi è un quadrato perfetto:',
        step4: 'Leggiamo il vertice: $d = 3$, $e = -4$, quindi:',
        mia_comment: 'Il vertice in $(3 \\mid -4)$ è il punto più basso, perché $a = 1 > 0$. Per una curva di salto mi serve $a < 0$, così diventa il punto più alto!',
      },
      pq: {
        title: 'Zeri con la formula risolutiva',
        context: 'Dove tocca di nuovo terra Lumi?',
        step1: 'Dato: l\'equazione è già nella forma giusta (coefficiente di $x^2$ = 1):',
        step2: 'Leggiamo i valori di $p$ e $q$:',
        step3: 'Sostituiamo nella formula risolutiva e calcoliamo:',
        step4: 'Lumi atterra quindi in $x = 2$ oppure in $x = -4$:',
        mia_comment: 'Due zeri — la parabola taglia l\'asse x due volte. Nel gioco significa: Lumi stacca da terra in $x = -4$ e atterra in $x = 2$!',
      },
    },
    realworld: {
      basketball: {
        title: 'Tiro a canestro',
        desc: 'Ogni tiro a canestro descrive una parabola. L\'altezza $h$ dipende dal tempo $t$. Gli allenatori lo usano per calcolare l\'angolo di tiro ottimale.',
      },
      bridge: {
        title: 'Ponti sospesi',
        desc: 'Nei ponti sospesi come il Golden Gate Bridge, il cavo portante pende quasi esattamente a forma di parabola – perché l\'impalcato distribuisce il suo peso in modo uniforme sul cavo.',
      },
      pricing: {
        title: 'Ottimizzazione dei prezzi',
        desc: 'Un negozio vuole sapere: quale prezzo porta il guadagno più alto? Se il prezzo sale, comprano meno persone — il guadagno è una parabola con un massimo.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Errore di segno',
        correct: 'Fai attenzione al segno',
        why: 'In $f(x) = (x - d)^2 + e$ c\'è un meno davanti a $d$. Questo significa: $f(x) = (x - 3)^2$ ha il vertice in $d = +3$, non in $-3$!',
        mia_warning: 'Questo errore di segno mi è costato 3 ore di debugging. La curva di salto di Lumi era spostata a sinistra invece che a destra!',
      },
      pq_wrong: {
        wrong: 'Formula risolutiva senza divisione',
        correct: 'Prima dividi per $a$',
        why: 'La formula risolutiva funziona solo se il coefficiente davanti a $x^2$ è uguale a 1. Con $2x^2 + 4x - 6 = 0$ devi prima dividere per 2: $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'Mia ha un problema con il rilevamento delle collisioni: quando tocca un ostacolo Lumi? Tim propone di calcolare la distanza tra due punti. "Per questo ti serve Pitagora", dice. Mia si ricorda del teorema studiato a scuola — e all\'improvviso ha tutto senso.',
      challenge: 'Il rilevamento delle collisioni ha bisogno di calcolare la distanza tra gli oggetti.',
      outro: 'Ora il rilevamento delle collisioni di Lumi funziona al pixel! Mia ha usato il teorema di Pitagora per calcolare in tempo reale la distanza tra il personaggio e gli ostacoli.',
    },
    objectives: {
      theorem: 'Applicare con sicurezza il teorema di Pitagora',
      calculate_sides: 'Calcolare i lati mancanti in un triangolo rettangolo',
      recognize: 'Riconoscere quando si ha un triangolo rettangolo',
      apply: 'Applicare il teorema a problemi della vita quotidiana',
    },
    explanation: {
      intro: 'In ogni triangolo rettangolo vale una regola semplice ma potente: la somma dei quadrati dei cateti è uguale al quadrato dell\'ipotenusa.',
      sides: 'Qui $c$ è sempre il lato più lungo — l\'ipotenusa. Si trova di fronte all\'angolo retto. I due lati più corti $a$ e $b$ si chiamano cateti.',
      mia_tip: 'Nel mio gioco calcolo la distanza tra Lumi e un oggetto come ipotenusa. La distanza orizzontale è $a$, quella verticale è $b$ — e $c$ è la distanza reale!',
      solving: 'Puoi ricavare dalla formula qualsiasi lato. Se cerchi l\'ipotenusa:',
    },
    concepts: {
      theorem: {
        title: 'Teorema di Pitagora',
        desc: 'Vale solo nei triangoli rettangoli. $c$ è l\'ipotenusa (di fronte all\'angolo retto), $a$ e $b$ sono i cateti.',
      },
      hypotenuse: {
        title: 'Calcolare l\'ipotenusa',
        desc: 'Se conosci entrambi i cateti, estrai la radice dalla somma dei quadrati.',
      },
      cathetus: {
        title: 'Calcolare un cateto',
        desc: 'Se conosci l\'ipotenusa e un cateto, estrai la radice dalla differenza.',
      },
    },
    examples: {
      screen: {
        title: 'Calcolare la diagonale dello schermo',
        context: 'Mia vuole sapere quanto è grande davvero lo schermo del suo nuovo monitor.',
        step1: 'Il monitor è largo 16 pollici e alto 9 pollici:',
        step2: 'Applichiamo Pitagora — larghezza e altezza sono i cateti:',
        step3: 'Estraiamo la radice per la diagonale:',
        mia_comment: '18,36 pollici di diagonale — è il valore che i produttori indicano come "dimensione dello schermo". Adesso so perché!',
      },
      ladder: {
        title: 'Scala appoggiata al muro',
        context: 'Quanto in alto arriva una scala di 5 metri che sta a 1,5 m dal muro?',
        step1: 'La scala è l\'ipotenusa, la distanza dal muro è un cateto:',
        step2: 'Ricaviamo il cateto cercato (l\'altezza):',
        step3: 'La scala arriva a quasi 4,77 m di altezza:',
        mia_comment: 'Nel gioco uso proprio questo calcolo per controllare se Lumi riesce a raggiungere una scala!',
      },
    },
    realworld: {
      screen: {
        title: 'Diagonale dello schermo',
        desc: 'La "dimensione" di uno schermo è sempre la diagonale — calcolata con Pitagora da larghezza e altezza.',
      },
      football: {
        title: 'Diagonale del campo da calcio',
        desc: 'Un campo da calcio misura 105 m × 68 m. Quanto c\'è da un angolo all\'altro? Pitagora te lo dice.',
      },
      wifi: {
        title: 'Portata del Wi-Fi',
        desc: 'Il tuo router è al piano terra, tu sei al primo piano. La distanza reale dal router è l\'ipotenusa formata dalla distanza orizzontale e da quella verticale.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Ipotenusa scambiata per un cateto',
        correct: 'c è sempre il lato più lungo',
        why: 'L\'ipotenusa $c$ si trova SEMPRE di fronte all\'angolo retto. È il lato più lungo. Se la scambi con un cateto, tutto il calcolo è sbagliato.',
      },
      root: {
        wrong: 'Radice della somma',
        correct: 'Prima somma, poi radice',
        why: '$\\sqrt{a^2 + b^2}$ NON è la stessa cosa di $a + b$! Esempio: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, ma $3 + 4 = 7$.',
        mia_warning: 'Questo errore l\'ha trovato Tim nel mio codice — il rilevamento delle collisioni era impreciso del 40%!',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'Mia vuole costruire un sistema di loot per Hafenlichter. I giocatori devono poter trovare oggetti rari — ma non troppo spesso, altrimenti diventa noioso, e non troppo di rado, altrimenti è frustrante. "È puro calcolo delle probabilità", dice Jule. Mia si siede e fa i conti.',
      challenge: 'Il sistema di loot drop deve essere giusto ed emozionante.',
      outro: 'Il sistema di loot di Mia funziona! Ha bilanciato le probabilità di drop in modo che, in media, i giocatori trovino un oggetto raro ogni 20 casse. "La matematica dietro è in fondo semplice", sorride — "ma il bilanciamento ha comunque richiesto tempo."',
    },
    objectives: {
      basic: 'Indicare le probabilità come frazione, numero decimale e percentuale',
      tree: 'Risolvere esperimenti casuali a più fasi con i diagrammi ad albero',
      expected_value: 'Calcolare e interpretare il valore atteso',
      complement: 'Lavorare con la probabilità dell\'evento contrario ("almeno una volta...")',
    },
    explanation: {
      intro: 'Quanto è probabile tirare un 6 con il dado? Quante possibilità ci sono di trovare un oggetto raro nel gioco? Per rispondere a queste domande ti serve il calcolo delle probabilità. L\'idea di base è semplice:',
      range: 'Le probabilità stanno sempre tra 0 (impossibile) e 1 (certo). Puoi scriverle come frazione ($\\frac{1}{6}$), numero decimale ($0{,}167$) o percentuale ($16{,}7\\%$).',
      mia_tip: 'In Hafenlichter $P(\\text{oggetto raro}) = 0{,}05$. Significa: a ogni drop il giocatore ha il 5% di possibilità. Sembra poco — ma su tanti drop si accumula!',
      tree: 'Negli esperimenti a più fasi (per es. lanciare il dado due volte) usi un diagramma ad albero. Lungo un percorso moltiplichi le probabilità:',
      complement: 'Spesso è più facile calcolare "il contrario". La probabilità che qualcosa NON succeda è:',
    },
    concepts: {
      laplace: {
        title: 'Esperimento di Laplace',
        desc: 'Se tutti i risultati sono ugualmente probabili (come con un dado equo), basta dividere: risultati favorevoli diviso tutti i risultati possibili.',
      },
      complement: {
        title: 'Probabilità dell\'evento contrario',
        desc: 'La probabilità che A NON si verifichi. Utilissima per gli esercizi del tipo "almeno una volta"!',
      },
      expected: {
        title: 'Valore atteso',
        desc: 'Il valore "medio" dopo molte ripetizioni. Con il dado: $E(X) = 3{,}5$ — non potrai mai tirare 3,5, ma in media si ottiene questo valore.',
      },
    },
    examples: {
      dice: {
        title: 'Tirare un numero pari',
        context: 'Quanto è probabile ottenere un numero pari lanciando il dado?',
        step1: 'Il dado ha 6 facce — questo è il nostro $\\Omega$:',
        step2: 'Risultati favorevoli (numeri pari): 2, 4, 6 — cioè 3:',
        step3: 'Calcoliamo la probabilità:',
        mia_comment: '50% — è intuitivo. Ma con domande più complesse la formula ti aiuta quando l\'intuito non basta!',
      },
      loot: {
        title: 'Almeno un oggetto raro',
        context: 'Mia vuole sapere: quanto è probabile ottenere almeno un oggetto raro in 10 loot drop?',
        step1: 'La probabilità di un oggetto raro per ogni drop è del 5%:',
        step2: 'Usiamo l\'evento contrario: prima calcoliamo che in 10 drop NON arrivi nessun oggetto raro:',
        step3: 'È circa il 60% — nel 60% dei casi NON si ottiene nessun oggetto raro:',
        step4: 'La probabilità contraria è la risposta cercata:',
        mia_comment: '40% di possibilità di almeno un oggetto raro in 10 drop — mi sembra giusto! Se i giocatori si frustrano, alzo semplicemente il drop rate.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Loot box nei videogiochi',
        desc: 'Giochi come Genshin Impact o EA Sports FC usano le probabilità per le loro loot box. Negli store di Apple e Google le probabilità di vincita devono essere mostrate – con la matematica puoi controllare se un acquisto conviene.',
      },
      shuffle: {
        title: 'Shuffle di Spotify',
        desc: 'Lo shuffle di Spotify non è davvero casuale — perché il caso "vero" sembra strano (a volte la stessa canzone arriva 3 volte di fila). Spotify usa algoritmi che "sembrano" più casuali.',
      },
      lottery: {
        title: 'Probabilità di vincere al lotto',
        desc: '6 numeri giusti al lotto — sembra fattibile? La probabilità reale è piccolissima:',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Sommare i percorsi invece di moltiplicare',
        correct: 'Lungo un percorso si moltiplica',
        why: 'Nel diagramma ad albero moltiplichi lungo un percorso (collegamento E). Puoi sommare solo quando metti insieme percorsi diversi (collegamento O).',
        mia_warning: 'Ho fatto questo errore nel sistema di loot. I drop rate erano troppo alti, perché avevo sommato invece di moltiplicare — ogni giocatore aveva subito tutto!',
      },
      percent: {
        wrong: 'Percentuali oltre il 100%',
        correct: 'Il massimo è 100%',
        why: 'Una probabilità non può mai essere maggiore di 1 (= 100%). Se il tuo risultato è $P > 1$, hai fatto un errore di calcolo.',
      },
    },
  },
};
