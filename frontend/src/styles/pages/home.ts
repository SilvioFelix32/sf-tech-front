import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 70%;
  margin: 0 auto;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
