import { Flex, Image, Text } from "@chakra-ui/react";
import ZenGroveLogo from "../assets/icon.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Logo(props: any) {
  return (
    <Flex
      {...props}
      display="flex"
      justify-content="space-between"
      gap="12px"
      w={"100%"}
      alignItems="center"
      maxWidth="772px"
    >
      <Image alt="logo" width="32px" height="32px" src={ZenGroveLogo} />
      <Text fontWeight={700} margin={0} display="block">
        ZenGrove - Transformando ação em Impacto Positivo
      </Text>
    </Flex>
  );
}
