import { Wrapper, Text, Title, Content, PaymentOptions } from "./styles";

export function Payment() {
  return (
    <Wrapper>
      <Content>
        <Title>Pagamento</Title>
        <Text>Escolha uma opção de pagamento:</Text>
        <PaymentOptions>
          <option value=""></option>
          <option value="">Cartão de Crédito</option>
          <option value="">Cartão de Débito</option>
          <option value="">Boleto</option>
          <option value="">Pix</option>
        </PaymentOptions>
      </Content>
    </Wrapper>
  );
}
