// En: src/components/blocks/NestedList.jsx
import React from 'react';
import BlockWrapper from './BlockWrapper';
import HTMLRenderer from '../common/HTMLRenderer'; // <-- Importamos el nuevo componente

const NestedList = ({ type, items }) => {
  return (
    <BlockWrapper type={type}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <HTMLRenderer htmlString={item.text} /> {/* <-- Aquí está el cambio */}
            {item.subItems && (
              <ul>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <HTMLRenderer htmlString={subItem} /> {/* <-- Y aquí también */}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </BlockWrapper>
  );
};

export default NestedList;