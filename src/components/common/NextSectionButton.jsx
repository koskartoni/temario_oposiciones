import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import useNearScreen from '../../hooks/useNearScreen';

const NextSectionButton = ({ next, onNavigate }) => {
  const { isNearScreen, fromRef } = useNearScreen({ once: false });
  return (
    <>
      <div ref={fromRef} style={{ height: '10px' }}></div>
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