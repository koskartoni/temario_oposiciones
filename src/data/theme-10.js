// CÓDIGO DETALLADO Y FIEL AL PDF, RECREANDO TODOS LOS DIAGRAMAS
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme10Data = {
  id: "theme10",
  name: "TEMA 10: Representación Interna de Datos",
  title: "TEMA 10. REPRESENTACIÓN INTERNA DE LOS DATOS",
  version: "Versión: Noviembre 2024",
  sections: [
    {
      id: "t10_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Un computador procesa información en forma de datos. Para que pueda ejecutar un programa, necesita dos tipos de información: las <strong>instrucciones</strong> que lo componen y los <strong>datos</strong> con los que opera. La elección de cómo representar internamente estos datos e instrucciones es una decisión de diseño fundamental en cualquier arquitectura.' },
        { type: 'paragraph', text: 'Este tema se dedica a estudiar los aspectos relacionados con la representación interna de estos datos e instrucciones, describiendo las diferentes codificaciones. Su estudio está presente en el currículo de la familia de Informática y Comunicaciones, por ejemplo, en el módulo de <strong>Sistemas Operativos Monopuesto</strong> del CFGM de SMR.' }
      ]
    },
    {
      id: "t10_s2",
      shortTitle: "2. Representación Interna",
      title: "2. REPRESENTACIÓN INTERNA DE LOS DATOS",
      icon: "binary",
      content: [
        { type: 'paragraph', text: 'La información se representa en dos niveles: <strong>externo</strong> (usado por personas) e <strong>interno</strong> (adecuado para el ordenador). El paso de externa a interna se llama <strong>codificación</strong>. Internamente, todo se representa en <strong>lógica binaria</strong> (0s y 1s). Abordaremos la representación de instrucciones y de los diferentes tipos de datos.' },
      ]
    },
    {
        id: "t10_s2_1", shortTitle: "2.1. Instrucciones", title: "2.1. REPRESENTACIÓN DE INSTRUCCIONES",
        icon: "instruction",
        content: [
            { type: 'paragraph', text: 'Cada instrucción máquina se representa como una secuencia de bits dividida en campos. Los elementos que constituyen una instrucción son:'},
            { type: 'list', items: [
                '<strong>Código de Operación (codop):</strong> Especifica la operación a realizar (suma, E/S).',
                '<strong>Referencia del Operando Fuente:</strong> Los datos de origen para la operación.',
                '<strong>Referencia del Operando de Resultado:</strong> Dónde se almacenará el resultado.',
                '<strong>Referencia de la Siguiente Instrucción:</strong> Indica al procesador dónde buscar la próxima instrucción.'
            ]},
            { type: 'subheading', text: 'Modos de Direccionamiento'},
            { type: 'paragraph', text: 'Definen cómo se especifica la ubicación de un operando en una instrucción.'},
            { type: 'table', headers: ['Modo', 'Descripción', 'Diagrama Recreado'], rows: [
              ['Inmediato', 'El valor del operando está en la propia instrucción.', '<div class="diagram-inline">Instruction | <strong>Operand</strong></div>'],
              ['Directo', 'La instrucción contiene la dirección de memoria del operando.', '<div class="diagram-inline">Instruction | <strong>Address</strong> → Memory(Operand)</div>'],
              ['Indirecto', 'La instrucción contiene la dirección de un puntero, que a su vez apunta al operando.', '<div class="diagram-inline">Instruction | <strong>Address</strong> → Memory(Pointer) → Memory(Operand)</div>'],
              ['Por Registro', 'La instrucción contiene la dirección de un registro que contiene el operando.', '<div class="diagram-inline">Instruction | <strong>Reg Address</strong> → Registers(Operand)</div>']
            ]},
            { type: 'keyConcept', title: 'Diferencias Clave: x86 (CISC) vs. ARM (RISC)', items: [
              '<strong>Longitud:</strong> x86 usa instrucciones de longitud <strong>variable</strong>, complicando la decodificación. ARM usa longitud <strong>fija</strong>, simplificando el proceso.',
              '<strong>Complejidad:</strong> x86 tiene un formato complejo con múltiples prefijos opcionales. ARM tiene un formato regular y predecible, facilitando una decodificación más rápida y eficiente.'
            ]}
        ]
    },
    { id: "t10_s2_2", shortTitle: "2.2. Textos", title: "2.2. REPRESENTACIÓN DE TEXTOS", content: [ { type: 'paragraph', text: 'Se usan códigos como <strong>ASCII</strong> o <strong>Unicode (UTF-8)</strong> para asignar un patrón de bits a cada carácter, como se vio en el Tema 1.' } ] },
    { id: "t10_s2_3", shortTitle: "2.3. Sonidos", title: "2.3. REPRESENTACIÓN DE SONIDOS", content: [ { type: 'paragraph', text: 'Se digitalizan mediante <strong>muestreo</strong>, definido por la frecuencia y la precisión en bits, como se vio en el Tema 1.' } ] },
    { id: "t10_s2_4", shortTitle: "2.4. Imágenes", title: "2.4. REPRESENTACIÓN DE IMÁGENES", content: [ { type: 'paragraph', text: 'Se usan <strong>mapas de bits</strong> (píxeles) o <strong>mapas de vectores</strong> (objetos), como se vio en el Tema 1.' } ] },
    { id: "t10_s2_5", shortTitle: "2.5. Números", title: "2.5. REPRESENTACIÓN DE NÚMEROS", icon: "numbers" },
    {
        id: "t10_s2_5_1", shortTitle: "2.5.1. Enteros", title: "2.5.1. NÚMEROS ENTEROS",
        content: [
            { type: 'paragraph', text: 'Se representan en notación binaria. Los métodos principales son:'},
            { type: 'table', headers: ['Representación', '(1 bit)', '(n-1 bits)'], rows: [
              ['Signo y magnitud', '0/1 (Signo)', 'Valor absoluto de N'],
              ['Complemento a 1', '0/1 (Signo)', 'Valor absoluto de N (positivo) o su inverso (negativo)'],
              ['Complemento a 2', '0/1 (Signo)', 'Valor absoluto de N (positivo) o su C2 (negativo)'],
              ['Sesgado', 'N + S', '(S = 2^(n-1))']
            ]},
            { type: 'paragraph', text: 'Valores máximos y mínimos que pueden representar con n bits:'},
            { type: 'table', headers: ['Representación', 'Mínimo', 'Máximo'], rows: [
              ['Signo y magnitud', '-(2^(n-1) - 1)', '2^(n-1) - 1'],
              ['Complemento a 1', '-(2^(n-1) - 1)', '2^(n-1) - 1'],
              ['Complemento a 2', '-2^(n-1)', '2^(n-1) - 1'],
              ['Sesgado', '-S', '2^n - 1 - S']
            ]},
            { type: 'table', title: 'Ejemplo: Números enteros representables con n=4', headers: ['Decimal', 'Sin signo', 'Signo y mag.', 'C a 1', 'C a 2', 'Sesgado'], rows: [
                ['7', '0111', '0111', '0111', '0111', '1111'],
                ['5', '0101', '0101', '0101', '0101', '1101'],
                ['2', '0010', '0010', '0010', '0010', '1010'],
                ['0', '0000', '0000', '0000', '0000', '1000'],
                ['-1', '---', '1001', '1110', '1111', '0111'],
                ['-4', '---', '1100', '1011', '1100', '0100'],
                ['-8', '---', '---', '---', '1000', '0000']
            ]}
        ]
    },
    {
        id: "t10_s2_5_2", shortTitle: "2.5.2. Reales", title: "2.5.2. NÚMEROS REALES",
        content: [
            { type: 'paragraph', text: 'Se representan en <strong>coma flotante</strong>, siguiendo el estándar <strong>IEEE 754</strong>, que divide los bits en tres campos:'},
            { type: 'table', headers: ['s (signo)', 'e (exponente)', 'm (mantisa)'], rows: [ ['1 bit', 'ne bits', 'nm bits'] ]},
            { type: 'subheading', text: 'Ejemplo: Representar el número real A=87 en formato IEEE 754 de 32 bits'},
            { type: 'nestedList', items: [
                {text: '<strong>1º Pasamos a binario natural:</strong>', subItems: ['<code>87₁₀ = 1010111₂</code>']},
                {text: '<strong>2º Normalizamos el número:</strong>', subItems: ['<code>1010111₂ = 1.010111 × 2⁶</code>. De aquí obtenemos el <strong>exponente real E = 6</strong>.']},
                {text: '<strong>3º Obtenemos el exponente sesgado:</strong>', subItems: ['Para 32 bits (precisión simple), el sesgo es 127. El exponente a almacenar es <code>e = E + Sesgo = 6 + 127 = 133</code>.', 'Convertimos a binario: <code>133₁₀ = 10000101₂</code>']},
                {text: '<strong>4º Formamos el número IEEE 754 (32 bits):</strong>', subItems: ['<strong>Signo (s):</strong> 0 (porque 87 es positivo).', '<strong>Exponente (e):</strong> 10000101 (8 bits).', '<strong>Mantisa (m):</strong> 010111 (la parte fraccionaria del número normalizado, se rellena con ceros hasta 23 bits).']}
            ]},
            { type: 'table', headers: ['s (1 bit)', 'e (8 bits)', 'm (23 bits)'], rows: [ ['0', '10000101', '01011100000000000000000'] ]}
        ]
    },
    { id: 't10_s3', title: "3. RECURSOS Y HERRAMIENTAS EDUCATIVAS DE INTERÉS", shortTitle: "3. Recursos", icon: "tools", content: [ { type: 'resourceLink', name: 'IEEE-754 Analysis', url: 'https://ysangkok.github.io/IEEE-754/index.xhtml', description: 'Visualizador online para el estándar de coma flotante.' }, { type: 'resourceLink', name: 'HexEd.it', url: 'https://hexed.it', description: 'Editor hexadecimal online para ver la codificación interna de archivos.' } ] },
    { id: 't10_s4', title: "4. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL", shortTitle: "4. Aplicación", icon: "application", content: [ { type: 'paragraph', text: 'Comprender la representación interna es crucial. En FP, ayuda a los estudiantes a escribir código más eficiente y entender mejor los algoritmos. En lo laboral, es esencial para el desarrollo de software de bajo nivel, la ingeniería de hardware y la seguridad informática.' } ] },
    { id: 't10_s5', title: "5. CONCLUSIÓN", shortTitle: "5. Conclusión", icon: "conclusion", content: [ { type: 'paragraph', text: 'Este tema ha presentado una visión global de la representación interna de los datos e instrucciones. Entender cómo se codifica la información a nivel de bits es clave para poder diseñar componentes hardware eficientes y optimizar el software que se ejecuta sobre ellos.' } ] },
    { id: 't10_s6', title: "6. BIBLIOGRAFÍA", shortTitle: "6. Bibliografía", icon: "bibliography", content: [ { type: 'bibliography', items: [ { text: 'Stallings, W. (2021). <em>Computer organization and architecture.</em> Editorial Pearson.' }, { text: 'Patterson, D. y Hennessy, J. (2011). <em>Estructura y diseño de computadores.</em> Editorial Reverte.' } ] } ] }
  ],
  glossary: [
      { term: 'Codificación', definition: 'Proceso de transformar la información de una representación externa (humana) a una interna (bits).' },
      { term: 'Codop (Código de Operación)', definition: 'Campo de una instrucción máquina que especifica la operación a realizar.' },
      { term: 'Modo de Direccionamiento', definition: 'Método utilizado para especificar la ubicación de un operando en una instrucción.' },
      { term: 'Direccionamiento Inmediato', definition: 'Modo en el que el valor del operando está contenido directamente en la propia instrucción.' },
      { term: 'Complemento a 2', definition: 'Sistema estándar para representar números enteros con signo en computadores modernos.' },
      { term: 'IEEE 754', definition: 'Estándar técnico para la representación de números en coma flotante en computadores.' }
  ]
};