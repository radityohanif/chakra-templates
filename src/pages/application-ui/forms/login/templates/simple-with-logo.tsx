import { Flex, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function SimpleWithLogo() {
  return (
    <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Stack
        p={10}
        gap={10}
        w={{ base: "100vw", md: "30vw" }}
        shadow={"xl"}
        borderRadius={"lg"}
        border={"non"}
      >
        <Flex justifyContent={"center"}>
          <Image
            h={10}
            src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true"
          />
        </Flex>
        <Heading textAlign={"center"}>Sign in to your account</Heading>
        <Stack gap={5}>
          <Field label="Email" required>
            <Input placeholder="Enter your email" />
          </Field>
          <Stack>
            <Field label="Password" required>
              <Input type="password" placeholder="Enter your password" />
            </Field>
            <Text
              textAlign={"end"}
              fontSize={"sm"}
              color={"teal"}
              fontWeight={"bold"}
              cursor={"pointer"}
              onClick={() => {}}
            >
              Forgot Password?
            </Text>
          </Stack>
        </Stack>
        <Button colorPalette={"teal"}>Sign in</Button>
        <Flex fontSize={"sm"} justifyContent={"center"} gap={1}>
          <Text fontWeight={"light"}>Not a Member?</Text>
          <Text
            color={"teal"}
            fontWeight={"bold"}
            cursor={"pointer"}
            onClick={() => {}}
          >
            Start a 7 day free trial
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
}
