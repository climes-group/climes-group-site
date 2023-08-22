import { memo } from "react";
import Switch from "react-switch";
import { Handle, Position } from "reactflow";
import styled from "styled-components";
import { THEME } from "../../../utils";

const Label = styled.div`
  padding: 10px 20px;
  display: flex;
`;

function getTextColourForCategory(category) {
  switch (category) {
    case "vulnerability":
      return "white";
    case "hazard":
      return "white";
    default:
      return "black";
  }
}

function getBgColourForCategory(category) {
  switch (category) {
    case "climate":
      return "white";
    case "vulnerability":
      return "blue";
    case "weather":
      return "lightblue";
    case "hazard":
      return "green";
    default:
      return "white";
  }
}

const Node = styled.div`
  display: relative;
  padding: 10px 20px;
  border-radius: 5px;
  padding-top: 2em;
  min-width: 125px;
  .react-flow__handle {
    //background: ${(props) => props.theme.primary};
    width: 8px;
    height: 10px;
    border-radius: 3px;
  }
  color: ${(props) => getTextColourForCategory(props.nodeType)};

  background: ${(props) => getBgColourForCategory(props.nodeType)};
  border: 2px solid ${THEME.PRIMARY};
`;

const TopLeft = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
`;

export default memo(({ data, selected }) => {
  const { isActive, category, nodeType } = data;
  return (
    <Node
      isActive={isActive}
      selected={selected}
      labelId={data.label}
      nodeType={nodeType}
    >
      <TopLeft>
        <Switch checked={isActive} />
      </TopLeft>
      <Label>{data.label}</Label>
      {category ? <div>({category})</div> : null}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Node>
  );
});
