import { BsDownload, BsFillCheckCircleFill } from "react-icons/bs";
import { Wrapper, Text, Title, Content, PaymentOptions } from "./styles";

export function Sucess() {
  return (
    <Wrapper>
      <Content>
        https://dribbble.com/shots/21088793-12-Receipt-Page-References
        <Title>Pagamento Concluido!</Title>
        <BsFillCheckCircleFill />
        <Text>Escolha uma opção de pagamento:</Text>
        <PaymentOptions>
          <option value=""></option>
          <option value="">Cartão de Crédito</option>
          <option value="">Cartão de Débito</option>
          <option value="">Boleto</option>
          <option value="">Pix</option>
        </PaymentOptions>
        <BsDownload />
      </Content>
    </Wrapper>
  );
}
