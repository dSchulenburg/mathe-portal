export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'O modelo ML do Amir para o DataPulse oferece recomendações de canções aceitáveis — mas o treino demora uma eternidade. "O descenso de gradiente é basicamente o mesmo que derivadas", explica-lhe a professora de matemática. "Se entenderes como funcionam as regras de derivação, também vais entender por que o teu modelo aprende." Amir decide trabalhar as regras sistematicamente.',
      challenge: 'Amir quer entender como o seu modelo ML deriva internamente a função de perda — para isso precisa da regra da potência, da regra da soma, da regra do produto e da regra da cadeia.',
      outro: 'Amir agora tem uma base sólida: regra da potência para termos simples, regra da soma e do fator para expressões compostas, regra do produto para multiplicações e a regra da cadeia para funções aninhadas. "Agora finalmente entendo o que o PyTorch faz nos bastidores com o Autograd", diz satisfeito.',
    },
    objectives: {
      power_rule: 'Aplicar com segurança a regra da potência: derivar $f(x) = x^n$',
      constant_sum_rule: 'Dominar as regras do fator constante e da soma: derivar termos individualmente e manter fatores',
      product_quotient_rule: 'Aplicar corretamente as regras do produto e do quociente',
      chain_rule: 'Utilizar com segurança a regra da cadeia em funções aninhadas',
    },
    explanation: {
      intro: 'A regra da potência é a regra base mais importante: baixas o expoente como fator e reduzes o expoente em 1. Com ela derivas qualquer função potência num instante:',
      constant_factor: 'Os fatores constantes mantêm-se ao derivar, e em somas podes derivar termo a termo. Isso torna os termos compostos mais claros:',
      amir_tip: 'No meu código ML há somas e fatores por todo o lado — a função de perda é uma enorme soma sobre todos os pontos de dados. Poder derivar cada termo individualmente é o que torna a retropropagação possível!',
      product_rule: 'Quando duas funções se multiplicam, NÃO podes simplesmente derivar ambas separadamente. Em vez disso aplica-se a regra do produto — "primeira vezes derivada da segunda mais segunda vezes derivada da primeira":',
      quotient_rule: 'Para quocientes de funções existe a regra do quociente. Regra mnemónica: "NAD menos DAN sobre N ao quadrado" (N = denominador, D = numerador, A = derivada). Ao contrário da regra do produto, aqui a ordem importa — o menos torna a fórmula assimétrica:',
      chain_rule: 'Em funções aninhadas — ou seja, uma função dentro de outra — precisas da regra da cadeia. Derivas "de fora para dentro" e multiplicas pela derivada interior:',
    },
    concepts: {
      power_rule: {
        title: 'Regra da potência',
        desc: 'A regra fundamental: o expoente torna-se fator, o expoente desce 1. Também vale para expoentes negativos e fracionários, p.ex. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Regra da soma e do fator',
        desc: 'Somas derivam-se termo a termo, fatores constantes mantêm-se. Assim decompões qualquer termo polinomial em partes simples.',
      },
      product_rule: {
        title: 'Regra do produto',
        desc: 'Para o produto de duas funções: derivada da primeira vezes a segunda mais a primeira vezes derivada da segunda. Imprescindível quando duas expressões variáveis se multiplicam.',
      },
      quotient_rule: {
        title: 'Regra do quociente',
        desc: 'Para frações: denominador vezes derivada do numerador, menos numerador vezes derivada do denominador, a dividir pelo denominador ao quadrado. O menos é a diferença em relação à regra do produto — e a fonte de erro mais frequente. Necessária sempre que algo aparece "por" outra coisa: custo unitário, velocidade, concentração.',
      },
      chain_rule: {
        title: 'Regra da cadeia',
        desc: 'Derivar a função exterior, deixar a interior, depois multiplicar pela derivada da interior. O coração da retropropagação em redes neuronais.',
      },
    },
    examples: {
      power_sum: {
        title: 'Derivar um polinómio com regra da potência e da soma',
        context: 'Amir simplifica um termo da sua função de custo.',
        step1: 'Dado o polinómio — derivamos cada termo individualmente:',
        step2: 'Aplicar a regra da potência a cada termo: expoente como fator, expoente menos 1. A constante $-7$ desaparece:',
        step3: 'Simplificar dá a função derivada:',
        amir_comment: 'Exatamente assim se vê o gradiente das minhas features polinomiais. Cada termo contribui para a inclinação — e o PyTorch faz isso automaticamente para milhares de parâmetros ao mesmo tempo.',
      },
      quotient_rule: {
        title: 'Derivar uma função racional com a regra do quociente',
        context: 'Amir mede quantos pedidos o seu servidor consegue processar por segundo decorrido — uma grandeza por outra, ou seja, uma fração.',
        step1: 'Primeiro identificas o numerador e o denominador. Quem salta este passo troca-os mais tarde:',
        step2: 'Derivar ambos separadamente — esta é a parte fácil:',
        step3: 'Agora substituir: denominador vezes derivada do numerador, menos numerador vezes derivada do denominador, tudo a dividir por $v^2$:',
        step4: 'Desenvolver e simplificar. O denominador fica como quadrado, não se desenvolve:',
        amir_comment: 'Importante: o denominador fica $(x-1)^2$. Antes eu desenvolvia-o sempre, todo aplicado, e assim impedia-me de simplificar. No estudo da função queres conseguir ver os zeros do denominador — como fator, não como polinómio.',
      },
      chain_rule: {
        title: 'Função aninhada com a regra da cadeia',
        context: 'Amir deriva uma função de ativação que contém uma composição.',
        step1: 'Dada uma função potência aninhada:',
        step2: 'Decomposição em função exterior $f(u) = u^3$ e função interior $g(x) = 2x^2 + 1$:',
        step3: 'Derivar a exterior (regra da potência em $u^3$), deixar a interior, vezes derivada interior ($4x$):',
        step4: 'Simplificado — fator $4x$ colocado à frente:',
        amir_comment: 'A regra da cadeia É literalmente a retropropagação! Cada camada na rede neuronal é uma função aninhada, e a regra da cadeia encadeia os gradientes de camada em camada.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Descenso de gradiente em Machine Learning',
        desc: 'Todo modelo ML minimiza uma função de perda derivando. O gradiente aponta a direção de maior subida — vamos na direção oposta para encontrar o mínimo.',
      },
      marginal_cost: {
        title: 'Custos marginais na economia',
        desc: 'A derivada da função de custos $K(x)$ dá os custos marginais: quanto custa produzir mais uma unidade? As empresas usam isto diariamente no cálculo de preços.',
      },
      acceleration: {
        title: 'Aceleração na física',
        desc: 'A velocidade é a derivada do caminho, a aceleração é a derivada da velocidade. O sensor do teu telemóvel mede exatamente isso: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'A derivada de uma constante é a própria constante',
        correct: 'A derivada de uma constante é sempre zero',
        why: 'Uma constante não tem inclinação — não muda. Pensa em $f(x) = 5$: é uma linha horizontal, então a inclinação é 0 em toda a parte. Isso vale para qualquer número sem $x$.',
        amir_warning: 'O termo de viés no meu modelo é uma constante — a sua derivada em relação a $x$ é 0. Se te esqueceres, o teu gradiente tem um deslocamento incorreto e o treino diverge.',
      },
      chain_rule_forgotten: {
        wrong: 'Esquecer a derivada interior em funções aninhadas',
        correct: 'Sempre multiplicar pela derivada interior',
        why: 'Em $[(3x+1)^4]\'$ não basta baixar o expoente. TENS de multiplicar pela derivada do termo interior $(3x+1)\' = 3$. Sem a derivada interior falta o fator 3.',
        amir_warning: 'Imagina que numa rede neuronal esqueces a derivada interior numa camada — o gradiente seria completamente incorreto e o modelo aprende disparates. A regra da cadeia não é opcional!',
      },
      quotient_sign: {
        wrong: 'Numerador da regra do quociente trocado: $u \\cdot v\' - u\' \\cdot v$',
        correct: 'Primeiro denominador vezes derivada do numerador: $u\' \\cdot v - u \\cdot v\'$',
        why: 'A regra do produto é simétrica — podes trocar as duas parcelas e o resultado fica igual. Na regra do quociente há um menos, e por isso a ordem é fixa. Se a trocares, obténs exatamente o simétrico da derivada correta. O traiçoeiro: o termo parece plausível, continuas a calcular corretamente e, mesmo assim, no fim todos os sinais estão errados. Um máximo transforma-se num mínimo.',
        amir_warning: 'Faz a prova num ponto simples. Em $f(x) = \\frac{x}{x+1}$ a função é crescente em toda a parte, portanto $f\'$ tem de ser positiva. Se te sair algo negativo, trocaste o numerador — isso custa-te dez segundos e salva o exercício inteiro.',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'O algoritmo de recomendação do Amir dá resultados — mas serão realmente ótimos? "Tens de analisar a função de perda completamente", diz o seu professor. "Onde estão os mínimos? Onde os pontos de inflexão?" Amir percebe: uma análise completa de curvas mostra-lhe se o seu modelo realmente encontrou o mínimo global ou está preso num mínimo local.',
      challenge: 'Amir analisa a paisagem de perda do seu modelo: determinar completamente zeros, extremos, pontos de inflexão e monotonia de uma função.',
      outro: 'Amir agora pode caracterizar completamente qualquer função racional inteira: encontrar zeros, determinar máximos e mínimos, calcular pontos de inflexão e ler o comportamento de monotonia. "Se desenhar assim a paisagem de perda, vejo imediatamente se o meu otimizador chegou ao vale correto", diz.',
    },
    objectives: {
      zeros_extrema: 'Determinar sistematicamente zeros e pontos extremos de uma função',
      inflection_points: 'Calcular pontos de inflexão e compreender o seu significado para o traçado da curva',
      monotonicity_symmetry: 'Analisar o comportamento de monotonia e a simetria de uma função',
    },
    explanation: {
      intro: 'Uma análise de curvas é a análise completa de uma função. Começamos com os zeros — os pontos onde o gráfico corta o eixo $x$:',
      extrema: 'Os pontos extremos (máximos e mínimos) encontram-se onde a primeira derivada é zero. Mas cuidado: nem todo zero de $f\'$ é automaticamente um extremo! Precisas da segunda derivada para confirmar:',
      amir_tip: 'A paisagem de perda do meu modelo tem muitos mínimos locais. Com a análise de curvas posso verificar se um ponto crítico é realmente um mínimo — ou apenas um ponto de sela onde o otimizador fica preso.',
      inflection: 'Os pontos de inflexão marcam a transição entre curvatura para a esquerda e para a direita. Aqui muda o comportamento de curvatura — a segunda derivada muda de sinal:',
      monotonicity: 'O comportamento de monotonia diz-te onde a função cresce e onde decresce. Lê-se diretamente do sinal da primeira derivada:',
    },
    concepts: {
      extrema: {
        title: 'Pontos extremos (máximos/mínimos)',
        desc: 'Condição necessária: $f\'(x_0) = 0$. Suficiente: $f\'\'(x_0) < 0$ dá máximo, $f\'\'(x_0) > 0$ dá mínimo. Ambas as condições juntas tornam-no seguro.',
      },
      inflection: {
        title: 'Pontos de inflexão',
        desc: 'Onde a curvatura muda: $f\'\'(x_0) = 0$ E $f\'\'\'(x_0) \\neq 0$. Em distribuições normais os pontos de inflexão marcam o desvio padrão.',
      },
      symmetry: {
        title: 'Simetria',
        desc: 'Simetria axial em relação ao eixo $y$ quando $f(-x) = f(x)$ (só expoentes pares). Simetria pontual em relação à origem quando $f(-x) = -f(x)$ (só expoentes ímpares). Poupa trabalho de cálculo!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Análise completa de curvas',
        context: 'Amir investiga uma função cúbica — semelhante a funções de perda com vários extremos.',
        step1: 'Dada a função — analisamo-la completamente:',
        step2: 'Formar a primeira derivada e determinar zeros (condição necessária para extremos):',
        step3: 'Avaliar a segunda derivada nos pontos críticos (condição suficiente): valor negativo = máximo, valor positivo = mínimo:',
        step4: 'Determinar o ponto de inflexão via $f\'\' = 0$ e confirmar com a terceira derivada:',
        amir_comment: 'Exatamente assim analiso a paisagem de perda: primeiro encontrar pontos críticos, depois verificar se é mínimo ou ponto de sela. Em funções de alta dimensão o meu otimizador faz isto numericamente — mas o princípio é idêntico.',
      },
      graph_properties: {
        title: 'Usar simetria e extremos',
        context: 'Uma função simétrica — metade do trabalho elimina-se graças à simetria.',
        step1: 'Dada uma função de grau 4 — verificamos primeiro a simetria:',
        step2: 'Substituir $-x$: todos os expoentes pares, então $f(-x) = f(x)$ — simetria axial! Os extremos aparecem simetricamente:',
        step3: 'Igualar a primeira derivada a zero — por simetria basta encontrar as soluções positivas:',
        step4: 'Calcular valores de função — graças à simetria vale $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Simetria em dados vale ouro: se sei que a minha função de perda é simétrica, só preciso de pesquisar metade do espaço de parâmetros. Isso reduz o tempo de treino para metade!',
      },
    },
    realworld: {
      data_distribution: { title: 'Analisar distribuições de dados', desc: 'A distribuição normal tem pontos de inflexão em $\\mu \\pm \\sigma$. A análise de curvas diz-te onde se concentram mais pontos de dados e onde começa a dispersão.' },
      profit_analysis: { title: 'Maximização de lucros', desc: 'A função de lucro $G(x)$ tem um máximo — a quantidade de produção ótima. A análise de curvas mostra exatamente a que quantidade o lucro é máximo.' },
      population_growth: { title: 'Crescimento demográfico', desc: 'O ponto de inflexão de uma curva de crescimento marca o momento a partir do qual o crescimento diminui. Os epidemiologistas usam exatamente esta análise para curvas de infeção.' },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Todo zero de $f\'$ é automaticamente um ponto extremo',
        correct: 'Zero de $f\'$ MAIS mudança de sinal ou $f\'\' \\neq 0$ verificar',
        why: 'Em $f(x) = x^3$ temos $f\'(0) = 0$, mas não é um extremo — é um ponto de sela! TENS de verificar a condição suficiente ($f\'\' \\neq 0$ ou mudança de sinal de $f\'$).',
        amir_warning: 'Em dimensões superiores estes pontos chamam-se "Saddle Points" — o otimizador fica preso e pensa que encontrou um mínimo. Sempre verificar a segunda derivada!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ basta para um ponto de inflexão',
        correct: '$f\'\'(x_0) = 0$ E $f\'\'\'(x_0) \\neq 0$ juntos confirmam o ponto de inflexão',
        why: 'Em $f(x) = x^4$ temos $f\'\'(0) = 0$, mas não é ponto de inflexão — a curvatura não muda! A terceira derivada deve ser diferente de zero para garantir a mudança de curvatura.',
        amir_warning: 'Mesma armadilha que com os extremos: a condição necessária sozinha nunca basta. Sempre verificar a condição suficiente — senão confias num resultado falso.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'O DataPulse tem de funcionar no telemóvel — mas o modelo do Amir precisa de demasiada memória. "Tens de otimizar a arquitetura da rede", diz a sua colega Sara. "Máxima precisão com mínimo consumo de memória." Amir reconhece: é um problema clássico de otimização — otimizar uma grandeza enquanto outra está restringida.',
      challenge: 'Amir quer encontrar a melhor arquitetura de modelo: máxima qualidade de previsão sob a restrição de recursos computacionais limitados.',
      outro: 'Amir compreendeu o princípio: montar a função objetivo, substituir a restrição, reduzir a uma variável, derivar, igualar a zero, verificar. "Quer sejam dimensões de latas ou parâmetros de modelo — o esquema é sempre o mesmo", constata. O seu modelo agora cabe em 50 MB.',
    },
    objectives: {
      setup_equations: 'Montar a função objetivo e a restrição a partir de um contexto',
      optimize_constraints: 'Gerar uma função de uma variável substituindo a restrição e otimizá-la',
      verify_extremum: 'Verificar com a segunda derivada se há máximo ou mínimo, e considerar valores fronteira',
    },
    explanation: {
      intro: 'Em problemas de otimização trata-se sempre do mesmo: uma grandeza deve ser o maior ou menor possível (função objetivo), enquanto vigora uma restrição (condição lateral):',
      strategy: 'A estratégia é sempre a mesma: (1) Montar a função objetivo — o que se quer otimizar? (2) Encontrar a restrição — que limitação existe? (3) Resolver a restrição para uma variável e substituir na função objetivo. (4) Derivar, igualar a zero, verificar.',
      amir_tip: 'O ajuste de hiperparâmetros é exatamente um problema de otimização: quero minimizar o erro de validação (função objetivo), mas a minha memória GPU é limitada (restrição). O esquema da aula de matemática funciona 1:1!',
      substitution: 'Após substituir a restrição, a função objetivo depende apenas de uma variável. Agora deriva-se normalmente e verifica-se o ponto crítico:',
      domain_check: 'Não esqueças o domínio de definição! Em problemas reais há frequentemente limites (p.ex. $r > 0$ para um raio). Compara o valor da função no ponto crítico com os valores fronteira — às vezes o ótimo está na fronteira.',
    },
    concepts: {
      target_function: { title: 'Função objetivo', desc: 'A grandeza que se quer otimizar — máximo lucro, mínima superfície, melhor precisão. Inicialmente costuma depender de duas variáveis.' },
      constraint: { title: 'Restrição', desc: 'A limitação que se aplica — volume fixo, orçamento limitado, parâmetros limitados. Permite eliminar uma variável e reduzir a função objetivo a uma só variável.' },
      boundary_check: { title: 'Verificação de valores fronteira', desc: 'O ótimo também pode estar na fronteira do domínio. Sempre comparar $f(x_{opt})$ com os valores da função nas fronteiras $f(a)$ e $f(b)$.' },
    },
    examples: {
      can_volume: {
        title: 'Lata com mínimo consumo de material',
        context: 'Uma lata cilíndrica deve conter 330 ml — com o menor consumo possível de folha.',
        step1: 'Restrição: o volume é fixo. Resolver para $h$ para eliminar uma variável:',
        step2: 'Montar a função objetivo (superfície) e substituir $h$ — agora tudo depende só de $r$:',
        step3: 'Derivar, igualar a zero e resolver para $r$ — esse é o raio ótimo:',
        step4: 'Verificar a segunda derivada: positiva significa mínimo — realmente encontramos a lata mais económica:',
        amir_comment: 'É exatamente como a compressão de modelos: precisão fixa (restrição), mínimo número de parâmetros (função objetivo). Substituo $r$ por "largura de camada" e $h$ por "profundidade" — mesmo princípio!',
      },
      profit_max: {
        title: 'Lucro máximo',
        context: 'Uma startup quer encontrar o preço ótimo para o seu modelo de subscrição.',
        step1: 'Montar a função de lucro: receitas menos custos — aqui já numa variável:',
        step2: 'Igualar a derivada a zero — a quantidade ótima:',
        step3: 'A segunda derivada é negativa — então é um máximo. O lucro aqui é realmente máximo:',
        step4: 'Calcular o lucro máximo substituindo:',
        amir_comment: 'A otimização de preços é um clássico em Data Science. No DataPulse poderíamos calcular o nível de subscrição ótimo exatamente assim — maximizar o lucro sob a condição de que os utilizadores não se vão embora.',
      },
    },
    realworld: {
      hyperparameter: { title: 'Otimização de hiperparâmetros', desc: 'A taxa de aprendizagem $\\alpha$ no descenso de gradiente deve ser escolhida de forma ótima: demasiado grande = divergência, demasiado pequena = eternamente lento. O $\\alpha$ ótimo minimiza o erro de validação.' },
      packaging: { title: 'Design de embalagens', desc: 'Mínimo consumo de material com volume fixo — exatamente isso resolvem os engenheiros diariamente. Cada lata de bebida, cada caixa é o resultado de um problema de otimização.' },
      solar_panel: { title: 'Orientação de painéis solares', desc: 'O ângulo de inclinação de um painel solar determina a produção de energia. Encontrar o ângulo ótimo é um problema de otimização com a posição do sol como restrição.' },
    },
    mistakes: {
      no_constraint: { wrong: 'Derivar diretamente a função objetivo com duas variáveis', correct: 'Primeiro substituir a restrição, depois derivar', why: 'Com duas variáveis não podes simplesmente derivar em relação a $x$ — $y$ muda com ela! TENS de usar a restrição para exprimir $y$ em função de $x$. Só então tudo depende de uma variável.', amir_warning: 'É como um modelo ML com demasiados parâmetros livres: sem restrições não há ótimo razoável. A restrição reduz os graus de liberdade — exatamente como a regularização.' },
      no_boundary: { wrong: 'Assumir o ponto crítico como ótimo global', correct: 'Comparar o ponto crítico com os valores fronteira', why: 'Num intervalo limitado $[a, b]$ o ótimo pode estar na fronteira! $f\'(x_0) = 0$ só dá candidatos locais. Tens de comparar $f(x_0)$, $f(a)$ e $f(b)$.', amir_warning: 'Na prática cada parâmetro tem um intervalo permitido. A minha taxa de aprendizagem não pode ser negativa, o tamanho do lote não pode exceder a memória GPU. Verificar valores fronteira é obrigatório!' },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'O DataPulse funciona — mas o Amir precisa de uma nova métrica: quantas canções ouvem os utilizadores no total por semana? Tem a taxa de escuta $r(t)$ como função do tempo, mas precisa da quantidade total. "Taxa vezes tempo dá quantidade — mas a taxa muda constantemente", reflete Amir. O seu amigo Kai sorri: "Parece um integral."',
      challenge: 'Amir quer calcular o número total de canções ouvidas a partir da taxa de escuta $r(t)$ dependente do tempo — isso leva-o ao cálculo integral.',
      outro: 'Amir agora pode formar primitivas, calcular integrais definidos e determinar áreas entre curvas. "A integração é a operação inversa da derivação — e na prática assim somo dados contínuos", resume. A sua métrica de escuta semanal está pronta.',
    },
    objectives: {
      antiderivative: 'Formar primitivas com a regra da potência inversa e compreender a constante de integração $C$',
      definite_integral: 'Calcular integrais definidos com o teorema fundamental: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Compreender o teorema fundamental do cálculo e aplicá-lo em cálculos de áreas',
    },
    explanation: {
      intro: 'A integração é a operação inversa da derivação: se $F\'(x) = f(x)$, então $F(x)$ é uma primitiva de $f(x)$. A primitiva geral contém sempre a constante $C$:',
      power_rule_integral: 'A regra da potência ao contrário: aumentar o expoente em 1 e dividir pelo novo expoente. Funciona para todo $n \\neq -1$:',
      amir_tip: 'A integração é como a agregação em bases de dados: a derivada dá a taxa de variação instantânea, o integral soma tudo. Se conheço os downloads por hora, o integral dá-me os downloads totais num período.',
      definite_integral: 'O integral definido calcula o "efeito total" entre dois limites. O teorema fundamental torna-o simples: primitiva no limite superior menos primitiva no limite inferior:',
      area_interpretation: 'Geometricamente, o integral definido é a área entre a curva e o eixo $x$. Atenção: áreas abaixo do eixo $x$ contam como negativas! Para a área real precisas do valor absoluto:',
    },
    concepts: {
      antiderivative: { title: 'Primitiva', desc: 'Uma função $F(x)$ com $F\'(x) = f(x)$. A constante $+C$ é importante porque diferentes primitivas só diferem numa constante.' },
      definite_integral: { title: 'Integral definido', desc: 'Calcula a área com sinal entre $f(x)$ e o eixo $x$ de $a$ a $b$. Substituir limite superior menos substituir limite inferior.' },
      fundamental_theorem: { title: 'Teorema fundamental do cálculo', desc: 'Liga derivada e integral: derivar e integrar são operações inversas. O integral definido pode ser calculado através da primitiva.' },
    },
    examples: {
      area_calculation: {
        title: 'Área entre parábola e eixo $x$',
        context: 'Amir visualiza a distribuição do tempo de escuta como área sob uma curva.',
        step1: 'Determinar a função e os zeros — esses são os nossos limites de integração:',
        step2: 'Formar a primitiva com a regra da potência inversa:',
        step3: 'Calcular o integral definido: substituir limite superior menos substituir limite inferior:',
        step4: 'O integral é negativo porque a parábola está abaixo do eixo $x$. Para a área tomar o valor absoluto:',
        amir_comment: 'Integrais negativos fazem todo o sentido na análise de dados: se $f(x)$ é o desvio da média, um integral negativo mostra que os valores estiveram globalmente abaixo da média.',
      },
      distance_from_velocity: {
        title: 'Calcular distância a partir da velocidade',
        context: 'Quanto percorre um carro autónomo em 4 segundos?',
        step1: 'Dada a função de velocidade:',
        step2: 'A distância total é o integral da velocidade em relação ao tempo:',
        step3: 'Formar a primitiva — integrar cada termo individualmente:',
        step4: 'Substituir limites e calcular a diferença:',
        amir_comment: 'Os dados de sensores chegam como taxas — velocidade, débito de dados, pedidos por segundo. O integral converte isso em quantidade total. O meu painel mostra exatamente isso: $\\int_0^T r(t)\\,dt$ = streams totais.',
      },
    },
    realworld: {
      data_aggregation: { title: 'Agregação de dados no tempo', desc: 'Se a taxa de dados $r(t)$ é conhecida, o integral fornece a quantidade total num período. Assim calculam os serviços de streaming os minutos de escuta mensais a partir de dados por segundo.' },
      energy_consumption: { title: 'Consumo de energia', desc: 'Potência $P(t)$ em watts vezes tempo dá energia em joules — mas só com potência constante. Com potência variável precisas do integral: $E = \\int P(t)\\,dt$.' },
      probability: { title: 'Probabilidades', desc: 'A probabilidade de que uma variável aleatória esteja entre $a$ e $b$ é a área sob a função de densidade — ou seja, um integral definido. A base de toda a estatística.' },
    },
    mistakes: {
      constant_forgotten: { wrong: 'Esquecer a constante de integração $C$ em integrais indefinidos', correct: 'Sempre acrescentar $+ C$ no integral indefinido', why: 'Se $F\'(x) = 2x$, então tanto $x^2$ como $x^2 + 7$ são primitivas. O $+C$ representa todas as primitivas possíveis. No integral definido $C$ cancela-se — aí podes omiti-lo.', amir_warning: 'Na prática $C$ é a condição inicial: quantas canções já tinha o utilizador ouvido antes de começarmos a medir? Sem $C$ falta o valor inicial, e o teu cálculo começa em zero em vez do valor real.' },
      negative_area: { wrong: 'Interpretar o integral diretamente como área, mesmo quando negativo', correct: 'Para áreas reais tomar o valor absoluto dos valores integrais', why: 'O integral $\\int_a^b f(x)\\,dx$ pode ser negativo quando $f(x) < 0$. Isso é correto como área com sinal. Se precisas da área geométrica, tens de integrar $|f(x)|$ ou calcular as áreas parciais separadamente.', amir_warning: 'Imagina que calculas o tempo total de escuta e obténs um resultado negativo — isso seria obviamente incorreto. Em problemas de área sempre verificar se a função muda de sinal, e calcular subintervalos separadamente!' },
    },
  },
};
