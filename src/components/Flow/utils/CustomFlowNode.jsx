import { memo } from "react";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data }) => {
  return (
    <>
      <div style={{ padding: "10px 20px" }}>{data.label}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(CustomNode);
