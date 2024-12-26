import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ExampleLayouts({
  children,
  title = "Your Title",
  desc = null,
}: {
  children: ReactNode;
  title?: string;
  desc?: string | null;
}) {
  return (
    <>
      <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Stack gap={100} mt={"20vh"} w={{ base: "95%", md: "80%" }}>
          <Stack gap={5}>
            <Heading
              textAlign={{ base: "center", md: "start" }}
              fontSize={"3xl"}
            >
              {title}
            </Heading>
            <Text
              hidden={desc == null}
              textAlign={{ base: "center", md: "start" }}
              width={{ base: "100%", md: "70%" }}
            >
              {desc}
            </Text>
          </Stack>
          {children}
        </Stack>
      </Flex>
    </>
  );
}
