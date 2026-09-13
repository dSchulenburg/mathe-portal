export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'Amir bouwt een voorspellingsmodel voor het aantal gebruikers van een leerapp. De eerste weken zien er fantastisch uit: elke week 40 procent meer. Hij extrapoleert — en krijgt voor volgend jaar meer gebruikers dan er mensen met een smartphone zijn. "Je model is niet fout", zegt zijn docente, "het zit alleen al buiten zijn geldigheidsgebied. Wat gebeurt er als de helft van alle mogelijke gebruikers de app al heeft?" Amir beseft: hij is vergeten dat de wereld eindig is.',
      challenge: 'Hoe modelleer je groei die een grens heeft? En hoe onderscheid je twee soorten grens: een waartegen je vanaf het begin afremt, en een waarnaar je eerst versnelt en dan afremt?',
      outro: 'Amir werkt nu met twee modellen in plaats van één. Begrensde groei, als de toename alleen van de nog vrije rest afhangt — afkoeling, verzadiging, opladen. Logistische groei, als de toename bovendien de aanwezige hoeveelheid nodig heeft — besmetting, doorverwijzing, populaties. En hij weet nu wat het buigpunt betekent: niet het einde van de groei, maar het snelste moment ervan.',
    },
    objectives: {
      grenzen: 'Herkennen wanneer een exponentieel model tegen zijn grens aanloopt — en waarom het daarvoor toch klopte',
      beschraenkt: 'Begrensde groei $N(t) = K - (K - N_0)e^{-kt}$ opstellen en uitwerken',
      logistisch: 'Het logistische model $N(t) = \\frac{K}{1 + a e^{-rt}}$ bepalen uit capaciteit en beginwaarde',
      wendepunkt: 'Het buigpunt berekenen en interpreteren als het tijdstip van de sterkste toename',
    },
    explanation: {
      intro: 'Exponentiële groei kent geen grens. In werkelijkheid is er echter bijna altijd een: de vijver is ooit vol, alle mogelijke klanten hebben het product, de kop koffie is op kamertemperatuur. Deze bovengrens heet capaciteit $K$. Twee modellen beschrijven hoe die bereikt wordt — en het verschil tussen de twee is geen detail, maar de vraag of de kromme een buigpunt heeft.',
      beschraenkt: 'Bij begrensde groei hangt de toename alleen af van hoeveel er nog ontbreekt. In het begin ontbreekt het meest, dus is de toename in het begin het grootst en wordt ze steeds kleiner. De kromme nadert de grens van onderen, zonder hem ooit te bereiken:',
      amir_tip: 'Ik onderscheid de twee modellen met één enkele vraag: heeft de toename nodig wat er al is? Bij afkoelende koffie niet — de warmte verdwijnt, ongeacht hoeveel er nog is, alleen het verschil telt. Bij een viraal filmpje wel — zonder mensen die het delen, gebeurt er niets. Het eerste is begrensd, het tweede logistisch.',
      logistisch: 'Bij logistische groei komt de hoeveelheid er als tweede factor bij. In het begin is er wel veel ruimte, maar zijn er nauwelijks individuen — de groei is langzaam. Aan het eind zijn er veel individuen, maar geen ruimte meer — weer langzaam. Daartussen ligt het maximum. Dat levert de typische S-vorm op:',
      dgl: 'Het duidelijkst zie je het verschil in de differentiaalvergelijking. Die leest als een zin: de toename is evenredig met de hoeveelheid **maal** het nog vrije deel. Ontbreekt een van de twee factoren, dan staat de groei stil:',
      wendepunkt: 'Uit deze vergelijking volgt het belangrijkste kengetal van het model. Het product van hoeveelheid en vrije rest is precies dan het grootst als beide gelijk zijn — dus bij de halve capaciteit. Daar ligt het buigpunt, en daar is de groeisnelheid maximaal:',
    },
    concepts: {
      kapazitaet: {
        title: 'Capaciteit $K$',
        desc: 'De bovengrens die de hoeveelheid nadert zonder haar te bereiken. Het is de limiet voor $t \\to \\infty$ en zit in beide modellen als parameter. Zonder zinvolle capaciteit is geen van beide modellen toepasbaar.',
      },
      beschraenkt: {
        title: 'Begrensde groei',
        desc: 'De toename hangt alleen af van de nog vrije rest $K - N$. Daarom is ze helemaal in het begin het grootst en neemt ze daarna gestaag af. De kromme heeft geen buigpunt — ze is vanaf het begin rechtsgekromd. Typisch voor afkoeling, opladen en verzadiging.',
      },
      logistisch: {
        title: 'Logistische groei',
        desc: 'De toename hangt af van de hoeveelheid ÉN van de vrije rest. Daaruit ontstaat de S-kromme: eerst langzaam, dan snel, dan weer langzaam. De parameter $a = \\frac{K - N_0}{N_0}$ geeft aan hoeveel vrije plaatsen er in het begin op elk aanwezig individu komen.',
      },
      wendepunkt: {
        title: 'Buigpunt bij $K/2$',
        desc: 'Altijd bij de halve capaciteit, onafhankelijk van $r$ en $N_0$. Daar is de groeisnelheid maximaal, namelijk $\\frac{rK}{4}$. Daarna groeit de hoeveelheid verder, maar langzamer — de meest voorkomende verwarring bij interpretatieopgaven.',
      },
    },
    examples: {
      seerosen: {
        title: 'Logistisch model opstellen uit capaciteit en beginwaarde',
        context: 'Op een vijver met plaats voor 500 waterlelies groeien in het begin 50 planten.',
        step1: 'Eerst de parameter $a$. Die volgt direct uit capaciteit en beginwaarde:',
        step2: 'Daarmee staat het model. De groeifactor $r = 0{,}4$ per week komt uit de meetreeks:',
        step3: 'Controle: vul $t = 0$ in. Komt hier niet de beginwaarde uit, dan is $a$ fout:',
        step4: 'Het tijdstip van het buigpunt volgt uit $a\\,e^{-rt} = 1$ — een logaritmische vergelijking:',
        amir_comment: 'De controle in stap 3 doe ik altijd. Die kost tien seconden en vangt de meest voorkomende fout af: $a = \\frac{K}{N_0}$ in plaats van $a = \\frac{K - N_0}{N_0}$. Bij mij was dat 10 in plaats van 9 geweest — ziet er onschuldig uit, maar verschuift de hele kromme.',
      },
      abkuehlung: {
        title: 'Begrensde groei bij afkoeling',
        context: 'Kai laat een kop koffie van 80 °C staan in een kamer van 20 °C.',
        step1: 'De grens is hier de kamertemperatuur, het verschil daarmee bedraagt in het begin 60 °C:',
        step2: 'Controle bij $t = 0$: de begintemperatuur moet eruit komen:',
        step3: 'Na tien minuten is er nog maar ongeveer een derde van het verschil over:',
        step4: 'Op lange termijn blijft de kamertemperatuur over — wiskundig wordt die nooit bereikt:',
        kai_comment: 'Bij koffie is dat alledaagse kennis: de eerste minuut levert het meest op, daarna gaat het taai. Precies dat is begrensde groei. En het is de reden waarom blazen in het begin helpt en na tien minuten niets meer uithaalt.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Epidemieën',
        desc: 'Nieuwe besmettingen hebben besmette mensen nodig (die anderen aansteken) en vatbare mensen (die aangestoken kunnen worden). Het buigpunt is de dag met de meeste nieuwe besmettingen — het totaal stijgt daarna verder, alleen langzamer.',
      },
      produkt: {
        title: 'Verspreiding van producten en apps',
        desc: 'Nieuwe gebruikers komen meestal via bestaande gebruikers. In het begin ontbreken de mensen die het aanraden, aan het eind de mensen die het nog niet hebben. Marketingafdelingen noemen de S-kromme ook adoptiecurve.',
      },
      abkuehlung: {
        title: 'Afkoeling en opladen',
        desc: 'De afkoelingswet van Newton en de laadcurve van een accu zijn begrensde groei. Hier telt alleen de afstand tot de eindtoestand — daarom laadt een accu de laatste procenten zo tergend langzaam.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'Vanaf het buigpunt neemt de hoeveelheid af',
        correct: 'Vanaf het buigpunt neemt de groeisnelheid af, de hoeveelheid stijgt verder',
        why: 'Het buigpunt is het nulpunt van de tweede afgeleide, niet van de eerste. $N\'$ heeft daar een maximum, is dus juist bijzonder groot — en positief. De logistische functie is op haar hele domein strikt stijgend, ze daalt nooit. Wie hier hoeveelheid en toename verwart, draait de uitspraak precies om.',
        amir_warning: 'Dit is interpretatiefout nummer één en die kost in elk eindexamen punten. Mijn truc: ik formuleer het antwoord altijd met het woord "per". Wat verandert er per week? De toename. Wat is er in totaal? De hoeveelheid. Zodra het woord "per" opduikt, heb ik het over $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'Logistische groei is exponentiële groei die bij $K$ wordt afgekapt',
        correct: 'De logistische kromme remt geleidelijk af en bereikt $K$ helemaal nooit',
        why: 'Een afgekapt exponentieel model zou een knik hebben — het zou op het snijpunt niet differentieerbaar zijn en de grens in eindige tijd exact bereiken. De logistische functie is daarentegen overal glad en nadert $K$ alleen asymptotisch. Het verschil is niet cosmetisch: het afgekapte model voorspelt een concreet eindtijdstip, het logistische geen.',
        amir_warning: 'Juist aan die gedachte is alleen de beginfase: zolang $N$ klein is ten opzichte van $K$, is de remfactor bijna $1$ en liggen de twee krommen praktisch op elkaar. De exponentiële kromme is de beginraaklijn van de logistische — daarom paste mijn eerste model ook zo goed op de eerste weken.',
      },
    },
  },
};
