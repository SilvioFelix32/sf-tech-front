import React from "react";
import { useState } from "react";
import { FaEyeSlash, FaEye, FaCheck, FaTimes } from "react-icons/fa";
import { Input, InputContainer, Wrapper, Text } from "./styles";

interface formProps {
  passwordConfirm: string;

  setPasswordConfirm: (value: string) => void;
}

export function ConfirmPassword({
  passwordConfirm,
  setPasswordConfirm,
}: formProps) {
  const [show, setShow] = useState(false);
  const [haveCapitalLetters, setHaveCapitalLetters] = useState(false);
  const [haveNumbers, setHaveNumbers] = useState(false);
  const [haveCharacters, setHaveCharacters] = useState(false);
  const [haveMoreThen8Characters, setHaveMoreThen8Characters] = useState(false);

  //handle input
  function handleInputChange(text: string) {
    const regexCapitalLetters = new RegExp(/[A-z]/);
    const regexNumbers = new RegExp(/[0-9]/);
    const regexChacters = new RegExp(/[!@#$%^&*]/);
    if (regexCapitalLetters.test(text)) {
      setHaveCapitalLetters(true);
    } else {
      setHaveCapitalLetters(false);
    }

    if (regexNumbers.test(text)) {
      setHaveNumbers(true);
    } else {
      setHaveNumbers(false);
    }

    if (regexChacters.test(text)) {
      setHaveCharacters(true);
    } else {
      setHaveCharacters(false);
    }

    if (text.length > 7) {
      setHaveMoreThen8Characters(true);
    } else {
      setHaveMoreThen8Characters(false);
    }
  }

  function handleShowHide() {
    setShow(!show);
  }

  return (
    <Wrapper>
      <InputContainer>
        <Input
          required={true}
          type={show ? "text" : "password"}
          placeholder="Senha"
          defaultValue={passwordConfirm}
          onChange={(event) => {
            handleInputChange(event.target.value);
            setPasswordConfirm(event.target.value);
          }}
        />
        {show ? (
          <FaEye className="showhide" onClick={handleShowHide} />
        ) : (
          <FaEyeSlash className="showhide" onClick={handleShowHide} />
        )}
      </InputContainer>
      <Text>
        {haveCapitalLetters ? (
          <FaCheck className="faCheck" />
        ) : (
          <FaTimes className="faTimes" />
        )}
        <span>Letra Maiuscula </span>
      </Text>
      <Text>
        {haveNumbers ? (
          <FaCheck className="faCheck" />
        ) : (
          <FaTimes className="faTimes" />
        )}
        <span>Numeros</span>
      </Text>
      <Text>
        {haveCharacters ? (
          <FaCheck className="faCheck" />
        ) : (
          <FaTimes className="faTimes" />
        )}
        <span>Caractere especial </span>
      </Text>
      <Text>
        {haveMoreThen8Characters ? (
          <FaCheck className="faCheck" />
        ) : (
          <FaTimes className="faTimes" />
        )}
        <span>8+ Caracteres</span>
      </Text>
    </Wrapper>
  );
}
