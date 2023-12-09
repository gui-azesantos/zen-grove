import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";

export const ActivityForm = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Heading as="h3" size="lg" mb="4" fontWeight="bold" textAlign="left">
        Registre suas atividades e experiencias
      </Heading>
      <Box as="form" mb={{ base: "2.5rem", lg: "4rem" }}>
        <Flex
          justifyContent="start"
          alignItems="end "
          flexDirection={{ base: "column", lg: "row" }}
        >
          <FormControl
            id="where"
            width={{ base: "100%", lg: 1 / 3 }}
            pr={{ lg: "2" }}
            mb={{ base: "4", lg: "0" }}
          >
            <FormLabel fontSize="0.75rem" fontWeight="bold">
              Local
            </FormLabel>
            <Input placeholder="Onde foi realizada?" />
          </FormControl>
          <FormControl
            id="checkIn"
            width={{ base: "100%", lg: 1 / 3 }}
            pr={{ lg: "2" }}
            mb={{ base: "4", lg: "0" }}
          >
            <FormLabel fontSize="0.75rem" fontWeight="bold">
              Quando
            </FormLabel>

            <InputMask mask="99/99/9999" maskChar={null}>
              {(inputProps) => (
                <Input {...inputProps} placeholder="dd/mm/yyyy" />
              )}
            </InputMask>
          </FormControl>
          <FormControl
            id="guests"
            width={{ base: "100%", lg: 1 / 3 }}
            pr={{ lg: "2" }}
            mb={{ base: "4", lg: "0" }}
          >
            <FormLabel fontSize="0.75rem" fontWeight="bold">
              Categoria
            </FormLabel>
            <Select>
              <option value="Social">Social</option>
              <option value="Environment ">Ambiental</option>
              <option value="Governance">Governança</option>
            </Select>
          </FormControl>
          <Button>Enviar</Button>
        </Flex>
      </Box>
    </Container>
  );
};
