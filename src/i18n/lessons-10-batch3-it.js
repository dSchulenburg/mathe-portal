export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia scorre la lista delle animazioni di Hafenlichter e aggrotta la fronte. L\'animazione del respiro di Lumi sembra un robot — brusca e innaturale. Anche le onde nel porto sembrano rigide, e il ciclo giorno-notte salta invece di scorrere. "Tutto cio che si ripete ha bisogno di un\'oscillazione", dice Tim. "Seno e coseno — sono fatti per questo." Mia apre la calcolatrice e si immerge nel mondo delle funzioni periodiche.',
      challenge: 'L\'animazione del respiro, il moto ondoso e il ciclo giorno-notte devono oscillare naturalmente invece di scattare.',
      outro: 'Il respiro di Lumi ora si alza e si abbassa dolcemente, le onde del porto rotolano uniformemente verso la riva, e la luce passa fluidamente dal rosso dell\'alba al blu di mezzanotte. "Le funzioni sinusoidali sono ovunque in natura", dice Jule. Mia annuisce: "E ora sono anche in Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Riconoscere le funzioni periodiche e distinguerle da quelle non periodiche',
      amplitude_period: 'Leggere ampiezza e periodo da grafici ed equazioni',
      frequency: 'Calcolare la frequenza e spiegare il suo significato',
      modeling: 'Modellare fenomeni reali con funzioni sinusoidali',
    },
    explanation: {
      intro: 'Alcuni processi si ripetono continuamente: il battito cardiaco, le maree, le stagioni. In matematica descriviamo queste oscillazioni con funzioni periodiche. La piu importante e la funzione seno:',
      parameters: 'La funzione sinusoidale generale ha quattro parametri che puoi intendere come regolatori di un mixer: $A$ controlla l\'altezza dell\'oscillazione (ampiezza), $b$ influenza la velocita di ripetizione (periodo), $c$ sposta la curva a sinistra o destra, e $d$ la sposta in alto o in basso.',
      mia_tip: 'Per l\'animazione del respiro di Lumi uso $A = 3$ pixel e $T = 4$ secondi. Significa: ogni 4 secondi Lumi inspira ed espira una volta, e il petto si muove di 3 pixel su e giu. Del tutto naturale!',
      graph_reading: 'Per leggere una funzione periodica dal grafico, cerchi il pattern che si ripete. La distanza tra due punti identici si chiama periodo $T$. Matematicamente la periodicita significa:',
      applications: 'Le funzioni periodiche sono lo strumento matematico per tutto cio che oscilla: onde sonore, corrente alternata, pendoli, onde luminose e persino le orbite dei pianeti. Ogni volta che un processo si ripete regolarmente, c\'e una funzione sinusoidale (o le sue parenti) dietro.',
    },
    concepts: {
      amplitude: {
        title: 'Ampiezza',
        desc: 'L\'ampiezza $A$ e la massima deviazione dal valore medio. Misura quanto e "forte" l\'oscillazione. Sul grafico la leggi come meta della differenza tra il punto piu alto e il piu basso.',
      },
      period: {
        title: 'Periodo',
        desc: 'Il periodo $T$ e la lunghezza di un ciclo completo di oscillazione. Dopo il tempo $T$ tutto si ripete esattamente. Piu grande e $b$, piu corto e il periodo.',
      },
      frequency: {
        title: 'Frequenza',
        desc: 'La frequenza $f$ indica quante oscillazioni avvengono per unita di tempo. E il reciproco del periodo. Unita: Hertz (Hz) = oscillazioni al secondo.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Leggere una funzione sinusoidale dal grafico',
        context: 'Mia ha un effetto onda nel gioco e vuole trovare l\'equazione corrispondente.',
        step1: 'Leggere il punto piu alto e il piu basso: $y_{\\max} = 3$ e $y_{\\min} = -3$. L\'ampiezza e la meta della differenza — l\'onda oscilla di 3 unita su e giu.',
        step2: 'Leggere il periodo: un ciclo completo dura $4\\pi$ unita. Da qui calcoliamo $b$ con la formula $b = \\frac{2\\pi}{T}$ — che da $0{,}5$.',
        step3: 'Comporre l\'equazione: poiche la linea mediana e a $y = 0$ ($d = 0$) e non c\'e sfasamento ($c = 0$), la funzione e semplicemente:',
        mia_comment: 'Ampiezza 3, periodo $4\\pi$ — cosi le onde del porto dondolano bene lentamente. Per onde piu veloci aumento semplicemente $b$!',
      },
      ferris_wheel: {
        title: 'Modellare una ruota panoramica',
        context: 'Una ruota panoramica con 60 m di diametro compie un giro ogni 10 minuti. La gondola piu bassa e a 5 m dal suolo.',
        step1: 'Determinare l\'ampiezza: il raggio e meta dell\'altezza, quindi $A = 30\\,\\text{m}$. La linea mediana e a $d = 5 + 30 = 35\\,\\text{m}$ (suolo + raggio).',
        step2: 'Il periodo e un giro completo: $T = 10\\,\\text{min}$. Da qui $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Considerare il punto di partenza: partire dal basso significa spostare il seno di $-\\frac{\\pi}{2}$ (il seno normalmente parte dal centro, non dal basso).',
        step4: 'Verifica: dopo 2,5 minuti (un quarto di giro) la gondola dovrebbe essere all\'altezza media. Sostituendo: $\\sin(0) = 0$, quindi $h = 35\\,\\text{m}$. Corretto!',
        mia_comment: 'Esattamente cosi funziona anche il ciclo giorno-notte in Hafenlichter: seno con $T = 24$ (un giorno di gioco) e sfasamento, cosi che a mezzanotte sia piu buio.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Il tuo battito cardiaco',
        desc: 'Il tuo cuore batte circa 72 volte al minuto — cioe 1,2 battiti al secondo. I segnali elettrici del cuore (ECG) mostrano una curva periodica. I medici leggono ampiezza e frequenza per individuare problemi cardiaci.',
      },
      tides: {
        title: 'Alta e bassa marea',
        desc: 'Nel porto di Amburgo il livello dell\'acqua oscilla ogni 12,4 ore tra alta e bassa marea. E una funzione sinusoidale quasi perfetta — causata dalla forza gravitazionale della Luna.',
      },
      temperature: {
        title: 'Temperatura annuale',
        desc: 'La temperatura media nel corso di un anno segue approssimativamente una curva sinusoidale: calda in estate, fredda in inverno, con un periodo di 365 giorni. I climatologi usano questo modello come base per le previsioni.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Confondere periodo e frequenza',
        correct: 'La frequenza e il reciproco del periodo',
        why: 'Se il periodo e $T = 2\\,\\text{s}$, oscilla una volta ogni 2 secondi. La frequenza e allora $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — non $2\\,\\text{Hz}$! Frequenza = "Quante volte al secondo?", Periodo = "Quanto dura un ciclo?"',
        mia_warning: 'Questo errore ha fatto si che il respiro di Lumi fosse due volte troppo veloce — sembrava dopo uno sprint!',
      },
      b_value: {
        wrong: 'Identificare $b$ con il periodo',
        correct: 'Convertire $b$ e $T$ tramite la formula',
        why: '$b$ NON e il periodo, ma e legato ad esso tramite $T = \\frac{2\\pi}{b}$. Se il periodo e $4\\pi$, allora $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — non $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter funziona — ma scatta. Mia apre il monitor delle prestazioni e vede: in alcune scene il framerate crolla a 15 FPS. "Dove esattamente diventa lento?", chiede Tim. "Non mi serve la media dell\'intera scena, ma il punto esatto in cui le prestazioni crollano." Jule sorride: "Questa e esattamente la domanda che ha portato all\'invenzione del calcolo differenziale — il tasso di variazione istantaneo."',
      challenge: 'Trovare il punto esatto in cui il framerate crolla — non solo la media.',
      outro: 'Mia ha trovato il punto critico: esattamente al frame 847 il tempo di rendering esplode, perche 200 particelle vengono generate contemporaneamente. "Senza il tasso di variazione istantaneo avrei cercato per un\'eternita", dice. Tim annuisce: "Newton avrebbe fatto lo stesso — solo senza monitor delle prestazioni."',
    },
    objectives: {
      average_rate: 'Calcolare e interpretare il tasso di variazione medio (pendenza della secante)',
      instantaneous_rate: 'Comprendere il tasso di variazione istantaneo come limite',
      limit_concept: 'Seguire il passaggio dalla secante alla tangente',
      derivative_notation: 'Conoscere e applicare le diverse notazioni della derivata',
    },
    explanation: {
      intro: 'Immagina di andare a scuola in bicicletta. Il tachimetro segna 20 km/h — e la tua velocita istantanea. Ma come si calcola? Se dici "Ho percorso 10 km in 30 minuti", e una media. La velocita istantanea in un punto specifico e qualcosa di diverso — ed e proprio di questo che tratta il calcolo differenziale.',
      secant_to_tangent: 'L\'idea e genialmente semplice: calcola la pendenza media tra due punti, poi avvicina i punti sempre di piu. Al limite — quando la distanza tende a zero — ottieni la pendenza in un singolo punto. Questa e la derivata:',
      mia_tip: 'Il framerate medio su 10 secondi non mi dice nulla. Mi serve il tasso istantaneo al frame 847! Esattamente come il tachimetro: non mostra la media dell\'intero viaggio, ma quanto sei veloce ADESSO.',
      derivative_meaning: 'La derivata $f\'(x_0)$ ha un significato chiaro: indica la pendenza della tangente al grafico nel punto $x_0$. Se $f\'(x_0) > 0$, la funzione cresce in quel punto. Se $f\'(x_0) < 0$, decresce. Se $f\'(x_0) = 0$, la funzione ha (possibilmente) un massimo o minimo locale. Ci sono diverse notazioni:',
      geometric_interpretation: 'Geometricamente succede questo: la secante attraverso due punti sul grafico ruota quando i punti si avvicinano. Al limite la secante diventa la tangente — una retta che "tocca" il grafico in esattamente un punto. La pendenza di questa tangente e la derivata.',
    },
    concepts: {
      difference_quotient: {
        title: 'Rapporto incrementale',
        desc: 'Il tasso di variazione medio tra due punti. Calcola la pendenza della secante — una retta che taglia il grafico in due punti.',
      },
      differential_quotient: {
        title: 'Quoziente differenziale (derivata)',
        desc: 'Il tasso di variazione istantaneo in un punto. Si ottiene quando $h$ nel rapporto incrementale tende a zero. Indica la pendenza della tangente.',
      },
      derivative_notation: {
        title: 'Notazioni della derivata',
        desc: 'Ci sono tre notazioni comuni: $f\'(x)$ (Lagrange, la piu frequente a scuola), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, enfatizza il carattere di rapporto) e $\\dot{y}$ (Newton, soprattutto in fisica per derivate temporali).',
      },
    },
    examples: {
      average_speed: {
        title: 'Velocita media',
        context: 'Una palla rotola giu da una rampa. La distanza dipende quadraticamente dal tempo.',
        step1: 'Data la funzione posizione-tempo. Dopo 2 secondi la palla ha percorso 2 m, dopo 4 secondi 8 m.',
        step2: 'Velocita media tra $t = 2$ e $t = 4$: dividiamo la variazione di distanza per la variazione di tempo. Risulta $3\\,\\text{m/s}$ in media.',
        step3: 'Ora restringiamo l\'intervallo: tra $t = 2$ e $t = 2{,}1$ risulta $2{,}05\\,\\text{m/s}$. Piu corto l\'intervallo, piu ci avviciniamo alla velocita istantanea a $t = 2$.',
        mia_comment: 'Esattamente cosi funziona il mio monitor delle prestazioni: misura il framerate in intervalli sempre piu brevi, finche trovo il punto esatto dove si blocca.',
      },
      instantaneous_rate: {
        title: 'Calcolare il tasso di variazione istantaneo',
        context: 'Determina la derivata di $f(x) = x^2$ nel punto $x_0 = 3$.',
        step1: 'Sostituiamo $f(x) = x^2$ e $x_0 = 3$ nel rapporto incrementale. Cercato: cosa succede quando $h$ tende a 0?',
        step2: 'Calcoliamo il numeratore: $(3+h)^2 = 9 + 6h + h^2$. Meno $f(3) = 9$ da $6h + h^2$ al numeratore.',
        step3: 'Semplificare per $h$ (possiamo farlo perche $h \\neq 0$ nel processo di limite): resta $6 + h$.',
        step4: 'Calcolare il limite: per $h \\to 0$ diventa $6 + h$ uguale a $6$. La pendenza della tangente in $x = 3$ e esattamente $6$.',
        mia_comment: 'La tangente in $x = 3$ ha pendenza 6. Se faccio questo per ogni punto, ottengo la funzione derivata $f\'(x) = 2x$. Per $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Torna!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Autovelox e velocita',
        desc: 'Un autovelox non misura la tua velocita istantanea, ma la tua velocita media su un breve tratto (Tutor: su diversi chilometri). Piu corto il tratto di misurazione, piu vicino al valore istantaneo.',
      },
      stock_trends: {
        title: 'Andamento azionario e trend',
        desc: 'Quando un\'azione "sale", gli analisti intendono la derivata positiva del prezzo. La pendenza della tangente al grafico del prezzo mostra il trend: positiva = trend rialzista, negativa = trend ribassista, zero = punto di svolta.',
      },
      speedometer: {
        title: 'Tachimetro dell\'auto',
        desc: 'Il tuo tachimetro mostra la velocita istantanea — matematicamente la derivata della funzione posizione rispetto al tempo. I dispositivi GPS la calcolano come limite su intervalli di tempo brevissimi.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Media = valore istantaneo',
        correct: 'Distinguere media e valore istantaneo',
        why: 'Il tasso di variazione medio sull\'intervallo $[1;\\,5]$ NON e uguale al tasso di variazione istantaneo in $x = 3$ (il centro). Vale solo per funzioni lineari! Per grafici curvi i due valori differiscono.',
        mia_warning: 'All\'inizio avevo calcolato il framerate medio e pensavo andasse tutto bene. Ma localmente c\'erano crolli massicci! La media nascondeva il problema.',
      },
      secant_tangent: {
        wrong: 'Pendenza della secante = pendenza della tangente',
        correct: 'La tangente e il caso limite della secante',
        why: 'La secante taglia il grafico in due punti, la tangente lo tocca in uno. Solo quando i due punti si avvicinano ($h \\to 0$) la secante diventa tangente. Senza il limite e solo un\'approssimazione.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter ha bisogno di un sistema di bilanciamento: quanto velocemente deve salire di livello Lumi? Quanto diventano forti i nemici? Quanto costa un upgrade? "Se tutto cresce linearmente, il gioco diventa noioso", dice Jule. Tim aggiunge: "E se tutto cresce esponenzialmente, diventa ingiusto." Mia si rende conto: deve conoscere diversi tipi di crescita e usarli in modo mirato.',
      challenge: 'Trovare le curve di crescita giuste per il bilanciamento del gioco — lineare, quadratica, esponenziale o logaritmica.',
      outro: 'Il sistema di bilanciamento di Mia e pronto: la velocita di corsa cresce linearmente, il danno da caduta quadraticamente, i requisiti di XP esponenzialmente e la curva di apprendimento logaritmicamente. "Ogni curva ha il suo posto", dice soddisfatta. Il gioco ora sembra equo ed emozionante — dal livello 1 al boss finale.',
    },
    objectives: {
      identify_types: 'Riconoscere le quattro grandi classi di funzioni (lineare, quadratica, esponenziale, logaritmica) da equazioni e grafici',
      compare_growth: 'Confrontare e ordinare il comportamento di crescita delle classi di funzioni',
      match_context: 'Scegliere la classe di funzione adatta alla situazione e motivare la scelta',
      graph_recognition: 'Associare i grafici ai tipi di funzione corretti',
    },
    explanation: {
      intro: 'In matematica ci sono diverse "famiglie" di funzioni — ognuna con il proprio carattere. Alcune crescono uniformemente, altre sempre piu velocemente, altre ancora sempre piu lentamente. Le quattro classi piu importanti per la classe 10 sono:',
      mia_tip: 'Nel game design uso ogni classe di funzione per qualcosa di diverso: crescita lineare per cose prevedibili (velocita di corsa), quadratica per cose che si "amplificano" (danno da caduta), esponenziale per le sfide (requisiti XP) e logaritmica per effetti di apprendimento (progresso abilita).',
      growth_comparison: 'Fondamentale e: quanto velocemente cresce ogni classe per valori grandi di $x$? L\'ordine e sempre lo stesso — indipendentemente dai numeri concreti:',
      choosing_functions: 'Scegliere la funzione giusta per un problema e una competenza chiave. Chiediti: la variazione e costante (lineare)? Accelera uniformemente (quadratica)? Il valore raddoppia a intervalli regolari (esponenziale)? L\'incremento diventa sempre minore (logaritmica)?',
    },
    concepts: {
      linear: {
        title: 'Funzioni lineari',
        desc: 'Tasso di variazione costante: ad ogni passo si aggiunge sempre la stessa quantita. Il grafico e una retta. Pendenza $m$ e intercetta $b$ si leggono direttamente.',
      },
      quadratic: {
        title: 'Funzioni quadratiche',
        desc: 'Il tasso di variazione stesso varia linearmente — si aggiunge sempre piu velocemente (o meno). Il grafico e una parabola con vertice.',
      },
      exponential: {
        title: 'Funzioni esponenziali',
        desc: 'Crescita di una percentuale fissa: piu ce n\'e, piu se ne aggiunge. Raddoppio a intervalli regolari. A lungo termine cresce piu velocemente di qualsiasi funzione potenza.',
      },
      logarithmic: {
        title: 'Funzioni logaritmiche',
        desc: 'La funzione inversa dell\'esponenziale. Cresce velocemente all\'inizio, poi sempre piu lentamente. Modella effetti di saturazione e curve di apprendimento.',
      },
    },
    examples: {
      identify_type: {
        title: 'Riconoscere il tipo di funzione dalle tabelle di valori',
        context: 'Sono disponibili tre set di dati. Quale tipo si adatta a ciascuno?',
        step1: 'Testa per lineare: calcola le differenze dei valori $y$ consecutivi. Se sono costanti, la funzione e lineare.',
        step2: 'Testa per esponenziale: calcola i quozienti dei valori $y$ consecutivi. Se sono costanti, la funzione e esponenziale.',
        step3: 'Testa per quadratica: calcola le seconde differenze (differenze delle differenze). Se sono costanti, la funzione e quadratica.',
        mia_comment: 'Esattamente cosi testo il mio bilanciamento: simulo 100 turni e verifico se i valori seguono il tipo di crescita desiderato. Se le seconde differenze deviano, qualcosa non va.',
      },
      game_mechanics: {
        title: 'Modellare meccaniche di gioco',
        context: 'Quattro diverse meccaniche di gioco in Hafenlichter richiedono funzioni diverse.',
        step1: 'Velocita di corsa: aumenta per livello della stessa quantita ($+5$ per livello). Variazione costante — quindi lineare. Equa e prevedibile.',
        step2: 'Danno da caduta: da 2 m di altezza danno leggero, da 10 m molto di piu. L\'aumento del danno accelera — quadratico. Fisicamente sensato (energia = $\\frac{1}{2}mv^2$).',
        step3: 'Requisiti XP per livello: livello 2 richiede 150 XP, livello 3 richiede 225 XP, livello 4 richiede 337 XP. Il fabbisogno cresce sempre del 50% — esponenziale. Cosi i livelli superiori restano una vera sfida.',
        step4: 'Curva di apprendimento (abilita): all\'inizio si impara velocemente, poi sempre piu lentamente. Dopo $t$ ore di gioco si padroneggia $20 \\cdot \\log_2(t+1)$ percento delle meccaniche — logaritmico.',
        mia_comment: 'Questo e il cuore del game design: la curva giusta per la meccanica giusta. XP lineari sarebbero noiosi, danno da caduta esponenziale sarebbe ingiusto. Ogni tipo di funzione ha il suo sweet spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Download virali di app',
        desc: 'Se ogni utente invita due amici e quelli ne invitano altri due, i download raddoppiano. All\'inizio quasi invisibile, poi esplosivo — tipicamente esponenziale. TikTok, Instagram e WhatsApp sono cresciuti cosi.',
      },
      salary: {
        title: 'Paghetta e stipendio',
        desc: 'La tua paghetta (si spera) aumenta ogni anno dello stesso importo — crescita lineare. Piu tardi nel lavoro lo stipendio aumenta spesso in modo simile: un importo fisso per anno di esperienza.',
      },
      learning_curve: {
        title: 'Progresso nell\'apprendimento',
        desc: 'Nuovo strumento, nuovo sport, nuova lingua: all\'inizio fai progressi enormi, poi diventa sempre piu difficile migliorare. Questa e una curva di saturazione logaritmica — ed e del tutto normale!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Esponenziale" e "quadratico" sono la stessa cosa',
        correct: 'L\'esponenziale cresce MOLTO piu velocemente del quadratico',
        why: 'Per numeri piccoli $x^2$ e $2^x$ sembrano simili: $4^2 = 16$ e $2^4 = 16$. Ma per $x = 10$: $10^2 = 100$ contro $2^{10} = 1024$. La crescita esponenziale supera qualsiasi funzione potenza!',
        mia_warning: 'Avevo impostato i requisiti XP prima quadratici invece di esponenziali. Risultato: dal livello 20 il gioco era troppo facile, perche i giocatori accumulavano XP piu velocemente di quanto il fabbisogno crescesse.',
      },
      all_curves_linear: {
        wrong: 'Ogni crescita e lineare',
        correct: 'Prima verificare il tipo di crescita',
        why: 'Solo perche qualcosa "raddoppia" non significa che sia lineare! "Ogni 3 giorni il doppio dei follower" e esponenziale, non lineare. Lineare sarebbe: "ogni giorno 100 nuovi follower". La differenza: incremento costante (lineare) vs. fattore costante (esponenziale).',
      },
    },
  },
};
