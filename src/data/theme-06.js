// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 6
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme06Data = {
  id: "theme6",
  name: "TEMA 6: Almacenamiento Externo",
  title: "TEMA 6. SISTEMAS DE ALMACENAMIENTO EXTERNO. TIPOS. CARACTERÍSTICAS Y FUNCIONAMIENTO",
  version: "Versión: Agosto 2024",
  sections: [
    {
      id: "t6_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'El presente tema, parte del temario oficial (BOE 13/02/1996), aborda la <strong>memoria externa o secundaria</strong>, el complemento no volátil de la memoria interna estudiada en el tema anterior. Incluye dispositivos como discos duros magnéticos, SSD y dispositivos ópticos.' },
        { type: 'paragraph', text: 'La evolución del almacenamiento ha sido drástica, pasando de las tarjetas perforadas y cintas magnéticas de los años 50 a las memorias flash y el almacenamiento en red de hoy en día. Este tema explora los diferentes tipos de memoria externa, sus características y su funcionamiento.' },
        { type: 'paragraph', text: 'El estudio de los sistemas de almacenamiento externo está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:' },
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Fundamentos de hardware</code>' },
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Montaje y mantenimiento de equipos</code>' }
        ]}
      ]
    },
    {
      id: "t6_s2",
      shortTitle: "2. Almacenamiento Externo",
      title: "2. SISTEMAS DE ALMACENAMIENTO EXTERNO",
      icon: "storage",
      content: [
        { type: 'paragraph', text: 'La memoria secundaria o externa incluye dispositivos como discos duros (HDD), unidades de estado sólido (SSD), unidades flash USB, etc. Su principal característica es que son <strong>no volátiles</strong>, es decir, la información se mantiene incluso sin energía eléctrica.' }
      ]
    },
    {
      id: "t6_s3",
      shortTitle: "3. Tipos",
      title: "3. TIPOS",
      icon: "types",
      content: [
        { type: 'keyConcept', title: 'Tecnologías de Almacenamiento', items: [
          '<strong>Magnéticos:</strong> Guardan la información mediante la magnetización de partículas en una superficie (ej. HDD, cintas magnéticas).',
          '<strong>Ópticos:</strong> Usan un láser para leer y escribir datos en una superficie reflectante (ej. CD, DVD, Blu-ray).',
          '<strong>De Estado Sólido (Flash):</strong> Utilizan transistores para almacenar la información. Al carecer de partes móviles, son los más rápidos y resistentes.'
        ]}
      ]
    },
    {
      id: "t6_s4",
      shortTitle: "4. Características y Funcionamiento",
      title: "4. CARACTERÍSTICAS Y FUNCIONAMIENTO",
      icon: "features"
    },
    {
      id: "t6_s4_1", shortTitle: "4.1. Memorias Magnéticas", title: "4.1. MEMORIAS MAGNÉTICAS", icon: "magnetic"
    },
    {
        id: "t6_s4_1_1", shortTitle: "4.1.1. Discos Duros (HDD)", title: "4.1.1. DISCOS DUROS (HDD)",
        content: [
            { type: 'paragraph', text: 'Un <strong>HDD (Hard Disk Drive)</strong> almacena datos magnéticamente en platos giratorios. Un brazo mecánico con un cabezal de lectura/escritura accede a la información.' },
            { type: 'flowDiagram', title: 'Estructura Lógica de un HDD', 
              initialNodes: [
                { id: 'cilindro', data: {label: 'Cilindro'}, position: {x: 0, y: 0}, type: 'group', style: {width: 400, height: 300, backgroundColor: 'rgba(0,122,204,0.1)'}},
                { id: 'pista', data: {label: 'Pista'}, position: {x: 25, y: 25}, parentNode: 'cilindro', type: 'group', style: {width: 350, height: 250, backgroundColor: 'rgba(0,122,204,0.2)'}},
                { id: 'cluster', data: {label: 'Cluster'}, position: {x: 25, y: 25}, parentNode: 'pista', type: 'group', style: {width: 300, height: 200, backgroundColor: 'rgba(0,122,204,0.3)'}},
                { id: 'sector', data: {label: 'Sector'}, position: {x: 25, y: 25}, parentNode: 'cluster', style: {width: 250, height: 150}},
              ],
              initialEdges: []
            },
            { type: 'keyConcept', title: 'Estructura Lógica', text: 'La información se organiza jerárquicamente: el <strong>Sector</strong> es la unidad física mínima. Varios sectores forman un <strong>Clúster</strong>, que es la unidad mínima que gestiona el SO. Las Pistas son círculos concéntricos y el conjunto de pistas a la misma altura en todos los platos forma un <strong>Cilindro</strong>.'},
            { type: 'subheading', text: 'Interfaces de Conexión'},
            { type: 'list', items: ['<strong>SATA:</strong> Interfaz común en PC, con <code>SATA III</code> alcanzando 6 Gbps.', '<strong>SAS:</strong> Usada en servidores por su mayor velocidad y fiabilidad.', '<strong>USB:</strong> Para discos externos, con <code>USB4</code> llegando a 40 Gbps.']}
        ]
    },
    {
        id: "t6_s4_1_2", shortTitle: "4.1.2. Cintas Magnéticas", title: "4.1.2. CINTAS MAGNÉTICAS",
        content: [
            { type: 'paragraph', text: 'Utilizan un medio magnético en un cartucho y el acceso es <strong>secuencial</strong>. Siguen siendo muy relevantes en empresas para <strong>backups y archivado a largo plazo</strong> (<em>cold storage</em>) por su gran capacidad y bajo coste por TB.'}
        ]
    },
    {
      id: "t6_s4_2", shortTitle: "4.2. Memorias Ópticas", title: "4.2. MEMORIAS ÓPTICAS", icon: "optical",
      content: [
          { type: 'paragraph', text: 'Utilizan un láser para leer/escribir datos. La capacidad aumenta al reducir la longitud de onda del láser.'},
          { type: 'table', headers: ['Tipo', 'Capacidad Típica', 'Usos'], rows: [
              ['CD', '700 MB', 'Música, software antiguo.'],
              ['DVD', '4.7 GB / 8.5 GB', 'Películas SD, software.'],
              ['Blu-ray', '25 GB / 50 GB', 'Películas HD, videojuegos.'],
              ['UHD Blu-ray', '66 GB / 100 GB', 'Películas 4K.']
          ]}
      ]
    },
    {
      id: "t6_s4_3", shortTitle: "4.3. Memorias Flash", title: "4.3. MEMORIAS FLASH", icon: "flash"
    },
    {
        id: "t6_s4_3_1", shortTitle: "4.3.1. Unidades SSD", title: "4.3.1. UNIDADES DE ESTADO SÓLIDO (SSD)",
        content: [
            { type: 'paragraph', text: 'Los <strong>SSD (Solid-State Drive)</strong> utilizan memoria <strong>flash NAND</strong>. No tienen partes móviles, lo que los hace inmensamente más rápidos y resistentes que los HDD.'},
            { type: 'keyConcept', title: 'Tipos de NAND Flash', text: 'Las celdas NAND almacenan bits. Según cuántos bits por celda, tenemos: <strong>SLC (1) > MLC (2) > TLC (3) > QLC (4) > PLC (5)</strong>. A más bits por celda, mayor capacidad y menor coste, pero también menor velocidad y durabilidad. El estándar actual en consumo es <strong>TLC</strong>.'},
            { type: 'paragraph', text: 'La tecnología <strong>3D NAND</strong> apila celdas verticalmente para aumentar la capacidad. El rendimiento de un SSD depende críticamente de su <strong>controlador</strong> y de si incluye una <strong>caché DRAM</strong>.'},
            { type: 'table', headers: ['Factor de Forma', 'Descripción', 'Conexión'], rows: [
                ['2.5"', 'Compatible con la mayoría de equipos.', '<code>SATA</code>'],
                ['M.2', 'Tarjeta compacta y delgada, el estándar actual en placas base.', '<code>SATA</code> o <code>PCIe (NVMe)</code>'],
                ['PCIe Add-in Card', 'Tarjeta de expansión que ofrece las más altas velocidades.', '<code>PCIe (NVMe)</code>']
            ]}
        ]
    },
    {
        id: "t6_s4_3_2", shortTitle: "4.3.2. Tarjetas y Pendrives", title: "4.3.2. TARJETAS DE MEMORIA Y PENDRIVE",
        content: [
            { type: 'list', items: [
                '<strong>Tarjetas de memoria:</strong> Usadas en cámaras, móviles, etc. Los tipos principales son <strong>SD (Secure Digital)</strong> y <strong>CFexpress</strong> (para uso profesional de alta velocidad).',
                '<strong>Pendrive (USB Flash Drive):</strong> Dispositivos portátiles para transferencia de datos.'
            ]}
        ]
    },
    {
        id: "t6_s5", shortTitle: "5. Medidas y Magnitudes", title: "5. MEDIDAS Y MAGNITUDES RELACIONADAS", icon: 'metrics',
        content: [
          { type: 'keyConcept', title: 'Métricas Clave de Rendimiento', items: [
              '<strong>Tasa de Transferencia:</strong> Velocidad de lectura/escritura secuencial (MB/s o GB/s). Importante para mover archivos grandes.',
              '<strong>IOPS (Operaciones de E/S por segundo):</strong> Mide el rendimiento en lectura/escritura de pequeños archivos aleatorios. Es una métrica crucial para la agilidad del sistema operativo.',
              '<strong>Latencia:</strong> Tiempo de respuesta a una petición (ms en HDD, µs en SSD).',
              '<strong>Durabilidad (TBW - Terabytes Written):</strong> Cantidad total de terabytes que se pueden escribir en un SSD antes de que sus celdas de memoria empiecen a fallar.'] }
        ]
    },
    {
      id: "t6_s6",
      shortTitle: "6. Almacenamiento en Red",
      title: "6. ALMACENAMIENTO EN RED",
      icon: 'networkStorage',
      content: [
        { type: 'paragraph', text: 'En entornos profesionales, los datos se centralizan en red. Las tres arquitecturas principales son:'},
        { type: 'definitionList', items: [
            { term: 'DAS (Direct Attached Storage):', definition: 'Almacenamiento conectado directamente a un único servidor. Simple, pero no centralizado.' },
            { term: 'NAS (Network Attached Storage):', definition: 'Dispositivo autónomo conectado a la red local que actúa como servidor de archivos. Fácil de usar y compartir.' },
            { term: 'SAN (Storage Area Network):', definition: 'Red de alta velocidad dedicada exclusivamente al almacenamiento a nivel de bloque. Ofrece el máximo rendimiento y escalabilidad para entornos críticos.' }
        ]},
        { type: 'practicalExample', title: '¿Cuándo usar cada uno?', text: 'Usa un <strong>DAS</strong> (disco USB) para ampliar el almacenamiento de tu PC. Usa un <strong>NAS</strong> en casa o en una pequeña oficina para compartir archivos y hacer backups centralizados. Las grandes empresas usan una <strong>SAN</strong> para sus bases de datos y sistemas virtualizados.'}
      ]
    },
  // ... el resto de secciones se mantienen con su contenido fiel y el icono correspondiente
  { id: "t6_s7", shortTitle: "7. Recursos", title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS", icon: "tools", content: [ { type: 'list', items: ['<code>CrystalDiskInfo</code> (para salud S.M.A.R.T.)', '<code>chkdsk</code> / <code>fsck</code> (para integridad de datos)', '<code>WinDirStat</code> (para analizar espacio)', '<code>Defraggler</code> (para desfragmentar HDD)'] } ] },
  { id: "t6_s8", shortTitle: "8. Aplicación", title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL", icon: "application", content: [ { type: 'paragraph', text: 'La gestión del almacenamiento es fundamental. En FP se estudia en módulos de hardware y sistemas. En el ámbito laboral, es clave para la administración de sistemas (backups, NAS/SAN), la seguridad informática (encriptación de datos) y el Big Data.' } ] },
  { id: 't6_s9', shortTitle: "9. Conclusión", title: "9. CONCLUSIÓN", icon: 'conclusion', content: [ { type: 'paragraph', text: 'Los sistemas de almacenamiento han evolucionado desde soluciones magnéticas y ópticas hacia el dominio casi total de la memoria flash, liderada por los SSD. Esta transición refleja la demanda de mayor rendimiento, resistencia y portabilidad. Comprender las diferentes tecnologías y arquitecturas (DAS, NAS, SAN) es esencial para gestionar los datos de manera eficiente y segura en cualquier entorno.' } ] },
  { id: 't6_s10', shortTitle: "10. Bibliografía", title: "10. BIBLIOGRAFÍA", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' }, { text: 'Stallings, W. (2006). <em>Organización y arquitectura de computadores</em>. Editorial Prentice-Hall.' } ] } ] }
  ],
  glossary: [
      { term: 'Almacenamiento Externo', definition: 'Dispositivos de almacenamiento no volátiles donde los datos persisten sin energía (HDD, SSD, etc.).' },
      { term: 'HDD (Hard Disk Drive)', definition: 'Dispositivo de almacenamiento magnético que utiliza platos giratorios y un cabezal de lectura/escritura.' },
      { term: 'SSD (Solid-State Drive)', definition: 'Dispositivo de almacenamiento de estado sólido que utiliza memoria flash NAND. No tiene partes móviles.' },
      { term: 'Flash NAND', definition: 'Tipo de memoria no volátil que es la base de los SSD, pendrives y tarjetas de memoria.' },
      { term: 'NVMe (Non-Volatile Memory Express)', definition: 'Protocolo de comunicación diseñado específicamente para SSDs que se conectan a través del bus PCIe, ofreciendo la máxima velocidad.' },
      { term: 'DAS (Direct Attached Storage)', definition: 'Almacenamiento conectado directamente a un solo ordenador.' },
      { term: 'NAS (Network Attached Storage)', definition: 'Dispositivo de almacenamiento autónomo que se conecta a la red para compartir archivos.' },
      { term: 'SAN (Storage Area Network)', definition: 'Red de alta velocidad dedicada exclusivamente al almacenamiento a nivel de bloque para servidores.' },
      { term: 'IOPS', definition: 'Operaciones de Entrada/Salida por Segundo. Métrica clave para medir el rendimiento de un SSD con archivos pequeños.' },
      { term: 'TBW (Terabytes Written)', definition: 'Medida de la durabilidad de un SSD, indicando cuántos terabytes se pueden escribir en él antes de que falle.' }
  ]
};