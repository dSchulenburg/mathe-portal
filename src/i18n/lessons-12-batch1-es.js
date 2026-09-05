export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'El sistema de partículas de «Hafenlichter 3D» tiene una pinta grandiosa: chispas que saltan, niebla que ondea, fuego que arde. Pero Kai tiene un problema de rendimiento: miles de partículas a la vez hacen sudar a la GPU. «Necesito calcular con qué rapidez se apagan las partículas para poder sacarlas de la memoria a tiempo», le explica a Mia. La respuesta está en la función $e$ y en su contrapartida, el logaritmo natural: las herramientas para todo lo que crece o decae exponencialmente.',
      challenge: 'Kai tiene que modelar matemáticamente la vida útil de las partículas: ¿con qué rapidez se apaga una chispa? ¿Cuándo una partícula de humo es tan transparente que se puede eliminar? Para eso necesita la regla de la cadena para funciones $e$, derivadas de $\\ln$ y resolver ecuaciones de decaimiento.',
      outro: 'Con funciones $e$ compuestas y derivadas de $\\ln$, Kai ha construido un sistema de partículas inteligente: cada chispa sigue una curva de decaimiento precisa y cada partícula de humo se recicla justo cuando su opacidad cae por debajo del umbral de percepción. «La regla de la cadena es prácticamente mi optimizador de rendimiento», sonríe Kai. «La GPU me lo agradece con 60 en lugar de 30 FPS.» Mia añade: «Y lo mejor: la misma matemática describe también la desintegración radiactiva y las curvas de carga de los condensadores.»',
    },
    objectives: {
      advanced_e_properties: 'Derivar funciones $e$ compuestas con la regla de la cadena: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Dominar la derivada de $\\ln(g(x))$ y usarla en el estudio de funciones',
      composite_exp_functions: 'Analizar productos de polinomios y funciones $e$ (extremos, puntos de inflexión)',
      differential_equations: 'Comprender ecuaciones diferenciales sencillas del tipo $f\'(t) = k \\cdot f(t)$ y plantear modelos de decaimiento',
    },
    explanation: {
      intro: 'En 1.º de Bachillerato aprendiste los fundamentos de $e^x$ y $\\ln(x)$. Ahora la cosa se pone seria: derivamos funciones $e$ compuestas, analizamos curvas con $\\ln$ y resolvemos ecuaciones de decaimiento. La clave es la regla de la cadena: cuando en el exponente no hay solo $x$, sino toda una función $g(x)$, la derivada exterior da $e^{g(x)}$ y la derivada interior $g\'(x)$ se añade como factor:',
      ln_derivative: 'Igual de elegante: la derivada de $\\ln(g(x))$ con la regla de la cadena. El logaritmo natural «da la vuelta a la función»: la derivada interior queda en el numerador y la propia función interior en el denominador:',
      kai_tip: 'En mi motor 3D las funciones $e$ aparecen por todas partes: decaimiento de partículas, densidad de la niebla, desvanecimiento del audio. El truco es siempre el mismo: la regla de la cadena. Cuando derivo $e^{-0{,}5t^2}$ para una distribución gaussiana, la función interior es $g(t) = -0{,}5t^2$ y la derivada interior es $g\'(t) = -t$. Sustituir y listo. En cuanto pillas este patrón una vez, sale solo.',
      integration: 'Al integrar, el proceso va al revés. Para funciones exponenciales sencillas vale: el factor del exponente pasa al denominador. Y la famosa regla del $\\frac{1}{x}$ lleva directamente al $\\ln$:',
      decay_model: 'El decaimiento exponencial es EL modelo estándar para procesos en los que la tasa de variación es proporcional al valor actual: $f\'(t) = -\\lambda \\cdot f(t)$. La solución es siempre una función $e$ con exponente negativo. El tiempo de semivida $t_{1/2}$ indica al cabo de cuánto tiempo queda la mitad del valor inicial:',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Regla de la cadena para funciones $e$',
        desc: 'En $f(x) = e^{g(x)}$ la función exterior es $e^u$ (derivada: $e^u$) y la interior es $g(x)$. El resultado: la función $e$ se mantiene, multiplicada por la derivada interior. Ejemplo: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Derivada de $\\ln(g(x))$',
        desc: 'La regla de la cadena para el logaritmo produce una fracción: derivada interior dividida entre la función interior. Es especialmente útil cuando $g(x)$ es un polinomio, por ejemplo $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Importante: el dominio queda restringido por $g(x) > 0$.',
      },
      exp_integration: {
        title: 'Integración logarítmica',
        desc: 'Cuando un integrando tiene la forma $\\frac{f\'(x)}{f(x)}$, la primitiva es de inmediato $\\ln|f(x)| + C$. Es la inversión de la derivada del $\\ln$ y uno de los trucos de integración más importantes. Ejemplo: $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Modelar el decaimiento de partículas',
        context: 'En el sistema de partículas de Kai arrancan a la vez 5000 partículas de chispa. Su número disminuye exponencialmente y Kai quiere calcular la tasa de decaimiento y el tiempo de semivida.',
        step1: 'Plantear el modelo de decaimiento: $N_0 = 5000$ partículas, constante de decaimiento $\\lambda = 0{,}03\\,\\text{s}^{-1}$:',
        step2: 'Derivar con la regla de la cadena: función interior $g(t) = -0{,}03t$, derivada interior $g\'(t) = -0{,}03$:',
        step3: 'Calcular la tasa inicial: en $t = 0$ desaparecen 150 partículas por segundo:',
        step4: 'Determinar el tiempo de semivida: resolver $N(t_{1/2}) = \\frac{N_0}{2}$ con el $\\ln$:',
        kai_comment: 'A los 23 segundos ha desaparecido la mitad de las partículas, así que puedo liberar memoria incluso antes para la siguiente explosión. En el motor pongo el umbral de eliminación en el $5\\%$ de opacidad, que son unos $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Estudio de función con función $e$',
        context: 'Kai modela el brillo de un destello de luz: primero sube y luego cae. La curva de brillo tiene la forma $f(x) = x^2 \\cdot e^{-x}$, una típica «función de destello».',
        step1: 'Función dada: producto de un polinomio y una función $e$ decreciente:',
        step2: 'Derivada con la regla del producto: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — para el segundo factor necesitamos la regla de la cadena:',
        step3: 'Ceros de la derivada: $e^{-x} > 0$ siempre, así que solo decide $x(2-x) = 0$:',
        step4: 'Determinar el máximo: calcular el valor de la función en $x = 2$:',
        kai_comment: 'Esta curva de «subida y luego caída» es perfecta para efectos de luz. En $x = 0$ está todo oscuro, en $x = 2$ el brillo es máximo y después viene un desvanecimiento suave. En mi shader uso justamente esta función para el fogonazo del cañón y los destellos de explosión.',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Sistemas de partículas en motores 3D',
        desc: 'Cada chispa, cada estela de humo, cada fuego de un videojuego sigue una curva de decaimiento exponencial $N(t) = N_0 \\cdot e^{-\\lambda t}$. La constante de decaimiento $\\lambda$ determina con qué rapidez se apagan las partículas. En Unity y Unreal Engine ajustas justamente este parámetro cuando configuras «Lifetime» y «Fade».',
      },
      signal_processing: {
        title: 'Procesado de audio y atenuación de señal',
        desc: 'Cuando oyes un efecto de reverberación en GarageBand o en una herramienta de DJ, el sonido decae exponencialmente: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. La función $e$ controla el volumen y el $\\sin$ la oscilación. También las señales Bluetooth y el alcance del wifi siguen este modelo: por eso el streaming se entrecorta cuanto más lejos estás del router.',
      },
      learning_curve: {
        title: 'Curva de aprendizaje y progresión de habilidad',
        desc: '¿Con qué rapidez aprendes un juego nuevo? La curva de aprendizaje $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ describe cómo las destrezas crecen rápido al principio y luego se acercan a un máximo. Los diseñadores de juegos usan este modelo para diseñar curvas de dificultad, y también tu cerebro sigue justamente esta función al aprender vocabulario o practicar un instrumento.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Olvidar la derivada interior: $(e^{3x})\' = e^{3x}$',
        correct: 'Aplicar la regla de la cadena: $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'En cuanto en el exponente hay algo más que $x$, la regla de la cadena es OBLIGATORIA. La función interior aquí es $g(x) = 3x$ con $g\'(x) = 3$. ¡Ese factor no puede faltar!',
        kai_warning: 'En mi shader derivé una vez $e^{-0{,}5t^2}$ y me olvidé del factor $-t$. Resultado: partículas que nunca cambiaban, como humo congelado. Desde entonces compruebo cada vez: ¿hay algo más que $x$ en el exponente? ¡Entonces regla de la cadena!',
      },
      ln_negative: {
        wrong: 'Olvidar las barras de valor absoluto: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Correcto con valor absoluto: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'La función $\\frac{1}{x}$ también está definida para valores negativos de $x$, pero $\\ln(x)$ solo para $x > 0$. Las barras garantizan que la primitiva valga en todo el dominio. En integrales definidas con límites positivos puedes omitirlas; en integrales indefinidas nunca.',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'Para «Hafenlichter 3D», Kai construye un generador procedimental de niveles: puentes, túneles y casas deben surgir de curvas matemáticas que se hacen girar alrededor de ejes. «Imaginaos: defino un perfil y lo pongo a girar, y ya tengo una columna, una cúpula o un casco de barco», se entusiasma Kai. Pero ¿cómo calcula el volumen exacto de estos cuerpos 3D? La respuesta: volúmenes de revolución, integración por partes y unas cuantas técnicas elegantes de integración.',
      challenge: 'Kai tiene que calcular volúmenes de objetos 3D que surgen al girar curvas. Además necesita la integración por partes para fórmulas de iluminación complejas y debe comprobar si ciertas integrales convergen siquiera.',
      outro: 'El generador de niveles funciona: Kai gira perfiles de curvas alrededor de ejes y obtiene cuerpos 3D perfectos con el volumen calculado con exactitud. «La integración por partes fue la clave para las integrales de iluminación», le cuenta a Amir, «y las integrales impropias me indican cuándo un efecto de luz tiene energía total finita, aunque en teoría se extienda infinitamente lejos.» Mia asiente: «Los ingenieros usan la misma matemática para dimensionar depósitos y los físicos para calcular la energía de las olas.»',
    },
    objectives: {
      integration_techniques: 'Aplicar con seguridad la integración por partes y la sustitución',
      rotation_volumes: 'Calcular volúmenes de revolución alrededor del eje $x$ con $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Comprobar la convergencia de integrales impropias y calcularlas',
      partial_integration: 'Emplear de forma dirigida el método de integración por partes cuando hay que integrar productos',
    },
    explanation: {
      intro: 'En 1.º de Bachillerato conociste las integrales definidas como área. Ahora se añaden tres técnicas nuevas. La primera es la integración por partes, la «inversión» de la regla del producto. Si tienes que integrar un producto como $x \\cdot e^x$, lo descompones en $u$ y $v\'$:',
      substitution: 'La segunda técnica es la sustitución, la «inversión» de la regla de la cadena al derivar. Cuando una función «está metida dentro» de otra, sustituyes la función interior por una variable nueva:',
      kai_tip: 'Mi truco para la integración por partes: «LIATE» — logarítmica, inversa trigonométrica, algebraica, trigonométrica, exponencial. Es el orden en el que eliges $u$. Así, en $\\int x \\cdot e^x\\,\\mathrm{d}x$ tienes $u = x$ (algebraica) y $v\' = e^x$ (exponencial). En $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$ tienes $u = \\ln(x)$ y $v\' = x$. ¡Funciona casi siempre!',
      rotation_volume: 'Ahora pasamos a tres dimensiones: si giras la gráfica de $f(x)$ alrededor del eje $x$, surge un cuerpo de revolución. Su volumen lo calculas imaginándote el cuerpo compuesto por infinitos discos finos: cada disco tiene radio $f(x)$:',
      improper: '¿Qué ocurre si un límite de integración es $\\infty$? ¿O si el integrando se vuelve no acotado en un punto? Entonces hablamos de integrales impropias. Sustituyes el punto problemático por un límite y compruebas si sale un valor finito:',
    },
    concepts: {
      partial_integration: {
        title: 'Integración por partes',
        desc: 'La inversión de la regla del producto: descompones el integrando en $u$ (que se deriva) y $\\mathrm{d}v$ (que se integra). Objetivo: la nueva integral $\\int v\\,\\mathrm{d}u$ debe ser más sencilla que la original. Aplicación típica: productos de polinomio y función $e$, o de polinomio y trigonometría.',
      },
      rotation_volume: {
        title: 'Volumen de revolución',
        desc: 'Una gráfica que gira alrededor del eje $x$ genera un cuerpo 3D. El volumen resulta de la suma de infinitos discos de radio $f(x)$ y grosor $\\mathrm{d}x$. Cada disco tiene volumen $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$; sumados (integrados) dan la fórmula.',
      },
      improper_integral: {
        title: 'Integrales impropias',
        desc: 'Integrales con $\\infty$ como límite o con integrando no acotado. Sustituyes el punto problemático por una variable y calculas el límite. Si el límite existe y es finito, la integral se llama convergente; en caso contrario, divergente. Clásico: $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ converge, pero $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ diverge.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Cuerpo de revolución para el diseño de niveles',
        context: 'Kai quiere generar una columna cuyo perfil siga la curva $f(x) = \\sqrt{x}$. Entre $x = 0$ y $x = 4$ la curva gira alrededor del eje $x$. ¿Cuál es el volumen de la columna?',
        step1: 'Definir el perfil: la función raíz cuadrada en el intervalo $[0;\\,4]$:',
        step2: 'Aplicar la fórmula del volumen de revolución: elevar $f(x)$ al cuadrado y poner $\\pi$ delante:',
        step3: 'Hallar la primitiva y sustituir los límites:',
        step4: 'Resultado: la columna tiene un volumen de $8\\pi$ unidades de volumen:',
        kai_comment: '¡Esa es justamente la fórmula que usa mi generador procedimental! Defino perfiles de curvas, los giro y conozco el volumen al instante: importante para las simulaciones físicas, para que los objetos tengan el peso correcto.',
      },
      partial_int: {
        title: 'Integración por partes para la iluminación',
        context: 'En el shader de cálculo de luz de Kai aparece la integral $\\int x \\cdot e^x\\,\\mathrm{d}x$, un producto que no se puede integrar directamente.',
        step1: 'Elegir la descomposición: $u = x$ (se simplifica al derivar), $v\' = e^x$ (se integra fácilmente):',
        step2: 'Determinar derivadas y primitivas:',
        step3: 'Sustituir en la fórmula: la nueva integral es ahora solo $\\int e^x\\,\\mathrm{d}x$:',
        step4: 'Simplificar del todo: sacar factor común da una forma elegante:',
        kai_comment: 'El momento en que la nueva integral es más sencilla que la anterior: esa es la sensación de éxito de la integración por partes. Si se complica, has elegido mal $u$ y $v\'$. ¡Entonces basta con intercambiarlos!',
      },
    },
    realworld: {
      '3d_printing': {
        title: 'Impresión 3D y cálculo de volumen en CAD',
        desc: 'Toda impresora 3D tiene que saber cuánto material necesita. En piezas de revolución (jarrones, tubos, boquillas) el software de laminado calcula el volumen exactamente con esta fórmula de revolución. También en programas de CAD como Fusion 360 hay cálculo integral: cuando giras una sección, el software calcula $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Caída de luz en motores de juego',
        desc: '¿Cuánta luz total recibe una escena de una fuente puntual? La intensidad disminuye con $I(r) = I_0 \\cdot e^{-\\alpha r}$. La integral impropia $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ muestra que la energía total es finita. Por eso los motores de juego pueden simular luces de alcance limitado sin equivocarse físicamente.',
      },
      terrain_volume: {
        title: 'Generación de terreno y movimiento de tierras',
        desc: 'En proyectos de carreteras y en juegos tipo Minecraft hay que calcular el volumen de paisajes con colinas. La fórmula $V = \\iint h(x,y)\\,\\mathrm{d}A$ suma la altura sobre toda la superficie: una integral bidimensional. Los ingenieros civiles calculan así la excavación de tierra, y los desarrolladores de juegos el volumen de datos de las mallas de terreno.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Olvidar el cuadrado: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Correctamente al cuadrado: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Cada disco tiene área $\\pi r^2$ con $r = f(x)$. Sin el cuadrado no calculas el área de un círculo, sino algo completamente distinto. Regla mnemotécnica: «pi erre cuadrado»; ¡el cuadrado pertenece a la fórmula del círculo!',
        kai_warning: 'Cometí ese error una vez en una game jam: mi columna tenía solo una fracción del volumen correcto y se desplomó en la simulación física. Desde entonces escribo siempre la fórmula bien grande en el monitor: $V = \\pi \\int [f(x)]^2$!',
      },
      improper_no_limit: {
        wrong: 'Sustituir $\\infty$ directamente en lugar de calcular el límite',
        correct: 'Formular el límite correctamente y comprobar la convergencia',
        why: '¡$\\infty$ no es un número que se pueda sustituir! Siempre tienes que calcular el límite $\\lim_{b \\to \\infty}$ y comprobar si existe. Si no, es fácil pasar por alto que una integral diverge, como $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, que pese a ser decreciente no tiene valor finito.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: 'El mundo 3D de «Hafenlichter 3D» va tomando forma: grúas portuarias, fachadas de edificios, superficies de agua; todo está hecho de triángulos, y cada triángulo está en un plano. «Para una iluminación realista tengo que calcular el vector normal de cada superficie», explica Kai. «Y para la detección de colisiones necesito los puntos de corte de rectas con planos.» Bienvenidos a la geometría analítica del espacio: la matemática que hay detrás de todo motor 3D.',
      challenge: 'Kai tiene que plantear ecuaciones de planos a partir de tres puntos, calcular vectores normales con el producto vectorial, hallar puntos de corte recta-plano y determinar distancias entre objetos, todo ello en tiempo real para su motor de juego.',
      outro: 'El sistema de detección de colisiones de Kai funciona a la perfección: los proyectiles impactan en las paredes, los personajes se apoyan en el suelo y la iluminación calcula para cada superficie la incidencia de luz perfecta mediante vectores normales. «El producto vectorial es la herramienta que más uso», dice Kai. «Dos vectores directores dentro, vector normal fuera, y ya sé cómo está orientada la superficie en el espacio.» Amir añade: «Y la fórmula de la distancia comprueba si un jugador está lo bastante cerca de un objeto para recogerlo.»',
    },
    objectives: {
      plane_equations: 'Plantear ecuaciones de planos en forma paramétrica, normal y general, y convertirlas entre sí',
      line_plane_intersection: 'Calcular puntos de corte de rectas con planos y determinar posiciones relativas',
      distances_3d: 'Calcular distancias en el espacio: punto-plano, punto-recta y recta-recta',
      cross_product: 'Dominar el producto vectorial y usarlo para calcular vectores normales',
    },
    explanation: {
      intro: 'Los planos del espacio tridimensional se pueden describir de varias maneras. La forma paramétrica parte de un punto de apoyo $\\vec{a}$ y genera el plano con dos vectores directores $\\vec{u}$ y $\\vec{v}$. Cualquier punto del plano se alcanza con valores adecuados de $r$ y $s$:',
      normal_form: 'A menudo resulta más elegante la forma normal: basta un vector $\\vec{n}$ perpendicular al plano (el vector normal) y un punto $\\vec{a}$ del plano para describirlo por completo. De ahí se deduce la forma general: una única ecuación con $x_1$, $x_2$ y $x_3$:',
      kai_tip: 'En mi motor 3D guardo cada superficie en forma general: tres coeficientes y una constante, y ya está. Para renderizar necesito el vector normal para la iluminación ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$: el producto escalar con el vector de luz da el valor de brillo). Y para la física necesito puntos de corte y distancias. Las tres formas son útiles, cada una para un fin distinto.',
      cross_product: 'El producto vectorial $\\vec{u} \\times \\vec{v}$ da un vector perpendicular a ambos vectores de entrada: perfecto para calcular el vector normal a partir de dos vectores directores. ¡Atención: el orden importa (anticonmutativo)!',
      distance_point_plane: 'La distancia de un punto $P$ a un plano $E$ se calcula elegantemente con la forma normal de Hesse. Sustituyes el punto en la ecuación general, tomas el valor absoluto y divides por la longitud del vector normal:',
    },
    concepts: {
      plane_equation: {
        title: 'Ecuación del plano en forma general',
        desc: 'La representación más compacta de un plano: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. Los coeficientes $n_1, n_2, n_3$ son las componentes del vector normal, y $d$ se obtiene sustituyendo un punto conocido del plano. Todo punto $(x_1, x_2, x_3)$ que cumpla la ecuación está en el plano.',
      },
      cross_product: {
        title: 'Producto vectorial',
        desc: 'El producto vectorial de dos vectores $\\vec{u}$ y $\\vec{v}$ da un vector nuevo $\\vec{n}$ perpendicular a ambos. Su módulo $|\\vec{u} \\times \\vec{v}|$ equivale al área del paralelogramo generado. Importante: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$; ¡el orden determina el sentido!',
      },
      distance_formula: {
        title: 'Distancia punto-plano',
        desc: 'La distancia más corta de un punto $P$ a un plano es la longitud de la perpendicular desde $P$ al plano. La fórmula $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ calcula esa distancia directamente a partir de la forma general. El valor absoluto del numerador es decisivo: sin él podría salir una «distancia» negativa.',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Plano a partir de tres vértices',
        context: 'Kai tiene un triángulo en su mundo de juego con los vértices $A(1|0|2)$, $B(3|1|0)$ y $C(0|4|1)$. Necesita la ecuación del plano para la iluminación y la detección de colisiones.',
        step1: 'Tres puntos dados: formar con ellos dos vectores directores:',
        step2: 'Calcular los vectores directores $\\vec{u} = \\overrightarrow{AB}$ y $\\vec{v} = \\overrightarrow{AC}$:',
        step3: 'Calcular el producto vectorial $\\vec{n} = \\vec{u} \\times \\vec{v}$ con detalle, componente a componente según la fórmula:',
        step4: 'Plantear la forma general: el vector normal como coeficientes y $d$ sustituyendo $A$: $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$:',
        kai_comment: 'En el motor ocurre exactamente esto para cada triángulo: tres vértices dentro, calcular el producto vectorial, plano guardado. El vector normal determina al mismo tiempo hacia dónde «mira» la superficie: ¡decisivo para la iluminación y el backface culling!',
      },
      collision_detection: {
        title: 'Corte recta-plano (raycast)',
        context: 'Un proyectil vuela en línea recta por el espacio. Kai tiene que comprobar si impacta en una pared y dónde: eso es un raycast, un punto de corte recta-plano.',
        step1: 'Recta (trayectoria) y plano (pared) dados:',
        step2: 'Sustituir la recta en la ecuación del plano: las componentes de $\\vec{x}(t)$ en lugar de $x_1, x_2, x_3$:',
        step3: 'Despejar $t$: agrupar y simplificar:',
        step4: 'Calcular el punto de corte: sustituir $t = 0$ en la ecuación de la recta:',
        kai_comment: 'Con $t = 0$ la recta corta el plano de inmediato, es decir, el proyectil sale justo pegado a la pared. En el motor compruebo además $t > 0$ (sentido hacia delante) y $0 \\leq t \\leq t_{\\max}$ (alcance). Así filtro los impactos detrás del jugador o fuera de alcance.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: 'Renderizado 3D e iluminación',
        desc: 'Todo motor 3D calcula la iluminación mediante el producto escalar del vector normal por la dirección de la luz: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. Cuanto menor sea el ángulo entre la luz y la normal de la superficie, más clara será esta. Es el modelo de iluminación de Lambert: la base de la luz realista en juegos, películas y aplicaciones de RA.',
      },
      architecture: {
        title: 'Arquitectura y software BIM',
        desc: 'En programas de arquitectura como AutoCAD o Revit, cubiertas, paredes y rampas se modelan como planos. La forma general describe la posición en el espacio y el vector normal indica la orientación. Los ingenieros estructurales calculan con ecuaciones de planos cómo actúan las fuerzas sobre superficies inclinadas, desde el tejado hasta el tablero de un puente.',
      },
      gps_navigation: {
        title: 'GPS y navegación de drones',
        desc: 'Las coordenadas GPS son tridimensionales (longitud, latitud, altura). Los drones navegan a lo largo de rectas en el espacio 3D y deben reconocer obstáculos modelados como planos. La distancia punto-plano decide si un dron se acerca demasiado a la fachada de un edificio. Los coches autónomos usan la misma matemática para procesar el LIDAR.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Ignorar el orden: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Anticonmutativo: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'El producto vectorial NO es conmutativo: el orden determina el sentido del vector resultante (regla de la mano derecha). Intercambiarlos cambia el signo. Eso puede hacer que los vectores normales apunten en el sentido equivocado, lo que invierte toda la iluminación.',
        kai_warning: 'Este fallo se reconoce al instante: superficies iluminadas «desde dentro» mientras la cara exterior queda oscura. Ocurre cuando el vector normal apunta en el sentido equivocado. ¡Sé siempre coherente con el orden: $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, nunca al revés!',
      },
      distance_abs_forgotten: {
        wrong: 'Olvidar el valor absoluto en el numerador: $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'Con valor absoluto: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: '¡Las distancias son siempre positivas! Sin el valor absoluto en el numerador puede salir un valor negativo si el punto está al «otro lado» del plano. En un examen eso cuesta puntos; en un motor de juego provoca objetos que atraviesan paredes.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Antes del lanzamiento de «Hafenlichter 3D» llega la gran prueba de juego: 200 probadores juegan durante una semana y Kai tiene que tomar decisiones duras. ¿Es justo el equilibrio? ¿Es aceptable la tasa de fallos? «La intuición no basta», dice Mia. «Necesitas una prueba estadística que te diga si un efecto observado es real o solo casualidad.» Bienvenidos a los contrastes de hipótesis: la matemática de las decisiones basadas en datos.',
      challenge: 'Kai tiene que decidir si las diferencias observadas en la prueba de juego son estadísticamente significativas. ¿Es el héroe A realmente más débil que el héroe B, o solo tuvo mala suerte? ¿Ha subido de verdad la nueva tasa de fallos? Para eso necesita hipótesis nulas, niveles de significación y saber manejar los tipos de error.',
      outro: 'La prueba de juego está evaluada: Kai ha demostrado estadísticamente que el héroe A es demasiado débil ($p = 0{,}028 < 0{,}05$) y que la tasa de fallos de la nueva compilación ha subido de forma significativa. «Sin contrastes de hipótesis quizá habría pasado por alto estos problemas», admite. Mia añade: «Lo bonito es que ahora sabes exactamente con cuánta seguridad decides: el nivel de significación cuantifica tu riesgo de equivocarte.»',
    },
    objectives: {
      null_hypothesis: 'Plantear correctamente la hipótesis nula y la alternativa y distinguir contrastes unilaterales de bilaterales',
      significance_level: 'Comprender el nivel de significación $\\alpha$ e interpretarlo como probabilidad de error',
      test_decision: 'Determinar regiones de rechazo y tomar decisiones de contraste de forma sistemática',
      error_types: 'Distinguir errores de tipo I y de tipo II y comprender el compromiso entre $\\alpha$ y $\\beta$',
    },
    explanation: {
      intro: 'Un contraste de hipótesis es un procedimiento estructurado para tomar una decisión a partir de datos. Partes de una suposición (la hipótesis nula $H_0$), reúnes datos y compruebas si los datos van en contra de $H_0$. La hipótesis alternativa $H_1$ describe lo que en realidad sospechas:',
      significance: 'El nivel de significación $\\alpha$ es la probabilidad máxima con la que rechazas $H_0$ erróneamente (error de tipo I). Valores típicos son $\\alpha = 0{,}05$ (5\\%) o $\\alpha = 0{,}01$ (1\\%). Cuanto menor sea $\\alpha$, más estricto es el contraste, pero más fácil resulta pasar por alto efectos reales:',
      kai_tip: 'Pensad en los contrastes de hipótesis como en un sistema antitrampas: $H_0$ significa «el jugador NO hace trampas». $\\alpha = 0{,}05$ significa que solo en el 5\\% de los casos baneo a un jugador honesto. Quiero mantener $\\alpha$ pequeño para proteger a los inocentes, pero si lo hago demasiado pequeño, los tramposos de verdad se cuelan. ¡Ese es el compromiso alfa-beta!',
      rejection_region: 'La región de rechazo contiene todos los resultados tan extremos que llevan a rechazar $H_0$. En un contraste unilateral por la izquierda ($H_1\\colon p < p_0$) la región de rechazo queda a la izquierda: calculas el mayor número $k$ para el que se cumple $P(X \\leq k) \\leq \\alpha$:',
      error_types: 'Pueden ocurrir dos errores: error de tipo I ($\\alpha$), rechazas $H_0$ aunque sea cierta («falsa alarma»). Error de tipo II ($\\beta$), mantienes $H_0$ aunque $H_1$ sea cierta («efecto no detectado»). Con un tamaño de muestra $n$ fijo se cumple: si reduces $\\alpha$, $\\beta$ aumenta, y al revés:',
    },
    concepts: {
      hypotheses: {
        title: 'Hipótesis nula y alternativa',
        desc: '$H_0$ es la suposición de «statu quo», que vale mientras los datos no digan lo contrario. $H_1$ es lo que en realidad quieres mostrar. Contraste unilateral por la izquierda: $H_1\\colon p < p_0$. Por la derecha: $H_1\\colon p > p_0$. Bilateral: $H_1\\colon p \\neq p_0$. Importante: $H_1$ nunca se «demuestra»; solo se puede rechazar o mantener $H_0$.',
      },
      significance_level: {
        title: 'Nivel de significación $\\alpha$',
        desc: 'La cota superior de la probabilidad de un error de tipo I. Con $\\alpha = 0{,}05$ aceptas un riesgo del 5\\% de rechazar $H_0$ erróneamente. Valores habituales: $0{,}10$ (exploratorio), $0{,}05$ (estándar), $0{,}01$ (estricto). ¡$\\alpha$ se fija ANTES del contraste, nunca se ajusta a posteriori!',
      },
      error_types: {
        title: 'Errores de tipo I y de tipo II',
        desc: 'Error de tipo I ($\\alpha$): se rechaza $H_0$ aunque sea cierta, una «falsa alarma». Error de tipo II ($\\beta$): se mantiene $H_0$ aunque $H_1$ sea cierta, un «efecto no detectado». Con $n$ fijo, $\\alpha$ y $\\beta$ van en sentidos opuestos: un $\\alpha$ menor significa un $\\beta$ mayor. Solución: un tamaño de muestra $n$ mayor.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Prueba de equilibrio: ¿es el héroe A demasiado débil?',
        context: 'En 100 partidas entre el héroe A y el héroe B, el héroe A gana solo 40 veces. Kai sospecha que el héroe A está en desventaja. Con un equilibrio justo debería cumplirse $p = 0{,}5$.',
        step1: 'Fijar hipótesis y nivel de significación: unilateral por la izquierda, porque Kai sospecha que A es demasiado débil:',
        step2: 'Diseño experimental: $n = 100$ partidas, $X$ = número de victorias del héroe A, con distribución binomial:',
        step3: 'Calcular la probabilidad de $X \\leq 40$ bajo $H_0$ (distribución binomial acumulada):',
        step4: 'Decisión del contraste: valor $p$ de $0{,}028 < \\alpha = 0{,}05$; se rechaza $H_0$. El héroe A es significativamente demasiado débil:',
        kai_comment: 'Esa era la prueba estadística que necesitaba para el equipo de equilibrio. 40 de 100 parece «casi normal», pero el contraste muestra que, con un equilibrio justo, solo se vería un resultado tan extremo en el 2{,}8\\% de los casos. ¡Suficiente para una actualización de ajuste!',
      },
      crash_rate: {
        title: 'Comprobar la tasa de fallos tras la actualización',
        context: 'Tras un parche, la tasa de fallos debe ser como máximo del 2\\%. En 200 sesiones de prueba el juego se cierra 8 veces. ¿Es demasiado?',
        step1: 'Plantear las hipótesis: unilateral por la derecha, porque Kai quiere comprobar si la tasa está POR ENCIMA del 2\\%:',
        step2: 'Datos: $n = 200$ sesiones, $X = 8$ cierres (observado: $\\hat{p} = 4\\%$):',
        step3: 'Calcular la probabilidad de $X \\geq 8$ bajo $H_0$: ese es el valor $p$:',
        step4: 'Decisión del contraste: valor $p$ de $0{,}042 < \\alpha = 0{,}05$; la tasa de fallos está significativamente elevada:',
        kai_comment: 'Sin el contraste quizá habría dicho «8 cierres en 200 sesiones, no está mal». Pero el contraste de hipótesis muestra que la probabilidad de ver tantos cierres con una tasa real del 2\\% es inferior al 5\\%. Hay que revisar el parche otra vez.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'Pruebas A/B en aplicaciones y webs',
        desc: 'Cada vez que Netflix cambia el botón «Reproducir» o Spotify prueba una nueva vista de lista, se ejecuta un contraste de hipótesis. Versión A contra versión B: ¿cuál tiene más clics? El valor $p$ decide si la diferencia es real o solo variación aleatoria. También TikTok, YouTube e Instagram usan pruebas A/B: cada función que ves ha superado un contraste de significación.',
      },
      quality_assurance: {
        title: 'Control de calidad en la producción',
        desc: 'En las fábricas se contrasta constantemente: ¿está la tasa de desecho por debajo del límite? ¿Coincide el peso de la bolsa de patatas con el valor impreso? Los contrastes de hipótesis protegen a los consumidores, y a las empresas de costosas retiradas. Detrás de cada control por muestreo está la misma matemática que aprendéis aquí.',
      },
      clinical_trials: {
        title: 'Ensayos clínicos y medicamentos',
        desc: 'Antes de aprobar un medicamento, este debe superar un contraste de hipótesis: $H_0$ dice «el medicamento no actúa mejor que un placebo». Solo si el valor $p$ cae por debajo de $\\alpha = 0{,}05$ se considera demostrada la eficacia. Las reglas estrictas ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) protegen a los pacientes de medicamentos ineficaces, pero también de rechazos prematuros de terapias eficaces.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ «demostrada»: $p > \\alpha$ significa que $H_0$ es cierta',
        correct: 'Formulación correcta: $p > \\alpha$ significa que $H_0$ no puede rechazarse',
        why: 'Un contraste de hipótesis nunca puede demostrar $H_0$; solo rechazarla o mantenerla. «No rechazar» significa que los datos no bastan para refutar $H_0$. Quizá el efecto sea demasiado pequeño, quizá la muestra sea demasiado pequeña. Por eso se dice «mantener» o «no rechazar», nunca «aceptar» o «demostrado».',
        kai_warning: 'Es como la presunción de inocencia ante un tribunal: «no culpable» no significa «inocente», solo que las pruebas no bastan. Lo mismo con $H_0$: si no puedo demostrar que el héroe A es más débil, eso no significa automáticamente que esté perfectamente equilibrado.',
      },
      alpha_beta_confused: {
        wrong: 'Suponer que un $\\alpha$ menor mejora automáticamente todo',
        correct: 'Realidad: con $n$ fijo, un $\\alpha$ menor lleva a un $\\beta$ mayor',
        why: 'Si haces el contraste más estricto (un $\\alpha$ menor), necesitas datos más extremos para rechazar $H_0$. Con ello aumenta la probabilidad de pasar por alto un efecto real ($\\beta$ sube). La única salida: una muestra $n$ mayor, así puedes mantener pequeños tanto $\\alpha$ como $\\beta$.',
      },
    },
  },
};
