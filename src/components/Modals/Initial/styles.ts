import styled from "styled-components";
import {
  Wrapper as BaseWrapper,
  Header,
  HeaderTitle,
  HeaderDescription,
  Footer,
  PrimaryButton,
} from "../Category/styles";

export const Wrapper = styled(BaseWrapper).attrs({ as: "div" })`
  max-width: 560px;
`;

export { Header, HeaderTitle, HeaderDescription, Footer, PrimaryButton };

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 4px 0 12px;
`;

export const TextBlock = styled.p`
  width: 100%;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.95;
  line-height: 1.5;
  text-align: left;
`;
