export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Le modèle de ML d\'Amir pour DataPulse fournit des recommandations de chansons correctes — mais l\'entraînement prend une éternité. « La descente de gradient, ce n\'est au fond rien d\'autre que des dérivées », lui explique sa professeure de maths. « Si tu comprends comment fonctionnent les règles de dérivation, tu comprends aussi pourquoi ton modèle apprend. » Amir décide de travailler les règles de façon systématique.',
      challenge: 'Amir veut comprendre comment son modèle de ML dérive en interne la fonction de perte — pour cela, il a besoin des règles de la puissance, de la somme, du produit et de la chaîne.',
      outro: 'Amir a maintenant des bases solides : la règle de la puissance pour les termes simples, les règles de la somme et du facteur constant pour les expressions composées, la règle du produit pour les multiplications et la règle de la chaîne pour les fonctions imbriquées. « Maintenant, je comprends enfin ce que PyTorch fait en arrière-plan avec Autograd », dit-il, satisfait.',
    },
    objectives: {
      power_rule: 'Appliquer avec assurance la règle de la puissance : dériver $f(x) = x^n$',
      constant_sum_rule: 'Maîtriser les règles du facteur constant et de la somme : dériver les termes un par un et conserver les facteurs',
      product_quotient_rule: 'Appliquer correctement les règles du produit et du quotient',
      chain_rule: 'Utiliser avec assurance la règle de la chaîne pour les fonctions imbriquées',
    },
    explanation: {
      intro: 'La règle de la puissance est la règle de base la plus importante : tu fais descendre l\'exposant comme facteur et tu diminues l\'exposant de 1. Tu dérives ainsi n\'importe quelle fonction puissance en un clin d\'œil :',
      constant_factor: 'Les facteurs constants sont conservés lors de la dérivation, et pour les sommes, tu peux dériver terme par terme. Cela rend les expressions composées plus lisibles :',
      amir_tip: 'Dans mon code de ML, il y a des sommes et des facteurs partout — la fonction de perte est une énorme somme sur tous les points de données. C\'est parce que je peux dériver chaque terme séparément que la rétropropagation est possible !',
      product_rule: 'Quand deux fonctions sont multipliées, tu ne peux PAS simplement dériver chacune séparément. C\'est la règle du produit qui s\'applique — « la première fois la dérivée de la seconde, plus la seconde fois la dérivée de la première » :',
      quotient_rule: 'Pour les quotients de fonctions, il y a la règle du quotient. Moyen mnémotechnique : « NAZ moins ZAN sur N au carré » (N = dénominateur, Z = numérateur, A = dérivée). Contrairement à la règle du produit, l\'ordre compte ici — le moins rend la formule asymétrique :',
      chain_rule: 'Pour les fonctions imbriquées — une fonction dans une fonction — tu as besoin de la règle de la chaîne. Tu dérives « de l\'extérieur vers l\'intérieur » et tu multiplies par la dérivée intérieure :',
    },
    concepts: {
      power_rule: {
        title: 'Règle de la puissance',
        desc: 'La règle de base : l\'exposant devient un facteur, l\'exposant diminue de 1. Elle vaut aussi pour les exposants négatifs et fractionnaires, par ex. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Règles de la somme et du facteur constant',
        desc: 'Les sommes se dérivent terme par terme, les facteurs constants sont conservés. Tu décomposes ainsi chaque polynôme en éléments simples.',
      },
      product_rule: {
        title: 'Règle du produit',
        desc: 'Pour le produit de deux fonctions : dérivée de la première fois la seconde, plus la première fois dérivée de la seconde. Indispensable dès que deux expressions variables sont multipliées.',
      },
      quotient_rule: {
        title: 'Règle du quotient',
        desc: 'Pour les quotients : dénominateur fois dérivée du numérateur, moins numérateur fois dérivée du dénominateur, le tout divisé par le dénominateur au carré. Le moins est la différence avec la règle du produit — et la source d\'erreur la plus fréquente. Nécessaire partout où une grandeur est exprimée « par » une autre : coût unitaire, vitesse, concentration.',
      },
      chain_rule: {
        title: 'Règle de la chaîne',
        desc: 'Dériver la fonction extérieure, laisser l\'intérieure telle quelle, puis multiplier par la dérivée de la fonction intérieure. Le cœur de la rétropropagation dans les réseaux de neurones.',
      },
    },
    examples: {
      power_sum: {
        title: 'Dériver un polynôme avec les règles de la puissance et de la somme',
        context: 'Amir simplifie un terme de sa fonction de coût.',
        step1: 'Le polynôme est donné — on dérive chaque terme séparément :',
        step2: 'Appliquer la règle de la puissance à chaque terme : l\'exposant comme facteur, l\'exposant moins 1. La constante $-7$ disparaît :',
        step3: 'En regroupant, on obtient la fonction dérivée :',
        amir_comment: 'C\'est exactement à ça que ressemble le gradient de mes features polynomiales. Chaque terme apporte sa contribution à la pente — et PyTorch le fait automatiquement pour des milliers de paramètres à la fois.',
      },
      quotient_rule: {
        title: 'Dériver une fonction rationnelle avec la règle du quotient',
        context: 'Amir mesure combien de requêtes son serveur traite par seconde écoulée — une grandeur par une autre, donc un quotient.',
        step1: 'Commence par nommer le numérateur et le dénominateur. Si tu sautes cette étape, tu les inverseras plus tard :',
        step2: 'Dériver les deux séparément — c\'est la partie facile :',
        step3: 'Maintenant, on substitue : dénominateur fois dérivée du numérateur, moins numérateur fois dérivée du dénominateur, le tout divisé par $v^2$ :',
        step4: 'Développer et regrouper. Le dénominateur reste sous forme de carré, on ne le développe pas :',
        amir_comment: 'Important : le dénominateur reste $(x-1)^2$. Avant, je le développais toujours sagement, et je m\'empêchais ainsi de simplifier. Dans l\'étude de fonction, tu veux pouvoir voir les zéros du dénominateur — sous forme de facteur, pas de polynôme.',
      },
      chain_rule: {
        title: 'Fonction imbriquée avec la règle de la chaîne',
        context: 'Amir dérive une fonction d\'activation qui contient une composition.',
        step1: 'Une fonction puissance imbriquée est donnée :',
        step2: 'Décomposition en fonction extérieure $f(u) = u^3$ et fonction intérieure $g(x) = 2x^2 + 1$ :',
        step3: 'Dériver l\'extérieure (règle de la puissance sur $u^3$), laisser l\'intérieure, fois la dérivée intérieure ($4x$) :',
        step4: 'Mis en ordre — le facteur $4x$ placé devant :',
        amir_comment: 'La règle de la chaîne, c\'est littéralement la rétropropagation ! Chaque couche d\'un réseau de neurones est une fonction imbriquée, et la règle de la chaîne enchaîne les gradients de couche en couche.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Descente de gradient en machine learning',
        desc: 'Tout modèle de ML minimise une fonction de perte en dérivant. Le gradient indique la direction de la montée la plus raide — on va dans la direction opposée pour trouver le minimum.',
      },
      marginal_cost: {
        title: 'Coût marginal en économie',
        desc: 'La dérivée de la fonction de coût $K(x)$ donne le coût marginal : combien coûte une unité produite en plus ? Les entreprises s\'en servent tous les jours pour calculer leurs prix.',
      },
      acceleration: {
        title: 'Accélération en physique',
        desc: 'La vitesse est la dérivée de la position, l\'accélération la dérivée de la vitesse. Le capteur de ton téléphone mesure exactement cela : $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'La dérivée d\'une constante est la constante elle-même',
        correct: 'La dérivée d\'une constante est toujours zéro',
        why: 'Une constante n\'a pas de pente — elle ne varie pas. Pense à $f(x) = 5$ : c\'est une droite horizontale, donc la pente vaut 0 partout. C\'est vrai pour tout nombre sans $x$.',
        amir_warning: 'Le terme de biais de mon modèle est une constante — sa dérivée par rapport à $x$ vaut 0. Si tu l\'oublies, ton gradient reçoit un décalage faux et l\'entraînement diverge.',
      },
      chain_rule_forgotten: {
        wrong: 'Oublier la dérivée intérieure pour les fonctions imbriquées',
        correct: 'Toujours multiplier par la dérivée intérieure',
        why: 'Pour $[(3x+1)^4]\'$, il ne suffit pas de faire descendre l\'exposant. Tu DOIS multiplier par la dérivée du terme intérieur $(3x+1)\' = 3$. Sans dérivée intérieure, il manque le facteur 3.',
        amir_warning: 'Imagine que, dans un réseau de neurones, tu oublies la dérivée intérieure pour une couche — le gradient serait complètement faux et le modèle apprendrait n\'importe quoi. La règle de la chaîne n\'est pas facultative !',
      },
      quotient_sign: {
        wrong: 'Numérateur de la règle du quotient inversé : $u \\cdot v\' - u\' \\cdot v$',
        correct: 'D\'abord dénominateur fois dérivée du numérateur : $u\' \\cdot v - u \\cdot v\'$',
        why: 'La règle du produit est symétrique — tu peux échanger les deux termes, le résultat reste le même. Dans la règle du quotient, il y a un moins, et l\'ordre est donc fixé. Si tu les échanges, tu obtiens exactement l\'opposé de la bonne dérivée. Le piège : le terme a l\'air plausible, tu continues à calculer correctement, et pourtant, à la fin, chaque signe est faux. Un maximum devient un minimum.',
        amir_warning: 'Fais la vérification en un point simple. Pour $f(x) = \\frac{x}{x+1}$, la fonction est croissante partout, donc $f\'$ doit être positive. Si tu obtiens quelque chose de négatif, tu as inversé le numérateur — ça te coûte dix secondes et ça sauve tout l\'exercice.',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'L\'algorithme de recommandation d\'Amir produit des résultats — mais sont-ils vraiment optimaux ? « Tu dois analyser complètement la fonction de perte », dit son professeur. « Où sont les minima ? Où sont les points d\'inflexion ? » Amir comprend : une étude de fonction complète lui montre si son modèle a vraiment trouvé le minimum global ou s\'il est coincé dans un minimum local.',
      challenge: 'Amir analyse le paysage de perte de son modèle : déterminer complètement les zéros, les extrema, les points d\'inflexion et la monotonie d\'une fonction.',
      outro: 'Amir peut maintenant caractériser complètement n\'importe quelle fonction polynomiale : trouver les zéros, déterminer les maxima et les minima, calculer les points d\'inflexion et lire la monotonie. « Quand je trace le paysage de perte comme ça, je vois tout de suite si mon optimiseur a atterri dans la bonne vallée », dit-il.',
    },
    objectives: {
      zeros_extrema: 'Déterminer systématiquement les zéros et les extrema d\'une fonction',
      inflection_points: 'Calculer les points d\'inflexion et comprendre leur signification pour l\'allure de la courbe',
      monotonicity_symmetry: 'Analyser la monotonie et la symétrie d\'une fonction',
    },
    explanation: {
      intro: 'Une étude de fonction est l\'analyse complète d\'une fonction. On commence par les zéros — les points où le graphique coupe l\'axe des $x$ :',
      extrema: 'Tu trouves les extrema (maxima et minima) là où la dérivée première s\'annule. Mais attention : tout zéro de $f\'$ n\'est pas automatiquement un extremum ! Tu as besoin de la dérivée seconde pour le confirmer :',
      amir_tip: 'Le paysage de perte de mon modèle a beaucoup de minima locaux. Avec l\'étude de fonction, je peux vérifier si un point critique est vraiment un minimum — ou seulement un point selle où l\'optimiseur reste bloqué.',
      inflection: 'Les points d\'inflexion marquent le passage d\'une courbure vers le haut à une courbure vers le bas. Ici, la courbure change — la dérivée seconde change de signe :',
      monotonicity: 'La monotonie te dit où la fonction croît et où elle décroît. Tu la lis directement sur le signe de la dérivée première :',
    },
    concepts: {
      extrema: {
        title: 'Extrema (maxima et minima)',
        desc: 'Condition nécessaire : $f\'(x_0) = 0$. Condition suffisante : $f\'\'(x_0) < 0$ donne un maximum, $f\'\'(x_0) > 0$ donne un minimum. Les deux conditions ensemble rendent le résultat sûr.',
      },
      inflection: {
        title: 'Points d\'inflexion',
        desc: 'Là où la courbure change : $f\'\'(x_0) = 0$ ET $f\'\'\'(x_0) \\neq 0$. Pour les lois normales, les points d\'inflexion marquent l\'écart-type.',
      },
      symmetry: {
        title: 'Symétrie',
        desc: 'Symétrie par rapport à l\'axe des $y$ si $f(-x) = f(x)$ (uniquement des exposants pairs). Symétrie par rapport à l\'origine si $f(-x) = -f(x)$ (uniquement des exposants impairs). Ça économise du calcul !',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Étude de fonction complète',
        context: 'Amir étudie une fonction cubique — semblable aux fonctions de perte qui ont plusieurs extrema.',
        step1: 'La fonction est donnée — on l\'analyse complètement :',
        step2: 'Calculer la dérivée première et déterminer ses zéros (condition nécessaire pour les extrema) :',
        step3: 'Évaluer la dérivée seconde aux points critiques (condition suffisante) : valeur négative = maximum, valeur positive = minimum :',
        step4: 'Déterminer le point d\'inflexion avec $f\'\' = 0$ et le confirmer avec la dérivée troisième :',
        amir_comment: 'C\'est exactement comme ça que j\'analyse le paysage de perte : d\'abord trouver les points critiques, puis vérifier s\'il s\'agit d\'un minimum ou d\'un point selle. Pour les fonctions en grande dimension, mon optimiseur le fait numériquement — mais le principe est identique.',
      },
      graph_properties: {
        title: 'Utiliser la symétrie et les extrema',
        context: 'Une fonction symétrique — la symétrie te fait économiser la moitié du travail.',
        step1: 'Une fonction de degré 4 est donnée — on vérifie d\'abord la symétrie :',
        step2: 'Substituer $-x$ : tous les exposants sont pairs, donc $f(-x) = f(x)$ — symétrie axiale ! Les extrema apparaissent de façon symétrique :',
        step3: 'Annuler la dérivée première — grâce à la symétrie, il suffit de trouver les solutions positives :',
        step4: 'Calculer les valeurs de la fonction — grâce à la symétrie, on a $f(\\sqrt{2}) = f(-\\sqrt{2})$ :',
        amir_comment: 'La symétrie dans les données vaut de l\'or : si je sais que ma fonction de perte est symétrique, je n\'ai besoin de parcourir que la moitié de l\'espace des paramètres. Ça divise le temps d\'entraînement par deux !',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analyser des distributions de données',
        desc: 'La loi normale a des points d\'inflexion en $\\mu \\pm \\sigma$. L\'étude de fonction te révèle où se concentrent la plupart des points de données et où commence la dispersion.',
      },
      profit_analysis: {
        title: 'Maximisation du profit',
        desc: 'La fonction de profit $G(x)$ a un maximum — la quantité de production optimale. L\'étude de fonction montre exactement pour quelle quantité le profit est maximal.',
      },
      population_growth: {
        title: 'Croissance démographique',
        desc: 'Le point d\'inflexion d\'une courbe de croissance marque le moment à partir duquel la croissance ralentit. Les épidémiologistes utilisent exactement cette analyse pour les courbes d\'infection.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Tout zéro de $f\'$ est automatiquement un extremum',
        correct: 'Vérifier le zéro de $f\'$ PLUS un changement de signe ou $f\'\' \\neq 0$',
        why: 'Pour $f(x) = x^3$, on a $f\'(0) = 0$, mais il n\'y a pas d\'extremum — c\'est un point selle ! Tu DOIS vérifier la condition suffisante ($f\'\' \\neq 0$ ou changement de signe de $f\'$).',
        amir_warning: 'En dimension supérieure, ces points s\'appellent des « saddle points » — l\'optimiseur y reste bloqué et croit avoir trouvé un minimum. Toujours vérifier la dérivée seconde !',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ suffit pour un point d\'inflexion',
        correct: '$f\'\'(x_0) = 0$ ET $f\'\'\'(x_0) \\neq 0$ ensemble confirment le point d\'inflexion',
        why: 'Pour $f(x) = x^4$, on a $f\'\'(0) = 0$, mais il n\'y a pas de point d\'inflexion — la courbure ne change pas ! La dérivée troisième doit être non nulle pour garantir le changement de courbure.',
        amir_warning: 'Même piège qu\'avec les extrema : la condition nécessaire seule ne suffit jamais. Vérifie toujours la condition suffisante — sinon tu fais confiance à un résultat faux.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse doit tourner sur smartphone — mais le modèle d\'Amir a besoin de trop de mémoire. « Tu dois optimiser l\'architecture du réseau », dit sa coéquipière Sara. « Précision maximale pour une consommation de mémoire minimale. » Amir reconnaît le problème : c\'est un problème d\'optimisation classique — optimiser une grandeur pendant qu\'une autre grandeur est limitée.',
      challenge: 'Amir veut trouver la meilleure architecture de modèle : qualité de prédiction maximale sous la contrainte de ressources de calcul limitées.',
      outro: 'Amir a compris le principe : établir la fonction objectif, substituer la contrainte, réduire à une variable, dériver, annuler la dérivée, vérifier. « Qu\'il s\'agisse des dimensions d\'une canette ou des paramètres d\'un modèle — le schéma est toujours le même », constate-t-il. Son modèle tient maintenant dans 50 Mo.',
    },
    objectives: {
      setup_equations: 'Établir la fonction objectif et la contrainte à partir d\'une situation concrète',
      optimize_constraints: 'Obtenir une fonction d\'une seule variable en substituant la contrainte, puis l\'optimiser',
      verify_extremum: 'Vérifier avec la dérivée seconde s\'il s\'agit d\'un maximum ou d\'un minimum, et tenir compte des valeurs aux bornes',
    },
    explanation: {
      intro: 'Les problèmes d\'optimisation portent toujours sur la même chose : une grandeur doit être la plus grande ou la plus petite possible (fonction objectif), tandis qu\'une restriction s\'applique (contrainte) :',
      strategy: 'La stratégie est toujours la même : (1) Établir la fonction objectif — qu\'est-ce qui doit être optimisé ? (2) Trouver la contrainte — quelle restriction s\'applique ? (3) Résoudre la contrainte pour une variable et la substituer dans la fonction objectif. (4) Dériver, annuler la dérivée, vérifier.',
      amir_tip: 'Le réglage des hyperparamètres est exactement ce genre de problème d\'optimisation : je veux minimiser l\'erreur de validation (fonction objectif), mais la mémoire de mon GPU est limitée (contrainte). Le schéma du cours de maths fonctionne tel quel !',
      substitution: 'Après avoir substitué la contrainte, la fonction objectif ne dépend plus que d\'une variable. Maintenant, on dérive tout à fait normalement et on vérifie le point critique :',
      domain_check: 'N\'oublie pas le domaine de définition ! Dans les problèmes réels, il y a souvent des limites (par ex. $r > 0$ pour un rayon). Compare la valeur de la fonction au point critique avec les valeurs aux bornes — parfois, l\'optimum se trouve à une borne.',
    },
    concepts: {
      target_function: {
        title: 'Fonction objectif',
        desc: 'La grandeur à optimiser — profit maximal, surface minimale, meilleure précision. Elle dépend souvent au départ de deux variables.',
      },
      constraint: {
        title: 'Contrainte',
        desc: 'La restriction qui s\'applique — volume fixe, budget limité, nombre de paramètres limité. Elle permet d\'éliminer une variable et de réduire la fonction objectif à une seule variable.',
      },
      boundary_check: {
        title: 'Vérification aux bornes',
        desc: 'L\'optimum peut aussi se trouver à la borne du domaine de définition. Toujours comparer $f(x_{opt})$ avec les valeurs aux bornes $f(a)$ et $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Canette avec une consommation minimale de matériau',
        context: 'Une canette cylindrique doit contenir 330 ml — avec le moins de tôle possible.',
        step1: 'Contrainte : le volume est fixé. Résoudre pour $h$ afin d\'éliminer une variable :',
        step2: 'Établir la fonction objectif (surface) et substituer $h$ — maintenant, tout ne dépend plus que de $r$ :',
        step3: 'Dériver, annuler la dérivée et résoudre pour $r$ — c\'est le rayon optimal :',
        step4: 'Vérifier la dérivée seconde : positive signifie minimum — on a bien trouvé la canette la plus économique :',
        amir_comment: 'C\'est exactement comme la compression de modèle : précision fixée (contrainte), nombre minimal de paramètres (fonction objectif). Je remplace $r$ par « largeur de couche » et $h$ par « profondeur » — même principe !',
      },
      profit_max: {
        title: 'Profit maximal',
        context: 'Une start-up veut trouver le prix optimal pour son modèle d\'abonnement.',
        step1: 'Établir la fonction de profit : recettes moins coûts — ici déjà avec une seule variable :',
        step2: 'Annuler la dérivée — la quantité optimale :',
        step3: 'La dérivée seconde est négative — c\'est donc un maximum. Le profit est bien maximal ici :',
        step4: 'Calculer le profit maximal en substituant :',
        amir_comment: 'L\'optimisation des prix est un classique en data science. Chez DataPulse, on pourrait calculer de la même façon le niveau d\'abonnement optimal — maximiser le profit à condition que les utilisateurs ne partent pas.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Optimisation des hyperparamètres',
        desc: 'Le taux d\'apprentissage $\\alpha$ de la descente de gradient doit être choisi de façon optimale : trop grand = divergence, trop petit = une lenteur interminable. Le $\\alpha$ optimal minimise l\'erreur de validation.',
      },
      packaging: {
        title: 'Design d\'emballage',
        desc: 'Consommation minimale de matériau pour un volume fixé — c\'est exactement ce que les ingénieurs résolvent tous les jours. Chaque canette, chaque carton est le résultat d\'un problème d\'optimisation.',
      },
      solar_panel: {
        title: 'Orientation des panneaux solaires',
        desc: 'L\'angle d\'inclinaison d\'un panneau solaire détermine le rendement énergétique. Trouver l\'angle optimal est un problème d\'optimisation dont la position du soleil est la contrainte.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Dériver directement la fonction objectif à deux variables',
        correct: 'D\'abord substituer la contrainte, puis dériver',
        why: 'Avec deux variables, tu ne peux pas simplement dériver par rapport à $x$ — $y$ varie aussi ! Tu DOIS utiliser la contrainte pour exprimer $y$ en fonction de $x$. C\'est seulement alors que tout dépend d\'une seule variable.',
        amir_warning: 'C\'est comme un modèle de ML avec trop de paramètres libres : sans contraintes, pas d\'optimum qui ait du sens. La contrainte réduit les degrés de liberté — exactement comme la régularisation.',
      },
      no_boundary: {
        wrong: 'Considérer le point critique comme l\'optimum global',
        correct: 'Comparer le point critique avec les valeurs aux bornes',
        why: 'Sur un intervalle borné $[a, b]$, l\'optimum peut se trouver à une borne ! $f\'(x_0) = 0$ ne fournit que des candidats locaux. Tu dois comparer $f(x_0)$, $f(a)$ et $f(b)$.',
        amir_warning: 'En pratique, chaque paramètre a un domaine autorisé. Mon taux d\'apprentissage ne peut pas être négatif, la taille de batch ne peut pas dépasser la mémoire du GPU. Vérifier les bornes est obligatoire !',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse tourne — mais Amir a besoin d\'une nouvelle métrique : combien de chansons les utilisateurs écoutent-ils au total par semaine ? Il a le taux d\'écoute $r(t)$ en fonction du temps, mais il lui faut le nombre total. « Taux fois temps donne une quantité — mais le taux change sans arrêt », réfléchit Amir. Son pote Kai sourit : « Ça ressemble à une intégrale. »',
      challenge: 'Amir veut calculer le nombre total de chansons écoutées à partir du taux d\'écoute $r(t)$ qui dépend du temps — cela le mène au calcul intégral.',
      outro: 'Amir sait maintenant déterminer des primitives, calculer des intégrales définies et déterminer des aires entre des courbes. « L\'intégration est l\'inverse de la dérivation — et en pratique, je m\'en sers pour additionner des données continues », résume-t-il. Sa métrique d\'écoute hebdomadaire est prête.',
    },
    objectives: {
      antiderivative: 'Déterminer des primitives avec la règle de la puissance à l\'envers et comprendre la constante d\'intégration $C$',
      definite_integral: 'Calculer des intégrales définies avec le théorème fondamental : $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Comprendre le théorème fondamental de l\'analyse et l\'appliquer aux calculs d\'aires',
    },
    explanation: {
      intro: 'L\'intégration est l\'inverse de la dérivation : si $F\'(x) = f(x)$, alors $F(x)$ est une primitive de $f(x)$. La primitive générale contient toujours la constante $C$ :',
      power_rule_integral: 'La règle de la puissance à l\'envers : augmenter l\'exposant de 1 et diviser par le nouvel exposant. Cela fonctionne pour tout $n \\neq -1$ :',
      amir_tip: 'L\'intégration, c\'est comme l\'agrégation dans les bases de données : la dérivée donne le taux de variation instantané, l\'intégration additionne tout. Si je connais les téléchargements par heure, l\'intégrale me donne le total des téléchargements sur une période.',
      definite_integral: 'L\'intégrale définie calcule l\'« effet total » entre deux bornes. Le théorème fondamental rend cela simple : primitive à la borne supérieure moins primitive à la borne inférieure :',
      area_interpretation: 'Géométriquement, l\'intégrale définie est l\'aire entre la courbe et l\'axe des $x$. Attention : les aires situées sous l\'axe des $x$ comptent négativement ! Pour l\'aire réelle, tu as besoin de la valeur absolue :',
    },
    concepts: {
      antiderivative: {
        title: 'Primitive',
        desc: 'Une fonction $F(x)$ telle que $F\'(x) = f(x)$. La constante $+C$ est importante, car deux primitives ne diffèrent que d\'une constante.',
      },
      definite_integral: {
        title: 'Intégrale définie',
        desc: 'Calcule l\'aire algébrique entre $f(x)$ et l\'axe des $x$ de $a$ à $b$. On substitue la borne supérieure moins la borne inférieure.',
      },
      fundamental_theorem: {
        title: 'Théorème fondamental de l\'analyse',
        desc: 'Relie dérivée et intégrale : dériver et intégrer sont des opérations inverses. L\'intégrale définie se calcule à l\'aide de la primitive.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Aire entre une parabole et l\'axe des $x$',
        context: 'Amir représente la répartition du temps d\'écoute comme l\'aire sous une courbe.',
        step1: 'Déterminer la fonction et ses zéros — ce sont nos bornes d\'intégration :',
        step2: 'Déterminer la primitive avec la règle de la puissance à l\'envers :',
        step3: 'Calculer l\'intégrale définie : substituer la borne supérieure moins la borne inférieure :',
        step4: 'L\'intégrale est négative, car la parabole se trouve sous l\'axe des $x$. Pour l\'aire, prendre la valeur absolue :',
        amir_comment: 'Les intégrales négatives ont tout à fait du sens en analyse de données : si $f(x)$ est l\'écart par rapport à la moyenne, une intégrale négative montre que les valeurs étaient globalement en dessous de la moyenne.',
      },
      distance_from_velocity: {
        title: 'Calculer une distance à partir de la vitesse',
        context: 'Quelle distance une voiture autonome parcourt-elle en 4 secondes ?',
        step1: 'La fonction vitesse est donnée :',
        step2: 'La distance totale est l\'intégrale de la vitesse par rapport au temps :',
        step3: 'Déterminer la primitive — intégrer chaque terme séparément :',
        step4: 'Substituer les bornes et calculer la différence :',
        amir_comment: 'Les données de capteurs arrivent sous forme de taux — vitesse, débit de données, requêtes par seconde. L\'intégrale en fait la quantité totale. Mon tableau de bord affiche exactement ça : $\\int_0^T r(t)\\,dt$ = nombre total de streams.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Agrégation de données dans le temps',
        desc: 'Si le débit de données $r(t)$ est connu, l\'intégrale fournit la quantité totale sur une période. C\'est ainsi que les services de streaming calculent les minutes d\'écoute mensuelles à partir de données à la seconde.',
      },
      energy_consumption: {
        title: 'Consommation d\'énergie',
        desc: 'La puissance $P(t)$ en watts fois le temps donne l\'énergie en joules — mais seulement si la puissance est constante. Si la puissance varie, tu as besoin de l\'intégrale : $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Probabilités',
        desc: 'La probabilité qu\'une variable aléatoire se situe entre $a$ et $b$ est l\'aire sous la fonction de densité — donc une intégrale définie. La base de toute la statistique.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Oublier la constante d\'intégration $C$ pour les intégrales indéfinies',
        correct: 'Toujours ajouter $+ C$ pour une intégrale indéfinie',
        why: 'Si $F\'(x) = 2x$, alors $x^2$ et $x^2 + 7$ sont toutes les deux des primitives. Le $+C$ représente toutes les primitives possibles. Dans une intégrale définie, $C$ s\'élimine — là, tu peux l\'omettre.',
        amir_warning: 'En pratique, $C$ est la condition initiale : combien de chansons l\'utilisateur avait-il déjà écoutées avant qu\'on commence à mesurer ? Sans $C$, il manque la valeur de départ, et ton calcul part de zéro au lieu de la vraie valeur.',
      },
      negative_area: {
        wrong: 'Interpréter directement l\'intégrale comme une aire, même si elle est négative',
        correct: 'Pour les aires réelles, prendre la valeur absolue des intégrales',
        why: 'L\'intégrale $\\int_a^b f(x)\\,dx$ peut être négative quand $f(x) < 0$. C\'est correct en tant qu\'aire algébrique. Si tu as besoin de l\'aire géométrique, tu dois intégrer $|f(x)|$ ou calculer les aires partielles séparément.',
        amir_warning: 'Imagine que tu calcules le temps d\'écoute total et que tu obtiennes un résultat négatif — ce serait évidemment faux. Pour les problèmes d\'aire, vérifie toujours si la fonction change de signe, et calcule les sous-intervalles séparément !',
      },
    },
  },
};
