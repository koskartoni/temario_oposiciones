// En: src/components/blocks/InteractiveElement.jsx
import React from 'react';
import { FaCogs } from 'react-icons/fa';

// Este es un marcador de posición para futuras herramientas interactivas.
const InteractiveElement = ({ tool, title, description }) => {
  return (
    <div className="interactive-element-placeholder">
      <div className="interactive-element-header">
        <FaCogs />
        <h4>{title} (Herramienta Interactiva)</h4>
      </div>
      <div className="interactive-element-content">
        <p>{description}</p>
        <div className="interactive-element-notice">
          Componente interactivo <code>{tool}</code> a desarrollar aquí.
        </div>
      </div>
    </div>
  );
};

export default InteractiveElement;