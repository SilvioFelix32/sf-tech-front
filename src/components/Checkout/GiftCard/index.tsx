import {
  GiftCardWrapper,
  GiftTitle,
  GiftDescription,
  GiftButton,
} from "./styles";

export function GiftCard() {
  return (
    <GiftCardWrapper>
      <GiftTitle>Está comprando de presente?</GiftTitle>
      <GiftDescription>
        Adicione uma embalagem de presente e uma mensagem personalizada, por
        apenas R$ 5,00
      </GiftDescription>
      <GiftButton>Adicionar uma embalagem</GiftButton>
    </GiftCardWrapper>
  );
}

