import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../../types/IUser";
import { AuthContext } from "../../context";
import { PasswordInput } from "./Password";
import { IUserLoginParams } from "../../services/interfaces/IUserResponse";
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

export function SignInForm() {
  const { signIn } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  async function handleSignIn() {
    const data: IUserLoginParams = {
      email,
      password,
    };

    try {
      await signIn(data);
      router.push("/");
    } catch {
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
            type="text"
            placeholder="example@example.com"
            defaultValue={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          {errors.name && <ErrorText>{errors.email.message}</ErrorText>}
        </Column>
      </Content>

      <Content>
        <Column>
          <Text>Senha</Text>
          <PasswordInput password={password} setPassword={setPassword} />
        </Column>
        <RouterButton type="button" onClick={() => router.push("/")}>
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
