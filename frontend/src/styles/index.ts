import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  width: 100%;
  height: 81%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
