// En: src/components/blocks/FlowDiagram.jsx
import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css'; // Estilos base de la librería
import BlockWrapper from './BlockWrapper';

const FlowDiagram = ({ type, title, initialNodes, initialEdges }) => {
  // React Flow usa hooks para gestionar el estado de los nodos y las aristas
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <BlockWrapper type={type}>
      <div className="flow-diagram-container">
        <h4>{title}</h4>
        <div className="flow-viewport">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView // Esta opción hace que el diagrama se ajuste al espacio disponible
            nodesDraggable={false} // Desactivamos el arrastre para el modo estudio
            nodesConnectable={false} // Desactivamos la conexión de nodos
          >
            <Controls showInteractive={false} />
            <MiniMap nodeStrokeWidth={3} zoomable pannable />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
    </BlockWrapper>
  );
};

export default FlowDiagram;
