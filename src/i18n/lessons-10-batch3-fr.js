export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia parcourt la liste des animations de Lumieres du Port et fronce les sourcils. L\'animation de respiration de Lumi ressemble a un robot — saccadee et artificielle. Les vagues du port sont raides aussi, et le cycle jour-nuit saute au lieu de couler. "Tout ce qui se repete a besoin d\'une oscillation", dit Tim. "Sinus et cosinus — ils sont faits pour ca." Mia ouvre sa calculatrice et plonge dans le monde des fonctions periodiques.',
      challenge: 'L\'animation de respiration, le mouvement des vagues et le cycle jour-nuit doivent osciller naturellement au lieu de saccader.',
      outro: 'La respiration de Lumi monte et descend doucement, les vagues du port roulent regulierement vers le rivage, et la lumiere passe fluidement du rouge de l\'aube au bleu de minuit. "Les fonctions sinus sont partout dans la nature", dit Jule. Mia acquiesce : "Et maintenant elles sont aussi dans Lumieres du Port."',
    },
    objectives: {
      periodic_functions: 'Reconnaitre les fonctions periodiques et les distinguer des non-periodiques',
      amplitude_period: 'Lire l\'amplitude et la periode sur des graphiques et des equations',
      frequency: 'Calculer la frequence et expliquer sa signification',
      modeling: 'Modeliser des phenomenes reels avec des fonctions sinus',
    },
    explanation: {
      intro: 'Certains processus se repetent sans cesse : ton battement de coeur, les marees, les saisons. En mathematiques, nous decrivons ces oscillations avec des fonctions periodiques. La plus importante est la fonction sinus :',
      parameters: 'La fonction sinus generale a quatre parametres que tu peux comprendre comme des boutons sur une console de mixage : $A$ controle la hauteur de l\'oscillation (amplitude), $b$ influence la vitesse de repetition (periode), $c$ decale la courbe a gauche ou a droite, et $d$ la decale vers le haut ou le bas.',
      mia_tip: 'Pour l\'animation de respiration de Lumi, j\'utilise $A = 3$ pixels et $T = 4$ secondes. Ca signifie : toutes les 4 secondes Lumi inspire et expire une fois, et la poitrine bouge de 3 pixels de haut en bas. Completement naturel !',
      graph_reading: 'Pour lire une fonction periodique sur un graphique, cherche le motif qui se repete. La distance entre deux points identiques est la periode $T$. Mathematiquement, la periodicite signifie :',
      applications: 'Les fonctions periodiques sont l\'outil mathematique pour tout ce qui oscille : ondes sonores, courant alternatif, pendules, ondes lumineuses et meme les orbites des planetes.',
    },
    concepts: {
      amplitude: { title: 'Amplitude', desc: 'L\'amplitude $A$ est le deplacement maximal par rapport a la ligne mediane. Elle mesure la "force" de l\'oscillation. Sur le graphique, tu la lis comme la moitie de la difference entre le point le plus haut et le plus bas.' },
      period: { title: 'Periode', desc: 'La periode $T$ est la duree d\'un cycle complet d\'oscillation. Apres le temps $T$, tout se repete exactement. Plus $b$ est grand, plus la periode est courte.' },
      frequency: { title: 'Frequence', desc: 'La frequence $f$ indique combien d\'oscillations se produisent par unite de temps. C\'est l\'inverse de la periode. Unite : Hertz (Hz) = oscillations par seconde.' },
    },
    examples: {
      graph_reading: { title: 'Lire une fonction sinus sur un graphique', context: 'Mia a un effet de vague dans le jeu et veut trouver l\'equation correspondante.', step1: 'Lire les points le plus haut et le plus bas : $y_{\\max} = 3$ et $y_{\\min} = -3$. L\'amplitude est la moitie de la difference.', step2: 'Lire la periode : un cycle complet dure $4\\pi$ unites. On calcule $b$ avec $b = \\frac{2\\pi}{T}$ — ce qui donne $0{,}5$.', step3: 'Assembler l\'equation : comme la ligne mediane est a $y = 0$ ($d = 0$) et qu\'il n\'y a pas de dephasage ($c = 0$), la fonction est simplement :', mia_comment: 'Amplitude 3, periode $4\\pi$ — les vagues du port se balancent bien lentement. Pour des vagues plus rapides, j\'augmente simplement $b$ !' },
      ferris_wheel: { title: 'Modeliser une grande roue', context: 'Une grande roue de 60 m de diametre fait un tour complet toutes les 10 minutes. La gondole la plus basse est a 5 m du sol.', step1: 'Determiner l\'amplitude : le rayon est la moitie de la hauteur, donc $A = 30\\,\\text{m}$. La ligne mediane est a $d = 5 + 30 = 35\\,\\text{m}$.', step2: 'La periode est un tour complet : $T = 10\\,\\text{min}$. D\'ou $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.', step3: 'Considerer le point de depart : partir en bas signifie decaler le sinus de $-\\frac{\\pi}{2}$.', step4: 'Verification : apres 2,5 minutes (quart de tour), la gondole devrait etre a mi-hauteur. En substituant : $\\sin(0) = 0$, donc $h = 35\\,\\text{m}$. Correct !', mia_comment: 'C\'est exactement comme le cycle jour-nuit dans Lumieres du Port : sinus avec $T = 24$ (un jour de jeu) et un decalage pour que ce soit le plus sombre a minuit.' },
    },
    realworld: {
      heartbeat: { title: 'Ton battement de coeur', desc: 'Ton coeur bat environ 72 fois par minute — soit 1,2 battements par seconde. Les signaux electriques du coeur (ECG) montrent une courbe periodique. Les medecins lisent l\'amplitude et la frequence pour detecter des problemes cardiaques.' },
      tides: { title: 'Marees', desc: 'Au port de Hambourg, le niveau d\'eau fluctue entre maree haute et basse toutes les 12,4 heures. C\'est une fonction sinus presque parfaite — causee par l\'attraction gravitationnelle de la lune.' },
      temperature: { title: 'Temperature annuelle', desc: 'La temperature moyenne sur une annee suit grossierement une courbe sinusoidale : chaud en ete, froid en hiver, avec une periode de 365 jours.' },
    },
    mistakes: {
      period_frequency: { wrong: 'Confondre periode et frequence', correct: 'La frequence est l\'inverse de la periode', why: 'Si la periode est $T = 2\\,\\text{s}$, ca oscille une fois toutes les 2 secondes. La frequence est alors $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — pas $2\\,\\text{Hz}$ !', mia_warning: 'Cette erreur a fait respirer Lumi deux fois plus vite — elle avait l\'air d\'avoir fait un sprint !' },
      b_value: { wrong: 'Egaliser $b$ avec la periode', correct: 'Convertir entre $b$ et $T$ avec la formule', why: '$b$ n\'est PAS la periode, mais est lie a elle via $T = \\frac{2\\pi}{b}$. Si la periode est $4\\pi$, alors $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — pas $4\\pi$ !' },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Lumieres du Port tourne — mais ca rame. Mia ouvre le moniteur de performance et voit : dans certaines scenes, le framerate tombe a 15 FPS. "Ou exactement ca ralentit ?", demande Tim. "Je n\'ai pas besoin de la moyenne sur toute la scene, mais du point exact ou la performance chute." Jule sourit : "C\'est exactement la question qui a mene a l\'invention du calcul differentiel — le taux de variation instantane."',
      challenge: 'Trouver le point exact ou le framerate chute — pas seulement la moyenne.',
      outro: 'Mia a trouve le point critique : exactement a l\'image 847, le temps de rendu explose parce que 200 particules apparaissent simultanement. "Sans le taux de variation instantane, j\'aurais cherche une eternite", dit-elle.',
    },
    objectives: {
      average_rate: 'Calculer et interpreter le taux de variation moyen (pente de la secante)',
      instantaneous_rate: 'Comprendre le taux de variation instantane comme une limite',
      limit_concept: 'Suivre la transition de la secante a la tangente',
      derivative_notation: 'Connaitre et appliquer les differentes notations de la derivee',
    },
    explanation: {
      intro: 'Imagine que tu fais du velo pour aller a l\'ecole. Ton compteur affiche 20 km/h — c\'est ta vitesse instantanee. Mais comment la calcule-t-on ? Si tu dis "J\'ai parcouru 10 km en 30 minutes", c\'est une moyenne. La vitesse instantanee en un point precis est autre chose — et c\'est exactement de ca que traite le calcul differentiel.',
      secant_to_tangent: 'L\'idee est geniale de simplicite : calcule la pente moyenne entre deux points, puis rapproche les points de plus en plus. A la limite — quand la distance tend vers zero — tu obtiens la pente en un seul point. C\'est la derivee :',
      mia_tip: 'Le framerate moyen sur 10 secondes ne me dit rien. J\'ai besoin du taux instantane a l\'image 847 ! Comme le compteur : il ne montre pas la moyenne du trajet, mais a quelle vitesse tu roules MAINTENANT.',
      derivative_meaning: 'La derivee $f\'(x_0)$ a une signification claire : elle donne la pente de la tangente au graphique au point $x_0$. Si $f\'(x_0) > 0$, la fonction croit. Si $f\'(x_0) < 0$, elle decroit. Si $f\'(x_0) = 0$, la fonction a (possiblement) un maximum ou minimum local.',
      geometric_interpretation: 'Geometriquement : la secante passant par deux points du graphique tourne quand les points se rapprochent. A la limite, la secante devient la tangente — une droite qui "touche" le graphique en un seul point. La pente de cette tangente est la derivee.',
    },
    concepts: {
      difference_quotient: { title: 'Taux de variation', desc: 'Le taux de variation moyen entre deux points. Il calcule la pente de la secante — une droite qui coupe le graphique en deux points.' },
      differential_quotient: { title: 'Nombre derive', desc: 'Le taux de variation instantane en un point. Apparait quand $h$ dans le taux de variation tend vers zero. Donne la pente de la tangente.' },
      derivative_notation: { title: 'Notations de la derivee', desc: 'Il y a trois notations courantes : $f\'(x)$ (Lagrange, la plus courante a l\'ecole), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, souligne le caractere de fraction) et $\\dot{y}$ (Newton, surtout en physique pour les derivees temporelles).' },
    },
    examples: {
      average_speed: { title: 'Vitesse moyenne', context: 'Une balle roule sur une rampe. La distance depend du carre du temps.', step1: 'La fonction distance-temps est donnee. Apres 2 secondes, la balle a parcouru 2 m ; apres 4 secondes, 8 m.', step2: 'Vitesse moyenne entre $t = 2$ et $t = 4$ : on divise la variation de distance par la variation de temps. Ca donne $3\\,\\text{m/s}$ en moyenne.', step3: 'Maintenant on reduit l\'intervalle : entre $t = 2$ et $t = 2{,}1$, on obtient $2{,}05\\,\\text{m/s}$. Plus l\'intervalle est court, plus on se rapproche de la vitesse instantanee a $t = 2$.', mia_comment: 'C\'est exactement comme mon moniteur de performance : il mesure le framerate dans des intervalles de plus en plus courts jusqu\'a trouver le point exact ou ca rame.' },
      instantaneous_rate: { title: 'Calculer le taux de variation instantane', context: 'Determine la derivee de $f(x) = x^2$ au point $x_0 = 3$.', step1: 'On substitue $f(x) = x^2$ et $x_0 = 3$ dans le taux de variation. But : que se passe-t-il quand $h$ tend vers 0 ?', step2: 'Developper le numerateur : $(3+h)^2 = 9 + 6h + h^2$. Moins $f(3) = 9$ donne $6h + h^2$.', step3: 'Diviser par $h$ (on peut car $h \\neq 0$ dans le processus de limite) : il reste $6 + h$.', step4: 'Prendre la limite : quand $h \\to 0$, $6 + h$ devient $6$. La pente de la tangente en $x = 3$ est exactement $6$.', mia_comment: 'La tangente en $x = 3$ a une pente de 6. Si je fais ca pour chaque point, j\'obtiens la fonction derivee $f\'(x) = 2x$. En $x = 3$ : $f\'(3) = 2 \\cdot 3 = 6$. Ca colle !' },
    },
    realworld: {
      speed_camera: { title: 'Radars et vitesse', desc: 'Un radar ne mesure pas ta vitesse instantanee, mais ta vitesse moyenne sur une courte distance. Plus la distance de mesure est courte, plus on se rapproche de la valeur instantanee.' },
      stock_trends: { title: 'Cours de bourse et tendances', desc: 'Quand une action "monte", les analystes parlent de la derivee positive du cours. La pente de la tangente montre la tendance : positive = hausse, negative = baisse, nulle = point de retournement.' },
      speedometer: { title: 'Compteur de vitesse', desc: 'Ton compteur affiche la vitesse instantanee — mathematiquement la derivee de la fonction de distance par rapport au temps.' },
    },
    mistakes: {
      average_vs_instant: { wrong: 'Moyenne = Valeur instantanee', correct: 'Distinguer moyenne et valeur instantanee', why: 'Le taux de variation moyen sur un intervalle $[1;\\,5]$ n\'est PAS egal au taux instantane en $x = 3$ (le milieu). Ca ne vaut que pour les fonctions lineaires !', mia_warning: 'J\'ai d\'abord calcule le framerate moyen et pense que tout allait bien. Mais localement il y avait des chutes massives ! La moyenne cachait le probleme.' },
      secant_tangent: { wrong: 'Pente de la secante = Pente de la tangente', correct: 'La tangente est le cas limite de la secante', why: 'La secante coupe le graphique en deux points, la tangente le touche en un. C\'est seulement quand les deux points convergent ($h \\to 0$) que la secante devient la tangente.' },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Lumieres du Port a besoin d\'un systeme d\'equilibrage : a quelle vitesse Lumi doit-elle progresser ? Quelle force ont les ennemis ? Combien coute une amelioration ? "Si tout croit lineairement, le jeu devient ennuyeux", dit Jule. Tim ajoute : "Et si tout croit exponentiellement, ca devient injuste." Mia realise : elle doit connaitre differents types de croissance et les utiliser strategiquement.',
      challenge: 'Trouver les bonnes courbes de croissance pour l\'equilibrage du jeu — lineaire, quadratique, exponentielle ou logarithmique.',
      outro: 'Le systeme d\'equilibrage de Mia est termine : la vitesse de deplacement croit lineairement, les degats de chute de maniere quadratique, les besoins en XP exponentiellement et la courbe d\'apprentissage logarithmiquement. "Chaque courbe a sa place", dit-elle avec satisfaction.',
    },
    objectives: {
      identify_types: 'Reconnaitre les quatre grandes classes de fonctions (lineaire, quadratique, exponentielle, logarithmique) a partir d\'equations et de graphiques',
      compare_growth: 'Comparer et classer le comportement de croissance des classes de fonctions',
      match_context: 'Choisir la classe de fonctions appropriee pour une situation donnee et justifier',
      graph_recognition: 'Associer les graphiques aux bons types de fonctions',
    },
    explanation: {
      intro: 'En mathematiques, il existe differentes "familles" de fonctions — chacune avec son propre caractere. Certaines croissent regulierement, d\'autres de plus en plus vite, d\'autres encore de plus en plus lentement. Les quatre classes les plus importantes pour la 10e annee sont :',
      mia_tip: 'En game design, j\'utilise chaque classe pour quelque chose de different : croissance lineaire pour les choses previsibles (vitesse), quadratique pour ce qui "s\'emballe" (degats de chute), exponentielle pour les defis (besoins en XP) et logarithmique pour les effets d\'apprentissage (progression des competences).',
      growth_comparison: 'La question cruciale est : a quelle vitesse chaque classe croit-elle pour de grandes valeurs de $x$ ? L\'ordre est toujours le meme :',
      choosing_functions: 'Choisir la bonne fonction pour un probleme est une competence cle. Demande-toi : le changement est-il constant (lineaire) ? S\'accelere-t-il regulierement (quadratique) ? La valeur double-t-elle a intervalles reguliers (exponentiel) ? L\'augmentation diminue-t-elle constamment (logarithmique) ?',
    },
    concepts: {
      linear: { title: 'Fonctions lineaires', desc: 'Taux de variation constant : la meme quantite est ajoutee a chaque etape. Le graphique est une droite.' },
      quadratic: { title: 'Fonctions quadratiques', desc: 'Le taux de variation lui-meme change lineairement — il s\'ajoute de plus en plus vite. Le graphique est une parabole avec un sommet.' },
      exponential: { title: 'Fonctions exponentielles', desc: 'Croissance d\'un pourcentage fixe : plus il y en a, plus il s\'en ajoute. Doublement a intervalles reguliers. Croit a long terme plus vite que toute fonction puissance.' },
      logarithmic: { title: 'Fonctions logarithmiques', desc: 'L\'inverse de la fonction exponentielle. Croit vite au debut, puis de plus en plus lentement. Modelise les effets de saturation et les courbes d\'apprentissage.' },
    },
    examples: {
      identify_type: { title: 'Identifier les types de fonctions a partir de tableaux', context: 'Trois jeux de donnees sont donnes. Quel type correspond a chacun ?', step1: 'Tester la linearite : calculer les differences des valeurs $y$ consecutives. Si elles sont constantes, la fonction est lineaire.', step2: 'Tester l\'exponentialite : calculer les quotients des valeurs $y$ consecutives. S\'ils sont constants, la fonction est exponentielle.', step3: 'Tester la quadraticite : calculer les secondes differences. Si elles sont constantes, la fonction est quadratique.', mia_comment: 'C\'est exactement comme ca que je teste mon equilibrage : je simule 100 tours et verifie si les valeurs suivent le type de croissance souhaite.' },
      game_mechanics: { title: 'Modeliser des mecaniques de jeu', context: 'Quatre mecaniques differentes dans Lumieres du Port ont besoin de fonctions differentes.', step1: 'Vitesse de deplacement : augmente du meme montant par niveau ($+5$ par niveau). C\'est un changement constant — donc lineaire.', step2: 'Degats de chute : de 2 m, degats legers ; de 10 m, beaucoup plus. L\'augmentation des degats s\'accelere — quadratique.', step3: 'Besoins en XP par niveau : le besoin augmente toujours de 50% — exponentiel. Ca garde les niveaux eleves comme un vrai defi.', step4: 'Courbe d\'apprentissage : au debut on apprend vite, ensuite de plus en plus lentement — logarithmique.', mia_comment: 'C\'est le coeur du game design : la bonne courbe pour la bonne mecanique. Des XP lineaires seraient ennuyeux, des degats de chute exponentiels seraient injustes. Chaque type de fonction a son point ideal !' },
    },
    realworld: {
      app_users: { title: 'Telechargements d\'applis virales', desc: 'Quand chaque utilisateur invite deux amis et eux aussi deux, les telechargements doublent. A peine visible au debut, puis explosif — typiquement exponentiel.' },
      salary: { title: 'Argent de poche et salaire', desc: 'Ton argent de poche augmente (on l\'espere) du meme montant chaque annee — croissance lineaire.' },
      learning_curve: { title: 'Progres d\'apprentissage', desc: 'Nouvel instrument, nouveau sport, nouvelle langue : au debut tu progresses enormement, puis c\'est de plus en plus dur de s\'ameliorer. C\'est une courbe de saturation logarithmique — et c\'est tout a fait normal !' },
    },
    mistakes: {
      exp_vs_quad: { wrong: '"Exponentiel" et "quadratique" c\'est pareil', correct: 'L\'exponentiel croit BEAUCOUP plus vite que le quadratique', why: 'Pour de petits nombres, $x^2$ et $2^x$ se ressemblent. Mais a $x = 10$ : $10^2 = 100$ contre $2^{10} = 1024$. La croissance exponentielle depasse toute fonction puissance !', mia_warning: 'J\'avais d\'abord fait les besoins en XP quadratiques au lieu d\'exponentiels. Resultat : a partir du niveau 20, le jeu etait bien trop facile.' },
      all_curves_linear: { wrong: 'Toute croissance est lineaire', correct: 'D\'abord verifier le type de croissance', why: 'Ce n\'est pas parce que quelque chose "double" que c\'est lineaire ! "Deux fois plus de followers tous les 3 jours" est exponentiel, pas lineaire. Lineaire serait : "100 nouveaux followers chaque jour".' },
    },
  },
};
