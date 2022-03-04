import { DiagramSchema } from "beautiful-react-diagrams/@types/DiagramSchema";
export interface ITree {
  id: string;
  name: string;
  children?: ITree[];
}

// a function that transform an ITree into a Partial<DiagramSchema<unknown>>
// that can be used by the Diagram component
export function treeToSchema(tree: ITree): DiagramSchema<unknown> {
  let newSchema: Partial<DiagramSchema<unknown>> = { nodes: [], links: [] };

  if (newSchema.nodes)
    newSchema.nodes.push({
      id: "node-" + tree.id,
      content: "node " + tree.name,
      coordinates: [0, 0],
    });

  if (tree.children) {
    tree.children.forEach((child, index) => {
      if (newSchema && newSchema.links && newSchema.nodes) {
        console.log(index + newSchema.nodes.length + 100);
        newSchema.nodes.push({
          id: "node-" + child.id,
          content: "node " + child.id,
          coordinates: [index + newSchema.nodes.length + newSchema.nodes.length*100, 100],
          disableDrag: true,
        });
        // add parent child relationship
        newSchema.links.push({
          input: "node-" + tree.id,
          output: "node-" + child.id,
        });
      }
    });
  }

  return newSchema as DiagramSchema<unknown>;
}
