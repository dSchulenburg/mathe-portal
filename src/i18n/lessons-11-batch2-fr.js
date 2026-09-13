export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'L\'algorithme de recommandation musicale d\'Amir a un problème : la popularité des nouvelles chansons explose au début — mais à quelle vitesse exactement ? Et quand le buzz retombe-t-il ? « J\'ai besoin d\'une fonction qui décrit une croissance extrêmement rapide tout en restant calculable », dit Amir à Yara. La réponse : la fonction exponentielle avec le nombre d\'Euler $e$ — et sa fonction réciproque, le logarithme népérien.',
      challenge: 'Amir doit modéliser la courbe de croissance des streams et prédire quand un titre atteint son pic — pour cela, il a besoin d\'équations exponentielles et de logarithmes.',
      outro: 'Avec la fonction $e$ et $\\ln$, Amir peut maintenant calculer quand une chanson atteint son sommet et à quelle vitesse l\'intérêt diminue ensuite. « Ce qui est génial : le logarithme népérien rend toute équation exponentielle résoluble », explique-t-il à Finn. DataPulse prédit maintenant les tendances musicales avec une précision étonnante.',
    },
    objectives: {
      e_function: 'Comprendre et appliquer la fonction $e$ comme fonction de croissance naturelle',
      natural_log: 'Maîtriser le logarithme népérien comme fonction réciproque de $e^x$',
      log_rules: 'Appliquer avec assurance les lois des logarithmes (règle du produit, du quotient et de la puissance)',
      solve_exp_equations: 'Résoudre des équations exponentielles en prenant le logarithme',
    },
    explanation: {
      intro: 'Le nombre d\'Euler $e \\approx 2{,}718$ est la constante la plus importante pour les processus de croissance. Pourquoi justement $e$ ? Parce que la fonction $f(x) = e^x$ a une propriété unique : sa dérivée est elle-même — $f\'(x) = e^x$. Cela signifie : le taux de croissance est toujours proportionnel à la valeur actuelle. Parfait pour la croissance naturelle !',
      natural_log: 'Le logarithme népérien $\\ln(x)$ est la fonction réciproque de $e^x$. Si tu veux savoir quel exposant il te faut pour atteindre une valeur donnée — alors $\\ln$ est ton outil. Les deux fonctions s\'annulent mutuellement :',
      amir_tip: 'Dans mon code de ML, $\\ln$ apparaît partout — dans la fonction de perte, dans la normalisation, dans la formule softmax. La raison : $\\ln$ transforme la multiplication en addition et rend les nombres gigantesques manipulables. C\'est pourquoi on calcule souvent avec la « log-vraisemblance » au lieu de travailler directement avec les probabilités !',
      log_rules: 'Les trois lois des logarithmes sont extrêmement utiles — elles transforment des expressions complexes en expressions plus simples. L\'idée de base : les logarithmes transforment la multiplication en addition, la division en soustraction et les puissances en multiplication :',
      solving: 'Pour résoudre une équation exponentielle en $x$, tu appliques $\\ln$ des deux côtés. Le logarithme « fait descendre l\'exposant » — c\'est l\'étape clé :',
    },
    concepts: {
      e_function: {
        title: 'Fonction $e$',
        desc: 'La forme générale $f(x) = a \\cdot e^{kx}$ : $a$ est la valeur initiale, $k$ détermine la vitesse de croissance. Pour $k > 0$, la fonction croît ; pour $k < 0$, elle décroît (décroissance exponentielle). La fonction $e$ est sa propre dérivée — c\'est pourquoi elle modélise parfaitement la croissance naturelle.',
      },
      natural_log: {
        title: 'Logarithme népérien',
        desc: 'La fonction réciproque de $e^x$ : $\\ln(x)$ répond à la question « Quelle puissance de $e$ donne $x$ ? ». Définie seulement pour $x > 0$. Important : $\\ln(1) = 0$ et $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Lois des logarithmes',
        desc: 'Trois règles qui simplifient tout : la règle du produit ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), la règle du quotient ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) et la règle de la puissance ($\\ln(a^r) = r \\cdot \\ln(a)$). La règle de la puissance est la clé pour résoudre les équations exponentielles.',
      },
    },
    examples: {
      solve_exp: {
        title: 'Résoudre une équation exponentielle',
        context: 'Amir veut calculer au bout de combien de jours une chanson a 5 fois plus de streams qu\'au début. Le modèle de croissance est : $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Poser l\'équation — quand les streams atteignent-ils la valeur 15 ?',
        step2: 'Diviser par 3 pour isoler $e^{2x}$ :',
        step3: 'Appliquer $\\ln$ des deux côtés — l\'exposant « descend » :',
        step4: 'Résoudre en $x$ — diviser par le coefficient 2 :',
        amir_comment: 'C\'est le schéma dont j\'ai besoin tout le temps : isoler, prendre le logarithme, résoudre. Ça marche pour toute équation exponentielle !',
      },
      half_life: {
        title: 'Calculer la demi-vie',
        context: 'Après le pic, une chanson virale perd des auditeurs chaque jour. Amir modélise la baisse avec $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'Le modèle : 1000 auditeurs actifs à l\'instant $t = 0$, baisse exponentielle :',
        step2: 'La demi-vie signifie : quand ne reste-t-il plus que 500 auditeurs ?',
        step3: 'Isoler et prendre le logarithme — $\\ln$ des deux côtés :',
        step4: 'Résoudre en $t$ — après environ 6,93 jours, le nombre d\'auditeurs a été divisé par deux :',
        amir_comment: 'La demi-vie est constante ! Qu\'il y ait 1000, 500 ou 250 auditeurs — il faut toujours environ 6,93 jours jusqu\'à la prochaine division par deux. C\'est la magie de la décroissance exponentielle.',
      },
    },
    realworld: {
      user_retention: {
        title: 'Rétention des utilisateurs dans les applis',
        desc: 'Combien d\'utilisateurs restent actifs après une semaine ? Pour la plupart des applis, la rétention diminue de façon exponentielle : $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse utilise ce modèle pour prédire combien d\'utilisateurs sont encore là après 30 jours — et à quel moment envoyer des notifications push ciblées.',
      },
      compound_interest: {
        title: 'Intérêts composés en continu',
        desc: 'Les banques calculent avec des intérêts annuels, mais en théorie il existe aussi les intérêts composés en continu : $K(t) = K_0 \\cdot e^{rt}$. Plus tu calcules souvent les intérêts (chaque jour, chaque heure, chaque seconde...), plus tu te rapproches de $e^{rt}$. C\'est la limite !',
      },
      decibel: {
        title: 'Échelle des décibels',
        desc: 'Le volume sonore se mesure de façon logarithmique : $L = 10 \\cdot \\log_{10}(I/I_0)$. Si l\'intensité sonore double, le niveau n\'augmente que d\'environ $3\\,\\text{dB}$. C\'est pourquoi 10 guitares ne sonnent pas 10 fois plus fort qu\'une seule — notre oreille fonctionne de façon logarithmique !',
      },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — somme séparée',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — seuls les produits peuvent être séparés',
        why: 'La règle du produit s\'applique UNIQUEMENT à la multiplication, pas à l\'addition ! Il n\'existe pas de formule simple pour $\\ln(a + b)$. C\'est l\'une des erreurs les plus fréquentes.',
        amir_warning: 'Ce bug m\'a coûté un jour deux heures de débogage. Mon calcul de vraisemblance était complètement faux parce que j\'avais utilisé $\\ln(p_1 + p_2)$ au lieu de $\\ln(p_1 \\cdot p_2)$. Les logarithmes séparent les produits — pas les sommes !',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$ — logarithme mal simplifié',
        correct: '$\\ln(e^x) = x$ — le logarithme annule la fonction exponentielle',
        why: '$\\ln$ et $e^x$ sont des fonctions réciproques — elles s\'annulent mutuellement. Le résultat est simplement l\'exposant $x$, sans facteur $e$ devant.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse a lancé une nouvelle fonctionnalité, et Amir veut savoir : quelle est la probabilité que, sur 100 utilisateurs testeurs, au moins 15 cliquent sur le nouveau bouton ? Chaque utilisateur clique ou ne clique pas — une expérience oui/non classique, répétée $n$ fois. « Ce n\'est plus du hasard, c\'est la loi binomiale », dit le Prof. Nguyen pendant le séminaire.',
      challenge: 'Amir a besoin de la probabilité d\'obtenir un certain nombre de clics lors de $n$ essais indépendants — la loi binomiale donne la réponse exacte.',
      outro: 'Amir dispose maintenant d\'un cadre statistique pour les tests A/B. Il peut calculer si un résultat est significatif ou s\'il est seulement dû au hasard. « La loi binomiale est la base de presque tous les tests statistiques dans la pratique », explique-t-il à Yara. DataPulse prend maintenant ses décisions à partir des données plutôt qu\'au feeling.',
    },
    objectives: {
      bernoulli: 'Reconnaître les expériences de Bernoulli et déterminer la probabilité de succès $p$',
      binomial_formula: 'Appliquer la formule binomiale pour calculer $P(X = k)$',
      expected_value: 'Calculer et interpréter l\'espérance $E(X) = n \\cdot p$',
      standard_deviation: 'Déterminer l\'écart-type $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ et l\'utiliser comme mesure de dispersion',
    },
    explanation: {
      intro: 'Imagine que tu répètes une expérience $n$ fois, et qu\'à chaque fois il n\'y a que deux issues : succès (probabilité $p$) ou échec (probabilité $1-p$). La loi binomiale te dit quelle est la probabilité d\'obtenir exactement $k$ succès en $n$ essais :',
      bernoulli: 'La base, c\'est l\'expérience de Bernoulli — un seul essai avec exactement deux issues. Trois conditions doivent être remplies : (1) seulement deux résultats, (2) la probabilité $p$ reste la même à chaque essai, (3) les essais sont indépendants les uns des autres. Le coefficient binomial compte les arrangements possibles :',
      amir_tip: 'Le coefficient binomial $\\binom{n}{k}$ compte de combien de façons tu peux répartir $k$ succès sur $n$ essais. Dans mon code, c\'est la fonction scipy.special.comb(n, k). Pour de grands $n$, je préfère calculer la fonction de répartition — additionner les probabilités une par une serait beaucoup trop lent !',
      expected_value: 'L\'espérance $E(X) = n \\cdot p$ te dit combien de succès tu attends « en moyenne ». Avec 100 essais et $p = 0{,}15$, tu attends $E(X) = 15$ succès. Mais cela ne veut pas dire qu\'il y en aura exactement 15 à chaque fois ! L\'écart-type mesure à quel point les résultats varient :',
      standard_deviation: 'L\'écart-type $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ montre la dispersion typique autour de l\'espérance. Règles pratiques : environ 68 % des résultats se trouvent dans $E(X) \\pm \\sigma$, environ 95 % dans $E(X) \\pm 2\\sigma$. Plus $n$ est grand, plus la distribution devient étroite par rapport à l\'espérance.',
    },
    concepts: {
      bernoulli: {
        title: 'Expérience de Bernoulli',
        desc: 'Une expérience aléatoire avec exactement deux issues : succès (probabilité $p$) ou échec ($1-p$). Exemples : pile ou face, clic/pas de clic, but/pas de but. La loi binomiale naît de la répétition indépendante, $n$ fois, de cette expérience.',
      },
      binomial_formula: {
        title: 'Formule binomiale',
        desc: 'La formule $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ se compose de trois parties : $\\binom{n}{k}$ compte les arrangements, $p^k$ est la probabilité de $k$ succès, $(1-p)^{n-k}$ celle de $n-k$ échecs.',
      },
      expected_value: {
        title: 'Espérance et écart-type',
        desc: 'L\'espérance $E(X) = n \\cdot p$ est la moyenne sur un grand nombre de répétitions. L\'écart-type $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ mesure l\'écart typique par rapport à cette moyenne. Ensemble, ils décrivent la position et la dispersion de la distribution.',
      },
    },
    examples: {
      coin_flips: {
        title: 'Pile ou face : exactement 7 fois face sur 10',
        context: 'Amir teste son générateur aléatoire : avec 10 lancers d\'une pièce équilibrée — quelle est la probabilité d\'obtenir exactement 7 fois face ?',
        step1: 'Déterminer les paramètres : $n = 10$ lancers, $p = 0{,}5$ (pièce équilibrée), on cherche : $k = 7$ fois face.',
        step2: 'Calculer le coefficient binomial — de combien de façons peut-on répartir 7 faces sur 10 lancers ?',
        step3: 'Remplacer dans la formule binomiale : arrangements $\\times$ succès $\\times$ échecs :',
        step4: 'Calculer — la probabilité est d\'environ 11,7 %, donc plutôt peu probable :',
        amir_comment: 'Seulement 11,7 % — cela montre : même avec une pièce équilibrée, 7 fois face sur 10 n\'est pas particulièrement surprenant, mais ce n\'est pas non plus le cas normal. Mon générateur aléatoire a l\'air correct !',
      },
      quality_control: {
        title: 'Contrôle qualité en production',
        context: 'Une usine a un taux de défauts de 2 %. Amir calcule : quelle est la probabilité que, dans un échantillon de 20 pièces, aucune ne soit défectueuse ?',
        step1: 'Paramètres : $n = 20$ pièces, taux de défauts $p = 0{,}02$, on cherche : $k = 0$ pièce défectueuse.',
        step2: 'Remplacer : $\\binom{20}{0} = 1$ et $0{,}02^0 = 1$ — il ne reste que les échecs :',
        step3: 'Simplifier — il reste $0{,}98^{20}$ :',
        step4: 'Résultat : avec une probabilité d\'environ 66,8 %, aucune pièce n\'est défectueuse — ce n\'est pas si sûr que ça !',
        amir_comment: 'Seulement deux chances sur trois d\'avoir zéro défaut avec un taux de défauts de 2 % ! Cela montre : même de petites probabilités s\'accumulent quand il y a beaucoup d\'essais. Avec $n = 100$, on aurait $P(X = 0) \\approx 13{,}3\\%$ — là, on trouve presque sûrement un défaut.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'Tests A/B chez DataPulse',
        desc: 'Amir teste deux versions de l\'appli : la version A a un taux de clics de 12 %, la version B de 15 %. Avec la loi binomiale, il calcule si la différence est statistiquement significative — ou si elle aurait aussi pu apparaître par hasard. C\'est la base de tout test A/B.',
      },
      medicine: {
        title: 'Études médicales',
        desc: 'Dans les essais de médicaments, on compte : combien de patients guérissent ? Le taux de guérison est-il significativement meilleur qu\'avec le placebo ? La loi binomiale donne la réponse — et protège contre les conclusions hâtives quand les échantillons sont trop petits.',
      },
      surveys: {
        title: 'Sondages d\'opinion et marge d\'erreur',
        desc: 'Quand 52 % votent « Oui » dans un sondage — est-ce vraiment une majorité ? L\'écart-type $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ montre la largeur de l\'intervalle de confiance. Avec $n = 100$, on aurait $\\sigma \\approx 5\\%$ — le résultat pourrait donc aussi être 47 % ou 57 %.',
      },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Coefficient binomial oublié : $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Formule complète avec $\\binom{n}{k}$',
        why: 'Sans $\\binom{n}{k}$, la formule ne compte qu\'UN SEUL ordre précis — par exemple d\'abord $k$ succès, puis $n-k$ échecs. Mais les succès peuvent apparaître à différents endroits ! Le coefficient binomial compte tous les arrangements possibles.',
        amir_warning: 'Imagine que tu lances un dé 3 fois et que tu veux exactement 2 six. Il y a 3 possibilités : 6-6-X, 6-X-6, X-6-6. Le coefficient binomial $\\binom{3}{2} = 3$ compte exactement cela. Sans lui, tu n\'obtiens qu\'un tiers de la bonne probabilité !',
      },
      variance_vs_sigma: {
        wrong: 'Variance et écart-type confondus',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — ne pas oublier la racine !',
        why: 'La variance est $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, l\'écart-type est $\\sigma = \\sqrt{\\text{Var}(X)}$. Sans la racine, le résultat a la mauvaise unité et il est beaucoup trop grand. $\\sigma$ a la même unité que $X$ — la variance l\'a au carré.',
      },
    },
  },

  '11-bedingte-wahrscheinlichkeit': {
    story: {
      intro: 'DataPulse recommande des chansons en fonction des habitudes d\'écoute. Mais Amir remarque : toutes les corrélations n\'ont pas la même force. Qui écoute du rock aime peut-être aussi le metal — mais est-ce aussi vrai dans l\'autre sens ? « La probabilité que quelqu\'un aime le rock SACHANT qu\'il écoute du metal n\'est pas la même que l\'inverse », explique le Prof. Nguyen. Bienvenue dans le monde des probabilités conditionnelles.',
      challenge: 'Amir doit améliorer la logique de recommandation : quelle est la probabilité qu\'un utilisateur aime le genre $A$, SACHANT qu\'il écoute le genre $B$ ? Et comment inverser cette direction ?',
      outro: 'Grâce au théorème de Bayes, Amir peut maintenant inverser la direction de la recommandation : « Parmi ceux qui écoutent du metal, 60 % écoutent aussi du rock » devient « Parmi ceux qui écoutent du rock, 35 % écoutent aussi du metal ». « Bayes, c\'est comme du reverse engineering pour les probabilités », dit-il en souriant. DataPulse fournit maintenant des recommandations nettement plus précises.',
    },
    objectives: {
      conditional_prob: 'Calculer et interpréter des probabilités conditionnelles',
      bayes_theorem: 'Appliquer le théorème de Bayes pour inverser la direction d\'une probabilité conditionnelle',
      independence: 'Vérifier l\'indépendance stochastique et la distinguer de la dépendance',
      tree_diagrams: 'Utiliser les arbres de probabilités et les tableaux à double entrée comme outils',
    },
    explanation: {
      intro: 'La probabilité conditionnelle $P(A \\mid B)$ répond à la question : « Quelle est la probabilité de $A$, si l\'on sait déjà que $B$ s\'est produit ? » Savoir que $B$ s\'est produit modifie la probabilité — l\'univers se réduit aux cas où $B$ est vrai :',
      multiplication_rule: 'La règle de multiplication découle directement de la définition : si tu veux calculer la probabilité de « $A$ et $B$ en même temps », tu multiplies $P(B)$ par la probabilité conditionnelle $P(A \\mid B)$ :',
      amir_tip: 'Dans mon code de recommandation, j\'utilise tout le temps les probabilités conditionnelles : $P(\\text{like}_Y \\mid \\text{like}_X)$ — la probabilité qu\'un utilisateur aime la chanson $Y$, sachant qu\'il a liké la chanson $X$. C\'est le cœur de tout filtre collaboratif !',
      bayes: 'Le théorème de Bayes, c\'est la magie : il inverse la direction. Si tu connais $P(B \\mid A)$ mais que tu as besoin de $P(A \\mid B)$, Bayes te donne la solution. La formule a l\'air compliquée, mais l\'idée centrale est simple : tu pondères avec la probabilité de base (a priori) :',
      total_probability: 'Pour le dénominateur du théorème de Bayes, tu as souvent besoin de la probabilité totale. Elle décompose $P(B)$ selon tous les chemins possibles par lesquels $B$ peut se produire — en passant par $A$ ou par $\\bar{A}$ (non-$A$) :',
      independence: 'Deux événements sont stochastiquement indépendants si le fait de connaître l\'un ne change pas la probabilité de l\'autre. Formellement : $P(A \\mid B) = P(A)$ — le fait que $B$ se produise n\'a aucune influence sur $A$. De manière équivalente :',
    },
    concepts: {
      conditional_prob: {
        title: 'Probabilité conditionnelle',
        desc: '$P(A \\mid B)$ est la probabilité de $A$ sachant $B$. On « zoome » sur la partie de l\'univers où $B$ est vrai, puis on s\'intéresse à $A$. Important : $P(A \\mid B) \\neq P(B \\mid A)$ — la direction compte !',
      },
      bayes: {
        title: 'Théorème de Bayes',
        desc: 'La formule pour inverser la direction : $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ est la probabilité a priori (connaissance préalable), $P(A \\mid B)$ la probabilité a posteriori (estimation mise à jour après l\'observation de $B$). La statistique bayésienne est la base des filtres anti-spam et des systèmes de diagnostic.',
      },
      independence: {
        title: 'Indépendance stochastique',
        desc: '$A$ et $B$ sont indépendants si $P(A \\cap B) = P(A) \\cdot P(B)$. Cela signifie : le fait que $B$ se produise ne change rien à la probabilité de $A$. Attention : indépendant ne veut PAS dire « sans intersection » (incompatible) !',
      },
    },
    examples: {
      medical_test: {
        title: 'Test médical — le piège du taux de base',
        context: 'Un test de dépistage est fiable à 99 %. La maladie touche 1 % de la population. Si le test est positif — quelle est la probabilité d\'être vraiment malade ?',
        step1: 'Données : $P(K) = 0{,}01$ (maladie), $P(+ \\mid K) = 0{,}99$ (sensibilité), $P(+ \\mid \\bar{K}) = 0{,}05$ (taux de faux positifs).',
        step2: 'Calculer la probabilité totale d\'un résultat positif — par les deux chemins (malade + en bonne santé) :',
        step3: 'Appliquer le théorème de Bayes — on cherche $P(K \\mid +)$ :',
        step4: 'Résultat : seulement 16,7 % de probabilité d\'être vraiment malade — malgré une fiabilité du test de 99 % !',
        amir_comment: 'C\'est le piège du taux de base ! Le test est très précis, mais comme la maladie est très rare ($P(K) = 1\\%$), la plupart des tests positifs sont des faux positifs. Dans le monde du ML, on dit : la précision et le rappel, ce n\'est pas la même chose !',
      },
      spam_filter: {
        title: 'Filtre anti-spam avec Bayes',
        context: 'Le filtre e-mail d\'Amir doit apprendre : si un e-mail contient le mot « gain » — est-ce du spam ?',
        step1: 'Données : 30 % de tous les e-mails sont du spam, 80 % des spams contiennent « gain », mais aussi 10 % des e-mails normaux :',
        step2: 'Probabilité totale qu\'un e-mail contienne « gain » :',
        step3: 'Bayes : quelle est la probabilité d\'un spam quand « gain » apparaît ?',
        step4: 'Résultat : 77,4 % — un e-mail contenant « gain » est très probablement un spam :',
        amir_comment: 'C\'est exactement comme ça que fonctionne un classifieur bayésien naïf ! Plus tu ajoutes de mots, plus le filtre devient précis. DataPulse utilise le même principe : au lieu de mots, nous analysons des habitudes d\'écoute, et au lieu de spam/non-spam, nous classons des préférences de genre.',
      },
    },
    realworld: {
      recommendation: {
        title: 'Recommandations musicales chez DataPulse',
        desc: 'Le filtrage collaboratif repose sur des probabilités conditionnelles : $P(\\text{like}_Y \\mid \\text{like}_X)$ — « Si quelqu\'un aime la chanson X, avec quelle probabilité aime-t-il aussi la chanson Y ? » Spotify, Netflix et DataPulse calculent des millions de probabilités conditionnelles de ce type en temps réel.',
      },
      weather: {
        title: 'Prévisions météo',
        desc: 'Les météorologues mettent sans cesse à jour leurs prévisions avec Bayes : $P(\\text{Regen} \\mid \\text{Wolken, Druck, Wind})$ (pluie sachant nuages, pression, vent). Chaque nouvelle mesure affine la prévision. C\'est pourquoi la probabilité de pluie change au cours de la journée — c\'est Bayes en action !',
      },
      fraud_detection: {
        title: 'Détection de fraude',
        desc: 'Le système de paiement d\'Amir détecte les transactions suspectes avec Bayes : quand une alerte se déclenche — quelle est la probabilité d\'une vraie fraude ? Exactement comme pour le test médical : c\'est le taux de base qui décide ! Avec un taux de fraude de 0,1 %, la plupart des alertes sont de fausses alertes.',
      },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$ — direction confondue',
        correct: 'On ne peut inverser la direction qu\'avec Bayes !',
        why: '$P(A \\mid B)$ et $P(B \\mid A)$ sont des valeurs complètement différentes. Exemple : $P(\\text{nass} \\mid \\text{Regen}) = 0{,}99$ (mouillé sachant pluie), mais $P(\\text{Regen} \\mid \\text{nass}) \\ll 0{,}99$ — on peut aussi être mouillé à cause d\'un arroseur. Tu as besoin du théorème de Bayes pour inverser la direction.',
        amir_warning: 'Je vois cette erreur tout le temps dans les revues de code ! Quelqu\'un calcule $P(\\text{click} \\mid \\text{bought})$ et l\'utilise comme $P(\\text{bought} \\mid \\text{click})$. Ça peut complètement ruiner l\'algorithme de recommandation. Bayes est obligatoire !',
      },
      ignore_base_rate: {
        wrong: 'Taux de base ignoré (piège du taux de base)',
        correct: 'Toujours tenir compte de $P(A)$ — la probabilité a priori',
        why: 'Un test fiable à 99 % paraît impressionnant, mais si la maladie ne touche que 1 %, alors $P(K \\mid +) \\approx 16{,}7\\%$. Le faible taux de base $P(K) = 0{,}01$ domine le résultat. Sans la probabilité a priori, tu obtiens une estimation complètement faussée.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn construit le backend de la nouvelle fonctionnalité de DataPulse : trouver des chansons similaires. Mais comment mesurer la « similarité » entre des chansons quand chacune est décrite par des dizaines de caractéristiques — tempo, énergie, ambiance, instrumentation ? « Imagine chaque chanson comme un point dans l\'espace », dit Amir. « Plus deux points sont proches, plus les chansons se ressemblent. » Bienvenue dans le monde des vecteurs.',
      challenge: 'Amir doit représenter les caractéristiques des chansons sous forme de vecteurs et calculer leur similarité — avec le produit scalaire et l\'angle entre les vecteurs.',
      outro: 'Le moteur de recommandation de DataPulse utilise maintenant la similarité cosinus : plus l\'angle entre deux vecteurs de chansons est petit, plus les chansons se ressemblent. « Dans le monde du ML, les vecteurs sont partout — word embeddings, espaces de caractéristiques, réseaux de neurones. Tout est algèbre linéaire », dit Amir à Yara avec enthousiasme.',
    },
    objectives: {
      vectors_2d_3d: 'Écrire des vecteurs de $\\mathbb{R}^2$ et $\\mathbb{R}^3$ en colonnes et les interpréter géométriquement',
      vector_operations: 'Maîtriser l\'addition de vecteurs et la multiplication par un scalaire',
      scalar_product: 'Calculer le produit scalaire et l\'interpréter géométriquement',
      angle_between_vectors: 'Déterminer l\'angle entre deux vecteurs avec la formule du cosinus',
    },
    explanation: {
      intro: 'Un vecteur décrit un déplacement dans l\'espace — ou plus généralement : une liste ordonnée de nombres. Dans $\\mathbb{R}^3$, un vecteur a trois composantes que tu écris en colonne. En analyse de données, les vecteurs peuvent aussi avoir 50 ou 500 dimensions — le principe reste le même :',
      addition: 'Tu additionnes des vecteurs composante par composante — chaque ligne séparément. Géométriquement, tu places le deuxième vecteur au bout du premier (méthode « bout à bout »). Le résultat est le chemin direct du départ à l\'arrivée :',
      amir_tip: 'Dans mon code Python, les vecteurs sont simplement des tableaux numpy. L\'addition $\\vec{a} + \\vec{b}$ se fait automatiquement élément par élément — np.array([3,4]) + np.array([-1,2]) donne np.array([2,6]). Exactement comme en maths !',
      scalar_product: 'Le produit scalaire (aussi appelé produit intérieur) de deux vecteurs donne un seul nombre — pas un vecteur ! Tu multiplies les composantes deux à deux et tu additionnes le tout. Le résultat t\'indique à quel point les vecteurs « pointent dans la même direction » :',
      length: 'La longueur (la norme) d\'un vecteur se calcule avec le théorème de Pythagore — étendu à trois dimensions. En 2D, c\'est le $\\sqrt{x^2 + y^2}$ bien connu ; en 3D, on ajoute $z^2$ :',
      angle: 'L\'application la plus importante du produit scalaire : l\'angle entre deux vecteurs. La formule relie le produit scalaire algébrique à son interprétation géométrique. Dans le monde du ML, cet angle est la mesure standard de la similarité, sous le nom de « similarité cosinus » :',
    },
    concepts: {
      vector: {
        title: 'Vecteur',
        desc: 'Une liste ordonnée de nombres écrite en colonne. Dans $\\mathbb{R}^2$, un vecteur a 2 composantes, dans $\\mathbb{R}^3$ trois. Géométriquement, c\'est une flèche avec une direction et une longueur. En analyse de données, un vecteur représente un objet avec ses caractéristiques — par exemple une chanson avec son tempo, son énergie et son ambiance.',
      },
      scalar_product: {
        title: 'Produit scalaire',
        desc: 'Deux vecteurs en entrée, un nombre en sortie : $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Géométriquement : $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Si le produit scalaire est nul, les vecteurs sont perpendiculaires (orthogonaux).',
      },
      vector_length: {
        title: 'Norme d\'un vecteur',
        desc: 'La longueur $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — le théorème de Pythagore généralisé. Un vecteur de norme 1 s\'appelle un vecteur unitaire. Dans le monde du ML, on normalise souvent les vecteurs à la longueur 1 pour ne comparer que leur direction.',
      },
    },
    examples: {
      force_addition: {
        title: 'Additionner des forces sous forme de vecteurs',
        context: 'Deux forces agissent sur un objet — Amir calcule la force totale résultante.',
        step1: 'Les deux forces données sous forme de vecteurs 2D :',
        step2: 'Additionner composante par composante — chaque ligne séparément :',
        step3: 'Calculer la norme de la force totale (Pythagore) :',
        step4: 'Calculer — la force totale vaut environ $6{,}32\\,\\text{N}$ :',
        amir_comment: 'Chez DataPulse, on utilise le même principe : au lieu de forces, on additionne des vecteurs de caractéristiques. Si un utilisateur aime deux genres, son vecteur de goûts combiné est la somme — ainsi, on trouve des chansons qui correspondent aux deux genres !',
      },
      angle_vectors: {
        title: 'Angle entre des vecteurs de chansons',
        context: 'Amir compare deux chansons : la chanson A a le vecteur de caractéristiques $(1, 2, 3)$ et la chanson B $(4, -1, 2)$. À quel point se ressemblent-elles ?',
        step1: 'Les vecteurs de caractéristiques des deux chansons :',
        step2: 'Calculer le produit scalaire — multiplier les composantes deux à deux et additionner :',
        step3: 'Calculer les normes des deux vecteurs :',
        step4: 'Appliquer la formule du cosinus — l\'angle vaut environ $62{,}2°$ :',
        amir_comment: 'Un angle de $62{,}2°$ signifie : les chansons se ressemblent en partie, mais pas énormément. À $0°$, elles seraient identiques (mêmes proportions), à $90°$ complètement différentes. Dans mon code, il y a : similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))',
      },
    },
    realworld: {
      embeddings: {
        title: 'Word embeddings et song embeddings',
        desc: 'Dans le monde du ML, les mots, les chansons et les images sont représentés par des vecteurs de grande dimension (embeddings). La similarité cosinus $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ mesure leur ressemblance. Un exemple célèbre : « roi » $-$ « homme » $+$ « femme » $\\approx$ « reine » — de l\'arithmétique vectorielle avec le sens des mots !',
      },
      navigation: {
        title: 'Navigation et robotique',
        desc: 'Les systèmes de navigation et les robots utilisent des vecteurs pour la position et le mouvement. Le vecteur position dit « Où suis-je ? », le vecteur vitesse « Où vais-je et à quelle vitesse ? ». L\'addition de vecteurs calcule la nouvelle position après un déplacement.',
      },
      game_physics: {
        title: 'Physique des jeux vidéo et simulations',
        desc: 'Dans des jeux comme Fortnite ou Minecraft, la physique est calculée avec des vecteurs : $\\vec{v}_{\\text{neu}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Vitesse, accélération et gravité — que des vecteurs ! Sans calcul vectoriel, aucun ballon ne volerait correctement.',
      },
    },
    mistakes: {
      scalar_vs_cross: {
        wrong: 'Le produit scalaire donne un vecteur',
        correct: 'Le produit scalaire donne un NOMBRE ($\\in \\mathbb{R}$)',
        why: 'Pour le produit scalaire, tu multiplies composante par composante et tu ADDITIONNES — le résultat est un seul nombre, pas un vecteur. Ne le confonds pas avec le produit vectoriel (qui donne effectivement un vecteur, mais qui ne vient que plus tard).',
        amir_warning: 'Dans numpy : np.dot(a, b) renvoie un nombre, np.cross(a, b) renvoie un vecteur. Si ton score de similarité est soudain un tableau au lieu d\'un nombre, tu as utilisé le mauvais produit !',
      },
      length_sum: {
        wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — composantes simplement additionnées',
        correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — appliquer Pythagore !',
        why: 'La longueur d\'un vecteur est la distance euclidienne à l\'origine — et elle suit le théorème de Pythagore. Additionner simplement les composantes donnerait la distance de Manhattan (utile aussi, mais c\'est autre chose !).',
      },
    },
  },
};
