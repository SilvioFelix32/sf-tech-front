import React, { useState } from "react";
import { User } from "../../../interfaces/IUser";
import {
  Wrapper,
  CardVisualWrapper,
  CardVisual,
  CardHeader,
  CardChip,
  CardNumber,
  CardFooter,
  CardNameSection,
  CardNameLabel,
  CardName,
  CardExpirySection,
  CardExpiryLabel,
  CardExpiry,
  Content,
  FormGroup,
  FormGroupRow,
  Label,
  Input,
  Expiry,
  CVC,
} from "./styles";

interface CardFormProps {
  user: User;
}

export const CardForm = ({ user }: CardFormProps) => {
  const [state, setState] = useState({
    cardNumber: "1234 5678 9012 3456",
    expiry: "01/30",
    cvc: "123",
    name: `${user.name} ${user.lastName}`.toUpperCase(),
  });

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(evt.target.value);
    setState((prev) => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiry(evt.target.value);
    setState((prev) => ({ ...prev, expiry: formatted }));
  };

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value.toUpperCase();
    setState((prev) => ({ ...prev, name: value }));
  };

  return (
    <Wrapper>
      <CardVisualWrapper>
        <CardVisual>
          <CardHeader>
            <CardChip />
          </CardHeader>
          <CardNumber>{state.cardNumber || "1234 5678 9012 3456"}</CardNumber>
          <CardFooter>
            <CardNameSection>
              <CardNameLabel>Nome</CardNameLabel>
              <CardName>{state.name || "SF-TECH CORP"}</CardName>
            </CardNameSection>
            <CardExpirySection>
              <CardExpiryLabel>Válido Até</CardExpiryLabel>
              <CardExpiry>{state.expiry || "01/30"}</CardExpiry>
            </CardExpirySection>
          </CardFooter>
        </CardVisual>
      </CardVisualWrapper>

      <Content>
        <FormGroup>
          <Label htmlFor="cardNumber">Número do Cartão</Label>
          <Input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={state.cardNumber}
            onChange={handleCardNumberChange}
            maxLength={19}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="cardName">Nome no Cartão</Label>
          <Input
            type="text"
            id="cardName"
            name="name"
            placeholder="SF-TECH CORP"
            value={state.name}
            onChange={handleNameChange}
          />
        </FormGroup>

        <FormGroupRow>
          <FormGroup>
            <Label htmlFor="expiry">Validade</Label>
            <Expiry
              type="text"
              id="expiry"
              name="expiry"
              placeholder="01/30"
              value={state.expiry}
              onChange={handleExpiryChange}
              maxLength={5}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="cvv">CVV</Label>
            <CVC
              type="text"
              id="cvv"
              name="cvc"
              placeholder="123"
              value={state.cvc}
              onChange={handleInputChange}
              maxLength={3}
            />
          </FormGroup>
        </FormGroupRow>
      </Content>
    </Wrapper>
  );
};
