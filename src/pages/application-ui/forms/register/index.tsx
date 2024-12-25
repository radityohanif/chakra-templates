import ExampleLayouts from "@/layouts/example";
import Example from "@/layouts/public/fragments/example";
import Simple from "./templates/simple";

export default function RegisterFormsApplicationUiPages() {
  return (
    <ExampleLayouts>
      <Example
        children={<Simple />}
        title="simple"
        sourceCodeRepository="src/pages/application-ui/forms/register/templates/simple.tsx"
      />
    </ExampleLayouts>
  );
}
