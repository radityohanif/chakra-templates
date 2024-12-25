/**
 * If you don't already have the snippet, run the following command to add the password-input snippet
 * npx @chakra-ui/cli snippet add password-input
 */

import { Flex, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";

export default function Simple() {
  return (
    <Flex
      position={"relative"}
      flexDirection={"row"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        h={"100vh"}
        w={"100%"}
        bgGradient="to-b"
        gradientFrom={{ base: "teal.100", _dark: "teal.700" }}
        gradientTo={{ base: "teal.400", _dark: "teal.900" }}
        position={"absolute"}
        zIndex={200}
      ></Flex>
      <Flex
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        zIndex={300}
      >
        <Stack
          p={10}
          gap={10}
          w={{ base: "100vw", md: "30vw" }}
          shadow={{ base: "xl", _dark: "none" }}
          borderRadius={"lg"}
          border={"none"}
          backdropFilter={"blur(10px)"}
          bg={{ base: "whiteAlpha.800", _dark: "blackAlpha.400" }}
        >
          <Flex justifyContent={"center"}>
            <Image
              h={10}
              src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true"
            />
          </Flex>
          <Stack>
            <Heading textAlign={"center"}>Sign up to continue</Heading>
          </Stack>
          <Stack gap={5}>
            <Field label="Name" required>
              <Input type="text" placeholder="Enter your name" />
            </Field>
            <Field label="Email" required>
              <Input type="email" placeholder="Enter your email" />
            </Field>
            <Field label="Password" required>
              <PasswordInput />
            </Field>
            <Field label="Password Confirmation" required>
              <PasswordInput />
            </Field>
          </Stack>
          <Button colorPalette={"teal"}>Sign up</Button>
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
    </Flex>
  );
}
