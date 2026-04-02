export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia fixe son ecran. L\'architecture des niveaux de "Lumieres du Port" a besoin d\'objets 3D — entrepots, grues, conteneurs. Tim a modelise les meshes, mais Lumi demande : "Combien de memoire chaque hitbox necessite-t-elle ?" Mia sourit : "Pour ca, on a besoin de formules de volume."',
      challenge: 'Calcule les volumes et surfaces de pyramides, cones et spheres. Aide Mia a construire les hitboxes 3D parfaites pour son quartier portuaire !',
      outro: 'Les corps 3D sont calcules, les hitboxes sont en place. Tim teste le niveau de la grue et s\'ecrie : "Les collisions sont enfin realistes !" Mia s\'adosse — la geometrie rend les jeux meilleurs.',
    },
    objectives: {
      volume_pyramid: 'Calculer le volume des pyramides avec la formule du tiers',
      volume_cone_sphere: 'Determiner avec assurance les volumes de cones et de spheres',
      surface_area: 'Appliquer les formules de surface et interpreter les resultats',
      apply_3d: 'Transferer les calculs de corps 3D a des problemes quotidiens et au game design',
    },
    explanation: {
      intro: 'Les corps tridimensionnels ont un volume (contenu spatial) et une surface. Pour les pyramides et les cones, un facteur decisif apparait dans la formule : le facteur un tiers $\\frac{1}{3}$. Il vient du fait que ces corps "se terminent en pointe" — ils ne remplissent qu\'un tiers du prisme ou cylindre englobant.',
      cone: 'Un cone est comme une "pyramide ronde" — sa base est un cercle de rayon $r$. La formule a la meme structure : un tiers fois l\'aire de la base fois la hauteur, sauf que la base vaut $\\pi r^2$.',
      mia_tip: 'Mia : "Je retiens ca comme ca : pyramides et cones sont les petits freres modestes des prismes et cylindres — ils n\'occupent qu\'un tiers de l\'espace !"',
      sphere: 'La sphere est le cas special : elle n\'a ni base ni hauteur au sens classique. Son volume ne depend que du rayon. Archimede a demontre qu\'une sphere remplit exactement $\\frac{2}{3}$ du cylindre englobant — d\'ou la formule.',
    },
    concepts: {
      pyramid: { title: 'Volume de la pyramide', desc: 'Une pyramide a un tiers du volume d\'un prisme de meme base et hauteur. La base peut etre un rectangle, un triangle ou tout polygone.' },
      cone: { title: 'Volume du cone', desc: 'Le cone est au cylindre ce que la pyramide est au prisme : il remplit exactement un tiers. Sa base circulaire le rend particulierement symetrique.' },
      sphere: { title: 'Volume de la sphere', desc: 'La sphere est entierement decrite par son rayon. Le $\\frac{4}{3}$ dans la formule provient de l\'integration — ou de la demonstration geniale d\'Archimede.' },
    },
    examples: {
      icecream: {
        title: 'Calculer un cornet de glace',
        context: 'Un cornet de glace a la forme d\'un cone de rayon $r = 3$ cm et de hauteur $h = 12$ cm. Combien de glace peut-il contenir ?',
        step1: 'Identifier les donnees : le cone a $r = 3$ cm et $h = 12$ cm.',
        step2: 'Appliquer la formule du cone : substituer dans $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ et calculer d\'abord l\'expression entre parentheses.',
        step3: 'Resultat : le cornet contient environ $113{,}1\\,\\text{cm}^3$ de glace — un peu plus d\'un decilitre.',
        mia_comment: 'Mia : "Ouf, un cornet ne contient pas tant que ca ! C\'est pour ca qu\'ils empilent toujours une boule par-dessus."',
      },
      hitbox: {
        title: 'Hitbox spherique',
        context: 'Dans "Lumieres du Port", une bouee doit avoir une hitbox spherique de volume $V = 904{,}8\\,\\text{cm}^3$. Quel doit etre le rayon ?',
        step1: 'Donne : le volume de la sphere est $V = 904{,}8\\,\\text{cm}^3$. Cherche : le rayon $r$.',
        step2: 'Rearanger la formule : resoudre $V = \\frac{4}{3} \\pi r^3$ pour $r^3$ en divisant par $\\frac{4}{3}\\pi$.',
        step3: 'Calculer : $r^3 \\approx 215{,}9$ — maintenant prendre la racine cubique.',
        step4: 'Resultat : $r \\approx 6{,}0$ cm. La hitbox a besoin d\'un rayon de 6 cm.',
        mia_comment: 'Mia : "Calculer a l\'envers, c\'est le quotidien du game design — tu sais ce que tu veux et tu dois trouver les parametres."',
      },
    },
    realworld: {
      packaging: { title: 'Design d\'emballage', desc: 'Canettes, conserves, bouteilles — le calcul de cylindres est partout. Les fabricants optimisent le rapport volume/materiau pour reduire les couts.' },
      icecream: { title: 'Mathematiques de la boule de glace', desc: 'Pourquoi une "grande" boule semble-t-elle tellement plus grande ? Parce que le volume croit avec $r^3$ ! Double le rayon = huit fois le volume.' },
      pizza: { title: 'Comparaison de pizzas', desc: 'Une pizza de 30 cm a plus de surface que deux pizzas de 20 cm reunies ! $\\pi \\cdot 15^2 = 706{,}9$ contre $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. La taille est plus avantageuse.' },
    },
    mistakes: {
      third: { wrong: 'Oublier le facteur $\\frac{1}{3}$', correct: 'Pour les cones et pyramides, TOUJOURS mettre $\\frac{1}{3}$', why: 'Cones et pyramides ne remplissent qu\'un tiers du cylindre ou prisme englobant. Sans ce facteur, tu calcules le volume du cylindre entier — trois fois trop !', mia_warning: 'Mia : "J\'ai une fois calcule toutes les hitboxes sans le tiers. Les bouees etaient enormes et bloquaient tout le bassin du port. Tim n\'etait pas content."' },
      surface_volume: { wrong: 'Confondre les formules de surface et de volume de la sphere', correct: 'Volume : $\\frac{4}{3}\\pi r^3$ — Surface : $4\\pi r^2$', why: 'Le volume a $r^3$ (cubique, donc espace), la surface a $r^2$ (carre, donc aire). Regarde l\'exposant — il te dit ce que tu calcules.' },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule optimise la memoire de "Lumieres du Port". "Nos textures consomment 2 puissance 20 octets — ca fait combien exactement ?" Tim calcule : "Attends, les puissances je sais faire..." Mia rit : "Alors montre-nous !"',
      challenge: 'Maitrise les lois des puissances : multiplier, elever a une puissance et simplifier. Aide Tim a calculer les tailles de memoire et les temps de rendu en un eclair !',
      outro: 'Tim maitrise les lois des puissances. Les calculs de memoire ne prennent plus que quelques secondes. "Les puissances sont comme des codes de triche pour les grands nombres", dit-il. Mia acquiesce : "Et pour les petits aussi — bienvenue aux exposants negatifs."',
    },
    objectives: {
      multiply_powers: 'Multiplier et diviser des puissances de meme base',
      power_of_power: 'Simplifier une puissance de puissance avec la regle de multiplication',
      negative_exponents: 'Interpreter les exposants negatifs comme des fractions et convertir',
      apply_memory: 'Appliquer les lois des puissances aux tailles de memoire et a la notation scientifique',
    },
    explanation: {
      intro: 'Les puissances sont un raccourci pour la multiplication repetee : $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Quand tu multiplies deux puissances de meme base, tu additionnes les exposants — car tu prolonges simplement la chaine des multiplications.',
      power_of_power: 'Que se passe-t-il quand tu eleves une puissance a une autre puissance ? $(a^m)^n$ signifie : tu multiplies $a^m$ par lui-meme exactement $n$ fois. Cela donne $m \\cdot n$ facteurs — donc $a^{m \\cdot n}$. Les exposants sont multiplies.',
      mia_tip: 'Mia : "Meme base → additionner les exposants. Puissance de puissance → multiplier les exposants. Bases differentes → calculer, pas de raccourci !"',
      negative: 'Un exposant negatif inverse la puissance : $a^{-n} = \\frac{1}{a^n}$. Ce n\'est pas une definition arbitraire — ca decoule logiquement du schema : $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Chaque etape divise par la base.',
    },
    concepts: {
      product_rule: { title: 'Regle du produit', desc: 'Meme base, exposants differents ? En multipliant, on additionne les exposants ; en divisant, on les soustrait. Ca ne marche QU\'avec la meme base !' },
      power_rule: { title: 'Regle de la puissance', desc: 'Une puissance elevee a une autre puissance ? Multiplie les exposants. $(a^3)^4 = a^{12}$ — douze facteurs $a$ en tout.' },
      negative_exp: { title: 'Exposant negatif', desc: 'Un moins dans l\'exposant signifie "un divise par". Ca transforme les grands nombres en petits : $10^{-6}$ c\'est un millionieme. Parfait pour les micropuces et les millisecondes.' },
    },
    examples: {
      simplify: {
        title: 'Calculer la memoire',
        context: 'Tim veut savoir : combien font $2^3 \\cdot 2^4$ octets ? En informatique, c\'est un calcul typique avec les puissances de deux.',
        step1: 'Appliquer la regle du produit : meme base $2$, donc on additionne les exposants : $3 + 4 = 7$.',
        step2: 'Calculer : $2^7 = 128$ octets.',
        step3: 'Situer : 128 octets — c\'est presque 1 kilooctet (ce serait exactement $2^{10} = 1024$).',
        mia_comment: 'Mia : "En informatique, les puissances de deux sont partout. RAM, textures, profondeur de couleur — tout en puissances de 2 !"',
      },
      negative: {
        title: 'Convertir des millisecondes',
        context: 'Une image de "Lumieres du Port" est calculee en $10^{-3}$ secondes. Qu\'est-ce que ca signifie en ecriture decimale ?',
        step1: 'Appliquer l\'exposant negatif : $10^{-3}$ signifie $\\frac{1}{10^3}$.',
        step2: 'Calculer : $\\frac{1}{1000} = 0{,}001$ secondes.',
        step3: 'Situer : $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — une milliseconde. A 60 fps, chaque image a environ 16 ms.',
        mia_comment: 'Mia : "Les exposants negatifs font peur, mais ils signifient juste : petits nombres. $10^{-3}$ = milli, $10^{-6}$ = micro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: { title: 'Stockage numerique', desc: 'Ton telephone a 256 Go ? Ca fait $2^{38}$ octets, soit plus de 274 milliards d\'octets. Chaque doublement de stockage n\'est qu\'un +1 a l\'exposant — c\'est pourquoi la technologie evolue si vite.' },
      richter: { title: 'Echelle de Richter', desc: 'Un seisme de magnitude 6 n\'est pas deux fois plus fort que de magnitude 3 — il est mille fois plus fort ! Chaque niveau signifie $10 \\times$ plus d\'energie.' },
      decibel: { title: 'Decibels et volume sonore', desc: 'Des ecouteurs a 100 dB sont $10^{10}$ fois plus intenses que le seuil d\'audition (0 dB). Chaque +10 dB = dix fois l\'intensite. Tes oreilles fonctionnent de maniere logarithmique — c\'est-a-dire avec des puissances !' },
    },
    mistakes: {
      add_bases: { wrong: 'Multiplier les bases au lieu d\'additionner les exposants', correct: 'La regle du produit ne s\'applique QU\'avec la meme base', why: 'Pour $2^3 \\cdot 3^2$, les bases sont differentes (2 et 3). Tu ne peux appliquer aucune regle de puissance — tu dois calculer separement : $8 \\cdot 9 = 72$.', mia_warning: 'Mia : "Bases differentes = pas de raccourci. Point. J\'ai fait cette erreur dans mon code et toutes les textures etaient corrompues."' },
      zero_exp: { wrong: '$a^0 = 0$ — "puissance zero egale zero"', correct: '$a^0 = 1$ pour tout $a \\neq 0$', why: 'Suis le schema : $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — chaque etape divise par 2. Donc $2^0 = 1$. Ca vaut pour TOUTE base (sauf 0).' },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia parcourt la bibliotheque d\'assets de "Lumieres du Port". Le quartier des entrepots de Hambourg a des batiments de toutes tailles — mais ils doivent tous paraitre proportionnels. Lumi demande : "On ne peut pas simplement tout mettre a l\'echelle ?" Mia acquiesce : "Exactement. C\'est la similitude."',
      challenge: 'Comprends les triangles semblables, les facteurs d\'echelle et le theoreme de Thales. Aide Mia a mettre le quartier portuaire a l\'echelle proportionnellement !',
      outro: 'Le quartier des entrepots dans "Lumieres du Port" est superbe — chaque batiment est proportionnel, chaque pont s\'ajuste. Jule admire le resultat : "On dirait une vraie maquette !" Mia sourit : "C\'en est une. Mathematiquement exacte."',
    },
    objectives: {
      similar_triangles: 'Reconnaitre les triangles semblables et decrire leurs proprietes',
      scale_factor: 'Calculer et appliquer le facteur d\'echelle $k$',
      intercept_theorem: 'Appliquer le theoreme de Thales aux problemes geometriques',
      apply_scaling: 'Utiliser la similitude en architecture, cartographie et game design',
    },
    explanation: {
      intro: 'Deux figures sont semblables si elles ont la meme forme mais peuvent differer en taille. Pour les triangles, il suffit que tous les angles correspondent — alors tous les rapports de cotes sont automatiquement egaux. Le rapport image/original s\'appelle le facteur d\'echelle $k$.',
      scale_factor: 'Le facteur d\'echelle $k$ te dit de combien on a agrandi ou reduit. $k > 1$ signifie agrandissement, $k < 1$ reduction, $k = 1$ signifie congruent (identique). Important : $k$ se refere aux longueurs — les aires evoluent avec $k^2$, les volumes avec $k^3$ !',
      mia_tip: 'Mia : "Dans le moteur de jeu, on travaille constamment avec des facteurs d\'echelle. Un sprite avec scale 0.5 fait la moitie de la taille, scale 2.0 le double. Exactement comme en geometrie !"',
      intercept: 'Le theoreme de Thales decrit ce qui se passe quand des droites paralleles sont coupees par deux droites secantes : les segments sur les secantes sont proportionnels. Ca te permet de calculer des longueurs inconnues sans tout mesurer.',
    },
    concepts: {
      similar_triangles: { title: 'Triangles semblables', desc: 'Deux triangles sont semblables si tous leurs angles correspondent. Alors : tous les rapports de cotes sont egaux. On ecrit $\\triangle ABC \\sim \\triangle A\'B\'C\'$.' },
      scale_factor: { title: 'Facteur d\'echelle', desc: 'Le facteur $k = \\frac{\\text{Image}}{\\text{Original}}$ decrit l\'agrandissement ou la reduction. $k = 2$ : tout deux fois plus grand. $k = 0{,}5$ : tout deux fois plus petit.' },
      intercept_theorem: { title: 'Theoreme de Thales', desc: 'Quand deux droites sont coupees par des paralleles, les segments resultants sont proportionnels. Un outil puissant pour calculer des longueurs manquantes.' },
    },
    examples: {
      model: {
        title: 'Mettre un batiment a l\'echelle',
        context: 'Un entrepot de Hambourg est construit en maquette 3D a l\'echelle $1:100$. La maquette mesure $3{,}5$ cm de haut. Quelle est la hauteur reelle du batiment ?',
        step1: 'Determiner le facteur d\'echelle : $k = \\frac{1}{100}$ signifie que la maquette est 100 fois plus petite que l\'original.',
        step2: 'Lire la hauteur de la maquette : $h_{\\text{Maquette}} = 3{,}5$ cm.',
        step3: 'Calculer : $h_{\\text{reel}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Le batiment fait 3,5 metres de haut.',
        mia_comment: 'Mia : "C\'est exactement comme ca qu\'on travaille dans Lumieres du Port. On construit le quartier des entrepots en maquette et on met tout a l\'echelle proportionnellement dans le jeu."',
      },
      intercept: {
        title: 'Appliquer le theoreme de Thales',
        context: 'Deux droites sont coupees par des paralleles. Les segments sur l\'une sont 4 et 6, sur l\'autre le premier segment est 9. Quelle est la longueur du deuxieme segment $x$ ?',
        step1: 'Ecrire le theoreme de Thales : les rapports des segments sur les deux droites sont egaux : $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Multiplier en croix : $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Resultat : $x = 6$. Le deuxieme segment mesure 6 unites.',
        mia_comment: 'Mia : "Le theoreme de Thales, c\'est comme l\'auto-layout dans le moteur de jeu — tu definis un rapport, et tout le reste s\'ajuste proportionnellement."',
      },
    },
    realworld: {
      maps: { title: 'Cartes et navigation', desc: 'Google Maps affiche le monde a l\'echelle. Le niveau de zoom 15 correspond a environ $1:18\\,000$. Chaque niveau de zoom double le facteur d\'echelle — exactement comme la similitude en geometrie.' },
      architecture: { title: 'Maquettes d\'architecture', desc: 'Avant la construction de l\'Elbphilharmonie, il y avait des maquettes a l\'echelle $1:500$. Les architectes utilisent la similitude pour deduire les dimensions reelles a partir de petites maquettes — et inversement.' },
      instagram: { title: 'Redimensionner des images', desc: 'Quand tu recadres une photo pour Instagram, l\'echelle change. "Adapter a l\'ecran" met a l\'echelle proportionnellement (similaire), "Etirer" deforme (pas similaire). Ton oeil repere la difference instantanement !' },
    },
    mistakes: {
      congruence: { wrong: '"Semblable" et "congruent" c\'est la meme chose', correct: 'Semblable = meme forme. Congruent = meme forme ET meme taille', why: 'La congruence est un cas particulier de similitude avec $k = 1$. Tous les triangles congruents sont semblables, mais pas tous les triangles semblables sont congruents.', mia_warning: 'Mia : "Dans le moteur de jeu : congruent = copie. Semblable = copie + echelle. Si tu copies une maison et la mets a l\'echelle, elle est semblable. Sans mise a l\'echelle, elle est congruente."' },
      scale_direction: { wrong: 'Facteur d\'echelle a l\'envers', correct: 'Toujours $k = \\frac{\\text{Image}}{\\text{Original}}$', why: 'Si l\'image est plus grande que l\'original, $k > 1$ doit etre vrai. Si tu mets la fraction a l\'envers, tu obtiens $k < 1$ et tu penses que ca a ete reduit. Retiens : image en haut, original en bas.' },
    },
  },
};
