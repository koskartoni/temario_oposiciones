// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 16
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme16Data = {
  id: "theme16",
  name: "TEMA 16: Gestión de Procesos",
  title: "TEMA 16. SISTEMAS OPERATIVOS: GESTIÓN DE PROCESOS.",
  version: "Octubre 2024",
  sections: [
    {
      id: "t16_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Continuando en el bloque de "Sistemas Operativos", este tema se adentra en una de sus tareas cruciales: la <strong>gestión de procesos</strong>. Esta función asegura que múltiples tareas puedan ejecutarse simultáneamente sin conflictos, abarcando la creación, planificación, sincronización y comunicación entre procesos.' },
        { type: 'paragraph', text: 'El estudio de la gestión de procesos está presente en el currículo de la familia profesional de Informática y Comunicaciones, concretamente en los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulos: <code>Sistemas operativos monopuesto</code> y <code>Sistemas operativos en red</code>' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulos: <code>Implantación de sistemas operativos</code> y <code>Administración de sistemas operativos</code>' }
        ]}
      ]
    },
    {
      id: "t16_s2",
      shortTitle: "2. Procesos",
      title: "2. PROCESOS",
      icon: "process",
      content: [
        { type: 'paragraph', text: 'Un <strong>proceso</strong> es un programa en ejecución. Cada proceso necesita recursos (CPU, memoria) que el SO gestiona. La información de cada proceso se almacena en una estructura de datos clave: el <strong>PCB (Process Control Block)</strong>, que contiene el Identificador (PID), Estado, Prioridad, Contador de Programa (PC), etc.' },
        { type: 'keyConcept', title: 'Tipos de Procesos', items: ['<strong>Independientes:</strong> No se comunican con otros procesos.', '<strong>Cooperativos:</strong> Se comunican y sincronizan entre sí.', '<strong>Competitivos:</strong> Compiten por los mismos recursos.'] }
      ]
    },
    {
      id: "t16_s2_1", shortTitle: "2.1. Estados de un Proceso", title: "2.1. ESTADOS DE UN PROCESO",
      content: [
        { type: 'paragraph', text: 'Un proceso pasa por varios estados a lo largo de su ciclo de vida:' },
        { type: 'flowDiagram', title: 'Diagrama de 5 Estados de un Proceso',
          initialNodes: [
            { id: 'nuevo', position: { x: 0, y: 150 }, data: { label: 'Nuevo' } },
            { id: 'listo', position: { x: 200, y: 150 }, data: { label: 'Listo' } },
            { id: 'ejecucion', position: { x: 450, y: 150 }, data: { label: 'En Ejecución' }, className: 'node-bus-control' },
            { id: 'bloqueado', position: { x: 450, y: 300 }, data: { label: 'Bloqueado' } },
            { id: 'terminado', position: { x: 700, y: 150 }, data: { label: 'Terminado' }, className: 'node-bus-data' }
          ],
          initialEdges: [
            { id: 'e1', source: 'nuevo', target: 'listo', label: 'Admitido' },
            { id: 'e2', source: 'listo', target: 'ejecucion', label: 'Planificador' },
            { id: 'e3', source: 'ejecucion', target: 'terminado', label: 'Fin' },
            { id: 'e4', source: 'ejecucion', target: 'listo', label: 'Fin de quantum', type: 'step', animated: true },
            { id: 'e5', source: 'ejecucion', target: 'bloqueado', label: 'Espera E/S' },
            { id: 'e6', source: 'bloqueado', target: 'listo', label: 'Fin de E/S' }
          ]
        }
      ]
    },
    {
      id: "t16_s2_2", shortTitle: "2.2. Hilos (Threads)", title: "2.2. HILOS",
      content: [
          { type: 'keyConcept', title: 'Proceso vs. Hilo', text: 'Un <strong>proceso</strong> es un programa en ejecución con su propio espacio de memoria. Un <strong>hilo (thread)</strong> es una secuencia de ejecución dentro de un proceso. Varios hilos de un mismo proceso comparten el mismo espacio de memoria, lo que hace que el cambio de contexto entre ellos sea mucho más rápido y eficiente. Todos los SO modernos son <strong>multihilo</strong>.'}
      ]
    },
    {
      id: "t16_s3",
      shortTitle: "3. Gestión de Procesos",
      title: "3. GESTIÓN DE PROCESOS",
      icon: "management"
    },
    {
      id: "t16_s3_1", shortTitle: "3.1. Comunicación (IPC)", title: "3.1. COMUNICACIÓN ENTRE PROCESOS",
      content: [
        { type: 'paragraph', text: 'Los mecanismos de <strong>IPC (Inter-Process Communication)</strong> permiten que los procesos intercambien información. Los dos grupos principales son:' },
        { type: 'list', items: ['<strong>Memoria Compartida:</strong> Los procesos comparten una región de memoria. Muy rápido, pero requiere sincronización manual.', '<strong>Paso de Mensajes:</strong> El SO proporciona canales para enviar y recibir mensajes. Incluye mecanismos como <strong>Sockets</strong> (red), <strong>Pipes</strong> (tuberías) y <strong>RPC</strong> (Llamadas a Procedimiento Remoto).']}
      ]
    },
    {
        id: "t16_s3_2", shortTitle: "3.2. Sincronización", title: "3.2. SINCRONIZACIÓN DE PROCESOS",
        content: [
            { type: 'keyConcept', title: 'Concurrencia y Exclusión Mutua', text: 'La <strong>concurrencia</strong> ocurre cuando varios procesos se ejecutan "a la vez", compitiendo por recursos. Una <strong>condición de carrera</strong> se da cuando el resultado de una operación depende del orden incontrolado en que los procesos acceden a un recurso compartido. Para evitarlo, se usa la <strong>exclusión mutua</strong>, asegurando que solo un proceso a la vez pueda entrar en su <strong>sección crítica</strong> (el código que accede al recurso).'},
            { type: 'subheading', text: 'Mecanismos de Sincronización'},
            { type: 'list', items: [
                '<strong>Semáforos:</strong> Inventados por Dijkstra, usan una variable entera y operaciones atómicas <code>wait()</code> y <code>signal()</code> para controlar el acceso.',
                '<strong>Monitores:</strong> Estructuras de alto nivel que encapsulan los datos y procedimientos, garantizando la exclusión mutua de forma automática.',
                '<strong>Otras soluciones:</strong> Inhabilitación de interrupciones, instrucciones hardware atómicas (TSL), y algoritmos software como el de Peterson.'
            ]},
            { type: 'paragraph', text: 'La sincronización incorrecta puede llevar a <strong>inanición</strong> (un proceso nunca obtiene el recurso) o <strong>interbloqueos (deadlocks)</strong>.'}
        ]
    },
    {
      id: "t16_s3_3", shortTitle: "3.3. Planificación", title: "3.3. PLANIFICACIÓN DE PROCESOS",
      content: [
        { type: 'paragraph', text: 'El <strong>planificador (scheduler)</strong> del SO usa un algoritmo para decidir qué proceso de la cola de "listos" se ejecutará a continuación.'},
        { type: 'keyConcept', title: 'Algoritmos Apropiativos vs. No Apropiativos', items: [
          '<strong>No Apropiativos:</strong> Un proceso se ejecuta hasta que termina o se bloquea voluntariamente (ej. FCFS, SJF).',
          '<strong>Apropiativos:</strong> El SO puede "quitarle" la CPU a un proceso (ej. al acabarse su quantum). Son esenciales para sistemas interactivos (ej. Round Robin, SRTN).'
        ]},
        { type: 'subheading', text: 'Algoritmos Principales'},
        { type: 'list', items: [ '<strong>FCFS (First-Come, First-Served)</strong>', '<strong>SJF (Shortest Job First)</strong>', '<strong>SRTN (Shortest Remaining Time Next)</strong>', '<strong>Round Robin (Turno Rotatorio)</strong>', '<strong>Planificación por Prioridad</strong>' ]},
        { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
          { question: 'En un sistema de tiempo compartido donde muchos usuarios interactúan a la vez, ¿qué algoritmo de planificación es el más adecuado?', options: ['FCFS', 'SJF', 'Round Robin'], correctAnswerIndex: 2 },
          { question: 'Un algoritmo que siempre elige el proceso con el menor tiempo de ejecución total y no lo interrumpe es:', options: ['SJF (No Apropiativo)', 'SRTN (Apropiativo)', 'Round Robin'], correctAnswerIndex: 0 }
        ]}
      ]
    },
    {
      id: "t16_s4",
      shortTitle: "4. Gestión en Windows y Linux",
      title: "4. GESTIÓN DE PROCESOS EN WINDOWS Y EN LINUX",
      icon: "windows_linux",
      content: [
        { type: 'subheading', text: 'A) WINDOWS' },
        { type: 'paragraph', text: 'La herramienta gráfica es el <strong>Administrador de Tareas</strong>. Desde la línea de comandos, se usan:' },
        { type: 'list', items: [ '<strong>CMD:</strong> <code>tasklist</code> (listar), <code>taskkill</code> (finalizar).', '<strong>PowerShell:</strong> Ofrece un control más potente con cmdlets como <code>Get-Process</code> y <code>Stop-Process</code>.' ]},
        { type: 'subheading', text: 'B) LINUX' },
        { type: 'paragraph', text: 'Dispone de potentes herramientas de consola:' },
        { type: 'list', items: [ '<code>ps</code>: Muestra un listado de procesos.', '<code>top</code> / <code>htop</code>: Vista interactiva y en tiempo real.', '<code>kill</code>: Envía señales a los procesos para finalizarlos.', '<code>pstree</code>: Muestra un árbol de procesos.' ]}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: 't16_s5', title: "5. APLICACIÓN DE LOS CONTENIDOS", shortTitle: "5. Aplicación", icon: "application", content: [ { type: 'paragraph', text: 'La gestión de procesos es esencial. En FP se estudia en módulos de SO, administración de sistemas y redes. En el ámbito laboral, es clave para la administración de servidores, la seguridad informática y el desarrollo de software de alto rendimiento.' } ] },
    { id: 't16_s6', title: "6. CONCLUSIÓN", shortTitle: "6. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'Se ha presentado una visión global de la gestión de procesos en los SO, explorando estrategias y algoritmos para la planificación, sincronización y comunicación. La correcta gestión de procesos es vital para el rendimiento y la estabilidad del sistema, un campo en constante evolución como demostraron las mitigaciones para vulnerabilidades como Meltdown y Spectre.' } ] },
    { id: 't16_s7', title: "7. BIBLIOGRAFÍA", shortTitle: "7. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2023). <em>Modern Operating Systems</em>. Pearson.' }, { text: 'Stallings, W. (2017). <em>Operating Systems: Internals and Design Principles</em>. Pearson.' }, { text: 'Feria, J. (2021). <em>Administración de sistemas operativos</em>. Síntesis.' } ] } ] }
  ],
  glossary: [
      { term: 'Proceso', definition: 'Un programa en ejecución. Es la unidad de trabajo en un sistema operativo.' },
      { term: 'Hilo (Thread)', definition: 'La unidad básica de utilización de la CPU. Un proceso puede tener múltiples hilos que comparten su espacio de memoria.' },
      { term: 'PCB (Process Control Block)', definition: 'Estructura de datos donde el SO almacena toda la información sobre un proceso (PID, estado, prioridad, etc.).' },
      { term: 'Exclusión Mutua', definition: 'Principio que garantiza que solo un proceso puede acceder a un recurso compartido a la vez, evitando condiciones de carrera.' },
      { term: 'Sección Crítica', definition: 'La porción de código de un programa que accede a un recurso compartido y que debe ser protegida por exclusión mutua.' },
      { term: 'Semáforo', definition: 'Mecanismo de sincronización que utiliza una variable entera y operaciones atómicas para controlar el acceso a recursos.' },
      { term: 'Planificador (Scheduler)', definition: 'Componente del SO que decide qué proceso se ejecutará a continuación.' },
      { term: 'Algoritmo Apropiativo', definition: 'Algoritmo de planificación donde el SO puede forzar a un proceso a ceder la CPU.' }
  ]
};