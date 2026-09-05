export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'Mia sta mettendo insieme il livello 4 di Luci del Porto: Lumi deve saltare su una piattaforma che scivola lentamente e in modo uniforme verso destra. «Il movimento è lineare», spiega Tim. «60 pixel al secondo, tutto qui.» Mia lo digita e se ne accorge subito: è una normalissima equazione della retta. Posizione iniziale più velocità per tempo. Proprio quello che si era portata dietro dalla terza media, solo che ora è più formale: $f(x) = m \\cdot x + b$.',
      challenge: 'Mia deve regolare la curva di salto di Lumi in modo che atterri esattamente sulla piattaforma in movimento. Pendenza dello spostamento della piattaforma e punto di intersezione con la traiettoria di Lumi: tutto lineare.',
      outro: 'Una funzione lineare ha due manopole: $m$ stabilisce quanto è ripida, $b$ la sposta in alto o in basso. Ora Mia capisce perché le serve di continuo: piattaforme, consumo di energia, barre della vita. Ovunque qualcosa cresca o cali di una quantità costante «per passo», l\'equazione della retta è lo strumento giusto.',
    },
    objectives: {
      recognize: 'Riconoscere le funzioni lineari dall\'espressione e dal grafico',
      slope_intercept: 'Leggere la pendenza $m$ e l\'intercetta $b$ nella forma esplicita $f(x) = mx + b$',
      point_slope: 'Scrivere la retta a partire da un punto e da una pendenza con la forma punto-pendenza',
      two_points: 'Determinare l\'equazione della retta da due punti: calcolare la pendenza e poi $b$',
    },
    explanation: {
      intro: 'Una funzione lineare descrive una relazione uniforme: quando $x$ varia di un\'unità, $y$ varia sempre della stessa quantità. Nel grafico si ottiene così una retta. La forma generale è:',
      slope: 'La pendenza $m$ misura esattamente questa «quantità per passo». La ricavi da due punti qualsiasi della retta: differenza delle altezze divisa per differenza delle larghezze:',
      mia_tip: 'Penso alla piattaforma di Lumi: scivola di esattamente 60 pixel al secondo. Questa è la mia $m = 60$ pixel/secondo. Se Lumi parte da $b = 200$, la posizione dopo $t$ secondi è semplicemente $f(t) = 60t + 200$. Una funzione lineare allo stato brado!',
      intercept: 'L\'intercetta $b$ è il valore in cui la retta taglia l\'asse verticale. La leggi direttamente sul grafico, oppure sostituisci $x = 0$ nell\'espressione:',
      point_slope: 'Se conosci un punto $P(x_0 \\mid y_0)$ e la pendenza $m$, il modo più rapido è scrivere la retta in forma punto-pendenza. Da lì ricavi $y$ e ottieni la forma esplicita:',
    },
    concepts: {
      normal_form: {
        title: 'Forma esplicita $f(x) = mx + b$',
        desc: 'La scrittura standard. $m$ è la pendenza, $b$ l\'intercetta. Puoi leggere entrambi i parametri direttamente nell\'espressione, e tutti e due hanno un chiaro significato geometrico.',
      },
      slope: {
        title: 'Pendenza $m$',
        desc: 'Variazione di $y$ per unità di $x$. Da due punti: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Positiva = crescente, negativa = decrescente, $m = 0$ = retta orizzontale.',
      },
      point_slope: {
        title: 'Forma punto-pendenza',
        desc: 'Quando sono noti un punto $(x_0 \\mid y_0)$ e la pendenza $m$: $y - y_0 = m(x - x_0)$. Comoda, perché non devi calcolare $b$ a parte: ricavi semplicemente $y$.',
      },
      parallel_perpendicular: {
        title: 'Parallele e perpendicolari',
        desc: 'Due rette sono parallele se hanno la stessa pendenza ($m_g = m_h$). Sono perpendicolari tra loro quando il prodotto delle pendenze vale $-1$ ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Equazione della retta da due punti',
        context: 'Mia ha due punti di osservazione della traiettoria della piattaforma di Lumi: $P_1(2 \\mid 1)$ e $P_2(5 \\mid 7)$. Quale equazione della retta descrive questo movimento?',
        step1: 'Scrivere i due punti dati:',
        step2: 'Calcolare la pendenza: differenza dei valori y divisa per differenza dei valori x:',
        step3: 'Scrivere la forma punto-pendenza con $P_1(2 \\mid 1)$ e $m = 2$, poi ricavare $y$:',
        step4: 'Equazione della retta completata, in forma esplicita:',
        mia_comment: 'Bel procedimento: due punti → pendenza → sostituire → svolgere. Se più avanti ho anche un terzo punto, posso usarlo per verificare se la mia equazione è giusta.',
      },
      intersection: {
        title: 'Punto di intersezione di due rette',
        context: 'La piattaforma si muove lungo $g\\colon y = 2x - 3$, la traiettoria di salto di Lumi lungo $h\\colon y = -x + 6$. Dove si incontrano?',
        step1: 'Annotare entrambe le equazioni: stessa variabile $x$, stessa variabile $y$:',
        step2: 'Nel punto di intersezione i due valori di $y$ coincidono. Quindi: uguagliare i membri di destra:',
        step3: 'Ricavare $x$: entrambi i termini in $x$ da una parte, le costanti dall\'altra:',
        step4: 'Sostituire il valore di $x$ in una delle due equazioni per ottenere il valore di $y$. Punto di intersezione $S$:',
        mia_comment: 'Nel gioco questo punto di intersezione è esattamente il fotogramma dell\'impatto. Se conosco l\'istante $x = 3$, so in quale fotogramma devo far scattare la collisione.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Tariffa telefonica con canone',
        desc: 'Esempio classico: 9,99 € di canone mensile più 10 centesimi al minuto. Il costo in funzione del tempo di conversazione è una retta perfetta: $b$ è il canone, $m$ il prezzo al minuto.',
      },
      taxi: {
        title: 'Costo del taxi',
        desc: '4 € di scatto alla partenza, poi 2,50 € al chilometro. Il costo totale cresce linearmente con la distanza percorsa. Si legge su ogni ricevuta.',
      },
      constant_speed: {
        title: 'Moto a velocità costante',
        desc: 'Uno skater parte con velocità uniforme $v$ da $s_0$. La distanza percorsa dopo $t$ secondi: $s(t) = v \\cdot t + s_0$. Pura equazione della retta: cambiano soltanto i nomi delle variabili.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Pendenza capovolta: $\\Delta x / \\Delta y$ invece di $\\Delta y / \\Delta x$',
        correct: 'Prima l\'altezza (y), poi la larghezza (x): $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'La pendenza descrive «quanta altezza per passo», quindi la variazione di $y$ al numeratore e quella di $x$ al denominatore. Se capovolgi la frazione ottieni il reciproco: da $m = 2$ esce erroneamente $0{,}5$.',
        mia_warning: 'Il mio trucco: penso a una scala. Altezza dello scalino divisa per larghezza dello scalino. L\'altezza sta sempre sopra nella frazione, come sulla scala.',
      },
      intercept_zero: {
        wrong: 'Confondere l\'intercetta con lo zero della funzione',
        correct: 'Zero della funzione: poni $f(x) = 0$ e ricava $x$',
        why: 'L\'intercetta $b$ è il valore di $y$ per $x = 0$, quindi un valore di $y$. Lo zero è il valore di $x$ per cui $f(x) = 0$. In $f(x) = 2x + 5$ si ha $b = 5$, ma lo zero si trova in $x = -2{,}5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'Mia sta progettando un boss rotante per Luci del Porto. Il boss è un mulino vorticoso a tre bracci, e Lumi deve saltare attraverso gli spazi. «L\'hitbox deve essere circolare», dice Tim. «Altrimenti sembra sbagliato quando Lumi sfiora un braccio che non è nemmeno vicino.» A Mia servono circonferenza, area e angolo di ciascun braccio: geometria del cerchio allo stato puro.',
      challenge: 'Mia deve programmare hitbox rotonde. Inoltre la lunghezza d\'arco che ogni braccio spazza al secondo, altrimenti la velocità di rotazione non torna.',
      outro: 'Con $U = 2\\pi r$ e $A = \\pi r^2$ Mia ha gli strumenti standard. E con i radianti converte gli angoli di rotazione direttamente in distanze percorse, molto più in fretta che passando per i $360°$. «Il radiante è il linguaggio di programmazione delle rotazioni», si annota.',
    },
    objectives: {
      umfang_flaeche: 'Calcolare circonferenza e area di un cerchio a partire dal raggio o dal diametro',
      bogenmass: 'Convertire con sicurezza gli angoli tra gradi e radianti',
      sektor: 'Calcolare area e lunghezza d\'arco di un settore con angolo al centro assegnato',
      bogenlaenge: 'Determinare le lunghezze d\'arco della circonferenza intera e del settore in entrambe le unità angolari',
    },
    explanation: {
      intro: 'Il cerchio è l\'insieme di tutti i punti che distano $r$ dal centro. Da questa unica misura $r$ discendono circonferenza e area, entrambe con la famosa costante $\\pi \\approx 3{,}14159$:',
      bogenmass: 'Invece di misurare gli angoli in gradi si può usare anche la corrispondente lunghezza d\'arco sulla circonferenza unitaria: questo si chiama radiante. Una circonferenza intera misura $2\\pi r$, quindi $360°$ corrisponde esattamente a $2\\pi$. Per ogni angolo $\\alpha$ in radianti vale:',
      mia_tip: 'All\'inizio il radiante mi sembrava strano. Ma nel codice è molto più pratico: quando scrivo Math.cos(angle) in JavaScript, la funzione si aspetta radianti, non gradi. Chi se ne dimentica all\'improvviso ruota gli sprite nella direzione sbagliata.',
      umrechnung: 'La conversione passa dalla regola di proporzione «$360° = 2\\pi\\,\\text{rad}$». Ne esce un fattore fisso con cui trasformi gradi e radianti l\'uno nell\'altro:',
      sektor: 'Un settore è una «fetta di torta» del cerchio. La sua parte di area e di circonferenza corrisponde esattamente alla parte che il suo angolo al centro occupa dell\'angolo giro. Con l\'angolo $\\alpha$ (in gradi o in radianti) vale:',
    },
    concepts: {
      umfang: {
        title: 'Circonferenza $U$',
        desc: 'La lunghezza della linea circolare. Dipende linearmente dal raggio: raggio doppio significa circonferenza doppia. Con il diametro $d = 2r$ si scrive spesso anche $U = \\pi d$.',
      },
      flaeche: {
        title: 'Area $A$',
        desc: 'La superficie racchiusa. Dipende dal quadrato del raggio: raggio doppio significa area quadrupla. Importante per tutti i problemi del tipo «quanto materiale» e «quanto contenuto».',
      },
      bogenmass: {
        title: 'Radiante',
        desc: 'Unità angolare che misura l\'angolo come lunghezza d\'arco sulla circonferenza unitaria. Angolo giro = $2\\pi$, angolo piatto = $\\pi$, angolo retto = $\\frac{\\pi}{2}$. Standard in analisi e in programmazione.',
      },
      sektor: {
        title: 'Settore circolare',
        desc: 'Una fetta di torta: due raggi più l\'arco compreso tra essi. Area e lunghezza d\'arco sono grandezze proporzionali: l\'angolo al centro come frazione di $360°$ oppure di $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Circonferenza e area a partire dal raggio',
        context: 'Il boss rotante di Mia ha un raggio di $5\\,\\text{cm}$ sullo schermo. Quanto valgono circonferenza e area?',
        step1: 'È dato il raggio:',
        step2: 'Sostituire nella circonferenza: $U = 2\\pi r$ con $r = 5$. Prima in modo esatto con $\\pi$, poi arrotondato:',
        step3: 'Sostituire nell\'area: $A = \\pi r^2$. Attenzione: prima elevare $r$ al quadrato, poi moltiplicare per $\\pi$:',
        mia_comment: 'Con $r = 5$, circonferenza ($\\approx 31$) e area ($\\approx 79$) sono numeri molto diversi. Se raddoppio il raggio, la circonferenza raddoppia, ma l\'area diventa quattro volte più grande. È l\'effetto del quadrato.',
      },
      sektor: {
        title: 'Area del settore e lunghezza d\'arco',
        context: 'Un braccio del boss spazza un settore di raggio $12\\,\\text{cm}$ e angolo al centro $60°$. Quale area e quale lunghezza d\'arco ne risultano?',
        step1: 'Sono dati raggio e angolo in gradi:',
        step2: 'Determinare la parte del settore rispetto all\'area totale: $\\frac{60°}{360°} = \\frac{1}{6}$:',
        step3: 'Calcolare l\'area del settore, esatta con $\\pi$ e poi arrotondata:',
        step4: 'Lunghezza d\'arco: la stessa parte $\\frac{1}{6}$ della circonferenza $2\\pi r$:',
        mia_comment: 'Il trucco è sempre lo stesso: parte = $\\frac{\\alpha°}{360°}$. La moltiplico per la grandezza del cerchio intero (area o circonferenza). Funziona per $30°$ come per $137{,}5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'Una pizza in 8 fette',
        desc: 'Una pizza di raggio $r$ viene tagliata in 8 fette uguali. Ogni fetta è un settore di $\\frac{360°}{8} = 45°$ e area $\\frac{\\pi r^2}{8}$. Applicazione concreta in ogni cucina.',
      },
      uhr: {
        title: 'Le lancette dell\'orologio come settori',
        desc: 'In un\'ora la lancetta delle ore spazza $30°$ ($\\frac{360°}{12}$), in un minuto quella dei minuti spazza $6°$ ($\\frac{360°}{60}$). Pura matematica dei settori, utile anche per i problemi sugli angoli con gli orologi.',
      },
      riesenrad: {
        title: 'Lunghezza d\'arco della ruota panoramica',
        desc: 'Una cabina della ruota panoramica di Amburgo, di raggio $r$, percorre nel tempo $t$ di un giro completo $T$ la lunghezza d\'arco $b = 2\\pi r \\cdot \\frac{t}{T}$. Da qui si può calcolare anche la velocità della cabina.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'Sostituire i gradi in formule pensate per i radianti',
        correct: 'Prima di $b = \\alpha \\cdot r$ convertire i gradi in radianti',
        why: 'La formula $b = \\alpha \\cdot r$ funziona solo se $\\alpha$ è in radianti. Con $\\alpha = 60°$, scrivere $b = 60 \\cdot r$ è enormemente sbagliato: la scelta giusta sarebbe $\\alpha = \\frac{\\pi}{3} \\approx 1{,}047$, quindi $b \\approx 1{,}047 \\cdot r$.',
        mia_warning: 'È proprio quello che mi ha fatto arrabbiare ruotando gli sprite: avevo messo 60 al posto di 1,047 e il boss ha girato 57 volte più in fretta, sparendo subito dallo schermo!',
      },
      area_vs_circumference: {
        wrong: 'Calcolare l\'area con la formula della circonferenza ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$: quadratica in $r$',
        why: 'Circonferenza e area sono grandezze diverse con unità diverse ($\\text{cm}$ contro $\\text{cm}^2$). $2\\pi r$ è lineare, $\\pi r^2$ quadratica. Se le si confonde, tutti i calcoli successivi saltano, e l\'unità di misura lo rivela subito.',
      },
    },
  },
};
