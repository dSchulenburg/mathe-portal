export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'Amir construit un nouveau filtre de recommandation chez DataPulse. La formule : « pertinence par auditeur divisée par nombre d\'auditeurs ». Ça semble propre — jusqu\'à ce que Yara demande : « Que se passe-t-il si un morceau a zéro auditeur ? » Amir fixe son code : division par zéro. Plantage. Pôles, trous, asymptotes — toute la famille des fonctions rationnelles surgit soudain dans son carnet, et il doit vraiment la comprendre.',
      challenge: 'Amir doit sécuriser son filtre pour qu\'il ne plante pas aux pôles — et reconnaître en même temps quand un plantage apparent n\'est en vérité qu\'un trou que l\'on peut simplifier.',
      outro: 'Avec trois outils, Amir s\'en sort : vérifier l\'ensemble de définition (où le dénominateur s\'annule-t-il ?), distinguer pôle et trou (le numérateur s\'annule-t-il aussi ?), et déterminer les asymptotes (comportement pour de grands $|x|$). Son filtre tourne désormais proprement — et le professeur Nguyen le félicite : « Voilà de l\'hygiène numérique bien tenue. »',
    },
    objectives: {
      definition: 'Reconnaître une fonction rationnelle et déterminer son ensemble de définition',
      poles: 'Trouver les pôles — les zéros du dénominateur où le numérateur ne s\'annule pas',
      removable_gaps: 'Reconnaître les trous, les supprimer par simplification et donner le prolongement par continuité',
      asymptotes: 'Déduire les asymptotes verticales et horizontales de l\'expression de la fonction',
    },
    explanation: {
      intro: 'Une fonction rationnelle est un quotient de deux polynômes — numérateur $p(x)$ divisé par dénominateur $q(x)$. Le point décisif : le dénominateur ne doit jamais s\'annuler, sinon la fonction n\'est pas définie en ce point.',
      domain: 'L\'ensemble de définition $D_f$ est constitué de tous les réels sauf les zéros du dénominateur. Factorise le dénominateur ou calcule ses zéros — ce sont les trous de $D_f$.',
      amir_tip: 'Mon premier réflexe devant toute fonction rationnelle : où le dénominateur s\'annule-t-il ? Ces valeurs de $x$, je les note en haut de la feuille. Ce n\'est qu\'ensuite que je m\'occupe du reste. Qui saute cette étape rate des pôles — et dans le code, le programme plante.',
      poles: 'Tu as un pôle lorsque le dénominateur s\'annule mais pas le numérateur. La valeur de la fonction y file vers l\'infini (positif ou négatif) — le graphe a une asymptote verticale.',
      removable: 'Si le numérateur s\'annule au même endroit, tu peux simplifier le facteur commun. Il reste ce qu\'on appelle un « trou » : le graphe n\'y a qu\'une lacune, que tu pourrais combler par une définition sensée.',
      asymptotes: 'Le comportement pour de grands $|x|$ se lit sur les degrés des polynômes : si le degré du numérateur est inférieur à celui du dénominateur, alors $f(x) \\to 0$ — l\'axe des x est asymptote horizontale. Si les degrés sont égaux, le rapport des coefficients dominants donne l\'asymptote horizontale.',
    },
    concepts: {
      definition: {
        title: 'Fonction rationnelle',
        desc: 'Quotient de deux polynômes $p(x)$ et $q(x)$. Définie partout où $q(x) \\neq 0$. Exemples : $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Pôle',
        desc: 'Point $x_0$ avec $q(x_0) = 0$ et $p(x_0) \\neq 0$. Le graphe file vers $\\pm\\infty$ — asymptote verticale en $x = x_0$. Ordre du pôle pair ⇒ pas de changement de signe, impair ⇒ changement de signe.',
      },
      removable_gap: {
        title: 'Trou',
        desc: 'Point $x_0$ avec $p(x_0) = q(x_0) = 0$. Simplifier le facteur commun, puis calculer la limite — c\'est le « prolongement par continuité ». Le graphe n\'y présente qu\'un point creux.',
      },
      asymptote: {
        title: 'Asymptote horizontale',
        desc: 'Limite pour $x \\to \\pm\\infty$. Si $\\deg p < \\deg q$, elle vaut $y = 0$ ; si $\\deg p = \\deg q$, c\'est le rapport des coefficients dominants. Si $\\deg p > \\deg q$, il y a à la place une asymptote oblique ou courbe.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Étudier un pôle simple',
        context: 'Amir examine la fonction rationnelle la plus simple de son filtre : $f(x) = \\frac{1}{x-2}$. Où n\'est-elle pas définie, comment se comporte-t-elle ?',
        step1: 'Écrire l\'expression de la fonction — numérateur $p(x) = 1$, dénominateur $q(x) = x - 2$ :',
        step2: 'Chercher le zéro du dénominateur : $q(x) = 0$ fournit un point critique :',
        step3: 'Y évaluer le numérateur : $p(2) = 1 \\neq 0$. Donc pas de trou, mais un véritable pôle :',
        step4: 'Comportement à l\'infini : $\\frac{1}{x-2} \\to 0$ pour $x \\to \\pm\\infty$. L\'axe des x est asymptote horizontale :',
        amir_comment: 'Cas classique : asymptote verticale en $x = 2$, asymptote horizontale en $y = 0$. Dans le code, je dois donc intercepter explicitement $x = 2$ — sinon NaN. C\'était exactement la question de Yara.',
      },
      removable: {
        title: 'Trouver un trou par simplification',
        context: 'Lors d\'un test, Amir tombe sur $f(x) = \\frac{x^2 - 1}{x - 1}$. En $x = 1$, le dénominateur s\'annule — plantage ? Ou pas ?',
        step1: 'Écrire l\'expression — le numérateur est une identité remarquable :',
        step2: 'En $x = 1$, numérateur ET dénominateur s\'annulent. C\'est l\'indice d\'un trou :',
        step3: 'Factoriser le numérateur $(x^2 - 1) = (x-1)(x+1)$, puis simplifier le facteur commun $(x-1)$ :',
        step4: 'Le graphe est donc la droite $y = x + 1$ — avec une lacune exactement en $x = 1$, puisque la fonction $f$ initiale n\'y est pas définie :',
        amir_comment: 'Important : malgré la simplification, je n\'ai pas le droit d\'ajouter $x = 1$ à $D_f$. La fonction initiale y reste indéfinie. Dans le code, je règle ça par un test conditionnel et je renvoie la limite $f(1) := 2$ — un prolongement par continuité bien propre.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Coût unitaire en production',
        desc: 'Coûts fixes $F$ répartis sur $x$ pièces produites, plus coûts variables $v$ par pièce : $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. Pour $x \\to \\infty$, le coût unitaire tend vers $v$ — une asymptote horizontale en vrai.',
      },
      light_intensity: {
        title: 'Intensité lumineuse et carré de la distance',
        desc: 'Une lampe de puissance $P$ produit à la distance $r$ l\'intensité $I(r) = \\frac{P}{4\\pi r^2}$. Pour $r \\to 0$, un pôle (théoriquement une luminosité infinie à la source même) ; pour $r \\to \\infty$, $I \\to 0$. Loi de la nature classique.',
      },
      dilution: {
        title: 'Concentration lors d\'une dilution',
        desc: 'Un jus de concentration $c_0$ et de volume $V_0$ est dilué avec un volume $V$ d\'eau : $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Ici, pas de pôle ($V_0 + V > 0$), mais pour $V \\to \\infty$ la concentration tend vers zéro — asymptote horizontale $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'Confondre pôle et zéro',
        correct: 'Zéro : numérateur nul. Pôle : dénominateur nul et numérateur non nul',
        why: 'Pour $f(x) = \\frac{x-3}{x+2}$, le zéro est en $x = 3$ (là $p(x) = 0$, donc $f = 0$) et le pôle en $x = -2$ (là $q(x) = 0$). Qui intervertit les rôles trace le graphe complètement de travers — trou et pôle aux mauvais endroits.',
        amir_warning: 'Mon moyen mnémotechnique : le zéro est là où $f$ « rend zéro ». Le pôle est là où $f$ « explose ». Les deux découlent directement du numérateur ou du dénominateur — ne jamais les confondre.',
      },
      dont_cancel: {
        wrong: 'Ne pas voir le facteur commun et conclure à un pôle',
        correct: 'Factoriser d\'abord numérateur et dénominateur, puis simplifier les facteurs communs',
        why: 'Pour $f(x) = \\frac{x^2-4}{x-2}$, $x = 2$ semble être un pôle. Mais si l\'on factorise le numérateur, on obtient $\\frac{(x-2)(x+2)}{x-2} = x+2$ — donc seulement un trou. Qui ne factorise pas affirme l\'existence d\'un pôle qui n\'existe pas.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'Amir entraîne chez DataPulse un modèle linéaire simple : trois caractéristiques (tempo, volume, dansabilité), et le modèle en estime une note d\'auditeur. De trois exemples connus découlent trois équations à trois inconnues — les poids des caractéristiques. « À la main, ça ne marchera jamais », dit Finn. Amir sourit : « Si, avec Gauss. » Les systèmes d\'équations linéaires, un classique qui se cache derrière tout code de ML.',
      challenge: 'Amir doit déterminer, à partir de trois exemples d\'entraînement, les trois poids $a$, $b$, $c$. Trois équations, trois inconnues — Gauss.',
      outro: 'Avec la méthode de Gauss, Amir met systématiquement la matrice augmentée sous forme échelonnée. La partie inférieure gauche devient des zéros pas à pas, puis il lit les solutions en remontant. « C\'est exactement ce que numpy.linalg.solve fait en arrière-plan », explique-t-il à Finn — « sauf que maintenant je comprends enfin pourquoi. »',
    },
    objectives: {
      solve_2x2: 'Résoudre des systèmes linéaires à deux inconnues par substitution, comparaison ou addition',
      gauss_3x3: 'Mettre systématiquement sous forme échelonnée les systèmes à trois inconnues avec l\'algorithme de Gauss',
      solution_types: 'Distinguer les trois types de solutions — unique, aucune, une infinité',
      matrix_form: 'Écrire un système sous forme matricielle $A\\vec{x} = \\vec{b}$ et construire correctement la matrice augmentée',
    },
    explanation: {
      intro: 'Un système d\'équations linéaires est un ensemble de plusieurs équations portant sur les mêmes inconnues. Une solution du système est un jeu de valeurs qui satisfait TOUTES les équations simultanément. Déjà connu en classe de troisième — typiquement deux équations, deux inconnues :',
      methods: 'Pour les systèmes 2×2, les méthodes classiques suffisent : substitution, comparaison ou addition. À partir de 3×3, cela devient vite confus — d\'où l\'algorithme de Gauss, qui se déroule mécaniquement et toujours de la même façon.',
      amir_tip: 'Ma marche à suivre pour du 3×3 : écrire la matrice augmentée, puis METHODIQUEMENT. D\'abord annuler la colonne de gauche sous le pivot, puis la colonne du milieu sous le deuxième pivot. Forme échelonnée. Remontée. Ça sonne mécanique — ça l\'est, et c\'est précisément l\'avantage.',
      gauss: 'Avec la méthode de Gauss, tu écris le système sous forme de matrice augmentée $(A | \\vec{b})$. Avec trois opérations sur les lignes — multiplier une ligne par un nombre, additionner ou soustraire des lignes, échanger des lignes — tu transformes la matrice en forme échelonnée. Cela ne change pas l\'ensemble des solutions.',
      solution_types: 'La forme échelonnée donne directement le type de solution : pas de ligne nulle contradictoire en bas ⇒ solution unique. Une ligne $0 = c$ avec $c \\neq 0$ ⇒ aucune solution. Une ligne $0 = 0$ ⇒ poser un paramètre, une infinité de solutions.',
    },
    concepts: {
      lgs: {
        title: 'Système d\'équations linéaires',
        desc: 'Un ensemble d\'équations linéaires partageant les mêmes inconnues. Sous forme matricielle : $A \\vec{x} = \\vec{b}$, où $A$ est la matrice des coefficients et $\\vec{b}$ le vecteur des seconds membres.',
      },
      gauss: {
        title: 'Algorithme de Gauss',
        desc: 'Méthode de résolution standard. Mettre la matrice augmentée sous forme échelonnée, puis résoudre en remontant. Trois opérations autorisées qui ne changent pas l\'ensemble des solutions : multiplier une ligne par un scalaire, ajouter un multiple d\'une ligne, échanger deux lignes.',
      },
      solution_types: {
        title: 'Trois types de solutions',
        desc: 'Solution unique (autant de pivots que d\'inconnues), aucune solution (ligne contradictoire $0 = c$), une infinité de solutions (au moins une ligne $0=0$, poser des paramètres libres).',
      },
      matrix: {
        title: 'Matrice augmentée',
        desc: 'Notation $(A | \\vec{b})$. À gauche les coefficients des inconnues, à droite (séparé par une barre) le second membre. Évite de recopier sans cesse les noms des variables.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'Système 2×2 simple par addition',
        context: 'Amir dispose de deux équations tirées de ses données d\'entraînement. Il cherche $x$ (poids du tempo) et $y$ (poids du volume).',
        step1: 'Écrire le système d\'équations :',
        step2: 'Additionner les deux équations — les termes en $y$ s\'annulent, $x$ est immédiatement résolu :',
        step3: 'Substituer $x = 3$ dans l\'une des équations de départ, ici la seconde :',
        step4: 'Ensemble des solutions — à donner sous forme de couple $(x, y)$ :',
        amir_comment: 'Méthode d\'addition classique : avec de la chance, des variables disparaissent directement. Sinon, il faut d\'abord multiplier une équation par un nombre adapté — par ex. par 2, pour que les coefficients se correspondent.',
      },
      gauss_3x3: {
        title: 'Résoudre un système 3×3 avec Gauss',
        context: 'Amir a un mini-jeu d\'entraînement : trois notes d\'auditeurs, trois poids $x, y, z$. Trois équations — méthode de Gauss dans la matrice augmentée.',
        step1: 'Construire la matrice augmentée — coefficients à gauche, seconds membres à droite de la barre :',
        step2: 'Ligne 2 moins 2 fois ligne 1 — le coefficient $a_{21} = 2$ devient nul :',
        step3: 'Ligne 3 moins ligne 1 — le coefficient $a_{31} = 1$ devient nul. La colonne de gauche est maintenant propre sous le pivot 1 :',
        step4: 'Poursuivre jusqu\'à la forme échelonnée, puis remonter : $z$ depuis la dernière ligne, substituer plus haut pour $y$, puis $x$. Solution : $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$ :',
        amir_comment: 'Gauss, c\'est de la comptabilité : noter proprement chaque opération sur les lignes. Qui n\'exécute une opération qu\'à moitié — par ex. ne transforme que la colonne du pivot — récolte du n\'importe quoi. Ici, la discipline bat le génie.',
      },
    },
    realworld: {
      mischung: {
        title: 'Problèmes de mélange',
        desc: 'Un pharmacien mélange deux solutions de concentrations $a$ et $b$ pour obtenir un mélange de masse totale $m$ et de quantité totale de principe actif $w$. Deux équations, deux inconnues — un système, directement.',
      },
      preise: {
        title: 'Reconstituer des prix',
        desc: 'Trois clients, trois tickets avec quantités et prix total — en déduire les prix unitaires. Trois équations, trois prix unitaires inconnus. Gauss règle ça en quelques étapes.',
      },
      network: {
        title: 'Circuits électriques (Kirchhoff)',
        desc: 'Dans un réseau de résistances, chaque loi des nœuds (courant entrant = courant sortant) et chaque loi des mailles (somme des tensions = 0) fournit une condition linéaire. Avec $n$ inconnues, cela donne un système $n \\times n$ — méthode standard en électrotechnique.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Lors d\'une opération sur une ligne, ne transformer que la colonne du pivot',
        correct: 'Transformer chaque colonne de la ligne (second membre compris) — toutes en même temps',
        why: 'Une opération sur une ligne s\'applique à la ligne ENTIÈRE. Qui, pour $Z_2 - 2Z_1$, ne transforme que le coefficient du pivot et oublie les autres colonnes détruit l\'équation. Conséquence : la forme échelonnée a l\'air juste, mais les solutions sont fausses — et l\'erreur est ensuite difficile à retrouver.',
        amir_warning: 'C\'est précisément cette erreur qui m\'a coûté un point entier lors d\'un devoir blanc. Depuis, j\'écris la nouvelle ligne complète — tous les coefficients, second membre compris — proprement sous l\'ancienne. Comparable d\'un coup d\'œil.',
      },
      no_solution: {
        wrong: 'Interpréter une ligne contradictoire $0 = c$ comme $x = c$',
        correct: 'Une ligne $0 = c$ avec $c \\neq 0$ signifie : le système n\'a AUCUNE solution',
        why: 'Si l\'on aboutit à $0 = 5$, c\'est une contradiction — aucune valeur de $x, y, z$ ne peut la satisfaire. L\'ensemble des solutions est vide. Qui lit cela comme $x = 5$ propose une solution que le système ne satisfait pas.',
      },
    },
  },
};
