// CÓDIGO CORREGIDO CON LA INTRODUCCIÓN FIEL AL PDF
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme03Data = {
  id: "theme3",
  name: "TEMA 3: Componentes, Estructura y Func. CPU",
  title: "TEMA 3. COMPONENTES, ESTRUCTURA Y FUNCIONAMIENTO DE LA UNIDAD CENTRAL DE PROCESO",
  version: "Versión: Agosto 2024",
  sections: [
    {
      id: "t3_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        // --- CONTENIDO DE LA INTRODUCCIÓN CORREGIDO PARA SER FIEL AL PDF ---
        { type: 'paragraph', text: 'El presente tema forma parte del temario oficial (BOE 13/02/1996) y se ubica dentro del bloque temático de “Hardware”, a continuación del tema anterior.' },
        { type: 'paragraph', text: 'En 1946, el matemático y físico <strong>John Von Neumann</strong> estableció el modelo básico de arquitectura que se emplea en los computadores digitales, basado en conectar permanentemente las unidades funcionales:' },
        { type: 'list', items: ['Unidad de memoria', 'Unidad central de proceso', 'Unidad de entrada/salida', 'Buses'] },
        { type: 'paragraph', text: 'Aunque la tecnología ha avanzado mucho, la base de su funcionamiento es la misma. A lo largo de este tema nos centraremos en estudiar concretamente los componentes, estructura y funcionamiento de la <strong>unidad central de proceso</strong> dentro de esta arquitectura.' },
        { type: 'paragraph', text: 'Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio de los microprocesadores está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
            { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Fundamentos de hardware</code>' },
            { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
            { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Montaje y mantenimiento de equipos</code>' }
        ]}
      ]
    },
    // --- EL RESTO DE SECCIONES PERMANECEN IGUAL ---
    {
      id: "t3_s2",
      shortTitle: "2. Parámetros de Rendimiento",
      title: "2. PARÁMETROS QUE DETERMINAN EL RENDIMIENTO DE LA CPU",
      icon: "performance",
      content: [
        { type: 'paragraph', text: 'El rendimiento de una CPU no depende de un solo factor, sino de un conjunto de características técnicas:' },
        { type: 'definitionList', items: [
            { term: 'Velocidad de reloj (frecuencia):', definition: 'Número de ciclos por segundo (GHz). Por sí sola no es determinante.' },
            { term: 'IPC (Instrucciones por Ciclo):', definition: 'Mide la eficiencia de la arquitectura. Un IPC alto permite hacer más trabajo en cada ciclo de reloj. <strong>Rendimiento ≈ IPC × Frecuencia</strong>.' },
            { term: 'Memoria caché (L1, L2, L3):', definition: 'Memoria ultrarrápida integrada en la CPU que reduce la latencia con la memoria RAM.' },
            { term: 'Núcleos (Cores):', definition: 'Permiten el paralelismo real, ejecutando múltiples procesos simultáneamente.' },
            { term: 'Multihilo (Hyper-Threading/SMT):', definition: 'Permite que un solo núcleo físico gestione dos hilos de ejecución (procesos lógicos), mejorando el aprovechamiento en tareas multihilo.' },
        ]},
        { type: 'practicalExample', title: '¿Qué es el Hyper-Threading/SMT?', text: 'Imagina un cocinero (el núcleo físico) que tiene una sola mano. Si solo puede usar una sartén a la vez, está limitado. El multihilo es como darle una segunda mano, permitiéndole manejar dos sartenes (hilos de ejecución) a la vez. No es tan bueno como tener dos cocineros (dos núcleos reales), pero aprovecha mucho mejor los tiempos muertos y aumenta el rendimiento general.' }
      ]
    },
    {
      id: "t3_s3",
      shortTitle: "3. Componentes y Estructura",
      title: "3. COMPONENTES Y ESTRUCTURA DE LA CPU",
      icon: "sitemap",
      content: [
        { type: 'paragraph', text: 'La CPU está formada por varios componentes interconectados que trabajan en conjunto para ejecutar instrucciones.' }
      ]
    },
    {
      id: "t3_s3_1", shortTitle: "3.1. Unidad de Control", title: "3.1. UNIDAD DE CONTROL (UC)",
      icon: "control",
      content: [
        { type: 'paragraph', text: 'Es el "director de orquesta" de la CPU. Gobierna, coordina y sincroniza todas las operaciones. Sus elementos principales son:' },
        { type: 'definitionList', items: [
            { term: 'Contador de programa (PC):', definition: 'Contiene la dirección de memoria de la próxima instrucción a ejecutar.'},
            { term: 'Registro de instrucción (IR):', definition: 'Guarda la instrucción que se está ejecutando en el momento.'},
            { term: 'Decodificador:', definition: 'Interpreta la instrucción contenida en el IR para saber qué operación realizar.'},
            { term: 'Secuenciador y Reloj:', definition: 'Generan las señales de control (microórdenes) de forma sincronizada para activar los componentes necesarios.'}
        ]}
      ]
    },
    {
        id: "t3_s3_2", shortTitle: "3.2. ALU", title: "3.2. UNIDAD ARITMÉTICO-LÓGICA (ALU)",
        icon: "calculator",
        content: [
            { type: 'paragraph', text: 'Es la "calculadora" de la CPU. Realiza las operaciones matemáticas (suma, resta) y lógicas (AND, OR, NOT) sobre los datos.' },
            { type: 'paragraph', text: 'La ALU utiliza registros de entrada para los operandos y un registro acumulador para el resultado. Además, modifica los <strong>flags</strong> del <strong>Registro de Estado (PSW)</strong> para indicar información sobre el resultado (si fue cero, negativo, si hubo acarreo, etc.).' },
        ]
    },
    {
        id: "t3_s3_3", shortTitle: "3.3. Registros", title: "3.3. REGISTROS",
        icon: "registers",
        content: [
            { type: 'paragraph', text: 'Son la memoria más rápida del ordenador, ubicada dentro de la CPU. Almacenan datos, direcciones o instrucciones de forma temporal.' },
            { type: 'definitionList', items: [
                {term: 'De propósito general:', definition: 'Usados para almacenar operandos y resultados intermedios de forma flexible.'},
                {term: 'De propósito específico:', definition: 'Tienen una función fija y crítica, como el <code>PC</code>, <code>IR</code>, <code>SP</code> (Puntero de Pila) o <code>MAR</code> (Registro de Dirección de Memoria).'}
            ]}
        ]
    },
    {
      id: "t3_s3_4", shortTitle: "3.4. Buses Internos", title: "3.4. BUSES INTERNOS",
      icon: "bus",
      content: [
        { type: 'paragraph', text: 'Son los caminos que interconectan la UC, la ALU y los registros dentro de la propia CPU. Son distintos de los buses externos que comunican la CPU con el resto del sistema.'}
      ]
    },
    {
      id: "t3_s3_5", shortTitle: "3.5. Otros Componentes", title: "3.5. OTROS COMPONENTES",
      icon: "components",
      content: [
        { type: 'paragraph', text: 'Las CPUs modernas integran circuitos especializados para mejorar el rendimiento:'},
        { type: 'list', items: [
            '<strong>Unidad de Punto Flotante (FPU):</strong> Acelera los cálculos con números decimales, esencial para gráficos y ciencia.',
            '<strong>Memoria Caché (L1, L2, L3):</strong> Niveles de memoria intermedia para reducir el tiempo de espera de la RAM.',
            '<strong>Controlador de Memoria Integrado (IMC):</strong> Gestiona la comunicación directa con la RAM, reduciendo la latencia.',
            '<strong>Unidades de Gestión de Energía:</strong> Ajustan el consumo y la velocidad de la CPU según la carga de trabajo.'
        ]}
      ]
    },
    {
      id: "t3_s4", shortTitle: "4. Funcionamiento de la CPU", title: "4. FUNCIONAMIENTO DE LA CPU: CICLO DE INSTRUCCIÓN",
      icon: "cycle",
      content: [
          { type: 'keyConcept', title: 'Ciclo Fetch-Execute', text: 'El funcionamiento de la CPU es un ciclo constante de dos fases principales para cada instrucción de un programa:'},
          { type: 'interactiveDiagram', title: 'Ciclo de Instrucción',
              flow: [
                { step: '1. Fase de Búsqueda (Fetch)', description: 'La UC recupera la siguiente instrucción de la memoria principal. La dirección de esta instrucción está almacenada en el Contador de Programa (PC).' },
                { step: '2. Carga de la Instrucción', description: 'La instrucción leída de la memoria se carga en el Registro de Instrucción (IR).' },
                { step: '3. Incremento del PC', description: 'El PC se actualiza para apuntar a la siguiente instrucción en secuencia, preparándose para el próximo ciclo.' },
                { step: '4. Fase de Ejecución (Execute)', description: 'La UC decodifica la instrucción que está en el IR. Interpreta qué operación hay que hacer y con qué datos (operandos).' },
                { step: '5. Ejecución de la Operación', description: 'La UC envía señales de control a los componentes apropiados (como la ALU) para que realicen la operación requerida. Si la operación necesita datos de memoria, se leen en este paso.'},
                { step: '6. Almacenamiento de Resultados', description: 'El resultado de la operación puede almacenarse en un registro o escribirse en la memoria principal.' },
                { step: 'Bucle', description: 'El ciclo vuelve a empezar, buscando la siguiente instrucción indicada por el PC.' }
              ]
          },
          { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
            { question: '¿En qué registro se almacena la dirección de la próxima instrucción a ejecutar?', options: ['IR (Registro de Instrucción)', 'Acumulador', 'PC (Contador de Programa)'], correctAnswerIndex: 2 },
            { question: 'La interpretación del código de operación de una instrucción la realiza el:', options: ['Secuenciador', 'Decodificador', 'ALU'], correctAnswerIndex: 1 }
          ]}
      ]
    },
    {
      id: "t3_s5", shortTitle: "5. Proyecto TOP500", title: "5. PROYECTO TOP500",
      icon: "supercomputer",
      content: [
        { type: 'paragraph', text: 'El proyecto Top500 clasifica los supercomputadores más potentes. Según la lista de <strong>Junio de 2024</strong>, <strong>Frontier</strong> (EE.UU.) sigue siendo el número 1. Estos sistemas utilizan decenas de miles de CPUs altamente optimizadas trabajando en paralelo.'}
      ]
    },
    {
        id: "t3_s6", shortTitle: "6. Importancia del Diseño", title: "6. IMPORTANCIA DEL DISEÑO DE LA CPU",
        icon: "design",
        content: [
            { type: 'paragraph', text: 'El diseño de la CPU es crítico para la seguridad. Vulnerabilidades de hardware como <strong>Meltdown</strong>, <strong>Spectre</strong> (2018), o las más recientes <strong>Downfall</strong> e <strong>Inception</strong> (2023) demuestran que un diseño defectuoso puede permitir a un atacante acceder a datos sensibles de otras aplicaciones.'}
        ]
    },
    {
      id: "t3_s7", shortTitle: "7. Recursos y Herramientas", title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
      icon: "tools",
      content: [
        { type: 'paragraph', text: 'Herramientas software para obtener información detallada sobre la CPU de un sistema:'},
        { type: 'list', items: ['<code>CPU-Z</code>', '<code>HWMonitor</code>', '<code>Speccy</code>', '<code>HardInfo</code> (Linux)']}
      ]
    },
    {
      id: "t3_s8", shortTitle: "8. Aplicación Escolar y Laboral", title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
      icon: "application",
      content: [
          { type: 'paragraph', text: 'La comprensión de la CPU es crucial tanto en el ámbito educativo como en el profesional.'},
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'list', items: [
              '<strong>Formación Profesional:</strong> Se estudian las características de las CPUs y su influencia en el rendimiento en módulos como "Fundamentos de Hardware" y "Sistemas Informáticos".'
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Diseño de sistemas embebidos:</strong> Para optimizar la eficiencia en dispositivos especializados.',
              '<strong>Desarrollo de software de bajo nivel y videojuegos:</strong> Para optimizar el uso del procesador y mejorar la experiencia de usuario.',
              '<strong>Inteligencia Artificial:</strong> La eficiencia en la ejecución de modelos de IA depende directamente de la capacidad de la CPU.',
              '<strong>Soporte técnico:</strong> Para diagnosticar correctamente los problemas del sistema.'
          ]}
      ]
    },
    {
      id: "t3_s9", shortTitle: "9. Conclusión", title: "9. CONCLUSIÓN",
      icon: "conclusion",
      content: [
          { type: 'paragraph', text: 'En este tema se ha presentado una visión detallada de la CPU, el "cerebro" del computador. Se han descrito sus componentes (UC, ALU, Registros), los parámetros que definen su rendimiento y, fundamentalmente, su funcionamiento basado en el ciclo repetitivo de búsqueda y ejecución de instrucciones. Este conocimiento es la base para entender cualquier proceso de computación.'}
      ]
    },
    {
      id: "t3_s10", shortTitle: "10. Bibliografía", title: "10. BIBLIOGRAFÍA",
      icon: "bibliography",
      content: [
        { type: 'bibliography', items: [
            { text: 'Stallings, W. (2006). <em>Organización y arquitectura de computadores</em>. Editorial Prentice-Hall' },
            { text: 'Tanenbaum, A. (2000). <em>Organización de computadoras. Un enfoque estructurado</em>. Editorial Prentice-Hall' },
            { text: 'Patterson, D. y Hennessy, J. (2000). <em>Estructura y diseño de computadores</em>. Editorial Reverté' },
            { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' }
        ]}
      ]
    }
  ],
  glossary: [
      { term: 'CPU', definition: 'Unidad Central de Proceso. El componente que interpreta y ejecuta las instrucciones de los programas.'},
      { term: 'Ciclo de Instrucción', definition: 'El proceso fundamental de la CPU, que consiste en una fase de búsqueda (fetch) y una fase de ejecución (execute) para cada instrucción.'},
      { term: 'IPC (Instrucciones por Ciclo)', definition: 'Métrica que indica cuántas instrucciones es capaz de completar una CPU en un solo ciclo de reloj. Mide la eficiencia de la arquitectura.'},
      { term: 'Multihilo (SMT/Hyper-Threading)', definition: 'Tecnología que permite a un único núcleo de CPU físico ejecutar múltiples hilos (threads) de forma concurrente.'},
      { term: 'FPU (Unidad de Punto Flotante)', definition: 'Un coprocesador especializado dentro de la CPU para realizar cálculos con números decimales de forma eficiente.'},
      { term: 'Microoperación', definition: 'Una de las operaciones elementales y básicas que la CPU realiza para ejecutar una instrucción máquina completa.'}
  ]
};