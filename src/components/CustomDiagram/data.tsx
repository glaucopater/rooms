import { DiagramSchema } from "beautiful-react-diagrams/@types/DiagramSchema";
import React from "react";
import { DetailedReactHTMLElement } from "react";
import { ITree } from "./utils";

export const CustomNode = (props: any) => {
  const { inputs } = props;

  return (
    <div style={{ background: "#717EC3", borderRadius: "10px" }}>
      <div style={{ padding: "10px", color: "white" }}>Custom Node</div>
      <button>click</button>
      {/*
      <div style={{ marginTop: "20px" }}>
        {inputs.map(
          (
            port: DetailedReactHTMLElement<
              { style: { width: string; height: string; background: string } },
              HTMLElement
            >
          ) =>
            React.cloneElement(port, {
              style: { width: "50px", height: "25px", background: "#1B263B" },
            })
        )}
      </div>
      */}
    </div>
  );
};

export const dataSet1: Partial<DiagramSchema<unknown>> = {
  nodes: [
    { id: "node-1", content: "Node 1", coordinates: [250, 60] },
    { id: "node-2", content: "Node 2", coordinates: [100, 200] },
    { id: "node-3", content: "Node 3", coordinates: [250, 220] },
    { id: "node-4", content: "Node 4", coordinates: [400, 200] },
  ],
  links: [
    { input: "node-1", output: "node-2" },
    { input: "node-1", output: "node-3" },
    { input: "node-1", output: "node-4" },
  ],
};

export const dataSet2: Partial<DiagramSchema<unknown>> = {
  nodes: [
    { id: "node-0", content: "Root", coordinates: [250, 60] },
    { id: "node-1", content: "Child Node 1", coordinates: [100, 200] },
    { id: "node-2", content: "Child Node 2", coordinates: [250, 220] },
    {
      id: "node-4",
      content: "Child Node 3",
      render: CustomNode,
      coordinates: [450, 200],
    },
  ],
  links: [
    { input: "node-0", output: "node-1" },
    { input: "node-0", output: "node-2" },
    //  { input: "node-0", output: "node-3" },
    { input: "node-0", output: "node-4" },
  ],
};

export const tree1: ITree = {
  id: "0",
  name: "root",
  children: [
    {
      id: "1",
      name: "child1",
      children: [
        {
          id: "1.1",
          name: "child1.1",
          children: [
            {
              id: "1.1.1",
              name: "child1.1.1",
              children: [
                {
                  id: "1.1.1.1",
                  name: "child1.1.1.1",
                },
              ],
            },
            {
              id: "1.1.2",
              name: "child1.1.2",
              children: [
                {
                  id: "1.1.2.1",
                  name: "child1.1.2.1",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "child2",
    }

  ],
};
