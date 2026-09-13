export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia revisa la lista de animaciones de Hafenlichter y frunce el ceño. La animación de respiración de Lumi parece un robot — brusca y artificial. Las olas del puerto también se ven rígidas, y el ciclo día-noche salta en lugar de fluir. "Todo lo que se repite necesita una oscilación", dice Tim. "Seno y coseno — están hechos para eso." Mia abre su calculadora y se sumerge en el mundo de las funciones periódicas.',
      challenge: 'La animación de respiración, el oleaje y el ciclo día-noche deben oscilar naturalmente en lugar de moverse a trompicones.',
      outro: 'La respiración de Lumi ahora se eleva y desciende suavemente, las olas del puerto ruedan uniformemente hasta la orilla, y la luz cambia fluidamente del rojo del amanecer al azul de medianoche. "Las funciones sinusoidales están en todas partes en la naturaleza", dice Jule. Mia asiente: "Y ahora también están en Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Reconocer funciones periódicas y distinguirlas de las no periódicas',
      amplitude_period: 'Leer la amplitud y el periodo de gráficas y ecuaciones',
      frequency: 'Calcular la frecuencia y explicar su significado',
      modeling: 'Modelar procesos reales con funciones sinusoidales',
    },
    explanation: {
      intro: 'Algunos procesos se repiten una y otra vez: tu latido cardíaco, las mareas, las estaciones. En matemáticas describimos estas oscilaciones con funciones periódicas. La más importante de ellas es la función seno:',
      parameters: 'La función seno general tiene cuatro parámetros que puedes entender como reguladores en una mesa de mezclas: $A$ controla la altura de la oscilación (amplitud), $b$ afecta la rapidez con que se repite la oscilación (periodo), $c$ desplaza la curva a la izquierda o derecha, y $d$ la desplaza arriba o abajo.',
      mia_tip: 'Para la animación de respiración de Lumi uso $A = 3$ píxeles y $T = 4$ segundos. Eso significa: cada 4 segundos Lumi inhala y exhala una vez, y el pecho se mueve 3 píxeles arriba y abajo. ¡Completamente natural!',
      graph_reading: 'Para leer una función periódica de la gráfica, buscas el patrón que se repite. La distancia entre dos lugares idénticos se llama periodo $T$. Matemáticamente, periodicidad significa:',
      applications: 'Las funciones periódicas son la herramienta matemática para todo lo que oscila: ondas sonoras, corriente alterna, péndulos, ondas de luz e incluso las órbitas de los planetas. Siempre que un proceso se repite regularmente, hay una función sinusoidal (o sus parientes) detrás.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitud',
        desc: 'La amplitud $A$ es la desviación máxima respecto al valor medio. Mide cuán "fuerte" es la oscilación. En la gráfica la lees como la mitad de la diferencia entre el punto más alto y el más bajo.',
      },
      period: {
        title: 'Periodo',
        desc: 'El periodo $T$ es la longitud de un ciclo completo de oscilación. Después del tiempo $T$ todo se repite exactamente. Cuanto mayor es $b$, más corto es el periodo.',
      },
      frequency: {
        title: 'Frecuencia',
        desc: 'La frecuencia $f$ indica cuántas oscilaciones ocurren por unidad de tiempo. Es el inverso del periodo. Unidad: Hertz (Hz) = oscilaciones por segundo.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Leer una función seno de la gráfica',
        context: 'Mia tiene un efecto de oleaje en el juego y quiere encontrar la ecuación correspondiente.',
        step1: 'Leer el punto más alto y el más bajo: $y_{\\max} = 3$ y $y_{\\min} = -3$. La amplitud es la mitad de la diferencia — la ola oscila 3 unidades hacia arriba y abajo.',
        step2: 'Leer el periodo: un ciclo completo dura $4\\pi$ unidades. De ahí calculamos $b$ con la fórmula $b = \\frac{2\\pi}{T}$ — lo que da $0{,}5$.',
        step3: 'Armar la ecuación: como la línea media está en $y = 0$ ($d = 0$) y no se observa desfase ($c = 0$), la función es simplemente:',
        mia_comment: 'Amplitud 3, periodo $4\\pi$ — con eso las olas del puerto se mecen bien lentamente. ¡Para olas más rápidas simplemente aumento $b$!',
      },
      ferris_wheel: {
        title: 'Modelar una noria',
        context: 'Una noria de 60 m de diámetro completa una vuelta cada 10 minutos. La góndola más baja está a 5 m del suelo.',
        step1: 'Determinar la amplitud: el radio es la mitad de la altura, así que $A = 30\\,\\text{m}$. La línea media está en $d = 5 + 30 = 35\\,\\text{m}$ (suelo + radio).',
        step2: 'El periodo es una vuelta completa: $T = 10\\,\\text{min}$. De ahí $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Considerar el punto de inicio: empezar abajo significa desplazar el seno por $-\\frac{\\pi}{2}$ (el seno normalmente empieza en el medio, no abajo).',
        step4: 'Comprobación: después de 2,5 minutos (cuarto de vuelta) la góndola debería estar a media altura. Sustituir: $\\sin(0) = 0$, así $h = 35\\,\\text{m}$. ¡Correcto!',
        mia_comment: 'Así funciona también el ciclo día-noche en Hafenlichter: seno con $T = 24$ (un día de juego) y desplazamiento para que a medianoche sea más oscuro.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Tu latido cardíaco',
        desc: 'Tu corazón late unas 72 veces por minuto — son 1,2 latidos por segundo. Las señales eléctricas de tu corazón (ECG) muestran una curva periódica. Los médicos leen la amplitud y la frecuencia para detectar problemas cardíacos.',
      },
      tides: {
        title: 'Marea alta y baja',
        desc: 'En el puerto de Hamburgo el nivel del agua oscila cada 12,4 horas entre marea alta y baja. Es una función sinusoidal casi perfecta — causada por la fuerza de atracción de la Luna.',
      },
      temperature: {
        title: 'Temperatura anual',
        desc: 'La temperatura media a lo largo de un año sigue aproximadamente una curva sinusoidal: cálida en verano, fría en invierno, con un periodo de 365 días. Los climatólogos usan este modelo como base para predicciones.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Confundir periodo y frecuencia',
        correct: 'La frecuencia es el inverso del periodo',
        why: 'Si el periodo es $T = 2\\,\\text{s}$, oscila una vez cada 2 segundos. La frecuencia es entonces $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — ¡no $2\\,\\text{Hz}$! Frecuencia = "¿cuántas veces por segundo?", periodo = "¿cuánto dura un ciclo?"',
        mia_warning: 'Este error hizo que la respiración de Lumi fuera el doble de rápida — ¡parecía que acababa de correr un sprint!',
      },
      b_value: {
        wrong: 'Igualar $b$ con el periodo',
        correct: 'Convertir $b$ y $T$ con la fórmula',
        why: '$b$ NO es el periodo, sino que se relaciona con él a través de $T = \\frac{2\\pi}{b}$. Si el periodo es $4\\pi$, entonces $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — ¡no $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter funciona — pero tiene tirones. Mia abre el monitor de rendimiento y ve: en algunas escenas la tasa de fotogramas cae a 15 FPS. "¿Dónde exactamente se vuelve lento?", pregunta Tim. "No necesito el promedio de toda la escena, sino el punto exacto donde el rendimiento se desploma." Jule sonríe: "Esa es exactamente la pregunta que llevó a la invención del cálculo diferencial — la tasa de cambio instantánea."',
      challenge: 'Encontrar el punto exacto donde la tasa de fotogramas se desploma — no solo el promedio.',
      outro: 'Mia ha encontrado el punto crítico: exactamente en el fotograma 847 el tiempo de renderizado explota porque ahí se generan 200 partículas simultáneamente. "Sin la tasa de cambio instantánea habría buscado eternamente", dice. Tim asiente: "Newton habría hecho lo mismo — solo que sin monitor de rendimiento."',
    },
    objectives: {
      average_rate: 'Calcular e interpretar la tasa de cambio media (pendiente de la secante)',
      instantaneous_rate: 'Comprender la tasa de cambio instantánea como límite',
      limit_concept: 'Seguir la transición de la secante a la tangente',
      derivative_notation: 'Conocer y aplicar las diferentes notaciones de la derivada',
    },
    explanation: {
      intro: 'Imagina que vas en bicicleta a la escuela. Tu velocímetro marca 20 km/h — esa es tu velocidad instantánea. Pero ¿cómo se calcula? Si dices "Recorrí 10 km en 30 minutos", eso es un promedio. La velocidad instantánea en un punto determinado es algo diferente — y de eso exactamente trata el cálculo diferencial.',
      secant_to_tangent: 'La idea es genialmente simple: calcula la pendiente media entre dos puntos, y luego acerca los puntos cada vez más. En el caso límite — cuando la distancia tiende a cero — obtienes la pendiente en un único punto. Esa es la derivada:',
      mia_tip: 'La tasa de fotogramas promedio en 10 segundos no me dice nada. ¡Necesito la tasa instantánea en el fotograma 847! Igual que con el velocímetro: no muestra el promedio de todo el viaje, sino lo rápido que vas AHORA.',
      derivative_meaning: 'La derivada $f\'(x_0)$ tiene un significado claro: da la pendiente de la tangente a la gráfica en el punto $x_0$. Si $f\'(x_0) > 0$, la función crece ahí. Si $f\'(x_0) < 0$, decrece. Si $f\'(x_0) = 0$, la función tiene ahí (posiblemente) un máximo o mínimo. Existen diferentes notaciones:',
      geometric_interpretation: 'Geométricamente ocurre lo siguiente: la secante a través de dos puntos de la gráfica gira cuando los puntos se acercan. En el caso límite, la secante se convierte en tangente — una recta que "toca" la gráfica en exactamente un punto. La pendiente de esta tangente es la derivada.',
    },
    concepts: {
      difference_quotient: {
        title: 'Cociente de diferencias',
        desc: 'La tasa de cambio media entre dos puntos. Calcula la pendiente de la secante — una recta que corta la gráfica en dos puntos.',
      },
      differential_quotient: {
        title: 'Cociente diferencial (derivada)',
        desc: 'La tasa de cambio instantánea en un punto. Surge cuando $h$ en el cociente de diferencias tiende a cero. Da la pendiente de la tangente.',
      },
      derivative_notation: {
        title: 'Notaciones de la derivada',
        desc: 'Hay tres notaciones comunes: $f\'(x)$ (Lagrange, la más frecuente en la escuela), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, enfatiza el carácter de fracción) y $\\dot{y}$ (Newton, sobre todo en física para derivadas temporales).',
      },
    },
    examples: {
      average_speed: {
        title: 'Velocidad media',
        context: 'Una pelota rueda por una rampa. La distancia depende cuadráticamente del tiempo.',
        step1: 'Dada la función posición-tiempo. Después de 2 segundos la pelota ha recorrido 2 m, después de 4 segundos 8 m.',
        step2: 'Velocidad media entre $t = 2$ y $t = 4$: dividimos el cambio de distancia entre el cambio de tiempo. Resulta $3\\,\\text{m/s}$ en promedio.',
        step3: 'Ahora acortamos el intervalo: entre $t = 2$ y $t = 2{,}1$ resulta $2{,}05\\,\\text{m/s}$. Cuanto más corto el intervalo, más nos acercamos a la velocidad instantánea en $t = 2$.',
        mia_comment: 'Así funciona exactamente mi monitor de rendimiento: mide la tasa de fotogramas en intervalos cada vez más cortos hasta encontrar el punto exacto donde falla.',
      },
      instantaneous_rate: {
        title: 'Calcular la tasa de cambio instantánea',
        context: 'Determina la derivada de $f(x) = x^2$ en el punto $x_0 = 3$.',
        step1: 'Sustituimos $f(x) = x^2$ y $x_0 = 3$ en el cociente de diferencias. Buscado: ¿qué pasa cuando $h$ tiende a 0?',
        step2: 'Calcular el numerador: $(3+h)^2 = 9 + 6h + h^2$. Menos $f(3) = 9$ da $6h + h^2$ en el numerador.',
        step3: 'Simplificar por $h$ (podemos porque $h \\neq 0$ en el proceso de límite): queda $6 + h$.',
        step4: 'Formar el límite: para $h \\to 0$, $6 + h$ se convierte en $6$. La pendiente de la tangente en $x = 3$ es exactamente $6$.',
        mia_comment: 'La tangente en $x = 3$ tiene pendiente 6. Si hago esto para cada punto, obtengo la función derivada $f\'(x) = 2x$. En $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. ¡Coincide!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Radares y velocidad',
        desc: 'Un radar no mide tu velocidad instantánea, sino tu velocidad media en un tramo corto (control de tramo: a lo largo de varios kilómetros). Cuanto más corto el tramo de medición, más cerca del valor instantáneo.',
      },
      stock_trends: {
        title: 'Cotizaciones bursátiles y tendencias',
        desc: 'Cuando una acción "sube", los analistas se refieren a la derivada positiva de la cotización. La pendiente de la tangente al gráfico de cotización muestra la tendencia: positiva = tendencia alcista, negativa = tendencia bajista, cero = punto de inflexión.',
      },
      speedometer: {
        title: 'Velocímetro del coche',
        desc: 'Tu velocímetro muestra la velocidad instantánea — matemáticamente la derivada de la función posición respecto al tiempo. Los dispositivos GPS la calculan como límite de intervalos de tiempo muy cortos.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Promedio = valor instantáneo',
        correct: 'Distinguir entre promedio y valor instantáneo',
        why: 'La tasa de cambio media en un intervalo $[1;\\,5]$ NO es igual a la tasa de cambio instantánea en $x = 3$ (el punto medio). ¡Eso solo vale para funciones lineales! Para gráficas curvas, ambos valores difieren.',
        mia_warning: 'Primero calculé la tasa de fotogramas promedio y pensé que todo estaba bien. ¡Pero localmente había caídas masivas! El promedio ocultaba el problema.',
      },
      secant_tangent: {
        wrong: 'Pendiente de la secante = pendiente de la tangente',
        correct: 'La tangente es el caso límite de la secante',
        why: 'La secante corta la gráfica en dos puntos, la tangente la toca en uno. Solo cuando los dos puntos se juntan ($h \\to 0$), la secante se convierte en tangente. Sin límite es solo una aproximación.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter necesita un sistema de balanceo: ¿a qué velocidad debe subir Lumi de nivel? ¿Qué tan fuertes se vuelven los enemigos? ¿Cuánto cuesta una mejora? "Si todo crece linealmente, el juego se vuelve aburrido", dice Jule. Tim añade: "Y si todo crece exponencialmente, se vuelve injusto." Mia se da cuenta: necesita conocer diferentes tipos de crecimiento y usarlos de forma dirigida.',
      challenge: 'Encontrar las curvas de crecimiento correctas para el balanceo del juego — lineal, cuadrático, exponencial o logarítmico.',
      outro: 'El sistema de balanceo de Mia está listo: la velocidad de movimiento crece linealmente, el daño por caída cuadráticamente, la experiencia requerida exponencialmente y la curva de aprendizaje logarítmicamente. "Cada curva tiene su lugar", dice satisfecha. El juego ahora se siente justo y emocionante — desde el nivel 1 hasta el jefe final.',
    },
    objectives: {
      identify_types: 'Reconocer las cuatro grandes clases de funciones (lineal, cuadrática, exponencial, logarítmica) en ecuaciones y gráficas',
      compare_growth: 'Comparar y ordenar el comportamiento de crecimiento de las clases de funciones',
      match_context: 'Elegir y justificar la clase de función adecuada para el contexto',
      graph_recognition: 'Asignar gráficas a los tipos de función correctos',
    },
    explanation: {
      intro: 'En matemáticas hay diferentes "familias" de funciones — cada una con su propio carácter. Algunas crecen uniformemente, otras cada vez más rápido, y otras cada vez más lentamente. Las cuatro clases más importantes para 10.º grado son:',
      mia_tip: 'En el diseño de juegos uso cada clase de función para algo diferente: crecimiento lineal para cosas predecibles (velocidad de movimiento), cuadrático para cosas que se "aceleran" (daño por caída), exponencial para desafíos (experiencia requerida) y logarítmico para efectos de aprendizaje (progresión de habilidad).',
      growth_comparison: 'Decisivo es: ¿a qué velocidad crece cada clase de función para valores grandes de $x$? El orden es siempre el mismo — sin importar los números concretos que uses:',
      choosing_functions: 'Elegir la función correcta para un problema es una competencia clave. Pregúntate: ¿es el cambio constante (lineal)? ¿Se acelera uniformemente (cuadrático)? ¿El valor se duplica en intervalos iguales (exponencial)? ¿El incremento es cada vez menor (logarítmico)?',
    },
    concepts: {
      linear: {
        title: 'Funciones lineales',
        desc: 'Tasa de cambio constante: en cada paso se añade la misma cantidad. La gráfica es una recta. La pendiente $m$ y la ordenada al origen $b$ se pueden leer directamente.',
      },
      quadratic: {
        title: 'Funciones cuadráticas',
        desc: 'La propia tasa de cambio cambia linealmente — se añade cada vez más rápido (o menos). La gráfica es una parábola con vértice.',
      },
      exponential: {
        title: 'Funciones exponenciales',
        desc: 'Crecimiento por un porcentaje fijo: cuanto más hay, más se añade. Duplicación en intervalos iguales de tiempo. A largo plazo crece más rápido que cualquier función potencial.',
      },
      logarithmic: {
        title: 'Funciones logarítmicas',
        desc: 'La función inversa de la función exponencial. Crece rápido al principio, luego cada vez más lentamente. Modela efectos de saturación y curvas de aprendizaje.',
      },
    },
    examples: {
      identify_type: {
        title: 'Reconocer el tipo de función en tablas de valores',
        context: 'Se presentan tres conjuntos de datos. ¿Qué tipo corresponde a cada uno?',
        step1: 'Probar linealidad: calcula las diferencias de valores $y$ consecutivos. Si son constantes, la función es lineal.',
        step2: 'Probar exponencial: calcula los cocientes de valores $y$ consecutivos. Si son constantes, la función es exponencial.',
        step3: 'Probar cuadrática: calcula las segundas diferencias (diferencias de las diferencias). Si son constantes, la función es cuadrática.',
        mia_comment: 'Así es exactamente como pruebo mi balanceo: simulo 100 rondas y compruebo si los valores siguen el tipo de crecimiento deseado. Si las segundas diferencias se desvían, algo no está bien.',
      },
      game_mechanics: {
        title: 'Modelar mecánicas de juego',
        context: 'Cuatro mecánicas de juego diferentes en Hafenlichter necesitan funciones distintas.',
        step1: 'Velocidad de movimiento: sube la misma cantidad por nivel ($+5$ por nivel). Es un cambio constante — lineal. Justo y predecible.',
        step2: 'Daño por caída: desde 2 m de altura daño leve, desde 10 m mucho más. El aumento del daño se acelera — cuadrático. Tiene sentido físico (energía = $\\frac{1}{2}mv^2$).',
        step3: 'Experiencia requerida por nivel: nivel 2 necesita 150 XP, nivel 3 necesita 225 XP, nivel 4 necesita 337 XP. El requerimiento crece siempre un 50% — exponencial. Así los niveles superiores son un verdadero desafío.',
        step4: 'Curva de aprendizaje (habilidad): al principio se aprende rápido, luego cada vez más lento. Después de $t$ horas de juego se domina $20 \\cdot \\log_2(t+1)$ por ciento de las mecánicas — logarítmico.',
        mia_comment: 'Ese es el núcleo del diseño de juegos: la curva correcta para la mecánica correcta. XP lineal sería aburrido, daño por caída exponencial sería injusto. ¡Cada tipo de función tiene su punto dulce!',
      },
    },
    realworld: {
      app_users: {
        title: 'Descargas virales de apps',
        desc: 'Si cada usuario invita a dos amigos y estos a otros dos, las descargas se duplican. Al principio apenas visible, luego explosivo — típicamente exponencial. TikTok, Instagram y WhatsApp crecieron así.',
      },
      salary: {
        title: 'Paga y salario',
        desc: 'Tu paga sube (ojalá) cada año la misma cantidad — crecimiento lineal. Más tarde en el trabajo tu salario suele subir de forma similar: una cantidad fija por año de experiencia.',
      },
      learning_curve: {
        title: 'Progreso de aprendizaje',
        desc: 'Nuevo instrumento, nuevo deporte, nuevo idioma: al principio haces enormes progresos, luego cada vez es más difícil mejorar. Esa es una curva de saturación logarítmica — ¡y completamente normal!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Exponencial" y "cuadrático" son lo mismo',
        correct: 'El exponencial crece MUCHO más rápido que el cuadrático',
        why: 'Con números pequeños $x^2$ y $2^x$ se parecen: $4^2 = 16$ y $2^4 = 16$. Pero con $x = 10$: $10^2 = 100$ frente a $2^{10} = 1024$. ¡El crecimiento exponencial supera a cualquier función potencial!',
        mia_warning: 'Al principio había hecho la experiencia requerida cuadrática en lugar de exponencial. Resultado: a partir del nivel 20 el juego era demasiado fácil porque los jugadores acumulaban XP más rápido de lo que subía el requerimiento.',
      },
      all_curves_linear: {
        wrong: 'Todo crecimiento es lineal',
        correct: 'Primero verificar el tipo de crecimiento',
        why: '¡Solo porque algo se "duplica" no significa que sea lineal! "Cada 3 días el doble de seguidores" es exponencial, no lineal. Lineal sería: "cada día 100 nuevos seguidores". La diferencia: aumento constante (lineal) vs. factor constante (exponencial).',
      },
    },
  },
};
