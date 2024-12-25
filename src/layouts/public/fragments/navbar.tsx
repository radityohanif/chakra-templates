import { ColorModeButton } from "@/components/ui/color-mode";
import {
  Button,
  Flex,
  Heading,
  Highlight
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router";

function NavItem({ children }: { children: ReactNode }) {
  return <Button variant={"ghost"}>{children}</Button>;
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
      backdropFilter={"blur(10px)"}
    >
      <Flex gap={5}>
        <Link to={"/"}>
          <Heading>
            <Highlight query={["Chakra"]}>Chakra Templates</Highlight>
          </Heading>
        </Link>
      </Flex>
      <Flex display={{ base: "none", md: "flex" }} gap={10}>
        <Flex gap={2}>
          <NavItem>Contribute</NavItem>
          <NavItem>Support</NavItem>
        </Flex>
        <ColorModeButton />
      </Flex>
    </Flex>
  );
}
