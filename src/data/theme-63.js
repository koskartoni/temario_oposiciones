// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 63
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme63Data = {
  id: "theme63",
  name: "TEMA 63: Nivel Físico",
  title: "TEMA 63: FUNCIONES Y SERVICIOS DEL NIVEL FÍSICO. TIPOS Y MEDIOS DE TRANSMISIÓN. ADAPTACIÓN AL MEDIO. LIMITACIONES. ESTÁNDARES.",
  version: "Octubre 2024",
  sections: [
    {
      id: "t63_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema del bloque de "Redes" se centra en el <strong>Nivel Físico (Capa 1 del Modelo OSI)</strong>, el fundamento sobre el que se construyen todas las comunicaciones. Estudiaremos sus funciones, los medios de transmisión y sus limitaciones.' },
        { type: 'paragraph', text: 'El estudio del nivel físico está presente en el currículo de la familia de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Redes locales</code>.' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Planificación y administración de redes</code>.' }
        ]}
      ]
    },
    {
      id: "t63_s2",
      shortTitle: "2. Funciones y Servicios",
      title: "2. FUNCIONES Y SERVICIOS DEL NIVEL FÍSICO",
      icon: "functions",
      content: [
        { type: 'paragraph', text: 'El nivel físico se encarga de la <strong>transmisión de bits puros</strong> a través de un canal de transmisión. Sus funciones incluyen definir las características eléctricas y mecánicas del medio, manejar las señales y garantizar la conexión.' }
      ]
    },
    {
      id: "t63_s3", shortTitle: "3. Tipos y Medios", title: "3. TIPOS Y MEDIOS DE TRANSMISIÓN", icon: "transmission"
    },
    {
      id: "t63_s3_1", shortTitle: "3.1. Tipos de Transmisión", title: "3.1. TIPOS DE TRANSMISIÓN",
      content: [
        { type: 'definitionList', items: [
            {term: 'Según la Dirección:', subItems: ['<strong>Simplex:</strong> Unidireccional.', '<strong>Half-duplex:</strong> Bidireccional, pero no simultáneo.', '<strong>Full-duplex:</strong> Bidireccional y simultáneo.']},
            {term: 'Según el Modo:', subItems: ['<strong>Serie:</strong> Los bits viajan uno a uno por una sola línea.', '<strong>Paralelo:</strong> Se transmiten varios bits a la vez por líneas diferentes.']},
            {term: 'Según la Sincronización:', subItems: ['<strong>Síncrona:</strong> Emisor y receptor comparten un reloj.', '<strong>Asíncrona:</strong> Se usan bits de inicio y parada para sincronizar cada carácter.']}
        ]}
      ]
    },
    {
      id: "t63_s3_2", shortTitle: "3.2. Medios de Transmisión", title: "3.2. MEDIOS DE TRANSMISIÓN"
    },
    {
      id: "t63_s3_2_1",
      shortTitle: "3.2.1. Medios Guiados",
      title: "3.2.1. MEDIOS GUIADOS",
      content: [
        { type: 'paragraph', text: 'Implican la tirada de un cable. Los principales son:' },
        { type: 'subheading', text: 'A) Cable de par trenzado'},
        { type: 'paragraph', text: 'Formado por pares de hilos de cobre trenzados para evitar interferencias. Es el medio más común en redes LAN. Su blindaje se nombra como <strong>X/YTP</strong>, donde X es el blindaje global y Y el individual (U=Sin blindaje, F=Lámina, S=Malla). El conector estándar es el <strong>RJ-45</strong>.'},
        { type: 'image', src: '/images/diagrams/t63-rj45-standard.png', alt: 'Normas de cableado RJ-45 T568A y T568B', caption: 'Terminaciones T-568A y T-568B para conectores RJ-45.'},
        { type: 'practicalExample', title: 'Cable Directo vs. Cruzado', text: 'Un cable <strong>directo</strong> usa la misma norma (ej. T-568B) en ambos extremos y se usa para conectar dispositivos de diferente tipo (PC a Switch). Un cable <strong>cruzado</strong> usa una norma en cada extremo (T-568A y T-568B) y se usaba para conectar dispositivos iguales (PC a PC). Hoy en día, la mayoría de dispositivos son <strong>Auto MDI/MDI-X</strong> y negocian el tipo de conexión automáticamente, haciendo los cables cruzados casi obsoletos.'},
        { type: 'subheading', text: 'B) Fibra óptica'},
        { type: 'paragraph', text: 'La señal se transmite como un pulso de luz. Es inmune a interferencias electromagnéticas.'},
        { type: 'table', headers: ['Tipo', 'Diámetro Núcleo', 'Uso Principal'], rows: [
            ['Monomodo (Single-mode)', '8-10 µm', 'Largas distancias (telecomunicaciones).'],
            ['Multimodo (Multi-mode)', '50-62.5 µm', 'Distancias cortas (redes LAN, centros de datos).']
        ]}
      ]
    },
    {
      id: "t63_s3_2_2",
      shortTitle: "3.2.2. Medios no Guiados",
      title: "3.2.2. MEDIOS NO GUIADOS",
      content: [
        { type: 'paragraph', text: 'Utilizan ondas electromagnéticas a través del aire:' },
        { type: 'list', items: [
            '<strong>Radiofrecuencia:</strong> Larga distancia, atraviesa obstáculos (radio AM/FM).',
            '<strong>Microondas:</strong> Requiere línea de visión (redes móviles, satélites).',
            '<strong>Infrarrojo:</strong> Corto alcance, no atraviesa obstáculos (mandos a distancia).'
        ]}
      ]
    },
    {
      id: "t63_s4",
      shortTitle: "4. Adaptación al Medio",
      title: "4. ADAPTACIÓN AL MEDIO DE TRANSMISIÓN",
      icon: "adaptation",
      content: [
        { type: 'definitionList', items: [
            { term: 'Modulación:', definition: 'Alterar una señal portadora analógica en función de una señal moduladora (digital o analógica).'},
            { term: 'Codificación de línea:', definition: 'Convierte secuencias de bits en otras para mejorar el sincronismo (ej. <code>NRZ</code>, <code>Manchester</code>).'},
            { term: 'Multiplexación:', definition: 'Permite compartir un medio entre varios equipos. Tipos: <strong>FDM (Frecuencia)</strong>, <strong>TDM (Tiempo)</strong> y <strong>WDM (Longitud de Onda)</strong> para fibra.'}
        ]}
      ]
    },
    {
      id: "t63_s5",
      shortTitle: "5. Limitaciones",
      title: "5. LIMITACIONES A LA TRANSMISIÓN",
      icon: "limitations",
      content: [
        { type: 'keyConcept', title: 'Principales Limitaciones', items: [
            '<strong>Atenuación:</strong> La señal pierde potencia con la distancia.',
            '<strong>Distorsión:</strong> La señal se deforma debido a que las diferentes frecuencias viajan a velocidades distintas.',
            '<strong>Ruido:</strong> Señales indeseadas que se mezclan con la señal original (ej. interferencias electromagnéticas o diafonía).']
        }
      ]
    },
    {
      id: "t63_s6",
      shortTitle: "6. Estándares",
      title: "6. ESTÁNDARES",
      icon: "standards",
      content: [
        { type: 'paragraph', text: 'Los principales organismos que definen los estándares del nivel físico son:' },
        { type: 'list', items: [
            '<strong>ITU (International Telecommunication Union)</strong>',
            '<strong>TIA/EIA (Telecommunications Industry Association / Electronic Industries Alliance)</strong>, creadores de la norma de cableado <strong>TIA-568</strong>.',
            '<strong>IEEE (Institute of Electrical and Electronic Engineers)</strong>, responsable de los estándares <code>802.3 (Ethernet)</code> y <code>802.11 (Wi-Fi)</code>.'
        ]}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: "t63_s7", shortTitle: "7. Recursos", title: "7. RECURSOS Y HERRAMIENTAS", icon: "tools", content: [ { type: 'resourceLink', name: 'Submarine Cable Map', url: 'https://www.submarinecablemap.com/', description: 'Visualización interactiva de los cables submarinos de fibra óptica que forman la infraestructura física de Internet.' } ] },
    { id: "t63_s8", shortTitle: "8. Aplicación", title: "8. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'El conocimiento del nivel físico es esencial. En FP, se estudia en módulos de "Redes Locales" y "Planificación y Administración de Redes". En lo laboral, es crucial para implementar y gestionar infraestructuras de red, seleccionando los medios y estándares adecuados.' } ] },
    { id: "t63_s9", shortTitle: "9. Conclusión", title: "9. CONCLUSIÓN", icon: "conclusion", content: [ { type: 'paragraph', text: 'En este tema se ha presentado una visión global de la transmisión de datos. El medio de transmisión es la parte más perdurable de una red, por lo que su correcta elección, basada en las necesidades actuales y futuras y en una valoración de las tecnologías disponibles, es una de las decisiones de ingeniería más importantes.' } ] },
    { id: "t63_s10", shortTitle: "10. Bibliografía", title: "10. BIBLIOGRAFÍA", icon: "bibliography", content: [ { type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Pearson.' }, { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' } ] } ] }
  ],
  glossary: [
      { term: 'Nivel Físico', definition: 'Capa 1 del modelo OSI, responsable de la transmisión de bits puros a través de un medio de transmisión.' },
      { term: 'Medio Guiado', definition: 'Medio de transmisión físico que utiliza un cable para guiar la señal (ej. par trenzado, fibra óptica).' },
      { term: 'Medio no Guiado', definition: 'Medio de transmisión que utiliza el aire o el vacío para propagar ondas electromagnéticas (ej. radiofrecuencia, microondas).' },
      { term: 'Par Trenzado', definition: 'Tipo de cable más común en redes LAN, formado por pares de hilos de cobre trenzados. Su conector estándar es el RJ-45.' },
      { term: 'Fibra Óptica', definition: 'Medio que transmite datos como pulsos de luz a través de un hilo de vidrio o plástico. Inmune a interferencias electromagnéticas.' },
      { term: 'Modulación', definition: 'Proceso de alterar una característica de una señal portadora (analógica) para transportar información.' },
      { term: 'Multiplexación', definition: 'Técnica que permite compartir un único medio de transmisión entre varias comunicaciones simultáneas (por frecuencia, tiempo o longitud de onda).' },
      { term: 'Atenuación', definition: 'Pérdida de potencia que sufre una señal al propagarse a través de un medio.' }
  ]
};