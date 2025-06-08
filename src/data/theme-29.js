export const theme29Data = {
    id: "theme29",
    name: "TEMA 29/31: Utilidades para el Desarrollo",
    title: "TEMA 29 INFORMÁTICA / TEMA 31 S.A.I. - UTILIDADES PARA EL DESARROLLO Y PRUEBAS DE PROGRAMAS. COMPILADORES. INTÉRPRETES. DEPURADORES.",
    version: "Versión: Agosto 2024 (Actualizado)",
    sections: [
      {
        id: "t29_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema, ubicado en el bloque de "Algoritmos y Programación", está dedicado a estudiar las <strong>utilidades para el desarrollo y prueba de programas</strong>, con especial atención a los <strong>entornos de desarrollo integrados (IDE)</strong>, los <strong>traductores (compiladores e intérpretes)</strong> y los <strong>depuradores</strong>.' },
          { type: 'paragraph', text: 'Gracias a estas utilidades, los programadores pueden desarrollar tecnologías que definen nuestra era, como la inteligencia artificial y la blockchain, transformando sectores clave de la sociedad.' }
        ]
      },
      {
        id: "t29_s2",
        shortTitle: "2. Conceptos Previos",
        title: "2. CONCEPTOS PREVIOS",
        content: [
          { type: 'paragraph', text: 'Un <strong>programa</strong> es un conjunto ordenado de instrucciones que se dan a una computadora. El conjunto de símbolos y reglas para construir un programa se denomina <strong>lenguaje de programación</strong>.'},
          { type: 'paragraph', text: 'Los lenguajes de programación modernos son de <strong>alto nivel</strong>, cercanos al lenguaje humano, pero no pueden ser interpretados directamente por un computador. Por ello, es necesario traducirlos a <strong>lenguaje máquina</strong>, y para ello se utilizan las herramientas que estudiaremos en este tema.' }
        ]
      },
      {
        id: "t29_s3",
        shortTitle: "3. Utilidades para Desarrollo",
        title: "3. UTILIDADES PARA EL DESARROLLO Y PRUEBAS DE PROGRAMAS",
        content: [
          { type: 'paragraph', text: 'El desarrollo de software es un proceso que conlleva una serie de pasos genéricos:'},
          { type: 'flowDiagram', title: 'Ciclo de Vida del Desarrollo de Software',
              initialNodes: [
                  { id: 'a', position: { x: 0, y: 0 }, data: { label: 'Análisis' } }, { id: 'b', position: { x: 150, y: 0 }, data: { label: 'Diseño' } },
                  { id: 'c', position: { x: 300, y: 0 }, data: { label: 'Codificación' } }, { id: 'd', position: { x: 450, y: 0 }, data: { label: 'Pruebas' } },
                  { id: 'e', position: { x: 600, y: 0 }, data: { label: 'Documentación' } }, { id: 'f', position: { x: 750, y: 0 }, data: { label: 'Explotación' } }, { id: 'g', position: { x: 900, y: 0 }, data: { label: 'Mantenimiento' } }
              ],
              initialEdges: [ { id: 'e1', source: 'a', target: 'b' }, { id: 'e2', source: 'b', target: 'c' }, { id: 'e3', source: 'c', target: 'd' }, { id: 'e4', source: 'd', target: 'e' }, { id: 'e5', source: 'e', target: 'f' }, { id: 'e6', source: 'f', target: 'g' } ]
          },
          { type: 'paragraph', text: 'Nos centraremos en las utilidades para la <strong>codificación y pruebas</strong>.' }
        ]
      },
      {
        id: "t29_s3_1", shortTitle: "3.1. Entornos de Desarrollo", title: "3.1. ENTORNOS DE DESARROLLO",
        content: [
          { type: 'paragraph', text: 'Un <strong>Entorno de Desarrollo Integrado (IDE)</strong> es un programa que asiste al programador en la tarea de diseñar y codificar software, combinando múltiples herramientas en una única interfaz.' },
          { type: 'subheading', text: '3.1.1. Funciones y 3.1.2. Componentes'},
          { type: 'paragraph', text: 'Las principales funciones y componentes comunes de los IDEs son:' },
          { type: 'list', items: [
              '<strong>Editor de código:</strong> Con coloración de sintaxis, autocompletado y detección de errores en tiempo real.',
              '<strong>Compilador/Intérprete:</strong> Para traducir y/o ejecutar el código.',
              '<strong>Depurador (Debugger):</strong> Para encontrar y corregir errores lógicos (bugs) mediante puntos de ruptura y seguimiento de variables.',
              '<strong>Control de versiones:</strong> Integración con sistemas como Git.',
              '<strong>Herramientas de construcción (Build Tools):</strong> Para compilar proyectos complejos en un solo paso.',
              '<strong>Interfaz gráfica:</strong> Menús, barras de herramientas y gestión de plugins para aumentar funcionalidades.'
          ]},
          { type: 'subheading', text: '3.1.3. Entornos Integrados Libres y Propietarios'},
          { type: 'table', title: 'IDEs Libres y de Código Abierto', headers: ['IDE', 'Lenguajes Principales', 'Sistema Operativo'], rows: [
              ['Visual Studio Code', 'JavaScript, Python, Java, C++, etc.', 'Windows, Linux, Mac OS X'],
              ['Eclipse', 'Java, C/C++, PHP, etc.', 'Windows, Linux, Mac OS X'],
              ['NetBeans', 'Java, PHP, C/C++, etc.', 'Windows, Linux, Mac OS X'],
              ['Geany', 'C, C++, Java, Python...', 'Windows, Linux, Mac OS X']
          ]},
          { type: 'table', title: 'IDEs Propietarios', headers: ['IDE', 'Lenguajes Principales', 'Sistema Operativo'], rows: [
              ['Microsoft Visual Studio', 'C#, C++, .NET', 'Windows'],
              ['JetBrains (IntelliJ, PyCharm...)', 'Java, Python, etc.', 'Windows, Linux, Mac OS X'],
              ['Xcode', 'Swift, Objective-C', 'Mac OS X']
          ]}
        ]
      },
      {
        id: "t29_s3_2", shortTitle: "3.2. Herramientas de Pruebas", title: "3.2. HERRAMIENTAS PARA LAS PRUEBAS",
        content: [
            { type: 'paragraph', text: 'Las pruebas de software son cruciales para asegurar la calidad y el correcto funcionamiento de un programa. Existen diversas herramientas según el tipo de prueba:'},
            { type: 'table', headers: ['Tipo de Prueba', 'Herramienta', 'Lenguaje/Entorno'], rows: [
                ['Unitaria', 'JUnit', 'Java'],
                ['Unitaria', 'PHPUnit', 'PHP'],
                ['Funcional y de Regresión', 'Selenium', 'Java, Python, Ruby, etc.'],
                ['Funcional y de Regresión', 'Cypress / Playwright', 'JavaScript/TypeScript'],
                ['Carga y Rendimiento', 'JMeter', 'Java'],
                ['Aceptación', 'FitNesse', 'Java, .NET, etc.'],
                ['Seguridad', 'Nessus', 'Multiplataforma']
            ]}
        ]
      },
      {
        id: "t29_s4",
        shortTitle: "4. Traductores",
        title: "4. TRADUCTORES",
        content: [
          { type: 'paragraph', text: 'Un <strong>traductor</strong> es un programa que recibe como entrada un código en un lenguaje (código fuente) y produce como salida un código equivalente en otro lenguaje (código objeto), normalmente lenguaje máquina.' },
          { type: 'paragraph', text: 'El proceso de traducción puede realizarse de dos formas:'},
          { type: 'definitionList', items: [
              { term: 'Compilación:', definition: 'El proceso de traducción se realiza sobre <strong>todo el código fuente</strong> de una vez. El software responsable se llama <strong>compilador</strong>. Genera un archivo ejecutable independiente.'},
              { term: 'Interpretación:', definition: 'El proceso de traducción se realiza <strong>línea a línea</strong> y se ejecuta simultáneamente. No se genera un archivo objeto. El software responsable se llama <strong>intérprete</strong>.'}
          ]},
          { type: 'paragraph', text: 'Lenguajes como C o C++ son típicamente compilados, mientras que Python o JavaScript son interpretados. <strong>Java</strong> utiliza un modelo híbrido: primero compila el código fuente a un código intermedio llamado <strong>bytecode</strong>, que luego es interpretado por la <strong>Máquina Virtual de Java (JVM)</strong>.'}
        ]
      },
      {
          id: "t29_s4_1", shortTitle: "4.1. Compiladores", title: "4.1. COMPILADORES",
          content: [
              { type: 'paragraph', text: 'El proceso de compilación consta de dos grandes etapas: <strong>análisis</strong> y <strong>síntesis</strong>.'},
              { type: 'flowDiagram', title: 'Fases de un Compilador',
                  initialNodes: [
                      {id:'fuente', position:{x:150, y:0}, data:{label:'Programa Fuente'}, type:'input'},
                      {id:'lexico', position:{x:150, y:100}, data:{label:'Análisis Léxico'}},
                      {id:'sintactico', position:{x:150, y:200}, data:{label:'Análisis Sintáctico'}},
                      {id:'semantico', position:{x:150, y:300}, data:{label:'Análisis Semántico'}},
                      {id:'gen', position:{x:150, y:400}, data:{label:'Generación de Código'}},
                      {id:'opt', position:{x:150, y:500}, data:{label:'Optimización'}},
                      {id:'objeto', position:{x:150, y:600}, data:{label:'Programa Objeto'}, type:'output'},
                      {id:'tabla', position:{x:450, y:300}, data:{label:'Tabla de Símbolos'}, style:{backgroundColor:'#d18a38'}}
                  ],
                  initialEdges: [
                      {id:'e1',source:'fuente', target:'lexico'}, {id:'e2',source:'lexico', target:'sintactico'},
                      {id:'e3',source:'sintactico', target:'semantico'}, {id:'e4',source:'semantico', target:'gen'},
                      {id:'e5',source:'gen', target:'opt'}, {id:'e6',source:'opt', target:'objeto'},
                      {id:'e7',source:'lexico', target:'tabla'}, {id:'e8',source:'sintactico', target:'tabla'},
                      {id:'e9',source:'semantico', target:'tabla'}, {id:'e10',source:'gen', target:'tabla'}, {id:'e11',source:'opt', target:'tabla'}
                  ]
              }
          ]
      },
      {
        id: "t29_s5",
        shortTitle: "5. Depuradores",
        title: "5. DEPURADORES",
        content: [
          { type: 'paragraph', text: 'Durante el desarrollo se pueden producir dos tipos de errores: de <strong>compilación</strong> (sintácticos) o <strong>lógicos</strong> (bugs). Los errores lógicos no evitan que el programa compile, pero provocan que devuelva resultados erróneos o se comporte de forma inesperada.' },
          { type: 'paragraph', text: 'Para solucionar los errores lógicos, se utiliza la herramienta conocida como <strong>depurador (debugger)</strong>. Permite supervisar la ejecución de un programa, localizar y eliminar los errores. Sus principales funciones son:' },
          { type: 'list', items: [
              '<strong>Paso a paso por instrucción:</strong> Ejecutar el programa línea por línea.',
              '<strong>Puntos de ruptura (Breakpoints):</strong> Detener la ejecución en un punto específico del código.',
              '<strong>Inspección de variables:</strong> Examinar el estado y el valor de las variables en cualquier momento.',
              '<strong>Pila de llamadas (Call Stack):</strong> Ver la secuencia de funciones que se han llamado para llegar al punto actual.'
          ]}
        ]
      },
      {
        id: "t29_s6",
        shortTitle: "6. Recursos",
        title: "6. RECURSOS Y HERRAMIENTAS DE INTERÉS",
        content: [
          { type: 'paragraph', text: 'Además de los IDEs y herramientas de testing mencionadas, existen multitud de recursos para el desarrollo de software:'},
          { type: 'list', items: [
              '<strong>Frameworks:</strong> Entornos de trabajo que proporcionan una estructura base y un conjunto de herramientas para agilizar el desarrollo (ej. <code>React</code>, <code>Angular</code>, <code>Vue</code> para el frontend; <code>Django</code>, <code>Spring</code>, <code>Laravel</code> para el backend).',
              '<strong>Control de Versiones:</strong> Herramientas como <code>Git</code> y plataformas como <code>GitHub</code> o <code>GitLab</code> son esenciales para el trabajo en equipo y el seguimiento de cambios.',
              '<strong>Documentación y Comunidades:</strong> Sitios como <code>Stack Overflow</code>, la documentación oficial de cada lenguaje y foros especializados.'
          ]}
        ]
      },
      {
        id: "t29_s7",
        shortTitle: "7. Aplicación",
        title: "7. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'El uso de las utilidades vistas en el tema abarca desde el contexto educativo hasta proyectos avanzados en diversas industrias.' },
          { type: 'subheading', text: 'Contexto Escolar:'},
          { type: 'list', items: [
              'En los ciclos formativos de informática se trabaja con estas utilidades de forma intensiva, haciendo hincapié en el aprendizaje de entornos de desarrollo y herramientas para pruebas de programas.'
          ]},
          { type: 'subheading', text: 'Contexto Laboral:'},
          { type: 'paragraph', text: 'Poder desarrollar programas es imprescindible en el contexto laboral. Para un correcto desarrollo se utilizan herramientas tan útiles como los entornos de desarrollo vistos anteriormente, así como las herramientas de pruebas para asegurar la calidad del software.'}
        ]
      },
      {
        id: "t29_s8",
        shortTitle: "8. Conclusión",
        title: "8. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En el presente tema se ha presentado una visión global de los entornos de desarrollo integrados, describiendo sus principales funciones y componentes. Como hemos visto, los IDEs están formados por una serie de componentes software (editores, compiladores, intérpretes, depuradores, etc.) que determinan sus funciones. Se ha prestado especial atención a los traductores y depuradores, detallando las funciones que llevan a cabo. Usando todos estos conceptos y herramientas podemos realizar programas que nos ayuden a resolver multitud de problemas y, gracias a ellos, hacernos más fácil nuestra vida cotidiana.'}
        ]
      },
      {
        id: "t29_s9",
        shortTitle: "9. Bibliografía",
        title: "9. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'Casado, C. (2012). <em>Entornos de desarrollo</em>. Editorial Ra-Ma.' },
              { text: 'Aho, A.V.; Sethi, R.; Ullman, J.D. (1990). <em>Compiladores. Principios, técnicas y herramientas</em>. Editorial Addison Wesley.' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'http://atc.ugr.es/APrieto_videoclases' }
          ]}
        ]
      }
    ]
  };