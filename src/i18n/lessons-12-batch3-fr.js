export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'Amir construit un modèle de prévision du nombre d\'utilisateurs d\'une appli d\'apprentissage. Les premières semaines sont fantastiques : 40 pour cent de plus chaque semaine. Il extrapole — et obtient pour l\'année prochaine plus d\'utilisateurs qu\'il n\'existe de personnes équipées d\'un smartphone. « Ton modèle n\'est pas faux », lui dit sa professeure, « il est simplement déjà sorti de son domaine de validité. Que se passe-t-il quand la moitié de tous les utilisateurs possibles a déjà l\'appli ? » Amir s\'en rend compte : il a oublié que le monde est fini.',
      challenge: 'Comment modéliser une croissance qui a une limite ? Et comment distinguer deux sortes de limite : une contre laquelle on freine dès le départ, et une vers laquelle on accélère d\'abord avant de freiner ?',
      outro: 'Amir travaille désormais avec deux modèles au lieu d\'un. La croissance bornée, quand l\'accroissement dépend seulement du reste disponible — refroidissement, saturation, charge. La croissance logistique, quand l\'accroissement a en plus besoin de l\'effectif existant — contagion, recommandation, populations. Et il sait maintenant ce que signifie le point d\'inflexion : non pas la fin de la croissance, mais son moment le plus rapide.',
    },
    objectives: {
      grenzen: 'Reconnaître quand un modèle exponentiel atteint sa limite — et pourquoi il était pourtant juste auparavant',
      beschraenkt: 'Établir et exploiter la croissance bornée $N(t) = K - (K - N_0)e^{-kt}$',
      logistisch: 'Déterminer le modèle logistique $N(t) = \\frac{K}{1 + a e^{-rt}}$ à partir de la capacité et de la valeur initiale',
      wendepunkt: 'Calculer le point d\'inflexion et l\'interpréter comme l\'instant de plus forte croissance',
    },
    explanation: {
      intro: 'La croissance exponentielle ne connaît aucune limite. Dans la réalité, il y en a pourtant presque toujours une : l\'étang finit par être plein, tous les clients possibles ont le produit, la tasse est à température ambiante. Cette borne supérieure s\'appelle la capacité $K$. Deux modèles décrivent comment elle est atteinte — et la différence entre eux n\'est pas un détail, c\'est la question de savoir si la courbe a un point d\'inflexion.',
      beschraenkt: 'Dans la croissance bornée, l\'accroissement dépend seulement de ce qui manque encore. Au début, c\'est là qu\'il manque le plus, donc l\'accroissement est maximal au début et devient de plus en plus petit. La courbe s\'approche de la limite par en dessous, sans jamais l\'atteindre :',
      amir_tip: 'Je distingue les deux modèles avec une seule question : l\'accroissement a-t-il besoin de ce qui est déjà là ? Pour le café qui refroidit, non — la chaleur s\'en va, peu importe combien il en reste, seule la différence compte. Pour une vidéo virale, oui — sans personnes qui la partagent, il ne se passe rien. Le premier cas est borné, le second logistique.',
      logistisch: 'Dans la croissance logistique, l\'effectif s\'ajoute comme deuxième facteur. Au début, il y a certes beaucoup de place, mais presque aucun individu — la croissance est lente. À la fin, il y a beaucoup d\'individus, mais plus de place — de nouveau lente. Entre les deux se trouve le maximum. Cela donne la forme en S typique :',
      dgl: 'C\'est dans l\'équation différentielle qu\'on voit le plus clairement la différence. Elle se lit comme une phrase : l\'accroissement est proportionnel à l\'effectif **fois** la part encore libre. Si l\'un des deux facteurs manque, la croissance s\'arrête :',
      wendepunkt: 'De cette équation découle l\'indicateur le plus important du modèle. Le produit de l\'effectif et du reste libre est maximal exactement quand les deux sont égaux — donc à la moitié de la capacité. C\'est là que se trouve le point d\'inflexion, et c\'est là que le taux d\'accroissement est maximal :',
    },
    concepts: {
      kapazitaet: {
        title: 'Capacité $K$',
        desc: 'La borne supérieure dont l\'effectif s\'approche sans l\'atteindre. C\'est la limite pour $t \\to \\infty$ et elle figure comme paramètre dans les deux modèles. Sans capacité pertinente, aucun des deux modèles n\'est applicable.',
      },
      beschraenkt: {
        title: 'Croissance bornée',
        desc: 'L\'accroissement dépend seulement du reste encore libre $K - N$. C\'est pourquoi il est maximal tout au début et diminue ensuite continuellement. La courbe n\'a pas de point d\'inflexion — elle est concave dès le départ. Typique du refroidissement, de la charge et de la saturation.',
      },
      logistisch: {
        title: 'Croissance logistique',
        desc: 'L\'accroissement dépend de l\'effectif ET du reste libre. Il en résulte la courbe en S : d\'abord lente, puis rapide, puis de nouveau lente. Le paramètre $a = \\frac{K - N_0}{N_0}$ indique combien de places libres reviennent au départ à chaque individu présent.',
      },
      wendepunkt: {
        title: 'Point d\'inflexion en $K/2$',
        desc: 'Toujours à la moitié de la capacité, indépendamment de $r$ et de $N_0$. Le taux d\'accroissement y est maximal, à savoir $\\frac{rK}{4}$. Ensuite, l\'effectif continue de croître, mais plus lentement — la confusion la plus fréquente dans les exercices d\'interprétation.',
      },
    },
    examples: {
      seerosen: {
        title: 'Établir un modèle logistique à partir de la capacité et de la valeur initiale',
        context: 'Sur un étang pouvant accueillir 500 nénuphars poussent au départ 50 plantes.',
        step1: 'D\'abord le paramètre $a$. Il découle directement de la capacité et de la valeur initiale :',
        step2: 'Le modèle est ainsi établi. Le taux de croissance $r = 0{,}4$ par semaine provient de la série de mesures :',
        step3: 'Vérification : substitue $t = 0$. Si l\'on n\'obtient pas la valeur initiale, $a$ est faux :',
        step4: 'L\'instant d\'inflexion découle de $a\\,e^{-rt} = 1$ — une équation logarithmique :',
        amir_comment: 'La vérification de l\'étape 3, je la fais toujours. Elle prend dix secondes et intercepte l\'erreur la plus fréquente : $a = \\frac{K}{N_0}$ au lieu de $a = \\frac{K - N_0}{N_0}$. Chez moi, ça aurait donné 10 au lieu de 9 — ça a l\'air anodin, mais ça décale toute la courbe.',
      },
      abkuehlung: {
        title: 'Croissance bornée lors du refroidissement',
        context: 'Kai laisse un café à 80 °C dans une pièce à 20 °C.',
        step1: 'Ici, la limite est la température ambiante ; l\'écart avec elle est au départ de 60 °C :',
        step2: 'Vérification en $t = 0$ : on doit retrouver la température initiale :',
        step3: 'Au bout de dix minutes, il ne reste plus qu\'environ un tiers de l\'écart :',
        step4: 'À long terme, il reste la température ambiante — mathématiquement, elle n\'est jamais atteinte :',
        kai_comment: 'Pour le café, c\'est du savoir quotidien : la première minute apporte le plus, ensuite ça traîne. C\'est exactement la croissance bornée. Et c\'est la raison pour laquelle souffler aide au début et ne sert plus à rien au bout de dix minutes.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Épidémies',
        desc: 'Les nouvelles infections ont besoin d\'infectés (qui contaminent) et de personnes réceptives (qui peuvent être contaminées). Le point d\'inflexion est le jour où il y a le plus de nouvelles infections — le nombre total continue ensuite d\'augmenter, seulement plus lentement.',
      },
      produkt: {
        title: 'Diffusion de produits et d\'applis',
        desc: 'Les nouveaux utilisateurs arrivent le plus souvent par des utilisateurs existants. Au début, il manque ceux qui recommandent ; à la fin, ceux qui ne sont pas encore équipés. Les services marketing appellent aussi la courbe en S courbe d\'adoption.',
      },
      abkuehlung: {
        title: 'Refroidissement et charge',
        desc: 'La loi de refroidissement de Newton et la courbe de charge d\'une batterie relèvent de la croissance bornée. Ici, seul compte l\'écart par rapport à l\'état final — c\'est pourquoi une batterie charge ses derniers pour cent si désespérément lentement.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'À partir du point d\'inflexion, l\'effectif diminue',
        correct: 'À partir du point d\'inflexion, c\'est le taux d\'accroissement qui diminue ; l\'effectif continue d\'augmenter',
        why: 'Le point d\'inflexion est le zéro de la dérivée seconde, pas de la dérivée première. $N\'$ y a un maximum, elle est donc justement particulièrement grande — et positive. La fonction logistique est strictement croissante sur tout son domaine de définition, elle ne décroît jamais. Qui confond ici effectif et accroissement inverse exactement l\'affirmation.',
        amir_warning: 'C\'est l\'erreur d\'interprétation numéro un, et elle coûte des points à chaque épreuve du bac. Mon astuce : je formule toujours la réponse avec le mot « par ». Qu\'est-ce qui change par semaine ? L\'accroissement. Qu\'est-ce qui est là au total ? L\'effectif. Dès que le mot « par » apparaît, je parle de $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'La croissance logistique est une croissance exponentielle coupée à $K$',
        correct: 'La courbe logistique freine progressivement et n\'atteint jamais $K$',
        why: 'Un modèle exponentiel coupé aurait un angle — il ne serait pas dérivable au point de coupure et atteindrait la limite exactement en un temps fini. La fonction logistique est au contraire lisse partout et ne s\'approche de $K$ qu\'asymptotiquement. La différence n\'est pas cosmétique : le modèle coupé prédit une date de fin concrète, le modèle logistique aucune.',
        amir_warning: 'Dans cette idée, seule la phase initiale est juste : tant que $N$ est petit par rapport à $K$, le facteur de freinage vaut presque $1$ et les deux courbes sont pratiquement superposées. La courbe exponentielle est la tangente initiale de la courbe logistique — c\'est d\'ailleurs pour ça que mon premier modèle collait si bien aux premières semaines.',
      },
    },
  },
};
