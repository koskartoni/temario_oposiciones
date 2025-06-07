// En: src/components/blocks/BlockWrapper.jsx
import React from 'react';
// Importamos algunos iconos que usaremos
import { FaParagraph, FaListUl, FaInfoCircle, FaTable, FaProjectDiagram, FaLink, FaBook } from 'react-icons/fa';
import { FaCalculator, FaSitemap } from 'react-icons/fa';

// Mapa que asocia el tipo de bloque con un icono

const iconMap = {
  paragraph: <FaParagraph />,
  list: <FaListUl />,
  nestedList: <FaListUl />,
  definitionList: <FaInfoCircle />,
  table: <FaTable />,
  diagram: <FaProjectDiagram />,
  resourceLink: <FaLink />,
  bibliography: <FaBook />,
  subheading: null, // Los subtítulos no llevarán tarjeta
  equation: <FaCalculator />,
  flowDiagram: <FaSitemap />,
};

const BlockWrapper = ({ type, children }) => {
  const icon = iconMap[type];

  // Si no hay icono (como en un subheading), no aplicamos el estilo de tarjeta.
  if (!icon) {
    return <>{children}</>;
  }

  return (
    <div className="block-card">
      <div className="block-icon">{icon}</div>
      <div className="block-content">{children}</div>
    </div>
  );
};

export default BlockWrapper;