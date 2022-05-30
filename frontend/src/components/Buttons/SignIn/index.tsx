import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

import { Wrapper } from "./styles";

export const SignInButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <BiUser />
    </Wrapper>
  );
};
