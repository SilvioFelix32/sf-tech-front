import { Wrapper, Theme, Content } from "../styles/pages/home";

export default function Mobile() {
  return (
    <Theme>
      <Wrapper
        style={{
          height: "70vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Content style={{ textAlign: "center", flexDirection: "column" }}>
          <h1>Site não disponível em dispositivos móveis</h1>
          <p>
            Este site foi desenvolvido para uso em computadores. Acesse em um
            navegador de desktop.
          </p>
        </Content>
      </Wrapper>
    </Theme>
  );
}
