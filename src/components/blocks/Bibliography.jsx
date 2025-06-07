// En: src/components/blocks/Bibliography.jsx
import React from 'react';
import BlockWrapper from './BlockWrapper';

const Bibliography = ({ type, items }) => {
  return (
    <BlockWrapper type={type}>
      <ul className="bibliography-list">
        {items.map((item, index) => (
          <li key={index}>
            {item.url 
              ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a> 
              // Usamos dangerouslySetInnerHTML para las citas con cursiva
              : <span dangerouslySetInnerHTML={{ __html: item.text }} />
            }
          </li>
        ))}
      </ul>
    </BlockWrapper>
  );
};

export default Bibliography;