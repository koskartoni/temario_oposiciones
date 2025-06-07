// En: src/components/ContentRenderer.jsx
import React from 'react';

// 1. Importa todos los componentes de bloque
import Paragraph from './blocks/Paragraph';
import NestedList from './blocks/NestedList';
import DefinitionList from './blocks/DefinitionList';
import SimpleList from './blocks/SimpleList';
import Subheading from './blocks/Subheading'; // Nuevo
import Table from './blocks/Table'; // Nuevo
import Diagram from './blocks/Diagram'; // Nuevo
import ResourceLink from './blocks/ResourceLink'; // Nuevo
import Bibliography from './blocks/Bibliography'; // Nuevo
import Equation from './blocks/Equation';
import FlowDiagram from './blocks/FlowDiagram';

// 2. Actualiza el mapa
const componentMap = {
  paragraph: Paragraph,
  nestedList: NestedList,
  definitionList: DefinitionList,
  list: SimpleList,
  subheading: Subheading,         // Nuevo
  table: Table,                   // Nuevo
  diagram: Diagram,               // Nuevo
  resourceLink: ResourceLink,     // Nuevo
  bibliography: Bibliography,
  equation: Equation,
  flowDiagram: FlowDiagram,    // Nuevo
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