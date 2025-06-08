export const theme21Data = {
    id: "theme21",
    name: "TEMA 21/22: Sistemas Informáticos",
    title: "TEMA 21 INF / TEMA 22 SAI: SISTEMAS INFORMÁTICOS. ESTRUCTURA FÍSICA Y FUNCIONAL",
    version: "Versión: Julio 2024 (Actualizado)",
    sections: [
      {
        id: "t21_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema se ubica en el bloque de "Sistemas Informáticos" y se centra en definir qué es un sistema informático, describiendo su <strong>estructura física y funcional</strong>.' },
          { type: 'paragraph', text: 'Hoy en día, el término <strong>sistema informático</strong> ha reemplazado en gran medida a "ordenador" o "computador", ya que abarca no solo la máquina, sino todo el conjunto de elementos que interactúan para procesar información. Un sistema informático se puede contemplar desde dos aspectos: su <strong>estructura física</strong> (los componentes tangibles) y su <strong>estructura funcional</strong> (cómo operan e interactúan esos componentes).' }
        ]
      },
      {
        id: "t21_s2",
        shortTitle: "2. Sistemas Informáticos",
        title: "2. SISTEMAS INFORMÁTICOS",
        content: [
          { type: 'subheading', text: '2.1. DEFINICIÓN DE SISTEMA INFORMÁTICO'},
          { type: 'paragraph', text: 'Un sistema informático puede definirse como un conjunto de partes interrelacionadas (hardware, software y personal) cuyo objetivo es dar soporte al procesado, almacenamiento, entrada y salida de datos.' },
          { type: 'subheading', text: '2.2. EVOLUCIÓN HISTÓRICA DE LOS SISTEMAS INFORMÁTICOS'},
          { type: 'paragraph', text: 'La evolución de los sistemas informáticos puede analizarse desde dos perspectivas:' },
          { type: 'subheading', text: 'A) EVOLUCIÓN DESDE EL PUNTO DE VISTA FÍSICO (Generaciones)'},
          { type: 'list', items: [
              '<strong>1ª Generación (1940-1956):</strong> Válvulas de vacío.',
              '<strong>2ª Generación (1956-1963):</strong> Transistores.',
              '<strong>3ª Generación (1964-1971):</strong> Circuitos Integrados (CI).',
              '<strong>4ª Generación (1971-presente):</strong> Microprocesadores (LSI, VLSI, ULSI).',
              '<strong>5ª Generación (Futuro):</strong> Enfocada en la inteligencia artificial y la computación cuántica.'
          ]},
          { type: 'subheading', text: 'B) EVOLUCIÓN DESDE EL PUNTO DE VISTA FUNCIONAL'},
          { type: 'paragraph', text: 'Funcionalmente, los ordenadores no han evolucionado drásticamente, ya que todavía se basan en el esquema de la <strong>Arquitectura Von Neumann</strong>. Sin embargo, los grandes cambios han venido en la forma en que los componentes se comunican y operan, pasando de sistemas centralizados y aislados a <strong>sistemas distribuidos</strong> y conectados en red.' }
        ]
      },
      {
        id: "t21_s2_3",
        shortTitle: "2.3. Estructura Básica",
        title: "2.3. ESTRUCTURA BÁSICA DE UN SISTEMA INFORMÁTICO",
        content: [
          { type: 'paragraph', text: 'Un sistema informático está formado por tres componentes básicos:'},
          { type: 'flowDiagram', title: 'Componentes de un Sistema Informático',
              initialNodes: [
                  {id:'si', position:{x:150, y:125}, data:{label: 'Sistema Informático'}, style:{backgroundColor: '#d18a38'}},
                  {id:'personas', position:{x:150, y:0}, data:{label: 'Componente Humano\n(Personas)'}},
                  {id:'software', position:{x:0, y:250}, data:{label: 'Componente Lógico\n(Software)'}},
                  {id:'hardware', position:{x:300, y:250}, data:{label: 'Componente Físico\n(Hardware)'}}
              ],
              initialEdges: [
                  {id: 'e1', source: 'personas', target: 'si', animated:true},
                  {id: 'e2', source: 'si', target: 'software', animated:true},
                  {id: 'e3', source: 'si', target: 'hardware', animated:true}
              ]
          },
          { type: 'list', items: [
              '<strong>Componente físico o Hardware:</strong> Conjunto de elementos tangibles (CPU, memoria, periféricos).',
              '<strong>Componente lógico o Software:</strong> Conjunto de recursos lógicos (programas, datos) necesarios para realizar los trabajos.',
              '<strong>Componente humano (Personal):</strong> Conjunto de usuarios finales u operadores del sistema informático.'
          ]}
        ]
      },
      {
          id: "t21_s3", shortTitle: "3. Estructura Física", title: "3. ESTRUCTURA FÍSICA DE UN SISTEMA INFORMÁTICO",
          content: [
              { type: 'paragraph', text: 'La estructura física está asociada al <strong>hardware comercial</strong>. Veremos los componentes que forman un PC, integrados a partir de la placa base y recogidos dentro de un chasis.'},
              { type: 'definitionList', items: [
                  {term: '3.1. Chasis:', definition: 'Caja o torre que alberga y protege los componentes principales. Su elección depende de la estructura, ventilación y posibilidades de expansión.'},
                  {term: '3.2. Placa Base y Dispositivos Internos:', definition: 'Elemento central que conecta físicamente todos los componentes (CPU, RAM, etc.).'},
                  {term: '3.3. Unidades de Almacenamiento Secundario:', definition: 'Dispositivos de almacenamiento masivo y permanente (SSD, HDD).'},
                  {term: '3.4. Tarjetas de Expansión:', definition: 'Componentes que se instalan en la placa base para añadir o mejorar funcionalidades (GPU, tarjetas de red, etc.).'},
                  {term: '3.5. Periféricos:', definition: 'Dispositivos que comunican la computadora con el exterior (monitor, teclado, ratón).'}
              ]}
          ]
      },
      {
          id: "t21_s4", shortTitle: "4. Estructura Funcional", title: "4. ESTRUCTURA FUNCIONAL DE UN SISTEMA INFORMÁTICO",
          content: [
              { type: 'paragraph', text: 'La estructura funcional o lógica se encarga de estudiar cómo funcionan e interactúan los diversos componentes. Se basa en el modelo de <strong>Von Neumann</strong>, que describe un ordenador con 4 secciones principales:'},
              { type: 'flowDiagram', title: 'Arquitectura de Von Neumann',
                  initialNodes: [
                    { id: 'ucp', position: { x: 250, y: 25 }, data: { label: 'UCP' }, style: { width: 200, textAlign: 'center' } },
                    { id: 'uc', position: { x: 250, y: 125 }, data: { label: 'Unidad de Control' } },
                    { id: 'memoria', position: { x: 550, y: 125 }, data: { label: 'Memoria' } },
                    { id: 'es', position: { x: 0, y: 125 }, data: { label: 'Unidad de E/S' } },
                    { id: 'buses', position: { x: 250, y: 250 }, data: { label: 'Buses del Sistema' }, style: {backgroundColor: '#38d18a'} }
                  ],
                  initialEdges: [
                    { id: 'e1', source: 'ucp', target: 'uc' },
                    { id: 'e2', source: 'ucp', target: 'memoria', animated: true },
                    { id: 'e3', source: 'ucp', target: 'es', animated: true },
                    { id: 'e4', source: 'buses', target: 'ucp', animated: true},
                    { id: 'e5', source: 'buses', target: 'memoria', animated: true},
                    { id: 'e6', source: 'buses', target: 'es', animated: true}
                  ]
              },
              { type: 'definitionList', items: [
                  {term: '4.1. Unidad Central de Proceso (UCP/CPU):', definition: 'El "cerebro" del sistema, formado por la Unidad de Control y la Unidad Aritmético-Lógica.'},
                  {term: '4.2. Memoria:', definition: 'Almacena datos e instrucciones. Se organiza en una jerarquía (registros, caché, RAM, almacenamiento secundario).'},
                  {term: '4.3. Unidad de Entrada/Salida:', definition: 'Realiza la conexión con los periféricos.'},
                  {term: '4.4. Buses:', definition: 'Canales que interconectan todos los componentes (bus de datos, de direcciones y de control).'}
              ]}
          ]
      },
      {
        id: "t21_s5",
        shortTitle: "5. Aplicación",
        title: "5. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'La comprensión de la estructura física y funcional de los sistemas informáticos es esencial en el diseño, mantenimiento y optimización de sistemas completos.'},
          { type: 'subheading', text: 'Contexto Escolar:'},
          { type: 'list', items: ['<strong>Fundamentos de computación:</strong> Introducción a los componentes principales de un sistema informático, tanto a nivel físico como funcional.', '<strong>Formación Profesional:</strong> Se describen en detalle las características y funciones de los diferentes componentes y cómo interactúan dentro de una arquitectura.']},
          { type: 'subheading', text: 'Contexto Laboral:'},
          { type: 'list', items: ['<strong>Configuración de sistemas:</strong> Diseño y configuración de sistemas completos para optimizar el rendimiento, asegurando la compatibilidad.', '<strong>Diagnóstico y resolución de problemas:</strong> Identificación de fallos en componentes específicos y en su interconexión.', '<strong>Actualizaciones y mejoras:</strong> Evaluación de la necesidad de actualizar hardware y software para mejorar el rendimiento.']}
        ]
      },
      {
        id: "t21_s6",
        shortTitle: "6. Conclusión",
        title: "6. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'En este tema se ha presentado una visión global de los sistemas informáticos, describiendo su estructura básica y su evolución. Se han descrito los sistemas desde dos perspectivas: su <strong>estructura física</strong> (cómo es) y su <strong>estructura funcional</strong> (cómo funciona). Con el estudio del presente tema se ha pretendido dar una visión general de la estructura de un sistema informático genérico.'}
        ]
      },
      {
        id: "t21_s7",
        shortTitle: "7. Bibliografía",
        title: "7. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Moreno, J.C. (2010). <em>Fundamentos del hardware</em>. Editorial Ra-Ma.' },
              { text: 'Raya J.L. (2011). <em>Sistemas informáticos</em>. Editorial Ra-Ma.' },
              { text: 'Stallings, W. (2022). <em>Computer organization and architecture. Designing for performance</em>. Editorial Pearson.' },
              { text: 'Tanenbaum, A. (2013). <em>Structured Computer Organization</em>. Editorial Pearson.' },
              { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' }
          ]}
        ]
      }
    ]
  };