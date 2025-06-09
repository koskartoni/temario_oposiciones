// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 13
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme13Data = {
  id: "theme13",
  name: "TEMA 13: Ficheros",
  title: "TEMA 13. FICHEROS. TIPOS. CARACTERÍSTICAS. ORGANIZACIONES.",
  version: "Versión: Noviembre 2024",
  sections: [
    {
      id: "t13_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema, ubicado en el bloque de "Organización y representación de datos", se centra en el concepto de <strong>fichero</strong>, una estructura fundamental para la persistencia de datos. A través de autores como Joyanes y Silberschatz, exploraremos sus tipos, características y organizaciones.' },
        { type: 'paragraph', text: 'La gestión de la información ha evolucionado desde los sistemas manuales hasta los ficheros informatizados y, finalmente, las bases de datos. Hoy, con la explosión del <strong>Big Data</strong>, la correcta organización de los ficheros es más crucial que nunca.' },
        { type: 'paragraph', text: 'El estudio de los ficheros está presente en el currículo de la familia de Informática y Comunicaciones. Concretamente, se puede ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> – Módulo: <code>Bases de datos</code>' },
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Web (DAW)</strong> – Módulo: <code>Bases de datos</code>' }
        ]}
      ]
    },
    {
      id: "t13_s2",
      shortTitle: "2. Ficheros",
      title: "2. FICHEROS",
      icon: "file",
      content: [
        { type: 'subheading', text: '2.1. DEFINICIÓN'},
        { type: 'paragraph', text: 'Un fichero es un conjunto de datos estructurados en una colección de entidades elementales denominadas <strong>registros</strong>, que a su vez se componen de entidades de nivel más bajo denominadas <strong>campos</strong> (Joyanes, 2020).' },
        { type: 'subheading', text: '2.2. OPERACIONES CON FICHEROS'},
        { type: 'paragraph', text: 'Las operaciones principales sobre los registros de un fichero son: <strong>modificación, eliminación e inserción</strong>. La mayoría implican primero una búsqueda o localización del registro deseado.'}
      ]
    },
    {
      id: "t13_s3",
      shortTitle: "3. Tipos de Ficheros",
      title: "3. TIPOS DE FICHEROS",
      icon: "types",
      content: [
        { type: 'paragraph', text: 'Los ficheros se clasifican según su función en <strong>permanentes</strong> y <strong>temporales</strong>.'},
        { type: 'flowDiagram', title: 'Clasificación de Ficheros por Función',
          initialNodes: [
            { id: 'ficheros', position: { x: 250, y: 0 }, data: { label: 'Ficheros' } },
            { id: 'perm', position: { x: 100, y: 100 }, data: { label: 'Permanentes' }, className: 'node-bus-address' },
            { id: 'temp', position: { x: 400, y: 100 }, data: { label: 'Temporales' }, className: 'node-bus-data' },
            { id: 'maestros', position: { x: 0, y: 200 }, data: { label: 'Maestros' } },
            { id: 'constantes', position: { x: 125, y: 200 }, data: { label: 'Constantes' } },
            { id: 'historicos', position: { x: 250, y: 200 }, data: { label: 'Históricos' } },
          ],
          initialEdges: [
            { id: 'e1', source: 'ficheros', target: 'perm' }, { id: 'e2', source: 'ficheros', target: 'temp' },
            { id: 'e3', source: 'perm', target: 'maestros' }, { id: 'e4', source: 'perm', target: 'constantes' }, { id: 'e5', source: 'perm', target: 'historicos' },
          ]
        },
        { type: 'subheading', text: '3.1. FICHEROS PERMANENTES'},
        { type: 'list', items: ['<strong>Maestros:</strong> Almacenan el estado actual de los datos (ej. fichero de usuarios activos).', '<strong>Constantes:</strong> Almacenan datos fijos para consulta (ej. fichero de códigos postales).', '<strong>Históricos:</strong> Almacenan datos de un estado anterior (ej. usuarios dados de baja).']},
        { type: 'subheading', text: '3.2. FICHEROS TEMPORALES'},
        { type: 'list', items: ['<strong>Intermedios:</strong> Datos de una aplicación que serán usados por otra.', '<strong>De maniobras:</strong> Datos que no caben en memoria principal durante un proceso.', '<strong>De resultados:</strong> Datos que van a ser transferidos a un dispositivo de salida (ej. fichero de impresión).']}
      ]
    },
    {
      id: "t13_s4",
      shortTitle: "4. Características",
      title: "4. CARACTERÍSTICAS",
      icon: "features",
      content: [
        { type: 'keyConcept', title: 'Jerarquía de Datos', text: '<ul><li><strong>Campo:</strong> La mínima unidad de información (ej. nombre, email).</li><li><strong>Registro:</strong> Conjunto de campos relacionados que describen un objeto (ej. todos los datos de un usuario).</li><li><strong>Fichero:</strong> Conjunto de registros relacionados.</li><li><strong>Base de Datos:</strong> Colección de ficheros interrelacionados.</li></ul>'},
        { type: 'table', title: 'Ejemplo: Fichero de Usuarios (Cada fila es un registro)', headers: ['Usuario (Campo)', 'Nombre (Campo)', 'Apellidos (Campo)', 'Email (Campo)'], rows: [
            ['jgarfer', 'Juan', 'García Fernández', 'jgarfer@jgarfer.es'],
            ['asanper', 'Alberto', 'Sánchez Pérez', 'asanper@asanper.es'],
        ]}
      ]
    },
    {
      id: "t13_s5",
      shortTitle: "5. Organizaciones",
      title: "5. ORGANIZACIONES",
      icon: "organization",
      content: [
        { type: 'paragraph', text: 'La <strong>organización de ficheros</strong> es el conjunto de reglas para estructurar y almacenar los registros en un soporte. Los dos modos básicos son secuencial y directo.'}
      ]
    },
    {
      id: "t13_s5_1", shortTitle: "5.1. Secuencial", title: "5.1. ORGANIZACIÓN SECUENCIAL",
      content: [
        { type: 'paragraph', text: 'Los registros se almacenan consecutivamente. Para acceder al registro <em>n</em>, es obligatorio leer los <em>n-1</em> anteriores. Es ideal para procesos por lotes (batch) donde se procesan todos o la mayoría de los registros, como el cálculo de nóminas.'},
        { type: 'keyConcept', title: 'Ventajas y Desventajas', items: ['<strong>Ventajas:</strong> Rápido para leer bloques contiguos, no desperdicia espacio.', '<strong>Inconvenientes:</strong> Muy lento para acceder a registros aislados, las inserciones y borrados son muy ineficientes.']}
      ]
    },
    {
      id: "t13_s5_2", shortTitle: "5.2. Directa", title: "5.2. ORGANIZACIÓN DIRECTA",
      content: [
        { type: 'paragraph', text: 'Permite acceder a los registros directamente mediante su posición, sin un orden físico preestablecido. Es muy rápido para acceder a registros aislados.'},
        { type: 'list', items: [
            '<strong>Direccionamiento Directo:</strong> La clave del registro coincide con su dirección física.',
            '<strong>Direccionamiento Asociado:</strong> Se usa una tabla de índices que asocia cada clave con su dirección.',
            '<strong>Direccionamiento Calculado (Hashing):</strong> Una función matemática (hash) transforma la clave en una dirección. Pueden ocurrir <strong>colisiones</strong> (dos claves generan la misma dirección), que se gestionan en una zona de <em>overflow</em>.'
        ]}
      ]
    },
    {
      id: "t13_s5_3", shortTitle: "5.3. Variantes Secuencial", title: "5.3. VARIANTES DE LA ORGANIZACIÓN SECUENCIAL",
      content: [
        { type: 'paragraph', text: 'Para mejorar la organización secuencial, surgen variantes que combinan ideas del acceso directo:'},
        { type: 'definitionList', items: [
            {term: 'Secuencial Encadenada:', definition: 'Cada registro tiene un puntero a la dirección del siguiente, facilitando inserciones y borrados.'},
            {term: 'Secuencial Indexada:', definition: 'Un índice permite acceder rápidamente al inicio de un bloque de registros, que luego se lee secuencialmente. Es la base de muchos sistemas de bases de datos.'}
        ]},
        { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
          { question: 'Para un proceso que debe leer y actualizar el 95% de los registros de un fichero muy grande, ¿qué organización es la más eficiente?', options: ['Directa (Hashing)', 'Secuencial', 'Secuencial Encadenada'], correctAnswerIndex: 1 },
          { question: '¿Qué organización es más adecuada para una base de datos que necesita consultar registros de clientes individuales de forma muy rápida?', options: ['Secuencial', 'Directa o Secuencial Indexada'], correctAnswerIndex: 1 }
        ]}
      ]
    },
    {
      id: "t13_s6",
      shortTitle: "6. Parámetros de Utilización",
      title: "6. PARÁMETROS DE UTILIZACIÓN DE UN FICHERO",
      icon: "metrics",
      content: [
        { type: 'paragraph', text: 'Para decidir la organización más adecuada, se analizan los siguientes parámetros:'},
        { type: 'definitionList', items: [
            { term: 'Actividad:', definition: 'Cantidad de consultas y modificaciones (tasa y frecuencia).' },
            { term: 'Volatilidad:', definition: 'Cantidad de inserciones y borrados (tasa y frecuencia de renovación).' },
            { term: 'Crecimiento:', definition: 'Variación de la capacidad del fichero a lo largo del tiempo.' }
        ]}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: 't13_s7', title: "7. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL", shortTitle: "7. Aplicación", icon: "application", content: [ { type: 'paragraph', text: 'En los ciclos de DAM y DAW, concretamente en el módulo de Bases de Datos, se abordan los distintos tipos de ficheros y sus organizaciones para entender cómo los Sistemas Gestores de Bases de Datos (SGBD) gestionan la persistencia de los datos de forma eficiente.' } ] },
    { id: 't13_s8', title: "8. CONCLUSIÓN", shortTitle: "8. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'El estudio de los ficheros y sus organizaciones es fundamental para la tecnología de la información, ya que son la base de la persistencia de datos. Conocer las ventajas y desventajas de las organizaciones secuenciales, directas e indexadas es crucial para el diseño de sistemas de información eficientes y efectivos.' } ] },
    { id: 't13_s9', title: "9. BIBLIOGRAFÍA", shortTitle: "9. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Joyanes, L. (2020). <em>Fundamentos de programación. Algoritmos, estructuras de datos y objetos</em>. McGraw-Hill.' }, { text: 'Silberschatz, A. y Korth, H. (2022). <em>Database system concepts</em>. McGraw-Hill.' } ] } ] }
  ],
  glossary: [
    { term: 'Fichero', definition: 'Conjunto de registros relacionados, almacenados en un soporte de memoria secundaria para garantizar la persistencia de los datos.' },
    { term: 'Registro', definition: 'Conjunto de campos lógicamente relacionados que describen un mismo objeto o entidad.' },
    { term: 'Campo', definition: 'La mínima unidad de información con significado propio dentro de un registro.' },
    { term: 'Organización de Ficheros', definition: 'Conjunto de reglas que definen cómo se estructuran y almacenan los registros en un soporte físico.' },
    { term: 'Organización Secuencial', definition: 'Los registros se almacenan uno tras otro. El acceso a un registro requiere leer todos los anteriores.' },
    { term: 'Organización Directa (o Aleatoria)', definition: 'Permite el acceso a cualquier registro directamente a través de su dirección, sin necesidad de leer los anteriores.' },
    { term: 'Hashing', definition: 'Técnica de direccionamiento calculado que utiliza una función matemática para convertir la clave de un registro en una dirección física.' }
  ]
};