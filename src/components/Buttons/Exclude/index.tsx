import React from "react";
import { MdDeleteOutline } from "react-icons/md";

import { Wrapper } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ExcludeButton = ({ ...rest }: ButtonProps) => {
  return (
    <Wrapper {...rest}>
      <MdDeleteOutline />
    </Wrapper>
  );
};
