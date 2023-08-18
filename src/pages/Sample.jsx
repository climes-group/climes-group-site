import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import peoImgUrl from "../assets/logo-peo-en.png";
import Block from "../components/content/Block";
import Figure from "../components/content/Figure";
import Row from "../components/content/Row";
import CustomFlowNode from "./utils/CustomFlowNode";
import {
  edges as initialEdges,
  nodes as initialNodes,
} from "./utils/initial-data";
import "./utils/reactflow.css";

const minimapStyle = {
  height: 120,
};

const nodeTypes = {
  custom: CustomFlowNode,
};

function Sample() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === "custom").data
        .selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  return (
    <>
      <h2>Heading level 2 - Sample content</h2>
      <Block>
        <h3>Heading level 3 - Sample figures</h3>
        <Row>
          <Figure src={peoImgUrl} label="Fig. 1. Example figure" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sodales, augue faucibus feugiat dapibus, massa lacus aliquam nulla,
            at viverra nisi ex at tortor. Nam placerat laoreet orci sed egestas.
            Curabitur in mauris finibus magna euismod volutpat sed a justo.
            Aenean ullamcorper libero id enim tincidunt ornare. Aen
          </p>
        </Row>
      </Block>
      <Block>
        <h3>Heading level 3 - Test content</h3>
        <Row>
          <Figure src={peoImgUrl} label="Fig. 1. Example figure" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sodales, augue faucibus feugiat dapibus, massa lacus aliquam nulla,
            at viverra nisi ex at tortor. Nam placerat laoreet orci sed egestas.
            Curabitur in mauris finibus magna euismod volutpat sed a justo.
            Aenean ullamcorper libero id enim tincidunt ornare. Aen
          </p>
        </Row>
      </Block>
      <Block height="500px">
        <ReactFlow
          nodes={nodes}
          edges={edgesWithUpdatedTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="top-right"
          nodeTypes={nodeTypes}
        >
          <MiniMap style={minimapStyle} zoomable pannable />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </Block>
    </>
  );
}

export default Sample;
