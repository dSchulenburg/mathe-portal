export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'O modelo ML do Amir para o DataPulse oferece recomendacoes de cancoes aceitaveis — mas o treino demora uma eternidade. "O descenso de gradiente e basicamente o mesmo que derivadas", explica-lhe a professora de matematica. "Se entenderes como funcionam as regras de derivacao, tambem vais entender por que o teu modelo aprende." Amir decide trabalhar as regras sistematicamente.',
      challenge: 'Amir quer entender como o seu modelo ML deriva internamente a funcao de perda — para isso precisa da regra da potencia, da regra da soma, da regra do produto e da regra da cadeia.',
      outro: 'Amir agora tem uma base solida: regra da potencia para termos simples, regra da soma e do fator para expressoes compostas, regra do produto para multiplicacoes e a regra da cadeia para funcoes aninhadas. "Agora finalmente entendo o que o PyTorch faz nos bastidores com o Autograd", diz satisfeito.',
    },
    objectives: {
      power_rule: 'Aplicar com seguranca a regra da potencia: derivar $f(x) = x^n$',
      constant_sum_rule: 'Dominar as regras do fator constante e da soma: derivar termos individualmente e manter fatores',
      product_quotient_rule: 'Aplicar corretamente as regras do produto e do quociente',
      chain_rule: 'Utilizar com seguranca a regra da cadeia em funcoes aninhadas',
    },
    explanation: {
      intro: 'A regra da potencia e a regra base mais importante: baixas o expoente como fator e reduzes o expoente em 1. Com ela derivas qualquer funcao potencial num instante:',
      constant_factor: 'Os fatores constantes mantem-se ao derivar, e em somas podes derivar termo a termo. Isso torna os termos compostos mais claros:',
      amir_tip: 'No meu codigo ML ha somas e fatores por todo o lado — a funcao de perda e uma enorme soma sobre todos os pontos de dados. Poder derivar cada termo individualmente e o que torna a retropropagacao possivel!',
      product_rule: 'Quando duas funcoes se multiplicam, NAO podes simplesmente derivar ambas separadamente. Em vez disso aplica-se a regra do produto — "primeira vezes derivada da segunda mais segunda vezes derivada da primeira":',
      quotient_rule: 'Para quocientes de funcoes existe a regra do quociente. Regra mnemonica: "NAD menos DAN sobre N ao quadrado" (N = denominador, D = numerador, A = derivada):',
      chain_rule: 'Em funcoes aninhadas — ou seja, uma funcao dentro de outra — precisas da regra da cadeia. Derivas "de fora para dentro" e multiplicas pela derivada interior:',
    },
    concepts: {
      power_rule: {
        title: 'Regra da potencia',
        desc: 'A regra fundamental: o expoente torna-se fator, o expoente desce 1. Tambem vale para expoentes negativos e fracionarios, p.ex. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Regra da soma e do fator',
        desc: 'Somas derivam-se termo a termo, fatores constantes mantem-se. Assim decompoes qualquer termo polinomial em partes simples.',
      },
      product_rule: {
        title: 'Regra do produto',
        desc: 'Para o produto de duas funcoes: derivada da primeira vezes a segunda mais a primeira vezes derivada da segunda. Imprescindivel quando duas expressoes variaveis se multiplicam.',
      },
      chain_rule: {
        title: 'Regra da cadeia',
        desc: 'Derivar a funcao exterior, deixar a interior, depois multiplicar pela derivada da interior. O coracao da retropropagacao em redes neuronais.',
      },
    },
    examples: {
      power_sum: {
        title: 'Derivar um polinomio com regra da potencia e da soma',
        context: 'Amir simplifica um termo da sua funcao de custo.',
        step1: 'Dado o polinomio — derivamos cada termo individualmente:',
        step2: 'Aplicar a regra da potencia a cada termo: expoente como fator, expoente menos 1. A constante $-7$ desaparece:',
        step3: 'Simplificar da a funcao derivada:',
        amir_comment: 'Exatamente assim se ve o gradiente das minhas features polinomiais. Cada termo contribui para a inclinacao — e o PyTorch faz isso automaticamente para milhares de parametros ao mesmo tempo.',
      },
      chain_rule: {
        title: 'Funcao aninhada com a regra da cadeia',
        context: 'Amir deriva uma funcao de ativacao que contem uma composicao.',
        step1: 'Dada uma funcao potencial aninhada:',
        step2: 'Decomposicao em funcao exterior $f(u) = u^3$ e funcao interior $g(x) = 2x^2 + 1$:',
        step3: 'Derivar a exterior (regra da potencia em $u^3$), deixar a interior, vezes derivada interior ($4x$):',
        step4: 'Simplificado — fator $4x$ colocado a frente:',
        amir_comment: 'A regra da cadeia E literalmente a retropropagacao! Cada camada na rede neuronal e uma funcao aninhada, e a regra da cadeia encadeia os gradientes de camada em camada.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Descenso de gradiente em Machine Learning',
        desc: 'Todo modelo ML minimiza uma funcao de perda derivando. O gradiente aponta a direcao de maior subida — vamos na direcao oposta para encontrar o minimo.',
      },
      marginal_cost: {
        title: 'Custos marginais na economia',
        desc: 'A derivada da funcao de custos $K(x)$ da os custos marginais: quanto custa produzir mais uma unidade? As empresas usam isto diariamente no calculo de precos.',
      },
      acceleration: {
        title: 'Aceleracao na fisica',
        desc: 'A velocidade e a derivada do caminho, a aceleracao e a derivada da velocidade. O sensor do teu telemovel mede exatamente isso: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'A derivada de uma constante e a propria constante',
        correct: 'A derivada de uma constante e sempre zero',
        why: 'Uma constante nao tem inclinacao — nao muda. Pensa em $f(x) = 5$: e uma linha horizontal, entao a inclinacao e 0 em toda a parte. Isso vale para qualquer numero sem $x$.',
        amir_warning: 'O termo de vies no meu modelo e uma constante — a sua derivada em relacao a $x$ e 0. Se te esqueceres, o teu gradiente tem um deslocamento incorreto e o treino diverge.',
      },
      chain_rule_forgotten: {
        wrong: 'Esquecer a derivada interior em funcoes aninhadas',
        correct: 'Sempre multiplicar pela derivada interior',
        why: 'Em $[(3x+1)^4]\'$ nao basta baixar o expoente. TENS de multiplicar pela derivada do termo interior $(3x+1)\' = 3$. Sem a derivada interior falta o fator 3.',
        amir_warning: 'Imagina que numa rede neuronal esqueces a derivada interior numa camada — o gradiente seria completamente incorreto e o modelo aprende disparates. A regra da cadeia nao e opcional!',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'O algoritmo de recomendacao do Amir da resultados — mas serao realmente otimos? "Tens de analisar a funcao de perda completamente", diz o seu professor. "Onde estao os minimos? Onde os pontos de inflexao?" Amir percebe: uma analise completa de curvas mostra-lhe se o seu modelo realmente encontrou o minimo global ou esta preso num minimo local.',
      challenge: 'Amir analisa a paisagem de perda do seu modelo: determinar completamente zeros, extremos, pontos de inflexao e monotonia de uma funcao.',
      outro: 'Amir agora pode caracterizar completamente qualquer funcao racional inteira: encontrar zeros, determinar maximos e minimos, calcular pontos de inflexao e ler o comportamento de monotonia. "Se desenhar assim a paisagem de perda, vejo imediatamente se o meu otimizador chegou ao vale correto", diz.',
    },
    objectives: {
      zeros_extrema: 'Determinar sistematicamente zeros e pontos extremos de uma funcao',
      inflection_points: 'Calcular pontos de inflexao e compreender o seu significado para o tracado da curva',
      monotonicity_symmetry: 'Analisar o comportamento de monotonia e a simetria de uma funcao',
    },
    explanation: {
      intro: 'Uma analise de curvas e a analise completa de uma funcao. Comecamos com os zeros — os pontos onde o grafico corta o eixo $x$:',
      extrema: 'Os pontos extremos (maximos e minimos) encontram-se onde a primeira derivada e zero. Mas cuidado: nem todo zero de $f\'$ e automaticamente um extremo! Precisas da segunda derivada para confirmar:',
      amir_tip: 'A paisagem de perda do meu modelo tem muitos minimos locais. Com a analise de curvas posso verificar se um ponto critico e realmente um minimo — ou apenas um ponto de sela onde o otimizador fica preso.',
      inflection: 'Os pontos de inflexao marcam a transicao entre curvatura para a esquerda e para a direita. Aqui muda o comportamento de curvatura — a segunda derivada muda de sinal:',
      monotonicity: 'O comportamento de monotonia diz-te onde a funcao cresce e onde decresce. Le-se diretamente do sinal da primeira derivada:',
    },
    concepts: {
      extrema: {
        title: 'Pontos extremos (maximos/minimos)',
        desc: 'Condicao necessaria: $f\'(x_0) = 0$. Suficiente: $f\'\'(x_0) < 0$ da maximo, $f\'\'(x_0) > 0$ da minimo. Ambas as condicoes juntas tornam-no seguro.',
      },
      inflection: {
        title: 'Pontos de inflexao',
        desc: 'Onde a curvatura muda: $f\'\'(x_0) = 0$ E $f\'\'\'(x_0) \\neq 0$. Em distribuicoes normais os pontos de inflexao marcam o desvio padrao.',
      },
      symmetry: {
        title: 'Simetria',
        desc: 'Simetria axial em relacao ao eixo $y$ quando $f(-x) = f(x)$ (so expoentes pares). Simetria pontual em relacao a origem quando $f(-x) = -f(x)$ (so expoentes impares). Poupa trabalho de calculo!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Analise completa de curvas',
        context: 'Amir investiga uma funcao cubica — semelhante a funcoes de perda com varios extremos.',
        step1: 'Dada a funcao — analisamo-la completamente:',
        step2: 'Formar a primeira derivada e determinar zeros (condicao necessaria para extremos):',
        step3: 'Avaliar a segunda derivada nos pontos criticos (condicao suficiente): valor negativo = maximo, valor positivo = minimo:',
        step4: 'Determinar o ponto de inflexao via $f\'\' = 0$ e confirmar com a terceira derivada:',
        amir_comment: 'Exatamente assim analiso a paisagem de perda: primeiro encontrar pontos criticos, depois verificar se e minimo ou ponto de sela. Em funcoes de alta dimensao o meu otimizador faz isto numericamente — mas o principio e identico.',
      },
      graph_properties: {
        title: 'Usar simetria e extremos',
        context: 'Uma funcao simetrica — metade do trabalho elimina-se gracas a simetria.',
        step1: 'Dada uma funcao de grau 4 — verificamos primeiro a simetria:',
        step2: 'Substituir $-x$: todos os expoentes pares, entao $f(-x) = f(x)$ — simetria axial! Os extremos aparecem simetricamente:',
        step3: 'Igualar a primeira derivada a zero — por simetria basta encontrar as solucoes positivas:',
        step4: 'Calcular valores de funcao — gracas a simetria vale $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Simetria em dados vale ouro: se sei que a minha funcao de perda e simetrica, so preciso de pesquisar metade do espaco de parametros. Isso reduz o tempo de treino para metade!',
      },
    },
    realworld: {
      data_distribution: { title: 'Analisar distribuicoes de dados', desc: 'A distribuicao normal tem pontos de inflexao em $\\mu \\pm \\sigma$. A analise de curvas diz-te onde se concentram mais pontos de dados e onde comeca a dispersao.' },
      profit_analysis: { title: 'Maximizacao de lucros', desc: 'A funcao de lucro $G(x)$ tem um maximo — a quantidade de producao otima. A analise de curvas mostra exatamente a que quantidade o lucro e maximo.' },
      population_growth: { title: 'Crescimento demografico', desc: 'O ponto de inflexao de uma curva de crescimento marca o momento a partir do qual o crescimento diminui. Os epidemiologistas usam exatamente esta analise para curvas de infecao.' },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Todo zero de $f\'$ e automaticamente um ponto extremo',
        correct: 'Zero de $f\'$ MAIS mudanca de sinal ou $f\'\' \\neq 0$ verificar',
        why: 'Em $f(x) = x^3$ temos $f\'(0) = 0$, mas nao e um extremo — e um ponto de sela! TENS de verificar a condicao suficiente ($f\'\' \\neq 0$ ou mudanca de sinal de $f\'$).',
        amir_warning: 'Em dimensoes superiores estes pontos chamam-se "Saddle Points" — o otimizador fica preso e pensa que encontrou um minimo. Sempre verificar a segunda derivada!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ basta para um ponto de inflexao',
        correct: '$f\'\'(x_0) = 0$ E $f\'\'\'(x_0) \\neq 0$ juntos confirmam o ponto de inflexao',
        why: 'Em $f(x) = x^4$ temos $f\'\'(0) = 0$, mas nao e ponto de inflexao — a curvatura nao muda! A terceira derivada deve ser diferente de zero para garantir a mudanca de curvatura.',
        amir_warning: 'Mesma armadilha que com os extremos: a condicao necessaria sozinha nunca basta. Sempre verificar a condicao suficiente — senao confias num resultado falso.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'O DataPulse tem de funcionar no telemovel — mas o modelo do Amir precisa de demasiada memoria. "Tens de otimizar a arquitetura da rede", diz a sua colega Sara. "Maxima precisao com minimo consumo de memoria." Amir reconhece: e um problema classico de otimizacao — otimizar uma grandeza enquanto outra esta restringida.',
      challenge: 'Amir quer encontrar a melhor arquitetura de modelo: maxima qualidade de previsao sob a restricao de recursos computacionais limitados.',
      outro: 'Amir compreendeu o principio: montar a funcao objetivo, substituir a restricao, reduzir a uma variavel, derivar, igualar a zero, verificar. "Quer sejam dimensoes de latas ou parametros de modelo — o esquema e sempre o mesmo", constata. O seu modelo agora cabe em 50 MB.',
    },
    objectives: {
      setup_equations: 'Montar a funcao objetivo e a restricao a partir de um contexto',
      optimize_constraints: 'Gerar uma funcao de uma variavel substituindo a restricao e otimiza-la',
      verify_extremum: 'Verificar com a segunda derivada se ha maximo ou minimo, e considerar valores fronteira',
    },
    explanation: {
      intro: 'Em problemas de otimizacao trata-se sempre do mesmo: uma grandeza deve ser o maior ou menor possivel (funcao objetivo), enquanto vigora uma restricao (condicao lateral):',
      strategy: 'A estrategia e sempre a mesma: (1) Montar a funcao objetivo — o que se quer otimizar? (2) Encontrar a restricao — que limitacao existe? (3) Resolver a restricao para uma variavel e substituir na funcao objetivo. (4) Derivar, igualar a zero, verificar.',
      amir_tip: 'O ajuste de hiperparametros e exatamente um problema de otimizacao: quero minimizar o erro de validacao (funcao objetivo), mas a minha memoria GPU e limitada (restricao). O esquema da aula de matematica funciona 1:1!',
      substitution: 'Apos substituir a restricao, a funcao objetivo depende apenas de uma variavel. Agora deriva-se normalmente e verifica-se o ponto critico:',
      domain_check: 'Nao esquecas o dominio de definicao! Em problemas reais ha frequentemente limites (p.ex. $r > 0$ para um raio). Compara o valor da funcao no ponto critico com os valores fronteira — as vezes o otimo esta na fronteira.',
    },
    concepts: {
      target_function: { title: 'Funcao objetivo', desc: 'A grandeza que se quer otimizar — maximo lucro, minima superficie, melhor precisao. Inicialmente costuma depender de duas variaveis.' },
      constraint: { title: 'Restricao', desc: 'A limitacao que se aplica — volume fixo, orcamento limitado, parametros limitados. Permite eliminar uma variavel e reduzir a funcao objetivo a uma so variavel.' },
      boundary_check: { title: 'Verificacao de valores fronteira', desc: 'O otimo tambem pode estar na fronteira do dominio. Sempre comparar $f(x_{opt})$ com os valores da funcao nas fronteiras $f(a)$ e $f(b)$.' },
    },
    examples: {
      can_volume: {
        title: 'Lata com minimo consumo de material',
        context: 'Uma lata cilindrica deve conter 330 ml — com o menor consumo possivel de folha.',
        step1: 'Restricao: o volume e fixo. Resolver para $h$ para eliminar uma variavel:',
        step2: 'Montar a funcao objetivo (superficie) e substituir $h$ — agora tudo depende so de $r$:',
        step3: 'Derivar, igualar a zero e resolver para $r$ — esse e o raio otimo:',
        step4: 'Verificar a segunda derivada: positiva significa minimo — realmente encontramos a lata mais economica:',
        amir_comment: 'E exatamente como a compressao de modelos: precisao fixa (restricao), minimo numero de parametros (funcao objetivo). Substituo $r$ por "largura de camada" e $h$ por "profundidade" — mesmo principio!',
      },
      profit_max: {
        title: 'Lucro maximo',
        context: 'Uma startup quer encontrar o preco otimo para o seu modelo de subscricao.',
        step1: 'Montar a funcao de lucro: receitas menos custos — aqui ja numa variavel:',
        step2: 'Igualar a derivada a zero — a quantidade otima:',
        step3: 'A segunda derivada e negativa — entao e um maximo. O lucro aqui e realmente maximo:',
        step4: 'Calcular o lucro maximo substituindo:',
        amir_comment: 'A otimizacao de precos e um classico em Data Science. No DataPulse poderiamos calcular o nivel de subscricao otimo exatamente assim — maximizar o lucro sob a condicao de que os utilizadores nao se vao embora.',
      },
    },
    realworld: {
      hyperparameter: { title: 'Otimizacao de hiperparametros', desc: 'A taxa de aprendizagem $\\alpha$ no descenso de gradiente deve ser escolhida de forma otima: demasiado grande = divergencia, demasiado pequena = eternamente lento. O $\\alpha$ otimo minimiza o erro de validacao.' },
      packaging: { title: 'Design de embalagens', desc: 'Minimo consumo de material com volume fixo — exatamente isso resolvem os engenheiros diariamente. Cada lata de bebida, cada caixa e o resultado de um problema de otimizacao.' },
      solar_panel: { title: 'Orientacao de paineis solares', desc: 'O angulo de inclinacao de um painel solar determina a producao de energia. Encontrar o angulo otimo e um problema de otimizacao com a posicao do sol como restricao.' },
    },
    mistakes: {
      no_constraint: { wrong: 'Derivar diretamente a funcao objetivo com duas variaveis', correct: 'Primeiro substituir a restricao, depois derivar', why: 'Com duas variaveis nao podes simplesmente derivar em relacao a $x$ — $y$ muda com ela! TENS de usar a restricao para exprimir $y$ em funcao de $x$. So entao tudo depende de uma variavel.', amir_warning: 'E como um modelo ML com demasiados parametros livres: sem restricoes nao ha otimo razoavel. A restricao reduz os graus de liberdade — exatamente como a regularizacao.' },
      no_boundary: { wrong: 'Assumir o ponto critico como otimo global', correct: 'Comparar o ponto critico com os valores fronteira', why: 'Num intervalo limitado $[a, b]$ o otimo pode estar na fronteira! $f\'(x_0) = 0$ so da candidatos locais. Tens de comparar $f(x_0)$, $f(a)$ e $f(b)$.', amir_warning: 'Na pratica cada parametro tem um intervalo permitido. A minha taxa de aprendizagem nao pode ser negativa, o tamanho do lote nao pode exceder a memoria GPU. Verificar valores fronteira e obrigatorio!' },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'O DataPulse funciona — mas o Amir precisa de uma nova metrica: quantas cancoes ouvem os utilizadores no total por semana? Tem a taxa de escuta $r(t)$ como funcao do tempo, mas precisa da quantidade total. "Taxa vezes tempo da quantidade — mas a taxa muda constantemente", reflete Amir. O seu amigo Kai sorri: "Parece uma integral."',
      challenge: 'Amir quer calcular o numero total de cancoes ouvidas a partir da taxa de escuta $r(t)$ dependente do tempo — isso leva-o ao calculo integral.',
      outro: 'Amir agora pode formar primitivas, calcular integrais definidos e determinar areas entre curvas. "A integracao e a operacao inversa da derivacao — e na pratica assim somo dados continuos", resume. A sua metrica de escuta semanal esta pronta.',
    },
    objectives: {
      antiderivative: 'Formar primitivas com a regra da potencia inversa e compreender a constante de integracao $C$',
      definite_integral: 'Calcular integrais definidos com o teorema fundamental: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Compreender o teorema fundamental do calculo e aplica-lo em calculos de areas',
    },
    explanation: {
      intro: 'A integracao e a operacao inversa da derivacao: se $F\'(x) = f(x)$, entao $F(x)$ e uma primitiva de $f(x)$. A primitiva geral contem sempre a constante $C$:',
      power_rule_integral: 'A regra da potencia ao contrario: aumentar o expoente em 1 e dividir pelo novo expoente. Funciona para todo $n \\neq -1$:',
      amir_tip: 'A integracao e como a agregacao em bases de dados: a derivada da a taxa de variacao instantanea, a integral soma tudo. Se conhego os downloads por hora, a integral da-me os downloads totais num periodo.',
      definite_integral: 'O integral definido calcula o "efeito total" entre dois limites. O teorema fundamental torna-o simples: primitiva no limite superior menos primitiva no limite inferior:',
      area_interpretation: 'Geometricamente, o integral definido e a area entre a curva e o eixo $x$. Atencao: areas abaixo do eixo $x$ contam como negativas! Para a area real precisas do valor absoluto:',
    },
    concepts: {
      antiderivative: { title: 'Primitiva', desc: 'Uma funcao $F(x)$ com $F\'(x) = f(x)$. A constante $+C$ e importante porque diferentes primitivas so diferem numa constante.' },
      definite_integral: { title: 'Integral definido', desc: 'Calcula a area com sinal entre $f(x)$ e o eixo $x$ de $a$ a $b$. Substituir limite superior menos substituir limite inferior.' },
      fundamental_theorem: { title: 'Teorema fundamental do calculo', desc: 'Liga derivada e integral: derivar e integrar sao operacoes inversas. O integral definido pode ser calculado atraves da primitiva.' },
    },
    examples: {
      area_calculation: {
        title: 'Area entre parabola e eixo $x$',
        context: 'Amir visualiza a distribuicao do tempo de escuta como area sob uma curva.',
        step1: 'Determinar a funcao e os zeros — esses sao os nossos limites de integracao:',
        step2: 'Formar a primitiva com a regra da potencia inversa:',
        step3: 'Calcular o integral definido: substituir limite superior menos substituir limite inferior:',
        step4: 'O integral e negativo porque a parabola esta abaixo do eixo $x$. Para a area tomar o valor absoluto:',
        amir_comment: 'Integrais negativos fazem todo o sentido na analise de dados: se $f(x)$ e o desvio da media, um integral negativo mostra que os valores estiveram globalmente abaixo da media.',
      },
      distance_from_velocity: {
        title: 'Calcular distancia a partir da velocidade',
        context: 'Quanto percorre um carro autonomo em 4 segundos?',
        step1: 'Dada a funcao de velocidade:',
        step2: 'A distancia total e o integral da velocidade em relacao ao tempo:',
        step3: 'Formar a primitiva — integrar cada termo individualmente:',
        step4: 'Substituir limites e calcular a diferenca:',
        amir_comment: 'Os dados de sensores chegam como taxas — velocidade, debito de dados, pedidos por segundo. O integral converte isso em quantidade total. O meu painel mostra exatamente isso: $\\int_0^T r(t)\\,dt$ = streams totais.',
      },
    },
    realworld: {
      data_aggregation: { title: 'Agregacao de dados no tempo', desc: 'Se a taxa de dados $r(t)$ e conhecida, o integral fornece a quantidade total num periodo. Assim calculam os servicos de streaming os minutos de escuta mensais a partir de dados por segundo.' },
      energy_consumption: { title: 'Consumo de energia', desc: 'Potencia $P(t)$ em watts vezes tempo da energia em joules — mas so com potencia constante. Com potencia variavel precisas do integral: $E = \\int P(t)\\,dt$.' },
      probability: { title: 'Probabilidades', desc: 'A probabilidade de que uma variavel aleatoria esteja entre $a$ e $b$ e a area sob a funcao de densidade — ou seja, um integral definido. A base de toda a estatistica.' },
    },
    mistakes: {
      constant_forgotten: { wrong: 'Esquecer a constante de integracao $C$ em integrais indefinidos', correct: 'Sempre acrescentar $+ C$ no integral indefinido', why: 'Se $F\'(x) = 2x$, entao tanto $x^2$ como $x^2 + 7$ sao primitivas. O $+C$ representa todas as primitivas possiveis. No integral definido $C$ cancela-se — ai podes omiti-lo.', amir_warning: 'Na pratica $C$ e a condicao inicial: quantas cancoes ja tinha o utilizador ouvido antes de comecarmos a medir? Sem $C$ falta o valor inicial, e o teu calculo comeca em zero em vez do valor real.' },
      negative_area: { wrong: 'Interpretar o integral diretamente como area, mesmo quando negativo', correct: 'Para areas reais tomar o valor absoluto dos valores integrais', why: 'O integral $\\int_a^b f(x)\\,dx$ pode ser negativo quando $f(x) < 0$. Isso e correto como area com sinal. Se precisas da area geometrica, tens de integrar $|f(x)|$ ou calcular as areas parciais separadamente.', amir_warning: 'Imagina que calculas o tempo total de escuta e obtens um resultado negativo — isso seria obviamente incorreto. Em problemas de area sempre verificar se a funcao muda de sinal, e calcular subintervalos separadamente!' },
    },
  },
};
