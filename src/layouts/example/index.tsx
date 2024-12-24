import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ExampleLayouts({
  children,
  title = "Your Title",
  desc = "Your Description",
}: {
  children: ReactNode;
  title?: string;
  desc?: string;
}) {
  return (
    <>
      <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Stack gap={10} mt={"20vh"} w={"80%"}>
          <Stack>
            <Heading fontSize={"3xl"}>{title}</Heading>
            <Text width={"60%"}>{desc}</Text>
          </Stack>
          {children}
        </Stack>
      </Flex>
    </>
  );
}
