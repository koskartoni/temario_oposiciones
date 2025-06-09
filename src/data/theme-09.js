// CÓDIGO CORREGIDO CON LA INTRODUCCIÓN FIEL Y ESTANDARIZADA
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme09Data = {
  id: "theme9",
  name: "TEMA 9: Lógica de Circuitos",
  title: "TEMA 9. LÓGICA DE CIRCUITOS. CIRCUITOS COMBINACIONALES Y SECUENCIALES",
  version: "Versión: Noviembre 2024",
  sections: [
    {
      id: "t9_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        // --- INTRODUCCIÓN CORREGIDA SIGUIENDO EL ESTÁNDAR ---
        { type: 'paragraph', text: 'El presente tema forma parte del temario oficial (BOE 13/02/1996) y se centra en la <strong>lógica de circuitos</strong>, la base fundamental sobre la que se construyen todos los sistemas digitales. Estudiaremos los dos grandes grupos: los circuitos <strong>combinacionales</strong> y los <strong>secuenciales</strong>.' },
        { type: 'paragraph', text: 'En la actualidad estamos rodeados de infinidad de dispositivos formados por circuitos digitales. Su estudio es fundamental tanto en la familia profesional de <strong>Electricidad y Electrónica</strong> como, de forma complementaria, en determinados módulos de la familia profesional de <strong>Informática y Comunicaciones</strong>.'},
        { type: 'paragraph', text: 'Concretamente, estos contenidos se podrían incluir en los siguientes ciclos formativos:' },
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Fundamentos de hardware</code>' },
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Montaje y mantenimiento de equipos</code>' }
        ]}
      ]
    },
    // --- EL RESTO DE SECCIONES PERMANECEN IGUAL QUE EN LA VERSIÓN ANTERIOR ---
    {
      id: "t9_s2",
      shortTitle: "2. Lógica de Circuitos",
      title: "2. LÓGICA DE CIRCUITOS",
      icon: "logic",
      content: [
        { type: 'paragraph', text: 'El término lógico se aplica a los circuitos digitales que se utilizan para implementar funciones lógicas. A continuación, se abordan los conceptos previos necesarios para su descripción y diseño.' }
      ]
    },
    {
        id: "t9_s2_1", shortTitle: "2.1. Operaciones Lógicas", title: "2.1. OPERACIONES LÓGICAS",
        content: [
            { type: 'paragraph', text: 'El bloque fundamental de los circuitos lógicos son las <strong>puertas lógicas</strong>, que realizan una operación booleana sobre sus entradas. Las básicas son:'},
            { type: 'table', headers: ['Puerta', 'Descripción'], rows: [
              ['AND', 'La salida es 1 si y solo si TODAS las entradas son 1.'],
              ['OR', 'La salida es 1 si CUALQUIERA de las entradas es 1.'],
              ['NOT', 'La salida es el valor INVERSO de la entrada.'],
              ['NAND', 'Inversa de AND. Es una puerta universal.'],
              ['NOR', 'Inversa de OR. Es una puerta universal.'],
              ['XOR', 'La salida es 1 si las entradas son DIFERENTES.'],
              ['XNOR', 'La salida es 1 si las entradas son IGUALES.']
            ]}
        ]
    },
    {
      id: "t9_s2_2", shortTitle: "2.2. Álgebra de Boole", title: "2.2. ÁLGEBRA DE BOOLE",
      content: [
          { type: 'paragraph', text: 'Es la base matemática de la electrónica digital, utilizada para analizar y simplificar circuitos. Se define por las siguientes leyes y reglas:' },
          { type: 'subheading', text: 'Leyes Fundamentales'},
          { type: 'list', items: ['<strong>Leyes conmutativas:</strong> <code>A+B = B+A</code>', '<strong>Leyes asociativas:</strong> <code>A+(B+C) = (A+B)+C</code>', '<strong>Ley distributiva:</strong> <code>A(B+C) = AB+AC</code>']},
          { type: 'subheading', text: 'Reglas Principales'},
          { type: 'table', headers: ['Regla', 'Regla', 'Regla'], rows: [
              ['1. A+0=A', '5. A+A=A', '9. A\'\'=A'],
              ['2. A+1=1', '6. A+A\'=1', '10. A+AB=A'],
              ['3. A*0=0', '7. A*A=A', '11. A+A\'B= A+B'],
              ['4. A*1=A', '8. A*A\'=0', '12. (A+B)(A+C)= A+BC']
          ]}
      ]
    },
    {
      id: "t9_s2_3", shortTitle: "2.3. Teoremas de DeMorgan", title: "2.3. TEOREMAS DE DEMORGAN",
      content: [
        { type: 'paragraph', text: 'Dos teoremas cruciales para la simplificación de expresiones booleanas:' },
        { type: 'keyConcept', title: 'Leyes de DeMorgan', items: [
          'El complemento de un producto es igual a la suma de los complementos: <br> <code style="font-size: 1.2em;">(A · B)\' = A\' + B\'</code>',
          'El complemento de una suma es igual al producto de los complementos: <br> <code style="font-size: 1.2em;">(A + B)\' = A\' · B\'</code>'
        ]}
      ]
    },
    {
      id: "t9_s2_4", shortTitle: "2.4. Funciones Lógicas", title: "2.4. FUNCIONES LÓGICAS",
      content: [
        { type: 'paragraph', text: 'Describen la salida de un sistema digital para todas las posibles combinaciones de entradas. Se pueden expresar como <strong>expresiones booleanas</strong>, <strong>circuitos lógicos</strong>, <strong>tablas de verdad</strong> o <strong>mapas de Karnaugh</strong> para su simplificación.' }
      ]
    },
    {
      id: "t9_s3",
      shortTitle: "3. Circuitos Combinacionales",
      title: "3. CIRCUITOS COMBINACIONALES",
      icon: "combinational",
      content: [
        { type: 'keyConcept', title: 'Definición Clave', text: 'En un circuito combinacional, la salida depende <strong>únicamente</strong> de la combinación de las entradas en ese mismo instante. <strong>No tienen memoria</strong>.' }
      ]
    },
    {
      id: "t9_s3_1", shortTitle: "3.1. Codificador", title: "3.1. CODIFICADOR",
      content: [ { type: 'paragraph', text: 'Convierte una entrada activa (ej. la tecla "7" de un teclado decimal) en una salida codificada en binario (<code>0111</code>).' } ]
    },
    {
      id: "t9_s3_2", shortTitle: "3.2. Decodificador", title: "3.2. DECODIFICADOR",
      content: [
        { type: 'paragraph', text: 'Realiza la función inversa: recibe una entrada binaria y activa una única salida correspondiente. Por ejemplo, un decodificador de 3 a 8 líneas, con la entrada <code>101</code>, activaría la salida número 5.'},
        { type: 'practicalExample', title: 'El Portero Automático', text: 'Cuando marcas el "2ºB" en un portero, un codificador convierte eso en un código binario. El decodificador en cada telefonillo de la finca recibe ese código, pero solo el que coincide con su dirección (el del 2ºB) se activa y hace sonar el timbre.'}
      ]
    },
    {
      id: "t9_s3_3", shortTitle: "3.3. Multiplexor (MUX)", title: "3.3. MULTIPLEXOR",
      content: [ { type: 'paragraph', text: 'Actúa como un selector. Tiene varias entradas de datos, una única salida, y unas entradas de selección que deciden cuál de las entradas de datos se conecta a la salida en cada momento.'} ]
    },
    {
      id: "t9_s3_4", shortTitle: "3.4. Demultiplexor (DEMUX)", title: "3.4. DEMULTIPLEXOR",
      content: [ { type: 'paragraph', text: 'Realiza la función contraria al MUX. Toma una única entrada de datos y la dirige a una de las múltiples salidas, según lo que indiquen las entradas de selección.'} ]
    },
    {
      id: "t9_s3_5", shortTitle: "3.5. Otros Circuitos", title: "3.5. OTROS CIRCUITOS",
      content: [ { type: 'paragraph', text: 'Otros circuitos combinacionales importantes son los <strong>Sumadores</strong>, <strong>Comparadores</strong> y las <strong>PAL (Programmable Array Logic)</strong>.' } ]
    },
    {
      id: "t9_s4",
      shortTitle: "4. Circuitos Secuenciales",
      title: "4. CIRCUITOS SECUENCIALES",
      icon: "sequential",
      content: [
        { type: 'keyConcept', title: 'Definición Clave', text: 'En un circuito secuencial, la salida depende de las entradas actuales y del <strong>estado anterior</strong> del circuito. <strong>Tienen memoria</strong>. Esta memoria se logra mediante la <strong>realimentación</strong> (feedback) de las salidas hacia las entradas.'},
        { type: 'paragraph', text: 'Se clasifican en <strong>síncronos</strong> (cambian de estado con una señal de reloj) y <strong>asíncronos</strong>.' }
      ]
    },
    {
      id: "t9_s4_1", shortTitle: "4.1. Biestables", title: "4.1. BIESTABLES",
      content: [
        { type: 'paragraph', text: 'Son las células elementales de memoria, capaces de almacenar un bit. Se dividen en:' },
        { type: 'definitionList', items: [
          { term: 'Latches:', definition: 'Biestables asíncronos. Su estado puede cambiar en cualquier momento mientras la señal de habilitación esté activa.' },
          { term: 'Flip-flops:', definition: 'Biestables síncronos. Solo cambian de estado en un instante preciso, marcado por el flanco (subida o bajada) de la señal de reloj. Son la base de la mayoría de sistemas digitales modernos.' }
        ]},
        { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
          { question: '¿Qué tipo de circuito depende únicamente de sus entradas actuales?', options: ['Secuencial', 'Combinacional'], correctAnswerIndex: 1 },
          { question: 'El componente fundamental de memoria en un circuito síncrono es el:', options: ['Latch', 'Flip-flop', 'Multiplexor'], correctAnswerIndex: 1 }
        ]}
      ]
    },
    {
      id: "t9_s4_2", shortTitle: "4.2. Contadores", title: "4.2. CONTADORES",
      content: [ { type: 'paragraph', text: 'Combinación de flip-flops conectados para realizar funciones de recuento. Pueden ser síncronos o asíncronos.' } ]
    },
    {
      id: "t9_s4_3", shortTitle: "4.3. Registros", title: "4.3. REGISTROS",
      content: [ { type: 'paragraph', text: 'Se utilizan para almacenar y desplazar datos digitales. Un <strong>registro de desplazamiento</strong> es una cadena de flip-flops donde la salida de uno es la entrada del siguiente, moviendo los datos un bit en cada pulso de reloj.' } ]
    },
    {
      id: "t9_s5", shortTitle: "5. Familias Lógicas", title: "5. FAMILIAS LÓGICAS DE CIRCUITOS INTEGRADOS",
      icon: "family",
      content: [
        { type: 'paragraph', text: 'Representan las diferentes tecnologías de semiconductores usadas para construir puertas lógicas. Las principales son <strong>TTL</strong> (Transistor-Transistor Logic), antigua y de alto consumo, y <strong>CMOS</strong> (Complementary Metal-Oxide-Semiconductor), la tecnología dominante hoy por su bajo consumo y alta inmunidad al ruido.' }
      ]
    },
    {
      id: "t9_s6", shortTitle: "6. CIs Comerciales", title: "6. CIRCUITOS INTEGRADOS COMERCIALES",
      icon: "ic",
      content: [
        { type: 'paragraph', text: 'Existe una gran cantidad de CIs que implementan circuitos lógicos. Se identifican por una numeración estándar, como la <strong>serie 7400</strong>. Ejemplos: <code>74LS08</code> (puerta AND), <code>74HC153</code> (Multiplexor), <code>74HC163</code> (Contador).' }
      ]
    },
    { id: "t9_s7", shortTitle: "7. Recursos", title: "7. RECURSOS Y HERRAMIENTAS", icon: "tools", content: [ { type: 'resourceLink', name: 'Logic.ly Demo', url: 'https://logic.ly/demo/', description: 'Simulador de circuitos lógicos online muy intuitivo para experimentar con puertas y otros componentes.' } ] },
    { id: "t9_s8", shortTitle: "8. Aplicación", title: "8. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'La lógica de circuitos es fundamental en el diseño de casi cualquier sistema electrónico. En FP, es la base de la familia de Electricidad y Electrónica. En el ámbito laboral, es esencial para el diseño de CIs (ASIC, FPGA) y la programación de microcontroladores.' } ] },
    { id: "t9_s9", shortTitle: "9. Conclusión", title: "9. CONCLUSIÓN", icon: "conclusion", content: [ { type: 'paragraph', text: 'Este tema ha presentado una visión global de la lógica de circuitos, describiendo los circuitos combinacionales (sin memoria) y secuenciales (con memoria), que son la base de cualquier sistema digital. La tecnología CMOS es la dominante en su fabricación actual.' } ] },
    { id: "t9_s10", shortTitle: "10. Bibliografía", title: "10. BIBLIOGRAFÍA", icon: "bibliography", content: [ { type: 'bibliography', items: [ { text: 'Floyd, T. (2016). <em>Fundamentos de sistemas digitales</em>. Editorial Pearson.' }, { text: 'Tocci, R. (2017). <em>Sistemas digitales: Principios y aplicaciones</em>. Editorial Prentice Hall.' } ] } ] }
  ],
  glossary: [
      { term: 'Lógica de Circuitos', definition: 'Disciplina que aplica los principios de la lógica booleana al diseño y análisis de circuitos digitales.' },
      { term: 'Puerta Lógica', definition: 'Circuito electrónico que realiza una operación booleana básica (AND, OR, NOT, etc.).' },
      { term: 'Circuito Combinacional', definition: 'Circuito cuya salida depende únicamente de la combinación de sus entradas actuales. No tiene memoria.' },
      { term: 'Circuito Secuencial', definition: 'Circuito cuya salida depende de las entradas actuales y del estado anterior del circuito. Tiene memoria.' },
      { term: 'Biestable', definition: 'Célula elemental de memoria capaz de almacenar un bit (0 o 1).' },
      { term: 'Flip-Flop', definition: 'Tipo de biestable síncrono que cambia de estado solo en los flancos de una señal de reloj. Es la base de la memoria en los sistemas digitales modernos.' },
      { term: 'Familia Lógica', definition: 'Conjunto de circuitos integrados que comparten la misma tecnología de semiconductores (ej. TTL, CMOS).' }
  ]
};