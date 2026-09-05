export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'Amir está construyendo un nuevo filtro de recomendación en DataPulse. La fórmula: «relevancia por oyente dividida entre número de oyentes». Suena limpio, hasta que Yara pregunta: «¿Y qué pasa si una canción tiene cero oyentes?» Amir se queda mirando el código: división entre cero. Fallo. Polos, discontinuidades evitables, asíntotas: toda la familia de las funciones racionales aparece de golpe en su cuaderno, y tiene que entenderla de verdad.',
      challenge: 'Amir tiene que asegurar su filtro para que no falle en los polos, y a la vez reconocer cuándo un fallo aparente no es más que una discontinuidad evitable que se puede simplificar.',
      outro: 'Con tres herramientas Amir sale adelante: comprobar el dominio (¿dónde se anula el denominador?), distinguir entre polo y discontinuidad evitable (¿se anula allí también el numerador?) y determinar las asíntotas (comportamiento para $|x|$ grandes). Su filtro funciona ahora sin problemas, y el profesor Nguyen lo felicita: «Eso es higiene numérica bien hecha.»',
    },
    objectives: {
      definition: 'Reconocer una función racional y determinar su dominio',
      poles: 'Encontrar los polos: ceros del denominador en los que el numerador no se anula',
      removable_gaps: 'Reconocer discontinuidades evitables, eliminarlas simplificando e indicar la extensión continua',
      asymptotes: 'Deducir asíntotas verticales y horizontales a partir de la expresión de la función',
    },
    explanation: {
      intro: 'Una función racional es un cociente de dos polinomios: numerador $p(x)$ dividido entre denominador $q(x)$. El punto decisivo: el denominador nunca puede anularse, porque entonces la función no está definida en ese punto.',
      domain: 'El dominio $D_f$ está formado por todos los números reales salvo los ceros del denominador. Factoriza el denominador o calcula sus ceros: esos son los huecos de $D_f$.',
      amir_tip: 'Mi primer reflejo ante cualquier función racional: ¿dónde se anula el denominador? Esos valores de $x$ los apunto arriba en la hoja. Solo después me ocupo de lo demás. Quien se salta ese paso pasa por alto polos, y en el código el programa se cae.',
      poles: 'Tienes un polo cuando el denominador se anula pero el numerador no. Allí el valor de la función se dispara al infinito (positivo o negativo) y la gráfica tiene una asíntota vertical.',
      removable: 'Si en ese mismo punto también se anula el numerador, puedes simplificar el factor común. Queda entonces lo que se llama una «discontinuidad evitable»: la gráfica solo tiene ahí un agujero que podrías rellenar con una definición razonable.',
      asymptotes: 'El comportamiento para $|x|$ grandes se lee en los grados de los polinomios: si el grado del numerador es menor que el del denominador, entonces $f(x) \\to 0$ y el eje x es asíntota horizontal. Si los grados coinciden, el cociente de los coeficientes principales da la asíntota horizontal.',
    },
    concepts: {
      definition: {
        title: 'Función racional',
        desc: 'Cociente de dos polinomios $p(x)$ y $q(x)$. Definida allí donde $q(x) \\neq 0$. Ejemplos: $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Polo',
        desc: 'Punto $x_0$ con $q(x_0) = 0$ y $p(x_0) \\neq 0$. La gráfica se dispara hacia $\\pm\\infty$: asíntota vertical en $x = x_0$. Orden del polo par ⇒ sin cambio de signo; impar ⇒ con cambio de signo.',
      },
      removable_gap: {
        title: 'Discontinuidad evitable',
        desc: 'Punto $x_0$ con $p(x_0) = q(x_0) = 0$. Simplificar el factor común y calcular después el límite: esa es la «extensión continua». La gráfica solo presenta ahí un agujero abierto.',
      },
      asymptote: {
        title: 'Asíntota horizontal',
        desc: 'Límite para $x \\to \\pm\\infty$. Si $\\deg p < \\deg q$ vale $y = 0$; si $\\deg p = \\deg q$ es el cociente de los coeficientes principales. Si $\\deg p > \\deg q$ hay en su lugar una asíntota oblicua o curva.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Estudiar un polo simple',
        context: 'Amir examina la función racional más sencilla de su filtro: $f(x) = \\frac{1}{x-2}$. ¿Dónde no está definida y cómo se comporta?',
        step1: 'Escribir la expresión: numerador $p(x) = 1$, denominador $q(x) = x - 2$:',
        step2: 'Buscar el cero del denominador: $q(x) = 0$ da un punto crítico:',
        step3: 'Evaluar allí el numerador: $p(2) = 1 \\neq 0$. Por tanto no hay discontinuidad evitable, sino un polo auténtico:',
        step4: 'Comportamiento en el infinito: $\\frac{1}{x-2} \\to 0$ para $x \\to \\pm\\infty$. El eje x es asíntota horizontal:',
        amir_comment: 'Caso clásico: asíntota vertical en $x = 2$, asíntota horizontal en $y = 0$. En el código tengo que interceptar explícitamente $x = 2$, si no sale NaN. Justo eso era lo que preguntaba Yara.',
      },
      removable: {
        title: 'Encontrar una discontinuidad evitable simplificando',
        context: 'En una prueba, Amir se topa con $f(x) = \\frac{x^2 - 1}{x - 1}$. En $x = 1$ el denominador se anula, ¿fallo? ¿O quizá no?',
        step1: 'Escribir la expresión: el numerador es una diferencia de cuadrados:',
        step2: 'En $x = 1$ se anulan numerador Y denominador. Ese es el indicio de una discontinuidad evitable:',
        step3: 'Factorizar el numerador $(x^2 - 1) = (x-1)(x+1)$ y simplificar después el factor común $(x-1)$:',
        step4: 'La gráfica es, por tanto, la recta $y = x + 1$, con un agujero justo en $x = 1$, porque la $f$ original no está definida allí:',
        amir_comment: 'Importante: pese a la simplificación, no puedo incluir $x = 1$ en $D_f$. La función original sigue sin estar definida ahí. En el código lo resuelvo con un condicional y devuelvo el límite $f(1) := 2$: una extensión continua limpia.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Coste unitario en producción',
        desc: 'Costes fijos $F$ repartidos entre $x$ unidades producidas, más costes variables $v$ por unidad: $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. Para $x \\to \\infty$ el coste unitario se aproxima a $v$: una asíntota horizontal en la vida real.',
      },
      light_intensity: {
        title: 'Intensidad luminosa y cuadrado de la distancia',
        desc: 'Una lámpara de potencia $P$ genera a la distancia $r$ la intensidad $I(r) = \\frac{P}{4\\pi r^2}$. Para $r \\to 0$ hay un polo (teóricamente, brillo infinito justo en la fuente); para $r \\to \\infty$ se tiene $I \\to 0$. Ley natural de manual.',
      },
      dilution: {
        title: 'Concentración al diluir',
        desc: 'Un zumo de concentración $c_0$ y volumen $V_0$ se diluye con un volumen $V$ de agua: $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Aquí no hay polo ($V_0 + V > 0$), pero para $V \\to \\infty$ la concentración tiende a cero: asíntota horizontal $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'Confundir polo y cero de la función',
        correct: 'Cero: se anula el numerador. Polo: se anula el denominador y el numerador no',
        why: 'En $f(x) = \\frac{x-3}{x+2}$ el cero está en $x = 3$ (allí $p(x) = 0$, luego $f = 0$) y el polo en $x = -2$ (allí $q(x) = 0$). Quien intercambia los papeles dibuja la gráfica completamente mal: agujero y polo en los sitios equivocados.',
        amir_warning: 'Mi regla mnemotécnica: el cero está donde $f$ «entrega cero». El polo está donde $f$ «explota». Ambos salen directamente del numerador o del denominador; no los confundas nunca.',
      },
      dont_cancel: {
        wrong: 'Pasar por alto el factor común y suponer un polo',
        correct: 'Factorizar primero numerador y denominador, y simplificar después los factores comunes',
        why: 'En $f(x) = \\frac{x^2-4}{x-2}$ parece que $x = 2$ es un polo. Pero si se factoriza el numerador queda $\\frac{(x-2)(x+2)}{x-2} = x+2$, es decir, solo una discontinuidad evitable. Quien no factoriza afirma que hay un polo que en realidad no existe.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'Amir entrena en DataPulse un modelo lineal sencillo: tres características (tempo, volumen, bailabilidad) a partir de las cuales el modelo estima una valoración de los oyentes. De tres ejemplos conocidos salen tres ecuaciones con tres incógnitas: los pesos de las características. «A mano no hay manera», dice Finn. Amir sonríe: «Sí que la hay, con Gauss.» Los sistemas de ecuaciones lineales, un clásico que se esconde detrás de todo código de ML.',
      challenge: 'Amir tiene que determinar, a partir de tres ejemplos de entrenamiento, los tres pesos $a$, $b$, $c$. Tres ecuaciones, tres incógnitas: Gauss.',
      outro: 'Con el método de Gauss, Amir lleva sistemáticamente la matriz ampliada a forma escalonada. La parte inferior izquierda se convierte en ceros paso a paso, y después lee las soluciones hacia atrás. «Esto es exactamente lo que numpy.linalg.solve hace por debajo», le explica a Finn, «solo que ahora por fin entiendo por qué.»',
    },
    objectives: {
      solve_2x2: 'Resolver sistemas lineales con dos incógnitas por sustitución, igualación o reducción',
      gauss_3x3: 'Llevar sistemáticamente a forma escalonada los sistemas con tres incógnitas mediante el algoritmo de Gauss',
      solution_types: 'Distinguir los tres tipos de solución: única, ninguna, infinitas',
      matrix_form: 'Escribir un sistema en forma matricial $A\\vec{x} = \\vec{b}$ y construir correctamente la matriz ampliada',
    },
    explanation: {
      intro: 'Un sistema de ecuaciones lineales es un conjunto de varias ecuaciones con las mismas incógnitas. Una solución del sistema es un juego de valores que satisface TODAS las ecuaciones a la vez. Ya conocido en 3.º de ESO: típicamente dos ecuaciones y dos incógnitas:',
      methods: 'Para sistemas 2×2 bastan los métodos clásicos: sustitución, igualación o reducción. A partir de 3×3 la cosa se vuelve confusa enseguida, y por eso está el algoritmo de Gauss, que se ejecuta de forma mecánica y siempre igual.',
      amir_tip: 'Mi procedimiento para 3×3: escribir la matriz ampliada y luego ir DIRECTO AL GRANO. Primero anular la columna izquierda por debajo del pivote, después la columna central por debajo del segundo pivote. Forma escalonada. Sustitución hacia atrás. Suena mecánico, y lo es: precisamente ahí está la ventaja.',
      gauss: 'En el método de Gauss escribes el sistema como matriz ampliada $(A | \\vec{b})$. Con tres operaciones sobre filas —multiplicar una fila por un número, sumar o restar filas, intercambiar filas— transformas la matriz en forma escalonada. Eso no cambia el conjunto de soluciones.',
      solution_types: 'La forma escalonada te da directamente el tipo de solución: sin fila contradictoria abajo ⇒ solución única. Una fila $0 = c$ con $c \\neq 0$ ⇒ no hay solución. Una fila $0 = 0$ ⇒ introducir un parámetro, infinitas soluciones.',
    },
    concepts: {
      lgs: {
        title: 'Sistema de ecuaciones lineales',
        desc: 'Un conjunto de ecuaciones lineales con incógnitas comunes. En forma matricial: $A \\vec{x} = \\vec{b}$, donde $A$ es la matriz de coeficientes y $\\vec{b}$ el vector de términos independientes.',
      },
      gauss: {
        title: 'Algoritmo de Gauss',
        desc: 'Método de resolución estándar. Llevar la matriz ampliada a forma escalonada y resolver después hacia atrás. Tres operaciones permitidas que no alteran el conjunto de soluciones: multiplicar una fila por un escalar, sumar un múltiplo de una fila, intercambiar filas.',
      },
      solution_types: {
        title: 'Tres tipos de solución',
        desc: 'Solución única (tantos pivotes como incógnitas), ninguna solución (fila contradictoria $0 = c$), infinitas soluciones (al menos una fila $0=0$, con parámetros libres).',
      },
      matrix: {
        title: 'Matriz ampliada de coeficientes',
        desc: 'Notación $(A | \\vec{b})$. A la izquierda los coeficientes de las incógnitas; a la derecha, separado por una raya, el término independiente. Ahorra tener que reescribir constantemente los nombres de las variables.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'Sistema 2×2 sencillo por reducción',
        context: 'Amir tiene dos ecuaciones de ejemplo sacadas de sus datos de entrenamiento. Busca $x$ (peso del tempo) e $y$ (peso del volumen).',
        step1: 'Escribir el sistema de ecuaciones:',
        step2: 'Sumar ambas ecuaciones: los términos en $y$ se cancelan y $x$ queda resuelta al momento:',
        step3: 'Sustituir $x = 3$ en una de las ecuaciones de partida, aquí la segunda:',
        step4: 'Conjunto solución: darlo como par $(x, y)$:',
        amir_comment: 'Método de reducción clásico: con suerte las variables desaparecen directamente. Si no, hay que multiplicar antes una ecuación por un número adecuado, por ejemplo por 2, para que los coeficientes encajen.',
      },
      gauss_3x3: {
        title: 'Resolver un sistema 3×3 con Gauss',
        context: 'Amir tiene un mini conjunto de entrenamiento: tres valoraciones de oyentes y tres pesos $x, y, z$. Tres ecuaciones: método de Gauss en la matriz ampliada.',
        step1: 'Plantear la matriz ampliada: coeficientes a la izquierda, términos independientes a la derecha de la raya:',
        step2: 'Fila 2 menos 2 veces fila 1: el elemento $a_{21} = 2$ se anula:',
        step3: 'Fila 3 menos fila 1: el elemento $a_{31} = 1$ se anula. La columna izquierda queda ya limpia bajo el pivote 1:',
        step4: 'Seguir hasta la forma escalonada y resolver hacia atrás: $z$ desde la última fila, sustituir arriba para $y$ y después $x$. Solución: $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$:',
        amir_comment: 'Gauss es contabilidad: anotar limpiamente cada operación de fila. Quien ejecuta una operación a medias —por ejemplo, transformando solo la columna del pivote— obtiene basura. Aquí la disciplina gana al talento.',
      },
    },
    realworld: {
      mischung: {
        title: 'Problemas de mezclas',
        desc: 'Un farmacéutico mezcla dos disoluciones de concentraciones $a$ y $b$ para obtener una mezcla de masa total $m$ y cantidad total de principio activo $w$. Dos ecuaciones, dos incógnitas: un sistema, directamente.',
      },
      preise: {
        title: 'Reconstruir precios',
        desc: 'Tres clientes, tres tickets con cantidades y precio total: a partir de ahí hay que recuperar los precios unitarios. Tres ecuaciones, tres precios unitarios desconocidos. Gauss lo resuelve en pocos pasos.',
      },
      network: {
        title: 'Circuitos eléctricos (Kirchhoff)',
        desc: 'En una red de resistencias, cada ecuación de nudo (corriente que entra = corriente que sale) y cada ecuación de malla (suma de tensiones = 0) aporta una condición lineal. Con $n$ incógnitas resulta un sistema $n \\times n$: procedimiento estándar en electrotecnia.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'En una operación de fila, transformar solo la columna del pivote',
        correct: 'Transformar todas las columnas de la fila (incluido el término independiente) a la vez',
        why: 'Una operación de fila se aplica a la fila ENTERA. Quien en $Z_2 - 2Z_1$ transforma solo el elemento pivote y olvida las demás columnas destruye la ecuación. Consecuencia: la forma escalonada parece correcta, pero las soluciones son falsas, y luego el error es difícil de encontrar.',
        amir_warning: 'Justo ese error me costó un punto entero en un examen de práctica. Desde entonces escribo la fila nueva completa —todos los elementos, incluido el término independiente— limpiamente debajo de la antigua. Así se puede comparar de un vistazo.',
      },
      no_solution: {
        wrong: 'Interpretar una fila contradictoria $0 = c$ como $x = c$',
        correct: 'Una fila $0 = c$ con $c \\neq 0$ significa: el sistema NO tiene solución',
        why: 'Si al final sale $0 = 5$, eso es una contradicción: ningún valor de $x, y, z$ puede cumplirlo. El conjunto solución es vacío. Quien lo lee como $x = 5$ propone una solución que el sistema no satisface.',
      },
    },
  },
};
