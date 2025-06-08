export const theme17Data = {
    id: "theme17",
    name: "TEMA 17: Gestión de Memoria",
    title: "TEMA 17. INFORMÁTICA / S.A.I. - SISTEMAS OPERATIVOS: GESTIÓN DE MEMORIA",
    version: "Versión: Mayo 2024 (Actualizado)",
    sections: [
      {
        id: "t17_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Continuando en el bloque de "Sistemas Operativos", este tema se adentra en otro de los aspectos más críticos del núcleo de un SO: la <strong>gestión de memoria</strong>. Esta función es fundamental para asegurar el rendimiento y la estabilidad del sistema, permitiendo que múltiples aplicaciones funcionen de manera concurrente.' },
          { type: 'paragraph', text: 'El gestor de memoria del SO debe decidir cómo y dónde ubicar los procesos, controlar las zonas de memoria asignadas y libres, y gestionar el intercambio de información entre la memoria principal y la secundaria. También implementa políticas de sustitución de páginas cuando la memoria física se llena.' }
        ]
      },
      {
        id: "t17_s2",
        shortTitle: "2. Gestión de Memoria",
        title: "2. GESTIÓN DE MEMORIA",
        content: [
          { type: 'paragraph', text: 'El sistema operativo lleva a cabo la gestión de la memoria por medio de un componente llamado <strong>gestor de memoria</strong>. Sus principales funciones son:' },
          { type: 'list', items: [
              'Decidir qué zonas de memoria asignar a cada proceso.',
              'Evitar que los procesos interfieran entre sí accediendo a zonas de memoria que no les corresponden.',
              'Controlar las zonas de memoria asignadas y libres.',
              'Gestionar el intercambio de información entre memoria principal y secundaria (swapping).'
          ]},
          { type: 'table', title: 'Esquemas de Gestión de Memoria', headers: ['Memoria Real', 'Memoria Virtual'], rows: [
              ['<strong>Monotarea</strong>', '<strong>Multitarea:</strong><br/>- Particiones Fijas<br/>- Particiones Variables<br/>- Paginación Pura<br/>- Segmentación Pura', '<strong>Multitarea:</strong><br/>- Memoria Virtual Paginada<br/>- Memoria Virtual Segmentada<br/>- Combinación de ambas']
          ]}
        ]
      },
      {
        id: "t17_s2_1", shortTitle: "2.1. Monoprogramación", title: "2.1. MONOPROGRAMACIÓN",
        content: [
          { type: 'paragraph', text: 'En un sistema de monoprogramación, la memoria principal se divide en dos: una parte para el SO (kernel) y otra para el único programa en ejecución. Es un sistema ya obsoleto que desaprovecha la memoria y la CPU.'}
        ]
      },
      {
        id: "t17_s2_2", shortTitle: "2.2. Multiprogramación (Real)", title: "2.2. MULTIPROGRAMACIÓN EN MEMORIA REAL",
        content: [
          { type: 'paragraph', text: 'La mayoría de los SO permiten que haya varios procesos simultáneamente en memoria. La memoria se divide en partes para asignarlas a los procesos. La asignación puede ser <strong>contigua</strong> (todo el proceso junto) o <strong>no contigua</strong> (el proceso se divide en partes).'},
          { type: 'subheading', text: '2.2.1. Particiones Fijas (Estáticas)'},
          { type: 'paragraph', text: 'El espacio de memoria se divide en particiones de tamaño fijo. Cada partición contiene un proceso. El principal inconveniente es la <strong>fragmentación interna</strong>: el espacio que se malgasta dentro de una partición si el proceso es más pequeño que ella.'},
          { type: 'subheading', text: '2.2.2. Particiones Variables (Dinámicas)'},
          { type: 'paragraph', text: 'Las particiones se crean dinámicamente con el tamaño exacto del proceso, evitando la fragmentación interna. Sin embargo, al terminar los procesos, se generan huecos de memoria libre dispersos. Este fenómeno se conoce como <strong>fragmentación externa</strong>, y se puede resolver mediante <strong>compactación</strong>.'},
          { type: 'subheading', text: '2.2.3. Paginación'},
          { type: 'paragraph', text: 'Es una técnica de asignación no contigua. La memoria principal se divide en zonas iguales llamadas <strong>marcos de página</strong>, y el proceso se divide en partes del mismo tamaño, llamadas <strong>páginas</strong>. Una <strong>tabla de páginas</strong> relaciona cada página del proceso con el marco de memoria donde está almacenada.'},
          { type: 'subheading', text: '2.2.4. Segmentación'},
          { type: 'paragraph', text: 'Técnica que divide los procesos en segmentos de tamaño variable, según un criterio lógico (código, datos, pila). Cada segmento se carga en una partición dinámica. Presenta el inconveniente de que todos los segmentos deben estar en memoria para que el proceso se ejecute.'}
        ]
      },
      {
        id: "t17_s2_3", shortTitle: "2.3. Multiprogramación (Virtual)", title: "2.3. MULTIPROGRAMACIÓN CON MEMORIA VIRTUAL",
        content: [
          { type: 'paragraph', text: 'La <strong>memoria virtual</strong> permite ejecutar procesos que no están cargados completamente en memoria. Cuando el proceso necesita una parte que no está en la memoria principal (fallo de página o segmento), el gestor de memoria la trae desde el disco.' },
          { type: 'paragraph', text: 'Las principales técnicas son:'},
          { type: 'list', items: [
              '<strong>Memoria Virtual Paginada:</strong> Sigue el funcionamiento de la paginación simple, pero no es necesario cargar todas las páginas de un proceso para que se ejecute.',
              '<strong>Memoria Virtual Segmentada:</strong> Similar a la segmentación simple, pero no es necesario cargar todos los segmentos.',
              '<strong>Memoria Virtual Segmentada Paginada:</strong> Combina lo mejor de ambos esquemas.'
          ]}
        ]
      },
      {
          id: "t17_s3", shortTitle: "3. Estrategias de Gestión", title: "3. ESTRATEGÍAS DE GESTIÓN DE MEMORIA",
          content: [
              { type: 'paragraph', text: 'Las estrategias o políticas para la gestión de la memoria pueden clasificarse en:'},
              { type: 'list', items: ['Políticas de sustitución', 'Políticas de carga', 'Políticas de ubicación']}
          ]
      },
      {
          id: "t17_s3_1", shortTitle: "3.1. Sustitución", title: "3.1. POLÍTICAS DE SUSTITUCIÓN",
          content: [
              { type: 'paragraph', text: 'Determinan qué bloque o página hay que sacar de la memoria principal cuando se necesita espacio. Las más habituales son:' },
              { type: 'definitionList', items: [
                  { term: 'FIFO (First-In, First-Out):', definition: 'Sustituye el bloque que entró primero.'},
                  { term: 'LRU (Least Recently Used):', definition: 'Sustituye el bloque que se usó hace más tiempo.'},
                  { term: 'NRU (Not Recently Used):', definition: 'Escoge un bloque que no haya sido usado recientemente (aproximación a LRU).'},
                  { term: 'LFU (Least Frequently Used):', definition: 'Sustituye el bloque que se ha usado menos veces.'}
              ]}
          ]
      },
      {
          id: "t17_s3_2", shortTitle: "3.2. Carga", title: "3.2. POLÍTICAS DE CARGA",
          content: [
              { type: 'paragraph', text: 'Determinan cuándo hay que cargar la información en la memoria principal.' },
              { type: 'list', items: [
                  '<strong>De demanda:</strong> Se carga un bloque solo cuando hay un fallo de página, es decir, cuando se necesita.',
                  '<strong>Anticipatorias:</strong> Se cargan los bloques por adelantado, basándose en predicciones sobre el comportamiento futuro del programa (principio de localidad).'
              ]}
          ]
      },
      {
          id: "t17_s3_3", shortTitle: "3.3. Ubicación", title: "3.3. POLÍTICAS DE UBICACIÓN",
          content: [
              { type: 'paragraph', text: 'Determinan en qué lugar de la memoria principal hay que colocar la información entrante (aplicable a particiones variables). Las más habituales son:' },
              { type: 'list', items: [
                  '<strong>Primer ajuste:</strong> Asigna el primer hueco que sea suficientemente grande.',
                  '<strong>Mejor ajuste:</strong> Asigna el hueco más pequeño que sea suficientemente grande (minimiza la fragmentación interna del hueco).',
                  '<strong>Peor ajuste:</strong> Asigna el hueco más grande (deja el hueco restante más grande posible).',
                  '<strong>Siguiente ajuste:</strong> Como el primer ajuste, pero empieza a buscar desde donde se quedó la última vez.'
              ]}
          ]
      },
      {
        id: "t17_s4",
        shortTitle: "4. Aplicación",
        title: "4. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La aplicación de los conocimientos sobre la gestión de la memoria en sistemas operativos es fundamental tanto en el contexto escolar como en el laboral. Es un componente clave de los sistemas operativos, crucial para el funcionamiento eficiente de dispositivos informáticos y sistemas empresariales.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'list', items: [
              '<strong>Formación Profesional:</strong> Se profundiza en el funcionamiento de sistemas operativos como Linux y Windows, incluyendo temas de administración de memoria, políticas de carga, sustitución y ubicación en memoria, etc.'
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Administración de sistemas:</strong> El conocimiento sobre la gestión de memoria es esencial para administrar servidores basados en Windows Server o Linux, optimizando el rendimiento y manteniendo la estabilidad.',
              '<strong>Seguridad informática:</strong> La gestión de memoria incluye la configuración de permisos y la supervisión del uso de la memoria por parte de los procesos para prevenir accesos no autorizados. Es clave para aislar y proteger áreas de memoria críticas.',
              '<strong>Desarrollo de software:</strong> Comprender cómo los SO gestionan la memoria permite a los desarrolladores crear aplicaciones optimizadas, manejando la fragmentación y minimizando el uso de memoria para mejorar el rendimiento.'
          ]}
        ]
      },
      {
        id: "t17_s5",
        shortTitle: "5. Conclusión",
        title: "5. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En este tema se ha presentado una visión global de la gestión de memoria en los sistemas operativos. La gestión de la memoria implica tratar la memoria principal como un recurso clave que debe ser asignado y compartido entre varios procesos activos. Para que un proceso se pueda ejecutar, debe estar cargado en memoria principal, convirtiendo a esta en un recurso fundamental que gestiona el sistema operativo.' },
          { type: 'paragraph', text: 'La correcta gestión de la memoria en un sistema es vital para mantener el rendimiento y la estabilidad. Vulnerabilidades como <strong>Meltdown y Spectre</strong> demostraron la importancia de una gestión segura, obligando a implementar mitigaciones como <strong>KPTI (Kernel Page Table Isolation)</strong>, aunque a costa de una cierta reducción en el rendimiento.' }
        ]
      },
      {
        id: "t17_s6",
        shortTitle: "6. Bibliografía",
        title: "6. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Tanenbaum, A. (2023). <em>Modern Operating Systems</em>. Editorial Pearson.' },
              { text: 'Stallings, W. (2017). <em>Operating Systems: Internals and Design Principles</em>. Editorial Pearson.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'Feria, J. (2021). <em>Administración de sistemas operativos</em>. Editorial Síntesis.' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' }
          ]}
        ]
      }
    ]
  };