export const theme68Data = {
    id: "theme68",
    name: "TEMA 68/56: Software de Sistemas en Red",
    title: "TEMA 68 INF / TEMA 56 SAI: SOFTWARE DE SISTEMAS EN RED. COMPONENTES. FUNCIONES. ESTRUCTURA",
    version: "Versión: Noviembre 2024 (Actualizado)",
    sections: [
      {
        id: "t68_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema se adentra en el <strong>software</strong> presente en los sistemas en red, detallando sus componentes, funciones y estructura. Mientras que los temas anteriores se centraron en el hardware y los protocolos, ahora exploraremos el software que hace posible la operación y administración de las redes.' },
          { type: 'paragraph', text: 'Los sistemas en red, mediante cableado, equipos de interconexión y otros componentes, constituyen el esqueleto de cualquier organización. Por este motivo, requieren una adecuada sistematización basada en la planificación y un profundo conocimiento de las tecnologías para gestionar la creciente demanda de nuevos servicios.' }
        ]
      },
      {
        id: "t68_s2",
        shortTitle: "2. Sistemas en Red",
        title: "2. SISTEMAS EN RED",
        content: [
          { type: 'paragraph', text: 'Los sistemas en red son conjuntos de dispositivos de computación interconectados y autónomos que pueden intercambiar información. Los beneficios principales son: <strong>compartir información y recursos, mayor flexibilidad y reducción de costes</strong>. Sus componentes esenciales se clasifican en hardware y software.' }
        ]
      },
      {
        id: "t68_s3_1",
        shortTitle: "3.1. Componentes y Estructura",
        title: "3.1. COMPONENTES Y ESTRUCTURA DEL SOFTWARE DE RED",
        content: [
          { type: 'paragraph', text: 'Podemos clasificar el software de red en tres niveles:'},
          { type: 'subheading', text: '3.1.1. Drivers o Controladores de Red'},
          { type: 'paragraph', text: 'Un <strong>controlador o driver</strong> es un programa que permite al sistema operativo interaccionar con un dispositivo hardware (como una tarjeta de red), abstrayendo los detalles físicos. Implementa las funcionalidades de los niveles inferiores del modelo OSI (capas física y de enlace).'},
          { type: 'subheading', text: '3.1.2. Sistema Operativo de Red (NOS)'},
          { type: 'paragraph', text: 'Se consideran SO de red tanto los sistemas que ofrecen servicios (<strong>SO de servidor</strong>) como los que los consumen (<strong>SO de cliente</strong>). Utilizan una arquitectura <strong>cliente/servidor</strong>.'},
          { type: 'flowDiagram', title: 'Arquitectura Cliente-Servidor',
            initialNodes: [
              { id: 'server', position: { x: 250, y: 0 }, data: { label: 'Servidor\n(Ubuntu Server)' }, style:{backgroundColor:'#d13838', color: 'white'} },
              { id: 'c1', position: { x: 0, y: 200 }, data: { label: 'Cliente\n(Windows 11)' } },
              { id: 'c2', position: { x: 250, y: 200 }, data: { label: 'Cliente\n(macOS)' } },
              { id: 'c3', position: { x: 500, y: 200 }, data: { label: 'Cliente\n(Ubuntu Desktop)' } }
            ],
            initialEdges: [
              { id: 'e1', source: 'c1', target: 'server', label: 'Petición', animated: true }, { id: 'e2', source: 'c2', target: 'server', label: 'Petición', animated: true },
              { id: 'e3', source: 'c3', target: 'server', label: 'Petición', animated: true }, { id: 'e4', source: 'server', target: 'c2', label: 'Respuesta' }
            ]
          },
          { type: 'subheading', text: '3.1.3. Gestión y Monitorización de Red'},
          { type: 'paragraph', text: 'Aplicaciones que permiten al administrador supervisar el funcionamiento de la red, resolver problemas y planificar su crecimiento. Ejemplos: software de monitorización como <code>Nagios</code>, <code>Zabbix</code> o <code>Prometheus</code>, y software de configuración de equipos como <code>Cisco IOS</code>.'}
        ]
      },
      {
        id: "t68_s3_2",
        shortTitle: "3.2. Funciones y Servicios",
        title: "3.2. FUNCIONES Y SERVICIOS",
        content: [
          { type: 'paragraph', text: 'Un sistema operativo en red presta varios servicios esenciales para facilitar la comunicación y el uso compartido de recursos. Los más habituales incluyen:' },
          { type: 'list', items: [
              '<strong>Gestión de archivos compartidos:</strong> Permite que múltiples usuarios accedan a archivos en un servidor. Servicios como <code>NFS</code> (Network File System) o <code>SMB/CIFS</code> (implementado por <strong>Samba</strong> en Linux) lo hacen posible.',
              '<strong>Gestión de impresoras y recursos compartidos:</strong> Facilita el acceso a impresoras y otros periféricos en red.',
              '<strong>Autenticación y control de acceso:</strong> Servicios como <code>LDAP</code> o <strong>Active Directory</strong> permiten gestionar usuarios, contraseñas y permisos de forma centralizada.',
              '<strong>Servicios de comunicación:</strong> Correo electrónico, mensajería instantánea o telefonía IP (VoIP).',
              '<strong>Servicio DHCP (Dynamic Host Configuration Protocol):</strong> Asigna automáticamente direcciones IP a los dispositivos de la red.',
              '<strong>Servicio DNS (Domain Name System):</strong> Traduce nombres de dominio a direcciones IP.',
              '<strong>Servidor web:</strong> Permite alojar sitios web o aplicaciones.',
              '<strong>Servidores de bases de datos:</strong> Gestionan el acceso y manipulación de datos desde múltiples clientes.'
          ]}
        ]
      },
      {
        id: "t68_s4",
        shortTitle: "4. SO Local vs. SO en la Nube",
        title: "4. SISTEMA OPERATIVO EN RED LOCAL VS SISTEMA OPERATIVO EN RED EN LA NUBE",
        content: [
          { type: 'paragraph', text: 'La forma tradicional de implementar SO en red era a través de redes locales (<strong>on-premise</strong>). En la actualidad, cada vez más empresas optan por implementar sus sistemas en la <strong>nube</strong>, lo que aporta ventajas e inconvenientes.'},
          { type: 'subheading', text: 'Ventajas y Desventajas'},
          { type: 'table', headers: ['Criterio', 'SO Local (On-Premise)', 'SO en la Nube (Cloud)'], rows: [
              ['Control', '<strong>Total</strong> sobre infraestructura y datos.', 'Dependencia del proveedor de servicios.'],
              ['Coste', '<strong>Altos costes iniciales</strong> (CAPEX), mantenimiento a cargo de la empresa.', '<strong>Costes operativos</strong> (OPEX), pago por uso, sin inversión inicial en hardware.'],
              ['Flexibilidad', 'Menor flexibilidad, limitado a una ubicación física.', '<strong>Alta flexibilidad y movilidad</strong>, acceso desde cualquier lugar.'],
              ['Escalabilidad', 'Limitada y costosa, requiere comprar más hardware.', '<strong>Altamente escalable</strong>, se pueden añadir o quitar recursos bajo demanda.'],
              ['Seguridad', 'Responsabilidad total de la empresa.', 'Responsabilidad compartida, se depende de las medidas del proveedor.'],
              ['Conectividad', 'No depende de Internet para el acceso interno.', '<strong>Dependencia total</strong> de una conexión a Internet fiable.']
          ]}
        ]
      },
      {
        id: "t68_s5",
        shortTitle: "5. AWS y Azure",
        title: "5. AMAZON WEB SERVICES Y MICROSOFT AZURE",
        content: [
          { type: 'paragraph', text: '<strong>Amazon Web Services (AWS)</strong> y <strong>Microsoft Azure</strong> son los dos principales proveedores de servicios en la nube. Ambos ofrecen soluciones robustas para ejecutar sistemas operativos virtualizados (máquinas virtuales), permitiendo a los usuarios desplegar y gestionar SO como Windows y Linux en entornos escalables y seguros.' },
          { type: 'paragraph', text: 'Servicios como <strong>Amazon EC2</strong> (Elastic Compute Cloud) y <strong>Azure Virtual Machines</strong> son la base de la infraestructura como servicio (IaaS), sobre la cual las empresas construyen sus aplicaciones y servicios en la nube.' }
        ]
      },
      {
        id: "t68_s6",
        shortTitle: "6. Aplicación",
        title: "6. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'El conocimiento sobre el software de sistemas en red es esencial tanto en el ámbito educativo como en el profesional. Los estudiantes desarrollan competencias en la instalación, configuración y gestión de software de red, comprendiendo el papel de los sistemas operativos y las herramientas de administración.' },
          { type: 'paragraph', text: 'En el contexto laboral, estas competencias son vitales para implementar y mantener redes que ofrezcan alta eficiencia y seguridad, asegurando la conectividad continua y la escalabilidad que las empresas necesitan para sus operaciones y crecimiento.'}
        ]
      },
      {
        id: "t68_s7",
        shortTitle: "7. Conclusión",
        title: "7. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En este tema se ha presentado una visión global del software de sistemas en red, destacando sus funciones y servicios esenciales para la gestión y operación de redes eficientes. Se ha analizado la importancia de los sistemas operativos de red, tanto tradicionales como en la nube, que permiten la configuración y mantenimiento de infraestructuras físicas y virtuales.'},
          { type: 'paragraph', text: 'Comprender la interacción, diferencias y aplicaciones de estas soluciones es fundamental para optimizar el rendimiento de la red y asegurar la continuidad y escalabilidad de las operaciones, permitiendo a las empresas gestionar sus recursos de forma más eficiente.' }
        ]
      },
      {
        id: "t68_s8",
        shortTitle: "8. Bibliografía",
        title: "8. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Editorial Pearson.' },
              { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' },
              { text: 'Núñez, M. (2019). <em>Sistemas operativos en red</em>. Editorial Síntesis.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'Amazon Web Services (AWS)', url: 'https://aws.amazon.com/es/' },
              { text: 'Microsoft Azure', url: 'https://azure.microsoft.com/es-es/' }
          ]}
        ]
      }
    ]
  };