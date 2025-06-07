// En: src/components/blocks/Paragraph.jsx
import React from 'react';
import BlockWrapper from './BlockWrapper';

const Paragraph = ({ type, text }) => {
  return (
    <BlockWrapper type={type}>
      {/* Usamos dangerouslySetInnerHTML para renderizar etiquetas HTML como <strong> */}
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </BlockWrapper>
  );
};

export default Paragraph;