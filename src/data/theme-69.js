export const theme69Data = {
    id: "theme69",
    name: "TEMA 69/61: Integración de Sistemas",
    title: "TEMA 69 INF / TEMA 61 SAI: INTEGRACIÓN DE SISTEMAS. MEDIOS DE INTERCONEXIÓN. ESTÁNDARES. PROTOCOLOS DE ACCESO A REDES DE ÁREA EXTENSA.",
    version: "Versión: Enero 2025 (Actualizado)",
    sections: [
      {
        id: "t69_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema del bloque de "Redes" se centra en la <strong>integración de sistemas</strong> y los <strong>medios de interconexión</strong>. Estudiaremos cómo diferentes equipos, sistemas operativos y redes se conectan para compartir datos y recursos, así como los estándares y protocolos que lo hacen posible.' },
          { type: 'paragraph', text: 'En la actualidad, es inevitable la presencia de redes que interconectan los recursos informáticos de una organización, incluso entre sedes geográficamente distantes. Garantizar que estos sistemas heterogéneos puedan intercambiar información de forma eficiente y segura es el objetivo de la integración de sistemas.' }
        ]
      },
      {
        id: "t69_s2",
        shortTitle: "2. Integración de Sistemas",
        title: "2. INTEGRACIÓN DE SISTEMAS",
        content: [
          { type: 'paragraph', text: 'La <strong>integración de sistemas</strong> se refiere a la creación de redes mixtas que combinan distintos tipos de dispositivos, sistemas operativos (Windows, Linux, macOS) y tecnologías de conexión. El objetivo es reducir costes y ampliar la cobertura geográfica compartiendo recursos entre redes.' },
          { type: 'subheading', text: '2.1. Sistemas de Ficheros en Red'},
          { type: 'paragraph', text: 'Permiten acceder a ficheros en una máquina remota como si fueran locales, siendo una funcionalidad clave para compartir recursos.'},
          { type: 'list', items: [
              '<strong>NFS (Network File System):</strong> Sistema nativo en entornos UNIX/Linux para compartir carpetas y archivos en una red local.',
              '<strong>SMB/CIFS (Server Message Block / Common Internet File System):</strong> Protocolo de Microsoft para compartir recursos. <strong>Samba</strong> es la implementación de código abierto que permite la interoperabilidad entre equipos Windows y Linux.'
          ]}
        ]
      },
      {
        id: "t69_s2_2",
        shortTitle: "2.2. Medios de Interconexión",
        title: "2.2. MEDIOS DE INTERCONEXIÓN. ESTÁNDARES",
        content: [
          { type: 'paragraph', text: 'Existen diversos dispositivos para ampliar o interconectar redes. Se clasifican según la capa del modelo OSI en la que operan:'},
          { type: 'definitionList', items: [
              { term: '2.2.1. Repetidores (Capa 1):', definition: 'Regeneran y amplifican la señal eléctrica para extender la longitud de un cable de red. No segmentan la red.' },
              { term: '2.2.2. Concentradores (Hubs) (Capa 1):', definition: 'Retransmiten cada paquete que reciben por uno de sus puertos a todos los demás. Crean un único dominio de colisión y están obsoletos.' },
              { term: '2.2.3. Puentes (Bridges) (Capa 2):', definition: 'Interconectan dos segmentos de red, permitiendo el paso de tráfico solo si las direcciones MAC de origen y destino no pertenecen al mismo segmento. Han sido reemplazados por los switches.' },
              { term: '2.2.4. Conmutadores (Switches) (Capa 2):', definition: 'Son una evolución de los puentes, con múltiples puertos. Identifican la dirección MAC de destino y conmutan la trama exclusivamente al puerto correspondiente, segmentando la red en múltiples dominios de colisión. Son el núcleo de las redes LAN modernas.' },
              { term: '2.2.5. Enrutadores (Routers) (Capa 3):', definition: 'Interconectan redes de área local, tomando decisiones de encaminamiento basadas en direcciones IP (lógicas) para dirigir los paquetes por la mejor ruta posible.' },
              { term: '2.2.6. Pasarelas (Gateways) (Capa 4 a 7):', definition: 'Permiten la interoperabilidad entre redes con tecnologías y protocolos distintos, realizando conversión de protocolos para garantizar la compatibilidad.' }
          ]}
        ]
      },
      {
        id: "t69_s3",
        shortTitle: "3. Protocolos de Acceso WAN",
        title: "3. PROTOCOLOS DE ACCESO A REDES DE ÁREA EXTENSA",
        content: [
          { type: 'paragraph', text: 'Existen diversas tecnologías para la creación de redes de área extensa (WAN). Aunque algunas son obsoletas, en su momento supusieron grandes hitos:'},
          { type: 'definitionList', items: [
              { term: 'A. X.25:', definition: 'Una de las primeras arquitecturas de conmutación de paquetes, orientada a conexión y fiable. Fue superada por tecnologías más rápidas.' },
              { term: 'B. Frame Relay:', definition: 'Más simplificada y eficiente que X.25, funcionaba con circuitos virtuales. Actualmente en desuso.' },
              { term: 'C. ATM (Asynchronous Transfer Mode):', definition: 'Tecnología de conmutación de paquetes basada en celdas de tamaño fijo. Ofrecía alta calidad de servicio (QoS) pero ha sido desplazada por redes IP/MPLS.' },
              { term: 'D. RDSI (Red Digital de Servicios Integrados):', definition: 'Sistema de conmutación de circuitos para transmitir voz y datos sobre líneas telefónicas digitales.' },
              { term: 'E. PPP (Point-to-Point Protocol):', definition: 'Protocolo de capa de enlace para establecer una comunicación directa entre dos nodos. Usado históricamente para conexiones a Internet vía módem y hoy en día en variantes como <strong>PPPoE (PPP over Ethernet)</strong>.' },
              { term: 'F. HDLC (High-Level Data Link Control):', definition: 'Protocolo de enlace de datos punto a punto en el que se basan muchos otros, incluyendo Frame Relay.'},
              { term: 'G. MPLS (MultiProtocol Label Switching):', definition: 'Tecnología clave en las redes WAN modernas. Unifica el transporte de datos para redes basadas en circuitos y paquetes. Permite crear servicios de <strong>QoS (Calidad de Servicio)</strong> y <strong>VPNs (Redes Privadas Virtuales)</strong> de forma eficiente sobre redes IP.'}
          ]}
        ]
      },
      {
        id: "t69_s4",
        shortTitle: "4. Aplicación",
        title: "4. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'El conocimiento sobre la integración de sistemas, medios de interconexión y estándares es esencial tanto en el ámbito educativo como en el profesional.' },
          { type: 'paragraph', text: 'En el contexto escolar, los estudiantes desarrollan habilidades clave en la configuración de sistemas que interactúan entre sí, aprendiendo a utilizar herramientas como configuradores de routers y sistemas de simulación. En el ámbito laboral, este conocimiento se aplica directamente a la implementación y gestión de infraestructuras tecnológicas eficientes y seguras, garantizando la conectividad y la interoperabilidad.' }
        ]
      },
      {
        id: "t69_s5",
        shortTitle: "5. Conclusión",
        title: "5. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'La necesidad de intercambiar información entre equipos ubicados a grandes distancias ha impulsado la aparición de diversas tecnologías de interconexión. Con la evolución tecnológica, las fronteras entre LAN, MAN y WAN se han difuminado. Las tecnologías de red de área local, como Ethernet, buscan abarcar alcances cada vez mayores, mientras que los nuevos desarrollos en WAN, como <strong>MPLS</strong>, se integran con las redes locales para proporcionar un tránsito más sencillo del entorno local al global, todo bajo el paraguas de la tecnología IP.' }
        ]
      },
      {
        id: "t69_s6",
        shortTitle: "6. Bibliografía",
        title: "6. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
            { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Editorial Pearson.' },
            { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' },
            { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
            { text: 'Núñez, M. (2019). <em>Sistemas operativos en red</em>. Editorial Síntesis.' },
            { text: 'ITU (International Telecommunication Union)', url: 'https://www.itu.int' },
            { text: 'IEEE 802 Standards Group', url: 'https://www.ieee802.org' }
          ]}
        ]
      }
    ]
  };