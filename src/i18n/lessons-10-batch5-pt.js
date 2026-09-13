export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'A Mia está a construir para «Luzes do Porto» um minijogo de parque de estacionamento: o Lumi estaciona a carrinha de entregas e tem de pagar quando a vai buscar. A Mia programa a tarifa: 2,00 € até uma hora, depois 3,50 €. Ao testar, o Tim repara numa coisa: «Se chegares um segundo atrasado, de repente custa mais 1,50 €. Isto é um bug?» A Mia olha para o gráfico. Não está avariado: dá um salto. E é precisamente esse salto que tem um nome.',
      challenge: 'Quando é que uma função tem um salto verdadeiro, quando é que lhe falta apenas um único ponto, e quando é que foge para o infinito? A Mia tem de distinguir com segurança os três casos para decidir que tarifas pode sequer construir assim.',
      outro: 'Agora a Mia consegue verificar em qualquer ponto suspeito se uma função é contínua: limite à esquerda, limite à direita, valor da função. Se os três coincidirem, está tudo bem. E sabe que descontinuidades pode reparar e quais não. A tarifa do parque, já agora, continua descontínua. Não é um bug, é uma decisão de negócio.',
    },
    objectives: {
      anschaulich: 'Reconhecer a continuidade de forma intuitiva e saber porque é que «desenhar sem levantar o lápis» não chega como definição',
      definition: 'Verificar a continuidade num ponto através do limite: $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Distinguir com segurança descontinuidade removível, descontinuidade de salto e polo',
      zwischenwertsatz: 'Provar a existência de um zero com o teorema do valor intermédio',
    },
    explanation: {
      intro: 'Intuitivamente, contínua quer dizer: consegues desenhar o gráfico sem levantar o lápis. É uma boa primeira ideia, mas não é uma definição com que se possa calcular. E uma função à qual falta exatamente um único ponto? Na prática não levantas o lápis e, mesmo assim, a função não é contínua nesse ponto. Para uma definição sólida precisas do limite do cálculo diferencial.',
      definition: 'Uma função $f$ diz-se contínua no ponto $x_0$ quando o valor da função e o limite nesse ponto não se contradizem:',
      drei_bedingungen: 'Nesta única linha estão três exigências. As três têm de ser cumpridas, e em cada contraexemplo falha exatamente uma delas:',
      mia_tip: 'Verifico sempre por esta ordem: primeiro, o ponto pertence sequer ao domínio? Se não pertencer, já não pode ser contínua. Segundo, da esquerda e da direita aproximo-me do mesmo valor? Terceiro, esse valor é aquele que a função realmente toma nesse ponto? Três vistos, pronto.',
      einseitig: 'Em funções definidas por ramos tens de olhar para o ponto de junção separadamente de cada lado. O limite à esquerda e o limite à direita não podem ser diferentes, e ambos têm de coincidir com o valor da função:',
      arten: 'Há exatamente três maneiras de a continuidade falhar, e não são igualmente graves. Na descontinuidade removível falta apenas um ponto; podes acrescentá-lo e fica tudo reparado. Na descontinuidade de salto existem os dois limites laterais, mas são diferentes: aqui acrescentar um ponto não ajuda. No polo os limites fogem para o infinito e não há sequer um valor para acrescentar:',
      zwischenwertsatz: 'A continuidade não é só uma propriedade que se verifica: é uma ferramenta. O teorema do valor intermédio diz: uma função contínua que começa abaixo de zero e termina acima de zero tem de passar pelo zero pelo caminho. Não o pode saltar, porque saltar é justamente o que não pode fazer:',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Continuidade num ponto',
        desc: 'O limite no ponto coincide com o valor da função. Três condições numa só equação: o valor da função existe, o limite existe, e são iguais. Se falhar uma delas, a função é descontínua nesse ponto.',
      },
      einseitig: {
        title: 'Limites laterais',
        desc: 'Nos pontos de junção de funções definidas por ramos verificas a esquerda e a direita em separado. Se os dois valores forem diferentes, há um salto, e a altura do salto é exatamente a sua diferença.',
      },
      arten: {
        title: 'Os três tipos de descontinuidade',
        desc: 'Descontinuidade removível: o limite existe, o valor da função falta; é reparável. Descontinuidade de salto: os dois limites laterais existem, mas são diferentes; não é reparável. Polo: os limites fogem para o infinito; muito menos reparável.',
      },
      zwischenwertsatz: {
        title: 'Teorema do valor intermédio',
        desc: 'Se $f$ é contínua em $[a;b]$ e muda de sinal nos extremos, então há entre eles pelo menos um zero. O teorema garante a existência, não a unicidade nem o sítio exato onde está.',
      },
    },
    examples: {
      luecke: {
        title: 'Eliminar uma descontinuidade removível',
        context: 'A Mia tropeça numa expressão que em $x = 1$ dá $\\frac{0}{0}$.',
        step1: 'O denominador anula-se em $x = 1$, por isso o ponto não pertence ao domínio:',
        step2: 'Fatorizar o numerador e simplificar. É permitido desde que $x \\neq 1$:',
        step3: 'A expressão simplificada pode ser calculada sem problemas em $x = 1$: esse é o limite:',
        step4: 'Agora acrescentas o ponto em falta. A função completada chama-se prolongamento por continuidade:',
        mia_comment: 'Ao início o $\\frac{0}{0}$ assustou-me: pensei que havia alguma coisa avariada. Mas não há. Quer só dizer: simplifica primeiro, pergunta depois. Avariado seria $\\frac{1}{0}$, aí há um zero verdadeiro sozinho no denominador.',
      },
      sprung: {
        title: 'Medir uma descontinuidade de salto',
        context: 'A tarifa do parque de estacionamento do minijogo da Mia, e a pergunta de quanto pode custar um segundo.',
        step1: 'A tarifa é definida por ramos, e o ponto de junção fica em uma hora:',
        step2: 'Aproximar-se do ponto de junção pela esquerda e pela direita e comparar os valores:',
        step3: 'Os dois limites existem, mas são diferentes: é essa a definição de descontinuidade de salto:',
        step4: 'A altura do salto é a sua diferença. Aqui não é uma falha, é a própria tarifa:',
        kai_comment: 'São exatamente saltos destes que explicam porque é que tarifários de telemóvel e escalões de portes irritam as pessoas. Matematicamente não há nada de errado, mas quem chega um segundo atrasado paga o escalão seguinte inteiro. As tarifas contínuas cobram ao segundo. Isso é uma decisão, não uma fórmula.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Tarifas por escalões',
        desc: 'Parque de estacionamento, portes de correio, contrato de telemóvel: em todo o lado onde se cobra por unidades iniciadas, a função preço é descontínua. Cada escalão é uma descontinuidade de salto, e cada uma delas é uma decisão consciente do fornecedor.',
      },
      temperatur: {
        title: 'Grandezas físicas',
        desc: 'Temperatura, posição, velocidade: estas grandezas não podem saltar, porque um salto significaria uma quantidade infinita de energia em tempo nulo. Por isso os modelos físicos são quase sempre funções contínuas.',
      },
      nullstelle: {
        title: 'Encontrar zeros numericamente',
        desc: 'Qualquer calculadora usa o teorema do valor intermédio: procura um intervalo com mudança de sinal e divide-o ao meio vezes sem conta. Sem continuidade este método não valeria nada: o zero podia simplesmente ser saltado.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'Se $f(x_0)$ existe, então $f$ também é contínua nesse ponto',
        correct: 'Além disso, o valor da função tem de coincidir com o limite',
        why: 'Uma função com salto está definida no ponto de salto: tem aí um valor da função perfeitamente normal. Mesmo assim é descontínua, porque o limite de um dos lados dá outra coisa. Estar definida é só a primeira de três condições, não é já a resposta.',
        mia_warning: 'Foi o que me aconteceu com o parque. Em exatamente uma hora o preço está definido: 2,00 €. Pensei que com isso estava tudo liso. O gráfico salta na mesma, só que um segundo depois.',
      },
      pol_ist_hebbar: {
        wrong: 'Qualquer ponto fora do domínio pode ser preenchido com um valor adequado',
        correct: 'Só se o limite bilateral existir e for finito',
        why: 'Em $\\frac{1}{x}$ a função tende para $-\\infty$ à esquerda e para $+\\infty$ à direita. Não há nenhum número que se possa usar: escolhas o que escolheres, o gráfico foge ao lado para o infinito. A regra prática para frações: se o fator crítico se simplifica, a descontinuidade é removível; se fica no denominador, é um polo.',
        mia_warning: 'Agora verifico sempre com dois números: substituo $0{,}001$ e $-0{,}001$. Se saírem dois valores parecidos, a descontinuidade é removível. Se saírem $1000$ e $-1000$, é um polo, e aí não há nada a fazer.',
      },
    },
  },
};
