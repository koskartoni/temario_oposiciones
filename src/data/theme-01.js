// CÓDIGO PARA EL ARCHIVO: /src/data/theme-01.js
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
        id: 't1_s2_1', shortTitle: "2.1. Textos", title: "2.1. REPRESENTACIÓN DE TEXTOS",
        content: [
            { type: 'paragraph', text: 'La información en formato de texto se representa mediante un código en el que cada uno de los distintos símbolos del texto (tales como letras del alfabeto o signos de puntuación) se asignan a un único patrón de bits.'},
            { type: 'paragraph', text: 'En resumen, se puede representar cualquier información escrita (texto) mediante caracteres. Los caracteres que se utilizan en computación suelen agruparse en cinco categorías:'},
            { type: 'definitionList', items: [
                { term: 'Caracteres alfabéticos:', definition: 'corresponde a las letras mayúsculas y minúsculas del abecedario inglés (a, b, ...z, A, B, ..., Z).' },
                { term: 'Caracteres numéricos:', definition: 'corresponde a las diez cifras decimales (0, 1, ..., 9).' },
                { term: 'Caracteres especiales:', definition: 'son símbolos ortográficos y matemáticos no incluidos en los grupos anteriores (), (, ¡, ¿, + - }, etc.).' },
                { term: 'Caracteres gráficos:', definition: 'son símbolos con los que se pueden representar figuras, dibujos, etc. (e.g. ♥ ♦ ♠ ♣).' },
                { term: 'Caracteres de control:', definition: 'se corresponden con las órdenes de control (carácter de salto de página, comienzo de línea, etc.).' },
            ]},
            { type: 'paragraph', text: 'Debido a que en la representación interna de la información en los computadores solo disponemos de ceros y unos, la comunicación hombre-máquina se debe establecer a través de una correspondencia entre el conjunto de todos los caracteres, x = {a, ..., z, A, ..., Z, 0, ..., 9}, y un conjunto β = {0,1}n. Esta correspondencia establece lo que se conoce como código de entrada/salida. Los códigos más utilizados en la actualidad son: EBCDIC, ASCII y Unicode.'},
            { type: 'list', items: [
                'EBCDIC (Extended Binary Coded Decimal Interchange Code): utiliza 8 bits para representar cada carácter, por lo que puede representar hasta 256 caracteres.',
                'ASCII (American Standard Code for Information Interchange): su versión básica utiliza 7 bits y es capaz de representar hasta 128 caracteres. Existen versiones ampliadas que utilizan 8 bits. Entre ellas se encuentran los códigos ISO 8859-n, donde n es un número que identifica el juego de los nuevos caracteres introducidos. Por ejemplo, la ISO 8859-1 (Latín-1) se proyectó para América y Europa occidental para incluir las vocales con tilde y otras letras latinas no usadas en los países anglosajones.',
                'UNICODE: permite representar caracteres de numerosos idiomas internacionales como el chino, indio, ruso, etcétera. (Joyanes, 2020). Existen diferentes formas de codificar Unicode: UTF-8, UTF-16 y UTF-32. Esta última utiliza todos los puntos posibles de Unicode usando 32 bits (4 bytes por carácter). UTF-16 y UTF-8 son codificaciones de longitud variable. Esto significa que, si un carácter se puede representar con un sólo byte, UTF-8 empleará sólo un byte. Si requiere dos bytes, usará dos, y así sucesivamente.'
            ]}
        ]
    },
    {
        id: 't1_s2_2', shortTitle: "2.2. Sonidos", title: "2.2. REPRESENTACIÓN DE SONIDOS",
        content: [
            { type: 'paragraph', text: 'La representación de sonidos ha adquirido una importancia notable debido esencialmente a la infinidad de aplicaciones multimedia tanto autónomas como en la web.'},
            { type: 'paragraph', text: 'Una señal de sonido se capta por medio de un micrófono que produce una señal analógica. Para poder almacenarla y procesarla utilizando técnicas digitales se realiza un proceso de muestreo en el intervienen dos parámetros fundamentales:'},
            { type: 'nestedList', items: [
                { text: 'Frecuencia de muestreo: cuanto mayor sea la frecuencia a la que se muestrea mayor será la calidad del sonido grabado.'},
                { text: 'Precisión: es el número de bits con el que se representa cada muestra.'}
            ]},
            { type: 'paragraph', text: 'Una vez obtenidos los valores binarios de las muestras hay que codificarlos de acuerdo con un determinado formato. Hay diversos formatos de codificación, entre los que se encuentran:'},
            { type: 'list', items: ['PCM (Pulse Code Modulation)', 'DPCM (Differential Pulse Code Modulation)', 'ADPCM (Adaptive Differential Pulse Modulation)', 'μ-law', 'MPEG', 'Etc.']}
        ]
    },
    {
        id: 't1_s2_3', shortTitle: "2.3. Imágenes", title: "2.3. REPRESENTACIÓN DE IMÁGENES",
        content: [
            { type: 'paragraph', text: 'Existen dos formas básicas de representar las imágenes: mapas de bits y mapas de vectores.' },
            { type: 'subheading', text: 'A. Mapas de bits' },
            { type: 'paragraph', text: 'La imagen está compuesta por puntos (pixeles), y a cada uno de ellos se le puede asociar su nivel de color. Para codificar y almacenar la imagen hay que tener en cuenta dos factores: número de píxeles y nivel de color asociado a cada pixel. La calidad de una imagen viene determinada por la resolución de la imagen (número de pixeles por línea x número de pixeles por columna).' },
            { type: 'paragraph', text: 'Algunos de los principales formatos son: BMP, TIFF, JPEG, GIF, PNG, etc.' },
            { type: 'subheading', text: 'B. Mapas de vectores' },
            { type: 'paragraph', text: 'La imagen se descompone en una colección de objetos tales como líneas, polígonos y textos con sus respectivos atributos (grosor, color, etc.). Se utilizan en aplicaciones de diseño asistido por ordenador (CAD). Como desventaja presenta que su fidelidad respecto de la imagen real es inferior a la lograda con mapas de bits. Algunos de los principales formatos son: IGES, DxF, EPS, TrueType, etc.' }
        ]
    },
    {
        id: 't1_s2_4', shortTitle: "2.4. Datos Numéricos", title: "2.4. REPRESENTACIÓN DE DATOS NUMÉRICOS",
        content: [
            { type: 'paragraph', text: 'El almacenamiento de información como caracteres codificados es ineficiente cuando la información se registra como numérica pura.' },
            { type: 'paragraph', text: 'Veamos esta situación con la codificación del número 65; si se almacena como caracteres ASCII utilizando un byte por símbolo, se necesita un total de 16 bits, de modo que el número mayor que se podía almacenar en 16 bits (dos bytes) sería 99. Sin embargo, si utilizamos notación binaria para almacenar enteros, el rango puede ir de 0 a 65.535 (2^16 – 1) para números de 16 bits. Por consiguiente, la notación binaria (o variantes de ellas) es la más utilizada para el almacenamiento de datos numéricos codificados.' },
            { type: 'paragraph', text: 'La solución que se adopta para la representación de datos numéricos es la siguiente: al introducir un número en la computadora se codifica y se almacena como un texto o cadena de caracteres, pero dentro del programa a cada dato se le envía un tipo de dato específico y es tarea del programador asociar cada dato al tipo adecuado correspondiente a las tareas y operaciones que se vayan a realizar con dicho dato. El método práctico realizado por la computadora es que una vez definidos los datos numéricos de un programa, una rutina (función interna) de la biblioteca del compilador (traductor) del lenguaje de programación se encarga de transformar la cadena de caracteres que representa el número en su notación binaria.' },
            { type: 'paragraph', text: 'Hay dos formas de representar los datos numéricos:' },
            { type: 'list', items: ['números enteros.', 'números reales.']}
        ]
    },
    {
        id: 't1_s2_4_1', shortTitle: "2.4.1. Enteros", title: "2.4.1. NÚMEROS ENTEROS",
        content: [
             { type: 'paragraph', text: 'Los datos de tipo entero se representan en el interior de la computadora en notación binaria. Dentro de la notación binaria se distinguen varios métodos distintos de representación:' },
             { type: 'definitionList', items: [
                 { term: 'Enteros sin signo (valor absoluto):', definition: 'todos los bits del dato representan el valor del número expresado en binario natural. Con n bits se pueden representar 2^n números.' },
                 { term: 'Enteros con signo', definition: ''}
             ]},
             { type: 'nestedList', items: [
                 { text: 'Signo y magnitud: se reserva el bit más significativo para indicar el signo (0 para positivos y 1 para negativos), y el resto de bits indican la magnitud. Esta representación posee varias limitaciones. Una de ellas es que la suma y la resta requieren tener en cuenta tanto los signos de los números como sus magnitudes relativas para llevar a cabo la operación en cuestión. Otra limitación es que hay dos representaciones del número 0. (Stallings, 2021).'},
                 { text: 'Complemento a 1: la representación de un número positivo en complemento a uno es igual que con el sistema signo-magnitud, mientras que la representación de un número negativo consiste en invertir los bits del valor positivo.'},
                 { text: 'Complemento a 2: la representación de un número positivo en complemento a dos es igual que con el sistema signo-magnitud, mientras que la representación de un número negativo se calcula obteniendo en primer lugar el complemento a 1 y sumándole 1 al resultado obtenido.'},
                 { text: 'Sesgada (o en exceso): todos los valores se representan sumándole un sesgo o exceso. Se suele tomar como sesgo S = 2^(n-1).'}
             ]}
        ]
    },
    {
        id: 't1_s2_4_2', shortTitle: "2.4.2. Reales", title: "2.4.2. NÚMEROS REALES",
        content: [
            { type: 'paragraph', text: 'Los números reales son aquellos que contienen una parte decimal como 2,6 y 3,14152. Los reales se representan en notación científica o en coma flotante; por esta razón en los lenguajes de programación, como C++, se conocen como números en coma flotante.' },
            { type: 'paragraph', text: 'Para la representación de números reales, se utiliza la notación en coma flotante de la siguiente forma: N = M × B^E donde M: mantisa, B: base, E: exponente. Ejemplo: N = 1,07653 x 10^12.' },
            { type: 'paragraph', text: 'En la actualidad, la mayoría de fabricantes de computadores siguen la representación normalizada IEEE754 para la representación de números reales, cuyo esquema es el siguiente:' },
            { type: 'table', headers: ['s', 'e', 'm'], rows: [['1 bit', 'ne bits', 'nm bits']] },
            { type: 'paragraph', text: 'Donde el significado de cada campo es:' },
            { type: 'definitionList', items: [
                { term: 'Campo del signo (s):', definition: 's=0, si N > 0; s=1, si N < 0.' },
                { term: 'Campo del exponente (e):', definition: 'El exponente se almacena en la forma de entero sesgado, donde S= 2^(ne-1) - 1 y e = E+S.' },
                { term: 'Campo de la mantisa (m):', definition: 'Cuando el 1 más significativo de la mantisa se encuentra en la posición de las unidades el número se dice que está normalizado. El campo de la mantisa solo almacena la parte fraccionaria del número normalizado, puesto que el 1 siempre estará (se dice que está implícito). Por tanto 1 ≤ M < 2. Ejemplo: 101,111x2^-5 = 1,01111x2^-3, donde M=1,m y m=011110...0.' },
            ]},
            { type: 'paragraph', text: 'Existen varios formatos de IEEE 754:' },
            { type: 'nestedList', items: [
                { text: 'De 32 bits:', subItems: ['1 bit para el signo, 8 bits para el exponente, 23 bits para la mantisa.']},
                { text: 'De 64 bits:', subItems: ['1 bit de signo, 11 bits para el exponente, 52 bits para la mantisa.']},
                { text: 'De 128 bits:', subItems: ['1 bit de signo, 15 bits para el exponente, 112 bits para la mantisa.']}
            ]}
        ]
    },
    {
      id: "t1_s3",
      shortTitle: "3. Com. Información",
      title: "3. COMUNICACIÓN DE LA INFORMACIÓN",
      content: [
        { type: 'paragraph', text: 'La comunicación es el proceso mediante el cual un emisor envía información a un receptor a través de un canal. Centrándonos en un sistema de comunicación digital:' },
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
        { type: 'paragraph', text: 'El emisor es el encargado de generar la información a transmitir. Dependiendo del tipo de información, esta se codifica mediante la transformación más adecuada (la codificación de la información se ha visto en el punto anterior de representación de la información). Opcionalmente se pueden aplicar una serie de alteraciones al mensaje:' },
        { type: 'list', items: [
            'Puede ser comprimido para que el tamaño de la información transmitida sea menor.',
            'Puede ser cifrado para evitar que terceros no autorizados conozcan su contenido.',
            'Puede incorporar redundancias para mitigar los errores producidos durante la transmisión.',
            'Y finalmente será codificado en una señal para adaptarlo al medio por el que debe viajar.'
        ]}
      ]
    },
    {
        id: 't1_s3_1', shortTitle: "3.1. Encriptación", title: "3.1. ENCRIPTACIÓN DE DATOS",
        content: [
            { type: 'paragraph', text: 'La encriptación o cifrado transforma una información (texto claro) en otra ininteligible (texto cifrado), con el objetivo de garantizar su confidencialidad. Básicamente se distinguen dos sistemas de cifrado:' },
            { type: 'definitionList', items: [
                { term: 'Cifrado simétrico:', definition: 'es aquel en el que las claves para cifrar y descifrar son iguales. La seguridad del proceso depende del secreto de la clave. Ejemplos: AES, ChaCha20, Salsa20, Camellia, Twofish, GCM.'},
                { term: 'Cifrado asimétrico:', definition: 'es aquel en que las claves para cifrar y descifrar son distintas (clave pública y clave privada). Ejemplos: RSA, ECC, EdDSA, PQC.'}
            ]}
        ]
    },
    {
        id: 't1_s3_2', shortTitle: "3.2. Compresión", title: "3.2. COMPRESIÓN DE DATOS",
        content: [
            { type: 'paragraph', text: 'La información puede ser comprimida con el fin de reducir su tiempo de transmisión. Básicamente se distinguen dos sistemas de compresión:' },
            { type: 'definitionList', items: [
                { term: 'Compresión sin pérdidas:', definition: 'la información se comprime sin perder nada de la información inicial. Ejemplos de técnicas de compresión son: RLE, Lempel-Ziv LZ77, etc.'},
                { term: 'Compresión con pérdidas:', definition: 'para conseguir una mayor compresión se toleran perdidas de calidad, no pudiéndose en la descompresión recuperar exactamente la información de partida. Ejemplos de técnicas de compresión son: GIF, MPEG, MP3, etc.'}
            ]}
        ]
    },
    {
        id: 't1_s3_3', shortTitle: "3.3. Redundancia", title: "3.3. REDUNDANCIA DE DATOS",
        content: [
            { type: 'paragraph', text: 'Para detectar y corregir la perturbación producida en la transmisión de la información se utilizan determinados códigos que añaden una secuencia de bits (redundancia) al mensaje. Básicamente estos códigos se pueden agrupar en:' },
            { type: 'subheading', text: 'a) Códigos detectores de errores:' },
            { type: 'nestedList', items: [
                { text: 'Código de paridad: permite detectar errores de un bit. Existen dos criterios:', subItems: ['Paridad par: se añade un bit (0 o 1) de forma que el número total de unos del código sea par.', 'Paridad impar: se añade un bit (0 o 1) de forma que el número total de unos del código sea impar.'] },
                { text: 'Código 2 entre 5: emplea 5 dígitos para representar cada número, de forma que el primero es un bit de paridad y los otros cuatro tienen los pesos 1, 2, 3 y 6, y solamente puede haber dos bits a 1 entre los cinco bits.' },
                { text: 'Códigos de redundancia cíclica (CRC): el emisor y el receptor comparten un número (polinomio generador) entre el que dividen todo el grupo de bits a enviar. El emisor añade el módulo obtenido en la división al mensaje como bits de redundancia, de forma que debe ser divisible por el polinomio generador.' }
            ]},
            { type: 'subheading', text: 'b) Códigos correctores de errores:' },
            { type: 'nestedList', items: [
                { text: 'Código Hamming: Permite detectar y corregir errores de un solo bit y detectar errores de hasta dos bits.' },
                { text: 'Códigos de Reed-Solomon: Basado en técnicas de algebra polinomial, es muy efectivo para corregir múltiples errores en los datos.' },
                { text: 'Códigos BCH (Bose-Chaudhuri-Hocquenghem): Son códigos polinómicos que pueden configurarse para corregir múltiples errores de bits, y son una generalización de los códigos de Hamming.' },
                { text: 'Códigos LDPC (Low-Density Parity-Check): son eficaces para corregir múltiples errores de bit en canales ruidosos. Son utilizados en estándares de comunicación como Wi-Fi, WiMAX, y en sistemas de comunicaciones por satélite.' }
            ]}
        ]
    },
    {
      id: "t1_s4",
      shortTitle: "4. Recursos",
      title: "4. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
      content: [
        { type: 'resourceLink', name: 'IEEE-754 Analysis', url: 'https://ysangkok.github.io/IEEE-754/index.xhtml', description: 'Es una aplicación web que permite examinar las relaciones entre los números binarios y decimales y los tres formatos de números descritos por el estándar de punto flotante IEEE-754.'},
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
            { text: 'Educación Secundaria:', subItems: ['La enseñanza de cómo la información se representa y comunica dentro de un ordenador ayuda a los estudiantes a comprender los principios básicos de cómo funcionan los ordenadores y los dispositivos digitales.'] },
            { text: 'Formación Profesional:', subItems: ['Ciclos Formativos de Grado Medio y Superior: Los conocimientos sobre la representación de la información son cruciales para los estudiantes que aprenden a programar. Entender cómo el computador procesa y almacena datos permite escribir código más eficiente y comprender mejor los algoritmos.'] }
        ]},
        { type: 'subheading', text: 'En el Contexto Laboral:' },
        { type: 'list', items: [
            'Desarrollo de sistemas y aplicaciones: En la industria del software, comprender cómo los computadores representan y comunican la información es esencial para el diseño y desarrollo de sistemas y aplicaciones eficientes, especialmente aquellos que requieren un procesamiento de datos intensivo.',
            'Ingeniería de hardware y electrónica: Los ingenieros y diseñadores de hardware aplican estos conceptos para crear componentes y dispositivos electrónicos, desde microchips hasta sistemas integrados, optimizando la forma en que se procesa y transmite la información.',
            'Seguridad informática: Los profesionales de la seguridad informática necesitan entender profundamente cómo se representan y transmiten los datos dentro de un sistema para protegerlos contra accesos no autorizados y garantizar la integridad de la información.'
        ]}
      ]
    },
    {
      id: "t1_s6",
      shortTitle: "6. Conclusión",
      title: "6. CONCLUSIÓN",
      content: [
        { type: 'paragraph', text: 'En este tema se ha presentado una visión global de los aspectos fundamentales relacionados con la representación de la información en un computador, ya que son clave para poder diseñar sus componentes estructurales.' },
        { type: 'paragraph', text: 'En la segunda mitad del tema se han introducido conceptos relacionados con la comunicación y transmisión de la información como son: la encriptación y compresión de datos, así como técnicas para la redundancia contra errores producidos durante la transmisión.' }
      ]
    },
    {
      id: "t1_s7",
      shortTitle: "7. Bibliografía",
      title: "7. BIBLIOGRAFÍA",
      content: [
        { type: 'bibliography', items: [
          { text: 'Stallings, W. (2021). Computer organization and architecture. Designing for performance. Editorial Pearson.' },
          { text: 'Prieto, A. (2006). Introducción a la informática. Editorial McGraw-Hill' },
          { text: 'Joyanes, L. (2020). Fundamentos de programación. Algoritmos, estructuras de datos y objetos. Editorial McGraw-Hill.' },
          { text: 'Stallings, W. (2022). Cryptography and Network Security: Principles and Practice. Editorial Pearson' },
          { text: 'Patterson, D. y Hennessy, J. (2011). Estructura y diseño de computadores. La interfaz software/hardware. Editorial Reverte' },
          { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' },
          { text: 'Unicode Consortium.', url: 'https://home.unicode.org' },
          { text: 'HexEd.it - Online Hex Editor.', url: 'https://hexed.it' }
        ]}
      ]
    }
  ]
};