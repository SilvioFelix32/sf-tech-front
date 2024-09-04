import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../../types/IUser";
import { PasswordInput } from "./Password";
import { AuthContext } from "../../context";
//styles
import {
  Wrapper,
  Content,
  Column,
  Input,
  Button,
  Title,
  ErrorText,
  Registration,
  Text,
  RouterButton,
} from "./styles";

interface ILoginBody {
  email: string;
  password: string;
}

export function SignInForm() {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  async function handleSignIn(data: ILoginBody) {
    try {
      await login({
        username: data.email,
        password,
      }).then(() => {
        router.push("/");
      });
    } catch (e) {
      const error = e as Error;
      console.log("Erro", error.message);
      setIsPasswordIncorrect(true);
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit(handleSignIn)}>
      <Title>Entre com seu email e senha</Title>
      {isPasswordIncorrect && (
        <Content>
          <Column>
            <ErrorText>Email ou senha incorretos.</ErrorText>
          </Column>
        </Content>
      )}
      <Content>
        <Column>
          <Text>Email</Text>
          <Input
            type="email"
            placeholder="example@example.com"
            {...register("email", {
              required: "Email obrigatório",
            })}
          />
          {errors.name && <ErrorText>{errors.email.message}</ErrorText>}
        </Column>
      </Content>
      <Content>
        <Column>
          <Text>Senha</Text>
          <PasswordInput password={password} setPassword={setPassword} />
        </Column>
        <RouterButton
          type="button"
          onClick={() => router.push("/forgot-password")}
        >
          Esqueceu sua senha?
        </RouterButton>
      </Content>
      <Content>
        <Column>
          <Button type="submit">Entrar</Button>
        </Column>
      </Content>
      <Registration>
        Não tem uma conta?
        <RouterButton
          type="button"
          onClick={() => router.push("create-acount")}
        >
          Cadastrar.
        </RouterButton>
      </Registration>
    </Wrapper>
  );
}
