import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function SimpleWithBackground() {
  const imageUrl =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Flex
      position={"relative"}
      flexDirection={"row"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
    >
      <Flex
        h={"100vh"}
        w={"100%"}
        position={"absolute"}
        bg={`url(${imageUrl})`}
        filter={"grayscale(100%)"}
        zIndex={100}
      ></Flex>
      <Flex
        h={"100vh"}
        w={"100%"}
        opacity={0.7}
        bgGradient="to-b"
        gradientFrom={{ base: "teal.400", _dark: "teal.700" }}
        gradientTo={{ base: "blue.400", _dark: "blue.800" }}
        position={"absolute"}
        zIndex={200}
      ></Flex>
      <Flex zIndex={300} justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
        <Flex w={{ base: "80%", md: "70%" }}>
          <Stack textAlign={"center"} gap={10}>
            <Stack gap={5}>
              <Heading color={"white"} lineHeight={1.2} fontSize={"5xl"}>
                Data to enrich your online business
              </Heading>
              <Text color={"white"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur repellat
                ullam voluptatum.
              </Text>
            </Stack>
            <Flex gap={5} justifyContent={"center"}>
              <Button colorPalette={"teal"}>Get Started</Button>
              <Button colorPalette={"teal"} variant={"plain"}>
                Learn More
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}
