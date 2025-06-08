export const theme08Data = {
    id: "theme8",
    name: "TEMA 8: Hardware Comercial",
    title: "TEMA 8. INFORMÁTICA / S.A.I. - HARDWARE COMERCIAL DE UN ORDENADOR. PLACA BASE. TARJETAS CONTROLADORAS",
    version: "Versión: Mayo 2024 (Actualizado)",
    sections: [
      {
        id: "t8_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema del bloque de "Hardware" se centra en los componentes que forman un ordenador comercial, con especial énfasis en la <strong>placa base</strong> como elemento integrador y en las <strong>tarjetas controladoras</strong> que amplían sus capacidades.' },
          { type: 'paragraph', text: 'Aunque al adquirir un ordenador la atención suele centrarse en la CPU, la RAM o el almacenamiento, conocer las características de la placa base es fundamental. Permite al usuario entender las posibilidades de expansión y mejora de su equipo, como añadir más memoria, cambiar la tarjeta gráfica o conectar nuevos dispositivos.' }
        ]
      },
      {
        id: "t8_s2",
        shortTitle: "2. Hardware Comercial",
        title: "2. COMPONENTES HARDWARE COMERCIALES DE UN ORDENADOR",
        content: [
          { type: 'paragraph', text: 'En este tema nos centraremos en detallar dos de los componentes hardware comerciales más importantes que se encuentran en el interior de la carcasa de un ordenador:' },
          { type: 'list', items: ['La <strong>placa base</strong> como elemento integrador del resto de componentes.', 'Las diferentes <strong>tarjetas controladoras</strong> que podemos utilizar para ampliar o mejorar las prestaciones de un ordenador.']}
        ]
      },
      {
        id: "t8_s3",
        shortTitle: "3. Placa Base",
        title: "3. PLACA BASE",
        content: [
          { type: 'paragraph', text: 'La placa base (o <em>motherboard</em>) es el elemento central de cualquier PC. Se trata de un circuito impreso (PCB) cuya función es soportar y conectar físicamente todos los componentes del ordenador: microprocesador, memoria, tarjetas de expansión, conectores, etc. Su función es integrar todo el sistema. Los principales fabricantes de placas base son <strong>ASUS, Gigabyte, MSI y ASRock</strong>.' }
        ]
      },
      {
        id: "t8_s3_1",
        shortTitle: "3.1. Factores de Forma",
        title: "3.1. FACTORES DE FORMA DE LA PLACA BASE",
        content: [
          { type: 'paragraph', text: 'El <strong>factor de forma</strong> define las características físicas y eléctricas de la placa base (dimensiones, posición de los anclajes, conexiones eléctricas) para que pueda integrarse en un chasis o caja estándar. Los tamaños más comunes son:' },
          { type: 'list', items: [
            '<strong>ATX:</strong> (305×244 mm) Es el factor de forma más común para ordenadores de escritorio. Ofrece un buen equilibrio entre tamaño y cantidad de ranuras de expansión.',
            '<strong>Micro-ATX:</strong> (244×244 mm) Más pequeña que ATX, con menos ranuras de expansión pero suficiente para la mayoría de usuarios.',
            '<strong>Mini-ITX:</strong> (170×170 mm) Destinadas a mini-PC y sistemas compactos. Suelen integrar conectividad Wi-Fi y Bluetooth, pero tienen una capacidad de expansión muy limitada.',
            '<strong>E-ATX (Extended ATX):</strong> (305×330 mm) Más grandes que ATX, pensadas para equipos de alto rendimiento (HEDT) y servidores, con más espacio para componentes.'
          ]}
        ]
      },
      {
          id: "t8_s3_2", shortTitle: "3.2. Componentes", title: "3.2. COMPONENTES DE LA PLACA BASE",
          content: [
              { type: 'paragraph', text: 'Una placa base moderna está compuesta por varios componentes esenciales que permiten la interconexión y el funcionamiento del sistema. A continuación, se enumeran y representan en un diagrama simplificado:'},
              { type: 'flowDiagram', title: 'Diagrama de Componentes de una Placa Base',
                  initialNodes: [
                      { id: 'socket', position: { x: 250, y: 0 }, data: { label: 'Socket (CPU)' }, style: { backgroundColor: '#d13838', color: 'white' } },
                      { id: 'vrm', position: { x: 50, y: 0 }, data: { label: 'VRM' } },
                      { id: 'ram', position: { x: 450, y: 0 }, data: { label: 'Ranuras RAM (DDR5)' } },
                      { id: 'chipset', position: { x: 250, y: 150 }, data: { label: 'Chipset (PCH)' }, style: { backgroundColor: '#388ad1', color: 'white' } },
                      { id: 'pcie', position: { x: 0, y: 150 }, data: { label: 'Ranuras PCIe x16 (GPU)' } },
                      { id: 'm2', position: { x: 500, y: 150 }, data: { label: 'Ranuras M.2 (SSD NVMe)' } },
                      { id: 'sata', position: { x: 500, y: 250 }, data: { label: 'Puertos SATA' } },
                      { id: 'bios', position: { x: 0, y: 250 }, data: { label: 'BIOS/UEFI Chip' } },
                      { id: 'io', position: { x: 250, y: 300 }, data: { label: 'Puertos E/S Traseros' } }
                  ],
                  initialEdges: [
                      { id: 'e1', source: 'vrm', target: 'socket' }, { id: 'e2', source: 'socket', target: 'ram', animated: true },
                      { id: 'e3', source: 'socket', target: 'chipset', animated: true }, { id: 'e4', source: 'socket', target: 'pcie', animated: true },
                      { id: 'e5', source: 'chipset', target: 'm2' }, { id: 'e6', source: 'chipset', target: 'sata' },
                      { id: 'e7', source: 'chipset', target: 'bios' }, { id: 'e8', source: 'chipset', target: 'io' }
                  ]
              }
          ]
      },
      {
        id: "t8_s3_3", shortTitle: "3.3. Sockets", title: "3.3. SOCKETS",
        content: [
          { type: 'paragraph', text: 'A continuación se describen los tipos de sockets más comunes para microprocesadores:'},
          { type: 'definitionList', items: [
            { term: 'LGA (Land Grid Array):', definition: 'Los pines están en el socket de la placa base, mientras que el microprocesador tiene una serie de contactos planos. Es el estándar actual de Intel y de AMD para sus plataformas más modernas.', subItems: ['<strong>Intel:</strong> <code>LGA 1700</code> (12ª a 14ª Gen), <code>LGA 1851</code> (próxima generación).', '<strong>AMD:</strong> <code>AM5</code> (Ryzen 7000 y posteriores).'] },
            { term: 'PGA (Pin Grid Array):', definition: 'Los pines están en el propio procesador, y el socket de la placa base tiene agujeros para alojarlos. Ha sido el estándar de AMD durante muchos años.', subItems: ['<strong>AMD:</strong> <code>AM4</code> (Ryzen 1000 a 5000) y todos los sockets anteriores de AMD.'] }
          ]}
        ]
      },
      {
        id: "t8_s4", shortTitle: "4. Tarjetas Controladoras", title: "4. TARJETAS CONTROLADORAS DE DISPOSITIVOS Y DE E/S",
        content: [
            { type: 'paragraph', text: 'Las tarjetas controladoras o tarjetas de expansión son componentes de hardware que se instalan en las ranuras de expansión (generalmente <code>PCIe</code>) de la placa base para añadir o mejorar funcionalidades.'}
        ]
      },
      {
        id: "t8_s4_1", shortTitle: "4.1. Almcenamiento", title: "4.1. TARJETAS CONTROLADORAS DE ALMACENAMIENTO",
        content: [
          { type: 'paragraph', text: 'Permiten conectar unidades de almacenamiento adicionales o de mayor rendimiento.' },
          { type: 'list', items: [
              '<strong>NVMe (Non-Volatile Memory Express):</strong> Tarjetas adaptadoras que permiten conectar SSDs M.2 de alto rendimiento en ranuras PCIe, ofreciendo velocidades muy superiores a SATA.',
              '<strong>SATA (Serial ATA):</strong> Tarjetas que añaden puertos SATA adicionales, útiles para conectar más discos duros HDD o SSDs SATA.',
              '<strong>RAID Controller:</strong> Tarjetas PCIe dedicadas para configurar y gestionar arreglos RAID, proporcionando redundancia o mayor rendimiento.'
          ]}
        ]
      },
      {
        id: "t8_s4_2", shortTitle: "4.2. Red", title: "4.2. TARJETAS DE RED",
        content: [
          { type: 'paragraph', text: 'Conocidas como <strong>NICs (Network Interface Cards)</strong>, son esenciales para la conectividad.' },
          { type: 'list', items: [
              '<strong>Ethernet (1, 2.5, 5 y 10 Gigabit):</strong> Aunque la mayoría de placas base incluyen un puerto Gigabit Ethernet, se pueden añadir tarjetas para velocidades superiores como 2.5GbE, 5GbE o 10GbE, comunes en entornos profesionales.',
              '<strong>Wi-Fi:</strong> Permiten añadir conectividad inalámbrica. Los estándares más modernos son <strong>Wi-Fi 6E</strong> y <strong>Wi-Fi 7</strong>, que ofrecen mayores velocidades y menor latencia.'
          ]}
        ]
      },
      {
        id: "t8_s4_3", shortTitle: "4.3. Gráficas (GPU)", title: "4.3. TARJETAS GRÁFICAS (GPU)",
        content: [
          { type: 'paragraph', text: 'Las <strong>GPU (Graphics Processing Units)</strong> son componentes encargados de renderizar imágenes y vídeos. Son esenciales para gaming, edición de vídeo, diseño 3D y computación de IA. Se conectan a través de los puertos <code>HDMI</code> y <code>DisplayPort</code>.' },
          { type: 'subheading', text: 'Principales Series Actuales:'},
          { type: 'definitionList', items: [
            { term: 'NVIDIA:', definition: '<strong>RTX Serie 40</strong> (Ada Lovelace) es la última generación, con modelos como la RTX 4090. Destacan por su tecnología de trazado de rayos (Ray Tracing) y <strong>DLSS (Deep Learning Super Sampling)</strong> para escalado con IA.' },
            { term: 'AMD:', definition: '<strong>Radeon RX Serie 7000</strong> (RDNA 3) es la última generación, con modelos como la RX 7900 XTX. Compiten con tecnologías como <strong>FSR (FidelityFX Super Resolution)</strong>.' }
          ]}
        ]
      },
      {
          id: "t8_s4_4", shortTitle: "4.4. Sonido", title: "4.4. TARJETAS DE SONIDO",
          content: [
              { type: 'paragraph', text: 'Aunque la mayoría de placas base incluyen audio integrado, una tarjeta de sonido dedicada procesa el audio para una mayor fidelidad. Son populares entre audiófilos y profesionales de la producción musical. Marcas destacadas son <strong>Creative (Sound Blaster)</strong> y <strong>ASUS (Xonar)</strong>.'}
          ]
      },
      {
          id: "t8_s4_5", shortTitle: "4.5. Otras Tarjetas", title: "4.5. OTRAS TARJETAS CONTROLADORAS",
          content: [
              { type: 'list', items: [
                  '<strong>Tarjeta USB / Thunderbolt:</strong> Añaden puertos USB de última generación (ej. USB4) o puertos Thunderbolt 4, que ofrecen hasta 40 Gbps de velocidad y soportan múltiples protocolos.',
                  '<strong>Tarjetas para expandir puertos:</strong> Añaden puertos específicos como serie (COM) y paralelo para dispositivos industriales o antiguos.'
              ]}
          ]
      },
      {
        id: "t8_s5",
        shortTitle: "5. Recursos",
        title: "5. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
          { type: 'resourceLink', name: 'PC Part Picker', url: 'https://pcpartpicker.com/', description: 'Una herramienta online extremadamente popular que permite a los usuarios seleccionar componentes para montar un PC, comprobando automáticamente la compatibilidad entre ellos (placa base, CPU, RAM, etc.).' },
          { type: 'resourceLink', name: 'BuildMyPC', url: 'https://buildmypc.net/', description: 'Similar a PC Part Picker, es una herramienta en línea que guía a los usuarios en la creación de sus propios ordenadores personalizados, ofreciendo recomendaciones y comparación de precios.'}
        ]
      },
      {
        id: "t8_s6",
        shortTitle: "6. Aplicación",
        title: "6. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La comprensión del hardware comercial, especialmente la placa base y las tarjetas controladoras, es esencial tanto en la educación como en el entorno profesional debido a su importancia en el montaje, mantenimiento y optimización de sistemas informáticos.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'nestedList', items: [
              { text: '<strong>Educación Secundaria:</strong>', subItems: ['Introducción a los componentes principales del hardware de un ordenador, utilizando actividades prácticas para explicar sus funciones y cómo se interconectan.'] },
              { text: '<strong>Formación Profesional:</strong>', subItems: ['En ciclos como SMR o DAM/DAW, se explican en profundidad las características, funciones y tipos de placas base y tarjetas controladoras en módulos como Montaje y Mantenimiento de Equipos.'] }
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Configuración y optimización de equipos:</strong> Configuración de hardware para optimizar el rendimiento del sistema, asegurando la compatibilidad y optimización del sistema.',
              '<strong>Soporte técnico y reparación:</strong> Identificación y resolución de problemas de hardware, diagnóstico de fallos en la placa base y tarjetas controladoras, y sustitución de componentes defectuosos.'
          ]}
        ]
      },
      {
        id: "t8_s7",
        shortTitle: "7. Conclusión",
        title: "7. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En el presente tema hemos visto que, a pesar de que la placa base es el componente principal e integrador, es raro que en la configuración de un ordenador se comience por escogerla. Lo habitual es seleccionar primero el microprocesador, la RAM y el sistema gráfico, para posteriormente elegir una placa base capaz de integrar estos componentes.' },
          { type: 'paragraph', text: 'Posteriormente, se ha presentado una visión global de las principales tarjetas controladoras, describiendo sus funciones y mostrando ejemplos de componentes hardware comerciales que se encuentran hoy día en el mercado.'}
        ]
      },
      {
        id: "t8_s8",
        shortTitle: "8. Bibliografía",
        title: "8. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Stallings, W. (2021). <em>Computer organization and architecture. Designing for performance.</em> Editorial Pearson.' },
              { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware.</em> Editorial Sintesis.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática.</em> Editorial McGraw-Hill.' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' },
              { text: 'BuildMyPC', url: 'https://buildmypc.net/' },
              { text: 'AMD', url: 'https://www.amd.com/' },
              { text: 'Intel', url: 'https://www.intel.com/' },
              { text: 'NVIDIA', url: 'https://www.nvidia.com/' },
              { text: 'ASUS', url: 'https://www.asus.com' },
              { text: 'Gigabyte', url: 'https://www.gigabyte.com' },
              { text: 'MSI', url: 'https://www.msi.com' },
              { text: 'ASRock', url: 'https://www.asrock.com' }
          ]}
        ]
      }
    ]
  };