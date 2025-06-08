export const theme25Data = {
    id: "theme25",
    name: "TEMA 25/27: Programación Estructurada",
    title: "TEMA 25 INF / TEMA 27 SAI: PROGRAMACIÓN ESTRUCTURADA. ESTRUCTURAS BÁSICAS. FUNCIONES Y PROCEDIMIENTOS",
    version: "Versión: Julio 2024 (Actualizado)",
    sections: [
      {
        id: "t25_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema se ubica en el bloque de "Algoritmos y Programación" y está dedicado al estudio de la <strong>programación estructurada</strong>, detallando las estructuras de control de flujo, así como el uso de funciones y procedimientos.' },
          { type: 'paragraph', text: 'Con las nociones de este tipo de programación se da lugar a distintos lenguajes que permiten desarrollar tecnologías que definen nuestra era, como la <strong>inteligencia artificial</strong> y la <strong>blockchain</strong>. Estos lenguajes son fundamentales para las innovaciones que transforman sectores clave de la sociedad.' }
        ]
      },
      {
        id: "t25_s2",
        shortTitle: "2. Conceptos Previos",
        title: "2. CONCEPTOS PREVIOS",
        content: [
          { type: 'paragraph', text: 'El reto de la informática es encontrar soluciones a problemas mediante <strong>algoritmos</strong>, que son series de tareas o instrucciones en un orden especificado. Para que un ordenador ejecute un algoritmo, este debe traducirse a un <strong>lenguaje de programación</strong>.'},
          { type: 'paragraph', text: 'Inicialmente, la programación clásica generaba "código espagueti", difícil de mantener. Para solucionar esto, surgieron nuevos paradigmas:'},
          { type: 'list', items: [
              '<strong>Programación estructurada:</strong> Técnica basada en un conjunto de estructuras específicas que facilitan la modificación, reutilización y lectura del código.',
              '<strong>Programación modular:</strong> Consiste en la división de un problema complejo en varios subproblemas más sencillos (módulos).'
          ]}
        ]
      },
      {
        id: "t25_s3",
        shortTitle: "3. Programación Estructurada",
        title: "3. PROGRAMACIÓN ESTRUCTURADA",
        content: [
          { type: 'paragraph', text: 'La programación estructurada consiste en un conjunto de técnicas que permiten desarrollar algoritmos más fáciles de escribir, leer y modificar. Un programa se considera "propio" o estructurado si cumple estas características:' },
          { type: 'list', items: ['Tiene un solo punto de entrada y un solo punto de salida.', 'Toda acción del algoritmo es accesible por al menos un camino.', 'No posee bucles infinitos.']},
          { type: 'paragraph', text: 'El <strong>teorema de Böhm y Jacopini</strong> (1966) establece que "Un programa propio puede ser escrito utilizando únicamente tres tipos de estructuras: <strong>secuencial, selectiva y repetitiva</strong>".'}
        ]
      },
      {
        id: "t25_s4_1", shortTitle: "4.1. Secuenciales", title: "4.1. ESTRUCTURAS SECUENCIALES",
        content: [
          { type: 'paragraph', text: 'Se caracterizan porque una acción se ejecuta a continuación de otra, coincidiendo con el orden físico en que están las instrucciones.' },
          { type: 'flowDiagram', title: 'Diagrama de Flujo: Estructura Secuencial',
            initialNodes: [ {id:'a1', position:{x:0,y:0}, data:{label:'ACCIÓN 1'}}, {id:'a2', position:{x:0,y:100}, data:{label:'ACCIÓN 2'}}, {id:'an', position:{x:0,y:200}, data:{label:'ACCIÓN N'}} ],
            initialEdges: [ {id:'e1', source:'a1', target:'a2'}, {id:'e2', source:'a2', target:'an'} ]
          },
          { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'sentencia1;\nsentencia2;\n...;\nsentenciaN;'}
        ]
      },
      {
        id: "t25_s4_2", shortTitle: "4.2. Selectivas", title: "4.2. ESTRUCTURAS SELECTIVAS",
        content: [
          { type: 'paragraph', text: 'Se caracterizan porque se ejecuta una acción u otras según se cumpla o no una determinada condición. Pueden ser simples, dobles o múltiples.' },
          { type: 'subheading', text: 'A) ESTRUCTURA SIMPLE (if)'},
          { type: 'flowDiagram', title: 'Diagrama de Flujo: Selectiva Simple',
            initialNodes: [ {id:'exp', position:{x:150, y:0}, type:'input', data:{label:'EXPRESIÓN'}}, {id:'act', position:{x:0, y:125}, data:{label:'ACCIONES'}}, {id:'out', position:{x:150, y:250}, type:'output', data:{label:''}} ],
            initialEdges: [ {id:'e1', source:'exp', target:'act', label:'Verdadero'}, {id:'e2', source:'exp', target:'out', label:'Falso'}, {id:'e3', source:'act', target:'out'} ]
          },
          { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'if (expresión) {\n  sentencia1;\n  sentencia2;\n  ...\n}'},
          { type: 'subheading', text: 'B) ESTRUCTURA DOBLE (if-else)'},
          { type: 'flowDiagram', title: 'Diagrama de Flujo: Selectiva Doble',
              initialNodes: [ {id:'exp', position:{x:150, y:0}, type:'input', data:{label:'EXPRESIÓN'}}, {id:'act1', position:{x:0, y:125}, data:{label:'ACCIÓN 1'}}, {id:'act2', position:{x:300, y:125}, data:{label:'ACCIÓN 2'}}, {id:'out', position:{x:150, y:250}, type:'output', data:{label:''}} ],
              initialEdges: [ {id:'e1', source:'exp', target:'act1', label:'Verdadero'}, {id:'e2', source:'exp', target:'act2', label:'Falso'}, {id:'e3', source:'act1', target:'out'}, {id:'e4', source:'act2', target:'out'} ]
          },
          { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'if (expresión) {\n  sentencia1;\n} else {\n  sentencia2;\n}'},
          { type: 'subheading', text: 'C) ESTRUCTURA MÚLTIPLE (switch)'},
          { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'switch (expresión) {\n  case valor1:\n    sentencia1;\n    break;\n  case valor2:\n    sentencia2;\n    break;\n  ...\n  default:\n    sentencia_defecto;\n}'}
        ]
      },
      {
        id: "t25_s4_3", shortTitle: "4.3. Repetitivas", title: "4.3. ESTRUCTURAS REPETITIVAS",
        content: [
          { type: 'paragraph', text: 'Se caracterizan porque ejecutan las acciones del cuerpo del bucle mientras o hasta que se cumpla una determinada condición. Se distinguen 3 tipos: <strong>mientras (while)</strong>, <strong>repetir hasta (do-while)</strong> y <strong>desde/para (for)</strong>.'},
          { type: 'subheading', text: 'A) ESTRUCTURA MIENTRAS (while)'},
          { type: 'paragraph', text: 'Las acciones del cuerpo del bucle se ejecutan mientras la expresión sea verdadera. La condición se evalúa al principio, por lo que el bucle puede ejecutarse de 0 a N veces.'},
          { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'while (expresión) {\n  sentencia1;\n  ...\n}'},
          { type: 'subheading', text: 'B) ESTRUCTURA REPETIR-HASTA (do-while)'},
          { type: 'paragraph', text: 'Las acciones del cuerpo del bucle se ejecutan como mínimo una vez, y continúan mientras la expresión sea verdadera. La condición se evalúa al final, por lo que el bucle se ejecuta de 1 a N veces.'},
          { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'do {\n  sentencia1;\n  ...\n} while (expresión);'},
          { type: 'subheading', text: 'C) ESTRUCTURA DESDE/PARA (for)'},
          { type: 'paragraph', text: 'Se ejecuta un número determinado de veces, controlado por una variable. Consta de tres partes:'},
          { type: 'list', items: ['<strong>Inicialización:</strong> Se inicializa la variable de control.', '<strong>Expresión/Condición:</strong> Se evalúa antes de cada iteración.', '<strong>Iteración/Incremento:</strong> Se actualiza la variable de control después de cada iteración.']},
          { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'for (inicialización; expresión; iteración) {\n  sentencia1;\n  ...\n}'}
        ]
      },
      {
          id: "t25_s5", shortTitle: "5. Funciones y Procedimientos", title: "5. FUNCIONES Y PROCEDIMIENTOS",
          content: [
              { type: 'paragraph', text: 'La programación estructurada hace uso de la técnica de diseño descendente (<em>top-down</em>) o "divide y vencerás", dividiendo un problema general en subproblemas más sencillos que se resuelven mediante <strong>subprogramas</strong>, conocidos como funciones y procedimientos.' },
              { type: 'subheading', text: '5.1. FUNCIONES'},
              { type: 'paragraph', text: 'Una función es un subprograma que toma cero o más valores de entrada (parámetros) y <strong>devuelve un resultado</strong> asociado a su nombre. Consta de:'},
              { type: 'list', items: ['<strong>Cabecera:</strong> Define el tipo de valor retornado, el nombre y los parámetros formales.', '<strong>Cuerpo:</strong> Contiene las instrucciones a realizar.']},
              { type: 'codeExample', title: 'Ejemplo de Función en Java (Factorial)', language: 'java', code: 'public static int factorial(int n) {\n  int fact = 1;\n  for (int i = 1; i <= n; i++) {\n    fact = fact * i;\n  }\n  return fact;\n}'},
              { type: 'subheading', text: '5.2. PROCEDIMIENTOS'},
              { type: 'paragraph', text: 'Un procedimiento es un subprograma que toma cero o más valores de entrada (parámetros) y <strong>no devuelve un resultado</strong> asociado a su nombre. La devolución de resultados se realiza a través de los propios parámetros (paso por referencia).'},
              { type: 'subheading', text: '5.3. PASO DE PARÁMETROS'},
              { type: 'definitionList', items: [
                  { term: 'Paso por valor:', definition: 'El subprograma recibe una <strong>copia</strong> de los valores de los parámetros. Los cambios dentro del subprograma no afectan a las variables originales.'},
                  { term: 'Paso por referencia:', definition: 'El subprograma recibe la <strong>dirección de memoria</strong> de los parámetros. Los cambios dentro del subprograma afectan directamente a las variables originales.'}
              ]},
              { type: 'subheading', text: '5.4. ÁMBITO DE UN IDENTIFICADOR'},
              { type: 'paragraph', text: 'El ámbito define la parte del programa donde una variable o identificador es accesible. Puede ser <strong>local</strong> (definido y accesible solo dentro de un subprograma) o <strong>global</strong> (definido en el programa principal y accesible desde cualquier parte).'}
          ]
      },
      {
        id: "t25_s6",
        shortTitle: "6. Recursos",
        title: "6. RECURSOS Y HERRAMIENTAS DE INTERÉS",
        content: [
          { type: 'paragraph', text: 'Como herramienta educativa de interés relacionada con este tema podemos citar:'},
          { type: 'resourceLink', name: 'SoloLearn', url: 'https://www.sololearn.com', description: 'Una aplicación web y móvil para aprender lenguajes de programación y fundamentos de algoritmia, desde nivel principiante hasta profesional, con una gran comunidad de usuarios.' }
        ]
      },
      {
        id: "t25_s7",
        shortTitle: "7. Aplicación",
        title: "7. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La aplicación de los conceptos de programación estructurada abarca desde el contexto educativo hasta proyectos avanzados en diversas industrias.' },
          { type: 'subheading', text: 'Contexto Escolar:'},
          { type: 'list', items: [
              'En ciclos formativos y cursos de especialización se enseñan lenguajes como <strong>Java, Python, C y C++</strong>, que utilizan los conceptos de programación estructurada como base fundamental.'
          ]},
          { type: 'subheading', text: 'Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Desarrollo de software:</strong> <code>Python</code> y <code>Java</code> se utilizan para aplicaciones web y móviles; <code>C</code> y <code>C++</code> para software de alto rendimiento y control cercano al hardware.',
              '<strong>Ciencia de datos e IA:</strong> <code>Python</code> es esencial para análisis de datos y aprendizaje automático, donde la claridad y mantenibilidad del código son cruciales.'
          ]}
        ]
      },
      {
        id: "t25_s8",
        shortTitle: "8. Conclusión",
        title: "8. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En el presente tema se ha presentado una visión global de la <strong>programación estructurada</strong>, la cual hace los programas más fáciles de escribir, leer y mantener. Utilizando para ello las estructuras de control (secuenciales, selectivas y repetitivas), y minimizando la complejidad mediante el uso de funciones y procedimientos, podemos realizar programas que nos ayudan a resolver multitud de problemas de forma más eficiente y ordenada.' }
        ]
      },
      {
        id: "t25_s9",
        shortTitle: "9. Bibliografía",
        title: "9. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Joyanes, L. (2020). <em>Fundamentos de programación. Algoritmos, estructuras de datos y objetos</em>. Editorial McGraw-Hill.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'López, L. (2004) <em>Programación Estructurada. Un enfoque algorítmico</em>. Editorial Alfaomega.' },
              { text: 'Alonso, MD. (1992) <em>Metodología de la Programación. Programación Estructurada</em>. Editorial Paraninfo.' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' }
          ]}
        ]
      }
    ]
  };