// CÓDIGO FUSIONADO Y MEJORADO PARA EL TEMA 68/56
// Reemplaza todo el contenido de tu archivo actual con este.

export const theme68Data = {
  id: "theme68",
  name: "TEMA 68/56: Software de Sistemas en Red",
  title: "TEMA 68/56: SOFTWARE DE SISTEMAS EN RED. COMPONENTES. FUNCIONES. ESTRUCTURA",
  version: "Noviembre 2024",
  sections: [
    {
      id: "t68_s1",
      shortTitle: "1. Introducción",
      title: "1. INTRODUCCIÓN",
      icon: "introduction",
      content: [
        { type: 'paragraph', text: 'Este tema se adentra en el <strong>software</strong> presente en los sistemas en red, detallando sus componentes, funciones y estructura. Mientras que los temas anteriores se centraron en el hardware y los protocolos, ahora exploraremos el software que hace posible la operación y administración de las redes.' },
        { type: 'paragraph', text: 'El estudio del software de sistemas en red está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:'},
        { type: 'nestedList', items: [
          { text: 'CFGM de <strong>Sistemas Microinformáticos y Redes</strong> – Módulo: <code>Sistemas operativos en red</code>.' }
        ]}
      ]
    },
    {
      id: "t68_s2",
      shortTitle: "2. Sistemas en Red",
      title: "2. SISTEMAS EN RED",
      icon: "network",
      content: [
        { type: 'paragraph', text: 'Los sistemas en red son conjuntos de dispositivos de computación interconectados. Sus beneficios son: compartir información y recursos, mayor flexibilidad y reducción de costes. Sus componentes esenciales se clasifican en hardware y software.' }
      ]
    },
    {
      id: "t68_s3",
      shortTitle: "3. Software de Red",
      title: "3. SOFTWARE DE SISTEMAS EN RED",
      icon: "software"
    },
    {
      id: "t68_s3_1",
      shortTitle: "3.1. Componentes y Estructura",
      title: "3.1. COMPONENTES Y ESTRUCTURA",
      content: [
        { type: 'keyConcept', title: 'Niveles del Software de Red', items: [
          '<strong>1. Drivers o Controladores de Red:</strong> Software de bajo nivel que permite al SO interactuar con el hardware de red (tarjeta de red).',
          '<strong>2. Sistema Operativo de Red (NOS):</strong> El software principal que ofrece los servicios de red. Se distingue entre el <strong>SO de servidor</strong> (ej. Windows Server) y el <strong>SO de cliente</strong> (ej. Windows 11).',
          '<strong>3. Software de Gestión y Monitorización:</strong> Herramientas que permiten al administrador supervisar y gestionar el funcionamiento de la red (ej. <code>Nagios</code>, <code>Zabbix</code>, <code>Prometheus</code>).'
        ]}
      ]
    },
    {
      id: "t68_s3_2",
      shortTitle: "3.2. Funciones y Servicios",
      title: "3.2. FUNCIONES Y SERVICIOS",
      content: [
        { type: 'paragraph', text: 'Un sistema operativo en red presta varios servicios esenciales para la comunicación y el uso compartido de recursos. Los más habituales incluyen:' },
        { type: 'definitionList', items: [
          { term: 'Gestión de archivos compartidos:', definition: 'Permite que múltiples usuarios accedan a archivos en un servidor (<code>NFS</code>, <code>SMB/CIFS</code>).'},
          { term: 'Autenticación y control de acceso:', definition: 'Gestiona usuarios, contraseñas y permisos (<code>LDAP</code>, <code>Active Directory</code>).'},
          { term: 'Servicios de comunicación:', definition: 'Correo electrónico (SMTP), mensajería, VoIP.'},
          { term: 'Servicio DHCP:', definition: 'Asigna automáticamente direcciones IP a los dispositivos.'},
          { term: 'Servicio DNS:', definition: 'Traduce nombres de dominio a direcciones IP.'},
          { term: 'Servidor web:', definition: 'Permite alojar sitios web o aplicaciones.'},
          { term: 'Servidores de bases de datos:', definition: 'Gestionan el acceso a bases de datos en red.'}
        ]}
      ]
    },
    {
      id: "t68_s4",
      shortTitle: "4. SO Local vs. SO en la Nube",
      title: "4. SISTEMA OPERATIVO EN RED LOCAL VS SISTEMA OPERATIVO EN RED EN LA NUBE",
      icon: "cloud",
      content: [
        { type: 'paragraph', text: 'La forma tradicional de implementar SO en red era en local (<strong>on-premise</strong>). Hoy, muchas empresas optan por sistemas en la <strong>nube</strong>.'},
        { type: 'table', headers: ['Criterio', 'SO Local (On-Premise)', 'SO en la Nube (Cloud)'], rows: [
            ['Control', '<strong>Total</strong> sobre infraestructura y datos.', 'Dependencia del proveedor.'],
            ['Coste', '<strong>Altos costes iniciales</strong> (CAPEX).', '<strong>Costes operativos</strong> (OPEX), pago por uso.'],
            ['Escalabilidad', 'Limitada y costosa.', '<strong>Altamente escalable</strong> bajo demanda.'],
            ['Seguridad', 'Responsabilidad total de la empresa.', 'Responsabilidad compartida con el proveedor.'],
            ['Conectividad', 'No depende de Internet para acceso interno.', '<strong>Dependencia total</strong> de Internet.']
        ]},
        { type: 'quiz', title: 'Comprueba lo aprendido', questions: [
          { question: 'Una startup que espera un crecimiento rápido y quiere minimizar la inversión inicial debería optar por un SO:', options: ['En la Nube', 'Local (On-Premise)'], correctAnswerIndex: 0 },
          { question: 'Un sistema que requiere el máximo control sobre los datos y la seguridad, sin depender de terceros, debería ser:', options: ['En la Nube', 'Local (On-Premise)'], correctAnswerIndex: 1 }
        ]}
      ]
    },
    {
      id: "t68_s5",
      shortTitle: "5. AWS y Azure",
      title: "5. AMAZON WEB SERVICES Y MICROSOFT AZURE",
      content: [
        { type: 'paragraph', text: '<strong>Amazon Web Services (AWS)</strong> y <strong>Microsoft Azure</strong> son los dos principales proveedores de servicios en la nube. Permiten a los usuarios desplegar y gestionar sistemas operativos como Windows y Linux en máquinas virtuales (ej. <strong>Amazon EC2</strong>, <strong>Azure Virtual Machines</strong>) de forma escalable y segura, siendo la base de la infraestructura como servicio (IaaS).' }
      ]
    },
    // ... El resto de apartados se mantienen fieles al PDF ...
    { id: 't68_s6', title: "6. APLICACIÓN DE LOS CONTENIDOS", shortTitle: "6. Aplicación", icon: "application", content: [ { type: 'paragraph', text: 'El conocimiento del software de sistemas en red es vital. En FP se estudia en módulos como "Sistemas Operativos en Red". En el ámbito laboral, es esencial para roles de SysAdmin, especialistas en redes y seguridad, para instalar, configurar y gestionar software como servidores web (Apache, Nginx), bases de datos (MySQL, PostgreSQL) y herramientas de monitorización.' } ] },
    { id: 't68_s7', title: "7. CONCLUSIÓN", shortTitle: "7. Conclusión", icon: 'conclusion', content: [ { type: 'paragraph', text: 'En este tema se ha presentado una visión global del software de sistemas en red, destacando sus funciones y servicios. Se ha analizado la importancia de los SO de red, tanto tradicionales como en la nube, y cómo permiten la gestión de recursos y seguridad. Comprender estas soluciones es fundamental para optimizar el rendimiento y asegurar la continuidad de cualquier red.' } ] },
    { id: 't68_s8', title: "8. BIBLIOGRAFÍA", shortTitle: "8. Bibliografía", icon: 'bibliography', content: [ { type: 'bibliography', items: [ { text: 'Tanenbaum, A. (2021). <em>Computer Networks</em>. Pearson.' }, { text: 'Núñez, M. (2019). <em>Sistemas operativos en red</em>. Síntesis.' }, { text: 'Amazon Web Services (AWS)', url: 'https://aws.amazon.com/es/' }, { text: 'Microsoft Azure', url: 'https://azure.microsoft.com/es-es/' } ] } ] }
  ],
  glossary: [
    { term: 'Software de Red', definition: 'Conjunto de programas que gestionan los recursos de una red y proporcionan servicios sobre ella. Incluye drivers, SO y aplicaciones de gestión.' },
    { term: 'Driver de Red (NIC Driver)', definition: 'Software que permite al sistema operativo comunicarse con el hardware de la tarjeta de red.' },
    { term: 'NOS (Network Operating System)', definition: 'Sistema operativo diseñado para soportar la compartición de archivos, impresoras y otros recursos en una red.' },
    { term: 'Cliente-Servidor', definition: 'Arquitectura de red donde un programa (cliente) solicita servicios a otro programa (servidor).' },
    { term: 'On-Premise', definition: 'Infraestructura de TI que se aloja y se ejecuta en las instalaciones físicas de una organización, en lugar de en la nube.' },
    { term: 'Cloud Computing', definition: 'Modelo de entrega de servicios de computación a través de Internet (la "nube"), como IaaS, PaaS y SaaS.' },
    { term: 'IaaS (Infraestructura como Servicio)', definition: 'Modelo de cloud computing que ofrece recursos de computación virtualizados (servidores, redes, almacenamiento) a través de Internet.' }
  ]
};