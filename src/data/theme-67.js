export const theme67Data = {
    id: "theme67",
    name: "TEMA 67: Redes de Área Local",
    title: "TEMA 67 INFORMÁTICA - REDES DE ÁREA LOCAL. COMPONENTES. TOPOLOGÍAS. ESTÁNDARES. PROTOCOLOS.",
    version: "Versión: Noviembre 2024 (Actualizado)",
    sections: [
      {
        id: "t67_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema se ubica en el bloque temático de "Redes" y se centra en las <strong>Redes de Área Local (LAN)</strong>. Realizaremos una presentación general sobre su importancia, componentes, topologías, y los principales estándares y protocolos en los que se basan.' },
          { type: 'paragraph', text: 'Las redes de área local, mediante sistemas de cableado y equipos de interconexión, constituyen el esqueleto de cualquier organización moderna. Permiten compartir recursos, ofrecer servicios y asegurar la disponibilidad de la información, siendo una parte fundamental del sistema de conexión global que es Internet.' }
        ]
      },
      {
        id: "t67_s2",
        shortTitle: "2. Redes de Área Local",
        title: "2. REDES DE ÁREA LOCAL",
        content: [
          { type: 'paragraph', text: 'Las <strong>Redes de Área Local (LAN)</strong> se establecen como propiedad privada en entornos reducidos (oficinas, edificios) para conectar ordenadores y otros dispositivos a recursos compartidos. Son un conjunto de dispositivos interconectados y autónomos. Sus características fundamentales son su alcance limitado (de metros a pocos kilómetros) y que suelen atender a una única empresa o entidad.' },
          { type: 'paragraph', text: 'Los beneficios de una LAN son:'},
          { type: 'list', items: ['Compartir información y recursos.', 'Mayor flexibilidad de acceso.', 'Reducción de costes.']}
        ]
      },
      {
        id: "t67_s3",
        shortTitle: "3. Componentes",
        title: "3. COMPONENTES",
        content: [
          { type: 'paragraph', text: 'Los componentes esenciales de una red se pueden clasificar en hardware y software.' },
          { type: 'subheading', text: '3.1. Componentes Hardware'},
          { type: 'definitionList', items: [
              {term: 'A) Servidores:', definition: 'Equipos que proporcionan los servicios de red (almacenamiento, web, etc.).'},
              {term: 'B) Estaciones de Trabajo (Clientes):', definition: 'Resto de ordenadores conectados a la red.'},
              {term: 'C) Adaptador de Red (NIC):', definition: 'Tarjeta de red que sirve de interfaz para comunicar un dispositivo con la red.'},
              {term: 'D) Medios de Transmisión:', definition: 'Soporte físico por el que viajan los datos. Pueden ser <strong>guiados</strong> (par trenzado, fibra óptica) o <strong>no guiados</strong> (ondas electromagnéticas).'},
              {term: 'E) Periféricos de Red:', definition: 'Dispositivos compartidos como impresoras o almacenamiento NAS.'},
              {term: 'F) Equipos de Interconexión:', definition: 'Dispositivos para ampliar o interconectar redes. Incluyen: <strong>Repetidores</strong> (Capa 1), <strong>Hubs</strong> (Capa 1), <strong>Puentes</strong> (Capa 2), <strong>Switches</strong> (Capa 2), <strong>Routers</strong> (Capa 3) y <strong>Gateways</strong> (Capas superiores).'},
              {term: 'G) Armarios de Distribución (Racks):', definition: 'Donde se centraliza el cableado de red, paneles de parcheo y equipos de interconexión.'}
          ]},
          { type: 'subheading', text: '3.2. Componentes Software'},
          { type: 'list', items: [
              '<strong>Software de equipo:</strong> Incluye el sistema operativo de red (ej. <code>Windows Server</code>, <code>Ubuntu Server</code>) y las aplicaciones de usuario.',
              '<strong>Software de periféricos:</strong> Firmware específico de routers, switches, impresoras, etc.'
          ]}
        ]
      },
      {
        id: "t67_s4",
        shortTitle: "4. Topologías",
        title: "4. TOPOLOGÍAS",
        content: [
          { type: 'paragraph', text: 'La topología de una red es la distribución en la que se encuentran dispuestos sus elementos. Puede ser <strong>física</strong> (distribución real) o <strong>lógica</strong> (cómo se percibe la conexión). Las principales topologías físicas son:' },
          { type: 'table', headers: ['Topología', 'Descripción'], rows: [
              ['Bus', 'Todos los nodos se conectan a un único medio de transmisión común. Obsoleta en LAN modernas.'],
              ['Anillo', 'Los nodos se conectan uno a continuación de otro en un bucle cerrado. Usada por Token Ring, hoy en desuso.'],
              ['Estrella', 'Todos los nodos se conectan a un dispositivo central (switch). Es la topología física más utilizada en las redes LAN actuales.'],
              ['Árbol', 'Estructura jerárquica de topologías en estrella interconectadas.'],
              ['Malla Completa', 'Cada nodo está conectado a todos los demás, ofreciendo máxima redundancia. Inviable para LAN por su coste.'],
              ['Híbrida', 'Combinación de dos o más de las topologías anteriores.']
          ]}
        ]
      },
      {
        id: "t67_s5",
        shortTitle: "5. Estándares",
        title: "5. ESTÁNDARES",
        content: [
            { type: 'paragraph', text: 'Los estándares en redes LAN aseguran la compatibilidad, eficiencia y seguridad entre dispositivos de distintos fabricantes. La mayoría de los estándares importantes han sido desarrollados por el <strong>IEEE</strong> dentro de la familia <strong>IEEE 802</strong>.'},
            { type: 'list', items: [
                '<strong>IEEE 802.3 (Ethernet):</strong> El estándar más utilizado para redes LAN cableadas. Define los tipos de cables (UTP, fibra) y velocidades, desde 10 Mbps hasta 400 Gbps o más.',
                '<strong>IEEE 802.11 (Wi-Fi):</strong> Estándar para redes inalámbricas (WLAN). Con versiones como <code>802.11ax</code> (Wi-Fi 6/6E) y la emergente <code>802.11be</code> (Wi-Fi 7), ha incrementado enormemente su velocidad y eficiencia.',
                '<strong>IEEE 802.1Q (VLAN):</strong> Permite segmentar una red física en múltiples redes virtuales lógicas, mejorando la seguridad y el rendimiento.',
                '<strong>ANSI/TIA-568:</strong> Estándar para el cableado estructurado de edificios, asegurando que la instalación física soporte las tecnologías de red.',
                '<strong>PoE (Power over Ethernet) - IEEE 802.3af/at/bt:</strong> Permite que los cables Ethernet suministren energía eléctrica a dispositivos como cámaras IP, teléfonos VoIP o puntos de acceso.'
            ]}
        ]
      },
      {
        id: "t67_s6",
        shortTitle: "6. Protocolos",
        title: "6. PROTOCOLOS",
        content: [
            { type: 'paragraph', text: 'Un protocolo es un conjunto de reglas o normas que rigen la comunicación entre dos o más equipos. Mientras que los estándares definen el "cómo" físico, los protocolos definen el "cómo" lógico.' },
            { type: 'paragraph', text: 'El conjunto de protocolos que se ha convertido en el estándar de facto para las redes LAN e Internet es la familia <strong>TCP/IP</strong>, que surgió de la red ARPANET.' }
        ]
      },
      {
        id: "t67_s7",
        shortTitle: "7. Recursos",
        title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
          { type: 'paragraph', text: 'Existen varias herramientas software para el diseño y simulación de redes que permiten crear topologías y configurar dispositivos:'},
          { type: 'list', items: [
              '<strong>Cisco Packet Tracer:</strong> Herramienta de simulación muy popular para aprender sobre redes y configuración de dispositivos Cisco.',
              '<strong>GNS3 (Graphical Network Simulator-3):</strong> Un emulador de red más avanzado que permite usar imágenes reales de sistemas operativos de red.',
              '<strong>Wireshark:</strong> Analizador de protocolos de red indispensable para examinar el tráfico y diagnosticar problemas.'
          ]}
        ]
      },
      {
        id: "t67_s8",
        shortTitle: "8. Aplicación",
        title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'El conocimiento de las redes de área local es esencial en el entorno educativo y profesional. Los estudiantes desarrollan competencias para la configuración y gestión de redes, familiarizándose con componentes como routers, switches y puntos de acceso. En el contexto laboral, este conocimiento permite a los profesionales implementar y mantener redes LAN eficientes y seguras, optimizando la velocidad, seguridad y fiabilidad de la red.'}
        ]
      },
      {
        id: "t67_s9",
        shortTitle: "9. Conclusión",
        title: "9. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'Las redes de área local (LAN) son fundamentales para el funcionamiento eficiente de cualquier organización. La elección de la infraestructura adecuada (topología, componentes, estándares y protocolos) implica decisiones críticas que van más allá del coste inicial. Este conocimiento es clave para diseñar redes locales robustas y seguras, capaces de adaptarse a los cambios tecnológicos y a los objetivos de cada entorno organizacional.'}
        ]
      },
      {
        id: "t6b_s10",
        shortTitle: "10. Bibliografía",
        title: "10. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Editorial Pearson.' },
              { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'Cisco Packet Tracer', url: 'https://www.netacad.com/courses/packet-tracer' },
              { text: 'ITU (International Telecommunication Union)', url: 'https://www.itu.int' },
              { text: 'IEEE 802 LAN/MAN Standards Committee', url: 'https://www.ieee802.org' }
          ]}
        ]
      }
    ]
  };