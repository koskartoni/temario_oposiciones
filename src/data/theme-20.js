export const theme20Data = {
    id: "theme20",
    name: "TEMA 20: Explotación y Admin. de SO",
    title: "TEMA 20. INFORMÁTICA - EXPLOTACIÓN Y ADMINISTRACIÓN DE SISTEMAS OPERATIVOS MONOUSUARIO Y MULTIUSUARIO",
    version: "Versión: Julio 2024 (Actualizado)",
    sections: [
      {
        id: "t20_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Continuando en el bloque de "Sistemas Operativos", este tema se enfoca en la <strong>explotación y administración</strong> de sistemas, diferenciando entre entornos <strong>monousuario y multiusuario</strong>.' },
          { type: 'paragraph', text: 'La gestión de un sistema operativo es una tarea fundamental que asegura que los recursos de hardware y software se utilicen de manera eficiente y segura. Exploraremos los conceptos clave y las prácticas asociadas con la administración de estos dos tipos de sistemas.' }
        ]
      },
      {
        id: "t20_s2",
        shortTitle: "2. Definiciones",
        title: "2. DEFINICIONES",
        content: [
          { type: 'paragraph', text: 'Antes de profundizar, es fundamental establecer una base sólida de varios conceptos esenciales:' },
          { type: 'definitionList', items: [
              { term: '2.1. Sistema Operativo:', definition: 'Un programa (o conjunto de programas) de control que facilita el uso del computador y gestiona sus recursos eficientemente. Sus objetivos son la <strong>comodidad, eficiencia y capacidad de evolución</strong>.'},
              { term: '2.2. Explotación de SO:', definition: 'Es la <strong>utilización</strong> que un usuario hace de las características que un sistema operativo pone a su disposición, sacando partido de los recursos hardware. Se puede realizar mediante <strong>procesamiento por lotes</strong> o <strong>procesamiento en tiempo real</strong>.'},
              { term: '2.3. Administración de SO:', definition: 'Comprende el conjunto de tareas críticas (instalación, configuración, seguridad, gestión de usuarios, mantenimiento) destinadas a asegurar el funcionamiento <strong>óptimo y seguro</strong> del sistema. Es una tarea reservada para usuarios con privilegios elevados (administradores).'}
          ]}
        ]
      },
      {
        id: "t20_s3_1",
        shortTitle: "3.1. SO Monousuario",
        title: "3.1. SISTEMAS OPERATIVOS MONOUSUARIO",
        content: [
          { type: 'subheading', text: '3.1.1. Características'},
          { type: 'paragraph', text: 'Son sistemas que solo permiten la utilización por parte de un único usuario a la vez. Están principalmente diseñados para microcomputadoras.' },
          { type: 'paragraph', text: 'Sistemas como <strong>Windows 10/11</strong> se consideran monousuario (o monopuesto) porque, aunque soportan múltiples perfiles, solo un usuario puede usar el escritorio simultáneamente. El ejemplo histórico por excelencia es <strong>MS-DOS</strong>.' },
          { type: 'list', title: 'Características de MS-DOS:', items: [
              'Sistema monousuario y monoprogramado.',
              'Emplea un sistema de archivos jerárquico (FAT).',
              'Permite a los usuarios instalar sus propios controladores de dispositivos (a través de <code>CONFIG.SYS</code>).',
              'No cuenta con un sistema de protección robusto; existe un único usuario administrador.'
          ]},
          { type: 'subheading', text: '3.1.2. Explotación (Ej. MS-DOS)'},
          { type: 'definitionList', items: [
              { term: 'Comandos Internos:', definition: 'Se cargan en memoria con el núcleo del SO (<code>COMMAND.COM</code>) y están siempre disponibles. Se agrupan en: para procesos de lotes (<code>FOR</code>, <code>GOTO</code>), para directorios (<code>MD</code>, <code>CD</code>, <code>RD</code>), para ficheros (<code>TYPE</code>, <code>DEL</code>) y otros (<code>PATH</code>, <code>PROMPT</code>).'},
              { term: 'Comandos Externos:', definition: 'Son programas que residen en el disco (con extensión <code>.COM</code> o <code>.EXE</code>) y deben ser cargados en memoria para ejecutarse. Ejemplos: <code>FORMAT</code>, <code>FDISK</code>, <code>XCOPY</code>.'}
          ]},
          { type: 'subheading', text: '3.1.3. Administración (Ej. MS-DOS)'},
          { type: 'list', items: [
              '<strong>Gestión de Archivos y Directorios:</strong> Uso de comandos como <code>DIR</code>, <code>COPY</code>, <code>MOVE</code>, <code>DELETE</code>.',
              '<strong>Configuración del Sistema:</strong> Mediante los ficheros <code>CONFIG.SYS</code> (carga de controladores) y <code>AUTOEXEC.BAT</code> (ejecución de comandos al inicio).',
              '<strong>Gestión de Memoria:</strong> Optimización de la memoria convencional y alta con herramientas como <code>HIMEM.SYS</code> y <code>EMM386.EXE</code>.',
              '<strong>Mantenimiento del Sistema:</strong> Verificación de la integridad del disco con <code>CHKDSK</code> y desfragmentación con <code>DEFRAG</code>.'
          ]}
        ]
      },
      {
        id: "t20_s3_2", shortTitle: "3.2. SO Multiusuario", title: "3.2. SISTEMAS OPERATIVOS MULTIUSUARIO",
        content: [
          { type: 'subheading', text: '3.2.1. Características'},
          { type: 'list', items: [
              '<strong>Administración de Cuentas y Permisos:</strong> Control granular sobre los recursos y datos del sistema.',
              '<strong>Seguridad y Aislamiento:</strong> Medidas para proteger los datos y procesos de cada usuario.',
              '<strong>Multitarea:</strong> Soportan la ejecución simultánea de múltiples procesos.',
              '<strong>Recursos Compartidos:</strong> Permiten compartir archivos, impresoras y aplicaciones.',
              '<strong>Servicios de Red:</strong> Diseñados para funcionar en red, ofreciendo acceso remoto, etc.',
              '<strong>Escalabilidad:</strong> Pueden soportar un número creciente de usuarios y procesos.'
          ]},
          { type: 'subheading', text: '3.2.2. Explotación'},
          { type: 'paragraph', text: 'Se puede clasificar según el hardware donde se ejecutan:'},
          { type: 'definitionList', items: [
              { term: 'En Mainframe:', definition: 'Varios usuarios se conectan mediante terminales "tontos". El mainframe gestiona todos los recursos de forma centralizada. Ejemplos: <code>IBM z/OS</code>.'},
              { term: 'En Ordenadores Personales (Redes Cliente-Servidor):', definition: 'Los SO de servidor más conocidos (<code>Windows Server</code>, <code>Linux</code>, <code>macOS Server</code>) permiten a múltiples usuarios con sus propios PCs acceder a recursos compartidos de red (archivos, aplicaciones, etc.) y tener sesiones remotas.'}
          ]},
          { type: 'subheading', text: '3.2.3. Administración'},
          { type: 'list', items: [
              '<strong>Instalación y Configuración:</strong> Tarea inicial de configuración de hardware, SO y servicios básicos.',
              '<strong>Administración del Servicio de Directorio:</strong> Gestión centralizada de usuarios, grupos, equipos y permisos. Herramientas: <strong>Active Directory</strong> en Windows Server, <strong>LDAP</strong> (con herramientas como <code>phpldapadmin</code>) en Linux.',
              '<strong>Administración de Servidores de Impresión:</strong> Compartir y gestionar impresoras en red (usando <strong>CUPS</strong> en Linux).',
              '<strong>Servicios de Acceso Remoto:</strong> Configuración de acceso por terminal (<strong>SSH</strong>) o por escritorio remoto (<strong>RDP</strong> en Windows, <strong>VNC/xrdp</strong> en Linux).',
              '<strong>Administración de Procesos:</strong> Supervisión y gestión de procesos con herramientas como el <strong>Administrador de Tareas</strong> en Windows o <code>ps</code>/<code>kill</code>/<code>nice</code> en Linux.',
              '<strong>Automatización y Scripts:</strong> Uso de <strong>PowerShell</strong> en Windows o <strong>Bash/Perl/Python</strong> en Linux para automatizar tareas administrativas.'
          ]}
        ]
      },
      {
        id: "t20_s4",
        shortTitle: "4. Recursos",
        title: "4. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
          { type: 'paragraph', text: 'Para profundizar en la administración de sistemas operativos multiusuario, existen diversos recursos de gran ayuda:' },
          { type: 'list', items: [
              '<strong>Microsoft Learn:</strong> Plataforma de aprendizaje oficial de Microsoft con cursos y documentación sobre Windows Server, Active Directory y servicios de red.',
              '<strong>Linux Foundation Training:</strong> Ofrece cursos y certificaciones oficiales para la administración de sistemas Linux (Ubuntu, RHEL, CentOS).',
              '<strong>AWS/Google Cloud Training:</strong> Plataformas de los principales proveedores cloud con formaciones específicas sobre la administración de SO en la nube.',
              '<strong>Stack Overflow:</strong> Comunidad de desarrolladores y administradores de sistemas para resolver problemas y encontrar soluciones.'
          ]}
        ]
      },
      {
        id: "t20_s5",
        shortTitle: "5. Aplicación",
        title: "5. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'El conocimiento sobre la explotación y administración de un sistema operativo tiene aplicaciones fundamentales tanto en el ámbito escolar como en el laboral, siendo una base imprescindible para diversos roles técnicos y educativos.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'nestedList', items: [
              { text: '<strong>Educación Secundaria y Bachillerato:</strong>', subItems: ['Los estudiantes aprenden los conceptos básicos de la gestión de usuarios y permisos, y cómo se manejan y ejecutan los programas.'] },
              { text: '<strong>Formación Profesional:</strong>', subItems: ['Se profundiza en el funcionamiento de sistemas como Linux y Windows, incluyendo la administración de usuarios, servicios de red y planificación de tareas.'] }
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Administración de Sistemas:</strong> Es la tarea principal. Aseguran que los procesos se ejecuten de manera eficiente, optimizando el rendimiento y manteniendo la estabilidad de la red.',
              '<strong>Seguridad Informática (Ciberseguridad):</strong> Configuración de permisos, supervisión de actividades y protección de procesos críticos para mantener la seguridad del sistema.',
              '<strong>Desarrollo de Software (DevOps):</strong> Comprender cómo los SO gestionan los recursos permite a los desarrolladores y personal de operaciones crear y desplegar aplicaciones optimizadas y eficientes.'
          ]}
        ]
      },
      {
        id: "t20_s6",
        shortTitle: "6. Conclusión",
        title: "6. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En el presente tema se ha presentado una visión global sobre la explotación y administración de sistemas operativos, diferenciando entre monousuario y multiusuario. Hemos visto que, aunque comparten una base, las tareas de administración de un sistema operativo multiusuario conllevan una complejidad y variedad de acciones mucho mayor, al tratarse de sistemas utilizados por varios usuarios simultáneamente. El hincapié en los sistemas multiusuario se debe a que son los que tienen una mayor aplicación en la actualidad, siendo la base de la infraestructura tecnológica moderna.'}
        ]
      },
      {
        id: "t20_s7",
        shortTitle: "7. Bibliografía",
        title: "7. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Tanenbaum, A. (2023). <em>Modern Operating Systems</em>. Editorial Pearson.' },
              { text: 'Stallings, W. (2017). <em>Operating Systems: Internals and Design Principles</em>. Editorial Pearson.' },
              { text: 'Silberschatz, A. (2018). <em>Operating Systems Concepts</em>. Editorial Wiley.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'Feria, J. (2021). <em>Administración de sistemas operativos</em>. Editorial Síntesis.' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' }
          ]}
        ]
      }
    ]
  };