// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 36
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme36Data = {
  id: "theme36",
  name: "TEMA 36: Manipulación de Datos",
  title: "TEMA 36. LA MANIPULACIÓN DE DATOS. OPERACIONES. LENGUAJES. OPTIMIZACIÓN DE CONSULTAS.",
  version: "Septiembre 2024",
  sections: [
    {
      id: "t36_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema, ubicado en el bloque de "Bases de Datos", se centra en la <strong>manipulación de datos</strong>. Antes de los <strong>Sistemas Gestores de Bases de Datos (SGBD)</strong>, la información se gestionaba con sistemas de archivos donde los datos y los programas estaban fuertemente acoplados. La idea de separar los datos de las aplicaciones dio lugar a las bases de datos.' },
        { type: 'paragraph', text: 'Lo expuesto anteriormente justifica la importancia del tema y es por ello que su estudio está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Bases de datos</code>' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Gestión de bases de datos</code>' }
        ]}
      ]
    },
    {
      id: "t36_s2",
      shortTitle: "2. Manipulación de Datos",
      title: "2. LA MANIPULACIÓN DE DATOS",
      icon: "dataManipulation",
      content: [
        { type: 'paragraph', text: 'Un <strong>SGBD</strong> es una colección de programas que permite a los usuarios crear y mantener una base de datos. Una de sus tres funciones fundamentales es la <strong>manipulación de datos</strong>, que incluye las tareas de:' },
        { type: 'list', items: ['Consultar información (<code>SELECT</code>)', 'Insertar nuevos datos (<code>INSERT</code>)', 'Modificar datos existentes (<code>UPDATE</code>)', 'Eliminar datos (<code>DELETE</code>).']}
      ]
    },
    {
      id: "t36_s3",
      shortTitle: "3. DML",
      title: "3. LENGUAJE DE MANIPULACIÓN DE DATOS (DML)",
      icon: "dml",
      content: [
        { type: 'paragraph', text: 'Un <strong>DML (Data Manipulation Language)</strong> es un conjunto de comandos para realizar las operaciones de manipulación de datos. Se pueden clasificar de la siguiente forma:' },
        { type: 'keyConcept', title: 'Tipos de DML', items: [
          '<strong>Procedimentales:</strong> El usuario especifica <strong>qué datos y cómo obtenerlos</strong>. Se basan en el <strong>Álgebra Relacional</strong>.',
          '<strong>No Procedimentales:</strong> El usuario solo especifica <strong>qué datos desea</strong>. Son más fáciles de usar. Se basan en el <strong>Cálculo Relacional</strong>.'
        ]}
      ]
    },
    {
      id: "t36_s4",
      shortTitle: "4. Operaciones",
      title: "4. OPERACIONES",
      icon: "operations"
    },
    {
      id: "t36_s4_1", shortTitle: "4.1. Álgebra Relacional", title: "4.1. ÁLGEBRA RELACIONAL",
      content: [
        { type: 'paragraph', text: 'Es una disciplina matemática procedimental que define un conjunto de operaciones sobre relaciones (tablas). Codd demostró que el álgebra y el cálculo relacional son lógicamente equivalentes.'},
        { type: 'subheading', text: '4.1.1. Operadores Primitivos'},
        { type: 'table', headers: ['Operador', 'Símbolo', 'Descripción'], rows: [
          ['Unión', 'R ∪ S', 'Tuplas que están en R, en S, o en ambas.'],
          ['Diferencia', 'R - S', 'Tuplas que están en R pero no en S.'],
          ['Producto Cartesiano', 'R × S', 'Combina cada tupla de R con cada tupla de S.'],
          ['Proyección', 'π<sub>A1,..,An</sub>(R)', 'Selecciona columnas específicas de una relación.'],
          ['Selección', 'σ<sub>condición</sub>(R)', 'Selecciona filas (tuplas) que cumplen una condición.']
        ]},
        { type: 'subheading', text: '4.1.2. Operadores Derivados'},
        { type: 'list', items: ['<strong>Intersección (∩):</strong> Tuplas comunes a ambas relaciones.', '<strong>Reunión (Join ⨝):</strong> La operación más importante. Combina filas de dos o más tablas basándose en una columna relacionada entre ellas. Evita la necesidad de hacer un producto cartesiano completo.']}
      ]
    },
    {
      id: "t36_s4_2_3", shortTitle: "4.2/4.3. Cálculo Relacional", title: "4.2/4.3. CÁLCULO RELACIONAL DE TUPLAS Y DE DOMINIOS",
      content: [
        { type: 'paragraph', text: 'El cálculo relacional es un lenguaje no procedimental. En lugar de especificar el "cómo", se describe el "qué". Existen dos variantes: <strong>Cálculo Relacional de Tuplas</strong> (las variables representan tuplas enteras) y <strong>Cálculo Relacional de Dominios</strong> (las variables representan valores de los dominios de los atributos).'}
      ]
    },
    {
      id: "t36_s5",
      shortTitle: "5. Lenguajes",
      title: "5. LENGUAJES",
      icon: "languages"
    },
    { id: "t36_s5_1", shortTitle: "5.1. Jerárquico (IMS)", title: "5.1. MODELO JERÁRQUICO (IMS)", content: [{ type: 'paragraph', text: 'Modelo antiguo de IBM con una estructura de árbol. Su DML, integrado en lenguajes como Pascal, usaba comandos como <code>get</code>, <code>insert</code>, <code>replace</code> y <code>delete</code> para navegar y manipular los datos.' }] },
    { id: "t36_s5_2", shortTitle: "5.2. En Red (DBTG)", title: "5.2. MODELO EN RED (DBTG)", content: [{ type: 'paragraph', text: 'Modelo más flexible que el jerárquico, con una estructura de grafo. Su DML era más complejo, con comandos como <code>find</code>, <code>get</code>, <code>store</code>, <code>modify</code>, <code>erase</code>, <code>connect</code> y <code>disconnect</code>.' }] },
    {
        id: "t36_s5_3", shortTitle: "5.3. Relacional (SQL)", title: "5.3. MODELO RELACIONAL. SQL COMO DML",
        content: [
            { type: 'paragraph', text: '<strong>SQL (Structured Query Language)</strong> es el lenguaje estándar para los SGBD relacionales. Sus comandos DML son:'},
            { type: 'codeExample', title: 'a) Consultas (Recuperación)', language: 'sql', code: 'SELECT nombre, apellido FROM usuarios WHERE ciudad = \'Madrid\';'},
            { type: 'codeExample', title: 'b) Inserción', language: 'sql', code: 'INSERT INTO usuarios (nombre, apellido) VALUES (\'Juan\', \'Pérez\');'},
            { type: 'codeExample', title: 'c) Modificación', language: 'sql', code: 'UPDATE usuarios SET ciudad = \'Barcelona\' WHERE nombre = \'Juan\';'},
            { type: 'codeExample', title: 'd) Eliminación', language: 'sql', code: 'DELETE FROM usuarios WHERE nombre = \'Juan\';'},
            { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
              { question: '¿Qué operación del Álgebra Relacional es análoga a la cláusula WHERE de SQL?', options: ['Proyección', 'Selección', 'Unión'], correctAnswerIndex: 1 },
              { question: 'El comando de SQL para añadir nuevas filas a una tabla es:', options: ['UPDATE', 'ADD', 'INSERT'], correctAnswerIndex: 2 }
            ]}
        ]
    },
    {
      id: "t36_s6",
      shortTitle: "6. Optimización de Consultas",
      title: "6. OPTIMIZACIÓN DE CONSULTAS",
      icon: "optimization",
      content: [
        { type: 'paragraph', text: 'En los lenguajes no procedimentales como SQL, el SGBD es responsable de encontrar la forma más eficiente de ejecutar una consulta. Este proceso se llama <strong>optimización de consultas</strong>. Algunas técnicas clave son:'},
        { type: 'list', items: [
            '<strong>Diseño de las tablas y tipos de datos:</strong> Un buen diseño es el primer paso para un buen rendimiento.',
            '<strong>Revisión de Planes de Ejecución:</strong> Analizar cómo el SGBD planea acceder a los datos para una consulta (<code>EXPLAIN</code> en SQL).',
            '<strong>Índices:</strong> La técnica fundamental. Un índice es una estructura de datos que acelera enormemente la búsqueda de filas en una tabla. Se deben crear en claves primarias, foráneas y columnas usadas frecuentemente en cláusulas <code>WHERE</code>.'
        ]},
        { type: 'practicalExample', title: 'El poder de un Índice', text: 'Imagina buscar una palabra en un diccionario sin índice. Tendrías que leerlo página por página (un <em>full table scan</em>). Ahora imagina usar el índice alfabético. Encuentras la palabra al instante. Eso es exactamente lo que hace un índice en una base de datos para una consulta.'}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: "t36_s7", shortTitle: "7. Aplicación", title: "7. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'Las bases de datos son omnipresentes. En FP, son el núcleo del módulo de "Bases de Datos" (DAM/DAW) y "Gestión de Bases de Datos" (ASIR). En el mundo laboral, son imprescindibles en cualquier sector, con tendencias futuras como la integración de IA y los entornos Multicloud.' } ] },
    { id: "t36_s8", shortTitle: "8. Conclusión", title: "8. CONCLUSIÓN", icon: 'conclusion', content: [ { type: 'paragraph', text: 'Este tema ha presentado una visión global de la manipulación de datos, describiendo las operaciones, los lenguajes DML, y la importancia de la optimización de consultas. Comprender estos conceptos es crucial para el diseño y desarrollo de sistemas de información eficientes y seguros.' } ] },
    { id: "t36_s9", shortTitle: "9. Bibliografía", title: "9. BIBLIOGRAFÍA", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Date, C.J. (2000). <em>Introducción a los sistemas de bases de datos</em>. Addison-Wesley.' }, { text: 'Korth H. y Silberschatz, A. (2002). <em>Fundamentos de bases de datos</em>. McGraw-Hill.' } ] } ] }
  ],
  glossary: [
    { term: 'DML (Data Manipulation Language)', definition: 'Sublenguaje de un sistema de base de datos que permite a los usuarios acceder y manipular los datos.' },
    { term: 'Álgebra Relacional', definition: 'Conjunto formal de operaciones sobre tablas (relaciones), que es la base teórica del SQL. Es un lenguaje procedimental.' },
    { term: 'Cálculo Relacional', definition: 'Lenguaje de consulta formal no procedimental, donde el usuario especifica qué datos quiere sin decir cómo obtenerlos.' },
    { term: 'SQL (Structured Query Language)', definition: 'Lenguaje estándar para la gestión y manipulación de bases de datos relacionales.' },
    { term: 'Join (Reunión)', definition: 'Operación del álgebra relacional que combina filas de dos o más tablas basándose en una columna relacionada entre ellas.' },
    { term: 'Optimización de Consultas', definition: 'Proceso que realiza el SGBD para encontrar el plan de ejecución más eficiente para una consulta SQL.' },
    { term: 'Índice (Index)', definition: 'Estructura de datos que mejora la velocidad de las operaciones de recuperación de datos en una tabla de base de datos.' }
  ]
};