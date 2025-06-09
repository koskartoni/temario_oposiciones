// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 74/49
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme74Data = {
  id: "theme74",
  name: "TEMA 74/49: Sistemas Multimedia",
  title: "TEMA 74/49: SISTEMAS MULTIMEDIA",
  version: "Octubre 2024",
  sections: [
    {
      id: "t74_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Los <strong>sistemas multimedia</strong> constituyen una forma de comunicación que hace uso de diferentes medios (imagen, texto, sonido, vídeo) en un mismo entorno. Con el paso del tiempo, han evolucionado hacia la <strong>multimedia interactiva</strong>, permitiendo al usuario intervenir en el proceso y facilitando un aprendizaje y una experiencia más intuitiva.' },
        { type: 'paragraph', text: 'El estudio de los sistemas multimedia está presente en el currículo de la familia profesional de Informática y Comunicaciones, por ejemplo, en los módulos de <strong>Sistemas de gestión empresarial</strong> y <strong>Sistemas informáticos</strong> de los ciclos de DAM y DAW.' }
      ]
    },
    {
      id: "t74_s2",
      shortTitle: "2. Elementos del Sistema",
      title: "2. ELEMENTOS DE UN SISTEMA MULTIMEDIA",
      icon: "components",
      content: [
        { type: 'flowDiagram', title: 'Componentes de un Sistema Multimedia',
          initialNodes: [
            { id: 'sm', position: { x: 150, y: 125 }, data: { label: 'Sistema Multimedia' }, className: 'node-bus-control'},
            { id: 'info', position: { x: 150, y: 0 }, data: { label: 'Información (Contenido)' }},
            { id: 'sw', position: { x: 0, y: 250 }, data: { label: 'Software (Aplicaciones)' }},
            { id: 'hw', position: { x: 300, y: 250 }, data: { label: 'Hardware (Dispositivos)' }}
          ],
          initialEdges: [ { id: 'e1', source: 'info', target: 'sm', animated:true }, { id: 'e2', source: 'sm', target: 'sw', animated:true }, { id: 'e3', source: 'sm', target: 'hw', animated:true } ]
        }
      ]
    },
    {
      id: "t74_s3",
      shortTitle: "3. Medios Digitales",
      title: "3. MEDIOS DIGITALES",
      icon: "digitalMedia",
      content: [
        { type: 'subheading', text: '3.1. TEXTO'},
        { type: 'paragraph', text: 'El modo más habitual para la comunicación asíncrona. Se clasifica en <strong>texto sin formato</strong> (<code>ASCII</code>), <strong>texto formateado</strong> (<code>PDF</code>) y <strong>lenguajes de marcas</strong> (<code>HTML</code>, <code>XML</code>).' },
        { type: 'subheading', text: '3.2. IMÁGENES'},
        { type: 'table', headers: ['Tipo', 'Descripción', 'Formatos Comunes'], rows: [
          ['Mapa de bits (Raster)', 'Compuesta por una rejilla de píxeles. La calidad depende de la resolución.', '<code>JPEG</code>, <code>PNG</code>, <code>GIF</code>'],
          ['Vectorial', 'Compuesta por objetos geométricos. Escala sin perder calidad.', '<code>SVG</code>, <code>AI</code>, <code>EPS</code>']
        ]},
        { type: 'subheading', text: '3.3. VÍDEO'},
        { type: 'paragraph', text: 'Secuencia de imágenes (fotogramas) por segundo. La <strong>compresión</strong> es esencial para reducir su tamaño. Los <strong>códecs</strong> definen cómo se comprime y descomprime. Códecs comunes: <code>H.264 (AVC)</code>, <code>H.265 (HEVC)</code> y el emergente y libre de royalties <code>AV1</code>.'},
        { type: 'practicalExample', title: 'Streaming y Compresión', text: 'Plataformas como YouTube o Netflix utilizan códecs muy avanzados para transmitir vídeo de alta calidad (4K) con un consumo de ancho de banda razonable. Sin compresión, sería imposible.'},
        { type: 'subheading', text: '3.4. SONIDO'},
        { type: 'paragraph', text: 'Se digitaliza para su uso en sistemas multimedia. Formatos comunes: <code>MP3</code>, <code>AAC</code> (con pérdidas), <code>WAV</code>, <code>FLAC</code> (sin pérdidas).'}
      ]
    },
    {
      id: "t74_s4",
      shortTitle: "4. Desarrollo Tecnológico",
      title: "4. DESARROLLO TECNOLÓGICO DE LOS DISPOSITIVOS DIGITALES",
      icon: "development",
      content: [
        { type: 'paragraph', text: 'La evolución de los medios digitales está ligada al desarrollo tecnológico en campos como los <strong>procesadores</strong>, el <strong>almacenamiento</strong> masivo, las <strong>comunicaciones</strong> (fibra, 5G), los <strong>algoritmos</strong> de compresión y los <strong>dispositivos de visualización</strong> de alta resolución.' }
      ]
    },
    {
      id: "t74_s5",
      shortTitle: "5. Aplicaciones Multimedia",
      title: "5. APLICACIONES DE LOS SISTEMAS MULTIMEDIA",
      icon: "application",
      content: [
        { type: 'list', items: [
            '<strong>Información y comunicaciones:</strong> Televisión digital, enciclopedias interactivas.',
            '<strong>Publicidad y marketing:</strong> Publicidad en redes sociales, marketing móvil.',
            '<strong>Educación y entretenimiento:</strong> Contenidos educativos interactivos, videojuegos, plataformas de streaming.'
        ]}
      ]
    },
    {
      id: "t74_s6",
      shortTitle: "6. Tendencias Actuales",
      title: "6. TENDENCIAS ACTUALES EN CONTENIDO MULTIMEDIA",
      icon: "trends",
      content: [
        { type: 'keyConcept', title: 'VR vs. AR', items: [
          '<strong>Realidad Virtual (VR):</strong> Te sumerge completamente en un mundo digital, aislando al usuario del entorno real. Ideal para inmersión total.',
          '<strong>Realidad Aumentada (AR):</strong> Superpone información digital sobre el mundo real, enriqueciendo la visión del entorno.',
          '<strong>Realidad Mixta (MR):</strong> Un tipo avanzado de AR donde los objetos virtuales pueden interactuar con el entorno real.'
        ]},
        { type: 'paragraph', text: 'Visores comerciales relevantes en 2024:'},
        { type: 'list', items: [
            '<strong>VR de Consumo:</strong> <code>Meta Quest 3</code>, <code>PlayStation VR2</code>.',
            '<strong>AR / MR:</strong> <code>Apple Vision Pro</code>, <code>XREAL Air 2</code>.'
        ]},
        { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
          { question: 'Para un logo que debe usarse en una tarjeta de visita y en una valla publicitaria gigante, ¿qué tipo de imagen es la ideal?', options: ['Mapa de bits (JPEG)', 'Vectorial (SVG)'], correctAnswerIndex: 1 },
          { question: 'Una aplicación que te muestra cómo quedaría un mueble en tu salón a través de la cámara de tu móvil es un ejemplo de:', options: ['Realidad Virtual', 'Realidad Aumentada'], correctAnswerIndex: 1 }
        ]}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: "t74_s7", shortTitle: "7. Aplicación Escolar y Laboral", title: "7. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'El conocimiento sobre sistemas multimedia es fundamental. En FP, los estudiantes adquieren competencias para trabajar con herramientas de creación y edición de contenido. En lo laboral, es clave para crear contenido atractivo, optimizar la experiencia de usuario y utilizar tecnologías de transmisión como el streaming.' } ] },
    { id: 't74_s8', title: "8. CONCLUSIÓN", shortTitle: "8. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'En este tema se ha presentado una visión global de las aplicaciones de los sistemas multimedia interactivos. Su evolución ha sido un factor clave en la transformación de las redes de telecomunicaciones, que han tenido que adaptarse para transmitir las grandes cantidades de tráfico multimedia que la sociedad demanda hoy en día.' } ] },
    { id: 't74_s9', title: "9. BIBLIOGRAFÍA", shortTitle: "9. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Aedo, I. (2005). <em>Sistemas Multimedia: Análisis, Diseño y Evaluación</em>. Ed.UNED.' }, { text: 'Castro, M. (2002) <em>Diseño y Desarrollo Multimedia: Imagen, Sonido y Vídeo</em>. Ed. RA-MA.' } ] } ] }
  ],
  glossary: [
    { term: 'Multimedia', definition: 'Forma de comunicación que utiliza diversos medios como texto, imagen, sonido y vídeo en un mismo entorno.' },
    { term: 'Multimedia Interactiva', definition: 'Sistema multimedia que permite la interacción del usuario con los contenidos, dejando de ser un mero espectador.' },
    { term: 'Imagen Raster (Mapa de bits)', definition: 'Imagen compuesta por una rejilla de píxeles. Su calidad depende de la resolución y es ideal para fotografías.' },
    { term: 'Imagen Vectorial', definition: 'Imagen compuesta por objetos geométricos definidos matemáticamente. Se puede escalar infinitamente sin perder calidad.' },
    { term: 'Códec', definition: 'Algoritmo para comprimir y descomprimir datos, especialmente vídeo y audio.' },
    { term: 'Realidad Virtual (VR)', definition: 'Tecnología que sumerge al usuario en un entorno completamente digital, bloqueando el mundo real.' },
    { term: 'Realidad Aumentada (AR)', definition: 'Tecnología que superpone información u objetos digitales sobre la visión del mundo real.' }
  ]
};