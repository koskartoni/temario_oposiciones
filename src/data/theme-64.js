export const theme64Data = {
    id: "theme64",
    name: "TEMA 64: Explotación y Admin. Sistemas en Red",
    title: "TEMA 64 S.A.I. - EXPLOTACIÓN Y ADMINISTRACIÓN DE SISTEMAS EN RED",
    version: "Versión: Enero 2025 (Actualizado)",
    sections: [
      {
        id: "t64_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema se ubica en el bloque de "Sistemas en Red" y se centra en la <strong>explotación y administración</strong> de estos sistemas. Detallaremos las tareas y responsabilidades necesarias para mantener una red funcional, segura y eficiente.' },
          { type: 'paragraph', text: 'Hoy en día, es impensable que una organización no disponga de una red que proporcione servicios de transporte de datos y multimedia. Por ello, se requiere una planificación y un conocimiento profundo de las TIC para gestionar la creciente demanda de nuevos servicios. Este tema se centrará en detallar la explotación y administración de los sistemas en red.' }
        ]
      },
      {
        id: "t64_s2",
        shortTitle: "2. Sistemas en Red",
        title: "2. SISTEMAS EN RED",
        content: [
          { type: 'paragraph', text: 'Los sistemas en red son conjuntos de dispositivos de computación interconectados y autónomos. La interconexión puede darse a través de medios guiados (par trenzado, fibra óptica) o no guiados (ondas de radio). Sus principales beneficios son:' },
          { type: 'list', items: ['Permitir compartir información y recursos.', 'Permitir mayor flexibilidad de acceso.', 'Permitir reducir costes.']}
        ]
      },
      {
        id: "t64_s3",
        shortTitle: "3. Explotación",
        title: "3. EXPLOTACIÓN DE SISTEMAS EN RED",
        content: [
          { type: 'paragraph', text: 'La <strong>explotación</strong> de un sistema en red es la utilización que un usuario hace de los servicios que la red pone a su disposición. El perfil del usuario puede variar enormemente, desde usuarios finales que usan aplicaciones (navegadores, ofimática) hasta programadores que desarrollan sobre la red.' }
        ]
      },
      {
        id: "t64_s4",
        shortTitle: "4. Administración",
        title: "4. ADMINISTRACIÓN DE SISTEMAS EN RED",
        content: [
          { type: 'paragraph', text: 'La <strong>administración de red</strong> abarca las tareas de gestión y seguridad de todos los componentes de la red (servidores, clientes, hardware, software, cuentas de usuario, etc.). El objetivo es asegurar que el sistema se mantenga <strong>efectivo, fiable y eficiente</strong>.' },
          { type: 'paragraph', text: 'Las tareas más importantes se pueden clasificar en:'},
          { type: 'list', items: ['Instalación y configuración', 'Gestión del almacenamiento', 'Gestión de impresión', 'Gestión del servicio de directorio', 'Servicios de acceso y administración remota', 'Gestión de archivos en red', 'Correo electrónico', 'Otras gestiones (seguridad, procesos, etc.).']}
        ]
      },
      {
        id: "t64_s4_1",
        shortTitle: "4.1. Instalación y Configuración",
        title: "4.1. INSTALACIÓN Y CONFIGURACIÓN",
        content: [
          { type: 'paragraph', text: 'Consiste en la instalación y configuración de todos los elementos de la red (hardware y software) conforme a lo acordado en las fases de análisis y diseño. El resultado es el montaje de la infraestructura de red y la puesta en funcionamiento de los servicios.' }
        ]
      },
      {
        id: "t64_s4_2", shortTitle: "4.2. Almacenamiento", title: "4.2. GESTIÓN DEL ALMACENAMIENTO",
        content: [
            { type: 'paragraph', text: 'Para gestionar grandes volúmenes de datos en red, se utilizan diferentes tecnologías de almacenamiento:'},
            { type: 'list', items: [
                '<strong>DAS (Direct Attached Storage):</strong> Almacenamiento conectado directamente a un servidor. Simple pero no centralizado.',
                '<strong>NAS (Network Attached Storage):</strong> Dispositivo de almacenamiento conectado a la red, que actúa como un servidor de archivos centralizado y fácil de gestionar.',
                '<strong>SAN (Storage Area Network):</strong> Red de alta velocidad dedicada exclusivamente al almacenamiento, conectando servidores con pools de almacenamiento. Ofrece el máximo rendimiento y escalabilidad.'
            ]}
        ]
      },
      {
          id: "t64_s4_3", shortTitle: "4.3. Impresión", title: "4.3. GESTIÓN DE IMPRESIÓN",
          content: [
              { type: 'paragraph', text: 'Las redes permiten compartir impresoras para hacer las inversiones más asequibles. El administrador de red debe configurar y gestionar los servicios de impresión, permitiendo a los clientes conectarse a las impresoras disponibles según sus permisos. Esta labor se simplifica centralizando la gestión en <strong>servidores de impresión</strong>.'}
          ]
      },
      {
          id: "t64_s4_4", shortTitle: "4.4. Directorio", title: "4.4. GESTIÓN DEL SERVICIO DE DIRECTORIO",
          content: [
              { type: 'paragraph', text: 'El <strong>servicio de directorio</strong> almacena y organiza la información sobre los usuarios y recursos de una red, permitiendo una gestión centralizada del acceso. Actúa como una capa de abstracción y como autoridad central para la autenticación.'},
              { type: 'paragraph', text: 'Implementaciones comunes son <strong>Active Directory</strong> de Microsoft (que usa protocolos como LDAP y Kerberos) y <strong>OpenLDAP</strong> en el mundo del software libre. Las principales funciones que gestiona son:'},
              { type: 'list', items: ['Gestión de usuarios y grupos.', 'Gestión de recursos (impresoras, carpetas compartidas).', 'Gestión de directivas y permisos de forma centralizada.']}
          ]
      },
      {
          id: "t64_s4_5", shortTitle: "4.5. Acceso Remoto", title: "4.5. SERVICIOS DE ACCESO Y ADMINISTRACIÓN ELECTRÓNICA",
          content: [
              { type: 'paragraph', text: 'Permiten a los administradores gestionar sistemas desde ubicaciones distintas:'},
              { type: 'definitionList', items: [
                  { term: 'a. Terminales en modo texto:', definition: 'Se instala un servidor <strong>SSH (Secure Shell)</strong> que permite el acceso a la línea de comandos de un equipo de forma remota y segura. Ejemplos de servidores: <code>OpenSSH</code> en Linux, <code>freesshd</code> en Windows.'},
                  { term: 'b. Escritorio remoto:', definition: 'Permite conectarse al entorno gráfico de un equipo. Ejemplos: <strong>Remote Desktop Services (RDP)</strong> en Windows, y <strong>VNC</strong> o <strong>xrdp</strong> en Linux.'}
              ]}
          ]
      },
      {
          id: "t64_s4_6", shortTitle: "4.6. Archivos en Red", title: "4.6. GESTIÓN DE ARCHIVOS EN RED",
          content: [
              { type: 'paragraph', text: 'Los sistemas de ficheros en red permiten compartir recursos, especialmente archivos e impresoras:'},
              { type: 'list', items: [
                  '<strong>NFS (Network File System):</strong> Sistema de archivos distribuido para entornos de red local, principalmente entre sistemas Linux/Unix.',
                  '<strong>SMB (Server Message Block):</strong> Protocolo para compartir recursos en redes Windows. Su implementación libre, <strong>Samba</strong>, permite la interoperabilidad con sistemas Linux/Unix.'
              ]}
          ]
      },
      {
        id: "t64_s4_7",
        shortTitle: "4.7. Correo Electrónico",
        title: "4.7. CORREO ELECTRÓNICO",
        content: [
          { type: 'paragraph', text: 'El correo electrónico es una de las aplicaciones de red más utilizadas en las redes corporativas. Una aplicación completa consta de un <strong>cliente</strong> (interfaz de usuario) y un <strong>servidor</strong>. El servidor gestiona los mensajes y los buzones de los usuarios, y puede necesitar retransmitir mensajes a otras redes.'},
          { type: 'paragraph', text: 'El administrador de red se encarga de la gestión de cuentas de correo y de velar por el correcto funcionamiento del servicio.'}
        ]
      },
      {
        id: "t64_s4_8",
        shortTitle: "4.8. Otras Gestiones",
        title: "4.8. OTRAS GESTIONES",
        content: [
          { type: 'paragraph', text: 'Otras tareas de administración de un sistema en red son:'},
          { type: 'list', items: ['<strong>Gestión de la seguridad:</strong> Configuración de firewalls, sistemas de detección de intrusos, políticas de contraseñas, etc.', '<strong>Gestión de procesos:</strong> Monitorización del rendimiento y los recursos consumidos por los servicios de red.', '<strong>Backups y recuperación ante desastres:</strong> Implementación de planes de copia de seguridad para garantizar la continuidad del negocio.']}
        ]
      },
      {
        id: "t64_s5",
        shortTitle: "5. Aplicación",
        title: "5. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'El conocimiento sobre la explotación y administración de sistemas en red es fundamental tanto en el ámbito educativo como en el profesional.'},
          { type: 'paragraph', text: 'En el contexto escolar, los estudiantes desarrollan habilidades prácticas al aprender a gestionar, monitorizar y optimizar sistemas en red. A través de actividades prácticas, se enfrentan a tareas clave como la configuración de servicios, la administración de permisos de usuario y la garantía de la fiabilidad del sistema.'},
          { type: 'paragraph', text: 'En el ámbito laboral, este conocimiento es imprescindible para los profesionales encargados del mantenimiento de sistemas en red (SysAdmins, DevOps, etc.). Una administración eficiente garantiza el funcionamiento continuo de las redes, apoyando las operaciones empresariales y minimizando tiempos de inactividad.'}
        ]
      },
      {
        id: "t64_s6",
        shortTitle: "6. Conclusión",
        title: "6. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'Las redes son de vital importancia para el correcto funcionamiento de una organización. Actualmente es habitual la utilización de servicios que se ubican en el exterior de la red (servicios en la nube), que ayudan al administrador a gestionar la red. Los usuarios se benefician de estos servicios remotos de modo transparente, debido al avance que han tenido los protocolos y aplicaciones de capas superiores.'}
        ]
      },
      {
        id: "t64_s7",
        shortTitle: "7. Bibliografía",
        title: "7. BIBLIOGRAFÍA",
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