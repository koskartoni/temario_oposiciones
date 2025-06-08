export const theme05Data = {
  id: "theme5",
  name: "TEMA 5: Microprocesadores",
  title: "TEMA 5. INFORMÁTICA / S.A.I. - MICROPROCESADORES. ESTRUCTURA. TIPOS. COMUNICACIÓN CON EL EXTERIOR",
  version: "Versión: Mayo 2024 (Actualizado)",
  sections: [
    {
      id: "t5_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      content: [
        { type: 'paragraph', text: 'Este tema, ubicado en el bloque de "Hardware", se dedica a estudiar la estructura de la <strong>unidad central de proceso (UCP)</strong>, el elemento central de la arquitectura de Von Neumann. El microprocesador es el componente electrónico (chip de silicio) que se encuentra instalado sobre la placa base a través de un socket o zócalo y es el encargado de ejecutar todos los cálculos aritmético-lógicos.' },
        { type: 'paragraph', text: 'El primer microprocesador comercial fue el <strong>Intel 4004</strong> en 1971, que trabajaba con 4 bits. Hoy en día, los procesadores de 64 bits son el estándar, demostrando una evolución tecnológica exponencial.' },
        { type: 'paragraph', text: 'A lo largo de este tema estudiaremos sus componentes, estructura, tipos y cómo se comunican con el resto del sistema, destacando también los principales fabricantes y las últimas novedades del sector.' }
      ]
    },
    {
      id: "t5_s2",
      shortTitle: "2. Microprocesadores",
      title: "2. MICROPROCESADORES",
      content: [
        { type: 'paragraph', text: 'El microprocesador es el <strong>cerebro de un sistema informático</strong>, la parte más importante del mismo (Moreno, 2019). Es el encargado de interpretar y procesar la mayoría de las instrucciones que se realizan en el ordenador.' }
      ]
    },
    {
      id: "t5_s2_1",
      shortTitle: "2.1. Características",
      title: "2.1. CARACTERÍSTICAS",
      content: [
        { type: 'paragraph', text: 'A la hora de elegir entre los diferentes microprocesadores, existen una serie de parámetros que los caracterizan. Las características principales son:' },
        { type: 'definitionList', items: [
            { term: 'Velocidad de reloj (frecuencia):', definition: 'Representa el número de ciclos por segundo (Hz). Aunque importante, el <strong>IPC (Instrucciones por Ciclo)</strong> es un factor más determinante del rendimiento real.' },
            { term: 'Memoria caché (L1, L2, L3):', definition: 'Memoria de acceso rápido ubicada dentro del procesador para almacenar datos e instrucciones frecuentes.' },
            { term: 'Núcleos (cores) y subprocesos (threads):', definition: 'Los microprocesadores modernos contienen múltiples núcleos para ejecutar procesos en paralelo. El <strong>multihilo simultáneo (SMT)</strong> permite que cada núcleo maneje dos hilos de ejecución, mejorando el rendimiento.' },
            { term: 'Proceso de fabricación (litografía):', definition: 'Medido en nanómetros (nm), especifica el tamaño de los transistores. Un número más pequeño generalmente implica mayor densidad, eficiencia y menor consumo (ej. <code>5nm</code>, <code>3nm</code>).' },
            { term: 'Soporte de conjuntos de instrucciones:', definition: 'Capacidad para ejecutar ciertos tipos de instrucciones, como <code>AVX</code>, <code>SSE</code>, o <code>AES-NI</code> para acelerar la encriptación.' },
            { term: 'TDP (Thermal Design Power):', definition: 'Medida de la cantidad máxima de calor que el sistema de enfriamiento debe disipar, expresada en vatios (W).' }
        ]}
      ]
    },
    {
        id: "t5_s2_2", shortTitle: "2.2. Estructura Funcional", title: "2.2. ESTRUCTURA FUNCIONAL",
        content: [
            { type: 'paragraph', text: 'El microprocesador integra en un mismo chip la Unidad Aritmético-Lógica (ALU), la Unidad de Control (UC), Registros y los buses internos. Las secciones 2.2.1 a 2.2.4 detallan estos componentes, cuya funcionalidad ya fue introducida en temas anteriores.' },
            { type: 'flowDiagram', title: 'Estructura Funcional Básica de la CPU',
                initialNodes: [ {id: 'cpu', position: {x: 0, y: 0}, data: {label: 'CPU (Microprocesador)'}}, {id: 'alu', position: {x: 0, y: 100}, data: {label: 'ALU'}}, {id: 'reg', position: {x: 0, y: 175}, data: {label: 'Registros'}}, {id: 'uc', position: {x: 0, y: 250}, data: {label: 'UC'}}, {id: 'bus', position: {x: 0, y: 325}, data: {label: 'Comunicaciones Internas'}} ],
                initialEdges: [ {id: 'e1', source: 'cpu', target: 'alu'}, {id: 'e2', source: 'cpu', target: 'reg'}, {id: 'e3', source: 'cpu', target: 'uc'}, {id: 'e4', source: 'cpu', target: 'bus'} ]
            },
            { type: 'subheading', text: '2.2.5. Otros Componentes Integrados' },
            { type: 'paragraph', text: 'Los microprocesadores actuales han evolucionado para incluir otras unidades funcionales que aumentan sus prestaciones:'},
            { type: 'list', items: [
                '<strong>Unidad de Punto Flotante (FPU):</strong> Coprocesador matemático especializado en cálculos con números decimales.',
                '<strong>Controlador de Memoria Integrado (IMC):</strong> Gestiona la comunicación directa con la memoria RAM, reduciendo latencias.',
                '<strong>Unidad de Gestión de Energía:</strong> Ajusta el consumo y la velocidad del procesador según la carga de trabajo.',
                '<strong>NPU (Neural Processing Unit):</strong> Una adición reciente en procesadores como los <strong>Intel Core Ultra</strong>, dedicada a acelerar tareas de inteligencia artificial de baja latencia con alta eficiencia energética.'
            ]}
        ]
    },
    {
        id: "t5_s2_3", shortTitle: "2.3. Estructura Física", title: "2.3. ESTRUCTURA FÍSICA",
        content: [
            { type: 'paragraph', text: 'Físicamente, el microprocesador es un circuito integrado que contiene millones (o miles de millones) de transistores sobre una oblea de silicio (<strong>die</strong>).'},
            { type: 'paragraph', text: 'El <strong>encapsulado</strong> es la carcasa que protege la oblea de silicio y permite la conexión con el zócalo de la placa base. Los tipos de encapsulado más comunes son <strong>PGA (Pin Grid Array)</strong>, usado tradicionalmente por AMD, y <strong>LGA (Land Grid Array)</strong>, usado por Intel y adoptado por AMD en sus plataformas más recientes.'}
        ]
    },
    {
      id: "t5_s2_4", shortTitle: "2.4. Tipos", title: "2.4. TIPOS DE MICROPROCESADORES",
      content: [
        { type: 'paragraph', text: 'Los microprocesadores pueden clasificarse atendiendo a diversos criterios:' },
        { type: 'definitionList', items: [
          { term: 'A. Según el juego de instrucciones (ISA):', definition: '', subItems: [ '<strong>CISC (Complex Instruction Set Computer):</strong> Utiliza un amplio conjunto de instrucciones que pueden realizar tareas complejas en un solo paso (ej. procesadores x86 de Intel y AMD).', '<strong>RISC (Reduced Instruction Set Computer):</strong> Utiliza un conjunto de instrucciones más simple y optimizado, donde cada instrucción realiza una tarea muy específica. Esto permite un diseño más simple y eficiente energéticamente (ej. arquitecturas ARM usadas en todos los smartphones).' ]},
          { term: 'B. Según el tamaño de palabra:', definition: 'Se refiere al número de bits que el procesador puede manejar en un solo ciclo (64 bits es el estándar actual en computación de consumo y servidores).'},
          { term: 'C. Según su aplicación:', definition: '<strong>Escritorio (Desktop):</strong> Priorizan el máximo rendimiento. <strong>Móvil (Mobile):</strong> Optimizados para bajo consumo y eficiencia energética. <strong>Servidor (Server):</strong> Diseñados para alta fiabilidad, disponibilidad y capacidad de multitarea intensiva.'}
        ]}
      ]
    },
    {
        id: "t5_s2_5", shortTitle: "2.5. Comunicación", title: "2.5. COMUNICACIÓN CON EL EXTERIOR",
        content: [
            { type: 'paragraph', text: 'El microprocesador se relaciona con el exterior mediante buses que permiten el intercambio de información. Los métodos de comunicación con el chipset de la placa base varían entre los principales fabricantes:' },
            { type: 'list', items: [
                '<strong>Intel - DMI (Direct Media Interface):</strong> Es un bus punto a punto que conecta la CPU con el <strong>chipset (PCH - Platform Controller Hub)</strong>. Las versiones más recientes, como DMI 4.0, ofrecen un gran ancho de banda para la comunicación con puertos PCIe, USB y SATA conectados al chipset.',
                '<strong>AMD - Infinity Fabric:</strong> Es una tecnología de interconexión mucho más versátil que el antiguo HyperTransport. No solo conecta la CPU con el chipset, sino que también es el tejido que comunica los diferentes <strong>chiplets</strong> (núcleos de CPU, controlador de memoria) dentro del propio encapsulado del procesador, siendo clave en la arquitectura modular de AMD.'
            ]},
            { type: 'flowDiagram', title: 'Diagrama de Bloques de un Chipset Moderno (Intel)',
                initialNodes: [ {id:'cpu',position:{x:250,y:0},data:{label:'CPU\n(P-cores + E-cores)'}}, {id:'ddr',position:{x:500,y:0},data:{label:'DDR5/DDR4 Memory'}}, {id:'pcie_cpu',position:{x:0,y:0},data:{label:'PCIe 5.0 x16 (GPU)'}}, {id:'dmi',position:{x:250,y:100},data:{label:'DMI x8 Gen4'}}, {id:'pch',position:{x:250,y:200},data:{label:'PCH (Chipset)'}}, {id: 'pcie_pch',position:{x:0,y:250},data:{label:'PCIe 4.0/3.0'}}, {id: 'usb',position:{x:500,y:250},data:{label:'USB 3.2/2.0'}}, {id: 'sata',position:{x:500,y:325},data:{label:'SATA 3.0'}}, {id: 'wifi',position:{x:0,y:325},data:{label:'Wi-Fi 6E'}} ],
                initialEdges: [ {id:'e1',source:'cpu',target:'pcie_cpu'}, {id:'e2',source:'cpu',target:'ddr'}, {id:'e3',source:'cpu',target:'dmi',animated:true}, {id:'e4',source:'dmi',target:'pch',animated:true}, {id:'e5',source:'pch',target:'pcie_pch'}, {id:'e6',source:'pch',target:'usb'}, {id:'e7',source:'pch',target:'sata'}, {id:'e8',source:'pch',target:'wifi'} ]
            }
        ]
    },
    {
      id: "t5_s3",
      shortTitle: "3. Marcas y Fabricantes",
      title: "3. PRINCIPALES MARCAS Y FABRICANTES DE MICROPROCESADORES",
      content: [
        { type: 'paragraph', text: 'Es importante distinguir entre las empresas que diseñan sus propios chips y las compañías especializadas (<strong>fundiciones</strong> o <em>fabs</em>) que los fabrican físicamente.' },
        { type: 'table', headers: ['Marca', 'Diseño', 'Fabricación', 'Descripción'], rows: [
          ['Intel', 'Propio', 'Propio', 'Históricamente, diseña y fabrica sus propios microprocesadores para PC y servidores.'],
          ['AMD', 'Propio', 'Subcontratada', 'Diseña sus microprocesadores (Ryzen, EPYC) pero subcontrata la fabricación a fundiciones como <strong>TSMC</strong>.'],
          ['Qualcomm', 'Propio', 'Subcontratada', 'Líder en diseño de chips <strong>Snapdragon</strong> para móviles, subcontrata su fabricación.'],
          ['Apple', 'Propio', 'Subcontratada', 'Diseña sus propios chips (Serie A para iPhone, Serie M para Mac) basados en la arquitectura ARM y los fabrica principalmente en <strong>TSMC</strong>.'],
          ['Samsung', 'Propio', 'Propio y otros', 'Diseña sus chips <strong>Exynos</strong> y tiene sus propias fundiciones (Samsung Foundry), pero también subcontrata.'],
          ['ARM Holdings', 'Diseño de Arq.', 'No fabrica', 'No vende chips. Diseña la <strong>arquitectura ARM</strong> y licencia la propiedad intelectual a otras empresas (Apple, Qualcomm, etc.) para que diseñen sus propios procesadores.']
        ]}
      ]
    },
    {
        id: "t5_s4", shortTitle: "4. Importancia del Diseño", title: "4. IMPORTANCIA DEL DISEÑO DE LOS MICROPROCESADORES",
        content: [
            { type: 'paragraph', text: 'El diseño de los microprocesadores es crítico y de vital importancia. En los últimos años se han detectado múltiples vulnerabilidades en los microprocesadores, como <strong>Meltdown</strong> y <strong>Spectre</strong> (2018), que permitían acceder a la memoria del kernel o de otras aplicaciones, y <strong>Spectre-BHB</strong> (2022), demostrando que la seguridad es un factor de diseño primordial.' }
        ]
    },
    {
        id: "t5_s5", shortTitle: "5. Novedades", title: "5. NOVEDADES EN EL SECTOR DE LOS MICROPROCESADORES",
        content: [
            { type: 'paragraph', text: 'La última generación de Intel es <strong>Core Ultra (Meteor Lake)</strong>, que introduce un diseño modular basado en chiplets y la primera <strong>NPU (Neural Processing Unit)</strong> integrada para acelerar tareas de IA. Para finales de 2024, se espera la arquitectura <strong>Arrow Lake</strong>.' },
            { type: 'paragraph', text: 'La última generación de AMD son los <strong>Ryzen 9000</strong>, basados en la arquitectura <strong>Zen 5</strong>, que prometen un aumento significativo del IPC (Instrucciones por Ciclo) y mejoras en eficiencia, fabricados en litografías de 4nm y 3nm.' },
            { type: 'paragraph', text: 'La tendencia actual se enfoca en la eficiencia energética y en la especialización, con chips que incluyen aceleradores específicos para IA y Realidad Virtual, consolidando la computación heterogénea.' }
        ]
    },
    {
        id: "t5_s6", shortTitle: "6. Evento CES", title: "6. EVENTO CES 2024",
        content: [
            { type: 'paragraph', text: 'El <strong>CES (Consumer Electronics Show)</strong> es el mayor evento comercial de tecnología, celebrado anualmente en Las Vegas. En el CES 2024, Intel presentó oficialmente sus procesadores Core de 14ª generación (modelos HX y U-series), mientras que AMD desveló los procesadores de escritorio <strong>Ryzen 8000G Series</strong> con potentes gráficos integrados.'},
            { type: 'resourceLink', name: 'Web del evento', url: 'https://www.ces.tech/', description: 'Página oficial del Consumer Electronics Show.'}
        ]
    },
    {
        id: "t5_s7", shortTitle: "7. Recursos", title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
            { type: 'paragraph', text: 'A continuación, se enumeran varias herramientas software que recopilan información detallada sobre el microprocesador de un ordenador:'},
            { type: 'list', items: ['CPU-Z', 'HWMonitor', 'Speecy', 'Open Hardware Monitor', 'HardInfo (Linux)']}
        ]
    },
    {
        id: "t5_s8", shortTitle: "8. Aplicación", title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
            { type: 'paragraph', text: 'La comprensión de los microprocesadores es crucial tanto en el ámbito educativo como en el profesional debido a su papel central en la informática y la tecnología.'},
            { type: 'subheading', text: 'En el Contexto Escolar:'},
            { type: 'nestedList', items: [
                { text: '<strong>Educación Secundaria:</strong>', subItems: ['Se abordan los conceptos básicos de los microprocesadores, incluyendo su función como "cerebro" del ordenador, a través de ejemplos prácticos.'] },
                { text: '<strong>Formación Profesional:</strong>', subItems: ['Los estudiantes estudian las características de las CPUs, su evolución, y cómo su diseño influye en el rendimiento del sistema en módulos como "Fundamentos de Hardware" o "Sistemas Informáticos".'] }
            ]},
            { type: 'subheading', text: 'En el Contexto Laboral:'},
            { type: 'list', items: [
                '<strong>Diseño de sistemas embebidos:</strong> Profesionales que trabajan en la creación de dispositivos electrónicos especializados (wearables, automotrices) requieren un conocimiento profundo de la estructura de las CPUs.',
                '<strong>Desarrollo de software:</strong> Desarrolladores de bajo nivel y videojuegos necesitan entender cómo el software interactúa con el hardware para optimizar el uso del procesador.',
                '<strong>Inteligencia Artificial:</strong> La eficiencia en la ejecución de modelos de IA depende en gran medida de la capacidad de la CPU y, cada vez más, de la NPU integrada.',
                '<strong>Soporte técnico:</strong> El personal de soporte debe comprender la estructura y funcionamiento de la CPU para diagnosticar correctamente los problemas del sistema.'
            ]}
        ]
    },
    {
      id: "t5_s9", shortTitle: "9. Conclusión", title: "9. CONCLUSIÓN",
      content: [
        { type: 'paragraph', text: 'En este tema se ha presentado una visión global sobre los microprocesadores, el “cerebro” de cualquier dispositivo moderno. La diversidad entre fabricantes impulsa una innovación constante, mejorando no solo el rendimiento bruto, sino también la eficiencia y la integración de funciones especializadas.'},
        { type: 'paragraph', text: 'Al reflexionar sobre las últimas innovaciones presentadas en eventos como el CES y anticipar las futuras generaciones, es evidente que estamos en una época de avances significativos que impulsarán nuevos desarrollos en campos como la ciencia, la medicina y la inteligencia artificial.'}
      ]
    },
    {
      id: "t5_s10", shortTitle: "10. Bibliografía", title: "10. BIBLIOGRAFÍA",
      content: [
        { type: 'bibliography', items: [
            { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill' },
            { text: 'Stallings, W. (2006). <em>Organización y arquitectura de computadores</em>. Editorial Prentice-Hall' },
            { text: 'Tanenbaum, A. (2000). <em>Organización de computadoras. Un enfoque estructurado</em>. Editorial Prentice-Hall' },
            { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' },
            { text: 'Patterson, D. y Hennessy, J. (2000). <em>Estructura y diseño de computadores</em>. Editorial Reverté' },
            { text: 'Intel Newsroom', url: 'https://www.intel.com/content/www/us/en/newsroom/home.html' },
            { text: 'AMD Community', url: 'https://community.amd.com/' },
            { text: 'CES Tech', url: 'https://www.ces.tech/' }
        ]}
      ]
    }
  ]
};