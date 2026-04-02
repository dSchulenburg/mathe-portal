export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia conseguiu acertar a curva de salto de Lumi — mas agora esta presa. No nivel 3 de "Hafenlichter", Lumi precisa pousar numa plataforma em movimento. "Preciso do momento exato em que a curva de salto atinge a plataforma", diz Mia a Tim. Isso significa: ela precisa resolver uma equacao quadratica. Nao apenas desenhar a funcao, mas resolver concretamente para $x$.',
      challenge: 'Mia precisa calcular quando a curva de salto de Lumi intersecta a plataforma movel — isso leva a uma equacao quadratica.',
      outro: 'Mia tem tres metodos na sua caixa de ferramentas: a formula quadratica, completar o quadrado e fatorar. Dependendo da equacao, ela escolhe o metodo adequado — e agora Lumi pousa com precisao em cada plataforma. "E como um canivete suico", sorri ela.',
    },
    objectives: {
      solve: 'Resolver equacoes quadraticas com seguranca e indicar o conjunto solucao',
      pq_formula: 'Aplicar a formula quadratica — incluindo casos especiais (nenhuma solucao ou apenas uma)',
      completing_square: 'Compreender e realizar a tecnica de completar o quadrado como metodo de resolucao',
      factoring: 'Resolver equacoes quadraticas por fatoracao',
    },
    explanation: {
      intro: 'Uma equacao quadratica tem a forma geral com o expoente mais alto igual a 2. Ao contrario das equacoes lineares ($x$ elevado a 1), pode ter zero, uma ou duas solucoes. A forma geral e:',
      normal_form: 'Para a formula quadratica precisamos da forma normal — ou seja, o coeficiente diante de $x^2$ deve ser exatamente 1. Se nao for o caso, dividimos toda a equacao por $a$:',
      mia_tip: 'Eu memorizo assim: primeiro passar tudo para um lado para que a direita fique zero. Depois dividir pelo coeficiente de $x^2$. So ENTAO posso usar a formula quadratica!',
      pq_formula: 'A formula quadratica e a ferramenta universal para equacoes quadraticas na forma normal. Voce le $p$ e $q$ diretamente e substitui:',
      completing_square: 'Completar o quadrado funciona assim: voce transforma o lado esquerdo num quadrado perfeito. Para isso, soma $(\\frac{p}{2})^2$ em ambos os lados. O resultado e uma expressao da forma $(x + \\frac{p}{2})^2$, que voce pode resolver facilmente para $x$.',
      factoring: 'Se voce conhece (ou consegue adivinhar) as raizes $x_1$ e $x_2$, a equacao pode ser escrita como produto de dois parenteses. O produto e zero quando pelo menos um fator e zero:',
    },
    concepts: {
      pq_formula: {
        title: 'Formula quadratica',
        desc: 'A ferramenta padrao para equacoes quadraticas na forma normal. Funciona sempre — voce so precisa de $p$ (coeficiente de $x$) e $q$ (termo constante).',
      },
      completing_square: {
        title: 'Completar o quadrado',
        desc: 'Voce completa o lado esquerdo ate formar um quadrado perfeito. Especialmente util quando tambem precisa determinar o vertice de uma parabola.',
      },
      discriminant: {
        title: 'Discriminante',
        desc: 'A expressao sob a raiz na formula quadratica: $D > 0$ da duas solucoes, $D = 0$ da exatamente uma, $D < 0$ significa nenhuma solucao real.',
      },
      factoring: {
        title: 'Fatoracao',
        desc: 'Decomposicao em dois fatores lineares. Funciona de forma especialmente elegante quando as raizes sao inteiras — entao muitas vezes voce pode adivinha-las.',
      },
    },
    examples: {
      pq_application: {
        title: 'Resolver uma equacao com a formula quadratica',
        context: 'Mia calcula quando a curva de salto de Lumi atinge a plataforma em $y = 0$.',
        step1: 'A equacao ja esta na forma normal (o coeficiente diante de $x^2$ e 1):',
        step2: 'Lemos $p$ e $q$ — cuidado com os sinais:',
        step3: 'Substituir os valores na formula quadratica e calcular passo a passo:',
        step4: 'Duas solucoes — Lumi atinge a plataforma em dois pontos:',
        mia_comment: 'Duas solucoes fazem sentido: Lumi salta em $x = 1$ e pousa em $x = 3$. O trecho entre os dois e o voo!',
      },
      completing_square: {
        title: 'Resolver completando o quadrado',
        context: 'Tim quer resolver a equacao sem a formula quadratica — como alternativa.',
        step1: 'Partimos da equacao na forma normal:',
        step2: 'Primeiro passar o termo constante para o lado direito:',
        step3: 'Agora completar o quadrado: $(\\frac{6}{2})^2 = 9$ soma-se em ambos os lados:',
        step4: 'O lado esquerdo e agora um quadrado perfeito — extraindo a raiz obtemos dois casos:',
        step5: 'Calcular ambas as solucoes:',
        mia_comment: 'Mesma equacao, mesmas solucoes, caminho diferente. Uso completar o quadrado quando tambem preciso do vertice da parabola — mato dois coelhos com uma cajadada!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds e parabolas de lancamento',
        desc: 'Cada lancamento no Angry Birds segue uma parabola. A equacao $h(t) = 0$ te diz quando o objeto toca o chao. Fisicos usam a mesma formula para movimentos de lancamento reais.',
      },
      breakeven: {
        title: 'Encontrar o ponto de equilibrio',
        desc: 'Uma empresa quer saber: a partir de que quantidade de unidades temos lucro? A equacao $G(x) = 0$ fornece os pontos de equilibrio — geralmente uma equacao quadratica.',
      },
      rocket: {
        title: 'Lancamentos de foguetes',
        desc: 'A altura de um foguete apos o lancamento segue uma funcao quadratica (enquanto dura o combustivel). Quando atinge 1000 m? Equacao quadratica!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Usar a formula quadratica sem ter zero no lado direito',
        correct: 'Primeiro passar tudo para um lado',
        why: 'A formula quadratica exige que o lado direito seja zero. Em $x^2 + 3x = 5$ primeiro voce deve somar $-5$ em ambos os lados para obter $x^2 + 3x - 5 = 0$. Caso contrario, $q$ estara incorreto!',
        mia_warning: 'Tive esse erro no codigo — a colisao com a plataforma estava completamente errada porque $q$ tinha o sinal trocado. Sempre zero a direita primeiro!',
      },
      sign_pq: {
        wrong: 'Erro de sinal com $p$ na formula quadratica',
        correct: 'Prestar atencao ao sinal negativo diante de $\\frac{p}{2}$',
        why: 'Na formula quadratica aparece $-\\frac{p}{2}$. Em $x^2 - 6x + 8 = 0$ temos $p = -6$, entao $-\\frac{-6}{2} = +3$. Se voce esquecer o sinal negativo, obtem $-3$ em vez de $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia trabalha no nivel do farol de Hafenlichter. O farol projeta um cone de luz sobre o porto, e Lumi precisa se esconder na sombra. "Preciso calcular ate onde o cone de luz alcanca num determinado angulo", diz Mia. Tim aponta para um triangulo retangulo que o cone de luz forma com o chao. "Isso e trigonometria — seno, cosseno e tangente."',
      challenge: 'Mia precisa do alcance do cone de luz em diferentes angulos para programar a zona de sombra.',
      outro: 'O farol gira lentamente e o cone de luz desloca-se pelo porto. Gracas ao seno e cosseno, o codigo de Mia calcula em tempo real quais areas estao iluminadas. Lumi esgueira-se de sombra em sombra — o nivel ficou realmente emocionante!',
    },
    objectives: {
      sin_cos_tan: 'Aplicar seno, cosseno e tangente no triangulo retangulo com seguranca',
      unit_circle: 'Compreender o circulo trigonometrico e saber ler valores',
      angle_calculations: 'Calcular angulos e comprimentos de lados com funcoes trigonometricas',
      real_problems: 'Resolver problemas praticos com trigonometria (alturas, distancias, angulos)',
    },
    explanation: {
      intro: 'A trigonometria conecta angulos com comprimentos de lados. Em todo triangulo retangulo existem tres relacoes fundamentais — nomeadas segundo o angulo $\\alpha$ que observas:',
      mia_tip: 'Minha regra mnemonica: SOH-CAH-TOA — Seno = Oposto/Hipotenusa, Cosseno = Adjacente/Hipotenusa, Tangente = Oposto/Adjacente. Parece bobo, mas nunca se esquece!',
      unit_circle: 'O circulo trigonometrico tem raio 1 e seu centro na origem. Para cada angulo $\\alpha$ fornece diretamente os valores: a coordenada $x$ e $\\cos(\\alpha)$, a coordenada $y$ e $\\sin(\\alpha)$. Assim sempre se cumpre:',
      special_angles: 'Certos angulos voce deve saber de cor: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Dica: no circulo trigonometrico voce pode ler esses valores geometricamente.',
    },
    concepts: {
      sine: {
        title: 'Seno',
        desc: 'A relacao entre o cateto oposto e a hipotenusa. No circulo trigonometrico, $\\sin(\\alpha)$ corresponde a coordenada $y$ do ponto sobre o circulo.',
      },
      cosine: {
        title: 'Cosseno',
        desc: 'A relacao entre o cateto adjacente e a hipotenusa. No circulo trigonometrico, $\\cos(\\alpha)$ corresponde a coordenada $x$. Cosseno e seno estao defasados de $90°$.',
      },
      tangent: {
        title: 'Tangente',
        desc: 'A relacao entre o cateto oposto e o cateto adjacente — ou equivalentemente $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideal para inclinacoes e angulos de inclinacao.',
      },
      unit_circle: {
        title: 'Circulo trigonometrico',
        desc: 'Um circulo com raio 1. Cada ponto do circulo tem as coordenadas $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Assim seno e cosseno podem ser definidos para todos os angulos — nao apenas para angulos agudos.',
      },
    },
    examples: {
      height_tan: {
        title: 'Calcular alturas com a tangente',
        context: 'Mia mede o angulo ate o topo do farol: $35°$. A distancia ao farol e de $50\\,\\text{m}$.',
        step1: 'Esquema: a distancia e o cateto adjacente, a altura procurada e o cateto oposto. Entao tangente:',
        step2: 'Isolar a altura $h$ — multiplicar ambos os lados por $50\\,\\text{m}$:',
        step3: 'Calculadora (modo DEG!): $\\tan(35°) \\approx 0{,}7002$ substituir e calcular:',
        mia_comment: 'No jogo isso acontece em tempo real: o angulo do cone de luz muda e meu codigo calcula instantaneamente o novo alcance. A tangente e perfeita para isso!',
      },
      unit_circle: {
        title: 'Ler valores no circulo trigonometrico',
        context: 'Tim quer mostrar a Mia como funciona o circulo trigonometrico — com o exemplo de $60°$.',
        step1: 'Converter angulo (opcional): $60°$ corresponde a $\\frac{\\pi}{3}$ em radianos:',
        step2: 'Ler o valor do seno — a coordenada $y$ do ponto no circulo trigonometrico:',
        step3: 'Ler o valor do cosseno — a coordenada $x$:',
        step4: 'O ponto no circulo trigonometrico tem entao as coordenadas:',
        mia_comment: 'No circulo trigonometrico vejo seno e cosseno como comprimentos. Isso torna tudo muito mais visual do que apenas numeros numa tabela!',
      },
    },
    realworld: {
      compass: {
        title: 'Navegacao e GPS',
        desc: 'Teu smartphone calcula direcoes com trigonometria. A funcao atan2 converte coordenadas $x$ e $y$ num angulo — assim o Google Maps sabe em que direcao deves caminhar.',
      },
      building_height: {
        title: 'Medir alturas de edificios',
        desc: 'Arquitetos e topografos medem alturas de edificios sem subir ao telhado. Com um goniometro e a tangente, bastam a distancia e o angulo.',
      },
      music: {
        title: 'Sons e ondas sonoras',
        desc: 'Cada som e uma onda sinusoidal. O tom de referencia La tem 440 oscilacoes por segundo — descrito por $f(t) = \\sin(880\\pi t)$. A musica e trigonometria aplicada!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Confundir seno e cosseno',
        correct: 'Seno = cateto oposto / hipotenusa',
        why: 'O seno corresponde ao cateto oposto (o lado em frente ao angulo), o cosseno ao cateto adjacente (o lado junto ao angulo). Se os confundes, obterns um valor incorreto.',
        mia_warning: 'Ainda me acontece as vezes! Desenho o triangulo e rotulo os lados em relacao ao angulo. Entao vejo imediatamente qual e o oposto e qual e o adjacente.',
      },
      deg_rad: {
        wrong: 'Modo de angulo incorreto na calculadora',
        correct: 'Sempre verificar o modo DEG para angulos em graus',
        why: 'No modo RAD, a calculadora interpreta $90$ como $90$ radianos (aprox. $5156°$), nao como $90°$. $\\sin(90°) = 1$, mas $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Resultado: completamente errado.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter vai ter um modo multijogador. Mia testa os servidores com 10 jogadores — tudo funciona perfeitamente. Mas Tim avisa: "O que acontece com 100? Com 1000? Se o jogo se tornar viral, o numero de jogadores pode duplicar a cada poucos dias." Mia faz as contas e assusta-se: o crescimento exponencial e muito mais rapido do que se pensa.',
      challenge: 'A carga do servidor nao cresce linearmente com os jogadores, mas exponencialmente. Mia precisa prever quando os servidores estarao sobrecarregados.',
      outro: 'Mia construiu um modelo que preve a evolucao do numero de jogadores. Gracas a funcao exponencial agora sabe: se o tempo de duplicacao for de 3 dias, apos 2 semanas precisara de 32 vezes mais capacidade de servidor. "Melhor escalar cedo do que cair tarde", decide.',
    },
    objectives: {
      exponential_functions: 'Reconhecer funcoes exponenciais e distingui-las de funcoes lineares',
      growth_factor: 'Determinar o fator de crescimento a partir de percentagens e interpreta-lo',
      half_life: 'Calcular e aplicar meia-vida e tempo de duplicacao',
      model_real_world: 'Modelar processos reais de crescimento e decaimento com funcoes exponenciais',
    },
    explanation: {
      intro: 'No crescimento linear, em cada passo adiciona-se a mesma quantidade. No crescimento exponencial, em cada passo multiplica-se pelo mesmo fator. Parece semelhante — mas conduz a resultados completamente diferentes:',
      growth_factor: 'O fator de crescimento $b$ diz-te tudo: se algo cresce $p\\%$ por unidade de tempo, o fator e maior que 1. Se algo diminui $p\\%$ (decaimento), e menor que 1:',
      mia_tip: 'Funcoes lineares somam, funcoes exponenciais multiplicam. Com 10% de crescimento diario, o fator e $b = 1{,}10$ — apos 7 dias $1{,}10^7 \\approx 1{,}95$, quase uma duplicacao! Isso surpreendeu-me no planeamento do servidor.',
      half_life: 'A meia-vida $t_H$ e o tempo apos o qual resta metade. E constante — independentemente de quanto comecas. Isso e o especial do decaimento exponencial:',
      doubling_time: 'O equivalente no crescimento: o tempo de duplicacao $t_V$ diz-te apos quanto tempo o valor duplicou. Tambem permanece sempre igual:',
    },
    concepts: {
      exponential_function: {
        title: 'Funcao exponencial',
        desc: 'A forma geral: $a$ e o valor inicial, $b$ o fator de crescimento, $t$ o tempo. Decisivo: a variavel esta no expoente — isso faz a diferenca em relacao as funcoes potenciais.',
      },
      growth_factor: {
        title: 'Fator de crescimento',
        desc: 'Com $p\\%$ de aumento: $b = 1 + \\frac{p}{100}$. Exemplo: 5% de crescimento da $b = 1{,}05$. Com 12% de diminuicao: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Meia-vida',
        desc: 'O tempo ate que um valor se reduz a metade. Tipico do decaimento radioativo, medicamentos no corpo ou descarga de baterias. A meia-vida e independente do valor inicial.',
      },
      euler_base: {
        title: 'Funcao exponencial natural',
        desc: 'A base $e \\approx 2{,}718$ e especial: a funcao $e^x$ e a sua propria derivada. Com $k > 0$ cresce, com $k < 0$ decai. Padrao nas ciencias naturais.',
      },
    },
    examples: {
      bacteria: {
        title: 'Crescimento bacteriano',
        context: 'Uma cultura de bacterias comeca com 500 bacterias e duplica a cada hora.',
        step1: 'Identificar valor inicial e fator de crescimento — duplicacao significa fator 2:',
        step2: 'Montar a funcao exponencial — $t$ conta as horas:',
        step3: 'Substituir $t = 5$ (apos 5 horas): $2^5 = 32$:',
        step4: 'Apos 5 horas ha 16.000 bacterias:',
        mia_comment: 'De 500 para 16.000 em apenas 5 horas! Isso mostra por que o crescimento exponencial e tao surpreendente. Com servidores acontece algo semelhante — o numero de jogadores pode crescer mais rapido do que se consegue encomendar servidores.',
      },
      radioactive: {
        title: 'Decaimento radioativo',
        context: 'Um medicamento tem meia-vida de 8 dias. Quantidade inicial: 200 g.',
        step1: 'Anotar meia-vida e valor inicial:',
        step2: 'Montar a formula de decaimento com $t_H = 8$:',
        step3: 'Substituir apos 24 dias — sao exatamente 3 meias-vidas ($\\frac{24}{8} = 3$):',
        step4: 'Apos 24 dias restam apenas 25 g — um oitavo do valor inicial:',
        mia_comment: 'Apos cada meia-vida, a quantidade reduz-se a metade: $200 \\to 100 \\to 50 \\to 25$. E sempre assim, independentemente de comecar com 200 g ou 2 toneladas.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Videos virais no TikTok',
        desc: 'Um video viral obtem inicialmente 100 visualizacoes. Se cada espectador o mostra a 1,8 pessoas, os numeros explodem: apos 10 rondas ja sao mais de 35.000 visualizacoes. Os algoritmos amplificam ainda mais este efeito.',
      },
      battery: {
        title: 'Descarga de bateria',
        desc: 'A bateria do teu telemovel perde aproximadamente 5% de carga por hora. Apos 14 horas resta aproximadamente metade — nao e uma queda linear, mas decaimento exponencial.',
      },
      pandemic: {
        title: 'Propagacao de pandemias',
        desc: 'A COVID-19 mostrou o que significa "crescimento exponencial": sem medidas, os casos duplicavam a cada 3 dias. Apos um mes isso seria um fator de $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Modelo linear em vez de exponencial',
        correct: 'Variacao percentual = funcao exponencial',
        why: '"5% de crescimento anual" NAO e $+5$ por ano, mas sim $\\cdot 1{,}05$ por ano. Com o modelo linear a quantidade cresce de forma constante, com o exponencial cresce cada vez mais rapido.',
        mia_warning: 'No inicio calculei $\\text{Jogadores}(t) = 100 + 50t$. Os numeros reais apos uma semana eram 3 vezes maiores! O crescimento exponencial quase sempre se subestima.',
      },
      wrong_growth_factor: {
        wrong: 'Usar a percentagem diretamente como fator',
        correct: 'Fator = $1 + \\frac{p}{100}$',
        why: 'Com 3% de crescimento, o fator e $1{,}03$, nao $3$! Com $b = 3$ o valor triplicaria em vez de crescer 3%. Sempre calcular $1 + \\frac{p}{100}$.',
      },
    },
  },
};
