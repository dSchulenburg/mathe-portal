export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'El algoritmo de recomendación musical de Amir tiene un problema: la popularidad de las canciones nuevas sube al principio de forma explosiva, pero ¿con qué rapidez exactamente? ¿Y cuándo se desinfla la moda? «Necesito una función que describa un crecimiento extremadamente rápido y que aun así siga siendo calculable», le dice Amir a Yara. La respuesta: la función exponencial con el número de Euler $e$ y su contrapartida, el logaritmo natural.',
      challenge: 'Amir tiene que modelar la curva de crecimiento de las reproducciones y predecir cuándo un tema alcanza su pico; para eso necesita ecuaciones exponenciales y logaritmos.',
      outro: 'Con la función $e$ y el $\\ln$, Amir ya puede calcular cuándo una canción alcanza su punto álgido y con qué rapidez decae después el interés. «Lo mejor es que el logaritmo natural hace resoluble cualquier ecuación exponencial», le explica a Finn. DataPulse predice ahora las tendencias musicales con una precisión asombrosa.',
    },
    objectives: {
      e_function: 'Comprender y aplicar la función $e$ como función natural de crecimiento',
      natural_log: 'Dominar el logaritmo natural como función inversa de $e^x$',
      log_rules: 'Aplicar con seguridad las reglas de los logaritmos (producto, cociente y potencia)',
      solve_exp_equations: 'Resolver ecuaciones exponenciales tomando logaritmos',
    },
    explanation: {
      intro: 'El número de Euler $e \\approx 2{,}718$ es la constante más importante para los procesos de crecimiento. ¿Por qué precisamente $e$? Porque la función $f(x) = e^x$ tiene una propiedad única: su derivada es ella misma, $f\'(x) = e^x$. Eso significa que la tasa de crecimiento es siempre proporcional al valor actual. ¡Perfecto para el crecimiento natural!',
      natural_log: 'El logaritmo natural $\\ln(x)$ es la función inversa de $e^x$. Si quieres saber qué exponente necesitas para alcanzar un valor determinado, el $\\ln$ es tu herramienta. Ambas funciones se anulan mutuamente:',
      amir_tip: 'En mi código de ML el $\\ln$ aparece por todas partes: en la función de pérdida, en la normalización, en la fórmula softmax. El motivo: el $\\ln$ convierte la multiplicación en suma y hace manejables números enormes. ¡Por eso trabajamos a menudo con «log-verosimilitud» en lugar de con probabilidades directamente!',
      log_rules: 'Las tres reglas de los logaritmos son extremadamente útiles: convierten expresiones complejas en otras más sencillas. La idea de fondo: los logaritmos hacen de la multiplicación suma, de la división resta y de las potencias multiplicación:',
      solving: 'Para despejar $x$ en una ecuación exponencial, aplicas el $\\ln$ a ambos miembros. El logaritmo «baja el exponente»: ese es el paso clave:',
    },
    concepts: {
      e_function: {
        title: 'Función $e$',
        desc: 'La forma general $f(x) = a \\cdot e^{kx}$: $a$ es el valor inicial y $k$ determina la velocidad de crecimiento. Con $k > 0$ la función crece; con $k < 0$ decrece (decaimiento exponencial). La función $e$ es su propia derivada, y por eso modela a la perfección el crecimiento natural.',
      },
      natural_log: {
        title: 'Logaritmo natural',
        desc: 'La función inversa de $e^x$: $\\ln(x)$ responde a la pregunta «¿qué potencia de $e$ da $x$?». Definido solo para $x > 0$. Importante: $\\ln(1) = 0$ y $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Reglas de los logaritmos',
        desc: 'Tres reglas que lo simplifican todo: regla del producto ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), regla del cociente ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$) y regla de la potencia ($\\ln(a^r) = r \\cdot \\ln(a)$). La regla de la potencia es la clave para resolver ecuaciones exponenciales.',
      },
    },
    examples: {
      solve_exp: {
        title: 'Resolver una ecuación exponencial',
        context: 'Amir quiere calcular al cabo de cuántos días una canción tiene 5 veces más reproducciones que al principio. El modelo de crecimiento es: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Plantear la ecuación: ¿cuándo alcanzan las reproducciones el valor 15?',
        step2: 'Dividir entre 3 para aislar $e^{2x}$:',
        step3: 'Aplicar el $\\ln$ a ambos miembros: el exponente «baja»:',
        step4: 'Despejar $x$: dividir entre el coeficiente 2:',
        amir_comment: 'Ese es el patrón que necesito constantemente: aislar, tomar logaritmos, despejar. ¡Funciona con cualquier ecuación exponencial!',
      },
      half_life: {
        title: 'Calcular el tiempo de semivida',
        context: 'Tras el pico, una canción viral pierde oyentes cada día. Amir modela la caída con $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'El modelo: 1000 oyentes activos en el instante $t = 0$, caída exponencial:',
        step2: 'Semivida significa: ¿cuándo quedan 500 oyentes?',
        step3: 'Aislar y tomar logaritmos: $\\ln$ en ambos miembros:',
        step4: 'Despejar $t$: al cabo de unos 6{,}93 días el número de oyentes se ha reducido a la mitad:',
        amir_comment: '¡El tiempo de semivida es constante! Da igual que sean 1000, 500 o 250 oyentes: hasta la siguiente reducción a la mitad pasan siempre unos 6{,}93 días. Esa es la magia del decaimiento exponencial.',
      },
    },
    realworld: {
      user_retention: {
        title: 'Retención de usuarios en aplicaciones',
        desc: '¿Cuántos usuarios siguen activos al cabo de una semana? En la mayoría de las aplicaciones la retención cae exponencialmente: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse usa este modelo para predecir cuántos usuarios seguirán ahí a los 30 días, y cuándo conviene enviar notificaciones push dirigidas.',
      },
      compound_interest: {
        title: 'Capitalización continua',
        desc: 'Los bancos calculan intereses anuales, pero en teoría existe también la capitalización continua: $K(t) = K_0 \\cdot e^{rt}$. Cuantas más veces calcules los intereses (a diario, cada hora, cada segundo...), más te acercas a $e^{rt}$. ¡Ese es el valor límite!',
      },
      decibel: {
        title: 'Escala de decibelios',
        desc: 'El volumen se mide de forma logarítmica: $L = 10 \\cdot \\log_{10}(I/I_0)$. Si se duplica la intensidad del sonido, el nivel solo sube unos $3\\,\\text{dB}$. ¡Por eso 10 guitarras no suenan 10 veces más fuerte que una: nuestro oído funciona de forma logarítmica!',
      },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$: suma separada',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$: solo los productos se pueden separar',
        why: '¡La regla del producto vale SOLO para la multiplicación, no para la suma! No existe una fórmula sencilla para $\\ln(a + b)$. Es uno de los errores más frecuentes que hay.',
        amir_warning: 'Este fallo me costó una vez dos horas de depuración. Mi cálculo de la verosimilitud estaba completamente mal porque usé $\\ln(p_1 + p_2)$ en lugar de $\\ln(p_1 \\cdot p_2)$. ¡Los logaritmos separan productos, no sumas!',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$: logaritmo mal resuelto',
        correct: '$\\ln(e^x) = x$: el logaritmo anula la función exponencial',
        why: '$\\ln$ y $e^x$ son funciones inversas: se anulan mutuamente. El resultado es simplemente el exponente $x$, sin ningún factor $e$ delante.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse ha lanzado una función nueva y Amir quiere saber: ¿qué probabilidad hay de que, de 100 usuarios de prueba, al menos 15 pulsen el botón nuevo? Cada usuario pulsa o no pulsa: un clásico experimento de sí/no que se repite $n$ veces. «Esto ya no es azar, esto es distribución binomial», dice el profesor Nguyen en el seminario.',
      challenge: 'Amir necesita la probabilidad de un número determinado de clics en $n$ ensayos independientes; la distribución binomial da la respuesta exacta.',
      outro: 'Amir ya tiene un marco estadístico para pruebas A/B. Puede calcular si un resultado es significativo o si surgió solo por azar. «La distribución binomial es el cimiento de casi cualquier prueba estadística en la práctica», le explica a Yara. DataPulse toma ahora decisiones basadas en datos en lugar de en intuiciones.',
    },
    objectives: {
      bernoulli: 'Reconocer experimentos de Bernoulli y determinar la probabilidad de éxito $p$',
      binomial_formula: 'Aplicar la fórmula binomial para calcular $P(X = k)$',
      expected_value: 'Calcular e interpretar la esperanza $E(X) = n \\cdot p$',
      standard_deviation: 'Determinar la desviación típica $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ y usarla como medida de dispersión',
    },
    explanation: {
      intro: 'Imagina que repites un experimento $n$ veces y que cada vez hay solo dos desenlaces: éxito (probabilidad $p$) o fracaso (probabilidad $1-p$). La distribución binomial te dice qué probabilidad hay de exactamente $k$ éxitos en $n$ ensayos:',
      bernoulli: 'La base es el experimento de Bernoulli: un único ensayo con exactamente dos desenlaces. Deben cumplirse tres condiciones: (1) solo dos resultados, (2) la probabilidad $p$ se mantiene igual en cada ensayo, (3) los ensayos son independientes entre sí. El coeficiente binomial cuenta las disposiciones posibles:',
      amir_tip: 'El coeficiente binomial $\\binom{n}{k}$ cuenta de cuántas maneras puedes repartir $k$ éxitos en $n$ ensayos. En mi código es la función scipy.special.comb(n, k). Para $n$ grandes prefiero calcular la distribución acumulada: ¡sumar probabilidades individuales sería demasiado lento!',
      expected_value: 'La esperanza $E(X) = n \\cdot p$ te dice cuántos éxitos esperas «de media». Con 100 ensayos y $p = 0{,}15$ esperas $E(X) = 15$ éxitos. ¡Pero eso no significa que sean exactamente 15 cada vez! Cuánto oscilan los resultados lo mide la desviación típica:',
      standard_deviation: 'La desviación típica $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ muestra la dispersión habitual en torno a la esperanza. Reglas prácticas: alrededor del 68% de los resultados está en $E(X) \\pm \\sigma$ y alrededor del 95% en $E(X) \\pm 2\\sigma$. Cuanto mayor sea $n$, más estrecha resulta la distribución en relación con la esperanza.',
    },
    concepts: {
      bernoulli: {
        title: 'Experimento de Bernoulli',
        desc: 'Un experimento aleatorio con exactamente dos desenlaces: éxito (probabilidad $p$) o fracaso ($1-p$). Ejemplos: lanzar una moneda, clic/no clic, gol/no gol. La distribución binomial surge al repetirlo $n$ veces de forma independiente.',
      },
      binomial_formula: {
        title: 'Fórmula binomial',
        desc: 'La fórmula $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ consta de tres partes: $\\binom{n}{k}$ cuenta las disposiciones, $p^k$ es la probabilidad de $k$ éxitos y $(1-p)^{n-k}$ la de $n-k$ fracasos.',
      },
      expected_value: {
        title: 'Esperanza y desviación típica',
        desc: 'La esperanza $E(X) = n \\cdot p$ es la media en muchas repeticiones. La desviación típica $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ mide la separación habitual respecto a ella. Juntas describen la posición y la dispersión de la distribución.',
      },
    },
    examples: {
      coin_flips: {
        title: 'Lanzamiento de moneda: exactamente 7 caras de 10',
        context: 'Amir prueba su generador de números aleatorios: en 10 lanzamientos de una moneda equilibrada, ¿qué probabilidad hay de exactamente 7 caras?',
        step1: 'Determinar los parámetros: $n = 10$ lanzamientos, $p = 0{,}5$ (moneda equilibrada), se busca: $k = 7$ veces cara.',
        step2: 'Calcular el coeficiente binomial: ¿de cuántas maneras pueden repartirse 7 caras en 10 lanzamientos?',
        step3: 'Sustituir en la fórmula binomial: disposiciones $\\times$ éxitos $\\times$ fracasos:',
        step4: 'Calcular: la probabilidad es de alrededor del 11{,}7%, así que más bien improbable:',
        amir_comment: 'Solo un 11{,}7%: eso muestra que, incluso con una moneda equilibrada, 7 caras de 10 no es nada especialmente sorprendente, pero tampoco es el caso normal. ¡Mi generador de números aleatorios parece estar bien!',
      },
      quality_control: {
        title: 'Control de calidad en la producción',
        context: 'Una fábrica tiene una tasa de defectos del 2%. Amir calcula: ¿qué probabilidad hay de que en una muestra de 20 piezas ninguna esté defectuosa?',
        step1: 'Parámetros: $n = 20$ piezas, tasa de defectos $p = 0{,}02$, se busca: $k = 0$ piezas defectuosas.',
        step2: 'Sustituir: $\\binom{20}{0} = 1$ y $0{,}02^0 = 1$; quedan solo los fracasos:',
        step3: 'Simplificar: queda $0{,}98^{20}$:',
        step4: 'Resultado: con alrededor del 66{,}8% de probabilidad ninguna pieza está defectuosa. ¡No es tan seguro como parecía!',
        amir_comment: '¡Solo dos tercios de probabilidad de cero defectos con una tasa del 2%! Eso muestra que incluso las probabilidades pequeñas se acumulan en muchos ensayos. Con $n = 100$ sería $P(X = 0) \\approx 13{,}3\\%$: ahí se encuentra un defecto casi con seguridad.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'Pruebas A/B en DataPulse',
        desc: 'Amir prueba dos versiones de la aplicación: la versión A tiene una tasa de clics del 12% y la versión B del 15%. Con la distribución binomial calcula si la diferencia es estadísticamente significativa o si también podría haber surgido por azar. Esa es la base de toda prueba A/B.',
      },
      medicine: {
        title: 'Estudios médicos',
        desc: 'En los ensayos de medicamentos se cuenta: ¿cuántos pacientes se curan? ¿Es la tasa de curación significativamente mejor que con placebo? La distribución binomial da la respuesta y protege de conclusiones precipitadas con muestras demasiado pequeñas.',
      },
      surveys: {
        title: 'Encuestas de opinión y margen de error',
        desc: 'Si en una encuesta el 52% vota «sí», ¿es eso realmente una mayoría? La desviación típica $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ muestra lo ancho que es el intervalo de confianza. Con $n = 100$ sería $\\sigma \\approx 5\\%$, así que el resultado también podría ser un 47% o un 57%.',
      },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Olvidar el coeficiente binomial: $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Fórmula completa con $\\binom{n}{k}$',
        why: 'Sin $\\binom{n}{k}$ la fórmula cuenta solo UN orden determinado, por ejemplo primero $k$ éxitos y luego $n-k$ fracasos. ¡Pero los éxitos pueden aparecer en posiciones distintas! El coeficiente binomial cuenta todas las disposiciones posibles.',
        amir_warning: 'Imagina que lanzas un dado 3 veces y quieres exactamente 2 seises. Hay 3 posibilidades: 6-6-X, 6-X-6, X-6-6. El coeficiente binomial $\\binom{3}{2} = 3$ cuenta justamente eso. ¡Sin él obtendrías solo un tercio de la probabilidad correcta!',
      },
      variance_vs_sigma: {
        wrong: 'Confundir varianza y desviación típica',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$: ¡no olvides la raíz!',
        why: 'La varianza es $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$ y la desviación típica es $\\sigma = \\sqrt{\\text{Var}(X)}$. Sin la raíz el resultado tiene la unidad equivocada y es demasiado grande. La $\\sigma$ tiene la misma unidad que $X$; en la varianza aparece elevada al cuadrado.',
      },
    },
  },

  '11-bedingte-wahrscheinlichkeit': {
    story: {
      intro: 'DataPulse recomienda canciones a partir del historial de escucha. Pero Amir se da cuenta de que no todas las correlaciones son igual de fuertes. Quien escucha rock quizá también disfrute del metal, ¿pero vale eso también al revés? «La probabilidad de que a alguien le guste el rock SI escucha metal no es la misma que al revés», explica el profesor Nguyen. Bienvenidos a la probabilidad condicionada.',
      challenge: 'Amir tiene que mejorar la lógica de recomendación: ¿qué probabilidad hay de que a un usuario le guste el género $A$ DADO que escucha el género $B$? ¿Y cómo se invierte ese sentido?',
      outro: 'Con el teorema de Bayes, Amir ya puede invertir el sentido de la recomendación: de «quien escucha metal escucha también rock en un 60% de los casos» se pasa a «quien escucha rock escucha también metal en un 35% de los casos». «Bayes es como ingeniería inversa para probabilidades», sonríe. DataPulse ofrece ahora recomendaciones bastante más precisas.',
    },
    objectives: {
      conditional_prob: 'Calcular e interpretar probabilidades condicionadas',
      bayes_theorem: 'Aplicar el teorema de Bayes para invertir el sentido de una probabilidad condicionada',
      independence: 'Comprobar la independencia estocástica y distinguirla de la dependencia',
      tree_diagrams: 'Usar diagramas de árbol y tablas de doble entrada como herramientas auxiliares',
    },
    explanation: {
      intro: 'La probabilidad condicionada $P(A \\mid B)$ responde a la pregunta: «¿Qué probabilidad tiene $A$ si ya sabemos que $B$ ha ocurrido?» El conocimiento sobre $B$ cambia la probabilidad: el espacio muestral se encoge a los casos en los que se cumple $B$:',
      multiplication_rule: 'La regla del producto se deduce directamente de la definición: si quieres calcular la probabilidad de «$A$ y $B$ a la vez», multiplicas $P(B)$ por la probabilidad condicionada $P(A \\mid B)$:',
      amir_tip: 'En mi código de recomendación uso probabilidades condicionadas constantemente: $P(\\text{like}_Y \\mid \\text{like}_X)$, la probabilidad de que a un usuario le guste la canción $Y$ dado que ha dado «me gusta» a la canción $X$. ¡Ese es el corazón de cualquier filtro colaborativo!',
      bayes: 'El teorema de Bayes es la magia: invierte el sentido. Si conoces $P(B \\mid A)$ pero necesitas $P(A \\mid B)$, Bayes te da la solución. La fórmula parece complicada, pero el núcleo es simple: ponderas con la probabilidad de base (a priori):',
      total_probability: 'Para el denominador del teorema de Bayes necesitas a menudo la probabilidad total. Descompone $P(B)$ en todos los caminos posibles por los que puede ocurrir $B$: a través de $A$ o a través de $\\bar{A}$ (no-$A$):',
      independence: 'Dos sucesos son estocásticamente independientes cuando el conocimiento sobre uno no cambia la probabilidad del otro. Formalmente: $P(A \\mid B) = P(A)$; que ocurra $B$ no influye en $A$. De forma equivalente se cumple:',
    },
    concepts: {
      conditional_prob: {
        title: 'Probabilidad condicionada',
        desc: '$P(A \\mid B)$ es la probabilidad de $A$ bajo la condición $B$. Haces «zoom» sobre la parte del espacio de probabilidad en la que se cumple $B$ y solo entonces preguntas por $A$. Importante: $P(A \\mid B) \\neq P(B \\mid A)$; ¡el sentido cuenta!',
      },
      bayes: {
        title: 'Teorema de Bayes',
        desc: 'La fórmula para invertir el sentido: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ es la probabilidad a priori (conocimiento previo) y $P(A \\mid B)$ la a posteriori (estimación actualizada tras observar $B$). La estadística bayesiana es la base de los filtros de spam y de los sistemas de diagnóstico.',
      },
      independence: {
        title: 'Independencia estocástica',
        desc: '$A$ y $B$ son independientes si $P(A \\cap B) = P(A) \\cdot P(B)$. Eso significa que la ocurrencia de $B$ no cambia nada en la probabilidad de $A$. Ojo: ¡independencia NO es lo mismo que «sin intersección» (disjuntos)!',
      },
    },
    examples: {
      medical_test: {
        title: 'Prueba médica: falacia de la tasa base',
        context: 'Una prueba de una enfermedad es correcta en el 99% de los casos. La enfermedad afecta al 1% de la población. Si la prueba da positivo, ¿qué probabilidad hay de estar realmente enfermo?',
        step1: 'Datos: $P(K) = 0{,}01$ (enfermedad), $P(+ \\mid K) = 0{,}99$ (sensibilidad), $P(+ \\mid \\bar{K}) = 0{,}05$ (tasa de falsos positivos).',
        step2: 'Calcular la probabilidad total de un resultado positivo: los dos caminos (enfermos + sanos):',
        step3: 'Aplicar el teorema de Bayes: se busca $P(K \\mid +)$:',
        step4: 'Resultado: solo un 16{,}7% de probabilidad de estar realmente enfermo, ¡pese al 99% de precisión de la prueba!',
        amir_comment: '¡Esa es la falacia de la tasa base! La prueba es muy precisa, pero como la enfermedad es tan rara ($P(K) = 1\\%$), la mayoría de los positivos son falsos positivos. En el mundo del ML eso significa: ¡precisión y exhaustividad no son lo mismo!',
      },
      spam_filter: {
        title: 'Filtro de spam con Bayes',
        context: 'El filtro de correo de Amir tiene que aprender: si un mensaje contiene la palabra «premio», ¿es spam?',
        step1: 'Datos dados: el 30% de todos los mensajes son spam, el 80% de los mensajes de spam contienen «premio», pero también el 10% de los normales:',
        step2: 'Probabilidad total de que un mensaje contenga «premio»:',
        step3: 'Bayes: ¿qué probabilidad hay de que sea spam si aparece «premio»?',
        step4: 'Resultado: 77{,}4%; un mensaje con «premio» es con alta probabilidad spam:',
        amir_comment: '¡Así funciona exactamente un clasificador Naive Bayes! Cuantas más palabras añadas, más preciso se vuelve el filtro. DataPulse usa el mismo principio: en lugar de palabras analizamos patrones de escucha y, en lugar de spam/no spam, clasificamos preferencias de género.',
      },
    },
    realworld: {
      recommendation: {
        title: 'Recomendaciones musicales en DataPulse',
        desc: 'El filtrado colaborativo se basa en probabilidades condicionadas: $P(\\text{like}_Y \\mid \\text{like}_X)$, «a quien le gusta la canción X, ¿con qué probabilidad le gusta también la canción Y?». Spotify, Netflix y DataPulse calculan millones de estas probabilidades condicionadas en tiempo real.',
      },
      weather: {
        title: 'Predicción del tiempo',
        desc: 'Los meteorólogos actualizan constantemente su pronóstico con Bayes: $P(\\text{Lluvia} \\mid \\text{Nubes, Presión, Viento})$. Cada nueva medición afina el pronóstico. ¡Por eso la probabilidad de lluvia cambia a lo largo del día: es Bayes en acción!',
      },
      fraud_detection: {
        title: 'Detección de fraude',
        desc: 'El sistema de pagos de Amir detecta transacciones sospechosas con Bayes: cuando salta una alarma, ¿qué probabilidad hay de fraude real? Igual que en la prueba médica: ¡decide la tasa base! Con una tasa de fraude del 0{,}1% la mayoría de las alarmas son falsas.',
      },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$: sentido confundido',
        correct: '¡Invertir el sentido solo se puede con Bayes!',
        why: '$P(A \\mid B)$ y $P(B \\mid A)$ son valores completamente distintos. Ejemplo: $P(\\text{mojado} \\mid \\text{lluvia}) = 0{,}99$, pero $P(\\text{lluvia} \\mid \\text{mojado}) \\ll 0{,}99$; también te puedes mojar por un sistema de riego. Necesitas el teorema de Bayes para invertir el sentido.',
        amir_warning: '¡Veo este error constantemente en las revisiones de código! Alguien calcula $P(\\text{click} \\mid \\text{bought})$ y lo usa como $P(\\text{bought} \\mid \\text{click})$. Eso puede arruinar por completo el algoritmo de recomendación. ¡Bayes es obligatorio!',
      },
      ignore_base_rate: {
        wrong: 'Ignorar la tasa base (falacia de la tasa base)',
        correct: 'Tener siempre en cuenta $P(A)$, la probabilidad a priori',
        why: 'Una prueba con un 99% de precisión suena impresionante, pero si la enfermedad solo afecta al 1%, entonces $P(K \\mid +) \\approx 16{,}7\\%$. La baja tasa base $P(K) = 0{,}01$ domina el resultado. Sin la probabilidad a priori obtienes una estimación completamente sesgada.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn construye el backend de la nueva función de DataPulse: encontrar canciones parecidas. Pero ¿cómo se mide el «parecido» entre canciones si cada una se describe con decenas de propiedades: tempo, energía, ambiente, instrumentación? «Imagínate cada canción como un punto en el espacio», dice Amir. «Cuanto más cerca estén dos puntos, más parecidas son las canciones.» Bienvenidos al mundo de los vectores.',
      challenge: 'Amir tiene que representar las características de las canciones como vectores y calcular su parecido, con el producto escalar y el ángulo entre vectores.',
      outro: 'El motor de recomendación de DataPulse usa ahora la similitud del coseno: cuanto menor sea el ángulo entre dos vectores de canciones, más parecidas son. «En el mundo del ML los vectores están por todas partes: word embeddings, espacios de características, redes neuronales. Todo es álgebra lineal», le dice Amir entusiasmado a Yara.',
    },
    objectives: {
      vectors_2d_3d: 'Escribir vectores en $\\mathbb{R}^2$ y $\\mathbb{R}^3$ como columnas e interpretarlos geométricamente',
      vector_operations: 'Dominar la suma de vectores y la multiplicación por un escalar',
      scalar_product: 'Calcular el producto escalar e interpretarlo geométricamente',
      angle_between_vectors: 'Determinar el ángulo entre dos vectores con la fórmula del coseno',
    },
    explanation: {
      intro: 'Un vector describe un desplazamiento en el espacio o, de forma más general, una lista ordenada de números. En $\\mathbb{R}^3$ un vector tiene tres componentes, que escribes en columna. En el análisis de datos los vectores pueden tener 50 o 500 dimensiones: el principio no cambia:',
      addition: 'Los vectores se suman componente a componente, cada fila por su lado. Geométricamente colocas el segundo vector al final del primero (método punta-cola). El resultado es el camino directo del inicio al destino:',
      amir_tip: 'En mi código de Python los vectores son simplemente arrays de numpy. La suma $\\vec{a} + \\vec{b}$ se ejecuta automáticamente elemento a elemento: np.array([3,4]) + np.array([-1,2]) da np.array([2,6]). ¡Exactamente lo mismo que en matemáticas!',
      scalar_product: 'El producto escalar (también: producto interior) de dos vectores da un único número, ¡no un vector! Multiplicas las componentes por parejas y lo sumas todo. El resultado te dice con qué intensidad los vectores «apuntan en la misma dirección»:',
      length: 'La longitud (el módulo) de un vector se calcula con el teorema de Pitágoras, extendido a tres dimensiones. En el caso 2D es el conocido $\\sqrt{x^2 + y^2}$; en 3D se añade $z^2$:',
      angle: 'La aplicación más importante del producto escalar: el ángulo entre dos vectores. La fórmula conecta el producto escalar algebraico con la interpretación geométrica. Ese ángulo es, en el mundo del ML, la medida estándar de parecido bajo el nombre de «similitud del coseno»:',
    },
    concepts: {
      vector: {
        title: 'Vector',
        desc: 'Una lista ordenada de números escrita en columna. En $\\mathbb{R}^2$ un vector tiene 2 componentes y en $\\mathbb{R}^3$ tres. Geométricamente es una flecha con dirección y longitud. En el análisis de datos un vector representa un objeto con sus propiedades, por ejemplo una canción con tempo, energía y ambiente.',
      },
      scalar_product: {
        title: 'Producto escalar',
        desc: 'Dos vectores dentro, un número fuera: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geométricamente se cumple: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. Si el producto escalar es cero, los vectores son perpendiculares (ortogonales).',
      },
      vector_length: {
        title: 'Módulo de un vector',
        desc: 'La longitud $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$: Pitágoras generalizado. Un vector de módulo 1 se llama vector unitario. En el mundo del ML se normalizan a menudo los vectores a longitud 1 para comparar solo la dirección.',
      },
    },
    examples: {
      force_addition: {
        title: 'Sumar fuerzas como vectores',
        context: 'Dos fuerzas actúan sobre un objeto; Amir calcula la fuerza total resultante.',
        step1: 'Las dos fuerzas dadas como vectores 2D:',
        step2: 'Sumar componente a componente, cada fila por su lado:',
        step3: 'Calcular el módulo de la fuerza total (Pitágoras):',
        step4: 'Calcular: la fuerza total es de unos $6{,}32\\,\\text{N}$:',
        amir_comment: 'El mismo principio usamos en DataPulse: en lugar de fuerzas sumamos vectores de características. Si a un usuario le gustan dos géneros, el vector de gusto combinado es la suma; ¡así encontramos canciones que encajan en ambos géneros!',
      },
      angle_vectors: {
        title: 'Ángulo entre vectores de canciones',
        context: 'Amir compara dos canciones: la canción A tiene el vector de características $(1, 2, 3)$ y la canción B $(4, -1, 2)$. ¿Cuánto se parecen?',
        step1: 'Los vectores de características de ambas canciones:',
        step2: 'Calcular el producto escalar: multiplicar las componentes por parejas y sumar:',
        step3: 'Calcular los módulos de ambos vectores:',
        step4: 'Aplicar la fórmula del coseno: el ángulo es de unos $62{,}2°$:',
        amir_comment: 'Un ángulo de $62{,}2°$ significa que las canciones se parecen en parte, pero no mucho. Con $0°$ serían idénticas (mismas proporciones) y con $90°$ completamente distintas. En mi código pone: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))',
      },
    },
    realworld: {
      embeddings: {
        title: 'Word embeddings y song embeddings',
        desc: 'En el mundo del ML, palabras, canciones e imágenes se representan como vectores de alta dimensión (embeddings). La similitud del coseno $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ mide su parecido. Un ejemplo célebre: «rey» $-$ «hombre» $+$ «mujer» $\\approx$ «reina»: ¡aritmética vectorial con significados de palabras!',
      },
      navigation: {
        title: 'Navegación y robótica',
        desc: 'Los sistemas de navegación y los robots usan vectores para la posición y el movimiento. El vector de posición dice «¿dónde estoy?» y el vector de velocidad «¿hacia dónde y a qué velocidad?». La suma de vectores calcula la nueva posición tras un movimiento.',
      },
      game_physics: {
        title: 'Física de videojuegos y simulaciones',
        desc: 'En juegos como Fortnite o Minecraft la física se calcula con vectores: $\\vec{v}_{\\text{nuevo}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Velocidad, aceleración y gravedad: ¡todo vectores! Sin cálculo vectorial ninguna pelota volaría correctamente.',
      },
    },
    mistakes: {
      scalar_vs_cross: {
        wrong: 'El producto escalar da un vector',
        correct: 'El producto escalar da un NÚMERO ($\\in \\mathbb{R}$)',
        why: 'En el producto escalar multiplicas componente a componente y SUMAS: el resultado es un único número, no un vector. No lo confundas con el producto vectorial (ese sí da un vector, pero llega más adelante).',
        amir_warning: 'En numpy: np.dot(a, b) devuelve un número y np.cross(a, b) devuelve un vector. ¡Si tu puntuación de parecido resulta de pronto un array en lugar de un número, has usado el producto equivocado!',
      },
      length_sum: {
        wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$: componentes simplemente sumadas',
        correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$: ¡aplica Pitágoras!',
        why: 'La longitud de un vector es la distancia euclídea al origen, y esa sigue el teorema de Pitágoras. Sumar sin más las componentes daría la distancia de Manhattan (también útil, ¡pero es otra cosa!).',
      },
    },
  },
};
