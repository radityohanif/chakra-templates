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
      <Flex
        gap={{ base: 5, md: 0 }}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      >
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
        borderRadius={"lg"}
        justifyContent={"center"}
        alignItems={"center"}
        shadow={{ base: "none", md: "xl" }}
      >
        {children}
      </Flex>
    </Stack>
  );
}
