// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 62
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme62Data = {
  id: "theme62",
  name: "TEMA 62: Arquitecturas de Comunicaciones",
  title: "TEMA 62: ARQUITECTURAS DE SISTEMAS DE COMUNICACIONES. ARQUITECTURAS BASADAS EN NIVELES. ESTÁNDARES.",
  version: "Octubre 2024",
  sections: [
    {
      id: "t62_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema del bloque de "Redes" estudia las <strong>arquitecturas de sistemas de comunicaciones</strong>, centrándose en los modelos de referencia <strong>OSI</strong> y <strong>TCP/IP</strong>. Estos modelos surgieron de la necesidad de estandarizar la comunicación para permitir la interoperabilidad entre equipos de distintos fabricantes.' },
        { type: 'paragraph', text: 'El estudio de estas arquitecturas está presente en el currículo de la familia de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Redes locales</code>.' },
          { text: 'CFGS de <strong>Administración de Sistemas Informáticos en Red</strong> – Módulo: <code>Planificación y administración de redes</code>.' }
        ]}
      ]
    },
    {
      id: "t62_s2",
      shortTitle: "2. Arquitecturas en Niveles",
      title: "2. ARQUITECTURA DE SISTEMAS DE COMUNICACIÓN. ARQUITECTURAS BASADAS EN NIVELES",
      icon: "layers",
      content: [
        { type: 'paragraph', text: 'Una arquitectura de comunicaciones es el conjunto de <strong>niveles y protocolos</strong> que conforman un estándar. Se organizan en capas para independizar y modularizar las funciones, logrando interoperabilidad e independencia de la instalación.' },
        { type: 'keyConcept', title: 'Reglas de los Modelos de Capas', items: [
          'La capa <strong>n</strong> ofrece servicios a la capa <strong>n+1</strong>.',
          'La capa <strong>n+1</strong> solo utiliza los servicios de la capa <strong>n</strong>.',
          'Una capa <strong>n</strong> se comunica virtualmente con su homóloga en el sistema remoto (comunicación <em>peer-to-peer</em>).',
          'Dos capas adyacentes se comunican a través de una <strong>interfaz</strong>.'
        ]}
      ]
    },
    {
      id: "t62_s3",
      shortTitle: "3. Modelo OSI",
      title: "3. MODELO DE REFERENCIA OSI",
      icon: "osi",
      content: [
        { type: 'paragraph', text: 'El modelo OSI (Open Systems Interconnection) define siete niveles conceptuales. En cada uno se procesan <strong>PDUs (Protocol Data Unit)</strong>. En el emisor, cada capa añade una cabecera a los datos de la capa superior (<strong>encapsulación</strong>). En el receptor, se realiza el proceso inverso (<strong>desencapsulación</strong>).' },
        { type: 'flowDiagram', title: 'Flujo de Datos en el Modelo OSI',
          initialNodes: [
            { id: 'app_e', position: { x: 0, y: 0 }, data: { label: '7. Aplicación' } },
            { id: 'pres_e', position: { x: 0, y: 70 }, data: { label: '6. Presentación' } },
            { id: 'ses_e', position: { x: 0, y: 140 }, data: { label: '5. Sesión' } },
            { id: 'trans_e', position: { x: 0, y: 210 }, data: { label: '4. Transporte' } },
            { id: 'red_e', position: { x: 0, y: 280 }, data: { label: '3. Red' } },
            { id: 'enl_e', position: { x: 0, y: 350 }, data: { label: '2. Enlace' } },
            { id: 'fis_e', position: { x: 0, y: 420 }, data: { label: '1. Físico' } },
            { id: 'pdu7', position: { x: 200, y: 0 }, data: { label: 'Datos' }, className: 'node-bus-data' },
            { id: 'pdu4', position: { x: 200, y: 210 }, data: { label: 'TH | Datos (Segmento)' }, className: 'node-bus-data' },
            { id: 'pdu3', position: { x: 200, y: 280 }, data: { label: 'NH | Segmento (Paquete)' }, className: 'node-bus-data' },
            { id: 'pdu2', position: { x: 200, y: 350 }, data: { label: 'DH | Paquete | DT (Trama)' }, className: 'node-bus-data' },
            { id: 'pdu1', position: { x: 200, y: 420 }, data: { label: '...Bits...' }, className: 'node-bus-data' },
            { id: 'app_r', position: { x: 400, y: 0 }, data: { label: '7. Aplicación' } },
            { id: 'pres_r', position: { x: 400, y: 70 }, data: { label: '6. Presentación' } },
            { id: 'ses_r', position: { x: 400, y: 140 }, data: { label: '5. Sesión' } },
            { id: 'trans_r', position: { x: 400, y: 210 }, data: { label: '4. Transporte' } },
            { id: 'red_r', position: { x: 400, y: 280 }, data: { label: '3. Red' } },
            { id: 'enl_r', position: { x: 400, y: 350 }, data: { label: '2. Enlace' } },
            { id: 'fis_r', position: { x: 400, y: 420 }, data: { label: '1. Físico' } }
          ],
          initialEdges: [
            { id: 'e-down', source: 'app_e', target: 'pres_e', type: 'step' }, { id: 'e-down2', source: 'pres_e', target: 'ses_e', type: 'step' },
            { id: 'e-down3', source: 'ses_e', target: 'trans_e', type: 'step' }, { id: 'e-down4', source: 'trans_e', target: 'red_e', type: 'step' },
            { id: 'e-down5', source: 'red_e', target: 'enl_e', type: 'step' }, { id: 'e-down6', source: 'enl_e', target: 'fis_e', type: 'step' },
            { id: 'e-up', source: 'fis_r', target: 'enl_r', type: 'step' }, { id: 'e-up2', source: 'enl_r', target: 'red_r', type: 'step' },
            { id: 'e-up3', source: 'red_r', target: 'trans_r', type: 'step' }, { id: 'e-up4', source: 'trans_r', target: 'ses_r', type: 'step' },
            { id: 'e-up5', source: 'ses_r', target: 'pres_r', type: 'step' }, { id: 'e-up6', source: 'pres_r', target: 'app_r', type: 'step' },
            { id: 'h-app', source: 'app_e', target: 'app_r', animated: true, label: 'HTTP' },
            { id: 'h-trans', source: 'trans_e', target: 'trans_r', animated: true, label: 'TCP/UDP' },
            { id: 'h-red', source: 'red_e', target: 'red_r', animated: true, label: 'IP' },
            { id: 'h-enl', source: 'enl_e', target: 'enl_r', animated: true, label: 'Ethernet' }
          ]
        }
      ]
    },
    {
      id: "t62_s3_1", shortTitle: "3.1. Funciones Niveles OSI", title: "3.1. NIVELES DEL MODELO OSI: FUNCIONES Y SERVICIOS",
      content: [
        { type: 'definitionList', items: [
          { term: 'Nivel Físico (1):', definition: 'Transmisión de bits. Define características eléctricas y mecánicas del medio (cables, conectores).'},
          { term: 'Nivel de Enlace (2):', definition: 'Crea tramas (frames) y controla el acceso al medio (subcapa MAC). Protocolos: <code>Ethernet</code>, <code>Wi-Fi</code>.'},
          { term: 'Nivel de Red (3):', definition: 'Enrutamiento de paquetes entre redes. Protocolo principal: <code>IP</code>.'},
          { term: 'Nivel de Transporte (4):', definition: 'Comunicación fiable extremo a extremo. Divide los datos en segmentos. Protocolos: <code>TCP</code> y <code>UDP</code>.'},
          { term: 'Nivel de Sesión (5):', definition: 'Establece, gestiona y termina sesiones entre aplicaciones.'},
          { term: 'Nivel de Presentación (6):', definition: 'Formatea y traduce los datos (ej. cifrado, compresión) para que las aplicaciones los entiendan.'},
          { term: 'Nivel de Aplicación (7):', definition: 'Proporciona los servicios de red a las aplicaciones de usuario. Protocolos: <code>HTTP</code>, <code>SMTP</code>, <code>FTP</code>.'}
        ]}
      ]
    },
    {
      id: "t62_s4",
      shortTitle: "4. Modelo TCP/IP",
      title: "4. MODELO TCP/IP",
      icon: "tcp_ip",
      content: [
        { type: 'paragraph', text: 'Es el modelo práctico sobre el que se construyó Internet. Generalmente se organiza en cuatro capas:'},
        { type: 'definitionList', items: [
            {term: 'Nivel de Acceso a Red:', definition: 'Equivale a las capas 1 y 2 de OSI. Gestiona la transmisión de datos en la red local.'},
            {term: 'Nivel de Internet:', definition: 'Equivale a la capa 3 de OSI. Su protocolo es <strong>IP</strong>, responsable del direccionamiento y enrutamiento.'},
            {term: 'Nivel de Transporte:', definition: 'Equivalente a la capa 4 de OSI. Sus protocolos son <strong>TCP</strong> (fiable) y <strong>UDP</strong> (rápido, no fiable).'},
            {term: 'Nivel de Aplicación:', definition: 'Engloba las capas 5, 6 y 7 de OSI. Contiene los protocolos de alto nivel (<code>HTTP</code>, <code>FTP</code>, etc.).'}
        ]}
      ]
    },
    {
      id: "t62_s5",
      shortTitle: "5. Diferencias OSI vs. TCP/IP",
      title: "5. DIFERENCIAS ENTRE EL MODELO OSI Y TCP/IP",
      content: [
        { type: 'keyConcept', title: 'OSI vs. TCP/IP', text: 'La principal diferencia es filosófica: <strong>OSI</strong> es un modelo teórico prescriptivo (primero el modelo, luego los protocolos), mientras que <strong>TCP/IP</strong> es un modelo descriptivo (surgió a partir de protocolos que ya funcionaban). Por ello, TCP/IP es el que se usa en la práctica, pero OSI es una herramienta pedagógica fundamental para entender la comunicación en capas.' }
      ]
    },
    {
      id: "t62_s6", shortTitle: "6. Estándares", title: "6. ESTÁNDARES", icon: "standards",
      content: [
        { type: 'paragraph', text: 'Los estándares aseguran la interoperabilidad. Son definidos por consorcios u organismos oficiales:' },
        { type: 'list', items: [
            '<strong>ISO (International Organization for Standardization):</strong> Define estándares globales, incluyendo el modelo OSI.',
            '<strong>IEEE (Institute of Electrical and Electronic Engineers):</strong> Desarrolla estándares para redes locales, como <code>IEEE 802.3 (Ethernet)</code> y <code>IEEE 802.11 (Wi-Fi)</code>.',
            '<strong>IETF (Internet Engineering Task Force):</strong> Regula los estándares de Internet a través de <code>RFCs (Request for Comments)</code>.'
        ]}
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: "t62_s7", shortTitle: "7. Aplicación", title: "7. APLICACIÓN DE LOS CONTENIDOS", icon: "application", content: [ { type: 'paragraph', text: 'El dominio de estas arquitecturas es crucial para implementar, gestionar y optimizar redes, asegurando la interoperabilidad y el cumplimiento de normativas. Son conocimientos indispensables para roles de administración de redes, ciberseguridad y telecomunicaciones.' } ] },
    { id: "t62_s8", shortTitle: "8. Conclusión", title: "8. CONCLUSIÓN", icon: "conclusion", content: [ { type: 'paragraph', text: 'TCP/IP son los estándares sobre los que se desarrolló Internet. Aunque las redes no se desarrollan a partir del modelo OSI, éste se utiliza como modelo de referencia teórico fundamental. La complejidad de OSI dificultó su implementación práctica, haciendo que TCP/IP, más pragmático, se convirtiera en el estándar de facto.' } ] },
    { id: "t62_s9", shortTitle: "9. Bibliografía", title: "9. BIBLIOGRAFÍA", icon: "bibliography", content: [ { type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Pearson.' }, { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' } ] } ] }
  ],
  glossary: [
    { term: 'Arquitectura de Red', definition: 'El diseño de una red de comunicaciones. Incluye la especificación de los componentes físicos, su organización funcional, sus protocolos y procedimientos.' },
    { term: 'Modelo OSI', definition: 'Modelo de referencia de 7 capas (Físico, Enlace, Red, Transporte, Sesión, Presentación, Aplicación) que describe teóricamente cómo funciona una red.' },
    { term: 'Modelo TCP/IP', definition: 'Modelo de 4 capas (Acceso a Red, Internet, Transporte, Aplicación) que es el estándar práctico sobre el que se basa Internet.' },
    { term: 'Encapsulación', definition: 'Proceso por el cual los datos de una capa superior son empaquetados con una cabecera de la capa actual antes de pasar a la capa inferior.' },
    { term: 'PDU (Protocol Data Unit)', definition: 'Unidad de datos en una capa específica de un modelo de red (ej. Trama en Capa 2, Paquete en Capa 3, Segmento en Capa 4).' },
    { term: 'Protocolo', definition: 'Conjunto de reglas y convenciones que gobiernan la comunicación entre entidades de la misma capa en diferentes sistemas.' },
    { term: 'Estándar', definition: 'Conjunto de especificaciones técnicas que aseguran la compatibilidad e interoperabilidad entre productos de diferentes fabricantes.' }
  ]
};