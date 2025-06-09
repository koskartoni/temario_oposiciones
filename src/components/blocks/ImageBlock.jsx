// En: src/components/blocks/ImageBlock.jsx
import React from 'react';

// Un componente simple para mostrar una imagen con un pie de foto opcional.
// No usará BlockWrapper para no tener el estilo de tarjeta por defecto.
const ImageBlock = ({ src, alt, caption }) => {
  return (
    <figure className="image-block-container">
      <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      {caption && <figcaption className="image-caption">{caption}</figcaption>}
    </figure>
  );
};

export default ImageBlock;