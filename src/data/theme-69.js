// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 69/61
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme69Data = {
  id: "theme69",
  name: "TEMA 69/61: Integración de Sistemas",
  title: "TEMA 69/61: INTEGRACIÓN DE SISTEMAS. MEDIOS DE INTERCONEXIÓN. ESTÁNDARES. PROTOCOLOS DE ACCESO A REDES DE ÁREA EXTENSA.",
  version: "Enero 2025",
  sections: [
    {
      id: "t69_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema del bloque de "Redes" se centra en la <strong>integración de sistemas</strong>, los <strong>medios de interconexión</strong> que la hacen posible, y los <strong>protocolos y estándares</strong> que garantizan la comunicación en redes de área extensa (WAN).' },
        { type: 'paragraph', text: 'El estudio de la integración de sistemas y medios de interconexión está presente en el currículo de la familia profesional de Informática y Comunicaciones. Concretamente, se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Administración de sistemas operativos</code>.' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Sistemas operativos en red</code>.' }
        ]}
      ]
    },
    {
      id: "t69_s2",
      shortTitle: "2. Integración de Sistemas",
      title: "2. INTEGRACIÓN DE SISTEMAS",
      icon: "integration"
    },
    {
      id: "t69_s2_1", shortTitle: "2.1. Sistemas de Ficheros en Red", title: "2.1. SISTEMAS DE FICHEROS EN RED",
      content: [
        { type: 'paragraph', text: 'Permiten acceder a ficheros en una máquina remota como si fueran locales, siendo una funcionalidad clave para la integración de sistemas heterogéneos.'},
        { type: 'keyConcept', title: 'NFS vs. SMB/Samba', items: [
          '<strong>NFS (Network File System):</strong> Es el sistema nativo en entornos <strong>UNIX/Linux</strong> para compartir carpetas y archivos.',
          '<strong>SMB (Server Message Block):</strong> Es el protocolo nativo de <strong>Microsoft Windows</strong>. Su implementación de código abierto, <strong>Samba</strong>, es crucial porque permite que equipos Linux y Windows puedan compartir archivos e impresoras de forma transparente en la misma red.'
        ]}
      ]
    },
    {
      id: "t69_s2_2",
      shortTitle: "2.2. Medios de Interconexión",
      title: "2.2. MEDIOS DE INTERCONEXIÓN. ESTÁNDARES",
      content: [
        { type: 'paragraph', text: 'Existen diversos dispositivos para ampliar o interconectar redes, clasificados según la capa del modelo OSI en la que operan:'},
        { type: 'table', headers: ['Dispositivo', 'Capa OSI', 'Función Principal'], rows: [
          ['Repetidor / Hub', '1 (Física)', 'Regenera la señal / Retransmite a todos los puertos. Obsoletos.'],
          ['Puente / Switch', '2 (Enlace)', 'Interconectan segmentos de red. El Switch es un "puente multipuerto" que conmuta tramas basándose en direcciones MAC. Es el núcleo de las LAN.'],
          ['Router', '3 (Red)', 'Interconecta redes diferentes (ej. LAN con Internet). Toma decisiones de encaminamiento basadas en direcciones IP.'],
          ['Gateway', '4-7 (Transporte a Aplicación)', 'Permite la comunicación entre redes con protocolos y tecnologías totalmente distintas, realizando conversión entre ellas.']
        ]}
      ]
    },
    {
      id: "t69_s3",
      shortTitle: "3. Protocolos de Acceso WAN",
      title: "3. PROTOCOLOS DE ACCESO A REDES DE ÁREA EXTENSA (WAN)",
      icon: "wan",
      content: [
        { type: 'paragraph', text: 'Son las tecnologías para la creación de redes de área extensa. Aunque muchas son obsoletas, fueron hitos en la comunicación:'},
        { type: 'definitionList', items: [
            { term: 'A. X.25:', definition: 'Una de las primeras arquitecturas de conmutación de paquetes, fiable pero lenta. Obsoleta.' },
            { term: 'B. Frame Relay:', definition: 'Más eficiente que X.25, basada en circuitos virtuales. Obsoleta.' },
            { term: 'C. ATM (Asynchronous Transfer Mode):', definition: 'Conmutación de paquetes basada en celdas de tamaño fijo. Ofrecía gran calidad de servicio (QoS) pero ha sido desplazada por redes IP/MPLS.' },
            { term: 'E. PPP (Point-to-Point Protocol):', definition: 'Protocolo de capa de enlace para establecer una comunicación directa entre dos nodos. Su variante <strong>PPPoE (PPP over Ethernet)</strong> es aún muy utilizada para conexiones de banda ancha (ADSL/Fibra).' },
            { term: 'H. MPLS (MultiProtocol Label Switching):', definition: 'Tecnología clave en las redes WAN modernas. Unifica el transporte de datos para redes basadas en circuitos y paquetes, permitiendo crear servicios de <strong>QoS</strong> y <strong>VPNs</strong> de forma eficiente sobre redes IP.'}
        ]},
        { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
          { question: '¿Qué dispositivo se utiliza para conectar dos redes diferentes, como tu casa e Internet, tomando decisiones basadas en direcciones IP?', options: ['Switch', 'Router', 'Hub'], correctAnswerIndex: 1 },
          { question: 'Para compartir una carpeta entre un PC con Windows y un servidor con Linux en la misma red, ¿qué servicio instalarías en el servidor Linux?', options: ['NFS', 'Samba (SMB)', 'SSH'], correctAnswerIndex: 1 }
        ]}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: 't69_s4', title: "4. APLICACIÓN DE LOS CONTENIDOS", shortTitle: "4. Aplicación", icon: "application", content: [ { type: 'paragraph', text: 'El conocimiento sobre la integración de sistemas es esencial. En FP, los estudiantes configuran sistemas que interactúan, eligen medios de interconexión y usan herramientas de simulación como <strong>Cisco Packet Tracer</strong>. En lo laboral, es crucial para gestionar infraestructuras eficientes y seguras, y optimizar el rendimiento de redes mixtas y distribuidas.' } ] },
    { id: 't69_s5', title: "5. CONCLUSIÓN", shortTitle: "5. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'La necesidad de intercambiar información ha impulsado la aparición de diversas tecnologías de interconexión. Hoy, las fronteras entre LAN y WAN se difuminan. Tecnologías como Ethernet buscan mayor alcance, mientras que desarrollos WAN como MPLS se integran con las redes locales para proporcionar un tránsito global sencillo, todo bajo el paraguas de la tecnología IP.' } ] },
    { id: 't69_s6', title: "6. BIBLIOGRAFÍA", shortTitle: "6. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Pearson.' }, { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' }, { text: 'Núñez, M. (2019). <em>Sistemas operativos en red</em>. Editorial Síntesis.' } ] } ] }
  ],
  glossary: [
    { term: 'Integración de Sistemas', definition: 'Creación de redes mixtas que combinan distintos tipos de dispositivos, sistemas operativos y tecnologías de conexión.' },
    { term: 'Medios de Interconexión', definition: 'Dispositivos hardware que se utilizan para conectar y comunicar diferentes segmentos de red o redes completas.' },
    { term: 'Switch', definition: 'Dispositivo de Capa 2 que conecta equipos en una LAN, reenviando tramas solo al puerto de destino basándose en direcciones MAC.' },
    { term: 'Router', definition: 'Dispositivo de Capa 3 que interconecta redes y dirige el tráfico entre ellas basándose en direcciones IP.' },
    { term: 'Gateway', definition: 'Dispositivo que permite la comunicación entre redes con protocolos o arquitecturas incompatibles, actuando como traductor.' },
    { term: 'WAN (Wide Area Network)', definition: 'Red de área extensa que conecta redes geográficamente dispersas.' },
    { term: 'NFS (Network File System)', definition: 'Protocolo para compartir archivos de forma nativa en sistemas UNIX/Linux.' },
    { term: 'SMB (Server Message Block)', definition: 'Protocolo para compartir archivos y recursos en redes de Microsoft Windows. Samba es su implementación libre para Linux.' },
    { term: 'MPLS (MultiProtocol Label Switching)', definition: 'Técnica de reenvío de paquetes en redes WAN que mejora la velocidad y permite crear servicios avanzados como VPNs y QoS.' }
  ]
};