// CÓDIGO CORREGIDO CON LA INTRODUCCIÓN FIEL Y ESTANDARIZADA
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme15Data = {
    id: "theme15",
    name: "TEMA 15: Sistemas Operativos",
    title: "TEMA 15. SISTEMAS OPERATIVOS. COMPONENTES. ESTRUCTURA. FUNCIONES. TIPOS.",
    version: "Octubre 2024",
    sections: [
      {
        id: "t15_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        icon: "introduction",
        content: [
          // --- INTRODUCCIÓN CORREGIDA SIGUIENDO EL ESTÁNDAR ---
          { type: 'paragraph', text: 'El presente tema forma parte del temario oficial (BOE 13/02/1996) y se ubica dentro del bloque temático de "Sistemas Operativos", siendo el primero del mismo. A través de autores como Tanenbaum y Stallings, se introducirán términos tan importantes como núcleo, servicio, interfaz y microkernel.' },
          { type: 'paragraph', text: 'La importancia del tema queda de manifiesto al ver cómo el mercado de los SO se expande a nuevos dispositivos, como demuestra Microsoft con Windows 11 IoT para el sector de embebidos, o la gran variedad de distribuciones Linux para diferentes fines.' },
          { type: 'paragraph', text: 'Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio de los sistemas operativos está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
          { type: 'nestedList', items: [
            { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas Informáticos</code>' },
            { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulos: <code>Sistemas operativos monopuesto</code> y <code>Sistemas operativos en red</code>' },
            { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Implantación de sistemas operativos</code>' }
          ]}
        ]
      },
      // --- EL RESTO DE SECCIONES PERMANECEN IGUAL QUE EN LA VERSIÓN ANTERIOR ---
      {
        id: "t15_s2",
        shortTitle: "2. Sistemas Operativos",
        title: "2. SISTEMAS OPERATIVOS",
        icon: "os",
        content: [
          { type: 'paragraph', text: 'Un <strong>sistema operativo (SO)</strong> es un programa o conjunto de programas de control que tiene por objeto facilitar el uso del computador y conseguir que éste se utilice eficientemente (Prieto, 2006).' }
        ]
      },
      {
        id: "t15_s2_1", shortTitle: "2.1. Componentes", title: "2.1. COMPONENTES",
        icon: 'components',
        content: [
          { type: 'paragraph', text: 'Un SO se compone de los siguientes niveles:'},
          { type: 'flowDiagram', title: 'Capas de un Sistema Operativo',
              initialNodes: [
                  {id: 'hardware', position:{x:0, y:300}, data:{label:'HARDWARE'}, className: 'node-bus-data'},
                  {id: 'nucleo', position:{x:0, y:225}, data:{label:'NÚCLEO (Kernel)'}},
                  {id: 'servicios', position:{x:0, y:150}, data:{label:'SERVICIOS'}},
                  {id: 'interfaces', position:{x:0, y:75}, data:{label:'INTERFACES'}},
                  {id: 'usuarios', position:{x:0, y:0}, data:{label:'USUARIOS'}, className: 'node-bus-control'}
              ],
              initialEdges: [ {id: 'e1', source:'hardware', target: 'nucleo', type: 'step', animated:true}, {id: 'e2', source:'nucleo', target:'servicios', type: 'step', animated:true}, {id: 'e3', source:'servicios', target:'interfaces', type: 'step', animated:true}, {id: 'e4', source:'interfaces', target:'usuarios', type: 'step', animated:true} ]
          },
          { type: 'list', items: ['<strong>Núcleo (Kernel):</strong> Componente que interacciona directamente con el hardware.', '<strong>Servicios:</strong> Controlan el núcleo e incluyen la gestión de procesos, memoria, E/S y archivos.', '<strong>Interfaces:</strong> Permiten la comunicación del usuario con el sistema, ya sea por <strong>CLI (línea de comandos)</strong> o <strong>GUI (interfaz gráfica)</strong>.']}
        ]
      },
      {
        id: "t15_s2_2", shortTitle: "2.2. Estructura", title: "2.2. ESTRUCTURA",
        icon: 'sitemap',
        content: [ { type: 'paragraph', text: 'Según el diseño de su estructura interna, distinguimos varios modelos de SO:'} ]
      },
      { id: "t15_s2_2_1", shortTitle: "2.2.1. Monolíticos", title: "2.2.1. SISTEMAS MONOLÍTICOS", content: [ { type: 'paragraph', text: 'Todo el SO se ejecuta como un solo programa en modo kernel. Es una arquitectura muy eficiente, pero un fallo en un driver puede afectar a todo el sistema. Ejemplo: <strong>Linux, FreeBSD</strong>.'} ] },
      { id: "t15_s2_2_2", shortTitle: "2.2.2. De Capas", title: "2.2.2. SISTEMAS DE CAPAS", content: [ { type: 'paragraph', text: 'El sistema se diseña en una estructura jerárquica. Cada capa utiliza los servicios de la capa inferior. Ejemplos históricos: <strong>THE, MULTICS</strong>.'} ] },
      { id: "t15_s2_2_3", shortTitle: "2.2.3. Microkernels", title: "2.2.3. MICROKERNELS", content: [ { type: 'paragraph', text: 'Divide el SO en módulos pequeños, donde solo el microkernel se ejecuta en modo privilegiado. Ofrece alta fiabilidad. Ejemplos: <strong>QNX, Minix 3</strong>.'} ] },
      { id: "t15_s2_2_4", shortTitle: "2.2.4. Cliente-Servidor", title: "2.2.4. MODELO CLIENTE-SERVIDOR", content: [ { type: 'paragraph', text: 'Variación del microkernel que diferencia procesos <strong>servidores</strong> y <strong>clientes</strong>.'} ] },
      { id: "t15_s2_2_5", shortTitle: "2.2.5. Máquinas Virtuales", title: "2.2.5. MÁQUINAS VIRTUALES",
        content: [
          { type: 'paragraph', text: 'El <strong>hipervisor</strong> crea máquinas virtuales, cada una siendo una réplica del hardware real.'},
          { type: 'keyConcept', title: 'Hipervisor Tipo 1 vs. Tipo 2', items: [
            '<strong>Tipo 1 (Nativo):</strong> Se ejecuta sobre el hardware. Máximo rendimiento. Ejemplos: <code>VMware ESXi</code>, <code>Microsoft Hyper-V</code>, <code>Proxmox VE</code>.',
            '<strong>Tipo 2 (Hosted):</strong> Se ejecuta como una app sobre otro SO. Ejemplos: <code>VirtualBox</code>, <code>VMware Workstation</code>.'
          ]}
        ]
      },
      { id: "t15_s2_2_6", shortTitle: "2.2.6. Híbridos", title: "2.2.6. NÚCLEOS HÍBRIDOS", content: [ { type: 'paragraph', text: 'Combinan la velocidad de un núcleo monolítico con la modularidad de un microkernel. Es el modelo más usado hoy. Ejemplos: <strong>Windows, macOS</strong>.'} ] },
      { id: "t15_s2_2_7", shortTitle: "2.2.7. Exokernels", title: "2.2.7. EXOKERNELS", content: [ { type: 'paragraph', text: 'Modelo experimental con un núcleo mínimo. No se usa en sistemas comerciales.'} ] },
      {
          id: "t15_s2_3", shortTitle: "2.3. Funciones", title: "2.3. FUNCIONES",
          icon: 'functions',
          content: [
            { type: 'keyConcept', title: 'Las Dos Caras del Sistema Operativo', items: [
                '<strong>Como Máquina Extendida:</strong> Abstrae la complejidad del hardware, ofreciendo una interfaz cómoda.',
                '<strong>Como Administrador de Recursos:</strong> Gestiona y distribuye eficientemente la CPU, memoria, E/S, etc.'
            ]}
          ]
      },
      {
        id: "t15_s2_4", shortTitle: "2.4. Tipos", title: "2.4. TIPOS",
        icon: 'types',
        content: [
            { type: 'paragraph', text: 'Los SO se clasifican según diversos parámetros:'},
            { type: 'definitionList', items: [
                {term: 'Por nº de usuarios:', definition: '<strong>Monousuario</strong> vs. <strong>Multiusuario</strong>.'},
                {term: 'Por nº de tareas:', definition: '<strong>Monotarea</strong> vs. <strong>Multitarea</strong>.'},
                {term: 'Por nº de procesadores:', definition: '<strong>Monoprocesador</strong> vs. <strong>Multiprocesador</strong> (SMP o asimétrico).'},
                {term: 'Por forma de ofrecer servicios:', definition: '<strong>De red</strong> vs. <strong>Distribuidos</strong>.'}
            ]},
            { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
              { question: '¿Qué tipo de estructura de kernel es la más común en los sistemas operativos de escritorio modernos como Windows y macOS?', options: ['Monolítico', 'Microkernel', 'Híbrido'], correctAnswerIndex: 2 },
              { question: 'Un sistema que permite a varios usuarios conectarse por SSH y trabajar a la vez es, por definición:', options: ['Multitarea y Multiusuario', 'Monotarea y Multiusuario', 'Multitarea y Monousuario'], correctAnswerIndex: 0 }
            ]}
        ]
      },
      {
        id: "t15_s3",
        shortTitle: "3. SO Actuales",
        title: "3. SISTEMAS OPERATIVOS ACTUALES",
        icon: 'os',
        content: [
          { type: 'paragraph', text: 'Versiones de escritorio más recientes:'},
          { type: 'list', items: [
              '<strong>Microsoft:</strong> <code>Windows 11</code>',
              '<strong>Apple:</strong> <code>macOS Sonoma</code> (próxima versión <code>Sequoia</code>)',
              '<strong>Linux:</strong> <code>Ubuntu 24.04 LTS</code>, <code>Debian 12</code>.'
          ]}
        ]
      },
      { id: "t15_s4", shortTitle: "4. Aplicación", title: "4. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [{ type: 'paragraph', text: 'El conocimiento sobre SO es crucial. En FP, es la base de módulos como Sistemas Informáticos e Implantación de SO. En lo laboral, es esencial para la administración de sistemas, la seguridad, el desarrollo de software y la virtualización.'}] },
      { id: "t15_s5", shortTitle: "5. Conclusión", title: "5. CONCLUSIÓN", icon: "conclusion", content: [{ type: 'paragraph', text: 'Los SO son el software más importante de un sistema. Independientemente de su estructura, su función es controlar los recursos y ofrecer una interfaz sencilla. Entender sus componentes, estructuras y tipos es fundamental para cualquier profesional de la informática.'}] },
      { id: "t15_s6", shortTitle: "6. Bibliografía", title: "6. BIBLIOGRAFÍA", icon: "bibliography", content: [{ type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2023). <em>Modern Operating Systems</em>. Pearson.' }, { text: 'Stallings, W. (2017). <em>Operating Systems: Internals and Design Principles</em>. Pearson.' } ] }] }
    ],
    glossary: [
      { term: 'Kernel (Núcleo)', definition: 'El componente central del SO que interacciona directamente con el hardware.' },
      { term: 'Núcleo Monolítico', definition: 'Arquitectura donde todo el SO se ejecuta en un único espacio de direcciones en modo kernel. Eficiente pero menos robusto.' },
      { term: 'Microkernel', definition: 'Arquitectura que minimiza el código en modo kernel, ejecutando la mayoría de los servicios como procesos de usuario. Más robusto y modular.' },
      { term: 'Núcleo Híbrido', definition: 'Mezcla de las arquitecturas monolítica y microkernel. Es el modelo más común en SO modernos (Windows, macOS).' },
      { term: 'Hipervisor (VMM)', definition: 'Software que crea y gestiona máquinas virtuales. Puede ser de Tipo 1 (nativo) o Tipo 2 (hosted).' },
      { term: 'Multitarea', definition: 'Capacidad de un SO de ejecutar múltiples procesos de forma concurrente.' }
    ]
  };