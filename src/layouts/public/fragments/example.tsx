import { Button } from "@/components/ui/button";
import { useCodeStore } from "@/stores/code-store";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import { IoCodeSlash } from "react-icons/io5";

export default function Example({
  children,
  title,
  sourceCodeRepository,
}: {
  children: ReactNode;
  title: string;
  sourceCodeRepository: string;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack gap={5}>
      <Flex
        gap={{ base: 5, md: 0 }}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        <Heading textTransform={"capitalize"} fontSize={"2xl"}>
          {title}
        </Heading>
        <Flex gap={2} justifyContent={{ base: "end", md: "start" }}>
          <Button
            onClick={() =>
              window.open(useCodeStore.get(sourceCodeRepository), "_blank")
            }
            colorPalette={"teal"}
          >
            <IoCodeSlash />
            Code
          </Button>
        </Flex>
      </Flex>
      <Flex
        h={"100vh"}
        overflowX={"hidden"}
        overflowY={"auto"}
        borderRadius={"lg"}
        justifyContent={"center"}
        alignItems={"start"}
        position={"relative"}
        contain={"layout"}
        shadow={{ base: "none", md: "xl" }}
      >
        {children}
      </Flex>
    </Stack>
  );
}
