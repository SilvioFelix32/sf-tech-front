import styled from "styled-components";

export const Theme = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 76vh;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: none;
  outline: none;
`;
