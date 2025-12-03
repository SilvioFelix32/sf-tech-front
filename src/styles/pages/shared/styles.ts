import styled, { css } from "styled-components";

interface PageWrapperProps {
  width?: string;
  padding?: string;
  shadow?: "default" | "vertical";
}

export const PageWrapper = styled.div<PageWrapperProps>`
  width: ${({ width }) => width || "80%"};
  margin: 0 auto;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ padding }) => padding || "0"};
  min-height: calc(100vh - 140px);
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 768px) and (max-width: 1280px) {
    width: ${({ width }) => width || "85%"};
  }
  @media (min-width: 1281px) and (max-width: 2560px) {
    width: ${({ width }) => width || "80%"};
  }
`;

interface PageContentProps {
  direction?: "row" | "column";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";
  minHeight?: string;
  height?: string;
  padding?: string;
  fullWidth?: boolean;
}

export const PageContent = styled.div<PageContentProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  min-height: ${({ minHeight }) => minHeight || "auto"};
  height: ${({ height, minHeight }) => height || (minHeight ? "100%" : "auto")};
  flex: ${({ minHeight, height }) => (minHeight || height ? "1" : "0 1 auto")};
  padding: ${({ padding }) => padding || "10px"};
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "flex-start"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  overflow: ${({ minHeight, height }) => (minHeight || height ? "hidden" : "visible")};

  @media screen and (max-width: 1200px) {
    ${({ direction }) =>
      direction !== "column" &&
      css`
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
  }
`;

interface PageTitleProps {
  fontSize?: string;
  fontWeight?: number;
  textAlign?: "left" | "center" | "right";
  margin?: string;
  padding?: string;
  capitalize?: boolean;
}

export const PageTitle = styled.p<PageTitleProps>`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  text-align: ${({ textAlign }) => textAlign || "left"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  text-transform: ${({ capitalize }) => (capitalize ? "capitalize" : "none")};
`;

interface PageTextProps {
  fontSize?: string;
  fontWeight?: number;
  color?: "text" | "tertiary" | "primary";
  margin?: string;
  capitalize?: boolean;
}

export const PageText = styled.p<PageTextProps>`
  color: ${({ theme, color }) =>
    color === "tertiary"
      ? theme.colors.tertiary
      : color === "primary"
      ? theme.colors.primary
      : theme.colors.text};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  margin: ${({ margin }) => margin || "0"};
  text-transform: ${({ capitalize }) => (capitalize ? "capitalize" : "none")};
`;

interface PageButtonProps {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  disabled?: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: 600;

  ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${theme.colors.tertiary};
          color: ${theme.colors.primary};
          &:hover {
            filter: brightness(0.9);
          }
        `;
      case "secondary":
        return css`
          background-color: ${theme.colors.background};
          color: ${theme.colors.tertiary};
          border: 1px solid ${theme.colors.tertiary};
          &:hover {
            background-color: ${theme.colors.tertiary};
            color: ${theme.colors.primary};
          }
        `;
      case "outline":
      default:
        return css`
          background-color: ${theme.colors.background};
          color: ${theme.colors.tertiary};
          outline: 1px solid ${theme.colors.tertiary};
          &:hover {
            background-color: ${theme.colors.tertiary};
            color: ${theme.colors.primary};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

interface PageSectionProps {
  width?: string;
  padding?: string;
  margin?: string;
}

export const PageSection = styled.div<PageSectionProps>`
  width: ${({ width }) => width || "100%"};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

