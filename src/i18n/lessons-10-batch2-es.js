export const batch2 = {
  '10-koerper': {
    story: {
      intro: 'Mia mira fijamente su pantalla. La arquitectura de niveles de "Hafenlichter" necesita objetos 3D — almacenes, gruas, contenedores. Tim ha modelado los meshes, pero Lumi pregunta: "Cuanta memoria necesita cada hitbox?" Mia sonrie: "Para eso necesitamos formulas de volumen."',
      challenge: 'Calcula volumenes y superficies de piramides, conos y esferas. Ayuda a Mia a construir las hitboxes 3D perfectas para su barrio portuario.',
      outro: 'Los cuerpos 3D estan calculados, las hitboxes encajan. Tim prueba el nivel de la grua y exclama: "Las colisiones por fin se sienten realistas!" Mia se reclina — la geometria mejora los juegos.',
    },
    objectives: {
      volume_pyramid: 'Calcular el volumen de piramides con la formula del tercio',
      volume_cone_sphere: 'Determinar con seguridad los volumenes de conos y esferas',
      surface_area: 'Aplicar formulas de superficie e interpretar los resultados',
      apply_3d: 'Transferir calculos de cuerpos a problemas cotidianos y diseno de juegos',
    },
    explanation: {
      intro: 'Los cuerpos tridimensionales tienen volumen (contenido espacial) y superficie. En piramides y conos hay un factor decisivo en la formula: el factor de un tercio $\\frac{1}{3}$. Se debe a que estos cuerpos "terminan en punta" — solo llenan un tercio del prisma o cilindro que los contiene.',
      cone: 'Un cono es como una "piramide redonda" — su base es un circulo con radio $r$. La formula tiene la misma estructura: un tercio por area de base por altura, solo que el area de base es $\\pi r^2$.',
      mia_tip: 'Mia: "Me lo recuerdo asi: la piramide y el cono son los hermanos modestos del prisma y el cilindro — solo ocupan un tercio del espacio!"',
      sphere: 'La esfera es el caso especial: no tiene base ni altura en el sentido clasico. Su volumen depende unicamente del radio. Arquimedes demostro que una esfera llena exactamente $\\frac{2}{3}$ del cilindro que la contiene — de ahi se deduce la formula.',
    },
    concepts: {
      pyramid: {
        title: 'Volumen de piramide',
        desc: 'Una piramide tiene un tercio del volumen de un prisma con la misma base y altura. La base puede ser un rectangulo, triangulo o cualquier poligono.',
      },
      cone: {
        title: 'Volumen del cono',
        desc: 'El cono se comporta respecto al cilindro como la piramide respecto al prisma: llena exactamente un tercio. Su base circular lo hace especialmente simetrico.',
      },
      sphere: {
        title: 'Volumen de la esfera',
        desc: 'La esfera se describe completamente por su radio. El $\\frac{4}{3}$ en la formula proviene de la integracion — o de la genial demostracion de Arquimedes.',
      },
    },
    examples: {
      icecream: {
        title: 'Calcular un cucurucho de helado',
        context: 'Un cucurucho tiene forma de cono con radio $r = 3$ cm y altura $h = 12$ cm. Cuanto helado cabe?',
        step1: 'Identificar datos: el cucurucho es un cono con $r = 3$ cm y $h = 12$ cm.',
        step2: 'Aplicar la formula del cono: sustituimos en $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ y calculamos primero el parentesis.',
        step3: 'Resultado: el cucurucho cabe aproximadamente $113{,}1\\,\\text{cm}^3$ de helado — algo mas de un decilitro.',
        mia_comment: 'Mia: "Vaya, un cucurucho no cabe tanto! Por eso siempre apilan una bola encima."',
      },
      hitbox: {
        title: 'Hitbox esferica',
        context: 'En "Hafenlichter" una boya debe tener una hitbox esferica con volumen $V = 904{,}8\\,\\text{cm}^3$. Cual debe ser el radio?',
        step1: 'Dado: el volumen de la esfera es $V = 904{,}8\\,\\text{cm}^3$. Buscado: el radio $r$.',
        step2: 'Despejar la formula: resolvemos $V = \\frac{4}{3} \\pi r^3$ para $r^3$ dividiendo entre $\\frac{4}{3}\\pi$.',
        step3: 'Calcular: $r^3 \\approx 215{,}9$ — ahora extraemos la raiz cubica.',
        step4: 'Resultado: $r \\approx 6{,}0$ cm. La hitbox necesita un radio de 6 cm.',
        mia_comment: 'Mia: "Calcular al reves es la rutina en el diseno de juegos — sabes lo que quieres y debes encontrar los parametros."',
      },
    },
    realworld: {
      packaging: {
        title: 'Diseno de envases',
        desc: 'Latas de bebidas, conservas, botellas — en todas hay calculo de cilindros. Los fabricantes optimizan la relacion entre volumen y consumo de material para ahorrar costes.',
      },
      icecream: {
        title: 'Matematicas del helado',
        desc: 'Por que una bola de helado "grande" parece mucho mayor? Porque el volumen crece con $r^3$! Doble radio = ocho veces el volumen. Eso tambien explica por que los menus XXL son tan rentables.',
      },
      pizza: {
        title: 'Comparacion de pizzas',
        desc: 'Una pizza de 30 cm tiene mas superficie que dos pizzas de 20 cm juntas! $\\pi \\cdot 15^2 = 706{,}9$ vs. $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. El tamano vale la pena.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Olvidar el factor $\\frac{1}{3}$',
        correct: 'En conos y piramides SIEMPRE $\\frac{1}{3}$ delante',
        why: 'Conos y piramides llenan solo un tercio del cilindro o prisma que los contiene. Sin el factor calculas el volumen del cilindro entero — tres veces demasiado!',
        mia_warning: 'Mia: "Una vez calcule todas las hitboxes sin el tercio. Las boyas eran enormes y bloqueaban toda la darsena. Tim no se lo tomo bien."',
      },
      surface_volume: {
        wrong: 'Confundir las formulas de superficie y volumen de la esfera',
        correct: 'Volumen: $\\frac{4}{3}\\pi r^3$ — Superficie: $4\\pi r^2$',
        why: 'En el volumen aparece $r^3$ (cubico, contenido espacial), en la superficie $r^2$ (cuadratico, contenido de area). Fijate en el exponente — te dice que estas calculando.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro: 'Jule optimiza la memoria de "Hafenlichter". "Nuestras texturas consumen 2 elevado a 20 bytes — cuanto es eso realmente?" Tim calcula: "Espera, potencias puedo..." Mia se rie: "Entonces demuestra lo que sabes."',
      challenge: 'Domina las leyes de potencias: multiplica, eleva a potencia y simplifica potencias. Ayuda a Tim a calcular tamanos de memoria y tiempos de renderizado a toda velocidad.',
      outro: 'Tim domina las leyes de potencias. El calculo de memoria ahora toma segundos. "Las potencias son como trucos para numeros grandes", dice. Mia asiente: "Y para pequenos tambien — bienvenido a los exponentes negativos."',
    },
    objectives: {
      multiply_powers: 'Multiplicar y dividir potencias con la misma base',
      power_of_power: 'Simplificar potencia de potencia con la regla de multiplicacion',
      negative_exponents: 'Interpretar exponentes negativos como fracciones y convertirlos',
      apply_memory: 'Aplicar leyes de potencias a tamanos de memoria y notacion cientifica',
    },
    explanation: {
      intro: 'Las potencias son una abreviatura para multiplicacion repetida: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Cuando multiplicas dos potencias con la misma base, sumas los exponentes — porque simplemente alargas la cadena de multiplicaciones.',
      power_of_power: 'Que pasa cuando elevas una potencia a otra potencia? $(a^m)^n$ significa: multiplicas $a^m$ exactamente $n$ veces por si mismo. Eso da $m \\cdot n$ factores — es decir $a^{m \\cdot n}$. Los exponentes se multiplican.',
      mia_tip: 'Mia: "Misma base -> sumar exponentes. Potencia de potencia -> multiplicar exponentes. Bases diferentes -> calcular, no hay atajo!"',
      negative: 'Un exponente negativo invierte la potencia: $a^{-n} = \\frac{1}{a^n}$. No es una definicion arbitraria — sigue logicamente del patron: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Cada paso divide entre la base.',
    },
    concepts: {
      product_rule: {
        title: 'Regla del producto',
        desc: 'Misma base, diferentes exponentes? Al multiplicar se suman los exponentes, al dividir se restan. Esto SOLO funciona con la misma base!',
      },
      power_rule: {
        title: 'Regla de la potencia',
        desc: 'Una potencia se eleva a otra potencia? Entonces multiplica los exponentes. $(a^3)^4 = a^{12}$ — doce factores $a$ en total.',
      },
      negative_exp: {
        title: 'Exponente negativo',
        desc: 'Un signo negativo en el exponente significa "uno dividido entre". Asi los numeros grandes se hacen pequenos: $10^{-6}$ es una millonesima. Perfecto para microchips y milisegundos.',
      },
    },
    examples: {
      simplify: {
        title: 'Calcular memoria',
        context: 'Tim quiere saber: cuanto son $2^3 \\cdot 2^4$ bytes? En informatica este es un calculo tipico con potencias de dos.',
        step1: 'Aplicar la regla del producto: misma base $2$, asi que sumamos los exponentes: $3 + 4 = 7$.',
        step2: 'Calcular: $2^7 = 128$ bytes.',
        step3: 'Contextualizar: 128 bytes — casi 1 kilobyte (eso seria exactamente $2^{10} = 1024$).',
        mia_comment: 'Mia: "En informatica las potencias de dos estan en todas partes. RAM, texturas, profundidad de color — todo son potencias de 2!"',
      },
      negative: {
        title: 'Convertir milisegundos',
        context: 'Un fotograma de "Hafenlichter" se calcula en $10^{-3}$ segundos. Que significa eso en notacion decimal?',
        step1: 'Aplicar el exponente negativo: $10^{-3}$ significa $\\frac{1}{10^3}$.',
        step2: 'Calcular: $\\frac{1}{1000} = 0{,}001$ segundos.',
        step3: 'Contextualizar: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — un milisegundo. A 60 fps cada fotograma tiene unos 16 ms.',
        mia_comment: 'Mia: "Los exponentes negativos suenan intimidantes, pero simplemente significan: numeros pequenos. $10^{-3}$ = mili, $10^{-6}$ = micro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Almacenamiento digital',
        desc: 'Tu movil tiene 256 GB? Son $2^{38}$ bytes, mas de 274 mil millones de bytes. Cada duplicacion del almacenamiento es solo un +1 en el exponente — por eso la tecnologia crece tan rapido.',
      },
      richter: {
        title: 'Escala de Richter',
        desc: 'Un terremoto de magnitud 6 no es el doble de fuerte que magnitud 3 — sino mil veces mas! Cada nivel significa $10 \\times$ mas energia. Las potencias hacen tangible la diferencia.',
      },
      decibel: {
        title: 'Decibelios y volumen',
        desc: 'Auriculares a 100 dB son $10^{10}$ veces mas intensos que el umbral de audicion (0 dB). Cada +10 dB = diez veces mas intensidad. Tus oidos calculan logaritmicamente — es decir, con potencias!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Multiplicar bases en lugar de sumar exponentes',
        correct: 'La regla del producto SOLO vale para la misma base',
        why: 'En $2^3 \\cdot 3^2$ las bases son diferentes (2 y 3). Aqui no puedes aplicar ninguna regla de potencias — debes calcular por separado: $8 \\cdot 9 = 72$. Sumar los exponentes y multiplicar las bases es un error frecuente!',
        mia_warning: 'Mia: "Bases diferentes = no hay atajo. Punto. Una vez lo hice mal en el codigo y las texturas quedaron todas destrozadas."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "elevado a cero es cero"',
        correct: '$a^0 = 1$ para todo $a \\neq 0$',
        why: 'Sigue el patron: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — cada paso divide entre 2. Entonces $2^0 = 1$. Esto vale para TODA base (excepto 0). El cero es el elemento neutro de la suma, no de la multiplicacion.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro: 'Mia navega por la biblioteca de assets de "Hafenlichter". La Speicherstadt de Hamburgo tiene edificios de todos los tamanos — pero todos deben verse proporcionados. Lumi pregunta: "No podemos simplemente escalar todo?" Mia asiente: "Exacto. Eso es semejanza."',
      challenge: 'Comprende triangulos semejantes, factores de escala y el teorema de Tales. Ayuda a Mia a escalar proporcionalmente el barrio portuario.',
      outro: 'La Speicherstadt en "Hafenlichter" se ve fantastica — cada edificio es proporcional, cada puente encaja. Jule admira el resultado: "Como si fuera una maqueta real!" Mia sonrie: "Lo es. Matematicamente exacta."',
    },
    objectives: {
      similar_triangles: 'Reconocer triangulos semejantes y describir sus propiedades',
      scale_factor: 'Calcular y aplicar el factor de escala $k$',
      intercept_theorem: 'Aplicar el teorema de Tales a problemas geometricos',
      apply_scaling: 'Utilizar la semejanza en arquitectura, cartografia y diseno de juegos',
    },
    explanation: {
      intro: 'Dos figuras son semejantes cuando tienen la misma forma pero pueden tener diferente tamano. En triangulos basta con que todos los angulos coincidan — entonces automaticamente todas las proporciones de lados son iguales. La relacion entre imagen y original se llama factor de escala $k$.',
      scale_factor: 'El factor de escala $k$ te dice cuanto se ha ampliado o reducido. $k > 1$ significa ampliacion, $k < 1$ reduccion, $k = 1$ significa congruente (identico). Importante: $k$ se refiere a longitudes — las areas escalan con $k^2$, los volumenes con $k^3$!',
      mia_tip: 'Mia: "En la game engine trabajamos constantemente con factores de escala. Un sprite con scale 0.5 es la mitad de grande, scale 2.0 el doble. Exactamente como en geometria!"',
      intercept: 'El teorema de Tales describe lo que pasa cuando rectas paralelas son cortadas por dos rayos: los segmentos sobre los rayos son proporcionales. Asi puedes calcular distancias desconocidas sin tener que medirlo todo.',
    },
    concepts: {
      similar_triangles: {
        title: 'Triangulos semejantes',
        desc: 'Dos triangulos son semejantes cuando coinciden en todos los angulos. Entonces vale: todas las proporciones de lados son iguales. Se escribe $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Factor de escala',
        desc: 'El factor $k = \\frac{\\text{Imagen}}{\\text{Original}}$ describe la ampliacion o reduccion. $k = 2$ significa: todo el doble de grande. $k = 0{,}5$ significa: todo a la mitad.',
      },
      intercept_theorem: {
        title: 'Teorema de Tales',
        desc: 'Cuando dos rayos son cortados por rectas paralelas, los segmentos resultantes son proporcionales. Una herramienta poderosa para calcular longitudes desconocidas.',
      },
    },
    examples: {
      model: {
        title: 'Escalar un edificio',
        context: 'Un almacen hamburges esta construido como modelo 3D a escala $1:100$. El modelo mide $3{,}5$ cm de alto. Cuanto mide el edificio real?',
        step1: 'Determinar el factor de escala: $k = \\frac{1}{100}$ significa que el modelo es 100 veces mas pequeno que el original.',
        step2: 'Leer la altura del modelo: $h_{\\text{Modelo}} = 3{,}5$ cm.',
        step3: 'Calcular hacia atras: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. El edificio mide 3,5 metros de alto.',
        mia_comment: 'Mia: "Asi es exactamente como trabajamos en Hafenlichter. Construimos la Speicherstadt como maqueta y escalamos todo proporcionalmente al juego."',
      },
      intercept: {
        title: 'Aplicar el teorema de Tales',
        context: 'Dos rayos son cortados por rectas paralelas. Los segmentos en un rayo son 4 y 6, en el otro el primer segmento es 9. Cual es la longitud del segundo segmento $x$?',
        step1: 'Plantear el teorema de Tales: las proporciones de los segmentos en ambos rayos son iguales: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Multiplicar en cruz: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Resultado: $x = 6$. El segundo segmento mide 6 unidades.',
        mia_comment: 'Mia: "El teorema de Tales es como el Auto-Layout en la game engine — defines una proporcion y todo lo demas se ajusta proporcionalmente."',
      },
    },
    realworld: {
      maps: {
        title: 'Mapas y navegacion',
        desc: 'Google Maps muestra el mundo a escala. El nivel de zoom 15 corresponde aproximadamente a $1:18.000$. Cada nivel de zoom duplica el factor de escala — exactamente como la semejanza en geometria.',
      },
      architecture: {
        title: 'Modelos arquitectonicos',
        desc: 'Antes de construir la Filarmonica del Elba, hubo modelos a escala $1:500$. Los arquitectos usan la semejanza para deducir medidas reales de modelos pequenos — y viceversa.',
      },
      instagram: {
        title: 'Escalar imagenes',
        desc: 'Cuando recortas una foto para Instagram, cambia la escala. "Ajustar a pantalla" escala proporcionalmente (semejante), "Estirar" distorsiona (no semejante). Tu ojo detecta la diferencia al instante!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Semejante" y "congruente" son lo mismo',
        correct: 'Semejante = misma forma. Congruente = misma forma Y mismo tamano',
        why: 'La congruencia es un caso especial de semejanza con $k = 1$. Todos los triangulos congruentes son semejantes, pero no todos los triangulos semejantes son congruentes. Semejante significa: mismos angulos, pero los lados pueden tener longitudes proporcionalmente diferentes.',
        mia_warning: 'Mia: "En la game engine: congruente = copiar. Semejante = copiar + escalar. Si copias una casa y la escalas, es semejante. Sin escalar es congruente."',
      },
      scale_direction: {
        wrong: 'Plantear el factor de escala al reves',
        correct: 'Siempre $k = \\frac{\\text{Imagen}}{\\text{Original}}$',
        why: 'Si la imagen es mas grande que el original, $k$ debe ser mayor que 1. Si planteas la fraccion al reves, obtienes $k < 1$ y piensas que se ha reducido. Recuerda: imagen arriba, original abajo.',
      },
    },
  },
};
