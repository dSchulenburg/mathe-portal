export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia revisa la lista de animaciones de Hafenlichter y frunce el ceno. La animacion de respiracion de Lumi parece un robot — brusca y artificial. Las olas del puerto tambien se ven rigidas, y el ciclo dia-noche salta en lugar de fluir. "Todo lo que se repite necesita una oscilacion", dice Tim. "Seno y coseno — estan hechos para eso." Mia abre su calculadora y se sumerge en el mundo de las funciones periodicas.',
      challenge: 'La animacion de respiracion, el oleaje y el ciclo dia-noche deben oscilar naturalmente en lugar de moverse a trompicones.',
      outro: 'La respiracion de Lumi ahora se eleva y desciende suavemente, las olas del puerto ruedan uniformemente hasta la orilla, y la luz cambia fluidamente del rojo del amanecer al azul de medianoche. "Las funciones sinusoidales estan en todas partes en la naturaleza", dice Jule. Mia asiente: "Y ahora tambien estan en Hafenlichter."',
    },
    objectives: {
      periodic_functions: 'Reconocer funciones periodicas y distinguirlas de las no periodicas',
      amplitude_period: 'Leer la amplitud y el periodo de graficas y ecuaciones',
      frequency: 'Calcular la frecuencia y explicar su significado',
      modeling: 'Modelar procesos reales con funciones sinusoidales',
    },
    explanation: {
      intro: 'Algunos procesos se repiten una y otra vez: tu latido cardiaco, las mareas, las estaciones. En matematicas describimos estas oscilaciones con funciones periodicas. La mas importante de ellas es la funcion seno:',
      parameters: 'La funcion seno general tiene cuatro parametros que puedes entender como reguladores en una mesa de mezclas: $A$ controla la altura de la oscilacion (amplitud), $b$ afecta la rapidez con que se repite la oscilacion (periodo), $c$ desplaza la curva a la izquierda o derecha, y $d$ la desplaza arriba o abajo.',
      mia_tip: 'Para la animacion de respiracion de Lumi uso $A = 3$ pixeles y $T = 4$ segundos. Eso significa: cada 4 segundos Lumi inhala y exhala una vez, y el pecho se mueve 3 pixeles arriba y abajo. Completamente natural!',
      graph_reading: 'Para leer una funcion periodica de la grafica, buscas el patron que se repite. La distancia entre dos lugares identicos se llama periodo $T$. Matematicamente, periodicidad significa:',
      applications: 'Las funciones periodicas son la herramienta matematica para todo lo que oscila: ondas sonoras, corriente alterna, pendulos, ondas de luz e incluso las orbitas de los planetas. Siempre que un proceso se repite regularmente, hay una funcion sinusoidal (o sus parientes) detras.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitud',
        desc: 'La amplitud $A$ es la desviacion maxima respecto al valor medio. Mide cuan "fuerte" es la oscilacion. En la grafica la lees como la mitad de la diferencia entre el punto mas alto y el mas bajo.',
      },
      period: {
        title: 'Periodo',
        desc: 'El periodo $T$ es la longitud de un ciclo completo de oscilacion. Despues del tiempo $T$ todo se repite exactamente. Cuanto mayor es $b$, mas corto es el periodo.',
      },
      frequency: {
        title: 'Frecuencia',
        desc: 'La frecuencia $f$ indica cuantas oscilaciones ocurren por unidad de tiempo. Es el inverso del periodo. Unidad: Hertz (Hz) = oscilaciones por segundo.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Leer una funcion seno de la grafica',
        context: 'Mia tiene un efecto de oleaje en el juego y quiere encontrar la ecuacion correspondiente.',
        step1: 'Leer el punto mas alto y el mas bajo: $y_{\\max} = 3$ y $y_{\\min} = -3$. La amplitud es la mitad de la diferencia — la ola oscila 3 unidades hacia arriba y abajo.',
        step2: 'Leer el periodo: un ciclo completo dura $4\\pi$ unidades. De ahi calculamos $b$ con la formula $b = \\frac{2\\pi}{T}$ — lo que da $0{,}5$.',
        step3: 'Armar la ecuacion: como la linea media esta en $y = 0$ ($d = 0$) y no se observa desfase ($c = 0$), la funcion es simplemente:',
        mia_comment: 'Amplitud 3, periodo $4\\pi$ — con eso las olas del puerto se mecen bien lentamente. Para olas mas rapidas simplemente aumento $b$!',
      },
      ferris_wheel: {
        title: 'Modelar una noria',
        context: 'Una noria de 60 m de diametro completa una vuelta cada 10 minutos. La gondola mas baja esta a 5 m del suelo.',
        step1: 'Determinar la amplitud: el radio es la mitad de la altura, asi que $A = 30\\,\\text{m}$. La linea media esta en $d = 5 + 30 = 35\\,\\text{m}$ (suelo + radio).',
        step2: 'El periodo es una vuelta completa: $T = 10\\,\\text{min}$. De ahi $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Considerar el punto de inicio: empezar abajo significa desplazar el seno por $-\\frac{\\pi}{2}$ (el seno normalmente empieza en el medio, no abajo).',
        step4: 'Comprobacion: despues de 2,5 minutos (cuarto de vuelta) la gondola deberia estar a media altura. Sustituir: $\\sin(0) = 0$, asi $h = 35\\,\\text{m}$. Correcto!',
        mia_comment: 'Asi funciona tambien el ciclo dia-noche en Hafenlichter: seno con $T = 24$ (un dia de juego) y desplazamiento para que a medianoche sea mas oscuro.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Tu latido cardiaco',
        desc: 'Tu corazon late unas 72 veces por minuto — son 1,2 latidos por segundo. Las senales electricas de tu corazon (ECG) muestran una curva periodica. Los medicos leen la amplitud y la frecuencia para detectar problemas cardiacos.',
      },
      tides: {
        title: 'Marea alta y baja',
        desc: 'En el puerto de Hamburgo el nivel del agua oscila cada 12,4 horas entre marea alta y baja. Es una funcion sinusoidal casi perfecta — causada por la fuerza de atraccion de la Luna.',
      },
      temperature: {
        title: 'Temperatura anual',
        desc: 'La temperatura media a lo largo de un ano sigue aproximadamente una curva sinusoidal: calida en verano, fria en invierno, con un periodo de 365 dias. Los climatologos usan este modelo como base para predicciones.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Confundir periodo y frecuencia',
        correct: 'La frecuencia es el inverso del periodo',
        why: 'Si el periodo es $T = 2\\,\\text{s}$, oscila una vez cada 2 segundos. La frecuencia es entonces $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — no $2\\,\\text{Hz}$! Frecuencia = "cuantas veces por segundo?", periodo = "cuanto dura un ciclo?"',
        mia_warning: 'Este error hizo que la respiracion de Lumi fuera el doble de rapida — parecia que acababa de correr un sprint!',
      },
      b_value: {
        wrong: 'Igualar $b$ con el periodo',
        correct: 'Convertir $b$ y $T$ con la formula',
        why: '$b$ NO es el periodo, sino que se relaciona con el a traves de $T = \\frac{2\\pi}{b}$. Si el periodo es $4\\pi$, entonces $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — no $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Hafenlichter funciona — pero tiene tirones. Mia abre el monitor de rendimiento y ve: en algunas escenas la tasa de fotogramas cae a 15 FPS. "Donde exactamente se vuelve lento?", pregunta Tim. "No necesito el promedio de toda la escena, sino el punto exacto donde el rendimiento se desploma." Jule sonrie: "Esa es exactamente la pregunta que llevo a la invencion del calculo diferencial — la tasa de cambio instantanea."',
      challenge: 'Encontrar el punto exacto donde la tasa de fotogramas se desploma — no solo el promedio.',
      outro: 'Mia ha encontrado el punto critico: exactamente en el fotograma 847 el tiempo de renderizado explota porque ahi se generan 200 particulas simultaneamente. "Sin la tasa de cambio instantanea habria buscado eternamente", dice. Tim asiente: "Newton habria hecho lo mismo — solo que sin monitor de rendimiento."',
    },
    objectives: {
      average_rate: 'Calcular e interpretar la tasa de cambio media (pendiente de la secante)',
      instantaneous_rate: 'Comprender la tasa de cambio instantanea como limite',
      limit_concept: 'Seguir la transicion de la secante a la tangente',
      derivative_notation: 'Conocer y aplicar las diferentes notaciones de la derivada',
    },
    explanation: {
      intro: 'Imagina que vas en bicicleta a la escuela. Tu velocimetro marca 20 km/h — esa es tu velocidad instantanea. Pero como se calcula? Si dices "Recorri 10 km en 30 minutos", eso es un promedio. La velocidad instantanea en un punto determinado es algo diferente — y de eso exactamente trata el calculo diferencial.',
      secant_to_tangent: 'La idea es genialmente simple: calcula la pendiente media entre dos puntos, y luego acerca los puntos cada vez mas. En el caso limite — cuando la distancia tiende a cero — obtienes la pendiente en un unico punto. Esa es la derivada:',
      mia_tip: 'La tasa de fotogramas promedio en 10 segundos no me dice nada. Necesito la tasa instantanea en el fotograma 847! Igual que con el velocimetro: no muestra el promedio de todo el viaje, sino lo rapido que vas AHORA.',
      derivative_meaning: 'La derivada $f\'(x_0)$ tiene un significado claro: da la pendiente de la tangente a la grafica en el punto $x_0$. Si $f\'(x_0) > 0$, la funcion crece ahi. Si $f\'(x_0) < 0$, decrece. Si $f\'(x_0) = 0$, la funcion tiene ahi (posiblemente) un maximo o minimo. Existen diferentes notaciones:',
      geometric_interpretation: 'Geometricamente ocurre lo siguiente: la secante a traves de dos puntos de la grafica gira cuando los puntos se acercan. En el caso limite, la secante se convierte en tangente — una recta que "toca" la grafica en exactamente un punto. La pendiente de esta tangente es la derivada.',
    },
    concepts: {
      difference_quotient: {
        title: 'Cociente de diferencias',
        desc: 'La tasa de cambio media entre dos puntos. Calcula la pendiente de la secante — una recta que corta la grafica en dos puntos.',
      },
      differential_quotient: {
        title: 'Cociente diferencial (derivada)',
        desc: 'La tasa de cambio instantanea en un punto. Surge cuando $h$ en el cociente de diferencias tiende a cero. Da la pendiente de la tangente.',
      },
      derivative_notation: {
        title: 'Notaciones de la derivada',
        desc: 'Hay tres notaciones comunes: $f\'(x)$ (Lagrange, la mas frecuente en la escuela), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, enfatiza el caracter de fraccion) y $\\dot{y}$ (Newton, sobre todo en fisica para derivadas temporales).',
      },
    },
    examples: {
      average_speed: {
        title: 'Velocidad media',
        context: 'Una pelota rueda por una rampa. La distancia depende cuadraticamente del tiempo.',
        step1: 'Dada la funcion posicion-tiempo. Despues de 2 segundos la pelota ha recorrido 2 m, despues de 4 segundos 8 m.',
        step2: 'Velocidad media entre $t = 2$ y $t = 4$: dividimos el cambio de distancia entre el cambio de tiempo. Resulta $3\\,\\text{m/s}$ en promedio.',
        step3: 'Ahora acortamos el intervalo: entre $t = 2$ y $t = 2{,}1$ resulta $2{,}05\\,\\text{m/s}$. Cuanto mas corto el intervalo, mas nos acercamos a la velocidad instantanea en $t = 2$.',
        mia_comment: 'Asi funciona exactamente mi monitor de rendimiento: mide la tasa de fotogramas en intervalos cada vez mas cortos hasta encontrar el punto exacto donde falla.',
      },
      instantaneous_rate: {
        title: 'Calcular la tasa de cambio instantanea',
        context: 'Determina la derivada de $f(x) = x^2$ en el punto $x_0 = 3$.',
        step1: 'Sustituimos $f(x) = x^2$ y $x_0 = 3$ en el cociente de diferencias. Buscado: que pasa cuando $h$ tiende a 0?',
        step2: 'Calcular el numerador: $(3+h)^2 = 9 + 6h + h^2$. Menos $f(3) = 9$ da $6h + h^2$ en el numerador.',
        step3: 'Simplificar por $h$ (podemos porque $h \\neq 0$ en el proceso de limite): queda $6 + h$.',
        step4: 'Formar el limite: para $h \\to 0$, $6 + h$ se convierte en $6$. La pendiente de la tangente en $x = 3$ es exactamente $6$.',
        mia_comment: 'La tangente en $x = 3$ tiene pendiente 6. Si hago esto para cada punto, obtengo la funcion derivada $f\'(x) = 2x$. En $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Coincide!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Radares y velocidad',
        desc: 'Un radar no mide tu velocidad instantanea, sino tu velocidad media en un tramo corto (control de tramo: a lo largo de varios kilometros). Cuanto mas corto el tramo de medicion, mas cerca del valor instantaneo.',
      },
      stock_trends: {
        title: 'Cotizaciones bursatiles y tendencias',
        desc: 'Cuando una accion "sube", los analistas se refieren a la derivada positiva de la cotizacion. La pendiente de la tangente al grafico de cotizacion muestra la tendencia: positiva = tendencia alcista, negativa = tendencia bajista, cero = punto de inflexion.',
      },
      speedometer: {
        title: 'Velocimetro del coche',
        desc: 'Tu velocimetro muestra la velocidad instantanea — matematicamente la derivada de la funcion posicion respecto al tiempo. Los dispositivos GPS la calculan como limite de intervalos de tiempo muy cortos.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Promedio = valor instantaneo',
        correct: 'Distinguir entre promedio y valor instantaneo',
        why: 'La tasa de cambio media en un intervalo $[1;\\,5]$ NO es igual a la tasa de cambio instantanea en $x = 3$ (el punto medio). Eso solo vale para funciones lineales! Para graficas curvas, ambos valores difieren.',
        mia_warning: 'Primero calcule la tasa de fotogramas promedio y pense que todo estaba bien. Pero localmente habia caidas masivas! El promedio ocultaba el problema.',
      },
      secant_tangent: {
        wrong: 'Pendiente de la secante = pendiente de la tangente',
        correct: 'La tangente es el caso limite de la secante',
        why: 'La secante corta la grafica en dos puntos, la tangente la toca en uno. Solo cuando los dos puntos se juntan ($h \\to 0$), la secante se convierte en tangente. Sin limite es solo una aproximacion.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Hafenlichter necesita un sistema de balanceo: a que velocidad debe subir Lumi de nivel? Que tan fuertes se vuelven los enemigos? Cuanto cuesta una mejora? "Si todo crece linealmente, el juego se vuelve aburrido", dice Jule. Tim anade: "Y si todo crece exponencialmente, se vuelve injusto." Mia se da cuenta: necesita conocer diferentes tipos de crecimiento y usarlos de forma dirigida.',
      challenge: 'Encontrar las curvas de crecimiento correctas para el balanceo del juego — lineal, cuadratico, exponencial o logaritmico.',
      outro: 'El sistema de balanceo de Mia esta listo: la velocidad de movimiento crece linealmente, el dano por caida cuadraticamente, la experiencia requerida exponencialmente y la curva de aprendizaje logaritmicamente. "Cada curva tiene su lugar", dice satisfecha. El juego ahora se siente justo y emocionante — desde el nivel 1 hasta el jefe final.',
    },
    objectives: {
      identify_types: 'Reconocer las cuatro grandes clases de funciones (lineal, cuadratica, exponencial, logaritmica) en ecuaciones y graficas',
      compare_growth: 'Comparar y ordenar el comportamiento de crecimiento de las clases de funciones',
      match_context: 'Elegir y justificar la clase de funcion adecuada para el contexto',
      graph_recognition: 'Asignar graficas a los tipos de funcion correctos',
    },
    explanation: {
      intro: 'En matematicas hay diferentes "familias" de funciones — cada una con su propio caracter. Algunas crecen uniformemente, otras cada vez mas rapido, y otras cada vez mas lentamente. Las cuatro clases mas importantes para el 10o grado son:',
      mia_tip: 'En el diseno de juegos uso cada clase de funcion para algo diferente: crecimiento lineal para cosas predecibles (velocidad de movimiento), cuadratico para cosas que se "aceleran" (dano por caida), exponencial para desafios (experiencia requerida) y logaritmico para efectos de aprendizaje (progresion de habilidad).',
      growth_comparison: 'Decisivo es: a que velocidad crece cada clase de funcion para valores grandes de $x$? El orden es siempre el mismo — sin importar los numeros concretos que uses:',
      choosing_functions: 'Elegir la funcion correcta para un problema es una competencia clave. Preguntate: es el cambio constante (lineal)? Se acelera uniformemente (cuadratico)? El valor se duplica en intervalos iguales (exponencial)? El incremento es cada vez menor (logaritmico)?',
    },
    concepts: {
      linear: {
        title: 'Funciones lineales',
        desc: 'Tasa de cambio constante: en cada paso se anade la misma cantidad. La grafica es una recta. La pendiente $m$ y la ordenada al origen $b$ se pueden leer directamente.',
      },
      quadratic: {
        title: 'Funciones cuadraticas',
        desc: 'La propia tasa de cambio cambia linealmente — se anade cada vez mas rapido (o menos). La grafica es una parabola con vertice.',
      },
      exponential: {
        title: 'Funciones exponenciales',
        desc: 'Crecimiento por un porcentaje fijo: cuanto mas hay, mas se anade. Duplicacion en intervalos iguales de tiempo. A largo plazo crece mas rapido que cualquier funcion potencial.',
      },
      logarithmic: {
        title: 'Funciones logaritmicas',
        desc: 'La funcion inversa de la funcion exponencial. Crece rapido al principio, luego cada vez mas lentamente. Modela efectos de saturacion y curvas de aprendizaje.',
      },
    },
    examples: {
      identify_type: {
        title: 'Reconocer el tipo de funcion en tablas de valores',
        context: 'Se presentan tres conjuntos de datos. Que tipo corresponde a cada uno?',
        step1: 'Probar linealidad: calcula las diferencias de valores $y$ consecutivos. Si son constantes, la funcion es lineal.',
        step2: 'Probar exponencial: calcula los cocientes de valores $y$ consecutivos. Si son constantes, la funcion es exponencial.',
        step3: 'Probar cuadratica: calcula las segundas diferencias (diferencias de las diferencias). Si son constantes, la funcion es cuadratica.',
        mia_comment: 'Asi es exactamente como pruebo mi balanceo: simulo 100 rondas y compruebo si los valores siguen el tipo de crecimiento deseado. Si las segundas diferencias se desvian, algo no esta bien.',
      },
      game_mechanics: {
        title: 'Modelar mecanicas de juego',
        context: 'Cuatro mecanicas de juego diferentes en Hafenlichter necesitan funciones distintas.',
        step1: 'Velocidad de movimiento: sube la misma cantidad por nivel ($+5$ por nivel). Es un cambio constante — lineal. Justo y predecible.',
        step2: 'Dano por caida: desde 2 m de altura dano leve, desde 10 m mucho mas. El aumento del dano se acelera — cuadratico. Tiene sentido fisico (energia = $\\frac{1}{2}mv^2$).',
        step3: 'Experiencia requerida por nivel: nivel 2 necesita 150 XP, nivel 3 necesita 225 XP, nivel 4 necesita 337 XP. El requerimiento crece siempre un 50% — exponencial. Asi los niveles superiores son un verdadero desafio.',
        step4: 'Curva de aprendizaje (habilidad): al principio se aprende rapido, luego cada vez mas lento. Despues de $t$ horas de juego se domina $20 \\cdot \\log_2(t+1)$ porciento de las mecanicas — logaritmico.',
        mia_comment: 'Ese es el nucleo del diseno de juegos: la curva correcta para la mecanica correcta. XP lineal seria aburrido, dano por caida exponencial seria injusto. Cada tipo de funcion tiene su punto dulce!',
      },
    },
    realworld: {
      app_users: {
        title: 'Descargas virales de apps',
        desc: 'Si cada usuario invita a dos amigos y estos a otros dos, las descargas se duplican. Al principio apenas visible, luego explosivo — tipicamente exponencial. TikTok, Instagram y WhatsApp crecieron asi.',
      },
      salary: {
        title: 'Paga y salario',
        desc: 'Tu paga sube (ojala) cada ano la misma cantidad — crecimiento lineal. Mas tarde en el trabajo tu salario suele subir de forma similar: una cantidad fija por ano de experiencia.',
      },
      learning_curve: {
        title: 'Progreso de aprendizaje',
        desc: 'Nuevo instrumento, nuevo deporte, nuevo idioma: al principio haces enormes progresos, luego cada vez es mas dificil mejorar. Esa es una curva de saturacion logaritmica — y completamente normal!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Exponencial" y "cuadratico" son lo mismo',
        correct: 'El exponencial crece MUCHO mas rapido que el cuadratico',
        why: 'Con numeros pequenos $x^2$ y $2^x$ se parecen: $4^2 = 16$ y $2^4 = 16$. Pero con $x = 10$: $10^2 = 100$ frente a $2^{10} = 1024$. El crecimiento exponencial supera a cualquier funcion potencial!',
        mia_warning: 'Al principio habia hecho la experiencia requerida cuadratica en lugar de exponencial. Resultado: a partir del nivel 20 el juego era demasiado facil porque los jugadores acumulaban XP mas rapido de lo que subia el requerimiento.',
      },
      all_curves_linear: {
        wrong: 'Todo crecimiento es lineal',
        correct: 'Primero verificar el tipo de crecimiento',
        why: 'Solo porque algo se "duplica" no significa que sea lineal! "Cada 3 dias el doble de seguidores" es exponencial, no lineal. Lineal seria: "cada dia 100 nuevos seguidores". La diferencia: aumento constante (lineal) vs. factor constante (exponencial).',
      },
    },
  },
};
