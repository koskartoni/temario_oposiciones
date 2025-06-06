// En: src/components/ContentRenderer.jsx
import React from 'react';

// 1. Importa todos los componentes de bloque que has creado
import Paragraph from './blocks/Paragraph';
import NestedList from './blocks/NestedList';
import DefinitionList from './blocks/DefinitionList';
import SimpleList from './blocks/SimpleList';

// 2. Crea un mapa que asocia el 'type' de tus datos con el componente correspondiente
const componentMap = {
  paragraph: Paragraph,
  nestedList: NestedList,
  definitionList: DefinitionList,
  list: SimpleList,
  // Aquí añadiremos más componentes a medida que los necesitemos
};

// 3. El componente principal que recibe los bloques de contenido
const ContentRenderer = ({ contentBlocks }) => {
  if (!contentBlocks || contentBlocks.length === 0) {
    return <p>Esta sección no tiene contenido.</p>;
  }

  return (
    <div>
      {contentBlocks.map((block, index) => {
        // Busca el componente correcto en el mapa
        const Component = componentMap[block.type];

        // Si no encuentra un componente para un tipo, muestra un error
        if (!Component) {
          console.warn(`No se encontró un componente para el tipo de bloque: "${block.type}"`);
          return <div key={index} style={{color: 'red'}}>Error: Bloque desconocido '{block.type}'</div>;
        }

        // Renderiza el componente, pasándole todas las propiedades del bloque de datos
        // (ej: a Paragraph le pasa 'text', a NestedList le pasa 'items')
        return <Component key={index} {...block} />;
      })}
    </div>
  );
};

export default ContentRenderer;