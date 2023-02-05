import styled from "styled-components";

export const Theme = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 75%;
  margin: 0 auto;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  width: 100%;
  min-height: 74vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const LeftContent = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
