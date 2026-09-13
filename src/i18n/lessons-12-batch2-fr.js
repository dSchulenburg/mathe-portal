export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai est face au dernier problème d\'équilibrage de « Hafenlichter 3D » : les loot drops doivent paraître justes, tout en restant excitants. Si chaque boss lâche exactement la même quantité d\'or, c\'est ennuyeux — trop de variance, et les joueurs se plaignent d\'injustice. « J\'ai besoin d\'une distribution qui a l\'air naturelle — beaucoup de valeurs proches de la moyenne, peu de valeurs extrêmes », dit Kai à sa collègue Priya. La réponse du cours de probabilités : la loi normale, avec sa courbe en cloche parfaite.',
      challenge: 'Kai doit calibrer le système de butin et de performance de « Hafenlichter 3D » pour que les récompenses soient réparties équitablement et que les temps d\'image restent sous le seuil critique — la loi normale et ses règles sigma lui fournissent l\'outil pour cela.',
      outro: 'Avec la loi normale, Kai a construit un système d\'équilibrage élégant : les loot drops suivent une courbe en cloche autour de la valeur visée, et les règles sigma garantissent que les valeurs aberrantes sont extrêmement rares. « Ce qui est bien : je peux maintenant calculer exactement quel pourcentage des joueurs obtiendra une certaine valeur de drop », explique-t-il à l\'équipe. Et avec la transformation $z$, il compare des métriques complètement différentes — temps d\'image, répartition des dégâts, durée de jeu — sur une échelle commune. La courbe en cloche est partout.',
    },
    objectives: {
      bell_curve: 'Comprendre la loi normale $N(\\mu, \\sigma^2)$ comme loi continue à courbe en cloche et interpréter ses paramètres',
      sigma_rules: 'Appliquer les règles sigma ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) pour estimer rapidement des probabilités',
      z_transformation: 'Effectuer la transformation $z$ et calculer des probabilités avec la loi normale centrée réduite $\\Phi(z)$',
      central_limit_theorem: 'Connaître le théorème central limite et expliquer pourquoi la loi normale apparaît partout',
    },
    explanation: {
      intro: 'La loi normale est la loi continue la plus importante de la statistique — et tu la rencontres partout : tailles des personnes, valeurs mesurées, temps d\'image, résultats d\'examens. Sa densité a la célèbre forme de cloche, symétrique autour de l\'espérance $\\mu$. L\'écart-type $\\sigma$ détermine si la cloche est large ou étroite : petit $\\sigma$ = cloche étroite et haute (peu de dispersion), grand $\\sigma$ = cloche large et plate (beaucoup de dispersion). La fonction de densité est :',
      sigma_rules: 'Les règles sigma sont ton outil rapide : elles te disent immédiatement quel pourcentage de toutes les valeurs se trouve dans un certain intervalle autour de $\\mu$ — sans table, sans calculatrice. Dans $\\pm 1\\sigma$, on trouve environ $68{,}3\\%$, dans $\\pm 2\\sigma$ environ $95{,}4\\%$ et dans $\\pm 3\\sigma$ presque tout — $99{,}7\\%$. Cela signifie : les valeurs au-delà de $3\\sigma$ sont extrêmement rares !',
      kai_tip: 'En développement de jeux, j\'utilise les règles sigma tous les jours pour l\'équilibrage. Si je veux que 95 % des loot drops soient entre 30 et 70 pièces d\'or, je fixe $\\mu = 50$ et $2\\sigma = 20$, donc $\\sigma = 10$. C\'est fait ! Les règles me donnent immédiatement la répartition, sans que j\'aie besoin d\'intégrer quoi que ce soit.',
      z_transformation: 'Mais que faire si tu as besoin d\'une probabilité exacte — pas seulement des règles sigma ? C\'est là qu\'intervient la transformation $z$ : tu convertis ta valeur $x$ en une valeur $z$ standardisée et tu cherches dans la table de la loi normale centrée réduite $\\Phi(z)$. La valeur $z$ te dit à combien d\'écarts-types $x$ se trouve de l\'espérance :',
      central_limit: 'Pourquoi la loi normale est-elle omniprésente ? Le théorème central limite donne la réponse : si tu additionnes suffisamment de variables aléatoires indépendantes, leur somme se rapproche d\'une loi normale — quelle que soit l\'allure des lois individuelles. C\'est pourquoi les moyennes suivent presque toujours une loi normale, même quand les données individuelles ne la suivent pas :',
    },
    concepts: {
      normal_distribution: {
        title: 'Loi normale $N(\\mu, \\sigma^2)$',
        desc: 'La loi continue à densité en forme de cloche. $\\mu$ est l\'espérance (centre de la cloche), $\\sigma^2$ la variance (largeur de la cloche). L\'aire sous la courbe vaut toujours 1. Symétrique autour de $\\mu$ : médiane = mode = espérance.',
      },
      sigma_rules: {
        title: 'Règles sigma',
        desc: 'Les trois règles d\'or : $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Indispensables pour des estimations rapides.',
      },
      z_transformation: {
        title: 'Transformation $z$',
        desc: 'Transforme toute loi normale en loi normale centrée réduite $N(0, 1)$ : $z = \\frac{x - \\mu}{\\sigma}$. Ensuite, tu lis $P(X \\leq x) = \\Phi(z)$ dans la table. Ainsi, on peut comparer n\'importe quelles lois normales.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Probabilité d\'un loot drop',
        context: 'Dans « Hafenlichter 3D », les boss lâchent de l\'or selon une loi normale avec $\\mu = 50$ et $\\sigma = 8$. Kai veut savoir : quelle est la probabilité d\'un drop légendaire d\'au moins 70 pièces d\'or ?',
        step1: 'Établir le modèle — les drops d\'or suivent une loi normale :',
        step2: 'Appliquer la transformation $z$ — à combien d\'écarts-types 70 se trouve-t-il de 50 ?',
        step3: 'Chercher dans la table — lire $\\Phi(2{,}5)$ :',
        step4: 'Calculer la probabilité de l\'événement contraire — seulement $0{,}6\\%$ obtiennent 70 pièces d\'or ou plus :',
        kai_comment: 'Parfait ! Un drop légendaire pour moins de 1 % des joueurs — ça paraît spécial sans être injuste. La loi normale me donne un contrôle total sur la rareté.',
      },
      frame_times: {
        title: 'Analyse des temps d\'image',
        context: 'À 60 FPS, chaque image doit être rendue en $16{,}7\\,\\text{ms}$. Le profiler de Kai montre : les temps d\'image suivent une loi normale avec $\\mu = 16{,}7\\,\\text{ms}$ et $\\sigma = 2{,}1\\,\\text{ms}$. À quelle fréquence le jeu lague-t-il (temps d\'image $> 20\\,\\text{ms}$) ?',
        step1: 'Établir le modèle — les temps d\'image suivent une loi normale :',
        step2: 'La transformation $z$ pour le seuil de lag $x = 20$ :',
        step3: 'Lire la valeur dans la table :',
        step4: 'Calculer la probabilité de l\'événement contraire — environ une image sur 17 lague :',
        kai_comment: 'Presque 6 % de lags — c\'est trop pour un jeu 3D fluide. Je dois optimiser le moteur de rendu jusqu\'à ce que $\\sigma$ diminue. Objectif : $\\sigma \\leq 1{,}5$, et alors moins de 1,5 % des images sont concernées.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Contrôle qualité dans l\'industrie',
        desc: 'Les usines utilisent la règle des $3\\sigma$ : si une pièce s\'écarte de plus de $3\\sigma$ de la cote nominale, elle est retirée. Le management Six Sigma va encore plus loin — $6\\sigma$ signifie au maximum 3,4 défauts par million de pièces. La loi normale est la base de l\'assurance qualité industrielle.',
      },
      iq_scores: {
        title: 'Tests de QI et standardisation',
        desc: 'Les scores de QI suivent par définition une loi normale avec $\\mu = 100$ et $\\sigma = 15$. Cela signifie : environ $68\\%$ de la population a un QI entre 85 et 115, environ $95\\%$ entre 70 et 130. Un QI de 145 ($z = 3$) est aussi rare qu\'un loot drop de 70 pièces d\'or !',
      },
      stock_returns: {
        title: 'Rendements boursiers et risque',
        desc: 'Les rendements journaliers des actions sont souvent modélisés par une loi normale — $\\sigma$ représente alors le risque. Les gestionnaires de portefeuille utilisent la transformation $z$ pour calculer la probabilité d\'un krach. Mais attention : dans la réalité, les valeurs extrêmes sont plus fréquentes que ce que prévoit la loi normale (« fat tails », queues épaisses).',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'Loi normale notée $N(\\mu, \\sigma)$ — écart-type au lieu de variance',
        correct: 'La notation correcte est $N(\\mu, \\sigma^2)$ — le deuxième paramètre est toujours la variance',
        why: 'Dans la notation $N(\\mu, \\sigma^2)$, le deuxième paramètre représente la variance $\\sigma^2$, pas l\'écart-type $\\sigma$. Les confondre donne des probabilités complètement fausses — par exemple, $N(0, 4)$ est une loi avec $\\sigma = 2$, pas $\\sigma = 4$ !',
        kai_warning: 'Cette erreur m\'a un jour détruit tout l\'équilibrage du butin. Je voulais $\\sigma = 8$, mais j\'avais écrit $N(50, 8)$ — ce qui signifie $\\sigma = \\sqrt{8} \\approx 2{,}83$. Les drops étaient beaucoup trop uniformes ! Toujours y penser : $N(\\mu, \\sigma^2)$ !',
      },
      z_sign: {
        wrong: 'Formule de $z$ à l\'envers : $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'La bonne formule est $z = \\frac{x - \\mu}{\\sigma}$ — valeur moins espérance, pas l\'inverse',
        why: 'Si tu inverses les termes du numérateur, tu obtiens le mauvais signe. Une valeur au-dessus de la moyenne doit donner un $z$ positif, une valeur en dessous, un résultat négatif. Pour $x = 70$ et $\\mu = 50$, on a $z = +2{,}5$ (au-dessus de la moyenne), pas $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai est arrivé au cœur de « Hafenlichter 3D » : le moteur 3D. Chaque objet du jeu — chaque bateau, chaque vague, chaque lanterne du port — doit pouvoir être tourné, mis à l\'échelle et déplacé. « En 2D, les transformations étaient de simples formules », se souvient-il en pensant aux débuts de Mia. « Mais en 3D, il te faut un système qui enchaîne autant de transformations que tu veux — et ce sont les matrices. » Kai ouvre le code du shader et voit des matrices partout : model matrix, view matrix, projection matrix.',
      challenge: 'Kai doit comprendre et implémenter les transformations 3D de son moteur de jeu — rotation, mise à l\'échelle et processus de transition, le tout piloté par la multiplication de matrices.',
      outro: 'Les matrices sont devenues l\'outil quotidien de Kai : chaque transformation 3D est une matrice, chaque animation une suite de multiplications de matrices, chaque comportement de transition une matrice stochastique. « Ce qui est génial : peu importe la complexité de la transformation — à la fin, c\'est toujours $\\vec{x}\' = M \\cdot \\vec{x}$ », dit-il. La matrice MVP ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) transforme maintenant, à chaque image, des milliers de sommets de Hafenlichter en pixels à l\'écran.',
    },
    objectives: {
      matrix_operations: 'Additionner et multiplier des matrices et appliquer les règles de calcul avec assurance — en particulier la non-commutativité',
      transformation_matrices: 'Établir des matrices de transformation pour la rotation, la mise à l\'échelle et la symétrie, et les appliquer à des vecteurs',
      stochastic_matrices: 'Calculer des matrices stochastiques et des vecteurs fixes pour des processus de transition',
      inverse_matrix: 'Déterminer la matrice inverse et comprendre sa signification comme « transformation retour »',
    },
    explanation: {
      intro: 'Les matrices sont des tableaux rectangulaires de nombres — mais leur vraie force, c\'est qu\'elles représentent des applications. Une matrice $2 \\times 2$ transforme des vecteurs 2D, une matrice $3 \\times 3$ transforme des vecteurs 3D. Multiplier signifie : ligne fois colonne, puis additionner. Pour $C = A \\cdot B$, on a :',
      transformation: 'En graphisme 3D, chaque transformation géométrique est une matrice : rotation, mise à l\'échelle, symétrie. La matrice de rotation autour de l\'axe $z$ fait tourner un point $(x, y, z)$ d\'un angle $\\theta$ — et la coordonnée $z$ reste inchangée :',
      kai_tip: 'Dans mon moteur, j\'enchaîne les transformations par multiplication de matrices : d\'abord mettre à l\'échelle, puis tourner, puis déplacer. L\'ordre est décisif — les matrices ne sont pas commutatives ! D\'abord tourner puis déplacer donne tout autre chose que d\'abord déplacer puis tourner. C\'est pourquoi je lis toujours les chaînes de matrices de droite à gauche.',
      stochastic: 'Les matrices stochastiques décrivent des processus de transition : quelle est la probabilité de passer d\'un état à un autre ? La somme de chaque colonne vaut 1 (avec des vecteurs colonnes). Quand tu multiplies le vecteur d\'état $\\vec{v}_n$ par la matrice de transition $T$, tu obtiens l\'état suivant $\\vec{v}_{n+1}$ :',
      inverse: 'La matrice inverse $A^{-1}$ est la « touche annuler » : $A \\cdot A^{-1} = I$ (matrice identité). Si $A$ est une rotation de $30°$, alors $A^{-1}$ est la rotation de $-30°$. Toutes les matrices n\'ont pas d\'inverse — seulement si $\\det(A) \\neq 0$ :',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Multiplication de matrices',
        desc: 'Ligne fois colonne : $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. Le nombre de colonnes de $A$ doit être égal au nombre de lignes de $B$. Important : en général, $A \\cdot B \\neq B \\cdot A$ ! L\'ordre compte.',
      },
      transformation_matrix: {
        title: 'Matrice de transformation',
        desc: 'Toute application linéaire (rotation, mise à l\'échelle, symétrie) peut être représentée par une matrice. La matrice de rotation $R(\\theta)$ fait tourner des vecteurs d\'un angle $\\theta$. Plusieurs transformations s\'enchaînent par multiplication de matrices — en lisant de droite à gauche.',
      },
      stochastic_matrix: {
        title: 'Matrice stochastique et vecteur fixe',
        desc: 'Dans une matrice stochastique, la somme de chaque colonne vaut 1 — elle décrit des probabilités de transition. Le vecteur fixe $\\vec{v}_{\\text{fix}}$ tel que $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ est l\'état d\'équilibre à long terme, quel que soit l\'état de départ.',
      },
    },
    examples: {
      '3d_rotation': {
        title: 'Rotation 3D d\'une lumière du port',
        context: 'Kai veut faire tourner une lanterne du port de $90°$ autour de l\'axe $z$. La lanterne se trouve au point $(3, 0, 5)$. Comment calcule-t-il la nouvelle position ?',
        step1: 'Établir la matrice de rotation de $90°$ autour de l\'axe $z$ ($\\cos 90° = 0$, $\\sin 90° = 1$) :',
        step2: 'Écrire le vecteur position de la lanterne comme vecteur colonne :',
        step3: 'Matrice fois vecteur — multiplier ligne par ligne :',
        step4: 'Résultat : la lanterne se trouve maintenant en $(0, 3, 5)$ — tournée de $90°$ dans le plan $xy$, $z$ inchangé :',
        kai_comment: 'C\'est exactement comme ça que fonctionne chaque image dans mon moteur : des milliers de sommets sont multipliés par la model matrix, puis par la view matrix (position de la caméra), puis par la projection matrix (perspective). Trois multiplications de matrices par sommet — et le GPU fait ça en quelques millisecondes !',
      },
      player_states: {
        title: 'Comportement des joueurs comme chaîne de Markov',
        context: 'Dans « Hafenlichter 3D », les joueurs alternent entre Explorer (E) et Combattre (K). Kai a observé : qui explore continue d\'explorer à $70\\%$ et passe au combat à $30\\%$. Qui combat reste en combat à $80\\%$ et se remet à explorer à $20\\%$. Actuellement, $60\\%$ des joueurs explorent.',
        step1: 'Établir la matrice de transition $T$ et le vecteur de départ $\\vec{v}_0$ :',
        step2: 'Calculer une étape — $\\vec{v}_1 = T \\cdot \\vec{v}_0$ :',
        step3: 'Déterminer le vecteur fixe — résoudre le système $T \\cdot \\vec{v} = \\vec{v}$ avec $x + y = 1$ :',
        step4: 'À long terme, $40\\%$ explorent et $60\\%$ combattent — indépendamment du départ :',
        kai_comment: 'C\'est de l\'or pour mon game design ! Le vecteur fixe me montre qu\'à long terme, les joueurs combattent plus qu\'ils n\'explorent — peu importe comment ils commencent. Si je veux que ce soit plus équilibré, je dois modifier les probabilités de transition. Les matrices rendent le comportement des joueurs calculable !',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Infographie et moteurs 3D',
        desc: 'Chaque moteur 3D (Unity, Unreal, Godot) repose sur la multiplication de matrices. Le pipeline MVP — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — transforme chaque point 3D en un point de l\'écran 2D. Les GPU modernes sont au fond des machines géantes à multiplier des matrices.',
      },
      google_pagerank: {
        title: 'Google PageRank',
        desc: 'L\'algorithme de recherche d\'origine de Google modélise le web comme une gigantesque matrice stochastique : chaque page web est un état, chaque lien une probabilité de transition. Le vecteur fixe $\\vec{r} = T \\cdot \\vec{r}$ donne le classement — les pages avec les valeurs les plus élevées dans le vecteur fixe apparaissent tout en haut.',
      },
      robotics: {
        title: 'Robotique et commande de machines',
        desc: 'Les bras robotisés sont composés d\'articulations qui effectuent chacune une rotation. La position de la main s\'obtient comme produit de toutes les matrices de rotation le long du bras. C\'est ce qu\'on appelle la cinématique directe — et la matrice inverse résout le problème inverse : « De quels angles d\'articulation ai-je besoin pour cette position de la main ? »',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Multiplication de matrices traitée comme une multiplication de nombres : $A \\cdot B = B \\cdot A$',
        correct: 'Les matrices ne sont PAS commutatives : en général, $A \\cdot B \\neq B \\cdot A$',
        why: 'D\'abord tourner puis déplacer donne un autre résultat que d\'abord déplacer puis tourner. En graphisme 3D, un ordre inversé conduit à des positions complètement fausses. Donc : toujours lire les chaînes de transformations de droite à gauche !',
        kai_warning: 'Un jour, j\'ai cherché un bug pendant toute une journée parce que j\'avais inversé la rotation et la translation. Mes bateaux tournaient autour du centre du monde au lieu de tourner autour de leur propre axe ! Depuis, je lis toujours les chaînes de matrices de droite à gauche : $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$ — d\'abord tourner, puis déplacer.',
      },
      stochastic_rows_cols: {
        wrong: 'Somme des lignes = 1 supposée pour des matrices stochastiques avec des vecteurs colonnes',
        correct: 'Avec des vecteurs colonnes, c\'est la somme des colonnes qui doit valoir 1 : $\\sum_i t_{ij} = 1$',
        why: 'La convention dépend de l\'utilisation de vecteurs lignes ou de vecteurs colonnes. À l\'école et dans les universités allemandes, le vecteur colonne est la norme — les colonnes de la matrice de transition doivent alors avoir une somme égale à 1. Chaque colonne décrit : « Depuis l\'état $j$ — comment se répartissent les transitions ? »',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'C\'est la nuit de la sortie du jeu, sur le port de Hambourg. Les lumières des Landungsbrücken se reflètent dans l\'eau, et sur le grand écran devant le marché aux poissons brille le titre : « Hafenlichter 3D ». Kai est sur scène, le micro à la main, et n\'en revient pas — trois ans de développement, et maintenant le jeu est enfin terminé. Dans le public, il repère deux visages connus : Mia, qui avait tout lancé à l\'époque avec son jeu en pixel art 2D, et Amir, dont les algorithmes DataPulse pilotent l\'IA des PNJ. « Vous vous souvenez », dit Kai au micro, « quand Mia a commencé avec des fonctions affines pour déplacer des personnages sur une droite ? Ensuite, Amir a construit le pipeline de données avec des dérivées et la loi binomiale. Et maintenant, nous voilà — avec des matrices, des intégrales et la loi normale, nous avons créé un monde 3D complet. » La foule applaudit. Mais avant que la fête commence vraiment, Kai a encore un dernier défi : le bac de maths.',
      challenge: 'Le plus grand examen approche — l\'Abitur réunit l\'analyse, la géométrie analytique et les probabilités en une seule épreuve. Kai a besoin d\'une stratégie qui relie tous les thèmes, maximise les points et évite les erreurs typiques.',
      outro: 'La fête de sortie sur le port bat son plein, la musique joue, et Kai, Mia et Amir trinquent. « Trois ans de maths », dit Mia, « de la droite à la loi normale. » « Des données aux réseaux de neurones », ajoute Amir. « Des pixels 2D au moteur 3D », conclut Kai. Ils regardent l\'Elbe, où dansent les lumières du port — chacune un sommet, transformé par une matrice, éclairé par une fonction exponentielle, équilibré par une loi normale. Les mathématiques n\'ont jamais été seulement du calcul. C\'était la langue avec laquelle ils ont transformé leurs idées en réalité. Le jeu est sorti. L\'examen arrive. Et quel que soit le résultat — le voyage en valait la peine. Chaque fonction, chaque dérivée, chaque intégrale les a menés jusqu\'ici. Jusqu\'au port. Jusqu\'au but. Et au début de tout ce qui va suivre.',
    },
    objectives: {
      exam_strategy: 'Développer une stratégie d\'examen claire : parcourir les exercices, évaluer le rapport points/temps, commencer par les exercices faciles',
      cross_topic_connections: 'Reconnaître et utiliser les liens entre l\'analyse, la géométrie analytique et les probabilités',
      time_management: 'Planifier de façon réaliste le temps prévu pour chaque exercice et le respecter',
      error_prevention: 'Reconnaître les erreurs typiques, faire des vérifications de plausibilité et interpréter les résultats dans leur contexte',
    },
    explanation: {
      intro: 'L\'Abitur n\'est pas un sprint, mais un jeu de stratégie — comme un boss de fin avec plusieurs phases. Tu as environ 4 à 5 heures pour trois grands blocs thématiques. La clé n\'est pas de tout savoir, mais de bien choisir tes priorités et de travailler proprement. Kai l\'a appris avec son jeu : « Tu ne peux pas corriger tous les bugs en même temps. Tu corriges ceux qui ont le plus d\'impact — et c\'est exactement comme ça que tu abordes l\'examen. »',
      kai_rallying: 'Les amis, on a fait des maths pendant trois ans — pas parce qu\'on y était obligés, mais parce que c\'était la clé de nos projets. Mia a commencé avec les fonctions, Amir a entraîné son IA avec les probabilités, et moi, j\'ai construit un monde 3D avec des matrices. Le bac, ce n\'est plus que le générique de fin après le combat final. On est prêts !',
      structure: 'L\'épreuve se compose généralement de trois parties obligatoires — analyse (souvent le plus gros bloc), géométrie analytique et probabilités. Les points se répartissent à peu près ainsi :',
      time_strategy: 'Planifie ton temps en proportion des points. Si un exercice rapporte 10 points sur 100, consacre-lui environ $10\\%$ de ton temps. Et la règle d\'or : commence par les exercices dont tu es sûr. Chaque point assuré compte autant qu\'un point durement gagné !',
      mia_wisdom: 'Souvenez-vous des bases ! L\'étude d\'une fonction suit toujours le même schéma : ensemble de définition, zéros, extremums, points d\'inflexion, comportement pour $x \\to \\pm\\infty$. Si vous connaissez ce schéma, chaque fonction n\'en est qu\'une variante. Je l\'ai appris avec mes personnages de jeu — chaque mouvement est, au fond, une fonction.',
      checking: 'Après chaque question : vérification de plausibilité ! Les unités sont-elles correctes ? Les signes ont-ils un sens ? Le résultat est-il dans un ordre de grandeur réaliste ? Une probabilité supérieure à 1 ou une aire négative sont des signaux d\'alarme immédiats — dans ce cas, mieux vaut refaire le calcul que continuer.',
      amir_data: 'Je vérifie toujours mes résultats avec des cas limites : que se passe-t-il pour $x = 0$ ? Pour de très grandes valeurs de $x$ ? Ma solution converge-t-elle ou diverge-t-elle ? Cette façon de penser, qui vient du débogage, vaut tout autant pour l\'examen. Et en probabilités : toujours vérifier que $\\sum P = 1$ !',
      confidence: 'Le plus important pour finir : tu sais plus de choses que tu ne le penses. Trois ans d\'entraînement sont entre tes mains. Si tu bloques un moment pendant l\'examen — respire, relis l\'énoncé et commence par ce que tu sais faire à coup sûr. Chaque point compte. Et n\'oublie pas : les maths ne sont pas un talent, mais une langue que tu as apprise. Parle-la.',
    },
    concepts: {
      read_then_plan: {
        title: 'Lire → Planifier → Calculer → Vérifier',
        desc: 'Le schéma en 4 étapes pour chaque exercice : (1) Lire l\'énoncé en entier, surligner les informations. (2) Planifier la stratégie de résolution — de quelles méthodes as-tu besoin ? (3) Calculer proprement et de façon claire. (4) Vérifier le résultat : unités, signes, plausibilité, contexte.',
      },
      point_maximizing: {
        title: 'Efficacité des points',
        desc: 'Tous les exercices ne sont pas aussi difficiles par point. Commence par les exercices où tu gagnes le plus de points dans le moins de temps. Les dernières questions sont souvent les plus difficiles — mieux vaut d\'abord récolter tous les points « faciles » dans tous les exercices, puis revenir aux questions difficiles.',
      },
      plausibility_check: {
        title: 'Vérification de plausibilité',
        desc: 'Quatre vérifications rapides qui évitent les fautes d\'inattention : (1) Unités : l\'unité correspond-elle au contexte ? (2) Signes : une valeur négative a-t-elle un sens ici ? (3) Limites : que se passe-t-il pour $x \\to 0$ ou $x \\to \\infty$ ? (4) Croquis : le résultat correspond-il à ce que montre le graphique ?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Exercice d\'analyse typique : étude de fonction + intégrale',
        context: 'Kai modélise la consommation d\'énergie de son moteur 3D avec $f(x) = (2x - 1) \\cdot e^{-x}$. Détermine les extremums et calcule l\'aire entre le graphe et l\'axe des $x$ sur $[0;\\, 3]$.',
        step1: 'Poser la fonction — ici, elle est déjà donnée :',
        step2: 'Dérivée avec la règle du produit : $u = 2x - 1$, $v = e^{-x}$, donc $f\'(x) = u\' \\cdot v + u \\cdot v\'$ :',
        step3: 'Trouver l\'extremum — poser $f\'(x) = 0$ ($e^{-x} > 0$ toujours, donc parenthèse = 0) :',
        step4: 'Calcul de l\'aire — intégration par parties ou détermination d\'une primitive :',
        mia_comment: 'C\'est exactement le schéma dont je parle : dérivée avec la règle du produit, trouver le zéro, calculer l\'intégrale. La fonction change, mais la stratégie reste toujours la même. S\'entraîner jusqu\'à ce que ça devienne automatique !',
      },
      mixed_stochastik: {
        title: 'Exercice de probabilités typique : test d\'hypothèse',
        context: 'Le test A/B d\'Amir montre : sur 50 utilisateurs, normalement $8\\%$ cliquent sur le nouveau bouton. Après un redesign, il veut tester si le taux de clics a augmenté ($\\alpha = 5\\%$).',
        step1: 'Établir le modèle — loi binomiale avec les paramètres :',
        step2: 'Formuler les hypothèses — test unilatéral vers le haut :',
        step3: 'Chercher la zone critique — tester $k = 8$ ($P$ encore trop grand) :',
        step4: 'Déterminer la zone de rejet — à partir de $k = 9$, $H_0$ est rejetée :',
        amir_comment: 'Au fond, les tests d\'hypothèses sont une logique de décision : tu calcules à quel point ton résultat est improbable sous $H_0$. S\'il est plus improbable que $\\alpha$, tu rejettes $H_0$. C\'est exactement comme ça que je prends des décisions fondées sur les données chez DataPulse — simplement avec des échantillons plus grands !',
      },
    },
    realworld: {
      release_day: {
        title: 'Jour de sortie : quand tout se rejoint',
        desc: 'Sortir un jeu, c\'est comme passer un examen : des mois de préparation aboutissent à un moment décisif. « Hafenlichter 3D » de Kai réunit les bases 2D (Mia), l\'analyse de données (Amir) et les mathématiques 3D (Kai) — exactement comme l\'Abitur réunit l\'analyse, la géométrie et les probabilités. La préparation, c\'est tout.',
      },
      project_management: {
        title: 'Gestion de projet et priorités',
        desc: 'En développement logiciel, tu classes les fonctionnalités par priorité selon leur impact et l\'effort nécessaire — exactement comme les exercices d\'examen selon les points et la difficulté. La formule $\\text{Efficacité} = \\frac{\\text{Points}}{\\text{Temps}}$ vaut aussi dans la vie professionnelle : concentre-toi sur ce qui fait la plus grande différence.',
      },
      lifelong_learning: {
        title: 'Apprendre tout au long de la vie',
        desc: 'L\'Abitur n\'est pas la fin, mais le début. Mia étudie le game design, Amir la data science, Kai l\'informatique des médias — et partout, ils ont besoin des mathématiques. La capacité à se plonger dans de nouveaux sujets vaut plus que n\'importe quelle formule. Les maths vous ont appris à penser.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Écrire un résultat sans unité et sans lien avec le contexte : « $A = 12{,}5$ »',
        correct: 'Toujours une unité et une interprétation : « $A = 12{,}5\\,\\text{u.a.}$, ce qui correspond à $12{,}5\\,\\text{m}^2$ »',
        why: 'À l\'Abitur, l\'interprétation dans le contexte rapporte des points ! Un résultat brut, sans unité ni lien avec l\'énoncé, te fait perdre des points faciles. Écris toujours une phrase de réponse : « L\'aire mesure $12{,}5\\,\\text{m}^2$, ce qui correspond à la surface végétalisée du parc. »',
        kai_warning: 'En développement de jeux, des nombres sans contexte n\'ont aucune valeur. 12,5 — quoi ? Des pixels ? Des secondes ? Des points de dégâts ? C\'est pareil à l\'examen : écris l\'unité et formule une phrase de réponse. Ce sont des points offerts !',
      },
      skip_plausibility: {
        wrong: 'Ne pas remettre en question un résultat manifestement faux : $P(X = 5) = 1{,}3$',
        correct: 'Se méfier tout de suite : une probabilité ne peut jamais être supérieure à 1 !',
        why: 'Les vérifications de plausibilité prennent 10 secondes, mais peuvent sauver des exercices entiers. Les probabilités sont toujours comprises entre 0 et 1, les aires ne sont jamais négatives, $e^x > 0$ pour tout $x$. Si ton résultat enfreint ces règles de base, il y a une erreur de calcul derrière.',
        mia_warning: 'Dans mon dernier contrôle, j\'ai trouvé exactement ce genre d\'erreur : mon intégrale était négative alors que la fonction était positive sur tout l\'intervalle. Vérification rapide, erreur de signe repérée, corrigée — 4 points sauvés. Toujours vérifier !',
      },
    },
  },
};
