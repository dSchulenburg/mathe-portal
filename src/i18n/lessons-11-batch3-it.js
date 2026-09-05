export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'Amir sta costruendo un nuovo filtro di raccomandazione in DataPulse. La formula: «rilevanza per ascoltatore divisa per numero di ascoltatori». Sembra pulita, finché Yara non chiede: «E cosa succede se un brano ha zero ascoltatori?» Amir fissa il codice: divisione per zero. Crash. Poli, discontinuità eliminabili, asintoti: tutta la famiglia delle funzioni razionali compare all\'improvviso sul suo quaderno, e deve capirla davvero.',
      challenge: 'Amir deve mettere in sicurezza il suo filtro perché non si blocchi sui poli, e allo stesso tempo riconoscere quando un crash apparente è in realtà solo una discontinuità eliminabile che si può semplificare.',
      outro: 'Con tre strumenti Amir se la cava: verificare il dominio (dove si annulla il denominatore?), distinguere polo e discontinuità eliminabile (si annulla lì anche il numeratore?) e determinare gli asintoti (comportamento per $|x|$ grandi). Il suo filtro ora gira pulito, e il professor Nguyen si complimenta: «Questa è igiene numerica fatta bene.»',
    },
    objectives: {
      definition: 'Riconoscere una funzione razionale e determinarne il dominio',
      poles: 'Trovare i poli: gli zeri del denominatore in cui il numeratore non si annulla',
      removable_gaps: 'Riconoscere le discontinuità eliminabili, rimuoverle semplificando e indicare il prolungamento per continuità',
      asymptotes: 'Ricavare asintoti verticali e orizzontali dall\'espressione della funzione',
    },
    explanation: {
      intro: 'Una funzione razionale è un quoziente di due polinomi: numeratore $p(x)$ diviso per denominatore $q(x)$. Il punto decisivo: il denominatore non deve mai annullarsi, altrimenti la funzione non è definita in quel punto.',
      domain: 'Il dominio $D_f$ è formato da tutti i numeri reali tranne gli zeri del denominatore. Scomponi il denominatore in fattori oppure calcolane gli zeri: quelli sono i buchi di $D_f$.',
      amir_tip: 'Il mio primo riflesso davanti a qualsiasi funzione razionale: dove si annulla il denominatore? Quei valori di $x$ me li segno in cima al foglio. Solo dopo mi occupo del resto. Chi salta questo passaggio si perde i poli, e nel codice il programma va in crash.',
      poles: 'Hai un polo quando il denominatore si annulla ma il numeratore no. Lì il valore della funzione schizza all\'infinito (positivo o negativo) e il grafico ha un asintoto verticale.',
      removable: 'Se nello stesso punto si annulla anche il numeratore, puoi semplificare il fattore comune. Resta la cosiddetta «discontinuità eliminabile»: il grafico ha lì solo un buco, che potresti riempire con una definizione sensata.',
      asymptotes: 'Il comportamento per $|x|$ grandi si legge nei gradi dei polinomi: se il grado del numeratore è minore di quello del denominatore, allora $f(x) \\to 0$ e l\'asse x è asintoto orizzontale. Se i gradi coincidono, il rapporto dei coefficienti direttivi dà l\'asintoto orizzontale.',
    },
    concepts: {
      definition: {
        title: 'Funzione razionale',
        desc: 'Quoziente di due polinomi $p(x)$ e $q(x)$. Definita ovunque $q(x) \\neq 0$. Esempi: $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Polo',
        desc: 'Punto $x_0$ con $q(x_0) = 0$ e $p(x_0) \\neq 0$. Il grafico schizza verso $\\pm\\infty$: asintoto verticale in $x = x_0$. Ordine del polo pari ⇒ nessun cambio di segno; dispari ⇒ cambio di segno.',
      },
      removable_gap: {
        title: 'Discontinuità eliminabile',
        desc: 'Punto $x_0$ con $p(x_0) = q(x_0) = 0$. Semplificare il fattore comune, poi calcolare il limite: questo è il «prolungamento per continuità». Il grafico presenta lì solo un buco aperto.',
      },
      asymptote: {
        title: 'Asintoto orizzontale',
        desc: 'Limite per $x \\to \\pm\\infty$. Se $\\deg p < \\deg q$ vale $y = 0$; se $\\deg p = \\deg q$ è il rapporto dei coefficienti direttivi. Se $\\deg p > \\deg q$ c\'è invece un asintoto obliquo o curvilineo.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Studiare un polo semplice',
        context: 'Amir esamina la funzione razionale più semplice del suo filtro: $f(x) = \\frac{1}{x-2}$. Dove non è definita e come si comporta?',
        step1: 'Scrivere l\'espressione: numeratore $p(x) = 1$, denominatore $q(x) = x - 2$:',
        step2: 'Cercare lo zero del denominatore: $q(x) = 0$ fornisce un punto critico:',
        step3: 'Valutare lì il numeratore: $p(2) = 1 \\neq 0$. Quindi non una discontinuità eliminabile, ma un polo vero e proprio:',
        step4: 'Comportamento all\'infinito: $\\frac{1}{x-2} \\to 0$ per $x \\to \\pm\\infty$. L\'asse x è asintoto orizzontale:',
        amir_comment: 'Caso classico: asintoto verticale in $x = 2$, asintoto orizzontale in $y = 0$. Nel codice devo quindi intercettare esplicitamente $x = 2$, altrimenti esce NaN. Era proprio la domanda di Yara.',
      },
      removable: {
        title: 'Trovare una discontinuità eliminabile semplificando',
        context: 'Durante un test Amir si imbatte in $f(x) = \\frac{x^2 - 1}{x - 1}$. In $x = 1$ il denominatore si annulla: crash? O forse no?',
        step1: 'Scrivere l\'espressione: il numeratore è una differenza di quadrati:',
        step2: 'In $x = 1$ si annullano numeratore E denominatore. È l\'indizio di una discontinuità eliminabile:',
        step3: 'Scomporre il numeratore $(x^2 - 1) = (x-1)(x+1)$ e semplificare poi il fattore comune $(x-1)$:',
        step4: 'Il grafico è dunque la retta $y = x + 1$, con un buco esattamente in $x = 1$, perché la $f$ originaria non è definita lì:',
        amir_comment: 'Importante: nonostante la semplificazione non posso includere $x = 1$ in $D_f$. La funzione originaria resta lì indefinita. Nel codice lo risolvo con un controllo condizionale e restituisco il limite $f(1) := 2$: un prolungamento per continuità pulito.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Costo unitario nella produzione',
        desc: 'Costi fissi $F$ ripartiti su $x$ pezzi prodotti, più costi variabili $v$ a pezzo: $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. Per $x \\to \\infty$ il costo unitario si avvicina a $v$: un asintoto orizzontale nella realtà.',
      },
      light_intensity: {
        title: 'Intensità luminosa e quadrato della distanza',
        desc: 'Una lampada di potenza $P$ genera alla distanza $r$ l\'intensità $I(r) = \\frac{P}{4\\pi r^2}$. Per $r \\to 0$ c\'è un polo (teoricamente luminosità infinita proprio alla sorgente); per $r \\to \\infty$ si ha $I \\to 0$. Legge di natura classica.',
      },
      dilution: {
        title: 'Concentrazione durante la diluizione',
        desc: 'Un succo di concentrazione $c_0$ e volume $V_0$ viene diluito con un volume $V$ d\'acqua: $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Qui non c\'è polo ($V_0 + V > 0$), ma per $V \\to \\infty$ la concentrazione tende a zero: asintoto orizzontale $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'Confondere polo e zero della funzione',
        correct: 'Zero: si annulla il numeratore. Polo: si annulla il denominatore e il numeratore no',
        why: 'In $f(x) = \\frac{x-3}{x+2}$ lo zero è in $x = 3$ (lì $p(x) = 0$, quindi $f = 0$) e il polo in $x = -2$ (lì $q(x) = 0$). Chi scambia i ruoli disegna il grafico completamente sbagliato: buco e polo nei posti sbagliati.',
        amir_warning: 'Il mio aiuto mnemonico: lo zero sta dove $f$ «restituisce zero». Il polo sta dove $f$ «esplode». Entrambi discendono direttamente dal numeratore o dal denominatore: non confonderli mai.',
      },
      dont_cancel: {
        wrong: 'Non vedere il fattore comune e ipotizzare un polo',
        correct: 'Scomporre prima numeratore e denominatore, poi semplificare i fattori comuni',
        why: 'In $f(x) = \\frac{x^2-4}{x-2}$ sembra che $x = 2$ sia un polo. Ma se si scompone il numeratore resta $\\frac{(x-2)(x+2)}{x-2} = x+2$, quindi soltanto una discontinuità eliminabile. Chi non scompone afferma l\'esistenza di un polo che in realtà non c\'è.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'Amir addestra in DataPulse un semplice modello lineare: tre caratteristiche (tempo, volume, ballabilità), dalle quali il modello stima una valutazione degli ascoltatori. Da tre esempi noti nascono tre equazioni in tre incognite: i pesi delle caratteristiche. «A mano non se ne esce», dice Finn. Amir sorride: «Certo che sì, con Gauss.» I sistemi di equazioni lineari, un classico che si nasconde dietro ogni codice di ML.',
      challenge: 'Amir deve determinare, a partire da tre esempi di addestramento, i tre pesi $a$, $b$, $c$. Tre equazioni, tre incognite: Gauss.',
      outro: 'Con il metodo di Gauss, Amir porta sistematicamente la matrice completa in forma a scalini. La parte in basso a sinistra diventa fatta di zeri passo dopo passo, poi legge le soluzioni a ritroso. «È esattamente quello che numpy.linalg.solve fa dietro le quinte», spiega a Finn, «solo che adesso finalmente capisco perché.»',
    },
    objectives: {
      solve_2x2: 'Risolvere sistemi lineari in due incognite per sostituzione, confronto o riduzione',
      gauss_3x3: 'Portare sistematicamente in forma a scalini i sistemi in tre incognite con l\'algoritmo di Gauss',
      solution_types: 'Distinguere i tre tipi di soluzione: unica, nessuna, infinite',
      matrix_form: 'Scrivere un sistema in forma matriciale $A\\vec{x} = \\vec{b}$ e costruire correttamente la matrice completa',
    },
    explanation: {
      intro: 'Un sistema di equazioni lineari è un insieme di più equazioni nelle stesse incognite. Una soluzione del sistema è un insieme di valori che soddisfa TUTTE le equazioni contemporaneamente. Già noto in terza media: tipicamente due equazioni e due incognite:',
      methods: 'Per i sistemi 2×2 bastano i metodi classici: sostituzione, confronto o riduzione. Da 3×3 in su la cosa diventa in fretta confusa, e per questo esiste l\'algoritmo di Gauss, che procede in modo meccanico e sempre uguale.',
      amir_tip: 'Il mio procedimento per il 3×3: scrivere la matrice completa e poi andare DRITTI AL PUNTO. Prima annullare la colonna di sinistra sotto il pivot, poi la colonna centrale sotto il secondo pivot. Forma a scalini. Sostituzione a ritroso. Suona meccanico, e lo è: proprio qui sta il vantaggio.',
      gauss: 'Nel metodo di Gauss scrivi il sistema come matrice completa $(A | \\vec{b})$. Con tre operazioni sulle righe — moltiplicare una riga per un numero, sommare o sottrarre righe, scambiare righe — trasformi la matrice in forma a scalini. Questo non cambia l\'insieme delle soluzioni.',
      solution_types: 'Dalla forma a scalini leggi direttamente il tipo di soluzione: nessuna riga contraddittoria in basso ⇒ soluzione unica. Una riga $0 = c$ con $c \\neq 0$ ⇒ nessuna soluzione. Una riga $0 = 0$ ⇒ introdurre un parametro, infinite soluzioni.',
    },
    concepts: {
      lgs: {
        title: 'Sistema di equazioni lineari',
        desc: 'Un insieme di equazioni lineari con incognite comuni. In forma matriciale: $A \\vec{x} = \\vec{b}$, dove $A$ è la matrice dei coefficienti e $\\vec{b}$ il vettore dei termini noti.',
      },
      gauss: {
        title: 'Algoritmo di Gauss',
        desc: 'Metodo di risoluzione standard. Portare la matrice completa in forma a scalini e risolvere poi a ritroso. Tre operazioni ammesse che non alterano l\'insieme delle soluzioni: moltiplicare una riga per uno scalare, sommare un multiplo di una riga, scambiare due righe.',
      },
      solution_types: {
        title: 'Tre tipi di soluzione',
        desc: 'Soluzione unica (tanti pivot quante incognite), nessuna soluzione (riga contraddittoria $0 = c$), infinite soluzioni (almeno una riga $0=0$, con parametri liberi).',
      },
      matrix: {
        title: 'Matrice completa dei coefficienti',
        desc: 'Notazione $(A | \\vec{b})$. A sinistra i coefficienti delle incognite, a destra (separato da una barra) il termine noto. Evita di riscrivere continuamente i nomi delle variabili.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'Semplice sistema 2×2 per riduzione',
        context: 'Amir ha due equazioni di esempio ricavate dai dati di addestramento. Cerca $x$ (peso del tempo) e $y$ (peso del volume).',
        step1: 'Scrivere il sistema di equazioni:',
        step2: 'Sommare le due equazioni: i termini in $y$ si elidono e $x$ è subito risolta:',
        step3: 'Sostituire $x = 3$ in una delle equazioni di partenza, qui la seconda:',
        step4: 'Insieme delle soluzioni: indicarlo come coppia $(x, y)$:',
        amir_comment: 'Metodo di riduzione classico: con un po\' di fortuna le variabili spariscono subito. Altrimenti bisogna prima moltiplicare un\'equazione per un numero adatto, per esempio per 2, in modo che i coefficienti si corrispondano.',
      },
      gauss_3x3: {
        title: 'Risolvere un sistema 3×3 con Gauss',
        context: 'Amir ha un mini set di addestramento: tre valutazioni di ascoltatori e tre pesi $x, y, z$. Tre equazioni: metodo di Gauss nella matrice completa.',
        step1: 'Costruire la matrice completa: coefficienti a sinistra, termini noti a destra della barra:',
        step2: 'Riga 2 meno 2 volte riga 1: l\'elemento $a_{21} = 2$ diventa nullo:',
        step3: 'Riga 3 meno riga 1: l\'elemento $a_{31} = 1$ diventa nullo. La colonna di sinistra è ora pulita sotto il pivot 1:',
        step4: 'Proseguire fino alla forma a scalini, poi risolvere a ritroso: $z$ dall\'ultima riga, sostituire sopra per $y$ e poi $x$. Soluzione: $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$:',
        amir_comment: 'Gauss è contabilità: annotare in modo pulito ogni operazione sulle righe. Chi esegue un\'operazione a metà — per esempio trasformando solo la colonna del pivot — ottiene spazzatura. Qui la disciplina batte il genio.',
      },
    },
    realworld: {
      mischung: {
        title: 'Problemi di miscele',
        desc: 'Un farmacista mescola due soluzioni di concentrazioni $a$ e $b$ per ottenere una miscela di massa totale $m$ e quantità totale di principio attivo $w$. Due equazioni, due incognite: un sistema, direttamente.',
      },
      preise: {
        title: 'Ricostruire i prezzi',
        desc: 'Tre clienti, tre scontrini con quantità e prezzo totale: da lì si risale ai prezzi unitari. Tre equazioni, tre prezzi unitari incogniti. Gauss lo risolve in pochi passaggi.',
      },
      network: {
        title: 'Circuiti elettrici (Kirchhoff)',
        desc: 'In una rete di resistenze, ogni equazione ai nodi (corrente entrante = corrente uscente) e ogni equazione alle maglie (somma delle tensioni = 0) fornisce una condizione lineare. Con $n$ incognite ne risulta un sistema $n \\times n$: procedimento standard in elettrotecnica.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'In un\'operazione sulla riga, trasformare solo la colonna del pivot',
        correct: 'Trasformare ogni colonna della riga (termine noto compreso), tutte insieme',
        why: 'Un\'operazione sulla riga vale per l\'INTERA riga. Chi in $Z_2 - 2Z_1$ trasforma solo l\'elemento pivot e dimentica le altre colonne distrugge l\'equazione. Conseguenza: la forma a scalini sembra corretta, ma le soluzioni sono sbagliate, e l\'errore è poi difficile da trovare.',
        amir_warning: 'Proprio questo errore mi è costato un punto intero in una simulazione d\'esame. Da allora scrivo la riga nuova per intero — tutti gli elementi, termine noto compreso — in modo pulito sotto quella vecchia. Così si confronta a colpo d\'occhio.',
      },
      no_solution: {
        wrong: 'Interpretare una riga contraddittoria $0 = c$ come $x = c$',
        correct: 'Una riga $0 = c$ con $c \\neq 0$ significa: il sistema NON ha soluzione',
        why: 'Se alla fine viene $0 = 5$, è una contraddizione: nessun valore di $x, y, z$ può soddisfarla. L\'insieme delle soluzioni è vuoto. Chi lo legge come $x = 5$ propone una soluzione che il sistema non soddisfa.',
      },
    },
  },
};
