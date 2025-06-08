export const theme19Data = {
    id: "theme19",
    name: "TEMA 19: Gestión de Archivos y Dispositivos",
    title: "TEMA 19. INFORMÁTICA / S.A.I. - SISTEMAS OPERATIVOS: GESTIÓN DE ARCHIVOS Y DISPOSITIVOS",
    version: "Versión: Julio 2024 (Actualizado)",
    sections: [
      {
        id: "t19_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Continuando en el bloque de "Sistemas Operativos", este tema se adentra en la gestión de <strong>archivos y dispositivos de almacenamiento</strong>, una de las responsabilidades más visibles y críticas de cualquier SO.' },
          { type: 'paragraph', text: 'Los ordenadores modernos son sistemas complejos. Para que los programadores no tengan que lidiar con el funcionamiento a bajo nivel de discos, interfaces de red y otros periféricos, el sistema operativo proporciona una capa de <strong>abstracción</strong>. Este tema se dedica a estudiar dos de las abstracciones más importantes: los <strong>archivos</strong> y los <strong>directorios</strong>.' }
        ]
      },
      {
        id: "t19_s2",
        shortTitle: "2. Archivos y Directorios",
        title: "2. ARCHIVOS Y DIRECTORIOS",
        content: [
          { type: 'subheading', text: 'a) Archivos'},
          { type: 'paragraph', text: 'Un archivo es un mecanismo de abstracción que proporciona una manera de almacenar información en un dispositivo de almacenamiento persistente (como un disco) y leerla más tarde. Oculta al usuario los detalles de cómo y dónde se almacena físicamente la información. Cada archivo incluye:'},
          { type: 'list', items: ['<strong>Atributos o metadatos:</strong> Nombre, fechas, permisos, propietario, ubicación, etc.', '<strong>Datos:</strong> La información que se almacena.']},
          { type: 'subheading', text: 'b) Directorios'},
          { type: 'paragraph', text: 'Un directorio (o carpeta) permite al usuario organizar sus archivos. Técnicamente, un directorio es un archivo especial que contiene una tabla con información sobre los archivos y subdirectorios que alberga. Tienen una estructura <strong>arbórea</strong>.'},
          { type: 'flowDiagram', title: 'Estructura Arbórea de Directorios (Ejemplo Linux)',
            initialNodes: [
              { id: 'root', position: { x: 350, y: 0 }, data: { label: '/' }, type: 'input' },
              { id: 'so', position: { x: 0, y: 100 }, data: { label: 'so' } },
              { id: 'dev', position: { x: 150, y: 100 }, data: { label: 'dev' } },
              { id: 'bin', position: { x: 300, y: 100 }, data: { label: 'bin' } },
              { id: 'home', position: { x: 550, y: 100 }, data: { label: 'home' } },
              { id: 'pepe', position: { x: 475, y: 200 }, data: { label: 'Pepe' } },
              { id: 'juan', position: { x: 625, y: 200 }, data: { label: 'Juan' } },
              { id: 'fotos', position: { x: 475, y: 300 }, data: { label: 'fotos' } },
              { id: 'f0', position: { x: 400, y: 400 }, data: { label: 'F-0' }, type: 'output' },
              { id: 'f1', position: { x: 550, y: 400 }, data: { label: 'F-1' }, type: 'output' },
            ],
            initialEdges: [
              {id:'e1', source: 'root', target:'so'}, {id:'e2', source: 'root', target:'dev'}, {id:'e3', source: 'root', target:'bin'},
              {id:'e4', source: 'root', target:'home'}, {id:'e5', source: 'home', target:'pepe'}, {id:'e6', source: 'home', target:'juan'},
              {id:'e7', source: 'pepe', target:'fotos'}, {id:'e8', source: 'fotos', target:'f0'}, {id:'e9', source: 'fotos', target:'f1'}
            ]
          },
          { type: 'paragraph', text: 'Para especificar un archivo se usan dos tipos de rutas:'},
          { type: 'list', items: ['<strong>Rutas absolutas:</strong> La ruta completa desde el directorio raíz. Ejemplo: <code>/home/Pepe/fotos/F-0</code>', '<strong>Rutas relativas:</strong> Parten desde el directorio actual. Ejemplo: <code>fotos/F-0</code>']}
        ]
      },
      {
        id: "t19_s3",
        shortTitle: "3. Gestión de Archivos",
        title: "3. GESTIÓN DE ARCHIVOS Y DISPOSITIVOS",
        content: [
          { type: 'paragraph', text: 'El conjunto de módulos del SO que se encargan de la gestión de archivos y directorios se denomina <strong>sistema de archivos</strong> (<em>filesystem</em>). Su objetivo es organizar el almacenamiento de forma que el acceso sea eficiente y fiable.' },
          { type: 'paragraph', text: 'Existen diferentes sistemas de archivos en disco, como <code>FAT32</code>, <code>NTFS</code> (Windows), <code>HFS+</code>, <code>APFS</code> (Apple), <code>ext4</code>, <code>Btrfs</code>, <code>ZFS</code> (Linux).' }
        ]
      },
      {
          id: "t19_s3_1", shortTitle: "3.1. Asignación de Espacio", title: "3.1. ASIGNACIÓN DE ESPACIO EN DISCO",
          content: [
              { type: 'paragraph', text: 'Los clústeres de un archivo pueden almacenarse de diversas formas en el disco. Los métodos más comunes son:'},
              { type: 'definitionList', items: [
                  { term: 'A) Lista de enlaces (Asignación Enlazada):', definition: 'Cada bloque del archivo contiene un puntero al siguiente bloque. El directorio solo necesita almacenar la dirección del primer bloque. Es simple y no sufre de fragmentación externa, pero el acceso directo es muy lento. El sistema <strong>FAT (File Allocation Table)</strong> es una variante optimizada de este método.'},
                  { term: 'B) I-nodos (Asignación Indexada):', definition: 'Para cada archivo existe un <strong>i-nodo</strong>, una pequeña tabla que contiene los atributos del archivo y las direcciones de sus bloques de datos (o punteros a más bloques de direcciones). Es el mecanismo usado en sistemas <strong>UNIX/Linux</strong>.'},
                  { term: 'C) Árboles B+:', definition: 'Estructura de árbol optimizada para organizar índices en bases de datos y sistemas de archivos modernos, permitiendo búsquedas muy eficientes.'}
              ]}
          ]
      },
      {
          id: "t19_s3_2", shortTitle: "3.2. Espacio Libre", title: "3.2. GESTIÓN DEL ESPACIO LIBRE",
          content: [
              { type: 'paragraph', text: 'El SO debe llevar un control de los bloques libres en el disco. Los dos métodos principales son:'},
              { type: 'list', items: [
                  '<strong>Mapa de bits:</strong> Se usa un bit por cada bloque del disco. Si el bit es <code>1</code>, el bloque está libre; si es <code>0</code>, está ocupado. Es muy eficiente para encontrar bloques libres contiguos.',
                  '<strong>Lista enlazada de bloques libres:</strong> Se enlazan todos los bloques libres en una lista, usando un puntero en cada bloque para apuntar al siguiente libre. Es eficiente si el disco está casi lleno.'
              ]}
          ]
      },
      {
          id: "t19_s3_3", shortTitle: "3.3. Operaciones", title: "3.3. OPERACIONES SOPORTADAS POR UN SISTEMA DE ARCHIVOS",
          content: [
              { type: 'paragraph', text: 'Los sistemas de archivos proporcionan una serie de llamadas al sistema para manipular archivos:'},
              { type: 'list', items: ['<code>Crear</code>', '<code>Borrar</code>', '<code>Abrir</code>', '<code>Cerrar</code>', '<code>Leer</code>', '<code>Escribir</code>', '<code>Renombrar</code>']}
          ]
      },
      {
          id: "t19_s3_4", shortTitle: "3.4. Métodos de Acceso", title: "3.4. MÉTODOS DE ACCESO EN LOS SISTEMAS DE ARCHIVOS",
          content: [
              { type: 'paragraph', text: 'Los métodos de acceso se refieren a cómo el SO permite acceder a los datos dentro de un archivo:'},
              { type: 'list', items: [
                  '<strong>Acceso secuencial:</strong> El método más simple. Consiste en leer el archivo registro a registro desde el principio. Es el único método posible en soportes como las cintas magnéticas.',
                  '<strong>Acceso directo (o aleatorio):</strong> Permite acceder a cualquier registro o bloque del archivo directamente, sin pasar por los anteriores. Es el método común en discos duros y SSD.',
                  '<strong>Acceso directo indexado:</strong> Se utiliza un índice para buscar rápidamente la posición de un registro a partir de su clave. Es la base de las bases de datos.'
              ]}
          ]
      },
      {
        id: "t19_s4",
        shortTitle: "4. Planificación de Discos",
        title: "4. ALGORITMOS DE PLANIFICACIÓN DE DISCOS",
        content: [
            { type: 'paragraph', text: 'Estos algoritmos optimizan el movimiento del cabezal de lectura/escritura en los <strong>discos duros (HDD)</strong> para mejorar el tiempo de acceso. No son aplicables a los SSD, que no tienen partes móviles.'},
            { type: 'paragraph', text: 'Dado un conjunto de peticiones, los principales algoritmos son:'},
            { type: 'list', items: [
                '<strong>FCFS (First Come, First Served):</strong> Atiende las peticiones en el orden en que llegan. Simple pero ineficiente, con mucho movimiento de cabezal.',
                '<strong>SSTF (Shortest Seek Time First):</strong> Atiende primero la petición que requiera el menor movimiento de cabezal desde su posición actual. Puede causar inanición en peticiones lejanas.',
                '<strong>SCAN (Algoritmo del ascensor):</strong> El cabezal se mueve de un extremo a otro del disco, atendiendo las peticiones que encuentra en su camino. Al llegar al final, invierte la dirección.',
                '<strong>C-SCAN (Circular SCAN):</strong> Similar a SCAN, pero al llegar a un extremo, vuelve rápidamente al inicio sin atender peticiones en el camino de vuelta, proporcionando un tiempo de espera más uniforme.',
                '<strong>LOOK y C-LOOK:</strong> Variantes de SCAN y C-SCAN que no viajan hasta los extremos del disco, sino solo hasta la última petición pendiente en cada dirección.'
            ]}
        ]
      },
      {
        id: "t19_s5",
        shortTitle: "5. SSD",
        title: "5. SSD",
        content: [
          { type: 'paragraph', text: 'Hoy en día, el uso de <strong>unidades de estado sólido (SSD)</strong> está muy extendido. En los SSD, los problemas de tiempos de búsqueda y retrasos rotacionales de los HDD no existen, por lo que el tiempo de acceso (latencia) es mucho menor.'},
          { type: 'paragraph', text: 'A diferencia de los discos magnéticos, los SSD tienen un rendimiento de lectura y escritura <strong>asimétrico</strong>: las lecturas son considerablemente más rápidas que las escrituras, y las operaciones de borrado son aún más lentas y complejas, requiriendo que el controlador del SSD realice tareas de "recolección de basura" (<em>garbage collection</em>).'}
        ]
      },
      {
        id: "t19_s6",
        shortTitle: "6. Aplicación",
        title: "6. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'El conocimiento sobre la gestión de archivos y dispositivos es fundamental en la informática moderna.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'list', items: [
              '<strong>Formación Profesional (DAM/DAW):</strong> En el módulo de Bases de Datos, se estudian las ventajas y limitaciones de diferentes organizaciones de ficheros (secuenciales, directos, indexados) como fundamento para entender los sistemas de bases de datos.'
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Administración de Sistemas:</strong> Configuración y mantenimiento de sistemas de archivos, particionado de discos, gestión de permisos y backups.',
              '<strong>Desarrollo de Software:</strong> Es crucial para cualquier aplicación que necesite leer o escribir datos de forma persistente, desde un simple fichero de configuración hasta una base de datos compleja.',
              '<strong>Ciencia de Datos y Big Data:</strong> La organización eficiente de los ficheros (ej. formatos como Parquet o Avro) es fundamental para la gestión y análisis de grandes conjuntos de datos.'
          ]}
        ]
      },
      {
        id: "t19_s7",
        shortTitle: "7. Conclusión",
        title: "7. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En este tema hemos analizado cómo el sistema operativo introduce los conceptos de <strong>archivo y directorio</strong> como un método sencillo y eficiente para gestionar la información persistente. Hemos visto cómo el sistema de gestión de archivos trata de hacer transparente al usuario las peculiaridades de cada dispositivo y gestionar la ubicación física de los datos en los soportes de almacenamiento, siendo un pilar fundamental de cualquier sistema operativo moderno.' }
        ]
      },
      {
        id: "t19_s8",
        shortTitle: "8. Bibliografía",
        title: "8. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Tanenbaum, A. (2023). <em>Modern Operating Systems</em>. Editorial Pearson.' },
              { text: 'Stallings, W. (2017). <em>Operating Systems: Internals and Design Principles</em>. Editorial Pearson.' },
              { text: 'Silberschatz, A. (2018). <em>Operating Systems Concepts</em>. Editorial Wiley.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' }
          ]}
        ]
      }
    ]
  };