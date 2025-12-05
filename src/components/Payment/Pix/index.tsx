import { useState, useEffect } from "react";
import { MdPix } from "react-icons/md";
import { QRCodeSVG } from "qrcode.react";
import { Wrapper, Content, Title, QRCodeContainer } from "./styles";

export function PixForm() {
  const [pixCode, setPixCode] = useState<string>("");

  useEffect(() => {
    // Gera um código PIX aleatório (apenas o código, sem endereço)
    const generateRandomPixCode = () => {
      const randomString = Math.random().toString(36).substring(2, 15);
      const timestamp = Date.now().toString(36);
      return `PIX-${randomString}-${timestamp}`.toUpperCase();
    };

    setPixCode(generateRandomPixCode());
  }, []);

  return (
    <Wrapper>
      <Content>
        <Title>
          Pix <MdPix />
        </Title>
        <QRCodeContainer>
          {pixCode && (
            <QRCodeSVG
              value={pixCode}
              size={250}
              level="H"
            />
          )}
        </QRCodeContainer>
      </Content>
    </Wrapper>
  );
}
