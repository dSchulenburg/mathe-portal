export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'Amir bygger en prognosemodel for antallet af brugere af en lære-app. De første uger ser fantastiske ud: hver uge 40 procent flere. Han fremskriver — og får for næste år flere brugere, end der findes mennesker med smartphone. "Din model er ikke forkert," siger hans professor, "den er bare allerede uden for sit gyldighedsområde. Hvad sker der, når halvdelen af alle mulige brugere allerede har appen?" Amir indser: Han har glemt, at verden er endelig.',
      challenge: 'Hvordan modellerer man vækst, der har en grænse? Og hvordan skelner man mellem to slags grænse: én, man bremser op mod helt fra starten, og én, man først accelererer mod og derefter bremser op mod?',
      outro: 'Amir arbejder nu med to modeller i stedet for én. Begrænset vækst, når tilvæksten kun afhænger af den resterende frie plads — afkøling, mætning, opladning. Logistisk vækst, når tilvæksten desuden kræver den eksisterende bestand — smitte, anbefalinger, populationer. Og han ved nu, hvad vendepunktet betyder: ikke vækstens afslutning, men dens hurtigste øjeblik.',
    },
    objectives: {
      grenzen: 'Genkende, hvornår en eksponentiel model når sin grænse — og hvorfor den alligevel var rigtig indtil da',
      beschraenkt: 'Opstille og udregne begrænset vækst $N(t) = K - (K - N_0)e^{-kt}$',
      logistisch: 'Bestemme den logistiske model $N(t) = \\frac{K}{1 + a e^{-rt}}$ ud fra kapacitet og startværdi',
      wendepunkt: 'Beregne vendepunktet og tolke det som tidspunktet for den største tilvækst',
    },
    explanation: {
      intro: 'Eksponentiel vækst kender ingen grænse. I virkeligheden er der dog næsten altid én: dammen bliver på et tidspunkt fuld, alle mulige kunder har produktet, koppen har nået stuetemperatur. Denne øvre grænse kaldes kapaciteten $K$. To modeller beskriver, hvordan den nås — og forskellen mellem dem er ikke en finesse, men spørgsmålet om, hvorvidt kurven har et vendepunkt.',
      beschraenkt: 'Ved begrænset vækst afhænger tilvæksten kun af, hvor meget der stadig mangler. I starten mangler der mest, så tilvæksten er størst i starten og bliver hele tiden mindre. Kurven nærmer sig grænsen nedefra uden nogensinde at nå den:',
      amir_tip: 'Jeg skelner mellem de to modeller med ét eneste spørgsmål: Kræver tilvæksten det, der allerede er der? Ved kaffe, der køler af, nej — varmen forsvinder, uanset hvor meget der er tilbage, kun forskellen tæller. Ved en viral video, ja — uden folk, der deler den, sker der ingenting. Det første er begrænset, det andet logistisk.',
      logistisch: 'Ved logistisk vækst kommer bestanden til som en anden faktor. I starten er der ganske vist meget plads, men næsten ingen individer — væksten er langsom. Til sidst er der mange individer, men ikke mere plads — igen langsom. Imellem ligger maksimum. Det giver den typiske S-form:',
      dgl: 'Tydeligst ser man forskellen i differentialligningen. Den læses som en sætning: Tilvæksten er proportional med bestanden **gange** den stadig frie andel. Mangler en af de to faktorer, står væksten stille:',
      wendepunkt: 'Af denne ligning følger modellens vigtigste nøgletal. Produktet af bestand og fri rest bliver størst præcis når begge er lige store — altså ved den halve kapacitet. Der ligger vendepunktet, og der er tilvækstraten maksimal:',
    },
    concepts: {
      kapazitaet: {
        title: 'Kapacitet $K$',
        desc: 'Den øvre grænse, som bestanden nærmer sig uden at nå. Den er grænseværdien for $t \\to \\infty$ og indgår som parameter i begge modeller. Uden en meningsfuld kapacitet kan ingen af de to modeller bruges.',
      },
      beschraenkt: {
        title: 'Begrænset vækst',
        desc: 'Tilvæksten afhænger kun af den resterende frie plads $K - N$. Derfor er den størst helt i starten og aftager derefter støt. Kurven har intet vendepunkt — den er konkav helt fra begyndelsen. Typisk for afkøling, opladning og mætning.',
      },
      logistisch: {
        title: 'Logistisk vækst',
        desc: 'Tilvæksten afhænger af bestanden OG af den frie rest. Heraf opstår S-kurven: først langsomt, så hurtigt, så langsomt igen. Parameteren $a = \\frac{K - N_0}{N_0}$ angiver, hvor mange frie pladser der i starten kommer på hvert eksisterende individ.',
      },
      wendepunkt: {
        title: 'Vendepunkt ved $K/2$',
        desc: 'Altid ved den halve kapacitet, uafhængigt af $r$ og $N_0$. Der er tilvækstraten maksimal, nemlig $\\frac{rK}{4}$. Derefter vokser bestanden fortsat, men langsommere — den hyppigste forveksling i fortolkningsopgaver.',
      },
    },
    examples: {
      seerosen: {
        title: 'Opstille en logistisk model ud fra kapacitet og startværdi',
        context: 'I en dam med plads til 500 åkander vokser der i starten 50 planter.',
        step1: 'Først parameteren $a$. Den fås direkte ud fra kapacitet og startværdi:',
        step2: 'Dermed er modellen på plads. Vækstraten $r = 0{,}4$ pr. uge stammer fra måleserien:',
        step3: 'Kontrol: Indsæt $t = 0$. Kommer startværdien ikke ud her, er $a$ forkert:',
        step4: 'Vendetidspunktet følger af $a\\,e^{-rt} = 1$ — en logaritmeligning:',
        amir_comment: 'Kontrollen i trin 3 laver jeg altid. Den tager ti sekunder og fanger den hyppigste fejl: $a = \\frac{K}{N_0}$ i stedet for $a = \\frac{K - N_0}{N_0}$. Hos mig ville det have været 10 i stedet for 9 — ser uskyldigt ud, men forskyder hele kurven.',
      },
      abkuehlung: {
        title: 'Begrænset vækst ved afkøling',
        context: 'Kai lader en 80 °C varm kop kaffe stå i et 20 °C varmt rum.',
        step1: 'Grænsen er her stuetemperaturen, forskellen til den er i starten 60 °C:',
        step2: 'Kontrol ved $t = 0$: Starttemperaturen skal komme ud:',
        step3: 'Efter ti minutter er der kun omkring en tredjedel af forskellen tilbage:',
        step4: 'På langt sigt er det stuetemperaturen, der står tilbage — matematisk nås den aldrig:',
        kai_comment: 'Med kaffe er det hverdagsviden: det første minut giver mest, derefter går det trægt. Præcis det er begrænset vækst. Og det er grunden til, at det hjælper at puste i starten, mens det efter ti minutter ikke nytter noget.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Epidemier',
        desc: 'Nye smittetilfælde kræver smittede (som smitter) og modtagelige (som kan blive smittet). Vendepunktet er dagen med flest nye smittetilfælde — det samlede antal stiger fortsat derefter, bare langsommere.',
      },
      produkt: {
        title: 'Udbredelse af produkter og apps',
        desc: 'Nye brugere kommer oftest via eksisterende brugere. I starten mangler dem, der anbefaler, til sidst dem, der endnu ikke har produktet. Marketingafdelinger kalder også S-kurven for adoptionskurven.',
      },
      abkuehlung: {
        title: 'Afkøling og opladning',
        desc: 'Newtons afkølingslov og ladekurven for et batteri er begrænset vækst. Her tæller kun afstanden til sluttilstanden — derfor lader et batteri de sidste procent så pinefuldt langsomt.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'Fra vendepunktet af aftager bestanden',
        correct: 'Fra vendepunktet af aftager tilvækstraten, bestanden stiger fortsat',
        why: 'Vendepunktet er nulpunktet for den anden afledede, ikke den første. $N\'$ har der et maksimum, er altså netop særlig stor — og positiv. Den logistiske funktion er strengt voksende i hele sin definitionsmængde, den falder aldrig. Den, der her forveksler bestand og tilvækst, vender udsagnet præcis på hovedet.',
        amir_warning: 'Det er fortolkningsfejl nummer ét, og den koster point i enhver studentereksamen. Mit trick: Jeg formulerer altid svaret med ordet "pr.". Hvad ændrer sig pr. uge? Tilvæksten. Hvad er der i alt? Bestanden. Så snart ordet "pr." dukker op, taler jeg om $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'Logistisk vækst er eksponentiel vækst, der skæres af ved $K$',
        correct: 'Den logistiske kurve bremser gradvist op og når aldrig $K$',
        why: 'En afskåret eksponentiel model ville have et knæk — den ville ikke være differentiabel i skæringspunktet og ville nå grænsen præcis på endelig tid. Den logistiske funktion er derimod glat overalt og nærmer sig kun $K$ asymptotisk. Forskellen er ikke kosmetisk: den afskårne model forudsiger et konkret sluttidspunkt, den logistiske intet.',
        amir_warning: 'Det eneste rigtige ved tanken er startfasen: så længe $N$ er lille i forhold til $K$, er bremsefaktoren næsten $1$, og de to kurver ligger praktisk talt oven i hinanden. Den eksponentielle kurve er den logistiske kurves starttangent — derfor passede min første model jo også så godt på de første uger.',
      },
    },
  },
};
