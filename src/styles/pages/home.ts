import styled from "styled-components";

export const Theme = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 75%;
  margin: 0 auto;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 76.7vh;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftContent = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const MainSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  outline: solid 0.1px ${({ theme }) => theme.colors.quaternary};
  text-transform: uppercase;
  border: none;

  font-weight: 400;
  font-size: 0.8rem;
  padding: 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;