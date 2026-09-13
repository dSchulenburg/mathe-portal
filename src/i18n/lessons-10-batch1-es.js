export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia ha conseguido la curva de salto de Lumi, pero ahora está atascada. En el nivel 3 de "Hafenlichter", Lumi debe aterrizar en una plataforma en movimiento. "Necesito el momento exacto en que la curva de salto alcanza la plataforma", le dice Mia a Tim. Eso significa: tiene que resolver una ecuación cuadrática. No solo dibujar la función, sino despejar concretamente $x$.',
      challenge: 'Mia debe calcular cuándo la curva de salto de Lumi intersecta la plataforma móvil — eso conduce a una ecuación cuadrática.',
      outro: 'Mia tiene tres métodos en su caja de herramientas: la fórmula cuadrática, completar el cuadrado y factorizar. Según la ecuación, elige el método adecuado — y ahora Lumi aterriza con precisión en cada plataforma. "Es como una navaja suiza", sonríe.',
    },
    objectives: {
      solve: 'Resolver ecuaciones cuadráticas con seguridad e indicar el conjunto solución',
      pq_formula: 'Aplicar la fórmula cuadrática — incluyendo casos especiales (ninguna solución o una sola)',
      completing_square: 'Comprender y realizar la técnica de completar el cuadrado como vía de solución',
      factoring: 'Resolver ecuaciones cuadráticas mediante factorización',
    },
    explanation: {
      intro: 'Una ecuación cuadrática tiene la forma general con el exponente más alto igual a 2. A diferencia de las ecuaciones lineales ($x$ elevado a 1), puede tener cero, una o dos soluciones. La forma general es:',
      normal_form: 'Para la fórmula cuadrática necesitamos la forma normal — es decir, el coeficiente delante de $x^2$ debe ser exactamente 1. Si no es el caso, dividimos toda la ecuación entre $a$:',
      mia_tip: 'Me lo recuerdo así: primero pasar todo a un lado para que a la derecha quede cero. Luego dividir entre el coeficiente de $x^2$. Solo ENTONCES puedo usar la fórmula cuadrática.',
      pq_formula: 'La fórmula cuadrática es la herramienta universal para ecuaciones cuadráticas en forma normal. Lees $p$ y $q$ directamente y sustituyes:',
      completing_square: 'Completar el cuadrado funciona así: transformas el lado izquierdo en un cuadrado perfecto. Para ello sumas $(\\frac{p}{2})^2$ en ambos lados. El resultado es una expresión de la forma $(x + \\frac{p}{2})^2$, que puedes despejar fácilmente para $x$.',
      factoring: 'Si conoces (o puedes adivinar) las raíces $x_1$ y $x_2$, la ecuación se puede escribir como producto de dos paréntesis. El producto es cero cuando al menos un factor es cero:',
    },
    concepts: {
      pq_formula: {
        title: 'Fórmula cuadrática',
        desc: 'La herramienta estándar para ecuaciones cuadráticas en forma normal. Funciona siempre — solo necesitas $p$ (coeficiente de $x$) y $q$ (término constante).',
      },
      completing_square: {
        title: 'Completar el cuadrado',
        desc: 'Completas el lado izquierdo hasta formar un cuadrado perfecto. Especialmente útil cuando también necesitas determinar el vértice de una parábola.',
      },
      discriminant: {
        title: 'Discriminante',
        desc: 'La expresión bajo la raíz en la fórmula cuadrática: $D > 0$ da dos soluciones, $D = 0$ da exactamente una, $D < 0$ significa que no hay solución real.',
      },
      factoring: {
        title: 'Factorización',
        desc: 'Descomposición en dos factores lineales. Funciona de manera especialmente elegante cuando las raíces son enteras — entonces a menudo puedes adivinarlas.',
      },
    },
    examples: {
      pq_application: {
        title: 'Resolver una ecuación con la fórmula cuadrática',
        context: 'Mia calcula cuándo la curva de salto de Lumi alcanza la plataforma en $y = 0$.',
        step1: 'La ecuación ya está en forma normal (el coeficiente delante de $x^2$ es 1):',
        step2: 'Leemos $p$ y $q$ — cuidado con los signos:',
        step3: 'Sustituir los valores en la fórmula cuadrática y calcular paso a paso:',
        step4: 'Dos soluciones — Lumi alcanza la plataforma en dos puntos:',
        mia_comment: 'Dos soluciones tienen sentido: Lumi salta en $x = 1$ y aterriza en $x = 3$. El tramo intermedio es el vuelo.',
      },
      completing_square: {
        title: 'Resolver completando el cuadrado',
        context: 'Tim quiere resolver la ecuación sin la fórmula cuadrática — como alternativa.',
        step1: 'Partimos de la ecuación en forma normal:',
        step2: 'Primero pasar el término constante al lado derecho:',
        step3: 'Ahora completar el cuadrado: $(\\frac{6}{2})^2 = 9$ se suma en ambos lados:',
        step4: 'El lado izquierdo es ahora un cuadrado perfecto — al extraer la raíz obtenemos dos casos:',
        step5: 'Calcular ambas soluciones:',
        mia_comment: 'Misma ecuación, mismas soluciones, camino diferente. Uso completar el cuadrado cuando también necesito el vértice de la parábola — mato dos pájaros de un tiro.',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds y parábolas de lanzamiento',
        desc: 'Cada lanzamiento en Angry Birds sigue una parábola. La ecuación $h(t) = 0$ te dice cuándo el objeto toca el suelo. Los físicos usan la misma fórmula para movimientos de lanzamiento reales.',
      },
      breakeven: {
        title: 'Encontrar el punto de equilibrio',
        desc: 'Una empresa quiere saber: ¿a partir de qué cantidad de unidades obtenemos beneficio? La ecuación $G(x) = 0$ da los puntos de equilibrio — generalmente una ecuación cuadrática.',
      },
      rocket: {
        title: 'Lanzamientos de cohetes',
        desc: 'La altura de un cohete después del lanzamiento sigue una función cuadrática (mientras dura el combustible). ¿Cuándo alcanza 1000 m? ¡Ecuación cuadrática!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Usar la fórmula cuadrática sin tener cero en el lado derecho',
        correct: 'Primero pasar todo a un lado',
        why: 'La fórmula cuadrática requiere que el lado derecho sea cero. En $x^2 + 3x = 5$ primero debes sumar $-5$ en ambos lados para obtener $x^2 + 3x - 5 = 0$. De lo contrario, $q$ será incorrecto.',
        mia_warning: 'Tuve este error en el código — la colisión con la plataforma estaba completamente desfasada porque $q$ tenía el signo equivocado. Siempre cero a la derecha primero.',
      },
      sign_pq: {
        wrong: 'Error de signo con $p$ en la fórmula cuadrática',
        correct: 'Prestar atención al signo negativo delante de $\\frac{p}{2}$',
        why: 'En la fórmula cuadrática aparece $-\\frac{p}{2}$. En $x^2 - 6x + 8 = 0$ tenemos $p = -6$, así que $-\\frac{-6}{2} = +3$. Si olvidas el signo negativo, obtienes $-3$ en lugar de $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia trabaja en el nivel del faro de Hafenlichter. El faro proyecta un cono de luz sobre el puerto, y Lumi debe esconderse en la sombra. "Necesito calcular qué tan lejos llega el cono de luz a un ángulo determinado", dice Mia. Tim señala un triángulo rectángulo que el cono de luz forma con el suelo. "Eso es trigonometría — seno, coseno y tangente."',
      challenge: 'Mia necesita el alcance del cono de luz a diferentes ángulos para programar la zona de sombra.',
      outro: 'El faro gira lentamente y el cono de luz se desplaza por el puerto. Gracias al seno y coseno, el código de Mia calcula en tiempo real qué áreas están iluminadas. Lumi se escabulle de sombra en sombra — el nivel se ha vuelto realmente emocionante.',
    },
    objectives: {
      sin_cos_tan: 'Aplicar seno, coseno y tangente en el triángulo rectángulo con seguridad',
      unit_circle: 'Comprender el círculo unitario y poder leer valores',
      angle_calculations: 'Calcular ángulos y longitudes de lados con funciones trigonométricas',
      real_problems: 'Resolver problemas prácticos con trigonometría (alturas, distancias, ángulos)',
    },
    explanation: {
      intro: 'La trigonometría conecta ángulos con longitudes de lados. En todo triángulo rectángulo existen tres relaciones fundamentales — nombradas según el ángulo $\\alpha$ que observas:',
      mia_tip: 'Mi regla mnemotécnica: SOH-CAH-TOA — Seno = Opuesto/Hipotenusa, Coseno = Adyacente/Hipotenusa, Tangente = Opuesto/Adyacente. Suena gracioso, pero nunca se olvida.',
      unit_circle: 'El círculo unitario tiene radio 1 y su centro en el origen. Para cada ángulo $\\alpha$ proporciona directamente los valores: la coordenada $x$ es $\\cos(\\alpha)$, la coordenada $y$ es $\\sin(\\alpha)$. Así siempre se cumple:',
      special_angles: 'Ciertos ángulos debes conocer de memoria: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Consejo: en el círculo unitario puedes leer estos valores geométricamente.',
    },
    concepts: {
      sine: {
        title: 'Seno',
        desc: 'La relación entre el cateto opuesto y la hipotenusa. En el círculo unitario, $\\sin(\\alpha)$ corresponde a la coordenada $y$ del punto sobre el círculo.',
      },
      cosine: {
        title: 'Coseno',
        desc: 'La relación entre el cateto adyacente y la hipotenusa. En el círculo unitario, $\\cos(\\alpha)$ corresponde a la coordenada $x$. El coseno y el seno están desfasados $90°$.',
      },
      tangent: {
        title: 'Tangente',
        desc: 'La relación entre el cateto opuesto y el cateto adyacente — o equivalentemente $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideal para pendientes y ángulos de inclinación.',
      },
      unit_circle: {
        title: 'Círculo unitario',
        desc: 'Un círculo con radio 1. Cada punto del círculo tiene las coordenadas $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Así se pueden definir seno y coseno para todos los ángulos — no solo para ángulos agudos.',
      },
    },
    examples: {
      height_tan: {
        title: 'Calcular alturas con la tangente',
        context: 'Mia mide el ángulo hacia la cima del faro: $35°$. La distancia al faro es de $50\\,\\text{m}$.',
        step1: 'Esquema: la distancia es el cateto adyacente, la altura buscada es el cateto opuesto. Entonces tangente:',
        step2: 'Despejar la altura $h$ — multiplicar ambos lados por $50\\,\\text{m}$:',
        step3: 'Calculadora (¡modo DEG!): $\\tan(35°) \\approx 0{,}7002$ sustituir y calcular:',
        mia_comment: 'En el juego esto ocurre en tiempo real: el ángulo del cono de luz cambia y mi código calcula instantáneamente el nuevo alcance. La tangente es perfecta para eso.',
      },
      unit_circle: {
        title: 'Leer valores en el círculo unitario',
        context: 'Tim quiere mostrarle a Mia cómo funciona el círculo unitario — con el ejemplo de $60°$.',
        step1: 'Convertir ángulo (opcional): $60°$ corresponde a $\\frac{\\pi}{3}$ en radianes:',
        step2: 'Leer el valor del seno — la coordenada $y$ del punto en el círculo unitario:',
        step3: 'Leer el valor del coseno — la coordenada $x$:',
        step4: 'El punto en el círculo unitario tiene entonces las coordenadas:',
        mia_comment: 'En el círculo unitario veo seno y coseno como longitudes. Eso lo hace mucho más visual que solo números en una tabla.',
      },
    },
    realworld: {
      compass: {
        title: 'Navegación y GPS',
        desc: 'Tu smartphone calcula direcciones con trigonometría. La función atan2 convierte coordenadas $x$ e $y$ en un ángulo — así Google Maps sabe en qué dirección debes caminar.',
      },
      building_height: {
        title: 'Medir alturas de edificios',
        desc: 'Arquitectos y topógrafos miden alturas de edificios sin subir al techo. Con un goniómetro y la tangente, basta con la distancia y el ángulo.',
      },
      music: {
        title: 'Sonidos y ondas acústicas',
        desc: 'Cada sonido es una onda sinusoidal. El tono de referencia La tiene 440 oscilaciones por segundo — descrito por $f(t) = \\sin(880\\pi t)$. La música es trigonometría aplicada.',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Confundir seno y coseno',
        correct: 'Seno = cateto opuesto / hipotenusa',
        why: 'El seno corresponde al cateto opuesto (el lado frente al ángulo), el coseno al cateto adyacente (el lado junto al ángulo). Si los confundes, obtienes un valor incorrecto.',
        mia_warning: '¡Me sigue pasando a veces! Dibujo el triángulo y etiqueto los lados en relación al ángulo. Entonces veo inmediatamente cuál es el opuesto y cuál el adyacente.',
      },
      deg_rad: {
        wrong: 'Modo de ángulo incorrecto en la calculadora',
        correct: 'Siempre verificar el modo DEG para ángulos en grados',
        why: 'En modo RAD, la calculadora interpreta $90$ como $90$ radianes (aprox. $5156°$), no como $90°$. $\\sin(90°) = 1$, pero $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Resultado: completamente incorrecto.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter va a tener un modo multijugador. Mia prueba los servidores con 10 jugadores — todo funciona perfectamente. Pero Tim advierte: "¿Qué pasa con 100? ¿Con 1000? Si el juego se vuelve viral, el número de jugadores podría duplicarse cada pocos días." Mia hace cálculos y se asusta: el crecimiento exponencial es mucho más rápido de lo que se piensa.',
      challenge: 'La carga del servidor no crece linealmente con los jugadores, sino exponencialmente. Mia debe predecir cuándo los servidores estarán sobrecargados.',
      outro: 'Mia ha construido un modelo que predice la evolución del número de jugadores. Gracias a la función exponencial ahora sabe: si el tiempo de duplicación es de 3 días, después de 2 semanas necesitará 32 veces más capacidad de servidor. "Mejor escalar pronto que caerse tarde", decide.',
    },
    objectives: {
      exponential_functions: 'Reconocer funciones exponenciales y distinguirlas de funciones lineales',
      growth_factor: 'Determinar el factor de crecimiento a partir de porcentajes e interpretarlo',
      half_life: 'Calcular y aplicar vida media y tiempo de duplicación',
      model_real_world: 'Modelar procesos reales de crecimiento y decaimiento con funciones exponenciales',
    },
    explanation: {
      intro: 'En el crecimiento lineal, en cada paso se añade la misma cantidad. En el crecimiento exponencial, en cada paso se multiplica por el mismo factor. Suena similar — pero conduce a resultados completamente diferentes:',
      growth_factor: 'El factor de crecimiento $b$ te dice todo: si algo crece un $p\\%$ por unidad de tiempo, el factor es mayor que 1. Si algo disminuye un $p\\%$ (decaimiento), es menor que 1:',
      mia_tip: 'Las funciones lineales suman, las funciones exponenciales multiplican. Con un 10% de crecimiento diario, el factor es $b = 1{,}10$ — después de 7 días $1{,}10^7 \\approx 1{,}95$, casi una duplicación. Eso me sorprendió en la planificación del servidor.',
      half_life: 'La vida media $t_H$ es el tiempo después del cual queda la mitad. Es constante — sin importar con cuánto empieces. Eso es lo especial del decaimiento exponencial:',
      doubling_time: 'El equivalente en el crecimiento: el tiempo de duplicación $t_V$ te dice después de cuánto tiempo el valor se ha duplicado. También permanece siempre igual:',
    },
    concepts: {
      exponential_function: {
        title: 'Función exponencial',
        desc: 'La forma general: $a$ es el valor inicial, $b$ el factor de crecimiento, $t$ el tiempo. Decisivo: la variable está en el exponente — eso marca la diferencia con las funciones potenciales.',
      },
      growth_factor: {
        title: 'Factor de crecimiento',
        desc: 'Con un $p\\%$ de aumento: $b = 1 + \\frac{p}{100}$. Ejemplo: 5% de crecimiento da $b = 1{,}05$. Con 12% de disminución: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Vida media',
        desc: 'El tiempo hasta que un valor se ha reducido a la mitad. Típico del decaimiento radiactivo, medicamentos en el cuerpo o descarga de baterías. La vida media es independiente del valor inicial.',
      },
      euler_base: {
        title: 'Función exponencial natural',
        desc: 'La base $e \\approx 2{,}718$ es especial: la función $e^x$ es su propia derivada. Con $k > 0$ crece, con $k < 0$ decae. Estándar en ciencias naturales.',
      },
    },
    examples: {
      bacteria: {
        title: 'Crecimiento bacteriano',
        context: 'Un cultivo de bacterias comienza con 500 bacterias y se duplica cada hora.',
        step1: 'Identificar valor inicial y factor de crecimiento — duplicación significa factor 2:',
        step2: 'Plantear la función exponencial — $t$ cuenta las horas:',
        step3: 'Sustituir $t = 5$ (después de 5 horas): $2^5 = 32$:',
        step4: 'Después de 5 horas hay 16.000 bacterias:',
        mia_comment: '¡De 500 a 16.000 en solo 5 horas! Eso muestra por qué el crecimiento exponencial es tan sorprendente. Con los servidores pasa algo similar — el número de jugadores puede crecer más rápido de lo que se pueden pedir servidores.',
      },
      radioactive: {
        title: 'Decaimiento radiactivo',
        context: 'Un medicamento tiene una vida media de 8 días. Cantidad inicial: 200 g.',
        step1: 'Anotar vida media y valor inicial:',
        step2: 'Plantear la fórmula de decaimiento con $t_H = 8$:',
        step3: 'Sustituir después de 24 días — son exactamente 3 vidas medias ($\\frac{24}{8} = 3$):',
        step4: 'Después de 24 días quedan solo 25 g — un octavo del valor inicial:',
        mia_comment: 'Después de cada vida media, la cantidad se reduce a la mitad: $200 \\to 100 \\to 50 \\to 25$. Siempre es así, sin importar si empiezas con 200 g o 2 toneladas.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Vídeos virales de TikTok',
        desc: 'Un vídeo viral obtiene inicialmente 100 visualizaciones. Si cada espectador lo muestra a 1,8 personas, los números explotan: después de 10 rondas ya hay más de 35.000 visualizaciones. Los algoritmos amplifican aún más este efecto.',
      },
      battery: {
        title: 'Descarga de batería',
        desc: 'La batería de tu móvil pierde aproximadamente un 5% de carga por hora. Después de 14 horas queda aproximadamente la mitad — no es una caída lineal, sino decaimiento exponencial.',
      },
      pandemic: {
        title: 'Propagación de pandemias',
        desc: 'COVID-19 mostró lo que significa "crecimiento exponencial": sin medidas, los casos se duplicaban cada 3 días. Después de un mes eso sería un factor de $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Modelo lineal en lugar de exponencial',
        correct: 'Cambio porcentual = función exponencial',
        why: '"5% de crecimiento anual" NO es $+5$ por año, sino $\\cdot 1{,}05$ por año. Con el modelo lineal la cantidad crece de forma constante, con el exponencial crece cada vez más rápido.',
        mia_warning: 'Al principio había calculado $\\text{Jugadores}(t) = 100 + 50t$. ¡Los números reales después de una semana eran 3 veces más altos! El crecimiento exponencial casi siempre se subestima.',
      },
      wrong_growth_factor: {
        wrong: 'Usar el porcentaje directamente como factor',
        correct: 'Factor = $1 + \\frac{p}{100}$',
        why: '¡Con un 3% de crecimiento, el factor es $1{,}03$, no $3$! Con $b = 3$ el valor se triplicaría en lugar de crecer un 3%. Siempre calcular $1 + \\frac{p}{100}$.',
      },
    },
  },
};
