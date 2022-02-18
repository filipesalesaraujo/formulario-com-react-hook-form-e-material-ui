import { Box, Button, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "../components/TextInput";

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um email válido.")
    .required("O email é obrigatório."),
  password: yup
    .string()
    .min(6, "A senha deve possuir no mínimo 6 caracteres.")
    .required("A senha é obrigatória."),
});

const Home: NextPage = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    methods.reset();
  };

  return (
    <Stack
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#2b2a33",
      }}
    >
      <Box>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack
              spacing={2}
              sx={{
                p: 4,
                width: "300px",
                borderRadius: 1,
                background: "#edede9",
              }}
            >
              <Typography variant="h4" textAlign="center">
                Login RHF
              </Typography>
              <TextInput name="email" label="Email" type="text" />
              <TextInput name="password" label="Senha" type="password" />
              <Button variant="contained" type="submit">
                Enviar
              </Button>
            </Stack>
          </form>
        </FormProvider>
      </Box>
    </Stack>
  );
};

export default Home;
