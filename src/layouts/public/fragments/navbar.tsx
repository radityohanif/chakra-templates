import { ColorModeButton } from "@/components/ui/color-mode";
import { Button, Flex, Heading, Highlight } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router";

function NavItem({
  children,
  href,
  newWindow,
}: {
  children: ReactNode;
  href: string;
  newWindow?: boolean;
}) {
  return (
    <Link to={href} target={newWindow ? "_blank" : "_self"}>
      <Button variant={"ghost"} size={"lg"}>
        {children}
      </Button>
    </Link>
  );
}

export default function Navbar() {
  return (
    <Flex
      w={"100%"}
      position={"fixed"}
      px={10}
      py={2}
      justifyContent={{ base: "center", md: "space-between" }}
      boxShadow={"lg"}
      zIndex={99999}
      alignItems={"center"}
      backdropFilter={"blur(10px)"}
    >
      <Flex gap={5} alignItems={"center"}>
        <Link to={"/"}>
          <Heading>
            <Highlight query={["Chakra"]}>Chakra Templates</Highlight>
          </Heading>
        </Link>
      </Flex>
      <Flex
        alignItems={"center"}
        display={{ base: "none", md: "flex" }}
        gap={10}
      >
        <Flex gap={2}>
          <NavItem href="/templates">Templates</NavItem>
          <NavItem
            href="https://github.com/radityohanif/chakra-templates"
            newWindow
          >
            Contribute
          </NavItem>
          {/* <NavItem href="/">Support</NavItem> */}
        </Flex>
        <ColorModeButton size={"xl"} />
      </Flex>
    </Flex>
  );
}
