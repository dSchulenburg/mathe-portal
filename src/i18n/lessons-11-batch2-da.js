export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Amirs musikanbefalingsalgoritme har et problem: Populariteten af nye sange stiger eksplosivt i begyndelsen — men hvor hurtigt praecist? Og hvornaar flader hypen ud? "Jeg har brug for en funktion, der beskriver ekstremt hurtig vaekst og alligevel forbliver haandterbar", siger Amir til Yara. Svaret: eksponentialfunktionen med Eulers tal $e$ — og dens modstykke, den naturlige logaritme.',
      challenge: 'Amir skal modellere vaekstkurven for sangstreams og forudsige, hvornaar et track naar sin top — til det har han brug for eksponentialligninger og logaritmer.',
      outro: 'Med $e$-funktionen og $\\ln$ kan Amir nu beregne, hvornaar en sang naar sit hoejdepunkt, og hvor hurtigt interessen aftager derefter. "Det fede er: Den naturlige logaritme goer enhver eksponentialligning loesbar", forklarer han Finn. DataPulse forudsiger nu sangtrends med forbloeffende praecision.',
    },
    objectives: {
      e_function: 'Forstaa $e$-funktionen som naturlig vaekstfunktion og anvende den',
      natural_log: 'Beherske den naturlige logaritme som omvendt funktion af $e^x$',
      log_rules: 'Anvende logaritmeregler sikkert (produkt-, kvotient- og potensregel)',
      solve_exp_equations: 'Loese eksponentialligninger ved logaritmering',
    },
    explanation: {
      intro: 'Eulers tal $e \\approx 2{,}718$ er den vigtigste konstant for vaekstprocesser. Hvorfor netop $e$? Fordi funktionen $f(x) = e^x$ har en unik egenskab: Dens afledede er sig selv — $f\'(x) = e^x$. Det betyder: Vaekstraten er altid proportional med den aktuelle vaerdi. Perfekt til naturlig vaekst!',
      natural_log: 'Den naturlige logaritme $\\ln(x)$ er den omvendte funktion af $e^x$. Naar du vil vide, hvilken eksponent du behoever for at naa en bestemt vaerdi — saa er $\\ln$ dit vaerktoej. De to funktioner ophaever hinanden:',
      amir_tip: 'I min ML-kode dukker $\\ln$ op overalt — i tabsfunktionen, ved normalisering, i softmax-formlen. Grunden: $\\ln$ omsaetter multiplikation til addition og goer enorme tal haandterbare.',
      log_rules: 'De tre logaritmeregler er ekstremt nyttige — de goer komplekse udtryk til simplere. Grundideen: Logaritmer goer multiplikation til addition, division til subtraktion og potenser til multiplikation:',
      solving: 'For at loese en eksponentialligning for $x$ anvender du $\\ln$ paa begge sider. Logaritmen "henter eksponenten ned" — det er noegleskridtet:',
    },
    concepts: {
      e_function: {
        title: '$e$-funktion',
        desc: 'Den generelle form $f(x) = a \\cdot e^{kx}$: $a$ er startvaerdien, $k$ bestemmer vaeksthastigheden. Ved $k > 0$ vokser funktionen, ved $k < 0$ aftager den. $e$-funktionen er sin egen afledede.',
      },
      natural_log: {
        title: 'Naturlig logaritme',
        desc: 'Den omvendte funktion af $e^x$: $\\ln(x)$ besvarer spoergsmaalet "Hvilken potens af $e$ giver $x$?". Defineret kun for $x > 0$. Vigtigt: $\\ln(1) = 0$ og $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Logaritmeregler',
        desc: 'Tre regler der forenkler alt: Produktregel ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), Kvotientregel ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) og Potensregel ($\\ln(a^r) = r \\cdot \\ln(a)$).',
      },
    },
    examples: {
      solve_exp: {
        title: 'Loese eksponentialligning',
        context: 'Amir vil beregne, efter hvor mange dage en sang har 5 gange saa mange streams som i begyndelsen.',
        step1: 'Opstil ligningen — hvornaar naar streams vaerdien 15?',
        step2: 'Divider med 3 for at isolere $e^{2x}$:',
        step3: 'Anvend $\\ln$ paa begge sider — eksponenten "kommer ned":',
        step4: 'Loes for $x$ — divider med koefficienten 2:',
        amir_comment: 'Det er moenstret, jeg har brug for hele tiden: Isolere, logaritmere, loese. Virker ved enhver eksponentialligning!',
      },
      half_life: {
        title: 'Beregne halveringstid',
        context: 'Efter toppen mister en viral sang dagligt lyttere. Amir modellerer tilbagegangen med $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Modellen: 1000 aktive lyttere ved tidspunkt $t = 0$, eksponentiel tilbagegang:',
        step2: 'Halveringstid betyder: Hvornaar er der 500 lyttere tilbage?',
        step3: 'Isoler og logaritmer — $\\ln$ paa begge sider:',
        step4: 'Loes for $t$ — efter ca. 6{,}93 dage har lytterantallet halveret sig:',
        amir_comment: 'Halveringstiden er konstant! Uanset om 1000, 500 eller 250 lyttere — det tager altid ca. 6{,}93 dage til naeste halvering.',
      },
    },
    realworld: {
      user_retention: { title: 'Brugerretention i apps', desc: 'Hvor mange brugere er stadig aktive efter en uge? For de fleste apps falder retentionen eksponentielt: $R(t) = R_0 \\cdot e^{-\\lambda t}$.' },
      compound_interest: { title: 'Kontinuert rente', desc: 'Banker regner med aarlig rente, men i teorien findes ogsaa kontinuert rente: $K(t) = K_0 \\cdot e^{rt}$.' },
      decibel: { title: 'Decibelskalaen', desc: 'Lydstyrke maales logaritmisk: $L = 10 \\cdot \\log_{10}(I/I_0)$. Fordobles lydintensiteten, stiger niveauet kun ca. $3\\,\\text{dB}$.' },
    },
    mistakes: {
      ln_sum: { wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$', correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — kun produkter kan spaltes', why: 'Produktreglen gaelder KUN for multiplikation, ikke for addition! Der findes ingen simpel formel for $\\ln(a + b)$.', amir_warning: 'Denne bug kostede mig to timers debugging.' },
      ln_cancel: { wrong: '$\\ln(e^x) = e \\cdot x$', correct: '$\\ln(e^x) = x$ — logaritmen ophaever eksponentialfunktionen', why: '$\\ln$ og $e^x$ er omvendte funktioner — de ophaever hinanden. Resultatet er simpelthen eksponenten $x$.' },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse har lanceret en ny funktion, og Amir vil vide: Hvor sandsynligt er det, at af 100 testbrugere mindst 15 klikker paa den nye knap? Hver bruger klikker eller klikker ikke — et klassisk ja/nej-eksperiment, der gentages $n$ gange. "Det er ikke tilfaeldigt laengere, det er binomialfordeling", siger Prof. Nguyen.',
      challenge: 'Amir har brug for sandsynligheden for et bestemt antal klik ved $n$ uafhaengige forsoeg — binomialfordelingen giver det eksakte svar.',
      outro: 'Amir har nu et statistisk framework til A/B-tests. Han kan beregne, om et resultat er signifikant eller blot tilfaeldigt. DataPulse traeffer beslutninger nu databaseret i stedet for paa mavefornemmelse.',
    },
    objectives: {
      bernoulli: 'Genkende Bernoulli-eksperimenter og bestemme succesandsynligheden $p$',
      binomial_formula: 'Anvende binomialformlen til at beregne $P(X = k)$',
      expected_value: 'Beregne og fortolke forventningsvaerdien $E(X) = n \\cdot p$',
      standard_deviation: 'Bestemme standardafvigelsen $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ og bruge den som spredningsmaal',
    },
    explanation: {
      intro: 'Forestil dig, at du gentager et eksperiment $n$ gange, og hver gang er der kun to udfald: Succes (sandsynlighed $p$) eller fiasko (sandsynlighed $1-p$). Binomialfordelingen fortaeller dig, hvor sandsynligt praecis $k$ succeser ved $n$ forsoeg er:',
      bernoulli: 'Grundlaget er Bernoulli-eksperimentet — et enkelt forsoeg med praecis to udfald. Tre betingelser skal gaelde: (1) kun to resultater, (2) sandsynligheden $p$ forbliver ens ved hvert forsoeg, (3) forsoegene er uafhaengige af hinanden.',
      amir_tip: 'Binomialkoefficienten $\\binom{n}{k}$ taeller, paa hvor mange maader du kan fordele $k$ succeser paa $n$ forsoeg.',
      expected_value: 'Forventningsvaerdien $E(X) = n \\cdot p$ fortaeller dig, hvor mange succeser du "i gennemsnit" forventer.',
      standard_deviation: 'Standardafvigelsen $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ viser den typiske spredning omkring forventningsvaerdien.',
    },
    concepts: {
      bernoulli: { title: 'Bernoulli-eksperiment', desc: 'Et stokastisk eksperiment med praecis to udfald: Succes (sandsynlighed $p$) eller fiasko ($1-p$). Eksempler: Moentkas, klik/ikke-klik, maal/ikke-maal.' },
      binomial_formula: { title: 'Binomialformel', desc: 'Formlen $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ bestaar af tre dele: $\\binom{n}{k}$ taeller arrangementerne, $p^k$ er sandsynligheden for $k$ succeser, $(1-p)^{n-k}$ for $n-k$ fiaskoer.' },
      expected_value: { title: 'Forventningsvaerdi og standardafvigelse', desc: 'Forventningsvaerdien $E(X) = n \\cdot p$ er middelvaerdien ved mange gentagelser. Standardafvigelsen $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ maaler den typiske afvigelse derfra.' },
    },
    examples: {
      coin_flips: { title: 'Moentkas: praecis 7 af 10 gange krone', context: 'Amir tester sin tilfaeldighedsgenerator: Ved 10 fair moentkas — hvor sandsynligt er praecis 7 gange krone?', step1: 'Bestem parametre: $n = 10$, $p = 0{,}5$, soegt: $k = 7$.', step2: 'Beregn binomialkoefficienten:', step3: 'Indsaet i binomialformlen:', step4: 'Sandsynligheden er ca. 11{,}7%:', amir_comment: 'Kun 11{,}7% — det viser: Selv med en fair moent er 7 af 10 gange krone ikke saerligt overraskende, men heller ikke det normale tilfaelde.' },
      quality_control: { title: 'Kvalitetskontrol i produktionen', context: 'En fabrik har en fejlrate paa 2%. Amir beregner: Hvor sandsynligt er det, at i en stikproeve paa 20 styk ikke et eneste er defekt?', step1: 'Parametre: $n = 20$, fejlrate $p = 0{,}02$, soegt: $k = 0$.', step2: 'Indsaet: $\\binom{20}{0} = 1$, og $0{,}02^0 = 1$:', step3: 'Forenkl — der er $0{,}98^{20}$ tilbage:', step4: 'Resultat: Med ca. 66{,}8% sandsynlighed er ingen del defekt:', amir_comment: 'Kun to tredjedele chance for nul fejl ved 2% fejlrate!' },
    },
    realworld: {
      ab_testing: { title: 'A/B-testing hos DataPulse', desc: 'Amir tester to versioner af appen. Med binomialfordelingen beregner han, om forskellen er statistisk signifikant.' },
      medicine: { title: 'Medicinske studier', desc: 'Ved medikamenttest taeller man: Hvor mange patienter bliver raske? Er helbredelsesraten signifikant bedre end ved placebo?' },
      surveys: { title: 'Meningsundersoegelser og fejltolerance', desc: 'Naar 52% stemmer "Ja" — er det virkelig et flertal? Standardafvigelsen viser, hvor bredt konfidensintervallet er.' },
    },
    mistakes: {
      forget_binomial_coeff: { wrong: 'Glemme binomialkoefficienten', correct: 'Fuldstaendig formel med $\\binom{n}{k}$', why: 'Uden $\\binom{n}{k}$ taeller formlen kun EN bestemt raekkefoelge.', amir_warning: 'Binomialkoefficienten $\\binom{3}{2} = 3$ taeller praecis de mulige arrangementer.' },
      variance_vs_sigma: { wrong: 'Forveksle varians og standardafvigelse', correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — glem ikke roden!', why: 'Variansen er $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, standardafvigelsen er $\\sigma = \\sqrt{\\text{Var}(X)}$.' },
    },
  },

  '11-bedingte-wk': {
    story: {
      intro: 'DataPulse anbefaler sange baseret paa tidligere lytteadfaerd. Men Amir maerker: Ikke enhver korrelation er lige staerk. Den der lytter til rock, kan maase ogsaa lide metal — men gaelder det ogsaa omvendt? "Sandsynligheden for at nogen kan lide rock GIVET at de hoerer metal, er ikke det samme som omvendt", forklarer Prof. Nguyen. Velkommen til betinget sandsynlighed.',
      challenge: 'Amir skal forbedre anbefalingslogikken: Hvor sandsynligt er det, at en bruger kan lide genre $A$, GIVET at de hoerer genre $B$?',
      outro: 'Med Bayes\' saetning kan Amir nu vende anbefalingsretningen. DataPulse leverer nu vasentligt mere praecise anbefalinger.',
    },
    objectives: {
      conditional_prob: 'Beregne og fortolke betingede sandsynligheder',
      bayes_theorem: 'Anvende Bayes\' saetning til at vende retningen paa en betinget sandsynlighed',
      independence: 'Tjekke stokastisk uafhaengighed og skelne den fra afhaengighed',
      tree_diagrams: 'Bruge traediagrammer og firefeltstavle som hjaelpemidler',
    },
    explanation: {
      intro: 'Den betingede sandsynlighed $P(A \\mid B)$ besvarer spoergsmaalet: "Hvor sandsynlig er $A$, naar vi allerede ved, at $B$ er indtruffet?" Viden om $B$ aendrer sandsynligheden:',
      multiplication_rule: 'Multiplikationsreglen foelger direkte af definitionen:',
      amir_tip: 'I min anbefalingskode bruger jeg betingede sandsynligheder hele tiden: $P(\\text{like}_Y \\mid \\text{like}_X)$ — det er hjertet i enhver Collaborative Filter!',
      bayes: 'Bayes\' saetning er magien: Den vender retningen. Naar du kender $P(B \\mid A)$ men har brug for $P(A \\mid B)$, giver Bayes loesningen:',
      total_probability: 'Til naevneren i Bayes\' saetning har du ofte brug for den totale sandsynlighed:',
      independence: 'To begivenheder er stokastisk uafhaengige, naar viden om den ene ikke aendrer sandsynligheden for den anden. Formelt: $P(A \\mid B) = P(A)$:',
    },
    concepts: {
      conditional_prob: { title: 'Betinget sandsynlighed', desc: '$P(A \\mid B)$ er sandsynligheden for $A$ under betingelsen $B$. Vigtigt: $P(A \\mid B) \\neq P(B \\mid A)$ — retningen taeller!' },
      bayes: { title: 'Bayes\' saetning', desc: 'Formlen til at vende retningen: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ er prior, $P(A \\mid B)$ er posterior.' },
      independence: { title: 'Stokastisk uafhaengighed', desc: '$A$ og $B$ er uafhaengige, naar $P(A \\cap B) = P(A) \\cdot P(B)$. Forsigtig: Uafhaengighed er IKKE det samme som "ingen faellesmaengde" (disjunkt)!' },
    },
    examples: {
      medical_test: { title: 'Medicinsk test — Base Rate Fallacy', context: 'En sygdomstest er 99% korrekt. Sygdommen rammer 1% af befolkningen. Naar testen er positiv — hvor sandsynligt er man virkelig syg?', step1: 'Givet: $P(K) = 0{,}01$, $P(+ \\mid K) = 0{,}99$, $P(+ \\mid \\bar{K}) = 0{,}05$.', step2: 'Total sandsynlighed for positivt resultat:', step3: 'Anvend Bayes\' saetning:', step4: 'Resultat: Kun 16{,}7% sandsynlighed for at vaere virkelig syg — trods 99% testnoejagtighed!', amir_comment: 'Det er Base Rate Fallacy!' },
      spam_filter: { title: 'Spamfilter med Bayes', context: 'Amirs e-mail-filter skal laere: Naar en mail indeholder ordet "Gevinst" — er den spam?', step1: 'Data: 30% er spam, 80% af spam indeholder "Gevinst", 10% af normale mails ogsaa:', step2: 'Total sandsynlighed:', step3: 'Bayes:', step4: 'Resultat: 77{,}4% — en mail med "Gevinst" er med hoej sandsynlighed spam:', amir_comment: 'Praecis saadan fungerer en Naive-Bayes-Classifier!' },
    },
    realworld: {
      recommendation: { title: 'Musikanbefalinger hos DataPulse', desc: 'Collaborative Filtering baserer sig paa betingede sandsynligheder.' },
      weather: { title: 'Vejrudsigt', desc: 'Meteorologer opdaterer deres prognose stadig med Bayes.' },
      fraud_detection: { title: 'Svindelopsporing', desc: 'Amirs betalingssystem genkender mistenkelige transaktioner med Bayes.' },
    },
    mistakes: {
      confuse_direction: { wrong: '$P(A \\mid B) = P(B \\mid A)$', correct: 'At vende retningen gaar kun med Bayes!', why: '$P(A \\mid B)$ og $P(B \\mid A)$ er helt forskellige vaerdier.', amir_warning: 'Bayes er obligatorisk!' },
      ignore_base_rate: { wrong: 'Ignorere basisraten (Base Rate Fallacy)', correct: 'Altid tage hensyn til $P(A)$', why: 'Den lave basisrate dominerer resultatet.' },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn bygger backend til DataPulses nye funktion: Finde lignende sange. Men hvordan maaler man "lighed" mellem sange? "Taenk paa hver sang som et punkt i rummet", siger Amir. "Jo taettere to punkter ligger, desto mere ens er sangene." Velkommen til vektorernes verden.',
      challenge: 'Amir skal repraesentere sangegenskaber som vektorer og beregne deres lighed — med skalarproduktet og vinklen mellem vektorer.',
      outro: 'DataPulses anbefalingsmotor bruger nu Cosine Similarity: Jo mindre vinklen mellem to sangvektorer, desto mere ens er sangene.',
    },
    objectives: {
      vectors_2d_3d: 'Notere vektorer i $\\mathbb{R}^2$ og $\\mathbb{R}^3$ som soejler og fortolke geometrisk',
      vector_operations: 'Beherske vektoraddition og skalarmultiplikation',
      scalar_product: 'Beregne skalarproduktet og fortolke det geometrisk',
      angle_between_vectors: 'Bestemme vinklen mellem to vektorer med cosinusformlen',
    },
    explanation: {
      intro: 'En vektor beskriver en forskydning i rummet — eller mere generelt: en ordnet liste af tal:',
      addition: 'Vektorer adderes komponentvist — hver raekke for sig:',
      amir_tip: 'I min Python-kode er vektorer simpelthen numpy-arrays. Additionen $\\vec{a} + \\vec{b}$ udfoeres automatisk elementvist!',
      scalar_product: 'Skalarproduktet af to vektorer giver et enkelt tal — ingen vektor!',
      length: 'Laengden af en vektor beregnes via Pythagoras\' saetning — udvidet til tre dimensioner:',
      angle: 'Den vigtigste anvendelse af skalarproduktet: Vinklen mellem to vektorer. Denne vinkel er i ML-verdenen kendt som "Cosine Similarity":',
    },
    concepts: {
      vector: { title: 'Vektor', desc: 'En ordnet liste af tal skrevet som soejle. I dataanalyse repraesenterer en vektor et objekt med sine egenskaber.' },
      scalar_product: { title: 'Skalarprodukt', desc: 'To vektorer ind, et tal ud: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Naar skalarproduktet er nul, staar vektorerne vinkelret paa hinanden.' },
      vector_length: { title: 'Beloeb af en vektor', desc: 'Laengden $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — generaliseret Pythagoras.' },
    },
    examples: {
      force_addition: { title: 'Addere kraefter som vektorer', context: 'To kraefter virker paa et objekt — Amir beregner den resulterende totalkraft.', step1: 'De to kraefter givet som 2D-vektorer:', step2: 'Adder komponentvist:', step3: 'Beregn beloebet af totalkraften (Pythagoras):', step4: 'Beregn — totalkraften er ca. $6{,}32\\,\\text{N}$:', amir_comment: 'Det samme princip bruger vi hos DataPulse: I stedet for kraefter adderer vi feature-vektorer.' },
      angle_vectors: { title: 'Vinkel mellem sangvektorer', context: 'Amir sammenligner to sange med feature-vektorerne $(1, 2, 3)$ og $(4, -1, 2)$.', step1: 'Feature-vektorerne:', step2: 'Beregn skalarprodukt:', step3: 'Beregn beloeber:', step4: 'Anvend cosinusformlen — vinklen er ca. $62{,}2°$:', amir_comment: 'En vinkel paa $62{,}2°$ betyder: Sangene er delvist ens, men ikke ekstremt.' },
    },
    realworld: {
      embeddings: { title: 'Word Embeddings og Song Embeddings', desc: 'I ML-verdenen repraesenteres ord, sange og billeder som hoejdimensionale vektorer (Embeddings). Cosine Similarity maaler deres lighed.' },
      navigation: { title: 'Navigation og robotik', desc: 'Navigationssystemer og robotter bruger vektorer til position og bevaegelse.' },
      game_physics: { title: 'Spilfysik og simulationer', desc: 'I spil som Fortnite eller Minecraft beregnes fysikken med vektorer.' },
    },
    mistakes: {
      scalar_vs_cross: { wrong: 'Skalarproduktet giver en vektor', correct: 'Skalarproduktet giver et TAL ($\\in \\mathbb{R}$)', why: 'Ved skalarproduktet multiplicerer du komponentvist og ADDERER — resultatet er et enkelt tal.', amir_warning: 'I numpy: np.dot(a, b) giver et tal, np.cross(a, b) giver en vektor.' },
      length_sum: { wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$', correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — brug Pythagoras!', why: 'Laengden af en vektor foelger Pythagoras\' saetning.' },
    },
  },
};
