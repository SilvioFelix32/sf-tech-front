import styled from "styled-components";

interface ThemeProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export const Theme = styled.div<ThemeProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: ${({ theme }) => theme.colors.background};
`;

Theme.defaultProps = {
  width: "100%",
  height: "100%",
};
