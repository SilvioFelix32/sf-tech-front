import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 150px;
  border: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-radius: 16px;
  transition: width 0.3s ease-in-out, opacity 0.17s ease-out;

  .Remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    font-weight: bold;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.tertiary};
    background-color: ${({ theme }) => theme.colors.background};
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    border: none;
  }

  .Add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    font-weight: bold;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.tertiary};
    background-color: ${({ theme }) => theme.colors.background};
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
`;
