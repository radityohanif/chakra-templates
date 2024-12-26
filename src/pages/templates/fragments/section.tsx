import { Stack, Heading, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { CardImage } from "./card/image";

interface Data {
  title: string;
  desc: string;
  image?: string;
  href: string;
}

interface Content {
  title: string;
  data: Data[];
}

export interface SectionProps {
  title: string;
  desc: string;
  contents: Content[];
}

export default function Section({ title, desc, contents }: SectionProps) {
  return (
    <Stack gap={10}>
      <Stack gap={4}>
        <Heading fontSize={"2xl"}>{title}</Heading>
        <Text fontSize={"lg"}>{desc}</Text>
      </Stack>

      {contents.map((content) => {
        return (
          <Flex>
            <Flex flex={30}>
              <Heading fontSize={"xl"}>{content.title}</Heading>
            </Flex>
            <Flex flex={70}>
              <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={10}>
                {content.data.map((data) => {
                  return (
                    <CardImage
                      title={data.title}
                      desc={data.desc}
                      href={data.href}
                      image={data?.image}
                    />
                  );
                })}
              </SimpleGrid>
            </Flex>
          </Flex>
        );
      })}
    </Stack>
  );
}
