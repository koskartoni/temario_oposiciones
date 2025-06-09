// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 71
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme71Data = {
  id: "theme71",
  name: "TEMA 71: Explotación y Admin. de Sistemas en Red Local",
  title: "TEMA 71: EXPLOTACIÓN Y ADMINISTRACIÓN DE SISTEMAS EN RED LOCAL. FACILIDADES DE GESTIÓN.",
  version: "Enero 2025",
  sections: [
    {
      id: "t71_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema del bloque de "Sistemas en Red" se centra en la <strong>explotación y administración</strong> de sistemas en red local. Detallaremos las tareas y responsabilidades necesarias para mantener una red funcional, segura y eficiente.' },
        { type: 'paragraph', text: 'El estudio de la explotación y administración de sistemas en red está presente en el currículo de la familia profesional de Informática y Comunicaciones. Concretamente, se puede ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Sistemas operativos en red</code>.' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Administración de sistemas operativos</code>.' }
        ]}
      ]
    },
    {
      id: "t71_s2",
      shortTitle: "2. Sistemas en Red",
      title: "2. SISTEMAS EN RED",
      icon: "network",
      content: [
        { type: 'paragraph', text: 'Son conjuntos de dispositivos interconectados. Sus beneficios son: <strong>compartir información y recursos, mayor flexibilidad y reducción de costes</strong>.' }
      ]
    },
    {
      id: "t71_s3",
      shortTitle: "3. Explotación",
      title: "3. EXPLOTACIÓN DE SISTEMAS EN RED LOCAL",
      icon: "usage",
      content: [
        { type: 'paragraph', text: 'La <strong>explotación</strong> es la utilización que un usuario hace de los servicios de la red (navegadores, ofimática, etc.).' }
      ]
    },
    {
      id: "t71_s4",
      shortTitle: "4. Administración",
      title: "4. ADMINISTRACIÓN DE SISTEMAS EN RED LOCAL",
      icon: "admin",
      content: [
        { type: 'keyConcept', title: 'Rol del Administrador de Red', text: 'Es la persona encargada de la gestión y seguridad de todos los componentes de la red. Su objetivo es asegurar que el sistema se mantenga <strong>efectivo, fiable y eficiente</strong>.'}
      ]
    },
    {
        id: "t71_s4_1_to_4_8",
        shortTitle: "4.1-4.8. Tareas de Administración",
        title: "4.1 a 4.8. TAREAS DE ADMINISTRACIÓN",
        content: [
            { type: 'definitionList', items: [
                { term: '4.1. Instalación y Configuración:', definition: 'Implantación de hardware y software y puesta en marcha de servicios.'},
                { term: '4.2. Gestión del Almacenamiento:', definition: 'Administración de tecnologías como <strong>DAS, NAS y SAN</strong>.'},
                { term: '4.3. Gestión de Impresión:', definition: 'Configurar y gestionar el acceso a impresoras compartidas en red.'},
                { term: '4.4. Gestión del Servicio de Directorio:', definition: 'Gestión centralizada de usuarios y recursos mediante <strong>Active Directory</strong> (Windows) o <strong>LDAP</strong> (Linux).'},
                { term: '4.5. Acceso Remoto:', definition: 'Configuración de acceso por terminal (<strong>SSH</strong>) o escritorio remoto (<strong>RDP, VNC</strong>).'},
                { term: '4.6. Gestión de Archivos en Red:', definition: 'Compartir recursos mediante <strong>NFS</strong> (Linux) o <strong>SMB/Samba</strong> (Windows/Linux).'},
                { term: '4.7. Correo Electrónico:', definition: 'Gestión de servidores de correo y cuentas de usuario.'},
                { term: '4.8. Otras Gestiones:', definition: 'Incluye la gestión de la seguridad (firewalls), monitorización de procesos y planificación de copias de seguridad.'}
            ]}
        ]
    },
    {
      id: "t71_s5",
      shortTitle: "5. Facilidades de Gestión",
      title: "5. FACILIDADES DE GESTIÓN",
      icon: "managementTools",
      content: [
        { type: 'paragraph', text: 'Son herramientas y modelos que facilitan la administración y garantizan la funcionalidad y seguridad de la red.' },
        { type: 'keyConcept', title: 'Modelo FCAPS de ISO', text: 'Define las 5 áreas funcionales de la gestión de redes:'},
        { type: 'flowDiagram', title: 'Modelo de Gestión de Red FCAPS',
            initialNodes: [
                {id: 'f', position:{x:0, y:0}, data:{label:'Fault (Errores)'}},
                {id: 'c', position:{x:250, y:0}, data:{label:'Configuration'}},
                {id: 'a', position:{x:500, y:0}, data:{label:'Accounting (Contabilidad)'}},
                {id: 'p', position:{x:125, y:150}, data:{label:'Performance (Rendimiento)'}},
                {id: 's', position:{x:375, y:150}, data:{label:'Security (Seguridad)'}}
            ],
            initialEdges: []
        },
        { type: 'paragraph', text: 'Para implementar estas gestiones se utilizan protocolos como <strong>SNMP (Simple Network Management Protocol)</strong> y plataformas de monitorización como <code>Zabbix</code>, <code>Nagios</code> o <code>PRTG Network Monitor</code>.'}
      ]
    },
    { id: "t71_s6", shortTitle: "6. Aplicación", title: "6. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'El conocimiento sobre la administración de sistemas en red local es fundamental. En FP, es la base de módulos como "Sistemas Operativos en Red". En el ámbito laboral, es el núcleo de roles como <strong>SysAdmin</strong> o especialista en <strong>Ciberseguridad</strong>.' } ] },
    { id: 't71_s7', title: "7. CONCLUSIÓN", shortTitle: "7. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'Las redes son vitales para cualquier organización. Una administración eficiente, apoyada en herramientas y modelos estandarizados como SNMP y FCAPS, garantiza el funcionamiento continuo de las redes, apoyando las operaciones empresariales y minimizando tiempos de inactividad.' } ] },
    { id: 't71_s8', title: "8. BIBLIOGRAFÍA", shortTitle: "8. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Bonnet, N. (2019). <em>Windows Server. Las bases para administrar y configurar su servidor</em>. Ediciones Eni.' }, { text: 'Núñez, M. (2019). <em>Sistemas operativos en red</em>. Editorial Síntesis.' } ] } ] }
  ],
  glossary: [
    { term: 'Administración de Red', definition: 'Conjunto de tareas de gestión y seguridad de todos los componentes de la red para asegurar su funcionamiento eficiente, fiable y seguro.' },
    { term: 'Explotación', definition: 'La utilización que un usuario hace de los servicios que la red pone a su disposición.' },
    { term: 'Servicio de Directorio', definition: 'Sistema que almacena y organiza la información sobre los usuarios y recursos de una red (ej. Active Directory, LDAP).' },
    { term: 'SSH (Secure Shell)', definition: 'Protocolo criptográfico para operar servicios de red de forma segura sobre una red no segura, comúnmente usado para acceso por terminal.' },
    { term: 'SNMP (Simple Network Management Protocol)', definition: 'Protocolo estándar para la gestión y monitorización de dispositivos en una red TCP/IP.' },
    { term: 'FCAPS', definition: 'Modelo de gestión de redes de la ISO que define cinco áreas funcionales: Fault, Configuration, Accounting, Performance, Security.' }
  ]
};