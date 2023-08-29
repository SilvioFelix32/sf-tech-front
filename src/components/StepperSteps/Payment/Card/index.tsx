import React, { useState } from "react";
import InputMask from "react-input-mask";
import Cards from "react-credit-cards-2";

import { CVC, Content, Div, Expiry, Input, Wrapper } from "./styles";
import "react-credit-cards-2/dist/es/styles-compiled.css";

export const CardForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
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
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        //focused={state.focus}
      />
      <Content>
        <Input
          type="number"
          name="number"
          placeholder="Numero do Cartão"
          value={state.number}
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
            type="number"
            name="expiry"
            placeholder="Validade"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <CVC
            type="number"
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
