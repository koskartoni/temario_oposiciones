// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 8
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme08Data = {
  id: "theme8",
  name: "TEMA 8: Hardware Comercial",
  title: "TEMA 8. HARDWARE COMERCIAL DE UN ORDENADOR. PLACA BASE. TARJETAS CONTROLADORAS",
  version: "Versión: Agosto 2024",
  sections: [
    {
      id: "t8_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema del bloque de "Hardware" se centra en los componentes que forman un ordenador comercial, con especial énfasis en la <strong>placa base</strong> como elemento integrador y en las <strong>tarjetas controladoras</strong> que amplían sus capacidades.' },
        { type: 'paragraph', text: 'Conocer las características de la placa base es fundamental, ya que define la compatibilidad del resto de componentes (CPU, RAM) y las posibilidades de expansión futuras. Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio del hardware comercial está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Fundamentos de hardware</code>' },
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Montaje y mantenimiento de equipos</code>' }
        ]}
      ]
    },
    // He reordenado el contenido para que sea más lógico: primero la Placa Base, luego las tarjetas.
    {
      id: "t8_s3",
      shortTitle: "2. Placa Base",
      title: "2. PLACA BASE",
      icon: "motherboard",
      content: [
        { type: 'paragraph', text: 'La placa base (o <em>motherboard</em>) es el circuito impreso (PCB) central que soporta y conecta físicamente todos los componentes del ordenador. Su función es integrar todo el sistema. Los principales fabricantes son <strong>ASUS, Gigabyte, MSI y ASRock</strong>.' },
        { type: 'keyConcept', title: 'Descifrando el Nombre de una Placa Base', text: 'Ejemplo: <strong>Gigabyte B760 AORUS ELITE AX</strong><ul><li><strong>Gigabyte:</strong> Fabricante.</li><li><strong>B760:</strong> Chipset de Intel. Define la gama y compatibilidad.</li><li><strong>AORUS ELITE:</strong> Submarca y modelo específico (gama alta orientada a gaming).</li><li><strong>AX:</strong> Indica características extra, en este caso, Wi-Fi integrado.</li></ul>'}
      ]
    },
    {
      id: "t8_s3_1",
      shortTitle: "2.1. Factores de Forma",
      title: "2.1. FACTORES DE FORMA DE LA PLACA BASE",
      icon: "formFactor",
      content: [
        { type: 'paragraph', text: 'El <strong>factor de forma</strong> define las dimensiones y la disposición de los componentes. Los más comunes son:' },
        { type: 'list', items: [
          '<strong>ATX:</strong> (305×244 mm) El estándar para ordenadores de escritorio.',
          '<strong>Micro-ATX (mATX):</strong> (244×244 mm) Más pequeña, con menos ranuras de expansión.',
          '<strong>Mini-ITX:</strong> (170×170 mm) Para equipos muy compactos (Mini-PC).',
          '<strong>E-ATX (Extended ATX):</strong> Más grande, para servidores y estaciones de trabajo de alto rendimiento (HEDT).'
        ]}
      ]
    },
    {
        id: "t8_s3_2", shortTitle: "2.2. Componentes", title: "2.2. COMPONENTES DE LA PLACA BASE",
        icon: "components",
        content: [
            { type: 'paragraph', text: 'Una placa base moderna está compuesta por varios componentes esenciales:'},
            { type: 'flowDiagram', title: 'Diagrama de Componentes de una Placa Base',
                initialNodes: [
                    { id: 'socket', position: { x: 250, y: 0 }, data: { label: 'Socket (CPU)' } },
                    { id: 'vrm', position: { x: 50, y: 0 }, data: { label: 'VRM' } },
                    { id: 'ram', position: { x: 450, y: 0 }, data: { label: 'Ranuras RAM (DDR5)' } },
                    { id: 'chipset', position: { x: 250, y: 150 }, data: { label: 'Chipset (PCH)' } },
                    { id: 'pcie', position: { x: 0, y: 150 }, data: { label: 'Ranuras PCIe x16 (GPU)' } },
                    { id: 'm2', position: { x: 500, y: 150 }, data: { label: 'Ranuras M.2 (SSD NVMe)' } },
                    { id: 'sata', position: { x: 500, y: 250 }, data: { label: 'Puertos SATA' } },
                    { id: 'bios', position: { x: 0, y: 250 }, data: { label: 'BIOS/UEFI Chip' } },
                    { id: 'io', position: { x: 250, y: 300 }, data: { label: 'Puertos E/S Traseros' } }
                ],
                initialEdges: [
                    { id: 'e1', source: 'vrm', target: 'socket' }, { id: 'e2', source: 'socket', target: 'ram', animated: true },
                    { id: 'e3', source: 'socket', target: 'chipset', animated: true, label: 'DMI/IF' }, { id: 'e4', source: 'socket', target: 'pcie', animated: true },
                    { id: 'e5', source: 'chipset', target: 'm2' }, { id: 'e6', source: 'chipset', target: 'sata' },
                    { id: 'e7', source: 'chipset', target: 'bios' }, { id: 'e8', source: 'chipset', target: 'io' }
                ]
            },
            { type: 'paragraph', text: 'Los componentes clave incluyen el <strong>Socket</strong> para la CPU, el <strong>Chipset</strong> que gestiona la comunicación, las ranuras de <strong>memoria RAM</strong> (ej. DDR5), las ranuras de expansión <strong>PCIe</strong> (ej. PCIe 5.0), conectores de almacenamiento (<strong>M.2</strong>, <strong>SATA</strong>), el firmware <strong>BIOS/UEFI</strong> y el <strong>VRM (Voltage Regulator Module)</strong>, que suministra energía estable a la CPU y es crucial para el overclocking.'}
        ]
    },
    {
      id: "t8_s3_3", shortTitle: "2.3. Sockets", title: "2.3. SOCKETS",
      icon: 'socket',
      content: [
        { type: 'paragraph', text: 'El socket define la compatibilidad entre la placa base y la CPU. Los tipos actuales son:'},
        { type: 'definitionList', items: [
          { term: 'LGA (Land Grid Array):', definition: 'Los pines están en el socket. Es el estándar de Intel y de las plataformas más recientes de AMD.', subItems: ['<strong>Intel:</strong> <code>LGA 1700</code>, y el futuro <code>LGA 1851</code>.', '<strong>AMD:</strong> <code>AM5</code>.'] },
          { term: 'PGA (Pin Grid Array):', definition: 'Los pines están en el procesador. Usado por AMD en plataformas anteriores.', subItems: ['<strong>AMD:</strong> <code>AM4</code>.'] }
        ]}
      ]
    },
    {
      id: "t8_s4", shortTitle: "3. Tarjetas Controladoras", title: "3. TARJETAS CONTROLADORAS (DE EXPANSIÓN)",
      icon: "expansionCard",
      content: [
          { type: 'paragraph', text: 'Son componentes que se instalan en las ranuras de expansión (generalmente <code>PCIe</code>) para añadir o mejorar funcionalidades que no vienen integradas en la placa base.'}
      ]
    },
    {
      id: "t8_s4_1", shortTitle: "3.1. Almacenamiento", title: "3.1. TARJETAS CONTROLADORAS DE ALMACENAMIENTO",
      content: [
        { type: 'list', items: [
            '<strong>NVMe/SATA:</strong> Tarjetas que añaden puertos M.2 o SATA adicionales.',
            '<strong>RAID Controller:</strong> Tarjetas dedicadas para gestionar arreglos de discos (RAID), proporcionando redundancia o mayor rendimiento.'
        ]}
      ]
    },
    {
      id: "t8_s4_2", shortTitle: "3.2. Red", title: "3.2. TARJETAS DE RED (NIC)",
      content: [
        { type: 'list', items: [
            '<strong>Ethernet:</strong> Aunque las placas suelen incluir un puerto de 1 o 2.5 Gbps, se pueden añadir tarjetas para velocidades superiores como 5GbE o 10GbE.',
            '<strong>Wi-Fi:</strong> Para añadir conectividad inalámbrica. Los estándares más modernos son <strong>Wi-Fi 6E</strong> y <strong>Wi-Fi 7</strong>.'
        ]}
      ]
    },
    {
      id: "t8_s4_3", shortTitle: "3.3. Gráficas (GPU)", title: "3.3. TARJETAS GRÁFICAS (GPU)",
      content: [
        { type: 'paragraph', text: 'Las <strong>GPU (Graphics Processing Units)</strong> son las tarjetas de expansión más comunes y potentes, encargadas de renderizar gráficos. Se conectan a la ranura <strong>PCIe x16</strong> y los principales fabricantes son <strong>NVIDIA</strong> y <strong>AMD</strong>.' },
        { type: 'keyConcept', title: 'Generaciones Actuales', items: [
          '<strong>NVIDIA:</strong> La serie <strong>RTX 40 (Ada Lovelace)</strong> es la más reciente, destacando por su tecnología de Ray Tracing y DLSS 3 (Super Resolución + Generación de Fotogramas).',
          '<strong>AMD:</strong> La serie <strong>Radeon RX 7000 (RDNA 3)</strong> es su última generación, compitiendo con tecnologías como FSR 3.'
        ]}
      ]
    },
    {
        id: "t8_s4_4", shortTitle: "3.4. Sonido", title: "3.4. TARJETAS DE SONIDO",
        content: [ { type: 'paragraph', text: 'Aunque el audio integrado ha mejorado mucho, una tarjeta de sonido dedicada sigue ofreciendo una mayor fidelidad y opciones de conectividad para audiófilos y creadores de contenido.' } ]
    },
    {
        id: "t8_s4_5", shortTitle: "3.5. Otras", title: "3.5. OTRAS TARJETAS CONTROLADORAS",
        content: [ { type: 'list', items: [ '<strong>Tarjetas de expansión USB/Thunderbolt:</strong> Para añadir los últimos y más rápidos puertos de conexión.', '<strong>Tarjetas Capturadoras de Vídeo:</strong> Para grabar la señal de vídeo de una fuente externa, muy usadas para streaming de videojuegos.' ]} ]
    },
    {
      id: "t8_s5",
      shortTitle: "4. Recursos",
      title: "4. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
      icon: "tools",
      content: [
        { type: 'resourceLink', name: 'PC Part Picker', url: 'https://pcpartpicker.com/', description: 'Herramienta online esencial que permite a los usuarios seleccionar componentes para montar un PC, comprobando automáticamente la compatibilidad entre ellos.' }
      ]
    },
    // ... El resto de secciones se mantienen con su contenido fiel y el icono correspondiente
    { id: "t8_s6", shortTitle: "5. Aplicación", title: "5. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ {type: 'paragraph', text: 'La comprensión del hardware comercial es fundamental. En FP, es la base de módulos como "Montaje y Mantenimiento de Equipos". En el ámbito laboral, es clave para la configuración y optimización de equipos, así como para el soporte técnico y la reparación.'} ] },
    { id: 't8_s7', shortTitle: "6. Conclusión", title: "6. CONCLUSIÓN", icon: 'conclusion', content: [ { type: 'paragraph', text: 'En este tema hemos visto que, aunque al configurar un ordenador la atención se centra en la CPU o la RAM, la placa base es la pieza fundamental que integra y define las capacidades del sistema. Las tarjetas controladoras, por su parte, ofrecen una vía esencial para ampliar y mejorar estas capacidades, adaptando el equipo a necesidades específicas. Conocer ambos elementos es crucial para cualquier profesional de la informática.' } ] },
    { id: 't8_s8', shortTitle: "7. Bibliografía", title: "7. BIBLIOGRAFÍA", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' }, { text: 'Stallings, W. (2021). <em>Computer organization and architecture.</em> Editorial Pearson.' } ] } ] }
  ],
  glossary: [
    { term: 'Placa Base (Motherboard)', definition: 'Circuito impreso central que interconecta todos los componentes de un ordenador.' },
    { term: 'Factor de Forma', definition: 'Estándar que define las dimensiones y especificaciones físicas de una placa base (ej. ATX, Micro-ATX, Mini-ITX).' },
    { term: 'Chipset', definition: 'Conjunto de chips en la placa base que gestiona el flujo de datos entre la CPU, la memoria y los periféricos.' },
    { term: 'Socket', definition: 'Conector de la placa base donde se instala la CPU. Define la compatibilidad del procesador (ej. LGA 1700, AM5).' },
    { term: 'VRM (Voltage Regulator Module)', definition: 'Componente de la placa base que regula y suministra un voltaje estable y preciso a la CPU.' },
    { term: 'PCIe (PCI Express)', definition: 'Interfaz estándar de alta velocidad para conectar tarjetas de expansión como GPUs y SSDs a la placa base.' },
    { term: 'Tarjeta Controladora (o de Expansión)', definition: 'Hardware que se instala en una ranura PCIe para añadir o mejorar una funcionalidad del sistema.' }
  ]
};