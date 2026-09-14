import { batch1 } from '../lessons-10-batch1-fr';
import { batch2 } from '../lessons-10-batch2-fr';
import { batch3 } from '../lessons-10-batch3-fr';
import { batch4 } from '../lessons-10-batch4-fr';
import { batch5 } from '../lessons-10-batch5-fr';
import { batch11a } from '../lessons-11-batch1-fr';
import { batch11b } from '../lessons-11-batch2-fr';
import { batch11c } from '../lessons-11-batch3-fr';
import { batch12a } from '../lessons-12-batch1-fr';
import { batch12b } from '../lessons-12-batch2-fr';
import { batch12c } from '../lessons-12-batch3-fr';
import { batch0 } from '../lessons-10-batch0-fr';
import { portalBatch1 } from '../portal-batch1-fr';

export default {
  ...portalBatch1,
  portal: {
    title: '∫nfinity',
    subtitle: 'Mathématiques — le langage universel',
    oerBadge: 'Ressources educatives libres',
    progress: 'Ta progression',
    comingSoon: 'Bientot disponible',
  },
  modules: {
    'quad-funktionen': {
      title: 'Fonctions quadratiques',
      subtitle: '{levels} niveaux · {exercises} exercices',
    },
    differentialrechnung: {
      title: 'Calcul différentiel',
      subtitle: '{levels} niveaux · {exercises} exercices',
    },
  },
  ui: {
    back: 'Retour',
    next: 'Suivant',
    check: 'Verifier',
    hint: 'Indice',
    hints: 'Indices',
    stars: '{count} etoiles',
    xp: '{count} XP',
    streak: '{count} jours',
    level: 'Niveau {n}',
    exercise: 'Exercice {n}',
    exerciseOf: 'Exercice {current}/{total}',
    correct: 'Exactement ! Bien joue !',
    incorrect: 'Pas tout a fait. Reessaie.',
    almostCorrect: 'Presque ! Voici un indice...',
    levelComplete: 'Tu as maitrise le niveau {n} ! Continue !',
    allComplete: 'Tous les exercices termines — fantastique !',
    start: 'C\'est parti !',
    reset: 'Reinitialiser la progression',
    confirmReset: 'Vraiment tout reinitialiser ?',
    yes: 'Oui',
    no: 'Non',
    badges: 'Decouvertes',
    profile: 'Profil',
    locked: 'Encore verrouille',
    earned: 'Obtenu !',
  },
  levels: {
    'quad-funktionen': {
      1: { title: 'Fondamentaux', subtitle: 'Reconnaître les paraboles' },
      2: { title: 'Conversion de formes', subtitle: 'Générale ↔ Canonique' },
      3: { title: 'Formule quadratique', subtitle: 'Trouver les zéros' },
      4: { title: 'Factorisation', subtitle: 'Formules de Viète' },
      5: { title: 'Mix & Match', subtitle: 'Combiner les méthodes' },
      6: { title: 'Problèmes énoncés', subtitle: 'Les maths dans la vie' },
    },
    differentialrechnung: {
      1: { title: 'Taux de variation et limites', subtitle: 'Qu\'est-ce qu\'une dérivée ?' },
      2: { title: 'Règles de base', subtitle: 'Puissance, Facteur, Somme' },
      3: { title: 'Règles avancées', subtitle: 'Produit, Quotient, Chaîne' },
      4: { title: 'Monotonie et extrêmes', subtitle: 'Étude de courbes I' },
    },
  },
  stories: {
    'quad-funktionen': {
      1: { icon: '📐', text: 'Bienvenue dans le Portail Mathematique ! Les fonctions quadratiques sont partout — de la trajectoire d\'une balle lancee a la forme d\'une antenne parabolique. Decouvre comment fonctionnent les paraboles !', motivation: 'Pret(e) pour ta premiere parabole ?' },
      2: { icon: '🔄', text: 'Chaque fonction quadratique a plusieurs visages. Forme generale, forme canonique — differentes ecritures, meme courbe. Apprends a basculer entre elles !', motivation: 'Decodons les formes !' },
      3: { icon: '🧮', text: 'Ou la parabole coupe-t-elle l\'axe des x ? La formule quadratique te donne la reponse. Un outil que tu n\'oublieras jamais !', motivation: 'Les zeros t\'attendent !' },
      4: { icon: '✂️', text: 'Factoriser signifie decomposer une fonction en ses elements. Les formules de Viete aident — elegamment et efficacement.', motivation: 'C\'est l\'heure de decomposer !' },
      5: { icon: '🎯', text: 'Tu connais maintenant beaucoup d\'outils. Lequel convient quand ? Ici tu apprends a choisir la bonne methode pour chaque probleme.', motivation: 'Combine tes connaissances !' },
      6: { icon: '📝', text: 'Les mathematiques ne vivent pas seulement sur le papier. Ici tu rencontres les fonctions quadratiques dans la vraie vie — construction de ponts, jardinage, optimisation.', motivation: 'Les maths rencontrent la realite !' },
    },
    differentialrechnung: {
      1: { icon: '🔭', text: 'Tu es sur un pont et tu observes un bateau. A quelle vitesse se deplace-t-il MAINTENANT ? Pas en moyenne — a cet exact moment. C\'est la question que Newton et Leibniz posaient il y a 350 ans...', motivation: 'Decouvre le taux de variation instantane !' },
      2: { icon: '🧩', text: 'Calculer la limite a chaque fois ? Ce serait comme calculer 7×8 par addition repetee. Heureusement, il y a des raccourcis — les regles de derivation...', motivation: 'Apprends les raccourcis !' },
      3: { icon: '🚀', text: 'Les regles de base c\'est comme apprendre a marcher. Maintenant tu apprends a sauter. Quand les fonctions sont multipliees, divisees ou imbriquees, il faut de nouveaux outils...', motivation: 'Pret(e) pour la prochaine etape ?' },
      4: { icon: '🔬', text: 'Un entrepreneur demande : "A quelle quantite mon profit est-il le plus eleve ?" Un biologiste demande : "Quand la population croit-elle le plus vite ?" La reponse est dans la derivee...', motivation: 'Trouve les points extremes !' },
    },
  },
  badges: {
    'first-solve': { name: 'Premiere solution', description: 'Premier exercice resolu' },
    'parabel-pro': { name: 'Explorateur de paraboles', description: 'Niveau 1 maitrise' },
    'pq-meister': { name: 'Expert en formules', description: 'Niveau 3 maitrise' },
    'faktor-fuchs': { name: 'Expert en factorisation', description: 'Niveau 4 maitrise' },
    'textaufgaben-koenig': { name: 'Expert en problemes enonces', description: 'Niveau 6 maitrise' },
    'perfect-score': { name: 'Perfectionniste', description: '3 etoiles dans un exercice' },
    'streak-3': { name: 'Serie de 3 jours', description: '3 jours d\'entrainement consecutifs' },
    vollstaendig: { name: 'Diplome(e) du module', description: 'Tous les exercices d\'un module termines' },
    'erste-ableitung': { name: 'Premiere decouverte', description: 'Premier exercice de calcul resolu' },
    'grenzwert-versteher': { name: 'Explorateur de limites', description: 'Niveau 1 maitrise' },
    regelmeister: { name: 'Expert en regles', description: 'Niveaux 2 et 3 maitrises' },
    'kurvendiskussion-I': { name: 'Chercheur de courbes', description: 'Niveau 4 maitrise' },
    'diff-starter': { name: 'En chemin', description: 'Les 16 exercices termines' },
  },
  exercises: {
    differentialrechnung: {
      'D1-EX1': { title: 'Taux de variation moyen', description: 'Calcule la pente de la sécante de f(x) = x² entre x=1 et x=3.' },
      'D1-EX2': { title: 'Taux de variation instantané', description: 'Fais glisser le point sur la courbe et détermine la pente.' },
      'D1-EX3': { title: 'Du taux différentiel au quotient différentiel', description: 'Dérive f(x) = x² à l\'aide de la limite.' },
      'D1-EX4': { title: 'Limite visuellement', description: 'Observe l\'animation et détermine la pente de la tangente.' },
      'D2-EX1': { title: 'Règle de la puissance', description: 'Dérive 5 fonctions avec la règle de la puissance.' },
      'D2-EX2': { title: 'Règle du facteur constant', description: 'Dérive des fonctions avec des facteurs constants.' },
      'D2-EX3': { title: 'Règle de la somme', description: 'Dérive f(x) = 3x² + 2x − 5 terme par terme.' },
      'D2-EX4': { title: 'Exercices mixtes', description: 'Identifie la bonne règle et calcule.' },
      'D3-EX1': { title: 'Règle du produit', description: 'Dérive f(x) = (2x+1)·x³.' },
      'D3-EX2': { title: 'Règle du quotient', description: 'Dérive f(x) = (x²+1)/(x−1).' },
      'D3-EX3': { title: 'Règle de la chaîne', description: 'Dérive f(x) = (2x+3)⁴.' },
      'D3-EX4': { title: 'Sélection de la règle', description: 'Quelle règle convient ? Explique et calcule.' },
      'D4-EX1': { title: 'Trouver les extrêmes', description: 'Détermine les extrêmes de f(x) = x³ − 3x.' },
      'D4-EX2': { title: 'Changement de signe', description: 'Marque les points extrêmes sur le graphique.' },
      'D4-EX3': { title: 'Intervalles de monotonie', description: 'Sur quels intervalles la fonction est-elle croissante ou décroissante ?' },
      'D4-EX4': { title: 'Flux de travail complet', description: 'Réalise une étude complète des extrêmes.' },
    },
  },
  // ── Lesson Layer Labels ──
  lesson: {
    objectives: 'Objectifs d\'apprentissage',
    objectivesSubtitle: 'Après ce thème, tu sais...',
    explanation: 'Explication',
    concepts: 'Notions clés',
    examples: 'Exemples types',
    examplesSubtitle: 'Résolus pas à pas',
    realWorld: 'Où rencontres-tu ça ?',
    mistakes: 'Erreurs fréquentes',
    mistakesSubtitle: 'Voilà ce qui coince souvent...',
    prerequisites: 'Prérequis',
    prerequisitesSubtitle: 'Ce que tu dois déjà savoir faire',
    connections: 'Ponts vers d\'autres thèmes',
    connectionsSubtitle: 'Là où la même idée réapparaît',
    collapseLesson: 'Replier la leçon',
    expandLesson: 'Afficher la leçon',
    skipToExercises: 'S\'entraîner maintenant →',
    storyOutro: 'Comment continue l\'histoire ?',
  },

  // ── Lesson Content per Topic ──
  lessons: {
    ...batch1,
    ...batch2,
    ...batch3,
    ...batch4,
    ...batch5,
    ...batch11a,
    ...batch11b,
    ...batch11c,
    ...batch12a,
    ...batch12b,
    ...batch12c,
    ...batch0,
  },

  footer: {
    createdBy: 'Cree par Dirk Schulenburg',
    license: 'Sous licence CC BY-SA 4.0',
    consulting: 'Ateliers et conseil',
  },
};
