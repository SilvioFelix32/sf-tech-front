import { useRouter } from "next/router";
import React, { FormEvent, useCallback, useContext, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { AuthContext, CompanyContext } from "../../../context";
import {
  Button,
  Input,
  Medias,
  Password,
  Registration,
  SavePassword,
  Wrapper,
} from "./styles";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  const { signIn } = useContext(AuthContext);
  const company_id = useContext(CompanyContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const data = {
        email,
        password,
      };

      await signIn(data);
    },
    [email, password, signIn]
  );

  const handleForgotPasswordClick = useCallback(() => {
    router.push("");
  }, [router, company_id]);

  const handleCreateAccountClick = useCallback(() => {
    router.push("create-acount");
  }, [router, company_id]);

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
          <button onClick={handleForgotPasswordClick}>
            Esqueceu sua Senha?
          </button>
        </Password>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SavePassword>
          <Input type="checkbox" id="remember" />
          <label htmlFor="remember">Salvar Senha?</label>
        </SavePassword>
        <Button type="submit">Entrar</Button>
        <Registration>
          Não tem uma conta?
          <button onClick={handleCreateAccountClick}>Cadastrar</button>
        </Registration>
        <Medias>
          <button onClick={() => router.push("/")}>
            <FaFacebookSquare />
          </button>
          <button onClick={() => router.push("/")}>
            <FaInstagramSquare />
          </button>
          <button onClick={() => router.push("/")}>
            <FaYoutubeSquare />
          </button>
        </Medias>
      </Wrapper>
    </Modal>
  );
}
