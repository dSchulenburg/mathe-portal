export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'El modelo ML de Amir para DataPulse ofrece recomendaciones de canciones aceptables — pero el entrenamiento dura eternamente. "El descenso de gradiente es básicamente lo mismo que derivadas", le explica su profesora de matemáticas. "Si entiendes cómo funcionan las reglas de derivación, también entenderás por qué tu modelo aprende." Amir decide trabajar las reglas sistemáticamente.',
      challenge: 'Amir quiere entender cómo su modelo ML deriva internamente la función de pérdida — para eso necesita la regla de la potencia, la regla de la suma, la regla del producto y la regla de la cadena.',
      outro: 'Amir ahora tiene una base sólida: regla de la potencia para términos simples, regla de la suma y del factor para expresiones compuestas, regla del producto para multiplicaciones y la regla de la cadena para funciones anidadas. "Ahora finalmente entiendo lo que PyTorch hace en segundo plano con Autograd", dice satisfecho.',
    },
    objectives: {
      power_rule: 'Aplicar con seguridad la regla de la potencia: derivar $f(x) = x^n$',
      constant_sum_rule: 'Dominar las reglas del factor constante y de la suma: derivar términos individualmente y mantener factores',
      product_quotient_rule: 'Aplicar correctamente las reglas del producto y del cociente',
      chain_rule: 'Utilizar con seguridad la regla de la cadena en funciones anidadas',
    },
    explanation: {
      intro: 'La regla de la potencia es la regla base más importante: bajas el exponente como factor y reduces el exponente en 1. Con ella derivas cualquier función potencial en un instante:',
      constant_factor: 'Los factores constantes se mantienen al derivar, y en sumas puedes derivar término a término. Eso hace los términos compuestos más claros:',
      amir_tip: 'En mi código ML hay sumas y factores por todas partes — la función de pérdida es una enorme suma sobre todos los puntos de datos. ¡Que pueda derivar cada término individualmente es lo que hace posible la retropropagación!',
      product_rule: 'Cuando dos funciones se multiplican, NO puedes simplemente derivar ambas por separado. En su lugar se aplica la regla del producto — "primera por derivada de la segunda más segunda por derivada de la primera":',
      quotient_rule: 'Para cocientes de funciones existe la regla del cociente. Regla mnemotécnica: "NAD menos DAN entre N al cuadrado" (N = denominador, D = numerador, A = derivada):',
      chain_rule: 'En funciones anidadas — es decir, una función dentro de otra — necesitas la regla de la cadena. Derivas "de fuera hacia dentro" y multiplicas por la derivada interior:',
    },
    concepts: {
      power_rule: {
        title: 'Regla de la potencia',
        desc: 'La regla fundamental: el exponente se convierte en factor, el exponente baja 1. También vale para exponentes negativos y fraccionarios, p. ej. $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Regla de la suma y del factor',
        desc: 'Las sumas se derivan término a término, los factores constantes se mantienen. Así descompones cualquier término polinómico en partes simples.',
      },
      product_rule: {
        title: 'Regla del producto',
        desc: 'Para el producto de dos funciones: derivada de la primera por la segunda más la primera por derivada de la segunda. Imprescindible cuando dos expresiones variables se multiplican.',
      },
      quotient_rule: {
        title: 'Regla del cociente',
        desc: 'Para fracciones: denominador por la derivada del numerador, menos numerador por la derivada del denominador, dividido entre el denominador al cuadrado. El signo menos es la diferencia con la regla del producto — y la fuente de errores más frecuente. Necesaria siempre que algo va "por" otra cosa: coste por unidad, velocidad, concentración.',
      },
      chain_rule: {
        title: 'Regla de la cadena',
        desc: 'Derivar la función exterior, dejar la interior, luego multiplicar por la derivada de la interior. El corazón de la retropropagación en redes neuronales.',
      },
    },
    examples: {
      power_sum: {
        title: 'Derivar un polinomio con regla de la potencia y la suma',
        context: 'Amir simplifica un término de su función de coste.',
        step1: 'Dado el polinomio — derivamos cada término individualmente:',
        step2: 'Aplicar la regla de la potencia a cada término: exponente como factor, exponente menos 1. La constante $-7$ desaparece:',
        step3: 'Simplificar da la función derivada:',
        amir_comment: 'Exactamente así se ve el gradiente de mis features polinómicas. Cada término aporta su contribución a la pendiente — y PyTorch lo hace automáticamente para miles de parámetros a la vez.',
      },
      quotient_rule: {
        title: 'Derivar una función racional con la regla del cociente',
        context: 'Amir mide cuántas peticiones atiende su servidor por cada segundo transcurrido — una magnitud por otra, es decir, una fracción.',
        step1: 'Primero nombras el numerador y el denominador. Quien se salta este paso, luego los intercambia:',
        step2: 'Derivar ambos por separado — esa es la parte fácil:',
        step3: 'Ahora sustituir: denominador por la derivada del numerador, menos numerador por la derivada del denominador, todo dividido entre $v^2$:',
        step4: 'Desarrollar y simplificar. El denominador se queda como cuadrado, no se desarrolla:',
        amir_comment: 'Importante: el denominador se queda como $(x-1)^2$. Antes siempre lo desarrollaba obedientemente y así me cerraba la puerta a simplificar. En el análisis de curvas quieres poder ver los ceros del denominador — como factor, no como polinomio.',
      },
      chain_rule: {
        title: 'Función anidada con la regla de la cadena',
        context: 'Amir deriva una función de activación que contiene una composición.',
        step1: 'Dada una función potencial anidada:',
        step2: 'Descomposición en función exterior $f(u) = u^3$ y función interior $g(x) = 2x^2 + 1$:',
        step3: 'Derivar la exterior (regla de la potencia en $u^3$), dejar la interior, por derivada interior ($4x$):',
        step4: 'Simplificado — factor $4x$ llevado adelante:',
        amir_comment: '¡La regla de la cadena ES literalmente la retropropagación! Cada capa en la red neuronal es una función anidada, y la regla de la cadena encadena los gradientes de capa en capa.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Descenso de gradiente en Machine Learning',
        desc: 'Todo modelo ML minimiza una función de pérdida derivando. El gradiente señala la dirección de mayor subida — vamos en la dirección opuesta para encontrar el mínimo.',
      },
      marginal_cost: {
        title: 'Costes marginales en economía',
        desc: 'La derivada de la función de costes $K(x)$ da los costes marginales: ¿cuánto cuesta producir una unidad más? Las empresas lo usan a diario para el cálculo de precios.',
      },
      acceleration: {
        title: 'Aceleración en física',
        desc: 'La velocidad es la derivada del camino, la aceleración la derivada de la velocidad. El sensor de tu móvil mide exactamente eso: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'La derivada de una constante es la constante misma',
        correct: 'La derivada de una constante es siempre cero',
        why: 'Una constante no tiene pendiente — no cambia. Piensa en $f(x) = 5$: es una línea horizontal, así que la pendiente es 0 en todas partes. Eso vale para cualquier número sin $x$.',
        amir_warning: 'El término de sesgo en mi modelo es una constante — su derivada respecto a $x$ es 0. Si lo olvidas, tu gradiente tiene un desplazamiento incorrecto y el entrenamiento diverge.',
      },
      chain_rule_forgotten: {
        wrong: 'Olvidar la derivada interior en funciones anidadas',
        correct: 'Siempre multiplicar por la derivada interior',
        why: 'En $[(3x+1)^4]\'$ no basta con bajar el exponente. DEBES multiplicar por la derivada del término interior $(3x+1)\' = 3$. Sin la derivada interior falta el factor 3.',
        amir_warning: 'Imagina que en una red neuronal olvidas la derivada interior en una capa — el gradiente sería completamente incorrecto y el modelo aprende tonterías. ¡La regla de la cadena no es opcional!',
      },
      quotient_sign: {
        wrong: 'Numerador de la regla del cociente intercambiado: $u \\cdot v\' - u\' \\cdot v$',
        correct: 'Primero denominador por la derivada del numerador: $u\' \\cdot v - u \\cdot v\'$',
        why: 'La regla del producto es simétrica — puedes intercambiar los dos sumandos y el resultado no cambia. En la regla del cociente hay un signo menos, y por eso el orden es fijo. Si los intercambias, obtienes exactamente el opuesto de la derivada correcta. Lo traicionero: la expresión parece plausible, sigues calculando correctamente y, aun así, al final todos los signos están mal. Un máximo se convierte en un mínimo.',
        amir_warning: 'Haz la prueba en un punto sencillo. Con $f(x) = \\frac{x}{x+1}$ la función es creciente en todas partes, así que $f\'$ tiene que ser positiva. Si te sale algo negativo, has invertido el numerador — te cuesta diez segundos y salva todo el ejercicio.',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'El algoritmo de recomendación de Amir da resultados — pero ¿son realmente óptimos? "Debes analizar la función de pérdida completamente", dice su profesor. "¿Dónde están los mínimos? ¿Dónde los puntos de inflexión?" Amir se da cuenta: un análisis completo de curvas le muestra si su modelo realmente ha encontrado el mínimo global o está atascado en un mínimo local.',
      challenge: 'Amir analiza el paisaje de pérdida de su modelo: determinar completamente ceros, extremos, puntos de inflexión y monotonía de una función.',
      outro: 'Amir ahora puede caracterizar completamente cualquier función racional entera: encontrar ceros, determinar máximos y mínimos, calcular puntos de inflexión y leer el comportamiento de monotonía. "Si dibujo así el paisaje de pérdida, veo inmediatamente si mi optimizador ha llegado al valle correcto", dice.',
    },
    objectives: {
      zeros_extrema: 'Determinar sistemáticamente ceros y puntos extremos de una función',
      inflection_points: 'Calcular puntos de inflexión y comprender su significado para el trazado de la curva',
      monotonicity_symmetry: 'Analizar el comportamiento de monotonía y la simetría de una función',
    },
    explanation: {
      intro: 'Un análisis de curvas es el análisis completo de una función. Comenzamos con los ceros — los puntos donde la gráfica corta el eje $x$:',
      extrema: 'Los puntos extremos (máximos y mínimos) los encuentras donde la primera derivada es cero. Pero cuidado: ¡no todo cero de $f\'$ es automáticamente un extremo! Necesitas la segunda derivada para confirmarlo:',
      amir_tip: 'El paisaje de pérdida de mi modelo tiene muchos mínimos locales. Con el análisis de curvas puedo verificar si un punto crítico es realmente un mínimo — o solo un punto de silla donde el optimizador se queda atascado.',
      inflection: 'Los puntos de inflexión marcan la transición entre curvatura a la izquierda y a la derecha. Aquí cambia el comportamiento de curvatura — la segunda derivada cambia de signo:',
      monotonicity: 'El comportamiento de monotonía te dice dónde la función crece y dónde decrece. Lo lees directamente del signo de la primera derivada:',
    },
    concepts: {
      extrema: {
        title: 'Puntos extremos (máximos/mínimos)',
        desc: 'Condición necesaria: $f\'(x_0) = 0$. Suficiente: $f\'\'(x_0) < 0$ da máximo, $f\'\'(x_0) > 0$ da mínimo. Ambas condiciones juntas lo aseguran.',
      },
      inflection: {
        title: 'Puntos de inflexión',
        desc: 'Donde cambia la curvatura: $f\'\'(x_0) = 0$ Y $f\'\'\'(x_0) \\neq 0$. En distribuciones normales los puntos de inflexión marcan la desviación estándar.',
      },
      symmetry: {
        title: 'Simetría',
        desc: 'Simetría axial respecto al eje $y$ cuando $f(-x) = f(x)$ (solo exponentes pares). Simetría puntual respecto al origen cuando $f(-x) = -f(x)$ (solo exponentes impares). ¡Ahorra trabajo de cálculo!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Análisis completo de curvas',
        context: 'Amir investiga una función cúbica — similar a funciones de pérdida con varios extremos.',
        step1: 'Dada la función — la analizamos completamente:',
        step2: 'Formar la primera derivada y determinar ceros (condición necesaria para extremos):',
        step3: 'Evaluar la segunda derivada en los puntos críticos (condición suficiente): valor negativo = máximo, valor positivo = mínimo:',
        step4: 'Determinar el punto de inflexión vía $f\'\' = 0$ y confirmar con la tercera derivada:',
        amir_comment: 'Exactamente así analizo el paisaje de pérdida: primero encontrar puntos críticos, luego verificar si es mínimo o punto de silla. En funciones de alta dimensión mi optimizador lo hace numéricamente — pero el principio es idéntico.',
      },
      graph_properties: {
        title: 'Usar simetría y extremos',
        context: 'Una función simétrica — la mitad del trabajo se elimina gracias a la simetría.',
        step1: 'Dada una función de grado 4 — verificamos primero la simetría:',
        step2: 'Sustituir $-x$: todos los exponentes pares, así que $f(-x) = f(x)$ — ¡simetría axial! Los extremos aparecen simétricamente:',
        step3: 'Igualar la primera derivada a cero — por simetría basta encontrar las soluciones positivas:',
        step4: 'Calcular valores de función — gracias a la simetría vale $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'La simetría en datos vale oro: si sé que mi función de pérdida es simétrica, solo necesito buscar la mitad del espacio de parámetros. ¡Eso reduce el tiempo de entrenamiento a la mitad!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analizar distribuciones de datos',
        desc: 'La distribución normal tiene puntos de inflexión en $\\mu \\pm \\sigma$. El análisis de curvas te dice dónde se concentran más puntos de datos y dónde comienza la dispersión.',
      },
      profit_analysis: {
        title: 'Maximización de beneficios',
        desc: 'La función de beneficio $G(x)$ tiene un máximo — la cantidad de producción óptima. El análisis de curvas muestra exactamente a qué cantidad el beneficio es máximo.',
      },
      population_growth: {
        title: 'Crecimiento demográfico',
        desc: 'El punto de inflexión de una curva de crecimiento marca el momento a partir del cual el crecimiento disminuye. Los epidemiólogos usan exactamente este análisis para curvas de infección.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Todo cero de $f\'$ es automáticamente un punto extremo',
        correct: 'Cero de $f\'$ MÁS cambio de signo o $f\'\' \\neq 0$ verificar',
        why: 'En $f(x) = x^3$ tenemos $f\'(0) = 0$, pero no es un extremo — ¡es un punto de silla! DEBES verificar la condición suficiente ($f\'\' \\neq 0$ o cambio de signo de $f\'$).',
        amir_warning: 'En dimensiones superiores estos puntos se llaman "Saddle Points" — el optimizador se queda atascado y piensa que ha encontrado un mínimo. ¡Siempre verificar la segunda derivada!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ basta para un punto de inflexión',
        correct: '$f\'\'(x_0) = 0$ Y $f\'\'\'(x_0) \\neq 0$ juntos confirman el punto de inflexión',
        why: 'En $f(x) = x^4$ tenemos $f\'\'(0) = 0$, pero no es un punto de inflexión — ¡la curvatura no cambia! La tercera derivada debe ser distinta de cero para garantizar el cambio de curvatura.',
        amir_warning: 'Misma trampa que con los extremos: la condición necesaria sola nunca basta. Siempre verificar la condición suficiente — si no, confías en un resultado falso.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse debe funcionar en el móvil — pero el modelo de Amir necesita demasiada memoria. "Debes optimizar la arquitectura de la red", dice su compañera Sara. "Máxima precisión con mínimo consumo de memoria." Amir reconoce: es un problema clásico de optimización — optimizar una magnitud mientras otra está restringida.',
      challenge: 'Amir quiere encontrar la mejor arquitectura de modelo: máxima calidad de predicción bajo la restricción de recursos computacionales limitados.',
      outro: 'Amir ha entendido el principio: plantear la función objetivo, sustituir la restricción, reducir a una variable, derivar, igualar a cero, verificar. "Ya sea dimensiones de latas o parámetros de modelo — el esquema es siempre el mismo", constata. Su modelo ahora cabe en 50 MB.',
    },
    objectives: {
      setup_equations: 'Plantear la función objetivo y la restricción a partir de un contexto',
      optimize_constraints: 'Generar una función de una variable sustituyendo la restricción y optimizarla',
      verify_extremum: 'Verificar con la segunda derivada si hay un máximo o mínimo, y considerar valores frontera',
    },
    explanation: {
      intro: 'En problemas de optimización siempre se trata de lo mismo: una magnitud debe ser lo más grande o pequeña posible (función objetivo), mientras rige una restricción (condición lateral):',
      strategy: 'La estrategia es siempre la misma: (1) Plantear la función objetivo — ¿qué se quiere optimizar? (2) Encontrar la restricción — ¿qué limitación existe? (3) Resolver la restricción para una variable y sustituir en la función objetivo. (4) Derivar, igualar a cero, verificar.',
      amir_tip: 'El ajuste de hiperparámetros es exactamente un problema de optimización: quiero minimizar el error de validación (función objetivo), pero mi memoria GPU es limitada (restricción). ¡El esquema de la clase de matemáticas funciona 1:1!',
      substitution: 'Tras sustituir la restricción, la función objetivo depende solo de una variable. Ahora se deriva normalmente y se verifica el punto crítico:',
      domain_check: '¡No olvides el dominio de definición! En problemas reales a menudo hay límites (p. ej. $r > 0$ para un radio). Compara el valor de la función en el punto crítico con los valores frontera — a veces el óptimo está en el borde.',
    },
    concepts: {
      target_function: {
        title: 'Función objetivo',
        desc: 'La magnitud que se quiere optimizar — máximo beneficio, mínima superficie, mejor precisión. Inicialmente suele depender de dos variables.',
      },
      constraint: {
        title: 'Restricción',
        desc: 'La limitación que aplica — volumen fijo, presupuesto limitado, parámetros limitados. Permite eliminar una variable y reducir la función objetivo a una sola variable.',
      },
      boundary_check: {
        title: 'Verificación de valores frontera',
        desc: 'El óptimo también puede estar en el borde del dominio. Siempre comparar $f(x_{opt})$ con los valores de la función en los bordes $f(a)$ y $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Lata con mínimo consumo de material',
        context: 'Una lata cilíndrica debe contener 330 ml — con el menor consumo posible de chapa.',
        step1: 'Restricción: el volumen es fijo. Resolver para $h$ para eliminar una variable:',
        step2: 'Plantear la función objetivo (superficie) y sustituir $h$ — ahora todo depende solo de $r$:',
        step3: 'Derivar, igualar a cero y resolver para $r$ — ese es el radio óptimo:',
        step4: 'Verificar la segunda derivada: positiva significa mínimo — realmente hemos encontrado la lata más económica:',
        amir_comment: 'Es exactamente como la compresión de modelos: precisión fija (restricción), mínimo número de parámetros (función objetivo). Reemplazo $r$ por "ancho de capa" y $h$ por "profundidad" — ¡mismo principio!',
      },
      profit_max: {
        title: 'Beneficio máximo',
        context: 'Una startup quiere encontrar el precio óptimo para su modelo de suscripción.',
        step1: 'Plantear la función de beneficio: ingresos menos costes — aquí ya en una variable:',
        step2: 'Igualar la derivada a cero — la cantidad óptima:',
        step3: 'La segunda derivada es negativa — así que es un máximo. El beneficio aquí es realmente máximo:',
        step4: 'Calcular el beneficio máximo sustituyendo:',
        amir_comment: 'La optimización de precios es un clásico en Data Science. En DataPulse podríamos calcular el nivel de suscripción óptimo exactamente así — maximizar el beneficio bajo la condición de que los usuarios no se vayan.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Optimización de hiperparámetros',
        desc: 'La tasa de aprendizaje $\\alpha$ en el descenso de gradiente debe elegirse de forma óptima: demasiado grande = divergencia, demasiado pequeña = eternamente lento. El $\\alpha$ óptimo minimiza el error de validación.',
      },
      packaging: {
        title: 'Diseño de envases',
        desc: 'Mínimo consumo de material con volumen fijo — exactamente eso resuelven los ingenieros a diario. Cada lata de bebida, cada cartón es el resultado de un problema de optimización.',
      },
      solar_panel: {
        title: 'Orientación de paneles solares',
        desc: 'El ángulo de inclinación de un panel solar determina la producción de energía. Encontrar el ángulo óptimo es un problema de optimización con la posición del sol como restricción.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Derivar directamente la función objetivo con dos variables',
        correct: 'Primero sustituir la restricción, luego derivar',
        why: 'Con dos variables no puedes simplemente derivar respecto a $x$ — ¡$y$ cambia con ella! DEBES usar la restricción para expresar $y$ en función de $x$. Solo entonces todo depende de una variable.',
        amir_warning: 'Es como un modelo ML con demasiados parámetros libres: sin restricciones no hay óptimo razonable. La restricción reduce los grados de libertad — exactamente como la regularización.',
      },
      no_boundary: {
        wrong: 'Asumir el punto crítico como óptimo global',
        correct: 'Comparar el punto crítico con los valores frontera',
        why: '¡En un intervalo acotado $[a, b]$ el óptimo puede estar en el borde! $f\'(x_0) = 0$ solo da candidatos locales. Debes comparar $f(x_0)$, $f(a)$ y $f(b)$.',
        amir_warning: 'En la práctica cada parámetro tiene un rango permitido. Mi tasa de aprendizaje no puede ser negativa, el tamaño de lote no puede superar la memoria GPU. ¡Verificar valores frontera es obligatorio!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse funciona — pero Amir necesita una nueva métrica: ¿cuántas canciones escuchan los usuarios en total por semana? Tiene la tasa de escucha $r(t)$ como función del tiempo, pero necesita la cantidad total. "Tasa por tiempo da cantidad — pero la tasa cambia constantemente", reflexiona Amir. Su amigo Kai sonríe: "Suena a una integral."',
      challenge: 'Amir quiere calcular el número total de canciones escuchadas a partir de la tasa de escucha $r(t)$ dependiente del tiempo — eso lo lleva al cálculo integral.',
      outro: 'Amir ahora puede formar primitivas, calcular integrales definidas y determinar áreas entre curvas. "La integración es la operación inversa de la derivación — y en la práctica así sumo datos continuos", resume. Su métrica de escucha semanal está lista.',
    },
    objectives: {
      antiderivative: 'Formar primitivas con la regla de la potencia inversa y comprender la constante de integración $C$',
      definite_integral: 'Calcular integrales definidas con el teorema fundamental: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Comprender el teorema fundamental del cálculo y aplicarlo en cálculos de áreas',
    },
    explanation: {
      intro: 'La integración es la operación inversa de la derivación: si $F\'(x) = f(x)$, entonces $F(x)$ es una primitiva de $f(x)$. La primitiva general siempre contiene la constante $C$:',
      power_rule_integral: 'La regla de la potencia al revés: aumentar el exponente en 1 y dividir entre el nuevo exponente. Funciona para todo $n \\neq -1$:',
      amir_tip: 'La integración es como la agregación en bases de datos: la derivada da la tasa de cambio instantánea, la integral suma todo. Si conozco las descargas por hora, la integral me da las descargas totales en un periodo.',
      definite_integral: 'La integral definida calcula el "efecto total" entre dos límites. El teorema fundamental lo hace simple: primitiva en el límite superior menos primitiva en el límite inferior:',
      area_interpretation: 'Geométricamente, la integral definida es el área entre la curva y el eje $x$. Atención: ¡las áreas por debajo del eje $x$ cuentan como negativas! Para el área real necesitas el valor absoluto:',
    },
    concepts: {
      antiderivative: {
        title: 'Primitiva',
        desc: 'Una función $F(x)$ con $F\'(x) = f(x)$. La constante $+C$ es importante porque diferentes primitivas solo difieren en una constante.',
      },
      definite_integral: {
        title: 'Integral definida',
        desc: 'Calcula el área con signo entre $f(x)$ y el eje $x$ de $a$ a $b$. Sustituir límite superior menos sustituir límite inferior.',
      },
      fundamental_theorem: {
        title: 'Teorema fundamental del cálculo',
        desc: 'Conecta derivada e integral: derivar e integrar son operaciones inversas. La integral definida se puede calcular mediante la primitiva.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Área entre parábola y eje $x$',
        context: 'Amir visualiza la distribución del tiempo de escucha como área bajo una curva.',
        step1: 'Determinar la función y los ceros — esos son nuestros límites de integración:',
        step2: 'Formar la primitiva con la regla de la potencia inversa:',
        step3: 'Calcular la integral definida: sustituir límite superior menos sustituir límite inferior:',
        step4: 'La integral es negativa porque la parábola está por debajo del eje $x$. Para el área tomar el valor absoluto:',
        amir_comment: 'Las integrales negativas tienen total sentido en el análisis de datos: si $f(x)$ es la desviación de la media, una integral negativa muestra que los valores estuvieron globalmente por debajo de la media.',
      },
      distance_from_velocity: {
        title: 'Calcular distancia a partir de velocidad',
        context: '¿Cuánto recorre un coche autónomo en 4 segundos?',
        step1: 'Dada la función de velocidad:',
        step2: 'La distancia total es la integral de la velocidad respecto al tiempo:',
        step3: 'Formar la primitiva — integrar cada término individualmente:',
        step4: 'Sustituir límites y calcular la diferencia:',
        amir_comment: 'Los datos de sensores llegan como tasas — velocidad, rendimiento de datos, peticiones por segundo. La integral convierte eso en cantidad total. Mi panel muestra exactamente eso: $\\int_0^T r(t)\\,dt$ = streams totales.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Agregación de datos en el tiempo',
        desc: 'Si la tasa de datos $r(t)$ es conocida, la integral proporciona la cantidad total en un periodo. Así calculan los servicios de streaming los minutos de escucha mensuales a partir de datos por segundo.',
      },
      energy_consumption: {
        title: 'Consumo de energía',
        desc: 'Potencia $P(t)$ en vatios por tiempo da energía en julios — pero solo con potencia constante. Con potencia variable necesitas la integral: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Probabilidades',
        desc: 'La probabilidad de que una variable aleatoria esté entre $a$ y $b$ es el área bajo la función de densidad — es decir, una integral definida. La base de toda la estadística.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Olvidar la constante de integración $C$ en integrales indefinidas',
        correct: 'Siempre añadir $+ C$ en la integral indefinida',
        why: 'Si $F\'(x) = 2x$, entonces tanto $x^2$ como $x^2 + 7$ son primitivas. El $+C$ representa todas las primitivas posibles. En la integral definida $C$ se cancela — ahí puedes omitirlo.',
        amir_warning: 'En la práctica $C$ es la condición inicial: ¿cuántas canciones había escuchado ya el usuario antes de que empezáramos a medir? Sin $C$ falta el valor inicial, y tu cálculo empieza en cero en lugar del valor real.',
      },
      negative_area: {
        wrong: 'Interpretar la integral directamente como área, incluso cuando es negativa',
        correct: 'Para áreas reales tomar el valor absoluto de los valores integrales',
        why: 'La integral $\\int_a^b f(x)\\,dx$ puede ser negativa cuando $f(x) < 0$. Eso es correcto como área con signo. Si necesitas el área geométrica, debes integrar $|f(x)|$ o calcular las áreas parciales por separado.',
        amir_warning: 'Imagina que calculas el tiempo total de escucha y obtienes un resultado negativo — eso sería obviamente incorrecto. ¡En problemas de área siempre verificar si la función cambia de signo, y calcular subintervalos por separado!',
      },
    },
  },
};
