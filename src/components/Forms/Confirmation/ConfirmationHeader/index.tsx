import { SuccessIcon, HeaderTitle, HeaderSubtitle, HeaderWrapper } from "./styles";

export function ConfirmationHeader() {
  return (
    <HeaderWrapper>
      <SuccessIcon>✓</SuccessIcon>
      <HeaderTitle>Seu pedido foi realizado com sucesso!</HeaderTitle>
      <HeaderSubtitle>Obrigado pela compra</HeaderSubtitle>
    </HeaderWrapper>
  );
}

