import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BiLayer } from "react-icons/bi";

export interface CardIconProps {
  title: string;
  desc: string;
  icon?: IconType;
}

export function CardIcon({ title, desc, icon }: CardIconProps) {
  const Icon = icon || BiLayer;
  return (
    <Flex
      gap={5}
      align={"start"}
      shadow={{ base: "sm", _dark: "md" }}
      p={5}
      borderRadius={"lg"}
    >
      <Box
        border={"1px solid"}
        borderRadius={"lg"}
        borderColor={"teal.500"}
        color={"teal.500"}
        bg={{ base: "teal.50", _dark: "teal.muted" }}
        p={4}
        fontSize={"2xl"}
      >
        <Icon />
      </Box>
      <Stack gap={2}>
        <Heading color={"teal.500"}>{title}</Heading>
        <Text>{desc}</Text>
      </Stack>
    </Flex>
  );
}
