export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'O algoritmo de recomendação musical do Amir tem um problema: a popularidade das músicas novas sobe ao início de forma explosiva — mas com que rapidez exatamente? E quando é que o entusiasmo abranda? «Preciso de uma função que descreva um crescimento extremamente rápido e que ainda assim continue calculável», diz o Amir à Yara. A resposta: a função exponencial com o número de Euler $e$ — e a sua contrapartida, o logaritmo natural.',
      challenge: 'O Amir tem de modelar a curva de crescimento dos streams das músicas e prever quando uma faixa atinge o seu pico — para isso precisa de equações exponenciais e de logaritmos.',
      outro: 'Com a função $e$ e o $\\ln$, o Amir consegue agora calcular quando uma música atinge o seu auge e com que rapidez o interesse cai depois. «O melhor é isto: o logaritmo natural torna qualquer equação exponencial resolúvel», explica ao Finn. O DataPulse prevê agora as tendências das músicas com uma precisão surpreendente.',
    },
    objectives: {
      e_function: 'Compreender e aplicar a função $e$ como função natural de crescimento',
      natural_log: 'Dominar o logaritmo natural como função inversa de $e^x$',
      log_rules: 'Aplicar com segurança as regras dos logaritmos (produto, quociente e potência)',
      solve_exp_equations: 'Resolver equações exponenciais por logaritmização',
    },
    explanation: {
      intro: 'O número de Euler $e \\approx 2{,}718$ é a constante mais importante para processos de crescimento. Porquê logo o $e$? Porque a função $f(x) = e^x$ tem uma propriedade única: a sua derivada é ela própria — $f\'(x) = e^x$. Isso significa: a taxa de crescimento é sempre proporcional ao valor atual. Perfeito para o crescimento natural!',
      natural_log: 'O logaritmo natural $\\ln(x)$ é a função inversa de $e^x$. Se quiseres saber que expoente é preciso para atingir um determinado valor, então o $\\ln$ é a tua ferramenta. As duas funções anulam-se mutuamente:',
      amir_tip: 'No meu código de ML o $\\ln$ aparece por todo o lado — na função de perda, na normalização, na fórmula softmax. A razão: o $\\ln$ transforma multiplicação em adição e torna números enormes manejáveis. É por isso que trabalhamos muitas vezes com «log-likelihood» em vez de probabilidades diretamente!',
      log_rules: 'As três regras dos logaritmos são extremamente úteis — transformam expressões complexas em outras mais simples. A ideia base: os logaritmos fazem de multiplicação adição, de divisão subtração e de potências multiplicação:',
      solving: 'Para resolver uma equação exponencial em ordem a $x$, aplicas o $\\ln$ a ambos os membros. O logaritmo «faz descer o expoente» — é esse o passo decisivo:',
    },
    concepts: {
      e_function: {
        title: 'Função $e$',
        desc: 'A forma geral $f(x) = a \\cdot e^{kx}$: $a$ é o valor inicial, $k$ determina a velocidade de crescimento. Com $k > 0$ a função cresce, com $k < 0$ decresce (decaimento exponencial). A função $e$ é a sua própria derivada — por isso modela o crescimento natural na perfeição.',
      },
      natural_log: {
        title: 'Logaritmo natural',
        desc: 'A função inversa de $e^x$: $\\ln(x)$ responde à pergunta «Que potência de $e$ dá $x$?». Definido apenas para $x > 0$. Importante: $\\ln(1) = 0$ e $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Regras dos logaritmos',
        desc: 'Três regras que simplificam tudo: regra do produto ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), regra do quociente ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) e regra da potência ($\\ln(a^r) = r \\cdot \\ln(a)$). A regra da potência é a chave para resolver equações exponenciais.',
      },
    },
    examples: {
      solve_exp: {
        title: 'Resolver uma equação exponencial',
        context: 'O Amir quer calcular ao fim de quantos dias uma música tem 5 vezes mais streams do que no início. O modelo de crescimento é: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Escrever a equação — quando é que os streams atingem o valor 15?',
        step2: 'Dividir por 3 para isolar $e^{2x}$:',
        step3: 'Aplicar o $\\ln$ a ambos os membros — o expoente «desce»:',
        step4: 'Resolver em ordem a $x$ — dividir pelo coeficiente 2:',
        amir_comment: 'É este o padrão de que preciso constantemente: isolar, logaritmizar, resolver. Funciona em qualquer equação exponencial!',
      },
      half_life: {
        title: 'Calcular o tempo de meia-vida',
        context: 'Depois do pico, uma música viral perde ouvintes todos os dias. O Amir modela a queda com $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'O modelo: 1000 ouvintes ativos no instante $t = 0$, queda exponencial:',
        step2: 'Meia-vida significa: quando restam 500 ouvintes?',
        step3: 'Isolar e logaritmizar — $\\ln$ em ambos os membros:',
        step4: 'Resolver em ordem a $t$ — ao fim de cerca de 6{,}93 dias o número de ouvintes reduziu-se a metade:',
        amir_comment: 'O tempo de meia-vida é constante! Não interessa se são 1000, 500 ou 250 ouvintes — até à redução seguinte para metade passam sempre cerca de 6{,}93 dias. É essa a magia do decaimento exponencial.',
      },
    },
    realworld: {
      user_retention: {
        title: 'Retenção de utilizadores em aplicações',
        desc: 'Quantos utilizadores permanecem ativos ao fim de uma semana? Na maioria das aplicações a retenção cai exponencialmente: $R(t) = R_0 \\cdot e^{-\\lambda t}$. O DataPulse usa este modelo para prever quantos utilizadores ainda cá estarão ao fim de 30 dias — e quando devem ser enviadas notificações push direcionadas.',
      },
      compound_interest: {
        title: 'Capitalização contínua',
        desc: 'Os bancos calculam juros anuais, mas em teoria existe também a capitalização contínua: $K(t) = K_0 \\cdot e^{rt}$. Quanto mais vezes calculares os juros (diariamente, de hora a hora, ao segundo...), mais te aproximas de $e^{rt}$. É esse o valor-limite!',
      },
      decibel: {
        title: 'Escala de decibéis',
        desc: 'O volume é medido de forma logarítmica: $L = 10 \\cdot \\log_{10}(I/I_0)$. Se a intensidade sonora duplicar, o nível sobe apenas cerca de $3\\,\\text{dB}$. É por isso que 10 guitarras não soam 10 vezes mais alto do que uma — o nosso ouvido funciona de forma logarítmica!',
      },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — soma separada',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — só os produtos se podem separar',
        why: 'A regra do produto vale APENAS para a multiplicação, não para a adição! Não existe uma fórmula simples para $\\ln(a + b)$. É um dos erros mais frequentes de todos.',
        amir_warning: 'Este bug custou-me uma vez duas horas de depuração. O meu cálculo da verosimilhança estava completamente errado porque usei $\\ln(p_1 + p_2)$ em vez de $\\ln(p_1 \\cdot p_2)$. Os logaritmos separam produtos — não somas!',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$ — logaritmo mal resolvido',
        correct: '$\\ln(e^x) = x$ — o logaritmo anula a função exponencial',
        why: '$\\ln$ e $e^x$ são funções inversas — anulam-se mutuamente. O resultado é simplesmente o expoente $x$, sem qualquer fator $e$ à frente.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'O DataPulse lançou uma funcionalidade nova e o Amir quer saber: qual é a probabilidade de, em 100 utilizadores de teste, pelo menos 15 clicarem no botão novo? Cada utilizador clica ou não clica — uma clássica experiência de sim/não que se repete $n$ vezes. «Isto já não é acaso, isto é distribuição binomial», diz o professor Nguyen no seminário.',
      challenge: 'O Amir precisa da probabilidade de um determinado número de cliques em $n$ ensaios independentes — a distribuição binomial dá a resposta exata.',
      outro: 'O Amir tem agora um enquadramento estatístico para testes A/B. Consegue calcular se um resultado é significativo ou se surgiu apenas por acaso. «A distribuição binomial é o alicerce de quase todos os testes estatísticos na prática», explica à Yara. O DataPulse toma agora decisões baseadas em dados em vez de intuição.',
    },
    objectives: {
      bernoulli: 'Reconhecer experiências de Bernoulli e determinar a probabilidade de sucesso $p$',
      binomial_formula: 'Aplicar a fórmula binomial para calcular $P(X = k)$',
      expected_value: 'Calcular e interpretar o valor esperado $E(X) = n \\cdot p$',
      standard_deviation: 'Determinar o desvio-padrão $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ e usá-lo como medida de dispersão',
    },
    explanation: {
      intro: 'Imagina que repetes uma experiência $n$ vezes e que de cada vez há apenas dois desfechos: sucesso (probabilidade $p$) ou insucesso (probabilidade $1-p$). A distribuição binomial diz-te qual é a probabilidade de exatamente $k$ sucessos em $n$ ensaios:',
      bernoulli: 'A base é a experiência de Bernoulli — um único ensaio com exatamente dois desfechos. Têm de valer três condições: (1) apenas dois resultados, (2) a probabilidade $p$ mantém-se igual em cada ensaio, (3) os ensaios são independentes uns dos outros. O coeficiente binomial conta as disposições possíveis:',
      amir_tip: 'O coeficiente binomial $\\binom{n}{k}$ conta de quantas maneiras podes distribuir $k$ sucessos por $n$ ensaios. No meu código é a função scipy.special.comb(n, k). Para $n$ grandes prefiro calcular a distribuição acumulada — somar probabilidades individuais seria demasiado lento!',
      expected_value: 'O valor esperado $E(X) = n \\cdot p$ diz-te quantos sucessos esperas «em média». Com 100 ensaios e $p = 0{,}15$ esperas $E(X) = 15$ sucessos. Mas isso não significa que sejam exatamente 15 de cada vez! O quanto os resultados oscilam é medido pelo desvio-padrão:',
      standard_deviation: 'O desvio-padrão $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ mostra a dispersão típica em torno do valor esperado. Regras práticas: cerca de 68% dos resultados situam-se em $E(X) \\pm \\sigma$ e cerca de 95% em $E(X) \\pm 2\\sigma$. Quanto maior for $n$, mais estreita se torna a distribuição relativamente ao valor esperado.',
    },
    concepts: {
      bernoulli: {
        title: 'Experiência de Bernoulli',
        desc: 'Uma experiência aleatória com exatamente dois desfechos: sucesso (probabilidade $p$) ou insucesso ($1-p$). Exemplos: lançamento de uma moeda, clique/não-clique, golo/não-golo. A distribuição binomial resulta da repetição independente $n$ vezes.',
      },
      binomial_formula: {
        title: 'Fórmula binomial',
        desc: 'A fórmula $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ tem três partes: $\\binom{n}{k}$ conta as disposições, $p^k$ é a probabilidade de $k$ sucessos e $(1-p)^{n-k}$ a de $n-k$ insucessos.',
      },
      expected_value: {
        title: 'Valor esperado e desvio-padrão',
        desc: 'O valor esperado $E(X) = n \\cdot p$ é a média em muitas repetições. O desvio-padrão $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ mede o afastamento típico face a esse valor. Juntos descrevem a localização e a dispersão da distribuição.',
      },
    },
    examples: {
      coin_flips: {
        title: 'Lançamento de moeda: exatamente 7 caras em 10',
        context: 'O Amir testa o seu gerador de números aleatórios: em 10 lançamentos de uma moeda equilibrada — qual é a probabilidade de saírem exatamente 7 caras?',
        step1: 'Determinar os parâmetros: $n = 10$ lançamentos, $p = 0{,}5$ (moeda equilibrada), procura-se: $k = 7$ vezes cara.',
        step2: 'Calcular o coeficiente binomial — de quantas maneiras podem 7 caras distribuir-se por 10 lançamentos?',
        step3: 'Substituir na fórmula binomial: disposições $\\times$ sucessos $\\times$ insucessos:',
        step4: 'Calcular — a probabilidade é de cerca de 11{,}7%, portanto até é pouco provável:',
        amir_comment: 'Apenas 11{,}7% — isto mostra: mesmo com uma moeda equilibrada, 7 caras em 10 não é nada de especialmente surpreendente, mas também não é o caso normal. O meu gerador de números aleatórios parece estar em condições!',
      },
      quality_control: {
        title: 'Controlo de qualidade na produção',
        context: 'Uma fábrica tem uma taxa de defeito de 2%. O Amir calcula: qual é a probabilidade de, numa amostra de 20 peças, nenhuma estar defeituosa?',
        step1: 'Parâmetros: $n = 20$ peças, taxa de defeito $p = 0{,}02$, procura-se: $k = 0$ peças defeituosas.',
        step2: 'Substituir: $\\binom{20}{0} = 1$ e $0{,}02^0 = 1$ — restam apenas os insucessos:',
        step3: 'Simplificar — sobra $0{,}98^{20}$:',
        step4: 'Resultado: com cerca de 66{,}8% de probabilidade nenhuma peça está defeituosa — nem por isso tão seguro!',
        amir_comment: 'Apenas dois terços de hipóteses de zero defeitos com uma taxa de 2%! Isto mostra: mesmo probabilidades pequenas se acumulam em muitos ensaios. Com $n = 100$ seria $P(X = 0) \\approx 13{,}3\\%$ — aí encontra-se quase de certeza um defeito.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'Testes A/B no DataPulse',
        desc: 'O Amir testa duas versões da aplicação: a versão A tem uma taxa de cliques de 12%, a versão B de 15%. Com a distribuição binomial calcula se a diferença é estatisticamente significativa — ou se também poderia ter surgido por acaso. É essa a base de qualquer teste A/B.',
      },
      medicine: {
        title: 'Estudos médicos',
        desc: 'Nos ensaios de medicamentos conta-se: quantos doentes ficam curados? A taxa de cura é significativamente melhor do que a do placebo? A distribuição binomial dá a resposta — e protege de conclusões precipitadas com amostras demasiado pequenas.',
      },
      surveys: {
        title: 'Sondagens de opinião e margem de erro',
        desc: 'Se numa sondagem 52% votam «sim» — será isso realmente uma maioria? O desvio-padrão $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ mostra a largura do intervalo de confiança. Com $n = 100$ seria $\\sigma \\approx 5\\%$ — o resultado poderia portanto ser também 47% ou 57%.',
      },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Esquecer o coeficiente binomial: $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Fórmula completa com $\\binom{n}{k}$',
        why: 'Sem $\\binom{n}{k}$ a fórmula conta apenas UMA ordem determinada — por exemplo, primeiro $k$ sucessos e depois $n-k$ insucessos. Mas os sucessos podem ocorrer em posições diferentes! O coeficiente binomial conta todas as disposições possíveis.',
        amir_warning: 'Imagina que lanças um dado 3 vezes e queres exatamente 2 seis. Há 3 possibilidades: 6-6-X, 6-X-6, X-6-6. O coeficiente binomial $\\binom{3}{2} = 3$ conta exatamente isso. Sem ele obténs apenas um terço da probabilidade correta!',
      },
      variance_vs_sigma: {
        wrong: 'Confundir variância e desvio-padrão',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — não te esqueças da raiz!',
        why: 'A variância é $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$ e o desvio-padrão é $\\sigma = \\sqrt{\\text{Var}(X)}$. Sem a raiz o resultado tem a unidade errada e é demasiado grande. O $\\sigma$ tem a mesma unidade que $X$ — na variância ela aparece elevada ao quadrado.',
      },
    },
  },

  '11-bedingte-wahrscheinlichkeit': {
    story: {
      intro: 'O DataPulse recomenda músicas com base no comportamento de escuta anterior. Mas o Amir repara: nem toda a correlação é igualmente forte. Quem ouve rock talvez também goste de metal — mas será que o mesmo vale ao contrário? «A probabilidade de alguém gostar de rock SE ouve metal não é a mesma que ao contrário», explica o professor Nguyen. Bem-vindo à probabilidade condicionada.',
      challenge: 'O Amir tem de melhorar a lógica de recomendação: qual é a probabilidade de um utilizador gostar do género $A$, DADO que ouve o género $B$? E como se inverte esse sentido?',
      outro: 'Com o teorema de Bayes o Amir consegue agora inverter o sentido da recomendação: de «quem ouve metal ouve rock em 60% dos casos» passa-se a «quem ouve rock ouve metal em 35% dos casos». «O Bayes é como engenharia inversa para probabilidades», sorri ele. O DataPulse produz agora recomendações bastante mais precisas.',
    },
    objectives: {
      conditional_prob: 'Calcular e interpretar probabilidades condicionadas',
      bayes_theorem: 'Aplicar o teorema de Bayes para inverter o sentido de uma probabilidade condicionada',
      independence: 'Verificar a independência estocástica e distingui-la da dependência',
      tree_diagrams: 'Utilizar diagramas em árvore e tabelas de dupla entrada como auxiliares',
    },
    explanation: {
      intro: 'A probabilidade condicionada $P(A \\mid B)$ responde à pergunta: «Qual é a probabilidade de $A$ se já sabemos que $B$ ocorreu?» O conhecimento sobre $B$ altera a probabilidade — o espaço amostral encolhe para os casos em que $B$ se verifica:',
      multiplication_rule: 'A regra da multiplicação decorre diretamente da definição: se quiseres calcular a probabilidade de «$A$ e $B$ em simultâneo», multiplicas $P(B)$ pela probabilidade condicionada $P(A \\mid B)$:',
      amir_tip: 'No meu código de recomendação uso constantemente probabilidades condicionadas: $P(\\text{like}_Y \\mid \\text{like}_X)$ — a probabilidade de um utilizador gostar da música $Y$, dado que gostou da música $X$. É esse o coração de qualquer filtro colaborativo!',
      bayes: 'O teorema de Bayes é a magia: inverte o sentido. Se conheces $P(B \\mid A)$ mas precisas de $P(A \\mid B)$, o Bayes dá a solução. A fórmula parece complicada, mas o essencial é simples: ponderas com a probabilidade de base (a priori):',
      total_probability: 'Para o denominador do teorema de Bayes precisas muitas vezes da probabilidade total. Ela decompõe $P(B)$ em todos os caminhos possíveis pelos quais $B$ pode ocorrer — através de $A$ ou de $\\bar{A}$ (não-$A$):',
      independence: 'Dois acontecimentos são estocasticamente independentes quando o conhecimento sobre um não altera a probabilidade do outro. Formalmente: $P(A \\mid B) = P(A)$ — a ocorrência de $B$ não influencia $A$. De forma equivalente vale:',
    },
    concepts: {
      conditional_prob: {
        title: 'Probabilidade condicionada',
        desc: '$P(A \\mid B)$ é a probabilidade de $A$ sob a condição $B$. Fazes «zoom» na parte do espaço de probabilidade onde $B$ se verifica e só depois perguntas por $A$. Importante: $P(A \\mid B) \\neq P(B \\mid A)$ — o sentido conta!',
      },
      bayes: {
        title: 'Teorema de Bayes',
        desc: 'A fórmula para inverter o sentido: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ é a probabilidade a priori (conhecimento prévio) e $P(A \\mid B)$ a posteriori (estimativa atualizada após observar $B$). A estatística bayesiana é a base dos filtros de spam e dos sistemas de diagnóstico.',
      },
      independence: {
        title: 'Independência estocástica',
        desc: '$A$ e $B$ são independentes se $P(A \\cap B) = P(A) \\cdot P(B)$. Isso significa: a ocorrência de $B$ não altera nada na probabilidade de $A$. Cuidado: independência NÃO é o mesmo que «sem interseção» (disjunto)!',
      },
    },
    examples: {
      medical_test: {
        title: 'Teste médico — falácia da taxa de base',
        context: 'Um teste para uma doença é correto em 99% dos casos. A doença afeta 1% da população. Se o teste der positivo — qual é a probabilidade de a pessoa estar realmente doente?',
        step1: 'Dados: $P(K) = 0{,}01$ (doença), $P(+ \\mid K) = 0{,}99$ (sensibilidade), $P(+ \\mid \\bar{K}) = 0{,}05$ (taxa de falsos positivos).',
        step2: 'Calcular a probabilidade total de um resultado positivo — os dois caminhos (doentes + saudáveis):',
        step3: 'Aplicar o teorema de Bayes — procura-se $P(K \\mid +)$:',
        step4: 'Resultado: apenas 16{,}7% de probabilidade de estar realmente doente — apesar dos 99% de precisão do teste!',
        amir_comment: 'É esta a falácia da taxa de base! O teste é muito preciso, mas como a doença é tão rara ($P(K) = 1\\%$), a maioria dos testes positivos são falsos positivos. No mundo do ML isso significa: precisão e revocação não são a mesma coisa!',
      },
      spam_filter: {
        title: 'Filtro de spam com Bayes',
        context: 'O filtro de correio do Amir tem de aprender: se uma mensagem contém a palavra «prémio» — será spam?',
        step1: 'Dados: 30% de todas as mensagens são spam, 80% das mensagens de spam contêm «prémio», mas também 10% das mensagens normais:',
        step2: 'Probabilidade total de uma mensagem conter «prémio»:',
        step3: 'Bayes: qual é a probabilidade de ser spam se ocorre «prémio»?',
        step4: 'Resultado: 77{,}4% — uma mensagem com «prémio» é com elevada probabilidade spam:',
        amir_comment: 'É exatamente assim que funciona um classificador Naive Bayes! Quantas mais palavras acrescentares, mais preciso fica o filtro. O DataPulse usa o mesmo princípio: em vez de palavras analisamos padrões de escuta e, em vez de spam/não-spam, classificamos preferências de género.',
      },
    },
    realworld: {
      recommendation: {
        title: 'Recomendações musicais no DataPulse',
        desc: 'A filtragem colaborativa baseia-se em probabilidades condicionadas: $P(\\text{like}_Y \\mid \\text{like}_X)$ — «quem gosta da música X, com que probabilidade gosta também da música Y?» O Spotify, a Netflix e o DataPulse calculam milhões destas probabilidades condicionadas em tempo real.',
      },
      weather: {
        title: 'Previsão do tempo',
        desc: 'Os meteorologistas atualizam constantemente a sua previsão com Bayes: $P(\\text{Chuva} \\mid \\text{Nuvens, Pressão, Vento})$. Cada nova medição refina o prognóstico. É por isso que a probabilidade de chuva muda ao longo do dia — é o Bayes em ação!',
      },
      fraud_detection: {
        title: 'Deteção de fraude',
        desc: 'O sistema de pagamentos do Amir deteta transações suspeitas com Bayes: quando dispara um alarme — qual é a probabilidade de ser fraude verdadeira? Tal como no teste médico: é a taxa de base que decide! Com uma taxa de fraude de 0{,}1% a maioria dos alarmes são falsos.',
      },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$ — sentido trocado',
        correct: 'Inverter o sentido só é possível com Bayes!',
        why: '$P(A \\mid B)$ e $P(B \\mid A)$ são valores completamente diferentes. Exemplo: $P(\\text{molhado} \\mid \\text{chuva}) = 0{,}99$, mas $P(\\text{chuva} \\mid \\text{molhado}) \\ll 0{,}99$ — também se pode ficar molhado por causa de um sistema de rega. Precisas do teorema de Bayes para inverter o sentido.',
        amir_warning: 'Vejo este erro constantemente em revisões de código! Alguém calcula $P(\\text{click} \\mid \\text{bought})$ e usa-o como $P(\\text{bought} \\mid \\text{click})$. Isso pode arruinar por completo o algoritmo de recomendação. O Bayes é obrigatório!',
      },
      ignore_base_rate: {
        wrong: 'Ignorar a taxa de base (falácia da taxa de base)',
        correct: 'Considerar sempre $P(A)$ — a probabilidade a priori',
        why: 'Um teste com 99% de precisão soa impressionante, mas se a doença só afeta 1%, então $P(K \\mid +) \\approx 16{,}7\\%$. A baixa taxa de base $P(K) = 0{,}01$ domina o resultado. Sem a probabilidade a priori obténs uma estimativa completamente enviesada.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'O Finn constrói o backend para a nova funcionalidade do DataPulse: encontrar músicas semelhantes. Mas como se mede a «semelhança» entre músicas se cada música é descrita por dezenas de propriedades — andamento, energia, ambiente, instrumentação? «Imagina cada música como um ponto no espaço», diz o Amir. «Quanto mais próximos estiverem dois pontos, mais semelhantes são as músicas.» Bem-vindo ao mundo dos vetores.',
      challenge: 'O Amir tem de representar as características das músicas como vetores e calcular a sua semelhança — com o produto escalar e o ângulo entre vetores.',
      outro: 'O motor de recomendação do DataPulse usa agora a semelhança do cosseno: quanto menor for o ângulo entre dois vetores de músicas, mais semelhantes são as músicas. «No mundo do ML os vetores estão em todo o lado — word embeddings, espaços de características, redes neuronais. É tudo álgebra linear», diz o Amir entusiasmado à Yara.',
    },
    objectives: {
      vectors_2d_3d: 'Escrever vetores em $\\mathbb{R}^2$ e $\\mathbb{R}^3$ como colunas e interpretá-los geometricamente',
      vector_operations: 'Dominar a adição de vetores e a multiplicação por um escalar',
      scalar_product: 'Calcular o produto escalar e interpretá-lo geometricamente',
      angle_between_vectors: 'Determinar o ângulo entre dois vetores com a fórmula do cosseno',
    },
    explanation: {
      intro: 'Um vetor descreve um deslocamento no espaço — ou, de forma mais geral: uma lista ordenada de números. Em $\\mathbb{R}^3$ um vetor tem três componentes, que escreves em coluna. Na análise de dados os vetores podem ter 50 ou 500 dimensões — o princípio mantém-se:',
      addition: 'Somas vetores componente a componente — cada linha por si. Geometricamente colocas o segundo vetor no fim do primeiro (método ponta-a-cauda). O resultado é o caminho direto do início ao destino:',
      amir_tip: 'No meu código Python os vetores são simplesmente arrays numpy. A adição $\\vec{a} + \\vec{b}$ é executada automaticamente elemento a elemento — np.array([3,4]) + np.array([-1,2]) dá np.array([2,6]). Exatamente o mesmo que na matemática!',
      scalar_product: 'O produto escalar (também: produto interno) de dois vetores dá um único número — não um vetor! Multiplicas as componentes aos pares e somas tudo. O resultado diz-te com que intensidade os vetores «apontam na mesma direção»:',
      length: 'O comprimento (a norma) de um vetor calcula-se pelo teorema de Pitágoras — alargado a três dimensões. No caso 2D é o conhecido $\\sqrt{x^2 + y^2}$; em 3D acrescenta-se $z^2$:',
      angle: 'A aplicação mais importante do produto escalar: o ângulo entre dois vetores. A fórmula liga o produto escalar algébrico à interpretação geométrica. Esse ângulo é, no mundo do ML, a medida-padrão de semelhança, conhecida como «semelhança do cosseno»:',
    },
    concepts: {
      vector: {
        title: 'Vetor',
        desc: 'Uma lista ordenada de números escrita em coluna. Em $\\mathbb{R}^2$ um vetor tem 2 componentes, em $\\mathbb{R}^3$ três. Geometricamente é uma seta com direção e comprimento. Na análise de dados um vetor representa um objeto com as suas propriedades — por exemplo, uma música com andamento, energia e ambiente.',
      },
      scalar_product: {
        title: 'Produto escalar',
        desc: 'Dois vetores para dentro, um número para fora: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometricamente vale: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Se o produto escalar for zero, os vetores são perpendiculares (ortogonais).',
      },
      vector_length: {
        title: 'Norma de um vetor',
        desc: 'O comprimento $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — Pitágoras generalizado. Um vetor de norma 1 chama-se vetor unitário. No mundo do ML normalizam-se muitas vezes os vetores para comprimento 1, de modo a comparar apenas a direção.',
      },
    },
    examples: {
      force_addition: {
        title: 'Somar forças como vetores',
        context: 'Duas forças atuam sobre um objeto — o Amir calcula a força total resultante.',
        step1: 'As duas forças dadas como vetores 2D:',
        step2: 'Somar componente a componente — cada linha por si:',
        step3: 'Calcular a norma da força total (Pitágoras):',
        step4: 'Calcular — a força total é de cerca de $6{,}32\\,\\text{N}$:',
        amir_comment: 'Usamos o mesmo princípio no DataPulse: em vez de forças somamos vetores de características. Se um utilizador gosta de dois géneros, o vetor de gosto combinado é a soma — assim encontramos músicas que se enquadram nos dois géneros!',
      },
      angle_vectors: {
        title: 'Ângulo entre vetores de músicas',
        context: 'O Amir compara duas músicas: a música A tem o vetor de características $(1, 2, 3)$ e a música B $(4, -1, 2)$. Quão semelhantes são?',
        step1: 'Os vetores de características das duas músicas:',
        step2: 'Calcular o produto escalar — multiplicar as componentes aos pares e somar:',
        step3: 'Calcular as normas dos dois vetores:',
        step4: 'Aplicar a fórmula do cosseno — o ângulo é de cerca de $62{,}2°$:',
        amir_comment: 'Um ângulo de $62{,}2°$ significa: as músicas são parcialmente semelhantes, mas não muito. Com $0°$ seriam idênticas (mesmas proporções) e com $90°$ completamente diferentes. No meu código está: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))',
      },
    },
    realworld: {
      embeddings: {
        title: 'Word embeddings e song embeddings',
        desc: 'No mundo do ML, palavras, músicas e imagens são representadas como vetores de dimensão elevada (embeddings). A semelhança do cosseno $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ mede a sua parecença. Um exemplo célebre: «rei» $-$ «homem» $+$ «mulher» $\\approx$ «rainha» — aritmética vetorial com significados de palavras!',
      },
      navigation: {
        title: 'Navegação e robótica',
        desc: 'Os sistemas de navegação e os robôs usam vetores para posição e movimento. O vetor posição diz «Onde estou?» e o vetor velocidade «Para onde e a que velocidade?». A adição de vetores calcula a nova posição depois de um movimento.',
      },
      game_physics: {
        title: 'Física de jogos e simulações',
        desc: 'Em jogos como o Fortnite ou o Minecraft a física é calculada com vetores: $\\vec{v}_{\\text{novo}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Velocidade, aceleração e gravidade — tudo vetores! Sem cálculo vetorial nenhuma bola voaria corretamente.',
      },
    },
    mistakes: {
      scalar_vs_cross: {
        wrong: 'O produto escalar dá um vetor',
        correct: 'O produto escalar dá um NÚMERO ($\\in \\mathbb{R}$)',
        why: 'No produto escalar multiplicas componente a componente e SOMAS — o resultado é um único número, não um vetor. Não o confundas com o produto vetorial (esse dá de facto um vetor, mas só aparece mais tarde).',
        amir_warning: 'Em numpy: np.dot(a, b) devolve um número, np.cross(a, b) devolve um vetor. Se a tua pontuação de semelhança for de repente um array em vez de um número, usaste o produto errado!',
      },
      length_sum: {
        wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — componentes simplesmente somadas',
        correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — aplica Pitágoras!',
        why: 'O comprimento de um vetor é a distância euclidiana à origem, e essa segue o teorema de Pitágoras. Somar simplesmente as componentes daria a distância de Manhattan (também útil, mas é outra coisa!).',
      },
    },
  },
};
