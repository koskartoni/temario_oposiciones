// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 20
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme20Data = {
  id: "theme20",
  name: "TEMA 20: Explotación y Admin. de SO",
  title: "TEMA 20. EXPLOTACIÓN Y ADMINISTRACIÓN DE SISTEMAS OPERATIVOS MONOUSUARIO Y MULTIUSUARIO",
  version: "Julio 2024",
  sections: [
    {
      id: "t20_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Continuando en el bloque de "Sistemas Operativos", este tema se enfoca en la <strong>explotación y administración</strong> de sistemas, diferenciando entre entornos <strong>monousuario y multiusuario</strong>.' },
        { type: 'paragraph', text: 'El estudio de los sistemas operativos está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulos: <code>Sistemas operativos monopuesto</code> y <code>Sistemas operativos en red</code>' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulos: <code>Implantación de sistemas operativos</code> y <code>Administración de sistemas operativos</code>' }
        ]}
      ]
    },
    {
      id: "t20_s2",
      shortTitle: "2. Definiciones",
      title: "2. DEFINICIONES",
      icon: "definition",
      content: [
        { type: 'paragraph', text: 'Antes de profundizar, es fundamental establecer una base sólida de varios conceptos esenciales:' },
        { type: 'keyConcept', title: 'Explotación vs. Administración', items: [
          '<strong>Explotación:</strong> Es la <strong>utilización</strong> que un usuario hace de las características de un SO para realizar sus tareas (navegar, programar, escribir un documento).',
          '<strong>Administración:</strong> Es el conjunto de tareas críticas (instalación, configuración, seguridad, mantenimiento) que aseguran el funcionamiento <strong>óptimo y seguro</strong> del sistema. Es una tarea reservada para usuarios con privilegios elevados.'
        ]}
      ]
    },
    {
      id: "t20_s3",
      shortTitle: "3. Tipos de SO",
      title: "3. TIPOS DE SISTEMAS OPERATIVOS SEGÚN EL NÚMERO DE USUARIOS",
      icon: "users"
    },
    {
      id: "t20_s3_1",
      shortTitle: "3.1. SO Monousuario",
      title: "3.1. SISTEMAS OPERATIVOS MONOUSUARIO",
      content: [
        { type: 'paragraph', text: 'Sistemas que solo permiten la utilización por parte de un único usuario a la vez. Sistemas como <strong>Windows 11</strong> se consideran monousuario (o monopuesto). El ejemplo histórico por excelencia es <strong>MS-DOS</strong>.' },
        { type: 'subheading', text: '3.1.2. Explotación (Ej. MS-DOS)'},
        { type: 'paragraph', text: 'La explotación se realizaba mediante comandos internos (cargados en memoria, ej. <code>DIR</code>, <code>COPY</code>) y externos (programas en disco, ej. <code>FORMAT</code>, <code>FDISK</code>).' },
        { type: 'subheading', text: '3.1.3. Administración (Ej. MS-DOS)'},
        { type: 'list', items: [
            '<strong>Gestión de Archivos:</strong> Uso de comandos como <code>DIR</code>, <code>COPY</code>, <code>DELETE</code>.',
            '<strong>Configuración del Sistema:</strong> Mediante los ficheros <code>CONFIG.SYS</code> y <code>AUTOEXEC.BAT</code>.',
            '<strong>Gestión de Memoria:</strong> Optimización con herramientas como <code>HIMEM.SYS</code> y <code>EMM386.EXE</code>.',
            '<strong>Mantenimiento:</strong> Verificación del disco con <code>CHKDSK</code> y desfragmentación con <code>DEFRAG</code>.'
        ]}
      ]
    },
    {
      id: "t20_s3_2", shortTitle: "3.2. SO Multiusuario", title: "3.2. SISTEMAS OPERATIVOS MULTIUSUARIO",
      content: [
        { type: 'subheading', text: '3.2.1. Características'},
        { type: 'list', items: [
            '<strong>Administración de Cuentas y Permisos:</strong> Control granular sobre los recursos.',
            '<strong>Seguridad y Aislamiento:</strong> Protección de los datos y procesos de cada usuario.',
            '<strong>Multitarea y Recursos Compartidos:</strong> Permiten la ejecución simultánea de procesos y el uso compartido de archivos e impresoras.',
            '<strong>Servicios de Red y Escalabilidad.</strong>'
        ]},
        { type: 'subheading', text: '3.2.2. Explotación'},
        { type: 'paragraph', text: 'Los ejemplos modernos son los sistemas operativos de servidor (<code>Windows Server</code>, <code>Linux</code>, <code>macOS Server</code>) que permiten a múltiples usuarios acceder a recursos de red y tener sesiones remotas.'},
        { type: 'subheading', text: '3.2.3. Administración'},
        { type: 'paragraph', text: 'Es una tarea mucho más compleja que en sistemas monousuario. Las principales tareas son:'},
        { type: 'definitionList', items: [
          { term: 'Administración del Servicio de Directorio:', definition: 'Gestión centralizada de usuarios, grupos y permisos. Herramientas clave: <strong>Active Directory</strong> en Windows Server y <strong>LDAP</strong> en Linux.'},
          { term: 'Administración de Servidores de Impresión:', definition: 'Compartir y gestionar impresoras en red (usando <strong>CUPS</strong> en Linux).'},
          { term: 'Servicios de Acceso Remoto:', definition: 'Configuración de acceso por terminal (<strong>SSH</strong>) o por escritorio remoto (<strong>RDP</strong> en Windows, <strong>VNC/xrdp</strong> en Linux).'},
          { term: 'Administración de Procesos:', definition: 'Supervisión y gestión con herramientas como el <strong>Administrador de Tareas</strong> (Windows) o <code>ps</code>/<code>kill</code> (Linux).'},
          { term: 'Automatización y Scripts:', definition: 'Uso de <strong>PowerShell</strong> en Windows o <strong>Bash</strong> en Linux para automatizar tareas.'}
        ]}
      ]
    },
    {
      id: "t20_s4",
      shortTitle: "4. Recursos",
      title: "4. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
      icon: "tools",
      content: [
        { type: 'resourceLink', name: 'Microsoft Learn', url: 'https://learn.microsoft.com/', description: 'Plataforma oficial de Microsoft con cursos y documentación sobre Windows Server y Active Directory.' },
        { type: 'resourceLink', name: 'Linux Foundation Training', url: 'https://training.linuxfoundation.org/', description: 'Cursos y certificaciones oficiales para la administración de sistemas Linux (Ubuntu, RHEL, etc.).'}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: 't20_s5', title: "5. APLICACIÓN DE LOS CONTENIDOS", shortTitle: "5. Aplicación", icon: "application", content: [ { type: 'paragraph', text: 'El conocimiento sobre explotación y administración de SO es fundamental. En FP, es la base de módulos de administración de sistemas y redes. En lo laboral, es el núcleo del rol de <strong>Administrador de Sistemas</strong>, y es crucial para la <strong>Seguridad Informática</strong> y <strong>DevOps</strong>.' } ] },
    { id: 't20_s6', title: "6. CONCLUSIÓN", shortTitle: "6. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'Se ha presentado una visión global sobre la explotación y administración de sistemas monousuario y multiusuario. Las tareas de administración de un SO multiusuario conllevan una complejidad mucho mayor, y tienen una aplicación directa y fundamental en la infraestructura tecnológica actual.' } ] },
    { id: 't20_s7', title: "7. BIBLIOGRAFÍA", shortTitle: "7. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2023). <em>Modern Operating Systems</em>. Pearson.' }, { text: 'Stallings, W. (2017). <em>Operating Systems: Internals and Design Principles</em>. Pearson.' }, { text: 'Feria, J. (2021). <em>Administración de sistemas operativos</em>. Síntesis.' } ] } ] }
  ],
  glossary: [
    { term: 'Explotación de SO', definition: 'La utilización que un usuario hace de las características de un sistema operativo para realizar sus tareas.' },
    { term: 'Administración de SO', definition: 'Conjunto de tareas críticas (instalación, seguridad, mantenimiento) para asegurar el funcionamiento óptimo y seguro del sistema.' },
    { term: 'SO Monousuario', definition: 'Sistema que solo permite la utilización por parte de un único usuario a la vez (ej. Windows 11, MS-DOS).' },
    { term: 'SO Multiusuario', definition: 'Sistema capaz de dar servicio a más de un usuario simultáneamente (ej. Windows Server, Linux).' },
    { term: 'Active Directory', definition: 'Servicio de directorio de Microsoft para la gestión centralizada de usuarios, equipos y recursos en una red Windows.' },
    { term: 'LDAP', definition: 'Protocolo estándar para acceder y mantener servicios de información de directorio. Usado comúnmente en Linux.' },
    { term: 'SSH (Secure Shell)', definition: 'Protocolo de red criptográfico para operar servicios de red de forma segura sobre una red no segura.' },
    { term: 'RDP (Remote Desktop Protocol)', definition: 'Protocolo propietario de Microsoft que permite a un usuario conectarse a otro ordenador a través de una red con una interfaz gráfica.' }
  ]
};