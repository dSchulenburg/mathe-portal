export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'O Amir está a construir um novo filtro de recomendação na DataPulse. A fórmula: «relevância por ouvinte a dividir pelo número de ouvintes». Soa limpo, até a Yara perguntar: «E o que acontece se uma faixa tiver zero ouvintes?» O Amir fica a olhar para o código: divisão por zero. Falha. Polos, descontinuidades removíveis, assíntotas: toda a família das funções racionais aparece de repente no seu caderno, e ele tem mesmo de a compreender.',
      challenge: 'O Amir tem de proteger o seu filtro para que não falhe nos polos, e ao mesmo tempo reconhecer quando uma falha aparente é, na verdade, apenas uma descontinuidade removível que se pode simplificar.',
      outro: 'Com três ferramentas o Amir safa-se: verificar o domínio (onde é que o denominador se anula?), distinguir polo de descontinuidade removível (o numerador também se anula aí?) e determinar as assíntotas (comportamento para $|x|$ grandes). O seu filtro corre agora sem problemas, e o professor Nguyen elogia: «Isto é higiene numérica bem feita.»',
    },
    objectives: {
      definition: 'Reconhecer uma função racional e determinar o seu domínio',
      poles: 'Encontrar os polos: zeros do denominador em que o numerador não se anula',
      removable_gaps: 'Reconhecer descontinuidades removíveis, eliminá-las por simplificação e indicar o prolongamento por continuidade',
      asymptotes: 'Deduzir assíntotas verticais e horizontais a partir da expressão da função',
    },
    explanation: {
      intro: 'Uma função racional é um quociente de dois polinómios: numerador $p(x)$ a dividir pelo denominador $q(x)$. O ponto decisivo: o denominador nunca pode anular-se, senão a função não está definida nesse ponto.',
      domain: 'O domínio $D_f$ é formado por todos os números reais exceto os zeros do denominador. Fatoriza o denominador ou calcula os seus zeros: são esses os buracos de $D_f$.',
      amir_tip: 'O meu primeiro reflexo perante qualquer função racional: onde é que o denominador se anula? Esses valores de $x$ escrevo-os no topo da folha. Só depois trato do resto. Quem salta esse passo deixa escapar polos, e no código o programa vai abaixo.',
      poles: 'Tens um polo quando o denominador se anula mas o numerador não. Aí o valor da função dispara para o infinito (positivo ou negativo) e o gráfico tem uma assíntota vertical.',
      removable: 'Se no mesmo ponto o numerador também se anular, podes simplificar o fator comum. Fica então a chamada «descontinuidade removível»: o gráfico tem aí apenas um buraco, que poderias preencher com uma definição sensata.',
      asymptotes: 'O comportamento para $|x|$ grandes lê-se nos graus dos polinómios: se o grau do numerador for menor do que o do denominador, então $f(x) \\to 0$ e o eixo x é assíntota horizontal. Se os graus coincidirem, o quociente dos coeficientes principais dá a assíntota horizontal.',
    },
    concepts: {
      definition: {
        title: 'Função racional',
        desc: 'Quociente de dois polinómios $p(x)$ e $q(x)$. Definida onde $q(x) \\neq 0$. Exemplos: $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Polo',
        desc: 'Ponto $x_0$ com $q(x_0) = 0$ e $p(x_0) \\neq 0$. O gráfico dispara para $\\pm\\infty$: assíntota vertical em $x = x_0$. Ordem do polo par ⇒ sem mudança de sinal; ímpar ⇒ com mudança de sinal.',
      },
      removable_gap: {
        title: 'Descontinuidade removível',
        desc: 'Ponto $x_0$ com $p(x_0) = q(x_0) = 0$. Simplificar o fator comum e calcular depois o limite: é esse o «prolongamento por continuidade». O gráfico apresenta aí apenas um buraco aberto.',
      },
      asymptote: {
        title: 'Assíntota horizontal',
        desc: 'Limite para $x \\to \\pm\\infty$. Se $\\deg p < \\deg q$ vale $y = 0$; se $\\deg p = \\deg q$ é o quociente dos coeficientes principais. Se $\\deg p > \\deg q$ há em vez disso uma assíntota oblíqua ou curva.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Estudar um polo simples',
        context: 'O Amir examina a função racional mais simples do seu filtro: $f(x) = \\frac{1}{x-2}$. Onde não está definida e como se comporta?',
        step1: 'Escrever a expressão: numerador $p(x) = 1$, denominador $q(x) = x - 2$:',
        step2: 'Procurar o zero do denominador: $q(x) = 0$ dá um ponto crítico:',
        step3: 'Avaliar aí o numerador: $p(2) = 1 \\neq 0$. Logo, não é uma descontinuidade removível, mas um polo verdadeiro:',
        step4: 'Comportamento no infinito: $\\frac{1}{x-2} \\to 0$ para $x \\to \\pm\\infty$. O eixo x é assíntota horizontal:',
        amir_comment: 'Caso clássico: assíntota vertical em $x = 2$, assíntota horizontal em $y = 0$. No código tenho portanto de intercetar explicitamente $x = 2$, senão sai NaN. Era exatamente a pergunta da Yara.',
      },
      removable: {
        title: 'Encontrar uma descontinuidade removível por simplificação',
        context: 'Num teste, o Amir depara-se com $f(x) = \\frac{x^2 - 1}{x - 1}$. Em $x = 1$ o denominador anula-se: falha? Ou talvez não?',
        step1: 'Escrever a expressão: o numerador é uma diferença de quadrados:',
        step2: 'Em $x = 1$ anulam-se numerador E denominador. É esse o indício de uma descontinuidade removível:',
        step3: 'Fatorizar o numerador $(x^2 - 1) = (x-1)(x+1)$ e simplificar depois o fator comum $(x-1)$:',
        step4: 'O gráfico é, portanto, a reta $y = x + 1$, com um buraco exatamente em $x = 1$, porque a $f$ original não está aí definida:',
        amir_comment: 'Importante: apesar da simplificação, não posso incluir $x = 1$ em $D_f$. A função original continua indefinida aí. No código resolvo isso com uma condição e devolvo o limite $f(1) := 2$: um prolongamento por continuidade limpo.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Custo unitário na produção',
        desc: 'Custos fixos $F$ repartidos por $x$ peças produzidas, mais custos variáveis $v$ por peça: $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. Para $x \\to \\infty$ o custo unitário aproxima-se de $v$: uma assíntota horizontal na vida real.',
      },
      light_intensity: {
        title: 'Intensidade luminosa e quadrado da distância',
        desc: 'Uma lâmpada de potência $P$ gera à distância $r$ a intensidade $I(r) = \\frac{P}{4\\pi r^2}$. Para $r \\to 0$ há um polo (teoricamente brilho infinito junto à própria fonte); para $r \\to \\infty$ tem-se $I \\to 0$. Lei da natureza clássica.',
      },
      dilution: {
        title: 'Concentração ao diluir',
        desc: 'Um sumo de concentração $c_0$ e volume $V_0$ é diluído com um volume $V$ de água: $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Aqui não há polo ($V_0 + V > 0$), mas para $V \\to \\infty$ a concentração tende para zero: assíntota horizontal $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'Confundir polo e zero da função',
        correct: 'Zero: anula-se o numerador. Polo: anula-se o denominador e o numerador não',
        why: 'Em $f(x) = \\frac{x-3}{x+2}$ o zero está em $x = 3$ (aí $p(x) = 0$, logo $f = 0$) e o polo em $x = -2$ (aí $q(x) = 0$). Quem troca os papéis desenha o gráfico completamente mal: buraco e polo nos sítios errados.',
        amir_warning: 'A minha regra mnemónica: o zero está onde $f$ «devolve zero». O polo está onde $f$ «explode». Ambos decorrem diretamente do numerador ou do denominador: nunca os confundas.',
      },
      dont_cancel: {
        wrong: 'Não ver o fator comum e supor um polo',
        correct: 'Fatorizar primeiro numerador e denominador, e simplificar depois os fatores comuns',
        why: 'Em $f(x) = \\frac{x^2-4}{x-2}$ parece que $x = 2$ é um polo. Mas se fatorizarmos o numerador fica $\\frac{(x-2)(x+2)}{x-2} = x+2$, ou seja, apenas uma descontinuidade removível. Quem não fatoriza afirma a existência de um polo que na realidade não existe.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'O Amir treina na DataPulse um modelo linear simples: três características (andamento, volume, dançabilidade), a partir das quais o modelo estima uma avaliação dos ouvintes. De três exemplos conhecidos resultam três equações a três incógnitas: os pesos das características. «À mão não vai lá», diz o Finn. O Amir sorri: «Vai sim, com Gauss.» Os sistemas de equações lineares, um clássico que se esconde por trás de todo o código de ML.',
      challenge: 'O Amir tem de determinar, a partir de três exemplos de treino, os três pesos $a$, $b$, $c$. Três equações, três incógnitas: Gauss.',
      outro: 'Com o método de Gauss, o Amir leva sistematicamente a matriz ampliada à forma escalonada. A parte inferior esquerda torna-se em zeros passo a passo, e depois ele lê as soluções para trás. «É exatamente o que o numpy.linalg.solve faz por baixo», explica ao Finn, «só que agora percebo finalmente porquê.»',
    },
    objectives: {
      solve_2x2: 'Resolver sistemas lineares a duas incógnitas por substituição, comparação ou adição',
      gauss_3x3: 'Levar sistematicamente à forma escalonada os sistemas a três incógnitas com o algoritmo de Gauss',
      solution_types: 'Distinguir os três tipos de solução: única, nenhuma, infinitas',
      matrix_form: 'Escrever um sistema na forma matricial $A\\vec{x} = \\vec{b}$ e construir corretamente a matriz ampliada',
    },
    explanation: {
      intro: 'Um sistema de equações lineares é um conjunto de várias equações nas mesmas incógnitas. Uma solução do sistema é um conjunto de valores que satisfaz TODAS as equações em simultâneo. Já conhecido do 9.º ano: tipicamente duas equações e duas incógnitas:',
      methods: 'Para sistemas 2×2 bastam os métodos clássicos: substituição, comparação ou adição. A partir de 3×3 a coisa torna-se depressa confusa, e é por isso que existe o algoritmo de Gauss, que decorre de forma mecânica e sempre igual.',
      amir_tip: 'O meu procedimento para 3×3: escrever a matriz ampliada e depois ir DIRETO AO ASSUNTO. Primeiro anular a coluna da esquerda por baixo do pivô, depois a coluna do meio por baixo do segundo pivô. Forma escalonada. Substituição para trás. Soa mecânico, e é: precisamente aí está a vantagem.',
      gauss: 'No método de Gauss escreves o sistema como matriz ampliada $(A | \\vec{b})$. Com três operações sobre linhas — multiplicar uma linha por um número, somar ou subtrair linhas, trocar linhas — transformas a matriz na forma escalonada. Isso não altera o conjunto das soluções.',
      solution_types: 'Da forma escalonada lês diretamente o tipo de solução: sem linha contraditória em baixo ⇒ solução única. Uma linha $0 = c$ com $c \\neq 0$ ⇒ não há solução. Uma linha $0 = 0$ ⇒ introduzir um parâmetro, infinitas soluções.',
    },
    concepts: {
      lgs: {
        title: 'Sistema de equações lineares',
        desc: 'Um conjunto de equações lineares com incógnitas comuns. Na forma matricial: $A \\vec{x} = \\vec{b}$, onde $A$ é a matriz dos coeficientes e $\\vec{b}$ o vetor dos termos independentes.',
      },
      gauss: {
        title: 'Algoritmo de Gauss',
        desc: 'Método de resolução padrão. Levar a matriz ampliada à forma escalonada e resolver depois para trás. Três operações permitidas que não alteram o conjunto das soluções: multiplicar uma linha por um escalar, somar um múltiplo de uma linha, trocar duas linhas.',
      },
      solution_types: {
        title: 'Três tipos de solução',
        desc: 'Solução única (tantos pivôs quantas incógnitas), nenhuma solução (linha contraditória $0 = c$), infinitas soluções (pelo menos uma linha $0=0$, com parâmetros livres).',
      },
      matrix: {
        title: 'Matriz ampliada dos coeficientes',
        desc: 'Notação $(A | \\vec{b})$. À esquerda os coeficientes das incógnitas; à direita, separado por um traço, o termo independente. Poupa reescrever constantemente os nomes das variáveis.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'Sistema 2×2 simples por adição',
        context: 'O Amir tem duas equações de exemplo retiradas dos seus dados de treino. Procura $x$ (peso do andamento) e $y$ (peso do volume).',
        step1: 'Escrever o sistema de equações:',
        step2: 'Somar as duas equações: os termos em $y$ cancelam-se e $x$ fica logo resolvida:',
        step3: 'Substituir $x = 3$ numa das equações de partida, aqui a segunda:',
        step4: 'Conjunto solução: indicá-lo como par $(x, y)$:',
        amir_comment: 'Método de adição clássico: com sorte as variáveis desaparecem logo. Se não, é preciso multiplicar antes uma equação por um número adequado, por exemplo por 2, para que os coeficientes encaixem.',
      },
      gauss_3x3: {
        title: 'Resolver um sistema 3×3 com Gauss',
        context: 'O Amir tem um mini conjunto de treino: três avaliações de ouvintes e três pesos $x, y, z$. Três equações: método de Gauss na matriz ampliada.',
        step1: 'Construir a matriz ampliada: coeficientes à esquerda, termos independentes à direita do traço:',
        step2: 'Linha 2 menos 2 vezes a linha 1: o elemento $a_{21} = 2$ anula-se:',
        step3: 'Linha 3 menos a linha 1: o elemento $a_{31} = 1$ anula-se. A coluna da esquerda fica agora limpa por baixo do pivô 1:',
        step4: 'Prosseguir até à forma escalonada e resolver para trás: $z$ a partir da última linha, substituir acima para $y$ e depois $x$. Solução: $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$:',
        amir_comment: 'Gauss é contabilidade: anotar com clareza cada operação sobre as linhas. Quem executa uma operação a meio — por exemplo transformando apenas a coluna do pivô — obtém lixo. Aqui a disciplina vence o génio.',
      },
    },
    realworld: {
      mischung: {
        title: 'Problemas de misturas',
        desc: 'Um farmacêutico mistura duas soluções de concentrações $a$ e $b$ para obter uma mistura de massa total $m$ e quantidade total de princípio ativo $w$. Duas equações, duas incógnitas: um sistema, diretamente.',
      },
      preise: {
        title: 'Reconstituir preços',
        desc: 'Três clientes, três talões com quantidades e preço total: a partir daí há que recuperar os preços unitários. Três equações, três preços unitários desconhecidos. Gauss resolve isso em poucos passos.',
      },
      network: {
        title: 'Circuitos elétricos (Kirchhoff)',
        desc: 'Numa rede de resistências, cada equação dos nós (corrente que entra = corrente que sai) e cada equação das malhas (soma das tensões = 0) fornece uma condição linear. Com $n$ incógnitas resulta um sistema $n \\times n$: procedimento padrão em eletrotecnia.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Numa operação sobre a linha, transformar apenas a coluna do pivô',
        correct: 'Transformar todas as colunas da linha (incluindo o termo independente) ao mesmo tempo',
        why: 'Uma operação sobre a linha aplica-se à linha INTEIRA. Quem em $Z_2 - 2Z_1$ transforma apenas o elemento pivô e esquece as restantes colunas destrói a equação. Consequência: a forma escalonada parece correta, mas as soluções estão erradas, e depois o erro é difícil de encontrar.',
        amir_warning: 'Foi precisamente esse erro que me custou um ponto inteiro num teste de treino. Desde então escrevo a linha nova por inteiro — todos os elementos, incluindo o termo independente — de forma limpa por baixo da antiga. Assim compara-se num relance.',
      },
      no_solution: {
        wrong: 'Interpretar uma linha contraditória $0 = c$ como $x = c$',
        correct: 'Uma linha $0 = c$ com $c \\neq 0$ significa: o sistema NÃO tem solução',
        why: 'Se no fim sair $0 = 5$, isso é uma contradição: nenhum valor de $x, y, z$ a pode satisfazer. O conjunto solução é vazio. Quem lê isso como $x = 5$ apresenta uma solução que o sistema não satisfaz.',
      },
    },
  },
};
