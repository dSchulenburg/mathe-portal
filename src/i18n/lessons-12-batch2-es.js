export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai se enfrenta al último problema de equilibrio de «Hafenlichter 3D»: el botín tiene que sentirse justo, pero a la vez emocionante. Si cada jefe suelta exactamente la misma cantidad de oro, resulta aburrido; con demasiada varianza, los jugadores se quejan de que es injusto. «Necesito una distribución que parezca natural: muchos valores cerca de la media y pocos valores extremos», le dice Kai a su compañera Priya. La respuesta, sacada de la clase de estocástica: la distribución normal con su curva de campana perfecta.',
      challenge: 'Kai tiene que calibrar el sistema de botín y de rendimiento de «Hafenlichter 3D» de modo que las recompensas se repartan de forma justa y los tiempos de fotograma se mantengan por debajo del umbral crítico; la distribución normal y sus reglas sigma le dan la herramienta.',
      outro: 'Con la distribución normal, Kai ha construido un sistema de equilibrio elegante: el botín sigue una curva de campana en torno al valor previsto y las reglas sigma garantizan que los valores atípicos sean rarísimos. «Lo bonito es que ahora puedo calcular con exactitud qué porcentaje de jugadores experimenta un determinado valor de botín», le explica al equipo. Y con la transformación $z$ compara métricas completamente distintas —tiempos de fotograma, reparto de daño, duración de la partida— en una única escala. La curva de campana está en todas partes.',
    },
    objectives: {
      bell_curve: 'Comprender la distribución normal $N(\\mu, \\sigma^2)$ como distribución continua con forma de campana e interpretar sus parámetros',
      sigma_rules: 'Aplicar las reglas sigma ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) para estimaciones rápidas de probabilidad',
      z_transformation: 'Efectuar la transformación $z$ y calcular probabilidades con la distribución normal estándar $\\Phi(z)$',
      central_limit_theorem: 'Conocer el teorema central del límite y explicar por qué la distribución normal aparece en todas partes',
    },
    explanation: {
      intro: 'La distribución normal es la distribución continua más importante de la estadística, y te la encuentras por todas partes: en estaturas, valores medidos, tiempos de fotograma, resultados de exámenes. Su densidad tiene la icónica forma de campana, simétrica respecto a la media $\\mu$. La desviación típica $\\sigma$ determina lo ancha o estrecha que es la campana: $\\sigma$ pequeña = campana estrecha y alta (poca dispersión), $\\sigma$ grande = campana ancha y plana (mucha dispersión). La función de densidad es:',
      sigma_rules: 'Las reglas sigma son tu herramienta rápida: te dicen al instante qué porcentaje de todos los valores está en un intervalo determinado en torno a $\\mu$, sin tablas y sin calculadora. Dentro de $\\pm 1\\sigma$ queda alrededor del $68{,}3\\%$, dentro de $\\pm 2\\sigma$ alrededor del $95{,}4\\%$ y dentro de $\\pm 3\\sigma$ casi todo: el $99{,}7\\%$. Eso significa que los valores más allá de $3\\sigma$ son rarísimos.',
      kai_tip: 'En el desarrollo de videojuegos uso las reglas sigma a diario para equilibrar. Si quiero que el 95% del botín quede entre 30 y 70 de oro, pongo $\\mu = 50$ y $2\\sigma = 20$, es decir, $\\sigma = 10$. ¡Listo! Las reglas me dan la distribución al momento sin tener que integrar nada.',
      z_transformation: 'Pero ¿y si necesitas una probabilidad exacta y no solo las reglas sigma? Ahí entra en juego la transformación $z$: conviertes tu valor $x$ en un valor $z$ estandarizado y consultas la tabla de la distribución normal estándar $\\Phi(z)$. El valor $z$ te dice a cuántas desviaciones típicas está $x$ de la media:',
      central_limit: '¿Por qué es tan omnipresente la distribución normal? El teorema central del límite da la respuesta: si sumas suficientes variables aleatorias independientes, su suma se aproxima a una distribución normal, sea cual sea el aspecto de las distribuciones individuales. Por eso las medias son casi siempre normales, aunque los datos individuales no lo sean:',
    },
    concepts: {
      normal_distribution: {
        title: 'Distribución normal $N(\\mu, \\sigma^2)$',
        desc: 'La distribución continua con densidad en forma de campana. $\\mu$ es la media (el centro de la campana) y $\\sigma^2$ la varianza (la anchura de la campana). El área bajo la curva es siempre 1. Simétrica respecto a $\\mu$: mediana = moda = media.',
      },
      sigma_rules: {
        title: 'Reglas sigma',
        desc: 'Las tres reglas de oro: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Imprescindibles para estimaciones rápidas.',
      },
      z_transformation: {
        title: 'Transformación $z$',
        desc: 'Convierte cualquier distribución normal en la distribución normal estándar $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Después lees $P(X \\leq x) = \\Phi(z)$ en la tabla. Así, distribuciones normales cualesquiera se vuelven comparables.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Probabilidad de un botín',
        context: 'En «Hafenlichter 3D» los jefes sueltan oro con distribución normal de $\\mu = 50$ y $\\sigma = 8$. Kai quiere saber: ¿qué probabilidad hay de un botín legendario de al menos 70 de oro?',
        step1: 'Plantear el modelo: el botín de oro sigue una distribución normal:',
        step2: 'Aplicar la transformación $z$: ¿a cuántas desviaciones típicas está 70 de 50?',
        step3: 'Consultar la tabla: leer $\\Phi(2{,}5)$:',
        step4: 'Calcular la probabilidad complementaria: solo el $0{,}6\\%$ consigue 70 o más de oro:',
        kai_comment: '¡Perfecto! Un botín legendario en menos del 1% de los jugadores: se siente especial sin ser injusto. La distribución normal me da el control total sobre la rareza.',
      },
      frame_times: {
        title: 'Análisis del tiempo de fotograma',
        context: 'A 60 FPS cada fotograma debe renderizarse en $16{,}7\\,\\text{ms}$. El profiler de Kai muestra que los tiempos de fotograma siguen una normal con $\\mu = 16{,}7\\,\\text{ms}$ y $\\sigma = 2{,}1\\,\\text{ms}$. ¿Con qué frecuencia se atasca el juego (tiempo de fotograma $> 20\\,\\text{ms}$)?',
        step1: 'Plantear el modelo: tiempos de fotograma como distribución normal:',
        step2: 'Transformación $z$ para el umbral de atasco $x = 20$:',
        step3: 'Leer el valor de la tabla:',
        step4: 'Calcular la probabilidad complementaria: se atasca aproximadamente uno de cada 17 fotogramas:',
        kai_comment: 'Casi un 6% de atascos: es demasiado para un juego 3D fluido. Tengo que optimizar el renderizador hasta que $\\sigma$ sea menor. Objetivo: $\\sigma \\leq 1{,}5$, y entonces se ve afectado menos del 1,5% de los fotogramas.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Control de calidad en la industria',
        desc: 'Las fábricas usan la regla de $3\\sigma$: si una pieza se desvía más de $3\\sigma$ de la medida nominal, se descarta. La gestión Six Sigma va aún más lejos: $6\\sigma$ significa como máximo 3,4 defectos por millón de piezas. La distribución normal es el fundamento del aseguramiento de la calidad industrial.',
      },
      iq_scores: {
        title: 'Tests de CI y estandarización',
        desc: 'Los valores de CI son por definición normales con $\\mu = 100$ y $\\sigma = 15$. Eso significa que alrededor del $68\\%$ de la población tiene un CI entre 85 y 115, y alrededor del $95\\%$ entre 70 y 130. ¡Un CI de 145 ($z = 3$) es tan raro como un botín de 70 de oro!',
      },
      stock_returns: {
        title: 'Rentabilidad bursátil y riesgo',
        desc: 'Las rentabilidades diarias de las acciones suelen modelarse como normales; entonces $\\sigma$ es el riesgo. Los gestores de carteras usan la transformación $z$ para calcular la probabilidad de una caída brusca. Ahora bien: en la realidad los valores extremos aparecen con más frecuencia de la que predice la normal («colas gruesas»).',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'Escribir la distribución normal como $N(\\mu, \\sigma)$: desviación típica en lugar de varianza',
        correct: 'Lo correcto es $N(\\mu, \\sigma^2)$: el segundo parámetro es siempre la varianza',
        why: 'En la notación $N(\\mu, \\sigma^2)$ el segundo parámetro representa la varianza $\\sigma^2$, no la desviación típica $\\sigma$. Las confusiones llevan a probabilidades completamente erróneas: por ejemplo, $N(0, 4)$ es una distribución con $\\sigma = 2$, ¡no $\\sigma = 4$!',
        kai_warning: 'Este error me destrozó una vez todo el equilibrio del botín. Yo quería decir $\\sigma = 8$, pero escribí $N(50, 8)$, y eso significa $\\sigma = \\sqrt{8} \\approx 2{,}83$. ¡El botín salía demasiado uniforme! Acuérdate siempre: $N(\\mu, \\sigma^2)$.',
      },
      z_sign: {
        wrong: 'La fórmula del $z$ al revés: $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'Lo correcto es $z = \\frac{x - \\mu}{\\sigma}$: valor menos media, no al revés',
        why: 'Si inviertes el numerador, obtienes el signo equivocado. Un valor por encima de la media tiene que dar un $z$ positivo y uno por debajo, negativo. Con $x = 70$ y $\\mu = 50$ se tiene $z = +2{,}5$ (por encima de la media), no $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai ha llegado al corazón de «Hafenlichter 3D»: el motor 3D. Cada objeto del juego —cada barco, cada ola, cada farola del puerto— tiene que poder girarse, escalarse y desplazarse. «En 2D las transformaciones eran simples fórmulas», recuerda de los comienzos de Mia. «Pero en 3D necesitas un sistema que encadene tantas transformaciones como quieras, y eso son las matrices.» Kai abre el código del shader y ve matrices por todas partes: matriz de modelo, matriz de vista, matriz de proyección.',
      challenge: 'Kai tiene que entender e implementar las transformaciones 3D de su motor de juego: rotación, escalado y procesos de transición, todo controlado mediante multiplicación de matrices.',
      outro: 'Las matrices se han convertido en una herramienta diaria para Kai: cada transformación 3D es una matriz, cada animación una serie de multiplicaciones de matrices, cada comportamiento de transición una matriz estocástica. «Lo genial es que, por compleja que sea la transformación, al final siempre es $\\vec{x}\' = M \\cdot \\vec{x}$», dice. La matriz MVP ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) convierte ahora miles de vértices de Hafenlichter por fotograma en píxeles en la pantalla.',
    },
    objectives: {
      matrix_operations: 'Sumar y multiplicar matrices y aplicar con seguridad las reglas de cálculo, en especial la no conmutatividad',
      transformation_matrices: 'Plantear matrices de transformación para rotación, escalado y simetría y aplicarlas a vectores',
      stochastic_matrices: 'Calcular matrices estocásticas y vectores fijos para procesos de transición',
      inverse_matrix: 'Determinar la matriz inversa y comprender su significado como «transformación de vuelta»',
    },
    explanation: {
      intro: 'Las matrices son tablas rectangulares de números, pero su verdadera fuerza está en que representan aplicaciones. Una matriz $2 \\times 2$ transforma vectores 2D y una matriz $3 \\times 3$ transforma vectores 3D. Multiplicar significa: fila por columna y luego sumar. Para $C = A \\cdot B$ se cumple:',
      transformation: 'En gráficos 3D toda transformación geométrica es una matriz: rotación, escalado, simetría. La matriz de rotación alrededor del eje $z$ gira un punto $(x, y, z)$ el ángulo $\\theta$, y la coordenada $z$ queda inalterada:',
      kai_tip: 'En mi motor encadeno transformaciones mediante multiplicación de matrices: primero escalar, luego rotar, luego desplazar. El orden es aquí decisivo: ¡las matrices no son conmutativas! Rotar primero y luego desplazar da algo completamente distinto de desplazar primero y luego rotar. Por eso leo siempre las cadenas de matrices de derecha a izquierda.',
      stochastic: 'Las matrices estocásticas describen procesos de transición: ¿qué probabilidad hay de pasar de un estado a otro? Cada columna suma 1 (con vectores columna). Si multiplicas el vector de estado $\\vec{v}_n$ por la matriz de transición $T$, obtienes el estado siguiente $\\vec{v}_{n+1}$:',
      inverse: 'La matriz inversa $A^{-1}$ es la «tecla de deshacer»: $A \\cdot A^{-1} = I$ (matriz identidad). Si $A$ es una rotación de $30°$, entonces $A^{-1}$ es la rotación de $-30°$. No toda matriz tiene inversa: solo cuando $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Multiplicación de matrices',
        desc: 'Fila por columna: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. El número de columnas de $A$ debe ser igual al número de filas de $B$. Importante: en general $A \\cdot B \\neq B \\cdot A$. El orden importa.',
      },
      transformation_matrix: {
        title: 'Matriz de transformación',
        desc: 'Toda aplicación lineal (rotación, escalado, simetría) puede representarse como matriz. La matriz de rotación $R(\\theta)$ gira vectores el ángulo $\\theta$. Varias transformaciones se encadenan mediante multiplicación de matrices, leídas de derecha a izquierda.',
      },
      stochastic_matrix: {
        title: 'Matriz estocástica y vector fijo',
        desc: 'Una matriz estocástica tiene suma 1 en cada columna: describe probabilidades de transición. El vector fijo $\\vec{v}_{\\text{fix}}$ con $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ es el estado de equilibrio a largo plazo, sea cual sea el estado inicial.',
      },
    },
    examples: {
      '3d_rotation': {
        title: 'Rotación 3D de una farola del puerto',
        context: 'Kai quiere girar una farola del puerto $90°$ alrededor del eje $z$. La farola está en el punto $(3, 0, 5)$. ¿Cómo calcula la nueva posición?',
        step1: 'Plantear la matriz de rotación de $90°$ alrededor del eje $z$ ($\\cos 90° = 0$, $\\sin 90° = 1$):',
        step2: 'Escribir el vector de posición de la farola como vector columna:',
        step3: 'Matriz por vector: multiplicar fila a fila:',
        step4: 'Resultado: la farola está ahora en $(0, 3, 5)$, girada $90°$ en el plano $xy$ y con $z$ inalterada:',
        kai_comment: 'Así funciona exactamente cada fotograma en mi motor: miles de vértices se multiplican por la matriz de modelo, luego por la matriz de vista (posición de la cámara) y luego por la matriz de proyección (perspectiva). Tres multiplicaciones de matrices por vértice, ¡y la GPU lo hace en milisegundos!',
      },
      player_states: {
        title: 'Comportamiento del jugador como cadena de Markov',
        context: 'En «Hafenlichter 3D» los jugadores alternan entre explorar (E) y combatir (C). Kai ha observado que quien explora sigue explorando en el $70\\%$ de los casos y pasa a combatir en el $30\\%$. Quien combate se queda en combate en el $80\\%$ y vuelve a explorar en el $20\\%$. Ahora mismo explora el $60\\%$ de los jugadores.',
        step1: 'Plantear la matriz de transición $T$ y el vector inicial $\\vec{v}_0$:',
        step2: 'Calcular un paso: $\\vec{v}_1 = T \\cdot \\vec{v}_0$:',
        step3: 'Determinar el vector fijo: resolver el sistema $T \\cdot \\vec{v} = \\vec{v}$ con $x + y = 1$:',
        step4: 'A largo plazo explora el $40\\%$ y combate el $60\\%$, con independencia del inicio:',
        kai_comment: '¡Esto vale oro para mi diseño de juego! El vector fijo me muestra que a largo plazo los jugadores combaten más de lo que exploran, empiecen como empiecen. Si lo quiero más equilibrado, tengo que cambiar las probabilidades de transición. ¡Las matrices hacen calculable el comportamiento de los jugadores!',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Gráficos por ordenador y motores 3D',
        desc: 'Todo motor 3D (Unity, Unreal, Godot) se basa en la multiplicación de matrices. La cadena MVP —$M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$— transforma cada punto 3D a la pantalla 2D. Las GPU modernas son en esencia máquinas masivas de multiplicar matrices.',
      },
      google_pagerank: {
        title: 'PageRank de Google',
        desc: 'El algoritmo de búsqueda original de Google modela la web como una matriz estocástica gigantesca: cada página es un estado y cada enlace una probabilidad de transición. El vector fijo $\\vec{r} = T \\cdot \\vec{r}$ da el ranking: las páginas con los valores más altos en el vector fijo quedan arriba del todo.',
      },
      robotics: {
        title: 'Robótica y control de máquinas',
        desc: 'Los brazos robóticos están formados por articulaciones que ejecutan cada una una rotación. La posición global de la mano resulta del producto de todas las matrices de rotación a lo largo del brazo. A eso se le llama cinemática directa, y la matriz inversa resuelve el problema inverso: «¿qué ángulos de articulación necesito para esta posición de la mano?»',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Tratar la multiplicación de matrices como la de números: $A \\cdot B = B \\cdot A$',
        correct: 'Las matrices NO son conmutativas: en general $A \\cdot B \\neq B \\cdot A$',
        why: 'Rotar primero y luego desplazar da un resultado distinto de desplazar primero y luego rotar. En gráficos 3D, invertir el orden lleva a posiciones completamente equivocadas. Por eso: ¡lee siempre las cadenas de transformación de derecha a izquierda!',
        kai_warning: 'Una vez estuve un día entero buscando un fallo porque había intercambiado rotación y traslación. ¡Mis barcos giraban alrededor del centro del mundo en lugar de su propio eje! Desde entonces leo siempre las cadenas de matrices de derecha a izquierda: $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$: primero rotar, luego desplazar.',
      },
      stochastic_rows_cols: {
        wrong: 'Suponer suma de fila = 1 en matrices estocásticas con vectores columna',
        correct: 'Con vectores columna, la suma de la columna debe ser 1: $\\sum_i t_{ij} = 1$',
        why: 'El convenio depende de si usas vectores fila o vectores columna. En el instituto y en las universidades alemanas el estándar es el vector columna; entonces las columnas de la matriz de transición deben sumar 1. Cada columna describe: «desde el estado $j$, ¿cómo se reparten las transiciones?»',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'Es la noche del lanzamiento en el puerto de Hamburgo. Las luces de los embarcaderos se reflejan en el agua y en la gran pantalla frente a la lonja brilla el título: «Hafenlichter 3D». Kai está en el escenario, micrófono en mano, y apenas se lo cree: tres años de desarrollo y ahora el juego por fin está listo. Entre el público reconoce dos caras conocidas: Mia, que en su día lo puso todo en marcha con su juego 2D de pixel art, y Amir, cuyos algoritmos de DataPulse gobiernan la IA de los personajes no jugables. «¿Os acordáis», dice Kai al micrófono, «de cuando Mia empezó con funciones lineales para mover personajes a lo largo de una recta? Después Amir construyó la canalización de datos con derivadas y distribución binomial. Y ahora estamos aquí: con matrices, integrales y distribución normal hemos creado un mundo 3D completo.» El público aplaude. Pero antes de que la fiesta arranque de verdad, a Kai le queda un último reto: el examen de matemáticas.',
      challenge: 'Se acerca la prueba más grande: el examen final reúne análisis, geometría analítica y estocástica en un solo ejercicio. Kai necesita una estrategia que enlace todos los temas, maximice los puntos y evite los errores típicos.',
      outro: 'La fiesta de lanzamiento en el puerto sigue, suena la música y Kai, Mia y Amir brindan. «Tres años de matemáticas», dice Mia, «de la recta a la distribución normal.» «De los datos a las redes neuronales», añade Amir. «De los píxeles 2D al motor 3D», concluye Kai. Miran hacia el Elba, donde bailan las luces del puerto: cada una de ellas un vértice, transformado por una matriz, iluminado por una función exponencial, equilibrado por una distribución normal. Las matemáticas nunca fueron solo cálculo. Fueron el idioma con el que hicieron reales sus ideas. El juego está lanzado. El examen llega. Y salga como salga, el viaje mereció la pena. Cada función, cada derivada, cada integral los ha traído hasta aquí. Al puerto. A la meta. Y al comienzo de todo lo que aún está por venir.',
    },
    objectives: {
      exam_strategy: 'Desarrollar una estrategia de examen clara: revisar los ejercicios, calcular la relación puntos-tiempo, los fáciles primero',
      cross_topic_connections: 'Reconocer y aprovechar las conexiones entre análisis, geometría analítica y estocástica',
      time_management: 'Planificar de forma realista el presupuesto de tiempo por ejercicio y cumplirlo',
      error_prevention: 'Reconocer errores típicos, hacer comprobaciones de plausibilidad e interpretar los resultados en su contexto',
    },
    explanation: {
      intro: 'El examen final no es un esprint, sino un juego de estrategia, como un jefe final con varias fases. Tienes unas 4 o 5 horas para tres grandes bloques temáticos. La clave no es saberlo todo, sino priorizar con cabeza y trabajar con orden. Kai lo aprendió con su juego: «No puedes arreglar todos los fallos a la vez. Arreglas los que más impacto tienen, y así exactamente afrontas el examen.»',
      kai_rallying: 'Chicos, hemos hecho matemáticas durante tres años, no porque tuviéramos que hacerlo, sino porque eran la llave de nuestros proyectos. Mia empezó con funciones, Amir entrenó su IA con estocástica y yo construí un mundo 3D con matrices. El examen es solo los créditos después del combate final. ¡Estamos listos!',
      structure: 'El examen consta normalmente de tres partes obligatorias: análisis (a menudo el bloque mayor), geometría analítica y estocástica. Los puntos se reparten aproximadamente así:',
      time_strategy: 'Planifica tu tiempo en proporción a los puntos. Si un ejercicio vale 10 de 100 puntos, dedícale alrededor del $10\\%$ de tu tiempo. Y la regla de oro: empieza por los ejercicios en los que te sientas seguro. ¡Cada punto seguro vale tanto como uno arrancado a duras penas!',
      mia_wisdom: '¡Acordaos de lo básico! El estudio de una función siempre sigue el mismo esquema: dominio, ceros, extremos, puntos de inflexión, comportamiento para $x \\to \\pm\\infty$. Si conocéis el patrón, cada función es solo una variación de él. Lo aprendí con mis personajes de juego: en el fondo, todo movimiento es una función.',
      checking: 'Después de cada apartado: ¡comprobación de plausibilidad! ¿Cuadran las unidades? ¿Tienen sentido los signos? ¿Está el resultado en un rango realista? Una probabilidad mayor que 1 o un área negativa son señales de alarma inmediatas; entonces es mejor rehacer el cálculo que seguir adelante.',
      amir_data: 'Yo siempre compruebo mis resultados contra casos límite: ¿qué pasa en $x = 0$? ¿Con $x$ muy grandes? ¿Converge mi solución o diverge? Esa forma de pensar, que viene de la depuración, vale igual para el examen. Y en estocástica: ¡comprueba siempre si se cumple $\\sum P = 1$!',
      confidence: 'Lo más importante para el final: sabes más de lo que crees. Tres años de práctica están en tus manos. Si durante el examen te quedas en blanco un momento, respira, vuelve a leer el enunciado y empieza por lo que sabes seguro. Cada punto cuenta. Y recuerda: las matemáticas no son talento, sino un idioma que has aprendido. Háblalo.',
    },
    concepts: {
      read_then_plan: {
        title: 'Leer → planificar → calcular → comprobar',
        desc: 'El esquema de 4 pasos para cada ejercicio: (1) leer el enunciado entero y marcar la información. (2) planificar la estrategia de resolución: ¿qué métodos necesitas? (3) calcular con orden y claridad. (4) comprobar el resultado: unidades, signos, plausibilidad, contexto.',
      },
      point_maximizing: {
        title: 'Eficiencia por puntos',
        desc: 'No todos los ejercicios son igual de difíciles por punto. Empieza por aquellos en los que consigas más puntos en menos tiempo. Los últimos apartados suelen ser los más difíciles: es mejor recoger primero todos los puntos «fáciles» de todos los ejercicios y volver después a los difíciles.',
      },
      plausibility_check: {
        title: 'Comprobación de plausibilidad',
        desc: 'Cuatro comprobaciones rápidas que evitan errores por descuido: (1) unidades: ¿encaja la unidad con el contexto? (2) signos: ¿tiene sentido aquí un valor negativo? (3) límites: ¿qué pasa para $x \\to 0$ o $x \\to \\infty$? (4) esbozo: ¿encaja el resultado con la idea gráfica?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Ejercicio típico de análisis: estudio de función + integral',
        context: 'Kai modela el consumo de energía de su motor 3D con $f(x) = (2x - 1) \\cdot e^{-x}$. Determina los extremos y calcula el área entre la gráfica y el eje $x$ en $[0;\\, 3]$.',
        step1: 'Plantear la función: aquí ya viene dada:',
        step2: 'Derivada con la regla del producto: $u = 2x - 1$, $v = e^{-x}$, es decir, $f\'(x) = u\' \\cdot v + u \\cdot v\'$:',
        step3: 'Hallar el extremo: poner $f\'(x) = 0$ ($e^{-x} > 0$ siempre, así que el paréntesis = 0):',
        step4: 'Cálculo del área: integración por partes o determinación de la primitiva:',
        mia_comment: 'Ese es exactamente el patrón al que me refiero: derivada con la regla del producto, hallar el cero, calcular la integral. La función cambia, pero la estrategia es siempre la misma. ¡Practicad hasta que salga solo!',
      },
      mixed_stochastik: {
        title: 'Ejercicio típico de estocástica: contraste de hipótesis',
        context: 'La prueba A/B de Amir muestra que, de 50 usuarios, normalmente el $8\\%$ pulsa el botón nuevo. Tras un rediseño quiere comprobar si la tasa de clics ha subido ($\\alpha = 5\\%$).',
        step1: 'Plantear el modelo: distribución binomial con los parámetros:',
        step2: 'Formular las hipótesis: contraste unilateral hacia arriba:',
        step3: 'Buscar la región crítica: probar $k = 8$ ($P$ todavía demasiado grande):',
        step4: 'Determinar la región de rechazo: a partir de $k = 9$ se rechaza $H_0$:',
        amir_comment: 'Los contrastes de hipótesis son en el fondo lógica de decisión: calculas lo improbable que es tu resultado bajo $H_0$. Si es menos probable que $\\alpha$, descartas $H_0$. Así tomo yo decisiones basadas en datos en DataPulse, ¡solo que con muestras mayores!',
      },
    },
    realworld: {
      release_day: {
        title: 'Día del lanzamiento: cuando todo se junta',
        desc: 'Lanzar un juego es como un examen: meses de preparación desembocan en un momento decisivo. «Hafenlichter 3D» de Kai reúne las bases 2D (Mia), el análisis de datos (Amir) y las matemáticas 3D (Kai), igual que el examen final reúne análisis, geometría y estocástica. La preparación lo es todo.',
      },
      project_management: {
        title: 'Gestión de proyectos y priorización',
        desc: 'En el desarrollo de software priorizas funciones por impacto y esfuerzo, igual que los ejercicios de examen por puntos y dificultad. La fórmula $\\text{Eficiencia} = \\frac{\\text{Puntos}}{\\text{Tiempo}}$ vale igual en el trabajo: concéntrate en lo que marca la mayor diferencia.',
      },
      lifelong_learning: {
        title: 'Aprendizaje a lo largo de la vida',
        desc: 'El examen final no es el fin, sino el principio. Mia estudia diseño de videojuegos, Amir ciencia de datos y Kai informática de medios, y en todas partes necesitan matemáticas. La capacidad de meterse en temas nuevos vale más que cualquier fórmula concreta. Las matemáticas os han enseñado a pensar.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Escribir el resultado sin unidad y sin relación con el contexto: «$A = 12{,}5$»',
        correct: 'Siempre unidad e interpretación: «$A = 12{,}5\\,\\text{UA}$, lo que corresponde a $12{,}5\\,\\text{m}^2$»',
        why: '¡En el examen se dan puntos por la interpretación en el contexto! Un resultado desnudo, sin unidad ni relación con el enunciado, te cuesta puntos fáciles. Escribe siempre una frase de respuesta: «El área es de $12{,}5\\,\\text{m}^2$, lo que corresponde a la zona ajardinada del parque.»',
        kai_warning: 'En el desarrollo de videojuegos los números sin contexto no valen nada. 12,5, ¿de qué? ¿Píxeles? ¿Segundos? ¿Puntos de daño? Lo mismo en el examen: escribe la unidad y formula una frase de respuesta. ¡Son puntos regalados!',
      },
      skip_plausibility: {
        wrong: 'No cuestionar un resultado evidentemente falso: $P(X = 5) = 1{,}3$',
        correct: 'Sospechar de inmediato: ¡una probabilidad nunca puede ser mayor que 1!',
        why: 'Las comprobaciones de plausibilidad cuestan 10 segundos, pero pueden salvar ejercicios enteros. Las probabilidades están siempre entre 0 y 1, las áreas nunca son negativas y $e^x > 0$ para todo $x$. Si tu resultado infringe estas reglas básicas, detrás hay un error de cálculo.',
        mia_warning: 'En mi último examen encontré justo un error así: mi integral salía negativa aunque la función era positiva en todo el intervalo. Comprobación rápida, error de signo detectado, corregido: 4 puntos salvados. ¡Comprobad siempre!',
      },
    },
  },
};
