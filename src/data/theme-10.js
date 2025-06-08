export const theme10Data = {
    id: "theme10",
    name: "TEMA 10: Representación Interna de Datos",
    title: "TEMA 10. INFORMÁTICA / S.A.I. - REPRESENTACIÓN INTERNA DE LOS DATOS",
    version: "Versión: Mayo 2024 (Actualizado)",
    sections: [
      {
        id: "t10_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Un computador es una máquina que procesa, memoriza y transmite información. Para que pueda ejecutar un programa, es necesario proporcionarle dos tipos de informaciones: las <strong>instrucciones</strong> que forman el programa y los <strong>datos</strong> con los que debe operar.' },
          { type: 'paragraph', text: 'Este tema se dedica a estudiar los aspectos relacionados con la <strong>representación interna</strong> de estos datos e instrucciones en los computadores, describiendo las diferentes codificaciones atendiendo al tipo de dato a representar.' }
        ]
      },
      {
        id: "t10_s2",
        shortTitle: "2. Representación Interna",
        title: "2. REPRESENTACIÓN INTERNA DE LOS DATOS",
        content: [
          { type: 'paragraph', text: 'La información se representa en dos niveles: <strong>externo</strong> (usado por personas) e <strong>interno</strong> (adecuado para el ordenador). El paso de externa a interna se llama <strong>codificación</strong>, y el proceso inverso, <strong>decodificación</strong>. Internamente, todo se representa en <strong>lógica binaria</strong> (0s y 1s).' },
          { type: 'paragraph', text: 'Abordaremos la representación de instrucciones, textos, sonidos, imágenes y datos numéricos.' }
        ]
      },
      {
          id: "t10_s2_1", shortTitle: "2.1. Instrucciones", title: "2.1. REPRESENTACIÓN DE INSTRUCCIONES",
          content: [
              { type: 'paragraph', text: 'Cada instrucción está representada por una secuencia de bits y se divide en campos. Los elementos que constituyen una instrucción son:'},
              { type: 'list', items: [
                  '<strong>Código de operación (codop):</strong> Especifica la operación a realizar (suma, E/S, etc.).',
                  '<strong>Referencia del operando fuente:</strong> Operandos de origen que son entradas para la operación.',
                  '<strong>Referencia del operando de resultado:</strong> Dónde se almacenará el resultado de la operación.',
                  '<strong>Referencia de la siguiente instrucción:</strong> Indica al procesador dónde buscar la siguiente instrucción a ejecutar.'
              ]},
              { type: 'subheading', text: 'Modos de Direccionamiento'},
              { type: 'paragraph', text: 'Indican cómo se incluyen los operandos en la instrucción:'},
              { type: 'table', headers: ['Modo', 'Descripción', 'Diagrama'], rows: [
                  ['Inmediato', 'El valor del operando está en la propia instrucción.', 'Instruction | Operand'],
                  ['Directo', 'La instrucción contiene la dirección de memoria del operando.', 'Instruction | Address -> Memory(Operand)'],
                  ['Indirecto', 'La instrucción contiene la dirección de un puntero, que a su vez apunta al operando.', 'Instruction | Address -> Memory(Pointer) -> Memory(Operand)'],
                  ['Por registro', 'La instrucción contiene la dirección de un registro que contiene el operando.', 'Instruction | Register Address -> Registers(Operand)'],
                  ['Indirecto por registro', 'La instrucción contiene la dirección de un registro que contiene la dirección de memoria del operando.', 'Instruction | Register Address -> Registers(Pointer) -> Memory(Operand)'],
                  ['Con desplazamiento', 'La dirección final del operando se calcula sumando una dirección de la instrucción y el contenido de un registro.', 'Instruction | Reg + Address -> Memory(Operand)']
              ]}
          ]
      },
      {
          id: "t10_s2_2", shortTitle: "2.2. Textos", title: "2.2. REPRESENTACIÓN DE TEXTOS",
          content: [
              { type: 'paragraph', text: 'La información en formato de texto se representa mediante un código donde cada símbolo se asigna a un patrón de bits único. Los códigos más utilizados son <code>EBCDIC</code>, <code>ASCII</code> y <code>Unicode</code> (<code>UTF-8</code>, <code>UTF-16</code>, <code>UTF-32</code>). Este contenido fue detallado en el Tema 1.'}
          ]
      },
      {
          id: "t10_s2_3", shortTitle: "2.3. Sonidos", title: "2.3. REPRESENTACIÓN DE SONIDOS",
          content: [
              { type: 'paragraph', text: 'Una señal de sonido analógica se digitaliza mediante un proceso de <strong>muestreo</strong>, definido por dos parámetros: la <strong>frecuencia de muestreo</strong> y la <strong>precisión</strong> (número de bits por muestra). Este contenido fue detallado en el Tema 1.'}
          ]
      },
      {
          id: "t10_s2_4", shortTitle: "2.4. Imágenes", title: "2.4. REPRESENTACIÓN DE IMÁGENES",
          content: [
              { type: 'paragraph', text: 'Existen dos formas básicas: <strong>mapas de bits</strong> (píxeles) y <strong>mapas de vectores</strong> (objetos geométricos). Este contenido fue detallado en el Tema 1.'}
          ]
      },
      {
          id: "t10_s2_5_1", shortTitle: "2.5.1. Enteros", title: "2.5.1. NÚMEROS ENTEROS",
          content: [
              { type: 'paragraph', text: 'Se representan en notación binaria. Los métodos principales son:'},
              { type: 'list', items: [
                  '<strong>Enteros sin signo:</strong> Todos los bits representan el valor en binario natural.',
                  '<strong>Enteros con signo:</strong> Se usan diversas técnicas como <strong>Signo y magnitud</strong>, <strong>Complemento a 1</strong>, <strong>Complemento a 2</strong> (el más utilizado) y representación <strong>Sesgada (o en exceso)</strong>.'
              ]},
              { type: 'table', title: 'Ejemplo: Números enteros representables con n=4', headers: ['Nº decimal', 'Sin signo', 'Signo y magnitud', 'Complemento a 1', 'Complemento a 2', 'Sesgado'], rows: [
                  ['7', '0111', '0111', '0111', '0111', '1111'],
                  ['1', '0001', '0001', '0001', '0001', '1001'],
                  ['0', '0000', '0000 / 1000', '0000 / 1111', '0000', '1000'],
                  ['-1', '---', '1001', '1110', '1111', '0111'],
                  ['-8', '---', '---', '---', '1000', '0000']
              ]}
          ]
      },
      {
          id: "t10_s2_5_2", shortTitle: "2.5.2. Reales", title: "2.5.2. NÚMEROS REALES",
          content: [
              { type: 'paragraph', text: 'Los números reales se representan en <strong>notación científica</strong> o en <strong>coma flotante</strong>, siguiendo mayoritariamente el estándar <strong>IEEE 754</strong>.'},
              { type: 'equation', latexString: 'N = M \\times B^E'},
              { type: 'subheading', text: 'Ejemplo: Representar el número real A=87 en formato IEEE 754 de 32 bits'},
              { type: 'nestedList', items: [
                  {text: '<strong>1º Pasamos a binario natural:</strong>', subItems: ['<code>87_10 = 1010111_2</code>']},
                  {text: '<strong>2º Normalizamos el número:</strong>', subItems: ['<code>1010111_2 = 1.010111 × 2^6</code>', 'De modo que tenemos: Signo positivo (s=0), Mantisa (sin el 1 implícito) <code>m = 010111</code>, Exponente <code>E = 6</code>.']},
                  {text: '<strong>3º Obtenemos el exponente sesgado:</strong>', subItems: ['Para 32 bits, el sesgo es 127. <code>e = E + Sesgo = 6 + 127 = 133</code>.', 'Pasamos el exponente sesgado a binario: <code>133_10 = 10000101_2</code>']},
                  {text: '<strong>4º Formamos el número IEEE 754:</strong>', subItems: ['Juntamos los 3 campos: signo (1 bit), exponente sesgado (8 bits) y mantisa (23 bits).']}
              ]},
              { type: 'table', headers: ['s (1 bit)', 'e (8 bits)', 'm (23 bits)'], rows: [ ['0', '10000101', '01011100000000000000000'] ]}
          ]
      },
      {
        id: "t10_s3",
        shortTitle: "3. Recursos",
        title: "3. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS",
        content: [
          { type: 'resourceLink', name: 'IEEE-754 Analysis', url: 'https://ysangkok.github.io/IEEE-754/index.xhtml', description: 'Aplicación web que permite examinar las relaciones entre los números binarios y decimales y los formatos de punto flotante IEEE-754.'},
          { type: 'resourceLink', name: 'HexEd.it', url: 'https://hexed.it', description: 'Editor hexadecimal online que permite subir archivos y ver su codificación interna.'}
        ]
      },
      {
        id: "t10_s4",
        shortTitle: "4. Aplicación",
        title: "4. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La aplicación de cómo se representan internamente los datos es una disciplina fundamental en la informática.' },
          { type: 'list', items: [
              '<strong>En el Contexto Escolar:</strong> Ayuda a los estudiantes a comprender los principios básicos de cómo funcionan los ordenadores y a escribir código más eficiente.',
              '<strong>En el Contexto Laboral:</strong> Esencial en el desarrollo de software (especialmente de bajo nivel), en la ingeniería de hardware y en la seguridad informática para proteger los datos.'
          ]}
        ]
      },
      {
        id: "t10_s5",
        shortTitle: "5. Conclusión",
        title: "5. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En este tema se ha presentado una visión global de los aspectos fundamentales relacionados con la representación interna de los datos en un computador, que son clave para poder diseñar sus componentes estructurales. Se han descrito los diferentes tipos de representaciones atendiendo al tipo de dato (instrucciones, textos, sonidos, imágenes, datos numéricos).' }
        ]
      },
      {
        id: "t10_s6",
        shortTitle: "6. Bibliografía",
        title: "6. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
            { text: 'Stallings, W. (2021). <em>Computer organization and architecture. Designing for performance.</em> Editorial Pearson.' },
            { text: 'Prieto, A. (2006). <em>Introducción a la informática.</em> Editorial McGraw-Hill.' },
            { text: 'Joyanes, L. (2020). <em>Fundamentos de programación. Algoritmos, estructuras de datos y objetos.</em> Editorial McGraw-Hill.' },
            { text: 'Patterson, D. y Hennessy, J. (2011). <em>Estructura y diseño de computadores. La interfaz software/hardware.</em> Editorial Reverte.' },
            { text: 'Unicode Consortium.', url: 'https://home.unicode.org' }
          ]}
        ]
      }
    ]
  };