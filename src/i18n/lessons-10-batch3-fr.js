export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia parcourt la liste des animations de Hafenlichter et fronce les sourcils. L\'animation de respiration de Lumi ressemble à celle d\'un robot — saccadée et artificielle. Les vagues du port paraissent raides aussi, et le cycle jour-nuit saute au lieu de s\'écouler. « Tout ce qui se répète a besoin d\'une oscillation », dit Tim. « Sinus et cosinus — ils sont faits pour ça. » Mia ouvre sa calculatrice et plonge dans le monde des fonctions périodiques.',
      challenge: 'L\'animation de respiration, le mouvement des vagues et le cycle jour-nuit doivent osciller naturellement au lieu de saccader.',
      outro: 'La respiration de Lumi monte et descend maintenant doucement, les vagues du port roulent régulièrement vers le rivage, et la lumière passe de façon fluide du rouge de l\'aube au bleu de minuit. « Les fonctions sinus sont partout dans la nature », dit Jule. Mia acquiesce : « Et maintenant, elles sont aussi dans Hafenlichter. »',
    },
    objectives: {
      periodic_functions: 'Reconnaître les fonctions périodiques et les distinguer des fonctions non périodiques',
      amplitude_period: 'Lire l\'amplitude et la période sur des graphiques et des équations',
      frequency: 'Calculer la fréquence et expliquer sa signification',
      modeling: 'Modéliser des phénomènes réels avec des fonctions sinus',
    },
    explanation: {
      intro: 'Certains processus se répètent sans cesse : ton battement de cœur, les marées, les saisons. En mathématiques, nous décrivons ces oscillations avec des fonctions périodiques. La plus importante est la fonction sinus :',
      parameters: 'La fonction sinus générale a quatre paramètres que tu peux voir comme les curseurs d\'une table de mixage : $A$ règle la hauteur de l\'oscillation (amplitude), $b$ influence la vitesse à laquelle l\'oscillation se répète (période), $c$ décale la courbe vers la gauche ou la droite, et $d$ la décale vers le haut ou le bas.',
      mia_tip: 'Pour l\'animation de respiration de Lumi, j\'utilise $A = 3$ pixels et $T = 4$ secondes. Ça veut dire : toutes les 4 secondes, Lumi inspire et expire une fois, et sa poitrine monte et descend de 3 pixels. Complètement naturel !',
      graph_reading: 'Pour lire une fonction périodique sur un graphique, cherche le motif qui se répète. La distance entre deux points identiques s\'appelle la période $T$. Mathématiquement, la périodicité signifie :',
      applications: 'Les fonctions périodiques sont l\'outil mathématique pour tout ce qui oscille : ondes sonores, courant alternatif, pendules, ondes lumineuses et même les orbites des planètes. Chaque fois qu\'un processus se répète régulièrement, une fonction sinus (ou l\'une de ses cousines) se cache derrière.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitude',
        desc: 'L\'amplitude $A$ est l\'écart maximal par rapport à la valeur moyenne. Elle mesure la « force » de l\'oscillation. Sur le graphique, tu la lis comme la moitié de la différence entre le point le plus haut et le point le plus bas.',
      },
      period: {
        title: 'Période',
        desc: 'La période $T$ est la durée d\'un cycle d\'oscillation complet. Après le temps $T$, tout se répète exactement. Plus $b$ est grand, plus la période est courte.',
      },
      frequency: {
        title: 'Fréquence',
        desc: 'La fréquence $f$ indique combien d\'oscillations ont lieu par unité de temps. C\'est l\'inverse de la période. Unité : le hertz (Hz) = oscillations par seconde.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Lire une fonction sinus sur un graphique',
        context: 'Mia a un effet de vague dans le jeu et veut trouver l\'équation correspondante.',
        step1: 'Lire le point le plus haut et le point le plus bas : $y_{\\max} = 3$ et $y_{\\min} = -3$. L\'amplitude est la moitié de la différence — la vague oscille de 3 unités vers le haut et vers le bas.',
        step2: 'Lire la période : un cycle complet dure $4\\pi$ unités. On en déduit $b$ avec la formule $b = \\frac{2\\pi}{T}$ — ce qui donne $0{,}5$.',
        step3: 'Assembler l\'équation : comme la ligne médiane est à $y = 0$ ($d = 0$) et qu\'on ne voit aucun déphasage ($c = 0$), la fonction est simplement :',
        mia_comment: 'Amplitude 3, période $4\\pi$ — les vagues du port se balancent ainsi bien lentement. Pour des vagues plus rapides, j\'augmente simplement $b$ !',
      },
      ferris_wheel: {
        title: 'Modéliser une grande roue',
        context: 'Une grande roue de 60 m de diamètre fait un tour complet toutes les 10 minutes. La nacelle la plus basse est à 5 m au-dessus du sol.',
        step1: 'Déterminer l\'amplitude : le rayon est la moitié de la hauteur, donc $A = 30\\,\\text{m}$. La ligne médiane est à $d = 5 + 30 = 35\\,\\text{m}$ (sol + rayon).',
        step2: 'La période est un tour complet : $T = 10\\,\\text{min}$. On en déduit $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Tenir compte du point de départ : partir d\'en bas signifie qu\'on décale le sinus de $-\\frac{\\pi}{2}$ (normalement, le sinus démarre au milieu, pas en bas).',
        step4: 'Vérification : après 2,5 minutes (un quart de tour), la nacelle devrait être à mi-hauteur. En substituant : $\\sin(0) = 0$, donc $h = 35\\,\\text{m}$. C\'est juste !',
        mia_comment: 'Le cycle jour-nuit de Hafenlichter fonctionne exactement pareil : un sinus avec $T = 24$ (une journée de jeu) et un décalage pour qu\'il fasse le plus sombre à minuit.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Ton battement de cœur',
        desc: 'Ton cœur bat environ 72 fois par minute — soit 1,2 battement par seconde. Les signaux électriques de ton cœur (ECG) forment une courbe périodique. Les médecins lisent l\'amplitude et la fréquence pour détecter des problèmes cardiaques.',
      },
      tides: {
        title: 'Marées',
        desc: 'Dans le port de Hambourg, le niveau de l\'eau oscille toutes les 12,4 heures entre marée haute et marée basse. C\'est une fonction sinus presque parfaite — causée par l\'attraction de la Lune.',
      },
      temperature: {
        title: 'Température annuelle',
        desc: 'La température moyenne sur une année suit à peu près une courbe sinusoïdale : chaud en été, froid en hiver, avec une période de 365 jours. Les climatologues utilisent ce modèle comme base pour leurs prévisions.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Confondre période et fréquence',
        correct: 'La fréquence est l\'inverse de la période',
        why: 'Si la période vaut $T = 2\\,\\text{s}$, il y a une oscillation toutes les 2 secondes. La fréquence est alors $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — pas $2\\,\\text{Hz}$ ! Fréquence = « Combien de fois par seconde ? », période = « Combien de temps dure un cycle ? »',
        mia_warning: 'Cette erreur a fait respirer Lumi deux fois trop vite — on aurait dit qu\'elle venait de faire un sprint !',
      },
      b_value: {
        wrong: 'Assimiler $b$ à la période',
        correct: 'Convertir $b$ et $T$ avec la formule',
        why: '$b$ n\'est PAS la période, mais lui est lié par $T = \\frac{2\\pi}{b}$. Si la période vaut $4\\pi$, alors $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — pas $4\\pi$ !',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter tourne — mais ça rame. Mia ouvre le moniteur de performance et voit : dans certaines scènes, le framerate chute à 15 FPS. « Où exactement ça ralentit ? », demande Tim. « Je n\'ai pas besoin de la moyenne sur toute la scène, mais de l\'endroit exact où la performance s\'effondre. » Jule sourit : « C\'est exactement la question qui a mené à l\'invention du calcul différentiel — le taux de variation instantané. »',
      challenge: 'Trouver l\'endroit exact où le framerate s\'effondre — pas seulement la moyenne.',
      outro: 'Mia a trouvé l\'endroit critique : exactement à l\'image 847, le temps de rendu explose parce que 200 particules y apparaissent en même temps. « Sans le taux de variation instantané, j\'aurais cherché une éternité », dit-elle. Tim acquiesce : « Newton aurait fait pareil — juste sans moniteur de performance. »',
    },
    objectives: {
      average_rate: 'Calculer et interpréter le taux de variation moyen (pente de la sécante)',
      instantaneous_rate: 'Comprendre le taux de variation instantané comme une limite',
      limit_concept: 'Suivre le passage de la sécante à la tangente',
      derivative_notation: 'Connaître et appliquer les différentes notations de la dérivée',
    },
    explanation: {
      intro: 'Imagine que tu vas à l\'école à vélo. Ton compteur affiche 20 km/h — c\'est ta vitesse instantanée. Mais comment la calcule-t-on ? Si tu dis « J\'ai fait 10 km en 30 minutes », c\'est une moyenne. La vitesse instantanée en un point précis est autre chose — et c\'est exactement le sujet du calcul différentiel.',
      secant_to_tangent: 'L\'idée est géniale de simplicité : calcule la pente moyenne entre deux points, puis rapproche les points de plus en plus. À la limite — quand la distance tend vers zéro — tu obtiens la pente en un seul point. C\'est la dérivée :',
      mia_tip: 'Le framerate moyen sur 10 secondes ne me dit rien. J\'ai besoin du taux instantané à l\'image 847 ! Comme le compteur de vélo : il n\'affiche pas la moyenne de tout le trajet, mais à quelle vitesse tu roules MAINTENANT.',
      derivative_meaning: 'La dérivée $f\'(x_0)$ a une signification claire : elle donne la pente de la tangente au graphique au point $x_0$. Si $f\'(x_0) > 0$, la fonction y est croissante. Si $f\'(x_0) < 0$, elle est décroissante. Si $f\'(x_0) = 0$, la fonction y a (peut-être) un maximum ou un minimum. Il existe plusieurs notations :',
      geometric_interpretation: 'Géométriquement, voici ce qui se passe : la sécante passant par deux points du graphique pivote quand les points se rapprochent. À la limite, la sécante devient la tangente — une droite qui « touche » le graphique en un seul point. La pente de cette tangente est la dérivée.',
    },
    concepts: {
      difference_quotient: {
        title: 'Taux d\'accroissement',
        desc: 'Le taux de variation moyen entre deux points. Il calcule la pente de la sécante — une droite qui coupe le graphique en deux points.',
      },
      differential_quotient: {
        title: 'Nombre dérivé (dérivée)',
        desc: 'Le taux de variation instantané en un point. Il apparaît quand $h$ tend vers zéro dans le taux d\'accroissement. Il donne la pente de la tangente.',
      },
      derivative_notation: {
        title: 'Notations de la dérivée',
        desc: 'Il existe trois notations courantes : $f\'(x)$ (Lagrange, la plus fréquente à l\'école), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, souligne le caractère de fraction) et $\\dot{y}$ (Newton, surtout en physique pour les dérivées par rapport au temps).',
      },
    },
    examples: {
      average_speed: {
        title: 'Vitesse moyenne',
        context: 'Une balle descend une rampe en roulant. La distance dépend du carré du temps.',
        step1: 'La fonction distance-temps est donnée. Après 2 secondes, la balle a parcouru 2 m ; après 4 secondes, 8 m.',
        step2: 'Vitesse moyenne entre $t = 2$ et $t = 4$ : on divise la variation de distance par la variation de temps. Cela donne $3\\,\\text{m/s}$ en moyenne.',
        step3: 'Maintenant, on réduit l\'intervalle : entre $t = 2$ et $t = 2{,}1$, on obtient $2{,}05\\,\\text{m/s}$. Plus l\'intervalle est court, plus on se rapproche de la vitesse instantanée à $t = 2$.',
        mia_comment: 'Mon moniteur de performance fonctionne exactement comme ça : il mesure le framerate sur des intervalles de plus en plus courts, jusqu\'à ce que je trouve l\'endroit exact où ça bloque.',
      },
      instantaneous_rate: {
        title: 'Calculer le taux de variation instantané',
        context: 'Détermine la dérivée de $f(x) = x^2$ au point $x_0 = 3$.',
        step1: 'On substitue $f(x) = x^2$ et $x_0 = 3$ dans le taux d\'accroissement. Question : que se passe-t-il quand $h$ tend vers 0 ?',
        step2: 'Développer le numérateur : $(3+h)^2 = 9 + 6h + h^2$. Moins $f(3) = 9$, cela donne $6h + h^2$ au numérateur.',
        step3: 'Simplifier par $h$ (on en a le droit, car $h \\neq 0$ pendant le passage à la limite) : il reste $6 + h$.',
        step4: 'Passer à la limite : pour $h \\to 0$, $6 + h$ devient $6$. La pente de la tangente en $x = 3$ vaut donc exactement $6$.',
        mia_comment: 'La tangente en $x = 3$ a une pente de 6. Si je fais ça pour chaque point, j\'obtiens la fonction dérivée $f\'(x) = 2x$. En $x = 3$ : $f\'(3) = 2 \\cdot 3 = 6$. Ça colle !',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Radars et vitesse',
        desc: 'Un radar ne mesure pas ta vitesse instantanée, mais ta vitesse moyenne sur une courte distance (radar tronçon : sur plusieurs kilomètres). Plus la distance de mesure est courte, plus on est proche de la valeur instantanée.',
      },
      stock_trends: {
        title: 'Cours de bourse et tendances',
        desc: 'Quand une action « monte », les analystes parlent de la dérivée positive du cours. La pente de la tangente à la courbe du cours montre la tendance : positive = tendance haussière, négative = tendance baissière, nulle = point de retournement.',
      },
      speedometer: {
        title: 'Compteur de vitesse en voiture',
        desc: 'Ton compteur affiche la vitesse instantanée — mathématiquement, la dérivée de la fonction distance par rapport au temps. Les appareils GPS la calculent comme une limite à partir d\'intervalles de temps très courts.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Moyenne = valeur instantanée',
        correct: 'Distinguer la moyenne et la valeur instantanée',
        why: 'Le taux de variation moyen sur un intervalle $[1;\\,5]$ n\'est PAS égal au taux de variation instantané en $x = 3$ (le milieu). Ce n\'est vrai que pour les fonctions linéaires ! Pour les graphiques courbes, les deux valeurs diffèrent.',
        mia_warning: 'J\'ai d\'abord calculé le framerate moyen et j\'ai pensé que tout allait bien. Mais localement, il y avait des chutes énormes ! La moyenne cachait le problème.',
      },
      secant_tangent: {
        wrong: 'Pente de la sécante = pente de la tangente',
        correct: 'La tangente est le cas limite de la sécante',
        why: 'La sécante coupe le graphique en deux points, la tangente le touche en un seul. C\'est seulement quand les deux points se rapprochent ($h \\to 0$) que la sécante devient la tangente. Sans limite, ce n\'est qu\'une approximation.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter a besoin d\'un système d\'équilibrage : à quelle vitesse Lumi doit-elle monter de niveau ? Quelle force doivent avoir les ennemis ? Combien coûte une amélioration ? « Si tout croît linéairement, le jeu devient ennuyeux », dit Jule. Tim ajoute : « Et si tout croît exponentiellement, il devient injuste. » Mia comprend : elle doit connaître différents types de croissance et les utiliser de façon ciblée.',
      challenge: 'Trouver les bonnes courbes de croissance pour l\'équilibrage du jeu — linéaire, quadratique, exponentielle ou logarithmique.',
      outro: 'Le système d\'équilibrage de Mia est terminé : la vitesse de course croît linéairement, les dégâts de chute de manière quadratique, les besoins en XP exponentiellement et la courbe d\'apprentissage logarithmiquement. « Chaque courbe a sa place », dit-elle, satisfaite. Le jeu paraît maintenant juste et captivant — du niveau 1 jusqu\'au boss final.',
    },
    objectives: {
      identify_types: 'Reconnaître les quatre grandes classes de fonctions (linéaire, quadratique, exponentielle, logarithmique) à partir d\'équations et de graphiques',
      compare_growth: 'Comparer et classer le comportement de croissance des classes de fonctions',
      match_context: 'Choisir la classe de fonctions adaptée à une situation concrète et justifier ce choix',
      graph_recognition: 'Associer les graphiques aux bons types de fonctions',
    },
    explanation: {
      intro: 'En mathématiques, il existe différentes « familles » de fonctions — chacune avec son propre caractère. Certaines croissent régulièrement, d\'autres de plus en plus vite, d\'autres encore de plus en plus lentement. Les quatre classes les plus importantes en classe de 10e sont :',
      mia_tip: 'En game design, j\'utilise chaque classe de fonctions pour autre chose : la croissance linéaire pour ce qui doit être prévisible (vitesse de course), la quadratique pour ce qui « s\'emballe » (dégâts de chute), l\'exponentielle pour les défis (besoins en XP) et la logarithmique pour les effets d\'apprentissage (progression des compétences).',
      growth_comparison: 'Ce qui compte : à quelle vitesse chaque classe de fonctions croît-elle pour de grandes valeurs de $x$ ? L\'ordre est toujours le même — quels que soient les nombres concrets que tu utilises :',
      choosing_functions: 'Choisir la bonne fonction pour un problème est une compétence clé. Demande-toi : la variation est-elle constante (linéaire) ? S\'accélère-t-elle régulièrement (quadratique) ? La valeur double-t-elle à intervalles réguliers (exponentielle) ? L\'augmentation devient-elle de plus en plus petite (logarithmique) ?',
    },
    concepts: {
      linear: {
        title: 'Fonctions linéaires',
        desc: 'Taux de variation constant : à chaque étape, on ajoute toujours la même quantité. Le graphique est une droite. La pente $m$ et l\'ordonnée à l\'origine $b$ se lisent directement.',
      },
      quadratic: {
        title: 'Fonctions quadratiques',
        desc: 'Le taux de variation lui-même varie linéairement — on ajoute de plus en plus vite (ou de moins en moins). Le graphique est une parabole avec un sommet.',
      },
      exponential: {
        title: 'Fonctions exponentielles',
        desc: 'Croissance d\'un pourcentage fixe : plus il y en a, plus il s\'en ajoute. Doublement à intervalles de temps réguliers. À long terme, elles croissent plus vite que n\'importe quelle fonction puissance.',
      },
      logarithmic: {
        title: 'Fonctions logarithmiques',
        desc: 'La fonction réciproque de la fonction exponentielle. Elle croît vite au début, puis de plus en plus lentement. Elle modélise les effets de saturation et les courbes d\'apprentissage.',
      },
    },
    examples: {
      identify_type: {
        title: 'Reconnaître le type de fonction à partir de tableaux de valeurs',
        context: 'Trois jeux de données sont donnés. Quel type correspond à chacun ?',
        step1: 'Tester la linéarité : calcule les différences entre valeurs $y$ successives. Si elles sont constantes, la fonction est linéaire.',
        step2: 'Tester l\'exponentielle : calcule les quotients de valeurs $y$ successives. S\'ils sont constants, la fonction est exponentielle.',
        step3: 'Tester la quadratique : calcule les différences secondes (les différences des différences). Si elles sont constantes, la fonction est quadratique.',
        mia_comment: 'C\'est exactement comme ça que je teste mon équilibrage : je simule 100 manches et je vérifie si les valeurs suivent le type de croissance voulu. Si les différences secondes dérivent, quelque chose ne va pas.',
      },
      game_mechanics: {
        title: 'Modéliser des mécaniques de jeu',
        context: 'Quatre mécaniques de jeu différentes dans Hafenlichter ont besoin de fonctions différentes.',
        step1: 'Vitesse de course : elle augmente du même montant à chaque niveau ($+5$ par niveau). C\'est une variation constante — donc linéaire. Juste et prévisible.',
        step2: 'Dégâts de chute : d\'une hauteur de 2 m, dégâts légers ; de 10 m, beaucoup plus. L\'augmentation des dégâts s\'accélère — quadratique. C\'est logique physiquement (énergie = $\\frac{1}{2}mv^2$).',
        step3: 'Besoins en XP par niveau : le niveau 2 demande 150 XP, le niveau 3 demande 225 XP, le niveau 4 demande 337 XP. Le besoin augmente toujours de 50 % — exponentiel. Ainsi, les niveaux élevés restent un vrai défi.',
        step4: 'Courbe d\'apprentissage (compétence) : au début, on apprend vite, ensuite de plus en plus lentement. Après $t$ heures de jeu, on maîtrise $20 \\cdot \\log_2(t+1)$ pour cent des mécaniques — logarithmique.',
        mia_comment: 'C\'est le cœur du game design : la bonne courbe pour la bonne mécanique. Des XP linéaires seraient ennuyeux, des dégâts de chute exponentiels seraient injustes. Chaque type de fonction a son point idéal !',
      },
    },
    realworld: {
      app_users: {
        title: 'Téléchargements d\'applis virales',
        desc: 'Quand chaque utilisateur invite deux amis, qui en invitent deux à leur tour, les téléchargements doublent. À peine visible au début, puis explosif — typiquement exponentiel. TikTok, Instagram et WhatsApp ont grandi ainsi.',
      },
      salary: {
        title: 'Argent de poche et salaire',
        desc: 'Ton argent de poche augmente (on l\'espère) chaque année du même montant — croissance linéaire. Plus tard, dans la vie professionnelle, ton salaire augmente souvent de la même façon : un montant fixe par année d\'expérience.',
      },
      learning_curve: {
        title: 'Progrès d\'apprentissage',
        desc: 'Nouvel instrument, nouveau sport, nouvelle langue : au début, tu fais d\'énormes progrès, puis il devient de plus en plus difficile de t\'améliorer. C\'est une courbe de saturation logarithmique — et c\'est tout à fait normal !',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '« Exponentiel » et « quadratique », c\'est la même chose',
        correct: 'L\'exponentielle croît BEAUCOUP plus vite que la quadratique',
        why: 'Pour de petits nombres, $x^2$ et $2^x$ se ressemblent : $4^2 = 16$ et $2^4 = 16$. Mais pour $x = 10$ : $10^2 = 100$ contre $2^{10} = 1024$. La croissance exponentielle dépasse n\'importe quelle fonction puissance !',
        mia_warning: 'J\'avais d\'abord rendu les besoins en XP quadratiques au lieu d\'exponentiels. Résultat : à partir du niveau 20, le jeu était bien trop facile, parce que les joueurs gagnaient des XP plus vite que le besoin n\'augmentait.',
      },
      all_curves_linear: {
        wrong: 'Toute croissance est linéaire',
        correct: 'Vérifier d\'abord le type de croissance',
        why: 'Ce n\'est pas parce que quelque chose « double » que c\'est linéaire ! « Deux fois plus de followers tous les 3 jours » est exponentiel, pas linéaire. Linéaire, ce serait : « 100 nouveaux followers chaque jour ». La différence : augmentation constante (linéaire) contre facteur constant (exponentiel).',
      },
    },
  },
};
