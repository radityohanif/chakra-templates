import ExampleLayouts from "@/layouts/example";
import Example from "@/layouts/public/fragments/example";
import MultiTabs from "./templates/multi-tabs";
import Simple from "./templates/simple";

export default function RegisterFormsApplicationUiPages() {
  return (
    <ExampleLayouts>
      <Example
        children={<Simple />}
        title="simple"
        sourceCodeRepository="src/pages/application-ui/forms/register/templates/simple.tsx"
      />
      <Example
        children={<MultiTabs />}
        title="multi tabs"
        sourceCodeRepository="src/pages/application-ui/forms/register/templates/multi-tabs.tsx"
      />
    </ExampleLayouts>
  );
}
