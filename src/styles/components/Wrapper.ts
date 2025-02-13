import styled from "styled-components";

interface WrapperProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  display: string;
  alignItems: string;
  justifyContent: string;
  flexWrap: string;
  width?: string;
  height?: string;
  margin?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  height: ${({ height }) => height};
  width: ${({ width }) => width};

  background: ${({ theme }) => theme.colors.background};
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 85%;
  }
  @media (min-width: 1281px) and (max-width: 2560px) {
    width: 80%;
  }
`;

Wrapper.defaultProps = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "100%",
  height: "100%",
  margin: "0 auto",
};
