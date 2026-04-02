export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia ha conseguido la curva de salto de Lumi, pero ahora esta atascada. En el nivel 3 de "Hafenlichter", Lumi debe aterrizar en una plataforma en movimiento. "Necesito el momento exacto en que la curva de salto alcanza la plataforma", le dice Mia a Tim. Eso significa: tiene que resolver una ecuacion cuadratica. No solo dibujar la funcion, sino despejar concretamente $x$.',
      challenge: 'Mia debe calcular cuando la curva de salto de Lumi intersecta la plataforma movil — eso conduce a una ecuacion cuadratica.',
      outro: 'Mia tiene tres metodos en su caja de herramientas: la formula cuadratica, completar el cuadrado y factorizar. Segun la ecuacion, elige el metodo adecuado — y ahora Lumi aterriza con precision en cada plataforma. "Es como una navaja suiza", sonrie.',
    },
    objectives: {
      solve: 'Resolver ecuaciones cuadraticas con seguridad e indicar el conjunto solucion',
      pq_formula: 'Aplicar la formula cuadratica — incluyendo casos especiales (ninguna solucion o una sola)',
      completing_square: 'Comprender y realizar la tecnica de completar el cuadrado como via de solucion',
      factoring: 'Resolver ecuaciones cuadraticas mediante factorizacion',
    },
    explanation: {
      intro: 'Una ecuacion cuadratica tiene la forma general con el exponente mas alto igual a 2. A diferencia de las ecuaciones lineales ($x$ elevado a 1), puede tener cero, una o dos soluciones. La forma general es:',
      normal_form: 'Para la formula cuadratica necesitamos la forma normal — es decir, el coeficiente delante de $x^2$ debe ser exactamente 1. Si no es el caso, dividimos toda la ecuacion entre $a$:',
      mia_tip: 'Me lo recuerdo asi: primero pasar todo a un lado para que a la derecha quede cero. Luego dividir entre el coeficiente de $x^2$. Solo ENTONCES puedo usar la formula cuadratica.',
      pq_formula: 'La formula cuadratica es la herramienta universal para ecuaciones cuadraticas en forma normal. Lees $p$ y $q$ directamente y sustituyes:',
      completing_square: 'Completar el cuadrado funciona asi: transformas el lado izquierdo en un cuadrado perfecto. Para ello sumas $(\\frac{p}{2})^2$ en ambos lados. El resultado es una expresion de la forma $(x + \\frac{p}{2})^2$, que puedes despejar facilmente para $x$.',
      factoring: 'Si conoces (o puedes adivinar) las raices $x_1$ y $x_2$, la ecuacion se puede escribir como producto de dos parentesis. El producto es cero cuando al menos un factor es cero:',
    },
    concepts: {
      pq_formula: {
        title: 'Formula cuadratica',
        desc: 'La herramienta estandar para ecuaciones cuadraticas en forma normal. Funciona siempre — solo necesitas $p$ (coeficiente de $x$) y $q$ (termino constante).',
      },
      completing_square: {
        title: 'Completar el cuadrado',
        desc: 'Completas el lado izquierdo hasta formar un cuadrado perfecto. Especialmente util cuando tambien necesitas determinar el vertice de una parabola.',
      },
      discriminant: {
        title: 'Discriminante',
        desc: 'La expresion bajo la raiz en la formula cuadratica: $D > 0$ da dos soluciones, $D = 0$ da exactamente una, $D < 0$ significa que no hay solucion real.',
      },
      factoring: {
        title: 'Factorizacion',
        desc: 'Descomposicion en dos factores lineales. Funciona de manera especialmente elegante cuando las raices son enteras — entonces a menudo puedes adivinarlas.',
      },
    },
    examples: {
      pq_application: {
        title: 'Resolver una ecuacion con la formula cuadratica',
        context: 'Mia calcula cuando la curva de salto de Lumi alcanza la plataforma en $y = 0$.',
        step1: 'La ecuacion ya esta en forma normal (el coeficiente delante de $x^2$ es 1):',
        step2: 'Leemos $p$ y $q$ — cuidado con los signos:',
        step3: 'Sustituir los valores en la formula cuadratica y calcular paso a paso:',
        step4: 'Dos soluciones — Lumi alcanza la plataforma en dos puntos:',
        mia_comment: 'Dos soluciones tienen sentido: Lumi salta en $x = 1$ y aterriza en $x = 3$. El tramo intermedio es el vuelo.',
      },
      completing_square: {
        title: 'Resolver completando el cuadrado',
        context: 'Tim quiere resolver la ecuacion sin la formula cuadratica — como alternativa.',
        step1: 'Partimos de la ecuacion en forma normal:',
        step2: 'Primero pasar el termino constante al lado derecho:',
        step3: 'Ahora completar el cuadrado: $(\\frac{6}{2})^2 = 9$ se suma en ambos lados:',
        step4: 'El lado izquierdo es ahora un cuadrado perfecto — al extraer la raiz obtenemos dos casos:',
        step5: 'Calcular ambas soluciones:',
        mia_comment: 'Misma ecuacion, mismas soluciones, camino diferente. Uso completar el cuadrado cuando tambien necesito el vertice de la parabola — mato dos pajaros de un tiro.',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds y parabolas de lanzamiento',
        desc: 'Cada lanzamiento en Angry Birds sigue una parabola. La ecuacion $h(t) = 0$ te dice cuando el objeto toca el suelo. Los fisicos usan la misma formula para movimientos de lanzamiento reales.',
      },
      breakeven: {
        title: 'Encontrar el punto de equilibrio',
        desc: 'Una empresa quiere saber: a partir de que cantidad de unidades obtenemos beneficio? La ecuacion $G(x) = 0$ da los puntos de equilibrio — generalmente una ecuacion cuadratica.',
      },
      rocket: {
        title: 'Lanzamientos de cohetes',
        desc: 'La altura de un cohete despues del lanzamiento sigue una funcion cuadratica (mientras dura el combustible). Cuando alcanza 1000 m? Ecuacion cuadratica!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Usar la formula cuadratica sin tener cero en el lado derecho',
        correct: 'Primero pasar todo a un lado',
        why: 'La formula cuadratica requiere que el lado derecho sea cero. En $x^2 + 3x = 5$ primero debes sumar $-5$ en ambos lados para obtener $x^2 + 3x - 5 = 0$. De lo contrario, $q$ sera incorrecto.',
        mia_warning: 'Tuve este error en el codigo — la colision con la plataforma estaba completamente desfasada porque $q$ tenia el signo equivocado. Siempre cero a la derecha primero.',
      },
      sign_pq: {
        wrong: 'Error de signo con $p$ en la formula cuadratica',
        correct: 'Prestar atencion al signo negativo delante de $\\frac{p}{2}$',
        why: 'En la formula cuadratica aparece $-\\frac{p}{2}$. En $x^2 - 6x + 8 = 0$ tenemos $p = -6$, asi que $-\\frac{-6}{2} = +3$. Si olvidas el signo negativo, obtienes $-3$ en lugar de $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia trabaja en el nivel del faro de Hafenlichter. El faro proyecta un cono de luz sobre el puerto, y Lumi debe esconderse en la sombra. "Necesito calcular que tan lejos llega el cono de luz a un angulo determinado", dice Mia. Tim senala un triangulo rectangulo que el cono de luz forma con el suelo. "Eso es trigonometria — seno, coseno y tangente."',
      challenge: 'Mia necesita el alcance del cono de luz a diferentes angulos para programar la zona de sombra.',
      outro: 'El faro gira lentamente y el cono de luz se desplaza por el puerto. Gracias al seno y coseno, el codigo de Mia calcula en tiempo real que areas estan iluminadas. Lumi se escabulle de sombra en sombra — el nivel se ha vuelto realmente emocionante.',
    },
    objectives: {
      sin_cos_tan: 'Aplicar seno, coseno y tangente en el triangulo rectangulo con seguridad',
      unit_circle: 'Comprender el circulo unitario y poder leer valores',
      angle_calculations: 'Calcular angulos y longitudes de lados con funciones trigonometricas',
      real_problems: 'Resolver problemas practicos con trigonometria (alturas, distancias, angulos)',
    },
    explanation: {
      intro: 'La trigonometria conecta angulos con longitudes de lados. En todo triangulo rectangulo existen tres relaciones fundamentales — nombradas segun el angulo $\\alpha$ que observas:',
      mia_tip: 'Mi regla mnemotecnica: SOH-CAH-TOA — Seno = Opuesto/Hipotenusa, Coseno = Adyacente/Hipotenusa, Tangente = Opuesto/Adyacente. Suena gracioso, pero nunca se olvida.',
      unit_circle: 'El circulo unitario tiene radio 1 y su centro en el origen. Para cada angulo $\\alpha$ proporciona directamente los valores: la coordenada $x$ es $\\cos(\\alpha)$, la coordenada $y$ es $\\sin(\\alpha)$. Asi siempre se cumple:',
      special_angles: 'Ciertos angulos debes conocer de memoria: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Consejo: en el circulo unitario puedes leer estos valores geometricamente.',
    },
    concepts: {
      sine: {
        title: 'Seno',
        desc: 'La relacion entre el cateto opuesto y la hipotenusa. En el circulo unitario, $\\sin(\\alpha)$ corresponde a la coordenada $y$ del punto sobre el circulo.',
      },
      cosine: {
        title: 'Coseno',
        desc: 'La relacion entre el cateto adyacente y la hipotenusa. En el circulo unitario, $\\cos(\\alpha)$ corresponde a la coordenada $x$. El coseno y el seno estan desfasados $90°$.',
      },
      tangent: {
        title: 'Tangente',
        desc: 'La relacion entre el cateto opuesto y el cateto adyacente — o equivalentemente $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideal para pendientes y angulos de inclinacion.',
      },
      unit_circle: {
        title: 'Circulo unitario',
        desc: 'Un circulo con radio 1. Cada punto del circulo tiene las coordenadas $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. Asi se pueden definir seno y coseno para todos los angulos — no solo para angulos agudos.',
      },
    },
    examples: {
      height_tan: {
        title: 'Calcular alturas con la tangente',
        context: 'Mia mide el angulo hacia la cima del faro: $35°$. La distancia al faro es de $50\\,\\text{m}$.',
        step1: 'Esquema: la distancia es el cateto adyacente, la altura buscada es el cateto opuesto. Entonces tangente:',
        step2: 'Despejar la altura $h$ — multiplicar ambos lados por $50\\,\\text{m}$:',
        step3: 'Calculadora (modo DEG!): $\\tan(35°) \\approx 0{,}7002$ sustituir y calcular:',
        mia_comment: 'En el juego esto ocurre en tiempo real: el angulo del cono de luz cambia y mi codigo calcula instantaneamente el nuevo alcance. La tangente es perfecta para eso.',
      },
      unit_circle: {
        title: 'Leer valores en el circulo unitario',
        context: 'Tim quiere mostrarle a Mia como funciona el circulo unitario — con el ejemplo de $60°$.',
        step1: 'Convertir angulo (opcional): $60°$ corresponde a $\\frac{\\pi}{3}$ en radianes:',
        step2: 'Leer el valor del seno — la coordenada $y$ del punto en el circulo unitario:',
        step3: 'Leer el valor del coseno — la coordenada $x$:',
        step4: 'El punto en el circulo unitario tiene entonces las coordenadas:',
        mia_comment: 'En el circulo unitario veo seno y coseno como longitudes. Eso lo hace mucho mas visual que solo numeros en una tabla.',
      },
    },
    realworld: {
      compass: {
        title: 'Navegacion y GPS',
        desc: 'Tu smartphone calcula direcciones con trigonometria. La funcion atan2 convierte coordenadas $x$ e $y$ en un angulo — asi Google Maps sabe en que direccion debes caminar.',
      },
      building_height: {
        title: 'Medir alturas de edificios',
        desc: 'Arquitectos y topografos miden alturas de edificios sin subir al techo. Con un gonimetro y la tangente, basta con la distancia y el angulo.',
      },
      music: {
        title: 'Sonidos y ondas acusticas',
        desc: 'Cada sonido es una onda sinusoidal. El tono de referencia La tiene 440 oscilaciones por segundo — descrito por $f(t) = \\sin(880\\pi t)$. La musica es trigonometria aplicada.',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Confundir seno y coseno',
        correct: 'Seno = cateto opuesto / hipotenusa',
        why: 'El seno corresponde al cateto opuesto (el lado frente al angulo), el coseno al cateto adyacente (el lado junto al angulo). Si los confundes, obtienes un valor incorrecto.',
        mia_warning: 'Me sigue pasando a veces! Dibujo el triangulo y etiqueto los lados en relacion al angulo. Entonces veo inmediatamente cual es el opuesto y cual el adyacente.',
      },
      deg_rad: {
        wrong: 'Modo de angulo incorrecto en la calculadora',
        correct: 'Siempre verificar el modo DEG para angulos en grados',
        why: 'En modo RAD, la calculadora interpreta $90$ como $90$ radianes (aprox. $5156°$), no como $90°$. $\\sin(90°) = 1$, pero $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Resultado: completamente incorrecto.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Hafenlichter va a tener un modo multijugador. Mia prueba los servidores con 10 jugadores — todo funciona perfectamente. Pero Tim advierte: "Que pasa con 100? Con 1000? Si el juego se vuelve viral, el numero de jugadores podria duplicarse cada pocos dias." Mia hace calculos y se asusta: el crecimiento exponencial es mucho mas rapido de lo que se piensa.',
      challenge: 'La carga del servidor no crece linealmente con los jugadores, sino exponencialmente. Mia debe predecir cuando los servidores estaran sobrecargados.',
      outro: 'Mia ha construido un modelo que predice la evolucion del numero de jugadores. Gracias a la funcion exponencial ahora sabe: si el tiempo de duplicacion es de 3 dias, despues de 2 semanas necesitara 32 veces mas capacidad de servidor. "Mejor escalar pronto que caerse tarde", decide.',
    },
    objectives: {
      exponential_functions: 'Reconocer funciones exponenciales y distinguirlas de funciones lineales',
      growth_factor: 'Determinar el factor de crecimiento a partir de porcentajes e interpretarlo',
      half_life: 'Calcular y aplicar vida media y tiempo de duplicacion',
      model_real_world: 'Modelar procesos reales de crecimiento y decaimiento con funciones exponenciales',
    },
    explanation: {
      intro: 'En el crecimiento lineal, en cada paso se anade la misma cantidad. En el crecimiento exponencial, en cada paso se multiplica por el mismo factor. Suena similar — pero conduce a resultados completamente diferentes:',
      growth_factor: 'El factor de crecimiento $b$ te dice todo: si algo crece un $p\\%$ por unidad de tiempo, el factor es mayor que 1. Si algo disminuye un $p\\%$ (decaimiento), es menor que 1:',
      mia_tip: 'Las funciones lineales suman, las funciones exponenciales multiplican. Con un 10% de crecimiento diario, el factor es $b = 1{,}10$ — despues de 7 dias $1{,}10^7 \\approx 1{,}95$, casi una duplicacion. Eso me sorprendio en la planificacion del servidor.',
      half_life: 'La vida media $t_H$ es el tiempo despues del cual queda la mitad. Es constante — sin importar con cuanto empieces. Eso es lo especial del decaimiento exponencial:',
      doubling_time: 'El equivalente en el crecimiento: el tiempo de duplicacion $t_V$ te dice despues de cuanto tiempo el valor se ha duplicado. Tambien permanece siempre igual:',
    },
    concepts: {
      exponential_function: {
        title: 'Funcion exponencial',
        desc: 'La forma general: $a$ es el valor inicial, $b$ el factor de crecimiento, $t$ el tiempo. Decisivo: la variable esta en el exponente — eso marca la diferencia con las funciones potenciales.',
      },
      growth_factor: {
        title: 'Factor de crecimiento',
        desc: 'Con un $p\\%$ de aumento: $b = 1 + \\frac{p}{100}$. Ejemplo: 5% de crecimiento da $b = 1{,}05$. Con 12% de disminucion: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Vida media',
        desc: 'El tiempo hasta que un valor se ha reducido a la mitad. Tipico del decaimiento radioactivo, medicamentos en el cuerpo o descarga de baterias. La vida media es independiente del valor inicial.',
      },
      euler_base: {
        title: 'Funcion exponencial natural',
        desc: 'La base $e \\approx 2{,}718$ es especial: la funcion $e^x$ es su propia derivada. Con $k > 0$ crece, con $k < 0$ decae. Estandar en ciencias naturales.',
      },
    },
    examples: {
      bacteria: {
        title: 'Crecimiento bacteriano',
        context: 'Un cultivo de bacterias comienza con 500 bacterias y se duplica cada hora.',
        step1: 'Identificar valor inicial y factor de crecimiento — duplicacion significa factor 2:',
        step2: 'Plantear la funcion exponencial — $t$ cuenta las horas:',
        step3: 'Sustituir $t = 5$ (despues de 5 horas): $2^5 = 32$:',
        step4: 'Despues de 5 horas hay 16.000 bacterias:',
        mia_comment: 'De 500 a 16.000 en solo 5 horas! Eso muestra por que el crecimiento exponencial es tan sorprendente. Con los servidores pasa algo similar — el numero de jugadores puede crecer mas rapido de lo que se pueden pedir servidores.',
      },
      radioactive: {
        title: 'Decaimiento radioactivo',
        context: 'Un medicamento tiene una vida media de 8 dias. Cantidad inicial: 200 g.',
        step1: 'Anotar vida media y valor inicial:',
        step2: 'Plantear la formula de decaimiento con $t_H = 8$:',
        step3: 'Sustituir despues de 24 dias — son exactamente 3 vidas medias ($\\frac{24}{8} = 3$):',
        step4: 'Despues de 24 dias quedan solo 25 g — un octavo del valor inicial:',
        mia_comment: 'Despues de cada vida media, la cantidad se reduce a la mitad: $200 \\to 100 \\to 50 \\to 25$. Siempre es asi, sin importar si empiezas con 200 g o 2 toneladas.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Videos virales de TikTok',
        desc: 'Un video viral obtiene inicialmente 100 visualizaciones. Si cada espectador lo muestra a 1,8 personas, los numeros explotan: despues de 10 rondas ya hay mas de 35.000 visualizaciones. Los algoritmos amplifican aun mas este efecto.',
      },
      battery: {
        title: 'Descarga de bateria',
        desc: 'La bateria de tu movil pierde aproximadamente un 5% de carga por hora. Despues de 14 horas queda aproximadamente la mitad — no es una caida lineal, sino decaimiento exponencial.',
      },
      pandemic: {
        title: 'Propagacion de pandemias',
        desc: 'COVID-19 mostro lo que significa "crecimiento exponencial": sin medidas, los casos se duplicaban cada 3 dias. Despues de un mes eso seria un factor de $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Modelo lineal en lugar de exponencial',
        correct: 'Cambio porcentual = funcion exponencial',
        why: '"5% de crecimiento anual" NO es $+5$ por ano, sino $\\cdot 1{,}05$ por ano. Con el modelo lineal la cantidad crece de forma constante, con el exponencial crece cada vez mas rapido.',
        mia_warning: 'Al principio habia calculado $\\text{Jugadores}(t) = 100 + 50t$. Los numeros reales despues de una semana eran 3 veces mas altos! El crecimiento exponencial casi siempre se subestima.',
      },
      wrong_growth_factor: {
        wrong: 'Usar el porcentaje directamente como factor',
        correct: 'Factor = $1 + \\frac{p}{100}$',
        why: 'Con un 3% de crecimiento, el factor es $1{,}03$, no $3$! Con $b = 3$ el valor se triplicaria en lugar de crecer un 3%. Siempre calcular $1 + \\frac{p}{100}$.',
      },
    },
  },
};
