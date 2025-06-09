// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 7
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme07Data = {
  id: "theme7",
  name: "TEMA 7: Periféricos de E/S",
  title: "TEMA 7. DISPOSITIVOS PERIFÉRICOS DE ENTRADA/SALIDA. CARACTERÍSTICAS Y FUNCIONAMIENTO",
  version: "Versión: Agosto 2024",
  sections: [
    {
      id: "t7_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'El presente tema forma parte del temario oficial (BOE 13/02/1996) y se centra en los <strong>dispositivos periféricos</strong>, los componentes que permiten la comunicación entre el computador y el mundo exterior. Dentro de la arquitectura de Von Neumann, estos se conectan a la Unidad de Entrada/Salida (E/S), actuando como los sentidos y la voz del sistema.' },
        { type: 'paragraph', text: 'Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio de los dispositivos periféricos está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Fundamentos de hardware</code>' },
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Montaje y mantenimiento de equipos</code>' }
        ]}
      ]
    },
    {
      id: "t7_s2",
      shortTitle: "2. Definición",
      title: "2. DEFINICIÓN DE DISPOSITIVO PERIFÉRICO",
      icon: "definition",
      content: [
        { type: 'paragraph', text: 'Los dispositivos de <strong>Entrada/Salida (E/S)</strong> o <strong>periféricos</strong> son todos aquellos dispositivos que se conectan a la unidad central de procesamiento pero no forman parte de ella, permitiendo la comunicación entre la computadora y el usuario o con otros sistemas.' }
      ]
    },
    {
      id: "t7_s3",
      shortTitle: "3. Clasificación",
      title: "3. CLASIFICACIÓN DE PERIFÉRICOS",
      icon: "classification",
      content: [
        { type: 'keyConcept', title: 'Clasificación de Periféricos', items: [
          '<strong>De Entrada:</strong> Introducen datos en el sistema (teclado, ratón, escáner, micrófono).',
          '<strong>De Salida:</strong> Muestran datos del sistema (monitor, impresora, altavoces).',
          '<strong>De Entrada/Salida (Mixtos):</strong> Realizan ambas funciones. Se subdividen en:',
          '<ul><li><strong>Almacenamiento:</strong> SSD externo, pendrive.</li><li><strong>Comunicación:</strong> Tarjeta de red, router.</li></ul>'
        ]}
      ]
    },
    {
      id: "t7_s4", shortTitle: "4. Periféricos de Entrada", title: "4. PERIFÉRICOS DE ENTRADA: CARACTERÍSTICAS Y FUNCIONAMIENTO", icon: "input"
    },
    {
      id: "t7_s4_1", shortTitle: "4.1. Teclado", title: "4.1. TECLADO",
      content: [
        { type: 'paragraph', text: 'La disposición más común es <code>QWERTY</code>. Según su mecanismo, se clasifican en:'},
        { type: 'list', items: [
            '<strong>Mecánicos:</strong> Usan interruptores físicos individuales. Son duraderos, precisos y ofrecen una gran respuesta táctil.',
            '<strong>De Membrana:</strong> Una lámina de caucho cierra un circuito. Son más silenciosos y económicos.',
            '<strong>Ópticos:</strong> Un haz de luz infrarroja registra la pulsación sin contacto físico, ofreciendo gran velocidad y durabilidad.'
        ]}
      ]
    },
    {
      id: "t7_s4_2", shortTitle: "4.2. Ratón", title: "4.2. RATÓN",
      content: [
        { type: 'paragraph', text: 'Dispositivo apuntador esencial para interfaces gráficas. Sus características clave son:' },
        { type: 'definitionList', items: [
            { term: 'Tecnología de detección:', definition: '<strong>Óptico (LED)</strong> o <strong>Láser</strong> (más preciso y funciona en más superficies).' },
            { term: 'Resolución (DPI - Dots Per Inch):', definition: 'Indica la sensibilidad. Un DPI alto mueve el cursor más distancia con menos movimiento físico.'}
        ]}
      ]
    },
    {
        id: "t7_s4_3", shortTitle: "4.3. Escáner", title: "4.3. ESCÁNER",
        content: [
            { type: 'paragraph', text: 'Convierte documentos físicos en imágenes digitales. Sus tipos principales son de <strong>cama plana</strong>, con <strong>alimentador automático (ADF)</strong> o <strong>rotativos</strong> (para máxima calidad profesional). Sus características clave son la <strong>Resolución (DPI)</strong> y la <strong>Profundidad de Color (bits)</strong>.'}
        ]
    },
    {
        id: "t7_s4_4", shortTitle: "4.4. Webcam", title: "4.4. WEBCAM",
        content: [ { type: 'paragraph', text: 'Captura y transmite imágenes en tiempo real. Sus características son la <strong>Resolución (1080p, 4K)</strong>, los <strong>Fotogramas por Segundo (FPS)</strong> y el <strong>Campo de Visión (FOV)</strong>.' } ]
    },
    {
        id: "t7_s4_5", shortTitle: "4.5. Micrófono", title: "4.5. MICRÓFONO",
        content: [ { type: 'paragraph', text: 'Transductor que convierte las ondas sonoras en una señal eléctrica para su digitalización. Se conecta vía Jack o USB.' } ]
    },
    {
      id: "t7_s5", shortTitle: "5. Periféricos de Salida", title: "5. PERIFÉRICOS DE SALIDA: CARACTERÍSTICAS Y FUNCIONAMIENTO", icon: "output"
    },
    {
      id: "t7_s5_1", shortTitle: "5.1. Monitor", title: "5.1. MONITOR",
      content: [
        { type: 'paragraph', text: 'Principal dispositivo de salida visual. Sus características clave son <strong>Tamaño</strong> (pulgadas), <strong>Resolución</strong> (1080p, 4K), <strong>Tasa de Refresco</strong> (Hz) y <strong>Tecnología del panel</strong>.' },
        { type: 'keyConcept', title: 'Tecnologías de Panel', items: [
          '<strong>LCD-IPS:</strong> El estándar por su buena reproducción de color y ángulos de visión. Necesita una luz de fondo (backlight).',
          '<strong>Mini-LED:</strong> Es un tipo de retroiluminación para paneles LCD que usa miles de pequeños LEDs, mejorando drásticamente el contraste.',
          '<strong>OLED / QD-OLED:</strong> Cada píxel emite su propia luz, logrando negros perfectos y un contraste "infinito". Es la tecnología de gama más alta.'
        ]},
        { type: 'practicalExample', title: '¿DPI o Tasa de Refresco (Hz)?', text: 'Los <strong>DPI</strong> son una característica de un periférico de entrada (ratón) que mide su sensibilidad. La <strong>Tasa de Refresco (Hz)</strong> es una característica de un periférico de salida (monitor) que mide cuántas veces se actualiza la imagen por segundo. No deben confundirse.'}
      ]
    },
    {
        id: "t7_s5_2", shortTitle: "5.2. Impresora", title: "5.2. IMPRESORA",
        content: [
            { type: 'paragraph', text: 'Produce una copia física de documentos o imágenes. Tipos principales:'},
            { type: 'list', items: ['<strong>Inyección de tinta:</strong> Ideal para fotografía y color.', '<strong>Láser:</strong> Rápida y eficiente para grandes volúmenes de texto.', '<strong>Térmica:</strong> Usada para tickets y recibos.', '<strong>Impresoras 3D:</strong> Crean objetos tridimensionales capa por capa (FDM, SLA).']},
            { type: 'practicalExample', title: '¿Cómo funciona una impresora 3D (FDM)?', text: 'El tipo más común, <strong>FDM (Fused Deposition Modeling)</strong>, funciona como una pistola de pegamento caliente robotizada. Derrite un filamento de plástico y lo deposita en capas muy finas, una sobre otra, siguiendo las instrucciones de un modelo digital hasta construir el objeto completo.'}
        ]
    },
    {
        id: "t7_s5_3", shortTitle: "5.3. Altavoz", title: "5.3. ALTAVOZ",
        content: [ { type: 'paragraph', text: 'Transductor que convierte una señal eléctrica en ondas sonoras. Sus características principales son la respuesta en frecuencia, la potencia y la impedancia.' } ]
    },
    {
      id: "t7_s6", shortTitle: "6. Periféricos de E/S", title: "6. PERIFÉRICOS DE ENTRADA/SALIDA: CARACTERÍSTICAS Y FUNCIONAMIENTO", icon: "io"
    },
    {
        id: "t7_s6_1", shortTitle: "6.1. Almacenamiento", title: "6.1. PERIFÉRICOS DE ALMACENAMIENTO",
        content: [ { type: 'paragraph', text: 'Discos duros externos, SSD externos, memorias USB. Permiten cargar datos hacia el ordenador (entrada) y recuperar datos desde él (salida).' } ]
    },
    {
        id: "t7_s6_2", shortTitle: "6.2. Comunicación", title: "6.2. PERIFÉRICOS DE COMUNICACIÓN",
        content: [
          { type: 'paragraph', text: 'Facilitan el intercambio de datos con otros sistemas:' },
          { type: 'list', items: ['<strong>Tarjetas de Red (NIC):</strong> Permiten la conexión a redes (Ethernet, Wi-Fi).', '<strong>Routers y Switches:</strong> Gestionan el tráfico de datos en una red.']}
        ]
    },
    {
        id: "t7_s7", shortTitle: "7. Tendencias Actuales", title: "7. TENDENCIAS ACTUALES EN EL MERCADO DE LOS PERIFÉRICOS",
        icon: "trends",
        content: [
            { type: 'paragraph', text: 'Las tendencias actuales se centran en la conectividad inalámbrica, la ergonomía, y la integración de tecnologías inmersivas como la Realidad Virtual y Aumentada.'},
            { type: 'keyConcept', title: 'VR vs. AR', items: [
              '<strong>Realidad Virtual (VR):</strong> Te sumerge completamente en un mundo digital, bloqueando el mundo real. Usos: videojuegos, simulaciones, entrenamiento.',
              '<strong>Realidad Aumentada (AR):</strong> Superpone información digital sobre el mundo real. Usos: indicaciones de GPS sobre la carretera, filtros de Instagram, asistencia en cirugía.',
              '<strong>Realidad Mixta (MR):</strong> Un tipo avanzado de AR donde los objetos virtuales pueden interactuar con el entorno real.'
            ]},
            { type: 'paragraph', text: 'Visores comerciales relevantes en 2024:'},
            { type: 'list', items: [
                '<strong>VR de Consumo:</strong> <code>Meta Quest 3</code> (el estándar actual), <code>PlayStation VR2</code>.',
                '<strong>VR de PC de gama alta:</strong> <code>Valve Index</code>.',
                '<strong>AR / MR:</strong> <code>Apple Vision Pro</code>, <code>Microsoft HoloLens 2</code>.'
            ]}
        ]
    },
    // ... El resto de apartados se generan fielmente a partir de aquí
    { id: 't7_s8', title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL", shortTitle: "8. Aplicación", icon: "application", content: [ {type: 'paragraph', text: 'El conocimiento de los periféricos es esencial. En FP, se estudia en módulos de hardware y montaje. En el ámbito laboral, es clave para el soporte técnico, el diseño de sistemas y el desarrollo de nuevas aplicaciones que aprovechen periféricos avanzados como los de VR/AR.'} ] },
    { id: 't7_s9', title: "9. CONCLUSIÓN", shortTitle: "9. Conclusión", icon: "conclusion", content: [ {type: 'paragraph', text: 'Este tema ha ofrecido una visión global sobre los dispositivos periféricos, indispensables para la interacción del computador con el exterior. Se han analizado sus características, funcionamiento y las tendencias actuales, como la realidad virtual y aumentada, que están redefiniendo la forma en que nos comunicamos con la tecnología.'} ] },
    { id: 't7_s10', title: "10. BIBLIOGRAFÍA", shortTitle: "10. Bibliografía", icon: "bibliography", content: [ {type: 'bibliography', items: [{text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.'}, {text: 'Stallings, W. (2006). <em>Organización y arquitectura de computadores</em>. Editorial Prentice-Hall.'}] } ] }
  ],
  glossary: [
      { term: 'Periférico', definition: 'Dispositivo que permite la comunicación entre el ordenador y el exterior (usuario u otros sistemas).' },
      { term: 'DPI (Dots Per Inch)', definition: 'Métrica que indica la sensibilidad de un ratón o la resolución de un escáner/impresora.' },
      { term: 'Tasa de Refresco (Hz)', definition: 'Número de veces que un monitor actualiza su imagen por segundo. Más Hz equivale a una imagen más fluida.' },
      { term: 'OLED', definition: 'Tecnología de panel donde cada píxel emite su propia luz, logrando negros perfectos y contraste infinito.' },
      { term: 'Teclado Mecánico', definition: 'Teclado que utiliza interruptores físicos individuales para cada tecla, ofreciendo una alta durabilidad y respuesta táctil.' },
      { term: 'Realidad Virtual (VR)', definition: 'Tecnología que sumerge al usuario en un entorno completamente digital, bloqueando el mundo real.' },
      { term: 'Realidad Aumentada (AR)', definition: 'Tecnología que superpone información u objetos digitales sobre el mundo real.' }
  ]
};