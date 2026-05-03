export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Il sistema di particelle di "Hafenlichter 3D" ha un aspetto grandioso — scintille che volano, nebbia che fluttua, fuoco che arde. Ma Kai ha un problema di prestazioni: migliaia di particelle contemporaneamente mettono la GPU sotto pressione. "Devo calcolare quanto velocemente le particelle svaniscono, per eliminarle dalla memoria in tempo", spiega a Mia. La risposta sta nella funzione $e$ e nella sua controparte, il logaritmo naturale — gli strumenti per tutto cio che cresce o decade esponenzialmente.',
      challenge: 'Kai deve modellare matematicamente la durata delle particelle: quanto velocemente svanisce una scintilla? Quando una particella di fumo e cosi trasparente da poter essere eliminata? Per questo servono la regola della catena per funzioni $e$, derivate di $\\ln$ e la risoluzione di equazioni di decadimento.',
      outro: 'Con funzioni $e$ concatenate e derivate di $\\ln$, Kai ha costruito un sistema particellare intelligente: ogni scintilla segue una precisa curva di decadimento, ogni particella di fumo viene riciclata esattamente quando la sua opacita scende sotto la soglia di percezione. "La regola della catena e praticamente il mio ottimizzatore di prestazioni", sorride Kai.',
    },
    objectives: {
      advanced_e_properties: 'Derivare funzioni $e$ concatenate con la regola della catena: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Padroneggiare la derivata di $\\ln(g(x))$ e usarla per analisi di curve',
      composite_exp_functions: 'Analizzare prodotti di polinomi e funzioni $e$ (estremi, punti di flesso)',
      differential_equations: 'Comprendere semplici equazioni differenziali del tipo $f\'(t) = k \\cdot f(t)$ e costruire modelli di decadimento',
    },
    explanation: {
      intro: 'In classe 11 hai imparato le basi di $e^x$ e $\\ln(x)$. Ora si fa sul serio: deriviamo funzioni $e$ concatenate, analizziamo curve con $\\ln$ e risolviamo equazioni di decadimento. La chiave e la regola della catena — quando nell\'esponente non c\'e solo $x$ ma un\'intera funzione $g(x)$, la derivata esterna fornisce $e^{g(x)}$ e la derivata interna $g\'(x)$ viene aggiunta come fattore:',
      ln_derivative: 'Altrettanto elegante: la derivata di $\\ln(g(x))$ con la regola della catena. Il logaritmo naturale "capovolge la funzione" — la derivata interna sta al numeratore, la funzione interna stessa al denominatore:',
      kai_tip: 'Nella mia engine 3D le funzioni $e$ appaiono ovunque: decadimento delle particelle, densita della nebbia, audio fadeout. Il trucco e sempre lo stesso — la regola della catena. Quando derivo $e^{-0{,}5t^2}$ per una distribuzione di Gauss, la funzione interna e $g(t) = -0{,}5t^2$ e la derivata interna $g\'(t) = -t$. Sostituire, fatto!',
      integration: 'Nell\'integrazione il processo va al contrario. Per semplici funzioni esponenziali vale: il fattore nell\'esponente va al denominatore. E la famosa regola $\\frac{1}{x}$ porta direttamente al $\\ln$:',
      decay_model: 'Il decadimento esponenziale E il modello standard per processi in cui il tasso di variazione e proporzionale al valore attuale: $f\'(t) = -\\lambda \\cdot f(t)$. La soluzione e sempre una funzione $e$ con esponente negativo. Il tempo di dimezzamento $t_{1/2}$ indica dopo quanto tempo resta la meta del valore iniziale:',
    },
    concepts: {
      chain_rule_exp: { title: 'Regola della catena per funzioni $e$', desc: 'Per $f(x) = e^{g(x)}$ la funzione esterna e $e^u$ (derivata: $e^u$) e quella interna $g(x)$. Risultato: la funzione $e$ resta invariata, moltiplicata per la derivata interna. Esempio: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.' },
      ln_derivative: { title: 'Derivata di $\\ln(g(x))$', desc: 'La regola della catena per il logaritmo genera una frazione: derivata interna diviso funzione interna. Particolarmente utile quando $g(x)$ e un polinomio — es. $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$.' },
      exp_integration: { title: 'Integrazione logaritmica', desc: 'Se un integrando ha la forma $\\frac{f\'(x)}{f(x)}$, la primitiva e immediatamente $\\ln|f(x)| + C$. Questo e l\'inversione della derivata di $\\ln$ e uno dei trucchi di integrazione piu importanti.' },
    },
    examples: {
      particle_decay: { title: 'Modellare il decadimento delle particelle', context: 'Nel sistema particellare di Kai partono 5000 particelle-scintilla contemporaneamente. Il loro numero decresce esponenzialmente — Kai vuole calcolare il tasso di decadimento e il tempo di dimezzamento.', step1: 'Costruire il modello di decadimento — $N_0 = 5000$ particelle, costante di decadimento $\\lambda = 0{,}03\\,\\text{s}^{-1}$:', step2: 'Derivare con la regola della catena — funzione interna $g(t) = -0{,}03t$, derivata interna $g\'(t) = -0{,}03$:', step3: 'Calcolare il tasso iniziale — a $t = 0$ scompaiono 150 particelle al secondo:', step4: 'Determinare il tempo di dimezzamento — risolvere $N(t_{1/2}) = \\frac{N_0}{2}$ con $\\ln$:', kai_comment: 'Dopo 23 secondi meta delle particelle e sparita — cio significa che posso liberare memoria gia prima per la prossima esplosione. Nella engine imposto la soglia di eliminazione al $5\\%$ di opacita, cioe circa $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.' },
      ln_curve_analysis: { title: 'Analisi della curva con funzione $e$', context: 'Kai modella la luminosita di un lampo: prima sale, poi scende. La curva di luminosita ha la forma $f(x) = x^2 \\cdot e^{-x}$ — una tipica funzione "flash".', step1: 'Funzione data — prodotto di polinomio e funzione $e$ decrescente:', step2: 'Derivata con la regola del prodotto: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — per il secondo fattore serve la regola della catena:', step3: 'Zeri della derivata: $e^{-x} > 0$ sempre, quindi decide solo $x(2-x) = 0$:', step4: 'Determinare il massimo — calcolare il valore della funzione a $x = 2$:', kai_comment: 'Questa curva "salita-poi-discesa" e perfetta per effetti luminosi. A $x = 0$ tutto e buio, a $x = 2$ luminosita massima, poi dolce attenuazione. Nel mio shader uso esattamente questa funzione per flash di sparo ed esplosioni!' },
    },
    realworld: {
      particle_systems: { title: 'Sistemi di particelle nei motori 3D', desc: 'Ogni scintilla, ogni scia di fumo, ogni fuoco in un videogioco segue una curva di decadimento esponenziale $N(t) = N_0 \\cdot e^{-\\lambda t}$. La costante di decadimento $\\lambda$ determina quanto velocemente le particelle svaniscono.' },
      signal_processing: { title: 'Elaborazione audio e smorzamento del segnale', desc: 'Quando senti un effetto riverbero in GarageBand, il suono decade esponenzialmente: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. La funzione $e$ controlla il volume, il $\\sin$ l\'oscillazione.' },
      learning_curve: { title: 'Curva di apprendimento e progressione delle abilita', desc: 'Quanto velocemente impari un nuovo gioco? La curva di apprendimento $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ descrive come le abilita crescono rapidamente all\'inizio e poi si avvicinano a un massimo.' },
    },
    mistakes: {
      chain_rule_forgotten: { wrong: 'Derivata interna dimenticata: $(e^{3x})\' = e^{3x}$', correct: 'Regola della catena: $(e^{3x})\' = 3 \\cdot e^{3x}$', why: 'Appena nell\'esponente c\'e piu di solo $x$, DEVI usare la regola della catena. La funzione interna qui e $g(x) = 3x$ con $g\'(x) = 3$. Questo fattore non puo mancare!', kai_warning: 'Nel mio shader avevo derivato $e^{-0{,}5t^2}$ dimenticando il fattore $-t$. Risultato: particelle che non cambiavano mai — come fumo congelato.' },
      ln_negative: { wrong: 'Barre di valore assoluto dimenticate: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$', correct: 'Corretto con valore assoluto: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$', why: 'La funzione $\\frac{1}{x}$ e definita anche per $x$ negativi, ma $\\ln(x)$ solo per $x > 0$. Le barre di valore assoluto assicurano che la primitiva valga su tutto il dominio.' },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Per "Hafenlichter 3D" Kai costruisce un generatore procedurale di livelli: ponti, tunnel e case devono nascere da curve matematiche ruotate attorno ad assi. "Immaginate di definire un profilo e farlo ruotare — ed ecco una colonna, una cupola o lo scafo di una nave", si entusiasma Kai.',
      challenge: 'Kai deve calcolare volumi di oggetti 3D generati dalla rotazione di curve. Inoltre gli serve l\'integrazione per parti per formule di illuminazione complesse e deve verificare se certi integrali convergono.',
      outro: 'Il generatore di livelli funziona: Kai ruota profili di curve attorno ad assi e ottiene corpi 3D perfetti con volume calcolato esattamente. "L\'integrazione per parti e stata la chiave per gli integrali di illuminazione", racconta ad Amir.',
    },
    objectives: {
      integration_techniques: 'Applicare con sicurezza integrazione per parti e sostituzione',
      rotation_volumes: 'Calcolare volumi di rotazione attorno all\'asse $x$ con $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Verificare la convergenza di integrali impropri e calcolarli',
      partial_integration: 'Utilizzare miratamente il metodo dell\'integrazione per parti quando si devono integrare prodotti',
    },
    explanation: {
      intro: 'In classe 11 hai conosciuto gli integrali definiti come aree. Ora si aggiungono tre nuove tecniche. La prima e l\'integrazione per parti — l\'"inversione" della regola del prodotto:',
      substitution: 'La seconda tecnica e la sostituzione — l\'"inversione" della regola della catena nella derivazione:',
      kai_tip: 'Il mio trucco per l\'integrazione per parti: "LIATE" — Logaritmo, Inversa trig, Algebrico, Trigonometrico, Esponenziale. Questo e l\'ordine in cui scegli $u$.',
      rotation_volume: 'Ora diventa tridimensionale: se ruoti il grafico di $f(x)$ attorno all\'asse $x$, nasce un corpo di rotazione. Il suo volume lo calcoli immaginando il corpo composto da infiniti dischi circolari sottili:',
      improper: 'Cosa succede quando un estremo di integrazione e $\\infty$? O l\'integrando diventa illimitato in un punto? Allora parliamo di integrali impropri:',
    },
    concepts: {
      partial_integration: { title: 'Integrazione per parti', desc: 'L\'inversione della regola del prodotto: scomponi l\'integrando in $u$ (viene derivato) e $\\mathrm{d}v$ (viene integrato). Obiettivo: il nuovo integrale $\\int v\\,\\mathrm{d}u$ deve essere piu semplice di quello originale.' },
      rotation_volume: { title: 'Volume di rotazione', desc: 'Un grafico di funzione ruotato attorno all\'asse $x$ genera un corpo 3D. Il volume risulta dalla somma di infiniti dischi circolari con raggio $f(x)$ e spessore $\\mathrm{d}x$.' },
      improper_integral: { title: 'Integrali impropri', desc: 'Integrali con $\\infty$ come estremo o integrando illimitato. Sostituisci il punto problematico con una variabile e calcoli il limite. Se il limite esiste ed e finito, l\'integrale converge — altrimenti diverge.' },
    },
    examples: {
      level_geometry: { title: 'Corpo di rotazione per il level design', context: 'Kai vuole generare una colonna il cui profilo segue la curva $f(x) = \\sqrt{x}$. Tra $x = 0$ e $x = 4$ la curva ruota attorno all\'asse $x$ — quanto e grande il volume della colonna?', step1: 'Definire il profilo — la funzione radice sull\'intervallo $[0;\\,4]$:', step2: 'Applicare la formula del volume di rotazione — elevare al quadrato $f(x)$ e mettere $\\pi$ davanti:', step3: 'Calcolare la primitiva e sostituire gli estremi:', step4: 'Risultato — la colonna ha un volume di $8\\pi$ unita di volume:', kai_comment: 'Questa e esattamente la formula che usa il mio generatore procedurale! Definisco profili di curve, li ruoto e conosco subito il volume — importante per le simulazioni fisiche.' },
      partial_int: { title: 'Integrazione per parti per l\'illuminazione', context: 'Nello shader di calcolo della luce di Kai appare l\'integrale $\\int x \\cdot e^x\\,\\mathrm{d}x$ — un prodotto non integrabile direttamente.', step1: 'Scegliere la scomposizione: $u = x$ (diventa piu semplice derivando), $v\' = e^x$ (si integra facilmente):', step2: 'Determinare derivate e primitive:', step3: 'Sostituire nella formula — il nuovo integrale e ora solo $\\int e^x\\,\\mathrm{d}x$:', step4: 'Semplificare — fattorizzando si ottiene una forma elegante:', kai_comment: 'Il momento in cui il nuovo integrale e piu semplice di quello vecchio — questa e la soddisfazione dell\'integrazione per parti. Se diventa piu complicato, hai scelto male $u$ e $v\'$.' },
    },
    realworld: {
      '3d_printing': { title: 'Stampa 3D e calcolo dei volumi CAD', desc: 'Ogni stampante 3D deve sapere quanto materiale serve. Per pezzi simmetrici per rotazione il software slicer calcola il volume con esattamente questa formula di rotazione.' },
      render_falloff: { title: 'Attenuazione della luce nei motori di gioco', desc: 'L\'integrale improprio $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ mostra: l\'energia totale e finita! Per questo i motori di gioco possono simulare luci con portata limitata.' },
      terrain_volume: { title: 'Generazione del terreno e lavori di scavo', desc: 'Nei progetti stradali e nei giochi tipo Minecraft bisogna calcolare il volume delle colline. La formula $V = \\iint h(x,y)\\,\\mathrm{d}A$ somma l\'altezza su tutta la superficie.' },
    },
    mistakes: {
      rotation_no_square: { wrong: 'Quadrato dimenticato: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$', correct: 'Corretto con quadrato: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$', why: 'Ogni disco circolare ha area $\\pi r^2$ con $r = f(x)$. Senza il quadrato non calcoli un\'area circolare ma qualcosa di completamente diverso.', kai_warning: 'Ho fatto questo errore una volta a un game jam — la mia colonna aveva solo una frazione del volume corretto e e collassata nella simulazione fisica.' },
      improper_no_limit: { wrong: 'Sostituire direttamente $\\infty$ invece di calcolare il limite', correct: 'Formulare correttamente il limite e verificare la convergenza', why: '$\\infty$ non e un numero che puoi sostituire! Devi sempre calcolare il limite $\\lim_{b \\to \\infty}$ e verificare se esiste.' },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: 'Il mondo 3D di "Hafenlichter 3D" prende forma: gru portuali, facciate di edifici, superfici d\'acqua — tutto e composto da triangoli, e ogni triangolo giace in un piano. "Per un\'illuminazione realistica devo calcolare il vettore normale per ogni superficie", spiega Kai.',
      challenge: 'Kai deve costruire equazioni dei piani da tre punti, calcolare vettori normali tramite prodotto vettoriale, trovare intersezioni retta-piano e determinare distanze tra oggetti — tutto in tempo reale per il suo motore di gioco.',
      outro: 'Il sistema di rilevamento collisioni di Kai funziona perfettamente: i proiettili colpiscono i muri, i personaggi stanno sui pavimenti, e l\'illuminazione calcola per ogni superficie il perfetto angolo di incidenza della luce tramite vettori normali.',
    },
    objectives: {
      plane_equations: 'Costruire equazioni dei piani in forma parametrica, normale e in coordinate, e convertirle',
      line_plane_intersection: 'Calcolare intersezioni di rette con piani e determinare relazioni di posizione',
      distances_3d: 'Calcolare distanze nello spazio: punto-piano, punto-retta e retta-retta',
      cross_product: 'Padroneggiare il prodotto vettoriale e usarlo per il calcolo dei vettori normali',
    },
    explanation: {
      intro: 'I piani nello spazio tridimensionale si possono descrivere in modi diversi. La forma parametrica parte da un punto base $\\vec{a}$ e apre il piano con due vettori di direzione $\\vec{u}$ e $\\vec{v}$:',
      normal_form: 'Piu elegante e spesso la forma normale: un vettore $\\vec{n}$ perpendicolare al piano (il vettore normale) e un punto $\\vec{a}$ nel piano bastano per descrivere l\'intero piano. Da qui si ricava la forma in coordinate:',
      kai_tip: 'Nella mia engine memorizzo ogni superficie in forma coordinate — tre coefficienti e una costante, tutto qui. Per il rendering mi serve il vettore normale per l\'illuminazione, e per la fisica mi servono intersezioni e distanze.',
      cross_product: 'Il prodotto vettoriale $\\vec{u} \\times \\vec{v}$ fornisce un vettore perpendicolare a entrambi i vettori di input — perfetto per calcolare il vettore normale da due vettori di direzione. Attenzione: l\'ordine e importante (anticommutativo)!',
      distance_point_plane: 'La distanza di un punto $P$ da un piano $E$ si calcola elegantemente con la forma normale di Hesse:',
    },
    concepts: {
      plane_equation: { title: 'Equazione del piano in forma coordinate', desc: 'La rappresentazione piu compatta di un piano: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. I coefficienti sono le componenti del vettore normale.' },
      cross_product: { title: 'Prodotto vettoriale', desc: 'Il prodotto vettoriale di due vettori $\\vec{u}$ e $\\vec{v}$ fornisce un nuovo vettore $\\vec{n}$ perpendicolare a entrambi. Il suo modulo $|\\vec{u} \\times \\vec{v}|$ corrisponde all\'area del parallelogramma sotteso. Importante: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$!' },
      distance_formula: { title: 'Distanza punto-piano', desc: 'La distanza piu breve di un punto $P$ da un piano e la lunghezza della perpendicolare da $P$ al piano.' },
    },
    examples: {
      game_world_plane: { title: 'Piano da tre vertici', context: 'Kai ha un triangolo nel suo mondo di gioco con vertici $A(1|0|2)$, $B(3|1|0)$ e $C(0|4|1)$. Gli serve l\'equazione del piano per illuminazione e rilevamento collisioni.', step1: 'Tre punti dati — ricavare due vettori di direzione:', step2: 'Vettori di direzione $\\vec{u} = \\overrightarrow{AB}$ e $\\vec{v} = \\overrightarrow{AC}$ calcolare:', step3: 'Prodotto vettoriale $\\vec{n} = \\vec{u} \\times \\vec{v}$ calcolare dettagliatamente:', step4: 'Costruire la forma coordinate — vettore normale come coefficienti, $d$ sostituendo $A$:', kai_comment: 'Nella engine succede esattamente questo per ogni triangolo: tre vertici dentro, prodotto vettoriale calcolato, piano memorizzato. Il vettore normale determina contemporaneamente in quale direzione "guarda" la superficie.' },
      collision_detection: { title: 'Intersezione retta-piano (Raycast)', context: 'Un proiettile vola in linea retta nello spazio. Kai deve verificare se e dove colpisce un muro — un raycast: intersezione retta-piano.', step1: 'Retta (traiettoria) e piano (muro) dati:', step2: 'Retta sostituita nell\'equazione del piano:', step3: 'Risolvere per $t$:', step4: 'Calcolare il punto di intersezione:', kai_comment: 'Nella engine verifico inoltre $t > 0$ (direzione in avanti) e $0 \\leq t \\leq t_{\\max}$ (portata). Cosi filtro i colpi dietro il giocatore o fuori portata.' },
    },
    realworld: {
      '3d_rendering': { title: 'Rendering 3D e illuminazione', desc: 'Ogni motore 3D calcola l\'illuminazione tramite il prodotto scalare di vettore normale e direzione della luce: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Questo e il modello di illuminazione di Lambert.' },
      architecture: { title: 'Architettura e software BIM', desc: 'Nei programmi di architettura come AutoCAD o Revit, superfici di tetto, muri e rampe sono modellati come piani.' },
      gps_navigation: { title: 'GPS e navigazione droni', desc: 'Le coordinate GPS sono tridimensionali. I droni navigano lungo rette nello spazio 3D e devono rilevare ostacoli — modellati come piani.' },
    },
    mistakes: {
      cross_product_order: { wrong: 'Ordine ignorato: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$', correct: 'Anticommutativo: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$', why: 'Il prodotto vettoriale NON e commutativo — l\'ordine determina la direzione del vettore risultante (regola della mano destra). Scambiare cambia il segno.', kai_warning: 'Questo bug si riconosce subito: superfici illuminate "dall\'interno" mentre l\'esterno resta buio. Succede quando il vettore normale punta nella direzione sbagliata.' },
      distance_abs_forgotten: { wrong: 'Valore assoluto nel numeratore dimenticato', correct: 'Con valore assoluto: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$', why: 'Le distanze sono sempre positive! Senza il valore assoluto nel numeratore puo risultare un valore negativo se il punto sta "dall\'altra parte" del piano.' },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Prima del rilascio di "Hafenlichter 3D" c\'e il grande playtest: 200 tester giocano per una settimana e Kai deve prendere decisioni difficili. Il bilanciamento e equo? Il tasso di crash e accettabile? "L\'intuito non basta", dice Mia. "Ti serve un test statistico."',
      challenge: 'Kai deve decidere se le differenze osservate nel playtest sono statisticamente significative. L\'eroe A e davvero piu debole dell\'eroe B, o ha solo avuto sfortuna?',
      outro: 'Il playtest e stato valutato: Kai ha dimostrato statisticamente che l\'eroe A e troppo debole ($p = 0{,}028 < 0{,}05$) e che il tasso di crash nel nuovo build e significativamente aumentato.',
    },
    objectives: {
      null_hypothesis: 'Formulare correttamente ipotesi nulla e alternativa e distinguere tra test unilaterali e bilaterali',
      significance_level: 'Comprendere il livello di significativita $\\alpha$ e interpretarlo come probabilita di errore',
      test_decision: 'Determinare regioni di rifiuto e condurre decisioni di test sistematicamente',
      error_types: 'Distinguere errori di tipo I e II e comprendere il trade-off tra $\\alpha$ e $\\beta$',
    },
    explanation: {
      intro: 'Un test di ipotesi e una procedura strutturata per prendere decisioni basate sui dati. Parti da un\'ipotesi (ipotesi nulla $H_0$), raccogli dati e verifichi se i dati parlano contro $H_0$:',
      significance: 'Il livello di significativita $\\alpha$ e la probabilita massima con cui rifiuti erroneamente $H_0$ (errore di tipo I). Valori tipici sono $\\alpha = 0{,}05$ (5%) o $\\alpha = 0{,}01$ (1%):',
      kai_tip: 'Pensate ai test di ipotesi come a un sistema anti-cheat: $H_0$ significa "Il giocatore NON bara". $\\alpha = 0{,}05$ significa: solo nel 5% dei casi banno un giocatore onesto.',
      rejection_region: 'La regione di rifiuto contiene tutti i risultati del test cosi estremi da farci rifiutare $H_0$:',
      error_types: 'Due errori possono succedere: Errore di tipo I ($\\alpha$) — rifiuti $H_0$ anche se e vera ("falso allarme"). Errore di tipo II ($\\beta$) — mantieni $H_0$ anche se $H_1$ e vera ("effetto mancato"):',
    },
    concepts: {
      hypotheses: { title: 'Ipotesi nulla e alternativa', desc: '$H_0$ e l\'ipotesi "status quo" che vale finche i dati non parlano contro. $H_1$ e cio che vuoi effettivamente dimostrare. Importante: non si "dimostra" mai $H_1$ — si puo solo rifiutare o mantenere $H_0$.' },
      significance_level: { title: 'Livello di significativita $\\alpha$', desc: 'Il limite superiore per la probabilita di un errore di tipo I. $\\alpha$ viene fissato PRIMA del test — mai aggiustato a posteriori!' },
      error_types: { title: 'Errori di tipo I e II', desc: 'Errore di tipo I ($\\alpha$): $H_0$ viene rifiutata anche se vera — un "falso allarme". Errore di tipo II ($\\beta$): $H_0$ viene mantenuta anche se $H_1$ e vera — un "effetto mancato".' },
    },
    examples: {
      playtest_balance: { title: 'Test di bilanciamento: l\'eroe A e troppo debole?', context: 'In 100 match tra eroe A e eroe B, l\'eroe A vince solo 40 volte. Kai sospetta che l\'eroe A sia svantaggiato.', step1: 'Stabilire ipotesi e livello di significativita — unilaterale, perche Kai sospetta che A sia troppo debole:', step2: 'Impostazione: $n = 100$ match, $X$ = numero vittorie di eroe A, distribuzione binomiale:', step3: 'Calcolare la probabilita per $X \\leq 40$ sotto $H_0$ (distribuzione binomiale cumulativa):', step4: 'Decisione del test: valore $p$ $0{,}028 < \\alpha = 0{,}05$ — $H_0$ viene rifiutata. L\'eroe A e significativamente troppo debole:', kai_comment: 'Questa era la prova statistica di cui avevo bisogno per il team di bilanciamento. 40 su 100 sembra "quasi ok", ma il test mostra: con un bilanciamento equo questo risultato estremo si vedrebbe solo nel 2{,}8% dei casi.' },
      crash_rate: { title: 'Tasso di crash dopo l\'aggiornamento', context: 'Dopo una patch il tasso di crash dovrebbe essere al massimo del 2%. In 200 sessioni di test il gioco crasha 8 volte. E troppo?', step1: 'Formulare le ipotesi — unilaterale a destra, perche Kai vuole verificare se il tasso e SOPRA il 2%:', step2: 'Dati: $n = 200$ sessioni, $X = 8$ crash (osservato: $\\hat{p} = 4\\%$):', step3: 'Calcolare la probabilita per $X \\geq 8$ sotto $H_0$ — questo e il valore $p$:', step4: 'Decisione del test: valore $p$ $0{,}042 < \\alpha = 0{,}05$ — il tasso di crash e significativamente elevato:', kai_comment: 'Senza il test avrei forse detto "8 crash su 200 sessioni, va bene". Ma il test di ipotesi mostra: la probabilita di vedere cosi tanti crash con un vero tasso del 2% e sotto il 5%.' },
    },
    realworld: {
      ab_testing: { title: 'A/B testing per app e siti web', desc: 'Ogni volta che Netflix cambia il pulsante "Riproduci ora" o Spotify testa una nuova vista playlist, c\'e un test di ipotesi. Il valore $p$ decide se la differenza e reale o solo fluttuazione casuale.' },
      quality_assurance: { title: 'Controllo qualita nella produzione', desc: 'Nelle fabbriche si testa costantemente: il tasso di scarto e sotto il limite? Il peso di riempimento corrisponde al valore dichiarato?' },
      clinical_trials: { title: 'Studi clinici e farmaci', desc: 'Prima che un farmaco venga approvato, deve superare un test di ipotesi: $H_0$ dice "Il farmaco non funziona meglio del placebo". Solo se il valore $p$ scende sotto $\\alpha = 0{,}05$, l\'efficacia e considerata dimostrata.' },
    },
    mistakes: {
      accept_h0: { wrong: '$H_0$ "dimostrata": $p > \\alpha$ significa che $H_0$ e vera', correct: 'Formulazione corretta: $p > \\alpha$ significa che $H_0$ non puo essere rifiutata', why: 'Un test di ipotesi non puo mai dimostrare $H_0$ — solo rifiutarla o mantenerla. "Non rifiutare" significa: i dati non sono sufficienti per confutare $H_0$.', kai_warning: 'E come la presunzione di innocenza in tribunale: "non colpevole" non significa "innocente" — significa solo che le prove non bastano.' },
      alpha_beta_confused: { wrong: 'Un $\\alpha$ piu piccolo migliora automaticamente tutto', correct: 'Un $\\alpha$ piu piccolo porta a un $\\beta$ piu grande a $n$ fisso', why: 'Se rendi il test piu rigoroso ($\\alpha$ piu piccolo), servono dati piu estremi per rifiutare $H_0$. Cosi aumenta la probabilita di non notare un effetto reale ($\\beta$ aumenta). L\'unica via d\'uscita: campione piu grande $n$.' },
    },
  },
};
