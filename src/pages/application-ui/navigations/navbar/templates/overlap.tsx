import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";
import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Popover,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router";

function NavItem({ children }: { children: ReactNode }) {
  return <Button variant={"ghost"}>{children}</Button>;
}

function NavSubItem() {
  return (
    <Box
      as="a"
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("teal.100", "gray.900") }}
      cursor={"pointer"}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} fontWeight={500}>
            NavSubItem
          </Text>
          <Text fontSize={"sm"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum impedit omnis dolorem
            vitae quis.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

function NavDropdown({ children }: { children: ReactNode }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="ghost">{children}</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.Body>
              <Stack>
                <NavSubItem />
                <NavSubItem />
                <NavSubItem />
              </Stack>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}

function Navbar() {
  return (
    <Flex
      w={"100%"}
      px={10}
      py={2}
      justifyContent={{ base: "center", md: "space-between" }}
      boxShadow={"none"}
      alignItems={"center"}
      bg={{ base: "teal.300", _dark: "teal.600" }}
      zIndex={999}
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
          <NavDropdown>NavDropdown</NavDropdown>
          <NavItem>NavItem</NavItem>
        </Flex>
        <ColorModeButton />
      </Flex>
    </Flex>
  );
}

export default function Overlap() {
  return (
    <>
      <Stack w={"100%"} bg={{ base: "gray.100", _dark: "gray.950" }} minH={"100vh"} gap={0}>
        <Navbar />
        <Flex
          h={200}
          bg={{ base: "teal.300", _dark: "teal.600" }}
          position={"relative"}
          top={"-40px"}
          zIndex={5}
        />
        <Flex justifyContent={"center"}>
          <Flex
            w={"80%"}
            bg={{ base: "white", _dark: "gray.800" }}
            p={10}
            borderRadius={"xl"}
            shadow={"sm"}
            position={"relative"}
            top={"-100px"}
            zIndex={9999}
          >
            <Stack>
              {/* Your Content Here */}
              <Heading>Your Content Here</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odit, obcaecati
                tempore voluptatum architecto dolorem ipsam accusamus est inventore rem, hic
                laudantium, enim dolorum ad et nemo corporis iste numquam.z
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}
