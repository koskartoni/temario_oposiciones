export const theme39Data = {
    id: "theme39",
    name: "TEMA 39/38: Lenguajes de B.D. (SQL)",
    title: "TEMA 39 INF / TEMA 38 SAI: LENGUAJES PARA DEFINICIÓN Y MANIPULACIÓN DE DATOS DE SISTEMAS DE BASES DE DATOS RELACIONALES. TIPOS. CARACTERÍSTICAS. LENGUAJE SQL.",
    version: "Versión: Septiembre 2024 (Actualizado)",
    sections: [
      {
        id: "t39_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema del bloque de "Bases de Datos" se centra en los lenguajes que utilizamos para interactuar con ellas, diferenciando entre los de definición y los de manipulación, y profundizando en <strong>SQL</strong> como el lenguaje estándar para las bases de datos relacionales.' },
          { type: 'paragraph', text: 'Para poder trabajar con bases de datos, primero hay que definirlas y luego manipular la información que contienen. Este tema explora los lenguajes diseñados para ambas tareas, que son la base para la gestión de datos en la inmensa mayoría de aplicaciones actuales.' }
        ]
      },
      {
        id: "t39_s2",
        shortTitle: "2. Conceptos Básicos",
        title: "2. LENGUAJES PARA LA DEFINICIÓN Y MANIPULACIÓN DE DATOS. CONCEPTOS BÁSICOS",
        content: [
          { type: 'paragraph', text: 'Una <strong>base de datos</strong> es un conjunto de datos interrelacionados y estructurados. Un <strong>SGBD (Sistema Gestor de Base de Datos)</strong> es el software que permite a los usuarios crear y mantener esa base de datos.'},
          { type: 'paragraph', text: 'Para ello, el SGBD provee dos tipos de lenguajes:'},
          { type: 'list', items: [
              '<strong>Lenguaje de Definición de Datos (DDL - Data Definition Language):</strong> Permite definir la estructura de la base de datos (tablas, vistas, índices).',
              '<strong>Lenguaje de Manipulación de Datos (DML - Data Manipulation Language):</strong> Permite realizar operaciones de consulta y actualización sobre la información.'
          ]}
        ]
      },
      {
        id: "t39_s3",
        shortTitle: "3. DDL",
        title: "3. LENGUAJE DE DEFINICIÓN DE DATOS (DDL)",
        content: [
          { type: 'paragraph', text: 'Un DDL permite a los usuarios definir las estructuras que almacenarán los datos. Gracias a su uso, se genera un <strong>diccionario de datos</strong>, que contiene "metadatos" (datos sobre los datos) que describen la estructura de la base de datos.' },
          { type: 'subheading', text: '3.1. Tipos de DDL'},
          { type: 'list', items: [
              '<strong>Interactivo:</strong> Permite tratar directamente con el SGBD a través de una consola.',
              '<strong>Incrustado o embebido:</strong> Se utiliza dentro de un lenguaje de programación anfitrión (como Java o Python) para interactuar con la base de datos.'
          ]},
          { type: 'subheading', text: '3.2. Características del DDL'},
          { type: 'list', items: [
              '<strong>Dependencia del SGBD:</strong> Cada SGBD puede tener su propio dialecto de DDL.',
              '<strong>Simplicidad:</strong> Suelen ser lenguajes sencillos con pocas instrucciones.',
              '<strong>Lenguajes de alto nivel:</strong> Abstraen al usuario de los detalles físicos del almacenamiento.',
              '<strong>Distintos niveles de abstracción:</strong> Permiten definir datos a nivel externo, lógico e interno.'
          ]}
        ]
      },
      {
        id: "t39_s4",
        shortTitle: "4. DML",
        title: "4. LENGUAJE DE MANIPULACIÓN DE DATOS (DML)",
        content: [
          { type: 'paragraph', text: 'El DML está compuesto por un conjunto de comandos para la manipulación, actualización y recuperación (consultas) de los datos.' },
          { type: 'subheading', text: '4.1. Tipos de DML'},
          { type: 'list', items: [
              '<strong>Procedimentales:</strong> El usuario especifica <strong>qué datos y cómo</strong> obtenerlos. (Ej. Álgebra Relacional).',
              '<strong>No Procedimentales:</strong> El usuario solo especifica <strong>qué datos</strong> desea, sin decir cómo. (Ej. Cálculo Relacional, SQL).'
          ]},
          { type: 'subheading', text: '4.2. Características del DML'},
          { type: 'list', items: ['Dependencia del SGBD.', 'Simplicidad y uniformidad.', 'Son lenguajes formales, con base matemática.']}
        ]
      },
      {
        id: "t39_s5",
        shortTitle: "5. Lenguaje SQL",
        title: "5. LENGUAJE SQL",
        content: [
          { type: 'paragraph', text: '<strong>SQL (Structured Query Language)</strong> es el lenguaje fundamental y estándar de los SGBD relacionales. Surgió como una evolución de SEQUEL (IBM, 1977) y fue estandarizado por ANSI e ISO en 1986. Es un lenguaje <strong>declarativo</strong>: se define qué se desea hacer, no cómo.' },
          { type: 'subheading', text: '5.2. Elementos del Lenguaje y Normas de Escritura'},
          { type: 'paragraph', text: 'SQL está compuesto por comandos, cláusulas, operadores, funciones y literales. Normas básicas:'},
          { type: 'list', items: ['Todas las instrucciones terminan con punto y coma (<code>;</code>).', 'No distingue entre mayúsculas y minúsculas para sus palabras clave.', 'Los comentarios de una línea comienzan con <code>--</code> y los de varias líneas con <code>/* ... */</code>.']},
          { type: 'table', title: 'Elementos de SQL', headers: ['Elemento', 'Descripción'], rows: [
              ['Comandos', 'Instrucciones principales (<code>SELECT</code>, <code>CREATE</code>, <code>GRANT</code>...). Se agrupan en DDL, DML y DCL.'],
              ['Cláusulas', 'Palabras clave que modifican un comando (<code>FROM</code>, <code>WHERE</code>, <code>ORDER BY</code>...).'],
              ['Operadores', 'Permiten crear expresiones complejas (aritméticos, de comparación, lógicos).'],
              ['Funciones', 'Para conseguir valores complejos (<code>AVG</code>, <code>COUNT</code>, <code>SUM</code>...).'],
              ['Literales', 'Valores concretos (un número, una fecha, un texto).']
          ]}
        ]
      },
      {
        id: "t39_s5_3", shortTitle: "5.3. SQL como DDL", title: "5.3. SQL COMO DDL",
        content: [
          { type: 'paragraph', text: 'Las instrucciones DDL de SQL permiten definir y gestionar la estructura de la base de datos. Generan acciones que no se pueden deshacer fácilmente.'},
          { type: 'codeExample', title: 'a) Creación y eliminación de base de datos:', language: 'sql', code: 'CREATE DATABASE NombreDB;\nDROP DATABASE NombreDB;'},
          { type: 'codeExample', title: 'b) Creación de tablas:', language: 'sql', code: 'CREATE TABLE Alumnos (\n  id_matricula INT NOT NULL PRIMARY KEY,\n  nombre VARCHAR(50) NOT NULL,\n  fecha_nacimiento DATE\n);'},
          { type: 'codeExample', title: 'c) Modificación de tablas:', language: 'sql', code: 'ALTER TABLE Alumnos ADD COLUMN email VARCHAR(100);\nALTER TABLE Alumnos DROP COLUMN fecha_nacimiento;'},
          { type: 'codeExample', title: 'd) Eliminación de tablas:', language: 'sql', code: 'DROP TABLE Alumnos;'},
          { type: 'codeExample', title: 'e) Creación de índices:', language: 'sql', code: 'CREATE INDEX idx_nombre ON Alumnos (nombre);'}
        ]
      },
      {
        id: "t39_s5_4", shortTitle: "5.4. SQL como DML", title: "5.4. SQL COMO DML",
        content: [
          { type: 'paragraph', text: 'Las instrucciones DML de SQL permiten consultar y manipular los datos almacenados.'},
          { type: 'codeExample', title: 'a) Recuperación de datos (Consultas):', language: 'sql', code: 'SELECT nombre, email FROM Alumnos WHERE id_matricula > 100;'},
          { type: 'codeExample', title: 'b) Inserción de datos:', language: 'sql', code: 'INSERT INTO Alumnos (id_matricula, nombre, email) VALUES (101, \'Ana\', \'ana@email.com\');'},
          { type: 'codeExample', title: 'c) Modificación/Actualización de datos:', language: 'sql', code: 'UPDATE Alumnos SET email = \'nuevo.email@email.com\' WHERE id_matricula = 101;'},
          { type: 'codeExample', title: 'd) Eliminación de datos:', language: 'sql', code: 'DELETE FROM Alumnos WHERE id_matricula = 101;'}
        ]
      },
      {
        id: "t39_s6",
        shortTitle: "6. Aplicación",
        title: "6. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'Las bases de datos y los lenguajes como SQL son herramientas fundamentales en prácticamente cualquier entorno laboral y educativo.' },
          { type: 'subheading', text: 'Contexto Escolar:'},
          { type: 'list', items: [
              'En la ESO y Bachillerato se pueden introducir los conceptos básicos de bases de datos en materias como TIC.',
              'En Ciclos Formativos como DAM, DAW y ASIR, se trabaja de forma intensiva con SQL y la administración de SGBD en módulos como <strong>Bases de Datos</strong> y <strong>Gestión de Bases de Datos</strong>.'
          ]},
          { type: 'subheading', text: 'Contexto Laboral:'},
          { type: 'paragraph', text: 'La utilización de bases de datos es imprescindible en innumerables ámbitos como la banca, telecomunicaciones, medicina, etc. El futuro de las bases de datos apunta a una mayor integración con la <strong>Inteligencia Artificial (IA)</strong> para realizar consultas más complejas y la adopción de entornos <strong>Multicloud</strong> para mejorar la disponibilidad y escalabilidad.'}
        ]
      },
      {
        id: "t39_s7",
        shortTitle: "7. Conclusión",
        title: "7. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En este tema se ha presentado una visión global de la definición y manipulación de datos, describiendo los lenguajes <strong>DDL</strong> y <strong>DML</strong> y sus diferentes clasificaciones. En la segunda mitad del tema se ha introducido el lenguaje <strong>SQL</strong>, que es el estándar de facto para las bases de datos relacionales y combina las funcionalidades tanto de DDL como de DML, siendo una herramienta esencial para cualquier profesional de la informática.' }
        ]
      },
      {
        id: "t39_s8",
        shortTitle: "8. Bibliografía",
        title: "8. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
            { text: 'Date, C.J. (2000). <em>Introducción a los sistemas de bases de datos</em>. Editorial Addison-Wesley.' },
            { text: 'Korth, H. y Silberschatz, A. (2002). <em>Fundamentos de bases de datos</em>. Editorial McGraw-Hill.' },
            { text: 'De Miguel, A. y Piattini, M. (1999). <em>Fundamentos y modelos de BBDD</em>. Edit. Ra-Ma.' },
            { text: 'Núñez, R. (2023). <em>Gestión de bases de datos</em>. Editorial Ra-Ma.' },
            { text: 'Oracle', url: 'https://www.oracle.com/' },
            { text: 'MySQL', url: 'https://www.mysql.com/' },
            { text: 'PostgreSQL', url: 'https://www.postgresql.org/' },
            { text: 'MongoDB', url: 'https://www.mongodb.com/' },
            { text: 'MariaDB', url: 'https://mariadb.org/' }
          ]}
        ]
      }
    ]
  };