import {
  Avatar,
  Box,
  Container,
  Divider,
  HStack,
  Stack,
  Text,
  Tooltip,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons

const UserCard = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 6 }}>
      <Stack
        w="17rem"
        spacing={2}
        p={4}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="md"
        margin="0 auto"
        _hover={{
          boxShadow: useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.4)"
          ),
        }}
      >
        <HStack justifyContent="center" alignItems="baseline">
          <Tooltip
            label="São Paulo, Brasil"
            aria-label="São Paulo, Brasil"
            placement="right-end"
            size="sm"
          >
            <Box pos="relative">
              <Avatar
                src=""
                name="Nome do usuário"
                size="xl"
                borderRadius="md"
              />
              <Avatar
                src="https://flagcdn.com/br.svg"
                name="Brazil Flag"
                size="xs"
                borderRadius="full"
                pos="absolute"
                bottom={0}
                right="-12px"
              />
            </Box>
          </Tooltip>
        </HStack>
        <chakra.h1 fontSize="xl" fontWeight="bold">
          "Nome do usuário"
        </chakra.h1>
        <Text fontSize="md" color="gray.500">
          Titulo do cargo
        </Text>
        <Divider />
        <Text fontSize="md" color="gray.500">
          Breve descrição
        </Text>
      </Stack>
    </Container>
  );
};

export default UserCard;
