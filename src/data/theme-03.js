export const theme03Data = {
    id: "theme3",
    name: "TEMA 3: Componentes, Estructura y Func. CPU",
    title: "TEMA 3. INFORMÁTICA / S.A.I. - COMPONENTES, ESTRUCTURA Y FUNCIONAMIENTO DE LA UNIDAD CENTRAL DE PROCESO",
    version: "Versión: Mayo 2024",
    sections: [
      {
        id: "t3_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'El presente tema forma parte del temario oficial (BOE 13/02/1996) y se ubica en el bloque de "Hardware", como continuación del tema anterior.' },
          { type: 'paragraph', text: 'En 1946, <strong>John Von Neumann</strong> estableció el modelo básico de arquitectura para computadores digitales, basado en conectar permanentemente las unidades funcionales:' },
          { type: 'list', items: ['Unidad de memoria', 'Unidad central de proceso', 'Unidad de entrada/salida', 'Buses'] },
          { type: 'paragraph', text: 'Aunque la tecnología ha avanzado, la base de su funcionamiento es la misma. Este tema se centrará en los componentes, estructura y funcionamiento de la <strong>Unidad Central de Proceso (UCP)</strong>.' },
          { type: 'flowDiagram', title: 'Arquitectura de Von Neumann (Recordatorio)',
            initialNodes: [
              { id: 'ucp', position: { x: 250, y: 25 }, data: { label: 'UCP' }, style: { width: 200, textAlign: 'center' } },
              { id: 'registros', position: { x: 150, y: 125 }, data: { label: 'Registros' } },
              { id: 'ua', position: { x: 350, y: 125 }, data: { label: 'Unidad Aritmética' } },
              { id: 'uc', position: { x: 250, y: 225 }, data: { label: 'Unidad de Control' } },
              { id: 'memoria', position: { x: 550, y: 25 }, data: { label: 'Memoria Principal' } },
              { id: 'es', position: { x: 550, y: 225 }, data: { label: 'Unidad de E/S' } },
              { id: 'periferico', position: { x: 750, y: 225 }, data: { label: 'Periférico' } },
            ],
            initialEdges: [
              { id: 'e1', source: 'ucp', target: 'registros' }, { id: 'e2', source: 'ucp', target: 'ua' }, { id: 'e3', source: 'ucp', target: 'uc' },
              { id: 'e4', source: 'ucp', target: 'memoria', animated: true }, { id: 'e5', source: 'ucp', target: 'es', animated: true },
              { id: 'e6', source: 'memoria', target: 'ucp', animated: true }, { id: 'e7', source: 'es', target: 'ucp', animated: true },
              { id: 'e8', source: 'es', target: 'periferico' }
            ]
          },
          { type: 'paragraph', text: 'El estudio de los microprocesadores está presente dentro del currículo de la familia profesional de Informática y Comunicaciones, en módulos como <code>Fundamentos de hardware</code>, <code>Sistemas Informáticos</code> o <code>Montaje y mantenimiento de equipos</code>.'}
        ]
      },
      {
        id: "t3_s2",
        shortTitle: "2. Parámetros Rendimiento",
        title: "2. PARÁMETROS QUE DETERMINAN EL RENDIMIENTO DE LA CPU",
        content: [
          { type: 'paragraph', text: 'El rendimiento de una CPU se ve influenciado por varios parámetros y características técnicas críticas. Los más importantes son:' },
          { type: 'definitionList', items: [
              { term: 'Velocidad de reloj (frecuencia):', definition: 'Representa el número de ciclos de operación por segundo (Hz). Aunque importante, no es el único factor; el <strong>IPC (Instrucciones por Ciclo)</strong> es igualmente crucial.' },
              { term: 'Memoria caché:', definition: 'Memoria de acceso rápido ubicada dentro de la CPU para almacenar temporalmente datos e instrucciones frecuentes. Está dividida en niveles (<code>L1</code>, <code>L2</code>, <code>L3</code>), siendo <code>L1</code> la más rápida y pequeña, y <code>L3</code> la más lenta y grande.' },
              { term: 'Núcleos (cores):', definition: 'Las CPUs modernas contienen múltiples núcleos, permitiendo que varios procesos se ejecuten en paralelo. Esto mejora el rendimiento en aplicaciones multihilo.' },
              { term: 'Soporte para Multihilo (Hyper-Threading / SMT):', definition: 'Algunas CPUs pueden ejecutar múltiples hilos de ejecución por núcleo, lo que puede mejorar el rendimiento en tareas compatibles.' },
          ]},
          { type: 'paragraph', text: 'Estas características, en conjunto, determinan el rendimiento de una CPU para manejar diversas cargas de trabajo, desde computación básica hasta tareas intensivas como juegos en alta definición, edición de video y simulaciones científicas.' }
        ]
      },
      {
        id: "t3_s3",
        shortTitle: "3. Componentes y Estructura",
        title: "3. COMPONENTES Y ESTRUCTURA DE LA CPU",
        content: [
          { type: 'paragraph', text: 'La Unidad Central de Proceso o CPU es el “cerebro” de la computadora. Su función es ejecutar programas almacenados en la memoria principal buscando sus instrucciones y examinándolas para después ejecutarlas una tras otra. (Tanenbaum, 2000). La CPU está formada por:' },
          { type: 'list', items: ['Unidad de control (UC)', 'Unidad aritmético-lógica (ALU)', 'Registros', 'Buses', 'Otros componentes (FPU, etc.)']}
        ]
      },
      {
        id: "t3_s3_1", shortTitle: "3.1. UC", title: "3.1. UNIDAD DE CONTROL",
        content: [
          { type: 'paragraph', text: 'La Unidad de Control o UC es la encargada de gobernar el funcionamiento del ordenador. Para realizar su función, la UC utiliza los siguientes elementos:' },
          { type: 'definitionList', items: [
              { term: 'Contador de programa (PC):', definition: 'apunta a la siguiente instrucción que debe buscarse para ejecutarse.'},
              { term: 'Registro de instrucción (IR):', definition: 'almacena temporalmente la instrucción del programa que la UC está interpretando o ejecutando.'},
              { term: 'Registro de estado (PSW):', definition: 'almacena una serie de bits que se activan según sea el resultado de la última operación realizada por la ALU.'},
              { term: 'Decodificador:', definition: 'se encarga de extraer el código de operación de la instrucción en curso y emitir las señales necesarias para su ejecución.'},
              { term: 'Secuenciador:', definition: 'genera una serie de órdenes elementales (microórdenes) que permiten ejecutar la instrucción, de forma síncrona con el reloj.'},
              { term: 'Reloj:', definition: 'generador de impulsos que marca el ritmo de ejecución de las operaciones.'}
          ]},
          { type: 'flowDiagram', title: 'Componentes de la Unidad de Control (Reutilizado)',
              initialNodes: [
                {id: 'reloj', position: {x: 0, y: 100}, data: {label: 'Reloj'}},
                {id: 'secuenciador', position: {x: 200, y: 100}, data: {label: 'Secuenciador'}},
                {id: 'decodificador', position: {x: 400, y: 100}, data: {label: 'Decodificador'}},
                {id: 'pc', position: {x: 600, y: 0}, data: {label: 'Contador de Programa (PC)'}},
                {id: 'ir', position: {x: 600, y: 100}, data: {label: 'Registro de Instrucción (IR)'}},
                {id: 'psw', position: {x: 200, y: 200}, data: {label: 'Palabra de Estado del Procesador (PSW)'}},
              ],
              initialEdges: [
                {id: 'e1', source: 'reloj', target: 'secuenciador'}, {id: 'e2', source: 'secuenciador', target: 'decodificador'},
                {id: 'e3', source: 'decodificador', target: 'ir'}, {id: 'e4', source: 'ir', target: 'pc'},
                {id: 'e8', source: 'psw', target: 'secuenciador'}
              ]
          }
        ]
      },
      {
          id: "t3_s3_2", shortTitle: "3.2. ALU", title: "3.2. UNIDAD ARITMÉTICO-LÓGICA",
          content: [
              { type: 'paragraph', text: 'La Unidad Aritmético-Lógica o ALU se encarga de realizar las operaciones aritméticas y lógicas con los datos (Stallings, 2004), siguiendo las indicaciones de la unidad de control. Sus operaciones se pueden clasificar en:' },
              { type: 'list', items: ['<strong>Aritméticas:</strong> suma, resta, multiplicación y división', '<strong>Lógicas:</strong> NOT, AND, OR, XOR', '<strong>De desplazamiento de bits</strong>']},
              { type: 'paragraph', text: 'Para realizar su función, la ALU utiliza los siguientes componentes:'},
              { type: 'definitionList', items: [
                  {term: 'Circuito operacional:', definition: 'toma unos datos de entrada (operandos) y una señal de operación, que indica a la ALU el tipo de operación a realizar.'},
                  {term: 'Registros de entrada (REN):', definition: 'almacenan los datos que van a participar en la operación (operandos).'},
                  {term: 'Registro acumulador (AC):', definition: 'almacena el resultado de la operación.'},
                  {term: 'Registro de estado (PSW):', definition: 'almacena una serie de bits (flags) que se activan según sea el resultado de la última operación (ej. flag de cero, flag de acarreo, etc.).'}
              ]},
              { type: 'flowDiagram', title: 'Componentes de la ALU (Reutilizado)',
                initialNodes: [
                  {id: 'banco', position: {x: 0, y: 50}, data: {label: 'Banco de Registros (REN)'}},
                  {id: 'circuito', position: {x: 250, y: 50}, data: {label: 'Circuito Operacional'}},
                  {id: 'acumulador', position: {x: 500, y: 50}, data: {label: 'Registro Acumulador (AC)'}},
                  {id: 'estado', position: {x: 250, y: 200}, data: {label: 'Registro de Estado (PSW)'}},
                ],
                initialEdges: [
                  {id: 'e1', source: 'banco', target: 'circuito', animated: true},
                  {id: 'e2', source: 'circuito', target: 'acumulador', animated: true},
                  {id: 'e3', source: 'circuito', target: 'estado'}
                ]
              }
          ]
      },
      {
          id: "t3_s3_3", shortTitle: "3.3. Registros", title: "3.3. REGISTROS",
          content: [
              { type: 'paragraph', text: 'Un registro es una pequeña memoria de acceso extremadamente rápido, diseñada para almacenar un dato, instrucción o dirección de memoria (Prieto, 2006). Se clasifican en:' },
              { type: 'definitionList', items: [
                  {term: 'Generales:', definition: 'Contienen los operandos con los que se realizarán las instrucciones del programa.'},
                  {term: 'Específicos:', definition: 'Cumplen una función concreta. Los más comunes son: <code>MAR</code> (Registro de Dirección de Memoria), <code>PC</code> (Contador de Programa), <code>IR</code> (Registro de Instrucción), <code>PSW</code> (Palabra de Estado del Procesador), y <code>SP</code> (Puntero de Pila).'}
              ]}
          ]
      },
      {
        id: "t3_s3_4", shortTitle: "3.4. Buses", title: "3.4. BUSES",
        content: [
          { type: 'paragraph', text: 'La CPU se divide en unidades funcionales y para la comunicación entre ellas se utilizan los denominados buses. Según su funcionalidad, se distinguen:'},
          { type: 'definitionList', items: [
              {term: 'Bus de datos:', definition: 'Transfiere los datos entre los diferentes elementos.'},
              {term: 'Bus de direcciones:', definition: 'Transfiere únicamente direcciones desde la CPU a la memoria o a los puertos de E/S.'},
              {term: 'Bus de control:', definition: 'Transporta señales de control y temporización que coordinan todas las actividades (ej. señales de lectura/escritura).'}
          ]}
        ]
      },
      {
        id: "t3_s3_5", shortTitle: "3.5. Otros Componentes", title: "3.5. OTROS COMPONENTES",
        content: [
          { type: 'paragraph', text: 'La estructura de la CPU ha evolucionado, incorporando circuitos adicionales para aumentar sus prestaciones. Entre ellos se encuentran:'},
          { type: 'list', items: [
              '<strong>Unidad de Punto Flotante (FPU):</strong> También conocida como coprocesador matemático, se especializa en manejar cálculos de números de punto flotante, críticos para ciencia, ingeniería, gráficos y juegos.',
              '<strong>Memoria caché:</strong> Memoria intermedia (<code>L1</code>, <code>L2</code>, <code>L3</code>) entre la memoria principal y los registros de la CPU para acelerar el acceso a los datos.',
              '<strong>Controlador de Memoria Integrado (IMC):</strong> Gestiona las transacciones entre el procesador y la memoria RAM. Su integración en el chip del procesador reduce la latencia y aumenta el rendimiento.',
              '<strong>Unidad de Gestión de Energía:</strong> Ajusta el consumo de energía y la velocidad del procesador en función de la carga de trabajo, mejorando la eficiencia energética.'
          ]}
        ]
      },
      {
        id: "t3_s4", shortTitle: "4. Funcionamiento", title: "4. FUNCIONAMIENTO DE LA CPU",
        content: [
            { type: 'paragraph', text: 'Cada instrucción máquina se ejecuta mediante una secuencia de operaciones elementales (microoperaciones). Estas operaciones son activadas por señales de control del secuenciador de la UC, sincronizadas por pulsos del reloj. Se pueden identificar dos tipos de señales:'},
            { type: 'list', items: ['<strong>Señales de nivel:</strong> activas durante un período completo del reloj.', '<strong>Señales de pulso:</strong> marcan un instante de tiempo preciso sincronizado con los pulsos del reloj.']},
            { type: 'paragraph', text: 'De este modo, el funcionamiento de la CPU se puede considerar un ciclo repetitivo de dos fases principales:'},
            { type: 'subheading', text: '1. Fase de búsqueda (Fetch Cycle):'},
            { type: 'list', items: [
                'La CPU carga en el <strong>MAR</strong> la dirección de memoria que indica el <strong>PC</strong>.',
                'Se envía una señal de lectura por el bus de control. La memoria responde enviando el contenido de esa dirección (la instrucción) por el bus de datos.',
                'La instrucción se almacena en el <strong>IR</strong> (Registro de Instrucción).',
                'El <strong>PC</strong> se incrementa para apuntar a la siguiente instrucción.'
            ]},
            { type: 'subheading', text: '2. Fase de ejecución (Execute Cycle):'},
            { type: 'paragraph', text: 'La instrucción en el IR es decodificada. El decodificador interpreta el código de operación y activa la secuencia de señales de control necesarias para ejecutarla. Esto puede implicar leer operandos de memoria, realizar una operación en la ALU y escribir un resultado. Una vez concluida, se vuelve a iniciar la fase de búsqueda.'}
        ]
      },
      {
        id: "t3_s5", shortTitle: "5. Proyecto TOP500", title: "5. PROYECTO TOP500",
        content: [
          { type: 'paragraph', text: 'El proyecto Top500 es un ranking de los 500 supercomputadores con mayor rendimiento del mundo. Según la lista de <strong>Junio de 2024</strong>, el número 1 es el supercomputador estadounidense <strong>Frontier</strong> (ORNL), y el segundo puesto lo ocupa <strong>Aurora</strong> (Argonne National Laboratory).'}
        ]
      },
      {
          id: "t3_s6", shortTitle: "6. Importancia del Diseño", title: "6. IMPORTANCIA DEL DISEÑO DE LA UNIDAD CENTRAL DE PROCESO",
          content: [
              { type: 'paragraph', text: 'El diseño de la UCP es crítico. En los últimos años se han detectado múltiples vulnerabilidades de hardware, como <strong>Meltdown</strong> y <strong>Spectre</strong> (2018), que permitían acceder a zonas de memoria no autorizadas, o <strong>Spectre-BHB</strong> (2022), demostrando la importancia vital de la seguridad en el diseño de microprocesadores.'}
          ]
      },
      {
        id: "t3_s7", shortTitle: "7. Recursos", title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
          { type: 'paragraph', text: 'A continuación, se enumeran varias herramientas software que recopilan información sobre la CPU de un ordenador:'},
          { type: 'list', items: ['HWMonitor', 'Open Hardware Monitor', 'Speccy', 'HardInfo', 'CPU-Z']}
        ]
      },
      {
        id: "t3_s8", shortTitle: "8. Aplicación", title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La comprensión de la UCP es crucial tanto en el ámbito educativo como en el profesional debido a su papel central en la informática y la tecnología.'},
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'nestedList', items: [
              { text: '<strong>Educación Secundaria:</strong>', subItems: ['Se abordan los conceptos básicos de la CPU, incluyendo su función como "cerebro" del ordenador, a través de ejemplos prácticos y demostraciones sencillas.'] },
              { text: '<strong>Formación Profesional:</strong>', subItems: ['Los estudiantes estudian las características de las CPUs, su evolución, y cómo su diseño influye en el rendimiento del sistema en módulos como "Fundamentos de Hardware", "Sistemas Informáticos", "Montaje y mantenimiento de equipos", etc.'] }
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Diseño de sistemas embebidos:</strong> Profesionales que trabajan en la creación de dispositivos electrónicos especializados (wearables, automotrices) requieren un conocimiento profundo de la estructura de las CPUs para optimizar la eficiencia.',
              '<strong>Desarrollo de software:</strong> Desarrolladores de bajo nivel y videojuegos necesitan entender cómo el software interactúa con el hardware para optimizar el uso del procesador.',
              '<strong>Inteligencia Artificial:</strong> La eficiencia en la ejecución de modelos de IA depende en gran medida de la capacidad de la CPU para manejar operaciones intensivas.',
              '<strong>Soporte técnico:</strong> El personal de soporte debe comprender la estructura y funcionamiento de la CPU para diagnosticar correctamente los problemas del sistema.'
          ]}
        ]
      },
      {
        id: "t3_s9", shortTitle: "9. Conclusión", title: "9. CONCLUSIÓN",
        content: [
            { type: 'paragraph', text: 'En este tema se ha presentado una visión global sobre la CPU, una de las unidades funcionales que conforman la arquitectura de Von Neumann, considerada el “cerebro” de un computador. Se han detallado los componentes y estructura que conforman una CPU y se ha descrito el funcionamiento cíclico (búsqueda y ejecución) que lleva a cabo para realizar el procesamiento de los datos.'}
        ]
      },
      {
        id: "t3_s10", shortTitle: "10. Bibliografía", title: "10. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill' },
              { text: 'Stallings, W. (2006). <em>Organización y arquitectura de computadores</em>. Editorial Prentice-Hall' },
              { text: 'Tanenbaum, A. (2000). <em>Organización de computadoras. Un enfoque estructurado</em>. Editorial Prentice-Hall' },
              { text: 'Joyanes, L. (2020). <em>Fundamentos de programación</em>. Editorial McGraw-Hill' },
              { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' },
              { text: 'De Miguel, P. (2004) <em>Fundamentos de los computadores</em>. Editorial Paraninfo.' },
              { text: 'Patterson, D. y Hennessy, J. (2000). <em>Estructura y diseño de computadores</em>. Editorial Reverté' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' },
              { text: 'ComputerHoy', url: 'https://computerhoy.com' },
              { text: 'Tom\'s Hardware', url: 'https://www.tomshardware.com' },
              { text: 'Piriform Speccy', url: 'https://www.piriform.com/speccy' },
              { text: 'CPUID', url: 'https://www.cpuid.com' },
              { text: 'TOP500 Project', url: 'https://www.top500.org' }
          ]}
        ]
      }
    ]
  };