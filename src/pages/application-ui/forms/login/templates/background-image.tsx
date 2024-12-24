import { Flex, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function BackgroundImage() {
  const imageUrl =
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
        position={"absolute"}
        bg={`url(${imageUrl})`}
        zIndex={100}
      ></Flex>
      <Flex
        h={"100vh"}
        w={"100%"}
        opacity={0.7}
        bgGradient="to-b"
        gradientFrom={{ base: "red.200", _dark: "red.700" }}
        gradientTo={{ base: "blue.400", _dark: "blue.800" }}
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
          w={"30vw"}
          shadow={"xl"}
          borderRadius={"lg"}
          border={"none"}
          backdropFilter={"blur(10px)"}
          bg={{ base: "whiteAlpha.500", _dark: "blackAlpha.700" }}
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
    </Flex>
  );
}
