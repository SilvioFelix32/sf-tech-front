export default function Mobile() {
  return (
    <div
      style={{
        height: "200px",
        width: "100%",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "14px" }}>
        Site não disponível em dispositivos móveis
      </h1>
      <p style={{ fontSize: "12px" }}>
        Este site não foi desenvolvido para uso em dispositivos móveis. Acesse
        em um computador.
      </p>
    </div>
  );
}
