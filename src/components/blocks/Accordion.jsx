import React, { useState } from 'react';
import BlockWrapper from './BlockWrapper';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Accordion = ({ type, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BlockWrapper type={type}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{isOpen ? <FaChevronDown /> : <FaChevronRight />}</span>
        <strong>{title}</strong>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </BlockWrapper>
  );
};
export default Accordion;