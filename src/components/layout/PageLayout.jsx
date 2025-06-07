// En: src/components/layout/PageLayout.jsx
import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

const PageLayout = ({ sidebar, children }) => {
  return (
    <PanelGroup direction="horizontal" className="app-container">
      <Panel defaultSize={20} minSize={15}>
        <aside className="sidebar">
          {sidebar}
        </aside>
      </Panel>
      <PanelResizeHandle className="resize-handle" />
      <Panel>
        <main className="main-content">
          {children}
        </main>
      </Panel>
    </PanelGroup>
  );
};

export default PageLayout;