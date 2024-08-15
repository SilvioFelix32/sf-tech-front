import { useRouter } from "next/router";
import React, { FormEvent, useCallback, useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { environment } from "../../../utils/environment";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { AuthContext } from "../../../context";
import {
  Button,
  Input,
  InputContainer,
  Password,
  Registration,
  Text,
  Wrapper,
} from "./styles";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  const { signIn } = useContext(AuthContext);
  const company_id = environment.companyId;
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const data = {
        email,
        password,
      };

      signIn(data).catch(() => {
        setIsPasswordIncorrect(true);
      });
    },
    [email, password, signIn]
  );

  const handleForgotPasswordClick = useCallback(() => {
    router.push("");
  }, [router, company_id]);

  const handleCreateAccountClick = useCallback(() => {
    router.push("create-acount");
  }, [router, company_id]);

  function handleShowHide() {
    setShow(!show);
  }

  return (
    <Modal
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      center
    >
      <Wrapper onSubmit={handleSubmit}>
        <h2>Entre com sua conta</h2>
        <br />
        <p>Email:</p>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Password>
          <p>Senha:</p>
          <button type="button" onClick={handleForgotPasswordClick}>
            Esqueceu sua Senha?
          </button>
        </Password>
        <InputContainer>
          <Input
            type={show ? "text" : "password"}
            placeholder="Senha"
            defaultValue={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {show ? (
            <FaEye className="showhide" onClick={handleShowHide} />
          ) : (
            <FaEyeSlash className="showhide" onClick={handleShowHide} />
          )}
        </InputContainer>
        {isPasswordIncorrect && <Text>Senha não confere</Text>}
        <Button type="submit">Entrar</Button>
        <Registration>
          Não tem uma conta?
          <button type="button" onClick={handleCreateAccountClick}>
            Cadastrar.
          </button>
        </Registration>
      </Wrapper>
    </Modal>
  );
}
