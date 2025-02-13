import styled from "styled-components";

interface TextProps extends React.ButtonHTMLAttributes<HTMLParagraphElement> {
  width?: string;
  height?: string;
}

export const Text = styled.div<TextProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: ${({ theme }) => theme.colors.background};
`;

Text.defaultProps = {
  width: "100%",
  height: "100%",
};
