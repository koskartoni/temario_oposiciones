// En: src/components/blocks/KeyConcept.jsx
import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

// Este componente no usará BlockWrapper para tener un estilo distintivo.
const KeyConcept = ({ title, text, items }) => {
  return (
    <div className="key-concept-card">
      <div className="key-concept-header">
        <FaLightbulb />
        <h4>{title}</h4>
      </div>
      <div className="key-concept-content">
        {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
        {items && (
          <ul>
            {items.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default KeyConcept;