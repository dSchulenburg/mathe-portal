export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'Mia está creando para Luces del Puerto un minijuego de aparcamiento: Lumi deja la furgoneta de reparto y tiene que pagar al recogerla. Mia programa la tarifa: 2,00 € hasta una hora, y a partir de ahí 3,50 €. Al probarlo, Tim nota algo: «Si llegas un segundo tarde, de repente cuesta 1,50 € más. ¿Es un bug?» Mia mira la gráfica. No está rota: da un salto. Y ese salto tiene precisamente un nombre.',
      challenge: '¿Cuándo tiene una función un salto de verdad, cuándo le falta solo un punto suelto y cuándo se va al infinito? Mia tiene que distinguir los tres casos con seguridad para decidir qué tarifas puede construir así.',
      outro: 'Ahora Mia sabe comprobar en cualquier punto sospechoso si una función es continua: límite por la izquierda, límite por la derecha, valor de la función. Si los tres coinciden, todo está bien. Y sabe qué huecos puede reparar y cuáles no. La tarifa del aparcamiento, por cierto, sigue siendo discontinua. No es un bug, es una decisión de negocio.',
    },
    objectives: {
      anschaulich: 'Reconocer la continuidad de forma intuitiva y saber por qué «dibujar sin levantar el lápiz» no basta como definición',
      definition: 'Comprobar la continuidad en un punto mediante el límite: $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Distinguir con seguridad discontinuidad evitable, discontinuidad de salto y polo',
      zwischenwertsatz: 'Demostrar la existencia de un cero con el teorema del valor intermedio',
    },
    explanation: {
      intro: 'Intuitivamente, continua significa: puedes dibujar la gráfica sin levantar el lápiz. Es una buena primera idea, pero no es una definición con la que se pueda calcular. ¿Qué pasa con una función a la que le falta exactamente un único punto? En la práctica no levantas el lápiz y, sin embargo, la función no es continua ahí. Para una definición sólida necesitas el límite del cálculo diferencial.',
      definition: 'Una función $f$ se llama continua en el punto $x_0$ si el valor de la función y el límite en ese punto no se contradicen:',
      drei_bedingungen: 'En esta única línea hay tres exigencias. Las tres tienen que cumplirse: en cada contraejemplo falla exactamente una de ellas:',
      mia_tip: 'Yo siempre lo compruebo en este orden: primero, ¿el punto está en el dominio? Si no, ya no puede ser continua ahí. Segundo, ¿llego al mismo valor por la izquierda y por la derecha? Tercero, ¿ese valor es el que la función toma realmente ahí? Tres marcas y listo.',
      einseitig: 'En las funciones definidas a trozos tienes que mirar por separado desde ambos lados en el punto de unión. El límite por la izquierda y el límite por la derecha no pueden ser distintos, y los dos tienen que coincidir con el valor de la función:',
      arten: 'Hay exactamente tres maneras en que la continuidad puede romperse, y no son igual de graves. En la discontinuidad evitable solo falta un punto; puedes añadirlo y todo queda reparado. En la discontinuidad de salto existen los dos límites laterales, pero son distintos: aquí no sirve de nada añadir un punto. En el polo los límites se van al infinito, no hay ningún valor que añadir:',
      zwischenwertsatz: 'La continuidad no es solo una propiedad que se comprueba: es una herramienta. El teorema del valor intermedio dice: una función continua que empieza por debajo de cero y termina por encima de cero tiene que pasar por el cero en el camino. No puede saltárselo, porque saltar es justo lo que no puede hacer:',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Continuidad en un punto',
        desc: 'El límite en el punto coincide con el valor de la función. Tres condiciones en una ecuación: el valor de la función existe, el límite existe y son iguales. Si falla una, la función es discontinua ahí.',
      },
      einseitig: {
        title: 'Límites laterales',
        desc: 'En los puntos de unión de las funciones definidas a trozos compruebas la izquierda y la derecha por separado. Si los dos valores son distintos, hay un salto, y la altura del salto es exactamente su diferencia.',
      },
      arten: {
        title: 'Los tres tipos de discontinuidad',
        desc: 'Discontinuidad evitable: el límite existe, falta el valor de la función; se puede reparar. Discontinuidad de salto: los dos límites laterales existen, pero son distintos; no se puede reparar. Polo: los límites se van al infinito; menos aún se puede reparar.',
      },
      zwischenwertsatz: {
        title: 'Teorema del valor intermedio',
        desc: 'Si $f$ es continua en $[a;b]$ y cambia de signo en los extremos, entonces entre ellos hay al menos un cero. El teorema garantiza la existencia, no la unicidad ni el lugar exacto en que se encuentra.',
      },
    },
    examples: {
      luecke: {
        title: 'Cerrar una discontinuidad evitable',
        context: 'Mia se topa con una expresión que en $x = 1$ da $\\frac{0}{0}$.',
        step1: 'El denominador se anula en $x = 1$: ese punto no pertenece al dominio:',
        step2: 'Factorizar el numerador y simplificar. Está permitido mientras $x \\neq 1$:',
        step3: 'La expresión simplificada se puede evaluar sin problema en $x = 1$: ese es el límite:',
        step4: 'Ahora añades el punto que faltaba. La función completada se llama extensión continua:',
        mia_comment: 'El $\\frac{0}{0}$ me asustó al principio: pensaba que algo estaba roto. Pero no lo está. Solo significa: simplifica primero y pregunta después. Roto estaría $\\frac{1}{0}$: ahí hay un cero de verdad, solo, en el denominador.',
      },
      sprung: {
        title: 'Medir una discontinuidad de salto',
        context: 'La tarifa del aparcamiento del minijuego de Mia, y la pregunta de cuánto puede costar un segundo.',
        step1: 'La tarifa está definida a trozos; el punto de unión está en una hora:',
        step2: 'Acercarse al punto de unión por la izquierda y por la derecha y comparar los valores:',
        step3: 'Los dos límites existen, pero son distintos: esa es la definición de una discontinuidad de salto:',
        step4: 'La altura del salto es su diferencia. Aquí no es un fallo, sino la tarifa:',
        kai_comment: 'Justo este tipo de saltos es la razón por la que las tarifas de móvil y los tramos de franqueo fastidian a la gente. Matemáticamente no tienen nada de malo, pero quien llega un segundo tarde paga el siguiente tramo entero. Las tarifas continuas cobran al segundo. Eso es una decisión, no una fórmula.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Tarifas por tramos',
        desc: 'Aparcamiento, franqueo, contrato de móvil: allí donde se cobra por unidad empezada, la función de precio es discontinua. Cada tramo es una discontinuidad de salto, y cada una de ellas es una decisión consciente del proveedor.',
      },
      temperatur: {
        title: 'Magnitudes físicas',
        desc: 'Temperatura, posición, velocidad: estas magnitudes no pueden saltar, porque un salto supondría una energía infinita en un tiempo nulo. Por eso los modelos físicos son casi siempre funciones continuas.',
      },
      nullstelle: {
        title: 'Encontrar ceros numéricamente',
        desc: 'Cualquier calculadora usa el teorema del valor intermedio: busca un intervalo con cambio de signo y lo divide por la mitad una y otra vez. Sin continuidad, este método no valdría nada: el cero podría simplemente saltarse.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'Si $f(x_0)$ existe, $f$ también es continua ahí',
        correct: 'Además, el valor de la función tiene que coincidir con el límite',
        why: 'Una función escalón está definida en su punto de salto: ahí tiene un valor de la función completamente normal. Aun así es discontinua, porque el límite por uno de los lados da otra cosa. Estar definida es solo la primera de tres condiciones, no la respuesta.',
        mia_warning: 'Eso me pasó con el aparcamiento. Justo a la hora exacta el precio está definido: 2,00 €. Pensé que con eso todo era suave. La gráfica salta igualmente, solo que un segundo después.',
      },
      pol_ist_hebbar: {
        wrong: 'Cualquier hueco en el dominio se puede cerrar con un valor adecuado',
        correct: 'Solo si el límite por ambos lados existe y es finito',
        why: 'En $\\frac{1}{x}$ la función tiende a $-\\infty$ por la izquierda y a $+\\infty$ por la derecha. No hay ningún número que se pueda poner: elijas el que elijas, la gráfica se escapa al infinito a su lado. La regla práctica para fracciones: si el factor crítico se simplifica, la discontinuidad es evitable; si se queda en el denominador, es un polo.',
        mia_warning: 'Ahora siempre lo compruebo con dos números: sustituyo $0{,}001$ y $-0{,}001$. Si salen dos valores parecidos, la discontinuidad es evitable. Si salen $1000$ y $-1000$, es un polo, y ahí no hay nada que hacer.',
      },
    },
  },
};
