export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia olha fixamente para o ecrã. A arquitetura de níveis de "Hafenlichter" precisa de objetos 3D — armazéns, gruas, contentores. Tim modelou os meshes, mas Lumi pergunta: "Quanta memória precisa cada hitbox?" Mia sorri: "Para isso precisamos de fórmulas de volume."',
      challenge: 'Calcula volumes e superfícies de pirâmides, cones e esferas. Ajuda Mia a construir as hitboxes 3D perfeitas para o seu bairro portuário!',
      outro: 'Os corpos 3D estão calculados, as hitboxes encaixam. Tim testa o nível da grua e exclama: "As colisões finalmente parecem realistas!" Mia reclina-se — a geometria melhora os jogos.',
    },
    objectives: {
      volume_pyramid: 'Calcular o volume de pirâmides com a fórmula do terço',
      volume_cone_sphere: 'Determinar com segurança os volumes de cones e esferas',
      surface_area: 'Aplicar fórmulas de superfície e interpretar os resultados',
      apply_3d: 'Transferir cálculos de corpos para problemas do quotidiano e design de jogos',
    },
    explanation: {
      intro: 'Corpos tridimensionais têm volume (conteúdo espacial) e superfície. Em pirâmides e cones há um fator decisivo na fórmula: o fator de um terço $\\frac{1}{3}$. Ele deve-se ao facto de estes corpos "terminarem em ponta" — preenchem apenas um terço do prisma ou cilindro que os contém.',
      cone: 'Um cone é como uma "pirâmide redonda" — a sua base é um círculo com raio $r$. A fórmula tem a mesma estrutura: um terço vezes área da base vezes altura, só que a área da base é $\\pi r^2$.',
      mia_tip: 'Mia: "Eu memorizo assim: a pirâmide e o cone são os irmãos modestos do prisma e do cilindro — ocupam apenas um terço do espaço!"',
      sphere: 'A esfera é o caso especial: não tem base nem altura no sentido clássico. O seu volume depende apenas do raio. Arquimedes demonstrou que uma esfera preenche exatamente $\\frac{2}{3}$ do cilindro que a contém — daí se deduz a fórmula.',
    },
    concepts: {
      pyramid: {
        title: 'Volume da pirâmide',
        desc: 'Uma pirâmide tem um terço do volume de um prisma com a mesma base e altura. A base pode ser um retângulo, triângulo ou qualquer polígono.',
      },
      cone: {
        title: 'Volume do cone',
        desc: 'O cone comporta-se em relação ao cilindro como a pirâmide em relação ao prisma: preenche exatamente um terço. A sua base circular torna-o especialmente simétrico.',
      },
      sphere: {
        title: 'Volume da esfera',
        desc: 'A esfera descreve-se completamente pelo seu raio. O $\\frac{4}{3}$ na fórmula provém da integração — ou da genial demonstração de Arquimedes.',
      },
    },
    examples: {
      icecream: {
        title: 'Calcular um cone de gelado',
        context: 'Um cone de gelado tem forma de cone com raio $r = 3$ cm e altura $h = 12$ cm. Quanto gelado cabe?',
        step1: 'Identificar dados: o cone tem $r = 3$ cm e $h = 12$ cm.',
        step2: 'Aplicar a fórmula do cone: substituímos em $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ e calculamos primeiro o parêntese.',
        step3: 'Resultado: o cone comporta aproximadamente $113{,}1\\,\\text{cm}^3$ de gelado — um pouco mais que um decilitro.',
        mia_comment: 'Mia: "Uau, um cone não leva assim tanto! Por isso é que empilham sempre uma bola por cima."',
      },
      hitbox: {
        title: 'Hitbox esférica',
        context: 'Em "Hafenlichter" uma boia deve ter uma hitbox esférica com volume $V = 904{,}8\\,\\text{cm}^3$. Qual deve ser o raio?',
        step1: 'Dado: o volume da esfera é $V = 904{,}8\\,\\text{cm}^3$. Procurado: o raio $r$.',
        step2: 'Isolar na fórmula: resolvemos $V = \\frac{4}{3} \\pi r^3$ para $r^3$ dividindo por $\\frac{4}{3}\\pi$.',
        step3: 'Calcular: $r^3 \\approx 215{,}9$ — agora extraímos a raiz cúbica.',
        step4: 'Resultado: $r \\approx 6{,}0$ cm. A hitbox precisa de um raio de 6 cm.',
        mia_comment: 'Mia: "Calcular ao contrário é rotina no design de jogos — sabes o que queres e tens de encontrar os parâmetros."',
      },
    },
    realworld: {
      packaging: {
        title: 'Design de embalagens',
        desc: 'Latas de bebidas, conservas, garrafas — em todas há cálculo de cilindros. Os fabricantes otimizam a relação entre volume e consumo de material para poupar custos.',
      },
      icecream: {
        title: 'Matemática do gelado',
        desc: 'Porque é que uma bola de gelado "grande" parece muito maior? Porque o volume cresce com $r^3$! Dobro do raio = oito vezes o volume. Isso também explica porque os menus XXL são tão rentáveis.',
      },
      pizza: {
        title: 'Comparação de pizzas',
        desc: 'Uma pizza de 30 cm tem mais área do que duas pizzas de 20 cm juntas! $\\pi \\cdot 15^2 = 706{,}9$ vs. $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. O tamanho compensa.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Esquecer o fator $\\frac{1}{3}$',
        correct: 'Em cones e pirâmides SEMPRE $\\frac{1}{3}$ à frente',
        why: 'Cones e pirâmides preenchem apenas um terço do cilindro ou prisma que os contém. Sem o fator calculas o volume do cilindro inteiro — três vezes demais!',
        mia_warning: 'Mia: "Uma vez calculei todas as hitboxes sem o terço. As boias eram enormes e bloqueavam toda a doca. Tim não ficou contente."',
      },
      surface_volume: {
        wrong: 'Confundir as fórmulas de superfície e volume da esfera',
        correct: 'Volume: $\\frac{4}{3}\\pi r^3$ — Superfície: $4\\pi r^2$',
        why: 'No volume aparece $r^3$ (cúbico, conteúdo espacial), na superfície $r^2$ (quadrático, conteúdo de área). Presta atenção ao expoente — ele diz-te o que estás a calcular.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule otimiza a memória de "Hafenlichter". "As nossas texturas consomem 2 elevado a 20 bytes — quanto é isso realmente?" Tim calcula: "Espera, potências eu consigo..." Mia ri-se: "Então mostra o que sabes."',
      challenge: 'Domina as leis das potências: multiplica, eleva à potência e simplifica potências. Ajuda Tim a calcular tamanhos de memória e tempos de renderização a toda a velocidade!',
      outro: 'Tim domina as leis das potências. O cálculo de memória agora leva segundos. "Potências são como truques para números grandes", diz ele. Mia acena: "E para pequenos também — bem-vindo aos expoentes negativos."',
    },
    objectives: {
      multiply_powers: 'Multiplicar e dividir potências com a mesma base',
      power_of_power: 'Simplificar potência de potência com a regra da multiplicação',
      negative_exponents: 'Interpretar expoentes negativos como frações e convertê-los',
      apply_memory: 'Aplicar leis das potências a tamanhos de memória e notação científica',
    },
    explanation: {
      intro: 'Potências são uma abreviatura para multiplicação repetida: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Quando multiplicas duas potências com a mesma base, somas os expoentes — porque simplesmente prolongas a cadeia de multiplicações.',
      power_of_power: 'O que acontece quando elevas uma potência a outra potência? $(a^m)^n$ significa: multiplicas $a^m$ exatamente $n$ vezes por si mesmo. Isso dá $m \\cdot n$ fatores — ou seja $a^{m \\cdot n}$. Os expoentes multiplicam-se.',
      mia_tip: 'Mia: "Mesma base -> somar expoentes. Potência de potência -> multiplicar expoentes. Bases diferentes -> calcular, não há atalho!"',
      negative: 'Um expoente negativo inverte a potência: $a^{-n} = \\frac{1}{a^n}$. Não é uma definição arbitrária — segue logicamente do padrão: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Cada passo divide pela base.',
    },
    concepts: {
      product_rule: {
        title: 'Regra do produto',
        desc: 'Mesma base, expoentes diferentes? Ao multiplicar somam-se os expoentes, ao dividir subtraem-se. Isto SÓ funciona com a mesma base!',
      },
      power_rule: {
        title: 'Regra da potência',
        desc: 'Uma potência é elevada a outra potência? Então multiplica os expoentes. $(a^3)^4 = a^{12}$ — doze fatores $a$ no total.',
      },
      negative_exp: {
        title: 'Expoente negativo',
        desc: 'Um sinal negativo no expoente significa "um dividido por". Assim os números grandes tornam-se pequenos: $10^{-6}$ é um milionésimo. Perfeito para microchips e milissegundos.',
      },
    },
    examples: {
      simplify: {
        title: 'Calcular memória',
        context: 'Tim quer saber: quanto são $2^3 \\cdot 2^4$ bytes? Em informática este é um cálculo típico com potências de dois.',
        step1: 'Aplicar a regra do produto: mesma base $2$, então somamos os expoentes: $3 + 4 = 7$.',
        step2: 'Calcular: $2^7 = 128$ bytes.',
        step3: 'Contextualizar: 128 bytes — quase 1 kilobyte (isso seria exatamente $2^{10} = 1024$).',
        mia_comment: 'Mia: "Em informática as potências de dois estão em todo o lado. RAM, texturas, profundidade de cor — tudo são potências de 2!"',
      },
      negative: {
        title: 'Converter milissegundos',
        context: 'Um fotograma de "Hafenlichter" é calculado em $10^{-3}$ segundos. O que significa isso em notação decimal?',
        step1: 'Aplicar o expoente negativo: $10^{-3}$ significa $\\frac{1}{10^3}$.',
        step2: 'Calcular: $\\frac{1}{1000} = 0{,}001$ segundos.',
        step3: 'Contextualizar: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — um milissegundo. A 60 fps cada fotograma tem cerca de 16 ms.',
        mia_comment: 'Mia: "Expoentes negativos parecem assustadores, mas simplesmente significam: números pequenos. $10^{-3}$ = mili, $10^{-6}$ = micro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Armazenamento digital',
        desc: 'O teu telemóvel tem 256 GB? São $2^{38}$ bytes, mais de 274 mil milhões de bytes. Cada duplicação do armazenamento é apenas um +1 no expoente — por isso a tecnologia cresce tão rápido.',
      },
      richter: {
        title: 'Escala de Richter',
        desc: 'Um terramoto de magnitude 6 não é o dobro de forte que magnitude 3 — mas sim mil vezes mais! Cada nível significa $10 \\times$ mais energia. As potências tornam a diferença tangível.',
      },
      decibel: {
        title: 'Decibéis e volume',
        desc: 'Auscultadores a 100 dB são $10^{10}$ vezes mais intensos que o limiar de audição (0 dB). Cada +10 dB = dez vezes mais intensidade. Os teus ouvidos calculam logaritmicamente — ou seja, com potências!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Multiplicar bases em vez de somar expoentes',
        correct: 'A regra do produto SÓ vale para a mesma base',
        why: 'Em $2^3 \\cdot 3^2$ as bases são diferentes (2 e 3). Aqui não podes aplicar nenhuma regra de potências — tens de calcular separadamente: $8 \\cdot 9 = 72$. Somar os expoentes e multiplicar as bases é um erro frequente!',
        mia_warning: 'Mia: "Bases diferentes = não há atalho. Ponto. Uma vez fiz isso mal no código e as texturas ficaram todas destruídas."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "elevado a zero é zero"',
        correct: '$a^0 = 1$ para todo $a \\neq 0$',
        why: 'Segue o padrão: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — cada passo divide por 2. Então $2^0 = 1$. Isto vale para TODA base (exceto 0). O zero é o elemento neutro da adição, não da multiplicação.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia navega pela biblioteca de assets de "Hafenlichter". A Speicherstadt de Hamburgo tem edifícios de todos os tamanhos — mas todos devem parecer proporcionados. Lumi pergunta: "Não podemos simplesmente escalar tudo?" Mia acena: "Exatamente. Isso é semelhança."',
      challenge: 'Compreende triângulos semelhantes, fatores de escala e o teorema de Tales. Ajuda Mia a escalar proporcionalmente o bairro portuário!',
      outro: 'A Speicherstadt em "Hafenlichter" está fantástica — cada edifício é proporcional, cada ponte encaixa. Jule admira o resultado: "Como se fosse uma maquete real!" Mia sorri: "É. Matematicamente exata."',
    },
    objectives: {
      similar_triangles: 'Reconhecer triângulos semelhantes e descrever as suas propriedades',
      scale_factor: 'Calcular e aplicar o fator de escala $k$',
      intercept_theorem: 'Aplicar o teorema de Tales a problemas geométricos',
      apply_scaling: 'Utilizar a semelhança em arquitetura, cartografia e design de jogos',
    },
    explanation: {
      intro: 'Duas figuras são semelhantes quando têm a mesma forma mas podem ter tamanhos diferentes. Em triângulos basta que todos os ângulos coincidam — então automaticamente todas as proporções de lados são iguais. A relação entre imagem e original chama-se fator de escala $k$.',
      scale_factor: 'O fator de escala $k$ diz-te quanto foi ampliado ou reduzido. $k > 1$ significa ampliação, $k < 1$ redução, $k = 1$ significa congruente (idêntico). Importante: $k$ refere-se a comprimentos — áreas escalam com $k^2$, volumes com $k^3$!',
      mia_tip: 'Mia: "Na game engine trabalhamos constantemente com fatores de escala. Um sprite com scale 0.5 é metade do tamanho, scale 2.0 o dobro. Exatamente como na geometria!"',
      intercept: 'O teorema de Tales descreve o que acontece quando retas paralelas são cortadas por dois raios: os segmentos sobre os raios são proporcionais. Assim podes calcular distâncias desconhecidas sem ter de medir tudo.',
    },
    concepts: {
      similar_triangles: {
        title: 'Triângulos semelhantes',
        desc: 'Dois triângulos são semelhantes quando coincidem em todos os ângulos. Então vale: todas as proporções de lados são iguais. Escreve-se $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Fator de escala',
        desc: 'O fator $k = \\frac{\\text{Imagem}}{\\text{Original}}$ descreve a ampliação ou redução. $k = 2$ significa: tudo o dobro. $k = 0{,}5$ significa: tudo metade.',
      },
      intercept_theorem: {
        title: 'Teorema de Tales',
        desc: 'Quando dois raios são cortados por retas paralelas, os segmentos resultantes são proporcionais. Uma ferramenta poderosa para calcular comprimentos desconhecidos.',
      },
    },
    examples: {
      model: {
        title: 'Escalar um edifício',
        context: 'Um armazém hamburguês está construído como modelo 3D à escala $1:100$. O modelo mede $3{,}5$ cm de altura. Quanto mede o edifício real?',
        step1: 'Determinar o fator de escala: $k = \\frac{1}{100}$ significa que o modelo é 100 vezes mais pequeno que o original.',
        step2: 'Ler a altura do modelo: $h_{\\text{Modelo}} = 3{,}5$ cm.',
        step3: 'Calcular ao contrário: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. O edifício tem 3,5 metros de altura.',
        mia_comment: 'Mia: "É exatamente assim que trabalhamos em Hafenlichter. Construímos a Speicherstadt como maquete e escalamos tudo proporcionalmente para o jogo."',
      },
      intercept: {
        title: 'Aplicar o teorema de Tales',
        context: 'Dois raios são cortados por retas paralelas. Os segmentos num raio são 4 e 6, no outro o primeiro segmento é 9. Qual é o comprimento do segundo segmento $x$?',
        step1: 'Montar o teorema de Tales: as proporções dos segmentos em ambos os raios são iguais: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Multiplicar em cruz: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Resultado: $x = 6$. O segundo segmento mede 6 unidades.',
        mia_comment: 'Mia: "O teorema de Tales é como o Auto-Layout na game engine — defines uma proporção e tudo o resto se ajusta proporcionalmente."',
      },
    },
    realworld: {
      maps: {
        title: 'Mapas e navegação',
        desc: 'O Google Maps mostra o mundo à escala. O nível de zoom 15 corresponde aproximadamente a $1:18.000$. Cada nível de zoom duplica o fator de escala — exatamente como a semelhança na geometria.',
      },
      architecture: {
        title: 'Modelos arquitetónicos',
        desc: 'Antes de construir a Filarmónica do Elba, houve modelos à escala $1:500$. Os arquitetos usam a semelhança para deduzir medidas reais de modelos pequenos — e vice-versa.',
      },
      instagram: {
        title: 'Escalar imagens',
        desc: 'Quando recortas uma foto para o Instagram, muda a escala. "Ajustar ao ecrã" escala proporcionalmente (semelhante), "Esticar" distorce (não semelhante). O teu olho deteta a diferença instantaneamente!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Semelhante" e "congruente" são o mesmo',
        correct: 'Semelhante = mesma forma. Congruente = mesma forma E mesmo tamanho',
        why: 'A congruência é um caso especial de semelhança com $k = 1$. Todos os triângulos congruentes são semelhantes, mas nem todos os triângulos semelhantes são congruentes. Semelhante significa: mesmos ângulos, mas os lados podem ter comprimentos proporcionalmente diferentes.',
        mia_warning: 'Mia: "Na game engine: congruente = copiar. Semelhante = copiar + escalar. Se copias uma casa e a escalas, é semelhante. Sem escalar é congruente."',
      },
      scale_direction: {
        wrong: 'Montar o fator de escala ao contrário',
        correct: 'Sempre $k = \\frac{\\text{Imagem}}{\\text{Original}}$',
        why: 'Se a imagem é maior que o original, tem de ser $k > 1$. Se montas a fração ao contrário, obténs $k < 1$ e pensas que foi reduzido. Lembra-te: imagem em cima, original em baixo.',
      },
    },
  },
};
