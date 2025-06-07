// En: src/components/layout/PageLayout.jsx
import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

const PageLayout = ({ sidebarContent, children, isSidebarOpen, onCloseSidebar }) => {
  const sidebarClassName = `sidebar-mobile ${isSidebarOpen ? 'open' : ''}`;
  const overlayClassName = `sidebar-overlay ${isSidebarOpen ? 'open' : ''}`;

  return (
    <div className="app-container">
      {/* Elementos para el menú deslizable de móvil */}
      <div className={overlayClassName} onClick={onCloseSidebar}></div>
      <aside className={sidebarClassName}>
        {sidebarContent}
      </aside>

      {/* Layout principal que se adapta */}
      <div className="main-layout-container">
        <PanelGroup direction="horizontal">
          {/* Panel de la barra lateral de escritorio */}
          <Panel defaultSize={20} minSize={15} className="sidebar-panel-desktop">
            <div className="sidebar-desktop-content">
              {sidebarContent}
            </div>
          </Panel>
          <PanelResizeHandle className="resize-handle" />
          {/* Panel del contenido principal */}
          <Panel>
            <main className="main-content">
              {children}
            </main>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default PageLayout;