import React from 'react';
const Diagram = ({ title, structure }) => (
  <div className="diagram">
    <h4>{title}</h4>
    <div className="diagram-flow">
      {structure.columns.map(col => <div key={col} className="diagram-col-header">{col}</div>)}
      {structure.flow.flat().map((item, index) => item ? <div key={index} className="diagram-item">{item}</div> : <div key={index} className="diagram-arrow">→</div>)}
    </div>
  </div>
);
export default Diagram;