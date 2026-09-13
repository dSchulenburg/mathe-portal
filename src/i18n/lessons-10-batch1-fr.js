export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia a réussi à faire fonctionner la courbe de saut de Lumi — mais maintenant elle est bloquée. Au niveau 3 de « Hafenlichter », Lumi doit atterrir sur une plateforme mobile. « J\'ai besoin du moment exact où la courbe de saut touche la plateforme », dit Mia à Tim. Cela signifie : elle doit résoudre une équation du second degré. Pas seulement tracer la fonction, mais concrètement résoudre pour $x$.',
      challenge: 'Mia doit calculer quand la courbe de saut de Lumi croise la plateforme mobile — cela mène à une équation du second degré.',
      outro: 'Mia a maintenant trois méthodes dans sa boîte à outils : la formule quadratique, la complétion du carré et la factorisation. Selon l\'équation, elle choisit la bonne méthode — et Lumi atterrit désormais avec précision sur chaque plateforme. « C\'est comme un couteau suisse », sourit-elle.',
    },
    objectives: {
      solve: 'Résoudre des équations du second degré avec assurance et indiquer l\'ensemble des solutions',
      pq_formula: 'Appliquer la formule quadratique — y compris les cas particuliers (aucune ou une seule solution)',
      completing_square: 'Comprendre et réaliser la complétion du carré comme méthode de résolution',
      factoring: 'Résoudre des équations du second degré par factorisation',
    },
    explanation: {
      intro: 'Une équation du second degré a la forme générale avec le plus grand exposant égal à 2. Contrairement aux équations linéaires ($x$ à la puissance 1), elle peut avoir zéro, une ou deux solutions. La forme générale est :',
      normal_form: 'Pour la formule quadratique, nous avons besoin de la forme réduite — c\'est-à-dire que le coefficient devant $x^2$ doit être exactement 1. Si ce n\'est pas le cas, on divise toute l\'équation par $a$ :',
      mia_tip: 'Je retiens : d\'abord tout ramener d\'un côté pour que zéro soit à droite. Ensuite diviser par le coefficient devant $x^2$. C\'est seulement APRÈS que je peux utiliser la formule quadratique !',
      pq_formula: 'La formule quadratique est l\'outil universel pour les équations du second degré sous forme réduite. Tu lis directement $p$ et $q$ et tu substitues :',
      completing_square: 'La complétion du carré fonctionne ainsi : tu transformes le côté gauche en un carré parfait. Pour cela, tu ajoutes $(\\frac{p}{2})^2$ des deux côtés. Le résultat est une expression de la forme $(x + \\frac{p}{2})^2$, que tu peux facilement résoudre pour $x$.',
      factoring: 'Si tu connais (ou devines) les racines $x_1$ et $x_2$, l\'équation peut s\'écrire comme un produit de deux facteurs linéaires. Le produit est nul quand au moins un facteur est nul :',
    },
    concepts: {
      pq_formula: {
        title: 'Formule quadratique',
        desc: 'L\'outil standard pour les équations du second degré sous forme réduite. Fonctionne toujours — tu n\'as besoin que de $p$ (coefficient de $x$) et $q$ (terme constant).',
      },
      completing_square: {
        title: 'Complétion du carré',
        desc: 'Tu complètes le côté gauche pour former un carré parfait. Particulièrement utile quand tu veux aussi déterminer le sommet d\'une parabole.',
      },
      discriminant: {
        title: 'Discriminant',
        desc: 'L\'expression sous la racine carrée dans la formule quadratique : $D > 0$ donne deux solutions, $D = 0$ en donne exactement une, $D < 0$ signifie aucune solution réelle.',
      },
      factoring: {
        title: 'Factorisation',
        desc: 'Décomposition en deux facteurs linéaires. Fonctionne particulièrement bien quand les racines sont entières — tu peux souvent les deviner.',
      },
    },
    examples: {
      pq_application: {
        title: 'Résoudre une équation avec la formule quadratique',
        context: 'Mia calcule quand la courbe de saut de Lumi atteint la plateforme à $y = 0$.',
        step1: 'L\'équation est déjà sous forme réduite (coefficient de $x^2$ égal à 1) :',
        step2: 'On lit $p$ et $q$ — attention aux signes :',
        step3: 'Substituer les valeurs dans la formule quadratique et calculer étape par étape :',
        step4: 'Deux solutions — Lumi touche la plateforme en deux points :',
        mia_comment: 'Deux solutions, c\'est logique : Lumi saute à $x = 1$ et retombe à $x = 3$. La partie entre les deux, c\'est le vol !',
      },
      completing_square: {
        title: 'Résoudre par complétion du carré',
        context: 'Tim veut résoudre l\'équation sans la formule quadratique — comme alternative.',
        step1: 'On part de l\'équation sous forme réduite :',
        step2: 'D\'abord, déplacer le terme constant à droite :',
        step3: 'Maintenant la complétion du carré : ajouter $(\\frac{6}{2})^2 = 9$ des deux côtés :',
        step4: 'Le côté gauche est maintenant un carré parfait — prendre la racine carrée donne deux cas :',
        step5: 'Calculer les deux solutions :',
        mia_comment: 'Même équation, mêmes solutions, chemin différent. J\'utilise la complétion du carré quand j\'ai aussi besoin du sommet de la parabole — faire d\'une pierre deux coups !',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds et paraboles de tir',
        desc: 'Chaque lancer dans Angry Birds suit une parabole. L\'équation $h(t) = 0$ te dit quand l\'objet touche le sol. Les physiciens utilisent la même formule pour les vrais mouvements de projectiles.',
      },
      breakeven: {
        title: 'Trouver le seuil de rentabilité',
        desc: 'Une entreprise veut savoir : à partir de quelle quantité faisons-nous du bénéfice ? L\'équation $G(x) = 0$ donne les points de rentabilité — généralement une équation du second degré.',
      },
      rocket: {
        title: 'Lancements de fusées',
        desc: 'La hauteur d\'une fusée après le lancement suit une fonction quadratique (tant que le carburant dure). Quand atteint-elle 1000 m ? Équation du second degré !',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Utiliser la formule quadratique sans zéro à droite',
        correct: 'D\'abord tout ramener d\'un côté',
        why: 'La formule quadratique exige que le côté droit soit nul. Pour $x^2 + 3x = 5$, tu dois d\'abord ajouter $-5$ des deux côtés pour obtenir $x^2 + 3x - 5 = 0$. Sinon $q$ est faux !',
        mia_warning: 'J\'ai eu ce bug dans mon code — la collision avec la plateforme était complètement fausse parce que $q$ avait le mauvais signe. Toujours mettre zéro à droite d\'abord !',
      },
      sign_pq: {
        wrong: 'Erreur de signe avec $p$ dans la formule quadratique',
        correct: 'Faire attention au moins devant $\\frac{p}{2}$',
        why: 'La formule quadratique contient $-\\frac{p}{2}$. Pour $x^2 - 6x + 8 = 0$, $p = -6$, donc $-\\frac{-6}{2} = +3$. Si tu oublies le moins, tu obtiens $-3$ au lieu de $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia travaille sur le niveau du phare de Hafenlichter. Le phare projette un cône de lumière sur le port, et Lumi doit se cacher dans l\'ombre. « Je dois calculer jusqu\'où le cône de lumière s\'étend à un angle donné », dit Mia. Tim pointe un triangle rectangle formé par le cône de lumière et le sol. « C\'est la trigonométrie — sinus, cosinus et tangente. »',
      challenge: 'Mia a besoin de la portée du cône de lumière à différents angles pour programmer les zones d\'ombre.',
      outro: 'Le phare tourne lentement, et le cône de lumière balaie le port. Grâce au sinus et au cosinus, le code de Mia calcule en temps réel quelles zones sont éclairées. Lumi se faufile d\'ombre en ombre — le niveau est devenu vraiment palpitant !',
    },
    objectives: {
      sin_cos_tan: 'Appliquer avec assurance sinus, cosinus et tangente dans les triangles rectangles',
      unit_circle: 'Comprendre le cercle trigonométrique et y lire les valeurs',
      angle_calculations: 'Calculer des angles et des longueurs de côtés avec les fonctions trigonométriques',
      real_problems: 'Résoudre des problèmes concrets avec la trigonométrie (hauteurs, distances, angles)',
    },
    explanation: {
      intro: 'La trigonométrie relie les angles aux longueurs des côtés. Dans tout triangle rectangle, trois rapports fondamentaux s\'appliquent — nommés d\'après l\'angle $\\alpha$ considéré :',
      mia_tip: 'Mon moyen mnémotechnique : « CAH SOH TOA » — Cosinus = Adjacent sur Hypoténuse, Sinus = Opposé sur Hypoténuse, Tangente = Opposé sur Adjacent. Ça a l\'air bête, mais on ne l\'oublie jamais !',
      unit_circle: 'Le cercle trigonométrique a un rayon de 1 et son centre à l\'origine. Pour chaque angle $\\alpha$, il fournit directement les valeurs : la coordonnée $x$ est $\\cos(\\alpha)$, la coordonnée $y$ est $\\sin(\\alpha)$. Cela signifie que l\'on a toujours :',
      special_angles: 'Tu devrais connaître certains angles par cœur : $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Astuce : sur le cercle trigonométrique, tu peux lire ces valeurs géométriquement.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'Le rapport du côté opposé à l\'hypoténuse. Sur le cercle trigonométrique, $\\sin(\\alpha)$ correspond à la coordonnée $y$ du point sur le cercle.',
      },
      cosine: {
        title: 'Cosinus',
        desc: 'Le rapport du côté adjacent à l\'hypoténuse. Sur le cercle trigonométrique, $\\cos(\\alpha)$ correspond à la coordonnée $x$. Cosinus et sinus sont décalés de $90°$.',
      },
      tangent: {
        title: 'Tangente',
        desc: 'Le rapport du côté opposé au côté adjacent — ou de manière équivalente $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Idéal pour les pentes et les angles d\'inclinaison.',
      },
      unit_circle: {
        title: 'Cercle trigonométrique',
        desc: 'Un cercle de rayon 1. Chaque point sur le cercle a les coordonnées $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Cela permet de définir sin et cos pour tous les angles — pas seulement les angles aigus.',
      },
    },
    examples: {
      height_tan: {
        title: 'Calculer une hauteur avec la tangente',
        context: 'Mia mesure l\'angle vers le sommet du phare : $35°$. La distance au phare est de $50\\,\\text{m}$.',
        step1: 'Schéma : la distance est le côté adjacent, la hauteur cherchée est le côté opposé. Donc tangente :',
        step2: 'Isoler la hauteur $h$ — multiplier les deux côtés par $50\\,\\text{m}$ :',
        step3: 'Calculatrice (mode DEG !) : substituer $\\tan(35°) \\approx 0{,}7002$ et calculer :',
        mia_comment: 'Dans le jeu, ça tourne en temps réel : l\'angle du cône de lumière change, et mon code calcule instantanément la nouvelle portée. La tangente est parfaite pour ça !',
      },
      unit_circle: {
        title: 'Lire des valeurs sur le cercle trigonométrique',
        context: 'Tim veut montrer à Mia comment fonctionne le cercle trigonométrique — avec l\'exemple de $60°$.',
        step1: 'Convertir l\'angle (optionnel) : $60°$ correspond à $\\frac{\\pi}{3}$ en radians :',
        step2: 'Lire la valeur du sinus — la coordonnée $y$ du point sur le cercle trigonométrique :',
        step3: 'Lire la valeur du cosinus — la coordonnée $x$ :',
        step4: 'Le point sur le cercle trigonométrique a donc les coordonnées :',
        mia_comment: 'Sur le cercle trigonométrique, je vois sin et cos comme des longueurs. C\'est beaucoup plus intuitif que de simples nombres dans un tableau !',
      },
    },
    realworld: {
      compass: {
        title: 'Navigation et GPS',
        desc: 'Ton smartphone calcule les directions avec la trigonométrie. La fonction atan2 convertit des coordonnées $x$ et $y$ en un angle — c\'est comme ça que Google Maps sait dans quelle direction tu dois aller.',
      },
      building_height: {
        title: 'Mesurer la hauteur des bâtiments',
        desc: 'Les architectes et géomètres mesurent la hauteur des bâtiments sans monter sur le toit. Avec un rapporteur et la tangente, la distance et l\'angle suffisent amplement.',
      },
      music: {
        title: 'Sons et ondes sonores',
        desc: 'Chaque son est une onde sinusoïdale. Le la du diapason a 440 vibrations par seconde — décrit par $f(t) = \\sin(880\\pi t)$. La musique est de la trigonométrie appliquée !',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Sinus et cosinus confondus',
        correct: 'Sinus = Opposé / Hypoténuse',
        why: 'Le sinus correspond au côté opposé (le côté en face de l\'angle), le cosinus au côté adjacent (le côté à côté de l\'angle). Si tu les confonds, tu obtiens la mauvaise valeur.',
        mia_warning: 'Ça m\'arrive encore parfois ! Je dessine le triangle et j\'étiquette les côtés par rapport à l\'angle. Ensuite je vois immédiatement lequel est opposé et lequel est adjacent.',
      },
      deg_rad: {
        wrong: 'Mauvais mode d\'angle sur la calculatrice',
        correct: 'Toujours vérifier le mode DEG pour les valeurs en degrés',
        why: 'En mode RAD, la calculatrice interprète $90$ comme $90$ radians (environ $5156°$), pas comme $90°$. $\\sin(90°) = 1$, mais $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Résultat : complètement faux.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter va avoir un mode multijoueur. Mia teste les serveurs avec 10 joueurs — tout tourne bien. Mais Tim prévient : « Que se passe-t-il avec 100 ? Avec 1000 ? Si le jeu devient viral, le nombre de joueurs pourrait doubler tous les quelques jours. » Mia fait le calcul et est choquée : la croissance exponentielle est bien plus rapide qu\'on ne le pense.',
      challenge: 'La charge serveur ne croît pas linéairement avec les joueurs, mais exponentiellement. Mia doit prédire quand les serveurs seront surchargés.',
      outro: 'Mia a construit un modèle qui prédit l\'évolution du nombre de joueurs. Grâce à la fonction exponentielle, elle sait maintenant : si le temps de doublement est de 3 jours, elle aura besoin de 32 fois plus de capacité serveur après 2 semaines. « Mieux vaut évoluer tôt que planter tard », décide-t-elle.',
    },
    objectives: {
      exponential_functions: 'Reconnaître les fonctions exponentielles et les distinguer des fonctions linéaires',
      growth_factor: 'Déterminer et interpréter le facteur de croissance à partir de pourcentages',
      half_life: 'Calculer et appliquer la demi-vie et le temps de doublement',
      model_real_world: 'Modéliser des processus réels de croissance et de décroissance avec des fonctions exponentielles',
    },
    explanation: {
      intro: 'Avec la croissance linéaire, le même montant s\'ajoute à chaque étape. Avec la croissance exponentielle, chaque étape multiplie par le même facteur. Ça semble similaire — mais conduit à des résultats complètement différents :',
      growth_factor: 'Le facteur de croissance $b$ te dit tout : si quelque chose croît de $p\\%$ par unité de temps, le facteur est supérieur à 1. Si quelque chose diminue de $p\\%$ (décroissance), il est inférieur à 1 :',
      mia_tip: 'Les fonctions linéaires additionnent, les fonctions exponentielles multiplient. Avec 10 % de croissance par jour, le facteur est $b = 1{,}10$ — après 7 jours c\'est $1{,}10^7 \\approx 1{,}95$, presque un doublement ! Ça m\'a surprise lors de la planification des serveurs.',
      half_life: 'La demi-vie $t_H$ est le temps après lequel il reste la moitié. Elle est constante — peu importe la quantité de départ. C\'est ce qui est spécial dans la décroissance exponentielle :',
      doubling_time: 'Le pendant pour la croissance : le temps de doublement $t_V$ te dit combien de temps il faut pour que la valeur double. Il reste aussi constant :',
    },
    concepts: {
      exponential_function: {
        title: 'Fonction exponentielle',
        desc: 'La forme générale : $a$ est la valeur initiale, $b$ le facteur de croissance, $t$ le temps. L\'essentiel : la variable est dans l\'exposant — c\'est ce qui la distingue des fonctions puissance.',
      },
      growth_factor: {
        title: 'Facteur de croissance',
        desc: 'Pour $p\\%$ d\'augmentation : $b = 1 + \\frac{p}{100}$. Exemple : 5 % de croissance donne $b = 1{,}05$. Pour 12 % de diminution : $b = 0{,}88$.',
      },
      half_life: {
        title: 'Demi-vie',
        desc: 'Le temps nécessaire pour que la valeur soit divisée par deux. Typique pour la désintégration radioactive, les médicaments dans le corps ou la décharge de batterie. La demi-vie est indépendante de la valeur de départ.',
      },
      euler_base: {
        title: 'Fonction exponentielle naturelle',
        desc: 'La base $e \\approx 2{,}718$ est spéciale : la fonction $e^x$ est sa propre dérivée. Avec $k > 0$ elle croît, avec $k < 0$ elle décroît. Standard en sciences naturelles.',
      },
    },
    examples: {
      bacteria: {
        title: 'Croissance bactérienne',
        context: 'Une culture bactérienne commence avec 500 bactéries et double chaque heure.',
        step1: 'Identifier la valeur initiale et le facteur de croissance — doublement signifie facteur 2 :',
        step2: 'Établir la fonction exponentielle — $t$ compte les heures :',
        step3: 'Substituer $t = 5$ (après 5 heures) : $2^5 = 32$ :',
        step4: 'Après 5 heures, il y a 16 000 bactéries :',
        mia_comment: 'De 500 à 16 000 en seulement 5 heures ! Ça montre pourquoi la croissance exponentielle est si surprenante. Avec les serveurs c\'est pareil — le nombre de joueurs peut croître plus vite qu\'on ne peut commander de nouveaux serveurs.',
      },
      radioactive: {
        title: 'Désintégration radioactive',
        context: 'Un médicament a une demi-vie de 8 jours. Quantité initiale : 200 g.',
        step1: 'Noter la demi-vie et la valeur initiale :',
        step2: 'Établir la formule de décroissance avec $t_H = 8$ :',
        step3: 'Substituer 24 jours — c\'est exactement 3 demi-vies ($\\frac{24}{8} = 3$) :',
        step4: 'Après 24 jours, il ne reste que 25 g — un huitième de la valeur initiale :',
        mia_comment: 'Après chaque demi-vie, la quantité est divisée par deux : $200 \\to 100 \\to 50 \\to 25$. C\'est toujours ainsi, que tu partes de 200 g ou de 2 tonnes.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Vidéos TikTok virales',
        desc: 'Une vidéo virale commence avec 100 vues. Si chaque spectateur la montre à 1,8 personne, les chiffres explosent : après 10 tours, il y a déjà plus de 35 000 vues. Les algorithmes amplifient encore cet effet.',
      },
      battery: {
        title: 'Décharge de batterie',
        desc: 'La batterie de ton téléphone perd environ 5 % de sa charge par heure. Après 14 heures, il reste environ la moitié — ce n\'est pas une baisse linéaire, mais une décroissance exponentielle.',
      },
      pandemic: {
        title: 'Propagation d\'une pandémie',
        desc: 'Le COVID-19 a montré ce que signifie « croissance exponentielle » : sans mesures, le nombre de cas doublait tous les 3 jours. Après un mois, cela ferait un facteur de $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Utiliser un modèle linéaire au lieu d\'exponentiel',
        correct: 'Variation en pourcentage = fonction exponentielle',
        why: '« 5 % de croissance par an » n\'est PAS $+5$ par an, mais $\\cdot 1{,}05$ par an. Avec un modèle linéaire, le montant croît de façon constante ; avec un modèle exponentiel, il croît de plus en plus vite.',
        mia_warning: 'J\'avais d\'abord calculé $\\text{Joueurs}(t) = 100 + 50t$. Les vrais chiffres étaient 3 fois plus élevés après une semaine ! La croissance exponentielle est presque toujours sous-estimée.',
      },
      wrong_growth_factor: {
        wrong: 'Utiliser le pourcentage directement comme facteur',
        correct: 'Facteur = $1 + \\frac{p}{100}$',
        why: 'Avec 3 % de croissance, le facteur est $1{,}03$, pas $3$ ! Avec $b = 3$, la valeur triplerait au lieu de croître de 3 %. Toujours calculer $1 + \\frac{p}{100}$.',
      },
    },
  },
};
