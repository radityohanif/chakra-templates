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
      <Example
        children={<Simple />}
        title="simple"
        sourceCodeRepository="src/pages/application-ui/forms/login/templates/simple.tsx"
      />
      <Example
        children={<SimpleWithLogo />}
        title="simple with logo"
        sourceCodeRepository="src/pages/application-ui/forms/login/templates/simple-with-logo.tsx"
      />
      <Example
        children={<InteractivePassword />}
        title="interactive password"
        sourceCodeRepository="src/pages/application-ui/forms/login/templates/interactive-password.tsx"
      />
      <Example
        children={<BackgroundColor />}
        title="background color"
        sourceCodeRepository="src/pages/application-ui/forms/login/templates/background-color.tsx"
      />
      <Example
        children={<BackgroundImage />}
        title="background image"
        sourceCodeRepository="src/pages/application-ui/forms/login/templates/background-image.tsx"
      />
      <Example
        children={<BackgroundImageBlur />}
        title="background image blur"
        sourceCodeRepository="src/pages/application-ui/forms/login/templates/background-image-blur.tsx"
      />
    </ExampleLayouts>
  );
}
