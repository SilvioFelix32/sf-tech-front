import { styled } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  outline?: string;
  borderColor?: string;
  textColor?: string;
  backgroundColor?: string;
  textTransform?: string;
  transition?: string;
}

export const Button = styled.button<ButtonProps>`
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};

  text-transform: ${({ textTransform }) => textTransform};
  transition: ${({ transition }) => transition};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

Button.defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "10px",
  margin: "0",
  outline: "none",
  borderColor: "transparent",
  textColor: "text",
  backgroundColor: "tertiary",
  textTransform: "uppercase",
  transition: "all 0.1s linear",
};
