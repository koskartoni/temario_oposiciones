// En: src/components/common/PrevSectionButton.jsx
import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import useNearScreen from '../../hooks/useNearScreen.jsx';

const PrevSectionButton = ({ prev, onNavigate }) => {
  // Usamos el mismo hook, pero la lógica de visibilidad es la INVERSA
  const { isNearScreen, fromRef } = useNearScreen({ once: false });
  
  return (
    <>
      {/* Este div invisible se pone al PRINCIPIO del contenido */}
      <div ref={fromRef} style={{ height: '1px' }}></div>
      
      {/* El botón solo se muestra si hay sección anterior y NO estamos viendo el principio */}
      {!isNearScreen && prev && (
        <button className="prev-section-btn" onClick={() => onNavigate(prev.id)}>
          <FaAngleUp />
          <small>Anterior</small>
          <span>{prev.shortTitle}</span>
        </button>
      )}
    </>
  );
};

export default PrevSectionButton;