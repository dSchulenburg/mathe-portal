export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia fixe son écran. L\'architecture des niveaux de « Hafenlichter » a besoin d\'objets 3D — entrepôts, grues, conteneurs. Tim a modélisé les meshes, mais Lumi demande : « Combien de mémoire chaque hitbox nécessite-t-elle ? » Mia sourit : « Pour ça, on a besoin de formules de volume. »',
      challenge: 'Calcule les volumes et les surfaces de pyramides, de cônes et de sphères. Aide Mia à construire les hitboxes 3D parfaites pour son quartier portuaire !',
      outro: 'Les solides 3D sont calculés, les hitboxes sont en place. Tim teste le niveau de la grue et s\'écrie : « Les collisions sont enfin réalistes ! » Mia s\'adosse — la géométrie rend les jeux meilleurs.',
    },
    objectives: {
      volume_pyramid: 'Calculer le volume des pyramides avec la formule du tiers',
      volume_cone_sphere: 'Déterminer avec assurance les volumes de cônes et de sphères',
      surface_area: 'Appliquer les formules de surface et interpréter les résultats',
      apply_3d: 'Transférer les calculs de solides à des problèmes quotidiens et au game design',
    },
    explanation: {
      intro: 'Les solides tridimensionnels ont un volume (contenu spatial) et une surface. Pour les pyramides et les cônes, un facteur décisif apparaît dans la formule : le facteur un tiers $\\frac{1}{3}$. Il vient du fait que ces solides « se terminent en pointe » — ils ne remplissent qu\'un tiers du prisme ou du cylindre englobant.',
      cone: 'Un cône est comme une « pyramide ronde » — sa base est un cercle de rayon $r$. La formule a la même structure : un tiers fois l\'aire de la base fois la hauteur, sauf que la base vaut $\\pi r^2$.',
      mia_tip: 'Mia : « Je le retiens comme ça : la pyramide et le cône sont les petits frères modestes du prisme et du cylindre — ils n\'occupent qu\'un tiers de la place ! »',
      sphere: 'La sphère est le cas particulier : elle n\'a ni base ni hauteur au sens classique. Son volume ne dépend que du rayon. Archimède a démontré qu\'une sphère remplit exactement $\\frac{2}{3}$ du cylindre englobant — d\'où la formule.',
    },
    concepts: {
      pyramid: {
        title: 'Volume de la pyramide',
        desc: 'Une pyramide a un tiers du volume d\'un prisme de même base et de même hauteur. La base peut être un rectangle, un triangle ou n\'importe quel polygone.',
      },
      cone: {
        title: 'Volume du cône',
        desc: 'Le cône est au cylindre ce que la pyramide est au prisme : il en remplit exactement un tiers. Sa base circulaire le rend particulièrement symétrique.',
      },
      sphere: {
        title: 'Volume de la sphère',
        desc: 'La sphère est entièrement décrite par son rayon. Le $\\frac{4}{3}$ de la formule provient de l\'intégration — ou de la démonstration géniale d\'Archimède.',
      },
    },
    examples: {
      icecream: {
        title: 'Calculer un cornet de glace',
        context: 'Un cornet de glace a la forme d\'un cône de rayon $r = 3$ cm et de hauteur $h = 12$ cm. Combien de glace peut-il contenir ?',
        step1: 'Identifier les données : le cornet est un cône avec $r = 3$ cm et $h = 12$ cm.',
        step2: 'Appliquer la formule du cône : on substitue dans $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ et on calcule d\'abord l\'expression entre parenthèses.',
        step3: 'Résultat : le cornet contient environ $113{,}1\\,\\text{cm}^3$ de glace — un peu plus d\'un décilitre.',
        mia_comment: 'Mia : « Dingue, un cornet ne contient pas tant que ça ! C\'est pour ça qu\'ils posent toujours une boule par-dessus. »',
      },
      hitbox: {
        title: 'Hitbox sphérique',
        context: 'Dans « Hafenlichter », une bouée doit avoir une hitbox sphérique de volume $V = 904{,}8\\,\\text{cm}^3$. Quel doit être le rayon ?',
        step1: 'Donné : le volume de la sphère est $V = 904{,}8\\,\\text{cm}^3$. Cherché : le rayon $r$.',
        step2: 'Transformer la formule : on résout $V = \\frac{4}{3} \\pi r^3$ pour $r^3$ en divisant par $\\frac{4}{3}\\pi$.',
        step3: 'Calculer : $r^3 \\approx 215{,}9$ — maintenant on prend la racine cubique.',
        step4: 'Résultat : $r \\approx 6{,}0$ cm. La hitbox a besoin d\'un rayon de 6 cm.',
        mia_comment: 'Mia : « Calculer à l\'envers, c\'est le quotidien du game design — tu sais ce que tu veux et tu dois trouver les paramètres. »',
      },
    },
    realworld: {
      packaging: {
        title: 'Design d\'emballage',
        desc: 'Canettes, conserves, bouteilles — le calcul de cylindres est partout. Les fabricants optimisent le rapport entre volume et consommation de matériau pour réduire les coûts.',
      },
      icecream: {
        title: 'Mathématiques de la boule de glace',
        desc: 'Pourquoi une « grande » boule de glace paraît-elle tellement plus grande ? Parce que le volume croît avec $r^3$ ! Rayon doublé = volume multiplié par huit. Ça explique aussi pourquoi les menus XXL sont si rentables.',
      },
      pizza: {
        title: 'Comparaison de pizzas',
        desc: 'Une pizza de 30 cm a plus de surface que deux pizzas de 20 cm réunies ! $\\pi \\cdot 15^2 = 706{,}9$ contre $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. La taille, ça vaut le coup.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Oublier le facteur $\\frac{1}{3}$',
        correct: 'Pour le cône et la pyramide, TOUJOURS mettre $\\frac{1}{3}$ devant',
        why: 'Le cône et la pyramide ne remplissent qu\'un tiers du cylindre ou du prisme englobant. Sans ce facteur, tu calcules le volume du cylindre entier — trois fois trop !',
        mia_warning: 'Mia : « Une fois, j\'ai calculé toutes les hitboxes sans le tiers. Les bouées étaient énormes et bloquaient tout le bassin du port. Tim n\'était pas content du tout. »',
      },
      surface_volume: {
        wrong: 'Confondre les formules de surface et de volume de la sphère',
        correct: 'Volume : $\\frac{4}{3}\\pi r^3$ — Surface : $4\\pi r^2$',
        why: 'Pour le volume, on a $r^3$ (cubique, donc un espace), pour la surface $r^2$ (carré, donc une aire). Regarde l\'exposant — il te dit ce que tu calcules.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule optimise la mémoire de « Hafenlichter ». « Nos textures consomment 2 puissance 20 octets — ça fait combien, au juste ? » Tim calcule : « Attends, les puissances, je sais faire... » Mia rit : « Alors montre-nous ce que tu sais faire. »',
      challenge: 'Maîtrise les lois des puissances : multiplie, élève à une puissance et simplifie. Aide Tim à calculer les tailles de mémoire et les temps de rendu en un éclair !',
      outro: 'Tim maîtrise les lois des puissances. Les calculs de mémoire ne prennent plus que quelques secondes. « Les puissances sont comme des codes de triche pour les grands nombres », dit-il. Mia acquiesce : « Et pour les petits aussi — bienvenue chez les exposants négatifs. »',
    },
    objectives: {
      multiply_powers: 'Multiplier et diviser des puissances de même base',
      power_of_power: 'Simplifier une puissance de puissance avec la règle de multiplication',
      negative_exponents: 'Interpréter les exposants négatifs comme des fractions et les convertir',
      apply_memory: 'Appliquer les lois des puissances aux tailles de mémoire et à la notation scientifique',
    },
    explanation: {
      intro: 'Les puissances sont une écriture abrégée de la multiplication répétée : $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Quand tu multiplies deux puissances de même base, tu additionnes les exposants — car tu prolonges simplement la chaîne des multiplications.',
      power_of_power: 'Que se passe-t-il quand tu élèves une puissance à une autre puissance ? $(a^m)^n$ signifie : tu multiplies $a^m$ par lui-même exactement $n$ fois. Cela donne $m \\cdot n$ facteurs — donc $a^{m \\cdot n}$. Les exposants sont multipliés.',
      mia_tip: 'Mia : « Même base → additionner les exposants. Puissance de puissance → multiplier les exposants. Bases différentes → calculer, il n\'y a pas de raccourci ! »',
      negative: 'Un exposant négatif inverse la puissance : $a^{-n} = \\frac{1}{a^n}$. Ce n\'est pas une définition arbitraire — cela découle logiquement du schéma : $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Chaque étape divise par la base.',
    },
    concepts: {
      product_rule: {
        title: 'Règle du produit',
        desc: 'Même base, exposants différents ? En multipliant, on additionne les exposants ; en divisant, on les soustrait. Ça ne marche QU\'avec la même base !',
      },
      power_rule: {
        title: 'Règle de la puissance',
        desc: 'Une puissance élevée à une autre puissance ? Alors multiplie les exposants. $(a^3)^4 = a^{12}$ — douze facteurs $a$ en tout.',
      },
      negative_exp: {
        title: 'Exposant négatif',
        desc: 'Un moins dans l\'exposant signifie « un divisé par ». Les grands nombres deviennent ainsi petits : $10^{-6}$ est un millionième. Parfait pour les micropuces et les millisecondes.',
      },
    },
    examples: {
      simplify: {
        title: 'Calculer la mémoire',
        context: 'Tim veut savoir : combien font $2^3 \\cdot 2^4$ octets ? En informatique, c\'est un calcul typique avec les puissances de deux.',
        step1: 'Appliquer la règle du produit : même base $2$, donc on additionne les exposants : $3 + 4 = 7$.',
        step2: 'Calculer : $2^7 = 128$ octets.',
        step3: 'Situer : 128 octets — c\'est presque 1 kilooctet (ce serait exactement $2^{10} = 1024$).',
        mia_comment: 'Mia : « En informatique, les puissances de deux sont partout. RAM, textures, profondeur de couleur — tout en puissances de 2 ! »',
      },
      negative: {
        title: 'Convertir des millisecondes',
        context: 'Une image de « Hafenlichter » est calculée en $10^{-3}$ seconde. Qu\'est-ce que ça signifie en écriture décimale ?',
        step1: 'Appliquer l\'exposant négatif : $10^{-3}$ signifie $\\frac{1}{10^3}$.',
        step2: 'Calculer : $\\frac{1}{1000} = 0{,}001$ seconde.',
        step3: 'Situer : $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — une milliseconde. À 60 fps, chaque image dispose d\'environ 16 ms.',
        mia_comment: 'Mia : « Les exposants négatifs font peur, mais ils signifient simplement : petits nombres. $10^{-3}$ = milli, $10^{-6}$ = micro, $10^{-9}$ = nano. »',
      },
    },
    realworld: {
      storage: {
        title: 'Stockage numérique',
        desc: 'Ton téléphone a 256 Go ? Ça fait $2^{38}$ octets, soit plus de 274 milliards d\'octets. Chaque doublement du stockage n\'est qu\'un +1 à l\'exposant — c\'est pourquoi la technologie progresse si vite.',
      },
      richter: {
        title: 'Échelle de Richter',
        desc: 'Un séisme de magnitude 6 n\'est pas deux fois plus fort qu\'un séisme de magnitude 3 — il est mille fois plus fort ! Chaque niveau signifie $10 \\times$ plus d\'énergie. Les puissances rendent la différence tangible.',
      },
      decibel: {
        title: 'Décibels et volume sonore',
        desc: 'Des écouteurs à 100 dB sont $10^{10}$ fois plus intenses que le seuil d\'audition (0 dB). Chaque +10 dB = intensité multipliée par dix. Tes oreilles calculent de manière logarithmique — donc avec des puissances !',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Multiplier les bases au lieu d\'additionner les exposants',
        correct: 'La règle du produit ne s\'applique QU\'avec la même base',
        why: 'Pour $2^3 \\cdot 3^2$, les bases sont différentes (2 et 3). Tu ne peux appliquer aucune règle des puissances — tu dois calculer séparément : $8 \\cdot 9 = 72$. Additionner les exposants et multiplier les bases est une erreur fréquente !',
        mia_warning: 'Mia : « Bases différentes = pas de raccourci. Point. Une fois, je me suis trompée dans le code et toutes les textures étaient détruites. »',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — « puissance zéro égale zéro »',
        correct: '$a^0 = 1$ pour tout $a \\neq 0$',
        why: 'Suis le schéma : $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — chaque étape divise par 2. Donc $2^0 = 1$. Ça vaut pour TOUTE base (sauf 0). Zéro est l\'élément neutre de l\'addition, pas de la multiplication.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia parcourt la bibliothèque d\'assets de « Hafenlichter ». La Speicherstadt de Hambourg a des bâtiments de toutes les tailles — mais ils doivent tous paraître proportionnels. Lumi demande : « On ne peut pas simplement tout mettre à l\'échelle ? » Mia acquiesce : « Exactement. C\'est la similitude. »',
      challenge: 'Comprends les triangles semblables, les facteurs d\'échelle et le théorème de Thalès. Aide Mia à mettre le quartier portuaire à l\'échelle de façon proportionnelle !',
      outro: 'La Speicherstadt de « Hafenlichter » est superbe — chaque bâtiment est proportionnel, chaque pont s\'ajuste. Jule admire le résultat : « On dirait une vraie maquette ! » Mia sourit : « C\'en est une. Mathématiquement exacte. »',
    },
    objectives: {
      similar_triangles: 'Reconnaître les triangles semblables et décrire leurs propriétés',
      scale_factor: 'Calculer et appliquer le facteur d\'échelle $k$',
      intercept_theorem: 'Appliquer le théorème de Thalès à des problèmes géométriques',
      apply_scaling: 'Utiliser la similitude en architecture, en cartographie et en game design',
    },
    explanation: {
      intro: 'Deux figures sont semblables si elles ont la même forme mais peuvent être de tailles différentes. Pour les triangles, il suffit que tous les angles correspondent — alors tous les rapports de côtés sont automatiquement égaux. Le rapport entre l\'image et l\'original s\'appelle le facteur d\'échelle $k$.',
      scale_factor: 'Le facteur d\'échelle $k$ te dit de combien on a agrandi ou réduit. $k > 1$ signifie agrandissement, $k < 1$ réduction, $k = 1$ signifie isométrique (superposable). Important : $k$ se rapporte aux longueurs — les aires évoluent avec $k^2$, les volumes avec $k^3$ !',
      mia_tip: 'Mia : « Dans le moteur de jeu, on travaille constamment avec des facteurs d\'échelle. Un sprite avec scale 0.5 fait la moitié de la taille, avec scale 2.0 le double. Exactement comme en géométrie ! »',
      intercept: 'Le théorème de Thalès décrit ce qui se passe quand des droites parallèles coupent deux demi-droites de même origine : les segments sur les demi-droites sont proportionnels. Tu peux ainsi calculer des longueurs inconnues sans devoir tout mesurer.',
    },
    concepts: {
      similar_triangles: {
        title: 'Triangles semblables',
        desc: 'Deux triangles sont semblables si tous leurs angles correspondent. Alors : tous les rapports de côtés sont égaux. On écrit $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Facteur d\'échelle',
        desc: 'Le facteur $k = \\frac{\\text{Image}}{\\text{Original}}$ décrit l\'agrandissement ou la réduction. $k = 2$ signifie : tout deux fois plus grand. $k = 0{,}5$ signifie : tout deux fois plus petit.',
      },
      intercept_theorem: {
        title: 'Théorème de Thalès',
        desc: 'Quand deux demi-droites sont coupées par des droites parallèles, les segments obtenus sont proportionnels. Un outil puissant pour calculer des longueurs manquantes.',
      },
    },
    examples: {
      model: {
        title: 'Mettre un bâtiment à l\'échelle',
        context: 'Un entrepôt de Hambourg est construit en maquette 3D à l\'échelle $1:100$. La maquette mesure $3{,}5$ cm de haut. Quelle est la hauteur du vrai bâtiment ?',
        step1: 'Déterminer le facteur d\'échelle : $k = \\frac{1}{100}$ signifie que la maquette est 100 fois plus petite que l\'original.',
        step2: 'Lire la hauteur de la maquette : $h_{\\text{Maquette}} = 3{,}5$ cm.',
        step3: 'Calculer à rebours : $h_{\\text{réel}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Le bâtiment fait 3,5 mètres de haut.',
        mia_comment: 'Mia : « C\'est exactement comme ça qu\'on travaille dans Hafenlichter. On construit la Speicherstadt en maquette et on met tout à l\'échelle proportionnellement dans le jeu. »',
      },
      intercept: {
        title: 'Appliquer le théorème de Thalès',
        context: 'Deux demi-droites sont coupées par des droites parallèles. Les segments sur l\'une mesurent 4 et 6 ; sur l\'autre, le premier segment mesure 9. Quelle est la longueur du deuxième segment $x$ ?',
        step1: 'Poser le théorème de Thalès : les rapports des segments sur les deux demi-droites sont égaux : $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Faire le produit en croix : $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Résultat : $x = 6$. Le deuxième segment mesure 6 unités.',
        mia_comment: 'Mia : « Le théorème de Thalès, c\'est comme l\'auto-layout dans le moteur de jeu — tu fixes un rapport, et tout le reste s\'ajuste proportionnellement. »',
      },
    },
    realworld: {
      maps: {
        title: 'Cartes et navigation',
        desc: 'Google Maps affiche le monde à l\'échelle. Le niveau de zoom 15 correspond à environ $1:18.000$. Chaque niveau de zoom double le facteur d\'échelle — exactement comme la similitude en géométrie.',
      },
      architecture: {
        title: 'Maquettes d\'architecture',
        desc: 'Avant la construction de l\'Elbphilharmonie, il y avait des maquettes à l\'échelle $1:500$. Les architectes utilisent la similitude pour déduire les dimensions réelles à partir de petites maquettes — et inversement.',
      },
      instagram: {
        title: 'Redimensionner des images',
        desc: 'Quand tu recadres une photo pour Instagram, l\'échelle change. « Adapter à l\'écran » met à l\'échelle proportionnellement (semblable), « Étirer » déforme (pas semblable). Ton œil repère la différence tout de suite !',
      },
    },
    mistakes: {
      congruence: {
        wrong: '« Semblable » et « isométrique », c\'est la même chose',
        correct: 'Semblable = même forme. Isométrique = même forme ET même taille',
        why: 'L\'isométrie est un cas particulier de la similitude avec $k = 1$. Tous les triangles isométriques sont semblables, mais tous les triangles semblables ne sont pas isométriques. Semblable signifie : mêmes angles, mais les côtés peuvent avoir des longueurs différentes, proportionnelles.',
        mia_warning: 'Mia : « Dans le moteur de jeu : isométrique = copie. Semblable = copie + mise à l\'échelle. Si tu copies une maison et la mets à l\'échelle, elle est semblable. Sans mise à l\'échelle, elle est isométrique. »',
      },
      scale_direction: {
        wrong: 'Poser le facteur d\'échelle à l\'envers',
        correct: 'Toujours $k = \\frac{\\text{Image}}{\\text{Original}}$',
        why: 'Si l\'image est plus grande que l\'original, $k > 1$ doit être vrai. Si tu poses la fraction à l\'envers, tu obtiens $k < 1$ et tu crois que la figure a été réduite. Retiens : l\'image en haut, l\'original en bas.',
      },
    },
  },
};
