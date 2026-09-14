export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'Mia zit in haar kleine kantoor aan de haven van Hamburg en staart naar het scherm. Lumi, haar spelfiguur in "Hafenlichter", moet elegant over kisten en containers springen — maar de springcurve ziet er gewoon verkeerd uit. "De natuurkunde klopt niet", mompelt ze. Om een realistische springbaan te programmeren, heeft Mia kwadratische functies nodig.',
      challenge: 'Lumi moet over kisten springen — maar de springcurve ziet er onnatuurlijk uit.',
      outro: 'Met de toppuntvorm heeft Mia de perfecte springcurve geprogrammeerd! Lumi vliegt nu in een elegante boog over de Hamburgse containers. "Eindelijk ziet het er realistisch uit", zegt Tim en hij geeft haar een high five.',
    },
    objectives: {
      recognize: 'Kwadratische functies herkennen en hun eigenschappen beschrijven',
      vertex_form: 'Zeker omrekenen tussen standaardvorm en toppuntvorm',
      pq_formula: 'Nulpunten berekenen met de abc-formule',
      graph_properties: 'Openingsrichting, top en symmetrieas uit de vergelijking aflezen',
    },
    explanation: {
      intro: 'Stel je voor dat je een basketbal gooit. De bal vliegt in een boog omhoog, bereikt het hoogste punt en valt weer naar beneden. Deze baan heeft een heel bepaalde vorm — een parabool. In de wiskunde beschrijven we die met een kwadratische functie:',
      opening: 'Het getal $a$ bepaalt of de parabool naar boven ($a > 0$) of naar beneden ($a < 0$) open is — en hoe "smal" of "breed" hij is. Hoe groter $|a|$, hoe smaller de parabool.',
      mia_tip: 'In mijn spel is $a$ negatief, want de springcurve gaat eerst omhoog en daarna weer omlaag — als een omgekeerde U!',
      vertex_form: 'De toppuntvorm vertelt je meteen het hoogste (of laagste) punt van de parabool. De top $S$ heeft de coördinaten $(d \\mid e)$:',
      conversion: 'Om van de standaardvorm naar de toppuntvorm te gaan, gebruik je kwadraatafsplitsen. Je telt slim een getal op en trekt het weer af, zodat er een perfect kwadraat ontstaat.',
    },
    concepts: {
      normal_form: {
        title: 'Standaardvorm',
        desc: 'De gewone schrijfwijze. Je ziet meteen: $a$ = opening, $c$ = snijpunt met de y-as (waar de parabool de y-as snijdt).',
      },
      vertex_form: {
        title: 'Toppuntvorm',
        desc: 'Laat je meteen de top $S(d \\mid e)$ zien. Het beste voor: hoogste/laagste punt aflezen, verschuiving herkennen.',
      },
      pq_formula: {
        title: 'abc-formule',
        desc: 'Jouw gereedschap voor nulpunten. Voorwaarde: De vergelijking moet in de vorm $x^2 + px + q = 0$ staan (de coëfficiënt voor $x^2$ moet 1 zijn!).',
      },
      discriminant: {
        title: 'Discriminant',
        desc: 'De uitdrukking onder de wortel beslist: $D > 0$ = twee nulpunten, $D = 0$ = één nulpunt, $D < 0$ = geen reëel nulpunt.',
      },
    },
    examples: {
      vertex: {
        title: 'De toppuntvorm bepalen',
        context: 'Mia wil het hoogste punt van Lumis sprong berekenen.',
        step1: 'De functie is gegeven in standaardvorm:',
        step2: 'Kwadraatafsplitsen: We tellen $(\\frac{6}{2})^2 = 9$ op en trekken het weer af:',
        step3: 'Samennemen — de uitdrukking tussen haakjes is een perfect kwadraat:',
        step4: 'De top aflezen: $d = 3$, $e = -4$, dus:',
        mia_comment: 'De top bij $(3 \\mid -4)$ is het laagste punt, omdat $a = 1 > 0$. Voor een springcurve heb ik $a < 0$ nodig, dan wordt het het hoogste punt!',
      },
      pq: {
        title: 'Nulpunten met de abc-formule',
        context: 'Waar komt Lumi weer op de grond?',
        step1: 'Gegeven: De vergelijking staat al in de juiste vorm ($x^2$-coëfficiënt = 1):',
        step2: 'De waarden van $p$ en $q$ aflezen:',
        step3: 'In de abc-formule invullen en uitrekenen:',
        step4: 'Lumi landt dus bij $x = 2$ of $x = -4$:',
        mia_comment: 'Twee nulpunten — de parabool snijdt de x-as twee keer. In het spel betekent dat: Lumi springt af bij $x = -4$ en landt bij $x = 2$!',
      },
    },
    realworld: {
      basketball: {
        title: 'Basketbalworp',
        desc: 'Elke worp naar de basket beschrijft een parabool. De hoogte $h$ hangt af van de tijd $t$. Trainers gebruiken dat om de beste werphoek te berekenen.',
      },
      bridge: {
        title: 'Hangbruggen',
        desc: 'Bij hangbruggen zoals de Golden Gate Bridge hangt de draagkabel bijna precies in de vorm van een parabool – omdat het brugdek zijn gewicht gelijkmatig over de kabel verdeelt.',
      },
      pricing: {
        title: 'Prijsoptimalisatie',
        desc: 'Een winkel wil weten: Welke prijs levert de meeste winst op? Als de prijs stijgt, kopen minder mensen — de winst is een parabool met een maximum.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Tekenfout',
        correct: 'Let op de tekens',
        why: 'In $f(x) = (x - d)^2 + e$ staat een min voor $d$. Dat betekent: $f(x) = (x - 3)^2$ heeft de top bij $d = +3$, niet bij $-3$!',
        mia_warning: 'Deze tekenfout heeft me 3 uur debuggen gekost. Lumis springcurve was naar links verschoven in plaats van naar rechts!',
      },
      pq_wrong: {
        wrong: 'abc-formule zonder delen',
        correct: 'Eerst door $a$ delen',
        why: 'De abc-formule werkt alleen als de coëfficiënt voor $x^2$ gelijk is aan 1. Bij $2x^2 + 4x - 6 = 0$ moet je eerst door 2 delen: $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'Mia heeft een probleem met de botsingsdetectie: Wanneer raakt Lumi een obstakel? Tim stelt voor om de afstand tussen twee punten te berekenen. "Daarvoor heb je Pythagoras nodig", zegt hij. Mia herinnert zich de stelling van school — en ineens snapt ze hem helemaal.',
      challenge: 'De botsingsdetectie moet de afstand tussen objecten berekenen.',
      outro: 'Lumis botsingsdetectie werkt nu tot op de pixel nauwkeurig! Mia heeft de stelling van Pythagoras gebruikt om de afstand tussen spelfiguur en obstakels in realtime te berekenen.',
    },
    objectives: {
      theorem: 'De stelling van Pythagoras zeker toepassen',
      calculate_sides: 'Ontbrekende zijden in een rechthoekige driehoek berekenen',
      recognize: 'Herkennen wanneer een driehoek rechthoekig is',
      apply: 'De stelling toepassen op problemen uit het dagelijks leven',
    },
    explanation: {
      intro: 'In elke rechthoekige driehoek geldt een eenvoudige, maar krachtige regel: De kwadraten van de twee rechthoekszijden samen zijn gelijk aan het kwadraat van de schuine zijde.',
      sides: 'Daarbij is $c$ altijd de langste zijde — de schuine zijde. Die ligt tegenover de rechte hoek. De twee kortere zijden $a$ en $b$ heten rechthoekszijden.',
      mia_tip: 'In mijn spel bereken ik de afstand tussen Lumi en een object als schuine zijde. De horizontale afstand is $a$, de verticale $b$ — en $c$ is de echte afstand!',
      solving: 'Je kunt de formule naar elke zijde omschrijven. Als je de schuine zijde zoekt:',
    },
    concepts: {
      theorem: {
        title: 'Stelling van Pythagoras',
        desc: 'Geldt alleen in rechthoekige driehoeken. $c$ is de schuine zijde (tegenover de rechte hoek), $a$ en $b$ zijn de rechthoekszijden.',
      },
      hypotenuse: {
        title: 'Schuine zijde berekenen',
        desc: 'Als je beide rechthoekszijden kent, neem je de wortel uit de som van de kwadraten.',
      },
      cathetus: {
        title: 'Rechthoekszijde berekenen',
        desc: 'Als je de schuine zijde en één rechthoekszijde kent, neem je de wortel uit het verschil.',
      },
    },
    examples: {
      screen: {
        title: 'Schermdiagonaal berekenen',
        context: 'Mia wil weten hoe groot het scherm van haar nieuwe monitor echt is.',
        step1: 'De monitor is 16 inch breed en 9 inch hoog:',
        step2: 'Pythagoras toepassen — breedte en hoogte zijn de rechthoekszijden:',
        step3: 'Worteltrekken voor de diagonaal:',
        mia_comment: '18,36 inch diagonaal — dat is de waarde die fabrikanten als "schermgrootte" opgeven. Nu weet ik waarom!',
      },
      ladder: {
        title: 'Ladder tegen de muur',
        context: 'Hoe hoog reikt een ladder van 5 meter die 1,5 m van de muur af staat?',
        step1: 'De ladder is de schuine zijde, de afstand tot de muur is een rechthoekszijde:',
        step2: 'Omschrijven naar de gezochte rechthoekszijde (de hoogte):',
        step3: 'De ladder reikt bijna 4,77 m hoog:',
        mia_comment: 'In het spel gebruik ik precies deze berekening om te controleren of Lumi een ladder kan bereiken!',
      },
    },
    realworld: {
      screen: {
        title: 'Schermdiagonaal',
        desc: 'De "grootte" van een scherm is altijd de diagonaal — berekend met Pythagoras uit breedte en hoogte.',
      },
      football: {
        title: 'Diagonaal van een voetbalveld',
        desc: 'Een voetbalveld is 105 m × 68 m. Hoe ver is het van hoek tot hoek? Pythagoras vertelt het je.',
      },
      wifi: {
        title: 'Wifi-bereik',
        desc: 'Je router staat op de begane grond, jij bent op de eerste verdieping. De echte afstand tot de router is de schuine zijde van de horizontale en de verticale afstand.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Schuine zijde als rechthoekszijde',
        correct: 'c is altijd de langste zijde',
        why: 'De schuine zijde $c$ ligt ALTIJD tegenover de rechte hoek. Het is de langste zijde. Verwissel je haar met een rechthoekszijde, dan klopt de hele berekening niet.',
      },
      root: {
        wrong: 'Wortel uit een som',
        correct: 'Eerst optellen, dan worteltrekken',
        why: '$\\sqrt{a^2 + b^2}$ is NIET hetzelfde als $a + b$! Voorbeeld: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, maar $3 + 4 = 7$.',
        mia_warning: 'Deze fout heeft Tim in mijn code gevonden — de botsingsdetectie was 40% te onnauwkeurig!',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'Mia wil een lootsysteem bouwen voor Hafenlichter. Spelers moeten zeldzame items kunnen vinden — maar niet te vaak, anders wordt het saai, en niet te zelden, anders is het frustrerend. "Dat is pure kansrekening", zegt Jule. Mia gaat zitten en rekent.',
      challenge: 'Het loot-drop-systeem moet eerlijk en spannend zijn.',
      outro: 'Mia\'s lootsysteem werkt! Ze heeft de dropkansen zo afgesteld dat spelers gemiddeld om de 20 kisten een zeldzaam item vinden. "De wiskunde erachter is eigenlijk simpel", grijnst ze — "maar het balanceren heeft toch lang geduurd."',
    },
    objectives: {
      basic: 'Kansen als breuk, kommagetal en percentage geven',
      tree: 'Meerstapskansexperimenten oplossen met boomdiagrammen',
      expected_value: 'De verwachtingswaarde berekenen en interpreteren',
      complement: 'Werken met de complementaire kans ("minstens één keer...")',
    },
    explanation: {
      intro: 'Hoe groot is de kans om een 6 te gooien? Hoe groot is de kans op een zeldzaam item in het spel? Om zulke vragen te beantwoorden, heb je kansrekening nodig. Het basisidee is simpel:',
      range: 'Kansen liggen altijd tussen 0 (onmogelijk) en 1 (zeker). Je kunt ze schrijven als breuk ($\\frac{1}{6}$), kommagetal ($0{,}167$) of percentage ($16{,}7\\%$).',
      mia_tip: 'In Hafenlichter is $P(\\text{Rare Item}) = 0{,}05$. Dat betekent: Bij elke drop heeft de speler 5% kans. Klinkt weinig — maar over veel drops telt dat op!',
      tree: 'Bij experimenten met meerdere stappen (bijv. twee keer gooien) gebruik je een boomdiagram. Langs een pad vermenigvuldig je de kansen:',
      complement: 'Vaak is het makkelijker om "het tegenovergestelde" te berekenen. De kans dat iets NIET gebeurt, is:',
    },
    concepts: {
      laplace: {
        title: 'Laplace-experiment',
        desc: 'Als alle uitkomsten even waarschijnlijk zijn (zoals bij een eerlijke dobbelsteen), deel je gewoon: gunstige uitkomsten door alle mogelijke uitkomsten.',
      },
      complement: {
        title: 'Complementaire kans',
        desc: 'De kans dat A NIET gebeurt. Super handig voor opgaven met "minstens één keer"!',
      },
      expected: {
        title: 'Verwachtingswaarde',
        desc: 'De "gemiddelde" waarde bij veel herhalingen. Bij een dobbelsteen: $E(X) = 3{,}5$ — je kunt nooit 3,5 gooien, maar gemiddeld komt deze waarde eruit.',
      },
    },
    examples: {
      dice: {
        title: 'Een even getal gooien',
        context: 'Hoe groot is de kans op een even getal met een dobbelsteen?',
        step1: 'De dobbelsteen heeft 6 zijden — dat is onze $\\Omega$:',
        step2: 'Gunstige uitkomsten (even getallen): 2, 4, 6 — dat zijn er 3:',
        step3: 'De kans berekenen:',
        mia_comment: '50% — dat voel je zo al aan. Maar bij ingewikkeldere vragen helpt de formule als je gevoel het niet meer weet!',
      },
      loot: {
        title: 'Minstens één zeldzaam item',
        context: 'Mia wil weten: Hoe groot is de kans om in 10 loot-drops minstens één zeldzaam item te krijgen?',
        step1: 'De kans op een zeldzaam item per drop is 5%:',
        step2: 'De complementaire kans gebruiken: Eerst berekenen dat er in 10 drops GEEN zeldzaam item komt:',
        step3: 'Dat is ongeveer 60% — in 60% van de gevallen krijg je GEEN zeldzaam item:',
        step4: 'De complementaire kans is het gezochte antwoord:',
        mia_comment: '40% kans op minstens één zeldzaam item in 10 drops — dat voelt eerlijk! Als de spelers gefrustreerd raken, verhoog ik gewoon de droprate.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Lootboxen in games',
        desc: 'Games zoals Genshin Impact of EA Sports FC gebruiken kansen voor hun lootboxen. In de app-winkels van Apple en Google moeten de winkansen getoond worden – met wiskunde kun je controleren of een aankoop de moeite waard is.',
      },
      shuffle: {
        title: 'Spotify-shuffle',
        desc: 'Spotify-shuffle is niet echt willekeurig — omdat "echt" toeval raar aanvoelt (soms komt hetzelfde nummer 3 keer achter elkaar). Spotify gebruikt algoritmes die "willekeuriger aanvoelen".',
      },
      lottery: {
        title: 'Winkansen in de loterij',
        desc: '6 goede getallen in de loterij — klinkt haalbaar? De echte kans is verdwijnend klein:',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Paden optellen in plaats van vermenigvuldigen',
        correct: 'Langs een pad vermenigvuldigen',
        why: 'Bij een boomdiagram vermenigvuldig je langs een pad (EN-verbinding). Optellen mag je alleen als je verschillende paden samenneemt (OF-verbinding).',
        mia_warning: 'Deze fout had ik in het lootsysteem. De dropkansen waren veel te hoog, omdat ik had opgeteld in plaats van vermenigvuldigd — elke speler had meteen alles!',
      },
      percent: {
        wrong: 'Percentages boven 100%',
        correct: 'Het maximum is 100%',
        why: 'Een kans kan nooit groter zijn dan 1 (= 100%). Als je uitkomst $P > 1$ is, heb je een rekenfout gemaakt.',
      },
    },
  },
};
