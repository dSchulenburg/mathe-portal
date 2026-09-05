export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'A Mia está a montar o nível 4 de Luzes do Porto: o Lumi tem de saltar para uma plataforma que desliza lenta e uniformemente para a direita. «O movimento é linear», explica o Tim. «60 pixéis por segundo, e pronto.» A Mia escreve isso e repara logo: é uma equação da reta absolutamente vulgar. Posição inicial mais velocidade vezes tempo. Exatamente aquilo que trouxe do 9.º ano, só que agora mais formal: $f(x) = m \\cdot x + b$.',
      challenge: 'A Mia tem de afinar a curva do salto do Lumi para que ele aterre exatamente sobre a plataforma em movimento. Declive do deslocamento da plataforma e ponto de interseção com a trajetória do Lumi: tudo linear.',
      outro: 'Uma função afim tem dois botões: $m$ determina o quão íngreme é, $b$ desloca-a para cima ou para baixo. Agora a Mia percebe porque precisa dela vezes sem conta: plataformas, consumo de energia, barras de vida. Onde quer que algo aumente ou diminua uma quantidade constante «por passo», a equação da reta é a ferramenta certa.',
    },
    objectives: {
      recognize: 'Reconhecer funções afins pela expressão e pelo gráfico',
      slope_intercept: 'Ler o declive $m$ e a ordenada na origem $b$ na forma reduzida $f(x) = mx + b$',
      point_slope: 'Escrever a reta a partir de um ponto e de um declive com a forma ponto-declive',
      two_points: 'Determinar a equação da reta a partir de dois pontos: calcular o declive e depois $b$',
    },
    explanation: {
      intro: 'Uma função afim descreve uma relação uniforme: quando $x$ varia uma unidade, $y$ varia sempre a mesma quantidade. No gráfico obtém-se assim uma reta. A forma geral é:',
      slope: 'O declive $m$ mede exatamente essa «quantidade por passo». Obténs-lo a partir de dois pontos quaisquer da reta: diferença das alturas a dividir pela diferença das larguras:',
      mia_tip: 'Penso na plataforma do Lumi: desliza exatamente 60 pixéis por segundo. Esse é o meu $m = 60$ pixéis/segundo. Se o Lumi começa em $b = 200$, a posição ao fim de $t$ segundos é simplesmente $f(t) = 60t + 200$. Uma função afim em estado selvagem!',
      intercept: 'A ordenada na origem $b$ é o valor onde a reta corta o eixo vertical. Lês-lo diretamente no gráfico, ou substituis $x = 0$ na expressão:',
      point_slope: 'Se conheces um ponto $P(x_0 \\mid y_0)$ e o declive $m$, o mais rápido é escrever a reta na forma ponto-declive. A partir daí resolves em ordem a $y$ e obténs a forma reduzida:',
    },
    concepts: {
      normal_form: {
        title: 'Forma reduzida $f(x) = mx + b$',
        desc: 'A escrita padrão. $m$ é o declive, $b$ a ordenada na origem. Podes ler ambos os parâmetros diretamente na expressão, e os dois têm um significado geométrico claro.',
      },
      slope: {
        title: 'Declive $m$',
        desc: 'Variação de $y$ por unidade de $x$. A partir de dois pontos: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Positivo = crescente, negativo = decrescente, $m = 0$ = reta horizontal.',
      },
      point_slope: {
        title: 'Forma ponto-declive',
        desc: 'Quando são conhecidos um ponto $(x_0 \\mid y_0)$ e o declive $m$: $y - y_0 = m(x - x_0)$. Prática, porque não tens de calcular $b$ à parte: resolves simplesmente em ordem a $y$.',
      },
      parallel_perpendicular: {
        title: 'Paralelas e perpendiculares',
        desc: 'Duas retas são paralelas se tiverem o mesmo declive ($m_g = m_h$). São perpendiculares entre si quando o produto dos declives vale $-1$ ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Equação da reta a partir de dois pontos',
        context: 'A Mia tem dois pontos de observação da trajetória da plataforma do Lumi: $P_1(2 \\mid 1)$ e $P_2(5 \\mid 7)$. Que equação da reta descreve esse movimento?',
        step1: 'Escrever os dois pontos dados:',
        step2: 'Calcular o declive: diferença dos valores y a dividir pela diferença dos valores x:',
        step3: 'Escrever a forma ponto-declive com $P_1(2 \\mid 1)$ e $m = 2$, e depois resolver em ordem a $y$:',
        step4: 'Equação da reta concluída, na forma reduzida:',
        mia_comment: 'Belo procedimento: dois pontos → declive → substituir → desenvolver. Se mais tarde tiver ainda um terceiro ponto, posso usá-lo para verificar se a minha equação está certa.',
      },
      intersection: {
        title: 'Ponto de interseção de duas retas',
        context: 'A plataforma desloca-se ao longo de $g\\colon y = 2x - 3$, e a trajetória do salto do Lumi ao longo de $h\\colon y = -x + 6$. Onde se encontram?',
        step1: 'Anotar ambas as equações: a mesma variável $x$, a mesma variável $y$:',
        step2: 'No ponto de interseção os dois valores de $y$ coincidem. Portanto: igualar os membros da direita:',
        step3: 'Resolver em ordem a $x$: os dois termos em $x$ de um lado, as constantes do outro:',
        step4: 'Substituir o valor de $x$ numa das duas equações para obter o valor de $y$. Ponto de interseção $S$:',
        mia_comment: 'No jogo, esse ponto de interseção é exatamente a imagem do impacto. Se souber o instante $x = 3$, sei em que imagem tenho de disparar a colisão.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Tarifário móvel com mensalidade',
        desc: 'Exemplo clássico: 9,99 € de mensalidade mais 10 cêntimos por minuto. O custo em função do tempo de conversa é uma reta perfeita: $b$ é a mensalidade, $m$ o preço por minuto.',
      },
      taxi: {
        title: 'Custo do táxi',
        desc: '4 € de bandeirada à entrada, depois 2,50 € por quilómetro. O custo total cresce linearmente com a distância percorrida. Lê-se em qualquer recibo.',
      },
      constant_speed: {
        title: 'Movimento a velocidade constante',
        desc: 'Um skater arranca com velocidade uniforme $v$ e parte de $s_0$. A distância percorrida ao fim de $t$ segundos: $s(t) = v \\cdot t + s_0$. Pura equação da reta: só mudam os nomes das variáveis.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Declive ao contrário: $\\Delta x / \\Delta y$ em vez de $\\Delta y / \\Delta x$',
        correct: 'Primeiro a altura (y), depois a largura (x): $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'O declive descreve «quanta altura por passo», ou seja, a variação de $y$ no numerador e a de $x$ no denominador. Se inverteres a fração obténs o inverso: de $m = 2$ sai erradamente $0{,}5$.',
        mia_warning: 'O meu truque: penso numa escada. Altura do degrau a dividir pela largura do degrau. A altura fica sempre em cima na fração, tal como na escada.',
      },
      intercept_zero: {
        wrong: 'Confundir a ordenada na origem com o zero da função',
        correct: 'Zero da função: faz $f(x) = 0$ e resolve em ordem a $x$',
        why: 'A ordenada na origem $b$ é o valor de $y$ quando $x = 0$, ou seja, um valor de $y$. O zero é o valor de $x$ para o qual $f(x) = 0$. Em $f(x) = 2x + 5$ tem-se $b = 5$, mas o zero está em $x = -2{,}5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'A Mia está a desenhar um chefe rotativo para Luzes do Porto. O chefe é um moinho em redemoinho com três braços, e o Lumi tem de saltar pelos intervalos. «A hitbox tem de ser circular», diz o Tim. «Caso contrário fica estranho quando o Lumi roça um braço que nem sequer está perto.» A Mia precisa do perímetro, da área e do ângulo de cada braço: geometria do círculo no estado puro.',
      challenge: 'A Mia tem de programar hitboxes redondas. Além disso, o comprimento de arco que cada braço varre por segundo, senão a velocidade de rotação não bate certo.',
      outro: 'Com $U = 2\\pi r$ e $A = \\pi r^2$, a Mia tem as ferramentas padrão. E com os radianos converte os ângulos de rotação diretamente em distâncias percorridas, muito mais depressa do que dando a volta pelos $360°$. «O radiano é a linguagem de programação das rotações», anota ela.',
    },
    objectives: {
      umfang_flaeche: 'Calcular o perímetro e a área de um círculo a partir do raio ou do diâmetro',
      bogenmass: 'Converter ângulos com segurança entre graus e radianos',
      sektor: 'Calcular a área e o comprimento de arco de um setor com ângulo ao centro dado',
      bogenlaenge: 'Determinar comprimentos de arco da circunferência completa e do setor em ambas as unidades angulares',
    },
    explanation: {
      intro: 'O círculo é o conjunto de todos os pontos que distam $r$ do centro. Dessa única medida $r$ decorrem o perímetro e a área, ambos com a célebre constante $\\pi \\approx 3{,}14159$:',
      bogenmass: 'Em vez de medir os ângulos em graus, também se pode usar o comprimento de arco correspondente na circunferência unitária: a isso chama-se radiano. Uma circunferência completa mede $2\\pi r$, portanto $360°$ corresponde exatamente a $2\\pi$. Para qualquer ângulo $\\alpha$ em radianos vale:',
      mia_tip: 'Ao início o radiano pareceu-me estranho. Mas no código é muito mais prático: quando escrevo Math.cos(angle) em JavaScript, a função espera radianos, não graus. Quem se esquece disso, de repente roda os sprites na direção errada.',
      umrechnung: 'A conversão passa pela regra de proporção «$360° = 2\\pi\\,\\text{rad}$». Daí sai um fator fixo com que transformas graus e radianos um no outro:',
      sektor: 'Um setor é uma «fatia de bolo» do círculo. A sua parte da área e do perímetro corresponde exatamente à parte que o seu ângulo ao centro ocupa do ângulo completo. Com o ângulo $\\alpha$ (em graus ou em radianos) vale:',
    },
    concepts: {
      umfang: {
        title: 'Perímetro $U$',
        desc: 'O comprimento da linha circular. Depende linearmente do raio: raio a dobrar significa perímetro a dobrar. Com o diâmetro $d = 2r$ escreve-se muitas vezes também $U = \\pi d$.',
      },
      flaeche: {
        title: 'Área $A$',
        desc: 'A superfície delimitada. Depende do quadrado do raio: raio a dobrar significa área a quadruplicar. Importante para todos os problemas de «quanto material» e «quanto conteúdo».',
      },
      bogenmass: {
        title: 'Radiano',
        desc: 'Unidade angular que mede o ângulo como comprimento de arco na circunferência unitária. Círculo completo = $2\\pi$, semicírculo = $\\pi$, ângulo reto = $\\frac{\\pi}{2}$. Padrão em análise e em programação.',
      },
      sektor: {
        title: 'Setor circular',
        desc: 'Uma fatia de bolo: dois raios mais o arco compreendido entre eles. Área e comprimento de arco são grandezas proporcionais: o ângulo ao centro como fração de $360°$ ou de $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Perímetro e área a partir do raio',
        context: 'O chefe rotativo da Mia tem um raio de $5\\,\\text{cm}$ no ecrã. Quanto valem o perímetro e a área?',
        step1: 'O raio é dado:',
        step2: 'Substituir no perímetro: $U = 2\\pi r$ com $r = 5$. Primeiro exato com $\\pi$, depois arredondado:',
        step3: 'Substituir na área: $A = \\pi r^2$. Atenção: primeiro elevar $r$ ao quadrado, depois multiplicar por $\\pi$:',
        mia_comment: 'Com $r = 5$, perímetro ($\\approx 31$) e área ($\\approx 79$) são números bem diferentes. Se duplicar o raio, o perímetro duplica, mas a área quadruplica. É o efeito do quadrado.',
      },
      sektor: {
        title: 'Área do setor e comprimento de arco',
        context: 'Um braço do chefe varre um setor de raio $12\\,\\text{cm}$ e ângulo ao centro $60°$. Que área e que comprimento de arco resultam disso?',
        step1: 'São dados o raio e o ângulo em graus:',
        step2: 'Determinar a parte do setor face à área total: $\\frac{60°}{360°} = \\frac{1}{6}$:',
        step3: 'Calcular a área do setor, exata com $\\pi$ e depois arredondada:',
        step4: 'Comprimento de arco: a mesma parte $\\frac{1}{6}$ do perímetro $2\\pi r$:',
        mia_comment: 'O truque é sempre o mesmo: parte = $\\frac{\\alpha°}{360°}$. Multiplico-a pela grandeza do círculo completo (área ou perímetro). Funciona para $30°$ tal como para $137{,}5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'Uma piza em 8 fatias',
        desc: 'Uma piza de raio $r$ é cortada em 8 fatias iguais. Cada fatia é um setor de $\\frac{360°}{8} = 45°$ e área $\\frac{\\pi r^2}{8}$. Aplicação concreta em qualquer cozinha.',
      },
      uhr: {
        title: 'Os ponteiros do relógio como setores',
        desc: 'Numa hora, o ponteiro das horas varre $30°$ ($\\frac{360°}{12}$); num minuto, o dos minutos varre $6°$ ($\\frac{360°}{60}$). Pura matemática dos setores, útil também para problemas de ângulos com relógios.',
      },
      riesenrad: {
        title: 'Comprimento de arco da roda gigante',
        desc: 'Uma cabina da roda gigante de Hamburgo, de raio $r$, percorre no tempo $t$ de uma volta completa $T$ o comprimento de arco $b = 2\\pi r \\cdot \\frac{t}{T}$. Daí pode calcular-se também a velocidade da cabina.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'Substituir graus em fórmulas pensadas para radianos',
        correct: 'Antes de $b = \\alpha \\cdot r$, converter primeiro os graus em radianos',
        why: 'A fórmula $b = \\alpha \\cdot r$ só funciona se $\\alpha$ estiver em radianos. Com $\\alpha = 60°$, escrever $b = 60 \\cdot r$ é gravemente errado: o correto seria $\\alpha = \\frac{\\pi}{3} \\approx 1{,}047$, ou seja $b \\approx 1{,}047 \\cdot r$.',
        mia_warning: 'Foi precisamente isso que me irritou ao rodar os sprites: pus 60 em vez de 1,047 e o chefe rodou 57 vezes mais depressa, desaparecendo logo do ecrã!',
      },
      area_vs_circumference: {
        wrong: 'Calcular a área com a fórmula do perímetro ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$: quadrática em $r$',
        why: 'Perímetro e área são grandezas diferentes com unidades diferentes ($\\text{cm}$ contra $\\text{cm}^2$). $2\\pi r$ é linear, $\\pi r^2$ quadrática. Se as confundirmos, todos os cálculos seguintes ficam estragados, e a unidade denuncia-o de imediato.',
      },
    },
  },
};
