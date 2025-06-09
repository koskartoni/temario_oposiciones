// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 21/22
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme21Data = {
  id: "theme21",
  name: "TEMA 21/22: Sistemas Informáticos",
  title: "TEMA 21/22: SISTEMAS INFORMÁTICOS. ESTRUCTURA FÍSICA Y FUNCIONAL",
  version: "Julio 2024",
  sections: [
    {
      id: "t21_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'El presente tema se ubica en el bloque de "Sistemas Informáticos" y se centra en definir qué es un sistema informático, describiendo su <strong>estructura física y funcional</strong>. Con el avance de las nuevas tecnologías, el término "sistema informático" ha reemplazado a "ordenador", ya que abarca todo el conjunto de elementos que interactúan para procesar información.' },
        { type: 'paragraph', text: 'El estudio de los sistemas informáticos está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Web</strong> – Módulo: <code>Sistemas informáticos</code>' }
        ]}
      ]
    },
    {
      id: "t21_s2",
      shortTitle: "2. Sistemas Informáticos",
      title: "2. SISTEMAS INFORMÁTICOS",
      icon: "system"
    },
    {
      id: "t21_s2_1",
      shortTitle: "2.1. Definición",
      title: "2.1. DEFINICIÓN DE SISTEMA INFORMÁTICO",
      content: [
        { type: 'paragraph', text: 'Un sistema informático puede definirse como un conjunto de partes interrelacionadas (hardware, software, personal) cuyo objetivo es dar soporte al procesado, almacenamiento, entrada y salida de datos (Raya, 2011).' }
      ]
    },
    {
      id: "t21_s2_2",
      shortTitle: "2.2. Evolución Histórica",
      title: "2.2. EVOLUCIÓN HISTÓRICA DE LOS SISTEMAS INFORMÁTICOS",
      content: [
        { type: 'subheading', text: 'A) EVOLUCIÓN DESDE EL PUNTO DE VISTA FÍSICO (Generaciones)'},
        { type: 'paragraph', text: 'Se basa en la tecnología de los componentes electrónicos principales:' },
        { type: 'list', items: [ '<strong>1ª Gen:</strong> Válvulas de vacío.', '<strong>2ª Gen:</strong> Transistores.', '<strong>3ª Gen:</strong> Circuitos Integrados.', '<strong>4ª Gen:</strong> Microprocesadores.' ]},
        { type: 'subheading', text: 'B) EVOLUCIÓN DESDE EL PUNTO DE VISTA FUNCIONAL'},
        { type: 'paragraph', text: 'Funcionalmente, los sistemas siguen basándose en la <strong>Arquitectura Von Neumann</strong>. El gran cambio ha sido pasar de sistemas centralizados y aislados a <strong>sistemas distribuidos</strong> y conectados en red.' }
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
                {id:'si', position:{x:150, y:125}, data:{label: 'Sistema Informático'}, className: 'node-bus-control'},
                {id:'personas', position:{x:150, y:0}, data:{label: 'Componente Humano\n(Personal)'}},
                {id:'software', position:{x:0, y:250}, data:{label: 'Componente Lógico\n(Software)'}},
                {id:'hardware', position:{x:300, y:250}, data:{label: 'Componente Físico\n(Hardware)'}}
            ],
            initialEdges: [
                {id: 'e1', source: 'personas', target: 'si', animated:true},
                {id: 'e2', source: 'si', target: 'software', animated:true},
                {id: 'e3', source: 'si', target: 'hardware', animated:true}
            ]
        }
      ]
    },
    {
        id: "t21_s3", shortTitle: "3. Estructura Física", title: "3. ESTRUCTURA FÍSICA DE UN SISTEMA INFORMÁTICO",
        icon: "physicalStructure",
        content: [
            { type: 'keyConcept', title: '¿Qué es la Estructura Física?', text: 'Se refiere a los componentes tangibles del sistema y su ensamblaje, es decir, al <strong>Hardware</strong>. Analiza cómo son los componentes, para qué sirven y cómo se interconectan.'},
            { type: 'definitionList', items: [
                {term: '3.1. Chasis:', definition: 'Caja o torre que alberga y protege los componentes.'},
                {term: '3.2. Placa Base y Dispositivos Internos:', definition: 'Elemento central que conecta físicamente la CPU, RAM, etc.'},
                {term: '3.3. Unidades de Almacenamiento Secundario:', definition: 'Dispositivos de almacenamiento masivo y permanente (SSD, HDD).'},
                {term: '3.4. Tarjetas de Expansión:', definition: 'Componentes para añadir o mejorar funcionalidades (GPU, etc.).'},
                {term: '3.5. Periféricos:', definition: 'Dispositivos que comunican la computadora con el exterior (monitor, teclado, etc.).'}
            ]}
        ]
    },
    {
        id: "t21_s4", shortTitle: "4. Estructura Funcional", title: "4. ESTRUCTURA FUNCIONAL DE UN SISTEMA INFORMÁTICO",
        icon: "functionalStructure",
        content: [
            { type: 'keyConcept', title: '¿Qué es la Estructura Funcional?', text: 'Se refiere a cómo funcionan e interactúan lógicamente los diversos componentes. La base de esta estructura sigue siendo el modelo de <strong>Von Neumann</strong>.'},
            { type: 'definitionList', items: [
                {term: '4.1. Unidad Central de Proceso (CPU):', definition: 'El "cerebro" del sistema, ejecuta las instrucciones.'},
                {term: '4.2. Memoria:', definition: 'Almacena datos e instrucciones en una jerarquía (registros, caché, RAM, etc.).'},
                {term: '4.3. Unidad de Entrada/Salida:', definition: 'Realiza la conexión con los periféricos.'},
                {term: '4.4. Buses:', definition: 'Canales que interconectan todos los componentes (bus de datos, direcciones y control).'}
            ]},
            { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
              { question: 'El teclado, el ratón y el monitor forman parte de la estructura...', options: ['Funcional', 'Física'], correctAnswerIndex: 1 },
              { question: 'El concepto de Unidad Aritmético-Lógica (ALU) pertenece a la estructura...', options: ['Funcional', 'Física'], correctAnswerIndex: 0 }
            ]}
        ]
    },
    { id: 't21_s5', title: "5. APLICACIÓN DE LOS CONTENIDOS", shortTitle: "5. Aplicación", icon: "application", content: [ { type: 'paragraph', text: 'Comprender la estructura física y funcional es esencial. En FP se estudia en detalle en módulos como "Sistemas Informáticos". En lo laboral, es clave para la configuración de sistemas, el diagnóstico de problemas y la planificación de actualizaciones.' } ] },
    { id: 't21_s6', title: "6. CONCLUSIÓN", shortTitle: "6. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'En este tema se ha presentado una visión global de los sistemas informáticos, describiendo su estructura desde dos perspectivas complementarias: la física (los componentes) y la funcional (cómo operan). Entender ambas es fundamental para cualquier profesional de la informática.' } ] },
    { id: 't21_s7', title: "7. BIBLIOGRAFÍA", shortTitle: "7. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Moreno, J.C. (2010). <em>Fundamentos del hardware</em>. Ra-Ma.' }, { text: 'Raya J.L. (2011). <em>Sistemas informáticos</em>. Ra-Ma.' }, { text: 'Stallings, W. (2022). <em>Computer organization and architecture</em>. Pearson.' } ] } ] }
  ],
  glossary: [
      { term: 'Sistema Informático', definition: 'Conjunto de partes interrelacionadas (hardware, software y personal) cuyo objetivo es dar soporte al tratamiento de la información.' },
      { term: 'Estructura Física', definition: 'Describe los componentes hardware tangibles de un sistema y cómo se ensamblan.' },
      { term: 'Estructura Funcional', definition: 'Describe las funciones de los componentes y cómo interactúan entre sí, basándose en la arquitectura de Von Neumann.' },
      { term: 'Hardware', definition: 'Conjunto de elementos físicos o materiales que constituyen una computadora o un sistema informático.' },
      { term: 'Software', definition: 'Conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas.' }
  ]
};