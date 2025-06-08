// En: src/components/blocks/PracticalExample.jsx
import React from 'react';
import { FaPlug } from 'react-icons/fa';

// Tampoco usará BlockWrapper para diferenciarse.
const PracticalExample = ({ title, text }) => {
  return (
    <div className="practical-example-card">
      <div className="practical-example-header">
        <FaPlug />
        <h5>{title}</h5>
      </div>
      <div className="practical-example-content">
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};

export default PracticalExample;