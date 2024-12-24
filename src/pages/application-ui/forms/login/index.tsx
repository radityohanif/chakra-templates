import ExampleLayouts from "@/layouts/example";
import Example from "@/layouts/public/fragments/example";
import Simple from "./templates/simple";
import SimpleWithLogo from "./templates/simple-with-logo";

export default function LoginFormsApplicationUiPages() {
  return (
    <ExampleLayouts>
      <Example children={<Simple />} title="simple" />
      <Example children={<SimpleWithLogo />} title="simple with logo" />
    </ExampleLayouts>
  );
}
