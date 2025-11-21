import styled from "styled-components";

export const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
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

export const Content = styled.div`
  width: 100%;
  min-height: 75vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
