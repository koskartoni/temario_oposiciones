// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 39/38
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme39Data = {
  id: "theme39",
  name: "TEMA 39/38: Lenguajes de B.D. (SQL)",
  title: "TEMA 39/38: LENGUAJES PARA DEFINICIÓN Y MANIPULACIÓN DE DATOS. LENGUAJE SQL.",
  version: "Septiembre 2024",
  sections: [
    {
      id: "t39_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema del bloque de "Bases de Datos" se centra en los lenguajes que utilizamos para interactuar con ellas, diferenciando entre los de definición y los de manipulación, y profundizando en <strong>SQL</strong> como el lenguaje estándar para las bases de datos relacionales.' },
        { type: 'paragraph', text: 'El estudio de los lenguajes de bases de datos está presente en el currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Bases de datos</code>' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Gestión de bases de datos</code>' }
        ]}
      ]
    },
    {
      id: "t39_s2",
      shortTitle: "2. Conceptos Básicos",
      title: "2. CONCEPTOS BÁSICOS",
      icon: "concepts",
      content: [
        { type: 'keyConcept', title: 'Lenguajes de un SGBD', text: 'Un <strong>SGBD (Sistema Gestor de Base de Datos)</strong> provee dos tipos de lenguajes para interactuar con los datos:'},
        { type: 'list', items: [
            '<strong>Lenguaje de Definición de Datos (DDL):</strong> Permite definir la estructura de la base de datos (tablas, vistas, índices).',
            '<strong>Lenguaje de Manipulación de Datos (DML):</strong> Permite realizar operaciones de consulta y actualización sobre la información.'
        ]}
      ]
    },
    {
      id: "t39_s3",
      shortTitle: "3. DDL",
      title: "3. LENGUAJE DE DEFINICIÓN DE DATOS (DDL)",
      icon: "ddl",
      content: [
        { type: 'paragraph', text: 'Un DDL permite a los usuarios definir las estructuras que almacenarán los datos. Gracias a su uso, se genera un <strong>diccionario de datos</strong>, que contiene "metadatos" (datos sobre los datos). Las características principales de un DDL son su dependencia del SGBD, su simplicidad y su alto nivel de abstracción.' },
      ]
    },
    {
      id: "t39_s4",
      shortTitle: "4. DML",
      title: "4. LENGUAJE DE MANIPULACIÓN DE DATOS (DML)",
      icon: "dml",
      content: [
        { type: 'paragraph', text: 'El DML está compuesto por un conjunto de comandos para la manipulación, actualización y recuperación (consultas) de los datos. Pueden ser <strong>procedimentales</strong> (el usuario especifica qué y cómo) o <strong>no procedimentales</strong> (el usuario solo especifica qué).' }
      ]
    },
    {
      id: "t39_s5",
      shortTitle: "5. Lenguaje SQL",
      title: "5. LENGUAJE SQL",
      icon: "sql"
    },
    {
      id: "t39_s5_1_2", shortTitle: "5.1/5.2. Introducción y Elementos", title: "5.1. INTRODUCCIÓN Y 5.2. ELEMENTOS DEL LENGUAJE",
      content: [
        { type: 'paragraph', text: '<strong>SQL (Structured Query Language)</strong> es el lenguaje estándar de facto de los SGBD relacionales. Es un lenguaje <strong>declarativo</strong> (no procedimental) y se le considera un lenguaje de cuarta generación por su cercanía al lenguaje natural.' },
        { type: 'keyConcept', title: 'Sublenguajes de SQL', text: 'SQL agrupa sus comandos en tres grandes sublenguajes:'},
        { type: 'definitionList', items: [
          { term: 'DDL (Data Definition Language):', definition: 'Para definir la estructura. Comandos: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>.'},
          { term: 'DML (Data Manipulation Language):', definition: 'Para manipular los datos. Comandos: <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>.'},
          { term: 'DCL (Data Control Language):', definition: 'Para gestionar permisos y seguridad. Comandos: <code>GRANT</code>, <code>REVOKE</code>.'}
        ]}
      ]
    },
    {
      id: "t39_s5_3", shortTitle: "5.3. SQL como DDL", title: "5.3. SQL COMO DDL",
      content: [
        { type: 'paragraph', text: 'Las instrucciones DDL de SQL permiten definir y gestionar la estructura de la base de datos.'},
        { type: 'codeExample', title: 'Creación de una tabla:', language: 'sql', code: 'CREATE TABLE Alumnos (\n  id_matricula INT PRIMARY KEY,\n  nombre VARCHAR(50) NOT NULL,\n  email VARCHAR(100) UNIQUE\n);'},
        { type: 'codeExample', title: 'Modificación de una tabla:', language: 'sql', code: 'ALTER TABLE Alumnos ADD COLUMN fecha_nacimiento DATE;'},
        { type: 'codeExample', title: 'Eliminación de una tabla:', language: 'sql', code: 'DROP TABLE Alumnos;'}
      ]
    },
    {
      id: "t39_s5_4", shortTitle: "5.4. SQL como DML", title: "5.4. SQL COMO DML",
      content: [
        { type: 'paragraph', text: 'Las instrucciones DML de SQL permiten consultar y manipular los datos almacenados.'},
        { type: 'codeExample', title: 'Consulta (SELECT):', language: 'sql', code: 'SELECT nombre, email FROM Alumnos WHERE id_matricula > 100;'},
        { type: 'codeExample', title: 'Inserción (INSERT):', language: 'sql', code: 'INSERT INTO Alumnos (id_matricula, nombre, email) VALUES (101, \'Ana\', \'ana@email.com\');'},
        { type: 'codeExample', title: 'Modificación (UPDATE):', language: 'sql', code: 'UPDATE Alumnos SET email = \'nuevo@email.com\' WHERE id_matricula = 101;'},
        { type: 'codeExample', title: 'Eliminación (DELETE):', language: 'sql', code: 'DELETE FROM Alumnos WHERE id_matricula = 101;'},
        { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
          { question: '¿Qué comando SQL se utiliza para añadir una nueva columna a una tabla existente?', options: ['ADD COLUMN', 'MODIFY TABLE', 'ALTER TABLE'], correctAnswerIndex: 2 },
          { question: 'El comando para eliminar todos los registros de una tabla que cumplen una condición es:', options: ['DROP', 'DELETE', 'REMOVE'], correctAnswerIndex: 1 }
        ]}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: 't39_s6', title: "6. APLICACIÓN DE LOS CONTENIDOS", shortTitle: "6. Aplicación", icon: "application", content: [ { type: 'paragraph', text: 'SQL es una herramienta fundamental en el desarrollo de software. En FP (DAM, DAW, ASIR), es la base de los módulos de "Bases de Datos" y "Gestión de Bases de Datos". En el ámbito laboral, es un requisito para roles de desarrollador backend, administrador de bases de datos (DBA), analista de datos y científico de datos.' } ] },
    { id: 't39_s7', title: "7. CONCLUSIÓN", shortTitle: "7. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'Este tema ha presentado una visión global de los lenguajes para la definición y manipulación de datos, destacando la importancia y omnipresencia de SQL en los sistemas de bases de datos relacionales. La combinación de DDL, DML y DCL en un único lenguaje estándar lo convierte en una herramienta potente y esencial para cualquier profesional de la informática.' } ] },
    { id: 't39_s8', title: "8. BIBLIOGRAFÍA", shortTitle: "8. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Date, C.J. (2000). <em>Introducción a los sistemas de bases de datos</em>. Addison-Wesley.' }, { text: 'Korth H. y Silberschatz, A. (2002). <em>Fundamentos de bases de datos</em>. McGraw-Hill.' }, { text: 'Núñez R. (2023). <em>Gestión de bases de datos</em>. Ra-Ma.' } ] } ] }
  ],
  glossary: [
    { term: 'SGBD (Sistema Gestor de Base de Datos)', definition: 'Software que permite crear, mantener y utilizar bases de datos de forma eficiente y segura.' },
    { term: 'DDL (Data Definition Language)', definition: 'Sublenguaje de SQL utilizado para definir y gestionar la estructura de los objetos de la base de datos (tablas, vistas, etc.). Comandos: CREATE, ALTER, DROP.' },
    { term: 'DML (Data Manipulation Language)', definition: 'Sublenguaje de SQL utilizado para consultar y manipular los datos almacenados en las tablas. Comandos: SELECT, INSERT, UPDATE, DELETE.' },
    { term: 'DCL (Data Control Language)', definition: 'Sublenguaje de SQL utilizado para gestionar los permisos y la seguridad de la base de datos. Comandos: GRANT, REVOKE.' },
    { term: 'SQL (Structured Query Language)', definition: 'Lenguaje de consulta estructurado, estándar de facto para la gestión de bases de datos relacionales.' },
    { term: 'Lenguaje Declarativo', definition: 'Tipo de lenguaje (como SQL) en el que el programador especifica QUÉ resultado quiere obtener, sin detallar CÓMO conseguirlo.' }
  ]
};