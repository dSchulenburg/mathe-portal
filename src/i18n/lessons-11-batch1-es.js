export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'El modelo ML de Amir para DataPulse ofrece recomendaciones de canciones aceptables — pero el entrenamiento dura eternamente. "El descenso de gradiente es basicamente lo mismo que derivadas", le explica su profesora de matematicas. "Si entiendes como funcionan las reglas de derivacion, tambien entenderas por que tu modelo aprende." Amir decide trabajar las reglas sistematicamente.',
      challenge: 'Amir quiere entender como su modelo ML deriva internamente la funcion de perdida — para eso necesita la regla de la potencia, la regla de la suma, la regla del producto y la regla de la cadena.',
      outro: 'Amir ahora tiene una base solida: regla de la potencia para terminos simples, regla de la suma y del factor para expresiones compuestas, regla del producto para multiplicaciones y la regla de la cadena para funciones anidadas. "Ahora finalmente entiendo lo que PyTorch hace en segundo plano con Autograd", dice satisfecho.',
    },
    objectives: {
      power_rule: 'Aplicar con seguridad la regla de la potencia: derivar $f(x) = x^n$',
      constant_sum_rule: 'Dominar las reglas del factor constante y de la suma: derivar terminos individualmente y mantener factores',
      product_quotient_rule: 'Aplicar correctamente las reglas del producto y del cociente',
      chain_rule: 'Utilizar con seguridad la regla de la cadena en funciones anidadas',
    },
    explanation: {
      intro: 'La regla de la potencia es la regla base mas importante: bajas el exponente como factor y reduces el exponente en 1. Con ella derivas cualquier funcion potencial en un instante:',
      constant_factor: 'Los factores constantes se mantienen al derivar, y en sumas puedes derivar termino a termino. Eso hace los terminos compuestos mas claros:',
      amir_tip: 'En mi codigo ML hay sumas y factores por todas partes — la funcion de perdida es una enorme suma sobre todos los puntos de datos. Que pueda derivar cada termino individualmente es lo que hace posible la retropropagacion!',
      product_rule: 'Cuando dos funciones se multiplican, NO puedes simplemente derivar ambas por separado. En su lugar se aplica la regla del producto — "primera por derivada de la segunda mas segunda por derivada de la primera":',
      quotient_rule: 'Para cocientes de funciones existe la regla del cociente. Regla mnemotecnica: "NAD menos DAN entre N al cuadrado" (N = denominador, D = numerador, A = derivada):',
      chain_rule: 'En funciones anidadas — es decir, una funcion dentro de otra — necesitas la regla de la cadena. Derivas "de fuera hacia dentro" y multiplicas por la derivada interior:',
    },
    concepts: {
      power_rule: {
        title: 'Regla de la potencia',
        desc: 'La regla fundamental: el exponente se convierte en factor, el exponente baja 1. Tambien vale para exponentes negativos y fraccionarios, p.ej. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Regla de la suma y del factor',
        desc: 'Las sumas se derivan termino a termino, los factores constantes se mantienen. Asi descompones cualquier termino polinomico en partes simples.',
      },
      product_rule: {
        title: 'Regla del producto',
        desc: 'Para el producto de dos funciones: derivada de la primera por la segunda mas la primera por derivada de la segunda. Imprescindible cuando dos expresiones variables se multiplican.',
      },
      chain_rule: {
        title: 'Regla de la cadena',
        desc: 'Derivar la funcion exterior, dejar la interior, luego multiplicar por la derivada de la interior. El corazon de la retropropagacion en redes neuronales.',
      },
    },
    examples: {
      power_sum: {
        title: 'Derivar un polinomio con regla de la potencia y la suma',
        context: 'Amir simplifica un termino de su funcion de coste.',
        step1: 'Dado el polinomio — derivamos cada termino individualmente:',
        step2: 'Aplicar la regla de la potencia a cada termino: exponente como factor, exponente menos 1. La constante $-7$ desaparece:',
        step3: 'Simplificar da la funcion derivada:',
        amir_comment: 'Exactamente asi se ve el gradiente de mis features polinomicas. Cada termino aporta su contribucion a la pendiente — y PyTorch lo hace automaticamente para miles de parametros a la vez.',
      },
      chain_rule: {
        title: 'Funcion anidada con la regla de la cadena',
        context: 'Amir deriva una funcion de activacion que contiene una composicion.',
        step1: 'Dada una funcion potencial anidada:',
        step2: 'Descomposicion en funcion exterior $f(u) = u^3$ y funcion interior $g(x) = 2x^2 + 1$:',
        step3: 'Derivar la exterior (regla de la potencia en $u^3$), dejar la interior, por derivada interior ($4x$):',
        step4: 'Simplificado — factor $4x$ llevado adelante:',
        amir_comment: 'La regla de la cadena ES literalmente la retropropagacion! Cada capa en la red neuronal es una funcion anidada, y la regla de la cadena encadena los gradientes de capa en capa.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Descenso de gradiente en Machine Learning',
        desc: 'Todo modelo ML minimiza una funcion de perdida derivando. El gradiente senala la direccion de mayor subida — vamos en la direccion opuesta para encontrar el minimo.',
      },
      marginal_cost: {
        title: 'Costes marginales en economia',
        desc: 'La derivada de la funcion de costes $K(x)$ da los costes marginales: cuanto cuesta producir una unidad mas? Las empresas lo usan a diario para el calculo de precios.',
      },
      acceleration: {
        title: 'Aceleracion en fisica',
        desc: 'La velocidad es la derivada del camino, la aceleracion la derivada de la velocidad. El sensor de tu movil mide exactamente eso: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'La derivada de una constante es la constante misma',
        correct: 'La derivada de una constante es siempre cero',
        why: 'Una constante no tiene pendiente — no cambia. Piensa en $f(x) = 5$: es una linea horizontal, asi que la pendiente es 0 en todas partes. Eso vale para cualquier numero sin $x$.',
        amir_warning: 'El termino de sesgo en mi modelo es una constante — su derivada respecto a $x$ es 0. Si lo olvidas, tu gradiente tiene un desplazamiento incorrecto y el entrenamiento diverge.',
      },
      chain_rule_forgotten: {
        wrong: 'Olvidar la derivada interior en funciones anidadas',
        correct: 'Siempre multiplicar por la derivada interior',
        why: 'En $[(3x+1)^4]\'$ no basta con bajar el exponente. DEBES multiplicar por la derivada del termino interior $(3x+1)\' = 3$. Sin la derivada interior falta el factor 3.',
        amir_warning: 'Imagina que en una red neuronal olvidas la derivada interior en una capa — el gradiente seria completamente incorrecto y el modelo aprende tonterias. La regla de la cadena no es opcional!',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'El algoritmo de recomendacion de Amir da resultados — pero son realmente optimos? "Debes analizar la funcion de perdida completamente", dice su profesor. "Donde estan los minimos? Donde los puntos de inflexion?" Amir se da cuenta: un analisis completo de curvas le muestra si su modelo realmente ha encontrado el minimo global o esta atascado en un minimo local.',
      challenge: 'Amir analiza el paisaje de perdida de su modelo: determinar completamente ceros, extremos, puntos de inflexion y monotonia de una funcion.',
      outro: 'Amir ahora puede caracterizar completamente cualquier funcion racional entera: encontrar ceros, determinar maximos y minimos, calcular puntos de inflexion y leer el comportamiento de monotonia. "Si dibujo asi el paisaje de perdida, veo inmediatamente si mi optimizador ha llegado al valle correcto", dice.',
    },
    objectives: {
      zeros_extrema: 'Determinar sistematicamente ceros y puntos extremos de una funcion',
      inflection_points: 'Calcular puntos de inflexion y comprender su significado para el trazado de la curva',
      monotonicity_symmetry: 'Analizar el comportamiento de monotonia y la simetria de una funcion',
    },
    explanation: {
      intro: 'Un analisis de curvas es el analisis completo de una funcion. Comenzamos con los ceros — los puntos donde la grafica corta el eje $x$:',
      extrema: 'Los puntos extremos (maximos y minimos) los encuentras donde la primera derivada es cero. Pero cuidado: no todo cero de $f\'$ es automaticamente un extremo! Necesitas la segunda derivada para confirmarlo:',
      amir_tip: 'El paisaje de perdida de mi modelo tiene muchos minimos locales. Con el analisis de curvas puedo verificar si un punto critico es realmente un minimo — o solo un punto de silla donde el optimizador se queda atascado.',
      inflection: 'Los puntos de inflexion marcan la transicion entre curvatura a la izquierda y a la derecha. Aqui cambia el comportamiento de curvatura — la segunda derivada cambia de signo:',
      monotonicity: 'El comportamiento de monotonia te dice donde la funcion crece y donde decrece. Lo lees directamente del signo de la primera derivada:',
    },
    concepts: {
      extrema: {
        title: 'Puntos extremos (maximos/minimos)',
        desc: 'Condicion necesaria: $f\'(x_0) = 0$. Suficiente: $f\'\'(x_0) < 0$ da maximo, $f\'\'(x_0) > 0$ da minimo. Ambas condiciones juntas lo aseguran.',
      },
      inflection: {
        title: 'Puntos de inflexion',
        desc: 'Donde cambia la curvatura: $f\'\'(x_0) = 0$ Y $f\'\'\'(x_0) \\neq 0$. En distribuciones normales los puntos de inflexion marcan la desviacion estandar.',
      },
      symmetry: {
        title: 'Simetria',
        desc: 'Simetria axial respecto al eje $y$ cuando $f(-x) = f(x)$ (solo exponentes pares). Simetria puntual respecto al origen cuando $f(-x) = -f(x)$ (solo exponentes impares). Ahorra trabajo de calculo!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Analisis completo de curvas',
        context: 'Amir investiga una funcion cubica — similar a funciones de perdida con varios extremos.',
        step1: 'Dada la funcion — la analizamos completamente:',
        step2: 'Formar la primera derivada y determinar ceros (condicion necesaria para extremos):',
        step3: 'Evaluar la segunda derivada en los puntos criticos (condicion suficiente): valor negativo = maximo, valor positivo = minimo:',
        step4: 'Determinar el punto de inflexion via $f\'\' = 0$ y confirmar con la tercera derivada:',
        amir_comment: 'Exactamente asi analizo el paisaje de perdida: primero encontrar puntos criticos, luego verificar si es minimo o punto de silla. En funciones de alta dimension mi optimizador lo hace numericamente — pero el principio es identico.',
      },
      graph_properties: {
        title: 'Usar simetria y extremos',
        context: 'Una funcion simetrica — la mitad del trabajo se elimina gracias a la simetria.',
        step1: 'Dada una funcion de grado 4 — verificamos primero la simetria:',
        step2: 'Sustituir $-x$: todos los exponentes pares, asi que $f(-x) = f(x)$ — simetria axial! Los extremos aparecen simetricamente:',
        step3: 'Igualar la primera derivada a cero — por simetria basta encontrar las soluciones positivas:',
        step4: 'Calcular valores de funcion — gracias a la simetria vale $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'La simetria en datos vale oro: si se que mi funcion de perdida es simetrica, solo necesito buscar la mitad del espacio de parametros. Eso reduce el tiempo de entrenamiento a la mitad!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analizar distribuciones de datos',
        desc: 'La distribucion normal tiene puntos de inflexion en $\\mu \\pm \\sigma$. El analisis de curvas te dice donde se concentran mas puntos de datos y donde comienza la dispersion.',
      },
      profit_analysis: {
        title: 'Maximizacion de beneficios',
        desc: 'La funcion de beneficio $G(x)$ tiene un maximo — la cantidad de produccion optima. El analisis de curvas muestra exactamente a que cantidad el beneficio es maximo.',
      },
      population_growth: {
        title: 'Crecimiento demografico',
        desc: 'El punto de inflexion de una curva de crecimiento marca el momento a partir del cual el crecimiento disminuye. Los epidemiologos usan exactamente este analisis para curvas de infeccion.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Todo cero de $f\'$ es automaticamente un punto extremo',
        correct: 'Cero de $f\'$ MAS cambio de signo o $f\'\' \\neq 0$ verificar',
        why: 'En $f(x) = x^3$ tenemos $f\'(0) = 0$, pero no es un extremo — es un punto de silla! DEBES verificar la condicion suficiente ($f\'\' \\neq 0$ o cambio de signo de $f\'$).',
        amir_warning: 'En dimensiones superiores estos puntos se llaman "Saddle Points" — el optimizador se queda atascado y piensa que ha encontrado un minimo. Siempre verificar la segunda derivada!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ basta para un punto de inflexion',
        correct: '$f\'\'(x_0) = 0$ Y $f\'\'\'(x_0) \\neq 0$ juntos confirman el punto de inflexion',
        why: 'En $f(x) = x^4$ tenemos $f\'\'(0) = 0$, pero no es un punto de inflexion — la curvatura no cambia! La tercera derivada debe ser distinta de cero para garantizar el cambio de curvatura.',
        amir_warning: 'Misma trampa que con los extremos: la condicion necesaria sola nunca basta. Siempre verificar la condicion suficiente — si no, confias en un resultado falso.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse debe funcionar en el movil — pero el modelo de Amir necesita demasiada memoria. "Debes optimizar la arquitectura de la red", dice su companera Sara. "Maxima precision con minimo consumo de memoria." Amir reconoce: es un problema clasico de optimizacion — optimizar una magnitud mientras otra esta restringida.',
      challenge: 'Amir quiere encontrar la mejor arquitectura de modelo: maxima calidad de prediccion bajo la restriccion de recursos computacionales limitados.',
      outro: 'Amir ha entendido el principio: plantear la funcion objetivo, sustituir la restriccion, reducir a una variable, derivar, igualar a cero, verificar. "Ya sea dimensiones de latas o parametros de modelo — el esquema es siempre el mismo", constata. Su modelo ahora cabe en 50 MB.',
    },
    objectives: {
      setup_equations: 'Plantear la funcion objetivo y la restriccion a partir de un contexto',
      optimize_constraints: 'Generar una funcion de una variable sustituyendo la restriccion y optimizarla',
      verify_extremum: 'Verificar con la segunda derivada si hay un maximo o minimo, y considerar valores frontera',
    },
    explanation: {
      intro: 'En problemas de optimizacion siempre se trata de lo mismo: una magnitud debe ser lo mas grande o pequena posible (funcion objetivo), mientras rige una restriccion (condicion lateral):',
      strategy: 'La estrategia es siempre la misma: (1) Plantear la funcion objetivo — que se quiere optimizar? (2) Encontrar la restriccion — que limitacion existe? (3) Resolver la restriccion para una variable y sustituir en la funcion objetivo. (4) Derivar, igualar a cero, verificar.',
      amir_tip: 'El ajuste de hiperparametros es exactamente un problema de optimizacion: quiero minimizar el error de validacion (funcion objetivo), pero mi memoria GPU es limitada (restriccion). El esquema de la clase de matematicas funciona 1:1!',
      substitution: 'Tras sustituir la restriccion, la funcion objetivo depende solo de una variable. Ahora se deriva normalmente y se verifica el punto critico:',
      domain_check: 'No olvides el dominio de definicion! En problemas reales a menudo hay limites (p.ej. $r > 0$ para un radio). Compara el valor de la funcion en el punto critico con los valores frontera — a veces el optimo esta en el borde.',
    },
    concepts: {
      target_function: {
        title: 'Funcion objetivo',
        desc: 'La magnitud que se quiere optimizar — maximo beneficio, minima superficie, mejor precision. Inicialmente suele depender de dos variables.',
      },
      constraint: {
        title: 'Restriccion',
        desc: 'La limitacion que aplica — volumen fijo, presupuesto limitado, parametros limitados. Permite eliminar una variable y reducir la funcion objetivo a una sola variable.',
      },
      boundary_check: {
        title: 'Verificacion de valores frontera',
        desc: 'El optimo tambien puede estar en el borde del dominio. Siempre comparar $f(x_{opt})$ con los valores de la funcion en los bordes $f(a)$ y $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Lata con minimo consumo de material',
        context: 'Una lata cilindrica debe contener 330 ml — con el menor consumo posible de chapa.',
        step1: 'Restriccion: el volumen es fijo. Resolver para $h$ para eliminar una variable:',
        step2: 'Plantear la funcion objetivo (superficie) y sustituir $h$ — ahora todo depende solo de $r$:',
        step3: 'Derivar, igualar a cero y resolver para $r$ — ese es el radio optimo:',
        step4: 'Verificar la segunda derivada: positiva significa minimo — realmente hemos encontrado la lata mas economica:',
        amir_comment: 'Es exactamente como la compresion de modelos: precision fija (restriccion), minimo numero de parametros (funcion objetivo). Reemplazo $r$ por "ancho de capa" y $h$ por "profundidad" — mismo principio!',
      },
      profit_max: {
        title: 'Beneficio maximo',
        context: 'Una startup quiere encontrar el precio optimo para su modelo de suscripcion.',
        step1: 'Plantear la funcion de beneficio: ingresos menos costes — aqui ya en una variable:',
        step2: 'Igualar la derivada a cero — la cantidad optima:',
        step3: 'La segunda derivada es negativa — asi que es un maximo. El beneficio aqui es realmente maximo:',
        step4: 'Calcular el beneficio maximo sustituyendo:',
        amir_comment: 'La optimizacion de precios es un clasico en Data Science. En DataPulse podriamos calcular el nivel de suscripcion optimo exactamente asi — maximizar el beneficio bajo la condicion de que los usuarios no se vayan.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Optimizacion de hiperparametros',
        desc: 'La tasa de aprendizaje $\\alpha$ en el descenso de gradiente debe elegirse de forma optima: demasiado grande = divergencia, demasiado pequena = eternamente lento. El $\\alpha$ optimo minimiza el error de validacion.',
      },
      packaging: {
        title: 'Diseno de envases',
        desc: 'Minimo consumo de material con volumen fijo — exactamente eso resuelven los ingenieros a diario. Cada lata de bebida, cada carton es el resultado de un problema de optimizacion.',
      },
      solar_panel: {
        title: 'Orientacion de paneles solares',
        desc: 'El angulo de inclinacion de un panel solar determina la produccion de energia. Encontrar el angulo optimo es un problema de optimizacion con la posicion del sol como restriccion.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Derivar directamente la funcion objetivo con dos variables',
        correct: 'Primero sustituir la restriccion, luego derivar',
        why: 'Con dos variables no puedes simplemente derivar respecto a $x$ — $y$ cambia con ella! DEBES usar la restriccion para expresar $y$ en funcion de $x$. Solo entonces todo depende de una variable.',
        amir_warning: 'Es como un modelo ML con demasiados parametros libres: sin restricciones no hay optimo razonable. La restriccion reduce los grados de libertad — exactamente como la regularizacion.',
      },
      no_boundary: {
        wrong: 'Asumir el punto critico como optimo global',
        correct: 'Comparar el punto critico con los valores frontera',
        why: 'En un intervalo acotado $[a, b]$ el optimo puede estar en el borde! $f\'(x_0) = 0$ solo da candidatos locales. Debes comparar $f(x_0)$, $f(a)$ y $f(b)$.',
        amir_warning: 'En la practica cada parametro tiene un rango permitido. Mi tasa de aprendizaje no puede ser negativa, el tamano de lote no puede superar la memoria GPU. Verificar valores frontera es obligatorio!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse funciona — pero Amir necesita una nueva metrica: cuantas canciones escuchan los usuarios en total por semana? Tiene la tasa de escucha $r(t)$ como funcion del tiempo, pero necesita la cantidad total. "Tasa por tiempo da cantidad — pero la tasa cambia constantemente", reflexiona Amir. Su amigo Kai sonrie: "Suena a una integral."',
      challenge: 'Amir quiere calcular el numero total de canciones escuchadas a partir de la tasa de escucha $r(t)$ dependiente del tiempo — eso lo lleva al calculo integral.',
      outro: 'Amir ahora puede formar primitivas, calcular integrales definidas y determinar areas entre curvas. "La integracion es la operacion inversa de la derivacion — y en la practica asi sumo datos continuos", resume. Su metrica de escucha semanal esta lista.',
    },
    objectives: {
      antiderivative: 'Formar primitivas con la regla de la potencia inversa y comprender la constante de integracion $C$',
      definite_integral: 'Calcular integrales definidas con el teorema fundamental: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Comprender el teorema fundamental del calculo y aplicarlo en calculos de areas',
    },
    explanation: {
      intro: 'La integracion es la operacion inversa de la derivacion: si $F\'(x) = f(x)$, entonces $F(x)$ es una primitiva de $f(x)$. La primitiva general siempre contiene la constante $C$:',
      power_rule_integral: 'La regla de la potencia al reves: aumentar el exponente en 1 y dividir entre el nuevo exponente. Funciona para todo $n \\neq -1$:',
      amir_tip: 'La integracion es como la agregacion en bases de datos: la derivada da la tasa de cambio instantanea, la integral suma todo. Si conozco las descargas por hora, la integral me da las descargas totales en un periodo.',
      definite_integral: 'La integral definida calcula el "efecto total" entre dos limites. El teorema fundamental lo hace simple: primitiva en el limite superior menos primitiva en el limite inferior:',
      area_interpretation: 'Geometricamente, la integral definida es el area entre la curva y el eje $x$. Atencion: las areas por debajo del eje $x$ cuentan como negativas! Para el area real necesitas el valor absoluto:',
    },
    concepts: {
      antiderivative: {
        title: 'Primitiva',
        desc: 'Una funcion $F(x)$ con $F\'(x) = f(x)$. La constante $+C$ es importante porque diferentes primitivas solo difieren en una constante.',
      },
      definite_integral: {
        title: 'Integral definida',
        desc: 'Calcula el area con signo entre $f(x)$ y el eje $x$ de $a$ a $b$. Sustituir limite superior menos sustituir limite inferior.',
      },
      fundamental_theorem: {
        title: 'Teorema fundamental del calculo',
        desc: 'Conecta derivada e integral: derivar e integrar son operaciones inversas. La integral definida se puede calcular mediante la primitiva.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Area entre parabola y eje $x$',
        context: 'Amir visualiza la distribucion del tiempo de escucha como area bajo una curva.',
        step1: 'Determinar la funcion y los ceros — esos son nuestros limites de integracion:',
        step2: 'Formar la primitiva con la regla de la potencia inversa:',
        step3: 'Calcular la integral definida: sustituir limite superior menos sustituir limite inferior:',
        step4: 'La integral es negativa porque la parabola esta por debajo del eje $x$. Para el area tomar el valor absoluto:',
        amir_comment: 'Las integrales negativas tienen total sentido en el analisis de datos: si $f(x)$ es la desviacion de la media, una integral negativa muestra que los valores estuvieron globalmente por debajo de la media.',
      },
      distance_from_velocity: {
        title: 'Calcular distancia a partir de velocidad',
        context: 'Cuanto recorre un coche autonomo en 4 segundos?',
        step1: 'Dada la funcion de velocidad:',
        step2: 'La distancia total es la integral de la velocidad respecto al tiempo:',
        step3: 'Formar la primitiva — integrar cada termino individualmente:',
        step4: 'Sustituir limites y calcular la diferencia:',
        amir_comment: 'Los datos de sensores llegan como tasas — velocidad, rendimiento de datos, peticiones por segundo. La integral convierte eso en cantidad total. Mi panel muestra exactamente eso: $\\int_0^T r(t)\\,dt$ = streams totales.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Agregacion de datos en el tiempo',
        desc: 'Si la tasa de datos $r(t)$ es conocida, la integral proporciona la cantidad total en un periodo. Asi calculan los servicios de streaming los minutos de escucha mensuales a partir de datos por segundo.',
      },
      energy_consumption: {
        title: 'Consumo de energia',
        desc: 'Potencia $P(t)$ en vatios por tiempo da energia en julios — pero solo con potencia constante. Con potencia variable necesitas la integral: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Probabilidades',
        desc: 'La probabilidad de que una variable aleatoria este entre $a$ y $b$ es el area bajo la funcion de densidad — es decir, una integral definida. La base de toda la estadistica.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Olvidar la constante de integracion $C$ en integrales indefinidas',
        correct: 'Siempre anadir $+ C$ en la integral indefinida',
        why: 'Si $F\'(x) = 2x$, entonces tanto $x^2$ como $x^2 + 7$ son primitivas. El $+C$ representa todas las primitivas posibles. En la integral definida $C$ se cancela — ahi puedes omitirlo.',
        amir_warning: 'En la practica $C$ es la condicion inicial: cuantas canciones habia escuchado ya el usuario antes de que empezaramos a medir? Sin $C$ falta el valor inicial, y tu calculo empieza en cero en lugar del valor real.',
      },
      negative_area: {
        wrong: 'Interpretar la integral directamente como area, incluso cuando es negativa',
        correct: 'Para areas reales tomar el valor absoluto de los valores integrales',
        why: 'La integral $\\int_a^b f(x)\\,dx$ puede ser negativa cuando $f(x) < 0$. Eso es correcto como area con signo. Si necesitas el area geometrica, debes integrar $|f(x)|$ o calcular las areas parciales por separado.',
        amir_warning: 'Imagina que calculas el tiempo total de escucha y obtienes un resultado negativo — eso seria obviamente incorrecto. En problemas de area siempre verificar si la funcion cambia de signo, y calcular subintervalos por separado!',
      },
    },
  },
};
