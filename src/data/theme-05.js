// CÓDIGO FUSIONADO Y MEJORADO
// Base: tu archivo. Mejoras: mi contenido actualizado y didáctico.

export const theme05Data = {
  id: "theme5",
  name: "TEMA 5: Microprocesadores",
  title: "TEMA 5. INFORMÁTICA / S.A.I. - MICROPROCESADORES. ESTRUCTURA. TIPOS. COMUNICACIÓN CON EL EXTERIOR",
  version: "Versión: Agosto 2024", // Versión actualizada
  sections: [
    {
      id: "t5_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      // --- MI INTRODUCCIÓN MÁS COMPLETA Y FIEL AL PDF ---
      content: [
        { type: 'paragraph', text: 'El presente tema, parte del temario oficial (BOE 13/02/1996), se adentra en el corazón de cualquier sistema informático: el <strong>microprocesador</strong>. Como continuación del estudio de la memoria, ahora nos enfocamos en el elemento central que procesa las instrucciones y los datos.' },
        { type: 'paragraph', text: 'Desde el primer microprocesador comercial, el <strong>Intel 4004</strong> de 1971, que operaba con 4 bits, la evolución ha sido exponencial hasta los actuales procesadores de 64 bits con miles de millones de transistores. Este tema analizará su estructura, tipos y cómo se comunican con el resto del sistema.' },
        { type: 'paragraph', text: 'El estudio de los microprocesadores es fundamental en el currículo de la familia profesional de Informática y Comunicaciones, y se ubica en los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Fundamentos de hardware</code>' },
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Montaje y mantenimiento de equipos</code>' }
        ]}
      ]
    },
    {
      id: "t5_s2",
      shortTitle: "2. Microprocesadores",
      title: "2. MICROPROCESADORES",
      icon: 'cpu',
      content: [
        { type: 'paragraph', text: 'El microprocesador es el <strong>cerebro de un sistema informático</strong>, la parte más importante del mismo (Moreno, 2019). Es el encargado de interpretar y procesar la mayoría de las instrucciones que se realizan en el ordenador.' }
      ]
    },
    {
      id: "t5_s2_1",
      shortTitle: "2.1. Características",
      title: "2.1. CARACTERÍSTICAS",
      icon: 'features',
      // --- TU ESTRUCTURA + MIS EJEMPLOS ACTUALIZADOS Y ELEMENTOS DIDÁCTICOS ---
      content: [
        { type: 'paragraph', text: 'Las características principales de un microprocesador son:' },
        { type: 'definitionList', items: [
            { term: 'Velocidad de reloj (Frecuencia):', definition: 'Número de ciclos por segundo (GHz). Ejemplo: <strong>Intel Core i9-14900KS</strong> (6.2 GHz), <strong>AMD Ryzen 9 9950X</strong> (5.7 GHz).' },
            { term: 'Memoria caché (L1, L2, L3):', definition: 'Memoria SRAM interna de alta velocidad.' },
            { term: 'Núcleos (Cores) y Multihilo:', definition: 'Cantidad de unidades de procesamiento físicas y lógicas para el paralelismo.' },
            { term: 'Proceso de Fabricación (Litografía):', definition: 'Tamaño de los transistores (nm). Un número menor implica mayor densidad y eficiencia (ej. 3nm, 4nm).' },
            { term: 'Soporte de Conjuntos de Instrucciones:', definition: 'Capacidades del procesador (ej. <code>AVX</code>, <code>AES-NI</code>).' },
            { term: 'TDP (Thermal Design Power):', definition: 'Medida del calor máximo que el sistema de refrigeración debe disipar (W).' }
        ]},
        { type: 'practicalExample', title: '¿Qué significa el TDP?', text: 'El TDP no es el consumo eléctrico, sino una guía para elegir la refrigeración. Un procesador con un TDP de 125W necesita un disipador mucho más potente que uno de 65W para evitar el sobrecalentamiento y la pérdida de rendimiento (thermal throttling).'}
      ]
    },
    // --- MANTENGO TU ENFOQUE EFICIENTE Y CONCISO ---
    {
        id: "t5_s2_2", shortTitle: "2.2. Estructura Funcional", title: "2.2. ESTRUCTURA FUNCIONAL",
        icon: 'sitemap',
        content: [
            { type: 'paragraph', text: 'El microprocesador integra en un mismo chip la Unidad Aritmético-Lógica (ALU), la Unidad de Control (UC), Registros y los buses internos. La funcionalidad de estos componentes ya fue introducida en temas anteriores.' },
            { type: 'subheading', text: '2.2.5. Otros Componentes Integrados' },
            { type: 'paragraph', text: 'Los microprocesadores modernos han evolucionado para incluir otras unidades funcionales que aumentan sus prestaciones:'},
            { type: 'list', items: [
                '<strong>Unidad de Punto Flotante (FPU):</strong> Coprocesador matemático especializado en cálculos con números decimales.',
                '<strong>Controlador de Memoria Integrado (IMC):</strong> Gestiona la comunicación directa con la memoria RAM, reduciendo latencias.',
                '<strong>Unidad de Gestión de Energía:</strong> Ajusta el consumo y la velocidad del procesador según la carga de trabajo.',
                '<strong>NPU (Neural Processing Unit):</strong> Una adición reciente en procesadores como los <strong>Intel Core Ultra</strong>, dedicada a acelerar tareas de inteligencia artificial.'
            ]}
        ]
    },
    {
        id: "t5_s2_3", shortTitle: "2.3. Estructura Física", title: "2.3. ESTRUCTURA FÍSICA",
        icon: 'chip',
        content: [
            { type: 'paragraph', text: 'Físicamente, el microprocesador es un circuito integrado que contiene miles de millones de transistores sobre una oblea de silicio (<strong>die</strong>).'},
            { type: 'paragraph', text: 'El <strong>encapsulado</strong> protege el die y lo conecta con el <strong>socket</strong> de la placa base. Los tipos de encapsulado más comunes son <strong>LGA (Land Grid Array)</strong> de Intel, y <strong>PGA (Pin Grid Array)</strong>, aunque AMD ya usa LGA en sus plataformas de gama alta.'}
        ]
    },
    // --- TU CONTENIDO, MI ESTRUCTURA DE LISTA Y QUIZ AÑADIDO ---
    {
      id: "t5_s2_4", shortTitle: "2.4. Tipos", title: "2.4. TIPOS DE MICROPROCESADORES",
      icon: 'types',
      content: [
        { type: 'paragraph', text: 'Se pueden clasificar atendiendo a diversos criterios:' },
        { type: 'nestedList', items: [
            { text: '<strong>A. Según el juego de instrucciones (ISA):</strong>', subItems: ['<strong>CISC (Complex...):</strong> Instrucciones complejas (ej. x86 de Intel/AMD).', '<strong>RISC (Reduced...):</strong> Instrucciones simples y eficientes (ej. ARM, usado en móviles y Apple Silicon).'] },
            { text: '<strong>B. Según el tamaño de palabra:</strong>', subItems: ['64 bits es el estándar en PC, mientras que 8, 16 o 32 bits son comunes en microcontroladores.'] },
            { text: '<strong>C. Según su aplicación:</strong>', subItems: ['<strong>Escritorio (Desktop)</strong>, <strong>Móvil (Mobile)</strong> y <strong>Servidor (Server)</strong>.'] }
        ]},
        { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
          { question: 'Un procesador para un smartphone priorizará el bajo consumo. ¿Qué arquitectura es más probable que utilice?', options: ['CISC', 'RISC'], correctAnswerIndex: 1 },
          { question: 'El socket de un procesador Intel actual es de tipo:', options: ['PGA', 'LGA'], correctAnswerIndex: 1 }
        ]}
      ]
    },
    // --- TU DIAGRAMA DETALLADO + MI KEYCONCEPT EXPLICATIVO ---
    {
        id: "t5_s2_5", shortTitle: "2.5. Comunicación", title: "2.5. COMUNICACIÓN CON EL EXTERIOR",
        icon: 'communication',
        content: [
            { type: 'paragraph', text: 'La comunicación con el chipset de la placa base varía entre fabricantes:' },
            { type: 'keyConcept', title: 'Intel vs. AMD', items: [
                '<strong>Intel - DMI (Direct Media Interface):</strong> Es un bus de alta velocidad que conecta la CPU con el <strong>chip PCH (Platform Controller Hub)</strong>.',
                '<strong>AMD - Infinity Fabric (IF):</strong> Tecnología de interconexión que no solo conecta la CPU con el chipset, sino también los diferentes <strong>chiplets</strong> dentro del propio procesador.'
            ]},
            { type: 'flowDiagram', title: 'Diagrama de Bloques de un Chipset Moderno (Intel)',
                initialNodes: [ {id:'cpu',position:{x:250,y:0},data:{label:'CPU\n(P-cores + E-cores)'}}, {id:'ddr',position:{x:500,y:0},data:{label:'DDR5/DDR4 Memory'}}, {id:'pcie_cpu',position:{x:0,y:0},data:{label:'PCIe 5.0 x16 (GPU)'}}, {id:'dmi',position:{x:250,y:100},data:{label:'DMI x8 Gen4'}}, {id:'pch',position:{x:250,y:200},data:{label:'PCH (Chipset)'}}, {id: 'pcie_pch',position:{x:0,y:250},data:{label:'PCIe 4.0/3.0'}}, {id: 'usb',position:{x:500,y:250},data:{label:'USB 3.2/2.0'}}, {id: 'sata',position:{x:500,y:325},data:{label:'SATA 3.0'}}, {id: 'wifi',position:{x:0,y:325},data:{label:'Wi-Fi 6E'}} ],
                initialEdges: [ {id:'e1',source:'cpu',target:'pcie_cpu'}, {id:'e2',source:'cpu',target:'ddr'}, {id:'e3',source:'cpu',target:'dmi',animated:true}, {id:'e4',source:'dmi',target:'pch',animated:true}, {id:'e5',source:'pch',target:'pcie_pch'}, {id:'e6',source:'pch',target:'usb'}, {id:'e7',source:'pch',target:'sata'}, {id:'e8',source:'pch',target:'wifi'} ]
            }
        ]
    },
    // --- TU TABLA + MI ADICIÓN DE NVIDIA ---
    {
      id: "t5_s3",
      shortTitle: "3. Marcas y Fabricantes",
      title: "3. PRINCIPALES MARCAS Y FABRICANTES DE MICROPROCESADORES",
      icon: 'factory',
      content: [
        { type: 'paragraph', text: 'Es importante distinguir entre las empresas que diseñan sus propios chips y las compañías especializadas (<strong>fundiciones</strong> o <em>fabs</em>) que los fabrican físicamente.' },
        { type: 'table', headers: ['Marca', 'Modelo de Negocio', 'Descripción'], rows: [
          ['Intel', 'IDM (Diseña y Fabrica)', 'Principalmente para PC y servidores.'],
          ['AMD', 'Fabless (Diseña)', 'Diseña CPUs (Ryzen) y GPUs (Radeon), subcontrata la fabricación a TSMC.'],
          ['NVIDIA', 'Fabless (Diseña)', 'Líder en GPUs, también diseña CPUs (Grace) y SoCs. Fabrica en TSMC y Samsung.'],
          ['Qualcomm', 'Fabless (Diseña)', 'Líder en SoCs para móviles (Snapdragon) y ahora para PC (Snapdragon X).'],
          ['Apple', 'Fabless (Diseña)', 'Diseña sus chips (Serie A, Serie M) basados en ARM. Fabrica en TSMC.'],
          ['ARM Holdings', 'Licencia Arquitectura', 'No fabrica chips, solo diseña y licencia la arquitectura RISC.']
        ]}
      ]
    },
    {
        id: "t5_s4", shortTitle: "4. Importancia del Diseño", title: "4. IMPORTANCIA DEL DISEÑO DE LOS MICROPROCESADORES",
        icon: 'design',
        content: [
            { type: 'paragraph', text: 'El diseño de los microprocesadores es crítico y de vital importancia. Vulnerabilidades de hardware como <strong>Meltdown</strong> y <strong>Spectre</strong> (2018) demostraron que la seguridad es un factor de diseño primordial.' }
        ]
    },
    // --- MI SECCIÓN DE NOVEDADES, MÁS ACTUALIZADA ---
    {
        id: "t5_s5", shortTitle: "5. Novedades", title: "5. NOVEDADES EN EL SECTOR DE LOS MICROPROCESADORES",
        icon: 'news',
        content: [
          { type: 'paragraph', text: 'El sector en 2024 está marcado por la "carrera de la IA" y la competencia entre arquitecturas:' },
          { type: 'list', items: [
            '<strong>Intel:</strong> Ha lanzado los procesadores <strong>Core Ultra ("Meteor Lake")</strong> para portátiles con su primera NPU integrada. Para escritorio, se espera la arquitectura <strong>"Arrow Lake"</strong> a finales de 2024.',
            '<strong>AMD:</strong> Ya ha lanzado su arquitectura <strong>Zen 5</strong> (serie <strong>Ryzen 9000</strong>), que ofrece un salto significativo en IPC. También integra NPUs (Ryzen AI) en sus procesadores para portátiles y escritorio.',
            '<strong>Qualcomm y Apple:</strong> Impulsan la transición a ARM en PCs con los chips <strong>Snapdragon X Elite</strong> para los nuevos "Copilot+ PCs" y el <strong>Apple M4</strong>, respectivamente, desafiando el dominio de x86 con un gran rendimiento y eficiencia.',
            '<strong>Tendencia General:</strong> La era del "AI PC" ha comenzado. El foco está en la eficiencia y en la aceleración de IA de forma local mediante NPUs, en lugar de depender exclusivamente de la nube.'
          ]}
        ]
    },
    {
        id: "t5_s6", shortTitle: "6. Evento CES", title: "6. EVENTO CES 2024",
        icon: 'event',
        content: [
            { type: 'paragraph', text: 'En el <strong>CES 2024</strong>, Intel presentó oficialmente sus procesadores Core de 14ª generación (modelos HX y U-series), mientras que AMD desveló los procesadores de escritorio <strong>Ryzen 8000G Series</strong> con potentes gráficos integrados y NPU.'},
            { type: 'resourceLink', name: 'Web del evento', url: 'https://www.ces.tech/', description: 'Página oficial del Consumer Electronics Show.'}
        ]
    },
    { id: "t5_s7", shortTitle: "7. Recursos", title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS", icon: "tools", content: [ { type: 'list', items: ['<code>CPU-Z</code>', '<code>HWMonitor</code>', '<code>Speccy</code>'] } ] },
    { id: "t5_s8", shortTitle: "8. Aplicación", title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL", icon: "application", content: [ { type: 'paragraph', text: 'La comprensión de los microprocesadores es crucial. En FP, es la base de módulos como "Fundamentos de Hardware". En lo laboral, es esencial para el desarrollo de software, diseño de sistemas embebidos, IA y soporte técnico.' } ] },
    { id: "t5_s9", shortTitle: "9. Conclusión", title: "9. CONCLUSIÓN", icon: "conclusion", content: [ { type: 'paragraph', text: 'Este tema ha ofrecido una visión global de los microprocesadores. La diversidad del mercado impulsa una innovación constante. La tendencia actual hacia la especialización, con la integración de NPUs, marca el futuro del procesamiento.' } ] },
    { id: "t5_s10", shortTitle: "10. Bibliografía", title: "10. BIBLIOGRAFÍA", icon: "bibliography", content: [ { type: 'bibliography', items: [ { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' }, { text: 'Stallings, W. (2006). <em>Organización y arquitectura de computadores</em>. Editorial Prentice-Hall' }, { text: 'Web oficial de Intel', url: 'https://www.intel.com' }, { text: 'Web oficial de AMD', url: 'https://www.amd.com' } ] } ] }
    ],
    // --- MI GLOSARIO AÑADIDO ---
    glossary: [
        { term: 'Microprocesador', definition: 'Circuito integrado que contiene la CPU y otros componentes, actuando como el cerebro de un sistema informático.'},
        { term: 'TDP (Thermal Design Power)', definition: 'Medida del calor máximo que un procesador puede generar y que su sistema de refrigeración debe disipar.'},
        { term: 'Socket', definition: 'Conector en la placa base donde se instala el microprocesador (ej. LGA, PGA).'},
        { term: 'Chiplet / Tile', definition: 'Diseño de procesador modular donde diferentes componentes (núcleos, I/O, gráficos) son chips más pequeños interconectados.'},
        { term: 'NPU (Neural Processing Unit)', definition: 'Unidad de procesamiento especializada en acelerar tareas de inteligencia artificial.'},
        { term: 'Fabless', definition: 'Modelo de negocio donde una empresa diseña semiconductores pero subcontrata su fabricación (ej. AMD, NVIDIA).'},
        { term: 'IDM (Integrated Device Manufacturer)', definition: 'Modelo de negocio donde una empresa diseña y fabrica sus propios semiconductores (ej. Intel).'}
    ]
  };