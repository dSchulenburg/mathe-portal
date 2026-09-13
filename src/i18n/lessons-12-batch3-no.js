export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'Amir bygger en prognosemodell for brukertallene til en læringsapp. De første ukene ser fantastiske ut: 40 prosent flere hver uke. Han regner fremover — og får ut flere brukere neste år enn det finnes mennesker med smarttelefon. «Modellen din er ikke feil», sier professoren hans, «den er bare allerede utenfor gyldighetsområdet sitt. Hva skjer når halvparten av alle mulige brukere allerede har appen?» Amir innser: Han har glemt at verden er endelig.',
      challenge: 'Hvordan modellerer man vekst som har en grense? Og hvordan skiller man mellom to slags grenser: én man bremser mot helt fra starten, og én man først akselererer mot og deretter bremser mot?',
      outro: 'Amir jobber nå med to modeller i stedet for én. Begrenset vekst når tilveksten bare avhenger av den frie resten — avkjøling, metning, opplading. Logistisk vekst når tilveksten i tillegg trenger bestanden som allerede finnes — smitte, anbefalinger, populasjoner. Og han vet nå hva vendepunktet betyr: ikke slutten på veksten, men øyeblikket der den går raskest.',
    },
    objectives: {
      grenzen: 'Kjenne igjen når en eksponentiell modell møter grensen sin — og hvorfor den likevel var riktig før det',
      beschraenkt: 'Sette opp og regne med begrenset vekst $N(t) = K - (K - N_0)e^{-kt}$',
      logistisch: 'Bestemme den logistiske modellen $N(t) = \\frac{K}{1 + a e^{-rt}}$ ut fra bæreevne og startverdi',
      wendepunkt: 'Regne ut vendepunktet og tolke det som tidspunktet for den sterkeste tilveksten',
    },
    explanation: {
      intro: 'Eksponentiell vekst kjenner ingen grense. I virkeligheten finnes det likevel nesten alltid en: dammen blir full en gang, alle mulige kunder har produktet, koppen har nådd romtemperatur. Denne øvre grensen kalles bæreevnen $K$. To modeller beskriver hvordan den nås — og forskjellen mellom dem er ingen detalj, men spørsmålet om kurven har et vendepunkt.',
      beschraenkt: 'Ved begrenset vekst avhenger tilveksten bare av hvor mye som fortsatt mangler. I starten mangler det mest, så tilveksten er størst i starten og blir stadig mindre. Kurven nærmer seg grensen nedenfra uten noen gang å nå den:',
      amir_tip: 'Jeg skiller de to modellene med ett eneste spørsmål: Trenger tilveksten det som allerede er der? Ved kaffe som avkjøles, nei — varmen forsvinner uansett hvor mye som er igjen, bare differansen teller. Ved en viral video, ja — uten folk som deler den, skjer det ingenting. Det første er begrenset, det andre logistisk.',
      logistisch: 'Ved logistisk vekst kommer bestanden inn som en andre faktor. I starten er det riktignok mye plass, men knapt noen individer — veksten er langsom. Til slutt er det mange individer, men ingen plass igjen — igjen langsom. Imellom ligger maksimum. Det gir den typiske S-formen:',
      dgl: 'Tydeligst ser man forskjellen i differensiallikningen. Den leses som en setning: Tilveksten er proporsjonal med bestanden **ganger** den andelen som fortsatt er fri. Mangler én av de to faktorene, står veksten stille:',
      wendepunkt: 'Av denne likningen følger modellens viktigste nøkkeltall. Produktet av bestand og fri rest blir størst nøyaktig når de to er like — altså ved halve bæreevnen. Der ligger vendepunktet, og der er vekstfarten maksimal:',
    },
    concepts: {
      kapazitaet: {
        title: 'Bæreevne $K$',
        desc: 'Den øvre grensen som bestanden nærmer seg uten å nå den. Den er grenseverdien for $t \\to \\infty$ og inngår som parameter i begge modellene. Uten en meningsfull bæreevne kan ingen av de to modellene brukes.',
      },
      beschraenkt: {
        title: 'Begrenset vekst',
        desc: 'Tilveksten avhenger bare av den frie resten $K - N$. Derfor er den størst helt i starten og avtar deretter jevnt. Kurven har ikke noe vendepunkt — den har hul side ned helt fra starten. Typisk for avkjøling, opplading og metning.',
      },
      logistisch: {
        title: 'Logistisk vekst',
        desc: 'Tilveksten avhenger av bestanden OG av den frie resten. Av dette oppstår S-kurven: først langsomt, så raskt, så langsomt igjen. Parameteren $a = \\frac{K - N_0}{N_0}$ forteller hvor mange frie plasser det i starten er per individ som finnes.',
      },
      wendepunkt: {
        title: 'Vendepunkt ved $K/2$',
        desc: 'Alltid ved halve bæreevnen, uavhengig av $r$ og $N_0$. Der er vekstfarten maksimal, nemlig $\\frac{rK}{4}$. Deretter vokser bestanden videre, men langsommere — den vanligste forvekslingen i tolkningsoppgaver.',
      },
    },
    examples: {
      seerosen: {
        title: 'Sette opp en logistisk modell ut fra bæreevne og startverdi',
        context: 'På en dam med plass til 500 vannliljer vokser det i starten 50 planter.',
        step1: 'Først parameteren $a$. Den følger direkte av bæreevne og startverdi:',
        step2: 'Dermed er modellen på plass. Vekstraten $r = 0{,}4$ per uke kommer fra måleserien:',
        step3: 'Kontroll: Sett inn $t = 0$. Kommer ikke startverdien ut her, er $a$ feil:',
        step4: 'Tidspunktet for vendepunktet følger av $a\\,e^{-rt} = 1$ — en logaritmelikning:',
        amir_comment: 'Kontrollen i steg 3 gjør jeg alltid. Den tar ti sekunder og fanger opp den vanligste feilen: $a = \\frac{K}{N_0}$ i stedet for $a = \\frac{K - N_0}{N_0}$. Hos meg ville det blitt 10 i stedet for 9 — ser uskyldig ut, men forskyver hele kurven.',
      },
      abkuehlung: {
        title: 'Begrenset vekst ved avkjøling',
        context: 'Kai lar en 80 °C varm kaffe stå i et rom som holder 20 °C.',
        step1: 'Grensen er her romtemperaturen, differansen til den er 60 °C i starten:',
        step2: 'Kontroll ved $t = 0$: Starttemperaturen må komme ut:',
        step3: 'Etter ti minutter er bare omtrent en tredjedel av differansen igjen:',
        step4: 'På lang sikt blir romtemperaturen stående — matematisk nås den aldri:',
        kai_comment: 'Med kaffe er det hverdagskunnskap: Det første minuttet gir mest, deretter går det seigt. Nettopp det er begrenset vekst. Og det er grunnen til at det hjelper å blåse i starten, mens det ikke nytter noe etter ti minutter.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Epidemier',
        desc: 'Nye smittetilfeller trenger smittede (som smitter) og mottakelige (som kan bli smittet). Vendepunktet er dagen med flest nye smittetilfeller — det samlede antallet stiger videre etter det, bare langsommere.',
      },
      produkt: {
        title: 'Spredning av produkter og apper',
        desc: 'Nye brukere kommer som regel via eksisterende brukere. I starten mangler de som anbefaler, til slutt de som ikke har produktet ennå. Markedsavdelinger kaller S-kurven også adopsjonskurve.',
      },
      abkuehlung: {
        title: 'Avkjøling og opplading',
        desc: 'Newtons avkjølingslov og ladekurven til et batteri er begrenset vekst. Her teller bare avstanden til sluttilstanden — derfor lader et batteri de siste prosentene så pinefullt langsomt.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'Fra vendepunktet av avtar bestanden',
        correct: 'Fra vendepunktet av avtar vekstfarten, bestanden fortsetter å stige',
        why: 'Vendepunktet er nullpunktet til den andrederiverte, ikke den førstederiverte. $N\'$ har et maksimum der, er altså akkurat da spesielt stor — og positiv. Den logistiske funksjonen er strengt voksende på hele definisjonsmengden sin, den synker aldri. Den som forveksler bestand og tilvekst her, snur utsagnet helt på hodet.',
        amir_warning: 'Dette er tolkningsfeil nummer én, og den koster poeng på hver eneste eksamen. Trikset mitt: Jeg formulerer alltid svaret med ordet «per». Hva endrer seg per uke? Tilveksten. Hva finnes totalt? Bestanden. Så snart ordet «per» dukker opp, snakker jeg om $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'Logistisk vekst er eksponentiell vekst som kuttes ved $K$',
        correct: 'Den logistiske kurven bremser gradvis og når aldri $K$ i det hele tatt',
        why: 'En avkuttet eksponentiell modell ville hatt en knekk — den ville ikke vært deriverbar i kuttpunktet og ville nådd grensen nøyaktig på endelig tid. Den logistiske funksjonen er derimot glatt overalt og nærmer seg $K$ bare asymptotisk. Forskjellen er ikke kosmetisk: Den avkuttede modellen forutsier et konkret sluttidspunkt, den logistiske ingen.',
        amir_warning: 'Det eneste riktige ved tanken er startfasen: Så lenge $N$ er liten sammenlignet med $K$, er bremsefaktoren nesten $1$, og de to kurvene ligger praktisk talt oppå hverandre. Den eksponentielle kurven er starttangenten til den logistiske — derfor passet den første modellen min jo også så godt på de første ukene.',
      },
    },
  },
};
