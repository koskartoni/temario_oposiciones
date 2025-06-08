export const theme36Data = {
    id: "theme36",
    name: "TEMA 36: Manipulación de Datos",
    title: "TEMA 36. INFORMÁTICA - LA MANIPULACIÓN DE DATOS. OPERACIONES. LENGUAJES. OPTIMIZACIÓN DE CONSULTAS.",
    version: "Versión: Septiembre 2024 (Actualizado)",
    sections: [
      {
        id: "t36_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema se ubica en el bloque de "Bases de Datos" y se centra en la <strong>manipulación de datos</strong>, es decir, las operaciones que realizamos sobre los datos una vez que han sido definidos y almacenados.' },
          { type: 'paragraph', text: 'Antes de los <strong>Sistemas Gestores de Bases de Datos (SGBD)</strong>, la información se gestionaba con sistemas de archivos donde los datos y los programas que los usaban estaban fuertemente acoplados. Esto suponía un gran inconveniente, ya que cualquier cambio en la estructura de los datos requería modificar todos los programas. La idea de separar los datos de las aplicaciones dio lugar a las bases de datos, gestionadas por los SGBD.' }
        ]
      },
      {
        id: "t36_s2",
        shortTitle: "2. Manipulación de Datos",
        title: "2. LA MANIPULACIÓN DE DATOS",
        content: [
          { type: 'paragraph', text: 'Una <strong>base de datos</strong> es un conjunto de datos interrelacionados y estructurados, almacenados en un soporte no volátil. Un <strong>SGBD</strong> es una colección de programas que permite a los usuarios crear y mantener una base de datos.' },
          { type: 'paragraph', text: 'Un SGBD desarrolla tres funciones fundamentales: definición, manipulación y control de datos. Este tema se centra en la <strong>manipulación de datos</strong>, que incluye las siguientes tareas:' },
          { type: 'list', items: ['Consultar determinada información.', 'Insertar nuevos datos.', 'Modificar los datos existentes.', 'Eliminar datos que ya no son necesarios.']}
        ]
      },
      {
        id: "t36_s3",
        shortTitle: "3. DML",
        title: "3. LENGUAJE DE MANIPULACIÓN DE DATOS (DML)",
        content: [
          { type: 'paragraph', text: 'El <strong>Lenguaje de Manipulación de Datos (DML)</strong> está compuesto por un conjunto de comandos que permiten realizar las operaciones de manipulación, actualización y recuperación de datos (consultas).' },
          { type: 'subheading', text: '3.1. Tipos de DML'},
          { type: 'definitionList', items: [
              { term: 'a) Procedimentales vs. No Procedimentales', subItems: [
                  '<strong>Procedimentales:</strong> El usuario debe especificar <strong>qué datos necesita y cómo obtenerlos</strong>. Son más complejos pero ofrecen más control.',
                  '<strong>No Procedimentales:</strong> El usuario solo especifica <strong>qué datos desea</strong>, sin decir cómo se deben obtener. El SGBD se encarga de determinar la forma más eficiente. Son más fáciles de usar.'
              ]},
              { term: 'b) Basados en Álgebra o Cálculo Relacional', subItems: [
                  '<strong>Basados en álgebra relacional:</strong> Es un lenguaje de consulta <strong>procedimental</strong>. El lenguaje <strong>SQL</strong> está basado en él.',
                  '<strong>Basados en cálculo relacional:</strong> Es un lenguaje <strong>no procedimental</strong>. Lenguajes como <strong>QBE (Query By Example)</strong> se basan en él.'
              ]}
          ]},
          { type: 'subheading', text: '3.2. Características'},
          { type: 'list', items: ['Dependencia del SGBD.', 'Simplicidad y uniformidad.', 'Son lenguajes formales, con base matemática.']}
        ]
      },
      {
        id: "t36_s4_1", shortTitle: "4.1. Álgebra Relacional", title: "4.1. ÁLGEBRA RELACIONAL",
        content: [
          { type: 'paragraph', text: 'El álgebra relacional es una disciplina matemática que define un conjunto de operaciones sobre relaciones (tablas). Cualquier consulta a una base de datos relacional puede realizarse en términos de estos operadores. Se clasifican en:'},
          { type: 'list', items: ['<strong>Operadores primitivos:</strong> Son los operadores esenciales (Unión, Diferencia, Producto cartesiano, Proyección, Selección).', '<strong>Operadores derivados:</strong> Se pueden obtener aplicando varios operadores primitivos (Intersección, Join, etc.).']},
          { type: 'subheading', text: '4.1.1. Operadores Primitivos'},
          { type: 'definitionList', items: [
              { term: 'Unión de conjuntos:', definition: 'Denotada por <code>R ∪ S</code>, es el conjunto de tuplas que pertenecen a R, a S, o a ambas. Las relaciones deben ser compatibles.'},
              { term: 'Diferencia de conjuntos:', definition: 'Denotada por <code>R - S</code>, es el conjunto de tuplas de R que no pertenecen a S.'},
              { term: 'Producto cartesiano:', definition: 'Denotado por <code>R × S</code>, combina cada tupla de R con cada tupla de S.'},
              { term: 'Proyección:', definition: 'Selecciona ciertas columnas de una relación. Se denota por:'},
              { term: 'Selección:', definition: 'Selecciona las tuplas (filas) de una relación que satisfacen una condición. Se denota por:'}
          ]},
          { type: 'equation', latexString: '\\pi_{A1, A2, ..., An}(R)' },
          { type: 'equation', latexString: '\\sigma_{condición}(R)' },
          { type: 'subheading', text: '4.1.2. Operadores Derivados'},
          { type: 'definitionList', items: [
              { term: 'Intersección:', definition: 'Denotada por <code>R ∩ S</code>, devuelve las tuplas comunes a ambas relaciones.'},
              { term: 'Reunión (Join):', definition: 'Consiste en un producto cartesiano seguido de una selección. Es la operación más importante y común.'},
              { term: 'Reunión Natural (Natural Join):', definition: 'Un tipo de Join que se realiza sobre las columnas con el mismo nombre en ambas relaciones.'}
          ]}
        ]
      },
      {
          id: "t36_s5_3", shortTitle: "5.3. Modelo Relacional (SQL)", title: "5.3. MODELO RELACIONAL. SQL COMO DML",
          content: [
              { type: 'paragraph', text: 'En <strong>SQL</strong>, el DML permite realizar tanto consultas (recuperación) como operaciones de manipulación (inserción, modificación, borrado).'},
              { type: 'subheading', text: 'a) Recuperación de datos (Consultas)'},
              { type: 'paragraph', text: 'Se realiza con la instrucción <code>SELECT</code>, el comando más versátil de SQL. Su sintaxis básica es:'},
              { type: 'codeExample', language: 'sql', code: 'SELECT [ ALL | DISTINCT ] [ * | ListaColumnas ]\nFROM Nombre_Tabla\n[WHERE Condiciones]\n[GROUP BY ListaColumnas]\n[HAVING Condiciones]\n[ORDER BY ListaColumnas [ ASC | DESC ]];'},
              { type: 'subheading', text: 'b) Inserción de datos'},
              { type: 'codeExample', language: 'sql', code: 'INSERT INTO NombreTabla (columna1, columna2) VALUES (valor1, valor2);'},
              { type: 'subheading', text: 'c) Modificación/Actualización de datos'},
              { type: 'codeExample', language: 'sql', code: 'UPDATE NombreTabla SET columna1 = valor1 WHERE Criterio;'},
              { type: 'subheading', text: 'd) Eliminación de datos'},
              { type: 'codeExample', language: 'sql', code: 'DELETE FROM NombreTabla WHERE Criterio;'}
          ]
      },
      {
        id: "t36_s6",
        shortTitle: "6. Optimización de Consultas",
        title: "6. OPTIMIZACIÓN DE CONSULTAS",
        content: [
          { type: 'paragraph', text: 'En los lenguajes no procedimentales como SQL, el usuario dice el resultado que quiere, pero no cómo conseguirlo. El SGBD se encarga de encontrar la forma más eficiente de ejecutar la consulta. Este proceso se llama <strong>optimización de consultas</strong>.'},
          { type: 'paragraph', text: 'Algunas tareas que se pueden realizar para ayudar al sistema a optimizar las consultas son:'},
          { type: 'list', items: [
              '<strong>Diseño de las tablas y elección de tipos:</strong> Un buen diseño y la correcta elección de tipos de datos evitan conversiones innecesarias y reducen el espacio ocupado.',
              '<strong>Desnormalización:</strong> A veces, para evitar operaciones <code>JOIN</code> costosas, se rompe intencionadamente la normalización para mejorar el rendimiento de las consultas.',
              '<strong>Monitor de consultas:</strong> Permite trazar las operaciones para localizar las consultas más frecuentes o lentas, que serán el foco de la optimización.',
              '<strong>Planes de ejecución:</strong> Revisar el plan de ejecución que el SGBD elige para una consulta permite comprobar cómo se está accediendo a las tablas y si se están usando los índices correctamente.',
              '<strong>Índices:</strong> La tarea fundamental. Decidir adecuadamente sobre qué columnas crear un índice (y de qué tipo) es la forma más directa de acelerar las consultas. Se recomienda crear índices en claves primarias y foráneas, y en las columnas usadas frecuentemente en las cláusulas <code>WHERE</code>.'
          ]}
        ]
      },
      {
        id: "t36_s7",
        shortTitle: "7. Aplicación",
        title: "7. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'Las bases de datos y los sistemas gestores son imprescindibles en prácticamente cualquier entorno laboral y educativo.' },
          { type: 'subheading', text: 'Contexto Escolar:'},
          { type: 'list', items: [
              'En la ESO y Bachillerato se pueden trabajar con bases de datos en materias como TIC. En Ciclos Formativos (DAM, DAW, ASIR) se trabaja con el alumnado contenidos totalmente relacionados con las bases de datos.'
          ]},
          { type: 'subheading', text: 'Contexto Laboral:'},
          { type: 'paragraph', text: 'Existen multitud de contextos laborales donde se utilizan las bases de datos: banca, líneas aéreas, universidades, telecomunicaciones, medicina, etc. En cuanto al futuro de las bases de datos, las dos tendencias principales son la integración de la <strong>Inteligencia Artificial (IA)</strong> para consultas en lenguaje natural y la adopción de entornos <strong>Multicloud</strong>.' }
        ]
      },
      {
        id: "t36_s8",
        shortTitle: "8. Conclusión",
        title: "8. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'Como hemos visto, este tema es muy importante debido a la demostrada importancia que tienen las bases de datos y los SGBD en nuestra vida cotidiana. Un SGBD desarrolla tres funciones fundamentales: definición, manipulación y control de datos. En este tema se ha presentado una visión global de la manipulación de datos, describiendo las operaciones, los lenguajes (DML) y finalmente, los aspectos a tener en cuenta en el proceso de optimización de consultas.' }
        ]
      },
      {
        id: "t36_s9",
        shortTitle: "9. Bibliografía",
        title: "9. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Date, C.J. (2000). <em>Introducción a los sistemas de bases de datos</em>. Editorial Addison-Wesley.' },
              { text: 'De Miguel A. y Piattini M. (1999). <em>Fundamentos y modelos de BBDD</em>. Edit. Ra-Ma.' },
              { text: 'Korth H. y Silberschatz, A. (2002). <em>Fundamentos de bases de datos</em>. Editorial McGraw-Hill.' },
              { text: 'Núñez R. (2023). <em>Gestión de bases de datos</em>. Editorial Ra-Ma.' },
              { text: 'Oracle', url: 'https://www.oracle.com/' },
              { text: 'MySQL', url: 'https://www.mysql.com/' },
              { text: 'MongoDB', url: 'https://www.mongodb.com/' },
              { text: 'MariaDB', url: 'https://mariadb.org/' }
          ]}
        ]
      }
    ]
  };