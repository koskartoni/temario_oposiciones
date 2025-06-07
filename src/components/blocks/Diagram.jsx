import React from 'react';
import BlockWrapper from './BlockWrapper';

const Diagram = ({ type, title, structure }) => {
  return (
    <BlockWrapper type={type}>
      <div className="diagram-content-wrapper">
        <h4>{title}</h4>
        <div className="diagram-flow">
          {structure.columns.map(col => <div key={col} className="diagram-col-header">{col}</div>)}
          {structure.flow.flat().map((item, index) => (
            item 
              ? <div key={index} className="diagram-item">{item}</div> 
              : <div key={index} className="diagram-arrow">→</div>
          ))}
        </div>
      </div>
    </BlockWrapper>
  );
};

export default Diagram;