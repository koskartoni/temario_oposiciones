// CÓDIGO FINAL CON DIAGRAMAS NATIVOS (REACT-FLOW)
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme02Data = {
    id: "theme2",
    name: "TEMA 2: Elem. Funcionales y Arq.",
    title: "TEMA 2. ELEMENTOS FUNCIONALES DE UN ORDENADOR DIGITAL. ARQUITECTURA",
    version: "Versión: Agosto 2024",
    sections: [
      // ... (Secciones 1 y 2 se mantienen igual)
      {
        id: "t2_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        icon: "introduction",
        content: [
          { type: 'paragraph', text: 'El presente tema forma parte del temario oficial (BOE 13/02/1996) y se ubica dentro del bloque temático de “Hardware”.' },
          { type: 'keyConcept', title: 'Arquitectura de Von Neumann', text: 'Propuesta en 1945, es el modelo sobre el que se basan la mayoría de las computadoras modernas. Su idea revolucionaria fue almacenar tanto las <strong>instrucciones como los datos en la misma memoria principal</strong>, permitiendo que la máquina fuera programable, flexible y eficiente. Esto se diferencia de arquitecturas anteriores como la del <code>ENIAC</code>, que requerían reconfiguración física.'},
          { type: 'paragraph', text: 'Aunque la base de esta arquitectura persiste, su diseño es crítico y un campo de investigación activo. Por ejemplo, en los últimos años se han detectado vulnerabilidades a nivel de hardware como <strong>Meltdown/Spectre</strong> (2018), y más recientemente <strong>Downfall</strong> (Intel, 2023) e <strong>Inception</strong> (AMD, 2023), demostrando la importancia de la seguridad en el diseño de microprocesadores.'},
          { type: 'paragraph', text: 'El estudio de estos elementos funcionales es fundamental en la familia profesional de <strong>Informática y Comunicaciones</strong>, enmarcado en la nueva <strong>Ley Orgánica de Ordenación e Integración de la FP</strong>, y se concreta en módulos de los siguientes ciclos formativos:' },
          { type: 'nestedList', items: [
              { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Fundamentos de hardware</code>' },
              { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
              { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Montaje y mantenimiento de equipos</code>' }
          ]}
        ]
      },
      {
        id: "t2_s2",
        shortTitle: "2. Ordenador Digital",
        title: "2. ORDENADOR DIGITAL",
        icon: "computer",
        content: [
          { type: 'paragraph', text: 'Un ordenador es un dispositivo electrónico utilizado para procesar información y obtener resultados. Se puede considerar como una unidad que recibe datos de entrada, los procesa y produce unos datos de salida (Joyanes, 2020).' }
        ]
      },
      {
          id: "t2_s2_1",
          shortTitle: "2.1. Generaciones",
          title: "2.1. GENERACIONES DE ORDENADORES",
          icon: "generations",
          content: [
              { type: 'paragraph', text: 'Las generaciones de ordenadores clasifican su evolución según los avances tecnológicos clave:'},
              { type: 'definitionList', items: [
                  { term: '1ª Gen (1940-1956): Válvulas de vacío', definition: 'Grandes, consumían mucha energía y se programaban en lenguaje máquina (Ej: <code>ENIAC</code>, <code>UNIVAC</code>).' },
                  { term: '2ª Gen (1956-1963): Transistores', definition: 'Más pequeños, rápidos y eficientes. Aparecen lenguajes de alto nivel como <code>FORTRAN</code> y <code>COBOL</code>.' },
                  { term: '3ª Gen (1964-1971): Circuitos Integrados (CI)', definition: 'Agrupación de transistores en un chip de silicio, aumentando la potencia y reduciendo el tamaño (Ej: <code>IBM 360</code>).' },
                  { term: '4ª Gen (1971-presente): Microprocesadores', definition: 'Toda la CPU en un solo chip. Era de los ordenadores personales (PC) e interfaces gráficas (GUI).' },
                  { term: '5ª Gen (Presente-¿?): Inteligencia Artificial', definition: 'Generación emergente, sin consenso claro, caracterizada por la IA, el procesamiento de lenguaje natural y la computación en la nube.' }
              ]}
          ]
      },
      {
          id: "t2_s2_2",
          shortTitle: "2.2. Clasificación",
          title: "2.2. CLASIFICACIÓN",
          icon: "classification",
          content: [
              { type: 'paragraph', text: 'Los ordenadores se pueden clasificar según diversos criterios. La clasificación más común atiende a su <strong>potencia de cálculo</strong>, de mayor a menor:' },
              { type: 'list', items: ['Superordenadores', 'Mainframes', 'Minicomputadoras', 'Workstations', 'Ordenadores personales (PC)', 'Ordenadores móviles (Smartphones, Tablets)'] }
          ]
      },
      {
          id: "t2_s2_3",
          shortTitle: "2.3. Factores de Potencia",
          title: "2.3. FACTORES QUE DETERMINAN LA POTENCIA DE UN ORDENADOR",
          icon: "power",
          content: [
              { type: 'paragraph', text: 'La potencia de un ordenador depende de una combinación de factores hardware:'},
              { type: 'nestedList', items: [
                  { text: '<strong>CPU:</strong>', subItems: ['<strong>IPC (Instrucciones por Ciclo):</strong> Eficiencia de la arquitectura.', '<strong>Velocidad de reloj (GHz).</strong>', '<strong>Núcleos e Hilos:</strong> Capacidad para multitarea.', '<strong>Memoria Caché (L1, L2, L3).</strong>'] },
                  { text: '<strong>GPU:</strong>', subItems: ['Crucial para gráficos, IA y computación paralela.'] },
                  { text: '<strong>Memoria RAM:</strong>', subItems: ['<strong>Cantidad (GB), Velocidad (MT/s) y Latencia (CL).</strong>'] },
                  { text: '<strong>Almacenamiento:</strong>', subItems: ['La tecnología es clave: <code>SSD NVMe</code> > <code>SSD SATA</code> > <code>HDD</code>.'] },
                  { text: '<strong>Placa base y Chipset:</strong>', subItems: ['Conecta todo, determina compatibilidad y expansión. La calidad del <strong>VRM (Módulo Regulador de Voltaje)</strong> es crítica.'] }
              ]},
              { type: 'practicalExample', title: '¿Por qué la Caché es tan importante?', text: 'Imagina que la CPU es un chef y la RAM es un gran almacén. Ir a por cada dato lleva tiempo. La <strong>memoria caché</strong> es como una pequeña nevera de ingredientes de uso frecuente que el chef tiene justo al lado. Es mucho más pequeña, pero al tener lo que más necesita a mano, puede cocinar increíblemente más rápido.' }
          ]
      },
      {
        id: "t2_s3",
        shortTitle: "3. Elementos Funcionales",
        title: "3. ELEMENTOS FUNCIONALES DE UN ORDENADOR DIGITAL",
        icon: "sitemap",
        content: [
          { type: 'paragraph', text: 'La arquitectura de Von Neumann describe un ordenador con 4 secciones principales: la <strong>unidad central de proceso (CPU)</strong>, la <strong>memoria</strong>, y la <strong>unidad de entrada y salida (E/S)</strong>. Todas estas partes están interconectadas por <strong>buses</strong>.'},
          { type: 'flowDiagram', title: 'Arquitectura General de Von Neumann', 
            initialNodes: [
              { id: 'ucp', type: 'group', position: { x: 0, y: 0 }, className: 'react-flow__node-group', style: { width: 320, height: 220 } },
              { id: 'ucp-label', data: { label: 'UCP' }, position: { x: 140, y: 10 }, parentNode: 'ucp' },
              { id: 'registros', data: { label: 'REGISTROS' }, position: { x: 25, y: 60 }, parentNode: 'ucp' },
              { id: 'aritmetica', data: { label: 'UNIDAD ARITMÉTICA' }, position: { x: 25, y: 150 }, parentNode: 'ucp' },
              { id: 'uc', data: { label: 'UNIDAD DE CONTROL' }, position: { x: 170, y: 150 }, parentNode: 'ucp' },
              { id: 'memoria', data: { label: 'MEMORIA PRINCIPAL' }, position: { x: 400, y: 30 } },
              { id: 'es', data: { label: 'UNIDAD DE E/S' }, position: { x: 400, y: 120 } },
              { id: 'periferico1', data: { label: 'PERIFÉRICO' }, position: { x: 600, y: 30 } },
              { id: 'periferico2', data: { label: 'PERIFÉRICO' }, position: { x: 600, y: 120 } },
              { id: 'periferico3', data: { label: 'PERIFÉRICO' }, position: { x: 600, y: 210 } }
            ],
            initialEdges: [
              { id: 'e-ucp-mem', source: 'ucp', target: 'memoria', animated: true },
              { id: 'e-mem-ucp', source: 'memoria', target: 'ucp', animated: true },
              { id: 'e-ucp-es', source: 'ucp', target: 'es', animated: true },
              { id: 'e-es-ucp', source: 'es', target: 'ucp', animated: true },
              { id: 'e-es-p1', source: 'es', target: 'periferico1' },
              { id: 'e-es-p2', source: 'es', target: 'periferico2' },
              { id: 'e-es-p3', source: 'es', target: 'periferico3' },
            ]
          }
        ]
      },
      {
        id: "t2_s3_1", shortTitle: "3.1. CPU", title: "3.1. UNIDAD CENTRAL DE PROCESO (CPU)",
        icon: 'cpu',
        content: [
            { type: 'paragraph', text: 'La CPU, o "cerebro" del computador, ejecuta las instrucciones de los programas. Está formada por tres componentes principales:'},
            { type: 'list', items: ['Unidad de Control (UC)', 'Unidad Aritmético-Lógica (ALU)', 'Registros']}
        ]
      },
      {
          id: "t2_s3_1_1",
          shortTitle: "3.1.1. UC",
          title: "3.1.1. UNIDAD DE CONTROL",
          icon: "control",
          content: [
              { type: 'paragraph', text: 'La UC gobierna el funcionamiento del ordenador. Su ciclo de trabajo es: buscar, decodificar e interpretar instrucciones, y emitir órdenes para su ejecución. Utiliza los siguientes elementos:' },
              { type: 'definitionList', items: [
                  { term: 'Contador de programa (PC):', definition: 'Apunta a la dirección de memoria de la siguiente instrucción a ejecutar.'},
                  { term: 'Registro de instrucción (IR):', definition: 'Almacena la instrucción que se está ejecutando actualmente.'},
                  { term: 'Decodificador y Secuenciador:', definition: 'Interpretan la instrucción y generan las microórdenes para ejecutarla de forma síncrona con el <strong>reloj</strong>.'}
              ]},
              { type: 'flowDiagram', title: 'Componentes de la Unidad de Control',
                initialNodes: [
                  { id: 'reloj', data: { label: 'Reloj' }, position: { x: 0, y: 150 } },
                  { id: 'secuenciador', data: { label: 'Secuenciador' }, position: { x: 200, y: 150 } },
                  { id: 'decodificador', data: { label: 'Decodificador' }, position: { x: 400, y: 150 } },
                  { id: 'pc', data: { label: 'Contador de Programa (PC)' }, position: { x: 600, y: 100 } },
                  { id: 'ir', data: { label: 'Registro de Instrucción (IR)' }, position: { x: 600, y: 200 } },
                  { id: 'psw', data: { label: 'Palabra de Estado (PSW)' }, position: { x: 200, y: 250 } },
                  { id: 'bus_control', data: { label: 'Bus de Control' }, position: { x: 200, y: 0 }, className: 'node-bus-control' },
                  { id: 'bus_dir', data: { label: 'Bus de Direcciones' }, position: { x: 400, y: 0 }, className: 'node-bus-address' },
                  { id: 'bus_datos', data: { label: 'Bus de Datos' }, position: { x: 600, y: 0 }, className: 'node-bus-data' }
                ],
                initialEdges: [
                  { id: 'e-reloj-sec', source: 'reloj', target: 'secuenciador', animated: true },
                  { id: 'e-sec-dec', source: 'secuenciador', target: 'decodificador', animated: true },
                  { id: 'e-dec-ir', source: 'ir', target: 'decodificador', animated: true },
                  { id: 'e-pc-busdir', source: 'pc', target: 'bus_dir' },
                  { id: 'e-ir-busdat', source: 'ir', target: 'bus_datos' },
                  { id: 'e-buscon-sec', source: 'bus_control', target: 'secuenciador' }
                ]
              }
          ]
      },
      {
          id: "t2_s3_1_2",
          shortTitle: "3.1.2. ALU",
          title: "3.1.2. UNIDAD ARITMÉTICO-LÓGICA",
          icon: "calculator",
          content: [
              { type: 'paragraph', text: 'La ALU es la "calculadora" de la CPU, realiza las operaciones sobre los datos.' },
              { type: 'list', items: ['<strong>Aritméticas:</strong> suma, resta, etc.', '<strong>Lógicas:</strong> <code>NOT</code>, <code>AND</code>, <code>OR</code>, <code>XOR</code>.', '<strong>De desplazamiento de bits.</strong>']},
              { type: 'paragraph', text: 'El <strong>Registro de Estado (PSW)</strong> o <em>Flags</em> almacena información sobre el resultado de la última operación (ej: si fue cero, si hubo acarreo, etc.).'},
              // --- DIAGRAMA RECREADO CON REACT-FLOW ---
              { type: 'flowDiagram', title: 'Componentes de la ALU',
                initialNodes: [
                  { id: 'banco', data: { label: 'Banco de Registros' }, position: { x: 0, y: 50 } },
                  { id: 'circuito', data: { label: 'Circuito Operacional' }, position: { x: 250, y: 50 } },
                  { id: 'acumulador', data: { label: 'Registro Acumulador' }, position: { x: 500, y: 50 } },
                  { id: 'estado', data: { label: 'Registro de Estado' }, position: { x: 250, y: 150 } }
                ],
                initialEdges: [
                  { id: 'e-banco-circ', source: 'banco', target: 'circuito', animated: true },
                  { id: 'e-acum-circ', source: 'acumulador', target: 'circuito', animated: true },
                  { id: 'e-circ-acum', source: 'circuito', target: 'acumulador', animated: true },
                  { id: 'e-circ-estado', source: 'circuito', target: 'estado' }
                ]
              }
          ]
      },
      {
          id: "t2_s3_1_3", shortTitle: "3.1.3. Registros", title: "3.1.3. REGISTROS",
          icon: "registers",
          content: [
              { type: 'paragraph', text: 'Son memorias de muy alta velocidad y pequeña capacidad dentro de la CPU.'},
              { type: 'definitionList', items: [
                  { term: 'Generales:', definition: 'Contienen los operandos de las instrucciones (ej. <code>EAX</code>, <code>EBX</code> en x86).' },
                  { term: 'Específicos:', definition: 'Tienen una función concreta. Los más comunes son: <code>MAR</code> (Registro de Dirección de Memoria), <code>PC</code>, <code>IR</code>, <code>PSW</code>, <code>SP</code> (Puntero de Pila).' }
              ]}
          ]
      },
      {
          id: "t2_s3_2", shortTitle: "3.2. Memoria", title: "3.2. MEMORIA",
          icon: "memory",
          content: [
              { type: 'keyConcept', title: 'El Principio de la Jerarquía de Memoria', text: 'La memoria se organiza en niveles para equilibrar velocidad, capacidad y coste: cuanto más <strong>arriba</strong>, es más <strong>rápida</strong>, de <strong>menor capacidad</strong> y <strong>más cara</strong> por bit.'},
              { type: 'flowDiagram', title: 'Pirámide de la Jerarquía de Memoria',
                  initialNodes: [
                      { id: 'reg', position: { x: 250, y: 0 }, data: { label: 'Registros CPU' }, style: { backgroundColor: '#d13838', color: 'white', width: 200 } },
                      { id: 'cache', position: { x: 225, y: 80 }, data: { label: 'Caché (L1, L2, L3)' }, style: { backgroundColor: '#d18a38', width: 250 } },
                      { id: 'ram', position: { x: 200, y: 160 }, data: { label: 'Memoria Principal (RAM)' }, style: { backgroundColor: '#d1c138', width: 300 } },
                      { id: 'ssd', position: { x: 175, y: 240 }, data: { label: 'Almacenamiento Secundario (SSD)' }, style: { backgroundColor: '#38d18a', width: 350 } },
                      { id: 'hdd', position: { x: 150, y: 320 }, data: { label: 'Almacenamiento Terciario (HDD, Cintas)' }, style: { backgroundColor: '#388ad1', width: 400 } }
                  ],
                  initialEdges: []
              }
          ]
      },
      {
          id: "t2_s3_3", shortTitle: "3.3. E/S", title: "3.3. UNIDAD DE ENTRADA/SALIDA",
          icon: "io",
          content: [
              { type: 'paragraph', text: 'Conecta y adapta la CPU con los periféricos (monitor, teclado, etc.). Está formada por una <strong>interfaz</strong> (para comunicarse con la CPU) y un <strong>controlador</strong> (para gestionar el periférico).'}
          ]
      },
      {
          id: "t2_s3_4", shortTitle: "3.4. Buses", title: "3.4. BUSES",
          icon: "bus",
          content: [
            { type: 'paragraph', text: 'Son los canales de comunicación que interconectan los componentes.'},
            { type: 'definitionList', items: [
                {term: 'Bus de Datos:', definition: 'Bidireccional. Transporta los datos.'},
                {term: 'Bus de Direcciones:', definition: 'Unidireccional. La CPU indica la dirección de memoria o del dispositivo con el que quiere operar.'},
                {term: 'Bus de Control:', definition: 'Transporta las señales de temporización y gobierno.'}
            ]},
            { type: 'practicalExample', title: 'Autopistas de la Información', text: 'El <strong>Bus de Direcciones</strong> es como la señal "Salida 25: Memoria RAM". El <strong>Bus de Datos</strong> son los carriles por donde viajan los coches (los datos). Y el <strong>Bus de Control</strong> son los semáforos y las señales de tráfico que aseguran que todo fluya sin colisiones.'}
          ]
      },
      {
          id: "t2_s4", shortTitle: "4. Arquitectura", title: "4. ARQUITECTURA",
          icon: "architecture",
          content: [
              { type: 'paragraph', text: 'La Arquitectura de computadores define su funcionalidad y organización. Se clasifica según varios criterios:'},
              { type: 'nestedList', items: [
                  { text: '<strong>Por conjunto de instrucciones:</strong>', subItems: ['<strong>CISC (Complex...):</strong> Instrucciones complejas. Típico de procesadores x86 (Intel, AMD).', '<strong>RISC (Reduced...):</strong> Instrucciones simples y rápidas. Típico de ARM (móviles, Apple Silicon).'] },
                  { text: '<strong>Por distribución de memoria:</strong>', subItems: ['<strong>Von Neumann:</strong> Una sola memoria para datos e instrucciones.', '<strong>Harvard:</strong> Memorias separadas para datos e instrucciones. Común en microcontroladores.'] },
                  { text: '<strong>Por flujo de datos (Taxonomía de Flynn):</strong>', subItems: ['<strong>SISD:</strong> Un flujo de instrucciones y datos (PC tradicional).', '<strong>SIMD:</strong> Una instrucción, múltiples datos (instrucciones vectoriales en CPU/GPU).', '<strong>MIMD:</strong> Múltiples instrucciones y datos (sistemas multinúcleo).']}
              ]},
              { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
                { question: 'La CPU de tu smartphone es, muy probablemente, de arquitectura:', options: ['RISC', 'CISC', 'Harvard'], correctAnswerIndex: 0 },
                { question: 'La arquitectura que permite un acceso simultáneo a datos e instrucciones gracias a memorias separadas se denomina:', options: ['Von Neumann', 'Harvard', 'Flynn'], correctAnswerIndex: 1 }
              ]}
          ]
      },
      {
          id: "t2_s5", shortTitle: "5. Proyecto TOP500", title: "5. PROYECTO TOP500",
          icon: "supercomputer",
          content: [
              { type: 'paragraph', text: 'El proyecto <strong>Top500</strong> clasifica los 500 supercomputadores más potentes del mundo usando el benchmark HPL. La lista se actualiza dos veces al año.'},
              { type: 'paragraph', text: 'Según la lista de <strong>Junio de 2024</strong>, el número 1 es <strong>Frontier</strong> (EE.UU.), el primer sistema exaescala confirmado, seguido por <strong>Aurora</strong>, también de EE.UU.'}
          ]
      },
      {
          id: "t2_s6", shortTitle: "6. MareNostrum 5", title: "6. SUPERCOMPUTADOR MARENOSTRUM 5",
          icon: "supercomputer",
          content: [
              { type: 'paragraph', text: 'El supercomputador más potente de España es el <strong>MareNostrum 5</strong>, en el Barcelona Supercomputing Center (BSC). Su <strong>arquitectura híbrida</strong> combina una partición de propósito general con otras aceleradas por GPUs, haciéndolo muy versátil para la investigación en IA, medicina o cambio climático.'}
          ]
      },
      {
        id: "t2_s7", shortTitle: "7. Recursos", title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        icon: "tools",
        content: [
          { type: 'paragraph', text: 'Herramientas software para identificar los componentes de un ordenador:'},
          { type: 'list', items: ['<code>CPU-Z</code>: Información detallada de CPU, placa base y memoria.', '<code>HWMonitor</code>: Monitorización de voltajes y temperaturas.', '<code>Speccy</code>: Resumen completo del hardware del sistema.'] }
        ]
      },
      {
          id: "t2_s8",
          shortTitle: "8. Aplicación Escolar y Laboral",
          title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
          icon: "application",
          content: [
              { type: 'paragraph', text: 'La comprensión de la arquitectura de un ordenador es esencial en diversos entornos educativos y profesionales.'},
              { type: 'subheading', text: 'En el Contexto Escolar:'},
              { type: 'list', items: [
                  '<strong>Educación Secundaria:</strong> Se introducen los principios de la arquitectura para comprender el funcionamiento de los dispositivos.',
                  '<strong>Formación Profesional:</strong> Es crucial en módulos como "Fundamentos de Hardware", "Sistemas Informáticos” y “Montaje y mantenimiento de equipos".'
              ]},
              { type: 'subheading', text: 'En el Contexto Laboral:'},
              { type: 'list', items: [
                  '<strong>Diseño de hardware:</strong> Para innovar y mejorar la eficiencia de dispositivos.',
                  '<strong>Desarrollo de software:</strong> Para optimizar el rendimiento del software.',
                  '<strong>IA y Redes:</strong> Para mejorar la implementación de algoritmos en hardware específico.',
                  '<strong>Soporte técnico:</strong> Para diagnosticar problemas y proponer mejoras.'
              ]}
          ]
      },
      {
          id: "t2_s9", shortTitle: "9. Conclusión", title: "9. CONCLUSIÓN",
          icon: "conclusion",
          content: [
              { type: 'paragraph', text: 'En este tema se ha definido el concepto de ordenador digital, su evolución a través de las generaciones y los factores que determinan su potencia.'},
              { type: 'paragraph', text: 'Posteriormente, se ha presentado la arquitectura de Von Neumann, describiendo sus elementos funcionales (CPU, memoria, E/S) y los buses que los interconectan, sentando las bases para comprender la estructura fundamental de cualquier sistema informático moderno.'}
          ]
      },
      {
          id: "t2_s10", shortTitle: "10. Bibliografía", title: "10. BIBLIOGRAFÍA",
          icon: "bibliography",
          content: [
            { type: 'bibliography', items: [
                { text: 'Stallings, W. (2022). <em>Computer organization and architecture. Designing for performance</em>. Editorial Pearson.' },
                { text: 'Tanenbaum, A. (2000). <em>Organización de computadoras. Un enfoque estructurado</em>. Editorial Prentice-Hall' },
                { text: 'Patterson, D. y Hennessy, J. (2000). <em>Estructura y diseño de computadores</em>. Editorial Reverté' },
                { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' },
                { text: 'TOP500 Project', url: 'https://www.top500.org' },
                { text: 'CPUID (CPU-Z)', url: 'https://www.cpuid.com' }
            ]}
          ]
      }
    ],
    glossary: [
      { term: 'Arquitectura de Von Neumann', definition: 'Modelo de computador con una única memoria para instrucciones y datos.' },
      { term: 'CPU', definition: 'Componente que ejecuta las instrucciones. Se compone de UC, ALU y registros.' },
      { term: 'UC', definition: 'Parte de la CPU que dirige y coordina todas las operaciones.' },
      { term: 'ALU', definition: 'Parte de la CPU que realiza las operaciones matemáticas y lógicas.' },
      { term: 'Registro', definition: 'Memoria de muy alta velocidad y pequeña capacidad, ubicada dentro de la CPU.' },
      { term: 'Jerarquía de Memoria', definition: 'Organización de la memoria en niveles para optimizar el rendimiento (velocidad vs. coste).' },
      { term: 'Bus', definition: 'Canal de comunicación que transfiere datos, direcciones y señales de control.' },
      { term: 'CISC', definition: 'Arquitectura con un conjunto de instrucciones complejo (ej. x86).' },
      { term: 'RISC', definition: 'Arquitectura con un conjunto de instrucciones reducido (ej. ARM).' },
      { term: 'Arquitectura Harvard', definition: 'Modelo con memorias separadas para datos e instrucciones.' },
      { term: 'Taxonomía de Flynn', definition: 'Clasificación de arquitecturas basada en el número de flujos de instrucciones y datos.' }
    ]
  };