import { useState } from "react";
import { resetPassword } from "aws-amplify/auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
//styles
import {
  Wrapper,
  Content,
  Column,
  Input,
  Button,
  Title,
  Text,
  ErrorText,
} from "./styles";

interface IForgotPasswordBody {
  email: string;
}

export function ForgotPasswordForm() {
  const router = useRouter();
  const [isCodeIncorrect, setIsCodeIncorrect] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPasswordBody>();

  async function handleSignUp(data: IForgotPasswordBody) {
    try {
      await resetPassword({
        username: data.email,
      });

      router.push({
        pathname: "/auth/confirm-forgot-password",
        query: { email: data.email },
      });
    } catch (error) {
      console.error("Erro ao verificar cadastro", error);
      setIsCodeIncorrect(true);
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit(handleSignUp)}>
      <Title>Esqueceu sua senha?</Title>
      <Content>
        {isCodeIncorrect && (
          <Content>
            <Column>
              <ErrorText>Cadastro não encontrado.</ErrorText>
            </Column>
          </Content>
        )}
        <Column>
          <Text>
            Digite seu email abaixo e enviaremos um código de verificação para
            sua troca de senha
          </Text>
        </Column>
      </Content>
      <Content>
        <Column>
          <Input
            type="email"
            {...register("email", {
              required: "Campo 'Email' não pode estar vazio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Insira um email válido",
              },
            })}
            placeholder="Email"
          />
          {errors.email && (
            <ErrorText style={{ marginTop: "10px" }}>
              {errors.email.message}
            </ErrorText>
          )}
          <Button type="submit">Resetar minha senha</Button>
        </Column>
      </Content>
    </Wrapper>
  );
}
