import ExampleLayouts from "@/layouts/example";
import Example from "@/layouts/public/fragments/example";
import Simple from "./templates/simple";
import FixedBackdropBlur from "./templates/fixed-backdrop-blur";

export default function NavbarNavigationsApplicationUiPages() {
  return (
    <ExampleLayouts>
      <Example
        children={<Simple />}
        title="simple"
        sourceCodeRepository="src/pages/application-ui/navigations/navbar/templates/simple.tsx"
      />
      <Example
        children={<FixedBackdropBlur />}
        title="fixed backdrop blur"
        sourceCodeRepository="src/pages/application-ui/navigations/navbar/templates/fixed-backdrop-blur.tsx"
      />
    </ExampleLayouts>
  );
}
