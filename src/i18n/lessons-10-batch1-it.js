export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia e riuscita a sistemare la curva di salto di Lumi — ma ora e bloccata. Nel livello 3 di "Hafenlichter" Lumi deve atterrare su una piattaforma in movimento. "Mi serve il momento esatto in cui la curva di salto incontra la piattaforma", dice Mia a Tim. Questo significa: deve risolvere un\'equazione quadratica. Non solo disegnare la funzione, ma risolvere concretamente per $x$.',
      challenge: 'Mia deve calcolare quando la curva di salto di Lumi interseca la piattaforma mobile — questo porta a un\'equazione quadratica.',
      outro: 'Mia ha tre metodi nel suo kit: la formula risolutiva, il completamento del quadrato e la fattorizzazione. A seconda dell\'equazione sceglie il metodo giusto — e ora Lumi atterra con precisione su ogni piattaforma. "E come un coltellino svizzero", sorride.',
    },
    objectives: {
      solve: 'Risolvere equazioni quadratiche con sicurezza e indicare l\'insieme delle soluzioni',
      pq_formula: 'Applicare la formula risolutiva — inclusi i casi speciali (nessuna o una sola soluzione)',
      completing_square: 'Comprendere ed eseguire il completamento del quadrato come metodo risolutivo',
      factoring: 'Risolvere equazioni quadratiche tramite fattorizzazione',
    },
    explanation: {
      intro: 'Un\'equazione quadratica ha la forma generale con esponente massimo 2. A differenza delle equazioni lineari ($x$ alla prima), puo avere zero, una o due soluzioni. La forma generale e:',
      normal_form: 'Per la formula risolutiva ci serve la forma normale — cioe il coefficiente davanti a $x^2$ deve essere esattamente 1. Se non lo e, dividiamo tutta l\'equazione per $a$:',
      mia_tip: 'Mi ricordo: prima porto tutto da un lato, cosi a destra c\'e zero. Poi divido per il coefficiente davanti a $x^2$. Solo DOPO posso usare la formula risolutiva!',
      pq_formula: 'La formula risolutiva e lo strumento universale per equazioni quadratiche in forma normale. Leggi $p$ e $q$ direttamente e sostituisci:',
      completing_square: 'Il completamento del quadrato funziona cosi: trasformi il lato sinistro in un quadrato perfetto. Per farlo aggiungi $(\\frac{p}{2})^2$ a entrambi i lati. Il risultato e un\'espressione della forma $(x + \\frac{p}{2})^2$, che puoi risolvere facilmente per $x$.',
      factoring: 'Se conosci (o riesci a indovinare) le radici $x_1$ e $x_2$, puoi scrivere l\'equazione come prodotto di due fattori. Il prodotto e zero quando almeno uno dei fattori e zero:',
    },
    concepts: {
      pq_formula: {
        title: 'Formula risolutiva',
        desc: 'Lo strumento standard per equazioni quadratiche in forma normale. Funziona sempre — ti servono solo $p$ (coefficiente di $x$) e $q$ (termine costante).',
      },
      completing_square: {
        title: 'Completamento del quadrato',
        desc: 'Completi il lato sinistro per ottenere un quadrato perfetto. Particolarmente utile quando vuoi determinare il vertice di una parabola.',
      },
      discriminant: {
        title: 'Discriminante',
        desc: 'L\'espressione sotto la radice nella formula risolutiva: $D > 0$ da due soluzioni, $D = 0$ da esattamente una, $D < 0$ significa nessuna soluzione reale.',
      },
      factoring: {
        title: 'Fattorizzazione',
        desc: 'Scomposizione in due fattori lineari. Funziona in modo particolarmente elegante quando le radici sono numeri interi — spesso puoi indovinarle.',
      },
    },
    examples: {
      pq_application: {
        title: 'Risolvere un\'equazione con la formula risolutiva',
        context: 'Mia calcola quando la curva di salto di Lumi incontra la piattaforma a $y = 0$.',
        step1: 'L\'equazione e gia in forma normale (il coefficiente di $x^2$ e 1):',
        step2: 'Leggiamo $p$ e $q$ — attenzione ai segni:',
        step3: 'Sostituiamo nella formula risolutiva e calcoliamo passo dopo passo:',
        step4: 'Due soluzioni — Lumi incontra la piattaforma in due punti:',
        mia_comment: 'Due soluzioni hanno senso: Lumi salta a $x = 1$ e atterra a $x = 3$. Il tratto intermedio e il volo!',
      },
      completing_square: {
        title: 'Risolvere con il completamento del quadrato',
        context: 'Tim vuole risolvere l\'equazione senza la formula — come alternativa.',
        step1: 'Partiamo dall\'equazione in forma normale:',
        step2: 'Prima portiamo il termine costante a destra:',
        step3: 'Ora il completamento del quadrato: $(\\frac{6}{2})^2 = 9$ — aggiungiamo a entrambi i lati:',
        step4: 'Il lato sinistro e ora un quadrato perfetto — estraendo la radice otteniamo due casi:',
        step5: 'Calcoliamo entrambe le soluzioni:',
        mia_comment: 'Stessa equazione, stesse soluzioni, metodo diverso. Uso il completamento del quadrato quando mi serve anche il vertice della parabola — prendo due piccioni con una fava!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds e parabole di lancio',
        desc: 'Ogni lancio in Angry Birds segue una parabola. L\'equazione $h(t) = 0$ ti dice quando l\'oggetto tocca il suolo. I fisici usano la stessa formula per i moti reali di lancio.',
      },
      breakeven: {
        title: 'Trovare la zona di profitto',
        desc: 'Un\'azienda vuole sapere: da quale quantita iniziamo a guadagnare? L\'equazione $G(x) = 0$ fornisce i punti di pareggio — di solito un\'equazione quadratica.',
      },
      rocket: {
        title: 'Lanci di razzi',
        desc: 'L\'altezza di un razzo dopo il lancio segue una funzione quadratica (finche dura il carburante). Quando raggiunge 1000 m? Equazione quadratica!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Formula risolutiva senza zero al secondo membro',
        correct: 'Prima portare tutto da un lato',
        why: 'La formula risolutiva richiede che il secondo membro sia zero. Per $x^2 + 3x = 5$ devi prima aggiungere $-5$ a entrambi i lati, ottenendo $x^2 + 3x - 5 = 0$. Altrimenti $q$ e sbagliato!',
        mia_warning: 'Ho avuto questo errore nel codice — la collisione con la piattaforma era completamente sbagliata perche $q$ aveva il segno sbagliato. Sempre prima zero a destra!',
      },
      sign_pq: {
        wrong: 'Errore di segno con $p$ nella formula risolutiva',
        correct: 'Fare attenzione al meno davanti a $\\frac{p}{2}$',
        why: 'Nella formula risolutiva c\'e $-\\frac{p}{2}$. Per $x^2 - 6x + 8 = 0$ si ha $p = -6$, quindi $-\\frac{-6}{2} = +3$. Se dimentichi il meno, ottieni $-3$ invece di $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia sta lavorando al livello del faro di Hafenlichter. Il faro proietta un cono di luce sul porto, e Lumi deve nascondersi nell\'ombra. "Devo calcolare quanto lontano arriva il cono di luce a un determinato angolo", dice Mia. Tim indica un triangolo rettangolo che il cono di luce forma con il suolo. "Questa e trigonometria — seno, coseno e tangente."',
      challenge: 'Mia ha bisogno della portata del cono di luce a diversi angoli per programmare la zona d\'ombra.',
      outro: 'Il faro ruota lentamente e il cono di luce si sposta sul porto. Grazie a seno e coseno, il codice di Mia calcola in tempo reale quali aree sono illuminate. Lumi si muove da un\'ombra all\'altra — il livello e diventato davvero emozionante!',
    },
    objectives: {
      sin_cos_tan: 'Applicare con sicurezza seno, coseno e tangente nel triangolo rettangolo',
      unit_circle: 'Comprendere il cerchio unitario e leggerne i valori',
      angle_calculations: 'Calcolare angoli e lunghezze dei lati con funzioni trigonometriche',
      real_problems: 'Risolvere problemi pratici con la trigonometria (altezze, distanze, angoli)',
    },
    explanation: {
      intro: 'La trigonometria collega angoli e lunghezze dei lati. In ogni triangolo rettangolo valgono tre rapporti fondamentali — riferiti all\'angolo $\\alpha$ considerato:',
      mia_tip: 'La mia regola mnemonica: "SOH CAH TOA" — Seno = Opposto/Ipotenusa, Coseno = Adiacente/Ipotenusa, Tangente = Opposto/Adiacente. Suona buffo, ma non lo dimentichi mai!',
      unit_circle: 'Il cerchio unitario ha raggio 1 e centro nell\'origine. Per ogni angolo $\\alpha$ fornisce direttamente i valori: la coordinata $x$ e $\\cos(\\alpha)$, la coordinata $y$ e $\\sin(\\alpha)$. Quindi vale sempre:',
      special_angles: 'Certi angoli dovresti saperli a memoria: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Consiglio: nel cerchio unitario puoi leggere questi valori geometricamente.',
    },
    concepts: {
      sine: {
        title: 'Seno',
        desc: 'Il rapporto tra cateto opposto e ipotenusa. Nel cerchio unitario $\\sin(\\alpha)$ corrisponde alla coordinata $y$ del punto sulla circonferenza.',
      },
      cosine: {
        title: 'Coseno',
        desc: 'Il rapporto tra cateto adiacente e ipotenusa. Nel cerchio unitario $\\cos(\\alpha)$ corrisponde alla coordinata $x$. Coseno e seno sono sfasati di $90°$.',
      },
      tangent: {
        title: 'Tangente',
        desc: 'Il rapporto tra cateto opposto e cateto adiacente — oppure equivalentemente $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideale per pendenze e angoli di inclinazione.',
      },
      unit_circle: {
        title: 'Cerchio unitario',
        desc: 'Un cerchio con raggio 1. Ogni punto sulla circonferenza ha coordinate $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Cosi si possono definire sin e cos per tutti gli angoli — non solo per quelli acuti.',
      },
    },
    examples: {
      height_tan: {
        title: 'Calcolare un\'altezza con la tangente',
        context: 'Mia misura l\'angolo verso la cima del faro: $35°$. La distanza dalla torre e $50\\,\\text{m}$.',
        step1: 'Schema: la distanza e il cateto adiacente, l\'altezza cercata e il cateto opposto. Quindi tangente:',
        step2: 'Isolare l\'altezza $h$ — moltiplicare entrambi i lati per $50\\,\\text{m}$:',
        step3: 'Calcolatrice (modo DEG!): $\\tan(35°) \\approx 0{,}7002$, sostituire e calcolare:',
        mia_comment: 'Nel gioco succede in tempo reale: l\'angolo del cono di luce cambia, e il mio codice calcola subito la nuova portata. La tangente e perfetta per questo!',
      },
      unit_circle: {
        title: 'Leggere valori dal cerchio unitario',
        context: 'Tim vuole mostrare a Mia come funziona il cerchio unitario — con l\'esempio di $60°$.',
        step1: 'Convertire l\'angolo (opzionale): $60°$ corrisponde a $\\frac{\\pi}{3}$ in radianti:',
        step2: 'Leggere il valore del seno — la coordinata $y$ del punto sul cerchio unitario:',
        step3: 'Leggere il valore del coseno — la coordinata $x$:',
        step4: 'Il punto sul cerchio unitario ha quindi le coordinate:',
        mia_comment: 'Nel cerchio unitario vedo sin e cos come lunghezze. Questo rende tutto molto piu intuitivo che leggere numeri da una tabella!',
      },
    },
    realworld: {
      compass: {
        title: 'Navigazione e GPS',
        desc: 'Il tuo smartphone calcola le direzioni con la trigonometria. La funzione atan2 converte le coordinate $x$ e $y$ in un angolo — cosi Google Maps sa in quale direzione devi andare.',
      },
      building_height: {
        title: 'Misurare l\'altezza degli edifici',
        desc: 'Architetti e geometri misurano le altezze degli edifici senza salire sul tetto. Con un goniometro e la tangente bastano la distanza e l\'angolo.',
      },
      music: {
        title: 'Suoni e onde sonore',
        desc: 'Ogni suono e un\'onda sinusoidale. Il La del diapason ha 440 oscillazioni al secondo — descritto da $f(t) = \\sin(880\\pi t)$. La musica e trigonometria applicata!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Confondere seno e coseno',
        correct: 'Seno = cateto opposto / ipotenusa',
        why: 'Il seno corrisponde al cateto opposto (il lato di fronte all\'angolo), il coseno al cateto adiacente (il lato accanto all\'angolo). Se li confondi, ottieni il valore sbagliato.',
        mia_warning: 'Mi succede ancora ogni tanto! Disegno il triangolo e etichetto i lati rispetto all\'angolo. Cosi vedo subito quale e il cateto opposto e quale l\'adiacente.',
      },
      deg_rad: {
        wrong: 'Modalita angolare sbagliata sulla calcolatrice',
        correct: 'Controllare sempre la modalita DEG per gradi',
        why: 'In modalita RAD la calcolatrice interpreta $90$ come $90$ radianti (circa $5156°$), non come $90°$. $\\sin(90°) = 1$, ma $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Risultato: completamente sbagliato.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter deve avere una modalita multiplayer. Mia testa i server con 10 giocatori — tutto funziona senza problemi. Ma Tim avverte: "Cosa succede con 100? Con 1000? Se il gioco diventa virale, il numero di giocatori potrebbe raddoppiare ogni pochi giorni." Mia fa i calcoli e si spaventa: la crescita esponenziale e molto piu veloce di quanto si pensi.',
      challenge: 'Il carico del server non cresce linearmente con i giocatori, ma esponenzialmente. Mia deve prevedere quando i server saranno sovraccarichi.',
      outro: 'Mia ha costruito un modello che prevede l\'andamento del numero di giocatori. Grazie alla funzione esponenziale ora sa: se il tempo di raddoppio e di 3 giorni, dopo 2 settimane servira 32 volte la capacita del server. "Meglio scalare presto che crollare tardi", decide.',
    },
    objectives: {
      exponential_functions: 'Riconoscere le funzioni esponenziali e distinguerle dalle funzioni lineari',
      growth_factor: 'Determinare il fattore di crescita dalle percentuali e interpretarlo',
      half_life: 'Calcolare e applicare tempo di dimezzamento e tempo di raddoppio',
      model_real_world: 'Modellare processi reali di crescita e decadimento con funzioni esponenziali',
    },
    explanation: {
      intro: 'Nella crescita lineare si aggiunge la stessa quantita ad ogni passo. Nella crescita esponenziale si moltiplica per lo stesso fattore ad ogni passo. Sembra simile — ma porta a risultati completamente diversi:',
      growth_factor: 'Il fattore di crescita $b$ ti dice tutto: se qualcosa cresce del $p\\%$ per unita di tempo, il fattore e maggiore di 1. Se qualcosa diminuisce del $p\\%$ (decadimento), e minore di 1:',
      mia_tip: 'Le funzioni lineari sommano, le funzioni esponenziali moltiplicano. Con il 10% di crescita al giorno il fattore e $b = 1{,}10$ — dopo 7 giorni quindi $1{,}10^7 \\approx 1{,}95$, quasi un raddoppio! Questo mi ha sorpreso nella pianificazione dei server.',
      half_life: 'Il tempo di dimezzamento $t_H$ e il tempo dopo il quale resta solo la meta. E costante — indipendentemente dalla quantita iniziale. Questa e la particolarita del decadimento esponenziale:',
      doubling_time: 'L\'equivalente nella crescita: il tempo di raddoppio $t_V$ ti dice dopo quanto tempo il valore si e raddoppiato. Anche questo resta sempre uguale:',
    },
    concepts: {
      exponential_function: {
        title: 'Funzione esponenziale',
        desc: 'La forma generale: $a$ e il valore iniziale, $b$ il fattore di crescita, $t$ il tempo. Fondamentale: la variabile sta nell\'esponente — questa e la differenza rispetto alle funzioni potenza.',
      },
      growth_factor: {
        title: 'Fattore di crescita',
        desc: 'Per un aumento del $p\\%$: $b = 1 + \\frac{p}{100}$. Esempio: 5% di crescita da $b = 1{,}05$. Per una diminuzione del 12%: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Tempo di dimezzamento',
        desc: 'Il tempo necessario affinche un valore si dimezzi. Tipico per il decadimento radioattivo, i farmaci nel corpo o la scarica della batteria. Il tempo di dimezzamento e indipendente dal valore iniziale.',
      },
      euler_base: {
        title: 'Funzione esponenziale naturale',
        desc: 'La base $e \\approx 2{,}718$ e speciale: la funzione $e^x$ e la derivata di se stessa. Con $k > 0$ cresce, con $k < 0$ decade. Standard nelle scienze naturali.',
      },
    },
    examples: {
      bacteria: {
        title: 'Crescita batterica',
        context: 'Una coltura batterica inizia con 500 batteri e raddoppia ogni ora.',
        step1: 'Identificare valore iniziale e fattore di crescita — raddoppio significa fattore 2:',
        step2: 'Costruire la funzione esponenziale — $t$ conta le ore:',
        step3: 'Per $t = 5$ (dopo 5 ore) sostituire: $2^5 = 32$:',
        step4: 'Dopo 5 ore ci sono 16.000 batteri:',
        mia_comment: 'Da 500 a 16.000 in sole 5 ore! Questo dimostra perche la crescita esponenziale e cosi sorprendente. Con i server funziona allo stesso modo — il numero di giocatori puo crescere piu velocemente di quanto si possano ordinare nuovi server.',
      },
      radioactive: {
        title: 'Decadimento radioattivo',
        context: 'Un farmaco ha un tempo di dimezzamento di 8 giorni. Quantita iniziale: 200 g.',
        step1: 'Annotare tempo di dimezzamento e valore iniziale:',
        step2: 'Costruire la formula di decadimento con $t_H = 8$:',
        step3: 'Sostituire per 24 giorni — sono esattamente 3 tempi di dimezzamento ($\\frac{24}{8} = 3$):',
        step4: 'Dopo 24 giorni restano solo 25 g — un ottavo del valore iniziale:',
        mia_comment: 'Dopo ogni tempo di dimezzamento la quantita si dimezza: $200 \\to 100 \\to 50 \\to 25$. E sempre cosi, che tu inizi con 200 g o con 2 tonnellate.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Video virali su TikTok',
        desc: 'Un video virale inizia con 100 visualizzazioni. Se ogni spettatore lo mostra a 1,8 persone, i numeri esplodono: dopo 10 passaggi sono gia oltre 35.000 visualizzazioni. Gli algoritmi amplificano ulteriormente questo effetto.',
      },
      battery: {
        title: 'Scarica della batteria',
        desc: 'La batteria del tuo smartphone perde circa il 5% di carica all\'ora. Dopo 14 ore resta circa la meta — non e un calo lineare, ma un decadimento esponenziale.',
      },
      pandemic: {
        title: 'Diffusione di una pandemia',
        desc: 'Il COVID-19 ha mostrato cosa significa "crescita esponenziale": senza misure i casi raddoppiavano ogni 3 giorni. Dopo un mese il fattore sarebbe stato $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Modello lineare invece di esponenziale',
        correct: 'Variazione percentuale = funzione esponenziale',
        why: '"5% di crescita all\'anno" NON e $+5$ all\'anno, ma $\\cdot 1{,}05$ all\'anno. Nel modello lineare la crescita e costante, in quello esponenziale accelera continuamente.',
        mia_warning: 'All\'inizio avevo calcolato $\\text{Giocatori}(t) = 100 + 50t$. I numeri reali dopo una settimana erano 3 volte piu alti! La crescita esponenziale viene quasi sempre sottovalutata.',
      },
      wrong_growth_factor: {
        wrong: 'Percentuale usata direttamente come fattore',
        correct: 'Fattore = $1 + \\frac{p}{100}$',
        why: 'Con il 3% di crescita il fattore e $1{,}03$, non $3$! Con $b = 3$ il valore si triplicherebbe invece di crescere del 3%. Calcola sempre $1 + \\frac{p}{100}$.',
      },
    },
  },
};
