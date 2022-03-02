import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";
import { dataSet1, dataSet2, tree1 } from "./data";
import "./styles.css";
import { treeToSchema } from "./utils";

// the diagram model
const initialSchema1 = createSchema(dataSet1);
const initialSchema2 = createSchema(dataSet2);

export const UncontrolledDiagram = () => {
  // create diagrams schema
  const [schema1, { onChange: onChange1 }] = useSchema(initialSchema1);
  const [schema2, { onChange: onChange2 }] = useSchema(initialSchema2);

  
  const transformedTree = treeToSchema(tree1);
  
  const [schema3, { onChange: onChange3 }] = useSchema(transformedTree);
  console.log("schema2", initialSchema2, schema2);
  console.log("schema1", transformedTree, schema3);

  return (
    <div style={{ height: "22.5rem", width: "75%" }}>
      <Diagram schema={schema1} onChange={onChange1} />
      <Diagram schema={schema2} onChange={onChange2} />
      <Diagram schema={schema3} onChange={onChange3} />
    </div>
  );
};
