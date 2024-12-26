import { useTemplateStore } from "@/stores/template-store";
import { Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaMobileAlt } from "react-icons/fa";
import { CardIcon, CardIconProps } from "./fragments/card/icon";
import Section from "./fragments/section";
import { useEffect, useState } from "react";

export default function TemplatesPages() {
  const [totalComponent, setTotalComponent] = useState<number>(0);

  useEffect(() => {
    setTotalComponent(useTemplateStore.count());
  }, []);

  /**
   * Edit Card Content Here
   */
  const CardContent: CardIconProps[] = [
    {
      title: `${totalComponent}+ Ready-to-Use Components`,
      desc: "Beautifully designed and meticulously crafted components that follow best accessibility practices and are easy to customize.",
    },
    {
      title: "Open Source",
      desc: "Freely accessible and community-driven, ensuring transparency, flexibility, and continuous improvement by contributors worldwide.",
      icon: FaGithub,
    },
    {
      title: "Completely Responsive",
      desc: "Each example is fully optimized to be responsive and visually appealing on devices of any screen size.",
      icon: FaMobileAlt,
    },
  ];

  /**
   * Edit Section Content Here
   */
  const SectionContent = useTemplateStore.get();

  return (
    <>
      <Flex alignItems={"center"} minH={"100vh"} justifyContent={"center"}>
        <Stack gap={20} w={"90%"}>
          <Stack gap={5}>
            <Heading
              mt={{ base: 100, xl: 0 }}
              fontSize={{ base: "4xl", lg: "5xl" }}
              textAlign={"center"}
            >
              Beautiful UI, crafted with Chakra UI.
            </Heading>
            <Flex justifyContent={"center"}>
              <Text
                w={{ base: "100%", md: "70%" }}
                fontSize={"xl"}
                textAlign={"center"}
              >
                Over {totalComponent}+ professionally designed, fully
                responsive, expertly crafted component examples you can drop
                into your projects and customize to your hearts content.
              </Text>
            </Flex>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
            {CardContent.map((item) => (
              <CardIcon title={item.title} desc={item.desc} icon={item?.icon} />
            ))}
          </SimpleGrid>
        </Stack>
      </Flex>
      <Flex alignItems={"center"} minH={"100vh"} justifyContent={"center"}>
        <Stack mt={{ base: 100, xl: 0 }} gap={50} w={"90%"}>
          {SectionContent.map((item) => {
            return (
              <Section
                title={item.title}
                desc={item.desc}
                contents={item.contents}
              />
            );
          })}
        </Stack>
      </Flex>
    </>
  );
}
