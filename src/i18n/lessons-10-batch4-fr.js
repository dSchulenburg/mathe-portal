export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'Mia assemble le niveau 4 de Lumières du Port : Lumi doit sauter sur une plateforme qui dérive lentement et régulièrement vers la droite. « Le mouvement est linéaire », explique Tim. « 60 pixels par seconde — c\'est tout. » Mia le saisit et remarque aussitôt : c\'est une équation de droite tout à fait ordinaire. Position de départ plus vitesse fois temps. Exactement ce qu\'elle a retenu de la classe de troisième — mais plus formel désormais : $f(x) = m \\cdot x + b$.',
      challenge: 'Mia doit régler la courbe de saut de Lumi pour qu\'il atterrisse précisément sur la plateforme en dérive. Pente du mouvement de la plateforme et point d\'intersection avec la trajectoire de Lumi — tout est linéaire.',
      outro: 'Une fonction affine possède deux réglages : $m$ détermine sa raideur, $b$ la décale vers le haut ou vers le bas. Mia comprend maintenant pourquoi elle en a besoin sans cesse : plateformes, consommation d\'énergie, barres de vie — partout où quelque chose augmente ou diminue d\'une quantité constante « par pas », l\'équation de droite est le bon outil.',
    },
    objectives: {
      recognize: 'Reconnaître les fonctions affines à leur expression et à leur graphe',
      slope_intercept: 'Lire la pente $m$ et l\'ordonnée à l\'origine $b$ dans la forme réduite $f(x) = mx + b$',
      point_slope: 'Établir l\'équation d\'une droite à partir d\'un point et d\'une pente avec la forme point-pente',
      two_points: 'Déterminer l\'équation d\'une droite à partir de deux points — calculer la pente, puis $b$',
    },
    explanation: {
      intro: 'Une fonction affine décrit une relation régulière : lorsque $x$ varie d\'une unité, $y$ varie toujours de la même quantité. Le graphe est donc une droite. La forme générale est :',
      slope: 'La pente $m$ mesure précisément cette « quantité par pas ». Tu l\'obtiens à partir de deux points quelconques de la droite — différence des hauteurs divisée par différence des largeurs :',
      mia_tip: 'Je pense à la plateforme de Lumi : elle dérive d\'exactement 60 pixels par seconde. C\'est mon $m = 60$ pixels/seconde. Si Lumi démarre à $b = 200$, sa position après $t$ secondes est simplement $f(t) = 60t + 200$. Une fonction affine à l\'état sauvage !',
      intercept: 'L\'ordonnée à l\'origine $b$ est la valeur où la droite coupe l\'axe vertical. Tu la lis directement sur le graphe — ou tu substitues $x = 0$ dans l\'expression :',
      point_slope: 'Si tu connais un point $P(x_0 \\mid y_0)$ et la pente $m$, le plus rapide est d\'écrire l\'équation sous la forme point-pente. Tu résous ensuite en $y$ et tu obtiens la forme réduite :',
    },
    concepts: {
      normal_form: {
        title: 'Forme réduite $f(x) = mx + b$',
        desc: 'L\'écriture standard. $m$ est la pente, $b$ l\'ordonnée à l\'origine. Tu peux lire les deux paramètres directement dans l\'expression — et tous deux ont une signification géométrique claire.',
      },
      slope: {
        title: 'Pente $m$',
        desc: 'Variation de $y$ par unité de $x$. À partir de deux points : $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Positive = croissante, négative = décroissante, $m = 0$ = droite horizontale.',
      },
      point_slope: {
        title: 'Forme point-pente',
        desc: 'Lorsqu\'un point $(x_0 \\mid y_0)$ et la pente $m$ sont connus : $y - y_0 = m(x - x_0)$. Pratique, car tu n\'as pas à calculer $b$ séparément — tu résous simplement en $y$.',
      },
      parallel_perpendicular: {
        title: 'Parallèles et perpendiculaires',
        desc: 'Deux droites sont parallèles si elles ont la même pente ($m_g = m_h$). Elles sont perpendiculaires si le produit des pentes vaut $-1$ ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Équation d\'une droite à partir de deux points',
        context: 'Mia dispose de deux points d\'observation de la trajectoire de la plateforme de Lumi : $P_1(2 \\mid 1)$ et $P_2(5 \\mid 7)$. Quelle équation de droite décrit ce mouvement ?',
        step1: 'Écrire les deux points donnés :',
        step2: 'Calculer la pente — différence des valeurs y divisée par différence des valeurs x :',
        step3: 'Établir la forme point-pente avec $P_1(2 \\mid 1)$ et $m = 2$, puis résoudre en $y$ :',
        step4: 'Équation de droite achevée, sous forme réduite :',
        mia_comment: 'Belle marche à suivre : deux points → pente → substituer → développer. Si j\'ai plus tard un troisième point, je peux vérifier avec lui si mon équation est juste.',
      },
      intersection: {
        title: 'Point d\'intersection de deux droites',
        context: 'La plateforme se déplace le long de $g\\colon y = 2x - 3$, la trajectoire de saut de Lumi le long de $h\\colon y = -x + 6$. Où se rencontrent-elles ?',
        step1: 'Noter les deux équations de droites — même variable $x$, même variable $y$ :',
        step2: 'Au point d\'intersection, les deux valeurs de $y$ sont égales. Donc : égaler les membres de droite :',
        step3: 'Résoudre en $x$ — les deux termes en $x$ d\'un côté, les constantes de l\'autre :',
        step4: 'Substituer la valeur de $x$ dans l\'une des deux équations pour obtenir la valeur de $y$. Point d\'intersection $S$ :',
        mia_comment: 'Dans le jeu, ce point d\'intersection est exactement l\'image de l\'impact. Si je connais l\'instant $x = 3$, je sais à quelle image déclencher la collision.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Forfait mobile avec abonnement',
        desc: 'Exemple classique : 9,99 € d\'abonnement par mois plus 10 centimes la minute. Le coût en fonction du temps de communication est une droite parfaite — $b$ est l\'abonnement, $m$ le prix à la minute.',
      },
      taxi: {
        title: 'Coût d\'un taxi',
        desc: '4 € de prise en charge à la montée, puis 2,50 € par kilomètre. Le coût total croît linéairement avec la distance parcourue. Lisible sur chaque reçu.',
      },
      constant_speed: {
        title: 'Mouvement à vitesse constante',
        desc: 'Un skateur part à vitesse régulière $v$, démarre à $s_0$. La distance parcourue après $t$ secondes : $s(t) = v \\cdot t + s_0$. Pure équation de droite — seuls les noms des variables changent.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Pente à l\'envers : $\\Delta x / \\Delta y$ au lieu de $\\Delta y / \\Delta x$',
        correct: 'D\'abord la hauteur (y), puis la largeur (x) : $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'La pente décrit « combien de hauteur par pas » — donc la variation de $y$ au numérateur, celle de $x$ au dénominateur. Si tu retournes la fraction, tu obtiens l\'inverse : $m = 2$ devient à tort $0{,}5$.',
        mia_warning: 'Mon astuce : je pense à un escalier. Hauteur de la marche divisée par largeur de la marche. La hauteur est toujours en haut de la fraction — comme sur l\'escalier.',
      },
      intercept_zero: {
        wrong: 'Confondre l\'ordonnée à l\'origine avec le zéro de la fonction',
        correct: 'Zéro : pose $f(x) = 0$ et résous en $x$',
        why: 'L\'ordonnée à l\'origine $b$ est la valeur de $y$ pour $x = 0$ — donc une valeur de $y$. Le zéro est la valeur de $x$ pour laquelle $f(x) = 0$. Pour $f(x) = 2x + 5$, on a $b = 5$, mais le zéro se trouve en $x = -2{,}5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'Mia conçoit un boss rotatif pour Lumières du Port. Le boss est un moulin tourbillonnant à trois bras — et Lumi doit sauter entre les intervalles. « La hitbox doit être circulaire », dit Tim. « Sinon ça paraît bancal quand Lumi frôle un bras qui n\'est même pas à proximité. » Mia a besoin du périmètre, de l\'aire et de l\'angle de chaque bras — de la géométrie du cercle à l\'état pur.',
      challenge: 'Mia doit programmer des hitboxes rondes. Et aussi la longueur d\'arc que chaque bras balaie par seconde — sinon la vitesse de rotation sera fausse.',
      outro: 'Avec $U = 2\\pi r$ et $A = \\pi r^2$, Mia dispose des outils standard. Et avec le radian, elle convertit directement les angles de rotation en distances parcourues — bien plus vite que par le détour des $360°$. « Le radian est le langage de programmation des rotations », retient-elle.',
    },
    objectives: {
      umfang_flaeche: 'Calculer le périmètre et l\'aire d\'un cercle à partir du rayon ou du diamètre',
      bogenmass: 'Convertir sûrement les angles entre degrés et radians',
      sektor: 'Calculer l\'aire et la longueur d\'arc d\'un secteur pour un angle au centre donné',
      bogenlaenge: 'Déterminer les longueurs d\'arc du cercle entier et du secteur dans les deux unités d\'angle',
    },
    explanation: {
      intro: 'Le cercle est l\'ensemble des points situés à la même distance $r$ du centre. De cette seule mesure $r$ découlent le périmètre et l\'aire — tous deux avec la fameuse constante $\\pi \\approx 3{,}14159$ :',
      bogenmass: 'Au lieu de mesurer les angles en degrés, on peut aussi utiliser la longueur d\'arc correspondante sur le cercle unité — c\'est ce qu\'on appelle le radian. Un cercle entier a pour périmètre $2\\pi r$, donc $360°$ correspond exactement à $2\\pi$. Pour tout angle $\\alpha$ en radians :',
      mia_tip: 'Le radian m\'a d\'abord semblé bizarre. Mais dans le code il est bien plus pratique : quand j\'écris Math.cos(angle) en JavaScript, la fonction attend des radians — pas des degrés. Qui l\'oublie fait soudain tourner ses sprites dans le mauvais sens.',
      umrechnung: 'La conversion passe par la règle de proportionnalité « $360° = 2\\pi\\,\\text{rad}$ ». Cela donne un facteur fixe pour transformer degrés et radians l\'un en l\'autre :',
      sektor: 'Un secteur est une « part de tarte » du cercle. Sa part de l\'aire et du périmètre correspond exactement à la part de son angle au centre dans l\'angle plein. Avec l\'angle $\\alpha$ (en degrés ou en radians) :',
    },
    concepts: {
      umfang: {
        title: 'Périmètre $U$',
        desc: 'La longueur de la circonférence. Dépend linéairement du rayon — un rayon double signifie un périmètre double. Avec le diamètre $d = 2r$, on écrit souvent aussi $U = \\pi d$.',
      },
      flaeche: {
        title: 'Aire $A$',
        desc: 'La surface délimitée. Dépend du carré du rayon — un rayon double signifie une aire quadruple. Essentiel pour tous les problèmes de « combien de matière » et de « combien de contenu ».',
      },
      bogenmass: {
        title: 'Radian',
        desc: 'Unité d\'angle qui mesure l\'angle comme longueur d\'arc sur le cercle unité. Cercle entier = $2\\pi$, demi-cercle = $\\pi$, angle droit = $\\frac{\\pi}{2}$. Standard en analyse et en programmation.',
      },
      sektor: {
        title: 'Secteur circulaire',
        desc: 'Une part de tarte : deux rayons plus l\'arc situé entre eux. Aire et longueur d\'arc sont des grandeurs proportionnelles — l\'angle au centre comme fraction de $360°$ ou de $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Périmètre et aire à partir du rayon',
        context: 'Le boss rotatif de Mia a un rayon de $5\\,\\text{cm}$ à l\'écran. Quels sont son périmètre et son aire ?',
        step1: 'Le rayon est donné :',
        step2: 'Substituer dans le périmètre : $U = 2\\pi r$ avec $r = 5$. D\'abord exactement avec $\\pi$, puis arrondi :',
        step3: 'Substituer dans l\'aire : $A = \\pi r^2$. Attention : élever d\'abord $r$ au carré, puis multiplier par $\\pi$ :',
        mia_comment: 'Pour $r = 5$, périmètre ($\\approx 31$) et aire ($\\approx 79$) sont des nombres très différents. Si je double le rayon, le périmètre double — mais l\'aire quadruple. C\'est l\'effet du carré.',
      },
      sektor: {
        title: 'Aire d\'un secteur et longueur d\'arc',
        context: 'Un bras du boss balaie un secteur de rayon $12\\,\\text{cm}$ et d\'angle au centre $60°$. Quelles aire et longueur d\'arc cela donne-t-il ?',
        step1: 'Le rayon et l\'angle en degrés sont donnés :',
        step2: 'Déterminer la part du secteur dans l\'aire totale — $\\frac{60°}{360°} = \\frac{1}{6}$ :',
        step3: 'Calculer l\'aire du secteur — exactement avec $\\pi$, puis arrondie :',
        step4: 'Longueur d\'arc : la même part $\\frac{1}{6}$ du périmètre $2\\pi r$ :',
        mia_comment: 'L\'astuce est toujours la même : part = $\\frac{\\alpha°}{360°}$. Je la multiplie par la grandeur du cercle entier (aire ou périmètre). Ça marche pour $30°$ comme pour $137{,}5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'Une pizza en 8 parts',
        desc: 'Une pizza de rayon $r$ est coupée en 8 parts égales. Chaque part est un secteur de $\\frac{360°}{8} = 45°$ et d\'aire $\\frac{\\pi r^2}{8}$. Application concrète dans toutes les cuisines.',
      },
      uhr: {
        title: 'Aiguilles d\'horloge comme secteurs',
        desc: 'En une heure, l\'aiguille des heures balaie $30°$ ($\\frac{360°}{12}$), en une minute l\'aiguille des minutes balaie $6°$ ($\\frac{360°}{60}$). Pure mathématique des secteurs — utile aussi pour les problèmes d\'angles sur les horloges.',
      },
      riesenrad: {
        title: 'Longueur d\'arc d\'une grande roue',
        desc: 'Une nacelle de la grande roue de Hambourg, de rayon $r$, parcourt pendant le temps $t$ d\'un tour complet $T$ la longueur d\'arc $b = 2\\pi r \\cdot \\frac{t}{T}$. On peut ainsi calculer aussi la vitesse de la nacelle.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'Substituer des degrés dans des formules en radians',
        correct: 'Avant $b = \\alpha \\cdot r$, convertir d\'abord les degrés en radians',
        why: 'La formule $b = \\alpha \\cdot r$ ne fonctionne que si $\\alpha$ est en radians. Pour $\\alpha = 60°$, écrire $b = 60 \\cdot r$ est massivement faux — il faudrait $\\alpha = \\frac{\\pi}{3} \\approx 1{,}047$, donc $b \\approx 1{,}047 \\cdot r$.',
        mia_warning: 'C\'est exactement ce qui m\'a agacée en faisant tourner les sprites : j\'avais mis 60 au lieu de 1,047 — le boss a tourné 57 fois trop vite et a aussitôt disparu de l\'écran !',
      },
      area_vs_circumference: {
        wrong: 'Calculer l\'aire avec la formule du périmètre ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$ — quadratique en $r$',
        why: 'Périmètre et aire sont des grandeurs différentes avec des unités différentes ($\\text{cm}$ contre $\\text{cm}^2$). $2\\pi r$ est linéaire, $\\pi r^2$ quadratique. Les confondre casse tous les calculs suivants — et l\'unité le trahit immédiatement.',
      },
    },
  },
};
