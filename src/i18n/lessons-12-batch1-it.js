export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Il sistema di particelle di "Hafenlichter 3D" ha un aspetto grandioso — scintille che schizzano, nebbia che ondeggia, fuoco che divampa. Ma Kai ha un problema di prestazioni: migliaia di particelle contemporaneamente fanno sudare la GPU. "Devo calcolare quanto velocemente le particelle svaniscono, per poterle eliminare dalla memoria in tempo", spiega a Mia. La risposta sta nella funzione $e$ e nella sua controparte, il logaritmo naturale — gli strumenti per tutto ciò che cresce o decade in modo esponenziale.',
      challenge: 'Kai deve modellare matematicamente la durata di vita delle particelle: quanto velocemente svanisce una scintilla? Quando una particella di fumo è così trasparente da poter essere cancellata? Per questo gli servono la regola della catena per le funzioni $e$, le derivate di $\\ln$ e la risoluzione di equazioni di decadimento.',
      outro: 'Con funzioni $e$ composte e derivate di $\\ln$, Kai ha costruito un sistema di particelle intelligente: ogni scintilla segue una curva di decadimento precisa, ogni particella di fumo viene riciclata esattamente quando la sua opacità scende sotto la soglia di percezione. "La regola della catena è praticamente il mio ottimizzatore di prestazioni", sorride Kai. "La GPU mi ringrazia con 60 FPS invece di 30." Mia aggiunge: "E il bello è che la stessa matematica descrive anche il decadimento radioattivo e le curve di carica dei condensatori."',
    },
    objectives: {
      advanced_e_properties: 'Derivare funzioni $e$ composte con la regola della catena: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Padroneggiare la derivata di $\\ln(g(x))$ e usarla per lo studio di funzione',
      composite_exp_functions: 'Analizzare prodotti di polinomi e funzioni $e$ (estremi, punti di flesso)',
      differential_equations: 'Comprendere semplici equazioni differenziali del tipo $f\'(t) = k \\cdot f(t)$ e costruire modelli di decadimento',
    },
    explanation: {
      intro: 'In classe 11 hai imparato le basi di $e^x$ e $\\ln(x)$. Ora si fa sul serio: deriviamo funzioni $e$ composte, analizziamo curve con $\\ln$ e risolviamo equazioni di decadimento. La chiave è la regola della catena — se nell\'esponente non c\'è solo $x$ ma un\'intera funzione $g(x)$, la derivata esterna fornisce $e^{g(x)}$ e la derivata interna $g\'(x)$ si aggiunge come fattore:',
      ln_derivative: 'Altrettanto elegante: la derivata di $\\ln(g(x))$ con la regola della catena. Il logaritmo naturale "capovolge la funzione" — la derivata interna sta al numeratore, la funzione interna stessa al denominatore:',
      kai_tip: 'Nel mio motore 3D le funzioni $e$ compaiono ovunque: decadimento delle particelle, densità della nebbia, dissolvenza dell\'audio. Il trucco è sempre lo stesso — la regola della catena. Quando derivo $e^{-0{,}5t^2}$ per una distribuzione gaussiana, la funzione interna è $g(t) = -0{,}5t^2$ e la derivata interna $g\'(t) = -t$. Sostituisci, fatto. Appena hai assimilato questo schema, va avanti in automatico!',
      integration: 'Nell\'integrazione il processo va all\'indietro. Per le funzioni esponenziali semplici vale: il fattore nell\'esponente passa al denominatore. E la famosa regola di $\\frac{1}{x}$ porta direttamente al $\\ln$:',
      decay_model: 'Il decadimento esponenziale è IL modello standard per i processi in cui il tasso di variazione è proporzionale al valore attuale: $f\'(t) = -\\lambda \\cdot f(t)$. La soluzione è sempre una funzione $e$ con esponente negativo. Il tempo di dimezzamento $t_{1/2}$ indica dopo quanto tempo resta la metà del valore iniziale:',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Regola della catena per funzioni $e$',
        desc: 'Per $f(x) = e^{g(x)}$ la funzione esterna è $e^u$ (derivata: $e^u$) e la funzione interna è $g(x)$. Il risultato: la funzione $e$ resta invariata, moltiplicata per la derivata interna. Esempio: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Derivata di $\\ln(g(x))$',
        desc: 'La regola della catena per il logaritmo produce una frazione: derivata interna diviso funzione interna. È particolarmente utile quando $g(x)$ è un polinomio — per es. $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Importante: il dominio è limitato dalla condizione $g(x) > 0$.',
      },
      exp_integration: {
        title: 'Integrazione logaritmica',
        desc: 'Se un integrando ha la forma $\\frac{f\'(x)}{f(x)}$, la primitiva è subito $\\ln|f(x)| + C$. È l\'inverso della derivata di $\\ln$ e uno dei trucchi di integrazione più importanti. Esempio: $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Modellare il decadimento delle particelle',
        context: 'Nel sistema di particelle di Kai partono 5000 scintille contemporaneamente. Il loro numero diminuisce in modo esponenziale — Kai vuole calcolare il tasso di decadimento e il tempo di dimezzamento.',
        step1: 'Costruire il modello di decadimento — $N_0 = 5000$ particelle, costante di decadimento $\\lambda = 0{,}03\\,\\text{s}^{-1}$:',
        step2: 'Derivare con la regola della catena — funzione interna $g(t) = -0{,}03t$, derivata interna $g\'(t) = -0{,}03$:',
        step3: 'Calcolare il tasso iniziale — per $t = 0$ spariscono 150 particelle al secondo:',
        step4: 'Determinare il tempo di dimezzamento — risolvere $N(t_{1/2}) = \\frac{N_0}{2}$ con $\\ln$:',
        kai_comment: 'Dopo 23 secondi metà delle particelle è sparita — quindi posso liberare memoria già prima per la prossima esplosione. Nel motore imposto la soglia di eliminazione al $5\\%$ di opacità, cioè circa $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Studio di funzione con la funzione $e$',
        context: 'Kai modella la luminosità di un lampo di luce: prima aumenta, poi diminuisce. La curva di luminosità ha la forma $f(x) = x^2 \\cdot e^{-x}$ — una tipica "funzione lampo".',
        step1: 'Funzione data — prodotto di un polinomio e di una funzione $e$ decrescente:',
        step2: 'Derivata con la regola del prodotto: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — per il secondo fattore ci serve la regola della catena:',
        step3: 'Zeri della derivata: $e^{-x} > 0$ sempre, quindi decide solo $x(2-x) = 0$:',
        step4: 'Determinare il massimo — calcolare il valore della funzione in $x = 2$:',
        kai_comment: 'Questa curva "prima sale, poi scende" è perfetta per gli effetti di luce. In $x = 0$ è tutto buio, in $x = 2$ c\'è la luminosità massima, poi una dolce attenuazione. Nel mio shader uso proprio questa funzione per il lampo di sparo e i bagliori delle esplosioni!',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Sistemi di particelle nei motori 3D',
        desc: 'Ogni scintilla, ogni scia di fumo, ogni fuoco in un videogioco segue una curva di decadimento esponenziale $N(t) = N_0 \\cdot e^{-\\lambda t}$. La costante di decadimento $\\lambda$ determina quanto velocemente le particelle svaniscono. In Unity e Unreal Engine imposti proprio questo parametro quando configuri "Lifetime" e "Fade".',
      },
      signal_processing: {
        title: 'Elaborazione audio e attenuazione del segnale',
        desc: 'Quando senti un effetto di riverbero in GarageBand o in un programma da DJ, il suono si attenua in modo esponenziale: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. La funzione $e$ controlla il volume, il $\\sin$ l\'oscillazione. Anche i segnali Bluetooth e la portata del Wi-Fi seguono questo modello — ecco perché lo streaming va a scatti quanto più ti allontani dal router.',
      },
      learning_curve: {
        title: 'Curva di apprendimento e progressione delle abilità',
        desc: 'Quanto velocemente impari un nuovo gioco? La curva di apprendimento $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ descrive come le abilità all\'inizio crescono in fretta e poi si avvicinano a un massimo. I game designer usano questo modello per progettare le curve di difficoltà — e anche il tuo cervello segue proprio questa funzione quando impari vocaboli o ti eserciti con uno strumento.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Dimenticare la derivata interna: $(e^{3x})\' = e^{3x}$',
        correct: 'Applicare la regola della catena: $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'Appena nell\'esponente c\'è più di un semplice $x$, DEVI usare la regola della catena. Qui la funzione interna è $g(x) = 3x$ con $g\'(x) = 3$. Questo fattore non può mancare!',
        kai_warning: 'Nel mio shader una volta ho derivato $e^{-0{,}5t^2}$ dimenticando il fattore $-t$. Risultato: particelle che non cambiavano mai — come fumo congelato. Da allora controllo ogni volta: nell\'esponente c\'è più di $x$? Allora regola della catena!',
      },
      ln_negative: {
        wrong: 'Dimenticare il valore assoluto: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Corretto con il valore assoluto: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'La funzione $\\frac{1}{x}$ è definita anche per valori negativi di $x$, ma $\\ln(x)$ solo per $x > 0$. Il valore assoluto garantisce che la primitiva valga su tutto il dominio. Negli integrali definiti con estremi positivi puoi omettere le barre — negli integrali indefiniti mai!',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Per "Hafenlichter 3D" Kai sta costruendo un generatore procedurale di livelli: ponti, tunnel e case devono nascere da curve matematiche fatte ruotare attorno a un asse. "Immaginate: definisco un profilo e lo faccio ruotare — ed ecco una colonna, una cupola o lo scafo di una nave", dice Kai entusiasta. Ma come calcola il volume esatto di questi corpi 3D? La risposta: volumi di rotazione, integrazione per parti e alcune eleganti tecniche di integrazione.',
      challenge: 'Kai deve calcolare il volume di oggetti 3D che nascono dalla rotazione di curve. Inoltre gli serve l\'integrazione per parti per formule di illuminazione complesse e deve verificare se certi integrali convergono davvero.',
      outro: 'Il generatore di livelli funziona: Kai fa ruotare profili di curve attorno agli assi e ottiene corpi 3D perfetti con il volume calcolato esattamente. "L\'integrazione per parti è stata la chiave per gli integrali di illuminazione", racconta ad Amir, "e gli integrali impropri mi mostrano quando un effetto di luce ha un\'energia totale finita — anche se in teoria arriva infinitamente lontano." Mia annuisce: "La stessa matematica la usano gli ingegneri per dimensionare i serbatoi e i fisici per calcolare l\'energia delle onde."',
    },
    objectives: {
      integration_techniques: 'Applicare con sicurezza l\'integrazione per parti e la sostituzione',
      rotation_volumes: 'Calcolare volumi di rotazione attorno all\'asse $x$ con $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Verificare la convergenza degli integrali impropri e calcolarli',
      partial_integration: 'Usare in modo mirato il metodo dell\'integrazione per parti quando bisogna integrare dei prodotti',
    },
    explanation: {
      intro: 'In classe 11 hai conosciuto gli integrali definiti come area. Ora si aggiungono tre nuove tecniche. La prima è l\'integrazione per parti — l\'"inverso" della regola del prodotto. Se devi integrare un prodotto come $x \\cdot e^x$, lo scomponi in $u$ e $v\'$:',
      substitution: 'La seconda tecnica è la sostituzione — l\'"inverso" della regola della catena nella derivazione. Quando una funzione "sta dentro un\'altra", sostituisci la funzione interna con una nuova variabile:',
      kai_tip: 'Il mio trucco per l\'integrazione per parti: "LIATE" — Logaritmo, Inversa trigonometrica, Algebrica, Trigonometrica, Esponenziale. È l\'ordine in cui scegli $u$. Quindi in $\\int x \\cdot e^x\\,\\mathrm{d}x$ si ha $u = x$ (algebrica) e $v\' = e^x$ (esponenziale). In $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$ si ha $u = \\ln(x)$ e $v\' = x$. Funziona quasi sempre!',
      rotation_volume: 'Ora si passa alle tre dimensioni: se fai ruotare il grafico di $f(x)$ attorno all\'asse $x$, nasce un solido di rotazione. Il suo volume lo calcoli immaginando il solido composto da infiniti dischi circolari sottilissimi — ogni disco ha raggio $f(x)$:',
      improper: 'Che cosa succede se un estremo di integrazione è $\\infty$? Oppure se l\'integrando diventa illimitato in un punto? Allora parliamo di integrali impropri. Sostituisci il punto problematico con un limite e verifichi se ne esce un valore finito:',
    },
    concepts: {
      partial_integration: {
        title: 'Integrazione per parti',
        desc: 'L\'inverso della regola del prodotto: scomponi l\'integrando in $u$ (da derivare) e $\\mathrm{d}v$ (da integrare). Obiettivo: il nuovo integrale $\\int v\\,\\mathrm{d}u$ deve essere più semplice di quello di partenza. Applicazione tipica: prodotti di un polinomio e una funzione $e$ oppure di un polinomio e una funzione trigonometrica.',
      },
      rotation_volume: {
        title: 'Volume di rotazione',
        desc: 'Il grafico di una funzione che ruota attorno all\'asse $x$ genera un corpo 3D. Il volume risulta dalla somma di infiniti dischi circolari di raggio $f(x)$ e spessore $\\mathrm{d}x$. Ogni disco ha volume $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$ — sommando (integrando) si ottiene la formula.',
      },
      improper_integral: {
        title: 'Integrali impropri',
        desc: 'Integrali con $\\infty$ come estremo o con integrando illimitato. Sostituisci il punto problematico con una variabile e calcoli il limite. Se il limite esiste ed è finito, l\'integrale si dice convergente — altrimenti divergente. Esempio classico: $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ converge, ma $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ diverge.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Solido di rotazione per il level design',
        context: 'Kai vuole generare una colonna il cui profilo segue la curva $f(x) = \\sqrt{x}$. Tra $x = 0$ e $x = 4$ la curva ruota attorno all\'asse $x$ — quanto è grande il volume della colonna?',
        step1: 'Definire il profilo — la funzione radice quadrata sull\'intervallo $[0;\\,4]$:',
        step2: 'Impostare la formula del volume di rotazione — elevare $f(x)$ al quadrato e mettere $\\pi$ davanti:',
        step3: 'Trovare la primitiva e sostituire gli estremi:',
        step4: 'Risultato — la colonna ha un volume di $8\\pi$ unità di volume:',
        kai_comment: 'È esattamente la formula che usa il mio generatore procedurale! Definisco profili di curve, li faccio ruotare e conosco subito il volume — importante per le simulazioni fisiche, così gli oggetti hanno il peso giusto.',
      },
      partial_int: {
        title: 'Integrazione per parti per l\'illuminazione',
        context: 'Nello shader di calcolo della luce di Kai compare l\'integrale $\\int x \\cdot e^x\\,\\mathrm{d}x$ — un prodotto che non si può integrare direttamente.',
        step1: 'Scegliere la scomposizione: $u = x$ (diventa più semplice derivando), $v\' = e^x$ (si integra facilmente):',
        step2: 'Determinare derivate e primitive:',
        step3: 'Sostituire nella formula — il nuovo integrale ora è solo $\\int e^x\\,\\mathrm{d}x$:',
        step4: 'Semplificare fino in fondo — raccogliendo si ottiene una forma elegante:',
        kai_comment: 'Il momento in cui il nuovo integrale è più semplice del vecchio — questa è la soddisfazione dell\'integrazione per parti. Se diventa più complicato, hai scelto male $u$ e $v\'$. Allora scambiali e basta!',
      },
    },
    realworld: {
      '3d_printing': {
        title: 'Stampa 3D e calcolo dei volumi in CAD',
        desc: 'Ogni stampante 3D deve sapere quanto materiale le serve. Per i pezzi a simmetria di rotazione (vasi, tubi, ugelli) il software di slicing calcola il volume proprio con questa formula di rotazione. Anche nei programmi CAD come Fusion 360 c\'è il calcolo integrale — quando fai ruotare una sezione, il software calcola $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Attenuazione della luce nei motori di gioco',
        desc: 'Quanta luce totale riceve una scena da una sorgente puntiforme? L\'intensità diminuisce secondo $I(r) = I_0 \\cdot e^{-\\alpha r}$. L\'integrale improprio $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ mostra: l\'energia totale è finita! Per questo i motori di gioco possono simulare luci con portata limitata senza sbagliare dal punto di vista fisico.',
      },
      terrain_volume: {
        title: 'Generazione del terreno e movimenti di terra',
        desc: 'Nei progetti di costruzione stradale e nei giochi in stile Minecraft bisogna calcolare il volume di paesaggi collinari. La formula $V = \\iint h(x,y)\\,\\mathrm{d}A$ somma l\'altezza su tutta la superficie — un integrale bidimensionale. Gli ingegneri civili calcolano così lo scavo di terra, gli sviluppatori di giochi la quantità di dati per le mesh del terreno.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Dimenticare il quadrato: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Correttamente al quadrato: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Ogni disco circolare ha area $\\pi r^2$ con $r = f(x)$. Senza il quadrato non calcoli l\'area di un cerchio, ma qualcosa di completamente diverso. Promemoria: "pi greco erre quadro" — il quadrato fa parte della formula del cerchio!',
        kai_warning: 'Una volta ho fatto questo errore a una game jam — la mia colonna aveva solo una frazione del volume corretto ed è crollata nella simulazione fisica. Da allora scrivo sempre la formula in grande sul monitor: $V = \\pi \\int [f(x)]^2$!',
      },
      improper_no_limit: {
        wrong: 'Sostituire direttamente $\\infty$ invece di calcolare il limite',
        correct: 'Formulare correttamente il limite e verificare la convergenza',
        why: '$\\infty$ non è un numero che si può sostituire! Devi sempre calcolare il limite $\\lim_{b \\to \\infty}$ e verificare se esiste. Altrimenti è facile non accorgersi che un integrale diverge — come $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, che nonostante la funzione decrescente non ha un valore finito.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: 'Il mondo 3D di "Hafenlichter 3D" prende forma: gru del porto, facciate di edifici, superfici d\'acqua — tutto è fatto di triangoli, e ogni triangolo giace in un piano. "Per un\'illuminazione realistica devo calcolare il vettore normale di ogni superficie", spiega Kai. "E per la collision detection mi servono i punti di intersezione tra rette e piani." Benvenuto nella geometria analitica dello spazio — la matematica dietro ogni motore 3D.',
      challenge: 'Kai deve ricavare equazioni di piani da tre punti, calcolare vettori normali con il prodotto vettoriale, trovare i punti di intersezione retta-piano e determinare le distanze tra oggetti — tutto in tempo reale per il suo motore di gioco.',
      outro: 'Il sistema di collision detection di Kai funziona alla perfezione: i proiettili colpiscono i muri, i personaggi stanno sui pavimenti e l\'illuminazione calcola per ogni superficie l\'incidenza perfetta della luce tramite i vettori normali. "Il prodotto vettoriale è il mio strumento più usato", dice Kai. "Dentro due vettori direzione, fuori il vettore normale — e so subito come è orientata la superficie nello spazio." Amir aggiunge: "E la formula della distanza controlla se un giocatore è abbastanza vicino a un oggetto per raccoglierlo."',
    },
    objectives: {
      plane_equations: 'Scrivere equazioni di piani in forma parametrica, normale e cartesiana e convertirle l\'una nell\'altra',
      line_plane_intersection: 'Calcolare i punti di intersezione di rette con piani e determinare le posizioni reciproche',
      distances_3d: 'Calcolare distanze nello spazio: punto-piano, punto-retta e retta-retta',
      cross_product: 'Padroneggiare il prodotto vettoriale e usarlo per calcolare il vettore normale',
    },
    explanation: {
      intro: 'I piani nello spazio tridimensionale si possono descrivere in modi diversi. La forma parametrica parte da un punto d\'appoggio $\\vec{a}$ e genera il piano con due vettori direzione $\\vec{u}$ e $\\vec{v}$. Ogni punto del piano si raggiunge con valori adatti di $r$ e $s$:',
      normal_form: 'Spesso più elegante è la forma normale: un vettore $\\vec{n}$ perpendicolare al piano (il vettore normale) e un punto $\\vec{a}$ del piano bastano per descrivere l\'intero piano. Da qui si ricava la forma cartesiana — un\'unica equazione con $x_1$, $x_2$ e $x_3$:',
      kai_tip: 'Nel mio motore 3D salvo ogni superficie in forma cartesiana — tre coefficienti e una costante, tutto qui. Per il rendering mi serve il vettore normale per l\'illuminazione ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$ — il prodotto scalare con il vettore della luce dà il valore di luminosità). E per la fisica mi servono intersezioni e distanze. Tutte e tre le forme sono utili — ognuna per uno scopo diverso!',
      cross_product: 'Il prodotto vettoriale $\\vec{u} \\times \\vec{v}$ fornisce un vettore perpendicolare a entrambi i vettori di partenza — perfetto per calcolare il vettore normale a partire da due vettori direzione. Attenzione: l\'ordine è importante (anticommutativo)!',
      distance_point_plane: 'La distanza di un punto $P$ da un piano $E$ si calcola in modo elegante con la forma normale di Hesse. Sostituisci il punto nell\'equazione cartesiana, prendi il valore assoluto e dividi per la lunghezza del vettore normale:',
    },
    concepts: {
      plane_equation: {
        title: 'Equazione del piano in forma cartesiana',
        desc: 'La rappresentazione più compatta di un piano: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. I coefficienti $n_1, n_2, n_3$ sono le componenti del vettore normale, $d$ si ottiene sostituendo un punto noto del piano. Ogni punto $(x_1, x_2, x_3)$ che soddisfa l\'equazione giace nel piano.',
      },
      cross_product: {
        title: 'Prodotto vettoriale',
        desc: 'Il prodotto vettoriale di due vettori $\\vec{u}$ e $\\vec{v}$ fornisce un nuovo vettore $\\vec{n}$ perpendicolare a entrambi. Il suo modulo $|\\vec{u} \\times \\vec{v}|$ corrisponde all\'area del parallelogramma che generano. Importante: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ — l\'ordine determina il verso!',
      },
      distance_formula: {
        title: 'Distanza punto-piano',
        desc: 'La distanza minima di un punto $P$ da un piano è la lunghezza della perpendicolare da $P$ al piano. La formula $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ calcola questa distanza direttamente dalla forma cartesiana. Il valore assoluto al numeratore è decisivo — senza potrebbe risultare una "distanza" negativa.',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Piano da tre vertici',
        context: 'Kai ha nel suo mondo di gioco un triangolo con i vertici $A(1|0|2)$, $B(3|1|0)$ e $C(0|4|1)$. Gli serve l\'equazione del piano per l\'illuminazione e il rilevamento delle collisioni.',
        step1: 'Tre punti dati — da questi si formano due vettori direzione:',
        step2: 'Calcolare i vettori direzione $\\vec{u} = \\overrightarrow{AB}$ e $\\vec{v} = \\overrightarrow{AC}$:',
        step3: 'Calcolare per esteso il prodotto vettoriale $\\vec{n} = \\vec{u} \\times \\vec{v}$ — componente per componente secondo la formula:',
        step4: 'Scrivere la forma cartesiana — il vettore normale fornisce i coefficienti, $d$ si ottiene sostituendo $A$: $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$:',
        kai_comment: 'Nel motore succede esattamente questo per ogni triangolo: dentro tre vertici, calcolo del prodotto vettoriale, piano salvato. Il vettore normale determina anche in quale direzione "guarda" la superficie — decisivo per l\'illuminazione e il backface culling!',
      },
      collision_detection: {
        title: 'Intersezione retta-piano (raycast)',
        context: 'Un proiettile vola in linea retta attraverso lo spazio. Kai deve verificare se e dove colpisce un muro — questo è un raycast: il punto di intersezione tra retta e piano.',
        step1: 'Retta (traiettoria) e piano (muro) dati:',
        step2: 'Sostituire la retta nell\'equazione del piano — le componenti di $\\vec{x}(t)$ al posto di $x_1, x_2, x_3$:',
        step3: 'Risolvere rispetto a $t$ — raccogliere e semplificare:',
        step4: 'Calcolare il punto di intersezione — sostituire $t = 0$ nell\'equazione della retta:',
        kai_comment: 'Con $t = 0$ la retta colpisce subito il piano — il proiettile parte quindi direttamente dal muro. Nel motore controllo anche $t > 0$ (direzione in avanti) e $0 \\leq t \\leq t_{\\max}$ (portata). Così scarto i colpi alle spalle del giocatore o fuori portata.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: 'Rendering 3D e illuminazione',
        desc: 'Ogni motore 3D calcola l\'illuminazione con il prodotto scalare tra vettore normale e direzione della luce: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Più piccolo è l\'angolo tra la luce e la normale alla superficie, più la superficie è luminosa. È il modello di illuminazione di Lambert — la base della luce realistica in giochi, film e app AR.',
      },
      architecture: {
        title: 'Architettura e software BIM',
        desc: 'Nei programmi di architettura come AutoCAD o Revit, falde del tetto, pareti e rampe vengono modellate come piani. La forma cartesiana descrive la posizione nello spazio, il vettore normale mostra l\'orientamento. Gli ingegneri strutturisti calcolano con le equazioni dei piani come agiscono le forze su superfici inclinate — dal tetto alla carreggiata di un ponte.',
      },
      gps_navigation: {
        title: 'GPS e navigazione dei droni',
        desc: 'Le coordinate GPS sono tridimensionali (longitudine, latitudine, altitudine). I droni navigano lungo rette nello spazio 3D e devono riconoscere gli ostacoli — modellati come piani. La distanza punto-piano decide se un drone si avvicina troppo alla facciata di una casa. La stessa matematica la usano le auto a guida autonoma per analizzare i dati LIDAR.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Ignorare l\'ordine: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Anticommutativo: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'Il prodotto vettoriale NON è commutativo — l\'ordine determina il verso del vettore risultato (regola della mano destra). Scambiare i fattori cambia il segno. Questo può far sì che i vettori normali puntino nella direzione sbagliata, invertendo l\'intera illuminazione.',
        kai_warning: 'Questo bug si riconosce subito: superfici illuminate "dall\'interno", mentre il lato esterno resta buio. Succede quando il vettore normale punta nella direzione sbagliata. Sii sempre coerente con l\'ordine — $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, mai al contrario!',
      },
      distance_abs_forgotten: {
        wrong: 'Dimenticare il valore assoluto al numeratore: $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'Con il valore assoluto: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: 'Le distanze sono sempre positive! Senza il valore assoluto al numeratore può uscire un valore negativo quando il punto si trova "dall\'altra parte" del piano. Nella verifica ti costa punti, nel motore di gioco porta a oggetti che cadono attraverso i muri.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Prima dell\'uscita di "Hafenlichter 3D" c\'è il grande playtest: 200 tester giocano per una settimana e Kai deve prendere decisioni difficili. Il bilanciamento è equo? Il tasso di crash è accettabile? "L\'istinto non basta", dice Mia. "Ti serve un test statistico che ti dica se un effetto osservato è reale — o solo un caso." Benvenuto nei test d\'ipotesi: la matematica dietro le decisioni basate sui dati.',
      challenge: 'Kai deve decidere se le differenze osservate nel playtest sono statisticamente significative. L\'eroe A è davvero più debole dell\'eroe B, o ha solo avuto sfortuna? Il nuovo tasso di crash è davvero aumentato? Per questo gli servono ipotesi nulle, livelli di significatività e la gestione dei tipi di errore.',
      outro: 'Il playtest è stato analizzato: Kai ha dimostrato statisticamente che l\'eroe A è troppo debole ($p = 0{,}028 < 0{,}05$) e che il tasso di crash nella nuova build è aumentato in modo significativo. "Senza test d\'ipotesi forse avrei ignorato questi problemi", ammette. Mia aggiunge: "Il bello è che ora sai esattamente quanto è sicura la tua decisione — il livello di significatività quantifica il tuo rischio di sbagliare."',
    },
    objectives: {
      null_hypothesis: 'Formulare correttamente ipotesi nulla e ipotesi alternativa e distinguere tra test unilaterali e bilaterali',
      significance_level: 'Comprendere il livello di significatività $\\alpha$ e interpretarlo come probabilità di errore',
      test_decision: 'Determinare le regioni di rifiuto e prendere decisioni di test in modo sistematico',
      error_types: 'Distinguere errori di I e II tipo e comprendere il compromesso tra $\\alpha$ e $\\beta$',
    },
    explanation: {
      intro: 'Un test d\'ipotesi è un procedimento strutturato per prendere una decisione sulla base dei dati. Parti da una supposizione (ipotesi nulla $H_0$), raccogli dati e verifichi se i dati parlano contro $H_0$. L\'ipotesi alternativa $H_1$ descrive ciò che in realtà sospetti:',
      significance: 'Il livello di significatività $\\alpha$ è la probabilità massima con cui rifiuti $H_0$ per errore (errore di I tipo). Valori tipici sono $\\alpha = 0{,}05$ (5\\%) o $\\alpha = 0{,}01$ (1\\%). Più piccolo è $\\alpha$, più il test è severo — ma tanto più facilmente non ci si accorge di effetti reali:',
      kai_tip: 'Pensate ai test d\'ipotesi come a un sistema anti-cheat: $H_0$ significa "Il giocatore NON bara". $\\alpha = 0{,}05$ vuol dire: solo nel 5\\% dei casi banno un giocatore onesto. Voglio tenere $\\alpha$ piccolo per proteggere gli innocenti — ma se lo rendo troppo piccolo, i veri cheater passano. È il compromesso alfa-beta!',
      rejection_region: 'La regione di rifiuto contiene tutti i risultati del test così estremi da farci rifiutare $H_0$. In un test unilaterale sinistro ($H_1\\colon p < p_0$) la regione di rifiuto sta a sinistra — calcoli il numero $k$ più grande per cui vale $P(X \\leq k) \\leq \\alpha$:',
      error_types: 'Possono capitare due errori: errore di I tipo ($\\alpha$) — rifiuti $H_0$ anche se è vera ("falso allarme"). Errore di II tipo ($\\beta$) — mantieni $H_0$ anche se è vera $H_1$ ("effetto mancato"). Con numerosità del campione $n$ fissata vale: se riduci $\\alpha$, $\\beta$ aumenta — e viceversa:',
    },
    concepts: {
      hypotheses: {
        title: 'Ipotesi nulla e ipotesi alternativa',
        desc: '$H_0$ è l\'ipotesi dello "status quo", che vale finché i dati non la contraddicono. $H_1$ è ciò che vuoi davvero dimostrare. Test unilaterale sinistro: $H_1\\colon p < p_0$. Test unilaterale destro: $H_1\\colon p > p_0$. Test bilaterale: $H_1\\colon p \\neq p_0$. Importante: $H_1$ non si "dimostra" mai — $H_0$ si può solo rifiutare o mantenere.',
      },
      significance_level: {
        title: 'Livello di significatività $\\alpha$',
        desc: 'Il limite superiore per la probabilità di un errore di I tipo. Con $\\alpha = 0{,}05$ accetti un rischio del 5\\% di rifiutare $H_0$ per errore. Valori usuali: $0{,}10$ (esplorativo), $0{,}05$ (standard), $0{,}01$ (severo). $\\alpha$ si fissa PRIMA del test — mai adattato a posteriori!',
      },
      error_types: {
        title: 'Errori di I e II tipo',
        desc: 'Errore di I tipo ($\\alpha$): $H_0$ viene rifiutata anche se è vera — un "falso allarme". Errore di II tipo ($\\beta$): $H_0$ viene mantenuta anche se $H_1$ è vera — un "effetto mancato". Con $n$ fissato, $\\alpha$ e $\\beta$ vanno in direzioni opposte: $\\alpha$ più piccolo significa $\\beta$ più grande. Rimedio: una numerosità del campione $n$ più grande.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Test di bilanciamento: l\'eroe A è troppo debole?',
        context: 'In 100 partite tra l\'eroe A e l\'eroe B, l\'eroe A vince solo 40 volte. Kai sospetta che l\'eroe A sia svantaggiato. Con un bilanciamento equo dovrebbe valere $p = 0{,}5$.',
        step1: 'Fissare ipotesi e livello di significatività — test unilaterale sinistro, perché Kai sospetta che A sia troppo debole:',
        step2: 'Impostazione dell\'esperimento: $n = 100$ partite, $X$ = numero di vittorie dell\'eroe A, con distribuzione binomiale:',
        step3: 'Calcolare la probabilità di $X \\leq 40$ sotto $H_0$ (distribuzione binomiale cumulata):',
        step4: 'Decisione del test: valore $p$ $0{,}028 < \\alpha = 0{,}05$ — $H_0$ viene rifiutata. L\'eroe A è significativamente troppo debole:',
        kai_comment: 'Era la prova statistica che mi serviva per il team di bilanciamento. 40 su 100 sembra "quasi okay", ma il test mostra: con un bilanciamento equo un risultato così estremo si vedrebbe solo nel 2{,}8\\% dei casi. Basta per un aggiornamento con nerf!',
      },
      crash_rate: {
        title: 'Verificare il tasso di crash dopo un aggiornamento',
        context: 'Dopo una patch il tasso di crash dovrebbe essere al massimo del 2\\%. In 200 sessioni di test il gioco va in crash 8 volte. È troppo?',
        step1: 'Formulare le ipotesi — test unilaterale destro, perché Kai vuole verificare se il tasso è SOPRA il 2\\%:',
        step2: 'Dati: $n = 200$ sessioni, $X = 8$ crash (osservato: $\\hat{p} = 4\\%$):',
        step3: 'Calcolare la probabilità di $X \\geq 8$ sotto $H_0$ — questo è il valore $p$:',
        step4: 'Decisione del test: valore $p$ $0{,}042 < \\alpha = 0{,}05$ — il tasso di crash è significativamente aumentato:',
        kai_comment: 'Senza il test forse avrei detto "8 crash su 200 sessioni, ci può stare". Ma il test d\'ipotesi mostra: la probabilità di vedere così tanti crash con un tasso reale del 2\\% è sotto il 5\\%. La patch va rivista.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B testing in app e siti web',
        desc: 'Ogni volta che Netflix cambia il pulsante "Riproduci ora" o Spotify prova una nuova vista delle playlist, è in corso un test d\'ipotesi. Versione A contro versione B: quale riceve più clic? Il valore $p$ decide se la differenza è reale o solo una fluttuazione casuale. Anche TikTok, YouTube e Instagram usano gli A/B test — ogni funzione che vedi ha superato un test di significatività.',
      },
      quality_assurance: {
        title: 'Controllo qualità nella produzione',
        desc: 'Nelle fabbriche si fanno test continuamente: il tasso di scarti è sotto il valore limite? Il peso del sacchetto di patatine corrisponde a quello stampato? I test d\'ipotesi proteggono i consumatori — e le aziende da costosi richiami. Dietro ogni controllo a campione c\'è la stessa matematica che state imparando qui.',
      },
      clinical_trials: {
        title: 'Studi clinici e farmaci',
        desc: 'Prima di essere approvato, un farmaco deve superare un test d\'ipotesi: $H_0$ dice "Il farmaco non funziona meglio di un placebo". Solo se il valore $p$ scende sotto $\\alpha = 0{,}05$ l\'efficacia è considerata dimostrata. Le regole severe ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) proteggono i pazienti da farmaci inefficaci — ma anche dal rifiuto troppo precoce di terapie efficaci.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ "dimostrata": $p > \\alpha$ significa che $H_0$ è vera',
        correct: 'Formulazione corretta: $p > \\alpha$ significa che $H_0$ non può essere rifiutata',
        why: 'Un test d\'ipotesi non può mai dimostrare $H_0$ — solo rifiutarla o mantenerla. "Non rifiutare" significa: i dati non bastano per confutare $H_0$. Forse l\'effetto è troppo piccolo, forse il campione è troppo piccolo. Per questo si dice "mantenere" o "non rifiutare", mai "accettare" o "dimostrata".',
        kai_warning: 'È come la presunzione d\'innocenza in tribunale: "non colpevole" non significa "innocente" — significa solo che le prove non bastano. Lo stesso vale per $H_0$: se non riesco a dimostrare che l\'eroe A è più debole, non vuol dire automaticamente che sia perfettamente bilanciato!',
      },
      alpha_beta_confused: {
        wrong: 'Supposizione: un $\\alpha$ più piccolo migliora automaticamente tutto',
        correct: 'Realtà: con $n$ fissato, un $\\alpha$ più piccolo porta a un $\\beta$ più grande',
        why: 'Se rendi il test più severo ($\\alpha$ più piccolo), ti servono dati più estremi per rifiutare $H_0$. Così aumenta la probabilità di non accorgersi di un effetto reale ($\\beta$ aumenta). L\'unica via d\'uscita: un campione $n$ più grande — così puoi tenere piccoli sia $\\alpha$ sia $\\beta$.',
      },
    },
  },
};
