// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 17
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme17Data = {
  id: "theme17",
  name: "TEMA 17: Gestión de Memoria",
  title: "TEMA 17. SISTEMAS OPERATIVOS: GESTIÓN DE MEMORIA",
  version: "Octubre 2024",
  sections: [
    {
      id: "t17_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Continuando en el bloque de "Sistemas Operativos", este tema se adentra en uno de los aspectos más críticos del núcleo de un SO: la <strong>gestión de memoria</strong>. La capacidad de administrar eficientemente la memoria disponible es fundamental para asegurar el rendimiento y la estabilidad del sistema.' },
        { type: 'paragraph', text: 'El estudio de la gestión de memoria está presente en el currículo de la familia profesional de Informática y Comunicaciones. Concretamente, se puede ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulo: <code>Sistemas informáticos</code>' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulos: <code>Sistemas operativos monopuesto</code> y <code>Sistemas operativos en red</code>' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Administración de sistemas operativos</code>' }
        ]}
      ]
    },
    {
      id: "t17_s2",
      shortTitle: "2. Gestión de Memoria",
      title: "2. GESTIÓN DE MEMORIA",
      icon: "memory",
      content: [
        { type: 'paragraph', text: 'El <strong>gestor de memoria</strong> del SO se encarga de: asignar y liberar memoria a los procesos, controlar las zonas libres y ocupadas, y gestionar el intercambio con la memoria secundaria.' },
      ]
    },
    { id: "t17_s2_1", shortTitle: "2.1. Monoprogramación", title: "2.1. MONOPROGRAMACIÓN", content: [ { type: 'paragraph', text: 'Sistema obsoleto donde la memoria principal se divide en dos: una para el SO y otra para un único programa en ejecución. Desaprovecha enormemente los recursos.' } ] },
    { id: "t17_s2_2", shortTitle: "2.2. Multiprogramación Real", title: "2.2. MULTIPROGRAMACIÓN EN MEMORIA REAL",
      content: [
        { type: 'paragraph', text: 'Permite tener varios procesos en memoria simultáneamente. Requiere que el proceso completo esté en la memoria principal para ejecutarse. Las técnicas se dividen en asignación contigua y no contigua.'},
        { type: 'subheading', text: '2.2.1. Particiones Fijas (Estáticas)'},
        { type: 'paragraph', text: 'La memoria se divide en particiones de tamaño fijo. Su principal problema es la <strong>fragmentación interna</strong> (espacio desperdiciado dentro de una partición si el proceso es más pequeño).'},
        { type: 'subheading', text: '2.2.2. Particiones Variables (Dinámicas)'},
        { type: 'paragraph', text: 'Las particiones se crean con el tamaño exacto del proceso. Evita la fragmentación interna, pero produce <strong>fragmentación externa</strong> (huecos pequeños y dispersos de memoria libre). Se puede solucionar con <strong>compactación</strong>.'},
        { type: 'subheading', text: '2.2.3. Paginación'},
        { type: 'paragraph', text: 'Técnica de asignación no contigua. La memoria física se divide en <strong>marcos de página</strong> de tamaño fijo, y el proceso en <strong>páginas</strong> del mismo tamaño. Una <strong>tabla de páginas</strong> mapea las páginas lógicas a los marcos físicos. Soluciona la fragmentación externa, pero puede sufrir de fragmentación interna en la última página.'},
        { type: 'subheading', text: '2.2.4. Segmentación'},
        { type: 'paragraph', text: 'Divide el proceso en segmentos de tamaño variable según un criterio lógico (código, datos, pila). Cada segmento se carga en una partición dinámica. Ofrece protección y compartición granular, pero sufre de fragmentación externa.'}
      ]
    },
    {
      id: "t17_s2_3", shortTitle: "2.3. Multiprogramación Virtual", title: "2.3. MULTIPROGRAMACIÓN CON MEMORIA VIRTUAL",
      content: [
        { type: 'keyConcept', title: 'Memoria Virtual', text: 'Es una técnica que permite ejecutar procesos que no están cargados completamente en la memoria principal. El SO crea la ilusión de que se dispone de una memoria mucho más grande que la física, utilizando el almacenamiento secundario (disco) como extensión. Cuando se accede a una parte del proceso que no está en RAM, se produce un <strong>fallo de página</strong> y el SO la carga desde el disco.'},
        { type: 'list', items: [
            '<strong>Memoria Virtual Paginada:</strong> Es la técnica más común. No es necesario cargar todas las páginas de un proceso para que se ejecute.',
            '<strong>Memoria Virtual Segmentada:</strong> Análogo a la anterior, pero con segmentos.',
            '<strong>Memoria Virtual Segmentada y Paginada:</strong> Combina ambas, como en arquitecturas x86, donde la segmentación proporciona una vista lógica y la paginación gestiona la memoria física.'
        ]}
      ]
    },
    {
        id: "t17_s3", shortTitle: "3. Estrategias de Gestión", title: "3. ESTRATEGÍAS DE GESTIÓN DE MEMORIA",
        icon: 'strategies',
        content: [ { type: 'paragraph', text: 'El gestor de memoria utiliza diversas políticas para su funcionamiento:'} ]
    },
    {
        id: "t17_s3_1", shortTitle: "3.1. Políticas de Sustitución", title: "3.1. POLÍTICAS DE SUSTITUCIÓN",
        content: [
            { type: 'paragraph', text: 'Deciden qué página sacar de la memoria cuando se necesita espacio para una nueva. Algoritmos comunes:' },
            { type: 'definitionList', items: [
                { term: 'FIFO (First-In, First-Out):', definition: 'Sustituye la página más antigua. Simple pero puede ser ineficiente (Anomalía de Belady).'},
                { term: 'LRU (Least Recently Used):', definition: 'Sustituye la página que se usó hace más tiempo. Buen rendimiento, pero difícil de implementar de forma pura.'},
                { term: 'Algoritmos de Reloj (Clock):', definition: 'Son aproximaciones eficientes a LRU, utilizando un bit de referencia.'}
            ]}
        ]
    },
    {
        id: "t17_s3_2", shortTitle: "3.2. Políticas de Carga", title: "3.2. POLÍTICAS DE CARGA",
        content: [
            { type: 'paragraph', text: 'Determinan cuándo cargar las páginas en memoria:' },
            { type: 'list', items: [
                '<strong>Paginación por Demanda:</strong> Se carga una página solo cuando se produce un fallo de página. Es el método más común.',
                '<strong>Paginación Anticipada (Prefetching):</strong> El SO intenta predecir qué páginas necesitará el proceso y las carga por adelantado.'
            ]}
        ]
    },
    {
        id: "t17_s3_3", shortTitle: "3.3. Políticas de Ubicación", title: "3.3. POLÍTICAS DE UBICACIÓN",
        content: [
            { type: 'paragraph', text: 'Determinan en qué hueco de memoria libre colocar un proceso (en sistemas con particiones variables). Algoritmos:' },
            { type: 'list', items: [
                '<strong>Primer Ajuste (First-Fit):</strong> Asigna el primer hueco suficientemente grande.',
                '<strong>Mejor Ajuste (Best-Fit):</strong> Asigna el hueco más pequeño que sea suficientemente grande.',
                '<strong>Peor Ajuste (Worst-Fit):</strong> Asigna el hueco más grande.',
            ]},
            { type: 'practicalExample', title: 'Analogía del Aparcamiento', text: 'Imagina que buscas aparcamiento. <strong>Primer ajuste</strong> es coger el primer sitio libre donde quepa tu coche. <strong>Mejor ajuste</strong> es buscar en todo el parking el sitio más pequeño donde quepas justo. <strong>Peor ajuste</strong> es aparcar en el sitio más grande para un camión, dejando un hueco grande pero quizás inútil.'}
        ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: "t17_s4", shortTitle: "4. Aplicación", title: "4. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'La gestión de memoria es fundamental en la FP, en módulos de administración de SO y sistemas informáticos. En el ámbito laboral, es clave para la administración de servidores, la seguridad (aislamiento de memoria) y el desarrollo de software optimizado.' } ] },
    { id: "t17_s5", shortTitle: "5. Conclusión", title: "5. CONCLUSIÓN", icon: 'conclusion', content: [ { type: 'paragraph', text: 'La gestión de la memoria es un recurso clave que el SO debe asignar y compartir. La correcta gestión es vital para el rendimiento y la estabilidad, como demostraron las mitigaciones de seguridad para Meltdown y Spectre (ej. KPTI - Kernel Page Table Isolation), que tuvieron un impacto directo en el rendimiento de la gestión de memoria.' } ] },
    { id: "t17_s6", shortTitle: "6. Bibliografía", title: "6. BIBLIOGRAFÍA", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2023). <em>Modern Operating Systems</em>. Pearson.' }, { text: 'Stallings, W. (2017). <em>Operating Systems: Internals and Design Principles</em>. Pearson.' } ] } ] }
  ],
  glossary: [
    { term: 'Gestión de Memoria', definition: 'Conjunto de técnicas que usa el SO para administrar la memoria principal, asignándola a los procesos y liberándola.' },
    { term: 'Fragmentación Interna', definition: 'Espacio desperdiciado dentro de una partición de memoria asignada porque el proceso es más pequeño que la partición.' },
    { term: 'Fragmentación Externa', definition: 'La memoria libre se divide en pequeños huecos no contiguos, lo que dificulta la asignación de nuevos procesos grandes.' },
    { term: 'Paginación', definition: 'Técnica que divide la memoria física en marcos y la memoria lógica de un proceso en páginas, ambas de tamaño fijo.' },
    { term: 'Segmentación', definition: 'Técnica que divide la memoria lógica de un proceso en segmentos de tamaño variable, según un criterio lógico (código, datos, pila).' },
    { term: 'Memoria Virtual', definition: 'Técnica que permite ejecutar procesos que no caben completamente en la memoria física, usando el disco como extensión.' },
    { term: 'Fallo de Página (Page Fault)', definition: 'Interrupción que ocurre cuando un proceso intenta acceder a una página que no está cargada en la memoria principal.' },
    { term: 'Política de Sustitución', definition: 'Algoritmo que decide qué página expulsar de la memoria cuando se necesita espacio para una nueva (ej. LRU, FIFO).' }
  ]
};