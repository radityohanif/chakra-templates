import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function Simple() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
      <Flex w={{ base: "80%", md: "70%" }}>
        <Stack textAlign={"center"} gap={10}>
          <Stack gap={5}>
            <Heading lineHeight={1.2} fontSize={"5xl"}>
              Data to enrich your online business
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur repellat
              ullam voluptatum.
            </Text>
          </Stack>
          <Flex gap={5} justifyContent={"center"}>
            <Button colorPalette={"teal"}>Get Started</Button>
            <Button variant={"outline"}>Learn More</Button>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}
