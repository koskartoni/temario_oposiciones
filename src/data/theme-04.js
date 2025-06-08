export const theme04Data = {
    id: "theme4",
    name: "TEMA 4: Memoria Interna",
    title: "TEMA 4. INFORMÁTICA / S.A.I. - MEMORIA INTERNA. TIPOS. DIRECCIONAMIENTO. CARACTERÍSTICAS Y FUNCIONES",
    version: "Versión: Mayo 2024 (Actualizado)",
    sections: [
      {
        id: "t4_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'El presente tema, parte del temario oficial, se ubica en el bloque de "Hardware" y es la continuación natural del estudio de la CPU. La <strong>arquitectura de Von Neumann</strong> define las unidades funcionales de un computador, siendo la memoria una de las más críticas.' },
          { type: 'paragraph', text: 'Tradicionalmente, la memoria se divide en dos grandes estructuras: <strong>memoria interna</strong> (registros, caché, memoria principal), caracterizada por su alta velocidad y volatilidad, y <strong>memoria externa</strong> o secundaria (discos duros, SSD), más lenta pero no volátil. Este tema se centra en la memoria interna.' },
          { type: 'paragraph', text: 'El estudio de la memoria interna es fundamental en el currículo de la familia profesional de Informática y Comunicaciones, apareciendo en módulos como <code>Fundamentos de hardware</code> o <code>Sistemas informáticos</code> de diversos ciclos formativos.' }
        ]
      },
      {
        id: "t4_s2",
        shortTitle: "2. Características y Funciones",
        title: "2. CARACTERÍSTICAS Y FUNCIONES",
        content: [
          { type: 'paragraph', text: 'En la actualidad se emplean los <strong>semiconductores</strong> como tecnología de almacenamiento, usando condensadores y transistores para representar los dos estados binarios. Las características y parámetros clave de las memorias son:' },
          { type: 'nestedList', items: [
              { text: '<strong>Capacidad o tamaño:</strong> Cantidad de información almacenable, medida en bits, Bytes y sus múltiplos (KB, MB, GB, TB).', subItems: ['Nota: Aunque comercialmente 1 KB son 1000 bytes, en computación 1 KiB (kibibyte) son 1024 (2^10) bytes.'] },
              { text: '<strong>Duración de la información:</strong> Define si la memoria es volátil o no.', subItems: ['<strong>Volátiles:</strong> Requieren energía para mantener la información (ej. <code>RAM</code>).', '<strong>No volátiles:</strong> Retienen la información sin energía (ej. <code>ROM</code>, memoria <code>Flash</code>).'] },
              { text: '<strong>Tipo (tecnología):</strong> La tecnología específica de la memoria, como <code>DRAM</code> o <code>SRAM</code>, que determina su rendimiento, voltaje y formato.', },
              { text: '<strong>Tiempo de acceso o latencia:</strong> Tiempo que transcurre desde que se solicita un dato hasta que está disponible. Se mide en nanosegundos (ns) o en ciclos de reloj (CL para la RAM).', },
              { text: '<strong>Ancho de banda:</strong> Cantidad de datos que se pueden transferir por unidad de tiempo, medido en Gigabytes por segundo (GB/s).' },
          ]},
          { type: 'subheading', text: 'Principales Funciones' },
          { type: 'list', items: [
              '<strong>Almacenamiento temporal de datos:</strong> La RAM proporciona el espacio de trabajo para el sistema operativo y las aplicaciones en ejecución.',
              '<strong>Almacenamiento de instrucciones de inicio:</strong> La ROM almacena el firmware (<code>BIOS/UEFI</code>) esencial para arrancar el dispositivo.',
              '<strong>Caché de datos:</strong> La memoria caché (SRAM) actúa como un buffer ultrarrápido entre la CPU y la RAM, almacenando datos de acceso frecuente.',
              '<strong>Comunicación entre componentes:</strong> Sirve como área de intercambio temporal para los datos que se mueven entre la CPU, GPU y otros dispositivos.'
          ]}
        ]
      },
      {
        id: "t4_s3",
        shortTitle: "3. Tipos de Memoria Interna",
        title: "3. TIPOS DE MEMORIA INTERNA",
        content: [
          { type: 'paragraph', text: 'El diseño de un sistema de memoria busca un equilibrio entre <strong>coste, velocidad y capacidad</strong>. Esto da lugar a una <strong>jerarquía de memoria</strong>, donde los niveles superiores son más rápidos, más caros y de menor capacidad.' },
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
          },
          { type: 'paragraph', text: 'En este tema nos centramos en las unidades de memoria interna: <strong>registros, memoria caché, memoria RAM y memoria ROM</strong>.'}
        ]
      },
      {
          id: "t4_s3_1", shortTitle: "3.1. Registros", title: "3.1. REGISTROS",
          content: [
              { type: 'paragraph', text: 'Los registros de la CPU son el nivel más alto de la jerarquía. Son pequeñas memorias de acceso extremadamente rápido dedicadas al almacenamiento temporal de datos necesarios para la ejecución inmediata de una instrucción. Se clasifican en:'},
              { type: 'definitionList', items: [
                  { term: 'A. Generales:', definition: 'Contienen los operandos con los que se realizarán las instrucciones del programa (Ej: <code>EAX</code>, <code>EBX</code> en x86).' },
                  { term: 'B. Específicos:', definition: 'Cumplen una función concreta. Los más importantes son: <code>MAR</code> (Registro de Dirección de Memoria), <code>AC</code> (Acumulador), <code>PC</code> (Contador de Programa), <code>IR</code> (Registro de Instrucción), <code>SP</code> (Puntero de Pila) y <code>PSW</code> (Registro de Estado).' }
              ]}
          ]
      },
      {
          id: "t4_s3_2", shortTitle: "3.2. Memoria Caché", title: "3.2. MEMORIA CACHÉ",
          content: [
              { type: 'paragraph', text: 'La memoria caché es una memoria intermedia entre el procesador y la memoria principal. Utiliza tecnología <strong>SRAM (Static RAM)</strong>, que es mucho más rápida que la DRAM de la memoria principal porque no necesita ser refrescada constantemente, aunque también es más costosa y de menor densidad.'},
              { type: 'flowDiagram', title: 'Ubicación de la Caché',
                  initialNodes: [
                      { id: 'cpu', position: {x: 0, y: 0}, data: { label: 'CPU' } },
                      { id: 'cache', position: {x: 200, y: 0}, data: { label: 'Memoria Caché' } },
                      { id: 'ram', position: {x: 400, y: 0}, data: { label: 'Memoria Principal (RAM)' } },
                  ],
                  initialEdges: [ {id: 'e1', source: 'cpu', target: 'cache', animated: true}, {id: 'e2', source: 'cache', target: 'ram', animated: true} ]
              },
              { type: 'subheading', text: 'Ejemplo: Caché en un Intel Core i3-14100 (2024)' },
              { type: 'list', items: [
                  '<strong>Caché L1:</strong> 80 KB por núcleo. Es la más rápida y pequeña, dividida en caché para datos y para instrucciones. Es el primer lugar donde la CPU busca.',
                  '<strong>Caché L2:</strong> 1.25 MB por núcleo. Actúa como intermediario entre la L1 y la L3. Un poco más lenta pero más grande.',
                  '<strong>Caché L3 (o Last Level Cache):</strong> 12 MB compartidos entre todos los núcleos. Almacena datos usados comúnmente por varios núcleos, reduciendo la necesidad de acceder a la lenta memoria RAM.'
              ]}
          ]
      },
      {
          id: "t4_s3_3", shortTitle: "3.3. Memoria RAM", title: "3.3. MEMORIA RAM",
          content: [
              { type: 'paragraph', text: 'La memoria <strong>RAM (Random Access Memory)</strong> es la memoria principal del equipo. Las memorias actuales utilizan tecnología <strong>DRAM (Dynamic RAM)</strong>, basada en celdas con un transistor y un condensador que almacenan un bit. Requieren un refresco constante para no perder los datos.' },
              { type: 'paragraph', text: 'Las variantes más comunes de DRAM son:' },
              { type: 'nestedList', items: [
                  { text: '<strong>SDRAM (Synchronous DRAM):</strong> Sincronizada con el reloj del sistema. Su evolución es la <strong>DDR (Double Data Rate)</strong>.', subItems: [
                      '<strong>DDR a DDR4:</strong> Sucesivas generaciones que aumentaron la velocidad y redujeron el consumo.',
                      '<strong>DDR5:</strong> El estándar actual, con mayor velocidad, ancho de banda y eficiencia. Ya se está trabajando en <strong>DDR5X</strong>. Introduce perfiles de overclocking como <strong>Intel XMP 3.0</strong> y <strong>AMD EXPO</strong>.'
                  ]},
                  { text: '<strong>GDDR (Graphics DDR):</strong> Optimizada para tarjetas gráficas, con un ancho de banda muy superior.', },
                  { text: '<strong>LPDDR (Low Power DDR):</strong> Diseñada para dispositivos móviles, priorizando el bajo consumo.' }
              ]},
              { type: 'subheading', text: 'Formatos Físicos' },
              { type: 'list', items: ['<strong>Formato DIMM (Dual In-Line Memory Module):</strong> Usado en PC de sobremesa y servidores.', '<strong>Formato SO-DIMM (Small Outline DIMM):</strong> Más pequeño, para portátiles y sistemas compactos.']},
              { type: 'table', headers: ['Tecnología', 'Pines DIMM', 'Pines SO-DIMM'], rows: [
                  ['DDR', '184', '200'], ['DDR2', '240', '200'], ['DDR3', '240', '204'], ['DDR4', '288', '260'], ['DDR5', '288', '262']
              ]},
              { type: 'paragraph', text: 'Un nuevo formato emergente para portátiles es <strong>CAMM2</strong>, estandarizado a finales de 2023, que busca reemplazar a SO-DIMM ofreciendo mayor densidad, rendimiento y un diseño más delgado.' }
          ]
      },
      {
        id: "t4_s3_4", shortTitle: "3.4. Memoria ROM", title: "3.4. MEMORIA ROM",
        content: [
          { type: 'paragraph', text: 'Las memorias <strong>ROM (Read Only Memory)</strong> contienen un patrón permanente de datos que, en su sentido más estricto, no puede alterarse. Son no volátiles.' },
          { type: 'paragraph', text: 'Aunque las ROM más antiguas (programadas por máscara) eran inalterables, las modernas pueden ser reprogramadas, aunque el proceso es lento y poco frecuente. Tipos:' },
          { type: 'list', items: [
            '<strong>ROM por máscara:</strong> Programada en fábrica.',
            '<strong>PROM (Programmable ROM):</strong> Programable una sola vez por el usuario.',
            '<strong>EPROM (Erasable PROM):</strong> Borrable mediante luz ultravioleta.',
            '<strong>EEPROM (Electrically Erasable PROM):</strong> Borrable y regrabable eléctricamente. El firmware <strong>BIOS/UEFI</strong> de las placas base se almacena en este tipo de memoria.',
            '<strong>Flash EEPROM:</strong> Un tipo de EEPROM más rápido, usado en SSDs, pendrives y tarjetas de memoria.'
          ]}
        ]
      },
      {
        id: "t4_s4",
        shortTitle: "4. Direccionamiento",
        title: "4. DIRECCIONAMIENTO",
        content: [
          { type: 'paragraph', text: 'El direccionamiento indica el modo en que un dato o instrucción es almacenado o recuperado de la memoria. Los principales tipos de acceso son:' },
          { type: 'list', items: [
              '<strong>Direccionamiento por palabras:</strong> Es el procedimiento tradicional. Cada dirección de memoria se corresponde con una palabra (e.g., 32 o 64 bits).',
              '<strong>Direccionamiento por bytes:</strong> Es el más común hoy en día. Cada byte individual tiene una dirección única. La memoria lee la palabra completa, pero la CPU selecciona el byte específico que necesita.',
              '<strong>Direccionamiento por bloques (ráfagas):</strong> Se transfiere un bloque contiguo de datos especificando solo la dirección de inicio y el tamaño. Es muy eficiente y lo usan la caché y el acceso directo a memoria (DMA).'
          ]}
        ]
      },
      {
        id: "t4_s5",
        shortTitle: "5. Recursos",
        title: "5. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
          { type: 'resourceLink', name: 'RAMMap', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/rammap', description: 'Herramienta de Sysinternals (Microsoft) para un análisis avanzado del uso de la memoria física en sistemas Windows.'}
        ]
      },
      {
        id: "t4_s6",
        shortTitle: "6. Fabricantes RAM",
        title: "6. PRINCIPALES FABRICANTES DE MEMORIA RAM",
        content: [
          { type: 'paragraph', text: 'Es importante distinguir entre los fabricantes de los <strong>chips de memoria</strong> y los que <strong>ensamblan los módulos</strong> que compramos.' },
          { type: 'subheading', text: 'Fabricantes de Chips (los más importantes):'},
          { type: 'list', items: ['Samsung', 'SK Hynix', 'Micron (propietaria de Crucial)']},
          { type: 'subheading', text: 'Ensambladores de Módulos (marcas comerciales conocidas):'},
          { type: 'list', items: ['Kingston (HyperX)', 'Corsair', 'G.Skill', 'Crucial', 'Team Group', 'Patriot Memory']}
        ]
      },
      {
        id: "t4_s7", shortTitle: "7. Aplicación", title: "7. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La comprensión de la memoria interna es fundamental tanto en la educación como en el entorno profesional, dada su importancia en el diseño y funcionamiento de sistemas informáticos.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'nestedList', items: [
              { text: '<strong>Educación Secundaria:</strong>', subItems: ['Introducción básica a cómo los ordenadores almacenan y recuperan información, utilizando analogías para explicar tipos de memoria.'] },
              { text: '<strong>Formación Profesional:</strong>', subItems: ['En diferentes módulos se enseñan las características y funciones de las memorias en los dispositivos electrónicos, aprendiendo a identificar y seleccionar memorias adecuadas para cada sistema.'] }
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Programación de sistemas:</strong> Requiere un entendimiento profundo del direccionamiento y la gestión de recursos para desarrollar software que interactúa directamente con el hardware.',
              '<strong>Inteligencia Artificial:</strong> Implementación de técnicas eficientes de manejo de memoria para procesar y analizar grandes volúmenes de datos.',
              '<strong>Diagnóstico y resolución de problemas:</strong> Identificación y solución de problemas relacionados con la memoria en sistemas informáticos.',
              '<strong>Mantenimiento y actualización de sistemas:</strong> Asesoramiento sobre actualizaciones de memoria para mejorar el rendimiento.'
          ]}
        ]
      },
      {
        id: "t4_s8", shortTitle: "8. Conclusión", title: "8. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'A lo largo del tema, hemos desentrañado la importancia crítica de la <strong>memoria interna</strong> en el funcionamiento eficiente y en la arquitectura de los dispositivos modernos. Es un componente esencial para la capacidad de procesamiento, el rendimiento y la gama de funcionalidades que puede soportar. La discusión sobre los diversos tipos (registros, caché, RAM y ROM) subraya la complejidad que hay detrás de esta jerarquía de memoria.'}
        ]
      },
      {
        id: "t4_s9", shortTitle: "9. Bibliografía", title: "9. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
            { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill' },
            { text: 'Stallings, W. (2006). <em>Organización y arquitectura de computadores</em>. Editorial Prentice-Hall' },
            { text: 'Tanenbaum, A. (2000). <em>Organización de computadoras. Un enfoque estructurado</em>. Editorial Prentice-Hall' },
            { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' },
            { text: 'Patterson, D. y Hennessy, J. (2000). <em>Estructura y diseño de computadores</em>. Editorial Reverté' },
            { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' },
            { text: 'Xataka (Web de actualidad sobre tecnología e informática)', url: 'https://www.xataka.com' }
          ]}
        ]
      }
    ]
  };