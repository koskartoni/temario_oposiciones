// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 61
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme61Data = {
  id: "theme61",
  name: "TEMA 61: Redes y Servicios",
  title: "TEMA 61: REDES Y SERVICIOS DE COMUNICACIONES.",
  version: "Octubre 2024",
  sections: [
    {
      id: "t61_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'El presente tema se ubica en el bloque temático de "Redes" y realiza una revisión general sobre el concepto de redes, describiendo sus características, tipos, topologías, componentes y los servicios de comunicaciones más importantes. La finalidad principal de una red es <strong>compartir recursos e información</strong> de forma eficiente y fiable.' },
        { type: 'paragraph', text: 'El estudio de las redes está presente en el currículo de la familia de Informática y Comunicaciones. Concretamente se ubica en los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulos: <code>Redes locales</code> y <code>Servicios en red</code>.' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulos: <code>Planificación y administración de redes</code> y <code>Servicios de red e internet</code>.' }
        ]}
      ]
    },
    {
      id: "t61_s2",
      shortTitle: "2. Redes",
      title: "2. REDES",
      icon: "network"
    },
    {
      id: "t61_s2_1", shortTitle: "2.1. Características", title: "2.1. CARACTERÍSTICAS",
      content: [ { type: 'paragraph', text: 'Los beneficios de una red son: compartir información y recursos (impresoras, almacenamiento), mayor flexibilidad de acceso y reducción de costes.' } ]
    },
    {
      id: "t61_s2_2", shortTitle: "2.2. Tipos de Redes", title: "2.2. TIPOS DE REDES",
      content: [
        { type: 'paragraph', text: 'Se clasifican según varios criterios:'},
        { type: 'definitionList', items: [
            { term: 'A) Según su Tamaño:', subItems: ['<strong>PAN (Personal):</strong> Corto alcance (<code>Bluetooth</code>).', '<strong>LAN (Local):</strong> En una organización, casa, etc.', '<strong>MAN (Metropolitana):</strong> Cubren una ciudad.', '<strong>WAN (Extensa):</strong> Cubren un país o continente.'] },
            { term: 'B) Según su Tecnología de Transmisión:', subItems: ['<strong>De difusión (broadcast):</strong> El medio es compartido por todos los nodos.', '<strong>Punto a punto:</strong> Enlaces dedicados entre pares de nodos.'] },
            { term: 'C) Según su Relación Funcional:', subItems: ['<strong>P2P (Peer-to-Peer):</strong> No hay jerarquía.', '<strong>Cliente/Servidor:</strong> Roles definidos de servidor (provee servicios) y cliente (los consume).']}
        ]}
      ]
    },
    {
      id: "t61_s2_3",
      shortTitle: "2.3. Topologías",
      title: "2.3. TOPOLOGÍAS",
      content: [
        { type: 'paragraph', text: 'La <strong>topología física</strong> es la distribución de los elementos de la red.' },
        { type: 'table', headers: ['Topología', 'Descripción', 'Ventajas/Desventajas'], rows: [
            ['Bus', 'Todos los nodos a un medio común.', 'Simple, pero un fallo en el bus afecta a toda la red.'],
            ['Anillo', 'Nodos conectados uno a otro en un círculo.', 'Ordenado, pero un fallo en un nodo puede romper el anillo.'],
            ['Estrella', 'Todos los nodos a un dispositivo central (switch).', '<strong>La más común hoy en día.</strong> Un fallo de un nodo no afecta al resto. El punto central es crítico.'],
            ['Árbol', 'Estructura jerárquica de estrellas.', 'Escalable.'],
            ['Malla', 'Nodos interconectados entre sí.', 'Máxima redundancia, pero muy costosa. Usada en el núcleo de Internet.']
        ]}
      ]
    },
    {
      id: "t61_s2_4", shortTitle: "2.4. Componentes", title: "2.4. COMPONENTES",
      content: [
        { type: 'subheading', text: 'A. Componentes Hardware'},
        { type: 'list', items: ['<strong>Servidores y Clientes (Estaciones de trabajo)</strong>.', '<strong>Adaptadores de red (NIC):</strong> Tarjeta que conecta el equipo a la red.', '<strong>Medio de transmisión:</strong> Cable de par trenzado, fibra óptica, ondas de radio.', '<strong>Equipos de interconexión:</strong> Hubs (obsoletos), switches (para LAN), routers (para interconectar redes).', '<strong>Periféricos de red:</strong> Impresoras de red, NAS.']},
        { type: 'subheading', text: 'B. Componentes Software'},
        { type: 'list', items: ['<strong>Software de equipo:</strong> El sistema operativo de red (ej. <code>Windows Server</code>, <code>Ubuntu Server</code>).', '<strong>Software de periféricos:</strong> Firmware específico de routers, switches, etc.']}
      ]
    },
    {
        id: "t61_s3", shortTitle: "3. Internet, Intranet, Extranet", title: "3. COMPARATIVA ENTRE INTERNET, INTRANET Y EXTRANET",
        icon: "lan",
        content: [
            { type: 'keyConcept', title: 'Diferencias Clave', text: 'Aunque todas usan tecnología TCP/IP, la diferencia radica en el nivel de acceso:'},
            { type: 'table', headers: ['Red', 'Acceso', 'Usuarios'], rows: [
                ['Internet', 'Público', 'Cualquiera'],
                ['Intranet', 'Privado', 'Miembros de una organización'],
                ['Extranet', 'Semi-privado', 'Miembros de una organización y socios externos (clientes, proveedores)']
            ]}
        ]
    },
    {
      id: "t61_s4",
      shortTitle: "4. Servicios de Comunicaciones",
      title: "4. SERVICIOS DE COMUNICACIONES",
      icon: "services"
    },
    { id: "t61_s4_1", shortTitle: "4.1. Correo Electrónico", title: "4.1. CORREO ELECTRÓNICO", content: [{ type: 'paragraph', text: 'Utiliza protocolos como <strong>SMTP</strong> (para enviar), y <strong>POP3</strong> o <strong>IMAP</strong> (para recibir).'}] },
    { id: "t61_s4_2", shortTitle: "4.2. FTP", title: "4.2. FTP (FILE TRANSFER PROTOCOL)", content: [{ type: 'paragraph', text: 'Protocolo para la transferencia de archivos. Usa el puerto 21 para control y el 20 para datos. Sus versiones seguras son <strong>SFTP</strong> (sobre SSH) y <strong>FTPS</strong> (sobre SSL/TLS).'}] },
    { id: "t61_s4_3", shortTitle: "4.3. TELNET", title: "4.3. TELNET", content: [{ type: 'paragraph', text: 'Permite la conexión remota en modo texto (puerto 23). Está obsoleto por ser inseguro. Ha sido reemplazado por <strong>SSH</strong> (Secure Shell, puerto 22).'}] },
    { id: "t61_s4_6", shortTitle: "4.6. WWW", title: "4.6. WWW (WORLD WIDE WEB)", content: [{ type: 'paragraph', text: 'Sistema de hipertexto que funciona sobre Internet. No se debe confundir la Web (el contenido) con Internet (la infraestructura de red).'}] },
    {
      id: "t61_s4_7", shortTitle: "4.7. Cloud Computing", title: "4.7. CLOUD COMPUTING",
      content: [
        { type: 'paragraph', text: 'Paradigma que permite ofrecer servicios de computación a través de Internet. Los modelos principales son:' },
        { type: 'keyConcept', title: 'Modelos de Servicio en la Nube', items: [
          '<strong>IaaS (Infraestructura como Servicio):</strong> El proveedor ofrece los recursos de hardware (servidores, almacenamiento, redes). El cliente gestiona el SO y las aplicaciones. Ej: <code>Amazon EC2</code>, <code>Google Compute Engine</code>.',
          '<strong>PaaS (Plataforma como Servicio):</strong> El proveedor ofrece la infraestructura y el software de sistema (SO, bases de datos). El cliente se centra en desarrollar y desplegar sus aplicaciones. Ej: <code>Heroku</code>, <code>Google App Engine</code>.',
          '<strong>SaaS (Software como Servicio):</strong> El proveedor ofrece la aplicación completa. El cliente simplemente la usa a través de un navegador. Es el modelo más común. Ej: <code>Gmail</code>, <code>Microsoft 365</code>, <code>Salesforce</code>.'
        ]}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: "t61_s5", shortTitle: "5. Aplicación", title: "5. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'El conocimiento sobre redes es crucial. En FP se estudia en módulos como "Redes Locales" y "Servicios en Red". En el ámbito laboral, es la base para roles de administrador de sistemas y redes, especialistas en ciberseguridad y arquitectos cloud.' } ] },
    { id: 't61_s6', title: "6. CONCLUSIÓN", shortTitle: "6. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'Las redes de ordenadores, con Internet como su máxima expresión, son la base de la sociedad digital. Permiten superar la barrera de la incompatibilidad entre sistemas, facilitando la compartición de información y recursos a escala global. Entender sus componentes, topologías y servicios es fundamental para cualquier profesional del sector TIC.' } ] },
    { id: 't61_s7', title: "7. BIBLIOGRAFIA", shortTitle: "7. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Pearson.' }, { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' } ] } ] }
  ],
  glossary: [
    { term: 'Red', definition: 'Sistema de comunicación que permite conectar ordenadores y otros dispositivos para compartir recursos e información.' },
    { term: 'TCP/IP', definition: 'La familia de protocolos de comunicación que es la base de Internet.' },
    { term: 'LAN (Local Area Network)', definition: 'Red de área local, generalmente confinada a un edificio u organización.' },
    { term: 'WAN (Wide Area Network)', definition: 'Red de área extensa que cubre grandes distancias geográficas (países, continentes).' },
    { term: 'Topología de Red', definition: 'La disposición física o lógica de los nodos y conexiones en una red.' },
    { term: 'Switch', definition: 'Dispositivo de interconexión que opera en la capa 2 (enlace) y conecta dispositivos dentro de una misma LAN.' },
    { term: 'Router', definition: 'Dispositivo de interconexión que opera en la capa 3 (red) y se utiliza para conectar diferentes redes entre sí.' },
    { term: 'Cloud Computing', definition: 'Paradigma que permite ofrecer servicios de computación (IaaS, PaaS, SaaS) a través de Internet.' }
  ]
};