import styled from "styled-components";
import {
  Header,
  HeaderTitle,
  Footer,
  PrimaryButton,
} from "../Category/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 4px 0 12px;
`;

export const TextBlock = styled.p`
  width: 100%;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.95;
  line-height: 1.5;
`;

  export { Header, HeaderTitle, Footer, PrimaryButton };