export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia percorre a lista de animações de Hafenlichter e franze a testa. A animação de respiração de Lumi parece um robô — brusca e artificial. As ondas do porto também parecem rígidas, e o ciclo dia-noite salta em vez de fluir. "Tudo o que se repete precisa de uma oscilação", diz Tim. "Seno e cosseno — foram feitos para isso." Mia abre a calculadora e mergulha no mundo das funções periódicas.',
      challenge: 'A animação de respiração, o movimento das ondas e o ciclo dia-noite devem oscilar naturalmente em vez de se moverem aos solavancos.',
      outro: 'A respiração de Lumi agora sobe e desce suavemente, as ondas do porto rolam uniformemente até à margem, e a luz muda fluidamente do vermelho da aurora ao azul da meia-noite. "Funções sinusoidais estão em toda a parte na natureza", diz Jule. Mia acena: "E agora também estão em Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Reconhecer funções periódicas e distingui-las das não periódicas',
      amplitude_period: 'Ler a amplitude e o período de gráficos e equações',
      frequency: 'Calcular a frequência e explicar o seu significado',
      modeling: 'Modelar processos reais com funções sinusoidais',
    },
    explanation: {
      intro: 'Alguns processos repetem-se uma e outra vez: o teu batimento cardíaco, as marés, as estações. Na matemática descrevemos estas oscilações com funções periódicas. A mais importante delas é a função seno:',
      parameters: 'A função seno geral tem quatro parâmetros que podes entender como reguladores numa mesa de mistura: $A$ controla a altura da oscilação (amplitude), $b$ afeta a rapidez com que a oscilação se repete (período), $c$ desloca a curva para a esquerda ou direita, e $d$ desloca-a para cima ou baixo.',
      mia_tip: 'Para a animação de respiração de Lumi uso $A = 3$ píxeis e $T = 4$ segundos. Isso significa: a cada 4 segundos Lumi inspira e expira uma vez, e o peito move-se 3 píxeis para cima e para baixo. Completamente natural!',
      graph_reading: 'Para ler uma função periódica do gráfico, procuras o padrão que se repete. A distância entre dois lugares idênticos chama-se período $T$. Matematicamente, periodicidade significa:',
      applications: 'As funções periódicas são a ferramenta matemática para tudo o que oscila: ondas sonoras, corrente alternada, pêndulos, ondas de luz e até as órbitas dos planetas. Sempre que um processo se repete regularmente, há uma função sinusoidal (ou as suas parentes) por detrás.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitude',
        desc: 'A amplitude $A$ é o desvio máximo em relação ao valor médio. Mede quão "forte" é a oscilação. No gráfico lê-se como metade da diferença entre o ponto mais alto e o mais baixo.',
      },
      period: {
        title: 'Período',
        desc: 'O período $T$ é o comprimento de um ciclo completo de oscilação. Após o tempo $T$ tudo se repete exatamente. Quanto maior é $b$, mais curto é o período.',
      },
      frequency: {
        title: 'Frequência',
        desc: 'A frequência $f$ indica quantas oscilações ocorrem por unidade de tempo. É o inverso do período. Unidade: Hertz (Hz) = oscilações por segundo.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Ler uma função seno do gráfico',
        context: 'Mia tem um efeito de ondulação no jogo e quer encontrar a equação correspondente.',
        step1: 'Ler o ponto mais alto e o mais baixo: $y_{\\max} = 3$ e $y_{\\min} = -3$. A amplitude é metade da diferença — a onda oscila 3 unidades para cima e para baixo.',
        step2: 'Ler o período: um ciclo completo dura $4\\pi$ unidades. Daí calculamos $b$ com a fórmula $b = \\frac{2\\pi}{T}$ — o que dá $0{,}5$.',
        step3: 'Montar a equação: como a linha média está em $y = 0$ ($d = 0$) e não se observa desfasamento ($c = 0$), a função é simplesmente:',
        mia_comment: 'Amplitude 3, período $4\\pi$ — com isso as ondas do porto balançam bem lentamente. Para ondas mais rápidas simplesmente aumento $b$!',
      },
      ferris_wheel: {
        title: 'Modelar uma roda-gigante',
        context: 'Uma roda-gigante de 60 m de diâmetro completa uma volta a cada 10 minutos. A gôndola mais baixa está a 5 m do chão.',
        step1: 'Determinar a amplitude: o raio é metade da altura, então $A = 30\\,\\text{m}$. A linha média está em $d = 5 + 30 = 35\\,\\text{m}$ (chão + raio).',
        step2: 'O período é uma volta completa: $T = 10\\,\\text{min}$. Daí $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Considerar o ponto de início: começar em baixo significa deslocar o seno por $-\\frac{\\pi}{2}$ (o seno normalmente começa no meio, não em baixo).',
        step4: 'Verificação: após 2,5 minutos (quarto de volta) a gôndola deveria estar a meia altura. Substituir: $\\sin(0) = 0$, então $h = 35\\,\\text{m}$. Correto!',
        mia_comment: 'É assim que funciona também o ciclo dia-noite em Hafenlichter: seno com $T = 24$ (um dia de jogo) e deslocamento para que a meia-noite seja o mais escuro.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'O teu batimento cardíaco',
        desc: 'O teu coração bate cerca de 72 vezes por minuto — são 1,2 batimentos por segundo. Os sinais elétricos do teu coração (ECG) mostram uma curva periódica. Os médicos leem a amplitude e a frequência para detetar problemas cardíacos.',
      },
      tides: {
        title: 'Maré alta e maré baixa',
        desc: 'No porto de Hamburgo o nível da água oscila a cada 12,4 horas entre maré alta e maré baixa. É uma função sinusoidal quase perfeita — causada pela força de atração da Lua.',
      },
      temperature: {
        title: 'Temperatura anual',
        desc: 'A temperatura média ao longo de um ano segue aproximadamente uma curva sinusoidal: quente no verão, fria no inverno, com um período de 365 dias. Os climatologistas usam este modelo como base para previsões.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Confundir período e frequência',
        correct: 'A frequência é o inverso do período',
        why: 'Se o período é $T = 2\\,\\text{s}$, oscila uma vez a cada 2 segundos. A frequência é então $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — não $2\\,\\text{Hz}$! Frequência = "quantas vezes por segundo?", período = "quanto tempo dura um ciclo?"',
        mia_warning: 'Este erro fez com que a respiração de Lumi fosse o dobro da velocidade — parecia que tinha acabado de correr uma corrida!',
      },
      b_value: {
        wrong: 'Igualar $b$ ao período',
        correct: 'Converter $b$ e $T$ com a fórmula',
        why: '$b$ NÃO é o período, mas relaciona-se com ele através de $T = \\frac{2\\pi}{b}$. Se o período é $4\\pi$, então $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — não $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter funciona — mas tem travões. Mia abre o monitor de desempenho e vê: em algumas cenas a taxa de fotogramas cai para 15 FPS. "Onde exatamente fica lento?", pergunta Tim. "Não preciso da média de toda a cena, mas do ponto exato onde o desempenho cai." Jule sorri: "Essa é exatamente a questão que levou à invenção do cálculo diferencial — a taxa de variação instantânea."',
      challenge: 'Encontrar o ponto exato onde a taxa de fotogramas cai — não apenas a média.',
      outro: 'Mia encontrou o ponto crítico: exatamente no fotograma 847 o tempo de renderização explode porque aí são geradas 200 partículas simultaneamente. "Sem a taxa de variação instantânea teria procurado para sempre", diz ela. Tim acena: "Newton teria feito o mesmo — só que sem monitor de desempenho."',
    },
    objectives: {
      average_rate: 'Calcular e interpretar a taxa de variação média (inclinação da secante)',
      instantaneous_rate: 'Compreender a taxa de variação instantânea como limite',
      limit_concept: 'Acompanhar a transição da secante para a tangente',
      derivative_notation: 'Conhecer e aplicar as diferentes notações da derivada',
    },
    explanation: {
      intro: 'Imagina que vais de bicicleta para a escola. O teu velocímetro marca 20 km/h — essa é a tua velocidade instantânea. Mas como se calcula? Se dizes "Percorri 10 km em 30 minutos", isso é uma média. A velocidade instantânea num ponto determinado é algo diferente — e é exatamente disso que trata o cálculo diferencial.',
      secant_to_tangent: 'A ideia é genialmente simples: calcula a inclinação média entre dois pontos, e depois aproxima os pontos cada vez mais. No caso limite — quando a distância tende para zero — obténs a inclinação num único ponto. Essa é a derivada:',
      mia_tip: 'A taxa média de fotogramas em 10 segundos não me diz nada. Preciso da taxa instantânea no fotograma 847! Tal como o velocímetro: não mostra a média de toda a viagem, mas a velocidade AGORA.',
      derivative_meaning: 'A derivada $f\'(x_0)$ tem um significado claro: dá a inclinação da tangente ao gráfico no ponto $x_0$. Se $f\'(x_0) > 0$, a função cresce aí. Se $f\'(x_0) < 0$, decresce. Se $f\'(x_0) = 0$, a função tem aí (possivelmente) um máximo ou mínimo. Existem diferentes notações:',
      geometric_interpretation: 'Geometricamente acontece o seguinte: a secante através de dois pontos do gráfico roda quando os pontos se aproximam. No caso limite, a secante torna-se tangente — uma reta que "toca" o gráfico num único ponto. A inclinação desta tangente é a derivada.',
    },
    concepts: {
      difference_quotient: {
        title: 'Quociente de diferenças',
        desc: 'A taxa de variação média entre dois pontos. Calcula a inclinação da secante — uma reta que corta o gráfico em dois pontos.',
      },
      differential_quotient: {
        title: 'Quociente diferencial (derivada)',
        desc: 'A taxa de variação instantânea num ponto. Surge quando $h$ no quociente de diferenças tende para zero. Dá a inclinação da tangente.',
      },
      derivative_notation: {
        title: 'Notações da derivada',
        desc: 'Há três notações comuns: $f\'(x)$ (Lagrange, a mais frequente na escola), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, enfatiza o caráter de fração) e $\\dot{y}$ (Newton, sobretudo em física para derivadas temporais).',
      },
    },
    examples: {
      average_speed: {
        title: 'Velocidade média',
        context: 'Uma bola rola por uma rampa. A distância depende quadraticamente do tempo.',
        step1: 'Dada a função posição-tempo. Após 2 segundos a bola percorreu 2 m, após 4 segundos 8 m.',
        step2: 'Velocidade média entre $t = 2$ e $t = 4$: dividimos a variação de distância pela variação de tempo. Resulta $3\\,\\text{m/s}$ em média.',
        step3: 'Agora encurtamos o intervalo: entre $t = 2$ e $t = 2{,}1$ resulta $2{,}05\\,\\text{m/s}$. Quanto mais curto o intervalo, mais nos aproximamos da velocidade instantânea em $t = 2$.',
        mia_comment: 'É exatamente assim que funciona o meu monitor de desempenho: mede a taxa de fotogramas em intervalos cada vez mais curtos até encontrar o ponto exato onde falha.',
      },
      instantaneous_rate: {
        title: 'Calcular a taxa de variação instantânea',
        context: 'Determina a derivada de $f(x) = x^2$ no ponto $x_0 = 3$.',
        step1: 'Substituímos $f(x) = x^2$ e $x_0 = 3$ no quociente de diferenças. Procurado: o que acontece quando $h$ tende para 0?',
        step2: 'Calcular o numerador: $(3+h)^2 = 9 + 6h + h^2$. Menos $f(3) = 9$ dá $6h + h^2$ no numerador.',
        step3: 'Simplificar por $h$ (podemos porque $h \\neq 0$ no processo de limite): resta $6 + h$.',
        step4: 'Formar o limite: para $h \\to 0$, $6 + h$ torna-se $6$. A inclinação da tangente em $x = 3$ é exatamente $6$.',
        mia_comment: 'A tangente em $x = 3$ tem inclinação 6. Se fizer isto para cada ponto, obtenho a função derivada $f\'(x) = 2x$. Em $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Confere!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Radares e velocidade',
        desc: 'Um radar não mede a tua velocidade instantânea, mas a tua velocidade média num trecho curto (controlo de trecho: ao longo de vários quilómetros). Quanto mais curto o trecho de medição, mais perto do valor instantâneo.',
      },
      stock_trends: {
        title: 'Cotações bolsistas e tendências',
        desc: 'Quando uma ação "sobe", os analistas referem-se à derivada positiva da cotação. A inclinação da tangente ao gráfico de cotação mostra a tendência: positiva = tendência de alta, negativa = tendência de baixa, zero = ponto de inflexão.',
      },
      speedometer: {
        title: 'Velocímetro do carro',
        desc: 'O teu velocímetro mostra a velocidade instantânea — matematicamente a derivada da função posição em relação ao tempo. Os dispositivos GPS calculam-na como limite de intervalos de tempo muito curtos.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Média = valor instantâneo',
        correct: 'Distinguir entre média e valor instantâneo',
        why: 'A taxa de variação média num intervalo $[1;\\,5]$ NÃO é igual à taxa de variação instantânea em $x = 3$ (o ponto médio). Isso só vale para funções lineares! Para gráficos curvos, ambos os valores diferem.',
        mia_warning: 'Primeiro calculei a taxa média de fotogramas e pensei que estava tudo bem. Mas localmente havia quedas massivas! A média escondia o problema.',
      },
      secant_tangent: {
        wrong: 'Inclinação da secante = inclinação da tangente',
        correct: 'A tangente é o caso limite da secante',
        why: 'A secante corta o gráfico em dois pontos, a tangente toca-o num. Só quando os dois pontos se juntam ($h \\to 0$), a secante torna-se tangente. Sem limite é apenas uma aproximação.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter precisa de um sistema de balanceamento: a que velocidade Lumi deve subir de nível? Quão fortes ficam os inimigos? Quanto custa uma melhoria? "Se tudo crescer linearmente, o jogo fica aborrecido", diz Jule. Tim acrescenta: "E se tudo crescer exponencialmente, fica injusto." Mia percebe: precisa de conhecer diferentes tipos de crescimento e usá-los de forma direcionada.',
      challenge: 'Encontrar as curvas de crescimento corretas para o balanceamento do jogo — linear, quadrático, exponencial ou logarítmico.',
      outro: 'O sistema de balanceamento de Mia está pronto: a velocidade de movimento cresce linearmente, o dano de queda quadraticamente, a experiência necessária exponencialmente e a curva de aprendizagem logaritmicamente. "Cada curva tem o seu lugar", diz satisfeita. O jogo agora sente-se justo e emocionante — do nível 1 até ao chefe final.',
    },
    objectives: {
      identify_types: 'Reconhecer as quatro grandes classes de funções (linear, quadrática, exponencial, logarítmica) em equações e gráficos',
      compare_growth: 'Comparar e ordenar o comportamento de crescimento das classes de funções',
      match_context: 'Escolher e justificar a classe de função adequada para o contexto',
      graph_recognition: 'Atribuir gráficos aos tipos de função corretos',
    },
    explanation: {
      intro: 'Na matemática há diferentes "famílias" de funções — cada uma com o seu próprio caráter. Algumas crescem uniformemente, outras cada vez mais rápido, e outras cada vez mais lentamente. As quatro classes mais importantes para o 10.º ano são:',
      mia_tip: 'No design de jogos uso cada classe de função para algo diferente: crescimento linear para coisas previsíveis (velocidade de movimento), quadrático para coisas que se "aceleram" (dano de queda), exponencial para desafios (experiência necessária) e logarítmico para efeitos de aprendizagem (progressão de habilidade).',
      growth_comparison: 'Decisivo é: a que velocidade cresce cada classe de função para valores grandes de $x$? A ordem é sempre a mesma — independentemente dos números concretos que uses:',
      choosing_functions: 'Escolher a função correta para um problema é uma competência-chave. Pergunta-te: a variação é constante (linear)? Acelera-se uniformemente (quadrática)? O valor duplica em intervalos iguais (exponencial)? O incremento é cada vez menor (logarítmico)?',
    },
    concepts: {
      linear: {
        title: 'Funções lineares',
        desc: 'Taxa de variação constante: em cada passo adiciona-se a mesma quantidade. O gráfico é uma reta. A inclinação $m$ e a ordenada na origem $b$ podem ser lidas diretamente.',
      },
      quadratic: {
        title: 'Funções quadráticas',
        desc: 'A própria taxa de variação muda linearmente — adiciona-se cada vez mais rápido (ou menos). O gráfico é uma parábola com vértice.',
      },
      exponential: {
        title: 'Funções exponenciais',
        desc: 'Crescimento por uma percentagem fixa: quanto mais há, mais se adiciona. Duplicação em intervalos iguais de tempo. A longo prazo cresce mais rápido do que qualquer função potência.',
      },
      logarithmic: {
        title: 'Funções logarítmicas',
        desc: 'A função inversa da função exponencial. Cresce rápido no início, depois cada vez mais lentamente. Modela efeitos de saturação e curvas de aprendizagem.',
      },
    },
    examples: {
      identify_type: {
        title: 'Reconhecer o tipo de função em tabelas de valores',
        context: 'Apresentam-se três conjuntos de dados. Que tipo corresponde a cada um?',
        step1: 'Testar linearidade: calcula as diferenças de valores $y$ consecutivos. Se são constantes, a função é linear.',
        step2: 'Testar exponencial: calcula os quocientes de valores $y$ consecutivos. Se são constantes, a função é exponencial.',
        step3: 'Testar quadrática: calcula as segundas diferenças (diferenças das diferenças). Se são constantes, a função é quadrática.',
        mia_comment: 'É exatamente assim que testo o meu balanceamento: simulo 100 rondas e verifico se os valores seguem o tipo de crescimento desejado. Se as segundas diferenças se desviam, algo não está bem.',
      },
      game_mechanics: {
        title: 'Modelar mecânicas de jogo',
        context: 'Quatro mecânicas de jogo diferentes em Hafenlichter precisam de funções distintas.',
        step1: 'Velocidade de movimento: sobe a mesma quantidade por nível ($+5$ por nível). É uma variação constante — linear. Justo e previsível.',
        step2: 'Dano de queda: de 2 m de altura dano leve, de 10 m muito mais. O aumento do dano acelera-se — quadrático. Faz sentido físico (energia = $\\frac{1}{2}mv^2$).',
        step3: 'Experiência necessária por nível: nível 2 precisa de 150 XP, nível 3 de 225 XP, nível 4 de 337 XP. A necessidade cresce sempre 50% — exponencial. Assim os níveis superiores são um verdadeiro desafio.',
        step4: 'Curva de aprendizagem (habilidade): no início aprende-se rápido, depois cada vez mais devagar. Após $t$ horas de jogo domina-se $20 \\cdot \\log_2(t+1)$ por cento das mecânicas — logarítmico.',
        mia_comment: 'Esse é o núcleo do design de jogos: a curva certa para a mecânica certa. XP linear seria aborrecido, dano de queda exponencial seria injusto. Cada tipo de função tem o seu ponto ideal!',
      },
    },
    realworld: {
      app_users: {
        title: 'Downloads virais de apps',
        desc: 'Se cada utilizador convida dois amigos e estes outros dois, os downloads duplicam. No início quase invisível, depois explosivo — tipicamente exponencial. TikTok, Instagram e WhatsApp cresceram assim.',
      },
      salary: {
        title: 'Mesada e salário',
        desc: 'A tua mesada sobe (esperemos) todos os anos a mesma quantidade — crescimento linear. Mais tarde no trabalho o teu salário costuma subir de forma semelhante: uma quantia fixa por ano de experiência.',
      },
      learning_curve: {
        title: 'Progresso de aprendizagem',
        desc: 'Novo instrumento, novo desporto, nova língua: no início fazes progressos enormes, depois cada vez é mais difícil melhorar. Essa é uma curva de saturação logarítmica — e completamente normal!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Exponencial" e "quadrático" são o mesmo',
        correct: 'O exponencial cresce MUITO mais rápido do que o quadrático',
        why: 'Com números pequenos $x^2$ e $2^x$ parecem-se: $4^2 = 16$ e $2^4 = 16$. Mas com $x = 10$: $10^2 = 100$ contra $2^{10} = 1024$. O crescimento exponencial ultrapassa qualquer função potência!',
        mia_warning: 'No início fiz a experiência necessária quadrática em vez de exponencial. Resultado: a partir do nível 20 o jogo era demasiado fácil porque os jogadores acumulavam XP mais rápido do que a necessidade subia.',
      },
      all_curves_linear: {
        wrong: 'Todo crescimento é linear',
        correct: 'Primeiro verificar o tipo de crescimento',
        why: 'Só porque algo se "duplica" não significa que seja linear! "A cada 3 dias o dobro de seguidores" é exponencial, não linear. Linear seria: "todos os dias 100 novos seguidores". A diferença: aumento constante (linear) vs. fator constante (exponencial).',
      },
    },
  },
};
