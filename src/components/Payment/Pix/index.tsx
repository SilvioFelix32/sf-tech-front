import { MdPix } from "react-icons/md";
import Image from "next/image";
import { Wrapper, Content, Title } from "./styles";

export function PixForm() {
  return (
    <Wrapper>
      <Content>
        <Title>
          Pix <MdPix />
        </Title>
        <Image
          src="/images/pix_frame.png"
          alt="qrcode"
          width="300"
          height="300"
          priority
        ></Image>
      </Content>
    </Wrapper>
  );
}
