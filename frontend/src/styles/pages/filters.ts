import styled from "styled-components";

export const Theme = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
