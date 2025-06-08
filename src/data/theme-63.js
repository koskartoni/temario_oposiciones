export const theme63Data = {
    id: "theme63",
    name: "TEMA 63: Nivel Físico",
    title: "TEMA 63 INFORMÁTICA - FUNCIONES Y SERVICIOS DEL NIVEL FÍSICO. TIPOS Y MEDIOS DE TRANSMISIÓN. ADAPTACIÓN AL MEDIO. LIMITACIONES A LA TRANSMISIÓN. ESTÁNDARES.",
    version: "Versión: Octubre 2024 (Actualizado)",
    sections: [
      {
        id: "t63_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema del bloque de "Redes" se centra en el <strong>Nivel Físico (Capa 1 del Modelo OSI)</strong>, el fundamento sobre el que se construyen todas las comunicaciones. Estudiaremos sus funciones, los tipos y medios de transmisión, la adaptación al medio y sus limitaciones.' },
          { type: 'paragraph', text: 'Los medios de transmisión, junto con los equipos de interconexión, constituyen el esqueleto de cualquier red. Una elección incorrecta de estos componentes puede llevar a costes elevados y a poner en peligro la propia existencia de la organización, por lo que su estudio y planificación son cruciales.' }
        ]
      },
      {
        id: "t63_s2",
        shortTitle: "2. Funciones y Servicios",
        title: "2. FUNCIONES Y SERVICIOS DEL NIVEL FÍSICO",
        content: [
          { type: 'paragraph', text: 'El nivel físico se relaciona con la <strong>transmisión de bits puros</strong> a través de un canal de transmisión. Se encarga de todo lo relativo al medio físico: características técnicas, eléctricas, mecánicas y de composición. Proporciona sus servicios a la capa de enlace de datos.' },
          { type: 'paragraph', text: 'Sus principales funciones son:'},
          { type: 'list', items: [
              'Definir el medio físico por el que viajará la comunicación (cable, fibra, aire).',
              'Definir las características materiales y eléctricas de la transmisión.',
              'Definir las características funcionales de la interfaz (establecimiento, mantenimiento y liberación del enlace).',
              'Transmitir el flujo de bits a través del medio.',
              'Manejar las señales eléctricas/electromagnéticas.',
              'Especificar cables, conectores y componentes de interfaz.',
              'Garantizar la conexión (aunque no la fiabilidad de la transmisión de datos).'
          ]}
        ]
      },
      {
        id: "t63_s3_1", shortTitle: "3.1. Tipos de Transmisión", title: "3.1. TIPOS DE TRANSMISIÓN",
        content: [
          { type: 'paragraph', text: 'La comunicación se lleva a cabo a través de un canal, que se implementa sobre un medio (guiado o no guiado). El tipo de transmisión se puede clasificar atendiendo a diferentes criterios:' },
          { type: 'definitionList', items: [
              {term: 'Según la Dirección de la Transmisión:', subItems: ['<strong>Simplex:</strong> Transmisión en una sola dirección.', '<strong>Half-duplex:</strong> Transmisión en ambos sentidos, pero no simultáneamente.', '<strong>Full-duplex:</strong> Transmisión en ambos sentidos simultáneamente.']},
              {term: 'Según el Modo de Transmisión:', subItems: ['<strong>Serie:</strong> Los bits se transmiten uno a uno por una única línea de datos.', '<strong>Paralelo:</strong> Se transmiten varios bits simultáneamente, cada uno por una línea diferente del mismo canal.']},
              {term: 'Según la Sincronización:', subItems: ['<strong>Síncrona:</strong> El emisor y receptor comparten un reloj y la transmisión es continua.', '<strong>Asíncrona:</strong> No requiere un reloj compartido; se usan bits de inicio y parada para sincronizar cada carácter.']},
              {term: 'Según la Naturaleza de la Señal:', subItems: ['<strong>Analógica:</strong> La señal presenta una variación continua en el tiempo.', '<strong>Digital:</strong> La señal presenta una variación discontinua, con un número finito de valores.']}
          ]}
        ]
      },
      {
        id: "t63_s3_2_1",
        shortTitle: "3.2.1. Medios Guiados",
        title: "3.2.1. MEDIOS GUIADOS",
        content: [
          { type: 'paragraph', text: 'Los medios guiados implican la tirada de un cable entre los puntos que conectan. Los principales tipos son:' },
          { type: 'subheading', text: 'A) Cable de par trenzado'},
          { type: 'paragraph', text: 'Formado por pares de hilos de cobre trenzados entre sí para evitar interferencias (<em>crosstalk</em>). Es el medio guiado más común en redes LAN.'},
          { type: 'flowDiagram', title: 'Nomenclatura de Blindaje (X/YTP)',
            initialNodes: [ {id: 'x', position: {x:0, y:0}, data: {label:'X /'}}, {id: 'ytp', position: {x:100, y:0}, data: {label:'YTP'}}, {id: 'cable', position: {x:-50, y:100}, data: {label:'En el cable\n(Blindaje Global)'}}, {id: 'par', position: {x:150, y:100}, data: {label:'En el par\n(Blindaje Individual)'}} ],
            initialEdges: [ {id:'e1',source:'x', target:'cable'}, {id:'e2',source:'ytp', target:'par'} ]
          },
          { type: 'table', headers: ['Tipo de Cable', 'Blindaje en el Cable (Global)', 'Blindaje en el Par (Individual)'], rows: [
              ['U/UTP', 'No apantallado (U)', 'No apantallado (UTP)'], ['F/UTP', 'Lámina (F)', 'No apantallado (UTP)'], ['S/FTP', 'Malla (S)', 'Lámina (FTP)']
          ]},
          { type: 'subheading', text: 'Categorías y Conector'},
          { type: 'paragraph', text: 'La categoría de un cable define su rendimiento (ancho de banda y velocidad). Las más comunes son <strong>Cat 5e</strong>, <strong>Cat 6</strong>, <strong>Cat 6a</strong>, y las más recientes <strong>Cat 7</strong> y <strong>Cat 8</strong> (para centros de datos). El conector estándar es el <strong>RJ-45</strong>, y su terminación está regulada por la norma <strong>TIA/EIA-568</strong> (con los estándares T568A y T568B).'},
          { type: 'image', src: '/images/theme-63/rj45-standard.png', alt: 'Normas de cableado RJ-45 T568A y T568B', caption: 'Terminaciones T-568A y T-568B para conectores RJ-45.'},
          { type: 'subheading', text: 'B) Cable coaxial'},
          { type: 'paragraph', text: 'Consiste en un núcleo de cobre rígido rodeado por un aislante, una malla metálica y una cubierta protectora. Actualmente obsoleto para redes de datos LAN, pero aún se usa en televisión por cable.'},
          { type: 'subheading', text: 'C) Fibra óptica'},
          { type: 'paragraph', text: 'La señal se transmite como un pulso de luz a través de un núcleo de vidrio o plástico. Las señales se propagan por reflexión total interna. Es inmune a interferencias electromagnéticas.'},
          { type: 'definitionList', items: [
              {term: 'Fibra óptica monomodo:', definition: 'Núcleo muy pequeño (8-10 µm). La luz viaja en un solo modo, reduciendo la dispersión. Ideal para largas distancias y altas velocidades.'},
              {term: 'Fibra óptica multimodo:', definition: 'Núcleo más grande (50-62.5 µm). Permite que varios modos de luz se propaguen a la vez. Es más económica pero adecuada para distancias más cortas (redes LAN, centros de datos).'}
          ]}
        ]
      },
      {
        id: "t63_s3_2_2",
        shortTitle: "3.2.2. Medios no Guiados",
        title: "3.2.2. MEDIOS NO GUIADOS",
        content: [
          { type: 'paragraph', text: 'Utilizan ondas electromagnéticas para transmitir datos a través del aire. Abarcan diferentes partes del espectro:' },
          { type: 'list', items: [
              '<strong>Radiofrecuencia (10 KHz - 300 MHz):</strong> Poco direccional, atraviesa obstáculos. Ideal para comunicaciones a larga distancia.',
              '<strong>Microondas (300 MHz - 300 GHz):</strong> Más direccional, requiere línea de visión. Usado en enlaces punto a punto y redes móviles.',
              '<strong>Infrarrojo (300 GHz - 400 THz):</strong> Muy direccional, no atraviesa obstáculos. Usado en mandos a distancia y comunicaciones de corto alcance.'
          ]}
        ]
      },
      {
        id: "t63_s4",
        shortTitle: "4. Adaptación al Medio",
        title: "4. ADAPTACIÓN AL MEDIO DE TRANSMISIÓN",
        content: [
          { type: 'definitionList', items: [
              { term: '4.1. Modulación:', definition: 'Consiste en alterar una característica de una señal analógica (portadora) en función de otra señal (moduladora). Si la señal moduladora es digital, se habla de desplazamiento (ASK, FSK, PSK).'},
              { term: '4.2. Codificación:', definition: 'Convierte secuencias de bits en otras secuencias para mejorar el sincronismo y la eficiencia. Ejemplos: <code>NRZ</code>, <code>AMI</code>, <code>Manchester</code>.'},
              { term: '4.3. Multiplexación:', definition: 'Técnica que permite compartir un medio de transmisión entre varios equipos. Tipos: <strong>por división de frecuencia (FDM)</strong>, <strong>por división de tiempo (TDM)</strong> y <strong>por división de longitud de onda (WDM)</strong> para fibra óptica.'}
          ]}
        ]
      },
      {
        id: "t63_s5",
        shortTitle: "5. Limitaciones",
        title: "5. LIMITACIONES A LA TRANSMISIÓN",
        content: [
          { type: 'paragraph', text: 'Las limitaciones a la transmisión de señales en un medio se deben a sus propiedades físicas, afectando al ancho de banda y la distancia. Las principales son:' },
          { type: 'list', items: [
              '<strong>Atenuación:</strong> La señal pierde potencia con la distancia. En cobre, se debe a la resistencia; en fibra, a la absorción de luz.',
              '<strong>Desfase (o distorsión de retardo):</strong> La velocidad de propagación varía según la frecuencia, lo que puede desformar la señal en transmisiones de alta velocidad.',
              '<strong>Interferencia Electromagnética (EMI):</strong> Los cables de cobre son sensibles a interferencias externas que pueden distorsionar la señal. Se mitiga con apantallamiento.',
              '<strong>Diafonía (Crosstalk):</strong> Interferencia entre señales de cables paralelos, común en cables de par trenzado.'
          ]}
        ]
      },
      {
        id: "t63_s6",
        shortTitle: "6. Estándares",
        title: "6. ESTÁNDARES",
        content: [
          { type: 'paragraph', text: 'El nivel físico requiere que organizaciones especializadas definan los estándares que rigen el hardware, medios, codificación y señalización. Los principales organismos son:' },
          { type: 'list', items: [
              '<strong>ISO (International Organization for Standardization)</strong>',
              '<strong>TIA/EIA (Telecommunications Industry Association / Electronic Industries Alliance)</strong>, creadores de la norma de cableado estructurado TIA-568.',
              '<strong>ITU (International Telecommunication Union)</strong>',
              '<strong>ANSI (American National Standards Institute)</strong>',
              '<strong>IEEE (Institute of Electrical and Electronic Engineers)</strong>, responsable de los estándares 802.3 (Ethernet) y 802.11 (Wi-Fi).'
          ]}
        ]
      },
      {
        id: "t63_s7",
        shortTitle: "7. Recursos",
        title: "7. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
          { type: 'resourceLink', name: 'Submarine Cable Map', url: 'https://www.submarinecablemap.com/', description: 'Un sitio web que ofrece una visualización interactiva de los cables submarinos de fibra óptica que conectan diferentes partes del mundo, mostrando la infraestructura física de Internet.'}
        ]
      },
      {
        id: "t63_s8",
        shortTitle: "8. Aplicación",
        title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'El conocimiento sobre el nivel físico es clave tanto en el ámbito escolar como en el laboral. Los estudiantes aprenden cómo los medios físicos transportan señales y datos, y la importancia de seguir estándares para garantizar la transmisión eficiente. En el contexto laboral, dominar estos conceptos es esencial para implementar y gestionar redes, seleccionando los medios adecuados según las necesidades de velocidad, distancia y calidad.'}
        ]
      },
      {
        id: "t63_s9",
        shortTitle: "9. Conclusión",
        title: "9. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En este tema se ha presentado una visión global de la transmisión de datos. El medio de transmisión es probablemente la parte más perdurable del diseño de una red. Este motivo, unido a la existencia de múltiples opciones, hace especialmente importante la acertada elección del mismo. Para tomar una decisión acertada es necesario hacer una estimación objetiva de las necesidades actuales y futuras, y una valoración adecuada de las tecnologías disponibles tomando en cuenta su relación coste/prestaciones.'}
        ]
      },
      {
        id: "t63_s10",
        shortTitle: "10. Bibliografía",
        title: "10. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Editorial Pearson.' },
              { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'ITU (International Telecommunication Union)', url: 'https://www.itu.int' },
              { text: 'TIAOnline (Telecommunications Industry Association)', url: 'https://tiaonline.org/' },
              { text: 'IEEE 802 LAN/MAN Standards Committee', url: 'https://www.ieee802.org' }
          ]}
        ]
      }
    ]
  };