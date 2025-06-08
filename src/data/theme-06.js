export const theme06Data = {
    id: "theme6",
    name: "TEMA 6: Almacenamiento Externo",
    title: "TEMA 6. INFORMÁTICA / S.A.I. - SISTEMAS DE ALMACENAMIENTO EXTERNO. TIPOS. CARACTERÍSTICAS Y FUNCIONAMIENTO",
    version: "Versión: Mayo 2024 (Actualizado)",
    sections: [
      {
        id: "t6_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Continuando en el bloque de "Hardware", este tema aborda la <strong>memoria externa o secundaria</strong>, el complemento no volátil de la memoria interna estudiada en el tema anterior. Incluye dispositivos como discos duros magnéticos, SSD y dispositivos ópticos.' },
          { type: 'paragraph', text: 'La evolución del almacenamiento ha sido drástica, pasando de las tarjetas perforadas y cintas magnéticas de los años 50 a las memorias flash y el almacenamiento en red de hoy en día. Este tema explora los diferentes tipos de memoria externa, sus características y su funcionamiento físico.' }
        ]
      },
      {
        id: "t6_s2",
        shortTitle: "2. Sistemas de Almacenamiento",
        title: "2. SISTEMAS DE ALMACENAMIENTO EXTERNO",
        content: [
          { type: 'paragraph', text: 'La memoria secundaria se considera un sistema de almacenamiento externo. Incluye dispositivos como discos duros (HDD), unidades de estado sólido (SSD), unidades flash USB, CDs, DVDs, etc. Su principal característica es que son <strong>no volátiles</strong>, es decir, la información se mantiene incluso sin energía eléctrica.' }
        ]
      },
      {
        id: "t6_s3",
        shortTitle: "3. Tipos",
        title: "3. TIPOS",
        content: [
          { type: 'paragraph', text: 'Atendiendo a la tecnología utilizada, existen diversos tipos de sistemas de almacenamiento externo:' },
          { type: 'list', items: [
              '<strong>Dispositivos de almacenamiento magnéticos:</strong> El medio o soporte está construido con un material magnético, sobre el que se guarda la información mediante la magnetización de partículas.',
              '<strong>Dispositivos de almacenamiento ópticos:</strong> Utilizan un haz de láser para leer y escribir datos en una superficie reflectante.',
              '<strong>Dispositivos de almacenamiento de estado sólido:</strong> Utilizan memorias flash (basadas en transistores) para almacenar la información. Al carecer de partes móviles, su consumo y tiempos de acceso son excelentes.'
          ]}
        ]
      },
      {
          id: "t6_s4_1_1", shortTitle: "4.1.1. Discos Duros (HDD)", title: "4.1.1. DISCOS DUROS (HDD)",
          content: [
              { type: 'paragraph', text: 'Los discos duros (<strong>HDD - Hard Disk Drive</strong>) se fundamentan en la grabación magnética de la información en las superficies de uno o más platos circulares recubiertos de una capa magnetizable. Un brazo mecánico con un cabezal de lectura/escritura se desplaza sobre los platos giratorios para acceder a los datos.'},
              { type: 'flowDiagram', title: 'Componentes Físicos de un HDD',
                  initialNodes: [
                      { id: 'platos', position: { x: 0, y: 50 }, data: { label: 'Platos' } },
                      { id: 'motor', position: { x: 0, y: 150 }, data: { label: 'Motor del Eje' } },
                      { id: 'cabezal', position: { x: 250, y: 50 }, data: { label: 'Cabezal L/E' } },
                      { id: 'brazo', position: { x: 250, y: 150 }, data: { label: 'Brazo Actuador' } },
                      { id: 'electroiman', position: { x: 250, y: 250 }, data: { label: 'Electroimán' } },
                      { id: 'controladora', position: { x: 500, y: 150 }, data: { label: 'Circuito de Control' } },
                  ],
                  initialEdges: [
                      { id: 'e1', source: 'motor', target: 'platos' },
                      { id: 'e2', source: 'brazo', target: 'cabezal' },
                      { id: 'e3', source: 'electroiman', target: 'brazo' },
                      { id: 'e4', source: 'cabezal', target: 'controladora', animated: true },
                      { id: 'e5', source: 'controladora', target: 'electroiman', animated: true },
                  ]
              },
              { type: 'subheading', text: 'Partes Lógicas'},
              { type: 'list', items: ['<strong>Pista:</strong> Trayectoria circular trazada en un plato.', '<strong>Sector:</strong> La unidad básica de almacenamiento de datos en un disco.', '<strong>Cluster:</strong> Grupo de sectores, es la unidad más pequeña de almacenamiento que el sistema operativo puede gestionar.', '<strong>Cilindro:</strong> Conjunto de todas las pistas que están a la misma distancia del centro en todos los platos.']},
              { type: 'subheading', text: 'Interfaces de Conexión'},
              { type: 'list', items: ['<strong>SATA (Serial ATA):</strong> La interfaz más común para discos internos. La versión <code>SATA III</code> alcanza los 6 Gbps.', '<strong>SAS (Serial Attached SCSI):</strong> Usada en servidores y sistemas empresariales por su mayor velocidad y fiabilidad.', '<strong>USB:</strong> Principalmente para discos duros externos. <code>USB 3.2 Gen 2x2</code> alcanza 20 Gbps, y <code>USB4/Thunderbolt</code> llega a 40 Gbps.']}
          ]
      },
      {
          id: "t6_s4_1_2", shortTitle: "4.1.2. Cintas Magnéticas", title: "4.1.2. CINTAS MAGNÉTICAS",
          content: [
              { type: 'paragraph', text: 'Las unidades de cinta utilizan un medio magnético enrollado en carretes dentro de un cartucho. A diferencia de los discos duros, el acceso a los datos en una cinta es <strong>secuencial</strong>.'},
              { type: 'paragraph', text: 'Aunque es una tecnología antigua, sigue siendo muy relevante en entornos empresariales para <strong>copias de seguridad (backups) y archivado a largo plazo</strong> (<em>cold storage</em>), debido a su enorme capacidad (decenas de terabytes por cartucho) y su bajo coste por gigabyte.'}
          ]
      },
      {
          id: "t6_s4_2", shortTitle: "4.2. Memorias Ópticas", title: "4.2. MEMORIAS ÓPTICAS",
          content: [
              { type: 'paragraph', text: 'Las memorias ópticas utilizan un haz de láser para leer y escribir datos sobre una superficie reflectante. Conforme ha mejorado la tecnología, se han usado láseres de menor longitud de onda, permitiendo mayor densidad de datos.'},
              { type: 'table', headers: ['Tipo de Disco', 'Capacidad Típica', 'Usos Comunes'], rows: [
                  ['CD', 'Hasta 700 MB', 'Música, software, datos pequeños.'],
                  ['DVD', '4.7 GB (una capa), 8.5 GB (doble capa)', 'Películas SD, software, copias de seguridad.'],
                  ['Blu-ray Disc', '25 GB (una capa), 50 GB (doble capa)', 'Películas HD, videojuegos, archivado.'],
                  ['Ultra HD Blu-ray', '66 GB (doble capa), 100 GB (triple capa)', 'Películas 4K Ultra HD, contenido multimedia de alta gama.']
              ]}
          ]
      },
      {
          id: "t6_s4_3_1", shortTitle: "4.3.1. Unidades SSD", title: "4.3.1. UNIDADES SSD",
          content: [
              { type: 'paragraph', text: 'Las <strong>Unidades de Estado Sólido (SSD)</strong> han sustituido a los HDD en la mayoría de sistemas por su enorme ventaja en velocidad y resistencia. Utilizan tecnología de memoria <strong>flash NAND</strong> para almacenar datos.'},
              { type: 'subheading', text: 'Tipos de NAND Flash:'},
              { type: 'list', items: [
                  '<strong>SLC (Single-Level Cell):</strong> 1 bit por celda. La más rápida, duradera y cara.',
                  '<strong>MLC (Multi-Level Cell):</strong> 2 bits por celda. Buen equilibrio rendimiento-coste.',
                  '<strong>TLC (Triple-Level Cell):</strong> 3 bits por celda. Es el estándar actual en unidades de consumo.',
                  '<strong>QLC (Quad-Level Cell):</strong> 4 bits por celda. Mayor capacidad y menor coste, pero menor velocidad y durabilidad.',
                  '<strong>PLC (Penta-Level Cell):</strong> 5 bits por celda. Tecnología emergente para maximizar la densidad de almacenamiento.'
              ]},
              { type: 'paragraph', text: 'Una tecnología clave es la <strong>3D NAND</strong>, que apila las celdas de memoria verticalmente, aumentando drásticamente la capacidad. El rendimiento de un SSD también depende críticamente de su <strong>controlador</strong> y de si incluye una <strong>caché DRAM</strong>.'},
              { type: 'table', headers: ['Factor de Forma', 'Descripción', 'Conexión'], rows: [
                  ['2.5"', 'Similar en tamaño a los HDD de portátiles. Compatible con la mayoría de equipos.', '<code>SATA</code>'],
                  ['M.2', 'Tarjetas compactas y delgadas, comunes en portátiles y placas base modernas.', '<code>SATA</code> o <code>PCIe (NVMe)</code>'],
                  ['mSATA', 'Formato más pequeño, popular antes de la llegada del M.2.', '<code>SATA</code>'],
                  ['PCIe Add-in Card', 'Se insertan en una ranura PCIe, ofreciendo las más altas velocidades.', '<code>PCIe (NVMe)</code>']
              ]}
          ]
      },
      {
          id: "t6_s4_3_2", shortTitle: "4.3.2. Tarjetas y Pendrives", title: "4.3.2. TARJETAS DE MEMORIA Y PENDRIVE",
          content: [
              { type: 'paragraph', text: 'Otros dispositivos que utilizan la tecnología flash son los pendrives y las tarjetas de memoria, basados en celdas de memoria de transistores de puerta flotante:'},
              { type: 'list', items: [
                  '<strong>Tarjetas de memoria:</strong> Usadas en cámaras digitales, smartphones, etc. Los principales tipos son <strong>SD (Secure Digital)</strong> y sus variantes (microSD, SDHC, SDXC) y <strong>Compact Flash (CF)</strong>, especialmente su versión más moderna <strong>CFexpress</strong>.',
                  '<strong>Pendrive (USB Flash Drive):</strong> Dispositivos portátiles con una conexión USB para transferir datos y alimentarse eléctricamente.'
              ]}
          ]
      },
      {
          id: "t6_s5", shortTitle: "5. Medidas y Magnitudes", title: "5. MEDIDAS Y MAGNITUDES RELACIONADAS",
          content: [
              { type: 'definitionList', items: [
                  { term: 'A. Capacidad:', definition: 'Cantidad de información que puede almacenar (GB, TB).' },
                  { term: 'B. Tiempo de acceso:', definition: 'Tiempo que tarda en acceder a la información. Se mide en milisegundos (ms) para HDD y en microsegundos (μs) o nanosegundos (ns) para SSD.' },
                  { term: 'C. Tasa de transferencia:', definition: 'Cantidad de información que es capaz de transmitir por unidad de tiempo (MB/s o GB/s).' },
                  { term: 'D. Otras magnitudes:', definition: 'Temperatura máxima de funcionamiento, tamaño físico (pulgadas), IOPS (operaciones de E/S por segundo, muy importante para SSD), y durabilidad (TBW - Terabytes Written, para SSD).' }
              ]}
          ]
      },
      {
        id: "t6_s6",
        shortTitle: "6. Almacenamiento en Red",
        title: "6. ALMACENAMIENTO EN RED",
        content: [
          { type: 'paragraph', text: 'En entornos profesionales, es común centralizar los datos en servidores de ficheros. Existen tres configuraciones principales de almacenamiento en red:'},
          { type: 'definitionList', items: [
              { term: 'DAS (Direct Attached Storage):', definition: 'Almacenamiento (ej. un disco duro externo) conectado directamente a un único ordenador o servidor. Es simple y económico, pero no es centralizado ni fácilmente compartible.' },
              { term: 'NAS (Network Attached Storage):', definition: 'Es un dispositivo de almacenamiento autónomo conectado directamente a la red local. Actúa como un servidor de archivos centralizado, permitiendo que múltiples usuarios y equipos accedan a los datos fácilmente. Ideal para hogares y pequeñas empresas.' },
              { term: 'SAN (Storage Area Network):', definition: 'Es una red de alta velocidad dedicada exclusivamente al almacenamiento. Interconecta servidores con pools de almacenamiento de nivel de bloque. Ofrece el máximo rendimiento y escalabilidad, siendo la solución para grandes centros de datos y entornos empresariales críticos.' }
          ]}
        ]
      },
      // AÑADE ESTOS OBJETOS AL FINAL DEL ARRAY 'sections' EN TU ARCHIVO theme-06.js

    {
        id: "t6_s7",
        shortTitle: "7. Recursos",
        title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
          { type: 'paragraph', text: 'Existen multitud de herramientas que podemos utilizar para trabajar distintos aspectos sobre los soportes de almacenamiento:'},
          { type: 'list', items: [
              '<strong>Comprobar el estado físico del disco:</strong> Herramientas como <code>CrystalDiskInfo</code> o <code>Hard Drive Inspector</code> leen los datos S.M.A.R.T. para predecir fallos.',
              '<strong>Verificar la integridad de los datos:</strong> El comando <code>chkdsk</code> en Windows o <code>fsck</code> en Linux/macOS, y herramientas como Disk Scanner.',
              '<strong>Optimizar el espacio en disco:</strong> Analizadores de espacio como <code>WinDirStat</code> o <code>WizTree</code>, y limpiadores como <code>CCleaner</code>.',
              '<strong>Desfragmentar el disco (solo para HDD):</strong> El Desfragmentador de disco de Windows o herramientas como <code>Defraggler</code>.'
          ]}
        ]
      },
      {
        id: "t6_s8",
        shortTitle: "8. Aplicación",
        title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La comprensión de los sistemas de almacenamiento externo es fundamental tanto en la educación como en el entorno profesional, dada su importancia en la gestión de datos y la seguridad de la información.'},
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'nestedList', items: [
              { text: '<strong>Educación Secundaria:</strong>', subItems: ['Introducción básica a cómo los ordenadores utilizan dispositivos de almacenamiento externo para guardar y acceder a datos, empleando demostraciones y ejercicios prácticos.'] },
              { text: '<strong>Formación Profesional:</strong>', subItems: ['En diferentes módulos se describen las características y funcionamiento de los principales sistemas de almacenamiento externo que se utilizan hoy día.'] }
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Administración de sistemas:</strong> Configuración y mantenimiento de soluciones de almacenamiento para empresas, incluyendo redes (SAN, NAS) y backups.',
              '<strong>Seguridad informática:</strong> Implementación de estrategias de almacenamiento seguro para proteger los datos contra accesos no autorizados y ciberataques.',
              '<strong>Big Data y Análisis de Datos:</strong> Uso de sistemas de almacenamiento de alta capacidad para manejar y analizar grandes conjuntos de datos.'
          ]}
        ]
      },
      {
        id: "t6_s9",
        shortTitle: "9. Conclusión",
        title: "9. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'Las memorias magnéticas y ópticas fueron el estándar durante muchos años, pero su uso ha disminuido considerablemente. Esto se debe a las ventajas de las memorias flash (SSD, USB), que no solo son más rápidas y resistentes, sino también más compactas y eficientes energéticamente. Este cambio refleja un avance tecnológico que se alinea con las crecientes demandas de rendimiento y portabilidad en la gestión de datos.'}
        ]
      },
      {
        id: "t6_s10",
        shortTitle: "10. Bibliografía",
        title: "10. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'Stallings, W. (2006). <em>Organización y arquitectura de computadores</em>. Editorial Prentice-Hall.' },
              { text: 'Tanenbaum, A. (2000). <em>Organización de computadoras. Un enfoque estructurado</em>. Editorial Prentice-Hall.' },
              { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' },
              { text: 'Patterson, D. y Hennessy, J. (2000). <em>Estructura y diseño de computadores</em>. Editorial Reverté.' },
              { text: 'ComputerHoy', url: 'https://computerhoy.com' },
              { text: 'Tom\'s Hardware', url: 'https://www.tomshardware.com' },
              { text: 'Xataka', url: 'https://www.xataka.com' }
          ]}
        ]
      }
    ]
  };