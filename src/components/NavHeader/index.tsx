import { FaUserTie, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Wrapper, Navigation } from "./styles";

export function NavHeader() {
  return (
    <Wrapper>
      <Navigation>
        <a
          href="https://www.linkedin.com/in/silviofelix32/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/SilvioFelix32"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://curriculo-silvio-felix32.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUserTie />
        </a>
      </Navigation>
    </Wrapper>
  );
}
