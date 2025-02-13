import { useRouter } from "next/router";
import { signUp } from "aws-amplify/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { GetSwallAlert } from "../../utils/sweet-alert";
import { IUser } from "../../types/IUser";
import { environment } from "../../config/environment";
import { ConfirmPassword, CreatePassword } from "./Passwords";
//styles
import {
  Wrapper,
  Content,
  Column,
  Input,
  Button,
  Title,
  ErrorText,
  Text,
  RouterButton,
} from "./styles";

export function SignUpForm() {
  const company_id = environment.companyId;
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  function verifyPasswords() {
    if (password !== passwordConfirm) {
      GetSwallAlert("center", "info", "Senhas não conferem", 3000);
    } else {
      setValue("password", password);
    }
  }

  async function handleCreateUser(data: IUser) {
    try {
      await signUp({
        username: data.email,
        password: data.password,
        options: {
          userAttributes: {
            email: data.email,
            name: data.name,
            family_name: data.lastName,
            "custom:company_id": company_id,
            "custom:role": "USER",
          },
        },
      }).then(() => {
        router.push({
          pathname: "/confirm-signup",
          query: { email: data.email },
        });
      });
    } catch (error) {
      const err = error as Error;
      GetSwallAlert("center", "error", `Erro: ${err.message}`, 2000);
      console.error("Erro ao criar usuário", error);
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit(handleCreateUser)}>
      <Title>Criar Conta</Title>

      <Content>
        <Column>
          <Input
            type="text"
            placeholder="Nome*"
            {...register("name", { required: "Nome* é obrigatório" })}
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </Column>

        <Column>
          <Input
            type="text"
            placeholder="Sobrenome*"
            {...register("lastName", { required: "Sobrenome* é obrigatório" })}
          />
          {errors.lastName && <ErrorText>{errors.lastName.message}</ErrorText>}
        </Column>
      </Content>

      <Content>
        <Column>
          <Input
            type="email"
            placeholder="Email*"
            autoComplete="off"
            {...register("email", { required: "Email* é obrigatório" })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </Column>
      </Content>

      <Content style={{ padding: "5px" }}>
        <CreatePassword password={password} setPassword={setPassword} />
        <ConfirmPassword
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
        />
        {password !== passwordConfirm && passwordConfirm && (
          <ErrorText>Senhas não conferem</ErrorText>
        )}
      </Content>

      <Button onClick={() => verifyPasswords()} type="submit">
        Cadastrar
      </Button>
      <Content
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        <Text>Já tem uma conta?</Text>
        <RouterButton type="button" onClick={() => router.push("signIn")}>
          Faça login.
        </RouterButton>
      </Content>
    </Wrapper>
  );
}
