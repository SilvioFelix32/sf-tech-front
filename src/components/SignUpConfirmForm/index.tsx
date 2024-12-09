import { confirmSignUp, resendSignUpCode } from "aws-amplify/auth";
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
  RouterButton,
} from "./styles";
import { useState } from "react";
import { GetSwallAlert } from "../../utils/sweet-alert";

interface IConfirmSignUpBody {
  username: string;
  confirmationCode: string;
}

export function SignUpConfirmForm() {
  const router = useRouter();
  const { email } = router.query;
  const [isCodeIncorrect, setIsCodeIncorrect] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IConfirmSignUpBody>();

  async function handleSignUp(data: IConfirmSignUpBody) {
    try {
      const { isSignUpComplete } = await confirmSignUp({
        username: email as string,
        confirmationCode: data.confirmationCode,
      });

      if (isSignUpComplete) {
        GetSwallAlert(
          "center",
          "success",
          "Conta criada com você será redicionado para a página de login",
          3000
        );
        router.push("/signIn");
      }
    } catch (error) {
      setIsCodeIncorrect(true);
      console.error("Erro ao verificar cadastro", error);
    }
  }

  async function resendToken() {
    await resendSignUpCode({
      username: email as string,
    });
  }

  function censorEmail(email: string) {
    if (!email) return "";
    const [localPart, domainPart] = email.split("@");
    const censoredLocal = localPart[0] + "***";
    const [domainName, domainExtension] = domainPart.split(".");
    const censoredDomain = domainName[0] + "***";
    return `${censoredLocal}@${censoredDomain}.${domainExtension}`;
  }

  return (
    <Wrapper onSubmit={handleSubmit(handleSignUp)}>
      <Title>Confirme sua conta</Title>
      <Content>
        {isCodeIncorrect && (
          <Content>
            <Column>
              <ErrorText>Email ou senha incorretos.</ErrorText>
            </Column>
          </Content>
        )}
        <Column>
          <Text>
            Um email de confirmação foi enviado para{" "}
            {censorEmail(email as string)}. Digite ele abaixo para confirmar a
            sua conta
          </Text>
        </Column>
      </Content>
      <Content>
        <Column>
          <Text>Código de verificação</Text>
          <Input
            {...register("confirmationCode", {
              required: "Campo 'Código' não pode estar vazio",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Insira um código válido",
              },
            })}
            placeholder="Digite o código de confirmação"
          />
          {errors.confirmationCode && (
            <ErrorText style={{ marginTop: "10px" }}>
              {errors.confirmationCode.message}
            </ErrorText>
          )}
        </Column>
      </Content>
      <Content>
        <Column>
          <Button type="submit">Confirmar sua conta</Button>
        </Column>
        <Column style={{ flexDirection: "row" }}>
          <Text>Não recebeu o email?</Text>
          <RouterButton
            type="button"
            onClick={() =>
              resendToken().then(() => {
                GetSwallAlert(
                  "center",
                  "success",
                  "Token de verificação reenviado",
                  3000
                );
              })
            }
          >
            Enviar um novo código.
          </RouterButton>
        </Column>
      </Content>
    </Wrapper>
  );
}
