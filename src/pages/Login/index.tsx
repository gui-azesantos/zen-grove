/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import CryptoJS from "crypto-js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const onSubmit = (data: any) => {
    // Encrypt the password before storing it
    const encryptedPassword = CryptoJS.AES.encrypt(
      data.password,
      "zen-grove-key"
    ).toString();

    // Store email and encrypted password in localStorage
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", encryptedPassword);

    navigate("/dashboard");
  };

  return (
    <Container maxW="7xl">
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Entrar na sua conta</Heading>
          </Stack>
          <VStack
            minW="420px"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            boxSize="auto"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={8}
            spacing={8}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="email" isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  rounded="md"
                  type="email"
                  {...register("email", {
                    required: "Email é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Endereço de email inválido",
                    },
                  })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={!!errors.password}>
                <FormLabel>Senha</FormLabel>
                <InputGroup size="md">
                  <Input
                    rounded="md"
                    type={show ? "text" : "password"}
                    {...register("password", {
                      required: "Senha é obrigatória",
                    })}
                  />

                  <InputRightElement width="4.5rem" mr={2}>
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      bg={useColorModeValue("gray.300", "gray.700")}
                      _hover={{
                        bg: useColorModeValue("gray.400", "gray.800"),
                      }}
                      onClick={handleClick}
                    >
                      {show ? "Esconder" : "Mostrar"}
                    </Button>
                    <FormErrorMessage>
                      {errors.password?.message}
                    </FormErrorMessage>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justifyContent="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Lembrar-me
                </Checkbox>
                <Link fontSize="sm">Esqueceu a senha?</Link>
              </Stack>
              <Button
                type="submit"
                bg="green.300"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%"
              >
                Entrar
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};
