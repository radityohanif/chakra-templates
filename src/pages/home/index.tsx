import { Button } from "@/components/ui/button";
import { Flex, Heading, Highlight, Stack, Text } from "@chakra-ui/react";

export default function HomePages() {
  return (
    <>
      <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Stack gap={5}>
          <Heading fontSize={"5xl"}>
            <Highlight
              query={["faster."]}
              styles={{ px: "0.5", bg: "teal.muted" }}
            >
              Build your next idea even faster.
            </Highlight>
          </Heading>
          <Text w={"60%"}>
            Beautifully designed, expertly crafted components and templates,
            built by the makers of Tailwind CSS. The perfect starting point for
            your next project.
          </Text>
          <Flex gap={2}>
            <Button variant={"solid"} colorPalette={"teal"}>
              Browse Templates
            </Button>
            <Button variant={"outline"}>Suggest Template</Button>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
}
