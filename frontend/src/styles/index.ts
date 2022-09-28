import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 85%;
  margin: 0 auto;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  width: 100%;
  height: 46%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
