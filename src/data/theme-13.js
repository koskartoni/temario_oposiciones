export const theme13Data = {
    id: "theme13",
    name: "TEMA 13: Ficheros",
    title: "TEMA 13. INFORMÁTICA / S.A.I. - FICHEROS. TIPOS. CARACTERÍSTICAS. ORGANIZACIONES.",
    version: "Versión: Mayo 2024 (Actualizado)",
    sections: [
      {
        id: "t13_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema, ubicado en el bloque de "Organización y representación de datos", se centra en el concepto de <strong>fichero</strong>, una estructura fundamental para la persistencia de datos en los sistemas informáticos.' },
          { type: 'paragraph', text: 'La gestión de la información ha evolucionado desde los sistemas manuales (carpetas, archivadores) hasta los ficheros informatizados, que permiten un acceso mucho más rápido y eficiente. A finales de los 60 surgieron las bases de datos para gestionar estos ficheros de forma estructurada. Hoy, con la explosión del <strong>Big Data</strong>, la correcta organización de los ficheros, tanto estructurados como no estructurados, es más crucial que nunca.' }
        ]
      },
      {
        id: "t13_s2",
        shortTitle: "2. Ficheros",
        title: "2. FICHEROS",
        content: [
          { type: 'subheading', text: '2.1. DEFINICIÓN'},
          { type: 'paragraph', text: 'Para almacenar la información de modo permanente se utilizan dispositivos de almacenamiento masivo (memoria secundaria). La información en estos dispositivos se estructura en unidades denominadas <strong>archivos o ficheros</strong>.' },
          { type: 'paragraph', text: 'Un fichero es un conjunto de datos estructurados en una colección de entidades elementales denominadas <strong>registros</strong>, que a su vez se componen de entidades de nivel más bajo denominadas <strong>campos</strong>. (Joyanes, 2020).' },
          { type: 'subheading', text: '2.2. OPERACIONES CON FICHEROS'},
          { type: 'paragraph', text: 'Las operaciones principales que se pueden realizar sobre los registros de un fichero son:'},
          { type: 'list', items: ['Modificación de un registro', 'Eliminación o borrado de un registro', 'Inserción de un registro.']},
          { type: 'paragraph', text: 'La mayoría de estas operaciones implican primero una búsqueda o localización del registro deseado.'}
        ]
      },
      {
        id: "t13_s3",
        shortTitle: "3. Tipos de Ficheros",
        title: "3. TIPOS DE FICHEROS",
        content: [
          { type: 'paragraph', text: 'Los ficheros se pueden clasificar según la función que desempeñan:'},
          { type: 'flowDiagram', title: 'Clasificación de Ficheros por Función',
            initialNodes: [
              { id: 'ficheros', position: { x: 250, y: 0 }, data: { label: 'Ficheros' } },
              { id: 'perm', position: { x: 100, y: 100 }, data: { label: 'Permanentes' }, style: {backgroundColor: '#388ad1', color: 'white'} },
              { id: 'temp', position: { x: 400, y: 100 }, data: { label: 'Temporales' }, style: {backgroundColor: '#d18a38'} },
              { id: 'maestros', position: { x: 0, y: 200 }, data: { label: 'Maestros' } },
              { id: 'constantes', position: { x: 125, y: 200 }, data: { label: 'Constantes' } },
              { id: 'historicos', position: { x: 250, y: 200 }, data: { label: 'Históricos' } },
              { id: 'intermedios', position: { x: 375, y: 200 }, data: { label: 'Intermedios' } },
              { id: 'maniobras', position: { x: 500, y: 200 }, data: { label: 'De Maniobras' } },
              { id: 'resultados', position: { x: 625, y: 200 }, data: { label: 'De Resultados' } }
            ],
            initialEdges: [
              { id: 'e1', source: 'ficheros', target: 'perm' }, { id: 'e2', source: 'ficheros', target: 'temp' },
              { id: 'e3', source: 'perm', target: 'maestros' }, { id: 'e4', source: 'perm', target: 'constantes' }, { id: 'e5', source: 'perm', target: 'historicos' },
              { id: 'e6', source: 'temp', target: 'intermedios' }, { id: 'e7', source: 'temp', target: 'maniobras' }, { id: 'e8', source: 'temp', target: 'resultados' }
            ]
          },
          { type: 'subheading', text: '3.1. FICHEROS PERMANENTES'},
          { type: 'definitionList', items: [
              {term: 'Ficheros maestros:', definition: 'Almacenan el estado actual de los datos de una aplicación. Son su núcleo. Ejemplo: fichero de usuarios activos.'},
              {term: 'Ficheros constantes:', definition: 'Almacenan datos fijos para consulta. Ejemplo: fichero de códigos postales.'},
              {term: 'Ficheros históricos:', definition: 'Almacenan datos de un estado anterior para reconstrucción. Ejemplo: fichero de usuarios dados de baja.'}
          ]},
          { type: 'subheading', text: '3.2. FICHEROS TEMPORALES'},
          { type: 'definitionList', items: [
              {term: 'Ficheros intermedios:', definition: 'Almacenan datos de una aplicación que serán usados por otra.'},
              {term: 'Ficheros de maniobras:', definition: 'Almacenan datos que no caben en memoria principal durante un proceso.'},
              {term: 'Ficheros de resultados:', definition: 'Almacenan datos que van a ser transferidos a un dispositivo de salida. Ejemplo: fichero de impresión.'}
          ]}
        ]
      },
      {
        id: "t13_s4",
        shortTitle: "4. Características",
        title: "4. CARACTERÍSTICAS",
        content: [
          { type: 'paragraph', text: 'Terminología básica para entender la estructura de un fichero:'},
          { type: 'definitionList', items: [
              {term: 'Campo:', definition: 'La mínima unidad de información dentro de un registro (ej. nombre, email).'},
              {term: 'Registro:', definition: 'Conjunto de campos lógicamente relacionados que describen un mismo objeto (ej. todos los datos de un usuario).'},
              {term: 'Fichero:', definition: 'Conjunto de registros relacionados organizados para un propósito específico.'},
              {term: 'Base de datos:', definition: 'Colección de ficheros interrelacionados y gestionados por un conjunto de programas (SGBD).'}
          ]},
          { type: 'table', title: 'Ejemplo: Fichero de Usuarios', headers: ['Usuario (Campo)', 'Nombre (Campo)', 'Apellidos (Campo)', 'Email (Campo)', 'Ciudad (Campo)'], rows: [
              ['jgarfer', 'Juan', 'García Fernández', 'jgarfer@jgarfer.es', 'Granada'],
              ['asanper', 'Alberto', 'Sánchez Pérez', 'asanper@asanper.es', 'Sevilla'],
              ['fmonpad', 'Fernando', 'Montes Padilla', 'fmonpad@fmonpad.es', 'Madrid'],
              ['rhersan', 'Raúl', 'Hernández Sanz', 'rhersan@rhersan.es', 'Valencia'],
          ]}
        ]
      },
      {
        id: "t13_s5",
        shortTitle: "5. Organizaciones",
        title: "5. ORGANIZACIONES",
        content: [
          { type: 'paragraph', text: 'La <strong>organización de ficheros</strong> es el conjunto de reglas utilizadas para estructurar y almacenar los registros en un soporte. Los dos modos básicos son:'},
          { type: 'list', items: ['Organización secuencial', 'Organización directa']}
        ]
      },
      {
        id: "t13_s5_1", shortTitle: "5.1. Secuencial", title: "5.1. ORGANIZACIÓN SECUENCIAL",
        content: [
          { type: 'paragraph', text: 'Es una sucesión de registros almacenados consecutivamente. Para acceder a un registro <em>n</em>, es obligatorio pasar por los <em>n-1</em> registros anteriores. Hay una correspondencia entre el orden físico y el lógico.'},
          { type: 'definitionList', items: [
              {term: 'Ventajas:', definition: 'Acceso muy rápido a bloques de registros contiguos; no se desperdicia espacio.'},
              {term: 'Inconvenientes:', definition: 'Acceso lento a registros aislados; inserciones y eliminaciones muy ineficientes (requieren reescribir el fichero).'}
          ]}
        ]
      },
      {
        id: "t13_s5_2", shortTitle: "5.2. Directa", title: "5.2. ORGANIZACIÓN DIRECTA",
        content: [
          { type: 'paragraph', text: 'En la organización directa (o aleatoria), el orden físico no se corresponde con el orden lógico. Se accede a los registros directamente mediante su posición o dirección. Esto requiere un mecanismo para relacionar la clave de un registro con su ubicación física.'},
          { type: 'list', items: [
              '<strong>Direccionamiento directo:</strong> La clave del registro coincide con su dirección física.',
              '<strong>Direccionamiento asociado:</strong> Se usa una tabla (índice) que asocia cada clave con su dirección.',
              '<strong>Direccionamiento calculado (hashing):</strong> Se utiliza una función matemática (hash) que, a partir de la clave, genera una dirección. Pueden ocurrir <strong>colisiones</strong> (dos claves generan la misma dirección), que se gestionan en una zona de <em>overflow</em> o sinónimos.'
          ]}
        ]
      },
      {
        id: "t13_s5_3", shortTitle: "5.3. Variantes Secuencial", title: "5.3. VARIANTES DE LA ORGANIZACIÓN SECUENCIAL",
        content: [
          { type: 'paragraph', text: 'Para mejorar las prestaciones de la organización secuencial, surgen variantes que combinan ideas del acceso directo:'},
          { type: 'definitionList', items: [
              {term: 'Organización secuencial encadenada:', definition: 'Cada registro contiene un puntero con la dirección del siguiente registro lógico. La secuencia física y lógica no coinciden, lo que facilita las inserciones y borrados.'},
              {term: 'Organización secuencial indexada:', definition: 'El fichero se divide en un <strong>área primaria</strong> con los registros ordenados y un <strong>área de índices</strong> que apunta al inicio de segmentos de registros. Permite un acceso directo rápido al inicio de un bloque y luego un recorrido secuencial.'},
              {term: 'Organización secuencial indexada-encadenada:', definition: 'Combina las dos anteriores, usando punteros e índices simultáneamente para una búsqueda muy rápida.'}
          ]}
        ]
      },
      {
        id: "t13_s6",
        shortTitle: "6. Parámetros de Utilización",
        title: "6. PARÁMETROS DE UTILIZACIÓN DE UN FICHERO",
        content: [
          { type: 'paragraph', text: 'Para determinar qué tipo de organización es más adecuada para un fichero, se utilizan una serie de <strong>parámetros de referencia</strong> que analizan su uso:'},
          { type: 'definitionList', items: [
              { term: 'a) Capacidad:', definition: 'El espacio que ocupa el fichero. Se calcula multiplicando el número de registros por su longitud media.' },
              { term: 'b) Actividad:', definition: 'La cantidad de consultas y modificaciones. Se mide con la <strong>tasa de consulta</strong> (porcentaje de registros consultados) y la <strong>frecuencia de consulta</strong> (número de accesos en un tiempo fijo).' },
              { term: 'c) Volatilidad:', definition: 'La cantidad de inserciones y borrados. Se mide con la <strong>tasa de renovación</strong> (porcentaje de registros renovados) y la <strong>frecuencia de renovación</strong> (número de accesos para renovar en un tiempo fijo).' },
              { term: 'd) Crecimiento:', definition: 'La variación de la capacidad del fichero a lo largo del tiempo.' }
          ]}
        ]
      },
      {
        id: "t13_s7",
        shortTitle: "7. Aplicación",
        title: "7. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La comprensión de los ficheros, sus tipos y organizaciones es esencial en la gestión eficiente de la información y en el desarrollo de aplicaciones que manejen grandes volúmenes de datos.' },
          { type: 'subheading', text: 'En el Contexto Escolar:'},
          { type: 'list', items: [
              '<strong>Formación Profesional (DAM/DAW):</strong> En el módulo de Bases de Datos, se abordan los distintos tipos de ficheros y sus organizaciones (secuenciales, directos, indexados), estudiando sus ventajas y limitaciones.'
          ]},
          { type: 'subheading', text: 'En el Contexto Laboral:'},
          { type: 'list', items: [
              '<strong>Docencia e investigación:</strong> Aplicación de estos conocimientos para elaborar material didáctico y prácticas que enseñen a manipular ficheros de diferentes tipos.',
              '<strong>Gestión de Big Data:</strong> La organización eficiente de los ficheros es fundamental para la gestión de grandes conjuntos de datos, facilitando el análisis y la extracción de información relevante.'
          ]}
        ]
      },
      {
        id: "t13_s8",
        shortTitle: "8. Conclusión",
        title: "8. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'El estudio de los ficheros, sus tipos y organizaciones es fundamental en la informática. Son la base de la <strong>persistencia de datos</strong>, permitiendo almacenar información de manera estructurada y accesible a largo plazo. Conocer las ventajas y desventajas de las diversas organizaciones (secuenciales, directos e indexados) es crucial para el diseño de sistemas eficientes y efectivos.' }
        ]
      },
      {
        id: "t13_s9",
        shortTitle: "9. Bibliografía",
        title: "9. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Joyanes, L. (2020). <em>Fundamentos de programación. Algoritmos, estructuras de datos y objetos</em>. Editorial McGraw-Hill.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
              { text: 'Silberschatz, A. y Korth, H. (2022). <em>Database system concepts</em>. Editorial McGraw-Hill.' },
              { text: 'Departamento de Arquitectura y Tecnología de Computadores. Universidad de Granada.', url: 'https://icar.ugr.es/informacion/directorio-personal/alberto-prieto-espinosa/web/videoclases' }
          ]}
        ]
      }
    ]
  };