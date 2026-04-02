export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia percorre a lista de animacoes de Hafenlichter e franze a testa. A animacao de respiracao de Lumi parece um robo — brusca e artificial. As ondas do porto tambem parecem rigidas, e o ciclo dia-noite salta em vez de fluir. "Tudo o que se repete precisa de uma oscilacao", diz Tim. "Seno e cosseno — foram feitos para isso." Mia abre a calculadora e mergulha no mundo das funcoes periodicas.',
      challenge: 'A animacao de respiracao, o movimento das ondas e o ciclo dia-noite devem oscilar naturalmente em vez de se moverem aos solavancos.',
      outro: 'A respiracao de Lumi agora sobe e desce suavemente, as ondas do porto rolam uniformemente ate a margem, e a luz muda fluidamente do vermelho da aurora ao azul da meia-noite. "Funcoes sinusoidais estao em toda a parte na natureza", diz Jule. Mia acena: "E agora tambem estao em Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Reconhecer funcoes periodicas e distingui-las das nao periodicas',
      amplitude_period: 'Ler a amplitude e o periodo de graficos e equacoes',
      frequency: 'Calcular a frequencia e explicar o seu significado',
      modeling: 'Modelar processos reais com funcoes sinusoidais',
    },
    explanation: {
      intro: 'Alguns processos repetem-se uma e outra vez: o teu batimento cardiaco, as mares, as estacoes. Na matematica descrevemos estas oscilacoes com funcoes periodicas. A mais importante delas e a funcao seno:',
      parameters: 'A funcao seno geral tem quatro parametros que podes entender como reguladores numa mesa de mistura: $A$ controla a altura da oscilacao (amplitude), $b$ afeta a rapidez com que a oscilacao se repete (periodo), $c$ desloca a curva para a esquerda ou direita, e $d$ desloca-a para cima ou baixo.',
      mia_tip: 'Para a animacao de respiracao de Lumi uso $A = 3$ pixeis e $T = 4$ segundos. Isso significa: a cada 4 segundos Lumi inspira e expira uma vez, e o peito move-se 3 pixeis para cima e para baixo. Completamente natural!',
      graph_reading: 'Para ler uma funcao periodica do grafico, procuras o padrao que se repete. A distancia entre dois lugares identicos chama-se periodo $T$. Matematicamente, periodicidade significa:',
      applications: 'As funcoes periodicas sao a ferramenta matematica para tudo o que oscila: ondas sonoras, corrente alternada, pendulos, ondas de luz e ate as orbitas dos planetas. Sempre que um processo se repete regularmente, ha uma funcao sinusoidal (ou as suas parentes) por detras.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitude',
        desc: 'A amplitude $A$ e o desvio maximo em relacao ao valor medio. Mede quao "forte" e a oscilacao. No grafico le-se como metade da diferenca entre o ponto mais alto e o mais baixo.',
      },
      period: {
        title: 'Periodo',
        desc: 'O periodo $T$ e o comprimento de um ciclo completo de oscilacao. Apos o tempo $T$ tudo se repete exatamente. Quanto maior e $b$, mais curto e o periodo.',
      },
      frequency: {
        title: 'Frequencia',
        desc: 'A frequencia $f$ indica quantas oscilacoes ocorrem por unidade de tempo. E o inverso do periodo. Unidade: Hertz (Hz) = oscilacoes por segundo.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Ler uma funcao seno do grafico',
        context: 'Mia tem um efeito de ondulacao no jogo e quer encontrar a equacao correspondente.',
        step1: 'Ler o ponto mais alto e o mais baixo: $y_{\\max} = 3$ e $y_{\\min} = -3$. A amplitude e metade da diferenca — a onda oscila 3 unidades para cima e para baixo.',
        step2: 'Ler o periodo: um ciclo completo dura $4\\pi$ unidades. Dai calculamos $b$ com a formula $b = \\frac{2\\pi}{T}$ — o que da $0{,}5$.',
        step3: 'Montar a equacao: como a linha media esta em $y = 0$ ($d = 0$) e nao se observa desfasamento ($c = 0$), a funcao e simplesmente:',
        mia_comment: 'Amplitude 3, periodo $4\\pi$ — com isso as ondas do porto balancam bem lentamente. Para ondas mais rapidas simplesmente aumento $b$!',
      },
      ferris_wheel: {
        title: 'Modelar uma roda-gigante',
        context: 'Uma roda-gigante de 60 m de diametro completa uma volta a cada 10 minutos. A gondola mais baixa esta a 5 m do chao.',
        step1: 'Determinar a amplitude: o raio e metade da altura, entao $A = 30\\,\\text{m}$. A linha media esta em $d = 5 + 30 = 35\\,\\text{m}$ (chao + raio).',
        step2: 'O periodo e uma volta completa: $T = 10\\,\\text{min}$. Dai $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Considerar o ponto de inicio: comecar em baixo significa deslocar o seno por $-\\frac{\\pi}{2}$ (o seno normalmente comeca no meio, nao em baixo).',
        step4: 'Verificacao: apos 2,5 minutos (quarto de volta) a gondola deveria estar a meia altura. Substituir: $\\sin(0) = 0$, entao $h = 35\\,\\text{m}$. Correto!',
        mia_comment: 'E assim que funciona tambem o ciclo dia-noite em Hafenlichter: seno com $T = 24$ (um dia de jogo) e deslocamento para que a meia-noite seja o mais escuro.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'O teu batimento cardiaco',
        desc: 'O teu coracao bate cerca de 72 vezes por minuto — sao 1,2 batimentos por segundo. Os sinais eletricos do teu coracao (ECG) mostram uma curva periodica. Os medicos leem a amplitude e a frequencia para detetar problemas cardiacos.',
      },
      tides: {
        title: 'Mare alta e mare baixa',
        desc: 'No porto de Hamburgo o nivel da agua oscila a cada 12,4 horas entre mare alta e mare baixa. E uma funcao sinusoidal quase perfeita — causada pela forca de atracao da Lua.',
      },
      temperature: {
        title: 'Temperatura anual',
        desc: 'A temperatura media ao longo de um ano segue aproximadamente uma curva sinusoidal: quente no verao, fria no inverno, com um periodo de 365 dias. Os climatologistas usam este modelo como base para previsoes.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Confundir periodo e frequencia',
        correct: 'A frequencia e o inverso do periodo',
        why: 'Se o periodo e $T = 2\\,\\text{s}$, oscila uma vez a cada 2 segundos. A frequencia e entao $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — nao $2\\,\\text{Hz}$! Frequencia = "quantas vezes por segundo?", periodo = "quanto tempo dura um ciclo?"',
        mia_warning: 'Este erro fez com que a respiracao de Lumi fosse o dobro da velocidade — parecia que tinha acabado de correr uma corrida!',
      },
      b_value: {
        wrong: 'Igualar $b$ ao periodo',
        correct: 'Converter $b$ e $T$ com a formula',
        why: '$b$ NAO e o periodo, mas relaciona-se com ele atraves de $T = \\frac{2\\pi}{b}$. Se o periodo e $4\\pi$, entao $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — nao $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter funciona — mas tem travoes. Mia abre o monitor de desempenho e ve: em algumas cenas a taxa de fotogramas cai para 15 FPS. "Onde exatamente fica lento?", pergunta Tim. "Nao preciso da media de toda a cena, mas do ponto exato onde o desempenho cai." Jule sorri: "Essa e exatamente a questao que levou a invencao do calculo diferencial — a taxa de variacao instantanea."',
      challenge: 'Encontrar o ponto exato onde a taxa de fotogramas cai — nao apenas a media.',
      outro: 'Mia encontrou o ponto critico: exatamente no fotograma 847 o tempo de renderizacao explode porque ai sao geradas 200 particulas simultaneamente. "Sem a taxa de variacao instantanea teria procurado para sempre", diz ela. Tim acena: "Newton teria feito o mesmo — so que sem monitor de desempenho."',
    },
    objectives: {
      average_rate: 'Calcular e interpretar a taxa de variacao media (inclinacao da secante)',
      instantaneous_rate: 'Compreender a taxa de variacao instantanea como limite',
      limit_concept: 'Acompanhar a transicao da secante para a tangente',
      derivative_notation: 'Conhecer e aplicar as diferentes notacoes da derivada',
    },
    explanation: {
      intro: 'Imagina que vais de bicicleta para a escola. O teu velocimetro marca 20 km/h — essa e a tua velocidade instantanea. Mas como se calcula? Se dizes "Percorri 10 km em 30 minutos", isso e uma media. A velocidade instantanea num ponto determinado e algo diferente — e e exatamente disso que trata o calculo diferencial.',
      secant_to_tangent: 'A ideia e genialmente simples: calcula a inclinacao media entre dois pontos, e depois aproxima os pontos cada vez mais. No caso limite — quando a distancia tende para zero — obtens a inclinacao num unico ponto. Essa e a derivada:',
      mia_tip: 'A taxa media de fotogramas em 10 segundos nao me diz nada. Preciso da taxa instantanea no fotograma 847! Tal como o velocimetro: nao mostra a media de toda a viagem, mas a velocidade AGORA.',
      derivative_meaning: 'A derivada $f\'(x_0)$ tem um significado claro: da a inclinacao da tangente ao grafico no ponto $x_0$. Se $f\'(x_0) > 0$, a funcao cresce ai. Se $f\'(x_0) < 0$, decresce. Se $f\'(x_0) = 0$, a funcao tem ai (possivelmente) um maximo ou minimo. Existem diferentes notacoes:',
      geometric_interpretation: 'Geometricamente acontece o seguinte: a secante atraves de dois pontos do grafico roda quando os pontos se aproximam. No caso limite, a secante torna-se tangente — uma reta que "toca" o grafico num unico ponto. A inclinacao desta tangente e a derivada.',
    },
    concepts: {
      difference_quotient: {
        title: 'Quociente de diferencas',
        desc: 'A taxa de variacao media entre dois pontos. Calcula a inclinacao da secante — uma reta que corta o grafico em dois pontos.',
      },
      differential_quotient: {
        title: 'Quociente diferencial (derivada)',
        desc: 'A taxa de variacao instantanea num ponto. Surge quando $h$ no quociente de diferencas tende para zero. Da a inclinacao da tangente.',
      },
      derivative_notation: {
        title: 'Notacoes da derivada',
        desc: 'Ha tres notacoes comuns: $f\'(x)$ (Lagrange, a mais frequente na escola), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, enfatiza o carater de fracao) e $\\dot{y}$ (Newton, sobretudo em fisica para derivadas temporais).',
      },
    },
    examples: {
      average_speed: {
        title: 'Velocidade media',
        context: 'Uma bola rola por uma rampa. A distancia depende quadraticamente do tempo.',
        step1: 'Dada a funcao posicao-tempo. Apos 2 segundos a bola percorreu 2 m, apos 4 segundos 8 m.',
        step2: 'Velocidade media entre $t = 2$ e $t = 4$: dividimos a variacao de distancia pela variacao de tempo. Resulta $3\\,\\text{m/s}$ em media.',
        step3: 'Agora encurtamos o intervalo: entre $t = 2$ e $t = 2{,}1$ resulta $2{,}05\\,\\text{m/s}$. Quanto mais curto o intervalo, mais nos aproximamos da velocidade instantanea em $t = 2$.',
        mia_comment: 'E exatamente assim que funciona o meu monitor de desempenho: mede a taxa de fotogramas em intervalos cada vez mais curtos ate encontrar o ponto exato onde falha.',
      },
      instantaneous_rate: {
        title: 'Calcular a taxa de variacao instantanea',
        context: 'Determina a derivada de $f(x) = x^2$ no ponto $x_0 = 3$.',
        step1: 'Substituimos $f(x) = x^2$ e $x_0 = 3$ no quociente de diferencas. Procurado: o que acontece quando $h$ tende para 0?',
        step2: 'Calcular o numerador: $(3+h)^2 = 9 + 6h + h^2$. Menos $f(3) = 9$ da $6h + h^2$ no numerador.',
        step3: 'Simplificar por $h$ (podemos porque $h \\neq 0$ no processo de limite): resta $6 + h$.',
        step4: 'Formar o limite: para $h \\to 0$, $6 + h$ torna-se $6$. A inclinacao da tangente em $x = 3$ e exatamente $6$.',
        mia_comment: 'A tangente em $x = 3$ tem inclinacao 6. Se fizer isto para cada ponto, obtenho a funcao derivada $f\'(x) = 2x$. Em $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Confere!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Radares e velocidade',
        desc: 'Um radar nao mede a tua velocidade instantanea, mas a tua velocidade media num trecho curto (controlo de trecho: ao longo de varios quilometros). Quanto mais curto o trecho de medicao, mais perto do valor instantaneo.',
      },
      stock_trends: {
        title: 'Cotacoes bolsistas e tendencias',
        desc: 'Quando uma acao "sobe", os analistas referem-se a derivada positiva da cotacao. A inclinacao da tangente ao grafico de cotacao mostra a tendencia: positiva = tendencia de alta, negativa = tendencia de baixa, zero = ponto de inflexao.',
      },
      speedometer: {
        title: 'Velocimetro do carro',
        desc: 'O teu velocimetro mostra a velocidade instantanea — matematicamente a derivada da funcao posicao em relacao ao tempo. Os dispositivos GPS calculam-na como limite de intervalos de tempo muito curtos.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Media = valor instantaneo',
        correct: 'Distinguir entre media e valor instantaneo',
        why: 'A taxa de variacao media num intervalo $[1;\\,5]$ NAO e igual a taxa de variacao instantanea em $x = 3$ (o ponto medio). Isso so vale para funcoes lineares! Para graficos curvos, ambos os valores diferem.',
        mia_warning: 'Primeiro calculei a taxa media de fotogramas e pensei que estava tudo bem. Mas localmente havia quedas massivas! A media escondia o problema.',
      },
      secant_tangent: {
        wrong: 'Inclinacao da secante = inclinacao da tangente',
        correct: 'A tangente e o caso limite da secante',
        why: 'A secante corta o grafico em dois pontos, a tangente toca-o num. So quando os dois pontos se juntam ($h \\to 0$), a secante torna-se tangente. Sem limite e apenas uma aproximacao.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter precisa de um sistema de balanceamento: a que velocidade Lumi deve subir de nivel? Quao fortes ficam os inimigos? Quanto custa uma melhoria? "Se tudo crescer linearmente, o jogo fica aborrecido", diz Jule. Tim acrescenta: "E se tudo crescer exponencialmente, fica injusto." Mia percebe: precisa de conhecer diferentes tipos de crescimento e usa-los de forma direcionada.',
      challenge: 'Encontrar as curvas de crescimento corretas para o balanceamento do jogo — linear, quadratico, exponencial ou logaritmico.',
      outro: 'O sistema de balanceamento de Mia esta pronto: a velocidade de movimento cresce linearmente, o dano de queda quadraticamente, a experiencia necessaria exponencialmente e a curva de aprendizagem logaritmicamente. "Cada curva tem o seu lugar", diz satisfeita. O jogo agora sente-se justo e emocionante — do nivel 1 ate ao chefe final.',
    },
    objectives: {
      identify_types: 'Reconhecer as quatro grandes classes de funcoes (linear, quadratica, exponencial, logaritmica) em equacoes e graficos',
      compare_growth: 'Comparar e ordenar o comportamento de crescimento das classes de funcoes',
      match_context: 'Escolher e justificar a classe de funcao adequada para o contexto',
      graph_recognition: 'Atribuir graficos aos tipos de funcao corretos',
    },
    explanation: {
      intro: 'Na matematica ha diferentes "familias" de funcoes — cada uma com o seu proprio carater. Algumas crescem uniformemente, outras cada vez mais rapido, e outras cada vez mais lentamente. As quatro classes mais importantes para o 10o ano sao:',
      mia_tip: 'No design de jogos uso cada classe de funcao para algo diferente: crescimento linear para coisas previsiveis (velocidade de movimento), quadratico para coisas que se "aceleram" (dano de queda), exponencial para desafios (experiencia necessaria) e logaritmico para efeitos de aprendizagem (progressao de habilidade).',
      growth_comparison: 'Decisivo e: a que velocidade cresce cada classe de funcao para valores grandes de $x$? A ordem e sempre a mesma — independentemente dos numeros concretos que uses:',
      choosing_functions: 'Escolher a funcao correta para um problema e uma competencia-chave. Pergunta-te: a variacao e constante (linear)? Acelera-se uniformemente (quadratica)? O valor duplica em intervalos iguais (exponencial)? O incremento e cada vez menor (logaritmico)?',
    },
    concepts: {
      linear: {
        title: 'Funcoes lineares',
        desc: 'Taxa de variacao constante: em cada passo adiciona-se a mesma quantidade. O grafico e uma reta. A inclinacao $m$ e a ordenada na origem $b$ podem ser lidas diretamente.',
      },
      quadratic: {
        title: 'Funcoes quadraticas',
        desc: 'A propria taxa de variacao muda linearmente — adiciona-se cada vez mais rapido (ou menos). O grafico e uma parabola com vertice.',
      },
      exponential: {
        title: 'Funcoes exponenciais',
        desc: 'Crescimento por uma percentagem fixa: quanto mais ha, mais se adiciona. Duplicacao em intervalos iguais de tempo. A longo prazo cresce mais rapido do que qualquer funcao potencial.',
      },
      logarithmic: {
        title: 'Funcoes logaritmicas',
        desc: 'A funcao inversa da funcao exponencial. Cresce rapido no inicio, depois cada vez mais lentamente. Modela efeitos de saturacao e curvas de aprendizagem.',
      },
    },
    examples: {
      identify_type: {
        title: 'Reconhecer o tipo de funcao em tabelas de valores',
        context: 'Apresentam-se tres conjuntos de dados. Que tipo corresponde a cada um?',
        step1: 'Testar linearidade: calcula as diferencas de valores $y$ consecutivos. Se sao constantes, a funcao e linear.',
        step2: 'Testar exponencial: calcula os quocientes de valores $y$ consecutivos. Se sao constantes, a funcao e exponencial.',
        step3: 'Testar quadratica: calcula as segundas diferencas (diferencas das diferencas). Se sao constantes, a funcao e quadratica.',
        mia_comment: 'E exatamente assim que testo o meu balanceamento: simulo 100 rondas e verifico se os valores seguem o tipo de crescimento desejado. Se as segundas diferencas se desviam, algo nao esta bem.',
      },
      game_mechanics: {
        title: 'Modelar mecanicas de jogo',
        context: 'Quatro mecanicas de jogo diferentes em Hafenlichter precisam de funcoes distintas.',
        step1: 'Velocidade de movimento: sobe a mesma quantidade por nivel ($+5$ por nivel). E uma variacao constante — linear. Justo e previsivel.',
        step2: 'Dano de queda: de 2 m de altura dano leve, de 10 m muito mais. O aumento do dano acelera-se — quadratico. Faz sentido fisico (energia = $\\frac{1}{2}mv^2$).',
        step3: 'Experiencia necessaria por nivel: nivel 2 precisa de 150 XP, nivel 3 de 225 XP, nivel 4 de 337 XP. A necessidade cresce sempre 50% — exponencial. Assim os niveis superiores sao um verdadeiro desafio.',
        step4: 'Curva de aprendizagem (habilidade): no inicio aprende-se rapido, depois cada vez mais devagar. Apos $t$ horas de jogo domina-se $20 \\cdot \\log_2(t+1)$ porcento das mecanicas — logaritmico.',
        mia_comment: 'Esse e o nucleo do design de jogos: a curva certa para a mecanica certa. XP linear seria aborrecido, dano de queda exponencial seria injusto. Cada tipo de funcao tem o seu ponto ideal!',
      },
    },
    realworld: {
      app_users: {
        title: 'Downloads virais de apps',
        desc: 'Se cada utilizador convida dois amigos e estes outros dois, os downloads duplicam. No inicio quase invisivel, depois explosivo — tipicamente exponencial. TikTok, Instagram e WhatsApp cresceram assim.',
      },
      salary: {
        title: 'Mesada e salario',
        desc: 'A tua mesada sobe (esperemos) todos os anos a mesma quantidade — crescimento linear. Mais tarde no trabalho o teu salario costuma subir de forma semelhante: uma quantia fixa por ano de experiencia.',
      },
      learning_curve: {
        title: 'Progresso de aprendizagem',
        desc: 'Novo instrumento, novo desporto, nova lingua: no inicio fazes progressos enormes, depois cada vez e mais dificil melhorar. Essa e uma curva de saturacao logaritmica — e completamente normal!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Exponencial" e "quadratico" sao o mesmo',
        correct: 'O exponencial cresce MUITO mais rapido do que o quadratico',
        why: 'Com numeros pequenos $x^2$ e $2^x$ parecem-se: $4^2 = 16$ e $2^4 = 16$. Mas com $x = 10$: $10^2 = 100$ contra $2^{10} = 1024$. O crescimento exponencial ultrapassa qualquer funcao potencial!',
        mia_warning: 'No inicio fiz a experiencia necessaria quadratica em vez de exponencial. Resultado: a partir do nivel 20 o jogo era demasiado facil porque os jogadores acumulavam XP mais rapido do que a necessidade subia.',
      },
      all_curves_linear: {
        wrong: 'Todo crescimento e linear',
        correct: 'Primeiro verificar o tipo de crescimento',
        why: 'So porque algo se "duplica" nao significa que seja linear! "A cada 3 dias o dobro de seguidores" e exponencial, nao linear. Linear seria: "todos os dias 100 novos seguidores". A diferenca: aumento constante (linear) vs. fator constante (exponencial).',
      },
    },
  },
};
