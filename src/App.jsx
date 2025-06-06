// En: src/App.jsx
import ContentRenderer from './components/ContentRenderer.jsx';
import React, { useState } from 'react';

// 1. Importamos nuestros datos y el layout
import { allThemesData } from './data/index.js';
import PageLayout from './components/layout/PageLayout.jsx';

function App() {
    // 2. Creamos estados para saber qué tema y sección están seleccionados
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0); // Empezamos con el primer tema (índice 0)
    const [selectedSectionId, setSelectedSectionId] = useState(allThemesData[0].sections[0].id); // Y la primera sección del primer tema

    // 3. Obtenemos los datos completos del tema y la sección actual basándonos en el estado
    const currentThemeData = allThemesData[currentThemeIndex];
    const selectedSection = currentThemeData.sections.find(s => s.id === selectedSectionId);

    // 4. Funciones para cambiar el estado cuando el usuario interactúa
    const handleThemeChange = (event) => {
        const newThemeIndex = parseInt(event.target.value, 10);
        setCurrentThemeIndex(newThemeIndex);
        // Al cambiar de tema, seleccionamos automáticamente su primera sección
        setSelectedSectionId(allThemesData[newThemeIndex].sections[0].id);
    };

    const handleSectionClick = (sectionId) => {
        setSelectedSectionId(sectionId);
    };

    // 5. Construimos el JSX que se va a renderizar
    return (
        <PageLayout
            // Pasamos la barra lateral como una prop
            sidebar={
                <>
                    <div className="sidebar-header">
                        <h2>{currentThemeData.name}</h2>
                        <span>{currentThemeData.version}</span>
                    </div>

                    <select className="theme-selector" value={currentThemeIndex} onChange={handleThemeChange}>
                        {allThemesData.map((theme, index) => (
                            <option key={theme.id} value={index}>
                                {theme.name}
                            </option>
                        ))}
                    </select>

                    <nav className="sidebar-nav">
                        <ul>
                            {currentThemeData.sections.map(section => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        className={selectedSectionId === section.id ? 'active' : ''}
                                        onClick={(e) => {
                                            e.preventDefault(); // Evita que la página recargue
                                            handleSectionClick(section.id);
                                        }}
                                    >
                                        {section.shortTitle}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </>
            }
        >
            {/* Esto es el contenido principal, que va como 'children' a PageLayout */}
            {selectedSection ? (
                <article>
                    <h1>{selectedSection.title}</h1>
                    <ContentRenderer contentBlocks={selectedSection.content} />
                </article>
            ) : (
                <p>Selecciona una sección.</p>
            )}
        </PageLayout>
    );
}

export default App;