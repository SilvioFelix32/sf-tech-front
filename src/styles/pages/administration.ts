import styled from "styled-components";

export const Theme = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Section = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: none;
  outline: none;
`;
