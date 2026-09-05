export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'O sistema de partículas de «Hafenlichter 3D» está grandioso — faíscas a saltar, nevoeiro a rodopiar, fogo a arder. Mas o Kai tem um problema de desempenho: milhares de partículas ao mesmo tempo põem a GPU a suar. «Tenho de calcular com que rapidez as partículas se apagam, para as poder deitar fora da memória a tempo», explica à Mia. A resposta está na função $e$ e na sua contrapartida, o logaritmo natural — as ferramentas para tudo o que cresce ou decai exponencialmente.',
      challenge: 'O Kai tem de modelar matematicamente o tempo de vida das partículas: com que rapidez se apaga uma faísca? Quando é que uma partícula de fumo fica tão transparente que pode ser eliminada? Para isso precisa da regra da cadeia para funções $e$, de derivadas de $\\ln$ e de resolver equações de decaimento.',
      outro: 'Com funções $e$ compostas e derivadas de $\\ln$, o Kai construiu um sistema de partículas inteligente: cada faísca segue uma curva de decaimento precisa e cada partícula de fumo é reciclada exatamente quando a sua opacidade desce abaixo do limiar de perceção. «A regra da cadeia é praticamente o meu otimizador de desempenho», sorri o Kai. «A GPU agradece-mo com 60 em vez de 30 FPS.» A Mia acrescenta: «E o melhor — a mesma matemática descreve também o decaimento radioativo e as curvas de carga de condensadores.»',
    },
    objectives: {
      advanced_e_properties: 'Derivar funções $e$ compostas com a regra da cadeia: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Dominar a derivada de $\\ln(g(x))$ e usá-la em estudos de funções',
      composite_exp_functions: 'Analisar produtos de polinómios e funções $e$ (extremos, pontos de inflexão)',
      differential_equations: 'Compreender equações diferenciais simples do tipo $f\'(t) = k \\cdot f(t)$ e montar modelos de decaimento',
    },
    explanation: {
      intro: 'No 11.º ano aprendeste as bases de $e^x$ e $\\ln(x)$. Agora a coisa fica séria: derivamos funções $e$ compostas, analisamos curvas com $\\ln$ e resolvemos equações de decaimento. A chave é a regra da cadeia — quando no expoente não está apenas $x$, mas uma função inteira $g(x)$, a derivada exterior dá $e^{g(x)}$ e a derivada interior $g\'(x)$ junta-se como fator:',
      ln_derivative: 'Igualmente elegante: a derivada de $\\ln(g(x))$ com a regra da cadeia. O logaritmo natural «vira a função do avesso» — a derivada interior fica no numerador e a própria função interior no denominador:',
      kai_tip: 'No meu motor 3D as funções $e$ aparecem por todo o lado: decaimento de partículas, densidade do nevoeiro, desvanecimento do som. O truque é sempre o mesmo — a regra da cadeia. Quando derivo $e^{-0{,}5t^2}$ para uma distribuição gaussiana, a função interior é $g(t) = -0{,}5t^2$ e a derivada interior é $g\'(t) = -t$. Substituir e está feito. Assim que apanhas este padrão uma vez, passa a correr automaticamente!',
      integration: 'Ao integrar, o processo corre ao contrário. Para funções exponenciais simples vale: o fator do expoente passa para o denominador. E a célebre regra do $\\frac{1}{x}$ leva diretamente ao $\\ln$:',
      decay_model: 'O decaimento exponencial é O modelo-padrão para processos em que a taxa de variação é proporcional ao valor atual: $f\'(t) = -\\lambda \\cdot f(t)$. A solução é sempre uma função $e$ com expoente negativo. O tempo de meia-vida $t_{1/2}$ indica ao fim de quanto tempo resta metade do valor inicial:',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Regra da cadeia para funções $e$',
        desc: 'Em $f(x) = e^{g(x)}$ a função exterior é $e^u$ (derivada: $e^u$) e a interior é $g(x)$. O resultado: a função $e$ mantém-se, multiplicada pela derivada interior. Exemplo: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Derivada de $\\ln(g(x))$',
        desc: 'A regra da cadeia para o logaritmo produz uma fração: derivada interior a dividir pela função interior. É especialmente útil quando $g(x)$ é um polinómio — por exemplo, $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Importante: o domínio fica restringido por $g(x) > 0$.',
      },
      exp_integration: {
        title: 'Integração logarítmica',
        desc: 'Quando um integrando tem a forma $\\frac{f\'(x)}{f(x)}$, a primitiva é imediatamente $\\ln|f(x)| + C$. É a inversão da derivada do $\\ln$ e um dos truques de integração mais importantes. Exemplo: $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Modelar o decaimento de partículas',
        context: 'No sistema de partículas do Kai arrancam ao mesmo tempo 5000 partículas de faísca. O seu número decresce exponencialmente — o Kai quer calcular a taxa de decaimento e o tempo de meia-vida.',
        step1: 'Montar o modelo de decaimento — $N_0 = 5000$ partículas, constante de decaimento $\\lambda = 0{,}03\\,\\text{s}^{-1}$:',
        step2: 'Derivar com a regra da cadeia — função interior $g(t) = -0{,}03t$, derivada interior $g\'(t) = -0{,}03$:',
        step3: 'Calcular a taxa inicial — em $t = 0$ desaparecem 150 partículas por segundo:',
        step4: 'Determinar o tempo de meia-vida — resolver $N(t_{1/2}) = \\frac{N_0}{2}$ com o $\\ln$:',
        kai_comment: 'Ao fim de 23 segundos já desapareceu metade das partículas — ou seja, posso libertar memória ainda antes disso para a explosão seguinte. No motor coloco o limiar de eliminação em $5\\%$ de opacidade, o que dá cerca de $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Estudo de função com função $e$',
        context: 'O Kai modela o brilho de um clarão de luz: primeiro sobe, depois cai. A curva de brilho tem a forma $f(x) = x^2 \\cdot e^{-x}$ — uma típica função de «flash».',
        step1: 'Função dada — produto de um polinómio e de uma função $e$ decrescente:',
        step2: 'Derivada com a regra do produto: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — para o segundo fator precisamos da regra da cadeia:',
        step3: 'Zeros da derivada: $e^{-x} > 0$ sempre, logo só decide $x(2-x) = 0$:',
        step4: 'Determinar o máximo — calcular o valor da função em $x = 2$:',
        kai_comment: 'Esta curva de «subida e depois queda» é perfeita para efeitos de luz. Em $x = 0$ está tudo escuro, em $x = 2$ o brilho é máximo e depois vem um desvanecimento suave. No meu shader uso exatamente esta função para o clarão do cano e para os clarões de explosão!',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Sistemas de partículas em motores 3D',
        desc: 'Cada faísca, cada rasto de fumo, cada fogo num videojogo segue uma curva de decaimento exponencial $N(t) = N_0 \\cdot e^{-\\lambda t}$. A constante de decaimento $\\lambda$ determina com que rapidez as partículas se apagam. No Unity e no Unreal Engine é exatamente este parâmetro que configuras quando defines «Lifetime» e «Fade».',
      },
      signal_processing: {
        title: 'Processamento de áudio e atenuação do sinal',
        desc: 'Quando ouves um efeito de reverberação no GarageBand ou numa ferramenta de DJ, o som decai exponencialmente: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. A função $e$ controla o volume e o $\\sin$ a oscilação. Também os sinais de Bluetooth e o alcance do Wi-Fi seguem este modelo — é por isso que o streaming começa a falhar quanto mais longe estiveres do router.',
      },
      learning_curve: {
        title: 'Curva de aprendizagem e progressão de competências',
        desc: 'Com que rapidez aprendes um jogo novo? A curva de aprendizagem $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ descreve como as capacidades crescem depressa ao início e depois se aproximam de um máximo. Os designers de jogos usam este modelo para desenhar curvas de dificuldade — e também o teu cérebro segue exatamente esta função quando decoras vocabulário ou praticas um instrumento.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Esquecer a derivada interior: $(e^{3x})\' = e^{3x}$',
        correct: 'Aplicar a regra da cadeia: $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'Assim que no expoente está mais do que apenas $x$, a regra da cadeia TEM de entrar. A função interior aqui é $g(x) = 3x$ com $g\'(x) = 3$. Esse fator não pode faltar!',
        kai_warning: 'No meu shader derivei uma vez $e^{-0{,}5t^2}$ e esqueci-me do fator $-t$. Resultado: partículas que nunca mudavam — como fumo congelado. Desde então verifico sempre: está mais do que $x$ no expoente? Então regra da cadeia!',
      },
      ln_negative: {
        wrong: 'Esquecer o módulo: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Correto com módulo: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'A função $\\frac{1}{x}$ também está definida para valores negativos de $x$, mas $\\ln(x)$ apenas para $x > 0$. As barras de módulo garantem que a primitiva vale em todo o domínio. Em integrais definidos com limites positivos podes dispensar as barras — em integrais indefinidos nunca!',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Para «Hafenlichter 3D» o Kai constrói um gerador procedimental de níveis: pontes, túneis e casas devem nascer de curvas matemáticas que se fazem rodar em torno de eixos. «Imaginem: defino um perfil e ponho-o a rodar — e já tenho uma coluna, uma cúpula ou um casco de navio», entusiasma-se o Kai. Mas como calcular o volume exato destes corpos 3D? A resposta: volumes de revolução, integração por partes e algumas técnicas elegantes de integração.',
      challenge: 'O Kai tem de calcular volumes de objetos 3D que nascem da rotação de curvas. Além disso precisa de integração por partes para fórmulas de iluminação complexas e tem de verificar se determinados integrais sequer convergem.',
      outro: 'O gerador de níveis está a funcionar: o Kai roda perfis de curvas em torno de eixos e obtém corpos 3D perfeitos com o volume calculado ao pormenor. «A integração por partes foi a chave para os integrais de iluminação», conta ao Amir, «e os integrais impróprios mostram-me quando um efeito de luz tem energia total finita — mesmo que teoricamente se estenda até ao infinito.» A Mia acena: «Os engenheiros usam a mesma matemática para dimensionar depósitos e os físicos para calcular a energia das ondas.»',
    },
    objectives: {
      integration_techniques: 'Aplicar com segurança a integração por partes e a substituição',
      rotation_volumes: 'Calcular volumes de revolução em torno do eixo $x$ com $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Verificar a convergência de integrais impróprios e calculá-los',
      partial_integration: 'Utilizar de forma dirigida o método de integração por partes quando é preciso integrar produtos',
    },
    explanation: {
      intro: 'No 11.º ano conheceste os integrais definidos como área. Agora juntam-se três técnicas novas. A primeira é a integração por partes — a «inversão» da regra do produto. Se tiveres de integrar um produto como $x \\cdot e^x$, decompõe-lo em $u$ e $v\'$:',
      substitution: 'A segunda técnica é a substituição — a «inversão» da regra da cadeia na derivação. Quando uma função «está dentro» de outra, substituis a função interior por uma variável nova:',
      kai_tip: 'O meu truque para a integração por partes: «LIATE» — logarítmica, inversa trigonométrica, algébrica, trigonométrica, exponencial. É a ordem pela qual escolhes o $u$. Assim, em $\\int x \\cdot e^x\\,\\mathrm{d}x$ tens $u = x$ (algébrica) e $v\' = e^x$ (exponencial). Em $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$ tens $u = \\ln(x)$ e $v\' = x$. Funciona quase sempre!',
      rotation_volume: 'Agora passa a três dimensões: se rodares o gráfico de $f(x)$ em torno do eixo $x$, nasce um sólido de revolução. Calculas o seu volume imaginando o sólido composto por infinitos discos finos — cada disco tem raio $f(x)$:',
      improper: 'O que acontece se um limite de integração for $\\infty$? Ou se o integrando ficar ilimitado num ponto? Então falamos de integrais impróprios. Substituis o ponto problemático por um limite e verificas se sai um valor finito:',
    },
    concepts: {
      partial_integration: {
        title: 'Integração por partes',
        desc: 'A inversão da regra do produto: decompões o integrando em $u$ (que é derivado) e $\\mathrm{d}v$ (que é integrado). Objetivo: o novo integral $\\int v\\,\\mathrm{d}u$ tem de ser mais simples do que o original. Aplicação típica: produtos de polinómio com função $e$ ou de polinómio com trigonometria.',
      },
      rotation_volume: {
        title: 'Volume de revolução',
        desc: 'Um gráfico de função que roda em torno do eixo $x$ gera um sólido 3D. O volume resulta da soma de infinitos discos de raio $f(x)$ e espessura $\\mathrm{d}x$. Cada disco tem volume $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$ — somados (integrados) dão a fórmula.',
      },
      improper_integral: {
        title: 'Integrais impróprios',
        desc: 'Integrais com $\\infty$ como limite ou com integrando ilimitado. Substituis o ponto problemático por uma variável e formas o limite. Se o limite existir e for finito, o integral diz-se convergente — caso contrário, divergente. Clássico: $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ converge, mas $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ diverge.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Sólido de revolução para desenho de níveis',
        context: 'O Kai quer gerar uma coluna cujo perfil segue a curva $f(x) = \\sqrt{x}$. Entre $x = 0$ e $x = 4$ a curva roda em torno do eixo $x$ — qual é o volume da coluna?',
        step1: 'Definir o perfil — a função raiz quadrada no intervalo $[0;\\,4]$:',
        step2: 'Aplicar a fórmula do volume de revolução — elevar $f(x)$ ao quadrado e pôr $\\pi$ à frente:',
        step3: 'Determinar a primitiva e substituir os limites:',
        step4: 'Resultado — a coluna tem um volume de $8\\pi$ unidades de volume:',
        kai_comment: 'É exatamente esta a fórmula que o meu gerador procedimental usa! Defino perfis de curvas, ponho-os a rodar e sei logo o volume — importante para as simulações de física, para que os objetos tenham o peso certo.',
      },
      partial_int: {
        title: 'Integração por partes para iluminação',
        context: 'No shader de cálculo de luz do Kai aparece o integral $\\int x \\cdot e^x\\,\\mathrm{d}x$ — um produto que não é diretamente integrável.',
        step1: 'Escolher a decomposição: $u = x$ (fica mais simples ao derivar), $v\' = e^x$ (integra-se facilmente):',
        step2: 'Determinar derivadas e primitivas:',
        step3: 'Substituir na fórmula — o novo integral é agora apenas $\\int e^x\\,\\mathrm{d}x$:',
        step4: 'Simplificar até ao fim — pôr em evidência dá uma forma elegante:',
        kai_comment: 'O momento em que o novo integral é mais simples do que o antigo — é essa a sensação de sucesso na integração por partes. Se ficar mais complicado, escolheste mal o $u$ e o $v\'$. Nesse caso é só trocar!',
      },
    },
    realworld: {
      '3d_printing': {
        title: 'Impressão 3D e cálculo de volume em CAD',
        desc: 'Cada impressora 3D tem de saber quanto material precisa. Em peças de revolução (jarras, tubos, bicos) o software de fatiamento calcula o volume exatamente com esta fórmula de revolução. Também em programas de CAD como o Fusion 360 há cálculo integral — quando rodas uma secção, o software calcula $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Atenuação da luz em motores de jogo',
        desc: 'Quanta luz total recebe uma cena de uma fonte pontual? A intensidade decresce com $I(r) = I_0 \\cdot e^{-\\alpha r}$. O integral impróprio $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ mostra: a energia total é finita! É por isso que os motores de jogo podem simular luzes de alcance limitado sem ficarem fisicamente errados.',
      },
      terrain_volume: {
        title: 'Geração de terreno e movimentação de terras',
        desc: 'Em projetos de construção de estradas e em jogos ao estilo Minecraft é preciso calcular o volume de paisagens com colinas. A fórmula $V = \\iint h(x,y)\\,\\mathrm{d}A$ soma a altura por toda a área — um integral bidimensional. Os engenheiros civis calculam assim a escavação de terra e os programadores de jogos o volume de dados das malhas de terreno.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Esquecer o quadrado: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Corretamente ao quadrado: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Cada disco tem área $\\pi r^2$ com $r = f(x)$. Sem o quadrado não calculas a área de um círculo, mas algo completamente diferente. Regra mnemónica: «pi-erre-quadrado» — o quadrado pertence à fórmula do círculo!',
        kai_warning: 'Cometi este erro uma vez numa game jam — a minha coluna tinha apenas uma fração do volume correto e colapsou na simulação de física. Desde então escrevo sempre a fórmula em grande no monitor: $V = \\pi \\int [f(x)]^2$!',
      },
      improper_no_limit: {
        wrong: 'Substituir $\\infty$ diretamente em vez de formar o limite',
        correct: 'Formular corretamente o limite e verificar a convergência',
        why: '$\\infty$ não é um número que se possa substituir! Tens de formar sempre o limite $\\lim_{b \\to \\infty}$ e verificar se existe. Caso contrário é fácil não reparar que um integral diverge — como $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, que apesar de a função ser decrescente não tem valor finito.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: 'O mundo 3D de «Hafenlichter 3D» ganha forma: gruas portuárias, fachadas de edifícios, superfícies de água — tudo é feito de triângulos, e cada triângulo está num plano. «Para uma iluminação realista tenho de calcular o vetor normal de cada superfície», explica o Kai. «E para a deteção de colisões preciso dos pontos de interseção de retas com planos.» Bem-vindo à geometria analítica do espaço — a matemática por trás de qualquer motor 3D.',
      challenge: 'O Kai tem de montar equações de planos a partir de três pontos, calcular vetores normais com o produto vetorial, encontrar interseções reta-plano e determinar distâncias entre objetos — tudo em tempo real para o seu motor de jogo.',
      outro: 'O sistema de deteção de colisões do Kai funciona impecavelmente: os projéteis acertam nas paredes, as personagens ficam em cima do chão e a iluminação calcula para cada superfície a incidência de luz perfeita através dos vetores normais. «O produto vetorial é a minha ferramenta mais usada», diz o Kai. «Dois vetores diretores para dentro, vetor normal para fora — e já sei como a superfície está orientada no espaço.» O Amir acrescenta: «E a fórmula da distância verifica se um jogador está perto o suficiente de um objeto para o apanhar.»',
    },
    objectives: {
      plane_equations: 'Montar equações de planos nas formas vetorial, normal e cartesiana e convertê-las entre si',
      line_plane_intersection: 'Calcular pontos de interseção de retas com planos e determinar posições relativas',
      distances_3d: 'Calcular distâncias no espaço: ponto-plano, ponto-reta e reta-reta',
      cross_product: 'Dominar o produto vetorial e aplicá-lo ao cálculo do vetor normal',
    },
    explanation: {
      intro: 'Os planos no espaço tridimensional podem ser descritos de várias maneiras. A forma vetorial parte de um ponto de apoio $\\vec{a}$ e gera o plano com dois vetores diretores $\\vec{u}$ e $\\vec{v}$. Qualquer ponto do plano pode ser alcançado com valores adequados de $r$ e $s$:',
      normal_form: 'Muitas vezes mais elegante é a forma normal: um vetor $\\vec{n}$ perpendicular ao plano (o vetor normal) e um ponto $\\vec{a}$ do plano bastam para descrever o plano todo. Daí deduz-se a forma cartesiana — uma única equação com $x_1$, $x_2$ e $x_3$:',
      kai_tip: 'No meu motor 3D guardo cada superfície na forma cartesiana — três coeficientes e uma constante, é tudo. Para renderizar preciso do vetor normal para a iluminação ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$ — o produto escalar com o vetor da luz dá o valor de brilho). E para a física preciso de interseções e de distâncias. As três formas são úteis — cada uma para um fim diferente!',
      cross_product: 'O produto vetorial $\\vec{u} \\times \\vec{v}$ dá um vetor perpendicular a ambos os vetores de entrada — perfeito para calcular o vetor normal a partir de dois vetores diretores. Atenção: a ordem importa (anticomutatividade)!',
      distance_point_plane: 'A distância de um ponto $P$ a um plano $E$ calcula-se elegantemente com a forma normal de Hesse. Substituis o ponto na equação cartesiana, tomas o módulo e divides pelo comprimento do vetor normal:',
    },
    concepts: {
      plane_equation: {
        title: 'Equação do plano na forma cartesiana',
        desc: 'A representação mais compacta de um plano: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. Os coeficientes $n_1, n_2, n_3$ são as componentes do vetor normal e $d$ obtém-se substituindo um ponto conhecido do plano. Qualquer ponto $(x_1, x_2, x_3)$ que satisfaça a equação está no plano.',
      },
      cross_product: {
        title: 'Produto vetorial',
        desc: 'O produto vetorial de dois vetores $\\vec{u}$ e $\\vec{v}$ dá um novo vetor $\\vec{n}$ perpendicular a ambos. A sua norma $|\\vec{u} \\times \\vec{v}|$ corresponde à área do paralelogramo gerado. Importante: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ — a ordem determina o sentido!',
      },
      distance_formula: {
        title: 'Distância ponto-plano',
        desc: 'A distância mais curta de um ponto $P$ a um plano é o comprimento da perpendicular de $P$ ao plano. A fórmula $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ calcula essa distância diretamente a partir da forma cartesiana. O módulo no numerador é decisivo — sem ele poderia sair uma «distância» negativa.',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Plano a partir de três vértices',
        context: 'O Kai tem um triângulo no seu mundo de jogo com os vértices $A(1|0|2)$, $B(3|1|0)$ e $C(0|4|1)$. Precisa da equação do plano para a iluminação e para a deteção de colisões.',
        step1: 'Três pontos dados — formar a partir deles dois vetores diretores:',
        step2: 'Calcular os vetores diretores $\\vec{u} = \\overrightarrow{AB}$ e $\\vec{v} = \\overrightarrow{AC}$:',
        step3: 'Calcular o produto vetorial $\\vec{n} = \\vec{u} \\times \\vec{v}$ com detalhe — componente a componente segundo a fórmula:',
        step4: 'Montar a forma cartesiana — vetor normal como coeficientes, $d$ substituindo $A$: $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$:',
        kai_comment: 'No motor acontece exatamente isto para cada triângulo: três vértices para dentro, calcular o produto vetorial, plano guardado. O vetor normal determina ao mesmo tempo para que lado a superfície «olha» — decisivo para a iluminação e para o backface culling!',
      },
      collision_detection: {
        title: 'Interseção reta-plano (raycast)',
        context: 'Um projétil voa em linha reta pelo espaço. O Kai tem de verificar se e onde atinge uma parede — isso é um raycast: interseção reta-plano.',
        step1: 'Reta (trajetória de voo) e plano (parede) dados:',
        step2: 'Substituir a reta na equação do plano — as componentes de $\\vec{x}(t)$ em vez de $x_1, x_2, x_3$:',
        step3: 'Resolver em ordem a $t$ — agrupar e simplificar:',
        step4: 'Calcular o ponto de interseção — substituir $t = 0$ na equação da reta:',
        kai_comment: 'Com $t = 0$ a reta atinge o plano imediatamente — ou seja, o projétil arranca mesmo junto à parede. No motor verifico ainda $t > 0$ (sentido para a frente) e $0 \\leq t \\leq t_{\\max}$ (alcance). Assim filtro os acertos atrás do jogador ou fora do alcance.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: 'Renderização 3D e iluminação',
        desc: 'Todos os motores 3D calculam a iluminação através do produto escalar do vetor normal com a direção da luz: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Quanto menor for o ângulo entre a luz e a normal da superfície, mais clara fica a superfície. É o modelo de iluminação de Lambert — a base da luz realista em jogos, filmes e aplicações de RA.',
      },
      architecture: {
        title: 'Arquitetura e software BIM',
        desc: 'Em programas de arquitetura como o AutoCAD ou o Revit, coberturas, paredes e rampas são modeladas como planos. A forma cartesiana descreve a posição no espaço e o vetor normal mostra a orientação. Os engenheiros de estruturas calculam com equações de planos como as forças atuam em superfícies inclinadas — do telhado ao tabuleiro de uma ponte.',
      },
      gps_navigation: {
        title: 'GPS e navegação de drones',
        desc: 'As coordenadas de GPS são tridimensionais (longitude, latitude, altitude). Os drones navegam ao longo de retas no espaço 3D e têm de reconhecer obstáculos — modelados como planos. A distância ponto-plano decide se um drone se aproxima demasiado da fachada de um edifício. Os carros autónomos usam a mesma matemática para o processamento de LIDAR.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Ignorar a ordem: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Anticomutativo: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'O produto vetorial NÃO é comutativo — a ordem determina o sentido do vetor resultante (regra da mão direita). Trocar muda o sinal. Isso pode levar a que os vetores normais apontem no sentido errado, o que inverte toda a iluminação.',
        kai_warning: 'Este bug reconhece-se logo: superfícies iluminadas «por dentro», enquanto o lado de fora fica escuro. Acontece quando o vetor normal aponta no sentido errado. Mantém sempre a ordem coerente — $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, nunca ao contrário!',
      },
      distance_abs_forgotten: {
        wrong: 'Esquecer o módulo no numerador: $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'Com módulo: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: 'As distâncias são sempre positivas! Sem o módulo no numerador pode sair um valor negativo se o ponto estiver do «outro lado» do plano. Num teste isso custa pontos; num motor de jogo leva a objetos que atravessam paredes.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Antes do lançamento de «Hafenlichter 3D» chega o grande playtest: 200 testadores jogam durante uma semana e o Kai tem de tomar decisões difíceis. O equilíbrio é justo? A taxa de falhas é aceitável? «A intuição não chega», diz a Mia. «Precisas de um teste estatístico que te diga se um efeito observado é real — ou apenas acaso.» Bem-vindo aos testes de hipóteses: a matemática por trás das decisões baseadas em dados.',
      challenge: 'O Kai tem de decidir se as diferenças observadas no playtest são estatisticamente significativas. O herói A é mesmo mais fraco do que o herói B, ou apenas teve azar? A nova taxa de falhas subiu realmente? Para isso precisa de hipóteses nulas, níveis de significância e de saber lidar com os tipos de erro.',
      outro: 'O playtest está analisado: o Kai demonstrou estatisticamente que o herói A é demasiado fraco ($p = 0{,}028 < 0{,}05$) e que a taxa de falhas na nova build subiu de forma significativa. «Sem testes de hipóteses talvez tivesse ignorado estes problemas», admite. A Mia acrescenta: «O bonito é que agora sabes exatamente com que segurança decides — o nível de significância quantifica o teu risco de estares enganado.»',
    },
    objectives: {
      null_hypothesis: 'Formular corretamente a hipótese nula e a alternativa e distinguir testes unilaterais de bilaterais',
      significance_level: 'Compreender o nível de significância $\\alpha$ e interpretá-lo como probabilidade de erro',
      test_decision: 'Determinar regiões de rejeição e tomar decisões de teste de forma sistemática',
      error_types: 'Distinguir erros de tipo I e de tipo II e compreender o compromisso entre $\\alpha$ e $\\beta$',
    },
    explanation: {
      intro: 'Um teste de hipóteses é um procedimento estruturado para tomar uma decisão com base em dados. Partes de uma suposição (hipótese nula $H_0$), recolhes dados e verificas se os dados falam contra $H_0$. A hipótese alternativa $H_1$ descreve aquilo que na verdade suspeitas:',
      significance: 'O nível de significância $\\alpha$ é a probabilidade máxima com que rejeitas $H_0$ erradamente (erro de tipo I). Valores típicos são $\\alpha = 0{,}05$ (5\\%) ou $\\alpha = 0{,}01$ (1\\%). Quanto menor for $\\alpha$, mais rigoroso é o teste — mas mais facilmente se deixam passar efeitos verdadeiros:',
      kai_tip: 'Pensem nos testes de hipóteses como num sistema anti-batota: $H_0$ significa «o jogador NÃO está a fazer batota». $\\alpha = 0{,}05$ significa: apenas em 5\\% dos casos bano um jogador honesto. Quero manter o $\\alpha$ pequeno para proteger os inocentes — mas se o tornar pequeno demais, os batoteiros verdadeiros escapam. É esse o compromisso alfa-beta!',
      rejection_region: 'A região de rejeição contém todos os resultados de teste tão extremos que levam a rejeitar $H_0$. Num teste unilateral à esquerda ($H_1\\colon p < p_0$) a região de rejeição fica à esquerda — calculas o maior número $k$ para o qual vale $P(X \\leq k) \\leq \\alpha$:',
      error_types: 'Podem acontecer dois erros: erro de tipo I ($\\alpha$) — rejeitas $H_0$ apesar de ela ser verdadeira («falso alarme»). Erro de tipo II ($\\beta$) — mantens $H_0$ apesar de $H_1$ ser verdadeira («efeito falhado»). Com um tamanho de amostra $n$ fixo vale: se diminuíres $\\alpha$, o $\\beta$ aumenta — e vice-versa:',
    },
    concepts: {
      hypotheses: {
        title: 'Hipótese nula e alternativa',
        desc: '$H_0$ é a suposição de «statu quo», que vale enquanto os dados não falarem contra ela. $H_1$ é aquilo que na verdade queres mostrar. Teste unilateral à esquerda: $H_1\\colon p < p_0$. Unilateral à direita: $H_1\\colon p > p_0$. Bilateral: $H_1\\colon p \\neq p_0$. Importante: nunca se «prova» $H_1$ — só se pode rejeitar ou manter $H_0$.',
      },
      significance_level: {
        title: 'Nível de significância $\\alpha$',
        desc: 'O limite superior da probabilidade de um erro de tipo I. Com $\\alpha = 0{,}05$ aceitas um risco de 5\\% de rejeitar $H_0$ erradamente. Valores habituais: $0{,}10$ (exploratório), $0{,}05$ (padrão), $0{,}01$ (rigoroso). O $\\alpha$ define-se ANTES do teste — nunca se ajusta a posteriori!',
      },
      error_types: {
        title: 'Erros de tipo I e de tipo II',
        desc: 'Erro de tipo I ($\\alpha$): $H_0$ é rejeitada apesar de ser verdadeira — um «falso alarme». Erro de tipo II ($\\beta$): $H_0$ é mantida apesar de $H_1$ ser verdadeira — um «efeito falhado». Com $n$ fixo, $\\alpha$ e $\\beta$ são opostos: um $\\alpha$ menor significa um $\\beta$ maior. Solução: um tamanho de amostra $n$ maior.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Teste de equilíbrio: o herói A é demasiado fraco?',
        context: 'Em 100 partidas entre o herói A e o herói B, o herói A ganha apenas 40 vezes. O Kai suspeita que o herói A está em desvantagem. Com um equilíbrio justo deveria valer $p = 0{,}5$.',
        step1: 'Definir as hipóteses e o nível de significância — unilateral à esquerda, porque o Kai suspeita que o A é demasiado fraco:',
        step2: 'Montagem experimental: $n = 100$ partidas, $X$ = número de vitórias do herói A, com distribuição binomial:',
        step3: 'Calcular a probabilidade de $X \\leq 40$ sob $H_0$ (distribuição binomial acumulada):',
        step4: 'Decisão do teste: valor $p$ de $0{,}028 < \\alpha = 0{,}05$ — $H_0$ é rejeitada. O herói A é significativamente demasiado fraco:',
        kai_comment: 'Foi esta a prova estatística de que precisava para a equipa de equilíbrio. 40 em 100 parece «quase aceitável», mas o teste mostra: com um equilíbrio justo só se veria um resultado tão extremo em 2{,}8\\% dos casos. Isso chega para uma atualização de nerf!',
      },
      crash_rate: {
        title: 'Verificar a taxa de falhas depois da atualização',
        context: 'Depois de um patch, a taxa de falhas deve ser no máximo de 2\\%. Em 200 sessões de teste o jogo falha 8 vezes. Será demasiado?',
        step1: 'Formular as hipóteses — unilateral à direita, porque o Kai quer verificar se a taxa está ACIMA de 2\\%:',
        step2: 'Dados: $n = 200$ sessões, $X = 8$ falhas (observado: $\\hat{p} = 4\\%$):',
        step3: 'Calcular a probabilidade de $X \\geq 8$ sob $H_0$ — é esse o valor $p$:',
        step4: 'Decisão do teste: valor $p$ de $0{,}042 < \\alpha = 0{,}05$ — a taxa de falhas está significativamente aumentada:',
        kai_comment: 'Sem o teste talvez tivesse dito «8 falhas em 200 sessões, até está bem». Mas o teste de hipóteses mostra: a probabilidade de ver tantas falhas com uma taxa verdadeira de 2\\% é inferior a 5\\%. O patch tem de ser revisto.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'Testes A/B em aplicações e sites',
        desc: 'Sempre que a Netflix muda o botão «Reproduzir agora» ou o Spotify testa uma nova vista de playlist, corre um teste de hipóteses. Versão A contra versão B: qual tem mais cliques? O valor $p$ decide se a diferença é real ou apenas flutuação aleatória. Também o TikTok, o YouTube e o Instagram usam testes A/B — cada funcionalidade que vês passou num teste de significância.',
      },
      quality_assurance: {
        title: 'Controlo de qualidade na produção',
        desc: 'Nas fábricas testa-se constantemente: a taxa de refugo está abaixo do limite? O peso de enchimento do pacote de batatas fritas corresponde ao valor impresso? Os testes de hipóteses protegem os consumidores — e as empresas de recolhas dispendiosas. Por trás de cada inspeção por amostragem está a mesma matemática que aqui aprendem.',
      },
      clinical_trials: {
        title: 'Ensaios clínicos e medicamentos',
        desc: 'Antes de um medicamento ser aprovado, tem de passar num teste de hipóteses: $H_0$ diz «o medicamento não atua melhor do que um placebo». Só se o valor $p$ descer abaixo de $\\alpha = 0{,}05$ é que a eficácia se considera demonstrada. As regras rigorosas ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) protegem os doentes de medicamentos ineficazes — mas também de rejeições prematuras de terapias eficazes.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ «provada»: $p > \\alpha$ significa que $H_0$ é verdadeira',
        correct: 'Formulação correta: $p > \\alpha$ significa que $H_0$ não pode ser rejeitada',
        why: 'Um teste de hipóteses nunca pode provar $H_0$ — só rejeitá-la ou mantê-la. «Não rejeitar» significa: os dados não chegam para refutar $H_0$. Talvez o efeito seja demasiado pequeno, talvez a amostra seja demasiado pequena. Por isso se diz «manter» ou «não rejeitar», nunca «aceitar» ou «provado».',
        kai_warning: 'É como a presunção de inocência em tribunal: «não culpado» não significa «inocente» — significa apenas que as provas não chegam. O mesmo com $H_0$: se não consigo demonstrar que o herói A é mais fraco, isso não significa automaticamente que esteja perfeitamente equilibrado!',
      },
      alpha_beta_confused: {
        wrong: 'Supor que um $\\alpha$ menor melhora automaticamente tudo',
        correct: 'Realidade: com $n$ fixo, um $\\alpha$ menor leva a um $\\beta$ maior',
        why: 'Se tornares o teste mais rigoroso (um $\\alpha$ menor), precisas de dados mais extremos para rejeitar $H_0$. Com isso aumenta a probabilidade de deixares passar um efeito verdadeiro ($\\beta$ sobe). A única saída: uma amostra $n$ maior — assim consegues manter pequenos tanto o $\\alpha$ como o $\\beta$.',
      },
    },
  },
};
