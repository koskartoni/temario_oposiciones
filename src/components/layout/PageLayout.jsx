// En: src/components/layout/PageLayout.jsx
import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

// Acepta la nueva prop 'contentRef'
const PageLayout = ({ sidebarContent, children, isSidebarOpen, onCloseSidebar, topDetector, bottomDetector, contentRef }) => {
  const sidebarClassName = `sidebar-mobile ${isSidebarOpen ? 'open' : ''}`;
  const overlayClassName = `sidebar-overlay ${isSidebarOpen ? 'open' : ''}`;

  return (
    <div className="app-container">
      <div className={overlayClassName} onClick={onCloseSidebar}></div>
      <aside className={sidebarClassName}>{sidebarContent}</aside>
      
      <div className="main-layout-container">
        <PanelGroup direction="horizontal" className="desktop-panels">
          <Panel defaultSize={20} minSize={15} className="sidebar-panel-desktop">
            <aside className="sidebar-desktop">{sidebarContent}</aside>
          </Panel>
          <PanelResizeHandle className="resize-handle" />
          <Panel>
            {/* Asignamos la ref al elemento main */}
            <main className="main-content" ref={contentRef}>
              {topDetector}
              {children}
              {bottomDetector}
            </main>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default PageLayout;