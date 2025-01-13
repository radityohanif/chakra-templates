import ExampleLayouts from "@/layouts/example";
import Example from "@/layouts/public/fragments/example";
import Simple from "./templates/simple";
import SimpleWithBackground from "./templates/simple-with-background";

export default function HeroSectionsPageSectionsMarketingPages() {
  return (
    <ExampleLayouts title="Hero Sections">
      <Example
        children={<Simple />}
        title="simple"
        sourceCodeRepository="src/pages/marketing/page-sections/hero-sections/templates/simple.tsx"
      />
      <Example
        children={<SimpleWithBackground />}
        title="simple with background"
        sourceCodeRepository="src/pages/marketing/page-sections/hero-sections/templates/simple-with-background.tsx"
      />
    </ExampleLayouts>
  );
}
