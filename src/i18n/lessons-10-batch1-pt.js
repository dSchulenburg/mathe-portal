export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'A Mia conseguiu acertar a curva de salto do Lumi — mas agora está encalhada. No nível 3 de "Hafenlichter", o Lumi tem de aterrar numa plataforma em movimento. "Preciso do momento exato em que a curva de salto atinge a plataforma", diz a Mia ao Tim. Isso significa: ela tem de resolver uma equação quadrática. Não apenas desenhar a função, mas resolvê-la concretamente em ordem a $x$.',
      challenge: 'A Mia tem de calcular quando é que a curva de salto do Lumi interseta a plataforma móvel — isso leva a uma equação quadrática.',
      outro: 'A Mia tem três métodos na sua caixa de ferramentas: a fórmula quadrática, completar o quadrado e fatorizar. Consoante a equação, escolhe o método adequado — e agora o Lumi aterra com precisão em cada plataforma. "É como um canivete suíço", sorri ela.',
    },
    objectives: {
      solve: 'Resolver equações quadráticas com segurança e indicar o conjunto-solução',
      pq_formula: 'Aplicar a fórmula quadrática — incluindo casos especiais (nenhuma solução ou apenas uma)',
      completing_square: 'Compreender e executar a técnica de completar o quadrado como método de resolução',
      factoring: 'Resolver equações quadráticas por fatorização',
    },
    explanation: {
      intro: 'Uma equação quadrática tem a forma geral com o expoente mais alto igual a 2. Ao contrário das equações lineares ($x$ elevado a 1), pode ter zero, uma ou duas soluções. A forma geral é:',
      normal_form: 'Para a fórmula quadrática precisamos da forma normal — ou seja, o coeficiente de $x^2$ tem de ser exatamente 1. Se não for o caso, dividimos toda a equação por $a$:',
      mia_tip: 'Eu memorizo assim: primeiro passar tudo para um lado, para que a direita fique a zero. Depois dividir pelo coeficiente de $x^2$. Só ENTÃO posso usar a fórmula quadrática!',
      pq_formula: 'A fórmula quadrática é a ferramenta universal para equações quadráticas na forma normal. Lês $p$ e $q$ diretamente e substituis:',
      completing_square: 'Completar o quadrado funciona assim: transformas o lado esquerdo num quadrado perfeito. Para isso, somas $(\\frac{p}{2})^2$ a ambos os lados. O resultado é uma expressão da forma $(x + \\frac{p}{2})^2$, que podes resolver facilmente em ordem a $x$.',
      factoring: 'Se conheces (ou consegues adivinhar) as raízes $x_1$ e $x_2$, a equação pode ser escrita como produto de dois parênteses. O produto é zero quando pelo menos um fator é zero:',
    },
    concepts: {
      pq_formula: {
        title: 'Fórmula quadrática',
        desc: 'A ferramenta padrão para equações quadráticas na forma normal. Funciona sempre — só precisas de $p$ (coeficiente de $x$) e $q$ (termo constante).',
      },
      completing_square: {
        title: 'Completar o quadrado',
        desc: 'Completas o lado esquerdo até formar um quadrado perfeito. Especialmente útil quando também precisas de determinar o vértice de uma parábola.',
      },
      discriminant: {
        title: 'Discriminante',
        desc: 'A expressão dentro da raiz na fórmula quadrática: $D > 0$ dá duas soluções, $D = 0$ dá exatamente uma, $D < 0$ significa nenhuma solução real.',
      },
      factoring: {
        title: 'Fatorização',
        desc: 'Decomposição em dois fatores lineares. Funciona de forma especialmente elegante quando as raízes são números inteiros — nesse caso, muitas vezes consegues adivinhá-las.',
      },
    },
    examples: {
      pq_application: {
        title: 'Resolver uma equação com a fórmula quadrática',
        context: 'A Mia calcula quando é que a curva de salto do Lumi atinge a plataforma em $y = 0$.',
        step1: 'A equação já está na forma normal (o coeficiente de $x^2$ é 1):',
        step2: 'Lemos $p$ e $q$ — atenção aos sinais:',
        step3: 'Substituir os valores na fórmula quadrática e calcular passo a passo:',
        step4: 'Duas soluções — o Lumi atinge a plataforma em dois pontos:',
        mia_comment: 'Duas soluções fazem sentido: o Lumi salta em $x = 1$ e aterra em $x = 3$. O troço entre os dois é o voo!',
      },
      completing_square: {
        title: 'Resolver completando o quadrado',
        context: 'O Tim quer resolver a equação sem a fórmula quadrática — como alternativa.',
        step1: 'Partimos da equação na forma normal:',
        step2: 'Primeiro passar o termo constante para o lado direito:',
        step3: 'Agora completar o quadrado: $(\\frac{6}{2})^2 = 9$ é somado a ambos os lados:',
        step4: 'O lado esquerdo é agora um quadrado perfeito — ao extrair a raiz obtemos dois casos:',
        step5: 'Calcular ambas as soluções:',
        mia_comment: 'Mesma equação, mesmas soluções, caminho diferente. Uso o completar do quadrado quando também preciso do vértice da parábola — mato dois coelhos de uma cajadada!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds e parábolas de lançamento',
        desc: 'Cada lançamento no Angry Birds segue uma parábola. A equação $h(t) = 0$ diz-te quando o objeto toca no chão. Os físicos usam a mesma fórmula para movimentos de lançamento reais.',
      },
      breakeven: {
        title: 'Encontrar o ponto de equilíbrio',
        desc: 'Uma empresa quer saber: a partir de que quantidade de unidades temos lucro? A equação $G(x) = 0$ fornece os pontos de equilíbrio — normalmente uma equação quadrática.',
      },
      rocket: {
        title: 'Lançamentos de foguetões',
        desc: 'A altura de um foguetão após o lançamento segue uma função quadrática (enquanto dura o combustível). Quando é que atinge 1000 m? Equação quadrática!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Usar a fórmula quadrática sem ter zero no lado direito',
        correct: 'Primeiro passar tudo para um lado',
        why: 'A fórmula quadrática exige que o lado direito seja zero. Em $x^2 + 3x = 5$ tens primeiro de somar $-5$ a ambos os lados para obteres $x^2 + 3x - 5 = 0$. Caso contrário, $q$ fica errado!',
        mia_warning: 'Tive esse erro no código — a colisão com a plataforma estava completamente errada porque $q$ tinha o sinal trocado. Primeiro, sempre zero à direita!',
      },
      sign_pq: {
        wrong: 'Erro de sinal com $p$ na fórmula quadrática',
        correct: 'Prestar atenção ao sinal negativo antes de $\\frac{p}{2}$',
        why: 'Na fórmula quadrática aparece $-\\frac{p}{2}$. Em $x^2 - 6x + 8 = 0$ temos $p = -6$, portanto $-\\frac{-6}{2} = +3$. Se te esqueceres do sinal negativo, obténs $-3$ em vez de $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'A Mia está a trabalhar no nível do farol de Hafenlichter. O farol projeta um cone de luz sobre o porto, e o Lumi tem de se esconder na sombra. "Preciso de calcular até onde chega o cone de luz com um determinado ângulo", diz a Mia. O Tim aponta para um triângulo retângulo que o cone de luz forma com o chão. "Isto é trigonometria — seno, cosseno e tangente."',
      challenge: 'A Mia precisa do alcance do cone de luz com diferentes ângulos para programar a zona de sombra.',
      outro: 'O farol roda lentamente e o cone de luz desloca-se pelo porto. Graças ao seno e ao cosseno, o código da Mia calcula em tempo real que zonas estão iluminadas. O Lumi esgueira-se de sombra em sombra — o nível ficou mesmo emocionante!',
    },
    objectives: {
      sin_cos_tan: 'Aplicar seno, cosseno e tangente no triângulo retângulo com segurança',
      unit_circle: 'Compreender o círculo trigonométrico e saber ler valores',
      angle_calculations: 'Calcular ângulos e comprimentos de lados com funções trigonométricas',
      real_problems: 'Resolver problemas práticos com trigonometria (alturas, distâncias, ângulos)',
    },
    explanation: {
      intro: 'A trigonometria liga ângulos a comprimentos de lados. Em qualquer triângulo retângulo existem três relações fundamentais — nomeadas em função do ângulo $\\alpha$ que observas:',
      mia_tip: 'A minha regra mnemónica: SOH-CAH-TOA — Seno = Oposto/Hipotenusa, Cosseno = Adjacente/Hipotenusa, Tangente = Oposto/Adjacente. Parece parvo, mas nunca mais se esquece!',
      unit_circle: 'O círculo trigonométrico tem raio 1 e o centro na origem. Para cada ângulo $\\alpha$ fornece diretamente os valores: a coordenada $x$ é $\\cos(\\alpha)$, a coordenada $y$ é $\\sin(\\alpha)$. Assim, verifica-se sempre:',
      special_angles: 'Há ângulos que deves saber de cor: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Dica: no círculo trigonométrico podes ler estes valores geometricamente.',
    },
    concepts: {
      sine: {
        title: 'Seno',
        desc: 'A razão entre o cateto oposto e a hipotenusa. No círculo trigonométrico, $\\sin(\\alpha)$ corresponde à coordenada $y$ do ponto sobre o círculo.',
      },
      cosine: {
        title: 'Cosseno',
        desc: 'A razão entre o cateto adjacente e a hipotenusa. No círculo trigonométrico, $\\cos(\\alpha)$ corresponde à coordenada $x$. O cosseno e o seno estão desfasados de $90°$.',
      },
      tangent: {
        title: 'Tangente',
        desc: 'A razão entre o cateto oposto e o cateto adjacente — ou, de forma equivalente, $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideal para declives e ângulos de inclinação.',
      },
      unit_circle: {
        title: 'Círculo trigonométrico',
        desc: 'Um círculo com raio 1. Cada ponto do círculo tem as coordenadas $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Assim, o seno e o cosseno podem ser definidos para todos os ângulos — não apenas para ângulos agudos.',
      },
    },
    examples: {
      height_tan: {
        title: 'Calcular alturas com a tangente',
        context: 'A Mia mede o ângulo até ao topo do farol: $35°$. A distância ao farol é de $50\\,\\text{m}$.',
        step1: 'Esquema: a distância é o cateto adjacente, a altura procurada é o cateto oposto. Portanto, tangente:',
        step2: 'Isolar a altura $h$ — multiplicar ambos os lados por $50\\,\\text{m}$:',
        step3: 'Calculadora (modo DEG!): substituir $\\tan(35°) \\approx 0{,}7002$ e calcular:',
        mia_comment: 'No jogo isto acontece em tempo real: o ângulo do cone de luz muda e o meu código calcula logo o novo alcance. A tangente é perfeita para isso!',
      },
      unit_circle: {
        title: 'Ler valores no círculo trigonométrico',
        context: 'O Tim quer mostrar à Mia como funciona o círculo trigonométrico — com o exemplo de $60°$.',
        step1: 'Converter o ângulo (opcional): $60°$ corresponde a $\\frac{\\pi}{3}$ em radianos:',
        step2: 'Ler o valor do seno — a coordenada $y$ do ponto no círculo trigonométrico:',
        step3: 'Ler o valor do cosseno — a coordenada $x$:',
        step4: 'O ponto no círculo trigonométrico tem então as coordenadas:',
        mia_comment: 'No círculo trigonométrico vejo o seno e o cosseno como comprimentos. Isso torna tudo muito mais visual do que apenas números numa tabela!',
      },
    },
    realworld: {
      compass: {
        title: 'Navegação e GPS',
        desc: 'O teu smartphone calcula direções com trigonometria. A função atan2 converte coordenadas $x$ e $y$ num ângulo — é assim que o Google Maps sabe em que direção deves caminhar.',
      },
      building_height: {
        title: 'Medir alturas de edifícios',
        desc: 'Arquitetos e topógrafos medem alturas de edifícios sem subirem ao telhado. Com um goniómetro e a tangente, bastam a distância e o ângulo.',
      },
      music: {
        title: 'Sons e ondas sonoras',
        desc: 'Cada som é uma onda sinusoidal. O tom de referência Lá tem 440 oscilações por segundo — descrito por $f(t) = \\sin(880\\pi t)$. A música é trigonometria aplicada!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Confundir seno e cosseno',
        correct: 'Seno = cateto oposto / hipotenusa',
        why: 'O seno corresponde ao cateto oposto (o lado em frente ao ângulo), o cosseno ao cateto adjacente (o lado junto ao ângulo). Se os confundes, obténs um valor incorreto.',
        mia_warning: 'Ainda me acontece às vezes! Desenho o triângulo e identifico os lados em relação ao ângulo. Assim vejo logo qual é o oposto e qual é o adjacente.',
      },
      deg_rad: {
        wrong: 'Modo de ângulo incorreto na calculadora',
        correct: 'Verificar sempre o modo DEG para ângulos em graus',
        why: 'No modo RAD, a calculadora interpreta $90$ como $90$ radianos (aprox. $5156°$), e não como $90°$. $\\sin(90°) = 1$, mas $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Resultado: completamente errado.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter vai ter um modo multijogador. A Mia testa os servidores com 10 jogadores — tudo funciona na perfeição. Mas o Tim avisa: "O que acontece com 100? Com 1000? Se o jogo se tornar viral, o número de jogadores pode duplicar de poucos em poucos dias." A Mia faz as contas e assusta-se: o crescimento exponencial é muito mais rápido do que se pensa.',
      challenge: 'A carga do servidor não cresce linearmente com os jogadores, mas sim exponencialmente. A Mia precisa de prever quando é que os servidores vão ficar sobrecarregados.',
      outro: 'A Mia construiu um modelo que prevê a evolução do número de jogadores. Graças à função exponencial, agora sabe: se o tempo de duplicação for de 3 dias, após 2 semanas vai precisar de 32 vezes mais capacidade de servidor. "Mais vale escalar cedo do que cair tarde", decide.',
    },
    objectives: {
      exponential_functions: 'Reconhecer funções exponenciais e distingui-las de funções lineares',
      growth_factor: 'Determinar o fator de crescimento a partir de percentagens e interpretá-lo',
      half_life: 'Calcular e aplicar meia-vida e tempo de duplicação',
      model_real_world: 'Modelar processos reais de crescimento e decaimento com funções exponenciais',
    },
    explanation: {
      intro: 'No crescimento linear, em cada passo adiciona-se a mesma quantidade. No crescimento exponencial, em cada passo multiplica-se pelo mesmo fator. Parece semelhante — mas conduz a resultados completamente diferentes:',
      growth_factor: 'O fator de crescimento $b$ diz-te tudo: se algo cresce $p\\%$ por unidade de tempo, o fator é maior que 1. Se algo diminui $p\\%$ (decaimento), é menor que 1:',
      mia_tip: 'Funções lineares somam, funções exponenciais multiplicam. Com 10% de crescimento diário, o fator é $b = 1{,}10$ — após 7 dias $1{,}10^7 \\approx 1{,}95$, quase uma duplicação! Isso surpreendeu-me no planeamento do servidor.',
      half_life: 'A meia-vida $t_H$ é o tempo após o qual resta metade. É constante — independentemente de quanto tens no início. É isso que o decaimento exponencial tem de especial:',
      doubling_time: 'O equivalente no crescimento: o tempo de duplicação $t_V$ diz-te ao fim de quanto tempo o valor duplicou. Também permanece sempre igual:',
    },
    concepts: {
      exponential_function: {
        title: 'Função exponencial',
        desc: 'A forma geral: $a$ é o valor inicial, $b$ o fator de crescimento, $t$ o tempo. Decisivo: a variável está no expoente — é isso que a distingue das funções potência.',
      },
      growth_factor: {
        title: 'Fator de crescimento',
        desc: 'Com $p\\%$ de aumento: $b = 1 + \\frac{p}{100}$. Exemplo: 5% de crescimento dá $b = 1{,}05$. Com 12% de diminuição: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Meia-vida',
        desc: 'O tempo até um valor se reduzir a metade. Típico do decaimento radioativo, de medicamentos no corpo ou da descarga de baterias. A meia-vida é independente do valor inicial.',
      },
      euler_base: {
        title: 'Função exponencial natural',
        desc: 'A base $e \\approx 2{,}718$ é especial: a função $e^x$ é a sua própria derivada. Com $k > 0$ cresce, com $k < 0$ decai. Padrão nas ciências naturais.',
      },
    },
    examples: {
      bacteria: {
        title: 'Crescimento bacteriano',
        context: 'Uma cultura de bactérias começa com 500 bactérias e duplica a cada hora.',
        step1: 'Identificar o valor inicial e o fator de crescimento — duplicação significa fator 2:',
        step2: 'Montar a função exponencial — $t$ conta as horas:',
        step3: 'Substituir $t = 5$ (após 5 horas): $2^5 = 32$:',
        step4: 'Após 5 horas há 16.000 bactérias:',
        mia_comment: 'De 500 para 16.000 em apenas 5 horas! Isso mostra porque é que o crescimento exponencial é tão surpreendente. Com os servidores passa-se algo semelhante — o número de jogadores pode crescer mais depressa do que se consegue encomendar servidores.',
      },
      radioactive: {
        title: 'Decaimento radioativo',
        context: 'Um medicamento tem uma meia-vida de 8 dias. Quantidade inicial: 200 g.',
        step1: 'Anotar a meia-vida e o valor inicial:',
        step2: 'Montar a fórmula de decaimento com $t_H = 8$:',
        step3: 'Substituir após 24 dias — são exatamente 3 meias-vidas ($\\frac{24}{8} = 3$):',
        step4: 'Após 24 dias restam apenas 25 g — um oitavo do valor inicial:',
        mia_comment: 'Após cada meia-vida, a quantidade reduz-se a metade: $200 \\to 100 \\to 50 \\to 25$. É sempre assim, independentemente de se começar com 200 g ou com 2 toneladas.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Vídeos virais no TikTok',
        desc: 'Um vídeo viral obtém inicialmente 100 visualizações. Se cada espectador o mostrar a 1,8 pessoas, os números explodem: após 10 rondas já são mais de 35.000 visualizações. Os algoritmos amplificam ainda mais este efeito.',
      },
      battery: {
        title: 'Descarga de bateria',
        desc: 'A bateria do teu telemóvel perde cerca de 5% de carga por hora. Após 14 horas resta aproximadamente metade — não é uma descida linear, mas sim decaimento exponencial.',
      },
      pandemic: {
        title: 'Propagação de pandemias',
        desc: 'A COVID-19 mostrou o que significa "crescimento exponencial": sem medidas, os casos duplicavam a cada 3 dias. Ao fim de um mês, isso seria um fator de $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Modelo linear em vez de exponencial',
        correct: 'Variação percentual = função exponencial',
        why: '"5% de crescimento anual" NÃO é $+5$ por ano, mas sim $\\cdot 1{,}05$ por ano. Com o modelo linear, a quantidade cresce de forma constante; com o exponencial, cresce cada vez mais depressa.',
        mia_warning: 'No início calculei $\\text{Jogadores}(t) = 100 + 50t$. Os números reais ao fim de uma semana eram 3 vezes maiores! O crescimento exponencial é quase sempre subestimado.',
      },
      wrong_growth_factor: {
        wrong: 'Usar a percentagem diretamente como fator',
        correct: 'Fator = $1 + \\frac{p}{100}$',
        why: 'Com 3% de crescimento, o fator é $1{,}03$, e não $3$! Com $b = 3$, o valor triplicaria em vez de crescer 3%. Calcular sempre $1 + \\frac{p}{100}$.',
      },
    },
  },
};
