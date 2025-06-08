export const theme07Data = {
    id: "theme7",
    name: "TEMA 7: Periféricos de E/S",
    title: "TEMA 7. INFORMÁTICA / S.A.I. - DISPOSITIVOS PERIFÉRICOS DE ENTRADA/SALIDA. CARACTERÍSTICAS Y FUNCIONAMIENTO",
    version: "Versión: Mayo 2024 (Actualizado)",
    sections: [
      {
        id: "t7_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema, ubicado en el bloque de "Hardware", se centra en los <strong>dispositivos periféricos</strong>, los componentes que permiten la comunicación entre el computador y el mundo exterior (incluyendo al usuario).' },
          { type: 'paragraph', text: 'Retomando la arquitectura de <strong>Von Neumann</strong>, los periféricos se conectan a la <strong>Unidad de Entrada/Salida (E/S)</strong>, actuando como los sentidos y la voz del sistema informático.' }
        ]
      },
      {
        id: "t7_s2",
        shortTitle: "2. Definición",
        title: "2. DEFINICIÓN DE DISPOSITIVO PERIFÉRICO",
        content: [
          { type: 'paragraph', text: 'Los dispositivos de <strong>Entrada/Salida (E/S)</strong> (en inglés, <em>Input/Output I/O</em>) o <strong>periféricos</strong> permiten la comunicación entre la computadora y el usuario o con otros sistemas. Son todos aquellos dispositivos que se conectan a la unidad central de procesamiento pero no forman parte de ella.' }
        ]
      },
      {
        id: "t7_s3",
        shortTitle: "3. Clasificación",
        title: "3. CLASIFICACIÓN DE PERIFÉRICOS",
        content: [
          { type: 'paragraph', text: 'Los periféricos se han clasificado históricamente de la siguiente manera (Moreno, 2019):' },
          { type: 'list', items: [
              '<strong>Periféricos de entrada:</strong> Su función es recibir datos e introducirlos en el equipo informático (ej. teclado, ratón).',
              '<strong>Periféricos de salida:</strong> Su función es mostrar datos provenientes del sistema informático (ej. monitor, impresora).',
              '<strong>Periféricos de entrada/salida (mixtos):</strong> Pueden actuar en ambas direcciones. Se subdividen en:',
          ]},
          { type: 'nestedList', items: [
              { text: '<strong>Periféricos de almacenamiento:</strong> Dispositivos que almacenan datos e información (ej. SSD externo, pendrive).', },
              { text: '<strong>Periféricos de comunicación:</strong> Permiten la interacción entre dos o más dispositivos (ej. tarjeta de red, router).', }
          ]}
        ]
      },
      {
        id: "t7_s4_1", shortTitle: "4.1. Teclado", title: "4.1. TECLADO",
        content: [
          { type: 'paragraph', text: 'Los teclados incluyen teclas para letras, números, símbolos y funciones. La disposición más común es <code>QWERTY</code>, aunque existen otras como <code>AZERTY</code> (Francia) o <code>Dvorak</code> (optimizada para ergonomía).'},
          { type: 'subheading', text: 'Tipos de Teclados por Mecanismo:'},
          { type: 'list', items: [
              '<strong>Mecánicos:</strong> Utilizan interruptores físicos individuales para cada tecla. Son muy apreciados por su durabilidad, precisión y la respuesta táctil que ofrecen (con variantes como <em>lineal</em>, <em>táctil</em> o <em>clicky</em>).',
              '<strong>De membrana:</strong> Una capa de caucho o silicona flexible cierra un circuito al presionar. Son más silenciosos y económicos.',
              '<strong>Ópticos:</strong> Utilizan un haz de luz infrarroja bajo cada tecla. Al presionar, se interrumpe el haz, registrando la pulsación. Ofrecen una respuesta extremadamente rápida y mayor durabilidad al no haber contacto metálico.'
          ]},
          { type: 'subheading', text: 'Conectividad:'},
          { type: 'list', items: ['<strong>Con cable:</strong> Generalmente por USB.', '<strong>Inalámbricos:</strong> Usan tecnologías como Bluetooth o radiofrecuencia (RF) de 2.4 GHz con un receptor USB.']}
        ]
      },
      {
        id: "t7_s4_2", shortTitle: "4.2. Ratón", title: "4.2. RATÓN",
        content: [
          { type: 'paragraph', text: 'El ratón es un dispositivo de entrada esencial para interactuar con interfaces gráficas, permitiendo seleccionar, arrastrar y hacer clic en elementos en pantalla. Sus características principales son:' },
          { type: 'definitionList', items: [
              { term: '1. Diseño y ergonomía:', definition: 'La forma y tamaño varían para adaptarse a diferentes agarres (palma, garra, punta de los dedos) y usuarios (diestros, zurdos, ambidiestros).' },
              { term: '2. Tecnología de detección:', subItems: [ '<strong>Óptico:</strong> Un LED ilumina la superficie y una cámara captura miles de imágenes por segundo para detectar el movimiento.', '<strong>Láser:</strong> Similar al óptico, pero usa un láser para mayor precisión y funcionamiento en más superficies (incluido vidrio).' ]},
              { term: '3. Tipo de conexión:', subItems: ['<strong>Con cable (USB)</strong> para latencia mínima o <strong>inalámbricos (Bluetooth/RF)</strong> para mayor comodidad.']},
              { term: '4. Resolución y sensibilidad (DPI):', definition: 'Los <strong>DPI (Dots Per Inch)</strong> indican la sensibilidad. Un DPI alto significa que el cursor se mueve más con menos movimiento físico del ratón, útil para monitores de alta resolución.'}
          ]}
        ]
      },
      {
          id: "t7_s4_3", shortTitle: "4.3. Escáner", title: "4.3. ESCÁNER",
          content: [
              { type: 'paragraph', text: 'El escáner es un periférico de entrada que convierte documentos físicos en imágenes digitales. Sus tipos principales son:'},
              { type: 'list', items: [
                  '<strong>Escáner de cama plana:</strong> El más común, ideal para documentos, fotos, etc.',
                  '<strong>Escáner con alimentador (ADF):</strong> Digitaliza automáticamente grandes volúmenes de documentos.',
                  '<strong>Escáner rotativo o de tambor:</strong> Usado en entornos profesionales de alta calidad por su gran resolución.'
              ]},
              { type: 'paragraph', text: 'Sus características clave son la <strong>Resolución óptica (DPI)</strong> y la <strong>Profundidad de Color (bits)</strong>.'}
          ]
      },
      {
        id: "t7_s5_1", shortTitle: "5.1. Monitor", title: "5.1. MONITOR",
        content: [
          { type: 'paragraph', text: 'El monitor es el principal dispositivo de salida visual. Sus características clave son:' },
          { type: 'list', items: ['<strong>Tamaño:</strong> Medido en pulgadas en diagonal.', '<strong>Resolución:</strong> Número de píxeles (ej. 1080p, 1440p/QHD, 2160p/4K).', '<strong>Tasa de refresco:</strong> Veces que la imagen se actualiza por segundo (Hz). 60Hz es estándar, 144Hz o más es común para gaming.', '<strong>Tecnología del panel:</strong> Determina la calidad de imagen.'] },
          { type: 'subheading', text: 'Tecnologías de Panel:'},
          { type: 'definitionList', items: [
            { term: 'LCD (Liquid Crystal Display) con paneles TN, VA, IPS:', definition: 'Utilizan cristales líquidos y una luz de fondo (backlight). <strong>IPS (In-Plane Switching)</strong> es la más popular por sus excelentes ángulos de visión y reproducción de color.' },
            { term: 'LED y Mini-LED:', definition: 'Son tipos de retroiluminación para paneles LCD. <strong>Mini-LED</strong> usa miles de pequeños LEDs para un control de la luz mucho más preciso, mejorando drásticamente el contraste y los negros.'},
            { term: 'OLED (Organic Light Emitting Diode):', definition: 'Cada píxel emite su propia luz y puede apagarse por completo, logrando negros perfectos y un contraste infinito. <strong>QD-OLED</strong> es una evolución que combina OLED con Quantum Dots para un brillo y volumen de color aún mayores.' }
          ]},
          { type: 'paragraph', text: 'Las conexiones modernas más comunes son <code>HDMI</code> (siendo <strong>HDMI 2.1</strong> el estándar para 4K a 120Hz) y <code>DisplayPort</code> (siendo <strong>DisplayPort 2.1</strong> el más avanzado).' }
        ]
      },
      {
          id: "t7_s5_2", shortTitle: "5.2. Impresora", title: "5.2. IMPRESORA",
          content: [
              { type: 'paragraph', text: 'Dispositivo de salida que produce una copia física (impresión) de documentos o imágenes. Tipos principales por tecnología:'},
              { type: 'list', items: ['<strong>Inyección de tinta:</strong> Rocían minúsculas gotas de tinta líquida sobre el papel. Ideales para fotografía y color de alta calidad.', '<strong>Láser:</strong> Utilizan un tóner (polvo fino) que se adhiere al papel mediante calor y electricidad estática. Muy rápidas y eficientes para grandes volúmenes de texto.', '<strong>Térmica:</strong> Usan calor para imprimir sobre un papel especial termosensible. Comunes en tickets y recibos.', '<strong>Impresoras 3D:</strong> Crean objetos tridimensionales a partir de un diseño digital, depositando material capa por capa (plástico, resina, etc.).']}
          ]
      },
      {
          id: "t7_s6", shortTitle: "6. Periféricos E/S", title: "6. PERIFÉRICOS DE ENTRADA/SALIDA",
          content: [
              { type: 'paragraph', text: 'Son aquellos que permiten tanto ingresar como emitir información.'},
              { type: 'definitionList', items: [
                  { term: 'Periféricos de almacenamiento:', definition: 'Discos duros externos, SSD externos, memorias USB. Permiten cargar datos hacia el ordenador (entrada) y recuperar datos desde él (salida).' },
                  { term: 'Periféricos de comunicación:', definition: 'Facilitan el intercambio de datos con otros sistemas.', subItems: ['<strong>Tarjetas de Red (NIC):</strong> Permiten la conexión a redes (Ethernet, Wi-Fi).', '<strong>Routers y Switches:</strong> Dispositivos que gestionan el tráfico de datos en una red.']}
              ]}
          ]
      },
      {
          id: "t7_s7", shortTitle: "7. Tendencias", title: "7. TENDENCIAS ACTUALES EN EL MERCADO DE LOS PERIFÉRICOS",
          content: [
              { type: 'paragraph', text: 'Las tendencias actuales se centran en la <strong>conectividad inalámbrica</strong>, la <strong>ergonomía</strong>, y la integración de tecnologías inmersivas como la <strong>realidad virtual (VR)</strong> y la <strong>realidad aumentada (AR)</strong>.'},
              { type: 'subheading', text: 'Realidad Virtual y Aumentada'},
              { type: 'list', items: [
                  '<strong>En la educación:</strong> Reconstrucción de patrimonio histórico o simulaciones científicas.',
                  '<strong>En la medicina:</strong> Superposición de información (AR) durante cirugías o entrenamiento con simuladores (VR).',
                  '<strong>En el entretenimiento (metaversos):</strong> Mundos virtuales para socializar, jugar, asistir a eventos, etc.'
              ]},
              { type: 'paragraph', text: 'Algunos ejemplos de visores comerciales son:'},
              { type: 'nestedList', items: [
                  { text: '<strong>Visores de Realidad Virtual:', subItems: ['<code>Meta Quest 3</code> (el estándar de consumo actual)', '<code>PlayStation VR2</code>', '<code>Valve Index</code>'] },
                  { text: '<strong>Visores de Realidad Aumentada/Mixta:', subItems: ['<code>Apple Vision Pro</code>', '<code>Microsoft HoloLens 2</code>'] }
              ]}
          ]
      },
      // AÑADE ESTOS OBJETOS AL FINAL DEL ARRAY 'sections' EN TU ARCHIVO theme-07.js

    {
        id: "t7_s8",
        shortTitle: "8. Aplicación",
        title: "8. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La comprensión de los dispositivos periféricos es fundamental tanto en el ámbito educativo como en el profesional por su papel esencial en la interacción y la funcionalidad de los sistemas informáticos.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'nestedList', items: [
              { text: '<strong>Educación Secundaria:</strong>', subItems: ['Se introducen los conceptos básicos de los dispositivos periféricos (teclados, ratones, impresoras, monitores) mediante ejemplos prácticos para ilustrar cómo se comunican con el ordenador.'] },
              { text: '<strong>Formación Profesional:</strong>', subItems: ['Los estudiantes aprenden sobre la variedad de dispositivos periféricos, sus características técnicas y su evolución tecnológica en diferentes módulos de hardware y montaje.'] }
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Diseño y evaluación de periféricos:</strong> Profesionales que trabajan en el diseño y la evaluación de periféricos innovadores necesitan entender profundamente cómo estos dispositivos mejoran la funcionalidad y la ergonomía.',
              '<strong>Soporte técnico:</strong> Esencial que el personal de soporte técnico entienda la configuración y funcionamiento de diversos dispositivos periféricos para diagnosticar y resolver problemas eficazmente.',
              '<strong>Desarrollo de nuevas aplicaciones para periféricos:</strong> Con el avance de la tecnología, hay una creciente necesidad de innovar en el diseño de software que aproveche las capacidades de los periféricos modernos, como la realidad virtual.'
          ]}
        ]
      },
      {
        id: "t7_s9",
        shortTitle: "9. Conclusión",
        title: "9. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En este tema se ha presentado una visión global sobre los dispositivos periféricos de E/S de un computador, los cuales son indispensables para el intercambio de información con el exterior. Se han mostrado sus características, posibilidades de uso, y los principios físicos de su funcionamiento.' },
          { type: 'paragraph', text: 'Se ha hecho especial hincapié en los periféricos de mayor aplicación en la actualidad, destacando la importancia histórica y pedagógica de los dispositivos clásicos y analizando las tendencias en los más avanzados, como los relacionados con la realidad virtual y aumentada.' }
        ]
      },
      {
        id: "t7_s10",
        shortTitle: "10. Bibliografía",
        title: "10. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'Stallings, W. (2006). <em>Organización y arquitectura de computadores</em>. Editorial Prentice-Hall.' },
              { text: 'Tanenbaum, A. (2000). <em>Organización de computadoras. Un enfoque estructurado</em>. Editorial Prentice-Hall.' },
              { text: 'Moreno, J.C. (2019). <em>Fundamentos de hardware</em>. Editorial Sintesis.' },
              { text: 'Patterson, D. y Hennessy, J. (2000). <em>Estructura y diseño de computadores</em>. Editorial Reverté.' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' },
              { text: 'ComputerHoy', url: 'https://computerhoy.com' },
              { text: 'Xataka', url: 'https://www.xataka.com' }
          ]}
        ]
      }
    ]
  };