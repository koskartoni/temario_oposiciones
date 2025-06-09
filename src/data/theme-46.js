// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 46/41
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme46Data = {
  id: "theme46",
  name: "TEMA 46/41: Aplicaciones Informáticas",
  title: "TEMA 46/41: APLICACIONES INFORMÁTICAS DE PROPÓSITO GENERAL Y PARA LA GESTIÓN EMPRESARIAL",
  version: "Octubre 2024",
  sections: [
    {
      id: "t46_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema, ubicado en el bloque de "Sistemas de Información", se centra en el software que los usuarios utilizan directamente: las <strong>aplicaciones informáticas</strong>. Distinguiremos entre las de <strong>propósito general</strong> y las de <strong>gestión empresarial</strong>.' },
        { type: 'paragraph', text: 'El estudio de las aplicaciones informáticas está presente en el currículo de la familia profesional de Informática y Comunicaciones. Concretamente, se puede ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGS de <strong>Desarrollo de Aplicaciones Multiplataforma / Web</strong> – Módulos: <code>Sistemas de gestión empresarial</code> y <code>Sistemas informáticos</code>.' },
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Aplicaciones ofimáticas</code>.' }
        ]}
      ]
    },
    {
      id: "t46_s2",
      shortTitle: "2. Concepto de Aplicación",
      title: "2. CONCEPTO DE APLICACIÓN",
      icon: "application",
      content: [
        { type: 'paragraph', text: 'Una <strong>aplicación</strong> es un programa informático diseñado para permitir a un usuario realizar uno o diversos tipos de tareas. Pertenecen al <strong>software de aplicación</strong> y están en contacto directo con el usuario final.' },
        { type: 'flowDiagram', title: 'Capas del Software',
          initialNodes: [
            { id: 'user', position: { x: 250, y: 0 }, data: { label: 'Usuario Final' }, type: 'input' },
            { id: 'prog', position: { x: 250, y: 100 }, data: { label: 'Software de Aplicación' }, className: 'node-bus-data' },
            { id: 'so', position: { x: 250, y: 200 }, data: { label: 'Software de Sistema (SO, utilidades)' }, className: 'node-bus-control' },
            { id: 'hw', position: { x: 250, y: 300 }, data: { label: 'Hardware' }, type: 'output' }
          ],
          initialEdges: [
            { id: 'e1', source: 'user', target: 'prog', animated: true }, { id: 'e2', source: 'prog', target: 'so' },
            { id: 'e3', source: 'so', target: 'hw', animated: true }
          ]
        }
      ]
    },
    {
      id: "t46_s3",
      shortTitle: "3. Apps de Propósito General",
      title: "3. APLICACIONES INFORMÁTICAS DE PROPÓSITO GENERAL",
      icon: "generalPurpose",
      content: [
        { type: 'paragraph', text: 'Son creadas para resolver problemas generales y se utilizan para diversos fines. A continuación, se describen los principales tipos:' }
      ]
    },
    { id: "t46_s3_1", shortTitle: "3.1. Procesadores de Texto", title: "3.1. PROCESADORES DE TEXTO", content: [ { type: 'paragraph', text: 'Para la creación, edición y procesamiento de documentos con formato. <strong>Ejemplos:</strong> <code>Microsoft Word</code>, <code>Google Docs</code>, <code>LibreOffice Writer</code>.' } ] },
    { id: "t46_s3_2", shortTitle: "3.2. Hojas de Cálculo", title: "3.2. HOJAS DE CÁLCULO", content: [ { type: 'paragraph', text: 'Permiten manipular datos numéricos y alfanuméricos en una matriz de celdas, realizar cálculos y generar gráficos. <strong>Ejemplos:</strong> <code>Microsoft Excel</code>, <code>Google Sheets</code>, <code>LibreOffice Calc</code>.' } ] },
    { id: "t46_s3_3", shortTitle: "3.3. SGBD", title: "3.3. SISTEMAS GESTORES DE BASES DE DATOS", content: [ { type: 'paragraph', text: 'Permiten a los usuarios crear, mantener y manipular bases de datos. <strong>Ejemplos:</strong> <code>Microsoft Access</code>, <code>MySQL</code>, <code>PostgreSQL</code>, <code>MongoDB</code>.' } ] },
    { id: "t46_s3_4", shortTitle: "3.4. Comunicaciones", title: "3.4. COMUNICACIONES", content: [ { type: 'paragraph', text: 'Gestionan el envío y recepción de mensajes e información. Incluyen clientes de correo, navegadores web y mensajería. <strong>Ejemplos:</strong> <code>Outlook</code>, <code>Chrome</code>, <code>WhatsApp</code>, <code>Slack</code>.' } ] },
    { id: "t46_s3_5", shortTitle: "3.5. Presentaciones", title: "3.5. PRESENTACIONES", content: [ { type: 'paragraph', text: 'Para crear ayudas visuales (diapositivas) combinando texto, imágenes y animaciones. <strong>Ejemplos:</strong> <code>PowerPoint</code>, <code>Google Slides</code>, <code>Prezi</code>.' } ] },
    { id: "t46_s3_6", shortTitle: "3.6. Diseño Gráfico", title: "3.6. DISEÑO GRÁFICO", content: [ { type: 'paragraph', text: 'Permiten crear o modificar imágenes y dibujos. <strong>Ejemplos:</strong> <code>Adobe Photoshop</code> (raster), <code>Adobe Illustrator</code> (vectorial), <code>Figma</code> (diseño de interfaces).' } ] },
    { id: "t46_s3_7", shortTitle: "3.7. Paquete Integrado", title: "3.7. PAQUETE INTEGRADO (SUITE OFIMÁTICA)", content: [ { type: 'paragraph', text: 'Conjunto de aplicaciones de uso común concebidas para interactuar entre sí. <strong>Ejemplos:</strong> <code>Microsoft 365</code>, <code>Google Workspace</code>, <code>LibreOffice</code>.'} ] },
    {
      id: "t46_s4",
      shortTitle: "4. Apps de Gestión Empresarial",
      title: "4. APLICACIONES INFORMÁTICAS PARA LA GESTIÓN EMPRESARIAL",
      icon: "enterprise",
      content: [
        { type: 'keyConcept', title: 'ERP (Enterprise Resource Planning)', text: 'Los sistemas integrados de gestión (ERP) surgieron para cubrir todas las áreas funcionales de una empresa (finanzas, producción, compras, ventas, RRHH) en un único sistema de software, compuesto por diferentes módulos.' }
      ]
    },
    { id: "t46_s4_1", shortTitle: "4.1. Financiera-Contable", title: "4.1. GESTIÓN FINANCIERA-CONTABLE", content: [ { type: 'paragraph', text: 'Automatizan operaciones como la introducción de asientos, impresión de libros diarios, balances, gestión del IVA, etc.' } ] },
    { id: "t46_s4_2", shortTitle: "4.2. Personal (RRHH)", title: "4.2. GESTIÓN DE PERSONAL", content: [ { type: 'paragraph', text: 'Gestionan la información de la plantilla (filiación, historial, formación) y la generación de nóminas.' } ] },
    { id: "t46_s4_3", shortTitle: "4.3. Comercial (CRM)", title: "4.3. GESTIÓN COMERCIAL",
      content: [
        { type: 'paragraph', text: 'Las aplicaciones de <strong>CRM (Customer Relationship Management)</strong> se centran en gestionar la relación con los clientes para optimizar el marketing y las ventas.' },
        { type: 'practicalExample', title: '¿Cómo funciona un CRM?', text: 'Un CRM como <strong>Salesforce</strong> permite a un equipo de ventas registrar cada interacción con un cliente (llamadas, emails, reuniones), prever futuras ventas, automatizar el envío de correos y analizar qué estrategias funcionan mejor. Todo en una única plataforma compartida.' }
      ]
    },
    { id: "t46_s4_4", shortTitle: "4.4. Stock y Almacén", title: "4.4. CONTROL DE STOCK Y ALMACÉN", content: [ { type: 'paragraph', text: 'Controla las existencias, actualiza el inventario y ayuda a predecir cuándo realizar nuevos pedidos. A menudo se integra con los sistemas de planificación de recursos de fabricación (<strong>MRP</strong>).' } ] },
    {
      id: "t46_s5",
      shortTitle: "5. Apps en la Nube (SaaS)",
      title: "5. APLICACIONES EN LA NUBE (SAAS)",
      icon: 'cloud',
      content: [
        { type: 'keyConcept', title: 'SaaS (Software as a Service)', text: 'Es un modelo de distribución de software donde las aplicaciones se alojan en los servidores de un proveedor y se accede a ellas a través de un navegador web. Esto elimina la necesidad de instalación y mantenimiento local, y facilita el trabajo colaborativo.' },
        { type: 'paragraph', text: '<strong>Ejemplos:</strong> <code>Microsoft 365</code>, <code>Google Workspace</code>, <code>Salesforce</code>, <code>Dropbox</code>, <code>Figma</code>, <code>Notion</code>.'}
      ]
    },
    {
      id: "t46_s6", shortTitle: "6. Aplicación", title: "6. APLICACIÓN DE LOS CONTENIDOS", icon: "application",
      content: [ { type: 'paragraph', text: 'En FP, se trabajan estas aplicaciones en módulos como <code>Sistemas de gestión empresarial</code> o <code>Aplicaciones ofimáticas</code>. En el ámbito laboral, son herramientas diarias en cualquier sector, con una clara tendencia hacia las soluciones basadas en la nube (SaaS).' } ]
    },
    {
      id: "t46_s7", shortTitle: "7. Conclusión", title: "7. CONCLUSIÓN", icon: "conclusion",
      content: [ { type: 'paragraph', text: 'En este tema hemos visto la gran importancia de las aplicaciones informáticas. Las de propósito general son herramientas de uso diario, mientras que las de gestión empresarial son imprescindibles para la eficiencia de cualquier organización. La tendencia actual es el uso de aplicaciones en la nube, que fomentan el trabajo colaborativo y la accesibilidad desde cualquier lugar.' } ]
    },
    {
      id: "t46_s8", shortTitle: "8. Bibliografía", title: "8. BIBLIOGRAFÍA", icon: "bibliography",
      content: [ { type: 'bibliography', items: [ { text: 'Montañez F. (2013). <em>Aplicaciones informáticas de propósito general</em>. McGraw-Hill.' }, { text: 'Gómez A., y otros. (2011). <em>Sistemas de información: herramientas prácticas para la gestión empresarial</em>. Ra-Ma.' } ] } ]
    }
  ],
  glossary: [
      { term: 'Aplicación Informática', definition: 'Programa diseñado como herramienta para que un usuario realice uno o varios tipos de tareas.' },
      { term: 'Software de Aplicación', definition: 'Capa de software que está en contacto directo con el usuario final, por encima del software de sistema.' },
      { term: 'Suite Ofimática', definition: 'Paquete integrado de aplicaciones de propósito general (procesador de textos, hoja de cálculo, etc.) diseñadas para interactuar entre sí.' },
      { term: 'ERP (Enterprise Resource Planning)', definition: 'Sistema de software integrado que gestiona todas las áreas funcionales de una empresa (finanzas, RRHH, producción, etc.).' },
      { term: 'CRM (Customer Relationship Management)', definition: 'Software enfocado en gestionar la relación y las interacciones de una empresa con sus clientes.' },
      { term: 'SaaS (Software as a Service)', definition: 'Modelo de distribución de software en el que las aplicaciones se alojan en la nube y se accede a ellas a través de un navegador web.' }
  ]
};