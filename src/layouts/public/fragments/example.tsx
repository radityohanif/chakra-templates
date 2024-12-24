import { Button } from "@/components/ui/button";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Example({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <Stack gap={5}>
      <Flex justifyContent={"space-between"}>
        <Heading textTransform={"capitalize"} fontSize={"2xl"}>
          {title}
        </Heading>
        <Flex gap={2}>
          <Button colorPalette={"teal"}>Preview</Button>
          <Button variant={"outline"} colorPalette={"teal"}>
            Code
          </Button>
        </Flex>
      </Flex>
      <Flex
        minH={"100vh"}
        borderRadius={"xl"}
        border={"solid gray 0.1px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {children}
      </Flex>
    </Stack>
  );
}
