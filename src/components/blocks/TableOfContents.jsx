// En: src/components/blocks/TableOfContents.jsx
import React from 'react';

const TableOfContents = ({ sections, onSectionClick }) => {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    onSectionClick(sectionId);
  };

  return (
    <nav className="toc-nav">
      <ul>
        {sections.map(section => {
          const level = (section.shortTitle.match(/\./g) || []).length;
          return (
            <li key={section.id} style={{ paddingLeft: `${level * 2}rem` }}>
              {/* El enlace ahora solo contiene el TÍTULO COMPLETO */}
              <a href={`#${section.id}`} onClick={(e) => handleLinkClick(e, section.id)}>
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;