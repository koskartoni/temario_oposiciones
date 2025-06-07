// En: src/components/blocks/DefinitionList.jsx
import React from 'react';
import BlockWrapper from './BlockWrapper';
import HTMLRenderer from '../common/HTMLRenderer'; // <-- Importamos el nuevo componente

const DefinitionList = ({ type, items }) => {
  return (
    <BlockWrapper type={type}>
      <dl>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <dt><strong>{item.term}</strong></dt>
            {/* Aplicamos el renderer a la definición */}
            <dd><HTMLRenderer htmlString={item.definition} tagName="span" /></dd>
          </React.Fragment>
        ))}
      </dl>
    </BlockWrapper>
  );
};

export default DefinitionList;