import Link from "next/link";
import { FaUserTie, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Wrapper, Navigation } from "./styles";

export function NavHeader() {
  return (
    <Wrapper>
      <Navigation>
        <Link href={"https://www.linkedin.com/in/silviofelix32/"}>
          <a target="_blank">
            <FaLinkedinIn />
          </a>
        </Link>
        <Link href={"https://github.com/SilvioFelix32"}>
          <a target="_blank">
            <FaGithub />
          </a>
        </Link>
        <Link href={"https://curriculo-silvio-felix32.vercel.app/"}>
          <a target="_blank">
            <FaUserTie />
          </a>
        </Link>
      </Navigation>
    </Wrapper>
  );
}
