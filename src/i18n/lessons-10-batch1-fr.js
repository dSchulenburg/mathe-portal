export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia a reussi a faire fonctionner la courbe de saut de Lumi — mais maintenant elle est bloquee. Au niveau 3 de "Lumieres du Port", Lumi doit atterrir sur une plateforme mobile. "J\'ai besoin du moment exact ou la courbe de saut touche la plateforme", dit Mia a Tim. Cela signifie : elle doit resoudre une equation du second degre. Pas seulement tracer la fonction, mais concretement resoudre pour $x$.',
      challenge: 'Mia doit calculer quand la courbe de saut de Lumi croise la plateforme mobile — cela mene a une equation du second degre.',
      outro: 'Mia a maintenant trois methodes dans sa boite a outils : la formule quadratique, la methode de completion du carre et la factorisation. Selon l\'equation, elle choisit la bonne methode — et Lumi atterrit desormais avec precision sur chaque plateforme. "C\'est comme un couteau suisse", sourit-elle.',
    },
    objectives: {
      solve: 'Resoudre des equations du second degre avec assurance et indiquer l\'ensemble des solutions',
      pq_formula: 'Appliquer la formule quadratique — y compris les cas particuliers (aucune ou une seule solution)',
      completing_square: 'Comprendre et realiser la completion du carre comme methode de resolution',
      factoring: 'Resoudre des equations du second degre par factorisation',
    },
    explanation: {
      intro: 'Une equation du second degre a la forme generale avec le plus grand exposant egal a 2. Contrairement aux equations lineaires ($x$ a la puissance 1), elle peut avoir zero, une ou deux solutions. La forme generale est :',
      normal_form: 'Pour la formule quadratique, nous avons besoin de la forme reduite — c\'est-a-dire que le coefficient devant $x^2$ doit etre exactement 1. Si ce n\'est pas le cas, on divise toute l\'equation par $a$ :',
      mia_tip: 'Je retiens : d\'abord tout ramener d\'un cote pour que zero soit a droite. Ensuite diviser par le coefficient devant $x^2$. C\'est seulement APRES que je peux utiliser la formule quadratique !',
      pq_formula: 'La formule quadratique est l\'outil universel pour les equations du second degre sous forme reduite. Tu lis directement $p$ et $q$ et tu substitues :',
      completing_square: 'La completion du carre fonctionne ainsi : tu transformes le cote gauche en un carre parfait. Pour cela, tu ajoutes $(\\frac{p}{2})^2$ des deux cotes. Le resultat est une expression de la forme $(x + \\frac{p}{2})^2$, que tu peux facilement resoudre pour $x$.',
      factoring: 'Si tu connais (ou devines) les racines $x_1$ et $x_2$, l\'equation peut s\'ecrire comme un produit de deux facteurs lineaires. Le produit est nul quand au moins un facteur est nul :',
    },
    concepts: {
      pq_formula: {
        title: 'Formule quadratique',
        desc: 'L\'outil standard pour les equations du second degre sous forme reduite. Fonctionne toujours — tu n\'as besoin que de $p$ (coefficient de $x$) et $q$ (terme constant).',
      },
      completing_square: {
        title: 'Completion du carre',
        desc: 'Tu completes le cote gauche pour former un carre parfait. Particulierement utile quand tu veux aussi determiner le sommet d\'une parabole.',
      },
      discriminant: {
        title: 'Discriminant',
        desc: 'L\'expression sous la racine carree dans la formule quadratique : $D > 0$ donne deux solutions, $D = 0$ en donne exactement une, $D < 0$ signifie aucune solution reelle.',
      },
      factoring: {
        title: 'Factorisation',
        desc: 'Decomposition en deux facteurs lineaires. Fonctionne particulierement bien quand les racines sont entieres — tu peux souvent les deviner.',
      },
    },
    examples: {
      pq_application: {
        title: 'Resoudre une equation avec la formule quadratique',
        context: 'Mia calcule quand la courbe de saut de Lumi atteint la plateforme a $y = 0$.',
        step1: 'L\'equation est deja sous forme reduite (coefficient de $x^2$ egal a 1) :',
        step2: 'On lit $p$ et $q$ — attention aux signes :',
        step3: 'Substituer les valeurs dans la formule quadratique et calculer etape par etape :',
        step4: 'Deux solutions — Lumi touche la plateforme en deux points :',
        mia_comment: 'Deux solutions, c\'est logique : Lumi saute a $x = 1$ et retombe a $x = 3$. La partie entre les deux, c\'est le vol !',
      },
      completing_square: {
        title: 'Resoudre par completion du carre',
        context: 'Tim veut resoudre l\'equation sans la formule quadratique — comme alternative.',
        step1: 'On part de l\'equation sous forme reduite :',
        step2: 'D\'abord, deplacer le terme constant a droite :',
        step3: 'Maintenant la completion du carre : ajouter $(\\frac{6}{2})^2 = 9$ des deux cotes :',
        step4: 'Le cote gauche est maintenant un carre parfait — prendre la racine carree donne deux cas :',
        step5: 'Calculer les deux solutions :',
        mia_comment: 'Meme equation, memes solutions, chemin different. J\'utilise la completion du carre quand j\'ai aussi besoin du sommet de la parabole — faire d\'une pierre deux coups !',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds et paraboles de tir',
        desc: 'Chaque lancer dans Angry Birds suit une parabole. L\'equation $h(t) = 0$ te dit quand l\'objet touche le sol. Les physiciens utilisent la meme formule pour les vrais mouvements de projectiles.',
      },
      breakeven: {
        title: 'Trouver le seuil de rentabilite',
        desc: 'Une entreprise veut savoir : a partir de quelle quantite faisons-nous du benefice ? L\'equation $G(x) = 0$ donne les points de rentabilite — generalement une equation du second degre.',
      },
      rocket: {
        title: 'Lancements de fusees',
        desc: 'La hauteur d\'une fusee apres le lancement suit une fonction quadratique (tant que le carburant dure). Quand atteint-elle 1000 m ? Equation du second degre !',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Utiliser la formule quadratique sans zero a droite',
        correct: 'D\'abord tout ramener d\'un cote',
        why: 'La formule quadratique exige que le cote droit soit nul. Pour $x^2 + 3x = 5$, tu dois d\'abord ajouter $-5$ des deux cotes pour obtenir $x^2 + 3x - 5 = 0$. Sinon $q$ est faux !',
        mia_warning: 'J\'ai eu ce bug dans mon code — la collision avec la plateforme etait completement fausse parce que $q$ avait le mauvais signe. Toujours mettre zero a droite d\'abord !',
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
      intro: 'Mia travaille sur le niveau du phare de Lumieres du Port. Le phare projette un cone de lumiere sur le port, et Lumi doit se cacher dans l\'ombre. "Je dois calculer jusqu\'ou le cone de lumiere s\'etend a un angle donne", dit Mia. Tim pointe un triangle rectangle forme par le cone de lumiere et le sol. "C\'est la trigonometrie — sinus, cosinus et tangente."',
      challenge: 'Mia a besoin de la portee du cone de lumiere a differents angles pour programmer les zones d\'ombre.',
      outro: 'Le phare tourne lentement, et le cone de lumiere balaie le port. Grace au sinus et au cosinus, le code de Mia calcule en temps reel quelles zones sont eclairees. Lumi se faufile d\'ombre en ombre — le niveau est devenu vraiment palpitant !',
    },
    objectives: {
      sin_cos_tan: 'Appliquer avec assurance sinus, cosinus et tangente dans les triangles rectangles',
      unit_circle: 'Comprendre le cercle trigonometrique et y lire les valeurs',
      angle_calculations: 'Calculer des angles et des longueurs de cotes avec les fonctions trigonometriques',
      real_problems: 'Resoudre des problemes concrets avec la trigonometrie (hauteurs, distances, angles)',
    },
    explanation: {
      intro: 'La trigonometrie relie les angles aux longueurs des cotes. Dans tout triangle rectangle, trois rapports fondamentaux s\'appliquent — nommes d\'apres l\'angle $\\alpha$ considere :',
      mia_tip: 'Mon moyen mnemotechnique : "SOH CAH TOA" — Sinus = Oppose sur Hypotenuse, Cosinus = Adjacent sur Hypotenuse, Tangente = Oppose sur Adjacent. Ca a l\'air bete, mais on ne l\'oublie jamais !',
      unit_circle: 'Le cercle trigonometrique a un rayon de 1 et son centre a l\'origine. Pour chaque angle $\\alpha$, il fournit directement les valeurs : la coordonnee $x$ est $\\cos(\\alpha)$, la coordonnee $y$ est $\\sin(\\alpha)$. Cela signifie que l\'on a toujours :',
      special_angles: 'Tu devrais connaitre certains angles par coeur : $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Astuce : sur le cercle trigonometrique, tu peux lire ces valeurs geometriquement.',
    },
    concepts: {
      sine: {
        title: 'Sinus',
        desc: 'Le rapport du cote oppose a l\'hypotenuse. Sur le cercle trigonometrique, $\\sin(\\alpha)$ correspond a la coordonnee $y$ du point sur le cercle.',
      },
      cosine: {
        title: 'Cosinus',
        desc: 'Le rapport du cote adjacent a l\'hypotenuse. Sur le cercle trigonometrique, $\\cos(\\alpha)$ correspond a la coordonnee $x$. Cosinus et sinus sont decales de $90°$.',
      },
      tangent: {
        title: 'Tangente',
        desc: 'Le rapport du cote oppose au cote adjacent — ou de maniere equivalente $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideal pour les pentes et les angles d\'inclinaison.',
      },
      unit_circle: {
        title: 'Cercle trigonometrique',
        desc: 'Un cercle de rayon 1. Chaque point sur le cercle a les coordonnees $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Cela permet de definir sin et cos pour tous les angles — pas seulement les angles aigus.',
      },
    },
    examples: {
      height_tan: {
        title: 'Calculer une hauteur avec la tangente',
        context: 'Mia mesure l\'angle vers le sommet du phare : $35°$. La distance au phare est de $50\\,\\text{m}$.',
        step1: 'Schema : la distance est le cote adjacent, la hauteur cherchee est le cote oppose. Donc tangente :',
        step2: 'Isoler la hauteur $h$ — multiplier les deux cotes par $50\\,\\text{m}$ :',
        step3: 'Calculatrice (mode DEG !) : substituer $\\tan(35°) \\approx 0{,}7002$ et calculer :',
        mia_comment: 'Dans le jeu, ca tourne en temps reel : l\'angle du cone de lumiere change, et mon code calcule instantanement la nouvelle portee. La tangente est parfaite pour ca !',
      },
      unit_circle: {
        title: 'Lire des valeurs sur le cercle trigonometrique',
        context: 'Tim veut montrer a Mia comment fonctionne le cercle trigonometrique — avec l\'exemple de $60°$.',
        step1: 'Convertir l\'angle (optionnel) : $60°$ correspond a $\\frac{\\pi}{3}$ en radians :',
        step2: 'Lire la valeur du sinus — la coordonnee $y$ du point sur le cercle trigonometrique :',
        step3: 'Lire la valeur du cosinus — la coordonnee $x$ :',
        step4: 'Le point sur le cercle trigonometrique a donc les coordonnees :',
        mia_comment: 'Sur le cercle trigonometrique, je vois sin et cos comme des longueurs. C\'est beaucoup plus intuitif que de simples nombres dans un tableau !',
      },
    },
    realworld: {
      compass: {
        title: 'Navigation et GPS',
        desc: 'Ton smartphone calcule les directions avec la trigonometrie. La fonction atan2 convertit des coordonnees $x$ et $y$ en un angle — c\'est comme ca que Google Maps sait dans quelle direction tu dois aller.',
      },
      building_height: {
        title: 'Mesurer la hauteur des batiments',
        desc: 'Les architectes et geometres mesurent la hauteur des batiments sans monter sur le toit. Avec un rapporteur et la tangente, la distance et l\'angle suffisent amplement.',
      },
      music: {
        title: 'Sons et ondes sonores',
        desc: 'Chaque son est une onde sinusoidale. Le la du diapason a 440 vibrations par seconde — decrit par $f(t) = \\sin(880\\pi t)$. La musique est de la trigonometrie appliquee !',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Sinus et cosinus confondus',
        correct: 'Sinus = Oppose / Hypotenuse',
        why: 'Le sinus correspond au cote oppose (le cote en face de l\'angle), le cosinus au cote adjacent (le cote a cote de l\'angle). Si tu les confonds, tu obtiens la mauvaise valeur.',
        mia_warning: 'Ca m\'arrive encore parfois ! Je dessine le triangle et j\'etiquette les cotes par rapport a l\'angle. Ensuite je vois immediatement lequel est oppose et lequel est adjacent.',
      },
      deg_rad: {
        wrong: 'Mauvais mode d\'angle sur la calculatrice',
        correct: 'Toujours verifier le mode DEG pour les valeurs en degres',
        why: 'En mode RAD, la calculatrice interprete $90$ comme $90$ radians (environ $5156°$), pas comme $90°$. $\\sin(90°) = 1$, mais $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Resultat : completement faux.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Lumieres du Port va avoir un mode multijoueur. Mia teste les serveurs avec 10 joueurs — tout tourne bien. Mais Tim previent : "Que se passe-t-il avec 100 ? Avec 1000 ? Si le jeu devient viral, le nombre de joueurs pourrait doubler tous les quelques jours." Mia fait le calcul et est choquee : la croissance exponentielle est bien plus rapide qu\'on ne le pense.',
      challenge: 'La charge serveur ne croit pas lineairement avec les joueurs, mais exponentiellement. Mia doit predire quand les serveurs seront surcharges.',
      outro: 'Mia a construit un modele qui predit l\'evolution du nombre de joueurs. Grace a la fonction exponentielle, elle sait maintenant : si le temps de doublement est de 3 jours, elle aura besoin de 32 fois plus de capacite serveur apres 2 semaines. "Mieux vaut evoluer tot que planter tard", decide-t-elle.',
    },
    objectives: {
      exponential_functions: 'Reconnaitre les fonctions exponentielles et les distinguer des fonctions lineaires',
      growth_factor: 'Determiner et interpreter le facteur de croissance a partir de pourcentages',
      half_life: 'Calculer et appliquer la demi-vie et le temps de doublement',
      model_real_world: 'Modeliser des processus reels de croissance et de decroissance avec des fonctions exponentielles',
    },
    explanation: {
      intro: 'Avec la croissance lineaire, le meme montant s\'ajoute a chaque etape. Avec la croissance exponentielle, chaque etape multiplie par le meme facteur. Ca semble similaire — mais conduit a des resultats completement differents :',
      growth_factor: 'Le facteur de croissance $b$ te dit tout : si quelque chose croit de $p\\%$ par unite de temps, le facteur est superieur a 1. Si quelque chose diminue de $p\\%$ (decroissance), il est inferieur a 1 :',
      mia_tip: 'Les fonctions lineaires ajoutent, les fonctions exponentielles multiplient. Avec 10% de croissance par jour, le facteur est $b = 1{,}10$ — apres 7 jours c\'est $1{,}10^7 \\approx 1{,}95$, presque un doublement ! Ca m\'a surprise lors de la planification des serveurs.',
      half_life: 'La demi-vie $t_H$ est le temps apres lequel il reste la moitie. Elle est constante — peu importe la quantite de depart. C\'est ce qui est special dans la decroissance exponentielle :',
      doubling_time: 'Le pendant pour la croissance : le temps de doublement $t_V$ te dit combien de temps il faut pour que la valeur double. Il reste aussi constant :',
    },
    concepts: {
      exponential_function: {
        title: 'Fonction exponentielle',
        desc: 'La forme generale : $a$ est la valeur initiale, $b$ le facteur de croissance, $t$ le temps. L\'essentiel : la variable est dans l\'exposant — c\'est ce qui la distingue des fonctions puissance.',
      },
      growth_factor: {
        title: 'Facteur de croissance',
        desc: 'Pour $p\\%$ d\'augmentation : $b = 1 + \\frac{p}{100}$. Exemple : 5% de croissance donne $b = 1{,}05$. Pour 12% de diminution : $b = 0{,}88$.',
      },
      half_life: {
        title: 'Demi-vie',
        desc: 'Le temps necessaire pour que la valeur soit divisee par deux. Typique pour la desintegration radioactive, les medicaments dans le corps ou la decharge de batterie. La demi-vie est independante de la valeur de depart.',
      },
      euler_base: {
        title: 'Fonction exponentielle naturelle',
        desc: 'La base $e \\approx 2{,}718$ est speciale : la fonction $e^x$ est sa propre derivee. Avec $k > 0$ elle croit, avec $k < 0$ elle decroit. Standard en sciences naturelles.',
      },
    },
    examples: {
      bacteria: {
        title: 'Croissance bacterienne',
        context: 'Une culture bacterienne commence avec 500 bacteries et double chaque heure.',
        step1: 'Identifier la valeur initiale et le facteur de croissance — doublement signifie facteur 2 :',
        step2: 'Etablir la fonction exponentielle — $t$ compte les heures :',
        step3: 'Substituer $t = 5$ (apres 5 heures) : $2^5 = 32$ :',
        step4: 'Apres 5 heures, il y a 16 000 bacteries :',
        mia_comment: 'De 500 a 16 000 en seulement 5 heures ! Ca montre pourquoi la croissance exponentielle est si surprenante. Avec les serveurs c\'est pareil — le nombre de joueurs peut croitre plus vite qu\'on ne peut commander de nouveaux serveurs.',
      },
      radioactive: {
        title: 'Desintegration radioactive',
        context: 'Un medicament a une demi-vie de 8 jours. Quantite initiale : 200 g.',
        step1: 'Noter la demi-vie et la valeur initiale :',
        step2: 'Etablir la formule de decroissance avec $t_H = 8$ :',
        step3: 'Substituer 24 jours — c\'est exactement 3 demi-vies ($\\frac{24}{8} = 3$) :',
        step4: 'Apres 24 jours, il ne reste que 25 g — un huitieme de la valeur initiale :',
        mia_comment: 'Apres chaque demi-vie, la quantite est divisee par deux : $200 \\to 100 \\to 50 \\to 25$. C\'est toujours ainsi, que tu partes de 200 g ou de 2 tonnes.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Videos TikTok virales',
        desc: 'Une video virale commence avec 100 vues. Si chaque spectateur la montre a 1,8 personnes, les chiffres explosent : apres 10 tours, il y a deja plus de 35 000 vues. Les algorithmes amplifient encore cet effet.',
      },
      battery: {
        title: 'Decharge de batterie',
        desc: 'La batterie de ton telephone perd environ 5% de sa charge par heure. Apres 14 heures, il reste environ la moitie — ce n\'est pas une baisse lineaire, mais une decroissance exponentielle.',
      },
      pandemic: {
        title: 'Propagation d\'une pandemie',
        desc: 'Le COVID-19 a montre ce que signifie "croissance exponentielle" : sans mesures, le nombre de cas doublait tous les 3 jours. Apres un mois, cela ferait un facteur de $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Utiliser un modele lineaire au lieu d\'exponentiel',
        correct: 'Variation en pourcentage = fonction exponentielle',
        why: '"5% de croissance par an" n\'est PAS $+5$ par an, mais $\\cdot 1{,}05$ par an. Avec un modele lineaire, le montant croit de facon constante ; avec un modele exponentiel, il croit de plus en plus vite.',
        mia_warning: 'J\'avais d\'abord calcule $\\text{Joueurs}(t) = 100 + 50t$. Les vrais chiffres etaient 3 fois plus eleves apres une semaine ! La croissance exponentielle est presque toujours sous-estimee.',
      },
      wrong_growth_factor: {
        wrong: 'Utiliser le pourcentage directement comme facteur',
        correct: 'Facteur = $1 + \\frac{p}{100}$',
        why: 'Avec 3% de croissance, le facteur est $1{,}03$, pas $3$ ! Avec $b = 3$, la valeur triplerait au lieu de croitre de 3%. Toujours calculer $1 + \\frac{p}{100}$.',
      },
    },
  },
};
