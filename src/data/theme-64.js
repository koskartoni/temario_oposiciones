// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 64
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme64Data = {
  id: "theme64",
  name: "TEMA 64: Explotación y Admin. Sistemas en Red",
  title: "TEMA 64: EXPLOTACIÓN Y ADMINISTRACIÓN DE SISTEMAS EN RED",
  version: "Enero 2025",
  sections: [
    {
      id: "t64_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema se ubica en el bloque de "Sistemas en Red" y se centra en las tareas de <strong>explotación y administración</strong>. Requieren una adecuada sistematización basada en el orden, la planificación y un profundo conocimiento de las TIC para gestionar los servicios de una organización.' },
        { type: 'paragraph', text: 'El estudio de la explotación y administración de sistemas en red está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Sistemas operativos en red</code>.' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Administración de sistemas operativos</code>.' }
        ]}
      ]
    },
    {
      id: "t64_s2",
      shortTitle: "2. Sistemas en Red",
      title: "2. SISTEMAS EN RED",
      icon: "network",
      content: [
        { type: 'paragraph', text: 'Los sistemas en red son conjuntos de dispositivos de computación interconectados y autónomos que pueden intercambiar información. Sus principales beneficios son: permitir compartir información y recursos, mayor flexibilidad y reducción de costes.' }
      ]
    },
    {
      id: "t64_s3",
      shortTitle: "3. Explotación",
      title: "3. EXPLOTACIÓN DE SISTEMAS EN RED",
      icon: "usage",
      content: [
        { type: 'paragraph', text: 'La <strong>explotación</strong> es la utilización que un usuario hace de los servicios que la red pone a su disposición, sacando partido de los recursos hardware y software del sistema.' }
      ]
    },
    {
      id: "t64_s4",
      shortTitle: "4. Administración",
      title: "4. ADMINISTRACIÓN DE SISTEMAS EN RED",
      icon: "admin",
      content: [
          { type: 'keyConcept', title: '¿Qué es un Administrador de Red?', text: 'Es la persona encargada de las tareas de administración, gestión y seguridad de todos los componentes de la red (servidores, clientes, hardware, software, cuentas de usuario, etc.). Su objetivo es asegurar que el sistema se mantenga <strong>efectivo, fiable y eficiente</strong>.'},
      ]
    },
    { id: "t64_s4_1", shortTitle: "4.1. Instalación y Configuración", title: "4.1. INSTALACIÓN Y CONFIGURACIÓN", content: [ { type: 'paragraph', text: 'Consiste en la instalación y configuración de todos los elementos de la red (hardware y software) conforme a lo acordado en las fases de análisis y diseño.' } ] },
    {
      id: "t64_s4_2", shortTitle: "4.2. Almacenamiento", title: "4.2. GESTIÓN DEL ALMACENAMIENTO",
      content: [
          { type: 'paragraph', text: 'Para gestionar grandes volúmenes de datos en red, se utilizan diferentes tecnologías de almacenamiento:'},
          { type: 'table', headers: ['Tecnología', 'Descripción', 'Ideal para'], rows: [
              ['DAS (Direct Attached Storage)', 'Almacenamiento conectado directamente a un servidor.', 'Soluciones simples y económicas.'],
              ['NAS (Network Attached Storage)', 'Dispositivo de almacenamiento conectado a la red, actúa como servidor de archivos.', 'Hogares y pequeñas/medianas empresas.'],
              ['SAN (Storage Area Network)', 'Red de alta velocidad dedicada exclusivamente al almacenamiento.', 'Grandes centros de datos y entornos empresariales críticos.']
          ]}
      ]
    },
    { id: "t64_s4_3", shortTitle: "4.3. Impresión", title: "4.3. GESTIÓN DE IMPRESIÓN", content: [ { type: 'paragraph', text: 'La administración de red incluye configurar y gestionar los servicios de impresión, centralizando la gestión en <strong>servidores de impresión</strong> para simplificar la labor.' } ] },
    {
        id: "t64_s4_4", shortTitle: "4.4. Directorio", title: "4.4. GESTIÓN DEL SERVICIO DE DIRECTORIO",
        content: [
            { type: 'keyConcept', title: 'Servicio de Directorio', text: 'Almacena y organiza la información sobre los usuarios y recursos de una red (impresoras, carpetas, etc.), permitiendo una gestión centralizada del acceso y los permisos.'},
            { type: 'paragraph', text: 'Implementaciones comunes son <strong>Active Directory</strong> de Microsoft (que usa protocolos como LDAP y Kerberos) y <strong>OpenLDAP</strong> en el mundo del software libre.'}
        ]
    },
    {
        id: "t64_s4_5", shortTitle: "4.5. Acceso Remoto", title: "4.5. SERVICIOS DE ACCESO Y ADMINISTRACIÓN REMOTA",
        content: [
            { type: 'paragraph', text: 'Permiten a los administradores gestionar sistemas desde ubicaciones distintas:'},
            { type: 'list', items: ['<strong>Terminales en modo texto (CLI):</strong> Mediante el protocolo <strong>SSH (Secure Shell)</strong>.', '<strong>Escritorio remoto (GUI):</strong> Con tecnologías como <strong>RDP (Remote Desktop Protocol)</strong> en Windows, y <strong>VNC</strong> o <strong>xrdp</strong> en Linux.']}
        ]
    },
    {
        id: "t64_s4_6", shortTitle: "4.6. Archivos en Red", title: "4.6. GESTIÓN DE ARCHIVOS EN RED",
        content: [
            { type: 'paragraph', text: 'Los protocolos más comunes para compartir archivos en red son:'},
            { type: 'list', items: [
                '<strong>NFS (Network File System):</strong> Sistema de archivos distribuido nativo de entornos Linux/Unix.',
                '<strong>SMB (Server Message Block):</strong> Protocolo para compartir recursos en redes Windows. Su implementación libre, <strong>Samba</strong>, permite la interoperabilidad con sistemas Linux.'
            ]}
        ]
    },
    { id: "t64_s4_7", shortTitle: "4.7. Correo Electrónico", title: "4.7. CORREO ELECTRÓNICO", content: [ { type: 'paragraph', text: 'El administrador de red se encarga de la gestión de cuentas de correo y de velar por el correcto funcionamiento del servidor de correo.' } ] },
    {
      id: "t64_s4_8",
      shortTitle: "4.8. Otras Gestiones",
      title: "4.8. OTRAS GESTIONES",
      content: [ { type: 'list', items: ['<strong>Gestión de la seguridad:</strong> Configuración de firewalls, políticas de contraseñas, etc.', '<strong>Gestión de procesos:</strong> Monitorización del rendimiento de los servicios de red.', '<strong>Backups y recuperación ante desastres.</strong>' ]} ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: "t64_s5", shortTitle: "5. Aplicación", title: "5. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'El conocimiento sobre la administración de sistemas en red es fundamental. En FP, es la base de módulos como "Sistemas Operativos en Red" y "Administración de Sistemas Operativos". En el ámbito laboral, es el núcleo de roles como <strong>SysAdmin</strong>, <strong>DevOps</strong> o especialista en <strong>Ciberseguridad</strong>.' } ] },
    { id: 't64_s6', title: "6. CONCLUSIÓN", shortTitle: "6. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'Las redes son de vital importancia para el correcto funcionamiento de una organización. Una explotación y administración eficiente garantizan el funcionamiento continuo de las redes, apoyando las operaciones empresariales y minimizando tiempos de inactividad, incluso cuando se utilizan servicios externos en la nube.' } ] },
    { id: 't64_s7', title: "7. BIBLIOGRAFÍA", shortTitle: "7. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Bonnet, N. (2019). <em>Windows Server. Las bases para administrar y configurar su servidor</em>. Ediciones Eni.' }, { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Pearson.' }, { text: 'Feria, J. (2021). <em>Administración de sistemas operativos</em>. Editorial Síntesis.' } ] } ] }
  ],
  glossary: [
    { term: 'Sistema en Red', definition: 'Conjunto de dispositivos de computación interconectados y autónomos que pueden intercambiar información.' },
    { term: 'Explotación', definition: 'La utilización que un usuario hace de los servicios que la red pone a su disposición.' },
    { term: 'Administración de Red', definition: 'Conjunto de tareas de gestión y seguridad de todos los componentes de la red para asegurar su funcionamiento eficiente, fiable y seguro.' },
    { term: 'Servicio de Directorio', definition: 'Sistema que almacena y organiza la información sobre los usuarios y recursos de una red (ej. Active Directory, LDAP).' },
    { term: 'NAS (Network Attached Storage)', definition: 'Dispositivo de almacenamiento autónomo que se conecta a la red para compartir archivos de forma centralizada.' },
    { term: 'SAN (Storage Area Network)', definition: 'Red de alta velocidad dedicada exclusivamente al almacenamiento a nivel de bloque para servidores, ofreciendo el máximo rendimiento.' },
    { term: 'SSH (Secure Shell)', definition: 'Protocolo criptográfico para operar servicios de red de forma segura sobre una red no segura, comúnmente usado para acceso por terminal.' }
  ]
};