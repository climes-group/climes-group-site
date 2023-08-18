const defaultNodeStyle = {
  border: "2px solid #ff0071",
  background: "white",
  borderRadius: 20,
};

export const nodes = [
  {
    id: "red",
    type: "custom",
    data: {
      label: "Red",
    },
    position: { x: 0, y: 0 },
    style: defaultNodeStyle,
  },
  {
    id: "blue",
    type: "custom",
    data: {
      label: "Blue",
    },
    position: { x: 0, y: 50 },
    style: defaultNodeStyle,
  },
  {
    id: "yellow",
    type: "custom",
    data: {
      label: "Yellow",
    },
    position: { x: 0, y: 100 },
    style: defaultNodeStyle,
  },
  {
    id: "green",
    type: "custom",
    data: {
      label: "Green",
    },
    position: { x: 250, y: 200 },
    style: defaultNodeStyle,
  },
  {
    id: "orange",
    type: "custom",
    data: {
      label: "Orange",
    },
    position: { x: 250, y: 100 },
    style: defaultNodeStyle,
  },
  {
    id: "purple",
    type: "custom",
    data: {
      label: "Purple",
    },
    position: { x: 250, y: 0 },
    style: defaultNodeStyle,
  },
  {
    id: "brown",
    type: "custom",
    data: {
      label: "Brown",
    },
    position: { x: 500, y: 0 },
    style: defaultNodeStyle,
  },
];

export const edges = [
  {
    id: "red-orange",
    source: "red",
    target: "orange",
    animated: true,
  },
  {
    id: "red-purple",
    source: "red",
    target: "purple",
  },
  {
    id: "blue-green",
    source: "blue",
    target: "green",
  },
  {
    id: "blue-purple",
    source: "blue",
    target: "purple",
  },
  {
    id: "yellow-green",
    source: "yellow",
    target: "green",
    animated: true,
  },
  {
    id: "yellow-orange",
    source: "yellow",
    target: "orange",
    animated: true,
  },
  {
    id: "orange-brown",
    source: "orange",
    target: "brown",
    animated: true,
  },
  {
    id: "green-brown",
    source: "green",
    target: "brown",
    animated: true,
  },
  { id: "e1-3", source: "1", target: "3", animated: true },
];
