import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
//components
import { LoginModal } from "../..";

import { Button } from "./styles";

export const SignInButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <BiUser />
      </Button>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
