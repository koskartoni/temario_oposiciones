// En: src/components/blocks/DefinitionList.jsx
import React from 'react';

const DefinitionList = ({ items }) => {
  return (
    <dl>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <dt><strong>{item.term}</strong></dt>
          <dd>{item.definition}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default DefinitionList;