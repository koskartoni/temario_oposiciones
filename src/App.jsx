import React, { useState, useEffect } from 'react';
import { FaBrain } from 'react-icons/fa';

// Importaciones
import { allThemesData } from './data/index.js';
import PageLayout from './components/layout/PageLayout.jsx';
import ContentRenderer from './components/ContentRenderer.jsx';
import IndexTrainer from './components/features/IndexTrainer.jsx';
import PrevSectionButton from './components/common/PrevSectionButton.jsx';
import NextSectionButton from './components/common/NextSectionButton.jsx';

function App() {
  // --- Estados ---
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  
  // El estado de la sección se inicializa y se actualiza en el efecto para mayor seguridad
  const [selectedSectionId, setSelectedSectionId] = useState('');

  // --- Derivación de Datos ---
  const currentThemeData = allThemesData[currentThemeIndex];
  
  const indexSection = {
    id: `${currentThemeData.id}-index`,
    shortTitle: "0. Índice del Tema",
    title: `Índice: ${currentThemeData.title}`,
    content: [{ type: 'tableOfContents', sections: currentThemeData.sections }]
  };
  
  const sectionsWithIndex = [indexSection, ...currentThemeData.sections];
  
  const currentIndex = sectionsWithIndex.findIndex(s => s.id === selectedSectionId);
  const selectedSection = sectionsWithIndex[currentIndex];
  const prevSection = currentIndex > 0 ? sectionsWithIndex[currentIndex - 1] : null;
  const nextSection = currentIndex < sectionsWithIndex.length - 1 ? sectionsWithIndex[currentIndex + 1] : null;

  // --- Efectos ---
  useEffect(() => {
    // Este efecto asegura que al cargar o cambiar de tema, siempre empecemos en la página de índice
    setSelectedSectionId(`${allThemesData[currentThemeIndex].id}-index`);
  }, [currentThemeIndex]);


  // --- Manejadores de Eventos ---
  const handleThemeChange = (event) => {
    setCurrentThemeIndex(parseInt(event.target.value, 10));
  };

  const handleSectionClick = (sectionId) => {
    setSelectedSectionId(sectionId);
    setIsSidebarOpen(false); // Cierra el menú al hacer clic en una sección (importante para móvil)
  };
  
  // --- Renderizado ---

  // Si estamos en modo práctica, renderizamos solo el entrenador
  if (isPracticeMode) {
    return <IndexTrainer sections={currentThemeData.sections} onExit={() => setIsPracticeMode(false)} />;
  }

  // Si la sección aún no se ha cargado (en el primer renderizado), mostramos un estado de carga
  if (!selectedSection) {
    return <div>Cargando...</div>; 
  }

  // Renderizado principal
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
      {/* El detector del botón 'Anterior' va al principio del contenido */}
      <PrevSectionButton prev={prevSection} onNavigate={handleSectionClick} />

      <div className="main-content-header">
        <button className="menu-toggle-btn" onClick={() => setIsSidebarOpen(true)}>☰</button>
        <h1>{selectedSection.title}</h1>
        {selectedSection.id.endsWith('-index') && (
          <button className="practice-mode-btn" onClick={() => setIsPracticeMode(true)}>
            <FaBrain /> Practicar
          </button>
        )}
      </div>

      <ContentRenderer
        contentBlocks={selectedSection.content}
        onSectionClick={handleSectionClick}
      />
      
      {/* El detector del botón 'Siguiente' va al final del contenido */}
      <NextSectionButton next={nextSection} onNavigate={handleSectionClick} />
    </PageLayout>
  );
}

export default App;