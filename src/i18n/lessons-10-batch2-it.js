export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia fissa lo schermo. L\'architettura dei livelli di "Hafenlichter" ha bisogno di oggetti 3D — magazzini, gru, container. Tim ha modellato le mesh, ma Lumi chiede: "Quanta memoria serve per ogni hitbox?" Mia sorride: "Per questo ci servono le formule del volume."',
      challenge: 'Calcola volumi e superfici di piramidi, coni e sfere. Aiuta Mia a costruire le hitbox 3D perfette per il suo quartiere portuale!',
      outro: 'I corpi 3D sono calcolati, le hitbox sono a posto. Tim testa il livello della gru e grida: "Le collisioni finalmente sembrano realistiche!" Mia si rilassa — la geometria rende i giochi migliori.',
    },
    objectives: {
      volume_pyramid: 'Calcolare il volume delle piramidi con la formula del terzo',
      volume_cone_sphere: 'Determinare con sicurezza i volumi di coni e sfere',
      surface_area: 'Applicare le formule della superficie e interpretare i risultati',
      apply_3d: 'Trasferire i calcoli dei corpi a problemi quotidiani e al game design',
    },
    explanation: {
      intro: 'I corpi tridimensionali hanno volume (contenuto spaziale) e superficie. Per piramidi e coni c\'e un fattore decisivo nella formula: il fattore un terzo $\\frac{1}{3}$. Deriva dal fatto che questi corpi "si restringono verso la punta" — riempiono solo un terzo del prisma o cilindro circoscritto.',
      cone: 'Un cono e come una "piramide rotonda" — la sua base e un cerchio con raggio $r$. La formula ha la stessa struttura: un terzo per area di base per altezza, solo che l\'area di base e $\\pi r^2$.',
      mia_tip: 'Mia: "Me lo ricordo cosi: piramide e cono sono i fratelli modesti di prisma e cilindro — occupano solo un terzo dello spazio!"',
      sphere: 'La sfera e un caso speciale: non ha una base o un\'altezza nel senso classico. Il suo volume dipende solo dal raggio. Archimede ha dimostrato che una sfera riempie esattamente $\\frac{2}{3}$ del cilindro circoscritto — da qui deriva la formula.',
    },
    concepts: {
      pyramid: {
        title: 'Volume della piramide',
        desc: 'Una piramide ha un terzo del volume di un prisma con stessa base e altezza. La base puo essere un rettangolo, un triangolo o un poligono qualsiasi.',
      },
      cone: {
        title: 'Volume del cono',
        desc: 'Il cono sta al cilindro come la piramide sta al prisma: riempie esattamente un terzo. La sua base circolare lo rende particolarmente simmetrico.',
      },
      sphere: {
        title: 'Volume della sfera',
        desc: 'La sfera e completamente descritta dal suo raggio. Il $\\frac{4}{3}$ nella formula deriva dall\'integrazione — o dalla geniale dimostrazione di Archimede.',
      },
    },
    examples: {
      icecream: {
        title: 'Calcolare un cono gelato',
        context: 'Un cono gelato ha la forma di un cono con raggio $r = 3$ cm e altezza $h = 12$ cm. Quanto gelato ci sta dentro?',
        step1: 'Identificare i dati: il cono ha $r = 3$ cm e $h = 12$ cm.',
        step2: 'Applicare la formula del cono: sostituiamo in $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ e calcoliamo prima le parentesi.',
        step3: 'Risultato: il cono contiene circa $113{,}1\\,\\text{cm}^3$ di gelato — un po\' piu di un decilitro.',
        mia_comment: 'Mia: "Incredibile, un cono contiene cosi poco! Ecco perche mettono sempre una pallina sopra."',
      },
      hitbox: {
        title: 'Hitbox sferica',
        context: 'In "Hafenlichter" una boa deve avere una hitbox sferica con volume $V = 904{,}8\\,\\text{cm}^3$. Quanto deve essere grande il raggio?',
        step1: 'Dato: il volume della sfera e $V = 904{,}8\\,\\text{cm}^3$. Cercato: il raggio $r$.',
        step2: 'Isolare la formula: risolviamo $V = \\frac{4}{3} \\pi r^3$ per $r^3$, dividendo per $\\frac{4}{3}\\pi$.',
        step3: 'Calcolare: $r^3 \\approx 215{,}9$ — ora estraiamo la radice cubica.',
        step4: 'Risultato: $r \\approx 6{,}0$ cm. La hitbox richiede un raggio di 6 cm.',
        mia_comment: 'Mia: "Calcolare al contrario e la quotidianita nel game design — sai cosa vuoi e devi trovare i parametri."',
      },
    },
    realworld: {
      packaging: {
        title: 'Design degli imballaggi',
        desc: 'Lattine, conserve, bottiglie — ovunque c\'e il calcolo dei cilindri. I produttori ottimizzano il rapporto tra volume e consumo di materiale per risparmiare costi.',
      },
      icecream: {
        title: 'Matematica delle palline di gelato',
        desc: 'Perche una pallina "grande" sembra cosi tanto piu grande? Perche il volume cresce con $r^3$! Raggio doppio = volume otto volte maggiore. Questo spiega anche perche i menu XXL sono cosi redditizi.',
      },
      pizza: {
        title: 'Confronto tra pizze',
        desc: 'Una pizza da 30 cm ha piu superficie di due pizze da 20 cm messe insieme! $\\pi \\cdot 15^2 = 706{,}9$ contro $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Le dimensioni convengono.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Dimenticare il fattore $\\frac{1}{3}$',
        correct: 'Per cono e piramide SEMPRE $\\frac{1}{3}$ davanti',
        why: 'Cono e piramide riempiono solo un terzo del cilindro o prisma circoscritto. Senza il fattore calcoli il volume dell\'intero cilindro — tre volte troppo!',
        mia_warning: 'Mia: "Una volta ho calcolato tutte le hitbox senza il terzo. Le boe erano enormi e bloccavano tutto il bacino portuale. Tim non era divertito."',
      },
      surface_volume: {
        wrong: 'Confondere la formula della superficie con quella del volume della sfera',
        correct: 'Volume: $\\frac{4}{3}\\pi r^3$ — Superficie: $4\\pi r^2$',
        why: 'Nel volume c\'e $r^3$ (cubico, quindi contenuto spaziale), nella superficie $r^2$ (quadratico, quindi area). Fai attenzione all\'esponente — ti dice cosa stai calcolando.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule ottimizza la memoria di "Hafenlichter". "Le nostre texture occupano 2 alla 20 byte — quanto e in realta?" Tim calcola: "Aspetta, le potenze le so..." Mia ride: "Allora facci vedere cosa sai fare."',
      challenge: 'Padroneggia le leggi delle potenze: moltiplica, eleva a potenza e semplifica le potenze. Aiuta Tim a calcolare rapidamente dimensioni di memoria e tempi di rendering!',
      outro: 'Tim padroneggia le leggi delle potenze. Il calcolo della memoria ora richiede secondi. "Le potenze sono come cheat code per i grandi numeri", dice. Mia annuisce: "E anche per quelli piccoli — benvenuti agli esponenti negativi."',
    },
    objectives: {
      multiply_powers: 'Moltiplicare e dividere potenze con la stessa base',
      power_of_power: 'Semplificare la potenza di una potenza con la regola del prodotto degli esponenti',
      negative_exponents: 'Interpretare gli esponenti negativi come frazioni e convertirli',
      apply_memory: 'Applicare le leggi delle potenze a dimensioni di memoria e notazione scientifica',
    },
    explanation: {
      intro: 'Le potenze sono una scrittura abbreviata per la moltiplicazione ripetuta: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Quando moltiplichi due potenze con la stessa base, sommi gli esponenti — perche stai semplicemente allungando la catena delle moltiplicazioni.',
      power_of_power: 'Cosa succede quando elevi una potenza a un\'altra potenza? $(a^m)^n$ significa: moltiplichi $a^m$ esattamente $n$ volte per se stesso. Questo da $m \\cdot n$ fattori — quindi $a^{m \\cdot n}$. Gli esponenti vengono moltiplicati.',
      mia_tip: 'Mia: "Stessa base → sommare gli esponenti. Potenza di potenza → moltiplicare gli esponenti. Basi diverse → calcolare, non ci sono scorciatoie!"',
      negative: 'Un esponente negativo capovolge la potenza: $a^{-n} = \\frac{1}{a^n}$. Non e una definizione arbitraria — segue logicamente dal pattern: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Ogni passo divide per la base.',
    },
    concepts: {
      product_rule: {
        title: 'Regola del prodotto',
        desc: 'Stessa base, esponenti diversi? Nella moltiplicazione gli esponenti si sommano, nella divisione si sottraggono. Funziona SOLO con la stessa base!',
      },
      power_rule: {
        title: 'Regola della potenza',
        desc: 'Una potenza viene elevata di nuovo a potenza? Allora moltiplica gli esponenti. $(a^3)^4 = a^{12}$ — dodici fattori $a$ in totale.',
      },
      negative_exp: {
        title: 'Esponente negativo',
        desc: 'Un meno nell\'esponente significa "uno diviso per". Cosi i grandi numeri diventano piccoli: $10^{-6}$ e un milionesimo. Perfetto per microchip e millisecondi.',
      },
    },
    examples: {
      simplify: {
        title: 'Calcolare la memoria',
        context: 'Tim vuole sapere: quanto sono $2^3 \\cdot 2^4$ byte? Nell\'informatica questo e un calcolo tipico con potenze di due.',
        step1: 'Applicare la regola del prodotto: stessa base $2$, quindi sommiamo gli esponenti: $3 + 4 = 7$.',
        step2: 'Calcolare: $2^7 = 128$ byte.',
        step3: 'Contestualizzare: 128 byte — quasi 1 kilobyte (che sarebbero esattamente $2^{10} = 1024$).',
        mia_comment: 'Mia: "Nell\'informatica le potenze di due sono ovunque. RAM, texture, profondita colore — tutto potenze di 2!"',
      },
      negative: {
        title: 'Convertire i millisecondi',
        context: 'Un frame in "Hafenlichter" viene calcolato in $10^{-3}$ secondi. Cosa significa in notazione decimale?',
        step1: 'Applicare l\'esponente negativo: $10^{-3}$ significa $\\frac{1}{10^3}$.',
        step2: 'Calcolare: $\\frac{1}{1000} = 0{,}001$ secondi.',
        step3: 'Contestualizzare: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — un millisecondo. A 60 fps ogni frame ha circa 16 ms di tempo.',
        mia_comment: 'Mia: "Gli esponenti negativi sembrano spaventosi, ma significano semplicemente: numeri piccoli. $10^{-3}$ = milli, $10^{-6}$ = micro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Memoria digitale',
        desc: 'Il tuo telefono ha 256 GB? Sono $2^{38}$ byte, cioe oltre 274 miliardi di byte. Ogni raddoppio della memoria e solo un +1 nell\'esponente — ecco perche la tecnologia cresce cosi velocemente.',
      },
      richter: {
        title: 'Scala Richter',
        desc: 'Un terremoto di magnitudo 6 non e il doppio di magnitudo 3 — ma mille volte piu forte! Ogni livello significa $10 \\times$ piu energia. Le potenze rendono percepibile la differenza.',
      },
      decibel: {
        title: 'Decibel e volume',
        desc: 'Le cuffie a 100 dB sono $10^{10}$ volte piu intense della soglia uditiva (0 dB). Ogni +10 dB = dieci volte l\'intensita. Le tue orecchie calcolano logaritmicamente — cioe con le potenze!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Moltiplicare le basi invece di sommare gli esponenti',
        correct: 'La regola del prodotto vale SOLO con la stessa base',
        why: 'In $2^3 \\cdot 3^2$ le basi sono diverse (2 e 3). Qui non puoi applicare nessuna regola delle potenze — devi calcolare separatamente: $8 \\cdot 9 = 72$. Sommare gli esponenti e moltiplicare le basi e un errore frequente!',
        mia_warning: 'Mia: "Basi diverse = nessuna scorciatoia. Punto. Una volta ho fatto questo errore nel codice e le texture erano tutte distrutte."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "alla zero fa zero"',
        correct: '$a^0 = 1$ per ogni $a \\neq 0$',
        why: 'Segui il pattern: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — ogni passo divide per 2. Quindi $2^0 = 1$. Vale per OGNI base (tranne 0). Zero e l\'elemento neutro dell\'addizione, non della moltiplicazione.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia scorre la libreria degli asset di "Hafenlichter". La Speicherstadt di Amburgo ha edifici di tutte le dimensioni — ma devono tutti apparire proporzionali. Lumi chiede: "Non possiamo semplicemente scalare tutto?" Mia annuisce: "Esattamente. Questa e la similitudine."',
      challenge: 'Comprendi i triangoli simili, i fattori di scala e il teorema di Talete. Aiuta Mia a scalare proporzionalmente il quartiere portuale!',
      outro: 'La Speicherstadt in "Hafenlichter" e fantastica — ogni edificio e proporzionale, ogni ponte si adatta. Jule ammira il risultato: "Come se fosse un modello reale!" Mia sorride: "Lo e anche. Matematicamente esatto."',
    },
    objectives: {
      similar_triangles: 'Riconoscere i triangoli simili e descrivere le loro proprieta',
      scale_factor: 'Calcolare e applicare il fattore di scala $k$',
      intercept_theorem: 'Applicare il teorema di Talete a problemi geometrici',
      apply_scaling: 'Utilizzare la similitudine in architettura, cartografia e game design',
    },
    explanation: {
      intro: 'Due figure sono simili quando hanno la stessa forma ma possono avere dimensioni diverse. Per i triangoli basta che tutti gli angoli coincidano — allora automaticamente tutti i rapporti tra i lati sono uguali. Il rapporto tra immagine e originale si chiama fattore di scala $k$.',
      scale_factor: 'Il fattore di scala $k$ ti dice quanto e stato ingrandito o ridotto. $k > 1$ significa ingrandimento, $k < 1$ riduzione, $k = 1$ significa congruente (sovrapponibile). Importante: $k$ si riferisce alle lunghezze — le aree si scalano con $k^2$, i volumi con $k^3$!',
      mia_tip: 'Mia: "Nel game engine lavoriamo costantemente con fattori di scala. Uno sprite con scale 0.5 e grande la meta, scale 2.0 il doppio. Esattamente come in geometria!"',
      intercept: 'Il teorema di Talete descrive cosa succede quando rette parallele sono tagliate da due rette: i segmenti sulle rette sono proporzionali. Cosi puoi calcolare segmenti sconosciuti senza dover misurare tutto.',
    },
    concepts: {
      similar_triangles: {
        title: 'Triangoli simili',
        desc: 'Due triangoli sono simili quando concordano in tutti gli angoli. Allora vale: tutti i rapporti tra i lati sono uguali. Si scrive $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Fattore di scala',
        desc: 'Il fattore $k = \\frac{\\text{Immagine}}{\\text{Originale}}$ descrive l\'ingrandimento o la riduzione. $k = 2$ significa: tutto il doppio. $k = 0{,}5$ significa: tutto la meta.',
      },
      intercept_theorem: {
        title: 'Teorema di Talete',
        desc: 'Quando due rette sono tagliate da rette parallele, i segmenti risultanti sono proporzionali. Uno strumento potente per calcolare lunghezze mancanti.',
      },
    },
    examples: {
      model: {
        title: 'Scalare un edificio',
        context: 'Un magazzino di Amburgo e costruito come modello 3D in scala $1:100$. Il modello e alto $3{,}5$ cm. Quanto e alto l\'edificio reale?',
        step1: 'Determinare il fattore di scala: $k = \\frac{1}{100}$ significa che il modello e 100 volte piu piccolo dell\'originale.',
        step2: 'Leggere l\'altezza del modello: $h_{\\text{Modello}} = 3{,}5$ cm.',
        step3: 'Calcolare al contrario: $h_{\\text{reale}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. L\'edificio e alto 3,5 metri.',
        mia_comment: 'Mia: "Esattamente cosi lavoriamo in Hafenlichter. Costruiamo la Speicherstadt come modello e scaliamo tutto proporzionalmente nel gioco."',
      },
      intercept: {
        title: 'Applicare il teorema di Talete',
        context: 'Due rette sono tagliate da rette parallele. I segmenti su una retta sono 4 e 6, sull\'altra il primo segmento e 9. Quanto e lungo il secondo segmento $x$?',
        step1: 'Impostare il teorema di Talete: i rapporti dei segmenti sulle due rette sono uguali: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Moltiplicare in croce: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Risultato: $x = 6$. Il secondo segmento e lungo 6 unita.',
        mia_comment: 'Mia: "Il teorema di Talete e come l\'auto-layout nel game engine — dai un rapporto e tutto il resto si adatta proporzionalmente."',
      },
    },
    realworld: {
      maps: {
        title: 'Mappe e navigazione',
        desc: 'Google Maps mostra il mondo in scala. Il livello di zoom 15 corrisponde a circa $1:18.000$. Ogni livello di zoom raddoppia il fattore di scala — esattamente come la similitudine in geometria.',
      },
      architecture: {
        title: 'Modelli architettonici',
        desc: 'Prima della costruzione dell\'Elbphilharmonie c\'erano modelli in scala $1:500$. Gli architetti usano la similitudine per dedurre le misure reali da modelli piccoli — e viceversa.',
      },
      instagram: {
        title: 'Ridimensionare le immagini',
        desc: 'Quando ritagli una foto per Instagram, la scala cambia. "Adatta allo schermo" scala proporzionalmente (simile), "Allunga" deforma (non simile). Il tuo occhio nota subito la differenza!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Simile" e "congruente" sono la stessa cosa',
        correct: 'Simile = stessa forma. Congruente = stessa forma E stessa dimensione',
        why: 'La congruenza e un caso speciale di similitudine con $k = 1$. Tutti i triangoli congruenti sono simili, ma non tutti i triangoli simili sono congruenti. Simile significa: stessi angoli, ma i lati possono avere lunghezze proporzionalmente diverse.',
        mia_warning: 'Mia: "Nel game engine: congruente = copia. Simile = copia + scala. Se copi una casa e la scali, e simile. Senza scalatura e congruente."',
      },
      scale_direction: {
        wrong: 'Fattore di scala impostato al contrario',
        correct: 'Sempre $k = \\frac{\\text{Immagine}}{\\text{Originale}}$',
        why: 'Se l\'immagine e piu grande dell\'originale, deve essere $k > 1$. Se imposti la frazione al contrario, ottieni $k < 1$ e pensi che sia stato ridotto. Ricorda: immagine al numeratore, originale al denominatore.',
      },
    },
  },
};
