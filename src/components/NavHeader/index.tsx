import Link from "next/link";
import { Wrapper, Text, LeftNav, RightNav } from "./styles";

export function NavHeader() {
  return (
    <Wrapper>
      <LeftNav>
        <Text>Contatos</Text>
        <Text>+55 (28) 999002893</Text>
        <Text>silviofelix32@hotmail.com</Text>
      </LeftNav>

      <RightNav>
        <Link href={"https://www.linkedin.com/in/silviofelix32/"}>
          <a target="_blank">Linkedin</a>
        </Link>
        <Link href={"https://github.com/SilvioFelix32"}>
          <a target="_blank">GitHub</a>
        </Link>
        <Link href={"https://curriculo-silvio-felix32.vercel.app/"}>
          <a target="_blank">Sobre</a>
        </Link>
      </RightNav>
    </Wrapper>
  );
}
