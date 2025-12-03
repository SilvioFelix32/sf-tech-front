import styled from "styled-components";

interface ThemeProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export const Theme = styled.div<ThemeProps>`
  min-height: 100vh;
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "100%"};
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

Theme.defaultProps = {
  width: "100%",
  height: "auto",
};
