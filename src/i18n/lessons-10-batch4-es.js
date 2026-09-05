export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'Mia está montando el nivel 4 de Luces del Puerto: Lumi tiene que saltar sobre una plataforma que se desplaza lenta y uniformemente hacia la derecha. «El movimiento es lineal», explica Tim. «60 píxeles por segundo, y ya está.» Mia lo teclea y se da cuenta enseguida: esto es una ecuación de la recta de lo más corriente. Posición inicial más velocidad por tiempo. Justo lo que se llevó de 3.º de ESO, solo que ahora más formal: $f(x) = m \\cdot x + b$.',
      challenge: 'Mia tiene que ajustar la curva de salto de Lumi para que aterrice exactamente sobre la plataforma en movimiento. Pendiente del desplazamiento de la plataforma y punto de corte con la trayectoria de Lumi: todo lineal.',
      outro: 'Una función lineal tiene dos mandos: $m$ determina lo empinada que es, $b$ la desplaza hacia arriba o hacia abajo. Ahora Mia entiende por qué la necesita una y otra vez: plataformas, consumo de energía, barras de vida. Allí donde algo aumenta o disminuye una cantidad constante «por paso», la ecuación de la recta es la herramienta correcta.',
    },
    objectives: {
      recognize: 'Reconocer funciones lineales por su expresión y por su gráfica',
      slope_intercept: 'Leer la pendiente $m$ y la ordenada en el origen $b$ en la forma explícita $f(x) = mx + b$',
      point_slope: 'Plantear la recta a partir de un punto y una pendiente con la forma punto-pendiente',
      two_points: 'Determinar la ecuación de la recta a partir de dos puntos: calcular la pendiente y luego $b$',
    },
    explanation: {
      intro: 'Una función lineal describe una relación uniforme: cuando $x$ varía una unidad, $y$ varía siempre la misma cantidad. En la gráfica eso produce una recta. La forma general es:',
      slope: 'La pendiente $m$ mide exactamente esa «cantidad por paso». La obtienes a partir de dos puntos cualesquiera de la recta: diferencia de alturas dividida entre diferencia de anchuras:',
      mia_tip: 'Pienso en la plataforma de Lumi: se desplaza exactamente 60 píxeles por segundo. Esa es mi $m = 60$ píxeles/segundo. Si Lumi empieza en $b = 200$, la posición tras $t$ segundos es simplemente $f(t) = 60t + 200$. ¡Una función lineal en estado salvaje!',
      intercept: 'La ordenada en el origen $b$ es el valor en el que la recta corta el eje vertical. Lo lees directamente en la gráfica, o sustituyes $x = 0$ en la expresión:',
      point_slope: 'Si conoces un punto $P(x_0 \\mid y_0)$ y la pendiente $m$, lo más rápido es escribir la recta en forma punto-pendiente. Desde ahí despejas $y$ y obtienes la forma explícita:',
    },
    concepts: {
      normal_form: {
        title: 'Forma explícita $f(x) = mx + b$',
        desc: 'La notación estándar. $m$ es la pendiente, $b$ la ordenada en el origen. Puedes leer ambos parámetros directamente en la expresión, y los dos tienen un significado geométrico claro.',
      },
      slope: {
        title: 'Pendiente $m$',
        desc: 'Variación de $y$ por unidad de $x$. A partir de dos puntos: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Positiva = creciente, negativa = decreciente, $m = 0$ = recta horizontal.',
      },
      point_slope: {
        title: 'Forma punto-pendiente',
        desc: 'Cuando se conocen un punto $(x_0 \\mid y_0)$ y la pendiente $m$: $y - y_0 = m(x - x_0)$. Práctica, porque no tienes que calcular $b$ aparte: simplemente despejas $y$.',
      },
      parallel_perpendicular: {
        title: 'Paralelas y perpendiculares',
        desc: 'Dos rectas son paralelas si tienen la misma pendiente ($m_g = m_h$). Son perpendiculares entre sí cuando el producto de las pendientes vale $-1$ ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Ecuación de la recta a partir de dos puntos',
        context: 'Mia tiene dos puntos de observación de la trayectoria de la plataforma de Lumi: $P_1(2 \\mid 1)$ y $P_2(5 \\mid 7)$. ¿Qué ecuación de la recta describe ese movimiento?',
        step1: 'Escribir los dos puntos dados:',
        step2: 'Calcular la pendiente: diferencia de los valores y dividida entre diferencia de los valores x:',
        step3: 'Plantear la forma punto-pendiente con $P_1(2 \\mid 1)$ y $m = 2$, y después despejar $y$:',
        step4: 'Ecuación de la recta terminada, en forma explícita:',
        mia_comment: 'Bonito procedimiento: dos puntos → pendiente → sustituir → desarrollar. Si más adelante tengo un tercer punto, puedo comprobar con él si mi ecuación es correcta.',
      },
      intersection: {
        title: 'Punto de corte de dos rectas',
        context: 'La plataforma se mueve a lo largo de $g\\colon y = 2x - 3$, y la trayectoria de salto de Lumi a lo largo de $h\\colon y = -x + 6$. ¿Dónde se encuentran?',
        step1: 'Anotar ambas ecuaciones: la misma variable $x$, la misma variable $y$:',
        step2: 'En el punto de corte ambos valores de $y$ coinciden. Por tanto: igualar los miembros de la derecha:',
        step3: 'Despejar $x$: los dos términos en $x$ a un lado, las constantes al otro:',
        step4: 'Sustituir el valor de $x$ en una de las dos ecuaciones para obtener el valor de $y$. Punto de corte $S$:',
        mia_comment: 'En el juego, ese punto de corte es exactamente el fotograma del impacto. Si conozco el instante $x = 3$, sé en qué fotograma debo lanzar la colisión.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Tarifa móvil con cuota base',
        desc: 'Ejemplo clásico: 9,99 € de cuota mensual más 10 céntimos por minuto. El coste en función del tiempo de conversación es una recta perfecta: $b$ es la cuota base, $m$ el precio por minuto.',
      },
      taxi: {
        title: 'Coste de un taxi',
        desc: '4 € de bajada de bandera al subir, luego 2,50 € por kilómetro. El coste total crece linealmente con la distancia recorrida. Se lee en cualquier recibo.',
      },
      constant_speed: {
        title: 'Movimiento a velocidad constante',
        desc: 'Un patinador arranca con velocidad uniforme $v$ y parte de $s_0$. La distancia recorrida tras $t$ segundos: $s(t) = v \\cdot t + s_0$. Pura ecuación de la recta: solo cambian los nombres de las variables.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Pendiente del revés: $\\Delta x / \\Delta y$ en lugar de $\\Delta y / \\Delta x$',
        correct: 'Primero la altura (y), luego la anchura (x): $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'La pendiente describe «cuánta altura por paso», es decir, la variación de $y$ en el numerador y la de $x$ en el denominador. Si le das la vuelta a la fracción obtienes el inverso: de $m = 2$ sale erróneamente $0{,}5$.',
        mia_warning: 'Mi truco: pienso en una escalera. Altura del escalón dividida entre anchura del escalón. La altura siempre va arriba en la fracción, igual que en la escalera.',
      },
      intercept_zero: {
        wrong: 'Confundir la ordenada en el origen con el cero de la función',
        correct: 'Cero de la función: haz $f(x) = 0$ y despeja $x$',
        why: 'La ordenada en el origen $b$ es el valor de $y$ cuando $x = 0$, es decir, un valor de $y$. El cero de la función es el valor de $x$ para el que $f(x) = 0$. En $f(x) = 2x + 5$ se tiene $b = 5$, pero el cero está en $x = -2{,}5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'Mia está diseñando un jefe giratorio para Luces del Puerto. El jefe es un molino en remolino con tres brazos, y Lumi tiene que saltar por los huecos. «La hitbox tiene que ser circular», dice Tim. «Si no, queda raro cuando Lumi roza un brazo que ni siquiera está cerca.» Mia necesita la longitud, el área y el ángulo de cada brazo: geometría del círculo en estado puro.',
      challenge: 'Mia tiene que programar hitboxes redondas. Además, la longitud de arco que cada brazo barre por segundo, porque si no la velocidad de giro no cuadra.',
      outro: 'Con $U = 2\\pi r$ y $A = \\pi r^2$, Mia tiene las herramientas estándar. Y con los radianes convierte los ángulos de giro directamente en distancias recorridas, mucho más rápido que dando el rodeo por los $360°$. «El radián es el lenguaje de programación de los giros», se apunta.',
    },
    objectives: {
      umfang_flaeche: 'Calcular la longitud y el área de un círculo a partir del radio o del diámetro',
      bogenmass: 'Convertir ángulos con seguridad entre grados y radianes',
      sektor: 'Calcular el área y la longitud de arco de un sector con un ángulo central dado',
      bogenlaenge: 'Determinar longitudes de arco de la circunferencia completa y del sector en ambas unidades angulares',
    },
    explanation: {
      intro: 'El círculo es el conjunto de todos los puntos que están a la misma distancia $r$ del centro. De esa única medida $r$ se derivan la longitud y el área, ambas con la célebre constante $\\pi \\approx 3{,}14159$:',
      bogenmass: 'En lugar de medir los ángulos en grados, también se puede usar la longitud de arco correspondiente en la circunferencia unidad: eso se llama radián. Una circunferencia completa mide $2\\pi r$, así que $360°$ equivale exactamente a $2\\pi$. Para cualquier ángulo $\\alpha$ en radianes se cumple:',
      mia_tip: 'Al principio los radianes me parecieron raros. Pero en el código son mucho más prácticos: cuando escribo Math.cos(angle) en JavaScript, la función espera radianes, no grados. Quien lo olvida, de repente gira los sprites en la dirección equivocada.',
      umrechnung: 'La conversión se hace con la regla de proporción «$360° = 2\\pi\\,\\text{rad}$». De ahí sale un factor fijo con el que transformas grados y radianes entre sí:',
      sektor: 'Un sector es una «porción de tarta» del círculo. Su parte del área y de la longitud coincide exactamente con la parte que su ángulo central ocupa del ángulo completo. Con el ángulo $\\alpha$ (en grados o radianes) se cumple:',
    },
    concepts: {
      umfang: {
        title: 'Longitud $U$',
        desc: 'La longitud de la circunferencia. Depende linealmente del radio: radio doble significa longitud doble. Con el diámetro $d = 2r$ suele escribirse también $U = \\pi d$.',
      },
      flaeche: {
        title: 'Área $A$',
        desc: 'La superficie encerrada. Depende del cuadrado del radio: radio doble significa área cuádruple. Importante para todos los problemas de «cuánto material» y «cuánto contenido».',
      },
      bogenmass: {
        title: 'Radián',
        desc: 'Unidad angular que mide el ángulo como longitud de arco en la circunferencia unidad. Círculo completo = $2\\pi$, semicírculo = $\\pi$, ángulo recto = $\\frac{\\pi}{2}$. Estándar en análisis y en programación.',
      },
      sektor: {
        title: 'Sector circular',
        desc: 'Una porción de tarta: dos radios más el arco que queda entre ellos. Área y longitud de arco son magnitudes proporcionales: el ángulo central como fracción de $360°$ o de $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Longitud y área a partir del radio',
        context: 'El jefe giratorio de Mia tiene un radio de $5\\,\\text{cm}$ en pantalla. ¿Cuánto miden su longitud y su área?',
        step1: 'El radio está dado:',
        step2: 'Sustituir en la longitud: $U = 2\\pi r$ con $r = 5$. Primero exacto con $\\pi$, luego redondeado:',
        step3: 'Sustituir en el área: $A = \\pi r^2$. Ojo: primero elevar $r$ al cuadrado y después multiplicar por $\\pi$:',
        mia_comment: 'Con $r = 5$, longitud ($\\approx 31$) y área ($\\approx 79$) son números bien distintos. Si duplico el radio, la longitud se duplica, pero el área se multiplica por cuatro. Ese es el efecto del cuadrado.',
      },
      sektor: {
        title: 'Área del sector y longitud de arco',
        context: 'Un brazo del jefe barre un sector de radio $12\\,\\text{cm}$ y ángulo central $60°$. ¿Qué área y qué longitud de arco resultan?',
        step1: 'Están dados el radio y el ángulo en grados:',
        step2: 'Determinar la parte del sector respecto al área total: $\\frac{60°}{360°} = \\frac{1}{6}$:',
        step3: 'Calcular el área del sector, exacta con $\\pi$ y luego redondeada:',
        step4: 'Longitud de arco: la misma parte $\\frac{1}{6}$ de la longitud $2\\pi r$:',
        mia_comment: 'El truco es siempre el mismo: parte = $\\frac{\\alpha°}{360°}$. La multiplico por la magnitud del círculo completo (área o longitud). Funciona igual para $30°$ que para $137{,}5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'Una pizza en 8 porciones',
        desc: 'Una pizza de radio $r$ se corta en 8 porciones iguales. Cada porción es un sector de $\\frac{360°}{8} = 45°$ y área $\\frac{\\pi r^2}{8}$. Aplicación concreta en cualquier cocina.',
      },
      uhr: {
        title: 'Las manecillas del reloj como sectores',
        desc: 'En una hora, la aguja horaria barre $30°$ ($\\frac{360°}{12}$); en un minuto, el minutero barre $6°$ ($\\frac{360°}{60}$). Pura matemática de sectores, útil también para problemas de ángulos con relojes.',
      },
      riesenrad: {
        title: 'Longitud de arco de una noria',
        desc: 'Una cabina de la noria de Hamburgo, de radio $r$, recorre en el tiempo $t$ de una vuelta completa $T$ la longitud de arco $b = 2\\pi r \\cdot \\frac{t}{T}$. Con eso se puede calcular también la velocidad de la cabina.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'Sustituir grados en fórmulas pensadas para radianes',
        correct: 'Antes de $b = \\alpha \\cdot r$, convertir primero los grados a radianes',
        why: 'La fórmula $b = \\alpha \\cdot r$ solo funciona si $\\alpha$ está en radianes. Con $\\alpha = 60°$, escribir $b = 60 \\cdot r$ es un error garrafal: lo correcto sería $\\alpha = \\frac{\\pi}{3} \\approx 1{,}047$, o sea $b \\approx 1{,}047 \\cdot r$.',
        mia_warning: 'Justo eso me sacó de quicio al girar los sprites: puse 60 en lugar de 1,047 y el jefe giró 57 veces más rápido, ¡y desapareció de la pantalla al instante!',
      },
      area_vs_circumference: {
        wrong: 'Calcular el área con la fórmula de la longitud ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$: cuadrática en $r$',
        why: 'Longitud y área son magnitudes distintas con unidades distintas ($\\text{cm}$ frente a $\\text{cm}^2$). $2\\pi r$ es lineal, $\\pi r^2$ cuadrática. Si se confunden, todos los cálculos posteriores quedan rotos, y la unidad lo delata al instante.',
      },
    },
  },
};
