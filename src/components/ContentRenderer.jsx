import React from 'react';

// 1. Importaciones de todos los componentes de bloque existentes
import Paragraph from './blocks/Paragraph';
import NestedList from './blocks/NestedList';
import DefinitionList from './blocks/DefinitionList';
import SimpleList from './blocks/SimpleList';
import Subheading from './blocks/Subheading';
import Table from './blocks/Table';
import Diagram from './blocks/Diagram';
import ResourceLink from './blocks/ResourceLink';
import Bibliography from './blocks/Bibliography';
import Equation from './blocks/Equation';
import FlowDiagram from './blocks/FlowDiagram';
import TableOfContents from './blocks/TableOfContents';
import CodeBlock from './blocks/CodeBlock';
import CodeExample from './blocks/CodeExample';

// --- AÑADIMOS LAS IMPORTACIONES DE LOS NUEVOS COMPONENTES ---
import KeyConcept from './blocks/KeyConcept';
import PracticalExample from './blocks/PracticalExample';
import Quiz from './blocks/Quiz';
import InteractiveElement from './blocks/InteractiveElement';
import InteractiveDiagram from './blocks/InteractiveDiagram';

// 2. Mapa que asocia el 'type' de los datos con su componente React
const componentMap = {
  paragraph: Paragraph,
  nestedList: NestedList,
  definitionList: DefinitionList,
  list: SimpleList,
  subheading: Subheading,
  table: Table,
  diagram: Diagram,
  resourceLink: ResourceLink,
  bibliography: Bibliography,
  equation: Equation,
  flowDiagram: FlowDiagram,
  tableOfContents: TableOfContents,
  code: CodeBlock,
  codeExample: CodeExample,
  // --- AÑADIMOS LOS NUEVOS TIPOS AL MAPA ---
  keyConcept: KeyConcept,
  practicalExample: PracticalExample,
  quiz: Quiz,
  interactiveElement: InteractiveElement,
  interactiveDiagram: InteractiveDiagram,
};

// 3. El componente principal que recibe los bloques de contenido y la función de navegación
const ContentRenderer = ({ contentBlocks, onSectionClick }) => {
  if (!contentBlocks || contentBlocks.length === 0) {
    return <p>Esta sección no tiene contenido.</p>;
  }

  return (
    <div>
      {contentBlocks.map((block, index) => {
        // Busca el componente correcto en el mapa
        const Component = componentMap[block.type];

        // Si no encuentra un componente para un tipo, muestra un error útil
        if (!Component) {
          console.warn(`No se encontró un componente para el tipo de bloque: "${block.type}"`);
          return <div key={index} style={{color: 'red', border: '1px solid red', padding: '1rem', margin: '1rem 0'}}>Error: Componente para el bloque de tipo '<strong>{block.type}</strong>' no encontrado.</div>;
        }

        // Creamos un objeto base con las props que todos los componentes reciben
        const props = {
          key: index,
          ...block
        };

        // Si el componente es nuestra tabla de contenidos, añadimos la prop 'onSectionClick'
        if (block.type === 'tableOfContents') {
          props.onSectionClick = onSectionClick;
        }
        
        // Renderizamos el componente pasándole el objeto de props
        return <Component {...props} />;
      })}
    </div>
  );
};

export default ContentRenderer;