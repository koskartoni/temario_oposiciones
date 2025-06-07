// En: src/components/blocks/Equation.jsx
import React from 'react';
import { BlockMath } from 'react-katex'; // Usamos BlockMath para ecuaciones en su propia línea
import BlockWrapper from './BlockWrapper';

// Este componente recibe la ecuación en formato string de LaTeX
const Equation = ({ type, latexString }) => {
  if (!latexString) return null;

  return (
    <BlockWrapper type={type}>
      <div className="equation-container">
        <BlockMath math={latexString} />
      </div>
    </BlockWrapper>
  );
};

export default Equation;