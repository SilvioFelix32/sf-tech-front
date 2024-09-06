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
import { FormEvent, useState } from "react";
import { GetSwallAlert } from "../../utils/sweet-alert";

interface IConfirmSignUpBody {
  username: string;
  confirmationCode: string;
}

export function SignUpConfirmForm() {
  const router = useRouter();
  const { email } = router.query;
  const [code, setCode] = useState("");
  const [isCodeInvalid, setIsCodeInvalid] = useState(false);

  async function handleConfirmSignUp(event: FormEvent) {
    event.preventDefault();

    try {
      const { isSignUpComplete } = await confirmSignUp({
        username: email as string,
        confirmationCode: code,
      });

      if (isSignUpComplete) {
        GetSwallAlert(
          "center",
          "success",
          "Conta criada com você será redicionado para a página de login",
          3000
        );
        router.push("/");
      }
    } catch (error) {
      setIsCodeInvalid(true);
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
    <Wrapper onSubmit={handleConfirmSignUp}>
      <Title>Confirme sua conta</Title>
      <Content>
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
            onChange={(e) => setCode(e.target.value)}
            placeholder="Digite o código de confirmação"
          />
          {isCodeInvalid && (
            <ErrorText style={{ marginTop: "10px" }}>
              Insira um código válido
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
