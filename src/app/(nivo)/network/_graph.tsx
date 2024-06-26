"use client";

import React, { useRef } from "react";
import { GraphCanvas, Node, Edge, useSelection, GraphCanvasRef } from "reagraph";

const GraphComponent: React.FC = () => {
  const nodes: Node[] = [
    {
      id: "1",
      label: "1",
    },
    {
      id: "2",
      label: "2",
    },
  ];

  const edges: Edge[] = [
    {
      source: "1",
      target: "2",
      id: "1-2",
      label: "1-2",
    },
    {
      source: "2",
      target: "1",
      id: "2-1",
      label: "2-1",
    },
  ];

  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    selections,
    onNodeClick,
    onCanvasClick
  } = useSelection({
    ref: graphRef,
    nodes: nodes,
    edges: edges
  });

  return (
    <div className="w-full h-full">
  <GraphCanvas ref={graphRef} nodes={complexNodes} edges={complexEdges} selections={selections} onNodeClick={onNodeClick} onCanvasClick={onCanvasClick} />
    </div>
  );
};

export default GraphComponent;
