import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router";

export interface CardImageProps {
  title: string;
  desc: string;
  href: string;
  image?: string;
}

export function CardImage({
  title,
  desc,
  href,
  image = "https://placehold.co/768x384",
}: CardImageProps) {
  return (
    <Link to={href}>
      <Flex
        gap={5}
        align={"start"}
        shadow={"md"}
        p={5}
        borderRadius={"lg"}
        _hover={{
          bg: { base: "gray.100", _dark: "gray.900" },
          shadow: "sm",
        }}
        transition="all 0.2s ease-in-out"
      >
        <Stack gap={5}>
          <Image src={image} />
          <Stack gap={1}>
            <Heading fontSize={"xl"} textTransform={"capitalize"}>
              {title}
            </Heading>
            <Text>
              {parseInt(desc) ? `${parseInt(desc)} components` : desc}
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Link>
  );
}
