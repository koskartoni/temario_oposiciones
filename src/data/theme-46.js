export const theme46Data = {
    id: "theme46",
    name: "TEMA 46/41: Aplicaciones Informáticas",
    title: "TEMA 46 INF / TEMA 41 SAI: APLICACIONES INFORMÁTICAS DE PROPÓSITO GENERAL Y PARA LA GESTIÓN EMPRESARIAL. TIPOS. FUNCIONES. CARACTERÍSTICAS.",
    version: "Versión: Octubre 2024 (Actualizado)",
    sections: [
      {
        id: "t46_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema se ubica en el bloque de "Sistemas de Información" y se centra en el software que los usuarios utilizan directamente: las <strong>aplicaciones informáticas</strong>. Distinguiremos entre las de <strong>propósito general</strong> (ofimática, diseño, etc.) y las de <strong>gestión empresarial</strong> (ERP, CRM, etc.).' },
          { type: 'paragraph', text: 'Cuando encendemos un ordenador, el hardware entrega el control al sistema operativo, que prepara el sistema. Una vez listo, el usuario puede comenzar a trabajar con las aplicaciones informáticas, que son el fin último de todo sistema: resolver problemas y realizar tareas.' }
        ]
      },
      {
        id: "t46_s2",
        shortTitle: "2. Concepto de Aplicación",
        title: "2. CONCEPTO DE APLICACIÓN",
        content: [
          { type: 'paragraph', text: 'En informática, una <strong>aplicación</strong> es un programa informático diseñado como herramienta para permitir a un usuario realizar uno o diversos tipos de tareas. Las aplicaciones pertenecen al <strong>software de aplicación</strong> y están en contacto directo con el usuario final, como se ve en el siguiente esquema:' },
          { type: 'flowDiagram', title: 'Capas del Software',
            initialNodes: [
              { id: 'user', position: { x: 250, y: 0 }, data: { label: 'Usuario Final' }, type: 'input' },
              { id: 'prog', position: { x: 250, y: 100 }, data: { label: 'Programas de Aplicación' }, style: { backgroundColor: '#ffaaaa' } },
              { id: 'util', position: { x: 250, y: 180 }, data: { label: 'Utilidades' }, style: { backgroundColor: '#ffffaa' } },
              { id: 'so', position: { x: 250, y: 260 }, data: { label: 'Sistema Operativo' }, style: { backgroundColor: '#aaffaa' } },
              { id: 'hw', position: { x: 250, y: 340 }, data: { label: 'Hardware' }, type: 'output', style: { backgroundColor: '#aaaaff' } },
              { id: 'programmer', position: { x: 500, y: 140 }, data: { label: 'Programador' } },
              { id: 'designer', position: { x: 500, y: 260 }, data: { label: 'Diseñador del SO' } }
            ],
            initialEdges: [
              { id: 'e1', source: 'user', target: 'prog', animated: true }, { id: 'e2', source: 'prog', target: 'so' },
              { id: 'e3', source: 'util', target: 'so' }, { id: 'e4', source: 'so', target: 'hw', animated: true },
              { id: 'e5', source: 'programmer', target: 'util' }, { id: 'e6', source: 'designer', target: 'so' }
            ]
          },
          { type: 'paragraph', text: 'Una solución informática puede ser una aplicación desarrollada <strong>a medida</strong>, con gran potencia para un problema específico, o un <strong>paquete integrado</strong>, que ofrece un abanico más amplio de funcionalidades.' }
        ]
      },
      {
        id: "t46_s3",
        shortTitle: "3. Apps de Propósito General",
        title: "3. APLICACIONES INFORMÁTICAS DE PROPÓSITO GENERAL",
        content: [
          { type: 'paragraph', text: 'Son creadas para resolver problemas generales de trabajo. Se utilizan para diversos fines y evitan los altos costes de los programas específicos. A continuación, se describen los principales tipos:' }
        ]
      },
      {
        id: "t46_s3_1", shortTitle: "3.1. Procesadores de Texto", title: "3.1. PROCESADORES DE TEXTO",
        content: [
          { type: 'paragraph', text: 'Aplicación para la creación, edición y procesamiento de documentos con formato, a diferencia de los editores de texto plano. Incluyen funciones de formato, corrección ortográfica, inserción de gráficos, etc.'},
          { type: 'paragraph', text: '<strong>Ejemplos:</strong> <code>Microsoft Word</code>, <code>Google Docs</code>, <code>LibreOffice Writer</code>.' }
        ]
      },
      {
        id: "t46_s3_2", shortTitle: "3.2. Hojas de Cálculo", title: "3.2. HOJAS DE CÁLCULO",
        content: [
          { type: 'paragraph', text: 'Permiten manipular datos numéricos y alfanuméricos en una matriz de celdas. Se utilizan para realizar cálculos complejos con fórmulas y funciones, y para generar gráficos.' },
          { type: 'paragraph', text: '<strong>Ejemplos:</strong> <code>Microsoft Excel</code>, <code>Google Sheets</code>, <code>LibreOffice Calc</code>.' }
        ]
      },
      {
        id: "t46_s3_3", shortTitle: "3.3. SGBD", title: "3.3. SISTEMAS GESTORES DE BASES DE DATOS",
        content: [
          { type: 'paragraph', text: 'Colección de programas que permite a los usuarios crear, mantener y manipular la información de una base de datos. Este concepto se ha detallado en temas anteriores.' },
          { type: 'paragraph', text: '<strong>Ejemplos:</strong> <code>Microsoft Access</code>, <code>MySQL</code>, <code>PostgreSQL</code>, <code>MongoDB</code>, <code>LibreOffice Base</code>.' }
        ]
      },
      {
          id: "t46_s3_4", shortTitle: "3.4. Comunicaciones", title: "3.4. COMUNICACIONES",
          content: [
            { type: 'paragraph', text: 'Programas que gestionan el envío y recepción de mensajes e información. Incluyen clientes de correo electrónico, navegadores web, mensajería instantánea, etc.'},
            { type: 'paragraph', text: '<strong>Ejemplos:</strong> <code>Microsoft Outlook</code>, <code>Google Chrome</code>, <code>Mozilla Firefox</code>, <code>WhatsApp</code>, <code>Slack</code>.' }
          ]
      },
      {
          id: "t46_s3_5", shortTitle: "3.5. Presentaciones", title: "3.5. PRESENTACIONES",
          content: [
            { type: 'paragraph', text: 'Diseñadas para crear ayudas visuales (diapositivas) para charlas, conferencias o exposiciones, combinando texto, imágenes, gráficos y animaciones.' },
            { type: 'paragraph', text: '<strong>Ejemplos:</strong> <code>Microsoft PowerPoint</code>, <code>Google Slides</code>, <code>Prezi</code>, <code>LibreOffice Impress</code>.' }
          ]
      },
      {
          id: "t46_s3_6", shortTitle: "3.6. Diseño Gráfico", title: "3.6. DISEÑO GRÁFICO",
          content: [
            { type: 'paragraph', text: 'Permiten crear, retocar o modificar imágenes y dibujos. Incluyen desde editores de imágenes rasterizadas hasta software de ilustración vectorial.'},
            { type: 'paragraph', text: '<strong>Ejemplos:</strong> <code>Adobe Photoshop</code>, <code>GIMP</code> (raster), <code>Adobe Illustrator</code>, <code>Inkscape</code> (vectorial), <code>Figma</code>, <code>Canva</code> (diseño de interfaces y multipropósito).' }
          ]
      },
      {
          id: "t46_s3_7", shortTitle: "3.7. Paquete Integrado", title: "3.7. PAQUETE INTEGRADO (SUITE OFIMÁTICA)",
          content: [
            { type: 'paragraph', text: 'Herramienta compuesta por varias aplicaciones de uso común concebidas para interactuar entre sí. Cada aplicación está especializada, pero puede intercambiar datos con las demás.'},
            { type: 'paragraph', text: '<strong>Ejemplos:</strong> <code>Microsoft 365 (Office)</code>, <code>Google Workspace</code>, <code>LibreOffice</code>.'}
          ]
      },
      {
        id: "t46_s4",
        shortTitle: "4. Apps de Gestión Empresarial",
        title: "4. APLICACIONES INFORMÁTICAS PARA LA GESTIÓN EMPRESARIAL",
        content: [
          { type: 'paragraph', text: 'Los <strong>sistemas integrados de gestión (ERP - Enterprise Resource Planning)</strong> surgieron con el objetivo de facilitar un sistema que cubriera todas las áreas funcionales de una empresa (finanzas, producción, compras, ventas, recursos humanos, etc.).' },
          { type: 'paragraph', text: 'A continuación, se describen algunos de los tipos más importantes:'}
        ]
      },
      {
        id: "t46_s4_1", shortTitle: "4.1. Financiera-Contable", title: "4.1. GESTIÓN FINANCIERA-CONTABLE",
        content: [
          { type: 'paragraph', text: 'Automatizan operaciones como la introducción de asientos, impresión de extractos, libros diarios, balances, gestión del IVA, etc., asegurando la integridad y seguridad de la información.' }
        ]
      },
      {
        id: "t46_s4_2", shortTitle: "4.2. Personal (RRHH)", title: "4.2. GESTIÓN DE PERSONAL",
        content: [
          { type: 'paragraph', text: 'Gestionan los recursos humanos de la empresa, incluyendo la información de la plantilla (filiación, historial laboral, formación) y la generación de nóminas.' }
        ]
      },
      {
        id: "t46_s4_3", shortTitle: "4.3. Comercial (CRM)", title: "4.3. GESTIÓN COMERCIAL",
        content: [
          { type: 'paragraph', text: 'Incluye la gestión de pedidos y facturación y el marketing. Las aplicaciones de <strong>CRM (Customer Relationship Management)</strong> se apoyan en grandes bases de datos para gestionar la relación con los clientes y optimizar las ventas. <strong>Salesforce</strong> es el líder del mercado.' }
        ]
      },
      {
        id: "t46_s4_4", shortTitle: "4.4. Stock y Almacén", title: "4.4. CONTROL DE STOCK Y ALMACÉN",
        content: [
          { type: 'paragraph', text: 'Controla las existencias almacenadas, actualizando el inventario en función de las ventas y ayudando a predecir cuándo pedir aprovisionamiento para minimizar costes y evitar roturas de stock. A menudo se integra con los sistemas de planificación de recursos de fabricación (<strong>MRP</strong>).' }
        ]
      },
      {
        id: "t46_s5",
        shortTitle: "5. Apps en la Nube",
        title: "5. APLICACIONES EN LA NUBE (SAAS)",
        content: [
          { type: 'paragraph', text: 'La nube se refiere al software y servicios que se ejecutan en internet en lugar de en un ordenador local. Este modelo se conoce como <strong>SaaS (Software as a Service)</strong>.' },
          { type: 'paragraph', text: 'Las aplicaciones SaaS se ejecutan en una red de servidores y se accede a ellas a través de un navegador web, lo que permite trabajar desde cualquier dispositivo con conexión a Internet. Fomentan el trabajo colaborativo en tiempo real.'},
          { type: 'list', items: [
              '<strong>Ejemplos:</strong> <code>Microsoft 365</code>, <code>Google Workspace</code>, <code>Salesforce</code>, <code>Dropbox</code>, <code>Figma</code>, <code>Notion</code>.'
          ]}
        ]
      },
      {
        id: "t46_s6",
        shortTitle: "6. Aplicación",
        title: "6. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'Las aplicaciones informáticas abarcan desde el contexto educativo (aplicaciones de propósito general) hasta prácticamente cualquier entorno laboral (tanto de propósito general como para la gestión empresarial).' },
          { type: 'subheading', text: 'Contexto Escolar:'},
          { type: 'paragraph', text: 'En la mayoría de ciclos formativos de la familia de Informática y Comunicaciones se trabajan con aplicaciones informáticas de propósito general y de gestión empresarial en módulos como <code>Sistemas de gestión empresarial</code> o <code>Aplicaciones ofimáticas</code>.'},
          { type: 'subheading', text: 'Contexto Laboral:'},
          { type: 'paragraph', text: 'Existen multitud de contextos laborales donde se utilizan aplicaciones de propósito general y, por supuesto, muchas aplicaciones para la gestión empresarial. En cuanto al futuro, la tendencia es que todas las aplicaciones sean completamente online y basadas en la nube.'}
        ]
      },
      {
        id: "t46_s7",
        shortTitle: "7. Conclusión",
        title: "7. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'De todos es sabido la gran importancia que tienen para nuestro trabajo diario el uso de distintas aplicaciones. En todos los dispositivos que manejamos actualmente encontramos aplicaciones de todo tipo, siendo las de propósito general las más utilizadas. Por otro lado, las aplicaciones de gestión empresarial son imprescindibles para agilizar y realizar de manera eficiente todas las funciones de una empresa.'},
          { type: 'paragraph', text: 'Además, es de destacar que en la actualidad cada vez más se tiende a utilizar aplicaciones en la nube, fomentando el trabajo de forma colaborativa y haciendo que nuestra labor sea mucho más eficiente y las gestiones sean mucho más rápidas.'}
        ]
      },
      {
        id: "t46_s8",
        shortTitle: "8. Bibliografía",
        title: "8. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
              { text: 'Montañez F. (2013). <em>Aplicaciones informáticas de propósito general</em>. Ed. McGraw-Hill.' },
              { text: 'Gómez A., y otros. (2011). <em>Sistemas de información: herramientas prácticas para la gestión empresarial</em>. Editorial Ra-Ma.' },
              { text: 'Date C.J (2000). <em>Introducción a los sistemas de bases de datos</em>. Editorial Addison-Wesley.' },
              { text: 'Wikipedia - Procesador de texto', url: 'https://es.wikipedia.org/wiki/Procesador_de_texto#Funciones' }
          ]}
        ]
      }
    ]
  };