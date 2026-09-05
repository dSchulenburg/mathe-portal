export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'Mia setter sammen nivå 4 av Havnelys: Lumi må hoppe opp på en plattform som sakte og jevnt driver mot høyre. "Bevegelsen er lineær", forklarer Tim. "60 piksler i sekundet — ferdig." Mia taster det inn og merker med en gang: dette er en helt vanlig likning for en rett linje. Startposisjon pluss fart ganger tid. Nøyaktig det hun tok med seg fra 10. trinn — bare mer formelt nå: $f(x) = m \\cdot x + b$.',
      challenge: 'Mia må stille inn sprangkurven til Lumi slik at han lander nøyaktig på den drivende plattformen. Stigningen til plattformbevegelsen og skjæringspunktet med banen til Lumi — alt sammen lineært.',
      outro: 'En lineær funksjon har to knapper: $m$ bestemmer hvor bratt den går, $b$ forskyver den opp eller ned. Nå forstår Mia hvorfor hun trenger den om og om igjen: plattformer, energiforbruk, helsestolper — overalt der noe «per steg» øker eller minker med en fast mengde, er linjelikningen det rette verktøyet.',
    },
    objectives: {
      recognize: 'Kjenne igjen lineære funksjoner på uttrykket og på grafen',
      slope_intercept: 'Lese av stigningstallet $m$ og skjæringen med y-aksen $b$ i formen $f(x) = mx + b$',
      point_slope: 'Sette opp en linje ut fra et punkt og et stigningstall med ettpunktsformelen',
      two_points: 'Bestemme linjelikningen ut fra to punkter — regne ut stigningstallet, deretter $b$',
    },
    explanation: {
      intro: 'En lineær funksjon beskriver en jevn sammenheng: når $x$ endrer seg med én enhet, endrer $y$ seg alltid med det samme beløpet. I grafen gir det en rett linje. Den generelle formen er:',
      slope: 'Stigningstallet $m$ måler nettopp dette «beløpet per steg». Du finner det ut fra to vilkårlige punkter på linja — høydeforskjellen delt på breddeforskjellen:',
      mia_tip: 'Jeg tenker på plattformen til Lumi: den driver nøyaktig 60 piksler i sekundet. Det er min $m = 60$ piksler/sekund. Starter Lumi ved $b = 200$, er posisjonen etter $t$ sekunder ganske enkelt $f(t) = 60t + 200$. En lineær funksjon i vill tilstand!',
      intercept: 'Skjæringen med y-aksen $b$ er verdien der linja skjærer den loddrette aksen. Du leser den rett av grafen — eller du setter inn $x = 0$ i uttrykket:',
      point_slope: 'Kjenner du et punkt $P(x_0 \\mid y_0)$ og stigningstallet $m$, skriver du linja raskest på ettpunktsform. Derfra løser du for $y$ og får standardformen:',
    },
    concepts: {
      normal_form: {
        title: 'Standardform $f(x) = mx + b$',
        desc: 'Den vanlige skrivemåten. $m$ er stigningstallet, $b$ skjæringen med y-aksen. Begge parametrene kan du lese rett av uttrykket — og begge har en klar geometrisk betydning.',
      },
      slope: {
        title: 'Stigningstall $m$',
        desc: 'Endring i $y$ per enhet av $x$. Ut fra to punkter: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Positivt = stigende, negativt = synkende, $m = 0$ = vannrett linje.',
      },
      point_slope: {
        title: 'Ettpunktsform',
        desc: 'Når et punkt $(x_0 \\mid y_0)$ og stigningstallet $m$ er kjent: $y - y_0 = m(x - x_0)$. Praktisk, fordi du slipper å regne ut $b$ for seg — du løser bare for $y$.',
      },
      parallel_perpendicular: {
        title: 'Parallelle og vinkelrette',
        desc: 'To linjer er parallelle når de har samme stigningstall ($m_g = m_h$). De står vinkelrett på hverandre når produktet av stigningstallene blir $-1$ ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Linjelikning ut fra to punkter',
        context: 'Mia har to observasjonspunkter fra plattformbanen til Lumi: $P_1(2 \\mid 1)$ og $P_2(5 \\mid 7)$. Hvilken linjelikning beskriver bevegelsen?',
        step1: 'Skriv opp de to gitte punktene:',
        step2: 'Regn ut stigningstallet — differansen mellom y-verdiene delt på differansen mellom x-verdiene:',
        step3: 'Sett opp ettpunktsformen med $P_1(2 \\mid 1)$ og $m = 2$, og løs deretter for $y$:',
        step4: 'Ferdig linjelikning på standardform:',
        mia_comment: 'Fin arbeidsgang: to punkter → stigningstall → sette inn → gange ut. Får jeg seinere et tredje punkt, kan jeg bruke det til å sjekke om likningen min stemmer.',
      },
      intersection: {
        title: 'Skjæringspunkt mellom to linjer',
        context: 'Plattformen går langs $g\\colon y = 2x - 3$, sprangbanen til Lumi langs $h\\colon y = -x + 6$. Hvor møtes de?',
        step1: 'Noter begge linjelikningene — samme variabel $x$, samme variabel $y$:',
        step2: 'I skjæringspunktet er begge $y$-verdiene like. Altså: sett høyresidene lik hverandre:',
        step3: 'Løs for $x$ — begge $x$-leddene på én side, konstantene på den andre:',
        step4: 'Sett $x$-verdien inn i en av de to likningene for å få $y$-verdien. Skjæringspunkt $S$:',
        mia_comment: 'I spillet er nettopp dette skjæringspunktet treffbildet. Kjenner jeg tidspunktet $x = 3$, vet jeg i hvilket bilde jeg skal utløse kollisjonen.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Mobilabonnement med fastpris',
        desc: 'Klassisk eksempel: 9,99 € i fast månedspris pluss 10 cent per minutt. Kostnaden som funksjon av samtaletiden er en perfekt rett linje — $b$ er fastprisen, $m$ minuttprisen.',
      },
      taxi: {
        title: 'Taxikostnader',
        desc: '4 € i starttakst ved påstigning, deretter 2,50 € per kilometer. De samlede kostnadene vokser lineært med kjørt strekning. Kan leses av på hver eneste kvittering.',
      },
      constant_speed: {
        title: 'Bevegelse med konstant fart',
        desc: 'En skater setter av gårde med jevn fart $v$ og starter ved $s_0$. Tilbakelagt strekning etter $t$ sekunder: $s(t) = v \\cdot t + s_0$. Ren linjelikning — bare variablene heter noe annet.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Stigningstallet opp ned: $\\Delta x / \\Delta y$ i stedet for $\\Delta y / \\Delta x$',
        correct: 'Først høyden (y), så bredden (x): $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'Stigningstallet beskriver «hvor mye høyde per steg» — altså $y$-endringen i telleren og $x$-endringen i nevneren. Snur du brøken, får du den omvendte: av $m = 2$ blir det feilaktig $0{,}5$.',
        mia_warning: 'Trikset mitt: jeg tenker på ei trapp. Høyden på trinnet delt på bredden på trinnet. Høyden står alltid øverst i brøken — akkurat som i trappa.',
      },
      intercept_zero: {
        wrong: 'Å blande sammen skjæringen med y-aksen og nullpunktet',
        correct: 'Nullpunkt: sett $f(x) = 0$ og løs for $x$',
        why: 'Skjæringen med y-aksen $b$ er $y$-verdien ved $x = 0$ — altså en $y$-verdi. Nullpunktet er den $x$-verdien der $f(x) = 0$. Ved $f(x) = 2x + 5$ er $b = 5$, men nullpunktet ligger ved $x = -2{,}5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'Mia designer en roterende boss til Havnelys. Bossen er et virvlende møllehjul med tre armer — og Lumi må hoppe gjennom åpningene. "Hitboksen må være sirkelformet", sier Tim. "Ellers ser det skjevt ut når Lumi streifer en arm som ikke er i nærheten i det hele tatt." Mia trenger omkretsen, arealet og vinkelen til hver arm — ren sirkelgeometri.',
      challenge: 'Mia må programmere runde hitbokser. I tillegg buelengden som hver arm stryker over per sekund — ellers stemmer ikke rotasjonsfarten.',
      outro: 'Med $U = 2\\pi r$ og $A = \\pi r^2$ har Mia standardverktøyene. Og med radianer regner hun dreievinkler direkte om til tilbakelagte strekninger — mye raskere enn omveien om $360°$. «Radianer er dreiningenes programmeringsspråk», noterer hun seg.',
    },
    objectives: {
      umfang_flaeche: 'Regne ut omkrets og areal av en sirkel ut fra radius eller diameter',
      bogenmass: 'Regne om vinkler sikkert mellom grader og radianer',
      sektor: 'Regne ut areal og buelengde av en sirkelsektor med gitt sentralvinkel',
      bogenlaenge: 'Bestemme buelengder for hele sirkelen og for sektoren i begge vinkelmål',
    },
    explanation: {
      intro: 'Sirkelen er mengden av alle punkter med samme avstand $r$ fra sentrum. Av dette ene målet $r$ følger omkrets og areal — begge med den berømte konstanten $\\pi \\approx 3{,}14159$:',
      bogenmass: 'I stedet for å måle vinkler i grader kan man også bruke den tilhørende buelengden på enhetssirkelen — det kalles radianer. En hel sirkel har omkretsen $2\\pi r$, så $360°$ svarer nøyaktig til $2\\pi$. For enhver vinkel $\\alpha$ i radianer gjelder:',
      mia_tip: 'Radianer virket rare på meg i starten. Men i kode er de mye mer praktiske: når jeg skriver Math.cos(angle) i JavaScript, forventer funksjonen radianer — ikke grader. Glemmer man det, dreier man plutselig spritene feil vei.',
      umrechnung: 'Omregningen går via forholdsregelen «$360° = 2\\pi\\,\\text{rad}$». Det gir en fast faktor som du gjør om grader og radianer med:',
      sektor: 'En sektor er et «kakestykke» av sirkelen. Andelen den utgjør av areal og omkrets svarer nøyaktig til andelen sentralvinkelen utgjør av hele vinkelen. Med vinkelen $\\alpha$ (i grader eller radianer) gjelder:',
    },
    concepts: {
      umfang: {
        title: 'Omkrets $U$',
        desc: 'Lengden av sirkellinja. Avhenger lineært av radien — dobbel radius betyr dobbel omkrets. Med diameteren $d = 2r$ skriver man ofte også kort $U = \\pi d$.',
      },
      flaeche: {
        title: 'Areal $A$',
        desc: 'Det innesluttede arealet. Avhenger kvadratisk av radien — dobbel radius betyr firedobbelt areal. Viktig for alle oppgaver om «hvor mye materiale» og «hvor mye innhold».',
      },
      bogenmass: {
        title: 'Radianer',
        desc: 'Vinkelmål som måler vinkelen som buelengde på enhetssirkelen. Hel sirkel = $2\\pi$, halv sirkel = $\\pi$, rett vinkel = $\\frac{\\pi}{2}$. Standard i analyse og programmering.',
      },
      sektor: {
        title: 'Sirkelsektor',
        desc: 'Et kakestykke: to radier pluss buen mellom dem. Areal og buelengde er forholdsmessige størrelser — sentralvinkelen som brøkdel av $360°$ eller $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Omkrets og areal ut fra radien',
        context: 'Den roterende bossen til Mia har en radius på $5\\,\\text{cm}$ på skjermen. Hvor store er omkrets og areal?',
        step1: 'Radien er gitt:',
        step2: 'Sett inn i omkretsen: $U = 2\\pi r$ med $r = 5$. Først eksakt med $\\pi$, deretter avrundet:',
        step3: 'Sett inn i arealet: $A = \\pi r^2$. Merk: kvadrer $r$ først, gang så med $\\pi$:',
        mia_comment: 'Ved $r = 5$ er omkrets ($\\approx 31$) og areal ($\\approx 79$) helt forskjellige tall. Dobler jeg radien, blir omkretsen dobbelt så stor — men arealet firedobles. Det er kvadratvirkningen.',
      },
      sektor: {
        title: 'Sektorareal og buelengde',
        context: 'En arm på bossen stryker over en sektor med radius $12\\,\\text{cm}$ og sentralvinkel $60°$. Hvilket areal og hvilken buelengde gir det?',
        step1: 'Radius og vinkel i grader er gitt:',
        step2: 'Bestem sektorandelen av hele arealet — $\\frac{60°}{360°} = \\frac{1}{6}$:',
        step3: 'Regn ut sektorarealet — eksakt med $\\pi$, deretter avrundet:',
        step4: 'Buelengde: samme andel $\\frac{1}{6}$ av omkretsen $2\\pi r$:',
        mia_comment: 'Trikset er alltid det samme: andel = $\\frac{\\alpha°}{360°}$. Den ganger jeg med hele sirkelens størrelse (areal eller omkrets). Funker for $30°$ like godt som for $137{,}5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'En pizza i 8 stykker',
        desc: 'En pizza med radius $r$ skjæres i 8 like store stykker. Hvert stykke er en sektor med $\\frac{360°}{8} = 45°$ og arealet $\\frac{\\pi r^2}{8}$. Konkret anvendelse på ethvert kjøkken.',
      },
      uhr: {
        title: 'Klokkevisere som sektorer',
        desc: 'På en time stryker timeviseren over $30°$ ($\\frac{360°}{12}$), på et minutt stryker minuttviseren over $6°$ ($\\frac{360°}{60}$). Ren sektormatematikk — nyttig også for vinkeloppgaver med klokker.',
      },
      riesenrad: {
        title: 'Buelengde på pariserhjulet',
        desc: 'En gondol på pariserhjulet i Hamburg med radius $r$ tilbakelegger i tida $t$ av en hel omdreining $T$ buelengden $b = 2\\pi r \\cdot \\frac{t}{T}$. Dermed kan man også regne ut farten til gondolen.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'Å sette inn grader i formler som forventer radianer',
        correct: 'Regn om grader til radianer før du bruker $b = \\alpha \\cdot r$',
        why: 'Formelen $b = \\alpha \\cdot r$ virker bare når $\\alpha$ er oppgitt i radianer. Ved $\\alpha = 60°$ er $b = 60 \\cdot r$ voldsomt feil — riktig ville vært $\\alpha = \\frac{\\pi}{3} \\approx 1{,}047$, altså $b \\approx 1{,}047 \\cdot r$.',
        mia_warning: 'Nettopp det irriterte meg da jeg dreide sprites: jeg satte inn 60 i stedet for 1,047 — bossen dreide 57 ganger så fort og forsvant umiddelbart ut av skjermen!',
      },
      area_vs_circumference: {
        wrong: 'Å regne ut arealet med omkretsformelen ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$ — kvadratisk i $r$',
        why: 'Omkrets og areal er ulike størrelser med ulike enheter ($\\text{cm}$ mot $\\text{cm}^2$). $2\\pi r$ er lineær, $\\pi r^2$ kvadratisk. Blander man dem, er alle etterfølgende utregninger ødelagt — og enheten røper det med en gang.',
      },
    },
  },
};
