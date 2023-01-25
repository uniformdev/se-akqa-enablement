import { ComponentProps } from "@uniformdev/canvas-react";

type MyComponentProps = ComponentProps<{
  header: string;

}>;

const MyComponent = ({header}: MyComponentProps) => (
  <div>
    <h1 className="title">No title</h1>
    <div
      className="description"
      dangerouslySetInnerHTML={{__html: header}}/>
  </div>
);

export default MyComponent;
