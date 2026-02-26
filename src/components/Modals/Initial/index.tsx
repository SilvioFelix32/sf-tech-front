import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Modal as ModalComponent } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  Wrapper,
  Header,
  HeaderTitle,
  HeaderDescription,
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
      styles={{ modal: { width: "560px", maxHeight: "90vh", padding: 0 } }}
    >
      <Wrapper>
        <Header>
          <HeaderTitle>Bem-vindo ao SF-Tech!</HeaderTitle>
          <HeaderDescription>
            Projeto de e-commerce desenvolvido com Clean Architecture, Clean Code e usando os Principios SOLID.
          </HeaderDescription>
        </Header>

        <ContentBlock>
          <TextBlock>
            <strong>Frontend:</strong> Next.js, React e Styled-Components para estilização de interfaces dinâmicas e responsivas.
          </TextBlock>
          <TextBlock>
            <strong>Backend Node.js:</strong> NestJS, Prisma e Redis para gestão de produtos, com 100% de cobertura de testes.
          </TextBlock>
          <TextBlock>
            <strong>Backend Java:</strong> Spring Boot para gestão de vendas.
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
