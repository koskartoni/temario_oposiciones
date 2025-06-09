// En: src/components/blocks/Diagram.jsx
import React from 'react';
import BlockWrapper from './BlockWrapper';

const Diagram = ({ type, title, imageUrl, structure }) => {
  return (
    <BlockWrapper type={type}>
      <div className="diagram-content-wrapper">
        {title && <h4>{title}</h4>}
        {imageUrl ? (
          <img src={imageUrl} alt={title || 'Diagrama del tema'} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        ) : (
          /* Código anterior para diagramas de flujo simples, por si se usa en otro lugar */
          structure && (
            <div className="diagram-flow">
              {structure.columns.map(col => <div key={col} className="diagram-col-header">{col}</div>)}
              {structure.flow.flat().map((item, index) => (
                item 
                  ? <div key={index} className="diagram-item">{item}</div> 
                  : <div key={index} className="diagram-arrow">→</div>
              ))}
            </div>
          )
        )}
      </div>
    </BlockWrapper>
  );
};

export default Diagram;