const climateNodeData = [
  {
    id: "c1",
    data: { label: "Increased summer temperature", category: "stress" },
  },
  { id: "c2", data: { label: "Heatwave", category: "shock" } },
  {
    id: "c3",
    data: { label: "Decreased summer precipitation", category: "stress" },
  },
  {
    id: "c4",
    data: {
      label: "Increased winter/spring precipitation",
      category: "stress",
    },
  },
  { id: "c5", data: { label: "Intensified weather", category: "shock" } },
  { id: "c6", data: { label: "Sea level rise", category: "stress" } },
];

const weatherNodeData = [
  { id: "w1", data: { label: "Hotter summers" } },
  { id: "w2", data: { label: "Wildfire" } },
  { id: "w3", data: { label: "Drought" } },
  { id: "w4", data: { label: "Extreme storms" } },
  { id: "w5", data: { label: "Pluvial flooding" } },
  { id: "w6", data: { label: "Fluvial flood" } },
  { id: "w7", data: { label: "Coastal flood" } },
];

const hazardNodeData = [
  { id: "h1", data: { label: "Overheating" } },
  { id: "h2", data: { label: "Interface fire" } },
  { id: "h3", data: { label: "Air Quality" } },
  { id: "h4", data: { label: "Water shortage" } },
  { id: "h5", data: { label: "Wind/Hail/Ice/Rain/Lightning/Tornado" } },
  { id: "h6", data: { label: "Transportation disruption" } },
  { id: "h7", data: { label: "Flood" } },
];

const vulnerabilityDataNodes = [
  { id: "v1", data: { label: "Structure/Enclosure" } },
  { id: "v2", data: { label: "Heating" } },
  { id: "v3", data: { label: "Cooling" } },
  { id: "v4", data: { label: "Ventilation" } },
  { id: "v5", data: { label: "Water" } },
  { id: "v6", data: { label: "Power" } },
  { id: "v7", data: { label: "Lighting" } },
  { id: "v8", data: { label: "Telecom" } },
  { id: "v9", data: { label: "Fire/Safety" } },
  { id: "v10", data: { label: "Goods" } },
  { id: "v11", data: { label: "Sewage" } },
];

export const nodes = [
  ...climateNodeData.map((node, i) => ({
    ...node,
    data: {
      ...node.data,
      category: "climate",
    },
    type: "custom",
    position: { x: 0, y: 75 * i },
  })),
  ...weatherNodeData.map((node, i) => ({
    ...node,
    type: "custom",
    data: {
      ...node.data,
      category: "weather",
    },
    position: { x: 500, y: 75 * i },
  })),
  ...hazardNodeData.map((node, i) => ({
    ...node,
    data: {
      ...node.data,
      category: "hazard",
    },
    type: "custom",
    position: { x: 1000, y: 75 * i },
  })),
  ...vulnerabilityDataNodes.map((node, i) => ({
    ...node,
    data: {
      ...node.data,
      category: "vulnerability",
    },
    type: "custom",
    position: { x: 1500, y: 75 * i },
  })),
];

const allEdges = [
  "c1-w1",
  "c1-w2",
  "c1-w3",
  "c2-w1",
  "c2-w2",
  "c3-w2",
  "c4-w5",
  "c4-w6",
  "c5-w4",
  "c5-w5",
  "c5-w6",
  "c5-w7",
  "c6-w7",
  "w1-h1",
  "w2-h2",
  "w2-h3",
  "w2-h6",
  "w3-h4",
  "w4-h5",
  "w5-h6",
  "w5-h7",
  "w6-h6",
  "w6-h7",
  "w7-h7",
  "h1-v3",
  "h2-v1",
  "h2-v6",
];

export const edges = [
  ...allEdges.map((edge) => {
    const [source, target] = edge.split("-");
    return {
      id: edge,
      source,
      target,
      //type: "custom",
    };
  }),
];