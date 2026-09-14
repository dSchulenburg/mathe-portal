export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'Mia está sentada en su pequeña oficina en el puerto de Hamburgo y mira fijamente la pantalla. Lumi, su personaje en "Hafenlichter", tiene que saltar con elegancia sobre cajas y contenedores — pero la curva del salto se ve simplemente mal. "La física no cuadra", murmura. Para programar una trayectoria de salto realista, Mia necesita funciones cuadráticas.',
      challenge: 'Lumi tiene que saltar sobre cajas — pero la curva del salto no parece natural.',
      outro: '¡Con la forma de vértice, Mia ha programado la curva de salto perfecta! Ahora Lumi vuela en un arco elegante sobre los contenedores de Hamburgo. "Por fin se ve realista", dice Tim y le choca los cinco.',
    },
    objectives: {
      recognize: 'Reconocer funciones cuadráticas y describir sus propiedades',
      vertex_form: 'Pasar con seguridad de la forma general a la forma de vértice y al revés',
      pq_formula: 'Calcular los ceros con la fórmula cuadrática',
      graph_properties: 'Leer la dirección de apertura, el vértice y el eje de simetría a partir de la ecuación',
    },
    explanation: {
      intro: 'Imagina que lanzas una pelota de baloncesto. La pelota sube en un arco, llega al punto más alto y vuelve a caer. Esta trayectoria tiene una forma muy concreta — una parábola. En matemáticas la describimos con una función cuadrática:',
      opening: 'El número $a$ decide si la parábola se abre hacia arriba ($a > 0$) o hacia abajo ($a < 0$) — y lo "estrecha" o "ancha" que es. Cuanto mayor es $|a|$, más estrecha es la parábola.',
      mia_tip: '¡En mi juego, $a$ es negativo, porque la curva del salto sube y luego vuelve a bajar — como una U al revés!',
      vertex_form: 'La forma de vértice te dice directamente el punto más alto (o más bajo) de la parábola. El vértice $S$ tiene las coordenadas $(d \\mid e)$:',
      conversion: 'Para pasar de la forma general a la forma de vértice, usas la compleción del cuadrado. Sumas un número de forma inteligente y lo vuelves a restar, de modo que aparece un cuadrado perfecto.',
    },
    concepts: {
      normal_form: {
        title: 'Forma general',
        desc: 'La forma estándar. Ves directamente: $a$ = apertura, $c$ = ordenada en el origen (donde la parábola corta el eje y).',
      },
      vertex_form: {
        title: 'Forma de vértice',
        desc: 'Te muestra enseguida el vértice $S(d \\mid e)$. Ideal para leer el punto más alto o más bajo y ver el desplazamiento.',
      },
      pq_formula: {
        title: 'Fórmula cuadrática',
        desc: 'Tu herramienta para los ceros. Requisito: la ecuación tiene que estar en la forma $x^2 + px + q = 0$ (¡el coeficiente de $x^2$ tiene que ser 1!).',
      },
      discriminant: {
        title: 'Discriminante',
        desc: 'La expresión dentro de la raíz decide: $D > 0$ = dos ceros, $D = 0$ = un cero, $D < 0$ = ningún cero real.',
      },
    },
    examples: {
      vertex: {
        title: 'Hallar la forma de vértice',
        context: 'Mia quiere calcular el punto más alto del salto de Lumi.',
        step1: 'La función está dada en forma general:',
        step2: 'Compleción del cuadrado: sumamos $(\\frac{6}{2})^2 = 9$ y lo volvemos a restar:',
        step3: 'Agrupar — la expresión entre paréntesis es un cuadrado perfecto:',
        step4: 'Leer el vértice: $d = 3$, $e = -4$, es decir:',
        mia_comment: 'El vértice en $(3 \\mid -4)$ es el punto más bajo, porque $a = 1 > 0$. ¡Para una curva de salto necesito $a < 0$, y entonces es el punto más alto!',
      },
      pq: {
        title: 'Ceros con la fórmula cuadrática',
        context: '¿Dónde vuelve a tocar Lumi el suelo?',
        step1: 'Dato: la ecuación ya está en la forma correcta (coeficiente de $x^2$ = 1):',
        step2: 'Leer los valores de $p$ y $q$:',
        step3: 'Sustituir en la fórmula cuadrática y calcular:',
        step4: 'Así que Lumi aterriza en $x = 2$ o en $x = -4$:',
        mia_comment: 'Dos ceros — la parábola corta el eje x dos veces. En el juego significa: ¡Lumi despega en $x = -4$ y aterriza en $x = 2$!',
      },
    },
    realworld: {
      basketball: {
        title: 'Tiro de baloncesto',
        desc: 'Cada tiro a canasta describe una parábola. La altura $h$ depende del tiempo $t$. Los entrenadores lo usan para calcular el ángulo de lanzamiento óptimo.',
      },
      bridge: {
        title: 'Puentes colgantes',
        desc: 'En los puentes colgantes como el Golden Gate Bridge, el cable principal cuelga casi exactamente en forma de parábola – porque el tablero reparte su peso de manera uniforme sobre el cable.',
      },
      pricing: {
        title: 'Optimización de precios',
        desc: 'Una tienda quiere saber: ¿qué precio da más beneficio? Si el precio sube, compra menos gente — el beneficio es una parábola con un máximo.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Error de signo',
        correct: 'Fíjate en el signo',
        why: 'En $f(x) = (x - d)^2 + e$ hay un menos delante de $d$. Eso significa: ¡$f(x) = (x - 3)^2$ tiene el vértice en $d = +3$, no en $-3$!',
        mia_warning: 'Este error de signo me costó 3 horas de depuración. ¡La curva del salto de Lumi estaba desplazada hacia la izquierda en lugar de hacia la derecha!',
      },
      pq_wrong: {
        wrong: 'Fórmula cuadrática sin dividir',
        correct: 'Primero dividir entre $a$',
        why: 'La fórmula cuadrática solo funciona si el coeficiente de $x^2$ es igual a 1. Con $2x^2 + 4x - 6 = 0$ primero tienes que dividir entre 2: $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'Mia tiene un problema con la detección de colisiones: ¿cuándo toca Lumi un obstáculo? Tim propone calcular la distancia entre dos puntos. "Para eso necesitas a Pitágoras", dice. Mia se acuerda del teorema de la escuela — y de repente tiene todo el sentido.',
      challenge: 'La detección de colisiones necesita calcular la distancia entre objetos.',
      outro: '¡La detección de colisiones de Lumi ahora funciona al píxel! Mia ha usado el teorema de Pitágoras para calcular en tiempo real la distancia entre el personaje y los obstáculos.',
    },
    objectives: {
      theorem: 'Aplicar el teorema de Pitágoras con seguridad',
      calculate_sides: 'Calcular los lados que faltan en un triángulo rectángulo',
      recognize: 'Reconocer cuándo un triángulo es rectángulo',
      apply: 'Aplicar el teorema a problemas de la vida diaria',
    },
    explanation: {
      intro: 'En todo triángulo rectángulo se cumple una regla sencilla pero poderosa: la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa.',
      sides: 'Aquí $c$ es siempre el lado más largo — la hipotenusa. Está enfrente del ángulo recto. Los dos lados más cortos $a$ y $b$ se llaman catetos.',
      mia_tip: 'En mi juego calculo la distancia entre Lumi y un objeto como la hipotenusa. La distancia horizontal es $a$, la vertical $b$ — ¡y $c$ es la distancia real!',
      solving: 'Puedes despejar la fórmula para cualquier lado. Si buscas la hipotenusa:',
    },
    concepts: {
      theorem: {
        title: 'Teorema de Pitágoras',
        desc: 'Solo vale en triángulos rectángulos. $c$ es la hipotenusa (enfrente del ángulo recto), $a$ y $b$ son los catetos.',
      },
      hypotenuse: {
        title: 'Calcular la hipotenusa',
        desc: 'Si conoces los dos catetos, saca la raíz de la suma de los cuadrados.',
      },
      cathetus: {
        title: 'Calcular un cateto',
        desc: 'Si conoces la hipotenusa y un cateto, saca la raíz de la diferencia.',
      },
    },
    examples: {
      screen: {
        title: 'Calcular la diagonal de una pantalla',
        context: 'Mia quiere saber de verdad cuánto mide la pantalla de su nuevo monitor.',
        step1: 'El monitor mide 16 pulgadas de ancho y 9 pulgadas de alto:',
        step2: 'Aplicar Pitágoras — el ancho y el alto son los catetos:',
        step3: 'Sacar la raíz para obtener la diagonal:',
        mia_comment: '18,36 pulgadas de diagonal — es el valor que los fabricantes indican como "tamaño de pantalla". ¡Ahora sé por qué!',
      },
      ladder: {
        title: 'Escalera contra la pared',
        context: '¿Hasta qué altura llega una escalera de 5 metros que está a 1,5 m de la pared?',
        step1: 'La escalera es la hipotenusa, la distancia a la pared es un cateto:',
        step2: 'Despejar el cateto que buscamos (la altura):',
        step3: 'La escalera llega a casi 4,77 m de altura:',
        mia_comment: '¡En el juego uso exactamente este cálculo para comprobar si Lumi puede alcanzar una escalera!',
      },
    },
    realworld: {
      screen: {
        title: 'Diagonal de pantalla',
        desc: 'El "tamaño" de una pantalla es siempre la diagonal — calculada con Pitágoras a partir del ancho y el alto.',
      },
      football: {
        title: 'Diagonal de un campo de fútbol',
        desc: 'Un campo de fútbol mide 105 m × 68 m. ¿Qué distancia hay de esquina a esquina? Pitágoras te lo dice.',
      },
      wifi: {
        title: 'Alcance del wifi',
        desc: 'Tu router está en la planta baja y tú estás en el primer piso. La distancia real hasta el router es la hipotenusa formada por la distancia horizontal y la vertical.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Hipotenusa como cateto',
        correct: 'c es siempre el lado más largo',
        why: 'La hipotenusa $c$ está SIEMPRE enfrente del ángulo recto. Es el lado más largo. Si la confundes con un cateto, todo el cálculo sale mal.',
      },
      root: {
        wrong: 'Raíz de la suma',
        correct: 'Primero sumar, luego la raíz',
        why: '¡$\\sqrt{a^2 + b^2}$ NO es lo mismo que $a + b$! Ejemplo: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, pero $3 + 4 = 7$.',
        mia_warning: 'Tim encontró este error en mi código — ¡la detección de colisiones era un 40 % demasiado imprecisa!',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'Mia quiere crear un sistema de botín para Hafenlichter. Los jugadores tienen que poder encontrar objetos raros — pero no demasiado a menudo, porque si no se vuelve aburrido, y no demasiado poco, porque si no es frustrante. "Esto es cálculo de probabilidades puro", dice Jule. Mia se sienta y se pone a calcular.',
      challenge: 'El sistema de botín tiene que ser justo y emocionante.',
      outro: '¡El sistema de botín de Mia funciona! Ha ajustado las probabilidades de drop para que los jugadores encuentren de media un objeto raro cada 20 cajas. "Las matemáticas que hay detrás son bastante simples", sonríe — "pero el equilibrado ha llevado su tiempo."',
    },
    objectives: {
      basic: 'Expresar probabilidades como fracción, número decimal y porcentaje',
      tree: 'Resolver experimentos aleatorios de varias etapas con diagramas de árbol',
      expected_value: 'Calcular e interpretar la esperanza matemática',
      complement: 'Trabajar con la probabilidad del suceso contrario ("al menos una vez...")',
    },
    explanation: {
      intro: '¿Qué probabilidad hay de sacar un 6 con un dado? ¿Qué posibilidad hay de conseguir un objeto raro en el juego? Para responder a este tipo de preguntas necesitas el cálculo de probabilidades. La idea básica es sencilla:',
      range: 'Las probabilidades están siempre entre 0 (imposible) y 1 (seguro). Puedes escribirlas como fracción ($\\frac{1}{6}$), número decimal ($0{,}167$) o porcentaje ($16{,}7\\%$).',
      mia_tip: 'En Hafenlichter, $P(\\text{objeto raro}) = 0{,}05$. Eso significa: en cada drop, el jugador tiene un 5 % de probabilidad. Parece poco — ¡pero en muchos drops se va acumulando!',
      tree: 'En experimentos de varias etapas (por ejemplo, tirar un dado dos veces) usas un diagrama de árbol. A lo largo de un camino multiplicas las probabilidades:',
      complement: 'A menudo es más fácil calcular "lo contrario". La probabilidad de que algo NO pase es:',
    },
    concepts: {
      laplace: {
        title: 'Experimento de Laplace',
        desc: 'Si todos los resultados son igual de probables (como con un dado no trucado), simplemente divides: resultados favorables entre todos los posibles.',
      },
      complement: {
        title: 'Probabilidad del suceso contrario',
        desc: 'La probabilidad de que A NO ocurra. ¡Superútil para ejercicios de "al menos una vez"!',
      },
      expected: {
        title: 'Esperanza matemática',
        desc: 'El valor "medio" cuando repites muchas veces. Con un dado: $E(X) = 3{,}5$ — nunca puedes sacar un 3,5, pero de media sale este valor.',
      },
    },
    examples: {
      dice: {
        title: 'Sacar un número par',
        context: '¿Qué probabilidad hay de sacar un número par con un dado?',
        step1: 'El dado tiene 6 caras — ese es nuestro $\\Omega$:',
        step2: 'Resultados favorables (números pares): 2, 4, 6 — son 3:',
        step3: 'Calcular la probabilidad:',
        mia_comment: '50 % — eso está claro por intuición. ¡Pero en preguntas más complejas, la fórmula ayuda cuando la intuición falla!',
      },
      loot: {
        title: 'Al menos un objeto raro',
        context: 'Mia quiere saber: ¿qué probabilidad hay de conseguir al menos un objeto raro en 10 drops?',
        step1: 'La probabilidad de un objeto raro por drop es del 5 %:',
        step2: 'Usar el suceso contrario: primero calcular que en 10 drops NO sale ningún objeto raro:',
        step3: 'Eso es aprox. un 60 % — en el 60 % de los casos NO se consigue ningún objeto raro:',
        step4: 'La probabilidad contraria es la respuesta que buscamos:',
        mia_comment: '40 % de probabilidad de al menos un objeto raro en 10 drops — ¡eso parece justo! Si los jugadores se frustran, simplemente subo la tasa de drop.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Cajas de botín en videojuegos',
        desc: 'Juegos como Genshin Impact o EA Sports FC usan probabilidades para sus cajas de botín. En las tiendas de aplicaciones de Apple y Google hay que mostrar las probabilidades – con matemáticas puedes comprobar si vale la pena comprar.',
      },
      shuffle: {
        title: 'Modo aleatorio de Spotify',
        desc: 'El modo aleatorio de Spotify no es realmente aleatorio — porque el azar "de verdad" se siente raro (a veces la misma canción sale 3 veces seguidas). Spotify usa algoritmos que "parecen" más aleatorios.',
      },
      lottery: {
        title: 'Probabilidad de ganar la lotería',
        desc: 'Acertar los 6 números de la lotería — ¿parece posible? La probabilidad real es muy, muy pequeña:',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Sumar caminos en lugar de multiplicar',
        correct: 'Multiplicar a lo largo de un camino',
        why: 'En el diagrama de árbol multiplicas a lo largo de un camino (conexión Y). Solo puedes sumar cuando juntas caminos diferentes (conexión O).',
        mia_warning: 'Tuve este error en el sistema de botín. Las tasas de drop eran muchísimo más altas, porque sumé en lugar de multiplicar — ¡cada jugador lo tenía todo enseguida!',
      },
      percent: {
        wrong: 'Porcentajes por encima del 100 %',
        correct: 'El máximo es 100 %',
        why: 'Una probabilidad nunca puede ser mayor que 1 (= 100 %). Si tu resultado es $P > 1$, has cometido un error de cálculo.',
      },
    },
  },
};
