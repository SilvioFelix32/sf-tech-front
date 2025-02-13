import { styled } from "styled-components";

interface InputProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
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
  textAlign?: string;
  textTransform?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const Input = styled.input<InputProps>`
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  outline: ${({ outline }) => outline};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 6px;
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

Input.defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "36px",
  padding: "10px",
  margin: "0",
  outline: "none",
  borderColor: "transparent",
  textColor: "inherit",
  backgroundColor: "inherit",
  textAlign: "center",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: "400",
};
