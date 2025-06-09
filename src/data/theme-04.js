// CÓDIGO CORREGIDO CON LA INTRODUCCIÓN FIEL Y HOMOGÉNEA
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme04Data = {
  id: "theme4",
  name: "TEMA 4: Memoria Interna",
  title: "TEMA 4. MEMORIA INTERNA. TIPOS. DIRECCIONAMIENTO. CARACTERÍSTICAS Y FUNCIONES",
  version: "Versión: Agosto 2024",
  sections: [
    {
      id: "t4_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        // --- INTRODUCCIÓN CORREGIDA SIGUIENDO EL ESTÁNDAR ---
        { type: 'paragraph', text: 'El presente tema forma parte del temario oficial publicado en el BOE de 13 de febrero de 1996 y se ubica dentro del bloque temático de “Hardware”, a continuación del tema que trata la CPU.' },
        { type: 'paragraph', text: 'En 1946, John von Neumann estableció el modelo básico de arquitectura para computadores digitales, donde la <strong>unidad de memoria</strong> es un pilar fundamental junto a la CPU y la E/S.' },
        { type: 'paragraph', text: 'Tradicionalmente, la memoria se divide en <strong>memoria interna</strong> (registros, caché, memoria principal) y <strong>memoria externa</strong>. A lo largo de este tema, nos centraremos en explicar concretamente el funcionamiento, tipos, características y direccionamiento de la memoria interna.' },
        { type: 'paragraph', text: 'Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio de la memoria interna está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:' },
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Fundamentos de hardware</code>' },
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Montaje y mantenimiento de equipos</code>' }
        ]}
      ]
    },
    // --- EL RESTO DE SECCIONES PERMANECEN IGUAL ---
    {
      id: "t4_s2",
      shortTitle: "2. Características y Funciones",
      title: "2. CARACTERÍSTICAS Y FUNCIONES",
      icon: "features",
      content: [
        { type: 'paragraph', text: 'Las memorias basadas en semiconductores son la tecnología de almacenamiento principal hoy en día. Sus características más importantes son:' },
        { type: 'definitionList', items: [
            { term: 'Capacidad:', definition: 'Cantidad de información almacenable (Bytes, KB, MB, GB, TB). Recordar la diferencia entre prefijos decimales (1KB = 1000 B) y binarios (1KiB = 1024 B).' },
            { term: 'Duración (Volatilidad):', definition: 'Define si los datos se pierden al cortar la energía. <strong>Volátiles</strong> (RAM) la pierden, <strong>No volátiles</strong> (ROM, Flash) la retienen.' },
            { term: 'Tecnología:', definition: 'El tipo de semiconductor, como <strong>DRAM</strong> (para RAM) o <strong>SRAM</strong> (para Caché), que define su rendimiento y coste.' },
            { term: 'Tiempo de Acceso (Latencia):', definition: 'Tiempo desde la petición hasta la entrega del dato (ns o ciclos de reloj).' },
            { term: 'Ancho de Banda:', definition: 'Cantidad de datos transferidos por segundo (GB/s).' }
        ]},
        { type: 'keyConcept', title: 'Funciones Principales de la Memoria Interna', text: 'La memoria interna es crucial para: <ul><li><strong>Almacenamiento temporal:</strong> La RAM es el espacio de trabajo para el SO y las apps.</li><li><strong>Instrucciones de inicio:</strong> La ROM almacena el firmware (BIOS/UEFI).</li><li><strong>Caché de datos:</strong> La caché acelera el acceso a datos frecuentes.</li><li><strong>Comunicación:</strong> Sirve como área de intercambio entre CPU, GPU y otros componentes.</li></ul>' }
      ]
    },
    {
      id: "t4_s3",
      shortTitle: "3. Tipos de Memoria Interna",
      title: "3. TIPOS DE MEMORIA INTERNA",
      icon: "memoryTypes",
      content: [
        { type: 'paragraph', text: 'La memoria se organiza en una jerarquía que equilibra coste, velocidad y capacidad. En este tema nos centramos en los niveles de memoria interna:' }
      ]
    },
    {
        id: "t4_s3_1", shortTitle: "3.1. Registros", title: "3.1. REGISTROS",
        icon: "registers",
        content: [
            { type: 'paragraph', text: 'Son el nivel más alto y rápido de la jerarquía, ubicados dentro de la CPU. Almacenan temporalmente datos, direcciones o instrucciones para su uso inmediato. Se clasifican en <strong>Generales</strong> (flexibles) y <strong>Específicos</strong> (con una función fija como el PC, IR, SP, etc.).' }
        ]
    },
    {
        id: "t4_s3_2", shortTitle: "3.2. Memoria Caché", title: "3.2. MEMORIA CACHÉ",
        icon: "cache",
        content: [
            { type: 'paragraph', text: 'Es una memoria intermedia entre la CPU y la RAM. Usa tecnología <strong>SRAM (Static RAM)</strong>, mucho más rápida que la DRAM porque no necesita refresco, aunque es más cara y de menor densidad.'},
            { type: 'keyConcept', title: 'Niveles de Caché (Ej: Intel Core i5 moderno)', items: [
                '<strong>Caché L1:</strong> La más pequeña y rápida, dividida para datos e instrucciones. Es lo primero que consulta la CPU.',
                '<strong>Caché L2:</strong> Intermediaria entre L1 y L3, con más capacidad pero algo más lenta.',
                '<strong>Caché L3 (LLC - Last Level Cache):</strong> Compartida por todos los núcleos. Almacena datos comunes para reducir los accesos a la lenta memoria RAM.'
            ]}
        ]
    },
    {
        id: "t4_s3_3", shortTitle: "3.3. Memoria RAM", title: "3.3. MEMORIA RAM",
        icon: "ram",
        content: [
            { type: 'paragraph', text: 'La <strong>RAM (Random Access Memory)</strong> es la memoria principal volátil. La tecnología predominante es la <strong>DRAM (Dynamic RAM)</strong>, que usa celdas con un transistor y un condensador y requiere refresco constante.' },
            { type: 'subheading', text: 'Tipos y Evolución' },
            { type: 'list', items: [
                '<strong>DDR (Double Data Rate):</strong> Evolución de la SDRAM, transfiere datos dos veces por ciclo de reloj.',
                '<strong>DDR2 a DDR4:</strong> Generaciones sucesivas que mejoraron velocidad y eficiencia.',
                '<strong>DDR5:</strong> El estándar actual, con mayor ancho de banda e inteligencia integrada (ej. perfiles <strong>Intel XMP 3.0</strong> y <strong>AMD EXPO</strong>).',
                '<strong>GDDR:</strong> Optimizada para tarjetas gráficas (GPUs), con un ancho de banda muy superior.',
                '<strong>LPDDR:</strong> De bajo consumo, diseñada para dispositivos móviles.'
            ]},
            { type: 'subheading', text: 'Formatos Físicos' },
            { type: 'list', items: ['<strong>DIMM:</strong> Para PC de sobremesa y servidores.', '<strong>SO-DIMM:</strong> Formato más pequeño para portátiles.', '<strong>CAMM2:</strong> Nuevo estándar para portátiles (desde finales de 2023) que busca reemplazar a SO-DIMM, ofreciendo mayor densidad y rendimiento.']},
            { type: 'practicalExample', title: 'Descifrando una Memoria RAM: Corsair Vengeance DDR5 6000 C36', text: '<ul><li><strong>Corsair Vengeance:</strong> Fabricante y modelo.</li><li><strong>DDR5:</strong> Tecnología.</li><li><strong>6000:</strong> Velocidad efectiva en Megatransferencias por segundo (MT/s).</li><li><strong>C36:</strong> La latencia más importante, <strong>CAS Latency (CL)</strong>, que es de 36 ciclos de reloj.</li></ul> Cuanto mayor la velocidad (MT/s) y menor la latencia (CL), mejor es el rendimiento.'}
        ]
    },
    {
      id: "t4_s3_4", shortTitle: "3.4. Memoria ROM", title: "3.4. MEMORIA ROM",
      icon: "rom",
      content: [
        { type: 'paragraph', text: 'La <strong>ROM (Read Only Memory)</strong> es una memoria no volátil que contiene datos permanentes.' },
        { type: 'keyConcept', title: 'Tipos de ROM', items: [
          '<strong>ROM de Máscara:</strong> Inalterable, programada en fábrica.',
          '<strong>PROM:</strong> Programable una sola vez por el usuario.',
          '<strong>EPROM:</strong> Borrable con luz ultravioleta.',
          '<strong>EEPROM:</strong> Borrable y regrabable eléctricamente. Es la tecnología usada para el firmware <strong>BIOS/UEFI</strong> de las placas base.',
          '<strong>Flash:</strong> Un tipo de EEPROM más rápido, es la base de los SSDs, pendrives y tarjetas de memoria.'
        ]}
      ]
    },
    {
      id: "t4_s4",
      shortTitle: "4. Direccionamiento",
      title: "4. DIRECCIONAMIENTO",
      icon: "addressing",
      content: [
        { type: 'paragraph', text: 'Indica el modo en que se accede a un dato o instrucción en la memoria.' },
        { type: 'list', items: [
            '<strong>Por palabras:</strong> Cada dirección se corresponde con una palabra (ej. 64 bits).',
            '<strong>Por bytes:</strong> El más común hoy. Cada byte individual tiene una dirección única.',
            '<strong>Por bloques (ráfagas):</strong> Se transfiere un bloque contiguo de datos especificando solo la dirección de inicio. Muy eficiente y usado por la caché y el DMA (Acceso Directo a Memoria).'
        ]},
        { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
          { question: '¿Qué tipo de tecnología de memoria es más rápida y se usa para la caché de la CPU?', options: ['DRAM', 'SRAM', 'Flash'], correctAnswerIndex: 1 },
          { question: 'El firmware UEFI de tu ordenador se almacena en una memoria de tipo...', options: ['RAM', 'EPROM', 'EEPROM'], correctAnswerIndex: 2 },
          { question: '¿Qué característica indica que los datos se borran al apagar el ordenador?', options: ['Latencia', 'Volatilidad', 'Ancho de banda'], correctAnswerIndex: 1 }
        ]}
      ]
    },
    {
      id: "t4_s5",
      shortTitle: "5. Recursos",
      title: "5. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
      icon: "tools",
      content: [
        { type: 'resourceLink', name: 'RAMMap', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/rammap', description: 'Herramienta de Sysinternals (Microsoft) para un análisis avanzado del uso de la memoria física en Windows.'}
      ]
    },
    {
      id: "t4_s6",
      shortTitle: "6. Fabricantes RAM",
      title: "6. PRINCIPALES FABRICANTES DE MEMORIA RAM",
      icon: "factory",
      content: [
        { type: 'paragraph', text: 'Es importante distinguir entre los fabricantes de los chips de memoria y los que ensamblan los módulos.' },
        { type: 'subheading', text: 'Fabricantes de Chips:'},
        { type: 'list', items: ['Samsung', 'SK Hynix', 'Micron (propietaria de Crucial)']},
        { type: 'subheading', text: 'Ensambladores de Módulos (marcas comerciales):'},
        { type: 'list', items: ['Kingston', 'Corsair', 'G.Skill', 'Crucial', 'Team Group']}
      ]
    },
    {
      id: "t4_s7", shortTitle: "7. Aplicación", title: "7. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
      icon: "application",
      content: [
          { type: 'paragraph', text: 'La comprensión de la memoria interna es fundamental en el diseño y funcionamiento de sistemas informáticos.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'list', items: [
              '<strong>Formación Profesional:</strong> En módulos de hardware y sistemas, se enseñan las características y funciones de las memorias, aprendiendo a identificar y seleccionar componentes adecuados para cada sistema.'
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Programación de sistemas:</strong> Requiere un entendimiento profundo del direccionamiento y la gestión de memoria.',
              '<strong>Inteligencia Artificial:</strong> Es clave para implementar técnicas eficientes de manejo de memoria para procesar grandes volúmenes de datos.',
              '<strong>Mantenimiento y actualización de sistemas:</strong> Para asesorar sobre actualizaciones de memoria que mejoren el rendimiento.'
          ]}
      ]
    },
    {
      id: "t4_s8", shortTitle: "8. Conclusión", title: "8. CONCLUSIÓN",
      icon: "conclusion",
      content: [
        { type: 'paragraph', text: 'A lo largo del tema, hemos desentrañado la importancia crítica de la <strong>memoria interna</strong> en la arquitectura de los dispositivos modernos. La discusión sobre los diversos tipos (registros, caché, RAM y ROM) y su organización en una jerarquía, subraya la complejidad y el ingenio necesarios para lograr un equilibrio entre rendimiento, capacidad y coste, que es la base del funcionamiento de cualquier sistema informático.'}
      ]
    },
    {
      id: "t4_s9", shortTitle: "9. Bibliografía", title: "9. BIBLIOGRAFÍA",
      icon: "bibliography",
      content: [
        { type: 'bibliography', items: [
          { text: 'Stallings, W. (2006). <em>Organización y arquitectura de computadores</em>. Editorial Prentice-Hall' },
          { text: 'Tanenbaum, A. (2000). <em>Organización de computadoras. Un enfoque estructurado</em>. Editorial Prentice-Hall' },
          { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' }
        ]}
      ]
    }
  ],
  glossary: [
      { term: 'Memoria Interna', definition: 'Conjunto de memorias de acceso rápido y, por lo general, volátiles, como los registros, la caché y la RAM.'},
      { term: 'Volatilidad', definition: 'Característica de una memoria por la cual pierde sus datos cuando se interrumpe la alimentación eléctrica.'},
      { term: 'Latencia', definition: 'Tiempo de retardo desde que se solicita un dato a la memoria hasta que este está disponible. Menor latencia es mejor.'},
      { term: 'Ancho de Banda', definition: 'Cantidad máxima de datos que se pueden transferir por unidad de tiempo. Mayor ancho de banda es mejor.'},
      { term: 'SRAM (Static RAM)', definition: 'Memoria rápida y cara que no necesita refresco. Se usa para la caché de la CPU.'},
      { term: 'DRAM (Dynamic RAM)', definition: 'Memoria más lenta y económica que necesita refresco constante. Se usa para la memoria RAM principal.'},
      { term: 'DDR (Double Data Rate)', definition: 'Tecnología de DRAM que transfiere datos dos veces por ciclo de reloj, duplicando su rendimiento efectivo.'},
      { term: 'ROM (Read-Only Memory)', definition: 'Memoria no volátil cuyo contenido es permanente o difícil de modificar. Almacena el firmware del sistema (BIOS/UEFI).'},
      { term: 'Direccionamiento', definition: 'Método por el cual la CPU especifica la ubicación de los datos en la memoria (por byte, por palabra, por bloque).'}
  ]
};