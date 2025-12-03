import {
  BottomBar,
  ColumnTitle,
  Container,
  Description,
  Grid,
  List,
  ListItem,
  Wrapper,
} from "./styles";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Container>
        <Grid>
          <div>
            <ColumnTitle>Sobre a SF-Tech</ColumnTitle>
            <Description>
              Sua loja completa de tecnologia com os melhores produtos e preços
              do mercado.
            </Description>
          </div>

          <div>
            <ColumnTitle>Atendimento</ColumnTitle>
            <List>
              <ListItem>Central de Ajuda</ListItem>
              <ListItem>Política de Privacidade</ListItem>
              <ListItem>Termos de Uso</ListItem>
              <ListItem>Trocas e Devoluções</ListItem>
            </List>
          </div>

          <div>
            <ColumnTitle>Contato</ColumnTitle>
            <List>
              <ListItem>silvio.felix32@hotmail.com</ListItem>
              <ListItem>(28) 9990-02593</ListItem>
              <ListItem>Segunda à Sexta, 9h às 18h</ListItem>
            </List>
          </div>
        </Grid>

        <BottomBar>
          <p>
            &copy; {currentYear} SF-Tech Tecnologias. Todos os direitos
            reservados.
          </p>
        </BottomBar>
      </Container>
    </Wrapper>
  );
}
