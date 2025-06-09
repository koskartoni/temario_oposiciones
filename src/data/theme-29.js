// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 29/31
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme29Data = {
  id: "theme29",
  name: "TEMA 29/31: Utilidades para el Desarrollo",
  title: "TEMA 29/31: UTILIDADES PARA EL DESARROLLO Y PRUEBAS DE PROGRAMAS. COMPILADORES. INTÉRPRETES. DEPURADORES.",
  version: "Agosto 2024",
  sections: [
    {
      id: "t29_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema, del bloque de "Algoritmos y Programación", estudia las <strong>utilidades para el desarrollo y prueba de programas</strong>, centrándose en los entornos de desarrollo integrados (IDE), compiladores, intérpretes y depuradores. Gracias a estas herramientas, se pueden desarrollar las tecnologías que definen nuestra era.' },
        { type: 'paragraph', text: 'El estudio de estas utilidades está presente en el currículo de la familia profesional de Informática y Comunicaciones. Concretamente, se puede ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> – Módulo: <code>Entornos de desarrollo</code>' },
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Web (DAW)</strong> – Módulo: <code>Entornos de desarrollo</code>' }
        ]}
      ]
    },
    {
      id: "t29_s2", shortTitle: "2. Conceptos Previos", title: "2. CONCEPTOS PREVIOS", icon: "concepts",
      content: [
        { type: 'paragraph', text: 'Un programa es un conjunto ordenado de instrucciones en un <strong>lenguaje de programación</strong>. Como los lenguajes de alto nivel no son entendidos por el hardware, se necesitan <strong>traductores</strong> para convertirlos a <strong>lenguaje máquina</strong>.' }
      ]
    },
    {
      id: "t29_s3",
      shortTitle: "3. Utilidades para Desarrollo y Pruebas",
      title: "3. UTILIDADES PARA EL DESARROLLO Y PRUEBAS DE PROGRAMAS",
      icon: "tools"
    },
    {
      id: "t29_s3_1", shortTitle: "3.1. Entornos de Desarrollo (IDE)", title: "3.1. ENTORNOS DE DESARROLLO",
      content: [
        { type: 'paragraph', text: 'Un <strong>Entorno de Desarrollo Integrado (IDE)</strong> es una aplicación que proporciona un conjunto completo de herramientas para el desarrollo de software. Sus componentes principales son el editor de código, el compilador/intérprete, el depurador y herramientas de automatización.' },
        { type: 'table', title: 'IDEs Populares', headers: ['IDE', 'Tipo', 'Ejemplos de Lenguajes'], rows: [
            ['Visual Studio Code', 'Libre (Editor de código extensible)', 'JavaScript, Python, Java, C++'],
            ['JetBrains (IntelliJ, PyCharm, etc.)', 'Propietario (Freemium)', 'Java, Python, C#'],
            ['Visual Studio', 'Propietario', 'C#, .NET, C++'],
            ['Eclipse / NetBeans', 'Libre', 'Java, C++'],
            ['Xcode', 'Propietario', 'Swift, Objective-C']
        ]}
      ]
    },
    {
      id: "t29_s3_2", shortTitle: "3.2. Herramientas de Pruebas", title: "3.2. HERRAMIENTAS PARA LAS PRUEBAS",
      content: [
          { type: 'paragraph', text: 'Son cruciales para asegurar la calidad del software. Se clasifican según el tipo de prueba:'},
          { type: 'table', headers: ['Tipo de Prueba', 'Herramienta Ejemplo', 'Lenguaje/Entorno'], rows: [
              ['Unitaria', 'JUnit / NUnit', 'Java / .NET'],
              ['Funcional / E2E', 'Selenium / Cypress / Playwright', 'Multiplataforma / JavaScript'],
              ['Carga y Rendimiento', 'JMeter', 'Java'],
              ['Seguridad', 'OWASP ZAP', 'Multiplataforma']
          ]}
      ]
    },
    {
      id: "t29_s4",
      shortTitle: "4. Traductores",
      title: "4. TRADUCTORES",
      icon: "translator",
      content: [
        { type: 'paragraph', text: 'Un traductor convierte un programa de un lenguaje fuente a un lenguaje objeto (normalmente, lenguaje máquina).' },
        { type: 'keyConcept', title: 'Compilador vs. Intérprete', items: [
          'Un <strong>Compilador</strong> traduce todo el programa de una vez, generando un archivo ejecutable independiente. Es más rápido en la ejecución, pero más lento en el ciclo de desarrollo (<code>C++</code>, <code>Rust</code>).',
          'Un <strong>Intérprete</strong> traduce y ejecuta el programa línea a línea. No genera un ejecutable. Es más lento en la ejecución, pero más flexible y rápido para prototipar (<code>Python</code>, <code>JavaScript</code>).',
          '<strong>Modelo Híbrido (Java):</strong> El código se compila a un código intermedio (<em>bytecode</em>), que luego es interpretado por la Máquina Virtual de Java (JVM). Combina portabilidad y un buen rendimiento.'
        ]}
      ]
    },
    {
        id: "t29_s4_1", shortTitle: "4.1. Compiladores", title: "4.1. COMPILADORES",
        content: [
            { type: 'paragraph', text: 'El proceso de compilación consta de dos grandes etapas: <strong>análisis</strong> (verifica que el código sea correcto) y <strong>síntesis</strong> (genera el código objeto).'},
            { type: 'flowDiagram', title: 'Fases de un Compilador',
                initialNodes: [
                    {id:'fuente', position:{x:150, y:0}, data:{label:'Programa Fuente'}, type:'input'},
                    {id:'lexico', position:{x:150, y:100}, data:{label:'Análisis Léxico'}},
                    {id:'sintactico', position:{x:150, y:200}, data:{label:'Análisis Sintáctico'}},
                    {id:'semantico', position:{x:150, y:300}, data:{label:'Análisis Semántico'}},
                    {id:'gen', position:{x:150, y:400}, data:{label:'Generación de Código'}},
                    {id:'opt', position:{x:150, y:500}, data:{label:'Optimización'}},
                    {id:'objeto', position:{x:150, y:600}, data:{label:'Programa Objeto'}, type:'output'},
                    {id:'tabla', position:{x:450, y:300}, data:{label:'Tabla de Símbolos'}, className: 'node-bus-control'}
                ],
                initialEdges: [
                    {id:'e1',source:'fuente', target:'lexico'}, {id:'e2',source:'lexico', target:'sintactico'},
                    {id:'e3',source:'sintactico', target:'semantico'}, {id:'e4',source:'semantico', target:'gen'},
                    {id:'e5',source:'gen', target:'opt'}, {id:'e6',source:'opt', target:'objeto'},
                    {id:'e7',source:'lexico', target:'tabla', type: 'step'}, {id:'e8',source:'sintactico', target:'tabla', type: 'step'},
                    {id:'e9',source:'semantico', target:'tabla', type: 'step'}, {id:'e10',source:'gen', target:'tabla', type: 'step'}, {id:'e11',source:'opt', target:'tabla', type: 'step'}
                ]
            }
        ]
    },
    // La sección 4.2. Intérpretes ya está cubierta en la comparativa, no necesita apartado propio.
    {
      id: "t29_s5",
      shortTitle: "5. Depuradores",
      title: "5. DEPURADORES",
      icon: "debugger",
      content: [
        { type: 'practicalExample', title: 'Error de Compilación vs. Error Lógico', text: 'Un <strong>error de compilación</strong> es como un error gramatical en una frase: el compilador no entiende lo que has escrito (ej. falta un punto y coma) y se niega a traducir. Un <strong>error lógico (bug)</strong> es como una frase gramaticalmente correcta pero que dice algo sin sentido: el programa se ejecuta, pero hace algo que no esperas (ej. suma en lugar de restar).'},
        { type: 'paragraph', text: 'El <strong>depurador (debugger)</strong> es la herramienta para encontrar y corregir errores lógicos. Permite:' },
        { type: 'list', items: [
            'Ejecutar el código <strong>paso a paso</strong>.',
            'Establecer <strong>puntos de ruptura (breakpoints)</strong> para detener la ejecución en un punto concreto.',
            '<strong>Inspeccionar el valor</strong> de las variables en cualquier momento.',
            'Analizar la <strong>pila de llamadas (call stack)</strong> para ver la secuencia de funciones que se han invocado.'
        ]}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: "t29_s6", shortTitle: "6. Recursos", title: "6. RECURSOS", icon: "resources", content: [ { type: 'paragraph', text: 'Además de los IDEs, son fundamentales los <strong>frameworks</strong> (ej. React, Django), los sistemas de <strong>control de versiones</strong> (Git, GitHub) y las <strong>comunidades online</strong> (Stack Overflow).' } ] },
    { id: "t29_s7", shortTitle: "7. Aplicación", title: "7. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'En FP, estas herramientas son el día a día en módulos como "Entornos de desarrollo". En el ámbito laboral, son imprescindibles para cualquier rol relacionado con el desarrollo de software, desde la programación hasta el testing y DevOps.' } ] },
    { id: 't29_s8', title: "8. CONCLUSIÓN", shortTitle: "8. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'En este tema se ha presentado una visión global de las utilidades que hacen posible el desarrollo de software moderno. Los IDEs integran herramientas como compiladores, intérpretes y depuradores, que son esenciales para traducir nuestro código a lenguaje máquina, probar su calidad y corregir errores. El dominio de estas herramientas es fundamental para cualquier profesional de la informática.' } ] },
    { id: 't29_s9', title: "9. BIBLIOGRAFÍA", shortTitle: "9. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Aho, A.V.; Sethi, R.; Ullman, J.D. (1990). <em>Compiladores. Principios, técnicas y herramientas</em>. Addison Wesley.' }, { text: 'Casado, C. (2012). <em>Entornos de desarrollo</em>. Ra-Ma.' } ] } ] }
  ],
  glossary: [
    { term: 'IDE (Entorno de Desarrollo Integrado)', definition: 'Aplicación que agrupa herramientas para el desarrollo de software, como editor, compilador y depurador.' },
    { term: 'Traductor', definition: 'Programa que convierte código de un lenguaje a otro (generalmente, a lenguaje máquina).' },
    { term: 'Compilador', definition: 'Traductor que procesa todo el código fuente de una vez, generando un archivo ejecutable.' },
    { term: 'Intérprete', definition: 'Traductor que lee y ejecuta el código fuente línea a línea, sin generar un archivo ejecutable.' },
    { term: 'Depurador (Debugger)', definition: 'Herramienta para encontrar y corregir errores lógicos (bugs) en un programa mediante la supervisión de su ejecución.' },
    { term: 'Framework', definition: 'Entorno de trabajo que proporciona una estructura y herramientas para agilizar el desarrollo de aplicaciones.' },
    { term: 'Punto de Ruptura (Breakpoint)', definition: 'Marcador en el código que instruye al depurador a pausar la ejecución en ese punto.' }
  ]
};