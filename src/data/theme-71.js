export const theme71Data = {
    id: "theme71",
    name: "TEMA 71: Explotación y Admin. de Sistemas en Red",
    title: "TEMA 71. INFORMÁTICA - EXPLOTACIÓN Y ADMINISTRACIÓN DE SISTEMAS EN RED LOCAL. FACILIDADES DE GESTIÓN.",
    version: "Versión: Enero 2025 (Actualizado)",
    sections: [
      {
        id: "t71_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema del bloque de "Sistemas en Red" se centra en la <strong>explotación y administración</strong> de los sistemas en red, detallando los componentes, funciones y estructura del software que lo hace posible.' },
          { type: 'paragraph', text: 'Los sistemas en red, mediante cableado y equipos de interconexión, constituyen el esqueleto de cualquier organización. Por este motivo, requieren una adecuada sistematización basada en la planificación y un profundo conocimiento de las TIC para gestionar la creciente demanda de nuevos servicios. Nos centraremos en detallar la explotación y administración de estos sistemas.' }
        ]
      },
      {
        id: "t71_s2",
        shortTitle: "2. Sistemas en Red",
        title: "2. SISTEMAS EN RED",
        content: [
          { type: 'paragraph', text: 'Los sistemas en red son conjuntos de dispositivos de computación interconectados y autónomos capaces de intercambiar información. Sus beneficios principales son: <strong>compartir información y recursos, mayor flexibilidad y reducción de costes</strong>.' }
        ]
      },
      {
        id: "t71_s3",
        shortTitle: "3. Explotación",
        title: "3. EXPLOTACIÓN DE SISTEMAS EN RED LOCAL",
        content: [
          { type: 'paragraph', text: 'La <strong>explotación</strong> es la utilización que un usuario hace de los servicios que la red pone a su disposición. El perfil del usuario varía desde usuarios finales que usan aplicaciones (navegadores, ofimática) hasta programadores que desarrollan sobre la red.' }
        ]
      },
      {
        id: "t71_s4",
        shortTitle: "4. Administración",
        title: "4. ADMINISTRACIÓN DE SISTEMAS EN RED LOCAL",
        content: [
          { type: 'paragraph', text: 'La <strong>administración de red</strong> abarca las tareas de gestión y seguridad de todos los componentes de la red. El objetivo es asegurar que el sistema se mantenga <strong>efectivo, fiable y eficiente</strong>. Las tareas más importantes se pueden clasificar en:' },
          { type: 'list', items: ['Instalación y configuración', 'Gestión del almacenamiento', 'Gestión de impresión', 'Gestión del servicio de directorio', 'Servicios de acceso y administración remota', 'Gestión de archivos en red', 'Correo electrónico', 'Otras gestiones (seguridad, procesos, etc.).']}
        ]
      },
      {
          id: "t71_s4_1_to_4_3",
          shortTitle: "4.1-4.3. Tareas de Admin.",
          title: "4.1 A 4.3. INSTALACIÓN, ALMACENAMIENTO E IMPRESIÓN",
          content: [
              { type: 'definitionList', items: [
                  { term: '4.1. Instalación y Configuración:', definition: 'Consiste en la implantación de todos los elementos de la red (hardware y software) y la puesta en funcionamiento de los servicios.'},
                  { term: '4.2. Gestión del Almacenamiento:', definition: 'Gestión de tecnologías como <strong>DAS (Direct Attached Storage)</strong>, <strong>NAS (Network Attached Storage)</strong> y <strong>SAN (Storage Area Network)</strong> para dar respuesta a las necesidades de almacenamiento de la red.'},
                  { term: '4.3. Gestión de Impresión:', definition: 'Configurar y gestionar el acceso a impresoras compartidas en la red, a menudo centralizado en <strong>servidores de impresión</strong>.'}
              ]}
          ]
      },
      {
          id: "t71_s4_4", shortTitle: "4.4. Directorio", title: "4.4. GESTIÓN DEL SERVICIO DE DIRECTORIO",
          content: [
              { type: 'paragraph', text: 'El <strong>servicio de directorio</strong> almacena y organiza la información sobre usuarios y recursos, permitiendo una gestión centralizada. Actúa como autoridad central para la autenticación, usando protocolos como <code>LDAP</code> o <code>Kerberos</code>.'},
              { type: 'paragraph', text: 'Implementaciones comunes son <strong>Active Directory</strong> en Windows Server y <strong>OpenLDAP</strong> en Linux. Sus funciones principales son la gestión de usuarios, grupos, recursos y permisos.'},
              { type: 'list', title: 'Herramientas de Administración:', items: [
                  '<strong>Windows Server:</strong> Consolas como "Usuarios y equipos de Active Directory" y el "Centro de administración de Active Directory (ADAC)".',
                  '<strong>GNU/Linux:</strong> Herramientas web como <code>phpLDAPadmin</code> o aplicaciones de escritorio como <code>JXplorer</code>.'
              ]}
          ]
      },
      {
          id: "t71_s4_5_to_4_8", shortTitle: "4.5-4.8. Servicios y Otras Gestiones", title: "4.5 A 4.8. OTROS SERVICIOS Y GESTIONES",
          content: [
              { type: 'definitionList', items: [
                  {term: '4.5. Acceso Remoto:', definition: 'Administración de sistemas desde ubicaciones distintas, ya sea por terminal de texto (<strong>SSH</strong>) o por escritorio remoto (<strong>RDP</strong>, <strong>VNC</strong>).'},
                  {term: '4.6. Gestión de Archivos en Red:', definition: 'Compartir recursos mediante protocolos como <strong>NFS</strong> (Linux/Unix) o <strong>SMB/CIFS</strong> (Windows, con <strong>Samba</strong> para interoperabilidad).'},
                  {term: '4.7. Correo Electrónico:', definition: 'Gestión de servidores de correo, cuentas y buzones para la comunicación corporativa.'},
                  {term: '4.8. Otras Gestiones:', definition: 'Incluye la gestión de la seguridad, la monitorización de procesos y la planificación de copias de seguridad (backups).'}
              ]}
          ]
      },
      {
        id: "t71_s5",
        shortTitle: "5. Facilidades de Gestión",
        title: "5. FACILIDADES DE GESTIÓN",
        content: [
          { type: 'paragraph', text: 'El uso de herramientas de gestión es una necesidad para garantizar la funcionalidad y seguridad de las redes. Un protocolo estándar para ello es <strong>SNMP (Simple Network Management Protocol)</strong>, que permite a los administradores monitorizar dispositivos de red (hosts, routers, switches).'},
          { type: 'paragraph', text: 'La ISO desarrolló el modelo <strong>FCAPS</strong> para definir las 5 áreas funcionales de la gestión de redes:'},
          { type: 'flowDiagram', title: 'Modelo de Gestión de Red FCAPS',
              initialNodes: [
                  {id: 'f', position:{x:0, y:0}, data:{label:'Fault Management\n(Gestión de Errores)'}},
                  {id: 'c', position:{x:250, y:0}, data:{label:'Configuration Management\n(Gestión de Configuración)'}},
                  {id: 'a', position:{x:500, y:0}, data:{label:'Accounting Management\n(Gestión de Contabilidad)'}},
                  {id: 'p', position:{x:125, y:150}, data:{label:'Performance Management\n(Gestión de Rendimiento)'}},
                  {id: 's', position:{x:375, y:150}, data:{label:'Security Management\n(Gestión de Seguridad)'}}
              ],
              initialEdges: []
          },
          { type: 'paragraph', text: 'Para ayudar en estas tareas se utilizan plataformas de gestión de red como <code>PRTG Network Monitor</code>, <code>Zabbix</code>, <code>Nagios</code> o <code>Spiceworks</code>.'}
        ]
      },
      {
        id: "t71_s6", shortTitle: "6. Aplicación", title: "6. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
            { type: 'paragraph', text: 'El conocimiento sobre la explotación y administración de sistemas en red local es fundamental en la formación de futuros profesionales de la informática. En el contexto escolar, los estudiantes desarrollan habilidades prácticas en entornos simulados. En el ámbito laboral, este conocimiento es imprescindible para los profesionales encargados del mantenimiento de sistemas en red, garantizando el funcionamiento continuo de las operaciones empresariales.'}
        ]
      },
      {
        id: "t71_s7", shortTitle: "7. Conclusión", title: "7. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'Las redes para aplicar servicios de telecomunicaciones juegan un papel vital en cualquier organización. Actualmente es habitual la utilización de servicios que se ubican en el exterior de la red (servicios en la nube) y que ayudan al administrador a gestionar la red, atendiendo a los eventos que se producen mediante un sistema de alarmas. Los usuarios se benefician de estos servicios remotos de modo transparente, debido al avance que han tenido los protocolos y aplicaciones de capas superiores.'}
        ]
      },
      {
        id: "t71_s8",
        shortTitle: "8. Bibliografía",
        title: "8. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Bonnet, N. (2019). <em>Windows Server. Las bases para administrar y configurar su servidor</em>. Ediciones Eni.' },
              { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Editorial Pearson.' },
              { text: 'Núñez, M. (2019). <em>Sistemas operativos en red</em>. Editorial Síntesis.' },
              { text: 'Feria, J. (2021). <em>Administración de sistemas operativos</em>. Editorial Síntesis.' }
          ]}
        ]
      }
    ]
  };