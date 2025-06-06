// CÓDIGO PARA EL ARCHIVO: /src/data/theme-01.js

export const theme01Data = {
    // Metadatos del Tema
    id: "theme1",
    name: "TEMA 1: Rep. y Com. Información",
    title: "TEMA 1. INFORMÁTICA / S.A.I. - REPRESENTACIÓN Y COMUNICACIÓN DE LA INFORMACIÓN",
    version: "Versión: Mayo 2024",
  
    // Contenido estructurado por secciones del índice
    sections: [
      {
        id: "t1_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'El presente tema forma parte del temario oficial publicado en el BOE de 13 de febrero de 1996, donde se aprueba el temario de acceso a la especialidad de Informática / Sistemas y aplicaciones informáticas.' },
          { type: 'paragraph', text: 'A lo largo de este tema, a través de autores como Stallings, Prieto y Joyanes, se van a estudiar los aspectos relacionados con la representación de la información en el interior de los computadores. Se consideran cuatro tipos de información: textos, sonidos, imágenes y datos numéricos, ya que cada uno de ellos presenta peculiaridades muy diferentes. Es decir, se trata de explicar los procesos que transforman la información externa al ordenador en patrones de bits almacenables y procesables por sus elementos internos.' },
          { type: 'paragraph', text: 'También se van a describir los procesos de comunicación de la información, describiendo aspectos tales como el cifrado de datos, técnicas para la detección de errores y técnicas para la compresión de datos.' },
          { type: 'paragraph', text: 'Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio de la representación y comunicación de la información está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:' },
          { type: 'nestedList', items: [
              { text: 'CFGM de Sistemas Microinformáticos y Redes (Real Decreto 1691/2007 y Orden/Decreto autonómico)', subItems: ['Módulo: Sistemas operativos monopuesto', 'Módulo: Seguridad informática'] },
              { text: 'CFGS de Administración de Sistemas Informáticos en Red (Real Decreto 1629/2009 y Orden/Decreto autonómico)', subItems: ['Módulo: Seguridad y alta disponibilidad'] }
          ]}
        ]
      },
      {
        id: "t1_s2",
        shortTitle: "2. Rep. Información",
        title: "2. REPRESENTACIÓN DE LA INFORMACIÓN",
        content: [
          { type: 'paragraph', text: 'Relacionado con cómo se representa la información con la que trabaja un computador podemos considerar que existen dos niveles en la representación de la información:' },
          { type: 'definitionList', items: [
              { term: 'Nivel de representación externa:', definition: 'usada por las personas e inadecuada para el ordenador.' },
              { term: 'Nivel de representación interna:', definition: 'adecuada al ordenador y no inteligible directamente para las personas.' }
          ]},
          { type: 'paragraph', text: 'A continuación, se describe cómo la información expresada en el nivel de representación externa es representable en los computadores (representación interna). Este paso de una representación a otra se denomina codificación y el proceso inverso decodificación.' },
          { type: 'paragraph', text: 'Los computadores internamente representan la información usando una lógica binaria, es decir, su alfabeto tiene únicamente dos símbolos: 0 y 1. Esto se debe a que el diseño de un sistema informático resulta más fácil, su realización menos compleja y su funcionamiento muy fiable si se utilizan sólo dos valores o estados posibles (Prieto, 2006).' },
          { type: 'paragraph', text: 'Dependiendo del tipo de información que se represente se utilizarán diferentes representaciones. Se pueden diferenciar cuatro tipos de representaciones:' },
          { type: 'list', items: ['Representación de textos', 'Representación de sonidos', 'Representación de imágenes', 'Representación de datos numéricos'] }
        ]
      },
      {
          id: 't1_s2_1',
          shortTitle: "2.1. Textos",
          title: "2.1. REPRESENTACIÓN DE TEXTOS",
          content: [
              { type: 'paragraph', text: 'La información en formato de texto se representa mediante un código en el que cada uno de los distintos símbolos del texto (tales como letras del alfabeto o signos de puntuación) se asignan a un único patrón de bits.'},
              { type: 'paragraph', text: 'En resumen, se puede representar cualquier información escrita (texto) mediante caracteres. Los caracteres que se utilizan en computación suelen agruparse en cinco categorías:'},
              { type: 'definitionList', items: [
                  { term: 'Caracteres alfabéticos:', definition: 'corresponde a las letras mayúsculas y minúsculas del abecedario inglés (a, b, ...z, A, B, ..., Z).' },
                  { term: 'Caracteres numéricos:', definition: 'corresponde a las diez cifras decimales (0, 1, ..., 9).' },
                  { term: 'Caracteres especiales:', definition: 'son símbolos ortográficos y matemáticos no incluidos en los grupos anteriores (), (, ¡, ¿, + - }, etc.).' },
                  { term: 'Caracteres gráficos:', definition: 'son símbolos con los que se pueden representar figuras, dibujos, etc.' },
                  { term: 'Caracteres de control:', definition: 'se corresponden con las órdenes de control (carácter de salto de página, comienzo de línea, etc.).' },
              ]},
              { type: 'paragraph', text: 'Debido a que en la representación interna de la información en los computadores solo disponemos de ceros y unos, la comunicación hombre-máquina se debe establecer a través de una correspondencia entre el conjunto de todos los caracteres, x = {a, ..., z, A, ..., Z, 0, ..., 9}, y un conjunto β = {0,1}n. Esta correspondencia establece lo que se conoce como código de entrada/salida. Los códigos más utilizados en la actualidad son: EBCDIC, ASCII y Unicode:'},
              { type: 'list', items: [
                  'EBCDIC (Extended Binary Coded Decimal Interchange Code): utiliza 8 bits para representar cada carácter, por lo que puede representar hasta 256 caracteres.',
                  'ASCII (American Standard Code for Information Interchange): su versión básica utiliza 7 bits y es capaz de representar hasta 128 caracteres. Existen versiones ampliadas que utilizan 8 bits. Entre ellas se encuentran los códigos ISO 8859-n, donde n es un número que identifica el juego de los nuevos caracteres introducidos. Por ejemplo, la ISO 8859-1 (Latín-1) se proyectó para América y Europa occidental para incluir las vocales con tilde y otras letras latinas no usadas en los países anglosajones.',
                  'UNICODE: permite representar caracteres de numerosos idiomas internacionales como el chino, indio, ruso, etcétera. (Joyanes, 2020). Existen diferentes formas de codificar Unicode: UTF-8, UTF-16 y UTF-32. Esta última utiliza todos los puntos posibles de Unicode usando 32 bits (4 bytes por carácter). UTF-16 y UTF-8 son codificaciones de longitud variable. Esto significa que, si un carácter se puede representar con un sólo byte, UTF-8 empleará sólo un byte. Si requiere dos bytes, usará dos, y así sucesivamente.'
              ]}
          ]
      },
      // Aquí irían las demás secciones (2.2, 2.3, 2.4, 3, 4, 5, 6, 7), siguiendo el mismo formato.
      // Te las proporcionaré a medida que las necesitemos o en un único bloque si lo prefieres.
    ]
  };