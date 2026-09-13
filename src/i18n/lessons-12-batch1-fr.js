export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'Le système de particules de « Hafenlichter 3D » est grandiose — des étincelles jaillissent, le brouillard ondule, le feu flamboie. Mais Kai a un problème de performance : des milliers de particules en même temps font transpirer le GPU. « Je dois calculer à quelle vitesse les particules s\'estompent pour pouvoir les retirer de la mémoire à temps », explique-t-il à Mia. La réponse se trouve dans la fonction $e$ et sa fonction réciproque, le logarithme népérien — les outils pour tout ce qui croît ou décroît de façon exponentielle.',
      challenge: 'Kai doit modéliser mathématiquement la durée de vie des particules : à quelle vitesse une étincelle s\'estompe-t-elle ? Quand une particule de fumée est-elle assez transparente pour être supprimée ? Pour cela, il a besoin de la règle de dérivation des fonctions composées pour les fonctions $e$, des dérivées de $\\ln$ et de la résolution d\'équations de décroissance.',
      outro: 'Avec des fonctions $e$ composées et des dérivées de $\\ln$, Kai a construit un système de particules intelligent : chaque étincelle suit une courbe de décroissance précise, chaque particule de fumée est recyclée exactement au moment où son opacité passe sous le seuil de perception. « La règle des fonctions composées, c\'est pour ainsi dire mon optimiseur de performance », dit Kai en souriant. « Le GPU me remercie avec 60 FPS au lieu de 30. » Mia ajoute : « Et le meilleur — les mêmes mathématiques décrivent aussi la désintégration radioactive et les courbes de charge des condensateurs. »',
    },
    objectives: {
      advanced_e_properties: 'Dériver des fonctions $e$ composées avec la règle des fonctions composées : $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Maîtriser la dérivée de $\\ln(g(x))$ et l\'utiliser pour les études de fonctions',
      composite_exp_functions: 'Analyser des produits de polynômes et de fonctions $e$ (extremums, points d\'inflexion)',
      differential_equations: 'Comprendre des équations différentielles simples du type $f\'(t) = k \\cdot f(t)$ et établir des modèles de décroissance',
    },
    explanation: {
      intro: 'En classe 11, tu as appris les bases de $e^x$ et de $\\ln(x)$. Maintenant, ça devient sérieux : nous dérivons des fonctions $e$ composées, analysons des courbes avec $\\ln$ et résolvons des équations de décroissance. La clé, c\'est la règle des fonctions composées — quand l\'exposant ne contient pas seulement $x$, mais toute une fonction $g(x)$, la dérivée extérieure donne $e^{g(x)}$ et la dérivée intérieure $g\'(x)$ s\'ajoute comme facteur :',
      ln_derivative: 'Tout aussi élégant : la dérivée de $\\ln(g(x))$ avec la règle des fonctions composées. Le logarithme népérien « retourne la fonction » — la dérivée intérieure se trouve au numérateur, la fonction intérieure elle-même au dénominateur :',
      kai_tip: 'Dans mon moteur 3D, les fonctions $e$ apparaissent partout : décroissance des particules, densité du brouillard, fondu audio. L\'astuce est toujours la même — la règle des fonctions composées. Quand je dérive $e^{-0{,}5t^2}$ pour une courbe de Gauss, la fonction intérieure est $g(t) = -0{,}5t^2$ et la dérivée intérieure $g\'(t) = -t$. On remplace, c\'est fini. Une fois que tu maîtrises ce schéma, ça devient automatique !',
      integration: 'Pour l\'intégration, le processus se fait à l\'envers. Pour les fonctions exponentielles simples : le facteur de l\'exposant passe au dénominateur. Et la célèbre règle du $\\frac{1}{x}$ mène directement au $\\ln$ :',
      decay_model: 'La décroissance exponentielle est LE modèle standard pour les processus dont le taux de variation est proportionnel à la valeur actuelle : $f\'(t) = -\\lambda \\cdot f(t)$. La solution est toujours une fonction $e$ avec un exposant négatif. La demi-vie $t_{1/2}$ indique au bout de combien de temps il ne reste plus que la moitié de la valeur initiale :',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Règle des fonctions composées pour les fonctions $e$',
        desc: 'Pour $f(x) = e^{g(x)}$, la fonction extérieure est $e^u$ (dérivée : $e^u$) et la fonction intérieure est $g(x)$. Résultat : la fonction $e$ reste telle quelle, multipliée par la dérivée intérieure. Exemple : $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Dérivée de $\\ln(g(x))$',
        desc: 'La règle des fonctions composées pour le logarithme produit une fraction : la dérivée intérieure divisée par la fonction intérieure. C\'est particulièrement utile quand $g(x)$ est un polynôme — par exemple $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Important : l\'ensemble de définition est limité par $g(x) > 0$.',
      },
      exp_integration: {
        title: 'Intégration logarithmique',
        desc: 'Quand une fonction à intégrer a la forme $\\frac{f\'(x)}{f(x)}$, la primitive est immédiatement $\\ln|f(x)| + C$. C\'est l\'inverse de la dérivée de $\\ln$ et l\'une des astuces d\'intégration les plus importantes. Exemple : $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Modéliser la décroissance des particules',
        context: 'Dans le système de particules de Kai, 5000 étincelles démarrent en même temps. Leur nombre diminue de façon exponentielle — Kai veut calculer le taux de décroissance et la demi-vie.',
        step1: 'Établir le modèle de décroissance — $N_0 = 5000$ particules, constante de décroissance $\\lambda = 0{,}03\\,\\text{s}^{-1}$ :',
        step2: 'Dériver avec la règle des fonctions composées — fonction intérieure $g(t) = -0{,}03t$, dérivée intérieure $g\'(t) = -0{,}03$ :',
        step3: 'Calculer le taux initial — à $t = 0$, 150 particules disparaissent par seconde :',
        step4: 'Déterminer la demi-vie — résoudre $N(t_{1/2}) = \\frac{N_0}{2}$ avec $\\ln$ :',
        kai_comment: 'Au bout de 23 secondes, la moitié des particules a disparu — je peux donc libérer de la mémoire dès avant la prochaine explosion. Dans le moteur, je place le seuil de suppression à $5\\%$ d\'opacité, c\'est-à-dire environ $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Étude de fonction avec une fonction $e$',
        context: 'Kai modélise la luminosité d\'un éclair lumineux : d\'abord elle augmente, puis elle diminue. La courbe de luminosité a la forme $f(x) = x^2 \\cdot e^{-x}$ — une « fonction flash » typique.',
        step1: 'Fonction donnée — produit d\'un polynôme et d\'une fonction $e$ décroissante :',
        step2: 'Dérivée avec la règle du produit : $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — pour le deuxième facteur, nous avons besoin de la règle des fonctions composées :',
        step3: 'Zéros de la dérivée : $e^{-x} > 0$ toujours, donc seul $x(2-x) = 0$ décide :',
        step4: 'Déterminer le maximum — calculer la valeur de la fonction en $x = 2$ :',
        kai_comment: 'Cette courbe « montée puis descente » est parfaite pour les effets de lumière. En $x = 0$, tout est sombre, en $x = 2$ la luminosité est maximale, ensuite elle s\'éteint en douceur. Dans mon shader, j\'utilise exactement cette fonction pour le muzzle flash et les éclairs d\'explosion !',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Systèmes de particules dans les moteurs 3D',
        desc: 'Chaque étincelle, chaque traînée de fumée, chaque feu dans un jeu vidéo suit une courbe de décroissance exponentielle $N(t) = N_0 \\cdot e^{-\\lambda t}$. La constante de décroissance $\\lambda$ détermine à quelle vitesse les particules s\'estompent. Dans Unity et Unreal Engine, c\'est exactement ce paramètre que tu règles quand tu configures « Lifetime » et « Fade ».',
      },
      signal_processing: {
        title: 'Traitement audio et atténuation du signal',
        desc: 'Quand tu entends un effet de réverbération dans GarageBand ou dans un outil de DJ, le son s\'éteint de façon exponentielle : $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. La fonction $e$ contrôle le volume, le $\\sin$ l\'oscillation. Les signaux Bluetooth et la portée du Wi-Fi suivent aussi ce modèle — c\'est pourquoi le streaming devient saccadé à mesure que tu t\'éloignes du routeur.',
      },
      learning_curve: {
        title: 'Courbe d\'apprentissage et progression des compétences',
        desc: 'À quelle vitesse apprends-tu un nouveau jeu ? La courbe d\'apprentissage $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ décrit comment les compétences augmentent vite au début, puis se rapprochent d\'un maximum. Les game designers utilisent ce modèle pour concevoir les courbes de difficulté — et ton cerveau suit exactement cette fonction quand tu apprends du vocabulaire ou t\'entraînes à un instrument.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Dérivée intérieure oubliée : $(e^{3x})\' = e^{3x}$',
        correct: 'Appliquer la règle des fonctions composées : $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'Dès que l\'exposant contient plus que $x$, il FAUT utiliser la règle des fonctions composées. Ici, la fonction intérieure est $g(x) = 3x$ avec $g\'(x) = 3$. Ce facteur ne doit pas manquer !',
        kai_warning: 'Dans mon shader, j\'avais un jour dérivé $e^{-0{,}5t^2}$ en oubliant le facteur $-t$. Résultat : des particules qui ne changeaient jamais — comme de la fumée gelée. Depuis, je vérifie à chaque fois : l\'exposant contient-il plus que $x$ ? Alors règle des fonctions composées !',
      },
      ln_negative: {
        wrong: 'Valeur absolue oubliée : $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Correct avec la valeur absolue : $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'La fonction $\\frac{1}{x}$ est aussi définie pour des valeurs négatives de $x$, mais $\\ln(x)$ seulement pour $x > 0$. La valeur absolue garantit que la primitive est valable sur tout l\'ensemble de définition. Dans les intégrales définies avec des bornes positives, tu peux omettre les barres — dans les intégrales indéfinies, jamais !',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Pour « Hafenlichter 3D », Kai construit un générateur procédural de niveaux : ponts, tunnels et maisons doivent naître de courbes mathématiques que l\'on fait tourner autour d\'axes. « Imaginez : je définis un profil et je le fais tourner — et j\'obtiens une colonne, une coupole ou une coque de bateau », s\'enthousiasme Kai. Mais comment calculer le volume exact de ces corps 3D ? La réponse : les volumes de révolution, l\'intégration par parties et quelques techniques d\'intégration élégantes.',
      challenge: 'Kai doit calculer le volume d\'objets 3D obtenus par rotation de courbes. En plus, il a besoin de l\'intégration par parties pour des formules d\'éclairage complexes et doit vérifier si certaines intégrales convergent vraiment.',
      outro: 'Le générateur de niveaux fonctionne : Kai fait tourner des profils de courbes autour d\'axes et obtient des corps 3D parfaits dont le volume est calculé exactement. « L\'intégration par parties a été la clé pour les intégrales d\'éclairage », raconte-t-il à Amir, « et les intégrales impropres me montrent quand un effet de lumière a une énergie totale finie — même s\'il porte théoriquement à l\'infini. » Mia approuve : « Les ingénieurs utilisent les mêmes mathématiques pour dimensionner des réservoirs, et les physiciens pour calculer l\'énergie des ondes. »',
    },
    objectives: {
      integration_techniques: 'Appliquer avec assurance l\'intégration par parties et la substitution',
      rotation_volumes: 'Calculer des volumes de révolution autour de l\'axe des $x$ avec $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Vérifier la convergence d\'intégrales impropres et les calculer',
      partial_integration: 'Utiliser de manière ciblée la méthode d\'intégration par parties quand il faut intégrer des produits',
    },
    explanation: {
      intro: 'En classe 11, tu as découvert les intégrales définies comme des aires. Maintenant, trois nouvelles techniques s\'ajoutent. La première est l\'intégration par parties — l\'« inverse » de la règle du produit. Quand tu dois intégrer un produit comme $x \\cdot e^x$, tu le décomposes en $u$ et $v\'$ :',
      substitution: 'La deuxième technique est la substitution — l\'« inverse » de la règle des fonctions composées en dérivation. Quand une fonction « se cache dans une autre », tu remplaces la fonction intérieure par une nouvelle variable :',
      kai_tip: 'Mon astuce pour l\'intégration par parties : « LIATE » — Logarithme, fonctions trigonométriques Inverses, Algébrique, Trigonométrique, Exponentielle. C\'est l\'ordre dans lequel tu choisis $u$. Donc pour $\\int x \\cdot e^x\\,\\mathrm{d}x$, on prend $u = x$ (algébrique) et $v\' = e^x$ (exponentielle). Pour $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$, on prend $u = \\ln(x)$ et $v\' = x$. Ça marche presque toujours !',
      rotation_volume: 'Maintenant, on passe en trois dimensions : quand tu fais tourner le graphe de $f(x)$ autour de l\'axe des $x$, tu obtiens un solide de révolution. Pour calculer son volume, tu imagines que le corps est composé d\'une infinité de fins disques — chaque disque a pour rayon $f(x)$ :',
      improper: 'Que se passe-t-il quand une borne d\'intégration vaut $\\infty$ ? Ou quand la fonction à intégrer n\'est pas bornée en un point ? On parle alors d\'intégrales impropres. Tu remplaces le point problématique par une limite et tu vérifies si on obtient une valeur finie :',
    },
    concepts: {
      partial_integration: {
        title: 'Intégration par parties',
        desc: 'L\'inverse de la règle du produit : tu décomposes la fonction à intégrer en $u$ (qu\'on dérive) et $\\mathrm{d}v$ (qu\'on intègre). Objectif : la nouvelle intégrale $\\int v\\,\\mathrm{d}u$ doit être plus simple que l\'intégrale de départ. Application typique : produits d\'un polynôme et d\'une fonction $e$, ou d\'un polynôme et d\'une fonction trigonométrique.',
      },
      rotation_volume: {
        title: 'Volume de révolution',
        desc: 'Le graphe d\'une fonction qui tourne autour de l\'axe des $x$ produit un corps 3D. Le volume est la somme d\'une infinité de disques de rayon $f(x)$ et d\'épaisseur $\\mathrm{d}x$. Chaque disque a le volume $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$ — additionnés (intégrés), ils donnent la formule.',
      },
      improper_integral: {
        title: 'Intégrales impropres',
        desc: 'Intégrales avec $\\infty$ comme borne ou avec une fonction à intégrer non bornée. Tu remplaces le point problématique par une variable et tu calcules la limite. Si la limite existe et est finie, l\'intégrale est dite convergente — sinon divergente. Grand classique : $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ converge, mais $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ diverge.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Solide de révolution pour le level design',
        context: 'Kai veut générer une colonne dont le profil suit la courbe $f(x) = \\sqrt{x}$. Entre $x = 0$ et $x = 4$, la courbe tourne autour de l\'axe des $x$ — quel est le volume de la colonne ?',
        step1: 'Définir le profil — la fonction racine carrée sur l\'intervalle $[0;\\,4]$ :',
        step2: 'Poser la formule du volume de révolution — mettre $f(x)$ au carré et placer $\\pi$ devant :',
        step3: 'Trouver la primitive et remplacer les bornes :',
        step4: 'Résultat — la colonne a un volume de $8\\pi$ unités de volume :',
        kai_comment: 'C\'est exactement la formule qu\'utilise mon générateur procédural ! Je définis des profils de courbes, je les fais tourner et je connais immédiatement le volume — important pour les simulations physiques, pour que les objets aient le bon poids.',
      },
      partial_int: {
        title: 'Intégration par parties pour l\'éclairage',
        context: 'Dans le shader de calcul de la lumière de Kai apparaît l\'intégrale $\\int x \\cdot e^x\\,\\mathrm{d}x$ — un produit qu\'on ne peut pas intégrer directement.',
        step1: 'Choisir la décomposition : $u = x$ (devient plus simple quand on le dérive), $v\' = e^x$ (facile à intégrer) :',
        step2: 'Déterminer les dérivées et les primitives :',
        step3: 'Remplacer dans la formule — la nouvelle intégrale n\'est plus que $\\int e^x\\,\\mathrm{d}x$ :',
        step4: 'Simplifier jusqu\'au bout — la mise en facteur donne une forme élégante :',
        kai_comment: 'Le moment où la nouvelle intégrale est plus simple que l\'ancienne — c\'est le moment de satisfaction de l\'intégration par parties. Si ça devient plus compliqué, tu as mal choisi $u$ et $v\'$. Alors, il suffit de les échanger !',
      },
    },
    realworld: {
      '3d_printing': {
        title: 'Impression 3D et calcul de volume en CAO',
        desc: 'Chaque imprimante 3D doit savoir de combien de matériau elle a besoin. Pour les pièces à symétrie de révolution (vases, tubes, buses), le logiciel de découpage (slicer) calcule le volume avec exactement cette formule de révolution. Les logiciels de CAO comme Fusion 360 contiennent aussi du calcul intégral — quand tu fais tourner une section, le logiciel calcule $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Atténuation de la lumière dans les moteurs de jeu',
        desc: 'Quelle quantité totale de lumière une scène reçoit-elle d\'une source lumineuse ponctuelle ? L\'intensité diminue selon $I(r) = I_0 \\cdot e^{-\\alpha r}$. L\'intégrale impropre $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ montre : l\'énergie totale est finie ! C\'est pourquoi les moteurs de jeu peuvent simuler des lumières à portée limitée sans être physiquement faux.',
      },
      terrain_volume: {
        title: 'Génération de terrain et terrassement',
        desc: 'Dans les projets de construction de routes et dans les jeux de type Minecraft, il faut calculer le volume de paysages vallonnés. La formule $V = \\iint h(x,y)\\,\\mathrm{d}A$ additionne la hauteur sur toute la surface — une intégrale à deux dimensions. Les ingénieurs du génie civil calculent ainsi les volumes de déblais, les développeurs de jeux la quantité de données des maillages de terrain.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Carré oublié : $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Correctement mis au carré : $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Chaque disque a l\'aire $\\pi r^2$ avec $r = f(x)$. Sans le carré, tu ne calcules pas l\'aire d\'un disque, mais quelque chose de complètement différent. Moyen mnémotechnique : « pi r carré » — le carré fait partie de la formule du disque !',
        kai_warning: 'J\'ai fait cette erreur une fois pendant une game jam — ma colonne n\'avait qu\'une fraction du volume correct et s\'est effondrée dans la simulation physique. Depuis, j\'écris toujours la formule en grand sur mon écran : $V = \\pi \\int [f(x)]^2$ !',
      },
      improper_no_limit: {
        wrong: 'Remplacer directement par $\\infty$ au lieu de calculer une limite',
        correct: 'Formuler correctement la limite et vérifier la convergence',
        why: '$\\infty$ n\'est pas un nombre qu\'on peut remplacer dans une formule ! Tu dois toujours calculer la limite $\\lim_{b \\to \\infty}$ et vérifier si elle existe. Sinon, on ne voit pas facilement qu\'une intégrale diverge — comme $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, qui n\'a pas de valeur finie bien que la fonction décroisse.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: 'Le monde 3D de « Hafenlichter 3D » prend forme : grues du port, façades d\'immeubles, surfaces d\'eau — tout est fait de triangles, et chaque triangle se trouve dans un plan. « Pour un éclairage réaliste, je dois calculer le vecteur normal de chaque surface », explique Kai. « Et pour la détection de collisions, j\'ai besoin des points d\'intersection de droites avec des plans. » Bienvenue dans la géométrie analytique de l\'espace — les mathématiques derrière chaque moteur 3D.',
      challenge: 'Kai doit établir des équations de plans à partir de trois points, calculer des vecteurs normaux avec le produit vectoriel, trouver des points d\'intersection droite-plan et déterminer des distances entre objets — tout cela en temps réel pour son moteur de jeu.',
      outro: 'Le système de détection de collisions de Kai fonctionne parfaitement : les projectiles touchent les murs, les personnages tiennent debout sur le sol, et l\'éclairage calcule pour chaque surface l\'incidence parfaite de la lumière grâce aux vecteurs normaux. « Le produit vectoriel est l\'outil que j\'utilise le plus », dit Kai. « Deux vecteurs directeurs en entrée, un vecteur normal en sortie — et je sais tout de suite comment la surface est orientée dans l\'espace. » Amir ajoute : « Et la formule de distance vérifie si un joueur est assez près d\'un objet pour le ramasser. »',
    },
    objectives: {
      plane_equations: 'Établir des équations de plans sous forme paramétrique, normale et cartésienne, et passer d\'une forme à l\'autre',
      line_plane_intersection: 'Calculer des points d\'intersection de droites avec des plans et déterminer les positions relatives',
      distances_3d: 'Calculer des distances dans l\'espace : point-plan, point-droite et droite-droite',
      cross_product: 'Maîtriser le produit vectoriel et l\'utiliser pour calculer des vecteurs normaux',
    },
    explanation: {
      intro: 'Tu peux décrire des plans dans l\'espace à trois dimensions de plusieurs façons. La forme paramétrique part d\'un point d\'appui $\\vec{a}$ et engendre le plan avec deux vecteurs directeurs $\\vec{u}$ et $\\vec{v}$. On peut atteindre chaque point du plan avec des valeurs adaptées de $r$ et $s$ :',
      normal_form: 'La forme normale est souvent plus élégante : un vecteur $\\vec{n}$ perpendiculaire au plan (le vecteur normal) et un point $\\vec{a}$ du plan suffisent pour décrire tout le plan. On peut en déduire la forme cartésienne — une seule équation avec $x_1$, $x_2$ et $x_3$ :',
      kai_tip: 'Dans mon moteur 3D, j\'enregistre chaque surface sous forme cartésienne — trois coefficients et une constante, c\'est tout. Pour le rendu, j\'ai besoin du vecteur normal pour l\'éclairage ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$ — le produit scalaire avec le vecteur lumière donne la luminosité). Et pour la physique, j\'ai besoin de points d\'intersection et de distances. Les trois formes sont utiles — chacune pour un usage différent !',
      cross_product: 'Le produit vectoriel $\\vec{u} \\times \\vec{v}$ donne un vecteur perpendiculaire aux deux vecteurs de départ — parfait pour calculer le vecteur normal à partir de deux vecteurs directeurs. Attention : l\'ordre est important (anticommutatif) !',
      distance_point_plane: 'La distance d\'un point $P$ à un plan $E$ se calcule élégamment avec la forme normale de Hesse. Tu remplaces les coordonnées du point dans l\'équation cartésienne, tu prends la valeur absolue et tu divises par la longueur du vecteur normal :',
    },
    concepts: {
      plane_equation: {
        title: 'Équation cartésienne d\'un plan',
        desc: 'La représentation la plus compacte d\'un plan : $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. Les coefficients $n_1, n_2, n_3$ sont les composantes du vecteur normal, $d$ s\'obtient en remplaçant par un point connu du plan. Chaque point $(x_1, x_2, x_3)$ qui vérifie l\'équation appartient au plan.',
      },
      cross_product: {
        title: 'Produit vectoriel',
        desc: 'Le produit vectoriel de deux vecteurs $\\vec{u}$ et $\\vec{v}$ donne un nouveau vecteur $\\vec{n}$ perpendiculaire aux deux. Sa norme $|\\vec{u} \\times \\vec{v}|$ correspond à l\'aire du parallélogramme qu\'ils engendrent. Important : $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ — l\'ordre détermine le sens !',
      },
      distance_formula: {
        title: 'Distance point-plan',
        desc: 'La plus courte distance d\'un point $P$ à un plan est la longueur de la perpendiculaire abaissée de $P$ sur le plan. La formule $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ calcule cette distance directement à partir de la forme cartésienne. La valeur absolue au numérateur est essentielle — sans elle, on pourrait obtenir une « distance » négative.',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Plan défini par trois sommets',
        context: 'Kai a dans son monde de jeu un triangle de sommets $A(1|0|2)$, $B(3|1|0)$ et $C(0|4|1)$. Il a besoin de l\'équation du plan pour l\'éclairage et la détection de collisions.',
        step1: 'Trois points donnés — en déduire deux vecteurs directeurs :',
        step2: 'Calculer les vecteurs directeurs $\\vec{u} = \\overrightarrow{AB}$ et $\\vec{v} = \\overrightarrow{AC}$ :',
        step3: 'Calculer en détail le produit vectoriel $\\vec{n} = \\vec{u} \\times \\vec{v}$ — composante par composante selon la formule :',
        step4: 'Établir la forme cartésienne — le vecteur normal donne les coefficients, $d$ s\'obtient en remplaçant par $A$ : $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$ :',
        kai_comment: 'Dans le moteur, c\'est exactement ce qui se passe pour chaque triangle : trois sommets en entrée, calcul du produit vectoriel, plan enregistré. Le vecteur normal détermine en même temps dans quelle direction la surface « regarde » — essentiel pour l\'éclairage et le backface culling !',
      },
      collision_detection: {
        title: 'Intersection droite-plan (raycast)',
        context: 'Un projectile vole en ligne droite dans l\'espace. Kai doit vérifier s\'il touche un mur et où — c\'est un raycast : le point d\'intersection d\'une droite et d\'un plan.',
        step1: 'Droite (trajectoire) et plan (mur) donnés :',
        step2: 'Remplacer la droite dans l\'équation du plan — les composantes de $\\vec{x}(t)$ pour $x_1, x_2, x_3$ :',
        step3: 'Résoudre en $t$ — regrouper et simplifier :',
        step4: 'Calculer le point d\'intersection — remplacer $t = 0$ dans l\'équation de la droite :',
        kai_comment: 'Pour $t = 0$, la droite touche immédiatement le plan — le projectile part donc directement du mur. Dans le moteur, je vérifie en plus $t > 0$ (vers l\'avant) et $0 \\leq t \\leq t_{\\max}$ (portée). Ainsi, j\'élimine les impacts derrière le joueur ou hors de portée.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: 'Rendu 3D et éclairage',
        desc: 'Chaque moteur 3D calcule l\'éclairage avec le produit scalaire du vecteur normal et de la direction de la lumière : $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Plus l\'angle entre la lumière et la normale de la surface est petit, plus la surface est claire. C\'est le modèle d\'éclairage de Lambert — la base d\'une lumière réaliste dans les jeux, les films et les applis de réalité augmentée.',
      },
      architecture: {
        title: 'Architecture et logiciels BIM',
        desc: 'Dans les logiciels d\'architecture comme AutoCAD ou Revit, les toits, les murs et les rampes sont modélisés comme des plans. La forme cartésienne décrit la position dans l\'espace, le vecteur normal montre l\'orientation. Les ingénieurs en structure calculent avec des équations de plans comment les forces agissent sur des surfaces inclinées — du toit jusqu\'au tablier d\'un pont.',
      },
      gps_navigation: {
        title: 'GPS et navigation de drones',
        desc: 'Les coordonnées GPS sont tridimensionnelles (longitude, latitude, altitude). Les drones naviguent le long de droites dans l\'espace 3D et doivent détecter les obstacles — modélisés comme des plans. La distance point-plan décide si un drone s\'approche trop de la façade d\'une maison. Les voitures autonomes utilisent les mêmes mathématiques pour analyser les données LIDAR.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Ordre ignoré : $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Anticommutatif : $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'Le produit vectoriel n\'est PAS commutatif — l\'ordre détermine le sens du vecteur résultat (règle de la main droite). Échanger les vecteurs change le signe. Cela peut faire pointer les vecteurs normaux dans la mauvaise direction, ce qui inverse tout l\'éclairage.',
        kai_warning: 'On reconnaît ce bug tout de suite : des surfaces éclairées « de l\'intérieur » alors que l\'extérieur reste sombre. Ça arrive quand le vecteur normal pointe dans la mauvaise direction. Toujours rester cohérent avec l\'ordre — $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, jamais l\'inverse !',
      },
      distance_abs_forgotten: {
        wrong: 'Valeur absolue oubliée au numérateur : $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'Avec valeur absolue : $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: 'Les distances sont toujours positives ! Sans la valeur absolue au numérateur, on peut obtenir une valeur négative quand le point se trouve de « l\'autre côté » du plan. En contrôle, cela coûte des points ; dans le moteur de jeu, cela donne des objets qui tombent à travers les murs.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Avant la sortie de « Hafenlichter 3D », c\'est le grand playtest : 200 testeurs jouent pendant une semaine et Kai doit prendre des décisions difficiles. L\'équilibrage est-il juste ? Le taux de plantages est-il acceptable ? « L\'intuition ne suffit pas », dit Mia. « Tu as besoin d\'un test statistique qui te dit si un effet observé est réel — ou seulement dû au hasard. » Bienvenue dans le monde des tests d\'hypothèses : les mathématiques derrière les décisions fondées sur les données.',
      challenge: 'Kai doit décider si les différences observées pendant le playtest sont statistiquement significatives. Le héros A est-il vraiment plus faible que le héros B, ou a-t-il simplement eu de la malchance ? Le nouveau taux de plantages a-t-il vraiment augmenté ? Pour cela, il a besoin d\'hypothèses nulles, de seuils de signification et doit savoir gérer les types d\'erreurs.',
      outro: 'Le playtest est analysé : Kai a démontré statistiquement que le héros A est trop faible ($p = 0{,}028 < 0{,}05$) et que le taux de plantages du nouveau build a augmenté de façon significative. « Sans tests d\'hypothèses, j\'aurais peut-être ignoré ces problèmes », avoue-t-il. Mia ajoute : « Ce qui est bien : tu sais maintenant exactement à quel point ta décision est sûre — le seuil de signification quantifie ton risque de te tromper. »',
    },
    objectives: {
      null_hypothesis: 'Formuler correctement l\'hypothèse nulle et l\'hypothèse alternative, et distinguer tests unilatéraux et bilatéraux',
      significance_level: 'Comprendre le seuil de signification $\\alpha$ et l\'interpréter comme probabilité d\'erreur',
      test_decision: 'Déterminer des zones de rejet et prendre des décisions de test de manière systématique',
      error_types: 'Distinguer les erreurs de première et de deuxième espèce et comprendre le compromis entre $\\alpha$ et $\\beta$',
    },
    explanation: {
      intro: 'Un test d\'hypothèse est une méthode structurée pour prendre une décision à partir de données. Tu pars d\'une supposition (hypothèse nulle $H_0$), tu collectes des données et tu vérifies si les données parlent contre $H_0$. L\'hypothèse alternative $H_1$ décrit ce que tu soupçonnes en réalité :',
      significance: 'Le seuil de signification $\\alpha$ est la probabilité maximale de rejeter $H_0$ à tort (erreur de première espèce). Les valeurs typiques sont $\\alpha = 0{,}05$ (5 %) ou $\\alpha = 0{,}01$ (1 %). Plus $\\alpha$ est petit, plus le test est strict — mais plus on risque de passer à côté d\'effets réels :',
      kai_tip: 'Pensez aux tests d\'hypothèses comme à un système anti-triche : $H_0$ signifie « Le joueur NE triche PAS ». $\\alpha = 0{,}05$ signifie : je bannis un joueur honnête dans seulement 5 % des cas. Je veux garder $\\alpha$ petit pour protéger les innocents — mais si je le rends trop petit, de vrais tricheurs passent à travers les mailles. C\'est le compromis alpha-bêta !',
      rejection_region: 'La zone de rejet contient tous les résultats de test si extrêmes que nous rejetons $H_0$. Pour un test unilatéral à gauche ($H_1\\colon p < p_0$), la zone de rejet se trouve à gauche — tu calcules le plus grand nombre $k$ pour lequel $P(X \\leq k) \\leq \\alpha$ :',
      error_types: 'Deux erreurs peuvent se produire : l\'erreur de première espèce ($\\alpha$) — tu rejettes $H_0$ alors qu\'elle est vraie (« fausse alerte »). L\'erreur de deuxième espèce ($\\beta$) — tu conserves $H_0$ alors que $H_1$ est vraie (« effet manqué »). Pour une taille d\'échantillon $n$ fixée : si tu diminues $\\alpha$, $\\beta$ augmente — et inversement :',
    },
    concepts: {
      hypotheses: {
        title: 'Hypothèse nulle et hypothèse alternative',
        desc: '$H_0$ est l\'hypothèse du « statu quo », valable tant que les données ne la contredisent pas. $H_1$ est ce que tu veux réellement montrer. Test unilatéral à gauche : $H_1\\colon p < p_0$. Test unilatéral à droite : $H_1\\colon p > p_0$. Test bilatéral : $H_1\\colon p \\neq p_0$. Important : on ne « prouve » jamais $H_1$ — on peut seulement rejeter ou conserver $H_0$.',
      },
      significance_level: {
        title: 'Seuil de signification $\\alpha$',
        desc: 'La limite supérieure de la probabilité d\'une erreur de première espèce. Avec $\\alpha = 0{,}05$, tu acceptes un risque de 5 % de rejeter $H_0$ à tort. Valeurs habituelles : $0{,}10$ (exploratoire), $0{,}05$ (standard), $0{,}01$ (strict). $\\alpha$ est fixé AVANT le test — jamais ajusté après coup !',
      },
      error_types: {
        title: 'Erreurs de première et de deuxième espèce',
        desc: 'Erreur de première espèce ($\\alpha$) : $H_0$ est rejetée alors qu\'elle est vraie — une « fausse alerte ». Erreur de deuxième espèce ($\\beta$) : $H_0$ est conservée alors que $H_1$ est vraie — un « effet manqué ». Pour $n$ fixé, $\\alpha$ et $\\beta$ varient en sens inverse : un $\\alpha$ plus petit signifie un $\\beta$ plus grand. Solution : un échantillon $n$ plus grand.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Test d\'équilibrage : le héros A est-il trop faible ?',
        context: 'Sur 100 matchs entre le héros A et le héros B, le héros A ne gagne que 40 fois. Kai soupçonne que le héros A est désavantagé. Avec un équilibrage juste, on devrait avoir $p = 0{,}5$.',
        step1: 'Fixer les hypothèses et le seuil de signification — test unilatéral à gauche, car Kai soupçonne que A est trop faible :',
        step2: 'Dispositif : $n = 100$ matchs, $X$ = nombre de victoires du héros A, suit une loi binomiale :',
        step3: 'Calculer la probabilité de $X \\leq 40$ sous $H_0$ (loi binomiale cumulée) :',
        step4: 'Décision : valeur $p$ $0{,}028 < \\alpha = 0{,}05$ — $H_0$ est rejetée. Le héros A est significativement trop faible :',
        kai_comment: 'C\'était la preuve statistique dont j\'avais besoin pour l\'équipe d\'équilibrage. 40 sur 100, ça paraît « presque correct », mais le test montre : avec un équilibrage juste, on ne verrait un résultat aussi extrême que dans 2,8 % des cas. Ça suffit pour une mise à jour de nerf !',
      },
      crash_rate: {
        title: 'Vérifier le taux de plantages après une mise à jour',
        context: 'Après un patch, le taux de plantages doit être au maximum de 2 %. Sur 200 sessions de test, le jeu plante 8 fois. Est-ce trop ?',
        step1: 'Formuler les hypothèses — test unilatéral à droite, car Kai veut vérifier si le taux dépasse 2 % :',
        step2: 'Données : $n = 200$ sessions, $X = 8$ plantages (observé : $\\hat{p} = 4\\%$) :',
        step3: 'Calculer la probabilité de $X \\geq 8$ sous $H_0$ — c\'est la valeur $p$ :',
        step4: 'Décision : valeur $p$ $0{,}042 < \\alpha = 0{,}05$ — le taux de plantages est significativement plus élevé :',
        kai_comment: 'Sans le test, j\'aurais peut-être dit « 8 plantages sur 200 sessions, ça passe ». Mais le test d\'hypothèse montre : la probabilité de voir autant de plantages avec un vrai taux de 2 % est inférieure à 5 %. Le patch doit être retravaillé.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'Tests A/B pour les applis et les sites web',
        desc: 'Chaque fois que Netflix modifie le bouton « Lecture » ou que Spotify teste un nouvel affichage des playlists, un test d\'hypothèse est en cours. Version A contre version B : laquelle obtient le plus de clics ? La valeur $p$ décide si la différence est réelle ou seulement une fluctuation due au hasard. TikTok, YouTube et Instagram utilisent aussi des tests A/B — chaque fonctionnalité que tu vois a réussi un test de signification.',
      },
      quality_assurance: {
        title: 'Contrôle qualité dans la production',
        desc: 'Dans les usines, on teste en permanence : le taux de rebut est-il sous la valeur limite ? Le poids d\'un paquet de chips correspond-il à la valeur imprimée ? Les tests d\'hypothèses protègent les consommateurs — et les entreprises contre des rappels de produits coûteux. Derrière chaque contrôle par échantillonnage se cachent les mêmes mathématiques que celles que vous apprenez ici.',
      },
      clinical_trials: {
        title: 'Essais cliniques et médicaments',
        desc: 'Avant d\'être autorisé, un médicament doit réussir un test d\'hypothèse : $H_0$ dit « Le médicament n\'agit pas mieux qu\'un placebo ». L\'efficacité n\'est considérée comme prouvée que si la valeur $p$ passe sous $\\alpha = 0{,}05$. Les règles strictes ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) protègent les patients contre des médicaments inefficaces — mais aussi contre le rejet trop rapide de traitements efficaces.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ « prouvée » : $p > \\alpha$ signifie que $H_0$ est vraie',
        correct: 'Formulation correcte : $p > \\alpha$ signifie que $H_0$ ne peut pas être rejetée',
        why: 'Un test d\'hypothèse ne peut jamais prouver $H_0$ — seulement la rejeter ou la conserver. « Ne pas rejeter » signifie : les données ne suffisent pas pour réfuter $H_0$. Peut-être que l\'effet est trop petit, peut-être que l\'échantillon est trop petit. C\'est pourquoi on dit « conserver » ou « ne pas rejeter », jamais « accepter » ou « prouvé ».',
        kai_warning: 'C\'est comme la présomption d\'innocence au tribunal : « non coupable » ne veut pas dire « innocent » — cela veut seulement dire que les preuves ne suffisent pas. Pareil pour $H_0$ : si je ne peux pas démontrer que le héros A est plus faible, cela ne veut pas automatiquement dire qu\'il est parfaitement équilibré !',
      },
      alpha_beta_confused: {
        wrong: 'Supposition : un $\\alpha$ plus petit améliore automatiquement tout',
        correct: 'Réalité : pour $n$ fixé, un $\\alpha$ plus petit entraîne un $\\beta$ plus grand',
        why: 'Si tu rends le test plus strict ($\\alpha$ plus petit), il te faut des données plus extrêmes pour rejeter $H_0$. La probabilité de passer à côté d\'un effet réel augmente donc ($\\beta$ augmente). La seule solution : un échantillon $n$ plus grand — ainsi, tu peux garder à la fois $\\alpha$ et $\\beta$ petits.',
      },
    },
  },
};
