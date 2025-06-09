// CÓDIGO CORREGIDO CON LA INTRODUCCIÓN FIEL Y ESTANDARIZADA
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme19Data = {
  id: "theme19",
  name: "TEMA 19: Gestión de Archivos y Dispositivos",
  title: "TEMA 19. SISTEMAS OPERATIVOS: GESTIÓN DE ARCHIVOS Y DISPOSITIVOS",
  version: "Julio 2024",
  sections: [
    {
      id: "t19_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        // --- INTRODUCCIÓN CORREGIDA SIGUIENDO EL ESTÁNDAR ---
        { type: 'paragraph', text: 'El presente tema forma parte del temario oficial (BOE 13/02/1996) y se ubica dentro del bloque temático de "Sistemas Operativos", a continuación del tema de gestión de entradas/salidas. A través de autores como Tanenbaum y Stallings, se estudiará la importancia del SO en la gestión de archivos y dispositivos.' },
        { type: 'paragraph', text: 'Hoy en día, los ordenadores son sistemas complejos. Para que los programadores no tengan que lidiar con el funcionamiento a bajo nivel del hardware, el SO proporciona una capa de software que actúa de intermediario. Este tema está dedicado a estudiar la importancia del SO como responsable de la gestión de archivos (espacio libre, asignación) y la gestión de dispositivos de almacenamiento (sistemas de archivos, planificación de acceso, etc.).'},
        { type: 'paragraph', text: 'Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio de la gestión de las entradas/salidas en los sistemas operativos está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulos: <code>Sistemas operativos monopuesto</code> y <code>Sistemas operativos en red</code>' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulos: <code>Implantación de sistemas operativos</code> y <code>Administración de sistemas operativos</code>' }
        ]}
      ]
    },
    // --- EL RESTO DE SECCIONES PERMANECEN IGUAL QUE EN LA VERSIÓN ANTERIOR ---
    {
      id: "t19_s2",
      shortTitle: "2. Archivos y Directorios",
      title: "2. ARCHIVOS Y DIRECTORIOS",
      icon: "file",
      content: [
        { type: 'paragraph', text: 'Un <strong>archivo</strong> es un mecanismo de abstracción para almacenar información en un dispositivo persistente. Un <strong>directorio</strong> (o carpeta) es un archivo especial que organiza otros archivos y directorios en una estructura <strong>arbórea</strong>.' },
        { type: 'paragraph', text: 'Para especificar un archivo se usan <strong>rutas absolutas</strong> (desde la raíz) o <strong>rutas relativas</strong> (desde el directorio actual).' }
      ]
    },
    {
      id: "t19_s3",
      shortTitle: "3. Gestión de Archivos",
      title: "3. GESTIÓN DE ARCHIVOS Y DISPOSITIVOS",
      icon: "management"
    },
    {
        id: "t19_s3_1", shortTitle: "3.1. Asignación de Espacio", title: "3.1. ASIGNACIÓN DE ESPACIO EN DISCO",
        content: [
            { type: 'paragraph', text: 'El sistema de archivos (<em>filesystem</em>) organiza el almacenamiento de los bloques de un archivo en el disco. Los métodos más comunes son:'},
            { type: 'keyConcept', title: 'Métodos de Asignación de Espacio', items: [
                '<strong>Asignación Contigua:</strong> Almacena el archivo en bloques consecutivos. Es muy rápido para acceso secuencial, pero sufre de fragmentación externa y es poco flexible.',
                '<strong>Asignación Enlazada (Lista de enlaces):</strong> Cada bloque contiene un puntero al siguiente. Elimina la fragmentación externa, pero el acceso directo es muy lento. El sistema <strong>FAT (File Allocation Table)</strong> es una variante que optimiza esto moviendo los punteros a una tabla en memoria.',
                '<strong>Asignación Indexada (I-nodos):</strong> Para cada archivo existe un <strong>i-nodo</strong>, una estructura de datos que contiene los metadatos y una tabla de punteros a los bloques de datos del archivo. Es muy flexible y eficiente. Es el mecanismo usado en sistemas <strong>UNIX/Linux (ext4, etc.)</strong>.'
            ]}
        ]
    },
    {
        id: "t19_s3_2", shortTitle: "3.2. Espacio Libre", title: "3.2. GESTIÓN DEL ESPACIO LIBRE",
        content: [
            { type: 'paragraph', text: 'El SO debe llevar un control de los bloques libres en el disco. Los dos métodos principales son usar un <strong>mapa de bits</strong> (un bit por cada bloque del disco) o una <strong>lista enlazada</strong> de todos los bloques libres.'}
        ]
    },
    {
        id: "t19_s3_3", shortTitle: "3.3. Operaciones", title: "3.3. OPERACIONES SOPORTADAS POR UN SISTEMA DE ARCHIVOS",
        content: [
            { type: 'paragraph', text: 'El SO proporciona llamadas al sistema para manipular archivos: <code>Crear</code>, <code>Borrar</code>, <code>Abrir</code>, <code>Cerrar</code>, <code>Leer</code>, <code>Escribir</code>, <code>Renombrar</code>.'}
        ]
    },
    {
        id: "t19_s3_4", shortTitle: "3.4. Métodos de Acceso", title: "3.4. MÉTODOS DE ACCESO EN LOS SISTEMAS DE ARCHIVOS",
        content: [
            { type: 'definitionList', items: [
                { term: 'Acceso secuencial:', definition: 'Se leen los registros en orden, uno tras otro. Es el método más simple.'},
                { term: 'Acceso directo (o aleatorio):', definition: 'Permite leer o escribir cualquier registro del archivo directamente, sin pasar por los anteriores.'},
                { term: 'Acceso indexado:', definition: 'Se utiliza un índice para buscar rápidamente la posición de un registro a partir de su clave. Es la base de las bases de datos.'}
            ]}
        ]
    },
    {
      id: "t19_s4",
      shortTitle: "4. Planificación de Discos",
      title: "4. ALGORITMOS DE PLANIFICACIÓN DE DISCOS",
      icon: "disk_scheduling",
      content: [
          { type: 'paragraph', text: 'Estos algoritmos optimizan el movimiento del cabezal en los <strong>HDD</strong> para mejorar el tiempo de acceso. No son aplicables a los SSD.'},
          { type: 'practicalExample', title: 'Ejemplo de Planificación', text: 'Dada una cola de peticiones a los cilindros <code>98, 183, 37, 122, 14, 124, 65, 67</code>, y un cabezal inicial en la posición <code>53</code> moviéndose hacia el cilindro <code>0</code>:'},
          { type: 'table', headers: ['Algoritmo', 'Orden de Servicio', 'Total de Cilindros Recorridos'], rows: [
              ['FCFS', '53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67', '640'],
              ['SSTF', '53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183', '236'],
              ['SCAN', '53 → 37 → 14 → 0 → 65 → 67 → 98 → 122 → 124 → 183', '236'],
              ['C-SCAN', '53 → 37 → 14 → 0 → 199 → 183 → 124 → 122 → 98 → 67 → 65', '382'],
              ['LOOK', '53 → 37 → 14 → 65 → 67 → 98 → 122 → 124 → 183', '208']
          ]}
      ]
    },
    {
      id: "t19_s5",
      shortTitle: "5. SSD",
      title: "5. SSD",
      icon: "ssd",
      content: [
        { type: 'paragraph', text: 'En las <strong>unidades de estado sólido (SSD)</strong>, los problemas de tiempos de búsqueda y retrasos rotacionales no existen. El tiempo de acceso (latencia) es constante y mucho menor. Sin embargo, su rendimiento de lectura y escritura es <strong>asimétrico</strong>: las lecturas son más rápidas que las escrituras, y las operaciones de borrado son aún más lentas y complejas, requiriendo "recolección de basura" (<em>garbage collection</em>) por parte del controlador.'}
      ]
    },
    { id: "t19_s6", shortTitle: "6. Aplicación", title: "6. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [{ type: 'paragraph', text: 'La gestión de archivos es fundamental. En FP (DAM/DAW), se estudia en el módulo de Bases de Datos. En lo laboral, es clave para la administración de sistemas (particionado, permisos, backups), el desarrollo de software y la ciencia de datos.' }]},
    { id: "t19_s7", shortTitle: "7. Conclusión", title: "7. CONCLUSIÓN", icon: "conclusion", content: [{ type: 'paragraph', text: 'En este tema hemos analizado cómo el SO introduce las abstracciones de <strong>archivo y directorio</strong> para gestionar la información persistente de forma eficiente y fiable, ocultando la complejidad del hardware al usuario y a las aplicaciones.' }]},
    { id: "t19_s8", shortTitle: "8. Bibliografía", title: "8. BIBLIOGRAFÍA", icon: "bibliography", content: [{ type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2023). <em>Modern Operating Systems</em>. Pearson.' }, { text: 'Stallings, W. (2017). <em>Operating Systems: Internals and Design Principles</em>. Pearson.' }, { text: 'Silberschatz, A. (2018). <em>Operating Systems Concepts</em>. Wiley.' } ] }] }
  ],
  glossary: [
    { term: 'Sistema de Archivos (Filesystem)', definition: 'Conjunto de módulos del SO que se encargan de la gestión de archivos y directorios.' },
    { term: 'Asignación Contigua', definition: 'Método de almacenamiento donde los bloques de un archivo ocupan un espacio consecutivo en el disco.' },
    { term: 'Asignación Enlazada', definition: 'Método donde cada bloque de un archivo contiene un puntero al siguiente bloque.' },
    { term: 'Asignación Indexada (i-nodos)', definition: 'Método que utiliza una tabla (i-nodo) para cada archivo, la cual contiene punteros a los bloques de datos del archivo.' },
    { term: 'FAT (File Allocation Table)', definition: 'Sistema de archivos que utiliza una tabla en memoria para optimizar la asignación enlazada.' },
    { term: 'i-nodo', definition: 'Estructura de datos en sistemas UNIX/Linux que almacena los metadatos y las direcciones de los bloques de un archivo.' },
    { term: 'Algoritmo de Planificación de Disco', definition: 'Algoritmo que optimiza el orden de las peticiones de E/S en un HDD para minimizar el movimiento del cabezal.' }
  ]
};