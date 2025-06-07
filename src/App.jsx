// En: src/App.jsx
import React, { useState, useEffect } from 'react';
import { FaBrain } from 'react-icons/fa';

// Importaciones
import { allThemesData } from './data/index.js';
import PageLayout from './components/layout/PageLayout.jsx';
import ContentRenderer from './components/ContentRenderer.jsx';
import IndexTrainer from './components/features/IndexTrainer.jsx';

function App() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  
  const currentThemeData = allThemesData[currentThemeIndex];
  const indexSection = {
    id: `${currentThemeData.id}-index`,
    shortTitle: "0. Índice del Tema",
    title: `Índice: ${currentThemeData.title}`,
    content: [{ type: 'tableOfContents', sections: currentThemeData.sections }]
  };
  const sectionsWithIndex = [indexSection, ...currentThemeData.sections];
  const [selectedSectionId, setSelectedSectionId] = useState(indexSection.id);
  const selectedSection = sectionsWithIndex.find(s => s.id === selectedSectionId);

  // Efecto para volver al índice al cambiar de tema
  useEffect(() => {
    const newIndexId = `${allThemesData[currentThemeIndex].id}-index`;
    setSelectedSectionId(newIndexId);
  }, [currentThemeIndex]);

  const handleThemeChange = (event) => {
    setCurrentThemeIndex(parseInt(event.target.value, 10));
  };

  const handleSectionClick = (sectionId) => {
    setSelectedSectionId(sectionId);
    setIsSidebarOpen(false);
  };

  if (isPracticeMode) {
    return <IndexTrainer sections={currentThemeData.sections} onExit={() => setIsPracticeMode(false)} />;
  }

  return (
    <PageLayout
      sidebarContent={
        <>
          <div className="sidebar-header">
            <h2>{currentThemeData.title}</h2>
            <span>{currentThemeData.version}</span>
          </div>
          <select className="theme-selector" value={currentThemeIndex} onChange={handleThemeChange}>
            {allThemesData.map((theme, index) => (
              <option key={theme.id} value={index}>{theme.title}</option>
            ))}
          </select>
          <nav className="sidebar-nav">
            <ul>
              {sectionsWithIndex.map(section => {
                const level = (section.shortTitle.match(/\./g) || []).length;
                const paddingLeft = 1 + (level * 1.5);
                return (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className={selectedSectionId === section.id ? 'active' : ''}
                      style={{ paddingLeft: `${paddingLeft}rem` }}
                      onClick={(e) => { e.preventDefault(); handleSectionClick(section.id); }}>
                      {section.shortTitle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      }
      isSidebarOpen={isSidebarOpen}
      onCloseSidebar={() => setIsSidebarOpen(false)}
    >
      <div className="main-content-header">
        <button className="menu-toggle-btn" onClick={() => setIsSidebarOpen(true)}>☰</button>
        <h1>{selectedSection?.title}</h1>
        {selectedSection?.id.endsWith('-index') && (
          <button className="practice-mode-btn" onClick={() => setIsPracticeMode(true)}>
            <FaBrain /> Practicar
          </button>
        )}
      </div>
      <ContentRenderer
        contentBlocks={selectedSection?.content}
        onSectionClick={handleSectionClick}
      />
    </PageLayout>
  );
}

export default App;