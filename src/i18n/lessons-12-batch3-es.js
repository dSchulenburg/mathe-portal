export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'Amir está construyendo un modelo de predicción del número de usuarios de una app de aprendizaje. Las primeras semanas pintan fantásticas: cada semana un 40 por ciento más. Hace la extrapolación y le salen para el año que viene más usuarios de los que hay personas con smartphone. «Tu modelo no está mal», le dice su profesora, «simplemente ya está fuera de su rango de validez. ¿Qué pasa cuando la mitad de todos los usuarios posibles ya tiene la app?» Amir se da cuenta: se ha olvidado de que el mundo es finito.',
      challenge: '¿Cómo se modeliza un crecimiento que tiene un límite? ¿Y cómo se distinguen dos tipos de límite: uno contra el que se frena desde el principio y otro hacia el que primero se acelera y luego se frena?',
      outro: 'Ahora Amir trabaja con dos modelos en lugar de uno. Crecimiento limitado, cuando el aumento depende solo de lo que queda libre: enfriamiento, saturación, carga. Crecimiento logístico, cuando el aumento necesita además la población existente: contagio, recomendación, poblaciones. Y ya sabe lo que significa el punto de inflexión: no el final del crecimiento, sino su momento más rápido.',
    },
    objectives: {
      grenzen: 'Reconocer cuándo un modelo exponencial llega a su límite, y por qué antes era correcto de todos modos',
      beschraenkt: 'Plantear y analizar el crecimiento limitado $N(t) = K - (K - N_0)e^{-kt}$',
      logistisch: 'Determinar el modelo logístico $N(t) = \\frac{K}{1 + a e^{-rt}}$ a partir de la capacidad y el valor inicial',
      wendepunkt: 'Calcular el punto de inflexión e interpretarlo como el momento de mayor aumento',
    },
    explanation: {
      intro: 'El crecimiento exponencial no conoce límites. Pero en la realidad casi siempre hay uno: el estanque acaba lleno, todos los clientes posibles tienen el producto, la taza está a temperatura ambiente. Esta cota superior se llama capacidad $K$. Dos modelos describen cómo se alcanza, y la diferencia entre ellos no es un matiz, sino la cuestión de si la curva tiene un punto de inflexión.',
      beschraenkt: 'En el crecimiento limitado, el aumento depende solo de cuánto falta todavía. Al principio es cuando más falta, así que el aumento es máximo al principio y se hace cada vez más pequeño. La curva se acerca al límite desde abajo sin llegar nunca a alcanzarlo:',
      amir_tip: 'Distingo los dos modelos con una sola pregunta: ¿el aumento necesita lo que ya hay? En el café que se enfría, no: el calor se va, da igual cuánto quede, solo cuenta la diferencia. En un vídeo viral, sí: sin gente que lo comparta, no pasa nada. Lo primero es limitado; lo segundo, logístico.',
      logistisch: 'En el crecimiento logístico, la población entra como segundo factor. Al principio hay mucho espacio, pero apenas hay individuos: el crecimiento es lento. Al final hay muchos individuos, pero ya no queda espacio: otra vez lento. Entre medias está el máximo. Eso da la típica forma de S:',
      dgl: 'Donde más claramente se ve la diferencia es en la ecuación diferencial. Se lee como una frase: el aumento es proporcional a la población **por** la parte todavía libre. Si falta uno de los dos factores, el crecimiento se detiene:',
      wendepunkt: 'De esta ecuación se obtiene el indicador más importante del modelo. El producto de la población y lo que queda libre es máximo justo cuando ambos son iguales, es decir, en la mitad de la capacidad. Ahí está el punto de inflexión, y ahí la tasa de aumento es máxima:',
    },
    concepts: {
      kapazitaet: {
        title: 'Capacidad $K$',
        desc: 'La cota superior a la que se acerca la población sin alcanzarla. Es el límite para $t \\to \\infty$ y aparece como parámetro en los dos modelos. Sin una capacidad razonable, ninguno de los dos modelos es aplicable.',
      },
      beschraenkt: {
        title: 'Crecimiento limitado',
        desc: 'El aumento depende solo de lo que queda libre, $K - N$. Por eso es máximo justo al principio y después disminuye de forma continua. La curva no tiene punto de inflexión: desde el inicio está curvada hacia abajo. Típico del enfriamiento, la carga y la saturación.',
      },
      logistisch: {
        title: 'Crecimiento logístico',
        desc: 'El aumento depende de la población Y de lo que queda libre. De ahí surge la curva en S: primero lenta, luego rápida, luego otra vez lenta. El parámetro $a = \\frac{K - N_0}{N_0}$ indica cuántas plazas libres corresponden al principio a cada individuo existente.',
      },
      wendepunkt: {
        title: 'Punto de inflexión en $K/2$',
        desc: 'Siempre en la mitad de la capacidad, independientemente de $r$ y de $N_0$. Ahí la tasa de aumento es máxima, en concreto $\\frac{rK}{4}$. Después la población sigue creciendo, pero más despacio: la confusión más frecuente en los ejercicios de interpretación.',
      },
    },
    examples: {
      seerosen: {
        title: 'Plantear un modelo logístico a partir de la capacidad y el valor inicial',
        context: 'En un estanque con espacio para 500 nenúfares crecen al principio 50 plantas.',
        step1: 'Primero el parámetro $a$. Se obtiene directamente de la capacidad y el valor inicial:',
        step2: 'Con eso el modelo está listo. La tasa de crecimiento $r = 0{,}4$ por semana procede de la serie de mediciones:',
        step3: 'Comprobación: sustituye $t = 0$. Si no sale el valor inicial, $a$ está mal:',
        step4: 'El instante de inflexión se obtiene de $a\\,e^{-rt} = 1$: una ecuación logarítmica:',
        amir_comment: 'La comprobación del paso 3 la hago siempre. Cuesta diez segundos y detecta el error más frecuente: $a = \\frac{K}{N_0}$ en lugar de $a = \\frac{K - N_0}{N_0}$. En mi caso habría sido 10 en lugar de 9: parece inofensivo, pero desplaza toda la curva.',
      },
      abkuehlung: {
        title: 'Crecimiento limitado en el enfriamiento',
        context: 'Kai deja un café a 80 °C en una habitación a 20 °C.',
        step1: 'Aquí el límite es la temperatura ambiente; la diferencia respecto a ella es al principio de 60 °C:',
        step2: 'Comprobación en $t = 0$: tiene que salir la temperatura inicial:',
        step3: 'A los diez minutos solo queda aproximadamente un tercio de la diferencia:',
        step4: 'A largo plazo queda la temperatura ambiente, aunque matemáticamente nunca se alcanza:',
        kai_comment: 'Con el café es algo que todos sabemos: el primer minuto es el que más enfría, y luego la cosa va lenta. Eso es exactamente el crecimiento limitado. Y es la razón por la que soplar ayuda al principio y a los diez minutos ya no sirve de nada.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Epidemias',
        desc: 'Las nuevas infecciones necesitan infectados (que contagian) y susceptibles (que pueden contagiarse). El punto de inflexión es el día con más infecciones nuevas: el número total sigue subiendo después, solo que más despacio.',
      },
      produkt: {
        title: 'Difusión de productos y apps',
        desc: 'Los nuevos usuarios suelen llegar a través de usuarios existentes. Al principio faltan quienes recomiendan; al final, quienes todavía no lo tienen. Los departamentos de marketing también llaman a la curva en S curva de adopción.',
      },
      abkuehlung: {
        title: 'Enfriamiento y carga',
        desc: 'La ley de enfriamiento de Newton y la curva de carga de una batería son crecimiento limitado. Aquí solo cuenta la distancia al estado final: por eso una batería carga el último tanto por ciento con una lentitud desesperante.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'A partir del punto de inflexión, la población disminuye',
        correct: 'A partir del punto de inflexión disminuye la tasa de aumento; la población sigue creciendo',
        why: 'El punto de inflexión es el cero de la segunda derivada, no de la primera. $N\'$ tiene ahí un máximo, así que es justo especialmente grande, y positiva. La función logística es estrictamente creciente en todo su dominio; nunca decrece. Quien confunde aquí población y aumento le da la vuelta exactamente a la afirmación.',
        amir_warning: 'Es el error de interpretación número uno y cuesta puntos en cualquier examen final de bachillerato. Mi truco: siempre formulo la respuesta con la palabra «por». ¿Qué cambia por semana? El aumento. ¿Qué hay en total? La población. En cuanto aparece la palabra «por», estoy hablando de $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'El crecimiento logístico es un crecimiento exponencial que se corta en $K$',
        correct: 'La curva logística frena poco a poco y nunca llega a alcanzar $K$',
        why: 'Un modelo exponencial cortado tendría un pico: no sería derivable en el punto de corte y alcanzaría el límite exactamente en un tiempo finito. La función logística, en cambio, es suave en todas partes y solo se acerca a $K$ de forma asintótica. La diferencia no es cosmética: el modelo cortado predice un momento final concreto; el logístico, ninguno.',
        amir_warning: 'Lo único correcto de esa idea es la fase inicial: mientras $N$ es pequeño frente a $K$, el factor de frenado es casi $1$ y las dos curvas están prácticamente superpuestas. La curva exponencial es la tangente inicial de la logística: por eso mi primer modelo encajaba tan bien con las primeras semanas.',
      },
    },
  },
};
