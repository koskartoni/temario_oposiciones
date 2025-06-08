export const theme16Data = {
    id: "theme16",
    name: "TEMA 16: Gestión de Procesos",
    title: "TEMA 16. INFORMÁTICA / S.A.I. - SISTEMAS OPERATIVOS: GESTIÓN DE PROCESOS.",
    version: "Versión: Mayo 2024 (Actualizado)",
    sections: [
      {
        id: "t16_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Continuando en el bloque de "Sistemas Operativos", este tema se adentra en uno de los aspectos fundamentales del núcleo de un SO: la <strong>gestión de procesos</strong>. Esta tarea es crucial para asegurar que múltiples aplicaciones puedan ejecutarse simultáneamente de forma eficiente y sin conflictos.' },
          { type: 'paragraph', text: 'La gestión de procesos abarca la creación, planificación, sincronización, comunicación y terminación de los procesos, así como la asignación de los recursos necesarios para su ejecución. Es un pilar fundamental, especialmente en entornos de multiprocesamiento y sistemas distribuidos.' }
        ]
      },
      {
        id: "t16_s2",
        shortTitle: "2. Procesos",
        title: "2. PROCESOS",
        content: [
          { type: 'paragraph', text: 'Un <strong>proceso</strong> es, en esencia, <strong>un programa en ejecución</strong>. Cada proceso necesita una serie de recursos (tiempo de CPU, espacio en memoria, acceso a E/S) que el sistema operativo se encarga de gestionar y proporcionar.' },
          { type: 'paragraph', text: 'Un proceso se caracteriza por varios elementos que se almacenan en una estructura de datos llamada <strong>PCB (Process Control Block)</strong>:' },
          { type: 'list', items: ['<strong>Identificador (PID):</strong> Número único para distinguir el proceso.', '<strong>Estado:</strong> El estado actual del proceso (nuevo, listo, en ejecución, etc.).', '<strong>Prioridad:</strong> Nivel de prioridad relativo al resto de procesos.', '<strong>Contador de programa (PC):</strong> Dirección de la siguiente instrucción a ejecutar.', '<strong>Punteros a memoria:</strong> Apuntan al código, datos y pila del proceso.', '<strong>Datos de contexto:</strong> Contenido de los registros de la CPU cuando el proceso se está ejecutando.', '<strong>Información de estado de E/S:</strong> Peticiones de E/S pendientes, ficheros en uso, etc.'] }
        ]
      },
      {
        id: "t16_s2_1", shortTitle: "2.1. Estados de un Proceso", title: "2.1. ESTADOS DE UN PROCESO",
        content: [
          { type: 'paragraph', text: 'Los diferentes estados en el ciclo de vida de un proceso son:' },
          { type: 'flowDiagram', title: 'Diagrama de 5 Estados de un Proceso',
            initialNodes: [
              { id: 'nuevo', position: { x: 0, y: 150 }, data: { label: 'Nuevo' } },
              { id: 'listo', position: { x: 200, y: 150 }, data: { label: 'Listo' } },
              { id: 'ejecucion', position: { x: 450, y: 150 }, data: { label: 'En Ejecución' }, style: {backgroundColor: '#38d18a'} },
              { id: 'bloqueado', position: { x: 450, y: 300 }, data: { label: 'Bloqueado' } },
              { id: 'terminado', position: { x: 700, y: 150 }, data: { label: 'Terminado' }, style: {backgroundColor: '#d13838', color: 'white'} }
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
        id: "t16_s2_2", shortTitle: "2.2. Hilos", title: "2.2. HILOS",
        content: [
          { type: 'paragraph', text: 'Los procesos se pueden dividir en <strong>hilos (threads)</strong>, que son la unidad básica de utilización de la CPU. Realizar cambios de contexto entre hilos de un mismo proceso es mucho más rápido y menos costoso que entre procesos, ya que comparten el mismo espacio de memoria.' },
          { type: 'paragraph', text: 'La capacidad del SO de mantener varios hilos de ejecución dentro del mismo proceso se conoce como <strong>multihilo</strong>. Todos los sistemas operativos modernos son multihilo.' }
        ]
      },
      {
        id: "t16_s3_1", shortTitle: "3.1. Comunicación", title: "3.1. COMUNICACIÓN ENTRE PROCESOS (IPC)",
        content: [
          { type: 'paragraph', text: 'La <strong>Comunicación entre Procesos (IPC - Inter-Process Communication)</strong> se refiere a los mecanismos que proporciona un SO para que los procesos puedan intercambiar información. Los dos grupos principales son:' },
          { type: 'definitionList', items: [
            { term: 'A) Memoria compartida:', definition: 'Los procesos comparten una región de memoria común para el intercambio de información. Es muy rápido pero requiere una sincronización cuidadosa.' },
            { term: 'B) Intercambio de mensajes:', definition: 'El SO proporciona mecanismos para el envío y recepción de mensajes. Incluye:', subItems: ['<strong>Sockets:</strong> Para comunicación a través de una red.', '<strong>Tuberías (Pipes):</strong> Cadenas de procesos donde la salida de uno es la entrada del siguiente.', '<strong>RPC (Remote Procedure Call):</strong> Mecanismo de alto nivel para comunicación en sistemas distribuidos.'] }
          ]}
        ]
      },
      {
          id: "t16_s3_2", shortTitle: "3.2. Sincronización", title: "3.2. SINCRONIZACIÓN DE PROCESOS",
          content: [
              { type: 'paragraph', text: 'La <strong>concurrencia</strong> se da cuando dos o más procesos se ejecutan "a la vez" (real en multiprocesadores, aparente en monoprocesador). Cuando estos procesos acceden a recursos compartidos, pueden producirse errores. Para evitarlo, se usan <strong>mecanismos de sincronización</strong>.'},
              { type: 'paragraph', text: 'El objetivo principal es garantizar la <strong>exclusión mutua</strong>: impedir que más de un proceso acceda simultáneamente a una <strong>sección crítica</strong> (la parte del programa que accede al recurso compartido), evitando así las <strong>condiciones de carrera</strong>.'},
              { type: 'subheading', text: 'Mecanismos de Sincronización'},
              { type: 'list', items: [
                  '<strong>Inhabilitación de interrupciones:</strong> Simple pero ineficiente y peligroso en sistemas multinúcleo.',
                  '<strong>Algoritmo de Peterson:</strong> Solución software para dos procesos que usa variables compartidas.',
                  '<strong>Instrucción TSL (Test and Set Lock):</strong> Instrucción hardware atómica que garantiza la exclusión mutua.',
                  '<strong>Semáforos:</strong> Inventado por Dijkstra, utiliza una variable entera y dos operaciones atómicas, <code>wait()</code> (o P) y <code>signal()</code> (o V), para controlar el acceso a recursos.',
                  '<strong>Monitores:</strong> Mecanismo de alto nivel que encapsula los datos compartidos y los procedimientos que operan sobre ellos, garantizando la exclusión mutua de forma implícita.'
              ]},
              { type: 'subheading', text: 'Inanición e Interbloqueos (Deadlocks)'},
              { type: 'paragraph', text: 'Son dos problemas clásicos de la sincronización: la <strong>inanición</strong> (un proceso nunca obtiene el recurso) y el <strong>interbloqueo</strong> (dos o más procesos se esperan mutuamente en un ciclo sin fin).'}
          ]
      },
      {
        id: "t16_s3_3", shortTitle: "3.3. Planificación", title: "3.3. PLANIFICACIÓN DE PROCESOS",
        content: [
          { type: 'paragraph', text: 'El <strong>planificador (scheduler)</strong> es la parte del SO que decide qué proceso de la cola de listos se ejecutará a continuación, usando un <strong>algoritmo de planificación</strong>.'},
          { type: 'definitionList', items: [
              { term: 'Algoritmos apropiativos:', definition: 'El SO puede "quitarle" la CPU a un proceso (ej. al acabarse su quantum de tiempo). Son esenciales para sistemas interactivos.'},
              { term: 'Algoritmos no apropiativos:', definition: 'Un proceso se ejecuta hasta que termina o se bloquea voluntariamente. Son más simples pero pueden llevar a que un proceso acapare la CPU.'}
          ]},
          { type: 'subheading', text: 'Algoritmos Principales:'},
          { type: 'list', items: [
              '<strong>FCFS (First-Come, First-Served):</strong> No apropiativo. Atiende a los procesos en orden de llegada.',
              '<strong>SJF (Shortest Job First):</strong> No apropiativo. Ejecuta el proceso más corto. Óptimo en tiempo de espera medio, pero requiere conocer la duración de antemano.',
              '<strong>SRTN (Shortest Remaining Time Next):</strong> Versión apropiativa de SJF.',
              '<strong>Round Robin:</strong> Apropiativo. A cada proceso se le asigna un pequeño intervalo de tiempo (quantum). Si no termina, vuelve al final de la cola de listos. Es el más común en sistemas de tiempo compartido.',
              '<strong>Planificación por Prioridad:</strong> Se ejecuta el proceso con mayor prioridad. Puede ser apropiativa o no, y las prioridades pueden ser estáticas o dinámicas.'
          ]}
        ]
      },
      {
        id: "t16_s4",
        shortTitle: "4. Gestión en Windows y Linux",
        title: "4. GESTIÓN DE PROCESOS EN WINDOWS Y EN LINUX",
        content: [
          { type: 'subheading', text: 'A) WINDOWS' },
          { type: 'paragraph', text: 'La herramienta gráfica principal es el <strong>Administrador de Tareas</strong>, que permite ver, terminar, suspender y cambiar la prioridad de los procesos. Para una gestión más avanzada, se utilizan la línea de comandos (CMD) y PowerShell.' },
          { type: 'list', items: [
              '<strong>Símbolo del sistema (CMD):</strong> Comandos como <code>tasklist</code> (listar procesos), <code>taskkill</code> (finalizar procesos) y <code>wmic process</code> (gestión avanzada).',
              '<strong>PowerShell:</strong> Ofrece un control mucho más potente mediante <em>cmdlets</em> como <code>Get-Process</code>, <code>Stop-Process</code> y <code>Start-Process</code>. Permite filtrar y encadenar comandos de forma muy flexible. Ejemplo: <code>Get-Process -Name "chrome" | Stop-Process -Force</code>'
          ]},
          { type: 'subheading', text: 'B) LINUX' },
          { type: 'paragraph', text: 'Linux dispone de un gran abanico de herramientas de consola para gestionar los procesos:' },
          { type: 'list', items: [
              '<code>ps</code>: Muestra un listado con el estado de los procesos (ej. <code>ps aux</code> para ver todos).',
              '<code>top</code> / <code>htop</code>: Muestran una vista interactiva y en tiempo real de los procesos y el consumo de recursos.',
              '<code>kill</code>: Permite enviar señales a los procesos para cambiar su estado o finalizarlos (ej. <code>kill -9 [PID]</code> para forzar la terminación).',
              '<code>nice</code> / <code>renice</code>: Permiten cambiar la prioridad de un proceso.',
              '<code>pstree</code>: Muestra un árbol de procesos, indicando la relación jerárquica entre ellos.'
          ]}
        ]
      },
      {
        id: "t16_s5",
        shortTitle: "5. Aplicación",
        title: "5. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La aplicación de los conocimientos sobre la gestión de procesos es fundamental tanto en el contexto escolar como en el laboral, siendo un componente clave de los sistemas operativos.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'nestedList', items: [
              { text: '<strong>Educación Secundaria y Bachillerato:</strong>', subItems: ['Los estudiantes aprenden los conceptos básicos de la gestión de procesos, entendiendo cómo se manejan y ejecutan los programas en un ordenador.'] },
              { text: '<strong>Formación Profesional:</strong>', subItems: ['Se profundiza en el funcionamiento de SO como Linux y Windows, incluyendo temas de administración de procesos, planificación de CPU y manejo de recursos.'] }
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Administración de sistemas:</strong> Esencial para administrar servidores, asegurando que los procesos se ejecuten de manera eficiente y manteniendo la estabilidad de la red.',
              '<strong>Seguridad informática:</strong> Incluye la configuración de permisos y la supervisión de actividades de los procesos para prevenir accesos no autorizados.',
              '<strong>Desarrollo de software:</strong> Comprender cómo los SO gestionan los procesos permite a los desarrolladores crear aplicaciones optimizadas, especialmente en entornos concurrentes y de alto rendimiento.'
          ]}
        ]
      },
      {
        id: "t16_s6",
        shortTitle: "6. Conclusión",
        title: "6. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En el presente tema se ha presentado una visión global de la gestión de procesos en los sistemas operativos. Se han explorado diversas estrategias y algoritmos para manejar la planificación, sincronización y comunicación entre procesos, con el objetivo de garantizar que los recursos del sistema se distribuyan de manera equitativa y eficiente.' },
          { type: 'paragraph', text: 'La correcta gestión de procesos es vital para mantener el rendimiento y la estabilidad de cualquier sistema. Como muestra de ello, vulnerabilidades como <strong>Meltdown y Spectre</strong> obligaron a realizar cambios significativos en la forma en que los sistemas operativos gestionaban la memoria y los procesos, demostrando que es un campo en constante evolución y de máxima importancia.' }
        ]
      },
      {
        id: "t16_s7",
        shortTitle: "7. Bibliografía",
        title: "7. BIBLIOGRAFÍA",
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