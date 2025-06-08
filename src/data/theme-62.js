export const theme62Data = {
    id: "theme62",
    name: "TEMA 62: Arquitecturas de Comunicaciones",
    title: "TEMA 62 INFORMÁTICA - ARQUITECTURAS DE SISTEMAS DE COMUNICACIONES. ARQUITECTURAS BASADAS EN NIVELES. ESTÁNDARES.",
    version: "Versión: Octubre 2024 (Actualizado)",
    sections: [
      {
        id: "t62_s1",
        shortTitle: "1. Introducción",
        title: "1. INTRODUCCIÓN",
        content: [
          { type: 'paragraph', text: 'Este tema del bloque de "Redes" se centra en las <strong>arquitecturas de sistemas de comunicaciones</strong>, estudiando los modelos de referencia <strong>OSI</strong> y <strong>TCP/IP</strong> que definen cómo se estructura la comunicación en una red.' },
          { type: 'paragraph', text: 'Inicialmente, cada fabricante de hardware desarrollaba su propia arquitectura de red, lo que impedía la comunicación entre equipos de distintas marcas. Para solucionar esto, surgieron modelos estandarizados: la <strong>ISO</strong> creó el Modelo OSI como un marco teórico, mientras que el modelo <strong>TCP/IP</strong> surgió de la red <strong>ARPANET</strong> y se convirtió en el estándar práctico que usamos hoy en Internet.' }
        ]
      },
      {
        id: "t62_s2",
        shortTitle: "2. Arquitecturas en Niveles",
        title: "2. ARQUITECTURA DE SISTEMAS DE COMUNICACIÓN. ARQUITECTURAS BASADAS EN NIVELES",
        content: [
          { type: 'paragraph', text: 'La arquitectura de un sistema de comunicaciones se define como el conjunto de <strong>niveles y protocolos</strong> que conforman un estándar. Se organizan en capas o niveles para independizar y modularizar las funciones, logrando:' },
          { type: 'list', items: ['<strong>Interconexión:</strong> Define las reglas para la conexión física.', '<strong>Interoperabilidad:</strong> Posibilita el trabajo interactivo entre máquinas de distintos fabricantes.', '<strong>Independencia de la instalación:</strong> El modelo puede ser implementado en cualquier arquitectura.'] },
          { type: 'paragraph', text: 'Los modelos de capas se basan en estas reglas:'},
          { type: 'list', items: ['La capa <strong>n</strong> ofrece servicios a la capa <strong>n+1</strong>.', 'La capa <strong>n+1</strong> solo utiliza los servicios de la capa <strong>n</strong>.', 'Una capa <strong>n</strong> se comunica virtualmente con su homóloga en el sistema remoto (comunicación <em>peer-to-peer</em>).', 'Dos capas adyacentes en un mismo sistema se comunican a través de una <strong>interfaz</strong>.']}
        ]
      },
      {
        id: "t62_s3",
        shortTitle: "3. Modelo OSI",
        title: "3. MODELO DE REFERENCIA OSI",
        content: [
          { type: 'paragraph', text: 'El modelo OSI (Open Systems Interconnection) considera siete niveles conceptuales. En cada uno se procesan <strong>PDUs (Protocol Data Unit)</strong>. En el emisor, cada capa añade información de control (cabecera) a los datos de la capa superior (<strong>encapsulación</strong>). En el receptor, se realiza el proceso inverso (<strong>desencapsulación</strong>).' },
          { type: 'flowDiagram', title: 'Flujo de Datos en el Modelo OSI',
            initialNodes: [
              { id: 'app_e', position: { x: 0, y: 0 }, data: { label: 'Capa de Aplicación' } }, { id: 'pres_e', position: { x: 0, y: 80 }, data: { label: 'Capa de Presentación' } },
              { id: 'ses_e', position: { x: 0, y: 160 }, data: { label: 'Capa de Sesión' } }, { id: 'trans_e', position: { x: 0, y: 240 }, data: { label: 'Capa de Transporte' } },
              { id: 'red_e', position: { x: 0, y: 320 }, data: { label: 'Capa de Red' } }, { id: 'enl_e', position: { x: 0, y: 400 }, data: { label: 'Capa de Enlace' } }, { id: 'fis_e', position: { x: 0, y: 480 }, data: { label: 'Capa Física' } },
              { id: 'datos_ah', position: { x: 200, y: 0 }, data: { label: 'AH | datos' } }, { id: 'datos_ph', position: { x: 200, y: 80 }, data: { label: 'PH | datos' } },
              { id: 'datos_sh', position: { x: 200, y: 160 }, data: { label: 'SH | datos' } }, { id: 'datos_th', position: { x: 200, y: 240 }, data: { label: 'TH | datos (Segmento)' } },
              { id: 'datos_nh', position: { x: 200, y: 320 }, data: { label: 'NH | datos (Paquete)' } }, { id: 'datos_dh', position: { x: 200, y: 400 }, data: { label: 'DH | datos | DT (Trama)' } },
              { id: 'bits', position: { x: 200, y: 480 }, data: { label: '...bits...' } },
              { id: 'app_r', position: { x: 400, y: 0 }, data: { label: 'Capa de Aplicación' } }, { id: 'pres_r', position: { x: 400, y: 80 }, data: { label: 'Capa de Presentación' } },
              { id: 'ses_r', position: { x: 400, y: 160 }, data: { label: 'Capa de Sesión' } }, { id: 'trans_r', position: { x: 400, y: 240 }, data: { label: 'Capa de Transporte' } },
              { id: 'red_r', position: { x: 400, y: 320 }, data: { label: 'Capa de Red' } }, { id: 'enl_r', position: { x: 400, y: 400 }, data: { label: 'Capa de Enlace' } }, { id: 'fis_r', position: { x: 400, y: 480 }, data: { label: 'Capa Física' } }
            ],
            initialEdges: [
              { id: 'e1', source: 'app_e', target: 'pres_e' }, { id: 'e2', source: 'pres_e', target: 'ses_e' }, { id: 'e3', source: 'ses_e', target: 'trans_e' },
              { id: 'e4', source: 'trans_e', target: 'red_e' }, { id: 'e5', source: 'red_e', target: 'enl_e' }, { id: 'e6', source: 'enl_e', target: 'fis_e' },
              { id: 'r1', source: 'fis_r', target: 'enl_r' }, { id: 'r2', source: 'enl_r', target: 'red_r' }, { id: 'r3', source: 'red_r', target: 'trans_r' },
              { id: 'r4', source: 'trans_r', target: 'ses_r' }, { id: 'r5', source: 'ses_r', target: 'pres_r' }, { id: 'r6', source: 'pres_r', target: 'app_r' },
              { id: 'd1', source: 'app_e', target: 'datos_ah' }, { id: 'd2', source: 'pres_e', target: 'datos_ph' }, { id: 'd3', source: 'ses_e', target: 'datos_sh' },
              { id: 'd4', source: 'trans_e', target: 'datos_th' }, { id: 'd5', source: 'red_e', target: 'datos_nh' }, { id: 'd6', source: 'enl_e', target: 'datos_dh' },
              { id: 'd7', source: 'fis_e', target: 'bits' },
              { id: 'p1', source: 'datos_ah', target: 'app_r' }, { id: 'p2', source: 'datos_ph', target: 'pres_r' }, { id: 'p3', source: 'datos_sh', target: 'ses_r' },
              { id: 'p4', source: 'datos_th', target: 'trans_r' }, { id: 'p5', source: 'datos_nh', target: 'red_r' }, { id: 'p6', source: 'datos_dh', target: 'enl_r' },
              { id: 'p7', source: 'bits', target: 'fis_r' }
            ]
          }
        ]
      },
      {
        id: "t62_s3_1",
        shortTitle: "3.1. Niveles OSI",
        title: "3.1. NIVELES DEL MODELO OSI: FUNCIONES Y SERVICIOS",
        content: [
          { type: 'definitionList', items: [
            { term: '3.1.1. Nivel Físico (Capa 1):', definition: 'Transmisión de bits puros a través de un canal. Define características eléctricas, mecánicas y funcionales del medio (cables, conectores, señales).'},
            { term: '3.1.2. Nivel de Enlace de Datos (Capa 2):', definition: 'Creación y envío de tramas (frames) entre nodos directamente conectados. Se encarga del control de errores y del control de acceso al medio (subcapa MAC). Protocolos: <code>Ethernet</code>, <code>HDLC</code>, <code>PPP</code>.'},
            { term: '3.1.3. Nivel de Red (Capa 3):', definition: 'Encargado de dirigir los datos desde el origen al destino a través de la red (enrutamiento). Funciones: encaminamiento de paquetes, fragmentación y control de congestión. Protocolo principal: <code>IP</code>.'},
            { term: '3.1.4. Nivel de Transporte (Capa 4):', definition: 'Proporciona una transferencia de datos transparente y fiable entre los extremos de la comunicación. Divide los datos en segmentos. Protocolos principales: <code>TCP</code> (orientado a conexión, fiable) y <code>UDP</code> (no orientado a conexión, rápido).'},
            { term: '3.1.5. Nivel de Sesión (Capa 5):', definition: 'Permite establecer, gestionar y terminar sesiones entre usuarios. Controla el diálogo y la sincronización.'},
            { term: '3.1.6. Nivel de Presentación (Capa 6):', definition: 'Define el formato y la sintaxis de los datos que se van a intercambiar, asegurando que las aplicaciones puedan entender la información. Se encarga de la compresión y el cifrado de datos.'},
            { term: '3.1.7. Nivel de Aplicación (Capa 7):', definition: 'La capa más cercana al usuario. Proporciona los servicios de red a las aplicaciones de usuario (navegadores web, clientes de correo, etc.). Protocolos: <code>HTTP</code>, <code>SMTP</code>, <code>FTP</code>.'}
          ]}
        ]
      },
      {
        id: "t62_s4",
        shortTitle: "4. Modelo TCP/IP",
        title: "4. MODELO TCP/IP",
        content: [
          { type: 'paragraph', text: 'El modelo TCP/IP es anterior al modelo OSI y es el que se utiliza en la práctica en Internet. No tiene una división tan estricta de sus capas, y se puede organizar de forma general en cuatro niveles:'},
          { type: 'table', headers: ['Nº', 'Capa TCP/IP', 'Equivalencia OSI'], rows: [
              ['4', 'Aplicación', 'Aplicación, Presentación, Sesión'],
              ['3', 'Transporte', 'Transporte'],
              ['2', 'Internet', 'Red'],
              ['1', 'Acceso a Red', 'Enlace de Datos, Físico']
          ]},
          { type: 'definitionList', items: [
              {term: '4.1.1. Nivel de Acceso a Red:', definition: 'Engloba las funciones de los niveles físico y de enlace del modelo OSI. Permite que los paquetes entren y viajen a través de la red.'},
              {term: '4.1.2. Nivel de Internet:', definition: 'Equivalente al nivel de red OSI. Se encarga de encaminar los paquetes (datagramas IP). Su protocolo es <strong>IP (Internet Protocol)</strong>.'},
              {term: '4.1.3. Nivel de Transporte:', definition: 'Misma función que en el modelo OSI. Sus protocolos principales son <strong>TCP (Transmission Control Protocol)</strong>, fiable y orientado a conexión, y <strong>UDP (User Datagram Protocol)</strong>, no fiable y sin conexión.'},
              {term: '4.1.4. Nivel de Aplicación:', definition: 'Desarrolla las funciones de los niveles de sesión, presentación y aplicación de OSI. Contiene todos los protocolos de alto nivel (<code>HTTP</code>, <code>FTP</code>, <code>SMTP</code>, etc.).'}
          ]}
        ]
      },
      {
        id: "t62_s5",
        shortTitle: "5. Diferencias OSI y TCP/IP",
        title: "5. DIFERENCIAS ENTRE EL MODELO OSI Y TCP/IP",
        content: [
          { type: 'list', items: [
              'OSI separa claramente los conceptos de servicios, interfaces y protocolos; TCP/IP no lo hace de forma tan estricta.',
              'OSI fue desarrollado como un modelo teórico antes de tener los protocolos; TCP/IP se desarrolló a partir de protocolos ya existentes (los de ARPANET).',
              'OSI tiene 7 capas bien definidas; TCP/IP tiene 4 capas.',
              'Ambos modelos difieren en cómo manejan la comunicación orientada y no orientada a conexión en las capas de red y transporte.'
          ]}
        ]
      },
      {
        id: "t62_s6",
        shortTitle: "6. Estándares",
        title: "6. ESTÁNDARES",
        content: [
          { type: 'paragraph', text: 'Los estándares en telecomunicaciones regulan la transmisión en sistemas de comunicación. Pueden ser <strong>de facto</strong> (aceptados por el mercado) o <strong>de iure</strong> (definidos por organismos oficiales), y a su vez <strong>abiertos</strong> (accesibles a todos) o <strong>cerrados</strong> (propietarios).' },
          { type: 'paragraph', text: 'Los estándares abiertos son definidos por consorcios de fabricantes u organismos oficiales:' },
          { type: 'list', items: [
              '<strong>Consorcios de fabricantes:</strong> Grupos de empresas que cooperan para establecer normas que aseguren la interoperabilidad (ej. <code>Wi-Fi Alliance</code>, <code>USB Implementers Forum</code>).',
              '<strong>Organismos oficiales:</strong> Como la <strong>ITU</strong> (International Telecommunication Union), la <strong>ISO</strong> (International Organization for Standardization) que define estándares globales como el modelo OSI, la <strong>IEEE</strong> (Institute of Electrical and Electronic Engineers) que desarrolla estándares para redes locales como <code>IEEE 802.3 (Ethernet)</code> y <code>IEEE 802.11 (Wi-Fi)</code>, y el <strong>IETF</strong> (Internet Engineering Task Force) que regula los estándares de Internet a través de <code>RFCs (Request for Comments)</code>.'
          ]}
        ]
      },
      {
        id: "t62_s7",
        shortTitle: "7. Aplicación",
        title: "7. APLICACIÓN DE LOS CONTENIDOS AL CONTEXTO ESCOLAR Y LABORAL",
        content: [
          { type: 'paragraph', text: 'El conocimiento sobre las arquitecturas de sistemas de comunicaciones y los estándares asociados tiene aplicaciones esenciales tanto en el ámbito escolar como en el laboral, formando la base para el manejo y diseño de infraestructuras de red.' },
          { type: 'paragraph', text: 'En el contexto laboral, el dominio de estas arquitecturas es crucial para implementar, gestionar y optimizar redes de comunicación, asegurando la interoperabilidad entre sistemas y el cumplimiento de normativas internacionales. Son conocimientos indispensables para roles técnicos relacionados con la administración de redes, la ciberseguridad y las telecomunicaciones.' }
        ]
      },
      {
        id: "t62_s8",
        shortTitle: "8. Conclusión",
        title: "8. CONCLUSIÓN",
        content: [
          { type: 'paragraph', text: 'Los protocolos <strong>TCP/IP</strong> son los estándares sobre los cuales se desarrolló Internet. Aunque las redes no se desarrollan a partir del modelo <strong>OSI</strong>, éste se utiliza como un modelo de referencia teórico fundamental para entender la comunicación en capas. La complejidad del modelo OSI hizo que sus protocolos no tuvieran una gran implementación práctica, mientras que TCP/IP, al ser más pragmático y estar disponible antes, se convirtió en el estándar de facto con una aplicación mucho mayor.' }
        ]
      },
      {
        id: "t62_s9",
        shortTitle: "9. Bibliografía",
        title: "9. BIBLIOGRAFÍA",
        content: [
          { type: 'bibliography', items: [
            { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Editorial Pearson.' },
            { text: 'Stallings, W. (2017). <em>Data and Computer Communications</em>. Ed. Pearson.' },
            { text: 'Prieto, A. (2006). <em>Introducción a la informática</em>. Editorial McGraw-Hill.' },
            { text: 'ITU (International Telecommunication Union)', url: 'https://www.itu.int' },
            { text: 'IEEE 802 Standards Group', url: 'https://www.ieee802.org' },
            { text: 'Internet Engineering Task Force (IETF)', url: 'https://www.ietf.org/' }
          ]}
        ]
      }
    ]
  };