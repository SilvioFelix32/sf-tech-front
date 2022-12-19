import { useState } from "react";
import { FaEyeSlash, FaEye, FaCheck, FaTimes } from "react-icons/fa";
//styles
import { Wrapper, Input, InputContainer, Text } from "./styles";

interface formProps {
  password: string;
  setPassword: (value: string) => void;
}

export function CreatePassword({ password, setPassword }: formProps) {
  const [show, setShow] = useState(false);
  const [haveCapitalLetters, setHaveCapitalLetters] = useState(false);
  const [haveNumbers, setHaveNumbers] = useState(false);
  const [haveCharacters, setHaveCharacters] = useState(false);
  const [haveMoreThen8Characters, setHaveMoreThen8Characters] = useState(false);

  //handle input
  function handleInputChange(text: any) {
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
          type={show ? "text" : "password"}
          placeholder="Senha"
          defaultValue={password}
          onChange={(event) => {
            handleInputChange(event.target.value);
            setPassword(event.target.value);
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
