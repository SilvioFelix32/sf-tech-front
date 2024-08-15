import React from "react";
import InputMask from "react-input-mask";
//styles
import { Wrapper } from "./styles";

const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, "");

const MaskedInput = ({ defaultValue, onChange, name, mask, register }) => {
  function handleChange(event: any) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value),
      },
    });
  }

  return (
    <Wrapper>
      <InputMask
        name={name}
        mask={mask}
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder="CPF*"
        className="inputMask"
        {...register("document", { required: true })}
      />
    </Wrapper>
  );
};

export default MaskedInput;
