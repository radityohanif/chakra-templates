import ExampleLayouts from "@/layouts/example";
import Example from "@/layouts/public/fragments/example";
import Simple from "./templates/simple";

export default function LoginFormsApplicationUiPages() {
  return (
    <ExampleLayouts>
      <Example children={<Simple />} title="simple" />
    </ExampleLayouts>
  );
}
