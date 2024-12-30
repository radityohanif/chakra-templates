import ExampleLayouts from "@/layouts/example";
import Example from "@/layouts/public/fragments/example";
import FixedBackdropBlur from "./templates/fixed-backdrop-blur";
import Simple from "./templates/simple";
import Overlap from "./templates/overlap";

export default function NavbarNavigationsApplicationUiPages() {
  return (
    <ExampleLayouts title="Navbar">
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
      <Example
        children={<Overlap />}
        title="overlap"
        sourceCodeRepository="src/pages/application-ui/navigations/navbar/templates/overlap.tsx"
      />
    </ExampleLayouts>
  );
}
