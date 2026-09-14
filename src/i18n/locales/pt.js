import { batch1 } from '../lessons-10-batch1-pt';
import { batch2 } from '../lessons-10-batch2-pt';
import { batch3 } from '../lessons-10-batch3-pt';
import { batch4 } from '../lessons-10-batch4-pt';
import { batch5 } from '../lessons-10-batch5-pt';
import { batch11a } from '../lessons-11-batch1-pt';
import { batch11b } from '../lessons-11-batch2-pt';
import { batch11c } from '../lessons-11-batch3-pt';
import { batch12a } from '../lessons-12-batch1-pt';
import { batch12b } from '../lessons-12-batch2-pt';
import { batch12c } from '../lessons-12-batch3-pt';
import { batch0 } from '../lessons-10-batch0-pt';
import { portalBatch1 } from '../portal-batch1-pt';

export default {
  ...portalBatch1,
  portal: {
    title: '∫nfinity',
    subtitle: 'Matemática — a linguagem universal',
    oerBadge: 'Recursos Educativos Abertos',
    progress: 'Teu progresso',
    comingSoon: 'Em breve',
  },
  modules: {
    'quad-funktionen': {
      title: 'Funções quadráticas',
      subtitle: '{levels} níveis · {exercises} exercícios',
    },
    differentialrechnung: {
      title: 'Cálculo diferencial',
      subtitle: '{levels} níveis · {exercises} exercícios',
    },
  },
  ui: {
    back: 'Voltar',
    next: 'Próximo',
    check: 'Verificar',
    hint: 'Dica',
    hints: 'Dicas',
    stars: '{count} estrelas',
    xp: '{count} XP',
    streak: '{count} dias',
    level: 'Nível {n}',
    exercise: 'Exercício {n}',
    exerciseOf: 'Exercício {current}/{total}',
    correct: 'Exatamente certo! Muito bem!',
    incorrect: 'Ainda não está bem. Tenta outra vez.',
    almostCorrect: 'Quase! Aqui está uma dica...',
    levelComplete: 'Dominaste o nível {n}! Continua assim!',
    allComplete: 'Todos os exercícios concluídos — fantástico!',
    start: 'Vamos lá!',
    reset: 'Repor progresso',
    confirmReset: 'Repor mesmo tudo?',
    yes: 'Sim',
    no: 'Não',
    badges: 'Descobertas',
    profile: 'Perfil',
    locked: 'Ainda bloqueado',
    earned: 'Conquistado!',
  },
  levels: {
    'quad-funktionen': {
      1: { title: 'Fundamentos', subtitle: 'Reconhecer parábolas' },
      2: { title: 'Conversão de formas', subtitle: 'Geral ↔ Vértice' },
      3: { title: 'Fórmula quadrática', subtitle: 'Encontrar zeros' },
      4: { title: 'Fatorização', subtitle: 'Fórmulas de Vieta' },
      5: { title: 'Mix & Match', subtitle: 'Combinar métodos' },
      6: { title: 'Problemas com enunciado', subtitle: 'Matemática na vida' },
    },
    differentialrechnung: {
      1: { title: 'Taxas de variação e limites', subtitle: 'O que é uma derivada?' },
      2: { title: 'Regras básicas', subtitle: 'Potência, Fator, Soma' },
      3: { title: 'Regras avançadas', subtitle: 'Produto, Quociente, Cadeia' },
      4: { title: 'Monotonia e extremos', subtitle: 'Análise de curvas I' },
    },
  },
  stories: {
    'quad-funktionen': {
      1: { icon: '📐', text: 'Bem-vindo(a) ao Portal de Matemática! As funções quadráticas estão em todo o lado — da trajetória de uma bola lançada à forma de uma antena parabólica. Descobre como funcionam as parábolas!', motivation: 'Pronto(a) para a tua primeira parábola?' },
      2: { icon: '🔄', text: 'Cada função quadrática tem diferentes faces. Forma geral, forma vértice — notações diferentes, mesma curva. Aprende a alternar entre elas!', motivation: 'Vamos decifrar as formas!' },
      3: { icon: '🧮', text: 'Onde a parábola cruza o eixo x? A fórmula quadrática dá-te a resposta. Uma ferramenta que nunca mais vais esquecer!', motivation: 'Os zeros estão à tua espera!' },
      4: { icon: '✂️', text: 'Fatorizar significa decompor uma função nos seus fatores. As fórmulas de Vieta ajudam-te — de forma elegante e eficiente.', motivation: 'Hora de decompor!' },
      5: { icon: '🎯', text: 'Já conheces muitas ferramentas. Qual serve quando? Aqui aprendes a escolher o método certo para cada problema.', motivation: 'Combina o teu conhecimento!' },
      6: { icon: '📝', text: 'A matemática não vive apenas no papel. Aqui encontras funções quadráticas na vida real — na construção de pontes, na jardinagem e na otimização.', motivation: 'A matemática encontra a realidade!' },
    },
    differentialrechnung: {
      1: { icon: '🔭', text: 'Estás numa ponte a observar um barco. A que velocidade se move AGORA? Não na média — neste exato momento. Esta é a pergunta que Newton e Leibniz fizeram há 350 anos...', motivation: 'Descobre a taxa de variação instantânea!' },
      2: { icon: '🧩', text: 'Calcular o limite toda vez? Seria como calcular 7×8 por adição repetida. Felizmente, há atalhos — as regras de derivação...', motivation: 'Aprende os atalhos!' },
      3: { icon: '🚀', text: 'As regras básicas são como aprender a andar. Agora aprendes a saltar. Quando as funções são multiplicadas, divididas ou compostas, precisas de novas ferramentas...', motivation: 'Pronto(a) para o próximo passo?' },
      4: { icon: '🔬', text: 'Um(a) empresário(a) pergunta: "Em que quantidade é o meu lucro máximo?" Um biólogo pergunta: "Quando a população cresce mais rápido?" A resposta está na derivada...', motivation: 'Encontra os pontos extremos!' },
    },
  },
  badges: {
    'first-solve': { name: 'Primeira solução', description: 'Primeiro exercício resolvido' },
    'parabel-pro': { name: 'Explorador de parábolas', description: 'Nível 1 dominado' },
    'pq-meister': { name: 'Especialista em fórmulas', description: 'Nível 3 dominado' },
    'faktor-fuchs': { name: 'Especialista em fatoração', description: 'Nível 4 dominado' },
    'textaufgaben-koenig': { name: 'Especialista em problemas de texto', description: 'Nível 6 dominado' },
    'perfect-score': { name: 'Perfeccionista', description: '3 estrelas num exercício' },
    'streak-3': { name: 'Sequência de 3 dias', description: '3 dias seguidos a praticar' },
    vollstaendig: { name: 'Graduado(a) do módulo', description: 'Todos os exercícios do módulo concluídos' },
    'erste-ableitung': { name: 'Primeira descoberta', description: 'Primeiro exercício de cálculo resolvido' },
    'grenzwert-versteher': { name: 'Explorador de limites', description: 'Nível 1 dominado' },
    regelmeister: { name: 'Especialista em regras', description: 'Níveis 2 e 3 dominados' },
    'kurvendiskussion-I': { name: 'Investigador de curvas', description: 'Nível 4 dominado' },
    'diff-starter': { name: 'A caminho', description: 'Todos os 16 exercícios concluídos' },
  },
  exercises: {
    differentialrechnung: {
      'D1-EX1': { title: 'Taxa de variação média', description: 'Calcula o declive da secante de f(x) = x² entre x=1 e x=3.' },
      'D1-EX2': { title: 'Taxa de variação instantânea', description: 'Arrasta o ponto na curva e determina o declive.' },
      'D1-EX3': { title: 'Do quociente de diferenças ao diferencial', description: 'Deriva f(x) = x² usando a definição de limite.' },
      'D1-EX4': { title: 'Limite visualmente', description: 'Observa a animação e determina o declive da tangente.' },
      'D2-EX1': { title: 'Regra da potência', description: 'Deriva 5 funções usando a regra da potência.' },
      'D2-EX2': { title: 'Regra do fator constante', description: 'Deriva funções com fatores constantes.' },
      'D2-EX3': { title: 'Regra da soma', description: 'Deriva f(x) = 3x² + 2x − 5 termo a termo.' },
      'D2-EX4': { title: 'Exercícios mistos', description: 'Identifica a regra correta e calcula.' },
      'D3-EX1': { title: 'Regra do produto', description: 'Deriva f(x) = (2x+1)·x³.' },
      'D3-EX2': { title: 'Regra do quociente', description: 'Deriva f(x) = (x²+1)/(x−1).' },
      'D3-EX3': { title: 'Regra da cadeia', description: 'Deriva f(x) = (2x+3)⁴.' },
      'D3-EX4': { title: 'Seleção de regra', description: 'Que regra serve? Justifica e calcula.' },
      'D4-EX1': { title: 'Encontrar extremos', description: 'Determina os extremos de f(x) = x³ − 3x.' },
      'D4-EX2': { title: 'Mudança de sinal', description: 'Marca os pontos extremos no gráfico.' },
      'D4-EX3': { title: 'Intervalos de monotonia', description: 'Em quais intervalos a função é crescente ou decrescente?' },
      'D4-EX4': { title: 'Fluxo de trabalho completo', description: 'Realiza um estudo completo de extremos.' },
    },
  },
  // ── Lesson Layer Labels ──
  lesson: {
    objectives: 'Objetivos de aprendizagem',
    objectivesSubtitle: 'Depois deste tema consegues...',
    explanation: 'Explicação',
    concepts: 'Conceitos-chave',
    examples: 'Exemplos resolvidos',
    examplesSubtitle: 'Resolvidos passo a passo',
    realWorld: 'Onde encontras isto?',
    mistakes: 'Erros típicos',
    mistakesSubtitle: 'Isto corre mal muitas vezes...',
    prerequisites: 'Conhecimentos prévios',
    prerequisitesSubtitle: 'Isto já deves saber fazer',
    connections: 'Pontes para outros temas',
    connectionsSubtitle: 'Onde a mesma ideia volta a aparecer',
    collapseLesson: 'Recolher lição',
    expandLesson: 'Mostrar lição',
    skipToExercises: 'Praticar agora →',
    storyOutro: 'Como continua a história?',
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
    createdBy: 'Criado por Dirk Schulenburg',
    license: 'Licenciado sob CC BY-SA 4.0',
    consulting: 'Workshops e consultoria',
  },
};
