import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Modal as ModalComponent } from "react-responsive-modal";
//styles
import "react-responsive-modal/styles.css";
import { Button, Wrapper, Content, Title, Text } from "./styles";

interface ModalProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export function InitialModal({ isOpen, setOpen }: ModalProps) {
  useEffect(() => {
    const isModalShown = Cookies.get("InitialModalShown");
    if (!isModalShown) {
      setOpen(true);
      Cookies.set("InitialModalShown", "true", { expires: 3000 });
    }
  }, [setOpen]);

  return (
    <ModalComponent
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpen}
      onClose={() => {
        setOpen(false);
      }}
      center
    >
      <Wrapper>
        <Content>
          <Title>Bem-vindo ao SF-Tech!</Title>
          <Text>
            Este site é uma demonstração e foi criado para demonstrar minhas
            habilidades como desenvolvedor Fullstack JavaScript, utilizando
            tecnologias modernas e eficientes.
          </Text>
          <Text>
            No frontend, trabalhei com React, Next.js, Styled-Components e
            outras ferramentas que garantem interfaces dinâmicas e responsivas.
          </Text>
          <Text>
            No backend, usei NestJS, Prisma e Redis para construir APIs seguras
            e escaláveis.
          </Text>
          <Text>
            O e-mail e senha são armazenados com segurança no AWS Cognito, e os
            cookies seguem as normas da LGPD, melhorando sua experiência sem
            comprometer sua privacidade.
          </Text>
        </Content>
        <Button type="button" onClick={() => setOpen(false)}>
          Entendi e aceito
        </Button>
      </Wrapper>
    </ModalComponent>
  );
}
