import React, { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import { User } from "../../../context/Authentication/types";
import { CVC, Content, Div, Expiry, Input, Wrapper } from "./styles";
import "react-credit-cards-2/dist/es/styles-compiled.css";

interface CardFormProps {
  user: User;
}

export const CardForm = ({ user }: CardFormProps) => {
  const [state, setState] = useState({
    cardNumber: "1234 5678 9012 3456",
    expiry: "01/30",
    cvc: "123",
    name: `${user.name} ${user.lastName}`,
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <Wrapper>
      <Cards
        number={state.cardNumber}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus as Focused}
      />
      <Content>
        <Input
          type="string"
          name="cardNumber"
          placeholder="Numero do Cartão"
          value={state.cardNumber}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <Input
          type="string"
          name="name"
          placeholder="Nome Completo"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <Div>
          <Expiry
            type="string"
            name="expiry"
            placeholder="Validade"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <CVC
            type="cardNumber"
            name="cvc"
            placeholder="CVC"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Div>
      </Content>
    </Wrapper>
  );
};
