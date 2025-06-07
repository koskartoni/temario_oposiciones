// En: src/components/blocks/SimpleList.jsx
import React from 'react';
import BlockWrapper from './BlockWrapper';
import HTMLRenderer from '../common/HTMLRenderer'; // <-- Importamos el nuevo componente

const SimpleList = ({ type, items }) => {
  return (
    <BlockWrapper type={type}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <HTMLRenderer htmlString={item} /> {/* <-- Aquí está el cambio */}
          </li>
        ))}
      </ul>
    </BlockWrapper>
  );
};

export default SimpleList;