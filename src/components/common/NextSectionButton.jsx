// En: src/components/common/NextSectionButton.jsx
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import useNearScreen from '../../hooks/useNearScreen.jsx';

const NextSectionButton = ({ next, onNavigate }) => {
  const { isNearScreen, fromRef } = useNearScreen({ once: false });
  
  return (
    <>
      {/* Este div invisible se pone al final del contenido para detectar el final del scroll */}
      <div ref={fromRef} style={{ height: '10px' }}></div>
      
      {/* El botón solo se muestra si hay una sección siguiente y estamos cerca del final */}
      {isNearScreen && next && (
        <button className="next-section-btn" onClick={() => onNavigate(next.id)}>
          <small>Siguiente</small>
          <span>{next.shortTitle}</span>
          <FaAngleDown />
        </button>
      )}
    </>
  );
};

export default NextSectionButton;