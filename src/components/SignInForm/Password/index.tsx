import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
//styles
import { Wrapper, Input, InputContainer } from "./styles";

interface formProps {
  password: string;
  setPassword: (value: string) => void;
}

export function PasswordInput({ password, setPassword }: formProps) {
  const [show, setShow] = useState(false);

  function handleShowHide() {
    setShow(!show);
  }

  return (
    <Wrapper>
      <InputContainer>
        <Input
          type={show ? "text" : "password"}
          placeholder="Senha"
          required={true}
          defaultValue={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {show ? (
          <FaEye className="showhide" onClick={handleShowHide} />
        ) : (
          <FaEyeSlash className="showhide" onClick={handleShowHide} />
        )}
      </InputContainer>
    </Wrapper>
  );
}
