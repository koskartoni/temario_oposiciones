// CÓDIGO ACTUALIZADO PARA: /src/data/theme-01.js
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
      content: [
        { type: 'paragraph', text: 'El presente tema forma parte del temario oficial publicado en el <strong>BOE de 13 de febrero de 1996</strong>, donde se aprueba el temario de acceso a la especialidad de <strong>Informática / Sistemas y aplicaciones informáticas</strong>.' },
        { type: 'paragraph', text: 'A lo largo de este tema, a través de autores como <strong>Stallings, Prieto y Joyanes</strong>, se van a estudiar los aspectos relacionados con la representación de la información en el interior de los computadores. Se consideran cuatro tipos de información: <strong>textos, sonidos, imágenes y datos numéricos</strong>, ya que cada uno de ellos presenta peculiaridades muy diferentes. Es decir, se trata de explicar los procesos que transforman la información externa al ordenador en <strong>patrones de bits</strong> almacenables y procesables por sus elementos internos.' },
        { type: 'paragraph', text: 'También se van a describir los procesos de comunicación de la información, describiendo aspectos tales como el <strong>cifrado de datos</strong>, técnicas para la <strong>detección de errores</strong> y técnicas para la <strong>compresión de datos</strong>.' },
        { type: 'paragraph', text: 'Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio de la representación y comunicación de la información está presente dentro del currículo de la familia profesional de <strong>Informática y Comunicaciones</strong>. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:' },
        { type: 'nestedList', items: [
            { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> (Real Decreto 1691/2007 y Orden/Decreto autonómico)', subItems: ['Módulo: Sistemas operativos monopuesto', 'Módulo: Seguridad informática'] },
            { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> (Real Decreto 1629/2009 y Orden/Decreto autonómico)', subItems: ['Módulo: Seguridad y alta disponibilidad'] }
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
        { type: 'paragraph', text: 'A continuación, se describe cómo la información expresada en el nivel de representación externa es representable en los computadores (representación interna). Este paso de una representación a otra se denomina <strong>codificación</strong> y el proceso inverso <strong>decodificación</strong>.' },
        { type: 'paragraph', text: 'Los computadores internamente representan la información usando una <strong>lógica binaria</strong>, es decir, su alfabeto tiene únicamente dos símbolos: <code>0</code> y <code>1</code>. Esto se debe a que el diseño de un sistema informático resulta más fácil, su realización menos compleja y su funcionamiento muy fiable si se utilizan sólo dos valores o estados posibles (Prieto, 2006).' },
        { type: 'paragraph', text: 'Dependiendo del tipo de información que se represente se utilizarán diferentes representaciones. Se pueden diferenciar cuatro tipos de representaciones:' },
        { type: 'list', items: ['Representación de textos', 'Representación de sonidos', 'Representación de imágenes', 'Representación de datos numéricos'] }
      ]
    },
    {
        id: 't1_s2_1', shortTitle: "2.1. Textos", title: "2.1. REPRESENTACIÓN DE TEXTOS",
        content: [
            { type: 'paragraph', text: 'La información en formato de texto se representa mediante un <strong>código</strong> en el que cada uno de los distintos símbolos del texto (tales como letras del alfabeto o signos de puntuación) se asignan a un único patrón de bits.'},
            { type: 'paragraph', text: 'En resumen, se puede representar cualquier información escrita (texto) mediante <strong>caracteres</strong>. Los caracteres que se utilizan en computación suelen agruparse en cinco categorías:'},
            { type: 'definitionList', items: [
                { term: 'Caracteres alfabéticos:', definition: 'corresponde a las letras mayúsculas y minúsculas del abecedario inglés (<code>a, b, ...z, A, B, ..., Z</code>).' },
                { term: 'Caracteres numéricos:', definition: 'corresponde a las diez cifras decimales (<code>0, 1, ..., 9</code>).' },
                { term: 'Caracteres especiales:', definition: 'son símbolos ortográficos y matemáticos no incluidos en los grupos anteriores (<code>), (, ¡, ¿, + - }, etc.</code>).' },
                { term: 'Caracteres gráficos:', definition: 'son símbolos con los que se pueden representar figuras, dibujos, etc. (e.g. ♥ ♦ ♠ ♣).' },
                { term: 'Caracteres de control:', definition: 'se corresponden con las órdenes de control (carácter de salto de página, comienzo de línea, etc.).' },
            ]},
            { type: 'paragraph', text: 'Debido a que en la representación interna de la información en los computadores solo disponemos de ceros y unos, la comunicación hombre-máquina se debe establecer a través de una <strong>correspondencia</strong> entre el conjunto de todos los caracteres, <code>x = {a, ..., z, A, ..., Z, 0, ..., 9}</code>, y un conjunto <code>β = {0,1}n</code>. Esta correspondencia establece lo que se conoce como <strong>código de entrada/salida</strong>. Los códigos más utilizados en la actualidad son: <code>EBCDIC</code>, <code>ASCII</code> y <code>Unicode</code>.'},
            { type: 'list', items: [
                '<strong>EBCDIC (Extended Binary Coded Decimal Interchange Code):</strong> utiliza 8 bits para representar cada carácter, por lo que puede representar hasta 256 caracteres.',
                '<strong>ASCII (American Standard Code for Information Interchange):</strong> su versión básica utiliza 7 bits y es capaz de representar hasta 128 caracteres. Existen versiones ampliadas que utilizan 8 bits. Entre ellas se encuentran los códigos <code>ISO 8859-n</code>, donde n es un número que identifica el juego de los nuevos caracteres introducidos. Por ejemplo, la <code>ISO 8859-1 (Latín-1)</code> se proyectó para América y Europa occidental para incluir las vocales con tilde y otras letras latinas no usadas en los países anglosajones.',
                '<strong>UNICODE:</strong> permite representar caracteres de numerosos idiomas internacionales como el chino, indio, ruso, etcétera. (Joyanes, 2020). Existen diferentes formas de codificar Unicode: <code>UTF-8</code>, <code>UTF-16</code> y <code>UTF-32</code>. Esta última utiliza todos los puntos posibles de Unicode usando 32 bits (4 bytes por carácter). <code>UTF-16</code> y <code>UTF-8</code> son codificaciones de longitud variable. Esto significa que, si un carácter se puede representar con un sólo byte, <code>UTF-8</code> empleará sólo un byte. Si requiere dos bytes, usará dos, y así sucesivamente.'
            ]}
        ]
    },
    {
        id: 't1_s2_2', shortTitle: "2.2. Sonidos", title: "2.2. REPRESENTACIÓN DE SONIDOS",
        content: [
            { type: 'paragraph', text: 'La representación de sonidos ha adquirido una importancia notable debido esencialmente a la infinidad de aplicaciones multimedia tanto autónomas como en la web.'},
            { type: 'paragraph', text: 'Una señal de sonido se capta por medio de un micrófono que produce una señal <strong>analógica</strong>. Para poder almacenarla y procesarla utilizando técnicas digitales se realiza un proceso de <strong>muestreo</strong> en el intervienen dos parámetros fundamentales:'},
            { type: 'nestedList', items: [
                { text: '<strong>Frecuencia de muestreo:</strong> cuanto mayor sea la frecuencia a la que se muestrea mayor será la calidad del sonido grabado.'},
                { text: '<strong>Precisión:</strong> es el número de bits con el que se representa cada muestra.'}
            ]},
            { type: 'paragraph', text: 'Una vez obtenidos los valores binarios de las muestras hay que codificarlos de acuerdo con un determinado formato. Hay diversos formatos de codificación, entre los que se encuentran:'},
            { type: 'list', items: ['<code>PCM</code> (Pulse Code Modulation)', '<code>DPCM</code> (Differential Pulse Code Modulation)', '<code>ADPCM</code> (Adaptive Differential Pulse Modulation)', '<code>μ-law</code>', '<code>MPEG</code>', 'Etc.']}
        ]
    },
    {
        id: 't1_s2_3', shortTitle: "2.3. Imágenes", title: "2.3. REPRESENTACIÓN DE IMÁGENES",
        content: [
            { type: 'paragraph', text: 'Existen dos formas básicas de representar las imágenes: <strong>mapas de bits</strong> y <strong>mapas de vectores</strong>.' },
            { type: 'subheading', text: 'A. Mapas de bits' },
            { type: 'paragraph', text: 'La imagen está compuesta por puntos (<strong>píxeles</strong>), y a cada uno de ellos se le puede asociar su nivel de color. Para codificar y almacenar la imagen hay que tener en cuenta dos factores: número de píxeles y nivel de color asociado a cada pixel. La calidad de una imagen viene determinada por la <strong>resolución</strong> de la imagen (número de pixeles por línea x número de pixeles por columna).' },
            { type: 'paragraph', text: 'Algunos de los principales formatos son: <code>BMP</code>, <code>TIFF</code>, <code>JPEG</code>, <code>GIF</code>, <code>PNG</code>, etc.' },
            { type: 'subheading', text: 'B. Mapas de vectores' },
            { type: 'paragraph', text: 'La imagen se descompone en una colección de <strong>objetos</strong> tales como líneas, polígonos y textos con sus respectivos atributos (grosor, color, etc.). Se utilizan en aplicaciones de diseño asistido por ordenador (<code>CAD</code>). Como desventaja presenta que su fidelidad respecto de la imagen real es inferior a la lograda con mapas de bits. Algunos de los principales formatos son: <code>IGES</code>, <code>DxF</code>, <code>EPS</code>, <code>TrueType</code>, etc.' }
        ]
    },
    {
        id: 't1_s2_4', shortTitle: "2.4. Datos Numéricos", title: "2.4. REPRESENTACIÓN DE DATOS NUMÉRICOS",
        content: [
            { type: 'paragraph', text: 'El almacenamiento de información como caracteres codificados es <strong>ineficiente</strong> cuando la información se registra como numérica pura.' },
            { type: 'paragraph', text: 'Veamos esta situación con la codificación del número <strong>65</strong>; si se almacena como caracteres <code>ASCII</code> utilizando un byte por símbolo, se necesita un total de 16 bits, de modo que el número mayor que se podía almacenar en 16 bits (dos bytes) sería <strong>99</strong>. Sin embargo, si utilizamos notación binaria para almacenar enteros, el rango puede ir de 0 a <strong>65.535</strong> (<code>2^16 – 1</code>) para números de 16 bits. Por consiguiente, la <strong>notación binaria</strong> (o variantes de ellas) es la más utilizada para el almacenamiento de datos numéricos codificados.' },
            { type: 'paragraph', text: 'La solución que se adopta para la representación de datos numéricos es la siguiente: al introducir un número en la computadora se codifica y se almacena como un texto o cadena de caracteres, pero dentro del programa a cada dato se le envía un tipo de dato específico y es tarea del programador asociar cada dato al tipo adecuado correspondiente a las tareas y operaciones que se vayan a realizar con dicho dato. El método práctico realizado por la computadora es que una vez definidos los datos numéricos de un programa, una <strong>rutina (función interna)</strong> de la biblioteca del compilador (traductor) del lenguaje de programación se encarga de transformar la cadena de caracteres que representa el número en su notación binaria.' },
            { type: 'paragraph', text: 'Hay dos formas de representar los datos numéricos:' },
            { type: 'list', items: ['números enteros.', 'números reales.']}
        ]
    },
    {
        id: 't1_s2_4_1', shortTitle: "2.4.1. Enteros", title: "2.4.1. NÚMEROS ENTEROS",
        content: [
             { type: 'paragraph', text: 'Los datos de tipo <strong>entero</strong> se representan en el interior de la computadora en <strong>notación binaria</strong>. Dentro de la notación binaria se distinguen varios métodos distintos de representación:' },
             { type: 'definitionList', items: [
                 { term: 'Enteros sin signo (valor absoluto):', definition: 'todos los bits del dato representan el valor del número expresado en binario natural. Con <code>n</code> bits se pueden representar <code>2^n</code> números.' },
                 { term: 'Enteros con signo', definition: ''}
             ]},
             { type: 'nestedList', items: [
                 { text: '<strong>Signo y magnitud:</strong> se reserva el bit más significativo para indicar el signo (<code>0</code> para positivos y <code>1</code> para negativos), y el resto de bits indican la magnitud. Esta representación posee varias limitaciones. Una de ellas es que la suma y la resta requieren tener en cuenta tanto los signos de los números como sus magnitudes relativas para llevar a cabo la operación en cuestión. Otra limitación es que hay <strong>dos representaciones del número 0</strong>. (Stallings, 2021).'},
                 { text: '<strong>Complemento a 1:</strong> la representación de un número positivo en complemento a uno es igual que con el sistema signo-magnitud, mientras que la representación de un número negativo consiste en <strong>invertir los bits</strong> del valor positivo.'},
                 { text: '<strong>Complemento a 2:</strong> la representación de un número positivo en complemento a dos es igual que con el sistema signo-magnitud, mientras que la representación de un número negativo se calcula obteniendo en primer lugar el complemento a 1 y <strong>sumándole 1</strong> al resultado obtenido.'},
                 { text: '<strong>Sesgada (o en exceso):</strong> todos los valores se representan sumándole un sesgo o exceso. Se suele tomar como sesgo <code>S = 2^(n-1)</code>.'}
             ]}
        ]
    },
    // ... dentro de theme-01.js ...

// BUSCA ESTA SECCIÓN Y REEMPLÁZALA POR ESTA VERSIÓN MODIFICADA
{
  id: 't1_s2_4_2', shortTitle: "2.4.2. Reales", title: "2.4.2. NÚMEROS REALES",
  content: [
      { type: 'paragraph', text: 'Los números reales son aquellos que contienen una parte decimal como <code>2,6</code> y <code>3,14152</code>. Los reales se representan en <strong>notación científica</strong> o en <strong>coma flotante</strong>; por esta razón en los lenguajes de programación, como C++, se conocen como números en coma flotante.' },
      { type: 'paragraph', text: 'Para la representación de números reales, se utiliza la notación en coma flotante de la siguiente forma:' },
      // NUEVO BLOQUE DE ECUACIÓN
      { type: 'equation', latexString: 'N = M \\times B^E' },
      { type: 'paragraph', text: 'Donde <strong>M: mantisa</strong>, <strong>B: base</strong>, y <strong>E: exponente</strong>. Ejemplo: <code>N = 1,07653 x 10^12</code>.' },
      { type: 'paragraph', text: 'En la actualidad, la mayoría de fabricantes de computadores siguen la representación normalizada <strong>IEEE754</strong> para la representación de números reales, cuyo esquema es el siguiente:' },
      { type: 'table', headers: ['s', 'e', 'm'], rows: [['1 bit', 'ne bits', 'nm bits']] },
      { type: 'paragraph', text: 'Donde el significado de cada campo es:' },
      { type: 'definitionList', items: [
          { term: 'Campo del signo (s):', definition: '<code>s=0</code>, si N > 0; <code>s=1</code>, si N < 0.' },
          { term: 'Campo del exponente (e):', definition: 'El exponente se almacena en la forma de <strong>entero sesgado</strong>, donde:' },
      ]},
      // OTRA ECUACIÓN
      { type: 'equation', latexString: 'S= 2^{n_e-1} - 1 \\quad \\text{y} \\quad e = E+S' },
      { type: 'definitionList', items: [
           { term: 'Campo de la mantisa (m):', definition: 'Cuando el <code>1</code> más significativo de la mantisa se encuentra en la posición de las unidades el número se dice que está <strong>normalizado</strong>. El campo de la mantisa solo almacena la parte fraccionaria del número normalizado, puesto que el <code>1</code> siempre estará (se dice que está <strong>implícito</strong>). Por tanto:' },
      ]},
      // OTRA ECUACIÓN
      { type: 'equation', latexString: '1 \\le M < 2' },
      { type: 'paragraph', text: 'Ejemplo: <code>101,111x2^-5</code> se normaliza a <code>1,01111x2^-3</code>, donde <code>M=1,m</code> y <code>m=011110...0</code>.' },
      { type: 'paragraph', text: 'Existen varios formatos de <code>IEEE 754</code>:' },
      { type: 'nestedList', items: [
          { text: '<strong>De 32 bits:</strong>', subItems: ['1 bit para el signo, 8 bits para el exponente, 23 bits para la mantisa.']},
          { text: '<strong>De 64 bits:</strong>', subItems: ['1 bit de signo, 11 bits para el exponente, 52 bits para la mantisa.']},
          { text: '<strong>De 128 bits:</strong>', subItems: ['1 bit de signo, 15 bits para el exponente, 112 bits para la mantisa.']}
      ]}
  ]
},
// ...
    {
      id: "t1_s3",
      shortTitle: "3. Com. Información",
      title: "3. COMUNICACIÓN DE LA INFORMACIÓN",
      content: [
        { type: 'paragraph', text: 'La comunicación es el proceso mediante el cual un <strong>emisor</strong> envía información a un <strong>receptor</strong> a través de un <strong>canal</strong>. Centrándonos en un sistema de comunicación digital:' },
        { type: 'diagram', title: 'Flujo de Comunicación Digital', structure: {
            columns: ['EMISOR', 'CANAL', 'RECEPTOR'],
            flow: [
              ['CODIFICACIÓN DE LA INFORMACIÓN', null, 'DECODIFICACIÓN DE LA INFORMACIÓN'],
              ['COMPRESIÓN DE LOS DATOS', null, 'DESCOMPRESIÓN DE LOS DATOS'],
              ['ENCRIPTACIÓN DE LOS DATOS', null, 'DESENCRIPTACIÓN DE LOS DATOS'],
              ['REDUDANCIA CONTRA ERRORES', null, 'COMPROBAR ERRORES TRANSMISIÓN'],
              ['CODIFICACIÓN DEL CANAL', 'TRANSMISIÓN POR EL CANAL', 'DECODIFICACIÓN DEL CANAL']
            ]
        }},
        { type: 'paragraph', text: 'El <strong>emisor</strong> es el encargado de generar la información a transmitir. Dependiendo del tipo de información, esta se codifica mediante la transformación más adecuada (la codificación de la información se ha visto en el punto anterior de representación de la información). Opcionalmente se pueden aplicar una serie de alteraciones al mensaje:' },
        { type: 'list', items: [
            'Puede ser <strong>comprimido</strong> para que el tamaño de la información transmitida sea menor.',
            'Puede ser <strong>cifrado</strong> para evitar que terceros no autorizados conozcan su contenido.',
            'Puede incorporar <strong>redundancias</strong> para mitigar los errores producidos durante la transmisión.',
            'Y finalmente será <strong>codificado en una señal</strong> para adaptarlo al medio por el que debe viajar.'
        ]}
      ]
    },
    {
        id: 't1_s3_1', shortTitle: "3.1. Encriptación", title: "3.1. ENCRIPTACIÓN DE DATOS",
        content: [
            { type: 'paragraph', text: 'La encriptación o cifrado transforma una información (<strong>texto claro</strong>) en otra ininteligible (<strong>texto cifrado</strong>), con el objetivo de garantizar su <strong>confidencialidad</strong>. Básicamente se distinguen dos sistemas de cifrado:' },
            { type: 'definitionList', items: [
                { term: 'Cifrado simétrico:', definition: 'es aquel en el que las claves para cifrar y descifrar son <strong>iguales</strong>. La seguridad del proceso depende del secreto de la clave. Ejemplos: <code>AES</code>, <code>ChaCha20</code>, <code>Salsa20</code>, <code>Camellia</code>, <code>Twofish</code>, <code>GCM</code>.'},
                { term: 'Cifrado asimétrico:', definition: 'es aquel en que las claves para cifrar y descifrar son <strong>distintas</strong> (clave pública y clave privada). Ejemplos: <code>RSA</code>, <code>ECC</code>, <code>EdDSA</code>, <code>PQC</code>.'}
            ]}
        ]
    },
    {
        id: 't1_s3_2', shortTitle: "3.2. Compresión", title: "3.2. COMPRESIÓN DE DATOS",
        content: [
            { type: 'paragraph', text: 'La información puede ser comprimida con el fin de reducir su tiempo de transmisión. Básicamente se distinguen dos sistemas de compresión:' },
            { type: 'definitionList', items: [
                { term: 'Compresión sin pérdidas:', definition: 'la información se comprime <strong>sin perder nada</strong> de la información inicial. Ejemplos de técnicas de compresión son: <code>RLE</code>, <code>Lempel-Ziv LZ77</code>, etc.'},
                { term: 'Compresión con pérdidas:', definition: 'para conseguir una mayor compresión se toleran <strong>pérdidas de calidad</strong>, no pudiéndose en la descompresión recuperar exactamente la información de partida. Ejemplos de técnicas de compresión son: <code>GIF</code>, <code>MPEG</code>, <code>MP3</code>, etc.'}
            ]}
        ]
    },
    {
        id: 't1_s3_3', shortTitle: "3.3. Redundancia", title: "3.3. REDUNDANCIA DE DATOS",
        content: [
            { type: 'paragraph', text: 'Para detectar y corregir la perturbación producida en la transmisión de la información se utilizan determinados códigos que añaden una secuencia de bits (<strong>redundancia</strong>) al mensaje. Básicamente estos códigos se pueden agrupar en:' },
            { type: 'subheading', text: 'a) Códigos detectores de errores:' },
            { type: 'nestedList', items: [
                { text: '<strong>Código de paridad:</strong> permite detectar errores de <strong>un bit</strong>. Existen dos criterios:', subItems: ['<strong>Paridad par:</strong> se añade un bit (<code>0</code> o <code>1</code>) de forma que el número total de unos del código sea par.', '<strong>Paridad impar:</strong> se añade un bit (<code>0</code> o <code>1</code>) de forma que el número total de unos del código sea impar.'] },
                { text: '<strong>Código 2 entre 5:</strong> emplea 5 dígitos para representar cada número, de forma que el primero es un bit de paridad y los otros cuatro tienen los pesos 1, 2, 3 y 6, y solamente puede haber dos bits a 1 entre los cinco bits.' },
                { text: '<strong>Códigos de redundancia cíclica (CRC):</strong> el emisor y el receptor comparten un número (polinomio generador) entre el que dividen todo el grupo de bits a enviar. El emisor añade el módulo obtenido en la división al mensaje como bits de redundancia, de forma que debe ser divisible por el polinomio generador.' }
            ]},
            { type: 'subheading', text: 'b) Códigos correctores de errores:' },
            { type: 'nestedList', items: [
                { text: '<strong>Código Hamming:</strong> Permite detectar y corregir errores de un solo bit y detectar errores de hasta dos bits.' },
                { text: '<strong>Códigos de Reed-Solomon:</strong> Basado en técnicas de algebra polinomial, es muy efectivo para corregir múltiples errores en los datos.' },
                { text: '<strong>Códigos BCH (Bose-Chaudhuri-Hocquenghem):</strong> Son códigos polinómicos que pueden configurarse para corregir múltiples errores de bits, y son una generalización de los códigos de Hamming.' },
                { text: '<strong>Códigos LDPC (Low-Density Parity-Check):</strong> son eficaces para corregir múltiples errores de bit en canales ruidosos. Son utilizados en estándares de comunicación como <code>Wi-Fi</code>, <code>WiMAX</code>, y en sistemas de comunicaciones por satélite.' }
            ]}
        ]
    },
    {
      id: "t1_s4",
      shortTitle: "4. Recursos",
      title: "4. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
      content: [
        { type: 'resourceLink', name: 'IEEE-754 Analysis', url: 'https://ysangkok.github.io/IEEE-754/index.xhtml', description: 'Es una aplicación web que permite examinar las relaciones entre los números binarios y decimales y los tres formatos de números descritos por el estándar de punto flotante <code>IEEE-754</code>.'},
        { type: 'resourceLink', name: 'HexEd.it', url: 'https://hexed.it', description: 'Es una aplicación web que permite subir archivos de texto plano guardados con diferentes formatos y muestra la codificación empleada para almacenar cada carácter.'}
      ]
    },
    {
      id: "t1_s5",
      shortTitle: "5. Aplicación",
      title: "5. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
      content: [
        { type: 'paragraph', text: 'La aplicación de cómo se representa y comunica la información digital en el contexto escolar y profesional es extensa y abarca múltiples disciplinas, desde la introducción a los fundamentos de la informática en la educación hasta su implementación en proyectos tecnológicos avanzados en variados sectores industriales.' },
        { type: 'subheading', text: 'En el Contexto Escolar:' },
        { type: 'nestedList', items: [
            { text: '<strong>Educación Secundaria:</strong>', subItems: ['La enseñanza de cómo la información se representa y comunica dentro de un ordenador ayuda a los estudiantes a comprender los principios básicos de cómo funcionan los ordenadores y los dispositivos digitales.'] },
            { text: '<strong>Formación Profesional:</strong>', subItems: ['<strong>Ciclos Formativos de Grado Medio y Superior:</strong> Los conocimientos sobre la representación de la información son cruciales para los estudiantes que aprenden a programar. Entender cómo el computador procesa y almacena datos permite escribir código más eficiente y comprender mejor los algoritmos.'] }
        ]},
        { type: 'subheading', text: 'En el Contexto Laboral:' },
        { type: 'list', items: [
            '<strong>Desarrollo de sistemas y aplicaciones:</strong> En la industria del software, comprender cómo los computadores representan y comunican la información es esencial para el diseño y desarrollo de sistemas y aplicaciones eficientes, especialmente aquellos que requieren un procesamiento de datos intensivo.',
            '<strong>Ingeniería de hardware y electrónica:</strong> Los ingenieros y diseñadores de hardware aplican estos conceptos para crear componentes y dispositivos electrónicos, desde microchips hasta sistemas integrados, optimizando la forma en que se procesa y transmite la información.',
            '<strong>Seguridad informática:</strong> Los profesionales de la seguridad informática necesitan entender profundamente cómo se representan y transmiten los datos dentro de un sistema para protegerlos contra accesos no autorizados y garantizar la integridad de la información.'
        ]}
      ]
    },
    {
      id: "t1_s6",
      shortTitle: "6. Conclusión",
      title: "6. CONCLUSIÓN",
      content: [
        { type: 'paragraph', text: 'En este tema se ha presentado una visión global de los aspectos fundamentales relacionados con la <strong>representación de la información</strong> en un computador, ya que son clave para poder diseñar sus componentes estructurales.' },
        { type: 'paragraph', text: 'En la segunda mitad del tema se han introducido conceptos relacionados con la <strong>comunicación y transmisión</strong> de la información como son: la encriptación y compresión de datos, así como técnicas para la redundancia contra errores producidos durante la transmisión.' }
      ]
    },
    {
      id: "t1_s7",
      shortTitle: "7. Bibliografía",
      title: "7. BIBLIOGRAFÍA",
      content: [
        { type: 'bibliography', items: [
          { text: 'Stallings, W. (2021). <em>Computer organization and architecture. Designing for performance.</em> Editorial Pearson.' },
          { text: 'Prieto, A. (2006). <em>Introducción a la informática.</em> Editorial McGraw-Hill' },
          { text: 'Joyanes, L. (2020). <em>Fundamentos de programación. Algoritmos, estructuras de datos y objetos.</em> Editorial McGraw-Hill.' },
          { text: 'Stallings, W. (2022). <em>Cryptography and Network Security: Principles and Practice.</em> Editorial Pearson' },
          { text: 'Patterson, D. y Hennessy, J. (2011). <em>Estructura y diseño de computadores. La interfaz software/hardware.</em> Editorial Reverte' },
          { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' },
          { text: 'Unicode Consortium.', url: 'https://home.unicode.org' },
          { text: 'HexEd.it - Online Hex Editor.', url: 'https://hexed.it' }
        ]}
      ]
    }
  ]
};