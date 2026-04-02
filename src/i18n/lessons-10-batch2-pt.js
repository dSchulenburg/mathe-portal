export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia olha fixamente para o ecra. A arquitetura de niveis de "Hafenlichter" precisa de objetos 3D — armazens, gruas, contentores. Tim modelou os meshes, mas Lumi pergunta: "Quanta memoria precisa cada hitbox?" Mia sorri: "Para isso precisamos de formulas de volume."',
      challenge: 'Calcula volumes e superficies de piramides, cones e esferas. Ajuda Mia a construir as hitboxes 3D perfeitas para o seu bairro portuario!',
      outro: 'Os corpos 3D estao calculados, as hitboxes encaixam. Tim testa o nivel da grua e exclama: "As colisoes finalmente parecem realistas!" Mia reclina-se — a geometria melhora os jogos.',
    },
    objectives: {
      volume_pyramid: 'Calcular o volume de piramides com a formula do terco',
      volume_cone_sphere: 'Determinar com seguranca os volumes de cones e esferas',
      surface_area: 'Aplicar formulas de superficie e interpretar os resultados',
      apply_3d: 'Transferir calculos de corpos para problemas do quotidiano e design de jogos',
    },
    explanation: {
      intro: 'Corpos tridimensionais tem volume (conteudo espacial) e superficie. Em piramides e cones ha um fator decisivo na formula: o fator de um terco $\\frac{1}{3}$. Ele deve-se ao facto de estes corpos "terminarem em ponta" — preenchem apenas um terco do prisma ou cilindro que os contem.',
      cone: 'Um cone e como uma "piramide redonda" — a sua base e um circulo com raio $r$. A formula tem a mesma estrutura: um terco vezes area da base vezes altura, so que a area da base e $\\pi r^2$.',
      mia_tip: 'Mia: "Eu memorizo assim: a piramide e o cone sao os irmaos modestos do prisma e do cilindro — ocupam apenas um terco do espaco!"',
      sphere: 'A esfera e o caso especial: nao tem base nem altura no sentido classico. O seu volume depende apenas do raio. Arquimedes demonstrou que uma esfera preenche exatamente $\\frac{2}{3}$ do cilindro que a contem — dai se deduz a formula.',
    },
    concepts: {
      pyramid: {
        title: 'Volume da piramide',
        desc: 'Uma piramide tem um terco do volume de um prisma com a mesma base e altura. A base pode ser um retangulo, triangulo ou qualquer poligono.',
      },
      cone: {
        title: 'Volume do cone',
        desc: 'O cone comporta-se em relacao ao cilindro como a piramide em relacao ao prisma: preenche exatamente um terco. A sua base circular torna-o especialmente simetrico.',
      },
      sphere: {
        title: 'Volume da esfera',
        desc: 'A esfera descreve-se completamente pelo seu raio. O $\\frac{4}{3}$ na formula provem da integracao — ou da genial demonstracao de Arquimedes.',
      },
    },
    examples: {
      icecream: {
        title: 'Calcular um cone de gelado',
        context: 'Um cone de gelado tem forma de cone com raio $r = 3$ cm e altura $h = 12$ cm. Quanto gelado cabe?',
        step1: 'Identificar dados: o cone tem $r = 3$ cm e $h = 12$ cm.',
        step2: 'Aplicar a formula do cone: substituimos em $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ e calculamos primeiro o parentese.',
        step3: 'Resultado: o cone comporta aproximadamente $113{,}1\\,\\text{cm}^3$ de gelado — um pouco mais que um decilitro.',
        mia_comment: 'Mia: "Uau, um cone nao leva assim tanto! Por isso e que empilham sempre uma bola por cima."',
      },
      hitbox: {
        title: 'Hitbox esferica',
        context: 'Em "Hafenlichter" uma boia deve ter uma hitbox esferica com volume $V = 904{,}8\\,\\text{cm}^3$. Qual deve ser o raio?',
        step1: 'Dado: o volume da esfera e $V = 904{,}8\\,\\text{cm}^3$. Procurado: o raio $r$.',
        step2: 'Isolar na formula: resolvemos $V = \\frac{4}{3} \\pi r^3$ para $r^3$ dividindo por $\\frac{4}{3}\\pi$.',
        step3: 'Calcular: $r^3 \\approx 215{,}9$ — agora extraimos a raiz cubica.',
        step4: 'Resultado: $r \\approx 6{,}0$ cm. A hitbox precisa de um raio de 6 cm.',
        mia_comment: 'Mia: "Calcular ao contrario e rotina no design de jogos — sabes o que queres e tens de encontrar os parametros."',
      },
    },
    realworld: {
      packaging: {
        title: 'Design de embalagens',
        desc: 'Latas de bebidas, conservas, garrafas — em todas ha calculo de cilindros. Os fabricantes otimizam a relacao entre volume e consumo de material para poupar custos.',
      },
      icecream: {
        title: 'Matematica do gelado',
        desc: 'Porque e que uma bola de gelado "grande" parece muito maior? Porque o volume cresce com $r^3$! Dobro do raio = oito vezes o volume. Isso tambem explica porque os menus XXL sao tao rentaveis.',
      },
      pizza: {
        title: 'Comparacao de pizzas',
        desc: 'Uma pizza de 30 cm tem mais area do que duas pizzas de 20 cm juntas! $\\pi \\cdot 15^2 = 706{,}9$ vs. $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. O tamanho compensa.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Esquecer o fator $\\frac{1}{3}$',
        correct: 'Em cones e piramides SEMPRE $\\frac{1}{3}$ a frente',
        why: 'Cones e piramides preenchem apenas um terco do cilindro ou prisma que os contem. Sem o fator calculas o volume do cilindro inteiro — tres vezes demais!',
        mia_warning: 'Mia: "Uma vez calculei todas as hitboxes sem o terco. As boias eram enormes e bloqueavam toda a doca. Tim nao ficou contente."',
      },
      surface_volume: {
        wrong: 'Confundir as formulas de superficie e volume da esfera',
        correct: 'Volume: $\\frac{4}{3}\\pi r^3$ — Superficie: $4\\pi r^2$',
        why: 'No volume aparece $r^3$ (cubico, conteudo espacial), na superficie $r^2$ (quadratico, conteudo de area). Presta atencao ao expoente — ele diz-te o que estas a calcular.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule otimiza a memoria de "Hafenlichter". "As nossas texturas consomem 2 elevado a 20 bytes — quanto e isso realmente?" Tim calcula: "Espera, potencias eu consigo..." Mia ri-se: "Entao mostra o que sabes."',
      challenge: 'Domina as leis das potencias: multiplica, eleva a potencia e simplifica potencias. Ajuda Tim a calcular tamanhos de memoria e tempos de renderizacao a toda a velocidade!',
      outro: 'Tim domina as leis das potencias. O calculo de memoria agora leva segundos. "Potencias sao como truques para numeros grandes", diz ele. Mia acena: "E para pequenos tambem — bem-vindo aos expoentes negativos."',
    },
    objectives: {
      multiply_powers: 'Multiplicar e dividir potencias com a mesma base',
      power_of_power: 'Simplificar potencia de potencia com a regra da multiplicacao',
      negative_exponents: 'Interpretar expoentes negativos como fracoes e converte-los',
      apply_memory: 'Aplicar leis das potencias a tamanhos de memoria e notacao cientifica',
    },
    explanation: {
      intro: 'Potencias sao uma abreviatura para multiplicacao repetida: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Quando multiplicas duas potencias com a mesma base, somas os expoentes — porque simplesmente prolongas a cadeia de multiplicacoes.',
      power_of_power: 'O que acontece quando elevas uma potencia a outra potencia? $(a^m)^n$ significa: multiplicas $a^m$ exatamente $n$ vezes por si mesmo. Isso da $m \\cdot n$ fatores — ou seja $a^{m \\cdot n}$. Os expoentes multiplicam-se.',
      mia_tip: 'Mia: "Mesma base -> somar expoentes. Potencia de potencia -> multiplicar expoentes. Bases diferentes -> calcular, nao ha atalho!"',
      negative: 'Um expoente negativo inverte a potencia: $a^{-n} = \\frac{1}{a^n}$. Nao e uma definicao arbitraria — segue logicamente do padrao: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Cada passo divide pela base.',
    },
    concepts: {
      product_rule: {
        title: 'Regra do produto',
        desc: 'Mesma base, expoentes diferentes? Ao multiplicar somam-se os expoentes, ao dividir subtraem-se. Isto SO funciona com a mesma base!',
      },
      power_rule: {
        title: 'Regra da potencia',
        desc: 'Uma potencia e elevada a outra potencia? Entao multiplica os expoentes. $(a^3)^4 = a^{12}$ — doze fatores $a$ no total.',
      },
      negative_exp: {
        title: 'Expoente negativo',
        desc: 'Um sinal negativo no expoente significa "um dividido por". Assim os numeros grandes tornam-se pequenos: $10^{-6}$ e um milionesimo. Perfeito para microchips e milissegundos.',
      },
    },
    examples: {
      simplify: {
        title: 'Calcular memoria',
        context: 'Tim quer saber: quanto sao $2^3 \\cdot 2^4$ bytes? Em informatica este e um calculo tipico com potencias de dois.',
        step1: 'Aplicar a regra do produto: mesma base $2$, entao somamos os expoentes: $3 + 4 = 7$.',
        step2: 'Calcular: $2^7 = 128$ bytes.',
        step3: 'Contextualizar: 128 bytes — quase 1 kilobyte (isso seria exatamente $2^{10} = 1024$).',
        mia_comment: 'Mia: "Em informatica as potencias de dois estao em todo o lado. RAM, texturas, profundidade de cor — tudo sao potencias de 2!"',
      },
      negative: {
        title: 'Converter milissegundos',
        context: 'Um fotograma de "Hafenlichter" e calculado em $10^{-3}$ segundos. O que significa isso em notacao decimal?',
        step1: 'Aplicar o expoente negativo: $10^{-3}$ significa $\\frac{1}{10^3}$.',
        step2: 'Calcular: $\\frac{1}{1000} = 0{,}001$ segundos.',
        step3: 'Contextualizar: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — um milissegundo. A 60 fps cada fotograma tem cerca de 16 ms.',
        mia_comment: 'Mia: "Expoentes negativos parecem assustadores, mas simplesmente significam: numeros pequenos. $10^{-3}$ = mili, $10^{-6}$ = micro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Armazenamento digital',
        desc: 'O teu telemovel tem 256 GB? Sao $2^{38}$ bytes, mais de 274 mil milhoes de bytes. Cada duplicacao do armazenamento e apenas um +1 no expoente — por isso a tecnologia cresce tao rapido.',
      },
      richter: {
        title: 'Escala de Richter',
        desc: 'Um terramoto de magnitude 6 nao e o dobro de forte que magnitude 3 — mas sim mil vezes mais! Cada nivel significa $10 \\times$ mais energia. As potencias tornam a diferenca tangivel.',
      },
      decibel: {
        title: 'Decibeis e volume',
        desc: 'Auscultadores a 100 dB sao $10^{10}$ vezes mais intensos que o limiar de audicao (0 dB). Cada +10 dB = dez vezes mais intensidade. Os teus ouvidos calculam logaritmicamente — ou seja, com potencias!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Multiplicar bases em vez de somar expoentes',
        correct: 'A regra do produto SO vale para a mesma base',
        why: 'Em $2^3 \\cdot 3^2$ as bases sao diferentes (2 e 3). Aqui nao podes aplicar nenhuma regra de potencias — tens de calcular separadamente: $8 \\cdot 9 = 72$. Somar os expoentes e multiplicar as bases e um erro frequente!',
        mia_warning: 'Mia: "Bases diferentes = nao ha atalho. Ponto. Uma vez fiz isso mal no codigo e as texturas ficaram todas destruidas."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "elevado a zero e zero"',
        correct: '$a^0 = 1$ para todo $a \\neq 0$',
        why: 'Segue o padrao: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — cada passo divide por 2. Entao $2^0 = 1$. Isto vale para TODA base (exceto 0). O zero e o elemento neutro da adicao, nao da multiplicacao.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia navega pela biblioteca de assets de "Hafenlichter". A Speicherstadt de Hamburgo tem edificios de todos os tamanhos — mas todos devem parecer proporcionados. Lumi pergunta: "Nao podemos simplesmente escalar tudo?" Mia acena: "Exatamente. Isso e semelhanca."',
      challenge: 'Compreende triangulos semelhantes, fatores de escala e o teorema de Tales. Ajuda Mia a escalar proporcionalmente o bairro portuario!',
      outro: 'A Speicherstadt em "Hafenlichter" esta fantastica — cada edificio e proporcional, cada ponte encaixa. Jule admira o resultado: "Como se fosse uma maquete real!" Mia sorri: "E. Matematicamente exata."',
    },
    objectives: {
      similar_triangles: 'Reconhecer triangulos semelhantes e descrever as suas propriedades',
      scale_factor: 'Calcular e aplicar o fator de escala $k$',
      intercept_theorem: 'Aplicar o teorema de Tales a problemas geometricos',
      apply_scaling: 'Utilizar a semelhanca em arquitetura, cartografia e design de jogos',
    },
    explanation: {
      intro: 'Duas figuras sao semelhantes quando tem a mesma forma mas podem ter tamanhos diferentes. Em triangulos basta que todos os angulos coincidam — entao automaticamente todas as proporcoes de lados sao iguais. A relacao entre imagem e original chama-se fator de escala $k$.',
      scale_factor: 'O fator de escala $k$ diz-te quanto foi ampliado ou reduzido. $k > 1$ significa ampliacao, $k < 1$ reducao, $k = 1$ significa congruente (identico). Importante: $k$ refere-se a comprimentos — areas escalam com $k^2$, volumes com $k^3$!',
      mia_tip: 'Mia: "Na game engine trabalhamos constantemente com fatores de escala. Um sprite com scale 0.5 e metade do tamanho, scale 2.0 o dobro. Exatamente como na geometria!"',
      intercept: 'O teorema de Tales descreve o que acontece quando retas paralelas sao cortadas por dois raios: os segmentos sobre os raios sao proporcionais. Assim podes calcular distancias desconhecidas sem ter de medir tudo.',
    },
    concepts: {
      similar_triangles: {
        title: 'Triangulos semelhantes',
        desc: 'Dois triangulos sao semelhantes quando coincidem em todos os angulos. Entao vale: todas as proporcoes de lados sao iguais. Escreve-se $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Fator de escala',
        desc: 'O fator $k = \\frac{\\text{Imagem}}{\\text{Original}}$ descreve a ampliacao ou reducao. $k = 2$ significa: tudo o dobro. $k = 0{,}5$ significa: tudo metade.',
      },
      intercept_theorem: {
        title: 'Teorema de Tales',
        desc: 'Quando dois raios sao cortados por retas paralelas, os segmentos resultantes sao proporcionais. Uma ferramenta poderosa para calcular comprimentos desconhecidos.',
      },
    },
    examples: {
      model: {
        title: 'Escalar um edificio',
        context: 'Um armazem hamburguense esta construido como modelo 3D a escala $1:100$. O modelo mede $3{,}5$ cm de altura. Quanto mede o edificio real?',
        step1: 'Determinar o fator de escala: $k = \\frac{1}{100}$ significa que o modelo e 100 vezes mais pequeno que o original.',
        step2: 'Ler a altura do modelo: $h_{\\text{Modelo}} = 3{,}5$ cm.',
        step3: 'Calcular ao contrario: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. O edificio tem 3,5 metros de altura.',
        mia_comment: 'Mia: "E exatamente assim que trabalhamos em Hafenlichter. Construimos a Speicherstadt como maquete e escalamos tudo proporcionalmente para o jogo."',
      },
      intercept: {
        title: 'Aplicar o teorema de Tales',
        context: 'Dois raios sao cortados por retas paralelas. Os segmentos num raio sao 4 e 6, no outro o primeiro segmento e 9. Qual e o comprimento do segundo segmento $x$?',
        step1: 'Montar o teorema de Tales: as proporcoes dos segmentos em ambos os raios sao iguais: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Multiplicar em cruz: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Resultado: $x = 6$. O segundo segmento mede 6 unidades.',
        mia_comment: 'Mia: "O teorema de Tales e como o Auto-Layout na game engine — defines uma proporcao e tudo o resto se ajusta proporcionalmente."',
      },
    },
    realworld: {
      maps: {
        title: 'Mapas e navegacao',
        desc: 'O Google Maps mostra o mundo a escala. O nivel de zoom 15 corresponde aproximadamente a $1:18.000$. Cada nivel de zoom duplica o fator de escala — exatamente como a semelhanca na geometria.',
      },
      architecture: {
        title: 'Modelos arquitetonicos',
        desc: 'Antes de construir a Filarmonica do Elba, houve modelos a escala $1:500$. Os arquitetos usam a semelhanca para deduzir medidas reais de modelos pequenos — e vice-versa.',
      },
      instagram: {
        title: 'Escalar imagens',
        desc: 'Quando recortas uma foto para o Instagram, muda a escala. "Ajustar ao ecra" escala proporcionalmente (semelhante), "Esticar" distorce (nao semelhante). O teu olho deteta a diferenca instantaneamente!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Semelhante" e "congruente" sao o mesmo',
        correct: 'Semelhante = mesma forma. Congruente = mesma forma E mesmo tamanho',
        why: 'A congruencia e um caso especial de semelhanca com $k = 1$. Todos os triangulos congruentes sao semelhantes, mas nem todos os triangulos semelhantes sao congruentes. Semelhante significa: mesmos angulos, mas os lados podem ter comprimentos proporcionalmente diferentes.',
        mia_warning: 'Mia: "Na game engine: congruente = copiar. Semelhante = copiar + escalar. Se copias uma casa e a escalas, e semelhante. Sem escalar e congruente."',
      },
      scale_direction: {
        wrong: 'Montar o fator de escala ao contrario',
        correct: 'Sempre $k = \\frac{\\text{Imagem}}{\\text{Original}}$',
        why: 'Se a imagem e maior que o original, $k$ deve ser maior que 1. Se montas a fracao ao contrario, obterns $k < 1$ e pensas que foi reduzido. Lembra-te: imagem em cima, original em baixo.',
      },
    },
  },
};
