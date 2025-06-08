// CÓDIGO ACTUALIZADO CON MEJORAS DIDÁCTICAS Y ESTRUCTURALES
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme01Data = {
  // Metadatos del Tema
  id: "theme1",
  name: "TEMA 1: Rep. y Com. Información",
  title: "TEMA 1. INFORMÁTICA / S.A.I. - REPRESENTACIÓN Y COMUNICACIÓN DE LA INFORMACIÓN",
  version: "Versión: Mayo 2024",
  sections: [
    {
      id: "t1_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'El presente tema forma parte del temario oficial publicado en el <strong>BOE de 13 de febrero de 1996</strong>, donde se aprueba el temario de acceso a la especialidad de <strong>Informática / Sistemas y aplicaciones informáticas</strong>.' },
        { type: 'keyConcept', title: 'Objetivo del Tema', text: 'Este tema se centra en cómo los ordenadores representan internamente cuatro tipos de información fundamentales: <strong>textos, sonidos, imágenes y datos numéricos</strong>. El objetivo es entender cómo se transforma la información del mundo real en <strong>patrones de bits</strong> que un ordenador puede procesar y comunicar.' },
        { type: 'paragraph', text: 'A lo largo de este tema, a través de autores como <strong>Stallings, Prieto y Joyanes</strong>, se van a estudiar los aspectos relacionados con la representación de la información en el interior de los computadores.' },
        { type: 'paragraph', text: 'También se van a describir los procesos de comunicación de la información, describiendo aspectos tales como el <strong>cifrado de datos</strong>, técnicas para la <strong>detección de errores</strong> y técnicas para la <strong>compresión de datos</strong>.' },
        { type: 'paragraph', text: 'Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio de la representación y comunicación de la información está presente dentro del currículo de la familia profesional de <strong>Informática y Comunicaciones</strong>. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:' },
        { type: 'nestedList', items: [
            { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> (Real Decreto 1691/2007)', subItems: ['Módulo: Sistemas operativos monopuesto', 'Módulo: Seguridad informática'] },
            { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> (Real Decreto 1629/2009)', subItems: ['Módulo: Seguridad y alta disponibilidad'] }
        ]}
      ]
    },
    {
      id: "t1_s2",
      shortTitle: "2. Rep. Información",
      title: "2. REPRESENTACIÓN DE LA INFORMACIÓN",
      icon: "representation",
      content: [
        { type: 'paragraph', text: 'Relacionado con cómo se representa la información con la que trabaja un computador podemos considerar que existen dos niveles en la representación de la información:' },
        { type: 'definitionList', items: [
            { term: 'Nivel de representación externa:', definition: 'usada por las personas e inadecuada para el ordenador.' },
            { term: 'Nivel de representación interna:', definition: 'adecuada al ordenador y no inteligible directamente para las personas.' }
        ]},
        { type: 'keyConcept', title: 'Codificación y Decodificación', text: 'El paso de la representación externa a la interna se llama <strong>codificación</strong>. El proceso inverso, de interna a externa, se denomina <strong>decodificación</strong>. Todo el sistema se basa en la <strong>lógica binaria</strong> (símbolos <code>0</code> y <code>1</code>) por su fiabilidad y simplicidad de implementación en hardware (Prieto, 2006).' },
        { type: 'paragraph', text: 'Dependiendo del tipo de información que se represente se utilizarán diferentes representaciones. Se pueden diferenciar cuatro tipos de representaciones:' },
        { type: 'list', items: ['Representación de textos', 'Representación de sonidos', 'Representación de imágenes', 'Representación de datos numéricos'] }
      ]
    },
    {
        id: 't1_s2_1',
        shortTitle: "2.1. Textos",
        title: "2.1. REPRESENTACIÓN DE TEXTOS",
        icon: 'text',
        content: [
            { type: 'paragraph', text: 'La información en formato de texto se representa mediante un <strong>código</strong> en el que cada uno de los distintos símbolos (caracteres) se asignan a un único patrón de bits.' },
            { type: 'list', items: [
                '<strong>EBCDIC (Extended Binary Coded Decimal Interchange Code):</strong> utiliza 8 bits (256 caracteres).',
                '<strong>ASCII (American Standard Code for Information Interchange):</strong> su versión básica utiliza 7 bits (128 caracteres). Versiones ampliadas como <code>ISO 8859-1 (Latín-1)</code> usan 8 bits.',
                '<strong>UNICODE:</strong> estándar actual para caracteres internacionales. Formatos comunes son <code>UTF-8</code> (longitud variable, eficiente para web), <code>UTF-16</code> y <code>UTF-32</code>.'
            ]},
            { type: 'practicalExample', title: 'Unicode en tu día a día', text: '¿Usas emojis como 👍 o 😂? ¡Estás usando Unicode! Es el estándar que permite que estos símbolos se vean correctamente en casi cualquier dispositivo del mundo.'},
            { type: 'quiz', title: 'Comprueba lo aprendido sobre Textos', questions: [
                { question: '¿Qué estándar de codificación de caracteres es el más utilizado en la web por su eficiencia y soporte multi-idioma?', options: ['ASCII', 'EBCDIC', 'Unicode (UTF-8)', 'ISO 8859-1'], correctAnswerIndex: 2 },
                { question: 'Si una codificación de caracteres usa 8 bits, ¿cuántos caracteres diferentes puede representar?', options: ['128', '256', '512', '1024'], correctAnswerIndex: 1 }
            ]}
        ]
    },
    {
        id: 't1_s2_2',
        shortTitle: "2.2. Sonidos",
        title: "2.2. REPRESENTACIÓN DE SONIDOS",
        icon: 'sound',
        content: [
            { type: 'paragraph', text: 'Una señal de sonido analógica se digitaliza mediante un proceso de <strong>muestreo</strong>, definido por dos parámetros:'},
            { type: 'definitionList', items: [
                { term: 'Frecuencia de muestreo:', definition: 'Número de muestras tomadas por segundo. A mayor frecuencia, mayor calidad (y mayor tamaño de archivo). Medido en Hercios (Hz).'},
                { term: 'Precisión (o profundidad de bits):', definition: 'Número de bits usados para representar cada muestra. A mayor precisión, mayor rango dinámico y calidad.'}
            ]},
            { type: 'practicalExample', title: 'Calidad de CD vs. MP3', text: 'Un CD de audio usa una frecuencia de muestreo de 44.100 Hz y 16 bits de precisión. Cuando creas un MP3, normalmente se reduce la frecuencia y/o la precisión para que el archivo ocupe mucho menos, a costa de perder algo de calidad (compresión con pérdidas).'}
        ]
    },
    {
        id: 't1_s2_3',
        shortTitle: "2.3. Imágenes",
        title: "2.3. REPRESENTACIÓN DE IMÁGENES",
        icon: 'image',
        content: [
            { type: 'keyConcept', title: 'Píxel vs. Vector', text: 'Existen dos formas básicas de representar imágenes: <ul><li><strong>Mapa de bits (o imagen rasterizada):</strong> descompone la imagen en una rejilla de puntos (píxeles) con un color asignado. Su calidad depende de la resolución.</li><li><strong>Mapa de vectores:</strong> descompone la imagen en objetos matemáticos (líneas, curvas, polígonos). No pierde calidad al escalar.</li></ul>' },
            { type: 'list', items: [
                '<strong>Formatos de mapa de bits:</strong> <code>BMP</code>, <code>TIFF</code>, <code>JPEG</code> (ideal para fotos, con pérdidas), <code>GIF</code> (animaciones, 256 colores), <code>PNG</code> (web, sin pérdidas, transparencias).',
                '<strong>Formatos de mapa de vectores:</strong> <code>SVG</code> (estándar web), <code>AI</code> (Adobe Illustrator), <code>EPS</code>, <code>DXF</code> (CAD).'
            ]},
            { type: 'practicalExample', title: '¿Cuándo usar cada tipo?', text: 'Usa un <strong>mapa de bits (JPEG)</strong> para una fotografía. Usa un <strong>mapa de vectores (SVG)</strong> para un logo de empresa, ya que puedes ampliarlo infinitamente sin que se "pixele".' }
        ]
    },
    {
        id: 't1_s2_4_1',
        shortTitle: "2.4.1. Enteros",
        title: "2.4.1. NÚMEROS ENTEROS",
        icon: 'integer',
        content: [
             { type: 'paragraph', text: 'Los números enteros se representan en notación binaria. Los métodos principales son:' },
             { type: 'definitionList', items: [
                 { term: 'Signo y magnitud:', definition: 'Un bit para el signo y el resto para el valor. Problema: dos representaciones para el cero (<code>+0</code> y <code>-0</code>).'},
                 { term: 'Complemento a 1 (C1):', definition: 'El negativo se obtiene invirtiendo todos los bits del positivo. Sigue teniendo dos ceros.'},
                 { term: 'Complemento a 2 (C2):', definition: 'El negativo se obtiene sumando 1 al Complemento a 1. Es el sistema más usado en computadores modernos porque tiene un solo cero y simplifica las operaciones aritméticas (la resta se convierte en una suma).'},
                 { term: 'Sesgada (o en exceso):', definition: 'Se le suma un valor fijo (sesgo) al número. Usado en el exponente de los números en coma flotante.'}
             ]},
             { type: 'interactiveElement', tool: 'c2-converter', title: 'Calculadora de Complemento a 2', description: 'Introduce un número decimal y el número de bits para ver su representación en binario, C1 y C2. ¡Comprueba por qué C2 es tan eficiente!' }
        ]
    },
    {
      id: 't1_s2_4_2',
      shortTitle: "2.4.2. Reales",
      title: "2.4.2. NÚMEROS REALES",
      icon: 'float',
      content: [
          { type: 'paragraph', text: 'Los números reales se representan en <strong>notación en coma flotante</strong>, estandarizada por <strong>IEEE 754</strong>.' },
          { type: 'keyConcept', title: 'Estándar IEEE 754', text: 'Divide los bits de un número en tres campos: <ul><li><strong>Signo (s):</strong> 1 bit (0 para positivo, 1 para negativo).</li><li><strong>Exponente (e):</strong> Almacena el exponente en notación sesgada para poder representar exponentes tanto positivos como negativos.</li><li><strong>Mantisa (m):</strong> Almacena la parte fraccionaria del número normalizado.</li></ul>' },
          { type: 'table', headers: ['Formato', 'Signo', 'Exponente', 'Mantisa', 'Total bits'], rows: [
            ['Precisión simple', '1 bit', '8 bits', '23 bits', '32 bits'],
            ['Precisión doble', '1 bit', '11 bits', '52 bits', '64 bits'],
            ['Precisión cuádruple', '1 bit', '15 bits', '112 bits', '128 bits']
          ]},
          { type: 'interactiveElement', tool: 'ieee754-converter', title: 'Analizador IEEE 754', description: 'Introduce un número como <code>3.1415</code> y observa cómo se descompone en signo, exponente y mantisa según el formato de 32 bits.' }
      ]
    },
    {
      id: "t1_s3",
      shortTitle: "3. Com. Información",
      title: "3. COMUNICACIÓN DE LA INFORMACIÓN",
      icon: "communication",
      content: [
        { type: 'paragraph', text: 'La comunicación es el proceso mediante el cual un <strong>emisor</strong> envía información a un <strong>receptor</strong> a través de un <strong>canal</strong>.' },
        { type: 'interactiveDiagram', title: 'Flujo de Comunicación Digital', flow: [
            { step: 'EMISOR', description: 'Genera la información a transmitir.' },
            { step: 'Codificación de Información', description: 'Representa la información en un formato digital (texto, imagen, etc.).' },
            { step: 'Compresión', description: 'Opcional. Reduce el tamaño de los datos para una transmisión más rápida.' },
            { step: 'Encriptación', description: 'Opcional. Cifra los datos para proteger su confidencialidad.' },
            { step: 'Redundancia', description: 'Opcional. Añade información extra para detectar o corregir errores.' },
            { step: 'Codificación de Canal', description: 'Adapta la señal digital al medio físico de transmisión (cable, aire, etc.).' },
            { step: 'TRANSMISIÓN', description: 'La señal viaja por el canal.' },
            { step: 'RECEPTOR', description: 'Realiza los procesos inversos: decodificación de canal, comprobación de errores, desencriptación, descompresión y decodificación de la información.' }
        ]}
      ]
    },
    {
        id: 't1_s3_1',
        shortTitle: "3.1. Encriptación",
        title: "3.1. ENCRIPTACIÓN DE DATOS",
        icon: 'encryption',
        content: [
            { type: 'paragraph', text: 'La encriptación o cifrado garantiza la <strong>confidencialidad</strong> de la información.'},
            { type: 'keyConcept', title: 'Cifrado Simétrico vs. Asimétrico', items: [
                '<strong>Cifrado simétrico:</strong> Se usa la <strong>misma clave</strong> para cifrar y descifrar. Es rápido, pero el intercambio seguro de la clave es un problema. Ejemplos: <code>AES</code>, <code>ChaCha20</code>.',
                '<strong>Cifrado asimétrico:</strong> Se usa un par de claves: una <strong>pública</strong> (para cifrar) y una <strong>privada</strong> (para descifrar). Es más lento, pero soluciona el problema del intercambio de claves. Ejemplos: <code>RSA</code>, <code>ECC</code>.'
            ]},
            { type: 'practicalExample', title: 'HTTPS y el candado de tu navegador', text: 'Cuando visitas una web segura (<code>https://</code>), tu navegador y el servidor usan cifrado asimétrico para intercambiar de forma segura una clave simétrica. Luego, toda la comunicación se cifra con esa clave simétrica (AES), combinando la seguridad del asimétrico con la velocidad del simétrico.'}
        ]
    },
    {
        id: 't1_s3_2',
        shortTitle: "3.2. Compresión",
        title: "3.2. COMPRESIÓN DE DATOS",
        icon: 'compress',
        content: [
            { type: 'keyConcept', title: 'Compresión con vs. sin pérdidas', items: [
                '<strong>Sin pérdidas (Lossless):</strong> La información se comprime sin perder datos. Al descomprimir, el archivo es idéntico al original. Se usa cuando cada bit es crítico. Ejemplos: <code>RLE</code>, Lempel-Ziv (usado en <code>ZIP</code>, <code>PNG</code>).',
                '<strong>Con pérdidas (Lossy):</strong> Para lograr mayor compresión, se elimina información "poco importante", perdiendo calidad. El original no se recupera perfectamente. Ejemplos: <code>JPEG</code>, <code>MPEG</code>, <code>MP3</code>.'
            ]},
            { type: 'practicalExample', title: '¿Cuándo se usa cada una?', text: 'Usa compresión <strong>sin pérdidas (.zip)</strong> para un programa o un documento, donde un solo bit erróneo puede corromperlo todo. Usa compresión <strong>con pérdidas (.jpg)</strong> para fotos, donde una pequeña pérdida de calidad es aceptable a cambio de un archivo mucho más pequeño.'}
        ]
    },
    {
        id: 't1_s3_3',
        shortTitle: "3.3. Redundancia",
        title: "3.3. REDUNDANCIA DE DATOS",
        icon: 'redundancy',
        content: [
            { type: 'paragraph', text: 'Se añaden bits extra (<strong>redundancia</strong>) al mensaje para detectar y/o corregir errores de transmisión.' },
            { type: 'definitionList', items: [
                { term: 'Códigos detectores:', definition: 'Solo informan de que ha ocurrido un error. Ejemplos: <strong>Código de paridad</strong>, <strong>CRC (Código de Redundancia Cíclica)</strong>.' },
                { term: 'Códigos correctores:', definition: 'Pueden identificar y corregir el error. Son más complejos. Ejemplos: <strong>Código Hamming</strong>, <strong>Códigos de Reed-Solomon</strong>, <strong>BCH</strong>, <strong>LDPC</strong>.'}
            ]},
            { type: 'practicalExample', title: 'Magia en tus CDs y en el Espacio', text: 'Los <strong>Códigos de Reed-Solomon</strong> son la tecnología que permite que un CD rayado pueda seguir reproduciéndose, reconstruyendo los datos dañados. Los <strong>Códigos LDPC</strong> son tan eficientes que se usan en comunicaciones por satélite y estándares como Wi-Fi para asegurar que la señal llegue correctamente a pesar del ruido.' },
            { type: 'quiz', title: 'Comprueba lo aprendido sobre Comunicación', questions: [
              { question: 'Si necesitas enviar un archivo ejecutable (.exe) comprimido por email, ¿qué tipo de compresión DEBES usar?', options: ['Con pérdidas', 'Sin pérdidas'], correctAnswerIndex: 1 },
              { question: '¿Qué tecnología se usa para proteger la confidencialidad de tus datos bancarios en una web https?', options: ['Compresión', 'Redundancia', 'Encriptación'], correctAnswerIndex: 2 }
            ]}
        ]
    },
    {
      id: "t1_s4",
      shortTitle: "4. Recursos",
      title: "4. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
      icon: "tools",
      content: [
        { type: 'resourceLink', name: 'IEEE-754 Analysis', url: 'https://ysangkok.github.io/IEEE-754/index.xhtml', description: 'Aplicación web para visualizar la descomposición de números en el estándar de punto flotante IEEE-754.'},
        { type: 'resourceLink', name: 'HexEd.it', url: 'https://hexed.it', description: 'Editor hexadecimal online para ver la codificación interna de los caracteres en cualquier archivo.'}
      ]
    },
    {
      id: "t1_s5",
      shortTitle: "5. Aplicación",
      title: "5. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
      icon: "application",
      content: [
         { type: 'paragraph', text: 'La correcta representación y comunicación de la información es un pilar fundamental tanto en el ámbito educativo de la informática como en el profesional.' },
         { type: 'subheading', text: 'En el Contexto Escolar:' },
         { type: 'list', items: [
             '<strong>Educación Secundaria:</strong> Ayuda a los estudiantes a comprender los principios básicos de funcionamiento de los dispositivos digitales.',
             '<strong>Formación Profesional:</strong> Es crucial para los estudiantes de programación (SMR, DAM, DAW) para entender cómo el computador procesa y almacena datos, permitiendo escribir código más eficiente y comprender mejor los algoritmos.'
         ]},
         { type: 'subheading', text: 'En el Contexto Laboral:' },
         { type: 'list', items: [
            '<strong>Desarrollo de software:</strong> Esencial para el diseño de aplicaciones eficientes, especialmente con procesamiento intensivo de datos.',
            '<strong>Ingeniería de hardware:</strong> Se aplican para crear desde microchips hasta sistemas integrados, optimizando el procesamiento de información.',
            '<strong>Seguridad informática:</strong> Es necesario entender profundamente cómo se representan y transmiten los datos para poder protegerlos (Ciberseguridad).'
        ]}
      ]
    },
    {
      id: "t1_s6",
      shortTitle: "6. Conclusión",
      title: "6. CONCLUSIÓN",
      icon: "conclusion",
      content: [
        { type: 'paragraph', text: 'En este tema se ha presentado una visión global de los aspectos fundamentales relacionados con la <strong>representación de la información</strong> en un computador, que son clave para poder diseñar sus componentes estructurales.' },
        { type: 'paragraph', text: 'En la segunda mitad del tema se han introducido conceptos relacionados con la <strong>comunicación y transmisión</strong> de la información como son: la encriptación y compresión de datos, así como técnicas para la redundancia contra errores producidos durante la transmisión. Estos conceptos son la base de la informática moderna y su dominio es esencial para cualquier profesional del sector.' }
      ]
    },
    {
      id: "t1_s7",
      shortTitle: "7. Bibliografía",
      title: "7. BIBLIOGRAFÍA",
      icon: "bibliography",
      content: [
        { type: 'bibliography', items: [
            { text: 'Stallings, W. (2021). <em>Computer organization and architecture. Designing for performance.</em> Editorial Pearson.' },
            { text: 'Prieto, A. (2006). <em>Introducción a la informática.</em> Editorial McGraw-Hill' },
            { text: 'Joyanes, L. (2020). <em>Fundamentos de programación. Algoritmos, estructuras de datos y objetos.</em> Editorial McGraw-Hill.' },
            { text: 'Stallings, W. (2022). <em>Cryptography and Network Security: Principles and Practice.</em> Editorial Pearson' },
            { text: 'Patterson, D. y Hennessy, J. (2011). <em>Estructura y diseño de computadores. La interfaz software/hardware.</em> Editorial Reverte' }
        ]}
      ]
    }
  ],
  glossary: [
      { term: 'Codificación', definition: 'Proceso de transformar la información de una representación externa (entendible por humanos) a una interna (patrones de bits).' },
      { term: 'ASCII', definition: 'Código estándar que usa 7 u 8 bits para representar caracteres, principalmente del alfabeto inglés.' },
      { term: 'Unicode', definition: 'Estándar de codificación universal que permite representar caracteres de la mayoría de los idiomas del mundo.' },
      { term: 'Mapa de bits', definition: 'Técnica de representación de imágenes basada en una rejilla de píxeles.' },
      { term: 'Mapa de vectores', definition: 'Técnica de representación de imágenes basada en objetos geométricos matemáticos.' },
      { term: 'Complemento a 2 (C2)', definition: 'Método estándar para representar números enteros con signo en computadores.' },
      { term: 'Coma flotante (IEEE 754)', definition: 'Estándar para representar números reales en computadores, dividiendo los bits en signo, exponente y mantisa.' },
      { term: 'Cifrado Simétrico', definition: 'Encriptación que usa la misma clave para cifrar y descifrar (ej. AES).' },
      { term: 'Cifrado Asimétrico', definition: 'Encriptación que usa un par de claves (pública y privada) (ej. RSA).' },
      { term: 'Compresión sin pérdidas', definition: 'Reduce el tamaño de un archivo sin perder información (ej. ZIP, PNG).' },
      { term: 'Compresión con pérdidas', definition: 'Reduce mucho el tamaño de un archivo eliminando información no esencial (ej. JPEG, MP3).' },
      { term: 'Redundancia', definition: 'Añadir información extra a los datos para detectar (CRC) o corregir (Hamming, Reed-Solomon) errores de transmisión.' }
  ]
};