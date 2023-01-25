import { ComponentProps } from "@uniformdev/canvas-react";

type TestProps = ComponentProps<{
  header: string;

}>;

const Test = ({header}: TestProps) => (
  <div>
    <h1 className="title">No title</h1>
    <div
      className="description"
      dangerouslySetInnerHTML={{__html: header}}/>
    Some test text
  </div>
);

export default Test;
