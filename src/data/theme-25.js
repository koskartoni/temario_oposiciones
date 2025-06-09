// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 25/27
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme25Data = {
  id: "theme25",
  name: "TEMA 25/27: Programación Estructurada",
  title: "TEMA 25/27: PROGRAMACIÓN ESTRUCTURADA. ESTRUCTURAS BÁSICAS. FUNCIONES Y PROCEDIMIENTOS",
  version: "Julio 2024",
  sections: [
    {
      id: "t25_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'El presente tema, ubicado en el bloque de "Algoritmos y Programación", está dedicado al estudio de la <strong>programación estructurada</strong>, detallando sus estructuras de control de flujo y el uso de funciones y procedimientos. Con estas nociones se da lugar a lenguajes que permiten desarrollar tecnologías como la IA y la blockchain.' },
        { type: 'paragraph', text: 'El estudio de la programación estructurada está presente en el currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> – Módulo: <code>Programación</code>' },
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Web (DAW)</strong> – Módulo: <code>Programación</code>' }
        ]}
      ]
    },
    {
      id: "t25_s2",
      shortTitle: "2. Conceptos Previos",
      title: "2. CONCEPTOS PREVIOS",
      icon: "concepts",
      content: [
        { type: 'paragraph', text: 'La necesidad de reducir los costes de mantenimiento del "código espagueti" dio lugar a nuevos paradigmas de programación:'},
        { type: 'list', items: [
            '<strong>Programación estructurada:</strong> Técnica basada en un conjunto de estructuras específicas que facilitan la modificación, reutilización y lectura del código.',
            '<strong>Programación modular:</strong> División de un problema complejo en subproblemas más sencillos (módulos, funciones, procedimientos).'
        ]}
      ]
    },
    {
      id: "t25_s3",
      shortTitle: "3. Programación Estructurada",
      title: "3. PROGRAMACIÓN ESTRUCTURADA",
      icon: "structured",
      content: [
        { type: 'paragraph', text: 'La programación estructurada consiste en un conjunto de técnicas para desarrollar algoritmos fáciles de escribir, leer y modificar. Un programa se considera "propio" o estructurado si tiene un solo punto de entrada y salida, es accesible y no tiene bucles infinitos.'},
        { type: 'keyConcept', title: 'Teorema de Böhm y Jacopini (1966)', text: 'Afirma que cualquier programa propio puede ser escrito utilizando únicamente tres tipos de estructuras de control: <strong>secuencial, selectiva y repetitiva</strong>.'}
      ]
    },
    {
      id: "t25_s4", shortTitle: "4. Estructuras Básicas", title: "4. ESTRUCTURAS BÁSICAS", icon: "controlStructures"
    },
    {
      id: "t25_s4_1", shortTitle: "4.1. Secuenciales", title: "4.1. ESTRUCTURAS SECUENCIALES",
      content: [
        { type: 'paragraph', text: 'Una acción se ejecuta a continuación de otra, en el orden físico en que están las instrucciones.' },
        { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'sentencia1;\nsentencia2;\nsentenciaN;'}
      ]
    },
    {
      id: "t25_s4_2", shortTitle: "4.2. Selectivas", title: "4.2. ESTRUCTURAS SELECTIVAS (o Condicionales)",
      content: [
        { type: 'paragraph', text: 'Se ejecuta una acción u otras según se cumpla una condición.' },
        { type: 'subheading', text: 'A) Simple (if)'},
        { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'if (condicion) {\n  // bloque de sentencias\n}'},
        { type: 'subheading', text: 'B) Doble (if-else)'},
        { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'if (condicion) {\n  // bloque si es verdadero\n} else {\n  // bloque si es falso\n}'},
        { type: 'subheading', text: 'C) Múltiple (switch)'},
        { type: 'codeExample', title: 'Sintaxis en Java:', language: 'java', code: 'switch (variable) {\n  case valor1:\n    // sentencias\n    break;\n  case valor2:\n    // sentencias\n    break;\n  default:\n    // sentencias por defecto\n}'}
      ]
    },
    {
      id: "t25_s4_3", shortTitle: "4.3. Repetitivas", title: "4.3. ESTRUCTURAS REPETITIVAS (o Bucles)",
      content: [
        { type: 'paragraph', text: 'Ejecutan un bloque de acciones mientras se cumpla una condición.'},
        { type: 'keyConcept', title: 'Tipos de Bucles', items: [
          '<strong>while (mientras):</strong> La condición se evalúa <strong>antes</strong> de cada iteración. Puede no ejecutarse nunca (0 a N veces).',
          '<strong>do-while (repetir-hasta):</strong> La condición se evalúa <strong>después</strong> de cada iteración. Se ejecuta al menos una vez (1 a N veces).',
          '<strong>for (para):</strong> Se ejecuta un número determinado de veces, ideal para recorrer colecciones o rangos.'
        ]},
        { type: 'codeExample', title: 'Sintaxis de un bucle for en Java:', language: 'java', code: 'for (inicialización; condición; incremento) {\n  // bloque de sentencias\n}'}
      ]
    },
    {
        id: "t25_s5", shortTitle: "5. Funciones y Procedimientos", title: "5. FUNCIONES Y PROCEDIMIENTOS",
        icon: "functions",
        content: [
            { type: 'paragraph', text: 'Son subprogramas que resuelven subproblemas, aplicando la técnica de "divide y vencerás".' },
            { type: 'keyConcept', title: 'Función vs. Procedimiento', items: [
              'Una <strong>Función</strong> toma parámetros y <strong>devuelve un único valor</strong> (ej. <code>Math.sqrt(x)</code> devuelve la raíz cuadrada).',
              'Un <strong>Procedimiento</strong> (o método <code>void</code> en Java) toma parámetros y <strong>no devuelve un valor</strong> directamente. Realiza una acción y puede modificar sus parámetros si se pasan por referencia.'
            ]},
            { type: 'subheading', text: '5.3. Paso de Parámetros'},
            { type: 'definitionList', items: [
                { term: 'Paso por Valor:', definition: 'El subprograma recibe una <strong>copia</strong> del valor. Los cambios internos no afectan a la variable original. Es el comportamiento por defecto en Java para tipos primitivos.'},
                { term: 'Paso por Referencia:', definition: 'El subprograma recibe la <strong>dirección de memoria</strong> del objeto. Los cambios internos afectan al objeto original. Es el comportamiento por defecto en Java para objetos.'}
            ]},
            { type: 'subheading', text: '5.4. Ámbito de un Identificador (Scope)'},
            { type: 'paragraph', text: 'Define dónde es accesible una variable. Puede ser <strong>local</strong> (solo dentro de su función/bloque) o <strong>global</strong> (accesible desde todo el programa). Se recomienda minimizar el uso de variables globales para evitar efectos secundarios inesperados.'},
            { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
              { question: 'Si necesitas un subprograma que calcule y devuelva la media de tres números, usarías una:', options: ['Función', 'Procedimiento'], correctAnswerIndex: 0 },
              { question: 'En Java, si pasas un objeto a un método y modificas uno de sus atributos dentro del método, ¿se reflejará el cambio fuera del método?', options: ['Sí, es paso por referencia', 'No, es paso por valor'], correctAnswerIndex: 0 }
            ]}
        ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: "t25_s6", shortTitle: "6. Recursos", title: "6. RECURSOS Y HERRAMIENTAS", icon: "tools", content: [ { type: 'resourceLink', name: 'SoloLearn', url: 'https://www.sololearn.com', description: 'Plataforma interactiva para aprender los fundamentos de programación en diversos lenguajes.' } ] },
    { id: "t25_s7", shortTitle: "7. Aplicación", title: "7. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'La programación estructurada es la base de la mayoría de lenguajes modernos. En FP, es el núcleo de los módulos de Programación. En lo laboral, es esencial para el desarrollo de software (Java, Python, C++), la ciencia de datos y la IA.' } ] },
    { id: 't25_s8', title: "8. CONCLUSIÓN", shortTitle: "8. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'En este tema se ha presentado una visión global de la programación estructurada, que hace los programas más fáciles de escribir, leer y mantener. Utilizando las tres estructuras de control básicas (secuenciales, selectivas y repetitivas) y la modularización mediante funciones y procedimientos, podemos resolver problemas complejos de forma ordenada y eficiente.' } ] },
    { id: 't25_s9', title: "9. BIBLIOGRAFÍA", shortTitle: "9. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Joyanes, L. (2020). <em>Fundamentos de programación</em>. McGraw-Hill.' }, { text: 'López, L. (2004) <em>Programación Estructurada. Un enfoque algorítmico</em>. Alfaomega.' } ] } ] }
  ],
  glossary: [
    { term: 'Programación Estructurada', definition: 'Técnica de programación que utiliza únicamente tres estructuras de control (secuencial, selectiva, repetitiva) para crear programas más claros y fáciles de mantener.' },
    { term: 'Teorema de Böhm y Jacopini', definition: 'Fundamento teórico que establece que cualquier programa puede ser escrito usando solo las tres estructuras de control básicas.' },
    { term: 'Función', definition: 'Subprograma que recibe parámetros y devuelve un único valor como resultado.' },
    { term: 'Procedimiento', definition: 'Subprograma que recibe parámetros y realiza una acción, pero no devuelve un valor asociado a su nombre.' },
    { term: 'Paso por Valor', definition: 'El subprograma recibe una copia del dato original. Las modificaciones internas no afectan al exterior.' },
    { term: 'Paso por Referencia', definition: 'El subprograma recibe una referencia (dirección de memoria) al dato original. Las modificaciones internas sí afectan al exterior.' },
    { term: 'Ámbito (Scope)', definition: 'Región de un programa en la que un identificador (variable, función) es visible y puede ser utilizado.' }
  ]
};