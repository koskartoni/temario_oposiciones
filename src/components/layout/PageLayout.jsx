// En: src/components/layout/PageLayout.jsx
import React from 'react';

// Este componente recibe dos props: 'sidebar' y 'children'.
// 'sidebar' será el JSX de la barra lateral.
// 'children' será el JSX del contenido principal.
const PageLayout = ({ sidebar, children }) => {
  return (
    <div className="app-container">
      <aside className="sidebar">
        {sidebar}
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;