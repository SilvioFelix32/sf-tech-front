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
        <Text>Linkedin</Text>
        <Text>GitHub</Text>
        <Text>Sobre</Text>
      </RightNav>
    </Wrapper>
  );
}
