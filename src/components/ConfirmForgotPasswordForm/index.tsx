import { useState } from "react";
import { GetSwallAlert } from "../../utils/sweet-alert";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validatePassword } from "../../utils/password-verification";
import { confirmResetPassword } from "aws-amplify/auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
//styles
import {
  Wrapper,
  Content,
  Column,
  Input,
  Button,
  Text,
  ErrorText,
  PasswordInput,
  InputContainer,
} from "./styles";

export function ConfirmForgotPasswordForm() {
  const router = useRouter();
  const { email } = router.query;
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isCodeIncorrect, setIsCodeIncorrect] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    haveCapitalLetters: false,
    haveNumbers: false,
    haveCharacters: false,
    haveMoreThan8Characters: false,
  });
  const { handleSubmit } = useForm();

  function verifyPasswords() {
    if (password !== passwordConfirm) {
      GetSwallAlert("center", "info", "Senhas não conferem", 3000);
      return false;
    }
    return true;
  }

  async function handleConfirm() {
    if (!verifyPasswords()) return;

    try {
      await confirmResetPassword({
        confirmationCode: code,
        newPassword: password,
        username: email as string,
      });

      GetSwallAlert("center", "success", "Senha alterada com sucesso", 3000);
      router.push("confirm-forgot-password");
    } catch (error) {
      console.log("Erro ao verificar cadastro", error);
      setIsCodeIncorrect(true);
    }
  }

  function handlePasswordChange(password: string) {
    setPassword(password);
    setPasswordValidation(validatePassword(password));
  }

  function handleShowHide() {
    setShow(!show);
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
    <Wrapper onSubmit={handleSubmit(handleConfirm)}>
      <Content>
        {isCodeIncorrect && (
          <Content>
            <Column>
              <ErrorText>
                {password !== passwordConfirm
                  ? "Senhas não conferem."
                  : "Erro ao realizar troca de senha."}
              </ErrorText>
            </Column>
          </Content>
        )}
        <Column>
          <Text>
            Enviamos um código de verificação para o email{" "}
            {censorEmail(email as string)}. Digite-o abaixo para realizar a
            troca de senha
          </Text>
        </Column>
      </Content>
      <Content>
        <Column>
          <Text style={{ fontWeight: 600 }}>Código de verificação</Text>
          <Input type="text" onChange={(e) => setCode(e.target.value)} />
        </Column>
        <Column>
          <Text style={{ fontWeight: 600 }}>Nova Senha</Text>
          <InputContainer>
            <PasswordInput
              type={show ? "text" : "password"}
              placeholder="Senha"
              onChange={(event) => {
                handlePasswordChange(event.target.value);
                setPasswordConfirm(event.target.value);
              }}
            />
            {show ? (
              <FaEye className="showhide" onClick={handleShowHide} />
            ) : (
              <FaEyeSlash className="showhide" onClick={handleShowHide} />
            )}
          </InputContainer>
        </Column>
        <Column>
          <Text style={{ fontWeight: 600 }}>Confirme sua nova senha</Text>
          <InputContainer>
            <PasswordInput
              type={show ? "text" : "password"}
              placeholder="Senha"
              onChange={(event) => {
                handlePasswordChange(event.target.value);
                setPasswordConfirm(event.target.value);
              }}
            />
            {show ? (
              <FaEye className="showhide" onClick={handleShowHide} />
            ) : (
              <FaEyeSlash className="showhide" onClick={handleShowHide} />
            )}
          </InputContainer>
        </Column>
        <Column>
          <Text style={{ fontWeight: 600 }}>A senha deve conter: </Text>
          <ul
            style={{
              marginTop: "10px",
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              paddingLeft: "15px",
            }}
          >
            <li
              style={{
                color: passwordValidation.haveCapitalLetters
                  ? "#33C1B3"
                  : "gray",
              }}
            >
              Letras maiúsculas
            </li>
            <li
              style={{
                color: passwordValidation.haveNumbers ? "#33C1B3" : "gray",
              }}
            >
              Números
            </li>
            <li
              style={{
                color: passwordValidation.haveCharacters ? "#33C1B3" : "gray",
              }}
            >
              Caracteres especiais (!@#$%^&*)
            </li>
            <li
              style={{
                color: passwordValidation.haveMoreThan8Characters
                  ? "#33C1B3"
                  : "gray",
              }}
            >
              Mais de 8 caracteres
            </li>
          </ul>
        </Column>
      </Content>
      <Button onClick={() => verifyPasswords()} type="submit">
        Trocar Senha
      </Button>
    </Wrapper>
  );
}
