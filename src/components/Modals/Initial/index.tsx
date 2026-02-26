import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Modal as ModalComponent } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  Wrapper,
  Header,
  HeaderTitle,
  ContentBlock,
  TextBlock,
  Footer,
  PrimaryButton,
} from "./styles";

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
      onClose={() => setOpen(false)}
      center
      styles={{ modal: { width: "100%"} }}
    >
      <Wrapper>
        <Header>
          <HeaderTitle style={{ fontSize: "1.5rem" }}>Bem-vindo ao SF-Tech!</HeaderTitle>
        </Header>

        <ContentBlock>
          <TextBlock>
            Projeto de e-commerce desenvolvido com Clean Architecture, Clean Code e usando os Principios SOLID.
          </TextBlock>
          <TextBlock>
            <strong style={{ fontWeight: 600 }}>Frontend:</strong> Next.js, React e Styled-Components para estilização de interfaces dinâmicas e responsivas.
          </TextBlock>
          <TextBlock>
            <strong style={{ fontWeight: 600 }}>Autenticação:</strong> AWS Cognito para autenticação de usuários e gerenciamento de sessões.
          </TextBlock>
          <TextBlock>
            <strong style={{ fontWeight: 600 }}>Backend Node.js:</strong> NestJS, Prisma e Redis para gestão de produtos, com 100% de cobertura de testes.
          </TextBlock>
          <TextBlock>
            <strong style={{ fontWeight: 600 }}>Backend Java:</strong> Spring Boot para gestão de vendas.
          </TextBlock>
        </ContentBlock>

        <Footer>
          <PrimaryButton type="button" onClick={() => setOpen(false)}>
            Entendi e aceito
          </PrimaryButton>
        </Footer>
      </Wrapper>
    </ModalComponent>
  );
}
