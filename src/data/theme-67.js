// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 67
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme67Data = {
  id: "theme67",
  name: "TEMA 67: Redes de Área Local",
  title: "TEMA 67: REDES DE ÁREA LOCAL. COMPONENTES. TOPOLOGÍAS. ESTÁNDARES. PROTOCOLOS.",
  version: "Noviembre 2024",
  sections: [
    {
      id: "t67_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema del bloque de "Redes" se centra en las <strong>Redes de Área Local (LAN)</strong>. Realizaremos una presentación general sobre su importancia, componentes, topologías, y los principales estándares y protocolos en los que se basan.' },
        { type: 'paragraph', text: 'El estudio de las redes de área local está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Redes locales</code>.' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Planificación y administración de redes</code>.' }
        ]}
      ]
    },
    {
      id: "t67_s2",
      shortTitle: "2. Redes de Área Local",
      title: "2. REDES DE ÁREA LOCAL (LAN)",
      icon: "lan",
      content: [
        { type: 'paragraph', text: 'Una <strong>LAN (Local Area Network)</strong> es una red de propiedad privada en un entorno reducido (oficina, edificio) para conectar ordenadores y otros dispositivos a recursos compartidos. Sus características son su alcance limitado (pocos kilómetros) y que suelen atender a una única organización.' }
      ]
    },
    {
      id: "t67_s3",
      shortTitle: "3. Componentes",
      title: "3. COMPONENTES",
      icon: "components",
      content: [
        { type: 'subheading', text: '3.1. Componentes Hardware'},
        { type: 'definitionList', items: [
            {term: 'Servidores y Estaciones de Trabajo (Clientes).', definition: ''},
            {term: 'Adaptador de Red (NIC):', definition: 'Tarjeta que conecta un equipo a la red (Ethernet o Wi-Fi).'},
            {term: 'Medios de Transmisión:', definition: 'Medio físico por el que viajan los datos, como el <strong>cable de par trenzado</strong> o la <strong>fibra óptica</strong>.'},
            {term: 'Equipos de Interconexión:', definition: 'Dispositivos clave como <strong>switches</strong> (para conectar equipos dentro de la LAN) y <strong>routers</strong> (para interconectar la LAN con otras redes, como Internet).'},
            {term: 'Armarios de Distribución (Racks):', definition: 'Donde se centraliza el cableado y los equipos de interconexión.'}
        ]},
        { type: 'subheading', text: '3.2. Componentes Software'},
        { type: 'list', items: ['<strong>Software de equipo:</strong> Sistema operativo de red (ej. <code>Windows Server</code>, <code>Linux</code>) y aplicaciones.', '<strong>Software de periféricos:</strong> Firmware de routers, switches, etc.']}
      ]
    },
    {
      id: "t67_s4",
      shortTitle: "4. Topologías",
      title: "4. TOPOLOGÍAS",
      icon: "topology",
      content: [
        { type: 'paragraph', text: 'La <strong>topología física</strong> es la distribución de los elementos de la red.' },
        { type: 'table', headers: ['Topología', 'Descripción', 'Uso Actual'], rows: [
            ['Bus', 'Nodos conectados a un medio común.', 'Obsoleta.'],
            ['Anillo', 'Nodos conectados en un bucle cerrado.', 'Obsoleta (Token Ring).'],
            ['Estrella', 'Nodos conectados a un dispositivo central (switch).', '<strong>La más común en LAN modernas.</strong>'],
            ['Árbol', 'Estructura jerárquica de estrellas.', 'Común en redes de campus.'],
            ['Malla', 'Nodos interconectados entre sí.', 'Usada en el núcleo de Internet y en algunas redes Wi-Fi (Mesh).']
        ]}
      ]
    },
    {
      id: "t67_s5",
      shortTitle: "5. Estándares",
      title: "5. ESTÁNDARES",
      icon: "standards",
      content: [
          { type: 'paragraph', text: 'Los estándares aseguran la compatibilidad y eficiencia. La mayoría son desarrollados por el <strong>IEEE</strong> en su familia <strong>802</strong>.'},
          { type: 'keyConcept', title: 'Estándares Fundamentales para LAN', items: [
              '<strong>IEEE 802.3 (Ethernet):</strong> El estándar para redes LAN cableadas. Define velocidades (1 Gbps, 10 Gbps...), cables y conectores (RJ-45).',
              '<strong>IEEE 802.11 (Wi-Fi):</strong> El estándar para redes LAN inalámbricas (WLAN). La versión actual es <code>802.11ax</code> (Wi-Fi 6/6E) y la emergente <code>802.11be</code> (Wi-Fi 7).',
              '<strong>IEEE 802.1Q (VLAN):</strong> Permite segmentar una red física en múltiples redes virtuales lógicas, mejorando la seguridad y la gestión.',
              '<strong>PoE (Power over Ethernet - IEEE 802.3af/at/bt):</strong> Permite suministrar energía eléctrica a través del cable Ethernet.'
          ]},
          { type: 'practicalExample', title: 'El poder del PoE', text: 'Gracias al PoE, una cámara de seguridad IP o un punto de acceso Wi-Fi instalado en el techo solo necesita un cable: el de red. Recibe tanto los datos como la alimentación eléctrica a través del mismo cable Ethernet conectado a un switch compatible con PoE, simplificando enormemente la instalación.'}
      ]
    },
    {
      id: "t67_s6",
      shortTitle: "6. Protocolos",
      title: "6. PROTOCOLOS",
      icon: "protocols",
      content: [
          { type: 'paragraph', text: 'Un protocolo es un conjunto de reglas que rigen la comunicación. El conjunto de protocolos que se ha convertido en el estándar de facto para las LAN e Internet es la familia <strong>TCP/IP</strong>.' },
          { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
            { question: '¿Cuál es la topología física más común en las redes LAN actuales?', options: ['Bus', 'Anillo', 'Estrella'], correctAnswerIndex: 2 },
            { question: 'El estándar que define las redes inalámbricas Wi-Fi es:', options: ['IEEE 802.3', 'IEEE 802.11', 'IEEE 802.1Q'], correctAnswerIndex: 1 }
          ]}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: "t67_s7", shortTitle: "7. Recursos", title: "7. RECURSOS Y HERRAMIENTAS", icon: "tools", content: [ { type: 'resourceLink', name: 'Cisco Packet Tracer', url: 'https://www.netacad.com/courses/packet-tracer', description: 'Herramienta de simulación muy popular para aprender sobre diseño y configuración de redes locales.' } ] },
    { id: "t67_s8", shortTitle: "8. Aplicación", title: "8. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'El conocimiento de las LAN es esencial. En FP, es la base de módulos como "Redes Locales". En lo laboral, permite a los profesionales implementar y mantener redes eficientes y seguras, optimizando la velocidad y la fiabilidad.' } ] },
    { id: 't67_s9', title: "9. CONCLUSIÓN", shortTitle: "9. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'Las redes de área local (LAN) son fundamentales para el funcionamiento eficiente de cualquier organización. La elección de una infraestructura adecuada (topología, componentes, estándares y protocolos) es una decisión crítica. Este conocimiento es clave para diseñar redes locales robustas, seguras y capaces de adaptarse a los cambios tecnológicos.' } ] },
    { id: 't67_s10', title: "10. BIBLIOGRAFÍA", shortTitle: "10. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Pearson.' }, { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' } ] } ] }
  ],
  glossary: [
      { term: 'LAN (Local Area Network)', definition: 'Red de área local, de propiedad privada, confinada a un entorno reducido como un edificio.' },
      { term: 'Topología de Red', definition: 'La disposición física o lógica de los nodos y conexiones en una red.' },
      { term: 'Topología en Estrella', definition: 'Topología donde todos los nodos se conectan a un dispositivo central (generalmente un switch). Es la más común en LAN.' },
      { term: 'Switch', definition: 'Dispositivo de interconexión de capa 2 que conecta dispositivos dentro de una misma LAN y reenvía las tramas solo al puerto de destino.' },
      { term: 'Router', definition: 'Dispositivo de interconexión de capa 3 que se utiliza para conectar diferentes redes entre sí (ej. una LAN con Internet).' },
      { term: 'IEEE 802.3 (Ethernet)', definition: 'El estándar para redes LAN cableadas.' },
      { term: 'IEEE 802.11 (Wi-Fi)', definition: 'El estándar para redes LAN inalámbricas (WLAN).' },
      { term: 'PoE (Power over Ethernet)', definition: 'Estándar que permite suministrar alimentación eléctrica a un dispositivo a través del mismo cable Ethernet que transmite los datos.' }
  ]
};