export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'A Mia está sentada no seu pequeno escritório no porto de Hamburgo a olhar para o ecrã. O Lumi, a sua personagem em "Hafenlichter", deve saltar com elegância por cima de caixas e contentores — mas a curva de salto parece simplesmente errada. "A física não bate certo", murmura ela. Para programar uma trajetória de salto realista, a Mia precisa de funções quadráticas.',
      challenge: 'O Lumi deve saltar por cima das caixas — mas a curva de salto parece pouco natural.',
      outro: 'Com a forma de vértice, a Mia programou a curva de salto perfeita! Agora o Lumi voa num arco elegante por cima dos contentores de Hamburgo. "Finalmente parece realista", diz o Tim, e dá-lhe um high-five.',
    },
    objectives: {
      recognize: 'Reconhecer funções quadráticas e descrever as suas propriedades',
      vertex_form: 'Converter com segurança entre a forma normal e a forma de vértice',
      pq_formula: 'Calcular zeros com a fórmula quadrática',
      graph_properties: 'Ler na equação o sentido da abertura, o vértice e o eixo de simetria',
    },
    explanation: {
      intro: 'Imagina que lanças uma bola de basquetebol. A bola voa num arco para cima, atinge o ponto mais alto e volta a cair. Esta trajetória tem uma forma muito específica — uma parábola. Em matemática, descrevemo-la com uma função quadrática:',
      opening: 'O número $a$ decide se a parábola abre para cima ($a > 0$) ou para baixo ($a < 0$) — e se é "estreita" ou "larga". Quanto maior for $|a|$, mais estreita é a parábola.',
      mia_tip: 'No meu jogo, $a$ é negativo, porque a curva de salto sobe e depois volta a descer — como um U virado ao contrário!',
      vertex_form: 'A forma de vértice mostra-te diretamente o ponto mais alto (ou mais baixo) da parábola. O vértice $S$ tem as coordenadas $(d \\mid e)$:',
      conversion: 'Para passar da forma normal para a forma de vértice, usas o método de completar o quadrado. Juntas um número bem escolhido e voltas a tirá-lo, de modo a surgir um quadrado perfeito.',
    },
    concepts: {
      normal_form: {
        title: 'Forma normal',
        desc: 'A representação padrão. Vês logo: $a$ = abertura, $c$ = ordenada na origem (onde a parábola corta o eixo y).',
      },
      vertex_form: {
        title: 'Forma de vértice',
        desc: 'Mostra-te logo o vértice $S(d \\mid e)$. Ideal para: ler o ponto máximo/mínimo, reconhecer uma translação.',
      },
      pq_formula: {
        title: 'Fórmula quadrática',
        desc: 'A tua ferramenta para os zeros. Condição: a equação tem de estar na forma $x^2 + px + q = 0$ (o coeficiente de $x^2$ tem de ser 1!).',
      },
      discriminant: {
        title: 'Discriminante',
        desc: 'A expressão dentro da raiz decide: $D > 0$ = dois zeros, $D = 0$ = um zero, $D < 0$ = nenhum zero real.',
      },
    },
    examples: {
      vertex: {
        title: 'Determinar a forma de vértice',
        context: 'A Mia quer calcular o ponto mais alto do salto do Lumi.',
        step1: 'É dada a função na forma normal:',
        step2: 'Completar o quadrado: juntamos $(\\frac{6}{2})^2 = 9$ e voltamos a subtraí-lo:',
        step3: 'Simplificar — a expressão dentro dos parênteses é um quadrado perfeito:',
        step4: 'Ler o vértice: $d = 3$, $e = -4$, portanto:',
        mia_comment: 'O vértice em $(3 \\mid -4)$ é o ponto mais baixo, porque $a = 1 > 0$. Para uma curva de salto preciso de $a < 0$, e aí passa a ser o ponto mais alto!',
      },
      pq: {
        title: 'Zeros com a fórmula quadrática',
        context: 'Onde é que o Lumi volta a tocar no chão?',
        step1: 'Dado: a equação já está na forma certa (coeficiente de $x^2$ = 1):',
        step2: 'Ler os valores de $p$ e $q$:',
        step3: 'Substituir na fórmula quadrática e calcular:',
        step4: 'Portanto, o Lumi aterra em $x = 2$ ou em $x = -4$:',
        mia_comment: 'Dois zeros — a parábola corta o eixo x duas vezes. No jogo, isso quer dizer: o Lumi salta em $x = -4$ e aterra em $x = 2$!',
      },
    },
    realworld: {
      basketball: {
        title: 'Lançamento no basquetebol',
        desc: 'Cada lançamento ao cesto descreve uma parábola. A altura $h$ depende do tempo $t$. Os treinadores usam isto para calcular o ângulo de lançamento ideal.',
      },
      bridge: {
        title: 'Pontes suspensas',
        desc: 'Nas pontes suspensas como a Golden Gate Bridge, o cabo principal fica pendurado quase exatamente em forma de parábola – porque o tabuleiro distribui o seu peso de maneira uniforme pelo cabo.',
      },
      pricing: {
        title: 'Otimização de preços',
        desc: 'Uma loja quer saber: que preço traz o maior lucro? Quando o preço sobe, menos pessoas compram — o lucro é uma parábola com um máximo.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Erro de sinal',
        correct: 'Atenção ao sinal',
        why: 'Em $f(x) = (x - d)^2 + e$ há um sinal de menos antes de $d$. Isso significa: $f(x) = (x - 3)^2$ tem o vértice em $d = +3$, não em $-3$!',
        mia_warning: 'Este erro de sinal custou-me 3 horas de depuração. A curva de salto do Lumi estava deslocada para a esquerda em vez de para a direita!',
      },
      pq_wrong: {
        wrong: 'Fórmula quadrática sem dividir',
        correct: 'Primeiro dividir por $a$',
        why: 'A fórmula quadrática só funciona quando o coeficiente de $x^2$ é igual a 1. Em $2x^2 + 4x - 6 = 0$ tens de dividir primeiro por 2: $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'A Mia tem um problema com a deteção de colisões: quando é que o Lumi toca num obstáculo? O Tim sugere calcular a distância entre dois pontos. "Para isso precisas de Pitágoras", diz ele. A Mia lembra-se do teorema da escola — e de repente tudo faz sentido.',
      challenge: 'A deteção de colisões precisa de calcular a distância entre objetos.',
      outro: 'A deteção de colisões do Lumi funciona agora ao píxel! A Mia usou o teorema de Pitágoras para calcular em tempo real a distância entre a personagem e os obstáculos.',
    },
    objectives: {
      theorem: 'Aplicar com segurança o teorema de Pitágoras',
      calculate_sides: 'Calcular lados em falta num triângulo retângulo',
      recognize: 'Reconhecer quando se trata de um triângulo retângulo',
      apply: 'Aplicar o teorema a problemas do dia a dia',
    },
    explanation: {
      intro: 'Em qualquer triângulo retângulo vale uma regra simples, mas poderosa: a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa.',
      sides: 'Aqui, $c$ é sempre o lado mais comprido — a hipotenusa. Fica em frente ao ângulo reto. Os dois lados mais curtos, $a$ e $b$, chamam-se catetos.',
      mia_tip: 'No meu jogo, calculo a distância entre o Lumi e um objeto como hipotenusa. A distância horizontal é $a$, a vertical é $b$ — e $c$ é a distância real!',
      solving: 'Podes resolver a fórmula em ordem a qualquer lado. Se procuras a hipotenusa:',
    },
    concepts: {
      theorem: {
        title: 'Teorema de Pitágoras',
        desc: 'Só vale em triângulos retângulos. $c$ é a hipotenusa (em frente ao ângulo reto), $a$ e $b$ são os catetos.',
      },
      hypotenuse: {
        title: 'Calcular a hipotenusa',
        desc: 'Se conheces os dois catetos, tira a raiz da soma dos quadrados.',
      },
      cathetus: {
        title: 'Calcular um cateto',
        desc: 'Se conheces a hipotenusa e um cateto, tira a raiz da diferença.',
      },
    },
    examples: {
      screen: {
        title: 'Calcular a diagonal do ecrã',
        context: 'A Mia quer saber que tamanho tem realmente o ecrã do seu novo monitor.',
        step1: 'O monitor tem 16 polegadas de largura e 9 polegadas de altura:',
        step2: 'Aplicar Pitágoras — a largura e a altura são os catetos:',
        step3: 'Tirar a raiz para obter a diagonal:',
        mia_comment: '18,36 polegadas de diagonal — é o valor que os fabricantes indicam como "tamanho do ecrã". Agora já sei porquê!',
      },
      ladder: {
        title: 'Escada encostada à parede',
        context: 'Até que altura chega uma escada de 5 metros colocada a 1,5 m da parede?',
        step1: 'A escada é a hipotenusa, a distância à parede é um cateto:',
        step2: 'Resolver em ordem ao cateto procurado (a altura):',
        step3: 'A escada chega a quase 4,77 m de altura:',
        mia_comment: 'No jogo uso exatamente este cálculo para verificar se o Lumi consegue chegar a uma escada!',
      },
    },
    realworld: {
      screen: {
        title: 'Diagonal do ecrã',
        desc: 'O "tamanho" de um ecrã é sempre a diagonal — calculada com Pitágoras a partir da largura e da altura.',
      },
      football: {
        title: 'Diagonal do campo de futebol',
        desc: 'Um campo de futebol mede 105 m × 68 m. Qual é a distância de canto a canto? Pitágoras diz-te.',
      },
      wifi: {
        title: 'Alcance do Wi-Fi',
        desc: 'O teu router está no rés-do-chão, tu estás no 1.º andar. A distância real até ao router é a hipotenusa formada pela distância horizontal e pela vertical.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Hipotenusa como cateto',
        correct: 'c é sempre o lado mais comprido',
        why: 'A hipotenusa $c$ fica SEMPRE em frente ao ângulo reto. É o lado mais comprido. Se a confundires com um cateto, o cálculo inteiro fica errado.',
      },
      root: {
        wrong: 'Raiz da soma',
        correct: 'Primeiro somar, depois a raiz',
        why: '$\\sqrt{a^2 + b^2}$ NÃO é o mesmo que $a + b$! Exemplo: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, mas $3 + 4 = 7$.',
        mia_warning: 'Foi o Tim que encontrou este erro no meu código — a deteção de colisões estava 40% imprecisa!',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'A Mia quer criar um sistema de loot para Hafenlichter. Os jogadores devem poder encontrar itens raros — mas não com demasiada frequência, senão fica aborrecido, e não demasiado raramente, senão é frustrante. "Isto é pura probabilidade", diz a Jule. A Mia senta-se e faz as contas.',
      challenge: 'O sistema de loot drop deve ser justo e emocionante.',
      outro: 'O sistema de loot da Mia funciona! Ela equilibrou as probabilidades de drop de forma a que, em média, os jogadores encontrem um item raro a cada 20 caixas. "A matemática por trás é bastante simples", sorri ela — "mas o equilíbrio demorou na mesma."',
    },
    objectives: {
      basic: 'Indicar probabilidades como fração, número decimal e percentagem',
      tree: 'Resolver experiências aleatórias com várias etapas usando diagramas em árvore',
      expected_value: 'Calcular e interpretar o valor esperado',
      complement: 'Trabalhar com a probabilidade do acontecimento contrário ("pelo menos uma vez...")',
    },
    explanation: {
      intro: 'Qual é a probabilidade de sair um 6 no dado? Qual é a hipótese de encontrar um item raro no jogo? Para responder a estas perguntas, precisas do cálculo de probabilidades. A ideia base é simples:',
      range: 'As probabilidades estão sempre entre 0 (impossível) e 1 (certo). Podes escrevê-las como fração ($\\frac{1}{6}$), número decimal ($0{,}167$) ou percentagem ($16{,}7\\%$).',
      mia_tip: 'Em Hafenlichter, $P(\\text{item raro}) = 0{,}05$. Isso quer dizer: em cada drop, o jogador tem 5% de hipótese. Parece pouco — mas ao longo de muitos drops vai somando!',
      tree: 'Em experiências com várias etapas (por ex. lançar o dado duas vezes) usas um diagrama em árvore. Ao longo de um caminho, multiplicas as probabilidades:',
      complement: 'Muitas vezes é mais fácil calcular "o contrário". A probabilidade de algo NÃO acontecer é:',
    },
    concepts: {
      laplace: {
        title: 'Experiência de Laplace',
        desc: 'Quando todos os resultados são igualmente prováveis (como num dado equilibrado), basta dividir: casos favoráveis a dividir por todos os casos possíveis.',
      },
      complement: {
        title: 'Probabilidade do acontecimento contrário',
        desc: 'A probabilidade de A NÃO acontecer. Muito útil para problemas do tipo "pelo menos uma vez"!',
      },
      expected: {
        title: 'Valor esperado',
        desc: 'O valor "médio" em muitas repetições. No dado: $E(X) = 3{,}5$ — nunca podes tirar 3,5, mas em média é este o valor que resulta.',
      },
    },
    examples: {
      dice: {
        title: 'Sair um número par',
        context: 'Qual é a probabilidade de sair um número par ao lançar o dado?',
        step1: 'O dado tem 6 faces — este é o nosso $\\Omega$:',
        step2: 'Casos favoráveis (números pares): 2, 4, 6 — são 3:',
        step3: 'Calcular a probabilidade:',
        mia_comment: '50% — isto é intuitivo. Mas em perguntas mais complexas a fórmula ajuda quando a intuição falha!',
      },
      loot: {
        title: 'Pelo menos um item raro',
        context: 'A Mia quer saber: qual é a probabilidade de conseguir pelo menos um item raro em 10 loot drops?',
        step1: 'A probabilidade de um item raro por drop é de 5%:',
        step2: 'Usar o acontecimento contrário: primeiro calcular que NÃO sai nenhum item raro em 10 drops:',
        step3: 'Isto dá cerca de 60% — em 60% dos casos NÃO se consegue nenhum item raro:',
        step4: 'A probabilidade contrária é a resposta que procuramos:',
        mia_comment: '40% de hipótese de pelo menos um item raro em 10 drops — parece-me justo! Se os jogadores ficarem frustrados, simplesmente aumento a taxa de drop.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Loot boxes nos jogos',
        desc: 'Jogos como Genshin Impact ou EA Sports FC usam probabilidades nas suas loot boxes. Nas lojas de aplicações da Apple e da Google as probabilidades de ganhar têm de ser mostradas – com matemática podes verificar se uma compra compensa.',
      },
      shuffle: {
        title: 'Modo aleatório do Spotify',
        desc: 'O modo aleatório do Spotify não é realmente aleatório — porque o acaso "verdadeiro" parece estranho (às vezes a mesma música aparece 3 vezes seguidas). O Spotify usa algoritmos que "parecem" mais aleatórios.',
      },
      lottery: {
        title: 'Hipóteses de ganhar na lotaria',
        desc: 'Acertar os 6 números na lotaria — parece possível? A probabilidade real é minúscula:',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Somar caminhos em vez de multiplicar',
        correct: 'Ao longo de um caminho, multiplicar',
        why: 'No diagrama em árvore, multiplicas ao longo de um caminho (ligação E). Só podes somar quando juntas caminhos diferentes (ligação OU).',
        mia_warning: 'Cometi este erro no sistema de loot. As taxas de drop estavam demasiado altas, porque somei em vez de multiplicar — todos os jogadores tinham tudo logo de imediato!',
      },
      percent: {
        wrong: 'Percentagens acima de 100%',
        correct: 'O máximo é 100%',
        why: 'Uma probabilidade nunca pode ser maior do que 1 (= 100%). Se o teu resultado for $P > 1$, tens um erro de cálculo.',
      },
    },
  },
};
