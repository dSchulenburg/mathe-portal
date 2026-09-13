export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'Mia crée pour Lumières du Port un mini-jeu de parking : Lumi gare la camionnette de livraison et doit payer en venant la récupérer. Mia programme le tarif — 2,00 € jusqu\'à une heure, 3,50 € au-delà. Pendant les tests, Tim remarque quelque chose : « Si tu arrives une seconde trop tard, ça coûte tout à coup 1,50 € de plus. C\'est un bug ? » Mia regarde le graphe. Il n\'est pas cassé — il fait un saut. Et ce saut porte justement un nom.',
      challenge: 'Quand une fonction fait-elle un vrai saut, quand lui manque-t-il un seul point, et quand part-elle vers l\'infini ? Mia doit distinguer ces trois cas sans hésiter pour décider quels tarifs elle a le droit de construire ainsi.',
      outro: 'Mia sait maintenant vérifier en tout point suspect si une fonction est continue : limite à gauche, limite à droite, valeur de la fonction — si les trois concordent, tout va bien. Et elle sait quels trous elle peut réparer et lesquels non. Le tarif du parking, lui, reste discontinu. Ce n\'est pas un bug, c\'est une décision commerciale.',
    },
    objectives: {
      anschaulich: 'Reconnaître intuitivement la continuité — et savoir pourquoi « tracer sans lever le crayon » ne suffit pas comme définition',
      definition: 'Vérifier la continuité en un point à l\'aide de la limite : $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Distinguer sûrement discontinuité réparable, point de saut et pôle',
      zwischenwertsatz: 'Démontrer l\'existence d\'un zéro avec le théorème des valeurs intermédiaires',
    },
    explanation: {
      intro: 'Intuitivement, continue signifie : tu peux tracer le graphe sans lever le crayon. C\'est une bonne première idée — mais ce n\'est pas une définition avec laquelle on peut calculer. Que dire d\'une fonction à laquelle il manque exactement un seul point ? En pratique, tu ne lèves pas le crayon, et pourtant la fonction n\'y est pas continue. Pour une définition solide, tu as besoin de la limite, issue du calcul différentiel.',
      definition: 'Une fonction $f$ est dite continue au point $x_0$ si la valeur de la fonction et la limite en ce point ne se contredisent pas :',
      drei_bedingungen: 'Cette seule ligne contient trois exigences. Toutes les trois doivent être remplies — dans chaque contre-exemple, c\'est exactement l\'une d\'elles qui échoue :',
      mia_tip: 'Je vérifie toujours dans cet ordre : premièrement, le point appartient-il au domaine de définition ? Sinon, il ne peut déjà pas être continu. Deuxièmement, est-ce que j\'arrive à la même valeur en venant de la gauche et de la droite ? Troisièmement, cette valeur est-elle celle que la fonction prend vraiment en ce point ? Trois coches, c\'est fini.',
      einseitig: 'Pour les fonctions définies par morceaux, tu dois regarder séparément des deux côtés au point de raccord. La limite à gauche et la limite à droite ne doivent pas différer, et toutes deux doivent atteindre la valeur de la fonction :',
      arten: 'Il existe exactement trois façons dont la continuité peut se briser — et elles ne sont pas toutes aussi graves. Pour la discontinuité réparable, il ne manque qu\'un point ; tu peux l\'ajouter et tout est réparé. Pour le point de saut, les deux limites latérales existent mais sont différentes — ici, ajouter un point ne sert à rien. Pour le pôle, les limites partent vers l\'infini, il n\'y a aucune valeur à ajouter :',
      zwischenwertsatz: 'La continuité n\'est pas seulement une propriété que l\'on vérifie — c\'est un outil. Le théorème des valeurs intermédiaires dit : une fonction continue qui commence sous zéro et finit au-dessus de zéro doit rencontrer zéro en chemin. Elle ne peut pas sauter par-dessus, puisque sauter lui est justement interdit :',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Continuité en un point',
        desc: 'La limite en ce point coïncide avec la valeur de la fonction. Trois conditions en une seule équation : la valeur de la fonction existe, la limite existe, et elles sont égales. Si l\'une manque, la fonction y est discontinue.',
      },
      einseitig: {
        title: 'Limites à gauche et à droite',
        desc: 'Aux points de raccord des fonctions définies par morceaux, tu vérifies séparément à gauche et à droite. Si les deux valeurs diffèrent, il y a un saut — et la hauteur du saut est exactement leur différence.',
      },
      arten: {
        title: 'Les trois types de discontinuité',
        desc: 'Discontinuité réparable : la limite existe, la valeur de la fonction manque — réparable. Point de saut : les deux limites latérales existent mais sont différentes — non réparable. Pôle : les limites partent vers l\'infini — encore moins réparable.',
      },
      zwischenwertsatz: {
        title: 'Théorème des valeurs intermédiaires',
        desc: 'Si $f$ est continue sur $[a;b]$ et change de signe aux bornes, alors il existe au moins un zéro entre les deux. Le théorème garantit l\'existence — pas l\'unicité, ni l\'endroit exact où il se trouve.',
      },
    },
    examples: {
      luecke: {
        title: 'Combler une discontinuité réparable',
        context: 'Mia tombe sur une expression qui donne $\\frac{0}{0}$ en $x = 1$.',
        step1: 'Le dénominateur s\'annule en $x = 1$ — ce point est exclu du domaine de définition :',
        step2: 'Factoriser le numérateur et simplifier. C\'est permis tant que $x \\neq 1$ :',
        step3: 'L\'expression simplifiée se calcule sans problème en $x = 1$ — c\'est la limite :',
        step4: 'Tu ajoutes maintenant le point manquant. La fonction complétée s\'appelle prolongement par continuité :',
        mia_comment: 'Le $\\frac{0}{0}$ m\'a d\'abord fait peur — je croyais que quelque chose était cassé. Mais non. Ça veut seulement dire : simplifie d\'abord, pose des questions ensuite. Ce qui serait cassé, c\'est $\\frac{1}{0}$ : là, il y a un vrai zéro tout seul au dénominateur.',
      },
      sprung: {
        title: 'Mesurer un point de saut',
        context: 'Le tarif du parking du mini-jeu de Mia — et la question de savoir combien une seconde peut coûter.',
        step1: 'Le tarif est défini par morceaux, le point de raccord se situe à une heure :',
        step2: 'S\'approcher du point de raccord par la gauche et par la droite et comparer les valeurs :',
        step3: 'Les deux limites existent mais sont différentes — c\'est la définition d\'un point de saut :',
        step4: 'La hauteur du saut est leur différence. Ici, ce n\'est pas une panne, c\'est le tarif :',
        kai_comment: 'Ce sont exactement ces sauts qui agacent les gens avec les forfaits mobiles et les tranches d\'affranchissement. Mathématiquement, il n\'y a rien de faux — mais celui qui a une seconde de retard paie toute la tranche suivante. Les tarifs continus facturent à la seconde près. C\'est une décision, pas une formule.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Tarifs par tranches',
        desc: 'Parking, affranchissement, forfait mobile : partout où l\'on facture par unité entamée, la fonction de prix est discontinue. Chaque tranche est un point de saut — et chacune est une décision délibérée du fournisseur.',
      },
      temperatur: {
        title: 'Grandeurs physiques',
        desc: 'Température, position, vitesse : ces grandeurs ne peuvent pas sauter, car un saut signifierait une énergie infinie en un temps nul. C\'est pourquoi les modèles physiques sont presque toujours des fonctions continues.',
      },
      nullstelle: {
        title: 'Trouver des zéros numériquement',
        desc: 'Chaque calculatrice utilise le théorème des valeurs intermédiaires : elle cherche un intervalle avec changement de signe et le coupe en deux encore et encore. Sans continuité, cette méthode ne vaudrait rien — le zéro pourrait tout simplement être sauté.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'Si $f(x_0)$ existe, $f$ y est aussi continue',
        correct: 'La valeur de la fonction doit en plus coïncider avec la limite',
        why: 'Une fonction en escalier est définie en son point de saut — elle y a une valeur tout à fait normale. Elle est pourtant discontinue, car la limite d\'un côté donne autre chose. Être définie n\'est que la première des trois conditions, pas encore la réponse.',
        mia_warning: 'C\'est ce qui m\'est arrivé avec le parking. À exactement une heure, le prix est défini : 2,00 €. Je pensais que tout était donc lisse. Le graphe fait quand même un saut — simplement une seconde plus tard.',
      },
      pol_ist_hebbar: {
        wrong: 'Toute valeur interdite peut être comblée par une valeur bien choisie',
        correct: 'Seulement si la limite des deux côtés existe et est finie',
        why: 'Pour $\\frac{1}{x}$, la fonction tend vers $-\\infty$ à gauche et vers $+\\infty$ à droite. Il n\'existe aucun nombre que l\'on pourrait insérer — quel que soit ton choix, le graphe part à côté vers l\'infini. La règle pratique pour les fractions : si le facteur critique se simplifie, la discontinuité est réparable ; s\'il reste au dénominateur, c\'est un pôle.',
        mia_warning: 'Maintenant, je vérifie toujours avec deux nombres : je substitue $0{,}001$ et $-0{,}001$. Si j\'obtiens deux valeurs proches, la discontinuité est réparable. Si j\'obtiens $1000$ et $-1000$, c\'est un pôle — et là, il n\'y a rien à faire.',
      },
    },
  },
};
