export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'O Kai está perante o problema final de equilíbrio de «Hafenlichter 3D»: os despojos têm de parecer justos, mas ainda assim entusiasmantes. Se cada chefe largar exatamente a mesma quantidade de ouro, é aborrecido — demasiada variância e os jogadores queixam-se de injustiça. «Preciso de uma distribuição com ar natural — muitos valores perto da média, poucos valores extremos», diz o Kai à sua colega Priya. A resposta vinda da aula de estocástica: a distribuição normal com a sua curva em sino perfeita.',
      challenge: 'O Kai tem de calibrar o sistema de despojos e de desempenho de «Hafenlichter 3D» de modo que as recompensas fiquem distribuídas de forma justa e que os tempos de imagem se mantenham abaixo do limiar crítico — a distribuição normal e as suas regras sigma dão-lhe a ferramenta para isso.',
      outro: 'Com a distribuição normal o Kai construiu um sistema de equilíbrio elegante: os despojos seguem uma curva em sino em torno do valor pretendido e as regras sigma garantem que os casos extremos são raríssimos. «O bonito é que agora consigo calcular exatamente que percentagem de jogadores vive um determinado valor de despojo», explica à equipa. E com a transformação $z$ compara métricas completamente diferentes — tempos de imagem, distribuição de dano, duração de jogo — numa escala única. A curva em sino está por todo o lado.',
    },
    objectives: {
      bell_curve: 'Compreender a distribuição normal $N(\\mu, \\sigma^2)$ como distribuição contínua em forma de sino e interpretar os seus parâmetros',
      sigma_rules: 'Aplicar as regras sigma ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) para estimativas rápidas de probabilidade',
      z_transformation: 'Executar a transformação $z$ e calcular probabilidades com a distribuição normal padrão $\\Phi(z)$',
      central_limit_theorem: 'Conhecer o teorema do limite central e explicar porque a distribuição normal aparece por todo o lado',
    },
    explanation: {
      intro: 'A distribuição normal é a distribuição contínua mais importante da estatística — e encontra-la em todo o lado: em alturas de pessoas, valores medidos, tempos de imagem, resultados de exames. A sua densidade tem a icónica forma de sino, simétrica em torno do valor esperado $\\mu$. O desvio-padrão $\\sigma$ determina quão largo ou estreito é o sino: $\\sigma$ pequeno = sino estreito e alto (pouca dispersão), $\\sigma$ grande = sino largo e achatado (muita dispersão). A função densidade é:',
      sigma_rules: 'As regras sigma são a tua ferramenta rápida: dizem-te logo que percentagem de todos os valores se situa num determinado intervalo em torno de $\\mu$ — sem tabela, sem calculadora. Dentro de $\\pm 1\\sigma$ ficam cerca de $68{,}3\\%$, dentro de $\\pm 2\\sigma$ cerca de $95{,}4\\%$ e dentro de $\\pm 3\\sigma$ quase tudo — $99{,}7\\%$. Isso significa: valores para lá de $3\\sigma$ são raríssimos!',
      kai_tip: 'No desenvolvimento de jogos uso as regras sigma diariamente no equilíbrio. Se quiser que 95% dos despojos fiquem entre 30 e 70 de ouro, ponho $\\mu = 50$ e $2\\sigma = 20$, ou seja, $\\sigma = 10$. Pronto! As regras dão-me logo a distribuição sem que eu tenha de integrar seja o que for.',
      z_transformation: 'Mas e se precisares de uma probabilidade exata — e não apenas das regras sigma? Aí entra em cena a transformação $z$: converte o teu valor $x$ num valor $z$ padronizado e consultas a tabela da distribuição normal padrão $\\Phi(z)$. O valor $z$ diz-te a quantos desvios-padrão $x$ está do valor esperado:',
      central_limit: 'Porque é que a distribuição normal é tão omnipresente? O teorema do limite central dá a resposta: se somares variáveis aleatórias independentes em número suficiente, a sua soma — independentemente do aspeto das distribuições individuais — aproxima-se de uma distribuição normal. É por isso que as médias são quase sempre normais, mesmo quando os dados individuais não o são:',
    },
    concepts: {
      normal_distribution: {
        title: 'Distribuição normal $N(\\mu, \\sigma^2)$',
        desc: 'A distribuição contínua com densidade em forma de sino. $\\mu$ é o valor esperado (centro do sino) e $\\sigma^2$ a variância (largura do sino). A área sob a curva é sempre 1. Simétrica em torno de $\\mu$: mediana = moda = valor esperado.',
      },
      sigma_rules: {
        title: 'Regras sigma',
        desc: 'As três regras de ouro: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Indispensáveis para estimativas rápidas.',
      },
      z_transformation: {
        title: 'Transformação $z$',
        desc: 'Converte qualquer distribuição normal na distribuição normal padrão $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Depois lês $P(X \\leq x) = \\Phi(z)$ na tabela. Assim, distribuições normais quaisquer tornam-se comparáveis.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Probabilidade de um despojo',
        context: 'Em «Hafenlichter 3D» os chefes largam ouro, com distribuição normal de $\\mu = 50$ e $\\sigma = 8$. O Kai quer saber: qual é a probabilidade de um despojo lendário de pelo menos 70 de ouro?',
        step1: 'Montar o modelo — os despojos de ouro seguem uma distribuição normal:',
        step2: 'Aplicar a transformação $z$ — a quantos desvios-padrão está 70 de 50?',
        step3: 'Consultar a tabela — ler $\\Phi(2{,}5)$:',
        step4: 'Calcular a probabilidade complementar — apenas $0{,}6\\%$ recebem 70 ou mais de ouro:',
        kai_comment: 'Perfeito! Um despojo lendário em menos de 1% dos jogadores — isso dá uma sensação especial sem ser injusto. A distribuição normal dá-me controlo total sobre a raridade.',
      },
      frame_times: {
        title: 'Análise do tempo de imagem',
        context: 'A 60 FPS cada imagem tem de ser renderizada em $16{,}7\\,\\text{ms}$. O profiler do Kai mostra: os tempos de imagem têm distribuição normal com $\\mu = 16{,}7\\,\\text{ms}$ e $\\sigma = 2{,}1\\,\\text{ms}$. Com que frequência o jogo trava (tempo de imagem $> 20\\,\\text{ms}$)?',
        step1: 'Montar o modelo — tempos de imagem como distribuição normal:',
        step2: 'Transformação $z$ para o limiar de travamento $x = 20$:',
        step3: 'Ler o valor da tabela:',
        step4: 'Calcular a probabilidade complementar — cerca de uma em cada 17 imagens trava:',
        kai_comment: 'Quase 6% de travamentos — é demasiado para um jogo 3D fluido. Tenho de otimizar o renderizador até o $\\sigma$ ficar mais pequeno. Objetivo: $\\sigma \\leq 1{,}5$, e então menos de 1,5% das imagens ficam afetadas.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Controlo de qualidade na indústria',
        desc: 'As fábricas usam a regra dos $3\\sigma$: se uma peça se desviar mais de $3\\sigma$ da medida-alvo, é rejeitada. A gestão Six Sigma vai ainda mais longe — $6\\sigma$ significa no máximo 3,4 defeitos por milhão de peças. A distribuição normal é o alicerce da garantia de qualidade industrial.',
      },
      iq_scores: {
        title: 'Testes de QI e padronização',
        desc: 'Os valores de QI são, por definição, normalmente distribuídos com $\\mu = 100$ e $\\sigma = 15$. Isso significa: cerca de $68\\%$ da população tem um QI entre 85 e 115 e cerca de $95\\%$ entre 70 e 130. Um QI de 145 ($z = 3$) é tão raro como um despojo de 70 de ouro!',
      },
      stock_returns: {
        title: 'Rendibilidade de ações e risco',
        desc: 'As rendibilidades diárias das ações são muitas vezes modeladas como normais — o $\\sigma$ é então o risco. Os gestores de carteiras usam a transformação $z$ para calcular a probabilidade de uma queda abrupta. No entanto: na realidade, os valores extremos ocorrem mais vezes do que a distribuição normal prevê («caudas pesadas»).',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'Escrever a distribuição normal como $N(\\mu, \\sigma)$ — desvio-padrão em vez de variância',
        correct: 'O correto é $N(\\mu, \\sigma^2)$ — o segundo parâmetro é sempre a variância',
        why: 'Na notação $N(\\mu, \\sigma^2)$ o segundo parâmetro representa a variância $\\sigma^2$, não o desvio-padrão $\\sigma$. Confusões levam a probabilidades completamente erradas — por exemplo, $N(0, 4)$ é uma distribuição com $\\sigma = 2$, não $\\sigma = 4$!',
        kai_warning: 'Este erro destruiu-me uma vez todo o equilíbrio dos despojos. Eu queria dizer $\\sigma = 8$, mas escrevi $N(50, 8)$ — e isso significa $\\sigma = \\sqrt{8} \\approx 2{,}83$. Os despojos ficaram demasiado uniformes! Lembra-te sempre: $N(\\mu, \\sigma^2)$!',
      },
      z_sign: {
        wrong: 'A fórmula do $z$ ao contrário: $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'O correto é $z = \\frac{x - \\mu}{\\sigma}$ — valor menos valor esperado, não ao contrário',
        why: 'Se trocares o numerador, obténs o sinal errado. Um valor acima da média tem de dar um $z$ positivo e um valor abaixo um negativo. Com $x = 70$ e $\\mu = 50$ tem-se $z = +2{,}5$ (acima da média), não $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'O Kai chegou ao coração de «Hafenlichter 3D»: o motor 3D. Todos os objetos do jogo — cada navio, cada onda, cada lanterna do porto — têm de poder ser rodados, escalados e deslocados. «Em 2D as transformações eram apenas fórmulas», recorda-se dos começos da Mia. «Mas em 3D precisas de um sistema que encadeie um número qualquer de transformações — e isso são matrizes.» O Kai abre o código do shader e vê matrizes por todo o lado: matriz de modelo, matriz de vista, matriz de projeção.',
      challenge: 'O Kai tem de compreender e implementar as transformações 3D do seu motor de jogo — rotação, escala e processos de transição, tudo controlado por multiplicação de matrizes.',
      outro: 'As matrizes tornaram-se para o Kai uma ferramenta diária: cada transformação 3D é uma matriz, cada animação uma sequência de multiplicações de matrizes, cada comportamento de transição uma matriz estocástica. «O genial é: por mais complexa que seja a transformação — no fim é sempre $\\vec{x}\' = M \\cdot \\vec{x}$», diz ele. A matriz MVP ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) transforma agora milhares de vértices de Hafenlichter por imagem em pixéis no ecrã.',
    },
    objectives: {
      matrix_operations: 'Somar e multiplicar matrizes e aplicar com segurança as regras de cálculo — em especial a não comutatividade',
      transformation_matrices: 'Montar matrizes de transformação para rotação, escala e reflexão e aplicá-las a vetores',
      stochastic_matrices: 'Calcular matrizes estocásticas e vetores fixos para processos de transição',
      inverse_matrix: 'Determinar a matriz inversa e compreender o seu significado como «transformação de retorno»',
    },
    explanation: {
      intro: 'As matrizes são tabelas retangulares de números — mas a sua verdadeira força está em representarem aplicações. Uma matriz $2 \\times 2$ transforma vetores 2D e uma matriz $3 \\times 3$ transforma vetores 3D. Multiplicar significa: linha por coluna e depois somar. Para $C = A \\cdot B$ vale:',
      transformation: 'Na computação gráfica 3D todas as transformações geométricas são matrizes: rotação, escala, reflexão. A matriz de rotação em torno do eixo $z$ roda um ponto $(x, y, z)$ do ângulo $\\theta$ — e a coordenada $z$ mantém-se inalterada:',
      kai_tip: 'No meu motor encadeio transformações por multiplicação de matrizes: primeiro escalar, depois rodar, depois deslocar. A ordem é aqui decisiva — as matrizes não são comutativas! Rodar primeiro e depois deslocar dá algo completamente diferente de deslocar primeiro e depois rodar. É por isso que leio sempre as cadeias de matrizes da direita para a esquerda.',
      stochastic: 'As matrizes estocásticas descrevem processos de transição: qual é a probabilidade de passar de um estado para outro? Cada coluna soma 1 (no caso de vetores-coluna). Se multiplicares o vetor de estado $\\vec{v}_n$ pela matriz de transição $T$, obténs o estado seguinte $\\vec{v}_{n+1}$:',
      inverse: 'A matriz inversa $A^{-1}$ é a «tecla de anular»: $A \\cdot A^{-1} = I$ (matriz identidade). Se $A$ for uma rotação de $30°$, então $A^{-1}$ é a rotação de $-30°$. Nem todas as matrizes têm inversa — apenas quando $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Multiplicação de matrizes',
        desc: 'Linha por coluna: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. O número de colunas de $A$ tem de ser igual ao número de linhas de $B$. Importante: em geral $A \\cdot B \\neq B \\cdot A$! A ordem conta.',
      },
      transformation_matrix: {
        title: 'Matriz de transformação',
        desc: 'Qualquer aplicação linear (rotação, escala, reflexão) pode ser representada como matriz. A matriz de rotação $R(\\theta)$ roda vetores do ângulo $\\theta$. Várias transformações encadeiam-se por multiplicação de matrizes — lidas da direita para a esquerda.',
      },
      stochastic_matrix: {
        title: 'Matriz estocástica e vetor fixo',
        desc: 'Uma matriz estocástica tem em cada coluna soma 1 — descreve probabilidades de transição. O vetor fixo $\\vec{v}_{\\text{fix}}$ com $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ é o estado de equilíbrio a longo prazo, seja qual for o estado inicial.',
      },
    },
    examples: {
      '3d_rotation': {
        title: 'Rotação 3D de uma lanterna do porto',
        context: 'O Kai quer rodar uma lanterna do porto $90°$ em torno do eixo $z$. A lanterna está no ponto $(3, 0, 5)$. Como calcula a nova posição?',
        step1: 'Montar a matriz de rotação de $90°$ em torno do eixo $z$ ($\\cos 90° = 0$, $\\sin 90° = 1$):',
        step2: 'Escrever o vetor posição da lanterna como vetor-coluna:',
        step3: 'Matriz vezes vetor — multiplicar linha a linha:',
        step4: 'Resultado: a lanterna está agora em $(0, 3, 5)$ — rodada $90°$ no plano $xy$, com $z$ inalterado:',
        kai_comment: 'É exatamente assim que funciona cada imagem no meu motor: milhares de vértices são multiplicados pela matriz de modelo, depois pela matriz de vista (posição da câmara) e depois pela matriz de projeção (perspetiva). Três multiplicações de matrizes por vértice — e a GPU faz isso em milissegundos!',
      },
      player_states: {
        title: 'Comportamento do jogador como cadeia de Markov',
        context: 'Em «Hafenlichter 3D» os jogadores alternam entre explorar (E) e combater (C). O Kai observou: quem explora fica a explorar em $70\\%$ dos casos e passa a combater em $30\\%$. Quem combate fica em combate em $80\\%$ e volta a explorar em $20\\%$. Neste momento $60\\%$ dos jogadores estão a explorar.',
        step1: 'Montar a matriz de transição $T$ e o vetor inicial $\\vec{v}_0$:',
        step2: 'Calcular um passo — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:',
        step3: 'Determinar o vetor fixo — resolver o sistema $T \\cdot \\vec{v} = \\vec{v}$ com $x + y = 1$:',
        step4: 'A longo prazo $40\\%$ exploram e $60\\%$ combatem — independentemente do início:',
        kai_comment: 'Isto vale ouro para o meu design de jogo! O vetor fixo mostra-me que, a longo prazo, os jogadores combatem mais do que exploram — não importa como começam. Se quiser algo mais equilibrado, tenho de alterar as probabilidades de transição. As matrizes tornam o comportamento dos jogadores calculável!',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Computação gráfica e motores 3D',
        desc: 'Todos os motores 3D (Unity, Unreal, Godot) assentam em multiplicação de matrizes. O pipeline MVP — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — transforma cada ponto 3D no ecrã 2D. As GPU modernas são, no essencial, máquinas maciças de multiplicação de matrizes.',
      },
      google_pagerank: {
        title: 'PageRank da Google',
        desc: 'O algoritmo de pesquisa original da Google modela a web como uma enorme matriz estocástica: cada página web é um estado e cada ligação uma probabilidade de transição. O vetor fixo $\\vec{r} = T \\cdot \\vec{r}$ dá a classificação — as páginas com os valores mais altos no vetor fixo ficam no topo.',
      },
      robotics: {
        title: 'Robótica e comando de máquinas',
        desc: 'Os braços robóticos são feitos de juntas, cada uma executando uma rotação. A posição global da mão resulta do produto de todas as matrizes de rotação ao longo do braço. Chama-se a isto cinemática direta — e a matriz inversa resolve o problema inverso: «que ângulos das juntas preciso para esta posição da mão?»',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Tratar a multiplicação de matrizes como a de números: $A \\cdot B = B \\cdot A$',
        correct: 'As matrizes NÃO são comutativas: em geral $A \\cdot B \\neq B \\cdot A$',
        why: 'Rodar primeiro e depois deslocar dá um resultado diferente de deslocar primeiro e depois rodar. Na computação gráfica 3D a ordem trocada leva a posições completamente erradas. Por isso: lê sempre as cadeias de transformação da direita para a esquerda!',
        kai_warning: 'Andei uma vez um dia inteiro à procura de um bug porque tinha trocado rotação e translação. Os meus navios rodavam em torno do centro do mundo em vez do seu próprio eixo! Desde então leio sempre as cadeias de matrizes da direita para a esquerda: $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$ — primeiro rodar, depois deslocar.',
      },
      stochastic_rows_cols: {
        wrong: 'Supor soma de linha = 1 em matrizes estocásticas com vetores-coluna',
        correct: 'Com vetores-coluna a soma da coluna tem de ser 1: $\\sum_i t_{ij} = 1$',
        why: 'A convenção depende de usares vetores-linha ou vetores-coluna. Na escola e nas universidades alemãs o padrão é o vetor-coluna — então as colunas da matriz de transição têm de somar 1. Cada coluna descreve: «a partir do estado $j$ — como se distribuem as transições?»',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'É noite de lançamento no porto de Hamburgo. As luzes dos cais refletem-se na água e no grande ecrã diante do mercado do peixe brilha o título: «Hafenlichter 3D». O Kai está no palco, o microfone na mão, e mal consegue acreditar — três anos de desenvolvimento e agora o jogo está finalmente pronto. No público reconhece duas caras conhecidas: a Mia, que na altura pôs tudo em marcha com o seu jogo 2D em pixel art, e o Amir, cujos algoritmos do DataPulse comandam a IA dos NPC. «Lembram-se», diz o Kai ao microfone, «de quando a Mia começou com funções lineares para mover personagens ao longo de uma reta? Depois o Amir construiu o pipeline de dados com derivadas e distribuição binomial. E agora estamos aqui — com matrizes, integrais e distribuição normal criámos um mundo 3D completo.» A multidão aplaude. Mas antes de a festa começar a sério, o Kai tem ainda um último desafio: o exame de matemática.',
      challenge: 'Aproxima-se a maior das provas — o exame final reúne análise, geometria analítica e estocástica numa só prova. O Kai precisa de uma estratégia que ligue todos os temas, maximize a pontuação e evite os erros típicos.',
      outro: 'A festa de lançamento no porto continua, a música toca e o Kai, a Mia e o Amir brindam. «Três anos de matemática», diz a Mia, «da reta à distribuição normal.» «Dos dados às redes neuronais», acrescenta o Amir. «Dos pixéis 2D ao motor 3D», conclui o Kai. Olham para o Elba, onde dançam as luzes do porto — cada uma delas um vértice, transformado por uma matriz, iluminado por uma função exponencial, equilibrado por uma distribuição normal. A matemática nunca foi apenas contas. Foi a língua com que tornaram reais as suas ideias. O jogo está lançado. O exame está aí. E aconteça o que acontecer — a viagem valeu a pena. Cada função, cada derivada, cada integral os trouxe até aqui. Ao porto. À meta. E ao início de tudo o que ainda vem.',
    },
    objectives: {
      exam_strategy: 'Desenvolver uma estratégia clara de exame: ver as questões, calcular a relação pontos-tempo, questões fáceis primeiro',
      cross_topic_connections: 'Reconhecer e aproveitar as ligações entre análise, geometria analítica e estocástica',
      time_management: 'Planear de forma realista o orçamento de tempo por questão e cumpri-lo',
      error_prevention: 'Reconhecer erros típicos, fazer verificações de plausibilidade e interpretar resultados no contexto do problema',
    },
    explanation: {
      intro: 'O exame final não é uma corrida de velocidade, mas um jogo de estratégia — como um chefe final com várias fases. Tens cerca de 4 a 5 horas para três grandes blocos temáticos. A chave não é saber tudo, mas priorizar com inteligência e trabalhar com asseio. O Kai aprendeu isso com o seu jogo: «Não podes corrigir todos os bugs ao mesmo tempo. Corriges os que têm mais impacto — e é exatamente assim que abordas o exame.»',
      kai_rallying: 'Malta, fizemos matemática durante três anos — não por obrigação, mas porque era a chave para os nossos projetos. A Mia começou com funções, o Amir treinou a sua IA com estocástica e eu construí um mundo 3D com matrizes. O exame é só o genérico depois do combate final. Estamos prontos!',
      structure: 'A prova é normalmente composta por três partes obrigatórias — análise (muitas vezes o maior bloco), geometria analítica e estocástica. A pontuação distribui-se mais ou menos assim:',
      time_strategy: 'Planeia o teu tempo proporcionalmente aos pontos. Se uma questão vale 10 de 100 pontos, investe cerca de $10\\%$ do teu tempo. E a regra de ouro: começa pelas questões em que te sentes seguro. Cada ponto seguro vale tanto como um ponto arrancado a custo!',
      mia_wisdom: 'Lembrem-se do básico! O estudo de uma função é sempre o mesmo esquema: domínio, zeros, extremos, pontos de inflexão, comportamento para $x \\to \\pm\\infty$. Se conhecerem o padrão, cada função é apenas uma variação dele. Aprendi isso com as minhas personagens de jogo — no fundo, cada movimento é uma função.',
      checking: 'Depois de cada alínea: verificação de plausibilidade! As unidades batem certo? Os sinais fazem sentido? O resultado está num intervalo realista? Uma probabilidade maior do que 1 ou uma área negativa são sinais de alarme imediatos — nesse caso é melhor recalcular do que seguir em frente.',
      amir_data: 'Verifico sempre os meus resultados em casos-limite: o que acontece para $x = 0$? Para $x$ muito grandes? A minha solução converge ou diverge? Esta forma de pensar, vinda da depuração, vale igualmente para a prova. E na estocástica: verifica sempre se $\\sum P = 1$!',
      confidence: 'O mais importante para o fim: sabes mais do que julgas. Estão três anos de prática nas tuas mãos. Se durante a prova te faltar por momentos o caminho — respira fundo, lê o enunciado outra vez e começa por aquilo que sabes com segurança. Cada ponto conta. E lembra-te: a matemática não é talento, é uma língua que aprendeste. Fala-a.',
    },
    concepts: {
      read_then_plan: {
        title: 'Ler → planear → calcular → verificar',
        desc: 'O esquema de 4 passos para cada questão: (1) ler a questão toda e marcar a informação. (2) planear a estratégia de resolução — de que métodos precisas? (3) calcular com asseio e clareza. (4) verificar o resultado: unidades, sinais, plausibilidade, contexto do problema.',
      },
      point_maximizing: {
        title: 'Eficiência por pontos',
        desc: 'Nem todas as questões são igualmente difíceis por ponto. Começa pelas questões em que consegues mais pontos no menor tempo. As últimas alíneas são muitas vezes as mais difíceis — é melhor recolher primeiro todos os pontos «fáceis» em todas as questões e só depois voltar aos difíceis.',
      },
      plausibility_check: {
        title: 'Verificação de plausibilidade',
        desc: 'Quatro verificações rápidas que evitam erros de distração: (1) unidades: a unidade encaixa no contexto? (2) sinais: faz sentido um valor negativo aqui? (3) limites: o que acontece para $x \\to 0$ ou $x \\to \\infty$? (4) esboço: o resultado encaixa na ideia gráfica?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Questão típica de análise: estudo de função + integral',
        context: 'O Kai modela o consumo de energia do seu motor 3D com $f(x) = (2x - 1) \\cdot e^{-x}$. Determina os extremos e calcula a área entre o gráfico e o eixo $x$ em $[0;\\, 3]$.',
        step1: 'Escrever a função — aqui já está dada:',
        step2: 'Derivada com a regra do produto: $u = 2x - 1$, $v = e^{-x}$, logo $f\'(x) = u\' \\cdot v + u \\cdot v\'$:',
        step3: 'Encontrar o extremo — pôr $f\'(x) = 0$ ($e^{-x} > 0$ sempre, logo o parêntesis = 0):',
        step4: 'Cálculo da área — integração por partes ou determinação da primitiva:',
        mia_comment: 'É exatamente este o padrão de que falo: derivada com a regra do produto, encontrar o zero, calcular o integral. A função muda, mas a estratégia mantém-se sempre igual. Praticar até correr automaticamente!',
      },
      mixed_stochastik: {
        title: 'Questão típica de estocástica: teste de hipóteses',
        context: 'O teste A/B do Amir mostra: de 50 utilizadores, normalmente $8\\%$ clicam no botão novo. Depois de um redesenho quer testar se a taxa de cliques subiu ($\\alpha = 5\\%$).',
        step1: 'Montar o modelo — distribuição binomial com os parâmetros:',
        step2: 'Formular as hipóteses — teste unilateral para cima:',
        step3: 'Procurar a região crítica — testar $k = 8$ ($P$ ainda demasiado grande):',
        step4: 'Determinar a região de rejeição — a partir de $k = 9$ rejeita-se $H_0$:',
        amir_comment: 'Os testes de hipóteses são, no fundo, lógica de decisão: calculas o quão improvável é o teu resultado sob $H_0$. Se for menos provável do que $\\alpha$, descartas $H_0$. É exatamente assim que tomo decisões baseadas em dados no DataPulse — só que com amostras maiores!',
      },
    },
    realworld: {
      release_day: {
        title: 'Dia do lançamento: quando tudo se junta',
        desc: 'Lançar um jogo é como fazer um exame: meses de preparação desaguam num momento decisivo. «Hafenlichter 3D» do Kai reúne as bases 2D (Mia), a análise de dados (Amir) e a matemática 3D (Kai) — tal como o exame final reúne análise, geometria e estocástica. A preparação é tudo.',
      },
      project_management: {
        title: 'Gestão de projetos e priorização',
        desc: 'No desenvolvimento de software priorizas funcionalidades por impacto e esforço — tal como as questões de exame por pontos e dificuldade. A fórmula $\\text{Eficiência} = \\frac{\\text{Pontos}}{\\text{Tempo}}$ vale igualmente na profissão: concentra-te no que faz a maior diferença.',
      },
      lifelong_learning: {
        title: 'Aprendizagem ao longo da vida',
        desc: 'O exame final não é o fim, mas o começo. A Mia estuda design de jogos, o Amir ciência de dados e o Kai informática de media — e em todo o lado precisam de matemática. A capacidade de entrar em temas novos vale mais do que qualquer fórmula isolada. A matemática ensinou-vos a pensar.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Escrever o resultado sem unidade e sem ligação ao problema: «$A = 12{,}5$»',
        correct: 'Sempre unidade e interpretação: «$A = 12{,}5\\,\\text{UA}$, o que corresponde a $12{,}5\\,\\text{m}^2$»',
        why: 'No exame há pontos pela interpretação no contexto do problema! Um resultado nu, sem unidade ou ligação ao enunciado, custa-te pontos fáceis. Escreve sempre uma frase de resposta: «A área é de $12{,}5\\,\\text{m}^2$, o que corresponde à zona verde do parque.»',
        kai_warning: 'No desenvolvimento de jogos, números sem contexto não valem nada. 12,5 — de quê? Pixéis? Segundos? Pontos de dano? O mesmo na prova: escreve a unidade e formula uma frase de resposta. São pontos oferecidos!',
      },
      skip_plausibility: {
        wrong: 'Não questionar um resultado obviamente errado: $P(X = 5) = 1{,}3$',
        correct: 'Desconfiar de imediato: uma probabilidade nunca pode ser maior do que 1!',
        why: 'As verificações de plausibilidade custam 10 segundos, mas podem salvar questões inteiras. As probabilidades situam-se sempre entre 0 e 1, as áreas nunca são negativas e $e^x > 0$ para todo o $x$. Se o teu resultado violar estas regras básicas, há um erro de cálculo por trás.',
        mia_warning: 'Na minha última prova encontrei exatamente um erro destes: o meu integral era negativo apesar de a função ser positiva em todo o intervalo. Verificação rápida, erro de sinal descoberto, corrigido — 4 pontos salvos. Verifiquem sempre!',
      },
    },
  },
};
