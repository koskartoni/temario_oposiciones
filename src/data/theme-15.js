export const theme15Data = {
    id: "theme15",
    name: "TEMA 15: Sistemas Operativos",
    title: "TEMA 15. INFORMÁTICA / S.A.I. - SISTEMAS OPERATIVOS. COMPONENTES. ESTRUCTURA. FUNCIONES. TIPOS.",
    version: "Versión: Octubre 2024 (Actualizado)",
    sections: [
      {
        id: "t15_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema se ubica en el bloque de "Sistemas Operativos" y es fundamental, ya que introduce conceptos clave como <strong>núcleo, servicio, interfaz y máquinas virtuales</strong>. A través de autores como Tanenbaum, Stallings y Prieto, exploraremos los componentes, estructuras, funciones y tipos de los sistemas operativos.' },
          { type: 'paragraph', text: 'La importancia del tema es evidente al ver la expansión del mercado de los SO. Microsoft, por ejemplo, apuesta por el sector de embebidos con <strong>Windows 11 IoT</strong>, optimizado para dispositivos como Raspberry Pi. Del mismo modo, existen innumerables distribuciones de <strong>Linux</strong> para una amplia variedad de fines, desde servidores (Red Hat) hasta auditoría informática (BlackArch) o entornos educativos (Lliurex).' }
        ]
      },
      {
        id: "t15_s2",
        shortTitle: "2. Sistemas Operativos",
        title: "2. SISTEMAS OPERATIVOS",
        content: [
          { type: 'paragraph', text: 'Un <strong>sistema operativo (SO)</strong> es un programa o conjunto de programas de control que tiene por objeto facilitar el uso del computador y conseguir que éste se utilice eficientemente (Prieto, 2006). Sus tres objetivos principales son: <strong>comodidad, eficiencia y capacidad de evolución</strong> (Stallings, 2017).' },
          { type: 'paragraph', text: 'La evolución de los SO está estrechamente ligada a la de la arquitectura de los ordenadores:'},
          { type: 'definitionList', items: [
              { term: '1ª Generación (1945-1955):', definition: 'Tubos de vacío, sin SO. Programación manual en código máquina.'},
              { term: '2ª Generación (1955-1965):', definition: 'Transistores. Aparece el <strong>procesamiento por lotes (batch)</strong>. Ejemplos: <code>FMS</code>, <code>IBSYS</code>.'},
              { term: '3ª Generación (1965-1980):', definition: 'Circuitos integrados. Se desarrollan la <strong>multiprogramación</strong> y los <strong>sistemas de tiempo compartido</strong>. Ejemplos: <code>OS/360</code>, <code>MULTICS</code>, <code>UNIX</code>.'},
              { term: '4ª Generación (1980-Actualidad):', definition: 'Microprocesadores. Aparecen los ordenadores personales con SO con interfaz gráfica (GUI). Ejemplos: <code>MS-DOS</code>, <code>MacOS</code>, y los sistemas modernos como <code>Windows</code>, <code>iOS</code> y <code>Android</code>.'}
          ]}
        ]
      },
      {
        id: "t15_s2_1", shortTitle: "2.1. Componentes", title: "2.1. COMPONENTES",
        content: [
          { type: 'paragraph', text: 'De forma general, un SO se compone de los siguientes niveles:'},
          { type: 'flowDiagram', title: 'Capas de un Sistema Operativo',
              initialNodes: [
                  {id: 'hardware', position:{x:0, y:300}, data:{label:'HARDWARE'}, style:{backgroundColor:'#d13838', color: 'white'}},
                  {id: 'nucleo', position:{x:0, y:225}, data:{label:'NÚCLEO'}},
                  {id: 'servicios', position:{x:0, y:150}, data:{label:'SERVICIOS'}},
                  {id: 'interfaces', position:{x:0, y:75}, data:{label:'INTERFACES'}},
                  {id: 'usuarios', position:{x:0, y:0}, data:{label:'USUARIOS'}}
              ],
              initialEdges: [
                  {id: 'e1', source:'hardware', target: 'nucleo', type: 'step', animated:true}, {id: 'e2', source:'nucleo', target:'servicios', type: 'step', animated:true},
                  {id: 'e3', source:'servicios', target:'interfaces', type: 'step', animated:true}, {id: 'e4', source:'interfaces', target:'usuarios', type: 'step', animated:true}
              ]
          },
          { type: 'definitionList', items: [
              { term: 'A. Núcleo (Kernel):', definition: 'Componente que interacciona directamente con el hardware, gestionando los recursos. Reside permanentemente en memoria principal.'},
              { term: 'B. Servicios:', definition: 'Controlan y administran el núcleo. Incluyen la <strong>gestión de procesos</strong>, <strong>gestión de memoria</strong>, <strong>gestión de E/S</strong> y <strong>gestión de archivos</strong>.'},
              { term: 'C. Interfaces:', definition: 'Permiten la comunicación del usuario con el sistema. Pueden ser de <strong>línea de comandos (CLI)</strong> como <code>Bash</code> o <code>PowerShell</code>, o de <strong>interfaz gráfica de usuario (GUI)</strong>.'}
          ]}
        ]
      },
      {
        id: "t15_s2_2", shortTitle: "2.2. Estructura", title: "2.2. ESTRUCTURA",
        content: [
            { type: 'paragraph', text: 'Según el diseño de su estructura interna podemos distinguir los siguientes modelos de sistemas operativos:'},
            { type: 'list', items: ['Sistemas monolíticos', 'Sistemas de capas', 'Microkernels', 'Modelo cliente-servidor', 'Máquinas virtuales', 'Núcleos híbridos (macrokernels)', 'Exokernels']}
        ]
      },
      {
          id: "t15_s2_2_1", shortTitle: "2.2.1. Monolíticos", title: "2.2.1. SISTEMAS MONOLÍTICOS",
          content: [
              { type: 'paragraph', text: 'Todo el SO se ejecuta como un solo programa en modo kernel. Es una colección de rutinas entrelazadas que se llaman entre sí. Ejemplo más típico: <strong>Linux</strong>. Otros: <strong>FreeBSD, Solaris</strong>.'},
              { type: 'flowDiagram', title: 'Estructura Monolítica',
                  initialNodes: [
                      {id:'hardware', position:{x:150, y:300}, data:{label:'HARDWARE'}, style:{backgroundColor:'#d13838', color: 'white'}},
                      {id:'nucleo', position:{x:150, y:150}, data:{label:'NÚCLEO'}, style:{backgroundColor:'#388ad1', color: 'white', height: 100, width: 250}},
                      {id:'software', position:{x:150, y:0}, data:{label:'SOFTWARE DE USUARIO'}},
                  ],
                  initialEdges: [ {id:'e1', source:'hardware', target:'nucleo', animated:true}, {id:'e2', source:'nucleo', target:'software', animated:true} ]
              }
          ]
      },
      {
          id: "t15_s2_2_2", shortTitle: "2.2.2. Capas", title: "2.2.2. SISTEMAS DE CAPAS",
          content: [
              { type: 'paragraph', text: 'El sistema se diseña en una estructura jerárquica de capas. Cada capa utiliza los servicios de la capa inmediatamente inferior y proporciona servicios a la capa superior. Ofrece un diseño más modular. Ejemplos: <strong>THE, MULTICS</strong>.'},
              { type: 'flowDiagram', title: 'Modelo Estructural basado en Capas',
                  initialNodes: [
                      {id:'hardware', position:{x:0, y:300}, data:{label:'Hardware (Capa 0)'}, style:{backgroundColor:'#d13838', color: 'white'}},
                      {id:'capa1', position:{x:0, y:225}, data:{label:'1ª capa del núcleo'}},
                      {id:'capa2', position:{x:0, y:150}, data:{label:'2ª capa del núcleo'}},
                      {id:'capa3', position:{x:0, y:75}, data:{label:'3ª capa del núcleo'}},
                      {id:'software', position:{x:0, y:0}, data:{label:'Software de usuario'}},
                  ],
                  initialEdges: [
                      {id:'e1', source:'hardware', target:'capa1', type:'step', animated:true}, {id:'e2', source:'capa1', target:'capa2', type:'step', animated:true},
                      {id:'e3', source:'capa2', target:'capa3', type:'step', animated:true}, {id:'e4', source:'capa3', target:'software', type:'step', animated:true}
                  ]
              }
          ]
      },
      {
          id: "t15_s2_2_3", shortTitle: "2.2.3. Microkernels", title: "2.2.3. MICROKERNELS",
          content: [
              { type: 'paragraph', text: 'Busca una alta confiabilidad al dividir el SO en módulos pequeños, donde solo uno (el <strong>microkernel</strong>) se ejecuta en modo kernel. El resto se ejecuta como procesos de usuario. Un error en un módulo no afecta a todo el sistema. Ejemplos: <strong>AIX, Symbian</strong>.'}
          ]
      },
      {
          id: "t15_s2_2_4", shortTitle: "2.2.4. Cliente-Servidor", title: "2.2.4. MODELO CLIENTE-SERVIDOR",
          content: [
              { type: 'paragraph', text: 'Variación del microkernel que diferencia dos clases de procesos: los <strong>servidores</strong>, que proporcionan un servicio, y los <strong>clientes</strong>, que lo solicitan mediante mensajes. El servidor realiza el trabajo y devuelve una respuesta.'}
          ]
      },
      {
          id: "t15_s2_2_5", shortTitle: "2.2.5. Máquinas Virtuales", title: "2.2.5. MÁQUINAS VIRTUALES",
          content: [
              { type: 'paragraph', text: 'Este modelo crea varias máquinas independientes (máquinas virtuales), cada una de las cuales es una réplica de la máquina real y puede ejecutar un SO diferente. El núcleo del SO se llama <strong>monitor de máquina virtual o hipervisor</strong>.'},
              { type: 'list', items: [
                  '<strong>Hipervisor tipo 1 (nativo):</strong> Se ejecuta directamente sobre el hardware. Son más rápidos. Ejemplos: <code>VMware ESXi</code>, <code>Microsoft Hyper-V</code>, <code>Proxmox</code>.',
                  '<strong>Hipervisor tipo 2 (hosted):</strong> Se ejecuta sobre otro SO como una aplicación más. Ejemplos: <code>VirtualBox</code>, <code>VMware Workstation</code>.'
              ]}
          ]
      },
      {
          id: "t15_s2_2_6", shortTitle: "2.2.6. Híbridos", title: "2.2.6. NÚCLEOS HÍBRIDOS (MACROKERNELS)",
          content: [
              { type: 'paragraph', text: 'Modelo similar al microkernel, pero algunos procesos clave se ejecutan también en modo kernel para mejorar el rendimiento. Es el modelo más utilizado en los SO modernos. Ejemplos: <strong>macOS, Windows (núcleo NT)</strong>.'}
          ]
      },
      {
          id: "t15_s2_2_7", shortTitle: "2.2.7. Exokernels", title: "2.2.7. EXOKERNELS",
          content: [
              { type: 'paragraph', text: 'Modelo orientado a la investigación que utiliza un núcleo extremadamente pequeño (exokernel). La mayor parte del código del SO está en bibliotecas que se cargan dinámicamente. No está implementado en sistemas comerciales.'}
          ]
      },
      {
          id: "t15_s2_3", shortTitle: "2.3. Funciones", title: "2.3. FUNCIONES",
          content: [
              { type: 'paragraph', text: 'Los sistemas operativos responden a dos funcionalidades, según el punto de vista:' },
              { type: 'list', items: [
                  '<strong>Desde el punto de vista del usuario:</strong> El SO actúa como una <strong>máquina extendida</strong>, abstrayendo al usuario de la complejidad del hardware y proporcionando una interfaz cómoda para ejecutar programas y gestionar archivos.',
                  '<strong>Desde el punto de vista de la máquina:</strong> El SO actúa como un <strong>administrador de recursos</strong>, controlando y distribuyendo de forma ordenada y eficiente la CPU, la memoria, los dispositivos de E/S, etc., entre los diversos programas que compiten por ellos.'
              ]}
          ]
      },
      {
        id: "t15_s2_4", shortTitle: "2.4. Tipos", title: "2.4. TIPOS",
        content: [
            { type: 'paragraph', text: 'Los sistemas operativos se pueden clasificar atendiendo a diversos parámetros:'},
            { type: 'definitionList', items: [
                {term: 'Según el número de usuarios:', subItems: ['<strong>Monousuario:</strong> Soportan un solo usuario a la vez.', '<strong>Multiusuario:</strong> Capaces de dar servicio a más de un usuario simultáneamente.']},
                {term: 'Según el número de procesos o tareas:', subItems: ['<strong>Monotarea:</strong> Solo pueden ejecutar un programa a la vez.', '<strong>Multitarea:</strong> Pueden ejecutar varios programas concurrentemente, compartiendo el tiempo de la CPU.']},
                {term: 'Según el número de procesadores:', subItems: ['<strong>Monoprocesador:</strong> Capaces de manejar un solo procesador.', '<strong>Multiprocesador:</strong> Capaces de aprovechar dos o más procesadores, ya sea de forma <strong>simétrica (SMP)</strong> o <strong>asimétrica</strong>.']},
                {term: 'Según la forma de ofrecer los servicios:', subItems: ['<strong>Sistemas operativos de red:</strong> Permiten interactuar con otras máquinas a través de la red.', '<strong>Sistemas operativos distribuidos:</strong> Integran recursos de red de forma transparente, haciendo que parezcan recursos locales.']}
            ]}
        ]
      },
      {
        id: "t15_s3",
        shortTitle: "3. SO Actuales",
        title: "3. SISTEMAS OPERATIVOS ACTUALES",
        content: [
          { type: 'paragraph', text: 'A continuación, se listan las versiones de escritorio más recientes de los principales desarrolladores:'},
          { type: 'list', items: [
              '<strong>Microsoft Windows:</strong> <code>Windows 11</code> (https://www.microsoft.com/es-es/windows/windows-11)',
              '<strong>Apple:</strong> <code>macOS Sonoma 14.5</code> (https://support.apple.com/)',
              '<strong>Distribuciones Linux:</strong> <code>Ubuntu 24.04 LTS</code> (https://ubuntu.com/download/desktop) y <code>Debian 12.5</code> (https://www.debian.org/download)'
          ]}
        ]
      },
      {
        id: "t15_s4",
        shortTitle: "4. Aplicación",
        title: "4. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La aplicación de los conocimientos sobre sistemas operativos es crucial, pues son la base de todo el funcionamiento de los sistemas informáticos modernos, desde dispositivos móviles hasta servidores de grandes empresas.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'nestedList', items: [
              { text: '<strong>Educación Primaria y Secundaria:</strong>', subItems: ['Los estudiantes aprenden sobre los conceptos básicos de los SO y su importancia en la gestión de recursos y ejecución de programas.'] },
              { text: '<strong>Formación Profesional y Cursos de Especialización:</strong>', subItems: ['Se enseña sobre sistemas operativos más avanzados, como Linux y Windows Server, enfocándose en la administración, configuración y solución de problemas.'] }
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Administración de Sistemas:</strong> Fundamental para administrar servidores basados en Windows Server o Linux, asegurando el funcionamiento eficiente de las redes corporativas.',
              '<strong>Seguridad Informática:</strong> Los SO juegan un papel crítico en la seguridad, donde los profesionales deben configurar adecuadamente los niveles de seguridad y acceso.',
              '<strong>Desarrollo de Software:</strong> Entender los SO permite desarrollar aplicaciones multiplataforma, optimizando el rendimiento y la compatibilidad.',
              '<strong>Virtualización y Contenedores:</strong> La comprensión de SO es vital para implementar soluciones como <code>Docker</code> y <code>VMware</code>, esenciales en entornos de desarrollo y producción.',
              '<strong>IoT y Sistemas Embebidos:</strong> El conocimiento de SO ligeros y especializados es crucial para desarrollar y gestionar dispositivos IoT.'
          ]}
        ]
      },
      {
        id: "t15_s5",
        shortTitle: "5. Conclusión",
        title: "5. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En el presente tema se ha presentado una visión global de los sistemas operativos, describiendo sus componentes, estructuras, funciones y tipos. Hemos visto que, independientemente de su estructura (monolíticos, microkernel, etc.), su función es la misma: controlar los recursos del equipo y ofrecer al usuario una interfaz más fácil de entender. Por todo ello, los sistemas operativos son el elemento software más importante de entre todos los de un sistema informático.' }
        ]
      },
      {
        id: "t15_s6",
        shortTitle: "6. Bibliografía",
        title: "6. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Tanenbaum, A. (2023). <em>Modern Operating Systems</em>. Editorial Pearson.' },
              { text: 'Stallings, W. (2017). <em>Operating Systems: Internals and Design Principles</em>. Editorial Pearson.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' },
              { text: 'Apple (macOS)', url: 'https://www.apple.com/macos' },
              { text: 'Debian Project', url: 'https://www.debian.org/' },
              { text: 'Microsoft Windows', url: 'https://www.microsoft.com/windows/' },
              { text: 'Ubuntu', url: 'https://ubuntu.com/' },
              { text: 'VMware', url: 'https://www.vmware.com/' },
              { text: 'VirtualBox', url: 'https://www.virtualbox.org/' }
          ]}
        ]
      }
    ]
  };