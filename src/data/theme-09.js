export const theme09Data = {
    id: "theme9",
    name: "TEMA 9: Lógica de Circuitos",
    title: "TEMA 9. INFORMÁTICA / S.A.I. - LÓGICA DE CIRCUITOS. CIRCUITOS COMBINACIONALES Y SECUENCIALES",
    version: "Versión: Noviembre 2024 (Actualizado)",
    sections: [
      {
        id: "t9_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema se centra en la <strong>lógica de circuitos</strong>, la base fundamental sobre la que se construyen todos los sistemas digitales, desde el más simple hasta un ordenador completo. Estudiaremos los dos grandes grupos: los circuitos <strong>combinacionales</strong> y los <strong>secuenciales</strong>.' },
          { type: 'paragraph', text: 'Los circuitos electrónicos pueden ser analógicos (magnitudes continuas) o digitales (magnitudes discretas). En este tema nos centraremos en los sistemas digitales, que utilizan circuitos con solo dos estados posibles (<code>0</code> y <code>1</code>), lo que permite procesar y transmitir información de forma mucho más fiable y eficiente.' }
        ]
      },
      {
        id: "t9_s2",
        shortTitle: "2. Lógica de Circuitos",
        title: "2. LÓGICA DE CIRCUITOS",
        content: [
          { type: 'paragraph', text: 'La lógica es la parte del razonamiento que nos dice si una proposición es cierta o falsa. Este concepto se aplica directamente a los circuitos digitales, que implementan <strong>funciones lógicas</strong>. A continuación, se abordan los conceptos previos necesarios para su diseño:' },
          { type: 'list', items: ['Operaciones lógicas', 'Álgebra de Boole', 'Teoremas de DeMorgan', 'Funciones lógicas'] }
        ]
      },
      {
          id: "t9_s2_1", shortTitle: "2.1. Operaciones Lógicas", title: "2.1. OPERACIONES LÓGICAS",
          content: [
              { type: 'paragraph', text: 'El bloque fundamental de construcción de todos los circuitos lógicos son las <strong>puertas lógicas</strong>. Son circuitos electrónicos que realizan una operación booleana sobre sus entradas para producir una salida. Las puertas básicas son <code>AND</code>, <code>OR</code>, <code>NOT</code>, <code>NAND</code>, <code>NOR</code>, <code>XOR</code> y <code>XNOR</code>.'},
              { type: 'subheading', text: 'Puerta NOT'},
              { type: 'paragraph', text: 'Produce un nivel lógico de salida opuesto al suministrado como entrada. También se le llama <strong>inversor</strong>.'},
              { type: 'table', headers: ['Símbolo Distintivo', 'Símbolo Rectangular', 'Tabla de Verdad'], rows: [ ['(Diagrama a)', '(Diagrama b)', '(Tabla c)'] ] },
              { type: 'flowDiagram', title: 'Puerta NOT',
                  initialNodes: [
                      { id: 'a', position: { x: 0, y: 50 }, data: { label: 'A' } }, { id: 'not', position: { x: 150, y: 50 }, data: { label: 'NOT' }, style: {width: 50, height: 50} }, { id: 'ap', position: { x: 300, y: 50 }, data: { label: "A'" } },
                      { id: 'b', position: { x: 400, y: 50 }, data: { label: 'A' } }, { id: 'not_r', position: { x: 550, y: 50 }, data: { label: '1' }, style: {width: 50, height: 50} }, { id: 'bp', position: { x: 700, y: 50 }, data: { label: "A'" } },
                  ],
                  initialEdges: [ { id: 'e1', source: 'a', target: 'not' }, { id: 'e2', source: 'not', target: 'ap' }, { id: 'e3', source: 'b', target: 'not_r' }, { id: 'e4', source: 'not_r', target: 'bp' } ]
              },
              { type: 'table', headers: ['A', 'S'], rows: [['0','1'],['1','0']]},
  
              { type: 'subheading', text: 'Puerta AND'},
              { type: 'paragraph', text: 'Produce un nivel alto a la salida (<code>1</code>) sólo cuando <strong>todas</strong> sus entradas están a un nivel alto.'},
              { type: 'table', headers: ['A', 'B', 'S'], rows: [['0','0','0'],['0','1','0'],['1','0','0'],['1','1','1']]},
              
              { type: 'subheading', text: 'Puerta OR'},
              { type: 'paragraph', text: 'Produce un nivel alto a la salida (<code>1</code>) cuando <strong>cualquiera</strong> de sus entradas está a un nivel alto.'},
              { type: 'table', headers: ['A', 'B', 'S'], rows: [['0','0','0'],['0','1','1'],['1','0','1'],['1','1','1']]},
  
              { type: 'subheading', text: 'Puerta NAND'},
              { type: 'paragraph', text: 'Realiza la función inversa a la Puerta AND. Es una puerta <strong>universal</strong>.'},
              { type: 'table', headers: ['A', 'B', 'S'], rows: [['0','0','1'],['0','1','1'],['1','0','1'],['1','1','0']]},
  
              { type: 'subheading', text: 'Puerta NOR'},
              { type: 'paragraph', text: 'Realiza la función inversa a la Puerta OR. También es una puerta <strong>universal</strong>.'},
              { type: 'table', headers: ['A', 'B', 'S'], rows: [['0','0','1'],['0','1','0'],['1','0','0'],['1','1','0']]},
  
              { type: 'subheading', text: 'Puerta XOR (OR-exclusiva)'},
              { type: 'paragraph', text: 'Produce un nivel alto a la salida (<code>1</code>) si y solo si sus entradas son <strong>diferentes</strong>.'},
              { type: 'table', headers: ['A', 'B', 'S'], rows: [['0','0','0'],['0','1','1'],['1','0','1'],['1','1','0']]},
  
              { type: 'subheading', text: 'Puerta XNOR (NOR-exclusiva)'},
              { type: 'paragraph', text: 'Produce un nivel alto a la salida (<code>1</code>) si y solo si sus entradas son <strong>iguales</strong>.'},
              { type: 'table', headers: ['A', 'B', 'S'], rows: [['0','0','1'],['0','1','0'],['1','0','0'],['1','1','1']]},
          ]
      },
      {
        id: "t9_s2_2", shortTitle: "2.2. Álgebra de Boole", title: "2.2. ÁLGEBRA DE BOOLE",
        content: [
            { type: 'paragraph', text: 'La base matemática en la que se fundamenta la electrónica digital es el <strong>álgebra de Boole</strong>. Se utiliza para analizar y simplificar circuitos digitales. Se define por una serie de leyes y reglas:' },
            { type: 'subheading', text: 'A. Leyes'},
            { type: 'list', items: ['<strong>Leyes conmutativas:</strong> <code>A·B = B·A</code> y <code>A+B = B+A</code>', '<strong>Leyes asociativas:</strong> <code>A(BC) = (AB)C</code> y <code>A+(B+C) = (A+B)+C</code>', '<strong>Ley distributiva:</strong> <code>A(B+C) = AB+AC</code>']},
            { type: 'subheading', text: 'B. Reglas'},
            { type: 'table', headers: ['Regla', 'Regla', 'Regla'], rows: [
                ['1. A+0=A', '5. A+A=A', '9. A=A\'\''],
                ['2. A+1=1', '6. A+A\'=1', '10. A+AB=A'],
                ['3. A*0=0', '7. A*A=A', '11. A+A\'B= A+B'],
                ['4. A*1=A', '8. A*A\'=0', '12. (A+B)(A+C)= A+BC']
            ]}
        ]
      },
      {
        id: "t9_s2_3", shortTitle: "2.3. Teoremas de DeMorgan", title: "2.3. TEOREMAS DE DEMORGAN",
        content: [
          { type: 'paragraph', text: 'El matemático DeMorgan propuso dos teoremas muy importantes para la simplificación de expresiones booleanas:' },
          { type: 'list', items: ['<strong>1. El complemento de un producto de variables es igual a la suma de los complementos de las variables.</strong>', '<strong>2. El complemento de una suma de variables es igual al producto de los complementos de las variables.</strong>'] },
          { type: 'equation', latexString: '\\overline{A \\cdot B} = \\overline{A} + \\overline{B}' },
          { type: 'equation', latexString: '\\overline{A + B} = \\overline{A} \\cdot \\overline{B}' },
        ]
      },
      {
        id: "t9_s2_4", shortTitle: "2.4. Funciones Lógicas", title: "2.4. FUNCIONES LÓGICAS",
        content: [
          { type: 'paragraph', text: 'Las funciones lógicas describen la salida de un sistema digital para todas las posibles combinaciones de entradas. Se pueden expresar de varias formas:' },
          { type: 'list', items: ['<strong>A. Expresiones booleanas</strong>', '<strong>B. Circuitos lógicos</strong> (representado mediante puertas lógicas).', '<strong>C. Tablas de verdad</strong>', '<strong>D. Mapas de Karnaugh:</strong> método sistemático de simplificación de expresiones booleanas.'] }
        ]
      },
      {
        id: "t9_s3",
        shortTitle: "3. Circuitos Combinacionales",
        title: "3. CIRCUITOS COMBINACIONALES",
        content: [
          { type: 'paragraph', text: 'En los circuitos lógicos combinacionales, el nivel lógico de la salida depende <strong>únicamente</strong> de la combinación de los niveles lógicos presentes en las entradas en ese mismo instante. <strong>No tienen memoria</strong>. (Tocci, 2017).' },
          { type: 'paragraph', text: 'Algunos de los principales circuitos combinacionales son: Codificador, Decodificador, Multiplexor y Demultiplexor.' }
        ]
      },
      {
        id: "t9_s3_1", shortTitle: "3.1. Codificador", title: "3.1. CODIFICADOR",
        content: [
          { type: 'paragraph', text: 'Un <strong>codificador</strong> es un circuito que convierte una entrada activa (que representa un dígito o carácter) en una salida codificada, como BCD o binario. Por ejemplo, un codificador decimal-BCD tiene 10 entradas (0-9) y 4 salidas.'}
        ]
      },
      {
        id: "t9_s3_2", shortTitle: "3.2. Decodificador", title: "3.2. DECODIFICADOR",
        content: [
          { type: 'paragraph', text: 'Un <strong>decodificador</strong> realiza la función inversa: detecta una combinación de bits (código) en sus entradas y activa una única salida correspondiente. Por ejemplo, un decodificador de 2 a 4 líneas tiene 2 entradas y 4 salidas; si la entrada es <code>10</code>, se activará la salida número 2.'}
        ]
      },
      {
        id: "t9_s3_3", shortTitle: "3.3. Multiplexor", title: "3.3. MULTIPLEXOR",
        content: [
          { type: 'paragraph', text: 'Un <strong>multiplexor (MUX)</strong> o selector de datos, es un circuito que tiene varias líneas de entrada de datos y las canaliza hacia una única línea de salida. Unas entradas de selección determinan qué entrada de datos se conecta a la salida en cada momento.'}
        ]
      },
      {
        id: "t9_s3_4", shortTitle: "3.4. Demultiplexor", title: "3.4. DEMULTIPLEXOR",
        content: [
          { type: 'paragraph', text: 'Un <strong>demultiplexor (DEMUX)</strong> o distribuidor de datos, realiza la función contraria: toma datos de una única línea de entrada y los dirige a una de las múltiples líneas de salida, según lo que indiquen las entradas de selección.'}
        ]
      },
      {
        id: "t9_s4",
        shortTitle: "4. Circuitos Secuenciales",
        title: "4. CIRCUITOS SECUENCIALES",
        content: [
          { type: 'paragraph', text: 'Un circuito lógico secuencial es un circuito cuyas salidas dependen no solo de las entradas actuales, sino también del <strong>estado anterior</strong> del circuito. Es decir, a diferencia de los combinacionales, los circuitos secuenciales <strong>tienen memoria</strong>.'},
          { type: 'flowDiagram', title: 'Estructura de un Circuito Secuencial',
              initialNodes: [
                  {id:'entradas', position:{x:0, y:100}, data:{label: 'Entradas'}},
                  {id:'circuito', position:{x:200, y:100}, data:{label: 'Circuito Combinacional'}, style:{width: 150}},
                  {id:'salidas', position:{x:400, y:100}, data:{label: 'Salidas'}},
                  {id:'memoria', position:{x:200, y:250}, data:{label: 'Elemento de Memoria\n(Realimentación)'}},
              ],
              initialEdges: [
                  {id:'e1', source:'entradas', target:'circuito'}, {id:'e2', source:'circuito', target:'salidas'},
                  {id:'e3', source:'circuito', target:'memoria', animated: true}, {id:'e4', source:'memoria', target:'circuito', animated: true}
              ]
          },
          { type: 'paragraph', text: 'Se pueden clasificar en <strong>asíncronos</strong> (cambian de estado con cualquier cambio en las entradas) y <strong>síncronos</strong> (cambian de estado solo con una señal de reloj).' }
        ]
      },
      {
        id: "t9_s4_1", shortTitle: "4.1. Biestables", title: "4.1. BIESTABLES",
        content: [
          { type: 'paragraph', text: 'Las células elementales de memoria de los circuitos secuenciales se denominan <strong>biestables</strong>. Son capaces de adoptar y mantener dos estados estables (0 y 1), memorizando así un bit de información. Se dividen en dos categorías:' },
          { type: 'definitionList', items: [
            { term: 'Latches:', definition: 'Son biestables <strong>asíncronos</strong>, sensibles al nivel de la señal de control.' },
            { term: 'Flip-flops:', definition: 'Son biestables <strong>síncronos</strong>, sensibles a los flancos (transiciones) de la señal de reloj.' }
          ]},
          { type: 'table', headers: ['Nombre', 'Descripción Breve'], rows: [
            ['Flip-flop S-R', 'Set-Reset. El más básico. Tiene un estado "prohibido".'],
            ['Flip-flop J-K', 'Mejora del S-R, elimina el estado prohibido. Puede bascular (toggle).'],
            ['Flip-flop D', 'Data o Delay. Almacena el valor de su entrada D en cada pulso de reloj. Muy usado para registros.'],
            ['Flip-flop T', 'Toggle. Cambia de estado (bascula) en cada pulso de reloj si su entrada T está activa.']
          ]}
        ]
      },
      {
        id: "t9_s4_2", shortTitle: "4.2. Contadores", title: "4.2. CONTADORES",
        content: [
          { type: 'paragraph', text: 'Un contador es una combinación de flip-flops conectados para realizar funciones de recuento. Se clasifican principalmente en <strong>síncronos</strong> (todos los flip-flops comparten la misma señal de reloj) y <strong>asíncronos</strong> (la salida de un flip-flop es la señal de reloj del siguiente).' }
        ]
      },
      {
        id: "t9_s4_3", shortTitle: "4.3. Registros", title: "4.3. REGISTROS",
        content: [
          { type: 'paragraph', text: 'Los registros se utilizan principalmente para <strong>almacenar</strong> y <strong>desplazar</strong> datos digitales. Un registro de desplazamiento consiste en una cadena de flip-flops conectados en cascada.' },
          { type: 'flowDiagram', title: 'Registro de Desplazamiento (Entrada Serie, Salida Serie)',
              initialNodes: [
                  {id:'in', position:{x:0,y:50}, data:{label:'Entrada de datos serie'}},
                  {id:'ff0', position:{x:150,y:50}, data:{label:'FF0\nD   Q'}},
                  {id:'ff1', position:{x:300,y:50}, data:{label:'FF1\nD   Q'}},
                  {id:'ff2', position:{x:450,y:50}, data:{label:'FF2\nD   Q'}},
                  {id:'out', position:{x:600,y:50}, data:{label:'Salida de datos serie'}},
                  {id:'clk', position:{x:300,y:150}, data:{label:'CLK'}}
              ],
              initialEdges: [
                  {id:'e1', source:'in', target:'ff0'},{id:'e2', source:'ff0', target:'ff1'},
                  {id:'e3', source:'ff1', target:'ff2'},{id: 'e4', source:'ff2', target:'out'},
                  {id:'c1', source:'clk', target:'ff0'},{id:'c2', source:'clk', target:'ff1'},{id:'c3', source:'clk', target:'ff2'}
              ]
          }
        ]
      },
      {
        id: "t9_s5", shortTitle: "5. Familias Lógicas", title: "5. FAMILIAS LÓGICAS DE CIRCUITOS INTEGRADOS",
        content: [
          { type: 'paragraph', text: 'Las familias lógicas representan las diferentes tecnologías de semiconductores usadas para construir puertas y circuitos digitales. Las principales son:' },
          { type: 'list', items: [
            '<strong>TTL (Transistor-Transistor Logic):</strong> Usa transistores bipolares. Fue muy popular pero ha sido desplazada en gran medida por su alto consumo.',
            '<strong>CMOS (Complementary Metal-Oxide-Semiconductor):</strong> Usa transistores MOSFET. Es la tecnología dominante hoy en día por su bajísimo consumo de energía en estado estático y su buena inmunidad al ruido. La familia <code>74HC</code> es un ejemplo.'
          ]}
        ]
      },
      {
        id: "t9_s6", shortTitle: "6. Circuitos Integrados Comerciales", title: "6. CIRCUITOS INTEGRADOS COMERCIALES",
        content: [
          { type: 'paragraph', text: 'Existe una gran cantidad de circuitos integrados (CIs) comerciales que implementan los circuitos lógicos vistos. Se suelen identificar por una numeración estándar. Ejemplos:' },
          { type: 'list', items: [
            '<code>74LS08</code>: Cuádruple puerta AND de 2 entradas. Familia TTL.',
            '<code>74HC153</code>: Multiplexor dual 4 a 1. Familia CMOS.',
            '<code>74HC147</code>: Codificador Decimal a BCD. Familia CMOS.',
            '<code>74HC163</code>: Contador binario síncrono de 4 bits. Familia CMOS.'
          ]}
        ]
      },
      {
        id: "t9_s7", shortTitle: "7. Recursos", title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
          { type: 'resourceLink', name: 'Logic.ly', url: 'https://logic.ly/demo/', description: 'Simulador de circuitos lógicos online y muy intuitivo, ideal para experimentar con puertas lógicas, flip-flops y otros componentes.' },
          { type: 'resourceLink', name: 'OrCAD PSpice Designer', url: 'https://www.orcad.com/p-spice-designer', description: 'Herramienta profesional para el diseño y análisis de circuitos, utilizada en la industria de la fabricación electrónica.'}
        ]
      },
      {
        id: "t9_s8", shortTitle: "8. Aplicación", title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La comprensión de la lógica de circuitos es fundamental en el diseño y funcionamiento de prácticamente todos los sistemas electrónicos y computacionales.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'list', items: [
              '<strong>Fundamentos de electrónica (ESO/Bachillerato):</strong> Introducción a cómo los circuitos procesan señales, utilizando ejemplos simples para explicar la lógica combinacional y secuencial.',
              '<strong>Formación Profesional (Electricidad y Electrónica):</strong> Se enseñan en profundidad el diseño y las aplicaciones de los circuitos lógicos, desde puertas básicas hasta sistemas complejos con microcontroladores.'
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Desarrollo de circuitos integrados (ASIC, FPGA):</strong> Diseño de circuitos lógicos a nivel de componentes y sistemas.',
              '<strong>Programación de microcontroladores:</strong> Es crucial entender cómo diseñar y optimizar circuitos secuenciales para aplicaciones específicas.',
              '<strong>Diseño de sistemas de control:</strong> Uso de lógica de circuitos en el diseño de sistemas de control automatizados, que requieren un manejo preciso de secuencias y estados.'
          ]}
        ]
      },
      {
        id: "t9_s9", shortTitle: "9. Conclusión", title: "9. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En este tema se ha presentado una visión global de la lógica de circuitos, describiendo los circuitos combinacionales y secuenciales, que son la base sobre la que se materializa cualquier sistema digital. Los circuitos combinacionales y secuenciales pueden construirse con diferentes familias lógicas, como las familias bipolares (TTL) o las familias MOS (CMOS), que es la dominante en la actualidad.'}
        ]
      },
      {
        id: "t9_s10", shortTitle: "10. Bibliografía", title: "10. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
            { text: 'Floyd, T. (2016). <em>Fundamentos de sistemas digitales</em>. Editorial Pearson.' },
            { text: 'Tocci, R. (2017). <em>Sistemas digitales: Principios y aplicaciones</em>. Editorial Prentice Hall.' },
            { text: 'Stallings, W. (2021). <em>Computer organization and architecture. Designing for performance</em>. Editorial Pearson.' },
            { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
            { text: 'LogicWorks (Recurso Educativo)', url: 'https://www.designworkssolutions.com/' },
            { text: 'OrCAD (Software Profesional)', url: 'https://www.orcad.com/' }
          ]}
        ]
      }
    ]
  };