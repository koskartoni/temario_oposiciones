// En: src/components/common/HTMLRenderer.jsx
import React from 'react';

// Este componente recibe un string de HTML y lo renderiza de forma segura.
// El 'tagName' nos permite decidir si el contenedor será un 'span', 'div', etc.
const HTMLRenderer = ({ htmlString, tagName = 'span' }) => {
  const Tag = tagName; // React requiere que los nombres de componentes empiecen con mayúscula
  
  if (!htmlString) {
    return null;
  }

  return <Tag dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default HTMLRenderer;