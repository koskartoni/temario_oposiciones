export const theme61Data = {
    id: "theme61",
    name: "TEMA 61: Redes y Servicios",
    title: "TEMA 61 INFORMÁTICA - REDES Y SERVICIOS DE COMUNICACIONES.",
    version: "Versión: Octubre 2024 (Actualizado)",
    sections: [
      {
        id: "t61_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema se ubica en el bloque temático de "Redes" y realiza una revisión general del concepto de redes de ordenadores, describiendo sus características, tipos, topologías, componentes y los servicios de comunicaciones más importantes.' },
          { type: 'paragraph', text: 'La finalidad principal de una red es <strong>compartir recursos e información</strong>, ofrecer servicios, asegurar la confiabilidad y aumentar la velocidad de transmisión. Hoy en día, las redes forman un sistema de conexión global llamado <strong>Internet</strong>, que se define como una red de redes de ámbito mundial basada en la familia de protocolos <strong>TCP/IP</strong>.' }
        ]
      },
      {
        id: "t61_s2",
        shortTitle: "2. Redes",
        title: "2. REDES",
        content: [
          { type: 'paragraph', text: 'Podemos definir una <strong>red</strong> como un sistema de comunicación que permite conectar ordenadores y otros dispositivos, con el fin de permitir a sus usuarios el acceso a una serie de servicios y recursos comunes.' },
          { type: 'subheading', text: '2.1. Características y Beneficios'},
          { type: 'list', items: ['Permiten compartir información.', 'Permiten compartir recursos (impresoras, almacenamiento, etc.).', 'Permiten mayor flexibilidad al acceder a recursos desde diferentes nodos.', 'Permiten reducir costes al centralizar recursos.']}
        ]
      },
      {
        id: "t61_s2_2", shortTitle: "2.2. Tipos de Redes", title: "2.2. TIPOS DE REDES",
        content: [
          { type: 'paragraph', text: 'Existen distintos criterios para clasificar las redes:'},
          { type: 'definitionList', items: [
              { term: 'A) Según su Tecnología de Transmisión:', subItems: ['<strong>Redes de difusión (broadcast):</strong> El medio de transmisión es compartido por todos los nodos. Un mensaje enviado por un nodo es recibido por todos los demás.', '<strong>Redes punto a punto:</strong> La información viaja a través de enlaces dedicados entre pares de nodos. Para llegar a su destino, puede que necesite pasar por nodos intermedios.'] },
              { term: 'B) Según su Tamaño:', subItems: ['<strong>PAN (Personal Area Network):</strong> Redes de corto alcance para conectar dispositivos personales (ej. <code>Bluetooth</code>, <code>ZigBee</code>).', '<strong>LAN (Local Area Network):</strong> Redes de área local que proporcionan servicios en una organización, centro o casa.', '<strong>MAN (Metropolitan Area Network):</strong> Redes de área metropolitana que cubren una población.', '<strong>WAN (Wide Area Networks):</strong> Redes de área extensa que abarcan un país, un continente o incluso varios.'] },
              { term: 'C) Según su Relación Funcional:', subItems: ['<strong>Redes P2P (Peer-to-Peer):</strong> No existe jerarquía; todos los equipos pueden actuar como cliente y servidor.', '<strong>Redes Cliente/Servidor:</strong> Los equipos tienen un rol definido. Un servidor proporciona los servicios y los clientes los consumen.']}
          ]}
        ]
      },
      {
        id: "t61_s2_3",
        shortTitle: "2.3. Topologías",
        title: "2.3. TOPOLOGÍAS",
        content: [
          { type: 'paragraph', text: 'La <strong>topología física</strong> de una red es la distribución física de sus elementos y los medios para interconectarlos.' },
          { type: 'table', headers: ['Topología', 'Descripción'], rows: [
              ['Bus', 'Todos los nodos se conectan directamente a un medio de transmisión común (bus). Típica del cable coaxial antiguo.'],
              ['Anillo', 'Los nodos se conectan uno a continuación de otro, formando un anillo cerrado.'],
              ['Estrella', 'Todos los nodos se conectan a un dispositivo central (como un switch o un router) que controla el flujo. Es la topología más común en las redes LAN actuales.'],
              ['Árbol', 'Una estructura jerárquica de topologías en estrella interconectadas.'],
              ['Malla Completa', 'Cada nodo está conectado a todos los demás, permitiendo una máxima redundancia y tolerancia a fallos.'],
              ['Híbrida', 'Una combinación de dos o más de las topologías anteriores.']
          ]}
        ]
      },
      {
        id: "t61_s2_4", shortTitle: "2.4. Componentes", title: "2.4. COMPONENTES",
        content: [
          { type: 'paragraph', text: 'Los componentes esenciales en una red de transmisión de datos son:'},
          { type: 'flowDiagram', title: 'Comunicación de Datos',
              initialNodes: [
                  {id: 'origen', position: {x:0, y:50}, data: {label: 'Origen de la Información\n(ETD)'}},
                  {id: 'dce1', position: {x:200, y:50}, data: {label: 'DCE'}},
                  {id: 'canal', position: {x:350, y:50}, data: {label: 'CANAL'}, style: {backgroundColor:'#38d18a'}},
                  {id: 'dce2', position: {x:500, y:50}, data: {label: 'DCE'}},
                  {id: 'destino', position: {x:700, y:50}, data: {label: 'Destino de la Información\n(ETD)'}}
              ],
              initialEdges: [
                  {id:'e1', source:'origen', target:'dce1'}, {id:'e2', source:'dce1', target:'canal', animated:true},
                  {id:'e3', source:'canal', target:'dce2', animated:true}, {id:'e4', source:'dce2', target:'destino'}
              ]
          },
          { type: 'subheading', text: 'A. Componentes Hardware'},
          { type: 'list', items: ['<strong>Servidores:</strong> Equipos que proporcionan servicios de red (archivos, web, etc.).', '<strong>Estaciones de trabajo (Clientes):</strong> Ordenadores que acceden a los servicios de la red.', '<strong>Adaptadores de red (NIC):</strong> Interfaz que conecta un dispositivo a la red.', '<strong>Medio de transmisión:</strong> Soporte físico por el que viajan los datos (par trenzado, fibra óptica, ondas de radio).', '<strong>Equipos de interconexión:</strong> Repetidores, hubs, puentes, switches y routers.']},
          { type: 'subheading', text: 'B. Componentes Software'},
          { type: 'list', items: ['<strong>Software de equipo:</strong> El sistema operativo de red (ej. <code>Windows Server</code>, <code>Ubuntu Server</code>) y las aplicaciones de usuario.', '<strong>Software de periféricos:</strong> Firmware específico de impresoras, routers, switches, etc.']}
        ]
      },
      {
          id: "t61_s3", shortTitle: "3. Internet, Intranet, Extranet", title: "3. COMPARATIVA ENTRE INTERNET, INTRANET Y EXTRANET",
          content: [
              { type: 'paragraph', text: 'Aunque todas utilizan las mismas tecnologías y protocolos (TCP/IP, HTTP), la diferencia radica en el tipo de información y el nivel de acceso.'},
              { type: 'table', headers: ['Red', 'Acceso', 'Usuarios', 'Información'], rows: [
                  ['Internet', 'Público', 'Cualquiera', 'Distribuida'],
                  ['Intranet', 'Privado', 'Miembros de una organización', 'Propietaria'],
                  ['Extranet', 'Semi-público', 'Organizaciones asociadas', 'Compartida entre organizaciones']
              ]},
              { type: 'paragraph', text: 'Una extranet requiere mayor seguridad (certificados digitales, VPNs), mientras que en una intranet suele bastar con usuario y contraseña.'}
          ]
      },
      {
        id: "t61_s4",
        shortTitle: "4. Servicios de Comunicaciones",
        title: "4. SERVICIOS DE COMUNICACIONES",
        content: [
            { type: 'paragraph', text: 'A continuación se especifican algunos de los servicios más importantes ofrecidos en la red:'},
            { type: 'definitionList', items: [
                {term: '4.1. Correo Electrónico:', definition: 'Utiliza protocolos como <code>SMTP</code> (para enviar), y <code>POP3</code> o <code>IMAP</code> (para recibir).'},
                {term: '4.2. FTP (File Transfer Protocol):', definition: 'Permite intercambiar ficheros. Utiliza el puerto 21 para control y el 20 para datos. Versiones seguras: <strong>SFTP</strong> (sobre SSH) y <strong>FTPS</strong> (sobre SSL/TLS).'},
                {term: '4.3. TELNET / SSH:', definition: 'Permiten la conexión remota a otro ordenador en modo terminal. <strong>TELNET</strong> (puerto 23) es inseguro. <strong>SSH</strong> (Secure Shell, puerto 22) es la versión segura y estándar hoy en día.'},
                {term: '4.5. NFS (Network File System):', definition: 'Sistema de archivos distribuido que permite a sistemas de una red local acceder a ficheros remotos como si fueran locales.'},
                {term: '4.6. WWW (World Wide Web):', definition: 'Sistema de hipertexto que funciona sobre Internet. Se utilizan navegadores para acceder a documentos (páginas web) en servidores web.'},
                {term: '4.7. Cloud Computing:', definition: 'Paradigma que permite ofrecer servicios de computación a través de Internet. Se divide en tres modelos principales: <strong>SaaS (Software como Servicio)</strong>, <strong>PaaS (Plataforma como Servicio)</strong> e <strong>IaaS (Infraestructura como Servicio)</strong>.'}
            ]}
        ]
      },
      {
        id: "t61_s5",
        shortTitle: "5. Aplicación",
        title: "5. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'El conocimiento sobre redes y servicios de comunicaciones es crucial tanto en el ámbito educativo como en el profesional. Los estudiantes adquieren competencias en la configuración y administración de servicios de red, comprendiendo cómo se interconectan y comunican los sistemas. Además, se familiarizan con servicios fundamentales como DNS, DHCP, FTP y servicios de correo electrónico, aprendiendo a implementarlos y gestionarlos de acuerdo con los requerimientos específicos de cada red.' },
          { type: 'paragraph', text: 'En el contexto laboral, esta habilidad facilita la implementación de servicios de red robustos y seguros, esenciales para el funcionamiento continuo y eficiente de las organizaciones. Un dominio adecuado de redes y servicios permite a las empresas mantener una infraestructura de red que soporte la colaboración y conectividad.'}
        ]
      },
      {
        id: "t61_s6",
        shortTitle: "6. Conclusión",
        title: "6. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'Uno de los mayores problemas de la información interna de las organizaciones es la variedad de plataformas y sistemas informáticos existentes, y los problemas para compartir información entre ellos. Una de las grandes ventajas de la red Internet es que da cabida a todo tipo de equipos, fabricantes, redes, tecnologías y medios físicos de transmisión, lo que ha permitido un rápido desarrollo y evolución hacia sistemas TIC cada vez más complejos y potentes.' }
        ]
      },
      {
        id: "t61_s7",
        shortTitle: "7. Bibliografía",
        title: "7. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Editorial Pearson.' },
              { text: 'Joyanes, L. (2020). <em>Fundamentos de programación. Algoritmos, estructuras de datos y objetos</em>. Editorial McGraw-Hill.' },
              { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'ITU (International Telecommunication Union)', url: 'https://www.itu.int' },
              { text: 'IEEE 802 Standards', url: 'https://www.ieee802.org' }
          ]}
        ]
      }
    ]
  };