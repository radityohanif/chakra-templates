import ExampleLayouts from "@/layouts/example";
import Example from "@/layouts/public/fragments/example";
import Simple from "./templates/simple";
import SimpleWithLogo from "./templates/simple-with-logo";
import InteractivePassword from "./templates/interactive-password";
import BackgroundImage from "./templates/background-image";
import BackgroundColor from "./templates/background-color";
import BackgroundImageBlur from "./templates/background-image-blur";

export default function LoginFormsApplicationUiPages() {
  return (
    <ExampleLayouts>
      <Example children={<Simple />} title="simple" />
      <Example children={<SimpleWithLogo />} title="simple with logo" />
      <Example children={<InteractivePassword />} title="interactive password" />
      <Example children={<BackgroundColor />} title="background color" />
      <Example children={<BackgroundImage />} title="background image" />
      <Example children={<BackgroundImageBlur />} title="background image blur" />
    </ExampleLayouts>
  );
}
