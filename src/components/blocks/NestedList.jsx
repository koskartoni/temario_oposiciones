// En: src/components/blocks/NestedList.jsx
import React from 'react';

const NestedList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.text}
          {item.subItems && (
            <ul>
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NestedList;