export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia scrollt door de animatielijst van Hafenlichter en fronst. Lumis ademanimatie ziet eruit als een robot — schokkerig en onnatuurlijk. Ook de golven in de haven zijn stijf, en de dag-nachtcyclus springt in plaats van te vloeien. "Alles wat zich herhaalt, heeft een trilling nodig", zegt Tim. "Sinus en cosinus — die zijn daarvoor gemaakt." Mia opent haar rekenmachine en duikt in de wereld van periodieke functies.',
      challenge: 'Ademanimatie, golfbeweging en dag-nachtcyclus moeten natuurlijk golven in plaats van schokken.',
      outro: 'Lumis adem stijgt en daalt nu zacht, de havengolven rollen gelijkmatig naar de oever, en het licht wisselt vloeiend van ochtendgloren naar middernachtsblauw. "Sinusfuncties zijn overal in de natuur", zegt Jule. Mia knikt: "En nu zijn ze ook in Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Periodieke functies herkennen en van niet-periodieke onderscheiden',
      amplitude_period: 'Amplitude en periode uit grafieken en vergelijkingen aflezen',
      frequency: 'De frequentie berekenen en haar betekenis uitleggen',
      modeling: 'Reele verschijnselen met sinusfuncties modelleren',
    },
    explanation: {
      intro: 'Sommige processen herhalen zich steeds weer: je hartslag, de getijden, de seizoenen. In de wiskunde beschrijven we zulke trillingen met periodieke functies. De belangrijkste is de sinusfunctie:',
      parameters: 'De algemene sinusfunctie heeft vier parameters die je kunt zien als regelaars op een mengpaneel: $A$ regelt de hoogte van de trilling (amplitude), $b$ beinvloedt hoe snel de trilling zich herhaalt (periode), $c$ verschuift de curve naar links of rechts, en $d$ verschuift haar omhoog of omlaag.',
      mia_tip: 'Voor Lumis ademanimatie gebruik ik $A = 3$ pixels en $T = 4$ seconden. Dat betekent: elke 4 seconden ademt Lumi een keer in en uit, en de borst beweegt 3 pixels op en neer. Helemaal natuurlijk!',
      graph_reading: 'Om een periodieke functie van de grafiek af te lezen, zoek je naar het patroon dat zich herhaalt. De afstand tussen twee identieke punten heet periode $T$. Wiskundig betekent periodiciteit:',
      applications: 'Periodieke functies zijn het wiskundige gereedschap voor alles wat trilt: geluidsgolven, wisselstroom, slingers, lichtgolven en zelfs de banen van planeten. Telkens wanneer een proces zich regelmatig herhaalt, zit er een sinusfunctie (of haar verwanten) achter.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitude',
        desc: 'De amplitude $A$ is de maximale uitslag ten opzichte van de middenwaarde. Ze meet hoe "sterk" de trilling is. Op de grafiek lees je haar af als de helft van het verschil tussen het hoogste en laagste punt.',
      },
      period: {
        title: 'Periode',
        desc: 'De periode $T$ is de lengte van een volledige trillingscyclus. Na de tijd $T$ herhaalt alles zich precies. Hoe groter $b$, hoe korter de periode.',
      },
      frequency: {
        title: 'Frequentie',
        desc: 'De frequentie $f$ geeft aan hoeveel trillingen per tijdseenheid plaatsvinden. Ze is de inverse van de periode. Eenheid: Hertz (Hz) = trillingen per seconde.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Sinusfunctie van de grafiek aflezen',
        context: 'Mia heeft een golfeffect in het spel en wil de bijbehorende vergelijking vinden.',
        step1: 'Hoogste en laagste punt aflezen: $y_{\\max} = 3$ en $y_{\\min} = -3$. De amplitude is de helft van het verschil — de golf trilt 3 eenheden op en neer.',
        step2: 'Periode aflezen: een volledige cyclus duurt $4\\pi$ eenheden. Daaruit berekenen we $b$ met de formule $b = \\frac{2\\pi}{T}$ — dat geeft $0{,}5$.',
        step3: 'Vergelijking samenstellen: aangezien de middenlijn op $y = 0$ ligt ($d = 0$) en geen faseverschuiving ($c = 0$) zichtbaar is, luidt de functie simpelweg:',
        mia_comment: 'Amplitude 3, periode $4\\pi$ — daarmee schommelen de havengolven lekker langzaam. Voor snellere golven verhoog ik gewoon $b$!',
      },
      ferris_wheel: {
        title: 'Reuzenrad modelleren',
        context: 'Een reuzenrad met 60 m diameter draait elke 10 minuten een keer rond. De laagste gondel is 5 m boven de grond.',
        step1: 'Amplitude bepalen: de straal is de halve hoogte, dus $A = 30\\,\\text{m}$. De middenlijn ligt op $d = 5 + 30 = 35\\,\\text{m}$ (grond + straal).',
        step2: 'De periode is een volledige omwenteling: $T = 10\\,\\text{min}$. Daaruit volgt $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Startpunt in acht nemen: onderaan starten betekent dat we de sinus verschuiven met $-\\frac{\\pi}{2}$ (de sinus start normaal in het midden, niet onderaan).',
        step4: 'Controle: na 2,5 minuten (kwart omwenteling) moet de gondel op middelhoogte zijn. Invullen: $\\sin(0) = 0$, dus $h = 35\\,\\text{m}$. Klopt!',
        mia_comment: 'Precies zo werkt ook de dag-nachtcyclus in Hafenlichter: sinus met $T = 24$ (een speldag) en verschuiving, zodat het om middernacht het donkerst is.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Je hartslag',
        desc: 'Je hart klopt ongeveer 72 keer per minuut — dat zijn 1,2 slagen per seconde. De elektrische signalen van je hart (ECG) tonen een periodieke curve. Artsen lezen amplitude en frequentie af om hartproblemen te herkennen.',
      },
      tides: {
        title: 'Eb en vloed',
        desc: 'In de Hamburger haven schommelt het waterniveau elke 12,4 uur tussen hoog- en laagwater. Dat is een bijna perfecte sinusfunctie — veroorzaakt door de aantrekkingskracht van de maan.',
      },
      temperature: {
        title: 'Jaartemperatuur',
        desc: 'De gemiddelde temperatuur over een jaar volgt grofweg een sinuscurve: warm in de zomer, koud in de winter, met een periode van 365 dagen. Klimaatonderzoekers gebruiken dit model als basis voor voorspellingen.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Periode en frequentie verwisseld',
        correct: 'Frequentie is de inverse van de periode',
        why: 'Als de periode $T = 2\\,\\text{s}$ is, trilt het elke 2 seconden een keer. De frequentie is dan $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — niet $2\\,\\text{Hz}$! Frequentie = "Hoe vaak per seconde?", Periode = "Hoe lang duurt een cyclus?"',
        mia_warning: 'Deze fout zorgde ervoor dat Lumis adem twee keer zo snel was — ze zag eruit als na een sprint!',
      },
      b_value: {
        wrong: '$b$ gelijkgesteld aan de periode',
        correct: '$b$ en $T$ via de formule omrekenen',
        why: '$b$ is NIET de periode, maar hangt via $T = \\frac{2\\pi}{b}$ met haar samen. Als de periode $4\\pi$ is, dan is $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — niet $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter draait — maar het hapert. Mia opent de prestatiemonitor en ziet: in sommige scenes zakt de framerate naar 15 FPS. "Waar precies wordt het langzaam?", vraagt Tim. "Ik heb niet het gemiddelde over de hele scene nodig, maar de exacte plek waar de prestatie instort." Jule glimlacht: "Dat is precies de vraag die leidde tot de uitvinding van de differentiaalrekening — de momentane veranderingssnelheid."',
      challenge: 'De exacte plek vinden waar de framerate instort — niet alleen het gemiddelde.',
      outro: 'Mia heeft de kritieke plek gevonden: precies bij frame 847 explodeert de rendertijd, omdat er 200 deeltjes tegelijk worden aangemaakt. "Zonder de momentane veranderingssnelheid had ik eeuwig gezocht", zegt ze. Tim knikt: "Newton zou het ook zo gedaan hebben — alleen zonder prestatiemonitor."',
    },
    objectives: {
      average_rate: 'De gemiddelde veranderingssnelheid (secantenhelling) berekenen en interpreteren',
      instantaneous_rate: 'De momentane veranderingssnelheid als limiet begrijpen',
      limit_concept: 'De overgang van secant naar raaklijn volgen',
      derivative_notation: 'De verschillende notaties van de afgeleide kennen en toepassen',
    },
    explanation: {
      intro: 'Stel je voor dat je met de fiets naar school gaat. Je snelheidsmeter wijst 20 km/u aan — dat is je momentane snelheid. Maar hoe bereken je die? Als je zegt "Ik heb 10 km in 30 minuten gefietst", is dat een gemiddelde. De momentane snelheid op een bepaald punt is iets anders — en daar gaat de differentiaalrekening over.',
      secant_to_tangent: 'Het idee is geniaal eenvoudig: bereken de gemiddelde helling tussen twee punten en schuif de punten steeds dichter naar elkaar. In de limiet — als de afstand naar nul gaat — krijg je de helling in een enkel punt. Dat is de afgeleide:',
      mia_tip: 'De gemiddelde framerate over 10 seconden zegt me niets. Ik heb de momentane snelheid bij frame 847 nodig! Precies als bij de snelheidsmeter: die toont niet het gemiddelde van de hele rit, maar hoe snel je NU gaat.',
      derivative_meaning: 'De afgeleide $f\'(x_0)$ heeft een duidelijke betekenis: ze geeft de helling van de raaklijn aan de grafiek in het punt $x_0$. Als $f\'(x_0) > 0$ stijgt de functie daar. Als $f\'(x_0) < 0$ daalt ze. Als $f\'(x_0) = 0$ heeft de functie daar (mogelijk) een maximum of minimum. Er zijn verschillende notaties:',
      geometric_interpretation: 'Meetkundig gebeurt het volgende: de secant door twee punten op de grafiek draait als de punten naar elkaar toe schuiven. In de limiet wordt de secant de raaklijn — een rechte die de grafiek in precies een punt "raakt". De helling van deze raaklijn is de afgeleide.',
    },
    concepts: {
      difference_quotient: {
        title: 'Differentiequotient',
        desc: 'De gemiddelde veranderingssnelheid tussen twee punten. Berekent de helling van de secant — een rechte die de grafiek in twee punten snijdt.',
      },
      differential_quotient: {
        title: 'Differentiaalquotient (afgeleide)',
        desc: 'De momentane veranderingssnelheid op een punt. Ontstaat wanneer $h$ in het differentiequotient naar nul gaat. Geeft de raaklijntanning aan.',
      },
      derivative_notation: {
        title: 'Notaties van de afgeleide',
        desc: 'Er zijn drie gangbare notaties: $f\'(x)$ (Lagrange, het meest gebruikt op school), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, benadrukt het breukkarakter) en $\\dot{y}$ (Newton, vooral in de natuurkunde voor tijdsafgeleiden).',
      },
    },
    examples: {
      average_speed: {
        title: 'Gemiddelde snelheid',
        context: 'Een bal rolt van een helling. De afstand hangt kwadratisch af van de tijd.',
        step1: 'Gegeven is de weg-tijdfunctie. Na 2 seconden is de bal 2 m ver, na 4 seconden 8 m.',
        step2: 'Gemiddelde snelheid tussen $t = 2$ en $t = 4$: we delen de afstandsverandering door de tijdsverandering. Dat geeft $3\\,\\text{m/s}$ gemiddeld.',
        step3: 'Nu verkleinen we het interval: tussen $t = 2$ en $t = 2{,}1$ geeft $2{,}05\\,\\text{m/s}$. Hoe korter het interval, hoe dichter we bij de momentane snelheid bij $t = 2$ komen.',
        mia_comment: 'Precies zo werkt mijn prestatiemonitor: hij meet de framerate in steeds kortere intervallen, totdat ik de exacte plek vind waar het hapert.',
      },
      instantaneous_rate: {
        title: 'Momentane veranderingssnelheid berekenen',
        context: 'Bepaal de afgeleide van $f(x) = x^2$ in het punt $x_0 = 3$.',
        step1: 'We vullen $f(x) = x^2$ en $x_0 = 3$ in het differentiequotient in. Gezocht: wat gebeurt er als $h$ naar 0 gaat?',
        step2: 'Teller uitrekenen: $(3+h)^2 = 9 + 6h + h^2$. Min $f(3) = 9$ geeft $6h + h^2$ in de teller.',
        step3: 'Delen door $h$ (dat mag omdat $h \\neq 0$ in het limietproces): er blijft $6 + h$ over.',
        step4: 'Limiet bepalen: voor $h \\to 0$ wordt $6 + h$ gelijk aan $6$. De helling van de raaklijn bij $x = 3$ is dus exact $6$.',
        mia_comment: 'De raaklijn bij $x = 3$ heeft helling 6. Als ik dit voor elk punt doe, krijg ik de afgeleide functie $f\'(x) = 2x$. Bij $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Klopt!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Flitspaal en snelheid',
        desc: 'Een flitspaal meet niet je momentane snelheid, maar je gemiddelde snelheid over een kort traject (trajectcontrole: over meerdere kilometers). Hoe korter het meettraject, hoe dichter bij de momentane waarde.',
      },
      stock_trends: {
        title: 'Aandelenkoersen en trends',
        desc: 'Als een aandeel "stijgt", bedoelen analisten de positieve afgeleide van de koers. De helling van de raaklijn aan het koersverloop toont de trend: positief = opwaartse trend, negatief = neerwaartse trend, nul = keerpunt.',
      },
      speedometer: {
        title: 'Snelheidsmeter in de auto',
        desc: 'Je snelheidsmeter toont de momentane snelheid — wiskundig de afgeleide van de wegfunctie naar de tijd. GPS-apparaten berekenen haar als limiet over zeer korte tijdsintervallen.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Gemiddelde = momentane waarde',
        correct: 'Gemiddelde en momentane waarde onderscheiden',
        why: 'De gemiddelde veranderingssnelheid over een interval $[1;\\,5]$ is NIET gelijk aan de momentane veranderingssnelheid bij $x = 3$ (het midden). Dit geldt alleen voor lineaire functies! Bij gekromde grafieken wijken beide waarden af.',
        mia_warning: 'Ik had eerst de gemiddelde framerate berekend en dacht dat alles goed was. Maar lokaal waren er enorme inzinkingen! Het gemiddelde verborg het probleem.',
      },
      secant_tangent: {
        wrong: 'Secantenhelling = raaklijntanning',
        correct: 'De raaklijn is het limietgeval van de secant',
        why: 'De secant snijdt de grafiek in twee punten, de raaklijn raakt hem in een punt. Pas als de twee punten naar elkaar toe schuiven ($h \\to 0$) wordt de secant de raaklijn. Zonder limiet is het slechts een benadering.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter heeft een balanceringssysteem nodig: hoe snel moet Lumi levelen? Hoe sterk worden de vijanden? Hoeveel kost een upgrade? "Als alles lineair groeit, wordt het spel saai", zegt Jule. Tim vult aan: "En als alles exponentieel groeit, wordt het oneerlijk." Mia beseft: ze moet verschillende groeitypes kennen en gericht inzetten.',
      challenge: 'De juiste groeicurves vinden voor gamebalancering — lineair, kwadratisch, exponentieel of logaritmisch.',
      outro: 'Mia\'s balanceringssysteem is klaar: loopsnelheid groeit lineair, valschade kwadratisch, XP-vereisten exponentieel en de leercurve logaritmisch. "Elke curve heeft zijn plaats", zegt ze tevreden. Het spel voelt nu eerlijk en spannend — van level 1 tot de eindboss.',
    },
    objectives: {
      identify_types: 'De vier grote functieklassen (lineair, kwadratisch, exponentieel, logaritmisch) herkennen aan vergelijkingen en grafieken',
      compare_growth: 'Het groeigedrag van de functieklassen vergelijken en ordenen',
      match_context: 'Bij de situatie de passende functieklasse kiezen en beargumenteren',
      graph_recognition: 'Grafieken aan de juiste functietypes toewijzen',
    },
    explanation: {
      intro: 'In de wiskunde zijn er verschillende "families" van functies — elk met een eigen karakter. Sommige groeien gelijkmatig, andere steeds sneller, weer andere steeds langzamer. De vier belangrijkste klassen voor klas 10 zijn:',
      mia_tip: 'In game design gebruik ik elke functieklasse voor iets anders: lineaire groei voor voorspelbare dingen (loopsnelheid), kwadratisch voor dingen die zich "opschroeven" (valschade), exponentieel voor uitdagingen (XP-vereisten) en logaritmisch voor leereffecten (vaardigheidsvorderingen).',
      growth_comparison: 'Beslissend is: hoe snel groeit elke functieklasse voor grote $x$-waarden? De volgorde is altijd hetzelfde — ongeacht welke concrete getallen je invult:',
      choosing_functions: 'De juiste functie voor een probleem kiezen is een sleutelcompetentie. Vraag je af: is de verandering constant (lineair)? Versnelt die gelijkmatig (kwadratisch)? Verdubbelt de waarde in gelijke intervallen (exponentieel)? Wordt de toename steeds kleiner (logaritmisch)?',
    },
    concepts: {
      linear: {
        title: 'Lineaire functies',
        desc: 'Constant veranderingssnelheid: elke stap komt er evenveel bij. De grafiek is een rechte lijn. Helling $m$ en snijpunt met de y-as $b$ zijn direct af te lezen.',
      },
      quadratic: {
        title: 'Kwadratische functies',
        desc: 'De veranderingssnelheid zelf verandert lineair — er komt steeds sneller meer bij (of minder). De grafiek is een parabool met toppunt.',
      },
      exponential: {
        title: 'Exponentiele functies',
        desc: 'Groei met een vast percentage: hoe meer er is, hoe meer erbij komt. Verdubbeling in gelijke tijdsintervallen. Groeit op de lange termijn sneller dan elke machtsfunctie.',
      },
      logarithmic: {
        title: 'Logaritmische functies',
        desc: 'De omkeerfunctie van de exponentiele functie. Groeit in het begin snel, daarna steeds langzamer. Modelleert verzadigingseffecten en leercurves.',
      },
    },
    examples: {
      identify_type: {
        title: 'Functietype herkennen aan waardetabellen',
        context: 'Er liggen drie datasets voor. Welk type past bij elk?',
        step1: 'Test op lineair: bepaal de verschillen van opeenvolgende $y$-waarden. Zijn ze constant, dan is de functie lineair.',
        step2: 'Test op exponentieel: bepaal de quotienten van opeenvolgende $y$-waarden. Zijn ze constant, dan is de functie exponentieel.',
        step3: 'Test op kwadratisch: bepaal de tweede verschillen (verschillen van de verschillen). Zijn die constant, dan is de functie kwadratisch.',
        mia_comment: 'Precies zo test ik mijn balancering: ik laat 100 rondes simuleren en controleer of de waarden het gewenste groeitype volgen. Als de tweede verschillen afwijken, klopt er iets niet.',
      },
      game_mechanics: {
        title: 'Spelmechanieken modelleren',
        context: 'Vier verschillende spelmechanieken in Hafenlichter hebben verschillende functies nodig.',
        step1: 'Loopsnelheid: stijgt per level met hetzelfde bedrag ($+5$ per level). Dat is een constante verandering — dus lineair. Eerlijk en voorspelbaar.',
        step2: 'Valschade: van 2 m hoogte lichte schade, van 10 m veel meer. De schadetoename versnelt — kwadratisch. Natuurkundig logisch (energie = $\\frac{1}{2}mv^2$).',
        step3: 'XP-vereisten per level: level 2 vereist 150 XP, level 3 vereist 225 XP, level 4 vereist 337 XP. De vraag groeit steeds met 50% — exponentieel. Zo blijven hogere levels een echte uitdaging.',
        step4: 'Leercurve (vaardigheid): in het begin leer je snel, later steeds langzamer. Na $t$ uur speeltijd beheers je $20 \\cdot \\log_2(t+1)$ procent van de mechanieken — logaritmisch.',
        mia_comment: 'Dit is de kern van game design: de juiste curve voor de juiste mechaniek. Lineaire XP zou saai zijn, exponentiele valschade oneerlijk. Elk functietype heeft zijn sweet spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Virale app-downloads',
        desc: 'Als elke gebruiker twee vrienden uitnodigt en die weer twee, verdubbelen de downloads. In het begin nauwelijks zichtbaar, dan explosief — typisch exponentieel. TikTok, Instagram en WhatsApp zijn zo gegroeid.',
      },
      salary: {
        title: 'Zakgeld en salaris',
        desc: 'Je zakgeld stijgt (hopelijk) elk jaar met hetzelfde bedrag — lineaire groei. Later in je baan stijgt je salaris vaak vergelijkbaar: een vast bedrag per jaar werkervaring.',
      },
      learning_curve: {
        title: 'Leervoortgang',
        desc: 'Nieuw instrument, nieuwe sport, nieuwe taal: in het begin maak je enorme vorderingen, dan wordt het steeds moeilijker om beter te worden. Dat is een logaritmische verzadigingscurve — en heel normaal!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Exponentieel" en "kwadratisch" zijn hetzelfde',
        correct: 'Exponentieel groeit VEEL sneller dan kwadratisch',
        why: 'Bij kleine getallen lijken $x^2$ en $2^x$ op elkaar: $4^2 = 16$ en $2^4 = 16$. Maar bij $x = 10$: $10^2 = 100$ tegenover $2^{10} = 1024$. Exponentiele groei haalt elke machtsfunctie in!',
        mia_warning: 'Ik had de XP-vereisten eerst kwadratisch in plaats van exponentieel gemaakt. Resultaat: vanaf level 20 was het spel veel te makkelijk, omdat spelers sneller XP verzamelden dan de vraag groeide.',
      },
      all_curves_linear: {
        wrong: 'Elke groei is lineair',
        correct: 'Eerst het groeitype controleren',
        why: 'Alleen omdat iets "verdubbelt" betekent niet dat het lineair is! "Elke 3 dagen dubbel zoveel volgers" is exponentieel, niet lineair. Lineair zou zijn: "elke dag 100 nieuwe volgers". Het verschil: constante toename (lineair) vs. constante factor (exponentieel).',
      },
    },
  },
};
