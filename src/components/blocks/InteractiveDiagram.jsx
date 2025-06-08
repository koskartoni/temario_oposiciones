// En: src/components/blocks/InteractiveDiagram.jsx
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaSitemap } from 'react-icons/fa';

const InteractiveDiagram = ({ title, flow }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, flow.length - 1));
  };

  const goToPrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const step = flow[currentStep];

  return (
    <div className="interactive-diagram-card">
      <div className="interactive-diagram-header">
        <FaSitemap />
        <h4>{title}</h4>
      </div>
      <div className="interactive-diagram-content">
        <div className="step-indicator">
          Paso {currentStep + 1} de {flow.length}
        </div>
        <div className="step-content">
          <h5 className="step-title">{step.step}</h5>
          <p className="step-description">{step.description}</p>
        </div>
        <div className="step-controls">
          <button onClick={goToPrev} disabled={currentStep === 0}>
            <FaArrowLeft /> Anterior
          </button>
          <button onClick={goToNext} disabled={currentStep === flow.length - 1}>
            Siguiente <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDiagram;