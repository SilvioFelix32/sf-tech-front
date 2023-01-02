import React from "react";
import { MdModeEditOutline } from "react-icons/md";

import { Wrapper } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const EditButton = ({ ...rest }: ButtonProps) => {
  return (
    <Wrapper {...rest}>
      <MdModeEditOutline />
    </Wrapper>
  );
};
