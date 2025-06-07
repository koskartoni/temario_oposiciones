export const theme02Data = {
    id: "theme2",
    name: "TEMA 2: Elementos Funcionales Ord. Digital",
    title: "TEMA 2. INFORMÁTICA / S.A.I. - ELEMENTOS FUNCIONALES DE UN ORDENADOR DIGITAL. ARQUITECTURA",
    version: "Versión: Septiembre 2024", // ACTUALIZADO
    sections: [
      {
        id: "t2_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'El presente tema forma parte del temario oficial publicado en el <strong>BOE de 13 de febrero de 1996</strong>. Se ubica dentro del bloque temático de “Hardware”, y precede al tema denominado “Componentes, estructura y funcionamiento de la Unidad Central de Proceso".' },
          { type: 'paragraph', text: '<strong>John von Neumann</strong> fue un matemático y científico húngaro-estadounidense que hizo importantes contribuciones al desarrollo de la informática moderna, siendo uno de los principales responsables de la formulación del concepto de "<strong>arquitectura de von Neumann</strong>". Esta arquitectura, propuesta en 1945, se basa en la idea de que una computadora debe almacenar tanto las <strong>instrucciones como los datos en la misma memoria</strong>, permitiendo que la máquina sea más flexible y eficiente.' },
          { type: 'paragraph', text: 'Uno de los primeros computadores electrónicos fue el <code>ENIAC</code> (Electronic Numerical Integrator and Computer), que se completó en 1946. Sin embargo, el <code>ENIAC</code> no seguía la arquitectura de von Neumann, ya que no utilizaba el concepto de programa almacenado. Posteriormente, el diseño del <code>EDVAC</code> (Electronic Discrete Variable Automatic Computer), finalizado en 1949, incorporó las ideas de von Neumann, estableciendo un modelo que sigue siendo la base de la mayoría de las computadoras modernas.' },
          { type: 'paragraph', text: 'El término <strong>arquitectura de Von Neumann</strong> se acuñó a partir del memorando <em>First Draft of a Report on the EDVAC</em> escrito por el matemático John von Neumann en el que se proponía el concepto de programa almacenado.'},
          { type: 'paragraph', text: 'Aunque la tecnología ha avanzado mucho, el diseño de las unidades funcionales es crítico y de vital importancia. En los últimos años se han detectado múltiples vulnerabilidades en los microprocesadores como <strong>Meltdown</strong> y <strong>Spectre</strong> (2018), y más recientemente <strong>Downfall</strong> (Intel, 2023) e <strong>Inception</strong> (AMD, 2023), demostrando que la seguridad a nivel de hardware es un campo de investigación constante.'},
          { type: 'paragraph', text: 'A lo largo de este tema, nos centraremos en estudiar la estructura y cometido de cada una de las unidades funcionales. El estudio de estos elementos está presente dentro del currículo de la familia profesional de Informática y Comunicaciones, enmarcado en la nueva <strong>Ley Orgánica de Ordenación e Integración de la FP</strong>, y se concreta en módulos de los siguientes ciclos formativos:' },
          { type: 'nestedList', items: [
              { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Fundamentos de hardware</code>' },
              { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma</strong> – Módulo: <code>Sistemas informáticos</code>' },
              { text: 'CFGS de <strong>Desarrollo de Aplicaciones Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
              { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Montaje y mantenimiento de equipos</code>' }
          ]}
        ]
      },
      {
        id: "t2_s2",
        shortTitle: "2. Ordenador Digital",
        title: "2. ORDENADOR DIGITAL",
        content: [
            { type: 'paragraph', text: 'Un ordenador es un dispositivo electrónico utilizado para procesar información y obtener resultados. Se puede considerar como una unidad en la que se ponen ciertos datos, entrada de datos, procesa estos datos y produce unos datos de salida. (Joyanes, 2020).' }
        ]
      },
      {
          id: "t2_s2_1", shortTitle: "2.1. Generaciones", title: "2.1. GENERACIONES DE ORDENADORES",
          content: [
              { type: 'paragraph', text: 'Las generaciones de ordenadores se clasifican según los avances tecnológicos que marcaron significativamente el diseño, la capacidad y el rendimiento de las máquinas informáticas a lo largo del tiempo. Aquí se presenta una descripción general de las distintas generaciones:'},
              { type: 'nestedList', items: [
                  { text: '<strong>1. Primera generación (1940-1956) - Válvulas de vacío:</strong>', subItems: ['Utilizaban válvulas de vacío para circuitos y memorias de tambor magnético.', 'Programación en lenguaje máquina.', 'Grandes y consumían mucha energía, generando mucho calor.', 'Ejemplos: <code>ENIAC</code>, <code>UNIVAC</code>, <code>IBM 650</code>.'] },
                  { text: '<strong>2. Segunda generación (1956-1963) - Transistores:</strong>', subItems: ['Reemplazo de las válvulas de vacío por transistores, haciéndolos más pequeños, rápidos y eficientes energéticamente.', 'Introducción de lenguajes de programación de alto nivel como <code>FORTRAN</code> y <code>COBOL</code>.', 'Uso de memoria de núcleo magnético.', 'Ejemplos: <code>IBM 7094</code>, <code>PDP-1</code>, <code>CDC 1604</code>.'] },
                  { text: '<strong>3. Tercera generación (1964-1971) - Circuitos integrados:</strong>', subItems: ['Los transistores se agruparon en circuitos integrados (CI), aumentando la potencia y disminuyendo el tamaño.', 'Mejoras en los sistemas operativos que permitían multiprogramación y tiempo compartido.', 'Ejemplos: <code>IBM 360</code>, <code>PDP-8</code>, <code>UNIVAC 1108</code>.'] },
                  { text: '<strong>4. Cuarta generación (1971-presente) - Microprocesadores:</strong>', subItems: ['Introducción del microprocesador que colocó los circuitos de una computadora en un único chip de silicio.', 'Aparición de los ordenadores personales.', 'Desarrollo de interfaces gráficas de usuario (GUI) y de internet.', 'Ejemplos: <code>Apple II</code>, <code>IBM PC</code>, ordenadores personales actuales.'] },
                  { text: '<strong>5. Quinta generación (Presente - ¿?) - Inteligencia artificial:</strong>', subItems: ['No hay un consenso claro sobre cuándo empezó esta generación.', 'Se caracterizaría por el uso de la inteligencia artificial (IA) para procesamiento de lenguaje natural, reconocimiento de patrones y sistemas expertos.', 'Mayor enfoque en la conectividad a nivel global y la computación en la nube.'] }
              ]}
          ]
      },
      {
          id: "t2_s2_2", shortTitle: "2.2. Clasificación", title: "2.2. CLASIFICACIÓN",
          content: [
              { type: 'paragraph', text: 'Existen muchos tipos de ordenadores, los cuales pueden ser clasificados en función de diversos criterios. Aunque una de las clasificaciones más comunes se realiza atendiendo a la <strong>potencia de cálculo</strong> (de mayor a menor):' },
              { type: 'list', items: ['Superordenadores o supercomputadores.', 'Mainframes o macrocomputadoras.', 'Minicomputadora o miniordenador.', 'Workstations o estaciones de trabajo.', 'Ordenadores personales (portátiles y sobremesa).', 'Ordenadores móviles (smartphones, tablets, etc.)']}
          ]
      },
      {
          id: "t2_s2_3", shortTitle: "2.3. Factores Potencia", title: "2.3. FACTORES QUE DETERMINAN LA POTENCIA DE UN ORDENADOR",
          content: [
              { type: 'paragraph', text: 'La potencia de un ordenador puede ser determinada por una serie de características o factores hardware que influyen en su capacidad para realizar tareas. Algunos de los factores más significativos son:'},
              { type: 'nestedList', items: [
                  { text: '<strong>A. CPU (Unidad Central de Procesamiento):</strong>', subItems: ['<strong>IPC (Instrucciones por Ciclo):</strong> Eficiencia del procesador al ejecutar instrucciones.', '<strong>Velocidad del reloj (GHz):</strong> Número de ciclos por segundo.', '<strong>Número de núcleos y subprocesos (hilos):</strong> Capacidad de procesamiento paralelo y multitarea.', '<strong>Memoria Caché (L1, L2, L3):</strong> Memoria ultrarrápida que reduce la latencia con la RAM.'] },
                  { text: '<strong>B. GPU (Unidad de Procesamiento Gráfico):</strong>', subItems: ['Capacidad de procesamiento paralelo para gráficos, IA y cálculos complejos.', 'Memoria dedicada (VRAM), especialmente su ancho de banda (e.g., <code>GDDR6X</code>).'] },
                  { text: '<strong>C. Memoria RAM:</strong>', subItems: ['<strong>Cantidad (GB):</strong> Afecta a la capacidad de multitarea.', '<strong>Velocidad (MT/s) y Latencia (CL):</strong> Afectan a la rapidez con que la CPU puede acceder a los datos.'] },
                  { text: '<strong>D. Almacenamiento:</strong>', subItems: ['<strong>Tipo y Tecnología:</strong> La diferencia de velocidad entre un <code>HDD</code>, un <code>SSD SATA</code> y un <code>SSD NVMe (PCIe 4.0/5.0)</code> es un factor determinante en la agilidad del sistema.', '<strong>Velocidad de lectura/escritura secuencial y aleatoria.</strong>'] },
                  { text: '<strong>E. Placa base y Chipset:</strong>', subItems: ['Soporta y conecta todos los componentes, determinando la capacidad de expansión.', 'Calidad del <strong>VRM (Módulo Regulador de Voltaje)</strong> para suministrar energía estable a la CPU.'] }
              ]}
          ]
      },
      {
        id: "t2_s3",
        shortTitle: "3. Elementos Func.",
        title: "3. ELEMENTOS FUNCIONALES DE UN ORDENADOR DIGITAL",
        content: [
          { type: 'paragraph', text: 'La arquitectura de Von Neumann describe un ordenador con 4 secciones principales: la <strong>unidad central de proceso (CPU en inglés, UCP en español)</strong>, la <strong>memoria</strong>, y la <strong>unidad de entrada y salida (E/S)</strong>. Todas estas partes están interconectadas por canales de comunicación denominados <strong>buses</strong>.'},
          { type: 'flowDiagram', title: 'Arquitectura de Von Neumann',
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
          }
        ]
      },
      {
          id: "t2_s3_1", shortTitle: "3.1. CPU", title: "3.1. UNIDAD CENTRAL DE PROCESO (CPU)",
          content: [
              { type: 'paragraph', text: 'La Unidad Central de Proceso o CPU es el “cerebro” de la computadora. Su función es ejecutar programas almacenados en la memoria principal buscando sus instrucciones y examinándolas para después ejecutarlas una tras otra. (Tanenbaum, 2000). La CPU está formada por:' },
              { type: 'list', items: ['Unidad de control (UC)', 'Unidad aritmético-lógica (ALU)', 'Registros']}
          ]
      },
      {
          id: "t2_s3_1_1", shortTitle: "3.1.1. UC", title: "3.1.1. UNIDAD DE CONTROL",
          content: [
              { type: 'paragraph', text: 'La Unidad de Control o UC es la encargada de gobernar el funcionamiento del ordenador. Para realizar su función, la UC utiliza los siguientes elementos:' },
              { type: 'definitionList', items: [
                  { term: 'Contador de programa (PC):', definition: 'apunta a la siguiente instrucción que debe buscarse para ejecutarse.'},
                  { term: 'Registro de instrucción (IR):', definition: 'almacena temporalmente la instrucción del programa que la UC está interpretando o ejecutando.'},
                  { term: 'Registro de estado (PSW):', definition: 'almacena una serie de bits que se activan según sea el resultado de la última operación realizada por la ALU.'},
                  { term: 'Decodificador:', definition: 'se encarga de extraer el código de operación de la instrucción en curso, analizarlo y emitir las señales necesarias al resto de elementos para su ejecución a través del secuenciador.'},
                  { term: 'Secuenciador:', definition: 'genera una serie de órdenes muy elementales que permiten ejecutar la instrucción en curso, de forma síncrona con el reloj del sistema.'},
                  { term: 'Reloj:', definition: 'generador de impulsos que marca el momento en que han de comenzar los distintos pasos de que consta cada instrucción.'}
              ]},
              { type: 'flowDiagram', title: 'Componentes de la Unidad de Control',
                initialNodes: [
                  {id: 'reloj', position: {x: 0, y: 100}, data: {label: 'Reloj'}},
                  {id: 'secuenciador', position: {x: 200, y: 100}, data: {label: 'Secuenciador'}},
                  {id: 'decodificador', position: {x: 400, y: 100}, data: {label: 'Decodificador'}},
                  {id: 'pc', position: {x: 600, y: 0}, data: {label: 'Contador de Programa (PC)'}},
                  {id: 'ir', position: {x: 600, y: 100}, data: {label: 'Registro de Instrucción (IR)'}},
                  {id: 'psw', position: {x: 200, y: 200}, data: {label: 'Palabra de Estado del Procesador (PSW)'}},
                  {id: 'bus_control', position: {x: 0, y: 0}, data: {label: 'Bus de Control'}, style: {backgroundColor: '#aaffaa'}},
                  {id: 'bus_dir', position: {x: 0, y: 200}, data: {label: 'Bus de Direcciones'}, style: {backgroundColor: '#aaaaff'}},
                  {id: 'bus_datos', position: {x: 400, y: 200}, data: {label: 'Bus de Datos'}, style: {backgroundColor: '#ffaaaa'}},
                ],
                initialEdges: [
                  {id: 'e1', source: 'reloj', target: 'secuenciador'}, {id: 'e2', source: 'secuenciador', target: 'decodificador'},
                  {id: 'e3', source: 'decodificador', target: 'ir'}, {id: 'e4', source: 'ir', target: 'pc'},
                  {id: 'e5', source: 'bus_control', target: 'secuenciador', animated: true}, {id: 'e6', source: 'secuenciador', target: 'bus_dir', animated: true},
                  {id: 'e7', source: 'ir', target: 'bus_datos', animated: true}, {id: 'e8', source: 'psw', target: 'secuenciador'}
                ]
              }
          ]
      },
      {
          id: "t2_s3_1_2", shortTitle: "3.1.2. ALU", title: "3.1.2. UNIDAD ARITMÉTICO-LÓGICA",
          content: [
              { type: 'paragraph', text: 'La Unidad Aritmética-Lógica o ALU es la parte de la computadora que realiza las operaciones aritméticas y lógicas sobre los datos (Stallings, 2022). Los tipos de operaciones que puede realizar la ALU se pueden clasificar en:' },
              { type: 'list', items: ['<strong>Aritméticas:</strong> suma, resta, multiplicación y división', '<strong>Lógicas:</strong> NOT, AND, OR, XOR', '<strong>De desplazamiento de bits</strong>']},
              { type: 'paragraph', text: 'Para realizar su función, la ALU utiliza los siguientes componentes:'},
              { type: 'definitionList', items: [
                  {term: 'Circuito operacional:', definition: 'toma unos datos de entrada (operandos) y una señal de operación, que indica a la ALU el tipo de operación a realizar.'},
                  {term: 'Registros de entrada (REN):', definition: 'almacenan los datos que van a participar en la operación (operandos).'},
                  {term: 'Registro acumulador (AC):', definition: 'almacena el resultado de la operación.'},
                  {term: 'Registro de estado (PSW):', definition: 'almacena una serie de bits que se activan según sea el resultado de la última operación.'}
              ]},
              { type: 'flowDiagram', title: 'Componentes de la ALU',
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
          id: "t2_s3_1_3", shortTitle: "3.1.3. Registros", title: "3.1.3. REGISTROS",
          content: [
              { type: 'paragraph', text: 'Los registros de la CPU son pequeñas memorias de acceso muy rápido dedicadas al almacenamiento temporal de datos necesarios para la ejecución de cada instrucción. Los registros pueden clasificarse en:'},
              { type: 'definitionList', items: [
                  {term: 'Generales:', definition: 'son aquellos que contienen los operandos con los que se realizarán las instrucciones del programa.'},
                  {term: 'Específicos:', definition: 'son aquellos cuyo uso cumple una función concreta. Los más comunes son: <code>MAR</code> (Memory Address Register), <code>PC</code> (Program Counter), <code>IR</code> (Instruction Register), <code>PSW</code> (Process Status Word), <code>SP</code> (Stack Pointer).'}
              ]}
          ]
      },
      {
          id: "t2_s3_2", shortTitle: "3.2. Memoria", title: "3.2. MEMORIA",
          content: [
              { type: 'paragraph', text: 'La CPU incluye registros que almacenan los datos e instrucciones que está usando en un corto periodo de tiempo. Estos registros tienen una capacidad limitada. Por esta razón, para poder ejecutar programas completos junto con los datos que estos manipulan, es necesario una capacidad de almacenamiento mucho mayor. Esta capacidad de almacenamiento la suministra la memoria.'},
              { type: 'paragraph', text: 'La memoria de un ordenador se puede organizar en una <strong>jerarquía de memoria</strong>. Cuanto más alta esté situada la memoria en la jerarquía más <strong>rápida</strong> será, pero <strong>menor capacidad</strong> y <strong>mayor coste por bit</strong> tendrá. Por otra parte, cuanto más baja esté situada, más <strong>lenta</strong> será, pero <strong>mayor capacidad</strong> y <strong>menor coste por bit</strong> tendrá.'},
              { type: 'paragraph', text: 'Los niveles superiores, concretamente el de registros, caché, memoria RAM y memoria ROM, se suelen agrupar con el nombre de <strong>memoria interna</strong> (Prieto, 2006). Y los niveles inferiores se suelen conocer con el nombre de <strong>memoria externa</strong>.'},
              { type: 'flowDiagram', title: 'Jerarquía de Memoria',
                  initialNodes: [
                      { id: 'reg', position: { x: 0, y: 0 }, data: { label: 'Registros CPU' }, style: { backgroundColor: '#d13838', color: 'white' } },
                      { id: 'cache', position: { x: 0, y: 75 }, data: { label: 'Caché (L1, L2, etc.)' }, style: { backgroundColor: '#d18a38' } },
                      { id: 'ram', position: { x: 0, y: 150 }, data: { label: 'Memoria Principal (RAM / ROM)' }, style: { backgroundColor: '#d1c138' } },
                      { id: 'interna', position: { x: 200, y: 112 }, data: { label: 'MEMORIA INTERNA' }, type: 'output', style: {backgroundColor: 'transparent', border: 'none'} },
                      { id: 'ssd', position: { x: 0, y: 225 }, data: { label: 'Almacenamiento Flash (SSD)' }, style: { backgroundColor: '#38d18a' } },
                      { id: 'hdd', position: { x: 0, y: 300 }, data: { label: 'Disco Magnético (HDD)' }, style: { backgroundColor: '#388ad1' } },
                      { id: 'externa', position: { x: 200, y: 262 }, data: { label: 'MEMORIA EXTERNA' }, type: 'output', style: {backgroundColor: 'transparent', border: 'none'} }
                  ],
                  initialEdges: [
                      { id: 'e-reg-cache', source: 'reg', target: 'cache' },
                      { id: 'e-cache-ram', source: 'cache', target: 'ram' },
                      { id: 'e-ram-ssd', source: 'ram', target: 'ssd' },
                      { id: 'e-ssd-hdd', source: 'ssd', target: 'hdd' }
                  ]
              }
          ]
      },
      {
        id: "t2_s3_3", shortTitle: "3.3. E/S", title: "3.3. UNIDAD DE ENTRADA/SALIDA",
        content: [
            { type: 'paragraph', text: 'La función de la Unidad de E/S es realizar la conexión y adaptación de la CPU con una gran variedad de dispositivos periféricos: monitor, teclado, impresora, ratón, etc.'},
            { type: 'paragraph', text: 'Una unidad de E/S está formada fundamentalmente por dos elementos: una interface y un controlador.'},
            { type: 'list', items: ['<strong>Interface:</strong> gestiona el intercambio de la información entre el dispositivo y la CPU. La conexión con la CPU se realiza mediante un conjunto de señales normalizadas para una unidad de E/S concreta.', '<strong>Controlador:</strong> gestiona directamente el periférico. Por ejemplo, el control de vídeo en un monitor.']}
        ]
      },
      {
        id: "t2_s3_4", shortTitle: "3.4. Buses", title: "3.4. BUSES",
        content: [
          { type: 'paragraph', text: 'El ordenador se divide en unidades funcionales y para realizar la comunicación entre ellos se utilizan los denominados buses. Según su funcionalidad podemos distinguir los siguientes buses:'},
          { type: 'definitionList', items: [
              {term: 'Bus de datos:', definition: 'Utilizado para transferir los datos entre los diferentes elementos del computador.'},
              {term: 'Bus de direcciones:', definition: 'Transfiere únicamente direcciones. Con <code>m</code> bits se pueden direccionar un máximo de <code>2^m</code> palabras de memoria.'},
              {term: 'Bus de control:', definition: 'Formado por un conjunto de líneas que tienen misiones muy diversas y específicas en cada computador (señales de lectura/escritura, etc.).'}
          ]},
          { type: 'subheading', text: 'Comunicación Externa de la CPU' },
          { type: 'paragraph', text: 'La CPU se relaciona con el exterior mediante buses de alta velocidad. Los métodos de comunicación con el chipset y otros componentes varían entre fabricantes:'},
          { type: 'list', items: ['<strong>Intel - DMI (Direct Media Interface):</strong> Es la tecnología utilizada por Intel. Es un bus de alta velocidad que conecta la CPU con el <strong>chip PCH (Platform Controller Hub)</strong> de la placa base.', '<strong>AMD - Infinity Fabric:</strong> Es la tecnología de interconexión de alta velocidad que AMD utiliza para comunicar los diferentes chiplets dentro de la CPU (<code>CCD</code> y <code>IOD</code>) y también para conectar la CPU con el chipset y otros dispositivos. Ha reemplazado a la antigua tecnología HyperTransport.']}
        ]
      },
      {
        id: "t2_s4", shortTitle: "4. Arquitectura", title: "4. ARQUITECTURA",
        content: [
          { type: 'paragraph', text: 'Se puede definir la <strong>Arquitectura de computadores</strong> como aquella área de la Informática que trata de establecer qué puede realizar un ordenador mediante una abstracción de los componentes electrónicos que lo constituyen. Hay diferentes arquitecturas atendiendo a distintos conceptos como, por ejemplo:'},
          { type: 'definitionList', items: [
              {term: 'Atendiendo a la longitud de palabra:', definition: 'Se refiere al tamaño de los datos con los que el procesador puede trabajar en un solo ciclo (bits). Los de 64 bits son comunes, mientras que 8 y 16 bits se encuentran en microcontroladores y sistemas embebidos.'},
              {term: 'Atendiendo al conjunto de instrucciones:', definition: ''},
          ]},
          { type: 'nestedList', items: [
              {text: '<strong>Arquitectura CISC (Complex Instruction Set Computer):</strong> Utilizan un amplio conjunto de instrucciones que pueden realizar tareas complejas con una sola instrucción.'},
              {text: '<strong>Arquitectura RISC (Reduced Instruction Set Computer):</strong> Utilizan un conjunto de instrucciones más simplificado, permitiendo mayor velocidad.'}
          ]},
          { type: 'definitionList', items: [
              {term: 'Atendiendo al uso y distribución de memoria:', definition: ''},
          ]},
          { type: 'list', items: ['Arquitectura von Neumann', 'Arquitectura Harvard']},
          { type: 'definitionList', items: [
              {term: 'Atendiendo al flujo de instrucciones y de datos (Taxonomía de Flynn):', definition: ''},
          ]},
          { type: 'nestedList', items: [
              {text: '<strong>SISD (Simple Instruction Simple Data):</strong> modelo de máquina secuencial de von Neumann. Procesa una instrucción a la vez en un único conjunto de datos.'},
              {text: '<strong>SIMD (Simple Instruction Multiple Data):</strong> Una única instrucción se ejecuta en múltiples datos simultáneamente, útil en procesamiento paralelo.'},
              {text: '<strong>MISD (Multiple Instruction Simple Data):</strong> Múltiples unidades de procesamiento ejecutan diferentes instrucciones sobre el mismo flujo de datos.'},
              {text: '<strong>MIMD (Multiple Instruction Multiple Data):</strong> Múltiples procesadores ejecutan diferentes instrucciones en diferentes conjuntos de datos, ideal para sistemas multiprocesadores.'},
          ]}
        ]
      },
      {
        id: "t2_s5", shortTitle: "5. Proyecto TOP500", title: "5. PROYECTO TOP500",
        content: [
            { type: 'paragraph', text: 'El proyecto <strong>Top500</strong> es un ranking de los 500 supercomputadores con mayor rendimiento del mundo, medido con el benchmark <code>HPL (High-Performance Linpack)</code>. La lista se actualiza dos veces al año.'},
            { type: 'paragraph', text: 'Según la lista de <strong>Junio de 2024</strong>, el número 1 sigue siendo el supercomputador estadounidense <strong>Frontier</strong>, ubicado en Oak Ridge National Laboratory (ORNL), siendo el primer sistema en romper la barrera de la exaescala. El segundo puesto lo ocupa <strong>Aurora</strong>, otro sistema estadounidense ubicado en el Argonne National Laboratory.'},
        ]
      },
      {
          id: "t2_s6", shortTitle: "6. MareNostrum 5", title: "6. SUPERCOMPUTADOR MARENOSTRUM 5",
          content: [
              { type: 'paragraph', text: 'El supercomputador más potente de España y uno de los más avanzados de Europa es el <strong>MareNostrum 5</strong>, ubicado en el Barcelona Supercomputing Center (BSC). Presentado en 2023, destaca por su <strong>arquitectura híbrida</strong>, que combina una partición de propósito general con particiones aceleradas (con GPUs) para dar servicio a una amplia gama de investigaciones, desde la medicina y el cambio climático hasta el desarrollo de la inteligencia artificial.'}
          ]
      },
      {
        id: "t2_s7", shortTitle: "7. Recursos", title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
          { type: 'paragraph', text: 'A continuación, se enumeran varias herramientas software que recopilan información sobre los elementos funcionales de un ordenador digital:'},
          { type: 'list', items: ['HWMonitor', 'Open Hardware Monitor', 'Speccy', 'HardInfo', 'CPU-Z']}
        ]
      },
      {
        id: "t2_s8", shortTitle: "8. Aplicación", title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La comprensión de la arquitectura de un ordenador digital y sus elementos funcionales es esencial en diversos entornos, tanto educativos como profesionales, debido a su importancia en el diseño y funcionamiento de sistemas tecnológicos modernos.'},
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'nestedList', items: [
              { text: '<strong>Educación Secundaria:</strong>', subItems: ['Se introducen los principios de la arquitectura de ordenadores, explicando componentes como la CPU, la memoria, y los dispositivos de E/S a través de diagramas y ejemplos interactivos.'] },
              { text: '<strong>Formación Profesional:</strong>', subItems: ['Los estudiantes profundizan en la arquitectura de sistemas informáticos, estudiando la importancia del diseño y la configuración de los elementos funcionales en módulos como "Fundamentos de Hardware", "Sistemas Informáticos”, “Montaje y mantenimiento de equipos", etc.'] }
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Diseño de sistemas y arquitectura de hardware:</strong> Los ingenieros aplican su conocimiento para innovar y mejorar la eficiencia de dispositivos como smartphones, computadoras y servidores.',
              '<strong>Desarrollo de software y sistemas operativos:</strong> Los desarrolladores utilizan su comprensión de la arquitectura para optimizar el rendimiento del software.',
              '<strong>Inteligencia Artificial y redes:</strong> Los especialistas en IA requieren un conocimiento detallado de la arquitectura para mejorar la implementación y eficiencia de algoritmos de aprendizaje automático.',
              '<strong>Soporte técnico y mantenimiento de sistemas:</strong> Los técnicos utilizan su conocimiento de la arquitectura para diagnosticar problemas y proponer mejoras.'
          ]}
        ]
      },
      {
        id: "t2_s9", shortTitle: "9. Conclusión", title: "9. CONCLUSIÓN",
        content: [
            { type: 'paragraph', text: 'En el presente tema se ha definido que es un ordenador digital y se han descrito las generaciones que se consideran en la evolución de los ordenadores, así como una clasificación de los mismos atendiendo a su potencia de cálculo y los principales factores que determinan dicha potencia.'},
            { type: 'paragraph', text: 'Posteriormente, se ha presentado una visión global de la arquitectura de Von Neumann describiendo los elementos funcionales de un ordenador digital (unidad central de proceso, memoria y unidad de entrada/salida), los cuales están interconectados a través de buses.'}
        ]
      },
      {
        id: "t2_s10", shortTitle: "10. Bibliografía", title: "10. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill' },
              { text: 'Joyanes, L. (2020). <em>Fundamentos de programación</em>. Editorial McGraw-Hill' },
              { text: 'Stallings, W. (2022). <em>Computer organization and architecture. Designing for performance</em>. Editorial Pearson.' },
              { text: 'Tanenbaum, A. (2000). <em>Organización de computadoras. Un enfoque estructurado</em>. Editorial Prentice-Hall' },
              { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' },
              { text: 'De Miguel, P. (2004) <em>Fundamentos de los computadores</em>. Editorial Paraninfo.' },
              { text: 'Patterson, D. y Hennessy, J. (2000). <em>Estructura y diseño de computadores</em>. Editorial Reverté' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' },
              { text: 'ComputerHoy', url: 'https://computerhoy.com' },
              { text: 'Tom\'s Hardware', url: 'https://www.tomshardware.com' },
              { text: 'CCleaner Speccy', url: 'https://www.ccleaner.com/es-es/speccy' },
              { text: 'CPUID', url: 'https://www.cpuid.com' },
              { text: 'TOP500 Project', url: 'https://www.top500.org' }
          ]}
        ]
      }
    ]
  };