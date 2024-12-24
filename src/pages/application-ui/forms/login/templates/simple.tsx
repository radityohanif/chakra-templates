import { Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

export default function Simple() {
  return (
    <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Stack p={10} shadow={"xl"}>
        <Heading>Sign in to your account</Heading>
        <Field
          label="Email"
          required
          helperText="We'll never share your email."
        >
          <Input placeholder="Enter your email" />
        </Field>
        <Field label="Password" required>
          <Input placeholder="Enter your password" />
        </Field>
      </Stack>
    </Flex>
  );
}
