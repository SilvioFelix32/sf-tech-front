import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useContext, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Modal as ModalComponent } from "react-responsive-modal";
//styles
import "react-responsive-modal/styles.css";
import { AuthContext } from "../../../context";
import {
  Button,
  Input,
  Medias,
  Password,
  Registration,
  SavePassword,
  Wrapper,
} from "./styles";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function LoginModal({ isOpen, setIsOpen }: ModalProps) {
  const { signIn } = useContext(AuthContext);
  const {
    query: { company_id },
  } = useRouter();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  return (
    <ModalComponent
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      center
    >
      <Wrapper onSubmit={handleSubmit}>
        <h2>Entre com sua conta</h2> <br />
        <p>Nome de Usuário:</p>
        <Input type="text" onChange={(e) => setEmail(e.target.value)} /> <br />
        <Password>
          <p>Senha:</p>
          <Link
            href={{
              pathname: "",
              query: { company_id },
            }}
          >
            Esqueceu sua Senha?
          </Link>
        </Password>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <SavePassword>
          <Input type="checkbox" id="remember" />
          <label htmlFor="remember">Salvar Senha?</label>
        </SavePassword>
        <Button type="submit">Entrar</Button>
        <Registration>
          Não tem uma conta?
          <Link
            href={{
              pathname: "registration",
              query: { company_id },
            }}
          >
            Cadastrar
          </Link>
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
    </ModalComponent>
  );
}
