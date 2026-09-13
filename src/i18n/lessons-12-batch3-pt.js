export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'O Amir está a construir um modelo de previsão para o número de utilizadores de uma app de aprendizagem. As primeiras semanas parecem fantásticas: todas as semanas mais 40 por cento. Ele extrapola e obtém para o próximo ano mais utilizadores do que há pessoas com smartphone. «O teu modelo não está errado», diz a professora dele, «só que já está fora do seu domínio de validade. O que acontece quando metade de todos os utilizadores possíveis já tem a app?» O Amir percebe: esqueceu-se de que o mundo é finito.',
      challenge: 'Como se modela um crescimento que tem um limite? E como se distinguem dois tipos de limite: um contra o qual se trava desde o início, e outro em direção ao qual primeiro se acelera e depois se trava?',
      outro: 'O Amir trabalha agora com dois modelos em vez de um. Crescimento limitado, quando o aumento depende só do espaço livre que resta: arrefecimento, saturação, carregamento. Crescimento logístico, quando o aumento precisa também da população existente: contágio, recomendação, populações. E sabe agora o que significa o ponto de inflexão: não o fim do crescimento, mas o seu momento mais rápido.',
    },
    objectives: {
      grenzen: 'Reconhecer quando um modelo exponencial chega ao seu limite, e porque é que antes disso estava mesmo assim certo',
      beschraenkt: 'Estabelecer e analisar o crescimento limitado $N(t) = K - (K - N_0)e^{-kt}$',
      logistisch: 'Determinar o modelo logístico $N(t) = \\frac{K}{1 + a e^{-rt}}$ a partir da capacidade e do valor inicial',
      wendepunkt: 'Calcular o ponto de inflexão e interpretá-lo como o instante de maior aumento',
    },
    explanation: {
      intro: 'O crescimento exponencial não conhece limites. Na realidade, porém, há quase sempre um: o lago acaba por ficar cheio, todos os clientes possíveis já têm o produto, a chávena chegou à temperatura ambiente. Este limite superior chama-se capacidade $K$. Há dois modelos que descrevem como é atingido, e a diferença entre eles não é um pormenor: é a questão de a curva ter ou não um ponto de inflexão.',
      beschraenkt: 'No crescimento limitado, o aumento depende apenas de quanto ainda falta. No início é quando falta mais, por isso o aumento é maior no início e vai ficando cada vez menor. A curva aproxima-se do limite por baixo, sem nunca o atingir:',
      amir_tip: 'Distingo os dois modelos com uma única pergunta: o aumento precisa daquilo que já existe? No café que arrefece, não: o calor vai-se embora independentemente de quanto ainda há, só conta a diferença. Num vídeo viral, sim: sem pessoas que o partilhem, não acontece nada. O primeiro é limitado, o segundo é logístico.',
      logistisch: 'No crescimento logístico, a população entra como segundo fator. No início há muito espaço, mas quase não há indivíduos: o crescimento é lento. No fim há muitos indivíduos, mas já não há espaço: de novo lento. Pelo meio fica o máximo. Daí resulta a típica forma em S:',
      dgl: 'A diferença vê-se com mais clareza na equação diferencial. Lê-se como uma frase: o aumento é proporcional à população **vezes** a parte ainda livre. Se faltar um dos dois fatores, o crescimento para:',
      wendepunkt: 'Desta equação resulta o indicador mais importante do modelo. O produto da população pelo espaço livre restante é máximo exatamente quando os dois são iguais, ou seja, a metade da capacidade. É aí que fica o ponto de inflexão, e é aí que a taxa de aumento é máxima:',
    },
    concepts: {
      kapazitaet: {
        title: 'Capacidade $K$',
        desc: 'O limite superior do qual a população se aproxima sem o atingir. É o limite para $t \\to \\infty$ e aparece como parâmetro em ambos os modelos. Sem uma capacidade com sentido, nenhum dos dois modelos é aplicável.',
      },
      beschraenkt: {
        title: 'Crescimento limitado',
        desc: 'O aumento depende apenas do espaço livre restante $K - N$. Por isso é máximo logo no início e depois diminui continuamente. A curva não tem ponto de inflexão: é côncava desde o início. Típico do arrefecimento, do carregamento e da saturação.',
      },
      logistisch: {
        title: 'Crescimento logístico',
        desc: 'O aumento depende da população E do espaço livre restante. Daí nasce a curva em S: primeiro devagar, depois depressa, depois de novo devagar. O parâmetro $a = \\frac{K - N_0}{N_0}$ indica quantos lugares livres há inicialmente para cada indivíduo existente.',
      },
      wendepunkt: {
        title: 'Ponto de inflexão em $K/2$',
        desc: 'Sempre a metade da capacidade, independentemente de $r$ e de $N_0$. Aí a taxa de aumento é máxima, nomeadamente $\\frac{rK}{4}$. Depois disso a população continua a crescer, mas mais devagar: é a confusão mais frequente em questões de interpretação.',
      },
    },
    examples: {
      seerosen: {
        title: 'Estabelecer o modelo logístico a partir da capacidade e do valor inicial',
        context: 'Num lago com espaço para 500 nenúfares crescem inicialmente 50 plantas.',
        step1: 'Primeiro o parâmetro $a$. Obtém-se diretamente a partir da capacidade e do valor inicial:',
        step2: 'Com isto o modelo está feito. A taxa de crescimento $r = 0{,}4$ por semana vem da série de medições:',
        step3: 'Verificação: substitui $t = 0$. Se aqui não sair o valor inicial, $a$ está errado:',
        step4: 'O instante de inflexão resulta de $a\\,e^{-rt} = 1$: uma equação logarítmica:',
        amir_comment: 'A verificação do passo 3 faço-a sempre. Custa dez segundos e apanha o erro mais frequente: $a = \\frac{K}{N_0}$ em vez de $a = \\frac{K - N_0}{N_0}$. No meu caso teria sido 10 em vez de 9: parece inofensivo, mas desloca a curva toda.',
      },
      abkuehlung: {
        title: 'Crescimento limitado no arrefecimento',
        context: 'O Kai deixa um café a 80 °C numa sala a 20 °C.',
        step1: 'Aqui o limite é a temperatura ambiente, e a diferença até ela é inicialmente de 60 °C:',
        step2: 'Verificação em $t = 0$: tem de sair a temperatura inicial:',
        step3: 'Ao fim de dez minutos resta apenas cerca de um terço da diferença:',
        step4: 'A longo prazo fica a temperatura ambiente, que matematicamente nunca é atingida:',
        kai_comment: 'Com o café é conhecimento do dia a dia: o primeiro minuto é o que dá mais, depois fica lento. É exatamente isso o crescimento limitado. E é a razão por que soprar ajuda no início e ao fim de dez minutos já não adianta nada.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Epidemias',
        desc: 'As novas infeções precisam de infetados (que contagiam) e de suscetíveis (que podem ser contagiados). O ponto de inflexão é o dia com mais novas infeções: o número total continua a subir depois disso, só que mais devagar.',
      },
      produkt: {
        title: 'Difusão de produtos e apps',
        desc: 'Os novos utilizadores chegam sobretudo através de utilizadores existentes. No início faltam os que recomendam, no fim faltam os que ainda não têm. Os departamentos de marketing também chamam à curva em S curva de adoção.',
      },
      abkuehlung: {
        title: 'Arrefecimento e carregamento',
        desc: 'A lei do arrefecimento de Newton e a curva de carregamento de uma bateria são crescimento limitado. Aqui só conta a distância ao estado final: é por isso que uma bateria carrega os últimos por cento de forma tão exasperantemente lenta.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'A partir do ponto de inflexão a população diminui',
        correct: 'A partir do ponto de inflexão diminui a taxa de aumento; a população continua a subir',
        why: 'O ponto de inflexão é o zero da segunda derivada, não da primeira. Aí $N\'$ tem um máximo, ou seja, é particularmente grande, e positivo. A função logística é estritamente crescente em todo o seu domínio e nunca decresce. Quem aqui confunde população e aumento inverte a afirmação por completo.',
        amir_warning: 'É o erro de interpretação número um e custa pontos em qualquer exame nacional. O meu truque: formulo a resposta sempre com a palavra «por». O que muda por semana? O aumento. O que existe no total? A população. Assim que aparece a palavra «por», estou a falar de $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'O crescimento logístico é crescimento exponencial cortado em $K$',
        correct: 'A curva logística trava gradualmente e nunca chega a atingir $K$',
        why: 'Um modelo exponencial cortado teria um bico: não seria diferenciável no ponto de corte e atingiria o limite exatamente num tempo finito. A função logística, pelo contrário, é suave em todo o lado e aproxima-se de $K$ apenas assintoticamente. A diferença não é cosmética: o modelo cortado prevê um instante final concreto, o logístico não prevê nenhum.',
        amir_warning: 'A única coisa certa nessa ideia é a fase inicial: enquanto $N$ é pequeno em relação a $K$, o fator de travagem é quase $1$ e as duas curvas ficam praticamente sobrepostas. A curva exponencial é a tangente inicial da logística: é por isso que o meu primeiro modelo se ajustava tão bem às primeiras semanas.',
      },
    },
  },
};
