import { memo } from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";
import { THEME } from "../../../utils";

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
      return "darkblue";
    case "weather":
      return "lightblue";
    case "hazard":
      return "green";
    default:
      return "white";
  }
}

const Node = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  .react-flow__handle {
    //background: ${(props) => props.theme.primary};
    width: 8px;
    height: 10px;
    border-radius: 3px;
  }
  color: ${(props) => getTextColourForCategory(props.category)};
  background: ${(props) =>
    props.isActive ? "fff" : getBgColourForCategory(props.category)};
  border: 2px solid ${THEME.PRIMARY};
`;

export default memo(({ data, selected }) => {
  const { isActive, category } = data;
  console.log(category);
  return (
    <Node
      isActive={isActive}
      selected={selected}
      labelId={data.label}
      category={category}
    >
      <div style={{ padding: "10px 20px" }}>{data.label}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Node>
  );
});
