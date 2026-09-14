export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'Mia est assise dans son petit bureau au port de Hambourg et fixe l\'écran. Lumi, son personnage dans "Hafenlichter", doit sauter avec élégance par-dessus des caisses et des conteneurs — mais la courbe de saut a l\'air tout simplement fausse. "La physique ne va pas", murmure-t-elle. Pour programmer une trajectoire de saut réaliste, Mia a besoin des fonctions du second degré.',
      challenge: 'Lumi doit sauter par-dessus des caisses — mais la courbe de saut n\'a pas l\'air naturelle.',
      outro: 'Avec la forme canonique, Mia a programmé la courbe de saut parfaite ! Lumi vole maintenant en un arc élégant au-dessus des conteneurs de Hambourg. "Enfin, ça a l\'air réaliste", dit Tim en lui tapant dans la main.',
    },
    objectives: {
      recognize: 'Reconnaître les fonctions du second degré et décrire leurs propriétés',
      vertex_form: 'Passer avec assurance de la forme développée à la forme canonique et inversement',
      pq_formula: 'Calculer les zéros avec la formule quadratique',
      graph_properties: 'Lire le sens d\'ouverture, le sommet et l\'axe de symétrie à partir de l\'équation',
    },
    explanation: {
      intro: 'Imagine que tu lances un ballon de basket. Le ballon monte en décrivant un arc, atteint le point le plus haut et retombe. Cette trajectoire a une forme bien précise — une parabole. En mathématiques, on la décrit avec une fonction du second degré :',
      opening: 'Le nombre $a$ détermine si la parabole est ouverte vers le haut ($a > 0$) ou vers le bas ($a < 0$) — et si elle est "étroite" ou "large". Plus $|a|$ est grand, plus la parabole est étroite.',
      mia_tip: 'Dans mon jeu, $a$ est négatif, parce que la courbe de saut monte puis redescend — comme un U à l\'envers !',
      vertex_form: 'La forme canonique te donne directement le point le plus haut (ou le plus bas) de la parabole. Le sommet $S$ a pour coordonnées $(d \\mid e)$ :',
      conversion: 'Pour passer de la forme développée à la forme canonique, tu utilises la complétion du carré. Tu ajoutes astucieusement un nombre et tu le retires aussitôt, de sorte qu\'un carré parfait apparaisse.',
    },
    concepts: {
      normal_form: {
        title: 'Forme développée',
        desc: 'L\'écriture standard. Tu vois tout de suite : $a$ = ouverture, $c$ = ordonnée à l\'origine (là où la parabole coupe l\'axe des y).',
      },
      vertex_form: {
        title: 'Forme canonique',
        desc: 'Te donne immédiatement le sommet $S(d \\mid e)$. Idéale pour lire le maximum ou le minimum et repérer le décalage.',
      },
      pq_formula: {
        title: 'Formule quadratique',
        desc: 'Ton outil pour les zéros. Condition : l\'équation doit être sous la forme $x^2 + px + q = 0$ (le coefficient devant $x^2$ doit valoir 1 !).',
      },
      discriminant: {
        title: 'Discriminant',
        desc: 'L\'expression sous la racine décide : $D > 0$ = deux zéros, $D = 0$ = un zéro, $D < 0$ = aucun zéro réel.',
      },
    },
    examples: {
      vertex: {
        title: 'Déterminer la forme canonique',
        context: 'Mia veut calculer le point le plus haut du saut de Lumi.',
        step1: 'La fonction est donnée sous forme développée :',
        step2: 'Complétion du carré : on ajoute $(\\frac{6}{2})^2 = 9$ et on le retire aussitôt :',
        step3: 'Regrouper — l\'expression entre parenthèses est un carré parfait :',
        step4: 'Lire le sommet : $d = 3$, $e = -4$, donc :',
        mia_comment: 'Le sommet en $(3 \\mid -4)$ est le point le plus bas, parce que $a = 1 > 0$. Pour une courbe de saut, il me faut $a < 0$ : là, ce sera le point le plus haut !',
      },
      pq: {
        title: 'Zéros avec la formule quadratique',
        context: 'Où Lumi retouche-t-elle le sol ?',
        step1: 'Donnée : l\'équation est déjà sous la bonne forme (coefficient de $x^2$ = 1) :',
        step2: 'Lire les valeurs de $p$ et $q$ :',
        step3: 'Remplacer dans la formule quadratique et calculer :',
        step4: 'Lumi atterrit donc en $x = 2$ ou en $x = -4$ :',
        mia_comment: 'Deux zéros — la parabole coupe l\'axe des x deux fois. Dans le jeu, ça veut dire : Lumi décolle en $x = -4$ et atterrit en $x = 2$ !',
      },
    },
    realworld: {
      basketball: {
        title: 'Tir au basket',
        desc: 'Chaque tir au panier décrit une parabole. La hauteur $h$ dépend du temps $t$. Les entraîneurs s\'en servent pour calculer l\'angle de tir idéal.',
      },
      bridge: {
        title: 'Ponts suspendus',
        desc: 'Dans les ponts suspendus comme le Golden Gate Bridge, le câble porteur pend presque exactement en forme de parabole – parce que le tablier répartit son poids de façon égale sur le câble.',
      },
      pricing: {
        title: 'Optimisation des prix',
        desc: 'Un magasin veut savoir : quel prix rapporte le plus de bénéfice ? Quand le prix augmente, moins de gens achètent — le bénéfice est une parabole avec un maximum.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Erreur de signe',
        correct: 'Attention au signe',
        why: 'Dans $f(x) = (x - d)^2 + e$, il y a un moins devant $d$. Ça veut dire : $f(x) = (x - 3)^2$ a son sommet en $d = +3$, pas en $-3$ !',
        mia_warning: 'Cette erreur de signe m\'a coûté 3 heures de débogage. La courbe de saut de Lumi était décalée vers la gauche au lieu de la droite !',
      },
      pq_wrong: {
        wrong: 'Formule quadratique sans division',
        correct: 'D\'abord diviser par $a$',
        why: 'La formule quadratique ne marche que si le coefficient devant $x^2$ est égal à 1. Pour $2x^2 + 4x - 6 = 0$, tu dois d\'abord diviser par 2 : $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'Mia a un problème avec la détection de collision : quand est-ce que Lumi touche un obstacle ? Tim propose de calculer la distance entre deux points. "Pour ça, il te faut Pythagore", dit-il. Mia se souvient du théorème appris à l\'école — et tout à coup, il prend tout son sens.',
      challenge: 'La détection de collision a besoin de calculer la distance entre des objets.',
      outro: 'La détection de collision de Lumi fonctionne maintenant au pixel près ! Mia a utilisé le théorème de Pythagore pour calculer en temps réel la distance entre le personnage et les obstacles.',
    },
    objectives: {
      theorem: 'Appliquer le théorème de Pythagore avec assurance',
      calculate_sides: 'Calculer les côtés manquants dans un triangle rectangle',
      recognize: 'Reconnaître quand un triangle est rectangle',
      apply: 'Appliquer le théorème à des problèmes de la vie quotidienne',
    },
    explanation: {
      intro: 'Dans tout triangle rectangle, une règle simple mais puissante s\'applique : la somme des carrés des cathètes est égale au carré de l\'hypoténuse.',
      sides: 'Ici, $c$ est toujours le côté le plus long — l\'hypoténuse. Elle est située en face de l\'angle droit. Les deux côtés plus courts $a$ et $b$ s\'appellent les cathètes.',
      mia_tip: 'Dans mon jeu, je calcule la distance entre Lumi et un objet comme une hypoténuse. L\'écart horizontal est $a$, l\'écart vertical $b$ — et $c$ est la vraie distance !',
      solving: 'Tu peux transformer la formule pour trouver n\'importe quel côté. Si tu cherches l\'hypoténuse :',
    },
    concepts: {
      theorem: {
        title: 'Théorème de Pythagore',
        desc: 'Valable uniquement dans les triangles rectangles. $c$ est l\'hypoténuse (en face de l\'angle droit), $a$ et $b$ sont les cathètes.',
      },
      hypotenuse: {
        title: 'Calculer l\'hypoténuse',
        desc: 'Si tu connais les deux cathètes, prends la racine de la somme des carrés.',
      },
      cathetus: {
        title: 'Calculer une cathète',
        desc: 'Si tu connais l\'hypoténuse et une cathète, prends la racine de la différence.',
      },
    },
    examples: {
      screen: {
        title: 'Calculer la diagonale d\'un écran',
        context: 'Mia veut savoir quelle est la vraie taille de l\'écran de son nouveau moniteur.',
        step1: 'Le moniteur fait 16 pouces de large et 9 pouces de haut :',
        step2: 'Appliquer Pythagore — la largeur et la hauteur sont les cathètes :',
        step3: 'Prendre la racine pour obtenir la diagonale :',
        mia_comment: '18,36 pouces de diagonale — c\'est la valeur que les fabricants indiquent comme "taille d\'écran". Maintenant, je sais pourquoi !',
      },
      ladder: {
        title: 'Échelle contre un mur',
        context: 'Jusqu\'à quelle hauteur monte une échelle de 5 mètres placée à 1,5 m du mur ?',
        step1: 'L\'échelle est l\'hypoténuse, la distance au mur est une cathète :',
        step2: 'Isoler la cathète cherchée (la hauteur) :',
        step3: 'L\'échelle monte à presque 4,77 m :',
        mia_comment: 'Dans le jeu, j\'utilise exactement ce calcul pour vérifier si Lumi peut atteindre une échelle !',
      },
    },
    realworld: {
      screen: {
        title: 'Diagonale d\'écran',
        desc: 'La "taille" d\'un écran, c\'est toujours sa diagonale — calculée avec Pythagore à partir de la largeur et de la hauteur.',
      },
      football: {
        title: 'Diagonale d\'un terrain de foot',
        desc: 'Un terrain de foot mesure 105 m × 68 m. Quelle distance y a-t-il d\'un coin à l\'autre ? Pythagore te le dit.',
      },
      wifi: {
        title: 'Portée du Wi-Fi',
        desc: 'Ta box est au rez-de-chaussée, toi au 1er étage. La vraie distance jusqu\'à la box est l\'hypoténuse formée par l\'écart horizontal et l\'écart vertical.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Hypoténuse prise pour une cathète',
        correct: 'c est toujours le côté le plus long',
        why: 'L\'hypoténuse $c$ est TOUJOURS en face de l\'angle droit. C\'est le côté le plus long. Si tu la confonds avec une cathète, tout le calcul est faux.',
      },
      root: {
        wrong: 'Racine de la somme',
        correct: 'D\'abord additionner, puis la racine',
        why: '$\\sqrt{a^2 + b^2}$ n\'est PAS la même chose que $a + b$ ! Exemple : $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, mais $3 + 4 = 7$.',
        mia_warning: 'C\'est Tim qui a trouvé cette erreur dans mon code — la détection de collision était 40 % trop imprécise !',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'Mia veut créer un système de butin pour Hafenlichter. Les joueurs doivent pouvoir trouver des objets rares — mais pas trop souvent, sinon ça devient ennuyeux, et pas trop rarement, sinon c\'est frustrant. "C\'est du calcul de probabilités pur", dit Jule. Mia s\'installe et se met à calculer.',
      challenge: 'Le système de butin doit être équitable et captivant.',
      outro: 'Le système de butin de Mia fonctionne ! Elle a réglé les probabilités de drop pour que les joueurs trouvent en moyenne un objet rare toutes les 20 caisses. "Les maths derrière sont plutôt simples", dit-elle en souriant — "mais l\'équilibrage a quand même pris du temps."',
    },
    objectives: {
      basic: 'Exprimer des probabilités sous forme de fraction, de nombre décimal et de pourcentage',
      tree: 'Résoudre des expériences aléatoires à plusieurs étapes avec des arbres de probabilités',
      expected_value: 'Calculer et interpréter l\'espérance',
      complement: 'Travailler avec la probabilité de l\'événement contraire ("au moins une fois...")',
    },
    explanation: {
      intro: 'Quelle est la probabilité d\'obtenir un 6 avec un dé ? Quelle est la chance de trouver un objet rare dans le jeu ? Pour répondre à ce genre de questions, tu as besoin du calcul des probabilités. L\'idée de base est simple :',
      range: 'Une probabilité est toujours comprise entre 0 (impossible) et 1 (certain). Tu peux l\'écrire sous forme de fraction ($\\frac{1}{6}$), de nombre décimal ($0{,}167$) ou de pourcentage ($16{,}7\\%$).',
      mia_tip: 'Dans Hafenlichter, $P(\\text{objet rare}) = 0{,}05$. Ça veut dire : à chaque drop, le joueur a 5 % de chances. Ça paraît peu — mais sur beaucoup de drops, ça finit par compter !',
      tree: 'Pour les expériences à plusieurs étapes (par exemple lancer un dé deux fois), tu utilises un arbre de probabilités. Le long d\'un chemin, tu multiplies les probabilités :',
      complement: 'Souvent, c\'est plus simple de calculer "le contraire". La probabilité que quelque chose ne se produise PAS est :',
    },
    concepts: {
      laplace: {
        title: 'Expérience de Laplace',
        desc: 'Quand tous les résultats sont également probables (comme avec un dé équilibré), tu divises simplement : les résultats favorables par tous les résultats possibles.',
      },
      complement: {
        title: 'Événement contraire',
        desc: 'La probabilité que A ne se produise PAS. Super utile pour les exercices du type "au moins une fois" !',
      },
      expected: {
        title: 'Espérance',
        desc: 'La valeur "moyenne" sur beaucoup de répétitions. Pour un dé : $E(X) = 3{,}5$ — tu ne peux jamais obtenir 3,5, mais en moyenne, c\'est la valeur qui ressort.',
      },
    },
    examples: {
      dice: {
        title: 'Obtenir un nombre pair',
        context: 'Quelle est la probabilité d\'obtenir un nombre pair en lançant un dé ?',
        step1: 'Le dé a 6 faces — c\'est notre $\\Omega$ :',
        step2: 'Résultats favorables (nombres pairs) : 2, 4, 6 — ça en fait 3 :',
        step3: 'Calculer la probabilité :',
        mia_comment: '50 % — c\'est intuitivement évident. Mais pour des questions plus complexes, la formule aide quand l\'intuition ne suffit plus !',
      },
      loot: {
        title: 'Au moins un objet rare',
        context: 'Mia veut savoir : quelle est la probabilité d\'obtenir au moins un objet rare en 10 drops ?',
        step1: 'La probabilité d\'un objet rare par drop est de 5 % :',
        step2: 'Utiliser l\'événement contraire : calculer d\'abord qu\'AUCUN objet rare ne tombe en 10 drops :',
        step3: 'Ça fait environ 60 % — dans 60 % des cas, on n\'obtient AUCUN objet rare :',
        step4: 'La probabilité contraire est la réponse cherchée :',
        mia_comment: '40 % de chances d\'avoir au moins un objet rare en 10 drops — ça me paraît équitable ! Si les joueurs sont frustrés, j\'augmente simplement le taux de drop.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Loot boxes dans les jeux',
        desc: 'Des jeux comme Genshin Impact ou EA Sports FC utilisent des probabilités pour leurs loot boxes. Dans les boutiques d\'applications d\'Apple et de Google, les chances de gain doivent être affichées – avec les maths, tu peux vérifier si un achat vaut le coup.',
      },
      shuffle: {
        title: 'Lecture aléatoire Spotify',
        desc: 'Le mode aléatoire de Spotify n\'est pas vraiment aléatoire — parce que le "vrai" hasard paraît bizarre (parfois, la même chanson passe 3 fois de suite). Spotify utilise des algorithmes qui "semblent" plus aléatoires.',
      },
      lottery: {
        title: 'Chances de gagner au loto',
        desc: '6 bons numéros au loto — ça paraît faisable ? La probabilité réelle est infime :',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Additionner les chemins au lieu de multiplier',
        correct: 'Multiplier le long d\'un chemin',
        why: 'Dans un arbre de probabilités, tu multiplies le long d\'un chemin (liaison ET). Tu ne peux additionner que si tu regroupes différents chemins (liaison OU).',
        mia_warning: 'J\'ai fait cette erreur dans le système de butin. Les taux de drop étaient beaucoup trop élevés, parce que j\'avais additionné au lieu de multiplier — chaque joueur avait tout tout de suite !',
      },
      percent: {
        wrong: 'Pourcentages au-dessus de 100 %',
        correct: 'Le maximum est 100 %',
        why: 'Une probabilité ne peut jamais être supérieure à 1 (= 100 %). Si ton résultat donne $P > 1$, tu as fait une erreur de calcul.',
      },
    },
  },
};
